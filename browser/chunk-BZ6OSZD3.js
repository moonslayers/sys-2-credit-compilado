import {
  SuperService
} from "./chunk-7VPVFOGJ.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/shared/record-form/record-form.component.ts
var _RecordFormComponent = class _RecordFormComponent {
  constructor(controller) {
    this.controller = controller;
    this.onEditing = new EventEmitter();
    this.onSaved = new EventEmitter();
    this.onDeleted = new EventEmitter();
    this.edit = false;
    this.isLoading = false;
    this.isDeleting = false;
  }
  ngOnInit() {
    this.checkIfIsEditing();
  }
  checkIfIsEditing() {
    if (!this.record.id) {
      this.edit = true;
    }
  }
  save() {
    return __async(this, null, function* () {
      this.isLoading = true;
      const res = yield this.controller.createOrUpdate(this.record);
      if (res) {
        this.record.id = res.id;
        yield this.afterSaved();
        this.onSaved.emit();
      }
      this.edit = false;
      this.isLoading = false;
    });
  }
  afterSaved() {
    return __async(this, null, function* () {
    });
  }
  afterSavedLocal() {
  }
  delete() {
    return __async(this, null, function* () {
      this.isDeleting = true;
      if (!this.record.id) {
        this.onDeleted.emit();
        return;
      }
      const res = yield this.controller.switch(this.record, void 0, false);
      if (res) {
        this.onDeleted.emit();
      }
      this.isDeleting = false;
    });
  }
};
_RecordFormComponent.\u0275fac = function RecordFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecordFormComponent)(\u0275\u0275directiveInject(SuperService));
};
_RecordFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecordFormComponent, selectors: [["app-record-form"]], inputs: { record: "record" }, outputs: { onEditing: "onEditing", onSaved: "onSaved", onDeleted: "onDeleted" }, decls: 2, vars: 0, template: function RecordFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "record-form works!");
    \u0275\u0275elementEnd();
  }
}, encapsulation: 2 });
var RecordFormComponent = _RecordFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecordFormComponent, [{
    type: Component,
    args: [{ selector: "app-record-form", imports: [], template: "<p>record-form works!</p>\n" }]
  }], () => [{ type: SuperService }], { record: [{
    type: Input
  }], onEditing: [{
    type: Output
  }], onSaved: [{
    type: Output
  }], onDeleted: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecordFormComponent, { className: "RecordFormComponent", filePath: "src/app/shared/record-form/record-form.component.ts", lineNumber: 11 });
})();

// src/app/shared/record-form/record-form-buttons/record-form-buttons.component.ts
var _c0 = ["*"];
function RecordFormButtonsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function RecordFormButtonsComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editChange.emit(true));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementEnd();
  }
}
function RecordFormButtonsComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
}
function RecordFormButtonsComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function RecordFormButtonsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function RecordFormButtonsComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaveButtonClick.emit());
    });
    \u0275\u0275conditionalCreate(1, RecordFormButtonsComponent_Conditional_2_Conditional_1_Template, 1, 0, "span", 3);
    \u0275\u0275conditionalCreate(2, RecordFormButtonsComponent_Conditional_2_Conditional_2_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isSaveDisabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLoading ? 2 : -1);
  }
}
function RecordFormButtonsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
}
function RecordFormButtonsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 4);
  }
}
var _RecordFormButtonsComponent = class _RecordFormButtonsComponent {
  constructor() {
    this.edit = false;
    this.editChange = new EventEmitter();
    this.isLoading = false;
    this.isDeleting = false;
    this.showSaveButton = true;
    this.showEditButton = true;
    this.onSaveButtonClick = new EventEmitter();
    this.onDeleteButtonClick = new EventEmitter();
    this.isSaveDisabled = false;
  }
};
_RecordFormButtonsComponent.\u0275fac = function RecordFormButtonsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecordFormButtonsComponent)();
};
_RecordFormButtonsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecordFormButtonsComponent, selectors: [["record-form-buttons"]], inputs: { edit: "edit", isLoading: "isLoading", isDeleting: "isDeleting", showSaveButton: "showSaveButton", showEditButton: "showEditButton", isSaveDisabled: "isSaveDisabled" }, outputs: { editChange: "editChange", onSaveButtonClick: "onSaveButtonClick", onDeleteButtonClick: "onDeleteButtonClick" }, ngContentSelectors: _c0, decls: 6, vars: 4, consts: [[1, "btn", "btn-primary", "mx-1"], [1, "btn", "btn-primary", "mx-1", 3, "disabled"], [1, "btn", "btn-danger", "mx-1", 3, "click"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-trash-fill"], [1, "btn", "btn-primary", "mx-1", 3, "click"], [1, "bi", "bi-pencil-fill"], [1, "btn", "btn-primary", "mx-1", 3, "click", "disabled"], [1, "bi", "bi-floppy-fill"]], template: function RecordFormButtonsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
    \u0275\u0275conditionalCreate(1, RecordFormButtonsComponent_Conditional_1_Template, 2, 0, "button", 0);
    \u0275\u0275conditionalCreate(2, RecordFormButtonsComponent_Conditional_2_Template, 3, 3, "button", 1);
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function RecordFormButtonsComponent_Template_button_click_3_listener() {
      return ctx.onDeleteButtonClick.emit();
    });
    \u0275\u0275conditionalCreate(4, RecordFormButtonsComponent_Conditional_4_Template, 1, 0, "span", 3);
    \u0275\u0275conditionalCreate(5, RecordFormButtonsComponent_Conditional_5_Template, 1, 0, "i", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.edit && ctx.showEditButton ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showSaveButton && ctx.edit ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isDeleting ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isDeleting ? 5 : -1);
  }
}, encapsulation: 2 });
var RecordFormButtonsComponent = _RecordFormButtonsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecordFormButtonsComponent, [{
    type: Component,
    args: [{ selector: "record-form-buttons", imports: [], template: '<ng-content></ng-content>\n@if (!edit && showEditButton) {\n  <button class="btn btn-primary mx-1" (click)="editChange.emit(true)">\n    <i class="bi bi-pencil-fill"></i>\n  </button>\n}\n@if (showSaveButton && edit) {\n  <button class="btn btn-primary mx-1" [disabled]="isSaveDisabled" (click)="onSaveButtonClick.emit()">\n    @if (isLoading) {\n      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>\n    }\n    @if (!isLoading) {\n      <i class="bi bi-floppy-fill"></i>\n    }\n  </button>\n}\n<button class="btn btn-danger mx-1" (click)="onDeleteButtonClick.emit()">\n  @if (isDeleting) {\n    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>\n  }\n  @if (!isDeleting) {\n    <i class="bi bi-trash-fill"></i>\n  }\n</button>' }]
  }], null, { edit: [{
    type: Input
  }], editChange: [{
    type: Output
  }], isLoading: [{
    type: Input
  }], isDeleting: [{
    type: Input
  }], showSaveButton: [{
    type: Input
  }], showEditButton: [{
    type: Input
  }], onSaveButtonClick: [{
    type: Output
  }], onDeleteButtonClick: [{
    type: Output
  }], isSaveDisabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecordFormButtonsComponent, { className: "RecordFormButtonsComponent", filePath: "src/app/shared/record-form/record-form-buttons/record-form-buttons.component.ts", lineNumber: 10 });
})();

export {
  RecordFormComponent,
  RecordFormButtonsComponent
};
//# sourceMappingURL=chunk-BZ6OSZD3.js.map
