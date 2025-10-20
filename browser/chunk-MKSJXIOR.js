import {
  SesionService
} from "./chunk-A7VH3SSD.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import "./chunk-I7RPY2ZE.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import {
  ApiServiceService,
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute
} from "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/catalogos/sesiones/list-sesion/list-sesion.component.ts
var _ListSesionComponent = class _ListSesionComponent {
  constructor(sesionController) {
    this.sesionController = sesionController;
  }
};
_ListSesionComponent.\u0275fac = function ListSesionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListSesionComponent)(\u0275\u0275directiveInject(SesionService));
};
_ListSesionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListSesionComponent, selectors: [["app-list-sesion"]], decls: 1, vars: 1, consts: [[3, "controller"]], template: function ListSesionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.sesionController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListSesionComponent = _ListSesionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListSesionComponent, [{
    type: Component,
    args: [{ selector: "app-list-sesion", imports: [
      TablaComponent
    ], template: '<app-tabla \n\n[controller]="sesionController"\n/>' }]
  }], () => [{ type: SesionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListSesionComponent, { className: "ListSesionComponent", filePath: "src/app/catalogos/sesiones/list-sesion/list-sesion.component.ts", lineNumber: 13 });
})();

// src/app/controllers/sesion.documento.service.ts
var _SesionDocumentoService = class _SesionDocumentoService extends SuperService {
  //usuerio_id en backend
  constructor(injector) {
    super(injector);
    this.model = "sesiones_documentos";
    this.columns = [
      "comentario",
      "usuario_id"
    ];
  }
};
_SesionDocumentoService.\u0275fac = function SesionDocumentoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SesionDocumentoService)(\u0275\u0275inject(Injector));
};
_SesionDocumentoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SesionDocumentoService, factory: _SesionDocumentoService.\u0275fac, providedIn: "any" });
var SesionDocumentoService = _SesionDocumentoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SesionDocumentoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/catalogos/sesiones/form-sesion/form-sesion-documento/form-sesion-documento.component.ts
function FormSesionDocumentoComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "Archivo Subido");
    \u0275\u0275elementEnd();
  }
}
function FormSesionDocumentoComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r0.utils.fileUrlInLine(ctx_r0.edit.archivo_url), \u0275\u0275sanitizeUrl);
  }
}
var _FormSesionDocumentoComponent = class _FormSesionDocumentoComponent {
  constructor(api, utils, sesionDocumentoController) {
    this.api = api;
    this.utils = utils;
    this.sesionDocumentoController = sesionDocumentoController;
    this.file = null;
    this.deleted = new EventEmitter();
  }
  appendFile(event) {
    this.file = this.utils.fileFromInputEvent(event);
  }
  submit() {
    return __async(this, null, function* () {
      const data = new FormData();
      data.append("id", this.sesion_id.toString());
      data.append("tipo", this.edit.tipo_documento);
      data.append("comentario", this.edit.comentario);
      if (this.file) {
        data.append("document", this.file);
      }
      if (this.edit.id > 0) {
        data.append("sesiones_documento_id", this.edit.id.toString());
      }
      const res = yield firstValueFrom(this.api.postFormData("api/files/sesiones/documento/save", data));
      if (res.data) {
        this.edit = res.data;
      }
      console.log(res);
    });
  }
  delete() {
    return __async(this, null, function* () {
      if (this.edit.id > 0) {
        const res = yield this.sesionDocumentoController.switch(this.edit.id);
        if (res) {
          this.deleted.emit();
        }
        return;
      }
      this.deleted.emit();
    });
  }
};
_FormSesionDocumentoComponent.\u0275fac = function FormSesionDocumentoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormSesionDocumentoComponent)(\u0275\u0275directiveInject(ApiServiceService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(SesionDocumentoService));
};
_FormSesionDocumentoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormSesionDocumentoComponent, selectors: [["app-form-sesion-documento"]], inputs: { sesion_id: "sesion_id", edit: "edit" }, outputs: { deleted: "deleted" }, decls: 24, vars: 5, consts: [[1, "row", "py-2"], [1, "input-group"], [1, "input-group-text"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [1, "btn", "btn-outline-secondary", 3, "href"], ["placeholder", "Documento...", "type", "file", "accept", ".pdf", 1, "form-control", 3, "change"], [1, "input-group", "mt-1"], ["aria-label", "With textarea", "placeholder", "Ingrese un comentario...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-floppy-fill"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-trash-fill"], [1, "bi", "bi-download"]], template: function FormSesionDocumentoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3, "Tipo Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 3);
    \u0275\u0275twoWayListener("ngModelChange", function FormSesionDocumentoComponent_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit.tipo_documento, $event) || (ctx.edit.tipo_documento = $event);
      return $event;
    });
    \u0275\u0275elementStart(5, "option", 4);
    \u0275\u0275text(6, "Selecciona un tipo de documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option");
    \u0275\u0275text(8, "MINUTA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option");
    \u0275\u0275text(10, "ACUERDO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option");
    \u0275\u0275text(12, "OTRO");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, FormSesionDocumentoComponent_Conditional_13_Template, 2, 0, "span", 2);
    \u0275\u0275conditionalCreate(14, FormSesionDocumentoComponent_Conditional_14_Template, 2, 1, "a", 5);
    \u0275\u0275elementStart(15, "input", 6);
    \u0275\u0275listener("change", function FormSesionDocumentoComponent_Template_input_change_15_listener($event) {
      return ctx.appendFile($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7)(17, "span", 2);
    \u0275\u0275text(18, "Comentario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 8);
    \u0275\u0275twoWayListener("ngModelChange", function FormSesionDocumentoComponent_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit.comentario, $event) || (ctx.edit.comentario = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 9);
    \u0275\u0275listener("click", function FormSesionDocumentoComponent_Template_button_click_20_listener() {
      return ctx.submit();
    });
    \u0275\u0275element(21, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 11);
    \u0275\u0275listener("click", function FormSesionDocumentoComponent_Template_button_click_22_listener() {
      return ctx.delete();
    });
    \u0275\u0275element(23, "i", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.edit.tipo_documento);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.edit.archivo_url ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit.archivo_url ? 14 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.edit.comentario);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var FormSesionDocumentoComponent = _FormSesionDocumentoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSesionDocumentoComponent, [{
    type: Component,
    args: [{ selector: "app-form-sesion-documento", imports: [
      FormsModule
    ], template: '<div class="row py-2">\n  <div class="input-group">\n    <span class="input-group-text">Tipo Documento</span>\n    <select class="form-select" [(ngModel)]="edit.tipo_documento">\n      <option [value]="undefined" disabled>Selecciona un tipo de documento</option>\n      <option >MINUTA</option>\n      <option >ACUERDO</option>\n      <option >OTRO</option>\n    </select>\n    @if (edit.archivo_url) {\n      <span class="input-group-text">Archivo Subido</span>\n    }\n    @if (edit.archivo_url) {\n      <a class="btn btn-outline-secondary"\n        [href]="utils.fileUrlInLine(edit.archivo_url)">\n        <i class="bi bi-download"></i>\n      </a>\n    }\n    <input placeholder="Documento..." class="form-control" type="file" accept=".pdf" (change)="appendFile($event)">\n  </div>\n  <div class="input-group mt-1">\n    <span class="input-group-text">Comentario</span>\n    <textarea class="form-control" aria-label="With textarea" placeholder="Ingrese un comentario..." [(ngModel)]="edit.comentario"></textarea>\n    <button class="btn btn-secondary" (click)="submit()">\n      <i class="bi bi-floppy-fill"></i>\n    </button>\n    <button class="btn btn-danger" (click)="delete()">\n      <i class="bi bi-trash-fill"></i>\n    </button>\n  </div>\n</div>' }]
  }], () => [{ type: ApiServiceService }, { type: UtilsService }, { type: SesionDocumentoService }], { sesion_id: [{
    type: Input
  }], edit: [{
    type: Input
  }], deleted: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormSesionDocumentoComponent, { className: "FormSesionDocumentoComponent", filePath: "src/app/catalogos/sesiones/form-sesion/form-sesion-documento/form-sesion-documento.component.ts", lineNumber: 18 });
})();

