import {
  CotizadorComponent
} from "./chunk-CIA4DBXS.js";
import {
  avisoPrivacidad,
  cartaProtesta,
  formatoTransparencia,
  solicitudPersonaFisica,
  solicitudPersonaMoral
} from "./chunk-TPOWSUQO.js";
import {
  ContratoCreditoPFAEService,
  ContratoCreditoPMService,
  NotificacionCobranzaPFAEService,
  ReferenciaBancariaService
} from "./chunk-PFTOVQVL.js";
import {
  ContratoMachoteCartaInstruccionesService
} from "./chunk-5XVKGOXT.js";
import {
  estadoCuenta
} from "./chunk-L6WZXWMU.js";
import {
  contratoNotificaciones
} from "./chunk-EZXCAMML.js";
import {
  ConvenioExtrajudicialPF,
  ConvenioExtrajudicialPM,
  ConvenioJudicialPF,
  ConvenioJudicialPM,
  convenioPagoPF,
  convenioPagoPM,
  convenioReestructuraPF,
  convenioReestructuraPM
} from "./chunk-IC6YGMVY.js";
import "./chunk-OZ75JDJE.js";
import {
  PagareService,
  TablaAmortizacionService
} from "./chunk-KUCJ2XDO.js";
import "./chunk-DJKNR32H.js";
import {
  BuscadorCreditosComponent
} from "./chunk-5AHBH7ZX.js";
import "./chunk-MJF6VG42.js";
import {
  cartaCompromiso
} from "./chunk-LHPCDKWN.js";
import {
  ChronixPDFservice
} from "./chunk-LROCG2JY.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import "./chunk-E5ZUYL3D.js";
import "./chunk-SDTK5VY4.js";
import {
  HeaderPdfService,
  require_customParseFormat
} from "./chunk-K6WRKREK.js";
import {
  require_dayjs_min
} from "./chunk-NWCMIO4X.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import "./chunk-OBCD5SW4.js";
import {
  UtilsService as UtilsService2,
  require_pdfmake,
  require_vfs_fonts
} from "./chunk-MLBICDWK.js";
import "./chunk-NXIA6ZMF.js";
import "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import {
  ApiServiceService,
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet
} from "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  Injectable,
  Injector,
  Input,
  effect,
  firstValueFrom,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/main/dashboard/dashboard.component.ts
var _DashboardComponent = class _DashboardComponent {
  constructor(storage) {
    this.storage = storage;
    this.usuarioLogin = this.storage.getUser();
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(LocalStorageService));
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 1, consts: [[1, "p-5"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 0);
    \u0275\u0275text(1, "Bienvenido ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.usuarioLogin.nombre, "!");
  }
}, encapsulation: 2 });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [], template: '<h4 class="p-5">Bienvenido <b>{{usuarioLogin.nombre}}!</b></h4>\n' }]
  }], () => [{ type: LocalStorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/main/dashboard/dashboard.component.ts", lineNumber: 10 });
})();

