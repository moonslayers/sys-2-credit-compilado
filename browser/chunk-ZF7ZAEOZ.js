import {
  SimpleFieldComponent
} from "./chunk-TX5JQPPK.js";
import {
  SelectFieldComponent
} from "./chunk-XRNE7EBS.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import {
  Popover
} from "./chunk-M5W5QKXE.js";
import {
  FormsModule
} from "./chunk-TBFW4U4H.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";

// src/app/shared/generic-form/form-field/field-types.service.ts
var _FieldTypesService = class _FieldTypesService {
  constructor() {
  }
  isSimpleField(field) {
    const tryField = field;
    return tryField.type !== void 0 && tryField.type !== "boolean";
  }
  isAutoCompleteField(field) {
    return field.apiUrl !== void 0 && field.keyList !== void 0;
  }
  isSelectField(field) {
    return field.options !== void 0;
  }
  isBasicInput(field) {
    return field.key !== void 0;
  }
  isCheckboxField(field) {
    return field.type === "boolean";
  }
  isFormField(field) {
    return field.key !== void 0;
  }
  isFormGroup(field) {
    return field.fields !== void 0;
  }
  isDinamicGroupField(field) {
    return field.baseFields !== void 0;
  }
  isOrderableList(field) {
    return field.orderableList !== void 0;
  }
  isMapField(field) {
    return field.latitud !== void 0;
  }
  isFileInput(field) {
    return field.apiUrl !== void 0 && field.accept !== void 0;
  }
  getFormFieldByKey(form, key) {
    for (const field of form) {
      if (this.isFormField(field) && field.key === key) {
        return field;
      }
      if (this.isFormGroup(field)) {
        for (const innerField of field.fields) {
          if (innerField.key === key) {
            return innerField;
          }
        }
      }
    }
    return null;
  }
};
_FieldTypesService.\u0275fac = function FieldTypesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FieldTypesService)();
};
_FieldTypesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FieldTypesService, factory: _FieldTypesService.\u0275fac, providedIn: "any" });
var FieldTypesService = _FieldTypesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldTypesService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [], null);
})();

