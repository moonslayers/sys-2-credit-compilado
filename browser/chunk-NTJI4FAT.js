import {
  ApoyoProveedorService
} from "./chunk-HIYCMY7R.js";
import {
  cartaCompromiso
} from "./chunk-LHPCDKWN.js";
import {
  ModalidadMinistracionDocumentoService,
  ModalidadMinistracionService
} from "./chunk-YUT24PTQ.js";
import {
  TablaLocalComponent
} from "./chunk-72PDJVTF.js";
import {
  DatoPersonalService
} from "./chunk-NB2YUWRE.js";
import "./chunk-LROCG2JY.js";
import "./chunk-RAXPYTHI.js";
import {
  RecordFormButtonsComponent,
  RecordFormComponent
} from "./chunk-BZ6OSZD3.js";
import {
  GenericFormComponent,
  GenericFormService
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import {
  SolicitudApoyoModalidadService
} from "./chunk-JAJY7KZC.js";
import {
  SolicitudApoyoModalidadCotizacionService
} from "./chunk-GTPYZBE6.js";
import {
  SolicitudApoyoService
} from "./chunk-OBCD5SW4.js";
import {
  DataViewSectionComponent
} from "./chunk-6SWRHHIM.js";
import "./chunk-MLBICDWK.js";
import {
  FormGroupComponent
} from "./chunk-NXIA6ZMF.js";
import {
  FileInputComponent
} from "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import {
  SimpleFieldComponent
} from "./chunk-TX5JQPPK.js";
import {
  SelectFieldComponent
} from "./chunk-XRNE7EBS.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import {
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/apoyos/form-apoyos/form-apoyo-negocio/form-apoyo-negocio.component.ts
var _c0 = () => ({ required: true });
var FORM_DEF = [
  {
    title: "Datos Generales",
    fields: [
      {
        key: "nombre_comercial",
        label: "Nombre Comercial",
        type: "text"
      },
      {
        key: "giro_comercial",
        label: "Giro Comercial",
        type: "text"
      },
      {
        key: "red_social",
        label: "Red Social",
        type: "text"
      },
      {
        key: "empleos_informales_m",
        label: "Empleos Informales Mujeres",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_informales_h",
        label: "Empleos Informales Hombres",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_informales_nb",
        label: "Empleos Informales No Binarios",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_imss_m",
        label: "Empleos IMSS Mujeres",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_imss_h",
        label: "Empleos IMSS Hombres",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_imss_nb",
        label: "Empleos IMSS No Binarios",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_generados_m",
        label: "Empleos A Conservar Mujeres",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_generados_h",
        label: "Empleos A Conservar Hombres",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_generados_nb",
        label: "Empleos A Conservar No Binarios",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_a_generar_m",
        label: "Empleos A Generar Mujeres",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_a_generar_h",
        label: "Empleos A Generar Hombres",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "empleos_a_generar_nb",
        label: "Empleos A Generar No Binarios",
        type: "number",
        defaultValue: 0,
        validator: {
          min: 0
        }
      },
      {
        key: "fuente_informacion",
        label: "\xBFD\xF3nde te enteraste del apoyo?",
        options: ["JORNADA", "OFICINA", "PROSPECCION", "REDES SOCIALES", "CAMARAS"],
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: true
        }
      },
      {
        key: "descripcion_uso_recurso",
        label: "Descripci\xF3n del Uso del Recurso",
        type: "text",
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ]
  },
  {
    title: "Datos Domicilio Negocio",
    fields: [
      {
        key: "calle_negocio",
        label: "Calle",
        type: "text"
      },
      {
        key: "num_ext_negocio",
        label: "No. Exterior",
        type: "text"
      },
      {
        key: "num_int_negocio",
        label: "No. Interior",
        type: "text",
        defaultValue: "",
        validator: {
          required: false
        }
      },
      {
        key: "localidad_negocio",
        label: "Localidad",
        type: "text"
      },
      {
        key: "cp_negocio",
        label: "Codigo Postal",
        type: "number",
        validator: {
          min: 0
        }
      },
      {
        key: "colonia_negocio",
        label: "Colonia",
        type: "text"
      },
      {
        key: "municipio_negocio",
        keyList: "id",
        keyDetalle: "nombre",
        label: "Ciudad",
        apiUrl: "api/ciudades",
        extraData: {
          busqueda_avanzada: JSON.stringify([
            {
              relation: "estados",
              conditionals: [
                ["nombre", "=", "BAJA CALIFORNIA"],
                ["nombre", "=", "baja california"]
              ],
              andConditionals: []
            }
          ])
        }
      },
      {
        key: "telefono_casa_negocio",
        label: "Telefono Casa",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "telefono_oficina_negocio",
        label: "Telefono Oficina",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "telefono_celular_negocio",
        label: "Telefono Celular",
        type: "text"
      },
      {
        key: "antiguedad_negocio",
        label: "Antiguedad Negocio",
        placeholder: "Numero de a\xF1os...",
        type: "number",
        validator: {
          min: 0
        },
        style: {
          div: "col-12 col-sm p-3"
        }
      },
      {
        key: "referencias_dom_negocio",
        type: "text",
        label: "Referencias Domicilio",
        validator: {
          required: false
        },
        style: {
          div: "col-12 col-sm-12 p-3"
        }
      }
    ]
  },
  {
    title: "Datos Fiscale (si aplica)",
    validator: {
      required: false
    },
    fields: [
      {
        key: "actividades_economica_id",
        apiUrl: "api/actividades_economicas",
        keyList: "id",
        keyDetalle: "subgrupo",
        label: "Actividad Economica",
        style: {
          div: "col-12 p-3"
        }
      },
      {
        key: "calle_fiscal",
        label: "Calle",
        type: "text"
      },
      {
        key: "num_ext_fiscal",
        label: "No. Exterior",
        type: "text"
      },
      {
        key: "num_int_fiscal",
        label: "No. Interior",
        type: "text",
        defaultValue: "",
        validator: {
          required: false
        }
      },
      {
        key: "localidad_fiscal",
        label: "Localidad",
        type: "text"
      },
      {
        key: "cp_fiscal",
        label: "Codigo Postal",
        type: "number",
        validator: {
          min: 0
        }
      },
      {
        key: "colonia_fiscal",
        label: "Colonia",
        type: "text"
      },
      {
        key: "municipio_fiscal",
        keyList: "id",
        keyDetalle: "nombre",
        label: "Ciudad",
        apiUrl: "api/ciudades",
        extraData: {
          busqueda_avanzada: JSON.stringify([
            {
              relation: "estados",
              conditionals: [
                ["nombre", "=", "BAJA CALIFORNIA"],
                ["nombre", "=", "baja california"]
              ],
              andConditionals: []
            }
          ])
        }
      },
      {
        key: "telefono_casa_fiscal",
        label: "Telefono Casa",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "telefono_oficina_fiscal",
        label: "Telefono Oficina",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "telefono_celular_fiscal",
        label: "Telefono Celular",
        type: "text"
      },
      {
        key: "referencias_dom_fiscal",
        type: "text",
        label: "Referencias Domicilio",
        validator: {
          required: false
        },
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ]
  },
  {
    title: "Domicilio Fiscal en el Mapa",
    key: "mapField",
    latitud: {
      key: "latitud_fiscal"
    },
    longitud: {
      key: "longitud_fiscal"
    }
  }
];
var _FormApoyoNegocioComponent = class _FormApoyoNegocioComponent {
  constructor(solicitudApoyoController, formService, route, utils) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.formService = formService;
    this.route = route;
    this.utils = utils;
    this.form = FORM_DEF;
    this.editFill = {};
  }
  ngOnInit() {
    this.route.parent?.params.subscribe((params) => __async(this, null, function* () {
      const id = params["apoyo_id"];
      if (id) {
        this.edit = yield this.solicitudApoyoController.find(id, ["datosPersonales.telefonosPersonales"]);
      }
    }));
  }
  autoLlenarDomicilio() {
    if (!this.edit?.datos_personales) {
      console.error("NO HAY DATOS PERSONALES EN SOLICITUD DE APOYO");
      return;
    }
    const { calle, no_exterior, no_interior, localidad, codigo_postal, colonia, ciudad_id, referencias_domicilio } = this.edit.datos_personales;
    const tfc = this.edit.datos_personales.telefonos_personales?.find((tf) => tf.tipo == "CASA")?.numero;
    const tfo = this.edit.datos_personales.telefonos_personales?.find((tf) => tf.tipo == "OFICINA")?.numero;
    const tfcel = this.edit.datos_personales.telefonos_personales?.find((tf) => tf.tipo == "CELULAR")?.numero;
    this.editFill = {
      calle_negocio: this.edit.calle_negocio ?? calle,
      num_ext_negocio: this.edit.num_ext_negocio ?? no_exterior,
      num_int_negocio: this.edit.num_int_negocio ?? no_interior,
      localidad_negocio: this.edit.localidad_negocio ?? localidad,
      cp_negocio: this.edit.cp_negocio ?? codigo_postal,
      colonia_negocio: this.edit.colonia_negocio ?? colonia,
      municipio_negocio: this.edit.municipio_negocio ?? ciudad_id,
      referencias_dom_negocio: this.edit.referencias_dom_negocio ?? referencias_domicilio,
      telefono_casa_negocio: this.edit.telefono_casa_negocio ?? tfc,
      telefono_celular_negocio: this.edit.telefono_celular_negocio ?? tfcel,
      telefono_oficina_negocio: this.edit.telefono_oficina_negocio ?? tfo,
      antiguedad_negocio: this.edit.antiguedad_negocio ?? 0
    };
  }
  autoLlenarDomcilioFiscal() {
    if (!this.edit)
      return;
    const { calle_negocio, num_ext_negocio, num_int_negocio, localidad_negocio, cp_negocio, colonia_negocio, municipio_negocio, referencias_dom_negocio, telefono_casa_negocio, telefono_celular_negocio, telefono_oficina_negocio } = this.edit;
    this.editFill = {
      calle_fiscal: this.edit.calle_fiscal ?? calle_negocio,
      num_ext_fiscal: this.edit.num_ext_fiscal ?? num_ext_negocio,
      num_int_fiscal: this.edit.num_int_fiscal ?? num_int_negocio,
      localidad_fiscal: this.edit.localidad_fiscal ?? localidad_negocio,
      cp_fiscal: this.edit.cp_fiscal ?? cp_negocio,
      colonia_fiscal: this.edit.colonia_fiscal ?? colonia_negocio,
      municipio_fiscal: this.edit.municipio_fiscal ?? municipio_negocio,
      referencias_dom_fiscal: this.edit.referencias_dom_fiscal ?? referencias_dom_negocio,
      telefono_casa_fiscal: this.edit.telefono_casa_fiscal ?? telefono_casa_negocio,
      telefono_celular_fiscal: this.edit.telefono_celular_fiscal ?? telefono_celular_negocio,
      telefono_oficina_fiscal: this.edit.telefono_oficina_fiscal ?? telefono_oficina_negocio
    };
  }
};
_FormApoyoNegocioComponent.\u0275fac = function FormApoyoNegocioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormApoyoNegocioComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(GenericFormService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormApoyoNegocioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormApoyoNegocioComponent, selectors: [["app-form-apoyo-negocio"]], decls: 9, vars: 6, consts: [[1, "container", "position-relative"], [1, "row", "justify-content-end", "sticky-top"], [1, "col-auto", "p-1"], [1, "btn", "btn-primary", 3, "click"], ["rowButtonClass", "row pt-3 pb-0 bg-white sticky-bottom z-2", 3, "editChange", "form", "controller", "edit", "editFill", "validator"]], template: function FormApoyoNegocioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function FormApoyoNegocioComponent_Template_button_click_3_listener() {
      return ctx.autoLlenarDomicilio();
    });
    \u0275\u0275text(4, " Auto Llenar Domicilio ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
    \u0275\u0275listener("click", function FormApoyoNegocioComponent_Template_button_click_6_listener() {
      return ctx.autoLlenarDomcilioFiscal();
    });
    \u0275\u0275text(7, " Auto Llenar Domicilio Fiscal ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "app-generic-form", 4);
    \u0275\u0275twoWayListener("editChange", function FormApoyoNegocioComponent_Template_app_generic_form_editChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("form", ctx.form)("controller", ctx.solicitudApoyoController);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("editFill", ctx.editFill)("validator", \u0275\u0275pureFunction0(5, _c0));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormApoyoNegocioComponent = _FormApoyoNegocioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormApoyoNegocioComponent, [{
    type: Component,
    args: [{ selector: "app-form-apoyo-negocio", imports: [
      GenericFormComponent
    ], template: '<div class="container position-relative">\n    <div class="row justify-content-end sticky-top">\n        <div class="col-auto p-1">\n            <button class="btn btn-primary" (click)="autoLlenarDomicilio()">\n                Auto Llenar Domicilio\n            </button>\n        </div>\n        <div class="col-auto p-1">\n            <button class="btn btn-primary" (click)="autoLlenarDomcilioFiscal()">\n                Auto Llenar Domicilio Fiscal\n            </button>\n        </div>\n    </div>\n    <app-generic-form\n    [form]="form"\n    [controller]="solicitudApoyoController"\n    [(edit)]="edit"\n    [editFill]="editFill"\n    [validator]="{required:true}"\n    rowButtonClass="row pt-3 pb-0 bg-white sticky-bottom z-2" \n    />\n</div>' }]
  }], () => [{ type: SolicitudApoyoService }, { type: GenericFormService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormApoyoNegocioComponent, { className: "FormApoyoNegocioComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-negocio/form-apoyo-negocio.component.ts", lineNumber: 390 });
})();

// src/app/shared/select-datos-personales/select-datos-personales.component.ts
var _c02 = () => ["nombre", "apellido_paterno", "apellido_materno"];
var _c1 = () => ["datosPersonasMorales", "creditos", "datosPersonasFisicas"];
var _c2 = () => ["id", "nombre", "apellido_paterno", "apellido_materno", "email", "escolaridad", "estado_civil", "estado_nacimiento", "rfc", "curp"];
var _c3 = () => ["calle", "no_exterior", "no_interior", "colonia", "codigo_postal", "localidad", "ciudades", "referencias_domicilio"];
var _c4 = () => ["deleted_at", "datos_personal_id", "usuario_id"];
var _c5 = () => ["cobro_intereses_moratorios", "datos_bacarios_verificados", "referencia_bancaria"];
var _c6 = () => [];
function SelectDatosPersonalesComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c5))("dataSource", ctx_r0.datoPersonal.creditos_pm);
  }
}
function SelectDatosPersonalesComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c5))("dataSource", ctx_r0.datoPersonal.creditos_pf);
  }
}
function SelectDatosPersonalesComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c6))("dataSource", ctx_r0.datoPersonal.solicitudes_apoyos);
  }
}
function SelectDatosPersonalesComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c6))("dataSource", ctx_r0.datoPersonal.modalidades_ministraciones);
  }
}
function SelectDatosPersonalesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "data-view-section", 7)(2, "data-view-section", 8)(3, "data-view-section", 9)(4, "tabla-local", 10);
    \u0275\u0275conditionalCreate(5, SelectDatosPersonalesComponent_Conditional_4_Conditional_5_Template, 1, 3, "tabla-local", 11);
    \u0275\u0275conditionalCreate(6, SelectDatosPersonalesComponent_Conditional_4_Conditional_6_Template, 1, 3, "tabla-local", 12);
    \u0275\u0275conditionalCreate(7, SelectDatosPersonalesComponent_Conditional_4_Conditional_7_Template, 1, 3, "tabla-local", 13);
    \u0275\u0275conditionalCreate(8, SelectDatosPersonalesComponent_Conditional_4_Conditional_8_Template, 1, 3, "tabla-local", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r0.datoPersonal.id)("data", ctx_r0.datoPersonal)("keys", \u0275\u0275pureFunction0(15, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r0.datoPersonal.id)("data", ctx_r0.datoPersonal)("keys", \u0275\u0275pureFunction0(16, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r0.datoPersonal.id)("data", ctx_r0.datoPersonal.telefonos_personales)("ignoreKeys", \u0275\u0275pureFunction0(17, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(18, _c5))("dataSource", ctx_r0.datoPersonal.creditos);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.datoPersonal.creditos_pm ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.datoPersonal.creditos_pf ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.datoPersonal.solicitudes_apoyos ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.datoPersonal.modalidades_ministraciones ? 8 : -1);
  }
}
var _SelectDatosPersonalesComponent = class _SelectDatosPersonalesComponent {
  constructor(dpController) {
    this.dpController = dpController;
    this.datoPersonalIdChange = new EventEmitter();
    this.datoPersonalChange = new EventEmitter();
    this.searchLabel = "\xBFEl solicitante existe en el sistema?";
  }
  ngOnChanges(changes) {
    if (changes["datoPersonalId"] && this.datoPersonalId) {
      this.setDatosPersonales(this.datoPersonalId);
    }
  }
  setDatosPersonales(id) {
    return __async(this, null, function* () {
      if (typeof id == "number") {
        this.datoPersonal = yield this.dpController.find(id, ["creditos", "creditosPf", "creditosPm", "telefonosPersonales", "ciudades", "estado_nacimiento", "solicitudesApoyos", "modalidadesMinistraciones"], false);
        return;
      }
      this.datoPersonal = void 0;
    });
  }
  onSelected() {
    this.datoPersonalChange.emit(this.datoPersonal);
    this.datoPersonalIdChange.emit(this.datoPersonal?.id);
  }
};
_SelectDatosPersonalesComponent.\u0275fac = function SelectDatosPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectDatosPersonalesComponent)(\u0275\u0275directiveInject(DatoPersonalService));
};
_SelectDatosPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectDatosPersonalesComponent, selectors: [["app-select-datos-personales"]], inputs: { datoPersonalId: "datoPersonalId", datoPersonal: "datoPersonal", searchLabel: "searchLabel" }, outputs: { datoPersonalIdChange: "datoPersonalIdChange", datoPersonalChange: "datoPersonalChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 8, vars: 8, consts: [[1, "container-fluid"], [1, "row", "justify-content-evenly"], [1, "col-12", "col-sm", "p-3"], ["placeholder", "Ingrese un Curp", "apiUrl", "api/datos_personales", "key", "id", "keyDetalle", "curp", "nuevoRedirect", "/catalogos/datos-personales/nuevo", 3, "valueChange", "label", "keyListDetalle", "relations", "value"], [1, "container-fluid", "p-3"], [1, "row", "sticky-bottom", "z-2"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["title", "Datos Personales del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "keys"], ["title", "Direcci\xF3n del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "keys"], ["title", "Tel\xE9fonos del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "ignoreKeys"], ["title", "Creditos Como Aval", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Creditos como Representante Legal", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Creditos como Persona Fisica", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Solicitudes de Apoyo Hechas", "urlRoute", "/main/apoyos/editar/", 3, "ignore", "dataSource"], ["title", "Modalidades y Ministraciones", "urlRoute", "/main/apoyos/editar/", 3, "ignore", "dataSource"]], template: function SelectDatosPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-autocomplete-field", 3);
    \u0275\u0275listener("valueChange", function SelectDatosPersonalesComponent_Template_app_autocomplete_field_valueChange_3_listener($event) {
      return ctx.setDatosPersonales($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(4, SelectDatosPersonalesComponent_Conditional_4_Template, 9, 19, "div", 4);
    \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
    \u0275\u0275listener("click", function SelectDatosPersonalesComponent_Template_button_click_6_listener() {
      return ctx.onSelected();
    });
    \u0275\u0275text(7, " Guardar Solicitante Seleccionado ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("label", ctx.searchLabel)("keyListDetalle", \u0275\u0275pureFunction0(6, _c02))("relations", \u0275\u0275pureFunction0(7, _c1))("value", ctx.datoPersonalId);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.datoPersonal ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.datoPersonal);
  }
}, dependencies: [
  AutocompleteFieldComponent,
  DataViewSectionComponent,
  TablaLocalComponent
], styles: ["\n\n.container-fluid[_ngcontent-%COMP%] {\n  min-height: 30rem;\n}\n/*# sourceMappingURL=select-datos-personales.component.css.map */"] });
var SelectDatosPersonalesComponent = _SelectDatosPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectDatosPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-select-datos-personales", imports: [
      AutocompleteFieldComponent,
      DataViewSectionComponent,
      TablaLocalComponent
    ], template: `<div class="container-fluid">
  <div class="row justify-content-evenly">
    <div class="col-12 col-sm p-3">
      <app-autocomplete-field
        [label]="searchLabel"
        placeholder="Ingrese un Curp"
        apiUrl="api/datos_personales"
        [keyListDetalle]="['nombre','apellido_paterno', 'apellido_materno']"
        key="id"
        keyDetalle="curp"
        [relations]='["datosPersonasMorales","creditos","datosPersonasFisicas",]'
        (valueChange)="setDatosPersonales($event)"
        [value]="datoPersonalId"
        nuevoRedirect="/catalogos/datos-personales/nuevo"
        />
    </div>
  </div>
  @if (datoPersonal) {
    <div class="container-fluid p-3">
      <data-view-section
        title="Datos Personales del Solicitante"
        [editarRoute]="'/catalogos/datos-personales/editar/'+datoPersonal.id"
        [data]="datoPersonal"
        [keys]="['id','nombre', 'apellido_paterno', 'apellido_materno', 'email','escolaridad','estado_civil','estado_nacimiento', 'rfc','curp']"
        bootstrapClass="primary"
        />
      <!-- Section for Address Information -->
      <data-view-section
        title="Direcci\xF3n del Solicitante"
        [editarRoute]="'/catalogos/datos-personales/editar/'+datoPersonal.id"
        [data]="datoPersonal"
        [keys]="['calle', 'no_exterior', 'no_interior', 'colonia', 'codigo_postal', 'localidad', 'ciudades','referencias_domicilio']"
        bootstrapClass="primary"
        />
      <data-view-section
        title="Tel\xE9fonos del Solicitante"
        [editarRoute]="'/catalogos/datos-personales/editar/'+datoPersonal.id"
        [data]="datoPersonal.telefonos_personales"
        [ignoreKeys]="['deleted_at','datos_personal_id','usuario_id']"
        bootstrapClass="primary"
        />
      <tabla-local
        title="Creditos Como Aval"
        urlRoute="/main/creditos/validar/"
        [ignore]="['cobro_intereses_moratorios','datos_bacarios_verificados','referencia_bancaria']"
        [dataSource]="datoPersonal.creditos!"
        />
      @if (datoPersonal.creditos_pm) {
        <tabla-local
          title="Creditos como Representante Legal"
          urlRoute="/main/creditos/validar/"
          [ignore]="['cobro_intereses_moratorios','datos_bacarios_verificados','referencia_bancaria']"
          [dataSource]="datoPersonal.creditos_pm"
          />
      }
      @if (datoPersonal.creditos_pf) {
        <tabla-local
          title="Creditos como Persona Fisica"
          urlRoute="/main/creditos/validar/"
          [ignore]="['cobro_intereses_moratorios','datos_bacarios_verificados','referencia_bancaria']"
          [dataSource]="datoPersonal.creditos_pf"
          />
      }
      @if (datoPersonal.solicitudes_apoyos) {
        <tabla-local
          title="Solicitudes de Apoyo Hechas"
          urlRoute="/main/apoyos/editar/"
          [ignore]="[]"
          [dataSource]="datoPersonal.solicitudes_apoyos"
          />
      }
      @if (datoPersonal.modalidades_ministraciones) {
        <tabla-local
          title="Modalidades y Ministraciones"
          urlRoute="/main/apoyos/editar/"
          [ignore]="[]"
          [dataSource]="datoPersonal.modalidades_ministraciones"
          />
      }
    </div>
  }
  <div class="row sticky-bottom z-2">
    <button class="btn btn-secondary" [disabled]="!datoPersonal" (click)="onSelected()">
      Guardar Solicitante Seleccionado
    </button>
  </div>
</div>`, styles: ["/* src/app/shared/select-datos-personales/select-datos-personales.component.css */\n.container-fluid {\n  min-height: 30rem;\n}\n/*# sourceMappingURL=select-datos-personales.component.css.map */\n"] }]
  }], () => [{ type: DatoPersonalService }], { datoPersonalId: [{
    type: Input
  }], datoPersonalIdChange: [{
    type: Output
  }], datoPersonal: [{
    type: Input
  }], datoPersonalChange: [{
    type: Output
  }], searchLabel: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectDatosPersonalesComponent, { className: "SelectDatosPersonalesComponent", filePath: "src/app/shared/select-datos-personales/select-datos-personales.component.ts", lineNumber: 19 });
})();

