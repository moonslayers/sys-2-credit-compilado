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

// src/app/controllers/parentesco.service.ts
var _ParentescoService = class _ParentescoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "parentesco";
    this.columns = [
      "nombre"
    ];
  }
};
_ParentescoService.\u0275fac = function ParentescoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParentescoService)(\u0275\u0275inject(Injector));
};
_ParentescoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParentescoService, factory: _ParentescoService.\u0275fac, providedIn: "any" });
var ParentescoService = _ParentescoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentescoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/catalogos/parentescos/form-parentesco/form-parentesco.component.ts
var FORM_DEF = [
  {
    key: "nombre",
    label: "Parentesco",
    type: "text",
    style: {
      div: "col-12 p-3"
    }
  }
];
var _FormParentescoComponent = class _FormParentescoComponent {
  constructor(parentescoController, route, utils) {
    this.parentescoController = parentescoController;
    this.route = route;
    this.utils = utils;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("parentesco_id"));
      if (id) {
        this.parentesco = yield this.parentescoController.find(id);
      }
    }));
  }
};
_FormParentescoComponent.\u0275fac = function FormParentescoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormParentescoComponent)(\u0275\u0275directiveInject(ParentescoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormParentescoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormParentescoComponent, selectors: [["app-form-parentesco"]], decls: 5, vars: 4, consts: [[1, "col-12", "col-sm-10", "col-md-8", "col-lg-6", "mx-auto", "my-1", "rounded", "p-3", "shadow", "bg-white"], [1, "my-2"], [3, "form", "controller", "edit"]], template: function FormParentescoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "app-generic-form", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.parentesco ? "Editar" : "Nuevo", " parentesco");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form)("controller", ctx.parentescoController)("edit", ctx.parentesco);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormParentescoComponent = _FormParentescoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormParentescoComponent, [{
    type: Component,
    args: [{ selector: "app-form-parentesco", imports: [
      GenericFormComponent
    ], template: `<div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto my-1 rounded p-3 shadow bg-white">
    <h4 class="my-2"><b>{{parentesco?'Editar':'Nuevo'}} parentesco</b></h4>
    <app-generic-form 
    [form]="form"
    [controller]="parentescoController"
    [edit]="parentesco"
    />
</div>` }]
  }], () => [{ type: ParentescoService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormParentescoComponent, { className: "FormParentescoComponent", filePath: "src/app/catalogos/parentescos/form-parentesco/form-parentesco.component.ts", lineNumber: 27 });
})();

// src/app/catalogos/parentescos/list-parentescos/list-parentescos.component.ts
var _ListParentescosComponent = class _ListParentescosComponent {
  constructor(parentescoController) {
    this.parentescoController = parentescoController;
  }
};
_ListParentescosComponent.\u0275fac = function ListParentescosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListParentescosComponent)(\u0275\u0275directiveInject(ParentescoService));
};
_ListParentescosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListParentescosComponent, selectors: [["app-list-parentescos"]], decls: 1, vars: 1, consts: [["title", "Parentescos", 3, "controller"]], template: function ListParentescosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.parentescoController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListParentescosComponent = _ListParentescosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListParentescosComponent, [{
    type: Component,
    args: [{ selector: "app-list-parentescos", imports: [TablaComponent], template: '<app-tabla \ntitle="Parentescos"\n\n[controller]="parentescoController"\n/>' }]
  }], () => [{ type: ParentescoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListParentescosComponent, { className: "ListParentescosComponent", filePath: "src/app/catalogos/parentescos/list-parentescos/list-parentescos.component.ts", lineNumber: 11 });
})();

// src/app/catalogos/parentescos/parentescos.routes.ts
var parentescosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListParentescosComponent },
  { path: "nuevo", component: FormParentescoComponent },
  { path: "editar/:etnia_id", component: FormParentescoComponent }
];
export {
  parentescosRoutes
};
//# sourceMappingURL=chunk-SF5CNL67.js.map
