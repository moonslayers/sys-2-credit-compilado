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
  SuperService
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

// src/app/controllers/ciudad.service.ts
var _CiudadService = class _CiudadService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "ciudades";
    this.columns = [
      "nombre",
      "tipo",
      "estado_id"
    ];
  }
};
_CiudadService.\u0275fac = function CiudadService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CiudadService)(\u0275\u0275inject(Injector));
};
_CiudadService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CiudadService, factory: _CiudadService.\u0275fac, providedIn: "any" });
var CiudadService = _CiudadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CiudadService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/catalogos/ciudades/list-ciudades/list-ciudades.component.ts
var TABLE_DEF = {
  columns: [
    "id",
    "nombre",
    {
      key: "estados",
      subKey: "nombre",
      header: "Estado"
    },
    "tipo",
    "created_at",
    "updated_at"
  ]
};
var _ListCiudadesComponent = class _ListCiudadesComponent {
  constructor(ciudadController) {
    this.ciudadController = ciudadController;
    this.tabla = TABLE_DEF;
  }
};
_ListCiudadesComponent.\u0275fac = function ListCiudadesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCiudadesComponent)(\u0275\u0275directiveInject(CiudadService));
};
_ListCiudadesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCiudadesComponent, selectors: [["app-list-ciudades"]], decls: 1, vars: 2, consts: [["title", "Ciudades", 3, "controller", "tableDefinition"]], template: function ListCiudadesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.ciudadController)("tableDefinition", ctx.tabla);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListCiudadesComponent = _ListCiudadesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCiudadesComponent, [{
    type: Component,
    args: [{ selector: "app-list-ciudades", imports: [TablaComponent], template: '<app-tabla title="Ciudades" [controller]="ciudadController" [tableDefinition]="tabla"></app-tabla>' }]
  }], () => [{ type: CiudadService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCiudadesComponent, { className: "ListCiudadesComponent", filePath: "src/app/catalogos/ciudades/list-ciudades/list-ciudades.component.ts", lineNumber: 26 });
})();

// src/app/catalogos/ciudades/form-ciudades/form-ciudades.component.ts
var FORM = [
  {
    key: "nombre",
    label: "Nombre",
    type: "text",
    validator: {
      required: true
    }
  },
  {
    key: "tipo",
    label: "Tipo de Ciudad",
    defaultOption: "CIUDAD",
    options: ["CIUDAD", "MUNICIPIO", "POBLACION"]
  },
  {
    apiUrl: "api/estados",
    key: "estado_id",
    label: "Estado",
    keyList: "id",
    keyDetalle: "nombre",
    validator: {
      required: true
    }
  }
];
var _FormCiudadesComponent = class _FormCiudadesComponent {
  constructor(ciudadController, route) {
    this.ciudadController = ciudadController;
    this.route = route;
    this.form = FORM;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      const id = params["ciudad_id"];
      if (id) {
        this.edit = yield this.ciudadController.find(id);
      }
    }));
  }
};
_FormCiudadesComponent.\u0275fac = function FormCiudadesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormCiudadesComponent)(\u0275\u0275directiveInject(CiudadService), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormCiudadesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCiudadesComponent, selectors: [["app-form-ciudades"]], decls: 4, vars: 5, consts: [[1, "container-xl", "p-3", "rounded", "shadow", "bg-white"], [3, "editChange", "edit", "controller", "form", "isolatedForm"]], template: function FormCiudadesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 1);
    \u0275\u0275twoWayListener("editChange", function FormCiudadesComponent_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nueva", " Ciudad");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("controller", ctx.ciudadController)("form", ctx.form)("isolatedForm", true);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormCiudadesComponent = _FormCiudadesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCiudadesComponent, [{
    type: Component,
    args: [{ selector: "app-form-ciudades", imports: [GenericFormComponent], template: `<div class="container-xl p-3 rounded shadow bg-white">
    <h4>{{edit? 'Editar' :'Nueva'}} Ciudad</h4>
    <app-generic-form [(edit)]="edit" [controller]="ciudadController" [form]="form" [isolatedForm]="true" ></app-generic-form>
</div>` }]
  }], () => [{ type: CiudadService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCiudadesComponent, { className: "FormCiudadesComponent", filePath: "src/app/catalogos/ciudades/form-ciudades/form-ciudades.component.ts", lineNumber: 40 });
})();

// src/app/catalogos/ciudades/ciudades.routes.ts
var ciudadesRoutes = [
  { path: "", pathMatch: "full", redirectTo: "list" },
  { title: "Ciudades", path: "list", component: ListCiudadesComponent },
  { title: "Ciudad", path: "nuevo", component: FormCiudadesComponent },
  { title: "Ciudad", path: "editar/:ciudad_id", component: FormCiudadesComponent }
];
export {
  ciudadesRoutes
};
//# sourceMappingURL=chunk-6THK6ET3.js.map