// src/app/main/apoyos/form-apoyos/form-apoyo-datos-personales/form-apoyo-datos-personales.component.ts
function FormApoyoDatosPersonalesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-select-datos-personales", 1);
    \u0275\u0275twoWayListener("datoPersonalIdChange", function FormApoyoDatosPersonalesComponent_Conditional_0_Template_app_select_datos_personales_datoPersonalIdChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.solicitudApoyo.datos_personal_id, $event) || (ctx_r1.solicitudApoyo.datos_personal_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("datoPersonalIdChange", function FormApoyoDatosPersonalesComponent_Conditional_0_Template_app_select_datos_personales_datoPersonalIdChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solicitudApoyoController.update(ctx_r1.solicitudApoyo.id, ctx_r1.solicitudApoyo));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("datoPersonalId", ctx_r1.solicitudApoyo.datos_personal_id);
  }
}
var _FormApoyoDatosPersonalesComponent = class _FormApoyoDatosPersonalesComponent {
  constructor(solicitudApoyoController, route) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.route = route;
  }
  ngOnInit() {
    this.route.parent?.params.subscribe((params) => __async(this, null, function* () {
      const id = params["apoyo_id"];
      if (id) {
        this.solicitudApoyo = yield this.solicitudApoyoController.find(id);
      }
    }));
  }
};
_FormApoyoDatosPersonalesComponent.\u0275fac = function FormApoyoDatosPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormApoyoDatosPersonalesComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormApoyoDatosPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormApoyoDatosPersonalesComponent, selectors: [["app-form-apoyo-datos-personales"]], decls: 1, vars: 1, consts: [[3, "datoPersonalId"], [3, "datoPersonalIdChange", "datoPersonalId"]], template: function FormApoyoDatosPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormApoyoDatosPersonalesComponent_Conditional_0_Template, 1, 1, "app-select-datos-personales", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.solicitudApoyo ? 0 : -1);
  }
}, dependencies: [SelectDatosPersonalesComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n/*# sourceMappingURL=form-apoyo-datos-personales.component.css.map */"] });
var FormApoyoDatosPersonalesComponent = _FormApoyoDatosPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormApoyoDatosPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-form-apoyo-datos-personales", imports: [
      SelectDatosPersonalesComponent
    ], template: '@if (solicitudApoyo) {\n  <app-select-datos-personales\n    [(datoPersonalId)]="solicitudApoyo.datos_personal_id"\n    (datoPersonalIdChange)="solicitudApoyoController.update(solicitudApoyo.id,solicitudApoyo)"\n    />\n}', styles: ["/* src/app/main/apoyos/form-apoyos/form-apoyo-datos-personales/form-apoyo-datos-personales.component.css */\n.container {\n  min-height: 20rem;\n}\n/*# sourceMappingURL=form-apoyo-datos-personales.component.css.map */\n"] }]
  }], () => [{ type: SolicitudApoyoService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormApoyoDatosPersonalesComponent, { className: "FormApoyoDatosPersonalesComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-datos-personales/form-apoyo-datos-personales.component.ts", lineNumber: 17 });
})();