// src/app/main/folios-sesiones/folios-sesiones.component.ts
var FORM = [
  {
    label: "Sesi\xF3n",
    type: "text",
    value: "",
    key: "sesion",
    style: {
      div: "p-3 col-12 col-sm"
    },
    validator: {
      required: true
    }
  },
  {
    label: "Fecha sesi\xF3n",
    key: "fecha_sesion",
    value: "",
    type: "date",
    style: {
      div: "p-3 col-12 col-sm"
    },
    validator: {
      required: true
    }
  }
];
var _FoliosSesionesComponent = class _FoliosSesionesComponent {
  constructor() {
    this.showAdd = false;
    this.title = "Nuevo folio de sesi\xF3n";
    this.form = this.copyOf(FORM);
  }
  onClose() {
    if (!this.showAdd) {
      this.form = this.copyOf(FORM);
    }
  }
  copyOf(value) {
    return JSON.parse(JSON.stringify(value));
  }
};
_FoliosSesionesComponent.\u0275fac = function FoliosSesionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FoliosSesionesComponent)();
};
_FoliosSesionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoliosSesionesComponent, selectors: [["app-folios-sesiones"]], decls: 3, vars: 3, consts: [[3, "showChange", "show"], [3, "title", "form"], ["title", "Folios de Sesiones", 3, "agregar_nuevo"]], template: function FoliosSesionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function FoliosSesionesComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showAdd, $event) || (ctx.showAdd = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function FoliosSesionesComponent_Template_app_formulario_flotante_showChange_0_listener() {
      return ctx.onClose();
    });
    \u0275\u0275element(1, "app-generic-form", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-tabla", 2);
    \u0275\u0275listener("agregar_nuevo", function FoliosSesionesComponent_Template_app_tabla_agregar_nuevo_2_listener() {
      return ctx.showAdd = true;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.showAdd);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx.title)("form", ctx.form);
  }
}, dependencies: [
  TablaComponent,
  FormularioFlotanteComponent,
  GenericFormComponent
], encapsulation: 2 });
var FoliosSesionesComponent = _FoliosSesionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FoliosSesionesComponent, [{
    type: Component,
    args: [{ selector: "app-folios-sesiones", imports: [
      TablaComponent,
      FormularioFlotanteComponent,
      GenericFormComponent
    ], template: '<app-formulario-flotante [(show)]="showAdd" (showChange)="onClose()">\n    <app-generic-form [title]="title" [form]="form"></app-generic-form>\n</app-formulario-flotante>\n<app-tabla title="Folios de Sesiones" (agregar_nuevo)="showAdd=true"></app-tabla>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoliosSesionesComponent, { className: "FoliosSesionesComponent", filePath: "src/app/main/folios-sesiones/folios-sesiones.component.ts", lineNumber: 44 });
})();

// src/app/main/usuarios/usuarios.component.ts
var _UsuariosComponent = class _UsuariosComponent {
};
_UsuariosComponent.\u0275fac = function UsuariosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsuariosComponent)();
};
_UsuariosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosComponent, selectors: [["app-usuarios"]], decls: 1, vars: 0, template: function UsuariosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var UsuariosComponent = _UsuariosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosComponent, [{
    type: Component,
    args: [{ selector: "app-usuarios", imports: [
      RouterOutlet
    ], template: "<router-outlet></router-outlet>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosComponent, { className: "UsuariosComponent", filePath: "src/app/main/usuarios/usuarios.component.ts", lineNumber: 13 });
})();

// src/app/services/documentosLegales/contratos/contrato_credito_eef.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
pdfMake.addVirtualFileSystem(pdfFonts);
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.locale("es");
var _ContratoCreditoEEFService = class _ContratoCreditoEEFService {
  constructor(util, headers) {
    this.util = util;
    this.headers = headers;
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
  contratoCreditoEEF(credito) {
    return __async(this, null, function* () {
      const persona_fisica = credito?.datos_persona_fisica;
      const acreditado = credito?.datos_persona_fisica;
      const aval = credito?.datos_personales;
      const programa_inversion = credito?.inversiones_programas;
      const fecha = credito?.created_at;
      const inversiones = credito?.inversiones_programas?.inversion_tipos.reduce((sum, tipo) => {
        return sum + tipo.inversiones_tipos_detalles.reduce((acc, item) => {
          return acc + item.monto_solicitado;
        }, 0);
      }, 0);
      const inversiones_comision_unica = inversiones * 0.015;
      const iva = inversiones_comision_unica * 0.16;
      const inversiones_post_comision_e_iva = inversiones - (inversiones_comision_unica + iva);
      console.log(credito);
      console.log(aval);
      console.log(inversiones);
      const dateInTijuana = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Tijuana" });
      const date = new Date(dateInTijuana);
      const dia_pagare = new Intl.DateTimeFormat("es-ES", { day: "2-digit" }).format(date);
      console.log(dia_pagare);
      const date2 = new Date(fecha);
      const fecha_contrato = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(date2);
      const utcDate = /* @__PURE__ */ new Date();
      const date3 = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1e3);
      const dia2 = date3.toLocaleDateString("es", { day: "2-digit" });
      const mes2 = date3.toLocaleDateString("es", { month: "long" });
      const anio2 = date3.toLocaleDateString("es", { year: "numeric" });
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [10, 15, 10, 25],
        content: [
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
                    text: [{ text: "CONTRATO DE CR\xC9DITO", bold: true }],
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
                      "Contrato de Cr\xE9dito Simple que celebran por una primera parte ",
                      { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria ', bold: true },
                      "el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "FIDUCIARIO, ", bold: true },
                      "del ",
                      { text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California \u201CFONDOS BC\u201D ", bold: true },
                      "en lo sucesivo se le denomina el ",
                      { text: "FIDEICOMISO, ", bold: true },
                      "representado en este acto por el ",
                      { text: "Lic. Alfonso Ch\xE1vez P\xE9rez, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "apoderado legal; ", bold: true },
                      "y por una segunda parte, ",
                      { text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno} `, bold: true },
                      "en lo sucesivo el, ",
                      { text: "ACREDITADO, ", bold: true },
                      "y ",
                      { text: `${aval.nombre} ${aval.apellido_paterno} ${aval.apellido_materno} `, bold: true },
                      "en su car\xE1cter de ",
                      { text: "AVAL. ", bold: true },
                      "Sujet\xE1ndose las partes al tenor de las siguientes declaraciones y cl\xE1usulas:"
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
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "D E C L A R A C I O N E S:", bold: true }
                    ],
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
                      { text: "I. ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ",
                      { text: "FIDUCIARIO, ", bold: true },
                      "por conducto de su apoderado legal, bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:\n\n"
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "I.I. ", bold: true },
                      "Que es una Instituci\xF3n de Cr\xE9dito Filial, constituida conforme a la legislaci\xF3n mexicana y que est\xE1 debidamente autorizada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico para actuar como instituci\xF3n de Banca M\xFAltiple. \n\n"
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
                      { text: "I.II. ", bold: true },
                      "Que es una Sociedad establecida conforme a la Ley de Instituciones de Cr\xE9dito, autorizada para llevar a cabo operaciones fiduciarias, comisiones y mandatos, de conformidad con lo dispuesto por el art\xEDculo 46, fracci\xF3n XV de la Ley de Instituciones de Cr\xE9dito; constituida debidamente en t\xE9rminos de la escritura p\xFAblica de diez de noviembre de mil novecientos noventa y cinco, otorgada bajo n\xFAmero 264186, del protocolo del notario p\xFAblico n\xFAmero 207 de la ciudad de M\xE9xico, Distrito Federal. \n\n"
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
                      { text: "I.III. ", bold: true },
                      "Que ha otorgado poder general para actos de administraci\xF3n, as\xED como para pleitos y cobranzas, en favor del Lic. Alfonso Ch\xE1vez P\xE9rez, seg\xFAn consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. \n\n"
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
                      { text: "I.IV. ", bold: true },
                      "Que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual. \n\n"
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
                      { text: "I.V. ", bold: true },
                      "Que los recursos monetarios de que dispone para otorgar el cr\xE9dito que se formaliza mediante el presente contrato, provienen del Poder Ejecutivo de Baja California por conducto del ",
                      { text: "FIDEICOMISO. \n\n", bold: true }
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
                      { text: "I.VI. ", bold: true },
                      "Que en t\xE9rminos del art\xEDculo 65 de la Ley de Instituciones de Cr\xE9dito, estimo la situaci\xF3n econ\xF3mica del acreditado y su calificaci\xF3n administrativa y moral en funci\xF3n de la informaci\xF3n y documentos proporcionados por este. \n\n"
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
                      { text: "1.VII ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE ", bold: true },
                      `que en `,
                      { text: `[________________________________________] `, bold: true },
                      "SESI\xD3N ",
                      { text: `[________________________________________] `, bold: true },
                      "2025 de fecha ",
                      { text: `${dia2} de ${mes2} del `, bold: true },
                      `2025 los miembros del Comit\xE9 T\xE9cnico y de distribuci\xF3n de fondos autorizaron el cr\xE9dito a favor del `,
                      { text: "ACREDITADO ", bold: true },
                      "de acuerdo a la solicitud de cr\xE9dito y/o al resumen ejecutivo y/o proyecto de inversi\xF3n, e instruyendo la celebraci\xF3n del presente contrato, en apego a las Reglas de Operaci\xF3n vigentes del programa ",
                      { text: "\u201CEMPRENDE EMPRESARIAL 2025\u201D, ", bold: true },
                      "con base en la declaraci\xF3n y cl\xE1usulas que m\xE1s adelante se consignan."
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
                      { text: "II. ", bold: true },
                      "Declara el ",
                      { text: "ACREDITADO ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que: "
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "II.I. ", bold: true },
                      "Que es una persona f\xEDsica con actividad empresarial, dada de alta en el Registro Federal de Contribuyentes, seg\xFAn consta en la c\xE9dula de identificaci\xF3n fiscal ",
                      { text: `${acreditado.datos_personales?.identificacion_numero}, `, bold: true },
                      "con domicilio fiscal en C. ",
                      { text: `${acreditado.datos_personales?.colonia}, `, bold: true },
                      "Baja California; con domicilio particular, en el cual declara que tambi\xE9n puede ser notificado, el ubicado en ",
                      { text: `${acreditado.datos_personales?.calle}, ${acreditado.datos_personales?.no_exterior}, ${acreditado.datos_personales?.no_interior}, ${acreditado.datos_personales?.colonia}, ${acreditado.datos_personales?.localidad}, ${acreditado.datos_personales?.ciudades?.nombre} `, bold: true },
                      "Baja California, pudiendo en consecuencia entregar facturas de acuerdo a las leyes fiscales vigentes.",
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
                      { text: "II.II. ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${acreditado.datos_personales?.curp},`, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio.",
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
                      { text: "II.III. ", bold: true },
                      "Como parte de sus actividades empresariales, cuenta con un negocio denominado ",
                      { text: `${acreditado.negocios?.nombre}, `, bold: true },
                      "y su giro consiste en ",
                      { text: `${acreditado.negocios?.resumen_actividad_empresarial}, `, bold: true },
                      "cuyo monto de inversi\xF3n y dem\xE1s caracter\xEDsticas espec\xEDficas se detallan en la solicitud de cr\xE9dito, que ser\xE1 apoyado por el ",
                      { text: "ACREEDOR ", bold: true },
                      "mediante el patrimonio del ",
                      { text: "FIDEICOMISO. ", bold: true },
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
                      { text: "II.IV. ", bold: true },
                      "Que present\xF3 SOLICITUD DE CR\xC9DITO ante las autoridades administrativas del ",
                      { text: "FIDEICOMISO ", bold: true },
                      "y toda vez que dicha solicitud ha motivado el otorgamiento del cr\xE9dito objeto del presente contrato, bajo protesta de decir verdad manifiesta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica.",
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
                      { text: "II.V. ", bold: true },
                      "Que la informaci\xF3n presentada al ",
                      { text: "ACREDITANTE ", bold: true },
                      "para el otorgamiento de este cr\xE9dito, refleja de manera exacta y fiel su situaci\xF3n econ\xF3mica, por lo cual, no ha incurrido en alguno de los supuestos del art\xEDculo 112 de la Ley de Instituciones de Cr\xE9dito, que se refiere a las sanciones aplicables a las personas que con el prop\xF3sito de obtener cr\xE9ditos, proporcionen datos falsos a las instituciones de cr\xE9dito, manifestando que conoce el texto y alcance legal del precepto citado.\n",
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
                      { text: "II.VI ", bold: true },
                      "Manifiesta que previamente a la celebraci\xF3n del presente contrato el ACREDITANTE le ha informado el contenido y alcance del mismo, los cargos, comisiones o gastos que se generen por el cr\xE9dito, que en su caso se otorgue y los descuentos o bonificaciones a los que tendr\xE1 derecho.",
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
                      { text: "II.VII ", bold: true },
                      "A la fecha de la firma de este instrumento, no tiene conocimiento de enfermedad o padecimiento alguno que pueda provocar incapacidad f\xEDsica o jur\xEDdica, por lo que no se encuentra en ninguno los supuestos que pudieran invalidar la celebraci\xF3n de este contrato.",
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
                      { text: "II.VIII. ", bold: true },
                      "No ejecuta obras, ni presta servicios en forma principal o exclusiva para el Poder Ejecutivo de Baja California.",
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
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "III. ", bold: true },
                      "Declara ",
                      { text: "AVAL ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que: ",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "III.I. ", bold: true },
                      `Es una persona f\xEDsica de nacionalidad mexicana acredit\xE1ndolo con identificaci\xF3n oficial n\xFAmero `,
                      { text: `${aval.identificacion_numero}, `, bold: true },
                      `la cual es vigente a la fecha y que se anexa al presente contrato, con domicilio ubicado en `,
                      { text: `${aval.colonia}, ${aval.calle}, ${aval.localidad}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.ciudades?.nombre}, `, bold: true },
                      "n\xFAmero(s) telef\xF3nicos ",
                      { text: `${aval?.telefonos_personales?.map((t) => `${t.numero} (${t.tipo})`).join(", ")}, `, bold: true },
                      "y correo electr\xF3nico ",
                      { text: `${aval.email}, `, bold: true },
                      "para ser requerido y/o notificado."
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
                      { text: "III.II ", bold: true },
                      "Que es econ\xF3micamente solvente para responder de las obligaciones que deriven del presente Contrato; as\xED como que es consciente de que la informaci\xF3n presentada a las autoridades administrativas del FIDEICOMISO con motivo de la solicitud de cr\xE9dito y la integraci\xF3n del expediente respectivo, son base y motivo para el otorgamiento del cr\xE9dito al tenor del presente Contrato, por lo que, bajo protesta de decir verdad, manifiesta que est\xE1 en aptitud de cumplir oportunamente con todas y cada una de las obligaciones consignadas en el presente contrato, dado que al momento de la firma del presente instrumento no existe situaci\xF3n adversa que afecte de manera significativa su condici\xF3n financiera o sus operaciones."
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
                      { text: "III.III ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${aval.curp} `, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio."
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
                      { text: "III.IV ", bold: true },
                      "En t\xE9rminos del art\xEDculo 4\xB0 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, declara el ",
                      { text: "ACREDITADO ", bold: true },
                      "y ",
                      { text: "AVAL ", bold: true },
                      "que se constituyen expresamente, cada uno por s\xED, en referencias solidarias frente al ACREDITANTE para responder de manera ilimitada de las obligaciones que asumen."
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
                      { text: "IV. ", bold: true },
                      "Declaran ",
                      { text: "LAS PARTES ", bold: true },
                      "conjuntamente que: ",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "IV.I ", bold: true },
                      "No existe vinculante de HSBC M\xC9XICO y el ",
                      { text: "ACREDITADO ", bold: true },
                      "previa la celebraci\xF3n de este contrato."
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
                      { text: "IV.II ", bold: true },
                      "El representante legal de HSBC M\xC9XICO, explic\xF3 al ",
                      { text: "ACREDITADO, ", bold: true },
                      "los t\xE9rminos y condiciones definitivos de las cl\xE1usulas financieras, as\xED como las comisiones aplicables y dem\xE1s penas convencionales contenidas en este instrumento, manifestando el ",
                      { text: "ACREDITADO, ", bold: true },
                      "que dicha explicaci\xF3n ha sido de su entera satisfacci\xF3n."
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
                      { text: "IV.III ", bold: true },
                      "Que cuentan con la capacidad general para obligarse, as\xED como la suficiente para la celebraci\xF3n del presente contrato. As\xED mismo, declaran que es su voluntad celebrar el presente contrato y que para ello no media dolo, mala fe, error, lesi\xF3n ni cualquier otro vicio de la voluntad."
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
                      "Por lo anterior ",
                      { text: "LAS PARTES ", bold: true },
                      "se sujetan a las siguientes:"
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
                      { text: "C L \xC1 U S U L A S:", bold: true }
                    ],
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
                      { text: "PRIMERA.- OBJETO.- ", bold: true },
                      'Por medio del presente contrato, "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ',
                      { text: `ACREDITANTE, `, bold: true },
                      "otorga a favor de ",
                      { text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno} `, bold: true },
                      "en su car\xE1cter de ACREDITADO un cr\xE9dito hasta por la cantidad de ",
                      { text: `$${parseInt(`${inversiones}`)}.00 ( ${this.util.NumeroALetras2(`${parseInt(`${inversiones}`)}`)} 00/100 M N ), `, bold: true },
                      "el cual se dio a conocer por escrito al ",
                      { text: `ACREDITADO `, bold: true },
                      "mediante la car\xE1tula de este contrato, misma que debidamente firmada de aceptaci\xF3n por el ",
                      { text: `ACREDITADO `, bold: true },
                      "que forma parte integrante del presente contrato, mismo que se obliga a cubrir oportunamente la cantidad dispuesta con la periodicidad y plazos seleccionados."
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
                      "Este cr\xE9dito para fines administrativos se identifica como cr\xE9dito n\xFAmero ",
                      { text: `${credito.id}.`, bold: true }
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
                      { text: "SEGUNDA.- DISPOSICI\xD3N Y DESTINO DEL CR\xC9DITO.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE `, bold: true },
                      "otorga el cr\xE9dito al ",
                      { text: `ACREDITADO, `, bold: true },
                      "con objeto de que lo utilice en capital de trabajo, infraestructura, as\xED como maquinaria y equipo, todo ello en relaci\xF3n con el fin asentado en la solicitud de cr\xE9dito y/o el resumen ejecutivo y/o el proyecto de inversi\xF3n que motivaron la celebraci\xF3n del presente contrato."
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
                      "As\xED mismo, el acreditado podr\xE1 disponer del monto del cr\xE9dito dentro del plazo que para tal efecto le proporcione el ",
                      { text: `ACREDITANTE `, bold: true },
                      "y/o las autoridades administrativas del ",
                      { text: `FIDEICOMISO `, bold: true }
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
                      { text: "TERCERA.- PLAZO E INTERESES.- ", bold: true },
                      "El cr\xE9dito deber\xE1 ser cubierto por el ",
                      { text: `ACREDITADO `, bold: true },
                      "en m\xE1ximo ",
                      { text: `${this.util.NumeroALetras2(programa_inversion.plazo_solicitado_meses)} `, bold: true },
                      "meses. As\xED mismo, el cr\xE9dito se otorga con una tasa de ",
                      { text: "inter\xE9s ordinaria de 8.00% ", bold: true },
                      "(ocho punto cero por ciento) anual sobre el saldo insoluto m\xE1s I.V.A. A efecto de dar mayor claridad a las obligaciones derivadas de la presente cl\xE1usula y dem\xE1s relacionadas, a manera de ap\xE9ndice, se agrega la TABLA DE AMORTIZACI\xD3N respectiva."
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
                      { text: "CUARTA.- COMISI\xD3N POR APERTURA.- ", bold: true },
                      "La apertura del cr\xE9dito genera una ",
                      { text: "comisi\xF3n \xFAnica del 1.5% ", bold: true },
                      "(uno punto cinco por ciento) m\xE1s el 16% de I.V.A., que ser\xE1 descontada del importe del cr\xE9dito; en consecuencia, en el acto de la firma del presente acto jur\xEDdico, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "entrega al ",
                      { text: `ACREDITADO `, bold: true },
                      "transferencia bancaria por la cantidad de ",
                      { text: `$${inversiones_post_comision_e_iva} ( ${this.util.NumeroALetras2(inversiones_post_comision_e_iva)} 00/100 M N ), `, bold: true },
                      "expedido a favor del ",
                      { text: `ACREDITADO `, bold: true },
                      "y a cargo de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC. Por tanto, el ",
                      { text: `ACREDITADO `, bold: true },
                      "lo recibe en los t\xE9rminos y condiciones del presente contrato, otorgando al ",
                      { text: `ACREEDOR `, bold: true },
                      "el recibo m\xE1s amplio y firme que en derecho corresponda por la cantidad consignada en la cl\xE1usula primera."
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
                      { text: "QUINTA.- DE LOS PAGOS.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga a efectuar los pagos mensuales a que se refiere la cl\xE1usula TERCERA, \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
                      { text: `${credito.clabe_interbancaria} `, bold: true },
                      "a la cuenta bancaria de HSBC No 6231216641, as\xED mismo la clave interbancaria 021028062312166411."
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
                      "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el \xFAltimo d\xEDa de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
                      { text: `ACREDITANTE. `, bold: true },
                      "por s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: `FIDEICOMISO, `, bold: true },
                      "para establecer otros mecanismos u otro(s) lugar(es) de pago, de lo cual ser\xE1 informado el ",
                      { text: `ACREDITADO. `, bold: true },
                      "La notificaci\xF3n de los cambios o modificaciones podr\xE1n ser por escrito o mediante mensaje de correo electr\xF3nico. En caso de que la notificaci\xF3n sea realizada por correo electr\xF3nico, el ",
                      { text: `ACREDITADO `, bold: true },
                      "podr\xE1 acudir, si as\xED lo desea, al domicilio del ",
                      { text: `ACREDITANTE `, bold: true },
                      "a notificarse por escrito. Los pagos que el ",
                      { text: `ACREDITADO `, bold: true },
                      "haga en relaci\xF3n con este contrato, s\xF3lo podr\xE1n acreditarse mediante el comprobante del dep\xF3sito bancario realizado a favor del patrimonio del ",
                      { text: `FIDEICOMISO `, bold: true }
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
                      "Realizando el pago el ",
                      { text: `ACREDITANTE `, bold: true },
                      "deber\xE1 enviar copia del voucher del dep\xF3sito al correo electr\xF3nico de ",
                      { text: "cobranzabc@baja.gob.mx", style: "email" }
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas y no atender los pagos faltantes, se turnar\xE1 a un Despacho de Cobranza extrajudicial para la recuperaci\xF3n de saldos correspondientes. El ",
                      { text: `ACREDITADO `, bold: true },
                      "ser\xE1 boletinado a bur\xF3 de cr\xE9dito Federal en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.",
                      { text: "\n" },
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
                      { text: "SEXTA. TASA DE INTER\xC9S MORATORIA.-  ", bold: true },
                      "En caso de que los pagos no sean realizados oportunamente, se aplicar\xE1 una tasa de ",
                      { text: "inter\xE9s moratoria del 24% ", style: "tasa" },
                      "(Veinticuatro por ciento) m\xE1s I.V.A. El cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga verificativo el pago de dichas prestaciones. En el entendido de que cualquier abono se aplicar\xE1 primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital."
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
                      { text: "S\xC9PTIMA. VIGILANCIA.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE `, bold: true },
                      "por s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: `FIDEICOMISO `, bold: true },
                      "podr\xE1 en cualquier momento verificar el exacto cumplimiento de las obligaciones que por el presente Contrato se han generado a cargo del ",
                      { text: `ACREDITADO `, bold: true },
                      "y el ",
                      { text: `AVAL `, bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga a cubrir los gastos que se generen por dicha supervisi\xF3n, gastos de cobranza y los dem\xE1s que se generen en caso de su incumplimiento."
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
                      { text: "OCTAVA. ", bold: true },
                      "El ",
                      { text: "ACREDITADO", bold: true },
                      "se obliga a mantener cartel visible proporcionado por el FIDEICOMISO, a la vista dentro del negocio en el cual se especificar\xE1 que es beneficiario del Programa ",
                      { text: `EMPRENDE EMPRESARIAL PMAE 2025.`, bold: true }
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
                      { text: "NOVENA.- VIGENCIA. ", bold: true },
                      "El presente Contrato tendr\xE1 una vigencia de ",
                      { text: `${credito.inversiones_programas?.plazo_solicitado_meses} meses `, bold: true },
                      "de acuerdo al an\xE1lisis y/o evaluaci\xF3n de la unidad dictaminadora, contados a partir de la fecha de firma del mismo."
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
                    text: "No obstante su terminaci\xF3n, este contrato producir\xE1 todos sus efectos legales hasta tanto no se hayan liquidado en su totalidad las cantidades a su cargo.",
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
                      { text: "D\xC9CIMA.- RESTRICCI\xD3N Y DENUNCIA. ", bold: true },
                      "En t\xE9rminos del art\xEDculo 294 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, HSBC M\xC9XICO queda facultado para restringir el importe del Cr\xE9dito o el plazo en que tiene derecho al ",
                      { text: `ACREDITADO `, bold: true },
                      "a disponer de \xE9l, o ambos a la vez, o para denunciar el Contrato en cualquier tiempo, debiendo notificar al ",
                      { text: `ACREDITADO `, bold: true },
                      "en cualquier medio de contacto, as\xED mismo al ",
                      { text: `AVAL, `, bold: true },
                      "sin que sea necesario el cumplimiento de formalidades especiales."
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
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "y el ",
                      { text: "AVAL ", bold: true },
                      "aceptan que dicha notificaci\xF3n podr\xE1 realizarse por escrito o a trav\xE9s de cualquier medio electr\xF3nico o telecomunicativo derivado de la ciencia y la tecnolog\xEDa."
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
                      { text: "D\xC9CIMA PRIMERA. CAUSALES DE RESCISI\xD3N Y VENCIMIENTO ANTICIPADO.- ", bold: true },
                      "El ",
                      { text: "ACREDITANTE ", bold: true },
                      " podr\xE1 rescindir el presente contrato y dar por vencido anticipadamente el plazo para pagar el cr\xE9dito, as\xED como sus intereses ordinarios y moratorios generados, cuando el ACREDITADO incurra en cualquiera de los siguientes casos:"
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
                      { text: "I. ", bold: true },
                      "Si se presenta sin mediar justificaci\xF3n, un retraso de tres o m\xE1s meses en los pagos del cr\xE9dito, de acuerdo a los plazos y montos estipulados en la tabla de amortizaci\xF3n."
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
                      { text: "II. ", bold: true },
                      "Si se detecta que existi\xF3 falsedad o alteraci\xF3n en los documentos anexos a la solicitud de cr\xE9dito con el fin de obtener el beneficio."
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
                      { text: "III. ", bold: true },
                      "Si el ",
                      { text: `ACREDITADO `, bold: true },
                      "incumple cualquiera de las obligaciones derivadas del presente contrato y las leyes aplicables, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "podr\xE1 exigir ",
                      { text: `anticipadamente `, bold: true },
                      "el pago total del saldo pendiente de forma inmediata y el ",
                      { text: `ACREDITADO `, bold: true },
                      "responda por los da\xF1os y perjuicios causados, as\xED como gastos judiciales en su caso."
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
                      { text: "D\xC9CIMA SEGUNDA. AVAL.- ", bold: true },
                      "Por virtud del presente contrato, el AVAL se constituye como responsable junto con el ACREDITADO, respondiendo de manera directa, subsidiaria e ilimitada respecto de todas las obligaciones contra\xEDdas con el ACREDITANTE y el patrimonio del FIDEICOMISO, comprometi\xE9ndose a pagar de manera oportuna el importe total del cr\xE9dito y sus accesorios legales, en los mismos t\xE9rminos en que se encuentra obligado el ACREDITADO, de conformidad en lo dispuesto por el art\xEDculo 4 de la Ley de T\xEDtulos y Operaciones de Cr\xE9dito y art\xEDculo 1987, 1988 y 1989 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por los art\xEDculos 1862, 1863 y 1864 del C\xF3digo civil para el Estado de Baja California."
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas el ",
                      { text: `AVAL `, bold: true },
                      "ser\xE1 boletinado a bur\xF3 de cr\xE9dito federal en t\xE9rminos de la Ley para regular a las Sociedades de informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF Y PROFECO."
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
                      { text: "D\xC9CIMA TERCERA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "autoriza al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para que, si as\xED lo desea, inscriba el presente instrumento en el Registro P\xFAblico de la Propiedad de la ciudad de Mexicali, Baja California, sin que esto sea motiv\xF3 para que el ",
                      { text: `ACREDITADO `, bold: true },
                      "incumpla en las condiciones del presente instrumento."
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
                      { text: "D\xC9CIMA CUARTA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "y su ",
                      { text: `AVAL `, bold: true },
                      "otorgar\xE1n su consentimiento Expreso e irrevocable a el ",
                      { text: `ACREDITANTE `, bold: true },
                      "o cualquier persona jur\xEDdica para que conjunta o separadamente consulte, informe, reporte o divulgue toda la informaci\xF3n Financiera relevante al bur\xF3 de cr\xE9dito a efecto de conocer su desempe\xF1o como deudor, su capacidad de pago, o para valorar el riesgo futuro de concederle un cr\xE9dito."
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
                      { text: "D\xC9CIMA QUINTA.- PAGOS ANTICIPADOS Y PAGOS ADELANTADOS. ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "tendr\xE1 el derecho de efectuar pagos anticipados, ya sean totales o parciales, en cualquier momento durante la vigencia del presente contrato de cr\xE9dito, sin incurrir en penalizaciones por pago anticipado. En caso de pago anticipado total, el deudor quedar\xE1 liberado de todas las obligaciones restantes bajo este contrato, siempre y cuando el pago cubra la totalidad del saldo insoluto y cualquier inter\xE9s acumulado hasta la fecha del pago."
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
                      "El pago anticipado se aplicar\xE1 en forma exclusiva al saldo insoluto del principal, siempre y cuando el ",
                      { text: `ACREDITADO `, bold: true },
                      "est\xE9 al corriente en el pago de: a) el principal; b) los intereses ordinarios devengados, as\xED como; c) en su caso, las comisiones y cargos pactados."
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
                      "Trat\xE1ndose de pagos anticipados que liquiden el saldo insoluto, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "entregar\xE1 al ",
                      { text: `ACREDITADO `, bold: true },
                      "la documentaci\xF3n que resulte necesaria que lo exima de cualquier responsabilidad contra\xEDda en el presente contrato."
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
                      "Los pagos anticipados reducir\xE1n el plazo de este contrato, en virtud de que no se variar\xE1 el monto de cada una de las amortizaciones se\xF1aladas en el presente contrato. El hecho de que el ",
                      { text: `ACREDITADO `, bold: true },
                      "anticipe abonos a capital, no lo exime de la obligaci\xF3n de efectuar los pagos mensuales que est\xE1 obligada a cubrir."
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
                      { text: "D\xC9CIMA SEXTA.- CASO FORTUITO.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga al cumplimiento del presente contrato, aun en caso fortuito o fuerza mayor, en t\xE9rminos del art\xEDculo 2111 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por el art\xEDculo 1986 del C\xF3digo civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA S\xC9PTIMA.- CASO DE DEFUNCI\xD3N.- ", bold: true },
                      "Si falleciera el ",
                      { text: `ACREDITADO `, bold: true },
                      "se debe de notificar al ",
                      { text: `FIDEICOMISO `, bold: true },
                      "entregar acta de defunci\xF3n original y copia para cotejo. En caso de cumplir con el requisito anterior, el acreditado y aval quedar\xE1n autom\xE1ticamente deslindados de toda responsabilidad contractual y se proceder\xE1 a la cancelaci\xF3n del cr\xE9dito de manera inmediata en capital, IVA e intereses ordinarios y moratorios que se hayan generado."
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
                      { text: "D\xC9CIMA OCTAVA.- NO CESI\xD3N ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "acepta que no podr\xE1 ceder o por cualquier otro medio transmitir los derechos y obligaciones que a su favor se deriven del presente contrato sin autorizaci\xF3n previa expresa del ",
                      { text: `ACREDITANTE `, bold: true },
                      "de conformidad en lo dispuesto en el art\xEDculo 2051 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria en el art\xEDculo 1926 del C\xF3digo Civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA NOVENA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "faculta de manera expresa al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para ceder, descontar o negociar, ante cualquier Instituci\xF3n de Cr\xE9dito del pa\xEDs, los derechos de cr\xE9dito derivados de este Contrato."
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
                      { text: "VIG\xC9SIMA.- DE LOS DOMICILIOS. ", bold: true }
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
                      "Que para efectos del presente Contrato, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "se\xF1ala como domicilio fiscal el ubicado en, Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010."
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
                      "Para efectos del presente contrato, el ",
                      { text: `ACREDITADO `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio fiscal `, bold: true },
                      "el ubicado en ",
                      { text: `${persona_fisica.datos_personales?.calle}, ${persona_fisica.datos_personales?.no_exterior}, ${persona_fisica.datos_personales?.no_interior}, ${persona_fisica.datos_personales?.colonia}, ${persona_fisica.datos_personales?.localidad}, ${persona_fisica.datos_personales?.ciudades?.nombre} `, bold: true }
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
                      "Para efecto del presente contrato, el ",
                      { text: `ACREDITADO `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio particular `, bold: true },
                      "el ubicado en ",
                      { text: `${persona_fisica.datos_personales?.calle}, ${persona_fisica.datos_personales?.no_exterior}, ${persona_fisica.datos_personales?.no_interior}, ${persona_fisica.datos_personales?.colonia}, ${persona_fisica.datos_personales?.localidad}, ${persona_fisica.datos_personales?.ciudades?.nombre} `, bold: true }
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
                      { text: "VIG\xC9SIMA PRIMERA.- TITULO EJECUTIVO, ", bold: true },
                      "en t\xE9rminos del art\xEDculo 68 de la Ley de Instituciones de Cr\xE9dito, el presente contrato, junto con los estados de cuenta certificados por el contador facultado de HSBC MEXICO, constituyen t\xEDtulo ejecutivo, sin necesidad de reconocimiento de firma, ni de ning\xFAn otro requisito."
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
                      { text: "VIG\xC9SIMA SEGUNDA.- DE LA EJECUCI\xD3N. ", bold: true },
                      "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente contrato a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles y quedando a potestad del ",
                      { text: `ACREDITANTE `, bold: true },
                      "la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca."
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
                      { text: `LE\xCDDO QUE FUE EL PRESENTE CONTRATO Y ACLARADOS SUS ALCANCES Y EFECTOS, LAS PARTES LO FIRMAN DE CONFORMIDAD EN LA CIUDAD DE MEXICALI, BAJA CALIFORNIA A ${dia2} DE ${mes2} DE ${anio2}`, bold: true }
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
                      { text: "POR EL ACREEDOR", bold: true },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2",
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
                    text: "______________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `Lic. ALFONSO CH\xC1VEZ P\xC9REZ`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `En su car\xE1cter de apoderado Legal de`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple,`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"`,
                    alignment: "center",
                    style: "body2"
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
                      { text: "EL ACREDITADO", bold: true }
                    ],
                    alignment: "center",
                    style: "headerNot2"
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
                    text: "____________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `${acreditado.datos_personales?.calle}, ${acreditado.datos_personales?.no_exterior}, ${acreditado.datos_personales?.no_interior}, ${acreditado.datos_personales?.colonia}, ${acreditado.datos_personales?.localidad}, ${acreditado.datos_personales?.ciudades?.nombre}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `TEL. 6161056719`,
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "body2"
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
                      { text: "EL AVAL", bold: true }
                    ],
                    alignment: "center",
                    style: "headerNot2"
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
                    text: "____________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${aval?.nombre} ${aval?.apellido_paterno} ${aval?.apellido_materno}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `${aval.colonia}, ${aval.calle}, ${aval.localidad}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.ciudades?.nombre}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `TEL. 6161056719`,
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `Testigos`,
                      { text: "\n" },
                      { text: "\n" }
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
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 50, "*"],
              body: [
                [
                  {
                    text: "_______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "_______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: "CP. ADRIANA SOFIA CORNEJO PORRAS \n COORDINADOR ADMINISTRATIVO",
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `LIC. DALIA IRIS MABEL GODOY TAPIA 
 COORDINADOR DE JUR\xCDDICO`,
                    alignment: "center",
                    style: "body2"
                  }
                ]
              ]
            }
          }
        ],
        footer: (currentPage, pageCount) => {
          return {
            text: `P\xE1gina ${currentPage} de ${pageCount}`,
            alignment: "right",
            margin: [0, 0, 40, 10],
            fontSize: 8
          };
        },
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
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
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
      pdfMake.createPdf(defDoc).open();
    });
  }
};
_ContratoCreditoEEFService.\u0275fac = function ContratoCreditoEEFService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratoCreditoEEFService)(\u0275\u0275inject(UtilsService2), \u0275\u0275inject(HeaderPdfService));
};
_ContratoCreditoEEFService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratoCreditoEEFService, factory: _ContratoCreditoEEFService.\u0275fac, providedIn: "any" });
var ContratoCreditoEEFService = _ContratoCreditoEEFService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoCreditoEEFService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }, { type: HeaderPdfService }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_credito_ttn.service.ts
var pdfMake2 = __toESM(require_pdfmake());
var pdfFonts2 = __toESM(require_vfs_fonts());
var import_dayjs2 = __toESM(require_dayjs_min());
var import_customParseFormat2 = __toESM(require_customParseFormat());
pdfMake2.addVirtualFileSystem(pdfFonts2);
import_dayjs2.default.extend(import_customParseFormat2.default);
import_dayjs2.default.locale("es");
var _ContratoCreditoTTNService = class _ContratoCreditoTTNService {
  constructor(util) {
    this.util = util;
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
  contratoCreditoTTN(credito) {
    return __async(this, null, function* () {
      const persona_fisica = credito?.datos_persona_fisica;
      const acreditado = credito?.datos_persona_fisica;
      const aval = credito?.datos_personales;
      const programa_inversion = credito?.inversiones_programas;
      const fecha = credito?.created_at;
      const inversiones = credito?.inversiones_programas?.inversion_tipos.reduce((sum, tipo) => {
        return sum + tipo.inversiones_tipos_detalles.reduce((acc, item) => {
          return acc + item.monto_solicitado;
        }, 0);
      }, 0);
      const inversiones_comision_unica = inversiones * 0.015;
      const iva = inversiones_comision_unica * 0.16;
      const inversiones_post_comision_e_iva = inversiones - (inversiones_comision_unica + iva);
      console.log(credito);
      console.log(aval);
      console.log(inversiones);
      const dateInTijuana = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Tijuana" });
      const date = new Date(dateInTijuana);
      const dia_pagare = new Intl.DateTimeFormat("es-ES", { day: "2-digit" }).format(date);
      console.log(dia_pagare);
      const date2 = new Date(fecha);
      const fecha_contrato = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(date2);
      const utcDate = /* @__PURE__ */ new Date();
      const date3 = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1e3);
      const dia2 = date3.toLocaleDateString("es", { day: "2-digit" });
      const mes2 = date3.toLocaleDateString("es", { month: "long" });
      const anio2 = date3.toLocaleDateString("es", { year: "numeric" });
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [10, 15, 10, 5],
        content: [
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
                    text: [{ text: "CONTRATO DE CR\xC9DITO", bold: true }],
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
                      "Contrato de Cr\xE9dito Simple que celebran por una primera parte ",
                      { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" ', bold: true },
                      "el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "FIDUCIARIO, ", bold: true },
                      "del ",
                      { text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California \u201CFONDOS BC\u201D ", bold: true },
                      "en lo sucesivo se le denomina el ",
                      { text: "FIDEICOMISO, ", bold: true },
                      "representado en este acto por el ",
                      { text: "Lic. Alfonso Ch\xE1vez P\xE9rez, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "apoderado legal; ", bold: true },
                      "y por una segunda parte, ",
                      { text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno}, `, bold: true },
                      "en lo sucesivo el ",
                      { text: "ACREDITADO, ", bold: true },
                      "y ",
                      { text: `${aval.nombre} ${aval.apellido_paterno} ${aval.apellido_materno}, `, bold: true },
                      "en su car\xE1cter de ",
                      { text: "AVAL. ", bold: true },
                      "Sujet\xE1ndose las partes al tenor de las siguientes declaraciones y cl\xE1usulas:"
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
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "D E C L A R A C I O N E S:", bold: true }
                    ],
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
                      { text: "I. ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ",
                      { text: "FIDUCIARIO, ", bold: true },
                      "por conducto de su apoderado legal, bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:\n\n"
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "I.I. ", bold: true },
                      "Que es una Instituci\xF3n de Cr\xE9dito Filial, constituida conforme a la legislaci\xF3n mexicana y que est\xE1 debidamente autorizada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico para actuar como instituci\xF3n de Banca M\xFAltiple. \n\n"
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
                      { text: "I.II. ", bold: true },
                      "Que es una Sociedad establecida conforme a la Ley de Instituciones de Cr\xE9dito, autorizada para llevar a cabo operaciones fiduciarias, comisiones y mandatos, de conformidad con lo dispuesto por el art\xEDculo 46, fracci\xF3n XV de la Ley de Instituciones de Cr\xE9dito; constituida debidamente en t\xE9rminos de la escritura p\xFAblica de diez de noviembre de mil novecientos noventa y cinco, otorgada bajo n\xFAmero 264186, del protocolo del notario p\xFAblico n\xFAmero 207 de la ciudad de M\xE9xico, Distrito Federal. \n\n"
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
                      { text: "I.III. ", bold: true },
                      "Que ha otorgado poder general para actos de administraci\xF3n, as\xED como para pleitos y cobranzas, en favor del Lic. Alfonso Ch\xE1vez P\xE9rez, seg\xFAn consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. \n\n"
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
                      { text: "I.IV. ", bold: true },
                      "Que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual. \n\n"
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
                      { text: "I.V. ", bold: true },
                      "Que los recursos monetarios de que dispone para otorgar el cr\xE9dito que se formaliza mediante el presente contrato, provienen del Poder Ejecutivo de Baja California por conducto del ",
                      { text: "FIDEICOMISO. \n\n", bold: true }
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
                      { text: "I.VI. ", bold: true },
                      "Que en t\xE9rminos del art\xEDculo 65 de la Ley de Instituciones de Cr\xE9dito, estimo la situaci\xF3n econ\xF3mica del acreditado y su calificaci\xF3n administrativa y moral en funci\xF3n de la informaci\xF3n y documentos proporcionados por este. \n\n"
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
                      { text: "1.VII ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE ", bold: true },
                      `que en `,
                      { text: `[________________________________________] `, bold: true },
                      "SESI\xD3N ",
                      { text: `[________________________________________] `, bold: true },
                      "2025 de fecha ",
                      { text: `${dia2} de ${mes2} del `, bold: true },
                      `2025 los miembros del Comit\xE9 T\xE9cnico y de distribuci\xF3n de fondos autorizaron el cr\xE9dito a favor del `,
                      { text: "ACREDITADO, ", bold: true },
                      "de acuerdo a la solicitud de cr\xE9dito y/o al resumen ejecutivo y/o proyecto de inversi\xF3n, e instruyendo la celebraci\xF3n del presente contrato, en apego a las Reglas de Operaci\xF3n vigentes del programa ",
                      { text: "\u201CTU IDEA TU NEGOCIO PFAE 2025\u201D, ", bold: true },
                      "con base en la declaraci\xF3n y cl\xE1usulas que m\xE1s adelante se consignan."
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
                      { text: "II. ", bold: true },
                      "Declara el ",
                      { text: "ACREDITADO, ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que: "
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "II.I. ", bold: true },
                      "Que es una persona f\xEDsica con actividad empresarial, dada de alta en el Registro Federal de Contribuyentes, seg\xFAn consta en la c\xE9dula de identificaci\xF3n fiscal ",
                      { text: `${acreditado.datos_personales?.identificacion_numero}, `, bold: true },
                      "con domicilio fiscal en C. ",
                      { text: `${acreditado.datos_personales?.colonia}, `, bold: true },
                      "Baja California; con domicilio particular, en el cual declara que tambi\xE9n puede ser notificado, el ubicado en ",
                      { text: `${acreditado.datos_personales?.calle}, ${acreditado.datos_personales?.no_exterior}, ${acreditado.datos_personales?.no_interior}, ${acreditado.datos_personales?.colonia}, ${acreditado.datos_personales?.localidad}, ${acreditado.datos_personales?.ciudades?.nombre} `, bold: true },
                      "Baja California, pudiendo en consecuencia entregar facturas de acuerdo a las leyes fiscales vigentes.",
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
                      { text: "II.II. ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${acreditado.datos_personales?.curp},`, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio.",
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
                      { text: "II.III. ", bold: true },
                      "Como parte de sus actividades empresariales, cuenta con un negocio denominado ",
                      { text: `${acreditado.negocios?.nombre}, `, bold: true },
                      "y su giro consiste en ",
                      { text: `${acreditado.negocios?.resumen_actividad_empresarial}, `, bold: true },
                      "cuyo monto de inversi\xF3n y dem\xE1s caracter\xEDsticas espec\xEDficas se detallan en la solicitud de cr\xE9dito, que ser\xE1 apoyado por el ",
                      { text: "ACREEDOR ", bold: true },
                      "mediante el patrimonio del ",
                      { text: "FIDEICOMISO. ", bold: true },
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
                      { text: "II.IV. ", bold: true },
                      "Que present\xF3 SOLICITUD DE CR\xC9DITO ante las autoridades administrativas del ",
                      { text: "FIDEICOMISO ", bold: true },
                      "y toda vez que dicha solicitud ha motivado el otorgamiento del cr\xE9dito objeto del presente contrato, bajo protesta de decir verdad manifiesta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica.",
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
                      { text: "II.V. ", bold: true },
                      "Que la informaci\xF3n presentada al ",
                      { text: "ACREDITANTE ", bold: true },
                      "para el otorgamiento de este cr\xE9dito, refleja de manera exacta y fiel su situaci\xF3n econ\xF3mica, por lo cual, no ha incurrido en alguno de los supuestos del art\xEDculo 112 de la Ley de Instituciones de Cr\xE9dito, que se refiere a las sanciones aplicables a las personas que con el prop\xF3sito de obtener cr\xE9ditos, proporcionen datos falsos a las instituciones de cr\xE9dito, manifestando que conoce el texto y alcance legal del precepto citado.\n",
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
                      { text: "II.VI ", bold: true },
                      "Manifiesta que previamente a la celebraci\xF3n del presente contrato el ACREDITANTE le ha informado el contenido y alcance del mismo, los cargos, comisiones o gastos que se generen por el cr\xE9dito, que en su caso se otorgue y los descuentos o bonificaciones a los que tendr\xE1 derecho.",
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
                      { text: "II.VII ", bold: true },
                      "A la fecha de la firma de este instrumento, no tiene conocimiento de enfermedad o padecimiento alguno que pueda provocar incapacidad f\xEDsica o jur\xEDdica, por lo que no se encuentra en ninguno los supuestos que pudieran invalidar la celebraci\xF3n de este contrato.",
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
                      { text: "II.VIII. ", bold: true },
                      "No ejecuta obras, ni presta servicios en forma principal o exclusiva para el Poder Ejecutivo de Baja California.",
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
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "III. ", bold: true },
                      "Declara ",
                      { text: "AVAL ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que: ",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "III.I. ", bold: true },
                      `Es una persona f\xEDsica de nacionalidad mexicana acredit\xE1ndolo con identificaci\xF3n oficial n\xFAmero `,
                      { text: `${aval.identificacion_numero}, `, bold: true },
                      `la cual es vigente a la fecha y que se anexa al presente contrato, con domicilio ubicado en `,
                      { text: `${aval.colonia}, ${aval.calle}, ${aval.localidad}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.ciudades?.nombre}, `, bold: true },
                      "n\xFAmero(s) telef\xF3nicos ",
                      { text: `${aval?.telefonos_personales?.map((t) => `${t.numero} (${t.tipo})`).join(", ")}, `, bold: true },
                      "y correo electr\xF3nico ",
                      { text: `${aval.email}, `, bold: true },
                      "para ser requerido y/o notificado."
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
                      { text: "III.II ", bold: true },
                      "Que es econ\xF3micamente solvente para responder de las obligaciones que deriven del presente Contrato; as\xED como que es consciente de que la informaci\xF3n presentada a las autoridades administrativas del FIDEICOMISO con motivo de la solicitud de cr\xE9dito y la integraci\xF3n del expediente respectivo, son base y motivo para el otorgamiento del cr\xE9dito al tenor del presente Contrato, por lo que, bajo protesta de decir verdad, manifiesta que est\xE1 en aptitud de cumplir oportunamente con todas y cada una de las obligaciones consignadas en el presente contrato, dado que al momento de la firma del presente instrumento no existe situaci\xF3n adversa que afecte de manera significativa su condici\xF3n financiera o sus operaciones."
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
                      { text: "III.III ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${aval.curp} `, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio."
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
                      { text: "III.IV ", bold: true },
                      "En t\xE9rminos del art\xEDculo 4\xB0 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, declara el ",
                      { text: "ACREDITADO ", bold: true },
                      "y ",
                      { text: "AVAL ", bold: true },
                      "que se constituyen expresamente, cada uno por s\xED, en referencias solidarias frente al ACREDITANTE para responder de manera ilimitada de las obligaciones que asumen."
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
                      { text: "IV. ", bold: true },
                      "Declaran ",
                      { text: "LAS PARTES ", bold: true },
                      "conjuntamente que: ",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "IV.I ", bold: true },
                      "No existe vinculante de HSBC M\xC9XICO y el ",
                      { text: "ACREDITADO ", bold: true },
                      "previa la celebraci\xF3n de este contrato."
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
                      { text: "IV.II ", bold: true },
                      "El representante legal de HSBC M\xC9XICO, explic\xF3 al ",
                      { text: "ACREDITADO, ", bold: true },
                      "los t\xE9rminos y condiciones definitivos de las cl\xE1usulas financieras, as\xED como las comisiones aplicables y dem\xE1s penas convencionales contenidas en este instrumento, manifestando el ",
                      { text: "ACREDITADO, ", bold: true },
                      "que dicha explicaci\xF3n ha sido de su entera satisfacci\xF3n."
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
                      { text: "IV.III ", bold: true },
                      "Que cuentan con la capacidad general para obligarse, as\xED como la suficiente para la celebraci\xF3n del presente contrato. As\xED mismo, declaran que es su voluntad celebrar el presente contrato y que para ello no media dolo, mala fe, error, lesi\xF3n ni cualquier otro vicio de la voluntad."
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
                      "Por lo anterior ",
                      { text: "LAS PARTES ", bold: true },
                      "se sujetan a las siguientes:"
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
                      { text: "C L \xC1 U S U L A S:", bold: true }
                    ],
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
                      { text: "PRIMERA.- OBJETO.- ", bold: true },
                      'Por medio del presente contrato, "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ',
                      { text: `ACREDITANTE, `, bold: true },
                      "otorga a favor de ",
                      { text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno}`, bold: true },
                      "en su car\xE1cter de ACREDITADO un cr\xE9dito hasta por la cantidad de ",
                      { text: `$${parseInt(`${inversiones}`)}.00 ( ${this.util.NumeroALetras2(`${parseInt(`${inversiones}`)}`)} 00/100 M N ), `, bold: true },
                      "el cual se dio a conocer por escrito al ",
                      { text: `ACREDITADO `, bold: true },
                      "mediante la car\xE1tula de este contrato, misma que debidamente firmada de aceptaci\xF3n por el ",
                      { text: `ACREDITADO `, bold: true },
                      "que forma parte integrante del presente contrato, mismo que se obliga a cubrir oportunamente la cantidad dispuesta con la periodicidad y plazos seleccionados."
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
                      "Este cr\xE9dito para fines administrativos se identifica como cr\xE9dito n\xFAmero ",
                      { text: `${credito.id}.`, bold: true }
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
                      { text: "SEGUNDA.- DISPOSICI\xD3N Y DESTINO DEL CR\xC9DITO.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE `, bold: true },
                      "otorga el cr\xE9dito al ",
                      { text: `ACREDITADO, `, bold: true },
                      "con objeto de que lo utilice en capital de trabajo, infraestructura, as\xED como maquinaria y equipo, todo ello en relaci\xF3n con el fin asentado en la solicitud de cr\xE9dito y/o el resumen ejecutivo y/o el proyecto de inversi\xF3n que motivaron la celebraci\xF3n del presente contrato."
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
                      "As\xED mismo, el acreditado podr\xE1 disponer del monto del cr\xE9dito dentro del plazo que para tal efecto le proporcione el ",
                      { text: `ACREDITANTE `, bold: true },
                      "y/o las autoridades administrativas del ",
                      { text: `FIDEICOMISO `, bold: true }
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
                      { text: "TERCERA.- PLAZO E INTERESES.- ", bold: true },
                      "El cr\xE9dito deber\xE1 ser cubierto por el ",
                      { text: `ACREDITADO `, bold: true },
                      "en m\xE1ximo treinta y seis meses. As\xED mismo, el cr\xE9dito se otorga con una tasa de ",
                      { text: "inter\xE9s ordinaria de 8.00% ", bold: true },
                      "(ocho punto cero por ciento) anual sobre el saldo insoluto m\xE1s I.V.A. A efecto de dar mayor claridad a las obligaciones derivadas de la presente cl\xE1usula y dem\xE1s relacionadas, a manera de ap\xE9ndice, se agrega la TABLA DE AMORTIZACI\xD3N respectiva."
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
                      { text: "CUARTA.- COMISI\xD3N POR APERTURA.- ", bold: true },
                      "La apertura del cr\xE9dito genera una ",
                      { text: "comisi\xF3n \xFAnica del 1.5% ", bold: true },
                      "(uno punto cinco por ciento) m\xE1s el 16% de I.V.A., que ser\xE1 descontada del importe del cr\xE9dito; en consecuencia, en el acto de la firma del presente acto jur\xEDdico, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "entrega al ",
                      { text: `ACREDITADO `, bold: true },
                      "transferencia bancaria por la cantidad de ",
                      { text: `$${inversiones_post_comision_e_iva} ( ${this.util.NumeroALetras2(inversiones_post_comision_e_iva)} 00/100 M N ), `, bold: true },
                      "expedido a favor del ",
                      { text: `ACREDITADO `, bold: true },
                      "y a cargo de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC. Por tanto, el ",
                      { text: `ACREDITADO `, bold: true },
                      "lo recibe en los t\xE9rminos y condiciones del presente contrato, otorgando al ",
                      { text: `ACREEDOR `, bold: true },
                      "el recibo m\xE1s amplio y firme que en derecho corresponda por la cantidad consignada en la cl\xE1usula primera."
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
                      { text: "QUINTA.- DE LOS PAGOS.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga a efectuar los pagos mensuales a que se refiere la cl\xE1usula TERCERA, \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
                      { text: `${credito.clabe_interbancaria} `, bold: true },
                      "a la cuenta bancaria de HSBC No 6231216641, as\xED mismo la clave interbancaria 021028062312166411."
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
                      "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el \xFAltimo d\xEDa de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
                      { text: `ACREDITANTE. `, bold: true },
                      "En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
                      { text: `ACREDITANTE `, bold: true },
                      "por s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: `FIDEICOMISO `, bold: true },
                      "para establecer otros mecanismos u otro(s) lugar(es) de pago, de lo cual ser\xE1 informado el ",
                      { text: `ACREDITADO. `, bold: true },
                      "La notificaci\xF3n de los cambios o modificaciones podr\xE1n ser por escrito o mediante mensaje de correo electr\xF3nico. En caso de que la notificaci\xF3n sea realizada por correo electr\xF3nico, el ",
                      { text: `ACREDITADO `, bold: true },
                      "podr\xE1 acudir, si as\xED lo desea, al domicilio del ",
                      { text: "ACREDITANTE ", bold: true },
                      "a notificarse por escrito. Los pagos que el ",
                      { text: `ACREDITADO `, bold: true },
                      "haga en relaci\xF3n con este contrato, s\xF3lo podr\xE1n acreditarse mediante el comprobante del dep\xF3sito bancario realizado a favor del patrimonio del ",
                      { text: `FIDEICOMISO.`, bold: true }
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
                      "Realizando el pago el ",
                      { text: `ACREDITANTE `, bold: true },
                      "deber\xE1 enviar copia del voucher del dep\xF3sito al correo electr\xF3nico de ",
                      { text: "cobranzabc@baja.gob.mx", style: "email" }
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas y no atender los pagos faltantes, se turnar\xE1 a un Despacho de Cobranza extrajudicial para la recuperaci\xF3n de saldos correspondientes. el ",
                      { text: `ACREDITADO `, bold: true },
                      "ser\xE1 boletinado a bur\xF3 de cr\xE9dito Federal en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.",
                      { text: "\n" },
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
                      { text: "SEXTA. TASA DE INTER\xC9S MORATORIA.-  ", bold: true },
                      "En caso de que los pagos no sean realizados oportunamente, se aplicar\xE1 una tasa de ",
                      { text: "inter\xE9s moratoria del 24% ", style: "tasa" },
                      "(Veinticuatro por ciento) m\xE1s I.V.A. El cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga verificativo el pago de dichas prestaciones. En el entendido de que cualquier abono se aplicar\xE1 primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital."
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
                      { text: "S\xC9PTIMA. VIGILANCIA.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE `, bold: true },
                      "por s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: `FIDEICOMISO, `, bold: true },
                      "podr\xE1 en cualquier momento verificar el exacto cumplimiento de las obligaciones que por el presente Contrato se han generado a cargo del ",
                      { text: `ACREDITADO `, bold: true },
                      "y el ",
                      { text: `AVAL. `, bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga a cubrir los gastos que se generen por dicha supervisi\xF3n, gastos de cobranza y los dem\xE1s que se generen en caso de su incumplimiento."
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
                      { text: "OCTAVA. ", bold: true },
                      "El ",
                      { text: "ACREDITADO", bold: true },
                      "se obliga a mantener cartel visible proporcionado por el FIDEICOMISO, a la vista dentro del negocio en el cual se especificar\xE1 que es beneficiario del Programa ",
                      { text: `EMPRENDE EMPRESARIAL PMAE 2025.`, bold: true }
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
                      { text: "NOVENA.- VIGENCIA. ", bold: true },
                      "El presente Contrato tendr\xE1 una vigencia de ",
                      { text: `${credito.inversiones_programas?.plazo_solicitado_meses} meses `, bold: true },
                      "de acuerdo al an\xE1lisis  y/o evaluaci\xF3n de la unidad dictaminadora,  contados a partir de la fecha de firma del mismo."
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
                    text: "No obstante su terminaci\xF3n, este contrato producir\xE1 todos sus efectos legales hasta tanto no se hayan liquidado en su totalidad las cantidades a su cargo.",
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
                      { text: "D\xC9CIMA.- RESTRICCI\xD3N Y DENUNCIA. ", bold: true },
                      "En t\xE9rminos del art\xEDculo 294 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, HSBC M\xC9XICO queda facultado para restringir el importe del Cr\xE9dito o el plazo en que tiene derecho al ",
                      { text: `ACREDITADO `, bold: true },
                      "a disponer de \xE9l, o ambos a la vez, o para denunciar el Contrato en cualquier tiempo, debiendo notificar al ",
                      { text: `ACREDITADO `, bold: true },
                      "en cualquier medio de contacto, as\xED mismo al ",
                      { text: `AVAL, `, bold: true },
                      "sin que sea necesario el cumplimiento de formalidades especiales."
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
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "y el ",
                      { text: "AVAL ", bold: true },
                      "aceptan que dicha notificaci\xF3n podr\xE1 realizarse por escrito o a trav\xE9s de cualquier medio electr\xF3nico o telecomunicativo derivado de la ciencia y la tecnolog\xEDa."
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
                      { text: "D\xC9CIMA PRIMERA. CAUSALES DE RESCISI\xD3N Y VENCIMIENTO ANTICIPADO.- ", bold: true },
                      "El ",
                      { text: "ACREDITANTE ", bold: true },
                      "podr\xE1 rescindir el presente contrato y dar por vencido anticipadamente el plazo para pagar el cr\xE9dito, as\xED como sus intereses ordinarios y moratorios generados, cuando el ACREDITADO incurra en cualquiera de los siguientes casos:"
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
                      { text: "I. ", bold: true },
                      "Si se presenta sin mediar justificaci\xF3n, un retraso de tres o m\xE1s meses en los pagos del cr\xE9dito, de acuerdo a los plazos y montos estipulados en la tabla de amortizaci\xF3n."
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
                      { text: "II. ", bold: true },
                      "Si se detecta que existi\xF3 falsedad o alteraci\xF3n en los documentos anexos a la solicitud de cr\xE9dito con el fin de obtener el beneficio."
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
                      { text: "III. ", bold: true },
                      "Si el ",
                      { text: `ACREDITADO `, bold: true },
                      "incumple cualquiera de las obligaciones derivadas del presente contrato y las leyes aplicables, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "podr\xE1 exigir ",
                      { text: `anticipadamente `, bold: true },
                      "el pago total del saldo pendiente de forma inmediata y el ",
                      { text: `ACREDITADO `, bold: true },
                      "responda por los da\xF1os y perjuicios causados, as\xED como gastos judiciales en su caso."
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
                      { text: "D\xC9CIMA SEGUNDA. AVAL.- ", bold: true },
                      "Por virtud del presente contrato, el AVAL se constituye como responsable junto con el ACREDITADO, respondiendo de manera directa, subsidiaria e ilimitada respecto de todas las obligaciones contra\xEDdas con el ACREDITANTE y el patrimonio del FIDEICOMISO, comprometi\xE9ndose a pagar de manera oportuna el importe total del cr\xE9dito y sus accesorios legales, en los mismos t\xE9rminos en que se encuentra obligado el ACREDITADO, de conformidad en lo dispuesto por el art\xEDculo 4 de la Ley de T\xEDtulos y Operaciones de Cr\xE9dito y art\xEDculo 1987, 1988 y 1989 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por los art\xEDculos 1862, 1863 y 1864 del C\xF3digo civil para el Estado de Baja California."
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas el ",
                      { text: `AVAL `, bold: true },
                      "ser\xE1 boletinado a bur\xF3 de cr\xE9dito federal en t\xE9rminos de la Ley para regular a las Sociedades de informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF Y PROFECO."
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
                      { text: "D\xC9CIMA TERCERA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "autoriza al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para que, si as\xED lo desea, inscriba el presente instrumento en el Registro P\xFAblico de la Propiedad de la ciudad de Mexicali, Baja California, sin que esto sea motiv\xF3 para que el ",
                      { text: `ACREDITADO `, bold: true },
                      "incumpla en las condiciones del presente instrumento."
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
                      { text: "D\xC9CIMA CUARTA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "y su ",
                      { text: `AVAL `, bold: true },
                      "otorgar\xE1n su consentimiento Expreso e irrevocable a el ",
                      { text: `ACREDITANTE `, bold: true },
                      "o cualquier persona jur\xEDdica para que conjunta o separadamente consulte, informe, reporte o divulgue toda la informaci\xF3n Financiera relevante al bur\xF3 de cr\xE9dito a efecto de conocer su desempe\xF1o como deudor, su capacidad de pago, o para valorar el riesgo futuro de concederle un cr\xE9dito."
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
                      { text: "D\xC9CIMA QUINTA.- PAGOS ANTICIPADOS Y PAGOS ADELANTADOS. ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "tendr\xE1 el derecho de efectuar pagos anticipados, ya sean totales o parciales, en cualquier momento durante la vigencia del presente contrato de cr\xE9dito, sin incurrir en penalizaciones por pago anticipado. En caso de pago anticipado total, el deudor quedar\xE1 liberado de todas las obligaciones restantes bajo este contrato, siempre y cuando el pago cubra la totalidad del saldo insoluto y cualquier inter\xE9s acumulado hasta la fecha del pago."
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
                    text: "El pago anticipado se aplicar\xE1 en forma exclusiva al saldo insoluto del principal, siempre y cuando el ACREDITADO est\xE9 al corriente en el pago de: a) el principal; b) los intereses ordinarios devengados, as\xED como; c) en su caso, las comisiones y cargos pactados.",
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
                      "Trat\xE1ndose de pagos anticipados que liquiden el saldo insoluto, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "eentregar\xE1 al ",
                      { text: `ACREDITADO `, bold: true },
                      "la documentaci\xF3n que resulte necesaria que lo exima de cualquier responsabilidad contra\xEDda en el presente contrato."
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
                      "Los pagos anticipados reducir\xE1n el plazo de este contrato, en virtud de que no se variar\xE1 el monto de cada una de las amortizaciones se\xF1aladas en el presente contrato. El hecho de que el ",
                      { text: `ACREDITADO `, bold: true },
                      "anticipe abonos a capital, no lo exime de la obligaci\xF3n de efectuar los pagos mensuales que est\xE1 obligada a cubrir."
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
                      { text: "D\xC9CIMA SEXTA.- CASO FORTUITO.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga al cumplimiento del presente contrato, aun en caso fortuito o fuerza mayor, en t\xE9rminos del art\xEDculo 2111 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por el art\xEDculo 1986 del C\xF3digo civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA S\xC9PTIMA.- CASO DE DEFUNCI\xD3N.- ", bold: true },
                      "Si falleciera el ",
                      { text: `ACREDITADO `, bold: true },
                      "se debe de notificar al ",
                      { text: `FIDEICOMISO `, bold: true },
                      "y entregar acta de defunci\xF3n original y copia para cotejo. En caso de cumplir con el requisito anterior, el acreditado y aval quedar\xE1n autom\xE1ticamente deslindados de toda responsabilidad contractual y se proceder\xE1 a la cancelaci\xF3n del cr\xE9dito de manera inmediata en capital, IVA e intereses ordinarios y moratorios que se hayan generado."
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
                      { text: "D\xC9CIMA OCTAVA.- NO CESI\xD3N.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "acepta que no podr\xE1 ceder o por cualquier otro medio transmitir los derechos y obligaciones que a su favor se deriven del presente contrato sin autorizaci\xF3n previa expresa del ",
                      { text: `ACREDITANTE `, bold: true },
                      "de conformidad en lo dispuesto en el art\xEDculo 2051 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria en el art\xEDculo 1926 del C\xF3digo Civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA NOVENA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "faculta de manera expresa al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para ceder, descontar o negociar, ante cualquier Instituci\xF3n de Cr\xE9dito del pa\xEDs, los derechos de cr\xE9dito derivados de este Contrato."
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
                      { text: "VIG\xC9SIMA.- DE LOS DOMICILIOS. ", bold: true }
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
                      "Que para efectos del presente Contrato, el ",
                      { text: `ACREDITANTE, `, bold: true },
                      "se\xF1ala como domicilio fiscal el ubicado en, Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010."
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
                      "Para efectos del presente contrato, el ",
                      { text: `ACREDITADO `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio fiscal `, bold: true },
                      "el ubicado en ",
                      { text: `${persona_fisica.datos_personales?.calle}, ${persona_fisica.datos_personales?.no_exterior}, ${persona_fisica.datos_personales?.no_interior}, ${persona_fisica.datos_personales?.colonia}, ${persona_fisica.datos_personales?.localidad}, ${persona_fisica.datos_personales?.ciudades?.nombre} `, bold: true }
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
                      "Para efecto del presente contrato, el ",
                      { text: `ACREDITADO `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio particular `, bold: true },
                      "el ubicado en ",
                      { text: `${persona_fisica.datos_personales?.calle}, ${persona_fisica.datos_personales?.no_exterior}, ${persona_fisica.datos_personales?.no_interior}, ${persona_fisica.datos_personales?.colonia}, ${persona_fisica.datos_personales?.localidad}, ${persona_fisica.datos_personales?.ciudades?.nombre} `, bold: true }
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
                      { text: "VIG\xC9SIMA PRIMERA.- TITULO EJECUTIVO, ", bold: true },
                      "en t\xE9rminos del art\xEDculo 68 de la Ley de Instituciones de Cr\xE9dito, el presente contrato, junto con los estados de cuenta certificados por el contador facultado de HSBC MEXICO, constituyen t\xEDtulo ejecutivo, sin necesidad de reconocimiento de firma, ni de ning\xFAn otro requisito."
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
                      { text: "VIG\xC9SIMA SEGUNDA.- DE LA EJECUCI\xD3N. ", bold: true },
                      "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente contrato a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles y quedando a potestad del ",
                      { text: `ACREDITANTE `, bold: true },
                      "la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca."
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
                      { text: `LE\xCDDO QUE FUE EL PRESENTE CONTRATO Y ACLARADOS SUS ALCANCES Y EFECTOS, LAS PARTES LO FIRMAN DE CONFORMIDAD EN LA CIUDAD DE MEXICALI, BAJA CALIFORNIA A ${dia2} DE ${mes2} DEL 2025.`, bold: true }
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
                      { text: "POR EL ACREEDOR", bold: true },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2",
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
                    text: "______________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `Lic. ALFONSO CH\xC1VEZ P\xC9REZ`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `En su car\xE1cter de apoderado Legal de`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple,`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"`,
                    alignment: "center",
                    style: "body2"
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
                      { text: "EL ACREDITADO", bold: true }
                    ],
                    alignment: "center",
                    style: "headerNot2"
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
                    text: "____________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `${acreditado.datos_personales?.calle}, ${acreditado.datos_personales?.no_exterior}, ${acreditado.datos_personales?.no_interior}, ${acreditado.datos_personales?.colonia}, ${acreditado.datos_personales?.localidad}, ${acreditado.datos_personales?.ciudades?.nombre}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `TEL. 6161056719`,
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "body2"
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
                      { text: "EL AVAL", bold: true }
                    ],
                    alignment: "center",
                    style: "headerNot2"
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
                    text: "____________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${aval?.nombre} ${aval?.apellido_paterno} ${aval?.apellido_materno}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `${aval.colonia}, ${aval.calle}, ${aval.localidad}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.ciudades?.nombre}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `TEL. 6161056719`,
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `Testigos`,
                      { text: "\n" },
                      { text: "\n" }
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
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 50, "*"],
              body: [
                [
                  {
                    text: "_______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "_______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: "CP. ADRIANA SOFIA CORNEJO PORRAS \n COORDINADOR ADMINISTRATIVO",
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `LIC. DALIA IRIS MABEL GODOY TAPIA 
 COORDINADOR DE JUR\xCDDICO`,
                    alignment: "center",
                    style: "body2"
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
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
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
      pdfMake2.createPdf(defDoc).open();
    });
  }
};
_ContratoCreditoTTNService.\u0275fac = function ContratoCreditoTTNService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratoCreditoTTNService)(\u0275\u0275inject(UtilsService2));
};
_ContratoCreditoTTNService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratoCreditoTTNService, factory: _ContratoCreditoTTNService.\u0275fac, providedIn: "any" });
var ContratoCreditoTTNService = _ContratoCreditoTTNService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoCreditoTTNService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_credito_etm.service.ts
var pdfMake3 = __toESM(require_pdfmake());
var pdfFonts3 = __toESM(require_vfs_fonts());
var import_dayjs3 = __toESM(require_dayjs_min());
var import_customParseFormat3 = __toESM(require_customParseFormat());
pdfMake3.addVirtualFileSystem(pdfFonts3);
import_dayjs3.default.extend(import_customParseFormat3.default);
import_dayjs3.default.locale("es");
var _ContratoCreditoETMService = class _ContratoCreditoETMService {
  constructor(util, headers) {
    this.util = util;
    this.headers = headers;
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
  contratoCreditoETM(credito) {
    return __async(this, null, function* () {
      const persona_moral = credito?.datos_personas_morales;
      const aval = credito?.datos_personales;
      const programa_inversion = credito?.inversiones_programas;
      const inversiones = credito?.inversiones_programas?.inversion_tipos.reduce((sum, tipo) => {
        return sum + tipo.inversiones_tipos_detalles.reduce((acc, item) => {
          return acc + item.monto_solicitado;
        }, 0);
      }, 0);
      console.log(credito);
      const inscripcion_rppc = new Date(persona_moral.acta_constitutiva?.fecha_inscripcion_rppc);
      const escritura = new Date(persona_moral.acta_constitutiva?.fecha_escritura);
      const fecha_inscripcion_escritura = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(escritura);
      const fecha_inscripcion_rppc = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(inscripcion_rppc);
      const utcDate = /* @__PURE__ */ new Date();
      const date = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1e3);
      const dia = date.toLocaleDateString("es", {
        day: "2-digit"
      });
      const mes = date.toLocaleDateString("es", {
        month: "long"
      });
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [10, 15, 10, 5],
        content: [
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
                    text: [{ text: "CONTRATO DE CREDITO", bold: true }],
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
                      "Contrato de Cr\xE9dito Simple que celebran por una primera parte ",
                      { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria ', bold: true },
                      "el ",
                      { text: "ACREDITANTE ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "FIDUCIARIO ", bold: true },
                      "del ",
                      { text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California \u201CFONDOS BC\u201D ", bold: true },
                      "en lo sucesivo se le denomina el",
                      { text: "FIDEICOMISO ", bold: true },
                      "representado en este acto por el, ",
                      { text: "Lic. Alfonso Ch\xE1vez P\xE9rez, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "apoderado legal; ", bold: true },
                      "y por una segunda parte, ",
                      { text: `${persona_moral.razon_social} `, bold: true },
                      "por conducto de su representante legal ",
                      { text: `${persona_moral.representante_legal?.nombre} ${persona_moral.representante_legal?.apellido_paterno} ${persona_moral.representante_legal?.apellido_materno} `, bold: true },
                      "en lo sucesivo el ",
                      { text: "ACREDITADO, ", bold: true },
                      "y ",
                      { text: `${aval.nombre} ${aval.apellido_paterno} ${aval.apellido_materno}`, bold: true },
                      "en su car\xE1cter de AVAL. Sujet\xE1ndose las partes al tenor de las siguientes declaraciones y cl\xE1usulas: "
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
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "D E C L A R A C I O N E S:", bold: true }
                    ],
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
                      { text: "I. ", bold: true },
                      "Declara el",
                      { text: "ACREDITANTE ", bold: true },
                      "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ",
                      { text: "FIDUCIARIO, ", bold: true },
                      "por conducto de su apoderado legal, bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:\n\n"
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "I.I ", bold: true },
                      "Que es una Instituci\xF3n de Cr\xE9dito Filial, constituida conforme a la legislaci\xF3n mexicana y que est\xE1 debidamente autorizada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico para actuar como instituci\xF3n de Banca M\xFAltiple. \n\n"
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
                      { text: "I.II ", bold: true },
                      "Que es una Sociedad establecida conforme a la Ley de Instituciones de Cr\xE9dito, autorizada para llevar a cabo operaciones fiduciarias, comisiones y mandatos, de conformidad con lo dispuesto por el art\xEDculo 46, fracci\xF3n XV de la Ley de Instituciones de Cr\xE9dito; constituida debidamente en t\xE9rminos de la escritura p\xFAblica de diez de noviembre de mil novecientos noventa y cinco, otorgada bajo n\xFAmero 264186, del protocolo del notario p\xFAblico n\xFAmero 207 de la ciudad de M\xE9xico, Distrito Federal. \n\n"
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
                      { text: "I.III ", bold: true },
                      "Que ha otorgado poder general para actos de administraci\xF3n, as\xED como para pleitos y cobranzas, en favor del Lic. Alfonso Ch\xE1vez P\xE9rez, seg\xFAn consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. \n\n"
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
                      { text: "I.IV ", bold: true },
                      "Que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual. \n\n"
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
                      { text: "I.V ", bold: true },
                      "Que los recursos monetarios de que dispone para otorgar el cr\xE9dito que se formaliza mediante el presente contrato, provienen del Poder Ejecutivo de Baja California por conducto del ",
                      { text: "FIDEICOMISO.\n\n", bold: true }
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
                      { text: "I.VI ", bold: true },
                      "Que en t\xE9rminos del art\xEDculo 65 de la Ley de Instituciones de Cr\xE9dito, estimo la situaci\xF3n econ\xF3mica del acreditado y su calificaci\xF3n administrativa y moral en funci\xF3n de la informaci\xF3n y documentos proporcionados por este. \n\n"
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
                      { text: "1.VII ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE ", bold: true },
                      `que en `,
                      { text: `[________________________________________] `, bold: true },
                      "SESI\xD3N ",
                      { text: `[________________________________________] `, bold: true },
                      "2025 de fecha ",
                      { text: `${dia} de ${mes} del `, bold: true },
                      `2025 los miembros del Comit\xE9 T\xE9cnico y de distribuci\xF3n de fondos autorizaron el cr\xE9dito a favor del `,
                      { text: "ACREDITADO, ", bold: true },
                      "de acuerdo a la solicitud de cr\xE9dito y/o al resumen ejecutivo y/o proyecto de inversi\xF3n, e instruyendo la celebraci\xF3n del presente contrato, en apego a las Reglas de Operaci\xF3n vigentes del programa ",
                      { text: "EMPRENDE TRADICIONAL PFAE 2025, ", bold: true },
                      "con base en la declaraci\xF3n y cl\xE1usulas que m\xE1s adelante se consignan."
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
                      { text: "II. ", bold: true },
                      "Declara el ",
                      { text: "ACREDITADO por conducto de su representante legal, ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "II.I ", bold: true },
                      "Que es una persona moral constituida conforme a las leyes mexicanas vigentes, mediante escritura p\xFAblica de fecha ",
                      { text: `${fecha_inscripcion_escritura}, `, bold: true },
                      "otorgada bajo n\xFAmero ",
                      { text: `${persona_moral.acta_constitutiva?.numero_escritura}, `, bold: true },
                      "volumen ",
                      { text: `${persona_moral.acta_constitutiva?.volumen_escritura}, `, bold: true },
                      "ante el protocolo del notario p\xFAblico n\xFAmero ",
                      { text: `${persona_moral.acta_constitutiva?.numero_notario}, `, bold: true },
                      "de la ciudad M\xE9xico, inscrita en el Registro P\xFAblico de la Propiedad y Comercio bajo inscripci\xF3n de fecha ",
                      { text: `${fecha_inscripcion_rppc}, `, bold: true },
                      "que contiene la constituci\xF3n de la sociedad denominada ",
                      { text: `${persona_moral.razon_social},`, bold: true },
                      "con Registro Federal de Contribuyentes ",
                      { text: `${persona_moral.representante_legal?.rfc}, `, bold: true },
                      "se\xF1alando como domicilio fiscal el ubicado en ",
                      { text: `${persona_moral.acta_constitutiva?.ciudad_rppc}, ${persona_moral.acta_constitutiva?.estado_rppc}, `, bold: true },
                      "el cual declara puede ser notificado; pudiendo en consecuencia entregar las facturas de acuerdo a las leyes fiscales vigentes.",
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
                      { text: "II.II ", bold: true },
                      "Que su representante legal el C. ",
                      { text: `${persona_moral.representante_legal?.nombre} ${persona_moral.representante_legal?.apellido_paterno} ${persona_moral.representante_legal?.apellido_materno}. `, bold: true },
                      `cuenta con la capacidad suficiente y se encuentra debidamente facultado para la celebraci\xF3n del presente Contrato, seg\xFAn consta en la escritura p\xFAblica n\xFAmero `,
                      { text: `${persona_moral.acta_constitutiva?.numero_escritura}, `, bold: true },
                      "pasada ante la fe P\xFAblica del Notario P\xFAblico No. ",
                      { text: `${persona_moral.acta_constitutiva?.numero_notario} `, bold: true },
                      "de la ciudad ",
                      { text: `${persona_moral.acta_constitutiva?.ciudad_notario}.`, bold: true },
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
                      { text: "II.III ", bold: true },
                      "El representante legal manifiesta bajo protesta de decir verdad que las facultades con las que comparece a la firma del presente Contrato no le han sido revocadas ni modificadas de forma alguna.",
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
                      { text: "II.IV ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${persona_moral.representante_legal?.curp} `, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio.",
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
                      { text: "II.V ", bold: true },
                      "Como parte de sus actividades empresariales, cuenta con un negocio denominado ",
                      { text: `${persona_moral.razon_social}, `, bold: true },
                      "y su giro consiste en ",
                      { text: `${persona_moral.resumen_actividad_empresarial}, `, bold: true },
                      "cuyo monto de inversi\xF3n y dem\xE1s caracter\xEDsticas espec\xEDficas se detallan en la solicitud de cr\xE9dito, que ser\xE1 apoyado por el ACREEDOR mediante el patrimonio del ",
                      { text: `FIDEICOMISO.
`, bold: true }
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
                      { text: "II.VI ", bold: true },
                      "Que present\xF3 SOLICITUD DE CR\xC9DITO ante las autoridades administrativas del ",
                      { text: `FIDEICOMISO, `, bold: true },
                      "y toda vez que dicha solicitud ha motivado el otorgamiento del CR\xC9DITO objeto del presente contrato, bajo protesta de decir verdad manifiesta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica.\n"
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
                      { text: "II.VII ", bold: true },
                      "Que la informaci\xF3n presentada al ",
                      { text: `ACREDITANTE, `, bold: true },
                      "para el otorgamiento de este cr\xE9dito, refleja de manera exacta y fiel su situaci\xF3n econ\xF3mica, por lo cual, no ha incurrido en alguno de los supuestos del art\xEDculo 112 de la Ley de Instituciones de Cr\xE9dito, que se refiere a las sanciones aplicables a las personas que con el prop\xF3sito de obtener cr\xE9ditos, proporcionen datos falsos a las instituciones de cr\xE9dito, manifestando que conoce el texto y alcance legal del precepto citado."
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
                      { text: "II.VIII ", bold: true },
                      "Manifiesta que previamente a la celebraci\xF3n del presente contrato el ",
                      { text: `ACREDITANTE, `, bold: true },
                      "le ha informado el contenido y alcance del mismo, los cargos, comisiones o gastos que se generen por el cr\xE9dito, que en su caso se otorgue y los descuentos o bonificaciones a los que tendr\xE1 derecho."
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
                      { text: "II.IX ", bold: true },
                      "A la fecha de la firma de este instrumento, no tiene conocimiento de enfermedad o padecimiento alguno que pueda provocar incapacidad f\xEDsica o jur\xEDdica, por lo que no se encuentra en ninguno los supuestos que pudieran invalidar la celebraci\xF3n de este contrato.",
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
                      { text: "II.X ", bold: true },
                      "No ejecuta obras, ni presta servicios en forma principal o exclusiva para el Poder Ejecutivo de Baja California.",
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
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "III. ", bold: true },
                      "Declara el ",
                      { text: "AVAL ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "III.I ", bold: true },
                      `Es una persona f\xEDsica de nacionalidad mexicana acredit\xE1ndolo con identificaci\xF3n oficial n\xFAmero `,
                      { text: `${aval.identificacion_numero}, `, bold: true },
                      "la cual es vigente a la fecha y que se anexa al presente contrato, con domicilio ubicado en  ",
                      { text: `${aval.colonia}, ${aval.calle}, ${aval.localidad}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.ciudades?.nombre}, ${aval.ciudad_id},`, bold: true },
                      "n\xFAmero(s) telef\xF3nicos ",
                      { text: `${aval?.telefonos_personales?.map((t) => `${t.numero} (${t.tipo})`).join(", ")}, `, bold: true },
                      "y correo electr\xF3nico ",
                      { text: `${aval.email}, `, bold: true },
                      "para ser requerido y/o notificado."
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
                      { text: "III.II ", bold: true },
                      "Que es econ\xF3micamente solvente para responder de las obligaciones que deriven del presente Contrato; as\xED como que es consciente de que la informaci\xF3n presentada a las autoridades administrativas del FIDEICOMISO con motivo de la solicitud de cr\xE9dito y la integraci\xF3n del expediente respectivo, son base y motivo para el otorgamiento del cr\xE9dito al tenor del presente Contrato, por lo que, bajo protesta de decir verdad, manifiesta que est\xE1 en aptitud de cumplir oportunamente con todas y cada una de las obligaciones consignadas en el presente contrato, dado que al momento de la firma del presente instrumento no existe situaci\xF3n adversa que afecte de manera significativa su condici\xF3n financiera o sus operaciones."
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
                      { text: "III.III ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${aval.curp} `, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio."
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
                      { text: "III.IV ", bold: true },
                      "En t\xE9rminos del art\xEDculo 4\xB0 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, declara el ",
                      { text: "ACREDITADO ", bold: true },
                      "y ",
                      { text: "AVAL ", bold: true },
                      "que se constituyen expresamente, cada uno por s\xED, en referencias solidarias frente al ",
                      { text: "ACREDITANTE ", bold: true },
                      "para responder de manera ilimitada de las obligaciones que asumen."
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
                      { text: "IV. ", bold: true },
                      "Declaran ",
                      { text: "LAS PARTES ", bold: true },
                      "conjuntamente que:",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "IV.I ", bold: true },
                      "No existe vinculante de HSBC M\xC9XICO y el ",
                      { text: "ACREDITADO ", bold: true },
                      "previa la celebraci\xF3n de este contrato."
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
                      { text: "IV.II ", bold: true },
                      "El representante legal de HSBC M\xC9XICO, explic\xF3 al ",
                      { text: "ACREDITADO ", bold: true },
                      "los t\xE9rminos y condiciones definitivos de las cl\xE1usulas financieras, as\xED como las comisiones aplicables y dem\xE1s penas convencionales contenidas en este instrumento, manifestando el ",
                      { text: "ACREDITADO, ", bold: true },
                      "que dicha explicaci\xF3n ha sido de su entera satisfacci\xF3n."
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
                      { text: "V. ", bold: true },
                      "Que cuentan con las autorizaciones, facultades y capacidad general para obligarse, ",
                      { text: "las cuales no han sido revocadas ", bold: true },
                      "a la fecha de celebraci\xF3n del presente contrato. As\xED mismo, declaran que es su voluntad celebrar el presente contrato y que para ello no media dolo, mala fe, error, lesi\xF3n ni cualquier otro vicio de la voluntad."
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
                      "Por lo anterior ",
                      { text: "LAS PARTES ", bold: true },
                      "se sujetan a las siguientes:\n\n"
                    ],
                    style: "body1"
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
                      { text: "C L \xC1 U S U L A S:", bold: true }
                    ],
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
                      { text: "PRIMERA.- OBJETO.- ", bold: true },
                      'Por medio del presente contrato, "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ACREDITANTE, otorga a favor de la moral, representada por el ',
                      { text: `C. ${persona_moral.representante_legal?.nombre} ${persona_moral.representante_legal?.apellido_paterno} ${persona_moral.representante_legal?.apellido_materno} `, bold: true },
                      "en su car\xE1cter de ACREDITADO, un cr\xE9dito hasta por la cantidad de ",
                      { text: `$${inversiones.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })} ( ${this.util.NumeroALetras2(inversiones)} 00/100 MN )`, bold: true },
                      "el cual se dio a conocer por escrito al ACREDITADO mediante la car\xE1tula de este contrato, misma que debidamente firmada de aceptaci\xF3n por el ACREDITADO que forma parte integrante del presente contrato, mismo que se obliga a cubrir oportunamente la cantidad dispuesta con la periodicidad y plazos seleccionados."
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
                      "Este cr\xE9dito para fines administrativos se identifica como cr\xE9dito n\xFAmero ",
                      { text: `${credito.id}.`, bold: true }
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
                      { text: "SEGUNDA.- DISPOSICI\xD3N Y DESTINO DEL CR\xC9DITO.- ", bold: true },
                      "El ",
                      { text: "ACREDITANTE ", bold: true },
                      "otorga el cr\xE9dito al ",
                      { text: "ACREDITADO, ", bold: true },
                      "con objeto de que lo utilice en capital de trabajo, infraestructura, as\xED como maquinaria y equipo, todo ello en relaci\xF3n con el fin asentado en la solicitud de cr\xE9dito y/o el resumen ejecutivo y/o el proyecto de inversi\xF3n que motivaron la celebraci\xF3n del presente contrato."
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
                      "As\xED mismo, el acreditado podr\xE1 disponer del monto del cr\xE9dito dentro del plazo que para tal efecto le proporcione el ",
                      { text: "ACREDITANTE ", bold: true },
                      "y/o las autoridades administrativas del ",
                      { text: "FIDEICOMISO. ", bold: true }
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
                      { text: "TERCERA.- PLAZO E INTERESES.- ", bold: true },
                      "El cr\xE9dito deber\xE1 ser cubierto por el ",
                      { text: "ACREDITADO ", bold: true },
                      "en m\xE1ximo ",
                      { text: `${programa_inversion.plazo_solicitado_meses} `, bold: true },
                      "meses. As\xED mismo, el cr\xE9dito se otorga con una tasa de ",
                      { text: "inter\xE9s ordinaria de 8.00% ", bold: true },
                      "(ocho punto cero por ciento) anual sobre el saldo insoluto m\xE1s I.V.A. A efecto de dar mayor claridad a las obligaciones derivadas de la presente cl\xE1usula y dem\xE1s relacionadas, a manera de ap\xE9ndice, se agrega la TABLA DE AMORTIZACI\xD3N respectiva."
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
                      { text: "CUARTA.- COMISI\xD3N POR APERTURA.- ", bold: true },
                      "La apertura del cr\xE9dito genera una ",
                      { text: "comisi\xF3n \xFAnica del 1.5% ", bold: true },
                      "(uno punto cinco por ciento) m\xE1s el 16% de I.V.A., que ser\xE1 descontada del importe del cr\xE9dito; en consecuencia, en el acto de la firma del presente acto jur\xEDdico, el ",
                      { text: "ACREDITANTE ", bold: true },
                      "entrega al ",
                      { text: "ACREDITADO ", bold: true },
                      "transferencia bancaria por la cantidad de ",
                      { text: `$${inversiones - inversiones * 0.015} ( ${this.util.NumeroALetras2(inversiones - inversiones * 0.015)} 00/100 M N ), `, bold: true },
                      "expedido a favor del ",
                      { text: "ACREDITADO ", bold: true },
                      "y a cargo de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC. Por tanto, el ",
                      { text: "ACREDITADO ", bold: true },
                      "lo recibe en los t\xE9rminos y condiciones del presente contrato, otorgando al ",
                      { text: "ACREEDOR ", bold: true },
                      "el recibo m\xE1s amplio y firme que en derecho corresponda por la cantidad consignada en la cl\xE1usula primera."
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
                      { text: "QUINTA.- DE LOS PAGOS.- ", bold: true },
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "se obliga a efectuar los pagos mensuales a que se refiere la cl\xE1usula TERCERA, \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
                      { text: `${credito.clabe_interbancaria} `, bold: true },
                      "a la cuenta bancaria de HSBC No 6231216641, as\xED mismo la clave interbancaria 021028062312166411."
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
                      "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el \xFAltimo d\xEDa de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "por s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: "FIDEICOMISO, ", bold: true },
                      "para establecer otros mecanismos u otro(s) lugar(es) de pago, de lo cual ser\xE1 informado el ",
                      { text: "ACREDITADO ", bold: true },
                      "La notificaci\xF3n de los cambios o modificaciones podr\xE1n ser por escrito o mediante mensaje de correo electr\xF3nico. En caso de que la notificaci\xF3n sea realizada por correo electr\xF3nico, el ",
                      { text: "ACREDITADO ", bold: true },
                      "podr\xE1 acudir, si as\xED lo desea, al domicilio del ",
                      { text: "ACREDITANTE ", bold: true },
                      "a notificarse por escrito. Los pagos que el ",
                      { text: "ACREDITADO ", bold: true },
                      "haga en relaci\xF3n con este contrato, s\xF3lo podr\xE1n acreditarse mediante el comprobante del dep\xF3sito bancario realizado a favor del patrimonio del ",
                      { text: "FIDEICOMISO ", bold: true }
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
                      "Realizando el pago el ",
                      { text: "ACREDITANTE ", bold: true },
                      "deber\xE1 enviar copia del voucher del dep\xF3sito al correo electr\xF3nico de ",
                      { text: "cobranzabc@baja.gob.mx", style: "email" }
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas el Acreditado ser\xE1 boletinado a bur\xF3 de cr\xE9dito Federal en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.",
                      { text: "\n" },
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
                      { text: "SEXTA. TASA DE INTER\xC9S MORATORIA.- ", bold: true },
                      "En caso de que los pagos no sean realizados oportunamente, se aplicar\xE1 una tasa de ",
                      { text: "inter\xE9s moratoria del 24% ", bold: true },
                      "(Veinticuatro por ciento) m\xE1s I.V.A. El cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga verificativo el pago de dichas prestaciones. En el entendido de que cualquier abono se aplicar\xE1 primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital."
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
                      { text: "SEPTIMA. VIGILANCIA.- ", bold: true },
                      "El ACREDITANTE, por s\xED o a trav\xE9s de las autoridades administrativas del FIDEICOMISO, podr\xE1 en cualquier momento veri\uFB01car el exacto cumplimiento de las obligaciones que por el presente Contrato se han generado a cargo del ACREDITADO y el AVAL. El ACREDITADO se obliga a cubrir los gastos que se generen por dicha supervisi\xF3n, gastos de cobranza y los dem\xE1s que se generen en caso de su incumplimiento."
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
                      { text: "OCTAVA. ", bold: true },
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "se obliga a mantener cartel visible proporcionado por el FIDEICOMISO, a la vista dentro del negocio en el cual se especificar\xE1 que es beneficiario del Programa ",
                      { text: "EMPRENDE EMPRESARIAL PFAE 2025.", bold: true }
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
                      { text: "NOVENA.- VIGENCIA. ", bold: true },
                      "El presente Contrato tendr\xE1 una vigencia de ",
                      { text: `${programa_inversion.plazo_solicitado_meses} meses`, bold: true },
                      "contados a partir de la fecha de firma del mismo."
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
                    text: "No obstante su terminaci\xF3n, este contrato producir\xE1 todos sus efectos legales hasta tanto no se hayan liquidado en su totalidad las cantidades a su cargo.",
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
                      { text: "D\xC9CIMA.- RESTRICCI\xD3N Y DENUNCIA. ", bold: true },
                      "En t\xE9rminos del art\xEDculo 294 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, HSBC M\xC9XICO queda facultado para restringir el importe del Cr\xE9dito o el plazo en que tiene derecho al ",
                      { text: "ACREDITADO ", bold: true },
                      "a disponer de \xE9l, o ambos a la vez, o para denunciar el Contrato en cualquier tiempo, debiendo notificar al ",
                      { text: "ACREDITADO ", bold: true },
                      "en cualquier medio de contacto, as\xED mismo al ",
                      { text: "AVAL, ", bold: true },
                      "sin que sea necesario el cumplimiento de formalidades especiales."
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
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "y el ",
                      { text: "AVAL ", bold: true },
                      "aceptan que dicha notificaci\xF3n podr\xE1 realizarse por escrito o a trav\xE9s de cualquier medio electr\xF3nico o telecomunicativo derivado de la ciencia y la tecnolog\xEDa."
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
                      { text: "D\xC9CIMA PRIMERA. CAUSALES DE RESCISI\xD3N Y VENCIMIENTO ANTICIPADO.- ", bold: true },
                      "El ",
                      { text: "ACREDITANTE ", bold: true },
                      "podr\xE1 rescindir el presente contrato y dar por vencido anticipadamente el plazo para pagar el cr\xE9dito, as\xED como sus intereses ordinarios y moratorios generados, cuando el ",
                      { text: "ACREDITADO ", bold: true },
                      "incurra en cualquiera de los siguientes casos:"
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
                      { text: "I. ", bold: true },
                      "Si se presenta sin mediar justificaci\xF3n, un retraso de tres o m\xE1s meses en los pagos del cr\xE9dito, de acuerdo a los plazos y montos estipulados en la tabla de amortizaci\xF3n."
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
                      { text: "II. ", bold: true },
                      "Si se detecta que existi\xF3 falsedad o alteraci\xF3n en los documentos anexos a la solicitud de cr\xE9dito con el fin de obtener el beneficio."
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
                      { text: "III. ", bold: true },
                      "Si el ",
                      { text: "ACREDITADO ", bold: true },
                      "incumple cualquiera de las obligaciones derivadas del presente contrato y las leyes aplicables, el ",
                      { text: "ACREDITANTE ", bold: true },
                      "podr\xE1 exigir ",
                      { text: "anticipadamente ", bold: true },
                      "el pago total del saldo pendiente de forma inmediata y el ",
                      { text: "ACREDITADO ", bold: true },
                      "responda por los da\xF1os y perjuicios causados, as\xED como gastos judiciales en su caso."
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
                      { text: "D\xC9CIMA SEGUNDA. AVAL.- ", bold: true },
                      "Por virtud del presente contrato, el ",
                      { text: "AVAL ", bold: true },
                      "se constituye como responsable junto con el ACREDITADO, respondiendo de manera directa, subsidiaria e ilimitada respecto de todas las obligaciones contra\xEDdas con el ACREDITANTE y el patrimonio del ",
                      { text: "FIDEICOMISO ", bold: true },
                      "comprometi\xE9ndose a pagar de manera oportuna el importe total del cr\xE9dito y sus accesorios legales, en los mismos t\xE9rminos en que se encuentra obligado el ",
                      { text: "ACREDITADO, ", bold: true },
                      "de conformidad en lo dispuesto por el art\xEDculo 4 de la Ley de T\xEDtulos y Operaciones de Cr\xE9dito y art\xEDculo 1987, 1988 y 1989 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por los art\xEDculos 1862, 1863 y 1864 del C\xF3digo civil para el Estado de Baja California."
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas el ",
                      { text: "AVAL ", bold: true },
                      "ser\xE1 boletinado a bur\xF3 de cr\xE9dito federal en t\xE9rminos de la Ley para regular a las Sociedades de informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF Y PROFECO."
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
                      { text: "D\xC9CIMA TERCERA.- ", bold: true },
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "autoriza al ",
                      { text: "ACREDITANTE ", bold: true },
                      "para que, si as\xED lo desea, inscriba el presente instrumento en el Registro P\xFAblico de la Propiedad de la ciudad de Mexicali, Baja California, sin que esto sea motiv\xF3 para que el ",
                      { text: "ACREDITADO ", bold: true },
                      "incumpla en las condiciones del presente instrumento."
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
                      { text: "D\xC9CIMA CUARTA.- ", bold: true },
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "y su ",
                      { text: "AVAL ", bold: true },
                      "otorgar\xE1n su consentimiento Expreso e irrevocable a el ",
                      { text: "ACREDITANTE ", bold: true },
                      "o cualquier persona jur\xEDdica para que conjunta o separadamente consulte, informe, reporte o divulgue toda la informaci\xF3n Financiera relevante al bur\xF3 de cr\xE9dito a efecto de conocer su desempe\xF1o como deudor, su capacidad de pago, o para valorar el riesgo futuro de concederle un cr\xE9dito."
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
                      { text: "D\xC9CIMA QUINTA.- PAGOS ANTICIPADOS Y PAGOS ADELANTADOS. ", bold: true },
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "tendr\xE1 el derecho de efectuar pagos anticipados, ya sean totales o parciales, en cualquier momento durante la vigencia del presente contrato de cr\xE9dito, sin incurrir en penalizaciones por pago anticipado. En caso de pago anticipado total, el deudor quedar\xE1 liberado de todas las obligaciones restantes bajo este contrato, siempre y cuando el pago cubra la totalidad del saldo insoluto y cualquier inter\xE9s acumulado hasta la fecha del pago."
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
                      "El pago anticipado se aplicar\xE1 en forma exclusiva al saldo insoluto del principal, siempre y cuando el ",
                      { text: "ACREDITADO ", bold: true },
                      "est\xE9 al corriente en el pago de: a) el principal; b) los intereses ordinarios devengados, as\xED como; c) en su caso, las comisiones y cargos pactados."
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
                      "Trat\xE1ndose de pagos anticipados que liquiden el saldo insoluto, el ",
                      { text: "ACREDITANTE ", bold: true },
                      "entregar\xE1 al ",
                      { text: "ACREDITADO ", bold: true },
                      "el carta finiquito y la documentaci\xF3n adicional que resulte necesaria que lo exima de cualquier responsabilidad contra\xEDda en el presente contrato."
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
                      "Los pagos anticipados reducir\xE1n el plazo de este contrato, en virtud de que no se variar\xE1 el monto de cada una de las amortizaciones se\xF1aladas en el presente contrato. El hecho de que el ",
                      { text: "ACREDITADO ", bold: true },
                      "anticipe abonos a capital, no lo exime de la obligaci\xF3n de efectuar los pagos mensuales que est\xE1 obligada a cubrir."
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
                      { text: "D\xC9CIMA SEXTA.- CASO FORTUITO.- ", bold: true },
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "se obliga al cumplimiento del presente contrato, aun en caso fortuito o fuerza mayor, en t\xE9rminos del art\xEDculo 2111 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por el art\xEDculo 1986 del C\xF3digo civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA S\xC9PTIMA.- CASO DE DEFUNCI\xD3N.- ", bold: true },
                      " Si falleciera el ",
                      { text: "ACREDITADO ", bold: true },
                      "se debe de notificar al ",
                      { text: "FIDEICOMISO ", bold: true },
                      "y entregar acta de defunci\xF3n original y copia para cotejo. En caso de cumplir con el requisito anterior, el acreditado y aval quedar\xE1n autom\xE1ticamente deslindados de toda responsabilidad contractual y se proceder\xE1 a la cancelaci\xF3n del cr\xE9dito de manera inmediata en capital, IVA e intereses ordinarios y moratorios que se hayan generado."
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
                      { text: "D\xC9CIMA OCTAVA.- NO CESI\xD3N. ", bold: true },
                      "El ",
                      { text: "ACREDITADO, ", bold: true },
                      "acepta que no podr\xE1 ceder o por cualquier otro medio transmitir los derechos y obligaciones que a su favor se deriven del presente contrato sin autorizaci\xF3n previa expresa del ",
                      { text: "ACREDITANTE ", bold: true },
                      "de conformidad en lo dispuesto en el art\xEDculo 2051 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria en el art\xEDculo 1926 del C\xF3digo Civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA NOVENA.- ", bold: true },
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "faculta de manera expresa al ",
                      { text: "ACREDITANTE ", bold: true },
                      "para ceder, descontar o negociar, ante cualquier Instituci\xF3n de Cr\xE9dito del pa\xEDs, los derechos de cr\xE9dito derivados de este Contrato."
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
                      { text: "VIG\xC9SIMA.- DE LOS DOMICILIOS. ", bold: true }
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
                      "Que para efectos del presente Contrato, el ",
                      { text: "ACREDITANTE, ", bold: true },
                      { text: `se\xF1ala como domicilio fiscal el ubicado en, Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010. `, bold: true }
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
                      "Que para efectos del presente Contrato, el ",
                      { text: "ACREDITADO, ", bold: true },
                      "se\xF1ala como ",
                      { text: "domicilio fiscal ", bold: true },
                      "el ubicado en ",
                      { text: `${persona_moral.colonia}, ${persona_moral.calle}, ${persona_moral.no_exterior}, ${persona_moral.no_interior}, ${persona_moral.localidad}, ${persona_moral.ciudades?.nombre} `, bold: true },
                      "Baja California, M\xE9xico, C.P. ",
                      { text: `${persona_moral.representante_legal?.codigo_postal}.`, bold: true }
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
                      "Que para efecto del presente Contrato, el ",
                      { text: "ACREDITADO, ", bold: true },
                      "se\xF1ala como ",
                      { text: "domicilio particular del representante legal ", bold: true },
                      "el ubicado en ",
                      { text: `${persona_moral.representante_legal?.colonia}, ${persona_moral.representante_legal?.calle}, ${persona_moral.representante_legal?.no_exterior}, ${persona_moral.representante_legal?.no_interior}, ${persona_moral.representante_legal?.localidad}, ${persona_moral.representante_legal?.ciudades?.nombre} `, bold: true },
                      "Baja California, M\xE9xico, C.P. ",
                      { text: `${persona_moral.representante_legal?.codigo_postal}.`, bold: true }
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
                      "Que para efecto del presente Contrato el ",
                      { text: "AVAL ", bold: true },
                      "se\xF1ala como ",
                      { text: "domicilio particular ", bold: true },
                      "el ubicado en ",
                      { text: `${aval.colonia}, ${aval.calle}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.localidad}, ${aval.ciudades?.nombre} `, bold: true },
                      "Baja California, M\xE9xico, C.P. ",
                      { text: `${aval.codigo_postal}.`, bold: true }
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
                      { text: "VIG\xC9SIMA PRIMERA.- T\xCDTULO EJECUTIVO, ", bold: true },
                      "en t\xE9rminos del art\xEDculo 68 de la Ley de Instituciones de Cr\xE9dito, el presente contrato, junto con los estados de cuenta certificados por el contador facultado de HSBC M\xC9XICO, constituyen t\xEDtulo ejecutivo, sin necesidad de reconocimiento de firma, ni de ning\xFAn otro requisito."
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
                      { text: "VIG\xC9SIMA SEGUNDA.- DE LA EJECUCI\xD3N. ", bold: true },
                      "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente contrato a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles y quedando a potestad del ",
                      { text: "ACREDITANTE ", bold: true },
                      "la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca."
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
                      "LE\xCDDO QUE FUE EL PRESENTE CONTRATO Y ACLARADOS SUS ALCANCES Y EFECTOS, LAS PARTES LO FIRMAN DE CONFORMIDAD EN LA CIUDAD DE MEXICALI, BAJA CALIFORNIA A ",
                      { text: `${dia} DE ${mes} DEL 2025.`, bold: true }
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
                      { text: "POR EL ACREEDOR", bold: true },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2",
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
                    text: "_______________________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `Lic. ALFONSO CH\xC1VEZ P\xC9REZ`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `En su car\xE1cter de apoderado Legal de`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple,`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"`,
                    alignment: "center",
                    style: "body2"
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
                      { text: "EL ACREDITADO", bold: true }
                    ],
                    alignment: "center",
                    style: "headerNot2"
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
                    text: "_______________________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${persona_moral.representante_legal?.nombre} ${persona_moral.representante_legal?.apellido_paterno} ${persona_moral.representante_legal?.apellido_materno}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `REPRESENTANTE LEGAL DE ${persona_moral.razon_social}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${persona_moral.colonia}, ${persona_moral.calle}, ${persona_moral.no_exterior}, ${persona_moral.no_interior}, ${persona_moral.localidad}, ${persona_moral.ciudades?.nombre}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `TEL. 6869053201,`,
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `EL AVAL`,
                      { text: "\n" }
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
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 300, "*"],
              body: [
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "_______________________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${aval.nombre} ${aval.apellido_paterno} ${aval.apellido_materno}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${aval.colonia}, ${aval.calle}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.localidad}, ${aval.ciudades?.nombre}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `TEL. 6862163203,`,
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
          },
          "\n",
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 60, "*"],
              body: [
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `TESTIGOS`,
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
          "\n",
          "\n",
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 50, "*"],
              body: [
                [
                  {
                    text: "______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: `CP. ADRIANA SOFIA CORNEJO PORRAS`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `LIC. DALIA IRIS MABEL GODOY TAPIA`,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: `COORDINADOR ADMINISTRATIVO`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `COORDINADOR JUR\xCDDICO`,
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
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
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
      pdfMake3.createPdf(defDoc).open();
    });
  }
};
_ContratoCreditoETMService.\u0275fac = function ContratoCreditoETMService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratoCreditoETMService)(\u0275\u0275inject(UtilsService2), \u0275\u0275inject(HeaderPdfService));
};
_ContratoCreditoETMService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratoCreditoETMService, factory: _ContratoCreditoETMService.\u0275fac, providedIn: "any" });
var ContratoCreditoETMService = _ContratoCreditoETMService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoCreditoETMService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }, { type: HeaderPdfService }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_credito_etf.service.ts
var pdfMake4 = __toESM(require_pdfmake());
var pdfFonts4 = __toESM(require_vfs_fonts());
var import_dayjs4 = __toESM(require_dayjs_min());
var import_customParseFormat4 = __toESM(require_customParseFormat());
pdfMake4.addVirtualFileSystem(pdfFonts4);
import_dayjs4.default.extend(import_customParseFormat4.default);
import_dayjs4.default.locale("es");
var _ContratoCreditoETFService = class _ContratoCreditoETFService {
  constructor(util) {
    this.util = util;
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
  contratoCreditoETF(credito) {
    return __async(this, null, function* () {
      const persona_fisica = credito?.datos_persona_fisica;
      const acreditado = credito?.datos_persona_fisica;
      const aval = credito?.datos_personales;
      const programa_inversion = credito?.inversiones_programas;
      const fecha = credito?.created_at;
      const inversiones = credito?.inversiones_programas?.inversion_tipos.reduce((sum, tipo) => {
        return sum + tipo.inversiones_tipos_detalles.reduce((acc, item) => {
          return acc + item.monto_solicitado;
        }, 0);
      }, 0);
      const inversiones_comision_unica = inversiones * 0.015;
      const iva = inversiones_comision_unica * 0.16;
      const inversiones_post_comision_e_iva = inversiones - (inversiones_comision_unica + iva);
      console.log(credito);
      console.log(aval);
      console.log(inversiones);
      const dateInTijuana = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Tijuana" });
      const date = new Date(dateInTijuana);
      const dia_pagare = new Intl.DateTimeFormat("es-ES", { day: "2-digit" }).format(date);
      console.log(dia_pagare);
      const date2 = new Date(fecha);
      const fecha_contrato = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(date2);
      const utcDate = /* @__PURE__ */ new Date();
      const date3 = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1e3);
      const dia2 = date3.toLocaleDateString("es", { day: "2-digit" });
      const mes2 = date3.toLocaleDateString("es", { month: "long" });
      const anio2 = date3.toLocaleDateString("es", { year: "numeric" });
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [10, 15, 10, 5],
        content: [
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
                    text: [{ text: "CONTRATO DE CR\xC9DITO", bold: true }],
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
                      "Contrato de Cr\xE9dito Simple que celebran por una primera parte ",
                      { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria ', bold: true },
                      "el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "FIDUCIARIO ", bold: true },
                      "del ",
                      { text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California \u201CFONDOS BC\u201D ", bold: true },
                      "en lo sucesivo se le denomina el ",
                      { text: "FIDEICOMISO, ", bold: true },
                      "representado en este acto por el ",
                      { text: "Lic. Alfonso Ch\xE1vez P\xE9rez, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "apoderado legal; ", bold: true },
                      "y por una segunda parte, ",
                      { text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno} `, bold: true },
                      "en lo sucesivo el ",
                      { text: "ACREDITADO, ", bold: true },
                      "y ",
                      { text: `${aval.nombre} ${aval.apellido_paterno} ${aval.apellido_materno} `, bold: true },
                      "en su car\xE1cter de ",
                      { text: "AVAL. ", bold: true },
                      "Sujet\xE1ndose las partes al tenor de las siguientes declaraciones y cl\xE1usulas:"
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
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "D E C L A R A C I O N E S:", bold: true }
                    ],
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
                      { text: "I. ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ",
                      { text: "FIDUCIARIO, ", bold: true },
                      "por conducto de su apoderado legal, bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:\n\n"
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "I.I. ", bold: true },
                      "Que es una Instituci\xF3n de Cr\xE9dito Filial, constituida conforme a la legislaci\xF3n mexicana y que est\xE1 debidamente autorizada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico para actuar como instituci\xF3n de Banca M\xFAltiple. \n\n"
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
                      { text: "I.II. ", bold: true },
                      "Que es una Sociedad establecida conforme a la Ley de Instituciones de Cr\xE9dito, autorizada para llevar a cabo operaciones fiduciarias, comisiones y mandatos, de conformidad con lo dispuesto por el art\xEDculo 46, fracci\xF3n XV de la Ley de Instituciones de Cr\xE9dito; constituida debidamente en t\xE9rminos de la escritura p\xFAblica de diez de noviembre de mil novecientos noventa y cinco, otorgada bajo n\xFAmero 264186, del protocolo del notario p\xFAblico n\xFAmero 207 de la ciudad de M\xE9xico, Distrito Federal. \n\n"
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
                      { text: "I.III. ", bold: true },
                      "Que ha otorgado poder general para actos de administraci\xF3n, as\xED como para pleitos y cobranzas, en favor del Lic. Alfonso Ch\xE1vez P\xE9rez, seg\xFAn consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. \n\n"
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
                      { text: "I.IV. ", bold: true },
                      "Que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual. \n\n"
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
                      { text: "I.V. ", bold: true },
                      "Que los recursos monetarios de que dispone para otorgar el cr\xE9dito que se formaliza mediante el presente contrato, provienen del Poder Ejecutivo de Baja California por conducto del ",
                      { text: "FIDEICOMISO. \n\n", bold: true }
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
                      { text: "I.VI. ", bold: true },
                      "Que en t\xE9rminos del art\xEDculo 65 de la Ley de Instituciones de Cr\xE9dito, estimo la situaci\xF3n econ\xF3mica del acreditado y su calificaci\xF3n administrativa y moral en funci\xF3n de la informaci\xF3n y documentos proporcionados por este. \n\n"
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
                      { text: "I.VII ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE ", bold: true },
                      `que en `,
                      { text: `[________________________________________] `, bold: true },
                      "SESI\xD3N ",
                      { text: `[________________________________________] `, bold: true },
                      "2025 de fecha ",
                      { text: `${dia2} de ${mes2} del `, bold: true },
                      `2025 los miembros del Comit\xE9 T\xE9cnico y de distribuci\xF3n de fondos autorizaron el cr\xE9dito a favor del `,
                      { text: "ACREDITADO ", bold: true },
                      "de acuerdo a la solicitud de cr\xE9dito y/o al resumen ejecutivo y/o proyecto de inversi\xF3n, e instruyendo la celebraci\xF3n del presente contrato, en apego a las Reglas de Operaci\xF3n vigentes del programa ",
                      { text: "\u201CEMPRENDE TRADICIONAL PFAE 2025\u201D, ", bold: true },
                      "con base en la declaraci\xF3n y cl\xE1usulas que m\xE1s adelante se consignan."
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
                      { text: "II. ", bold: true },
                      " Declara el ",
                      { text: "ACREDITADO, ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que: "
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "II.I. ", bold: true },
                      "Que es una persona f\xEDsica con actividad empresarial, dada de alta en el Registro Federal de Contribuyentes, seg\xFAn consta en la c\xE9dula de identificaci\xF3n fiscal ",
                      { text: `${acreditado.datos_personales?.identificacion_numero}, `, bold: true },
                      "con domicilio fiscal en C. ",
                      { text: `${acreditado.datos_personales?.colonia}, `, bold: true },
                      "Baja California; con domicilio particular, en el cual declara que tambi\xE9n puede ser notificado, el ubicado en ",
                      { text: `${acreditado.datos_personales?.calle}, ${acreditado.datos_personales?.no_exterior}, ${acreditado.datos_personales?.no_interior}, ${acreditado.datos_personales?.colonia}, ${acreditado.datos_personales?.localidad}, ${acreditado.datos_personales?.ciudades?.nombre} `, bold: true },
                      "Baja California, pudiendo en consecuencia entregar facturas de acuerdo a las leyes fiscales vigentes.",
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
                      { text: "II.II. ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${acreditado.datos_personales?.curp},`, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio.",
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
                      { text: "II.III. ", bold: true },
                      "Como parte de sus actividades empresariales, cuenta con un negocio denominado ",
                      { text: `${acreditado.negocios?.nombre}, `, bold: true },
                      "y su giro consiste en ",
                      { text: `${acreditado.negocios?.resumen_actividad_empresarial}, `, bold: true },
                      "cuyo monto de inversi\xF3n y dem\xE1s caracter\xEDsticas espec\xEDficas se detallan en la solicitud de cr\xE9dito, que ser\xE1 apoyado por el ",
                      { text: "ACREEDOR ", bold: true },
                      "mediante el patrimonio del ",
                      { text: "FIDEICOMISO. ", bold: true },
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
                      { text: "II.IV. ", bold: true },
                      "Que present\xF3 SOLICITUD DE CR\xC9DITO ante las autoridades administrativas del ",
                      { text: "FIDEICOMISO ", bold: true },
                      "y toda vez que dicha solicitud ha motivado el otorgamiento del cr\xE9dito objeto del presente contrato, bajo protesta de decir verdad manifiesta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica.",
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
                      { text: "II.V. ", bold: true },
                      "Que la informaci\xF3n presentada al ",
                      { text: "ACREDITANTE ", bold: true },
                      "para el otorgamiento de este cr\xE9dito, refleja de manera exacta y fiel su situaci\xF3n econ\xF3mica, por lo cual, no ha incurrido en alguno de los supuestos del art\xEDculo 112 de la Ley de Instituciones de Cr\xE9dito, que se refiere a las sanciones aplicables a las personas que con el prop\xF3sito de obtener cr\xE9ditos, proporcionen datos falsos a las instituciones de cr\xE9dito, manifestando que conoce el texto y alcance legal del precepto citado.\n",
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
                      { text: "II.VI ", bold: true },
                      "Manifiesta que previamente a la celebraci\xF3n del presente contrato el ACREDITANTE le ha informado el contenido y alcance del mismo, los cargos, comisiones o gastos que se generen por el cr\xE9dito, que en su caso se otorgue y los descuentos o bonificaciones a los que tendr\xE1 derecho.",
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
                      { text: "II.VII ", bold: true },
                      "A la fecha de la firma de este instrumento, no tiene conocimiento de enfermedad o padecimiento alguno que pueda provocar incapacidad f\xEDsica o jur\xEDdica, por lo que no se encuentra en ninguno los supuestos que pudieran invalidar la celebraci\xF3n de este contrato.",
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
                      { text: "II.VIII. ", bold: true },
                      "No ejecuta obras, ni presta servicios en forma principal o exclusiva para el Poder Ejecutivo de Baja California.",
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
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "III. ", bold: true },
                      "Declara ",
                      { text: "AVAL ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que: ",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "III.I. ", bold: true },
                      `Es una persona f\xEDsica de nacionalidad mexicana acredit\xE1ndolo con identificaci\xF3n oficial n\xFAmero `,
                      { text: `${aval.identificacion_numero}, `, bold: true },
                      `la cual es vigente a la fecha y que se anexa al presente contrato, con domicilio ubicado en `,
                      { text: `${aval.colonia}, ${aval.calle}, ${aval.localidad}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.ciudades?.nombre}, `, bold: true },
                      "n\xFAmero(s) telef\xF3nicos ",
                      { text: `${aval?.telefonos_personales?.map((t) => `${t.numero} (${t.tipo})`).join(", ")}, `, bold: true },
                      "y correo electr\xF3nico ",
                      { text: `${aval.email}, `, bold: true },
                      "para ser requerido y/o notificado."
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
                      { text: "III.II ", bold: true },
                      "Que es econ\xF3micamente solvente para responder de las obligaciones que deriven del presente Contrato; as\xED como que es consciente de que la informaci\xF3n presentada a las autoridades administrativas del FIDEICOMISO con motivo de la solicitud de cr\xE9dito y la integraci\xF3n del expediente respectivo, son base y motivo para el otorgamiento del cr\xE9dito al tenor del presente Contrato, por lo que, bajo protesta de decir verdad, manifiesta que est\xE1 en aptitud de cumplir oportunamente con todas y cada una de las obligaciones consignadas en el presente contrato, dado que al momento de la firma del presente instrumento no existe situaci\xF3n adversa que afecte de manera significativa su condici\xF3n financiera o sus operaciones."
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
                      { text: "III.III ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${aval.curp} `, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio."
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
                      { text: "III.IV ", bold: true },
                      "En t\xE9rminos del art\xEDculo 4\xB0 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, declara el ",
                      { text: "ACREDITADO ", bold: true },
                      "y ",
                      { text: "AVAL ", bold: true },
                      "que se constituyen expresamente, cada uno por s\xED, en referencias solidarias frente al ACREDITANTE para responder de manera ilimitada de las obligaciones que asumen."
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
                      { text: "IV. ", bold: true },
                      "Declaran ",
                      { text: "LAS PARTES ", bold: true },
                      "conjuntamente que: ",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "IV.I ", bold: true },
                      "No existe vinculante de HSBC M\xC9XICO y el ",
                      { text: "ACREDITADO ", bold: true },
                      "previa la celebraci\xF3n de este contrato."
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
                      { text: "IV.II ", bold: true },
                      "El representante legal de HSBC M\xC9XICO, explic\xF3 al ",
                      { text: "ACREDITADO, ", bold: true },
                      "los t\xE9rminos y condiciones definitivos de las cl\xE1usulas financieras, as\xED como las comisiones aplicables y dem\xE1s penas convencionales contenidas en este instrumento, manifestando el ",
                      { text: "ACREDITADO, ", bold: true },
                      "que dicha explicaci\xF3n ha sido de su entera satisfacci\xF3n."
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
                      { text: "IV.III ", bold: true },
                      "Que cuentan con la capacidad general para obligarse, as\xED como la suficiente para la celebraci\xF3n del presente contrato. As\xED mismo, declaran que es su voluntad celebrar el presente contrato y que para ello no media dolo, mala fe, error, lesi\xF3n ni cualquier otro vicio de la voluntad."
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
                      "Por lo anterior ",
                      { text: "LAS PARTES ", bold: true },
                      "se sujetan a las siguientes:"
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
                      { text: "C L \xC1 U S U L A S:", bold: true }
                    ],
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
                      { text: "PRIMERA.- OBJETO.- ", bold: true },
                      'Por medio del presente contrato, "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ',
                      { text: `ACREDITANTE, `, bold: true },
                      "otorga a favor de ",
                      { text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno} `, bold: true },
                      "en su car\xE1cter de ACREDITADO un cr\xE9dito hasta por la cantidad de ",
                      { text: `$${parseInt(`${inversiones}`)}.00 ( ${this.util.NumeroALetras2(`${parseInt(`${inversiones}`)}`)} 00/100 M N ), `, bold: true },
                      "el cual se dio a conocer por escrito al ",
                      { text: `ACREDITADO `, bold: true },
                      "mediante la car\xE1tula de este contrato, misma que debidamente firmada de aceptaci\xF3n por el ",
                      { text: `ACREDITADO `, bold: true },
                      "que forma parte integrante del presente contrato, mismo que se obliga a cubrir oportunamente la cantidad dispuesta con la periodicidad y plazos seleccionados."
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
                      "Este cr\xE9dito para fines administrativos se identifica como cr\xE9dito n\xFAmero ",
                      { text: `${credito.id}.`, bold: true }
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
                      { text: "SEGUNDA.- DISPOSICI\xD3N Y DESTINO DEL CR\xC9DITO.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE `, bold: true },
                      "otorga el cr\xE9dito al ",
                      { text: `ACREDITADO, `, bold: true },
                      "con objeto de que lo utilice en capital de trabajo, infraestructura, as\xED como maquinaria y equipo, todo ello en relaci\xF3n con el fin asentado en la solicitud de cr\xE9dito y/o el resumen ejecutivo y/o el proyecto de inversi\xF3n que motivaron la celebraci\xF3n del presente contrato."
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
                      "As\xED mismo, el acreditado podr\xE1 disponer del monto del cr\xE9dito dentro del plazo que para tal efecto le proporcione el ",
                      { text: `ACREDITANTE `, bold: true },
                      "y/o las autoridades administrativas del ",
                      { text: `FIDEICOMISO `, bold: true }
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
                      { text: "TERCERA.- PLAZO E INTERESES.- ", bold: true },
                      "El cr\xE9dito deber\xE1 ser cubierto por el ",
                      { text: `ACREDITADO `, bold: true },
                      "en m\xE1ximo treinta y seis meses. As\xED mismo, el cr\xE9dito se otorga con una tasa de ",
                      { text: "inter\xE9s ordinaria de 8.00% ", bold: true },
                      "(ocho punto cero por ciento) anual sobre el saldo insoluto m\xE1s I.V.A. A efecto de dar mayor claridad a las obligaciones derivadas de la presente cl\xE1usula y dem\xE1s relacionadas, a manera de ap\xE9ndice, se agrega la TABLA DE AMORTIZACI\xD3N respectiva."
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
                      { text: "CUARTA.- COMISI\xD3N POR APERTURA.- ", bold: true },
                      "La apertura del cr\xE9dito genera una ",
                      { text: "comisi\xF3n \xFAnica del 1.5% ", bold: true },
                      "(uno punto cinco por ciento) m\xE1s el 16% de I.V.A., que ser\xE1 descontada del importe del cr\xE9dito; en consecuencia, en el acto de la firma del presente acto jur\xEDdico, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "entrega al ",
                      { text: `ACREDITADO `, bold: true },
                      "transferencia bancaria por la cantidad de ",
                      { text: `$${inversiones_post_comision_e_iva} ( ${this.util.NumeroALetras2(inversiones_post_comision_e_iva)} 00/100 M N ), `, bold: true },
                      "expedido a favor del ",
                      { text: `ACREDITADO `, bold: true },
                      "y a cargo de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC. Por tanto, el ",
                      { text: `ACREDITADO `, bold: true },
                      "lo recibe en los t\xE9rminos y condiciones del presente contrato, otorgando al ",
                      { text: `ACREEDOR `, bold: true },
                      "el recibo m\xE1s amplio y firme que en derecho corresponda por la cantidad consignada en la cl\xE1usula primera."
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
                      { text: "QUINTA.- DE LOS PAGOS.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga a efectuar los pagos mensuales a que se refiere la cl\xE1usula TERCERA, \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
                      { text: `${credito.clabe_interbancaria} `, bold: true },
                      "a la cuenta bancaria de HSBC No 6231216641, as\xED mismo la clave interbancaria 021028062312166411."
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
                      "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el \xFAltimo d\xEDa de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
                      { text: `ACREDITANTE. `, bold: true },
                      "En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
                      { text: `ACREDITANTE `, bold: true },
                      "por s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: `FIDEICOMISO `, bold: true },
                      "para establecer otros mecanismos u otro(s) lugar(es) de pago, de lo cual ser\xE1 informado el ",
                      { text: `ACREDITADO. `, bold: true },
                      "La notificaci\xF3n de los cambios o modificaciones podr\xE1n ser por escrito o mediante mensaje de correo electr\xF3nico. En caso de que la notificaci\xF3n sea realizada por correo electr\xF3nico, el ",
                      { text: `ACREDITADO `, bold: true },
                      "podr\xE1 acudir, si as\xED lo desea, al domicilio del ",
                      { text: "ACREDITANTE ", bold: true },
                      "a notificarse por escrito. Los pagos que el ",
                      { text: `ACREDITADO `, bold: true },
                      "haga en relaci\xF3n con este contrato, s\xF3lo podr\xE1n acreditarse mediante el comprobante del dep\xF3sito bancario realizado a favor del patrimonio del ",
                      { text: `FIDEICOMISO.`, bold: true }
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
                      "Realizando el pago el ",
                      { text: `ACREDITANTE `, bold: true },
                      "deber\xE1 enviar copia del voucher del dep\xF3sito al correo electr\xF3nico de ",
                      { text: "cobranzabc@baja.gob.mx", style: "email" }
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas y no atender los pagos faltantes, se turnar\xE1 a un Despacho de Cobranza extrajudicial para la recuperaci\xF3n de saldos correspondientes. el ",
                      { text: `ACREDITADO `, bold: true },
                      "ser\xE1 boletinado a bur\xF3 de cr\xE9dito Federal en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.",
                      { text: "\n" },
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
                      { text: "SEXTA. TASA DE INTER\xC9S MORATORIA.-  ", bold: true },
                      "En caso de que los pagos no sean realizados oportunamente, se aplicar\xE1 una tasa de ",
                      { text: "inter\xE9s moratoria del 24% ", style: "tasa" },
                      "(Veinticuatro por ciento) m\xE1s I.V.A. El cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga verificativo el pago de dichas prestaciones. En el entendido de que cualquier abono se aplicar\xE1 primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital."
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
                      { text: "S\xC9PTIMA. VIGILANCIA.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE `, bold: true },
                      "por s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: `FIDEICOMISO `, bold: true },
                      "podr\xE1 en cualquier momento verificar el exacto cumplimiento de las obligaciones que por el presente Contrato se han generado a cargo del ",
                      { text: `ACREDITADO `, bold: true },
                      "y el ",
                      { text: `AVAL. `, bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga a cubrir los gastos que se generen por dicha supervisi\xF3n, gastos de cobranza y los dem\xE1s que se generen en caso de su incumplimiento."
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
                      { text: "OCTAVA. ", bold: true },
                      "El ",
                      { text: "ACREDITADO", bold: true },
                      "se obliga a mantener cartel visible proporcionado por el FIDEICOMISO, a la vista dentro del negocio en el cual se especificar\xE1 que es beneficiario del Programa ",
                      { text: `EMPRENDE EMPRESARIAL PMAE 2025.`, bold: true }
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
                      { text: "NOVENA.- VIGENCIA. ", bold: true },
                      "El presente Contrato tendr\xE1 una vigencia de ",
                      { text: `${credito.inversiones_programas?.plazo_solicitado_meses} meses `, bold: true },
                      "de acuerdo al an\xE1lisis  y/o evaluaci\xF3n de la unidad dictaminadora,  contados a partir de la fecha de firma del mismo."
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
                    text: "No obstante su terminaci\xF3n, este contrato producir\xE1 todos sus efectos legales hasta tanto no se hayan liquidado en su totalidad las cantidades a su cargo.",
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
                      { text: "D\xC9CIMA.- RESTRICCI\xD3N Y DENUNCIA. ", bold: true },
                      "En t\xE9rminos del art\xEDculo 294 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, HSBC M\xC9XICO queda facultado para restringir el importe del Cr\xE9dito o el plazo en que tiene derecho al ",
                      { text: `ACREDITADO `, bold: true },
                      "a disponer de \xE9l, o ambos a la vez, o para denunciar el Contrato en cualquier tiempo, debiendo notificar al ",
                      { text: `ACREDITADO `, bold: true },
                      "en cualquier medio de contacto, as\xED mismo al ",
                      { text: `AVAL, `, bold: true },
                      "sin que sea necesario el cumplimiento de formalidades especiales."
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
                      "El ",
                      { text: "ACREDITADO ", bold: true },
                      "y el ",
                      { text: "AVAL ", bold: true },
                      "aceptan que dicha notificaci\xF3n podr\xE1 realizarse por escrito o a trav\xE9s de cualquier medio electr\xF3nico o telecomunicativo derivado de la ciencia y la tecnolog\xEDa."
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
                      { text: "D\xC9CIMA PRIMERA. CAUSALES DE RESCISI\xD3N Y VENCIMIENTO ANTICIPADO.- ", bold: true },
                      "El ",
                      { text: "ACREDITANTE ", bold: true },
                      "podr\xE1 rescindir el presente contrato y dar por vencido anticipadamente el plazo para pagar el cr\xE9dito, as\xED como sus intereses ordinarios y moratorios generados, cuando el ACREDITADO incurra en cualquiera de los siguientes casos:"
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
                      { text: "I. ", bold: true },
                      "Si se presenta sin mediar justificaci\xF3n, un retraso de tres o m\xE1s meses en los pagos del cr\xE9dito, de acuerdo a los plazos y montos estipulados en la tabla de amortizaci\xF3n."
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
                      { text: "II. ", bold: true },
                      "Si se detecta que existi\xF3 falsedad o alteraci\xF3n en los documentos anexos a la solicitud de cr\xE9dito con el fin de obtener el beneficio."
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
                      { text: "III. ", bold: true },
                      "Si el ",
                      { text: `ACREDITADO `, bold: true },
                      "incumple cualquiera de las obligaciones derivadas del presente contrato y las leyes aplicables, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "podr\xE1 exigir ",
                      { text: `anticipadamente `, bold: true },
                      "el pago total del saldo pendiente de forma inmediata y el ",
                      { text: `ACREDITADO `, bold: true },
                      "responda por los da\xF1os y perjuicios causados, as\xED como gastos judiciales en su caso."
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
                      { text: "D\xC9CIMA SEGUNDA. AVAL.- ", bold: true },
                      "Por virtud del presente contrato, el AVAL se constituye como responsable junto con el ACREDITADO, respondiendo de manera directa, subsidiaria e ilimitada respecto de todas las obligaciones contra\xEDdas con el ACREDITANTE y el patrimonio del FIDEICOMISO, comprometi\xE9ndose a pagar de manera oportuna el importe total del cr\xE9dito y sus accesorios legales, en los mismos t\xE9rminos en que se encuentra obligado el ACREDITADO, de conformidad en lo dispuesto por el art\xEDculo 4 de la Ley de T\xEDtulos y Operaciones de Cr\xE9dito y art\xEDculo 1987, 1988 y 1989 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por los art\xEDculos 1862, 1863 y 1864 del C\xF3digo civil para el Estado de Baja California."
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas el ",
                      { text: `AVAL `, bold: true },
                      "ser\xE1 boletinado a bur\xF3 de cr\xE9dito federal en t\xE9rminos de la Ley para regular a las Sociedades de informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF Y PROFECO."
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
                      { text: "D\xC9CIMA TERCERA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "autoriza al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para que, si as\xED lo desea, inscriba el presente instrumento en el Registro P\xFAblico de la Propiedad de la ciudad de Mexicali, Baja California, sin que esto sea motiv\xF3 para que el ",
                      { text: `ACREDITADO `, bold: true },
                      "incumpla en las condiciones del presente instrumento."
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
                      { text: "D\xC9CIMA CUARTA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "y su ",
                      { text: `AVAL `, bold: true },
                      "otorgar\xE1n su consentimiento Expreso e irrevocable a el ",
                      { text: `ACREDITANTE `, bold: true },
                      "o cualquier persona jur\xEDdica para que conjunta o separadamente consulte, informe, reporte o divulgue toda la informaci\xF3n Financiera relevante al bur\xF3 de cr\xE9dito a efecto de conocer su desempe\xF1o como deudor, su capacidad de pago, o para valorar el riesgo futuro de concederle un cr\xE9dito."
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
                      { text: "D\xC9CIMA QUINTA.- PAGOS ANTICIPADOS Y PAGOS ADELANTADOS. ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "tendr\xE1 el derecho de efectuar pagos anticipados, ya sean totales o parciales, en cualquier momento durante la vigencia del presente contrato de cr\xE9dito, sin incurrir en penalizaciones por pago anticipado. En caso de pago anticipado total, el deudor quedar\xE1 liberado de todas las obligaciones restantes bajo este contrato, siempre y cuando el pago cubra la totalidad del saldo insoluto y cualquier inter\xE9s acumulado hasta la fecha del pago."
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
                      "El pago anticipado se aplicar\xE1 en forma exclusiva al saldo insoluto del principal, siempre y cuando el ",
                      { text: `ACREDITADO `, bold: true },
                      "est\xE9 al corriente en el pago de: a) el principal; b) los intereses ordinarios devengados, as\xED como; c) en su caso, las comisiones y cargos pactados."
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
                      "Trat\xE1ndose de pagos anticipados que liquiden el saldo insoluto, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "entregar\xE1 al ",
                      { text: `ACREDITADO `, bold: true },
                      "la documentaci\xF3n que resulte necesaria que lo exima de cualquier responsabilidad contra\xEDda en el presente contrato."
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
                      "Los pagos anticipados reducir\xE1n el plazo de este contrato, en virtud de que no se variar\xE1 el monto de cada una de las amortizaciones se\xF1aladas en el presente contrato. El hecho de que el ",
                      { text: `ACREDITADO `, bold: true },
                      "anticipe abonos a capital, no lo exime de la obligaci\xF3n de efectuar los pagos mensuales que est\xE1 obligada a cubrir."
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
                      { text: "D\xC9CIMA SEXTA.- CASO FORTUITO.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga al cumplimiento del presente contrato, aun en caso fortuito o fuerza mayor, en t\xE9rminos del art\xEDculo 2111 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por el art\xEDculo 1986 del C\xF3digo civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA S\xC9PTIMA.- CASO DE DEFUNCI\xD3N.- ", bold: true },
                      "Si falleciera el ",
                      { text: `ACREDITADO `, bold: true },
                      "se debe de notificar al ",
                      { text: `FIDEICOMISO `, bold: true },
                      "y entregar acta de defunci\xF3n original y copia para cotejo. En caso de cumplir con el requisito anterior, el acreditado y aval quedar\xE1n autom\xE1ticamente deslindados de toda responsabilidad contractual y se proceder\xE1 a la cancelaci\xF3n del cr\xE9dito de manera inmediata en capital, IVA e intereses ordinarios y moratorios que se hayan generado."
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
                      { text: "D\xC9CIMA OCTAVA.- NO CESI\xD3N.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO, `, bold: true },
                      "acepta que no podr\xE1 ceder o por cualquier otro medio transmitir los derechos y obligaciones que a su favor se deriven del presente contrato sin autorizaci\xF3n previa expresa del  ",
                      { text: `ACREDITANTE `, bold: true },
                      "de conformidad en lo dispuesto en el art\xEDculo 2051 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria en el art\xEDculo 1926 del C\xF3digo Civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA NOVENA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "faculta de manera expresa al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para ceder, descontar o negociar, ante cualquier Instituci\xF3n de Cr\xE9dito del pa\xEDs, los derechos de cr\xE9dito derivados de este Contrato."
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
                      { text: "VIG\xC9SIMA.- DE LOS DOMICILIOS. ", bold: true }
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
                      "Que para efectos del presente Contrato, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "se\xF1ala como domicilio fiscal el ubicado en, Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010."
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
                      "Que para efectos del presente Contrato, el ",
                      { text: `ACREDITADO, `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio fiscal `, bold: true },
                      "el ubicado en ",
                      { text: `${persona_fisica.datos_personales?.calle}, ${persona_fisica.datos_personales?.no_exterior}, ${persona_fisica.datos_personales?.no_interior}, ${persona_fisica.datos_personales?.colonia}, ${persona_fisica.datos_personales?.localidad}, ${persona_fisica.datos_personales?.ciudades?.nombre} `, bold: true }
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
                      "Que para efecto del presente Contrato, el ",
                      { text: `ACREDITADO `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio particular `, bold: true },
                      "el ubicado en ",
                      { text: `${persona_fisica.datos_personales?.calle}, ${persona_fisica.datos_personales?.no_exterior}, ${persona_fisica.datos_personales?.no_interior}, ${persona_fisica.datos_personales?.colonia}, ${persona_fisica.datos_personales?.localidad}, ${persona_fisica.datos_personales?.ciudades?.nombre} `, bold: true }
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
                      "Que para efecto del presente Contrato el ",
                      { text: `AVAL `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio particular `, bold: true },
                      "el ubicado en ",
                      { text: `${aval.calle}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.colonia}, ${aval.localidad}, ${aval.ciudades?.nombre} `, bold: true }
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
                      { text: "VIG\xC9SIMA PRIMERA.- TITULO EJECUTIVO, ", bold: true },
                      "en t\xE9rminos del art\xEDculo 68 de la Ley de Instituciones de Cr\xE9dito, el presente contrato, junto con los estados de cuenta certificados por el contador facultado de HSBC MEXICO, constituyen t\xEDtulo ejecutivo, sin necesidad de reconocimiento de firma, ni de ning\xFAn otro requisito."
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
                      { text: "VIG\xC9SIMA SEGUNDA.- DE LA EJECUCI\xD3N. ", bold: true },
                      "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente contrato a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles y quedando a potestad del ",
                      { text: `ACREDITANTE `, bold: true },
                      "la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca."
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
                      { text: `LE\xCDDO QUE FUE EL PRESENTE CONTRATO Y ACLARADOS SUS ALCANCES Y EFECTOS, LAS PARTES LO FIRMAN DE CONFORMIDAD EN LA CIUDAD DE MEXICALI, BAJA CALIFORNIA A ${dia2} DE ${mes2} DEL 2025.`, bold: true }
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
                      { text: "POR EL ACREEDOR", bold: true },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2",
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
                    text: "______________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `Lic. ALFONSO CH\xC1VEZ P\xC9REZ`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `En su car\xE1cter de apoderado Legal de`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple,`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"`,
                    alignment: "center",
                    style: "body2"
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
                      { text: "EL ACREDITADO", bold: true }
                    ],
                    alignment: "center",
                    style: "headerNot2"
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
                    text: "____________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${acreditado.datos_personales?.nombre} ${acreditado.datos_personales?.apellido_paterno} ${acreditado.datos_personales?.apellido_materno}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `${acreditado.datos_personales?.calle}, ${acreditado.datos_personales?.no_exterior}, ${acreditado.datos_personales?.no_interior}, ${acreditado.datos_personales?.colonia}, ${acreditado.datos_personales?.localidad}, ${acreditado.datos_personales?.ciudades?.nombre}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `TEL. 6161056719`,
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "body2"
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
                      { text: "EL AVAL", bold: true }
                    ],
                    alignment: "center",
                    style: "headerNot2"
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
                    text: "____________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${aval?.nombre} ${aval?.apellido_paterno} ${aval?.apellido_materno}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `${aval.colonia}, ${aval.calle}, ${aval.localidad}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.ciudades?.nombre}`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `TEL. 6161056719`,
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `Testigos`,
                      { text: "\n" },
                      { text: "\n" }
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
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 50, "*"],
              body: [
                [
                  {
                    text: "_______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "_______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: "CP. ADRIANA SOFIA CORNEJO PORRAS \n COORDINADOR ADMINISTRATIVO",
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `LIC. DALIA IRIS MABEL GODOY TAPIA 
 COORDINADOR DE JUR\xCDDICO`,
                    alignment: "center",
                    style: "body2"
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
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
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
      pdfMake4.createPdf(defDoc).open();
    });
  }
};
_ContratoCreditoETFService.\u0275fac = function ContratoCreditoETFService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratoCreditoETFService)(\u0275\u0275inject(UtilsService2));
};
_ContratoCreditoETFService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratoCreditoETFService, factory: _ContratoCreditoETFService.\u0275fac, providedIn: "any" });
var ContratoCreditoETFService = _ContratoCreditoETFService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoCreditoETFService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_credito_eem.service.ts
var pdfMake5 = __toESM(require_pdfmake());
var pdfFonts5 = __toESM(require_vfs_fonts());
var import_dayjs5 = __toESM(require_dayjs_min());
var import_customParseFormat5 = __toESM(require_customParseFormat());
pdfMake5.addVirtualFileSystem(pdfFonts5);
import_dayjs5.default.extend(import_customParseFormat5.default);
import_dayjs5.default.locale("es");
var _ContratoCreditoEEMService = class _ContratoCreditoEEMService {
  constructor(util) {
    this.util = util;
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
  contratoCreditoEEM(credito) {
    return __async(this, null, function* () {
      console.log(credito);
      const persona_moral = credito?.datos_personas_morales;
      const aval = credito?.datos_personales;
      const programa_inversion = credito?.inversiones_programas;
      const inversiones = credito?.inversiones_programas?.inversion_tipos.reduce((sum, tipo) => {
        return sum + tipo.inversiones_tipos_detalles.reduce((acc, item) => {
          return acc + item.monto_solicitado;
        }, 0);
      }, 0);
      const inscripcion_rppc = new Date(persona_moral.acta_constitutiva?.fecha_inscripcion_rppc);
      const escritura = new Date(persona_moral.acta_constitutiva?.fecha_escritura);
      const creacion = new Date(persona_moral.created_at);
      const fecha_inscripcion_escritura = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(escritura);
      const fecha_inscripcion_rppc = new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }).format(inscripcion_rppc);
      const inscripcion_rppc_day = new Intl.DateTimeFormat("es-ES", { day: "2-digit" }).format(inscripcion_rppc);
      const inscripcion_rppc_month = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(inscripcion_rppc);
      const inscripcion_rppc_year = new Intl.DateTimeFormat("es-ES", { year: "numeric" }).format(inscripcion_rppc);
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
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [10, 15, 10, 5],
        content: [
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
                    text: [{ text: "CONTRATO DE CREDITO", bold: true }],
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
                      "Contrato de Cr\xE9dito Simple que celebran por una primera parte ",
                      { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria ', bold: true },
                      "el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "FIDUCIARIO ", bold: true },
                      "del ",
                      { text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California \u201CFONDOS BC\u201D ", bold: true },
                      "en lo sucesivo se le denomina  el ",
                      { text: "FIDEICOMISO, ", bold: true },
                      "representado en este acto por el ",
                      { text: "Lic. Alfonso Ch\xE1vez P\xE9rez, ", bold: true },
                      "en su car\xE1cter de ",
                      { text: "apoderado legal; ", bold: true },
                      "y por una segunda parte, ",
                      { text: `${persona_moral.razon_social} `, bold: true },
                      "por conducto de su representante legal ",
                      { text: `${persona_moral.representante_legal?.nombre} `, bold: true },
                      "en lo sucesivo el ACREDITADO, y ",
                      { text: `${aval.nombre}`, bold: true },
                      "en su car\xE1cter de ",
                      { text: "AVAL, ", bold: true },
                      "Sujet\xE1ndose las partes al tenor de las siguientes declaraciones y cl\xE1usulas:"
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
                    text: ``,
                    alignment: "left",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "D E C L A R A C I O N E S:", bold: true }
                    ],
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
                      { text: "I. ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE, ", bold: true },
                      "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ",
                      { text: "FIDUCIARIO, ", bold: true },
                      "por conducto de su apoderado legal, bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "I.1 ", bold: true },
                      "Que es una Instituci\xF3n de Cr\xE9dito Filial, constituida conforme a la legislaci\xF3n mexicana y que est\xE1 debidamente autorizada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico para actuar como instituci\xF3n de Banca M\xFAltiple. \n\n"
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
                      { text: "I.II ", bold: true },
                      "Que es una Sociedad establecida conforme a la Ley de Instituciones de Cr\xE9dito, autorizada para llevar a cabo operaciones fiduciarias, comisiones y mandatos, de conformidad con lo dispuesto por el art\xEDculo 46, fracci\xF3n XV de la Ley de Instituciones de Cr\xE9dito; constituida debidamente en t\xE9rminos de la escritura p\xFAblica de diez de noviembre de mil novecientos noventa y cinco, otorgada bajo n\xFAmero 264186, del protocolo del notario p\xFAblico n\xFAmero 207 de la ciudad de M\xE9xico, Distrito Federal. \n\n"
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
                      { text: "I.III ", bold: true },
                      "Que ha otorgado poder general para actos de administraci\xF3n, as\xED como para pleitos y cobranzas, en favor del Lic. Alfonso Ch\xE1vez P\xE9rez, seg\xFAn consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha. \n\n"
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
                      { text: "I.IV ", bold: true },
                      "Que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual. \n\n"
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
                      { text: "I.V ", bold: true },
                      "Que los recursos monetarios de que dispone para otorgar el cr\xE9dito que se formaliza mediante el presente contrato, provienen del Poder Ejecutivo de Baja California por conducto del ",
                      { text: "FIDEICOMISO. ", bold: true }
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
                      { text: "I.VI ", bold: true },
                      "Que en t\xE9rminos del art\xEDculo 65 de la Ley de Instituciones de Cr\xE9dito, estimo la situaci\xF3n econ\xF3mica del acreditado y su calificaci\xF3n administrativa y moral en funci\xF3n de la informaci\xF3n y documentos proporcionados por este. \n\n"
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
                      { text: "I.VII ", bold: true },
                      "Declara el ",
                      { text: "ACREDITANTE ", bold: true },
                      `que en `,
                      { text: `[________________________________________] `, bold: true },
                      "SESI\xD3N ",
                      { text: `[________________________________________] `, bold: true },
                      "2025 de fecha ",
                      { text: `${dia} de ${mes} del `, bold: true },
                      `2025 los miembros del Comit\xE9 T\xE9cnico y de distribuci\xF3n de fondos autorizaron el cr\xE9dito a favor del `,
                      { text: "ACREDITADO, ", bold: true },
                      "de acuerdo a la solicitud de cr\xE9dito y/o al resumen ejecutivo y/o proyecto de inversi\xF3n, e instruyendo la celebraci\xF3n del presente contrato, en apego a las reglas de operaci\xF3n vigentes del programa ",
                      { text: "EMPRENDE EMPRESARIAL PFAE 2025, ", bold: true },
                      "con base en la declaraci\xF3n y cl\xE1usulas que m\xE1s adelante se consignan."
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
                      { text: "II. ", bold: true },
                      "Declara el ",
                      { text: "ACREDITADO por conducto de su representante legal, ", bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "II.I ", bold: true },
                      "Que es una persona moral constituida conforme a las leyes mexicanas vigentes, mediante escritura p\xFAblica de fecha ",
                      { text: `${fecha_inscripcion_escritura}, `, bold: true },
                      "otorgada bajo n\xFAmero ",
                      { text: `${persona_moral.acta_constitutiva?.numero_escritura}, `, bold: true },
                      "volumen ",
                      { text: `${persona_moral.acta_constitutiva?.volumen_escritura} `, bold: true },
                      "ante el protocolo del notario p\xFAblico n\xFAmero ",
                      { text: `${persona_moral.acta_constitutiva?.numero_notario}, `, bold: true },
                      "nombre del notario ",
                      { text: `${persona_moral.acta_constitutiva?.nombre_notario}, `, bold: true },
                      "de la ciudad M\xE9xico inscrita en el Registro P\xFAblico de la Propiedad y Comercio bajo inscripci\xF3n de fecha ",
                      { text: `${fecha_inscripcion_rppc}, `, bold: true },
                      { text: `${this.util.NumeroALetras2(inscripcion_rppc_day)} DEL MES DE ${inscripcion_rppc_month} DEL A\xD1O ${this.util.NumeroALetras2(inscripcion_rppc_year)}, `, bold: true, style: "bodyRemark" },
                      "que contiene la constituci\xF3n de la sociedad denominada ",
                      { text: `${persona_moral.razon_social},`, bold: true },
                      "con Registro Federal de Contribuyentes ",
                      { text: `${persona_moral.representante_legal?.rfc}, `, bold: true },
                      "se\xF1alando como domicilio fiscal el ubicado en ",
                      { text: `${persona_moral.colonia}, ${persona_moral.calle}, ${persona_moral.no_exterior}, ${persona_moral.no_interior}, ${persona_moral.localidad}, ${persona_moral.ciudades?.nombre}, `, bold: true },
                      { text: "el cual declara puede ser notificado; pudiendo en consecuencia entregar las facturas de acuerdo a las leyes fiscales vigentes." },
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
                      { text: "II.II ", bold: true },
                      "Que su representante legal el C. ",
                      { text: `${persona_moral.representante_legal?.nombre}. `, bold: true },
                      `cuenta con la capacidad suficiente y se encuentra debidamente facultado para la celebraci\xF3n del presente Contrato, seg\xFAn consta en la escritura p\xFAblica n\xFAmero `,
                      { text: `${persona_moral.acta_constitutiva?.numero_escritura}, `, bold: true },
                      "pasada ante la fe P\xFAblica del Notario P\xFAblico No. ",
                      { text: `${persona_moral.acta_constitutiva?.numero_notario} `, bold: true },
                      "de la ciudad ",
                      { text: `${persona_moral.acta_constitutiva?.ciudad_notario}.`, bold: true },
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
                      { text: "II.III ", bold: true },
                      "El representante legal manifiesta bajo protesta de decir verdad que las facultades con las que comparece a la firma del presente Contrato no le han sido revocadas ni modificadas de forma alguna.",
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
                      { text: "II.IV ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${persona_moral.representante_legal?.curp} `, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio.",
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
                      { text: "II.V ", bold: true },
                      "Como parte de sus actividades empresariales, cuenta con un negocio denominado ",
                      { text: `${persona_moral.razon_social}, `, bold: true },
                      "y su giro consiste en ",
                      { text: `${persona_moral.resumen_actividad_empresarial}, `, bold: true },
                      "cuyo monto de inversi\xF3n y dem\xE1s caracter\xEDsticas espec\xEDficas se detallan en la solicitud de cr\xE9dito, que ser\xE1 apoyado por el ACREEDOR mediante el patrimonio del ",
                      { text: `FIDEICOMISO.`, bold: true },
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
                      { text: "II.VI ", bold: true },
                      "Que present\xF3 SOLICITUD DE CR\xC9DITO ante las autoridades administrativas del ",
                      { text: `FIDEICOMISO, `, bold: true },
                      " y toda vez que dicha solicitud ha motivado el otorgamiento del CR\xC9DITO objeto del presente contrato, bajo protesta de decir verdad manifiesta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica.",
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
                      { text: "II.VII ", bold: true },
                      "Que la informaci\xF3n presentada al ",
                      { text: `ACREDITANTE, `, bold: true },
                      "para el otorgamiento de este cr\xE9dito, refleja de manera exacta y fiel su situaci\xF3n econ\xF3mica, por lo cual, no ha incurrido en alguno de los supuestos del art\xEDculo 112 de la Ley de Instituciones de Cr\xE9dito, que se refiere a las sanciones aplicables a las personas que con el prop\xF3sito de obtener cr\xE9ditos, proporcionen datos falsos a las instituciones de cr\xE9dito, manifestando que conoce el texto y alcance legal del precepto citado.",
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
                      { text: "II.VIII ", bold: true },
                      "Manifiesta que previamente a la celebraci\xF3n del presente contrato el ",
                      { text: `ACREDITANTE, `, bold: true },
                      "le ha informado el contenido y alcance del mismo, los cargos, comisiones o gastos que se generen por el cr\xE9dito, que en su caso se otorgue y los descuentos o bonificaciones a los que tendr\xE1 derecho.",
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
                      { text: "II.IX ", bold: true },
                      "A la fecha de la firma de este instrumento, no tiene conocimiento de enfermedad o padecimiento alguno que pueda provocar incapacidad f\xEDsica o jur\xEDdica, por lo que no se encuentra en ninguno los supuestos que pudieran invalidar la celebraci\xF3n de este contrato.",
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
                      { text: "II.X ", bold: true },
                      "No ejecuta obras, ni presta servicios en forma principal o exclusiva para el Poder Ejecutivo de Baja California.",
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
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "III. ", bold: true },
                      "Declara el ",
                      { text: `AVAL `, bold: true },
                      "bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que: ",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "III.I ", bold: true },
                      `Es una persona f\xEDsica de nacionalidad mexicana acredit\xE1ndolo con identificaci\xF3n oficial n\xFAmero `,
                      { text: `${aval.identificacion_numero}, `, bold: true },
                      "la cual es vigente a la fecha y que se anexa al presente contrato, con domicilio ubicado en ",
                      { text: `${aval.colonia}, ${aval.calle}, ${aval.localidad}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.ciudades?.nombre}, ${aval.ciudad_id}, BAJA CALIFORNIA, 21254,`, bold: true },
                      "n\xFAmero(s) telef\xF3nicos ",
                      { text: `6161138222 `, bold: true },
                      "y correo electr\xF3nico ",
                      { text: `${aval.email}, `, bold: true },
                      "para ser requerido y/o notificado."
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
                      { text: "III.II ", bold: true },
                      "Que es econ\xF3micamente solvente para responder de las obligaciones que deriven del presente Contrato; as\xED como que es consciente de que la informaci\xF3n presentada a las autoridades administrativas del FIDEICOMISO con motivo de la solicitud de cr\xE9dito y la integraci\xF3n del expediente respectivo, son base y motivo para el otorgamiento del cr\xE9dito al tenor del presente Contrato, por lo que, bajo protesta de decir verdad, manifiesta que est\xE1 en aptitud de cumplir oportunamente con todas y cada una de las obligaciones consignadas en el presente contrato, dado que al momento de la firma del presente instrumento no existe situaci\xF3n adversa que afecte de manera significativa su condici\xF3n financiera o sus operaciones."
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
                      { text: "III.III ", bold: true },
                      "Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
                      { text: `${aval.curp}, `, bold: true },
                      "tal y como lo acredita con la constancia CURP que al efecto exhibe, as\xED que cuenta con identificaci\xF3n oficial, mismos que al efecto exhibe en copia fotost\xE1tica, lo anterior para dar cabal cumplimiento en lo previsto por el art\xEDculo 1061 fracci\xF3n V del C\xF3digo de Comercio."
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
                      { text: "III.IV ", bold: true },
                      "En t\xE9rminos del art\xEDculo 4\xB0 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, declara el ",
                      { text: `ACREDITADO `, bold: true },
                      "y ",
                      { text: `AVAL `, bold: true },
                      "que se constituyen expresamente, cada uno por s\xED, en referencias solidarias frente al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para responder de manera ilimitada de las obligaciones que asumen."
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
                      { text: "IV. ", bold: true },
                      "Declaran ",
                      { text: `LAS PARTES `, bold: true },
                      "conjuntamente que:",
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "justify",
                    style: "bodyRemark"
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
                      { text: "IV.I ", bold: true },
                      "No existe vinculante de HSBC M\xC9XICO y el ",
                      { text: `ACREDITADO `, bold: true },
                      "previa la celebraci\xF3n de este contrato."
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
                      { text: "IV.II ", bold: true },
                      "El representante legal de HSBC M\xC9XICO, explic\xF3 al ",
                      { text: `ACREDITADO `, bold: true },
                      "los t\xE9rminos y condiciones definitivos de las cl\xE1usulas financieras, as\xED como las comisiones aplicables y dem\xE1s penas convencionales contenidas en este instrumento, manifestando el ",
                      { text: `ACREDITADO, `, bold: true },
                      "que dicha explicaci\xF3n ha sido de su entera satisfacci\xF3n."
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
                      { text: "V. ", bold: true },
                      "Que cuentan con las autorizaciones, facultades y capacidad general para obligarse, ",
                      { text: `las cuales no han sido revocadas `, bold: true },
                      "a la fecha de celebraci\xF3n del presente contrato. As\xED mismo, declaran que es su voluntad celebrar el presente contrato y que para ello no media dolo, mala fe, error, lesi\xF3n ni cualquier otro vicio de la voluntad."
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
                      "Por lo anterior ",
                      { text: "LAS PARTES ", bold: true },
                      "se sujetan a las siguientes:"
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
                      { text: "C L \xC1 U S U L A S:", bold: true }
                    ],
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
                      { text: "PRIMERA.- OBJETO.- ", bold: true },
                      'Por medio del presente contrato, "HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ACREDITANTE, otorga a favor de la moral, representada por el ',
                      { text: `C. ${persona_moral.representante_legal?.nombre} `, bold: true },
                      "en su car\xE1cter de ACREDITADO, un cr\xE9dito hasta por la cantidad de ",
                      { text: `$${inversiones.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })} ( ${this.util.NumeroALetras2(inversiones)} 00/100 MN )`, bold: true },
                      "el cual se dio a conocer por escrito al ACREDITADO mediante la car\xE1tula de este contrato, misma que debidamente firmada de aceptaci\xF3n por el ACREDITADO que forma parte integrante del presente contrato, mismo que se obliga a cubrir oportunamente la cantidad dispuesta con la periodicidad y plazos seleccionados."
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
                      "Este cr\xE9dito para fines administrativos se identifica como cr\xE9dito n\xFAmero ",
                      { text: `${credito.id}.`, bold: true }
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
                      { text: "SEGUNDA.- DISPOSICI\xD3N Y DESTINO DEL CR\xC9DITO.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE `, bold: true },
                      "otorga el cr\xE9dito al ",
                      { text: `ACREDITADO, `, bold: true },
                      "con objeto de que lo utilice en capital de trabajo, infraestructura, as\xED como maquinaria y equipo, todo ello en relaci\xF3n con el fin asentado en la solicitud de cr\xE9dito y/o el resumen ejecutivo y/o el proyecto de inversi\xF3n que motivaron la celebraci\xF3n del presente contrato."
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
                      "As\xED mismo, el acreditado podr\xE1 disponer del monto del cr\xE9dito dentro del plazo que para tal efecto le proporcione el ",
                      { text: `ACREDITANTE `, bold: true },
                      "y/o las autoridades administrativas del ",
                      { text: `FIDEICOMISO `, bold: true }
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
                      { text: "TERCERA.- PLAZO E INTERESES.- ", bold: true },
                      "El cr\xE9dito deber\xE1 ser cubierto por el ",
                      { text: `ACREDITADO `, bold: true },
                      "en m\xE1ximo ",
                      { text: `${programa_inversion.plazo_solicitado_meses} `, bold: true },
                      "meses. As\xED mismo, el cr\xE9dito se otorga con una tasa de ",
                      { text: "inter\xE9s ordinaria de 8.00% ", bold: true },
                      "(ocho punto cero por ciento) anual sobre el saldo insoluto m\xE1s I.V.A. A efecto de dar mayor claridad a las obligaciones derivadas de la presente cl\xE1usula y dem\xE1s relacionadas, a manera de ap\xE9ndice, se agrega la TABLA DE AMORTIZACI\xD3N respectiva."
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
                      { text: "CUARTA.- COMISI\xD3N POR APERTURA.- ", bold: true },
                      "La apertura del cr\xE9dito genera una ",
                      { text: "comisi\xF3n \xFAnica del 1.5% ", bold: true },
                      "(uno punto cinco por ciento) m\xE1s el 16% de I.V.A., que ser\xE1 descontada del importe del cr\xE9dito; en consecuencia, en el acto de la firma del presente acto jur\xEDdico, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "entrega al ",
                      { text: `ACREDITADO `, bold: true },
                      "transferencia bancaria por la cantidad de ",
                      { text: `$${inversiones - inversiones * 0.015} ( ${this.util.NumeroALetras2(inversiones - inversiones * 0.015)} 00/100 M N ), `, bold: true },
                      "expedido a favor del ",
                      { text: `ACREDITADO `, bold: true },
                      "y a cargo de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC. Por tanto, el ",
                      { text: `ACREDITADO `, bold: true },
                      "lo recibe en los t\xE9rminos y condiciones del presente contrato, otorgando al ",
                      { text: `ACREEDOR `, bold: true },
                      "el recibo m\xE1s amplio y firme que en derecho corresponda por la cantidad consignada en la cl\xE1usula primera."
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
                      { text: "QUINTA.- DE LOS PAGOS.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga a efectuar los pagos mensuales a que se refiere la cl\xE1usula TERCERA, \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, mediante dep\xF3sito al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
                      { text: `${credito.clabe_interbancaria} `, bold: true },
                      "a la cuenta bancaria de HSBC No 6231216641, as\xED mismo la clave interbancaria 021028062312166411."
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
                      "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, que ser\xE1 el \xFAltimo d\xEDa de cada mes. En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
                      { text: `ACREDITANTE, `, bold: true },
                      "por s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: `FIDEICOMISO, `, bold: true },
                      "para establecer otros mecanismos u otro(s) lugar(es) de pago, de lo cual ser\xE1 informado el ",
                      { text: `ACREDITADO `, bold: true },
                      "La notificaci\xF3n de los cambios o modificaciones podr\xE1n ser por escrito o mediante mensaje de correo electr\xF3nico. En caso de que la notificaci\xF3n sea realizada por correo electr\xF3nico, el ",
                      { text: `ACREDITADO `, bold: true },
                      "podr\xE1 acudir, si as\xED lo desea, al domicilio del ",
                      { text: `ACREDITANTE `, bold: true },
                      "a notificarse por escrito. Los pagos que el ",
                      { text: `ACREDITADO `, bold: true },
                      "haga en relaci\xF3n con este contrato, s\xF3lo podr\xE1n acreditarse mediante el comprobante del dep\xF3sito bancario realizado a favor del patrimonio del ",
                      { text: `FIDEICOMISO `, bold: true }
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
                      "Realizando el pago el ",
                      { text: `ACREDITANTE `, bold: true },
                      "deber\xE1 enviar copia del voucher del dep\xF3sito al correo electr\xF3nico de ",
                      { text: "cobranzabc@baja.com.mx", style: "email" }
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas el Acreditado ser\xE1 boletinado a bur\xF3 de cr\xE9dito Federal en t\xE9rminos de la Ley para regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF y PROFECO.",
                      { text: "\n" },
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
                      { text: "SEXTA. TASA DE INTER\xC9S MORATORIA.- ", bold: true },
                      "En caso de que los pagos no sean realizados oportunamente, se aplicar\xE1 una tasa de ",
                      { text: "inter\xE9s moratoria del 24% ", bold: true },
                      "(Veinticuatro por ciento) m\xE1s I.V.A. El cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga verificativo el pago de dichas prestaciones. En el entendido de que cualquier abono se aplicar\xE1 primeramente a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital."
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
                      { text: "SEPTIMA. VIGILANCIA.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE, `, bold: true },
                      "or s\xED o a trav\xE9s de las autoridades administrativas del ",
                      { text: `FIDEICOMISO, `, bold: true },
                      "podr\xE1 en cualquier momento verificar el exacto cumplimiento de las obligaciones que por el presente Contrato se han generado a cargo del ",
                      { text: `ACREDITADO `, bold: true },
                      "y el ",
                      { text: `AVAL. `, bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "se obliga a cubrir los gastos que se generen por dicha supervisi\xF3n, gastos de cobranza y los dem\xE1s que se generen en caso de su incumplimiento."
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
                      { text: "OCTAVA. ", bold: true },
                      "El ",
                      { text: `ACREDITANTE, `, bold: true },
                      "se obliga a mantener cartel visible proporcionado por el FIDEICOMISO, a la vista dentro del negocio en el cual se especificar\xE1 que es beneficiario del Programa ",
                      { text: "EMPRENDE EMPRESARIAL PFAE 2025.", bold: true }
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
                      { text: "NOVENA.- VIGENCIA. ", bold: true },
                      { text: `${programa_inversion.plazo_solicitado_meses} meses `, bold: true },
                      "contados a partir de la fecha de firma del mismo."
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
                    text: "No obstante su terminaci\xF3n, este contrato producir\xE1 todos sus efectos legales hasta tanto no se hayan liquidado en su totalidad las cantidades a su cargo.",
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
                      { text: "D\xC9CIMA.- RESTRICCI\xD3N Y DENUNCIA. ", bold: true },
                      "En t\xE9rminos del art\xEDculo 294 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, HSBC M\xC9XICO queda facultado para restringir el importe del Cr\xE9dito o el plazo en que tiene derecho al ",
                      { text: `ACREDITADO `, bold: true },
                      "a disponer de \xE9l, o ambos a la vez, o para denunciar el Contrato en cualquier tiempo, debiendo notificar al ",
                      { text: `ACREDITADO `, bold: true },
                      "en cualquier medio de contacto, as\xED mismo al ",
                      { text: `AVAL, `, bold: true },
                      "sin que sea necesario el cumplimiento de formalidades especiales."
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
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "y el ",
                      { text: `AVAL, `, bold: true },
                      "aceptan que dicha notificaci\xF3n podr\xE1 realizarse por escrito o a trav\xE9s de cualquier medio electr\xF3nico o telecomunicativo derivado de la ciencia y la tecnolog\xEDa."
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
                      { text: "D\xC9CIMA PRIMERA. CAUSALES DE RESCISI\xD3N Y VENCIMIENTO ANTICIPADO.- ", bold: true },
                      "El ",
                      { text: `ACREDITANTE, `, bold: true },
                      "podr\xE1 rescindir el presente contrato y dar por vencido anticipadamente el plazo para pagar el cr\xE9dito, as\xED como sus intereses ordinarios y moratorios generados, cuando el ",
                      { text: `ACREDITADO `, bold: true },
                      "incurra en cualquiera de los siguientes casos:"
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
                      { text: "I. ", bold: true },
                      "Si se presenta sin mediar justificaci\xF3n, un retraso de tres o m\xE1s meses en los pagos del cr\xE9dito, de acuerdo a los plazos y montos estipulados en la tabla de amortizaci\xF3n."
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
                      { text: "II. ", bold: true },
                      "Si se detecta que existi\xF3 falsedad o alteraci\xF3n en los documentos anexos a la solicitud de cr\xE9dito con el fin de obtener el beneficio."
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
                      { text: "III. ", bold: true },
                      "Si el ",
                      { text: `ACREDITADO `, bold: true },
                      "incumple cualquiera de las obligaciones derivadas del presente contrato y las leyes aplicables, el ",
                      { text: `ACREDITANTE `, bold: true },
                      "podr\xE1 exigir ",
                      { text: `anticipadamente `, bold: true },
                      "el pago total del saldo pendiente de forma inmediata y el ",
                      { text: `ACREDITADO `, bold: true },
                      "responda por los da\xF1os y perjuicios causados, as\xED como gastos judiciales en su caso."
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
                      { text: "D\xC9CIMA SEGUNDA. AVAL.- ", bold: true },
                      "Por virtud del presente contrato, el ",
                      { text: "AVAL ", bold: true },
                      "se constituye como responsable junto con el ACREDITADO, respondiendo de manera directa, subsidiaria e ilimitada respecto de todas las obligaciones contra\xEDdas con el ACREDITANTE y el patrimonio del ",
                      { text: "FIDEICOMISO, ", bold: true },
                      "comprometi\xE9ndose a pagar de manera oportuna el importe total del cr\xE9dito y sus accesorios legales, en los mismos t\xE9rminos en que se encuentra obligado el ",
                      { text: "ACREDITADO, ", bold: true },
                      "de conformidad en lo dispuesto por el art\xEDculo 4 de la Ley de T\xEDtulos y Operaciones de Cr\xE9dito y art\xEDculo 1987, 1988 y 1989 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por los art\xEDculos 1862, 1863 y 1864 del C\xF3digo civil para el Estado de Baja California."
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
                      "De incumplir en 3 o m\xE1s mensualidades vencidas el ",
                      { text: "AVAL ", bold: true },
                      "ser\xE1 boletinado a bur\xF3 de cr\xE9dito federal en t\xE9rminos de la Ley para regular a las Sociedades de informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, CONDUSEF Y PROFECO."
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
                      { text: "D\xC9CIMA TERCERA.-  ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "autoriza al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para que, si as\xED lo desea, inscriba el presente instrumento en el Registro P\xFAblico de la Propiedad de la ciudad de Mexicali, Baja California, sin que esto sea motiv\xF3 para que el ",
                      { text: `ACREDITADO `, bold: true },
                      "incumpla en las condiciones del presente instrumento."
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
                      { text: "D\xC9CIMA CUARTA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "y su ",
                      { text: `AVAL `, bold: true },
                      "otorgar\xE1n su consentimiento Expreso e irrevocable a el ",
                      { text: `ACREDITANTE `, bold: true },
                      "o cualquier persona jur\xEDdica para que conjunta o separadamente consulte, informe, reporte o divulgue toda la informaci\xF3n Financiera relevante al bur\xF3 de cr\xE9dito a efecto de conocer su desempe\xF1o como deudor, su capacidad de pago, o para valorar el riesgo futuro de concederle un cr\xE9dito."
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
                      { text: "D\xC9CIMA QUINTA.- PAGOS ANTICIPADOS Y PAGOS ADELANTADOS. ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "tendr\xE1 el derecho de efectuar pagos anticipados, ya sean totales o parciales, en cualquier momento durante la vigencia del presente contrato de cr\xE9dito, sin incurrir en penalizaciones por pago anticipado. En caso de pago anticipado total, el deudor quedar\xE1 liberado de todas las obligaciones restantes bajo este contrato, siempre y cuando el pago cubra la totalidad del saldo insoluto y cualquier inter\xE9s acumulado hasta la fecha del pago."
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
                      "El pago anticipado se aplicar\xE1 en forma exclusiva al saldo insoluto del principal, siempre y cuando el ",
                      { text: `ACREDITADO `, bold: true },
                      "est\xE9 al corriente en el pago de: a) el principal; b) los intereses ordinarios devengados, as\xED como; c) en su caso, las comisiones y cargos pactados."
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
                      "Trat\xE1ndose de pagos anticipados que liquiden el saldo insoluto, el  ",
                      { text: `ACREDITANTE `, bold: true },
                      "entregar\xE1 al ",
                      { text: `ACREDITADO `, bold: true },
                      "el carta finiquito y la documentaci\xF3n adicional que resulte necesaria que lo exima de cualquier responsabilidad contra\xEDda en el presente contrato."
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
                      "Los pagos anticipados reducir\xE1n el plazo de este contrato, en virtud de que no se variar\xE1 el monto de cada una de las amortizaciones se\xF1aladas en el presente contrato. El hecho de que el  ",
                      { text: `ACREDITADO `, bold: true },
                      "anticipe abonos a capital, no lo exime de la obligaci\xF3n de efectuar los pagos mensuales que est\xE1 obligada a cubrir."
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
                      { text: "D\xC9CIMA SEXTA.- CASO FORTUITO.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "sse obliga al cumplimiento del presente contrato, aun en caso fortuito o fuerza mayor, en t\xE9rminos del art\xEDculo 2111 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por el art\xEDculo 1986 del C\xF3digo civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA S\xC9PTIMA.- CASO DE DEFUNCI\xD3N.- ", bold: true },
                      "Si falleciera el ",
                      { text: `ACREDITADO `, bold: true },
                      "se debe de notificar al ",
                      { text: `FIDEICOMISO `, bold: true },
                      "y entregar acta de defunci\xF3n original y copia para cotejo. En caso de cumplir con el requisito anterior, el acreditado y aval quedar\xE1n autom\xE1ticamente deslindados de toda responsabilidad contractual y se proceder\xE1 a la cancelaci\xF3n del cr\xE9dito de manera inmediata en capital, IVA e intereses ordinarios y moratorios que se hayan generado."
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
                      { text: "D\xC9CIMA OCTAVA.- NO CESI\xD3N.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "acepta que no podr\xE1 ceder o por cualquier otro medio transmitir los derechos y obligaciones que a su favor se deriven del presente contrato sin autorizaci\xF3n previa expresa del ",
                      { text: `ACREDITANTE `, bold: true },
                      "de conformidad en lo dispuesto en el art\xEDculo 2051 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria en el art\xEDculo 1926 del C\xF3digo Civil para el Estado de Baja California."
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
                      { text: "D\xC9CIMA NOVENA.- ", bold: true },
                      "El ",
                      { text: `ACREDITADO `, bold: true },
                      "faculta de manera expresa al ",
                      { text: `ACREDITANTE `, bold: true },
                      "para ceder, descontar o negociar, ante cualquier Instituci\xF3n de Cr\xE9dito del pa\xEDs, los derechos de cr\xE9dito derivados de este Contrato."
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
                      { text: "VIG\xC9SIMA.- DE LOS DOMICILIOS. ", bold: true }
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
                      "Que para efectos del presente Contrato, el ",
                      { text: `ACREDITANTE, `, bold: true },
                      "se\xF1ala como domicilio fiscal el ubicado en, Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010."
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
                      "Que para efectos del presente Contrato, el ",
                      { text: `ACREDITADO, `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio fiscal `, bold: true },
                      "el ubicado en ",
                      {
                        text: `${persona_moral.colonia}, ${persona_moral.calle}, ${persona_moral.no_exterior}, ${persona_moral.no_interior}, ${persona_moral.localidad}, ${persona_moral.ciudades?.nombre} `,
                        bold: true
                      },
                      "Baja California, M\xE9xico, C.P. ",
                      { text: `${persona_moral.representante_legal?.codigo_postal}.`, bold: true }
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
                      "Que para efecto del presente Contrato, el ",
                      { text: `ACREDITADO, `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio particular del representante legal `, bold: true },
                      "el ubicado en ",
                      {
                        text: `${persona_moral.representante_legal?.colonia}, ${persona_moral.representante_legal?.calle}, ${persona_moral.representante_legal?.no_exterior}, ${persona_moral.representante_legal?.no_interior}, ${persona_moral.representante_legal?.localidad}, ${persona_moral.representante_legal?.ciudades?.nombre} `,
                        bold: true
                      },
                      "Baja California, M\xE9xico, C.P. ",
                      { text: `${persona_moral.representante_legal?.codigo_postal}.`, bold: true }
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
                      "Que para efecto del presente Contrato el ",
                      { text: `AVAL `, bold: true },
                      "se\xF1ala como ",
                      { text: `domicilio particular `, bold: true },
                      "el ubicado en ",
                      { text: `${aval.colonia}, ${aval.calle}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.localidad}, ${aval.ciudades?.nombre} `, bold: true }
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
                      { text: "VIG\xC9SIMA PRIMERA.- T\xCDTULO EJECUTIVO, ", bold: true },
                      "en t\xE9rminos del art\xEDculo 68 de la Ley de Instituciones de Cr\xE9dito, el presente contrato, junto con los estados de cuenta certificados por el contador facultado de HSBC M\xC9XICO, constituyen t\xEDtulo ejecutivo, sin necesidad de reconocimiento de firma, ni de ning\xFAn otro requisito."
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
                      { text: "VIG\xC9SIMA SEGUNDA.- DE LA EJECUCI\xD3N. ", bold: true },
                      "Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente contrato a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles y quedando a potestad del ",
                      { text: `ACREDITANTE `, bold: true },
                      "la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca."
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
                      { text: `LE\xCDDO QUE FUE EL PRESENTE CONTRATO Y ACLARADOS SUS ALCANCES Y EFECTOS, LAS PARTES LO FIRMAN DE CONFORMIDAD EN LA CIUDAD DE MEXICALI, BAJA CALIFORNIA A ${dia}, DE ${mes} DEL 2025`, bold: true }
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
                      { text: "POR EL ACREEDOR", bold: true },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2",
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
                    text: "_______________________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `Lic. ALFONSO CH\xC1VEZ P\xC9REZ`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `En su car\xE1cter de apoderado Legal de`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple,`,
                    alignment: "center",
                    style: "body2"
                  },
                  {
                    text: ``,
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
                    text: `"Grupo Financiero HSBC, Divisi\xF3n Fiduciaria"`,
                    alignment: "center",
                    style: "body2"
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
                      { text: "EL ACREDITADO", bold: true }
                    ],
                    alignment: "center",
                    style: "headerNot2"
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
                    text: "_______________________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${persona_moral.representante_legal?.nombre}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `REPRESENTANTE LEGAL DE ${persona_moral.razon_social}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${persona_moral.colonia}, ${persona_moral.calle}, ${persona_moral.no_exterior}, ${persona_moral.no_interior}, ${persona_moral.localidad}, ${persona_moral.ciudades?.nombre}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `TEL. 6869053201,`,
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: [
                      `EL AVAL`,
                      { text: "\n" }
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
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 300, "*"],
              body: [
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "_______________________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${aval.nombre}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `${aval.colonia}, ${aval.calle}, ${aval.no_exterior}, ${aval.no_interior}, ${aval.localidad}, ${aval.ciudades?.nombre}`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
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
                    text: `TEL. 6862163203,`,
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
          },
          "\n",
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 60, "*"],
              body: [
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `TESTIGOS`,
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
          "\n",
          "\n",
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 50, "*"],
              body: [
                [
                  {
                    text: "______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "______________________________________________",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: `CP. ADRIANA SOFIA CORNEJO PORRAS`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `LIC. DALIA IRIS MABEL GODOY TAPIA`,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: `COORDINADOR ADMINISTRATIVO`,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `COORDINADOR JUR\xCDDICO`,
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
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
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
      pdfMake5.createPdf(defDoc).open();
    });
  }
};
_ContratoCreditoEEMService.\u0275fac = function ContratoCreditoEEMService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratoCreditoEEMService)(\u0275\u0275inject(UtilsService2));
};
_ContratoCreditoEEMService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratoCreditoEEMService, factory: _ContratoCreditoEEMService.\u0275fac, providedIn: "any" });
var ContratoCreditoEEMService = _ContratoCreditoEEMService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoCreditoEEMService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }], null);
})();

// src/app/services/documentosLegales/contratos/carta_finiquito.service.ts
var pdfMake6 = __toESM(require_pdfmake());
var pdfFonts6 = __toESM(require_vfs_fonts());
pdfMake6.addVirtualFileSystem(pdfFonts6);
var _cartaFiniquito = class _cartaFiniquito {
  constructor(utils, utilsC, creditoController, chronixPDF, utilsEstadoCuenta) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.chronixPDF = chronixPDF;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
  }
  generarNumeroOficio() {
    const fecha = /* @__PURE__ */ new Date();
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = fecha.toLocaleDateString("es-MX", { month: "short", timeZone: "America/Tijuana" }).replace(".", "").toUpperCase();
    const a\u00F1o = fecha.getFullYear();
    return `SEI/DF/${dia}/${mes}/${a\u00F1o}`;
  }
  generarCartaFiniquito(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonasMorales",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "estadoCuenta",
        "productosFinancieros",
        "sucursales",
        "sesiones"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
      }
      const tablaDPF = credito.datos_persona_fisica;
      const tablaDP = credito.datos_persona_fisica?.datos_personales;
      const tablaDPM = credito.datos_personas_morales;
      const tablaRL = credito.datos_personas_morales?.representante_legal;
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(credito);
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const numeroOficio = this.generarNumeroOficio(), fecha = this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toLowerCase(), nombreAcreditado = this.utils.nombreClienteFromDatosPersonales(tablaDP ?? tablaRL), folio = credito.folio?.toUpperCase(), programa = credito.productos_financieros?.alias.toUpperCase(), capital = this.utilsC.formatearNumeroConComas(credito.monto_autorizado), sesion = credito.sesiones?.sesion, fechaSesion = this.utilsC.fechaAletras(credito.sesiones?.fecha);
      const headerLogo = yield this.chronixPDF.generateHeader(["assets/logo_baja_california.png"], [130], [150]);
      const backgroundLogo = yield this.utilsC.backgroundLogo("assets/logoMexico.png");
      const generatedDocument = {
        pageMargins: [50, 40, 50, 10],
        background: (currentPage, pageSize) => {
          return [
            {
              image: backgroundLogo.image,
              width: 650,
              // Adjust size as needed
              opacity: 0.7,
              // Optional: watermark effect
              absolutePosition: {
                x: (pageSize.width - 650) / 2,
                // Centers the image horizontally
                y: (pageSize.height - 500) / 2
                // Centers the image vertically
              }
            }
          ];
        },
        /*
        defaultStyle: {
          font: "Montserrat" // ✅ Apply Montserrat globally
        },*/
        content: [
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
                      "Carta Finiquito.\n",
                      "Mexicali, Baja California, a ",
                      fecha
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
          // Introduccion
          {
            text: nombreAcreditado,
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
              "\nEstimado beneficiario, en relaci\xF3n al cr\xE9dito que le fue otorgado por este ",
              { text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California (FONDOS BC) ", bold: true },
              "con n\xFAmero de folio ",
              { text: folio, bold: true },
              " correspondiente al Programa ",
              { text: programa, bold: true },
              " que le fue otorgado mediante contrato ",
              { text: creditoID, bold: true },
              ", por un monto de ",
              { text: "$ " + capital, bold: true },
              " aprobado en la ",
              { text: sesion, bold: true },
              " de Comit\xE9 T\xE9cnico de fecha ",
              { text: fechaSesion, bold: true },
              "; cumpliendo en tiempo y forma con la totalidad de los pagos pactados en el contrato anteriormente referido."
            ],
            alignment: "justify",
            fontSize: 11
          },
          {
            text: [
              "\nEn relaci\xF3n a lo anterior, este ",
              { text: "Fideicomiso", bold: true },
              " da por concluido sus obligaciones de pagos, as\xED como la comprobaci\xF3n de la aplicaci\xF3n del recurso. Otorgando el presente documento y plenos efectos liberatorios, concediendo la m\xE1s formal y solemne ",
              { text: "Carta FIniquito", bold: true },
              " que en derecho proceda."
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "\nSe anexa al presente, ",
              { text: "estado de cuenta", bold: true },
              " de fecha ",
              { text: fecha, bold: true },
              " y ",
              { text: "PAGAR\xC9", bold: true },
              " en original."
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: "\nAs\xED mismo pongo a su disposici\xF3n los programas que promueve Gobierno del Estado a trav\xE9s de la Secretar\xEDa de Econom\xEDa e Innovaci\xF3n, tendientes al fortalecimiento de su negocio, los cuales podr\xE1 consultar en el portal oficial",
            alignment: "justify",
            fontSize: 10
          },
          { text: "www.bajacalifornia.gob.mx/SEI/reactivaBC", fontSize: 10 },
          { text: "Sin otro particular, quedo a sus \xF3rdenes para cualquier duda al respecto.", alignment: "left", margin: [0, 15, 0, 0], fontSize: 11 },
          { text: "A T E N T A M E N T E", bold: true, alignment: "center", margin: [0, 20, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          {
            text: ``,
            alignment: "center"
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
            text: `SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N.`,
            alignment: "center",
            fontSize: 10,
            margin: [0, 0, 0, 25]
          },
          {
            text: "C.c.p. C.P. Adriana Sofia Cornejo Porras.- Coordinadora Administrativa de la Direcci\xF3n de Financiamiento. Pte.",
            fontSize: 8
          },
          {
            text: "C.c.p. Lic. Norma Gabriela Garc\xEDa Soltero.- Coordinadora de Cobranza de la Direcci\xF3n de Financiamiento. Pte.",
            fontSize: 8
          },
          {
            text: "C.c.p. Lic. Dalia Iris Mabel Godoy Tapia.- Coordinador Jur\xEDdico de la Direcci\xF3n de Financiamiento. Pte.",
            fontSize: 8
          },
          {
            text: "C.c.p. Archivo",
            fontSize: 8
          },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 500, y2: 0, lineWidth: 2, lineColor: "#53152b" }], margin: [0, 15, 0, 10], alignment: "center" },
          { text: "SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N\n", bold: true, alignment: "center", fontSize: 8 },
          { text: "Calzada Independencia No 994, Edificio del Poder Ejecutivo, CP 21000, Centro C\xEDvico, Mexicali B.C. Tel (686) 558 1048", alignment: "center", fontSize: 8 },
          { text: " 'Fideicomiso para el Desarrollo Econ\xF3mico de Baja California, Centro Comercial La Plazita, Justo Sierra y Honduras #337, Col. Cuauht\xE9moc, CP 21200, Mexicali, B.C.\n", alignment: "center", fontSize: 8 },
          { text: "Tel (686) 568 3120", alignment: "center", fontSize: 8 }
        ]
      };
      pdfMake6.createPdf(generatedDocument).open();
    });
  }
};
_cartaFiniquito.\u0275fac = function cartaFiniquito_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _cartaFiniquito)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice), \u0275\u0275inject(UtilsEstadoCuentaService));
};
_cartaFiniquito.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _cartaFiniquito, factory: _cartaFiniquito.\u0275fac, providedIn: "any" });
var cartaFiniquito = _cartaFiniquito;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(cartaFiniquito, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: ChronixPDFservice }, { type: UtilsEstadoCuentaService }], null);
})();

