import {
  LeafletComponent
} from "./chunk-ITPEKJSE.js";
import {
  FormGroupComponent
} from "./chunk-NXIA6ZMF.js";
import {
  FileInputComponent
} from "./chunk-5BMNPTRZ.js";
import {
  ButtonComponent,
  FieldTypesService,
  FormFieldComponent
} from "./chunk-ZF7ZAEOZ.js";
import {
  ApiServiceService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  ToastService
} from "./chunk-PMGWFFGK.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  Subject,
  ViewChildren,
  combineLatest,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/shared/generic-form/dinamic-group-field/dinamic-group-field.component.ts
function DinamicGroupFieldComponent_For_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-form-field", 9);
    \u0275\u0275listener("fieldChange", function DinamicGroupFieldComponent_For_9_For_2_Template_app_form_field_fieldChange_1_listener($event) {
      const field_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const form_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onFieldChange($event, form_r4, field_r3));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    \u0275\u0275classMap((field_r3.style == null ? null : field_r3.style.div) ?? "col-12 col-sm-6 col-md-4 col-lg p-1");
    \u0275\u0275advance();
    \u0275\u0275styleMap(field_r3.style);
    \u0275\u0275property("field", field_r3);
  }
}
function DinamicGroupFieldComponent_For_9_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
}
function DinamicGroupFieldComponent_For_9_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap((ctx_r4.saveButton == null ? null : ctx_r4.saveButton.style == null ? null : ctx_r4.saveButton.style.icon) ?? "bi bi-floppy-fill");
  }
}
function DinamicGroupFieldComponent_For_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function DinamicGroupFieldComponent_For_9_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const form_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.saveForm(form_r4));
    });
    \u0275\u0275conditionalCreate(1, DinamicGroupFieldComponent_For_9_Conditional_4_Conditional_1_Template, 1, 0, "span", 8);
    \u0275\u0275conditionalCreate(2, DinamicGroupFieldComponent_For_9_Conditional_4_Conditional_2_Template, 1, 2, "i", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const form_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r4.saveButton == null ? null : ctx_r4.saveButton.style == null ? null : ctx_r4.saveButton.style.button) ?? "btn btn-primary scale-05 mx-1");
    \u0275\u0275property("disabled", !!ctx_r4.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(form_r4.loading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!form_r4.loading ? 2 : -1);
  }
}
function DinamicGroupFieldComponent_For_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
}
function DinamicGroupFieldComponent_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r4.deleteButton == null ? null : ctx_r4.deleteButton.style == null ? null : ctx_r4.deleteButton.style.icon) ?? "bi bi-x-lg");
  }
}
function DinamicGroupFieldComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, DinamicGroupFieldComponent_For_9_For_2_Template, 2, 5, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275conditionalCreate(4, DinamicGroupFieldComponent_For_9_Conditional_4_Template, 3, 5, "button", 6);
    \u0275\u0275elementStart(5, "button", 7);
    \u0275\u0275listener("click", function DinamicGroupFieldComponent_For_9_Template_button_click_5_listener() {
      const form_r4 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteForm(form_r4));
    });
    \u0275\u0275conditionalCreate(6, DinamicGroupFieldComponent_For_9_Conditional_6_Template, 1, 0, "span", 8);
    \u0275\u0275conditionalCreate(7, DinamicGroupFieldComponent_For_9_Conditional_7_Template, 1, 2, "i", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const form_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(form_r4.fields);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r4.id ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r4.deleteButton == null ? null : ctx_r4.deleteButton.style == null ? null : ctx_r4.deleteButton.style.button) ?? "btn btn-danger scale-05 mx-1");
    \u0275\u0275property("disabled", !!ctx_r4.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(form_r4.deleteLoading ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!form_r4.deleteLoading ? 7 : -1);
  }
}
var _DinamicGroupFieldComponent = class _DinamicGroupFieldComponent {
  constructor(api) {
    this.api = api;
    this.baseFields = [];
    this.formRows = [];
    this.disabled = false;
    this.defaultTitleClass = "h5 fw-bold";
    this.defaultBorderClass = "m-0 my-2 border border-primary";
    this.initials = 1;
    this.valid = false;
    this.validChange = new EventEmitter();
    this.anyChange = new EventEmitter();
    this.dataSource = [];
    this._saveCompletedSubject = new Subject();
    this.saveCompleted$ = this._saveCompletedSubject.asObservable();
  }
  ngOnInit() {
    this.setInitialsRows();
    this.setIsValid();
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes["id"] && this.id !== changes["id"].previousValue && this.id) {
        yield this.saveLocalFormRows();
        if (!this.relationKey || !this.dataSource) {
          this.setDataSource();
        } else {
          this.generateForms();
        }
      }
    });
  }
  /**
   * Saves form rows locally if they meet specific conditions.
   *
   * This function iterates through the `formRows` array, filters out forms
   * that do not have an `id` and whose fields are all valid with defined values.
   * It then maps these forms to asynchronous save operations. Once all the save
   * operations complete, it emits a `true` value through the `_saveCompletedSubject`.
   *
   * @returns {Promise<void>} A promise that resolves when all eligible form rows are saved.
   */
  saveLocalFormRows() {
    return __async(this, null, function* () {
      const savePromises = this.formRows.filter((form) => !form.id && form.fields.every((field) => field.valid && field.value !== void 0)).map((form) => this.saveForm(form));
      yield Promise.all(savePromises);
      this._saveCompletedSubject.next(true);
    });
  }
  /**
   * Sets the data source by fetching data from the API based on specific conditions.
   *
   * This function retrieves data from the API, filters it by conditions (e.g., `deleted_at` is `NULL`
   * and matches a foreign key), and assigns the result to `dataSource`. If no data is returned,
   * it updates the validity state and emits a validity change event. Finally, it triggers form generation.
   *
   * @returns {Promise<void>} A promise that resolves once the data source is set and forms are generated.
   */
  setDataSource() {
    return __async(this, null, function* () {
      const response = yield firstValueFrom(this.api.get(this.apiUrl, {
        page: 1,
        per_page: 99999,
        conditionals: JSON.stringify([
          ["deleted_at", "IS NULL", "NULL"],
          [this.foreign_key, "=", this.id]
        ])
      }, false));
      this.dataSource = response.data ?? [];
      if (!this.dataSource || this.dataSource.length === 0) {
        this.valid = true;
        this.validChange.emit(true);
      }
      this.generateForms();
    });
  }
  /**
   * Generates form rows based on the current data source.
   *
   * This function processes each item in the `dataSource`, creates a copy of the base fields,
   * and maps the data from the source into the corresponding form fields. It then updates
   * the `formRows` array with the newly created forms.
   */
  generateForms() {
    if (!this.dataSource || this.dataSource.length === 0)
      return;
    this.formRows = [];
    this.dataSource.forEach((row) => {
      const newForm = this.copyOf(this.baseFields);
      Object.keys(row).forEach((key) => {
        const field = newForm.find((f) => f.key === key);
        if (field) {
          field.value = row[key];
          field.valid = true;
        }
      });
      this.formRows.push({
        id: row.id,
        fields: [...newForm]
      });
    });
  }
  /**
   * Initializes form rows with a predefined number of empty forms.
   *
   * This function checks if there are any existing `formRows`. If not, it creates
   * a specified number (`initials`) of empty forms by copying the base fields
   * and adds them to `formRows`.
   *
   * @private
   */
  setInitialsRows() {
    if (this.formRows.length > 0)
      return;
    for (let i = 0; i < this.initials; i++) {
      this.formRows.push({
        fields: this.copyOf(this.baseFields)
      });
    }
  }
  /**
   * Adds a new empty form to the `formRows` array.
   *
   * This function creates a new form by copying the base fields and appends it
   * to the `formRows` array.
   */
  addForm() {
    this.formRows.push({
      fields: this.copyOf(this.baseFields)
    });
  }
  /**
   * Saves the provided form data either by creating a new record or updating an existing one.
   *
   * This function sets the `loading` state of the form to true while the save operation is in progress.
   * If the form has an `id`, it sends a `PUT` request to update the existing record. Otherwise, it sends
   * a `POST` request to create a new record. If a new record is created, the form's `id` is updated with
   * the newly created record's `id`. Once the operation is completed, it resets the `loading` state.
   *
   * @param {DinamicForm} form - The form to be saved.
   * @returns {Promise<void>} A promise that resolves once the form is saved.
   */
  saveForm(form) {
    return __async(this, null, function* () {
      form.loading = true;
      const formData = this.formValues(form.fields);
      try {
        if (form.id) {
          yield firstValueFrom(this.api.put(this.apiUrl + "/" + form.id, formData, false));
        } else {
          const newRow = (yield firstValueFrom(this.api.post(this.apiUrl, formData, false))).data;
          if (newRow) {
            form.id = newRow.id;
          }
        }
      } finally {
        form.loading = false;
      }
    });
  }
  /**
   * Deletes the specified form from the `formRows` array.
   *
   * This function checks if the form has a valid `id` and if `id` and `foreign_key` are present.
   * If so, it sends a `DELETE` request to remove the form. Upon successful deletion, the form is
   * removed from the `formRows` array. If no deletion is required, the form is simply removed
   * from the array. The `deleteLoading` state is used to show a loading indicator during the operation.
   *
   * @param {DinamicForm} form - The form to be deleted.
   * @returns {Promise<void>} A promise that resolves once the form is deleted.
   */
  deleteForm(form) {
    return __async(this, null, function* () {
      const index = this.formRows.indexOf(form);
      if (index > -1) {
        if (this.id && this.foreign_key) {
          form.deleteLoading = true;
          const res = yield firstValueFrom(this.api.delete(this.apiUrl + "/" + form.id, false));
          if (res.status) {
            this.formRows.splice(index, 1);
          }
          form.deleteLoading = false;
        } else {
          this.formRows.splice(index, 1);
        }
      }
    });
  }
  /**
   * Extracts values from form fields and maps them to an object.
   *
   * This function iterates over the form fields, extracting the key-value pairs and constructing
   * an object where the keys are the field keys and the values are the corresponding field values.
   * Additionally, it includes a foreign key in the resulting object with the current instance's `id`.
   *
   * @param {FormField[]} form - An array of form fields to extract values from.
   * @returns {any} An object representing the form data with field keys as object keys and field values as object values.
   */
  formValues(form) {
    const data = {};
    for (const field of form) {
      data[field.key] = field.value;
    }
    data[this.foreign_key] = this.id;
    return data;
  }
  /**
   * Creates a deep copy of the provided object.
   *
   * This function creates a deep copy of the provided object by serializing and then deserializing it.
   * This approach ensures that nested structures are fully copied and not referenced.
   *
   * @param {any} form - The object to be copied.
   * @returns {T} A deep copy of the provided object.
   */
  copyOf(form) {
    return JSON.parse(JSON.stringify(form));
  }
  /**
   * Updates a specific field within a form and triggers validation.
   *
   * This function finds the specified field in the form's fields and replaces it with the updated field.
   * After updating the field, it triggers the `setIsValid` function to check the form's validity.
   *
   * @param {FormField} updatedField - The updated field data.
   * @param {DinamicForm} form - The form containing the field to be updated.
   * @param {FormField} field - The field to be updated.
   */
  onFieldChange(updatedField, form, field) {
    const fieldIndex = form.fields.indexOf(field);
    if (fieldIndex > -1) {
      form.fields[fieldIndex] = updatedField;
      this.setIsValid();
    }
  }
  /**
   * Validates the form by checking if all fields in all forms are valid.
   *
   * This function checks whether every field in every form is valid. If all fields are valid, the
   * `valid` property is set to `true`, and a change event is emitted. Otherwise, it sets `valid` to `false`.
   */
  setIsValid() {
    this.valid = this.formRows.every((form) => form.fields.every((field) => field.valid));
    this.validChange.emit(this.valid);
  }
};
_DinamicGroupFieldComponent.\u0275fac = function DinamicGroupFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DinamicGroupFieldComponent)(\u0275\u0275directiveInject(ApiServiceService));
};
_DinamicGroupFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DinamicGroupFieldComponent, selectors: [["app-dinamic-group-field"]], inputs: { title: "title", style: "style", baseFields: "baseFields", apiUrl: "apiUrl", disabled: "disabled", addButton: "addButton", saveButton: "saveButton", deleteButton: "deleteButton", foreign_key: "foreign_key", relationKey: "relationKey", id: "id", defaultTitleClass: "defaultTitleClass", defaultBorderClass: "defaultBorderClass", initials: "initials", valid: "valid", dataSource: "dataSource" }, outputs: { validChange: "validChange", anyChange: "anyChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 15, consts: [[1, "row"], [1, "col", "align-self-end", "px-3"], ["defaultButtonClass", "btn btn-success scale-05", "defaultIconClass", "bi bi-plus-circle-fill", 3, "click", "text", "disabled"], [1, "row", "justify-content-evenly", "px-5", "py-1", "border-bottom"], [3, "class"], [1, "col-12", "col-sm-auto", "align-self-end", "p-1"], [3, "class", "disabled"], [3, "click", "disabled"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [3, "fieldChange", "field"]], template: function DinamicGroupFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "app-button", 2);
    \u0275\u0275listener("click", function DinamicGroupFieldComponent_Template_app_button_click_6_listener() {
      return ctx.addForm();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "hr");
    \u0275\u0275repeaterCreate(8, DinamicGroupFieldComponent_For_9_Template, 8, 6, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.div) ?? "container-fluid px-2 pb-4");
    \u0275\u0275advance(3);
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.title) ?? ctx.defaultTitleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx.addButton == null ? null : ctx.addButton.style == null ? null : ctx.addButton.style.div) ?? "col-auto");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx.addButton == null ? null : ctx.addButton.style);
    \u0275\u0275classMap(ctx.addButton == null ? null : ctx.addButton.style == null ? null : ctx.addButton.style.button);
    \u0275\u0275property("text", ctx.addButton == null ? null : ctx.addButton.text)("disabled", !!ctx.disabled);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.border) ?? ctx.defaultBorderClass);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.formRows);
  }
}, dependencies: [
  FormFieldComponent,
  ButtonComponent
], encapsulation: 2 });
var DinamicGroupFieldComponent = _DinamicGroupFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DinamicGroupFieldComponent, [{
    type: Component,
    args: [{ selector: "app-dinamic-group-field", imports: [
      FormFieldComponent,
      ButtonComponent
    ], template: `<div [class]="style?.div??'container-fluid px-2 pb-4'">
  <div class="row">
    <div class="col align-self-end px-3">
      <span [class]="style?.title??defaultTitleClass">{{title}}</span>
    </div>
    <div [class]="addButton?.style?.div??'col-auto'">
      <app-button
        [style]="addButton?.style"
        [class]="addButton?.style?.button"
        [text]="addButton?.text"
        defaultButtonClass="btn btn-success scale-05"
        defaultIconClass="bi bi-plus-circle-fill"
        (click)="addForm()"
        [disabled]="!!disabled"
        />
    </div>
  </div>
  <hr [class]="style?.border??defaultBorderClass">
  @for (form of formRows; track form) {
    <div class="row justify-content-evenly px-5 py-1 border-bottom">
      @for (field of form.fields; track field) {
        <div [class]="field.style?.div??'col-12 col-sm-6 col-md-4 col-lg p-1'">
          <app-form-field
            [field]="field"
            [style]="field.style"
            (fieldChange)="onFieldChange($event, form, field)"
            />
        </div>
      }
      <div class="col-12 col-sm-auto align-self-end p-1">
        @if (id) {
          <button
            [class]="saveButton?.style?.button??'btn btn-primary scale-05 mx-1'"
            (click)="saveForm(form)"
            [disabled]="!!disabled"
            >
            @if (form.loading) {
              <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            }
            @if (!form.loading) {
              <i [class]="saveButton?.style?.icon??'bi bi-floppy-fill'"></i>
            }
          </button>
        }
        <button
          [disabled]="!!disabled"
          [class]="deleteButton?.style?.button??'btn btn-danger scale-05 mx-1'"
          (click)="deleteForm(form)"
          >
          @if (form.deleteLoading) {
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
          }
          @if (!form.deleteLoading) {
            <i [class]="deleteButton?.style?.icon??'bi bi-x-lg'"></i>
          }
        </button>
      </div>
    </div>
  }
</div>` }]
  }], () => [{ type: ApiServiceService }], { title: [{
    type: Input
  }], style: [{
    type: Input
  }], baseFields: [{
    type: Input
  }], apiUrl: [{
    type: Input
  }], disabled: [{
    type: Input
  }], addButton: [{
    type: Input
  }], saveButton: [{
    type: Input
  }], deleteButton: [{
    type: Input
  }], foreign_key: [{
    type: Input
  }], relationKey: [{
    type: Input
  }], id: [{
    type: Input
  }], defaultTitleClass: [{
    type: Input
  }], defaultBorderClass: [{
    type: Input
  }], initials: [{
    type: Input
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }], anyChange: [{
    type: Output
  }], dataSource: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DinamicGroupFieldComponent, { className: "DinamicGroupFieldComponent", filePath: "src/app/shared/generic-form/dinamic-group-field/dinamic-group-field.component.ts", lineNumber: 41 });
})();

