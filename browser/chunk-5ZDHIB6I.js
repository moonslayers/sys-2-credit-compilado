import {
  ExcelReaderService
} from "./chunk-NP73XDLG.js";
import {
  ConsolidadoHistoricoCombinadoService,
  DASHBOARD_HISTORICO_SECCIONES,
  TablaConfiguradaService
} from "./chunk-DXFZFSKC.js";
import {
  DocumentoService
} from "./chunk-P2FPDMMY.js";
import {
  InformeTablaDinamicaLocalComponent,
  ProgressBarConsolidadoComponent,
  SuperConsolidadoService
} from "./chunk-HEFVS2VO.js";
import "./chunk-6DPENKFB.js";
import "./chunk-BBNJFIFW.js";
import "./chunk-3HCUHHOO.js";
import {
  CreditoService,
  EstadoCuentaService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import "./chunk-SDTK5VY4.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
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
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  NgStyle,
  PercentPipe,
  TitleCasePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  ViewChild,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/configuracion/productos-comerciales/list-productos-comerciales/list-productos-comerciales.component.ts
var _ListProductosComercialesComponent = class _ListProductosComercialesComponent {
};
_ListProductosComercialesComponent.\u0275fac = function ListProductosComercialesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListProductosComercialesComponent)();
};
_ListProductosComercialesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListProductosComercialesComponent, selectors: [["app-list-productos-comerciales"]], decls: 2, vars: 0, template: function ListProductosComercialesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "list-productos-comerciales works!");
    \u0275\u0275elementEnd();
  }
}, encapsulation: 2 });
var ListProductosComercialesComponent = _ListProductosComercialesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListProductosComercialesComponent, [{
    type: Component,
    args: [{ selector: "app-list-productos-comerciales", imports: [], template: "<p>list-productos-comerciales works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListProductosComercialesComponent, { className: "ListProductosComercialesComponent", filePath: "src/app/configuracion/productos-comerciales/list-productos-comerciales/list-productos-comerciales.component.ts", lineNumber: 9 });
})();

// src/app/configuracion/productos-comerciales/form-productos-comerciales/form-productos-comerciales.component.ts
var FORM_DATA = [
  {
    key: "regimen",
    label: "Regimen",
    options: ["PERSONA FISICA CON ACTIVIDAD EMPRESARIAL", "PERSONA MORAL"]
  },
  {
    key: "nombre",
    label: "Nombre",
    type: "text"
  },
  {
    key: "programa",
    label: "Programa",
    type: "text"
  },
  {
    key: "anio_programa",
    label: "A\xF1o del Programa",
    type: "date"
  },
  {
    key: "aplica",
    label: "\xBFQui\xE9n puede aplicar?",
    options: ["NUEVOS", "RENOVACION", "REESTRUCTURA"]
  },
  {
    key: "abreviatura",
    label: "Abreviatura",
    type: "text"
  }
];
var _FormProductosComercialesComponent = class _FormProductosComercialesComponent {
  constructor() {
    this.form = FORM_DATA;
  }
  onFormChanges() {
    this.setAbreviatura();
  }
  setAbreviatura() {
    console.log(this.form);
    const abreviatura = this.form.find((field) => field.key == "abreviatura");
    if (abreviatura) {
      const nombre = this.form.find((field) => field.key == "nombre");
      if (nombre && nombre.value) {
        abreviatura.value = nombre.value.toString().split(" ").map((item) => item.substring(0, 3)).join("");
        console.log(abreviatura);
      }
    }
  }
};
_FormProductosComercialesComponent.\u0275fac = function FormProductosComercialesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormProductosComercialesComponent)();
};
_FormProductosComercialesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormProductosComercialesComponent, selectors: [["app-form-productos-comerciales"]], decls: 4, vars: 1, consts: [[1, "container", "p-3", "border", "rounded", "shadow", "bg-light"], [1, "text-center", "m-3"], [3, "formChange", "form"]], template: function FormProductosComercialesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
    \u0275\u0275text(2, "Nuevo Producto Comercial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 2);
    \u0275\u0275twoWayListener("formChange", function FormProductosComercialesComponent_Template_app_generic_form_formChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form, $event) || (ctx.form = $event);
      return $event;
    });
    \u0275\u0275listener("formChange", function FormProductosComercialesComponent_Template_app_generic_form_formChange_3_listener() {
      return ctx.onFormChanges();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("form", ctx.form);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormProductosComercialesComponent = _FormProductosComercialesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormProductosComercialesComponent, [{
    type: Component,
    args: [{ selector: "app-form-productos-comerciales", imports: [
      GenericFormComponent
    ], template: '<div class="container p-3 border rounded shadow bg-light">\n    <h4 class="text-center m-3">Nuevo Producto Comercial</h4>\n    <app-generic-form [(form)]="form" (formChange)="onFormChanges()" />\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormProductosComercialesComponent, { className: "FormProductosComercialesComponent", filePath: "src/app/configuracion/productos-comerciales/form-productos-comerciales/form-productos-comerciales.component.ts", lineNumber: 47 });
})();

// src/app/configuracion/productos-comerciales/productos.comerciales.routes.ts
var comercialesRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListProductosComercialesComponent },
  { path: "form", component: FormProductosComercialesComponent }
];

// src/app/controllers/producto-financiero.service.ts
var _ProductoFinancieroService = class _ProductoFinancieroService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "productos_financieros";
    this.columns = [
      "nombre",
      "alias",
      "regimen_fiscal",
      "dirigido_a",
      "tipo_tasa",
      "amortizacion_modo",
      "vencimiento_tipo",
      "redondeo_usar",
      "periodicidad",
      "prelacion_pagos",
      "anticipos_diponibles",
      "anticipos_maximo_cuotas",
      "anticipos_minimo_cuotas",
      "periodos_gracia",
      "periodos_gracia_capital",
      "periodos_gracia_interes",
      "gracia_maximo_periodos",
      "capital_minimo_permitido",
      "capital_maximo_permitido",
      "iva_interes",
      "iva_extemporaneos",
      "iva_comision",
      "iva_seguro_vida",
      "iva_moratorio",
      "iva_seguro_bienes",
      "iva_seguro_desempleo",
      "interes_moratorio_tasa_mensual",
      "interes_moratorio_dias_gracia",
      "interes_moratorio_cargo_minimo",
      "calculo_im_saldo_interes_normal",
      "calculo_im_saldo_comisiones",
      "calculo_im_saldo_extemporaneos",
      "calculo_im_saldo_capital",
      "comision_metodo_aplicacion",
      "comision_metodo_calculo",
      "comision_porc_sobre_capital",
      "seguro_vida_cuota",
      "seguro_desempleo_cuota",
      "seguro_bienes_materiales_cuota",
      "prelacion_seguro",
      "cargo_extemp_metodo_aplicacion",
      "usuario_id",
      "created_at"
    ];
  }
};
_ProductoFinancieroService.\u0275fac = function ProductoFinancieroService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProductoFinancieroService)(\u0275\u0275inject(Injector));
};
_ProductoFinancieroService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductoFinancieroService, factory: _ProductoFinancieroService.\u0275fac, providedIn: "any" });
var ProductoFinancieroService = _ProductoFinancieroService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductoFinancieroService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/configuracion/productos-financieros/list-productos-financieros/list-productos-financieros.component.ts
var _c0 = () => ["usuarios"];
var TABLA_DEF = {
  columns: [
    {
      key: "alias",
      header: "Alias"
    },
    {
      key: "regimen_fiscal",
      header: "Regimen"
    },
    {
      key: "tipo_tasa",
      header: "Tipo Tasa"
    },
    {
      key: "usuarios",
      subKey: "nombre",
      header: "Creado por"
    },
    {
      key: "created_at",
      header: "Creado en",
      pipe: "date"
    }
  ]
};
var AGREGAR_BUTTON = {
  text: "Nuevo P. Financiero",
  style: {
    icon: "bi bi-plus-circle-fill ms-1",
    button: "btn btn btn-secondary shadow text-bold scale-05"
  }
};
var _ListProductosFinancierosComponent = class _ListProductosFinancierosComponent {
  constructor(controller, router, route) {
    this.controller = controller;
    this.router = router;
    this.route = route;
    this.tabla = TABLA_DEF;
    this.agregarButton = AGREGAR_BUTTON;
  }
};
_ListProductosFinancierosComponent.\u0275fac = function ListProductosFinancierosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListProductosFinancierosComponent)(\u0275\u0275directiveInject(ProductoFinancieroService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_ListProductosFinancierosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListProductosFinancierosComponent, selectors: [["app-list-productos-financieros"]], decls: 1, vars: 5, consts: [["title", "Productos Financieros", 3, "controller", "tableDefinition", "relations", "agregarButton"]], template: function ListProductosFinancierosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.controller)("tableDefinition", ctx.tabla)("relations", \u0275\u0275pureFunction0(4, _c0))("agregarButton", ctx.agregarButton);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListProductosFinancierosComponent = _ListProductosFinancierosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListProductosFinancierosComponent, [{
    type: Component,
    args: [{ selector: "app-list-productos-financieros", imports: [
      TablaComponent
    ], template: `<app-tabla 
title="Productos Financieros"
[controller]="controller" 
[tableDefinition]="tabla"
[relations]="['usuarios']"
[agregarButton]="agregarButton"
/>` }]
  }], () => [{ type: ProductoFinancieroService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListProductosFinancierosComponent, { className: "ListProductosFinancierosComponent", filePath: "src/app/configuracion/productos-financieros/list-productos-financieros/list-productos-financieros.component.ts", lineNumber: 50 });
})();

// src/app/configuracion/productos-financieros/form-productos-financieros/form-productos-financieros.component.ts
var _c02 = () => ({ required: true });
var FORM_DATA2 = [
  {
    title: "Datos del Producto",
    fields: [
      {
        key: "nombre",
        label: "Nombre del Producto",
        type: "text",
        validator: {
          required: true,
          minLength: 1,
          maxLength: 500
        }
      },
      {
        key: "alias",
        label: "Alias",
        type: "text",
        validator: {
          required: true,
          minLength: 1,
          maxLength: 255
        }
      },
      {
        key: "regimen_fiscal",
        label: "R\xE9gimen Fiscal:",
        options: ["PERSONA FISICA CON ACTIVIDAD EMPRESARIAL", "PERSONA MORAL"],
        validator: {
          required: true
        }
      }
    ]
  },
  {
    title: "Datos de Pagos",
    fields: [
      {
        key: "tipo_tasa",
        label: "Tipo Tasa",
        options: ["TASA INSOLUTA", "TASA ORDINARIA ANUAL"],
        defaultOption: "TASA ORDINARIA ANUAL",
        validator: {
          required: true
        }
      },
      {
        key: "redondeo_usar",
        label: "\xBFSe usa el redondeo?",
        style: {
          div: "col-12 col-sm p-3"
        },
        options: ["SI", "NO"],
        defaultOption: "SI",
        validator: {
          required: true
        }
      },
      {
        key: "periodicidad",
        label: "Periodicidad",
        style: {
          div: "col-12 col-sm p-3"
        },
        options: ["SEMANAL", "MENSUAL"],
        defaultOption: "MENSUAL",
        validator: {
          required: true
        }
      }
    ]
  },
  {
    title: "Plazos",
    apiUrl: "api/productos_financieros_plazos",
    foreign_key: "productos_financiero_id",
    baseFields: [
      {
        key: "plazo_meses",
        label: "Meses",
        type: "number",
        validator: {
          min: 0,
          max: 500
        }
      },
      {
        key: "tasa_porcentual",
        label: "Tasa",
        type: "number",
        placeholder: "%",
        validator: {
          min: 0,
          max: 100
        }
      }
    ]
  },
  {
    title: "Prelaci\xF3n de Pagos",
    key: "prelacion_pagos",
    orderableList: [
      {
        text: "Extempor\xE1neos"
      },
      {
        text: "Intereses Moratorios"
      },
      {
        text: "Comisiones"
      },
      {
        text: "Intereses Normales"
      },
      {
        text: "Capital"
      },
      {
        text: "Seguros"
      }
    ]
  },
  {
    title: "Limite de Montos",
    fields: [
      {
        key: "capital_minimo_permitido",
        label: "M\xEFnimo Permitido",
        style: {
          div: "col-12 col-sm p-3"
        },
        defaultValue: 1,
        type: "number",
        validator: {
          min: 1
        }
      },
      {
        key: "capital_maximo_permitido",
        label: "M\xE1ximo Permitido",
        style: {
          div: "col-12 col-sm p-3"
        },
        type: "number",
        defaultValue: 1,
        validator: {
          required: true,
          min: 1
        }
      }
    ]
  },
  {
    title: "Configuraci\xF3n IVA",
    style: {
      div: "container-fluid py-3 mb-4"
    },
    fields: [
      {
        key: "iva_interes",
        label: "Interes",
        asYesOrNo: true,
        type: "boolean",
        defaultValue: "true",
        style: {
          div: "col-12 col-sm text-center p-1"
        }
      },
      {
        key: "iva_moratorio",
        label: "Moratorio",
        asYesOrNo: true,
        type: "boolean",
        style: {
          div: "col-12 col-sm text-center p-1"
        }
      }
    ]
  },
  {
    title: "Intereses Moratorios",
    fields: [
      {
        key: "interes_moratorio_tasa_mensual",
        label: "Interes Moratorio Tasa Mensual",
        placeholder: "Tasa Mensual %...",
        defaultValue: 0,
        style: {
          div: "col-12 col-sm-6 p-3"
        },
        validator: {
          min: 0,
          max: 100
        },
        type: "number"
      },
      {
        key: "interes_moratorio_dias_gracia",
        label: "D\xEDas de Gracia",
        defaultValue: 1,
        style: {
          div: "col-12 col-sm-6 p-3"
        },
        type: "number"
      }
    ]
  },
  {
    title: "Comisiones",
    fields: [
      {
        key: "porcentaje_capital",
        label: "Porcentaje Sobre Capital",
        placeholder: "%",
        defaultValue: 0,
        validator: {
          min: 0,
          max: 100
        },
        style: {
          div: "col-12 col-sm p-3"
        },
        type: "number"
      }
    ]
  },
  {
    title: "Documento Requeridos",
    apiUrl: "api/productos_financieros_documentos",
    foreign_key: "productos_financiero_id",
    baseFields: [
      {
        key: "documento_id",
        keyList: "id",
        label: "Documento",
        apiUrl: "api/documentos"
      },
      {
        key: "prioridad",
        label: "\xBFEs Obligatorio?",
        defaultOption: "OPCIONAL",
        options: ["OBLIGATORIO", "OPCIONAL"]
      }
    ]
  }
];
var _FormProductosFinancierosComponent = class _FormProductosFinancierosComponent {
  constructor(controller, route, router) {
    this.controller = controller;
    this.route = route;
    this.router = router;
    this.form = FORM_DATA2;
  }
  ngOnInit() {
    this.checkIdParam();
  }
  copyOf(value) {
    return JSON.parse(JSON.stringify(value));
  }
  checkIdParam() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      if (params.get("id") && !isNaN(parseInt(params.get("id") ?? ""))) {
        const id = parseInt(params.get("id"));
        if (this.edit && this.edit.id == id) {
          return;
        }
        this.edit = yield this.controller.find(id, ["plazos", "documentos.documento"]);
        console.log(this.edit);
      }
    }));
  }
  updateUrl() {
    if (!this.edit?.id)
      return;
    this.router.navigate(["/configuracion/productos/financieros/editar", this.edit?.id]);
  }
};
_FormProductosFinancierosComponent.\u0275fac = function FormProductosFinancierosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormProductosFinancierosComponent)(\u0275\u0275directiveInject(ProductoFinancieroService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_FormProductosFinancierosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormProductosFinancierosComponent, selectors: [["app-form-productos-financieros"]], decls: 4, vars: 6, consts: [[1, "container", "p-3", "my-2", "border", "rounded", "shadow", "bg-white"], [1, "text-center", "m-3"], ["rowButtonClass", "row py-3 bg-white shadow sticky-bottom z-2", 3, "editChange", "form", "edit", "controller", "validator"]], template: function FormProductosFinancierosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 2);
    \u0275\u0275twoWayListener("editChange", function FormProductosFinancierosComponent_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function FormProductosFinancierosComponent_Template_app_generic_form_editChange_3_listener() {
      return ctx.updateUrl();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nuevo", " Producto Financiero");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("controller", ctx.controller)("validator", \u0275\u0275pureFunction0(5, _c02));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormProductosFinancierosComponent = _FormProductosFinancierosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormProductosFinancierosComponent, [{
    type: Component,
    args: [{ selector: "app-form-productos-financieros", imports: [
      GenericFormComponent
    ], template: `<div class="container p-3 my-2 border rounded shadow bg-white">
    <h4 class="text-center m-3">{{this.edit?'Editar':'Nuevo'}} Producto Financiero</h4>
    <app-generic-form 
    [form]="form"
    [(edit)]="edit"
    (editChange)="updateUrl()"
    [controller]="controller" 
    [validator]="{required:true}"
    rowButtonClass="row py-3 bg-white shadow sticky-bottom z-2" 
    />
</div>
` }]
  }], () => [{ type: ProductoFinancieroService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormProductosFinancierosComponent, { className: "FormProductosFinancierosComponent", filePath: "src/app/configuracion/productos-financieros/form-productos-financieros/form-productos-financieros.component.ts", lineNumber: 262 });
})();

