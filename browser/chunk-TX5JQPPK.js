import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  MaxLengthValidator,
  MinLengthValidator,
  NgControlStatus,
  NgModel,
  PatternValidator,
  RequiredValidator
} from "./chunk-TBFW4U4H.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";

// src/app/shared/generic-form/simple-field/simple-field.component.ts
var _c0 = ["inputModel"];
function SimpleFieldComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SimpleFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SimpleFieldComponent_Conditional_1_Conditional_2_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r1.style == null ? null : ctx_r1.style.label) ?? (ctx_r1.inputGroup ? "input-group-text" : "fw-bold ps-1"));
    \u0275\u0275classProp("text-s", ctx_r1.sm);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.validator == null ? null : ctx_r1.validator.required) ? 2 : -1);
  }
}
var _SimpleFieldComponent = class _SimpleFieldComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.type = "";
    this.valueChange = new EventEmitter();
    this.sm = false;
    this.validator = {};
    this.style = {
      input: "form-control"
    };
    this.inputGroup = false;
    this.errorFeedback = "";
    this.valid = false;
    this.validChange = new EventEmitter();
    this.invalid = new EventEmitter();
    this.anyChange = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes["value"]) {
      this.setErrorMessage();
      this.validateDate();
      this.valueChange.emit(this.value);
      this.anyChange.emit();
    }
  }
  ngAfterViewInit() {
    this.setDefault();
    this.setErrorMessage();
  }
  validateDate() {
    if (this.type === "date" && this.value && typeof this.value == "string" && this.value.length > 10) {
      this.value = this.value.substring(0, 10);
    }
  }
  setDefault() {
    if (this.defaultValue !== void 0 && this.value == void 0) {
      this.value = this.defaultValue;
    }
  }
  /**
   * Returns true if errorCode exists in input ngModel errors
   * @param {string} errorCode
   * @returns {boolean}
   */
  hasError(errorCode) {
    if (!this.inputModel)
      return false;
    return !!this.inputModel?.errors?.[errorCode];
  }
  setErrorMessage() {
    this.errorFeedback = this.getErrorMessage();
    this.valid = !this.errorFeedback;
    this.validChange.emit(!this.errorFeedback);
    this.anyChange.emit();
  }
  getErrorMessage() {
    if (this.hasError("required") && (this.value === void 0 || this.value === "")) {
      return "El campo " + (this.label ?? "").toLowerCase() + " es obligatorio.";
    }
    if (this.hasError("email")) {
      return "Debe ingresar un correo electr\xF3nico v\xE1lido.";
    }
    if (this.hasError("pattern")) {
      return "El formato no es v\xE1lido.";
    }
    if (this.type === "number") {
      return this.isValidNumber();
    }
    if (this.type == "text" && this.validator?.regex) {
      return this.isValidRegex();
    }
    return "";
  }
  isValidRegex() {
    if (typeof this.value === "string" && this.validator?.regex && typeof this.validator.regex === "string") {
      const regex = new RegExp(this.validator.regex);
      if (!regex.test(this.value.toLowerCase()) && !regex.test(this.value.toUpperCase()))
        return "El formato no es v\xE1lido.";
    }
    return "";
  }
  isValidNumber() {
    if (this.validator && this.value !== void 0 && this.value !== null) {
      if (!this.isNumber(this.value)) {
        return "Ingrese un n\xFAmero v\xE1lido.";
      }
      if (this.validator.min !== void 0 && this.value < this.validator.min) {
        return `El n\xFAmero debe ser mas grande que ${this.validator.min}.`;
      }
      if (this.validator.max !== void 0 && this.value > this.validator.max) {
        return `El n\xFAmero debe ser menor que ${this.validator.max}.`;
      }
    }
    return "";
  }
  isNumber(value) {
    if (this.value == void 0 || this.value === "") {
      return false;
    }
    return !isNaN(parseInt(value?.toString() ?? ""));
  }
};
_SimpleFieldComponent.\u0275fac = function SimpleFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SimpleFieldComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_SimpleFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimpleFieldComponent, selectors: [["app-simple-field"]], viewQuery: function SimpleFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputModel = _t.first);
  }
}, inputs: { label: "label", placeholder: "placeholder", type: "type", value: "value", defaultValue: "defaultValue", sm: "sm", validator: "validator", style: "style", inputGroup: "inputGroup", valid: "valid" }, outputs: { valueChange: "valueChange", validChange: "validChange", invalid: "invalid", anyChange: "anyChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 19, consts: [["inputModel", "ngModel"], [3, "class", "text-s"], [3, "ngModelChange", "blur", "type", "placeholder", "ngModel", "required", "email", "minlength", "maxlength", "pattern", "disabled"], [1, "invalid-feedback"], [1, "fw-bolder", "text-danger"]], template: function SimpleFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, SimpleFieldComponent_Conditional_1_Template, 3, 6, "span", 1);
    \u0275\u0275elementStart(2, "input", 2, 0);
    \u0275\u0275twoWayListener("ngModelChange", function SimpleFieldComponent_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SimpleFieldComponent_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.valueChange.emit(ctx.value));
    })("blur", function SimpleFieldComponent_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setErrorMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inputModel_r3 = \u0275\u0275reference(3);
    \u0275\u0275classMap(ctx.inputGroup ? "input-group" : "col p-0");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.input) ?? "form-control");
    \u0275\u0275classProp("form-control-sm", ctx.sm)("is-invalid", inputModel_r3.touched && (inputModel_r3.invalid || ctx.errorFeedback));
    \u0275\u0275property("type", ctx.type)("placeholder", ctx.placeholder ?? ctx.label ?? "");
    \u0275\u0275twoWayProperty("ngModel", ctx.value);
    \u0275\u0275property("required", !!(ctx.validator == null ? null : ctx.validator.required))("email", !!(ctx.validator == null ? null : ctx.validator.email))("minlength", (ctx.validator == null ? null : ctx.validator.minLength) ?? null)("maxlength", (ctx.validator == null ? null : ctx.validator.maxLength) ?? null)("pattern", (ctx.validator == null ? null : ctx.validator.pattern) ?? "")("disabled", (ctx.validator == null ? null : ctx.validator.disabled) ?? false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.errorFeedback, "\n");
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, EmailValidator, NgModel], encapsulation: 2 });
var SimpleFieldComponent = _SimpleFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleFieldComponent, [{
    type: Component,
    args: [{ selector: "app-simple-field", imports: [
      FormsModule
    ], template: `<div [class]="inputGroup?'input-group':'col p-0'">
  @if (label) {
    <span [class]="style?.label??(inputGroup?'input-group-text':'fw-bold ps-1')" [class.text-s]="sm">
      {{label}}@if (validator?.required) {
      <span class="fw-bolder text-danger">*</span>
    }
  </span>
}
<input [type]="type" [class]="style?.input??'form-control'"
  [class.form-control-sm]="sm"
  [placeholder]="placeholder??label??''"
  [(ngModel)]="value"
  (ngModelChange)="valueChange.emit(value)"
  #inputModel="ngModel"
  [class.is-invalid]="inputModel.touched && (inputModel.invalid || errorFeedback)"
  [required]="!!validator?.required"
  [email]="!!validator?.email"
  [minlength]="validator?.minLength??null"
  [maxlength]="validator?.maxLength??null"
  [pattern]="validator?.pattern??''"
  [disabled]="validator?.disabled??false"
  (blur)="setErrorMessage()">
<div class="invalid-feedback">
  {{errorFeedback}}
</div>
</div>` }]
  }], () => [{ type: ChangeDetectorRef }], { label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], type: [{
    type: Input
  }], value: [{
    type: Input
  }], valueChange: [{
    type: Output
  }], defaultValue: [{
    type: Input
  }], sm: [{
    type: Input
  }], validator: [{
    type: Input
  }], style: [{
    type: Input
  }], inputGroup: [{
    type: Input
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }], inputModel: [{
    type: ViewChild,
    args: ["inputModel"]
  }], invalid: [{
    type: Output
  }], anyChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimpleFieldComponent, { className: "SimpleFieldComponent", filePath: "src/app/shared/generic-form/simple-field/simple-field.component.ts", lineNumber: 15 });
})();

export {
  SimpleFieldComponent
};
//# sourceMappingURL=chunk-TX5JQPPK.js.map
