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
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/etnia.service.ts
var _EtniaService = class _EtniaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "etnias";
    this.columns = [
      "nombre"
    ];
  }
};
_EtniaService.\u0275fac = function EtniaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EtniaService)(\u0275\u0275inject(Injector));
};
_EtniaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EtniaService, factory: _EtniaService.\u0275fac, providedIn: "any" });
var EtniaService = _EtniaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EtniaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/catalogos/etnias/form-etnia/form-etnia.component.ts
var FORM_DEF = [
  {
    key: "nombre",
    label: "Etnia",
    type: "text",
    style: {
      div: "col-12 p-3"
    }
  }
];
var _FormEtniaComponent = class _FormEtniaComponent {
  constructor(etniaController, route, utils) {
    this.etniaController = etniaController;
    this.route = route;
    this.utils = utils;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("discapacidad_id"));
      if (id) {
        this.etnia = yield this.etniaController.find(id);
      }
    }));
  }
};
_FormEtniaComponent.\u0275fac = function FormEtniaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormEtniaComponent)(\u0275\u0275directiveInject(EtniaService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormEtniaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormEtniaComponent, selectors: [["app-form-etnia"]], decls: 5, vars: 4, consts: [[1, "col-12", "col-sm-10", "col-md-8", "col-lg-6", "mx-auto", "my-1", "rounded", "p-3", "shadow", "bg-white"], [1, "my-2"], [3, "form", "controller", "edit"]], template: function FormEtniaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "app-generic-form", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.etnia ? "Editar" : "Nuevo", " etnia");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form)("controller", ctx.etniaController)("edit", ctx.etnia);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormEtniaComponent = _FormEtniaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormEtniaComponent, [{
    type: Component,
    args: [{ selector: "app-form-etnia", imports: [
      GenericFormComponent
    ], template: `<div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto my-1 rounded p-3 shadow bg-white">
    <h4 class="my-2"><b>{{etnia?'Editar':'Nuevo'}} etnia</b></h4>
    <app-generic-form 
    [form]="form"
    [controller]="etniaController"
    [edit]="etnia"
    />
</div>` }]
  }], () => [{ type: EtniaService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormEtniaComponent, { className: "FormEtniaComponent", filePath: "src/app/catalogos/etnias/form-etnia/form-etnia.component.ts", lineNumber: 27 });
})();

// src/app/catalogos/etnias/list-etnia/list-etnia.component.ts
var _ListEtniaComponent = class _ListEtniaComponent {
  constructor(etniaController) {
    this.etniaController = etniaController;
  }
};
_ListEtniaComponent.\u0275fac = function ListEtniaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListEtniaComponent)(\u0275\u0275directiveInject(EtniaService));
};
_ListEtniaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListEtniaComponent, selectors: [["app-list-etnia"]], decls: 1, vars: 1, consts: [["title", "Etnias", 3, "controller"]], template: function ListEtniaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.etniaController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListEtniaComponent = _ListEtniaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListEtniaComponent, [{
    type: Component,
    args: [{ selector: "app-list-etnia", imports: [
      TablaComponent
    ], template: '<app-tabla\ntitle="Etnias"\n[controller]="etniaController"\n/>' }]
  }], () => [{ type: EtniaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListEtniaComponent, { className: "ListEtniaComponent", filePath: "src/app/catalogos/etnias/list-etnia/list-etnia.component.ts", lineNumber: 13 });
})();

// src/app/catalogos/etnias/etnias.routes.ts
var etniasRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListEtniaComponent },
  { path: "nuevo", component: FormEtniaComponent },
  { path: "editar/:etnia_id", component: FormEtniaComponent }
];
export {
  etniasRoutes
};
//# sourceMappingURL=chunk-QONLIIQ2.js.map
