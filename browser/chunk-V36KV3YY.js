import {
  CreditoFormComponent
} from "./chunk-MIMIC2UR.js";
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
  CREDITOS_TABLE_HEADERS_BASIC
} from "./chunk-2RGH5ZMW.js";
import {
  CreditoPagoService
} from "./chunk-CANKKCBN.js";
import {
  VerificacionCreditoService
} from "./chunk-QEZJJX3N.js";
import {
  PagareService,
  TablaAmortizacionService
} from "./chunk-KUCJ2XDO.js";
import {
  CotizadorService
} from "./chunk-DJKNR32H.js";
import {
  CREDITOS_FILTERS
} from "./chunk-RJ4CVF2L.js";
import {
  CREDITOS_ADVANCED_SEARCH
} from "./chunk-3SMKUHIE.js";
import {
  BuscadorCreditosComponent
} from "./chunk-5AHBH7ZX.js";
import "./chunk-MJF6VG42.js";
import "./chunk-LROCG2JY.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import "./chunk-E5ZUYL3D.js";
import "./chunk-SDTK5VY4.js";
import "./chunk-K6WRKREK.js";
import "./chunk-NWCMIO4X.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import {
  DataViewSectionComponent
} from "./chunk-6SWRHHIM.js";
import "./chunk-MLBICDWK.js";
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
  AutocompleteFieldComponent,
  TitlecasePipe
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  DatePipe,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  Pipe,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
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

// src/app/main/creditos/credito-nuevo/credito-nuevo.component.ts
var _c0 = () => ({ disabled: true });
var _CreditoNuevoComponent = class _CreditoNuevoComponent {
  constructor(controller, route, router, storage) {
    this.controller = controller;
    this.route = route;
    this.router = router;
    this.storage = storage;
    this.show = false;
    this.showChange = new EventEmitter();
    this.edit = {};
    this.sucursales = [];
    this.extraData = {
      conditionals: JSON.stringify([
        ["deleted_at", "IS NULL", null],
        ["created_at", ">=", (/* @__PURE__ */ new Date()).getFullYear() + "-01-01"],
        ["created_at", "<=", (/* @__PURE__ */ new Date()).getFullYear() + "-12-31"]
      ])
    };
    const usuario = this.storage.getPerfil();
    this.edit.sucursal_id = usuario.sucursal_id;
  }
  ngOnInit() {
    this.initSucursales();
  }
  initSucursales() {
    const userLogin = this.storage.getUser();
    this.sucursales = userLogin.perfiles.map((perfil) => {
      return {
        value: perfil.sucursales.id,
        label: perfil.sucursales.nombre
      };
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      const creado = yield this.controller.new(this.edit);
      if (creado) {
        this.router.navigate(["/main/creditos/editar/" + creado.id]);
      }
    });
  }
};
_CreditoNuevoComponent.\u0275fac = function CreditoNuevoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoNuevoComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LocalStorageService));
};
_CreditoNuevoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditoNuevoComponent, selectors: [["app-credito-nuevo"]], inputs: { show: "show" }, outputs: { showChange: "showChange" }, decls: 12, vars: 7, consts: [[3, "showChange", "show"], [1, "text-center", "mb-3"], [1, "row", "justify-content-evenly"], [1, "col-12", "col-sm", "p-3"], ["label", "Sucursal", 3, "valueChange", "value", "options", "validator"], ["label", "Producto Financiero", "apiUrl", "api/productos_financieros", "keyList", "id", "keyDetalle", "alias", 3, "valueChange", "extraData", "value"], [1, "row", "my-3"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function CreditoNuevoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function CreditoNuevoComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function CreditoNuevoComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      return ctx.showChange.emit($event);
    });
    \u0275\u0275elementStart(1, "h4", 1);
    \u0275\u0275text(2, "Nuevo Credito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "app-select-field", 4);
    \u0275\u0275twoWayListener("valueChange", function CreditoNuevoComponent_Template_app_select_field_valueChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit.sucursal_id, $event) || (ctx.edit.sucursal_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3)(7, "app-autocomplete-field", 5);
    \u0275\u0275twoWayListener("valueChange", function CreditoNuevoComponent_Template_app_autocomplete_field_valueChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit.productos_financiero_id, $event) || (ctx.edit.productos_financiero_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "button", 8);
    \u0275\u0275listener("click", function CreditoNuevoComponent_Template_button_click_10_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275text(11, " Guardar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("value", ctx.edit.sucursal_id);
    \u0275\u0275property("options", ctx.sucursales)("validator", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("extraData", ctx.extraData);
    \u0275\u0275twoWayProperty("value", ctx.edit.productos_financiero_id);
  }
}, dependencies: [
  FormularioFlotanteComponent,
  SelectFieldComponent,
  AutocompleteFieldComponent
], encapsulation: 2 });
var CreditoNuevoComponent = _CreditoNuevoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoNuevoComponent, [{
    type: Component,
    args: [{ selector: "app-credito-nuevo", imports: [
      FormularioFlotanteComponent,
      SelectFieldComponent,
      AutocompleteFieldComponent
    ], template: '<app-formulario-flotante [(show)]="show" (showChange)="showChange.emit($event)">\n    <h4 class="text-center mb-3">Nuevo Credito</h4>\n    <div class="row justify-content-evenly">\n        <div class="col-12 col-sm p-3">\n            <app-select-field\n            label="Sucursal"\n            [(value)]="edit.sucursal_id"\n            [options]="sucursales"\n            [validator]="{disabled:true}"\n            >\n            </app-select-field>\n        </div>\n        <div class="col-12 col-sm p-3">\n            <app-autocomplete-field\n            label="Producto Financiero"\n            apiUrl="api/productos_financieros"\n            keyList="id"\n            keyDetalle="alias"\n            [extraData]="extraData"\n            [(value)]="edit.productos_financiero_id"\n            />\n        </div>\n        <div class="row my-3">\n            <div class="col text-center">\n                <button class="btn btn-primary" (click)="onSubmit()" [disabled]="">\n                    Guardar\n                </button>\n            </div>\n        </div>\n    </div>\n</app-formulario-flotante>' }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }, { type: Router }, { type: LocalStorageService }], { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditoNuevoComponent, { className: "CreditoNuevoComponent", filePath: "src/app/main/creditos/credito-nuevo/credito-nuevo.component.ts", lineNumber: 21 });
})();

// src/app/main/creditos/credito-estado/credito-estado.component.ts
function CreditoEstadoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Estado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function CreditoEstadoComponent_Conditional_5_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito.estado, $event) || (ctx_r1.credito.estado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(3, "option");
    \u0275\u0275text(4, "ACTIVO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option");
    \u0275\u0275text(6, "RECHAZADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option");
    \u0275\u0275text(8, "FINALIZADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option");
    \u0275\u0275text(10, "CANCELADO");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.credito.estado);
  }
}
function CreditoEstadoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 7);
    \u0275\u0275listener("click", function CreditoEstadoComponent_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(2, " Confirmar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.comentarios);
  }
}
var _CreditoEstadoComponent = class _CreditoEstadoComponent {
  constructor(creditoController) {
    this.creditoController = creditoController;
    this.show = false;
    this.showChange = new EventEmitter();
    this.comentarios = "";
  }
  title() {
    switch (this.accion) {
      case "ACTIVO":
        return "Activar";
      case "RECHAZADO":
        return "Rechazar";
      case "FINALIZADO":
        return "Finalizar";
    }
    return "Cambiar estado de";
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.credito)
        return;
      if (this.accion) {
        this.credito.estado = this.accion;
      }
      const res = yield this.creditoController.cambiarEstado(this.credito, this.accion ?? this.credito.estado, this.comentarios);
      if (res) {
        this.show = false;
        this.showChange.emit(false);
      }
    });
  }
};
_CreditoEstadoComponent.\u0275fac = function CreditoEstadoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoEstadoComponent)(\u0275\u0275directiveInject(CreditoService));
};
_CreditoEstadoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditoEstadoComponent, selectors: [["app-credito-estado"]], inputs: { show: "show", accion: "accion", credito: "credito" }, outputs: { showChange: "showChange" }, decls: 10, vars: 5, consts: [["size", "small", 3, "showChange", "show"], [1, "container", "px-3", "pb-3"], [1, "mb-2"], [1, "mt-2"], ["rows", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mt-3", "px-3"], [1, "form-select", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", 3, "click", "disabled"]], template: function CreditoEstadoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function CreditoEstadoComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function CreditoEstadoComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      return ctx.showChange.emit($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "h5", 2)(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, CreditoEstadoComponent_Conditional_5_Template, 11, 1);
    \u0275\u0275elementStart(6, "label", 3);
    \u0275\u0275text(7, "Raz\xF3n del cambio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 4);
    \u0275\u0275twoWayListener("ngModelChange", function CreditoEstadoComponent_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.comentarios, $event) || (ctx.comentarios = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CreditoEstadoComponent_Conditional_9_Template, 3, 1, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx.title(), " cr\xE9dito");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.accion && ctx.credito ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.comentarios);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito ? 9 : -1);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, FormularioFlotanteComponent], encapsulation: 2 });
var CreditoEstadoComponent = _CreditoEstadoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoEstadoComponent, [{
    type: Component,
    args: [{ selector: "app-credito-estado", imports: [
      FormsModule,
      FormularioFlotanteComponent
    ], template: '<app-formulario-flotante size="small" [(show)]="show" (showChange)="showChange.emit($event)">\n  <div class="container px-3 pb-3">\n    <h5 class="mb-2"><b>{{title()}} cr\xE9dito</b></h5>\n    @if (!accion && credito) {\n      <label>Estado:</label>\n      <select class="form-select" [(ngModel)]="credito.estado">\n        <option >ACTIVO</option>\n        <option >RECHAZADO</option>\n        <option >FINALIZADO</option>\n        <option >CANCELADO</option>\n      </select>\n    }\n    <label class="mt-2">Raz\xF3n del cambio:</label>\n    <textarea class="form-control" rows="4" [(ngModel)]="comentarios"></textarea>\n    @if (credito) {\n      <div class="row mt-3 px-3" >\n        <button class="btn btn-success" (click)="submit()" [disabled]="!comentarios">\n          Confirmar\n        </button>\n      </div>\n    }\n  </div>\n</app-formulario-flotante>' }]
  }], () => [{ type: CreditoService }], { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], accion: [{
    type: Input
  }], credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditoEstadoComponent, { className: "CreditoEstadoComponent", filePath: "src/app/main/creditos/credito-estado/credito-estado.component.ts", lineNumber: 17 });
})();

// src/app/main/creditos/creditos.row.buttons.ts
var CREDITOS_VERIFICAR_BUTTON = {
  key: "verificar",
  title: "Verificaciones",
  style: {
    icon: "bi bi-clipboard-check-fill",
    button: "btn btn-sm btn-info scale-05"
  }
};
var CREDITOS_CONTRATOS_BUTTON = {
  key: "contratos",
  title: "Contratos",
  style: {
    icon: "bi bi-file-earmark-text-fill",
    button: "btn btn-sm btn-primary scale-05"
  }
};
var CREDITOS_PRELIBERACION_BUTTON = {
  key: "liberacion",
  title: "Liberaci\xF3n",
  style: {
    icon: "bi bi-file-break-fill",
    button: "btn btn-sm btn-secondary scale-05"
  }
};
var CREDITOS_LIBERACION_BUTTON = {
  key: "liberacion",
  title: "Liberaci\xF3n",
  style: {
    icon: "bi bi-bookmark-check-fill",
    button: "btn btn-sm btn-secondary scale-05"
  }
};
var CREDITOS_ESTADOS_BUTTON = {
  key: "estados",
  title: "Cambiar estado",
  style: {
    icon: "bi bi-pencil-square",
    button: "btn btn-sm btn-success scale-05"
  }
};

// src/app/main/creditos/creditos-tabla/creditos-tabla.component.ts
var _c02 = () => ["productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales"];
var TABLA_DEF = {
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "row",
      function: (row, utils) => utils.nombreClienteFromCredito(row),
      header: "Nombre Cliente"
    },
    {
      key: "row",
      function: (row, utils) => utils.nombreComercialFromCredito(row),
      header: "Nombre Negocio"
    },
    {
      key: "estado",
      header: "Estado"
    },
    {
      key: "productos_financieros",
      subKey: "alias",
      header: "P Financiero"
    },
    {
      key: "sucursales",
      subKey: "nombre",
      header: "Sucursal"
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
  text: "Nuevo Credito",
  style: {
    icon: "bi bi-plus-circle-fill ms-1",
    button: "btn btn btn-secondary shadow text-bold scale-05",
    div: "col-auto p-1"
  }
};
var _CreditosTablaComponent = class _CreditosTablaComponent {
  constructor(router, route, controller) {
    this.router = router;
    this.route = route;
    this.controller = controller;
    this.tabla = TABLA_DEF;
    this.showAdd = false;
    this.agregar = AGREGAR_BUTTON;
    this.rowButtons = [CREDITOS_ESTADOS_BUTTON, CREDITOS_VERIFICAR_BUTTON, CREDITOS_CONTRATOS_BUTTON];
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.filters = CREDITOS_FILTERS;
    this.showEstados = false;
    this.getExtra = {};
    this.conditionals = [];
  }
  onRowButtonClickEvent(event) {
    if (event.key == "verificar") {
      this.router.navigate(["verificaciones/" + event.row.id], { relativeTo: this.route.parent });
    }
    if (event.key == "documentos") {
      this.router.navigate(["documentos/" + event.row.id], { relativeTo: this.route.parent });
    }
    if (event.key == "contratos") {
      this.router.navigate(["contratos/" + event.row.id], { relativeTo: this.route.parent });
    }
    if (event.key === "estados") {
      this.showEstados = true;
      this.creditoEdit = event.row;
    }
  }
  onEdit(credito) {
    console.log(credito);
    switch (credito?.productos_financieros?.regimen_fiscal) {
      case "PERSONA FISICA CON ACTIVIDAD EMPRESARIAL":
        this.router.navigate(["../editar/" + credito.id + "/pf"], { relativeTo: this.route });
        break;
      case "PERSONA MORAL":
        this.router.navigate(["../editar/" + credito.id + "/pm"], { relativeTo: this.route });
    }
  }
};
_CreditosTablaComponent.\u0275fac = function CreditosTablaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosTablaComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoService));
};
_CreditosTablaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosTablaComponent, selectors: [["app-creditos-tabla"]], decls: 5, vars: 19, consts: [["title", "Cr\xE9ditos", 3, "agregarClick", "rowEditarClick", "rowButtonClickEvent", "controller", "useDefaultAgregarRedirect", "useDefaultRowEditRedirect", "agregarButton", "relations", "tableDefinition", "rowButtons", "advancedSearch", "simpleFilteredSearch", "barraBusqueda", "getExtra", "getConditionals"], [1, "row", "my-3", "p-1"], [3, "conditionalsChange", "extraDataChange", "fetchData", "conditionals", "extraData"], [3, "showChange", "show", "credito"], [3, "showChange", "show"]], template: function CreditosTablaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("agregarClick", function CreditosTablaComponent_Template_app_tabla_agregarClick_0_listener() {
      return ctx.showAdd = true;
    })("rowEditarClick", function CreditosTablaComponent_Template_app_tabla_rowEditarClick_0_listener($event) {
      return ctx.onEdit($event);
    })("rowButtonClickEvent", function CreditosTablaComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onRowButtonClickEvent($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-buscador-creditos", 2);
    \u0275\u0275twoWayListener("conditionalsChange", function CreditosTablaComponent_Template_app_buscador_creditos_conditionalsChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.conditionals, $event) || (ctx.conditionals = $event);
      return $event;
    })("extraDataChange", function CreditosTablaComponent_Template_app_buscador_creditos_extraDataChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.getExtra, $event) || (ctx.getExtra = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(3, "app-credito-estado", 3);
    \u0275\u0275twoWayListener("showChange", function CreditosTablaComponent_Template_app_credito_estado_showChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showEstados, $event) || (ctx.showEstados = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-credito-nuevo", 4);
    \u0275\u0275twoWayListener("showChange", function CreditosTablaComponent_Template_app_credito_nuevo_showChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showAdd, $event) || (ctx.showAdd = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.controller)("useDefaultAgregarRedirect", false)("useDefaultRowEditRedirect", false)("agregarButton", ctx.agregar)("relations", \u0275\u0275pureFunction0(18, _c02))("tableDefinition", ctx.tabla)("rowButtons", ctx.rowButtons)("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.filters)("barraBusqueda", false)("getExtra", ctx.getExtra)("getConditionals", ctx.conditionals);
    \u0275\u0275advance(2);
    \u0275\u0275property("fetchData", false);
    \u0275\u0275twoWayProperty("conditionals", ctx.conditionals)("extraData", ctx.getExtra);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEstados);
    \u0275\u0275property("credito", ctx.creditoEdit);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showAdd);
  }
}, dependencies: [
  TablaComponent,
  CreditoNuevoComponent,
  CreditoEstadoComponent,
  BuscadorCreditosComponent
], encapsulation: 2 });
var CreditosTablaComponent = _CreditosTablaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosTablaComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-tabla", imports: [
      TablaComponent,
      CreditoNuevoComponent,
      CreditoEstadoComponent,
      BuscadorCreditosComponent
    ], template: `<app-tabla title="Cr\xE9ditos" [controller]="controller" [useDefaultAgregarRedirect]="false"
    [useDefaultRowEditRedirect]="false" [agregarButton]="agregar" (agregarClick)="showAdd=true"
    [relations]="['productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales']"
    (rowEditarClick)="onEdit($event)" [tableDefinition]="tabla" [rowButtons]="rowButtons"
    (rowButtonClickEvent)="onRowButtonClickEvent($event)" [advancedSearch]="advancedSearch"
    [simpleFilteredSearch]="filters" [barraBusqueda]="false" [getExtra]="getExtra" [getConditionals]="conditionals">
    <div class="row my-3 p-1">
        <app-buscador-creditos [fetchData]="false" [(conditionals)]="conditionals" [(extraData)]="getExtra" />
    </div>
</app-tabla>
<app-credito-estado [(show)]="showEstados" [credito]="creditoEdit" />
<app-credito-nuevo [(show)]="showAdd" />` }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: CreditoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosTablaComponent, { className: "CreditosTablaComponent", filePath: "src/app/main/creditos/creditos-tabla/creditos-tabla.component.ts", lineNumber: 79 });
})();

// src/app/main/creditos/verificaciones-creditos/verificaciones-creditos.component.ts
var _VerificacionesCreditosComponent = class _VerificacionesCreditosComponent {
};
_VerificacionesCreditosComponent.\u0275fac = function VerificacionesCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerificacionesCreditosComponent)();
};
_VerificacionesCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerificacionesCreditosComponent, selectors: [["app-verificaciones-creditos"]], decls: 1, vars: 0, template: function VerificacionesCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var VerificacionesCreditosComponent = _VerificacionesCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificacionesCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-verificaciones-creditos", imports: [RouterOutlet], template: "<router-outlet></router-outlet>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerificacionesCreditosComponent, { className: "VerificacionesCreditosComponent", filePath: "src/app/main/creditos/verificaciones-creditos/verificaciones-creditos.component.ts", lineNumber: 10 });
})();

// src/app/main/creditos/documentos-creditos/documentos-creditos.component.ts
var _DocumentosCreditosComponent = class _DocumentosCreditosComponent {
};
_DocumentosCreditosComponent.\u0275fac = function DocumentosCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentosCreditosComponent)();
};
_DocumentosCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentosCreditosComponent, selectors: [["app-documentos-creditos"]], decls: 1, vars: 0, template: function DocumentosCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var DocumentosCreditosComponent = _DocumentosCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentosCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-documentos-creditos", imports: [
      RouterOutlet
    ], template: "<router-outlet />" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentosCreditosComponent, { className: "DocumentosCreditosComponent", filePath: "src/app/main/creditos/documentos-creditos/documentos-creditos.component.ts", lineNumber: 12 });
})();

// src/app/main/creditos/creditos-en-proceso/creditos-en-proceso.component.ts
var _c03 = () => ["productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales"];
var TABLA_DEF2 = {
  columns: [
    {
      key: "id",
      header: "ID"
    },
    ...CREDITOS_TABLE_HEADERS_BASIC,
    {
      key: "created_at",
      header: "Creado en",
      pipe: "date"
    }
  ]
};
var _CreditosEnProcesoComponent = class _CreditosEnProcesoComponent {
  constructor(creditoController, router, route) {
    this.creditoController = creditoController;
    this.router = router;
    this.route = route;
    this.tabla = TABLA_DEF2;
    this.showAdd = false;
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.filters = CREDITOS_FILTERS;
    this.getExtra = { filtro: "en-proceso" };
    this.conditionals = [{ key: "estado", operator: "=", value: "ACTIVO" }, { key: "deleted_at", operator: "IS NULL", value: null }];
  }
  onEdit(credito) {
    console.log(credito);
    switch (credito?.productos_financieros?.regimen_fiscal) {
      case "PERSONA FISICA CON ACTIVIDAD EMPRESARIAL":
        this.router.navigate(["../editar/" + credito.id + "/pf"], { relativeTo: this.route });
        break;
      case "PERSONA MORAL":
        this.router.navigate(["../editar/" + credito.id + "/pm"], { relativeTo: this.route });
    }
  }
};
_CreditosEnProcesoComponent.\u0275fac = function CreditosEnProcesoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosEnProcesoComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_CreditosEnProcesoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosEnProcesoComponent, selectors: [["app-creditos-en-proceso"]], decls: 4, vars: 15, consts: [["title", "Cr\xE9ditos en Proceso", 3, "agregarClick", "rowEditarClick", "tableDefinition", "controller", "useDefaultAgregarRedirect", "useDefaultRowEditRedirect", "relations", "getExtra", "advancedSearch", "simpleFilteredSearch", "barraBusqueda", "getConditionals"], [1, "row", "my-3", "p-1"], [3, "conditionalsChange", "extraDataChange", "fetchData", "conditionals", "extraData"], [3, "showChange", "show"]], template: function CreditosEnProcesoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("agregarClick", function CreditosEnProcesoComponent_Template_app_tabla_agregarClick_0_listener() {
      return ctx.showAdd = true;
    })("rowEditarClick", function CreditosEnProcesoComponent_Template_app_tabla_rowEditarClick_0_listener($event) {
      return ctx.onEdit($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-buscador-creditos", 2);
    \u0275\u0275twoWayListener("conditionalsChange", function CreditosEnProcesoComponent_Template_app_buscador_creditos_conditionalsChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.conditionals, $event) || (ctx.conditionals = $event);
      return $event;
    })("extraDataChange", function CreditosEnProcesoComponent_Template_app_buscador_creditos_extraDataChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.getExtra, $event) || (ctx.getExtra = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(3, "app-credito-nuevo", 3);
    \u0275\u0275twoWayListener("showChange", function CreditosEnProcesoComponent_Template_app_credito_nuevo_showChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showAdd, $event) || (ctx.showAdd = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("useDefaultAgregarRedirect", false)("useDefaultRowEditRedirect", false)("relations", \u0275\u0275pureFunction0(14, _c03))("getExtra", ctx.getExtra)("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.filters)("barraBusqueda", false)("getConditionals", ctx.conditionals);
    \u0275\u0275advance(2);
    \u0275\u0275property("fetchData", false);
    \u0275\u0275twoWayProperty("conditionals", ctx.conditionals)("extraData", ctx.getExtra);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showAdd);
  }
}, dependencies: [TablaComponent, CreditoNuevoComponent, BuscadorCreditosComponent], encapsulation: 2 });
var CreditosEnProcesoComponent = _CreditosEnProcesoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosEnProcesoComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-en-proceso", imports: [TablaComponent, CreditoNuevoComponent, BuscadorCreditosComponent], template: `<app-tabla title="Cr\xE9ditos en Proceso" [tableDefinition]="tabla" [controller]="creditoController"
    [useDefaultAgregarRedirect]="false" [useDefaultRowEditRedirect]="false" (agregarClick)="showAdd=true"
    [relations]="['productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales']"
    (rowEditarClick)="onEdit($event)" [getExtra]="getExtra" [advancedSearch]="advancedSearch"
    [simpleFilteredSearch]="filters" [barraBusqueda]="false"
    [getConditionals]="conditionals">
    <div class="row my-3 p-1">
        <app-buscador-creditos [fetchData]="false" [(conditionals)]="conditionals" [(extraData)]="getExtra" />
    </div>