// src/app/services/documentosLegales/contratos/oficio_requerimiento_pago.service.ts
var pdfMake7 = __toESM(require_pdfmake());
var pdfFonts7 = __toESM(require_vfs_fonts());
pdfMake7.addVirtualFileSystem(pdfFonts7);
var _oficioRequerimientos = class _oficioRequerimientos {
  constructor(utils, utilsC, creditoController, chronixPDF, utilsEstadoCuenta) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.chronixPDF = chronixPDF;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
  }
  generarNumeroOficio() {
    const fecha = /* @__PURE__ */ new Date();
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = fecha.toLocaleDateString("es-MX", { month: "short", timeZone: "America/Tijuana" }).replace(".", "").toUpperCase();
    const a\u00F1o = fecha.getFullYear();
    return `SEI/DF/${dia}/${mes}/${a\u00F1o}`;
  }
  generarOficioRequerimientos(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonasMorales",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "productosFinancieros",
        "sucursales",
        "sesiones"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
      }
      const tablaDPF = credito.datos_persona_fisica;
      const tablaDP = credito.datos_persona_fisica?.datos_personales;
      const tablaDPM = credito.datos_personas_morales;
      const tablaRL = credito.datos_personas_morales?.representante_legal;
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(credito);
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const numeroOficio = this.generarNumeroOficio(), fecha = this.utilsC.fechaAletras(/* @__PURE__ */ new Date()).toLowerCase(), nombreAcreditado = this.utils.nombreClienteFromCredito(credito), nombreNegocio = tablaDPF?.negocios?.nombre ?? tablaDPM?.nombre_comercial, domicilioFiscal = this.utils.domicilioFromDatosModel(tablaDPF?.negocios ?? tablaDPM), domicilioParticular = this.utils.domicilioFromDatosModel(tablaDP ?? tablaRL), localidad = this.utils.municipioFromCredito(credito)?.toUpperCase(), liquidarSinMoratorios = this.utilsC.formatearNumeroConComas(tablaEstadoCuenta?.total_a_liquidar), interesMoratorioAcumulado = this.utilsC.formatearNumeroConComas(tablaEstadoCuenta?.interes_moratorio), folio = credito.folio?.toUpperCase(), fechaApertura = this.utilsC.fechaAletras(tablaEstadoCuenta?.fecha_inicio);
      const headerLogo = yield this.chronixPDF.generateHeader(["assets/logo_baja_california.png"], [130], [150]);
      const backgroundLogo = yield this.utilsC.backgroundLogo("assets/logoMexico.png");
      const generatedDocument = {
        pageSize: { width: 612, height: 936 },
        pageMargins: [50, 40, 50, 10],
        background: (currentPage, pageSize) => {
          return [
            {
              image: backgroundLogo.image,
              width: 650,
              // Adjust size as needed
              opacity: 0.7,
              // Optional: watermark effect
              absolutePosition: {
                x: (pageSize.width - 650) / 2,
                // Centers the image horizontally
                y: (pageSize.height - 500) / 2
                // Centers the image vertically
              }
            }
          ];
        },
        /*
        defaultStyle: {
          font: "Montserrat" // ✅ Apply Montserrat globally
        },*/
        content: [
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
                      "Requerimiento de Pago Urgente.\n",
                      { text: "No.: ", bold: true },
                      //{ text: numeroOficio, bold: true},
                      "Mexicali, Baja California, a ",
                      { text: fecha, bold: true }
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
          // Introduccion
          {
            text: [
              "DESTINATARIO: ",
              nombreAcreditado
            ],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: [
              "NOMBRE DEL NEGOCIO: ",
              nombreNegocio
            ],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: [
              "DOMICILIO FISCAL: ",
              domicilioFiscal
            ],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: [
              "DOMICILIO PARTICULAR: ",
              domicilioParticular
            ],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: [
              "LOCALIDAD: ",
              localidad
            ],
            alignment: "left",
            fontSize: 11,
            bold: true
          },
          {
            text: "P r e s e n t e.",
            margin: [0, 15, 0, 10]
          },
          {
            text: [
              "Por medio de la presente, y en virtud del Contrato de Prestaci\xF3n de Servicios Profesionales firmado entre Accounting & Business Maac y \u200B\u200Bel Fideicomiso para el Desarrollo Econ\xF3mico de Baja California, el cual se faculta al despacho anteriormente se\xF1alado para la realizaci\xF3n de notificaciones a personas que han incurrido en incumplimiento de sus obligaciones contractuales, me permito dirigirme a usted en relaci\xF3n con el contrato de cr\xE9dito identificado con el ",
              { text: "folio n\xFAmero ", bold: true },
              { text: folio, bold: true },
              " celebrado en el ",
              { text: "a\xF1o ", bold: true },
              { text: fechaApertura, bold: true }
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "\nEn este sentido, se le notifica que ha incurrido en incumplimiento de las obligaciones contra\xEDdas con el Fideicomiso, presentando, a la fecha, un ",
              { text: "adeudo de ", bold: true },
              { text: "$ " + liquidarSinMoratorios, bold: true },
              { text: " M.N.", bold: true },
              " por concepto de capital e intereses ordinarios, as\xED como una importaci\xF3n ",
              { text: "adicional de $ ", bold: true },
              { text: interesMoratorioAcumulado, bold: true },
              { text: " M.N. ", bold: true },
              "por concepto de intereses moratorios."
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "\nPor lo anterior, se le solicita que se comunique de manera urgente con la Coordinaci\xF3n de Cobranza, dentro de un plazo no mayor a ",
              { text: "diez d\xEDas h\xE1biles ", bold: true },
              "a partir de la recepci\xF3n de esta notificaci\xF3n. Para tal efecto, puede contactarnos a los tel\xE9fonos ",
              { text: "686-5682906", bold: true },
              " y ",
              { text: "686-5683120, ", bold: true },
              "o bien, acudir personalmente a nuestra oficina ubicada en ",
              { text: "Blvd. Justo Sierra y Honduras #337, Col. Cuauht\xE9moc, CP 21200, Mexicali, BC, en el Centro Comercial \u201CLa Plazita\u201D.", bold: true }
            ],
            alignment: "justify",
            fontSize: 10
          },
          {
            text: [
              "\nDe no atender este requerimiento dentro del plazo indicado, nos veremos en la obligaci\xF3n de ",
              { text: "INICIAR DE MANERA INMEDIATA LAS ACCIONES LEGALES CORRESPONDIENTES PARA EXIGIR EL PAGO TOTAL DEL ADEUDO", bold: true },
              ", lo cual incluir\xE1 los gastos de ejecuci\xF3n e intereses moratorios que correspondan, conforme a la legislaci\xF3n vigente."
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "A T E N T A M E N T E", bold: true, alignment: "center", margin: [0, 20, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 50, 0, 10], alignment: "center" },
          {
            text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ",
            alignment: "center",
            bold: true,
            fontSize: 9
          },
          {
            text: `DIRECTOR DE FINANCIAMIENTO`,
            alignment: "center",
            bold: true,
            fontSize: 9
          },
          {
            text: `FIDEICOMISO PARA EL DESARROLLO`,
            alignment: "center",
            bold: true,
            fontSize: 9
          },
          {
            text: `ECON\xD3MICO DE BAJA CALIFORNIA`,
            alignment: "center",
            bold: true,
            fontSize: 9,
            margin: [0, 0, 0, 25]
          },
          {
            text: "Constancia de Notificaci\xF3n:\n",
            bold: true,
            alignment: "left",
            fontSize: 10,
            margin: [0, 0, 15, 0]
          },
          {
            text: "El dia ______ de ____________ de 2024, a las _____ horas con ________ minutos, se procedi\xF3 a entregar la presente notificaci\xF3n en el domicilio del C. _________________________________________________________, ubicado en ______________________________________________________________________________________________ en la Ciudad de __________________________, Baja California.",
            fontSize: 10,
            alignment: "justify"
          },
          {
            table: {
              widths: ["*", "*"],
              body: [
                [
                  { text: "Nombre y firma de quien entrega:", bold: true, alignment: "center", margin: [0, 5, 0, 60] },
                  { text: "Nombre y firma de quien recibe la notificaci\xF3n:", bold: true, alignment: "center", margin: [0, 5, 0, 60] }
                ]
              ]
            },
            margin: [0, 15, 0, 15],
            fontSize: 9
          },
          { text: "SECRETAR\xCDA DE ECONOM\xCDA E INNOVACI\xD3N\n", bold: true, alignment: "center", fontSize: 8 },
          { text: "Calzada Independencia No 994, Edificio del Poder Ejecutivo, CP 21000, Centro C\xEDvico, Mexicali B.C. Tel (686) 558 1048", alignment: "center", fontSize: 8 },
          { text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California, Centro Comercial La Plazita, Justo Sierra y Honduras #337, Col. Cuauht\xE9moc, CP 21200, Mexicali, B.C.\n", alignment: "center", fontSize: 8 },
          { text: "Tel (686) 568 3120", alignment: "center", fontSize: 8 }
        ]
      };
      pdfMake7.createPdf(generatedDocument).open();
    });
  }
};
_oficioRequerimientos.\u0275fac = function oficioRequerimientos_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _oficioRequerimientos)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(ChronixPDFservice), \u0275\u0275inject(UtilsEstadoCuentaService));
};
_oficioRequerimientos.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _oficioRequerimientos, factory: _oficioRequerimientos.\u0275fac, providedIn: "any" });
var oficioRequerimientos = _oficioRequerimientos;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(oficioRequerimientos, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: ChronixPDFservice }, { type: UtilsEstadoCuentaService }], null);
})();