// src/app/configuracion/productos-financieros/productos.financieros.routes.ts
var financierosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListProductosFinancierosComponent },
  { path: "editar/:id", component: FormProductosFinancierosComponent },
  { path: "nuevo", component: FormProductosFinancierosComponent }
];

// src/app/configuracion/documentos/form-documento/form-documento.component.ts
var FORM_DEF = [
  {
    key: "nombre",
    label: "Nombre del Documento",
    type: "text",
    style: {
      div: "col p-3 mt-3"
    },
    validator: {
      required: true
    }
  }
];
var _FormDocumentoComponent = class _FormDocumentoComponent {
  constructor(documentoController, route) {
    this.documentoController = documentoController;
    this.route = route;
    this.editChange = new EventEmitter();
    this.form = FORM_DEF;
  }
};
_FormDocumentoComponent.\u0275fac = function FormDocumentoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDocumentoComponent)(\u0275\u0275directiveInject(DocumentoService), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormDocumentoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDocumentoComponent, selectors: [["app-form-documento"]], inputs: { edit: "edit" }, outputs: { editChange: "editChange" }, decls: 4, vars: 3, consts: [[1, "container-fluid", "p-3", "m-2"], [1, "text-center", "h3"], [3, "editChange", "form", "edit", "controller"]], template: function FormDocumentoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2, "Nuevo Tipo de Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 2);
    \u0275\u0275twoWayListener("editChange", function FormDocumentoComponent_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function FormDocumentoComponent_Template_app_generic_form_editChange_3_listener() {
      return ctx.editChange.emit(ctx.edit);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("form", ctx.form);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("controller", ctx.documentoController);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormDocumentoComponent = _FormDocumentoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDocumentoComponent, [{
    type: Component,
    args: [{ selector: "app-form-documento", imports: [
      GenericFormComponent
    ], template: '<div class="container-fluid p-3 m-2">\n    <h3 class="text-center h3">Nuevo Tipo de Documento</h3>\n    <app-generic-form [form]="form" [(edit)]="edit" (editChange)="editChange.emit(edit)" [controller]="documentoController" />\n</div>' }]
  }], () => [{ type: DocumentoService }, { type: ActivatedRoute }], { edit: [{
    type: Input
  }], editChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDocumentoComponent, { className: "FormDocumentoComponent", filePath: "src/app/configuracion/documentos/form-documento/form-documento.component.ts", lineNumber: 29 });
})();

// src/app/configuracion/documentos/tabla-documento/tabla-documento.component.ts
var _c03 = ["tablaRef"];
var _c1 = () => ["usuarios"];
var TABLA_DEF2 = {
  columns: [
    {
      key: "nombre",
      header: "Nombre"
    },
    {
      key: "usuarios",
      subKey: "nombre",
      header: "Creador"
    },
    {
      key: "created_at",
      header: "Creado en",
      pipe: "date"
    }
  ]
};
var _TablaDocumentoComponent = class _TablaDocumentoComponent {
  constructor(documentoController, router) {
    this.documentoController = documentoController;
    this.router = router;
    this.tabla = TABLA_DEF2;
    this.showAdd = false;
  }
  ngOnChanges(changes) {
    console.log(this.showAdd);
    if (changes["showAdd"] && !this.showAdd) {
      console.log("se cerro form");
      this.tablaRef.getData();
    }
  }
  updateTabla() {
    if (!this.showAdd) {
      this.tablaRef.getData();
    }
  }
  nuevo() {
    this.edit = void 0;
    this.showAdd = true;
  }
  editar(row) {
    this.edit = row;
    this.showAdd = true;
  }
};
_TablaDocumentoComponent.\u0275fac = function TablaDocumentoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaDocumentoComponent)(\u0275\u0275directiveInject(DocumentoService), \u0275\u0275directiveInject(Router));
};
_TablaDocumentoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaDocumentoComponent, selectors: [["app-tabla-documento"]], viewQuery: function TablaDocumentoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tablaRef = _t.first);
  }
}, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 8, consts: [["tablaRef", ""], [3, "agregarClick", "rowEditarClick", "tableDefinition", "controller", "relations", "useDefaultAgregarRedirect", "useDefaultRowEditRedirect"], [3, "showChange", "show"], [3, "editChange", "edit"]], template: function TablaDocumentoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tabla", 1, 0);
    \u0275\u0275listener("agregarClick", function TablaDocumentoComponent_Template_app_tabla_agregarClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.nuevo());
    })("rowEditarClick", function TablaDocumentoComponent_Template_app_tabla_rowEditarClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.editar($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-formulario-flotante", 2);
    \u0275\u0275twoWayListener("showChange", function TablaDocumentoComponent_Template_app_formulario_flotante_showChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showAdd, $event) || (ctx.showAdd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("showChange", function TablaDocumentoComponent_Template_app_formulario_flotante_showChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateTabla());
    });
    \u0275\u0275elementStart(3, "app-form-documento", 3);
    \u0275\u0275twoWayListener("editChange", function TablaDocumentoComponent_Template_app_form_documento_editChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.documentoController)("relations", \u0275\u0275pureFunction0(7, _c1))("useDefaultAgregarRedirect", false)("useDefaultRowEditRedirect", false);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx.showAdd);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("edit", ctx.edit);
  }
}, dependencies: [
  TablaComponent,
  FormularioFlotanteComponent,
  FormDocumentoComponent
], encapsulation: 2 });
var TablaDocumentoComponent = _TablaDocumentoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaDocumentoComponent, [{
    type: Component,
    args: [{ selector: "app-tabla-documento", imports: [
      TablaComponent,
      FormularioFlotanteComponent,
      FormDocumentoComponent
    ], template: `<app-tabla #tablaRef 
[tableDefinition]="tabla" 
[controller]="documentoController" 
[relations]="['usuarios']"
[useDefaultAgregarRedirect]="false"
[useDefaultRowEditRedirect]="false"
(agregarClick)="nuevo()"
(rowEditarClick)="editar($event)"
/>
<app-formulario-flotante [(show)]="showAdd" (showChange)="updateTabla()">
    <app-form-documento [(edit)]="edit" />
</app-formulario-flotante>
` }]
  }], () => [{ type: DocumentoService }, { type: Router }], { tablaRef: [{
    type: ViewChild,
    args: ["tablaRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaDocumentoComponent, { className: "TablaDocumentoComponent", filePath: "src/app/configuracion/documentos/tabla-documento/tabla-documento.component.ts", lineNumber: 38 });
})();

// src/app/configuracion/documentos/documentos.routes.ts
var documentosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: TablaDocumentoComponent }
];

// src/app/configuracion/migrar-exceles/migrar-exceles.component.ts
var _c04 = (a0) => ({ width: a0 });
function MigrarExcelesComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sheet_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sheet_r1);
  }
}
function MigrarExcelesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 8);
    \u0275\u0275text(2, "Chunk inicial:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarExcelesComponent_Conditional_35_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.chunkInicial, $event) || (ctx_r2.chunkInicial = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 8);
    \u0275\u0275text(5, "Chunk final (incluido):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarExcelesComponent_Conditional_35_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.chunkFinal, $event) || (ctx_r2.chunkFinal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.chunkInicial);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.chunkFinal);
  }
}
var _MigrarExcelesComponent = class _MigrarExcelesComponent {
  constructor(utils, excelController, api, creditoController, estadoCuentaController, utilsEstadoCuenta) {
    this.utils = utils;
    this.excelController = excelController;
    this.api = api;
    this.creditoController = creditoController;
    this.estadoCuentaController = estadoCuentaController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.sheetNames = [];
    this.chunkSize = 0;
    this.apiUrl = "api/migracion";
    this.extraData = "";
    this.sendOption = "ENVIAR SOLO PRIMER CHUNK";
    this.chunkInicial = 0;
    this.chunkFinal = 1;
    this.actualChunk = 0;
    this.loading = false;
    this.dataSource = [];
  }
  onInputChange(event) {
    return __async(this, null, function* () {
      this.file = this.utils.fileFromInputEvent(event);
      if (this.file) {
        this.sheetNames = yield this.excelController.sheetNames(this.file);
        this.sheetSelected = void 0;
        console.log(this.sheetNames);
      }
    });
  }
  onSheetSelected() {
    return __async(this, null, function* () {
      if (!this.sheetSelected || !this.file)
        return;
      if (this.sheetSelected == "estados cuenta")
        this.apiUrl = "api/estados_cuentas";
      if (this.sheetNames.includes(this.sheetSelected)) {
        this.dataSource = yield this.excelController.readExcelAsJsonList(this.file, this.sheetSelected);
        console.log(this.dataSource);
      }
    });
  }
  actualizarEstadosDeCuenta() {
    return __async(this, null, function* () {
      this.apiUrl = "api/estados_cuentas";
      this.loading = true;
      let extra = {
        tipo: this.sheetSelected?.toLowerCase()
      };
      try {
        extra = __spreadValues(__spreadValues({}, extra), JSON.parse(this.extraData) ?? {});
      } catch (e) {
      }
      if (this.sendOption === "ENVIAR SOLO PRIMER CHUNK") {
        this.actualChunk = 0;
        extra.inicio = 1;
        extra.fin = this.chunkSize;
        const res = yield this.estadosCuenta({
          page: 1,
          per_page: this.chunkSize
        });
        if (!res) {
          console.error("ESTO TRONO EN EL CHUNK: ", this.actualChunk);
          return;
        }
        this.actualChunk = 1;
      } else if (this.sendOption === "ENVIAR TODOS") {
        this.actualChunk = 0;
        for (let i = 0; i <= 1e4; i += this.chunkSize) {
          extra.inicio = i + 1;
          extra.fin = i + this.chunkSize;
          const res = yield this.estadosCuenta({
            page: this.actualChunk + 1,
            per_page: this.chunkSize
          });
          if (!res) {
            console.error("ESTO TRONO EN EL CHUNK: ", this.actualChunk);
            return;
          }
          this.actualChunk++;
          console.info("CHUNK:", this.actualChunk);
        }
        this.loading = false;
      } else {
        if (this.chunkFinal < 0 || this.chunkFinal < this.chunkInicial || this.chunkInicial < 0) {
          this.loading = false;
          return;
        }
        const lastIndex = this.chunkFinal > 0 && this.chunkFinal <= Math.ceil(1e4 / this.chunkSize) ? this.chunkFinal * this.chunkSize : 1e4;
        this.actualChunk = this.chunkInicial - 1;
        for (let i = this.chunkInicial - 1; i < lastIndex; i += this.chunkSize) {
          extra.inicio = i + 1;
          extra.fin = i + this.chunkSize;
          const res = yield this.estadosCuenta({
            page: this.actualChunk,
            per_page: this.chunkSize
          });
          if (!res) {
            console.error("ESTO TRONO EN EL CHUNK: ", this.actualChunk);
            return;
          }
          this.actualChunk++;
          console.info("CHUNK:", this.actualChunk);
        }
      }
      this.loading = false;
    });
  }
  estadosCuenta(paginador) {
    return __async(this, null, function* () {
      const creditos = (yield this.creditoController.get([
        {
          key: "estado",
          operator: "<>",
          value: "CANCELADO"
        },
        {
          key: "liberado_fecha",
          operator: "IS NOT NULL",
          value: null
        },
        {
          key: "deleted_at",
          operator: "IS NULL",
          value: null
        }
      ], paginador, [
        "abonos",
        "creditosPagos",
        "productosFinancieros.plazos",
        "inversionesProgramas",
        "estadoCuenta",
        "creditoComprobaciones",
        "comprobacionTotalS2c.creditoComprobaciones",
        "convenios.conveniosPagos",
        "juridicos",
        "creditosDespachos.despachos"
      ], {}, false)).data ?? [];
      if (!creditos)
        return;
      creditos.forEach((credito) => {
        credito.estado_cuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(credito);
      });
      const estadosCuentaNuevos = creditos.filter((credito) => credito.estado_cuenta && !credito.estado_cuenta.id).map((credito) => credito.estado_cuenta);
      const estadosCuentaActualizar = creditos.filter((credito) => credito.estado_cuenta && !!credito.estado_cuenta.id).map((credito) => credito.estado_cuenta);
      let res = true;
      if (estadosCuentaNuevos.length > 0) {
        res = res && (yield this.estadoCuentaController.multipleNews(estadosCuentaNuevos));
      }
      if (estadosCuentaActualizar.length > 0) {
        res = res && (yield this.estadoCuentaController.multipleUpdate(estadosCuentaActualizar));
      }
      if (!res) {
        console.error([...estadosCuentaActualizar, ...estadosCuentaNuevos]);
      }
      if (estadosCuentaActualizar.length == 0 && estadosCuentaNuevos.length == 0)
        return false;
      return res;
    });
  }
  subir() {
    return __async(this, null, function* () {
      if (!this.apiUrl)
        return;
      if (!this.file || this.sheetSelected == "estados cuenta") {
        this.actualizarEstadosDeCuenta();
        return;
      }
      this.loading = true;
      let extra = {
        tipo: this.sheetSelected?.toLowerCase()
      };
      try {
        extra = __spreadValues(__spreadValues({}, extra), JSON.parse(this.extraData) ?? {});
      } catch (e) {
      }
      console.log(this.extraData);
      console.log(extra);
      if (this.sendOption === "ENVIAR SOLO PRIMER CHUNK") {
        this.actualChunk = 0;
        const data = this.dividedDataSource()[0];
        const res = yield firstValueFrom(this.api.post(this.apiUrl, data, extra));
        this.actualChunk = 1;
        console.log(res);
      } else if (this.sendOption === "ENVIAR TODOS") {
        const data = this.dataSource;
        this.actualChunk = 0;
        this.chunkFinal = Math.ceil(data.length / this.chunkSize);
        const lastIndex = this.chunkFinal > 0 && this.chunkFinal <= Math.ceil(data.length / this.chunkSize) ? this.chunkFinal * this.chunkSize : data.length;
        this.actualChunk = this.chunkInicial - 1;
        for (let i = 0; i <= data.length; i += this.chunkSize) {
          extra.inicio = this.chunkInicial - 1;
          extra.fin = lastIndex - 1;
          const res = yield firstValueFrom(this.api.post(this.apiUrl, data.slice(i, i + this.chunkSize), extra));
          if (!res.status) {
            console.error("Esto trono en el chunk: ", this.actualChunk);
            this.loading = false;
            return;
          }
          console.log(res);
          this.actualChunk++;
        }
        this.loading = false;
      } else {
        const data = this.dataSource;
        if (data.length == 0) {
          console.error("dataSource is empty");
          this.loading = false;
          return;
        }
        if (this.chunkFinal < 0 || this.chunkFinal < this.chunkInicial || this.chunkInicial < 0) {
          this.loading = false;
          return;
        }
        const lastIndex = this.chunkFinal > 0 && this.chunkFinal <= Math.ceil(data.length / this.chunkSize) ? this.chunkFinal * this.chunkSize : data.length;
        this.actualChunk = this.chunkInicial - 1;
        console.log("id Inicial: ", this.chunkInicial * this.chunkSize, " LastIndex:", lastIndex);
        for (let i = this.chunkInicial * this.chunkSize - 1; i <= lastIndex; i += this.chunkSize) {
          extra.inicio = this.chunkInicial - 1;
          extra.fin = lastIndex - 1;
          const res = yield firstValueFrom(this.api.post(this.apiUrl, data.slice(i, i + this.chunkSize), extra));
          if (!res.status) {
            console.error("Esto trono en el chunk: ", this.actualChunk);
            this.loading = false;
            return;
          }
          console.info("chunk:", i / this.chunkSize);
          console.log(res);
        }
      }
      this.loading = false;
    });
  }
  dividedDataSource(chunkSize = this.chunkSize) {
    if (!this.dataSource || this.dataSource.length === 0) {
      return [];
    }
    const result = [];
    for (let i = 0; i < this.dataSource.length; i += chunkSize) {
      result.push(this.dataSource.slice(i, i + chunkSize));
    }
    return result;
  }
};
_MigrarExcelesComponent.\u0275fac = function MigrarExcelesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MigrarExcelesComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ExcelReaderService), \u0275\u0275directiveInject(ApiServiceService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(EstadoCuentaService), \u0275\u0275directiveInject(UtilsEstadoCuentaService));
};
_MigrarExcelesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MigrarExcelesComponent, selectors: [["app-migrar-exceles"]], decls: 51, vars: 15, consts: [[1, "container", "p-3", "my-1", "rounded", "shadow", "bg-white", "pb-5"], [1, "row"], [1, "col"], [1, "fw-bold"], [1, "col-auto"], ["routerLink", "/configuracion/migracion/gestiones", 1, "btn", "btn-primary"], ["type", "file", "accept", ".xlsx", 1, "form-control", "mt-3", 3, "change"], [1, "input-group", "mt-3"], [1, "input-group-text"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["disabled", "", 3, "value"], ["value", "estados cuenta"], ["type", "number", "placeholder", "Tama\xF1o del chunk", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["placeholder", "Url de la api...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-floating", "mt-3"], ["placeholder", "Ingresa un json para mandar en body...", "id", "floatingTextarea", "rows", "10", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "floatingTextarea"], ["role", "progressbar", "aria-label", "Example with label", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "mt-3"], [1, "progress-bar", 3, "ngStyle"], [1, "row", "mt-5", "px-3"], [1, "btn", "btn-success", 3, "click", "disabled"]], template: function MigrarExcelesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
    \u0275\u0275text(4, "Migrar a traves de excel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
    \u0275\u0275text(7, " Migrar Gestiones ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "input", 6);
    \u0275\u0275listener("change", function MigrarExcelesComponent_Template_input_change_8_listener($event) {
      return ctx.onInputChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
    \u0275\u0275text(11, "Sheet seleccionado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarExcelesComponent_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.sheetSelected, $event) || (ctx.sheetSelected = $event);
      return $event;
    });
    \u0275\u0275listener("change", function MigrarExcelesComponent_Template_select_change_12_listener() {
      return ctx.onSheetSelected();
    });
    \u0275\u0275elementStart(13, "option", 10);
    \u0275\u0275text(14, "Selecciona el sheet que vas a migrar");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, MigrarExcelesComponent_For_16_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(17, "option", 11);
    \u0275\u0275text(18, "Estados de Cuenta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 7)(20, "label", 8);
    \u0275\u0275text(21, "Tama\xF1o del chunk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarExcelesComponent_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.chunkSize, $event) || (ctx.chunkSize = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 7)(24, "label", 8);
    \u0275\u0275text(25, "\xBFQu\xE9 enviar?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarExcelesComponent_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.sendOption, $event) || (ctx.sendOption = $event);
      return $event;
    });
    \u0275\u0275elementStart(27, "option", 10);
    \u0275\u0275text(28, "Selecciona una opcion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option");
    \u0275\u0275text(30, "ENVIAR SOLO PRIMER CHUNK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option");
    \u0275\u0275text(32, "ENVIAR TODOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option");
    \u0275\u0275text(34, "ESPECIFICA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(35, MigrarExcelesComponent_Conditional_35_Template, 7, 2, "div", 7);
    \u0275\u0275elementStart(36, "div", 7)(37, "label", 8);
    \u0275\u0275text(38, "API URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarExcelesComponent_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.apiUrl, $event) || (ctx.apiUrl = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 15)(41, "textarea", 16);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarExcelesComponent_Template_textarea_ngModelChange_41_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.extraData, $event) || (ctx.extraData = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "label", 17);
    \u0275\u0275text(43, "Datos extra");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 18)(45, "div", 19);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "percent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 20)(49, "button", 21);
    \u0275\u0275listener("click", function MigrarExcelesComponent_Template_button_click_49_listener() {
      return ctx.subir();
    });
    \u0275\u0275text(50, "Subir Datos");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.sheetSelected);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.sheetNames);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.chunkSize);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.sendOption);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.sendOption === "ESPECIFICA" ? 35 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.apiUrl);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.extraData);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(13, _c04, ctx.actualChunk / ctx.chunkFinal * 100 + "%"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 11, ctx.actualChunk / ctx.chunkFinal));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.apiUrl || !ctx.sheetSelected);
  }
}, dependencies: [
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  PercentPipe,
  NgStyle,
  RouterLink
], encapsulation: 2 });
var MigrarExcelesComponent = _MigrarExcelesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MigrarExcelesComponent, [{
    type: Component,
    args: [{ selector: "app-migrar-exceles", imports: [
      FormsModule,
      PercentPipe,
      NgStyle,
      RouterLink
    ], template: `<div class="container p-3 my-1 rounded shadow bg-white pb-5">
  <div class="row">
    <div class="col">
      <h3 class="fw-bold">Migrar a traves de excel</h3>
    </div>
    <div class="col-auto">
      <button class="btn btn-primary" routerLink="/configuracion/migracion/gestiones">
        Migrar Gestiones
      </button>
    </div>
  </div>
  <input class="form-control mt-3" type="file" accept=".xlsx" (change)="onInputChange($event)">
  <div class="input-group mt-3">
    <label class="input-group-text">Sheet seleccionado</label>
    <select class="form-select" [(ngModel)]="sheetSelected" (change)="onSheetSelected()">
      <option [value]="undefined" disabled>Selecciona el sheet que vas a migrar</option>
      @for (sheet of sheetNames; track sheet) {
        <option>{{sheet}}</option>
      }
      <option value="estados cuenta">Estados de Cuenta</option>
    </select>
  </div>
  <div class="input-group mt-3">
    <label class="input-group-text">Tama\xF1o del chunk</label>
    <input class="form-control" type="number" [(ngModel)]="chunkSize" placeholder="Tama\xF1o del chunk">
  </div>
  <div class="input-group mt-3">
    <label class="input-group-text">\xBFQu\xE9 enviar?</label>
    <select class="form-select" [(ngModel)]="sendOption">
      <option [value]="undefined" disabled>Selecciona una opcion</option>
      <option>ENVIAR SOLO PRIMER CHUNK</option>
      <option>ENVIAR TODOS</option>
      <option>ESPECIFICA</option>
    </select>
  </div>
  @if (sendOption==='ESPECIFICA') {
    <div class="input-group mt-3">
      <label class="input-group-text">Chunk inicial:</label>
      <input class="form-control" type="number" [(ngModel)]="chunkInicial" placeholder="Tama\xF1o del chunk">
      <label class="input-group-text">Chunk final (incluido):</label>
      <input class="form-control" type="number" [(ngModel)]="chunkFinal" placeholder="Tama\xF1o del chunk">
    </div>
  }
  <div class="input-group mt-3">
    <label class="input-group-text">API URL</label>
    <input class="form-control" [(ngModel)]="apiUrl" placeholder="Url de la api...">
  </div>
  <div class="form-floating mt-3">
    <textarea class="form-control" placeholder="Ingresa un json para mandar en body..." id="floatingTextarea"
    rows="10" [(ngModel)]="extraData"></textarea>
    <label for="floatingTextarea">Datos extra</label>
  </div>
  <div class="progress mt-3" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
    aria-valuemax="100">
    <div class="progress-bar" [ngStyle]="{width:((actualChunk/chunkFinal)*100)+'%'}">
    {{(actualChunk/chunkFinal)|percent}}</div>
  </div>
  <div class="row mt-5 px-3">
    <button class="btn btn-success" (click)="subir()" [disabled]=" !apiUrl ||!sheetSelected">Subir Datos</button>
  </div>
</div>` }]
  }], () => [{ type: UtilsService }, { type: ExcelReaderService }, { type: ApiServiceService }, { type: CreditoService }, { type: EstadoCuentaService }, { type: UtilsEstadoCuentaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MigrarExcelesComponent, { className: "MigrarExcelesComponent", filePath: "src/app/configuracion/migrar-exceles/migrar-exceles.component.ts", lineNumber: 26 });
})();

