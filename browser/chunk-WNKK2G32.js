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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/actividad.economica.service.ts
var _ActividadEconomicaService = class _ActividadEconomicaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "actividades_economicas";
    this.columns = [
      "usuario_id",
      "clave",
      "grupo",
      "subgrupo",
      "descripcion",
      "incluye"
    ];
  }
};
_ActividadEconomicaService.\u0275fac = function ActividadEconomicaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ActividadEconomicaService)(\u0275\u0275inject(Injector));
};
_ActividadEconomicaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ActividadEconomicaService, factory: _ActividadEconomicaService.\u0275fac, providedIn: "any" });
var ActividadEconomicaService = _ActividadEconomicaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActividadEconomicaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/catalogos/actividades-economicas/list-actividades-economicas/list-actividades-economicas.component.ts
var _ListActividadesEconomicasComponent = class _ListActividadesEconomicasComponent {
  constructor(activadEconomicaController) {
    this.activadEconomicaController = activadEconomicaController;
  }
};
_ListActividadesEconomicasComponent.\u0275fac = function ListActividadesEconomicasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListActividadesEconomicasComponent)(\u0275\u0275directiveInject(ActividadEconomicaService));
};
_ListActividadesEconomicasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListActividadesEconomicasComponent, selectors: [["app-list-actividades-economicas"]], decls: 1, vars: 1, consts: [["title", "Actividades Economicas", 3, "controller"]], template: function ListActividadesEconomicasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.activadEconomicaController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListActividadesEconomicasComponent = _ListActividadesEconomicasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListActividadesEconomicasComponent, [{
    type: Component,
    args: [{ selector: "app-list-actividades-economicas", imports: [
      TablaComponent
    ], template: '<app-tabla \ntitle="Actividades Economicas"\n[controller]="activadEconomicaController"\n/>' }]
  }], () => [{ type: ActividadEconomicaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListActividadesEconomicasComponent, { className: "ListActividadesEconomicasComponent", filePath: "src/app/catalogos/actividades-economicas/list-actividades-economicas/list-actividades-economicas.component.ts", lineNumber: 13 });
})();

// src/app/catalogos/actividades-economicas/form-actividades-economicas/form-actividades-economicas.component.ts
var FORM_DEF = [
  {
    key: "clave",
    label: "Clave",
    type: "number",
    validator: {
      required: true
    }
  },
  {
    key: "grupo",
    label: "Grupo",
    type: "text"
  },
  {
    key: "subgrupo",
    label: "Subgrupo",
    type: "text",
    validator: {
      required: true
    }
  },
  {
    key: "descripcion",
    label: "Descripcion",
    type: "text",
    style: {
      div: "col-12 col-sm-6 p-3"
    }
  },
  {
    key: "incluye",
    label: "Incluye",
    type: "text",
    style: {
      div: "col-12 col-sm p-3"
    }
  }
];
var _FormActividadesEconomicasComponent = class _FormActividadesEconomicasComponent {
  constructor(actividadEconomicaController, route, utils) {
    this.actividadEconomicaController = actividadEconomicaController;
    this.route = route;
    this.utils = utils;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("actividad_economica_id"));
      if (id) {
        this.actividadEconomica = yield this.actividadEconomicaController.find(id);
      }
    }));
  }
};
_FormActividadesEconomicasComponent.\u0275fac = function FormActividadesEconomicasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormActividadesEconomicasComponent)(\u0275\u0275directiveInject(ActividadEconomicaService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormActividadesEconomicasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormActividadesEconomicasComponent, selectors: [["app-form-actividades-economicas"]], decls: 5, vars: 4, consts: [[1, "container", "rounded", "shadow", "bg-white", "p-3", "my-2"], [1, "mb-2"], [3, "editChange", "controller", "form", "edit"]], template: function FormActividadesEconomicasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "app-generic-form", 2);
    \u0275\u0275twoWayListener("editChange", function FormActividadesEconomicasComponent_Template_app_generic_form_editChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.actividadEconomica, $event) || (ctx.actividadEconomica = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.actividadEconomica ? "Editar" : "Nueva", " Actividad Economica");
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.actividadEconomicaController)("form", ctx.form);
    \u0275\u0275twoWayProperty("edit", ctx.actividadEconomica);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormActividadesEconomicasComponent = _FormActividadesEconomicasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormActividadesEconomicasComponent, [{
    type: Component,
    args: [{ selector: "app-form-actividades-economicas", imports: [GenericFormComponent], template: `<div class="container rounded shadow bg-white p-3 my-2">
    <h3 class="mb-2"><b>{{actividadEconomica?'Editar':'Nueva'}} Actividad Economica</b></h3>
    <app-generic-form 
    [controller]="actividadEconomicaController"
    [form]="form"
    [(edit)]="actividadEconomica"
    />
</div>` }]
  }], () => [{ type: ActividadEconomicaService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormActividadesEconomicasComponent, { className: "FormActividadesEconomicasComponent", filePath: "src/app/catalogos/actividades-economicas/form-actividades-economicas/form-actividades-economicas.component.ts", lineNumber: 54 });
})();

// src/app/catalogos/actividades-economicas/actividades.economicas.routes.ts
var actividadesEconomicasRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListActividadesEconomicasComponent },
  { path: "nuevo", component: FormActividadesEconomicasComponent },
  { path: "editar/:actividad_economica_id", component: FormActividadesEconomicasComponent }
];
export {
  actividadesEconomicasRoutes
};
//# sourceMappingURL=chunk-WNKK2G32.js.map