// src/app/services/documentosLegales/contratos/solicitud_reestructura.service.ts
var pdfMake8 = __toESM(require_pdfmake());
var pdfFonts8 = __toESM(require_vfs_fonts());
pdfMake8.addVirtualFileSystem(pdfFonts8);
var _solicitudReestructura = class _solicitudReestructura {
  constructor(utils, utilsC, creditoController, utilsEstadoCuenta, chronixPDF) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.chronixPDF = chronixPDF;
  }
  generarSolicitudReestructura(creditoParam) {
    return __async(this, null, function* () {
      let creditoID = this.utilsC.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonasMorales",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios",
        "estadoCuenta",
        "abonos",
        "creditosPagos",
        "productosFinancieros",
        "sucursales",
        "sesiones"
      ]);
      if (!credito)
        return;
      const creditoOriginal = yield this.creditoController.creditoOriginalFromReestructuradoS2c(credito);
      if (creditoOriginal) {
        credito.datos_persona_fisica = creditoOriginal.datos_persona_fisica;
        credito.datos_personas_morales = creditoOriginal.datos_personas_morales;
      }
      const tablaDPF = credito.datos_persona_fisica;
      const tablaDP = credito.datos_persona_fisica?.datos_personales;
      const tablaDPM = credito.datos_personas_morales;
      const tablaRL = credito.datos_personas_morales?.representante_legal;
      const tablaEstadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(credito);
      const tablaEstadoCuentaCliente = this.utilsEstadoCuenta.getEstadoCuentaCliente(credito);
      const telefonosCasaPM = this.utilsC.getTelefonosCasa(tablaRL?.telefonos_personales ?? []);
      const telefonosOficinaPM = this.utilsC.getTelefonosOficina(tablaRL?.telefonos_personales ?? []);
      const telefonosCelularPM = this.utilsC.getTelefonosCelular(tablaRL?.telefonos_personales ?? []);
      const telefonosCasaPF = this.utilsC.getTelefonosCasa(tablaDP?.telefonos_personales ?? []);
      const telefonosOficinaPF = this.utilsC.getTelefonosOficina(tablaDP?.telefonos_personales ?? []);
      const telefonosCelularPF = this.utilsC.getTelefonosCelular(tablaDP?.telefonos_personales ?? []);
      const telefonoPM = this.utilsC.combineTelefonosSacaUnNumero(telefonosCasaPM, telefonosCelularPM, telefonosOficinaPM);
      const telefonoPF = this.utilsC.combineTelefonosSacaUnNumero(telefonosCasaPF, telefonosCelularPF, telefonosOficinaPF);
      const fechaInicioReestructura = this.utilsC.fechaAletras(tablaEstadoCuentaCliente?.fechaUltimoPago), nombreAcreditadoRazonSocial = this.utils.nombreClienteFromCredito(credito), folio = credito.folio?.toUpperCase(), email = tablaDP?.email ?? tablaRL?.email, telefono = telefonoPM !== "N/A" ? telefonoPM : telefonoPF, nombrePrograma = credito.productos_financieros?.alias.toUpperCase(), interesMoratorioAcumulado = tablaEstadoCuenta?.interes_moratorio, saldoVencido = tablaEstadoCuenta?.saldo_vencido, montoMinistrar = credito.monto_autorizado, montoTotalPagado = tablaEstadoCuenta?.monto_total_pagado, fechaApertura = this.utilsC.fechaAletras(tablaEstadoCuenta?.fecha_inicio), fechaFinal = fechaInicioReestructura, fechaUltimoPago = this.utilsC.fechaAletras(tablaEstadoCuentaCliente?.fechaUltimoPago), referenciaBancaria = credito.referencia_bancaria.toUpperCase();
      const headerLogo = yield this.chronixPDF.generateHeader(["assets/logo_baja_california.png", "assets/carta_instruccion1.png", "assets/fondosBCrecortado.png"], [130, 130, 130], [150, 130, 120]);
      const backgroundLogo = yield this.utilsC.backgroundLogo("assets/logoMexico.png");
      const generatedDocument = {
        pageMargins: [60, 20, 60, 40],
        content: [
          __spreadValues({}, headerLogo),
          {
            text: [
              "Fecha: ",
              { text: fechaInicioReestructura, bold: true }
            ],
            alignment: "right",
            fontSize: 10,
            margin: [0, 20, 0, 10]
          },
          { text: "Formato de Solicitud de Reestructura de Cr\xE9dito", bold: true, alignment: "center", fontSize: 15, margin: [0, 20, 0, 30] },
          {
            layout: "noBorders",
            table: {
              widths: [100, "*", 100, "*"],
              body: [
                [
                  { text: "Nombre completo:", alignment: "left" },
                  { text: nombreAcreditadoRazonSocial, bold: true },
                  { text: "ID Cr\xE9dito:", margin: [25, 0, 0, 0] },
                  { text: folio, bold: true }
                ],
                [
                  { text: "\nCorreo electr\xF3nico:" },
                  { text: "\n" + email, bold: true },
                  { text: "\nTel\xE9fono", margin: [25, 0, 0, 0] },
                  { text: "\n" + telefono, bold: true }
                ]
              ]
            },
            fontSize: 10
          },
          {
            text: [
              "\nReconozco la deuda con el Fideicomiso para el Desarrollo Econ\xF3mico de Baja California del programa ",
              { text: nombrePrograma, bold: true },
              ", as\xED mismo solicito la condonaci\xF3n de intereses moratorios los cuales ascienden al monto de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(interesMoratorioAcumulado), bold: true },
              " generado por un saldo vencido de ",
              { text: "$ " + this.utilsC.formatearNumeroConComas(saldoVencido), bold: true },
              "\n"
            ],
            alignment: "justify",
            fontSize: 10
          },
          { text: "Estado de cuenta", bold: true, alignment: "center", fontSize: 14, margin: [0, 20, 0, 20] },
          {
            layout: "noBorders",
            table: {
              widths: [110, "*", 110, "*"],
              body: [
                [
                  { text: "Monto total del cr\xE9dito:", alignment: "left" },
                  { text: "$ " + this.utilsC.formatearNumeroConComas(montoMinistrar), bold: true, alignment: "right" },
                  { text: "Fecha de inicio:", margin: [25, 0, 0, 0] },
                  { text: fechaApertura, bold: true }
                ],
                [
                  { text: "\nMonto total pagado:" },
                  { text: "\n$ " + this.utilsC.formatearNumeroConComas(montoTotalPagado), bold: true, alignment: "right" },
                  { text: "\nFecha de final", margin: [25, 0, 0, 0] },
                  { text: "\n" + fechaFinal, bold: true }
                ],
                [
                  { text: "\nMonto total de adeudo:" },
                  { text: "\n$ " + this.utilsC.formatearNumeroConComas(saldoVencido), bold: true, alignment: "right" },
                  { text: "\nFecha de \xFAltimo pago", margin: [25, 0, 0, 0] },
                  { text: "\n" + fechaUltimoPago, bold: true }
                ]
              ]
            },
            fontSize: 9
          },
          { text: "Justificaci\xF3n de atraso en sus mensualidades", alignment: "left", fontSize: 12, margin: [0, 20, 0, 15] },
          {
            canvas: [
              {
                type: "rect",
                x: 0,
                y: 0,
                w: 475,
                h: 120,
                absolutePosition: { x: 210, y: 400 }
                // Dynamically centers it (A4 width ~ 595)
              }
            ]
          },
          { text: "Propuesta de esquema de pagos", alignment: "left", fontSize: 12, margin: [0, 15, 0, 15] },
          {
            canvas: [
              {
                type: "rect",
                x: 0,
                y: 0,
                w: 475,
                h: 120,
                absolutePosition: { x: 210, y: 400 }
                // Dynamically centers it (A4 width ~ 595)
              }
            ],
            margin: [0, 0, 0, 30]
          },
          {
            text: [
              "\n\nCantidades que deber\xEDan ser depositadas a m\xE1s tardar, el d\xEDa convenido de pago en el banco HSBC M\xC9XICO, SOCIEDAD ANONIMA INSTITUCION DE BANCA MULTIPLE, GRUPO FINANCIERO HSBC, a la cuenta de nombre FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA HBMX53260, CLAVE DE SERVICIO 8727, CUENTA 6231216641, CLABE INTERBANCARIA 021028062312166411, con referencia bancaria ",
              { text: referenciaBancaria, bold: true }
            ],
            alignment: "justify",
            fontSize: 10,
            pageBreak: "before",
            margin: [0, 30, 0, 0]
          },
          {
            text: "\nLo anterior queda condicionado a que sea exigido por el fideicomitente o la fiduciaria: el pago total del adeudo reconocido y para el caso de vuelva a incurrir en mora, me comprometo a cubrir el total de los intereses moratorios que me descontaron, as\xED como los que se generen con posterioridad y las mensualidades subsecuentes.",
            alignment: "justify",
            fontSize: 10
          },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 80, 0, 10], alignment: "center" },
          { text: nombreAcreditadoRazonSocial, bold: true, alignment: "center" },
          { text: "Nombre y firma del acreditado/raz\xF3n social", alignment: "center", margin: [0, 10, 0, 0], fontSize: 10 }
        ]
      };
      pdfMake8.createPdf(generatedDocument).open();
    });
  }
};
_solicitudReestructura.\u0275fac = function solicitudReestructura_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _solicitudReestructura)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(ChronixPDFservice));
};
_solicitudReestructura.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _solicitudReestructura, factory: _solicitudReestructura.\u0275fac, providedIn: "any" });
var solicitudReestructura = _solicitudReestructura;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(solicitudReestructura, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: ChronixPDFservice }], null);
})();

