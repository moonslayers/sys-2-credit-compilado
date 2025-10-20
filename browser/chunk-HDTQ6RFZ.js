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

// src/app/controllers/tipo.discapacidad.service.ts
var _TipoDiscapacidadService = class _TipoDiscapacidadService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "tipo_discapacidad";
    this.columns = [
      "nombre"
    ];
  }
};
_TipoDiscapacidadService.\u0275fac = function TipoDiscapacidadService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TipoDiscapacidadService)(\u0275\u0275inject(Injector));
};
_TipoDiscapacidadService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoDiscapacidadService, factory: _TipoDiscapacidadService.\u0275fac, providedIn: "any" });
var TipoDiscapacidadService = _TipoDiscapacidadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoDiscapacidadService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/catalogos/tipos-discapacidad/list-tipos-discapacidad/list-tipos-discapacidad.component.ts
var _ListTiposDiscapacidadComponent = class _ListTiposDiscapacidadComponent {
  constructor(tipoDiscapacidadController) {
    this.tipoDiscapacidadController = tipoDiscapacidadController;
  }
};
_ListTiposDiscapacidadComponent.\u0275fac = function ListTiposDiscapacidadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListTiposDiscapacidadComponent)(\u0275\u0275directiveInject(TipoDiscapacidadService));
};
_ListTiposDiscapacidadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListTiposDiscapacidadComponent, selectors: [["app-list-tipos-discapacidad"]], decls: 1, vars: 1, consts: [["title", "Tipos de Discapacidades", 3, "controller"]], template: function ListTiposDiscapacidadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.tipoDiscapacidadController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListTiposDiscapacidadComponent = _ListTiposDiscapacidadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListTiposDiscapacidadComponent, [{
    type: Component,
    args: [{ selector: "app-list-tipos-discapacidad", imports: [TablaComponent], template: '<app-tabla \ntitle="Tipos de Discapacidades"\n\n[controller]="tipoDiscapacidadController"\n/>' }]
  }], () => [{ type: TipoDiscapacidadService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListTiposDiscapacidadComponent, { className: "ListTiposDiscapacidadComponent", filePath: "src/app/catalogos/tipos-discapacidad/list-tipos-discapacidad/list-tipos-discapacidad.component.ts", lineNumber: 11 });
})();

// src/app/catalogos/tipos-discapacidad/form-tipos-discapacidad/form-tipos-discapacidad.component.ts
var FORM_DEF = [
  {
    key: "nombre",
    label: "Tipo de Discapacidad",
    type: "text",
    style: {
      div: "col-12 p-3"
    }
  }
];
var _FormTiposDiscapacidadComponent = class _FormTiposDiscapacidadComponent {
  constructor(tipoDiscapacidadController, route, utils) {
    this.tipoDiscapacidadController = tipoDiscapacidadController;
    this.route = route;
    this.utils = utils;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("etnia_id"));
      if (id) {
        this.discapacidad = yield this.tipoDiscapacidadController.find(id);
      }
    }));
  }
};
_FormTiposDiscapacidadComponent.\u0275fac = function FormTiposDiscapacidadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormTiposDiscapacidadComponent)(\u0275\u0275directiveInject(TipoDiscapacidadService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormTiposDiscapacidadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormTiposDiscapacidadComponent, selectors: [["app-form-tipos-discapacidad"]], decls: 5, vars: 4, consts: [[1, "col-12", "col-sm-10", "col-md-8", "col-lg-6", "mx-auto", "my-1", "rounded", "p-3", "shadow", "bg-white"], [1, "my-2"], [3, "form", "controller", "edit"]], template: function FormTiposDiscapacidadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "app-generic-form", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.discapacidad ? "Editar" : "Nuevo", " tipo de discapacidad");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form)("controller", ctx.tipoDiscapacidadController)("edit", ctx.discapacidad);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormTiposDiscapacidadComponent = _FormTiposDiscapacidadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormTiposDiscapacidadComponent, [{
    type: Component,
    args: [{ selector: "app-form-tipos-discapacidad", imports: [
      GenericFormComponent
    ], template: `<div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto my-1 rounded p-3 shadow bg-white">
    <h4 class="my-2"><b>{{discapacidad?'Editar':'Nuevo'}} tipo de discapacidad</b></h4>
    <app-generic-form 
    [form]="form"
    [controller]="tipoDiscapacidadController"
    [edit]="discapacidad"
    />
</div>` }]
  }], () => [{ type: TipoDiscapacidadService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormTiposDiscapacidadComponent, { className: "FormTiposDiscapacidadComponent", filePath: "src/app/catalogos/tipos-discapacidad/form-tipos-discapacidad/form-tipos-discapacidad.component.ts", lineNumber: 27 });
})();

// src/app/catalogos/tipos-discapacidad/tipos.discapacidad.routes.ts
var tiposDiscapacidadRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListTiposDiscapacidadComponent },
  { path: "nuevo", component: FormTiposDiscapacidadComponent },
  { path: "editar/:discapacidad_id", component: FormTiposDiscapacidadComponent }
];
export {
  tiposDiscapacidadRoutes
};
//# sourceMappingURL=chunk-HDTQ6RFZ.js.map
