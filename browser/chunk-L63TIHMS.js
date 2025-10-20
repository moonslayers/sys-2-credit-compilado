import {
  ReferenciaPersonalService
} from "./chunk-HO3B6X3R.js";
import {
  NegocioService
} from "./chunk-6OVOAIST.js";
import {
  CreditoFormUtilsService,
  FormDatosBancariosComponent
} from "./chunk-YKJ36RR3.js";
import {
  DatosFiscalesService
} from "./chunk-NH64EC6C.js";
import {
  avisoPrivacidad,
  cartaProtesta,
  formatoTransparencia,
  solicitudPersonaFisica,
  solicitudPersonaMoral
} from "./chunk-TPOWSUQO.js";
import {
  CreditoProductoFinancieroDocumentoService
} from "./chunk-NK7PLHPC.js";
import {
  DatoPersonaFisicaService
} from "./chunk-ZEGUFUIC.js";
import {
  DatoPersonaMoralService
} from "./chunk-4YG63BQX.js";
import {
  TablaLocalComponent
} from "./chunk-72PDJVTF.js";
import {
  DatoPersonalService
} from "./chunk-NB2YUWRE.js";
import "./chunk-LROCG2JY.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import {
  StepsTabsComponent
} from "./chunk-SIIGP4ES.js";
import {
  DataViewSectionComponent
} from "./chunk-6SWRHHIM.js";
import "./chunk-MLBICDWK.js";
import "./chunk-NXIA6ZMF.js";
import {
  FileInputComponent
} from "./chunk-5BMNPTRZ.js";
import {
  FieldTypesService
} from "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import {
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe
} from "./chunk-ZSRCSTKI.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/main/creditos/credito-form/credito-persona-fisica/credito-persona-fisica.component.ts
var STEPTABS = [
  {
    key: "negocio",
    title: "",
    header: "Negocio"
  },
  {
    key: "datos-personales",
    title: "",
    header: "Datos Personales",
    isSelected: true
  },
  {
    key: "analisis-mercado",
    title: "",
    header: "Analisis Mercado"
  },
  {
    key: "aval",
    title: "",
    header: "Aval"
  },
  {
    key: "programa-inversion",
    title: "",
    header: "Inversion"
  },
  {
    key: "referencias",
    title: "",
    header: "Referencias"
  },
  {
    key: "documentos",
    title: "",
    header: "Documentos"
  },
  {
    key: "datos-bancarios",
    title: "",
    header: "Datos Bancarios"
  },
  {
    key: "datos-fiscales",
    title: "",
    header: "Datos Fiscales"
  }
];
var _CreditoPersonaFisicaComponent = class _CreditoPersonaFisicaComponent {
  constructor(utils, router, route) {
    this.utils = utils;
    this.router = router;
    this.route = route;
    this.tabulador = STEPTABS;
    this.id = 0;
    this.actual_page = 0;
  }
  ngOnInit() {
    this.utils.idFromParams().subscribe((id) => {
      this.id = id ?? 0;
    });
  }
  navigate(index) {
    this.router.navigate([this.tabulador[index].key], { relativeTo: this.route });
  }
};
_CreditoPersonaFisicaComponent.\u0275fac = function CreditoPersonaFisicaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoPersonaFisicaComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_CreditoPersonaFisicaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditoPersonaFisicaComponent, selectors: [["app-credito-persona-fisica"]], decls: 2, vars: 2, consts: [[3, "actual_pageChange", "paginador", "page_selected"]], template: function CreditoPersonaFisicaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-steps-tabs", 0);
    \u0275\u0275listener("actual_pageChange", function CreditoPersonaFisicaComponent_Template_app_steps_tabs_actual_pageChange_0_listener($event) {
      return ctx.navigate($event);
    });
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("paginador", ctx.tabulador)("page_selected", ctx.actual_page);
  }
}, dependencies: [
  StepsTabsComponent,
  RouterOutlet
], encapsulation: 2 });
var CreditoPersonaFisicaComponent = _CreditoPersonaFisicaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoPersonaFisicaComponent, [{
    type: Component,
    args: [{ selector: "app-credito-persona-fisica", imports: [
      StepsTabsComponent,
      RouterOutlet
    ], template: '<app-steps-tabs [paginador]="tabulador" (actual_pageChange)="navigate($event)" [page_selected]="actual_page">\n    <router-outlet></router-outlet>\n</app-steps-tabs>' }]
  }], () => [{ type: UtilsService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditoPersonaFisicaComponent, { className: "CreditoPersonaFisicaComponent", filePath: "src/app/main/creditos/credito-form/credito-persona-fisica/credito-persona-fisica.component.ts", lineNumber: 64 });
})();

// src/app/main/creditos/credito-form/credito-persona-moral/credito-persona-moral.component.ts
var STEPTABS2 = [
  {
    key: "negocio",
    title: "",
    header: "Negocio"
  },
  {
    key: "representante-legal",
    title: "",
    header: "Representante Legal"
  },
  {
    key: "acta-constitutiva",
    title: "",
    header: "Acta Constitutiva"
  },
  {
    key: "analisis-mercado",
    title: "",
    header: "Analisis Mercado"
  },
  {
    key: "aval",
    title: "",
    header: "Aval"
  },
  {
    key: "programa-inversion",
    title: "",
    header: "Inversion"
  },
  {
    key: "referencias",
    title: "",
    header: "Referencias"
  },
  {
    key: "documentos",
    title: "",
    header: "Documentos"
  },
  {
    key: "datos-bancarios",
    title: "",
    header: "Datos Bancarios"
  },
  {
    key: "datos-fiscales",
    title: "",
    header: "Datos Fiscales"
  }
];
var _CreditoPersonaMoralComponent = class _CreditoPersonaMoralComponent {
  constructor(utils, router, route) {
    this.utils = utils;
    this.router = router;
    this.route = route;
    this.tabulador = STEPTABS2;
    this.id = 0;
    this.actual_page = 0;
  }
  ngOnInit() {
    this.utils.idFromParams().subscribe((id) => {
      this.id = id ?? 0;
    });
  }
  navigate(index) {
    this.router.navigate([this.tabulador[index].key], { relativeTo: this.route });
  }
};
_CreditoPersonaMoralComponent.\u0275fac = function CreditoPersonaMoralComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoPersonaMoralComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_CreditoPersonaMoralComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditoPersonaMoralComponent, selectors: [["app-credito-persona-moral"]], decls: 2, vars: 2, consts: [[3, "actual_pageChange", "paginador", "page_selected"]], template: function CreditoPersonaMoralComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-steps-tabs", 0);
    \u0275\u0275listener("actual_pageChange", function CreditoPersonaMoralComponent_Template_app_steps_tabs_actual_pageChange_0_listener($event) {
      return ctx.navigate($event);
    });
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("paginador", ctx.tabulador)("page_selected", ctx.actual_page);
  }
}, dependencies: [
  RouterOutlet,
  StepsTabsComponent
], encapsulation: 2 });
var CreditoPersonaMoralComponent = _CreditoPersonaMoralComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoPersonaMoralComponent, [{
    type: Component,
    args: [{ selector: "app-credito-persona-moral", imports: [
      RouterOutlet,
      StepsTabsComponent
    ], template: '<app-steps-tabs [paginador]="tabulador" (actual_pageChange)="navigate($event)" [page_selected]="actual_page">\n    <router-outlet></router-outlet>\n</app-steps-tabs>' }]
  }], () => [{ type: UtilsService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditoPersonaMoralComponent, { className: "CreditoPersonaMoralComponent", filePath: "src/app/main/creditos/credito-form/credito-persona-moral/credito-persona-moral.component.ts", lineNumber: 68 });
})();