// src/app/main/documentos/documentos.component.ts
var _DocumentosComponent = class _DocumentosComponent {
  constructor(contrato_credito_pfea, machoteCartaInstrucciones, contrato_credito_eef, contrato_credito_ttn, contrato_credito_pm, contrato_credito_etm, contrato_credito_etf, contrato_credito_eem, pagare, tabla_amortizacion, notificacion_cobranza, referencia_bancaria, creditoController, formatoTransparencia2, cartaProtesta2, avisoPrivacidad2, solicitudPF, solicitudPM, estadoCuenta2, cartaCompromiso2, convenioPagoPM2, convenioPagoPF2, chronixPDF, contratoNotif, cartaFiniquito2, oficioRequerimientos2, convenioReestructuraPF2, convenioReestructuraPM2, solicitudReestructura2, convenioExtrajudicialPM, convenioExtrajudicialPF, convenioJudicialPM, convenioJudicialPF, api) {
    this.contrato_credito_pfea = contrato_credito_pfea;
    this.machoteCartaInstrucciones = machoteCartaInstrucciones;
    this.contrato_credito_eef = contrato_credito_eef;
    this.contrato_credito_ttn = contrato_credito_ttn;
    this.contrato_credito_pm = contrato_credito_pm;
    this.contrato_credito_etm = contrato_credito_etm;
    this.contrato_credito_etf = contrato_credito_etf;
    this.contrato_credito_eem = contrato_credito_eem;
    this.pagare = pagare;
    this.tabla_amortizacion = tabla_amortizacion;
    this.notificacion_cobranza = notificacion_cobranza;
    this.referencia_bancaria = referencia_bancaria;
    this.creditoController = creditoController;
    this.formatoTransparencia = formatoTransparencia2;
    this.cartaProtesta = cartaProtesta2;
    this.avisoPrivacidad = avisoPrivacidad2;
    this.solicitudPF = solicitudPF;
    this.solicitudPM = solicitudPM;
    this.estadoCuenta = estadoCuenta2;
    this.cartaCompromiso = cartaCompromiso2;
    this.convenioPagoPM = convenioPagoPM2;
    this.convenioPagoPF = convenioPagoPF2;
    this.chronixPDF = chronixPDF;
    this.contratoNotif = contratoNotif;
    this.cartaFiniquito = cartaFiniquito2;
    this.oficioRequerimientos = oficioRequerimientos2;
    this.convenioReestructuraPF = convenioReestructuraPF2;
    this.convenioReestructuraPM = convenioReestructuraPM2;
    this.solicitudReestructura = solicitudReestructura2;
    this.convenioExtrajudicialPM = convenioExtrajudicialPM;
    this.convenioExtrajudicialPF = convenioExtrajudicialPF;
    this.convenioJudicialPM = convenioJudicialPM;
    this.convenioJudicialPF = convenioJudicialPF;
    this.api = api;
    this.divBarraButtons = "row justify-content-end mb-2";
  }
  // Persona Fisica Con Actividad Empresarial
  print_machoteCartaInstrucciones() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(1, [
        "datosPersonales",
        "sesiones",
        "datosPersonales.ciudades",
        "datosPersonales.telefonosPersonales",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.Ciudades"
      ]);
      yield this.machoteCartaInstrucciones.machoteCartaInstrucciones(credito);
    });
  }
  // Persona Fisica Con Actividad Empresarial
  print_pdf_contrato_credito_etf() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(1, [
        "datosPersonales",
        "datosPersonales.ciudades",
        "datosPersonales.telefonosPersonales",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.Ciudades"
      ]);
      yield this.contrato_credito_etf.contratoCreditoETF(credito);
    });
  }
  // Persona Fisica Con Actividad Empresarial
  print_pdf_contrato_credito_ttn() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(1, [
        "datosPersonales",
        "datosPersonales.ciudades",
        "datosPersonales.telefonosPersonales",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.Ciudades"
      ]);
      yield this.contrato_credito_ttn.contratoCreditoTTN(credito);
    });
  }
  // Persona Moral
  print_pdf_contrato_credito_etm() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(1, [
        "datosPersonasMorales",
        "datosPersonales",
        "datosPersonales.telefonosPersonales",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.PersonasMoralesActividadesEconomicas.actividadesEconomicas",
        "datosPersonasMorales.ciudades"
      ]);
      yield this.contrato_credito_etm.contratoCreditoETM(credito);
    });
  }
  // Persona Fisica Con Actividad Empresarial
  print_pdf_contrato_credito_eef() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(1, [
        "datosPersonales",
        "datosPersonales.ciudades",
        "datosPersonales.telefonosPersonales",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.Ciudades"
      ]);
      yield this.contrato_credito_eef.contratoCreditoEEF(credito);
    });
  }
  // Persona Fisica Con Actividad Empresarial
  print_pdf_contrato_credito_pfea() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(1, [
        "datosPersonales",
        "datosPersonales.ciudades",
        "datosPersonales.telefonosPersonales",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios.Ciudades",
        "datosPersonaFisica.datosPersonales.telefonosPersonales"
      ]);
      yield this.contrato_credito_pfea.contratoCredito(credito);
    });
  }
  // Persona Moral
  print_pdf_contrato_contrato_credito_pm() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(3, [
        "datosPersonales",
        "datosPersonales.ciudades",
        "datosPersonales.telefonosPersonales",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonasMorales",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.personasMoralesActividadesEconomicas.actividadesEconomicas"
      ]);
      yield this.contrato_credito_pm.contratoCredito(credito);
    });
  }
  // Persona Moral
  print_pdf_contrato_contrato_credito_eem() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(5, [
        "datosPersonasMorales",
        "datosPersonales",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.PersonasMoralesActividadesEconomicas.actividadesEconomicas",
        "datosPersonasMorales.ciudades"
      ]);
      yield this.contrato_credito_eem.contratoCreditoEEM(credito);
    });
  }
  print_pdf_pagare() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(254, [
        "datosPersonales",
        "datosPersonales.ciudades",
        "datosPersonasMorales",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "productosFinancieros.plazos",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.PersonasMoralesActividadesEconomicas.actividadesEconomicas",
        "datosPersonasMorales.ciudades",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.ciudades"
      ]);
      yield this.pagare.pagare(credito, "no_save", false, "", credito?.fecha_pagare, credito?.fecha_convenio);
    });
  }
  print_pdf_tabla_amortizacion() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(1, [
        "datosPersonales",
        "datosPersonales.ciudades",
        "productosFinancieros.plazos",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonasMorales",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.PersonasMoralesActividadesEconomicas.actividadesEconomicas",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.telefonos",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.Ciudades",
        "datosPersonaFisica.datosPersonales.ciudades"
      ]);
      yield this.tabla_amortizacion.tabla_amortizacion_pdf(credito);
    });
  }
  print_notificacion_cobranza_pfae() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(3, [
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.ciudades",
        "datosPersonaFisica.negocios.negociosActividadesEconomicas",
        "datosPersonaFisica.negocios.negociosActividadesEconomicas.actividadesEconomicas",
        "datosPersonales",
        "datosPersonales.ciudades",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles"
      ]);
      yield this.notificacion_cobranza.NotificacionCobranzaPFAE_pdf(credito);
    });
  }
  print_referencia_bancaria() {
    return __async(this, null, function* () {
      const credito = yield this.creditoController.find(1, [
        "datosPersonales",
        "datosPersonales.ciudades",
        "productosFinancieros.plazos",
        "inversionesProgramas.inversionTipos",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonasMorales",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.representanteLegal",
        "datosPersonasMorales.PersonasMoralesActividadesEconomicas.actividadesEconomicas",
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.telefonos",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.Ciudades"
      ]);
      console.log(credito);
      const { data } = yield firstValueFrom(this.api.get(`api/ejecucion/creditos/referencia_bancaria/${credito.id}`));
      console.log(data);
      if (credito?.referencia_bancaria !== null) {
        yield this.referencia_bancaria.referencia_bancaria(credito);
      }
    });
  }
  generar_amortizaciones() {
    return __async(this, null, function* () {
      const params = {
        capital: 25e5,
        interes_anual: 25 / 100,
        incluir_iva: true,
        gastos_judiciales: 15e3,
        plazos: 56,
        plazo_tipo: "MES",
        credito_id: 15,
        fecha_inicio: (/* @__PURE__ */ new Date()).toLocaleDateString(),
        producto_financiero: "TASA ORDINARIA ANUAL"
      };
      const data = (yield firstValueFrom(this.api.get(`api/amortizaciones/creditos/generar_pagos`, __spreadValues({}, params)))).data;
      console.log(data);
    });
  }
  generarFormatoTransparencia() {
    return __async(this, null, function* () {
      this.formatoTransparencia.generarFormatoTransparencia(9834);
    });
  }
  generarCartaProtesta() {
    return __async(this, null, function* () {
      this.cartaProtesta.generarCartaProtesta(1);
    });
  }
  generarAvisoPrivacidad() {
    return __async(this, null, function* () {
      this.avisoPrivacidad.generarAvisoPrivacidad(1);
    });
  }
  generarSolicitudPF() {
    return __async(this, null, function* () {
      this.solicitudPF.generarSolicitudPF(1);
    });
  }
  generarSolicitudPM() {
    return __async(this, null, function* () {
      this.solicitudPM.generarSolicitudPMfromCreditoID(3);
    });
  }
  generarEstadoCuenta() {
    return __async(this, null, function* () {
      this.estadoCuenta.generarEstadoCuentaFromCreditoID(5);
    });
  }
  generarCartaCompromiso() {
    return __async(this, null, function* () {
      this.cartaCompromiso.generarCartaCompromiso(5);
    });
  }
  generarConvenioPagoPM() {
    return __async(this, null, function* () {
      this.convenioPagoPM.generarConvenioPagoPM(5);
    });
  }
  generarConvenioPagoPF() {
    return __async(this, null, function* () {
      this.convenioPagoPF.generarConvenioPagoPF(2);
    });
  }
  generarChronixTemplate() {
    return __async(this, null, function* () {
      this.chronixPDF.chronixTemplate();
    });
  }
  generarNotificacion() {
    return __async(this, null, function* () {
      const creditos = yield this.creditoController.all({}, ["*"]);
    });
  }
  generarFiniquito() {
    return __async(this, null, function* () {
      this.cartaFiniquito.generarCartaFiniquito(2);
    });
  }
  generarOficioRequerimientos() {
    return __async(this, null, function* () {
      this.oficioRequerimientos.generarOficioRequerimientos(2);
    });
  }
  generarReestructuraPF() {
    return __async(this, null, function* () {
      this.convenioReestructuraPF.generarReestructuraPF(2);
    });
  }
  generarReestructuraPM() {
    return __async(this, null, function* () {
      this.convenioReestructuraPM.generarReestructuraPM(5);
    });
  }
  generarSolicitudReestructura() {
    return __async(this, null, function* () {
      this.solicitudReestructura.generarSolicitudReestructura(2);
    });
  }
  generarConvenioExtrajudicialPM() {
    return __async(this, null, function* () {
      this.convenioExtrajudicialPM.generarConvenioExtrajudicialPM(5);
    });
  }
  generarConvenioExtrajudicialPF() {
    return __async(this, null, function* () {
      this.convenioExtrajudicialPF.generarConvenioExtrajudicialPF(2);
    });
  }
  generarConvenioJudicialPM() {
    return __async(this, null, function* () {
      this.convenioJudicialPM.generarConvenioJudicialPM(5);
    });
  }
  generarConvenioJudicialPF() {
    return __async(this, null, function* () {
      this.convenioJudicialPF.generarConvenioJudicialPF(2);
    });
  }
  arreglos() {
    return __async(this, null, function* () {
      const newData = {
        id: 1,
        credito_id: 2,
        fecha_convenio: "2025-01-16",
        fecha_asignacion: "2025-01-06",
        fecha_demanda: "2025-02-06",
        fecha_admision: "2025-03-06",
        documentos_asignados: "CONTRATO ORIGINAL",
        expediente: "X32D32DA7",
        juzgado: 1,
        tipo_juicio: "NO ASIGNADO",
        emplazamiento_efectivo: "NO",
        oficios_localizacion: "SI",
        domicilio_alterno: "Tijuana",
        usuario_id: 1
      };
      const eventosKey = {
        id: 2,
        credito_id: 15,
        fecha_convenio: "2025-01-16",
        fecha_asignacion: "2025-01-06",
        fecha_demanda: "2025-02-06",
        fecha_admision: "2025-03-06",
        documentos_asignados: "CONTRATO ORIGINAL",
        expediente: "X32D32DA7",
        juzgado: 1,
        tipo_juicio: "NO ASIGNADO",
        emplazamiento_efectivo: "NO",
        oficios_localizacion: "SI",
        domicilio_alterno: "Tijuana",
        usuario_id: 1
      };
      const data = (yield firstValueFrom(this.api.post(`api/juridicos`, eventosKey))).data;
      if (data)
        console.log(data);
    });
  }
};
_DocumentosComponent.\u0275fac = function DocumentosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentosComponent)(\u0275\u0275directiveInject(ContratoCreditoPFAEService), \u0275\u0275directiveInject(ContratoMachoteCartaInstruccionesService), \u0275\u0275directiveInject(ContratoCreditoEEFService), \u0275\u0275directiveInject(ContratoCreditoTTNService), \u0275\u0275directiveInject(ContratoCreditoPMService), \u0275\u0275directiveInject(ContratoCreditoETMService), \u0275\u0275directiveInject(ContratoCreditoETFService), \u0275\u0275directiveInject(ContratoCreditoEEMService), \u0275\u0275directiveInject(PagareService), \u0275\u0275directiveInject(TablaAmortizacionService), \u0275\u0275directiveInject(NotificacionCobranzaPFAEService), \u0275\u0275directiveInject(ReferenciaBancariaService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(formatoTransparencia), \u0275\u0275directiveInject(cartaProtesta), \u0275\u0275directiveInject(avisoPrivacidad), \u0275\u0275directiveInject(solicitudPersonaFisica), \u0275\u0275directiveInject(solicitudPersonaMoral), \u0275\u0275directiveInject(estadoCuenta), \u0275\u0275directiveInject(cartaCompromiso), \u0275\u0275directiveInject(convenioPagoPM), \u0275\u0275directiveInject(convenioPagoPF), \u0275\u0275directiveInject(ChronixPDFservice), \u0275\u0275directiveInject(contratoNotificaciones), \u0275\u0275directiveInject(cartaFiniquito), \u0275\u0275directiveInject(oficioRequerimientos), \u0275\u0275directiveInject(convenioReestructuraPF), \u0275\u0275directiveInject(convenioReestructuraPM), \u0275\u0275directiveInject(solicitudReestructura), \u0275\u0275directiveInject(ConvenioExtrajudicialPM), \u0275\u0275directiveInject(ConvenioExtrajudicialPF), \u0275\u0275directiveInject(ConvenioJudicialPM), \u0275\u0275directiveInject(ConvenioJudicialPF), \u0275\u0275directiveInject(ApiServiceService));
};
_DocumentosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentosComponent, selectors: [["app-documentos"]], inputs: { divBarraButtons: "divBarraButtons" }, decls: 137, vars: 6, consts: [[1, "container-fluid", "p-1", "pt-2", "m-0"], [3, "click"], [1, "mt-lg-4"], [1, "bg-success", 3, "click"], [1, "", 3, "click"], [1, "container"]], template: function DocumentosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "button", 1);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_2_listener() {
      return ctx.print_pdf_contrato_credito_pfea();
    });
    \u0275\u0275text(3, " contrato_credito_pfea ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 1);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_4_listener() {
      return ctx.print_pdf_contrato_contrato_credito_pm();
    });
    \u0275\u0275text(5, " contrato_credito_pm ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 1);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_6_listener() {
      return ctx.print_pdf_pagare();
    });
    \u0275\u0275text(7, " print_pdf_pagare ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 1);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_8_listener() {
      return ctx.print_pdf_tabla_amortizacion();
    });
    \u0275\u0275text(9, " print_pdf_tabla_amortizacion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 1);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_10_listener() {
      return ctx.print_notificacion_cobranza_pfae();
    });
    \u0275\u0275text(11, " print_notificacion_cobranza ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 1);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_12_listener() {
      return ctx.print_referencia_bancaria();
    });
    \u0275\u0275text(13, " print_referencia_bancaria ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 1);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_14_listener() {
      return ctx.generar_amortizaciones();
    });
    \u0275\u0275text(15, " generar_amortizaciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 1);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_16_listener() {
      return ctx.arreglos();
    });
    \u0275\u0275text(17, " arreglos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 2)(19, "div")(20, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_20_listener() {
      return ctx.print_pdf_contrato_credito_eef();
    });
    \u0275\u0275text(21, " Contrato Credito EE F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_22_listener() {
      return ctx.print_pdf_contrato_contrato_credito_eem();
    });
    \u0275\u0275text(23, " Contrato Credito EE M ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_24_listener() {
      return ctx.print_pdf_contrato_credito_etf();
    });
    \u0275\u0275text(25, " Contrato Credito ET F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_26_listener() {
      return ctx.print_pdf_contrato_credito_etm();
    });
    \u0275\u0275text(27, " Contrato Credito ET M ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_28_listener() {
      return ctx.print_pdf_contrato_credito_ttn();
    });
    \u0275\u0275text(29, " Contrato Credito TT N ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 2)(31, "div")(32, "button", 4);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_32_listener() {
      return ctx.print_machoteCartaInstrucciones();
    });
    \u0275\u0275text(33, " Machote Carta Instruccion ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 5)(35, "h2");
    \u0275\u0275text(36, "Generar formato de transferencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_37_listener() {
      return ctx.generarFormatoTransparencia();
    });
    \u0275\u0275text(38, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 5)(40, "h2");
    \u0275\u0275text(41, "Generar carta bajo protesta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_42_listener() {
      return ctx.generarCartaProtesta();
    });
    \u0275\u0275text(43, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 5)(45, "h2");
    \u0275\u0275text(46, "Generar aviso de privacidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_47_listener() {
      return ctx.generarAvisoPrivacidad();
    });
    \u0275\u0275text(48, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 5)(50, "h2");
    \u0275\u0275text(51, "Generar solicitud de persona fisica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_52_listener() {
      return ctx.generarSolicitudPF();
    });
    \u0275\u0275text(53, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 5)(55, "h2");
    \u0275\u0275text(56, "Generar solicitud de persona moral");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_57_listener() {
      return ctx.generarSolicitudPM();
    });
    \u0275\u0275text(58, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 5)(60, "h2");
    \u0275\u0275text(61, "Generar estado de cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_62_listener() {
      return ctx.generarEstadoCuenta();
    });
    \u0275\u0275text(63, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 5)(65, "h2");
    \u0275\u0275text(66, "Generar carta compromiso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_67_listener() {
      return ctx.generarCartaCompromiso();
    });
    \u0275\u0275text(68, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 5)(70, "h2");
    \u0275\u0275text(71, "---------------------------------------");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 5)(73, "h2");
    \u0275\u0275text(74, "Generar Convenio de pago PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_75_listener() {
      return ctx.generarConvenioPagoPM();
    });
    \u0275\u0275text(76, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 5)(78, "h2");
    \u0275\u0275text(79, "Generar Convenio de pago PF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_80_listener() {
      return ctx.generarConvenioPagoPF();
    });
    \u0275\u0275text(81, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 5)(83, "h2");
    \u0275\u0275text(84, "Generar Notificaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_85_listener() {
      return ctx.generarNotificacion();
    });
    \u0275\u0275text(86, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 5)(88, "h2");
    \u0275\u0275text(89, "Generar Carta finiquito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_90_listener() {
      return ctx.generarFiniquito();
    });
    \u0275\u0275text(91, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 5)(93, "h2");
    \u0275\u0275text(94, "Generar Oficio de requerimientos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_95_listener() {
      return ctx.generarOficioRequerimientos();
    });
    \u0275\u0275text(96, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 5)(98, "h2");
    \u0275\u0275text(99, "Generar Convenio de reestructura PF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_100_listener() {
      return ctx.generarReestructuraPF();
    });
    \u0275\u0275text(101, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 5)(103, "h2");
    \u0275\u0275text(104, "Generar Convenio de reestructura PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_105_listener() {
      return ctx.generarReestructuraPM();
    });
    \u0275\u0275text(106, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 5)(108, "h2");
    \u0275\u0275text(109, "Generar Solicitud de reestructura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_110_listener() {
      return ctx.generarSolicitudReestructura();
    });
    \u0275\u0275text(111, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 5)(113, "h2");
    \u0275\u0275text(114, "Generar Convenio Extrajudicial PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_115_listener() {
      return ctx.generarConvenioExtrajudicialPM();
    });
    \u0275\u0275text(116, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div", 5)(118, "h2");
    \u0275\u0275text(119, "Generar Convenio Extrajudicial PF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_120_listener() {
      return ctx.generarConvenioExtrajudicialPF();
    });
    \u0275\u0275text(121, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 5)(123, "h2");
    \u0275\u0275text(124, "Generar Convenio Judicial PM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_125_listener() {
      return ctx.generarConvenioJudicialPM();
    });
    \u0275\u0275text(126, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 5)(128, "h2");
    \u0275\u0275text(129, "Generar Convenio Judicial PF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_130_listener() {
      return ctx.generarConvenioJudicialPF();
    });
    \u0275\u0275text(131, "Download Contract PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 5)(133, "h2");
    \u0275\u0275text(134, "ChronixPDF template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "button", 3);
    \u0275\u0275listener("click", function DocumentosComponent_Template_button_click_135_listener() {
      return ctx.generarChronixTemplate();
    });
    \u0275\u0275text(136, "Show tests");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx.divBarraButtons);
    \u0275\u0275advance(18);
    \u0275\u0275classMap(ctx.divBarraButtons);
    \u0275\u0275advance(12);
    \u0275\u0275classMap(ctx.divBarraButtons);
  }
}, encapsulation: 2 });
var DocumentosComponent = _DocumentosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentosComponent, [{
    type: Component,
    args: [{ selector: "app-documentos", imports: [], template: '<div class="container-fluid p-1 pt-2 m-0">\n  <div [class]="divBarraButtons">\n    <button (click)="print_pdf_contrato_credito_pfea()">\n      contrato_credito_pfea\n    </button>\n    <button (click)="print_pdf_contrato_contrato_credito_pm()">\n      contrato_credito_pm\n    </button>\n    <button (click)="print_pdf_pagare()">\n      print_pdf_pagare\n    </button>\n    <button (click)="print_pdf_tabla_amortizacion()">\n      print_pdf_tabla_amortizacion\n    </button>\n    <button (click)="print_notificacion_cobranza_pfae()">\n      print_notificacion_cobranza\n    </button>\n    <button (click)="print_referencia_bancaria()">\n      print_referencia_bancaria\n    </button>\n    <button (click)="generar_amortizaciones()">\n      generar_amortizaciones\n    </button>\n    <button (click)="arreglos()">\n      arreglos\n    </button>\n  </div>\n  <div class="mt-lg-4">\n    <div [class]="divBarraButtons">\n      <button class="bg-success" (click)="print_pdf_contrato_credito_eef()">\n        Contrato Credito EE F\n      </button>\n      <button class="bg-success" (click)="print_pdf_contrato_contrato_credito_eem()">\n        Contrato Credito EE M\n      </button>\n      <button class="bg-success" (click)="print_pdf_contrato_credito_etf()">\n        Contrato Credito ET F\n      </button>\n      <button class="bg-success" (click)="print_pdf_contrato_credito_etm()">\n        Contrato Credito ET M\n      </button>\n      <button class="bg-success" (click)="print_pdf_contrato_credito_ttn()">\n        Contrato Credito TT N\n      </button>\n    </div>\n  </div>\n  <div class="mt-lg-4">\n    <div [class]="divBarraButtons">\n      <button class="" (click)="print_machoteCartaInstrucciones()">\n        Machote Carta Instruccion\n      </button>\n    </div>\n  </div>\n\n  <div class="container">\n    <h2>Generar formato de transferencia</h2>\n    <button class="bg-success" (click)="generarFormatoTransparencia()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar carta bajo protesta</h2>\n    <button class="bg-success" (click)="generarCartaProtesta()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar aviso de privacidad</h2>\n    <button class="bg-success" (click)="generarAvisoPrivacidad()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar solicitud de persona fisica</h2>\n    <button class="bg-success" (click)="generarSolicitudPF()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar solicitud de persona moral</h2>\n    <button class="bg-success" (click)="generarSolicitudPM()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar estado de cuenta</h2>\n    <button class="bg-success" (click)="generarEstadoCuenta()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar carta compromiso</h2>\n    <button class="bg-success" (click)="generarCartaCompromiso()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>---------------------------------------</h2>\n  </div>\n\n  <div class="container">\n    <h2>Generar Convenio de pago PM</h2>\n    <button class="bg-success" (click)="generarConvenioPagoPM()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Convenio de pago PF</h2>\n    <button class="bg-success" (click)="generarConvenioPagoPF()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Notificaciones</h2>\n    <button class="bg-success" (click)="generarNotificacion()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Carta finiquito</h2>\n    <button class="bg-success" (click)="generarFiniquito()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Oficio de requerimientos</h2>\n    <button class="bg-success" (click)="generarOficioRequerimientos()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Convenio de reestructura PF</h2>\n    <button class="bg-success" (click)="generarReestructuraPF()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Convenio de reestructura PM</h2>\n    <button class="bg-success" (click)="generarReestructuraPM()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Solicitud de reestructura</h2>\n    <button class="bg-success" (click)="generarSolicitudReestructura()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Convenio Extrajudicial PM</h2>\n    <button class="bg-success" (click)="generarConvenioExtrajudicialPM()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Convenio Extrajudicial PF</h2>\n    <button class="bg-success" (click)="generarConvenioExtrajudicialPF()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Convenio Judicial PM</h2>\n    <button class="bg-success" (click)="generarConvenioJudicialPM()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>Generar Convenio Judicial PF</h2>\n    <button class="bg-success" (click)="generarConvenioJudicialPF()">Download Contract PDF</button>\n  </div>\n\n  <div class="container">\n    <h2>ChronixPDF template</h2>\n    <button class="bg-success" (click)="generarChronixTemplate()">Show tests</button>\n  </div>\n</div>\n' }]
  }], () => [{ type: ContratoCreditoPFAEService }, { type: ContratoMachoteCartaInstruccionesService }, { type: ContratoCreditoEEFService }, { type: ContratoCreditoTTNService }, { type: ContratoCreditoPMService }, { type: ContratoCreditoETMService }, { type: ContratoCreditoETFService }, { type: ContratoCreditoEEMService }, { type: PagareService }, { type: TablaAmortizacionService }, { type: NotificacionCobranzaPFAEService }, { type: ReferenciaBancariaService }, { type: CreditoService }, { type: formatoTransparencia }, { type: cartaProtesta }, { type: avisoPrivacidad }, { type: solicitudPersonaFisica }, { type: solicitudPersonaMoral }, { type: estadoCuenta }, { type: cartaCompromiso }, { type: convenioPagoPM }, { type: convenioPagoPF }, { type: ChronixPDFservice }, { type: contratoNotificaciones }, { type: cartaFiniquito }, { type: oficioRequerimientos }, { type: convenioReestructuraPF }, { type: convenioReestructuraPM }, { type: solicitudReestructura }, { type: ConvenioExtrajudicialPM }, { type: ConvenioExtrajudicialPF }, { type: ConvenioJudicialPM }, { type: ConvenioJudicialPF }, { type: ApiServiceService }], { divBarraButtons: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentosComponent, { className: "DocumentosComponent", filePath: "src/app/main/documentos/documentos.component.ts", lineNumber: 71 });
})();

