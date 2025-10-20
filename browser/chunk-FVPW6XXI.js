import {
  ApiServiceService,
  CacheService
} from "./chunk-7VPVFOGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectMultipleControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  CommonModule,
  UpperCasePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Pipe,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
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

// src/app/pipes/titlecase.pipe.ts
var _TitlecasePipe = class _TitlecasePipe {
  transform(value, ...args) {
    if (!value)
      return "N/A";
    if (value == "id")
      return "Folio";
    if (value == "created_at")
      return "Creado En";
    if (value == "updated_at")
      return "Actualizado En";
    if (value == "deleted_at")
      return "Eliminado En";
    if (value == "usuarios")
      return "Creado Por";
    if (typeof value == "number")
      value = value.toString();
    if (value.includes(".")) {
      const keys = value.split(".");
      if (keys.length > 1) {
        const word = keys[keys.length - 2];
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    }
    return value.toLowerCase().replaceAll("_", " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
};
_TitlecasePipe.\u0275fac = function TitlecasePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TitlecasePipe)();
};
_TitlecasePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "titlecase", type: _TitlecasePipe, pure: true });
var TitlecasePipe = _TitlecasePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitlecasePipe, [{
    type: Pipe,
    args: [{
      name: "titlecase",
      standalone: true
    }]
  }], null, null);
})();