</app-tabla>
<app-credito-nuevo [(show)]="showAdd" />` }]
  }], () => [{ type: CreditoService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosEnProcesoComponent, { className: "CreditosEnProcesoComponent", filePath: "src/app/main/creditos/creditos-en-proceso/creditos-en-proceso.component.ts", lineNumber: 44 });
})();

// src/app/main/creditos/creditos-en-validacion/creditos-en-validacion.component.ts
var _c04 = () => ["verificaciones", "productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales", "inversionesProgramas.inversionTipos.inversionesTiposDetalles"];
var TABLA_DEF3 = {
  emptyMsg: "No hay creditos en proceso de validaci\xF3n.",
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "verificaciones",
      function: (verificacion) => {
        const autorizadas = verificacion.filter((v) => v.autorizado_fecha).length;
        return autorizadas + " de " + verificacion.length;
      },
      header: "Verificaciones"
    },
    ...CREDITOS_TABLE_HEADERS_BASIC
  ]
};
var EXTRABUTTONS = [
  {
    key: "todos",
    text: "Ver Todos",
    style: {
      button: "btn scale-05 shadow btn-secondary"
    }
  },
  {
    key: "completos",
    text: "Ver Validados",
    style: {
      button: "btn scale-05 shadow btn-success"
    }
  },
  {
    key: "pendientes",
    text: "Ver Pendientes",
    style: {
      button: "btn scale-05 shadow btn-warning"
    }
  }
];
var _CreditosEnValidacionComponent = class _CreditosEnValidacionComponent {
  constructor(creditoController, router) {
    this.creditoController = creditoController;
    this.router = router;
    this.tabla = TABLA_DEF3;
    this.rowButtons = [CREDITOS_VERIFICAR_BUTTON, CREDITOS_ESTADOS_BUTTON];
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.filters = CREDITOS_FILTERS;
    this.extraButtons = EXTRABUTTONS;
    this.showEstados = false;
    this.filtros = { filtro: "validacion" };
    this.conditionals = [{ key: "estado", operator: "=", value: "ACTIVO" }];
  }
  onClickEvent(event) {
    if (event.key === "verificar") {
      this.router.navigate(["/main/creditos/validar/" + event.row.id]);
    }
    if (event.key = "estados") {
      this.creditoEdit = event.row;
      this.showEstados = true;
    }
  }
  onButtonClick(key) {
    switch (key) {
      case "todos":
        this.filtros = { filtro: "validacion" };
        break;
      case "pendientes":
        this.filtros = { filtro: "validacion-pendientes" };
        break;
      case "completos":
        this.filtros = { filtro: "validacion-completos" };
        break;
    }
  }
};
_CreditosEnValidacionComponent.\u0275fac = function CreditosEnValidacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosEnValidacionComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(Router));
};
_CreditosEnValidacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosEnValidacionComponent, selectors: [["app-creditos-en-validacion"]], decls: 4, vars: 24, consts: [["title", "Cr\xE9ditos en Validaci\xF3n", 3, "rowButtonClickEvent", "barraButtonClickEvent", "tableDefinition", "showBarraButtons", "barraButtons", "getConditionals", "controller", "getExtra", "relations", "rowButtons", "rowEliminar", "rowEditar", "rowEditarRoute", "advancedSearch", "simpleFilteredSearch", "agregar", "eliminar", "eliminados", "barraBusqueda"], [1, "row", "my-3", "p-1"], [3, "conditionalsChange", "extraDataChange", "fetchData", "conditionals", "extraDataBase", "extraData"], [3, "showChange", "show", "credito"]], template: function CreditosEnValidacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("rowButtonClickEvent", function CreditosEnValidacionComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onClickEvent($event);
    })("barraButtonClickEvent", function CreditosEnValidacionComponent_Template_app_tabla_barraButtonClickEvent_0_listener($event) {
      return ctx.onButtonClick($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-buscador-creditos", 2);
    \u0275\u0275twoWayListener("conditionalsChange", function CreditosEnValidacionComponent_Template_app_buscador_creditos_conditionalsChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.conditionals, $event) || (ctx.conditionals = $event);
      return $event;
    })("extraDataChange", function CreditosEnValidacionComponent_Template_app_buscador_creditos_extraDataChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros, $event) || (ctx.filtros = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(3, "app-credito-estado", 3);
    \u0275\u0275twoWayListener("showChange", function CreditosEnValidacionComponent_Template_app_credito_estado_showChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showEstados, $event) || (ctx.showEstados = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("showBarraButtons", true)("barraButtons", ctx.extraButtons)("getConditionals", ctx.conditionals)("controller", ctx.creditoController)("getExtra", ctx.filtros)("relations", \u0275\u0275pureFunction0(23, _c04))("rowButtons", ctx.rowButtons)("rowEliminar", false)("rowEditar", false)("rowEditarRoute", "/main/creditos/verificaciones/")("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.filters)("agregar", false)("eliminar", false)("eliminados", false)("barraBusqueda", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("fetchData", false);
    \u0275\u0275twoWayProperty("conditionals", ctx.conditionals);
    \u0275\u0275property("extraDataBase", ctx.filtros);
    \u0275\u0275twoWayProperty("extraData", ctx.filtros);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEstados);
    \u0275\u0275property("credito", ctx.creditoEdit);
  }
}, dependencies: [
  TablaComponent,
  CreditoEstadoComponent,
  BuscadorCreditosComponent
], encapsulation: 2 });
var CreditosEnValidacionComponent = _CreditosEnValidacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosEnValidacionComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-en-validacion", imports: [
      TablaComponent,
      CreditoEstadoComponent,
      BuscadorCreditosComponent
    ], template: `<app-tabla title="Cr\xE9ditos en Validaci\xF3n" [tableDefinition]="tabla" [showBarraButtons]="true"
    [barraButtons]="extraButtons" [getConditionals]="conditionals" [controller]="creditoController" [getExtra]="filtros"
    [relations]="['verificaciones','productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales','inversionesProgramas.inversionTipos.inversionesTiposDetalles']"
    [rowButtons]="rowButtons" [rowEliminar]="false" [rowEditar]="false" (rowButtonClickEvent)="onClickEvent($event)"
    [rowEditarRoute]="'/main/creditos/verificaciones/'" [advancedSearch]="advancedSearch"
    [simpleFilteredSearch]="filters" [agregar]="false" [eliminar]="false" [eliminados]="false" [barraBusqueda]="false"
    (barraButtonClickEvent)="onButtonClick($event)">
    <div class="row my-3 p-1">
        <app-buscador-creditos [fetchData]="false" [(conditionals)]="conditionals" [extraDataBase]="filtros" [(extraData)]="filtros" />
    </div>
</app-tabla>
<app-credito-estado [(show)]="showEstados" [credito]="creditoEdit" />` }]
  }], () => [{ type: CreditoService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosEnValidacionComponent, { className: "CreditosEnValidacionComponent", filePath: "src/app/main/creditos/creditos-en-validacion/creditos-en-validacion.component.ts", lineNumber: 69 });
})();

// src/app/main/creditos/creditos-dictaminacion/creditos-dictaminacion.component.ts
var _c05 = ["tablaRef"];
var _c1 = () => ["datosPersonaFisica.datosPersonales", "datosPersonasMorales", "datosPersonasMorales.representanteLegal", "usuarios", "sucursales", "productosFinancieros", "dictaminado_por", "autorizado_por", "inversionesProgramas.inversionTipos.inversionesTiposDetalles"];
function CreditosDictaminacionComponent_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "b");
    \u0275\u0275text(2, "Dictaminado Por: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.dictaminadoPor(), " ");
  }
}
function CreditosDictaminacionComponent_Conditional_6_For_21_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 10)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const detalle_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(detalle_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, detalle_r4.monto_solicitado));
  }
}
function CreditosDictaminacionComponent_Conditional_6_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19)(7, "ul");
    \u0275\u0275repeaterCreate(8, CreditosDictaminacionComponent_Conditional_6_For_21_For_9_Template, 7, 4, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tipo_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tipo_r5.inversion_tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, ctx_r2.totalTipo(tipo_r5)));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(tipo_r5.inversiones_tipos_detalles);
  }
}
function CreditosDictaminacionComponent_Conditional_6_Conditional_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 20);
    \u0275\u0275text(1, "SESI\xD3N ASOCIADA");
    \u0275\u0275elementEnd();
  }
}
function CreditosDictaminacionComponent_Conditional_6_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "span")(3, "b");
    \u0275\u0275text(4, "Sesi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CreditosDictaminacionComponent_Conditional_6_Conditional_27_Conditional_5_Template, 2, 0, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "app-autocomplete-field", 21);
    \u0275\u0275twoWayListener("valueChange", function CreditosDictaminacionComponent_Conditional_6_Conditional_27_Template_app_autocomplete_field_valueChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.creditoEdit.sesion_id, $event) || (ctx_r2.creditoEdit.sesion_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.creditoEdit.sesion_id ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx_r2.creditoEdit.sesion_id);
  }
}
function CreditosDictaminacionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "h3")(2, "b");
    \u0275\u0275text(3, "Dictaminar Credito");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 7)(5, "b");
    \u0275\u0275text(6, "Estado: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275element(8, "br");
    \u0275\u0275conditionalCreate(9, CreditosDictaminacionComponent_Conditional_6_Conditional_9_Template, 4, 1, "span");
    \u0275\u0275elementStart(10, "b");
    \u0275\u0275text(11, "Total Solicitado: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275element(14, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 7)(16, "b");
    \u0275\u0275text(17, "Detalle Inversion");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "hr", 8);
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275repeaterCreate(20, CreditosDictaminacionComponent_Conditional_6_For_21_Template, 10, 4, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 7)(23, "b");
    \u0275\u0275text(24, "Sesi\xF3n en que fue aprobado");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "hr", 8);
    \u0275\u0275elementStart(26, "div", 11);
    \u0275\u0275conditionalCreate(27, CreditosDictaminacionComponent_Conditional_6_Conditional_27_Template, 8, 2, "div", 12);
    \u0275\u0275elementStart(28, "div", 12)(29, "div", 13)(30, "b");
    \u0275\u0275text(31, "Monto Aprobado:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 14)(33, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CreditosDictaminacionComponent_Conditional_6_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.creditoEdit.monto_autorizado, $event) || (ctx_r2.creditoEdit.monto_autorizado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 16)(35, "div", 17)(36, "button", 18);
    \u0275\u0275listener("click", function CreditosDictaminacionComponent_Conditional_6_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dictaminar());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.creditoEdit.dictaminado_fecha ? "DICTAMINADO" : "SIN DICTAMINAR");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.creditoEdit.dictaminado_por) ? 9 : -1, tmp_3_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 9, ctx_r2.totalInversion()), " ");
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.creditoEdit.inversiones_programas == null ? null : ctx_r2.creditoEdit.inversiones_programas.inversion_tipos);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.creditoEdit ? 27 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.creditoEdit.monto_autorizado);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.creditoEdit.dictaminado_fecha ? "btn-danger" : "btn-primary");
    \u0275\u0275property("disabled", !ctx_r2.creditoEdit.sesion_id || !ctx_r2.creditoEdit.monto_autorizado);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.creditoEdit.dictaminado_fecha ? "Cancelar Dictaminado" : "Dictaminar Credito", " ");
  }
}
var TABLA_DEF4 = {
  columns: [
    {
      key: "id",
      header: "ID"
    },
    ...CREDITOS_TABLE_HEADERS_BASIC
  ]
};
var EDITAR_BUTTON = {
  title: "Ver detalles",
  style: {
    button: "btn btn-sm btn-info",
    icon: "bi bi-eye-fill"
  }
};
var DICTAMINACION_BUTTON = {
  key: "dictaminacion",
  style: {
    button: "btn btn-sm btn-primary",
    icon: "bi bi-person-raised-hand"
  },
  text: "Dictaminar"
};
var RECHAZAR_BUTTON = {
  key: "estados",
  style: {
    button: "btn btn-sm btn-danger",
    icon: "bi bi-person-x-fill"
  },
  text: "Rechazar"
};
var EXTRABUTTONS2 = [
  {
    key: "todos",
    text: "Ver Pendientes",
    style: {
      button: "btn scale-05 shadow btn-secondary"
    }
  },
  {
    key: "aprobados",
    text: "Ver Dictaminados",
    style: {
      button: "btn scale-05 shadow btn-success"
    }
  },
  {
    key: "rechazados",
    text: "Ver Rechazados",
    style: {
      button: "btn scale-05 shadow btn-danger"
    }
  }
];
var _CreditosDictaminacionComponent = class _CreditosDictaminacionComponent {
  constructor(creditoController) {
    this.creditoController = creditoController;
    this.tabla = TABLA_DEF4;
    this.edit = EDITAR_BUTTON;
    this.rowButtons = [DICTAMINACION_BUTTON, RECHAZAR_BUTTON];
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.filters = CREDITOS_FILTERS;
    this.showAdd = false;
    this.extraButtons = EXTRABUTTONS2;
    this.getExtra = { filtro: "dictaminacion" };
    this.conditionals = [];
    this.showEstados = false;
  }
  updateExtraData(extra) {
    this.getExtra = {
      filtro: this.getExtra.filtro,
      busqueda_avanzada: extra.busqueda_avanzada
    };
  }
  updateConditionals(cond) {
    this.conditionals = [
      { key: "estado", operator: "=", value: "ACTIVO" },
      ...cond
    ];
  }
  onRowButtonClick(event) {
    if (event.key === "dictaminacion") {
      this.showAdd = true;
      this.creditoEdit = event.row;
    }
    if (event.key === "estados") {
      this.creditoEdit = event.row;
      this.showEstados = true;
    }
  }
  onButtonClick(key) {
    if (key == "todos") {
      this.getExtra = { filtro: "dictaminacion" };
    }
    if (key === "aprobados") {
      this.getExtra = { filtro: "dictaminacion-aprobados" };
    }
    if (key === "rechazados") {
      this.getExtra = { filtro: "dictaminacion-rechazados" };
    }
  }
  totalTipo(tipo) {
    return (tipo.inversiones_tipos_detalles ?? []).reduce((acc, detalle) => {
      return acc + detalle.monto_solicitado;
    }, 0) ?? 0;
  }
  totalInversion() {
    if (this.creditoEdit?.inversiones_programas?.monto_solicitado)
      return this.creditoEdit.inversiones_programas.monto_solicitado;
    return (this.creditoEdit?.inversiones_programas?.inversion_tipos ?? []).reduce((acc, tipo) => {
      return acc + this.totalTipo(tipo);
    }, 0) ?? 0;
  }
  dictaminar() {
    return __async(this, null, function* () {
      if (!this.creditoEdit)
        return;
      if (!this.creditoEdit.dictaminado_fecha) {
        yield this.creditoController.asociarSesion(this.creditoEdit);
        yield this.creditoController.autorizarMonto(this.creditoEdit);
      }
      yield this.creditoController.dictaminarCredito(this.creditoEdit);
    });
  }
  dictaminadoPor() {
    if (!this.creditoEdit?.dictaminado_por)
      return "";
    if (typeof this.creditoEdit.dictaminado_por == "number")
      return "";
    return this.creditoEdit.dictaminado_por.nombre + " " + this.creditoEdit.dictaminado_por.apellido_paterno + " " + this.creditoEdit.dictaminado_por.apellido_materno;
  }
};
_CreditosDictaminacionComponent.\u0275fac = function CreditosDictaminacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosDictaminacionComponent)(\u0275\u0275directiveInject(CreditoService));
};
_CreditosDictaminacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosDictaminacionComponent, selectors: [["app-creditos-dictaminacion"]], viewQuery: function CreditosDictaminacionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tablaRef = _t.first);
  }
}, decls: 7, vars: 23, consts: [["tablaRef", ""], ["title", "Cr\xE9ditos en Dictaminaci\xF3n", 3, "barraButtonClickEvent", "rowButtonClickEvent", "tableDefinition", "controller", "getConditionals", "relations", "rowEliminar", "rowButtons", "rowEditarButton", "rowEditarRoute", "getExtra", "barraButtons", "eliminar", "checkbox", "agregar", "eliminados", "advancedSearch", "simpleFilteredSearch", "barraBusqueda"], [1, "row", "py-3", "p-1"], [3, "conditionalsChange", "extraDataChange", "fetchData"], ["accion", "RECHAZADO", 3, "showChange", "show", "credito"], [3, "showChange", "show"], [1, "container", "p-3", "pt-0"], [1, "mt-4"], [1, "border", "border-primary", "mt-1"], [1, "container", "pb-3"], [1, "row"], [1, "container"], [1, "row", "mb-2"], [1, "col-auto", "p-1"], [1, "col"], ["type", "number", "placeholder", "Ingrese una cantidad...", 1, "form-control", "shadow-sm", 3, "ngModelChange", "ngModel"], [1, "row", "mb-2", "mt-4", "justify-content-center"], [1, "col-auto"], [1, "btn", 3, "click", "disabled"], [1, "col-12", "ps-2"], [1, "bi", "bi-check-circle-fill", "fw-bolder", "mx-2", "text-success"], ["apiUrl", "api/sesiones", "placeholder", "No. de sesi\xF3n...", "keyDetalle", "sesion", "nuevoRedirect", "catalogos/sesiones/nuevo", 3, "valueChange", "value"]], template: function CreditosDictaminacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tabla", 1, 0);
    \u0275\u0275listener("barraButtonClickEvent", function CreditosDictaminacionComponent_Template_app_tabla_barraButtonClickEvent_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onButtonClick($event));
    })("rowButtonClickEvent", function CreditosDictaminacionComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowButtonClick($event));
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "app-buscador-creditos", 3);
    \u0275\u0275listener("conditionalsChange", function CreditosDictaminacionComponent_Template_app_buscador_creditos_conditionalsChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateConditionals($event));
    })("extraDataChange", function CreditosDictaminacionComponent_Template_app_buscador_creditos_extraDataChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateExtraData($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "app-credito-estado", 4);
    \u0275\u0275twoWayListener("showChange", function CreditosDictaminacionComponent_Template_app_credito_estado_showChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showEstados, $event) || (ctx.showEstados = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-formulario-flotante", 5);
    \u0275\u0275twoWayListener("showChange", function CreditosDictaminacionComponent_Template_app_formulario_flotante_showChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showAdd, $event) || (ctx.showAdd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275conditionalCreate(6, CreditosDictaminacionComponent_Conditional_6_Template, 38, 11, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("getConditionals", ctx.conditionals)("relations", \u0275\u0275pureFunction0(22, _c1))("rowEliminar", false)("rowButtons", ctx.rowButtons)("rowEditarButton", ctx.edit)("rowEditarRoute", "/main/creditos/validar/")("getExtra", ctx.getExtra)("barraButtons", ctx.extraButtons)("eliminar", false)("checkbox", false)("agregar", false)("eliminados", false)("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.filters)("barraBusqueda", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("fetchData", false);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEstados);
    \u0275\u0275property("credito", ctx.creditoEdit);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showAdd);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.creditoEdit ? 6 : -1);
  }
}, dependencies: [
  TablaComponent,
  CreditoEstadoComponent,
  FormularioFlotanteComponent,
  AutocompleteFieldComponent,
  FormsModule,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgModel,
  CurrencyPipe,
  BuscadorCreditosComponent
], encapsulation: 2 });
var CreditosDictaminacionComponent = _CreditosDictaminacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosDictaminacionComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-dictaminacion", imports: [
      TablaComponent,
      CreditoEstadoComponent,
      FormularioFlotanteComponent,
      AutocompleteFieldComponent,
      FormsModule,
      CurrencyPipe,
      BuscadorCreditosComponent
    ], template: `
<app-tabla #tablaRef title="Cr\xE9ditos en Dictaminaci\xF3n" [tableDefinition]="tabla" [controller]="creditoController"
  [getConditionals]="conditionals"
  [relations]='["datosPersonaFisica.datosPersonales","datosPersonasMorales","datosPersonasMorales.representanteLegal", "usuarios", "sucursales", "productosFinancieros", "dictaminado_por", "autorizado_por", "inversionesProgramas.inversionTipos.inversionesTiposDetalles"]'
  [rowEliminar]="false" [rowButtons]="rowButtons" [rowEditarButton]="edit"
  [rowEditarRoute]="'/main/creditos/validar/'" [getExtra]="getExtra" [barraButtons]="extraButtons"
  (barraButtonClickEvent)="onButtonClick($event)" [eliminar]="false" [checkbox]="false" [agregar]="false"
  [eliminados]="false" (rowButtonClickEvent)="onRowButtonClick($event)" [advancedSearch]="advancedSearch"
  [simpleFilteredSearch]='filters' [barraBusqueda]="false" >
  <div class="row py-3 p-1">
    <app-buscador-creditos [fetchData]="false" (conditionalsChange)="updateConditionals($event)" (extraDataChange)="updateExtraData($event)" />
  </div>
</app-tabla>
<app-credito-estado [(show)]="showEstados" [credito]="creditoEdit" accion="RECHAZADO" />