// src/app/main/estado-cuenta/estado-cuenta.component.ts
var _EstadoCuentaComponent = class _EstadoCuentaComponent {
};
_EstadoCuentaComponent.\u0275fac = function EstadoCuentaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadoCuentaComponent)();
};
_EstadoCuentaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstadoCuentaComponent, selectors: [["app-estado-cuenta"]], decls: 1, vars: 0, template: function EstadoCuentaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var EstadoCuentaComponent = _EstadoCuentaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadoCuentaComponent, [{
    type: Component,
    args: [{ selector: "app-estado-cuenta", imports: [
      RouterOutlet
    ], template: "<router-outlet/>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstadoCuentaComponent, { className: "EstadoCuentaComponent", filePath: "src/app/main/estado-cuenta/estado-cuenta.component.ts", lineNumber: 12 });
})();

// src/app/controllers/documento.s2c.service.ts
var _DocumentoS2cService = class _DocumentoS2cService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "documentos_s2c";
    this.columns = [
      "id",
      "credito_id",
      "nombre_documento",
      "tipo_documento",
      "tipo",
      "ruta",
      "nombre_archivo",
      "observaciones",
      "nombre_usuario",
      "usuario_id",
      "created_at",
      "updated_at"
    ];
  }
};
_DocumentoS2cService.\u0275fac = function DocumentoS2cService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentoS2cService)(\u0275\u0275inject(Injector));
};
_DocumentoS2cService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentoS2cService, factory: _DocumentoS2cService.\u0275fac, providedIn: "any" });
var DocumentoS2cService = _DocumentoS2cService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentoS2cService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/digitalizados/documentos-s2c/documentos-s2c.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DocumentosS2cComponent_Conditional_0_Conditional_5_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 8)(11, "a", 11);
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const doc_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r1.nombre_documento);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r1.tipo_documento);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r1.observaciones || "Sin observaciones");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r1.nombre_usuario);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLineSanatized(doc_r1.ruta), \u0275\u0275sanitizeUrl);
  }
}
function DocumentosS2cComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 6)(2, "thead", 7)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Subido Por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 8);
    \u0275\u0275text(13, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, DocumentosS2cComponent_Conditional_0_Conditional_5_For_16_Template, 13, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.documentos);
  }
}
function DocumentosS2cComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, " No hay documentos digitalizados migrados de s2c para este cr\xE9dito. ");
    \u0275\u0275elementEnd();
  }
}
function DocumentosS2cComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275conditionalCreate(5, DocumentosS2cComponent_Conditional_0_Conditional_5_Template, 17, 0, "div", 4)(6, DocumentosS2cComponent_Conditional_0_Conditional_6_Template, 2, 0, "p", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.documentos.length ? 5 : 6);
  }
}
var _DocumentosS2cComponent = class _DocumentosS2cComponent {
  constructor(documentoS2cController, utils) {
    this.documentoS2cController = documentoS2cController;
    this.utils = utils;
    this.title = "Documentos Migrados S2c";
    this.creditoId = input();
    this.documentos = [];
    this.tipo = "CONTRATO";
    effect(() => __async(this, null, function* () {
      const id = this.creditoId();
      this.documentos = [];
      if (id) {
        this.documentos = yield this.documentoS2cController.all({
          conditionals: {
            credito_id: id,
            tipo: this.tipo
          },
          loader: false
        });
      }
    }));
  }
};
_DocumentosS2cComponent.\u0275fac = function DocumentosS2cComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentosS2cComponent)(\u0275\u0275directiveInject(DocumentoS2cService), \u0275\u0275directiveInject(UtilsService));
};
_DocumentosS2cComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentosS2cComponent, selectors: [["app-documentos-s2c"]], inputs: { title: "title", creditoId: [1, "creditoId"], tipo: "tipo" }, decls: 1, vars: 1, consts: [[1, "container-fluid", "p-3"], [1, "card"], [1, "card-header", "text-bg-secondary"], [1, "card-body"], [1, "table-responsive"], [1, "text-center", "text-muted", "h5"], [1, "table", "table-hover", "align-middle"], [1, "table-light"], [1, "text-end"], [1, "fw-medium"], [1, "badge", "bg-primary"], ["target", "_blank", "rel", "noopener noreferrer", "title", "Descargar documento", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "href"], [1, "bi", "bi-download"]], template: function DocumentosS2cComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DocumentosS2cComponent_Conditional_0_Template, 7, 2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.creditoId() ? 0 : -1);
  }
}, encapsulation: 2 });
var DocumentosS2cComponent = _DocumentosS2cComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentosS2cComponent, [{
    type: Component,
    args: [{ selector: "app-documentos-s2c", imports: [], template: `@if(creditoId()){
<div class="container-fluid p-3">
    <div class="card">
        <div class="card-header text-bg-secondary">
            {{title}}
        </div>
        <div class="card-body">
            @if(documentos.length){
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-light">
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Observaciones</th>
                            <th>Subido Por</th>
                            <th class="text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        @for (doc of documentos; track doc.id) {
                        <tr>
                            <td class="fw-medium">{{ doc.nombre_documento }}</td>
                            <td><span class="badge bg-primary">{{ doc.tipo_documento }}</span></td>
                            <td>{{ doc.observaciones || 'Sin observaciones' }}</td>
                            <td>{{ doc.nombre_usuario }}</td>
                            <td class="text-end">
                                <a class="btn btn-sm btn-outline-secondary"
                                    [href]="utils.fileUrlInLineSanatized(doc.ruta)" target="_blank"
                                    rel="noopener noreferrer" title="Descargar documento">
                                    <i class="bi bi-download"></i>
                                </a>
                            </td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
            }@else {
            <p class="text-center text-muted h5">
                No hay documentos digitalizados migrados de s2c para este cr\xE9dito.
            </p>
            }
        </div>
    </div>
</div>
}` }]
  }], () => [{ type: DocumentoS2cService }, { type: UtilsService }], { title: [{
    type: Input
  }], tipo: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentosS2cComponent, { className: "DocumentosS2cComponent", filePath: "src/app/main/digitalizados/documentos-s2c/documentos-s2c.component.ts", lineNumber: 14 });
})();