// src/app/shared/button/button.component.ts
var _c0 = ["button"];
function ButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r1.style == null ? null : ctx_r1.style.icon) ?? ctx_r1.defaultIconClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.text, " ");
  }
}
function ButtonComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.text, " ");
  }
}
function ButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ButtonComponent_Conditional_3_Conditional_0_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!(ctx_r1.style == null ? null : ctx_r1.style.icon) ? 0 : -1);
  }
}
var _ButtonComponent = class _ButtonComponent {
  constructor() {
    this.disabled = false;
    this.defaultButtonClass = "btn btn-primary";
    this.sm = false;
    this.clickButtonEvent = new EventEmitter();
  }
  ngAfterViewInit() {
    this.popover = new Popover(this.button.nativeElement);
  }
  ngOnDestroy() {
    this.popover?.hide();
  }
};
_ButtonComponent.\u0275fac = function ButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ButtonComponent)();
};
_ButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonComponent, selectors: [["app-button"]], viewQuery: function ButtonComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.button = _t.first);
  }
}, inputs: { style: "style", text: "text", disabled: "disabled", defaultButtonClass: "defaultButtonClass", defaultIconClass: "defaultIconClass", title: "title", sm: "sm" }, outputs: { clickButtonEvent: "clickButtonEvent" }, decls: 4, vars: 7, consts: [["button", ""], ["type", "button", "data-bs-toggle", "popover", "data-bs-custom-class", "custom-popover", "data-bs-trigger", "hover", 3, "click", "disabled"], [3, "class"]], template: function ButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1, 0);
    \u0275\u0275listener("click", function ButtonComponent_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clickButtonEvent.emit());
    });
    \u0275\u0275conditionalCreate(2, ButtonComponent_Conditional_2_Template, 2, 3, "i", 2)(3, ButtonComponent_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.button) ?? ctx.defaultButtonClass);
    \u0275\u0275classProp("btn-sm", ctx.sm);
    \u0275\u0275property("disabled", ctx.disabled);
    \u0275\u0275attribute("data-bs-content", ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx.style == null ? null : ctx.style.icon) || ctx.defaultIconClass ? 2 : 3);
  }
}, styles: ["\n\n.custom-popover[_ngcontent-%COMP%] {\n  --bs-popover-border-color: var(--secondary);\n  --bs-popover-header-bg: var(--primary);\n  --bs-popover-header-color: var(--bs-white);\n}\n/*# sourceMappingURL=button.component.css.map */"] });
var ButtonComponent = _ButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{ selector: "app-button", imports: [], template: '<button\n  #button\n  [class]="style?.button??defaultButtonClass"\n  type="button"\n  [disabled]="disabled"\n  (click)="clickButtonEvent.emit()"\n  data-bs-toggle="popover"\n  data-bs-custom-class="custom-popover"\n  [attr.data-bs-content]="title"\n  [class.btn-sm]="sm"\n  data-bs-trigger="hover">\n  @if (style?.icon || defaultIconClass) {\n    <i [class]="style?.icon??defaultIconClass">\n      {{text}}\n    </i>\n  } @else {\n    @if (!style?.icon) {\n      <span>\n        {{text}}\n      </span>\n    }\n  }\n</button>\n', styles: ["/* src/app/shared/button/button.component.css */\n.custom-popover {\n  --bs-popover-border-color: var(--secondary);\n  --bs-popover-header-bg: var(--primary);\n  --bs-popover-header-color: var(--bs-white);\n}\n/*# sourceMappingURL=button.component.css.map */\n"] }]
  }], null, { style: [{
    type: Input
  }], text: [{
    type: Input
  }], disabled: [{
    type: Input
  }], defaultButtonClass: [{
    type: Input
  }], defaultIconClass: [{
    type: Input
  }], title: [{
    type: Input
  }], sm: [{
    type: Input
  }], clickButtonEvent: [{
    type: Output
  }], button: [{
    type: ViewChild,
    args: ["button"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonComponent, { className: "ButtonComponent", filePath: "src/app/shared/button/button.component.ts", lineNumber: 22 });
})();

// src/app/shared/generic-form/checkbox-field/checkbox-field.component.ts
var _CheckboxFieldComponent = class _CheckboxFieldComponent {
  constructor() {
    this.type = "checkbox";
    this.valueChange = new EventEmitter();
    this.anyChange = new EventEmitter();
    this.valid = true;
    this.validChange = new EventEmitter();
    this.asYesOrNo = false;
    this.defaultClass = "col-auto px-3 pt-3";
  }
  ngOnInit() {
    if (this.type === void 0) {
      this.type = "checkbox";
    }
    this.setDefault();
    this.setIsValid();
  }
  onInputChange(event) {
    const value = event.target.checked;
    this.setValue(value);
    this.valueChange.emit(this.value);
    this.anyChange.emit();
  }
  setValue(value) {
    if (this.asYesOrNo == true) {
      this.value = value ? "SI" : "NO";
      return;
    }
    this.value = value;
  }
  setDefault() {
    if (this.defaultValue !== void 0 && this.value === void 0) {
      this.setValue(true);
    }
    if (this.value === void 0) {
      this.setValue(false);
    }
    this.valueChange.emit(this.value);
    this.anyChange.emit();
  }
  asBoolean() {
    return this.value == "SI" ? true : false;
  }
  setIsValid() {
    this.valid = true;
    this.validChange.emit(true);
    this.anyChange.emit();
  }
};
_CheckboxFieldComponent.\u0275fac = function CheckboxFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CheckboxFieldComponent)();
};
_CheckboxFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckboxFieldComponent, selectors: [["app-checkbox-field"]], inputs: { style: "style", validator: "validator", type: "type", key: "key", label: "label", value: "value", defaultValue: "defaultValue", valid: "valid", asYesOrNo: "asYesOrNo" }, outputs: { valueChange: "valueChange", anyChange: "anyChange", validChange: "validChange" }, decls: 5, vars: 15, consts: [[1, "form-check"], ["name", "flexCheck", "role", "switch", 3, "change", "id", "type", "disabled", "checked"], [3, "for"]], template: function CheckboxFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "input", 1);
    \u0275\u0275listener("change", function CheckboxFieldComponent_Template_input_change_2_listener($event) {
      return ctx.onInputChange($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.checkboxDiv) ?? ctx.defaultClass);
    \u0275\u0275advance();
    \u0275\u0275classProp("form-switch", ctx.type === "switch");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.input) ?? "form-check-input bg-secondary");
    \u0275\u0275property("id", ctx.key)("type", ctx.type)("disabled", !!(ctx.validator == null ? null : ctx.validator.disabled))("disabled", (ctx.validator == null ? null : ctx.validator.disabled) ?? false)("checked", ctx.asBoolean());
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.label) ?? "form-check-label");
    \u0275\u0275property("for", ctx.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.label, " ");
  }
}, dependencies: [FormsModule], encapsulation: 2 });
var CheckboxFieldComponent = _CheckboxFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxFieldComponent, [{
    type: Component,
    args: [{ selector: "app-checkbox-field", imports: [
      FormsModule
    ], template: `
<div [class]="style?.checkboxDiv??defaultClass">
    <div class="form-check" [class.form-switch]="type==='switch'">
        <input [class]="style?.input??'form-check-input bg-secondary'" name="flexCheck" role="switch" [id]="key"
        [type]="type"
        [disabled]="!!validator?.disabled"
        (change)="onInputChange($event)"
        [disabled]="validator?.disabled??false"
        [checked]="asBoolean()"
        >
        <label [class]="style?.label??'form-check-label'" [for]="key">
          {{label}}
        </label>
    </div>
</div>` }]
  }], null, { style: [{
    type: Input
  }], validator: [{
    type: Input
  }], type: [{
    type: Input
  }], key: [{
    type: Input
  }], label: [{
    type: Input
  }], value: [{
    type: Input
  }], defaultValue: [{
    type: Input
  }], valueChange: [{
    type: Output
  }], anyChange: [{
    type: Output
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }], asYesOrNo: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckboxFieldComponent, { className: "CheckboxFieldComponent", filePath: "src/app/shared/generic-form/checkbox-field/checkbox-field.component.ts", lineNumber: 14 });
})();

