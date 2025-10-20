import {
  SuperConsolidadoService
} from "./chunk-HEFVS2VO.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBFW4U4H.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";

// src/app/main/informes/services/informe-cobranza.service.ts
var COBRANZA_COLUMNS_CLUSTERS = [
  {
    name: "DATOS DEL CREDITO",
    columns: [
      "ID CREDITO",
      "ID CLIENTE",
      "FOLIO",
      "A\xD1O DE ORIGEN",
      "A\xD1O DE REESTRUCTURA",
      "PROGRAMA",
      "NOMBRE COMERCIAL",
      "RAZ\xD3N SOCIAL/NOMBRE PFA",
      "FECHA NACIMIENTO/CONSTITUCION",
      "RFC",
      "PERSONA FISICA/MORAL",
      "EMAIL PERSONAL",
      "EMAIL NEGOCIO",
      "T\xC9LEFONO CASA",
      "T\xC9LEFONO OFICINA",
      "T\xC9LEFONO CELULAR"
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "DOMICILIO PARTICULAR",
    columns: [
      "DOMICILIO PARTICULAR/ CALLE / NUMERO",
      "DOMICILIO PARTICULAR/ COLONIA",
      "DOMICILIO PARTICULAR/ C.P.",
      "DOMICILIO PARTICULAR/ CIUDAD",
      "DOMICILIO PARTICULAR/ LOCALIDAD"
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "DOMICILIO FISCAL",
    columns: [
      "DOMICILIO FISCAL/ CALLE / NUMERO",
      "DOMICILIO FISCAL/ COLONIA",
      "DOMICILIO FISCAL/ C.P.",
      "DOMICILIO FISCAL/ CIUDAD",
      "DOMICILIO FISCAL/ LOCALIDAD"
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "DOMICILIO NEGOCIO",
    columns: [
      "DOMICILIO DEL NEGOCIO/ CALLE/ NUMERO",
      "DOMICILIO DEL NEGOCIO/ COLONIA",
      "DOMICILIO DEL NEGOCIO/ C.P."
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "DATOS DEL AVAL",
    columns: [
      "NOMBRE AVAL",
      "CORREO ELECTRONICO AVAL",
      "TELEFONO AVAL"
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "DATOS DE LA SESION",
    columns: [
      "SESI\xD3N",
      "FECHA DE LA SESION"
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "DATOS DE LA COBRANZA",
    columns: [
      "MONTO AUTORIZADO",
      "CAPITAL MAS INTER\xC9S",
      "INTERES MORATORIO",
      "MONTO RECUPERADO",
      "MONTO POR RECUPERAR",
      "% MONTO RECUPERADO",
      "MENSUALIDADES VENCIDAS",
      "MONTO VENCIDO",
      "% MONTO VENCIDO",
      "MONTO \xDALTIMO ABONO",
      "FECHA \xDALTIMO ABONO",
      "ESTATUS"
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "VISITAS DOMICILIARIAS",
    columns: [
      "EJECUTIVO V.D.",
      "MES DE ASIGNACION V.D.",
      "RESULTADO DE NOT. DOMICILIARIA V.D.",
      "DOMICILIO LOCALIZADO V.D.",
      "GESTI\xD3N AL ACREDITADO V.D.",
      "GESTI\xD3N AL AVAL V.D.",
      "GEST\xD3N S2CREDIT V.D.",
      "NOTAS DE LA VISITA DOMICILIARIA V.D.",
      "FECHA DE LA VISITA DOMICILIARIA",
      "FECHA DEL REGISTRO V.D."
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "ULTIMA GESTI\xD3N",
    columns: [
      "EJECUTIVO G.T.",
      "MES DE ASIGNACION G.T.",
      "RESULTADO DE NOT. DOMICILIARIA G.T.",
      "DOMICILIO LOCALIZADO G.T.",
      "GESTI\xD3N AL ACREDITADO G.T.",
      "GESTI\xD3N AL AVAL G.T.",
      "GEST\xD3N S2CREDIT G.T.",
      "NOTAS DE LA GESTION",
      "FECHA DE LA GESTION",
      "FECHA DEL REGISTRO G.T."
    ],
    style: {
      thClass: "bg-primary text-bg-primary text-center"
    }
  },
  {
    name: "TEMA DE JURIDICO",
    columns: [
      "ASIGNACION",
      "DESPACHO ASIGNADO"
    ],
    style: {
      thClass: "bg-secondary text-bg-secondary text-center"
    }
  }
];
var _InformeCobranzaService = class _InformeCobranzaService extends SuperConsolidadoService {
  constructor() {
    super();
    this.endpoint = "api/consolidado/cobranza";
    this.utilsService = inject(UtilsService);
    this.filter = (c, options) => {
      const estadoCuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(c, false, options?.fecha_fin);
      if (!c.creditos_pagos?.length) {
        return false;
      }
      if ((estadoCuenta?.total_a_liquidar ?? 0) <= 0) {
        return false;
      }
      if (!options) {
        return true;
      }
      if (options.producto_financiero_id && c.productos_financiero_id != options.producto_financiero_id) {
        return false;
      }
      if (!options.fecha_inicio && !options.fecha_fin) {
        return true;
      }
      let fechaConvenio = new Date(c.fecha_convenio ?? c.liberado_fecha ?? c.formalizado_fecha ?? c.created_at);
      if (options.fecha_inicio) {
        const inicioDate = new Date(options.fecha_inicio);
        inicioDate.setHours(0, 0, 0, 0);
        if (fechaConvenio < inicioDate) {
          return false;
        }
      }
      if (options.fecha_fin) {
        const finDate = new Date(options.fecha_fin);
        finDate.setHours(23, 59, 59, 999);
        if (fechaConvenio > finDate) {
          return false;
        }
      }
      return true;
    };
    this.map = (credito, options) => {
      const pf = credito.datos_persona_fisica;
      const pm = credito.datos_personas_morales;
      const estadoCuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(credito, false, options?.fecha_fin);
      const ultimoAbono = estadoCuenta?.abonos_distribuidos?.at(-1)?.abono;
      const dpf = pf?.datos_personales;
      const pfNegocio = pf?.negocios;
      const rl = pm?.representante_legal;
      const fechaFin = options?.fecha_fin ? new Date(options.fecha_fin) : /* @__PURE__ */ new Date();
      const gestiones = (credito.credito_evento_cobros ?? []).filter((g) => g.fecha && new Date(g.fecha) <= fechaFin).sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
      const ultimaVisitaDomiciliaria = gestiones.find((g) => g.modalidad === "NOTIFICACION DOMICILIARIA");
      const ultimaGestion = gestiones.at(0);
      const domicilioFiscal = {
        calle: dpf ? dpf.datos_fiscales?.calle ?? dpf.calle : pm?.datos_fiscales?.calle ?? pm?.calle,
        no_exterior: dpf ? dpf.datos_fiscales ? "" : dpf.no_exterior : pm?.datos_fiscales ? "" : pm?.no_exterior,
        no_interior: dpf ? dpf.datos_fiscales ? "" : dpf.no_interior : pm?.datos_fiscales ? "" : pm?.no_interior,
        colonia: dpf ? dpf.datos_fiscales?.colonia ?? dpf.colonia : pm?.datos_fiscales?.colonia ?? pm?.colonia,
        ciudad: dpf ? dpf.datos_fiscales?.municipio ?? dpf.ciudades?.nombre : pm?.datos_fiscales?.municipio ?? pm?.ciudades?.nombre,
        localidad: dpf ? dpf.datos_fiscales ? "" : dpf.localidad : pm?.datos_fiscales ? "" : pm?.localidad,
        cp: dpf ? dpf.datos_fiscales?.codigo_postal ?? dpf.codigo_postal : pm?.datos_fiscales?.codigo_postal ?? pm?.codigo_postal
      };
      const domicilioParticular = {
        calle: dpf ? dpf.calle : rl?.calle,
        no_exterior: dpf ? dpf.no_exterior : rl?.no_exterior,
        no_interior: dpf ? dpf.no_interior : rl?.no_interior,
        colonia: dpf ? dpf.colonia : rl?.colonia,
        ciudad: dpf ? dpf.ciudades?.nombre : rl?.ciudades?.nombre,
        localidad: dpf ? dpf.localidad : rl?.localidad,
        cp: dpf ? dpf.codigo_postal : rl?.codigo_postal
      };
      const domicilioNegocio = {
        calle: pfNegocio ? pfNegocio.calle : pm?.calle,
        no_exterior: pfNegocio ? pfNegocio.no_exterior : pm?.no_exterior,
        no_interior: pfNegocio ? pfNegocio.no_interior : pm?.no_interior,
        colonia: pfNegocio ? pfNegocio.colonia : pm?.colonia,
        ciudad: pfNegocio ? pfNegocio.ciudades?.nombre : pm?.ciudades?.nombre,
        localidad: pfNegocio ? pfNegocio.localidad : pm?.localidad,
        cp: pfNegocio ? pfNegocio.codigo_postal : pm?.codigo_postal
      };
      const despachoAsignado = this.utilsService.despachoActualFromCredito(credito, fechaFin);
      return {
        // DATOS CREDITO
        "ID CREDITO": credito.id,
        "ID CLIENTE": this.utilsService.idClienteFromCredito(credito) ?? "",
        "FOLIO": credito.folio?.toUpperCase() ?? "",
        "A\xD1O DE ORIGEN": this.utilsService.anioFromCredito(credito) ?? "",
        "A\xD1O DE REESTRUCTURA": this.utilsService.esReestructura(credito.folio) ? this.utilsService.anioFromFecha(credito.fecha_reestructura) ?? "" : "",
        "PROGRAMA": credito.productos_financieros?.nombre.toUpperCase() ?? "",
        "NOMBRE COMERCIAL": this.utilsService.nombreNegocioFromCredito(credito) ?? "",
        "RAZ\xD3N SOCIAL/NOMBRE PFA": this.utilsService.nombreClienteFromCredito(credito) ?? "",
        "FECHA NACIMIENTO/CONSTITUCION": this.utilsService.fechaFormateada(pf ? pf.datos_personales?.fecha_nacimiento : pm?.fecha_constitucion) ?? "",
        "RFC": (!!pm?.rfc ? pm.rfc : pf?.datos_personales?.rfc)?.toUpperCase() ?? "",
        "PERSONA FISICA/MORAL": pf ? "PERSONA FISICA" : "PERSONA MORAL",
        "EMAIL PERSONAL": (pf ? pf.datos_personales?.email : pm?.representante_legal?.email) ?? "",
        "EMAIL NEGOCIO": (pf ? pf.datos_personales?.email : pm?.email) ?? "",
        "T\xC9LEFONO CASA": (pf ? pf.datos_personales?.telefonos_personales?.find((t) => t.tipo == "CASA") : pm?.telefonos?.find((t) => t.tipo === "CASA"))?.numero ?? "",
        "T\xC9LEFONO OFICINA": (pf ? pf.datos_personales?.telefonos_personales?.find((t) => t.tipo == "OFICINA") : pm?.telefonos?.find((t) => t.tipo === "OFICINA"))?.numero ?? "",
        "T\xC9LEFONO CELULAR": (pf ? pf.datos_personales?.telefonos_personales?.find((t) => t.tipo == "CELULAR") : pm?.telefonos?.find((t) => t.tipo === "CELULAR"))?.numero ?? "",
        // DOMICILIO PARTICULAR
        "DOMICILIO PARTICULAR/ CALLE / NUMERO": this.joinFilterString(domicilioParticular.calle, domicilioParticular.no_exterior, domicilioParticular.no_interior),
        "DOMICILIO PARTICULAR/ COLONIA": domicilioParticular.colonia ?? "",
        "DOMICILIO PARTICULAR/ C.P.": domicilioParticular.cp ?? "",
        "DOMICILIO PARTICULAR/ CIUDAD": domicilioParticular.ciudad ?? "",
        "DOMICILIO PARTICULAR/ LOCALIDAD": domicilioParticular.localidad ?? "",
        //DOMICILIO FISCAL
        "DOMICILIO FISCAL/ CALLE / NUMERO": this.joinFilterString(domicilioFiscal.calle, domicilioFiscal.no_exterior, domicilioFiscal.no_interior),
        "DOMICILIO FISCAL/ COLONIA": domicilioFiscal.colonia ?? "",
        "DOMICILIO FISCAL/ C.P.": domicilioFiscal.cp ?? "",
        "DOMICILIO FISCAL/ CIUDAD": domicilioFiscal.ciudad ?? "",
        "DOMICILIO FISCAL/ LOCALIDAD": domicilioFiscal.localidad ?? "",
        //DATOS DEL NEGOCIO
        "DOMICILIO DEL NEGOCIO/ CALLE/ NUMERO": this.joinFilterString(domicilioParticular.calle, domicilioParticular.no_exterior, domicilioParticular.no_interior) ?? "",
        "DOMICILIO DEL NEGOCIO/ COLONIA": domicilioNegocio.colonia ?? "",
        "DOMICILIO DEL NEGOCIO/ C.P.": domicilioNegocio.cp ?? "",
        //DATOS DEL AVAL
        "NOMBRE AVAL": this.utilsService.nombreClienteFromDatosPersonales(credito.datos_personales, credito) ?? "",
        "CORREO ELECTRONICO AVAL": credito.datos_personales?.email ?? "",
        "TELEFONO AVAL": this.utilsService.primerTelefonoFromTelefonos(credito.datos_personales?.telefonos_personales) ?? "",
        //DATOS DE LA SESION
        "SESI\xD3N": credito.sesiones?.sesion?.toUpperCase() ?? "",
        "FECHA DE LA SESION": this.utilsService.fechaFormateada(credito.sesiones?.fecha) ?? "",
        //DATOS DE COBRANZA
        "MONTO AUTORIZADO": this.parseToNumber(credito.monto_autorizado ?? 0) ?? "",
        "CAPITAL MAS INTER\xC9S": this.parseToNumber(+(estadoCuenta?.interes_ordinario ?? 0) + +(credito.monto_autorizado ?? 0)) ?? "",
        "INTERES MORATORIO": this.parseToNumber(estadoCuenta?.interes_moratorio ?? 0) ?? "",
        "MONTO RECUPERADO": this.parseToNumber(estadoCuenta?.monto_total_pagado ?? 0) ?? "",
        "MONTO POR RECUPERAR": this.parseToNumber(estadoCuenta?.total_a_liquidar ?? 0) ?? "",
        "% MONTO RECUPERADO": estadoCuenta?.total_a_liquidar == 0 ? 100 : this.parseToNumber(estadoCuenta?.monto_total_pagado ?? 0) / this.parseToNumber(estadoCuenta?.monto_total_mas_intereses ?? 1) * 100,
        "MENSUALIDADES VENCIDAS": this.parseToNumber(estadoCuenta?.mensualidades_vencidas ?? 0) ?? "",
        "MONTO VENCIDO": this.parseToNumber(estadoCuenta?.saldo_vencido ?? 0) ?? "",
        "% MONTO VENCIDO": estadoCuenta?.total_a_liquidar == 0 ? 0 : this.parseToNumber((estadoCuenta?.saldo_vencido ?? 0) / this.parseToNumber(estadoCuenta?.monto_total_mas_intereses ?? 1)) * 100,
        "MONTO \xDALTIMO ABONO": +(ultimoAbono?.monto ?? 0),
        "FECHA \xDALTIMO ABONO": this.utilsService.fechaFormateada(ultimoAbono?.fecha) ?? "",
        "ESTATUS": estadoCuenta?.credito_status ?? "",
        //VISITAS DOMICILIARIAS
        "EJECUTIVO V.D.": (ultimaVisitaDomiciliaria?.nombre_usuario ?? ultimaVisitaDomiciliaria?.usuario_ejecutivo?.nombre ?? "").toUpperCase(),
        "MES DE ASIGNACION V.D.": this.mesAsignacion(ultimaVisitaDomiciliaria),
        "RESULTADO DE NOT. DOMICILIARIA V.D.": ultimaVisitaDomiciliaria?.otro_resultado ?? ultimaVisitaDomiciliaria?.resultado ?? "",
        "DOMICILIO LOCALIZADO V.D.": ultimaVisitaDomiciliaria?.objetivo ?? "",
        "GESTI\xD3N AL ACREDITADO V.D.": ultimaVisitaDomiciliaria?.objetivo_detalle ?? "",
        "GESTI\xD3N AL AVAL V.D.": ultimaVisitaDomiciliaria?.objetivo_detalle?.toUpperCase().includes("AVAL") ? "SI" : "NO",
        "GEST\xD3N S2CREDIT V.D.": ultimaVisitaDomiciliaria?.usuario_id == 1 ? "SI" : "NO",
        "NOTAS DE LA VISITA DOMICILIARIA V.D.": ultimaVisitaDomiciliaria?.comentario ?? "",
        "FECHA DE LA VISITA DOMICILIARIA": this.utilsService.fechaFormateada(ultimaVisitaDomiciliaria?.fecha) ?? "",
        "FECHA DEL REGISTRO V.D.": this.utilsService.fechaFormateada(ultimaVisitaDomiciliaria?.created_at) ?? "",
        //GESTION TELEFONICA
        "EJECUTIVO G.T.": (ultimaGestion?.nombre_usuario ?? ultimaGestion?.usuario_ejecutivo?.nombre ?? "").toUpperCase(),
        "MES DE ASIGNACION G.T.": this.mesAsignacion(ultimaGestion),
        "RESULTADO DE NOT. DOMICILIARIA G.T.": ultimaGestion?.otro_resultado ?? ultimaGestion?.resultado ?? "",
        "DOMICILIO LOCALIZADO G.T.": ultimaGestion?.objetivo ?? "",
        "GESTI\xD3N AL ACREDITADO G.T.": ultimaGestion?.objetivo_detalle ?? "",
        "GESTI\xD3N AL AVAL G.T.": ultimaGestion?.objetivo_detalle?.toUpperCase().includes("AVAL") ? "SI" : "NO",
        "GEST\xD3N S2CREDIT G.T.": ultimaGestion?.usuario_id == 1 ? "SI" : "NO",
        "NOTAS DE LA GESTION": ultimaGestion?.comentario ?? "",
        "FECHA DE LA GESTION": this.utilsService.fechaFormateada(ultimaGestion?.fecha) ?? "",
        "FECHA DEL REGISTRO G.T.": this.utilsService.fechaFormateada(ultimaGestion?.created_at) ?? "",
        //TEMA DE JURIDICO
        "ASIGNACION": credito.juridicos?.estado ?? "",
        "DESPACHO ASIGNADO": despachoAsignado?.despachos?.nombre ?? ""
      };
    };
    this.initData();
  }
  mesAsignacion(gestion) {
    let date = gestion?.evento_cobro_asignacion_usuarios?.at(0)?.evento_cobro_asignacion?.fecha;
    if (!date) {
      date = gestion?.fecha;
    }
    if (!date)
      return "";
    date = new Date(date);
    const mes = date.toLocaleDateString("es-MX", { month: "long", timeZone: "America/Tijuana" }).replace(".", "").toUpperCase();
    return mes;
  }
  joinFilterString(...args) {
    const array = [...args].filter((r) => r && r.trim());
    return array.join(" ");
  }
};
_InformeCobranzaService.\u0275fac = function InformeCobranzaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeCobranzaService)();
};
_InformeCobranzaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InformeCobranzaService, factory: _InformeCobranzaService.\u0275fac, providedIn: "root" });
var InformeCobranzaService = _InformeCobranzaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeCobranzaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/main/informes/shared/dates-picker/dates-picker.component.ts
function DatesPickerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function DatesPickerComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadExcel.emit());
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function DatesPickerComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
var _DatesPickerComponent = class _DatesPickerComponent {
  constructor() {
    this.isLoading = false;
    this.showDownloadExcelButton = false;
    this.download = new EventEmitter();
    this.downloadExcel = new EventEmitter();
  }
};
_DatesPickerComponent.\u0275fac = function DatesPickerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatesPickerComponent)();
};
_DatesPickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatesPickerComponent, selectors: [["app-dates-picker"]], inputs: { filtros: "filtros", isLoading: "isLoading", showDownloadExcelButton: "showDownloadExcelButton" }, outputs: { download: "download", downloadExcel: "downloadExcel" }, decls: 21, vars: 7, consts: [[1, "row", "g-3", "align-items-end", "mb-4"], [1, "col-md-3"], ["for", "fechaInicio", 1, "form-label", "small", "fw-medium", "text-primary"], [1, "input-group"], [1, "input-group-text", "bg-light", "border-end-0"], [1, "bi", "bi-calendar-event", "text-primary"], ["type", "date", "id", "fechaInicio", 1, "form-control", "border-start-0", 3, "ngModelChange", "ngModel", "max"], ["for", "fechaFin", 1, "form-label", "small", "fw-medium", "text-primary"], ["type", "date", "id", "fechaFin", 1, "form-control", "border-start-0", 3, "ngModelChange", "ngModel", "min"], [1, "col-md-6", "d-flex", "gap-3", "justify-content-end"], [1, "btn", "btn-success", "d-flex", "align-items-center", "fw-medium", 3, "disabled"], [1, "btn", "btn-success", "d-flex", "align-items-center", "py-2", "px-4", "fw-medium", 3, "click", "disabled"], [1, "bi", "bi-cloud-download", "me-2"], [1, "ms-2", "spinner-border", "spinner-border-sm"], [1, "btn", "btn-success", "d-flex", "align-items-center", "fw-medium", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-excel"]], template: function DatesPickerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label", 2);
    \u0275\u0275text(3, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "span", 4);
    \u0275\u0275element(6, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function DatesPickerComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.fecha_inicio, $event) || (ctx.filtros.fecha_inicio = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 1)(9, "label", 7);
    \u0275\u0275text(10, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 3)(12, "span", 4);
    \u0275\u0275element(13, "i", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function DatesPickerComponent_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.fecha_fin, $event) || (ctx.filtros.fecha_fin = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 9);
    \u0275\u0275conditionalCreate(16, DatesPickerComponent_Conditional_16_Template, 2, 1, "button", 10);
    \u0275\u0275elementStart(17, "button", 11);
    \u0275\u0275listener("click", function DatesPickerComponent_Template_button_click_17_listener() {
      return ctx.download.emit();
    });
    \u0275\u0275element(18, "i", 12);
    \u0275\u0275text(19, " Generar Informe ");
    \u0275\u0275conditionalCreate(20, DatesPickerComponent_Conditional_20_Template, 1, 0, "span", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.fecha_inicio);
    \u0275\u0275property("max", ctx.filtros.fecha_fin);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.fecha_fin);
    \u0275\u0275property("min", ctx.filtros.fecha_inicio);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.isLoading ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoading ? 20 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var DatesPickerComponent = _DatesPickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatesPickerComponent, [{
    type: Component,
    args: [{ selector: "app-dates-picker", imports: [
      FormsModule
    ], template: '<div class="row g-3 align-items-end mb-4">\n    <div class="col-md-3">\n        <label for="fechaInicio" class="form-label small fw-medium text-primary">Fecha Inicio</label>\n        <div class="input-group">\n            <span class="input-group-text bg-light border-end-0"><i\n                    class="bi bi-calendar-event text-primary"></i></span>\n            <input type="date" class="form-control border-start-0" id="fechaInicio" [(ngModel)]="filtros.fecha_inicio"\n                [max]="filtros.fecha_fin">\n        </div>\n    </div>\n    <div class="col-md-3">\n        <label for="fechaFin" class="form-label small fw-medium text-primary">Fecha Fin</label>\n        <div class="input-group">\n            <span class="input-group-text bg-light border-end-0"><i\n                    class="bi bi-calendar-event text-primary"></i></span>\n            <input type="date" class="form-control border-start-0" id="fechaFin" [(ngModel)]="filtros.fecha_fin"\n                [min]="filtros.fecha_inicio">\n        </div>\n    </div>\n    <div class="col-md-6 d-flex gap-3 justify-content-end">\n        @if(!isLoading){\n        <button class="btn btn-success d-flex align-items-center fw-medium" [disabled]="isLoading"\n            (click)="downloadExcel.emit()">\n            <i class="bi bi-file-earmark-excel"></i>\n        </button>\n        }\n        <button class="btn btn-success d-flex align-items-center py-2 px-4 fw-medium" [disabled]="isLoading"\n            (click)="download.emit()">\n            <i class="bi bi-cloud-download me-2"></i>\n            Generar Informe\n            @if (isLoading) {\n            <span class="ms-2 spinner-border spinner-border-sm"></span>\n            }\n        </button>\n    </div>\n</div>' }]
  }], null, { filtros: [{
    type: Input
  }], isLoading: [{
    type: Input
  }], showDownloadExcelButton: [{
    type: Input
  }], download: [{
    type: Output
  }], downloadExcel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatesPickerComponent, { className: "DatesPickerComponent", filePath: "src/app/main/informes/shared/dates-picker/dates-picker.component.ts", lineNumber: 13 });
})();

export {
  COBRANZA_COLUMNS_CLUSTERS,
  InformeCobranzaService,
  DatesPickerComponent
};
//# sourceMappingURL=chunk-USH5HIOA.js.map
