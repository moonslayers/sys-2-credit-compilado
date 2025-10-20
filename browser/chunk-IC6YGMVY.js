import {
  ChronixPDFservice
} from "./chunk-LROCG2JY.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  UtilsService as UtilsService2,
  require_pdfmake,
  require_vfs_fonts
} from "./chunk-MLBICDWK.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/services/documentosLegales/contratos/convenio_pago_pm.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
pdfMake.addVirtualFileSystem(pdfFonts);
var _convenioPagoPM = class _convenioPagoPM {
  constructor(utils, utilsC, creditoController, chronixPDF, utilsEstadoCuenta) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.chronixPDF = chronixPDF;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  generarConvenioPagoPM(creditoParam, convenio) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonasMorales",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "productosFinancieros",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "convenios",
        "convenios.conveniosPagos"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
        credito.productos_financieros = creditoOriginal.productos_financieros;
      }
      const pagosActivos = this.utilsC.getPagosFromActiveConvenios(credito);
      const pagosOrdenadosFecha = this.utilsC.sortPagosByFechaAscendente(pagosActivos);
      const convenioActivo = convenio ?? credito.convenios?.find((convenio2) => convenio2.estatus == "ACTIVO");
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      const tablaDPM = credito.datos_personas_morales;
      const tablaRL = credito.datos_personas_morales?.representante_legal;
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
      const telefonosCasa = this.utilsC.getTelefonosCasa(tablaRL?.telefonos_personales ?? []);
      const telefonosOficina = this.utilsC.getTelefonosOficina(tablaRL?.telefonos_personales ?? []);
      const telefonosCelular = this.utilsC.getTelefonosCelular(tablaRL?.telefonos_personales ?? []);
      console.log(pagosActivos);
      console.log(pagosOrdenadosFecha);
      const localidad = this.utils.municipioFromCredito(credito), fechaInicioConvenio = this.utilsC.fechaAletras(convenioActivo?.fecha_convenio), nombreAcreditado = this.utils.nombreClienteFromDatosPersonales(tablaRL), domicilioParticular = this.utils.domicilioFromDatosModel(tablaRL), razonSocial = tablaDPM?.razon_social.toUpperCase(), domicilioFIscal = this.utils.domicilioFromDatosModel(tablaDPM), noIdentificacion = tablaRL?.identificacion_numero.toUpperCase(), telefonoParticular = this.utilsC.combineTelefonosSacaUnNumero(telefonosCasa, telefonosCelular), telefonoOficina = telefonosOficina, liquidarSinMoratorios = tablaEstadoCuenta?.total_a_liquidar, liquidarSinMoratoriosConLetra = this.utilsC.NumeroALetras(liquidarSinMoratorios), saldoVencido = tablaEstadoCuenta?.saldo_vencido, saldoVencidoConLetra = this.utilsC.NumeroALetras(saldoVencido), folio = credito.folio?.toUpperCase(), nombrePrograma = credito.productos_financieros?.alias.toUpperCase(), representanteLegal = this.utils.nombreClienteFromDatosPersonales(tablaRL);
      if (convenioActivo?.monto_abono_inicial)
        convenioActivo.monto_abono_inicial = +convenioActivo.monto_abono_inicial;
      const textoCompromiso = !convenioActivo?.monto_abono_inicial ? {
        text: [
          "ME COMPROMETO A REALIZAR ",
          { text: convenioActivo?.plazo, bold: true },
          " PAGOS MENSUALES PARA LLEVAR A CABO LA FIRMA DEL PRESENTE CONVENIO, PARA REALIZAR ",
          { text: this.utilsC.generarDescripcionMensualidades(credito), bold: true }
        ]
      } : {
        text: [
          "ME COMPROMETO A REALIZAR ",
          { text: "1 (UN)", bold: true },
          " PAGO MENSUAL POR LA CANTIDAD DE ",
          { text: "$" + this.utilsC.formatearNumeroConComas(convenioActivo?.monto_abono_inicial) + " ", bold: true },
          { text: "(" + this.utilsC.NumeroALetras(convenioActivo?.monto_abono_inicial), bold: true },
          { text: this.utilsC.formatDecimals(convenioActivo?.monto_abono_inicial) + ")", bold: true },
          " PARA LLEVAR A CABO LA FIRMA DEL PRESENTE CONVENIO, PARA POSTERIORMENTE REALIZAR ",
          ...this.utilsC.generarDescripcionMensualidades(credito),
          " SIENDO CADA UNO DE ELLOS LOS \xDALTIMOS D\xCDAS DE CADA MES HASTA CULMINAR EL ADEUDO TOTAL ",
          "DEL CR\xC9DITO, INICIANDO EL PRIMERO DE ELLOS EL D\xCDA ",
          { text: this.utilsC.fechaAletras(convenioActivo?.fecha_inicio), bold: true },
          "."
        ]
      };
      const generatedDocument = {
        pageMargins: [80, 50, 80, 50],
        content: [
          this.chronixPDF.generateTitle("CONVENIO DE PAGO PERSONA MORAL", "#7B001C", [`${localidad}, Baja California, ${fechaInicioConvenio}`]),
          {
            text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ",
            bold: true,
            margin: [0, 0, 0, 5]
          },
          {
            text: [`DIRECTOR DEL FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA. SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N`],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: "P r e s e n t e.",
            margin: [0, 0, 0, 15]
          },
          {
            text: [
              "YO ",
              { text: nombreAcreditado, bold: true },
              " CON DOMICILIO PARTICULAR EN ",
              { text: domicilioParticular, bold: true },
              " REPRESENTANTE LEGAL DE ",
              { text: razonSocial, bold: true },
              " CON DOMICILIO FISCAL UBICADO EN ",
              { text: domicilioFIscal, bold: true },
              " QUIEN SE IDENTIFICA CON N\xDAMERO DE IDENTIFICACI\xD3N OFICIAL ",
              { text: noIdentificacion, bold: true },
              " Y  N\xDAMERO PARTICULAR ",
              { text: telefonoParticular, bold: true },
              ...telefonoOficina.length ? [
                ", Y N\xDAMERO DE OFICINA ",
                { text: telefonoOficina, bold: true }
              ] : [],
              " RECONOZCO MI ADEUDO POR LA CANTIDAD DE ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(liquidarSinMoratorios), bold: true },
              { text: "(" + this.utilsC.NumeroALetras(liquidarSinMoratorios), bold: true },
              { text: " " + this.utilsC.formatDecimals(liquidarSinMoratorios) + ")", bold: true },
              " COMO SALDO TOTAL, TENIENDO COMO SALDO VENCIDO LA CANTIDAD DE ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoVencido), bold: true },
              { text: " (" + saldoVencidoConLetra + " " + this.utilsC.formatDecimals(saldoVencido) + ")", bold: true },
              " SIENDO BENEFICIARIO DEL CR\xC9DITO ",
              { text: folio, bold: true },
              " DEL PROGRAMA ",
              { text: nombrePrograma + ".", bold: true },
              "\n\n"
            ],
            fontSize: 10,
            alignment: "justify"
          },
          {
            text: textoCompromiso,
            fontSize: 10,
            alignment: "justify"
          },
          /*
          {
            text: [
              'ME COMPROMETO A REALIZAR ___ PAGO MENSUAL, REALIZANDO UN PRIMER PAGO POR LA CANTIDAD DE ',
              { text: '$ ' + this.utilsC.formatearNumeroConComas(primerPagoReestructurar), bold: true },
              { text: ' (' + primerPagoConLetra + ')', bold: true },
              ' EL DÍA ',
              { text: fechaPrimerPago, bold: true },
              ' PARA LLEVAR A CABO LA FIRMA DEL PRESENTE CONVENIO, PARA POSTERIORMENTE REALIZAR ',
              { text: plazoConvenio, bold: true },
              ' PAGOS MENSUALES LOS DÍAS 30 DE CADA MES POR LA CANTIDAD DE ',
              { text: '$ ' + this.utilsC.formatearNumeroConComas(montoCuotaMensual), bold: true },
              { text: ' (' + montoCuotaConLetra + ')', bold: true },
              ' INICIANDO EL ________ HASTA FINALIZAR CON SU SALDO VENCIDO AL DÍA ',
              { text: fechaInicioConvenio, bold: true },
              '\n\n'
            ],
            fontSize: 10,
            alignment: 'justify'
          },*/
          { text: "SIN M\xC1S POR EL MOMENTO QUEDO A SUS \xD3RDENES.", alignment: "left", margin: [0, 20, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          {
            text: `C. ${representanteLegal}`,
            alignment: "center"
          },
          {
            text: `REPRESENTANTE LEGAL DE`,
            alignment: "center"
          },
          {
            text: razonSocial,
            alignment: "center"
          }
        ]
      };
      pdfMake.createPdf(generatedDocument).open();
    });
  }
};
_convenioPagoPM.\u0275fac = function convenioPagoPM_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _convenioPagoPM)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice), \u0275\u0275inject(UtilsEstadoCuentaService));
};
_convenioPagoPM.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _convenioPagoPM, factory: _convenioPagoPM.\u0275fac, providedIn: "any" });
var convenioPagoPM = _convenioPagoPM;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(convenioPagoPM, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: ChronixPDFservice }, { type: UtilsEstadoCuentaService }], null);
})();