// src/app/controllers/solicitud.apoyo.modalidad.documento.service.ts
var _SolicitudApoyoModalidadDocumentoService = class _SolicitudApoyoModalidadDocumentoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "solicitudes_apoyos_mod_doc";
    this.columns = [
      "solicitudes_apoyos_modalidad_id",
      "modalidades_ministraciones_documento_id",
      // 'modalidades_ministracion_documento_id', en backend
      "usuario_id"
    ];
  }
};
_SolicitudApoyoModalidadDocumentoService.\u0275fac = function SolicitudApoyoModalidadDocumentoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SolicitudApoyoModalidadDocumentoService)(\u0275\u0275inject(Injector));
};
_SolicitudApoyoModalidadDocumentoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SolicitudApoyoModalidadDocumentoService, factory: _SolicitudApoyoModalidadDocumentoService.\u0275fac, providedIn: "any" });
var SolicitudApoyoModalidadDocumentoService = _SolicitudApoyoModalidadDocumentoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SolicitudApoyoModalidadDocumentoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/apoyos/form-apoyos/form-apoyo-documentos/form-modalidad-documento/form-modalidad-documento.component.ts
var _c03 = (a0) => ({ id: a0 });
function FormModalidadDocumentoComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementEnd();
  }
}
function FormModalidadDocumentoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "app-file-input", 4);
    \u0275\u0275twoWayListener("urlChange", function FormModalidadDocumentoComponent_Conditional_0_Template_app_file_input_urlChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.record.url, $event) || (ctx_r1.record.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, FormModalidadDocumentoComponent_Conditional_0_Conditional_6_Template, 2, 0, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.record.modalidades_ministraciones_documentos == null ? null : ctx_r1.record.modalidades_ministraciones_documentos.documentos == null ? null : ctx_r1.record.modalidades_ministraciones_documentos.documentos.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(5, _c03, ctx_r1.record.id));
    \u0275\u0275twoWayProperty("url", ctx_r1.record.url);
    \u0275\u0275property("showSimpleDownload", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.record.url ? 6 : -1);
  }
}
var _FormModalidadDocumentoComponent = class _FormModalidadDocumentoComponent extends RecordFormComponent {
  constructor(solicitudApoyoModalidadDocumentoController) {
    super(solicitudApoyoModalidadDocumentoController);
    this.solicitudApoyoModalidadDocumentoController = solicitudApoyoModalidadDocumentoController;
  }
};
_FormModalidadDocumentoComponent.\u0275fac = function FormModalidadDocumentoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormModalidadDocumentoComponent)(\u0275\u0275directiveInject(SolicitudApoyoModalidadDocumentoService));
};
_FormModalidadDocumentoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormModalidadDocumentoComponent, selectors: [["app-form-modalidad-documento"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "container", "rounded", "border", "p-3", "mb-2"], [1, "row", "h5", "text-uppercase"], [1, "col-12", "col-sm"], [1, "col-11", "col-sm"], ["apiUrl", "api/files/apoyos/modalidad/modalidad/save", "key", "document", 3, "urlChange", "formExtra", "url", "showSimpleDownload"], [1, "col-auto"], [1, "bi", "bi-check-circle-fill", "text-success", "fs-4"]], template: function FormModalidadDocumentoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormModalidadDocumentoComponent_Conditional_0_Template, 7, 7, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional((ctx.record.modalidades_ministraciones_documentos == null ? null : ctx.record.modalidades_ministraciones_documentos.documentos == null ? null : ctx.record.modalidades_ministraciones_documentos.documentos.nombre) ? 0 : -1);
  }
}, dependencies: [FileInputComponent], encapsulation: 2 });
var FormModalidadDocumentoComponent = _FormModalidadDocumentoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModalidadDocumentoComponent, [{
    type: Component,
    args: [{ selector: "app-form-modalidad-documento", imports: [
      FileInputComponent
    ], template: '@if (record.modalidades_ministraciones_documentos?.documentos?.nombre) {\n  <div class="container rounded border p-3 mb-2">\n    <div class="row h5 text-uppercase">\n      <div class="col-12 col-sm">\n        {{record.modalidades_ministraciones_documentos?.documentos?.nombre}}\n      </div>\n      <div class="col-11 col-sm">\n        <app-file-input\n          apiUrl="api/files/apoyos/modalidad/modalidad/save"\n          [formExtra]="{id: record.id}"\n          [(url)]="record.url"\n          [showSimpleDownload]="true"\n          key="document"\n          />\n      </div>\n      @if (record.url) {\n        <div class="col-auto">\n          <i class="bi bi-check-circle-fill text-success fs-4"></i>\n        </div>\n      }\n    </div>\n  </div>\n}' }]
  }], () => [{ type: SolicitudApoyoModalidadDocumentoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormModalidadDocumentoComponent, { className: "FormModalidadDocumentoComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-documentos/form-modalidad-documento/form-modalidad-documento.component.ts", lineNumber: 16 });
})();

// src/app/main/apoyos/form-apoyos/form-apoyo-documentos/form-apoyo-documentos.component.ts
function FormApoyoDocumentosComponent_For_1_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-form-modalidad-documento", 7);
  }
  if (rf & 2) {
    const modalidadDocumento_r3 = ctx.$implicit;
    \u0275\u0275property("record", modalidadDocumento_r3);
  }
}
function FormApoyoDocumentosComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "b");
    \u0275\u0275text(2, "Documentos Variados:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "button", 3);
    \u0275\u0275listener("click", function FormApoyoDocumentosComponent_For_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cartaCompromiso.generarCartaCompromiso(ctx_r1.solicitudApoyo));
    });
    \u0275\u0275elementStart(6, "i", 4);
    \u0275\u0275text(7, "Carta Compromiso");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "form-group", 5)(9, "div", 6);
    \u0275\u0275repeaterCreate(10, FormApoyoDocumentosComponent_For_1_For_11_Template, 1, 1, "app-form-modalidad-documento", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const modalidad_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("title", ctx_r1.modalidadDocumentoTitle(modalidad_r4));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(modalidad_r4.solicitudes_apoyos_modalidades_documentos);
  }
}
var _FormApoyoDocumentosComponent = class _FormApoyoDocumentosComponent {
  constructor(route, solicitudApoyoController, cartaCompromiso2, modalidadDocumentosController) {
    this.route = route;
    this.solicitudApoyoController = solicitudApoyoController;
    this.cartaCompromiso = cartaCompromiso2;
    this.modalidadDocumentosController = modalidadDocumentosController;
  }
  ngOnInit() {
    this.route.parent?.params.subscribe((params) => __async(this, null, function* () {
      const id = params["apoyo_id"];
      if (id) {
        this.solicitudApoyo = yield this.solicitudApoyoController.find(id, [
          "solicitudesApoyosModalidades.modalidadesMinistraciones.programasApoyos",
          "solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades",
          "solicitudesApoyosModalidades.solicitudesApoyosModalidadesDocumentos.modalidadesMinistracionesDocumentos.documentos",
          "solicitudesApoyosModalidades.solicitudesApoyosModalidadesDocumentos.modalidadesMinistracionesDocumentos.modalidadesMinistraciones",
          "solicitudesApoyosModalidades.solicitudesApoyosModalidadesDocumentos.modalidadesMinistracionesDocumentos.modalidadesMinistraciones.modalidades"
        ]);
        this.verificarDocumentos();
      }
    }));
  }
  verificarDocumentos() {
    const toCreate = [];
    this.solicitudApoyo?.solicitudes_apoyos_modalidades?.forEach((solicitudModalidad) => __async(this, null, function* () {
      const documentosModalidad = (yield this.modalidadDocumentosController.all({
        modalidades_ministracion_id: solicitudModalidad.modalidades_ministracion_id
      }, ["modalidadesMinistraciones.modalidades"])).filter((dm) => dm.modalidades_ministraciones?.modalidad_id === solicitudModalidad.modalidades_ministraciones?.modalidad_id);
      console.log(documentosModalidad, solicitudModalidad);
      documentosModalidad.forEach((documentoModalidad) => __async(this, null, function* () {
        const find = solicitudModalidad.solicitudes_apoyos_modalidades_documentos?.find((samd) => samd.modalidades_ministraciones_documento_id == documentoModalidad.id);
        if (!find) {
          toCreate.push({
            solicitudes_apoyos_modalidad_id: solicitudModalidad.id,
            modalidades_ministraciones_documento_id: documentoModalidad.id,
            url: "",
            autorizado_por: 0,
            autorizado_fecha: "",
            usuario_id: 0,
            id: 0,
            created_at: ""
          });
        }
      }));
    }));
    console.info("TO CREATE:", toCreate);
  }
  modalidadDocumentoTitle(modalidad) {
    return ((modalidad.modalidades_ministraciones?.programas_apoyos?.alias ?? "") + " - " + (modalidad.modalidades_ministraciones?.modalidades?.nombre ?? "")).toUpperCase();
  }
};
_FormApoyoDocumentosComponent.\u0275fac = function FormApoyoDocumentosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormApoyoDocumentosComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(cartaCompromiso), \u0275\u0275directiveInject(ModalidadMinistracionDocumentoService));
};
_FormApoyoDocumentosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormApoyoDocumentosComponent, selectors: [["app-form-apoyo-documentos"]], decls: 2, vars: 0, consts: [[1, "container", "mt-2"], [1, "row", "justify-content-center", "mb-2"], [1, "col-auto"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-printer"], [3, "title"], [1, "container", "pt-2", "pb-3"], [3, "record"]], template: function FormApoyoDocumentosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FormApoyoDocumentosComponent_For_1_Template, 12, 1, "div", 0, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx.solicitudApoyo == null ? null : ctx.solicitudApoyo.solicitudes_apoyos_modalidades);
  }
}, dependencies: [
  FormModalidadDocumentoComponent,
  FormGroupComponent
], encapsulation: 2 });
var FormApoyoDocumentosComponent = _FormApoyoDocumentosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormApoyoDocumentosComponent, [{
    type: Component,
    args: [{ selector: "app-form-apoyo-documentos", imports: [
      FormModalidadDocumentoComponent,
      FormGroupComponent
    ], template: '@for (modalidad of solicitudApoyo?.solicitudes_apoyos_modalidades; track modalidad) {\n  <div class="container mt-2" >\n    <b>Documentos Variados:</b>\n    <div class="row justify-content-center mb-2">\n      <div class="col-auto">\n        <button class="btn btn-outline-primary" (click)="cartaCompromiso.generarCartaCompromiso(solicitudApoyo)">\n          <i class="bi bi-printer">Carta Compromiso</i>\n        </button>\n      </div>\n    </div>\n    <form-group\n      [title]="modalidadDocumentoTitle(modalidad)"\n      >\n      <div class="container pt-2 pb-3">\n        @for (modalidadDocumento of modalidad.solicitudes_apoyos_modalidades_documentos; track modalidadDocumento) {\n          <app-form-modalidad-documento [record]="modalidadDocumento"  />\n        }\n      </div>\n    </form-group>\n  </div>\n}' }]
  }], () => [{ type: ActivatedRoute }, { type: SolicitudApoyoService }, { type: cartaCompromiso }, { type: ModalidadMinistracionDocumentoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormApoyoDocumentosComponent, { className: "FormApoyoDocumentosComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-documentos/form-apoyo-documentos.component.ts", lineNumber: 24 });
})();