<app-formulario-flotante [(show)]="showAdd">
  @if (creditoEdit) {
    <div class="container p-3 pt-0">
      <h3><b>Dictaminar Credito</b></h3>
      <p class="mt-4">
        <b>Estado: </b> {{creditoEdit.dictaminado_fecha? 'DICTAMINADO': 'SIN DICTAMINAR' }}<br>
        @if (creditoEdit.dictaminado_por; as Usuario) {
          <span>
            <b>Dictaminado Por: </b> {{dictaminadoPor() }}
          </span>
        }
        <b>Total Solicitado: </b> {{totalInversion() |currency}} <br>
      </p>
      <span class="mt-4"><b>Detalle Inversion</b></span>
      <hr class="border border-primary mt-1">
      <div class="container pb-3">
        @for (tipo of creditoEdit.inversiones_programas?.inversion_tipos; track tipo) {
          <div class="row">
            <div class="col">{{tipo.inversion_tipo}}</div>
            <div class="col-auto">{{totalTipo(tipo)|currency}}</div>
            <div class="col-12 ps-2">
              <ul>
                @for (detalle of tipo.inversiones_tipos_detalles; track detalle) {
                  <li>
                    <div class="row">
                      <div class="col">{{detalle.nombre}}</div>
                      <div class="col-auto">{{detalle.monto_solicitado|currency}}</div>
                    </div>
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
      <span class="mt-4"><b>Sesi\xF3n en que fue aprobado</b></span>
      <hr class="border border-primary mt-1">
      <div class="container">
        @if (creditoEdit) {
          <div class="row mb-2">
            <div class="col-auto p-1">
              <span><b>Sesi\xF3n</b>@if (creditoEdit.sesion_id) {
              <i
              class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SESI\xD3N ASOCIADA</i>
            }</span>
          </div>
          <div class="col">
            <app-autocomplete-field apiUrl="api/sesiones" placeholder="No. de sesi\xF3n..." keyDetalle="sesion"
              nuevoRedirect="catalogos/sesiones/nuevo" [(value)]="creditoEdit.sesion_id" />
          </div>
        </div>
      }
      <div class="row mb-2">
        <div class="col-auto p-1">
          <b>Monto Aprobado:</b>
        </div>
        <div class="col">
          <input type="number" class="form-control shadow-sm" placeholder="Ingrese una cantidad..."
            [(ngModel)]="creditoEdit.monto_autorizado">
        </div>
      </div>
    </div>
    <div class="row mb-2 mt-4 justify-content-center">
      <div class="col-auto">
        <button class="btn" [class]="creditoEdit.dictaminado_fecha?'btn-danger':'btn-primary'"
          (click)="dictaminar()" [disabled]="!creditoEdit.sesion_id||!creditoEdit.monto_autorizado">
          {{creditoEdit.dictaminado_fecha?'Cancelar Dictaminado':'Dictaminar Credito'}}
        </button>
      </div>
    </div>
  </div>
}
</app-formulario-flotante>` }]
  }], () => [{ type: CreditoService }], { tablaRef: [{
    type: ViewChild,
    args: ["tablaRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosDictaminacionComponent, { className: "CreditosDictaminacionComponent", filePath: "src/app/main/creditos/creditos-dictaminacion/creditos-dictaminacion.component.ts", lineNumber: 90 });
})();

// src/app/main/creditos/creditos-formalizacion/creditos-formalizacion.component.ts
var _c06 = () => ["productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales", "inversionesProgramas.inversionTipos.inversionesTiposDetalles"];
var TABLA_DEF5 = {
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "formalizado_fecha",
      header: "Fecha Formalizado",
      pipe: "date"
    },
    ...CREDITOS_TABLE_HEADERS_BASIC
  ]
};
var EDITAR_BUTTON2 = {
  style: {
    button: "btn btn-sm btn-info",
    icon: "bi bi-eye-fill"
  }
};
var EXTRABUTTONS3 = [
  {
    key: "todos",
    text: "Ver Pendientes",
    style: {
      button: "btn scale-05 shadow btn-secondary"
    }
  },
  {
    key: "aprobados",
    text: "Ver Formalizados",
    style: {
      button: "btn scale-05 shadow btn-success"
    }
  },
  {
    key: "rechazados",
    text: "Ver Rechazados",
    style: {
      button: "btn scale-05 shadow btn-danger"
    }
  }
];
var _CreditosFormalizacionComponent = class _CreditosFormalizacionComponent {
  constructor(creditoController, router) {
    this.creditoController = creditoController;
    this.router = router;
    this.tabla = TABLA_DEF5;
    this.edit = EDITAR_BUTTON2;
    this.rowButtons = [CREDITOS_CONTRATOS_BUTTON, CREDITOS_ESTADOS_BUTTON];
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.filters = CREDITOS_FILTERS;
    this.headerButtons = EXTRABUTTONS3;
    this.showEstados = false;
    this.getExtra = { filtro: "formalizacion" };
    this.conditionals = [];
  }
  updateExtraData(extra) {
    this.getExtra = {
      filtro: this.getExtra.filtro,
      busqueda_avanzada: extra.busqueda_avanzada
    };
  }
  updateConditionals(cond) {
    this.conditionals = [
      { key: "estado", operator: "=", value: "ACTIVO" },
      ...cond
    ];
  }
  onButtonClick(key) {
    if (key == "todos") {
      this.getExtra = { filtro: "formalizacion" };
    }
    if (key === "aprobados") {
      this.getExtra = { filtro: "formalizacion-aprobados" };
    }
    if (key === "rechazados") {
      this.getExtra = { filtro: "formalizacion-rechazados" };
    }
  }
  onRowButtonClick(event) {
    if (event.key === "contratos") {
      this.router.navigate(["/main/creditos/contratos/" + event.row.id]);
    }
    if (event.key = "estados") {
      this.creditoEdit = event.row;
      this.showEstados = true;
    }
  }
};
_CreditosFormalizacionComponent.\u0275fac = function CreditosFormalizacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosFormalizacionComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(Router));
};
_CreditosFormalizacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosFormalizacionComponent, selectors: [["app-creditos-formalizacion"]], decls: 4, vars: 21, consts: [["title", "Cr\xE9ditos en formalizaci\xF3n", 3, "barraButtonClickEvent", "rowButtonClickEvent", "tableDefinition", "controller", "showBarraButtons", "barraButtons", "rowEliminar", "rowButtons", "getConditionals", "barraBusqueda", "relations", "rowEditarButton", "rowEditarRoute", "getExtra", "advancedSearch", "simpleFilteredSearch", "agregar", "eliminar", "eliminados"], [1, "row", "my-3", "p-1"], [3, "conditionalsChange", "extraDataChange", "fetchData"], [3, "showChange", "show", "credito"]], template: function CreditosFormalizacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("barraButtonClickEvent", function CreditosFormalizacionComponent_Template_app_tabla_barraButtonClickEvent_0_listener($event) {
      return ctx.onButtonClick($event);
    })("rowButtonClickEvent", function CreditosFormalizacionComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onRowButtonClick($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-buscador-creditos", 2);
    \u0275\u0275listener("conditionalsChange", function CreditosFormalizacionComponent_Template_app_buscador_creditos_conditionalsChange_2_listener($event) {
      return ctx.updateConditionals($event);
    })("extraDataChange", function CreditosFormalizacionComponent_Template_app_buscador_creditos_extraDataChange_2_listener($event) {
      return ctx.updateExtraData($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(3, "app-credito-estado", 3);
    \u0275\u0275twoWayListener("showChange", function CreditosFormalizacionComponent_Template_app_credito_estado_showChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showEstados, $event) || (ctx.showEstados = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("showBarraButtons", true)("barraButtons", ctx.headerButtons)("rowEliminar", false)("rowButtons", ctx.rowButtons)("getConditionals", ctx.conditionals)("barraBusqueda", false)("relations", \u0275\u0275pureFunction0(20, _c06))("rowEditarButton", ctx.edit)("rowEditarRoute", "/main/creditos/validar/")("getExtra", ctx.getExtra)("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.filters)("agregar", false)("eliminar", false)("eliminados", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("fetchData", false);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEstados);
    \u0275\u0275property("credito", ctx.creditoEdit);
  }
}, dependencies: [
  TablaComponent,
  CreditoEstadoComponent,
  BuscadorCreditosComponent
], encapsulation: 2 });
var CreditosFormalizacionComponent = _CreditosFormalizacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosFormalizacionComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-formalizacion", imports: [
      TablaComponent,
      CreditoEstadoComponent,
      BuscadorCreditosComponent
    ], template: `<app-tabla title="Cr\xE9ditos en formalizaci\xF3n" [tableDefinition]="tabla" [controller]="creditoController"
    [showBarraButtons]="true" [barraButtons]="headerButtons" (barraButtonClickEvent)="onButtonClick($event)"
    [rowEliminar]="false" [rowButtons]="rowButtons" [getConditionals]="conditionals" [barraBusqueda]="false"
    [relations]="['productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales','inversionesProgramas.inversionTipos.inversionesTiposDetalles']"
    [rowEditarButton]="edit" [rowEditarRoute]="'/main/creditos/validar/'" [getExtra]="getExtra"
    (rowButtonClickEvent)="onRowButtonClick($event)" [advancedSearch]="advancedSearch" [simpleFilteredSearch]="filters"
    [agregar]="false" [eliminar]="false" [eliminados]="false">
    <div class="row my-3 p-1">
        <app-buscador-creditos [fetchData]="false" (conditionalsChange)="updateConditionals($event)"
            (extraDataChange)="updateExtraData($event)" />
    </div>
</app-tabla>
<app-credito-estado [(show)]="showEstados" [credito]="creditoEdit" />` }]
  }], () => [{ type: CreditoService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosFormalizacionComponent, { className: "CreditosFormalizacionComponent", filePath: "src/app/main/creditos/creditos-formalizacion/creditos-formalizacion.component.ts", lineNumber: 69 });
})();

// src/app/main/creditos/credito-form/simple-verificacion-credito/simple-verificacion-credito.component.ts
var _c07 = (a0, a1) => ({ "btn-success": a0, "btn-danger": a1 });
var _c12 = (a0, a1) => ({ "bi bi-pencil-fill": a0, "bi bi-pencil": a1 });
var _c2 = (a0, a1) => ({ "bi bi-telephone-fill": a0, "bi bi-telephone-x-fill": a1 });
var _c3 = (a0, a1) => ({ "btn-secondary": a0, "btn-success": a1 });
var _c4 = (a0) => ({ "bi bi-patch-check-fill": a0 });
function SimpleVerificacionCreditoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div")(2, "div", 1)(3, "button", 2);
    \u0275\u0275listener("click", function SimpleVerificacionCreditoComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swithAndUpdate("datos"));
    });
    \u0275\u0275element(4, "i", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 1)(6, "button", 2);
    \u0275\u0275listener("click", function SimpleVerificacionCreditoComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swithAndUpdate("llamada"));
    });
    \u0275\u0275element(7, "i", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 1)(9, "button", 4);
    \u0275\u0275element(10, "i", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 1)(12, "button", 6);
    \u0275\u0275element(13, "i", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 1)(15, "button", 6);
    \u0275\u0275element(16, "i", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 1)(18, "button", 2);
    \u0275\u0275listener("click", function SimpleVerificacionCreditoComponent_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swithAndUpdate("aprobar"));
    });
    \u0275\u0275elementStart(19, "i", 3);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.divClass ?? "col-12");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.rowClass ?? "row justify-content-end");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(21, _c07, ctx_r1.verificacionCredito.revision_datos_ingresados == "SI", ctx_r1.verificacionCredito.revision_datos_ingresados != "SI"))("disabled", ctx_r1.verificacionCredito.autorizado_fecha || ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(24, _c12, ctx_r1.verificacionCredito.revision_datos_ingresados == "SI", ctx_r1.verificacionCredito.revision_datos_ingresados != "SI"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(27, _c07, ctx_r1.verificacionCredito.llamada_telefonica == "SI", ctx_r1.verificacionCredito.llamada_telefonica != "SI"))("disabled", ctx_r1.verificacionCredito.autorizado_fecha || ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(30, _c2, ctx_r1.verificacionCredito.llamada_telefonica == "SI", ctx_r1.verificacionCredito.llamada_telefonica != "SI"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/main/creditos/verificaciones/" + ctx_r1.verificacionCredito.credito_id + "/editar/" + ctx_r1.verificacionCredito.id)("disabled", ctx_r1.verificacionCredito.autorizado_fecha || ctx_r1.disabled)("ngClass", \u0275\u0275pureFunction2(33, _c3, ctx_r1.verificacionCredito.longitud_domicilio == null, ctx_r1.verificacionCredito.longitud_domicilio != null));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/main/creditos/verificaciones/" + ctx_r1.verificacionCredito.credito_id + "/editar/" + ctx_r1.verificacionCredito.id)("disabled", ctx_r1.verificacionCredito.autorizado_fecha || ctx_r1.disabled);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/main/creditos/verificaciones/" + ctx_r1.verificacionCredito.credito_id + "/nuevo")("disabled", ctx_r1.verificacionCredito.autorizado_fecha || ctx_r1.disabled);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(36, _c07, ctx_r1.verificacionCredito.autorizado_fecha == null, ctx_r1.verificacionCredito.autorizado_fecha != null))("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(39, _c4, ctx_r1.verificacionCredito.autorizado_fecha == null));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.verificacionCredito.autorizado_fecha ? "Desautorizar" : "Autorizar", " ");
  }
}
var _SimpleVerificacionCreditoComponent = class _SimpleVerificacionCreditoComponent {
  constructor(verificacionCreditoController) {
    this.verificacionCreditoController = verificacionCreditoController;
    this.verificacionCreditoChange = new EventEmitter();
    this.rowClass = "row justify-content-end";
    this.divClass = "col-12";
    this.disabled = false;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes["credito_id"] && this.credito_id) {
        this.verificacionCredito = yield this.verificacionCreditoController.first({
          credito_id: this.credito_id,
          concepto: this.concepto
        });
        this.verificacionCreditoChange.emit(this.verificacionCredito);
      }
    });
  }
  swithAndUpdate(key) {
    return __async(this, null, function* () {
      if (!this.verificacionCredito)
        return;
      switch (key) {
        case "datos":
          this.verificacionCredito.revision_datos_ingresados = this.verificacionCredito.revision_datos_ingresados == "SI" ? "NO" : "SI";
          break;
        case "llamada":
          this.verificacionCredito.llamada_telefonica = this.verificacionCredito.llamada_telefonica == "SI" ? "NO" : "SI";
          break;
        case "aprobar":
          const success2 = yield this.verificacionCreditoController.aprobar(this.verificacionCredito.id);
          if (success2) {
            this.verificacionCredito.autorizado_fecha = this.verificacionCredito.autorizado_fecha ? null : (/* @__PURE__ */ new Date()).toLocaleDateString();
            this.verificacionCreditoChange.emit(this.verificacionCredito);
          }
          return;
      }
      const success = yield this.verificacionCreditoController.update(this.verificacionCredito.id, this.verificacionCredito, false);
      if (!success.status) {
        this.verificacionCredito = yield this.verificacionCreditoController.first({ credito_id: this.credito_id });
      }
      this.verificacionCreditoChange.emit(this.verificacionCredito);
    });
  }
};
_SimpleVerificacionCreditoComponent.\u0275fac = function SimpleVerificacionCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SimpleVerificacionCreditoComponent)(\u0275\u0275directiveInject(VerificacionCreditoService));
};
_SimpleVerificacionCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimpleVerificacionCreditoComponent, selectors: [["app-simple-verificacion-credito"]], inputs: { credito_id: "credito_id", verificacionCredito: "verificacionCredito", concepto: "concepto", rowClass: "rowClass", divClass: "divClass", disabled: "disabled" }, outputs: { verificacionCreditoChange: "verificacionCreditoChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "class"], [1, "col-auto", "p-1"], [1, "btn", "btn-sm", 3, "click", "ngClass", "disabled"], [3, "ngClass"], [1, "btn", "btn-sm", "btn-secondary", 3, "routerLink", "disabled", "ngClass"], [1, "bi", "bi-geo-alt-fill"], [1, "btn", "btn-sm", "btn-secondary", 3, "routerLink", "disabled"], [1, "bi", "bi-pencil-fill"], [1, "bi", "bi-plus-circle-fill"]], template: function SimpleVerificacionCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SimpleVerificacionCreditoComponent_Conditional_0_Template, 21, 41, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.verificacionCredito ? 0 : -1);
  }
}, dependencies: [
  NgClass,
  RouterLink
], encapsulation: 2 });
var SimpleVerificacionCreditoComponent = _SimpleVerificacionCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleVerificacionCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-simple-verificacion-credito", imports: [
      NgClass,
      RouterLink
    ], template: `@if (verificacionCredito) {
  <div [class]="divClass??'col-12'">
    <div [class]="rowClass??'row justify-content-end'">
      <div class="col-auto p-1">
        <button class="btn btn-sm"
            [ngClass]="{
                'btn-success': verificacionCredito.revision_datos_ingresados=='SI', 
                'btn-danger':verificacionCredito.revision_datos_ingresados!='SI'
            }"
          (click)="swithAndUpdate('datos')"
          [disabled]="verificacionCredito.autorizado_fecha || disabled"
          >
                <i [ngClass]="{
                    'bi bi-pencil-fill': verificacionCredito.revision_datos_ingresados=='SI',
                    'bi bi-pencil': verificacionCredito.revision_datos_ingresados!='SI'
                }"
            >
          </i>
        </button>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-sm"
            [ngClass]="{
                'btn-success': verificacionCredito.llamada_telefonica=='SI', 
                'btn-danger':verificacionCredito.llamada_telefonica!='SI'
            }"
          (click)="swithAndUpdate('llamada')"
          [disabled]="verificacionCredito.autorizado_fecha || disabled"
          >
            <i [ngClass]="{
                'bi bi-telephone-fill': verificacionCredito.llamada_telefonica=='SI',
                'bi bi-telephone-x-fill': verificacionCredito.llamada_telefonica!='SI'
            }"
            >
          </i>
        </button>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-sm btn-secondary"
          [routerLink]="'/main/creditos/verificaciones/'+verificacionCredito.credito_id+'/editar/'+verificacionCredito.id"
          [disabled]="verificacionCredito.autorizado_fecha || disabled"
            [ngClass]="{
                'btn-secondary': verificacionCredito.longitud_domicilio==null, 
                'btn-success':verificacionCredito.longitud_domicilio!=null
            }"
          >
          <i class="bi bi-geo-alt-fill"></i>
        </button>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-sm btn-secondary"
          [routerLink]="'/main/creditos/verificaciones/'+verificacionCredito.credito_id+'/editar/'+verificacionCredito.id"
          [disabled]="verificacionCredito.autorizado_fecha || disabled"
          >
          <i class="bi bi-pencil-fill"></i>
        </button>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-sm btn-secondary"
          [routerLink]="'/main/creditos/verificaciones/'+verificacionCredito.credito_id+'/nuevo'"
          [disabled]="verificacionCredito.autorizado_fecha || disabled"
          >
          <i class="bi bi-plus-circle-fill"></i>
        </button>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-sm"
            [ngClass]="{
                'btn-success': verificacionCredito.autorizado_fecha==null, 
                'btn-danger':verificacionCredito.autorizado_fecha!=null
            }"
          [disabled]="disabled"
          (click)="swithAndUpdate('aprobar')"
          >
            <i [ngClass]="{
                'bi bi-patch-check-fill': verificacionCredito.autorizado_fecha==null,
            }"
            >
            {{verificacionCredito.autorizado_fecha?'Desautorizar':'Autorizar'}}
          </i>
        </button>
      </div>
    </div>
  </div>
}` }]
  }], () => [{ type: VerificacionCreditoService }], { credito_id: [{
    type: Input
  }], verificacionCredito: [{
    type: Input
  }], concepto: [{
    type: Input
  }], verificacionCreditoChange: [{
    type: Output
  }], rowClass: [{
    type: Input
  }], divClass: [{
    type: Input
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimpleVerificacionCreditoComponent, { className: "SimpleVerificacionCreditoComponent", filePath: "src/app/main/creditos/credito-form/simple-verificacion-credito/simple-verificacion-credito.component.ts", lineNumber: 16 });
})();

// src/app/main/creditos/credito-validar/credito-validar.component.ts
var _c08 = () => ["created_at", "updated_at", "calle", "no_interior", "no_exterior", "colonia", "codigo_postal", "localidad", "ciudades", "estados", "referencias_domicilio", "homoclave"];
var _c13 = () => ["calle", "no_interior", "no_exterior", "colonia", "codigo_postal", "localidad", "ciudades", "estados", "referencias_domicilio"];
var _c22 = () => ["autorizado_por", "autorizado_fecha", "created_at", "updated_at", "deleted_at", "productos_financieros_documentos"];
var _c32 = () => ["banco", "numero_cuenta", "clabe_interbancaria"];
var _c42 = () => ["tipo_empresa", "local_tipo", "resumen_actividad_empresarial", "created_at", "updated_at", "calle", "no_interior", "no_exterior", "localidad", "ciudades", "estados", "referencia_domicilio", "colonia", "codigo_postal", "created_at", "representante_legal"];
var _c5 = () => ["calle", "no_interior", "no_exterior", "colonia", "codigo_postal", "localidad", "ciudades", "estados", "referencia_domicilio"];
var _c6 = () => ["created_at", "id", "updated_at"];
var _c7 = () => ["calle", "no_interior", "no_exterior", "colonia", "codigo_postal", "localidad", "ciudades", "estados", "referencias_domicilio", "created_at", "updated_at", "homoclave"];
var _c8 = () => ["created_at", "updated_at"];
function CreditoValidarComponent_Conditional_0_Conditional_61_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-simple-verificacion-credito", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const verificacion_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("verificacionCredito", verificacion_r3);
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275repeaterCreate(3, CreditoValidarComponent_Conditional_0_Conditional_61_For_4_Template, 2, 1, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "data-view-section", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.verificacion("NEGOCIO PM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("NEGOCIO PM")))("data", ctx_r1.credito.datos_personas_morales)("ignoreNumbers", true)("ignoreKeys", \u0275\u0275pureFunction0(4, _c42));
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "data-view-section", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("NEGOCIO PM")))("data", ctx_r1.credito.datos_personas_morales)("ignoreNumbers", true)("keys", \u0275\u0275pureFunction0(4, _c5));
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_63_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-simple-verificacion-credito", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const verificacion_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("verificacionCredito", verificacion_r4);
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275repeaterCreate(3, CreditoValidarComponent_Conditional_0_Conditional_63_For_4_Template, 2, 1, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "data-view-section", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.verificacion("ACTA CONSTITUTIVA PM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("ACTA CONSTITUTIVA PM")))("data", ctx_r1.credito.datos_personas_morales.acta_constitutiva)("ignoreNumbers", true)("ignoreKeys", \u0275\u0275pureFunction0(4, _c6));
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_64_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-simple-verificacion-credito", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const verificacion_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("verificacionCredito", verificacion_r5);
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275repeaterCreate(3, CreditoValidarComponent_Conditional_0_Conditional_64_For_4_Template, 2, 1, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "data-view-section", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.verificacion("REPRESENTANTE LEGAL PM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("REPRESENTANTE LEGAL PM")))("ignoreKeys", \u0275\u0275pureFunction0(4, _c7))("data", ctx_r1.credito.datos_personas_morales.representante_legal)("ignoreNumbers", true);
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "data-view-section", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("REPRESENTANTE LEGAL PM")))("data", ctx_r1.credito.datos_personas_morales.representante_legal)("keys", \u0275\u0275pureFunction0(3, _c13));
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_66_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-simple-verificacion-credito", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const verificacion_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r1.credito.autorizado_fecha)("disabled", !!ctx_r1.credito.autorizado_fecha)("verificacionCredito", verificacion_r6);
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275repeaterCreate(3, CreditoValidarComponent_Conditional_0_Conditional_66_For_4_Template, 2, 3, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "data-view-section", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.verificacion("ACCIONISTAS PM"));
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("ACCIONISTAS PM")))("data", ctx_r1.credito.datos_personas_morales.accionistas)("ignoreNumbers", true);
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_67_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-simple-verificacion-credito", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const verificacion_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r1.credito.autorizado_fecha)("disabled", !!ctx_r1.credito.autorizado_fecha)("verificacionCredito", verificacion_r7);
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 36)(3, "div", 37);
    \u0275\u0275repeaterCreate(4, CreditoValidarComponent_Conditional_0_Conditional_67_For_5_Template, 2, 3, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "data-view-section", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.verificacion("DATOS PERSONALES PF"));
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("DATOS PERSONALES PF")))("data", ctx_r1.credito.datos_persona_fisica == null ? null : ctx_r1.credito.datos_persona_fisica.datos_personales)("ignoreNumbers", true)("ignoreKeys", \u0275\u0275pureFunction0(4, _c08));
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "data-view-section", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("DATOS PERSONALES PF")))("data", ctx_r1.credito.datos_persona_fisica.datos_personales)("ignoreNumbers", true)("keys", \u0275\u0275pureFunction0(4, _c13));
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_69_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-simple-verificacion-credito", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const verificacion_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r1.credito.autorizado_fecha)("disabled", !!ctx_r1.credito.autorizado_fecha)("verificacionCredito", verificacion_r8);
  }
}
function CreditoValidarComponent_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275repeaterCreate(3, CreditoValidarComponent_Conditional_0_Conditional_69_For_4_Template, 2, 3, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "data-view-section", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.verificacion("NEGOCIO PF"));
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("NEGOCIO PF")))("data", ctx_r1.credito.datos_persona_fisica == null ? null : ctx_r1.credito.datos_persona_fisica.negocios)("ignoreNumbers", true)("ignoreKeys", \u0275\u0275pureFunction0(4, _c8));
  }
}
function CreditoValidarComponent_Conditional_0_For_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-simple-verificacion-credito", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const verificacion_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r1.credito.autorizado_fecha)("disabled", !!ctx_r1.credito.autorizado_fecha)("verificacionCredito", verificacion_r9);
  }
}
function CreditoValidarComponent_Conditional_0_For_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-simple-verificacion-credito", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const verificacion_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !!ctx_r1.credito.autorizado_fecha)("disabled", !!ctx_r1.credito.autorizado_fecha)("verificacionCredito", verificacion_r10);
  }
}
function CreditoValidarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3")(4, "b");
    \u0275\u0275text(5, "Verificar Cr\xE9dito");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 3)(7, "a", 4);
    \u0275\u0275element(8, "i", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 3)(10, "button", 6);
    \u0275\u0275listener("click", function CreditoValidarComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.creditoController.validarCredito(ctx_r1.credito));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "span", 13);
    \u0275\u0275text(19, "Cr\xE9dito");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(20, "hr", 14);
    \u0275\u0275elementStart(21, "div", 7)(22, "div", 15)(23, "div", 7)(24, "div", 16);
    \u0275\u0275text(25, " Folio: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 16)(27, "b");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 7)(30, "div", 16);
    \u0275\u0275text(31, " Nombre Solicitante: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 16)(33, "b");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 7)(36, "div", 16);
    \u0275\u0275text(37, " Producto Financiero: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 16)(39, "b");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 7)(42, "div", 16);
    \u0275\u0275text(43, " Estado: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 16)(45, "b");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 7)(48, "div", 16);
    \u0275\u0275text(49, " Monto: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 16)(51, "b");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 7)(55, "div", 16);
    \u0275\u0275text(56, " Plazo: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 16)(58, "b");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275elementStart(60, "div", 7);
    \u0275\u0275conditionalCreate(61, CreditoValidarComponent_Conditional_0_Conditional_61_Template, 6, 5, "div", 17);
    \u0275\u0275conditionalCreate(62, CreditoValidarComponent_Conditional_0_Conditional_62_Template, 3, 5, "div", 17);
    \u0275\u0275conditionalCreate(63, CreditoValidarComponent_Conditional_0_Conditional_63_Template, 6, 5, "div", 17);
    \u0275\u0275conditionalCreate(64, CreditoValidarComponent_Conditional_0_Conditional_64_Template, 6, 5, "div", 17);
    \u0275\u0275conditionalCreate(65, CreditoValidarComponent_Conditional_0_Conditional_65_Template, 3, 4, "div", 17);
    \u0275\u0275conditionalCreate(66, CreditoValidarComponent_Conditional_0_Conditional_66_Template, 6, 3, "div", 17);
    \u0275\u0275conditionalCreate(67, CreditoValidarComponent_Conditional_0_Conditional_67_Template, 7, 5, "div", 17);
    \u0275\u0275conditionalCreate(68, CreditoValidarComponent_Conditional_0_Conditional_68_Template, 3, 5, "div", 17);
    \u0275\u0275conditionalCreate(69, CreditoValidarComponent_Conditional_0_Conditional_69_Template, 6, 5, "div", 17);
    \u0275\u0275elementStart(70, "div", 17)(71, "div", 18)(72, "div", 19);
    \u0275\u0275repeaterCreate(73, CreditoValidarComponent_Conditional_0_For_74_Template, 2, 3, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(75, "data-view-section", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 17)(77, "div", 18);
    \u0275\u0275element(78, "data-view-section", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 17)(80, "div", 18)(81, "div", 19);
    \u0275\u0275repeaterCreate(82, CreditoValidarComponent_Conditional_0_For_83_Template, 2, 3, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "data-view-section", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 17)(86, "div", 18)(87, "div", 19)(88, "div", 20);
    \u0275\u0275text(89);
    \u0275\u0275elementStart(90, "b");
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(92, "data-view-section", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 7)(94, "div", 8)(95, "div", 18)(96, "div", 19)(97, "div", 20)(98, "button", 25);
    \u0275\u0275listener("click", function CreditoValidarComponent_Conditional_0_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.creditoController.validarDatosBancarios(ctx_r1.credito));
    });
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(100, "data-view-section", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", "/main/creditos/editar/" + ctx_r1.credito.id);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.credito.autorizado_fecha ? "btn-danger" : "btn-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.credito.autorizado_fecha ? "Cancelar" : "Finalizar", " Validaci\xF3n ");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.credito.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.utils.nombreClienteFromCredito(ctx_r1.credito));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.credito.productos_financieros == null ? null : ctx_r1.credito.productos_financieros.nombre);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.credito.estado);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 43, ctx_r1.utils.totalFromCredito(ctx_r1.credito)));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.credito.inversiones_programas == null ? null : ctx_r1.credito.inversiones_programas.plazo_solicitado_meses);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 61 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.credito.datos_persona_fisica == null ? null : ctx_r1.credito.datos_persona_fisica.datos_personales) ? 67 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_persona_fisica ? 68 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.credito.datos_persona_fisica == null ? null : ctx_r1.credito.datos_persona_fisica.negocios) ? 69 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.verificacion("AVAL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("AVAL")))("ignoreKeys", \u0275\u0275pureFunction0(45, _c08))("data", ctx_r1.credito.aval)("ignoreNumbers", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("AVAL")))("data", ctx_r1.credito.aval)("ignoreNumbers", true)("keys", \u0275\u0275pureFunction0(46, _c13));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.verificacion("REFERENCIAS PERSOALES/SOCIOS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("bootstrapClass", ctx_r1.generalClass(ctx_r1.verificacion("REFERENCIAS PERSOALES/SOCIOS")))("data", ctx_r1.credito.referencias_personales)("ignoreNumbers", true);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Documentos subidos: ", ctx_r1.documentosSubidos(), "/");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.credito.documentos == null ? null : ctx_r1.credito.documentos.length) ?? 0);
    \u0275\u0275advance();
    \u0275\u0275property("bootstrapClass", ctx_r1.documentosClass())("data", ctx_r1.documentosCredito())("urlKey", "url")("ignoreNumbers", true)("ignoreKeys", \u0275\u0275pureFunction0(47, _c22));
    \u0275\u0275advance(6);
    \u0275\u0275classMap(ctx_r1.credito.datos_bancarios_verificados == "SI" ? "btn-danger" : "btn-success");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.credito.datos_bancarios_verificados == "SI" ? "Desvalidar" : "Validar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.credito)("keys", \u0275\u0275pureFunction0(48, _c32))("ignoreNumbers", true);
  }
}
var _CreditoValidarComponent = class _CreditoValidarComponent {
  constructor(creditoController, route, utils) {
    this.creditoController = creditoController;
    this.route = route;
    this.utils = utils;
    this.verificacionesCredito = [];
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const credito_id = this.utils.intOrNull(params.get("credito_id"));
      if (credito_id) {
        this.credito = yield this.creditoController.find(credito_id, [
          "aval",
          "aval.ciudades.estados",
          "datosPersonales",
          "datosPersonaFisica",
          "datosPersonaFisica.datosPersonales",
          "datosPersonaFisica.datosPersonales.ciudades.estados",
          "datosPersonaFisica.datosPersonales.estados",
          "datosPersonaFisica.negocios",
          "datosPersonaFisica.negocios.negociosDiasLaborables",
          "datosPersonaFisica.negocios.negociosActividadesEconomicas",
          "datosPersonaFisica.negocios.negociosActividadesEconomicas.actividadesEconomicas",
          "datosPersonaFisica.negocios.usuarios",
          "datosPersonaFisica.usuarios",
          "datosPersonasMorales",
          "datosPersonasMorales.actaConstitutiva",
          "datosPersonasMorales.ciudades",
          "datosPersonasMorales.representanteLegal",
          "datosPersonasMorales.representanteLegal.ciudades.estados",
          "datosPersonasMorales.representanteLegal.estados",
          "datosPersonasMorales.usuarios",
          "datosPersonasMorales.accionistas",
          "inversionesProgramas",
          "inversionesProgramas.inversionTipos",
          "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
          "productosFinancieros",
          "productosFinancieros.documentos",
          "productosFinancieros.documentos.documento",
          "referenciasPersonales",
          "verificaciones",
          "documentos.productosFinancierosDocumentos.documento"
        ]);
        this.verificacionesCredito = this.credito?.verificaciones ?? [];
        console.log(this.credito, this.verificacionesCredito);
      }
    }));
  }
  verificacion(concepto) {
    return this.verificacionesCredito.filter((v) => v.concepto === concepto);
  }
  documentosCredito() {
    return this.credito?.documentos?.map((doc) => {
      return __spreadProps(__spreadValues({}, doc), {
        nombre: doc.productos_financieros_documentos?.documento?.nombre,
        prioridad: doc.productos_financieros_documentos?.prioridad,
        subido: doc.url ? "SI" : "NO"
      });
    });
  }
  /**
   * Determina la clase de Bootstrap a aplicar basada en el estado de las verificaciones de crédito.
   *
   * @param verificacion - Un array de objetos `VerificacionCredito` que representan las verificaciones realizadas.
   * @returns Una cadena que representa la clase de Bootstrap: 'success' si el crédito está autorizado o todas las verificaciones están autorizadas,
   *          'danger' en caso contrario.
   */
  generalClass(verificacion) {
    if (this.credito?.autorizado_fecha)
      return "success";
    if (verificacion.every((verif) => verif.autorizado_fecha))
      return "success";
    return "danger";
  }
  /**
   * Determina la clase de Bootstrap a aplicar basada en el estado de los documentos del crédito.
   *
   * @returns Una cadena que representa la clase de Bootstrap:
   *          - 'success' si el crédito está autorizado o todos los documentos están subidos.
   *          - 'warning' si al menos un documento está subido pero no todos.
   *          - 'danger' si no hay documentos subidos o el crédito no está autorizado.
   */
  documentosClass() {
    const documentos_subidos = this.credito?.documentos?.filter((doc) => doc.url).length;
    if (this.credito?.autorizado_fecha)
      return "success";
    if (!documentos_subidos)
      return "danger";
    if (documentos_subidos === this.credito?.documentos?.length) {
      return "success";
    }
    if (documentos_subidos > 0) {
      return "warning";
    }
    return "danger";
  }
  documentosSubidos() {
    return this.credito?.documentos?.filter((doc) => doc.url).length ?? 0;
  }
};
_CreditoValidarComponent.\u0275fac = function CreditoValidarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoValidarComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_CreditoValidarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditoValidarComponent, selectors: [["app-credito-validar"]], decls: 1, vars: 1, consts: [[1, "container-fluid", "p-3"], [1, "row", "justify-content-end"], [1, "col-auto", "me-auto", "p-1"], [1, "col-auto", "p-1"], [1, "btn", "btn-success", 3, "routerLink"], [1, "bi", "bi-pencil-fill"], [1, "btn", 3, "click"], [1, "row"], [1, "col-12", "col-sm", "p-1"], [1, "col", "border", "bg-white", "rounded"], [1, "container-fluid"], [1, "row", "mt-3"], [1, "col"], [1, "h3", "fw-bold"], [1, "border-primary"], [1, "col", "p-3", "text-uppercase"], [1, "col-6"], [1, "col-12", "col-sm-12", "p-1"], [1, "col", "border", "bg-white", "rounded", "position-relative"], [1, "row", "justify-content-end", "position-absolute", "top-0", "end-0", "z-3", "pe-3"], [1, "col-12", "col-sm-auto", "p-1"], ["title", "Aval", 3, "bootstrapClass", "ignoreKeys", "data", "ignoreNumbers"], ["title", "Domicilio Aval", 3, "bootstrapClass", "data", "ignoreNumbers", "keys"], ["title", "Referencias Personales", 3, "bootstrapClass", "data", "ignoreNumbers"], ["title", "Documentos", 3, "bootstrapClass", "data", "urlKey", "ignoreNumbers", "ignoreKeys"], [1, "btn", "btn-sm", 3, "click"], ["title", "Datos Bancarios", "divClass", "container-fluid p-3", 3, "data", "keys", "ignoreNumbers"], ["title", "Datos Negocio PM", 3, "bootstrapClass", "data", "ignoreNumbers", "ignoreKeys"], ["divClass", "container p-3", 3, "verificacionCredito"], ["title", "Domicilio Negocio", 3, "bootstrapClass", "data", "ignoreNumbers", "keys"], ["title", "Acta Constitutiva", 3, "bootstrapClass", "data", "ignoreNumbers", "ignoreKeys"], [3, "verificacionCredito"], ["title", "Representante Legal", 3, "bootstrapClass", "ignoreKeys", "data", "ignoreNumbers"], ["title", "Domicilio Representante Legal", 3, "bootstrapClass", "data", "keys"], ["title", "Accionistas", 3, "bootstrapClass", "data", "ignoreNumbers"], [3, "disabled", "verificacionCredito"], [1, "container-fluid", "position-absolute", "top-0", "end-0", "z-3"], [1, "row", "justify-content-end", "pe-3"], ["title", "Datos Personales", 3, "bootstrapClass", "data", "ignoreNumbers", "ignoreKeys"], ["title", "Domicilio persona f\xEDsica", 3, "bootstrapClass", "data", "ignoreNumbers", "keys"], ["title", "Negocio", 3, "bootstrapClass", "data", "ignoreNumbers", "ignoreKeys"]], template: function CreditoValidarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CreditoValidarComponent_Conditional_0_Template, 101, 49, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [
  SimpleVerificacionCreditoComponent,
  DataViewSectionComponent,
  RouterLink,
  CurrencyPipe
], encapsulation: 2 });
var CreditoValidarComponent = _CreditoValidarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoValidarComponent, [{
    type: Component,
    args: [{ selector: "app-credito-validar", imports: [
      SimpleVerificacionCreditoComponent,
      DataViewSectionComponent,
      RouterLink,
      CurrencyPipe
    ], template: `@if (credito) {
  <div class="container-fluid p-3">
    <div class="row justify-content-end">
      <div class="col-auto me-auto p-1">
        <h3><b>Verificar Cr\xE9dito</b></h3>
      </div>
      <div class="col-auto p-1">
        <a class="btn btn-success" [routerLink]="'/main/creditos/editar/'+credito.id">
          <i class="bi bi-pencil-fill"></i>
        </a>
      </div>
      <div class="col-auto p-1">
        <button class="btn" [class]="credito.autorizado_fecha?'btn-danger':'btn-primary'"
          (click)="creditoController.validarCredito(credito)">
          {{credito.autorizado_fecha?'Cancelar':'Finalizar'}} Validaci\xF3n
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm p-1">
        <div class="col border bg-white rounded">
          <div class="container-fluid">
            <div class="row mt-3">
              <div class="col">
                <span class="h3 fw-bold">Cr\xE9dito</span>
              </div>
            </div>
            <hr class="border-primary">
            <div class="row">
              <div class="col p-3 text-uppercase">
                <div class="row">
                  <div class="col-6">
                    Folio:
                  </div>
                  <div class="col-6">
                    <b>{{credito.id}}</b>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    Nombre Solicitante:
                  </div>
                  <div class="col-6">
                    <b>{{utils.nombreClienteFromCredito(credito)}}</b>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    Producto Financiero:
                  </div>
                  <div class="col-6">
                    <b>{{credito.productos_financieros?.nombre}}</b>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    Estado:
                  </div>
                  <div class="col-6">
                    <b>{{credito.estado}}</b>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    Monto:
                  </div>
                  <div class="col-6">
                    <b>{{utils.totalFromCredito(credito) | currency}}</b>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    Plazo:
                  </div>
                  <div class="col-6">
                    <b>{{credito.inversiones_programas?.plazo_solicitado_meses}}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      @if (credito.datos_personas_morales) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
              @for (verificacion of verificacion('NEGOCIO PM'); track verificacion) {
                <div class="col-12 col-sm-auto p-1">
                  <app-simple-verificacion-credito divClass="container p-3"
                    [verificacionCredito]="verificacion" />
                </div>
              }
            </div>
            <data-view-section title="Datos Negocio PM" [bootstrapClass]="generalClass(verificacion('NEGOCIO PM'))"
              [data]="credito.datos_personas_morales" [ignoreNumbers]="true" [ignoreKeys]="['tipo_empresa','local_tipo','resumen_actividad_empresarial','created_at','updated_at','calle','no_interior','no_exterior', 'localidad','ciudades','estados','referencia_domicilio','colonia','codigo_postal','created_at', 'representante_legal']" />
          </div>
        </div>
      }
      @if (credito.datos_personas_morales) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <data-view-section title="Domicilio Negocio" [bootstrapClass]="generalClass(verificacion('NEGOCIO PM'))"
              [data]="credito.datos_personas_morales" [ignoreNumbers]="true" [keys]="['calle','no_interior','no_exterior','colonia', 'codigo_postal', 'localidad','ciudades','estados','referencia_domicilio']" />
          </div>
        </div>
      }
      @if (credito.datos_personas_morales) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
              @for (verificacion of verificacion('ACTA CONSTITUTIVA PM'); track verificacion) {
                <div class="col-12 col-sm-auto p-1"
                  >
                  <app-simple-verificacion-credito [verificacionCredito]="verificacion" />
                </div>
              }
            </div>
            <data-view-section title="Acta Constitutiva"
              [bootstrapClass]="generalClass(verificacion('ACTA CONSTITUTIVA PM'))"
              [data]="credito.datos_personas_morales.acta_constitutiva" [ignoreNumbers]="true" [ignoreKeys]="['created_at','id','updated_at']" />
          </div>
        </div>
      }
      @if (credito.datos_personas_morales) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
              @for (verificacion of verificacion('REPRESENTANTE LEGAL PM'); track verificacion) {
                <div class="col-12 col-sm-auto p-1"
                  >
                  <app-simple-verificacion-credito [verificacionCredito]="verificacion" />
                </div>
              }
            </div>
            <data-view-section title="Representante Legal"
              [bootstrapClass]="generalClass(verificacion('REPRESENTANTE LEGAL PM'))" [ignoreKeys]="['calle','no_interior','no_exterior','colonia', 'codigo_postal', 'localidad','ciudades','estados','referencias_domicilio','created_at','updated_at', 'homoclave']"
              [data]="credito.datos_personas_morales.representante_legal" [ignoreNumbers]="true" />
          </div>
        </div>
      }
      @if (credito.datos_personas_morales) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <data-view-section title="Domicilio Representante Legal" [bootstrapClass]="generalClass(verificacion('REPRESENTANTE LEGAL PM'))"
              [data]="credito.datos_personas_morales.representante_legal" [keys]="['calle','no_interior','no_exterior','colonia', 'codigo_postal', 'localidad','ciudades','estados','referencias_domicilio']" />
          </div>
        </div>
      }
      @if (credito.datos_personas_morales) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
              @for (verificacion of verificacion('ACCIONISTAS PM'); track verificacion) {
                <div class="col-12 col-sm-auto p-1">
                  <app-simple-verificacion-credito [disabled]="!!credito.autorizado_fecha"
                    [disabled]="!!credito.autorizado_fecha" [verificacionCredito]="verificacion" />
                </div>
              }
            </div>
            <data-view-section title="Accionistas" [bootstrapClass]="generalClass(verificacion('ACCIONISTAS PM'))"
              [data]="credito.datos_personas_morales.accionistas" [ignoreNumbers]="true" />
          </div>
        </div>
      }
      <!--AQUI EMPIEZA PERSONA FISICA-->
      @if (credito.datos_persona_fisica?.datos_personales) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <div class="container-fluid position-absolute top-0 end-0 z-3">
              <div class="row justify-content-end pe-3">
                @for (verificacion of verificacion('DATOS PERSONALES PF'); track verificacion) {
                  <div class="col-12 col-sm-auto p-1"
                    >
                    <app-simple-verificacion-credito [disabled]="!!credito.autorizado_fecha"
                      [disabled]="!!credito.autorizado_fecha" [verificacionCredito]="verificacion" />
                  </div>
                }
              </div>
            </div>
            <data-view-section title="Datos Personales"
              [bootstrapClass]="generalClass(verificacion('DATOS PERSONALES PF'))"
              [data]="credito.datos_persona_fisica?.datos_personales" [ignoreNumbers]="true" [ignoreKeys]="['created_at','updated_at','calle','no_interior','no_exterior','colonia', 'codigo_postal', 'localidad','ciudades','estados','referencias_domicilio', 'homoclave']" />
          </div>
        </div>
      }
      @if (credito.datos_persona_fisica) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <data-view-section title="Domicilio persona f\xEDsica" [bootstrapClass]="generalClass(verificacion('DATOS PERSONALES PF'))"
              [data]="credito.datos_persona_fisica.datos_personales" [ignoreNumbers]="true" [keys]="['calle','no_interior','no_exterior','colonia', 'codigo_postal', 'localidad','ciudades','estados','referencias_domicilio']" />
          </div>
        </div>
      }
      @if (credito.datos_persona_fisica?.negocios) {
        <div class="col-12 col-sm-12 p-1">
          <div class="col border bg-white rounded position-relative">
            <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
              @for (verificacion of verificacion('NEGOCIO PF'); track verificacion) {
                <div class="col-12 col-sm-auto p-1">
                  <app-simple-verificacion-credito [disabled]="!!credito.autorizado_fecha"
                    [disabled]="!!credito.autorizado_fecha" [verificacionCredito]="verificacion" />
                </div>
              }
            </div>
            <data-view-section title="Negocio" [bootstrapClass]="generalClass(verificacion('NEGOCIO PF'))"
              [data]="credito.datos_persona_fisica?.negocios" [ignoreNumbers]="true" [ignoreKeys]="['created_at','updated_at']" />
          </div>
        </div>
      }
      <div class="col-12 col-sm-12 p-1">
        <div class="col border bg-white rounded position-relative">
          <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
            @for (verificacion of verificacion('AVAL'); track verificacion) {
              <div class="col-12 col-sm-auto p-1">
                <app-simple-verificacion-credito [disabled]="!!credito.autorizado_fecha"
                  [disabled]="!!credito.autorizado_fecha" [verificacionCredito]="verificacion"  />
              </div>
            }
          </div>
          <data-view-section title="Aval" [bootstrapClass]="generalClass(verificacion('AVAL'))" [ignoreKeys]="['created_at','updated_at','calle','no_interior','no_exterior','colonia', 'codigo_postal', 'localidad','ciudades','estados','referencias_domicilio', 'homoclave' ]"
            [data]="credito.aval" [ignoreNumbers]="true" />
        </div>
      </div>
      <div class="col-12 col-sm-12 p-1">
        <div class="col border bg-white rounded position-relative">
          <data-view-section title="Domicilio Aval" [bootstrapClass]="generalClass(verificacion('AVAL'))"
            [data]="credito.aval" [ignoreNumbers]="true" [keys]="['calle','no_interior','no_exterior','colonia', 'codigo_postal', 'localidad','ciudades','estados','referencias_domicilio']" />
        </div>
      </div>
      <div class="col-12 col-sm-12 p-1">
        <div class="col border bg-white rounded position-relative">
          <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
            @for (verificacion of verificacion('REFERENCIAS PERSOALES/SOCIOS'); track verificacion) {
              <div class="col-12 col-sm-auto p-1"
                >
                <app-simple-verificacion-credito [disabled]="!!credito.autorizado_fecha"
                  [disabled]="!!credito.autorizado_fecha" [verificacionCredito]="verificacion" />
              </div>
            }
          </div>
          <data-view-section title="Referencias Personales"
            [bootstrapClass]="generalClass(verificacion('REFERENCIAS PERSOALES/SOCIOS'))"
            [data]="credito.referencias_personales" [ignoreNumbers]="true" />
        </div>
      </div>
      <div class="col-12 col-sm-12 p-1">
        <div class="col border bg-white rounded position-relative">
          <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
            <div class="col-12 col-sm-auto p-1">
              Documentos subidos: {{documentosSubidos()}}/<b>{{credito.documentos?.length??0}}</b>
            </div>
          </div>
          <data-view-section title="Documentos" [bootstrapClass]="documentosClass()" [data]="documentosCredito()" [urlKey]="'url'"
            [ignoreNumbers]="true" [ignoreKeys]="['autorizado_por','autorizado_fecha','created_at','updated_at','deleted_at','productos_financieros_documentos']" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm p-1">
        <div class="col border bg-white rounded position-relative">
          <div class="row justify-content-end position-absolute top-0 end-0 z-3 pe-3">
            <div class="col-12 col-sm-auto p-1">
              <button class="btn btn-sm " [class]="credito.datos_bancarios_verificados=='SI'?'btn-danger':'btn-success'"
                (click)="creditoController.validarDatosBancarios(credito)">
                {{credito.datos_bancarios_verificados=='SI'?'Desvalidar':'Validar'}}
              </button>
            </div>
          </div>
          <data-view-section title="Datos Bancarios" divClass="container-fluid p-3" [data]="credito"
            [keys]="['banco','numero_cuenta','clabe_interbancaria']"
            [ignoreNumbers]="true" />
        </div>
      </div>
    </div>
  </div>
}` }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditoValidarComponent, { className: "CreditoValidarComponent", filePath: "src/app/main/creditos/credito-validar/credito-validar.component.ts", lineNumber: 24 });
})();

// src/app/main/creditos/contratos-credito/contratos-credito.component.ts
var _c09 = (a0) => ({ id: a0, nombre: "CONTRATO DE CREDITO PFAE" });
var _c14 = (a0) => ({ id: a0, nombre: "CONTRATO DE CREDITO" });
function ContratosCreditoComponent_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 28)(1, "div", 29)(2, "div", 30)(3, "h5", 31)(4, "b");
    \u0275\u0275text(5, "Contrato de Cr\xE9dito PF");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 33)(7, "button", 35);
    \u0275\u0275listener("click", function ContratosCreditoComponent_Conditional_0_Conditional_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.contrato_credito_pfea.contratoCredito(ctx_r1.credito, ctx_r1.credito.fecha_convenio));
    });
    \u0275\u0275element(8, "i", 36);
    \u0275\u0275elementEnd()()()();
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_48_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "h5", 31)(3, "b");
    \u0275\u0275text(4, "Contrato de Cr\xE9dito PM");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 33)(6, "button", 35);
    \u0275\u0275listener("click", function ContratosCreditoComponent_Conditional_0_Conditional_48_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.contrato_credito_pm.contratoCredito(ctx_r1.credito, ctx_r1.credito.fecha_convenio));
    });
    \u0275\u0275element(7, "i", 36);
    \u0275\u0275elementEnd()()();
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 28);
    \u0275\u0275conditionalCreate(1, ContratosCreditoComponent_Conditional_0_Conditional_48_Conditional_1_Template, 8, 0, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 1 : -1);
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 32);
    \u0275\u0275text(1, "SUBIDO");
    \u0275\u0275elementEnd();
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLine(ctx_r1.urlDoc("NOTIFICACION COBRANZA PFAE")), \u0275\u0275sanitizeUrl);
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 32);
    \u0275\u0275text(1, "SUBIDO");
    \u0275\u0275elementEnd();
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLine(ctx_r1.credito.credito_pagares == null ? null : ctx_r1.credito.credito_pagares.documento_url), \u0275\u0275sanitizeUrl);
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 32);
    \u0275\u0275text(1, "SUBIDO");
    \u0275\u0275elementEnd();
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLine(ctx_r1.urlDoc("TABLA AMORTIZACION")), \u0275\u0275sanitizeUrl);
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 32);
    \u0275\u0275text(1, "SUBIDO");
    \u0275\u0275elementEnd();
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLine(ctx_r1.urlDoc("REFERENCIA BANCARIA")), \u0275\u0275sanitizeUrl);
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_106_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 32);
    \u0275\u0275text(1, "SUBIDO ");
    \u0275\u0275elementEnd();
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 45)(2, "h5");
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275text(4, " Contratos Firmados ");
    \u0275\u0275conditionalCreate(5, ContratosCreditoComponent_Conditional_0_Conditional_106_Conditional_5_Template, 2, 0, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-file-input", 47);
    \u0275\u0275listener("urlChange", function ContratosCreditoComponent_Conditional_0_Conditional_106_Template_app_file_input_urlChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onUrlChange("CONTRATO DE CREDITO PFAE", $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.urlDoc("CONTRATO DE CREDITO") || ctx_r1.urlDoc("CONTRATO DE CREDITO PFAE") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("automaticSave", true)("formExtra", \u0275\u0275pureFunction1(3, _c09, ctx_r1.credito.id));
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 45)(2, "h5");
    \u0275\u0275element(3, "i", 46);
    \u0275\u0275text(4, " Contratos Firmados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-file-input", 47);
    \u0275\u0275listener("urlChange", function ContratosCreditoComponent_Conditional_0_Conditional_107_Template_app_file_input_urlChange_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onUrlChange("CONTRATO DE CREDITO", $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("automaticSave", true)("formExtra", \u0275\u0275pureFunction1(2, _c14, ctx_r1.credito.id));
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLine(ctx_r1.urlDoc("CONTRATO DE CREDITO PFAE")), \u0275\u0275sanitizeUrl);
  }
}
function ContratosCreditoComponent_Conditional_0_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.utils.fileUrlInLine(ctx_r1.urlDoc("CONTRATO DE CREDITO")), \u0275\u0275sanitizeUrl);
  }
}
function ContratosCreditoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "Complete todos los documentos requeridos y llene todos los campos de las fechas. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
    \u0275\u0275listener("click", function ContratosCreditoComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.formalizarCredito());
    });
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
    \u0275\u0275element(16, "i", 12);
    \u0275\u0275text(17, " Fechas Clave ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "label", 16);
    \u0275\u0275text(22, "Fecha Convenio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17)(24, "span", 18);
    \u0275\u0275element(25, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ContratosCreditoComponent_Conditional_0_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito.fecha_convenio, $event) || (ctx_r1.credito.fecha_convenio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContratosCreditoComponent_Conditional_0_Template_input_ngModelChange_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateAmortizacionDates());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 15)(28, "label", 16);
    \u0275\u0275text(29, "1ra Amortizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 17)(31, "span", 18);
    \u0275\u0275element(32, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ContratosCreditoComponent_Conditional_0_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito.fecha_amortizacion, $event) || (ctx_r1.credito.fecha_amortizacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContratosCreditoComponent_Conditional_0_Template_input_ngModelChange_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.creditoController.update(ctx_r1.credito.id, { fecha_amortizacion: ctx_r1.credito.fecha_amortizacion }));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 15)(35, "label", 16);
    \u0275\u0275text(36, "Fecha Pagar\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 17)(38, "span", 18);
    \u0275\u0275element(39, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ContratosCreditoComponent_Conditional_0_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito.fecha_pagare, $event) || (ctx_r1.credito.fecha_pagare = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ContratosCreditoComponent_Conditional_0_Template_input_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.creditoController.update(ctx_r1.credito.id, { fecha_pagare: ctx_r1.credito.fecha_pagare }));
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 23)(42, "div", 24);
    \u0275\u0275element(43, "i", 25);
    \u0275\u0275text(44, " Documentos Requeridos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 26)(46, "ul", 27);
    \u0275\u0275conditionalCreate(47, ContratosCreditoComponent_Conditional_0_Conditional_47_Template, 9, 0, "li", 28);
    \u0275\u0275conditionalCreate(48, ContratosCreditoComponent_Conditional_0_Conditional_48_Template, 2, 1, "li", 28);
    \u0275\u0275elementStart(49, "li", 28)(50, "div", 29)(51, "div", 30)(52, "h5", 31)(53, "b");
    \u0275\u0275text(54, "Notificaci\xF3n de Cobranza");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(55, ContratosCreditoComponent_Conditional_0_Conditional_55_Template, 2, 0, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 33);
    \u0275\u0275conditionalCreate(57, ContratosCreditoComponent_Conditional_0_Conditional_57_Template, 2, 1, "a", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 33)(59, "button", 35);
    \u0275\u0275listener("click", function ContratosCreditoComponent_Conditional_0_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.notificacion_cobranza.NotificacionCobranzaPFAE_pdf(ctx_r1.credito, ctx_r1.credito.fecha_convenio));
    });
    \u0275\u0275element(60, "i", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "li", 28)(62, "div", 29)(63, "div", 30)(64, "h5", 31)(65, "b");
    \u0275\u0275text(66, "Pagar\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(67, ContratosCreditoComponent_Conditional_0_Conditional_67_Template, 2, 0, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 33);
    \u0275\u0275conditionalCreate(69, ContratosCreditoComponent_Conditional_0_Conditional_69_Template, 2, 1, "a", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 33)(71, "button", 35);
    \u0275\u0275listener("click", function ContratosCreditoComponent_Conditional_0_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pagare.pagare(ctx_r1.credito, "get", false, ctx_r1.nota, ctx_r1.credito.fecha_pagare, ctx_r1.credito.fecha_convenio));
    });
    \u0275\u0275element(72, "i", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "li", 28)(74, "div", 29)(75, "div", 30)(76, "h5", 31)(77, "b");
    \u0275\u0275text(78, "Amortizaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(79, ContratosCreditoComponent_Conditional_0_Conditional_79_Template, 2, 0, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 33);
    \u0275\u0275conditionalCreate(81, ContratosCreditoComponent_Conditional_0_Conditional_81_Template, 2, 1, "a", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 33)(83, "button", 35);
    \u0275\u0275listener("click", function ContratosCreditoComponent_Conditional_0_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabla_amortizacion.tabla_amortizacion_pdf(ctx_r1.credito, void 0, ctx_r1.credito.fecha_amortizacion));
    });
    \u0275\u0275element(84, "i", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "li", 28)(86, "div", 29)(87, "div", 30)(88, "h5", 31)(89, "b");
    \u0275\u0275text(90, "Referencia Bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(91, ContratosCreditoComponent_Conditional_0_Conditional_91_Template, 2, 0, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 33);
    \u0275\u0275conditionalCreate(93, ContratosCreditoComponent_Conditional_0_Conditional_93_Template, 2, 1, "a", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 33)(95, "button", 35);
    \u0275\u0275listener("click", function ContratosCreditoComponent_Conditional_0_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.referencia_bancaria.referencia_bancaria(ctx_r1.credito));
    });
    \u0275\u0275element(96, "i", 36);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(97, "div", 37)(98, "div", 38);
    \u0275\u0275element(99, "i", 39);
    \u0275\u0275text(100, " Cargar Documentos Firmados ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 13)(102, "div", 40);
    \u0275\u0275element(103, "i", 41);
    \u0275\u0275text(104, " Suba los documentos firmados en formato PDF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 42);
    \u0275\u0275conditionalCreate(106, ContratosCreditoComponent_Conditional_0_Conditional_106_Template, 7, 5, "div", 30);
    \u0275\u0275conditionalCreate(107, ContratosCreditoComponent_Conditional_0_Conditional_107_Template, 6, 4, "div", 30);
    \u0275\u0275elementStart(108, "div", 43);
    \u0275\u0275conditionalCreate(109, ContratosCreditoComponent_Conditional_0_Conditional_109_Template, 2, 1, "a", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 43);
    \u0275\u0275conditionalCreate(111, ContratosCreditoComponent_Conditional_0_Conditional_111_Template, 2, 1, "a", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Contrato de Cr\xE9dito #", ctx_r1.credito.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.credito.formalizado_fecha ? "Formalizado" : "En Proceso", " ");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.credito.formalizado_fecha ? "btn-outline-danger" : "btn-primary");
    \u0275\u0275property("disabled", (!ctx_r1.credito.fecha_convenio || !ctx_r1.credito.fecha_amortizacion || !ctx_r1.credito.fecha_pagare) && !ctx_r1.credito.liberado_fecha);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.credito.formalizado_fecha ? "bi-x-circle" : "bi-check-circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.credito.formalizado_fecha ? "Cancelar" : "Finalizar", " Formalizaci\xF3n ");
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.credito.fecha_convenio);
    \u0275\u0275property("disabled", !!ctx_r1.credito.formalizado_fecha)("disabled", !!ctx_r1.credito.formalizado_fecha);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.credito.fecha_amortizacion);
    \u0275\u0275property("disabled", !!ctx_r1.credito.formalizado_fecha)("disabled", !!ctx_r1.credito.formalizado_fecha);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.credito.fecha_pagare);
    \u0275\u0275property("disabled", !!ctx_r1.credito.formalizado_fecha)("disabled", !!ctx_r1.credito.formalizado_fecha);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.credito.datos_persona_fisica ? 47 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 48 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.urlDoc("NOTIFICACION COBRANZA PFAE") ? 55 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.urlDoc("NOTIFICACION COBRANZA PFAE") ? 57 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional((ctx_r1.credito.credito_pagares == null ? null : ctx_r1.credito.credito_pagares.documento_url) ? 67 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.credito.credito_pagares == null ? null : ctx_r1.credito.credito_pagares.documento_url) ? 69 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.urlDoc("TABLA AMORTIZACION") ? 79 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.urlDoc("TABLA AMORTIZACION") ? 81 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.urlDoc("REFERENCIA BANCARIA") ? 91 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.urlDoc("REFERENCIA BANCARIA") ? 93 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.credito.datos_persona_fisica ? 106 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 107 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.urlDoc("CONTRATO DE CREDITO PFAE") ? 109 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.urlDoc("CONTRATO DE CREDITO") ? 111 : -1);
  }
}
var _ContratosCreditoComponent = class _ContratosCreditoComponent {
  constructor(creditoController, route, contrato_credito_pfea, contrato_credito_pm, pagare, tabla_amortizacion, notificacion_cobranza, referencia_bancaria, utils, cotizador, creditoPagoController, localStorage) {
    this.creditoController = creditoController;
    this.route = route;
    this.contrato_credito_pfea = contrato_credito_pfea;
    this.contrato_credito_pm = contrato_credito_pm;
    this.pagare = pagare;
    this.tabla_amortizacion = tabla_amortizacion;
    this.notificacion_cobranza = notificacion_cobranza;
    this.referencia_bancaria = referencia_bancaria;
    this.utils = utils;
    this.cotizador = cotizador;
    this.creditoPagoController = creditoPagoController;
    this.localStorage = localStorage;
    this.pagaresKeys = ["fecha", "pago_fijo", "abono_a_capital ", "interes", "iva", "saldo_insoluto", "saldo_soluto"];
    this.showForze = false;
    this.nota = "";
    this.forceFormalizacion = false;
    this.sesionRow = (row) => {
      return "No. " + row.sesion + " - " + row.tipo_sesion;
    };
  }
  updateAmortizacionDates() {
    if (!this.credito)
      return;
    if (!this.credito.fecha_convenio)
      return;
    this.credito.fecha_amortizacion = this.getFechaPrimerAmorizacion(this.credito.fecha_convenio);
    this.credito.fecha_pagare = this.fechaTentativaPagare(this.credito.fecha_amortizacion);
    this.creditoController.update(this.credito.id, {
      fecha_convenio: this.credito.fecha_convenio,
      fecha_amortizacion: this.credito.fecha_amortizacion,
      fecha_pagare: this.credito.fecha_pagare
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id, [
          "*"
        ]);
        if (this.credito) {
          this.credito.fecha_convenio = this.credito?.fecha_convenio?.substring(0, 10);
          this.credito.fecha_amortizacion = this.credito.fecha_amortizacion?.substring(0, 10);
          this.credito.fecha_pagare = this.credito.fecha_pagare?.substring(0, 10);
        }
        console.log(this.credito);
      }
    }));
  }
  formalizarCredito() {
    return __async(this, null, function* () {
      if (!this.credito?.formalizado_fecha) {
        yield this.limpiarAmortizaciones();
        const res = yield this.crearNuevasAmortizaciones();
        if (!res)
          return;
      }
      yield this.creditoController.formalizarCredito(this.credito);
    });
  }
  crearNuevasAmortizaciones() {
    return __async(this, null, function* () {
      const pagos = this.cotizador.pagosResponseFromCredito(this.credito);
      const amortizaciones = (pagos?.lista_pagos ?? []).map((p) => ({
        credito_id: this.credito?.id,
        fecha: p.fecha,
        pago_fijo: p.pago_fijo,
        abono_a_capital: p.abono_a_capital,
        interes: p.interes,
        iva: p.iva,
        documento_url: ""
      }));
      return yield this.creditoPagoController.multipleNews(amortizaciones);
    });
  }
  limpiarAmortizaciones() {
    return __async(this, null, function* () {
      if (!this.credito?.creditos_pagos?.length)
        return;
      const toDelete = this.credito.creditos_pagos.map((p) => __spreadProps(__spreadValues({}, p), {
        deleted_at: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10)
      }));
      return yield this.creditoPagoController.multipleUpdate(toDelete);
    });
  }
  urlDoc(document) {
    const doc = this.credito?.contratos_documentos?.find((doc2) => doc2.tipo == document);
    return doc?.documento_url;
  }
  onPagareUpload(url) {
    return __async(this, null, function* () {
      if (!this.credito?.credito_pagares) {
        const credito = yield this.creditoController.find(this.credito.id, ["creditoPagares"]);
        this.credito.credito_pagares = credito?.credito_pagares;
      } else {
        this.credito.credito_pagares.documento_url = url;
      }
    });
  }
  onUrlChange(document, url) {
    const doc = this.credito?.contratos_documentos?.find((doc2) => doc2.tipo == document);
    console.log(this.credito, doc);
    if (doc) {
      doc.documento_url = url;
    } else {
      this.credito?.contratos_documentos?.push({
        credito_id: 0,
        usuario_id: 0,
        tipo: document,
        documento_url: url,
        id: 0,
        deleted_at: null,
        created_at: "",
        updated_at: null
      });
    }
  }
  /**
     * Calcula la fecha tentativa de pago de un pagaré, sumando 3 meses a la fecha tentativa de convenio.
     *
     * @param {Date|string} [date=new Date()] - Fecha inicial (puede ser un objeto Date o una cadena de fecha).
     * Si no se proporciona, se utiliza la fecha actual.
     * @returns {Date} - La fecha tentativa de pago del pagaré.
     */
  fechaTentativaPagare(date = /* @__PURE__ */ new Date()) {
    const inputDate = typeof date === "string" ? new Date(date) : date;
    const fechaConvenio = new Date(this.getFechaPrimerAmorizacion(inputDate));
    const year = fechaConvenio.getFullYear();
    const month = fechaConvenio.getMonth() + 2;
    const lastDayOfMonth = new Date(year, month, 0);
    return this.utils.shortInputDateString(lastDayOfMonth);
  }
  /**
     * Calcula una fecha tentativa para un convenio basado en la fecha actual o dada.
     *
     * - Si el día actual es menor o igual a 15, la fecha tentativa será el último día del mes actual.
     * - Si el día actual es mayor a 15, la fecha tentativa será el último día del mes siguiente.
     *
     * @returns {Date} - La fecha tentativa calculada.
     */
  getFechaPrimerAmorizacion(date = /* @__PURE__ */ new Date()) {
    if (typeof date === "string") {
      date = new Date(date);
    }
    const currentDate = date;
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    let dateNew;
    if (currentDay < 15) {
      dateNew = new Date(currentYear, currentMonth + 1, 0);
    } else {
      dateNew = new Date(currentYear, currentMonth + 2, 0);
    }
    return this.utils.shortInputDateString(dateNew);
  }
};
_ContratosCreditoComponent.\u0275fac = function ContratosCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratosCreditoComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ContratoCreditoPFAEService), \u0275\u0275directiveInject(ContratoCreditoPMService), \u0275\u0275directiveInject(PagareService), \u0275\u0275directiveInject(TablaAmortizacionService), \u0275\u0275directiveInject(NotificacionCobranzaPFAEService), \u0275\u0275directiveInject(ReferenciaBancariaService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(CotizadorService), \u0275\u0275directiveInject(CreditoPagoService), \u0275\u0275directiveInject(LocalStorageService));
};
_ContratosCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContratosCreditoComponent, selectors: [["app-contratos-credito"]], decls: 1, vars: 1, consts: [[1, "container", "my-4", "rounded", "shadow-lg", "bg-white", "p-4"], [1, "row", "align-items-center", "mb-4", "sticky-top", "bg-white", "rounded", "p-2", "border"], [1, "col-md-8"], [1, "text-primary", "mb-0"], [1, "bi", "bi-file-earmark-text-fill", "me-2"], [1, "badge", "bg-secondary", "ms-2", "align-middle"], [1, "text-muted", "mb-0"], [1, "col-md-4", "text-end"], [1, "btn", "btn-lg", 3, "click", "disabled"], [1, "bi"], [1, "card", "mb-4", "border-primary"], [1, "card-header", "bg-primary", "text-white"], [1, "bi", "bi-calendar-event", "me-2"], [1, "card-body"], [1, "row", "g-3"], [1, "col-12", "col-md-4"], [1, "form-label", "fw-bold", "text-primary"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-calendar"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "bi", "bi-calendar-check"], [1, "bi", "bi-file-earmark-text"], [1, "card", "mb-4", "border-secondary"], [1, "card-header", "bg-secondary", "text-white"], [1, "bi", "bi-files", "me-2"], [1, "card-body", "p-0"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "row"], [1, "col"], [1, "mt-2", "mb-2"], [1, "bi", "bi-check-circle-fill", "fw-bolder", "mx-2", "text-success"], [1, "col-auto"], [1, "btn", "btn-primary", 3, "href"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-printer-fill"], [1, "card", "border-info"], [1, "card-header", "bg-info", "text-white"], [1, "bi", "bi-cloud-upload", "me-2"], [1, "alert", "alert-info"], [1, "bi", "bi-info-circle-fill", "me-2"], [1, "row", "g-4"], [1, "col-auto", "p-3", "align-self-end"], [1, "bi", "bi-download"], [1, "border", "rounded", "p-3", "h-100"], [1, "bi", "bi-file-earmark-pdf", "text-danger", "me-2"], ["accept", ".pdf", "apiUrl", "api/files/contratos/save", "key", "document", 3, "urlChange", "automaticSave", "formExtra"]], template: function ContratosCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContratosCreditoComponent_Conditional_0_Template, 112, 31, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, FileInputComponent], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.8rem 1rem rgba(0, 0, 0, 0.15);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  transition: background-color 0.2s;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #d6d6d6;\n}\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=contratos-credito.component.css.map */"] });
var ContratosCreditoComponent = _ContratosCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratosCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-contratos-credito", imports: [
      FormsModule,
      FileInputComponent
    ], template: `@if (credito) {
  <div class="container my-4 rounded shadow-lg bg-white p-4">
    <!-- Encabezado mejorado -->
    <div class="row align-items-center mb-4 sticky-top bg-white rounded p-2 border">
      <div class="col-md-8">
        <h3 class="text-primary mb-0">
          <i class="bi bi-file-earmark-text-fill me-2"></i>
          Contrato de Cr\xE9dito #{{credito.id}}
          <span class="badge bg-secondary ms-2 align-middle">
            {{credito.formalizado_fecha ? 'Formalizado' : 'En Proceso'}}
          </span>
        </h3>
        <p class="text-muted mb-0">Complete todos los documentos requeridos y llene todos los campos de las fechas.
        </p>
      </div>
      <div class="col-md-4 text-end">
        <button class="btn btn-lg" [class]="credito.formalizado_fecha ? 'btn-outline-danger' : 'btn-primary'"
          (click)="formalizarCredito()"
          [disabled]="(!credito.fecha_convenio || !credito.fecha_amortizacion || !credito.fecha_pagare) && !credito.liberado_fecha">
          <i class="bi" [class]="credito.formalizado_fecha ? 'bi-x-circle' : 'bi-check-circle'"></i>
          {{credito.formalizado_fecha ? 'Cancelar' : 'Finalizar'}} Formalizaci\xF3n
        </button>
      </div>
    </div>
    <!-- Secci\xF3n de fechas con mejor visualizaci\xF3n -->
    <div class="card mb-4 border-primary">
      <div class="card-header bg-primary text-white">
        <i class="bi bi-calendar-event me-2"></i> Fechas Clave
      </div>
      <div class="card-body">
        <div class="row g-3">
          <div class="col-12 col-md-4">
            <label class="form-label fw-bold text-primary">Fecha Convenio</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-calendar"></i></span>
              <input class="form-control" [(ngModel)]="credito.fecha_convenio"
                [disabled]="!!credito.formalizado_fecha" (ngModelChange)="updateAmortizacionDates()"
                type="date" [disabled]="!!credito.formalizado_fecha">
            </div>
          </div>
          <div class="col-12 col-md-4">
            <label class="form-label fw-bold text-primary">1ra Amortizaci\xF3n</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-calendar-check"></i></span>
              <input class="form-control" [(ngModel)]="credito.fecha_amortizacion"
                [disabled]="!!credito.formalizado_fecha"
                (ngModelChange)="creditoController.update(credito.id, { fecha_amortizacion: credito.fecha_amortizacion })"
                type="date" [disabled]="!!credito.formalizado_fecha">
            </div>
          </div>
          <div class="col-12 col-md-4">
            <label class="form-label fw-bold text-primary">Fecha Pagar\xE9</label>
            <div class="input-group">
              <span class="input-group-text"><i class="bi bi-file-earmark-text"></i></span>
              <input class="form-control" [(ngModel)]="credito.fecha_pagare" type="date"
                [disabled]="!!credito.formalizado_fecha"
                (ngModelChange)="creditoController.update(credito.id, { fecha_pagare: credito.fecha_pagare})"
                [disabled]="!!credito.formalizado_fecha">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Lista de documentos con mejor jerarqu\xEDa visual -->
    <div class="card mb-4 border-secondary">
      <div class="card-header bg-secondary text-white">
        <i class="bi bi-files me-2"></i> Documentos Requeridos
      </div>
      <div class="card-body p-0">
        <ul class="list-group list-group-flush">
          <!-- Documento 1 -->
          @if (credito.datos_persona_fisica) {
            <li class="list-group-item">
              <div class="row">
                <div class="col">
                  <h5 class="mt-2 mb-2"><b>Contrato de Cr\xE9dito PF</b></h5>
                </div>
                <div class="col-auto">
                  <button class="btn btn-success"
                    (click)="contrato_credito_pfea.contratoCredito(credito, credito.fecha_convenio)">
                    <i class="bi bi-printer-fill"></i>
                  </button>
                </div>
              </div>
            </li>
          }
          <!-- Documento 2 - Plantilla similar para otros documentos -->
          @if (credito.datos_personas_morales) {
            <li class="list-group-item">
              @if (credito.datos_personas_morales) {
                <div class="row">
                  <div class="col">
                    <h5 class="mt-2 mb-2"><b>Contrato de Cr\xE9dito PM</b></h5>
                  </div>
                  <div class="col-auto">
                    <button class="btn btn-success"
                      (click)="contrato_credito_pm.contratoCredito(credito, credito.fecha_convenio)">
                      <i class="bi bi-printer-fill"></i>
                    </button>
                  </div>
                </div>
              }
            </li>
          }
          <li class="list-group-item">
            <div class="row">
              <div class="col">
                <h5 class="mt-2 mb-2"><b>Notificaci\xF3n de Cobranza</b> @if (urlDoc('NOTIFICACION COBRANZA PFAE')) {
                <i
                class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SUBIDO</i>
              }</h5>
            </div>
            <div class="col-auto">
              @if (urlDoc('NOTIFICACION COBRANZA PFAE')) {
                <a class="btn btn-primary"
                  [href]="utils.fileUrlInLine(urlDoc('NOTIFICACION COBRANZA PFAE')!)">
                  <i class="bi bi-download"></i>
                </a>
              }
            </div>
            <div class="col-auto">
              <button class="btn btn-success"
                (click)="notificacion_cobranza.NotificacionCobranzaPFAE_pdf(credito, credito.fecha_convenio)">
                <i class="bi bi-printer-fill"></i>
              </button>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col">
              <h5 class="mt-2 mb-2"><b>Pagar\xE9</b> @if (credito.credito_pagares?.documento_url) {
              <i
              class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SUBIDO</i>
            }</h5>
          </div>
          <div class="col-auto">
            @if (credito.credito_pagares?.documento_url) {
              <a class="btn btn-primary"
                [href]="utils.fileUrlInLine(credito.credito_pagares?.documento_url)">
                <i class="bi bi-download"></i>
              </a>
            }
          </div>
          <div class="col-auto">
            <button class="btn btn-success"
              (click)="pagare.pagare(credito!,'get',false, nota, credito.fecha_pagare, credito.fecha_convenio)">
              <i class="bi bi-printer-fill"></i>
            </button>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col">
            <h5 class="mt-2 mb-2"><b>Amortizaciones</b> @if (urlDoc('TABLA AMORTIZACION')) {
            <i
            class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SUBIDO</i>
          }</h5>
        </div>
        <div class="col-auto">
          @if (urlDoc('TABLA AMORTIZACION')) {
            <a class="btn btn-primary"
              [href]="utils.fileUrlInLine(urlDoc('TABLA AMORTIZACION')!)">
              <i class="bi bi-download"></i>
            </a>
          }
        </div>
        <div class="col-auto">
          <button class="btn btn-success"
            (click)="tabla_amortizacion.tabla_amortizacion_pdf(credito, undefined, credito.fecha_amortizacion)">
            <i class="bi bi-printer-fill"></i>
          </button>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <div class="col">
          <h5 class="mt-2 mb-2"><b>Referencia Bancaria</b> @if (urlDoc('REFERENCIA BANCARIA')) {
          <i
          class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SUBIDO</i>
        }</h5>
      </div>
      <div class="col-auto">
        @if (urlDoc('REFERENCIA BANCARIA')) {
          <a class="btn btn-primary"
            [href]="utils.fileUrlInLine(urlDoc('REFERENCIA BANCARIA')!)">
            <i class="bi bi-download"></i>
          </a>
        }
      </div>
      <div class="col-auto">
        <button class="btn btn-success" (click)="referencia_bancaria.referencia_bancaria(credito)">
          <i class="bi bi-printer-fill"></i>
        </button>
      </div>
    </div>
  </li>
</ul>
</div>
</div>
<!-- Secci\xF3n de carga de documentos mejorada -->
<div class="card border-info">
  <div class="card-header bg-info text-white">
    <i class="bi bi-cloud-upload me-2"></i> Cargar Documentos Firmados
  </div>
  <div class="card-body">
    <div class="alert alert-info">
      <i class="bi bi-info-circle-fill me-2"></i> Suba los documentos firmados en formato PDF
    </div>
    <div class="row g-4">
      @if (credito.datos_persona_fisica) {
        <div class="col">
          <div class="border rounded p-3 h-100">
            <h5>
              <i class="bi bi-file-earmark-pdf text-danger me-2"></i> Contratos Firmados
              @if (urlDoc('CONTRATO DE CREDITO') || urlDoc('CONTRATO DE CREDITO PFAE')) {
                <i
                  class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SUBIDO
                </i>
              }
            </h5>
            <app-file-input accept=".pdf" apiUrl="api/files/contratos/save" key="document"
              [automaticSave]="true" [formExtra]="{id:credito.id, nombre:'CONTRATO DE CREDITO PFAE'}"
              (urlChange)="onUrlChange('CONTRATO DE CREDITO PFAE',$event)">
            </app-file-input>
          </div>
        </div>
      }
      @if (credito.datos_personas_morales) {
        <div class="col">
          <div class="border rounded p-3 h-100">
            <h5><i class="bi bi-file-earmark-pdf text-danger me-2"></i> Contratos Firmados</h5>
            <app-file-input accept=".pdf" apiUrl="api/files/contratos/save" key="document"
              [automaticSave]="true" [formExtra]="{id:credito.id, nombre:'CONTRATO DE CREDITO'}"
              (urlChange)="onUrlChange('CONTRATO DE CREDITO',$event)">
            </app-file-input>
          </div>
        </div>
      }
      <div class="col-auto p-3 align-self-end">
        @if (urlDoc('CONTRATO DE CREDITO PFAE')) {
          <a class="btn btn-primary"
            [href]="utils.fileUrlInLine(urlDoc('CONTRATO DE CREDITO PFAE')!)">
            <i class="bi bi-download"></i>
          </a>
        }
      </div>
      <div class="col-auto p-3 align-self-end">
        @if (urlDoc('CONTRATO DE CREDITO')) {
          <a class="btn btn-primary"
            [href]="utils.fileUrlInLine(urlDoc('CONTRATO DE CREDITO')!)">
            <i class="bi bi-download"></i>
          </a>
        }
      </div>
    </div>
  </div>
</div>
</div>
}`, styles: ["/* src/app/main/creditos/contratos-credito/contratos-credito.component.css */\n.card {\n  transition: all 0.3s ease;\n}\n.card:hover {\n  box-shadow: 0 0.8rem 1rem rgba(0, 0, 0, 0.15);\n}\n.list-group-item {\n  padding: 1.5rem;\n  transition: background-color 0.2s;\n}\n.list-group-item:hover {\n  background-color: #d6d6d6;\n}\n.btn {\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=contratos-credito.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }, { type: ContratoCreditoPFAEService }, { type: ContratoCreditoPMService }, { type: PagareService }, { type: TablaAmortizacionService }, { type: NotificacionCobranzaPFAEService }, { type: ReferenciaBancariaService }, { type: UtilsService }, { type: CotizadorService }, { type: CreditoPagoService }, { type: LocalStorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContratosCreditoComponent, { className: "ContratosCreditoComponent", filePath: "src/app/main/creditos/contratos-credito/contratos-credito.component.ts", lineNumber: 32 });
})();

// src/app/main/creditos/pagares/pagares.component.ts
var _c010 = (a0) => ({ id: a0 });
function PagaresComponent_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, key_r1), " ");
  }
}
function PagaresComponent_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 2)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "a", 3);
    \u0275\u0275element(18, "i", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "button", 5);
    \u0275\u0275element(21, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "app-file-input", 7);
    \u0275\u0275listener("urlChange", function PagaresComponent_Conditional_3_For_8_Template_app_file_input_urlChange_23_listener($event) {
      const pagare_r3 = \u0275\u0275restoreView(_r2).$implicit;
      return \u0275\u0275resetView(pagare_r3.documento_url = $event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pagare_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 9, pagare_r3.fecha, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, pagare_r3.pago_fijo), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 14, pagare_r3.abono_a_capital), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 16, pagare_r3.interes), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 18, pagare_r3.iva), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", !pagare_r3.documento_url);
    \u0275\u0275property("href", ctx_r3.utils.fileUrlInLine(pagare_r3.documento_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(20, _c010, pagare_r3.id));
  }
}
function PagaresComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr", 2);
    \u0275\u0275repeaterCreate(4, PagaresComponent_Conditional_3_For_5_Template, 3, 3, "td", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tbody");
    \u0275\u0275repeaterCreate(7, PagaresComponent_Conditional_3_For_8_Template, 24, 22, "tr", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.pagareKeys);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.credito == null ? null : ctx_r3.credito.creditos_pagos);
  }
}
var _PagaresComponent = class _PagaresComponent {
  constructor(creditoController, utils, route) {
    this.creditoController = creditoController;
    this.utils = utils;
    this.route = route;
    this.pagareKeys = [
      "fecha",
      "pago_fijo",
      "abono_a_capital",
      "interes",
      "iva",
      "documento subido",
      "imprimir",
      "Subir"
    ];
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id, [
          "creditosPagos"
        ]);
        console.log(this.credito);
      }
    }));
  }
};
_PagaresComponent.\u0275fac = function PagaresComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagaresComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute));
};
_PagaresComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagaresComponent, selectors: [["app-pagares"]], decls: 4, vars: 2, consts: [[1, "table-responsive", "p-3"], [1, "table"], [1, "text-end"], [1, "btn", "btn-sm", "btn-primary", 3, "href"], [1, "bi", "bi-download"], [1, "btn", "btn-sm", "btn-success"], [1, "bi", "bi-printer"], ["apiUrl", "api/files/pagare/save", "accept", ".pdf", "key", "document", 3, "urlChange", "formExtra"]], template: function PagaresComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3")(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, PagaresComponent_Conditional_3_Template, 9, 0, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pagares de Cr\xE9dito: ", ctx.credito == null ? null : ctx.credito.id);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.credito == null ? null : ctx.credito.creditos_pagos) ? 3 : -1);
  }
}, dependencies: [
  TitlecasePipe,
  DatePipe,
  FileInputComponent,
  CurrencyPipe
], encapsulation: 2 });
var PagaresComponent = _PagaresComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagaresComponent, [{
    type: Component,
    args: [{ selector: "app-pagares", imports: [
      TitlecasePipe,
      DatePipe,
      FileInputComponent,
      CurrencyPipe
    ], template: `<h3><b>Pagares de Cr\xE9dito: {{credito?.id}}</b></h3>