// src/app/controllers/credito.contrato.documento.service.ts
var _CreditoContratoDocumentoService = class _CreditoContratoDocumentoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_contratos_documentos";
    this.columns = [
      "credito_id",
      "usuario_id",
      "tipo",
      "documento_url"
    ];
  }
};
_CreditoContratoDocumentoService.\u0275fac = function CreditoContratoDocumentoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoContratoDocumentoService)(\u0275\u0275inject(Injector));
};
_CreditoContratoDocumentoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoContratoDocumentoService, factory: _CreditoContratoDocumentoService.\u0275fac, providedIn: "any" });
var CreditoContratoDocumentoService = _CreditoContratoDocumentoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoContratoDocumentoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/digitalizados/contratos/contratos.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ContratosComponent_Conditional_0_Conditional_5_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 8)(9, "a", 11);
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const doc_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r1.documento_url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r1.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r1.usuarios == null ? null : doc_r1.usuarios.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLineSanatized(doc_r1.documento_url), \u0275\u0275sanitizeUrl);
  }
}
function ContratosComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 6)(2, "thead", 7)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Subido Por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 8);
    \u0275\u0275text(11, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ContratosComponent_Conditional_0_Conditional_5_For_14_Template, 11, 4, "tr", null, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.documentos);
  }
}
function ContratosComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, " No hay documentos digitalizados en el sistema nuevo para este cr\xE9dito. ");
    \u0275\u0275elementEnd();
  }
}
function ContratosComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, " Contratos: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275conditionalCreate(5, ContratosComponent_Conditional_0_Conditional_5_Template, 15, 0, "div", 4)(6, ContratosComponent_Conditional_0_Conditional_6_Template, 2, 0, "p", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.documentos.length ? 5 : 6);
  }
}
var _ContratosComponent = class _ContratosComponent {
  constructor(contratosService, utils) {
    this.contratosService = contratosService;
    this.utils = utils;
    this.creditoId = input();
    this.documentos = [];
    effect(() => __async(this, null, function* () {
      const id = this.creditoId();
      this.documentos = [];
      if (id) {
        this.documentos = yield this.contratosService.all({
          conditionals: [
            {
              key: "credito_id",
              operator: "=",
              value: id
            },
            {
              key: "documento_url",
              operator: "IS NOT NULL",
              value: "null"
            }
          ],
          loader: false
        });
      }
    }));
  }
};
_ContratosComponent.\u0275fac = function ContratosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratosComponent)(\u0275\u0275directiveInject(CreditoContratoDocumentoService), \u0275\u0275directiveInject(UtilsService));
};
_ContratosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContratosComponent, selectors: [["app-contratos"]], inputs: { creditoId: [1, "creditoId"] }, decls: 1, vars: 1, consts: [[1, "container-fluid", "p-3"], [1, "card"], [1, "card-header", "text-bg-secondary"], [1, "card-body"], [1, "table-responsive"], [1, "text-center", "text-muted", "h5"], [1, "table", "table-hover", "align-middle"], [1, "table-light"], [1, "text-end"], [1, "fw-medium"], [1, "badge", "bg-primary"], ["target", "_blank", "rel", "noopener noreferrer", "title", "Descargar documento", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "href"], [1, "bi", "bi-download"]], template: function ContratosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContratosComponent_Conditional_0_Template, 7, 1, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.creditoId() ? 0 : -1);
  }
}, encapsulation: 2 });
var ContratosComponent = _ContratosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratosComponent, [{
    type: Component,
    args: [{ selector: "app-contratos", imports: [], template: '@if (creditoId()) {\n    <div class="container-fluid p-3">\n    <div class="card">\n        <div class="card-header text-bg-secondary">\n            Contratos:\n        </div>\n        <div class="card-body">\n            @if(documentos.length){\n            <div class="table-responsive">\n                <table class="table table-hover align-middle">\n                    <thead class="table-light">\n                        <tr>\n                            <th>Nombre</th>\n                            <th>Tipo</th>\n                            <th>Subido Por</th>\n                            <th class="text-end">Acciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        @for (doc of documentos; track doc.id) {\n                        <tr>\n                            <td class="fw-medium">{{ doc.documento_url }}</td>\n                            <td><span class="badge bg-primary">{{ doc.tipo }}</span></td>\n                            <td>{{ doc.usuarios?.nombre }}</td>\n                            <td class="text-end">\n                                <a class="btn btn-sm btn-outline-secondary"\n                                    [href]="utils.fileUrlInLineSanatized(doc.documento_url)" target="_blank"\n                                    rel="noopener noreferrer" title="Descargar documento">\n                                    <i class="bi bi-download"></i>\n                                </a>\n                            </td>\n                        </tr>\n                        }\n                    </tbody>\n                </table>\n            </div>\n            }@else {\n            <p class="text-center text-muted h5">\n                No hay documentos digitalizados en el sistema nuevo para este cr\xE9dito.\n            </p>\n            }\n        </div>\n    </div>\n</div>\n}' }]
  }], () => [{ type: CreditoContratoDocumentoService }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContratosComponent, { className: "ContratosComponent", filePath: "src/app/main/digitalizados/contratos/contratos.component.ts", lineNumber: 12 });
})();