// src/app/configuracion/utileria/utileria.component.ts
var _UtileriaComponent = class _UtileriaComponent {
  constructor(api) {
    this.api = api;
    this.creditoId = 0;
  }
  refrescarReferenciaBancaria() {
    return __async(this, null, function* () {
      const res = yield firstValueFrom(this.api.post("api/utils/referencia_bancaria/" + this.creditoId));
      console.log(res);
    });
  }
};
_UtileriaComponent.\u0275fac = function UtileriaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UtileriaComponent)(\u0275\u0275directiveInject(ApiServiceService));
};
_UtileriaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtileriaComponent, selectors: [["app-utileria"]], decls: 11, vars: 1, consts: [[1, "container", "p-3", "rounded", "shadow", "my-2"], [1, "input-group"], ["for", "", 1, "input-group-text"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mt-2"], [1, "col-auto"], [1, "btn", "btn-secondary", 3, "click"]], template: function UtileriaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4");
    \u0275\u0275text(2, "Funciones de utiler\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "label", 2);
    \u0275\u0275text(5, "ID de Credito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function UtileriaComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.creditoId, $event) || (ctx.creditoId = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "button", 6);
    \u0275\u0275listener("click", function UtileriaComponent_Template_button_click_9_listener() {
      return ctx.refrescarReferenciaBancaria();
    });
    \u0275\u0275text(10, " Refrescar Referencia Bancaria ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.creditoId);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var UtileriaComponent = _UtileriaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtileriaComponent, [{
    type: Component,
    args: [{ selector: "app-utileria", imports: [
      FormsModule
    ], template: '<div class="container p-3 rounded shadow my-2">\n    <h4>Funciones de utiler\xEDa</h4>\n    <div class="input-group">\n        <label for="" class="input-group-text">ID de Credito</label>\n        <input class="form-control" type="text" [(ngModel)]="creditoId">\n    </div>\n    <div class="row mt-2">\n        <div class="col-auto">\n            <button class="btn btn-secondary" (click)="refrescarReferenciaBancaria()">\n                Refrescar Referencia Bancaria\n            </button>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: ApiServiceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtileriaComponent, { className: "UtileriaComponent", filePath: "src/app/configuracion/utileria/utileria.component.ts", lineNumber: 14 });
})();

// src/app/configuracion/migrar-gestiones/migrar-gestiones.component.ts
var _MigrarGestionesComponent = class _MigrarGestionesComponent {
  constructor(api) {
    this.api = api;
    this.phptoken = "";
    this.creditoInicio = 1;
    this.creditoFin = 9700;
    this.creditoId = 1;
    this.chunkSize = 50;
  }
  ngOnInit() {
  }
  migrarCredito() {
    return __async(this, null, function* () {
      for (let i = this.creditoInicio; i <= this.creditoFin; i += this.chunkSize) {
        let fin = i + this.chunkSize;
        fin = fin > this.creditoFin ? this.creditoFin : fin;
        const res = yield this.postData(i, fin);
        if (res) {
          console.error("ESTO TRONO EN EL CREDITO ", i);
          return;
        }
      }
    });
  }
  postData(inicio, fin) {
    return __async(this, null, function* () {
      const res = yield firstValueFrom(this.api.post("api/migracion/gestiones", {
        phpcookie: "PHPSESSID=" + this.phptoken,
        credito_inicio: inicio,
        credito_fin: fin
      }));
      console.log(res);
      return res.status;
    });
  }
};
_MigrarGestionesComponent.\u0275fac = function MigrarGestionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MigrarGestionesComponent)(\u0275\u0275directiveInject(ApiServiceService));
};
_MigrarGestionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MigrarGestionesComponent, selectors: [["app-migrar-gestiones"]], decls: 18, vars: 4, consts: [[1, "container", "rounded", "shadow", "bg-white", "my-1", "p-3"], [1, "input-group", "mt-2"], [1, "input-group-text"], ["type", "text", "placeholder", "PHPIDSESION... o cookie", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "id credito...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Chunk.", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"]], template: function MigrarGestionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3");
    \u0275\u0275text(2, "Migrar Gestiones desde Viejo Sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "label", 2);
    \u0275\u0275text(5, "PHP SESION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 3);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarGestionesComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.phptoken, $event) || (ctx.phptoken = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 2);
    \u0275\u0275text(8, "Primer Credito:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarGestionesComponent_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.creditoInicio, $event) || (ctx.creditoInicio = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 2);
    \u0275\u0275text(11, "Ultimo credito:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarGestionesComponent_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.creditoFin, $event) || (ctx.creditoFin = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 2);
    \u0275\u0275text(14, "Chunk:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function MigrarGestionesComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.chunkSize, $event) || (ctx.chunkSize = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 6);
    \u0275\u0275listener("click", function MigrarGestionesComponent_Template_button_click_16_listener() {
      return ctx.migrarCredito();
    });
    \u0275\u0275text(17, "Iniciar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.phptoken);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.creditoInicio);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.creditoFin);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.chunkSize);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var MigrarGestionesComponent = _MigrarGestionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MigrarGestionesComponent, [{
    type: Component,
    args: [{ selector: "app-migrar-gestiones", imports: [
      FormsModule
    ], template: '<div class="container rounded shadow bg-white my-1 p-3">\n    <h3>Migrar Gestiones desde Viejo Sistema</h3>\n    <div class="input-group mt-2">\n        <label class="input-group-text">PHP SESION</label>\n        <input type="text" class="form-control" placeholder="PHPIDSESION... o cookie" [(ngModel)]="phptoken">\n        <label class="input-group-text">Primer Credito:</label>\n        <input type="number" class="form-control" placeholder="id credito..." [(ngModel)]="creditoInicio">\n        <label class="input-group-text">Ultimo credito:</label>\n        <input type="number" class="form-control" placeholder="id credito..." [(ngModel)]="creditoFin">\n        <label class="input-group-text">Chunk:</label>\n        <input type="number" class="form-control" placeholder="Chunk." [(ngModel)]="chunkSize">\n        <button class="btn btn-primary" (click)="migrarCredito()">Iniciar</button>\n\n    </div>\n</div>\n' }]
  }], () => [{ type: ApiServiceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MigrarGestionesComponent, { className: "MigrarGestionesComponent", filePath: "src/app/configuracion/migrar-gestiones/migrar-gestiones.component.ts", lineNumber: 15 });
})();

// src/app/main/reportes/services/consolidado-basico.service.ts
var _ConsolidadoBasicoService = class _ConsolidadoBasicoService extends SuperConsolidadoService {
  constructor() {
    super();
    this.endpoint = "api/consolidado/historico";
    this.filter = (c, options) => {
      if (!c.creditos_pagos?.length) {
        return false;
      }
      if (!c.liberado_fecha) {
        return false;
      }
      return true;
    };
    this.map = (c) => {
      return {};
    };
    this.initData();
  }
};
_ConsolidadoBasicoService.\u0275fac = function ConsolidadoBasicoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConsolidadoBasicoService)();
};
_ConsolidadoBasicoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsolidadoBasicoService, factory: _ConsolidadoBasicoService.\u0275fac, providedIn: "root" });
var ConsolidadoBasicoService = _ConsolidadoBasicoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsolidadoBasicoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/configuracion/actualizar-estados-cuenta/actualizar-estados-cuenta.component.ts
function ActualizarEstadosCuentaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-progress-bar-consolidado", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("progress", ctx_r0.progress)("isLoading", true);
  }
}
function ActualizarEstadosCuentaComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function ActualizarEstadosCuentaComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.actualizarEstadosDeCuenta());
    });
    \u0275\u0275text(1, "Actualizar estados de cuenta");
    \u0275\u0275elementEnd();
  }
}
var _ActualizarEstadosCuentaComponent = class _ActualizarEstadosCuentaComponent {
  constructor() {
    this.progress = 0;
    this.creditos = [];
    this.progressActualizacion = 0;
    this.creditoController = inject(CreditoService);
    this.consolidadoBasico = inject(ConsolidadoBasicoService);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.consolidadoBasico.progress$.subscribe((p) => {
        this.progress = p;
      });
      this.creditos = yield this.consolidadoBasico.fetchData();
    });
  }
  actualizarEstadosDeCuenta() {
    this.creditoController.actualizarEstadosCuentaMasivaLocal(this.creditos);
  }
};
_ActualizarEstadosCuentaComponent.\u0275fac = function ActualizarEstadosCuentaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ActualizarEstadosCuentaComponent)();
};
_ActualizarEstadosCuentaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActualizarEstadosCuentaComponent, selectors: [["app-actualizar-estados-cuenta"]], decls: 5, vars: 2, consts: [[1, "container-fluid", "p-3", "my-1", "rounded", "bg-white", "shadow"], ["title", "Descargando datos de creditos", 3, "progress", "isLoading"], [1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "click"]], template: function ActualizarEstadosCuentaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4");
    \u0275\u0275text(2, "Actualizacion masiva de estados de cuenta al d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ActualizarEstadosCuentaComponent_Conditional_3_Template, 1, 2, "app-progress-bar-consolidado", 1);
    \u0275\u0275conditionalCreate(4, ActualizarEstadosCuentaComponent_Conditional_4_Template, 2, 0, "button", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.creditos.length ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.creditos.length ? 4 : -1);
  }
}, dependencies: [ProgressBarConsolidadoComponent], encapsulation: 2 });
var ActualizarEstadosCuentaComponent = _ActualizarEstadosCuentaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActualizarEstadosCuentaComponent, [{
    type: Component,
    args: [{ selector: "app-actualizar-estados-cuenta", imports: [ProgressBarConsolidadoComponent], template: '<div class="container-fluid p-3 my-1 rounded bg-white shadow">\n    <h4>Actualizacion masiva de estados de cuenta al d\xEDa</h4>\n    @if (!creditos.length) {\n    <app-progress-bar-consolidado title="Descargando datos de creditos" [progress]="progress"\n        [isLoading]="true"></app-progress-bar-consolidado>\n    }\n\n    @if (creditos.length) {\n    <button class="btn btn-primary" (click)="actualizarEstadosDeCuenta()">Actualizar estados de cuenta</button>\n    }\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActualizarEstadosCuentaComponent, { className: "ActualizarEstadosCuentaComponent", filePath: "src/app/configuracion/actualizar-estados-cuenta/actualizar-estados-cuenta.component.ts", lineNumber: 13 });
})();

// src/app/configuracion/configuracion-historico/components/configuracion-card/configuracion-card.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.value;
var _forTrack2 = ($index, $item) => $item.columna;
function ConfiguracionCardComponent_Conditional_0_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
    \u0275\u0275text(1, " Copiando... ");
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 25);
    \u0275\u0275text(1, "Copiar JSON ");
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 8)(1, "li")(2, "button", 17);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Conditional_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEditConfig());
    });
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275text(4, "Editar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li")(6, "button", 17);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Conditional_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCloneConfig());
    });
    \u0275\u0275element(7, "i", 19);
    \u0275\u0275text(8, "Clonar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "li")(10, "button", 20);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Conditional_11_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copiarJSONAlPortapapeles());
    });
    \u0275\u0275conditionalCreate(11, ConfiguracionCardComponent_Conditional_0_Conditional_11_Conditional_11_Template, 2, 0)(12, ConfiguracionCardComponent_Conditional_0_Conditional_11_Conditional_12_Template, 2, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275element(14, "hr", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "button", 22);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Conditional_11_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeleteConfig());
    });
    \u0275\u0275element(17, "i", 23);
    \u0275\u0275text(18, "Eliminar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.copiandoJSON);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.copiandoJSON ? 11 : 12);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_12_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Conditional_12_For_3_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleViewSelector());
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ConfiguracionCardComponent_Conditional_0_Conditional_12_For_3_Conditional_3_Template, 2, 0, "span", 30);
  }
  if (rf & 2) {
    const view_r5 = ctx.$implicit;
    const \u0275$index_67_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.generarViewId(view_r5.name) === ctx_r1.config.configuracion.defaultViewId);
    \u0275\u0275property("title", view_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.abreviarTexto(view_r5.name, 50), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_67_r6 < ctx_r1.config.configuracion.finalViews.length - 1 ? 3 : -1);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const view_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", ctx_r1.generarViewId(view_r8.name))("title", view_r8.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.abreviarNombreVista(view_r8.name), " ");
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "label", 34);
    \u0275\u0275text(3, " Vista predeterminada: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 37);
    \u0275\u0275listener("change", function ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_Conditional_2_Template_select_change_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.actualizarVistaPorDefecto(ctx_r1.config, $event.target.value));
    });
    \u0275\u0275elementStart(5, "option", 38);
    \u0275\u0275text(6, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_Conditional_2_For_8_Template, 2, 3, "option", 39, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.config.configuracion.defaultViewId);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.config.configuracion.finalViews);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_For_9_Template_button_click_0_listener() {
      const opcion_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.actualizarModoVisualizacion(ctx_r1.config, opcion_r10.value));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opcion_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.getModoVisualizacion(ctx_r1.config) === opcion_r10.value);
    \u0275\u0275property("title", opcion_r10.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", opcion_r10.icon));
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 31);
    \u0275\u0275conditionalCreate(2, ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_Conditional_2_Template, 9, 1, "div", 32);
    \u0275\u0275elementStart(3, "div", 32)(4, "div", 33)(5, "label", 34);
    \u0275\u0275text(6, " Visualizaci\xF3n: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35);
    \u0275\u0275repeaterCreate(8, ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_For_9_Template, 2, 6, "button", 36, _forTrack1);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.config.configuracion.finalViews && ctx_r1.config.configuracion.finalViews.length > 0 ? 2 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.getOpcionesModoVisualizacion());
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 26);
    \u0275\u0275repeaterCreate(2, ConfiguracionCardComponent_Conditional_0_Conditional_12_For_3_Template, 4, 5, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ConfiguracionCardComponent_Conditional_0_Conditional_12_Conditional_4_Template, 10, 1, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.config.configuracion.finalViews);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showViewSelector() ? 4 : -1);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_13_Conditional_7_For_2_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementEnd();
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_13_Conditional_7_For_2_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, ConfiguracionCardComponent_Conditional_0_Conditional_13_Conditional_7_For_2_For_6_Conditional_2_Template, 2, 0, "span", 50);
  }
  if (rf & 2) {
    const condicion_r12 = ctx.$implicit;
    const \u0275$index_138_r13 = ctx.$index;
    const \u0275$count_138_r14 = ctx.$count;
    const filtro_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", "Condici\xF3n de " + filtro_r15.columna);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", condicion_r12, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_138_r13 === \u0275$count_138_r14 - 1) && filtro_r15.esMultiple ? 2 : -1);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_13_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 47);
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, ConfiguracionCardComponent_Conditional_0_Conditional_13_Conditional_7_For_2_For_6_Template, 3, 3, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filtro_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, filtro_r15.columna), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(filtro_r15.filtros);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275repeaterCreate(1, ConfiguracionCardComponent_Conditional_0_Conditional_13_Conditional_7_For_2_Template, 7, 3, "div", 46, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getFiltrosFormateados(ctx_r1.config));
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "small", 41);
    \u0275\u0275element(2, "i", 42);
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4, "Filtros:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Conditional_13_Template_span_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFilterDetails());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, ConfiguracionCardComponent_Conditional_0_Conditional_13_Conditional_7_Template, 3, 0, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFiltrosFormateados(ctx_r1.config).length, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showFilterDetails() ? 7 : -1);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_22_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 54);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_22_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function ConfiguracionCardComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275conditionalCreate(2, ConfiguracionCardComponent_Conditional_0_Conditional_22_Conditional_2_Template, 1, 0, "i", 54)(3, ConfiguracionCardComponent_Conditional_0_Conditional_22_Conditional_3_Template, 1, 0, "i", 55);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.mensajeNotificacion.includes("Error") ? "notification-error" : "notification-success");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.mensajeNotificacion.includes("Error") ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.mensajeNotificacion);
  }
}
function ConfiguracionCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfigOptions = !ctx_r1.showConfigOptions);
    });
    \u0275\u0275element(10, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ConfiguracionCardComponent_Conditional_0_Conditional_11_Template, 19, 2, "ul", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ConfiguracionCardComponent_Conditional_0_Conditional_12_Template, 5, 1, "div", 9);
    \u0275\u0275conditionalCreate(13, ConfiguracionCardComponent_Conditional_0_Conditional_13_Template, 8, 2, "div", 9);
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "small", 12);
    \u0275\u0275element(17, "i", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 14);
    \u0275\u0275listener("click", function ConfiguracionCardComponent_Conditional_0_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditConfig());
    });
    \u0275\u0275element(20, "i", 15);
    \u0275\u0275text(21, " Abrir ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(22, ConfiguracionCardComponent_Conditional_0_Conditional_22_Template, 6, 4, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r1.config.nombre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.config.nombre || "Configuraci\xF3n #" + (ctx_r1.config.id || "Nueva"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getEstadoClass(ctx_r1.config));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEstadoConfiguracion(ctx_r1.config), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.showConfigOptions ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.config.configuracion.finalViews && ctx_r1.config.configuracion.finalViews.length > 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.getFiltrosFormateados(ctx_r1.config).length > 0 ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUltimaActualizacion(ctx_r1.config), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.mostrarNotificacion ? 22 : -1);
  }
}
var _ConfiguracionCardComponent = class _ConfiguracionCardComponent {
  constructor() {
    this.config = null;
    this.seccion = "";
    this.editRequest = new EventEmitter();
    this.cloneRequest = new EventEmitter();
    this.deleteRequest = new EventEmitter();
    this.saveConfig = new EventEmitter();
    this.showFilterDetails = signal(false);
    this.showViewSelector = signal(false);
    this.showConfigOptions = false;
    this.copiandoJSON = false;
    this.mostrarNotificacion = false;
    this.mensajeNotificacion = "";
  }
  /**
   * Obtiene las configuraciones de tablas para esta sección
   */
  get tablasDeSeccion() {
    return this.config ? [this.config] : [];
  }
  /**
   * Obtiene un texto descriptivo para la configuración
   */
  getDescripcionConfiguracion(config) {
    const numVistas = config.configuracion.finalViews?.length || 0;
    const numFiltros = Object.keys(config.configuracion.filtros || {}).length;
    return `${numVistas} vista(s) final(es), ${numFiltros} filtro(s)`;
  }
  /**
   * Obtiene el estado de la configuración
   */
  getEstadoConfiguracion(config) {
    const numVistas = config.configuracion.finalViews?.length || 0;
    return numVistas > 0 ? "Completa" : "Incompleta";
  }
  /**
   * Obtiene la clase CSS para el badge de estado
   */
  getEstadoClass(config) {
    const numVistas = config.configuracion.finalViews?.length || 0;
    const style = numVistas > 0 ? "bg-success" : "bg-warning";
    return "badge badge-sm " + style;
  }
  /**
   * Actualiza rápidamente la vista por defecto sin entrar en modo edición
   */
  actualizarVistaPorDefecto(config, viewId) {
    return __async(this, null, function* () {
      const configActualizada = JSON.parse(JSON.stringify(config));
      configActualizada.configuracion.defaultViewId = viewId;
      this.saveConfig.emit(configActualizada);
    });
  }
  /**
   * Actualiza rápidamente el modo de visualización sin entrar en modo edición
   */
  actualizarModoVisualizacion(config, mode) {
    return __async(this, null, function* () {
      try {
        const configActualizada = JSON.parse(JSON.stringify(config));
        configActualizada.configuracion.visualizationMode = mode;
        this.saveConfig.emit(configActualizada);
      } catch (error) {
        console.error("Error al actualizar modo de visualizaci\xF3n:", error);
        alert("Error al actualizar el modo de visualizaci\xF3n. Por favor, int\xE9ntelo de nuevo.");
      }
    });
  }
  /**
   * Obtiene el modo de visualización actual de una configuración
   */
  getModoVisualizacion(config) {
    return config.configuracion.visualizationMode || "tables";
  }
  /**
   * Obtiene las opciones de modo de visualización disponibles
   */
  getOpcionesModoVisualizacion() {
    return [
      { value: "tables", label: "Tablas", icon: "bi-table" },
      { value: "graphs", label: "Gr\xE1ficas", icon: "bi-graph-up" }
    ];
  }
  /**
   * Verifica si una vista final está seleccionada como por defecto
   */
  esVistaSeleccionada(config, viewName) {
    const viewId = this.generarViewId(viewName);
    return viewId === config.configuracion.defaultViewId;
  }
  /**
   * Genera un ID único para una vista final basado en su nombre
   */
  generarViewId(viewName) {
    return viewName?.toLowerCase().replace(/[^a-z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "") || "vista_" + Date.now();
  }
  /**
   * Obtiene los filtros formateados para visualización
   * Parsea filtros complejos y los retorna en formato estructurado
   */
  getFiltrosFormateados(config) {
    const filtros = config.configuracion.filtros || {};
    const resultado = [];
    Object.entries(filtros).forEach(([columna, valorFiltro]) => {
      if (valorFiltro && typeof valorFiltro === "string" && valorFiltro.trim()) {
        const filtrosParseados = this.parseFilterValue(valorFiltro);
        resultado.push({
          columna,
          filtros: filtrosParseados,
          esMultiple: filtrosParseados.length > 1
        });
      }
    });
    return resultado;
  }
  /**
   * Parsea un valor de filtro que puede contener múltiples condiciones
   * Soporta operadores | (OR) y & (AND)
   */
  parseFilterValue(filterValue) {
    if (!filterValue || !filterValue.trim()) {
      return [];
    }
    const trimmed = filterValue.trim();
    if (!trimmed.includes("|") && !trimmed.includes("&")) {
      return [trimmed];
    }
    const orGroups = trimmed.split("|").map((group) => group.trim()).filter((group) => group);
    const condiciones = [];
    orGroups.forEach((orGroup) => {
      if (orGroup.includes("&")) {
        const andConditions = orGroup.split("&").map((cond) => cond.trim()).filter((cond) => cond);
        condiciones.push(...andConditions);
      } else {
        condiciones.push(orGroup);
      }
    });
    return condiciones;
  }
  // Funciones de utilidad para la UI
  abreviarNombreVista(nombre) {
    if (!nombre)
      return "S/N";
    if (nombre.length <= 12)
      return nombre;
    const palabras = nombre.split(" ");
    if (palabras.length > 1) {
      return palabras.map((p) => p.charAt(0)).join("").toUpperCase();
    } else {
      return nombre.substring(0, 10) + "...";
    }
  }
  abreviarTexto(texto, longitudMaxima = 15) {
    if (!texto)
      return "";
    if (texto.length <= longitudMaxima)
      return texto;
    return texto.substring(0, longitudMaxima - 3) + "...";
  }
  getUltimaActualizacion(config) {
    if (!config.updated_at)
      return "Fecha no disponible";
    const ahora = /* @__PURE__ */ new Date();
    const fechaActualizacion = new Date(config.updated_at);
    if (isNaN(fechaActualizacion.getTime())) {
      return "Fecha no disponible";
    }
    const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    const fecha = new Date(fechaActualizacion.getFullYear(), fechaActualizacion.getMonth(), fechaActualizacion.getDate());
    const diferenciaMs = hoy.getTime() - fecha.getTime();
    const diferenciaDias = Math.floor(diferenciaMs / (1e3 * 60 * 60 * 24));
    if (diferenciaDias === 0) {
      return "Hoy";
    } else if (diferenciaDias === 1) {
      return "Ayer";
    } else if (diferenciaDias > 1 && diferenciaDias <= 7) {
      return `Hace ${diferenciaDias} d\xEDas`;
    } else {
      return fechaActualizacion.toLocaleDateString();
    }
  }
  // Manejadores de eventos
  onEditConfig() {
    if (this.config) {
      this.editRequest.emit(this.config);
    }
  }
  onCloneConfig() {
    if (this.config) {
      this.cloneRequest.emit(this.config);
    }
  }
  onDeleteConfig() {
    if (this.config) {
      this.deleteRequest.emit(this.config);
    }
  }
  toggleFilterDetails() {
    this.showFilterDetails.set(!this.showFilterDetails());
  }
  toggleViewSelector() {
    this.showViewSelector.set(!this.showViewSelector());
  }
  /**
   * Obtiene la vista final actual seleccionada como por defecto
   */
  getVistaActualPorDefecto() {
    if (!this.config?.configuracion.defaultViewId || !this.config.configuracion.finalViews) {
      return null;
    }
    return this.config.configuracion.finalViews.find((view) => this.generarViewId(view.name) === this.config.configuracion.defaultViewId);
  }
  // Métodos para la funcionalidad de Copiar JSON
  /**
   * Genera el JSON formateado de la configuración actual
   * @returns JSON string formateado con indentación
   */
  generarJSONConfiguracion() {
    if (!this.config) {
      throw new Error("No hay configuraci\xF3n disponible para generar JSON");
    }
    try {
      const configLimpia = __spreadProps(__spreadValues({}, JSON.parse(JSON.stringify(this.config))), {
        id: 0
      });
      return JSON.stringify(configLimpia, null, 2);
    } catch (error) {
      console.error("Error al generar JSON:", error);
      throw new Error("No se pudo generar el JSON de la configuraci\xF3n");
    }
  }
  /**
   * Copia el JSON de la configuración al portapapeles
   * Maneja tanto el Clipboard API moderno como fallbacks
   */
  copiarJSONAlPortapapeles() {
    return __async(this, null, function* () {
      if (!this.config || this.copiandoJSON) {
        return;
      }
      this.copiandoJSON = true;
      try {
        const jsonString = this.generarJSONConfiguracion();
        if (navigator.clipboard && window.isSecureContext) {
          yield navigator.clipboard.writeText(jsonString);
          this.mostrarNotificacionExito("JSON copiado al portapapeles");
        } else {
          this.copiarConFallback(jsonString);
          this.mostrarNotificacionExito("JSON copiado al portapapeles");
        }
        this.showConfigOptions = false;
      } catch (error) {
        console.error("Error al copiar JSON:", error);
        this.mostrarNotificacionError("No se pudo copiar el JSON. Intente nuevamente.");
      } finally {
        this.copiandoJSON = false;
      }
    });
  }
  /**
   * Método de fallback para copiar al portapapeles usando textarea oculto
   * @param text Texto a copiar
   */
  copiarConFallback(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-999999px";
    textarea.style.top = "-999999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      console.error("Error en fallback de copia:", error);
      throw new Error("No se pudo copiar el texto");
    } finally {
      document.body.removeChild(textarea);
    }
  }
  /**
   * Muestra notificación de éxito
   * @param mensaje Mensaje a mostrar
   */
  mostrarNotificacionExito(mensaje) {
    this.mensajeNotificacion = mensaje;
    this.mostrarNotificacion = true;
    setTimeout(() => {
      this.mostrarNotificacion = false;
    }, 3e3);
  }
  /**
   * Muestra notificación de error
   * @param mensaje Mensaje a mostrar
   */
  mostrarNotificacionError(mensaje) {
    this.mensajeNotificacion = mensaje;
    this.mostrarNotificacion = true;
    setTimeout(() => {
      this.mostrarNotificacion = false;
    }, 5e3);
  }
};
_ConfiguracionCardComponent.\u0275fac = function ConfiguracionCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfiguracionCardComponent)();
};
_ConfiguracionCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracionCardComponent, selectors: [["app-configuracion-card"]], inputs: { config: "config", seccion: "seccion" }, outputs: { editRequest: "editRequest", cloneRequest: "cloneRequest", deleteRequest: "deleteRequest", saveConfig: "saveConfig" }, decls: 1, vars: 1, consts: [[1, "card", "configuracion-card", "h-100", "border"], [1, "card-body", "p-3"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "card-title", "mb-0", "text-truncate", "pe-2", 3, "title"], [1, "d-flex", "align-items-center", "gap-1"], [1, "dropdown", "z-5"], ["type", "button", "aria-expanded", "false", 1, "btn", "btn-sm", "btn-link", "text-muted", "p-0", 3, "click"], [1, "bi", "bi-three-dots-vertical"], [1, "dropdown-menu", "show"], [1, "mb-2"], [1, "mt-3", "pt-2", "border-top"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "bi", "bi-clock", "me-1"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-pencil", "me-1"], [1, "json-copy-notification", "position-absolute", 3, "class"], [1, "dropdown-item", 3, "click"], [1, "bi", "bi-pencil", "me-2"], [1, "bi", "bi-files", "me-2"], [1, "dropdown-item", 3, "click", "disabled"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-trash", "me-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-clipboard", "me-2"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-1"], [1, "configuracion-controls", "mt-2", "pt-2", "border-top"], [1, "badge", "bg-secondary", "border", "small", "d-flex", "align-items-center", "text-truncate", "vista-badge", 3, "click", "title"], [1, "bi", "bi-grid-3x3-gap", "me-1"], [1, "text-muted", "small"], [1, "row", "g-2"], [1, "col-12"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "form-label", "small", "mb-0", "text-muted"], ["role", "group", 1, "btn-group", "btn-group-xs"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-xs", 3, "active", "title"], [1, "form-select", "form-select-xs", "w-auto", "d-inline-block", 3, "change", "ngModel"], ["value", ""], [3, "value", "title"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-xs", 3, "click", "title"], [1, "text-muted", "d-flex", "align-items-center", "mb-1"], [1, "bi", "bi-funnel", "me-1"], [1, "me-1"], ["title", "Click para mostrar/ocultar detalles", 1, "badge", "bg-secondary", "rounded-pill", "small", "filter-badge", "clickable", 3, "click"], [1, "filtros-compactos"], [1, "mb-2", "filtro-item"], [1, "badge", "bg-secondary", "filtro-columna", "me-1"], [1, "bi", "bi-tag-fill", "me-1"], [1, "badge", "bg-info", "text-dark", "filtro-condicion", "me-1", 3, "title"], [1, "text-muted", "me-1"], [1, "bi", "bi-plus"], [1, "json-copy-notification", "position-absolute"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "bi", "bi-check-circle", "me-2"]], template: function ConfiguracionCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfiguracionCardComponent_Conditional_0_Template, 23, 10, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.config ? 0 : -1);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, TitleCasePipe], styles: ['\n\n.configuracion-card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  border: 1px solid #e0e0e0 !important;\n}\n.configuracion-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n  border-color: var(--primary) !important;\n}\n.configuracion-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.badge-sm[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  padding: 0.25rem 0.5rem;\n}\n.configuracion-controls[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.configuracion-controls[_ngcontent-%COMP%]   .form-select-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.125rem 1.5rem 0.125rem 0.5rem;\n  height: calc(1.5em + 0.25rem);\n}\n.configuracion-controls[_ngcontent-%COMP%]   .btn-group-xs[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.125rem 0.375rem;\n  line-height: 1.2;\n}\n.filtros-compactos[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.2rem 0.4rem;\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n@media (max-width: 576px) {\n  .configuracion-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .configuracion-controls[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n  .configuracion-controls[_ngcontent-%COMP%]   .d-flex.justify-content-between[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n  .configuracion-controls[_ngcontent-%COMP%]   .form-select-xs[_ngcontent-%COMP%], \n   .configuracion-controls[_ngcontent-%COMP%]   .btn-group-xs[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.configuracion-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease-out;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e0e0e0;\n}\n.filtros-aplicados[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-radius: 0.375rem;\n  padding: 0.75rem;\n  border: 1px solid #e9ecef;\n}\n.filtro-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem;\n  line-height: 1.4;\n}\n.filtro-columna[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding: 0.375rem 0.5rem;\n  background-color: #6c757d !important;\n  border: 1px solid #5a6268;\n  text-transform: capitalize;\n  display: inline-flex;\n  align-items: center;\n}\n.filtro-columna[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  margin-right: 0.25rem;\n}\n.filtro-condicion[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.4rem;\n  background-color: #f8f9fa !important;\n  border: 1px solid #dee2e6;\n  color: #495057 !important;\n  font-family: "Courier New", monospace;\n  font-weight: 500;\n  cursor: help;\n  transition: all 0.15s ease-in-out;\n}\n.filtro-condicion[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef !important;\n  border-color: #adb5bd;\n  transform: translateY(-1px);\n}\n.filtro-item[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0 0.125rem;\n}\n.filtro-item[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.filtro-item[_ngcontent-%COMP%]:has(.filtro-condicion:nth-child(3)) {\n  border-left: 3px solid #28a745;\n  padding-left: 0.5rem;\n  margin-left: 0.25rem;\n}\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n.clickable[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.vista-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  border: 1px solid transparent;\n}\n.vista-badge[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.vista-badge.selected[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.vista-selector[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  padding: 0.5rem;\n  margin-top: 0.25rem;\n}\n.filter-badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n.filter-badge[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268 !important;\n  transform: scale(1.05);\n}\n.json-copy-notification[_ngcontent-%COMP%] {\n  top: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1050;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n.json-copy-notification.notification-success[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  border: 1px solid #badbcc;\n  color: #0f5132;\n}\n.json-copy-notification.notification-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 1px solid #f5c2c7;\n  color: #842029;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n}\n.dropdown-item[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.dropdown-item[_ngcontent-%COMP%]:disabled:hover {\n  background-color: transparent !important;\n}\n.configuracion-card[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n/*# sourceMappingURL=configuracion-card.component.css.map */'] });
var ConfiguracionCardComponent = _ConfiguracionCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracionCardComponent, [{
    type: Component,
    args: [{ selector: "app-configuracion-card", imports: [FormsModule, TitleCasePipe], template: `@if (config) {
<div class="card configuracion-card h-100 border">
  <div class="card-body p-3">
    <!-- Header compacto -->
    <div class="d-flex justify-content-between align-items-start mb-2">
      <h6 class="card-title mb-0 text-truncate pe-2" [title]="config.nombre">
        {{ config.nombre || ('Configuraci\xF3n #' + (config.id || 'Nueva')) }}
      </h6>
      <div class="d-flex align-items-center gap-1">
        <span [class]="getEstadoClass(config)">
          {{ getEstadoConfiguracion(config) }}
        </span>
        <div class="dropdown z-5">
          <button class="btn btn-sm btn-link text-muted p-0" type="button"
            (click)="showConfigOptions=!showConfigOptions" aria-expanded="false">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          @if (showConfigOptions) {
          <ul class="dropdown-menu show">
            <li>
              <button class="dropdown-item" (click)="onEditConfig()">
                <i class="bi bi-pencil me-2"></i>Editar
              </button>
            </li>
            <li>
              <button class="dropdown-item" (click)="onCloneConfig()">
                <i class="bi bi-files me-2"></i>Clonar
              </button>
            </li>
            <li>
              <button class="dropdown-item" (click)="copiarJSONAlPortapapeles()" [disabled]="copiandoJSON">
                @if (copiandoJSON) {
                  <span class="spinner-border spinner-border-sm me-2" role="status"></span>
                  Copiando...
                } @else {
                  <i class="bi bi-clipboard me-2"></i>Copiar JSON
                }
              </button>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <button class="dropdown-item text-danger" (click)="onDeleteConfig()">
                <i class="bi bi-trash me-2"></i>Eliminar
              </button>
            </li>
          </ul>
          }
        </div>
      </div>
    </div>

    <!-- Vistas finales abreviadas -->
    @if (config.configuracion.finalViews && config.configuracion.finalViews.length > 0) {
    <div class="mb-2">
      <div class="d-flex align-items-center flex-wrap gap-1">
        @for (view of config.configuracion.finalViews; track view.name; let i = $index) {
        <span class="badge bg-secondary border small d-flex align-items-center text-truncate vista-badge"
          [class.selected]="generarViewId(view.name) === config.configuracion.defaultViewId" [title]="view.name"
          (click)="toggleViewSelector()">
          <i class="bi bi-grid-3x3-gap me-1"></i>
          {{ abreviarTexto(view.name, 50) }}
        </span>
        @if (i < config.configuracion.finalViews.length - 1) { <span class="text-muted small">\u2022</span>
          }
          }
      </div>

      <!-- Selector de vista por defecto (solo visible cuando se hace click) -->
      @if (showViewSelector()) {
      <!-- Controles r\xE1pidos optimizados -->
      <div class="configuracion-controls mt-2 pt-2 border-top">
        <div class="row g-2">
          <!-- Selector de vista por defecto compacto -->
          @if (config.configuracion.finalViews && config.configuracion.finalViews.length > 0) {
          <div class="col-12">
            <div class="d-flex align-items-center justify-content-between">
              <label class="form-label small mb-0 text-muted">
                Vista predeterminada:
              </label>
              <select class="form-select form-select-xs w-auto d-inline-block"
                [ngModel]="config.configuracion.defaultViewId"
                (change)="actualizarVistaPorDefecto(config, $any($event.target).value)">
                <option value="">-</option>
                @for (view of config.configuracion.finalViews; track view.name) {
                <option [value]="generarViewId(view.name)" [title]="view.name">
                  {{ abreviarNombreVista(view.name) }}
                </option>
                }
              </select>
            </div>
          </div>
          }

          <!-- Modo visualizaci\xF3n compacto -->
          <div class="col-12">
            <div class="d-flex align-items-center justify-content-between">
              <label class="form-label small mb-0 text-muted">
                Visualizaci\xF3n:
              </label>
              <div class="btn-group btn-group-xs" role="group">
                @for (opcion of getOpcionesModoVisualizacion(); track opcion.value) {
                <button type="button" class="btn btn-outline-secondary btn-xs"
                  [class.active]="getModoVisualizacion(config) === opcion.value"
                  (click)="actualizarModoVisualizacion(config, opcion.value)" [title]="opcion.label">
                  <i class="bi {{ opcion.icon }}"></i>
                </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
    }

    <!-- Filtros en formato ultra compacto -->
    @if (getFiltrosFormateados(config).length > 0) {
    <div class="mb-2">
      <small class="text-muted d-flex align-items-center mb-1">
        <i class="bi bi-funnel me-1"></i>
        <span class="me-1">Filtros:</span>
        <span class="badge bg-secondary rounded-pill small filter-badge clickable" (click)="toggleFilterDetails()"
          title="Click para mostrar/ocultar detalles">
          {{ getFiltrosFormateados(config).length }}
        </span>
      </small>
      @if (showFilterDetails()) {
      <div class="filtros-compactos">
        @for (filtro of getFiltrosFormateados(config); track filtro.columna) {
        <div class="mb-2 filtro-item">
          <span class="badge bg-secondary filtro-columna me-1">
            <i class="bi bi-tag-fill me-1"></i>{{ filtro.columna | titlecase }}
          </span>
          @for (condicion of filtro.filtros; track condicion; let last = $last) {
          <span class="badge bg-info text-dark filtro-condicion me-1" [title]="'Condici\xF3n de ' + filtro.columna">
            {{ condicion }}
          </span>
          @if (!last && filtro.esMultiple) {
          <span class="text-muted me-1">
            <i class="bi bi-plus"></i>
          </span>
          }
          }
        </div>
        }
      </div>
      }
    </div>
    }

    <!-- Acciones principales -->
    <div class="mt-3 pt-2 border-top">
      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">
          <i class="bi bi-clock me-1"></i>
          {{ getUltimaActualizacion(config) }}
        </small>
        <button class="btn btn-primary btn-sm" (click)="onEditConfig()">
          <i class="bi bi-pencil me-1"></i> Abrir
        </button>
      </div>
    </div>
  </div>

  <!-- Notificaci\xF3n de copia JSON -->
  @if (mostrarNotificacion) {
  <div class="json-copy-notification position-absolute"
       [class]="mensajeNotificacion.includes('Error') ? 'notification-error' : 'notification-success'">
    <div class="d-flex align-items-center">
      @if (mensajeNotificacion.includes('Error')) {
        <i class="bi bi-exclamation-triangle me-2"></i>
      } @else {
        <i class="bi bi-check-circle me-2"></i>
      }
      <span>{{ mensajeNotificacion }}</span>
    </div>
  </div>
  }
</div>
}`, styles: ['/* src/app/configuracion/configuracion-historico/components/configuracion-card/configuracion-card.component.css */\n.configuracion-card {\n  transition: all 0.2s ease-in-out;\n  border: 1px solid #e0e0e0 !important;\n}\n.configuracion-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n  border-color: var(--primary) !important;\n}\n.configuracion-card .card-body {\n  padding: 1rem;\n}\n.badge-sm {\n  font-size: 0.65rem;\n  padding: 0.25rem 0.5rem;\n}\n.configuracion-controls {\n  font-size: 0.8rem;\n}\n.configuracion-controls .form-select-xs {\n  font-size: 0.75rem;\n  padding: 0.125rem 1.5rem 0.125rem 0.5rem;\n  height: calc(1.5em + 0.25rem);\n}\n.configuracion-controls .btn-group-xs .btn {\n  font-size: 0.7rem;\n  padding: 0.125rem 0.375rem;\n  line-height: 1.2;\n}\n.filtros-compactos .badge {\n  font-size: 0.7rem;\n  padding: 0.2rem 0.4rem;\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.form-label {\n  font-size: 0.8rem;\n}\n@media (max-width: 576px) {\n  .configuracion-card .card-body {\n    padding: 0.75rem;\n  }\n  .configuracion-controls .row > div {\n    margin-bottom: 0.5rem;\n  }\n  .configuracion-controls .d-flex.justify-content-between {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n  .configuracion-controls .form-select-xs,\n  .configuracion-controls .btn-group-xs {\n    align-self: flex-end;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.configuracion-card {\n  animation: fadeInUp 0.3s ease-out;\n}\n.dropdown-toggle::after {\n  display: none;\n}\n.dropdown-menu {\n  font-size: 0.875rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e0e0e0;\n}\n.filtros-aplicados {\n  background-color: #f8f9fa;\n  border-radius: 0.375rem;\n  padding: 0.75rem;\n  border: 1px solid #e9ecef;\n}\n.filtro-item {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.25rem;\n  line-height: 1.4;\n}\n.filtro-columna {\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding: 0.375rem 0.5rem;\n  background-color: #6c757d !important;\n  border: 1px solid #5a6268;\n  text-transform: capitalize;\n  display: inline-flex;\n  align-items: center;\n}\n.filtro-columna i {\n  font-size: 0.65rem;\n  margin-right: 0.25rem;\n}\n.filtro-condicion {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.4rem;\n  background-color: #f8f9fa !important;\n  border: 1px solid #dee2e6;\n  color: #495057 !important;\n  font-family: "Courier New", monospace;\n  font-weight: 500;\n  cursor: help;\n  transition: all 0.15s ease-in-out;\n}\n.filtro-condicion:hover {\n  background-color: #e9ecef !important;\n  border-color: #adb5bd;\n  transform: translateY(-1px);\n}\n.filtro-item .text-muted {\n  font-size: 0.8rem;\n  margin: 0 0.125rem;\n}\n.filtro-item .text-muted i {\n  font-size: 0.7rem;\n}\n.filtro-item:has(.filtro-condicion:nth-child(3)) {\n  border-left: 3px solid #28a745;\n  padding-left: 0.5rem;\n  margin-left: 0.25rem;\n}\n.clickable {\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n.clickable:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.vista-badge {\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  border: 1px solid transparent;\n}\n.vista-badge:hover {\n  transform: translateY(-1px);\n}\n.vista-badge.selected {\n  color: white !important;\n}\n.vista-selector {\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 0.375rem;\n  padding: 0.5rem;\n  margin-top: 0.25rem;\n}\n.filter-badge {\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n.filter-badge:hover {\n  background-color: #5a6268 !important;\n  transform: scale(1.05);\n}\n.json-copy-notification {\n  top: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1050;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  animation: slideDown 0.3s ease-out;\n}\n.json-copy-notification.notification-success {\n  background-color: #d1e7dd;\n  border: 1px solid #badbcc;\n  color: #0f5132;\n}\n.json-copy-notification.notification-error {\n  background-color: #f8d7da;\n  border: 1px solid #f5c2c7;\n  color: #842029;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n}\n.dropdown-item:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.dropdown-item:disabled:hover {\n  background-color: transparent !important;\n}\n.configuracion-card {\n  position: relative !important;\n}\n/*# sourceMappingURL=configuracion-card.component.css.map */\n'] }]
  }], () => [], { config: [{
    type: Input
  }], seccion: [{
    type: Input
  }], editRequest: [{
    type: Output
  }], cloneRequest: [{
    type: Output
  }], deleteRequest: [{
    type: Output
  }], saveConfig: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracionCardComponent, { className: "ConfiguracionCardComponent", filePath: "src/app/configuracion/configuracion-historico/components/configuracion-card/configuracion-card.component.ts", lineNumber: 12 });
})();

