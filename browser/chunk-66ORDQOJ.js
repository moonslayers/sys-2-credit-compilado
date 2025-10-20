import {
  EtapaJudicialService
} from "./chunk-FVP77UXZ.js";
import {
  ProcesoJudicialService
} from "./chunk-Y2IL2FJA.js";
import {
  RecordFormButtonsComponent,
  RecordFormComponent
} from "./chunk-BZ6OSZD3.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import "./chunk-I7RPY2ZE.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
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
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/catalogos/procesos-judiciales/list-procesos-judiciales/list-procesos-judiciales.component.ts
var _ListProcesosJudicialesComponent = class _ListProcesosJudicialesComponent {
  constructor(procesoController) {
    this.procesoController = procesoController;
  }
};
_ListProcesosJudicialesComponent.\u0275fac = function ListProcesosJudicialesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListProcesosJudicialesComponent)(\u0275\u0275directiveInject(ProcesoJudicialService));
};
_ListProcesosJudicialesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListProcesosJudicialesComponent, selectors: [["app-list-procesos-judiciales"]], decls: 1, vars: 1, consts: [["title", "Procesos Judiciales", 3, "controller"]], template: function ListProcesosJudicialesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.procesoController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListProcesosJudicialesComponent = _ListProcesosJudicialesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListProcesosJudicialesComponent, [{
    type: Component,
    args: [{ selector: "app-list-procesos-judiciales", imports: [TablaComponent], template: '<app-tabla\ntitle="Procesos Judiciales"\n[controller]="procesoController">\n</app-tabla>' }]
  }], () => [{ type: ProcesoJudicialService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListProcesosJudicialesComponent, { className: "ListProcesosJudicialesComponent", filePath: "src/app/catalogos/procesos-judiciales/list-procesos-judiciales/list-procesos-judiciales.component.ts", lineNumber: 11 });
})();