// src/app/shared/generic-form/orderable-list/orderable-list.component.ts
function OrderableListComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 4)(1, "li", 5)(2, "div", 2)(3, "div", 6)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 8)(11, "button", 9);
    \u0275\u0275listener("click", function OrderableListComponent_For_5_Template_button_click_11_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveUp(row_r2));
    });
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 11);
    \u0275\u0275listener("click", function OrderableListComponent_For_5_Template_button_click_13_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveDown(row_r2));
    });
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const \u0275$index_9_r4 = ctx.$index;
    \u0275\u0275advance(4);
    \u0275\u0275classMap(row_r2.style == null ? null : row_r2.style.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.label ?? \u0275$index_9_r4 + 1 + " \xB0", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(row_r2.style == null ? null : row_r2.style.text);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r2.text, " ");
  }
}
var _OrderableListComponent = class _OrderableListComponent {
  constructor() {
    this.list = [];
    this.listChange = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.validChange = new EventEmitter();
  }
  ngOnInit() {
    this.setValid();
    this.setValue();
  }
  ngOnChanges(changes) {
    if (changes["value"]) {
      this.reArrange();
    }
  }
  reArrange() {
    if (this.value && this.isString(this.value)) {
      this.value = JSON.parse(this.value) ?? [];
      this.valueChange.emit(this.value);
      if (Array.isArray(this.value)) {
        for (let i = 0; i < this.value.length; i++) {
          this.list[i].text = this.value[i];
        }
      }
      console.log(this.value);
    }
  }
  setValid() {
    this.valid = true;
    this.validChange.emit(true);
  }
  isStringList(value) {
    return Array.isArray(value) && value.every((item) => typeof item === "string");
  }
  isString(value) {
    return typeof value === "string";
  }
  moveUp(row) {
    const index = this.list.indexOf(row);
    if (index > 0) {
      [this.list[index - 1], this.list[index]] = [this.list[index], this.list[index - 1]];
      if (this.value && this.isStringList(this.value)) {
        [this.value[index - 1], this.value[index]] = [this.value[index], this.value[index - 1]];
      }
    }
    this.listChange.emit(this.list);
  }
  moveDown(row) {
    const index = this.list.indexOf(row);
    if (index < this.list.length - 1) {
      [this.list[index], this.list[index + 1]] = [this.list[index + 1], this.list[index]];
      if (this.value && this.isStringList(this.value)) {
        [this.value[index - 1], this.value[index]] = [this.value[index], this.value[index - 1]];
      }
    }
    this.listChange.emit(this.list);
  }
  setValue() {
    const values = [];
    this.list.forEach((item) => {
      values.push(item.text);
    });
    this.value = values;
    this.valueChange.emit(values);
  }
};
_OrderableListComponent.\u0275fac = function OrderableListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrderableListComponent)();
};
_OrderableListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderableListComponent, selectors: [["app-orderable-list"]], inputs: { groupStyle: "groupStyle", title: "title", list: "list", upButton: "upButton", downButton: "downButton", value: "value", valid: "valid" }, outputs: { listChange: "listChange", valueChange: "valueChange", validChange: "validChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 3, consts: [[3, "title"], [1, "container", "px-2"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-10", "col-md-8", "col-lg-6"], [1, "list-group"], ["aria-current", "true", 1, "list-group-item", "py-0", "my-1"], [1, "col-auto", "align-self-center", "p-1"], [1, "col", "align-self-center", "p-1"], [1, "hstack", "gap-1"], [1, "btn", "btn-sm", "btn-success", "scale-05", 3, "click"], [1, "bi", "bi-chevron-compact-up"], [1, "btn", "btn-sm", "btn-danger", "scale-05", 3, "click"], [1, "bi", "bi-chevron-compact-down"]], template: function OrderableListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form-group", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275repeaterCreate(4, OrderableListComponent_For_5_Template, 15, 6, "ul", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275styleMap(ctx.groupStyle);
    \u0275\u0275property("title", ctx.title);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.list);
  }
}, dependencies: [FormGroupComponent], encapsulation: 2 });
var OrderableListComponent = _OrderableListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderableListComponent, [{
    type: Component,
    args: [{ selector: "app-orderable-list", imports: [
      FormGroupComponent
    ], template: `<form-group [style]="groupStyle" [title]="title">
  <div class="container px-2">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        @for (row of list; track row; let i = $index) {
          <ul class="list-group">
            <li class="list-group-item py-0 my-1" aria-current="true">
              <div class="row justify-content-center">
                <div class="col-auto align-self-center p-1">
                  <span [class]="row.style?.label">
                    {{row.label??((i+1)+' \xB0')}}
                  </span>
                </div>
                <div class="col align-self-center p-1">
                  <span [class]="row.style?.text">
                    {{row.text}}
                  </span>
                </div>
                <div class="col-auto align-self-center p-1">
                  <div class="hstack gap-1">
                    <button class="btn btn-sm btn-success scale-05" (click)="moveUp(row)">
                      <i class="bi bi-chevron-compact-up"></i>
                    </button>
                    <button class="btn btn-sm btn-danger scale-05" (click)="moveDown(row)">
                      <i class="bi bi-chevron-compact-down"></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        }
      </div>
    </div>
  </div>
</form-group>` }]
  }], null, { groupStyle: [{
    type: Input
  }], title: [{
    type: Input
  }], list: [{
    type: Input
  }], listChange: [{
    type: Output
  }], upButton: [{
    type: Input
  }], downButton: [{
    type: Input
  }], value: [{
    type: Input
  }], valueChange: [{
    type: Output
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderableListComponent, { className: "OrderableListComponent", filePath: "src/app/shared/generic-form/orderable-list/orderable-list.component.ts", lineNumber: 34 });
})();