// src/app/main/creditos/credito-form/credito-persona-fisica/form-pf-negocio/form-pf-negocio.component.ts
var FORM_DEF = [
  {
    title: "Datos Generales",
    fields: [
      {
        key: "tipo_empresa",
        label: "Tipo de Empresa",
        options: ["INDUSTRIA", "AGROINDUSTRIA", "COMERCIO", "SERVICIOS", "NO DEFINIDO"]
      },
      {
        key: "nombre",
        label: "Nombre Comercial",
        type: "text"
      },
      {
        key: "calle",
        label: "Calle",
        type: "text"
      },
      {
        key: "no_exterior",
        label: "No. exterior",
        type: "text"
      },
      {
        key: "no_interior",
        label: "No. Interior",
        type: "text",
        defaultValue: "",
        validator: {
          required: false
        }
      },
      {
        key: "localidad",
        label: "Localidad",
        type: "text"
      },
      {
        key: "codigo_postal",
        label: "Codigo Postal",
        type: "number",
        validator: {
          min: 0
        }
      },
      {
        key: "colonia",
        label: "Colonia",
        type: "text"
      },
      {
        key: "ciudad_id",
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
        key: "resumen_actividad_empresarial",
        type: "text",
        label: "Resumen Actividad Empresarial",
        validator: {
          required: true
        },
        style: {
          div: "col-12 col-sm p-3"
        }
      },
      {
        key: "referencia_domicilio",
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
    title: "Domicilio en el Mapa",
    key: "mapField",
    latitud: {
      key: "latitud"
    },
    longitud: {
      key: "longitud"
    }
  },
  {
    title: "Datos de Empleos",
    fields: [
      {
        key: "empleos_informales_mujeres",
        label: "Empleos Informales Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_informales_hombres",
        label: "Empleos Informales Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_informales_no_binarios",
        label: "Empleos Informales No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_mujeres",
        label: "Empleos IMSS Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_hombres",
        label: "Empleos IMSS Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_no_binarios",
        label: "Empleos IMSS No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_mujeres",
        label: "Empleos a generar Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_hombres",
        label: "Empleos a generar Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_no_binarios",
        label: "Empleos a generar No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      }
    ]
  },
  {
    title: "Datos Otros",
    fields: [
      {
        key: "inicio_operaciones",
        label: "Fecha Inicio Operaciones",
        type: "date",
        validator: { required: false }
      },
      {
        key: "fuente_informacion",
        label: "\xBFD\xF3nde te enteraste del Cr\xE9dito?",
        options: ["JORNADA", "OFICINA", "PROSPECCION", "REDES SOCIALES", "CAMARAS"],
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: true
        }
      },
      {
        key: "detalle_camara",
        label: "Siglas Camara",
        type: "text",
        validator: { required: false }
      }
    ]
  },
  {
    title: "Actividades Economicas",
    apiUrl: "api/negocios_actividades_economicas",
    relationKey: "negocios_actividades_economicas",
    foreign_key: "negocio_id",
    baseFields: [
      {
        key: "actividades_economica_id",
        apiUrl: "api/actividades_economicas",
        keyList: "id",
        keyDetalle: "subgrupo",
        label: "Actividad",
        function: (actividad) => {
          return actividad.clave + " - " + actividad.subgrupo.toUpperCase();
        }
      }
    ]
  }
];
var FORM_CONDITIONALS = [
  {
    key: "fuente_informacion",
    operator: "!=",
    value: "CAMARAS",
    target: "detalle_camara",
    targetAction: "hide"
  }
];
var _FormPfNegocioComponent = class _FormPfNegocioComponent {
  constructor(utils, datoPersonaFisicaController, negocioController, route, fieldTypes, creditoController, creditoFormUtils) {
    this.utils = utils;
    this.datoPersonaFisicaController = datoPersonaFisicaController;
    this.negocioController = negocioController;
    this.route = route;
    this.fieldTypes = fieldTypes;
    this.creditoController = creditoController;
    this.creditoFormUtils = creditoFormUtils;
    this.form = FORM_DEF;
    this.formValidator = {
      required: true
    };
    this.formConditionals = FORM_CONDITIONALS;
    this.showCreate = false;
  }
  ngOnInit() {
    this.route.parent?.parent?.paramMap.subscribe((param) => __async(this, null, function* () {
      const id = this.utils.intOrNull(param.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id);
        this.datoPersonaFisica = yield this.datoPersonaFisicaController.findOrCreate({
          credito_id: id
        });
        if (this.datoPersonaFisica?.negocio_id) {
          this.setNegocio(this.datoPersonaFisica.negocio_id);
        }
      }
    }));
  }
  setNegocio(id) {
    return __async(this, null, function* () {
      if (typeof id == "number") {
        this.negocio = yield this.negocioController.find(id, [
          "negociosActividadesEconomicas",
          "negociosDiasLaborables"
        ], false);
        this.updateDatoPersonaFisica();
        return;
      }
      this.negocio = void 0;
    });
  }
  updateDatoPersonaFisica() {
    return __async(this, null, function* () {
      if (this.datoPersonaFisica && this.negocio && !this.datoPersonaFisica.negocio_id) {
        this.datoPersonaFisica.negocio_id = this.negocio.id;
        this.datoPersonaFisicaController.update(this.datoPersonaFisica.id, this.datoPersonaFisica);
      }
    });
  }
  test(value) {
    console.log(value);
  }
  checkValues(data) {
    const isDisabled = data.local_tipo === "PROPIO";
    const keysToUpdate = ["local_renta_mensual", "local_contrato_inicio", "local_contrato_fin"];
    this.form.forEach((field) => {
      if (this.fieldTypes.isFormGroup(field)) {
        field.fields.forEach((innerField) => {
          if (this.fieldTypes.isFormField(innerField) && keysToUpdate.includes(innerField.key)) {
            this.updateField(innerField, isDisabled);
          }
        });
      }
    });
  }
  updateField(innerField, isDisabled) {
    innerField.validator = __spreadProps(__spreadValues({}, innerField.validator), {
      disabled: isDisabled
    });
    if (innerField.key === "local_renta_mensual" && isDisabled) {
      innerField.value = 0;
    }
  }
};
_FormPfNegocioComponent.\u0275fac = function FormPfNegocioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormPfNegocioComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(DatoPersonaFisicaService), \u0275\u0275directiveInject(NegocioService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FieldTypesService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(CreditoFormUtilsService));
};
_FormPfNegocioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormPfNegocioComponent, selectors: [["app-form-pf-negocio"]], decls: 1, vars: 7, consts: [["rowButtonClass", "row pt-3 pb-0 bg-white sticky-bottom z-2", 3, "formChange", "valuesChange", "editChange", "form", "isolatedForm", "conditionals", "controller", "edit", "validator", "disabled"]], template: function FormPfNegocioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-generic-form", 0);
    \u0275\u0275twoWayListener("formChange", function FormPfNegocioComponent_Template_app_generic_form_formChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form, $event) || (ctx.form = $event);
      return $event;
    });
    \u0275\u0275listener("valuesChange", function FormPfNegocioComponent_Template_app_generic_form_valuesChange_0_listener($event) {
      return ctx.checkValues($event);
    });
    \u0275\u0275twoWayListener("editChange", function FormPfNegocioComponent_Template_app_generic_form_editChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.negocio, $event) || (ctx.negocio = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function FormPfNegocioComponent_Template_app_generic_form_editChange_0_listener() {
      return ctx.updateDatoPersonaFisica();
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("form", ctx.form);
    \u0275\u0275property("isolatedForm", true)("conditionals", ctx.formConditionals)("controller", ctx.negocioController);
    \u0275\u0275twoWayProperty("edit", ctx.negocio);
    \u0275\u0275property("validator", ctx.formValidator)("disabled", ctx.creditoFormUtils.isFormDisabled(ctx.credito));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormPfNegocioComponent = _FormPfNegocioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormPfNegocioComponent, [{
    type: Component,
    args: [{ selector: "app-form-pf-negocio", imports: [GenericFormComponent], template: '<app-generic-form \n[(form)]="form"\n[isolatedForm]="true"\n(valuesChange)="checkValues($event)"\n[conditionals]="formConditionals"\n[controller]="negocioController"\n[(edit)]="negocio"\n(editChange)="updateDatoPersonaFisica()"\n[validator]="formValidator"\n[disabled]="creditoFormUtils.isFormDisabled(credito)"\nrowButtonClass="row pt-3 pb-0 bg-white sticky-bottom z-2" \n/>' }]
  }], () => [{ type: UtilsService }, { type: DatoPersonaFisicaService }, { type: NegocioService }, { type: ActivatedRoute }, { type: FieldTypesService }, { type: CreditoService }, { type: CreditoFormUtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormPfNegocioComponent, { className: "FormPfNegocioComponent", filePath: "src/app/main/creditos/credito-form/credito-persona-fisica/form-pf-negocio/form-pf-negocio.component.ts", lineNumber: 271 });
})();

// src/app/main/creditos/credito-form/credito-persona-fisica/form-pf-datos-personales/form-pf-datos-personales.component.ts
var _c0 = () => ["nombre", "apellido_paterno", "apellido_materno"];
var _c1 = () => ["datosPersonasMorales", "creditos", "datosPersonasFisicas"];
var _c2 = () => ["id", "nombre", "apellido_paterno", "apellido_materno", "email", "escolaridad", "estado_civil", "estado_nacimiento", "rfc", "curp"];
var _c3 = () => ["calle", "no_exterior", "no_interior", "colonia", "codigo_postal", "localidad", "ciudades", "referencias_domicilio"];
var _c4 = () => ["deleted_at", "datos_personal_id", "usuario_id"];
var _c5 = () => ["cobro_intereses_moratorios", "datos_bacarios_verificados", "referencia_bancaria"];
function FormPfDatosPersonalesComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5)(2, "app-autocomplete-field", 6);
    \u0275\u0275listener("valueChange", function FormPfDatosPersonalesComponent_Conditional_0_Conditional_1_Template_app_autocomplete_field_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDatosPersonales($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("keyListDetalle", \u0275\u0275pureFunction0(4, _c0))("relations", \u0275\u0275pureFunction0(5, _c1))("value", ctx_r1.datoPersonal == null ? null : ctx_r1.datoPersonal.id)("disabled", ctx_r1.isFormalizado);
  }
}
function FormPfDatosPersonalesComponent_Conditional_0_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c5))("dataSource", ctx_r1.datoPersonal.creditos_pm);
  }
}
function FormPfDatosPersonalesComponent_Conditional_0_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c5))("dataSource", ctx_r1.datoPersonal.creditos_pf);
  }
}
function FormPfDatosPersonalesComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "data-view-section", 7)(2, "data-view-section", 8)(3, "data-view-section", 9)(4, "tabla-local", 10);
    \u0275\u0275conditionalCreate(5, FormPfDatosPersonalesComponent_Conditional_0_Conditional_2_Conditional_5_Template, 1, 3, "tabla-local", 11);
    \u0275\u0275conditionalCreate(6, FormPfDatosPersonalesComponent_Conditional_0_Conditional_2_Conditional_6_Template, 1, 3, "tabla-local", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r1.datoPersonal.id)("data", ctx_r1.datoPersonal)("keys", \u0275\u0275pureFunction0(13, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r1.datoPersonal.id)("data", ctx_r1.datoPersonal)("keys", \u0275\u0275pureFunction0(14, _c3));
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r1.datoPersonal.id)("data", ctx_r1.datoPersonal.telefonos_personales)("ignoreKeys", \u0275\u0275pureFunction0(15, _c4));
    \u0275\u0275advance();
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(16, _c5))("dataSource", ctx_r1.datoPersonal.creditos);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.datoPersonal.creditos_pm ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.datoPersonal.creditos_pf ? 6 : -1);
  }
}
function FormPfDatosPersonalesComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function FormPfDatosPersonalesComponent_Conditional_0_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateCredito());
    });
    \u0275\u0275text(1, " Guardar Solicitante Seleccionado ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.datoPersonal || ctx_r1.isFormalizado);
  }
}
function FormPfDatosPersonalesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, FormPfDatosPersonalesComponent_Conditional_0_Conditional_1_Template, 3, 6, "div", 1);
    \u0275\u0275conditionalCreate(2, FormPfDatosPersonalesComponent_Conditional_0_Conditional_2_Template, 7, 17, "div", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275conditionalCreate(4, FormPfDatosPersonalesComponent_Conditional_0_Conditional_4_Template, 2, 1, "button", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.userClient && !(ctx_r1.credito == null ? null : ctx_r1.credito.cliente_id) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.datoPersonal ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.userClient && !(ctx_r1.credito == null ? null : ctx_r1.credito.cliente_id) ? 4 : -1);
  }
}
var _FormPfDatosPersonalesComponent = class _FormPfDatosPersonalesComponent {
  constructor(utils, datoPersonaFisicaController, dpController, creditoController, route, storage, cdr) {
    this.utils = utils;
    this.datoPersonaFisicaController = datoPersonaFisicaController;
    this.dpController = dpController;
    this.creditoController = creditoController;
    this.route = route;
    this.storage = storage;
    this.cdr = cdr;
    this.isFormalizado = false;
    this.autoacompleteMapFunction = (row) => {
      return row.apellido_paterno + " " + row.apellido_paterno + " (total creditos: " + row.creditos?.length + ")";
    };
  }
  ngOnInit() {
    this.userClient = this.storage.getClienteUser();
    this.route.parent?.parent?.paramMap.subscribe((param) => __async(this, null, function* () {
      const id = this.utils.intOrNull(param.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id);
        this.checkAndDisableForm();
        this.datoPersonaFisica = yield this.datoPersonaFisicaController.findOrCreate({
          credito_id: id,
          deleted_at: null
        });
        if (this.datoPersonaFisica?.datos_personal_id) {
          this.setDatosPersonales(this.datoPersonaFisica.datos_personal_id);
        }
      }
    }));
  }
  checkAndDisableForm() {
    if (this.credito?.formalizado_fecha) {
      this.isFormalizado = true;
      this.cdr.detectChanges();
    }
  }
  setDatosPersonales(id) {
    return __async(this, null, function* () {
      if (typeof id == "number") {
        this.datoPersonal = yield this.dpController.find(id, ["creditos", "creditosPf", "creditosPm", "telefonosPersonales", "ciudades", "estado_nacimiento"], false);
        return;
      }
      this.datoPersonal = void 0;
    });
  }
  updateCredito() {
    return __async(this, null, function* () {
      if (this.datoPersonaFisica && this.datoPersonal) {
        this.datoPersonaFisica.datos_personal_id = this.datoPersonal.id;
        this.datoPersonaFisicaController.update(this.datoPersonaFisica.id, this.datoPersonaFisica);
      }
    });
  }
};
_FormPfDatosPersonalesComponent.\u0275fac = function FormPfDatosPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormPfDatosPersonalesComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(DatoPersonaFisicaService), \u0275\u0275directiveInject(DatoPersonalService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_FormPfDatosPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormPfDatosPersonalesComponent, selectors: [["app-form-pf-datos-personales"]], decls: 1, vars: 1, consts: [[1, "container"], [1, "row", "justify-content-evenly"], [1, "container", "p-3"], [1, "row", "sticky-bottom", "z-2"], [1, "btn", "btn-secondary", 3, "disabled"], [1, "col-12", "col-sm", "p-3"], ["label", "\xBFEl solicitante existe en el sistema?", "placeholder", "Ingrese un Curp", "apiUrl", "api/datos_personales", "key", "id", "keyDetalle", "curp", "nuevoRedirect", "/catalogos/datos-personales/nuevo", 3, "valueChange", "keyListDetalle", "relations", "value", "disabled"], ["title", "Datos Personales del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "keys"], ["title", "Direcci\xF3n del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "keys"], ["title", "Tel\xE9fonos del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "ignoreKeys"], ["title", "Creditos Como Aval", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Creditos como Representante Legal", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Creditos como Persona Fisica", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], [1, "btn", "btn-secondary", 3, "click", "disabled"]], template: function FormPfDatosPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormPfDatosPersonalesComponent_Conditional_0_Template, 5, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.datoPersonaFisica ? 0 : -1);
  }
}, dependencies: [
  AutocompleteFieldComponent,
  TablaLocalComponent,
  DataViewSectionComponent
], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n/*# sourceMappingURL=form-pf-datos-personales.component.css.map */"] });
var FormPfDatosPersonalesComponent = _FormPfDatosPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormPfDatosPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-form-pf-datos-personales", imports: [
      AutocompleteFieldComponent,
      TablaLocalComponent,
      DataViewSectionComponent
    ], template: `@if (datoPersonaFisica) {
  <div class="container">
    @if (!userClient && !credito?.cliente_id) {
      <div class="row justify-content-evenly">
        <div class="col-12 col-sm p-3">
          <app-autocomplete-field
            label="\xBFEl solicitante existe en el sistema?"
            placeholder="Ingrese un Curp"
            apiUrl="api/datos_personales"
            [keyListDetalle]="['nombre','apellido_paterno', 'apellido_materno']"
            key="id"
            keyDetalle="curp"
            [relations]='["datosPersonasMorales","creditos","datosPersonasFisicas",]'
            (valueChange)="setDatosPersonales($event)"
            [value]="datoPersonal?.id"
            nuevoRedirect="/catalogos/datos-personales/nuevo"
            [disabled]="isFormalizado"
            />
        </div>
      </div>
    }
    @if (datoPersonal) {
      <div class="container p-3">
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
      </div>
    }
    <div class="row sticky-bottom z-2">
      @if (!userClient && !credito?.cliente_id) {
        <button class="btn btn-secondary" [disabled]="!datoPersonal || isFormalizado" (click)="updateCredito()">
          Guardar Solicitante Seleccionado
        </button>
      }
    </div>
  </div>
}
`, styles: ["/* src/app/main/creditos/credito-form/credito-persona-fisica/form-pf-datos-personales/form-pf-datos-personales.component.css */\n.container {\n  min-height: 20rem;\n}\n/*# sourceMappingURL=form-pf-datos-personales.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }, { type: DatoPersonaFisicaService }, { type: DatoPersonalService }, { type: CreditoService }, { type: ActivatedRoute }, { type: LocalStorageService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormPfDatosPersonalesComponent, { className: "FormPfDatosPersonalesComponent", filePath: "src/app/main/creditos/credito-form/credito-persona-fisica/form-pf-datos-personales/form-pf-datos-personales.component.ts", lineNumber: 27 });
})();

// src/app/controllers/inversion.tipo.detalle.service.ts
var _InversionTipoDetalleService = class _InversionTipoDetalleService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "inversiones_tipos_detalles";
    this.columns = [
      "nombre",
      "inversion_tipo_id",
      "monto_solicitado",
      "usuario_id"
    ];
  }
};
_InversionTipoDetalleService.\u0275fac = function InversionTipoDetalleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InversionTipoDetalleService)(\u0275\u0275inject(Injector));
};
_InversionTipoDetalleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InversionTipoDetalleService, factory: _InversionTipoDetalleService.\u0275fac, providedIn: "any" });
var InversionTipoDetalleService = _InversionTipoDetalleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InversionTipoDetalleService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/shared/inversion-programa/inversion-detalle/inversion-detalle.component.ts
function InversionDetalleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.detalle.nombre, " ");
  }
}
function InversionDetalleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function InversionDetalleComponent_Conditional_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.detalle.nombre, $event) || (ctx_r0.detalle.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.detalle.nombre);
  }
}
function InversionDetalleComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.detalle.monto_solicitado), " ");
  }
}
function InversionDetalleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function InversionDetalleComponent_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.detalle.monto_solicitado, $event) || (ctx_r0.detalle.monto_solicitado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.detalle.monto_solicitado);
  }
}
function InversionDetalleComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
}
function InversionDetalleComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function InversionDetalleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function InversionDetalleComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveDetalle());
    });
    \u0275\u0275conditionalCreate(1, InversionDetalleComponent_Conditional_8_Conditional_1_Template, 1, 0, "span", 12);
    \u0275\u0275conditionalCreate(2, InversionDetalleComponent_Conditional_8_Conditional_2_Template, 1, 0, "i", 13);
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
function InversionDetalleComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function InversionDetalleComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.edit = true);
    });
    \u0275\u0275element(1, "i", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.isFormalizado);
  }
}
var _InversionDetalleComponent = class _InversionDetalleComponent {
  constructor(detalleController) {
    this.detalleController = detalleController;
    this.isFormalizado = false;
    this.delete = new EventEmitter();
    this.edit = false;
    this.isLoading = false;
  }
  ngOnChanges(changes) {
    if (changes["detalle"]) {
      if (this.detalle.id == 0)
        this.edit = true;
    }
  }
  saveDetalle() {
    return __async(this, null, function* () {
      this.isLoading = true;
      const res = yield this.detalleController.createOrUpdate(this.detalle);
      if (res) {
        this.edit = false;
      }
      this.isLoading = false;
    });
  }
  deleteDetalle() {
    return __async(this, null, function* () {
      if (this.detalle.id > 0) {
        const res = yield this.detalleController.switch(this.detalle);
        if (res)
          this.delete.emit();
        return;
      }
      this.delete.emit();
    });
  }
};
_InversionDetalleComponent.\u0275fac = function InversionDetalleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InversionDetalleComponent)(\u0275\u0275directiveInject(InversionTipoDetalleService));
};
_InversionDetalleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InversionDetalleComponent, selectors: [["app-inversion-detalle"]], inputs: { detalle: "detalle", isFormalizado: "isFormalizado" }, outputs: { delete: "delete" }, features: [\u0275\u0275NgOnChangesFeature], decls: 12, vars: 7, consts: [[1, "row", "py-1", "border-bottom"], [1, "col-12", "col-sm", "p-1", "px-3"], ["type", "text", "placeholder", "Detalle...", 1, "form-control", 3, "ngModel"], ["type", "number", "placeholder", "Monto...$", 1, "form-control", 3, "ngModel"], [1, "col-12", "col-sm", "text-nowrap", "text-end", "p-1", "px-3"], [1, "btn", "btn-sm", "btn-primary"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "disabled"], [1, "btn", "btn-sm", "btn-danger", "mx-1", 3, "click", "disabled"], [1, "bi", "bi-trash-fill"], ["type", "text", "placeholder", "Detalle...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Monto...$", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-floppy-fill"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click", "disabled"], [1, "bi", "bi-pencil-fill"]], template: function InversionDetalleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, InversionDetalleComponent_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(3, InversionDetalleComponent_Conditional_3_Template, 1, 1, "input", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 1);
    \u0275\u0275conditionalCreate(5, InversionDetalleComponent_Conditional_5_Template, 3, 3, "span");
    \u0275\u0275conditionalCreate(6, InversionDetalleComponent_Conditional_6_Template, 1, 1, "input", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275conditionalCreate(8, InversionDetalleComponent_Conditional_8_Template, 3, 2, "button", 5);
    \u0275\u0275conditionalCreate(9, InversionDetalleComponent_Conditional_9_Template, 2, 1, "button", 6);
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function InversionDetalleComponent_Template_button_click_10_listener() {
      return ctx.deleteDetalle();
    });
    \u0275\u0275element(11, "i", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.edit ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.edit ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.edit ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.edit ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isFormalizado);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, CurrencyPipe], encapsulation: 2 });
var InversionDetalleComponent = _InversionDetalleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InversionDetalleComponent, [{
    type: Component,
    args: [{ selector: "app-inversion-detalle", imports: [
      FormsModule,
      CurrencyPipe
    ], template: '<div class="row py-1 border-bottom">\n  <div class="col-12 col-sm p-1 px-3">\n    @if (!edit) {\n      <span>\n        {{detalle.nombre}}\n      </span>\n    }\n    @if (edit) {\n      <input\n        type="text"\n        placeholder="Detalle..."\n        class="form-control"\n        [(ngModel)]="detalle.nombre">\n    }\n  </div>\n  <div class="col-12 col-sm p-1 px-3">\n    @if (!edit) {\n      <span>\n        {{detalle.monto_solicitado | currency}}\n      </span>\n    }\n    @if (edit) {\n      <input\n        type="number"\n        class="form-control"\n        placeholder="Monto...$"\n        [(ngModel)]="detalle.monto_solicitado">\n    }\n  </div>\n  <div class="col-12 col-sm text-nowrap text-end p-1 px-3">\n    @if (edit) {\n      <button class="btn btn-sm btn-primary" (click)="saveDetalle()">\n        @if (isLoading) {\n          <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>\n        }\n        @if (!isLoading) {\n          <i class="bi bi-floppy-fill"></i>\n        }\n      </button>\n    }\n    @if (!edit) {\n      <button class="btn btn-sm btn-primary mx-1" (click)="edit=true" [disabled]="isFormalizado">\n        <i class="bi bi-pencil-fill"></i>\n      </button>\n    }\n    <button class="btn btn-sm btn-danger mx-1" (click)="deleteDetalle()" [disabled]="isFormalizado">\n      <i class="bi bi-trash-fill"></i>\n    </button>\n  </div>\n</div>' }]
  }], () => [{ type: InversionTipoDetalleService }], { detalle: [{
    type: Input
  }], isFormalizado: [{
    type: Input
  }], delete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InversionDetalleComponent, { className: "InversionDetalleComponent", filePath: "src/app/shared/inversion-programa/inversion-detalle/inversion-detalle.component.ts", lineNumber: 16 });
})();

