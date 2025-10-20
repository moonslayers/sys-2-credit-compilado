import {
  ChronixPDFservice
} from "./chunk-LROCG2JY.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
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
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/services/documentosLegales/contratos/contrato_carta_compromiso.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
pdfMake.addVirtualFileSystem(pdfFonts);
var _cartaCompromiso = class _cartaCompromiso {
  constructor(utils, utilsC, creditoController, solicitudesApoyoController, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.solicitudesApoyoController = solicitudesApoyoController;
    this.chronixPDF = chronixPDF;
  }
  /**
   * Function for rendering the logo of Economia at the header
   * @param ecLog
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
  generarCartaCompromiso(apoyoParam) {
    return __async(this, null, function* () {
      if (!apoyoParam)
        return;
      if (!this.utilsC.esModeloUnNumero(apoyoParam))
        apoyoParam = apoyoParam.id;
      const apoyo = yield this.solicitudesApoyoController.find(apoyoParam, [
        "datosPersonales.ciudades",
        "programasApoyos",
        "sucursales",
        ""
      ]);
      if (apoyo == void 0) {
        return;
      }
      const programa = apoyo.programas_apoyos?.alias.toUpperCase();
      const programaSinAnio = programa?.replace(/\s20\d{2}$/, "");
      const municipio = apoyo.localidad_negocio.charAt(0).toUpperCase() + apoyo.localidad_negocio.slice(1).toLowerCase();
      const nombre = this.utils.nombreClienteFromApoyo(apoyo);
      function getGeneroSuffix(genero2) {
        if (genero2 === "HOMBRE")
          return "Beneficiario";
        if (genero2 === "MUJER")
          return "Beneficiaria";
        return "Beneficiarix";
      }
      const genero = apoyo.datos_personales?.genero;
      const generoSuffix = genero ? getGeneroSuffix(genero) : "";
      console.log(apoyo);
      const headerLogo = yield this.chronixPDF.generateHeader([], [150]);
      const backgroundLogo = yield this.utilsC.backgroundLogo("assets/BClogo.png");
      const color1 = "#6A1C32";
      const color2 = "#B17A45";
      const generatedDocument = {
        pageMargins: [50, 20, 50, 50],
        background: (currentPage, pageSize) => {
        },
        content: [
          //{ ...headerLogo },
          /*
          {
            text: 'CARTA COMPROMISO',
            alignment: "right",
            color: '#7B001C',
            fontSize: 14,
            bold: true,
            margin: [0, 20, 0, 5]
          },
          {
            text: [
              'Programa estatal de financiamiento al sector productivo',
            ],
            alignment: "right",
            color: '#7B001C'
          },
          {
            text: [
              programa,
            ],
            alignment: "right",
            color: '#7B001C',
            margin: [0, 5, 0, 5]
          },
          { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 300, y2: 0, lineWidth: 8, lineColor: '#7B001C' }], margin: [0, 10, 0, 30], alignment: "right" },*/
          this.chronixPDF.generateTitle("CARTA COMPROMISO", "#7B001C", ["Programa estatal de financiamiento al sector productivo", `${programa}`]),
          {
            text: [
              municipio,
              ", Baja California, ",
              this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toLowerCase()
              //new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(new Date())
            ],
            alignment: "left",
            margin: [0, 0, 0, 5]
          },
          // Introduccion
          {
            text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California",
            bold: true,
            margin: [0, 0, 0, 5]
          },
          {
            text: "P r e s e n t e.",
            margin: [0, 0, 0, 15]
          },
          {
            text: [`Por medio de la presente, manifiesto mi compromiso y acepto los t\xE9rminos y condiciones establecidos en el Programa `, { text: programaSinAnio, bold: true }, `, as\xED como los contenidos en Reglas de Operaci\xF3n del mismo.`],
            alignment: "justify",
            fontSize: 11
          },
          {
            text: "\nBajo protesta de decir verdad y en pleno uso de mis capacidades f\xEDsicas y mentales, manifiesto lo siguiente:",
            alignment: "justify",
            fontSize: 11
          },
          {
            ul: [
              { text: [`Conozco y me fue explicada toda la informaci\xF3n sobre el Programa `, { text: programaSinAnio, bold: true }, `, as\xED como los alcances y compromisos a los que me obligo al recibir el apoyo econ\xF3mico, motivo de la presente carta compromiso.`] },
              { text: [`Conozco y me fue explicado el objetivo del Programa `, { text: programaSinAnio, bold: true }, `, el cual est\xE1 enfocado al crecimiento e impulso de la actividad econ\xF3mica, cultura emprendedora, incrementar la actividad econ\xF3mica formal, que contribuyan en el crecimiento econ\xF3mico del Estado y dem\xE1s se\xF1aladas en Reglas de Operaci\xF3n.`] },
              { text: "Acepto y me obligo a destinar el recurso \xFAnica y exclusivamente a adquirir lo manifestado en la solicitud, con la finalidad de cumplir con el objetivo del programa." },
              { text: "Acepto y me obligo a comprobar el uso del recurso, haciendo entrega por medio de correo electr\xF3nico o de manera f\xEDsica, del comprobante(s) fiscal(es) correspondiente y entregar evidencia fotogr\xE1fica que respalde la compra en su totalidad por el monto otorgado, en un lapso no mayor a 7 d\xEDas naturales despu\xE9s de haber recibido el SPEI (Sistema de Pagos Electr\xF3nicos Interbancarios)." },
              { text: "Acepto y me obligo a realizar la devoluci\xF3n del recurso otorgado en caso de incurrir en cualquiera de los supuestos de incumplimiento establecidos en Reglas de Operaci\xF3n vigentes, en un plazo no mayor a 30 d\xEDas despu\xE9s haber recibido el SPEI." }
            ],
            alignment: "justify",
            margin: [0, 10, 0, 10],
            fontSize: 11
          },
          {
            text: "\nSin m\xE1s por el momento y quedando a su disposici\xF3n para cualquier aclaraci\xF3n o requerimiento adicional, me despido de la forma m\xE1s agradecida.",
            alignment: "justify",
            fontSize: 11
          },
          { text: "Atentamente", bold: true, alignment: "center", margin: [0, 20, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          {
            text: nombre,
            alignment: "center",
            bold: true
          },
          {
            text: `${generoSuffix}`,
            alignment: "center"
          }
        ]
      };
      pdfMake.createPdf(generatedDocument).open();
    });
  }
};
_cartaCompromiso.\u0275fac = function cartaCompromiso_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _cartaCompromiso)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(SolicitudApoyoService), \u0275\u0275inject(ChronixPDFservice));
};
_cartaCompromiso.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _cartaCompromiso, factory: _cartaCompromiso.\u0275fac, providedIn: "any" });
var cartaCompromiso = _cartaCompromiso;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(cartaCompromiso, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: SolicitudApoyoService }, { type: ChronixPDFservice }], null);
})();

export {
  cartaCompromiso
};
//# sourceMappingURL=chunk-LHPCDKWN.js.map
