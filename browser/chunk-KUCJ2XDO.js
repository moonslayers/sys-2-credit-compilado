import {
  CotizadorService
} from "./chunk-DJKNR32H.js";
import {
  ChronixPDFservice
} from "./chunk-LROCG2JY.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
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
  ApiServiceService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
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

// src/app/services/documentosLegales/contratos/pagare.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
pdfMake.addVirtualFileSystem(pdfFonts);
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.locale("es");
var _PagareService = class _PagareService {
  constructor(creditoController, util, utils2, headers, api, dialog, cotizador) {
    this.creditoController = creditoController;
    this.util = util;
    this.utils2 = utils2;
    this.headers = headers;
    this.api = api;
    this.dialog = dialog;
    this.cotizador = cotizador;
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
  getRepresentanteLegalText(credito) {
    if (!credito.datos_persona_fisica?.datos_personales) {
      return { text: "Representante legal de la empresa" };
    }
    return null;
  }
  datosFirmaAcreditado(credito) {
    if (credito.datos_persona_fisica === null) {
      return [
        {
          text: this.utils2.nombreClienteFromDatosPersonales(credito.datos_personas_morales?.representante_legal),
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 5]
        },
        {
          text: "REPRESENTANTE LEGAL DE LA EMPRESA",
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 5]
        },
        {
          text: credito.datos_personas_morales?.razon_social.toUpperCase(),
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 5]
        },
        {
          text: this.util.domicilioFromDatosModel(credito.datos_personas_morales),
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 5]
        },
        {
          text: "TEL. " + (credito.datos_personas_morales?.telefonos?.at(0)?.numero ?? "N/A"),
          bold: true,
          alignment: "center"
        }
      ];
    }
    if (credito.datos_personas_morales === null) {
      const telefonosCasa = this.util.getTelefonosCasa(credito.datos_persona_fisica?.telefonos_personales ?? []);
      const telefonosOficina = this.util.getTelefonosOficina(credito.datos_persona_fisica?.telefonos_personales ?? []);
      const telefonosCelular = this.util.getTelefonosCelular(credito.datos_persona_fisica?.telefonos_personales ?? []);
      const telefono = telefonosCasa || telefonosOficina || telefonosCelular;
      return [
        {
          text: this.utils2.nombreClienteFromDatosPersonales(credito.datos_persona_fisica.datos_personales),
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 5]
        },
        {
          text: this.util.domicilioFromDatosModel(credito.datos_persona_fisica.datos_personales),
          bold: true,
          alignment: "center",
          margin: [0, 0, 0, 5]
        },
        {
          text: "TEL. " + (telefono ?? "N/A"),
          bold: true,
          alignment: "center"
        }
      ];
    }
  }
  renderRazonSocial(credito) {
    const razonSocial = credito.datos_personas_morales?.razon_social?.toUpperCase();
    if (!razonSocial)
      return { text: "" };
    return {
      text: [`REPRESENTANTE LEGAL DE LA EMPRESA 
'${razonSocial}'`],
      alignment: "center",
      fontSize: 10,
      margin: [0, 10, 0, 10]
    };
  }
  getCentavosFromCantidad(value) {
    const num = Number(value);
    if (isNaN(num))
      return "00/100 MN";
    const decimalPart = Math.round(num % 1 * 100);
    const padded = decimalPart.toString().padStart(2, "0");
    return `${padded}/100 MN`;
  }
  /*
      renderRazonSocial(credito: any) {
        const razonSocial = credito.datos_personas_morales?.razon_social?.toUpperCase();
  
        if (!razonSocial) return { text: this.util.domicilioFromDatosModel2(credito.datos_persona_fisica.datos_personales), alignment: 'center', fontSize: 10, margin: [0, 10, 0, 10] };
  
        return {
          text: [
            `REPRESENTANTE LEGAL DE LA EMPRESA \n'${razonSocial}'`,
            '\n',
            this.util.domicilioFromDatosModel2(credito.datos_personas_morales)
          ],
          alignment: 'center',
          fontSize: 10,
          margin: [0, 10, 0, 10]
        };
      }*/
  pagare(creditoModel, mode = "no_save", forzar_reemplazo = false, nota = "", fechaPagare = void 0, fechaConvenio, convenio, pagosResponse) {
    return __async(this, null, function* () {
      let creditoId = 0;
      if (typeof creditoModel == "object") {
        creditoId = creditoModel.id;
      } else {
        creditoId = creditoModel;
      }
      const credito = yield this.creditoController.find(creditoId, [
        "datosPersonales.telefonosPersonales",
        "datosPersonales.ciudades",
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.ciudades",
        "datosPersonaFisica.negocios.ciudades.estados",
        "inversionesProgramas",
        "productosFinancieros.plazos",
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.representanteLegal",
        "estadoCuenta",
        "abonos",
        "sesiones"
      ]);
      if (!credito) {
        console.error("Credito no encontrado");
        return;
      }
      console.log(credito);
      let plazo_mensual = 0;
      let tasa_porcentual = 4.33;
      if (convenio?.plazo) {
        plazo_mensual = convenio.plazo;
      }
      const plazo = credito.productos_financieros?.plazos?.find((plazo2) => plazo2.plazo_meses === credito.inversiones_programas.plazo_solicitado_meses);
      if (!plazo_mensual && plazo) {
        plazo_mensual = plazo.plazo_meses;
        tasa_porcentual = plazo.tasa_porcentual;
      }
      if (!plazo && !convenio) {
        this.dialog.show({
          title: "El plazo solicitado es incorrecto",
          body: "El plazo solicitado no coincide con ningun ofrecio en el producto financiero",
          tipo: "danger"
        });
        return;
      }
      if (!fechaPagare) {
        fechaPagare = this.util.fechaTentativaPagare();
      }
      if (typeof fechaPagare == "string") {
        if (fechaPagare.length == 10) {
          fechaPagare = /* @__PURE__ */ new Date(fechaPagare + "T17:00:00Z");
        } else {
          fechaPagare = new Date(fechaPagare);
        }
      }
      if (!fechaConvenio) {
        fechaConvenio = this.util.fechaTentativaConvenio();
      }
      if (typeof fechaConvenio == "string") {
        if (fechaConvenio.length == 10) {
          fechaConvenio = /* @__PURE__ */ new Date(fechaConvenio + "T17:00:00Z");
        } else {
          fechaConvenio = new Date(fechaConvenio);
        }
      }
      const date = fechaPagare;
      const estadoCuenta = credito.estado_cuenta;
      let monto_pagare = 0;
      if (!convenio) {
        const data = pagosResponse ? pagosResponse : this.cotizador.pagosResponseFromCredito(credito);
        const total = data?.totales;
        monto_pagare = total?.pago_fijo ?? estadoCuenta?.monto_total_mas_intereses ?? 0;
      }
      console.log(estadoCuenta);
      const persona_moral = credito?.datos_personas_morales;
      const persona_fisica = credito?.datos_persona_fisica;
      const aval = credito.datos_personales;
      if (convenio) {
        monto_pagare = +convenio.capital + +(convenio.interes_ordinario ?? 0) + +(convenio.iva_interes_ordinario ?? 0);
      }
      console.log("MONTO NPAGARE:", monto_pagare, estadoCuenta?.total_a_liquidar);
      let domicilio = "ERROR";
      let domFiscal = "ERROR";
      let personaFlag = 0;
      let telefonoFlag = "";
      let nombrePersona = "";
      if (persona_fisica) {
        domicilio = this.util.domicilioFromDatosModel2(persona_fisica.datos_personales);
        domFiscal = this.util.domicilioFromDatosModel2(persona_fisica.negocios);
        personaFlag = 1;
        const datosPersonalesNuevo = credito.datos_persona_fisica?.datos_personales;
        const telefonoCasa = datosPersonalesNuevo.telefonos_personales?.find((telefono) => telefono.tipo == "CASA");
        const telefonoOficina = datosPersonalesNuevo.telefonos_personales?.find((telefono) => telefono.tipo == "OFICINA");
        const telefonoCelular = datosPersonalesNuevo.telefonos_personales?.find((telefono) => telefono.tipo == "CELULAR");
        nombrePersona = persona_fisica?.datos_personales?.nombre + " " + (persona_fisica?.datos_personales?.apellido_paterno ?? "") + " " + (persona_fisica?.datos_personales?.apellido_materno ?? "");
      } else if (persona_moral) {
        domicilio = this.util.domicilioFromDatosModel2(persona_moral);
        domFiscal = domicilio;
        personaFlag = 0;
        nombrePersona = persona_moral?.representante_legal?.nombre + " " + persona_moral?.representante_legal?.apellido_paterno + " " + persona_moral?.representante_legal?.apellido_materno;
      }
      const dia_pagare = (0, import_dayjs.default)(date).format("D");
      const mes_pagare = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(date).toUpperCase();
      const anio_pagare = new Intl.DateTimeFormat("es-ES", {
        year: "numeric"
      }).format(date);
      const dia_convenio = (0, import_dayjs.default)(fechaConvenio).format("D");
      const mes_convenio = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(fechaConvenio).toUpperCase();
      const anio_convenio = new Intl.DateTimeFormat("es-ES", {
        year: "numeric"
      }).format(fechaConvenio);
      console.log("Fecha de pagare: ", fechaPagare);
      console.log("Fecha de convenio: ", fechaConvenio);
      const dataPDF = {
        montoPesos: this.util.numeroAdinero(monto_pagare),
        montoLetas: this.util.NumeroALetrasConCentavos(monto_pagare),
        domicilio,
        domicilio_aval: this.util.domicilioFromDatosModel2(aval),
        telefono: `TEL\xC9FONO ${(persona_moral?.telefonos?.[0] ?? persona_fisica?.datos_personales?.telefonos_personales?.[0])?.numero ?? "S/N"}`,
        telefonoAval: `TEL\xC9FONO ${aval?.telefonos_personales?.[0]?.numero ?? "S/N"}`,
        nombrePersonaMoral: persona_moral?.representante_legal?.nombre + " " + persona_moral?.representante_legal?.apellido_paterno + " " + persona_moral?.representante_legal?.apellido_materno,
        nombrePersonaFisica: persona_fisica?.datos_personales?.nombre + " " + persona_fisica?.datos_personales?.apellido_paterno + " " + persona_fisica?.datos_personales?.apellido_materno
      };
      credito.datos_persona_fisica?.datos_personales;
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [28, 8, 28, 0],
        content: [
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: [20, "*", 20],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [{ text: "PAGAR\xC9", bold: true }],
                    style: "headeer1",
                    alignment: "center"
                  },
                  {
                    text: ``,
                    alignment: "right",
                    style: "headerNot2"
                  }
                ]
              ]
            }
          },
          "\n",
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: [20, "*", 20],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      "Debo y pagar\xE9 incondicionalmente a la orden de ",
                      {
                        text: '"HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, en su car\xE1cter de Fiduciario del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta)", ',
                        bold: true
                      },
                      "a cantidad de ",
                      {
                        text: `${dataPDF.montoPesos} ( ${dataPDF.montoLetas} M.N.), `,
                        bold: true
                      },
                      "el d\xEDa ",
                      {
                        text: `${dia_pagare} DE ${mes_pagare} DEL ${anio_pagare}.`,
                        bold: true
                      }
                    ],
                    style: "body1"
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
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: [20, "*", 20],
              body: [
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      "La suscripci\xF3n del presente t\xEDtulo de cr\xE9dito genera un inter\xE9s ordinario del ",
                      {
                        text: `${tasa_porcentual.toFixed(2)}% (${this.util.NumeroALetrasPorcentaje(tasa_porcentual)}  POR CIENTO) `,
                        bold: true
                      },
                      "anual m\xE1s IVA, sobre el saldo insoluto. Asimismo, en caso de demora en el cumplimiento de la obligaci\xF3n contenida en el presente documento, se generar\xE1 un inter\xE9s moratorio del 24% (veinticuatro por ciento) anual m\xE1s IVA.",
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "body1"
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      "Para todos los efectos legales relacionados con el presente documento, el suscriptor se\xF1ala como domicilio convencional sito en ",
                      { text: dataPDF.domicilio.toUpperCase(), bold: true },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "body1"
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                ...convenio ? [] : [
                  [
                    {
                      text: "",
                      alignment: "center",
                      style: "headerNot2"
                    },
                    {
                      text: [
                        `Los avales se obligan solidariamente con el suscriptor y en favor del beneficiario, respecto de todas las obligaciones contenidas en el presente pagar\xE9; asimismo, para todos los efectos legales relacionados con el presente documento se\xF1alan como domicilio convencional el ubicado en `,
                        { text: `${dataPDF.domicilio_aval}`, bold: true },
                        { text: "\n" },
                        { text: "\n" }
                      ],
                      alignment: "justify",
                      style: "body1"
                    },
                    {
                      text: "",
                      alignment: "center",
                      style: "headerNot2"
                    }
                  ]
                ],
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      `En caso de que el beneficiario ejerza cobranza judicial, el suscriptor ${convenio ? "le concede" : "y el aval le conceden"} la potestad someter la controversia al tribunal del lugar estipulado para el pago o al del domicilio del deudor.`
                    ],
                    alignment: "justify",
                    style: "body1"
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
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    /*
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',*/
                    text: [{ text: "EL SUSCRIPTOR", bold: true }],
                    alignment: "center",
                    style: "headerNot2",
                    fontSize: 10
                  }
                ],
                [
                  {
                    text: [
                      //{ text: `MEXICALI BAJA CALIFORNIA ${dia_pagare} DE ${mes_pagare} DEL ${anio_pagare}`, bold: true },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2",
                    border: [false, true, false, false],
                    fontSize: 10
                  }
                ],
                [
                  {
                    text: "___________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: `${nombrePersona}`.toUpperCase(),
                    alignment: "center",
                    fontSize: 10,
                    margin: [0, 5, 0, 0]
                  }
                ],
                [this.renderRazonSocial(credito)],
                [
                  {
                    text: convenio ? domicilio : domFiscal,
                    // dataPDF.domicilio,
                    alignment: "center",
                    fontSize: 10
                  }
                ],
                [
                  {
                    text: dataPDF.telefono,
                    alignment: "center",
                    fontSize: 10
                  }
                ],
                ...convenio ? [] : [
                  [
                    {
                      text: [{ text: "EL AVAL", bold: true }],
                      alignment: "center",
                      style: "headerNot2",
                      fontSize: 10,
                      margin: [0, 25, 0, 0]
                    }
                  ],
                  [
                    {
                      text: [{ text: "\n" }, { text: "\n" }, { text: "\n" }],
                      alignment: "center",
                      style: "headerNot2",
                      border: [false, true, false, false],
                      fontSize: 10
                    }
                  ],
                  [
                    {
                      text: "___________________________________________",
                      alignment: "center",
                      style: "headerNot2"
                    }
                  ],
                  [
                    {
                      text: this.utils2.nombreClienteFromDatosPersonales(aval).toUpperCase(),
                      alignment: "center",
                      fontSize: 10,
                      margin: [0, 5, 0, 0]
                    }
                  ],
                  [
                    {
                      text: dataPDF.domicilio_aval,
                      alignment: "center",
                      fontSize: 10
                    }
                  ],
                  [
                    {
                      text: dataPDF.telefonoAval,
                      alignment: "center",
                      fontSize: 10
                    }
                  ]
                ]
              ]
            }
          },
          {},
          "\n",
          {
            text: `MEXICALI BAJA CALIFORNIA ${dia_convenio} DE ${mes_convenio} DEL ${anio_convenio}`,
            bold: true,
            alignment: "center",
            fontSize: 10
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
            fontSize: 12,
            decoration: "underline"
          },
          body1: {
            fontSize: 10,
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
      pdfMake.createPdf(defDoc).open();
    });
  }
};
_PagareService.\u0275fac = function PagareService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagareService)(\u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(UtilsService), \u0275\u0275inject(HeaderPdfService), \u0275\u0275inject(ApiServiceService), \u0275\u0275inject(VanillaDialogService), \u0275\u0275inject(CotizadorService));
};
_PagareService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagareService, factory: _PagareService.\u0275fac, providedIn: "any" });
var PagareService = _PagareService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagareService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: CreditoService }, { type: UtilsService2 }, { type: UtilsService }, { type: HeaderPdfService }, { type: ApiServiceService }, { type: VanillaDialogService }, { type: CotizadorService }], null);
})();