// src/app/controllers/inversion.tipo.service.ts
var _InversionTipoService = class _InversionTipoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "inversiones_tipos";
    this.columns = [
      "inversion_programa_id",
      "inversion_tipo",
      "usuario_id"
    ];
  }
};
_InversionTipoService.\u0275fac = function InversionTipoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InversionTipoService)(\u0275\u0275inject(Injector));
};
_InversionTipoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InversionTipoService, factory: _InversionTipoService.\u0275fac, providedIn: "any" });
var InversionTipoService = _InversionTipoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InversionTipoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/shared/inversion-programa/inversion-tipo/inversion-tipo.component.ts
function InversionTipoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inversionTipo.inversion_tipo);
  }
}
function InversionTipoComponent_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opcion_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opcion_r3);
  }
}
function InversionTipoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function InversionTipoComponent_Conditional_3_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.inversionTipo.inversion_tipo, $event) || (ctx_r0.inversionTipo.inversion_tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 13);
    \u0275\u0275text(2, "Selecciona una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, InversionTipoComponent_Conditional_3_For_4_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.inversionTipo.inversion_tipo);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.opciones);
  }
}
function InversionTipoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function InversionTipoComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showDetalles = !ctx_r0.showDetalles);
    });
    \u0275\u0275elementStart(1, "i", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.showDetalles ? "Ocultar" : "Ver", " detalles");
  }
}
function InversionTipoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function InversionTipoComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.nuevoDetalle());
    });
    \u0275\u0275elementStart(1, "i", 17);
    \u0275\u0275text(2, " Agregar detalle");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function InversionTipoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function InversionTipoComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.edit = true);
    });
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function InversionTipoComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
}
function InversionTipoComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 20);
  }
}
function InversionTipoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function InversionTipoComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275conditionalCreate(1, InversionTipoComponent_Conditional_11_Conditional_1_Template, 1, 0, "span", 9);
    \u0275\u0275conditionalCreate(2, InversionTipoComponent_Conditional_11_Conditional_2_Template, 1, 0, "i", 20);
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
function InversionTipoComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
}
function InversionTipoComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function InversionTipoComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-inversion-detalle", 23);
    \u0275\u0275listener("delete", function InversionTipoComponent_Conditional_15_For_2_Template_app_inversion_detalle_delete_0_listener() {
      const detalle_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.localDeleteDetalle(detalle_r9));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detalle_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("detalle", detalle_r9)("isFormalizado", ctx_r0.disabled);
  }
}
function InversionTipoComponent_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "No hay detalles registrados.");
    \u0275\u0275elementEnd();
  }
}
function InversionTipoComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, InversionTipoComponent_Conditional_15_For_2_Template, 1, 2, "app-inversion-detalle", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, InversionTipoComponent_Conditional_15_Conditional_3_Template, 2, 0, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.inversionTipo.inversiones_tipos_detalles);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.detalles.length === 0 ? 3 : -1);
  }
}
var _InversionTipoComponent = class _InversionTipoComponent {
  constructor(inversionTipoController) {
    this.inversionTipoController = inversionTipoController;
    this.inversionTipoChange = new EventEmitter();
    this.deleted = new EventEmitter();
    this.disabled = false;
    this.edit = false;
    this.isLoading = false;
    this.isDeleting = false;
    this.detalles = [];
    this.opciones = ["MERCANCIA E INSUMOS", "MOBILIARIO Y/O EQUIPO DE OPERACION", "INFRAESTRUCTURA"];
    this.showDetalles = false;
  }
  ngOnChanges(changes) {
    if (changes["inversionTipo"]) {
      this.detalles = this.inversionTipo.inversiones_tipos_detalles ?? [];
      if (this.inversionTipo.id == 0)
        this.edit = true;
    }
  }
  save() {
    return __async(this, null, function* () {
      this.isLoading = true;
      const res = yield this.inversionTipoController.createOrUpdate(this.inversionTipo);
      if (res) {
        this.inversionTipo.id = res.id;
      }
      if (!this.inversionTipo.inversiones_tipos_detalles) {
        this.inversionTipo.inversiones_tipos_detalles = [];
      }
      this.edit = false;
      this.isLoading = false;
    });
  }
  delete() {
    return __async(this, null, function* () {
      this.isDeleting = true;
      if (!this.inversionTipo.id) {
        this.deleted.emit();
        this.isDeleting = false;
        return;
      }
      const res = yield this.inversionTipoController.switch(this.inversionTipo);
      if (res) {
        this.isDeleting = false;
        this.deleted.emit();
      }
    });
  }
  nuevoDetalle() {
    this.showDetalles = true;
    if (!this.inversionTipo.inversiones_tipos_detalles) {
      this.inversionTipo.inversiones_tipos_detalles = [];
    }
    this.inversionTipo.inversiones_tipos_detalles.unshift({
      inversion_tipo_id: this.inversionTipo.id ?? 0,
      usuario_id: 0,
      monto_solicitado: 0,
      nombre: "",
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
    this.inversionTipoChange.emit(this.inversionTipo);
  }
  totalTipo() {
    return this.inversionTipo.inversiones_tipos_detalles?.reduce((acc, item) => {
      return acc + item.monto_solicitado;
    }, 0) ?? 0;
  }
  localDeleteDetalle(detalle) {
    const index = this.inversionTipo.inversiones_tipos_detalles?.indexOf(detalle) ?? -1;
    if (index > -1) {
      this.inversionTipo.inversiones_tipos_detalles?.splice(index, 1);
    }
  }
};
_InversionTipoComponent.\u0275fac = function InversionTipoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InversionTipoComponent)(\u0275\u0275directiveInject(InversionTipoService));
};
_InversionTipoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InversionTipoComponent, selectors: [["app-inversion-tipo"]], inputs: { inversionTipo: "inversionTipo", inversionTipoChange: "inversionTipoChange", disabled: "disabled" }, outputs: { deleted: "deleted" }, features: [\u0275\u0275NgOnChangesFeature], decls: 16, vars: 13, consts: [[1, "row", "py-1", "border-bottom"], [1, "col-12", "col-sm", "p-1", "px-3"], [1, "form-select", 3, "ngModel"], [1, "col-12", "col-sm", "p-1", "text-bold", "px-3"], [1, "col-12", "col-sm", "text-nowrap", "p-1", "px-3"], [1, "btn", "btn-sm", "btn-primary", "mx-1"], [1, "btn", "btn-sm", "btn-secondary", "mx-1", 3, "disabled"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "disabled"], [1, "btn", "btn-sm", "btn-danger", "mx-1", 3, "click", "disabled"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-trash-fill"], [1, "container", "px-3", "py-0"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click"], [1, "bi", "bi-list-ul"], [1, "btn", "btn-sm", "btn-secondary", "mx-1", 3, "click", "disabled"], [1, "bi", "bi-plus-circle-fill"], [1, "btn", "btn-sm", "btn-primary", "mx-1", 3, "click", "disabled"], [1, "bi", "bi-pencil-fill"], [1, "bi", "bi-floppy-fill"], [3, "detalle", "isFormalizado"], [1, "h5"], [3, "delete", "detalle", "isFormalizado"]], template: function InversionTipoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, InversionTipoComponent_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(3, InversionTipoComponent_Conditional_3_Template, 5, 2, "select", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275conditionalCreate(8, InversionTipoComponent_Conditional_8_Template, 3, 1, "button", 5);
    \u0275\u0275conditionalCreate(9, InversionTipoComponent_Conditional_9_Template, 3, 1, "button", 6);
    \u0275\u0275conditionalCreate(10, InversionTipoComponent_Conditional_10_Template, 2, 1, "button", 7);
    \u0275\u0275conditionalCreate(11, InversionTipoComponent_Conditional_11_Template, 3, 2, "button", 5);
    \u0275\u0275elementStart(12, "button", 8);
    \u0275\u0275listener("click", function InversionTipoComponent_Template_button_click_12_listener() {
      return ctx.delete();
    });
    \u0275\u0275conditionalCreate(13, InversionTipoComponent_Conditional_13_Template, 1, 0, "span", 9);
    \u0275\u0275conditionalCreate(14, InversionTipoComponent_Conditional_14_Template, 1, 0, "i", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, InversionTipoComponent_Conditional_15_Template, 4, 1, "div", 11);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.edit ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 11, ctx.totalTipo()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.inversionTipo.id ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.inversionTipo.id ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.edit ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isDeleting ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isDeleting ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showDetalles ? 15 : -1);
  }
}, dependencies: [
  InversionDetalleComponent,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  CurrencyPipe
], encapsulation: 2 });
var InversionTipoComponent = _InversionTipoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InversionTipoComponent, [{
    type: Component,
    args: [{ selector: "app-inversion-tipo", imports: [
      InversionDetalleComponent,
      FormsModule,
      CurrencyPipe
    ], template: `<div class="row py-1 border-bottom">
  <div class="col-12 col-sm p-1 px-3">
    @if (!edit) {
      <span>{{inversionTipo.inversion_tipo}}</span>
    }
    @if (edit) {
      <select [(ngModel)]="inversionTipo.inversion_tipo" class="form-select" >
        <option [value]="undefined" disabled>Selecciona una opci\xF3n</option>
        @for (opcion of opciones; track opcion) {
          <option>{{opcion}}</option>
        }
      </select>
    }
  </div>
  <div class="col-12 col-sm p-1 text-bold px-3">
    {{totalTipo()|currency}}
  </div>
  <div class="col-12 col-sm text-nowrap p-1 px-3">
    @if (inversionTipo.id) {
      <button class="btn btn-sm btn-primary mx-1" (click)="showDetalles=!showDetalles">
        <i class="bi bi-list-ul"> {{showDetalles?'Ocultar':'Ver'}} detalles</i>
      </button>
    }
    @if (inversionTipo.id) {
      <button class="btn btn-sm btn-secondary mx-1" (click)="nuevoDetalle()" [disabled]="disabled">
        <i class="bi bi-plus-circle-fill"> Agregar detalle</i>
      </button>
    }
    @if (!edit) {
      <button class="btn btn-sm btn-primary mx-1" (click)="edit=true" [disabled]="disabled">
        <i class="bi bi-pencil-fill"></i>
      </button>
    }
    @if (edit) {
      <button class="btn btn-sm btn-primary mx-1" (click)="save()">
        @if (isLoading) {
          <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        }
        @if (!isLoading) {
          <i class="bi bi-floppy-fill"></i>
        }
      </button>
    }
    <button class="btn btn-sm btn-danger mx-1" (click)="delete()" [disabled]="disabled">
      @if (isDeleting) {
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      }
      @if (!isDeleting) {
        <i class="bi bi-trash-fill"></i>
      }
    </button>
  </div>
</div>
@if (showDetalles) {
  <div class="container px-3 py-0">
    @for (detalle of inversionTipo.inversiones_tipos_detalles; track detalle) {
      <app-inversion-detalle
        [detalle]="detalle"
        (delete)="localDeleteDetalle(detalle)"
        [isFormalizado]="disabled"
        />
    }
    @if (detalles.length===0) {
      <p class="h5">No hay detalles registrados.</p>
    }
  </div>
}
` }]
  }], () => [{ type: InversionTipoService }], { inversionTipo: [{
    type: Input
  }], inversionTipoChange: [{
    type: Input
  }], deleted: [{
    type: Output
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InversionTipoComponent, { className: "InversionTipoComponent", filePath: "src/app/shared/inversion-programa/inversion-tipo/inversion-tipo.component.ts", lineNumber: 19 });
})();