@if (credito?.creditos_pagos) {
  <div class="table-responsive p-3">
    <table class="table">
      <thead>
        <tr class="text-end">
          @for (key of pagareKeys; track key) {
            <td>
              {{key|titlecase}}
            </td>
          }
        </tr>
      </thead>
      <tbody>
        @for (pagare of credito?.creditos_pagos; track pagare) {
          <tr class="text-end">
            <td>
              {{pagare.fecha|date:'dd/MM/yyyy'}}
            </td>
            <td>
              {{pagare.pago_fijo|currency}}
            </td>
            <td>
              {{pagare.abono_a_capital|currency}}
            </td>
            <td>
              {{pagare.interes|currency}}
            </td>
            <td>
              {{pagare.iva|currency}}
            </td>
            <td>
              <a [class.disabled]="!pagare.documento_url"
                [href]="utils.fileUrlInLine(pagare.documento_url)"
                class="btn btn-sm btn-primary"
                >
                <i class="bi bi-download"></i>
              </a>
            </td>
            <td>
              <button class="btn btn-sm btn-success">
                <i class="bi bi-printer"></i>
              </button>
            </td>
            <td>
              <app-file-input
                apiUrl="api/files/pagare/save"
                accept=".pdf"
                key="document"
                (urlChange)="pagare.documento_url=$event"
                [formExtra]="{id:pagare.id}"
                />
            </td>
          </tr>
        }
      </tbody>
    </table>
  </div>
}` }]
  }], () => [{ type: CreditoService }, { type: UtilsService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagaresComponent, { className: "PagaresComponent", filePath: "src/app/main/creditos/pagares/pagares.component.ts", lineNumber: 21 });
})();

// src/app/main/creditos/creditos-liberacion/creditos-liberacion.component.ts
var _c011 = () => ["productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales", "datos_llenos_por", "autorizado_por", "dictaminado_por", "formalizado_por", "inversionesProgramas.inversionTipos.inversionesTiposDetalles", "inversionesProgramas"];
var _c15 = () => ["PET", "EMPRENDE", "NO LIBERADO"];
var _c23 = () => ["TRANSFERENCIA INDIVIDUAL", "NO LIBERADO"];
function CreditosLiberacionComponent_Conditional_5_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 9);
    \u0275\u0275text(1, "SUBIDO");
    \u0275\u0275elementEnd();
  }
}
function CreditosLiberacionComponent_Conditional_5_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 10);
    \u0275\u0275text(1, "NO SUBIDO");
    \u0275\u0275elementEnd();
  }
}
function CreditosLiberacionComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h3")(2, "b");
    \u0275\u0275text(3, "Liberar Cr\xE9dito");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "b");
    \u0275\u0275text(7, "N\xFAmero de cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "b");
    \u0275\u0275text(11, "Nombre Cliente: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "hr", 8);
    \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "b");
    \u0275\u0275text(17, "Producto financiero:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 7)(20, "b");
    \u0275\u0275text(21, "Plazo: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "hr", 8);
    \u0275\u0275elementStart(24, "div", 6)(25, "div", 7)(26, "b");
    \u0275\u0275text(27, "Solicitud Completada Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 7)(31, "b");
    \u0275\u0275text(32, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "hr", 8);
    \u0275\u0275elementStart(35, "div", 6)(36, "div", 7)(37, "b");
    \u0275\u0275text(38, "Validado Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 7)(42, "b");
    \u0275\u0275text(43, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "hr", 8);
    \u0275\u0275elementStart(46, "div", 6)(47, "div", 7)(48, "b");
    \u0275\u0275text(49, "Dictaminado Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 7)(53, "b");
    \u0275\u0275text(54, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(56, "hr", 8);
    \u0275\u0275elementStart(57, "div", 6)(58, "div", 7)(59, "b");
    \u0275\u0275text(60, "Formalizado Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 7)(64, "b");
    \u0275\u0275text(65, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(67, "hr", 8);
    \u0275\u0275elementStart(68, "div", 6)(69, "div", 7)(70, "b");
    \u0275\u0275text(71, "Liberado Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 7)(75, "b");
    \u0275\u0275text(76, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(78, "hr", 8);
    \u0275\u0275elementStart(79, "div", 6)(80, "div", 7)(81, "b");
    \u0275\u0275text(82, "Banco:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(84, "hr", 8);
    \u0275\u0275elementStart(85, "div", 6)(86, "div", 7)(87, "b");
    \u0275\u0275text(88, "N\xFAmero Cuenta:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 7)(91, "b");
    \u0275\u0275text(92, "CLABE:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(94, "hr", 8);
    \u0275\u0275elementStart(95, "div", 6)(96, "div", 7)(97, "b");
    \u0275\u0275text(98, "Monto Autorizado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 7)(102, "b");
    \u0275\u0275text(103, "Monto A Transferir:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 6)(107, "div", 7)(108, "b");
    \u0275\u0275text(109, "Carta de instrucci\xF3n:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 7);
    \u0275\u0275conditionalCreate(111, CreditosLiberacionComponent_Conditional_5_Conditional_111_Template, 2, 0, "i", 9);
    \u0275\u0275conditionalCreate(112, CreditosLiberacionComponent_Conditional_5_Conditional_112_Template, 2, 0, "i", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 11)(114, "div", 12)(115, "app-select-field", 13);
    \u0275\u0275twoWayListener("valueChange", function CreditosLiberacionComponent_Conditional_5_Template_app_select_field_valueChange_115_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.extraLiberacion.cuenta_liberacion, $event) || (ctx_r1.extraLiberacion.cuenta_liberacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 12)(117, "app-simple-field", 14);
    \u0275\u0275twoWayListener("valueChange", function CreditosLiberacionComponent_Conditional_5_Template_app_simple_field_valueChange_117_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.extraLiberacion.fecha_deposito, $event) || (ctx_r1.extraLiberacion.fecha_deposito = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 15)(119, "app-select-field", 16);
    \u0275\u0275twoWayListener("valueChange", function CreditosLiberacionComponent_Conditional_5_Template_app_select_field_valueChange_119_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.extraLiberacion.disposicion, $event) || (ctx_r1.extraLiberacion.disposicion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "div", 17)(121, "div", 18)(122, "button", 19);
    \u0275\u0275listener("click", function CreditosLiberacionComponent_Conditional_5_Template_button_click_122_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.creditoController.liberarCredito(ctx_r1.creditoEdit, ctx_r1.extraLiberacion));
    });
    \u0275\u0275text(123);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.utils.idClienteFromCredito(ctx_r1.creditoEdit), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.utils.nombreClienteFromCredito(ctx_r1.creditoEdit));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.creditoEdit.productos_financieros == null ? null : ctx_r1.creditoEdit.productos_financieros.nombre, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.creditoEdit.inversiones_programas == null ? null : ctx_r1.creditoEdit.inversiones_programas.plazo_solicitado_meses);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 30, ctx_r1.creditoEdit.datos_llenos_fecha, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.datos_llenos_por));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 33, ctx_r1.creditoEdit.autorizado_fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.autorizado_por));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 36, ctx_r1.creditoEdit.dictaminado_fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.dictaminado_por));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(62, 39, ctx_r1.creditoEdit.formalizado_fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.formalizado_por));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(73, 42, ctx_r1.creditoEdit.liberado_fecha, "dd/MM/yyyy") ?? "N/a");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.liberado_por) ?? "N/a");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.creditoEdit.banco == null ? null : ctx_r1.creditoEdit.banco.toUpperCase());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.creditoEdit.numero_cuenta);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.creditoEdit.clabe_interbancaria);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(100, 45, ctx_r1.creditoEdit.monto_autorizado));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(105, 47, (ctx_r1.creditoEdit.monto_autorizado ?? 0) * (1 - 0.015 * 1.16)), "\n");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.creditoEdit.carta_instruccion_url ? 111 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.creditoEdit.carta_instruccion_url ? 112 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx_r1.extraLiberacion.cuenta_liberacion);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(49, _c15));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx_r1.extraLiberacion.fecha_deposito);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx_r1.extraLiberacion.disposicion);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(50, _c23));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.creditoEdit.liberado_fecha ? "btn-danger" : "btn-secondary");
    \u0275\u0275property("disabled", !ctx_r1.creditoEdit.carta_instruccion_verificacion && !ctx_r1.creditoEdit.liberado_fecha);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.creditoEdit.liberado_fecha ? "Cancelar Liberado" : "Liberar Cr\xE9dito", " ");
  }
}
var TABLA_DEF6 = {
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "liberado_fecha",
      header: "Fecha Liberado",
      pipe: "date"
    },
    ...CREDITOS_TABLE_HEADERS_BASIC
  ]
};
var EDITAR_BUTTON3 = {
  style: {
    button: "btn btn-sm btn-info",
    icon: "bi bi-eye-fill"
  }
};
var EXTRABUTTONS4 = [
  {
    key: "todos",
    text: "Ver Pendientes",
    style: {
      button: "btn scale-05 shadow btn-secondary"
    }
  },
  {
    key: "aprobados",
    text: "Ver Liberados",
    style: {
      button: "btn scale-05 shadow btn-success"
    }
  },
  {
    key: "rechazados",
    text: "Ver Rechazados",
    style: {
      button: "btn scale-05 shadow btn-danger"
    }
  }
];
var _CreditosLiberacionComponent = class _CreditosLiberacionComponent {
  constructor(creditoController, utils) {
    this.creditoController = creditoController;
    this.utils = utils;
    this.tabla = TABLA_DEF6;
    this.edit = EDITAR_BUTTON3;
    this.rowButtons = [CREDITOS_LIBERACION_BUTTON, CREDITOS_ESTADOS_BUTTON];
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.filters = CREDITOS_FILTERS;
    this.headerButtons = EXTRABUTTONS4;
    this.showEstados = false;
    this.conditionals = [];
    this.getExtra = { filtro: "liberacion" };
    this.showForm = false;
    this.extraLiberacion = {
      cuenta_liberacion: "NO LIBERADO",
      fecha_deposito: "",
      disposicion: "TRANSFERENCIA INDIVIDUAL"
    };
  }
  onButtonClick(key) {
    if (key == "todos") {
      this.getExtra = { filtro: "liberacion" };
    }
    if (key === "aprobados") {
      this.getExtra = { filtro: "liberacion-aprobados" };
    }
    if (key === "rechazados") {
      this.getExtra = { filtro: "liberacion-rechazados" };
    }
  }
  onRowButtonClick(event) {
    if (event.key === "liberacion") {
      this.showForm = true;
      this.creditoEdit = event.row;
      this.extraLiberacion.cuenta_liberacion = this.creditoEdit.cuenta_liberacion;
      this.extraLiberacion.fecha_deposito = this.creditoEdit.fecha_deposito;
      this.extraLiberacion.disposicion = this.creditoEdit.disposicion;
      return;
    }
    if (event.key = "estados") {
      this.creditoEdit = event.row;
      this.showEstados = true;
    }
  }
  onDocumentUpload(url) {
    if (!this.creditoEdit)
      return;
    this.creditoEdit.carta_instruccion_url = url;
  }
};
_CreditosLiberacionComponent.\u0275fac = function CreditosLiberacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosLiberacionComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsService));
};
_CreditosLiberacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosLiberacionComponent, selectors: [["app-creditos-formalizacion"]], decls: 6, vars: 26, consts: [["title", "Cr\xE9ditos en Liberaci\xF3n", 3, "barraButtonClickEvent", "rowButtonClickEvent", "tableDefinition", "controller", "showBarraButtons", "rowEliminar", "barraButtons", "getExtra", "barraBusqueda", "rowButtons", "getConditionals", "relations", "rowEditarButton", "rowEditarRoute", "advancedSearch", "simpleFilteredSearch", "agregar", "eliminar", "eliminados"], [1, "row", "my-3", "p-1"], [3, "conditionalsChange", "extraDataChange", "fetchData", "conditionals", "extraDataBase", "extraData"], [3, "showChange", "show", "credito"], ["size", "medium", 3, "showChange", "show"], [1, "container", "pt-0", "pb-3", "px-3"], [1, "row", "justify-content-between", "my-1"], [1, "col-auto"], [1, "border", "border-primary", "my-1"], [1, "bi", "bi-check-circle-fill", "fw-bolder", "mx-2", "text-success"], [1, "bi", "bi-exclamation-circle-fill", "fw-bolder", "mx-2", "text-danger"], [1, "row", "mt-4"], [1, "col-12", "col-sm-6", "p-3"], ["label", "Cuenta Liberaci\xF3n", 3, "valueChange", "value", "options"], ["type", "date", "label", "Fecha Liberaci\xF3n", 3, "valueChange", "value"], [1, "col-12", "col-sm", "p-3"], ["label", "Disposici\xF3n", 3, "valueChange", "value", "options"], [1, "row", "mt-4", "justify-content-center"], [1, "col"], [1, "btn", "btn-sm", "col", 3, "click", "disabled"]], template: function CreditosLiberacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("barraButtonClickEvent", function CreditosLiberacionComponent_Template_app_tabla_barraButtonClickEvent_0_listener($event) {
      return ctx.onButtonClick($event);
    })("rowButtonClickEvent", function CreditosLiberacionComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onRowButtonClick($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-buscador-creditos", 2);
    \u0275\u0275twoWayListener("conditionalsChange", function CreditosLiberacionComponent_Template_app_buscador_creditos_conditionalsChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.conditionals, $event) || (ctx.conditionals = $event);
      return $event;
    })("extraDataChange", function CreditosLiberacionComponent_Template_app_buscador_creditos_extraDataChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.getExtra, $event) || (ctx.getExtra = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(3, "app-credito-estado", 3);
    \u0275\u0275twoWayListener("showChange", function CreditosLiberacionComponent_Template_app_credito_estado_showChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showEstados, $event) || (ctx.showEstados = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-formulario-flotante", 4);
    \u0275\u0275twoWayListener("showChange", function CreditosLiberacionComponent_Template_app_formulario_flotante_showChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
      return $event;
    });
    \u0275\u0275conditionalCreate(5, CreditosLiberacionComponent_Conditional_5_Template, 124, 51, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("showBarraButtons", true)("rowEliminar", false)("barraButtons", ctx.headerButtons)("getExtra", ctx.getExtra)("barraBusqueda", false)("rowButtons", ctx.rowButtons)("getConditionals", ctx.conditionals)("relations", \u0275\u0275pureFunction0(25, _c011))("rowEditarButton", ctx.edit)("rowEditarRoute", "/main/creditos/validar/")("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.filters)("agregar", false)("eliminar", false)("eliminados", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("fetchData", false);
    \u0275\u0275twoWayProperty("conditionals", ctx.conditionals);
    \u0275\u0275property("extraDataBase", ctx.getExtra);
    \u0275\u0275twoWayProperty("extraData", ctx.getExtra);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEstados);
    \u0275\u0275property("credito", ctx.creditoEdit);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.creditoEdit ? 5 : -1);
  }
}, dependencies: [
  TablaComponent,
  CreditoEstadoComponent,
  FormularioFlotanteComponent,
  DatePipe,
  CurrencyPipe,
  SelectFieldComponent,
  SimpleFieldComponent,
  BuscadorCreditosComponent
], encapsulation: 2 });
var CreditosLiberacionComponent = _CreditosLiberacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosLiberacionComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-formalizacion", imports: [
      TablaComponent,
      CreditoEstadoComponent,
      FormularioFlotanteComponent,
      DatePipe,
      CurrencyPipe,
      SelectFieldComponent,
      SimpleFieldComponent,
      BuscadorCreditosComponent
    ], template: `<app-tabla title="Cr\xE9ditos en Liberaci\xF3n" [tableDefinition]="tabla" [controller]="creditoController"
  [showBarraButtons]="true" [rowEliminar]="false" [barraButtons]="headerButtons" [getExtra]="getExtra"
  [barraBusqueda]="false" [rowButtons]="rowButtons" [getConditionals]="conditionals"
  [relations]="['productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales','datos_llenos_por','autorizado_por','dictaminado_por','formalizado_por','inversionesProgramas.inversionTipos.inversionesTiposDetalles', 'inversionesProgramas']"
  [rowEditarButton]="edit" [rowEditarRoute]="'/main/creditos/validar/'"
  (barraButtonClickEvent)="onButtonClick($event)" (rowButtonClickEvent)="onRowButtonClick($event)"
  [advancedSearch]="advancedSearch" [simpleFilteredSearch]="filters" [agregar]="false" [eliminar]="false"
  [eliminados]="false">
  <div class="row my-3 p-1">
    <app-buscador-creditos [fetchData]="false" [(conditionals)]="conditionals" [extraDataBase]="getExtra"
      [(extraData)]="getExtra" />
  </div>
