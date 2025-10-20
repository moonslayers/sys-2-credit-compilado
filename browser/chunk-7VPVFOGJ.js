import {
  LoaderService,
  ToastService
} from "./chunk-PMGWFFGK.js";
import {
  LocalStorageService,
  environment
} from "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router
} from "./chunk-XKAAYCNZ.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-ZSRCSTKI.js";
import {
  Injectable,
  Injector,
  catchError,
  finalize,
  firstValueFrom,
  map,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/services/utils.service.ts
var _UtilsService = class _UtilsService {
  constructor(route, sanitizer, storage, sanatizer) {
    this.route = route;
    this.sanitizer = sanitizer;
    this.storage = storage;
    this.sanatizer = sanatizer;
  }
  copyOf(value) {
    return JSON.parse(JSON.stringify(value) ?? "{}");
  }
  /**
   * Valida los datos fiscales
   * @param credito
   * @param field
   * @returns
   */
  validarDatosFiscales(credito, field) {
    switch (field) {
      case "cp":
        let cp = this.getCpFiscal(credito);
        return cp === 0 || cp == void 0 ? false : true;
      case "regimen":
        let regimen = this.getRegimenFiscalCodeFromCredito(credito);
        return regimen === "0" || regimen == void 0 || regimen === "N/A" ? false : true;
      case "rfc":
        let rfc = this.rfcFromCredito(credito);
        return rfc === "N/A" || rfc == void 0 || rfc === "" ? false : true;
      case "razon":
        let razonSocial = this.nombreFiscalClienteFromCredito(credito);
        return razonSocial === "N/A" || razonSocial == void 0 || razonSocial === "" ? false : true;
      default:
        return true;
    }
  }
  /**
     * Retrieves the `id` parameter from the URL's paramMap as an `Observable`.
     * If the `id` is not present or is not a valid number, returns `undefined`.
     *
     * @returns An `Observable<number | undefined>` containing the parsed `id` or `undefined`.
     */
  idFromParams(key = "id") {
    return this.route.paramMap.pipe(map((params) => {
      const id = params.get(key);
      return this.parseNumberOrUndefined(id);
    }));
  }
  shortInputDateString(date) {
    if (!date)
      return "";
    const dateF = new Date(date);
    const year = dateF.getFullYear();
    const month = String(dateF.getMonth() + 1).padStart(2, "0");
    const day = String(dateF.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  /**
   * Parses a string into a number.
   * Returns `undefined` if the input is not a valid number.
   *
   * @param value The string to parse.
   * @returns The parsed number, or `undefined` if invalid.
   */
  parseNumberOrUndefined(value) {
    const parsed = Number(value);
    return isNaN(parsed) ? void 0 : parsed;
  }
  intOrNull(value) {
    if (typeof value == "number")
      return value;
    if (value == null || value == void 0)
      return null;
    const parsed = parseInt(value);
    if (!isNaN(parsed)) {
      return parsed;
    }
    return null;
  }
  fechaFormateada(date, anioDosNumeros = false) {
    if (!date)
      return;
    if (typeof date === "string") {
      date = date.substring(0, 10) + "T12:00:00Z";
    }
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime())) {
      return "";
    }
    const day = dateObj.getDate();
    const monthIndex = dateObj.getMonth() + 1;
    const year = anioDosNumeros ? dateObj.getFullYear().toString().substring(2, 4) : dateObj.getFullYear();
    return `${day.toString().padStart(2, "0")}/${monthIndex.toString().padStart(2, "0")}/${year}`;
  }
  sanitazeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  fileUrl(fileUrl) {
    if (!fileUrl)
      return;
    const userLogin = this.storage.getUser();
    const url = environment.api_url + "/api/files/documents/download/" + userLogin.file_token + "?url=" + encodeURIComponent(fileUrl);
    return url;
  }
  fileUrlInLine(fileUrl) {
    if (!fileUrl)
      return;
    const userLogin = this.storage.getUser();
    const url = environment.api_url + "/api/files/documents/get/" + userLogin.file_token + "?url=" + encodeURIComponent(fileUrl);
    return url;
  }
  openUrlInline(fileUrl) {
    if (!fileUrl)
      return;
    window.open(this.fileUrlInLine(fileUrl), "_blank");
  }
  fileUrlInLineSanatized(fileUrl) {
    if (!fileUrl)
      return;
    const userLogin = this.storage.getUser();
    const url = environment.api_url + "/api/files/documents/get/" + userLogin.file_token + "?url=" + encodeURIComponent(fileUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  isNumber(value) {
    return typeof value === "number" && !isNaN(value);
  }
  isISODateString(value) {
    if (typeof value !== "string") {
      return false;
    }
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
    const shortDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const dateTimeRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) ([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (!isoDateRegex.test(value) && !shortDateRegex.test(value) && !dateTimeRegex.test(value)) {
      return false;
    }
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
  /**
   * Convierte un Date o string a formato datetime de MySQL (YYYY-MM-DD HH:MM:SS)
   * @param date - Fecha a convertir (Date object o string válido)
   * @returns String en formato datetime de MySQL o null si la fecha no es válida
   */
  toMySQLDateTime(date) {
    try {
      const dateObj = typeof date === "string" ? new Date(date) : date;
      if (isNaN(dateObj.getTime())) {
        return null;
      }
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, "0");
      const day = String(dateObj.getDate()).padStart(2, "0");
      const hours = String(dateObj.getHours()).padStart(2, "0");
      const minutes = String(dateObj.getMinutes()).padStart(2, "0");
      const seconds = String(dateObj.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } catch (error) {
      console.error("Error converting date to MySQL format:", error);
      return null;
    }
  }
  keysOf(data) {
    return Object.keys(data);
  }
  fileFromInputEvent(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      console.error("No file selected");
      return null;
    }
    return input.files[0];
  }
  cleanString(input) {
    const normalized = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const cleaned = normalized.replace(/[^a-zA-Z0-9 _-]/g, "");
    return cleaned.trim();
  }
  nombreClienteFromDatosPersonales(dp, model) {
    if (!dp)
      return "N/A";
    if (!dp.nombre) {
      console.error(dp, model);
    }
    let nombres = dp.nombre.trim();
    let apellidos = (dp.apellido_paterno?.trim() ?? "") + " " + (dp.apellido_materno ?? "");
    if (!nombres.includes(apellidos)) {
      nombres += " " + apellidos.trim();
    }
    return nombres.toUpperCase();
  }
  nombreClienteFromDatosPersonales2(dp) {
    if (!dp)
      return "N/A";
    const nombres = dp.nombre.trim();
    const apellidoPaterno = dp.apellido_paterno?.trim() ?? "";
    const apellidoMaterno = dp.apellido_materno?.trim() ?? "";
    const apellidos = [apellidoPaterno, apellidoMaterno].filter((a) => a).join(" ");
    let nombreCompleto = nombres;
    if (apellidos && !nombres.includes(apellidos)) {
      nombreCompleto += " " + apellidos;
    }
    return nombreCompleto;
  }
  nombreSolicitanteFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const rl = credito?.datos_personas_morales?.representante_legal;
    if (pf) {
      return this.nombreClienteFromDatosPersonales(pf);
    }
    return this.nombreClienteFromDatosPersonales(rl);
  }
  idClienteFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return pf.id;
    }
    return pm?.cliente_id ?? pm?.id;
  }
  anioFromCredito(credito) {
    if (!credito?.fecha_convenio)
      return;
    return new Date(credito.fecha_convenio).getFullYear();
  }
  anioFromFecha(fecha) {
    if (!fecha)
      return;
    return new Date(fecha).getFullYear();
  }
  emailFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return pf.email;
    }
    return pm?.email;
  }
  domicilioParticularFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return this.domicilioFromDatosModel(pf);
    }
    return this.domicilioParticularFromPm(pm);
  }
  domicilioFiscalFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return this.domicilioFromDatosModel(pf);
    }
    return this.domicilioFromDatosModel(pm);
  }
  primerTelefonoFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return pf.telefonos_personales?.length ? pf.telefonos_personales[0].numero : void 0;
    }
    return pm?.telefonos?.length ? pm.telefonos[0].numero : void 0;
  }
  primerTelefonoFromDatosPersonales(dp) {
    const pf = dp;
    return pf?.telefonos_personales?.length ? pf.telefonos_personales[0].numero : void 0;
  }
  primerActividadEconomicaFromCredito(credito) {
    const pf = credito?.datos_persona_fisica;
    const pm = credito?.datos_personas_morales;
    if (pf && pf.negocios?.negocios_actividades_economicas?.length) {
      return pf.negocios.negocios_actividades_economicas[0].actividades_economicas?.subgrupo;
    }
    if (pm && pm.personas_morales_actividades_economicas?.length) {
      return pm.personas_morales_actividades_economicas[0].actividades_economicas?.subgrupo;
    }
    return;
  }
  destinoCredito(credito) {
    if (!credito?.inversiones_programas?.inversion_tipos)
      return;
    let detalles = [];
    credito.inversiones_programas.inversion_tipos.forEach((tipo) => {
      detalles = [...detalles, ...tipo.inversiones_tipos_detalles ?? []];
    });
    return detalles.map((detalle) => detalle.nombre).join(", ");
  }
  primerTelefonoFromTelefonos(telefonos) {
    if (!telefonos?.length)
      return;
    return telefonos[0].numero;
  }
  nombreComercialFromCredito(credito) {
    const pf = credito?.datos_persona_fisica;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return !!pf.negocios?.nombre ? pf.negocios.nombre : this.nombreClienteFromDatosPersonales(pf.datos_personales);
    }
    return (pm?.nombre_comercial ?? "n/a").toUpperCase();
  }
  nombreClienteFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return this.nombreClienteFromDatosPersonales(pf, credito);
    }
    return (pm?.razon_social ?? "n/a").toUpperCase();
  }
  nombreFiscalClienteFromCredito(credito) {
    let datos_fiscales = this.getDatosFiscalesFromCredito(credito);
    if (!datos_fiscales) {
      return "N/A";
    }
    const lista = [
      (datos_fiscales.primer_nombre || "").toUpperCase(),
      (datos_fiscales.segundo_nombre || "").toUpperCase(),
      (datos_fiscales.primer_apellido || "").toUpperCase(),
      (datos_fiscales.segundo_apellido || "").toUpperCase()
    ].filter((item) => item !== null && item !== void 0 && item !== "");
    return `${lista.join(" ")}`.trim();
  }
  nombreClienteFromApoyo(apoyo) {
    const pf = apoyo?.datos_personales;
    if (!pf)
      return "";
    return this.nombreClienteFromDatosPersonales(pf);
  }
  municipioFromCredito(credito) {
    if (!credito)
      return "";
    const pf = credito.datos_persona_fisica;
    const pm = credito.datos_personas_morales;
    if (pf) {
      const municipio2 = pf.datos_personales?.ciudades?.nombre;
      const localidad2 = pf.datos_personales?.localidad;
      if (municipio2 && municipio2 !== "")
        return municipio2;
      if (localidad2)
        return localidad2;
    }
    const municipio = pm?.ciudades?.nombre;
    const localidad = pm?.localidad;
    if (municipio && municipio !== "")
      return municipio;
    if (localidad)
      return localidad;
    return credito.sucursales?.nombre;
  }
  folioFromCredito(credito) {
    const pf = credito?.productos_financieros;
    if (!pf)
      return "";
    return (pf.alias.substring(0, 3) + pf.id + "-" + credito.id).toUpperCase();
  }
  folioOriginalFromCredito(credito) {
    if (!credito?.folio)
      return void 0;
    const folioOriginal = credito.folio.replace(/(R)+$/, "");
    return folioOriginal;
  }
  nombreNegocioFromCredito(credito) {
    const pf = credito?.datos_persona_fisica;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return pf.negocios?.nombre && pf.negocios.no_exterior !== "N/A" ? pf.negocios.nombre.toUpperCase() : this.nombreClienteFromDatosPersonales(pf.datos_personales);
    }
    return (pm?.nombre_comercial ?? pm?.razon_social ?? "").toUpperCase();
  }
  getRazonSocialFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return this.nombreClienteFromDatosPersonales(pf);
    }
    const { datos_fiscales } = pm ?? {};
    if (datos_fiscales) {
      return `${datos_fiscales.primer_nombre}`.trim();
    }
    return pm?.razon_social ?? "N/A";
  }
  rfcFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return pf?.datos_fiscales?.rfc ?? "N/A";
    }
    return pm?.datos_fiscales?.rfc ?? "N/A";
  }
  getCp(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      let cp2 = pf?.datos_fiscales?.codigo_postal ?? 0;
      return `${cp2}`;
    }
    let cp = pm?.codigo_postal ?? 0;
    return `${cp}`;
  }
  getCpFiscal(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    let cp = 0;
    if (pf) {
      cp = pf?.datos_fiscales?.codigo_postal ?? 0;
      return cp;
    }
    cp = pm?.datos_fiscales?.codigo_postal ?? 0;
    return cp;
  }
  // 601 --> Persona Moral
  // 612 --> Persona Fisica
  getRegimenFiscalCodeFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    let regimen = 0;
    if (pf) {
      regimen = pf?.datos_fiscales?.regimen_fiscal_sat ?? 0;
      return `${regimen}`;
    }
    regimen = pm?.datos_fiscales?.regimen_fiscal_sat ?? 0;
    return `${regimen}`;
  }
  getDatosGeneralesFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return pf;
    }
    return pm;
  }
  getDatosFiscalesFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return pf.datos_fiscales;
    }
    return pm?.datos_fiscales;
  }
  getFacturacionDetalleFromCredito(credito) {
    return credito?.facturacion_detalle;
  }
  existeFactura(factDetalle, tipo) {
    const factura = factDetalle.find((factura2) => factura2.tipo_factura === tipo && factura2.status_proceso === "Completo");
    if (factura) {
      return true;
    }
    return false;
  }
  existeFacturaPorAbonoId(factDetalle, abonoId) {
    const factura = factDetalle.find((factura2) => factura2.abono_id === abonoId && factura2.status_proceso === "Completo");
    if (factura) {
      return true;
    }
    return false;
  }
  /**
   * regresa el nombre del usuario si es una relacion de laravel o null de otra forma
   * @param {number|null|Usuario} user
   * @returns {string|null}
   */
  nameOf(user) {
    if (!user)
      return null;
    if (typeof user == "number")
      return null;
    return user.nombre;
  }
  /**
   * regresa el nombre completo del usuario si es una relacion de laravel o null de otra forma
   * @param {number|null|Usuario} user
   * @returns {string|null}
   */
  fullNameOf(user) {
    if (!user)
      return null;
    if (typeof user == "number")
      return null;
    return user.nombre;
  }
  pagosVencidos(credito) {
    if (!credito)
      return 0;
    if (!credito.estado_cuenta)
      return 0;
    return credito.estado_cuenta.mensualidades_vencidas;
  }
  creditoStatus(credito, estadoCuenta, fecha) {
    if (credito?.estado == "CANCELADO") {
      return "CANCELADO";
    }
    if (!fecha) {
      fecha = /* @__PURE__ */ new Date();
    }
    fecha = new Date(fecha);
    if (!credito)
      return "";
    if (!estadoCuenta && credito.estado_cuenta) {
      estadoCuenta = credito.estado_cuenta;
    }
    let creditoStatus = credito.estado;
    if (credito.estado == "ACTIVO") {
      creditoStatus = "CARTERA";
    }
    if ((estadoCuenta?.mensualidades_vencidas ?? 0) >= 3) {
      creditoStatus = "VENCIDO";
    }
    if (estadoCuenta?.total_a_liquidar == 0 || credito.monto_autorizado && (estadoCuenta?.capital_pagado ?? 0) >= credito.monto_autorizado) {
      creditoStatus = "SALDADO";
    }
    if (credito.estado == "FINALIZADO" && (credito.folio_reestructura || this.esReestructura(credito?.folio))) {
      creditoStatus = "SALDADO POR REESTRUCTURA";
    }
    if (credito.credito_comprobaciones?.length || credito.comprobacion_total_s2c) {
      const todas = [...credito.credito_comprobaciones ?? [], ...credito.comprobacion_total_s2c?.credito_comprobaciones ?? []];
      const totalComprobado = todas.filter((c) => c.fecha_comprobacion && new Date(c.fecha_comprobacion) <= fecha).reduce((acc, item) => acc + +item.monto, 0) + 5e-4;
      if (totalComprobado >= +(credito.comprobacion_total_s2c?.capital ?? credito.monto_autorizado ?? 0) && (estadoCuenta?.total_a_liquidar ?? 0) <= 0)
        creditoStatus = "FINALIZADO";
    }
    if (credito.juridicos) {
      creditoStatus += " - " + credito.juridicos.estado;
    }
    if (credito.creditos_despachos && credito.creditos_despachos.length > 0) {
      const despacho = this.despachoActualFromCredito(credito, /* @__PURE__ */ new Date());
      if (despacho) {
        creditoStatus += " - " + (despacho.despachos?.nombre ?? "");
      }
    }
    return creditoStatus;
  }
  esReestructura(folio) {
    if (!folio)
      return false;
    if (folio[folio.length - 1].toUpperCase() == "R")
      return true;
    return false;
  }
  localDelete(list, row) {
    if (!list)
      return;
    list.splice(list.indexOf(row), 1);
  }
  uniqueKeys(data, key) {
    return Array.from(new Set(data.map((row) => row[key])));
  }
  fuenteInformacionFromCredito(credito) {
    const pf = credito?.datos_persona_fisica?.negocios;
    const pm = credito?.datos_personas_morales;
    return pf?.fuente_informacion ?? pm?.fuente_informacion ?? "";
  }
  edadFromDatosPersonales(dp) {
    if (!dp)
      return 0;
    const hoy = /* @__PURE__ */ new Date();
    const fechaNacimiento = new Date(dp.fecha_nacimiento);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const m = hoy.getMonth() - fechaNacimiento.getMonth();
    if (m < 0 || m === 0 && hoy.getDate() < fechaNacimiento.getDate()) {
      edad--;
    }
    return edad;
  }
  totalFromCredito(credito) {
    if (credito?.monto_autorizado)
      return credito.monto_autorizado;
    if (!credito || !credito.inversiones_programas || !credito.inversiones_programas.inversion_tipos)
      return 0;
    return credito.inversiones_programas.inversion_tipos.reduce((acc, tipo) => acc + this.totalFromTipo(tipo), 0);
  }
  totalSolicitudApoyo(apoyo) {
    return apoyo.solicitudes_apoyos_modalidades?.reduce((acc1, mod) => acc1 + (mod.solicitudes_apoyos_modalidades_cotizaciones?.reduce((acc, cot) => acc + cot.monto, 0) ?? 0), 0) ?? 0;
  }
  totalFromInvesionProgramaCredito(credito) {
    if (!credito || !credito.inversiones_programas || !credito.inversiones_programas.inversion_tipos) {
      return +(credito?.monto_autorizado ?? 0);
    }
    return credito.inversiones_programas.inversion_tipos.reduce((acc, tipo) => acc + this.totalFromTipo(tipo), 0);
  }
  totalFromTipo(tipo) {
    if (!tipo)
      return 0;
    if (!tipo.inversiones_tipos_detalles)
      return 0;
    return tipo.inversiones_tipos_detalles.reduce((acc, detalle) => acc + detalle.monto_solicitado, 0);
  }
  /**
   * Construye una cadena de domicilio a partir de un objeto de datos personales.
   *
   * @param {{calle: string, no_exterior: string, localidad: string, no_interior: string|null, colonia: string, codigo_postal: string, ciudades?: Ciudad}} [dp] - Objeto con datos de domicilio.
   * @returns {string} - La cadena de domicilio en mayúsculas, o una cadena vacía si los datos son inválidos.
   */
  domicilioFromDatosModel(dp) {
    if (!dp)
      return "";
    const calle = dp.calle ? dp.calle : "";
    const ciudadNombre = dp.ciudades?.nombre ?? dp.localidad ?? "";
    const estadoNombre = dp.ciudades?.estados?.nombre?.trim() || "BAJA CALIFORNIA";
    const noExterior = dp.no_exterior ? "NO. " + dp.no_exterior : "";
    const colonia = dp.colonia ? dp.colonia : "";
    const no_interior = dp.no_interior ? "NO. INTERIOR " + dp.no_interior : "";
    const codigoPostal = dp.codigo_postal ? "C.P. " + String(dp.codigo_postal) : "";
    const domicilioFull = [calle, noExterior, no_interior, colonia, codigoPostal, ciudadNombre, estadoNombre].filter((v) => v != "").join(", ").toUpperCase();
    return domicilioFull;
  }
  domicilioParticularFromPm(pm) {
    if (!pm)
      return;
    const rl = pm.representante_legal;
    const calle = pm.calle_particular ?? pm.representante_legal?.calle ?? "";
    const ciudadNombre = pm.ciudades ? pm.ciudades.nombre : pm.localidad ? pm.localidad : "";
    const noExterior = !!(pm.no_exterior_particular ?? rl?.no_exterior) ? "NO. " + (pm.no_exterior_particular ?? rl?.no_exterior) : "";
    const colonia = !!(pm.colonia_particular ?? rl?.colonia) ? pm.colonia_particular ?? rl?.colonia : "";
    const no_interior = !!(pm.no_interior_particular ?? rl?.no_interior) ? "NO. INTERIOR " + (pm.no_interior_particular ?? rl?.no_interior) : "";
    const codigoPostal = !!(pm.codigo_postal_particular ?? rl?.codigo_postal) ? "C.P. " + (pm.codigo_postal_particular ?? rl?.codigo_postal) : "";
    const domicilioFull = [calle, noExterior, no_interior, colonia, codigoPostal, ciudadNombre].filter((v) => v != "").join(", ").toUpperCase();
    return domicilioFull;
  }
  /**
   * Extrae y concatena los números de teléfono personales de un objeto DatoPersonal.
   *
   * @param {DatoPersonal|undefined} dp - Objeto DatoPersonal con información de teléfonos.
   * @returns {string|undefined} - Cadena con los números de teléfono separados por comas, o undefined si no hay datos.
   */
  numerosTelefonicosFromDatosPersonalesContrato(dp) {
    if (!dp || !dp.telefonos_personales)
      return void 0;
    return dp.telefonos_personales.map((item) => item.numero).join(", ");
  }
  numerosTelefonicosFromDatosPersonaMoralContrato(dm) {
    if (!dm || !dm.telefonos)
      return void 0;
    return dm.telefonos.map((item) => item.numero).join(", ");
  }
  telefonosString(credito) {
    if (!credito)
      return "";
    let telefonos = [];
    if (credito.datos_personas_morales) {
      return [...credito.datos_personas_morales.telefonos?.map((t) => t.numero) ?? []].join(",");
    }
    if (credito.datos_persona_fisica?.datos_personales && credito.datos_persona_fisica.datos_personales.telefonos_personales) {
      return [...credito.datos_persona_fisica.datos_personales.telefonos_personales.map((t) => t.numero)].join(",");
    }
    return "";
  }
  despachoActualFromCredito(credito, fechaFin) {
    if (!credito || !credito.creditos_despachos?.length)
      return;
    return credito.creditos_despachos?.filter((c) => new Date(c.fecha_inicio) <= fechaFin && (!c.fecha_fin || new Date(c.fecha_fin) >= fechaFin))?.at(-1);
  }
  /**
   * Calcula la distancia de Levenshtein entre dos cadenas.
   * La distancia de Levenshtein es el número mínimo de operaciones (inserción, eliminación o sustitución)
   * necesarias para transformar una cadena en otra.
   *
   * @param {string} source - Cadena de origen.
   * @param {string} target - Cadena de destino.
   * @returns {number} - La distancia de Levenshtein entre las dos cadenas.
   */
  levenshteinDistance(source, target) {
    const distanceMatrix = this.initializeDistanceMatrix(source.length, target.length);
    this.fillInitialDistances(distanceMatrix, source.length, target.length);
    this.calculateDistances(distanceMatrix, source, target);
    return distanceMatrix[target.length][source.length];
  }
  /**
   * Calcula la puntuación de similitud entre dos nombres utilizando una combinación de
   * coincidencia exacta, coincidencia parcial y la distancia de Levenshtein.
   *
   * @param {string} nombreBusqueda - El nombre que se está buscando.
   * @param {string} nombre - El nombre con el que se compara.
   * @returns {number} - Puntuación de similitud entre 0 y 100.
   */
  calcularPuntuacionSimilitud(nombreBusqueda, nombre) {
    const nombreBusquedaUpper = this.normalizarNombre(nombreBusqueda);
    const nombreUpper = this.normalizarNombre(nombre);
    if (this.esCoincidenciaExacta(nombreUpper, nombreBusquedaUpper)) {
      return 100;
    }
    if (this.esCoincidenciaParcial(nombreUpper, nombreBusquedaUpper)) {
      return 80;
    }
    return this.calcularSimilitudLevenshtein(nombreUpper, nombreBusquedaUpper);
  }
  /**
   * Normaliza un nombre convirtiéndolo a mayúsculas.
   *
   * @param {string} nombre - El nombre a normalizar.
   * @returns {string} - El nombre en mayúsculas.
   */
  normalizarNombre(nombre) {
    return nombre.toUpperCase();
  }
  /**
   * Verifica si dos nombres son una coincidencia exacta.
   *
   * @param {string} nombre1 - Primer nombre a comparar.
   * @param {string} nombre2 - Segundo nombre a comparar.
   * @returns {boolean} - `true` si los nombres son iguales, `false` en caso contrario.
   */
  esCoincidenciaExacta(nombre1, nombre2) {
    return nombre1 === nombre2;
  }
  /**
   * Verifica si dos nombres tienen una coincidencia parcial (uno contiene al otro).
   *
   * @param {string} nombre1 - Primer nombre a comparar.
   * @param {string} nombre2 - Segundo nombre a comparar.
   * @returns {boolean} - `true` si hay una coincidencia parcial, `false` en caso contrario.
   */
  esCoincidenciaParcial(nombre1, nombre2) {
    return nombre1.includes(nombre2) || nombre2.includes(nombre1);
  }
  /**
   * Calcula la similitud entre dos nombres utilizando la distancia de Levenshtein.
   *
   * @param {string} nombre1 - Primer nombre a comparar.
   * @param {string} nombre2 - Segundo nombre a comparar.
   * @returns {number} - Puntuación de similitud basada en la distancia de Levenshtein.
   */
  calcularSimilitudLevenshtein(nombre1, nombre2) {
    const distancia = this.levenshteinDistance(nombre1, nombre2);
    const maxLength = Math.max(nombre1.length, nombre2.length);
    if (maxLength === 0) {
      return 100;
    }
    return (maxLength - distancia) / maxLength * 100;
  }
  /**
   * Inicializa una matriz de distancias con dimensiones (targetLength + 1) x (sourceLength + 1).
   * Todas las celdas se inicializan como `null`.
   *
   * @param {number} sourceLength - Longitud de la cadena de origen.
   * @param {number} targetLength - Longitud de la cadena de destino.
   * @returns {number[][]} - Matriz de distancias inicializada.
   */
  initializeDistanceMatrix(sourceLength, targetLength) {
    return Array(targetLength + 1).fill(null).map(() => Array(sourceLength + 1).fill(null));
  }
  /**
   * Llena la primera fila y la primera columna de la matriz de distancias con valores iniciales.
   * La primera fila representa la distancia de la cadena vacía a la cadena de origen.
   * La primera columna representa la distancia de la cadena vacía a la cadena de destino.
   *
   * @param {number[][]} matrix - Matriz de distancias.
   * @param {number} sourceLength - Longitud de la cadena de origen.
   * @param {number} targetLength - Longitud de la cadena de destino.
   */
  fillInitialDistances(matrix, sourceLength, targetLength) {
    for (let i = 0; i <= sourceLength; i++) {
      matrix[0][i] = i;
    }
    for (let j = 0; j <= targetLength; j++) {
      matrix[j][0] = j;
    }
  }
  /**
   * Calcula las distancias para el resto de la matriz utilizando el algoritmo de Levenshtein.
   * Para cada celda, se calcula el costo mínimo entre inserción, eliminación y sustitución.
   *
   * @param {number[][]} matrix - Matriz de distancias.
   * @param {string} source - Cadena de origen.
   * @param {string} target - Cadena de destino.
   */
  calculateDistances(matrix, source, target) {
    for (let j = 1; j <= target.length; j++) {
      for (let i = 1; i <= source.length; i++) {
        if (target[j - 1] === source[i - 1]) {
          matrix[j][i] = matrix[j - 1][i - 1];
        } else {
          matrix[j][i] = Math.min(
            matrix[j - 1][i] + 1,
            // Inserción
            matrix[j][i - 1] + 1,
            // Eliminación
            matrix[j - 1][i - 1] + 1
            // Sustitución
          );
        }
      }
    }
  }
  /**
  * Calcula el hash SHA-256 de un archivo proporcionado.
  *
  * @param file - El archivo del cual se calculará el hash.
  * @returns Una promesa que resuelve al hash del archivo en formato hexadecimal (string).
  */
  calculateFileHash(file) {
    return __async(this, null, function* () {
      const buffer = yield file.arrayBuffer();
      const hashBuffer = yield crypto.subtle.digest("SHA-256", buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
      return hashHex;
    });
  }
};
_UtilsService.\u0275fac = function UtilsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UtilsService)(\u0275\u0275inject(ActivatedRoute), \u0275\u0275inject(DomSanitizer), \u0275\u0275inject(LocalStorageService), \u0275\u0275inject(DomSanitizer));
};
_UtilsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilsService, factory: _UtilsService.\u0275fac, providedIn: "root" });
var UtilsService = _UtilsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ActivatedRoute }, { type: DomSanitizer }, { type: LocalStorageService }, { type: DomSanitizer }], null);
})();

