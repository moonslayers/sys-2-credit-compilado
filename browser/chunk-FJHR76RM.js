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
  SolicitudApoyoService
} from "./chunk-OBCD5SW4.js";
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

// src/app/services/documentosLegales/contratos/apoyos_carta_de_instruccion.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
var import_file_saver = __toESM(require_FileSaver_min());
var import_jszip = __toESM(require_jszip_min());
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
pdfMake.addVirtualFileSystem(pdfFonts);
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
  },
  {
    programa: "50 Y MAS",
    cuenta: "FOMENTO DIFUSION",
    numero: 6288117908,
    parecido: 0
  }
];
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.locale("es");
var _ApoyosCartaInstruccionesService = class _ApoyosCartaInstruccionesService {
  constructor(util, headers, solicitudApoyo, utils) {
    this.util = util;
    this.headers = headers;
    this.solicitudApoyo = solicitudApoyo;
    this.utils = utils;
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
    this.cuentasFideicomiso = CUENTAS;
  }
  obtenerCuenta(apoyo) {
    this.refrescarCuentas();
    this.calcularParecidos(apoyo);
    this.ordenarCuentas();
    return this.cuentasFideicomiso[0];
  }
  refrescarCuentas() {
    this.cuentasFideicomiso.forEach((cuenta) => cuenta.parecido = 0);
  }
  calcularParecidos(value) {
    this.cuentasFideicomiso.forEach((cuenta) => {
      cuenta.parecido = this.utils.calcularPuntuacionSimilitud(value, cuenta.programa);
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
  generateAndDownloadMultiplePDFs(pdfDefinitions) {
    return __async(this, null, function* () {
      const zip = new import_jszip.default();
      for (let i = 0; i < pdfDefinitions.length; i++) {
        const docDef = pdfDefinitions[i];
        const pdfBlob = yield this.getPdfBlob(docDef);
        zip.file(`carta_instruccion_${i + 1}_${docDef.docName}.pdf`, pdfBlob);
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
  multiplesMachoteCartasInstrucciones(apoyos) {
    return __async(this, null, function* () {
      const docDefinitions = [];
      for (const apoyo of apoyos) {
        const modalidadActual = this.solicitudApoyo.modalidadActual(apoyo);
        docDefinitions.push(yield this.machoteCartaInstrucciones(apoyo, modalidadActual?.solicitudes_apoyos_modalidades_cotizaciones, modalidadActual, true));
      }
      yield this.generateAndDownloadMultiplePDFs(docDefinitions);
    });
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
          y: pageSize.height - 285
        },
        opacity: 1
      }
    ];
  }
  machoteCartaInstrucciones(solicitudApoyo, cotizaciones, modalidadActual, returnDefDoc, showFirma) {
    return __async(this, null, function* () {
      if (!solicitudApoyo?.programas_apoyos)
        return;
      if (!solicitudApoyo)
        return;
      if (!cotizaciones) {
        console.error("NO COTIZACIONES", this.solicitudApoyo);
        return;
      }
      if (!Array.isArray(cotizaciones)) {
        cotizaciones = [cotizaciones];
      }
      if (!modalidadActual) {
        modalidadActual = this.solicitudApoyo.modalidadActual(solicitudApoyo);
      }
      const cotizacion = cotizaciones[0];
      const monto = cotizaciones.reduce((acc, cot) => acc + cot.monto, 0);
      const year = (0, import_dayjs.default)(solicitudApoyo.created_at).year();
      const proveedor = cotizaciones[0]?.apoyos_proveedores;
      const razonSocial = proveedor?.razon_social.toUpperCase();
      const cuenta = this.obtenerCuenta(solicitudApoyo.programas_apoyos.nombre.replace("50", "CINCUENTA"));
      if (!cuenta) {
        console.error("CUENTA NO ENCONTRADA");
        return;
      }
      const data = {
        clave: `FBC-A`,
        instruction_no: `FBC-A-${solicitudApoyo.id.toString().padStart(4, "0")}-${cotizacion.id.toString().padStart(4, "0")}-${year}`,
        //id_carta
        sesion: `${modalidadActual?.sesiones?.sesion.toUpperCase()}` || "",
        fecha_sesion: (0, import_dayjs.default)(modalidadActual?.sesiones?.fecha).format("DD") + " de " + (0, import_dayjs.default)(modalidadActual?.sesiones?.fecha).format("MMMM") + " del " + (0, import_dayjs.default)(modalidadActual?.sesiones?.fecha).format("YYYY"),
        credito_id: solicitudApoyo.id,
        monto: monto || 0,
        folio: `A-${solicitudApoyo.id}-${year}`,
        //id_carta
        programa: `${solicitudApoyo.programas_apoyos?.nombre.toUpperCase()}`,
        // razon: proveedor?.razon_social.toUpperCase() || '',
        banco: proveedor?.banco_nombre.toUpperCase() || "",
        cuenta: proveedor?.cuenta_bancaria.toUpperCase() || "",
        clabe: proveedor?.clabe_interbancaria.toUpperCase() || "",
        cuenta_fiduciaria: `${cuenta.numero} denominada ${cuenta.cuenta}`,
        referencia: proveedor?.referencia
        //Verificar nombre de programa de apoyo, si es 50 o mas es fomento
      };
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
      const renderSignature = !!showFirma;
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [20, 5, 20, 15],
        background: (currentPage, pageSize) => {
          return this.getConditionalBackgroundImage(imageSignature, pageSize, renderSignature);
        },
        docName: data.folio,
        content: [
          __spreadValues({}, mainHeader),
          "\n",
          {
            table: {
              widths: ["*", 110, 120],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
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
            },
            margin: [0, 0, 70, 0]
          },
          {
            text: [
              { text: `Mexicali, B.C a ${dia} de ${mes} del ${anio}`, bold: true }
            ],
            marginTop: 9,
            marginRight: 70,
            marginBottom: 9,
            alignment: "right"
          },
          {
            layout: "noBorders",
            table: {
              widths: [60, "*", 60],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    stack: [
                      { text: "HSBC M\xC9XICO S.A.", bold: true },
                      { text: "INSTITUCI\xD3N DE BANCA M\xDALTIPLE", bold: true },
                      { text: "GRUPO FINANCIERO HSBC", bold: true },
                      { text: "DIVISI\xD3N FIDUCIARIA", bold: true },
                      { text: "No. DE FIDEICOMISO: 53260", bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  }
                ]
              ]
            }
          },
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: [60, "*", 60],
              body: [
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      "En apego a los acuerdos establecidos por el Comit\xE9 T\xE9cnico del Fideicomiso para el Desarrollo Econ\xF3mico de Baja California, en la ",
                      { text: `${data.sesion}, `, bold: true },
                      "celebrada el ",
                      { text: `${data.fecha_sesion}, `, bold: true },
                      "me permito solicitar a usted, se liberen recursos de la cuenta No. ",
                      { text: `${data.cuenta_fiduciaria} `, bold: true },
                      "y proceder a realizar 1 transferencia electr\xF3nica por un monto de ",
                      { text: `${this.util.numeroAdinero(data.monto)} (${this.util.NumeroALetras(data.monto)} ${this.util.obtenerCentavosRedondeados(data.monto).toString().padStart(2, "0")}/100 MN) `, bold: true },
                      "para el pago de ",
                      { text: "APOYO ", bold: true },
                      "del programa ",
                      { text: data.programa, bold: true },
                      " con folio autorizado ",
                      { text: `${data.folio} `, bold: true },
                      "a ",
                      { text: `${this.utils.nombreClienteFromDatosPersonales(solicitudApoyo.datos_personales).toUpperCase()} `, bold: true },
                      "Dicha transferencia se realizar\xE1 considerando los siguientes datos:"
                    ],
                    alignment: "justify",
                    fontSize: 10
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ]
              ]
            }
          },
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: [60, "*", 60],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: `BENEFICIARIO: ${razonSocial}`, bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: `BANCO:              ${data.banco}`, bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: `CUENTA:            ${data.cuenta}`, bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: `CLABE:               ${data.clabe}`, bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  }
                ],
                ...data.referencia ? [[
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: `REFERENCIA:    ${data.referencia}`, bold: true }
                    ],
                    style: "header1",
                    alignment: "left"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  }
                ]] : [],
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: "Sin otro particular, permanecemos atentos y a sus \xF3rdenes.",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  }
                ]
              ]
            }
          },
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 300, "*"],
              body: [
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "ATENTAMENTE", bold: true },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "header1",
                    border: [false, true, false, false]
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    stack: [
                      `LIC. ALFONSO CH\xC1VEZ P\xC9REZ`,
                      `SECRETARIO EJECUTIVO DEL FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO`,
                      `DE BAJA CALIFORNIA (FONDOS BC)`,
                      `SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N`,
                      `GOBIERNO DEL ESTADO DE BAJA CALIFORNIA`
                    ],
                    alignment: "center",
                    style: "header1"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ]
              ]
            }
          },
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: [400, "*", 10],
              body: [
                [
                  {
                    text: "C.C.P. Adriana Sof\xEDa Cornejo Porras \u2013 Coordinadora de Contabilidad \u2013Fondos BC",
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
            },
            marginLeft: 70
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
            fontSize: 11,
            alignment: "center",
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
          },
          headerNot5: {
            fontSize: 10,
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
      if (returnDefDoc) {
        return defDoc;
      }
      pdfMake.createPdf(defDoc).open();
    });
  }
};
_ApoyosCartaInstruccionesService.\u0275fac = function ApoyosCartaInstruccionesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApoyosCartaInstruccionesService)(\u0275\u0275inject(UtilsService2), \u0275\u0275inject(HeaderPdfService), \u0275\u0275inject(SolicitudApoyoService), \u0275\u0275inject(UtilsService));
};
_ApoyosCartaInstruccionesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApoyosCartaInstruccionesService, factory: _ApoyosCartaInstruccionesService.\u0275fac, providedIn: "any" });
var ApoyosCartaInstruccionesService = _ApoyosCartaInstruccionesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApoyosCartaInstruccionesService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }, { type: HeaderPdfService }, { type: SolicitudApoyoService }, { type: UtilsService }], null);
})();

export {
  ApoyosCartaInstruccionesService
};
//# sourceMappingURL=chunk-FJHR76RM.js.map