// src/app/shared/generic-form/form-field-group/form-field-group.component.ts
function FormFieldGroupComponent_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-field", 5);
    \u0275\u0275listener("fieldChange", function FormFieldGroupComponent_Conditional_0_For_3_Conditional_1_Template_app_form_field_fieldChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const groupField_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFieldChange($event, groupField_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const groupField_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("field", groupField_r2);
  }
}
function FormFieldGroupComponent_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, FormFieldGroupComponent_Conditional_0_For_3_Conditional_1_Template, 1, 1, "app-form-field", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const groupField_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((groupField_r2.style == null ? null : groupField_r2.style.div) ?? ctx_r2.defaultInputDivClass);
    \u0275\u0275advance();
    \u0275\u0275conditional(!groupField_r2.hidden ? 1 : -1);
  }
}
function FormFieldGroupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form-group", 1)(1, "div", 2);
    \u0275\u0275repeaterCreate(2, FormFieldGroupComponent_Conditional_0_For_3_Template, 2, 3, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r2.formGroup.style);
    \u0275\u0275property("title", ctx_r2.formGroup.title)("defaultBorderClass", ctx_r2.defaultBorderClass)("defaultTitleClass", ctx_r2.defaultTitleClass);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.formGroup.fields);
  }
}
var _FormFieldGroupComponent = class _FormFieldGroupComponent {
  constructor(fieldTypes) {
    this.fieldTypes = fieldTypes;
    this.formGroupChange = new EventEmitter();
    this.valid = false;
    this.validChange = new EventEmitter();
    this.defaultInputDivClass = "col-12 col-sm-6 col-md-4 p-3";
    this.defaultTitleClass = "h5 fw-bold";
    this.defaultBorderClass = "m-0 my-2 border border-primary";
  }
  ngOnInit() {
    this.setIsValid();
  }
  onFieldChange(updatedField, field) {
    const fieldIndex = this.formGroup.fields.indexOf(field);
    if (fieldIndex > -1) {
      this.formGroup.fields[fieldIndex] = updatedField;
      this.formGroupChange.emit(this.formGroup);
      this.setIsValid();
    }
  }
  setIsValid() {
    this.valid = !this.formGroup.fields.some((field) => !field.valid);
    this.validChange.emit(this.valid);
  }
};
_FormFieldGroupComponent.\u0275fac = function FormFieldGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormFieldGroupComponent)(\u0275\u0275directiveInject(FieldTypesService));
};
_FormFieldGroupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormFieldGroupComponent, selectors: [["app-form-field-group"]], inputs: { formGroup: "formGroup", valid: "valid", defaultInputDivClass: "defaultInputDivClass", defaultTitleClass: "defaultTitleClass", defaultBorderClass: "defaultBorderClass" }, outputs: { formGroupChange: "formGroupChange", validChange: "validChange" }, decls: 1, vars: 1, consts: [[3, "style", "title", "defaultBorderClass", "defaultTitleClass"], [3, "title", "defaultBorderClass", "defaultTitleClass"], [1, "row", "justify-content-evenly", "px-4"], [3, "class"], [3, "field"], [3, "fieldChange", "field"]], template: function FormFieldGroupComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormFieldGroupComponent_Conditional_0_Template, 4, 5, "form-group", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.fieldTypes.isFormGroup(ctx.formGroup) ? 0 : -1);
  }
}, dependencies: [
  FormGroupComponent,
  FormFieldComponent
], encapsulation: 2 });
var FormFieldGroupComponent = _FormFieldGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldGroupComponent, [{
    type: Component,
    args: [{ selector: "app-form-field-group", imports: [
      FormGroupComponent,
      FormFieldComponent
    ], template: '@if (fieldTypes.isFormGroup(formGroup)) {\n  <form-group [style]="formGroup.style" [title]="formGroup.title"\n    [defaultBorderClass]="defaultBorderClass" [defaultTitleClass]="defaultTitleClass">\n    <div class="row justify-content-evenly px-4">\n      @for (groupField of formGroup.fields; track groupField) {\n        <div [class]="groupField.style?.div??defaultInputDivClass">\n          @if (!groupField.hidden) {\n            <app-form-field [field]="groupField" (fieldChange)="onFieldChange($event, groupField)" />\n          }\n        </div>\n      }\n    </div>\n  </form-group>\n}' }]
  }], () => [{ type: FieldTypesService }], { formGroup: [{
    type: Input
  }], formGroupChange: [{
    type: Output
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }], defaultInputDivClass: [{
    type: Input
  }], defaultTitleClass: [{
    type: Input
  }], defaultBorderClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormFieldGroupComponent, { className: "FormFieldGroupComponent", filePath: "src/app/shared/generic-form/form-field-group/form-field-group.component.ts", lineNumber: 16 });
})();