</app-tabla>
<app-credito-estado [(show)]="showEstados" [credito]="creditoEdit" />
<app-formulario-flotante [(show)]="showForm" size="medium">
  @if (creditoEdit) {
    <div class="container pt-0 pb-3 px-3">
      <h3><b>Liberar Cr\xE9dito</b></h3>
      <div class="row justify-content-between my-1">
        <div class="col-auto"><b>N\xFAmero de cliente:</b> {{utils.idClienteFromCredito(creditoEdit)}}
      </div>
      <div class="col-auto"><b>Nombre Cliente: </b>{{utils.nombreClienteFromCredito(creditoEdit)}}</div>
    </div>
    <hr class="border border-primary my-1">
    <div class="row justify-content-between my-1">
      <div class="col-auto"><b>Producto financiero:</b> {{creditoEdit.productos_financieros?.nombre}}
    </div>
    <div class="col-auto"><b>Plazo: </b>{{creditoEdit.inversiones_programas?.plazo_solicitado_meses}}</div>
  </div>
  <hr class="border border-primary my-1">
  <div class="row justify-content-between my-1">
    <div class="col-auto"><b>Solicitud Completada Fecha:</b>
    {{creditoEdit.datos_llenos_fecha|date:'dd/MM/yyyy'}}
  </div>
  <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.datos_llenos_por)}}</div>