// src/app/utils/tabla-configurada.utils.ts
function isValidVisualizationMode(value) {
  return value === "tables" || value === "graphs";
}
function isValidTablaConfig(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (!Array.isArray(obj.finalViews)) {
    return false;
  }
  if (!Array.isArray(obj.crossTabConfigs)) {
    return false;
  }
  if (!obj.filtros || typeof obj.filtros !== "object") {
    return false;
  }
  if (obj.defaultViewId !== void 0 && obj.defaultViewId !== null) {
    if (typeof obj.defaultViewId !== "string") {
      return false;
    }
  }
  if (obj.visualizationMode !== void 0 && obj.visualizationMode !== null) {
    if (!isValidVisualizationMode(obj.visualizationMode)) {
      return false;
    }
  }
  return true;
}
function isValidPartialTablaConfigurada(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (obj.nombre !== void 0 && typeof obj.nombre !== "string") {
    return false;
  }
  if (obj.seccion !== void 0 && typeof obj.seccion !== "string") {
    return false;
  }
  if (!obj.configuracion || !isValidTablaConfig(obj.configuracion)) {
    return false;
  }
  return true;
}
function parseAndValidateTablaConfigurada(jsonString) {
  const errors = [];
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== "object") {
      errors.push("El JSON debe ser un objeto v\xE1lido");
      return { isValid: false, errors };
    }
    if (!isValidPartialTablaConfigurada(parsed)) {
      errors.push("El JSON no tiene la estructura v\xE1lida de TablaConfigurada");
      if (parsed.configuracion === void 0) {
        errors.push("Falta el campo requerido: configuracion");
      } else if (!isValidTablaConfig(parsed.configuracion)) {
        errors.push("El campo configuracion no tiene la estructura v\xE1lida");
        if (!Array.isArray(parsed.configuracion.finalViews)) {
          errors.push("configuracion.finalViews debe ser un array");
        }
        if (!Array.isArray(parsed.configuracion.crossTabConfigs)) {
          errors.push("configuracion.crossTabConfigs debe ser un array");
        }
        if (!parsed.configuracion.filtros || typeof parsed.configuracion.filtros !== "object") {
          errors.push("configuracion.filtros debe ser un objeto");
        }
      }
      if (parsed.nombre !== void 0 && typeof parsed.nombre !== "string") {
        errors.push("El campo nombre debe ser un string");
      }
      if (parsed.seccion !== void 0 && typeof parsed.seccion !== "string") {
        errors.push("El campo seccion debe ser un string");
      }
      return { isValid: false, errors };
    }
    return { isValid: true, data: parsed, errors };
  } catch (error) {
    if (error instanceof SyntaxError) {
      errors.push("JSON inv\xE1lido: " + error.message);
    } else {
      errors.push("Error al procesar el JSON: " + error.message);
    }
    return { isValid: false, errors };
  }
}
function normalizarTablaConfigurada(parcial, seccionActual) {
  const ahora = (/* @__PURE__ */ new Date()).toISOString();
  return {
    // Campos del servidor (se generan automáticamente)
    id: 0,
    created_at: ahora,
    updated_at: ahora,
    // Campos del usuario (con valores por defecto si faltan)
    nombre: parcial.nombre || `Configuraci\xF3n importada ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`,
    seccion: seccionActual,
    // Configuración (con valores por defecto si faltan)
    configuracion: __spreadProps(__spreadValues({}, parcial.configuracion), {
      defaultViewId: parcial.configuracion?.defaultViewId || void 0,
      visualizationMode: parcial.configuracion?.visualizationMode || "tables"
    })
  };
}
function generarJSONEjemplo() {
  const ejemplo = {
    nombre: "Ejemplo de configuraci\xF3n",
    configuracion: {
      finalViews: [
        {
          name: "Vista de ejemplo",
          type: "table",
          columns: ["columna1", "columna2"]
        }
      ],
      crossTabConfigs: [],
      filtros: {
        "columna1": "valor_ejemplo"
      },
      defaultViewId: null,
      visualizationMode: "tables"
    }
  };
  return JSON.stringify(ejemplo, null, 2);
}