// src/app/controllers/inversion.programa.service.ts
var _InversionProgramaService = class _InversionProgramaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "inversiones_programas";
    this.columns = [
      "credito_id",
      "plazo_solicitado_meses",
      "monto_solicitado",
      "usuario_id"
    ];
  }
};
_InversionProgramaService.\u0275fac = function InversionProgramaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InversionProgramaService)(\u0275\u0275inject(Injector));
};
_InversionProgramaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InversionProgramaService, factory: _InversionProgramaService.\u0275fac, providedIn: "any" });
var InversionProgramaService = _InversionProgramaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InversionProgramaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/shared/inversion-programa/inversion-programa.component.ts
function InversionProgramaComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plazo_r1 = ctx.$implicit;
    \u0275\u0275property("value", plazo_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plazo_r1);
  }
}
function InversionProgramaComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " El total del monto solicitado exede el m\xE1ximo permitido para este producto financiero ");
    \u0275\u0275elementEnd();
  }
}
function InversionProgramaComponent_Conditional_24_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-inversion-tipo", 13);
    \u0275\u0275listener("deleted", function InversionProgramaComponent_Conditional_24_For_9_Template_app_inversion_tipo_deleted_0_listener() {
      const tipo_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteInversionTipo(tipo_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tipo_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("inversionTipo", tipo_r5)("disabled", ctx_r2.disabled);
  }
}
function InversionProgramaComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, " Tipo de Inversi\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4, " Monto Inversi\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "button", 10);
    \u0275\u0275listener("click", function InversionProgramaComponent_Conditional_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nuevoInversionTipo());
    });
    \u0275\u0275element(7, "i", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(8, InversionProgramaComponent_Conditional_24_For_9_Template, 1, 2, "app-inversion-tipo", 12, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r2.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.inversionTipos);
  }
}
var _InversionProgramaComponent = class _InversionProgramaComponent {
  constructor(inversionProgramaController) {
    this.inversionProgramaController = inversionProgramaController;
    this.inversion_programa_idChange = new EventEmitter();
    this.inversionProgramaChange = new EventEmitter();
    this.credito_id = 0;
    this.disabled = false;
    this.plazosOptions = [];
    this.inversionTipos = [];
  }
  ngOnChanges(changes) {
    if (changes["inversionPrograma"]) {
      this.setInversionesTipo();
    }
    if (changes["productoFinanciero"]) {
      this.setPlazos();
    }
  }
  updateProgramaInversion() {
    return __async(this, null, function* () {
      console.log(this.credito_id);
      this.inversionPrograma = yield this.inversionProgramaController.createOrUpdate(__spreadProps(__spreadValues({
        credito_id: this.credito_id
      }, this.inversionPrograma), {
        plazo_solicitado_meses: this.plazo_solicitado_meses
      }));
      this.inversionProgramaChange.emit(this.inversionPrograma);
    });
  }
  setInversionesTipo() {
    if (!this.inversionPrograma)
      return;
    if (this.inversionPrograma.inversion_tipos) {
      this.inversionTipos = this.inversionPrograma.inversion_tipos;
    }
    console.log(this.inversionTipos, this.inversionPrograma);
  }
  setPlazos() {
    this.plazosOptions = this.productoFinanciero?.plazos?.map((plazo) => plazo.plazo_meses) ?? [];
    this.plazo_solicitado_meses = this.inversionPrograma?.plazo_solicitado_meses ?? 0;
  }
  nuevoInversionTipo() {
    this.inversionTipos.unshift({
      inversion_programa_id: this.inversionPrograma?.id ?? 0,
      usuario_id: 0,
      inversion_tipo: "MERCANCIA E INSUMOS",
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null,
      inversiones_tipos_detalles: []
    });
  }
  total() {
    const total = this.inversionTipos.reduce((acc, item) => {
      return acc + (item.inversiones_tipos_detalles ?? []).reduce((acc2, item2) => {
        return acc2 + item2.monto_solicitado;
      }, 0);
    }, 0) ?? 0;
    return total ? total : this.inversionPrograma?.monto_solicitado ?? 0;
  }
  deleteInversionTipo(tipo) {
    this.inversionTipos.splice(this.inversionTipos.indexOf(tipo), 1);
  }
};
_InversionProgramaComponent.\u0275fac = function InversionProgramaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InversionProgramaComponent)(\u0275\u0275directiveInject(InversionProgramaService));
};
_InversionProgramaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InversionProgramaComponent, selectors: [["app-inversion-programa"]], inputs: { inversion_programa_id: "inversion_programa_id", inversionPrograma: "inversionPrograma", credito_id: "credito_id", productoFinanciero: "productoFinanciero", disabled: "disabled" }, outputs: { inversion_programa_idChange: "inversion_programa_idChange", inversionProgramaChange: "inversionProgramaChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 25, vars: 14, consts: [[1, "container-fluid"], [1, "fw-bold"], [1, "form-select", 3, "ngModelChange", "change", "ngModel", "disabled"], ["disabled", "", 3, "value"], [3, "value"], [1, "mt-4"], ["role", "alert", 1, "alert", "alert-danger"], [1, "row", "py-1", "border-bottom", "fw-bold"], [1, "col-12", "col-sm", "p-1", "px-3"], [1, "col-12", "col-sm", "p-1", "ms-5", "px-3", "text-end"], [1, "btn", "btn-sm", "btn-success", 3, "click", "disabled"], [1, "bi", "bi-plus-circle-fill"], [3, "inversionTipo", "disabled"], [3, "deleted", "inversionTipo", "disabled"]], template: function InversionProgramaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
    \u0275\u0275text(2, "Plazo Solicitado Meses:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 2);
    \u0275\u0275twoWayListener("ngModelChange", function InversionProgramaComponent_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.plazo_solicitado_meses, $event) || (ctx.plazo_solicitado_meses = $event);
      return $event;
    });
    \u0275\u0275listener("change", function InversionProgramaComponent_Template_select_change_3_listener() {
      return ctx.updateProgramaInversion();
    });
    \u0275\u0275elementStart(4, "option", 3);
    \u0275\u0275text(5, "Selecciona un plazo");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, InversionProgramaComponent_For_7_Template, 2, 2, "option", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 5)(9, "b");
    \u0275\u0275text(10, "Monto M\xEDnimo Permitido:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "b");
    \u0275\u0275text(15, "Monto M\xE1ximo Permitido:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p")(19, "b");
    \u0275\u0275text(20, "Total Montos:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, InversionProgramaComponent_Conditional_23_Template, 2, 0, "div", 6);
    \u0275\u0275conditionalCreate(24, InversionProgramaComponent_Conditional_24_Template, 10, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.plazo_solicitado_meses);
    \u0275\u0275property("disabled", ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.plazosOptions);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, ctx.productoFinanciero == null ? null : ctx.productoFinanciero.capital_minimo_permitido));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 10, ctx.productoFinanciero == null ? null : ctx.productoFinanciero.capital_maximo_permitido));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 12, ctx.total()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.total() > ((ctx.productoFinanciero == null ? null : ctx.productoFinanciero.capital_maximo_permitido) ?? 0) ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.inversionPrograma == null ? null : ctx.inversionPrograma.id) ? 24 : -1);
  }
}, dependencies: [
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  CurrencyPipe,
  InversionTipoComponent
], encapsulation: 2 });
var InversionProgramaComponent = _InversionProgramaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InversionProgramaComponent, [{
    type: Component,
    args: [{ selector: "app-inversion-programa", imports: [
      FormsModule,
      CurrencyPipe,
      InversionTipoComponent
    ], template: '<div class="container-fluid">\n  <label class="fw-bold">Plazo Solicitado Meses:</label>\n  <select class="form-select" [(ngModel)]="plazo_solicitado_meses" (change)="updateProgramaInversion()"\n  [disabled]="disabled">\n    <option [value]="0" disabled>Selecciona un plazo</option>\n    @for (plazo of plazosOptions; track plazo) {\n      <option [value]="plazo">{{plazo}}</option>\n    }\n  </select>\n  <p class="mt-4" ><b>Monto M\xEDnimo Permitido:</b> {{productoFinanciero?.capital_minimo_permitido|currency}}</p>\n  <p><b>Monto M\xE1ximo Permitido:</b> {{productoFinanciero?.capital_maximo_permitido|currency}}</p>\n  <p><b>Total Montos:</b> {{total()|currency}}</p>\n  @if (total()>(productoFinanciero?.capital_maximo_permitido??0)) {\n    <div class="alert alert-danger" role="alert">\n      El total del monto solicitado exede el m\xE1ximo permitido para este producto financiero\n    </div>\n  }\n  @if (inversionPrograma?.id) {\n    <div class="row py-1 border-bottom fw-bold">\n      <div class="col-12 col-sm p-1 px-3">\n        Tipo de Inversi\xF3n\n      </div>\n      <div class="col-12 col-sm p-1 px-3">\n        Monto Inversi\xF3n\n      </div>\n      <div class="col-12 col-sm p-1 ms-5 px-3 text-end">\n        <button class="btn btn-sm btn-success" (click)="nuevoInversionTipo()" [disabled]="disabled">\n          <i class=" bi bi-plus-circle-fill"></i>\n        </button>\n      </div>\n    </div>\n    @for (tipo of inversionTipos; track tipo) {\n      <app-inversion-tipo [inversionTipo]="tipo" (deleted)="deleteInversionTipo(tipo)" [disabled]="disabled"/>\n    }\n  }\n</div>' }]
  }], () => [{ type: InversionProgramaService }], { inversion_programa_id: [{
    type: Input
  }], inversion_programa_idChange: [{
    type: Output
  }], inversionPrograma: [{
    type: Input
  }], inversionProgramaChange: [{
    type: Output
  }], credito_id: [{
    type: Input
  }], productoFinanciero: [{
    type: Input
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InversionProgramaComponent, { className: "InversionProgramaComponent", filePath: "src/app/shared/inversion-programa/inversion-programa.component.ts", lineNumber: 20 });
})();

// src/app/main/creditos/credito-form/form-programa-inversion/form-programa-inversion.component.ts
function FormProgramaInversionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-inversion-programa", 1);
    \u0275\u0275twoWayListener("inversionProgramaChange", function FormProgramaInversionComponent_Conditional_0_Template_app_inversion_programa_inversionProgramaChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito.inversiones_programas, $event) || (ctx_r1.credito.inversiones_programas = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("productoFinanciero", ctx_r1.credito.productos_financieros)("credito_id", ctx_r1.credito.id);
    \u0275\u0275twoWayProperty("inversionPrograma", ctx_r1.credito.inversiones_programas);
    \u0275\u0275property("disabled", ctx_r1.isFormalizado);
  }
}
var _FormProgramaInversionComponent = class _FormProgramaInversionComponent {
  constructor(utils, inversionProgramaController, route, creditoController, inversionTipoController, inversionTipoDetalleController) {
    this.utils = utils;
    this.inversionProgramaController = inversionProgramaController;
    this.route = route;
    this.creditoController = creditoController;
    this.inversionTipoController = inversionTipoController;
    this.inversionTipoDetalleController = inversionTipoDetalleController;
    this.inversionPrograma = {
      inversion_tipos: []
    };
    this.isFormalizado = false;
  }
  ngOnInit() {
    this.route.parent?.parent?.paramMap.subscribe((param) => __async(this, null, function* () {
      const id = this.utils.intOrNull(param.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id, ["inversionesProgramas.inversionTipos.inversionesTiposDetalles", "productosFinancieros.plazos"]);
        if (this.credito?.inversiones_programas) {
          console.log(this.credito);
          this.inversionPrograma = this.credito.inversiones_programas;
        }
        this.isFormalizado = this.credito?.formalizado_fecha !== null;
      }
    }));
  }
};
_FormProgramaInversionComponent.\u0275fac = function FormProgramaInversionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormProgramaInversionComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(InversionProgramaService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(InversionTipoService), \u0275\u0275directiveInject(InversionTipoDetalleService));
};
_FormProgramaInversionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormProgramaInversionComponent, selectors: [["app-form-programa-inversion"]], decls: 1, vars: 1, consts: [[3, "productoFinanciero", "credito_id", "inversionPrograma", "disabled"], [3, "inversionProgramaChange", "productoFinanciero", "credito_id", "inversionPrograma", "disabled"]], template: function FormProgramaInversionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormProgramaInversionComponent_Conditional_0_Template, 1, 4, "app-inversion-programa", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [
  FormsModule,
  InversionProgramaComponent
], encapsulation: 2 });
var FormProgramaInversionComponent = _FormProgramaInversionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormProgramaInversionComponent, [{
    type: Component,
    args: [{ selector: "app-form-programa-inversion", imports: [
      FormsModule,
      InversionProgramaComponent
    ], template: '@if (credito) {\n  <app-inversion-programa\n    [productoFinanciero]="credito.productos_financieros"\n    [credito_id]="credito.id"\n    [(inversionPrograma)]="credito.inversiones_programas"\n    [disabled]="isFormalizado"\n    />\n}' }]
  }], () => [{ type: UtilsService }, { type: InversionProgramaService }, { type: ActivatedRoute }, { type: CreditoService }, { type: InversionTipoService }, { type: InversionTipoDetalleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormProgramaInversionComponent, { className: "FormProgramaInversionComponent", filePath: "src/app/main/creditos/credito-form/form-programa-inversion/form-programa-inversion.component.ts", lineNumber: 23 });
})();

// src/app/controllers/credito.referencia.personal.service.ts
var _CreditoReferenciaPersonalService = class _CreditoReferenciaPersonalService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_referencias_personales";
    this.columns = [
      "usuario_id",
      "credito_id",
      "referencias_personal_id"
    ];
  }
};
_CreditoReferenciaPersonalService.\u0275fac = function CreditoReferenciaPersonalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoReferenciaPersonalService)(\u0275\u0275inject(Injector));
};
_CreditoReferenciaPersonalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoReferenciaPersonalService, factory: _CreditoReferenciaPersonalService.\u0275fac, providedIn: "any" });
var CreditoReferenciaPersonalService = _CreditoReferenciaPersonalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoReferenciaPersonalService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/creditos/credito-form/form-referencias-credito/form-referencias-credito.component.ts
function FormReferenciasCreditoComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 6)(2, "div", 7)(3, "app-generic-form", 8);
    \u0275\u0275listener("editChange", function FormReferenciasCreditoComponent_Conditional_0_Conditional_16_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSavedReferencia($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("form", ctx_r1.form)("edit", ctx_r1.edit)("sm", true)("rowSubmit", true)("controller", ctx_r1.referenciaController);
  }
}
function FormReferenciasCreditoComponent_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 9)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 2)(10, "button", 10);
    \u0275\u0275listener("click", function FormReferenciasCreditoComponent_Conditional_0_For_18_Template_button_click_10_listener() {
      const referencia_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editReferencia(referencia_r5));
    });
    \u0275\u0275element(11, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 12);
    \u0275\u0275listener("click", function FormReferenciasCreditoComponent_Conditional_0_For_18_Template_button_click_12_listener() {
      const referencia_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteReferencia(referencia_r5));
    });
    \u0275\u0275element(13, "i", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const referencia_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("d-none", (ctx_r1.edit == null ? null : ctx_r1.edit.id) == referencia_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(referencia_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(referencia_r5.parentescos == null ? null : referencia_r5.parentescos.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(referencia_r5.telefono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(referencia_r5.domicilio);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isFormalizado);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isFormalizado);
  }
}
function FormReferenciasCreditoComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 6)(2, "p", 14);
    \u0275\u0275text(3, "No hay referencias");
    \u0275\u0275elementEnd()()();
  }
}
function FormReferenciasCreditoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Parentesco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Domicilio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 2)(13, "button", 3);
    \u0275\u0275listener("click", function FormReferenciasCreditoComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nuevaReferencia());
    });
    \u0275\u0275element(14, "i", 4);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275conditionalCreate(16, FormReferenciasCreditoComponent_Conditional_0_Conditional_16_Template, 4, 5, "tr");
    \u0275\u0275repeaterCreate(17, FormReferenciasCreditoComponent_Conditional_0_For_18_Template, 14, 8, "tr", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(19, FormReferenciasCreditoComponent_Conditional_0_Conditional_19_Template, 4, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx_r1.isFormalizado);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showForm ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.credito.referencias_personales);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.credito.referencias_personales == null ? null : ctx_r1.credito.referencias_personales.length) == 0 ? 19 : -1);
  }
}
var FORM_DEF2 = [
  {
    key: "nombre",
    label: "Nombre",
    style: {
      div: "col-12 col-sm-6 col-md"
    },
    type: "text"
  },
  {
    key: "parentezco",
    label: "Parentesco",
    apiUrl: "api/parentesco",
    keyList: "id",
    keyDetalle: "nombre",
    style: {
      div: "col-12 col-sm-6 col-md"
    },
    nuevoRedirect: "/catalogos/parentescos/nuevo"
  },
  {
    key: "telefono",
    label: "Telefono",
    style: {
      div: "col-12 col-sm-6 col-md"
    },
    type: "text"
  },
  {
    key: "domicilio",
    label: "Domicilio",
    type: "text",
    style: {
      div: "col-12 col-sm-6 col-md"
    }
  }
];
var _FormReferenciasCreditoComponent = class _FormReferenciasCreditoComponent {
  constructor(utils, route, creditoController, referenciaController, creditoReferenciaPersonalController) {
    this.utils = utils;
    this.route = route;
    this.creditoController = creditoController;
    this.referenciaController = referenciaController;
    this.creditoReferenciaPersonalController = creditoReferenciaPersonalController;
    this.form = FORM_DEF2;
    this.showForm = false;
    this.isFormalizado = false;
  }
  ngOnInit() {
    this.route.parent?.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id, ["referenciasPersonales.parentescos"]);
      }
      this.isFormalizado = this.credito?.formalizado_fecha !== null;
    }));
  }
  nuevaReferencia() {
    this.showForm = !this.showForm;
    this.edit = void 0;
  }
  onSavedReferencia(referencia) {
    return __async(this, null, function* () {
      const find = this.credito?.referencias_personales?.find((ref) => ref.id == referencia.id);
      console.log(find);
      if (find) {
        this.credito = yield this.creditoController.find(this.credito.id, ["referenciasPersonales.parentescos"]);
        this.showForm = false;
        this.edit = void 0;
        return;
      }
      const nuevo = yield this.creditoReferenciaPersonalController.new({ credito_id: this.credito?.id, referencias_personal_id: referencia.id });
      if (nuevo)
        this.credito = yield this.creditoController.find(this.credito.id, ["referenciasPersonales.parentescos"]);
      this.showForm = false;
    });
  }
  deleteReferencia(refe) {
    return __async(this, null, function* () {
      const res = yield this.referenciaController.switch(refe);
      if (res) {
        this.credito = yield this.creditoController.find(this.credito.id, ["referenciasPersonales.parentescos"]);
      }
    });
  }
  editReferencia(refe) {
    this.showForm = true;
    this.edit = refe;
  }
};
_FormReferenciasCreditoComponent.\u0275fac = function FormReferenciasCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormReferenciasCreditoComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ReferenciaPersonalService), \u0275\u0275directiveInject(CreditoReferenciaPersonalService));
};
_FormReferenciasCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormReferenciasCreditoComponent, selectors: [["app-form-referencias-credito"]], decls: 1, vars: 1, consts: [[1, "container"], [1, "table", "table-borderless"], [1, "text-end"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-plus-circle-fill"], [1, "text-uppercase", 3, "d-none"], ["colspan", "6"], [1, "container-fluid", "p-3", "rounded", "border"], [3, "editChange", "form", "edit", "sm", "rowSubmit", "controller"], [1, "text-uppercase"], [1, "btn", "btn-sm", "btn-success", "me-1", 3, "click", "disabled"], [1, "bi", "bi-pencil-fill"], [1, "btn", "btn-sm", "btn-danger", 3, "click", "disabled"], [1, "bi", "bi-trash-fill"], [1, "h3", "fw-bold", "text-center", "p-4"]], template: function FormReferenciasCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormReferenciasCreditoComponent_Conditional_0_Template, 20, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [GenericFormComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  min-height: 10rem;\n}\n/*# sourceMappingURL=form-referencias-credito.component.css.map */"] });
var FormReferenciasCreditoComponent = _FormReferenciasCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormReferenciasCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-form-referencias-credito", imports: [
      GenericFormComponent
    ], template: '@if (credito) {\n  <div class="container">\n    <table class="table table-borderless">\n      <thead>\n        <tr>\n          <th>Nombre</th>\n          <th>Parentesco</th>\n          <th>Telefono</th>\n          <th>Domicilio</th>\n          <th class="text-end">\n            <button class="btn btn-success btn-sm" [disabled]="isFormalizado" (click)="nuevaReferencia()"><i class="bi bi-plus-circle-fill"></i></button>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        @if (showForm) {\n          <tr>\n            <td colspan="6">\n              <div class="container-fluid p-3 rounded border">\n                <app-generic-form\n                  [form]="form"\n                  [edit]="edit"\n                  [sm]="true"\n                  [rowSubmit]="true"\n                  [controller]="referenciaController"\n                  (editChange)="onSavedReferencia($event)"\n                  />\n              </div>\n            </td>\n          </tr>\n        }\n        @for (referencia of credito.referencias_personales; track referencia) {\n          <tr class="text-uppercase" [class.d-none]="edit?.id==referencia.id">\n            <td>{{referencia.nombre}}</td>\n            <td>{{referencia.parentescos?.nombre}}</td>\n            <td>{{referencia.telefono}}</td>\n            <td>{{referencia.domicilio}}</td>\n            <td class="text-end">\n              <button class="btn btn-sm btn-success me-1" [disabled]="isFormalizado" (click)="editReferencia(referencia)"><i class="bi bi-pencil-fill"></i></button>\n              <button class="btn btn-sm btn-danger" [disabled]="isFormalizado" (click)="deleteReferencia(referencia)"><i class="bi bi-trash-fill"></i></button>\n            </td>\n          </tr>\n        }\n        @if (credito.referencias_personales?.length==0) {\n          <tr>\n            <td colspan="6"><p class="h3 fw-bold text-center p-4">No hay referencias</p></td>\n          </tr>\n        }\n      </tbody>\n    </table>\n  </div>\n}\n', styles: ["/* src/app/main/creditos/credito-form/form-referencias-credito/form-referencias-credito.component.css */\n.container {\n  min-height: 10rem;\n}\n/*# sourceMappingURL=form-referencias-credito.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: CreditoService }, { type: ReferenciaPersonalService }, { type: CreditoReferenciaPersonalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormReferenciasCreditoComponent, { className: "FormReferenciasCreditoComponent", filePath: "src/app/main/creditos/credito-form/form-referencias-credito/form-referencias-credito.component.ts", lineNumber: 63 });
})();