// src/app/catalogos/sesiones/form-sesion/form-sesion.component.ts
function FormSesionComponent_Conditional_27_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, " No hay documentos registrados ");
    \u0275\u0275elementEnd();
  }
}
function FormSesionComponent_Conditional_27_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-sesion-documento", 21);
    \u0275\u0275listener("deleted", function FormSesionComponent_Conditional_27_For_11_Template_app_form_sesion_documento_deleted_0_listener() {
      const doc_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDocDeleted(doc_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("sesion_id", ctx_r1.edit.id)("edit", doc_r4);
  }
}
function FormSesionComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "h4")(3, "b");
    \u0275\u0275text(4, "Documentos de sesi\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 15)(6, "button", 16);
    \u0275\u0275listener("click", function FormSesionComponent_Conditional_27_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addDocumento());
    });
    \u0275\u0275element(7, "i", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "hr", 18);
    \u0275\u0275conditionalCreate(9, FormSesionComponent_Conditional_27_Conditional_9_Template, 2, 0, "p", 19);
    \u0275\u0275repeaterCreate(10, FormSesionComponent_Conditional_27_For_11_Template, 1, 2, "app-form-sesion-documento", 20, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275conditional((ctx_r1.edit.sesiones_documentos == null ? null : ctx_r1.edit.sesiones_documentos.length) === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.edit.sesiones_documentos);
  }
}
var _FormSesionComponent = class _FormSesionComponent {
  constructor(sesionController, route, utils) {
    this.sesionController = sesionController;
    this.route = route;
    this.utils = utils;
    this.new = {};
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("sesion_id"));
      if (id) {
        this.edit = yield this.sesionController.find(id, ["sesionesDocumentos"]);
        if (this.edit) {
          this.new = this.edit;
        }
      }
    }));
  }
  submit() {
    return __async(this, null, function* () {
      this.edit = yield this.sesionController.createOrUpdate(this.new);
    });
  }
  addDocumento() {
    if (!this.edit)
      return;
    if (!this.edit?.sesiones_documentos) {
      this.edit.sesiones_documentos = [];
    }
    this.edit?.sesiones_documentos.push({
      sesion_id: 0,
      archivo_url: "",
      formato: "PDF",
      tipo_documento: "MINUTA",
      comentario: "",
      usuario_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
  }
  onDocDeleted(doc) {
    if (!this.edit) {
      return;
    }
    const index = this.edit.sesiones_documentos?.indexOf(doc);
    if (index && index > -1) {
      this.edit.sesiones_documentos?.splice(index, 1);
    }
  }
};
_FormSesionComponent.\u0275fac = function FormSesionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormSesionComponent)(\u0275\u0275directiveInject(SesionService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormSesionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormSesionComponent, selectors: [["app-form-sesion"]], decls: 32, vars: 6, consts: [[1, "container", "my-1", "p-3", "bg-white", "rounded", "shadow"], [1, "mb-2"], [1, "border", "border-primary"], [1, "row"], [1, "col-12", "col-sm-6", "col-md", "p-3"], ["type", "text", "placeholder", "No de sesi\xF3n", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [1, "col-12", "col-sm", "p-3"], ["type", "date", "placeholder", "No de sesi\xF3n", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "px-3", "mt-2", "mb-2"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "mt-4"], [1, "col"], [1, "col-auto"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "bi", "bi-plus-circle-fill"], [1, "border", "border-primary", "mt-0"], [1, "p-3"], [3, "sesion_id", "edit"], [3, "deleted", "sesion_id", "edit"]], template: function FormSesionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "hr", 2);
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "label")(8, "b");
    \u0275\u0275text(9, "No. Sesi\xF3n:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function FormSesionComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.new.sesion, $event) || (ctx.new.sesion = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 4)(12, "label")(13, "b");
    \u0275\u0275text(14, "Tipo de Sesi\xF3n:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function FormSesionComponent_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.new.tipo_sesion, $event) || (ctx.new.tipo_sesion = $event);
      return $event;
    });
    \u0275\u0275elementStart(16, "option", 7);
    \u0275\u0275text(17, "Selecciona una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option");
    \u0275\u0275text(19, "ORDINARIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option");
    \u0275\u0275text(21, "EXTRAORDINARIA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 8)(23, "label")(24, "b");
    \u0275\u0275text(25, "Fecha de Sesi\xF3n:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function FormSesionComponent_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.new.fecha, $event) || (ctx.new.fecha = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(27, FormSesionComponent_Conditional_27_Template, 12, 1);
    \u0275\u0275elementStart(28, "div", 10)(29, "div", 11)(30, "button", 12);
    \u0275\u0275listener("click", function FormSesionComponent_Template_button_click_30_listener() {
      return ctx.submit();
    });
    \u0275\u0275text(31, " Guardar Sesi\xF3n ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nueva", " sesi\xF3n");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.new.sesion);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.new.tipo_sesion);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.new.fecha);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 27 : -1);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, FormSesionDocumentoComponent], encapsulation: 2 });
