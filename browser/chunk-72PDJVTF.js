import {
  TitlecasePipe
} from "./chunk-FVPW6XXI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBFW4U4H.js";
import {
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  DatePipe
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
  ɵɵclassProp,
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
  ɵɵprojection,
  ɵɵprojectionDef,
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

// src/app/shared/tabla-local/tabla-local.component.ts
var _c0 = [[["", "row-td", ""]]];
var _c1 = ["[row-td]"];
function TablaLocalComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "caption");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.caption);
  }
}
function TablaLocalComponent_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 11);
    \u0275\u0275listener("click", function TablaLocalComponent_Conditional_11_For_5_Template_th_click_0_listener() {
      const key_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sortByKey(key_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, key_r3), " ");
  }
}
function TablaLocalComponent_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 10);
  }
}
function TablaLocalComponent_Conditional_11_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 12)(1, "input", 13);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275twoWayListener("ngModelChange", function TablaLocalComponent_Conditional_11_Conditional_9_For_2_Template_input_ngModelChange_1_listener($event) {
      const key_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.filtros[key_r5], $event) || (ctx_r0.filtros[key_r5] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TablaLocalComponent_Conditional_11_Conditional_9_For_2_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.filtrar());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 2, key_r5));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.filtros[key_r5]);
  }
}
function TablaLocalComponent_Conditional_11_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 10);
  }
}
function TablaLocalComponent_Conditional_11_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, TablaLocalComponent_Conditional_11_Conditional_9_For_2_Template, 3, 4, "td", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, TablaLocalComponent_Conditional_11_Conditional_9_Conditional_3_Template, 1, 0, "td", 10);
    \u0275\u0275element(4, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.keys);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.urlRoute ? 3 : -1);
  }
}
function TablaLocalComponent_Conditional_11_For_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.valueClean(row_r7[key_r6]), " ");
  }
}
function TablaLocalComponent_Conditional_11_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 10)(1, "button", 14);
    \u0275\u0275element(2, "i", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.urlRoute + row_r7[ctx_r0.id]);
  }
}
function TablaLocalComponent_Conditional_11_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, TablaLocalComponent_Conditional_11_For_11_For_2_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, TablaLocalComponent_Conditional_11_For_11_Conditional_3_Template, 3, 1, "td", 10);
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.keys);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.urlRoute ? 3 : -1);
  }
}
function TablaLocalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table");
    \u0275\u0275conditionalCreate(1, TablaLocalComponent_Conditional_11_Conditional_1_Template, 2, 1, "caption");
    \u0275\u0275elementStart(2, "thead")(3, "tr", 8);
    \u0275\u0275repeaterCreate(4, TablaLocalComponent_Conditional_11_For_5_Template, 3, 3, "th", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(6, TablaLocalComponent_Conditional_11_Conditional_6_Template, 1, 0, "th", 10);
    \u0275\u0275element(7, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275conditionalCreate(9, TablaLocalComponent_Conditional_11_Conditional_9_Template, 5, 1, "tr");
    \u0275\u0275repeaterCreate(10, TablaLocalComponent_Conditional_11_For_11_Template, 6, 1, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.tableClass);
    \u0275\u0275classProp("table-sm", ctx_r0.sm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.caption ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.keys);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.urlRoute ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.showSearch ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.dataSource);
  }
}
function TablaLocalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No hay registros.");
    \u0275\u0275elementEnd();
  }
}
var _TablaLocalComponent = class _TablaLocalComponent {
  constructor(utils, datePipe) {
    this.utils = utils;
    this.datePipe = datePipe;
    this.dataSource = [];
    this.keys = [];
    this.ignore = [];
    this.sm = false;
    this.tableClass = "table";
    this.ignoreNumber = true;
    this.id = "id";
    this.expand = false;
    this.filtros = {};
    this.lastSort = "";
    this.showSearch = false;
  }
  ngOnChanges(changes) {
    if (changes["dataSource"] && this.dataSource.length > 0) {
      this.keys = this.utils.keysOf(this.dataSource[0]);
      if (this.ignore.length > 0) {
        this.keys = this.keys.filter((key) => !this.ignore.includes(key));
      }
      this.keys = this.keys.filter((key) => typeof this.dataSource[0][key] !== "object");
      if (this.ignoreNumber) {
        this.keys = this.keys.filter((key) => !this.dataSource.some((row) => typeof row[key] === "number" && key !== "id"));
      }
    }
  }
  filtrar() {
    if (!this.dataSource || this.dataSource.length === 0)
      return;
    const keys = Object.keys(this.filtros).filter((key) => this.filtros[key]);
    if (keys.length === 0) {
      this.dataSource.forEach((row) => row.hidden = false);
      return;
    }
    this.dataSource.forEach((row) => {
      row.hidden = !keys.every((key) => {
        const rowValue = row[key]?.toString().toLowerCase() || "";
        const filterValue = this.filtros[key]?.toString().toLowerCase() || "";
        return rowValue.includes(filterValue);
      });
    });
  }
  sortByKey(key) {
    const ascending = key === this.lastSort;
    this.dataSource.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (valueA < valueB) {
        return ascending ? -1 : 1;
      }
      if (valueA > valueB) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
    this.lastSort = key;
  }
  valueClean(value) {
    if (value === null || value === void 0 || value === "") {
      return "N/A";
    }
    if (this.utils.isISODateString(value)) {
      return this.datePipe.transform(value) ?? "N/A";
    }
    if (typeof value == "string") {
      return value.toUpperCase();
    }
    return value;
  }
};
_TablaLocalComponent.\u0275fac = function TablaLocalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaLocalComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(DatePipe));
};
_TablaLocalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaLocalComponent, selectors: [["tabla-local"]], inputs: { title: "title", caption: "caption", dataSource: "dataSource", keys: "keys", ignore: "ignore", sm: "sm", tableClass: "tableClass", viewRoute: "viewRoute", ignoreNumber: "ignoreNumber", urlRoute: "urlRoute", id: "id", expand: "expand" }, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c1, decls: 13, vars: 5, consts: [[1, "container-fluid", "py-2", "pt-3", "mt-2"], [1, "row"], [1, "col"], [1, "col-auto"], [1, "text-primary", "pointer", 3, "click"], [1, "table-responsive", "no-expanded", "shadow", "pb-3", "px-2", "mb-2"], [3, "class", "table-sm"], [1, "h4", "fw-lighter", "text-center", "p-3"], [1, "sticky-top", "z-1"], [1, "pointer"], [1, "sticky-right"], [1, "pointer", 3, "click"], [1, "sticky-top"], [1, "form-control", "form-control-sm", 3, "ngModelChange", "placeholder", "ngModel"], [1, "btn", "btn-sm", "btn-info", "shadow", 3, "routerLink"], [1, "bi", "bi-eye-fill"]], template: function TablaLocalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c0);
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 3)(7, "a", 4);
    \u0275\u0275listener("click", function TablaLocalComponent_Template_a_click_7_listener() {
      return ctx.showSearch = !ctx.showSearch;
    });
    \u0275\u0275elementStart(8, "u");
    \u0275\u0275text(9, "Filtrar");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275conditionalCreate(11, TablaLocalComponent_Conditional_11_Template, 12, 7, "table", 6);
    \u0275\u0275conditionalCreate(12, TablaLocalComponent_Conditional_12_Template, 2, 0, "p", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("d-none", ctx.expand);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dataSource.length > 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dataSource.length === 0 ? 12 : -1);
  }
}, dependencies: [
  TitlecasePipe,
  RouterLink,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\n.sticky-right[_ngcontent-%COMP%] {\n  position: sticky;\n  right: 0;\n  background-color: transparent;\n}\n.no-expanded[_ngcontent-%COMP%] {\n  max-height: 40rem;\n  overflow-y: auto;\n}\n.expanded[_ngcontent-%COMP%] {\n  max-height: 80vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=tabla-local.component.css.map */"] });
var TablaLocalComponent = _TablaLocalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaLocalComponent, [{
    type: Component,
    args: [{ selector: "tabla-local", imports: [
      TitlecasePipe,
      RouterLink,
      FormsModule
    ], providers: [DatePipe], template: `<div class="container-fluid py-2 pt-3 mt-2">
  <div class="row">
    <div class="col">
      <h5><b>{{title}}</b></h5>
    </div>
    <div class="col-auto">
      <a class="text-primary pointer" (click)="showSearch=!showSearch"><u>Filtrar</u></a>
    </div>
  </div>
</div>
<div class="table-responsive no-expanded shadow pb-3 px-2 mb-2" [class.d-none]="expand">
  @if (dataSource.length>0) {
    <table [class]="tableClass" [class.table-sm]='sm'>
      @if (caption) {
        <caption>{{caption}}</caption>
      }
      <thead>
        <tr class="sticky-top z-1">
          @for (key of keys; track key) {
            <th class="pointer" (click)="sortByKey(key)">
              {{key|titlecase}}
            </th>
          }
          @if (urlRoute) {
            <th class="sticky-right"></th>
          }
          <th></th>
        </tr>
      </thead>
      <tbody>
        @if (showSearch) {
          <tr>
            @for (key of keys; track key) {
              <td class="sticky-top">
                <input class="form-control form-control-sm" [placeholder]="key|titlecase" [(ngModel)]="filtros[key]" (ngModelChange)="filtrar()">
              </td>
            }
            @if (urlRoute) {
              <td class="sticky-right">
              </td>
            }
            <td>
            </td>
          </tr>
        }
        @for (row of dataSource; track row) {
          <tr>
            @for (key of keys; track key) {
              <td>
                {{valueClean(row[key])}}
              </td>
            }
            @if (urlRoute) {
              <td class="sticky-right">
                <button class="btn btn-sm btn-info shadow" [routerLink]="urlRoute+row[id]">
                  <i class="bi bi-eye-fill"></i>
                </button>
              </td>
            }
            <td>
              <ng-content select="[row-td]"></ng-content>
            </td>
          </tr>
        }
      </tbody>
    </table>
  }
  @if (dataSource.length===0) {
    <p class="h4 fw-lighter text-center p-3">No hay registros.</p>
  }
</div>`, styles: ["/* src/app/shared/tabla-local/tabla-local.component.css */\n.sticky-right {\n  position: sticky;\n  right: 0;\n  background-color: transparent;\n}\n.no-expanded {\n  max-height: 40rem;\n  overflow-y: auto;\n}\n.expanded {\n  max-height: 80vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=tabla-local.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }, { type: DatePipe }], { title: [{
    type: Input
  }], caption: [{
    type: Input
  }], dataSource: [{
    type: Input
  }], keys: [{
    type: Input
  }], ignore: [{
    type: Input
  }], sm: [{
    type: Input
  }], tableClass: [{
    type: Input
  }], viewRoute: [{
    type: Input
  }], ignoreNumber: [{
    type: Input
  }], urlRoute: [{
    type: Input
  }], id: [{
    type: Input
  }], expand: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaLocalComponent, { className: "TablaLocalComponent", filePath: "src/app/shared/tabla-local/tabla-local.component.ts", lineNumber: 19 });
})();

export {
  TablaLocalComponent
};
//# sourceMappingURL=chunk-72PDJVTF.js.map