// src/app/main/creditos/credito-form/form-aval-credito/form-aval-credito.component.ts
var _c02 = () => ["nombre", "apellido_paterno", "apellido_materno"];
var _c12 = () => ["datosPersonasMorales", "creditos", "datosPersonasFisicas"];
var _c22 = () => ["id", "nombre", "apellido_paterno", "apellido_materno", "email", "escolaridad", "estado_civil", "estado_nacimiento", "rfc", "curp"];
var _c32 = () => ["calle", "no_exterior", "no_interior", "colonia", "codigo_postal", "localidad", "ciudades", "referencias_domicilio"];
var _c42 = () => ["deleted_at", "datos_personal_id", "usuario_id"];
var _c52 = () => ["cobro_intereses_moratorios", "datos_bacarios_verificados", "referencia_bancaria"];
function FormAvalCreditoComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c52))("dataSource", ctx_r0.datoPersonal.creditos_pm);
  }
}
function FormAvalCreditoComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c52))("dataSource", ctx_r0.datoPersonal.creditos_pf);
  }
}
function FormAvalCreditoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "data-view-section", 7)(2, "data-view-section", 8)(3, "data-view-section", 9)(4, "tabla-local", 10);
    \u0275\u0275conditionalCreate(5, FormAvalCreditoComponent_Conditional_4_Conditional_5_Template, 1, 3, "tabla-local", 11);
    \u0275\u0275conditionalCreate(6, FormAvalCreditoComponent_Conditional_4_Conditional_6_Template, 1, 3, "tabla-local", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r0.datoPersonal.id)("data", ctx_r0.datoPersonal)("keys", \u0275\u0275pureFunction0(13, _c22));
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r0.datoPersonal.id)("data", ctx_r0.datoPersonal)("keys", \u0275\u0275pureFunction0(14, _c32));
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r0.datoPersonal.id)("data", ctx_r0.datoPersonal.telefonos_personales)("ignoreKeys", \u0275\u0275pureFunction0(15, _c42));
    \u0275\u0275advance();
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(16, _c52))("dataSource", ctx_r0.datoPersonal.creditos);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.datoPersonal.creditos_pm ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.datoPersonal.creditos_pf ? 6 : -1);
  }
}
var _FormAvalCreditoComponent = class _FormAvalCreditoComponent {
  constructor(utils, creditoController, dpController, route, cdr) {
    this.utils = utils;
    this.creditoController = creditoController;
    this.dpController = dpController;
    this.route = route;
    this.cdr = cdr;
    this.showCreate = false;
    this.isFormalizado = false;
    this.avalCredito = (row) => {
      return "(total creditos: " + row.creditos?.length + ")";
    };
  }
  ngOnInit() {
    this.route.parent?.parent?.paramMap.subscribe((param) => __async(this, null, function* () {
      const id = this.utils.intOrNull(param.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id);
        if (this.credito?.aval_id) {
          this.checkAndDisableForm();
          this.setDatosPersonales(this.credito.aval_id);
        }
      }
    }));
  }
  checkAndDisableForm() {
    if (this.credito?.formalizado_fecha) {
      this.isFormalizado = true;
      this.cdr.detectChanges();
    }
  }
  setDatosPersonales(id) {
    return __async(this, null, function* () {
      if (typeof id == "number") {
        this.datoPersonal = yield this.dpController.find(id, ["creditos", "creditosPf", "creditosPm", "telefonosPersonales", "ciudades", "estado_nacimiento"], false);
        return;
      }
      this.datoPersonal = void 0;
    });
  }
  updateCredito() {
    return __async(this, null, function* () {
      if (this.credito && this.datoPersonal) {
        this.credito.aval_id = this.datoPersonal.id;
        this.creditoController.update(this.credito.id, this.credito);
      }
    });
  }
};
_FormAvalCreditoComponent.\u0275fac = function FormAvalCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormAvalCreditoComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(DatoPersonalService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_FormAvalCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormAvalCreditoComponent, selectors: [["app-form-aval-credito"]], decls: 8, vars: 8, consts: [[1, "container", "main"], [1, "row", "justify-content-evenly", "sticky-top", "z-5", "bg-white"], [1, "col-12", "col-sm", "p-3"], ["label", "\xBFEl aval existe en el sistema?", "placeholder", "Ingrese un Curp", "apiUrl", "api/datos_personales", "key", "id", "keyDetalle", "curp", "nuevoRedirect", "/catalogos/datos-personales/nuevo", 3, "valueChange", "keyListDetalle", "relations", "value", "disabled"], [1, "container", "p-3"], [1, "row", "sticky-bottom", "z-2"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["title", "Datos Personales del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "keys"], ["title", "Direcci\xF3n del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "keys"], ["title", "Tel\xE9fonos del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "ignoreKeys"], ["title", "Creditos Como Aval", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Creditos como Representante Legal", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Creditos como Persona Fisica", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"]], template: function FormAvalCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "app-autocomplete-field", 3);
    \u0275\u0275listener("valueChange", function FormAvalCreditoComponent_Template_app_autocomplete_field_valueChange_3_listener($event) {
      return ctx.setDatosPersonales($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(4, FormAvalCreditoComponent_Conditional_4_Template, 7, 17, "div", 4);
    \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
    \u0275\u0275listener("click", function FormAvalCreditoComponent_Template_button_click_6_listener() {
      return ctx.updateCredito();
    });
    \u0275\u0275text(7, " Guardar Aval Seleccionado ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("keyListDetalle", \u0275\u0275pureFunction0(6, _c02))("relations", \u0275\u0275pureFunction0(7, _c12))("value", ctx.datoPersonal == null ? null : ctx.datoPersonal.id)("disabled", ctx.isFormalizado);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito && ctx.datoPersonal ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.datoPersonal || ctx.isFormalizado);
  }
}, dependencies: [
  AutocompleteFieldComponent,
  DataViewSectionComponent,
  TablaLocalComponent
], styles: ["\n\n.main[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n/*# sourceMappingURL=form-aval-credito.component.css.map */"] });
var FormAvalCreditoComponent = _FormAvalCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormAvalCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-form-aval-credito", imports: [
      AutocompleteFieldComponent,
      DataViewSectionComponent,
      TablaLocalComponent
    ], template: `<div class="container main">
  <div class="row justify-content-evenly sticky-top z-5 bg-white">
    <div class="col-12 col-sm p-3">
      <app-autocomplete-field
        label="\xBFEl aval existe en el sistema?"
        placeholder="Ingrese un Curp"
        apiUrl="api/datos_personales"
        [keyListDetalle]="['nombre','apellido_paterno', 'apellido_materno']"
        key="id"
        keyDetalle="curp"
        [relations]='["datosPersonasMorales","creditos","datosPersonasFisicas",]'
        (valueChange)="setDatosPersonales($event)"
        [value]="datoPersonal?.id"
        nuevoRedirect="/catalogos/datos-personales/nuevo"
        [disabled]="isFormalizado"
        />
    </div>
  </div>
  @if (credito && datoPersonal) {
    <div class="container p-3">
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
    </div>
  }
  <div class="row sticky-bottom z-2">
    <button class="btn btn-secondary" [disabled]="!datoPersonal || isFormalizado" (click)="updateCredito()">
      Guardar Aval Seleccionado
    </button>
  </div>
</div>`, styles: ["/* src/app/main/creditos/credito-form/form-aval-credito/form-aval-credito.component.css */\n.main {\n  min-height: 20rem;\n}\n/*# sourceMappingURL=form-aval-credito.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }, { type: CreditoService }, { type: DatoPersonalService }, { type: ActivatedRoute }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormAvalCreditoComponent, { className: "FormAvalCreditoComponent", filePath: "src/app/main/creditos/credito-form/form-aval-credito/form-aval-credito.component.ts", lineNumber: 24 });
})();

