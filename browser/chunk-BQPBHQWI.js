import {
  institucionesFinancieras
} from "./chunk-YKJ36RR3.js";
import {
  ApoyoProveedorService
} from "./chunk-HIYCMY7R.js";
import "./chunk-RAXPYTHI.js";
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
import "./chunk-7VPVFOGJ.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/catalogos/proveedores/list-proveedores/list-proveedores.component.ts
var TABLA_DEF = {
  columns: [
    "nombre_comercial",
    "telefono",
    "estado",
    "created_at",
    "nota"
  ]
};
var _ListProveedoresComponent = class _ListProveedoresComponent {
  constructor(apoyoProveedorController) {
    this.apoyoProveedorController = apoyoProveedorController;
    this.tabla = TABLA_DEF;
  }
};
_ListProveedoresComponent.\u0275fac = function ListProveedoresComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListProveedoresComponent)(\u0275\u0275directiveInject(ApoyoProveedorService));
};
_ListProveedoresComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListProveedoresComponent, selectors: [["app-list-proveedores"]], decls: 1, vars: 2, consts: [["title", "Proveedores de Apoyos", 3, "tableDefinition", "controller"]], template: function ListProveedoresComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.apoyoProveedorController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListProveedoresComponent = _ListProveedoresComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListProveedoresComponent, [{
    type: Component,
    args: [{ selector: "app-list-proveedores", imports: [
      TablaComponent
    ], template: '<app-tabla \ntitle="Proveedores de Apoyos"\n[tableDefinition]="tabla"\n[controller]="apoyoProveedorController"\n/>' }]
  }], () => [{ type: ApoyoProveedorService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListProveedoresComponent, { className: "ListProveedoresComponent", filePath: "src/app/catalogos/proveedores/list-proveedores/list-proveedores.component.ts", lineNumber: 23 });
})();

// src/app/catalogos/proveedores/form-proveedor/form-proveedor.component.ts
var _c0 = () => ({ required: true });
var FORM_DEF = [
  {
    title: "Datos Generales",
    fields: [
      {
        key: "nombre_comercial",
        label: "Nombre Comercial",
        type: "text"
      },
      {
        key: "sucursal",
        label: "Sucursal",
        type: "text"
      },
      {
        key: "direccion",
        label: "Direcci\xF3n",
        type: "text"
      },
      {
        key: "razon_social",
        label: "Raz\xF3n Social",
        type: "text"
      },
      {
        key: "rfc",
        label: "RFC",
        type: "text"
      },
      {
        key: "telefono",
        label: "Tel\xE9fono",
        type: "text"
      },
      {
        key: "estado",
        label: "Estado",
        defaultOption: "NO VERIFICADO",
        options: ["NO VERIFICADO", "VERIFICADO", "RECHAZADO", "POSIBLE FRAUDE"]
      },
      {
        key: "referencia",
        label: "Referencia",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "nota",
        label: "Notas o Comentarios",
        type: "text",
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: false
        }
      }
    ]
  },
  {
    title: "Datos Bancarios",
    fields: [
      {
        key: "banco_nombre",
        label: "Nombre del Banco",
        options: institucionesFinancieras,
        useAutoComplete: true
      },
      {
        key: "cuenta_bancaria",
        label: "Cuenta Bancaria",
        type: "number",
        validator: {
          min: 0
        }
      },
      {
        key: "clabe_interbancaria",
        label: "CLABE",
        type: "text",
        validator: {
          maxLength: 18
        }
      }
    ]
  }
];
var _FormProveedorComponent = class _FormProveedorComponent {
  constructor(proveedorController, route) {
    this.proveedorController = proveedorController;
    this.route = route;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["proveedor_id"]) {
        this.edit = yield this.proveedorController.find(params["proveedor_id"]);
      }
    }));
  }
};
_FormProveedorComponent.\u0275fac = function FormProveedorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormProveedorComponent)(\u0275\u0275directiveInject(ApoyoProveedorService), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormProveedorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormProveedorComponent, selectors: [["app-form-proveedor"]], decls: 4, vars: 6, consts: [[1, "container", "bg-white", "shadow", "rounded", "p-3", "my-1"], [1, "text-center"], [3, "editChange", "form", "edit", "controller", "validator"]], template: function FormProveedorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 2);
    \u0275\u0275twoWayListener("editChange", function FormProveedorComponent_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nuevo", " Proveedor");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("controller", ctx.proveedorController)("validator", \u0275\u0275pureFunction0(5, _c0));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormProveedorComponent = _FormProveedorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormProveedorComponent, [{
    type: Component,
    args: [{ selector: "app-form-proveedor", imports: [
      GenericFormComponent
    ], template: `<div class="container bg-white shadow rounded p-3 my-1">
  <h3 class="text-center">{{edit?'Editar':'Nuevo'}} Proveedor</h3>
  <app-generic-form
    [form]="form"
    [(edit)]="edit"
    [controller]="proveedorController"
    [validator]="{required:true}"
  ></app-generic-form>
</div>
` }]
  }], () => [{ type: ApoyoProveedorService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormProveedorComponent, { className: "FormProveedorComponent", filePath: "src/app/catalogos/proveedores/form-proveedor/form-proveedor.component.ts", lineNumber: 106 });
})();

// src/app/catalogos/proveedores/proveedores.routes.ts
var proveedoresRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListProveedoresComponent },
  { path: "nuevo", component: FormProveedorComponent },
  { path: "editar/:proveedor_id", component: FormProveedorComponent }
];
export {
  proveedoresRoutes
};
//# sourceMappingURL=chunk-BQPBHQWI.js.map