// src/app/catalogos/procesos-judiciales/form-procesos-judiciales/form-etapa-row/form-etapa-row.component.ts
function FormEtapaRowComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.record.nombre);
  }
}
function FormEtapaRowComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function FormEtapaRowComponent_Conditional_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.record.nombre, $event) || (ctx_r0.record.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 8);
    \u0275\u0275text(3, "Nombre de la Etapa:");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.record.nombre);
  }
}
var _FormEtapaRowComponent = class _FormEtapaRowComponent extends RecordFormComponent {
  constructor(etapaController) {
    super(etapaController);
    this.etapaController = etapaController;
  }
};
_FormEtapaRowComponent.\u0275fac = function FormEtapaRowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormEtapaRowComponent)(\u0275\u0275directiveInject(EtapaJudicialService));
};
_FormEtapaRowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormEtapaRowComponent, selectors: [["app-form-etapa-row"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 5, consts: [[1, "container-fluid", "p-3", "my-1"], [1, "row"], [1, "col"], [1, "text-uppercase", "fw-bold"], [1, "form-floating"], [1, "col-auto", "align-self-center"], [3, "editChange", "onSaveButtonClick", "onDeleteButtonClick", "edit", "isDeleting", "isLoading"], ["placeholder", "Nombre de la Etapa", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "floatingNombreInput"]], template: function FormEtapaRowComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275conditionalCreate(3, FormEtapaRowComponent_Conditional_3_Template, 2, 1, "span", 3);
    \u0275\u0275conditionalCreate(4, FormEtapaRowComponent_Conditional_4_Template, 4, 1, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "record-form-buttons", 6);
    \u0275\u0275twoWayListener("editChange", function FormEtapaRowComponent_Template_record_form_buttons_editChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("onSaveButtonClick", function FormEtapaRowComponent_Template_record_form_buttons_onSaveButtonClick_6_listener() {
      return ctx.save();
    })("onDeleteButtonClick", function FormEtapaRowComponent_Template_record_form_buttons_onDeleteButtonClick_6_listener() {
      return ctx.delete();
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.edit ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("isDeleting", ctx.isDeleting)("isLoading", ctx.isLoading);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RecordFormButtonsComponent], encapsulation: 2 });
var FormEtapaRowComponent = _FormEtapaRowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormEtapaRowComponent, [{
    type: Component,
    args: [{ selector: "app-form-etapa-row", imports: [
      FormsModule,
      RecordFormButtonsComponent
    ], template: '<div class="container-fluid p-3 my-1">\n  <div class="row">\n    <div class="col">\n      @if (!edit) {\n        <span class="text-uppercase fw-bold">{{record.nombre}}</span>\n      }\n      @if (edit) {\n        <div class="form-floating">\n          <input class="form-control" placeholder="Nombre de la Etapa" [(ngModel)]="record.nombre">\n          <label for="floatingNombreInput">Nombre de la Etapa:</label>\n        </div>\n      }\n    </div>\n    <div class="col-auto align-self-center">\n      <record-form-buttons [(edit)]="edit" [isDeleting]="isDeleting" [isLoading]="isLoading" (onSaveButtonClick)="save()"\n        (onDeleteButtonClick)="delete()">\n      </record-form-buttons>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: EtapaJudicialService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormEtapaRowComponent, { className: "FormEtapaRowComponent", filePath: "src/app/catalogos/procesos-judiciales/form-procesos-judiciales/form-etapa-row/form-etapa-row.component.ts", lineNumber: 18 });
})();

// src/app/catalogos/procesos-judiciales/form-procesos-judiciales/form-procesos-judiciales.component.ts
function FormProcesosJudicialesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 10);
    \u0275\u0275text(2, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function FormProcesosJudicialesComponent_Conditional_12_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-etapa-row", 18);
    \u0275\u0275listener("onDeleted", function FormProcesosJudicialesComponent_Conditional_12_For_10_Template_app_form_etapa_row_onDeleted_0_listener() {
      const etapa_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.utils.localDelete(ctx_r1.etapas, etapa_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const etapa_r4 = ctx.$implicit;
    \u0275\u0275property("record", etapa_r4);
  }
}
function FormProcesosJudicialesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "div", 12)(3, "h5", 13);
    \u0275\u0275text(4, "Etapas Judiciales:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "button", 15);
    \u0275\u0275listener("click", function FormProcesosJudicialesComponent_Conditional_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.agregarEtapa());
    });
    \u0275\u0275text(7, "Nueva Etapa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "hr", 16);
    \u0275\u0275repeaterCreate(9, FormProcesosJudicialesComponent_Conditional_12_For_10_Template, 1, 1, "app-form-etapa-row", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.etapas);
  }
}
var _FormProcesosJudicialesComponent = class _FormProcesosJudicialesComponent extends RecordFormComponent {
  constructor(procesoJudicialController, utils, route) {
    super(procesoJudicialController);
    this.procesoJudicialController = procesoJudicialController;
    this.utils = utils;
    this.route = route;
    this.record = {
      nombre: "",
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    };
    this.etapas = [];
  }
  ngOnInit() {
    this.checkIfIsEditing();
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["proceso_id"]) {
        const res = yield this.procesoJudicialController.find(params["proceso_id"], ["etapasJudiciales"]);
        if (res) {
          this.record = res;
          this.etapas = res.etapas_judiciales ?? [];
          this.checkIfIsEditing();
        }
      }
    }));
  }
  agregarEtapa() {
    this.etapas.push({
      nombre: "",
      proceso_judicial_id: this.record.id,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
  }
};
_FormProcesosJudicialesComponent.\u0275fac = function FormProcesosJudicialesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormProcesosJudicialesComponent)(\u0275\u0275directiveInject(ProcesoJudicialService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormProcesosJudicialesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormProcesosJudicialesComponent, selectors: [["app-form-procesos-judiciales"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 4, consts: [[1, "container", "rounded", "shadow", "my-1", "p-3", "bg-white"], [1, "mt-1", "mb-4"], [1, "input-group", "mt-2", "mb-4"], [1, "form-floating"], ["placeholder", "Nombre del Proceso", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "floatingNombreInput"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-floppy-fill"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "container-fluid", "p-3"], [1, "visually-hidden"], [1, "row"], [1, "col"], [1, "mt-4", "mb-2", "fw-bold"], [1, "col-auto", "p-1"], [1, "btn", "btn-success", 3, "click"], [1, "border", "border-primary"], [3, "record"], [3, "onDeleted", "record"]], template: function FormProcesosJudicialesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function FormProcesosJudicialesComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.record.nombre, $event) || (ctx.record.nombre = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 5);
    \u0275\u0275text(8, "Nombre del Proceso:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function FormProcesosJudicialesComponent_Template_button_click_9_listener() {
      return ctx.save();
    });
    \u0275\u0275element(10, "i", 7);
    \u0275\u0275conditionalCreate(11, FormProcesosJudicialesComponent_Conditional_11_Template, 3, 0, "div", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, FormProcesosJudicialesComponent_Conditional_12_Template, 11, 0, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nuevo", " Proceso Judicial");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.record.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isLoading ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.record.id ? 12 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, FormEtapaRowComponent], encapsulation: 2 });
var FormProcesosJudicialesComponent = _FormProcesosJudicialesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormProcesosJudicialesComponent, [{
    type: Component,
    args: [{ selector: "app-form-procesos-judiciales", imports: [
      FormsModule,
      FormEtapaRowComponent
    ], template: `<div class="container rounded shadow my-1 p-3 bg-white">
  <h3 class="mt-1 mb-4"><b>{{edit?'Editar':'Nuevo'}} Proceso Judicial</b></h3>
  <div class="input-group mt-2 mb-4">
    <div class="form-floating">
      <input class="form-control" placeholder="Nombre del Proceso" [(ngModel)]="record.nombre">
      <label for="floatingNombreInput">Nombre del Proceso:</label>
    </div>
    <button class="btn btn-secondary" (click)="save()">
      <i class="bi bi-floppy-fill"></i>
      @if (isLoading) {
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      }
    </button>
  </div>
  @if (record.id) {
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col">
          <h5 class="mt-4 mb-2 fw-bold">Etapas Judiciales:</h5>
        </div>
        <div class="col-auto p-1">
          <button class="btn btn-success" (click)="agregarEtapa()">Nueva Etapa</button>
        </div>
      </div>
      <hr class="border border-primary">
      @for (etapa of etapas; track etapa) {
        <app-form-etapa-row [record]="etapa" (onDeleted)="utils.localDelete(etapas,etapa)" />
      }
    </div>
  }
</div>` }]
  }], () => [{ type: ProcesoJudicialService }, { type: UtilsService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormProcesosJudicialesComponent, { className: "FormProcesosJudicialesComponent", filePath: "src/app/catalogos/procesos-judiciales/form-procesos-judiciales/form-procesos-judiciales.component.ts", lineNumber: 22 });
})();

// src/app/catalogos/procesos-judiciales/procesos.judiciales.routes.ts
var procesosJudicialesRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListProcesosJudicialesComponent },
  { path: "nuevo", component: FormProcesosJudicialesComponent },
  { path: "editar/:proceso_id", component: FormProcesosJudicialesComponent }
];
export {
  procesosJudicialesRoutes
};
//# sourceMappingURL=chunk-66ORDQOJ.js.map