// src/app/main/creditos/credito-form/documentos-credito/documentos-credito.component.ts
var _c03 = (a0) => ({ id: a0 });
function DocumentosCreditoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 4);
    \u0275\u0275listener("click", function DocumentosCreditoComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solicitudPf.generarSolicitudPF(ctx_r1.credito));
    });
    \u0275\u0275elementStart(2, "i", 5);
    \u0275\u0275text(3, "Solicitud Impresa");
    \u0275\u0275elementEnd()()();
  }
}
function DocumentosCreditoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 4);
    \u0275\u0275listener("click", function DocumentosCreditoComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solicitudPm.generarSolicitudPMfromCreditoID(ctx_r1.credito));
    });
    \u0275\u0275elementStart(2, "i", 5);
    \u0275\u0275text(3, "Solicitud Impresa");
    \u0275\u0275elementEnd()()();
  }
}
function DocumentosCreditoComponent_For_25_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small")(1, "i", 12);
    \u0275\u0275text(2, "SUBIDO");
    \u0275\u0275elementEnd()();
  }
}
function DocumentosCreditoComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275conditionalCreate(3, DocumentosCreditoComponent_For_25_Conditional_3_Template, 3, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10)(7, "app-file-input", 11);
    \u0275\u0275twoWayListener("urlChange", function DocumentosCreditoComponent_For_25_Template_app_file_input_urlChange_7_listener($event) {
      const documento_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(documento_r5.url, $event) || (documento_r5.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const documento_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", documento_r5.productos_financieros_documentos == null ? null : documento_r5.productos_financieros_documentos.documento == null ? null : documento_r5.productos_financieros_documentos.documento.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(documento_r5.url ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", documento_r5.productos_financieros_documentos == null ? null : documento_r5.productos_financieros_documentos.prioridad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("url", documento_r5.url);
    \u0275\u0275property("showSimpleDownload", true)("formExtra", \u0275\u0275pureFunction1(8, _c03, documento_r5 == null ? null : documento_r5.id))("showButton", false)("disabled", ctx_r1.isFormalizado);
  }
}
var _DocumentosCreditoComponent = class _DocumentosCreditoComponent {
  constructor(creditoController, route, utils, formatoTransferencia, cartaProtestaSoltero, contratoPrivacidad, solicitudPf, solicitudPm, creditoDocumentoController) {
    this.creditoController = creditoController;
    this.route = route;
    this.utils = utils;
    this.formatoTransferencia = formatoTransferencia;
    this.cartaProtestaSoltero = cartaProtestaSoltero;
    this.contratoPrivacidad = contratoPrivacidad;
    this.solicitudPf = solicitudPf;
    this.solicitudPm = solicitudPm;
    this.creditoDocumentoController = creditoDocumentoController;
    this.isFormalizado = false;
  }
  ngOnInit() {
    this.route.parent?.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        yield this.setCredito(id);
        console.log(this.credito);
        this.revisarDocumentosNuevos();
      }
      this.isFormalizado = this.credito?.formalizado_fecha !== null;
    }));
  }
  setCredito(id) {
    return __async(this, null, function* () {
      this.credito = yield this.creditoController.find(id, [
        "productosFinancieros.documentos.documento",
        "documentos.productosFinancierosDocumentos.documento",
        "datosPersonaFisica",
        "datosPersonasMorales"
      ]);
    });
  }
  revisarDocumentosNuevos() {
    return __async(this, null, function* () {
      if (!this.credito)
        return;
      const documentosNuevos = this.documentosNuevos();
      if (documentosNuevos.length) {
        console.info("CREANDO DOCUMENTOS NUEVOS");
        const nuevosDocumentosRequeridos = [];
        documentosNuevos.forEach((dpf) => {
          nuevosDocumentosRequeridos.push({
            productos_financieros_documento_id: dpf.id,
            credito_id: this.credito.id,
            usuario_id: 0,
            id: 0,
            created_at: ""
          });
        });
        yield this.creditoDocumentoController.multipleNews(nuevosDocumentosRequeridos);
        this.setCredito(this.credito.id);
      }
      console.info("NO HAY DOCUMENTOS NUEVOS PARA CREAR");
    });
  }
  documentosNuevos() {
    const documentosProductoFinanciero = this.credito?.productos_financieros?.documentos ?? [];
    const documentosCredito = this.credito?.documentos ?? [];
    const nuevosDocumentos = documentosProductoFinanciero.filter((docPF) => {
      return !documentosCredito.some((docC) => docC.productos_financieros_documento_id === docPF.id);
    });
    return nuevosDocumentos;
  }
};
_DocumentosCreditoComponent.\u0275fac = function DocumentosCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentosCreditoComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(formatoTransparencia), \u0275\u0275directiveInject(cartaProtesta), \u0275\u0275directiveInject(avisoPrivacidad), \u0275\u0275directiveInject(solicitudPersonaFisica), \u0275\u0275directiveInject(solicitudPersonaMoral), \u0275\u0275directiveInject(CreditoProductoFinancieroDocumentoService));
};
_DocumentosCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentosCreditoComponent, selectors: [["app-documentos-credito"]], decls: 26, vars: 2, consts: [[1, "container"], [1, "p-3"], [1, "row", "justify-content-center", "my-2"], [1, "col-12", "col-sm-auto", "p-2"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-filetype-pdf"], [1, "container", "mt-4"], [1, "row", "my-2"], [1, "col-12", "col-sm"], [1, "col-12", "col-sm-auto", "fw-bold"], [1, "col-12"], ["accept", ".pdf", "apiUrl", "api/files/documents/save", "key", "document", 3, "urlChange", "url", "showSimpleDownload", "formExtra", "showButton", "disabled"], [1, "bi", "bi-check-circle-fill", "fw-bolder", "mx-2", "text-success"]], template: function DocumentosCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 0)(2, "h4", 1)(3, "b");
    \u0275\u0275text(4, "Documentos Variados:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275conditionalCreate(6, DocumentosCreditoComponent_Conditional_6_Template, 4, 0, "div", 3);
    \u0275\u0275conditionalCreate(7, DocumentosCreditoComponent_Conditional_7_Template, 4, 0, "div", 3);
    \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
    \u0275\u0275listener("click", function DocumentosCreditoComponent_Template_button_click_9_listener() {
      return ctx.formatoTransferencia.generarFormatoTransparencia(ctx.credito);
    });
    \u0275\u0275elementStart(10, "i", 5);
    \u0275\u0275text(11, "Formato de Transferencia");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 3)(13, "button", 4);
    \u0275\u0275listener("click", function DocumentosCreditoComponent_Template_button_click_13_listener() {
      return ctx.contratoPrivacidad.generarAvisoPrivacidad(ctx.credito);
    });
    \u0275\u0275elementStart(14, "i", 5);
    \u0275\u0275text(15, "Aviso de Privacidad");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 3)(17, "button", 4);
    \u0275\u0275listener("click", function DocumentosCreditoComponent_Template_button_click_17_listener() {
      return ctx.cartaProtestaSoltero.generarCartaProtesta(ctx.credito);
    });
    \u0275\u0275elementStart(18, "i", 5);
    \u0275\u0275text(19, "Carta Bajo Protesta Solter\xEDa");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(20, "div", 6)(21, "h4", 1)(22, "b");
    \u0275\u0275text(23, "Documentos Por Subir:");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(24, DocumentosCreditoComponent_For_25_Template, 8, 10, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional((ctx.credito == null ? null : ctx.credito.datos_persona_fisica) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.credito == null ? null : ctx.credito.datos_personas_morales) ? 7 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx.credito == null ? null : ctx.credito.documentos);
  }
}, dependencies: [FileInputComponent], encapsulation: 2 });
var DocumentosCreditoComponent = _DocumentosCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentosCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-documentos-credito", imports: [
      FileInputComponent
    ], template: '<div class="container">\n  <div class="container">\n    <h4 class="p-3"><b>Documentos Variados:</b></h4>\n    <div class="row justify-content-center my-2">\n      @if (credito?.datos_persona_fisica) {\n        <div class="col-12 col-sm-auto p-2">\n          <button class=" btn btn-danger" (click)="solicitudPf.generarSolicitudPF(credito)"><i class="bi bi-filetype-pdf">Solicitud Impresa</i></button>\n        </div>\n      }\n      @if (credito?.datos_personas_morales) {\n        <div class="col-12 col-sm-auto p-2">\n          <button class=" btn btn-danger" (click)="solicitudPm.generarSolicitudPMfromCreditoID(credito)"><i class="bi bi-filetype-pdf">Solicitud Impresa</i></button>\n        </div>\n      }\n      <div class="col-12 col-sm-auto p-2">\n        <button class=" btn btn-danger" (click)="formatoTransferencia.generarFormatoTransparencia(credito)"><i class="bi bi-filetype-pdf">Formato de Transferencia</i></button>\n      </div>\n      <div class="col-12 col-sm-auto p-2">\n        <button class=" btn btn-danger" (click)="contratoPrivacidad.generarAvisoPrivacidad(credito)"><i class="bi bi-filetype-pdf">Aviso de Privacidad</i></button>\n      </div>\n      <div class="col-12 col-sm-auto p-2">\n        <button class=" btn btn-danger" (click)="cartaProtestaSoltero.generarCartaProtesta(credito)"><i class="bi bi-filetype-pdf">Carta Bajo Protesta Solter\xEDa</i></button>\n      </div>\n    </div>\n  </div>\n  <div class="container mt-4">\n    <h4 class="p-3"><b>Documentos Por Subir:</b></h4>\n    @for (documento of credito?.documentos; track documento) {\n      <div class="row my-2">\n        <div class="col-12 col-sm">\n          {{documento.productos_financieros_documentos?.documento?.nombre}}\n          @if (documento.url) {\n            <small><i class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SUBIDO</i></small>\n          }\n        </div>\n        <div class="col-12 col-sm-auto fw-bold">\n          {{documento.productos_financieros_documentos?.prioridad}}\n        </div>\n        <div class="col-12">\n          <app-file-input\n            accept=".pdf"\n            apiUrl="api/files/documents/save"\n            key="document"\n            [(url)]="documento.url"\n            [showSimpleDownload]="true"\n            [formExtra]="{id:documento?.id}"\n            [showButton]="false"\n            [disabled]="isFormalizado"\n            />\n        </div>\n      </div>\n    }\n  </div>\n</div>' }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }, { type: UtilsService }, { type: formatoTransparencia }, { type: cartaProtesta }, { type: avisoPrivacidad }, { type: solicitudPersonaFisica }, { type: solicitudPersonaMoral }, { type: CreditoProductoFinancieroDocumentoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentosCreditoComponent, { className: "DocumentosCreditoComponent", filePath: "src/app/main/creditos/credito-form/documentos-credito/documentos-credito.component.ts", lineNumber: 25 });
})();

// src/app/controllers/credito.analisis.mercado.service.ts
var _CreditoAnalisisMercadoService = class _CreditoAnalisisMercadoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_analisis_mercados";
    this.columns = [
      "credito_id",
      "usuario_id",
      "porc_cobertura_mercado_local",
      "porc_cobertura_mercado_regional",
      "porc_cobertura_mercado_nacional",
      "porc_cobertura_mercado_estatal",
      "porc_cobertura_mercado_exportacion",
      "tipo_consumo",
      "mercado_entorno"
    ];
  }
};
_CreditoAnalisisMercadoService.\u0275fac = function CreditoAnalisisMercadoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoAnalisisMercadoService)(\u0275\u0275inject(Injector));
};
_CreditoAnalisisMercadoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoAnalisisMercadoService, factory: _CreditoAnalisisMercadoService.\u0275fac, providedIn: "any" });
var CreditoAnalisisMercadoService = _CreditoAnalisisMercadoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoAnalisisMercadoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/creditos/credito-form/form-analisis-mercado/form-analisis-mercado.component.ts
var _c04 = (a0) => ({ credito_id: a0 });
var FORM_DEF3 = [
  {
    key: "porc_cobertura_mercado_local",
    label: "% Cobertura Mercado Local",
    type: "number",
    defaultValue: 0,
    style: {
      div: "col-12 col-sm-6 p-3"
    },
    validator: {
      min: 0,
      max: 100
    }
  },
  {
    key: "porc_cobertura_mercado_regional",
    label: "% Cobertura Mercado Regional",
    defaultValue: 0,
    type: "number",
    style: {
      div: "col-12 col-sm-6 p-3"
    },
    validator: {
      min: 0,
      max: 100
    }
  },
  {
    key: "porc_cobertura_mercado_nacional",
    label: "% Cobertura Mercado Nacional",
    defaultValue: 0,
    style: {
      div: "col-12 col-sm-6 p-3"
    },
    type: "number",
    validator: {
      min: 0,
      max: 100
    }
  },
  {
    key: "porc_cobertura_mercado_exportacion",
    label: "% Cobertura Mercado Exportacion",
    defaultValue: 0,
    style: {
      div: "col-12 col-sm-6 p-3"
    },
    type: "number",
    validator: {
      min: 0,
      max: 100
    }
  },
  {
    key: "porc_cobertura_mercado_estatal",
    label: "% Cobertura Mercado Estatal",
    defaultValue: 0,
    style: {
      div: "col-12 p-3"
    },
    type: "number",
    validator: {
      min: 0,
      max: 100
    }
  },
  {
    key: "tipo_consumo",
    label: "Tipo Consumo",
    style: {
      div: "col-12 col-sm-6 p-3"
    },
    defaultOption: "NO DEFINIDO",
    options: ["BASICO", "COMPLEMENTARIO", "LUJO", "OTRO", "NO DEFINIDO"]
  },
  {
    key: "mercado_entorno",
    label: "Entorno Mercado",
    style: {
      div: "col-12 col-sm-6 p-3"
    },
    defaultOption: "NO DEFINIDO",
    options: ["FAVORABLE", "DESFAVORABLE", "VARIABLE", "OTRO", "NO DEFINIDO"]
  }
];
var _FormAnalisisMercadoComponent = class _FormAnalisisMercadoComponent {
  constructor(creditoController, analisisMercadoController, utils, route, creditoFormUtils) {
    this.creditoController = creditoController;
    this.analisisMercadoController = analisisMercadoController;
    this.utils = utils;
    this.route = route;
    this.creditoFormUtils = creditoFormUtils;
    this.form = FORM_DEF3;
  }
  ngOnInit() {
    this.route.parent?.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id, ["creditosAnalisisMercados"]);
        this.analisis = this.credito?.creditos_analisis_mercados;
      }
    }));
  }
};
_FormAnalisisMercadoComponent.\u0275fac = function FormAnalisisMercadoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormAnalisisMercadoComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(CreditoAnalisisMercadoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoFormUtilsService));
};
_FormAnalisisMercadoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormAnalisisMercadoComponent, selectors: [["app-form-analisis-mercado"]], decls: 2, vars: 7, consts: [[1, "container"], [3, "editChange", "controller", "form", "formExtra", "edit", "disabled"]], template: function FormAnalisisMercadoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-generic-form", 1);
    \u0275\u0275twoWayListener("editChange", function FormAnalisisMercadoComponent_Template_app_generic_form_editChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.analisis, $event) || (ctx.analisis = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.analisisMercadoController)("form", ctx.form)("formExtra", \u0275\u0275pureFunction1(5, _c04, ctx.credito == null ? null : ctx.credito.id));
    \u0275\u0275twoWayProperty("edit", ctx.analisis);
    \u0275\u0275property("disabled", ctx.creditoFormUtils.isFormDisabled(ctx.credito));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormAnalisisMercadoComponent = _FormAnalisisMercadoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormAnalisisMercadoComponent, [{
    type: Component,
    args: [{ selector: "app-form-analisis-mercado", imports: [
      GenericFormComponent
    ], template: '<div class="container">\n    <app-generic-form \n    [controller]="analisisMercadoController"\n    [form]="form"\n    [formExtra]="{credito_id:credito?.id}"\n    [(edit)]="analisis"\n    [disabled]="creditoFormUtils.isFormDisabled(credito)"\n    />\n</div>' }]
  }], () => [{ type: CreditoService }, { type: CreditoAnalisisMercadoService }, { type: UtilsService }, { type: ActivatedRoute }, { type: CreditoFormUtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormAnalisisMercadoComponent, { className: "FormAnalisisMercadoComponent", filePath: "src/app/main/creditos/credito-form/form-analisis-mercado/form-analisis-mercado.component.ts", lineNumber: 105 });
})();

// src/app/main/creditos/credito-form/form-datos-fiscales/form-datos-fiscales.component.ts
function FormDatosFiscalesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2, " No haz ingresado los datos del negocio, llena primero los datos del negocio y despues llena los datos fiscales ");
    \u0275\u0275elementEnd()();
  }
}
var REGIMEN_FISCAL_OPTIONS = [
  { "value": "601", "label": "601-General de Ley Personas Morales" },
  { "value": "603", "label": "603-Personas Morales con Fines no Lucrativos" },
  { "value": "605", "label": "605-Sueldos y Salarios e Ingresos Asimilados a Salarios" },
  { "value": "606", "label": "606-Arrendamiento" },
  { "value": "608", "label": "608-Dem\xE1s ingresos" },
  { "value": "609", "label": "609-Consolidaci\xF3n" },
  { "value": "610", "label": "610-Residentes en el Extranjero sin Establecimiento Permanente en M\xE9xico" },
  { "value": "611", "label": "611-Ingresos por Dividendos (socios y accionistas)" },
  { "value": "612", "label": "612-Personas F\xEDsicas con Actividades Empresariales y Profesionales" },
  { "value": "614", "label": "614-Ingresos por intereses" },
  { "value": "616", "label": "616-Sin obligaciones fiscales" },
  { "value": "620", "label": "620-Sociedades Cooperativas de Producci\xF3n que optan por diferir sus ingresos" },
  { "value": "621", "label": "621-Incorporaci\xF3n Fiscal" },
  { "value": "622", "label": "622-Actividades Agr\xEDcolas, Ganaderas, Silv\xEDcolas y Pesqueras" },
  { "value": "623", "label": "623-Opcional para Grupos de Sociedades" },
  { "value": "624", "label": "624-Coordinados" },
  { "value": "628", "label": "628-Hidrocarburos" },
  { "value": "607", "label": "607-R\xE9gimen de Enajenaci\xF3n o Adquisici\xF3n de Bienes" },
  { "value": "629", "label": "629-De los Reg\xEDmenes Fiscales Preferentes y de las Empresas Multinacionales" },
  { "value": "630", "label": "630-Enajenaci\xF3n de acciones en bolsa de valores" },
  { "value": "615", "label": "615-R\xE9gimen de los ingresos por obtenci\xF3n de premios" },
  { "value": "625", "label": "625-R\xE9gimen de las Actividades Empresariales con ingresos a trav\xE9s de Plataformas Tecnol\xF3gicas" },
  { "value": "626", "label": "626-R\xE9gimen Simplificado de Confianza" }
];
var FORM_DEF4 = [
  {
    title: "Datos Fiscales",
    fields: [
      { key: "rfc", label: "RFC:", type: "text", validator: { required: true } },
      {
        key: "regimen_fiscal_sat",
        label: "R\xE9gimen Fiscal:",
        defaultOption: 0,
        options: REGIMEN_FISCAL_OPTIONS,
        validator: { required: true }
      },
      { key: "codigo_postal", label: "C\xF3digo Postal:", type: "number", validator: { required: true } },
      { key: "primer_nombre", label: "Nombre/Raz\xF3n Social:", type: "text", validator: { required: true } },
      { key: "primer_apellido", label: "Apellido Paterno:", type: "text", validator: { required: false } },
      { key: "segundo_apellido", label: "Apellido Materno:", type: "text", validator: { required: false } },
      { key: "calle", label: "Calle", type: "text", defaultValue: "", validator: { required: false } },
      { key: "colonia", label: "Colonia", type: "text", defaultValue: "", validator: { required: false } },
      { key: "municipio", label: "Municipio", type: "text", defaultValue: "", validator: { required: false } },
      { key: "estado", label: "Estado", type: "text", defaultValue: "BAJA CALIFORNIA", validator: { required: false } }
    ]
  }
];
var _FormDatosFiscalesComponent = class _FormDatosFiscalesComponent {
  constructor(creditoController, route, utils, controller, creditoFormUtils, cdr) {
    this.creditoController = creditoController;
    this.route = route;
    this.utils = utils;
    this.controller = controller;
    this.creditoFormUtils = creditoFormUtils;
    this.cdr = cdr;
    this.form = FORM_DEF4;
    this.route.parent?.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id, [
          "datosPersonaFisica",
          "datosPersonaFisica.datosPersonales",
          "datosPersonaFisica.datosPersonales.datosFiscales",
          "datosPersonasMorales",
          "datosPersonasMorales.datosFiscales"
        ]);
        if (this.credito) {
          this.datosPersonales = this.utils.getDatosGeneralesFromCredito(this.credito);
          console.log(this.datosPersonales);
          if (this.datosPersonales) {
            if (this.datosPersonales.datos_fiscales) {
              this.datosFiscales = __spreadValues({}, this.datosPersonales.datos_fiscales);
            } else {
              const df = {
                rfc: this.datosPersonales.rfc,
                primer_nombre: this.datosPersonales.nombre !== void 0 ? this.datosPersonales.nombre : this.datosPersonales.razon_social,
                primer_apellido: this.datosPersonales.apellido_paterno ? this.datosPersonales.apellido_paterno : "",
                segundo_apellido: this.datosPersonales.apellido_materno ? this.datosPersonales.apellido_materno : "",
                codigo_postal: this.datosPersonales.codigo_postal || "",
                calle: "",
                colonia: "",
                municipio: this.datosPersonales.localidad || ""
              };
              this.datosFiscales = __spreadValues(__spreadValues({}, this.datosPersonales.datos_fiscales), df);
            }
          }
        }
      }
    }));
  }
};
_FormDatosFiscalesComponent.\u0275fac = function FormDatosFiscalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDatosFiscalesComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(DatosFiscalesService), \u0275\u0275directiveInject(CreditoFormUtilsService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_FormDatosFiscalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDatosFiscalesComponent, selectors: [["app-form-datos-fiscales"]], decls: 3, vars: 6, consts: [[1, "container", "p-3"], ["rowButtonClass", "row py-3 bg-white sticky-bottom z-2", 3, "editChange", "controller", "form", "isolatedForm", "edit", "disabled"], [1, "container"], ["role", "alert", 1, "alert", "alert-warning"]], template: function FormDatosFiscalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-generic-form", 1);
    \u0275\u0275twoWayListener("editChange", function FormDatosFiscalesComponent_Template_app_generic_form_editChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.datosFiscales, $event) || (ctx.datosFiscales = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(2, FormDatosFiscalesComponent_Conditional_2_Template, 3, 0, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.controller)("form", ctx.form)("isolatedForm", true);
    \u0275\u0275twoWayProperty("edit", ctx.datosFiscales);
    \u0275\u0275property("disabled", ctx.creditoFormUtils.isFormDisabled(ctx.credito));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.datosPersonales ? 2 : -1);
  }
}, dependencies: [
  FormsModule,
  GenericFormComponent
], encapsulation: 2 });
var FormDatosFiscalesComponent = _FormDatosFiscalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDatosFiscalesComponent, [{
    type: Component,
    args: [{ selector: "app-form-datos-fiscales", imports: [
      FormsModule,
      GenericFormComponent
    ], template: '<div class="container p-3">\n  <!-- <h5 class="fw-bold">Datos Fiscales</h5> -->\n  <!-- <hr class="my-1 border border-primary"> -->\n  <app-generic-form\n    [controller]="controller"\n    [form]="form"\n    [isolatedForm]="true"\n    [(edit)]="datosFiscales"\n    rowButtonClass="row py-3 bg-white sticky-bottom z-2"\n    [disabled]="creditoFormUtils.isFormDisabled(credito)"\n    >\n  </app-generic-form>\n</div>\n@if (!datosPersonales) {\n  <div class="container">\n    <div class="alert alert-warning" role="alert">\n      No haz ingresado los datos del negocio, llena primero los datos del negocio y despues llena los datos fiscales\n    </div>\n  </div>\n}\n' }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }, { type: UtilsService }, { type: DatosFiscalesService }, { type: CreditoFormUtilsService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDatosFiscalesComponent, { className: "FormDatosFiscalesComponent", filePath: "src/app/main/creditos/credito-form/form-datos-fiscales/form-datos-fiscales.component.ts", lineNumber: 73 });
})();

