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
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/services/documentosLegales/contratos/contrato_estado_de_cuenta.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
pdfMake.addVirtualFileSystem(pdfFonts);
var _estadoCuenta = class _estadoCuenta {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  /*
      estadoHeaderLogo = async (logoFondos: string = 'assets/fondo_completo.png') => {
        const logoFondosBC = await this.utilsC.getBase64ImageFromURL3(`${logoFondos}`);
  
        return {
          layout: "noBorders",
          table: {
            widths: ['*'],
            body: [
              [
                {
                  image: logoFondosBC,
                  alignment: 'left',
                  width: "200"
                }
              ],
            ],
          },
        };
      };
    */
  tableTitles(titleCount, titleText) {
    return __async(this, null, function* () {
      return {
        layout: "noBorders",
        table: {
          widths: [20, "*"],
          body: [
            [
              {
                text: titleCount,
                alignment: "center",
                width: "150",
                fillColor: "#7B001C",
                color: "#FFFFFF"
              },
              {
                text: titleText,
                alignment: "left",
                width: "150",
                fillColor: "#7B001C",
                color: "#FFFFFF",
                margin: [20, 0, 0, 0]
              }
            ]
          ]
        },
        margin: [0, 10, 0, 10]
      };
    });
  }
  llenarCeldaConDatos(label, content, alignRight = false) {
    return __async(this, null, function* () {
      const displayContent = content === "" || content === void 0 || content === null ? "N/A" : content;
      if (alignRight) {
        return [
          { text: label + ":\n", fontSize: 9 },
          { text: displayContent, bold: true, fontSize: 10, alignment: "right" }
        ];
      } else {
        return [
          { text: label + ":\n", fontSize: 9 },
          { text: displayContent, bold: true, fontSize: 10 }
        ];
      }
    });
  }
  formatoFechaLectura(fechaISO) {
    if (!fechaISO)
      return "N/A";
    const [year, month, day] = fechaISO.split("-").map(Number);
    const fecha = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(fecha);
  }
  formatDate(inputDate) {
    const [year, month, day] = inputDate.split("-");
    return `${day}/${month}/${year}`;
  }
  truncateToTwoDecimals(value) {
    return Math.trunc(value * 100) / 100;
  }
  formatearNumeroConComas(valor) {
    const numero = Number(valor);
    if (isNaN(numero))
      return String(valor);
    const [entero, decimales] = numero.toFixed(2).split(".");
    const enteroConComas = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${enteroConComas}.${decimales}`;
  }
  // Function to get the saldoInsoluto of the last row
  getLastSaldoInsoluto(periodos) {
    let isVigenteShown = false;
    const filteredPeriodos = periodos.filter((periodo) => {
      if (periodo.status === "VIGENTE" && isVigenteShown) {
        return false;
      }
      if (periodo.status === "VIGENTE") {
        isVigenteShown = true;
      }
      return true;
    });
    const lastRow = filteredPeriodos[filteredPeriodos.length - 1];
    return lastRow ? lastRow.saldo_insoluto || 0 : 0;
  }
  // Function to get the saldoTotal of the last row
  getLastSaldoTotal(periodos) {
    let isVigenteShown = false;
    const filteredPeriodos = periodos.filter((periodo) => {
      if (periodo.status === "VIGENTE" && isVigenteShown) {
        return false;
      }
      if (periodo.status === "VIGENTE") {
        isVigenteShown = true;
      }
      return true;
    });
    const lastRow = filteredPeriodos[filteredPeriodos.length - 1];
    return lastRow ? lastRow.saldo_total || 0 : 0;
  }
  safeToFixed(value, digits = 2) {
    const num = Number(value);
    return isNaN(num) ? "0.00" : num.toFixed(digits);
  }
  sumSaldoVencidoActual(periodos) {
    return periodos.filter((p) => p.status !== "VIGENTE").reduce((sum, p) => sum + Number(p.saldo_vencido_actual || 0), 0);
  }
  sumMoratorioVencido(periodos) {
    return periodos.filter((p) => p.status === "VENCIDO").reduce((sum, p) => sum + Number(p.moratorio || 0), 0);
  }
  creditoOriginalFromCredito(credito) {
    return __async(this, null, function* () {
      if (!credito?.folio)
        return;
      const folioOriginal = this.utils.folioOriginalFromCredito(credito);
      const creditoOriginal = yield this.creditoController.first({ folio: folioOriginal, deleted_at: null }, ["*"]);
      return creditoOriginal;
    });
  }
  generarEstadoCuentaFromCreditoID(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, ["*"]);
      let nomas = this.utilsEstadoCuenta.getEstadoCuenta(credito);
      console.log(nomas);
      const creditoOriginal = yield this.creditoOriginalFromCredito(credito);
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(credito);
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const abonos = credito?.abonos || [];
      console.log(tablaEstadoCuenta?.periodos.length + " MESES");
      const totalPagoProgramado = this.utilsEstadoCuenta.sumarListaByKey("pago_programado_total", tablaEstadoCuenta?.periodos);
      const totalPago = this.utilsEstadoCuenta.sumarListaByKey("pago_total", tablaEstadoCuenta?.periodos);
      const totalCapital = this.utilsEstadoCuenta.sumarListaByKey("pago_capital", tablaEstadoCuenta?.periodos);
      const totalInteres = this.utilsEstadoCuenta.sumarListaByKey("pago_interes", tablaEstadoCuenta?.periodos);
      const totalIva = this.utilsEstadoCuenta.sumarListaByKey("pago_iva", tablaEstadoCuenta?.periodos);
      const sumTotalSaldoVencido = this.sumSaldoVencidoActual(tablaEstadoCuenta?.periodos || []);
      console.log("Total saldo_vencido_actual (non-VIGENTE):", sumTotalSaldoVencido);
      const totalMoratorioVencido = this.sumMoratorioVencido(tablaEstadoCuenta?.periodos || []);
      console.log(tablaEstadoCuenta?.periodos);
      const lastSaldoInsoluto = this.getLastSaldoInsoluto(tablaEstadoCuenta?.periodos);
      const lastSaldoTotal = this.getLastSaldoTotal(tablaEstadoCuenta?.periodos);
      const totalMonto = abonos.reduce((sum, abono) => sum + abono.monto, 0);
      if (!credito)
        return;
      const creditoOriginalTemp = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginalTemp) {
        credito.datos_persona_fisica = creditoOriginalTemp.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginalTemp.datos_personas_morales;
      }
      const fechaActual = this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toLowerCase();
      let status_cliente = tablaEstadoCuenta.credito_status;
      if (credito.juridicos) {
        status_cliente = "JUR\xCDDICO";
      }
      const datosCredito = {
        fechaImpresion: fechaActual.toUpperCase(),
        creditoID,
        programa: (creditoOriginal?.productos_financieros?.nombre ?? credito.productos_financieros?.nombre)?.toUpperCase(),
        folio: credito.folio?.toUpperCase(),
        referenciaBancaria: credito.referencia_bancaria,
        estatus: status_cliente
      };
      const tablaDatosPM = credito.datos_personas_morales;
      const datosPM = {
        razonSocial: tablaDatosPM?.razon_social.toUpperCase(),
        nombre: tablaDatosPM?.nombre_comercial?.toUpperCase(),
        rfc: tablaDatosPM?.rfc?.toUpperCase(),
        calle: this.utils.domicilioFromDatosModel(tablaDatosPM).toUpperCase(),
        colonia: tablaDatosPM?.colonia?.toUpperCase(),
        localidad: tablaDatosPM?.localidad?.toUpperCase(),
        municipio: tablaDatosPM?.ciudades?.nombre?.toUpperCase()
      };
      const tablaDatosPF = credito.datos_persona_fisica?.datos_personales;
      const datosPF = {
        nombre: this.utils.nombreClienteFromDatosPersonales(tablaDatosPF).toUpperCase(),
        nombreComercial: credito.datos_persona_fisica?.negocios?.nombre.toUpperCase(),
        rfc: tablaDatosPF?.rfc?.toUpperCase(),
        calle: this.utils.domicilioFromDatosModel(tablaDatosPF).toUpperCase(),
        colonia: tablaDatosPF?.colonia?.toUpperCase(),
        localidad: tablaDatosPF?.localidad?.toUpperCase(),
        municipio: tablaDatosPF?.ciudades?.nombre?.toUpperCase()
      };
      const datosAcreditado = tablaDatosPM ? datosPM : datosPF;
      const datosEstadoCuenta = {
        fechaApertura: this.utilsC.fechaFormateada(credito.fecha_convenio),
        fechaTermino: this.utilsC.fechaFormateada(tablaEstadoCuenta?.fecha_fin),
        capital: tablaEstadoCuentaCliente?.capital,
        plazoContratado: tablaEstadoCuenta?.periodos.length + " MESES",
        tasaInteres: tablaEstadoCuenta?.tasa_interes_mensual + "%",
        ordinario: tablaEstadoCuenta?.interes_ordinario,
        graciaCapital: tablaEstadoCuenta?.gracia_a_capital + " MESES",
        tipo: tablaEstadoCuentaCliente?.tipoConvenio,
        montoTotalPagado: tablaEstadoCuenta?.monto_total_pagado,
        liquidarSinMoratorios: tablaEstadoCuenta?.total_a_liquidar,
        capitalPorVencer: tablaEstadoCuenta?.capital_por_vencer,
        tasaMoratoria: "2 %",
        interesMoratorio: tablaEstadoCuenta?.interes_moratorio,
        fechaUltimoPago: this.utilsC.fechaAletras(tablaEstadoCuentaCliente?.fechaUltimoPago),
        importeUltimoPago: tablaEstadoCuentaCliente?.importeUltimoPago,
        mensualidadesCubiertas: tablaEstadoCuenta?.mensualidades_cubiertas,
        mensualidadesVencidas: tablaEstadoCuenta?.mensualidades_vencidas
      };
      console.log("Importe ultimo pago: ", typeof datosEstadoCuenta.importeUltimoPago);
      const headerLogo = yield this.chronixPDF.generateHeader(["assets/fondo_completo.png"], [180], [200]);
      const backgroundLogo = yield this.utilsC.backgroundLogo("assets/BClogo.png");
      const periodos = nomas?.periodos || [];
      const totalSaldoVencido = periodos.reduce((sum, p) => sum + (p.saldo_vencido_actual || 0), 0);
      const totalSaldoVigente = periodos.reduce((sum, p) => sum + (p.saldo_total || 0), 0);
      let isVigenteShown = false;
      const filteredPeriodos = periodos.filter((periodo) => {
        if (periodo.status === "VIGENTE" && isVigenteShown) {
          return false;
        }
        if (periodo.status === "VIGENTE") {
          isVigenteShown = true;
        }
        return true;
      });
      const tableRows = filteredPeriodos.map((periodo, index) => [
        { text: (index + 1).toString(), fontSize: 5, alignment: "right" },
        { text: this.formatDate(periodo.fecha) || "N/A", fontSize: 5, alignment: "right" },
        { text: "$" + this.formatearNumeroConComas((+periodo.saldo_insoluto).toFixed(2)) || "N/A", fontSize: 5, alignment: "right" },
        { text: "$" + this.formatearNumeroConComas(this.safeToFixed(periodo.pago_programado_total)) || "N/A", fontSize: 5, alignment: "right" },
        { text: "$" + this.formatearNumeroConComas((+(periodo.pago_total ?? 0))?.toFixed(2)) || "N/A", fontSize: 5, alignment: "right" },
        { text: "$" + this.formatearNumeroConComas((+periodo.pago_capital).toFixed(2)) || "N/A", fontSize: 5, alignment: "right" },
        { text: "$" + this.formatearNumeroConComas(this.safeToFixed(periodo.pago_interes)) || "N/A", fontSize: 5, alignment: "right" },
        { text: "$" + this.formatearNumeroConComas(this.safeToFixed(periodo.pago_iva)) || "N/A", fontSize: 5, alignment: "right" },
        { text: "$" + this.formatearNumeroConComas(this.safeToFixed(periodo.saldo_vencido_actual)) || "N/A", fontSize: 5, alignment: "right" },
        {
          text: periodo.status || "N/A",
          fontSize: 6,
          bold: true,
          color: periodo.status?.toLowerCase() === "vencido" ? "red" : periodo.status?.toLowerCase() === "pagado" ? "green" : "black"
        },
        { text: "$" + this.formatearNumeroConComas(periodo.moratorio?.toFixed(2)) || "N/A", fontSize: 5, alignment: "right" },
        { text: "$" + this.formatearNumeroConComas((+(periodo.saldo_actual ?? 0)).toFixed(2)) || "N/A", fontSize: 5, alignment: "right" }
      ]);
      const generatedDocument = {
        pageMargins: [45, 35, 45, 50],
        background: (currentPage, pageSize) => {
          return {
            image: backgroundLogo.image,
            width: 500,
            opacity: 0.1,
            absolutePosition: {
              x: (pageSize.width - 500) / 2,
              y: (pageSize.height - 500) / 2
            }
          };
        },
        content: [
          __spreadValues({}, headerLogo),
          /*
          {
            text: 'FIDEICOMISO PARA EL DESARROLLO ECONÓMICO DE BAJA CALIFORNIA',
            alignment: "right",
            color: '#7B001C',
            fontSize: 14,
            bold: true,
            margin: [0, 20, 0, 5]
          },
          {
            text: [
              'Estado de cuenta al ',
              datosEstadoCuenta.fechaApertura
            ],
            alignment: "right",
            color: '#7B001C'
          },
          { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 300, y2: 0, lineWidth: 8, lineColor: '#7B001C' }], margin: [0, 10, 0, 30], alignment: "right" },*/
          this.chronixPDF.generateTitle("FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA", "#7B001C", [`Estado de cuenta al ${datosCredito.fechaImpresion}`]),
          yield this.tableTitles("1", "DATOS DEL CR\xC9DITO"),
          {
            table: {
              widths: [120, "*", 100, "*"],
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Fecha de impresi\xF3n", datosCredito.fechaImpresion)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Cr\xE9dito", datosCredito.creditoID)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Programa", datosCredito.programa),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Folio", datosCredito.folio)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Referencia bancaria", datosCredito.referenciaBancaria),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Estatus", datosCredito.estatus)
                  }
                ]
              ]
            }
          },
          yield this.tableTitles("2", "DATOS DEL ACREDITADO PARTICULAR"),
          {
            table: {
              widths: ["*", 80, 80, 90],
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre del acreditado", datosPM.razonSocial ? datosPM.razonSocial : datosPF.nombre),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Nombre comercial", datosPM.nombre ? datosPM.nombre : datosPF.nombreComercial)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("RFC", datosPM.rfc ? datosPM.rfc : datosPF.rfc)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Calle", datosPM.calle ? datosPM.calle : datosPF.calle)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Colonia", datosPM.colonia ? datosPM.colonia : datosPF.colonia)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Localidad", datosPM.localidad ? datosPM.localidad : datosPF.localidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Municipio", datosPM.municipio ? datosPM.municipio : datosPF.municipio)
                  }
                ]
              ]
            }
          },
          yield this.tableTitles("3", "DATOS DEL ESTADO DE CUENTA"),
          {
            table: {
              widths: [120, "*", 120, "*"],
              body: [
                [
                  { text: yield this.llenarCeldaConDatos("Fecha de apertura", datosEstadoCuenta.fechaApertura, true) },
                  { text: yield this.llenarCeldaConDatos("Fecha t\xE9rmino", datosEstadoCuenta.fechaTermino, true) },
                  yield this.llenarCeldaConDatos("Capital", "$ " + this.formatearNumeroConComas(datosEstadoCuenta.capital), true),
                  { text: yield this.llenarCeldaConDatos("Plazo contratado", datosEstadoCuenta.plazoContratado, true) }
                ],
                [
                  { text: yield this.llenarCeldaConDatos("Tasa de inter\xE9s ordinario", datosEstadoCuenta.tasaInteres, true) },
                  { text: yield this.llenarCeldaConDatos("Gracia a capital", datosEstadoCuenta.graciaCapital, true) },
                  { text: yield this.llenarCeldaConDatos("Tipo de convenio", datosEstadoCuenta.tipo, true) },
                  yield this.llenarCeldaConDatos("Monto total pagado", "$ " + this.formatearNumeroConComas(datosEstadoCuenta.montoTotalPagado), true)
                ],
                [
                  yield this.llenarCeldaConDatos("Liquidar sin moratorios", "$ " + this.formatearNumeroConComas(datosEstadoCuenta.liquidarSinMoratorios), true),
                  yield this.llenarCeldaConDatos("Capital por vencer", "$ " + this.formatearNumeroConComas(datosEstadoCuenta.capitalPorVencer), true),
                  { text: yield this.llenarCeldaConDatos("Tasa moratoria mensual", datosEstadoCuenta.tasaMoratoria, true) },
                  yield this.llenarCeldaConDatos("Inter\xE9s moratorio", "$ " + this.formatearNumeroConComas(datosEstadoCuenta.interesMoratorio), true)
                ],
                [
                  { text: yield this.llenarCeldaConDatos("Fecha \xFAltimo pago", datosEstadoCuenta.fechaUltimoPago, true) },
                  yield this.llenarCeldaConDatos("Importe \xFAltimo pago", "$ " + this.formatearNumeroConComas(datosEstadoCuenta.importeUltimoPago), true),
                  { text: yield this.llenarCeldaConDatos("Mensualidades cubiertas", datosEstadoCuenta.mensualidadesCubiertas, true) },
                  { text: yield this.llenarCeldaConDatos("Mensualidades vencidas", datosEstadoCuenta.mensualidadesVencidas, true) }
                ]
              ]
            }
          },
          {
            text: ""
            //pageBreak: 'before',
          },
          yield this.tableTitles("4", "RELACI\xD3N DE CUOTAS PAGADAS, VENCIDAS Y VIGENTES"),
          {
            table: {
              widths: [18, 28, 36, 36, 36, 36, 36, 36, 36, 28, 36, 36],
              body: [
                // Header Row
                [
                  { text: "No.", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Fecha", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Saldo", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Pago", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Pago total", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Capital", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Inter\xE9s", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "IVA", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Saldo vencido", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Estatus", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Inter\xE9s moratorio", fillColor: "#D3D3D3", bold: true, fontSize: 7 },
                  { text: "Saldo total", fillColor: "#D3D3D3", bold: true, fontSize: 7 }
                ],
                [
                  { text: "0", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "$" + this.utilsC.formatearNumeroConComas(tablaEstadoCuenta?.monto_total_mas_intereses), fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" },
                  { text: "", fontSize: 5, alignment: "right" }
                ],
                // Data Rows
                ...tableRows,
                /*
                [
                  { text: '3', fontSize: 5, alignment: 'right' },
                  { text: '23/04/2025', fontSize: 5, alignment: 'right' },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                  {
                    text: 'VENCIDO',
                    fontSize: 6,
                    bold: true,
                    color: 'red'
                  },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                  { text: '$' + '99,999,999.99', fontSize: 5, alignment: 'right' },
                ],*/
                [
                  { text: "Total:", fontSize: 5, bold: true, alignment: "right" },
                  { text: "", fontSize: 7 },
                  { text: "$" + this.formatearNumeroConComas(lastSaldoInsoluto.toFixed(2)) || "N/A", fontSize: 5, alignment: "right", bold: true },
                  { text: "$" + this.formatearNumeroConComas(totalPagoProgramado.toFixed(2)) || "N/A", fontSize: 5, alignment: "right", bold: true },
                  { text: "$" + this.formatearNumeroConComas(totalPago.toFixed(2)) || "N/A", fontSize: 5, alignment: "right", bold: true },
                  { text: "$" + this.formatearNumeroConComas(totalCapital.toFixed(2)) || "N/A", fontSize: 5, alignment: "right", bold: true },
                  { text: "$" + this.formatearNumeroConComas(totalInteres.toFixed(2)) || "N/A", fontSize: 5, alignment: "right", bold: true },
                  { text: "$" + this.formatearNumeroConComas(totalIva.toFixed(2)) || "N/A", fontSize: 5, alignment: "right", bold: true },
                  { text: "$" + this.formatearNumeroConComas(tablaEstadoCuenta?.saldo_vencido) || "N/A", fontSize: 5, alignment: "right", bold: true },
                  { text: "", fontSize: 7 },
                  { text: "$" + this.formatearNumeroConComas(totalMoratorioVencido.toFixed(2)) || "N/A", fontSize: 5, alignment: "right", bold: true },
                  { text: "$" + this.formatearNumeroConComas(lastSaldoTotal.toFixed(2)) || "N/A", fontSize: 5, alignment: "right", bold: true }
                ]
              ]
            },
            alignment: "center"
          },
          {
            layout: "noBorders",
            table: {
              widths: ["*", "auto"],
              body: [
                [
                  { text: "" },
                  {
                    table: {
                      widths: [110, 80],
                      body: [
                        [
                          { text: "Total de saldo vencido:", bold: true, alignment: "left", fontSize: 7, fillColor: "#D3D3D3" },
                          { text: "$" + this.formatearNumeroConComas(tablaEstadoCuenta?.saldo_vencido), alignment: "right", fontSize: 5 }
                        ],
                        [
                          { text: "Total de saldo vigente:", bold: true, alignment: "left", fontSize: 7, fillColor: "#D3D3D3" },
                          { text: "$" + this.formatearNumeroConComas(tablaEstadoCuenta?.saldo_vigente), alignment: "right", fontSize: 5 }
                        ]
                      ]
                    }
                  }
                ]
              ]
            },
            margin: [0, 20, 0, 0]
          },
          yield this.tableTitles("5", "RELACI\xD3N DE ABONOS"),
          {
            table: {
              widths: [18, 165, "*", 165],
              body: [
                [
                  {
                    text: "No.",
                    fillColor: "#D3D3D3",
                    bold: true,
                    fontSize: 7
                  },
                  {
                    text: "Pago",
                    fillColor: "#D3D3D3",
                    bold: true,
                    fontSize: 7
                  },
                  {
                    text: "Fecha",
                    fillColor: "#D3D3D3",
                    bold: true,
                    fontSize: 7
                  },
                  {
                    text: "Monto del abono",
                    fillColor: "#D3D3D3",
                    bold: true,
                    fontSize: 7
                  }
                ],
                ...abonos.map((abono, index) => [
                  { text: (index + 1).toString(), fontSize: 7, alignment: "right" },
                  // This is the first field that counts the rows
                  { text: abono.id.toString(), fontSize: 7, alignment: "right" },
                  { text: this.utilsC.fechaFormateada(abono.fecha), fontSize: 7, alignment: "right" },
                  { text: `$${this.formatearNumeroConComas(abono.monto)}`, fontSize: 7, alignment: "right" }
                ]),
                [
                  { text: "Total:", bold: true, fontSize: 6, alignment: "right" },
                  { text: "", fontSize: 7 },
                  // "Pago" column
                  { text: "", fontSize: 7 },
                  // "Fecha" column
                  {
                    text: abonos.reduce((sum, abono) => sum + abono.monto, 0) === 0 ? "SIN ABONOS" : `$${this.formatearNumeroConComas(abonos.reduce((sum, abono) => sum + abono.monto, 0))}`,
                    bold: true,
                    fontSize: 7,
                    alignment: "right"
                  }
                ]
              ]
            }
          },
          {
            layout: "noBorders",
            table: {
              widths: ["*", "auto"],
              body: [
                [
                  { text: "" },
                  {
                    table: {
                      widths: [110, 80],
                      body: [
                        [
                          { text: "Total de abonos:", bold: true, alignment: "left", fontSize: 7, fillColor: "#D3D3D3" },
                          {
                            text: totalMonto === 0 ? "SIN ABONOS" : `$${this.formatearNumeroConComas(totalMonto)}`,
                            alignment: "right",
                            fontSize: 7
                          }
                        ]
                      ]
                    }
                  }
                ]
              ]
            },
            margin: [0, 20, 0, 0]
          }
        ],
        footer: (currentPage, pageCount) => {
          return {
            text: `P\xE1gina ${currentPage} de ${pageCount}`,
            alignment: "right",
            margin: [0, 20, 40, 0],
            fontSize: 10
          };
        }
      };
      pdfMake.createPdf(generatedDocument).open();
    });
  }
};
_estadoCuenta.\u0275fac = function estadoCuenta_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _estadoCuenta)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_estadoCuenta.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _estadoCuenta, factory: _estadoCuenta.\u0275fac, providedIn: "any" });
var estadoCuenta = _estadoCuenta;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(estadoCuenta, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

export {
  estadoCuenta
};
//# sourceMappingURL=chunk-L6WZXWMU.js.map
