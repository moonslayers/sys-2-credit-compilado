import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import "./chunk-I7RPY2ZE.js";
import "./chunk-NXIA6ZMF.js";
import "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
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
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  Injectable,
  Injector,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/juzgado.service.ts
var _JuzgadoService = class _JuzgadoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "juzgados";
    this.columns = [
      "ciudad_id",
      "nombre",
      "usuario_id"
    ];
  }
};
_JuzgadoService.\u0275fac = function JuzgadoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuzgadoService)(\u0275\u0275inject(Injector));
};
_JuzgadoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JuzgadoService, factory: _JuzgadoService.\u0275fac, providedIn: "any" });
var JuzgadoService = _JuzgadoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuzgadoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/catalogos/juzgados/form-juzgados/form-juzgados.component.ts
var _c0 = () => ({ required: true });
var FORM_DEF = [
  {
    key: "ciudad_id",
    label: "Ciudad:",
    apiUrl: "api/ciudades",
    keyList: "id",
    keyDetalle: "nombre",
    style: {
      div: "col p-3"
    }
  },
  {
    key: "nombre",
    label: "Nombre",
    type: "text",
    style: {
      div: "col p-3"
    }
  }
];
var _FormJuzgadosComponent = class _FormJuzgadosComponent {
  constructor(juzgadoController, route, utils) {
    this.juzgadoController = juzgadoController;
    this.route = route;
    this.utils = utils;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("juzgado_id"));
      if (id) {
        this.edit = yield this.juzgadoController.find(id);
      }
    }));
  }
};
_FormJuzgadosComponent.\u0275fac = function FormJuzgadosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormJuzgadosComponent)(\u0275\u0275directiveInject(JuzgadoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormJuzgadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormJuzgadosComponent, selectors: [["app-form-juzgados"]], decls: 5, vars: 6, consts: [[1, "container", "my-1", "p-3", "bg-white", "rounded", "shadow"], [1, "mb-2"], [3, "form", "controller", "validator", "edit"]], template: function FormJuzgadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "app-generic-form", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nuevo", " Juzgado");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form)("controller", ctx.juzgadoController)("validator", \u0275\u0275pureFunction0(5, _c0))("edit", ctx.edit);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormJuzgadosComponent = _FormJuzgadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormJuzgadosComponent, [{
    type: Component,
    args: [{ selector: "app-form-juzgados", imports: [
      GenericFormComponent
    ], template: `<div class="container my-1 p-3 bg-white rounded shadow">
    <h4 class="mb-2"><b>{{edit?'Editar':'Nuevo'}} Juzgado</b></h4>
    <app-generic-form 
    [form]="form"
    [controller]="juzgadoController"
    [validator]="{required:true}"
    [edit]="edit" />
</div>` }]
  }], () => [{ type: JuzgadoService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormJuzgadosComponent, { className: "FormJuzgadosComponent", filePath: "src/app/catalogos/juzgados/form-juzgados/form-juzgados.component.ts", lineNumber: 37 });
})();

// src/app/catalogos/juzgados/list-juzgados/list-juzgados.component.ts
var _ListJuzgadosComponent = class _ListJuzgadosComponent {
  constructor(juzgadoController) {
    this.juzgadoController = juzgadoController;
  }
};
_ListJuzgadosComponent.\u0275fac = function ListJuzgadosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListJuzgadosComponent)(\u0275\u0275directiveInject(JuzgadoService));
};
_ListJuzgadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListJuzgadosComponent, selectors: [["app-list-juzgados"]], decls: 1, vars: 1, consts: [[3, "controller"]], template: function ListJuzgadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.juzgadoController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListJuzgadosComponent = _ListJuzgadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListJuzgadosComponent, [{
    type: Component,
    args: [{ selector: "app-list-juzgados", imports: [TablaComponent], template: '<app-tabla \n\n[controller]="juzgadoController"\n/>' }]
  }], () => [{ type: JuzgadoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListJuzgadosComponent, { className: "ListJuzgadosComponent", filePath: "src/app/catalogos/juzgados/list-juzgados/list-juzgados.component.ts", lineNumber: 11 });
})();

// src/app/catalogos/juzgados/juzgados.routes.ts
var juzgadosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListJuzgadosComponent },
  { path: "nuevo", component: FormJuzgadosComponent },
  { path: "editar/:juzgado_id", component: FormJuzgadosComponent }
];
export {
  juzgadosRoutes
};
//# sourceMappingURL=chunk-BYDTDDRY.js.map