// src/app/services/documentosLegales/contratos/convenio_pago_pf.service.ts
var pdfMake2 = __toESM(require_pdfmake());
var pdfFonts2 = __toESM(require_vfs_fonts());
pdfMake2.addVirtualFileSystem(pdfFonts2);
var _convenioPagoPF = class _convenioPagoPF {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  generarConvenioPagoPF(creditoParam, convenio) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios",
        "productosFinancieros",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "sucursales",
        "sesiones",
        "convenios",
        "convenios.conveniosPagos"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
        credito.productos_financieros = creditoOriginal.productos_financieros;
      }
      const convenioActivo = convenio ?? credito.convenios?.find((convenio2) => convenio2.estatus == "ACTIVO");
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      console.log(convenioActivo);
      const tablaDP = credito.datos_persona_fisica?.datos_personales;
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
      const telefonosCasa = this.utilsC.getTelefonosCasa(tablaDP?.telefonos_personales ?? []);
      const telefonosOficina = this.utilsC.getTelefonosOficina(tablaDP?.telefonos_personales ?? []);
      const telefonosCelular = this.utilsC.getTelefonosCelular(tablaDP?.telefonos_personales ?? []);
      const localidad = this.utils.municipioFromCredito(credito), fechaInicioConvenio = this.utilsC.fechaAletras(convenioActivo?.fecha_convenio), nombreAcreditado = this.utils.nombreClienteFromDatosPersonales(tablaDP), domicilioParticular = this.utils.domicilioFromDatosModel(tablaDP), tipoIdentificacion = tablaDP?.identificacion.toUpperCase().replace("INNE", "INE"), numeroIdentificacion = tablaDP?.identificacion_numero.toUpperCase(), telefonoParticular = this.utilsC.combineTelefonosSacaUnNumero(telefonosCasa), telefonoOficina = this.utilsC.combineTelefonosSacaUnNumero(telefonosCelular), liquidarSinMoratorios = tablaEstadoCuenta?.total_a_liquidar, liquidarSinMoratoriosConLetra = this.utilsC.NumeroALetras(liquidarSinMoratorios), saldoVencido = tablaEstadoCuenta?.saldo_vencido, saldoVencidoConLetra = this.utilsC.NumeroALetras(saldoVencido), folio = credito.folio, programa = credito.productos_financieros?.alias.toUpperCase();
      if (convenioActivo?.monto_abono_inicial)
        convenioActivo.monto_abono_inicial = +convenioActivo.monto_abono_inicial;
      const textoCompromiso = !convenioActivo?.monto_abono_inicial ? {
        text: [
          "ME COMPROMETO A REALIZAR ",
          { text: convenioActivo?.plazo, bold: true },
          " PAGOS MENSUALES PARA LLEVAR A CABO LA FIRMA DEL PRESENTE CONVENIO, PARA REALIZAR ",
          { text: this.utilsC.generarDescripcionMensualidades(credito), bold: true }
        ]
      } : {
        text: [
          "ME COMPROMETO A REALIZAR ",
          { text: "1 (UN)", bold: true },
          " PAGO MENSUAL POR LA CANTIDAD DE ",
          { text: "$" + this.utilsC.formatearNumeroConComas(convenioActivo?.monto_abono_inicial) + " ", bold: true },
          { text: "(" + this.utilsC.NumeroALetras(convenioActivo?.monto_abono_inicial), bold: true },
          { text: this.utilsC.formatDecimals(convenioActivo?.monto_abono_inicial) + ")", bold: true },
          " PARA LLEVAR A CABO LA FIRMA DEL PRESENTE CONVENIO, PARA POSTERIORMENTE REALIZAR ",
          ...this.utilsC.generarDescripcionMensualidades(credito),
          " SIENDO CADA UNO DE ELLOS LOS \xDALTIMOS D\xCDAS DE CADA MES HASTA CULMINAR EL ADEUDO TOTAL ",
          "DEL CR\xC9DITO, INICIANDO EL PRIMERO DE ELLOS EL D\xCDA ",
          { text: this.utilsC.fechaAletras(convenioActivo?.fecha_inicio), bold: true },
          "."
        ]
      };
      const generatedDocument = {
        pageMargins: [80, 50, 80, 50],
        content: [
          this.chronixPDF.generateTitle("CONVENIO DE PAGO PERSONA FISICA", "#7B001C", [`${localidad}, BAJA CALIFORNIA, ${fechaInicioConvenio}`]),
          // Introduccion
          {
            text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ",
            bold: true,
            margin: [0, 0, 0, 5]
          },
          {
            text: [`DIRECTOR DEL FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA. SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N`],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: "P r e s e n t e.",
            margin: [0, 0, 0, 15]
          },
          {
            text: [
              "\nYO ",
              { text: nombreAcreditado, bold: true },
              " CON DOMICILIO PARTICULAR EN ",
              { text: domicilioParticular, bold: true },
              " QUIEN SE IDENTIFICA CON ",
              { text: tipoIdentificacion, bold: true },
              ", N\xDAMERO DE IDENTIFICACI\xD3N OFICIAL ",
              { text: numeroIdentificacion, bold: true },
              ...!telefonosCasa.length ? [] : [
                " Y N\xDAMERO PARTICULAR ",
                { text: telefonoParticular, bold: true }
              ],
              ...!telefonosCelular.length ? [] : [
                ", Y N\xDAMERO DE OFICINA ",
                { text: telefonoOficina, bold: true }
              ],
              " RECONOZCO MI ADEUDO POR LA CANTIDAD DE ",
              { text: "$" + this.utilsC.formatearNumeroConComas(liquidarSinMoratorios), bold: true },
              { text: " (" + this.utilsC.NumeroALetras(liquidarSinMoratorios), bold: true },
              { text: " " + this.utilsC.formatDecimals(liquidarSinMoratorios) + ")", bold: true },
              " COMO SALDO TOTAL, TENIENDO COMO SALDO VENCIDO LA CANTIDAD DE ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoVencido), bold: true },
              { text: " (" + saldoVencidoConLetra + " " + this.formatDecimals(saldoVencido) + ")", bold: true },
              " SIENDO BENEFICIARIO DEL CR\xC9DITO ",
              { text: folio, bold: true },
              " DEL PROGRAMA ",
              { text: programa + ".", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: textoCompromiso,
            fontSize: 10,
            alignment: "justify"
          },
          { text: "SIN M\xC1S POR EL MOMENTO QUEDO A SUS \xD3RDENES.", alignment: "left", margin: [0, 20, 0, 0], fontSize: 10 },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          {
            text: `C. ${nombreAcreditado}`,
            alignment: "center",
            bold: true
          },
          {
            text: `ACREDITADO`,
            alignment: "center"
          }
        ]
      };
      pdfMake2.createPdf(generatedDocument).open();
    });
  }
};
_convenioPagoPF.\u0275fac = function convenioPagoPF_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _convenioPagoPF)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_convenioPagoPF.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _convenioPagoPF, factory: _convenioPagoPF.\u0275fac, providedIn: "any" });
var convenioPagoPF = _convenioPagoPF;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(convenioPagoPF, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/convenio_reestructura_pf.service.ts
var pdfMake3 = __toESM(require_pdfmake());
var pdfFonts3 = __toESM(require_vfs_fonts());
pdfMake3.addVirtualFileSystem(pdfFonts3);
var _convenioReestructuraPF = class _convenioReestructuraPF {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  getPagosFromActiveConvenios(credito) {
    return credito.convenios?.filter((convenio) => convenio.estatus === "ACTIVO").flatMap((convenio) => convenio.convenios_pagos ?? []) ?? [];
  }
  sortPagosByFecha(pagos) {
    return pagos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
  roundTwo(num) {
    const precisionFix = Math.round((num + Number.EPSILON) * 1e10) / 1e10;
    if (precisionFix > -0.01 && precisionFix < 0.01) {
      return 0;
    }
    return Math.round(precisionFix * 100) / 100;
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  generarReestructuraPF(creditoParam, convenio) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonales",
        "datosPersonales.telefonosPersonales",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "sucursales",
        "sesiones",
        "convenios",
        "convenios.conveniosPagos"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        console.log("CREDITO ORIGINAL: ", creditoOriginal);
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
        credito.aval = creditoOriginal.aval;
      }
      const aval = credito.aval;
      const convenioActivo = convenio ?? credito.convenios?.find((convenio2) => convenio2.estatus == "ACTIVO");
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      console.log("AVAL:", aval);
      console.log("CONVENIO ACTIVO:", convenioActivo);
      const pagosActivos = this.getPagosFromActiveConvenios(credito);
      const pagosOrdenadosFecha = this.sortPagosByFecha(pagosActivos);
      const tablaDPF = credito.datos_persona_fisica;
      const tablaDP = credito.datos_persona_fisica?.datos_personales;
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
      const telefonosCasa = this.utilsC.getTelefonosCasa(tablaDP?.telefonos_personales ?? []);
      const telefonosOficina = this.utilsC.getTelefonosOficina(tablaDP?.telefonos_personales ?? []);
      const telefonosCelular = this.utilsC.getTelefonosCelular(tablaDP?.telefonos_personales ?? []);
      const fecha = new Intl.DateTimeFormat("es-MX", {
        dateStyle: "full",
        timeZone: "America/Tijuana"
      }).format(/* @__PURE__ */ new Date()).replace(",", "");
      const nombreAcreditado = this.utils.nombreClienteFromDatosPersonales(tablaDP), fechaApertura = this.utilsC.fechaAletras(tablaEstadoCuenta?.fecha_inicio).toUpperCase(), montoMinistrar = credito.monto_autorizado, montoMinistrarConLetra = this.utilsC.NumeroALetrasConCentavos(montoMinistrar), creditoIDContrato = creditoID, mensualidadesVencidas = tablaEstadoCuenta?.mensualidades_vencidas, saldoVencido = tablaEstadoCuenta?.saldo_vencido, saldovencidoConLetra = this.utilsC.NumeroALetrasConCentavos(saldoVencido), cantidadPagos = this.utilsC.countPagosFromActiveConvenios(credito), primerPagoReestructurar = pagosOrdenadosFecha[0]?.pago_fijo ?? "N/A", primerPagoConLetra = this.utilsC.NumeroALetrasConCentavos(primerPagoReestructurar), fechaPagoReestructurar = this.utilsC.fechaAletras(pagosOrdenadosFecha[0]?.fecha) ?? "N/A", liquidarSinMoraatorios = tablaEstadoCuenta?.total_a_liquidar, liquidaarSinMoratoriosConLetra = this.utilsC.NumeroALetrasConCentavos(liquidarSinMoraatorios), rfc = tablaDP?.rfc?.toUpperCase(), domicilioFiscal = this.utils.domicilioFromDatosModel(tablaDPF?.negocios), domicilioParticular = this.utils.domicilioFromDatosModel(tablaDP), telefonoContacto = this.utilsC.combineTelefonosSacaUnNumero(telefonosCasa, telefonosCelular, telefonosOficina), email = tablaDP?.email, curp = tablaDP?.curp.toUpperCase(), capital = +(convenioActivo?.capital ?? 0), capitalConLetra = this.utilsC.NumeroALetrasConCentavos(capital), interesIva = +(convenioActivo?.iva_interes_ordinario ?? 0) + +(convenioActivo?.interes_ordinario ?? 0), interesConLetra = this.utilsC.NumeroALetrasConCentavos(interesIva), interesesMoratorios = +(convenioActivo?.interes_moratorio_condonado ?? 0), interesMoratoriosConLetra = this.utilsC.NumeroALetrasConCentavos(interesesMoratorios), saldoTotalConMoratorios = capital + interesIva + interesesMoratorios, saldoTotalConMoratoriosConLetra = this.utilsC.NumeroALetrasConCentavos(saldoTotalConMoratorios), saldoTotal = capital + interesIva, saldoTotalConLetra = this.utilsC.NumeroALetrasConCentavos(saldoTotal), fechaInicioReestructura = this.utilsC.fechaAletras(convenioActivo?.fecha_convenio) ?? "N/A", referenciaBancaria = credito.referencia_bancaria.toUpperCase(), nombreAval = this.utils.nombreClienteFromDatosPersonales(aval), direccionAval = this.utils.domicilioFromDatosModel(aval), representanteLegal = this.utils.nombreClienteFromDatosPersonales(tablaDP);
      console.log(capital, interesIva);
      const generatedDocument = {
        pageSize: { width: 612, height: 936 },
        pageMargins: [50, 40, 50, 10],
        content: [
          { text: "CONVENIO DE REESTRUCTURA DE CR\xC9DITO Y RECONOCIMIENTO DE ADEUDO.", bold: true, alignment: "center", margin: [0, 0, 0, 20] },
          {
            text: [
              "Convenio de reestructura de cr\xE9dito que celebran por una primera parte ",
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true },
              " en lo sucesivo el ACREDITANTE, en su car\xE1cter de FIDUCIARIO del ",
              { text: '"Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " en lo sucesivo el FIDEICOMISO, representado en este acto por el ",
              { text: "Lic. Alfonso Ch\xE1vez P\xE9rez", bold: true },
              " en su car\xE1cter de apoderado legal; y por una segunda parte, ",
              { text: nombreAcreditado, bold: true },
              ", en lo sucesivo el ACREDITADO",
              ...!aval ? ["."] : [
                ", y ",
                { text: nombreAval, bold: true },
                " en su car\xE1cter de AVAL."
              ],
              " Sujet\xE1ndose las partes al tenor de los siguientes antecedentes, declaraciones y cl\xE1usulas:"
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "A N T E C E D E N T E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "APERTURA DEL CR\xC9DITO ", bold: true },
              "de fecha ",
              { text: fechaApertura, bold: true },
              ', contrato de apertura de cr\xE9dito simple, en lo sucesivo "el contrato de cr\xE9dito", por el cual el ACREDITANTE ',
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true },
              " en su car\xE1cter de FIDUCIARIO del ",
              { text: '" Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " otorg\xF3 al ACREDITADO un cr\xE9dito simple por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(montoMinistrar), bold: true },
              { text: " (" + montoMinistrarConLetra + ")" },
              " identificado con el n\xFAmero de cr\xE9dito ",
              { text: creditoIDContrato, bold: true },
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "INCUMPLIMIENTO.- ", bold: true },
              'No ha cumplido con el pago mensual a que est\xE1 obligado en los t\xE9rminos del "contrato de cr\xE9dito", por lo que a la fecha tiene ',
              { text: mensualidadesVencidas, bold: true },
              " mensualidades vencidas sin pagar, las cuales suman el importe total de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoVencido), bold: true },
              { text: " (" + saldovencidoConLetra + ")" },
              ", por lo que ha solicitado la reestructuraci\xF3n del adeudo total insoluto mediante la celebraci\xF3n de este convenio, realizando ",
              { text: cantidadPagos, bold: true },
              cantidadPagos === 1 ? " pago que suma la cantidad de " : " pagos que suman la cantidad de ",
              { text: this.utilsC.formatearNumeroConComas(saldoTotal), bold: true },
              { text: " (" + saldoTotalConLetra + ")" },
              " al d\xEDa ",
              { text: fechaPagoReestructurar, bold: true },
              ", resultando un adeudo a liquidar por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(liquidarSinMoraatorios), bold: true },
              { text: " (" + liquidaarSinMoratoriosConLetra + ")." },
              " Una vez expuesto lo anterior, las partes declaran:"
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "D E C L A R A C I O N E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              "l.      EL ACREDITANTE, HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del fideicomiso identificado con el n\xFAmero ",
              { text: "F/53260 ", bold: true },
              "por conducto de su apoderado legal para actos de administraci\xF3n, as\xED como para pleitos y cobranzas el ",
              { text: "Lic. Alfonso Ch\xE1vez P\xE9rez", bold: true },
              ", seg\xFAn  consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. Declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual.",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "EL ACREDITADO, declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:\n\n", alignment: "justify", fontSize: 10 },
          {
            text: [
              "Que es una persona f\xEDsica, de nacionalidad mexicana, quien manifiesta ser mayor de edad y tener capacidad legal para celebrar el acto y tener actividad empresarial, dada de alta en el Registro Federal de Contribuyentes, seg\xFAn consta en la c\xE9dula de identi\uFB01caci\xF3n \uFB01scal ",
              { text: rfc, bold: true },
              ", con domicilio \uFB01scal en ",
              { text: domicilioFiscal, bold: true },
              " se\xF1alando como domicilio particular en ",
              { text: domicilioParticular, bold: true },
              ", en el cual declara que tambi\xE9n puede ser requerido y noti\uFB01cado, con n\xFAmero telef\xF3nico ",
              { text: telefonoContacto, bold: true },
              " y con correo electr\xF3nico ",
              { text: email, bold: true },
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "l.1      Que el representante legal cuenta con Clave \xFAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
              { text: curp, bold: true },
              ", tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identi\uFB01caci\xF3n o\uFB01cial, tales como INE, vigente mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio.",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "l.2      Que present\xF3 ",
              { text: "SOLICITUD DE REESTRUCTURA DE CR\xC9DITO", bold: true },
              " ante las autoridades administrativas del FIDEICOMISO, y toda vez que dicha solicitud ha motivado el ",
              { text: "RECONOCIMIENTO DE ADEUDO", bold: true },
              " objeto de la presente reestructura, bajo protesta de decir verdad mani\uFB01esta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica. ",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "Una vez expuesto lo anterior, las partes convienen en obligarse al tenor de las siguientes:", fontSize: 10 },
          { text: "C L \xC1 U S U L A S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "PRIMERA.- PERSONALIDAD Y REPRESENTACI\xD3N.", bold: true },
              " Las partes se reconocen mutuamente la personalidad con la que comparecen a la celebraci\xF3n del presente acto, y manifiestan bajo protesta de decir verdad, que las facultades de sus representantes (en caso de personas morales) no les han sido revocadas ni restringidas en forma alguna, por lo que cuentan con la legal representaci\xF3n de sus poderdantes.",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "SEGUNDA.- RECONOCIMIENTO DE ADEUDO.  EL ACREDITADO reconoce ", bold: true },
              "tener un adeudo con ",
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true },
              ", en su car\xE1cter de ",
              { text: "FIDUCIARIO", bold: true },
              " del ",
              { text: '" Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(liquidarSinMoraatorios), bold: true },
              { text: " (" + liquidaarSinMoratoriosConLetra + ")" },
              ", cantidad actualizada a la fecha del presente y que se obliga a pagar, en los t\xE9rminos de este convenio de reestructura. El cual resulta de la suma de los siguientes conceptos de adeudo:"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            table: {
              widths: [100, 100, "*"],
              body: [
                [
                  { text: "Capital", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(capital), alignment: "center", bold: true },
                  { text: capitalConLetra, bold: true, alignment: "left" }
                ],
                [
                  { text: "Inter\xE9s e IVA", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesIva), alignment: "center", bold: true },
                  { text: interesConLetra, bold: true, alignment: "left" }
                ],
                [
                  { text: "Intereses Moratorios", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesesMoratorios), alignment: "center", bold: true },
                  { text: interesMoratoriosConLetra, bold: true, alignment: "left" }
                ],
                [
                  { text: "Saldo total con moratorios", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(saldoTotalConMoratorios), alignment: "center", bold: true },
                  { text: saldoTotalConLetra, bold: true, alignment: "left" }
                ]
              ]
            },
            alignment: "center",
            margin: [0, 15, 0, 15],
            fontSize: 9,
            pageBreak: "before"
          },
          {
            text: [
              { text: "TERCERA. \u2013 QUITA CONDICIONADA. ", bold: true },
              "La PARTE ACTORA otorga una quita condicionada al finalizar el cr\xE9dito, los intereses moratorios devengados que este \xFAltimo le adeuda al d\xEDa ",
              { text: fechaInicioReestructura, bold: true },
              ", por la cantidad de ",
              { text: this.utilsC.formatearNumeroConComas(interesesMoratorios), bold: true },
              { text: " (" + interesMoratoriosConLetra + ")." },
              "Por lo que el ACREDITADO ",
              { text: "reconoce y acepta ", bold: true },
              "que resulta un ",
              { text: "adeudo total a reestructurar ", bold: true },
              "por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoTotal), bold: true },
              { text: " (" + saldoTotalConLetra + ")." },
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Por lo que el ACREDITADO ",
              { text: "reconoce y acepta", bold: true },
              " que resulta un ",
              { text: "adeudo total a reestructurar ", bold: true },
              "por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoTotal), bold: true },
              { text: " (" + saldoTotalConLetra + ")" },
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "CUARTA.- INTERESES MORATORIOS.- ", bold: true },
              "En caso de que los pagos no sean realizados oportunamente, se generar\xE1 un inter\xE9s moratorio del ",
              { text: "24% (veinticuatro punto cero por ciento) ", bold: true },
              "anual a cargo del ACREDITADO y el AVAL, el cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga veri\uFB01cativo el pago de dichas prestaciones, en el entendido de que cualquier abono se aplicar\xE1 primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital.",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "QUINTA.- DE LOS PAGOS. ", bold: true },
              "El ACREDITADO se obliga a efectuar ",
              ...this.utilsC.generarDescripcionMensualidades(credito),
              "a que se re\uFB01ere la cl\xE1usula CUARTA (se agrega la TABLA DE AMORTIZACI\xD3N respectiva). Pagos que realizar\xE1 \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito o transferencia electr\xF3nica al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
              { text: referenciaBancaria, bold: true },
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el \xFAltimo d\xEDa de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Realizando el pago el ACREDITADO deber\xE1 enviar copia del voucher del dep\xF3sito o transferencia electr\xF3nica al correo electr\xF3nico de ",
              "fondosbc.cobranza@baja.gob.mx y cobranzabc@baja.gob.mx",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: "De incumplir en 3 o m\xE1s mensualidades vencidas el ACREDITADO ser\xE1 boletinado a BUR\xD3 DE CR\xC9DITO FEDERAL en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.\n\n",
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "En caso de que el ACREDITADO no realizare 3 o m\xE1s de los pagos mensuales estipulados durante el tiempo remanente del plazo pactado para el pago, ",
              { text: "el presente convenio de reestructura quedar\xE1 sin efecto, volviendo las cosas al estado que ten\xEDan, como si este no se hubiese celebrado.", bold: true },
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "SEXTA.- AUSENCIA DE NOVACI\xD3N. ", bold: true },
              'Salvo las modificaciones que resultan conforme a lo pactado en este convenio de reestructura, subsisten las estipulaciones y obligaciones pactadas en el "CONTRATO DE CR\xC9DITO", por lo que las partes manifiestan expresamente que este convenio no constituye ni implica novaci\xF3n alguna, pues no ha sido su intenci\xF3n crear una nueva obligaci\xF3n.  \n\n'
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "S\xC9PTIMA.- DE LOS DOMICILIOS. ", bold: true },
              "Que para efectos del presente Contrato, el ACREDITANTE, se\xF1ala como domicilio \uFB01scal el ubicado en, ",
              { text: "Boulevard S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010.", bold: true },
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Que para efectos del presente Contrato, el ACREDITADO, se\xF1ala como ",
              { text: "domicilio fiscal ", bold: true },
              "el ubicado en ",
              { text: domicilioFiscal, bold: true },
              ".",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Que para efecto del presente Contrato, el ACREDITADO, se\xF1ala como ",
              { text: "domicilio particular ", bold: true },
              " el ubicado ",
              { text: domicilioParticular, bold: true },
              ".",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          ...!aval ? [] : [
            {
              text: [
                "Que para efecto del presente Contrato el AVAL se\xF1ala como domicilio particular el ubicado en ",
                { text: direccionAval, bold: true },
                ".",
                ".\n\n"
              ],
              alignment: "justify",
              fontSize: 10
            }
          ],
          {
            text: [
              { text: "NOVENA.- EN CASO DE CONTROVERSIA. ", bold: true },
              "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente convenio de reestructura a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles, y quedando a potestad del ACREDITANTE la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca.",
              ".\n\n"
            ],
            alignment: "justify",
            fontSize: 10,
            pageBreak: "before"
          },
          {
            text: "Le\xEDdo el presente convenio de reestructura y aclarados sus alcances y efectos, las partes lo firman de conformidad en la ciudad de Mexicali, Baja California.\n\n",
            alingment: "justify",
            fontSize: 10
          },
          { text: "POR EL ACREEDOR", bold: true, alignment: "center", margin: [0, 80, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "LIC. ALFONSO CHAVEZ PEREZ", bold: true, alignment: "center" },
          { text: 'En su car\xE1cter de apoderado Legal de "HSBC M\xE9xico S.A.,', bold: true, alignment: "center" },
          { text: "Instituci\xF3n de Banca M\xFAltiple,", bold: true, alignment: "center" },
          { text: 'Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true, alignment: "center" },
          { text: "\n\nEL SUSCRIPTOR", bold: true, alignment: "center" },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "C. " + representanteLegal, bold: true, alignment: "center" },
          { text: "En su car\xE1cter de acreditado", bold: true, alignment: "center" },
          { text: "TESTIGOS", bold: true, alignment: "center" },
          {
            layout: "noBorders",
            table: {
              widths: ["*", "*"],
              body: [
                [
                  { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
                  { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" }
                ],
                [
                  { text: "C.P. ADRIANA SOFIA CORNEJO PORRAS", bold: true, alignment: "center" },
                  { text: "LIC. NORMA GABRIELA GARC\xCDA SOLTERO", bold: true, alignment: "center" }
                ],
                [
                  { text: "Coordinador Administrativo", bold: true, alignment: "center" },
                  { text: " Coordinador  de Cobranza", bold: true, alignment: "center" }
                ]
              ]
            },
            fontSize: 10
          },
          { text: `



Mexicali, Baja California, a ${fechaInicioReestructura}`, alignment: "center" }
        ]
      };
      pdfMake3.createPdf(generatedDocument).open();
    });
  }
};
_convenioReestructuraPF.\u0275fac = function convenioReestructuraPF_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _convenioReestructuraPF)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_convenioReestructuraPF.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _convenioReestructuraPF, factory: _convenioReestructuraPF.\u0275fac, providedIn: "any" });
var convenioReestructuraPF = _convenioReestructuraPF;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(convenioReestructuraPF, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/convenio_reestructura_pm.service.ts
var pdfMake4 = __toESM(require_pdfmake());
var pdfFonts4 = __toESM(require_vfs_fonts());
pdfMake4.addVirtualFileSystem(pdfFonts4);
var _convenioReestructuraPM = class _convenioReestructuraPM {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  roundTwo(num) {
    const precisionFix = Math.round((num + Number.EPSILON) * 1e10) / 1e10;
    if (precisionFix > -0.01 && precisionFix < 0.01) {
      return 0;
    }
    return Math.round(precisionFix * 100) / 100;
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  generarReestructuraPM(creditoParam, convenio) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonasMorales",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonales",
        "datosPersonales.telefonosPersonales",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "productosFinancieros",
        "sucursales",
        "sesiones",
        "convenios",
        "convenios.conveniosPagos"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        console.log("CREDITO ORIGINAL: ", creditoOriginal);
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
        credito.aval = creditoOriginal.aval;
      }
      const aval = credito.aval;
      const convenioActivo = convenio ?? credito.convenios?.find((convenio2) => convenio2.estatus == "ACTIVO");
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      const tablaAmortizaciones = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(credito);
      console.log(tablaAmortizaciones);
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const pagosActivos = this.utilsC.getPagosFromActiveConvenios(credito);
      const pagosOrdenadosFecha = this.utilsC.sortPagosByFechaAscendente(pagosActivos);
      const tablaDPM = credito.datos_personas_morales;
      const tablaRL = credito.datos_personas_morales?.representante_legal;
      const telefonosCasa = this.utilsC.getTelefonosCasa(tablaRL?.telefonos_personales ?? []);
      const telefonosOficina = this.utilsC.getTelefonosOficina(tablaRL?.telefonos_personales ?? []);
      const telefonosCelular = this.utilsC.getTelefonosCelular(tablaRL?.telefonos_personales ?? []);
      const fecha = new Intl.DateTimeFormat("es-MX", {
        dateStyle: "full",
        timeZone: "America/Tijuana"
      }).format(/* @__PURE__ */ new Date()).replace(",", "");
      const razonSocial = this.utils.nombreClienteFromCredito(credito), representanteLegal = this.utils.nombreClienteFromDatosPersonales(tablaRL), nombreAval = this.utils.nombreClienteFromDatosPersonales(credito.datos_personales).toUpperCase(), fechaApertura = this.utilsC.fechaAletras(tablaEstadoCuenta?.fecha_inicio).toUpperCase(), montoAutorizadoConLetra = this.utilsC.NumeroALetrasConCentavos(tablaEstadoCuenta?.monto_total_mas_intereses), creditoIDContrato = creditoID, totalPagos = tablaEstadoCuenta?.monto_total_pagado, totalPagosConLetra = this.utilsC.NumeroALetrasConCentavos(totalPagos), fechaConvenio = this.utilsC.fechaAletras(convenioActivo?.fecha_convenio), fechaInicioReestructura = this.utilsC.fechaAletras(convenioActivo?.fecha_inicio), mensualidadesVencidaas = tablaEstadoCuenta?.mensualidades_vencidas, saldoVencido = tablaEstadoCuenta?.saldo_vencido, saldoVencidoConLetras = this.utilsC.NumeroALetrasConCentavos(saldoVencido), primerPagoReestructura = convenioActivo?.monto_abono_inicial ?? 0, primerPagoConLetras = this.utilsC.NumeroALetrasConCentavos(convenioActivo?.monto_abono_inicial) ?? "N/A", fechaPagoReestructura = this.utilsC.fechaAletras(convenioActivo?.fecha_convenio) ?? "N/A", liquidarSinMoratorios = tablaEstadoCuenta?.total_a_liquidar, liquidarSinMoratoriosConLetra = this.utilsC.NumeroALetrasConCentavos(liquidarSinMoratorios), rfc = tablaDPM?.rfc?.toUpperCase(), domicilioFiscal = this.utils.domicilioFromDatosModel(tablaDPM), domicilioParticular = this.utils.domicilioFromDatosModel(tablaRL), telefonoContacto = this.utilsC.combineTelefonosSacaUnNumero(telefonosCasa, telefonosCelular, telefonosOficina), email = tablaRL?.email, capital = +(convenioActivo?.capital ?? 0), capitalConLetra = this.utilsC.NumeroALetrasConCentavos(capital), interesIva = +(convenioActivo?.iva_interes_ordinario ?? 0) + +(convenioActivo?.interes_ordinario ?? 0), interesConLetra = this.utilsC.NumeroALetrasConCentavos(interesIva), interesesMoratorios = +(convenioActivo?.interes_moratorio_condonado ?? 0), interesMoratoriosConLetra = this.utilsC.NumeroALetrasConCentavos(interesesMoratorios), saldoTotalConMoratorios = capital + interesIva + interesesMoratorios, saldoTotalConMoratoriosConLetra = this.utilsC.NumeroALetrasConCentavos(saldoTotalConMoratorios), saldoTotal = capital + interesIva, saldoTotalConLetra = this.utilsC.NumeroALetrasConCentavos(saldoTotal), referenciaBancaria = credito.referencia_bancaria, direccionAval = this.utils.domicilioFromDatosModel(credito.datos_personales);
      const generatedDocument = {
        pageSize: { width: 612, height: 936 },
        pageMargins: [50, 40, 50, 10],
        content: [
          { text: "CONVENIO DE REESTRUCTURA DE CR\xC9DITO Y RECONOCIMIENTO DE ADEUDO.", bold: true, alignment: "center", margin: [0, 0, 0, 20] },
          {
            text: [
              "Convenio de reestructura de cr\xE9dito que celebran por una primera parte ",
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true },
              " en lo sucesivo el ACREDITANTE, en su car\xE1cter de FIDUCIARIO del ",
              { text: " Fideicomiso para el Desarrollo Econ\xF3mico de Baja California", bold: true },
              " en lo sucesivo el FIDEICOMISO, representado en este acto por el ",
              { text: "Lic. Alfonso Ch\xE1vez P\xE9rez", bold: true },
              ", en su car\xE1cter de apoderado legal; y por una segunda parte, ",
              { text: razonSocial, bold: true },
              " por conducto de su representante legal ",
              { text: representanteLegal, bold: true },
              " en lo sucesivo el ACREDITADO",
              ...!aval ? ["."] : [
                ", y ",
                { text: nombreAval, bold: true },
                " en su car\xE1cter de AVAL."
              ],
              " Sujet\xE1ndose las partes al tenor de los siguientes antecedentes, declaraciones y cl\xE1usulas:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "A N T E C E D E N T E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "APERTURA DE CR\xC9DITO", bold: true },
              " de fecha ",
              { text: fechaApertura, bold: true },
              ', contrato de apertura de cr\xE9dito simple, en lo sucesivo "el contrato de cr\xE9dito", por el cual el ACREDITANTE ',
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" ', bold: true },
              " en su car\xE1cter de FIDUCIARIO del ",
              { text: '" Fideicomiso para el Desarrollo Econ\xF3mico de Baja California" ', bold: true },
              " otorg\xF3 al ACREDITADO un cr\xE9dito simple por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(tablaEstadoCuenta?.monto_total_mas_intereses), bold: true },
              { text: ` ( ${montoAutorizadoConLetra} )`, bold: true },
              " identificado con el n\xFAmero de cr\xE9dito ",
              { text: creditoIDContrato, bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Debido al incumplimiento de pago anteriormente se\xF1alado, se hizo una reestructura de cr\xE9dito en fecha ",
              { text: fechaInicioReestructura, bold: true },
              ", identificado con el n\xFAmero ",
              { text: creditoID, bold: true },
              " registrando un total de pagos por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(totalPagos), bold: true },
              { text: ` ( ${totalPagosConLetra} ).` },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "INCUMPLIMIENTO.- ", bold: true },
              'No ha cumplido con el pago mensual a que est\xE1 obligado en los t\xE9rminos del "contrato de cr\xE9dito", por lo que a la fecha tiene ',
              { text: mensualidadesVencidaas, bold: true },
              " mensualidades vencidas sin pagar, las cuales suman el importe total de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoVencido), bold: true },
              { text: " (" + saldoVencidoConLetras + "), " },
              "por lo que ha solicitado la reestructuraci\xF3n del adeudo total insoluto mediante la celebraci\xF3n de este convenio, realizando un primer pago por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(primerPagoReestructura), bold: true },
              { text: " (" + primerPagoConLetras + ") el d\xEDa " },
              { text: fechaPagoReestructura, bold: true },
              ", resultando un adeudo a liquidar por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(liquidarSinMoratorios), bold: true },
              { text: " (" + liquidarSinMoratoriosConLetra + "). Una vez expuesto lo anterior, las partes declaran:" },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "D E C L A R A C I O N E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              "I. EL ACREDITANTE, HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del fideicomiso identificado con el n\xFAmero ",
              { text: "F/53260", bold: true },
              " por conducto de su apoderado legal para actos de administraci\xF3n, as\xED como para pleitos y cobranzas el ",
              { text: "Lic. Alfonso Ch\xE1vez P\xE9rez,", bold: true },
              " seg\xFAn  consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. Declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "II. Declara el ACREDITADO ",
              { text: razonSocial, bold: true },
              ", que es una persona moral constituida conforme a las leyes mexicanas vigentes, dada de alta en el Registro Federal de Contribuyentes ",
              { text: rfc, bold: true },
              ", con domicilio \uFB01scal en ",
              { text: domicilioFiscal + ".", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "Que por conducto de su representante legal, declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:\n\n", alignment: "justify" },
          {
            text: [
              "En este acto declara su representante legal la C. ",
              { text: representanteLegal, bold: true },
              ", que cuenta con la capacidad suficiente y se encuentra debidamente facultado para la celebraci\xF3n del presente Convenio, seg\xFAn consta en la escritura p\xFAblica, que obra en el expediente de cr\xE9dito de este Fideicomiso; y manifiesta bajo protesta de decir verdad que las facultades con las que comparece a la firma del presente Convenio no le han sido revocadas ni modificadas de forma alguna, que cuenta con identi\uFB01caci\xF3n o\uFB01cial vigente mismos que al efecto exhibe en copia fotost\xE1tica, se\xF1alando como domicilio particular en ",
              { text: domicilioParticular, bold: true },
              ", en el cual declara que tambi\xE9n puede ser requerido y noti\uFB01cado, con n\xFAmero telef\xF3nico ",
              { text: telefonoContacto, bold: true },
              " y con correo electr\xF3nico ",
              { text: email, bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "III. Que present\xF3 ",
              { text: "SOLICITUD DE REESTRUCTURA DE CR\xC9DITO", bold: true },
              " ante las autoridades administrativas del FIDEICOMISO, y toda vez que dicha solicitud ha motivado el ",
              { text: "RECONOCIMIENTO DE ADEUDO", bold: true },
              " objeto de la presente reestructura, bajo protesta de decir verdad mani\uFB01esta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: "Una vez expuesto lo anterior, las partes convienen en obligarse al tenor de las siguientes:\n\n",
            fontSize: 10
          },
          { text: "C L \xC1 U S U L A S:", bold: true, alignment: "center", margin: [0, 15, 0, 15], pageBreak: "before" },
          {
            text: [
              { text: "PRIMERA.- PERSONALIDAD Y REPRESENTACI\xD3N. ", bold: true },
              "Las partes se reconocen mutuamente la personalidad con la que comparecen a la celebraci\xF3n del presente acto, y manifiestan bajo protesta de decir verdad, que las facultades de sus representantes (en caso de personas morales) no les han sido revocadas ni restringidas en forma alguna, por lo que cuentan con la legal representaci\xF3n de sus poderdantes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "SEGUNDA.- RECONOCIMIENTO DE ADEUDO.  EL ACREDITADO reconoce ", bold: true },
              "tener un adeudo con ",
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria",', bold: true },
              " en su car\xE1cter de ",
              { text: "FIDUCIARIO", bold: true },
              " del ",
              { text: '"Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(liquidarSinMoratorios), bold: true },
              { text: " (" + liquidarSinMoratoriosConLetra + ") " },
              " cantidad actualizada a la fecha del presente y que se obliga a pagar, en los t\xE9rminos de este convenio de reestructura. El cual resulta de la suma de los siguientes conceptos de adeudo:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            table: {
              widths: [100, 100, "*"],
              body: [
                [
                  { text: "Capital", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(capital), alignment: "center", bold: true },
                  { text: capitalConLetra, bold: true, alignment: "left" }
                ],
                [
                  { text: "Inter\xE9s e IVA", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesIva), alignment: "center", bold: true },
                  { text: interesConLetra, bold: true, alignment: "left" }
                ],
                [
                  { text: "Intereses Moratorios", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesesMoratorios), alignment: "center", bold: true },
                  { text: interesMoratoriosConLetra, bold: true, alignment: "left" }
                ],
                [
                  { text: "Saldo total con moratorios", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(saldoTotalConMoratorios), alignment: "center", bold: true },
                  { text: saldoTotalConMoratoriosConLetra, bold: true, alignment: "left" }
                ]
              ]
            },
            alignment: "center",
            margin: [0, 15, 0, 15],
            fontSize: 9
          },
          {
            text: [
              "Esta reestructura de cr\xE9dito para fines administrativos se identifica con el n\xFAmero ",
              { text: '"' + creditoID + '".', bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "TERCERA. \u2013 QUITA CONDICIONADA. ", bold: true },
              "La PARTE ACTORA otorga una quita condicionada al finalizar el cr\xE9dito, los intereses moratorios devengados que este \xFAltimo le adeuda al d\xEDa ",
              { text: fechaConvenio, bold: true },
              ", por la cantidad de ",
              { text: "$" + this.utilsC.formatearNumeroConComas(tablaEstadoCuenta?.interes_moratorio), bold: true },
              { text: ` ( ${this.utilsC.NumeroALetras(tablaEstadoCuenta?.interes_moratorio)} ${this.utilsC.obtenerCentavosRedondeados(tablaEstadoCuenta?.interes_moratorio ?? 0).toString().padStart(2, "0")}/100 ).` },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Por lo que el ACREDITADO ",
              { text: "reconoce y acepta ", bold: true },
              "que resulta un ",
              { text: "adeudo total a reestructurar", bold: true },
              " por la cantidad de ",
              { text: "$" + this.utilsC.formatearNumeroConComas(saldoTotal), bold: true },
              { text: ` ( ${saldoTotalConLetra} ).` },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "CUARTA.- INTERESES MORATORIOS.- ", bold: true },
              "En caso de que los pagos no sean realizados oportunamente, se generar\xE1 un inter\xE9s moratorio del ",
              { text: "24% (veinticuatro punto cero por ciento)", bold: true },
              " anual a cargo del ACREDITADO y el AVAL, el cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga veri\uFB01cativo el pago de dichas prestaciones, en el entendido de que cualquier abono se aplicar\xE1 primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "QUINTA.- DE LOS PAGOS. ", bold: true },
              "El ACREDITADO se obliga a efectuar ",
              ...this.utilsC.generarDescripcionMensualidades(credito),
              " a que se re\uFB01ere la cl\xE1usula CUARTA (se agrega la TABLA DE AMORTIZACI\xD3N respectiva). Pagos que realizar\xE1 \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito o transferencia electr\xF3nica al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
              { text: referenciaBancaria, bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el \xFAltimo d\xEDa de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Realizando el pago el ACREDITADO deber\xE1 enviar copia del voucher del dep\xF3sito o transferencia electr\xF3nica al correo electr\xF3nico de ",
              "cobranzabc@baja.gob.mx y fondosbc.cobranza@baja.gob.mx",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "De incumplir en 3 o m\xE1s mensualidades vencidas el ACREDITADO ser\xE1 boletinado a BUR\xD3 DE CR\xC9DITO FEDERAL en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "En caso de que el ACREDITADO no realizare 3 o m\xE1s de los pagos mensuales estipulados durante el tiempo remanente del plazo pactado para el pago, ",
              { text: "el presente convenio de reestructura quedar\xE1 sin efecto, volviendo las cosas al estado que ten\xEDan, como si este no se hubiese celebrado.", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "SEXTA.- AUSENCIA DE NOVACI\xD3N. ", bold: true },
              'Salvo las modificaciones que resultan conforme a lo pactado en este convenio de reestructura, subsisten las estipulaciones y obligaciones pactadas en el "CONTRATO DE CR\xC9DITO", por lo que las partes manifiestan expresamente que este convenio no constituye ni implica novaci\xF3n alguna, pues no ha sido su intenci\xF3n crear una nueva obligaci\xF3n.  ',
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "S\xC9PTIMA.- DE LOS DOMICILIOS. ", bold: true },
              "Que para efectos del presente Convenio, el ACREDITANTE, se\xF1ala como domicilio \uFB01scal el ubicado en, ",
              { text: "Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010.", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Que para efectos del presente Convenio, el ACREDITADO, se\xF1ala como domicilio \uFB01scal el ubicado en ",
              { text: domicilioFiscal + ".", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Que para efecto del presente Contrato el AVAL se\xF1ala como domicilio particular el ubicado en ",
              { text: direccionAval + ".", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              { text: "OCTAVA.- EN CASO DE CONTROVERSIA. ", bold: true },
              "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente convenio de reestructura a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles, y quedando a potestad del ACREDITANTE la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "Le\xEDdo el presente convenio de reestructura y aclarados sus alcances y efectos, las partes lo firman de conformidad en la ciudad de Mexicali, Baja California."
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "POR EL ACREEDOR", bold: true, alignment: "center", margin: [0, 80, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "LIC. ALFONSO CHAVEZ PEREZ", bold: true, alignment: "center" },
          { text: 'En su car\xE1cter de apoderado Legal de "HSBC M\xE9xico S.A.,', bold: true, alignment: "center" },
          { text: "Instituci\xF3n de Banca M\xFAltiple,", bold: true, alignment: "center" },
          { text: 'Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true, alignment: "center" },
          { text: "\n\nEL SUSCRIPTOR", bold: true, alignment: "center" },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "C. " + representanteLegal, bold: true, alignment: "center" },
          { text: "En su car\xE1cter de Representante Legal de", bold: true, alignment: "center" },
          { text: razonSocial, bold: true, alignment: "center" },
          { text: "TESTIGOS", bold: true, alignment: "center", margin: [0, 40, 0, 0] },
          {
            layout: "noBorders",
            table: {
              widths: ["*", "*"],
              body: [
                [
                  { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
                  { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" }
                ],
                [
                  { text: "C.P. ADRIANA SOFIA CORNEJO PORRAS", bold: true, alignment: "center" },
                  { text: "LIC. NORMA GABRIELA GARC\xCDA SOLTERO", bold: true, alignment: "center" }
                ],
                [
                  { text: "Coordinador Administrativo", bold: true, alignment: "center" },
                  { text: "Coordinador  de Cobranza", bold: true, alignment: "center" }
                ]
              ]
            },
            fontSize: 11
          },
          { text: `



Mexicali, Baja California, a ${fecha}`, alignment: "center" }
        ]
      };
      pdfMake4.createPdf(generatedDocument).open();
    });
  }
};
_convenioReestructuraPM.\u0275fac = function convenioReestructuraPM_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _convenioReestructuraPM)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_convenioReestructuraPM.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _convenioReestructuraPM, factory: _convenioReestructuraPM.\u0275fac, providedIn: "any" });
var convenioReestructuraPM = _convenioReestructuraPM;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(convenioReestructuraPM, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/convenio_extrajudicial_pm.service.ts
var pdfMake5 = __toESM(require_pdfmake());
var pdfFonts5 = __toESM(require_vfs_fonts());
pdfMake5.addVirtualFileSystem(pdfFonts5);
var _ConvenioExtrajudicialPM = class _ConvenioExtrajudicialPM {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  getPagosFromActiveConvenios(credito) {
    return credito.convenios?.filter((convenio) => convenio.estatus === "ACTIVO").flatMap((convenio) => convenio.convenios_pagos ?? []) ?? [];
  }
  sortPagosByFecha(pagos) {
    return pagos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
  roundTwo(num) {
    const precisionFix = Math.round((num + Number.EPSILON) * 1e10) / 1e10;
    if (precisionFix > -0.01 && precisionFix < 0.01) {
      return 0;
    }
    return Math.round(precisionFix * 100) / 100;
  }
  getActiveConvenioId(credito) {
    return credito.convenios?.find((convenio) => convenio.estatus === "ACTIVO")?.id;
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  generarConvenioExtrajudicialPM(creditoParam, convenio) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonasMorales",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "productosFinancieros",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "sucursales",
        "sesiones",
        "convenios",
        "convenios.conveniosPagos"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      const estadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
      }
      const convenioActivo = convenio ?? credito.convenios?.find((convenio2) => convenio2.estatus == "ACTIVO");
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      const pagosOrdenadosFecha = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(credito);
      const tablaAmortizaciones = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(credito);
      console.log(tablaAmortizaciones);
      const tablaAC = credito.datos_personas_morales?.acta_constitutiva;
      const tablaDPM = credito.datos_personas_morales;
      const tablaRL = credito.datos_personas_morales?.representante_legal;
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const capitalCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("abono_a_capital", tablaAmortizaciones);
      const interesCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("interes", tablaAmortizaciones);
      const ivaCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("iva", tablaAmortizaciones);
      const capitalCreditoPago = this.utilsEstadoCuenta.sumarListaByKey("pago_capital", tablaEstadoCuenta?.periodos);
      const interesCreditoPago = this.utilsEstadoCuenta.sumarListaByKey("pago_interes", tablaEstadoCuenta?.periodos);
      const ivaCreditoPago = this.utilsEstadoCuenta.sumarListaByKey("pago_iva", tablaEstadoCuenta?.periodos);
      const telefonosCasa = this.utilsC.getTelefonosCasa(tablaRL?.telefonos_personales ?? []);
      const telefonosOficina = this.utilsC.getTelefonosOficina(tablaRL?.telefonos_personales ?? []);
      const telefonosCelular = this.utilsC.getTelefonosCelular(tablaRL?.telefonos_personales ?? []);
      const nombreAcreditado = tablaDPM?.razon_social.toUpperCase(), fechaApertura = this.utilsC.fechaAletras(tablaEstadoCuenta?.fecha_inicio).toUpperCase(), montoAutorizado = tablaEstadoCuenta?.monto_total_mas_intereses, montoAutorizadoLetras = this.utilsC.NumeroALetras(montoAutorizado), numeroCredito = creditoID, mensualidadesVencidas = tablaEstadoCuenta?.mensualidades_vencidas, saldoVencido = tablaEstadoCuenta?.saldo_vencido, saldoVencidoConLetra = this.utilsC.NumeroALetras(saldoVencido), escrituraPublicaFecha = this.utilsC.fechaAletras(tablaAC?.fecha_escritura), numeroEscritura = tablaAC?.numero_escritura, numeroVolumen = tablaAC?.volumen_escritura, nombreNotario = tablaAC?.nombre_notario.toUpperCase(), numeroNotario = tablaAC?.numero_notario.toUpperCase(), ciudadNotario = tablaAC?.ciudad_notario.toUpperCase(), fechaInscripcion = this.utilsC.fechaAletras(tablaAC?.fecha_inscripcion_rppc), constitucion = tablaDPM?.razon_social.toUpperCase(), rfc = tablaDPM?.rfc?.toUpperCase(), domicilioFiscal = this.utils.domicilioFromDatosModel(tablaDPM), domicilioParticular = this.utils.domicilioFromDatosModel(tablaDPM), representanteLegal = this.utils.nombreClienteFromDatosPersonales(tablaRL), numeroIdentificacion = tablaRL?.identificacion_numero?.trim() ? tablaRL.identificacion_numero.toUpperCase() : "N/A", liquidarSinMoratorios = tablaEstadoCuenta?.total_a_liquidar, liquidarSinMoratoriosConLetra = this.utilsC.NumeroALetras(liquidarSinMoratorios), capital = tablaEstadoCuenta?.total_a_liquidar, capitalConLetra = this.utilsC.NumeroALetras(capital), interesesMoratorios = estadoCuenta?.interes_moratorio, interesesMoratoriosConLetra = this.utilsC.NumeroALetras(interesesMoratorios), saldoTotal = this.roundTwo(Number(capital) + Number(interesesMoratorios)), saldoTotalConLetra = this.utilsC.NumeroALetras(saldoTotal), identificacionReestructura = this.getActiveConvenioId(credito), primerPagoReestructura = convenioActivo?.monto_abono_inicial ?? 0, primerPagoConLetra = this.utilsC.NumeroALetras(primerPagoReestructura), plazoReestructura = convenioActivo?.plazo - 1, montoMensual = convenioActivo?.convenios_pagos?.[0].pago_fijo, ultimoMontoMensual = convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.pago_fijo, ultimoMontoMensualLetras = this.utilsC.NumeroALetras(ultimoMontoMensual), montoMensualLetras = this.utilsC.NumeroALetras(montoMensual), referenciaBancaria = credito.referencia_bancaria.toUpperCase();
      const fecha = this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toLocaleLowerCase();
      const fechaConvenio = this.utils.fechaFormateada(convenioActivo?.fecha_convenio);
      console.log(numeroIdentificacion);
      const generatedDocument = {
        pageMargins: [60, 50, 60, 50],
        content: [
          {
            text: [
              "CONVENIO DE PAGO\n",
              "RECONOCIMIENTO DE ADEUDO",
              "\n\n"
            ],
            alignment: "center",
            fontSize: 14,
            bold: true
          },
          {
            text: [
              "Convenio de pago de cr\xE9dito que celebran por una primera parte ",
              { text: "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria,", bold: true },
              " en lo sucesivo el ACREDITANTE, en su car\xE1cter de FIDUCIARIO del ",
              { text: 'Fideicomiso identificado con el n\xFAmero F/53260, "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California "', bold: true },
              " en lo sucesivo el FIDEICOMISO, representado en este acto por el ",
              { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ, ", bold: true },
              "en su car\xE1cter de apoderado legal; y por una segunda parte, ",
              { text: nombreAcreditado, bold: true },
              ", por conducto de su representante legal ",
              { text: this.utils.nombreClienteFromDatosPersonales(tablaDPM?.representante_legal), bold: true },
              " en lo sucesivo el ACREDITADO, sujet\xE1ndose las partes al tenor de los siguientes antecedentes, declaraciones y cl\xE1usulas:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "A N T E C E D E N T E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "APERTURA DE CR\xC9DITO", bold: true },
              " de fecha ",
              { text: fechaApertura, bold: true },
              ', contrato de apertura de cr\xE9dito simple, en lo sucesivo "el contrato de cr\xE9dito", por el cual el ACREDITANTE ',
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true },
              " en su car\xE1cter de FIDUCIARIO del ",
              { text: '"Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " otorg\xF3 al ACREDITADO un cr\xE9dito simple por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(montoAutorizado), bold: true },
              { text: " (" + montoAutorizadoLetras + " " + this.formatDecimals(montoAutorizado) + ") ", bold: true },
              " identificado con el n\xFAmero de cr\xE9dito ",
              { text: numeroCredito, bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "INCUMPLIMIENTO.- ", bold: true },
              'No ha cumplido con el pago mensual a que est\xE1 obligado en los t\xE9rminos del "contrato de cr\xE9dito", por lo que a la fecha tiene ',
              { text: mensualidadesVencidas, bold: true },
              " mensualidades vencidas sin pagar, las cuales suman el importe total de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoVencido), bold: true },
              { text: " (" + saldoVencidoConLetra + " " + this.formatDecimals(saldoVencido) + ") ", bold: true },
              ", por lo que ha solicitado la reestructuraci\xF3n del adeudo total insoluto mediante la celebraci\xF3n de este convenio. Una vez expuesto lo anterior, las partes declaran:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "D E C L A R A C I O N E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "l. ", bold: true },
              "EL ACREDITANTE, HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del fideicomiso identificado con el n\xFAmero ",
              { text: "F/53260", bold: true },
              " por conducto de su apoderado legal para actos de administraci\xF3n, as\xED como para pleitos y cobranzas el ",
              { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", bold: true },
              ", seg\xFAn  consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. Declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "ll. ", bold: true },
              "Declara el ",
              { text: "ACREDITADO por conducto de su representante legal", bold: true },
              ", bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que es una persona moral constituida conforme a las leyes mexicanas vigentes, acredit\xE1ndolo mediante escritura p\xFAblica de fecha ",
              { text: escrituraPublicaFecha, bold: true },
              ", otorgada bajo n\xFAmero",
              { text: numeroEscritura, bold: true },
              ", volumen ",
              { text: numeroVolumen, bold: true },
              " ante el protocolo del notario p\xFAblico Lic. ",
              { text: nombreNotario, bold: true },
              " titular de la notar\xEDa No. ",
              { text: numeroNotario, bold: true },
              ", de la ciudad de ",
              { text: ciudadNotario + " BAJA CALIFORNIA", bold: true },
              ", inscrita en el Registro P\xFAblico de la Propiedad y Comercio bajo inscripci\xF3n de fecha ",
              { text: fechaInscripcion, bold: true },
              " que contiene la constituci\xF3n de la sociedad denominada ",
              { text: constitucion, bold: true },
              " con Registro Federal de Contribuyentes ",
              { text: rfc, bold: true },
              " se\xF1alando como domicilio fiscal el ubicado en ",
              { text: domicilioFiscal, bold: true },
              " el cual declara puede ser notificado; pudiendo en consecuencia entregar las facturas de acuerdo a las leyes fiscales vigentes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que su representante legal el C. ",
              { text: representanteLegal, bold: true },
              ", quien acredita su personalidad con identificaci\xF3n oficial No. ",
              { text: numeroIdentificacion, bold: true },
              ", vigente a la fecha y anexada al presente; que cuenta con la capacidad suficiente y se encuentra debidamente facultado para la celebraci\xF3n del presente Contrato, seg\xFAn consta en la escritura p\xFAblica n\xFAmero ",
              { text: numeroEscritura, bold: true },
              ", otorgada ante la fe del Notario P\xFAblico No.",
              { text: numeroNotario, bold: true },
              " de la ciudad ",
              { text: ciudadNotario, bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que present\xF3 ",
              { text: "SOLICITUD DE REESTRUCTURA DE CR\xC9DITO", bold: true },
              " ante las autoridades administrativas del FIDEICOMISO, y toda vez que dicha solicitud ha motivado el ",
              { text: "RECONOCIMIENTO DE ADEUDO", bold: true },
              " objeto de la presente restructura, bajo protesta de decir verdad mani\uFB01esta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Una vez expuesto lo anterior, las partes convienen en obligarse al tenor de las siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "C L \xC1 U S U L A S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "PRIMERA.- PERSONALIDAD Y REPRESENTACI\xD3N. ", bold: true },
              "Las partes se reconocen mutuamente la personalidad con la que comparecen a la celebraci\xF3n del presente acto, y manifiestan bajo protesta de decir verdad, que las facultades de sus representantes (en caso de personas morales) no les han sido revocadas ni restringidas en forma alguna, por lo que cuentan con la legal representaci\xF3n de sus poderdantes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEGUNDA.- RECONOCIMIENTO DE ADEUDO.  EL ACREDITADO reconoce", bold: true },
              " tener un adeudo con ",
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria",', bold: true },
              " en su car\xE1cter de ",
              { text: "FIDUCIARIO", bold: true },
              " del ",
              { text: '"Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(liquidarSinMoratorios), bold: true },
              { text: " (" + liquidarSinMoratoriosConLetra + " " + this.formatDecimals(liquidarSinMoratorios) + ") ", bold: true },
              " cantidad actualizada a la fecha del presente y que se obliga a pagar, en los t\xE9rminos de este convenio de reestructura. El cual resulta de la suma de los siguientes conceptos de adeudo:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            table: {
              widths: [100, 100, "*"],
              body: [
                [
                  { text: "Capital", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(capital), alignment: "center", bold: true },
                  { text: capitalConLetra + " " + this.formatDecimals(capital), bold: true, alignment: "left" }
                ],
                [
                  { text: "Intereses Moratorios", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesesMoratorios), alignment: "center", bold: true },
                  { text: interesesMoratoriosConLetra + " " + this.formatDecimals(interesesMoratorios), bold: true, alignment: "left" }
                ],
                [
                  { text: "Adeudo", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(saldoTotal), alignment: "center", bold: true },
                  { text: saldoTotalConLetra + " " + this.formatDecimals(saldoTotal), bold: true, alignment: "left" }
                ]
              ]
            },
            alignment: "center",
            margin: [0, 15, 0, 15],
            fontSize: 9
          },
          {
            text: [
              identificacionReestructura ? [
                "Esta reestructura de cr\xE9dito para fines administrativos se identifica con el n\xFAmero ",
                { text: identificacionReestructura, bold: true },
                ".",
                "\n\n"
              ] : ""
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "TERCERA- QUITA CONDICIONADA. ", bold: true },
              "El ACREEDOR otorga una quita condicionada al finalizar el cr\xE9dito a EL ACREDITADO, los intereses moratorios devengados que este \xFAltimo le adeuda al d\xEDa ",
              { text: fecha, bold: true },
              ", mismos que importan la cantidad ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(interesesMoratorios), bold: true },
              { text: " (" + interesesMoratoriosConLetra + " " + this.formatDecimals(interesesMoratorios) + ").", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Por lo que el ACREDITADO ",
              { text: "reconoce y acepta ", bold: true },
              "que resulta un ",
              { text: "adeudo total a reestructurar", bold: true },
              " por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoTotal), bold: true },
              { text: " (" + saldoTotalConLetra + " " + this.formatDecimals(saldoTotal) + ")", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "CUARTA.- INTERESES MORATORIOS.- ", bold: true },
              "En caso de que los pagos no sean realizados oportunamente, se generar\xE1 un inter\xE9s moratorio del ",
              { text: "24% (veinticuatro punto cero por ciento)", bold: true },
              "anual a cargo del ACREDITADO y el AVAL, el cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga veri\uFB01cativo el pago de dichas prestaciones, en el entendido de que cualquier abono se aplicara primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "QUINTA.- DE LOS PAGOS. ", bold: true },
              "El ACREDITADO se obliga a efectuar ",
              ...this.utilsC.generarDescripcionMensualidades(credito),
              " o hasta cubrir la totalidad del adeudo (se agrega la TABLA DE AMORTIZACI\xD3N). Pagos que realizar\xE1 \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito o transferencia electr\xF3nica al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
              { text: referenciaBancaria, bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el d\xEDa \xFAltimo de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Realizando el pago el ACREDITADO deber\xE1 enviar copia del baucher del dep\xF3sito o transferencia electr\xF3nica al correo electr\xF3nico de ",
              "fondosbc.cobranza@baja.gob.mx",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "De incumplir en 3 o m\xE1s mensualidades vencidas el ACREDITADO ser\xE1 boletinado a BUR\xD3 DE CR\xC9DITO FEDERAL en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "En caso de que el ACREDITADO no realizare 3 o m\xE1s de los pagos mensuales estipulados durante el tiempo remanente del plazo pactado para el pago, ",
              { text: "el presente convenio de pago quedar\xE1 sin efecto, volviendo las cosas al estado que ten\xEDan, como si este no se hubiese celebrado.", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEXTA.- AUSENCIA DE NOVACI\xD3N. ", bold: true },
              'Salvo las modificaciones que resultan conforme a lo pactado en este convenio de reestructura, subsisten las estipulaciones y obligaciones pactadas en el "CONTRATO DE CR\xC9DITO", por lo que las partes manifiestan expresamente que este convenio no constituye ni implica novaci\xF3n alguna, pues no ha sido su intenci\xF3n crear una nueva obligaci\xF3n.  Pues no ha sido su intenci\xF3n crear una obligaci\xF3n nueva, sin que obste que la presente reestructura interrumpe cualquier prescripci\xF3n negativa aplicable a derecho. ',
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "S\xC9PTIMA.- DE LOS DOMICILIOS. ", bold: true },
              "Que para efectos del presente Contrato, el ACREDITANTE, se\xF1ala como domicilio \uFB01scal el ubicado en,",
              { text: "Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010.", bold: true },
              "Que para efectos del presente Contrato, el ACREDITADO, se\xF1ala como ",
              { text: "domicilio fiscal ", bold: true },
              "el ubicado en ",
              { text: domicilioFiscal, bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que para efecto del presente Contrato, el ACREDITADO, se\xF1ala como ",
              { text: "domicilio particular", bold: true },
              " el ubicado ",
              { text: domicilioParticular, bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "OCTAVA.- EN CASO DE CONTROVERSIA. ", bold: true },
              "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente convenio de reestructura a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles, y quedando a potestad del ACREDITANTE la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9,
            pageBreak: "before"
          },
          {
            text: [
              "Le\xEDdo el presente convenio de reestructura y aclarados sus alcances y efectos, las partes lo firman de conformidad en la ciudad de Mexicali, Baja California.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "POR EL ACREEDOR", bold: true, alignment: "center", margin: [0, 30, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", bold: true, alignment: "center" },
          { text: 'En su car\xE1cter de apoderado Legal de "HSBC M\xE9xico S.A.,', bold: true, alignment: "center" },
          { text: "Instituci\xF3n de Banca M\xFAltiple,", bold: true, alignment: "center" },
          { text: 'Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true, alignment: "center" },
          { text: "Fideicomiso identificado con el n\xFAmero F/53260", bold: true, alignment: "center" },
          { text: "\n\nEL ACREDITADO", bold: true, alignment: "center" },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "C. " + nombreAcreditado, bold: true, alignment: "center" },
          { text: "Representante legal: " + representanteLegal, bold: true, alignment: "center" },
          { text: `



Mexicali, Baja California, a ${fecha}`, alignment: "center" }
        ]
      };
      pdfMake5.createPdf(generatedDocument).open();
    });
  }
};
_ConvenioExtrajudicialPM.\u0275fac = function ConvenioExtrajudicialPM_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConvenioExtrajudicialPM)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_ConvenioExtrajudicialPM.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConvenioExtrajudicialPM, factory: _ConvenioExtrajudicialPM.\u0275fac, providedIn: "any" });
var ConvenioExtrajudicialPM = _ConvenioExtrajudicialPM;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConvenioExtrajudicialPM, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/convenio_extrajudicial_pf.service.ts
var pdfMake6 = __toESM(require_pdfmake());
var pdfFonts6 = __toESM(require_vfs_fonts());
pdfMake6.addVirtualFileSystem(pdfFonts6);
var _ConvenioExtrajudicialPF = class _ConvenioExtrajudicialPF {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  getPagosFromActiveConvenios(credito) {
    return credito.convenios?.filter((convenio) => convenio.estatus === "ACTIVO").flatMap((convenio) => convenio.convenios_pagos ?? []) ?? [];
  }
  sortPagosByFecha(pagos) {
    return pagos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
  roundTwo(num) {
    const precisionFix = Math.round((num + Number.EPSILON) * 1e10) / 1e10;
    if (precisionFix > -0.01 && precisionFix < 0.01) {
      return 0;
    }
    return Math.round(precisionFix * 100) / 100;
  }
  getActiveConvenioId(credito) {
    return credito.convenios?.find((convenio) => convenio.estatus === "ACTIVO")?.id;
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  generarConvenioExtrajudicialPF(creditoParam, convenio) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonasMorales",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "productosFinancieros",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "sucursales",
        "sesiones",
        "convenios",
        "convenios.conveniosPagos"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
      }
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
      const convenioActivo = convenio ?? credito.convenios?.find((convenio2) => convenio2.estatus == "ACTIVO");
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      const pagosActivos = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(credito);
      const pagosOrdenadosFecha = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(credito);
      const tablaAmortizaciones = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(credito);
      const abonosDistribuiddos = tablaEstadoCuenta?.abonos_distribuidos ?? [];
      const tablaDPF = credito.datos_persona_fisica;
      const tablaDP = credito.datos_persona_fisica?.datos_personales;
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const capitalCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("capital", tablaAmortizaciones);
      const interesCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("interes", tablaAmortizaciones);
      const ivaCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("iva", tablaAmortizaciones);
      const capitalAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_capital", abonosDistribuiddos);
      const interesAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_interes", abonosDistribuiddos);
      const ivaAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_iva", abonosDistribuiddos);
      const telefonosCasa = this.utilsC.getTelefonosCasa(tablaDP?.telefonos_personales ?? []);
      const telefonosOficina = this.utilsC.getTelefonosOficina(tablaDP?.telefonos_personales ?? []);
      const telefonosCelular = this.utilsC.getTelefonosCelular(tablaDP?.telefonos_personales ?? []);
      const nombreAcreditado = this.utils.nombreClienteFromDatosPersonales(tablaDP), fechaApertura = this.utilsC.fechaAletras(tablaEstadoCuenta?.fecha_inicio).toUpperCase(), montoAutorizado = tablaEstadoCuenta?.monto_total_mas_intereses, montoAutorizadoConLetra = this.utilsC.NumeroALetras(montoAutorizado), numeroCredito = creditoID, mensualidadesVencidas = tablaEstadoCuenta?.mensualidades_vencidas, saldoVencido = tablaEstadoCuenta?.saldo_vencido, saldoVencidoConLetra = this.utilsC.NumeroALetras(saldoVencido), tipoIdentificacion = tablaDP?.identificacion.toUpperCase().replace("INNE", "INE"), numeroIdentificacion = tablaDP?.identificacion_numero?.trim() ? tablaDP.identificacion_numero.toUpperCase() : "N/A", rfc = tablaDP?.rfc?.toUpperCase(), domicilioFiscal = this.utils.domicilioFromDatosModel(tablaDPF?.negocios), domicilioParticular = this.utils.domicilioFromDatosModel(tablaDP), curp = tablaDP?.curp.toUpperCase(), liquidarSinMoratorios = tablaEstadoCuenta?.total_a_liquidar, liquidarMoratoriosConLetra = this.utilsC.NumeroALetras(liquidarSinMoratorios), capital = tablaEstadoCuenta?.total_a_liquidar, capitalConLetra = this.utilsC.NumeroALetras(capital), interesMoratorio = convenioActivo?.interes_moratorio_condonado, interesMoratorioConLetra = this.utilsC.NumeroALetras(interesMoratorio), saldoTotal = this.roundTwo(Number(capital) + Number(interesMoratorio)), saldoTotalConLetra = this.utilsC.NumeroALetras(saldoTotal), identificacionReestructura = this.getActiveConvenioId(credito), primerPagoReestructura = convenioActivo?.monto_abono_inicial ?? 0, primerPagoConLetra = this.utilsC.NumeroALetras(primerPagoReestructura), plazoReestructura = convenioActivo?.plazo - 1, montoMensual = convenioActivo?.convenios_pagos?.[0].pago_fijo, ultimoMontoMensual = convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.pago_fijo, montoMensualLetras = this.utilsC.NumeroALetras(montoMensual), ultimoMontoMensualLetras = this.utilsC.NumeroALetras(ultimoMontoMensual), referenciaBancaria = credito.referencia_bancaria.toUpperCase();
      const formatted = this.formatDecimals(saldoVencido);
      const fecha = this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toLocaleLowerCase();
      const fechaConvenio = this.utils.fechaFormateada(convenioActivo?.fecha_convenio);
      const generatedDocument = {
        pageMargins: [60, 50, 60, 50],
        content: [
          {
            text: [
              "CONVENIO DE PAGO\n",
              "RECONOCIMIENTO DE ADEUDO",
              "\n\n"
            ],
            alignment: "center",
            fontSize: 14,
            bold: true
          },
          {
            text: [
              "Convenio de pago de cr\xE9dito que celebran por una primera parte ",
              { text: "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria,", bold: true },
              " en lo sucesivo el ACREDITANTE, en su car\xE1cter de FIDUCIARIO del ",
              { text: '"Fideicomiso identificado con el n\xFAmero F/53260, "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " en lo sucesivo el FIDEICOMISO, representado en este acto por el ",
              { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", bold: true },
              ", en su car\xE1cter de apoderado legal; y por una segunda parte, ",
              { text: nombreAcreditado, bold: true },
              ", en lo sucesivo el ACREDITADO, sujet\xE1ndose las partes al tenor de los siguientes antecedentes, declaraciones y cl\xE1usulas:"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "A N T E C E D E N T E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "APERTURA DE CR\xC9DITO", bold: true },
              " de fecha ",
              { text: fechaApertura, bold: true },
              ' contrato de apertura de cr\xE9dito simple, en lo sucesivo "el contrato de cr\xE9dito", por el cual el ACREDITANTE ',
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true },
              " en su car\xE1cter de FIDUCIARIO del ",
              { text: '"Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " otorg\xF3 al ACREDITADO un cr\xE9dito simple por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(montoAutorizado), bold: true },
              { text: " (" + montoAutorizadoConLetra + " " + this.formatDecimals(montoAutorizado) + ") ", bold: true },
              " identificado con el n\xFAmero de cr\xE9dito ",
              { text: numeroCredito, bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "INCUMPLIMIENTO.- ", bold: true },
              'No ha cumplido con el pago mensual a que est\xE1 obligado en los t\xE9rminos del "contrato de cr\xE9dito", por lo que a la fecha tiene ',
              { text: mensualidadesVencidas, bold: true },
              " mensualidades vencidas sin pagar, las cuales suman el importe total de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoVencido), bold: true },
              { text: " (" + saldoVencidoConLetra + " " + this.formatDecimals(saldoVencido) + ")", bold: true },
              ", por lo que ha solicitado la reestructuraci\xF3n del adeudo total insoluto mediante la celebraci\xF3n de este convenio. Una vez expuesto lo anterior, las partes declaran:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "D E C L A R A C I O N E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "l. ", bold: true },
              "EL ACREDITANTE, HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del fideicomiso identificado con el n\xFAmero ",
              { text: "F/53260", bold: true },
              " por conducto de su apoderado legal para actos de administraci\xF3n, as\xED como para pleitos y cobranzas el ",
              { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", bold: true },
              ", seg\xFAn  consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. Declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "ll. ", bold: true },
              "EL ACREDITADO, declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que es una persona f\xEDsica de nacionalidad mexicana, quien manifiesta ser mayor de edad y tener capacidad legal para celebrar el acto y tener actividad empresarial, acredit\xE1ndolo con identificaci\xF3n oficial ",
              { text: tipoIdentificacion, bold: true },
              " de n\xFAmero ",
              { text: numeroIdentificacion, bold: true },
              ", la cual es vigente a la fecha y que se anexa al presente contrato, que cuenta con actividad econ\xF3mica formalmente constituida e inscritas en el Registro Federal de Contribuyentes, ",
              { text: rfc, bold: true },
              ", seg\xFAn consta en la Constancia de Situaci\xF3n Fiscal, con domicilio fiscal en C. ",
              { text: domicilioFiscal, bold: true },
              ", Baja California; con domicilio particular, en el cual declara que tambi\xE9n puede ser notificado, el ubicado en ",
              { text: domicilioParticular, bold: true },
              " Baja California, pudiendo en consecuencia entregar facturas de acuerdo a las leyes fiscales vigentes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
              { text: curp, bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que present\xF3 ",
              { text: "SOLICITUD DE REESTRUCTURA DE CR\xC9DITO", bold: true },
              " ante las autoridades administrativas del FIDEICOMISO, y toda vez que dicha solicitud ha motivado el ",
              { text: "RECONOCIMIENTO DE ADEUDO", bold: true },
              " objeto de la presente restructura, bajo protesta de decir verdad mani\uFB01esta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Una vez expuesto lo anterior, las partes convienen en obligarse al tenor de las siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "C L \xC1 U S U L A S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "PRIMERA.- PERSONALIDAD Y REPRESENTACI\xD3N. ", bold: true },
              "Las partes se reconocen mutuamente la personalidad con la que comparecen a la celebraci\xF3n del presente acto, y manifiestan bajo protesta de decir verdad, que las facultades de sus representantes (en caso de personas morales) no les han sido revocadas ni restringidas en forma alguna, por lo que cuentan con la legal representaci\xF3n de sus poderdantes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEGUNDA.- RECONOCIMIENTO DE ADEUDO.  EL ACREDITADO reconoce ", bold: true },
              "tener un adeudo con ",
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria",', bold: true },
              " en su car\xE1cter de ",
              { text: "FIDUCIARIO", bold: true },
              " del ",
              { text: '"Fideicomiso para el Desarrollo Econ\xF3mico de Baja California"', bold: true },
              " la cantidad de ",
              { text: "$" + this.utilsC.formatearNumeroConComas(liquidarSinMoratorios), bold: true },
              { text: " (" + liquidarMoratoriosConLetra + " " + this.formatDecimals(liquidarSinMoratorios) + ")" },
              " cantidad actualizada a la fecha del presente y que se obliga a pagar, en los t\xE9rminos de este convenio de reestructura. El cual resulta de la suma de los siguientes conceptos de adeudo:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            table: {
              widths: [100, 100, "*"],
              body: [
                [
                  { text: "Adeudo", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(capital), alignment: "center", bold: true },
                  { text: capitalConLetra + " " + this.formatDecimals(capital), bold: true, alignment: "left" }
                ],
                [
                  { text: "Intereses Moratorios", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesMoratorio), alignment: "center", bold: true },
                  { text: interesMoratorioConLetra + " " + this.formatDecimals(interesMoratorio), bold: true, alignment: "left" }
                ],
                [
                  { text: "Adeudo total", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(saldoTotal), alignment: "center", bold: true },
                  { text: saldoTotalConLetra + " " + this.formatDecimals(saldoTotal), bold: true, alignment: "left" }
                ]
              ]
            },
            alignment: "center",
            margin: [0, 15, 0, 15],
            fontSize: 9
          },
          {
            text: [
              "Esta reestructura de cr\xE9dito para fines administrativos se identifica con el n\xFAmero ",
              { text: identificacionReestructura, bold: true },
              "\n\n"
            ],
            alingment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "TERCERA- QUITA CONDICIONADA.", bold: true },
              " El ACREEDOR otorga una quita condicionada al finalizar el cr\xE9dito a EL ACREDITADO, los intereses moratorios devengados que este \xFAltimo le adeuda al d\xEDa ",
              { text: fecha, bold: true },
              " mismos que importan la cantidad ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(interesMoratorio), bold: true },
              { text: " (" + interesMoratorioConLetra + " " + this.formatDecimals(interesMoratorio) + ")", bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Por lo que el ACREDITADO ",
              { text: "reconoce y acepta", bold: true },
              " que resulta un ",
              { text: "adeudo total a reestructurar", bold: true },
              " por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(capital), bold: true },
              { text: " (" + capitalConLetra + " " + this.formatDecimals(capital) + ")", bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "CUARTA.- INTERESES MORATORIOS.- ", bold: true },
              "En caso de que los pagos no sean realizados oportunamente, se generar\xE1 un inter\xE9s moratorio del ",
              { text: "24% (veinticuatro punto cero por ciento)", bold: true },
              " anual a cargo del ACREDITADO y el AVAL, el cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga veri\uFB01cativo el pago de dichas prestaciones, en el entendido de que cualquier abono se aplicara primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "QUINTA.- DE LOS PAGOS. ", bold: true },
              "El ACREDITADO se obliga a efectuar ",
              ...this.utilsC.generarDescripcionMensualidades(credito),
              " o hasta cubrir la totalidad del adeudo (se agrega la TABLA DE AMORTIZACI\xD3N). Pagos que realizar\xE1 \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito o transferencia electr\xF3nica al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
              { text: referenciaBancaria, bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el d\xEDa \xFAltimo de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Realizando el pago el ACREDITADO deber\xE1 enviar copia del baucher del dep\xF3sito o transferencia electr\xF3nica al correo electr\xF3nico de ",
              "fondosbc.cobranza@baja.gob.mx",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "De incumplir en 3 o m\xE1s mensualidades vencidas el ACREDITADO ser\xE1 boletinado a BUR\xD3 DE CR\xC9DITO FEDERAL en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "En caso de que el ACREDITADO no realizare 3 o m\xE1s de los pagos mensuales estipulados durante el tiempo remanente del plazo pactado para el pago, ",
              { text: "el presente convenio de pago quedar\xE1 sin efecto, volviendo las cosas al estado que ten\xEDan, como si este no se hubiese celebrado.", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEXTA.- AUSENCIA DE NOVACI\xD3N. ", bold: true },
              'Salvo las modificaciones que resultan conforme a lo pactado en este convenio de reestructura, subsisten las estipulaciones y obligaciones pactadas en el "CONTRATO DE CR\xC9DITO", por lo que las partes manifiestan expresamente que este convenio no constituye ni implica novaci\xF3n alguna, pues no ha sido su intenci\xF3n crear una nueva obligaci\xF3n.  Pues no ha sido su intenci\xF3n crear una obligaci\xF3n nueva, sin que obste que la presente reestructura interrumpe cualquier prescripci\xF3n negativa aplicable a derecho. ',
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "S\xC9PTIMA.- DE LOS DOMICILIOS.", bold: true },
              "Que para efectos del presente Contrato, el ACREDITANTE, se\xF1ala como domicilio \uFB01scal el ubicado en, ",
              { text: "Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010.", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que para efectos del presente Contrato, el ACREDITADO, se\xF1ala como ",
              { text: "domicilio fiscal ", bold: true },
              "el ubicado en ",
              { text: domicilioFiscal, bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que para efecto del presente Contrato, el ACREDITADO, se\xF1ala como ",
              { text: "domicilio particular ", bold: true },
              "el ubicado en ",
              { text: domicilioParticular, bold: true },
              "\n\n"
            ],
            fontSize: 9
          },
          {
            text: [
              { text: "OCTAVA.- EN CASO DE CONTROVERSIA. ", bold: true },
              "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente convenio de reestructura a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles, y quedando a potestad del ACREDITANTE la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9,
            pageBreak: "before"
          },
          {
            text: [
              "Le\xEDdo el presente convenio de reestructura y aclarados sus alcances y efectos, las partes lo firman de conformidad en la ciudad de Mexicali, Baja California.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "POR EL ACREEDOR", bold: true, alignment: "center", margin: [0, 30, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", bold: true, alignment: "center" },
          { text: 'En su car\xE1cter de apoderado Legal de "HSBC M\xE9xico S.A.,', bold: true, alignment: "center" },
          { text: "Instituci\xF3n de Banca M\xFAltiple,", bold: true, alignment: "center" },
          { text: 'Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"', bold: true, alignment: "center" },
          { text: "Fideicomiso identificado con el n\xFAmero F/53260", bold: true, alignment: "center" },
          { text: "\n\nEL ACREDITADO", bold: true, alignment: "center" },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "C. " + nombreAcreditado, bold: true, alignment: "center" },
          { text: `



Mexicali, Baja California, a ${fecha}`, alignment: "center" }
        ]
      };
      pdfMake6.createPdf(generatedDocument).open();
    });
  }
};
_ConvenioExtrajudicialPF.\u0275fac = function ConvenioExtrajudicialPF_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConvenioExtrajudicialPF)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_ConvenioExtrajudicialPF.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConvenioExtrajudicialPF, factory: _ConvenioExtrajudicialPF.\u0275fac, providedIn: "any" });
var ConvenioExtrajudicialPF = _ConvenioExtrajudicialPF;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConvenioExtrajudicialPF, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/convenio_judicial_pm.service.ts
var pdfMake7 = __toESM(require_pdfmake());
var pdfFonts7 = __toESM(require_vfs_fonts());
pdfMake7.addVirtualFileSystem(pdfFonts7);
var _ConvenioJudicialPM = class _ConvenioJudicialPM {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  getPagosFromActiveConvenios(credito) {
    return credito.convenios?.filter((convenio) => convenio.estatus === "ACTIVO").flatMap((convenio) => convenio.convenios_pagos ?? []) ?? [];
  }
  sortPagosByFecha(pagos) {
    return pagos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
  roundTwo(num) {
    const precisionFix = Math.round((num + Number.EPSILON) * 1e10) / 1e10;
    if (precisionFix > -0.01 && precisionFix < 0.01) {
      return 0;
    }
    return Math.round(precisionFix * 100) / 100;
  }
  calcularFechaFutura(plazoCredito) {
    const fechaActual = /* @__PURE__ */ new Date();
    const fechaFutura = new Date(fechaActual);
    fechaFutura.setMonth(fechaFutura.getMonth() + plazoCredito);
    return fechaFutura.toISOString().split("T")[0];
  }
  generateAbonosDistribuidosTable(abonosDistribuidos) {
    if (!Array.isArray(abonosDistribuidos) || abonosDistribuidos.length === 0) {
      console.log("abonosDistribuidos est\xE1 vac\xEDo o no es un array:", abonosDistribuidos);
      return {
        text: "No hay datos en los abonos distribuidos.",
        italics: true,
        margin: [0, 10]
      };
    }
    const selectedHeaders = ["id", "monto", "pago_capital", "pago_interes", "pago_iva"];
    const headerDisplayMap = {
      id: "ID",
      monto: "Monto",
      pago_capital: "Capital",
      pago_interes: "Inter\xE9s",
      pago_iva: "IVA"
    };
    const tableHeader = selectedHeaders.map((header) => ({
      text: headerDisplayMap[header] || header,
      bold: true,
      fillColor: "#eeeeee",
      fontSize: 10
    }));
    const tableBody = abonosDistribuidos.map((row) => selectedHeaders.map((header) => {
      let value = row[header] ?? row.abono?.[header] ?? "";
      if (header === "id" && typeof value === "number") {
        value = value.toFixed(0);
      }
      if (typeof value === "number" && header !== "id") {
        value = `$${value.toFixed(2)}`;
      }
      return {
        text: value,
        fontSize: 9
      };
    }));
    return {
      style: "tableExample",
      table: {
        headerRows: 1,
        widths: selectedHeaders.map(() => 55),
        body: [tableHeader, ...tableBody]
      },
      layout: "lightHorizontalLines",
      alignment: "center"
    };
  }
  generateTablaAmortizacionesTable(tablaAmortizaciones) {
    if (!Array.isArray(tablaAmortizaciones) || tablaAmortizaciones.length === 0) {
      console.log("tablaAmortizaciones est\xE1 vac\xEDa o no es un array:", tablaAmortizaciones);
      return {
        text: "No hay datos en la tabla de amortizaciones.",
        italics: true,
        margin: [0, 10]
      };
    }
    const selectedHeaders = [
      "convenio_id",
      "abono_a_capital",
      "fecha",
      "gastos_judiciales",
      "interes",
      "iva",
      "pago_fijo"
    ];
    const headerDisplayMap = {
      convenio_id: "ID Convenio",
      abono_a_capital: "Abono a capital",
      fecha: "Fecha",
      gastos_judiciales: "Gastos Judiciales",
      interes: "Inter\xE9s",
      iva: "IVA",
      pago_fijo: "Pago fijo"
    };
    const tableHeader = selectedHeaders.map((header) => ({
      text: headerDisplayMap[header] || header,
      bold: true,
      fillColor: "#eeeeee",
      fontSize: 10
    }));
    const tableBody = tablaAmortizaciones.map((row) => selectedHeaders.map((header) => ({
      text: row[header] ?? "",
      fontSize: 9
    })));
    return {
      style: "tableExample",
      table: {
        headerRows: 1,
        widths: selectedHeaders.map(() => 55),
        // Adjust width if needed
        body: [tableHeader, ...tableBody]
      },
      layout: "lightHorizontalLines"
    };
  }
  countAbonosDistribuidos(abonosDistribuidos) {
    if (!Array.isArray(abonosDistribuidos)) {
      console.log("abonosDistribuidos no es un array:", abonosDistribuidos);
      return 0;
    }
    return abonosDistribuidos.length;
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  formatDateToSlash(dateString) {
    return dateString.replace(/-/g, "/");
  }
  checkAllGastosJudicialesAreZero(data) {
    return data.every((item) => Number(item.gastos_judiciales).toFixed(2) === "0.00");
  }
  buildAmortizacionesRows(data, convenioActivo) {
    const includeGastosJudiciales = !this.checkAllGastosJudicialesAreZero(data);
    const headers = [
      { text: "No.", bold: true, fontSize: 9, alignment: "center" },
      { text: "Fecha", bold: true, fontSize: 9, alignment: "center" },
      { text: "Abono a Capital", bold: true, fontSize: 9, alignment: "center" },
      ...includeGastosJudiciales ? [{ text: "Gastos Judiciales", bold: true, fontSize: 9, alignment: "center" }] : [],
      { text: "Inter\xE9s", bold: true, fontSize: 9, alignment: "center" },
      { text: "IVA", bold: true, fontSize: 9, alignment: "center" },
      { text: "Pago Fijo", bold: true, fontSize: 9, alignment: "center" }
    ];
    const dataWithoutLast = data.slice(0, -1);
    const rows = dataWithoutLast.map((item, index) => {
      const row = [
        { text: `${index + 1}`, fontSize: 9, alignment: "center" },
        { text: this.formatDateToSlash(item.fecha), fontSize: 9, alignment: "center" },
        { text: `$${Number(item.abono_a_capital).toFixed(2)}`, fontSize: 9, alignment: "right" },
        ...includeGastosJudiciales ? [{ text: `$${Number(item.gastos_judiciales).toFixed(2)}`, fontSize: 9, alignment: "right" }] : [],
        { text: `$${Number(item.interes).toFixed(2)}`, fontSize: 9, alignment: "right" },
        { text: `$${Number(item.iva).toFixed(2)}`, fontSize: 9, alignment: "right" },
        { text: `$${Number(item.pago_fijo).toFixed(2)}`, fontSize: 9, alignment: "right" }
      ];
      return row;
    });
    const dummyRow = [
      { text: `${rows.length + 1}`, fontSize: 9, alignment: "center" },
      { text: this.formatDateToSlash(convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.fecha), fontSize: 9, alignment: "center" },
      { text: "$" + convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.abono_a_capital, fontSize: 9, alignment: "right" },
      ...includeGastosJudiciales ? [{ text: `$${Number(convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.gastos_judiciales).toFixed(2)}`, fontSize: 9, alignment: "right" }] : [],
      { text: "$" + convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.interes, fontSize: 9, alignment: "right" },
      { text: "$" + convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.iva, fontSize: 9, alignment: "right" },
      { text: "$" + convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.pago_fijo, fontSize: 9, alignment: "right" }
    ];
    rows.push(dummyRow);
    return [headers, ...rows];
  }
  generarConvenioJudicialPM(creditoParam, convenio) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonasMorales",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonales",
        "productosFinancieros",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "juridicos",
        "sucursales",
        "sesiones",
        "convenios",
        "convenios.conveniosPagos"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
      }
      const convenioActivo = convenio ?? credito.convenios?.find((convenio2) => convenio2.estatus == "ACTIVO");
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(credito);
      const pagosActivos = this.getPagosFromActiveConvenios(credito);
      const pagosOrdenadosFecha = this.sortPagosByFecha(pagosActivos);
      const tablaAmortizaciones = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(credito);
      const abonosDistribuiddos = tablaEstadoCuenta?.abonos_distribuidos ?? [];
      console.log(tablaAmortizaciones);
      const tablaDPM = credito.datos_personas_morales;
      const tablaRL = credito.datos_personas_morales?.representante_legal;
      const tablaAC = credito.datos_personas_morales?.acta_constitutiva;
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const telefonosCasa = this.utilsC.getTelefonosCasa(tablaRL?.telefonos_personales ?? []);
      const telefonosOficina = this.utilsC.getTelefonosOficina(tablaRL?.telefonos_personales ?? []);
      const telefonosCelular = this.utilsC.getTelefonosCelular(tablaRL?.telefonos_personales ?? []);
      const capitalCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("abono_a_capital", tablaAmortizaciones);
      const interesCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("interes", tablaAmortizaciones);
      const ivaCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("iva", tablaAmortizaciones);
      const capitalAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_capital", abonosDistribuiddos);
      const interesAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_interes", abonosDistribuiddos);
      const ivaAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_iva", abonosDistribuiddos);
      const fecha = this.utils.fechaFormateada(/* @__PURE__ */ new Date());
      const fechaConvenio = this.utils.fechaFormateada(convenioActivo?.fecha_convenio);
      const nombreCliente = this.utils.nombreClienteFromDatosPersonales(credito.datos_personales), demandado = tablaDPM?.razon_social.toUpperCase() + (nombreCliente !== "N/A" ? " y " + nombreCliente : ""), noExpediente = credito.juridicos?.expediente ?? "N/A", tipoJuicio = credito.juridicos?.tipo_juicio ?? "N/A", juezAsignado = credito.juridicos?.juzgados?.nombre ?? "N/A", nombreAcreditado = this.utils.nombreClienteFromDatosPersonales(tablaRL), razonSocial = tablaDPM?.razon_social.toUpperCase(), tipoIdentificacion = tablaRL?.identificacion.toUpperCase(), numeroIdentificacion = tablaRL?.identificacion_numero.toUpperCase(), domicilioPF = this.utils.domicilioFromDatosModel(tablaRL), liquidarSinMoratorios = tablaEstadoCuenta?.total_a_liquidar, liquidarSinMoratoriosConLetra = this.utilsC.NumeroALetras(liquidarSinMoratorios), capital = this.roundTwo(capitalCreditoAmo - capitalAbonos), capitalConLetra = this.utilsC.NumeroALetras(capital), interesOrdinario = tablaEstadoCuenta?.interes_ordinario, interesOrdinarioConLetra = this.utilsC.NumeroALetras(interesOrdinario), interesesMoratorios = tablaEstadoCuenta?.interes_moratorio, interesesMoratoriosConLetra = this.utilsC.NumeroALetras(interesesMoratorios), adeudoTotal = this.roundTwo(Number(capital) + Number(interesesMoratorios)), adeudoTotalConLetra = this.utilsC.NumeroALetras(adeudoTotal), escrituraPublicaFecha = this.utilsC.fechaAletras(tablaAC?.fecha_escritura), numeroEscritura = tablaAC?.numero_escritura, numeroVolumen = tablaAC?.volumen_escritura, nombreNotario = tablaAC?.nombre_notario.toUpperCase(), numeroNotario = tablaAC?.numero_notario, ciudadNotario = tablaAC?.ciudad_notario.toUpperCase(), fechaInscripcion = this.utilsC.fechaAletras(tablaAC?.fecha_inscripcion_rppc), constitucion = tablaDPM?.razon_social.toUpperCase(), rfc = tablaDPM?.rfc?.toUpperCase(), domicilioFiscal = this.utils.domicilioFromDatosModel(tablaDPM), domicilioParticular = this.utils.domicilioFromDatosModel(tablaDPM), fechaFirmaConvenio = this.utilsC.fechaAletras(fecha), cantidadInteresesDevengados = liquidarSinMoratorios, cantidadAdeudoConvenioConLetra = liquidarSinMoratoriosConLetra, suertePrincipal = this.utilsEstadoCuenta.sumarListaByKey("capital", credito.convenios), suertePrincipalConLetra = this.utilsC.NumeroALetras(suertePrincipal), gastosJudiciales = this.utilsEstadoCuenta.sumarListaByKey("gastos_judiciales", credito.convenios), gastosJudicialesConLetra = this.utilsC.NumeroALetras(gastosJudiciales), adeudoTotalPagar = this.roundTwo(Number(gastosJudiciales) + Number(suertePrincipal)), adeudoTotalPagarConLetra = this.utilsC.NumeroALetras(adeudoTotal), mensualidadesAdeudoTotal = convenioActivo?.plazo, cantidadPagosMensuales = convenioActivo?.plazo, creditoId = creditoID, pagoUnico = this.roundTwo(Number(capitalAbonos) + Number(interesAbonos) + Number(ivaAbonos)), pagoUnicoConLetra = this.utilsC.NumeroALetras(pagoUnico), cantidadPagos = convenioActivo?.plazo, pagoMensual = tablaEstadoCuenta?.saldo_vigente, pagoMensualConLetra = this.utilsC.NumeroALetras(pagoMensual), plazoReestructura = convenioActivo?.plazo - 1, montoMensual = convenioActivo?.convenios_pagos?.[0].pago_fijo, montoMensualLetras = this.utilsC.NumeroALetras(montoMensual), ultimoMontoMensual = convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.pago_fijo, ultimoMontoMensualLetras = this.utilsC.NumeroALetras(ultimoMontoMensual), porcentajeInteresMoratorio = "12", ultimaFechaPlazoConvenio = this.utilsC.fechaAletras(this.calcularFechaFutura(this.utilsC.countPagosFromActiveConvenios(credito))), referenciaBancaria = credito.referencia_bancaria.toUpperCase(), direccionDespacho = "CALLE IGNACIO ZARAGOZA, NUMERO 8169 INTERIOR 401, ZONA CENTRO, TIJUANA, BAJA CALIFORNIA, C.P. 22000)", domicilioParteDemandada = this.utils.domicilioFromDatosModel(tablaDPM);
      const tablaAmortizacionesTable = this.generateTablaAmortizacionesTable(tablaAmortizaciones);
      const tablaAbonosTable = this.generateAbonosDistribuidosTable(abonosDistribuiddos);
      const tablaAbonosTable2 = convenioActivo?.convenios_pagos || [];
      const tableRows = this.buildAmortizacionesRows(tablaAbonosTable2, convenioActivo);
      const generatedDocument = {
        pageMargins: [60, 50, 60, 50],
        content: [
          {
            layout: "noBorders",
            table: {
              widths: ["*", 100],
              body: [
                [
                  { text: "" },
                  {
                    text: "HSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO  FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA F/53260 \nVS",
                    bold: true,
                    alignment: "justify"
                  }
                ],
                [
                  { text: "" },
                  { text: demandado }
                ],
                [
                  { text: "" },
                  {
                    text: [
                      { text: "EXP: ", bold: true },
                      noExpediente
                    ]
                  }
                ],
                [
                  { text: "" },
                  {
                    text: [
                      { text: "JUICIO: ", bold: true },
                      tipoJuicio
                    ]
                  }
                ],
                [
                  { text: "" },
                  {
                    text: [
                      { text: "ASUNTO: ", bold: true },
                      "CONVENIO JUDICIAL."
                    ]
                  }
                ]
              ]
            },
            fontSize: 10,
            margin: [0, 0, 0, 20]
          },
          {
            text: [
              "C. JUEZ (",
              { text: juezAsignado },
              ") DE LO CIVIL ESPECIALIZADO EN MATERIA MERCATIL EN TURNO, DEL ESTADO DE BAJA CALIFORNIA.",
              "\n\n"
            ],
            alignment: "left",
            bold: true
          },
          {
            text: "P R E S E N T E.-",
            bold: true
          },
          {
            text: [
              { text: "\n ALFONSO CH\xC1VEZ P\xC9REZ,", bold: true },
              " promoviendo en mi car\xE1cter de ",
              { text: "Apoderado legal de \u201CHSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA M\xDALTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA F/53260\u201D", bold: true, decoration: "underline" },
              "; personalidad que acredito con copia certificada del Instrumento Notarial N\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro n\xFAmero 1,970 (mil novecientos setenta), en la ciudad de M\xE9xico, de fecha catorce de septiembre de dos mil veintitr\xE9s, otorgado ante la fe del Licenciado Francisco I. Hugues V\xE9lez, Titular de la Notar\xEDa P\xFAblica N\xFAmero 212 (doscientos doce), en cuyo protocolo act\xFAan tambi\xE9n la Licenciada Rosamar\xEDa L\xF3pez Lugo, Titular de la Notar\xEDa P\xFAblica N\xFAmero 223 (doscientos veintitr\xE9s) y Licenciado Guillermo Oliver Bucio, Titular de la Notar\xEDa N\xFAmero 246 (doscientos cuarenta y seis), los tres por convenio de sociedad, en la que se hizo constar el Poder General Limitado que otorga \u201CHSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA M\xDALTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA F/53260\u201D \xFAnica y exclusivamente en su car\xE1cter de Fiduciario en el contrato de Fideicomiso identificado administrativamente con el n\xFAmero \u201CF/53260\u201D (F diagonal cincuenta y tres mil doscientos sesenta), representada por su Delegado Fiduciario se\xF1or Horacio Flores Rodr\xEDguez, como la parte \u201CACTORA\u201D, personalidad que tengo debidamente acreditada en autos; por una segunda parte ",
              { text: razonSocial, bold: true },
              " por conducto de su representante legal ",
              { text: nombreAcreditado, bold: true },
              ", quien se obliga en lo personal, acepta y reconoce el adeudo, quien por su propio derecho comparecen en lo personal en su car\xE1cter de parte DEMANDADA. Conjuntamente comparecemos para celebrar ",
              { text: "CONVENIO JUDICIAL", bold: true, decoration: "underline" },
              ", de acuerdo a los antecedentes, declaraciones y cl\xE1usulas siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "En este acto comparece el (la) ",
              { text: "C. " + nombreAcreditado, bold: true },
              { text: " Representante legal de ", bold: true },
              { text: razonSocial, bold: true },
              " a darse por emplazada en el presente juicio, as\xED mismo las partes hemos pactado dirimir el juicio, mediante convenio judicial, transacci\xF3n que celebramos acorde con el art\xEDculo 55 del c\xF3digo de procedimientos civiles vigente del estado, de aplicaci\xF3n supletoria a C\xF3digo de Comercio, instrumento que se exhibe ratificado, por ello pedimos se eleve a la categor\xEDa de ",
              { text: "COSA JUZGADA, ", bold: true },
              "como si se tratara de una sentencia ejecutoriada.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "D E C L A R A C I O N E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "PRIMERA. - PERSONALIDAD Y REPRESENTACI\xD3N. ", bold: true },
              "Las partes se reconocen mutuamente la personalidad con la que comparecen a la celebraci\xF3n del presente acto, y manifiestan bajo protesta de decir verdad, que las facultades de sus representantes (en caso de personas morales) no les han sido revocadas ni restringidas en forma alguna, por lo que cuenta con la legal representaci\xF3n de sus poderdantes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEGUNDA. - CAPACIDAD. ", bold: true },
              "Manifiesta la PARTE DEMANDADA bajo protesta de decir verdad, que cuenta con la capacidad jur\xEDdica necesaria, para celebrar el presente convenio de reconocimiento de adeudo, as\xED como para obligarse en t\xE9rminos del mismo. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSIze: 9
          },
          {
            text: [
              { text: "TERCERA. - AUSENCIA DE VICIOS EN EL CONSENTIMIENTO. ", bold: true },
              "La PARTE DEUDORA manifiesta que es su voluntad celebrar de com\xFAn acuerdo el presente convenio con ",
              { text: "\u201CHSBC MEXICO\u201D SOCIEDAD AN\xD3NIMA", bold: true },
              " INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, DEL FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA, IDENTIFICADO CON EL No. F/53260, atribuy\xE9ndole plena validez a las obligaciones que se asumen por virtud de este convenio, ya que el mismo no est\xE1 viciado de nulidad, error, dolo, lesi\xF3n o cualquier otro vicio de la voluntad. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "CUARTA. - FALTA DE PAGO. ", bold: true },
              "Declara la PARTE DEMANDADA que su estado de liquidez y solvencia econ\xF3mica no le permitieron cumplir las obligaciones de pago para con ",
              { text: "\u201CHSBC MEXICO\u201D SOCIEDAD AN\xD3NIMA", bold: true },
              " INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISION FIDUCIARIA, DEL FIDEICOMISO PARA EL DESARROLLO ECONOMICO DE BAJA CALIFORNIA, derivados del ",
              { text: "t\xEDtulo de cr\xE9dito", bold: true },
              " objeto de la demanda, por lo que ha solicitado de dicho organismo la celebraci\xF3n del presente convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "QUINTA. - VERACIDAD DE DATOS.", bold: true },
              " Declaran tanto la PARTE DEMANDADA, bajo protesta de decir verdad, que son ciertos los datos e informaci\xF3n proporcionada a con \u201CHSBC MEXICO\u201D, SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, para la celebraci\xF3n del presente convenio de reconocimiento de adeudo.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEXTA. - CR\xC9DITO ORIGINAL. ", bold: true },
              "Que el \u201CHSBC MEXICO\u201D, SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, suscribi\xF3 a la PARTE DEUDORA un t\xEDtulo de cr\xE9dito denominado contrato de cr\xE9dito y pagar\xE9 conforme a lo se\xF1alado y relacionado en la demanda inicial del juicio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEPTIMA. - ", bold: true },
              "Declara la PARTE DEMANDADA por conducto de su representante legal, bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que es una persona moral constituida conforme a las leyes mexicanas vigentes, acredit\xE1ndolo mediante escritura p\xFAblica de fecha ",
              { text: escrituraPublicaFecha, bold: true },
              " otorgada bajo n\xFAmero ",
              { text: numeroEscritura, bold: true },
              ", volumen ",
              { text: numeroVolumen, bold: true },
              ", ante el protocolo del notario p\xFAblico Lic. ",
              { text: nombreNotario, bold: true },
              " titular de la notar\xEDa No. ",
              { text: numeroNotario, bold: true },
              " de la ciudad de ",
              { text: ciudadNotario, bold: true },
              " inscrita en el Registro P\xFAblico de la Propiedad y Comercio bajo inscripci\xF3n de fecha ",
              { text: fechaInscripcion, bold: true },
              ", que contiene la constituci\xF3n de la sociedad denominada ",
              { text: constitucion, bold: true },
              " con Registro Federal de Contribuyentes ",
              { text: rfc, bold: true },
              ", se\xF1alando como domicilio fiscal el ubicado en ",
              { text: domicilioFiscal, bold: true },
              " el cual declara puede ser notificado; pudiendo en consecuencia entregar las facturas de acuerdo a las leyes fiscales vigentes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que su representante legal el C. ",
              { text: nombreAcreditado, bold: true },
              ", quien acredita su personalidad con identificaci\xF3n oficial No. ",
              { text: numeroIdentificacion, bold: true },
              ", vigente a la fecha y anexada al presente; que cuenta con la capacidad suficiente y se encuentra debidamente facultado para la celebraci\xF3n del presente Contrato, seg\xFAn consta en la escritura p\xFAblica n\xFAmero ",
              { text: numeroEscritura, bold: true },
              ", otorgada ante la fe del Notario P\xFAblico No. ",
              { text: numeroNotario, bold: true },
              " de la ciudad ",
              { text: ciudadNotario, bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "A). - ", bold: true },
              "Que se reconoce la procedencia de las prestaciones reclamadas en la demanda, allan\xE1ndose a esta \xFAltima.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "B). - ", bold: true },
              "Que, como consecuencia de las reclamaciones en la demanda, reconoce adeudar a la PARTE ACTORA, la cantidad que se indica en las cl\xE1usulas de este convenio. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "OCTAVA. - ", bold: true },
              "Es voluntad de las partes celebrar el presente convenio, a fin de pactar una mec\xE1nica de pagos tendiente a que el acreditado logre liquidar a plazo totalmente el adeudo, debiendo conservar los t\xE9rminos y condiciones de intereses moratorios, y dem\xE1s cl\xE1usulas del t\xEDtulo de cr\xE9dito descrito en el antecedente de este convenio, acordando el respeto y cumplimiento de los derechos y obligaciones que se establecen en el presente instrumento.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: "Atento a lo expuesto, las partes otorgan las siguientes:",
            alignment: "justify",
            fontSize: 9
          },
          { text: "C L \xC1 U S U L A S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "PRIMERA. - RECONOCIMIENTO DE ADEUDO. ", bold: true },
              "La PARTE DEMANDADA reconoce adeudar a \u201CHSBC MEXICO\u201D SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, DEL FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA IDENTIFICADO CON EL No. F/53260, la cantidad de ",
              { text: "$" + this.utilsC.formatearNumeroConComas(liquidarSinMoratorios), bold: true },
              { text: " (" + liquidarSinMoratoriosConLetra + " " + this.formatDecimals(liquidarSinMoratorios) + ")", bold: true },
              " que se obliga a pagar a la PARTE ACTORA, en los t\xE9rminos de este convenio. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: "La suma indicada en el p\xE1rrafo que precede se integra por los conceptos y cantidades, siguientes:",
            alignment: "justify",
            fontSize: 9
          },
          {
            table: {
              widths: [100, 100, "*"],
              body: [
                [
                  { text: "Capital", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(capital), alignment: "center", bold: true },
                  { text: capitalConLetra + " " + this.formatDecimals(capital), bold: true, alignment: "left" }
                ],
                [
                  { text: "Inter\xE9s ordinario", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesOrdinario), alignment: "center", bold: true },
                  { text: interesOrdinarioConLetra + " " + this.formatDecimals(interesOrdinario), bold: true, alignment: "left" }
                ],
                [
                  { text: "Intereses Moratorios", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesesMoratorios), alignment: "center", bold: true },
                  { text: interesesMoratoriosConLetra + " " + this.formatDecimals(interesesMoratorios), bold: true, alignment: "left" }
                ],
                [
                  { text: "Adeudo total", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(adeudoTotal), alignment: "center", bold: true },
                  { text: adeudoTotalConLetra + " " + this.formatDecimals(adeudoTotal), bold: true, alignment: "left" }
                ]
              ]
            },
            alignment: "center",
            margin: [0, 15, 0, 10],
            fontSize: 9
          },
          {
            text: [
              { text: "SEGUNDA. \u2013 QUITA CONDICIONADA. ", bold: true },
              "La PARTE ACTORA otorga una quita condicionada al finalizar el cr\xE9dito a la PARTE DEMANDADA, los intereses moratorios devengados que este \xFAltimo le adeuda al d\xEDa ",
              { text: fechaFirmaConvenio, bold: true },
              ", por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(cantidadInteresesDevengados), bold: true },
              { text: " (" + cantidadAdeudoConvenioConLetra + " " + this.formatDecimals(cantidadInteresesDevengados) + ".", bold: true },
              "\n\n"
            ],
            alingment: "justify",
            fontSize: 9,
            pageBreak: "before"
          },
          {
            table: {
              widths: [100, 100, "*"],
              body: [
                [
                  { text: "Por concepto de suerte principal", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(suertePrincipal), alignment: "center", bold: true },
                  { text: suertePrincipalConLetra + " " + this.formatDecimals(suertePrincipal), bold: true, alignment: "left" }
                ],
                [
                  { text: "Gastos judiciales", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(gastosJudiciales), alignment: "center", bold: true },
                  { text: gastosJudicialesConLetra + " " + this.formatDecimals(gastosJudiciales), bold: true, alignment: "left" }
                ],
                [
                  { text: "Adeudo total a pagar", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(adeudoTotalPagar), alignment: "center", bold: true },
                  { text: adeudoTotalPagarConLetra + " " + this.formatDecimals(adeudoTotalPagar), bold: true, alignment: "left" }
                ]
              ]
            },
            alignment: "center",
            margin: [0, 15, 0, 15],
            fontSize: 9
          },
          {
            text: [
              "Por lo que la PARTE DEMANDADA ",
              { text: "reconoce y acepta ", bold: true },
              "que resulta un ",
              { text: "adeudo total a pagar ", bold: true },
              "por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(adeudoTotalPagar), bold: true },
              { text: " (" + adeudoTotalConLetra + " " + this.formatDecimals(adeudoTotalPagar) + "). ", bold: true },
              " A pagar en ",
              { text: mensualidadesAdeudoTotal, bold: true },
              " mensualidades de la siguiente manera: ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "TERCERA. - DE LOS PAGOS. ", bold: true },
              "La PARTE DEMANDADA se obliga a efectuar ",
              ...this.utilsC.generarDescripcionMensualidades(credito),
              //{ text: cantidadPagosMensuales + ' pagos mensuales', bold: true },
              "o hasta cubrir la totalidad del adeudo; pagos que realizar\xE1 \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito o transferencia electr\xF3nica al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia \xFAnica ",
              { text: creditoId, bold: true },
              ". Efectu\xE1ndose de la siguiente manera:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "A). - ", bold: true },
              "1 pago \xFAnico por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(pagoUnico), bold: true },
              { text: " (" + pagoUnicoConLetra + " " + this.formatDecimals(pagoUnico) + ").", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "B). - ", bold: true },
              { text: cantidadPagos, bold: true },
              " de pagos por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(pagoMensual), bold: true },
              { text: " (" + pagoMensualConLetra + " " + this.formatDecimals(pagoMensual) + "), ", bold: true },
              "mensuales a realizar el d\xEDa \xFAltimo de cada mes y as\xED sucesivamente y;",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            table: {
              widths: ["*", "*", "*", "*", "*", "*"],
              body: tableRows
            }
          },
          {
            text: [
              "\n",
              "En este orden de ideas, el adeudo reconocido en la cl\xE1usula primera, as\xED como aquellos cargos que se causen hasta la realizaci\xF3n del \xFAltimo pago, quedara totalmente liquidado, una vez que la PARTE DEMANDADA realice los ",
              { text: cantidadPagos + " pagos.", bold: true },
              "pagos.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: "Para todas las obligaciones de pago del presente contrato, las partes acuerdan que la PARTE DEMANDADA, deber\xE1 realizarlas a m\xE1s tardar el d\xEDa \xFAltimo de cada mes. En caso de que el d\xEDa de pago sea inh\xE1bil, \xE9ste se efectuar\xE1 el d\xEDa h\xE1bil anterior, sin que exceda el l\xEDmite del mes.\n\n",
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "CUARTA.- INCUMPLIMIENTO. ", bold: true },
              "Por otra parte, las partes acuerdan que, ante el incumplimiento de pago de las obligaciones contenidas en la cl\xE1usula tercera, la PARTE ACREDITADA deber\xE1 pagar a \u201CHSBC MEXICO\u201D, SOCIEDAD ANONIMA, INSTITUCION DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISION FIDUCIARIA, ",
              { text: "intereses moratorios a raz\xF3n del " + porcentajeInteresMoratorio + "% de inter\xE9s anual + IVA ", bold: true },
              "pactada en el titulo cr\xE9dito base de la acci\xF3n.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "QUINTA. - PLAZO. ", bold: true },
              "El plazo del convenio vencer\xE1 el ",
              { text: ultimaFechaPlazoConvenio, bold: true },
              ", sin embargo, seguir\xE1 surtiendo sus efectos legales hasta en tanto no se pague la totalidad del cr\xE9dito con todos sus accesorios.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEXTA. - LUGAR DE PAGO. ", bold: true },
              "Las partes reiteran que todas las prestaciones derivadas del convenio deber\xE1n pagarse, sin previo requerimiento, mediante dep\xF3sito bancario en la cuenta n\xFAmero: FIDEICOMISO PARA EL DESARROLLO ECONOMICO DE BAJA CALIFORNIA HBMX53260, con clave de servicio: 8727 CUENTA 6231216641, CLABE INTERBANCARIA 021028062312166411 referencia \xFAnica ",
              { text: referenciaBancaria, bold: true },
              " o directamente reportar pagos en las oficinas de la Secretaria de Econom\xEDa ubicadas en Justo Sierra y Honduras #337, Col. Cuauht\xE9moc, CP 21200, Mexicali B.C. Centro comercial \u201CLa plazita\u201D.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEPTIMA. - APLICACI\xD3N DE PAGOS. ", bold: true },
              "Las partes reiteran que cualquier pago que efectu\xE9 la PARTE DEMANDADA se aplicara en el siguiente orden: intereses moratorios y adeudo neto.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Las partes reiteran que, con relaci\xF3n a los PAGOS ANTICIPADOS, la PARTE ACREDITADA queda facultada para pagar anticipadamente todo o parte del adeudo a su cargo, siempre y cuando este al corriente en el cumplimiento de las obligaciones derivadas del convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "OCTAVA. - INEXISTENCIA DE NOVACION. ", bold: true },
              "La PARTE DEUDORA expresamente se\xF1ala que la celebraci\xF3n del presente convenio no implica novaci\xF3n alguna al respecto de las obligaciones a su cargo a que se refieren el cr\xE9dito original, mencionado en el antecedente del presente instrumento.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "NOVENA. -EJECUCI\xD3N DE CONVENIO.", bold: true },
              "Las partes pactan expresamente que se proceder\xE1 a denunciar el incumplimiento del convenio e iniciar su ejecuci\xF3n gir\xE1ndose las ordenes necesarias para ello, si LA PARTE DEMANDADA faltare al cumplimiento de cualquiera de los supuestos siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "a). - ", bold: true },
              "Si la ",
              { text: "PARTE DEMANDADA ", bold: true },
              "no realizare 3 o m\xE1s de los pagos mensuales estipulados durante el tiempo remanente del plazo pactado para el pago, o no paga puntualmente la suma principal del adeudo, los intereses sobre el mismo o cualesquiera gastos y costas que se causen en virtud del presente convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "b). - ", bold: true },
              "Si la ",
              { text: "PARTE DEMANDADA ", bold: true },
              "incumplieren con cualquiera de las obligaciones que a su cargo se deriven del presente convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "c). - ", bold: true },
              "Si activos fijos de la ",
              { text: "PARTE DEMANDADA ", bold: true },
              "fueren embargados en todo o en parte por autoridad judicial o administrativa o de cualquier otro g\xE9nero.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "d). - ", bold: true },
              "En los dem\xE1s casos previstos por el convenio y por las leyes aplicables.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "DECIMA. - GASTOS Y HONORARIOS. ", bold: true },
              "Los honorarios, gastos, derechos o impuestos que se originen por el otorgamiento de este instrumento, por su inscripci\xF3n, cancelaci\xF3n, y por las gestiones judiciales o extrajudiciales que deban hacerse para el cumplimiento forzoso de las obligaciones ser\xE1n a cargo de la PARTE DEMANDADA. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "DECIMA PRIMERA. - DOMICILIOS CONVENCIONALES. ", bold: true },
              "Las partes se\xF1alan como sus respectivos domicilios para los efectos del presente convenio, e inclusive para o\xEDr y recibir notificaciones, los siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "A. ", bold: true },
              "La ",
              { text: "PARTE ACTORA: ", bold: true },
              "HSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA F/53260 en ",
              { text: direccionDespacho, bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "B. ", bold: true },
              "La ",
              { text: "PARTE DEMANDADA: ", bold: true },
              "con domicilio en ",
              { text: domicilioParteDemandada, bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Mientras las partes no se notifiquen por escrito el cambio de sus domicilios, los emplazamientos, notificaciones y dem\xE1s diligencias judiciales y extrajudiciales se practicar\xE1n y surtir\xE1n todos sus efectos legales en los domicilios antes designados. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9,
            pageBreak: "before"
          },
          {
            text: [
              { text: "DECIMA SEGUNDA. - ", bold: true },
              "Las partes reiteran su sometimiento expreso a la jurisdicci\xF3n y competencia de este Juzgado al que comparecen. Por lo que en presente convenio, dan por concluida la presente propuesta, se turnen los autos a sentencia y se tenga como cosa juzgada la presente audiencia y en su momento en cumplimiento de lo pactado se proceder\xE1 a la ejecuci\xF3n de sentencia conforme a derecho.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Por lo antes expuesto y fundado, atentamente pedimos:",
              "\n\n"
            ],
            bold: true,
            alignment: "center"
          },
          {
            text: [
              { text: "PRIMERO: ", bold: true },
              "Se nos tenga a las partes celebrando el presente convenio que una vez ratificado, solicitamos se apruebe con efectos de sentencia ejecutoriada.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEGUNDO: ", bold: true },
              "Expedir copia certificada del convenio y auto en que se apruebe. ",
              "\n\n\n\n\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "PROTESTO LO NECESARIO",
              "\n\n"
            ],
            alignment: "center",
            bold: true
          },
          {
            text: "___________________, Baja California a la fecha de su presentaci\xF3n.",
            fontSize: 10,
            alignment: "center"
          },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "LIC. ALFONSO CHAVEZ PEREZ", bold: true, alignment: "center" },
          { text: 'Apoderado Legal de "HSBC M\xE9xico S.A.,', bold: true, alignment: "center" },
          { text: "Instituci\xF3n de Banca M\xFAltiple,", bold: true, alignment: "center" },
          { text: 'Grupo Financiero HSBC, Divisi\xF3n Fiduciaria F/53260"', bold: true, alignment: "center" },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "C. " + nombreAcreditado, bold: true, alignment: "center" },
          { text: "LA PARTE DEMANDADA", bold: true, alignment: "center" },
          { text: `FECHA DE CONVENIO: ${fechaConvenio ? fechaConvenio : fecha}`, bold: true, alignment: "center", margin: [0, 10, 0, 0] }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
          },
          tableExample: {
            margin: [0, 5, 0, 15]
          }
        }
      };
      pdfMake7.createPdf(generatedDocument).open();
    });
  }
};
_ConvenioJudicialPM.\u0275fac = function ConvenioJudicialPM_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConvenioJudicialPM)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_ConvenioJudicialPM.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConvenioJudicialPM, factory: _ConvenioJudicialPM.\u0275fac, providedIn: "any" });
var ConvenioJudicialPM = _ConvenioJudicialPM;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConvenioJudicialPM, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/convenio_judicial_pf.service.ts
var pdfMake8 = __toESM(require_pdfmake());
var pdfFonts8 = __toESM(require_vfs_fonts());
pdfMake8.addVirtualFileSystem(pdfFonts8);
var _ConvenioJudicialPF = class _ConvenioJudicialPF {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  getPagosFromActiveConvenios(credito) {
    return credito.convenios?.filter((convenio) => convenio.estatus === "ACTIVO").flatMap((convenio) => convenio.convenios_pagos ?? []) ?? [];
  }
  sortPagosByFecha(pagos) {
    return pagos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
  roundTwo(num) {
    const precisionFix = Math.round((num + Number.EPSILON) * 1e10) / 1e10;
    if (precisionFix > -0.01 && precisionFix < 0.01) {
      return 0;
    }
    return Math.round(precisionFix * 100) / 100;
  }
  calcularFechaFutura(plazoCredito) {
    const fechaActual = /* @__PURE__ */ new Date();
    const fechaFutura = new Date(fechaActual);
    fechaFutura.setMonth(fechaFutura.getMonth() + plazoCredito);
    return fechaFutura.toISOString().split("T")[0];
  }
  generateAbonosDistribuidosTable(abonosDistribuidos) {
    if (!Array.isArray(abonosDistribuidos) || abonosDistribuidos.length === 0) {
      console.log("abonosDistribuidos est\xE1 vac\xEDo o no es un array:", abonosDistribuidos);
      return {
        text: "No hay datos en los abonos distribuidos.",
        italics: true,
        margin: [0, 10]
      };
    }
    const selectedHeaders = ["id", "monto", "pago_capital", "pago_interes", "pago_iva"];
    const headerDisplayMap = {
      id: "ID",
      monto: "Monto",
      pago_capital: "Capital",
      pago_interes: "Inter\xE9s",
      pago_iva: "IVA"
    };
    const tableHeader = selectedHeaders.map((header) => ({
      text: headerDisplayMap[header] || header,
      bold: true,
      fillColor: "#eeeeee",
      fontSize: 10
    }));
    const tableBody = abonosDistribuidos.map((row) => selectedHeaders.map((header) => {
      let value = row[header] ?? row.abono?.[header] ?? "";
      if (header === "id" && typeof value === "number") {
        value = value.toFixed(0);
      }
      if (typeof value === "number" && header !== "id") {
        value = `$${value.toFixed(2)}`;
      }
      return {
        text: value,
        fontSize: 9
      };
    }));
    return {
      style: "tableExample",
      table: {
        headerRows: 1,
        widths: selectedHeaders.map(() => 55),
        body: [tableHeader, ...tableBody]
      },
      layout: "lightHorizontalLines",
      alignment: "center"
    };
  }
  generateTablaAmortizacionesTable(tablaAmortizaciones) {
    if (!Array.isArray(tablaAmortizaciones) || tablaAmortizaciones.length === 0) {
      console.log("tablaAmortizaciones est\xE1 vac\xEDa o no es un array:", tablaAmortizaciones);
      return {
        text: "No hay datos en la tabla de amortizaciones.",
        italics: true,
        margin: [0, 10]
      };
    }
    const selectedHeaders = [
      "convenio_id",
      "abono_a_capital",
      "fecha",
      "gastos_judiciales",
      "interes",
      "iva",
      "pago_fijo"
    ];
    const headerDisplayMap = {
      convenio_id: "ID Convenio",
      abono_a_capital: "Abono a capital",
      fecha: "Fecha",
      gastos_judiciales: "Gastos Judiciales",
      interes: "Inter\xE9s",
      iva: "IVA",
      pago_fijo: "Pago fijo"
    };
    const tableHeader = selectedHeaders.map((header) => ({
      text: headerDisplayMap[header] || header,
      bold: true,
      fillColor: "#eeeeee",
      fontSize: 10
    }));
    const tableBody = tablaAmortizaciones.map((row) => selectedHeaders.map((header) => ({
      text: row[header] ?? "",
      fontSize: 9
    })));
    return {
      style: "tableExample",
      table: {
        headerRows: 1,
        widths: selectedHeaders.map(() => 55),
        // Adjust width if needed
        body: [tableHeader, ...tableBody]
      },
      layout: "lightHorizontalLines"
    };
  }
  countAbonosDistribuidos(abonosDistribuidos) {
    if (!Array.isArray(abonosDistribuidos)) {
      console.log("abonosDistribuidos no es un array:", abonosDistribuidos);
      return 0;
    }
    return abonosDistribuidos.length;
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  formatDateToSlash(dateString) {
    return dateString.replace(/-/g, "/");
  }
  checkAllGastosJudicialesAreZero(data) {
    return data.every((item) => Number(item.gastos_judiciales).toFixed(2) === "0.00");
  }
  buildAmortizacionesRows(data, convenioActivo) {
    const includeGastosJudiciales = !this.checkAllGastosJudicialesAreZero(data);
    const headers = [
      { text: "No.", bold: true, fontSize: 9, alignment: "center" },
      { text: "Fecha", bold: true, fontSize: 9, alignment: "center" },
      { text: "Abono a Capital", bold: true, fontSize: 9, alignment: "center" },
      ...includeGastosJudiciales ? [{ text: "Gastos Judiciales", bold: true, fontSize: 9, alignment: "center" }] : [],
      { text: "Inter\xE9s", bold: true, fontSize: 9, alignment: "center" },
      { text: "IVA", bold: true, fontSize: 9, alignment: "center" },
      { text: "Pago Fijo", bold: true, fontSize: 9, alignment: "center" }
    ];
    const dataWithoutLast = data.slice(0, -1);
    const rows = dataWithoutLast.map((item, index) => {
      const row = [
        { text: `${index + 1}`, fontSize: 9, alignment: "center" },
        { text: this.formatDateToSlash(item.fecha), fontSize: 9, alignment: "center" },
        { text: `$${Number(item.abono_a_capital).toFixed(2)}`, fontSize: 9, alignment: "right" },
        ...includeGastosJudiciales ? [{ text: `$${Number(item.gastos_judiciales).toFixed(2)}`, fontSize: 9, alignment: "right" }] : [],
        { text: `$${Number(item.interes).toFixed(2)}`, fontSize: 9, alignment: "right" },
        { text: `$${Number(item.iva).toFixed(2)}`, fontSize: 9, alignment: "right" },
        { text: `$${Number(item.pago_fijo).toFixed(2)}`, fontSize: 9, alignment: "right" }
      ];
      return row;
    });
    const dummyRow = [
      { text: `${rows.length + 1}`, fontSize: 9, alignment: "center" },
      { text: this.formatDateToSlash(convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.fecha), fontSize: 9, alignment: "center" },
      { text: "$" + convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.abono_a_capital, fontSize: 9, alignment: "right" },
      ...includeGastosJudiciales ? [{ text: `$${Number(convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.gastos_judiciales).toFixed(2)}`, fontSize: 9, alignment: "right" }] : [],
      { text: "$" + convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.interes, fontSize: 9, alignment: "right" },
      { text: "$" + convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.iva, fontSize: 9, alignment: "right" },
      { text: "$" + convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.pago_fijo, fontSize: 9, alignment: "right" }
    ];
    rows.push(dummyRow);
    return [headers, ...rows];
  }
  generarConvenioJudicialPF(creditoParam, convenio) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonales",
        "productosFinancieros",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "juridicos",
        "sucursales",
        "sesiones",
        "convenios",
        "convenios.conveniosPagos"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
      }
      const convenioActivo = convenio ?? credito.convenios?.find((convenio2) => convenio2.estatus == "ACTIVO");
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
      const pagosActivos = this.getPagosFromActiveConvenios(credito);
      const pagosOrdenadosFecha = this.sortPagosByFecha(pagosActivos);
      const tablaAmortizaciones = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(credito);
      const abonosDistribuiddos = tablaEstadoCuenta?.abonos_distribuidos ?? [];
      const tablaJuridicos = credito.juridicos;
      console.log(tablaAmortizaciones);
      const tablaDPF = credito.datos_persona_fisica;
      const tablaDP = credito.datos_persona_fisica?.datos_personales;
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const telefonosCasa = this.utilsC.getTelefonosCasa(tablaDP?.telefonos_personales ?? []);
      const telefonosOficina = this.utilsC.getTelefonosOficina(tablaDP?.telefonos_personales ?? []);
      const telefonosCelular = this.utilsC.getTelefonosCelular(tablaDP?.telefonos_personales ?? []);
      const capitalCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("abono_a_capital", tablaAmortizaciones);
      const interesCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("interes", tablaAmortizaciones);
      const ivaCreditoAmo = this.utilsEstadoCuenta.sumarListaByKey("iva", tablaAmortizaciones);
      const capitalAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_capital", abonosDistribuiddos);
      const interesAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_interes", abonosDistribuiddos);
      const ivaAbonos = this.utilsEstadoCuenta.sumarListaByKey("pago_iva", abonosDistribuiddos);
      const nombreCliente = this.utils.nombreClienteFromDatosPersonales(credito.datos_personales), demandado = this.utils.nombreClienteFromDatosPersonales(tablaDP) + (nombreCliente !== "N/A" ? " y " + nombreCliente : ""), noExpediente = credito.juridicos?.expediente ?? "N/A", tipoJuicio = credito.juridicos?.tipo_juicio ?? "N/A", juezAsignado = credito.juridicos?.juzgados?.nombre ?? "N/A", nombreAcreditado = this.utils.nombreClienteFromDatosPersonales(tablaDP), tipoIdentificacion = tablaDP?.identificacion.toUpperCase(), numeroIdentificacion = tablaDP?.identificacion_numero.toUpperCase(), domicilioPF = this.utils.domicilioFromDatosModel(tablaDP), liquidarSinMoratorios = tablaEstadoCuenta?.total_a_liquidar, liquidarSinMoratoriosConLetra = this.utilsC.NumeroALetras(liquidarSinMoratorios), capital = this.roundTwo(capitalCreditoAmo - capitalAbonos), capitalConLetra = this.utilsC.NumeroALetras(capital), interesOrdinario = tablaEstadoCuenta?.interes_ordinario, interesOrdinarioConLetra = this.utilsC.NumeroALetras(interesOrdinario), interesesMoratorios = tablaEstadoCuenta?.interes_moratorio, interesesMoratoriosConLetra = this.utilsC.NumeroALetras(interesesMoratorios), saldoTotal = this.roundTwo(Number(capital) + Number(interesesMoratorios)), saldoTotalConLetra = this.utilsC.NumeroALetras(saldoTotal), suertePrincipal = this.utilsEstadoCuenta.sumarListaByKey("capital", credito.convenios), suertePrincipalConLetra = this.utilsC.NumeroALetras(suertePrincipal), gastosJudiciales = this.utilsEstadoCuenta.sumarListaByKey("gastos_judiciales", credito.convenios), gastosJudicialesConLetra = this.utilsC.NumeroALetras(gastosJudiciales), adeudoTotal = this.roundTwo(Number(gastosJudiciales) + Number(suertePrincipal)), adeudoTotalConLetra = this.utilsC.NumeroALetras(adeudoTotal), mensualidadesAdeudoTotal = convenioActivo?.plazo, cantidadPagosMensuales = convenioActivo?.convenios_pagos?.at(0)?.pago_fijo, cantidadPagosMensualesConLetra = this.utilsC.NumeroALetras(cantidadPagosMensuales), referenciaBancaria = credito.referencia_bancaria.toUpperCase(), pagoUnico = this.roundTwo(Number(capitalAbonos) + Number(interesAbonos) + Number(ivaAbonos)), pagoUnicoConLetra = this.utilsC.NumeroALetras(pagoUnico), cantidadPagos = convenioActivo?.plazo, tasaInteresMoratorio = "12", plazoCredito = this.utilsC.fechaAletras(this.calcularFechaFutura(this.utilsC.countPagosFromActiveConvenios(credito))), plazoReestructura = convenioActivo?.plazo - 1, montoMensual = convenioActivo?.convenios_pagos?.[0].pago_fijo, montoMensualLetras = this.utilsC.NumeroALetras(montoMensual), ultimoMontoMensual = convenioActivo?.convenios_pagos?.[convenioActivo.convenios_pagos.length - 1]?.pago_fijo, ultimoMontoMensualLetras = this.utilsC.NumeroALetras(ultimoMontoMensual), direccionDespacho = "CALLE IGNACIO ZARAGOZA, NUMERO 8169 INTERIOR 401, ZONA CENTRO, TIJUANA, BAJA CALIFORNIA, C.P. 22000)", domicilioParteDemandada = this.utils.domicilioFromDatosModel(tablaDPF?.negocios);
      const tablaAmortizacionesTable = this.generateTablaAmortizacionesTable(tablaAmortizaciones);
      const tablaAbonosTable2 = convenioActivo?.convenios_pagos || [];
      const tableRows = this.buildAmortizacionesRows(tablaAbonosTable2, convenioActivo);
      const fecha = this.utils.fechaFormateada(/* @__PURE__ */ new Date());
      const fechaConvenio = this.utils.fechaFormateada(convenioActivo?.fecha_convenio);
      console.log("La lista de pagos de conveios:");
      console.log(tablaAbonosTable2);
      const generatedDocument = {
        pageMargins: [60, 50, 60, 50],
        content: [
          {
            layout: "noBorders",
            table: {
              widths: ["*", 100],
              body: [
                [
                  { text: "" },
                  {
                    text: "HSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO  FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA F/53260 \nVS",
                    bold: true,
                    alignment: "justify"
                  }
                ],
                [
                  { text: "" },
                  { text: demandado }
                ],
                [
                  { text: "" },
                  {
                    text: [
                      { text: "EXP: ", bold: true },
                      noExpediente
                    ]
                  }
                ],
                [
                  { text: "" },
                  {
                    text: [
                      { text: "JUICIO: ", bold: true },
                      tipoJuicio
                    ]
                  }
                ],
                [
                  { text: "" },
                  {
                    text: [
                      { text: "ASUNTO: ", bold: true },
                      "CONVENIO JUDICIAL."
                    ]
                  }
                ]
              ]
            },
            fontSize: 10,
            margin: [0, 0, 0, 20]
          },
          {
            text: [
              "C. JUEZ (",
              { text: juezAsignado },
              ") DE LO CIVIL ESPECIALIZADO EN MATERIA MERCATIL EN TURNO, DEL ESTADO DE BAJA CALIFORNIA.",
              "\n\n"
            ],
            alignment: "left",
            bold: true
          },
          {
            text: "P R E S E N T E.-",
            bold: true
          },
          {
            text: [
              { text: "\n ALFONSO CH\xC1VEZ P\xC9REZ,", bold: true },
              " promoviendo en mi car\xE1cter de ",
              { text: "Apoderado legal de \u201CHSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA M\xDALTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA F/53260\u201D", bold: true, decoration: "underline" },
              "; personalidad que acredito con copia certificada del Instrumento Notarial N\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro n\xFAmero 1,970 (mil novecientos setenta), en la ciudad de M\xE9xico, de fecha catorce de septiembre de dos mil veintitr\xE9s, otorgado ante la fe del Licenciado Francisco I. Hugues V\xE9lez, Titular de la Notar\xEDa P\xFAblica N\xFAmero 212 (doscientos doce), en cuyo protocolo act\xFAan tambi\xE9n la Licenciada Rosamar\xEDa L\xF3pez Lugo, Titular de la Notar\xEDa P\xFAblica N\xFAmero 223 (doscientos veintitr\xE9s) y Licenciado Guillermo Oliver Bucio, Titular de la Notar\xEDa N\xFAmero 246 (doscientos cuarenta y seis), los tres por convenio de sociedad, en la que se hizo constar el Poder General Limitado que otorga \u201CHSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA M\xDALTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA F/53260\u201D \xFAnica y exclusivamente en su car\xE1cter de Fiduciario en el contrato de Fideicomiso identificado administrativamente con el n\xFAmero \u201CF/53260\u201D (F diagonal cincuenta y tres mil doscientos sesenta), representada por su Delegado Fiduciario se\xF1or Horacio Flores Rodr\xEDguez, como la parte \u201CACTORA\u201D, personalidad que tengo debidamente acreditada en autos; as\xED como el (la) C. ",
              { text: nombreAcreditado, bold: true },
              ", quien se obliga en lo personal, acepta y reconoce el adeudo, quien por su propio derecho comparecen en lo personal en su car\xE1cter de parte DEMANDADA. Conjuntamente comparecemos para celebrar ",
              { text: "CONVENIO JUDICIAL", bold: true, decoration: "underline" },
              ", de acuerdo a los antecedentes, declaraciones y cl\xE1usulas siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "En este acto comparece",
              { text: " el (la) C. ", bold: true },
              { text: nombreAcreditado, bold: true },
              " a darse por emplazada en el presente juicio, as\xED mismo las partes hemos pactado dirimir el juicio, mediante convenio judicial, transacci\xF3n que celebramos acorde con el art\xEDculo 55 del c\xF3digo de procedimientos civiles vigente del estado, de aplicaci\xF3n supletoria a C\xF3digo de Comercio, instrumento que se exhibe ratificado, por ello pedimos se eleve a la categor\xEDa de ",
              { text: "COSA JUZGADA", bold: true },
              ", como si se tratara de una sentencia ejecutoriada.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "D E C L A R A C I O N E S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "PRIMERA. - PERSONALIDAD Y REPRESENTACI\xD3N.", bold: true },
              "Las partes se reconocen mutuamente la personalidad con la que comparecen a la celebraci\xF3n del presente acto, y manifiestan bajo protesta de decir verdad, que las facultades de sus representantes (en caso de personas morales) no les han sido revocadas ni restringidas en forma alguna, por lo que cuenta con la legal representaci\xF3n de sus poderdantes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEGUNDA. - CAPACIDAD. ", bold: true },
              "Manifiesta la PARTE DEMANDADA bajo protesta de decir verdad, que cuenta con la capacidad jur\xEDdica necesaria, para celebrar el presente convenio de reconocimiento de adeudo, as\xED como para obligarse en t\xE9rminos del mismo. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "TERCERA. - AUSENCIA DE VICIOS EN EL CONSENTIMIENTO. ", bold: true },
              " La PARTE DEUDORA manifiesta que es su voluntad celebrar de com\xFAn acuerdo el presente convenio con ",
              { text: "\u201CHSBC MEXICO\u201D SOCIEDAD AN\xD3NIMA ", bold: true },
              "INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, DEL FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA, IDENTIFICADO CON EL No. F/53260, atribuy\xE9ndole plena validez a las obligaciones que se asumen por virtud de este convenio, ya que el mismo no est\xE1 viciado de nulidad, error, dolo, lesi\xF3n o cualquier otro vicio de la voluntad.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "CUARTA. - FALTA DE PAGO. ", bold: true },
              "Declara la PARTE DEMANDADA que su estado de liquidez y solvencia econ\xF3mica no le permitieron cumplir las obligaciones de pago para con ",
              { text: "\u201CHSBC MEXICO\u201D SOCIEDAD AN\xD3NIMA ", bold: true },
              "INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISION FIDUCIARIA, DEL FIDEICOMISO PARA EL DESARROLLO ECONOMICO DE BAJA CALIFORNIA, derivados del ",
              { text: "t\xEDtulo de cr\xE9dito", bold: true },
              " objeto de la demanda, por lo que ha solicitado de dicho organismo la celebraci\xF3n del presente convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "QUINTA. - VERACIDAD DE DATOS. ", bold: true },
              "Declaran tanto la PARTE DEMANDADA, bajo protesta de decir verdad, que son ciertos los datos e informaci\xF3n proporcionada a con \u201CHSBC MEXICO\u201D, SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, para la celebraci\xF3n del presente convenio de reconocimiento de adeudo.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEXTA. - CR\xC9DITO ORIGINAL. ", bold: true },
              " Que el \u201CHSBC MEXICO\u201D, SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, suscribi\xF3 a la PARTE DEUDORA un t\xEDtulo de cr\xE9dito denominado contrato de cr\xE9dito y pagar\xE9 conforme a lo se\xF1alado y relacionado en la demanda inicial del juicio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEPTIMA. - ", bold: true },
              "Declara la PARTE DEMANDADA bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Que es una persona f\xEDsica, de nacionalidad mexicana, quien manifiesta ser mayor de edad y tener capacidad legal para celebrar el acto, que se identifica con ",
              { text: tipoIdentificacion, bold: true },
              ". ",
              { text: "No. ", bold: true },
              { text: numeroIdentificacion, bold: true },
              " Vigente a la fecha de la celebraci\xF3n del presente convenio, con domicilio en ",
              { text: domicilioPF, bold: true },
              ", en el cual declara que tambi\xE9n puede ser requerido y noti\uFB01cado.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "A). - ", bold: true },
              "Que se reconoce la procedencia de las prestaciones reclamadas en la demanda, allan\xE1ndose a esta \xFAltima.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "B). - ", bold: true },
              "Que, como consecuencia de las reclamaciones en la demanda, reconoce adeudar a la PARTE ACTORA, la cantidad que se indica en las cl\xE1usulas de este convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "OCTAVA. - ", bold: true },
              "Es voluntad de las partes celebrar el presente convenio, a fin de pactar una mec\xE1nica de pagos tendiente a que el acreditado logre liquidar a plazo totalmente el adeudo, debiendo conservar los t\xE9rminos y condiciones de intereses moratorios, y dem\xE1s cl\xE1usulas del t\xEDtulo de cr\xE9dito descrito en el antecedente de este convenio, acordando el respeto y cumplimiento de los derechos y obligaciones que se establecen en el presente instrumento.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Atento a lo expuesto, las partes otorgan las siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          { text: "C L \xC1 U S U L A S:", bold: true, alignment: "center", margin: [0, 15, 0, 15] },
          {
            text: [
              { text: "PRIMERA. - RECONOCIMIENTO DE ADEUDO. ", bold: true },
              "La PARTE DEMANDADA reconoce adeudar a \u201CHSBC MEXICO\u201D SOCIEDAD AN\xD3NIMA, INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, DEL FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA IDENTIFICADO CON EL No. F/53260, la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(liquidarSinMoratorios), bold: true },
              { text: " (" + liquidarSinMoratoriosConLetra + " " + this.formatDecimals(liquidarSinMoratorios) + ")", bold: true },
              ", que se obliga a pagar a la PARTE ACTORA, en los t\xE9rminos de este convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "La suma indicada en el p\xE1rrafo que precede se integra por los conceptos y cantidades, siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            table: {
              widths: [100, 100, "*"],
              body: [
                [
                  { text: "Capital", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(capital), alignment: "center", bold: true },
                  { text: capitalConLetra + " " + this.formatDecimals(capital), bold: true, alignment: "left" }
                ],
                [
                  { text: "Inter\xE9s Ordinario", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesOrdinario), alignment: "center", bold: true },
                  { text: interesOrdinarioConLetra + " " + this.formatDecimals(interesOrdinario), bold: true, alignment: "left" }
                ],
                [
                  { text: "Intereses Moratorios", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(interesesMoratorios), alignment: "center", bold: true },
                  { text: interesesMoratoriosConLetra + " " + this.formatDecimals(interesesMoratorios), bold: true, alignment: "left" }
                ],
                [
                  { text: "Adeudo total", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(saldoTotal), alignment: "center", bold: true },
                  { text: saldoTotalConLetra + " " + this.formatDecimals(saldoTotal), bold: true, alignment: "left" }
                ]
              ]
            },
            alignment: "center",
            margin: [0, 15, 0, 15],
            fontSize: 9
          },
          {
            text: [
              { text: "SEGUNDA. - QUITA CONDICIONADA. ", bold: true },
              "La PARTE ACTORA otorga una quita condicionada al finalizar el cr\xE9dito a la PARTE DEMANDADA, los intereses moratorios devengados que este \xFAltimo le adeuda al d\xEDa (Fecha de la firma del convenio), por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(interesesMoratorios), bold: true },
              { text: " (" + interesesMoratoriosConLetra + " " + this.formatDecimals(interesesMoratorios) + ")", bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Resultando un adeudo total a pagar por los siguientes conceptos: ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            table: {
              widths: [100, 100, "*"],
              body: [
                [
                  { text: "Por concepto de suerte principal", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(suertePrincipal), alignment: "center", bold: true },
                  { text: suertePrincipalConLetra + " " + this.formatDecimals(suertePrincipal), bold: true, alignment: "left" }
                ],
                [
                  { text: "Gastos judiciales", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(gastosJudiciales), alignment: "center", bold: true },
                  { text: gastosJudicialesConLetra + " " + this.formatDecimals(gastosJudiciales), bold: true, alignment: "left" }
                ],
                [
                  { text: "Adeudo total a pagar", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(adeudoTotal), alignment: "center", bold: true },
                  { text: adeudoTotal + " " + this.formatDecimals(adeudoTotal), bold: true, alignment: "left" }
                ]
              ]
            },
            alignment: "center",
            margin: [0, 15, 0, 15],
            fontSize: 9
          },
          {
            text: [
              "Por lo que la PARTE DEMANDADA ",
              { text: "reconoce y acepta", bold: true },
              " que resulta un ",
              { text: "adeudo total a pagar ", bold: true },
              " por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(adeudoTotal), bold: true },
              { text: " (" + adeudoTotalConLetra + " " + this.formatDecimals(adeudoTotal) + ")", bold: true },
              ". A pagar en ",
              { text: mensualidadesAdeudoTotal, bold: true },
              " mensualidades de la siguiente manera: ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "TERCERA. - DE LOS PAGOS. ", bold: true },
              "La PARTE DEMANDADA se obliga a efectuar ",
              ...this.utilsC.generarDescripcionMensualidades(credito),
              "o hasta cubrir la totalidad del adeudo; pagos que realizar\xE1 \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito o transferencia electr\xF3nica al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia \xFAnica ",
              { text: referenciaBancaria, bold: true },
              " Efectu\xE1ndose de la siguiente manera:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "A).- ", bold: true },
              "1 pago \xFAnico por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(pagoUnico), bold: true },
              { text: " (" + pagoUnicoConLetra + " " + this.formatDecimals(pagoUnico) + ").", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "B).- ", bold: true },
              { text: cantidadPagos, bold: true },
              " pagos por la cantidad de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(cantidadPagosMensuales), bold: true },
              { text: " (" + cantidadPagosMensualesConLetra + " " + this.formatDecimals(cantidadPagosMensuales) + ")", bold: true },
              ", mensuales a realizar el d\xEDa \xFAltimo de cada mes y as\xED sucesivamente y;",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            table: {
              widths: ["*", "*", "*", "*", "*", "*"],
              body: tableRows
            }
          },
          //tablaAbonosTable,
          {
            text: [
              "\n",
              "En este orden de ideas, el adeudo reconocido en la cl\xE1usula primera, as\xED como aquellos cargos que se causen hasta la realizaci\xF3n del \xFAltimo pago, quedara totalmente liquidado, una vez que la PARTE DEMANDADA realice los ",
              { text: cantidadPagos, bold: true },
              "pagos.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Para todas las obligaciones de pago del presente contrato, las partes acuerdan que la PARTE DEMANDADA, deber\xE1 realizarlas a m\xE1s tardar el d\xEDa \xFAltimo de cada mes. En caso de que el d\xEDa de pago sea inh\xE1bil, \xE9ste se efectuar\xE1 el d\xEDa h\xE1bil anterior, sin que exceda el l\xEDmite del mes.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "CUARTA.- INCUMPLIMIENTO. ", bold: true },
              "Por otra parte, las partes acuerdan que, ante el incumplimiento de pago de las obligaciones contenidas en la cl\xE1usula tercera, la PARTE ACREDITADA deber\xE1 pagar a \u201CHSBC MEXICO\u201D, SOCIEDAD ANONIMA, INSTITUCION DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISION FIDUCIARIA, ",
              { text: "intereses moratorios a raz\xF3n del ", bold: true },
              { text: tasaInteresMoratorio, bold: true },
              { text: "% de inter\xE9s anual + IVA ", bold: true },
              "pactada en el titulo cr\xE9dito base de la acci\xF3n.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "QUINTA. - PLAZO. ", bold: true },
              "El plazo del convenio vencer\xE1 el ",
              { text: plazoCredito, bold: true },
              ", sin embargo, seguir\xE1 surtiendo sus efectos legales hasta en tanto no se pague la totalidad del cr\xE9dito con todos sus accesorios.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEXTA. - LUGAR DE PAGO. ", bold: true },
              "Las partes reiteran que todas las prestaciones derivadas del convenio deber\xE1n pagarse, sin previo requerimiento, mediante dep\xF3sito bancario en la cuenta n\xFAmero: FIDEICOMISO PARA EL DESARROLLO ECONOMICO DE BAJA CALIFORNIA HBMX53260, con clave de servicio: 8727 CUENTA 6231216641, CLABE INTERBANCARIA 021028062312166411 referencia \xFAnica ",
              { text: referenciaBancaria, bold: true },
              " o directamente reportar pagos en las oficinas de la Secretaria de Econom\xEDa ubicadas en Justo Sierra y Honduras #337, Col. Cuauht\xE9moc, CP 21200, Mexicali B.C. Centro comercial \u201CLa plazita\u201D.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEPTIMA. - APLICACI\xD3N DE PAGOS. ", bold: true },
              "Las partes reiteran que cualquier pago que efectu\xE9 la PARTE DEMANDADA se aplicara en el siguiente orden: intereses moratorios y adeudo neto.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Las partes reiteran que, con relaci\xF3n a los PAGOS ANTICIPADOS, la PARTE ACREDITADA queda facultada para pagar anticipadamente todo o parte del adeudo a su cargo, siempre y cuando este al corriente en el cumplimiento de las obligaciones derivadas del convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "OCTAVA. - INEXISTENCIA DE NOVACION. ", bold: true },
              "La PARTE DEUDORA expresamente se\xF1ala que la celebraci\xF3n del presente convenio no implica novaci\xF3n alguna al respecto de las obligaciones a su cargo a que se refieren el cr\xE9dito original, mencionado en el antecedente del presente instrumento.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "NOVENA. -EJECUCI\xD3N DE CONVENIO. ", bold: true },
              "Las partes pactan expresamente que se proceder\xE1 a denunciar el incumplimiento del convenio e iniciar su ejecuci\xF3n gir\xE1ndose las ordenes necesarias para ello, si LA PARTE DEMANDADA faltare al cumplimiento de cualquiera de los supuestos siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "a) ", bold: true },
              "Si la ",
              { text: "PARTE DEMANDADA", bold: true },
              " no realizare 3 o m\xE1s de los pagos mensuales estipulados durante el tiempo remanente del plazo pactado para el pago, o no paga puntualmente la suma principal del adeudo, los intereses sobre el mismo o cualesquiera gastos y costas que se causen en virtud del presente convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "b) ", bold: true },
              "Si la ",
              { text: "PARTE DEMANDADA", bold: true },
              " incumplieren con cualquiera de las obligaciones que a su cargo se deriven del presente convenio.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "c) ", bold: true },
              "Si activos fijos de la ",
              { text: "PARTE DEMANDADA", bold: true },
              " fueren embargados en todo o en parte por autoridad judicial o administrativa o de cualquier otro g\xE9nero.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "d) ", bold: true },
              "En los dem\xE1s casos previstos por el convenio y por las leyes aplicables.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "DECIMA. - GASTOS Y HONORARIOS. ", bold: true },
              "Los honorarios, gastos, derechos o impuestos que se originen por el otorgamiento de este instrumento, por su inscripci\xF3n, cancelaci\xF3n, y por las gestiones judiciales o extrajudiciales que deban hacerse para el cumplimiento forzoso de las obligaciones ser\xE1n a cargo de la PARTE DEMANDADA. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "DECIMA PRIMERA. - DOMICILIOS CONVENCIONALES. ", bold: true },
              "Las partes se\xF1alan como sus respectivos domicilios para los efectos del presente convenio, e inclusive para o\xEDr y recibir notificaciones, los siguientes:",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "A. La PARTE ACTORA: ", bold: true },
              "HSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA INSTITUCI\xD3N DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA F/53260 en ",
              { text: direccionDespacho, bold: true },
              { text: "CALLE IGNACIO ZARAGOZA, NUMERO 8169 INTERIOR 401, ZONA CENTRO, TIJUANA, BAJA CALIFORNIA, C.P. 22000", bold: true },
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "La PARTE DEMANDADA: ", bold: true },
              "con domicilio en ",
              { text: domicilioParteDemandada, bold: true },
              ".",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "Mientras las partes no se notifiquen por escrito el cambio de sus domicilios, los emplazamientos, notificaciones y dem\xE1s diligencias judiciales y extrajudiciales se practicar\xE1n y surtir\xE1n todos sus efectos legales en los domicilios antes designados. ",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "DECIMA SEGUNDA. - ", bold: true },
              "Las partes reiteran su sometimiento expreso a la jurisdicci\xF3n y competencia de este Juzgado al que comparecen. Por lo que en presente convenio, dan por concluida la presente propuesta, se turnen los autos a sentencia y se tenga como cosa juzgada la presente audiencia y en su momento en cumplimiento de lo pactado se proceder\xE1 a la ejecuci\xF3n de sentencia conforme a derecho.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9,
            pageBreak: "before"
          },
          {
            text: [
              "Por lo antes expuesto y fundado, atentamente pedimos:",
              "\n\n"
            ],
            bold: true,
            alignment: "center",
            fontSize: 9
          },
          {
            text: [
              { text: "PRIMERO: ", bold: true },
              "Se nos tenga a las partes celebrando el presente convenio que una vez ratificado, solicitamos se apruebe con efectos de sentencia ejecutoriada.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              { text: "SEGUNDO: ", bold: true },
              "Expedir copia certificada del convenio y auto en que se apruebe.",
              "\n\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              "PROTESTO LO NECESARIO",
              "\n\n"
            ],
            alignment: "center",
            bold: true,
            fontSize: 9
          },
          {
            text: fecha?.toUpperCase(),
            alignment: "center",
            bold: true,
            fontSize: 9
          },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "LIC. ALFONSO CHAVEZ PEREZ", bold: true, alignment: "center" },
          { text: "Apoderado legal de HSBC M\xC9XICO, SOCIEDAD AN\xD3NIMA,", bold: true, alignment: "center" },
          { text: "INSTITUCI\xD3N DE BANCA M\xDALTIPLE, GRUPO FINANCIERO HSBC, ", bold: true, alignment: "center" },
          { text: "GDIVISI\xD3N FIDUCIARIA F/53260", bold: true, alignment: "center" },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: "C. " + nombreAcreditado, bold: true, alignment: "center" },
          { text: "LA PARTE DEMANDADA", bold: true, alignment: "center" },
          { text: `FECHA DE CONVENIO: ${fechaConvenio ? fechaConvenio : fecha}`, bold: true, alignment: "center", margin: [0, 10, 0, 0] }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
          },
          tableExample: {
            margin: [0, 5, 0, 15]
          }
        }
      };
      pdfMake8.createPdf(generatedDocument).open();
    });
  }
};
_ConvenioJudicialPF.\u0275fac = function ConvenioJudicialPF_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConvenioJudicialPF)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_ConvenioJudicialPF.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConvenioJudicialPF, factory: _ConvenioJudicialPF.\u0275fac, providedIn: "any" });
var ConvenioJudicialPF = _ConvenioJudicialPF;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConvenioJudicialPF, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

export {
  convenioPagoPM,
  convenioPagoPF,
  convenioReestructuraPF,
  convenioReestructuraPM,
  ConvenioExtrajudicialPM,
  ConvenioExtrajudicialPF,
  ConvenioJudicialPM,
  ConvenioJudicialPF
};
//# sourceMappingURL=chunk-IC6YGMVY.js.map
