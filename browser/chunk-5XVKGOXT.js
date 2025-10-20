import {
  ChronixPDFservice
} from "./chunk-LROCG2JY.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  require_jszip_min
} from "./chunk-E5ZUYL3D.js";
import {
  require_FileSaver_min
} from "./chunk-SDTK5VY4.js";
import {
  HeaderPdfService,
  require_customParseFormat
} from "./chunk-K6WRKREK.js";
import {
  require_dayjs_min
} from "./chunk-NWCMIO4X.js";
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
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/services/documentosLegales/contratos/machote_de_Carta_de_instruccion.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
var import_file_saver = __toESM(require_FileSaver_min());
var import_jszip = __toESM(require_jszip_min());
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
pdfMake.addVirtualFileSystem(pdfFonts);
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.locale("es");
var CUENTAS = [
  {
    programa: "EMPRENDE EMPRESARIAL",
    cuenta: "EMPRENDE",
    numero: 6288117882,
    parecido: 0
  },
  {
    programa: "EMPRENDE TRADICIONAL",
    cuenta: "EMPRENDE",
    numero: 6288117882,
    parecido: 0
  },
  {
    programa: "TU IDEA - TU NEGOCIO",
    cuenta: "PET",
    numero: 6259834721,
    parecido: 0
  },
  {
    programa: "REACTIVATE Y DESPEGA",
    cuenta: "EMPRENDEDOR",
    numero: 6288118237,
    parecido: 0
  },
  {
    programa: "CINCUENTA Y MAS",
    cuenta: "FOMENTO DIFUSION",
    numero: 6288117908,
    parecido: 0
  }
];
var _ContratoMachoteCartaInstruccionesService = class _ContratoMachoteCartaInstruccionesService {
  constructor(util, utils2, headers, creditoController, chronix) {
    this.util = util;
    this.utils2 = utils2;
    this.headers = headers;
    this.creditoController = creditoController;
    this.chronix = chronix;
    this.cuentasFideicomiso = CUENTAS;
    this.style = {
      tableHead: {
        margin: [0, 5, 0, 15]
      },
      cabeceraText: {
        fontSize: 12,
        bold: true,
        color: "#000000"
        // margin: [10, 0, 0, 0],
      },
      headerOrange: {
        fontSize: 12,
        bold: true,
        color: "#df8718"
        // margin: [10, 0, 0, 0],
      },
      headerDireccion: {
        fontSize: 10,
        color: "#000000"
      },
      headerFolio: {
        fontSize: 14,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff",
        alignment: "center"
      },
      textFolio: {
        fontSize: 14,
        bold: true,
        alignment: "center"
      },
      header: {
        fontSize: 12,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff"
      },
      firma: {
        fontSize: 14,
        alignment: "center"
      },
      th: {
        fontSize: 10,
        bold: true,
        alignment: "center",
        fillColor: "#2f4a8d",
        color: "white"
      },
      te: {
        fontSize: 9
      },
      footer: {
        fontSize: 9,
        bold: true,
        color: "#2f4a8d"
      }
    };
  }
  obtenerCuenta(productoFinanciero) {
    this.refrescarCuentas();
    this.calcularParecidos(productoFinanciero);
    this.ordenarCuentas();
    return this.cuentasFideicomiso[0];
  }
  refrescarCuentas() {
    this.cuentasFideicomiso.forEach((cuenta) => cuenta.parecido = 0);
  }
  calcularParecidos(value) {
    this.cuentasFideicomiso.forEach((cuenta) => {
      cuenta.parecido = this.utils2.calcularPuntuacionSimilitud(value, cuenta.programa);
    });
  }
  ordenarCuentas() {
    this.cuentasFideicomiso.sort((a, b) => b.parecido - a.parecido);
  }
  formatDecimals(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  formatearNumeroConComas(valor) {
    const numero = Number(valor);
    if (isNaN(numero))
      return String(valor);
    const [entero, decimales] = numero.toFixed(2).split(".");
    const enteroConComas = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${enteroConComas}.${decimales}`;
  }
  generateAndDownloadMultiplePDFs(creditos, pdfDefinitions) {
    return __async(this, null, function* () {
      const zip = new import_jszip.default();
      for (let i = 0; i < pdfDefinitions.length; i++) {
        const pdf = pdfMake.createPdf(pdfDefinitions[i]);
        const pdfBlob = yield this.getPdfBlob(pdfDefinitions[i]);
        zip.file(`carta_instruccion_FBC-${creditos[i].id}.pdf`, pdfBlob);
      }
      const zipBlob = yield zip.generateAsync({ type: "blob" });
      (0, import_file_saver.saveAs)(zipBlob, "cartas.zip");
    });
  }
  getPdfBlob(pdfDef) {
    return new Promise((resolve) => {
      pdfMake.createPdf(pdfDef).getBlob((result) => resolve(result));
    });
  }
  multiplesMachoteCartasInstrucciones(creditos, showFirma = false) {
    return __async(this, null, function* () {
      const docDefinitions = [];
      for (const credito of creditos) {
        docDefinitions.push(yield this.generateDocDefinitionPdfMake(credito, showFirma));
      }
      yield this.generateAndDownloadMultiplePDFs(creditos, docDefinitions);
    });
  }
  machoteCartaInstrucciones(creditoParam, showFirma = false) {
    return __async(this, null, function* () {
      if (!creditoParam)
        return;
      const credito = yield this.creditoController.find(creditoParam.id, [
        "datosPersonales",
        "sesiones",
        "datosPersonales.ciudades",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonaFisica.datosPersonales",
        "datosPersonasMorales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.ciudades"
      ]);
      const defDoc = yield this.generateDocDefinitionPdfMake(credito, showFirma);
      pdfMake.createPdf(defDoc).open();
    });
  }
  conditionalSignature() {
    return;
  }
  getConditionalBackgroundImage(imageSignature, pageSize, showImage) {
    if (!showImage || !imageSignature)
      return [];
    return [
      {
        image: imageSignature,
        width: 320,
        absolutePosition: {
          x: (pageSize.width - 300) / 2,
          y: pageSize.height - 290
        },
        opacity: 1
      }
    ];
  }
  generateDocDefinitionPdfMake(credito, showFirma = false) {
    return __async(this, null, function* () {
      if (!credito)
        return {};
      const cuenta = this.obtenerCuenta(credito.productos_financieros.nombre);
      console.log(cuenta);
      const monto = credito.monto_autorizado * (1 - 0.015) - credito.monto_autorizado * 0.015 * 0.16;
      const year = (0, import_dayjs.default)(credito?.created_at).year();
      const idCarta = credito?.datos_personas_morales?.id ?? credito?.datos_persona_fisica?.id;
      const data = {
        clave: `FBC-C`,
        instruction_no: `FBC-C-${credito?.id.toString().padStart(4, "0")}-${idCarta?.toString().padStart(4, "0")}-${year}`,
        //id_carta
        sesion: `${credito?.sesiones?.sesion}`.toUpperCase() || "",
        fecha_sesion: ((0, import_dayjs.default)(credito?.sesiones?.fecha).format("DD") + " de " + (0, import_dayjs.default)(credito?.sesiones?.fecha).format("MMMM") + " del " + (0, import_dayjs.default)(credito?.sesiones?.fecha).format("YYYY")).toUpperCase(),
        credito_id: credito?.id,
        monto,
        folio: `C-${credito?.id}-${year}`,
        //id_carta
        acreditado: this.utils2.nombreClienteFromCredito(credito).toUpperCase() || "",
        banco: credito?.banco?.toUpperCase() || "",
        cuenta: credito?.numero_cuenta || "",
        clabe: credito?.clabe_interbancaria || "",
        cuenta_fiduciaria: credito?.productos_financieros?.nombre || ""
      };
      const montoCentavos = Math.round((monto - Math.floor(monto)) * 100);
      const utcDate = /* @__PURE__ */ new Date();
      const date = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1e3);
      const dia = date.toLocaleDateString("es", {
        day: "2-digit"
      });
      const mes = date.toLocaleDateString("es", {
        month: "long"
      });
      const anio = date.toLocaleDateString("es", {
        year: "numeric"
      });
      const mainHeader = yield this.headers.machoteCartaInstrucciones_header("assets/carta_instruccion2.png", "assets/carta_instruccion1.png");
      const imageSignature = yield this.util.getBase64ImageFromURL3("assets/signature.png");
      const renderSignature = showFirma;
      if (showFirma) {
        console.info("MOSTRANDO FIRMA");
      }
      let atenTopMargin = 0;
      let atenBotMargin = 0;
      if (renderSignature) {
        atenTopMargin = 30;
        atenBotMargin = 60;
      } else {
        atenTopMargin = 30;
        atenBotMargin = 10;
      }
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [65, 5, 65, 15],
        background: (currentPage, pageSize) => {
          return this.getConditionalBackgroundImage(imageSignature, pageSize, renderSignature);
        },
        content: [
          __spreadValues({}, mainHeader),
          {
            table: {
              widths: ["*", 105, 100],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2",
                    border: [false, false, false, false]
                  },
                  {
                    text: [
                      { text: "SECCI\xD3N", bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: `FONDOS BC ${anio}`,
                    alignment: "right",
                    style: "reg_der"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2",
                    border: [false, false, false, false]
                  },
                  {
                    text: [
                      { text: "CLAVE", bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: `${data.clave}`,
                    alignment: "right",
                    style: "reg_der"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2",
                    border: [false, false, false, false]
                  },
                  {
                    text: [
                      { text: "INSTRUCCI\xD3N NO.", bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: `${data.instruction_no}`,
                    alignment: "right",
                    style: "reg_der"
                  }
                ]
              ]
            }
          },
          {
            text: [
              { text: `Mexicali, B.C a ${dia} de ${mes} del ${anio}`, bold: true, fontSize: 11 }
            ],
            style: "header1",
            marginTop: 9,
            marginLeft: 9,
            marginBottom: 9,
            alignment: "right"
          },
          {
            text: [
              { text: "HSBC M\xC9XICO S.A.", bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          {
            text: [
              { text: "INSTITUCI\xD3N DE BANCA M\xDALTIPLE", bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          {
            text: [
              { text: "GRUPO FINANCIERO HSBC", bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          {
            text: [
              { text: "DIVISI\xD3N FIDUCIARIA", bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          {
            text: [
              { text: "No. DE FIDEICOMISO: 53260", bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          "\n",
          {
            text: [
              "En apego a los acuerdos establecidos por el Comit\xE9 T\xE9cnico del Fideicomiso para el Desarrollo Econ\xF3mico de Baja California, en la ",
              { text: `${data.sesion}, `, bold: true },
              "celebrada el ",
              { text: `${data.fecha_sesion}, `, bold: true },
              "me permito solicitar a usted, se liberen recursos de la cuenta No. ",
              { text: `${cuenta.numero}, denominada ${cuenta.cuenta}  `, bold: true },
              "y proceder a realizar 1 transferencia electr\xF3nica por un monto de ",
              { text: `${this.util.numeroAdinero(data.monto)} (${this.util.NumeroALetras(data.monto)} ${this.util.obtenerCentavosRedondeados(data.monto).toString().padStart(2, "0")}/100 MN) `, bold: true },
              "para el pago de ",
              { text: "CR\xC9DITO ", bold: true },
              "del programa ",
              { text: credito?.productos_financieros?.nombre.toUpperCase(), bold: true },
              " con folio autorizado ",
              { text: `${data.folio} `, bold: true },
              "a ",
              { text: `${data.acreditado} `, bold: true },
              "Dicha transferencia se realizar\xE1 considerando los siguientes datos:"
            ],
            alignment: "justify",
            style: "headerNot2",
            lineHeight: 1.2,
            fontSize: 10
          },
          "\n",
          {
            text: [
              { text: `BENEFICIARIO: ${data.acreditado}`, bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          {
            text: [
              { text: `BANCO:              ${data.banco}`, bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          {
            text: [
              { text: `CUENTA:            ${data.cuenta}`, bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          {
            text: [
              { text: `CLABE:               ${data.clabe}`, bold: true, fontSize: 11 }
            ],
            style: "header1",
            alignment: "left",
            lineHeight: 1.2
          },
          {
            text: "\nSin otro particular, permanecemos atentos y a sus \xF3rdenes.",
            style: "headerNot2",
            fontSize: 10
          },
          { text: "ATENTAMENTE", alignment: "center", fontSize: 12, bold: true, margin: [0, atenTopMargin, 0, atenBotMargin] },
          /*
          {
            image: imageSignature,
            alignment: 'center',
            width: 320,
            margin: [0, 50, 0, 0]
          },*/
          { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", alignment: "center", bold: true, fontSize: 12, margin: [0, 10, 0, 10] },
          { text: "SECRETARIO EJECUTIVO DEL FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO", alignment: "center", bold: true, fontSize: 11 },
          { text: "DE BAJA CALIFORNIA (FONDOS BC)", alignment: "center", bold: true, fontSize: 11 },
          { text: "SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N", alignment: "center", bold: true, fontSize: 11 },
          { text: "GOBIERNO DEL ESTADO DE BAJA CALIFORNIA", alignment: "center", bold: true, fontSize: 11 },
          /*
          {
            layout: 'noBorders',
            table: {
              heights: [1, 1, 1, 1, 1, 1],
              widths: ['*', 400, '*'],
              body: [
                [
                  {
                    text: '',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: [
                      { text: '\n' },
                      { text: '\n' },
                      { text: 'ATENTAMENTE', bold: true },
                    ],
                    alignment: 'center',
                    border: [false, true, false, false],
                  },
                  {
                    text: '',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {},
                  {
                    image: imageSignature,
                    alignment: 'center',
                    width: 320
                  },
                  {}
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `LIC. ALFONSO CHÁVEZ PÉREZ`,
                    alignment: 'center',
                    marginBottom:5,
                    marginTop:5,
                    style: 'header1',
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `SECRETARIO EJECUTIVO DEL FIDEICOMISO PARA EL DESARROLLO ECONÓMICO`,
                    alignment: 'center',
                    style: 'header2',
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `DE BAJA CALIFORNIA (FONDOS BC)`,
                    alignment: 'center',
                    style: 'header2',
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `SECRETARÍA DE ECONOMÍA E INNOVACIÓN`,
                    alignment: 'center',
                    style: 'header2',
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `GOBIERNO DEL ESTADO DE BAJA CALIFORNIA`,
                    alignment: 'center',
                    style: 'header2',
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
              ],
            },
          },*/
          "\n",
          "\n",
          "\n",
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: [400, "*", 10],
              body: [
                [
                  {
                    text: "C.C.P. Adriana Sof\xEDa Cornejo Porras \u2013 Coordinadora administrativa \u2013Fondos BC",
                    alignment: "left",
                    style: "body1"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ]
              ]
            }
          }
        ],
        styles: __spreadProps(__spreadValues({}, this.style), {
          headerCliente: {
            fontSize: 10,
            bold: true,
            color: "#000000",
            fillColor: "#A9A9A9"
          },
          headerTotal: {
            color: "#2c3e50",
            fontSize: 16,
            bold: true
          },
          headerNot4: {
            fontSize: 12,
            bold: false
          },
          bodyRemark: {
            fontSize: 10,
            decoration: "underline"
          },
          body1: {
            fontSize: 8,
            alignment: "justify",
            bold: false
          },
          firmas: {
            fontSize: 8,
            alignment: "justify",
            bold: false
          },
          email: {
            fontSize: 9,
            alignment: "justify",
            bold: false,
            color: "#1a0dab",
            decoration: "underline"
          },
          gasto: {
            fontSize: 10,
            alignment: "justify",
            bold: false,
            color: "#FF0000"
          },
          body2: {
            fontSize: 10,
            alignment: "center",
            bold: false
          },
          header1: {
            fontSize: 12,
            alignment: "center",
            lineHeight: 0.9,
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
          },
          interlineado: {
            lineHeight: 0.8
          },
          headerNot5: {
            fontSize: 12,
            bold: true
          },
          normalText: {
            fontSize: 9
          },
          subheader: {
            fontSize: 9,
            bold: true,
            alignment: "center",
            fillColor: "#eeeeee"
            // margin: [0, 15, 0, 0],
          },
          registro: {
            fontSize: 6,
            bold: false,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          registro2: {
            fontSize: 6,
            bold: false,
            alignment: "right"
            // margin: [0, 15, 0, 0],
          },
          registro4: {
            fontSize: 4,
            bold: true,
            alignment: "right"
            // margin: [0, 15, 0, 0],
          },
          registro5: {
            fontSize: 4,
            bold: false,
            alignment: "left"
            // margin: [0, 15, 0, 0],
          },
          registro6: {
            fontSize: 6,
            bold: true,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          registrov2: {
            fontSize: 8,
            bold: true,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          reg_der: {
            fontSize: 9,
            bold: false,
            alignment: "right"
          }
        })
      };
      return defDoc;
    });
  }
};
_ContratoMachoteCartaInstruccionesService.\u0275fac = function ContratoMachoteCartaInstruccionesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratoMachoteCartaInstruccionesService)(\u0275\u0275inject(UtilsService2), \u0275\u0275inject(UtilsService), \u0275\u0275inject(HeaderPdfService), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice));
};
_ContratoMachoteCartaInstruccionesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratoMachoteCartaInstruccionesService, factory: _ContratoMachoteCartaInstruccionesService.\u0275fac, providedIn: "any" });
var ContratoMachoteCartaInstruccionesService = _ContratoMachoteCartaInstruccionesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoMachoteCartaInstruccionesService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }, { type: UtilsService }, { type: HeaderPdfService }, { type: CreditoService }, { type: ChronixPDFservice }], null);
})();

export {
  ContratoMachoteCartaInstruccionesService
};
//# sourceMappingURL=chunk-5XVKGOXT.js.map