// src/app/main/apoyos/form-apoyos/form-apoyo-datos-bancarios/modalidad-cotizacion/modalidad-cotizacion.component.ts
var _c04 = () => ["sucursal", "estado"];
var _c12 = () => ({ required: true });
var _c22 = () => ({ required: true, min: 0 });
var _c32 = (a0) => ({ id: a0 });
function ModalidadCotizacionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "app-autocomplete-field", 5);
    \u0275\u0275twoWayListener("valueChange", function ModalidadCotizacionComponent_Conditional_2_Template_app_autocomplete_field_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.record.apoyos_proveedor_id, $event) || (ctx_r1.record.apoyos_proveedor_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "div", 4)(3, "app-simple-field", 6);
    \u0275\u0275twoWayListener("valueChange", function ModalidadCotizacionComponent_Conditional_2_Template_app_simple_field_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.record.monto, $event) || (ctx_r1.record.monto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("keyListList", \u0275\u0275pureFunction0(5, _c04))("validator", \u0275\u0275pureFunction0(6, _c12));
    \u0275\u0275twoWayProperty("value", ctx_r1.record.apoyos_proveedor_id);
    \u0275\u0275advance(2);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(7, _c22));
    \u0275\u0275twoWayProperty("value", ctx_r1.record.monto);
  }
}
function ModalidadCotizacionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "app-file-input", 8);
    \u0275\u0275twoWayListener("urlChange", function ModalidadCotizacionComponent_Conditional_3_Template_app_file_input_urlChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.record.documento_url, $event) || (ctx_r1.record.documento_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.record.apoyos_proveedores == null ? null : ctx_r1.record.apoyos_proveedores.nombre_comercial, " - ", ctx_r1.record.apoyos_proveedores == null ? null : ctx_r1.record.apoyos_proveedores.sucursal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, ctx_r1.record.monto));
    \u0275\u0275advance(3);
    \u0275\u0275property("showSimpleDownload", true)("formExtra", \u0275\u0275pureFunction1(8, _c32, ctx_r1.record.id));
    \u0275\u0275twoWayProperty("url", ctx_r1.record.documento_url);
  }
}
var _ModalidadCotizacionComponent = class _ModalidadCotizacionComponent extends RecordFormComponent {
  constructor(solicitudApoyoModalidadCotizacion, apoyoProveedorController) {
    super(solicitudApoyoModalidadCotizacion);
    this.solicitudApoyoModalidadCotizacion = solicitudApoyoModalidadCotizacion;
    this.apoyoProveedorController = apoyoProveedorController;
  }
  afterSaved() {
    return __async(this, null, function* () {
      this.record.apoyos_proveedores = yield this.apoyoProveedorController.find(this.record.apoyos_proveedor_id, [], false);
    });
  }
};
_ModalidadCotizacionComponent.\u0275fac = function ModalidadCotizacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalidadCotizacionComponent)(\u0275\u0275directiveInject(SolicitudApoyoModalidadCotizacionService), \u0275\u0275directiveInject(ApoyoProveedorService));
};
_ModalidadCotizacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalidadCotizacionComponent, selectors: [["app-modalidad-cotizacion"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 6, consts: [[1, "container-fluid", "border", "rounded", "p-3"], [1, "row"], [1, "col-12", "col-sm-auto", "align-self-center", "p-2"], [3, "editChange", "onSaveButtonClick", "onDeleteButtonClick", "edit", "isDeleting", "isLoading", "isSaveDisabled"], [1, "col-12", "col-sm", "p-2"], ["label", "Selecciona un Proveedor", "apiUrl", "api/apoyos_proveedores", "nuevoRedirect", "/catalogos/proveedores/nuevo", "keyList", "id", "keyDetalle", "nombre_comercial", 3, "valueChange", "keyListList", "validator", "value"], ["label", "Monto", "placeholder", "Monto $...", "type", "number", 3, "valueChange", "validator", "value"], [1, "col-12", "col-sm", "p-2", "ps-3", "text-uppercase"], ["apiUrl", "api/files/apoyos/modalidad/cotizaciones/save", "key", "document", "accept", ".pdf", 3, "urlChange", "showSimpleDownload", "formExtra", "url"]], template: function ModalidadCotizacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ModalidadCotizacionComponent_Conditional_2_Template, 4, 8);
    \u0275\u0275conditionalCreate(3, ModalidadCotizacionComponent_Conditional_3_Template, 7, 10);
    \u0275\u0275elementStart(4, "div", 2)(5, "record-form-buttons", 3);
    \u0275\u0275twoWayListener("editChange", function ModalidadCotizacionComponent_Template_record_form_buttons_editChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("onSaveButtonClick", function ModalidadCotizacionComponent_Template_record_form_buttons_onSaveButtonClick_5_listener() {
      return ctx.save();
    })("onDeleteButtonClick", function ModalidadCotizacionComponent_Template_record_form_buttons_onDeleteButtonClick_5_listener() {
      return ctx.delete();
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.edit ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.edit ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("isDeleting", ctx.isDeleting)("isLoading", ctx.isLoading)("isSaveDisabled", !ctx.record.monto || !ctx.record.apoyos_proveedor_id);
  }
}, dependencies: [
  AutocompleteFieldComponent,
  RecordFormButtonsComponent,
  SimpleFieldComponent,
  FileInputComponent,
  CurrencyPipe
], encapsulation: 2 });
var ModalidadCotizacionComponent = _ModalidadCotizacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalidadCotizacionComponent, [{
    type: Component,
    args: [{ selector: "app-modalidad-cotizacion", imports: [
      AutocompleteFieldComponent,
      RecordFormButtonsComponent,
      SimpleFieldComponent,
      FileInputComponent,
      CurrencyPipe
    ], template: `<div class="container-fluid border rounded p-3">
  <div class="row">
    @if (edit) {
      <div class="col-12 col-sm p-2">
        <app-autocomplete-field label="Selecciona un Proveedor" apiUrl="api/apoyos_proveedores"
          nuevoRedirect="/catalogos/proveedores/nuevo" keyList="id" keyDetalle="nombre_comercial"
          [keyListList]="['sucursal','estado']" [validator]="{required:true}"
          [(value)]="record.apoyos_proveedor_id" />
      </div>
      <div class="col-12 col-sm p-2">
        <app-simple-field label="Monto" placeholder="Monto $..." type="number"
          [validator]="{required:true, min:0}" [(value)]="record.monto" />
      </div>
      <!-- <div class="col-12 col-sm p-2"> -->
      <!--   <app-simple-field label="Referencia" placeholder="Referencia..." type="text" [(value)]="record.referencia" /> -->
      <!-- </div> -->
    }
    @if (!edit) {
      <div class="col-12 col-sm p-2 ps-3 text-uppercase">{{record.apoyos_proveedores?.nombre_comercial}} -
      {{record.apoyos_proveedores?.sucursal}}</div>
      <div class="col-12 col-sm p-2">{{record.monto|currency}}</div>
      <!-- <div class="col-12 col-sm p-2">{{record.referencia??'N/A'}}</div> -->
      <div class="col-12 col-sm p-2">
        <app-file-input apiUrl="api/files/apoyos/modalidad/cotizaciones/save" [showSimpleDownload]="true"
          key="document" [formExtra]="{id:record.id}" accept=".pdf" [(url)]="record.documento_url" />
      </div>
    }
    <div class="col-12 col-sm-auto align-self-center p-2">
      <record-form-buttons [(edit)]="edit" [isDeleting]="isDeleting" [isLoading]="isLoading"
        [isSaveDisabled]="!record.monto||!record.apoyos_proveedor_id" (onSaveButtonClick)="save()"
        (onDeleteButtonClick)="delete()">
      </record-form-buttons>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: SolicitudApoyoModalidadCotizacionService }, { type: ApoyoProveedorService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalidadCotizacionComponent, { className: "ModalidadCotizacionComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-datos-bancarios/modalidad-cotizacion/modalidad-cotizacion.component.ts", lineNumber: 25 });
})();

// src/app/main/apoyos/form-apoyos/form-apoyo-datos-bancarios/form-apoyo-datos-bancarios.component.ts
function FormApoyoDatosBancariosComponent_For_2_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-modalidad-cotizacion", 9);
    \u0275\u0275listener("onDeleted", function FormApoyoDatosBancariosComponent_For_2_For_15_Template_app_modalidad_cotizacion_onDeleted_0_listener() {
      const modalidadCotizacion_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const modalidad_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.utils.localDelete(modalidad_r2.solicitudes_apoyos_modalidades_cotizaciones, modalidadCotizacion_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const modalidadCotizacion_r5 = ctx.$implicit;
    \u0275\u0275property("record", modalidadCotizacion_r5);
  }
}
function FormApoyoDatosBancariosComponent_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, " No hay cotizaciones subidas para esa modalidad/ministraci\xF3n. ");
    \u0275\u0275elementEnd();
  }
}
function FormApoyoDatosBancariosComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "form-group", 2);
    \u0275\u0275listener("buttonEvent", function FormApoyoDatosBancariosComponent_For_2_Template_form_group_buttonEvent_1_listener() {
      const modalidad_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.agregarCotizacion(modalidad_r2));
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "b");
    \u0275\u0275text(6, "Proveedor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "b");
    \u0275\u0275text(9, "Monto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5)(11, "b");
    \u0275\u0275text(12, "Documento");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, FormApoyoDatosBancariosComponent_For_2_For_15_Template, 1, 1, "app-modalidad-cotizacion", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(16, FormApoyoDatosBancariosComponent_For_2_Conditional_16_Template, 2, 0, "p", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const modalidad_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r2.modalidadDocumentoTitle(modalidad_r2) + " (max. 2)")("showAddButton", true)("addButtonDisabled", (modalidad_r2.solicitudes_apoyos_modalidades_cotizaciones == null ? null : modalidad_r2.solicitudes_apoyos_modalidades_cotizaciones.length) == 2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(modalidad_r2.solicitudes_apoyos_modalidades_cotizaciones);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((modalidad_r2.solicitudes_apoyos_modalidades_cotizaciones == null ? null : modalidad_r2.solicitudes_apoyos_modalidades_cotizaciones.length) == 0 ? 16 : -1);
  }
}
var _FormApoyoDatosBancariosComponent = class _FormApoyoDatosBancariosComponent {
  constructor(route, solicitudApoyoController, utils) {
    this.route = route;
    this.solicitudApoyoController = solicitudApoyoController;
    this.utils = utils;
  }
  ngOnInit() {
    this.route.parent?.params.subscribe((params) => __async(this, null, function* () {
      const id = params["apoyo_id"];
      if (id) {
        this.solicitudApoyo = yield this.solicitudApoyoController.find(id, [
          "solicitudesApoyosModalidades.modalidadesMinistraciones.programasApoyos",
          "solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades",
          "solicitudesApoyosModalidades.solicitudesApoyosModalidadesCotizaciones.apoyosProveedores"
        ]);
        console.log("Solicitud de apoyo cargada:", this.solicitudApoyo);
      }
    }));
  }
  modalidadDocumentoTitle(modalidad) {
    return ((modalidad.modalidades_ministraciones?.programas_apoyos?.alias ?? "") + " - " + (modalidad.modalidades_ministraciones?.modalidades?.nombre ?? "")).toUpperCase();
  }
  agregarCotizacion(modalidad) {
    if (!modalidad.solicitudes_apoyos_modalidades_cotizaciones) {
      modalidad.solicitudes_apoyos_modalidades_cotizaciones = [];
    }
    modalidad.solicitudes_apoyos_modalidades_cotizaciones.push({
      solicitudes_apoyos_modalidad_id: modalidad.id,
      apoyos_proveedor_id: 0,
      monto: 0,
      autorizado_por: null,
      autorizado_fecha: null,
      documento_url: null,
      usuario_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
  }
};
_FormApoyoDatosBancariosComponent.\u0275fac = function FormApoyoDatosBancariosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormApoyoDatosBancariosComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(UtilsService));
};
_FormApoyoDatosBancariosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormApoyoDatosBancariosComponent, selectors: [["app-form-apoyo-datos-bancarios"]], decls: 3, vars: 0, consts: [[1, "container-fluid", "main", "p-0"], [1, "container-fluid", "pt-2", "px-0"], ["addButtonStyle", "btn btn-success btn-sm", "addButtonIcon", "bi bi-plus-circle-fill", "addButtonText", " Agregar Cotizacion", 3, "buttonEvent", "title", "showAddButton", "addButtonDisabled"], [1, "container", "pt-2", "pb-3"], [1, "row", "px-3"], [1, "col-12", "col-sm", "p-3"], [1, "col-12", "col-sm-1", "p-3"], [3, "record"], [1, "p-4", "text-center", "fw-bold"], [3, "onDeleted", "record"]], template: function FormApoyoDatosBancariosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, FormApoyoDatosBancariosComponent_For_2_Template, 17, 4, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.solicitudApoyo == null ? null : ctx.solicitudApoyo.solicitudes_apoyos_modalidades);
  }
}, dependencies: [
  FormGroupComponent,
  ModalidadCotizacionComponent
], styles: ["\n\n.main[_ngcontent-%COMP%] {\n  min-height: 30rem;\n  padding-bottom: 10rem;\n}\n/*# sourceMappingURL=form-apoyo-datos-bancarios.component.css.map */"] });
var FormApoyoDatosBancariosComponent = _FormApoyoDatosBancariosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormApoyoDatosBancariosComponent, [{
    type: Component,
    args: [{ selector: "app-form-apoyo-datos-bancarios", imports: [
      FormGroupComponent,
      ModalidadCotizacionComponent
    ], template: `<div class="container-fluid main p-0">
  @for (modalidad of solicitudApoyo?.solicitudes_apoyos_modalidades; track modalidad) {
    <div class="container-fluid pt-2 px-0">
      <form-group [title]="modalidadDocumentoTitle(modalidad)+' (max. 2)'" [showAddButton]="true"
        addButtonStyle="btn btn-success btn-sm" addButtonIcon="bi bi-plus-circle-fill"
        addButtonText=" Agregar Cotizacion" (buttonEvent)="agregarCotizacion(modalidad)"
        [addButtonDisabled]="modalidad.solicitudes_apoyos_modalidades_cotizaciones?.length==2">
        <div class="container pt-2 pb-3">
          <div class="row px-3">
            <div class="col-12 col-sm p-3">
              <b>Proveedor</b>
            </div>
            <div class="col-12 col-sm p-3">
              <b>Monto</b>
            </div>
            <!-- <div class="col-12 col-sm p-3"> -->
            <!--   <b>Referencia</b> -->
            <!-- </div> -->
            <div class="col-12 col-sm p-3">
              <b>Documento</b>
            </div>
            <div class="col-12 col-sm-1 p-3">
            </div>
          </div>
          @for (modalidadCotizacion of modalidad.solicitudes_apoyos_modalidades_cotizaciones; track modalidadCotizacion) {
            <app-modalidad-cotizacion
              [record]="modalidadCotizacion"
              (onDeleted)="utils.localDelete(modalidad.solicitudes_apoyos_modalidades_cotizaciones!,modalidadCotizacion)" />
          }
          @if (modalidad.solicitudes_apoyos_modalidades_cotizaciones?.length==0) {
            <p
              class="p-4 text-center fw-bold">
              No hay cotizaciones subidas para esa modalidad/ministraci\xF3n.
            </p>
          }
        </div>
      </form-group>
    </div>
  }
</div>
`, styles: ["/* src/app/main/apoyos/form-apoyos/form-apoyo-datos-bancarios/form-apoyo-datos-bancarios.component.css */\n.main {\n  min-height: 30rem;\n  padding-bottom: 10rem;\n}\n/*# sourceMappingURL=form-apoyo-datos-bancarios.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: SolicitudApoyoService }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormApoyoDatosBancariosComponent, { className: "FormApoyoDatosBancariosComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-datos-bancarios/form-apoyo-datos-bancarios.component.ts", lineNumber: 21 });
})();

// src/app/controllers/apoyo.tipo.inversion.detalle.service.ts
var _ApoyoTipoInversionDetalleService = class _ApoyoTipoInversionDetalleService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "apoyos_tipos_inversiones_detalles";
    this.columns = [
      "apoyos_tipos_inversion_id",
      "nombre",
      "monto_solicitado",
      "usuario_id"
    ];
  }
};
_ApoyoTipoInversionDetalleService.\u0275fac = function ApoyoTipoInversionDetalleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApoyoTipoInversionDetalleService)(\u0275\u0275inject(Injector));
};
_ApoyoTipoInversionDetalleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApoyoTipoInversionDetalleService, factory: _ApoyoTipoInversionDetalleService.\u0275fac, providedIn: "any" });
var ApoyoTipoInversionDetalleService = _ApoyoTipoInversionDetalleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApoyoTipoInversionDetalleService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/apoyos/form-apoyos/form-apoyo-inversion/form-inversion-detalle/form-inversion-detalle.component.ts
var _c05 = () => ({ required: true });
var _c13 = () => ({ required: true, min: 0 });
function FormInversionDetalleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.record.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r0.record.monto_solicitado));
  }
}
function FormInversionDetalleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-simple-field", 7);
    \u0275\u0275twoWayListener("valueChange", function FormInversionDetalleComponent_Conditional_3_Template_app_simple_field_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.record.nombre, $event) || (ctx_r0.record.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "div", 6)(3, "app-simple-field", 8);
    \u0275\u0275twoWayListener("valueChange", function FormInversionDetalleComponent_Conditional_3_Template_app_simple_field_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.record.monto_solicitado, $event) || (ctx_r0.record.monto_solicitado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("value", ctx_r0.record.nombre);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(4, _c05));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx_r0.record.monto_solicitado);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(5, _c13));
  }
}
var _FormInversionDetalleComponent = class _FormInversionDetalleComponent extends RecordFormComponent {
  constructor(apoyoTipoInversionDetalleController) {
    super(apoyoTipoInversionDetalleController);
    this.apoyoTipoInversionDetalleController = apoyoTipoInversionDetalleController;
  }
};
_FormInversionDetalleComponent.\u0275fac = function FormInversionDetalleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormInversionDetalleComponent)(\u0275\u0275directiveInject(ApoyoTipoInversionDetalleService));
};
_FormInversionDetalleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormInversionDetalleComponent, selectors: [["app-form-inversion-detalle"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [[1, "container", "rounded", "p-3", "border", "my-1"], [1, "row"], [1, "col-12", "col-sm", "text-end", "align-self-end"], [3, "editChange", "onSaveButtonClick", "onDeleteButtonClick", "edit", "isDeleting", "isLoading"], [1, "col-12", "col-sm", "px-3", "text-uppercase"], [1, "col-12", "col-sm", "px-3"], [1, "col-12", "col-sm"], ["type", "text", "placeholder", "Descripcion del detalle...", 3, "valueChange", "value", "validator"], ["type", "number", "placeholder", "Monto $...", 3, "valueChange", "value", "validator"]], template: function FormInversionDetalleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, FormInversionDetalleComponent_Conditional_2_Template, 5, 4);
    \u0275\u0275conditionalCreate(3, FormInversionDetalleComponent_Conditional_3_Template, 4, 6);
    \u0275\u0275elementStart(4, "div", 2)(5, "record-form-buttons", 3);
    \u0275\u0275twoWayListener("editChange", function FormInversionDetalleComponent_Template_record_form_buttons_editChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function FormInversionDetalleComponent_Template_record_form_buttons_editChange_5_listener() {
      return ctx.onEditing.emit();
    })("onSaveButtonClick", function FormInversionDetalleComponent_Template_record_form_buttons_onSaveButtonClick_5_listener() {
      return ctx.save();
    })("onDeleteButtonClick", function FormInversionDetalleComponent_Template_record_form_buttons_onDeleteButtonClick_5_listener() {
      return ctx.delete();
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.edit ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("isDeleting", ctx.isDeleting)("isLoading", ctx.isLoading);
  }
}, dependencies: [
  CurrencyPipe,
  SimpleFieldComponent,
  RecordFormButtonsComponent
], encapsulation: 2 });
var FormInversionDetalleComponent = _FormInversionDetalleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormInversionDetalleComponent, [{
    type: Component,
    args: [{ selector: "app-form-inversion-detalle", imports: [
      CurrencyPipe,
      SimpleFieldComponent,
      RecordFormButtonsComponent
    ], template: '<div class="container rounded p-3 border my-1">\n  <div class="row">\n    @if (!edit) {\n      <div class="col-12 col-sm px-3 text-uppercase" >{{record.nombre}}</div>\n      <div class="col-12 col-sm px-3" >{{record.monto_solicitado|currency}}</div>\n    }\n    @if (edit) {\n      <div class="col-12 col-sm">\n        <app-simple-field\n          type="text"\n          placeholder="Descripcion del detalle..."\n          [(value)]="record.nombre"\n          [validator]="{required:true}"\n          />\n      </div>\n      <div class="col-12 col-sm">\n        <app-simple-field\n          type="number"\n          placeholder="Monto $..."\n          [(value)]="record.monto_solicitado"\n          [validator]="{required:true, min:0}"\n          />\n      </div>\n    }\n    <div class="col-12 col-sm text-end align-self-end">\n      <record-form-buttons [(edit)]="edit" (editChange)="onEditing.emit()" [isDeleting]="isDeleting" [isLoading]="isLoading" (onSaveButtonClick)="save()" (onDeleteButtonClick)="delete()" />\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: ApoyoTipoInversionDetalleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormInversionDetalleComponent, { className: "FormInversionDetalleComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-inversion/form-inversion-detalle/form-inversion-detalle.component.ts", lineNumber: 19 });
})();

// src/app/controllers/apoyo.tipo.inversion.service.ts
var _ApoyoTipoInversionService = class _ApoyoTipoInversionService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "apoyos_tipos_inversiones";
    this.columns = [
      "solicitudes_apoyo_id",
      "inversion_tipo",
      "solicitud_modalidad_id",
      "usuario_id"
    ];
  }
};
_ApoyoTipoInversionService.\u0275fac = function ApoyoTipoInversionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApoyoTipoInversionService)(\u0275\u0275inject(Injector));
};
_ApoyoTipoInversionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApoyoTipoInversionService, factory: _ApoyoTipoInversionService.\u0275fac, providedIn: "any" });
var ApoyoTipoInversionService = _ApoyoTipoInversionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApoyoTipoInversionService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/apoyos/form-apoyos/form-apoyo-inversion/form-inversion-tipo/form-inversion-tipo.component.ts
var _c06 = () => ({ required: true });
var _c14 = () => ["MERCANCIA E INSUMOS", "MOBILIARIO Y/O EQUIPO DE OPERACION"];
function FormInversionTipoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.record.inversion_tipo);
  }
}
function FormInversionTipoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "app-select-field", 7);
    \u0275\u0275twoWayListener("valueChange", function FormInversionTipoComponent_Conditional_3_Template_app_select_field_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.record.inversion_tipo, $event) || (ctx_r0.record.inversion_tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function FormInversionTipoComponent_Conditional_3_Template_app_select_field_valueChange_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("value", ctx_r0.record.inversion_tipo);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(3, _c06))("options", \u0275\u0275pureFunction0(4, _c14));
  }
}
function FormInversionTipoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function FormInversionTipoComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showDetalles = !ctx_r0.showDetalles);
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 8);
    \u0275\u0275listener("click", function FormInversionTipoComponent_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.agregarDetalle());
    });
    \u0275\u0275element(3, "i", 10);
    \u0275\u0275elementEnd();
  }
}
function FormInversionTipoComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, " No hay registros de detalles de inversion agregados. ");
    \u0275\u0275elementEnd();
  }
}
function FormInversionTipoComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 16);
    \u0275\u0275text(2, "Detalle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function FormInversionTipoComponent_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-inversion-detalle", 17);
    \u0275\u0275listener("onSaved", function FormInversionTipoComponent_Conditional_11_For_5_Template_app_form_inversion_detalle_onSaved_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isSomeChildEditing = false);
    })("onEditing", function FormInversionTipoComponent_Conditional_11_For_5_Template_app_form_inversion_detalle_onEditing_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isSomeChildEditing = true);
    })("onDeleted", function FormInversionTipoComponent_Conditional_11_For_5_Template_app_form_inversion_detalle_onDeleted_0_listener() {
      const detalle_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.utils.localDelete(ctx_r0.detalles, detalle_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detalle_r5 = ctx.$implicit;
    \u0275\u0275property("record", detalle_r5);
  }
}
function FormInversionTipoComponent_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 18);
    \u0275\u0275listener("click", function FormInversionTipoComponent_Conditional_11_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.agregarDetalle());
    });
    \u0275\u0275elementStart(2, "i", 10);
    \u0275\u0275text(3, " Agregar Detalle");
    \u0275\u0275elementEnd()()();
  }
}
function FormInversionTipoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, FormInversionTipoComponent_Conditional_11_Conditional_1_Template, 2, 0, "p", 11);
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275conditionalCreate(3, FormInversionTipoComponent_Conditional_11_Conditional_3_Template, 6, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, FormInversionTipoComponent_Conditional_11_For_5_Template, 1, 1, "app-form-inversion-detalle", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(6, FormInversionTipoComponent_Conditional_11_Conditional_6_Template, 4, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.detalles.length == 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isSomeChildEditing && ctx_r0.detalles.length > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.detalles);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.isSomeChildEditing ? 6 : -1);
  }
}
var _FormInversionTipoComponent = class _FormInversionTipoComponent extends RecordFormComponent {
  constructor(apoyoTipoInversionController, utils) {
    super(apoyoTipoInversionController);
    this.apoyoTipoInversionController = apoyoTipoInversionController;
    this.utils = utils;
    this.showDetalles = false;
    this.isSomeChildEditing = false;
    this.detalles = [];
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.save();
      this.checkIfIsEditing();
      if (this.record.id) {
        this.detalles = this.record.apoyos_tipos_inversiones_detalles ?? [];
      }
    });
  }
  subTotal() {
    return this.detalles.reduce((acc, item) => {
      return acc + +item.monto_solicitado;
    }, 0);
  }
  agregarDetalle() {
    this.showDetalles = true;
    this.detalles.push({
      apoyos_tipos_inversion_id: this.record.id,
      nombre: "",
      monto_solicitado: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
    this.record.apoyos_tipos_inversiones_detalles = this.detalles;
  }
};
_FormInversionTipoComponent.\u0275fac = function FormInversionTipoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormInversionTipoComponent)(\u0275\u0275directiveInject(ApoyoTipoInversionService), \u0275\u0275directiveInject(UtilsService));
};
_FormInversionTipoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormInversionTipoComponent, selectors: [["app-form-inversion-tipo"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 12, consts: [[1, "container", "rounded", "p-3", "border", "my-1"], [1, "row"], [1, "col-12", "col-sm", "px-3"], [1, "col-12", "col-sm"], [1, "col-12", "col-sm", "text-end", "align-self-end"], [3, "editChange", "onSaveButtonClick", "onDeleteButtonClick", "edit", "isDeleting", "isLoading", "showSaveButton", "showEditButton"], [1, "container-fluid", "p-2"], [3, "valueChange", "value", "validator", "options"], [1, "btn", "btn-secondary", "mx-1", 3, "click"], [1, "bi", "bi-list"], [1, "bi", "bi-plus-circle-fill"], [1, "text-center", "h5", "p-3"], [1, "container-fluid", "px-3"], [1, "row", "fw-bold"], [3, "record"], [1, "row", "mt-5", "justify-content-center"], [1, "col", "p-3"], [3, "onSaved", "onEditing", "onDeleted", "record"], [1, "btn", "btn-success", "col-auto", 3, "click"]], template: function FormInversionTipoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, FormInversionTipoComponent_Conditional_2_Template, 2, 1, "div", 2);
    \u0275\u0275conditionalCreate(3, FormInversionTipoComponent_Conditional_3_Template, 2, 5, "div", 3);
    \u0275\u0275elementStart(4, "div", 2)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "record-form-buttons", 5);
    \u0275\u0275twoWayListener("editChange", function FormInversionTipoComponent_Template_record_form_buttons_editChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function FormInversionTipoComponent_Template_record_form_buttons_editChange_9_listener() {
      return ctx.onEditing.emit();
    })("onSaveButtonClick", function FormInversionTipoComponent_Template_record_form_buttons_onSaveButtonClick_9_listener() {
      return ctx.save();
    })("onDeleteButtonClick", function FormInversionTipoComponent_Template_record_form_buttons_onDeleteButtonClick_9_listener() {
      return ctx.delete();
    });
    \u0275\u0275conditionalCreate(10, FormInversionTipoComponent_Conditional_10_Template, 4, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, FormInversionTipoComponent_Conditional_11_Template, 7, 3, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.showDetalles ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showDetalles ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, ctx.subTotal()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("isDeleting", ctx.isDeleting)("isLoading", ctx.isLoading)("showSaveButton", false)("showEditButton", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.record.id ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showDetalles ? 11 : -1);
  }
}, dependencies: [
  SelectFieldComponent,
  RecordFormButtonsComponent,
  CurrencyPipe,
  FormInversionDetalleComponent
], encapsulation: 2 });
var FormInversionTipoComponent = _FormInversionTipoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormInversionTipoComponent, [{
    type: Component,
    args: [{ selector: "app-form-inversion-tipo", imports: [
      SelectFieldComponent,
      RecordFormButtonsComponent,
      CurrencyPipe,
      FormInversionDetalleComponent
    ], template: `<div class="container rounded p-3 border my-1">
  <div class="row">
    @if (!showDetalles) {
      <div class="col-12 col-sm px-3">{{record.inversion_tipo}}</div>
    }
    @if (showDetalles) {
      <div class="col-12 col-sm">
        <app-select-field
          [(value)]="record.inversion_tipo"
          (valueChange)="save()"
          [validator]="{required:true}"
          [options]="['MERCANCIA E INSUMOS','MOBILIARIO Y/O EQUIPO DE OPERACION']"
          />
      </div>
    }
    <div class="col-12 col-sm px-3">
      <span>
        {{subTotal()|currency}}
      </span>
    </div>
    <div class="col-12 col-sm text-end align-self-end">
      <record-form-buttons [(edit)]="edit" (editChange)="onEditing.emit()" [isDeleting]="isDeleting" [isLoading]="isLoading" (onSaveButtonClick)="save()" (onDeleteButtonClick)="delete()" [showSaveButton]="false" [showEditButton]="false">
        @if (record.id) {
          <button class="btn btn-secondary mx-1" (click)="showDetalles=!showDetalles">
            <i class="bi bi-list"></i>
          </button>
          <button class="btn btn-secondary mx-1" (click)="agregarDetalle()">
            <i class="bi bi-plus-circle-fill"></i>
          </button>
        }
      </record-form-buttons>
    </div>
  </div>
  @if (showDetalles) {
    <div class="container-fluid p-2">
      @if (detalles.length==0) {
        <p class="text-center h5 p-3">
          No hay registros de detalles de inversion agregados.
        </p>
      }
      <div class="container-fluid px-3">
        @if (!isSomeChildEditing && detalles.length>0) {
          <div class="row fw-bold">
            <div class="col p-3">Detalle</div>
            <div class="col p-3">Monto</div>
            <div class="col p-3"></div>
          </div>
        }
      </div>
      @for (detalle of detalles; track detalle) {
        <app-form-inversion-detalle [record]="detalle"
          (onSaved)="isSomeChildEditing=false" (onEditing)="isSomeChildEditing=true" (onDeleted)="utils.localDelete(detalles,detalle)" />
      }
      @if (!isSomeChildEditing) {
        <div class="row mt-5 justify-content-center">
          <button class="btn btn-success col-auto" (click)="agregarDetalle()">
            <i class="bi bi-plus-circle-fill"> Agregar Detalle</i>
          </button>
        </div>
      }
    </div>
  }
</div>` }]
  }], () => [{ type: ApoyoTipoInversionService }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormInversionTipoComponent, { className: "FormInversionTipoComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-inversion/form-inversion-tipo/form-inversion-tipo.component.ts", lineNumber: 23 });
})();

// src/app/main/apoyos/form-apoyos/form-apoyo-inversion/form-apoyo-inversion.component.ts
function FormApoyoInversionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, " El monto ingresado supera el m\xE1ximo, ajustalo antes de continuar ");
    \u0275\u0275elementEnd();
  }
}
function FormApoyoInversionComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, " No hay registros de tipos de inversiones agregados. ");
    \u0275\u0275elementEnd();
  }
}
function FormApoyoInversionComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275text(2, "Tipo de Inversion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4, "Sub Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function FormApoyoInversionComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-inversion-tipo", 10);
    \u0275\u0275listener("onSaved", function FormApoyoInversionComponent_For_17_Template_app_form_inversion_tipo_onSaved_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isSomeEditing = false);
    })("onEditing", function FormApoyoInversionComponent_For_17_Template_app_form_inversion_tipo_onEditing_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isSomeEditing = true);
    })("onDeleted", function FormApoyoInversionComponent_For_17_Template_app_form_inversion_tipo_onDeleted_0_listener() {
      const tipo_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.utils.localDelete(ctx_r1.apoyoTiposInversiones, tipo_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipo_r3 = ctx.$implicit;
    \u0275\u0275property("record", tipo_r3);
  }
}
function FormApoyoInversionComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "button", 11);
    \u0275\u0275listener("click", function FormApoyoInversionComponent_Conditional_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.agregarTipoInversion());
    });
    \u0275\u0275elementStart(2, "i", 12);
    \u0275\u0275text(3, " Agregar Tipo de Inversion");
    \u0275\u0275elementEnd()()();
  }
}
var _FormApoyoInversionComponent = class _FormApoyoInversionComponent {
  constructor(solicitudApoyoController, route, utils) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.route = route;
    this.utils = utils;
    this.solicitudApoyoId = 0;
    this.apoyoTiposInversiones = [];
    this.isSomeEditing = false;
  }
  ngOnInit() {
    this.route.parent?.params.subscribe((params) => __async(this, null, function* () {
      const id = params["apoyo_id"];
      if (id) {
        this.solicitudApoyoId = id;
        this.solicitudApoyo = yield this.solicitudApoyoController.find(this.solicitudApoyoId, [
          "solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades",
          "apoyosTiposInversiones.apoyosTiposInversionesDetalles"
        ]);
        this.apoyoTiposInversiones = this.solicitudApoyoController.tiposInversionesActuales(this.solicitudApoyo, this.modalidadActual);
        this.modalidadActual = this.solicitudApoyoController.modalidadActual(this.solicitudApoyo);
        console.log(this.modalidadActual);
      }
    }));
  }
  agregarTipoInversion() {
    this.isSomeEditing = true;
    this.apoyoTiposInversiones.push({
      solicitudes_apoyo_id: this.solicitudApoyoId,
      solicitud_modalidad_id: this.modalidadActual.id,
      inversion_tipo: "MERCANCIA E INSUMOS",
      usuario_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
  }
  total() {
    return this.apoyoTiposInversiones.reduce((acc, tipo) => {
      return acc + (tipo.apoyos_tipos_inversiones_detalles ?? []).reduce((acc2, detalle) => {
        return acc2 + +detalle.monto_solicitado;
      }, 0);
    }, 0);
  }
};
_FormApoyoInversionComponent.\u0275fac = function FormApoyoInversionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormApoyoInversionComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormApoyoInversionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormApoyoInversionComponent, selectors: [["app-form-apoyo-inversion"]], decls: 19, vars: 10, consts: [[1, "container-fluid", "p-2"], ["role", "alert", 1, "alert", "alert-danger"], [1, "row"], [1, "col"], [1, "text-center", "h3", "p-5", "my-3"], [1, "container-fluid", "px-3"], [1, "row", "fw-bold"], [3, "record"], [1, "row", "mt-5", "justify-content-center"], [1, "col", "p-3"], [3, "onSaved", "onEditing", "onDeleted", "record"], [1, "btn", "btn-success", "col-auto", 3, "click"], [1, "bi", "bi-plus-circle-fill"]], template: function FormApoyoInversionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, FormApoyoInversionComponent_Conditional_1_Template, 2, 0, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "b");
    \u0275\u0275text(5, "M\xE1ximo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "b");
    \u0275\u0275text(10, "Total Solicitado: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, FormApoyoInversionComponent_Conditional_13_Template, 2, 0, "p", 4);
    \u0275\u0275elementStart(14, "div", 5);
    \u0275\u0275conditionalCreate(15, FormApoyoInversionComponent_Conditional_15_Template, 6, 0, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, FormApoyoInversionComponent_For_17_Template, 1, 1, "app-form-inversion-tipo", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(18, FormApoyoInversionComponent_Conditional_18_Template, 4, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.total() > ((ctx.modalidadActual == null ? null : ctx.modalidadActual.modalidades_ministraciones == null ? null : ctx.modalidadActual.modalidades_ministraciones.monto_maximo) ?? 9999999) ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, ctx.modalidadActual == null ? null : ctx.modalidadActual.modalidades_ministraciones == null ? null : ctx.modalidadActual.modalidades_ministraciones.monto_maximo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, ctx.total()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.apoyoTiposInversiones.length == 0 ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.isSomeEditing && ctx.apoyoTiposInversiones.length > 0 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.apoyoTiposInversiones);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.isSomeEditing ? 18 : -1);
  }
}, dependencies: [
  FormInversionTipoComponent,
  CurrencyPipe
], encapsulation: 2 });
var FormApoyoInversionComponent = _FormApoyoInversionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormApoyoInversionComponent, [{
    type: Component,
    args: [{ selector: "app-form-apoyo-inversion", imports: [
      FormInversionTipoComponent,
      CurrencyPipe
    ], template: '<div class="container-fluid p-2">\n  @if (total() > (modalidadActual?.modalidades_ministraciones?.monto_maximo??9999999)) {\n    <div class="alert alert-danger" role="alert">\n      El monto ingresado supera el m\xE1ximo, ajustalo antes de continuar\n    </div>\n  }\n  <div class="row">\n    <div class="col">\n      <b>M\xE1ximo:</b> {{modalidadActual?.modalidades_ministraciones?.monto_maximo | currency}}<br>\n      <b>Total Solicitado: </b> {{total()|currency}}\n    </div>\n  </div>\n  @if (apoyoTiposInversiones.length==0) {\n    <p class="text-center h3 p-5 my-3">\n      No hay registros de tipos de inversiones agregados.\n    </p>\n  }\n  <div class="container-fluid px-3">\n    @if (!isSomeEditing && apoyoTiposInversiones.length>0) {\n      <div class="row fw-bold">\n        <div class="col p-3">Tipo de Inversion</div>\n        <div class="col p-3">Sub Total</div>\n        <div class="col p-3"></div>\n      </div>\n    }\n  </div>\n  @for (tipo of apoyoTiposInversiones; track tipo) {\n    <app-form-inversion-tipo [record]="tipo"\n      (onSaved)="isSomeEditing=false" (onEditing)="isSomeEditing=true" (onDeleted)="utils.localDelete(apoyoTiposInversiones,tipo)" />\n  }\n  @if (!isSomeEditing) {\n    <div class="row mt-5 justify-content-center">\n      <button class="btn btn-success col-auto" (click)="agregarTipoInversion()">\n        <i class="bi bi-plus-circle-fill"> Agregar Tipo de Inversion</i>\n      </button>\n    </div>\n  }\n</div>' }]
  }], () => [{ type: SolicitudApoyoService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormApoyoInversionComponent, { className: "FormApoyoInversionComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyo-inversion/form-apoyo-inversion.component.ts", lineNumber: 23 });
})();

// src/app/main/apoyos/form-apoyos/form-modalidades/form-solicitud-modalidad/form-solicitud-modalidad.component.ts
var _c07 = () => ["modalidades"];
function FormSolicitudModalidadComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.solicitudApoyoModalidad.modalidades_ministraciones == null ? null : ctx_r0.solicitudApoyoModalidad.modalidades_ministraciones.programas_apoyos == null ? null : ctx_r0.solicitudApoyoModalidad.modalidades_ministraciones.programas_apoyos.alias, " - ", ctx_r0.solicitudApoyoModalidad.modalidades_ministraciones == null ? null : ctx_r0.solicitudApoyoModalidad.modalidades_ministraciones.modalidades == null ? null : ctx_r0.solicitudApoyoModalidad.modalidades_ministraciones.modalidades.nombre, " ");
  }
}
function FormSolicitudModalidadComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "label")(2, "b");
    \u0275\u0275text(3, "Estado");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.solicitudApoyoModalidad.estado, " ");
  }
}
function FormSolicitudModalidadComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "app-autocomplete-field", 10);
    \u0275\u0275twoWayListener("valueChange", function FormSolicitudModalidadComponent_Conditional_4_Template_app_autocomplete_field_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.solicitudApoyoModalidad.modalidades_ministracion_id, $event) || (ctx_r0.solicitudApoyoModalidad.modalidades_ministracion_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("function", ctx_r0.modalidadMask)("extraData", ctx_r0.autoCompleteExtra)("relations", \u0275\u0275pureFunction0(4, _c07));
    \u0275\u0275twoWayProperty("value", ctx_r0.solicitudApoyoModalidad.modalidades_ministracion_id);
  }
}
function FormSolicitudModalidadComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function FormSolicitudModalidadComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.edit = true);
    });
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementEnd();
  }
}
function FormSolicitudModalidadComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
}
function FormSolicitudModalidadComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function FormSolicitudModalidadComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function FormSolicitudModalidadComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275conditionalCreate(1, FormSolicitudModalidadComponent_Conditional_7_Conditional_1_Template, 1, 0, "span", 7);
    \u0275\u0275conditionalCreate(2, FormSolicitudModalidadComponent_Conditional_7_Conditional_2_Template, 1, 0, "i", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isLoading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.isLoading ? 2 : -1);
  }
}
function FormSolicitudModalidadComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
}
function FormSolicitudModalidadComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
var _FormSolicitudModalidadComponent = class _FormSolicitudModalidadComponent {
  constructor(solicitudApoyoController, solicitudApoyoModalidadController, modalidadesController, route) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.solicitudApoyoModalidadController = solicitudApoyoModalidadController;
    this.modalidadesController = modalidadesController;
    this.route = route;
    this.onDeleted = new EventEmitter();
    this.onSaved = new EventEmitter();
    this.solicitudApoyoId = 0;
    this.modalidadMask = (row) => {
      return row.modalidades.nombre;
    };
    this.edit = false;
    this.isLoading = false;
    this.isDeleting = false;
    this.autoCompleteExtra = {};
  }
  ngOnInit() {
    this.route.parent?.params.subscribe((params) => {
      this.solicitudApoyoId = params["apoyo_id"];
    });
    if (!this.solicitudApoyoModalidad.id)
      this.edit = true;
    this.setFilters();
  }
  setFilters() {
    return __async(this, null, function* () {
      if (this.solicitudApoyoModalidad.id) {
        this.autoCompleteExtra = {
          conditionals: JSON.stringify([
            ["programas_apoyo_id", "=", this.solicitudApoyoModalidad.modalidades_ministraciones?.programas_apoyo_id],
            ["deleted_at", "IS NULL", null]
          ])
        };
        return;
      }
      if (!this.solicitudApoyoId)
        return;
      const solicitud = yield this.solicitudApoyoController.find(this.solicitudApoyoId);
      if (!solicitud)
        return;
      this.autoCompleteExtra = {
        conditionals: JSON.stringify([
          ["programas_apoyo_id", "=", solicitud.programas_apoyo_id],
          ["deleted_at", "IS NULL", null]
        ])
      };
    });
  }
  save() {
    return __async(this, null, function* () {
      this.isLoading = true;
      const res = yield this.solicitudApoyoModalidadController.createOrUpdate(this.solicitudApoyoModalidad);
      if (res) {
        this.solicitudApoyoModalidad.id = res.id;
        this.solicitudApoyoModalidad.modalidades_ministraciones = yield this.modalidadesController.find(res.modalidades_ministracion_id, ["programasApoyos", "modalidades"]);
        this.onSaved.emit();
      }
      this.edit = false;
      this.isLoading = false;
    });
  }
  delete() {
    return __async(this, null, function* () {
      this.isDeleting = true;
      if (!this.solicitudApoyoModalidad.id) {
        this.onDeleted.emit();
        return;
      }
      const res = yield this.solicitudApoyoModalidadController.switch(this.solicitudApoyoModalidad);
      if (res) {
        this.onDeleted.emit();
      }
      this.isDeleting = false;
    });
  }
};
_FormSolicitudModalidadComponent.\u0275fac = function FormSolicitudModalidadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormSolicitudModalidadComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(SolicitudApoyoModalidadService), \u0275\u0275directiveInject(ModalidadMinistracionService), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormSolicitudModalidadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormSolicitudModalidadComponent, selectors: [["app-form-solicitud-modalidad"]], inputs: { solicitudApoyoModalidad: "solicitudApoyoModalidad" }, outputs: { onDeleted: "onDeleted", onSaved: "onSaved" }, decls: 11, vars: 7, consts: [[1, "container-fluid", "rounded", "p-3", "border"], [1, "row"], [1, "col-12", "col-sm", "p-3"], [1, "col-12", "col-sm"], [1, "col-12", "col-sm-auto", "align-self-center", "p-1"], [1, "btn", "btn-primary", "mx-1"], [1, "btn", "btn-danger", "mx-1", 3, "click"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-trash-fill"], [1, "col-12", "col-sm", "fw-bold", "fs-5", "text-uppercase"], ["apiUrl", "api/modalidades_ministraciones", "keyList", "id", "label", "Modalidad", "placeholder", "Modalidades del programa...", 3, "valueChange", "function", "extraData", "relations", "value"], [1, "btn", "btn-primary", "mx-1", 3, "click"], [1, "bi", "bi-pencil-fill"], [1, "bi", "bi-floppy-fill"]], template: function FormSolicitudModalidadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, FormSolicitudModalidadComponent_Conditional_1_Template, 3, 2, "div", 1);
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275conditionalCreate(3, FormSolicitudModalidadComponent_Conditional_3_Template, 5, 1, "div", 2);
    \u0275\u0275conditionalCreate(4, FormSolicitudModalidadComponent_Conditional_4_Template, 2, 5, "div", 3);
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275conditionalCreate(6, FormSolicitudModalidadComponent_Conditional_6_Template, 2, 0, "button", 5);
    \u0275\u0275conditionalCreate(7, FormSolicitudModalidadComponent_Conditional_7_Template, 3, 2, "button", 5);
    \u0275\u0275elementStart(8, "button", 6);
    \u0275\u0275listener("click", function FormSolicitudModalidadComponent_Template_button_click_8_listener() {
      return ctx.delete();
    });
    \u0275\u0275conditionalCreate(9, FormSolicitudModalidadComponent_Conditional_9_Template, 1, 0, "span", 7);
    \u0275\u0275conditionalCreate(10, FormSolicitudModalidadComponent_Conditional_10_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.edit ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.edit ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.edit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isDeleting ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isDeleting ? 10 : -1);
  }
}, dependencies: [AutocompleteFieldComponent], encapsulation: 2 });
var FormSolicitudModalidadComponent = _FormSolicitudModalidadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSolicitudModalidadComponent, [{
    type: Component,
    args: [{ selector: "app-form-solicitud-modalidad", imports: [
      AutocompleteFieldComponent
    ], template: `<div class="container-fluid rounded p-3 border">
  @if (!edit) {
    <div class="row">
      <div class="col-12 col-sm fw-bold fs-5 text-uppercase">
        {{solicitudApoyoModalidad.modalidades_ministraciones?.programas_apoyos?.alias}} - {{solicitudApoyoModalidad.modalidades_ministraciones?.modalidades?.nombre}}
      </div>
    </div>
  }
  <div class="row">
    @if (!edit) {
      <div class="col-12 col-sm p-3">
        <label><b>Estado</b></label>
        {{solicitudApoyoModalidad.estado}}
      </div>
    }
    @if (edit) {
      <div class="col-12 col-sm">
        <app-autocomplete-field
          apiUrl="api/modalidades_ministraciones"
          keyList="id"
          [function]="modalidadMask"
          label="Modalidad"
          placeholder="Modalidades del programa..."
          [extraData]="autoCompleteExtra"
          [relations]="['modalidades']"
          [(value)]="solicitudApoyoModalidad.modalidades_ministracion_id"
          />
      </div>
    }
    <div class="col-12 col-sm-auto align-self-center p-1">
      @if (!edit) {
        <button class="btn btn-primary mx-1" (click)="edit=true">
          <i class="bi bi-pencil-fill"></i>
        </button>
      }
      @if (edit) {
        <button class="btn btn-primary mx-1" (click)="save()">
          @if (isLoading) {
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
          }
          @if (!isLoading) {
            <i class="bi bi-floppy-fill"></i>
          }
        </button>
      }
      <button class="btn btn-danger mx-1" (click)="delete()">
        @if (isDeleting) {
          <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        }
        @if (!isDeleting) {
          <i class="bi bi-trash-fill"></i>
        }
      </button>
    </div>
  </div>
</div>` }]
  }], () => [{ type: SolicitudApoyoService }, { type: SolicitudApoyoModalidadService }, { type: ModalidadMinistracionService }, { type: ActivatedRoute }], { solicitudApoyoModalidad: [{
    type: Input
  }], onDeleted: [{
    type: Output
  }], onSaved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormSolicitudModalidadComponent, { className: "FormSolicitudModalidadComponent", filePath: "src/app/main/apoyos/form-apoyos/form-modalidades/form-solicitud-modalidad/form-solicitud-modalidad.component.ts", lineNumber: 19 });
})();

// src/app/main/apoyos/form-apoyos/form-modalidades/form-modalidades.component.ts
function FormModalidadesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1)(1, "span", 4);
    \u0275\u0275text(2, "No hay modalidades o ministraciones en proceso");
    \u0275\u0275elementEnd()();
  }
}
function FormModalidadesComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-solicitud-modalidad", 5);
    \u0275\u0275listener("onDeleted", function FormModalidadesComponent_For_3_Template_app_form_solicitud_modalidad_onDeleted_0_listener() {
      const modalidad_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.utils.localDelete(ctx_r2.solicitudApoyoModalidades, modalidad_r2));
    })("onSaved", function FormModalidadesComponent_For_3_Template_app_form_solicitud_modalidad_onSaved_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isSomeEditing = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const modalidad_r2 = ctx.$implicit;
    \u0275\u0275property("solicitudApoyoModalidad", modalidad_r2);
  }
}
function FormModalidadesComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Agregar Modalidad");
    \u0275\u0275elementEnd();
  }
}
function FormModalidadesComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Agregar Ministraci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function FormModalidadesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 6);
    \u0275\u0275listener("click", function FormModalidadesComponent_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.agregarModalidad());
    });
    \u0275\u0275elementStart(2, "i", 7);
    \u0275\u0275conditionalCreate(3, FormModalidadesComponent_Conditional_4_Conditional_3_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(4, FormModalidadesComponent_Conditional_4_Conditional_4_Template, 2, 0, "span");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.someModalidadIsActive());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.solicitudApoyoModalidades.length === 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.solicitudApoyoModalidades.length > 0 ? 4 : -1);
  }
}
var _FormModalidadesComponent = class _FormModalidadesComponent {
  constructor(solicitudApoyoModalidadController, route, utils) {
    this.solicitudApoyoModalidadController = solicitudApoyoModalidadController;
    this.route = route;
    this.utils = utils;
    this.solicitudApoyoId = 0;
    this.solicitudApoyoModalidades = [];
    this.isSomeEditing = false;
  }
  ngOnInit() {
    this.route.parent?.params.subscribe((params) => __async(this, null, function* () {
      const id = params["apoyo_id"];
      if (id) {
        this.solicitudApoyoId = id;
        this.solicitudApoyoModalidades = yield this.solicitudApoyoModalidadController.all({ solicitudes_apoyo_id: id, deleted_at: null }, ["modalidadesMinistraciones.programasApoyos", "modalidadesMinistraciones.modalidades"]);
      }
    }));
  }
  someModalidadIsActive() {
    return this.solicitudApoyoModalidades.some((mod) => mod.estado !== "CONCLUIDO");
  }
  agregarModalidad() {
    this.isSomeEditing = true;
    this.solicitudApoyoModalidades.push({
      solicitudes_apoyo_id: this.solicitudApoyoId,
      sesion_id: null,
      modalidades_ministracion_id: 0,
      estado: "CAPTURANDO",
      carta_instruccion_url: null,
      usuario_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
  }
};
_FormModalidadesComponent.\u0275fac = function FormModalidadesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormModalidadesComponent)(\u0275\u0275directiveInject(SolicitudApoyoModalidadService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormModalidadesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormModalidadesComponent, selectors: [["app-form-modalidades"]], decls: 5, vars: 2, consts: [[1, "container", "main"], [1, "p-5", "text-center"], [3, "solicitudApoyoModalidad"], [1, "row", "justify-content-center", "mt-5"], [1, "h3"], [3, "onDeleted", "onSaved", "solicitudApoyoModalidad"], [1, "btn", "btn-success", "col-auto", 3, "click", "disabled"], [1, "bi", "bi-plus-circle-fill", "px-2", "fw-bold"]], template: function FormModalidadesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, FormModalidadesComponent_Conditional_1_Template, 3, 0, "p", 1);
    \u0275\u0275repeaterCreate(2, FormModalidadesComponent_For_3_Template, 1, 1, "app-form-solicitud-modalidad", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(4, FormModalidadesComponent_Conditional_4_Template, 5, 3, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.solicitudApoyoModalidades.length === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.solicitudApoyoModalidades);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.isSomeEditing ? 4 : -1);
  }
}, dependencies: [FormSolicitudModalidadComponent], styles: ["\n\n.main[_ngcontent-%COMP%] {\n  min-height: 30rem;\n}\n/*# sourceMappingURL=form-modalidades.component.css.map */"] });
var FormModalidadesComponent = _FormModalidadesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModalidadesComponent, [{
    type: Component,
    args: [{ selector: "app-form-modalidades", imports: [
      FormSolicitudModalidadComponent
    ], template: '<div class="container main">\n  @if (solicitudApoyoModalidades.length===0) {\n    <p class="p-5 text-center">\n      <span class="h3">No hay modalidades o ministraciones en proceso</span>\n    </p>\n  }\n  @for (modalidad of solicitudApoyoModalidades; track modalidad) {\n    <app-form-solicitud-modalidad [solicitudApoyoModalidad]="modalidad"\n      (onDeleted)="utils.localDelete(solicitudApoyoModalidades,modalidad)"\n      (onSaved)="isSomeEditing=false"\n      />\n  }\n  @if (!isSomeEditing) {\n    <div class="row justify-content-center mt-5">\n      <button class="btn btn-success col-auto" (click)="agregarModalidad()" [disabled]="someModalidadIsActive()">\n        <i class="bi bi-plus-circle-fill px-2 fw-bold">\n          @if (solicitudApoyoModalidades.length===0) {\n            <span>Agregar Modalidad</span>\n          }\n          @if (solicitudApoyoModalidades.length>0) {\n            <span>Agregar Ministraci\xF3n</span>\n          }\n        </i>\n      </button>\n    </div>\n  }\n</div>', styles: ["/* src/app/main/apoyos/form-apoyos/form-modalidades/form-modalidades.component.css */\n.main {\n  min-height: 30rem;\n}\n/*# sourceMappingURL=form-modalidades.component.css.map */\n"] }]
  }], () => [{ type: SolicitudApoyoModalidadService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormModalidadesComponent, { className: "FormModalidadesComponent", filePath: "src/app/main/apoyos/form-apoyos/form-modalidades/form-modalidades.component.ts", lineNumber: 22 });
})();

// src/app/main/apoyos/form-apoyos/form.apoyos.routes.ts
var formApoyosRoutes = [
  { path: "", redirectTo: "datos-personales", pathMatch: "full" },
  { path: "negocio", component: FormApoyoNegocioComponent },
  { path: "datos-personales", component: FormApoyoDatosPersonalesComponent },
  { path: "modalidades", component: FormModalidadesComponent },
  { path: "inversion-programa", component: FormApoyoInversionComponent },
  { path: "documentos", component: FormApoyoDocumentosComponent },
  { path: "datos-bancarios", component: FormApoyoDatosBancariosComponent }
];
export {
  formApoyosRoutes
};
//# sourceMappingURL=chunk-NTJI4FAT.js.map
