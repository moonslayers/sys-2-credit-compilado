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

// src/app/controllers/despacho.service.ts
var _DespachoService = class _DespachoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "despachos";
    this.columns = [
      "nombre",
      "rfc",
      "domicilio",
      "porcentaje_cobro",
      "porcentaje_cobro_400",
      "domicilio_fiscal",
      "responsable_nombre",
      "responsable_email",
      "usuario_id"
    ];
  }
};
_DespachoService.\u0275fac = function DespachoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DespachoService)(\u0275\u0275inject(Injector));
};
_DespachoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DespachoService, factory: _DespachoService.\u0275fac, providedIn: "any" });
var DespachoService = _DespachoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DespachoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/catalogos/despachos/list-despachos/list-despachos.component.ts
var TABLE_DEF = {
  columns: [
    "id",
    "nombre",
    "domicilio",
    "rfc",
    "created_at"
  ]
};
var _ListDespachosComponent = class _ListDespachosComponent {
  constructor(despachoController) {
    this.despachoController = despachoController;
    this.tabla = TABLE_DEF;
  }
};
_ListDespachosComponent.\u0275fac = function ListDespachosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListDespachosComponent)(\u0275\u0275directiveInject(DespachoService));
};
_ListDespachosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListDespachosComponent, selectors: [["app-list-despachos"]], decls: 1, vars: 2, consts: [["title", "Despachos", 3, "controller", "tableDefinition"]], template: function ListDespachosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.despachoController)("tableDefinition", ctx.tabla);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListDespachosComponent = _ListDespachosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListDespachosComponent, [{
    type: Component,
    args: [{ selector: "app-list-despachos", imports: [
      TablaComponent
    ], template: '<app-tabla \ntitle="Despachos"\n[controller]="despachoController"\n[tableDefinition]="tabla"\n/>' }]
  }], () => [{ type: DespachoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListDespachosComponent, { className: "ListDespachosComponent", filePath: "src/app/catalogos/despachos/list-despachos/list-despachos.component.ts", lineNumber: 23 });
})();

// src/app/catalogos/despachos/form-despachos/form-despachos.component.ts
var FORM_DEF = [
  {
    title: "Datos Generales",
    fields: [
      {
        key: "nombre",
        label: "Nombre del Despacho",
        type: "text"
      },
      {
        key: "rfc",
        label: "RFC",
        type: "text"
      },
      {
        key: "domicilio",
        label: "Domicilio del Despacho",
        type: "text"
      }
    ]
  },
  {
    title: "Representantes Legales",
    foreign_key: "despacho_id",
    apiUrl: "api/despachos_representantes_legales",
    baseFields: [
      {
        key: "nombre",
        label: "Nombre",
        type: "text"
      },
      {
        key: "correo",
        label: "Correo",
        type: "text"
      },
      {
        key: "telefono",
        label: "Tel\xE9fono",
        type: "text"
      }
    ]
  },
  {
    title: "Tel\xE9fonos del Despacho",
    foreign_key: "despacho_id",
    apiUrl: "api/despachos_telefonos",
    baseFields: [
      {
        key: "telefono",
        label: "Tel\xE9fono",
        type: "text"
      },
      {
        key: "tipo",
        label: "Tipo Tel\xE9fono",
        options: ["CASA", "CELULAR", "OFICINA", "OTRO"]
      }
    ]
  }
];
var _FormDespachosComponent = class _FormDespachosComponent {
  constructor(despachoController, route) {
    this.despachoController = despachoController;
    this.route = route;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["despacho_id"]) {
        this.edit = yield this.despachoController.find(params["despacho_id"]);
      }
    }));
  }
};
_FormDespachosComponent.\u0275fac = function FormDespachosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDespachosComponent)(\u0275\u0275directiveInject(DespachoService), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormDespachosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDespachosComponent, selectors: [["app-form-despachos"]], decls: 4, vars: 4, consts: [[1, "container", "my-1", "p-3", "rounded", "bg-white", "shadow"], [1, "text-center"], [3, "editChange", "form", "controller", "edit"]], template: function FormDespachosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 2);
    \u0275\u0275twoWayListener("editChange", function FormDespachosComponent_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nuevo", " Despacho");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form)("controller", ctx.despachoController);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormDespachosComponent = _FormDespachosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDespachosComponent, [{
    type: Component,
    args: [{ selector: "app-form-despachos", imports: [
      GenericFormComponent
    ], template: `<div class="container my-1 p-3 rounded bg-white shadow">
    <h3 class="text-center">{{edit?'Editar':'Nuevo'}} Despacho</h3>
    <app-generic-form 
    [form]="form"
    [controller]="despachoController"
    [(edit)]="edit"
    />
</div>` }]
  }], () => [{ type: DespachoService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDespachosComponent, { className: "FormDespachosComponent", filePath: "src/app/catalogos/despachos/form-despachos/form-despachos.component.ts", lineNumber: 77 });
})();

// src/app/catalogos/despachos/despachos.routes.ts
var despachosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListDespachosComponent },
  { path: "editar/:despacho_id", component: FormDespachosComponent },
  { path: "nuevo", component: FormDespachosComponent }
];
export {
  despachosRoutes
};
//# sourceMappingURL=chunk-G5LRDNTW.js.map