// src/app/services/api/api-service.service.ts
var _ApiServiceService = class _ApiServiceService {
  constructor(http, localstorage, loader, dialog, router, toast) {
    this.http = http;
    this.localstorage = localstorage;
    this.loader = loader;
    this.dialog = dialog;
    this.router = router;
    this.toast = toast;
    this.activeHttpRequests = 0;
    this.apiUrl = environment.api_url;
  }
  /**
   * Creates HTTP headers containing the authentication token.
   * The token is retrieved from local storage and added as a
   * `Bearer` token in the `Authorization` header.
   *
   * @returns {HttpHeaders} HTTP headers including the `Authorization` header with the token.
   */
  createAuthHeaders() {
    const token = this.localstorage.getUserToken();
    let perfil = null;
    if (this.localstorage.isUserLogged()) {
      perfil = this.localstorage.getPerfil();
    }
    return new HttpHeaders({
      accessToken: token,
      "tipo-usuario-id": perfil?.id ?? ""
    });
  }
  postFormData(endpoint, data, loader = false) {
    const url = `${this.apiUrl}/${endpoint}`;
    if (loader) {
      this.loader.toggleLoader(true);
    }
    const headers = this.createAuthHeaders();
    return this.http.post(url, data, { headers }).pipe(catchError((error) => this.catchErrorOnObservable(error)), tap((response) => {
      if (response.status) {
        this.toast.show({
          message: response.message ?? "Todo correcto."
        });
      }
    }), finalize(() => {
      if (loader) {
        this.loader.toggleLoader(false);
      }
    }));
  }
  /**
   * Sends a POST request to the specified API endpoint with optional loading state management.
   * This method includes the `Authorization` header with the token and can show a loader during the request.
   *
   * @param {string} endpoint - The API endpoint to send the POST request to.
   * @param {T} [data={}] - The data to send with the POST request. Defaults to an empty object.
   * @param {boolean} [loader=true] - Whether to show a loader during the request. Defaults to `true`.
   * @returns {Observable<StandarResponse>} Observable emitting the response from the API with status and message.
   */
  post(endpoint, data = void 0, extraData = {}, loader = false) {
    const url = `${this.apiUrl}/${endpoint}`;
    if (loader) {
      this.loader.toggleLoader(true);
    }
    const headers = this.createAuthHeaders();
    const dataPost = __spreadValues({
      data
    }, extraData);
    return this.http.post(url, dataPost, { headers }).pipe(catchError((error) => this.catchErrorOnObservable(error)), tap((response) => {
      if (response.status) {
        this.toast.show({
          message: response.message ?? "Todo correcto."
        });
      }
    }), finalize(() => {
      if (loader) {
        this.loader.toggleLoader(false);
      }
    }));
  }
  /**
   * Sends an HTTP GET request to the specified endpoint with optional query parameters.
   *
   * @template T The expected response type.
   * @param {string} endpoint - The API endpoint to send the request to.
   * @param {{ [key: string]: any }} [queryParams={}] - An object containing query parameters to append to the request.
   * @param {boolean} [loader=true] - Whether to show a loading indicator during the request.
   * @returns {Observable<StandarResponse<T>>} An observable that emits the server's response.
   */
  get(endpoint, queryParams = {}, loader = true) {
    const url = `${this.apiUrl}/${endpoint}`;
    if (loader) {
      this.loader.toggleLoader(true);
    }
    const headers = this.createAuthHeaders();
    let params = new HttpParams();
    for (const key in queryParams) {
      if (queryParams.hasOwnProperty(key) && queryParams[key] !== void 0 && queryParams[key] !== null) {
        const value = queryParams[key];
        if (typeof value == "object") {
          params = params.set(key, JSON.stringify(value));
        } else {
          params = params.set(key, queryParams[key]);
        }
      }
    }
    return this.http.get(url, { headers, params }).pipe(catchError((error) => this.catchErrorOnObservable(error)), finalize(() => {
      if (loader) {
        this.loader.toggleLoader(false);
      }
    }));
  }
  /**
   * Sends an HTTP PUT request to the specified endpoint with the provided data.
   *
   * @template T The expected response type.
   * @param {string} endpoint - The API endpoint to send the request to.
   * @param {any} data - The payload to send in the request body.
   * @param {boolean} [loader=true] - Whether to show a loading indicator during the request.
   * @returns {Observable<StandarResponse<T>>} An observable that emits the server's response.
   */
  put(endpoint, data, loader = false, toast = true) {
    const url = `${this.apiUrl}/${endpoint}`;
    if (loader) {
      this.loader.toggleLoader(true);
    }
    const headers = this.createAuthHeaders();
    return this.http.put(url, { data }, { headers }).pipe(catchError((error) => this.catchErrorOnObservable(error)), tap((response) => {
      if (response.status) {
        if (this.toast) {
          this.toast.show({
            message: response.message
          });
        }
      }
    }), finalize(() => {
      if (loader) {
        this.loader.toggleLoader(false);
      }
    }));
  }
  /**
   * Sends an HTTP DELETE request to the specified endpoint.
   *
   * @template T The expected response type.
   * @param {string} endpoint - The API endpoint to send the request to.
   * @param {boolean} [loader=true] - Whether to show a loading indicator during the request.
   * @returns {Observable<StandarResponse<T>>} An observable that emits the server's response.
   */
  delete(endpoint, params = void 0, loader = false) {
    const url = `${this.apiUrl}/${endpoint}`;
    if (loader) {
      this.loader.toggleLoader(true);
    }
    const headers = this.createAuthHeaders();
    return this.http.delete(url, { headers, params }).pipe(catchError((error) => this.catchErrorOnObservable(error)), tap((response) => {
      if (response.status) {
        this.toast.show({
          message: response.message
        });
      }
    }), finalize(() => {
      if (loader) {
        this.loader.toggleLoader(false);
      }
    }));
  }
  /**
   * Handles errors from HTTP requests without interrupting the data flow.
   * Returns an object with the same structure as a successful response but indicates failure.
   *
   * @param {HttpErrorResponse} error - The HTTP error response received.
   * @returns {{ estatus: boolean; data: null; message: string }} An object representing the error response.
   */
  catchErrorOnObservable(error) {
    switch (error.status) {
      case 401:
        this.dialog.show({
          title: "No autorizado",
          body: "La sesi\xF3n se cerr\xF3, inicie sesi\xF3n nuevamente para continuar.",
          tipo: "danger"
        });
        this.localstorage.deleteUser();
        this.router.navigate(["/login"]);
        break;
      case 403:
        this.dialog.show({
          title: "No tiene el permiso adecuado",
          body: error.error.message ?? error.message,
          tipo: "danger"
        });
        break;
      case 422:
        this.dialog.show({
          title: "Algo sali\xF3 mal",
          body: error.error.message ?? error.message ?? "Algo inesperado sucedio en el servidor, intente m\xE1s tarde o reporte a un t\xE9cnico.",
          tipo: "danger"
        });
        break;
      case 500:
        this.dialog.show({
          title: "Algo sali\xF3 mal",
          body: "Algo inesperado sucedi\xF3 en el servidor. Intente m\xE1s tarde y, si el problema persiste, consulte a un t\xE9cnico o administrador.",
          tipo: "danger"
        });
        break;
      default:
        this.dialog.show({
          title: "Algo salio mal",
          body: error.error?.message ?? "Algo inesperado sucedio en el servidor, intente m\xE1s tarde o reporte a un t\xE9cnico.",
          tipo: "danger"
        });
    }
    return of({
      status: false,
      message: error.message || "Error inesperado"
    });
  }
};
_ApiServiceService.\u0275fac = function ApiServiceService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiServiceService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(LocalStorageService), \u0275\u0275inject(LoaderService), \u0275\u0275inject(VanillaDialogService), \u0275\u0275inject(Router), \u0275\u0275inject(ToastService));
};
_ApiServiceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiServiceService, factory: _ApiServiceService.\u0275fac, providedIn: "any" });
var ApiServiceService = _ApiServiceService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiServiceService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: HttpClient }, { type: LocalStorageService }, { type: LoaderService }, { type: VanillaDialogService }, { type: Router }, { type: ToastService }], null);
})();