// src/app/configuracion/configuracion-historico/components/configuracion-tablas-seccion/configuracion-tablas-seccion.component.ts
var _c05 = () => [];
var _c12 = () => ({});
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.name;
function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Conditional_22_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const error_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(error_r4);
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h6", 34);
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275text(3, " Errores de validaci\xF3n: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 16);
    \u0275\u0275repeaterCreate(5, ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Conditional_22_For_6_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.erroresImportacion());
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 36);
    \u0275\u0275text(1, " Procesando... ");
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 37);
    \u0275\u0275text(1, " Validar y Crear ");
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 14)(2, "div", 15)(3, "h6", 16);
    \u0275\u0275element(4, "i", 17);
    \u0275\u0275text(5, " Importar Configuraci\xF3n desde JSON ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleImportacion());
    });
    \u0275\u0275element(7, "i", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 20)(9, "div", 2)(10, "div", 3)(11, "div", 21)(12, "label", 22);
    \u0275\u0275element(13, "i", 23);
    \u0275\u0275text(14, " Pegue el JSON de la configuraci\xF3n: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.jsonImportacion, $event) || (ctx_r1.jsonImportacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(16, "                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "small", 25);
    \u0275\u0275text(18, " El JSON debe tener la estructura de una TablaConfigurada v\xE1lida. ");
    \u0275\u0275elementStart(19, "a", 26);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.jsonImportacion.set(ctx_r1.getJSONEjemplo()));
    });
    \u0275\u0275element(20, "i", 27);
    \u0275\u0275text(21, "Ver ejemplo ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Conditional_22_Template, 7, 0, "div", 28);
    \u0275\u0275elementStart(23, "div", 15)(24, "div")(25, "small", 29);
    \u0275\u0275element(26, "i", 30);
    \u0275\u0275text(27, " Se validar\xE1 la estructura del JSON y se crear\xE1 una nueva configuraci\xF3n ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 6)(29, "button", 31);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.limpiarImportacion());
    });
    \u0275\u0275element(30, "i", 32);
    \u0275\u0275text(31, " Limpiar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 33);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validarYCrearDesdeJSON());
    });
    \u0275\u0275conditionalCreate(33, ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Conditional_33_Template, 2, 0)(34, ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Conditional_34_Template, 2, 0);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jsonImportacion);
    \u0275\u0275property("disabled", ctx_r1.procesandoImportacion());
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.hayErroresImportacion() ? 22 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.procesandoImportacion());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.procesandoImportacion() || !ctx_r1.jsonImportacion().trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.procesandoImportacion() ? 33 : 34);
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "div")(3, "p", 39);
    \u0275\u0275text(4, "No hay configuraciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6, "Cree una nueva configuraci\xF3n para comenzar");
    \u0275\u0275elementEnd()()();
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "app-configuracion-card", 42);
    \u0275\u0275listener("editRequest", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_14_For_2_Template_app_configuracion_card_editRequest_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editarConfiguracion($event));
    })("cloneRequest", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_14_For_2_Template_app_configuracion_card_cloneRequest_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clonarConfiguracion($event));
    })("deleteRequest", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_14_For_2_Template_app_configuracion_card_deleteRequest_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.eliminarConfiguracion($event));
    })("saveConfig", function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_14_For_2_Template_app_configuracion_card_saveConfig_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveTablaConfiguracion.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const config_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("config", config_r6)("seccion", ctx_r1.seccion);
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_14_For_2_Template, 2, 2, "div", 41, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tablasDeSeccion);
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3)(2, "div", 4)(3, "h5", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "button", 7);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleImportacion());
    });
    \u0275\u0275element(7, "i", 8);
    \u0275\u0275text(8, " Importar JSON ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 9);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.crearNuevaConfiguracion());
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, " Nueva ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_12_Template, 35, 6, "div", 11);
    \u0275\u0275conditionalCreate(13, ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_13_Template, 7, 0, "div", 12)(14, ConfiguracionTablasSeccionComponent_Conditional_1_Conditional_14_Template, 3, 0, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Configuraciones - ", ctx_r1.seccion);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.mostrarImportacion() ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tablasDeSeccion.length === 0 ? 13 : 14);
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2, " Nombre requerido ");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_25_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_25_For_6_Template_button_click_0_listener() {
      const view_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.seleccionarVistaPorDefecto(view_r9.name));
    });
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const view_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn-primary", ctx_r1.esVistaSeleccionada(ctx_r1.configuracionEditando(), view_r9.name))("btn-outline-secondary", !ctx_r1.esVistaSeleccionada(ctx_r1.configuracionEditando(), view_r9.name));
    \u0275\u0275property("title", view_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.abreviarNombreVista(view_r9.name), " ");
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 63)(2, "small", 64);
    \u0275\u0275element(3, "i", 65);
    \u0275\u0275text(4, "Vista predeterminada: ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_25_For_6_Template, 3, 6, "button", 66, _forTrack12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.configuracionEditando().configuracion.finalViews);
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementStart(2, "div")(3, "p", 39);
    \u0275\u0275text(4, "Configuraci\xF3n incompleta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, "Debe configurar al menos una vista final antes de guardar.");
    \u0275\u0275elementEnd()()();
  }
}
function ConfiguracionTablasSeccionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 43)(3, "div", 44)(4, "div", 45)(5, "div", 46)(6, "h5", 47);
    \u0275\u0275element(7, "i", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 29);
    \u0275\u0275text(10, " Configure las vistas finales, tablas cruzadas y filtros para esta secci\xF3n ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "button", 49);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarConfiguracion());
    });
    \u0275\u0275element(13, "i", 50);
    \u0275\u0275text(14, " Guardar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 7);
    \u0275\u0275listener("click", function ConfiguracionTablasSeccionComponent_Conditional_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelarEdicion());
    });
    \u0275\u0275element(16, "i", 51);
    \u0275\u0275text(17, " Cancelar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 52)(19, "div", 53)(20, "label", 54);
    \u0275\u0275element(21, "i", 55);
    \u0275\u0275text(22, " Nombre de configuraci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionTablasSeccionComponent_Conditional_2_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nombreConfiguracion, $event) || (ctx_r1.nombreConfiguracion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_24_Template, 3, 0, "div", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_25_Template, 7, 0, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 59);
    \u0275\u0275conditionalCreate(27, ConfiguracionTablasSeccionComponent_Conditional_2_Conditional_27_Template, 7, 0, "div", 60);
    \u0275\u0275elementStart(28, "app-informe-tabla-dinamica-local", 61);
    \u0275\u0275twoWayListener("filterBasedConfigsChange", function ConfiguracionTablasSeccionComponent_Conditional_2_Template_app_informe_tabla_dinamica_local_filterBasedConfigsChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.configuracionEditando().configuracion.filterBasedConfigs, $event) || (ctx_r1.configuracionEditando().configuracion.filterBasedConfigs = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("crossTabConfigsChange", function ConfiguracionTablasSeccionComponent_Conditional_2_Template_app_informe_tabla_dinamica_local_crossTabConfigsChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCrossTabConfigsChange($event));
    })("finalViewsChange", function ConfiguracionTablasSeccionComponent_Conditional_2_Template_app_informe_tabla_dinamica_local_finalViewsChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFinalViewsChange($event));
    })("filtradoMapChange", function ConfiguracionTablasSeccionComponent_Conditional_2_Template_app_informe_tabla_dinamica_local_filtradoMapChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFiltradoMapChange($event));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" Editando configuraci\xF3n - ", ctx_r1.seccion, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.nombreConfiguracion.trim() || !((tmp_2_0 = ctx_r1.configuracionEditando()) == null ? null : tmp_2_0.configuracion == null ? null : tmp_2_0.configuracion.finalViews == null ? null : tmp_2_0.configuracion.finalViews.length));
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nombreConfiguracion);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.nombreConfiguracion.trim() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.configuracionEditando() && ctx_r1.configuracionEditando().configuracion && ctx_r1.configuracionEditando().configuracion.finalViews && ctx_r1.configuracionEditando().configuracion.finalViews.length > 0 ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_6_0 = ctx_r1.configuracionEditando()) == null ? null : tmp_6_0.configuracion == null ? null : tmp_6_0.configuracion.finalViews == null ? null : tmp_6_0.configuracion.finalViews.length) ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("crossTabConfigs", ((tmp_7_0 = ctx_r1.configuracionEditando()) == null ? null : tmp_7_0.configuracion == null ? null : tmp_7_0.configuracion.crossTabConfigs) || \u0275\u0275pureFunction0(11, _c05))("finalViews", ((tmp_8_0 = ctx_r1.configuracionEditando()) == null ? null : tmp_8_0.configuracion == null ? null : tmp_8_0.configuracion.finalViews) || \u0275\u0275pureFunction0(12, _c05))("data", ctx_r1.rawData)("filtradoMap", ((tmp_10_0 = ctx_r1.configuracionEditando()) == null ? null : tmp_10_0.configuracion == null ? null : tmp_10_0.configuracion.filtros) || \u0275\u0275pureFunction0(13, _c12));
    \u0275\u0275twoWayProperty("filterBasedConfigs", ctx_r1.configuracionEditando().configuracion.filterBasedConfigs);
  }
}
var _ConfiguracionTablasSeccionComponent = class _ConfiguracionTablasSeccionComponent {
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.seccion = "";
    this.tablasConfiguradas = [];
    this.rawData = [];
    this.saveTablaConfiguracion = new EventEmitter();
    this.addTablaConfiguracion = new EventEmitter();
    this.deleteTablaConfiguracion = new EventEmitter();
    this.configuracionEditando = signal(null);
    this.modoEdicion = signal(false);
    this.configuracionTemporal = null;
    this.mostrarImportacion = signal(false);
    this.jsonImportacion = signal("");
    this.erroresImportacion = signal([]);
    this.procesandoImportacion = signal(false);
  }
  // Getter y setter para el nombre de la configuración que se está editando
  get nombreConfiguracion() {
    return this.configuracionEditando()?.nombre || "";
  }
  set nombreConfiguracion(value) {
    const configActual = this.configuracionEditando();
    if (configActual) {
      configActual.nombre = value;
    }
  }
  /**
   * Obtiene las configuraciones de tablas para esta sección
   */
  get tablasDeSeccion() {
    return this.tablasConfiguradas.filter((config) => config.seccion === this.seccion);
  }
  /**
   * Inicia la edición de una configuración
   */
  editarConfiguracion(config) {
    this.configuracionTemporal = JSON.parse(JSON.stringify(config));
    this.configuracionEditando.set(this.configuracionTemporal);
    this.modoEdicion.set(true);
  }
  /**
   * Crea una nueva configuración para esta sección
   */
  crearNuevaConfiguracion() {
    const nuevaConfig = {
      seccion: this.seccion,
      configuracion: {
        finalViews: [],
        crossTabConfigs: [],
        filterBasedConfigs: [],
        filtros: {},
        defaultViewId: void 0
      },
      nombre: "",
      id: 0,
      created_at: ""
    };
    this.configuracionTemporal = nuevaConfig;
    this.configuracionEditando.set(this.configuracionTemporal);
    this.modoEdicion.set(true);
  }
  /**
   * Guarda la configuración actual
   */
  guardarConfiguracion() {
    const configActual = this.configuracionEditando();
    if (!configActual)
      return;
    if (!configActual.nombre || configActual.nombre.trim() === "") {
      alert("Debe especificar un nombre para la configuraci\xF3n antes de guardar.");
      return;
    }
    if (!configActual.configuracion.finalViews || configActual.configuracion.finalViews.length === 0) {
      alert("Debe configurar al menos una vista final antes de guardar.");
      return;
    }
    this.saveTablaConfiguracion.emit(configActual);
    this.cancelarEdicion();
  }
  /**
   * Cancela la edición actual
   */
  cancelarEdicion() {
    this.configuracionEditando.set(null);
    this.modoEdicion.set(false);
    this.configuracionTemporal = null;
  }
  /**
   * Elimina una configuración con confirmación
   */
  eliminarConfiguracion(config) {
    return __async(this, null, function* () {
      const dialogRef = this.dialogService.show({
        title: "Confirmar Eliminaci\xF3n",
        body: `\xBFEst\xE1 seguro de eliminar la configuraci\xF3n "${config.nombre || "Sin nombre"}"? Esta acci\xF3n se puede deshacer.`,
        tipo: "confirm",
        respYes: "Eliminar",
        respNo: "Cancelar",
        size: "m"
      });
      dialogRef.subscribe((response) => {
        if (response?.closedByAgree) {
          this.deleteTablaConfiguracion.emit(config);
        }
      });
    });
  }
  /**
   * Establece la vista final por defecto
   */
  setVistaPorDefecto(viewId) {
    const configActual = this.configuracionEditando();
    if (configActual) {
      configActual.configuracion.defaultViewId = viewId;
    }
  }
  /**
   * Obtiene el ID de la vista por defecto
   */
  getVistaPorDefecto() {
    return this.configuracionEditando()?.configuracion.defaultViewId;
  }
  /**
   * Genera un ID único para una vista final basado en su nombre
   */
  generarViewId(viewName) {
    return viewName?.toLowerCase().replace(/[^a-z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "") || "vista_" + Date.now();
  }
  /**
   * Selecciona una vista como por defecto usando el nombre
   */
  seleccionarVistaPorDefecto(viewName) {
    const viewId = this.generarViewId(viewName);
    this.setVistaPorDefecto(viewId);
  }
  /**
   * Obtiene los filtros formateados para visualización
   * Parsea filtros complejos y los retorna en formato estructurado
   */
  getFiltrosFormateados(config) {
    const filtros = config.configuracion.filtros || {};
    const resultado = [];
    Object.entries(filtros).forEach(([columna, valorFiltro]) => {
      if (valorFiltro && valorFiltro.trim()) {
        const filtrosParseados = this.parseFilterValue(valorFiltro);
        resultado.push({
          columna,
          filtros: filtrosParseados,
          esMultiple: filtrosParseados.length > 1
        });
      }
    });
    return resultado;
  }
  /**
   * Parsea un valor de filtro que puede contener múltiples condiciones
   * Soporta operadores | (OR) y & (AND)
   */
  parseFilterValue(filterValue) {
    if (!filterValue || !filterValue.trim()) {
      return [];
    }
    const trimmed = filterValue.trim();
    if (!trimmed.includes("|") && !trimmed.includes("&")) {
      return [trimmed];
    }
    const orGroups = trimmed.split("|").map((group) => group.trim()).filter((group) => group);
    const condiciones = [];
    orGroups.forEach((orGroup) => {
      if (orGroup.includes("&")) {
        const andConditions = orGroup.split("&").map((cond) => cond.trim()).filter((cond) => cond);
        condiciones.push(...andConditions);
      } else {
        condiciones.push(orGroup);
      }
    });
    return condiciones;
  }
  /**
   * Maneja cambios en las configuraciones de tablas cruzadas
   */
  onCrossTabConfigsChange(newConfigs) {
    const configActual = this.configuracionEditando();
    if (configActual) {
      configActual.configuracion.crossTabConfigs = newConfigs;
    }
  }
  /**
   * Maneja cambios en las vistas finales
   */
  onFinalViewsChange(newViews) {
    const configActual = this.configuracionEditando();
    if (configActual) {
      configActual.configuracion.finalViews = newViews;
    }
  }
  /**
   * Maneja cambios en los filtros
   */
  onFiltradoMapChange(newFiltros) {
    const configActual = this.configuracionEditando();
    if (configActual) {
      configActual.configuracion.filtros = newFiltros;
    }
  }
  /**
   * Clona una configuración existente
   * Crea una copia profunda y la prepara para edición
   */
  clonarConfiguracion(config) {
    const configClonada = JSON.parse(JSON.stringify(config));
    delete configClonada.id;
    configClonada.nombre = `${config.nombre} (copia)`;
    configClonada.created_at = (/* @__PURE__ */ new Date()).toISOString();
    this.configuracionTemporal = configClonada;
    this.configuracionEditando.set(this.configuracionTemporal);
    this.modoEdicion.set(true);
  }
  /**
   * Verifica si una vista final está seleccionada como por defecto (usado en modo edición)
   */
  esVistaSeleccionada(config, viewName) {
    const viewId = this.generarViewId(viewName);
    return viewId === config.configuracion.defaultViewId;
  }
  /**
   * Abrevia nombres largos de vistas manteniendo la legibilidad
   */
  abreviarNombreVista(nombre) {
    if (!nombre)
      return "S/N";
    if (nombre.length <= 12)
      return nombre;
    const palabras = nombre.split(" ");
    if (palabras.length > 1) {
      return palabras.map((p) => p.charAt(0)).join("").toUpperCase();
    } else {
      return nombre.substring(0, 10) + "...";
    }
  }
  // Métodos para manejar la importación desde JSON
  /**
   * Muestra u oculta el formulario de importación
   */
  toggleImportacion() {
    this.mostrarImportacion.set(!this.mostrarImportacion());
    if (!this.mostrarImportacion()) {
      this.limpiarImportacion();
    } else {
      this.jsonImportacion.set(generarJSONEjemplo());
    }
  }
  /**
   * Limpia el formulario de importación
   */
  limpiarImportacion() {
    this.jsonImportacion.set("");
    this.erroresImportacion.set([]);
    this.procesandoImportacion.set(false);
  }
  /**
   * Valida y crea una configuración desde el JSON importado
   */
  validarYCrearDesdeJSON() {
    return __async(this, null, function* () {
      this.procesandoImportacion.set(true);
      this.erroresImportacion.set([]);
      try {
        const jsonText = this.jsonImportacion().trim();
        if (!jsonText) {
          this.erroresImportacion.set(["Por favor, pegue un JSON v\xE1lido en el \xE1rea de texto"]);
          this.procesandoImportacion.set(false);
          return;
        }
        const resultado = parseAndValidateTablaConfigurada(jsonText);
        if (!resultado.isValid) {
          this.erroresImportacion.set(resultado.errors);
          this.procesandoImportacion.set(false);
          return;
        }
        const configNormalizada = normalizarTablaConfigurada(resultado.data, this.seccion);
        this.saveTablaConfiguracion.emit(configNormalizada);
        this.limpiarImportacion();
        this.mostrarImportacion.set(false);
        this.dialogService.show({
          title: "Importaci\xF3n Exitosa",
          body: `La configuraci\xF3n "${configNormalizada.nombre}" ha sido importada correctamente.`,
          tipo: "info",
          respYes: "Aceptar",
          size: "m"
        });
      } catch (error) {
        console.error("Error al importar configuraci\xF3n:", error);
        this.erroresImportacion.set(["Error inesperado: " + error.message]);
      } finally {
        this.procesandoImportacion.set(false);
      }
    });
  }
  /**
   * Obtiene un ejemplo de JSON para mostrar al usuario
   */
  getJSONEjemplo() {
    return generarJSONEjemplo();
  }
  /**
   * Verifica si hay errores de importación
   */
  hayErroresImportacion() {
    return this.erroresImportacion().length > 0;
  }
};
_ConfiguracionTablasSeccionComponent.\u0275fac = function ConfiguracionTablasSeccionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfiguracionTablasSeccionComponent)(\u0275\u0275directiveInject(VanillaDialogService));
};
_ConfiguracionTablasSeccionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracionTablasSeccionComponent, selectors: [["app-configuracion-tablas-seccion"]], inputs: { seccion: "seccion", tablasConfiguradas: "tablasConfiguradas", rawData: "rawData" }, outputs: { saveTablaConfiguracion: "saveTablaConfiguracion", addTablaConfiguracion: "addTablaConfiguracion", deleteTablaConfiguracion: "deleteTablaConfiguracion" }, decls: 3, vars: 2, consts: [[1, "configuracion-tablas-seccion"], [1, "row", "mb-3"], [1, "row"], [1, "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-0", "text-dark", "fw-semibold"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-file-earmark-code", "me-1"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], [1, "card", "border-primary", "mb-4", "importacion-card"], [1, "alert", "alert-info", "d-flex", "align-items-center"], [1, "row", "g-3"], [1, "card-header", "bg-primary", "text-white"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "bi", "bi-file-earmark-code", "me-2"], [1, "btn", "btn-outline-light", "btn-sm", 3, "click"], [1, "bi", "bi-x-lg"], [1, "card-body"], [1, "mb-3"], ["for", "jsonImportacion", 1, "form-label", "fw-medium"], [1, "bi", "bi-code-square", "me-1"], ["id", "jsonImportacion", "rows", "12", "placeholder", '{"nombre": "Mi configuraci\xF3n", "configuracion": {...}}', 1, "form-control", "font-monospace", "json-textarea", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-text", "text-muted"], ["href", "javascript:void(0)", 1, "ejemplo-link", 3, "click"], [1, "bi", "bi-lightbulb", "me-1"], [1, "alert", "alert-danger", "mb-3", "errores-importacion"], [1, "text-muted"], [1, "bi", "bi-info-circle", "me-1"], [1, "btn", "btn-outline-secondary", "btn-importacion", 3, "click", "disabled"], [1, "bi", "bi-eraser", "me-1"], [1, "btn", "btn-success", "btn-importacion", 3, "click", "disabled"], [1, "alert-heading"], [1, "bi", "bi-exclamation-triangle", "me-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-check-circle", "me-1"], [1, "bi", "bi-info-circle", "me-2", "fs-5"], [1, "mb-1", "fw-medium"], [1, "mb-0", "small"], [1, "col-12", "col-sm-6", "col-lg-4"], [3, "editRequest", "cloneRequest", "deleteRequest", "saveConfig", "config", "seccion"], [1, "card", "border-0", "shadow-sm"], [1, "card-header", "bg-white", "py-3"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "flex-grow-1"], [1, "mb-1", "text-dark", "fw-semibold"], [1, "bi", "bi-gear-fill", "me-2", "text-primary"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-check-lg", "me-1"], [1, "bi", "bi-x-lg", "me-1"], [1, "row", "mt-3"], [1, "col-md-6"], ["for", "nombreConfiguracion", 1, "form-label", "fw-medium", "small"], [1, "bi", "bi-tag", "me-1"], ["type", "text", "id", "nombreConfiguracion", "placeholder", "Ej: Ventas mensuales, Reporte trimestral...", "required", "", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "text-danger", "small", "mt-1"], [1, "mt-3"], [1, "card-body", "p-0"], [1, "alert", "alert-warning", "m-3", "d-flex", "align-items-center"], [3, "filterBasedConfigsChange", "crossTabConfigsChange", "finalViewsChange", "filtradoMapChange", "crossTabConfigs", "finalViews", "data", "filtradoMap", "filterBasedConfigs"], [1, "bi", "bi-exclamation-circle", "me-1"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "text-muted", "fw-medium"], [1, "bi", "bi-star-fill", "me-1", "text-warning"], ["type", "button", 1, "btn", "btn-sm", "rounded-pill", 3, "btn-primary", "btn-outline-secondary", "title"], ["type", "button", 1, "btn", "btn-sm", "rounded-pill", 3, "click", "title"], [1, "bi", "bi-grid-3x3-gap", "me-1"], [1, "bi", "bi-exclamation-triangle", "me-2", "fs-5"]], template: function ConfiguracionTablasSeccionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ConfiguracionTablasSeccionComponent_Conditional_1_Template, 15, 3, "div", 1);
    \u0275\u0275conditionalCreate(2, ConfiguracionTablasSeccionComponent_Conditional_2_Template, 29, 14, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.modoEdicion() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.modoEdicion() && ctx.configuracionEditando() ? 2 : -1);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  RequiredValidator,
  NgModel,
  InformeTablaDinamicaLocalComponent,
  ConfiguracionCardComponent
], styles: ['\n\n.importacion-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\n.importacion-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.json-textarea[_ngcontent-%COMP%] {\n  font-family:\n    "Courier New",\n    Consolas,\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.json-textarea[_ngcontent-%COMP%]:focus {\n  background-color: white;\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.json-textarea[_ngcontent-%COMP%]:disabled {\n  background-color: #e9ecef;\n  opacity: 0.7;\n}\n.btn-importacion[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    max-height: 800px;\n    transform: translateY(0);\n  }\n}\n.importacion-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n.errores-importacion[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 0.375rem;\n}\n.errores-importacion[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.ejemplo-link[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color 0.2s ease-in-out;\n}\n.ejemplo-link[_ngcontent-%COMP%]:hover {\n  color: #0a58ca;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .json-textarea[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .btn-importacion[_ngcontent-%COMP%] {\n    min-width: 100px;\n    font-size: 0.875rem;\n  }\n  .importacion-card[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .importacion-card[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n    border-radius: 0.375rem !important;\n  }\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.125rem;\n}\n/*# sourceMappingURL=configuracion-tablas-seccion.component.css.map */'] });
var ConfiguracionTablasSeccionComponent = _ConfiguracionTablasSeccionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracionTablasSeccionComponent, [{
    type: Component,
    args: [{ selector: "app-configuracion-tablas-seccion", imports: [
      FormsModule,
      InformeTablaDinamicaLocalComponent,
      ConfiguracionCardComponent
    ], template: `<div class="configuracion-tablas-seccion">
  <!-- Modo vista: lista de configuraciones -->
  @if (!modoEdicion()) {
    <div class="row mb-3">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="mb-0 text-dark fw-semibold">Configuraciones - {{ seccion }}</h5>
          <div class="btn-group" role="group">
            <button class="btn btn-outline-secondary btn-sm" (click)="toggleImportacion()">
              <i class="bi bi-file-earmark-code me-1"></i> Importar JSON
            </button>
            <button class="btn btn-primary btn-sm" (click)="crearNuevaConfiguracion()">
              <i class="bi bi-plus-circle me-1"></i> Nueva
            </button>
          </div>
        </div>

        <!-- Formulario de importaci\xF3n JSON -->
        @if (mostrarImportacion()) {
          <div class="card border-primary mb-4 importacion-card">
            <div class="card-header bg-primary text-white">
              <div class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0">
                  <i class="bi bi-file-earmark-code me-2"></i>
                  Importar Configuraci\xF3n desde JSON
                </h6>
                <button class="btn btn-outline-light btn-sm" (click)="toggleImportacion()">
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label for="jsonImportacion" class="form-label fw-medium">
                      <i class="bi bi-code-square me-1"></i>
                      Pegue el JSON de la configuraci\xF3n:
                    </label>
                    <textarea
                      id="jsonImportacion"
                      class="form-control font-monospace json-textarea"
                      rows="12"
                      placeholder='{"nombre": "Mi configuraci\xF3n", "configuracion": {...}}'
                      [(ngModel)]="jsonImportacion"
                      [disabled]="procesandoImportacion()">
                    </textarea>
                    <small class="form-text text-muted">
                      El JSON debe tener la estructura de una TablaConfigurada v\xE1lida.
                      <a href="javascript:void(0)"
                         class="ejemplo-link"
                         (click)="jsonImportacion.set(getJSONEjemplo())">
                        <i class="bi bi-lightbulb me-1"></i>Ver ejemplo
                      </a>
                    </small>
                  </div>

                  <!-- Mostrar errores si existen -->
                  @if (hayErroresImportacion()) {
                    <div class="alert alert-danger mb-3 errores-importacion">
                      <h6 class="alert-heading">
                        <i class="bi bi-exclamation-triangle me-2"></i>
                        Errores de validaci\xF3n:
                      </h6>
                      <ul class="mb-0">
                        @for (error of erroresImportacion(); track error) {
                          <li>{{ error }}</li>
                        }
                      </ul>
                    </div>
                  }

                  <!-- Botones de acci\xF3n -->
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <small class="text-muted">
                        <i class="bi bi-info-circle me-1"></i>
                        Se validar\xE1 la estructura del JSON y se crear\xE1 una nueva configuraci\xF3n
                      </small>
                    </div>
                    <div class="btn-group" role="group">
                      <button class="btn btn-outline-secondary btn-importacion"
                              (click)="limpiarImportacion()"
                              [disabled]="procesandoImportacion()">
                        <i class="bi bi-eraser me-1"></i> Limpiar
                      </button>
                      <button class="btn btn-success btn-importacion"
                              (click)="validarYCrearDesdeJSON()"
                              [disabled]="procesandoImportacion() || !jsonImportacion().trim()">
                        @if (procesandoImportacion()) {
                          <span class="spinner-border spinner-border-sm me-1" role="status"></span>
                          Procesando...
                        } @else {
                          <i class="bi bi-check-circle me-1"></i> Validar y Crear
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        @if (tablasDeSeccion.length === 0) {
          <div class="alert alert-info d-flex align-items-center">
            <i class="bi bi-info-circle me-2 fs-5"></i>
            <div>
              <p class="mb-1 fw-medium">No hay configuraciones</p>
              <p class="mb-0 small">Cree una nueva configuraci\xF3n para comenzar</p>
            </div>
          </div>
        } @else {
          <!-- Lista de configuraciones usando el nuevo componente -->
          <div class="row g-3">
            @for (config of tablasDeSeccion; track config.id) {
              <div class="col-12 col-sm-6 col-lg-4">
                <app-configuracion-card
                  [config]="config"
                  [seccion]="seccion"
                  (editRequest)="editarConfiguracion($event)"
                  (cloneRequest)="clonarConfiguracion($event)"
                  (deleteRequest)="eliminarConfiguracion($event)"
                  (saveConfig)="saveTablaConfiguracion.emit($event)">
                </app-configuracion-card>
              </div>
            }
          </div>
        }
      </div>
    </div>
  }

  <!-- Modo edici\xF3n (se mantiene similar pero con mejoras visuales) -->
  @if (modoEdicion() && configuracionEditando()) {
  <div class="row">
    <div class="col-12">
      <div class="card border-0 shadow-sm">
        <div class="card-header bg-white py-3">
          <div class="d-flex justify-content-between align-items-start">
            <div class="flex-grow-1">
              <h5 class="mb-1 text-dark fw-semibold">
                <i class="bi bi-gear-fill me-2 text-primary"></i>
                Editando configuraci\xF3n - {{ seccion }}
              </h5>
              <small class="text-muted">
                Configure las vistas finales, tablas cruzadas y filtros para esta secci\xF3n
              </small>
            </div>
            <div class="btn-group" role="group">
              <button class="btn btn-success btn-sm" (click)="guardarConfiguracion()"
                [disabled]="!nombreConfiguracion.trim() || !configuracionEditando()?.configuracion?.finalViews?.length">
                <i class="bi bi-check-lg me-1"></i> Guardar
              </button>
              <button class="btn btn-outline-secondary btn-sm" (click)="cancelarEdicion()">
                <i class="bi bi-x-lg me-1"></i> Cancelar
              </button>
            </div>
          </div>

          <!-- Campo nombre optimizado -->
          <div class="row mt-3">
            <div class="col-md-6">
              <label for="nombreConfiguracion" class="form-label fw-medium small">
                <i class="bi bi-tag me-1"></i> Nombre de configuraci\xF3n
              </label>
              <input type="text" id="nombreConfiguracion" class="form-control form-control-sm"
                placeholder="Ej: Ventas mensuales, Reporte trimestral..." [(ngModel)]="nombreConfiguracion" required>
              @if (!nombreConfiguracion.trim()) {
              <div class="text-danger small mt-1">
                <i class="bi bi-exclamation-circle me-1"></i>
                Nombre requerido
              </div>
              }
            </div>
          </div>

          <!-- Vistas finales como p\xEDldoras compactas -->
          @if (configuracionEditando() && configuracionEditando()!.configuracion &&
          configuracionEditando()!.configuracion.finalViews && configuracionEditando()!.configuracion.finalViews.length
          > 0) {
          <div class="mt-3">
            <div class="d-flex align-items-center flex-wrap gap-2">
              <small class="text-muted fw-medium">
                <i class="bi bi-star-fill me-1 text-warning"></i>Vista predeterminada:
              </small>
              @for (view of configuracionEditando()!.configuracion.finalViews; track view.name) {
              <button type="button" class="btn btn-sm rounded-pill"
                [class.btn-primary]="esVistaSeleccionada(configuracionEditando()!, view.name)"
                [class.btn-outline-secondary]="!esVistaSeleccionada(configuracionEditando()!, view.name)"
                (click)="seleccionarVistaPorDefecto(view.name)" [title]="view.name">
                <i class="bi bi-grid-3x3-gap me-1"></i>{{ abreviarNombreVista(view.name) }}
              </button>
              }
            </div>
          </div>
          }
        </div>

        <div class="card-body p-0">
          <!-- Validaci\xF3n si no hay vistas finales -->
          @if (!configuracionEditando()?.configuracion?.finalViews?.length) {
          <div class="alert alert-warning m-3 d-flex align-items-center">
            <i class="bi bi-exclamation-triangle me-2 fs-5"></i>
            <div>
              <p class="mb-1 fw-medium">Configuraci\xF3n incompleta</p>
              <p class="mb-0">Debe configurar al menos una vista final antes de guardar.</p>
            </div>
          </div>
          }

          <!-- Componente de tabla din\xE1mica -->
          <app-informe-tabla-dinamica-local
            [crossTabConfigs]="configuracionEditando()?.configuracion?.crossTabConfigs || []"
            [finalViews]="configuracionEditando()?.configuracion?.finalViews || []" [data]="rawData"
            [filtradoMap]="configuracionEditando()?.configuracion?.filtros || {}"
            [(filterBasedConfigs)]="configuracionEditando()!.configuracion.filterBasedConfigs!"
            (crossTabConfigsChange)="onCrossTabConfigsChange($event)" (finalViewsChange)="onFinalViewsChange($event)"
            (filtradoMapChange)="onFiltradoMapChange($event)">
          </app-informe-tabla-dinamica-local>
        </div>
      </div>
    </div>
  </div>
  }
</div>`, styles: ['/* src/app/configuracion/configuracion-historico/components/configuracion-tablas-seccion/configuracion-tablas-seccion.component.css */\n.importacion-card {\n  transition: all 0.3s ease-in-out;\n}\n.importacion-card:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.json-textarea {\n  font-family:\n    "Courier New",\n    Consolas,\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  background-color: #f8f9fa;\n  border: 1px solid #dee2e6;\n}\n.json-textarea:focus {\n  background-color: white;\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.json-textarea:disabled {\n  background-color: #e9ecef;\n  opacity: 0.7;\n}\n.btn-importacion {\n  min-width: 120px;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    max-height: 800px;\n    transform: translateY(0);\n  }\n}\n.importacion-card {\n  animation: slideDown 0.3s ease-out;\n}\n.errores-importacion {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 0.375rem;\n}\n.errores-importacion ul {\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.ejemplo-link {\n  color: #0d6efd;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color 0.2s ease-in-out;\n}\n.ejemplo-link:hover {\n  color: #0a58ca;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .json-textarea {\n    font-size: 0.8rem;\n  }\n  .btn-importacion {\n    min-width: 100px;\n    font-size: 0.875rem;\n  }\n  .importacion-card .btn-group {\n    flex-direction: column;\n    width: 100%;\n  }\n  .importacion-card .btn-group .btn {\n    margin-bottom: 0.5rem;\n    border-radius: 0.375rem !important;\n  }\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.125rem;\n}\n/*# sourceMappingURL=configuracion-tablas-seccion.component.css.map */\n'] }]
  }], () => [{ type: VanillaDialogService }], { seccion: [{
    type: Input
  }], tablasConfiguradas: [{
    type: Input
  }], rawData: [{
    type: Input
  }], saveTablaConfiguracion: [{
    type: Output
  }], addTablaConfiguracion: [{
    type: Output
  }], deleteTablaConfiguracion: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracionTablasSeccionComponent, { className: "ConfiguracionTablasSeccionComponent", filePath: "src/app/configuracion/configuracion-historico/components/configuracion-tablas-seccion/configuracion-tablas-seccion.component.ts", lineNumber: 19 });
})();

