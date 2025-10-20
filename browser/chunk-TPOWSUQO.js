import {
  ChronixPDFservice
} from "./chunk-LROCG2JY.js";
import {
  CreditoService
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

// src/app/services/documentosLegales/contratos/contrato_credito_formato_transparencia.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
pdfMake.addVirtualFileSystem(pdfFonts);
var _formatoTransparencia = class _formatoTransparencia {
  constructor(utils, utilsC, creditoController, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.chronixPDF = chronixPDF;
    this.emptyCheckbox = (emptyCheckboxImageRoute = "assets/check_empty.png") => __async(this, null, function* () {
      const emptyCheckboxImage = yield this.utilsC.getBase64ImageFromURL3(`${emptyCheckboxImageRoute}`);
      console.log("SI entro la funcion checkempty");
      return {
        image: emptyCheckboxImage,
        alignment: "center",
        //  fit: [800, 20],
        width: 40
      };
    });
    this.nonEmptyCheckbox = (nonEmptyCheckboxImageRoute = "assets/check_non_empty.png") => __async(this, null, function* () {
      const nonEmptyCheckboxImage = yield this.utilsC.getBase64ImageFromURL3(`${nonEmptyCheckboxImageRoute}`);
      console.log("SI entro la funcion non check empty");
      return {
        image: nonEmptyCheckboxImage,
        alignment: "center",
        //  fit: [800, 20],
        width: 40
      };
    });
    this.backgroundLogo = (logoBC = "assets/BClogo.png") => __async(this, null, function* () {
      const logoBajaCaliforniaUnico = yield this.utilsC.getBase64ImageFromURL3(`${logoBC}`);
      return {
        image: logoBajaCaliforniaUnico,
        margin: [0, 0, 0, 10]
      };
    });
  }
  /**
   * Funcion para obtener el telefono del acreditante
   * @param {Credito} credito - Este es el credito que se recibe como parametro para obtener el telefono del acreditado
   * @returns {TelefonoPersonal | undefined}
   */
  checkPhone(credito) {
    const personaFisica = credito.datos_persona_fisica;
    const personaMoral = credito.datos_personas_morales;
    let telefonoPersFisic;
    let telefonoPersMoral;
    if (personaFisica?.datos_personales) {
      telefonoPersFisic = personaFisica.datos_personales.telefonos_personales?.[0];
      return telefonoPersFisic;
    }
    if (personaMoral) {
      telefonoPersMoral = personaMoral.representante_legal?.telefonos_personales?.[0];
      return telefonoPersMoral;
    }
    return void 0;
  }
  /**
   * Funcion para determinar si el banco es de HSBC o no. Si es, retorna caracteres que corresponden a los Checkbox estan activo o no
   * @param {Credito} credito - Parametro del credito para obtener el banco
   * @returns
   */
  checkBanco(credito) {
    let checkboxActive = "X";
    let checkboxUnactive = "";
    if (credito.banco?.toLowerCase() == "hsbc") {
      return { hsbc: checkboxActive, noHsbc: checkboxUnactive };
    }
    return { hsbc: checkboxUnactive, noHsbc: checkboxActive };
  }
  renderRazonSocial(credito) {
    const razonSocial = credito.datos_personas_morales?.razon_social?.toUpperCase();
    if (!razonSocial)
      return void 0;
    return {
      text: [
        `REPRESENTANTE LEGAL DE LA EMPRESA 
'${razonSocial}'`
      ],
      alignment: "center",
      fontSize: 12,
      bold: true,
      margin: [0, 10, 0, 10]
    };
  }
  /**
   * Function for generating the transparency format
   * @param creditoParam - The function can only recieve as parameter one credit
   * @returns
   */
  generarFormatoTransparencia(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "productosFinancieros",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.representanteLegal",
        "sucursales"
      ]);
      if (credito == void 0) {
        return;
      }
      const telefonoCasa = credito.datos_persona_fisica?.datos_personales?.telefonos_personales?.find((telefono2) => telefono2.tipo == "CASA");
      const telefonoOficina = credito.datos_persona_fisica?.datos_personales?.telefonos_personales?.find((telefono2) => telefono2.tipo == "OFICINA");
      const telefonoCelular = credito.datos_persona_fisica?.datos_personales?.telefonos_personales?.find((telefono2) => telefono2.tipo == "CELULAR");
      const telefono = telefonoCasa?.numero ?? telefonoOficina?.numero ?? telefonoCelular?.numero;
      const razonSocial = credito.datos_personas_morales?.razon_social.toUpperCase();
      const data = {
        programa: credito.productos_financieros?.nombre.toUpperCase(),
        nombreCuentahabiente: this.utils.nombreClienteFromCredito(credito).toUpperCase(),
        numeroCuenta: credito.numero_cuenta?.toUpperCase(),
        clabeInterbancaria: credito.clabe_interbancaria?.toUpperCase(),
        banco: credito.banco?.toUpperCase(),
        sucursal: credito.sucursales?.nombre.toUpperCase(),
        nombreAcreditado: credito.datos_persona_fisica ? this.utils.nombreClienteFromDatosPersonales(credito.datos_persona_fisica?.datos_personales).toUpperCase() : this.utils.nombreClienteFromDatosPersonales(credito.datos_personas_morales?.representante_legal).toUpperCase(),
        telefonoAcreditado: "TEL. " + (credito.datos_personas_morales?.telefonos?.at(0)?.numero ?? telefono),
        checkboxBanco: this.checkBanco(credito)
      };
      console.log(data.nombreAcreditado);
      const header = yield this.chronixPDF.generateHeader(["assets/carta_instruccion1.png"], [160], [190]);
      const eCheckbox = yield this.emptyCheckbox();
      const noneCheckbox = yield this.nonEmptyCheckbox();
      const backgroundLogo = yield this.backgroundLogo();
      const marginLeftRight = 80;
      const marginTop = 20;
      const marginBottom = 100;
      const color1 = "#6A1C32";
      const color2 = "#B17A45";
      const generatedDocument = {
        pageMargins: [marginLeftRight, marginTop, marginLeftRight, marginBottom],
        background: (currentPage, pageSize) => {
          return [];
        },
        content: [
          this.chronixPDF.generateTitle("FORMATO DE TRANSFERENCIA", "#7B001C"),
          {
            text: [
              "AUTORIZO A LA SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N POR MEDIO DEL (FIDECOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA) PARA QUE EL RECURSO PROVENIENTE DEL FINANCIAMIENTO DEL ",
              { text: data.programa, bold: true, decoration: "underline" },
              " ME SEA CUBIERTO MEDIANTE:"
            ],
            alignment: "justify",
            style: "parrafoInicial"
          },
          {
            layout: "noBorders",
            table: {
              body: [
                [
                  __spreadValues({
                    padding: [10, 5, 10, 5],
                    fontSize: 15
                  }, data.checkboxBanco.hsbc ? noneCheckbox : eCheckbox),
                  {
                    text: "TRANSFERENCIA HSBC",
                    style: "optionBox",
                    alignment: "center",
                    margin: [5, 5, 10, 2],
                    border: [true, true, true, true],
                    color: "#7B001C",
                    padding: [10, 5, 10, 5],
                    fontSize: 15
                  },
                  __spreadValues({
                    padding: [10, 5, 10, 5],
                    fontSize: 15
                  }, data.checkboxBanco.noHsbc ? noneCheckbox : eCheckbox),
                  {
                    text: `TRANSFERENCIA OTROS`,
                    style: "optionBox",
                    alignment: "center",
                    margin: [5, 5, 0, 2],
                    border: [true, true, true, true],
                    color: "#7B001C",
                    padding: [10, 5, 10, 5],
                    fontSize: 15
                  }
                ]
              ],
              margin: [0, 0, 0, 0]
            }
          },
          {
            text: `AS\xCD MISMO DECLARO QUE LA SIGUIENTE INFORMACI\xD3N ES CORRECTA, ANEXO ESTADO DE CUENTA BANCARIO A MI NOMBRE Y EN CASO DE QUE EXISTA ALG\xDAN ERROR, ES MI RESPONSABILIDAD.`,
            style: "declaracion",
            alignment: "justify",
            margin: [0, 40, 0, 10]
          },
          {
            table: {
              widths: ["*", "*"],
              body: [
                ["NOMBRE DE CUENTAHABIENTE:", { text: data.nombreCuentahabiente, bold: true }],
                ["N\xDAMERO DE CUENTA:", { text: data.numeroCuenta, bold: true }],
                ["CLABE INTERBANCARIA:", { text: data.clabeInterbancaria, bold: true }],
                ["BANCO:", { text: data.banco, bold: true }],
                ["SUCURSAL - NOMBRE Y N\xDAMERO:", { text: data.sucursal, bold: true }]
              ]
            },
            margin: [0, 10, 0, 10]
          },
          {
            canvas: [{ type: "line", x1: 95, y1: 0, x2: 345, y2: 0, lineWidth: 1 }],
            margin: [0, 100, 0, 5]
          },
          {
            text: "FIRMA DEL ACREDITADO",
            style: "firma",
            margin: [0, 0, 0, 10]
          },
          {
            text: data.nombreAcreditado,
            alignment: "center",
            fontSize: 12,
            bold: true
          },
          this.renderRazonSocial(credito),
          {
            text: data.telefonoAcreditado,
            alignment: "center",
            fontSize: 10
          }
        ],
        footer: {
          columns: [
            {
              text: `Fideicomiso para el Desarrollo Econ\xF3mico de Baja California
                    Centro comercial La Plazita II, Calzada Justo Sierra y Honduras, local 16, Col. Cuauht\xE9moc Sur,
                    Mexicali, B.C., M\xE9xico. C.P. 21200, Tel: (686) 568-29-06`,
              style: "footer",
              alignment: "center"
            }
          ],
          canvas: [
            {
              type: "line",
              // Draw the line
              x1: 0,
              // Start from the left of the page
              y1: 15,
              // Adjust the y-position for the footer (make sure it is above any text)
              x2: 595,
              // End at the right edge of an A4 page
              y2: 15,
              // Same y-position for a horizontal line
              lineWidth: 2,
              // Bold line
              lineColor: "#000000"
              // Black line color
            }
          ]
        },
        styles: {
          header: { fontSize: 18, bold: true, color: "#7B001C", margin: [0, 20, 0, 0] },
          subheader: { fontSize: 12, bold: true, color: "#7B001C" },
          title: { fontSize: 14, bold: true, margin: [0, 20, 0, 10] },
          parrafoInicial: { fontSize: 10, margin: [0, 20, 0, 40] },
          declaracion: { fontSize: 10 },
          optionBox: { fontSize: 10, bold: true },
          footer: { fontSize: 8, alignment: "center" },
          firma: { fontSize: 10, bold: true, alignment: "center" }
        }
      };
      pdfMake.createPdf(generatedDocument).open();
    });
  }
};
_formatoTransparencia.\u0275fac = function formatoTransparencia_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _formatoTransparencia)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice));
};
_formatoTransparencia.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _formatoTransparencia, factory: _formatoTransparencia.\u0275fac, providedIn: "any" });
var formatoTransparencia = _formatoTransparencia;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(formatoTransparencia, [{
    type: Injectable,
    args: [{
      providedIn: "any"
      // El servicio se compartira entre modulos, pero podria tener instancias separadas en cada uno
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_credito_carta_bajo_protesta.service.ts
var pdfMake2 = __toESM(require_pdfmake());
var pdfFonts2 = __toESM(require_vfs_fonts());
pdfMake2.addVirtualFileSystem(pdfFonts2);
var _cartaProtesta = class _cartaProtesta {
  constructor(utils, utilsC, creditoController, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.chronixPDF = chronixPDF;
    this.economiaLogo = (ecLog = "assets/carta_instruccion1.png") => __async(this, null, function* () {
      const econLogo = yield this.utilsC.getBase64ImageFromURL3(`${ecLog}`);
      return {
        style: "noBorders",
        table: {
          widths: ["*", 80, "*"],
          body: [
            [
              {
                image: econLogo,
                alignment: "center",
                width: "200"
              },
              {
                text: "",
                alignment: "center",
                width: "18"
              }
            ]
          ]
        },
        layout: "noBorders",
        margin: [0, 0, 0, 0]
      };
    });
  }
  /**
     * Function for rendering the background logo
     * @param logoBC
     * @returns
  
    backgroundLogo = async (logoBC: string = 'assets/BClogo.png') => {
        const logoBajaCaliforniaUnico = await this.utilsC.getBase64ImageFromURL3(`${logoBC}`);
  
        return {
            image: logoBajaCaliforniaUnico,
            margin: [0, 0, 0, 10]
        };
    }*/
  /**
   * Function for generating the pdf of the document
   * @param creditoParam
   * @returns
   */
  generarCartaProtesta(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonasMorales.representanteLegal.telefonosPersonales"
      ]);
      if (credito == void 0) {
        return;
      }
      const nombre = credito.datos_persona_fisica ? this.utils.nombreClienteFromDatosPersonales(credito.datos_persona_fisica?.datos_personales) : this.utils.nombreClienteFromDatosPersonales(credito.datos_personas_morales?.representante_legal);
      const backgroundLogo = yield this.utilsC.backgroundLogo("assets/BClogo.png");
      const color1 = "#6A1C32";
      const color2 = "#B17A45";
      const fecha = this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toLowerCase();
      const generatedDocument = {
        pageMargins: [80, 20, 80, 100],
        background: (currentPage, pageSize) => {
        },
        content: [
          // Logo at the header of the document
          //{ ...headerLogo },
          // Title and subtitle of the document
          /*
          {
            text: 'CARTA BAJO PROTESTA',
            alignment: "right",
            color: '#7B001C',
            fontSize: 14,
            bold: true,
            margin: [0, 20, 0, 0]
          },
          { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 300, y2: 0, lineWidth: 8, lineColor: '#7B001C' }], margin: [0, 10, 0, 30], alignment: "right" },*/
          this.chronixPDF.generateTitle("CARTA BAJO PROTESTA", "#7B001C"),
          // Fecha
          {
            text: [
              { text: "Fecha: ", bold: true },
              fecha
            ],
            alignment: "right",
            margin: [0, 0, 0, 40]
          },
          // Introduccion
          {
            text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California",
            margin: [0, 0, 0, 10]
          },
          {
            text: "P r e s e n t e.",
            margin: [0, 0, 0, 40]
          },
          // Parrafos de protesta
          {
            text: [
              "Por medio de la presente yo ",
              { text: nombre.toUpperCase(), alignment: "center", fontSize: 12, bold: true, decoration: "underline" },
              " declaro bajo ",
              { text: "PROTESTA DE DECIR LA VERDAD", bold: true },
              " que soy titular del negocio para el cual solicito financiamiento y f\xEDsicamente existe, que actualmente mi estado civil es ",
              { text: "SOLTERO.", bold: true }
            ],
            margin: [0, 0, 0, 10],
            alignment: "justify"
          },
          {
            text: "Autorizo al Fideicomiso para el Desarrollo Econ\xF3mico de Baja California, realizar investigaciones oportunas para obtener el cr\xE9dito del programa correspondiente.",
            alignment: "justify",
            margin: [0, 0, 0, 40]
          },
          // Firma
          {
            text: [
              { text: "Atentamente\n ", alignment: "center", margin: [0, 0, 0, 10] },
              { text: "Protesto lo necesario", alignment: "center", margin: [0, 0, 0, 80] }
            ]
          },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: nombre.toUpperCase(), alignment: "center", fontSize: 10, bold: true }
        ],
        footer: {
          columns: [
            {
              text: `Fideicomiso para el Desarrollo Econ\xF3mico de Baja California
Centro comercial La Plazita II, Calzada Justo Sierra y Honduras, local 16, Col. Cuauht\xE9moc Sur,
Mexicali, B.C., M\xE9xico. C.P. 21200, Tel: (686) 568-29-06`,
              style: "footer",
              alignment: "center",
              fontSize: 8
            }
          ]
        }
      };
      pdfMake2.createPdf(generatedDocument).open();
    });
  }
};
_cartaProtesta.\u0275fac = function cartaProtesta_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _cartaProtesta)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice));
};
_cartaProtesta.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _cartaProtesta, factory: _cartaProtesta.\u0275fac, providedIn: "any" });
var cartaProtesta = _cartaProtesta;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(cartaProtesta, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_credito_aviso_privacidad.service.ts
var pdfMake3 = __toESM(require_pdfmake());
var pdfFonts3 = __toESM(require_vfs_fonts());
pdfMake3.addVirtualFileSystem(pdfFonts3);
var _avisoPrivacidad = class _avisoPrivacidad {
  constructor(utils, utilsC, creditoController, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.chronixPDF = chronixPDF;
  }
  /**
     * Neccesary function for uploading images in Pdfmake
     * @param url
     * @returns
  
    async getBase64ImageFromURL3(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            let img = new Image();
            // img.setAttribute('crossOrigin', 'anonymous');
            img.crossOrigin = "anonymous";
  
            img.onload = () => {
                let canvas = document.createElement('canvas');
                canvas.width = img.width ;
                canvas.height = img.height - (img.height / 80);
                let ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0);
  
                let dataURL = canvas.toDataURL('image/png');
                resolve(dataURL);
            };
            img.src = url;
        });
    }*/
  /**
   * Function for rendering the logos of the header
   * @param logoBC - Baja california logo
   * @param logoEcon - Economia logo
   * @returns
   */
  /*
    economiaLogoLargo = async (logoBC: string = 'assets/logo_baja_california.png', logoEcon: string = 'assets/carta_instruccion1.png') => {
      const logoBajaCalifornia = await this.utilsC.getBase64ImageFromURL3(`${logoBC}`);
      const logoEconomia = await this.utilsC.getBase64ImageFromURL3(`${logoEcon}`);
  
      return {
        layout: "noBorders",
        table: {
          widths: [150, 130],
          body: [
            [
              {
                image: logoBajaCalifornia,
                alignment: 'center',
                width: "150"
              },
              {
                image: logoEconomia,
                alignment: 'center',
                width: "150"
              }
            ],
          ],
        },
      };
    };*/
  /**
     * Function for rendering the background logo of the documents
     * @param logoBC - Baja california logo. This one is only the image
     * @returns
  
    backgroundLogo = async (logoBC: string = 'assets/BClogo.png') => {
        const logoBajaCaliforniaUnico = await this.utilsC.getBase64ImageFromURL3(`${logoBC}`);
  
        return {
            image: logoBajaCaliforniaUnico,
            margin: [0, 0, 0, 10]
        };
    }*/
  buildRepresentanteLegalSection(credito) {
    const datos = credito.datos_personas_morales;
    if (!datos)
      return [];
    return [
      { text: "Representante legal de\n", bold: true, alignment: "center" },
      {
        text: [
          {
            text: datos.razon_social?.toUpperCase() || "",
            alignment: "center",
            fontSize: 12,
            bold: true
          }
        ],
        alignment: "center",
        margin: [0, 0, 0, 40]
      }
    ];
  }
  /**
   * Function for generating the document
   * @param creditoParam
   * @returns
   */
  generarAvisoPrivacidad(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonasMorales"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
      }
      const nombre = credito.datos_persona_fisica ? this.utils.nombreClienteFromDatosPersonales(credito.datos_persona_fisica?.datos_personales) : this.utils.nombreClienteFromDatosPersonales(credito.datos_personas_morales?.representante_legal);
      const headerLogoLargo = yield this.chronixPDF.generateHeader(["assets/logo_baja_california.png", "assets/carta_instruccion1.png"], [140, 130], [150, 150]);
      const backgroundLogo = yield this.utilsC.backgroundLogo("assets/BClogo.png");
      const generatedDocument = {
        pageMargins: [80, 20, 80, 100],
        background: (currentPage, pageSize) => {
          return {
            image: backgroundLogo.image,
            width: 500,
            // Adjust size as needed
            opacity: 0.1,
            // Optional: watermark effect
            absolutePosition: {
              x: (pageSize.width - 500) / 2,
              // Centers the image horizontally
              y: (pageSize.height - 500) / 2
              // Centers the image vertically
            }
          };
        },
        content: [
          // Logo at the header of the document
          //{ ...headerLogoLargo },
          /*
                  // Title and subtitle of the document
                  {
                    text: 'AVISO DE PRIVACIDAD SIMPLIFICADO',
                    alignment: "right",
                    color: '#7B001C',
                    fontSize: 14,
                    bold: true,
                    margin: [0, 20, 0, 5]
                  },
                  { text: 'Solicitud de credito', alignment: "right", color: '#7B001C' },
                  { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 300, y2: 0, lineWidth: 8, lineColor: '#7B001C' }], margin: [0, 10, 0, 30], alignment: "right" },*/
          this.chronixPDF.generateTitle("AVISO DE PRIVACIDAD SIMPLIFICADO", "#7B001C", ["Solicitud de cr\xE9dito"]),
          // Introduction paragraph
          {
            text: [
              "La",
              { text: "Secretar\xEDa de Econom\xEDa e Innovaci\xF3n (SEI)", bold: true },
              ", a trav\xE9s de su",
              { text: "Unidad de Transparencia", bold: true },
              ", con domicilio en ",
              { text: "Calzada Independencia No. 994, cuarto piso del Edificio del Poder Ejecutivo, Centro C\xEDvico y Comercial, Mexicali, Baja California, C.P. 21000", bold: true },
              ", es responsable del tratamiento, uso y protecci\xF3n de los datos personales que usted proporciona."
            ],
            alignment: "justify"
          },
          // Datos recabados
          { text: "Datos recabados", bold: true, alignment: "left", margin: [0, 10, 0, 10] },
          {
            text: "Tratamos datos de identificaci\xF3n, financieros, referencias y documentos necesarios para el cumplimiento de las finalidades descritas. La entrega de esta informaci\xF3n es obligatoria para procesar su solicitud.",
            alignment: "justify"
          },
          // FInalidades del tratamiento
          { text: "Finalidades del tratamiento", bold: true, alignment: "left", margin: [0, 10, 0, 10] },
          { text: "Sus datos personales ser\xE1n utilizados para:" },
          {
            ul: [
              [
                {
                  text: [
                    { text: "Finalidades principales: ", bold: true },
                    "Integrar su expediente, verificar su identidad y evaluar su capacidad de pago."
                  ]
                }
              ],
              [
                {
                  text: [
                    { text: "Finalidades secundarias: ", bold: true },
                    "Enviar informaci\xF3n sobre cursos o programas, realizar an\xE1lisis estad\xEDsticos, publicar informaci\xF3n en el padr\xF3n p\xFAblico, gestionar cobranza y reportar informaci\xF3n a sociedades de cr\xE9dito."
                  ]
                }
              ]
            ],
            alignment: "justify",
            margin: [0, 10, 0, 10]
          },
          { text: "*Si no desea que sus datos sean utilizados para finalidades secundarias, puede oponerse mediante los procedimientos establecidos." },
          // Tansferencia de datos
          { text: "Transferencia de datos", bold: true, alignment: "left", margin: [0, 10, 0, 10] },
          {
            text: "Sus datos podr\xE1n ser compartidos con las entidades responsables de la evaluaci\xF3n, autorizaci\xF3n y gesti\xF3n del financiamiento, en estricto cumplimiento de las disposiciones legales aplicables. Asimismo, podr\xE1n ser proporcionados a las autoridades competentes \xFAnicamente cuando exista un requerimiento formal, debidamente fundamentado y motivado conforme a la legislaci\xF3n vigente",
            alignment: "justify"
          },
          // Derechos ARCO
          { text: "Derechos ARCO", bold: true, alignment: "left", margin: [0, 10, 0, 10] },
          {
            text: [
              "Usted puede ejercer sus derechos de ",
              { text: "Acceso, Rectificaci\xF3n, Cancelaci\xF3n u Oposici\xF3n (ARCO)", bold: true },
              "comunic\xE1ndose con la Unidad de Transparencia:"
            ],
            alignment: "justify"
          },
          {
            ul: [
              [
                {
                  text: [
                    { text: "Mexicali:", bold: true },
                    " Calzada Independencia No. 994, tel\xE9fono ",
                    { text: "(686) 558-1000, ext. 1579.", bold: true }
                  ]
                }
              ],
              [
                {
                  text: [
                    { text: "Tijuana:", bold: true },
                    " Carretera Libre Tijuana-Tecate, Km. 25.6, tel\xE9fono ",
                    { text: "(664) 973-0424.", bold: true }
                  ]
                }
              ],
              [
                {
                  text: [
                    { text: "Correo:", bold: true },
                    " transparenciasei@baja.gob.mx."
                  ]
                }
              ]
            ],
            alignment: "justify",
            margin: [0, 10, 0, 10]
          },
          // Informacion adicional
          { text: "Informaci\xF3n adicional", bold: true, alignment: "left", margin: [0, 10, 0, 10] },
          {
            text: [
              "Este aviso es la versi\xF3n simplificada, para m\xE1s informaci\xF3n sobre el tratamiento de sus datos personales, puede consultar el ",
              { text: "Aviso de Privacidad Integral", bold: true },
              " en el siguiente enlace:"
            ],
            alignment: "justify"
          },
          { text: "http://wsextbc.ebajacalifornia.gob.mx/CdnBc/api/Imagenes/ObtenerImagenDeSistema?sistemaSolicitante=setBC/&nombreArchivo=FuenteOrigen/33/82520250109150834.pdf&descargar=false", margin: [0, 10, 0, 0] },
          // Autorizacion
          { text: "Autorizaci\xF3n", bold: true, alignment: "center", margin: [0, 10, 0, 10] },
          {
            text: "Autorizo el uso de mis datos personales para la finalidad principal",
            alignment: "center"
          },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          {
            text: [
              { text: nombre.toUpperCase(), alignment: "center", fontSize: 12, bold: true }
            ],
            alignment: "center",
            margin: [0, 0, 0, 10]
          },
          ...this.buildRepresentanteLegalSection(credito),
          {
            text: "Autorizo el uso de mis datos personales para las finalidades secundarias",
            alignment: "center"
          },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          {
            text: [
              { text: nombre.toUpperCase(), alignment: "center", fontSize: 12, bold: true }
            ],
            alignment: "center",
            margin: [0, 0, 0, 10]
          },
          ...this.buildRepresentanteLegalSection(credito)
        ],
        footer: (currentPage, pageCount) => {
          if (currentPage === 2) {
            return {
              text: [
                { text: "Fecha de \xFAltima actualizaci\xF3n: ", bold: true },
                "09/01/2025"
              ],
              alignment: "right",
              margin: [0, 20, 80, 0],
              fontSize: 10
            };
          }
          return;
        }
      };
      pdfMake3.createPdf(generatedDocument).open();
    });
  }
};
_avisoPrivacidad.\u0275fac = function avisoPrivacidad_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _avisoPrivacidad)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice));
};
_avisoPrivacidad.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _avisoPrivacidad, factory: _avisoPrivacidad.\u0275fac, providedIn: "any" });
var avisoPrivacidad = _avisoPrivacidad;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(avisoPrivacidad, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_solicitud_pf.service.ts
var pdfMake4 = __toESM(require_pdfmake());
var pdfFonts4 = __toESM(require_vfs_fonts());
pdfMake4.addVirtualFileSystem(pdfFonts4);
var _solicitudPersonaFisica = class _solicitudPersonaFisica {
  constructor(utils, utilsC, creditoController, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.chronixPDF = chronixPDF;
  }
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
  /**
   * Funcion para obtener el telefono del acreditante
   * @param {Credito} credito - Este es el credito que se recibe como parametro para obtener el telefono del acreditado
   * @returns {TelefonoPersonal | undefined}
   */
  checkPhone(credito) {
    const personaFisica = credito.datos_persona_fisica;
    const personaMoral = credito.datos_personas_morales;
    let telefonoPersFisic;
    let telefonoPersMoral;
    if (personaFisica?.datos_personales) {
      telefonoPersFisic = personaFisica.datos_personales.telefonos_personales?.[0];
      return telefonoPersFisic;
    }
    if (personaMoral) {
      telefonoPersMoral = personaMoral.representante_legal?.telefonos_personales?.[0];
      return telefonoPersMoral;
    }
    return void 0;
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
  calcularEdad(fechaISO) {
    if (!fechaISO)
      return "N/A";
    const [year, month, day] = fechaISO.split("-").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = /* @__PURE__ */ new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || monthDiff === 0 && dayDiff < 0) {
      age--;
    }
    return age;
  }
  formatearNumeroConComas(valor) {
    const numero = Number(valor);
    if (isNaN(numero))
      return String(valor);
    const [entero, decimales] = numero.toFixed(2).split(".");
    const enteroConComas = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${enteroConComas}.${decimales}`;
  }
  generarSolicitudPF(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.ciudades",
        "datosPersonaFisica.negocios.negociosActividadesEconomicas",
        "datosPersonaFisica.negocios.negociosActividadesEconomicas.actividadesEconomicas",
        "datosPersonaFisica.datosPersonales",
        "sucursales",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.datosPersonales.tiposDiscapacidades",
        "inversionesProgramas",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonaFisica.datosPersonales.etnias",
        "referenciasPersonales",
        "referenciasPersonales.parentescos",
        "datosPersonales.telefonosPersonales",
        "datosPersonales",
        "datosPersonales.ciudades",
        "datosPersonales.estado_nacimiento",
        "datosPersonaFisica.datosPersonales.ciudades",
        "creditosAnalisisMercados",
        "datosPersonaFisica.datosPersonales.estado_nacimiento",
        "datosPersonaFisica.datosPersonales.tiposDiscapacidades",
        "datosPersonales.pais"
      ]);
      if (credito == void 0) {
        return;
      }
      const solicitudCredito = {
        lugar: credito.sucursales?.nombre.toUpperCase() + ", BAJA CALIFORNIA",
        fecha: this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toUpperCase(),
        tipoEmpresa: credito.datos_persona_fisica?.negocios?.tipo_empresa.toUpperCase()
      };
      const coordenadasDomicilioFiscal = {
        latitud: credito.datos_persona_fisica?.negocios?.latitud,
        longitud: credito.datos_persona_fisica?.negocios?.longitud
      };
      const coordenadasDomicilioParticular = {
        latitud: credito.datos_persona_fisica?.datos_personales?.latitud,
        longitud: credito.datos_persona_fisica?.datos_personales?.longitud
      };
      const coordenadasAval = {
        latitud: credito.datos_personales?.latitud,
        longitud: credito.datos_personales?.longitud
      };
      const datosPersonales = credito.datos_persona_fisica?.datos_personales;
      const telefonoCasa = datosPersonales.telefonos_personales?.find((telefono) => telefono.tipo == "CASA");
      const telefonoOficina = datosPersonales.telefonos_personales?.find((telefono) => telefono.tipo == "OFICINA");
      const telefonoCelular = datosPersonales.telefonos_personales?.find((telefono) => telefono.tipo == "CELULAR");
      const datosGenerales = {
        nombreEmpresaFisica: credito.datos_persona_fisica?.negocios?.nombre.toUpperCase(),
        nombre: this.utils.nombreClienteFromDatosPersonales(credito.datos_persona_fisica?.datos_personales).toUpperCase(),
        curp: datosPersonales.curp.toUpperCase(),
        genero: datosPersonales.genero,
        fechaNacimiento: this.formatoFechaLectura(datosPersonales.fecha_nacimiento).toUpperCase(),
        edad: this.calcularEdad(datosPersonales.fecha_nacimiento),
        rfc: datosPersonales.rfc?.toUpperCase(),
        calle: datosPersonales.calle.toUpperCase(),
        noExterior: datosPersonales.no_exterior,
        noInterior: datosPersonales.no_interior,
        codigoPostal: datosPersonales.codigo_postal,
        referenciasDomicilio: credito.datos_persona_fisica?.datos_personales?.referencias_domicilio ?? "".toUpperCase(),
        colonia: datosPersonales.colonia.toUpperCase(),
        localidad: datosPersonales.localidad.toUpperCase(),
        ciudad: datosPersonales.ciudades?.nombre.toUpperCase(),
        estado: "Baja California".toUpperCase(),
        email: datosPersonales.email,
        telefonoCasa: telefonoCasa?.numero ?? "N/A",
        telefonoOficina: telefonoOficina?.numero ?? "N/A",
        telefonoCelular: telefonoCelular?.numero ?? "N/A",
        escolaridad: datosPersonales.escolaridad,
        nacionalidad: "MEXICO",
        estadoNacimiento: datosPersonales.estado_nacimiento?.nombre ?? "N/A",
        tipoIdentificacion: datosPersonales.identificacion.replace("INNE", "INE"),
        numeroIdentificacion: datosPersonales.identificacion_numero.toUpperCase(),
        estadoCivil: datosPersonales.estado_civil,
        regimenMatrimonial: datosPersonales.regimen_matrimonial,
        nombreConyuge: datosPersonales.conyuge_nombre ?? "N/A",
        correoConyuge: datosPersonales.conyuge_correo ?? "N/A",
        domicilioConyuge: datosPersonales.conyuge_direccion ?? "N/A",
        telefonoConyuge: datosPersonales.conyuge_telefono ?? "N/A",
        discapacidad: datosPersonales.tipos_discapacidades?.nombre ?? "No.",
        etnia: datosPersonales.etnias?.nombre,
        hijos: datosPersonales.hijos
      };
      console.log(datosGenerales);
      const datosNegocios = credito.datos_persona_fisica?.negocios;
      const datosNegocio = {
        nombreComercial: credito.datos_persona_fisica?.negocios?.nombre.toUpperCase(),
        domicilioFiscal: datosNegocios?.calle.toUpperCase(),
        noExterior: datosNegocios?.no_exterior,
        noInterior: datosNegocios?.no_interior,
        codigoPostal: datosNegocios?.codigo_postal,
        //referencias: datosNegocios?.referencia_domicilio
        referenciaDom: datosNegocios?.referencia_domicilio?.toUpperCase(),
        colonia: datosNegocios?.colonia.toUpperCase(),
        localidad: datosNegocios?.localidad.toUpperCase(),
        municipio: datosNegocios?.ciudades?.nombre.toUpperCase(),
        estado: "Baja California".toUpperCase(),
        //telefono casa
        //telefono celular
        //telefono oficina
        //?
        resumen: datosNegocios?.resumen_actividad_empresarial.toUpperCase(),
        actividad: datosNegocios?.negocios_actividades_economicas?.map((actividad) => actividad.actividades_economicas?.subgrupo ?? "N/A").join(", ").toUpperCase(),
        empleosInformalesHombres: datosNegocios?.empleos_informales_hombres,
        empleosInformalesMujeres: datosNegocios?.empleos_informales_mujeres,
        empleosIMSSHombres: datosNegocios?.empleos_imss_hombres,
        empleosIMSSMujeres: datosNegocios?.empleos_imss_mujeres,
        noEmpleosGenerarHombres: datosNegocios?.empleos_a_generar_hombres,
        noEmpleosGenerarMujeres: datosNegocios?.empleos_a_generar_mujeres,
        fechaInicioSAT: this.formatoFechaLectura(datosNegocios?.inicio_operaciones).toUpperCase()
      };
      const programaInv = credito.inversiones_programas;
      const elementosAgrupados = agruparElementosPorTipo(programaInv);
      const programaInversion = __spreadValues({
        programa: programaInv?.inversion_tipos?.map((inversionTipo) => {
          return [
            inversionTipo.inversion_tipo,
            inversionTipo.inversiones_tipos_detalles?.map((detalle) => {
              return [
                detalle.nombre,
                detalle.monto_solicitado
              ];
            })
          ];
        }),
        plazoSolicitado: programaInv?.plazo_solicitado_meses,
        creditoSolicitado: calcularTotalMontoSolicitado(programaInv)
      }, elementosAgrupados);
      const infMerc = credito.creditos_analisis_mercados;
      const infoMercado = {
        tipoConsumo: infMerc?.tipo_consumo,
        entornoMercado: infMerc?.mercado_entorno,
        coberturaLocal: infMerc?.porc_cobertura_mercado_local,
        coberturaRegional: infMerc?.porc_cobertura_mercado_regional,
        coberturaEstatal: infMerc?.porc_cobertura_mercado_estatal,
        coberturaNacional: infMerc?.porc_cobertura_mercado_nacional,
        porcExportacion: infMerc?.porc_cobertura_mercado_exportacion
        //porcOtro: infMerc.
      };
      const refPersonales = credito.referencias_personales;
      const referenciasFamiliares = {
        referencias: refPersonales.map((referencias) => {
          return [
            referencias.nombre.toUpperCase() ?? "",
            referencias.parentescos?.nombre.toUpperCase() ?? "",
            referencias.telefono ?? "",
            referencias.domicilio.toUpperCase() ?? ""
          ];
        })
      };
      const aval = credito.datos_personales;
      const telefonoCasaAval = aval?.telefonos_personales?.find((telefono) => telefono.tipo == "CASA");
      const telefonoOficinaAval = aval?.telefonos_personales?.find((telefono) => telefono.tipo == "OFICINA");
      const telefonoCelularAval = aval?.telefonos_personales?.find((telefono) => telefono.tipo == "CELULAR");
      const identidadAval = {
        nombre: this.utils.nombreClienteFromDatosPersonales(credito.datos_personales).toUpperCase(),
        apellidoPaterno: aval?.apellido_paterno.toUpperCase(),
        apellidoMaterno: aval?.apellido_materno.toUpperCase(),
        //parentezcoSolicitante: credito.creditos_referencias_personales,
        genero: aval?.genero,
        fechaNacimiento: this.formatoFechaLectura(aval?.fecha_nacimiento),
        edad: this.calcularEdad(aval?.fecha_nacimiento),
        rfc: aval?.rfc?.toUpperCase(),
        curp: aval?.curp.toUpperCase(),
        domicilio: aval?.calle.toUpperCase(),
        noExterior: aval?.no_exterior,
        noInterior: aval?.no_interior,
        codigoPostal: aval?.codigo_postal,
        referenciasDomicilio: aval?.referencias_domicilio.toUpperCase(),
        colonia: aval?.colonia.toUpperCase(),
        localidad: aval?.localidad.toUpperCase(),
        municipio: aval?.ciudades?.nombre.toUpperCase(),
        estadoNacimiento: getNombreFromObject(credito.datos_personales?.estado_nacimiento).toUpperCase(),
        email: aval?.email,
        //nacionalidad: aval?.nacionalidad,
        telefonoCasa: telefonoCasaAval?.numero ?? "N/A",
        telefonoOficina: telefonoOficinaAval?.numero ?? "N/A",
        telefonoCelular: telefonoCelularAval?.numero ?? "N/A",
        tipoIdentificacion: aval?.identificacion.replace("INNE", "INE"),
        numIdentificacion: aval?.identificacion_numero.toUpperCase(),
        nacionalidad: getNombreFromObject(credito.datos_personales?.pais).toUpperCase(),
        estadoCivil: aval?.estado_civil,
        regimenMatrimonial: aval?.regimen_matrimonial,
        nombreConyuge: aval?.conyuge_nombre ?? "N/A",
        ingresoMensual: aval?.ingreso_mensual
      };
      const mapDataToRows = (data) => {
        return Object.entries(data).map(([key, value]) => [key, value ?? ""]);
      };
      function getNombreFromObject(obj) {
        return obj?.nombre || "";
      }
      function getElementosInMercancia(obj) {
        return obj?.elementosMERCANCIAEINSUMOS || "";
      }
      function getElementosInInfraestructura(obj) {
        return obj?.elementosINFRAESTRUCTURA || "";
      }
      function getElementosInMobiliario(obj) {
        return obj?.elementosMOBILIARIOYOEQUIPODEOPERACION || "";
      }
      function getPreciosMercancia(obj) {
        return obj?.preciosElementosMERCANCIAEINSUMOS || "";
      }
      function getPreciosInfraestructura(obj) {
        return obj?.preciosElementosINFRAESTRUCTURA || "";
      }
      function getPreciosMobiliario(obj) {
        return obj?.preciosElementosMOBILIARIOYOEQUIPODEOPERACION || "";
      }
      function calcularTotalMontoSolicitado(programaInv2) {
        if (!programaInv2?.inversion_tipos)
          return 0;
        return programaInv2.inversion_tipos.reduce((total, inversionTipo) => {
          const subtotal = inversionTipo.inversiones_tipos_detalles?.reduce((sum, detalle) => {
            return sum + (detalle.monto_solicitado || 0);
          }, 0) || 0;
          return total + subtotal;
        }, 0);
      }
      function sanitizeKeyName(name) {
        return name.replace(/\s+/g, "").replace(/[^\w]/g, "").trim();
      }
      function agruparElementosPorTipo(programaInv2) {
        const agrupados = {};
        programaInv2?.inversion_tipos?.forEach((inversionTipo) => {
          const tipo = sanitizeKeyName(inversionTipo.inversion_tipo);
          agrupados[`elementos${tipo}`] = inversionTipo.inversiones_tipos_detalles?.map((detalle) => detalle.nombre.toUpperCase()).join(", ") || "";
          agrupados[`preciosElementos${tipo}`] = inversionTipo.inversiones_tipos_detalles?.reduce((sum, detalle) => sum + (detalle.monto_solicitado || 0), 0) || 0;
        });
        return agrupados;
      }
      console.log(infoMercado.coberturaEstatal);
      const headerLogo = yield this.chronixPDF.generateHeader(["assets/logo_baja_california.png", "assets/carta_instruccion1.png", "assets/fondosBCrecortado.png", "assets/corazonLogo.png"], [150, 130, 130, 100], [150, 150, 130, 80]);
      const generatedDocument = {
        pageMargins: [20, 20, 20, 50],
        content: [
          __spreadValues({}, headerLogo),
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("", "SOLICITUD DE CR\xC9DITO PROGRAMA EMPRENDE EMPRESARIAL PERSONA F\xCDSICA 2025"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                // Row 1: Standard widths
                [
                  {
                    text: yield this.llenarCeldaConDatos("Lugar", solicitudCredito.lugar),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Fecha", solicitudCredito.fecha),
                    colSpan: 2
                  },
                  {}
                ],
                // Row 2: Custom width for merged cell
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tipo de empresa", solicitudCredito.tipoEmpresa),
                    colSpan: 4
                    //fillColor: '#D3D3D3'
                  },
                  {},
                  {},
                  {}
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("1", "DATOS GENERALES (Persona F\xEDsica con Actividad Empresarial, RIF o RESICO)"),
          {
            table: {
              widths: ["*", 100, 120, 100],
              // Default column widths
              body: [
                // Row 1: Standard widths
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre o raz\xF3n social", datosGenerales.nombre),
                    colSpan: 3
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("CURP", datosGenerales.curp),
                    colSpan: 1
                  }
                ],
                // Row 2: Custom width for merged cell
                [
                  {
                    text: yield this.llenarCeldaConDatos("G\xE9nero", datosGenerales.genero)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Fecha de nacimiento", datosGenerales.fechaNacimiento)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Edad", datosGenerales.edad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("RFC con homoclave", datosGenerales.rfc)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Calle/Avenida/BLVD", datosGenerales.calle)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. exterior", datosGenerales.noExterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. interior", datosGenerales.noInterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("C\xF3digo postal", datosGenerales.codigoPostal)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Referencias del domicilio (Entrecalles, Callej\xF3n, Avenida, BLVD, Caracter\xEDsticas del lugar, privada)", datosNegocio.referenciaDom),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Colonia", datosGenerales.colonia)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Localidad", datosGenerales.localidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Municipio", datosGenerales.ciudad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado", datosGenerales.estado)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Datos generales", datosGenerales.email)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono casa (con lada)", datosGenerales.telefonoCasa)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono oficina (con lada)", datosGenerales.telefonoOficina)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono celular (con lada)", datosGenerales.telefonoCelular)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Escolaridad", datosGenerales.escolaridad),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Nacionalidad", datosGenerales.nacionalidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado de nacimiento", datosGenerales.estadoNacimiento)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tipo identificaci\xF3n", datosGenerales.tipoIdentificacion)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. identificaci\xF3n", datosGenerales.numeroIdentificacion)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado civil", datosGenerales.estadoCivil)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("R\xE9gimen matrimonial", datosGenerales.regimenMatrimonial)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre del c\xF3nyuge", datosGenerales.nombreConyuge),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Correo del c\xF3nyuge", datosGenerales.correoConyuge)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("\xBFTiene hijos?", datosGenerales.hijos === 1 ? "S\xED" : "No")
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio del c\xF3nyuge (Calle, No. int/ext, Colonia, CP, Municipio)", datosGenerales.domicilioConyuge),
                    colSpan: 3
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono del c\xF3nyuge", datosGenerales.telefonoConyuge)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Discapacidad", datosGenerales.discapacidad),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Grupo / Pueblo Originario", datosGenerales.etnia),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          /*
          {text: '\nSOLICITUD DE CRÉDITO PROGRAMA EMPRENDE EMPRESARIAL PERSONA FÍSICA 2025 \n', bold:true},
          {
              table: {
                  widths: ['50%', '50%'],
                  body: mapDataToRows(datosNegocio)
              }
          },*/
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("2", "DATOS DEL NEGOCIO"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre comercial", datosNegocio.nombreComercial),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio fiscal (Calle/Avenida/BLVD)", datosNegocio.domicilioFiscal)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. exterior", datosNegocio.noExterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. interior", datosNegocio.noInterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("C\xF3digo postal", datosNegocio.codigoPostal)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Referencias del domicilio (Entrecalles, Callej\xF3n, Avenida, BLVD, Caracter\xEDsticas del lugar, privada)", datosNegocio.referenciaDom),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Colonia", datosNegocio.colonia)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Ciudad o localidad", datosNegocio.localidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Municipio", datosNegocio.municipio)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado", datosNegocio.estado)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono casa (con lada)", datosGenerales.telefonoCasa)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono oficina (con lada)", datosGenerales.telefonoOficina)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono celular (con lada)", datosGenerales.telefonoCelular),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Actividad / giro del negocio en base al registro federal de contribuyentes (SAT)", datosNegocio.actividad),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Resumen descriptivo de la actividad empresarial", datosNegocio.resumen),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("No. empleos informales (hombres)", datosNegocio.empleosInformalesHombres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. empleos informales (mujeres)", datosNegocio.empleosInformalesMujeres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. empleos IMSS (hombres)", datosNegocio.empleosIMSSHombres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. empleos IMSS (mujeres)", datosNegocio.empleosIMSSMujeres)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("No. empleos a generar (hombres)", datosNegocio.noEmpleosGenerarHombres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. empleos a generar (mujeres)", datosNegocio.noEmpleosGenerarMujeres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Inicio de actividad econ\xF3mica ante el SAT", datosNegocio.fechaInicioSAT),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          yield this.tableTitles("3", "PROGRAMA DE INVERSI\xD3N"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: "El importe del cr\xE9dito ser\xE1 invertido en:",
                    colSpan: 3,
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  },
                  {},
                  {},
                  {
                    text: "Cr\xE9dito para:",
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  }
                ],
                [
                  {
                    text: "MERCANC\xCDA E INSUMOS (Es la inversi\xF3n de dinero que realiza la empresa para llevar a cabo su actividad econ\xF3mica y financiera a corto plazo, (no mayor a un a\xF1o), particularmente es la adquisici\xF3n de inventario).",
                    colSpan: 3,
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  },
                  {},
                  {},
                  {
                    text: "MERCANC\xCDA E INSUMOS",
                    fillColor: "#D3D3D3",
                    fontSize: 10,
                    alignment: "center"
                  }
                ],
                [
                  {
                    text: getElementosInMercancia(programaInversion) || "N/A",
                    colSpan: 3,
                    bold: true
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Total", "$ " + this.formatearNumeroConComas(getPreciosMercancia(programaInversion)), true)
                  }
                ],
                [
                  {
                    text: "MOBILIARIO y/o EQUIPO DE OPERACI\xD3N (Son los equipos que requiere una empresa para desarrollar su actividad econ\xF3mica).",
                    colSpan: 3,
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  },
                  {},
                  {},
                  {
                    text: "MOBILIARIO Y/O EQUIPO",
                    fillColor: "#D3D3D3",
                    fontSize: 10,
                    alignment: "center"
                  }
                ],
                [
                  {
                    text: getElementosInMobiliario(programaInversion) || "N/A",
                    colSpan: 3,
                    bold: true
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Total", "$ " + this.formatearNumeroConComas(getPreciosMobiliario(programaInversion)), true)
                  }
                ],
                [
                  {
                    text: "INFRAESTRUCTURA (Son los medios t\xE9cnicos, servicios e instalaciones necesarias para el desarrollo de una actividad, o bien para que un lugar pueda ser utilizado).",
                    colSpan: 3,
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  },
                  {},
                  {},
                  {
                    text: "INFRAESTRUCTURA",
                    fillColor: "#D3D3D3",
                    fontSize: 10,
                    alignment: "center"
                  }
                ],
                [
                  {
                    text: getElementosInInfraestructura(programaInversion) || "N/A",
                    colSpan: 3,
                    bold: true
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Total", "$ " + this.formatearNumeroConComas(getPreciosInfraestructura(programaInversion)), true)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Plazo solicitado", programaInversion.plazoSolicitado + " MESES"),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Cr\xE9dito solicitado", "$ " + this.formatearNumeroConComas(programaInversion.creditoSolicitado), true),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          yield this.tableTitles("4", "INFORMACI\xD3N DEL MERCADO"),
          {
            table: {
              widths: [100, "*", 100, "*", 100],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tipo de consumo de su (s) principal (es) producto (s) (fabrique o comercialice)", infoMercado.tipoConsumo),
                    colSpan: 3
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("El entorno del mercado actual se observa", infoMercado.entornoMercado),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: "Cobertura de mercado",
                    fillColor: "#D3D3D3",
                    colSpan: 5
                  },
                  {},
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("% Local", infoMercado.coberturaLocal)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("% Regional", infoMercado.coberturaRegional)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("% Estatal", infoMercado.coberturaEstatal)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("% Nacional", infoMercado.coberturaNacional)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("% Exportaci\xF3n", infoMercado.porcExportacion)
                  }
                ]
              ]
            }
          },
          yield this.tableTitles("5", "REFERENCIAS FAMILIARES"),
          {
            table: {
              widths: [180, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: "Datos de dos familiares o amigos que no vivan con usted:",
                    fillColor: "#D3D3D3",
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre", referenciasFamiliares.referencias[0]?.[0])
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Parentesco", referenciasFamiliares.referencias[0]?.[1])
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono", referenciasFamiliares.referencias[0]?.[2])
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio", referenciasFamiliares.referencias[0]?.[3])
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre", referenciasFamiliares.referencias[1]?.[0])
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Parentesco", referenciasFamiliares.referencias[1]?.[1])
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono", referenciasFamiliares.referencias[1]?.[2])
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio", referenciasFamiliares.referencias[1]?.[3])
                  }
                ]
              ]
            }
          },
          yield this.tableTitles("6", "IDENTIDAD DEL AVAL"),
          {
            table: {
              widths: [120, "*", 120, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre o raz\xF3n social", identidadAval.nombre),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("G\xE9nero", identidadAval.genero),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Fecha de nacimiento", identidadAval.fechaNacimiento)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Edad", identidadAval.edad)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("RFC con homoclave", identidadAval.rfc)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("CURP", identidadAval.curp)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio particular (Calle/Avenida/BLVD/Callej\xF3n)", identidadAval.domicilio),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("No. exterior", identidadAval.noExterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. interior", identidadAval.noInterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("C\xF3digo postal", identidadAval.codigoPostal),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Referencias del domicilio (Entrecalles/Callej\xF3n/Avenida/BLVD/Caracter\xEDsticas del lugar/Privada)", identidadAval.referenciasDomicilio),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Colonia", identidadAval.colonia)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Ciudad o localidad", identidadAval.localidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Municipio", identidadAval.municipio)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado", "BAJA CALIFORNIA")
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Estado de nacimiento", identidadAval.estadoNacimiento)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Correo electr\xF3nico", identidadAval.email),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Nacionalidad", identidadAval.nacionalidad)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono casa (con lada)", identidadAval.telefonoCasa)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono oficina (con lada)", identidadAval.telefonoOficina)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono celular (con lada)", identidadAval.telefonoCelular),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tipo de identificaci\xF3n", identidadAval.tipoIdentificacion),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("No. de identificaci\xF3n", identidadAval.numIdentificacion),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Estado civil", identidadAval.estadoCivil)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("R\xE9gimen matrimonial", identidadAval.regimenMatrimonial),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Nombre del c\xF3nyuge", identidadAval.nombreConyuge)
                  }
                ]
              ]
            }
          },
          yield this.tableTitles("7", "COORDENADAS DEL DOMICILIO FISCAL"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Latitud", coordenadasDomicilioFiscal.latitud),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Longitud", coordenadasDomicilioFiscal.longitud),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          yield this.tableTitles("8", "COORDENADAS DEL DOMICILIO PARTICULAR"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Latitud", coordenadasDomicilioParticular.latitud),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Longitud", coordenadasDomicilioParticular.longitud),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          yield this.tableTitles("9", "COORDENADAS DEL AVAL"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Latitud", coordenadasAval.latitud),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Longitud", coordenadasAval.longitud),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("10", "DECLARACI\xD3N FINAL"),
          {
            table: {
              widths: ["*"],
              // Default column widths
              body: [
                [
                  {
                    text: [
                      "Declaro bajo protesta de decir verdad que los datos asentados en la presente solicitud, son veraces y al igual que los documentos anexos, pueden ser verificados en cualquier momento por el",
                      { text: " Fideicomiso Para el Desarrollo Econ\xF3mico de Baja California", color: "#fa4d4d" },
                      " asimismo el Fideicomiso podr\xE1 solicitar informaci\xF3n adicional cuando lo considere conveniente aceptando que de existir falsedad o falsificaci\xF3n, se cancele el tr\xE1mite y se proceda conforme a derecho."
                    ],
                    fontSize: 10,
                    alignment: "justify"
                  }
                ],
                [
                  {
                    text: "Aviso de privacidad",
                    fillColor: "#D3D3D3",
                    bold: true
                  }
                ],
                [
                  {
                    text: [
                      { text: "Fondos BC", color: "#fa4d4d" },
                      " con domicilio en Calzada Justo Sierra y Honduras No. 377 Centro Comercial La Plazita II, Local 16 Mexicali, B.C., CP 21200, utilizar\xE1 sus datos personales aqu\xED recabados con el fin de dictaminar su solicitud de cr\xE9dito, as\xED como generar informaci\xF3n estad\xEDstica que permita mejorar los procesos internos. Para mayor informaci\xF3n acerca del tratamiento y de los derechos que puede hacer valer, usted puede acceder al aviso de privacidad completo a trav\xE9s de https://www.bajacalifornia.gob.mx/sei/ReactivaBC"
                    ],
                    fontSize: 10,
                    alignment: "justify"
                  }
                ],
                [
                  {
                    text: "El firmante de esta solicitud autoriza a Fondos B.C., para que la informaci\xF3n contenida en esta solicitud sea utilizada con fines estad\xEDsticos, as\xED como de promoci\xF3n y consulta de Buro de cr\xE9dito en el Sistema Estatal de Financiamiento, y a su vez sea compartida o transferida entre las unidades del sistema.",
                    fontSize: 10,
                    alignment: "justify",
                    pageBreak: "before"
                  }
                ],
                [
                  {
                    text: "1.-DEL MONTO TOTAL DEL FINANCIAMIENTO SE LE DEDUCIR\xC1 EL 1.5% +IVA (seg\xFAn corresponda), POR CONCEPTO DE APERTURA DE CR\xC9DITO.\n2.-S\xD3LO SE CONSIDERA EL INICIO FORMAL DEL TR\xC1MITE CUANDO EL EXPEDIENTE DE CR\xC9DITO SE HAYA RECIBIDO COMPLETO Y CORRECTO, CONFORME A LO SOLICITADO.",
                    fontSize: 9,
                    alignment: "justify"
                  }
                ]
              ]
            }
          },
          {
            text: "\xA1TR\xC1MITE SIN COSTO! En caso de cobro o abuso en el tr\xE1mite, informa a la Coordinaci\xF3n de Transparencia al Tel: (664) 973 0424 y/o al (686) 558 1000 ext. 1579 o a la p\xE1gina de internet www.transparenciabc.gob.mx",
            alignment: "center",
            fontSize: 10,
            bold: true,
            margin: [0, 15, 0, 15]
          },
          {
            table: {
              widths: ["*", "*"],
              // Default column widths
              body: [
                [
                  {
                    text: datosGenerales.nombre.toUpperCase() + "\n(Solicitante)",
                    bold: true,
                    margin: [0, 100, 0, 10],
                    alignment: "center"
                  },
                  {
                    text: identidadAval.nombre.toUpperCase() + "\n(Aval)",
                    bold: true,
                    margin: [0, 100, 0, 10],
                    alignment: "center"
                  }
                ]
              ]
            }
          },
          {
            text: "Esta solicitud y documentaci\xF3n son propiedad del Fideicomiso para el Desarrollo Econ\xF3mico de Baja California.",
            fontSize: 12,
            alignment: "center",
            margin: [0, 15, 0, 15]
          }
        ],
        footer: (currentPage, pageCount) => {
          return {
            text: `P\xE1gina ${currentPage} de ${pageCount}`,
            alignment: "center",
            margin: [0, 20, 0, 0],
            fontSize: 10
          };
        }
      };
      pdfMake4.createPdf(generatedDocument).open();
    });
  }
};
_solicitudPersonaFisica.\u0275fac = function solicitudPersonaFisica_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _solicitudPersonaFisica)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice));
};
_solicitudPersonaFisica.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _solicitudPersonaFisica, factory: _solicitudPersonaFisica.\u0275fac, providedIn: "any" });
var solicitudPersonaFisica = _solicitudPersonaFisica;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(solicitudPersonaFisica, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: ChronixPDFservice }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_solicitud_pm.service.ts
var pdfMake5 = __toESM(require_pdfmake());
var pdfFonts5 = __toESM(require_vfs_fonts());
pdfMake5.addVirtualFileSystem(pdfFonts5);
var _solicitudPersonaMoral = class _solicitudPersonaMoral {
  constructor(utils, utilsC, creditoController, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.chronixPDF = chronixPDF;
  }
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
  calcularEdad(fechaISO) {
    if (!fechaISO)
      return "N/A";
    const [year, month, day] = fechaISO.split("-").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = /* @__PURE__ */ new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || monthDiff === 0 && dayDiff < 0) {
      age--;
    }
    return age;
  }
  formatearNumeroConComas(valor) {
    const numero = Number(valor);
    if (isNaN(numero))
      return String(valor);
    const [entero, decimales] = numero.toFixed(2).split(".");
    const enteroConComas = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${enteroConComas}.${decimales}`;
  }
  /**
   * Funcion que refibe el ID de un credito para generar el pdf de esa solicitud
   * @param creditoParam
   * @returns
   */
  generarSolicitudPMfromCreditoID(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "sucursales",
        "inversionesProgramas",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "referenciasPersonales",
        "referenciasPersonales.parentescos",
        "datosPersonales.telefonosPersonales",
        "datosPersonales",
        "datosPersonales.estado_nacimiento",
        "datosPersonales.ciudades",
        //'datosPersonales.estado_nacimiento',
        "creditosAnalisisMercados",
        "datosPersonales.pais",
        "datosPersonasMorales",
        //"datosPersonasMorales.estados",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.representanteLegal.estado_nacimiento",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonasMorales.representanteLegal.pais",
        "datosPersonasMorales.representanteLegal.etnias",
        "datosPersonasMorales.representanteLegal.tiposDiscapacidades",
        "datosPersonasMorales.personasMoralesActividadesEconomicas.actividadesEconomicas"
      ]);
      if (credito == void 0) {
        return;
      }
      function getNombreFromObject(obj) {
        return obj?.nombre ?? "";
      }
      function getElementosInMercancia(obj) {
        return obj?.elementosMERCANCIAEINSUMOS ?? "";
      }
      function getElementosInInfraestructura(obj) {
        return obj?.elementosINFRAESTRUCTURA ?? "";
      }
      function getElementosInMobiliario(obj) {
        return obj?.elementosMOBILIARIOYOEQUIPODEOPERACION ?? "";
      }
      function getPreciosMercancia(obj) {
        return obj?.preciosElementosMERCANCIAEINSUMOS ?? "";
      }
      function getPreciosInfraestructura(obj) {
        return obj?.preciosElementosINFRAESTRUCTURA ?? "";
      }
      function getPreciosMobiliario(obj) {
        return obj?.preciosElementosMOBILIARIOYOEQUIPODEOPERACION ?? "";
      }
      function sanitizeKeyName(name) {
        return name.replace(/\s+/g, "").replace(/[^\w]/g, "").trim();
      }
      function agruparElementosPorTipo(programaInv2) {
        const agrupados = {};
        programaInv2?.inversion_tipos?.forEach((inversionTipo) => {
          const tipo = sanitizeKeyName(inversionTipo.inversion_tipo);
          agrupados[`elementos${tipo}`] = inversionTipo.inversiones_tipos_detalles?.map((detalle) => detalle.nombre.toUpperCase()).join(", ") || "";
          agrupados[`preciosElementos${tipo}`] = inversionTipo.inversiones_tipos_detalles?.reduce((sum, detalle) => sum + (detalle.monto_solicitado || 0), 0) || 0;
        });
        return agrupados;
      }
      function calcularTotalMontoSolicitado(programaInv2) {
        if (!programaInv2?.inversion_tipos)
          return 0;
        return programaInv2.inversion_tipos.reduce((total, inversionTipo) => {
          const subtotal = inversionTipo.inversiones_tipos_detalles?.reduce((sum, detalle) => {
            return sum + (detalle.monto_solicitado || 0);
          }, 0) || 0;
          return total + subtotal;
        }, 0);
      }
      const solicitudCredito = {
        lugar: credito.sucursales?.nombre.toUpperCase() + ", BAJA CALIFORNIA",
        fecha: this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toUpperCase(),
        tipoEmpresa: credito.datos_personas_morales?.tipo_empresa.toUpperCase()
      };
      const identidadEmpPMRoute = credito.datos_personas_morales;
      const identidadEmpPMTelefonos = credito.datos_personas_morales?.telefonos;
      const telefonoOficinaEmpPM = identidadEmpPMTelefonos?.find((telefono) => telefono.tipo == "OFICINA");
      const telefonoCelularEmpPM = identidadEmpPMTelefonos?.find((telefono) => telefono.tipo == "CELULAR");
      const identidadEmpresaPM = {
        nombre: identidadEmpPMRoute?.razon_social?.toUpperCase(),
        rfc: identidadEmpPMRoute?.rfc?.toUpperCase(),
        domicilioFiscal: identidadEmpPMRoute?.calle.toUpperCase(),
        noExterior: identidadEmpPMRoute?.no_exterior,
        noInterior: identidadEmpPMRoute?.no_interior,
        codigoPostal: identidadEmpPMRoute?.codigo_postal,
        referenciasDom: identidadEmpPMRoute?.referencia_domicilio.toUpperCase(),
        colonia: identidadEmpPMRoute?.colonia.toUpperCase(),
        localidad: identidadEmpPMRoute?.localidad.toUpperCase(),
        municipio: identidadEmpPMRoute?.ciudades?.nombre.toUpperCase(),
        estado: "BAJA CALIFORNIA",
        email: identidadEmpPMRoute?.email,
        telefonoOficina: telefonoOficinaEmpPM?.numero,
        telefonoCelular: telefonoCelularEmpPM?.numero
      };
      const coordenadasNegocio = {
        latitud: credito.datos_personas_morales?.latitud,
        longitud: credito.datos_personas_morales?.longitud
      };
      const coordenadasAval = {
        latitud: credito.datos_personales?.latitud,
        longitud: credito.datos_personales?.longitud
      };
      const coordenadasRL = {
        latitud: credito.datos_personas_morales?.representante_legal?.latitud,
        longitud: credito.datos_personas_morales?.representante_legal?.longitud
      };
      console.log("Latitud: " + coordenadasNegocio.latitud);
      console.log("Longitud: " + coordenadasNegocio.longitud);
      const identidadRepresentanteLegalRoute = credito.datos_personas_morales?.representante_legal;
      const identidadRepresentanteTelefonos = credito.datos_personas_morales?.representante_legal?.telefonos_personales;
      const telefonoCasaRepresentanteLegal = identidadRepresentanteTelefonos?.find((telefono) => telefono.tipo == "CASA");
      const telefonoOficinaRepresentanteLegal = identidadRepresentanteTelefonos?.find((telefono) => telefono.tipo == "OFICINA");
      const telefonoCelularRepresentanteLegal = identidadRepresentanteTelefonos?.find((telefono) => telefono.tipo == "CELULAR");
      const domicilio = this.utils.domicilioFromDatosModel(identidadRepresentanteLegalRoute);
      const rl = identidadRepresentanteLegalRoute;
      const identidadRepresentanteLegal = {
        nombre: this.utils.nombreClienteFromDatosPersonales(identidadRepresentanteLegalRoute).toUpperCase(),
        curp: identidadRepresentanteLegalRoute?.curp.toUpperCase(),
        genero: identidadRepresentanteLegalRoute?.genero.toUpperCase(),
        fechaNacimiento: this.utilsC.fechaAletras(identidadRepresentanteLegalRoute?.fecha_nacimiento).toUpperCase(),
        edad: this.calcularEdad(identidadRepresentanteLegalRoute?.fecha_nacimiento),
        rfc: identidadRepresentanteLegalRoute?.rfc?.toUpperCase(),
        domicilio: identidadRepresentanteLegalRoute?.calle.toUpperCase(),
        noExterior: identidadRepresentanteLegalRoute?.no_exterior,
        noInterior: identidadRepresentanteLegalRoute?.no_interior,
        codigoPostal: identidadRepresentanteLegalRoute?.codigo_postal,
        referenciasDom: identidadRepresentanteLegalRoute?.referencias_domicilio.toUpperCase(),
        colonia: identidadRepresentanteLegalRoute?.colonia.toUpperCase(),
        localidad: identidadRepresentanteLegalRoute?.localidad.toUpperCase(),
        municipio: identidadRepresentanteLegalRoute?.ciudades?.nombre.toUpperCase(),
        estado: "BAJA CALIFORNIA",
        email: identidadRepresentanteLegalRoute?.email,
        telefonoCasa: telefonoCasaRepresentanteLegal?.numero.toUpperCase(),
        telefonoOficina: telefonoOficinaRepresentanteLegal?.numero.toUpperCase(),
        telefonoCelular: telefonoCelularRepresentanteLegal?.numero.toUpperCase(),
        escolaridad: identidadRepresentanteLegalRoute?.escolaridad.toUpperCase(),
        nacionalidad: getNombreFromObject(identidadRepresentanteLegalRoute?.pais).toUpperCase(),
        estadoNacimiento: (identidadRepresentanteLegalRoute?.estado_nacimiento).nombre.toUpperCase(),
        tipoIdentificacion: identidadRepresentanteLegalRoute?.identificacion.replace("INNE", "INE"),
        numeroIdentificacion: identidadRepresentanteLegalRoute?.identificacion_numero.toUpperCase(),
        estadoCivil: identidadRepresentanteLegalRoute?.estado_civil.toUpperCase(),
        regimenMatrimonial: identidadRepresentanteLegalRoute?.regimen_matrimonial.toUpperCase(),
        nombreConyuge: identidadRepresentanteLegalRoute?.conyuge_nombre.toUpperCase(),
        hijos: identidadRepresentanteLegalRoute?.hijos,
        domicilioConyuge: identidadRepresentanteLegalRoute?.conyuge_direccion.toUpperCase(),
        correoConyuge: identidadRepresentanteLegalRoute?.conyuge_correo,
        telefonoConyuge: identidadRepresentanteLegalRoute?.conyuge_telefono,
        discapacidad: identidadRepresentanteLegalRoute?.tipos_discapacidades?.nombre.toUpperCase() ?? "No",
        etnia: identidadRepresentanteLegalRoute?.etnias?.nombre.toUpperCase()
      };
      const datosNegocioRoute = credito.datos_personas_morales;
      const datosNegocioTelefonos = credito.datos_personas_morales?.telefonos;
      const telefonoCasaNegocio = datosNegocioTelefonos?.find((telefono) => telefono.tipo == "CASA");
      const telefonoOficinaNegocio = datosNegocioTelefonos?.find((telefono) => telefono.tipo == "OFICINA");
      const telefonoCelularNegocio = datosNegocioTelefonos?.find((telefono) => telefono.tipo == "CELULAR");
      const datosNegocio = {
        nombreComercial: datosNegocioRoute?.nombre_comercial?.toUpperCase(),
        domicilioFiscal: datosNegocioRoute?.calle.toUpperCase(),
        noExterior: datosNegocioRoute?.no_exterior,
        noInterior: datosNegocioRoute?.no_interior,
        codigoPostal: datosNegocioRoute?.codigo_postal,
        referenciasDom: datosNegocioRoute?.referencia_domicilio.toUpperCase(),
        colonia: datosNegocioRoute?.colonia.toUpperCase(),
        localidad: datosNegocioRoute?.localidad.toUpperCase(),
        municipio: datosNegocioRoute?.ciudades?.nombre.toUpperCase(),
        estado: "BAJA CALIFORNIA",
        telefonoCasa: telefonoCasaNegocio?.numero,
        telefonoOficina: telefonoOficinaNegocio?.numero,
        telefonoCelular: telefonoCelularNegocio?.numero,
        actividad: datosNegocioRoute?.personas_morales_actividades_economicas?.map((actividad) => actividad.actividades_economicas?.subgrupo ?? "N/A").join(", ").toUpperCase(),
        resumen: datosNegocioRoute?.resumen_actividad_empresarial.toUpperCase(),
        empleosInformalesHombres: datosNegocioRoute?.empleos_informales_hombres,
        empleosInformalesMujeres: datosNegocioRoute?.empleos_informales_mujeres,
        empleosInformalesNoBinarios: datosNegocioRoute?.empleos_a_generar_no_binarios,
        empleosImssHombres: datosNegocioRoute?.empleos_imss_hombres,
        empleosImssMujeres: datosNegocioRoute?.empleos_imss_mujeres,
        empleosImssNoBinarios: datosNegocioRoute?.empleos_imss_no_binarios,
        empleosGenerarHombres: datosNegocioRoute?.empleos_a_generar_hombres,
        empleosGenerarMujeres: datosNegocioRoute?.empleos_a_generar_mujeres,
        empleosGenerarNoBinarios: datosNegocioRoute?.empleos_a_generar_no_binarios,
        fechaInicioSat: this.formatoFechaLectura(datosNegocioRoute?.fecha_inicio_operaciones).toUpperCase()
      };
      console.log(datosNegocio.empleosInformalesHombres);
      console.log(datosNegocio.empleosInformalesMujeres);
      console.log(datosNegocio.empleosInformalesNoBinarios);
      console.log(datosNegocio.empleosImssHombres);
      console.log(datosNegocio.empleosImssMujeres);
      console.log(datosNegocio.empleosImssNoBinarios);
      console.log(datosNegocio.empleosGenerarHombres);
      console.log(datosNegocio.empleosGenerarMujeres);
      console.log(datosNegocio.empleosGenerarNoBinarios);
      console.log(datosNegocio.fechaInicioSat);
      const programaInv = credito.inversiones_programas;
      const elementosAgrupados = agruparElementosPorTipo(programaInv);
      const programaInversion = __spreadValues({
        programa: programaInv?.inversion_tipos?.map((inversionTipo) => {
          return [
            inversionTipo.inversion_tipo,
            inversionTipo.inversiones_tipos_detalles?.map((detalle) => {
              return [
                detalle.nombre,
                detalle.monto_solicitado
              ];
            })
          ];
        }),
        plazoSolicitado: programaInv?.plazo_solicitado_meses,
        creditoSolicitado: calcularTotalMontoSolicitado(programaInv)
      }, elementosAgrupados);
      const infoMercadosRoute = credito.creditos_analisis_mercados;
      const infoMercados = {
        tipoConsumo: infoMercadosRoute?.tipo_consumo.toUpperCase(),
        entornoMercado: infoMercadosRoute?.mercado_entorno.toUpperCase(),
        porcLocal: infoMercadosRoute?.porc_cobertura_mercado_local,
        porcRegional: infoMercadosRoute?.porc_cobertura_mercado_regional,
        porcEstatal: infoMercadosRoute?.porc_cobertura_mercado_estatal,
        porcNacional: infoMercadosRoute?.porc_cobertura_mercado_nacional,
        porcExportacion: infoMercadosRoute?.porc_cobertura_mercado_exportacion
      };
      const referenciasFamiliaresRoute = credito.referencias_personales;
      const referenciasFamiliares = {
        referencias: referenciasFamiliaresRoute.map((referencias) => {
          return [
            referencias.nombre.toUpperCase() ?? "",
            referencias.parentescos?.nombre.toUpperCase() ?? "",
            referencias.telefono ?? "",
            referencias.domicilio.toUpperCase() ?? ""
          ];
        })
      };
      const identidadAvalRoute = credito.datos_personales;
      const telefonoCasaAval = identidadAvalRoute?.telefonos_personales?.find((telefono) => telefono.tipo == "CASA");
      const telefonoOficinaAval = identidadAvalRoute?.telefonos_personales?.find((telefono) => telefono.tipo == "OFICINA");
      const telefonoCelularAval = identidadAvalRoute?.telefonos_personales?.find((telefono) => telefono.tipo == "CELULAR");
      const identidadAval = {
        nombre: this.utils.nombreClienteFromDatosPersonales(credito.datos_personales).toUpperCase(),
        //parentesco: "EN CONSTRUCCION...",
        genero: identidadAvalRoute?.genero.toUpperCase(),
        fechaNacimienoto: this.formatoFechaLectura(identidadAvalRoute?.fecha_nacimiento).toUpperCase(),
        edad: this.calcularEdad(identidadAvalRoute?.fecha_nacimiento),
        rfc: identidadAvalRoute?.rfc?.toUpperCase(),
        curp: identidadAvalRoute?.curp.toUpperCase(),
        domicilio: identidadAvalRoute?.calle.toUpperCase(),
        noExterior: identidadAvalRoute?.no_exterior,
        noInterior: identidadAvalRoute?.no_interior,
        codigoPostal: identidadAvalRoute?.codigo_postal,
        referenciasDom: identidadAvalRoute?.referencias_domicilio.toUpperCase(),
        colonia: identidadAvalRoute?.colonia.toUpperCase(),
        localidad: identidadAvalRoute?.localidad.toUpperCase(),
        municipio: identidadAvalRoute?.ciudades?.nombre.toUpperCase(),
        estado: "BAJA CALIFORNIA",
        estadoNacimiento: getNombreFromObject(credito.datos_personales?.estado_nacimiento).toUpperCase(),
        email: identidadAvalRoute?.email,
        nacionalidad: getNombreFromObject(credito.datos_personales?.pais).toUpperCase(),
        telefonoCasa: telefonoCasaAval?.numero ?? "N/A",
        telefonoOficina: telefonoOficinaAval?.numero ?? "N/A",
        telefonoCelular: telefonoCelularAval?.numero ?? "N/A",
        tipoIdentificacion: identidadAvalRoute?.identificacion.toUpperCase(),
        numeroIdentificacion: identidadAvalRoute?.identificacion_numero.toUpperCase(),
        ingresoMensual: identidadAvalRoute?.ingreso_mensual,
        estadoCivil: identidadAvalRoute?.estado_civil.toUpperCase(),
        regimenMatrimonial: identidadAvalRoute?.regimen_matrimonial.toUpperCase(),
        nombreConyuge: identidadAvalRoute?.conyuge_nombre.toUpperCase()
      };
      const headerLogo = yield this.chronixPDF.generateHeader(["assets/logo_baja_california.png", "assets/carta_instruccion1.png", "assets/fondosBCrecortado.png", "assets/corazonLogo.png"], [140, 130, 130, 100], [150, 150, 130, 80]);
      const ref1 = referenciasFamiliares?.referencias?.[0] ?? [];
      const ref2 = referenciasFamiliares?.referencias?.[1] ?? [];
      const generatedDocument = {
        pageMargins: [30, 20, 30, 50],
        content: [
          __spreadValues({}, headerLogo),
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("", "SOLICITUD DE CR\xC9DITO PROGRAMA EMPRENDE EMPRESARIAL PERSONA MORAL 2025"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                // Row 1: Standard widths
                [
                  {
                    text: yield this.llenarCeldaConDatos("Lugar", solicitudCredito.lugar),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Fecha", solicitudCredito.fecha),
                    colSpan: 2
                  },
                  {}
                ],
                // Row 2: Custom width for merged cell
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tipo de empresa", solicitudCredito.tipoEmpresa),
                    colSpan: 4
                    //fillColor: '#D3D3D3'
                  },
                  {},
                  {},
                  {}
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("1", "IDENTIDAD DE LA EMPRESA PM"),
          {
            table: {
              widths: [135, "*", 120, "*"],
              // Default column widths
              body: [
                // Row 1: Standard widths
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre o raz\xF3n social", identidadEmpresaPM.nombre),
                    colSpan: 3
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("RFC con homoclave", identidadEmpresaPM.rfc),
                    colSpan: 1
                  }
                ],
                // Row 2: Custom width for merged cell
                [
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio fiscal (Calle/Avenida/BLVD)", identidadEmpresaPM.domicilioFiscal)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. exterior", identidadEmpresaPM.noExterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. interior", identidadEmpresaPM.noInterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("C\xF3digo postal", identidadEmpresaPM.codigoPostal)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Referencias del domicilio (Entrecalles, Callejon, BLVD, Caracteristicas del lugar, Privada)", identidadEmpresaPM.referenciasDom),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Colonia", identidadEmpresaPM.colonia)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Ciudad o localidad", identidadEmpresaPM.localidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Municipio", identidadEmpresaPM.municipio)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado", identidadEmpresaPM.estado)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Correo electr\xF3nico principal", identidadEmpresaPM.email),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono oficina (con lada)", identidadEmpresaPM.telefonoOficina)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono celular (con lada)", identidadEmpresaPM.telefonoCelular)
                  }
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("2", "IDENTIDAD DEL REPRESENTANTE LEGAL"),
          {
            table: {
              widths: [130, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre o raz\xF3n social", identidadRepresentanteLegal.nombre),
                    colSpan: 3
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("CURP", identidadRepresentanteLegal.curp)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("G\xE9nero", identidadRepresentanteLegal.genero)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Fecha de nacimiento", identidadRepresentanteLegal.fechaNacimiento)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Edad", identidadRepresentanteLegal.edad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("RFC con homoclave", identidadRepresentanteLegal.rfc)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio particular (Calle/Avenida/BLVD)", identidadRepresentanteLegal.domicilio)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. exterior", identidadRepresentanteLegal.noExterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. interior", identidadRepresentanteLegal.noInterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Codigo postal", identidadRepresentanteLegal.codigoPostal)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Referencias del domicilio (Entrecalles/Callej\xF3n/Avenida/BLVD/Caracter\xEDsticas del lugar/Privada)", identidadRepresentanteLegal.referenciasDom),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Colonia", identidadRepresentanteLegal.colonia)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Ciudad o localidad", identidadRepresentanteLegal.localidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Municipio", identidadRepresentanteLegal.municipio)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado", identidadRepresentanteLegal.estado)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Correo electr\xF3nico", identidadRepresentanteLegal.email)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono casa (con lada)", identidadRepresentanteLegal.telefonoCasa)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono oficina (con lada)", identidadRepresentanteLegal.telefonoOficina)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono celular (con lada)", identidadRepresentanteLegal.telefonoCelular)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Escolaridad", identidadRepresentanteLegal.escolaridad),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Nacionalidad", identidadRepresentanteLegal.nacionalidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado nacimiento", identidadRepresentanteLegal.estadoNacimiento)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tipo de identificaci\xF3n", identidadRepresentanteLegal.tipoIdentificacion),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("No. de identificaci\xF3n", identidadRepresentanteLegal.numeroIdentificacion),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Estado civil", identidadRepresentanteLegal.estadoCivil)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("R\xE9gimen matrimonial", identidadRepresentanteLegal.regimenMatrimonial)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Nombre del c\xF3nyuge", identidadRepresentanteLegal.nombreConyuge)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("\xBFTiene hijos?", identidadRepresentanteLegal.hijos === 1 ? "S\xED" : "No")
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio del c\xF3nyuge (Calle, No. ext/int, Colonia, Municipio)", identidadRepresentanteLegal.domicilioConyuge),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Correo del c\xF3nyuge", identidadRepresentanteLegal.correoConyuge)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono del c\xF3nyuge", identidadRepresentanteLegal.telefonoConyuge)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Discapacidad", identidadRepresentanteLegal.discapacidad),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Grupo / Pueblo Originario", identidadRepresentanteLegal.etnia),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          { text: "", pageBreak: "before" },
          yield this.tableTitles("3", "DATOS DEL NEGOCIO"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre comercial", datosNegocio.nombreComercial),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio fiscal (Calle/Avenida/BLVD)", datosNegocio.domicilioFiscal)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. exterior", datosNegocio.noExterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. interior", datosNegocio.noInterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("C\xF3digo postal", datosNegocio.codigoPostal)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Referencias del domicilio (Entrecalles, Callej\xF3n, Avenida, BLVD, Caracter\xEDsticas del lugar, Privada)", datosNegocio.referenciasDom),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Colonia", datosNegocio.colonia)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Ciudad o localidad", datosNegocio.localidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Municipio", datosNegocio.municipio)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado", datosNegocio.estado)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono casa (con lada)", datosNegocio.telefonoCasa)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono oficina (con lada)", datosNegocio.telefonoOficina),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono celular (con lada)", datosNegocio.telefonoCelular)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Actividad/Giro del negocio en base al registro federal de contribuyentes (SAT)", datosNegocio.actividad),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Resumen descriptivo de la actividad empresarial", datosNegocio.resumen),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos informales (Hombres)", datosNegocio.empleosInformalesHombres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos informales (Mujeres)", datosNegocio.empleosInformalesMujeres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos informales (No binarios)", datosNegocio.empleosInformalesNoBinarios)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos IMSS (Hombres)", datosNegocio.empleosImssHombres)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos IMSS (Mujeres)", datosNegocio.empleosImssMujeres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos IMSS (No binarios)", datosNegocio.empleosImssNoBinarios)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos a generar (Hombres)", datosNegocio.empleosGenerarHombres)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos a generar (Mujeres)", datosNegocio.empleosGenerarMujeres)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("No. de empleos a generar (No binarios)", datosNegocio.empleosGenerarNoBinarios),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Fecha de inicio de actividad econ\xF3mica ante el SAT", datosNegocio.fechaInicioSat),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            },
            margin: [0, 0, 0, 0]
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("4", "PROGRAMA DE INVERSI\xD3N"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: "El importe del cr\xE9dito ser\xE1 invertido en:",
                    colSpan: 3,
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  },
                  {},
                  {},
                  {
                    text: "Cr\xE9dito para:",
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  }
                ],
                [
                  {
                    text: "MERCANC\xCDA E INSUMOS (Es la inversi\xF3n de dinero que realiza la empresa para llevar a cabo su actividad econ\xF3mica y financiera a corto plazo, (no mayor a un a\xF1o), particularmente esla adquisici\xF3n de inventario).",
                    colSpan: 3,
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  },
                  {},
                  {},
                  {
                    text: "MERCANC\xCDA E INSUMOS",
                    fillColor: "#D3D3D3",
                    fontSize: 10,
                    alignment: "center"
                  }
                ],
                [
                  {
                    text: getElementosInMercancia(programaInversion) || "N/A",
                    colSpan: 3,
                    bold: true
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Total", "$ " + this.formatearNumeroConComas(getPreciosMercancia(programaInversion)), true)
                  }
                ],
                [
                  {
                    text: "MOBILIARIO y/o EQUIPO DE OPERACI\xD3N (Son los equipos que requiere una empresa para desarrollar su actividad econ\xF3mica).",
                    colSpan: 3,
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  },
                  {},
                  {},
                  {
                    text: "MOBILIARIO Y/O EQUIPO",
                    fillColor: "#D3D3D3",
                    fontSize: 10,
                    alignment: "center"
                  }
                ],
                [
                  {
                    text: getElementosInMobiliario(programaInversion) || "N/A",
                    colSpan: 3,
                    bold: true
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Total", "$ " + this.formatearNumeroConComas(getPreciosMobiliario(programaInversion)), true)
                  }
                ],
                [
                  {
                    text: "INFRAESTRUCTURA (Son los medios t\xE9cnicos, servicios e instalaciones necesarias para el desarrollo de una actividad, o bien para que un lugar pueda ser utilizado).",
                    colSpan: 3,
                    fillColor: "#D3D3D3",
                    fontSize: 10
                  },
                  {},
                  {},
                  {
                    text: "INFRAESTRUCTURA",
                    fillColor: "#D3D3D3",
                    fontSize: 10,
                    alignment: "center"
                  }
                ],
                [
                  {
                    text: getElementosInInfraestructura(programaInversion) || "N/A",
                    colSpan: 3,
                    bold: true
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Total", "$ " + this.formatearNumeroConComas(getPreciosInfraestructura(programaInversion)), true)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Plazo solicitado", programaInversion.plazoSolicitado),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Cr\xE9dito solicitado", "$ " + this.formatearNumeroConComas(programaInversion.creditoSolicitado), true),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("5", "INFORMACI\xD3N DEL MERCADO"),
          {
            table: {
              widths: [110, "*", 110, "*", 100],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tipo de consumo de su (s) principal (es) producto (s) (Fabrique o comercialice)", infoMercados.tipoConsumo),
                    colSpan: 3
                  },
                  {},
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("El entorno del mercado actual se observa", infoMercados.entornoMercado),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: "Cobertura del mercado",
                    colSpan: 5,
                    fillColor: "#D3D3D3",
                    bold: true
                  },
                  {},
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("% Local", infoMercados.porcLocal)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("% Regional", infoMercados.porcRegional)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("% Estatal", infoMercados.porcEstatal)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("% Nacional", infoMercados.porcNacional)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("% Exportaci\xF3n", infoMercados.porcExportacion)
                  }
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("6", "REFERENCIAS FAMILIARES"),
          {
            table: {
              widths: [200, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Datos de dos familiares o amigos que no vivan con usted", " "),
                    fillColor: "#D3D3D3",
                    bold: true,
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre", ref1[0] ?? "N/A")
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Parentesco", ref1[1] ?? "N/A")
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono", ref1[2] ?? "N/A")
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio", ref1[3] ?? "N/A")
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre", ref2[0] ?? "N/A")
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Parentesco", ref2[1] ?? "N/A")
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono", ref2[2] ?? "N/A")
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio", ref2[3] ?? "N/A")
                  }
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("7", "IDENTIDAD DEL AVAL"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Nombre o raz\xF3n social", identidadAval.nombre),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("G\xE9nero", identidadAval.genero)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Fecha de nacimiento", identidadAval.fechaNacimienoto),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Edad", identidadAval.edad)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("RFC con homoclave", identidadAval.rfc)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("CURP", identidadAval.curp)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Domicilio particular (Calle/Avenida/BLVD/Callej\xF3n)", identidadAval.domicilio),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("No. exterior", identidadAval.noExterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("No. interior", identidadAval.noInterior)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("C\xF3digo postal", identidadAval.codigoPostal),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Referencias del domicilio (Entrecalles/Callej\xF3n/Avenida/BLVD/Caracter\xEDsticas del lugar/Privada)", identidadAval.referenciasDom),
                    colSpan: 4
                  },
                  {},
                  {},
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Colonia", identidadAval.colonia)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Ciudad o localidad", identidadAval.localidad)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Municipio", identidadAval.municipio)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Estado", identidadAval.estado)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Estado nacimiento", identidadAval.estadoNacimiento)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Correo electr\xF3nico", identidadAval.email),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Nacionalidad", identidadAval.nacionalidad)
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono casa (con lada)", identidadAval.telefonoCasa)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono oficina (con lada)", identidadAval.telefonoOficina)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("Tel\xE9fono celular (con lada)", identidadAval.telefonoCelular),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Tipo de identificaci\xF3n", identidadAval.tipoIdentificacion?.replace("INNE", "INE")),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("No. de identificaci\xF3n", identidadAval.numeroIdentificacion),
                    colSpan: 2
                  },
                  {}
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Estado civil", identidadAval.estadoCivil)
                  },
                  {
                    text: yield this.llenarCeldaConDatos("R\xE9gimen matrimonial", identidadAval.regimenMatrimonial),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Nombre del conyuge", identidadAval.nombreConyuge)
                  }
                ]
              ]
            }
          },
          yield this.tableTitles("8", "COORDENADAS DEL DOMICILIO FISCAL"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Latitud", coordenadasNegocio.latitud),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Longitud", coordenadasNegocio.longitud),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          yield this.tableTitles("9", "COORDENADAS DEL REPRESENTANTE LEGAL"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Latitud", coordenadasRL.latitud),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Longitud", coordenadasRL.longitud),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          yield this.tableTitles("10", "COORDENADAS DEL AVAL"),
          {
            table: {
              widths: [100, "*", 100, "*"],
              // Default column widths
              body: [
                [
                  {
                    text: yield this.llenarCeldaConDatos("Latitud", coordenadasAval.latitud),
                    colSpan: 2
                  },
                  {},
                  {
                    text: yield this.llenarCeldaConDatos("Longitud", coordenadasAval.longitud),
                    colSpan: 2
                  },
                  {}
                ]
              ]
            }
          },
          // Tabla de identidad de la empresa PM
          yield this.tableTitles("11", "DECLARACI\xD3N FINAL"),
          {
            table: {
              widths: ["*"],
              // Default column widths
              body: [
                [
                  {
                    text: [
                      "Declaro bajo protesta de decir verdad que los datos asentados en la presente solicitud, son veraces y al igual que los documentos anexos, pueden ser verificados en cualquier momento por el",
                      { text: " Fideicomiso Para el Desarrollo Econ\xF3mico de Baja California", color: "#fa4d4d" },
                      ", asimismo el Fideicomiso podr\xE1 solicitar informaci\xF3n adicional cuando lo considere conveniente aceptando que de existir falsedad o falsificaci\xF3n, se cancele el tr\xE1mite y se proceda conforme a derecho."
                    ],
                    fontSize: 10
                  }
                ],
                [
                  {
                    text: yield this.llenarCeldaConDatos("Aviso de privacidad", " "),
                    fillColor: "#D3D3D3",
                    bold: true
                  }
                ],
                [
                  {
                    text: [
                      { text: "Fondos BC", color: "#fa4d4d" },
                      ", con domicilio en Calzada Justo Sierra y Honduras No. 377 Centro Comercial La Plazita II, Local 16 Mexicali, B.C., CP 21200, utilizar\xE1 sus datos personales aqu\xED recabados con el fin de dictaminar su solicitud de cr\xE9dito, as\xED como generar informaci\xF3n estad\xEDstica que permita mejorar los procesos internos. Para mayor informaci\xF3n acerca del tratamiento y de los derechos que puede hacer valer, usted puede acceder al aviso de privacidad completo a trav\xE9s de https://www.bajacalifornia.gob.mx/sei/ReactivaBC"
                    ],
                    fontSize: 10
                  }
                ],
                [
                  {
                    text: "El firmante de esta solicitud autoriza a Fondos B.C., para que la informaci\xF3n contenida en esta solicitud sea utilizada con fines estad\xEDsticos, as\xED como de promoci\xF3n y consulta de Buro de cr\xE9dito en el Sistema Estatal de Financiamiento, y a su vez sea compartida o transferida entre las unidades del sistema.",
                    fontSize: 10
                  }
                ],
                [
                  {
                    text: "1.-DEL MONTO TOTAL DEL FINANCIAMIENTO SE LE DEDUCIR\xC1 EL 1.5% +IVA (seg\xFAn corresponda), POR CONCEPTO DE APERTURA DE CR\xC9DITO.\n2.-S\xD3LO SE CONSIDERA EL INICIO FORMAL DEL TR\xC1MITE CUANDO EL EXPEDIENTE DE CR\xC9DITO SE HAYA RECIBIDO COMPLETO Y CORRECTO, CONFORME A LO SOLICITADO.",
                    fontSize: 9
                  }
                ]
              ]
            }
          },
          {
            text: "\xA1TR\xC1MITE SIN COSTO! En caso de cobro o abuso en el tr\xE1mite, informa a la Coordinaci\xF3n de Transparencia al Tel: (664) 973 0424 y/o al (686) 558 1000 ext. 1579 o a la p\xE1gina de internet www.transparenciabc.gob.mx",
            alignment: "center",
            fontSize: 12,
            margin: [0, 40, 0, 15]
          },
          {
            table: {
              widths: ["*", "*"],
              // Default column widths
              body: [
                [
                  {
                    text: identidadRepresentanteLegal.nombre + "\n(Representante legal)",
                    bold: true,
                    margin: [0, 100, 0, 10],
                    alignment: "center"
                  },
                  {
                    text: identidadAval.nombre + "\n(Aval)",
                    bold: true,
                    margin: [0, 100, 0, 10],
                    alignment: "center"
                  }
                ]
              ]
            }
          },
          {
            text: "Esta solicitud y documentaci\xF3n son propiedad del Fideicomiso para el Desarrollo Econ\xF3mico de Baja California.",
            fontSize: 12,
            alignment: "center",
            margin: [0, 15, 0, 15]
          }
        ],
        footer: (currentPage, pageCount) => {
          return {
            text: `P\xE1gina ${currentPage} de ${pageCount}`,
            alignment: "center",
            margin: [0, 20, 0, 0],
            fontSize: 10
          };
        }
      };
      pdfMake5.createPdf(generatedDocument).open();
    });
  }
};
_solicitudPersonaMoral.\u0275fac = function solicitudPersonaMoral_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _solicitudPersonaMoral)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice));
};
_solicitudPersonaMoral.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _solicitudPersonaMoral, factory: _solicitudPersonaMoral.\u0275fac, providedIn: "any" });
var solicitudPersonaMoral = _solicitudPersonaMoral;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(solicitudPersonaMoral, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: ChronixPDFservice }], null);
})();

export {
  formatoTransparencia,
  cartaProtesta,
  avisoPrivacidad,
  solicitudPersonaFisica,
  solicitudPersonaMoral
};
//# sourceMappingURL=chunk-TPOWSUQO.js.map