// src/app/main/creditos/credito-form/credito-persona-fisica/credito.persona.fisica.routes.ts
var creditoPFRoutes = [
  { path: "", redirectTo: "negocio", pathMatch: "full" },
  { path: "aval", component: FormAvalCreditoComponent },
  { path: "negocio", component: FormPfNegocioComponent },
  { path: "referencias", component: FormReferenciasCreditoComponent },
  { path: "programa-inversion", component: FormProgramaInversionComponent },
  { path: "datos-personales", component: FormPfDatosPersonalesComponent },
  { path: "documentos", component: DocumentosCreditoComponent },
  { path: "datos-bancarios", component: FormDatosBancariosComponent },
  { path: "analisis-mercado", component: FormAnalisisMercadoComponent },
  { path: "datos-fiscales", component: FormDatosFiscalesComponent }
];

// src/app/main/creditos/credito-form/credito-persona-moral/form-pm-negocio/form-pm-negocio.component.ts
var _c05 = (a0) => ({ credito_id: a0 });
var FORM_DEF5 = [
  {
    title: "Datos Generales",
    fields: [
      {
        key: "tipo_empresa",
        label: "Tipo de Empresa",
        options: ["INDUSTRIA", "AGROINDUSTRIA", "COMERCIO", "SERVICIOS", "NO DEFINIDO"]
      },
      {
        key: "nombre_comercial",
        label: "Nombre Comercial",
        type: "text"
      },
      {
        key: "razon_social",
        label: "Razon Social",
        type: "text"
      },
      {
        key: "rfc",
        label: "RFC",
        type: "text",
        validator: {
          maxLength: 13,
          pattern: "^[A-Za-z]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[A-Za-z0-9]{2}([A-Za-z0-9])?$"
        }
      },
      {
        key: "email",
        label: "Correo Electronico",
        type: "email"
      },
      {
        key: "calle",
        label: "Calle",
        type: "text"
      },
      {
        key: "no_exterior",
        label: "No. exterior",
        type: "text"
      },
      {
        key: "no_interior",
        label: "No. Interior",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "localidad",
        label: "Localidad",
        type: "text"
      },
      {
        key: "ciudad_id",
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
        key: "codigo_postal",
        label: "Codigo Postal",
        type: "text",
        validator: {
          maxLength: 10
        }
      },
      {
        key: "colonia",
        label: "Colonia",
        type: "text"
      },
      {
        key: "referencia_domicilio",
        type: "text",
        label: "Referencias Domicilio",
        validator: {
          required: false
        },
        style: {
          div: "col-12 col-sm p-3"
        }
      },
      {
        key: "resumen_actividad_empresarial",
        type: "text",
        label: "Resumen descriptivo de la actividad empresarial",
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
    title: "Domicilio en el Mapa",
    key: "mapField",
    latitud: {
      key: "latitud"
    },
    longitud: {
      key: "longitud"
    }
  },
  {
    title: "Datos de Empleos",
    fields: [
      {
        key: "empleos_informales_mujeres",
        label: "Empleos Informales Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_informales_hombres",
        label: "Empleos Informales Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_informales_no_binarios",
        label: "Empleos Informales No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_mujeres",
        label: "Empleos IMSS Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_hombres",
        label: "Empleos IMSS Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_no_binarios",
        label: "Empleos IMSS No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_mujeres",
        label: "Empleos a generar Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_hombres",
        label: "Empleos a generar Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_no_binarios",
        label: "Empleos a generar No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      }
    ]
  },
  {
    title: "Datos Otros",
    fields: [
      {
        key: "fecha_inicio_operaciones",
        label: "Fecha Inicio Operaciones",
        type: "date",
        style: {
          div: "col-12 col-sm-6 p-3"
        }
      },
      {
        key: "fuente_informacion",
        label: "\xBFD\xF3nde te enteraste del Cr\xE9dito?",
        options: ["JORNADA", "OFICINA", "PROSPECCION", "REDES SOCIALES", "CAMARAS"],
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: true
        }
      },
      {
        key: "detalle_camara",
        label: "Siglas Camara",
        type: "text",
        style: {
          div: "col-12 col-sm-6 p-3"
        },
        validator: { required: false }
      }
    ]
  },
  {
    title: "Actividades Economicas",
    apiUrl: "api/personas_morales_act_economicas",
    relationKey: "personas_morales_actividades_economicas",
    foreign_key: "datos_personas_moral_id",
    baseFields: [
      {
        key: "actividades_economica_id",
        apiUrl: "api/actividades_economicas",
        keyList: "id",
        keyDetalle: "subgrupo",
        label: "Actividad"
      }
    ]
  },
  {
    title: "Accionistas",
    apiUrl: "api/accionistas",
    relationKey: "accionistas",
    foreign_key: "datos_personas_moral_id",
    baseFields: [
      {
        key: "nombre",
        label: "Nombre",
        type: "text",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg-3 p-1"
        },
        validator: {
          required: true,
          minLength: 1,
          maxLength: 500
        }
      },
      {
        key: "porcentaje_acciones",
        label: "Porcentaje de Acciones",
        type: "number",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg-3 p-1"
        },
        validator: {
          required: true,
          min: 0,
          max: 100
        }
      },
      {
        key: "rfc",
        label: "RFC",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg-3 p-1"
        },
        type: "text",
        validator: {
          required: true,
          minLength: 1,
          maxLength: 13,
          pattern: "^[A-Za-z]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[A-Za-z0-9]{2}([A-Za-z0-9])?$"
        }
      },
      {
        key: "curp",
        label: "CURP",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg-3 p-1"
        },
        type: "text",
        validator: {
          regex: "^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9][0-9]$",
          required: true,
          maxLength: 18
        }
      },
      {
        key: "direccion",
        label: "Direcci\xF3n",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-1"
        },
        type: "text",
        validator: {
          required: true,
          minLength: 1,
          maxLength: 400
        }
      },
      {
        key: "telefono",
        label: "Tel\xE9fono",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-1"
        },
        type: "text",
        validator: {
          required: true,
          minLength: 1,
          maxLength: 30
        }
      },
      {
        key: "email",
        label: "Correo Electr\xF3nico",
        style: {
          div: "col-12 col-sm p-1"
        },
        type: "email",
        validator: {
          required: false,
          email: true
        }
      }
    ]
  },
  {
    title: "Numeros Telefonicos",
    apiUrl: "api/telefonos_personas_morales",
    relationKey: "telefonos",
    foreign_key: "datos_personas_moral_id",
    baseFields: [
      {
        key: "tipo",
        label: "Tipo",
        options: ["CASA", "OFICINA", "CELULAR", "OTRO"]
      },
      {
        key: "numero",
        label: "N\xFAmero",
        type: "text"
      }
    ]
  }
];
var FORM_CONDITIONALS2 = [
  {
    key: "local_tipo",
    operator: "==",
    value: "PROPIO",
    target: "local_renta_mensual",
    targetAction: "disabled"
  },
  {
    key: "local_tipo",
    operator: "==",
    value: "PROPIO",
    target: "local_contrato_inicio",
    targetAction: "disabled"
  },
  {
    key: "local_tipo",
    operator: "==",
    value: "PROPIO",
    target: "local_contrato_fin",
    targetAction: "disabled"
  },
  {
    key: "fuente_informacion",
    operator: "!=",
    value: "CAMARAS",
    target: "detalle_camara",
    targetAction: "hide"
  }
];
var _FormPmNegocioComponent = class _FormPmNegocioComponent {
  constructor(utils, route, datoPersonaMoralController, creditoFormUtils, cdr) {
    this.utils = utils;
    this.route = route;
    this.datoPersonaMoralController = datoPersonaMoralController;
    this.creditoFormUtils = creditoFormUtils;
    this.cdr = cdr;
    this.form = FORM_DEF5;
    this.formConditionals = FORM_CONDITIONALS2;
    this.showVerificar = false;
    this.formValidator = {
      required: true
    };
  }
  ngOnInit() {
    console.log(this.form);
    this.route.parent?.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito_id = id;
        this.datoPersonaMoral = yield this.datoPersonaMoralController.first({
          credito_id: id
        }, [
          "creditos",
          "accionistas",
          "diasLaborales",
          "telefonos",
          "PersonasMoralesActividadesEconomicas"
        ]);
        this.credito = this.datoPersonaMoral?.creditos;
      }
    }));
  }
};
_FormPmNegocioComponent.\u0275fac = function FormPmNegocioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormPmNegocioComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DatoPersonaMoralService), \u0275\u0275directiveInject(CreditoFormUtilsService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_FormPmNegocioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormPmNegocioComponent, selectors: [["app-form-pm-negocio"]], decls: 1, vars: 9, consts: [["rowButtonClass", "row py-3 bg-white sticky-bottom z-2", 3, "editChange", "controller", "form", "conditionals", "edit", "formExtra", "validator", "disabled"]], template: function FormPmNegocioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-generic-form", 0);
    \u0275\u0275twoWayListener("editChange", function FormPmNegocioComponent_Template_app_generic_form_editChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.datoPersonaMoral, $event) || (ctx.datoPersonaMoral = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.datoPersonaMoralController)("form", ctx.form)("conditionals", ctx.formConditionals);
    \u0275\u0275twoWayProperty("edit", ctx.datoPersonaMoral);
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(7, _c05, ctx.credito_id))("validator", ctx.formValidator)("disabled", ctx.creditoFormUtils.isFormDisabled(ctx.credito));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormPmNegocioComponent = _FormPmNegocioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormPmNegocioComponent, [{
    type: Component,
    args: [{ selector: "app-form-pm-negocio", imports: [
      GenericFormComponent
    ], template: '<app-generic-form \n[controller]="datoPersonaMoralController"\n[form]="form" \n[conditionals]="formConditionals"\n[(edit)]="datoPersonaMoral"\n[formExtra]="{credito_id:credito_id}"\n[validator]="formValidator"\n[disabled]="creditoFormUtils.isFormDisabled(credito)"\nrowButtonClass="row py-3 bg-white sticky-bottom z-2" \n/>' }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: DatoPersonaMoralService }, { type: CreditoFormUtilsService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormPmNegocioComponent, { className: "FormPmNegocioComponent", filePath: "src/app/main/creditos/credito-form/credito-persona-moral/form-pm-negocio/form-pm-negocio.component.ts", lineNumber: 426 });
})();