</div>
<hr class="border border-primary my-1">
<div class="row justify-content-between my-1">
  <div class="col-auto"><b>Validado Fecha:</b> {{creditoEdit.autorizado_fecha|date:'dd/MM/yyyy'}}</div>
  <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.autorizado_por)}}</div>
</div>
<hr class="border border-primary my-1">
<div class="row justify-content-between my-1">
  <div class="col-auto"><b>Dictaminado Fecha:</b> {{creditoEdit.dictaminado_fecha|date:'dd/MM/yyyy'}}</div>
  <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.dictaminado_por)}}</div>
</div>
<hr class="border border-primary my-1">
<div class="row justify-content-between my-1">
  <div class="col-auto"><b>Formalizado Fecha:</b> {{creditoEdit.formalizado_fecha|date:'dd/MM/yyyy'}}</div>
  <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.formalizado_por)}}</div>
</div>
<hr class="border border-primary my-1">
<div class="row justify-content-between my-1">
  <div class="col-auto"><b>Liberado Fecha:</b> {{(creditoEdit.liberado_fecha|date:'dd/MM/yyyy')??'N/a'}}</div>
  <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.liberado_por)??'N/a'}}</div>
</div>
<hr class="border border-primary my-1">
<div class="row justify-content-between my-1">
  <div class="col-auto"><b>Banco:</b> {{creditoEdit.banco?.toUpperCase()}}</div>
