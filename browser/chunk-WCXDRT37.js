import {
  EtapaJudicialService
} from "./chunk-FVP77UXZ.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import "./chunk-I7RPY2ZE.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBFW4U4H.js";
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
  ɵɵlistener,
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

// src/app/catalogos/etapas-judiciales/list-etapas-judiciales/list-etapas-judiciales.component.ts
var _c0 = () => ["procesosJudiciales"];
var TABLA_DEF = {
  columns: [
    "id",
    "nombre",
    {
      key: "procesos_judiciales",
      header: "Proceso Judicial",
      subKey: "nombre"
    },
    "created_at"
  ]
};
var _ListEtapasJudicialesComponent = class _ListEtapasJudicialesComponent {
  constructor(etapaController) {
    this.etapaController = etapaController;
    this.tabla = TABLA_DEF;
  }
};
_ListEtapasJudicialesComponent.\u0275fac = function ListEtapasJudicialesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListEtapasJudicialesComponent)(\u0275\u0275directiveInject(EtapaJudicialService));
};
_ListEtapasJudicialesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListEtapasJudicialesComponent, selectors: [["app-list-etapas-judiciales"]], decls: 1, vars: 4, consts: [["title", "Etapas Judiciales", 3, "tableDefinition", "relations", "controller"]], template: function ListEtapasJudicialesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("relations", \u0275\u0275pureFunction0(3, _c0))("controller", ctx.etapaController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListEtapasJudicialesComponent = _ListEtapasJudicialesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListEtapasJudicialesComponent, [{
    type: Component,
    args: [{ selector: "app-list-etapas-judiciales", imports: [
      TablaComponent
    ], template: `<app-tabla 
title="Etapas Judiciales"
[tableDefinition]="tabla"
[relations]="['procesosJudiciales']"
[controller]="etapaController"
/>` }]
  }], () => [{ type: EtapaJudicialService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListEtapasJudicialesComponent, { className: "ListEtapasJudicialesComponent", filePath: "src/app/catalogos/etapas-judiciales/list-etapas-judiciales/list-etapas-judiciales.component.ts", lineNumber: 26 });
})();

// src/app/catalogos/etapas-judiciales/form-etapas-judiciales/form-etapas-judiciales.component.ts
var _FormEtapasJudicialesComponent = class _FormEtapasJudicialesComponent {
  constructor(etapaController, route) {
    this.etapaController = etapaController;
    this.route = route;
    this.edit = {
      nombre: "",
      proceso_judicial_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    };
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["etapa_id"]) {
        this.edit = yield this.etapaController.find(params["etapa_id"]);
      }
    }));
  }
  save() {
    return __async(this, null, function* () {
      const res = yield this.etapaController.createOrUpdate(this.edit);
      if (res) {
        this.edit = res;
      }
    });
  }
};
_FormEtapasJudicialesComponent.\u0275fac = function FormEtapasJudicialesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormEtapasJudicialesComponent)(\u0275\u0275directiveInject(EtapaJudicialService), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormEtapasJudicialesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormEtapasJudicialesComponent, selectors: [["app-form-etapas-judiciales"]], decls: 14, vars: 3, consts: [[1, "container", "p-3", "shadow", "rounded", "my-1", "bg-white"], [1, "fw-bold"], [1, "row", "mt-4"], [1, "col", "p-3"], [1, "fw-bold", "ps-1"], ["type", "text", "id", "floatingInput", "placeholder", "Ingresa un nombre", 1, "form-control", 3, "ngModelChange", "ngModel"], ["apiUrl", "api/procesos_judiciales", "keyList", "id", "keyDetalle", "nombre", "label", "Proceso Judicial:", 3, "valueChange", "value"], [1, "row"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click"]], template: function FormEtapasJudicialesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "span", 4);
    \u0275\u0275text(6, "Nombre Etapa:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function FormEtapasJudicialesComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit.nombre, $event) || (ctx.edit.nombre = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 3)(9, "app-autocomplete-field", 6);
    \u0275\u0275twoWayListener("valueChange", function FormEtapasJudicialesComponent_Template_app_autocomplete_field_valueChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit.proceso_judicial_id, $event) || (ctx.edit.proceso_judicial_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "button", 9);
    \u0275\u0275listener("click", function FormEtapasJudicialesComponent_Template_button_click_12_listener() {
      return ctx.save();
    });
    \u0275\u0275text(13, " Guardar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nueva", " Etapa Judicial");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.edit.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx.edit.proceso_judicial_id);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AutocompleteFieldComponent], encapsulation: 2 });
var FormEtapasJudicialesComponent = _FormEtapasJudicialesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormEtapasJudicialesComponent, [{
    type: Component,
    args: [{ selector: "app-form-etapas-judiciales", imports: [
      FormsModule,
      AutocompleteFieldComponent
    ], template: `<div class="container p-3 shadow rounded my-1 bg-white">
    <h3 class="fw-bold">{{edit?'Editar':'Nueva'}} Etapa Judicial</h3>

    <div class="row mt-4">
        <div class="col p-3">
            <span class="fw-bold ps-1">Nombre Etapa:</span>
            <input type="text" class="form-control" id="floatingInput" placeholder="Ingresa un nombre" [(ngModel)]="edit.nombre">
        </div>
        <div class="col p-3">
            <app-autocomplete-field apiUrl="api/procesos_judiciales" keyList="id" keyDetalle="nombre" [(value)]="edit.proceso_judicial_id"
            label="Proceso Judicial:" />
        </div>
    </div>

    <div class="row">
        <div class="col text-center">
            <button class="btn btn-primary" (click)="save()">
                Guardar
            </button>
        </div>
    </div>
</div>` }]
  }], () => [{ type: EtapaJudicialService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormEtapasJudicialesComponent, { className: "FormEtapasJudicialesComponent", filePath: "src/app/catalogos/etapas-judiciales/form-etapas-judiciales/form-etapas-judiciales.component.ts", lineNumber: 17 });
})();

// src/app/catalogos/etapas-judiciales/etapas.judiciales.routes.ts
var etapasJudicialesRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListEtapasJudicialesComponent },
  { path: "nuevo", component: FormEtapasJudicialesComponent },
  { path: "editar/:etapa_id", component: FormEtapasJudicialesComponent }
];
export {
  etapasJudicialesRoutes
};
//# sourceMappingURL=chunk-WCXDRT37.js.map