// src/app/shared/generic-form/form-field/form-field.component.ts
function FormFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-simple-field", 4);
    \u0275\u0275twoWayListener("valueChange", function FormFieldComponent_Conditional_0_Template_app_simple_field_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.field.value, $event) || (ctx_r1.field.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("anyChange", function FormFieldComponent_Conditional_0_Template_app_simple_field_anyChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldChange.emit(ctx_r1.field));
    });
    \u0275\u0275twoWayListener("validChange", function FormFieldComponent_Conditional_0_Template_app_simple_field_validChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.field.valid, $event) || (ctx_r1.field.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("validChange", function FormFieldComponent_Conditional_0_Template_app_simple_field_validChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cdr.detectChanges());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("type", ctx_r1.field.type)("label", ctx_r1.field.label);
    \u0275\u0275twoWayProperty("value", ctx_r1.field.value);
    \u0275\u0275property("placeholder", ctx_r1.field.placeholder)("validator", ctx_r1.field.validator);
    \u0275\u0275twoWayProperty("valid", ctx_r1.field.valid);
    \u0275\u0275property("defaultValue", ctx_r1.field.defaultValue)("sm", ctx_r1.sm)("inputGroup", ctx_r1.field.inputGroup);
  }
}
function FormFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-select-field", 5);
    \u0275\u0275twoWayListener("valueChange", function FormFieldComponent_Conditional_1_Template_app_select_field_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.field.value, $event) || (ctx_r1.field.value = $event);
      return \u0275\u0275resetView($event);
    })("validChange", function FormFieldComponent_Conditional_1_Template_app_select_field_validChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.field.valid, $event) || (ctx_r1.field.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("validChange", function FormFieldComponent_Conditional_1_Template_app_select_field_validChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cdr.detectChanges());
    })("anyChange", function FormFieldComponent_Conditional_1_Template_app_select_field_anyChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldChange.emit(ctx_r1.field));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.field.style);
    \u0275\u0275property("label", ctx_r1.field.label);
    \u0275\u0275twoWayProperty("value", ctx_r1.field.value);
    \u0275\u0275property("useAutocomplete", ctx_r1.field.useAutoComplete)("sm", ctx_r1.sm);
    \u0275\u0275twoWayProperty("valid", ctx_r1.field.valid);
    \u0275\u0275property("options", ctx_r1.field.options)("validator", ctx_r1.field.validator)("defaultOption", ctx_r1.field.defaultOption)("inputGroup", ctx_r1.field.inputGroup);
  }
}
function FormFieldComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-checkbox-field", 6);
    \u0275\u0275twoWayListener("valueChange", function FormFieldComponent_Conditional_2_Template_app_checkbox_field_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.field.value, $event) || (ctx_r1.field.value = $event);
      return \u0275\u0275resetView($event);
    })("validChange", function FormFieldComponent_Conditional_2_Template_app_checkbox_field_validChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.field.valid, $event) || (ctx_r1.field.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("validChange", function FormFieldComponent_Conditional_2_Template_app_checkbox_field_validChange_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cdr.detectChanges());
    })("anyChange", function FormFieldComponent_Conditional_2_Template_app_checkbox_field_anyChange_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldChange.emit(ctx_r1.field));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.field.style);
    \u0275\u0275property("label", ctx_r1.field.label)("key", ctx_r1.field.key)("type", ctx_r1.field.checkBoxType);
    \u0275\u0275twoWayProperty("value", ctx_r1.field.value);
    \u0275\u0275property("defaultValue", ctx_r1.field.defaultValue);
    \u0275\u0275twoWayProperty("valid", ctx_r1.field.valid);
    \u0275\u0275property("asYesOrNo", ctx_r1.field.asYesOrNo);
  }
}
function FormFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-autocomplete-field", 7);
    \u0275\u0275twoWayListener("validChange", function FormFieldComponent_Conditional_3_Template_app_autocomplete_field_validChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.field.valid, $event) || (ctx_r1.field.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("validChange", function FormFieldComponent_Conditional_3_Template_app_autocomplete_field_validChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldChange.emit(ctx_r1.field));
    })("validChange", function FormFieldComponent_Conditional_3_Template_app_autocomplete_field_validChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cdr.detectChanges());
    });
    \u0275\u0275twoWayListener("valueChange", function FormFieldComponent_Conditional_3_Template_app_autocomplete_field_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.field.value, $event) || (ctx_r1.field.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("anyChange", function FormFieldComponent_Conditional_3_Template_app_autocomplete_field_anyChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldChange.emit(ctx_r1.field));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("valid", ctx_r1.field.valid)("value", ctx_r1.field.value);
    \u0275\u0275property("sm", ctx_r1.sm)("placeholder", ctx_r1.field.placeholder)("label", ctx_r1.field.label)("nuevoRedirect", ctx_r1.field.nuevoRedirect)("apiUrl", ctx_r1.field.apiUrl)("keyList", ctx_r1.field.keyList)("keyDetalle", ctx_r1.field.keyDetalle)("keyListDetalle", ctx_r1.field.keyListDetalle)("validator", ctx_r1.field.validator)("inputGroup", ctx_r1.field.inputGroup)("function", ctx_r1.field.function)("extraData", ctx_r1.field.extraData);
  }
}
var _FormFieldComponent = class _FormFieldComponent {
  constructor(fieldTypes, cdr) {
    this.fieldTypes = fieldTypes;
    this.cdr = cdr;
    this.fieldChange = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.sm = false;
    this.defaultInputDivClass = "col-12 col-sm-6 col-md-4 p-3";
    this.defaultCheckBoxDivClass = "col-12 col-sm-6 col-md-4 px-4";
  }
};
_FormFieldComponent.\u0275fac = function FormFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormFieldComponent)(\u0275\u0275directiveInject(FieldTypesService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_FormFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFieldComponent, selectors: [["app-form-field"]], inputs: { field: "field", sm: "sm", defaultInputDivClass: "defaultInputDivClass", defaultCheckBoxDivClass: "defaultCheckBoxDivClass" }, outputs: { fieldChange: "fieldChange", valueChange: "valueChange" }, decls: 4, vars: 4, consts: [[3, "type", "label", "value", "placeholder", "validator", "valid", "defaultValue", "sm", "inputGroup"], [3, "label", "value", "useAutocomplete", "sm", "valid", "style", "options", "validator", "defaultOption", "inputGroup"], [3, "label", "key", "type", "style", "value", "defaultValue", "valid", "asYesOrNo"], [3, "valid", "value", "sm", "placeholder", "label", "nuevoRedirect", "apiUrl", "keyList", "keyDetalle", "keyListDetalle", "validator", "inputGroup", "function", "extraData"], [3, "valueChange", "anyChange", "validChange", "type", "label", "value", "placeholder", "validator", "valid", "defaultValue", "sm", "inputGroup"], [3, "valueChange", "validChange", "anyChange", "label", "value", "useAutocomplete", "sm", "valid", "options", "validator", "defaultOption", "inputGroup"], [3, "valueChange", "validChange", "anyChange", "label", "key", "type", "value", "defaultValue", "valid", "asYesOrNo"], [3, "validChange", "valueChange", "anyChange", "valid", "value", "sm", "placeholder", "label", "nuevoRedirect", "apiUrl", "keyList", "keyDetalle", "keyListDetalle", "validator", "inputGroup", "function", "extraData"]], template: function FormFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormFieldComponent_Conditional_0_Template, 1, 9, "app-simple-field", 0);
    \u0275\u0275conditionalCreate(1, FormFieldComponent_Conditional_1_Template, 1, 11, "app-select-field", 1);
    \u0275\u0275conditionalCreate(2, FormFieldComponent_Conditional_2_Template, 1, 9, "app-checkbox-field", 2);
    \u0275\u0275conditionalCreate(3, FormFieldComponent_Conditional_3_Template, 1, 14, "app-autocomplete-field", 3);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.fieldTypes.isSimpleField(ctx.field) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.fieldTypes.isSelectField(ctx.field) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.fieldTypes.isCheckboxField(ctx.field) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.fieldTypes.isAutoCompleteField(ctx.field) ? 3 : -1);
  }
}, dependencies: [
  SimpleFieldComponent,
  SelectFieldComponent,
  CheckboxFieldComponent,
  AutocompleteFieldComponent
], encapsulation: 2 });
var FormFieldComponent = _FormFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldComponent, [{
    type: Component,
    args: [{ selector: "app-form-field", imports: [
      SimpleFieldComponent,
      SelectFieldComponent,
      CheckboxFieldComponent,
      AutocompleteFieldComponent
    ], template: '@if (fieldTypes.isSimpleField(field)) {\n  <app-simple-field\n    [type]="field.type"\n    [label]="field.label"\n    [(value)]="field.value"\n    (anyChange)="fieldChange.emit(field)"\n    [placeholder]="field.placeholder"\n    [validator]="field.validator"\n    [(valid)]="field.valid"\n    (validChange)="cdr.detectChanges()"\n    [defaultValue]="field.defaultValue"\n    [sm]="sm"\n    [inputGroup]="field.inputGroup"\n    />\n}\n@if (fieldTypes.isSelectField(field)) {\n  <app-select-field\n    [label]="field.label"\n    [(value)]="field.value"\n    [useAutocomplete]="field.useAutoComplete"\n    [sm]="sm"\n    [(valid)]="field.valid"\n    [style]="field.style"\n    (validChange)="cdr.detectChanges()"\n    (anyChange)="fieldChange.emit(field)"\n    [options]="field.options"\n    [validator]="field.validator"\n    [defaultOption]="field.defaultOption"\n    [inputGroup]="field.inputGroup"\n    />\n}\n@if (fieldTypes.isCheckboxField(field)) {\n  <app-checkbox-field\n    [label]="field.label"\n    [key]="field.key"\n    [type]="field.checkBoxType"\n    [style]="field.style"\n    [(value)]="field.value"\n    [defaultValue]="field.defaultValue"\n    [(valid)]="field.valid"\n    (validChange)="cdr.detectChanges()"\n    (anyChange)="fieldChange.emit(field)"\n    [asYesOrNo]="field.asYesOrNo"\n    />\n}\n@if (fieldTypes.isAutoCompleteField(field)) {\n  <app-autocomplete-field\n    [(valid)]="field.valid"\n    (validChange)="fieldChange.emit(field)"\n    (validChange)="cdr.detectChanges()"\n    [(value)]="field.value"\n    [sm]="sm"\n    [placeholder]="field.placeholder"\n    [label]="field.label"\n    [nuevoRedirect]="field.nuevoRedirect"\n    [apiUrl]="field.apiUrl"\n    [keyList]="field.keyList"\n    [keyDetalle]="field.keyDetalle"\n    [keyListDetalle]="field.keyListDetalle"\n    [validator]="field.validator"\n    (anyChange)="fieldChange.emit(field)"\n    [inputGroup]="field.inputGroup"\n    [function]="field.function"\n    [extraData]="field.extraData"\n    />\n}' }]
  }], () => [{ type: FieldTypesService }, { type: ChangeDetectorRef }], { field: [{
    type: Input
  }], fieldChange: [{
    type: Output
  }], valueChange: [{
    type: Output
  }], sm: [{
    type: Input
  }], defaultInputDivClass: [{
    type: Input
  }], defaultCheckBoxDivClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFieldComponent, { className: "FormFieldComponent", filePath: "src/app/shared/generic-form/form-field/form-field.component.ts", lineNumber: 87 });
})();

export {
  ButtonComponent,
  FieldTypesService,
  FormFieldComponent
};
//# sourceMappingURL=chunk-ZF7ZAEOZ.js.map