</div>
<hr class="border border-primary my-1">
<div class="row justify-content-between my-1">
  <div class="col-auto"><b>N\xFAmero Cuenta:</b> {{creditoEdit.numero_cuenta}}</div>
  <div class="col-auto"><b>CLABE:</b> {{creditoEdit.clabe_interbancaria}}</div>
</div>
<hr class="border border-primary my-1">
<div class="row justify-content-between my-1">
  <div class="col-auto"><b>Monto Autorizado:</b> {{creditoEdit.monto_autorizado|currency}}</div>
  <div class="col-auto"><b>Monto A Transferir:</b> {{(creditoEdit.monto_autorizado ?? 0) * (1 - 0.015 * 1.16)|currency}}
</div>
</div>
<div class="row justify-content-between my-1">
  <div class="col-auto"><b>Carta de instrucci\xF3n:</b></div>
  <div class="col-auto">
    @if (creditoEdit.carta_instruccion_url) {
      <i
      class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SUBIDO</i>
    }
    @if (!creditoEdit.carta_instruccion_url) {
      <i
      class="bi bi-exclamation-circle-fill fw-bolder mx-2 text-danger">NO SUBIDO</i>
    }
  </div>
</div>
<div class="row mt-4">
  <div class="col-12 col-sm-6 p-3"><app-select-field [(value)]="extraLiberacion.cuenta_liberacion"
  label="Cuenta Liberaci\xF3n" [options]="['PET','EMPRENDE','NO LIBERADO']" /></div>
  <div class="col-12 col-sm-6 p-3"><app-simple-field [(value)]="extraLiberacion.fecha_deposito" type="date"
  label="Fecha Liberaci\xF3n" /></div>
  <div class="col-12 col-sm p-3"><app-select-field [(value)]="extraLiberacion.disposicion" label="Disposici\xF3n"
  [options]="['TRANSFERENCIA INDIVIDUAL','NO LIBERADO']" /></div>
</div>
<div class="row mt-4 justify-content-center">
  <div class="col">
    <button class="btn btn-sm col" [class]="creditoEdit.liberado_fecha?'btn-danger':'btn-secondary'"
      [disabled]="!creditoEdit.carta_instruccion_verificacion && !creditoEdit.liberado_fecha"
      (click)="creditoController.liberarCredito(creditoEdit, extraLiberacion)">
      {{creditoEdit.liberado_fecha?'Cancelar Liberado':'Liberar Cr\xE9dito'}}
    </button>
  </div>
</div>
</div>
}
</app-formulario-flotante>` }]
  }], () => [{ type: CreditoService }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosLiberacionComponent, { className: "CreditosLiberacionComponent", filePath: "src/app/main/creditos/creditos-liberacion/creditos-liberacion.component.ts", lineNumber: 78 });
})();

// src/app/main/creditos/creditos-preliberacion/creditos-preliberacion.component.ts
var _c012 = () => ["productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales", "datos_llenos_por", "autorizado_por", "dictaminado_por", "formalizado_por", "inversionesProgramas.inversionTipos.inversionesTiposDetalles", "deleted_at", "carta_instruccion_verificacion"];
function CreditosPreliberacionComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " Este c\u0155edito ya cuenta con la verificaci\xF3n de carta instrucci\xF3n. ");
    \u0275\u0275elementEnd();
  }
}
function CreditosPreliberacionComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " Para pre liberar el credito, favor de notificar a ADRIANA SOFIA CORNEJO PORRAS para la pre liberaci\xF3n del cr\xE9dito. ");
    \u0275\u0275elementEnd();
  }
}
function CreditosPreliberacionComponent_Conditional_5_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 12);
    \u0275\u0275text(1, "SUBIDO");
    \u0275\u0275elementEnd();
  }
}
function CreditosPreliberacionComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h3")(2, "b");
    \u0275\u0275text(3, "Pre Liberar Cr\xE9dito");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, CreditosPreliberacionComponent_Conditional_5_Conditional_4_Template, 2, 0, "div", 6)(5, CreditosPreliberacionComponent_Conditional_5_Conditional_5_Template, 2, 0, "div", 6);
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "b");
    \u0275\u0275text(9, "Solicitud Completada Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8)(13, "b");
    \u0275\u0275text(14, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "b");
    \u0275\u0275text(19, "Validado Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 8)(23, "b");
    \u0275\u0275text(24, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 7)(27, "div", 8)(28, "b");
    \u0275\u0275text(29, "Dictaminado Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 8)(33, "b");
    \u0275\u0275text(34, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 7)(37, "div", 8)(38, "b");
    \u0275\u0275text(39, "Formalizado Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 8)(43, "b");
    \u0275\u0275text(44, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 7)(47, "div", 8)(48, "b");
    \u0275\u0275text(49, "Liberado Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 8)(53, "b");
    \u0275\u0275text(54, "Usuario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 7)(57, "div", 8)(58, "b");
    \u0275\u0275text(59, "Monto Autorizado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 9)(63, "div", 10)(64, "h5", 11)(65, "b");
    \u0275\u0275text(66, "Carta de instrucci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(67, CreditosPreliberacionComponent_Conditional_5_Conditional_67_Template, 2, 0, "i", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 8)(69, "button", 13);
    \u0275\u0275listener("click", function CreditosPreliberacionComponent_Conditional_5_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.machote.machoteCartaInstrucciones(ctx_r1.creditoEdit));
    });
    \u0275\u0275element(70, "i", 14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.creditoEdit.carta_instruccion_verificacion ? 4 : 5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 13, ctx_r1.creditoEdit.datos_llenos_fecha, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.datos_llenos_por));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 16, ctx_r1.creditoEdit.autorizado_fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.autorizado_por));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 19, ctx_r1.creditoEdit.dictaminado_fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.dictaminado_por));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 22, ctx_r1.creditoEdit.formalizado_fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.formalizado_por));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 25, ctx_r1.creditoEdit.liberado_fecha, "dd/MM/yyyy") ?? "N/a");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.nameOf(ctx_r1.creditoEdit.liberado_por) ?? "N/a");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(61, 28, ctx_r1.creditoEdit.monto_autorizado));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.creditoEdit.carta_instruccion_url ? 67 : -1);
  }
}
var TABLA_DEF7 = {
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "carta_instruccion_verificacion",
      header: "Fecha Pre Liberado",
      pipe: "date"
    },
    ...CREDITOS_TABLE_HEADERS_BASIC
  ]
};
var EDITAR_BUTTON4 = {
  style: {
    button: "btn btn-sm btn-info",
    icon: "bi bi-eye-fill"
  }
};
var EXTRABUTTONS5 = [
  {
    key: "todos",
    text: "Ver Pendientes",
    style: {
      button: "btn scale-05 shadow btn-secondary"
    }
  },
  {
    key: "aprobados",
    text: "Ver Pre Liberados",
    style: {
      button: "btn scale-05 shadow btn-success"
    }
  },
  {
    key: "rechazados",
    text: "Ver Rechazados",
    style: {
      button: "btn scale-05 shadow btn-danger"
    }
  }
];
var _CreditosPreliberacionComponent = class _CreditosPreliberacionComponent {
  constructor(creditoController, utils, machote) {
    this.creditoController = creditoController;
    this.utils = utils;
    this.machote = machote;
    this.tabla = TABLA_DEF7;
    this.edit = EDITAR_BUTTON4;
    this.rowButtons = [CREDITOS_PRELIBERACION_BUTTON, CREDITOS_ESTADOS_BUTTON];
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.filters = CREDITOS_FILTERS;
    this.headerButtons = EXTRABUTTONS5;
    this.showEstados = false;
    this.getExtra = { filtro: "preliberacion" };
    this.conditionals = [];
    this.showForm = false;
  }
  onButtonClick(key) {
    if (key == "todos") {
      this.conditionals = [];
      this.getExtra = { filtro: "preliberacion" };
    }
    if (key === "aprobados") {
      this.conditionals = [
        {
          key: "deleted_at",
          operator: "IS NULL",
          value: null
        },
        {
          key: "carta_instruccion_verificacion",
          operator: "IS NOT NULL",
          value: null
        }
      ];
      this.getExtra = [];
    }
    if (key === "rechazados") {
      this.conditionals = [];
      this.getExtra = { filtro: "preliberacion-rechazados" };
    }
  }
  onRowButtonClick(event) {
    if (event.key === "liberacion") {
      this.showForm = true;
      this.creditoEdit = event.row;
      return;
    }
    if (event.key = "estados") {
      this.creditoEdit = event.row;
      this.showEstados = true;
    }
  }
  onDocumentUpload(url) {
    if (!this.creditoEdit)
      return;
    this.creditoEdit.carta_instruccion_url = url;
  }
};
_CreditosPreliberacionComponent.\u0275fac = function CreditosPreliberacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosPreliberacionComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ContratoMachoteCartaInstruccionesService));
};
_CreditosPreliberacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosPreliberacionComponent, selectors: [["app-creditos-preliberacion"]], decls: 6, vars: 26, consts: [["title", "Cr\xE9ditos en Pre Liberaci\xF3n", 3, "barraButtonClickEvent", "rowButtonClickEvent", "tableDefinition", "controller", "showBarraButtons", "rowEliminar", "barraButtons", "getExtra", "getConditionals", "rowButtons", "relations", "rowEditarButton", "rowEditarRoute", "advancedSearch", "simpleFilteredSearch", "agregar", "eliminar", "eliminados", "barraBusqueda"], [1, "row", "my-3", "p-1"], [3, "conditionalsChange", "extraDataChange", "fetchData", "conditionals", "extraDataBase", "extraData"], [3, "showChange", "show", "credito"], ["size", "large", 3, "showChange", "show"], [1, "container", "pt-0", "pb-3", "px-3"], ["role", "alert", 1, "alert", "alert-info"], [1, "row", "justify-content-between", "my-1"], [1, "col-auto"], [1, "row", "mb-2", "mt-4"], [1, "col"], [1, "mt-2", "mb-2"], [1, "bi", "bi-check-circle-fill", "fw-bolder", "mx-2", "text-success"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-printer-fill"]], template: function CreditosPreliberacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("barraButtonClickEvent", function CreditosPreliberacionComponent_Template_app_tabla_barraButtonClickEvent_0_listener($event) {
      return ctx.onButtonClick($event);
    })("rowButtonClickEvent", function CreditosPreliberacionComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onRowButtonClick($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-buscador-creditos", 2);
    \u0275\u0275twoWayListener("conditionalsChange", function CreditosPreliberacionComponent_Template_app_buscador_creditos_conditionalsChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.conditionals, $event) || (ctx.conditionals = $event);
      return $event;
    })("extraDataChange", function CreditosPreliberacionComponent_Template_app_buscador_creditos_extraDataChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.getExtra, $event) || (ctx.getExtra = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(3, "app-credito-estado", 3);
    \u0275\u0275twoWayListener("showChange", function CreditosPreliberacionComponent_Template_app_credito_estado_showChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showEstados, $event) || (ctx.showEstados = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-formulario-flotante", 4);
    \u0275\u0275twoWayListener("showChange", function CreditosPreliberacionComponent_Template_app_formulario_flotante_showChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
      return $event;
    });
    \u0275\u0275conditionalCreate(5, CreditosPreliberacionComponent_Conditional_5_Template, 71, 30, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("showBarraButtons", true)("rowEliminar", false)("barraButtons", ctx.headerButtons)("getExtra", ctx.getExtra)("getConditionals", ctx.conditionals)("rowButtons", ctx.rowButtons)("relations", \u0275\u0275pureFunction0(25, _c012))("rowEditarButton", ctx.edit)("rowEditarRoute", "/main/creditos/validar/")("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.filters)("agregar", false)("eliminar", false)("eliminados", false)("barraBusqueda", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("fetchData", false);
    \u0275\u0275twoWayProperty("conditionals", ctx.conditionals);
    \u0275\u0275property("extraDataBase", ctx.getExtra);
    \u0275\u0275twoWayProperty("extraData", ctx.getExtra);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEstados);
    \u0275\u0275property("credito", ctx.creditoEdit);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.creditoEdit ? 5 : -1);
  }
}, dependencies: [
  TablaComponent,
  CreditoEstadoComponent,
  FormularioFlotanteComponent,
  DatePipe,
  CurrencyPipe,
  BuscadorCreditosComponent
], encapsulation: 2 });
var CreditosPreliberacionComponent = _CreditosPreliberacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosPreliberacionComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-preliberacion", imports: [
      TablaComponent,
      CreditoEstadoComponent,
      FormularioFlotanteComponent,
      DatePipe,
      CurrencyPipe,
      BuscadorCreditosComponent
    ], template: `<app-tabla title="Cr\xE9ditos en Pre Liberaci\xF3n" 
  [tableDefinition]="tabla" 
  [controller]="creditoController"
  [showBarraButtons]="true" [rowEliminar]="false" [barraButtons]="headerButtons" [getExtra]="getExtra"
  [getConditionals]="conditionals" [rowButtons]="rowButtons"
  [relations]="['productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales','datos_llenos_por','autorizado_por','dictaminado_por','formalizado_por','inversionesProgramas.inversionTipos.inversionesTiposDetalles','deleted_at','carta_instruccion_verificacion']"
  [rowEditarButton]="edit" [rowEditarRoute]="'/main/creditos/validar/'"
  (barraButtonClickEvent)="onButtonClick($event)" (rowButtonClickEvent)="onRowButtonClick($event)"
  [advancedSearch]="advancedSearch" 
  [simpleFilteredSearch]="filters" 
  [agregar]="false" 
  [eliminar]="false"
  [eliminados]="false" [barraBusqueda]="false">
  <div class="row my-3 p-1">
    <app-buscador-creditos [fetchData]="false" [(conditionals)]="conditionals" [extraDataBase]="getExtra" [(extraData)]="getExtra" />
  </div>
</app-tabla>
<app-credito-estado [(show)]="showEstados" [credito]="creditoEdit" />
<app-formulario-flotante [(show)]="showForm" size="large">
  @if (creditoEdit) {
    <div class="container pt-0 pb-3 px-3">
      <h3><b>Pre Liberar Cr\xE9dito</b></h3>
      @if(creditoEdit.carta_instruccion_verificacion){
        <div class="alert alert-info" role="alert">
          Este c\u0155edito ya cuenta con la verificaci\xF3n de carta instrucci\xF3n.
        </div>
      }
      @else{
        <div class="alert alert-info" role="alert">
          Para pre liberar el credito, favor de notificar a ADRIANA SOFIA CORNEJO PORRAS para la pre liberaci\xF3n del cr\xE9dito.
        </div>
      }      
      <div class="row justify-content-between my-1">
        <div class="col-auto"><b>Solicitud Completada Fecha:</b>
        {{creditoEdit.datos_llenos_fecha|date:'dd/MM/yyyy'}}
      </div>
      <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.datos_llenos_por)}}</div>
    </div>
    <div class="row justify-content-between my-1">
      <div class="col-auto"><b>Validado Fecha:</b> {{creditoEdit.autorizado_fecha|date:'dd/MM/yyyy'}}</div>
      <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.autorizado_por)}}</div>
    </div>
    <div class="row justify-content-between my-1">
      <div class="col-auto"><b>Dictaminado Fecha:</b> {{creditoEdit.dictaminado_fecha|date:'dd/MM/yyyy'}}</div>
      <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.dictaminado_por)}}</div>
    </div>
    <div class="row justify-content-between my-1">
      <div class="col-auto"><b>Formalizado Fecha:</b> {{creditoEdit.formalizado_fecha|date:'dd/MM/yyyy'}}</div>
      <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.formalizado_por)}}</div>
    </div>
    <div class="row justify-content-between my-1">
      <div class="col-auto"><b>Liberado Fecha:</b> {{(creditoEdit.liberado_fecha|date:'dd/MM/yyyy')??'N/a'}}</div>
      <div class="col-auto"><b>Usuario: </b>{{utils.nameOf(creditoEdit.liberado_por)??'N/a'}}</div>
    </div>
    <div class="row justify-content-between my-1">
      <div class="col-auto"><b>Monto Autorizado:</b> {{creditoEdit.monto_autorizado|currency}}</div>
    </div>
    <div class="row mb-2 mt-4">
      <div class="col">
        <h5 class="mt-2 mb-2"><b>Carta de instrucci\xF3n</b> @if (creditoEdit.carta_instruccion_url) {
        <i
        class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SUBIDO</i>
      }</h5>
    </div>
    <div class="col-auto">
      <button class="btn btn-success" (click)="machote.machoteCartaInstrucciones(creditoEdit)">
        <i class="bi bi-printer-fill"></i>
      </button>
    </div>    
  </div>