// src/app/shared/generic-form/map-field/map-field.component.ts
var _MapFieldComponent = class _MapFieldComponent {
  constructor() {
    this.latitudChange = new EventEmitter();
    this.longitudChange = new EventEmitter();
    this.validChange = new EventEmitter();
  }
  ngOnInit() {
    this.valid = true;
    this.validChange.emit(true);
  }
};
_MapFieldComponent.\u0275fac = function MapFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MapFieldComponent)();
};
_MapFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapFieldComponent, selectors: [["app-map-field"]], inputs: { title: "title", style: "style", latitud: "latitud", longitud: "longitud", valid: "valid" }, outputs: { latitudChange: "latitudChange", longitudChange: "longitudChange", validChange: "validChange" }, decls: 2, vars: 5, consts: [[3, "title"], [3, "latitudChange", "longitudChange", "latitud", "longitud"]], template: function MapFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form-group", 0)(1, "app-leaflet", 1);
    \u0275\u0275twoWayListener("latitudChange", function MapFieldComponent_Template_app_leaflet_latitudChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.latitud, $event) || (ctx.latitud = $event);
      return $event;
    });
    \u0275\u0275listener("latitudChange", function MapFieldComponent_Template_app_leaflet_latitudChange_1_listener($event) {
      return ctx.latitudChange.emit($event);
    });
    \u0275\u0275twoWayListener("longitudChange", function MapFieldComponent_Template_app_leaflet_longitudChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.longitud, $event) || (ctx.longitud = $event);
      return $event;
    });
    \u0275\u0275listener("longitudChange", function MapFieldComponent_Template_app_leaflet_longitudChange_1_listener($event) {
      return ctx.longitudChange.emit($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleMap(ctx.style);
    \u0275\u0275property("title", ctx.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("latitud", ctx.latitud)("longitud", ctx.longitud);
  }
}, dependencies: [
  LeafletComponent,
  FormGroupComponent
], encapsulation: 2 });
var MapFieldComponent = _MapFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapFieldComponent, [{
    type: Component,
    args: [{ selector: "app-map-field", imports: [
      LeafletComponent,
      FormGroupComponent
    ], template: '<form-group [title]="title" [style]="style">\n    <app-leaflet \n    [(latitud)]="latitud"\n    (latitudChange)="latitudChange.emit($event)"\n    [(longitud)]="longitud"\n    (longitudChange)="longitudChange.emit($event)"\n    />\n</form-group>' }]
  }], null, { title: [{
    type: Input
  }], style: [{
    type: Input
  }], latitud: [{
    type: Input
  }], latitudChange: [{
    type: Output
  }], longitud: [{
    type: Input
  }], longitudChange: [{
    type: Output
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapFieldComponent, { className: "MapFieldComponent", filePath: "src/app/shared/generic-form/map-field/map-field.component.ts", lineNumber: 29 });
})();

// src/app/shared/generic-form/generic-form.service.ts
var _GenericFormService = class _GenericFormService {
  constructor(fieldTypes) {
    this.fieldTypes = fieldTypes;
  }
  setValuesFromModel(form, model) {
    if (!model) {
      return;
    }
    const keys = Object.keys(model);
    for (const key of keys) {
      form.forEach((field) => {
        if (this.fieldTypes.isFormGroup(field)) {
          field.fields.forEach((innerField) => {
            if (innerField.key === key) {
              innerField.value = model[key];
              innerField.valid = true;
            }
          });
        } else if (this.fieldTypes.isMapField(field)) {
          if (key.includes("latitud"))
            field.latitud.value = model[key];
          if (key.includes("longitud"))
            field.longitud.value = model[key];
        } else if (this.fieldTypes.isFormField(field) || this.fieldTypes.isFileInput(field)) {
          if (field.key === key) {
            field.value = model[key];
            field.valid = true;
          }
        }
      });
    }
  }
};
_GenericFormService.\u0275fac = function GenericFormService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GenericFormService)(\u0275\u0275inject(FieldTypesService));
};
_GenericFormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GenericFormService, factory: _GenericFormService.\u0275fac, providedIn: "any" });
var GenericFormService = _GenericFormService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenericFormService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: FieldTypesService }], null);
})();