var FormSesionComponent = _FormSesionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormSesionComponent, [{
    type: Component,
    args: [{ selector: "app-form-sesion", imports: [
      FormsModule,
      FormSesionDocumentoComponent
    ], template: `<div class="container my-1 p-3 bg-white rounded shadow">
  <h4 class="mb-2"><b>{{edit?'Editar':'Nueva'}} sesi\xF3n</b></h4>
  <hr class="border border-primary">
  <div class="row">
    <div class="col-12 col-sm-6 col-md p-3">
      <label><b>No. Sesi\xF3n:</b></label>
      <input class="form-control" type="text" placeholder="No de sesi\xF3n" [(ngModel)]="new.sesion">
    </div>
    <div class="col-12 col-sm-6 col-md p-3">
      <label><b>Tipo de Sesi\xF3n:</b></label>
      <select class="form-select" [(ngModel)]="new.tipo_sesion">
        <option [value]="undefined" disabled>Selecciona una opci\xF3n</option>
        <option>ORDINARIA</option>
        <option>EXTRAORDINARIA</option>
      </select>
    </div>
    <div class="col-12 col-sm p-3">
      <label><b>Fecha de Sesi\xF3n:</b></label>
      <input class="form-control" type="date" placeholder="No de sesi\xF3n" [(ngModel)]="new.fecha">
    </div>
  </div>
  @if (edit) {
    <div class="row mt-4">
      <div class="col"><h4><b>Documentos de sesi\xF3n</b></h4></div>
      <div class="col-auto">
        <button class="btn btn-success btn-sm" (click)="addDocumento()">
          <i class="bi bi-plus-circle-fill"></i>
        </button>
      </div>
    </div>
    <hr class="border border-primary mt-0">
    @if (edit.sesiones_documentos?.length===0) {
      <p class="p-3">
        No hay documentos registrados
      </p>
    }
    @for (doc of edit.sesiones_documentos; track doc) {
      <app-form-sesion-documento
        [sesion_id]="edit.id"
        [edit]="doc"
        (deleted)="onDocDeleted(doc)"
        />
    }
  }

  <div class="row px-3 mt-2 mb-2">
    <div class="col text-center">
      <button class="btn btn-primary" (click)="submit()">
        Guardar Sesi\xF3n
      </button>
    </div>
  </div>
</div>` }]
  }], () => [{ type: SesionService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormSesionComponent, { className: "FormSesionComponent", filePath: "src/app/catalogos/sesiones/form-sesion/form-sesion.component.ts", lineNumber: 22 });
})();

// src/app/catalogos/sesiones/sesiones.routes.ts
var sesionesRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListSesionComponent },
  { path: "nuevo", component: FormSesionComponent },
  { path: "editar/:sesion_id", component: FormSesionComponent }
];
export {
  sesionesRoutes
};
//# sourceMappingURL=chunk-MKSJXIOR.js.map