// src/app/shared/generic-form/autocomplete-field/autocomplete-field.component.ts
var _c0 = ["noParte"];
var _c1 = ["inputModel"];
function AutocompleteFieldComponent_Conditional_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AutocompleteFieldComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AutocompleteFieldComponent_Conditional_1_Conditional_1_Conditional_2_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r1.style == null ? null : ctx_r1.style.label) ?? "input-group-text");
    \u0275\u0275classProp("text-s", ctx_r1.sm);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.validator == null ? null : ctx_r1.validator.required) ? 2 : -1);
  }
}
function AutocompleteFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, AutocompleteFieldComponent_Conditional_1_Conditional_1_Template, 3, 6, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.label ? 1 : -1);
  }
}
function AutocompleteFieldComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function AutocompleteFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AutocompleteFieldComponent_Conditional_3_Conditional_2_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r1.style == null ? null : ctx_r1.style.label) ?? "fw-bold ps-1");
    \u0275\u0275classProp("text-s", ctx_r1.sm);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.validator == null ? null : ctx_r1.validator.required) ? 2 : -1);
  }
}
function AutocompleteFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", "El campo " + (ctx_r1.label == null ? null : ctx_r1.label.toLowerCase()) + " es obligatorio", " ");
  }
}
function AutocompleteFieldComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1, "No se encontraron registros.");
    \u0275\u0275elementEnd();
  }
}
function AutocompleteFieldComponent_Conditional_9_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, data_r4[ctx_r1.keyDetalle ?? "nombre"]), " ");
  }
}
function AutocompleteFieldComponent_Conditional_9_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.keyListValue(data_r4), " ");
  }
}
function AutocompleteFieldComponent_Conditional_9_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.function(data_r4), " ");
  }
}
function AutocompleteFieldComponent_Conditional_9_For_3_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detalle_r5 = ctx.$implicit;
    const data_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, detalle_r5), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r4[detalle_r5], " ");
  }
}
function AutocompleteFieldComponent_Conditional_9_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " (");
    \u0275\u0275repeaterCreate(1, AutocompleteFieldComponent_Conditional_9_For_3_Conditional_5_For_2_Template, 5, 4, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275text(3, ") ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.keyListDetalle);
  }
}
function AutocompleteFieldComponent_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AutocompleteFieldComponent_Conditional_9_For_3_Conditional_2_Template, 3, 3, "span");
    \u0275\u0275conditionalCreate(3, AutocompleteFieldComponent_Conditional_9_For_3_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(4, AutocompleteFieldComponent_Conditional_9_For_3_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(5, AutocompleteFieldComponent_Conditional_9_For_3_Conditional_5_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", data_r4[ctx_r1.keyList]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r4[ctx_r1.keyList], " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDetalle && data_r4[ctx_r1.keyDetalle ?? "nombre"] ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.keyListList && ctx_r1.keyListList.length > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.function ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.keyListDetalle && ctx_r1.keyListDetalle.length > 0 ? 5 : -1);
  }
}
function AutocompleteFieldComponent_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1, "Crear nuevo registro");
    \u0275\u0275elementEnd();
  }
}
function AutocompleteFieldComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 11);
    \u0275\u0275listener("ngModelChange", function AutocompleteFieldComponent_Conditional_9_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.value = $event[0]);
    })("change", function AutocompleteFieldComponent_Conditional_9_Template_select_change_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOptionSelected());
    });
    \u0275\u0275conditionalCreate(1, AutocompleteFieldComponent_Conditional_9_Conditional_1_Template, 2, 0, "option", 12);
    \u0275\u0275repeaterCreate(2, AutocompleteFieldComponent_Conditional_9_For_3_Template, 6, 6, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(4, AutocompleteFieldComponent_Conditional_9_Conditional_4_Template, 2, 0, "option", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("form-select-sm", ctx_r1.sm);
    \u0275\u0275property("size", ctx_r1.autoCompleteSize)("ngModel", ctx_r1.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dataSource.length == 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dataSource);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nuevoRedirect ? 4 : -1);
  }
}
function AutocompleteFieldComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 15);
    \u0275\u0275text(2, " No se encontraron registros. ");
    \u0275\u0275elementEnd()();
  }
}
function AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.dataSource[i_r7][ctx_r1.keyDetalle ?? "nombre"]), " ");
  }
}
function AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.keyListValue(ctx_r1.dataSource[i_r7]), " ");
  }
}
function AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.function(ctx_r1.dataSource[i_r7]), " ");
  }
}
function AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const detalle_r8 = ctx.$implicit;
    const i_r7 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, detalle_r8), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.dataSource[i_r7][detalle_r8], " ");
  }
}
function AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " (");
    \u0275\u0275repeaterCreate(1, AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_5_For_2_Template, 5, 4, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275text(3, ") ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.keyListDetalle);
  }
}
function AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const i_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelected(ctx_r1.dataSource[i_r7][ctx_r1.keyList]));
    });
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_2_Template, 3, 3, "span");
    \u0275\u0275conditionalCreate(3, AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(4, AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(5, AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Conditional_5_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dataSource[i_r7][ctx_r1.keyList], " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showDetalle && ctx_r1.dataSource[i_r7][ctx_r1.keyDetalle ?? "nombre"] ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.keyListList && ctx_r1.keyListList.length > 0 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.function ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.keyListDetalle && ctx_r1.keyListDetalle.length > 0 ? 5 : -1);
  }
}
function AutocompleteFieldComponent_Conditional_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, AutocompleteFieldComponent_Conditional_10_For_3_Conditional_1_Template, 6, 5, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dataSource[i_r7] && ctx_r1.dataSource[i_r7][ctx_r1.keyList] ? 1 : -1);
  }
}
function AutocompleteFieldComponent_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 18);
    \u0275\u0275listener("click", function AutocompleteFieldComponent_Conditional_10_Conditional_4_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelected("nuevo"));
    });
    \u0275\u0275text(2, " Crear nuevo registro ");
    \u0275\u0275elementEnd()();
  }
}
function AutocompleteFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, AutocompleteFieldComponent_Conditional_10_Conditional_1_Template, 3, 0, "div", 1);
    \u0275\u0275repeaterCreate(2, AutocompleteFieldComponent_Conditional_10_For_3_Template, 2, 1, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(4, AutocompleteFieldComponent_Conditional_10_Conditional_4_Template, 3, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.dataSource.length == 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.listFromNumber(ctx_r1.autoCompleteSize));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nuevoRedirect ? 4 : -1);
  }
}
var _AutocompleteFieldComponent = class _AutocompleteFieldComponent {
  constructor(api, elRef, cache) {
    this.api = api;
    this.elRef = elRef;
    this.cache = cache;
    this.keyList = "id";
    this.keyListList = [];
    this.keyListDetalle = [];
    this.keyDetalle = "nombre";
    this.apiUrl = "";
    this.extraData = {
      conditionals: JSON.stringify([["deleted_at", "IS NULL", null]])
    };
    this.sm = false;
    this.showDetalle = true;
    this.inputGroup = false;
    this.errorFeedBack = "";
    this.valueInput = "";
    this.valueInputChange = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.valid = true;
    this.validChange = new EventEmitter();
    this.anyChange = new EventEmitter();
    this.relations = [];
    this.simpleSelect = false;
    this.expandedSelect = true;
    this.disabled = false;
    this.showAutoComplete = false;
    this.autoCompleteSize = 1;
    this.getKeys = [];
    this.dataSource = [];
    this.dataCopia = [];
  }
  handleClick(event) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.showAutoComplete) {
      this.showAutoComplete = false;
    }
  }
  showAutoCompleteList() {
    return __async(this, null, function* () {
      if (this.dataSource.length == 0) {
        yield this.getDataSource();
      }
      this.showAutoComplete = true;
    });
  }
  listFromNumber(n) {
    return [...Array(n + 1).keys()];
  }
  ngOnChanges(changes) {
    this.adjustAutoCompleteSize();
    if (changes["value"] && this.value !== changes["value"].previousValue && this.value) {
      this.onOptionSelected();
    }
    if (changes["extraData"]) {
    }
  }
  keyListValue(row) {
    if (!this.keyListList || (this.keyListList ?? []).length == 0)
      return "";
    let value = "";
    for (let i = 0; i < this.keyListList.length; i++) {
      const key = this.keyListList[i];
      if (row[key]) {
        value += " " + row[key];
      }
    }
    return value;
  }
  ngAfterViewInit() {
    this.setIsValid();
  }
  setIsValid() {
    this.setErrorFeedBack();
    this.valid = this.validator?.required ? !!this.value : true;
    this.validChange.emit(this.valid);
  }
  setErrorFeedBack() {
    if (this.validator?.required && this.inputModel.touched && !this.value) {
      this.errorFeedBack = "El campo " + this.label?.toLowerCase() + " es obligatorio";
    }
  }
  findOption() {
    return this.dataSource.find((item) => item[this.keyList] == this.value);
  }
  onOptionSelected(valueSelected) {
    return __async(this, null, function* () {
      if (valueSelected && valueSelected == this.value)
        return;
      if (valueSelected) {
        this.value = valueSelected;
        this.valueChange.emit(this.value);
      }
      if (!valueSelected) {
        valueSelected = this.value;
      }
      if (this.value == "nuevo" && this.nuevoRedirect) {
        window.open("/#/" + this.nuevoRedirect, "_blank");
        return;
      }
      if (!this.dataSource.length) {
        yield this.getDataSource();
      }
      let find = this.findOption();
      if (!find) {
        find = (yield firstValueFrom(this.api.get(this.apiUrl + "/" + this.value, {}, false))).data;
      }
      if (!find) {
        return;
      }
      this.showAutoComplete = false;
      this.valueInput = find[this.keyDetalle ?? "nombre"] ?? find[this.keyList];
      if (this.function) {
        this.valueInput = this.function(find);
      }
      this.valueInputChange.emit(this.valueInput);
      this.setIsValid();
      this.anyChange.emit();
    });
  }
  search_button() {
    this.buscar();
    let dato_detail = this.dataSource.find((dt) => dt[this.keyList] == this.valueInput);
  }
  adjustAutoCompleteSize() {
    this.autoCompleteSize = this.dataSource.length < 8 ? this.dataSource.length : 8;
    this.autoCompleteSize = this.autoCompleteSize > 0 ? this.autoCompleteSize : 1;
    if (this.nuevoRedirect) {
      this.autoCompleteSize++;
    }
  }
  getDataSource() {
    return __async(this, null, function* () {
      if (this.apiUrl) {
        const data = __spreadProps(__spreadValues({
          search: this.valueInput
        }, this.extraData), {
          relations: JSON.stringify(this.relations)
        });
        this.dataSource = (yield firstValueFrom(this.api.get(this.apiUrl, data, false))).data ?? [];
        if (this.getKeys.length == 0 && this.dataSource[0]) {
          this.getKeys = Object.keys(this.dataSource[0]);
        }
        this.anyChange.emit();
        this.adjustAutoCompleteSize();
      }
    });
  }
  buscar() {
    this.valueChange.emit(null);
    if (this.valueInput.length % 3 == 0) {
      if (this.apiUrl) {
        this.getDataSource();
      } else {
        this.busqueda_local();
      }
    }
  }
  busqueda_local() {
    if (this.dataCopia.length === 0) {
      this.dataCopia = this.copy(this.dataSource);
    }
    this.dataSource = this.dataCopia.filter((item) => item[this.keyList].includes(this.valueInput));
  }
  copy(data) {
    return JSON.parse(JSON.stringify(data));
  }
  focus_input() {
    this.noParteInput?.nativeElement.focus();
  }
};
_AutocompleteFieldComponent.\u0275fac = function AutocompleteFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutocompleteFieldComponent)(\u0275\u0275directiveInject(ApiServiceService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(CacheService));
};
_AutocompleteFieldComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutocompleteFieldComponent, selectors: [["app-autocomplete-field"]], viewQuery: function AutocompleteFieldComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.noParteInput = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputModel = _t.first);
  }
}, hostBindings: function AutocompleteFieldComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function AutocompleteFieldComponent_click_HostBindingHandler($event) {
      return ctx.handleClick($event);
    }, \u0275\u0275resolveDocument);
  }
}, inputs: { keyList: "keyList", keyListList: "keyListList", keyListDetalle: "keyListDetalle", keyDetalle: "keyDetalle", apiUrl: "apiUrl", extraData: "extraData", style: "style", sm: "sm", label: "label", placeholder: "placeholder", showDetalle: "showDetalle", nuevoRedirect: "nuevoRedirect", inputGroup: "inputGroup", validator: "validator", valueInput: "valueInput", value: "value", valid: "valid", relations: "relations", function: "function", simpleSelect: "simpleSelect", expandedSelect: "expandedSelect", disabled: "disabled", dataSource: "dataSource" }, outputs: { valueInputChange: "valueInputChange", valueChange: "valueChange", validChange: "validChange", anyChange: "anyChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 11, vars: 19, consts: [["noParte", "", "inputModel", "ngModel"], [1, "row"], [1, "col-auto", "pe-0"], [1, "col", "text-start"], [3, "class", "text-s"], [1, "input-container"], ["type", "text", "autocomplete", "off", 3, "focus", "ngModelChange", "keyup.enter", "input", "placeholder", "ngModel", "required", "disabled"], [1, "invalid-feedback"], ["multiple", "", 1, "form-select", "position-absolute", "shadow-sm", 3, "size", "form-select-sm", "ngModel"], [1, "container", "form-select-floating", "position-absolute", "shadow-sm", "bg-white", "border", "rounded"], [1, "fw-bolder", "text-danger"], ["multiple", "", 1, "form-select", "position-absolute", "shadow-sm", 3, "ngModelChange", "change", "size", "ngModel"], ["disabled", ""], [1, "hover-blue", 3, "value"], ["value", "nuevo", 1, "fw-bold", "pointer", "text-primary"], [1, "col-12", "disabled", "py-2"], [1, "col-12", "hover-blue", "border-bottom"], [1, "col-12", "hover-blue", "border-bottom", 3, "click"], [1, "col-12", "hover-blue", "border-bottom", "fw-bold", "pointer", "text-primary", 3, "click"]], template: function AutocompleteFieldComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, AutocompleteFieldComponent_Conditional_1_Template, 2, 1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275conditionalCreate(3, AutocompleteFieldComponent_Conditional_3_Template, 3, 6, "span", 4);
    \u0275\u0275elementStart(4, "div", 5)(5, "input", 6, 0);
    \u0275\u0275listener("focus", function AutocompleteFieldComponent_Template_input_focus_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showAutoCompleteList());
    });
    \u0275\u0275twoWayListener("ngModelChange", function AutocompleteFieldComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.valueInput, $event) || (ctx.valueInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AutocompleteFieldComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.valueInputChange.emit($event));
    })("keyup.enter", function AutocompleteFieldComponent_Template_input_keyup_enter_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.getDataSource());
    })("input", function AutocompleteFieldComponent_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.buscar());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AutocompleteFieldComponent_Conditional_8_Template, 2, 1, "div", 7);
    \u0275\u0275conditionalCreate(9, AutocompleteFieldComponent_Conditional_9_Template, 5, 6, "select", 8);
    \u0275\u0275conditionalCreate(10, AutocompleteFieldComponent_Conditional_10_Template, 5, 2, "div", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inputModel_r10 = \u0275\u0275reference(7);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.inputGroup ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("ps-0", ctx.inputGroup);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.label && !ctx.inputGroup ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.input) ?? "form-control");
    \u0275\u0275classProp("form-radius", ctx.inputGroup)("form-control-sm", ctx.sm)("is-invalid", inputModel_r10.touched && inputModel_r10.invalid);
    \u0275\u0275property("placeholder", ctx.placeholder ?? ctx.label ?? "");
    \u0275\u0275twoWayProperty("ngModel", ctx.valueInput);
    \u0275\u0275property("required", !!(ctx.validator == null ? null : ctx.validator.required))("disabled", ((ctx.validator == null ? null : ctx.validator.disabled) ?? false) || ctx.disabled);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.showAutoComplete ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showAutoComplete && !(ctx.validator == null ? null : ctx.validator.disabled) && ctx.simpleSelect ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showAutoComplete && !(ctx.validator == null ? null : ctx.validator.disabled) && ctx.expandedSelect ? 10 : -1);
  }
}, dependencies: [CommonModule, UpperCasePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectMultipleControlValueAccessor, NgControlStatus, RequiredValidator, NgModel, TitlecasePipe], styles: ["\n\n.input-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: inline-block;\n}\n.form-select[_ngcontent-%COMP%] {\n  right: 0;\n  z-index: 9;\n}\n.hover-blue[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  background-color: var(--secondary);\n}\n.hover-primary[_ngcontent-%COMP%]:hover {\n  color: var(--light);\n  background-color: var(--primary);\n}\n.input-group-text[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-radius[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-left-width: 0;\n}\n.form-select-floating[_ngcontent-%COMP%] {\n  cursor: pointer;\n  right: 0;\n  z-index: 9;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=autocomplete-field.component.css.map */"] });
var AutocompleteFieldComponent = _AutocompleteFieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteFieldComponent, [{
    type: Component,
    args: [{ selector: "app-autocomplete-field", imports: [
      CommonModule,
      FormsModule,
      TitlecasePipe
    ], template: `<div class="row">
  @if (inputGroup) {
    <div class="col-auto pe-0">
      @if (label) {
        <span [class]="style?.label??'input-group-text'" [class.text-s]="sm">
          {{label}}@if (validator?.required) {
          <span class="fw-bolder text-danger">*</span>
        }
      </span>
    }
  </div>
}
<div class="col text-start" [class.ps-0]="inputGroup">
  @if (label && !inputGroup) {
    <span [class]="style?.label??'fw-bold ps-1'" [class.text-s]="sm">
      {{label}}
      @if (validator?.required) {
        <span class="fw-bolder text-danger">*</span>
      }
    </span>
  }
  <div class="input-container">
    <input
      [class]="style?.input??'form-control'"
      [class.form-radius]="inputGroup"
      [class.form-control-sm]="sm"
      type="text"
      [placeholder]="placeholder??label??''"
      #noParte
      (focus)="showAutoCompleteList()"
      autocomplete="off"
      [(ngModel)]="valueInput"
      [class.is-invalid]="(inputModel.touched && inputModel.invalid)"
      #inputModel="ngModel"
      (ngModelChange)="valueInputChange.emit($event)"
      [required]="!!validator?.required"
      [disabled]="(validator?.disabled??false)||disabled"
      (keyup.enter)="getDataSource()"
      (input)="buscar()">
    @if (!showAutoComplete) {
      <div class="invalid-feedback">
        {{'El campo '+label?.toLowerCase()+' es obligatorio'}}
      </div>
    }
    @if (showAutoComplete && !validator?.disabled && simpleSelect) {
      <select class="form-select position-absolute shadow-sm" multiple
        [size]="autoCompleteSize" [class.form-select-sm]="sm"
        [ngModel]="value" (ngModelChange)="value=$event[0]" (change)="onOptionSelected()">
        @if (dataSource.length==0) {
          <option disabled>No se encontraron registros.</option>
        }
        @for (data of dataSource; track data) {
          <option class="hover-blue" [value]="data[keyList]">
            {{data[keyList]}}
            @if (showDetalle && data[keyDetalle??'nombre']) {
              <span>
                {{data[keyDetalle??'nombre']|uppercase}}
              </span>
            }
            @if (keyListList && keyListList.length>0) {
              <span>
                {{keyListValue(data)}}
              </span>
            }
            @if (function) {
              <span>
                {{function(data)}}
              </span>
            }
            @if (keyListDetalle && keyListDetalle.length>0) {
              (@for (detalle of keyListDetalle; track detalle) {
              <span>
                <b>{{detalle|titlecase}}:</b> {{data[detalle]}}
              </span>
              })
            }
          </option>
        }
        @if (nuevoRedirect) {
          <option value="nuevo" class="fw-bold pointer text-primary">Crear nuevo registro</option>
        }
      </select>
    }
    @if (showAutoComplete && !validator?.disabled && expandedSelect) {
      <div class="container form-select-floating position-absolute shadow-sm bg-white border rounded">
        @if (dataSource.length==0) {
          <div class="row">
            <div class="col-12 disabled py-2" >
              No se encontraron registros.
            </div>
          </div>
        }
        @for (i of listFromNumber(autoCompleteSize); track i) {
          <div class="row">
            @if (dataSource[i] && dataSource[i][keyList]) {
              <div class="col-12 hover-blue border-bottom" (click)="onOptionSelected(dataSource[i][keyList])">
                {{dataSource[i][keyList]}}
                @if (showDetalle && dataSource[i][keyDetalle??'nombre']) {
                  <span>
                    {{dataSource[i][keyDetalle??'nombre']|uppercase}}
                  </span>
                }
                @if (keyListList && keyListList.length>0) {
                  <span>
                    {{keyListValue(dataSource[i])}}
                  </span>
                }
                @if (function) {
                  <span>
                    {{function(dataSource[i])}}
                  </span>
                }
                @if (keyListDetalle && keyListDetalle.length>0) {
                  (@for (detalle of keyListDetalle; track detalle) {
                  <span>
                    <b>{{detalle|titlecase}}:</b> {{dataSource[i][detalle]}}
                  </span>
                  })
                }
              </div>
            }
          </div>
        }
        @if (nuevoRedirect) {
          <div class="row">
            <div class="col-12 hover-blue border-bottom fw-bold pointer text-primary" (click)="onOptionSelected('nuevo')">
              Crear nuevo registro
            </div>
          </div>
        }
      </div>
    }
  </div>
</div>
</div>`, styles: ["/* src/app/shared/generic-form/autocomplete-field/autocomplete-field.component.css */\n.input-container {\n  width: 100%;\n  position: relative;\n  display: inline-block;\n}\n.form-select {\n  right: 0;\n  z-index: 9;\n}\n.hover-blue:hover {\n  color: var(--primary);\n  background-color: var(--secondary);\n}\n.hover-primary:hover {\n  color: var(--light);\n  background-color: var(--primary);\n}\n.input-group-text {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-radius {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-left-width: 0;\n}\n.form-select-floating {\n  cursor: pointer;\n  right: 0;\n  z-index: 9;\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=autocomplete-field.component.css.map */\n"] }]
  }], () => [{ type: ApiServiceService }, { type: ElementRef }, { type: CacheService }], { noParteInput: [{
    type: ViewChild,
    args: ["noParte"]
  }], keyList: [{
    type: Input
  }], keyListList: [{
    type: Input
  }], keyListDetalle: [{
    type: Input
  }], keyDetalle: [{
    type: Input
  }], apiUrl: [{
    type: Input
  }], extraData: [{
    type: Input
  }], style: [{
    type: Input
  }], sm: [{
    type: Input
  }], label: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], showDetalle: [{
    type: Input
  }], nuevoRedirect: [{
    type: Input
  }], inputGroup: [{
    type: Input
  }], validator: [{
    type: Input
  }], valueInput: [{
    type: Input
  }], valueInputChange: [{
    type: Output
  }], value: [{
    type: Input
  }], valueChange: [{
    type: Output
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }], anyChange: [{
    type: Output
  }], inputModel: [{
    type: ViewChild,
    args: ["inputModel"]
  }], relations: [{
    type: Input
  }], function: [{
    type: Input
  }], simpleSelect: [{
    type: Input
  }], expandedSelect: [{
    type: Input
  }], disabled: [{
    type: Input
  }], dataSource: [{
    type: Input
  }], handleClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutocompleteFieldComponent, { className: "AutocompleteFieldComponent", filePath: "src/app/shared/generic-form/autocomplete-field/autocomplete-field.component.ts", lineNumber: 46 });
})();

export {
  TitlecasePipe,
  AutocompleteFieldComponent
};
//# sourceMappingURL=chunk-FVPW6XXI.js.map
