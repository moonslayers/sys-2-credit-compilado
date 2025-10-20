import {
  ChronixPDFservice
} from "./chunk-LROCG2JY.js";
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

// src/app/services/documentosLegales/contratos/contrato_notificaciones.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
pdfMake.addVirtualFileSystem(pdfFonts);
var _contratoNotificaciones = class _contratoNotificaciones {
  constructor(utils, utilsC, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.chronixPDF = chronixPDF;
  }
  generarFechaRecibido() {
    const fecha = /* @__PURE__ */ new Date();
    const dia = fecha.getDate().toString();
    const mes = fecha.toLocaleDateString("es-MX", { month: "long", timeZone: "America/Tijuana" }).toUpperCase();
    const a\u00F1o = fecha.getFullYear();
    return `A ${dia} DE ${mes} DEL ${a\u00F1o}`;
  }
  generarFechaSello(fecha) {
    fecha = new Date(fecha);
    fecha = /* @__PURE__ */ new Date(fecha.toISOString().substring(0, 10) + "T17:00:00Z");
    const dia = fecha.getDate().toString();
    const mes = fecha.toLocaleDateString("es-MX", { month: "short", timeZone: "America/Tijuana" }).toUpperCase();
    const a\u00F1o = fecha.getFullYear();
    return `${dia} ${mes} ${a\u00F1o}`;
  }
  generarNumeroOficio(numeroFolio, fecha) {
    fecha = new Date(fecha);
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = fecha.toLocaleDateString("es-MX", { month: "short", timeZone: "America/Tijuana" }).replace(".", "").toUpperCase();
    const a\u00F1o = fecha.getFullYear();
    return `SEI/DF/${numeroFolio}/${dia}${mes}/${a\u00F1o}`;
  }
  generarNotificacion(creditoParam, folios) {
    return __async(this, null, function* () {
      const headerLogo = yield this.chronixPDF.generateHeader(["assets/logo_baja_california.png"], [130], [150]);
      const backgroundLogo = yield this.utilsC.backgroundLogo("assets/logo-con-sello-despachado.png");
      const documentContent = [];
      for (let i = 0; i < creditoParam.length; i++) {
        const credito = creditoParam[i];
        const folioData = folios[i];
        const fecha = new Intl.DateTimeFormat("es-MX", {
          dateStyle: "full",
          timeZone: "America/Tijuana"
        }).format(/* @__PURE__ */ new Date(folioData.fecha.substring(0, 10) + "T17:00:00Z")).replace(",", "");
        const numeroOficio = this.generarNumeroOficio(folioData.folio, folioData.fecha), estadoCuenta = credito.estado_cuenta, nombre = this.utils.nombreClienteFromCredito(credito), folio = credito.folio?.toUpperCase(), localidad = credito.datos_persona_fisica?.datos_personales?.localidad.toUpperCase() ?? credito.datos_personas_morales?.localidad.toUpperCase(), domicilioParticular = this.utils.domicilioFromDatosModel(credito.datos_persona_fisica?.datos_personales ?? credito.datos_personas_morales?.representante_legal), domicilioFiscal = this.utils.domicilioFromDatosModel(credito.datos_persona_fisica?.negocios ?? credito.datos_personas_morales), liquidarSinMoratorios = this.utilsC.formatearNumeroConComas(estadoCuenta?.total_a_liquidar), interesMoratorio = this.utilsC.formatearNumeroConComas(estadoCuenta?.interes_moratorio), fechaApertura = this.utilsC.fechaAletras(estadoCuenta?.fecha_inicio), recibe = "A __ DE __ DEL 202_";
        documentContent.push(
          {
            layout: "noBorders",
            table: {
              widths: [150, "*"],
              body: [
                [
                  __spreadValues({}, headerLogo),
                  {
                    table: {
                      widths: [100, 150],
                      body: [
                        [
                          { text: "DEPENDENCIA", bold: true, border: [true, true, false, false] },
                          {
                            text: "SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N DEL ESTADO DE BAJA CALIFORNIA",
                            alignment: "right",
                            border: [false, true, true, false]
                          }
                        ],
                        [
                          { text: "SECCI\xD3N", bold: true, border: [true, false, false, false] },
                          {
                            text: "DIRECCI\xD3N DE FINANCIAMIENTO",
                            alignment: "right",
                            border: [false, false, true, false]
                          }
                        ],
                        [
                          { text: "N\xDAMERO DE OFICIO", bold: true, border: [true, false, false, true] },
                          {
                            text: numeroOficio,
                            alignment: "right",
                            border: [false, false, true, true]
                          }
                        ]
                      ]
                    },
                    margin: [80, 0, 0, 0],
                    fontSize: 9
                  }
                ],
                [
                  {
                    text: "\u201C2025, A\xF1o del Turismo sostenible como impulsor del bienestar social y progreso\u201D",
                    bold: true,
                    fontSize: 9,
                    alignment: "left"
                  },
                  {
                    text: [
                      { text: "Asunto: ", bold: true },
                      "Requerimiento de pago\n",
                      `Mexicali, Baja California, a ${fecha}`
                    ],
                    fontSize: 10,
                    alignment: "right"
                    //margin: [50, 0, 0, 0]
                  }
                ]
              ]
            },
            margin: [0, 0, 0, 30]
          },
          //this.chronixPDF.generateTitle('CONVENIO DE PAGO PERSONA FISICA', '#7B001C', ['Ensenada, Baja California, <FECHA DE INICIO CONVENIO>']),
          // Introduccion
          {
            text: [nombre],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: [`DOMICILIO FISCAL: ${domicilioFiscal}`],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: [`DOMICILIO PARTICULAR: ${domicilioParticular}`],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: [`LOCALIDAD: ${localidad}`],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: "P r e s e n t e.",
            margin: [0, 15, 0, 15]
          },
          {
            text: [
              "\nAntecediendo un cordial saludo, informo que a la fecha de este oficio nuestro sistema indica  que usted presenta un adeudo de ",
              { text: "$ " + liquidarSinMoratorios, bold: true },
              " y se encuentra generando ",
              { text: "INTERESES MORATORIOS", bold: true },
              " por la cantidad de ",
              { text: "$ " + interesMoratorio, bold: true },
              ", originado en el contrato con folio ",
              { text: folio, bold: true },
              ", celebrado en el ",
              { text: fechaApertura, bold: true },
              "."
            ],
            alignment: "justify",
            fontSize: 11
          },
          {
            text: [
              "\nDebido a que se encuentra incumpliendo con el contrato de cr\xE9dito que suscribi\xF3 con el ",
              { text: "FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA", bold: true },
              " seg\xFAn lo estipula su contrato en la ",
              { text: "\u201CVENCIMIENTO ANTICIPADO\u201D", bold: true },
              ". ",
              { text: "\u201CSi se presenta sin mediar justificaci\xF3n, un retraso de tres o m\xE1s meses en los pagos de su cr\xE9dito, de acuerdo con los plazos y montos estipulados en la tabla de amortizaci\xF3n\u201D.", italics: true }
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: "\nLe pedimos de manera urgente comunicarse a los tel\xE9fonos 686-5682906 y 686-5683120 a la Coordinaci\xF3n de Cobranza, en un plazo m\xE1ximo de 3 d\xEDas h\xE1biles a partir de la recepci\xF3n de este requerimiento.",
            alignment: "justify",
            fontSize: 10
          },
          {
            text: "\nDe hacer caso omiso, se le apercibe que se proceder\xE1 de manera inmediata a realizar las acciones legales necesarias para exigir el pago total de su adeudo, incluyendo gastos de ejecuci\xF3n intereses moratorios, as\xED como boletinado a bur\xF3 de cr\xE9dito federal.",
            alignment: "justify",
            fontSize: 10
          },
          { text: "Sin otro particular de momento, quedo a  sus \xF3rdenes.", alignment: "left", margin: [0, 15, 0, 0], fontSize: 11 },
          {
            layout: "noBorders",
            table: {
              widths: ["*", 200],
              body: [
                [
                  {
                    table: {
                      widths: [130],
                      body: [
                        [
                          { text: "RECIBE:", bold: true, border: [true, true, true, false] }
                        ],
                        [
                          { text: recibe, border: [true, false, true, true] }
                        ]
                      ]
                    },
                    //margin: [50, 0, 0, 0],
                    fontSize: 9
                  },
                  {
                    text: [
                      "Firma de recibido:\n\n\n\n\n",
                      "________________________________________"
                    ],
                    alignment: "center"
                  }
                ]
              ]
            },
            //margin: [50, 0, 0, 0],
            fontSize: 9,
            margin: [0, 15, 0, 15]
          },
          {
            text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ",
            alignment: "center",
            bold: true,
            fontSize: 10
          },
          {
            text: `DIRECTOR DE FINANCIAMIENTO`,
            alignment: "center",
            fontSize: 10
          },
          {
            columns: [
              {
                width: "*",
                // O usa un valor fijo si prefieres controlar ancho
                stack: [
                  {
                    text: "C.c.p. C.P. Adriana Sofia Cornejo Porras.- Coordinadora Administrativa de la Direcci\xF3n de Financiamiento. Pte.",
                    fontSize: 8,
                    margin: [0, 0, 0, 2]
                    // pequeño margen inferior entre líneas
                  },
                  {
                    text: "C.c.p. Lic. Norma Gabriela Garc\xEDa Soltero.- Coordinadora de Cobranza de la Direcci\xF3n de Financiamiento. Pte.",
                    fontSize: 8,
                    margin: [0, 0, 0, 2]
                  },
                  {
                    text: "C.c.p. Lic. Dalia Iris Mabel Godoy Tapia.- Coordinador Jur\xEDdico de la Direcci\xF3n de Financiamiento. Pte.",
                    fontSize: 8,
                    margin: [0, 0, 0, 2]
                  },
                  {
                    text: "C.c.p. Archivo",
                    fontSize: 8,
                    margin: [0, 0, 0, 0]
                    // última línea, sin margen abajo
                  }
                ]
              },
              {
                text: this.generarFechaSello(folioData.fecha),
                alignment: "right",
                style: "sello",
                margin: [0, 25, 0, 0]
                // ← ¡Margin top de 20! Así se eleva la fecha
              }
            ]
          },
          {
            text: ``,
            alignment: "center",
            fontSize: 10,
            margin: [0, 0, 0, 0]
          },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 500, y2: 0, lineWidth: 2, lineColor: "#53152b" }], margin: [0, 15, 0, 10], alignment: "center" },
          { text: "SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N\n", bold: true, alignment: "center", fontSize: 8 },
          { text: "Calzada Independencia No 994, Edificio del Poder Ejecutivo, CP 21000, Centro C\xEDvico, Mexicali B.C. Tel (686) 558 1048", alignment: "center", fontSize: 8 },
          { text: " 'Fideicomiso para el Desarrollo Econ\xF3mico de Baja California, Centro Comercial La Plazita, Justo Sierra y Honduras #337, Col. Cuauht\xE9moc, CP 21200, Mexicali, B.C.\n", alignment: "center", fontSize: 8 },
          { text: "Tel (686) 568 3120", alignment: "center", fontSize: 8, margin: [0, 0, 0, 40] }
        );
      }
      const generatedDocument = {
        pageMargins: [50, 40, 50, 10],
        background: (currentPage, pageSize) => [
          {
            image: backgroundLogo.image,
            width: 650,
            opacity: 0.8,
            absolutePosition: {
              x: (pageSize.width - 650) / 2,
              y: (pageSize.height - 500) / 2
            }
          }
        ],
        content: documentContent,
        styles: {
          sello: {
            fontSize: 13,
            bold: true,
            color: "#FF0000"
          }
        }
      };
      pdfMake.createPdf(generatedDocument).open();
    });
  }
};
_contratoNotificaciones.\u0275fac = function contratoNotificaciones_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _contratoNotificaciones)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(ChronixPDFservice));
};
_contratoNotificaciones.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _contratoNotificaciones, factory: _contratoNotificaciones.\u0275fac, providedIn: "any" });
var contratoNotificaciones = _contratoNotificaciones;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(contratoNotificaciones, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: ChronixPDFservice }], null);
})();

export {
  contratoNotificaciones
};
//# sourceMappingURL=chunk-EZXCAMML.js.map