// src/app/configuracion/configuracion-historico/configuracion-historico.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function ConfiguracionHistoricoComponent_For_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2.badge);
  }
}
function ConfiguracionHistoricoComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11)(1, "button", 15);
    \u0275\u0275listener("click", function ConfiguracionHistoricoComponent_For_15_Template_button_click_1_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.id));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ConfiguracionHistoricoComponent_For_15_Conditional_5_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi bi-", tab_r2.icon, " me-2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r2.badge ? 5 : -1);
  }
}
function ConfiguracionHistoricoComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_18_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_18_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_18_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_19_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_19_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_19_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_20_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_20_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_20_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_21_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_21_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_21_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_22_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_22_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_22_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_23_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_23_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_23_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_24_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_24_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_24_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_25_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_25_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_25_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_26_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_26_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_26_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
function ConfiguracionHistoricoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-configuracion-tablas-seccion", 17);
    \u0275\u0275listener("saveTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_27_Template_app_configuracion_tablas_seccion_saveTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveTablaConfiguracion($event));
    })("addTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_27_Template_app_configuracion_tablas_seccion_addTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleAddTablaConfiguracion($event));
    })("deleteTablaConfiguracion", function ConfiguracionHistoricoComponent_Conditional_27_Template_app_configuracion_tablas_seccion_deleteTablaConfiguracion_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleDeleteTablaConfiguracion($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas)("rawData", ctx_r2.rawData);
  }
}
var _ConfiguracionHistoricoComponent = class _ConfiguracionHistoricoComponent {
  constructor() {
    this.activeTab = signal("programas");
    this.tabs = DASHBOARD_HISTORICO_SECCIONES;
    this.tablasConfiguradas = [];
    this.rawData = [];
    this.tablaConfiguradaController = inject(TablaConfiguradaService);
    this.consolidadoService = inject(ConsolidadoHistoricoCombinadoService);
  }
  ngOnInit() {
    this.setTablasConfiguradas();
    this.setConsolidadoData();
  }
  selectTab(tabId) {
    this.activeTab.set(tabId);
  }
  tablasConfiguradasFromSeccion(seccion) {
    return this.tablasConfiguradas.filter((r) => r.seccion === seccion);
  }
  addTablaConfiguracion(seccion) {
    this.tablasConfiguradas.push({
      seccion,
      configuracion: {
        finalViews: [],
        filterBasedConfigs: [],
        crossTabConfigs: [],
        filtros: {},
        defaultViewId: void 0
      },
      nombre: "",
      id: 0,
      created_at: ""
    });
    console.log(this.tablasConfiguradas);
  }
  saveTablaConfiguracion(config) {
    return __async(this, null, function* () {
      yield this.tablaConfiguradaController.createOrUpdate(config, false);
      this.setTablasConfiguradas();
      console.log(config);
    });
  }
  handleAddTablaConfiguracion(seccion) {
    return __async(this, null, function* () {
      this.addTablaConfiguracion(seccion);
    });
  }
  handleDeleteTablaConfiguracion(config) {
    return __async(this, null, function* () {
      yield this.tablaConfiguradaController.switch(config);
      this.setTablasConfiguradas();
    });
  }
  setTablasConfiguradas() {
    return __async(this, null, function* () {
      const data = yield this.tablaConfiguradaController.all({
        conditionals: {
          deleted_at: null
        },
        loader: false
      });
      this.tablasConfiguradas = data.map((item) => __spreadProps(__spreadValues({}, item), {
        configuracion: JSON.parse(item.configuracion)
      }));
    });
  }
  setConsolidadoData() {
    return __async(this, null, function* () {
      this.rawData = yield this.consolidadoService.fetchDataMaped();
    });
  }
};
_ConfiguracionHistoricoComponent.\u0275fac = function ConfiguracionHistoricoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfiguracionHistoricoComponent)();
};
_ConfiguracionHistoricoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracionHistoricoComponent, selectors: [["app-configuracion-historico"]], decls: 28, vars: 10, consts: [[1, "container-fluid", "p-0", "my-3"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-start", "align-items-md-center", "mb-4", "px-3"], [1, "mb-2", "mb-md-0"], [1, "h3", "mb-1", "text-primary"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-question-circle", "me-1"], [1, "card", "shadow-sm", "border-0"], [1, "card-header", "bg-white", "pb-0", "pt-3", "px-3", "px-md-4", "border-0"], ["role", "tablist", 1, "nav", "nav-tabs", "card-header-tabs"], ["role", "presentation", 1, "nav-item"], [1, "card-body", "p-1"], [1, "tab-content", "mt-2"], [3, "seccion", "tablasConfiguradas", "rawData"], ["type", "button", "role", "tab", 1, "nav-link", "d-flex", "align-items-center", "text-primary", 3, "click"], [1, "badge", "bg-primary", "rounded-pill", "ms-2"], [3, "saveTablaConfiguracion", "addTablaConfiguracion", "deleteTablaConfiguracion", "seccion", "tablasConfiguradas", "rawData"]], template: function ConfiguracionHistoricoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
    \u0275\u0275text(4, "Hist\xF3rico de indicadores del sistema fondos BC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Configure las tablas y graficas a mostra en el historico del sistema FONDO BC ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275text(10, " Ayuda ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "ul", 10);
    \u0275\u0275repeaterCreate(14, ConfiguracionHistoricoComponent_For_15_Template, 6, 7, "li", 11, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
    \u0275\u0275conditionalCreate(18, ConfiguracionHistoricoComponent_Conditional_18_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(19, ConfiguracionHistoricoComponent_Conditional_19_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(20, ConfiguracionHistoricoComponent_Conditional_20_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(21, ConfiguracionHistoricoComponent_Conditional_21_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(22, ConfiguracionHistoricoComponent_Conditional_22_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(23, ConfiguracionHistoricoComponent_Conditional_23_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(24, ConfiguracionHistoricoComponent_Conditional_24_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(25, ConfiguracionHistoricoComponent_Conditional_25_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(26, ConfiguracionHistoricoComponent_Conditional_26_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275conditionalCreate(27, ConfiguracionHistoricoComponent_Conditional_27_Template, 1, 3, "app-configuracion-tablas-seccion", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx.tabs);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.activeTab() === "programas" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "periodos" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "zona-prioritaria" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "genero" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "empleos" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "sectores" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "discapacidades" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "etnias" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "montos" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "mes" ? 27 : -1);
  }
}, dependencies: [ConfiguracionTablasSeccionComponent], encapsulation: 2 });
var ConfiguracionHistoricoComponent = _ConfiguracionHistoricoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracionHistoricoComponent, [{
    type: Component,
    args: [{ selector: "app-configuracion-historico", imports: [ConfiguracionTablasSeccionComponent], template: `<div class="container-fluid p-0 my-3">
    <!-- Header mejorado -->
    <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 px-3">
        <div class="mb-2 mb-md-0">
            <h2 class="h3 mb-1 text-primary">Hist\xF3rico de indicadores del sistema fondos BC</h2>
            <p class="text-muted mb-0">
                Configure las tablas y graficas a mostra en el historico del sistema FONDO BC
            </p>
        </div>

        <!-- Acciones globales -->
        <div class="d-flex gap-2">
            <button class="btn btn-outline-secondary btn-sm">
                <i class="bi bi-question-circle me-1"></i> Ayuda
            </button>
        </div>
    </div>

    <!-- Pesta\xF1as mejoradas -->
    <div class="card shadow-sm border-0">
        <div class="card-header bg-white pb-0 pt-3 px-3 px-md-4 border-0">
            <ul class="nav nav-tabs card-header-tabs" role="tablist">
                @for (tab of tabs; track tab.id) {
                <li class="nav-item" role="presentation">
                    <button class="nav-link d-flex align-items-center text-primary"
                        [class.active]="activeTab() === tab.id" (click)="selectTab(tab.id)" type="button" role="tab">
                        <i class="bi bi-{{ tab.icon }} me-2"></i>
                        <span>{{ tab.label }}</span>
                        @if (tab.badge) {
                        <span class="badge bg-primary rounded-pill ms-2">{{ tab.badge }}</span>
                        }
                    </button>
                </li>
                }
            </ul>
        </div>

        <div class="card-body p-1">
            <!-- Contenido de los Tabs -->
            <div class="tab-content mt-2">

                <!-- Tab de Por Programas -->
                @if (activeTab() === 'programas') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de Por Periodos -->
                @if (activeTab() === 'periodos') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de Zona Prioritaria -->
                @if (activeTab() === 'zona-prioritaria') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de G\xE9nero -->
                @if (activeTab() === 'genero') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de Generaci\xF3n de Empleos -->
                @if (activeTab() === 'empleos') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de Sectores Econ\xF3micos -->
                @if (activeTab() === 'sectores') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de Discapacidades -->
                @if (activeTab() === 'discapacidades') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de Etnias -->
                @if (activeTab() === 'etnias') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de Montos -->
                @if (activeTab() === 'montos') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }

                <!-- Tab de Por Mes -->
                @if (activeTab() === 'mes') {
                <app-configuracion-tablas-seccion
                    [seccion]="activeTab()"
                    [tablasConfiguradas]="tablasConfiguradas"
                    [rawData]="rawData"
                    (saveTablaConfiguracion)="saveTablaConfiguracion($event)"
                    (addTablaConfiguracion)="handleAddTablaConfiguracion($event)"
                    (deleteTablaConfiguracion)="handleDeleteTablaConfiguracion($event)">
                </app-configuracion-tablas-seccion>
                }
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracionHistoricoComponent, { className: "ConfiguracionHistoricoComponent", filePath: "src/app/configuracion/configuracion-historico/configuracion-historico.component.ts", lineNumber: 16 });
})();

// src/app/configuracion/configuracion.routes.ts
var configRoutes = [
  { path: "productos/comerciales", children: comercialesRoutes },
  { path: "productos/financieros", children: financierosRoutes },
  { path: "documentos", children: documentosRoutes },
  { path: "apoyos", loadChildren: () => import("./chunk-7KNFTNAB.js").then((m) => m.apoyosRoutes) },
  { path: "migracion", component: MigrarExcelesComponent },
  { path: "migracion/gestiones", component: MigrarGestionesComponent },
  { path: "modalidades", loadChildren: () => import("./chunk-DSYANJJC.js").then((m) => m.modalidadesRoutes) },
  { path: "utileria", component: UtileriaComponent },
  { path: "actualizar-estados-cuenta", component: ActualizarEstadosCuentaComponent },
  { path: "historico", component: ConfiguracionHistoricoComponent }
];
export {
  configRoutes
};
//# sourceMappingURL=chunk-5ZDHIB6I.js.map