// src/app/services/documentosLegales/contratos/tabla_amortizacion.service.ts
var pdfMake2 = __toESM(require_pdfmake());
var pdfFonts2 = __toESM(require_vfs_fonts());
var import_dayjs2 = __toESM(require_dayjs_min());
var import_customParseFormat2 = __toESM(require_customParseFormat());
pdfMake2.addVirtualFileSystem(pdfFonts2);
import_dayjs2.default.extend(import_customParseFormat2.default);
import_dayjs2.default.locale("es");
var _TablaAmortizacionService = class _TablaAmortizacionService {
  constructor(util, utils2, headers, creditoController, api, chronix, cotizador) {
    this.util = util;
    this.utils2 = utils2;
    this.headers = headers;
    this.creditoController = creditoController;
    this.api = api;
    this.chronix = chronix;
    this.cotizador = cotizador;
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
      },
      headerTitle: {
        fontSize: 10,
        bold: true,
        color: "#000000"
      },
      headerText: {
        fontSize: 9,
        // bold: true,
        color: "#000000"
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
      header1: {
        fontSize: 18,
        bold: true,
        alignment: "center"
      },
      body1: {
        fontSize: 8,
        alignment: "justify"
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
    this.formatCurrency = (value) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value);
    };
  }
  redondearDecimales(num, margen = 5e-3) {
    num = +num;
    const decimal = num - Math.floor(num);
    if (decimal >= 1 - margen) {
      return Math.ceil(num);
    }
    if (decimal < margen) {
      return Math.floor(num);
    }
    return num;
  }
  /**
   *
   * @param {Credito} credito - needs relations productosFinancieros.plazos, inversionesProgramas,
   * @returns prints pdf in new tab
   */
  tabla_amortizacion_pdf(credito, pagosResponse = void 0, fechaPrimerAmortizacion = void 0, convenio) {
    return __async(this, null, function* () {
      console.log(credito, pagosResponse);
      let creditoId = 0;
      if (typeof credito === "number") {
        creditoId = credito;
      }
      if (typeof credito === "object") {
        creditoId = credito.id;
      }
      credito = yield this.creditoController.find(creditoId, ["productosFinancieros.plazos", "datosPersonasMorales.representanteLegal", "datosPersonaFisica.datosPersonales.etnias", "sesiones", "inversionesProgramas.inversionTipos", "convenios.conveniosPagos"], false);
      if (credito === void 0) {
        console.error("credito undefined en tabla de amortizaciones pdf");
        return;
      }
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      const convenioActivo = convenio ?? this.util.convenioActivo(credito);
      if (convenio && !convenio.id) {
        credito.convenios?.push(convenio);
      }
      const plazo_solicitado = credito.productos_financieros?.plazos?.find((plazo) => plazo.plazo_meses == credito.inversiones_programas?.plazo_solicitado_meses);
      if (!fechaPrimerAmortizacion) {
        fechaPrimerAmortizacion = this.util.fechaTentativaConvenio().toISOString();
      }
      if (!pagosResponse) {
        const plazo_id = plazo_solicitado.id;
        let fecha_inicio = fechaPrimerAmortizacion;
        if (typeof fecha_inicio == "string" && fecha_inicio.length == 10) {
          fecha_inicio += "T17:00:00Z";
        }
        console.log(fecha_inicio);
        if (!pagosResponse) {
          console.log("jalando pasos data");
          pagosResponse = this.cotizador.pagosResponseFromCredito(credito);
        }
      }
      console.log("PAGOS RESPONSE", pagosResponse);
      pagosResponse.lista_pagos = pagosResponse.lista_pagos.filter((p) => p.pago_fijo);
      const { lista_pagos, totales } = pagosResponse;
      console.info("imprimiendo amortizaciones");
      const persona_moral = credito?.datos_personas_morales;
      const persona_fisica = credito?.datos_persona_fisica;
      let saldoInsolutoAcumulado = totales.abono_a_capital;
      const amortizaciones = lista_pagos.map((pago, index) => {
        saldoInsolutoAcumulado -= pago.abono_a_capital;
        return {
          id: index + 1,
          fecha: this.util.fechaFormateada(pago.fecha),
          monto_total_credito: index === 0 ? this.formatCurrency(totales.abono_a_capital) : "",
          saldo_insolito: this.formatCurrency(saldoInsolutoAcumulado + pago.abono_a_capital),
          amortizacion_capital: this.formatCurrency(pago.abono_a_capital),
          amortizacion_interes: this.formatCurrency(pago.interes),
          iva: this.formatCurrency(pago.iva),
          gasto_judicial: this.formatCurrency(pago.gastos_judiciales ?? 0),
          pago_total: this.formatCurrency(pago.pago_fijo),
          saldo: this.formatCurrency(pago.saldo_insoluto < 0 ? 0 : pago.saldo_insoluto)
        };
      });
      amortizaciones.at(-1).saldo = "$0.00";
      const producto_financiero_name = credito?.productos_financieros?.nombre.toUpperCase() || "";
      const loanDetails = {
        program: creditoOriginal?.productos_financieros?.nombre ?? producto_financiero_name,
        borrower: this.utils2.nombreClienteFromCredito(credito).toUpperCase(),
        creditNumber: credito?.id,
        paymentReference: `${credito.referencia_bancaria}`.toUpperCase(),
        totalAmount: `${this.formatCurrency(pagosResponse.totales.abono_a_capital)}`,
        totalAmountWithInteres: `${this.formatCurrency(pagosResponse.totales.pago_fijo)}`,
        interestRate: `${(plazo_solicitado?.tasa_porcentual ?? 0).toFixed(2)}%`,
        term: `${convenioActivo?.plazo ?? credito?.inversiones_programas?.plazo_solicitado_meses} MESES`,
        tipo_convenio: convenioActivo?.tipo_convenio
      };
      console.log(loanDetails);
      console.log(amortizaciones);
      const borderColor = ["#A9A9A9", "#A9A9A9", "#A9A9A9", "#A9A9A9"];
      const prorrateoBody = [];
      let row = 0;
      amortizaciones.forEach((p, index) => {
        prorrateoBody[row] = [
          {
            text: index + 1,
            style: "numberText",
            borderColor
          },
          {
            text: p.fecha,
            style: "normalText",
            borderColor
          },
          {
            text: p.saldo_insolito,
            style: "normalText",
            borderColor
          },
          {
            text: p.amortizacion_capital,
            style: "normalText",
            borderColor
          },
          {
            text: p.amortizacion_interes,
            style: "normalText",
            borderColor
          },
          {
            text: p.iva,
            style: "normalText",
            borderColor
          },
          {
            text: p.pago_total,
            style: "normalText",
            borderColor
          },
          ...convenio?.gastos_judiciales ? [{
            text: p.gasto_judicial,
            style: "normalText",
            borderColor
          }] : [],
          {
            text: p.saldo,
            style: "normalText",
            borderColor
          }
        ];
        row++;
      });
      const header = yield this.util.getBase64ImageFromURL3("assets/fondos_bc_logo.png");
      const mainHeader = yield this.headers.mainHeader("assets/fondos_bc_logo.png", loanDetails);
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [30, 20, 20, 30],
        content: [
          {
            table: {
              widths: ["auto", "*"],
              body: [
                [
                  {
                    image: header,
                    width: 250,
                    rowSpan: 1
                  },
                  {
                    stack: [
                      {
                        text: [
                          { text: `PROGRAMA: ${loanDetails.program}`, style: "headerTitle" }
                        ],
                        style: "headerText"
                      },
                      { text: "", style: "headerText" },
                      {
                        text: [
                          { text: "Nombre del acreditado: ", style: "headerTitle" },
                          loanDetails.borrower
                        ],
                        style: "headerText"
                      },
                      { text: "", style: "headerText" },
                      {
                        text: [
                          { text: "Cr\xE9dito: ", style: "headerTitle" },
                          loanDetails.creditNumber
                        ],
                        style: "headerText"
                      },
                      { text: "", style: "headerText" },
                      {
                        text: [
                          { text: "Referencia de Pago: ", style: "headerTitle" },
                          loanDetails.paymentReference
                        ],
                        style: "headerText"
                      },
                      { text: "", style: "headerText" },
                      {
                        text: [
                          { text: "Monto total capital: ", style: "headerTitle" },
                          loanDetails.totalAmount
                        ],
                        style: "headerText"
                      },
                      { text: "", style: "headerText" },
                      {
                        text: [
                          { text: "Monto total con inter\xE9s: ", style: "headerTitle" },
                          loanDetails.totalAmountWithInteres
                        ],
                        style: "headerText"
                      },
                      { text: "", style: "headerText" },
                      {
                        text: [
                          { text: "Tasa de inter\xE9s: ", style: "headerTitle" },
                          loanDetails.interestRate
                        ],
                        style: "headerText"
                      },
                      { text: "", style: "headerText" },
                      {
                        text: [
                          { text: "Plazo: ", style: "headerTitle" },
                          loanDetails.term
                        ],
                        style: "headerText"
                      },
                      ...convenioActivo ? [
                        {
                          text: [
                            { text: "Tipo de Convenio: ", style: "headerTitle" },
                            loanDetails.tipo_convenio
                          ],
                          style: "headerText"
                        }
                      ] : [],
                      { text: "", style: "headerText" }
                    ]
                  }
                ]
              ]
            },
            layout: "noBorders",
            margin: [0, 0, 0, 10]
          },
          {
            layout: "noBorders",
            table: {
              widths: [20, "*", 20],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [{ text: "TABLA DE AMORTIZACI\xD3N", bold: true }],
                    style: "header1"
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
              widths: [20, "*", 20],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "NOTA: ", bold: true },
                      "LA PRESENTE TABLA DE AMORTIZACI\xD3N TIENE UN ESTRICTO SENTIDO INFORMATIVO, A EFECTO QUE SIRVA COMO APOYO A EL ACREDITADO EN LA REALIZACI\xD3N DEL PAGO DE LAS AMORTIZACIONES DEL CR\xC9DITO, POR TANTO, LOS INTERESES MENSUALES A PAGAR PUEDEN TENER PEQUE\xD1AS VARIACIONES"
                    ],
                    style: "body1"
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
            table: {
              headerRows: 1,
              widths: [15, 70, "*", "*", "*", "*", "*", ...convenio?.gastos_judiciales ? ["*"] : [], "*"],
              body: [
                [
                  { text: "#", style: "headerTable", borderColor },
                  { text: "Fecha", style: "headerTable", borderColor },
                  { text: "Saldos Insolutos", style: "headerTable", borderColor },
                  { text: "Amortizaci\xF3n a C\xE1pital", style: "headerTable", borderColor },
                  { text: "Amortizaci\xF3n a Interes", style: "headerTable", borderColor },
                  { text: "IVA", style: "headerTable", borderColor },
                  { text: "Pago Total", style: "headerTable", borderColor },
                  ...convenio?.gastos_judiciales ? [{ text: "Gastos judiciales", style: "headerTable", borderColor }] : [],
                  { text: "Saldos", style: "headerTable", borderColor }
                ],
                [
                  {
                    text: "0",
                    borderColor,
                    style: "normalText"
                  },
                  {
                    text: "",
                    borderColor
                  },
                  {
                    text: loanDetails.totalAmount,
                    style: "normalText"
                  },
                  ...convenio?.gastos_judiciales ? [
                    { text: "", colSpan: 5, borderColor },
                    {},
                    {},
                    {},
                    {}
                  ] : [
                    { text: "", colSpan: 4, borderColor },
                    {},
                    {},
                    {}
                  ],
                  {
                    text: loanDetails.totalAmountWithInteres,
                    style: "normalText"
                  }
                ],
                ...prorrateoBody
              ],
              margin: [1, 15, 1, 10]
            }
          },
          {
            table: {
              headerRows: 1,
              widths: [15, 70, "*", "*", "*", "*", "*", ...convenio?.gastos_judiciales ? ["*"] : [], "*"],
              body: [
                [
                  {
                    text: "",
                    colSpan: 3,
                    borderColor
                  },
                  {},
                  {},
                  { text: `${this.formatCurrency(totales.abono_a_capital)}`, style: "numberText" },
                  { text: `${this.formatCurrency(totales.interes)}`, style: "numberText" },
                  { text: `${this.formatCurrency(totales.iva)}`, style: "numberText" },
                  { text: `${this.formatCurrency(totales.pago_fijo)}`, style: "numberText" },
                  ...convenio?.gastos_judiciales ? [{ text: `${this.formatCurrency(totales.gastos_judiciales ?? 0)}`, style: "normalText", borderColor }] : [],
                  {
                    text: "",
                    borderColor
                  }
                ]
              ],
              margin: [1, 15, 1, 10]
            }
          }
        ],
        styles: __spreadProps(__spreadValues({}, this.style), {
          headerCliente: {
            fontSize: 9,
            bold: true,
            color: "#000000",
            fillColor: "#A9A9A9"
          },
          headerTable: {
            fontSize: 9,
            bold: true,
            color: "#000000",
            fillColor: "#A9A9A9",
            alignment: "center"
          },
          normalText: {
            fontSize: 7,
            alignment: "right"
          },
          numberText: {
            fontSize: 7,
            alignment: "right"
          },
          subheader: {
            fontSize: 8,
            bold: true,
            alignment: "center",
            fillColor: "#eeeeee"
            // margin: [0, 15, 0, 0],
          },
          registro: {
            fontSize: 8,
            bold: false,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          }
        })
      };
      pdfMake2.createPdf(defDoc).open();
    });
  }
};
_TablaAmortizacionService.\u0275fac = function TablaAmortizacionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaAmortizacionService)(\u0275\u0275inject(UtilsService2), \u0275\u0275inject(UtilsService), \u0275\u0275inject(HeaderPdfService), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ApiServiceService), \u0275\u0275inject(ChronixPDFservice), \u0275\u0275inject(CotizadorService));
};
_TablaAmortizacionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TablaAmortizacionService, factory: _TablaAmortizacionService.\u0275fac, providedIn: "any" });
var TablaAmortizacionService = _TablaAmortizacionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaAmortizacionService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }, { type: UtilsService }, { type: HeaderPdfService }, { type: CreditoService }, { type: ApiServiceService }, { type: ChronixPDFservice }, { type: CotizadorService }], null);
})();

export {
  PagareService,
  TablaAmortizacionService
};
//# sourceMappingURL=chunk-KUCJ2XDO.js.map