// src/app/controllers/persona.moral.acta.constitutiva.service.ts
var _PersonaMoralActaConstitutivaService = class _PersonaMoralActaConstitutivaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "actas_constitutivas";
    this.columns = [
      "datos_personas_moral_id",
      "usuario_id",
      "fecha_escritura",
      "numero_escritura",
      "volumen_escritura",
      "numero_notario",
      "nombre_notario",
      "ciudad_notario",
      "fecha_inscripcion_rppc",
      "ciudad_rppc",
      "estado_rppc",
      "folio_rppc"
    ];
  }
};
_PersonaMoralActaConstitutivaService.\u0275fac = function PersonaMoralActaConstitutivaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonaMoralActaConstitutivaService)(\u0275\u0275inject(Injector));
};
_PersonaMoralActaConstitutivaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonaMoralActaConstitutivaService, factory: _PersonaMoralActaConstitutivaService.\u0275fac, providedIn: "any" });
var PersonaMoralActaConstitutivaService = _PersonaMoralActaConstitutivaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonaMoralActaConstitutivaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/creditos/credito-form/credito-persona-moral/form-acta-constitutiva/form-acta-constitutiva.component.ts
var _c06 = (a0) => ({ datos_personas_moral_id: a0 });
var FORM_DEF_ACTA = [
  {
    title: "Datos de escritura",
    fields: [
      {
        key: "fecha_escritura",
        label: "Fecha de Escritura",
        type: "date",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-3"
        },
        validator: {
          required: true
        }
      },
      {
        key: "numero_escritura",
        label: "N\xFAmero de Escritura",
        type: "text",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-3"
        },
        validator: {
          required: true
        }
      },
      {
        key: "volumen_escritura",
        label: "Volumen de Escritura",
        style: {
          div: "col-12 col-sm col-lg p-3"
        },
        type: "text",
        validator: {
          required: true
        }
      }
    ]
  },
  {
    title: "Datos de Notario",
    fields: [
      {
        key: "numero_notario",
        label: "N\xFAmero de Notario",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-3"
        },
        type: "text",
        validator: {
          required: true
        }
      },
      {
        key: "nombre_notario",
        label: "Nombre del Notario",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-3"
        },
        type: "text",
        validator: {
          required: true
        }
      },
      {
        key: "ciudad_notario",
        label: "Ciudad del Notario",
        style: {
          div: "col-12 col-sm p-3"
        },
        type: "text",
        validator: {
          required: true
        }
      }
    ]
  },
  {
    title: "Datos RPPC",
    fields: [
      {
        key: "fecha_inscripcion_rppc",
        label: "Inscripci\xF3n RPPC",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-3"
        },
        type: "date",
        validator: {
          required: true
        }
      },
      {
        key: "ciudad_rppc",
        label: "Ciudad del RPPC",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-3"
        },
        type: "text",
        validator: {
          required: true
        }
      },
      {
        key: "estado_rppc",
        label: "Estado del RPPC",
        type: "text",
        style: {
          div: "col-12 col-sm-6 col-md-4 col-lg p-3"
        },
        validator: {
          required: true
        }
      },
      {
        key: "folio_rppc",
        label: "Folio del RPPC",
        style: {
          div: "col-12 col-sm p-3"
        },
        type: "text",
        validator: {
          required: true
        }
      }
    ]
  }
];
var _FormActaConstitutivaComponent = class _FormActaConstitutivaComponent {
  constructor(utils, route, personaMoralActaConstitutivaController, creditoController, creditoFormUtils) {
    this.utils = utils;
    this.route = route;
    this.personaMoralActaConstitutivaController = personaMoralActaConstitutivaController;
    this.creditoController = creditoController;
    this.creditoFormUtils = creditoFormUtils;
    this.form = FORM_DEF_ACTA;
  }
  ngOnInit() {
    this.route.parent?.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const credito_id = this.utils.intOrNull(params.get("credito_id"));
      if (credito_id) {
        this.credito = yield this.creditoController.find(credito_id, ["datosPersonasMorales.actaConstitutiva"]);
        const acta_id = this.credito?.datos_personas_morales?.acta_constitutiva?.id;
        if (acta_id) {
          this.personaMoralActaConstitutiva = yield this.personaMoralActaConstitutivaController.find(acta_id);
        }
      }
    }));
  }
};
_FormActaConstitutivaComponent.\u0275fac = function FormActaConstitutivaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormActaConstitutivaComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PersonaMoralActaConstitutivaService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(CreditoFormUtilsService));
};
_FormActaConstitutivaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormActaConstitutivaComponent, selectors: [["app-form-acta-constitutiva"]], decls: 1, vars: 7, consts: [[3, "editChange", "form", "controller", "edit", "formExtra", "disabled"]], template: function FormActaConstitutivaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-generic-form", 0);
    \u0275\u0275twoWayListener("editChange", function FormActaConstitutivaComponent_Template_app_generic_form_editChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.personaMoralActaConstitutiva, $event) || (ctx.personaMoralActaConstitutiva = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("form", ctx.form)("controller", ctx.personaMoralActaConstitutivaController);
    \u0275\u0275twoWayProperty("edit", ctx.personaMoralActaConstitutiva);
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(5, _c06, ctx.credito == null ? null : ctx.credito.datos_personas_morales == null ? null : ctx.credito.datos_personas_morales.id))("disabled", ctx.creditoFormUtils.isFormDisabled(ctx.credito));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormActaConstitutivaComponent = _FormActaConstitutivaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormActaConstitutivaComponent, [{
    type: Component,
    args: [{ selector: "app-form-acta-constitutiva", imports: [GenericFormComponent], template: '<app-generic-form \n[form]="form"\n[controller]="personaMoralActaConstitutivaController"\n[(edit)]="personaMoralActaConstitutiva"\n[formExtra]="{datos_personas_moral_id: credito?.datos_personas_morales?.id}"\n[disabled]="creditoFormUtils.isFormDisabled(credito)"\n/>' }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: PersonaMoralActaConstitutivaService }, { type: CreditoService }, { type: CreditoFormUtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormActaConstitutivaComponent, { className: "FormActaConstitutivaComponent", filePath: "src/app/main/creditos/credito-form/credito-persona-moral/form-acta-constitutiva/form-acta-constitutiva.component.ts", lineNumber: 145 });
})();

// src/app/main/creditos/credito-form/credito-persona-moral/form-representante-legal/form-representante-legal.component.ts
var _c07 = () => ["nombre", "apellido_paterno", "apellido_materno"];
var _c13 = () => ["datosPersonasMorales", "creditos", "datosPersonasFisicas"];
var _c23 = () => ["id", "nombre", "apellido_paterno", "apellido_materno", "email", "escolaridad", "estado_civil", "estado_nacimiento", "rfc", "curp"];
var _c33 = () => ["calle", "no_exterior", "no_interior", "colonia", "codigo_postal", "localidad", "ciudades", "referencias_domicilio"];
var _c43 = () => ["deleted_at", "datos_personal_id", "usuario_id"];
var _c53 = () => ["cobro_intereses_moratorios", "datos_bacarios_verificados", "referencia_bancaria"];
function FormRepresentanteLegalComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 5)(2, "app-autocomplete-field", 6);
    \u0275\u0275listener("valueChange", function FormRepresentanteLegalComponent_Conditional_0_Conditional_1_Template_app_autocomplete_field_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDatosPersonales($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("keyListDetalle", \u0275\u0275pureFunction0(4, _c07))("relations", \u0275\u0275pureFunction0(5, _c13))("value", ctx_r1.datoPersonal == null ? null : ctx_r1.datoPersonal.id)("disabled", ctx_r1.isFormalizado);
  }
}
function FormRepresentanteLegalComponent_Conditional_0_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c53))("dataSource", ctx_r1.datoPersonal.creditos_pm);
  }
}
function FormRepresentanteLegalComponent_Conditional_0_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tabla-local", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(2, _c53))("dataSource", ctx_r1.datoPersonal.creditos_pf);
  }
}
function FormRepresentanteLegalComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "data-view-section", 7)(2, "data-view-section", 8)(3, "data-view-section", 9)(4, "tabla-local", 10);
    \u0275\u0275conditionalCreate(5, FormRepresentanteLegalComponent_Conditional_0_Conditional_2_Conditional_5_Template, 1, 3, "tabla-local", 11);
    \u0275\u0275conditionalCreate(6, FormRepresentanteLegalComponent_Conditional_0_Conditional_2_Conditional_6_Template, 1, 3, "tabla-local", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r1.datoPersonal.id)("data", ctx_r1.datoPersonal)("keys", \u0275\u0275pureFunction0(13, _c23));
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r1.datoPersonal.id)("data", ctx_r1.datoPersonal)("keys", \u0275\u0275pureFunction0(14, _c33));
    \u0275\u0275advance();
    \u0275\u0275property("editarRoute", "/catalogos/datos-personales/editar/" + ctx_r1.datoPersonal.id)("data", ctx_r1.datoPersonal.telefonos_personales)("ignoreKeys", \u0275\u0275pureFunction0(15, _c43));
    \u0275\u0275advance();
    \u0275\u0275property("ignore", \u0275\u0275pureFunction0(16, _c53))("dataSource", ctx_r1.datoPersonal.creditos);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.datoPersonal.creditos_pm ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.datoPersonal.creditos_pf ? 6 : -1);
  }
}
function FormRepresentanteLegalComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function FormRepresentanteLegalComponent_Conditional_0_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateCredito());
    });
    \u0275\u0275text(1, " Guardar Solicitante Seleccionado ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.datoPersonal || ctx_r1.isFormalizado);
  }
}
function FormRepresentanteLegalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, FormRepresentanteLegalComponent_Conditional_0_Conditional_1_Template, 3, 6, "div", 1);
    \u0275\u0275conditionalCreate(2, FormRepresentanteLegalComponent_Conditional_0_Conditional_2_Template, 7, 17, "div", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275conditionalCreate(4, FormRepresentanteLegalComponent_Conditional_0_Conditional_4_Template, 2, 1, "button", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.userClient && !(ctx_r1.credito == null ? null : ctx_r1.credito.cliente_id) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.datoPersonal ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.userClient && !(ctx_r1.credito == null ? null : ctx_r1.credito.cliente_id) ? 4 : -1);
  }
}
function FormRepresentanteLegalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 14);
    \u0275\u0275text(2, " No haz ingresado los datos del negocio, llena primero los datos del negocio y despues asigna representante legal ");
    \u0275\u0275elementEnd()();
  }
}
var _FormRepresentanteLegalComponent = class _FormRepresentanteLegalComponent {
  constructor(creditoController, utils, datoPersonaMoralController, dpController, route, storage, cdr) {
    this.creditoController = creditoController;
    this.utils = utils;
    this.datoPersonaMoralController = datoPersonaMoralController;
    this.dpController = dpController;
    this.route = route;
    this.storage = storage;
    this.cdr = cdr;
    this.isFormalizado = false;
    this.autoacompleteMapFunction = (row) => {
      return row.apellido_paterno + " " + row.apellido_paterno + " (total creditos: " + row.creditos?.length + ")";
    };
  }
  ngOnInit() {
    this.userClient = this.storage.getClienteUser();
    this.route.parent?.parent?.paramMap.subscribe((param) => __async(this, null, function* () {
      const id = this.utils.intOrNull(param.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id);
        this.datoPersonaMoral = yield this.datoPersonaMoralController.first({
          credito_id: id
        }, [], false);
        if (this.datoPersonaMoral?.representante_legal_id) {
          this.setDatosPersonales(this.datoPersonaMoral.representante_legal_id);
        }
        this.checkAndDisableForm();
      }
    }));
  }
  checkAndDisableForm() {
    if (this.credito?.formalizado_fecha) {
      this.isFormalizado = true;
      this.cdr.detectChanges();
    }
  }
  /**
   * Fetches and sets the personal data (`DatoPersonal`) for a given ID.
   *
   * This function retrieves the personal data from the `DatoPersonalService` based on the provided ID.
   * If the ID is a number, it fetches the associated `DatoPersonal` object, including related credit data.
   * If the ID is not a number (e.g., null or a string), it sets `datoPersonal` to `undefined`.
   *
   * @param {string | number | null} id - The ID of the personal data to fetch. Can be a number, string, or null.
   * @returns {Promise<void>} - A promise that resolves once the data is fetched and set (or cleared).
   */
  setDatosPersonales(id) {
    return __async(this, null, function* () {
      if (typeof id === "number") {
        this.datoPersonal = yield this.dpController.find(id, ["creditos", "creditosPf", "creditosPm", "telefonosPersonales", "ciudades", "estado_nacimiento"], false);
        return;
      }
      this.datoPersonal = void 0;
    });
  }
  updateCredito() {
    return __async(this, null, function* () {
      if (this.datoPersonaMoral && this.datoPersonal) {
        this.datoPersonaMoral.representante_legal_id = this.datoPersonal.id;
        this.datoPersonaMoralController.update(this.datoPersonaMoral.id, this.datoPersonaMoral);
      }
    });
  }
};
_FormRepresentanteLegalComponent.\u0275fac = function FormRepresentanteLegalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormRepresentanteLegalComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(DatoPersonaMoralService), \u0275\u0275directiveInject(DatoPersonalService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_FormRepresentanteLegalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormRepresentanteLegalComponent, selectors: [["app-form-pf-datos-personales"]], decls: 2, vars: 2, consts: [[1, "container"], [1, "row", "justify-content-evenly"], [1, "container", "p-3"], [1, "row", "sticky-bottom", "z-2"], [1, "btn", "btn-secondary", 3, "disabled"], [1, "col-12", "col-sm", "p-3"], ["label", "\xBFEl representante legal existe en el sistema?", "placeholder", "Ingrese un Curp", "apiUrl", "api/datos_personales", "key", "id", "keyDetalle", "curp", "nuevoRedirect", "/catalogos/datos-personales/nuevo", 3, "valueChange", "keyListDetalle", "relations", "value", "disabled"], ["title", "Datos Personales del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "keys"], ["title", "Direcci\xF3n del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "keys"], ["title", "Tel\xE9fonos del Solicitante", "bootstrapClass", "primary", 3, "editarRoute", "data", "ignoreKeys"], ["title", "Creditos Como Aval", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Creditos como Representante Legal", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], ["title", "Creditos como Persona Fisica", "urlRoute", "/main/creditos/validar/", 3, "ignore", "dataSource"], [1, "btn", "btn-secondary", 3, "click", "disabled"], ["role", "alert", 1, "alert", "alert-warning"]], template: function FormRepresentanteLegalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormRepresentanteLegalComponent_Conditional_0_Template, 5, 3, "div", 0);
    \u0275\u0275conditionalCreate(1, FormRepresentanteLegalComponent_Conditional_1_Template, 3, 0, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.datoPersonaMoral ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.datoPersonaMoral ? 1 : -1);
  }
}, dependencies: [
  AutocompleteFieldComponent,
  TablaLocalComponent,
  DataViewSectionComponent
], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n/*# sourceMappingURL=form-representante-legal.component.css.map */"] });
var FormRepresentanteLegalComponent = _FormRepresentanteLegalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRepresentanteLegalComponent, [{
    type: Component,
    args: [{ selector: "app-form-pf-datos-personales", imports: [
      AutocompleteFieldComponent,
      TablaLocalComponent,
      DataViewSectionComponent
    ], template: `@if (datoPersonaMoral) {
  <div class="container">
    @if (!userClient && !credito?.cliente_id) {
      <div class="row justify-content-evenly">
        <div class="col-12 col-sm p-3">
          <app-autocomplete-field
            label="\xBFEl representante legal existe en el sistema?"
            placeholder="Ingrese un Curp"
            apiUrl="api/datos_personales"
            [keyListDetalle]="['nombre','apellido_paterno', 'apellido_materno']"
            key="id"
            keyDetalle="curp"
            [relations]='["datosPersonasMorales","creditos","datosPersonasFisicas",]'
            (valueChange)="setDatosPersonales($event)"
            [value]="datoPersonal?.id"
            nuevoRedirect="/catalogos/datos-personales/nuevo"
            [disabled]="isFormalizado"
            />
        </div>
      </div>
    }
    @if (datoPersonal) {
      <div class="container p-3">
        <!-- Section for Names and Relevant Personal Data -->
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
      </div>
    }
    <div class="row sticky-bottom z-2">
      @if (!userClient && !credito?.cliente_id) {
        <button class="btn btn-secondary" [disabled]="!datoPersonal || isFormalizado" (click)="updateCredito()">
          Guardar Solicitante Seleccionado
        </button>
      }
    </div>
  </div>
}
@if (!datoPersonaMoral) {
  <div class="container">
    <div class="alert alert-warning" role="alert">
      No haz ingresado los datos del negocio, llena primero los datos del negocio y despues asigna representante legal
    </div>
  </div>
}
`, styles: ["/* src/app/main/creditos/credito-form/credito-persona-moral/form-representante-legal/form-representante-legal.component.css */\n.container {\n  min-height: 20rem;\n}\n/*# sourceMappingURL=form-representante-legal.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }, { type: UtilsService }, { type: DatoPersonaMoralService }, { type: DatoPersonalService }, { type: ActivatedRoute }, { type: LocalStorageService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormRepresentanteLegalComponent, { className: "FormRepresentanteLegalComponent", filePath: "src/app/main/creditos/credito-form/credito-persona-moral/form-representante-legal/form-representante-legal.component.ts", lineNumber: 28 });
})();

// src/app/main/creditos/credito-form/credito-persona-moral/credito.persona.moral.routes.ts
var creditoPersonaMoralRoutes = [
  { path: "", redirectTo: "negocio", pathMatch: "full" },
  { path: "negocio", component: FormPmNegocioComponent },
  { path: "aval", component: FormAvalCreditoComponent },
  { path: "referencias", component: FormReferenciasCreditoComponent },
  { path: "programa-inversion", component: FormProgramaInversionComponent },
  { path: "acta-constitutiva", component: FormActaConstitutivaComponent },
  { path: "documentos", component: DocumentosCreditoComponent },
  { path: "datos-bancarios", component: FormDatosBancariosComponent },
  { path: "representante-legal", component: FormRepresentanteLegalComponent },
  { path: "analisis-mercado", component: FormAnalisisMercadoComponent },
  { path: "datos-fiscales", component: FormDatosFiscalesComponent }
];

// src/app/main/creditos/credito-form/credito.form.routes.ts
var creditoFormRoutes = [
  { title: "Credito PF", path: "pf", component: CreditoPersonaFisicaComponent, children: creditoPFRoutes },
  { title: "Credito PM", path: "pm", component: CreditoPersonaMoralComponent, children: creditoPersonaMoralRoutes }
];
export {
  creditoFormRoutes
};
//# sourceMappingURL=chunk-L63TIHMS.js.map