// src/app/main/digitalizados/documentos/documentos.component.ts
function DocumentosComponent_Conditional_0_Conditional_5_For_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const documento_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLineSanatized(documento_r1.url), \u0275\u0275sanitizeUrl);
  }
}
function DocumentosComponent_Conditional_0_Conditional_5_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 12)(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 14);
    \u0275\u0275conditionalCreate(9, DocumentosComponent_Conditional_0_Conditional_5_For_14_Conditional_9_Template, 2, 1, "a", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const documento_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.getFileName(documento_r1.url));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(documento_r1.url || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(documento_r1.productos_financieros_documentos == null ? null : documento_r1.productos_financieros_documentos.documento == null ? null : documento_r1.productos_financieros_documentos.documento.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(documento_r1.productos_financieros_documentos == null ? null : documento_r1.productos_financieros_documentos.usuarios == null ? null : documento_r1.productos_financieros_documentos.usuarios.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(documento_r1.url ? 9 : -1);
  }
}
function DocumentosComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 6)(2, "thead", 7)(3, "tr")(4, "th", 8);
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 9);
    \u0275\u0275text(7, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 9);
    \u0275\u0275text(9, "Subido Por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 10);
    \u0275\u0275text(11, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, DocumentosComponent_Conditional_0_Conditional_5_For_14_Template, 10, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.documentos);
  }
}
function DocumentosComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, " No hay documentos subidos para este cr\xE9dito. ");
    \u0275\u0275elementEnd();
  }
}
function DocumentosComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, " Documentos Solicitud ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275conditionalCreate(5, DocumentosComponent_Conditional_0_Conditional_5_Template, 15, 0, "div", 4)(6, DocumentosComponent_Conditional_0_Conditional_6_Template, 2, 0, "p", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.credito()) == null ? null : tmp_1_0.documentos == null ? null : tmp_1_0.documentos.length) ? 5 : 6);
  }
}
var _DocumentosComponent2 = class _DocumentosComponent2 {
  constructor(utils) {
    this.utils = utils;
    this.credito = input();
    this.documentos = [];
    effect(() => {
      const currentCredito = this.credito();
      if (currentCredito?.documentos) {
        this.documentos = currentCredito.documentos;
        console.log(this.documentos);
      } else {
        this.documentos = [];
      }
    });
  }
  getFileName(path) {
    if (!path) {
      return "";
    }
    return path.split("/").pop() || "";
  }
};
_DocumentosComponent2.\u0275fac = function DocumentosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentosComponent2)(\u0275\u0275directiveInject(UtilsService));
};
_DocumentosComponent2.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentosComponent2, selectors: [["app-documentos"]], inputs: { credito: [1, "credito"] }, decls: 1, vars: 1, consts: [[1, "container-fluid", "p-3"], [1, "card"], [1, "card-header", "text-bg-secondary"], [1, "card-body"], [1, "table-responsive"], [1, "text-center", "text-muted", "h5"], [1, "table", "table-hover", "align-middle", 2, "table-layout", "fixed"], [1, "table-light"], [2, "width", "50%"], [2, "width", "20%"], [1, "text-end", 2, "width", "10%"], [1, "fw-medium", "text-truncate", 3, "title"], [1, "fw-medium", "text-truncate"], [1, "badge", "bg-primary"], [1, "text-end"], ["target", "_blank", "rel", "noopener noreferrer", "title", "Descargar documento", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "href"], [1, "bi", "bi-download"]], template: function DocumentosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DocumentosComponent_Conditional_0_Template, 7, 1, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito() ? 0 : -1);
  }
}, encapsulation: 2 });
var DocumentosComponent2 = _DocumentosComponent2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentosComponent2, [{
    type: Component,
    args: [{ selector: "app-documentos", standalone: true, imports: [], template: '@if(credito()){\n<div class="container-fluid p-3">\n    <div class="card">\n        <div class="card-header text-bg-secondary">\n            Documentos Solicitud\n        </div>\n        <div class="card-body">\n            @if(credito()?.documentos?.length){\n            <div class="table-responsive">\n                <table class="table table-hover align-middle" style="table-layout: fixed;">\n                    <thead class="table-light">\n                        <tr>\n                            <th style="width: 50%;">Nombre</th>\n                            <th style="width: 20%;">Tipo</th>                            \n                            <th style="width: 20%;">Subido Por</th>\n                            <th class="text-end" style="width: 10%;">Acciones</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        @for (documento of documentos; track $index) {\n                        <tr>\n                            <td class="fw-medium text-truncate" [title]="getFileName(documento.url)">{{ documento.url || "N/A"}}</td>\n                            <td class="fw-medium text-truncate"><span class="badge bg-primary">{{ documento.productos_financieros_documentos?.documento?.nombre }}</span></td>                            \n                            <td>{{ documento.productos_financieros_documentos?.usuarios?.nombre }}</td>\n                            <td class="text-end">\n                                @if(documento.url){\n                                    <a class="btn btn-sm btn-outline-secondary"\n                                [href]="utils.fileUrlInLineSanatized(documento.url)" target="_blank"\n                                rel="noopener noreferrer" title="Descargar documento">\n                                    <i class="bi bi-download"></i>\n                                </a>\n                                }                                \n                            </td>\n                        </tr>\n                        }\n                    </tbody>\n                </table>\n            </div>\n            }@else {\n            <p class="text-center text-muted h5">\n                No hay documentos subidos para este cr\xE9dito.\n            </p>\n            }\n        </div>\n    </div>\n</div>\n}' }]
  }], () => [{ type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentosComponent2, { className: "DocumentosComponent", filePath: "src/app/main/digitalizados/documentos/documentos.component.ts", lineNumber: 15 });
})();

// src/app/main/digitalizados/digitalizados.component.ts
var _DigitalizadosComponent = class _DigitalizadosComponent {
  constructor(router, route, creditoService) {
    this.router = router;
    this.route = route;
    this.creditoService = creditoService;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["credito_id"];
      if (id) {
        this.setCreditoById(id);
      }
    });
  }
  setCreditoById(id) {
    return __async(this, null, function* () {
      this.credito = yield this.creditoService.find(id, [
        "documentos",
        "usuarios",
        "productosFinancieros.documentos.documento",
        "documentos.productosFinancierosDocumentos.documento"
      ]);
      this.creditoId = +id;
    });
  }
  updateUrl() {
    this.router.navigate(["/main/digitalizados/", this.creditoId]);
  }
};
_DigitalizadosComponent.\u0275fac = function DigitalizadosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DigitalizadosComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoService));
};
_DigitalizadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DigitalizadosComponent, selectors: [["app-digitalizados"]], decls: 8, vars: 6, consts: [[1, "container-xxl", "p-3", "bg-white", "rounded", "shadow"], [1, "p-3"], [3, "creditoIdChange", "justId", "creditoId"], [3, "creditoId"], [3, "credito"], ["title", "Documentos Solicitud Migrados", "tipo", "SOLICITUD", 3, "creditoId"]], template: function DigitalizadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
    \u0275\u0275text(2, "Documentos Digitalizados:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-buscador-creditos", 2);
    \u0275\u0275twoWayListener("creditoIdChange", function DigitalizadosComponent_Template_app_buscador_creditos_creditoIdChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.creditoId, $event) || (ctx.creditoId = $event);
      return $event;
    });
    \u0275\u0275listener("creditoIdChange", function DigitalizadosComponent_Template_app_buscador_creditos_creditoIdChange_3_listener() {
      return ctx.updateUrl();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-contratos", 3)(5, "app-documentos-s2c", 3)(6, "app-documentos", 4)(7, "app-documentos-s2c", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("justId", true);
    \u0275\u0275twoWayProperty("creditoId", ctx.creditoId);
    \u0275\u0275advance();
    \u0275\u0275property("creditoId", ctx.creditoId);
    \u0275\u0275advance();
    \u0275\u0275property("creditoId", ctx.creditoId);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx.credito);
    \u0275\u0275advance();
    \u0275\u0275property("creditoId", ctx.creditoId);
  }
}, dependencies: [BuscadorCreditosComponent, DocumentosS2cComponent, ContratosComponent, DocumentosComponent2], encapsulation: 2 });
var DigitalizadosComponent = _DigitalizadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigitalizadosComponent, [{
    type: Component,
    args: [{ selector: "app-digitalizados", imports: [BuscadorCreditosComponent, DocumentosS2cComponent, ContratosComponent, DocumentosComponent2], template: '<div class="container-xxl p-3 bg-white rounded shadow">\n    <h4 class="p-3 ">Documentos Digitalizados:</h4>\n    <app-buscador-creditos [justId]="true" [(creditoId)]="creditoId" (creditoIdChange)="updateUrl()"></app-buscador-creditos>\n    <app-contratos [creditoId]="creditoId"></app-contratos>\n    <app-documentos-s2c [creditoId]="creditoId"></app-documentos-s2c>\n    <app-documentos [credito]="credito"></app-documentos>\n    <app-documentos-s2c title="Documentos Solicitud Migrados" tipo="SOLICITUD" [creditoId]="creditoId"></app-documentos-s2c>\n</div>' }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: CreditoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DigitalizadosComponent, { className: "DigitalizadosComponent", filePath: "src/app/main/digitalizados/digitalizados.component.ts", lineNumber: 16 });
})();

// src/app/main/main.routes.ts
var mainRoutes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  {
    title: "Cotizador",
    path: "cotizador",
    component: CotizadorComponent
  },
  {
    path: "usuarios",
    title: "usuarios",
    component: UsuariosComponent,
    loadChildren: () => import("./chunk-MS3ECNIU.js").then((m) => m.usuariosRoutes)
  },
  {
    path: "apoyos",
    title: "apoyos",
    loadChildren: () => import("./chunk-EUA2U5NJ.js").then((m) => m.apoyosRoutes)
  },
  {
    path: "creditos",
    title: "creditos",
    loadComponent: () => import("./chunk-ZPYNKTZX.js").then((c) => c.CreditosComponent),
    loadChildren: () => import("./chunk-V36KV3YY.js").then((m) => m.creditosRoutes)
  },
  {
    path: "estado-cuenta",
    title: "Estado de Cuentas",
    component: EstadoCuentaComponent,
    loadChildren: () => import("./chunk-3HRWTVFX.js").then((m) => m.estadoCuentasRoutes)
  },
  { path: "folios-sesiones", component: FoliosSesionesComponent },
  { path: "docs-tests", component: DocumentosComponent },
  {
    title: "Juridico",
    path: "juridico",
    loadChildren: () => import("./chunk-IRBLHSVI.js").then((m) => m.juridicoRoutes)
  },
  {
    title: "Cobranza",
    path: "cobranza",
    loadChildren: () => import("./chunk-QCVUBNDR.js").then((m) => m.cobranzaRoutes)
  },
  {
    title: "Convenios",
    path: "convenios",
    loadChildren: () => import("./chunk-GN44JHXM.js").then((m) => m.conveniosRoutes)
  },
  {
    title: "Reportes",
    path: "reportes",
    loadChildren: () => import("./chunk-NVDSLPNK.js").then((m) => m.reportesRoutes)
  },
  {
    path: "informes",
    title: "Informes",
    loadComponent: () => import("./chunk-TCUPD5DK.js").then((m) => m.InformesComponent),
    loadChildren: () => import("./chunk-CEO3UHGH.js").then((m) => m.informesRoutes)
  },
  {
    path: "digitalizados",
    component: DigitalizadosComponent
  },
  {
    path: "digitalizados/:credito_id",
    component: DigitalizadosComponent
  }
];
export {
  mainRoutes
};
//# sourceMappingURL=chunk-PADKAPZH.js.map
