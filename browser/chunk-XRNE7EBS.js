import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";

// src/app/shared/generic-form/select-field/select-field.component.ts
var _c0 = ["selectModel"];
function SelectFieldComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function SelectFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, SelectFieldComponent_Conditional_1_Conditional_2_Template, 2, 0, "span", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.style == null ? null : ctx_r0.style.label) ?? (ctx_r0.inputGroup ? "input-group-text" : "fw-bold ps-1"));
    \u0275\u0275classProp("text-s", ctx_r0.sm);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.validator == null ? null : ctx_r0.validator.required) ? 2 : -1);
  }
}
function SelectFieldComponent_Conditional_2_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r3.label);
  }
}
function SelectFieldComponent_Conditional_2_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r3);
  }
}
function SelectFieldComponent_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SelectFieldComponent_Conditional_2_For_5_Conditional_0_Template, 2, 2, "option", 8);
    \u0275\u0275conditionalCreate(1, SelectFieldComponent_Conditional_2_For_5_Conditional_1_Template, 2, 1, "option");
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.isSelectItem(option_r3) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isString(option_r3) ? 1 : -1);
  }
}
function SelectFieldComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6, 0);
    \u0275\u0275twoWayListener("ngModelChange", function SelectFieldComponent_Conditional_2_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.value, $event) || (ctx_r0.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SelectFieldComponent_Conditional_2_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.valueChange.emit($event));
    });
    \u0275\u0275elementStart(2, "option", 7);
    \u0275\u0275text(3, "Selecciona una opcion");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, SelectFieldComponent_Conditional_2_For_5_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selectModel_r4 = \u0275\u0275reference(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.style == null ? null : ctx_r0.style.input) ?? "form-control form-select");
    \u0275\u0275classProp("form-select-sm", ctx_r0.sm)("is-invalid", selectModel_r4.touched && selectModel_r4.invalid);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.value);
    \u0275\u0275property("required", !!(ctx_r0.validator == null ? null : ctx_r0.validator.required))("disabled", (ctx_r0.validator == null ? null : ctx_r0.validator.disabled) ?? false);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.options);
  }
}
function SelectFieldComponent_Conditional_3_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function SelectFieldComponent_Conditional_3_Conditional_2_For_2_Template_button_click_0_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectFilteredItem(item_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7, " ");
  }
}
function SelectFieldComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, SelectFieldComponent_Conditional_3_Conditional_2_For_2_Template, 2, 1, "button", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredData);
  }
}
function SelectFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 9, 0);
    \u0275\u0275twoWayListener("ngModelChange", function SelectFieldComponent_Conditional_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.value, $event) || (ctx_r0.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SelectFieldComponent_Conditional_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.valueChange.emit($event));
    })("ngModelChange", function SelectFieldComponent_Conditional_3_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterData());
    })("click", function SelectFieldComponent_Conditional_3_Template_input_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleOptions());
    })("focus", function SelectFieldComponent_Conditional_3_Template_input_focus_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterData());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, SelectFieldComponent_Conditional_3_Conditional_2_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const selectModel_r8 = \u0275\u0275reference(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.style == null ? null : ctx_r0.style.input) ?? "form-control");
    \u0275\u0275classProp("form-select-sm", ctx_r0.sm)("is-invalid", selectModel_r8.touched && selectModel_r8.invalid);
    \u0275\u0275property("placeholder", ctx_r0.placeholder ?? ctx_r0.label);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.value);
    \u0275\u0275property("required", !!(ctx_r0.validator == null ? null : ctx_r0.validator.required))("disabled", (ctx_r0.validator == null ? null : ctx_r0.validator.disabled) ?? false);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showOptions && ctx_r0.filteredData.length > 0 ? 2 : -1);
  }
}
var _SelectFieldComponent = class _SelectFieldComponent {
  constructor() {
    this.label = "";
    this.placeholder = null;
    this.valueChange = new EventEmitter();
    this.validator = {};
    this.sm = false;
    this.options = [];
    this.valid = false;
    this.validChange = new EventEmitter();
    this.anyChange = new EventEmitter();
    this.inputGroup = false;
    this.errorFeedback = "";
    this.filteredData = [];
    this.showOptions = false;
  }
  /**
   * Inicialización del componente
   */
  ngOnInit() {
  }
  /**
   * Maneja cambios en los inputs
   * @param changes - Objeto con los cambios detectados
   */
  ngOnChanges(changes) {
    if (changes["value"]) {
      this.setErrorMessage();
    }
  }
  /**
   * Configuración después de la inicialización de la vista
   */
  ngAfterViewInit() {
    this.setDefault();
    this.setIsValid();
  }
  /**
   * Establece el valor por defecto si no hay valor actual
   */
  setDefault() {
    if (this.defaultOption && !this.value) {
      this.options.forEach((option) => {
        if (this.isSelectItem(option) && option.label == this.defaultOption) {
          this.value = option.value;
          this.updateValue();
        }
        if (this.isString(option) && option == this.defaultOption) {
          this.value = this.defaultOption;
          this.updateValue();
        }
      });
    }
    if (this.value === null) {
      this.value = void 0;
      this.updateValue();
    }
  }
  /**
   * Emite el evento de cambio de valor
   */
  updateValue() {
    this.valueChange.emit(this.value);
    this.anyChange.emit();
  }
  /**
   * Actualiza el estado de validación
   */
  setIsValid() {
    if (!this.selectModel)
      return;
    this.valid = !this.getErrorMessage();
    this.validChange.emit(this.valid);
    this.anyChange.emit();
  }
  /**
   * Establece el mensaje de error actual
   */
  setErrorMessage() {
    this.errorFeedback = this.getErrorMessage();
    this.validChange.emit(!this.errorFeedback);
    this.anyChange.emit(true);
  }
  /**
   * Verifica si existe un error específico
   * @param errorCode - Código del error a verificar
   * @returns Booleano indicando si existe el error
   */
  hasError(errorCode) {
    return !!this.selectModel?.errors?.[errorCode];
  }
  /**
   * Obtiene el mensaje de error correspondiente
   * @returns Mensaje de error o string vacío si no hay error
   */
  getErrorMessage() {
    if (this.hasError("required") && this.value === void 0) {
      return "El campo " + (this.label ?? "").toLowerCase() + " es obligatorio.";
    }
    return "";
  }
  /**
   * Type guard para identificar opciones complejas (SelectItem)
   * @param option - Opción a verificar
   * @returns Booleano indicando si es SelectItem
   */
  isSelectItem(option) {
    return option.value !== void 0;
  }
  /**
   * Type guard para identificar strings
   * @param option - Opción a verificar
   * @returns Booleano indicando si es string
   */
  isString(option) {
    return typeof option === "string";
  }
  /**
   * Filtra opciones para el autocompletado
   */
  filterData() {
    const searchTerm = this.value?.toString().toLowerCase() || "";
    this.filteredData = this.options.filter((item) => this.isSelectItem(item) && (item.label.toLowerCase().includes(searchTerm) || item.value.toString().toLowerCase().includes(searchTerm)) || item.toString().toLowerCase().includes(searchTerm)).map((i) => this.isSelectItem(i) ? i.value.toString() : i.toString()).slice(0, 6);
  }
  /**
   * Selecciona un ítem del autocompletado
   * @param item - Ítem seleccionado
   */
  selectFilteredItem(item) {
    this.value = item;
    this.updateValue();
    this.filteredData = [];
    this.showOptions = false;
  }
  /**
   * Alterna la visibilidad de las opciones en modo autocomplete
   */
  toggleOptions() {
    if (this.useAutocomplete) {
      this.showOptions = !this.showOptions;
      if (this.showOptions) {
        this.filterData();
      }
    }
  }
};
_SelectFieldComponent.\u0275fac = function SelectFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectFieldComponent)();
};
_SelectFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectFieldComponent, selectors: [["app-select-field"]], viewQuery: function SelectFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.selectModel = _t.first);
  }
}, inputs: { label: "label", placeholder: "placeholder", value: "value", validator: "validator", sm: "sm", options: "options", useAutocomplete: "useAutocomplete", defaultOption: "defaultOption", valid: "valid", style: "style", inputGroup: "inputGroup" }, outputs: { valueChange: "valueChange", validChange: "validChange", anyChange: "anyChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 6, consts: [["selectModel", "ngModel"], [3, "blur"], [3, "class", "text-s"], [3, "class", "form-select-sm", "ngModel", "required", "disabled", "is-invalid"], [1, "invalid-feedback"], [1, "fw-bolder", "text-danger"], [3, "ngModelChange", "ngModel", "required", "disabled"], ["selected", "", "disabled", "", 3, "value"], [3, "value"], [3, "ngModelChange", "click", "focus", "placeholder", "ngModel", "required", "disabled"], [1, "list-group", "mt-1"], ["type", "button", 1, "list-group-item", "list-group-item-action"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click"]], template: function SelectFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("blur", function SelectFieldComponent_Template_div_blur_0_listener() {
      return ctx.showOptions = false;
    });
    \u0275\u0275conditionalCreate(1, SelectFieldComponent_Conditional_1_Template, 3, 6, "span", 2);
    \u0275\u0275conditionalCreate(2, SelectFieldComponent_Conditional_2_Template, 6, 10, "select", 3);
    \u0275\u0275conditionalCreate(3, SelectFieldComponent_Conditional_3_Template, 3, 11);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.inputGroup ? "input-group" : "col p-0");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.useAutocomplete ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.useAutocomplete ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.errorFeedback, " ");
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n.form-control[_ngcontent-%COMP%] {\n  padding-right: 9%;\n}\n/*# sourceMappingURL=select-field.component.css.map */"] });
var SelectFieldComponent = _SelectFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectFieldComponent, [{
    type: Component,
    args: [{ selector: "app-select-field", imports: [
      FormsModule
    ], template: `<div [class]="inputGroup?'input-group':'col p-0'" (blur)="showOptions=false">
  @if (label) {
  <span [class]="style?.label??(inputGroup?'input-group-text':'fw-bold ps-1')" [class.text-s]="sm">
    {{label}}@if (validator?.required) {
    <span class="fw-bolder text-danger">*</span>
    }
  </span>
  }
  @if (!useAutocomplete) {
  <select [class]="style?.input??'form-control form-select'" [class.form-select-sm]="sm" [(ngModel)]="value"
    (ngModelChange)="valueChange.emit($event)" [required]="!!validator?.required"
    [disabled]="validator?.disabled??false" #selectModel="ngModel"
    [class.is-invalid]="selectModel.touched && selectModel.invalid">
    <option [value]="undefined" selected disabled>Selecciona una opcion</option>
    @for (option of options; track option) {
    @if (isSelectItem(option)) {
    <option [value]="option.value">{{option.label}}</option>
    }
    @if (isString(option)) {
    <option>{{option}}</option>
    }
    }
  </select>
  }

  @if (useAutocomplete) {
  <input [class]="style?.input??'form-control'" [placeholder]="placeholder ?? label" [class.form-select-sm]="sm"
    [(ngModel)]="value" (ngModelChange)="valueChange.emit($event)" [required]="!!validator?.required"
    [disabled]="validator?.disabled??false" #selectModel="ngModel"
    [class.is-invalid]="selectModel.touched && selectModel.invalid" (ngModelChange)="filterData()"
    (click)="toggleOptions()" (focus)="filterData()">
  <!-- Lista de sugerencias -->
  @if (showOptions && filteredData.length > 0) {
    <div class="list-group mt-1">
      @for (item of filteredData; track item) {
      <button type="button" class="list-group-item list-group-item-action" (click)="selectFilteredItem(item)">
        {{item}}
      </button>
      }
    </div>
  }
  }

  <div class="invalid-feedback">
    {{errorFeedback}}
  </div>
</div>`, styles: ["/* src/app/shared/generic-form/select-field/select-field.component.css */\n.form-control {\n  padding-right: 9%;\n}\n/*# sourceMappingURL=select-field.component.css.map */\n"] }]
  }], null, { label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], value: [{
    type: Input
  }], valueChange: [{
    type: Output
  }], validator: [{
    type: Input
  }], sm: [{
    type: Input
  }], options: [{
    type: Input
  }], useAutocomplete: [{
    type: Input
  }], defaultOption: [{
    type: Input
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }], anyChange: [{
    type: Output
  }], selectModel: [{
    type: ViewChild,
    args: ["selectModel"]
  }], style: [{
    type: Input
  }], inputGroup: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectFieldComponent, { className: "SelectFieldComponent", filePath: "src/app/shared/generic-form/select-field/select-field.component.ts", lineNumber: 73 });
})();

export {
  SelectFieldComponent
};
//# sourceMappingURL=chunk-XRNE7EBS.js.map