// src/app/services/cache.service.ts
var _CacheService = class _CacheService {
  constructor() {
    this.CACHE_PREFIX = "app_cache_";
    this.EXPIRATION_MINUTES = 2;
  }
  // Guardar datos en caché con timestamp
  set(key, data) {
    const cacheData = {
      timestamp: (/* @__PURE__ */ new Date()).getTime(),
      data
    };
    localStorage.setItem(`${this.CACHE_PREFIX}${key}`, JSON.stringify(cacheData));
  }
  // Obtener datos del caché (retorna null si expiró)
  get(key) {
    const cachedItem = localStorage.getItem(`${this.CACHE_PREFIX}${key}`);
    if (!cachedItem)
      return null;
    const parsedData = JSON.parse(cachedItem);
    const currentTime = (/* @__PURE__ */ new Date()).getTime();
    const expirationTime = this.EXPIRATION_MINUTES * 60 * 1e3;
    if (currentTime - parsedData.timestamp > expirationTime) {
      this.remove(key);
      return null;
    }
    return parsedData.data;
  }
  // Eliminar un elemento del caché
  remove(key) {
    localStorage.removeItem(`${this.CACHE_PREFIX}${key}`);
  }
  // Limpiar todo el caché de la app
  clear() {
    Object.keys(localStorage).filter((key) => key.startsWith(this.CACHE_PREFIX)).forEach((key) => localStorage.removeItem(key));
  }
};
_CacheService.\u0275fac = function CacheService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CacheService)();
};
_CacheService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CacheService, factory: _CacheService.\u0275fac, providedIn: "root" });
var CacheService = _CacheService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CacheService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/controllers/super.service.ts
var _SuperService = class _SuperService {
  constructor(injector) {
    this.injector = injector;
    this.model = "";
    this.columns = [];
    this.api = this.injector.get(ApiServiceService);
    this.storage = this.injector.get(LocalStorageService);
  }
  /**
  * Constructs the base URL for the API endpoint.
  *
  * @returns {string} The base URL for the API, combining the fixed path and the model name.
  */
  url() {
    return "api/" + this.model;
  }
  /**
   * Realiza una petición GET a la API para obtener un único registro del tipo `T` por su ID.
   *
   * Además de requerir un `id` numérico, permite personalizar la solicitud con parámetros
   * flexibles a través del tipo `SuperServiceAllParams<T>`, lo que posibilita incluir:
   * condiciones, relaciones, columnas específicas, paginación y más.
   *
   * @param id - El identificador numérico del registro a buscar.
   * @param params - Parámetros opcionales para personalizar la solicitud. Pueden ser:
   *   - Un objeto de tipo `SuperServiceOptions<T>`.
   *   - Un array con parámetros posicionales.
   *   - Un array de objetos genéricos como condiciones o filtros.
   *
   * @returns Una promesa que resuelve al objeto encontrado del tipo `T`, o `undefined` si no se encuentra.
   *
   * @example
   * // Ejemplo 1: Solo el ID
   * service.find(123);
   *
   * @example
   * // Ejemplo 2: ID + opciones con columnas específicas
   * service.find(123, {
   *   columns: ['id', 'name', 'email'],
   *   relations: ['user', 'role']
   * });
   *
   * @example
   * // Ejemplo 3: ID + condiciones y relaciones
   * service.find(123, [
   *   { key: 'status', operator: 'eq', value: 'active' }
   * ], ['user', 'role'], true, ['id', 'name']);
   *
   * @example
   * // Ejemplo 4: ID + columnas y loader
   * service.find(123, ['id', 'name', 'email'], true);
   */
  find(id, ...params) {
    return __async(this, null, function* () {
      const url = this.url() + "/" + id.toString();
      const queryParams = this.queryParamsFromSuperServiceParams(...params);
      return (yield firstValueFrom(this.api.get(url, queryParams, this.loaderFromParamas(params)))).data;
    });
  }
  /**
   * Realiza una petición GET a la API para obtener una lista de registros del tipo `T`.
   *
   * Esta función acepta múltiples formatos de parámetros gracias al tipo `SuperServiceAllParams<T>`,
   * lo que permite flexibilidad a la hora de enviar condiciones, paginación, relaciones, columnas, etc.
   *
   * @param params - Parámetros para personalizar la solicitud. Pueden ser:
   *   - Un objeto de tipo `SuperServiceOptions<T>` (similar a una llamada con `{}`).
   *   - Un array con parámetros posicionales (similar a llamadas con múltiples argumentos).
   *   - Un array de objetos genéricos como condiciones o filtros.
   *
   * @returns Una promesa que resuelve a un array de objetos del tipo `T`.
   *
   * @example
   * // Ejemplo 1: Usando `SuperServiceOptions<T>`
   * service.all({
   *   conditionals: { name: 'John' },
   *   relations: ['user', 'role'],
   *   columns: ['id', 'name'],
   *   loader: true
   * });
   *
   * @example
   * // Ejemplo 2: Usando parámetros posicionales (con paginación)
   * service.all([{ name: 'John' }], { page: 1, limit: 10 }, ['user', 'role'], {}, true, ['id', 'name']);
   *
   * @example
   * // Ejemplo 3: Usando condiciones en forma de array de objetos `Conditional[]`
   * service.all([
   *   { key: 'name', operator: 'eq', value: 'John' },
   *   { key: 'age', operator: 'gt', value: 30 }
   * ]);
   *
   * @example
   * // Ejemplo 4: Solo columnas y loader
   * service.all(['id', 'name', 'email'], true);
   */
  all(...params) {
    return __async(this, null, function* () {
      const queryParams = this.queryParamsFromSuperServiceParams(...params);
      queryParams.page = 1;
      queryParams.per_page = 999999;
      return (yield firstValueFrom(this.api.get(this.url(), queryParams, this.loaderFromParamas(params, true)))).data ?? [];
    });
  }
  /**
   * Crea un nuevo registro o restaura uno existente (si está marcado como eliminado lógicamente).
   *
   * Este método primero busca un registro que coincida con los datos proporcionados usando `this.get(...)`.
   * - Si encuentra un registro y tiene una propiedad `deleted_at` definida (eliminado lógicamente), lo restaura llamando a `this.switch(record, {}, loader)`.
   * - Si no encuentra ningún registro, crea uno nuevo llamando a `this.new(data, loader)`.
   *
   * @param data - Objeto parcial del tipo `T` usado para buscar o crear el registro.
   * @param loader - Indica si se debe mostrar un loader durante la operación (por defecto: `true`).
   *
   * @returns Una promesa que resuelve al registro encontrado y restaurado, al nuevo registro creado, o a `undefined` si no fue posible realizar ninguna de las dos acciones.
   *
   * @example
   * // Ejemplo 1: Crear o restaurar un usuario por nombre y email
   * const user = await service.createOrRestore({
   *   name: 'John Doe',
   *   email: 'john@example.com'
   * });
   *
   * @example
   * // Ejemplo 2: Desactivar loader
   * const user = await service.createOrRestore(
   *   { email: 'john@example.com' },
   *   false
   * );
   */
  createOrRestore(data, loader = true) {
    return __async(this, null, function* () {
      const res = yield this.get(data, void 0, [], {}, loader);
      if (res.data && res.data.length > 0) {
        const record = res.data[0];
        if (record && record.deleted_at) {
          yield this.switch(record, {}, loader);
        }
        return record;
      } else {
        return yield this.new(data, loader);
      }
    });
  }
  /**
   * Busca un registro existente que coincida con los datos proporcionados.
   * Si no se encuentra ninguno, crea un nuevo registro con esos datos.
   *
   * Este método primero realiza una búsqueda usando `this.get(data)` (que internamente
   * debería usar `all(...)` o una lógica similar para obtener registros que coincidan
   * con el objeto `data`). Si se encuentra al menos un resultado, devuelve el primero.
   * Si no, llama a `this.new(data)` para crear un nuevo registro.
   *
   * @param data - Un objeto parcial del tipo `T` que contiene los campos necesarios
   *               para buscar o crear un nuevo registro.
   *
   * @returns Una promesa que resuelve al registro encontrado o creado del tipo `T`,
   *          o `undefined` si no fue posible encontrar ni crear el registro.
   *
   * @example
   * // Ejemplo 1: Buscar o crear un usuario por nombre y email
   * const user = await service.findOrCreate({
   *   name: 'John Doe',
   *   email: 'john@example.com'
   * });
   *
   * @example
   * // Ejemplo 2: Usar solo campos parciales para buscar o crear
   * const product = await service.findOrCreate({
   *   sku: 'PROD-001'
   * });
   */
  findOrCreate(data) {
    return __async(this, null, function* () {
      const res = yield this.get(data);
      if (res.data && res.data.length > 0) {
        return res.data[0];
      } else {
        return this.new(data);
      }
    });
  }
  /**
   * Crea o actualiza un registro del tipo `T` según si el objeto `data` contiene un `id` válido.
   *
   * Si el objeto `data` contiene una propiedad `id` numérica y mayor que 0, se asume que
   * el registro ya existe y se llama al método `this.update(id, data)` para actualizarlo.
   *
   * Si no se proporciona un `id` válido, se asume que es un nuevo registro y se llama a
   * `this.new(data)` para crearlo.
   *
   * @param data - Un objeto parcial del tipo `T` que contiene los datos del registro.
   *               Si contiene un `id` numérico y positivo, se realizará una actualización.
   *
   * @returns Una promesa que resuelve al registro creado o actualizado del tipo `T`,
   *          o `undefined` si la operación falla.
   *
   * @example
   * // Ejemplo 1: Crear un nuevo registro (sin `id`)
   * const newUser = await service.createOrUpdate({
   *   name: 'John Doe',
   *   email: 'john@example.com'
   * });
   *
   * @example
   * // Ejemplo 2: Actualizar un registro existente (con `id`)
   * const updatedUser = await service.createOrUpdate({
   *   id: 123,
   *   name: 'John Doe Updated',
   *   email: 'john_new@example.com'
   * });
   */
  createOrUpdate(data, loader = true) {
    return __async(this, null, function* () {
      if ("id" in data && typeof data.id === "number" && data.id > 0) {
        const res = yield this.update(data.id, data, loader);
        return res.status ? data : void 0;
      } else {
        return this.new(data, loader);
      }
    });
  }
  /**
   * Obtiene el primer registro que coincide con los parámetros especificados.
   *
   * Este método utiliza internamente `this.get(...params)` para obtener una lista de registros
   * y devuelve el primer elemento del array resultante.
   *
   * @param params - Parámetros para personalizar la solicitud (condiciones, relaciones, columnas, etc.).
   *                 Acepta el mismo tipo de parámetros que `SuperServiceAllParams<T>`.
   *
   * @returns Una promesa que resuelve al primer registro del tipo `T` encontrado,
   *          o `undefined` si no hay resultados.
   *
   * @example
   * // Ejemplo 1: Obtener el primer registro
   * const firstUser = await service.first();
   *
   * @example
   * // Ejemplo 2: Obtener el primer registro que cumple una condición
   * const firstActiveUser = await service.first({ conditionals: { active: true } });
   *
   * @example
   * // Ejemplo 3: Usando condiciones avanzadas
   * const firstUserOver30 = await service.first([
   *   { key: 'age', operator: 'gt', value: 30 }
   * ]);
   */
  first(...params) {
    return __async(this, null, function* () {
      const res = (yield this.get(...params)).data ?? [];
      return res[0];
    });
  }
  /**
   * Obtiene el último registro que coincide con los parámetros especificados.
   *
   * Este método utiliza internamente `this.get(...params)` para obtener una lista de registros
   * y devuelve el último elemento del array resultante usando `Array.prototype.at(-1)`.
   *
   * @param params - Parámetros para personalizar la solicitud (condiciones, relaciones, columnas, etc.).
   *                 Acepta el mismo tipo de parámetros que `SuperServiceAllParams<T>`.
   *
   * @returns Una promesa que resuelve al último registro del tipo `T` encontrado,
   *          o `undefined` si no hay resultados.
   *
   * @example
   * // Ejemplo 1: Obtener el último registro
   * const lastUser = await service.last();
   *
   * @example
   * // Ejemplo 2: Obtener el último registro que cumple una condición
   * const lastActiveUser = await service.last({ conditionals: { active: true } });
   *
   * @example
   * // Ejemplo 3: Usando condiciones avanzadas
   * const lastUserOver30 = await service.last([
   *   { key: 'age', operator: 'gt', value: 30 }
   * ]);
   */
  last(...params) {
    return __async(this, null, function* () {
      const res = (yield this.get(...params)).data ?? [];
      return res.at(-1);
    });
  }
  /**
   * Realiza una petición GET a la API para obtener una lista de registros del tipo `T`.
   *
   * Este método acepta múltiples formatos de parámetros gracias al tipo `SuperServiceAllParams<T>`,
   * lo que permite flexibilidad a la hora de enviar condiciones, paginación, relaciones, columnas, etc.
   *
   * Si no se especifica `page` o `per_page` en los parámetros, se asignan valores por defecto:
   * - `page = 1`
   * - `per_page = 999`
   *
   * @param params - Parámetros para personalizar la solicitud. Pueden ser:
   *   - Un objeto de tipo `SuperServiceOptions<T>`
   *   - Un array con parámetros posicionales (similar a llamadas con múltiples argumentos)
   *   - Un array de objetos genéricos como condiciones o filtros
   *
   * @returns Una promesa que resuelve a un objeto de tipo `StandardResponse<T[]>` con los datos obtenidos.
   *
   * @example
   * // Ejemplo 1: Obtener todos los registros sin filtros
   * const response = await service.get();
   *
   * @example
   * // Ejemplo 2: Obtener registros con condiciones
   * const response = await service.get({
   *   conditionals: { name: 'John' },
   *   columns: ['id', 'name']
   * });
   *
   * @example
   * // Ejemplo 3: Usar condiciones con operadores avanzados
   * const response = await service.get([
   *   { key: 'age', operator: 'gt', value: 30 },
   *   { key: 'status', operator: 'eq', value: 'active' }
   * ]);
   *
   * @example
   * // Ejemplo 4: Usar paginación explícita
   * const response = await service.get({ page: 2, per_page: 20 });
   */
  get(...params) {
    return __async(this, null, function* () {
      const queryParams = this.queryParamsFromSuperServiceParams(...params);
      if (!queryParams.page) {
        queryParams.page = 1;
      }
      if (!queryParams.per_page) {
        queryParams.per_page = 999;
      }
      return firstValueFrom(this.api.get(this.url(), queryParams, this.loaderFromParamas(params, true)));
    });
  }
  /**
   * Crea un nuevo registro del tipo `T (generico)` en el servidor.
   *
   * Este método permite enviar datos de dos formas:
   * - Como un objeto parcial del tipo `T` (ideal para datos normales).
   * - Como un objeto de tipo `ModelFile<T>` que incluye un archivo adjunto (`File`), útil para formularios con imágenes o documentos.
   *
   * Si se proporciona un archivo, se envía mediante `FormData` con dos campos:
   * - `data`: Los datos del modelo serializados como JSON.
   * - `file`: El archivo adjunto (opcional).
   *
   * @param data - Datos para crear el registro. Puede ser:
   *   - Un objeto parcial del tipo `T` (sin `File`).
   *   - Un objeto `ModelFile<T>` que incluya un archivo opcional.
   * @param loader - Indica si se debe mostrar un loader durante la petición (por defecto: `true`).
   *
   * @returns Una promesa que resuelve al nuevo registro del tipo `T` creado por el servidor,
   *          o `undefined` si la operación falla.
   *
   * @example
   * // Ejemplo 1: Crear un registro sin archivo
   * const newUser = await service.new({
   *   name: 'John Doe',
   *   email: 'john@example.com'
   * });
   *
   * @example
   * // Ejemplo 2: Crear un registro con archivo
   * const newProduct = await service.new({
   *   data: {
   *     name: 'Producto con imagen',
   *     price: 19.99
   *   },
   *   file: fileInput // un objeto File del input del usuario
   * });
   */
  new(data, loader = true) {
    return __async(this, null, function* () {
      if (this.isModelFile(data)) {
        const formData = new FormData();
        formData.append("data", JSON.stringify(data.data));
        if (data.file) {
          formData.append("file", data.file);
        }
        return (yield firstValueFrom(this.api.postFormData(this.url(), formData, loader))).data;
      }
      return (yield firstValueFrom(this.api.post(this.url(), data, loader))).data;
    });
  }
  /**
   * Actualiza un registro existente del tipo `T` en el servidor.
   *
   * Este método acepta parámetros de dos formas:
   * - Como una tupla con estructura fija: `[id, data, loader?]`
   * - Como un array heterogéneo con los valores en cualquier orden: `[id, data, loader]`
   *
   * El método identifica automáticamente:
   * - El `id` del registro (número)
   * - Los datos a actualizar (`Partial<T & BaseModel>`)
   * - Si se debe mostrar un loader (`boolean`, opcional)
   *
   * @param params - Puede ser:
   *   - Una tupla con: `[id: number, data: Partial<T & BaseModel>, loader?: boolean]`
   *   - Un array con los mismos valores en cualquier orden: `[number, Partial<T>, boolean]`
   *
   * @returns Una promesa que resuelve a un objeto de tipo `StandardResponse` que indica el resultado de la operación.
   *
   * @example
   * // Ejemplo 1: Llamada con parámetros posicionales
   * const res = await service.update(123, { name: 'Nuevo nombre' });
   *
   * @example
   * // Ejemplo 2: Llamada con loader desactivado
   * const res = await service.update(123, { name: 'Nuevo nombre' }, false);
   *
   * @example
   * // Ejemplo 3: Llamada con array heterogéneo (orden distinto)
   * const res = await service.update([false, { name: 'Nuevo nombre' }, 123]);
   */
  update(...params) {
    return __async(this, null, function* () {
      const data = params.find((p) => typeof p === "object");
      const id = params.find((p) => typeof p === "number") ?? data?.id;
      const loader = !!params.find((p) => typeof p === "boolean");
      const url = `${this.url()}/${id}`;
      return firstValueFrom(this.api.put(url, data, loader));
    });
  }
  /**
   * Actualiza rápidamente un modelo existente con nuevos datos y refleja los cambios localmente si la actualización es exitosa.
   *
   * Este método realiza una llamada a `this.update(id, dataToUpdate, false)` para actualizar los datos en el servidor.
   * Si la actualización es exitosa (`res.status === true`), también actualiza el modelo localmente con `Object.assign(model, dataToUpdate)`.
   *
   * @param model - El modelo existente que se va a actualizar. Debe contener una propiedad `id` numérica.
   *                Puede ser un `Partial<T & BaseModel>` o un modelo completo. Si es `undefined` o no tiene `id`, retorna `false`.
   * @param dataToUpdate - Un objeto con los campos a actualizar del modelo.
   *
   * @returns Una promesa que resuelve a `true` si la actualización fue exitosa, o `false` si falló o no se pudo realizar.
   *
   * @example
   * // Ejemplo 1: Actualizar un modelo existente
   * const updated = await service.fastUpdate(userModel, {
   *   name: 'Nuevo Nombre',
   *   email: 'nuevo@example.com'
   * });
   *
   * if (updated) {
   *   console.log('Usuario actualizado local y remotamente');
   * }
   *
   * @example
   * // Ejemplo 2: Usar con un modelo parcial
   * const updated = await service.fastUpdate(
   *   { id: 123, name: 'Antiguo' },
   *   { name: 'Nuevo Nombre' }
   * );
   */
  fastUpdate(model, dataToUpdate) {
    return __async(this, null, function* () {
      if (!model?.id)
        return false;
      const res = yield this.update(model.id, dataToUpdate, false);
      if (res.status) {
        Object.assign(model, dataToUpdate);
      }
      return res.status;
    });
  }
  /**
   * Creates multiple new records in the API.
   *
   * @param {Partial<T>[]} data - An array of partial data objects representing the new records to be created.
   * @returns {Promise<boolean>} A promise that resolves with `true` if the operation is successful.
   */
  multipleNews(data) {
    return __async(this, null, function* () {
      return (yield firstValueFrom(this.api.post(this.url(), data))).status;
    });
  }
  /**
   * Update multiple existing and nor existing records in the API.
   *
   * @param {Partial<T>[]} data - An array of partial data objects representing the new records to be updated.
   * @returns {Promise<boolean>} A promise that resolves with `true` if the operation is successful.
   */
  multipleUpdate(data, loader, toast) {
    return __async(this, null, function* () {
      return (yield firstValueFrom(this.api.put(this.url() + "/multiple", data, loader, toast))).status;
    });
  }
  /**
   * Toggles the state of a record by its ID.
   *
   * @param {number} data - The unique identifier of the record to toggle.
   * @returns {Promise<boolean>} A promise that resolves with `true` if the operation is successful.
   */
  switch(data, params = void 0, loader = true) {
    return __async(this, null, function* () {
      if (typeof data === "number") {
        return (yield firstValueFrom(this.api.delete(this.url() + "/" + data, params, loader))).status;
      }
      const status = (yield firstValueFrom(this.api.delete(this.url() + "/" + data.id, params, loader))).status;
      if (status) {
        data.deleted_at = data.deleted_at ? null : (/* @__PURE__ */ new Date()).toISOString();
      }
      return status;
    });
  }
  //AQUI EMPIEZAN METODOS PRIVADOS O UTILERIA
  /**
   * Converts a model object into an array of query parameters for filtering.
   *
   * @param {Partial<T>} model - The partial data object representing the conditions.
   * @param {Operator} [operator='='] - The comparison operator to use for the conditions.
   * @returns {(string | number)[][]} An array of query parameters derived from the model.
   */
  paramsFromModel(model, operator = "=") {
    const params = [];
    for (const key of Object.keys(model)) {
      const value = model[key];
      if (value !== void 0 && value !== null) {
        params.push([key, operator, value]);
      }
      if (value === null) {
        params.push([key, "IS NULL", value]);
      }
    }
    return params;
  }
  /**
   * recibe una lista de objetos condicionales y regresa una lista de listas
   * @param {Conditional[]} conditionals
  * @returns {string|numbe|null[][]} lista de datos condicionales
   */
  paramsFromConditionals(conditionals) {
    const params = [];
    for (const cond of conditionals) {
      params.push([cond.key, cond.operator, cond.value]);
    }
    return params;
  }
  get _model() {
    return this.model;
  }
  /**
   * Determina si se debe mostrar un loader basándose en los parámetros pasados a métodos como `all`, `get`, `find`, etc.
   *
   * Este método busca:
   * - Un valor booleano directamente en los `params`.
   * - Si no encuentra uno, busca dentro de un objeto `SuperServiceOptions<T>` que pueda contener la propiedad `loader`.
   *
   * Si no se encuentra ningún valor para `loader`, devuelve el valor por defecto proporcionado.
   *
   * @param params - Parámetros pasados a métodos como `all`, `get`, `find`, etc.
   *                 Pueden incluir un booleano directo o un objeto con la propiedad `loader`.
   * @param defaultValue - Valor por defecto a devolver si no se encuentra ningún valor para `loader`. Por defecto es `false`.
   *
   * @returns `true` si se debe mostrar el loader, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Usar loader explícito en parámetros
   * this.loaderFromParamas([true]); // true
   *
   * @example
   * // Ejemplo 2: Usar loader en un objeto de opciones
   * this.loaderFromParamas([{ loader: true }]); // true
   *
   * @example
   * // Ejemplo 3: Usar valor por defecto
   * this.loaderFromParamas([]); // false
   * this.loaderFromParamas([], true); // true
   */
  loaderFromParamas(params, defaultValue) {
    const options = params.find((p) => this.isSuperServiceOptions(p));
    const loader = params.find((p) => typeof p === "boolean") ?? options?.loader;
    return loader ?? defaultValue ?? false;
  }
  /**
   * Convierte los parámetros dinámicos de tipo `SuperServiceAllParams<T>` en un objeto de parámetros de consulta
   * que puede ser enviado en una petición HTTP (por ejemplo, como `queryParams` en una llamada GET).
   *
   * Este método busca en los `options` los siguientes tipos de parámetros:
   * - **Condicionales** (`Conditional[]` o `Partial<T>`)
   * - **Columnas** (`(keyof T)[]`)
   * - **Relaciones** (`string[]`)
   * - **Paginación** (`Paginator`)
   * - **Búsqueda avanzada** (`AdvancedSearchFilter[]`)
   * - **Datos extra** (`Record<string, any>`)
   *
   * Si no se encuentran directamente, busca dentro de un objeto `SuperServiceOptions<T>`.
   *
   * Toodos los valores se serializan a JSON, excepto `extraData` y `paginator`, que se mezclan directamente en el objeto final.
   *
   * @param options - Parámetros dinámicos que pueden incluir:
   *   - Un objeto de opciones (`SuperServiceOptions<T>`)
   *   - Arrays de condiciones, columnas, relaciones, etc.
   *   - Booleanos, números u otros tipos (ignorados si no son relevantes)
   *
   * @returns Un objeto con los parámetros normalizados listos para usar como `queryParams` en una petición HTTP.
   *
   * @example
   * // Ejemplo 1: Usar con objeto de opciones
   * const params = this.queryParamsFromSuperServiceParams({
   *   conditionals: { name: 'John' },
   *   columns: ['id', 'name'],
   *   relations: ['user', 'role'],
   *   paginator: { page: 1, per_page: 20 }
   * });
   *
   * // Resultado:
   * {
   *   conditionals: "[[\"name\",\"eq\",\"John\"]]",
   *   relations: "[\"user\",\"role\"]",
   *   columns: "[\"id\",\"name\"]",
   *   paginator: "{\"page\":1,\"per_page\":20}"
   * }
   *
   * @example
   * // Ejemplo 2: Usar con parámetros posicionales
   * const params = this.queryParamsFromSuperServiceParams(
   *   [{ key: 'name', operator: 'eq', value: 'John' }],
   *   ['id', 'name'],
   *   ['user', 'role'],
   *   { page: 2, per_page: 50 }
   * );
   */
  queryParamsFromSuperServiceParams(...options) {
    const superOption = options.find((p) => this.isSuperServiceOptions(p));
    const conditionals = options.find((p) => this.isSuperServiceConditional(p)) ?? superOption?.conditionals;
    const columns = options.find((p) => this.isModelColumns(p)) ?? superOption?.columns;
    const relations = options.find((p) => this.isStringArray(p)) ?? superOption?.relations;
    const paginator = options.find((p) => this.isPaginator(p)) ?? superOption?.paginator;
    const busqueda_avanzada = options.find((p) => this.isAdvancedSearchFilter(p)) ?? superOption?.advancedSearch;
    const extraData = options.find((p) => this.isExtraData(p)) ?? superOption?.extraData;
    let params = [];
    if (Array.isArray(conditionals)) {
      params = this.paramsFromConditionals(conditionals);
    } else if (conditionals) {
      params = this.paramsFromModel(conditionals);
    }
    let parsedData = {};
    parsedData = __spreadValues(__spreadValues({
      conditionals: JSON.stringify(params),
      relations: JSON.stringify(relations),
      columns: JSON.stringify(columns),
      paginator: JSON.stringify(paginator),
      busqueda_avanzada: JSON.stringify(busqueda_avanzada)
    }, extraData), paginator);
    return parsedData;
  }
  /**
   * Determina si un valor dado es un objeto del tipo `SuperServiceOptions<T>`.
   *
   * Este método actúa como un **type guard** en TypeScript, lo que permite al compilador
   * inferir correctamente el tipo dentro de bloques condicionales.
   *
   * Para considerarse un `SuperServiceOptions<T>`, el objeto debe:
   * - Tener al menos **una** de las siguientes propiedades definidas:
   *   - `conditionals`
   *   - `extraData`
   *   - `paginator`
   *   - `loader`
   *   - `relations`
   *   - `advancedSearch`
   *
   * @param value - El valor a comprobar. Puede ser cualquier tipo (`any`).
   *
   * @returns `true` si el valor es un objeto `SuperServiceOptions<T>`, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Objeto válido
   * const options = {
   *   conditionals: { name: 'John' },
   *   relations: ['user', 'role']
   * };
   * this.isSuperServiceOptions(options); // true
   *
   * @example
   * // Ejemplo 2: Objeto inválido (sin propiedades reconocidas)
   * this.isSuperServiceOptions({}); // false
   *
   * @example
   * // Ejemplo 3: Usado como type guard en una condición
   * if (this.isSuperServiceOptions(value)) {
   *   // TypeScript ahora sabe que `value` es de tipo `SuperServiceOptions<T>`
   *   console.log(value.conditionals);
   * }
   */
  isSuperServiceOptions(value) {
    if (value === void 0)
      return false;
    const op = value;
    return op.conditionals !== void 0 && this.isSuperServiceConditional(op.conditionals) || op.extraData !== void 0 || op.paginator !== void 0 && this.isPaginator(op.paginator) || (op.loader && typeof op.loader == "boolean") !== void 0 || op.relations !== void 0 && Array.isArray(op.relations) || (op.advancedSearch && this.isAdvancedSearchFilter(op.advancedSearch)) !== void 0;
  }
  /**
   * Determina si un valor dado puede considerarse como `extraData`, es decir, un objeto genérico
   * con datos adicionales que **no** corresponde a otros tipos conocidos como `Paginator`,
   * `SuperServiceOptions`, `Conditional[]`, etc.
   *
   * Este método actúa como un **type guard** en TypeScript, permitiendo que el compilador
   * infiera correctamente el tipo dentro de bloques condicionales.
   *
   * Para considerarse `extraData`, el valor debe:
   * - Ser un objeto (no `null` ni `undefined`)
   * - No ser un array
   * - Tener todas las claves como cadenas
   * - Tener al menos una clave que **no** sea parte de palabras clave reservadas
   *   como `'conditionals'`, `'paginator'`, `'loader'`, `'relations'`
   * - No ser un objeto `Paginator`
   *
   * @param value - El valor a comprobar. Puede ser cualquier tipo (`any`).
   *
   * @returns `true` si el valor puede considerarse `extraData`, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Objeto válido como extraData
   * const data = { filter: 'active', includeDeleted: false };
   * this.isExtraData(data); // true
   *
   * @example
   * // Ejemplo 2: No es extraData (palabra clave reservada)
   * const data = { paginator: { page: 1, per_page: 10 } };
   * this.isExtraData(data); // false
   *
   * @example
   * // Ejemplo 3: No es extraData (es un array)
   * const data = [{ key: 'name', operator: 'eq', value: 'John' }];
   * this.isExtraData(data); // false
   *
   * @example
   * // Ejemplo 4: Usado como type guard en una condición
   * if (this.isExtraData(value)) {
   *   // TypeScript ahora sabe que `value` es de tipo `Record<string, any>`
   *   console.log(value.filter);
   * }
   */
  isExtraData(value) {
    if (!value)
      return false;
    const keys = Object.keys(value);
    return value && !Array.isArray(value) && keys.every((k) => typeof k === "string") && keys.some((k) => !["conditionals", "paginator", "loader", "relations", "busquedaAvanzada"].includes(k)) && !this.isPaginator(value) && !this.isSuperServiceConditional(value) && !this.isSuperServiceOptions(value);
  }
  /**
   * Determina si un valor dado es un objeto del tipo `SuperServiceConditional<T>`.
   *
   * Este método actúa como un **type guard** en TypeScript, lo que permite al compilador
   * inferir correctamente el tipo dentro de bloques condicionales.
   *
   * Un valor se considera `SuperServiceConditional<T>` si:
   * - Es un array de objetos de tipo `Conditional` (con `key`, `operator` y `value`), o
   * - Es un objeto de tipo `Partial<T>` (es decir, un subconjunto de propiedades del modelo)
   *
   * @param value - El valor a comprobar. Puede ser cualquier tipo (`any`).
   *
   * @returns `true` si el valor es de tipo `SuperServiceConditional<T>`, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Conditional[] válido
   * const conditionals = [
   *   { key: 'name', operator: 'eq', value: 'John' },
   *   { key: 'age', operator: 'gt', value: 30 }
   * ];
   * this.isSuperServiceConditional(conditionals); // true
   *
   * @example
   * // Ejemplo 2: Partial<T> válido
   * const conditionals = { name: 'John', active: true };
   * this.isSuperServiceConditional(conditionals); // true
   *
   * @example
   * // Ejemplo 3: Valor inválido (no es array ni objeto)
   * this.isSuperServiceConditional('invalid'); // false
   *
   * @example
   * // Ejemplo 4: Usado como type guard en una condición
   * if (this.isSuperServiceConditional(value)) {
   *   // TypeScript ahora sabe que `value` es de tipo `SuperServiceConditional<T>`
   *   if (Array.isArray(value)) {
   *     // Es un Conditional[]
   *   } else {
   *     // Es un Partial<T>
   *   }
   * }
   */
  isSuperServiceConditional(value) {
    if (value === null || value === void 0)
      return false;
    if (Array.isArray(value)) {
      return value.length === 0 || value.every((item) => {
        return typeof item === "object" && item !== null && "key" in item && "operator" in item && "value" in item;
      });
    }
    const keys = Object.keys(value);
    return typeof value === "object" && this.isModelColumns(keys) && !Array.isArray(value);
  }
  /**
   * Determina si un valor dado es un array válido de columnas del modelo, es decir, un array de tipo `(keyof T)[]`.
   *
   * Este método actúa como un **type guard** en TypeScript, lo que permite al compilador
   * inferir correctamente el tipo dentro de bloques condicionales.
   *
   * Para ser considerado válido, el valor debe:
   * - Ser un array
   * - No estar vacío
   * - Cada elemento debe ser una cadena (`string`)
   * - Cada elemento debe ser una columna definida en `this.columns` (propiedad del servicio)
   *
   * @param value - El valor a comprobar. Puede ser cualquier tipo (`any`).
   *
   * @returns `true` si el valor es un array válido de columnas del modelo, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Valor válido
   * const columns = ['id', 'name'];
   * this.isModelColumns(columns); // true (si 'id' y 'name' están en `this.columns`)
   *
   * @example
   * // Ejemplo 2: Valor inválido (no es array)
   * this.isModelColumns('id,name'); // false
   *
   * @example
   * // Ejemplo 3: Valor inválido (columna no definida)
   * const columns = ['id', 'invalidColumn'];
   * this.isModelColumns(columns); // false (si 'invalidColumn' no está en `this.columns`)
   *
   * @example
   * // Ejemplo 4: Usado como type guard en una condición
   * if (this.isModelColumns(value)) {
   *   // TypeScript ahora sabe que `value` es de tipo `(keyof T)[]`
   *   console.log('Columnas válidas:', value);
   * }
   */
  isModelColumns(value) {
    if (!this.columns.length) {
      console.warn("No hay columnas definidas en el modelo: " + this.model);
      return false;
    }
    if (!Array.isArray(value)) {
      return false;
    }
    if (value.length === 0) {
      return false;
    }
    const keys = [...this.columns, "deleted_at", "created_at"];
    const keysNoEncontradas = value.filter((k) => !keys.includes(k));
    if (keysNoEncontradas.length && !this.isSuperServiceOptions(value) && !this.isAdvancedSearchFilter(value)) {
      if (keysNoEncontradas.length == 1 && keysNoEncontradas[0] == "*")
        return false;
      return false;
    }
    return true;
  }
  /**
   * Determina si un valor dado es un objeto del tipo `Paginator`.
   *
   * Este método actúa como un **type guard** en TypeScript, lo que permite al compilador
   * inferir correctamente el tipo dentro de bloques condicionales.
   *
   * Para ser considerado un `Paginator`, el objeto debe tener definidas las propiedades:
   * - `page`: número de página actual
   * - `per_page`: cantidad de registros por página
   *
   * @param value - El valor a comprobar. Puede ser cualquier tipo (`any`).
   *
   * @returns `true` si el valor es de tipo `Paginator`, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Valor válido
   * const paginator = { page: 1, per_page: 20 };
   * this.isPaginator(paginator); // true
   *
   * @example
   * // Ejemplo 2: Valor inválido
   * const invalid = { page: 1 };
   * this.isPaginator(invalid); // false
   *
   * @example
   * // Ejemplo 3: Usado como type guard
   * if (this.isPaginator(value)) {
   *   console.log(`Página: ${value.page}, Registros por página: ${value.per_page}`);
   * }
   */
  isPaginator(value) {
    return value && value.page !== void 0 && value.per_page !== void 0;
  }
  /**
   * Determina si un valor dado es un array de cadenas de texto (`string[]`).
   *
   * Este método actúa como un **type guard** en TypeScript, lo que permite al compilador
   * inferir correctamente el tipo dentro de bloques condicionales.
   *
   * Para ser considerado válido, el valor debe:
   * - Ser un array
   * - No estar vacío
   * - Todos los elementos deben ser del tipo `string`
   * - **No ser un array de columnas del modelo** (ver `isModelColumns`)
   *
   * @param value - El valor a comprobar. Puede ser cualquier tipo (`any`).
   *
   * @returns `true` si el valor es un array de cadenas válido, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Valor válido
   * const arr = ['user', 'role'];
   * this.isStringArray(arr); // true
   *
   * @example
   * // Ejemplo 2: Valor inválido (no es array)
   * this.isStringArray('user'); // false
   *
   * @example
   * // Ejemplo 3: Valor inválido (es un array de columnas del modelo)
   * const columns = ['id', 'name'];
   * this.isStringArray(columns); // false (si 'id' y 'name' son columnas del modelo)
   *
   * @example
   * // Ejemplo 4: Usado como type guard
   * if (this.isStringArray(value)) {
   *   value.forEach(item => console.log(item));
   * }
   */
  isStringArray(value) {
    return Array.isArray(value) && value.length > 0 && value.every((row) => typeof row === "string") && !this.isModelColumns(value);
  }
  /**
   * Determina si un valor dado es un array de filtros de búsqueda avanzada del tipo `AdvancedSearchFilter[]`.
   *
   * Este método actúa como un **type guard** en TypeScript, lo que permite al compilador
   * inferir correctamente el tipo dentro de bloques condicionales.
   *
   * Para ser considerado válido, el valor debe:
   * - Ser un array
   * - Cada elemento debe tener las siguientes propiedades:
   *   - `relation`: la relación a filtrar
   *   - `conditionals`: condiciones normales
   *   - `andConditionals`: condiciones adicionales
   *
   * @param value - El valor a comprobar. Puede ser cualquier tipo (`any`).
   *
   * @returns `true` si el valor es de tipo `AdvancedSearchFilter[]`, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Valor válido
   * const filters = [{
   *   relation: 'user',
   *   conditionals: { name: 'John' },
   *   andConditionals: []
   * }];
   * this.isAdvancedSearchFilter(filters); // true
   *
   * @example
   * // Ejemplo 2: Valor inválido
   * const invalid = [{ relation: 'user' }];
   * this.isAdvancedSearchFilter(invalid); // false
   *
   * @example
   * // Ejemplo 3: Usado como type guard
   * if (this.isAdvancedSearchFilter(value)) {
   *   console.log('Filtros avanzados:', value);
   * }
   */
  isAdvancedSearchFilter(value) {
    return Array.isArray(value) && value.every((f) => f.relation !== void 0 && f.conditionals !== void 0 && f.andConditionals !== void 0);
  }
  /**
   * Determina si un valor dado es un objeto del tipo `ModelFile<any>`.
   *
   * Este método actúa como un **type guard** en TypeScript, lo que permite al compilador
   * inferir correctamente el tipo dentro de bloques condicionales.
   *
   * Para ser considerado válido, el objeto debe tener definida la propiedad:
   * - `data`: un objeto parcial del modelo
   *
   * @param value - El valor a comprobar. Puede ser cualquier tipo (`any`).
   *
   * @returns `true` si el valor es de tipo `ModelFile<any>`, `false` en caso contrario.
   *
   * @example
   * // Ejemplo 1: Valor válido
   * const modelFile = {
   *   data: { name: 'Producto 1' },
   *   file: new File([''], 'test.jpg')
   * };
   * this.isModelFile(modelFile); // true
   *
   * @example
   * // Ejemplo 2: Valor inválido
   * const invalid = { file: new File([''], 'test.jpg') };
   * this.isModelFile(invalid); // false
   *
   * @example
   * // Ejemplo 3: Usado como type guard
   * if (this.isModelFile(value)) {
   *   console.log('Datos del modelo:', value.data);
   *   if (value.file) {
   *     console.log('Archivo adjunto:', value.file.name);
   *   }
   * }
   */
  isModelFile(v) {
    return v.data !== void 0;
  }
};
_SuperService.\u0275fac = function SuperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SuperService)(\u0275\u0275inject(Injector));
};
_SuperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuperService, factory: _SuperService.\u0275fac, providedIn: "root" });
var SuperService = _SuperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  ApiServiceService,
  CacheService,
  UtilsService,
  SuperService
};
//# sourceMappingURL=chunk-7VPVFOGJ.js.map