// src/app/shared/generic-form/generic-form.component.ts
var _c0 = ["dinamycForm"];
var _c1 = (a0) => ({ button: a0 });
function GenericFormComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-field-group", 6);
    \u0275\u0275twoWayListener("validChange", function GenericFormComponent_For_4_Conditional_0_Template_app_form_field_group_validChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.valid, $event) || (field_r2.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("validChange", function GenericFormComponent_For_4_Conditional_0_Template_app_form_field_group_validChange_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setIsValid());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", field_r2)("defaultBorderClass", ctx_r2.defaultBorderClass)("defaultTitleClass", ctx_r2.defaultTitleClass)("defaultInputDivClass", ctx_r2.defaultInputDivClass);
    \u0275\u0275twoWayProperty("valid", field_r2.valid);
  }
}
function GenericFormComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-file-input", 7);
    \u0275\u0275twoWayListener("urlChange", function GenericFormComponent_For_4_Conditional_1_Template_app_file_input_urlChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.value, $event) || (field_r2.value = $event);
      return \u0275\u0275resetView($event);
    })("validChange", function GenericFormComponent_For_4_Conditional_1_Template_app_file_input_validChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.valid, $event) || (field_r2.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap((field_r2.style == null ? null : field_r2.style.div) ?? "col-12 p-3 px-5 align-self-end");
    \u0275\u0275advance();
    \u0275\u0275property("accept", field_r2.accept)("label", field_r2.label)("multiple", field_r2.multiple)("key", field_r2.fileKey)("id", ctx_r2.edit == null ? null : ctx_r2.edit[ctx_r2.idKey])("foreign_key", field_r2.foreign_key)("divClass", field_r2.style == null ? null : field_r2.style.divInput)("inputClass", field_r2.style == null ? null : field_r2.style.input)("labelClass", field_r2.style == null ? null : field_r2.style.label)("apiUrl", field_r2.apiUrl)("formExtra", field_r2.formExtra);
    \u0275\u0275twoWayProperty("url", field_r2.value)("valid", field_r2.valid);
    \u0275\u0275property("showDownload", field_r2.showDownload)("sm", ctx_r2.sm);
  }
}
function GenericFormComponent_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dinamic-group-field", 8, 0);
    \u0275\u0275twoWayListener("validChange", function GenericFormComponent_For_4_Conditional_2_Template_app_dinamic_group_field_validChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.valid, $event) || (field_r2.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("validChange", function GenericFormComponent_For_4_Conditional_2_Template_app_dinamic_group_field_validChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setIsValid());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(field_r2.style);
    \u0275\u0275property("title", field_r2.title)("relationKey", field_r2.relationKey)("dataSource", ctx_r2.edit == null ? null : ctx_r2.edit[field_r2.relationKey ?? ""])("disabled", ctx_r2.validator == null ? null : ctx_r2.validator.disabled)("baseFields", field_r2.baseFields)("id", ctx_r2.edit == null ? null : ctx_r2.edit[ctx_r2.idKey])("apiUrl", field_r2.apiUrl)("foreign_key", field_r2.foreign_key)("deleteButton", field_r2.deleteButton)("addButton", field_r2.addButton);
    \u0275\u0275twoWayProperty("valid", field_r2.valid);
  }
}
function GenericFormComponent_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-orderable-list", 9);
    \u0275\u0275twoWayListener("valueChange", function GenericFormComponent_For_4_Conditional_3_Template_app_orderable_list_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.value, $event) || (field_r2.value = $event);
      return \u0275\u0275resetView($event);
    })("validChange", function GenericFormComponent_For_4_Conditional_3_Template_app_orderable_list_validChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.valid, $event) || (field_r2.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("validChange", function GenericFormComponent_For_4_Conditional_3_Template_app_orderable_list_validChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setIsValid());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", field_r2.title);
    \u0275\u0275twoWayProperty("value", field_r2.value);
    \u0275\u0275property("groupStyle", field_r2.style)("list", field_r2.orderableList)("upButton", field_r2.upButton)("downButton", field_r2.downButton);
    \u0275\u0275twoWayProperty("valid", field_r2.valid);
  }
}
function GenericFormComponent_For_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-map-field", 10);
    \u0275\u0275twoWayListener("latitudChange", function GenericFormComponent_For_4_Conditional_4_Template_app_map_field_latitudChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.latitud.value, $event) || (field_r2.latitud.value = $event);
      return \u0275\u0275resetView($event);
    })("longitudChange", function GenericFormComponent_For_4_Conditional_4_Template_app_map_field_longitudChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.longitud.value, $event) || (field_r2.longitud.value = $event);
      return \u0275\u0275resetView($event);
    })("validChange", function GenericFormComponent_For_4_Conditional_4_Template_app_map_field_validChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(field_r2.valid, $event) || (field_r2.valid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("hidden", field_r2.hidden)("title", field_r2.title);
    \u0275\u0275twoWayProperty("latitud", field_r2.latitud.value)("longitud", field_r2.longitud.value)("valid", field_r2.valid);
  }
}
function GenericFormComponent_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-form-field", 11);
    \u0275\u0275listener("fieldChange", function GenericFormComponent_For_4_Conditional_5_Template_app_form_field_fieldChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const field_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFieldChange($event, ctx_r2.form, field_r2));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const field_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap((field_r2.style == null ? null : field_r2.style.div) ?? ctx_r2.defaultInputDivClass);
    \u0275\u0275advance();
    \u0275\u0275property("field", field_r2)("sm", ctx_r2.sm);
  }
}
function GenericFormComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GenericFormComponent_For_4_Conditional_0_Template, 1, 5, "app-form-field-group", 2);
    \u0275\u0275conditionalCreate(1, GenericFormComponent_For_4_Conditional_1_Template, 2, 17, "div", 1);
    \u0275\u0275conditionalCreate(2, GenericFormComponent_For_4_Conditional_2_Template, 2, 13, "app-dinamic-group-field", 3);
    \u0275\u0275conditionalCreate(3, GenericFormComponent_For_4_Conditional_3_Template, 1, 7, "app-orderable-list", 4);
    \u0275\u0275conditionalCreate(4, GenericFormComponent_For_4_Conditional_4_Template, 1, 5, "app-map-field", 5);
    \u0275\u0275conditionalCreate(5, GenericFormComponent_For_4_Conditional_5_Template, 2, 4, "div", 1);
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.fieldTypes.isFormGroup(field_r2) && !field_r2.hidden ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.fieldTypes.isFileInput(field_r2) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.fieldTypes.isDinamicGroupField(field_r2) && !field_r2.hidden ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.fieldTypes.isOrderableList(field_r2) && !field_r2.hidden ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.fieldTypes.isMapField(field_r2) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.fieldTypes.isFormField(field_r2) && !field_r2.hidden ? 5 : -1);
  }
}
function GenericFormComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-button", 12);
    \u0275\u0275listener("clickButtonEvent", function GenericFormComponent_Conditional_5_Template_app_button_clickButtonEvent_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitData());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r2.rowSubmitButton == null ? null : ctx_r2.rowSubmitButton.style == null ? null : ctx_r2.rowSubmitButton.style.div) ?? "col-auto p-3 align-self-end");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r2.rowSubmitButton == null ? null : ctx_r2.rowSubmitButton.style);
    \u0275\u0275property("sm", ctx_r2.sm)("text", ctx_r2.rowSubmitButton == null ? null : ctx_r2.rowSubmitButton.text)("disabled", !ctx_r2.valid);
  }
}
function GenericFormComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-button", 13);
    \u0275\u0275listener("clickButtonEvent", function GenericFormComponent_Conditional_6_Template_app_button_clickButtonEvent_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteData());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r2.rowDeleteButton == null ? null : ctx_r2.rowDeleteButton.style == null ? null : ctx_r2.rowDeleteButton.style.div) ?? "col-auto p-3 align-self-end");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r2.rowDeleteButton == null ? null : ctx_r2.rowDeleteButton.style);
    \u0275\u0275property("text", ctx_r2.rowDeleteButton == null ? null : ctx_r2.rowDeleteButton.text)("disabled", !ctx_r2.valid);
  }
}
function GenericFormComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-button", 13);
    \u0275\u0275listener("clickButtonEvent", function GenericFormComponent_Conditional_7_Template_app_button_clickButtonEvent_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.rowExtraEvent.emit());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r2.rowExtraButton == null ? null : ctx_r2.rowExtraButton.style == null ? null : ctx_r2.rowExtraButton.style.div) ?? "col-auto p-3 align-self-end");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r2.rowExtraButton == null ? null : ctx_r2.rowExtraButton.style);
    \u0275\u0275property("text", ctx_r2.rowExtraButton == null ? null : ctx_r2.rowExtraButton.text)("disabled", !ctx_r2.valid);
  }
}
function GenericFormComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 14)(2, "app-button", 12);
    \u0275\u0275listener("clickButtonEvent", function GenericFormComponent_Conditional_8_Template_app_button_clickButtonEvent_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitData());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15)(4, "small");
    \u0275\u0275text(5, "Los campos con ");
    \u0275\u0275elementStart(6, "span", 16);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " son obligatorios");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.rowButtonClass);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(7, _c1, ctx_r2.buttonClass));
    \u0275\u0275property("sm", ctx_r2.sm)("text", ctx_r2.submitText)("disabled", !ctx_r2.valid || ctx_r2.disabled);
  }
}
var _GenericFormComponent = class _GenericFormComponent {
  /**
   * Constructor for the `DynamicFormComponent`. Initializes dependencies.
   *
   * @param fieldTypes Service to handle form field types.
   * @param cdr ChangeDetectorRef to trigger change detection.
   * @param utils Utility service for miscellaneous helper functions.
   */
  constructor(fieldTypes, formService, toast, cdr, utils) {
    this.fieldTypes = fieldTypes;
    this.formService = formService;
    this.toast = toast;
    this.cdr = cdr;
    this.utils = utils;
    this.title = "";
    this.form = [];
    this.formChange = new EventEmitter();
    this.valuesChange = new EventEmitter();
    this.conditionals = [];
    this.updatedData = new EventEmitter();
    this.editChange = new EventEmitter();
    this.sm = false;
    this.defaultInputDivClass = "col-12 col-sm-6 col-md-4 p-3";
    this.defaultTitleClass = "h5 fw-bold";
    this.defaultBorderClass = "m-0 my-2 border border-primary";
    this.rowButtonClass = "row mt-1";
    this.submitText = "Guardar";
    this.buttonClass = "btn btn-primary";
    this.rowSubmit = false;
    this.rowSubmitButton = {
      style: {
        div: "col-auto p-3 align-self-end"
      },
      text: "Guardar"
    };
    this.rowDelete = false;
    this.rowDeleteButton = {
      style: {
        div: "col-auto p-3 align-self-end"
      },
      text: "Eliminar"
    };
    this.rowExtra = false;
    this.rowExtraButton = {
      style: {
        div: "col-auto p-3 align-self-end"
      },
      text: "Extra"
    };
    this.rowExtraEvent = new EventEmitter();
    this.valid = false;
    this.validChange = new EventEmitter();
    this.idKey = "id";
    this.formExtra = {};
    this.isolatedForm = true;
    this.localForm = false;
    this.disabled = false;
    this.isBotonGuardarEnabled = true;
    this.operatorFunctions = {
      "==": (a, b) => a == b,
      "===": (a, b) => a === b,
      "!=": (a, b) => a != b,
      "!==": (a, b) => a !== b,
      "<": (a, b) => a < b,
      "<=": (a, b) => a <= b,
      ">": (a, b) => a > b,
      ">=": (a, b) => a >= b
    };
  }
  /**
   * Lifecycle hook that is called when the component is initialized.
   * Logs the initial form data.
   */
  ngOnInit() {
    console.log(this.form);
  }
  /**
   * Lifecycle hook that is called when input properties change.
   *
   * @param changes An object containing changes to input properties.
   */
  ngOnChanges(changes) {
    if (changes["edit"] && changes["edit"].previousValue !== this.edit && this.edit) {
      this.setValuesFromEdit();
      this.setOriginalValuesFromEdit();
    }
    if (changes["editFill"] && this.editFill) {
      console.info(this.editFill);
      this.fillEdit();
    }
    if (changes["form"] && this.isolatedForm) {
      this.form = this.utils.copyOf(this.form);
    }
    if (changes["conditionals"] || changes["edit"]) {
      this.checkConditionals();
    }
    if (changes["validator"] || changes["form"] || changes["disabled"]) {
      this.setGlobalValidator();
    }
  }
  fillEdit() {
    if (!this.editFill || !this.edit)
      return;
    this.edit = this.parsedData();
    for (const key of Object.keys(this.editFill)) {
      this.edit[key] = this.editFill[key];
    }
    this.setValuesFromEdit();
  }
  /**
   * Evaluates the visibility and disabled state of form elements based on conditional logic.
   *
   * This function iterates through the form and applies the conditional rules for hiding or disabling fields.
   * It checks if there are any conditionals defined and applies them accordingly to the form elements.
   * It also updates the `hidden` and `validator.disabled` properties of the fields based on the conditional logic.
   */
  checkConditionals() {
    if (!this.conditionals.length)
      return;
    for (const formElement of this.form) {
      formElement.hidden = this.isHidden(formElement);
      if (this.fieldTypes.isFormGroup(formElement)) {
        formElement.hidden = this.isGroupHidden(formElement);
        for (const field of formElement.fields) {
          field.hidden = this.isHidden(field);
          field.validator = __spreadProps(__spreadValues({}, field.validator ?? {}), {
            disabled: this.disabled === true ? true : this.isDisabled(field)
          });
          field.valid = true;
        }
      }
      if (this.fieldTypes.isDinamicGroupField(formElement)) {
        formElement.hidden = this.isGroupHidden(formElement);
      }
    }
  }
  /**
   * Determines if a form group or dynamic group field should be hidden based on conditional logic.
   *
   * This function checks if there is a conditional rule targeting the group's title. If such a rule exists,
   * it evaluates whether the group should be hidden by comparing the value of the referenced field with the
   * conditional value. If the values match, the group is hidden.
   *
   * @param formGroup - The form group or dynamic group field to evaluate.
   * @returns `true` if the group should be hidden, `false` otherwise.
   */
  isGroupHidden(formGroup) {
    const conditional = this.findConditionalForGroup(formGroup);
    if (!conditional)
      return false;
    const referencedField = this.getReferencedField(conditional);
    if (!referencedField)
      return false;
    return this.shouldHideGroup(conditional, referencedField);
  }
  /**
   * Finds the conditional rule targeting the group's title.
   *
   * @param formGroup - The form group or dynamic group field to evaluate.
   * @returns The conditional rule if found, otherwise `undefined`.
   */
  findConditionalForGroup(formGroup) {
    return this.conditionals.find((cond) => cond.target === formGroup.title);
  }
  /**
   * Retrieves the referenced field in the form based on the conditional rule.
   *
   * @param conditional - The conditional rule to evaluate.
   * @returns The referenced form field if found, otherwise `undefined`.
   */
  getReferencedField(conditional) {
    return this.fieldTypes.getFormFieldByKey(this.form, conditional.key);
  }
  /**
   * Determines if the group should be hidden based on the conditional rule and the referenced field's value.
   *
   * @param conditional - The conditional rule to evaluate.
   * @param referencedField - The referenced form field.
   * @returns `true` if the group should be hidden, `false` otherwise.
   */
  shouldHideGroup(conditional, referencedField) {
    return referencedField.value === conditional.value;
  }
  /**
   * Determines if a field should be disabled based on conditional logic.
   *
   * This function checks the conditionals for a specific field and evaluates whether the field
   * should be disabled. If the field is disabled, its value is cleared. It uses an evaluator function
   * to compare the field's value with the conditional value.
   *
   * @param field - The form field to evaluate.
   * @returns `true` if the field should be disabled, `false` otherwise.
   */
  isDisabled(field) {
    if (!this.conditionals.length)
      return false;
    if (!field.key)
      return false;
    const conditional = this.conditionals.find((cond) => cond.target === field.key);
    if (!conditional)
      return false;
    const main = this.fieldTypes.getFormFieldByKey(this.form, conditional.key);
    if (main) {
      const evaluator = this.operatorFunctions[conditional.operator];
      if (conditional.targetAction === "disabled") {
        const value = evaluator(conditional.value, main.value);
        if (value && this.fieldTypes.isFormField(field)) {
          field.value = void 0;
        }
        return value;
      }
    }
    return false;
  }
  /**
   * Determines if a field should be hidden based on conditional logic.
   *
   * This function checks the conditionals for a specific field and evaluates whether the field
   * should be hidden. It uses an evaluator function to compare the field's value with the conditional value.
   *
   * @param field - The form field to evaluate.
   * @returns `true` if the field should be hidden, `false` otherwise.
   */
  isHidden(field) {
    if (!this.conditionals.length)
      return false;
    if (!field.key)
      return false;
    const conditional = this.conditionals.find((cond) => cond.target === field.key);
    if (!conditional)
      return false;
    const main = this.fieldTypes.getFormFieldByKey(this.form, conditional.key);
    if (main) {
      const evaluator = this.operatorFunctions[conditional.operator];
      if (conditional.targetAction === "hide") {
        return evaluator(conditional.value, main.value);
      }
      if (conditional.targetAction === "unhide") {
        return !evaluator(conditional.value, main.value);
      }
    }
    return false;
  }
  /**
   * Sets the global validator for all form fields.
   *
   * This function iterates through the form and assigns a global validator to each form field,
   * form group, and dynamic group field. If a field already has its own validator, the global
   * validator is merged with the existing one. If the field doesn't have a validator, the global
   * validator is assigned as the field's validator.
   */
  setGlobalValidator() {
    this.form.forEach((field) => {
      if (this.fieldTypes.isFormGroup(field)) {
        field.fields.forEach((innerField) => {
          innerField.validator = __spreadValues(__spreadValues(__spreadValues({}, this.validator), field.validator), innerField.validator);
          if (this.disabled) {
            innerField.validator.disabled = true;
          }
        });
      }
      if (this.fieldTypes.isFormField(field)) {
        if (field.validator) {
          field.validator = __spreadValues(__spreadValues({}, this.validator), field.validator);
        } else {
          field.validator = this.validator;
        }
        if (!field.validator) {
          field.validator = {};
        }
        if (this.disabled) {
          field.validator.disabled = true;
        }
      }
      if (this.fieldTypes.isDinamicGroupField(field)) {
        field.baseFields.forEach((innerField) => {
          if (innerField.validator) {
            innerField.validator = __spreadValues(__spreadValues({}, this.validator), innerField.validator);
          } else {
            innerField.validator = this.validator;
          }
          if (!innerField.validator) {
            innerField.validator = {};
          }
          if (this.disabled) {
            innerField.validator.disabled = true;
          }
        });
      }
    });
  }
  /**
   * Resets the form by clearing the values and setting all fields as valid.
   *
   * This function iterates through the form and clears the values of each field, while also setting their validity to true.
   * It handles both form groups and individual form fields, ensuring that all fields are reset correctly.
   * It then emits the updated form state and triggers a validity change event.
   */
  cleanForm() {
    for (const field of this.form) {
      if (this.fieldTypes.isFormGroup(field)) {
        field.fields.forEach((innerField) => {
          innerField.value = void 0;
          innerField.valid = true;
        });
      } else if (this.fieldTypes.isFormField(field)) {
        field.value = void 0;
        field.valid = true;
      }
    }
    console.log("EDITADO EDIT", this.form);
    this.validChange.emit(true);
    this.formChange.emit(this.form);
  }
  /**
   * Sets the form values by parsing the data and emitting a values change event.
   *
   * This function parses the form data and assigns it to the `values` property. It then emits a change event
   * to notify other components about the updated values.
   */
  setValues() {
    this.values = this.parsedData();
    this.valuesChange.emit(this.parsedData());
  }
  /**
   * Sets the form values based on the `edit` object.
   *
   * This function iterates over the form fields and assigns the corresponding values from the `edit` object.
   * If `edit` is not defined, it cleans the form. It also triggers validity checks and emits change events.
   */
  setValuesFromEdit() {
    if (!this.edit) {
      this.cleanForm();
      return;
    }
    this.formService.setValuesFromModel(this.form, this.edit);
    console.log("EDITADO EDIT", this.form);
    this.validChange.emit(true);
    this.formChange.emit(this.form);
  }
  /**
   * Sets the original values of the form based on the `edit` object.
   *
   * This function creates a deep copy of the `edit` object and assigns it to `originalEdit`.
   * The `originalEdit` property is used to store the initial state of the form when editing an existing record.
   * If the `edit` object is not defined, the function exits early without making any changes.
   *
   * @returns {void}
   */
  setOriginalValuesFromEdit() {
    if (!this.edit)
      return;
    this.originalEdit = this.utils.copyOf(this.edit);
  }
  /**
   * Handles the change of a form field value and updates the form.
   *
   * This function updates the specific field in the form and emits the updated form.
   * It also triggers additional actions like setting values, checking conditionals, and validating the form.
   *
   * @param updatedField The updated form field.
   * @param form The form to which the field belongs.
   * @param field The original form field that was updated.
   */
  onFieldChange(updatedField, form, field) {
    const fieldIndex = form.indexOf(field);
    if (fieldIndex > -1) {
      form[fieldIndex] = updatedField;
      this.formChange.emit(this.form);
      this.setValues();
      this.checkConditionals();
      this.setIsValid();
    }
  }
  /**
   * Updates the form's validity status, emits changes, and triggers additional actions.
   *
   * This function sets the form's validity based on the result of `isValidForm()`, emits the validity change event,
   * updates form values, checks conditionals, and triggers change detection.
   */
  setIsValid() {
    this.valid = this.isValidForm();
    this.validChange.emit(this.valid);
    this.setValues();
    this.checkConditionals();
    this.cdr.detectChanges();
  }
  /**
   * Checks if all fields in the form are valid.
   *
   * @returns {boolean} `true` if all fields are valid, otherwise `false`.
   */
  isValidForm() {
    return this.form.every((field) => field.valid);
  }
  /**
   * Deletes the current form data and triggers necessary actions.
   *
   * If the current edit record exists and has a valid ID, this function calls `switch` on the controller to handle the deletion,
   * emits an undefined value for the edit change, and cleans up the form.
   */
  deleteData() {
    return __async(this, null, function* () {
      if (!this.edit || !this.edit[this.idKey])
        return;
      yield this.controller.switch(this.edit[this.idKey]);
      this.editChange.emit(void 0);
      this.cleanForm();
    });
  }
  /**
   * Submits data based on whether the entity is being edited or created as a new record.
   *
   * This function first checks if the entity is being edited by verifying the presence of an `id` in the `edit` object.
   * If editing, it updates the existing record by calling the `update` method of the controller with the entity's `id`
   * and the parsed data. Upon successful update, it submits dynamic forms and updates the `edit` object with the new data.
   * If the entity is not being edited, it creates a new record by calling the `new` method of the controller with the parsed data,
   * waits for all dynamic forms to save, and then emits the updated `edit` object.
   *
   * @returns {Promise<void>} A promise that resolves once the data is successfully submitted.
   */
  submitData() {
    return __async(this, null, function* () {
      if (this.edit && this.edit[this.idKey]) {
        const id = this.edit[this.idKey];
        const dataToUpdate = this.toUpdateParsedData();
        if (!this.isSomethingToUpdate()) {
          this.toast.show({
            title: "Informaci\xF3n",
            message: "No hay nada que actualizar."
          });
          return;
        }
        const res = yield this.controller.update(id, dataToUpdate);
        if (res.status) {
          yield this.submitDinamycForms();
          this.edit = this.parsedData();
          this.setOriginalValuesFromEdit();
          this.updatedData.emit(dataToUpdate);
          this.editChange.emit(this.edit);
        }
        return;
      }
      if (this.localForm) {
        this.edit = this.parsedData();
        this.editChange.emit(this.parsedData());
        return;
      }
      this.edit = yield this.controller.new(this.parsedData());
      yield this.untilAllDinamicFormsSaves();
      this.editChange.emit(this.edit);
    });
  }
  /**
   * Determines if there are any changes to update in the form data.
   *
   * This function checks if there are any fields in the form that have been modified compared to the original data.
   * It uses the `toUpdateParsedData` method to generate a partial object containing only the fields that have changed.
   * If the resulting object has any keys, it means there are changes to update.
   *
   * @returns {boolean} `true` if there are changes to update, otherwise `false`.
   */
  isSomethingToUpdate() {
    const dataToUpdate = this.toUpdateParsedData();
    const keys = Object.keys(dataToUpdate);
    return keys.length > 0;
  }
  /**
   * Generates a partial object containing only the fields that have changed between the current form data and the original edit data.
   *
   * This function compares the current form data (`parsedData`) with the original edit data (`originalEdit`). It creates a new object
   * (`dataToUpdate`) that includes only the fields where the values differ between the two datasets. This is useful for optimizing
   * updates by sending only the changed fields to the backend, reducing unnecessary data transfer.
   *
   * @template T The type of the form data.
   * @returns {Partial<T & GenericRecord>} A partial object containing only the fields that have changed.
   */
  toUpdateParsedData() {
    const currentData = this.parsedData();
    if (!this.originalEdit)
      return currentData;
    const dataToUpdate = {};
    for (const key of Object.keys(currentData)) {
      if (currentData[key] != this.originalEdit[key] && currentData[key] !== void 0) {
        dataToUpdate[key] = currentData[key];
      }
    }
    return dataToUpdate;
  }
  /**
   * Waits for all dynamic forms to finish saving.
   *
   * This function checks if there are dynamic forms to process. If they exist, it creates an array of observables
   * from the `saveCompleted$` property of each dynamic form component. Then, it combines all these observables and waits
   * for all of them to emit a value, indicating that the save operation is complete for all forms.
   *
   * @returns {Promise<void>} A promise that resolves once all dynamic forms have completed saving.
   */
  untilAllDinamicFormsSaves() {
    return __async(this, null, function* () {
      if (!this.dinamycForms)
        return;
      if (this.dinamycForms.length == 0)
        return;
      const saveCompletedObservables = this.dinamycForms.map((formComponent) => formComponent.saveCompleted$);
      yield firstValueFrom(combineLatest(saveCompletedObservables));
    });
  }
  /**
   * Submits all dynamic forms by saving their rows.
   *
   * This function checks if dynamic forms exist and, if so, uses `Promise.all` to wait for all save operations
   * of the form rows to complete. Each dynamic form's `saveLocalFormRows` method is called to initiate the save process.
   *
   * @returns {Promise<void>} A promise that resolves once all dynamic forms have completed their save operations.
   */
  submitDinamycForms() {
    return __async(this, null, function* () {
      if (this.dinamycForms) {
        yield Promise.all(this.dinamycForms.map((df) => df.saveLocalFormRows()));
      }
    });
  }
  /**
   * Parses the form data and returns it as an object of type T.
   *
   * This function processes the form, extracting values from basic input fields, form groups, extra fields, and map fields.
   * It then compiles these values into a `formData` object and returns it as the specified type T.
   * If an `edit` object exists, its `id` is included in the returned data.
   *
   * @template T The type to which the form data is mapped.
   * @returns {T} An object containing the parsed form data.
   */
  parsedData() {
    const formData = {};
    const fields = this.form.filter((field) => this.fieldTypes.isBasicInput(field));
    this.form.filter((field) => this.fieldTypes.isFormGroup(field)).forEach((group) => {
      group.fields.forEach((field) => {
        fields.push({
          key: field.key,
          value: field.value?.toString()
        });
      });
    });
    for (const field of fields) {
      formData[field.key] = field.value;
    }
    if (this.edit && this.edit[this.idKey]) {
      formData[this.idKey] = this.edit[this.idKey];
    }
    for (const key of Object.keys(this.formExtra)) {
      formData[key] = this.formExtra[key];
    }
    const maps = this.form.filter((field) => this.fieldTypes.isMapField(field) && !field.hidden);
    maps.forEach((map) => {
      formData[map.latitud.key] = map.latitud.value;
      formData[map.longitud.key] = map.longitud.value;
    });
    return formData;
  }
  /**
   * Returns a list of invalid field labels from the form.
   *
   * This function iterates through all the fields in the form, checking whether they are valid. If any field is invalid,
   * it adds the field's label (or a formatted version of the field's key if no label exists) to the `invalidFields` array.
   * It checks for regular form fields, form groups, and dynamic group fields.
   *
   * @returns {string[]} An array of labels for the invalid fields in the form.
   */
  invalidFields() {
    const invalidFields = [];
    this.form.forEach((field) => {
      if (this.fieldTypes.isFormField(field) && !field.valid) {
        invalidFields.push(this.fieldLabel(field));
      }
      if (this.fieldTypes.isFormGroup(field)) {
        field.fields.forEach((innerField) => {
          if (!innerField.valid)
            invalidFields.push(this.fieldLabel(innerField));
        });
      }
      if (this.fieldTypes.isDinamicGroupField(field)) {
        field.baseFields.forEach((innerField) => {
          if (!innerField.valid)
            invalidFields.push(this.fieldLabel(innerField));
        });
      }
    });
    return invalidFields;
  }
  /**
   * Retrieves the label for a given field. If no label is provided, it returns a formatted version of the field's key.
   *
   * The label is either the field's `label` property or the field's `key` property formatted by replacing underscores with spaces and converting to lowercase.
   *
   * @param {FormField} field The field for which to retrieve the label.
   * @returns {string} The label of the field, or a formatted version of the key if no label exists.
   */
  fieldLabel(field) {
    return field.label ?? field.key.replaceAll("_", " ").toLowerCase();
  }
};
_GenericFormComponent.\u0275fac = function GenericFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GenericFormComponent)(\u0275\u0275directiveInject(FieldTypesService), \u0275\u0275directiveInject(GenericFormService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UtilsService));
};
_GenericFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenericFormComponent, selectors: [["app-generic-form"]], viewQuery: function GenericFormComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dinamycForms = _t);
  }
}, inputs: { controller: "controller", title: "title", form: "form", values: "values", validator: "validator", conditionals: "conditionals", edit: "edit", editFill: "editFill", originalEdit: "originalEdit", sm: "sm", defaultInputDivClass: "defaultInputDivClass", defaultTitleClass: "defaultTitleClass", defaultBorderClass: "defaultBorderClass", rowButtonClass: "rowButtonClass", submitText: "submitText", buttonClass: "buttonClass", rowClass: "rowClass", rowSubmit: "rowSubmit", rowSubmitButton: "rowSubmitButton", rowDelete: "rowDelete", rowDeleteButton: "rowDeleteButton", rowExtra: "rowExtra", rowExtraButton: "rowExtraButton", valid: "valid", idKey: "idKey", formExtra: "formExtra", isolatedForm: "isolatedForm", localForm: "localForm", disabled: "disabled", isBotonGuardarEnabled: "isBotonGuardarEnabled" }, outputs: { formChange: "formChange", valuesChange: "valuesChange", updatedData: "updatedData", editChange: "editChange", rowExtraEvent: "rowExtraEvent", validChange: "validChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 9, vars: 7, consts: [["dinamycForm", ""], [3, "class"], [3, "formGroup", "defaultBorderClass", "defaultTitleClass", "defaultInputDivClass", "valid"], [3, "title", "style", "relationKey", "dataSource", "disabled", "baseFields", "id", "apiUrl", "foreign_key", "deleteButton", "addButton", "valid"], [3, "title", "value", "groupStyle", "list", "upButton", "downButton", "valid"], [3, "hidden", "title", "latitud", "longitud", "valid"], [3, "validChange", "formGroup", "defaultBorderClass", "defaultTitleClass", "defaultInputDivClass", "valid"], [3, "urlChange", "validChange", "accept", "label", "multiple", "key", "id", "foreign_key", "divClass", "inputClass", "labelClass", "apiUrl", "formExtra", "url", "valid", "showDownload", "sm"], [3, "validChange", "title", "relationKey", "dataSource", "disabled", "baseFields", "id", "apiUrl", "foreign_key", "deleteButton", "addButton", "valid"], [3, "valueChange", "validChange", "title", "value", "groupStyle", "list", "upButton", "downButton", "valid"], [3, "latitudChange", "longitudChange", "validChange", "hidden", "title", "latitud", "longitud", "valid"], [3, "fieldChange", "field", "sm"], [3, "clickButtonEvent", "sm", "text", "disabled"], [3, "clickButtonEvent", "text", "disabled"], [1, "col", "text-center"], [1, "text-end"], [1, "text-danger", "fw-bold"]], template: function GenericFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275repeaterCreate(3, GenericFormComponent_For_4_Template, 6, 6, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(5, GenericFormComponent_Conditional_5_Template, 2, 7, "div", 1);
    \u0275\u0275conditionalCreate(6, GenericFormComponent_Conditional_6_Template, 2, 6, "div", 1);
    \u0275\u0275conditionalCreate(7, GenericFormComponent_Conditional_7_Template, 2, 6, "div", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, GenericFormComponent_Conditional_8_Template, 9, 9, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx.rowClass ?? "row justify-content-evenly mt-2");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.rowSubmit && ctx.isBotonGuardarEnabled ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.rowDelete && ctx.edit ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.rowExtra && ctx.edit ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.length > 0 && !ctx.rowSubmit ? 8 : -1);
  }
}, dependencies: [
  ButtonComponent,
  FormFieldComponent,
  DinamicGroupFieldComponent,
  OrderableListComponent,
  FormFieldGroupComponent,
  MapFieldComponent,
  FileInputComponent
], encapsulation: 2 });
var GenericFormComponent = _GenericFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenericFormComponent, [{
    type: Component,
    args: [{ selector: "app-generic-form", imports: [
      ButtonComponent,
      FormFieldComponent,
      DinamicGroupFieldComponent,
      OrderableListComponent,
      FormFieldGroupComponent,
      MapFieldComponent,
      FileInputComponent
    ], template: `<h3>{{title}}</h3>
<div [class]="rowClass??'row justify-content-evenly mt-2'">
  @for (field of form; track field) {        
    @if (fieldTypes.isFormGroup(field) && !field.hidden) {      
      <app-form-field-group
        [formGroup]="field"
        [defaultBorderClass]="defaultBorderClass"
        [defaultTitleClass]="defaultTitleClass"
        [defaultInputDivClass]="defaultInputDivClass"
        [(valid)]="field.valid"
        (validChange)="setIsValid()"
        />
    }
    @if (fieldTypes.isFileInput(field)) {
      <div
        [class]="field.style?.div??'col-12 p-3 px-5 align-self-end'">        
        <app-file-input
          [accept]="field.accept"
          [label]="field.label"
          [multiple]="field.multiple"
          [key]="field.fileKey"
          [id]="edit?.[idKey]"
          [foreign_key]="field.foreign_key"
          [divClass]="field.style?.divInput"
          [inputClass]="field.style?.input"
          [labelClass]="field.style?.label"
          [apiUrl]="field.apiUrl"
          [formExtra]="field.formExtra"
          [(url)]="field.value"
          [(valid)]="field.valid"
          [showDownload]="field.showDownload"
          [sm]="sm"
          />
      </div>
    }
    @if (fieldTypes.isDinamicGroupField(field) && !field.hidden) {                       
      <app-dinamic-group-field
        #dinamycForm
        [title]="field.title"
        [style]="field.style"
        [relationKey]="field.relationKey"
        [dataSource]="edit?.[field.relationKey??'']"
        [disabled]="validator?.disabled"
        [baseFields]="field.baseFields"
        [id]="edit?.[idKey]"
        [apiUrl]="field.apiUrl"
        [foreign_key]="field.foreign_key"
        [deleteButton]="field.deleteButton"
        [addButton]="field.addButton"
        [(valid)]="field.valid"
        (validChange)="setIsValid()"        
        />
    }
    @if (fieldTypes.isOrderableList(field) && !field.hidden) {      
      <app-orderable-list
        [title]="field.title"
        [(value)]="field.value"
        [groupStyle]="field.style"
        [list]="field.orderableList"
        [upButton]="field.upButton"
        [downButton]="field.downButton"
        [(valid)]="field.valid"
        (validChange)="setIsValid()"
        />
    }
    @if (fieldTypes.isMapField(field)) {      
      <app-map-field
        [hidden]="field.hidden"
        [title]="field.title"
        [(latitud)]="field.latitud.value"
        [(longitud)]="field.longitud.value"
        [(valid)]="field.valid"
        />
    }
    @if (fieldTypes.isFormField(field) && !field.hidden) {
      <div
        [class]="field.style?.div??defaultInputDivClass"
        >        
        <app-form-field
          [field]="field"
          [sm]="sm"
          (fieldChange)="onFieldChange($event,this.form, field)"
          />
      </div>
    }
  }
  @if (rowSubmit && isBotonGuardarEnabled) {    
    <div [class]="rowSubmitButton?.style?.div??'col-auto p-3 align-self-end'">
      <app-button [style]="rowSubmitButton?.style" [sm]="sm" [text]="rowSubmitButton?.text" (clickButtonEvent)="submitData()" [disabled]="!valid" />
    </div>
  }
  @if (rowDelete && edit) {    
    <div [class]="rowDeleteButton?.style?.div??'col-auto p-3 align-self-end'">
      <app-button [style]="rowDeleteButton?.style" [text]="rowDeleteButton?.text" (clickButtonEvent)="deleteData()" [disabled]="!valid" />
    </div>
  }
  @if (rowExtra && edit) {    
    <div [class]="rowExtraButton?.style?.div??'col-auto p-3 align-self-end'">
      <app-button [style]="rowExtraButton?.style" [text]="rowExtraButton?.text" (clickButtonEvent)="rowExtraEvent.emit()" [disabled]="!valid" />
    </div>
  }
</div>
@if (form.length>0 && !rowSubmit) {  
  <div [class]="rowButtonClass">
    <div class="col text-center">
      <app-button [style]="{button:buttonClass}" [sm]="sm" [text]="submitText" (clickButtonEvent)="submitData()" [disabled]="!valid || disabled" />
      <p class="text-end">
        <small>Los campos con <span class="text-danger fw-bold">*</span> son obligatorios</small>
      </p>
    </div>
  </div>
}` }]
  }], () => [{ type: FieldTypesService }, { type: GenericFormService }, { type: ToastService }, { type: ChangeDetectorRef }, { type: UtilsService }], { controller: [{
    type: Input
  }], title: [{
    type: Input
  }], form: [{
    type: Input
  }], formChange: [{
    type: Output
  }], values: [{
    type: Input
  }], valuesChange: [{
    type: Output
  }], validator: [{
    type: Input
  }], conditionals: [{
    type: Input
  }], edit: [{
    type: Input
  }], editFill: [{
    type: Input
  }], originalEdit: [{
    type: Input
  }], updatedData: [{
    type: Output
  }], editChange: [{
    type: Output
  }], sm: [{
    type: Input
  }], defaultInputDivClass: [{
    type: Input
  }], defaultTitleClass: [{
    type: Input
  }], defaultBorderClass: [{
    type: Input
  }], rowButtonClass: [{
    type: Input
  }], submitText: [{
    type: Input
  }], buttonClass: [{
    type: Input
  }], rowClass: [{
    type: Input
  }], rowSubmit: [{
    type: Input
  }], rowSubmitButton: [{
    type: Input
  }], rowDelete: [{
    type: Input
  }], rowDeleteButton: [{
    type: Input
  }], rowExtra: [{
    type: Input
  }], rowExtraButton: [{
    type: Input
  }], rowExtraEvent: [{
    type: Output
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }], idKey: [{
    type: Input
  }], formExtra: [{
    type: Input
  }], isolatedForm: [{
    type: Input
  }], localForm: [{
    type: Input
  }], disabled: [{
    type: Input
  }], isBotonGuardarEnabled: [{
    type: Input
  }], dinamycForms: [{
    type: ViewChildren,
    args: ["dinamycForm"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenericFormComponent, { className: "GenericFormComponent", filePath: "src/app/shared/generic-form/generic-form.component.ts", lineNumber: 65 });
})();

export {
  GenericFormService,
  GenericFormComponent
};
//# sourceMappingURL=chunk-OVQMISGM.js.map
