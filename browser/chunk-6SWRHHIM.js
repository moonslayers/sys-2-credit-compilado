import {
  TitlecasePipe
} from "./chunk-FVPW6XXI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  DatePipe,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";

// src/app/shared/data-view-section/data-view.component.ts
function DataViewSectionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 8);
    \u0275\u0275element(2, "i", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.disabled)("ngClass", "btn-" + ctx_r0.bootstrapClass)("routerLink", ctx_r0.editarRoute);
  }
}
function DataViewSectionComponent_Conditional_8_For_3_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", "/main/creditos/validar/" + ctx_r0.data[key_r2]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data[key_r2]);
  }
}
function DataViewSectionComponent_Conditional_8_For_3_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const key_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data === void 0 || ctx_r0.data === null ? ctx_r0.emptyMsj : ctx_r0.valueOf(ctx_r0.data[key_r2]), " ");
  }
}
function DataViewSectionComponent_Conditional_8_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "div", 14)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275conditionalCreate(7, DataViewSectionComponent_Conditional_8_For_3_Conditional_0_Conditional_7_Template, 2, 2, "a", 16)(8, DataViewSectionComponent_Conditional_8_For_3_Conditional_0_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const key_r2 = ctx_r2.$implicit;
    const \u0275$index_25_r4 = ctx_r2.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275$index_25_r4 + 1 === ctx_r0.keys.length ? "col-12 col-sm text-center border-bottom" : "col-12 col-sm-6 col-md-4 col-xl-3 border-bottom");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 4, key_r2), ":");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(key_r2 === "credito_id" && ctx_r0.data[key_r2] ? 7 : 8);
  }
}
function DataViewSectionComponent_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DataViewSectionComponent_Conditional_8_For_3_Conditional_0_Template, 9, 6, "div", 12);
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.isIgnored(key_r2) ? 0 : -1);
  }
}
function DataViewSectionComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyMsj);
  }
}
function DataViewSectionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10);
    \u0275\u0275repeaterCreate(2, DataViewSectionComponent_Conditional_8_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DataViewSectionComponent_Conditional_8_Conditional_4_Template, 2, 1, "h4", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.keys);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.keys.length == 0 ? 4 : -1);
  }
}
function DataViewSectionComponent_Conditional_9_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th")(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, key_r5));
  }
}
function DataViewSectionComponent_Conditional_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DataViewSectionComponent_Conditional_9_For_5_Conditional_0_Template, 4, 3, "th");
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.isIgnored(key_r5) ? 0 : -1);
  }
}
function DataViewSectionComponent_Conditional_9_For_8_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r6 = \u0275\u0275nextContext().$implicit;
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7[key_r6] === void 0 || row_r7[key_r6] === null ? ctx_r0.emptyMsj : ctx_r0.valueOf(row_r7[key_r6]), " ");
  }
}
function DataViewSectionComponent_Conditional_9_For_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DataViewSectionComponent_Conditional_9_For_8_For_2_Conditional_0_Template, 2, 1, "td", 18);
  }
  if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r0.isIgnored(key_r6) ? 0 : -1);
  }
}
function DataViewSectionComponent_Conditional_9_For_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 19);
    \u0275\u0275listener("click", function DataViewSectionComponent_Conditional_9_For_8_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.utils.openUrlInline(row_r7[ctx_r0.urlKey]));
    });
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !row_r7[ctx_r0.urlKey]);
  }
}
function DataViewSectionComponent_Conditional_9_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, DataViewSectionComponent_Conditional_9_For_8_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, DataViewSectionComponent_Conditional_9_For_8_Conditional_3_Template, 3, 1, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.keys);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.urlKey ? 3 : -1);
  }
}
function DataViewSectionComponent_Conditional_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emptyMsj);
  }
}
function DataViewSectionComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 17)(2, "thead")(3, "tr");
    \u0275\u0275repeaterCreate(4, DataViewSectionComponent_Conditional_9_For_5_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tbody");
    \u0275\u0275repeaterCreate(7, DataViewSectionComponent_Conditional_9_For_8_Template, 4, 1, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, DataViewSectionComponent_Conditional_9_Conditional_9_Template, 2, 1, "h4", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.keys);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.data);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.keys.length == 0 ? 9 : -1);
  }
}
var _DataViewSectionComponent = class _DataViewSectionComponent {
  constructor(utils, datePipe) {
    this.utils = utils;
    this.datePipe = datePipe;
    this.data = {};
    this.title = "";
    this.ignoreNumbers = false;
    this.keys = [];
    this.nullString = "N/A";
    this.dateFormat = "dd/MM/yyyyYY";
    this.zonaHoraria = "UTC";
    this.bootstrapClass = "primary";
    this.expanded = true;
    this.divClass = "container-fluid p-3";
    this.sticky = false;
    this.ignoreKeys = [];
    this.emptyMsj = "No hay datos registrados.";
    this.disabled = false;
  }
  ngOnChanges(changes) {
    if (changes["data"] && this.keys.length == 0) {
      this.setKeys();
    }
  }
  setKeys() {
    if (!this.data)
      return;
    if (Array.isArray(this.data) && this.data.length > 0) {
      this.keys = Object.keys(this.data[0]).filter((key) => !this.ignoreKeys.includes(key));
      return;
    }
    this.keys = Object.keys(this.data).filter((key) => !this.ignoreKeys.includes(key) && !this.isIgnored(key));
  }
  isIgnored(key) {
    if (this.isArray(this.data)) {
      return this.isIgnoredInArray(key);
    }
    return this.isIgnoredValue(key, this.data);
  }
  isIgnoredInArray(key) {
    if (!this.isArray(this.data))
      return false;
    return this.data.some((row) => this.isIgnoredValue(key, row));
  }
  isIgnoredValue(key, data) {
    if (data === null || data === void 0)
      return false;
    if (this.ignoreNumbers && this.utils.isNumber(data[key]) && key !== "id")
      return true;
    const type = typeof data[key];
    if (Array.isArray(data))
      return true;
    if (type == "object" && data[key]?.nombre)
      return false;
    if (type == "object")
      return true;
    if (type == "function")
      return true;
    return false;
  }
  valueOf(value) {
    if (value === "INNE")
      return "INE";
    if (value === null || value == void 0 || value == "")
      return this.nullString;
    if (value.nombre) {
      return value.nombre;
    }
    if (this.utils.isISODateString(value)) {
      return this.utils.fechaFormateada(value, true) ?? "N/A";
    }
    return value;
  }
  valueBySubKeys(value) {
    const keys = value.split(".");
    if (Array.isArray(this.data))
      return this.nullString;
    console.info(value);
    let currentValue = this.data;
    for (const key of keys) {
      if (currentValue === null || currentValue === void 0) {
        return this.nullString;
      }
      currentValue = currentValue[key];
    }
    return this.valueOf(currentValue);
  }
  isArray(data) {
    if (!data)
      return false;
    return data.length !== void 0;
  }
};
_DataViewSectionComponent.\u0275fac = function DataViewSectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DataViewSectionComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(DatePipe));
};
_DataViewSectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataViewSectionComponent, selectors: [["data-view-section"]], inputs: { data: "data", title: "title", ignoreNumbers: "ignoreNumbers", keys: "keys", nullString: "nullString", dateFormat: "dateFormat", zonaHoraria: "zonaHoraria", bootstrapClass: "bootstrapClass", expanded: "expanded", editarRoute: "editarRoute", divClass: "divClass", sticky: "sticky", ignoreKeys: "ignoreKeys", emptyMsj: "emptyMsj", urlKey: "urlKey", disabled: "disabled" }, features: [\u0275\u0275ProvidersFeature([
  DatePipe
]), \u0275\u0275NgOnChangesFeature], decls: 10, vars: 8, consts: [[1, "m-1"], [1, "row", "py-1"], [1, "col"], [1, "fw-bold"], [1, "col-auto"], [1, "border", "my-1", "mb-2", 3, "ngClass"], [1, "container-fluid", "p-2"], [1, "table-responsive", "list"], [1, "btn", "btn-sm", "shadow-sm", 3, "disabled", "ngClass", "routerLink"], [1, "bi", "bi-pencil-fill"], [1, "row"], [1, "fw-bold", "py-5"], [3, "class"], [1, "row", "justify-content-between"], [1, "col-12", "pb-0", "pt-2"], [1, "col-12", "pt-0", "pb-2", "text-uppercase", "text-break", "align-self-center", "fw-bold"], [1, "px-3", 3, "routerLink"], [1, "table", "table-sm"], [1, "text-uppercase"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-eye-fill"]], template: function DataViewSectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, DataViewSectionComponent_Conditional_6_Template, 3, 3, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "hr", 5);
    \u0275\u0275conditionalCreate(8, DataViewSectionComponent_Conditional_8_Template, 5, 1, "div", 6)(9, DataViewSectionComponent_Conditional_9_Template, 10, 1, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.divClass);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, ctx.title));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.editarRoute ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "border-" + ctx.bootstrapClass);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isArray(ctx.data) ? 8 : 9);
  }
}, dependencies: [
  NgClass,
  TitlecasePipe,
  RouterLink
], styles: ["\n\n.list[_ngcontent-%COMP%] {\n  max-height: 30rem;\n  overflow-y: auto;\n}\n.hover-container[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.3s ease-in-out;\n}\n.hover-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0;\n  overflow-y: auto;\n  transition: all 0.3s ease-in-out;\n}\n.hover-container[_ngcontent-%COMP%]:hover   .hover-content[_ngcontent-%COMP%] {\n  height: 15rem;\n  max-height: 80%;\n}\n.click-no-expanded[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0;\n  overflow-y: auto;\n  transition: all 0.3s ease-in-out;\n}\n.click-expanded[_ngcontent-%COMP%] {\n  height: 15rem;\n  max-height: 80%;\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data-view.component.css.map */"] });
var DataViewSectionComponent = _DataViewSectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewSectionComponent, [{
    type: Component,
    args: [{ selector: "data-view-section", imports: [
      NgClass,
      TitlecasePipe,
      RouterLink
    ], providers: [
      DatePipe
    ], template: `<div class="m-1" [class]="divClass">
  <div class="row py-1">
    <div class="col">
      <h4 class="fw-bold">{{title|titlecase}}</h4>
    </div>
    @if (editarRoute) {
      <div class="col-auto">
        <button class="btn btn-sm shadow-sm" [disabled]="disabled" [ngClass]="'btn-'+bootstrapClass" [routerLink]="editarRoute">
          <i class="bi bi-pencil-fill"></i>
        </button>
      </div>
    }
  </div>
  <hr class="border my-1 mb-2" [ngClass]="'border-'+bootstrapClass">
  @if (!isArray(data)) {
    <div class="container-fluid p-2">
      <div class="row">
        @for (key of keys; track key; let i = $index) {
          @if (!isIgnored(key)) {
            <div [class]="((i+1)===keys.length)?'col-12 col-sm text-center border-bottom':'col-12 col-sm-6 col-md-4 col-xl-3 border-bottom'">
              <div class="row justify-content-between">
                <div class="col-12 pb-0 pt-2">
                  <label>{{key|titlecase}}:</label>
                </div>
                <div class="col-12 pt-0 pb-2 text-uppercase text-break align-self-center fw-bold">
                  @if (key==='credito_id' && data[key]) {
                    <a class="px-3" [routerLink]="'/main/creditos/validar/'+data[key]">{{data[key]}}</a>
                    }@else {
                    {{(data===undefined|| data===null)?this.emptyMsj:valueOf(data[key])}}
                  }
                </div>
              </div>
            </div>
          }
        }
      </div>
      @if (keys.length==0) {
        <h4 class="fw-bold py-5">{{emptyMsj}}</h4>
      }
    </div>
  } @else {
    <div class="table-responsive list">
      <table class="table table-sm">
        <thead>
          <tr>
            @for (key of keys; track key) {
              @if (!isIgnored(key)) {
                <th>
                  <b>{{key|titlecase}}</b>
                </th>
              }
            }
          </tr>
        </thead>
        <tbody>
          @for (row of data; track row) {
            <tr>
              @for (key of keys; track key) {
                @if (!isIgnored(key)) {
                  <td class="text-uppercase">
                    {{(row[key]===undefined|| row[key]===null)?this.emptyMsj:valueOf(row[key])}}
                  </td>
                }
              }
              @if (urlKey) {
                <td>
                  <button class="btn btn-primary" [disabled]="!row[urlKey]" (click)="utils.openUrlInline(row[urlKey])"><i class="bi bi-eye-fill"></i></button>
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
      @if (keys.length==0) {
        <h4 class="fw-bold py-5">{{emptyMsj}}</h4>
      }
    </div>
  }
</div>`, styles: ["/* src/app/shared/data-view-section/data-view.component.css */\n.list {\n  max-height: 30rem;\n  overflow-y: auto;\n}\n.hover-container {\n  position: relative;\n  transition: all 0.3s ease-in-out;\n}\n.hover-content {\n  width: 100%;\n  height: 0;\n  overflow-y: auto;\n  transition: all 0.3s ease-in-out;\n}\n.hover-container:hover .hover-content {\n  height: 15rem;\n  max-height: 80%;\n}\n.click-no-expanded {\n  width: 100%;\n  height: 0;\n  overflow-y: auto;\n  transition: all 0.3s ease-in-out;\n}\n.click-expanded {\n  height: 15rem;\n  max-height: 80%;\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data-view.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }, { type: DatePipe }], { data: [{
    type: Input
  }], title: [{
    type: Input
  }], ignoreNumbers: [{
    type: Input
  }], keys: [{
    type: Input
  }], nullString: [{
    type: Input
  }], dateFormat: [{
    type: Input
  }], zonaHoraria: [{
    type: Input
  }], bootstrapClass: [{
    type: Input
  }], expanded: [{
    type: Input
  }], editarRoute: [{
    type: Input
  }], divClass: [{
    type: Input
  }], sticky: [{
    type: Input
  }], ignoreKeys: [{
    type: Input
  }], emptyMsj: [{
    type: Input
  }], urlKey: [{
    type: Input
  }], disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataViewSectionComponent, { className: "DataViewSectionComponent", filePath: "src/app/shared/data-view-section/data-view.component.ts", lineNumber: 23 });
})();

export {
  DataViewSectionComponent
};
//# sourceMappingURL=chunk-6SWRHHIM.js.map