</div>
}
</app-formulario-flotante>` }]
  }], () => [{ type: CreditoService }, { type: UtilsService }, { type: ContratoMachoteCartaInstruccionesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosPreliberacionComponent, { className: "CreditosPreliberacionComponent", filePath: "src/app/main/creditos/creditos-preliberacion/creditos-preliberacion.component.ts", lineNumber: 77 });
})();

// src/app/pipes/cliente-id.pipe.ts
var _ClienteIdPipe = class _ClienteIdPipe {
  transform(credito, ...args) {
    const pf = credito?.datos_persona_fisica?.datos_personales;
    const pm = credito?.datos_personas_morales;
    if (pf) {
      return pf.id;
    }
    if (pf) {
      return pm?.cliente_id ?? pm?.id;
    }
    return null;
  }
};
_ClienteIdPipe.\u0275fac = function ClienteIdPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClienteIdPipe)();
};
_ClienteIdPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "clienteId", type: _ClienteIdPipe, pure: true });
var ClienteIdPipe = _ClienteIdPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClienteIdPipe, [{
    type: Pipe,
    args: [{
      name: "clienteId",
      standalone: true
    }]
  }], null, null);
})();

// src/app/controllers/credito.comprobacion.service.ts
var _CreditoComprobacionService = class _CreditoComprobacionService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_comprobaciones";
    this.columns = [
      "id",
      "credito_id",
      "usuario_id",
      "monto",
      "fecha_comprobacion",
      "fecha_factura",
      "folio_factura",
      "nombre_archivo",
      "md5_archivo",
      "mime_archivo",
      "observaciones",
      "created_at",
      "updated_at",
      "deleted_at"
    ];
  }
};
_CreditoComprobacionService.\u0275fac = function CreditoComprobacionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoComprobacionService)(\u0275\u0275inject(Injector));
};
_CreditoComprobacionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoComprobacionService, factory: _CreditoComprobacionService.\u0275fac, providedIn: "any" });
var CreditoComprobacionService = _CreditoComprobacionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoComprobacionService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/creditos/comprobaciones/form/form.component.ts
var _c013 = ["fileInput"];
var _CreditoComprobacionFormComponent = class _CreditoComprobacionFormComponent {
  constructor(creditoComprobacionController, dialog) {
    this.creditoComprobacionController = creditoComprobacionController;
    this.dialog = dialog;
    this.editChange = new EventEmitter();
    this.formExtra = {};
  }
  ngOnChanges(changes) {
    if (changes["edit"]) {
      this.edit.fecha_comprobacion = this.edit.fecha_comprobacion?.substring(0, 10);
      this.edit.fecha_factura = this.edit.fecha_factura?.substring(0, 10);
    }
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.fileInput?.file) {
        this.dialog.show({
          title: "Algo sali\xF3 mal",
          tipo: "danger",
          body: "Agrega un documento o evidencia del pago."
        });
        console.error("FORM INVALIDO");
        return;
      }
      const data = yield this.creditoComprobacionController.createOrUpdate(this.edit);
      if (data && data.id) {
        this.edit = data;
        this.formExtra.id = data.id;
        this.fileInput?.upload();
      }
    });
  }
};
_CreditoComprobacionFormComponent.\u0275fac = function CreditoComprobacionFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoComprobacionFormComponent)(\u0275\u0275directiveInject(CreditoComprobacionService), \u0275\u0275directiveInject(VanillaDialogService));
};
_CreditoComprobacionFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditoComprobacionFormComponent, selectors: [["app-credito-comprobacion-form"]], viewQuery: function CreditoComprobacionFormComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c013, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, inputs: { edit: "edit" }, outputs: { editChange: "editChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 45, vars: 10, consts: [["fileInput", ""], [1, "container-fluid", "mt-4"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-file-earmark-plus", "me-2"], [1, "card-body"], ["id", "formComprobacion"], [1, "mb-3"], ["for", "monto", 1, "form-label", "fw-bold"], [1, "bi", "bi-currency-dollar", "me-1"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "id", "monto", "name", "monto", "step", "0.01", "min", "0", "placeholder", "0.00", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-text"], ["for", "fechaComprobacion", 1, "form-label", "fw-bold"], [1, "bi", "bi-calendar-check", "me-1"], ["type", "date", "id", "fechaComprobacion", "name", "fechaComprobacion", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fechaFactura", 1, "form-label", "fw-bold"], [1, "bi", "bi-receipt", "me-1"], ["type", "date", "id", "fechaFactura", "name", "fechaFactura", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "folioFactura", 1, "form-label", "fw-bold"], [1, "bi", "bi-tag", "me-1"], ["type", "text", "id", "folioFactura", "name", "folioFactura", "placeholder", "Ej. FAC-001-2023", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-4"], ["for", "archivo", 1, "form-label", "fw-bold"], [1, "bi", "bi-paperclip", "me-1"], ["apiUrl", "api/files/credito/comprobacion/save", "key", "document", "foreign_key", "id", 3, "urlChange", "automaticSave", "showButton", "formExtra", "showSimpleDownload", "url"], [1, "d-flex", "justify-content-end", "gap-2", "border-top", "pt-3"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-check-circle", "me-1"]], template: function CreditoComprobacionFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h5", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6)(7, "form", 7)(8, "div", 8)(9, "label", 9);
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, "Monto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "span", 12);
    \u0275\u0275text(14, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function CreditoComprobacionFormComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.edit.monto, $event) || (ctx.edit.monto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 14);
    \u0275\u0275text(17, "Ingrese el monto comprobado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 8)(19, "label", 15);
    \u0275\u0275element(20, "i", 16);
    \u0275\u0275text(21, "Fecha de Comprobaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function CreditoComprobacionFormComponent_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.edit.fecha_comprobacion, $event) || (ctx.edit.fecha_comprobacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 8)(24, "label", 18);
    \u0275\u0275element(25, "i", 19);
    \u0275\u0275text(26, "Fecha de Factura (Opcional) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CreditoComprobacionFormComponent_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.edit.fecha_factura, $event) || (ctx.edit.fecha_factura = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 8)(29, "label", 21);
    \u0275\u0275element(30, "i", 22);
    \u0275\u0275text(31, "Folio/N\xFAmero de Factura (Opcional) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CreditoComprobacionFormComponent_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.edit.folio_factura, $event) || (ctx.edit.folio_factura = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 24)(34, "label", 25);
    \u0275\u0275element(35, "i", 26);
    \u0275\u0275text(36, "Documento de Comprobaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "app-file-input", 27, 0);
    \u0275\u0275twoWayListener("urlChange", function CreditoComprobacionFormComponent_Template_app_file_input_urlChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.edit.nombre_archivo, $event) || (ctx.edit.nombre_archivo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 14);
    \u0275\u0275text(40, "Formatos aceptados: PDF, JPG, PNG, DOC (Max. 5MB)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 28)(42, "button", 29);
    \u0275\u0275listener("click", function CreditoComprobacionFormComponent_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submit());
    });
    \u0275\u0275element(43, "i", 30);
    \u0275\u0275text(44, " Guardar Comprobaci\xF3n ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx.edit.id ? "Editar" : "Nueva", " Comprobaci\xF3n de Cr\xE9dito ");
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.edit.monto);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.edit.fecha_comprobacion);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.edit.fecha_factura);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.edit.folio_factura);
    \u0275\u0275advance(5);
    \u0275\u0275property("automaticSave", false)("showButton", false)("formExtra", ctx.formExtra)("showSimpleDownload", true);
    \u0275\u0275twoWayProperty("url", ctx.edit.nombre_archivo);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, FileInputComponent], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  border: none;\n}\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0 0 !important;\n}\n.form-label[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);\n  border-color: #86b7fe;\n}\n.form-control[type=file][_ngcontent-%COMP%] {\n  padding: 0.375rem;\n}\n@media (max-width: 576px) {\n  .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem !important;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=form.component.css.map */"] });
var CreditoComprobacionFormComponent = _CreditoComprobacionFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoComprobacionFormComponent, [{
    type: Component,
    args: [{ selector: "app-credito-comprobacion-form", imports: [
      FormsModule,
      FileInputComponent
    ], template: `<div class="container-fluid mt-4">
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0">
                <i class="bi bi-file-earmark-plus me-2"></i>{{edit.id?'Editar':'Nueva'}} Comprobaci\xF3n de Cr\xE9dito
            </h5>
        </div>
        <div class="card-body">
            <form id="formComprobacion">
                <!-- Monto -->
                <div class="mb-3">
                    <label for="monto" class="form-label fw-bold">
                        <i class="bi bi-currency-dollar me-1"></i>Monto
                    </label>
                    <div class="input-group">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control" id="monto" name="monto" step="0.01" min="0"
                            placeholder="0.00" required [(ngModel)]="edit.monto">
                    </div>
                    <div class="form-text">Ingrese el monto comprobado</div>
                </div>

                <!-- Fecha Comprobaci\xF3n -->
                <div class="mb-3">
                    <label for="fechaComprobacion" class="form-label fw-bold">
                        <i class="bi bi-calendar-check me-1"></i>Fecha de Comprobaci\xF3n
                    </label>
                    <input type="date" class="form-control" id="fechaComprobacion" name="fechaComprobacion" required [(ngModel)]="edit.fecha_comprobacion">
                </div>

                <!-- Fecha Factura -->
                <div class="mb-3">
                    <label for="fechaFactura" class="form-label fw-bold">
                        <i class="bi bi-receipt me-1"></i>Fecha de Factura (Opcional)
                    </label>
                    <input type="date" class="form-control" id="fechaFactura" name="fechaFactura" [(ngModel)]="edit.fecha_factura">
                </div>

                <!-- Folio Factura -->
                <div class="mb-3">
                    <label for="folioFactura" class="form-label fw-bold">
                        <i class="bi bi-tag me-1"></i>Folio/N\xFAmero de Factura (Opcional)
                    </label>
                    <input type="text" class="form-control" id="folioFactura" name="folioFactura"
                        placeholder="Ej. FAC-001-2023" [(ngModel)]="edit.folio_factura">
                </div>

                <!-- Archivo Adjunto -->
                <div class="mb-4">
                    <label for="archivo" class="form-label fw-bold">
                        <i class="bi bi-paperclip me-1"></i>Documento de Comprobaci\xF3n
                    </label>
                    <app-file-input #fileInput apiUrl="api/files/credito/comprobacion/save" [automaticSave]="false" [showButton]="false" key="document"
                    foreign_key="id" [formExtra]="formExtra" [showSimpleDownload]="true" [(url)]="edit.nombre_archivo" />
                    <div class="form-text">Formatos aceptados: PDF, JPG, PNG, DOC (Max. 5MB)</div>
                </div>

                <!-- Botones -->
                <div class="d-flex justify-content-end gap-2 border-top pt-3">
                    <button type="submit" class="btn btn-primary" (click)="submit()">
                        <i class="bi bi-check-circle me-1"></i> Guardar Comprobaci\xF3n
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>`, styles: ["/* src/app/main/creditos/comprobaciones/form/form.component.css */\n.card {\n  border-radius: 0.5rem;\n  border: none;\n}\n.card-header {\n  border-radius: 0.5rem 0.5rem 0 0 !important;\n}\n.form-label {\n  color: #495057;\n}\n.form-control:focus {\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);\n  border-color: #86b7fe;\n}\n.form-control[type=file] {\n  padding: 0.375rem;\n}\n@media (max-width: 576px) {\n  .d-flex {\n    flex-direction: column;\n    gap: 0.5rem !important;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=form.component.css.map */\n"] }]
  }], () => [{ type: CreditoComprobacionService }, { type: VanillaDialogService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], edit: [{
    type: Input
  }], editChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditoComprobacionFormComponent, { className: "CreditoComprobacionFormComponent", filePath: "src/app/main/creditos/comprobaciones/form/form.component.ts", lineNumber: 18 });
})();

// src/app/main/creditos/comprobaciones/comprobaciones.component.ts
function CreditosComprobacionesComponent_Conditional_10_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2, "SIN COMPROBAR ");
    \u0275\u0275elementEnd();
  }
}
function CreditosComprobacionesComponent_Conditional_10_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, "COMPROBADO ");
    \u0275\u0275elementEnd();
  }
}
function CreditosComprobacionesComponent_Conditional_10_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, "No se encontraron comprobaciones registradas ");
    \u0275\u0275elementEnd();
  }
}
function CreditosComprobacionesComponent_Conditional_10_Conditional_69_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 40)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 39)(13, "button", 41);
    \u0275\u0275listener("click", function CreditosComprobacionesComponent_Conditional_10_Conditional_69_For_17_Template_button_click_13_listener() {
      const comprobacion_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.utils.openUrlInline(comprobacion_r4.nombre_archivo));
    });
    \u0275\u0275element(14, "i", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 43)(16, "button", 44);
    \u0275\u0275listener("click", function CreditosComprobacionesComponent_Conditional_10_Conditional_69_For_17_Template_button_click_16_listener() {
      const comprobacion_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editarComprobacion(comprobacion_r4));
    });
    \u0275\u0275element(17, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 46);
    \u0275\u0275listener("click", function CreditosComprobacionesComponent_Conditional_10_Conditional_69_For_17_Template_button_click_18_listener() {
      const comprobacion_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.creditoComprobacionController.switch(comprobacion_r4));
    });
    \u0275\u0275element(19, "i", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comprobacion_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("hidden", comprobacion_r4.deleted_at);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, comprobacion_r4.monto));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 10, comprobacion_r4.fecha_comprobacion, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 13, comprobacion_r4.fecha_factura, "dd/MM/yyyy") ?? "N/A", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comprobacion_r4.folio_factura ?? "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !comprobacion_r4.nombre_archivo);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.verificarPermiso("edit"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.verificarPermiso("delete"));
  }
}
function CreditosComprobacionesComponent_Conditional_10_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "table", 38)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Fecha C.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Fecha Fac.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Folio Fac.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 39);
    \u0275\u0275text(13, "Archivo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, CreditosComprobacionesComponent_Conditional_10_Conditional_69_For_17_Template, 20, 16, "tr", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r1.credito.credito_comprobaciones);
  }
}
function CreditosComprobacionesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 11)(2, "div", 12)(3, "h5", 13);
    \u0275\u0275element(4, "i", 14);
    \u0275\u0275text(5, "Detalle del Cr\xE9dito ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "div", 16)(8, "div", 17)(9, "div", 18)(10, "span", 19);
    \u0275\u0275text(11, "ID Cr\xE9dito:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 18)(15, "span", 19);
    \u0275\u0275text(16, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 20);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "clienteId");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 18)(21, "span", 19);
    \u0275\u0275text(22, "Referencia:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 20);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 18)(26, "span", 19);
    \u0275\u0275text(27, "RFC:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 20);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 17)(31, "div", 18)(32, "span", 19);
    \u0275\u0275text(33, "Fecha Inicio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 20);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 18)(38, "span", 19);
    \u0275\u0275text(39, "Capital:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 20);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 18)(44, "span", 19);
    \u0275\u0275text(45, "Comprobado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 21);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 18)(50, "span", 19);
    \u0275\u0275text(51, "Por Comprobar:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 22);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(55, "div", 23)(56, "div", 24)(57, "div");
    \u0275\u0275conditionalCreate(58, CreditosComprobacionesComponent_Conditional_10_Conditional_58_Template, 3, 0, "span", 25);
    \u0275\u0275conditionalCreate(59, CreditosComprobacionesComponent_Conditional_10_Conditional_59_Template, 3, 0, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 27)(61, "button", 28);
    \u0275\u0275listener("click", function CreditosComprobacionesComponent_Conditional_10_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nuevaComprobacion());
    });
    \u0275\u0275element(62, "i", 29);
    \u0275\u0275text(63, "Comprobar ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(64, "div", 30)(65, "h5", 31);
    \u0275\u0275element(66, "i", 32);
    \u0275\u0275text(67, "Historial de Comprobaciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(68, CreditosComprobacionesComponent_Conditional_10_Conditional_68_Template, 3, 0, "div", 33);
    \u0275\u0275conditionalCreate(69, CreditosComprobacionesComponent_Conditional_10_Conditional_69_Template, 18, 0, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.credito.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(19, 14, ctx_r1.credito), " - ", ctx_r1.utils.nombreClienteFromCredito(ctx_r1.credito));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.credito.folio);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.rfcFromCredito(ctx_r1.credito));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 16, ctx_r1.credito.fecha_convenio == null ? null : ctx_r1.credito.fecha_convenio.substring(0, 10), "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 19, ctx_r1.credito.monto_autorizado));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 21, ctx_r1.totalComprobaciones()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 23, (ctx_r1.credito.monto_autorizado ?? 0) - ctx_r1.totalComprobaciones()));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.esCreditoComprobado() ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.esCreditoComprobado() ? 59 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.verificarPermiso("create"));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!(ctx_r1.credito.credito_comprobaciones == null ? null : ctx_r1.credito.credito_comprobaciones.length) ? 68 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.credito.credito_comprobaciones == null ? null : ctx_r1.credito.credito_comprobaciones.length) ? 69 : -1);
  }
}
function CreditosComprobacionesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-credito-comprobacion-form", 48);
    \u0275\u0275twoWayListener("editChange", function CreditosComprobacionesComponent_Conditional_12_Template_app_credito_comprobacion_form_editChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.edit, $event) || (ctx_r1.edit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("edit", ctx_r1.edit);
  }
}
var _CreditosComprobacionesComponent = class _CreditosComprobacionesComponent {
  constructor(utils, creditoController, creditoComprobacionController, router, route, storage) {
    this.utils = utils;
    this.creditoController = creditoController;
    this.creditoComprobacionController = creditoComprobacionController;
    this.router = router;
    this.route = route;
    this.storage = storage;
    this.relations = [
      "datosPersonaFisica.datosPersonales",
      "datosPersonasMorales",
      "creditoComprobaciones"
    ];
    this.showForm = false;
    this.edit = {
      credito_id: 0,
      usuario_id: 0,
      monto: 0,
      fecha_comprobacion: null,
      id: 0
    };
    this.permisos = [];
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["credito_id"]) {
        this.credito = yield this.creditoController.find(params["credito_id"], this.relations);
      }
    }));
    this.permisos = (this.storage.getPerfil().permisos_usuarios ?? []).filter((pu) => pu.permisos !== void 0).map((pu) => pu.permisos);
    console.log("Permisos:", this.permisos);
  }
  onCreditoSelected(id) {
    this.router.navigate(["/main/creditos/comprobacion", id]);
  }
  totalComprobaciones() {
    return (this.credito?.credito_comprobaciones ?? []).reduce((acc, item) => acc + +item.monto, 0);
  }
  esCreditoComprobado() {
    if (!this.credito?.monto_autorizado)
      return true;
    if (this.totalComprobaciones() >= this.credito.monto_autorizado) {
      return true;
    }
    return false;
  }
  editarComprobacion(comp) {
    this.edit = comp;
    this.showForm = true;
  }
  nuevaComprobacion() {
    this.edit = {
      credito_id: this.credito.id,
      usuario_id: 0,
      monto: 0,
      fecha_comprobacion: null,
      id: 0
    };
    this.showForm = true;
  }
  verificarPermiso(accion) {
    switch (accion) {
      case "edit":
      case "delete":
      case "create":
        if (this.permisos) {
          return this.permisos.some((permiso) => permiso.nombre === "ENCARGADO COBRANZA");
        }
        return false;
      default:
        return false;
    }
  }
};
_CreditosComprobacionesComponent.\u0275fac = function CreditosComprobacionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosComprobacionesComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(CreditoComprobacionService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocalStorageService));
};
_CreditosComprobacionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosComprobacionesComponent, selectors: [["app-comprobaciones"]], decls: 18, vars: 4, consts: [[1, "credit-verification-container", "bg-white", "rounded-3", "shadow-sm", "p-4", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h4", "mb-0", "text-primary"], [1, "bi", "bi-file-earmark-check", "me-2"], [1, "badge", "bg-primary", "bg-opacity-10", "text-light"], [1, "bi", "bi-info-circle", "me-1"], [1, "mb-4"], [1, "custom-search-box", 3, "creditoIdChange", "justId"], [1, "credit-details-table", "mb-5"], [3, "showChange", "show"], [3, "edit"], [1, "credit-detail-card", "card", "border-0", "shadow-sm", "mb-4"], [1, "card-header", "bg-primary", "text-white"], [1, "card-title", "mb-0"], [1, "bi", "bi-credit-card", "me-2"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "detail-value", "text-success"], [1, "detail-value", "text-danger"], [1, "status-actions", "mt-4", "pt-3", "border-top"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "status-badge", "badge", "bg-warning", "py-2", "px-3"], [1, "status-badge", "badge", "bg-primary", "py-2", "px-3"], [1, "action-buttons"], [1, "btn", "btn-primary", "me-2", 3, "click", "disabled"], [1, "bi", "bi-plus-circle", "me-1"], [1, "comprobaciones-section"], [1, "mb-3", "text-muted"], [1, "bi", "bi-receipt", "me-2"], [1, "alert", "alert-info"], [1, "table-responsive"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "bi", "bi-patch-check-fill", "me-2"], [1, "bi", "bi-info-circle", "me-2"], [1, "table", "table-hover", "align-middle"], [1, "text-center"], [3, "hidden"], [1, "btn", "btn-sm", "btn-primary", "m-1", 3, "click", "disabled"], [1, "bi", "bi-printer-fill"], [1, "text-end"], [1, "btn", "btn-sm", "btn-success", "m-1", 3, "click", "disabled"], [1, "bi", "bi-pencil-fill"], [1, "btn", "btn-sm", "btn-danger", "m-1", 3, "click", "disabled"], [1, "bi", "bi-trash-fill"], [3, "editChange", "edit"]], template: function CreditosComprobacionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275text(4, "Comprobaciones de Destino de Cr\xE9dito ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275element(6, "i", 5);
    \u0275\u0275text(7, "Sistema de verificaci\xF3n ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "app-buscador-creditos", 7);
    \u0275\u0275listener("creditoIdChange", function CreditosComprobacionesComponent_Template_app_buscador_creditos_creditoIdChange_9_listener($event) {
      return ctx.onCreditoSelected($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, CreditosComprobacionesComponent_Conditional_10_Template, 70, 25, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "app-formulario-flotante", 9);
    \u0275\u0275twoWayListener("showChange", function CreditosComprobacionesComponent_Template_app_formulario_flotante_showChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
      return $event;
    });
    \u0275\u0275conditionalCreate(12, CreditosComprobacionesComponent_Conditional_12_Template, 1, 1, "app-credito-comprobacion-form", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Los documentos migrados de s2c pueden tardar en descargarse, esto es normal por la antiguedad de los archivos.\n");
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15, "\nLos documentos migrados solo se permite descargarlos no abrirlos en pesta\xF1as.\n");
    \u0275\u0275element(16, "br");
    \u0275\u0275text(17, "\nSi puedes leer esto github workflows ha sido configurado correctamente.\n");
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("justId", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 12 : -1);
  }
}, dependencies: [
  BuscadorCreditosComponent,
  CurrencyPipe,
  DatePipe,
  ClienteIdPipe,
  FormularioFlotanteComponent,
  CreditoComprobacionFormComponent
], styles: ["\n\n.credit-detail-card[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6c757d;\n  min-width: 120px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n}\n.status-actions[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.02);\n  margin: 0 -1.25rem -1rem;\n  padding: 1rem 1.25rem;\n}\n@media (max-width: 768px) {\n  .detail-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .detail-label[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=comprobaciones.component.css.map */"] });
var CreditosComprobacionesComponent = _CreditosComprobacionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosComprobacionesComponent, [{
    type: Component,
    args: [{ selector: "app-comprobaciones", imports: [
      BuscadorCreditosComponent,
      CurrencyPipe,
      DatePipe,
      ClienteIdPipe,
      FormularioFlotanteComponent,
      CreditoComprobacionFormComponent
    ], template: `<div
  class="credit-verification-container bg-white rounded-3 shadow-sm p-4 mb-4"
>
  <!-- Encabezado -->
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h3 class="h4 mb-0 text-primary">
      <i class="bi bi-file-earmark-check me-2"></i>Comprobaciones de Destino de
      Cr\xE9dito
    </h3>
    <div class="badge bg-primary bg-opacity-10 text-light">
      <i class="bi bi-info-circle me-1"></i>Sistema de verificaci\xF3n
    </div>
  </div>

  <!-- Buscador -->
  <div class="mb-4">
    <app-buscador-creditos
      (creditoIdChange)="onCreditoSelected($event)"
      [justId]="true"
      class="custom-search-box"
    >
    </app-buscador-creditos>
  </div>

  <!-- Tabla de cr\xE9dito -->
  @if (credito) {
    <div class="credit-details-table mb-5">
      <div class="credit-detail-card card border-0 shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="card-title mb-0">
            <i class="bi bi-credit-card me-2"></i>Detalle del Cr\xE9dito
          </h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <!-- Primera columna -->
            <div class="col-md-6">
              <div class="detail-item">
                <span class="detail-label">ID Cr\xE9dito:</span>
                <span class="detail-value">{{ credito.id }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Cliente:</span>
                <span class="detail-value"
                  >{{ credito | clienteId }} -
                  {{ utils.nombreClienteFromCredito(credito) }}</span
                >
              </div>
              <div class="detail-item">
                <span class="detail-label">Referencia:</span>
                <span class="detail-value">{{ credito.folio }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">RFC:</span>
                <span class="detail-value">{{
                  utils.rfcFromCredito(credito)
                }}</span>
              </div>
            </div>
            <!-- Segunda columna -->
            <div class="col-md-6">
              <div class="detail-item">
                <span class="detail-label">Fecha Inicio:</span>
                <span class="detail-value">{{
                  credito.fecha_convenio?.substring(0, 10) | date: "dd/MM/yyyy"
                }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Capital:</span>
                <span class="detail-value">{{
                  credito.monto_autorizado | currency
                }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Comprobado:</span>
                <span class="detail-value text-success">{{
                  totalComprobaciones() | currency
                }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Por Comprobar:</span>
                <span class="detail-value text-danger">{{
                  (credito.monto_autorizado ?? 0) - totalComprobaciones()
                    | currency
                }}</span>
              </div>
            </div>
          </div>
          <!-- Estado y acciones -->
          <div class="status-actions mt-4 pt-3 border-top">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                @if (!esCreditoComprobado()) {
                  <span class="status-badge badge bg-warning py-2 px-3">
                    <i class="bi bi-exclamation-triangle me-2"></i>SIN COMPROBAR
                  </span>
                }
                @if (esCreditoComprobado()) {
                  <span class="status-badge badge bg-primary py-2 px-3">
                    <i class="bi bi-patch-check-fill me-2"></i>COMPROBADO
                  </span>
                }
              </div>
              <div class="action-buttons">
                <button
                  class="btn btn-primary me-2"
                  (click)="nuevaComprobacion()"
                  [disabled]="!verificarPermiso('create')"
                >
                  <i class="bi bi-plus-circle me-1"></i>Comprobar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Secci\xF3n de Comprobaciones -->
      <div class="comprobaciones-section">
        <h5 class="mb-3 text-muted">
          <i class="bi bi-receipt me-2"></i>Historial de Comprobaciones
        </h5>
        @if (!credito.credito_comprobaciones?.length) {
          <div class="alert alert-info">
            <i class="bi bi-info-circle me-2"></i>No se encontraron
            comprobaciones registradas
          </div>
        }
        @if (credito.credito_comprobaciones?.length) {
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Monto</th>
                  <th>Fecha C.</th>
                  <th>Fecha Fac.</th>
                  <th>Folio Fac.</th>
                  <th class="text-center">Archivo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                @for (
                  comprobacion of credito.credito_comprobaciones;
                  track comprobacion
                ) {
                  <tr [hidden]="comprobacion.deleted_at">
                    <td>{{ comprobacion.monto | currency }}</td>
                    <td>
                      {{ comprobacion.fecha_comprobacion | date: "dd/MM/yyyy" }}
                    </td>
                    <td>
                      {{
                        (comprobacion.fecha_factura | date: "dd/MM/yyyy") ??
                          "N/A"
                      }}
                    </td>
                    <td>{{ comprobacion.folio_factura ?? "N/A" }}</td>
                    <td class="text-center">
                      <button
                        class="btn btn-sm btn-primary m-1"
                        [disabled]="!comprobacion.nombre_archivo"
                        (click)="
                          utils.openUrlInline(comprobacion.nombre_archivo)
                        "
                      >
                        <i class="bi bi-printer-fill"></i>
                      </button>
                    </td>
                    <td class="text-end">
                      <button
                        class="btn btn-sm btn-success m-1"
                        (click)="editarComprobacion(comprobacion)"
                        [disabled]="!verificarPermiso('edit')"
                      >
                        <i class="bi bi-pencil-fill"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-danger m-1"
                        (click)="
                          creditoComprobacionController.switch(comprobacion)
                        "
                        [disabled]="!verificarPermiso('delete')"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  }
</div>

<app-formulario-flotante [(show)]="showForm">
  @if (edit) {
    <app-credito-comprobacion-form [(edit)]="edit" />
  }
</app-formulario-flotante>

Los documentos migrados de s2c pueden tardar en descargarse, esto es normal por la antiguedad de los archivos.
<br>
Los documentos migrados solo se permite descargarlos no abrirlos en pesta\xF1as.
<br>
Si puedes leer esto github workflows ha sido configurado correctamente.
`, styles: ["/* src/app/main/creditos/comprobaciones/comprobaciones.component.css */\n.credit-detail-card {\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.detail-item {\n  display: flex;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.detail-label {\n  font-weight: 600;\n  color: #6c757d;\n  min-width: 120px;\n}\n.detail-value {\n  color: #212529;\n}\n.status-badge {\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n}\n.status-actions {\n  background-color: rgba(0, 0, 0, 0.02);\n  margin: 0 -1.25rem -1rem;\n  padding: 1rem 1.25rem;\n}\n@media (max-width: 768px) {\n  .detail-item {\n    flex-direction: column;\n  }\n  .detail-label {\n    margin-bottom: 0.25rem;\n  }\n  .action-buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .action-buttons .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=comprobaciones.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }, { type: CreditoService }, { type: CreditoComprobacionService }, { type: Router }, { type: ActivatedRoute }, { type: LocalStorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosComprobacionesComponent, { className: "CreditosComprobacionesComponent", filePath: "src/app/main/creditos/comprobaciones/comprobaciones.component.ts", lineNumber: 30 });
})();

// src/app/main/creditos/creditos.routes.ts
var creditosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: CreditosTablaComponent },
  {
    path: "editar/:credito_id",
    component: CreditoFormComponent,
    loadChildren: () => import("./chunk-L63TIHMS.js").then((m) => m.creditoFormRoutes)
  },
  {
    path: "verificaciones/:credito_id",
    component: VerificacionesCreditosComponent,
    loadChildren: () => import("./chunk-YAYFC7CC.js").then((m) => m.verificacionesCreditosRoutes)
  },
  {
    path: "documentos/:credito_id",
    component: DocumentosCreditosComponent,
    loadChildren: () => import("./chunk-7M4JZQM2.js").then((m) => m.creditosDocumentosRoutes)
  },
  {
    path: "en-proceso",
    title: "Creditos En Proceso",
    component: CreditosEnProcesoComponent
  },
  {
    path: "validacion",
    title: "Creditos En Validacion",
    component: CreditosEnValidacionComponent
  },
  {
    path: "validar/:credito_id",
    title: "Validar Cr\xE9dito",
    component: CreditoValidarComponent
  },
  {
    path: "dictaminacion",
    title: "Cr\xE9ditos en Dictaminci\xF3n",
    component: CreditosDictaminacionComponent
  },
  {
    path: "formalizacion",
    title: "Cr\xE9ditos en Formalizaci\xF3n",
    component: CreditosFormalizacionComponent
  },
  {
    path: "preliberacion",
    title: "Cr\xE9ditos en Pre Liberaci\xF3n",
    component: CreditosPreliberacionComponent
  },
  {
    path: "liberacion",
    title: "Cr\xE9ditos en Liberaci\xF3n",
    component: CreditosLiberacionComponent
  },
  {
    path: "contratos/:credito_id",
    title: "Contratos de C\u0155edito",
    component: ContratosCreditoComponent
  },
  {
    path: "pagares/:credito_id",
    title: "Pagares",
    component: PagaresComponent
  },
  {
    path: "comprobacion",
    title: "Comprobaciones destino credito",
    component: CreditosComprobacionesComponent
  },
  {
    path: "comprobacion/:credito_id",
    title: "Comprobaciones destino credito",
    component: CreditosComprobacionesComponent
  }
];
export {
  creditosRoutes
};
//# sourceMappingURL=chunk-V36KV3YY.js.map
