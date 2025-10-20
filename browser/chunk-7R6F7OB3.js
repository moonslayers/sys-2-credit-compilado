import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import {
  ButtonComponent,
  FormFieldComponent
} from "./chunk-ZF7ZAEOZ.js";
import {
  TitlecasePipe
} from "./chunk-FVPW6XXI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-XKAAYCNZ.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  UpperCasePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
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
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/shared/paginador/paginador.component.ts
var _c0 = (a0, a1) => ({ "btn-light": a0, "btn-primary": a1 });
function PaginadorComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function PaginadorComponent_Conditional_0_For_7_Template_button_click_0_listener() {
      const page_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiar_page(page_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-sm", ctx_r1.sm);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c0, page_r4 != ctx_r1.page_actual, page_r4 == ctx_r1.page_actual));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r4, " ");
  }
}
function PaginadorComponent_Conditional_0_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r6 = ctx.$implicit;
    const \u0275$index_29_r7 = ctx.$index;
    \u0275\u0275property("value", \u0275$index_29_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r6);
  }
}
function PaginadorComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PaginadorComponent_Conditional_0_Conditional_12_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selected_order, $event) || (ctx_r1.selected_order = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PaginadorComponent_Conditional_0_Conditional_12_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.actualizar_tabla());
    });
    \u0275\u0275repeaterCreate(2, PaginadorComponent_Conditional_0_Conditional_12_For_3_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("form-select-sm", ctx_r1.sm);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selected_order);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.orderLabels);
  }
}
function PaginadorComponent_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    \u0275\u0275property("value", option_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r8);
  }
}
function PaginadorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
    \u0275\u0275listener("click", function PaginadorComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiar_page(1));
    });
    \u0275\u0275elementStart(4, "span", 5);
    \u0275\u0275text(5, "\xAB");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, PaginadorComponent_Conditional_0_For_7_Template, 2, 7, "button", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function PaginadorComponent_Conditional_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiar_page(ctx_r1.paginador.length));
    });
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10, "\xBB");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275conditionalCreate(12, PaginadorComponent_Conditional_0_Conditional_12_Template, 4, 3, "div", 8);
    \u0275\u0275elementStart(13, "div", 8)(14, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PaginadorComponent_Conditional_0_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.per_page, $event) || (ctx_r1.per_page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PaginadorComponent_Conditional_0_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.actualizar_tabla());
    });
    \u0275\u0275elementStart(15, "option", 10);
    \u0275\u0275text(16, "Num por pagina");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, PaginadorComponent_Conditional_0_For_18_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 1)(20, "div", 12)(21, "span", 13);
    \u0275\u0275text(22, "Total results:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 14);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("btn-sm", ctx_r1.sm);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.paginador_view);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-sm", ctx_r1.sm);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.orderLabels.length > 0 ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("form-select-sm", ctx_r1.sm);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.per_page);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.page_options);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.total_items);
  }
}
function PaginadorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 16)(2, "button", 17);
    \u0275\u0275listener("click", function PaginadorComponent_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiar_page(ctx_r1.page_actual - 1));
    });
    \u0275\u0275element(3, "i", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function PaginadorComponent_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cambiar_page(ctx_r1.page_actual + 1));
    });
    \u0275\u0275element(6, "i", 19);
    \u0275\u0275elementEnd()()();
  }
}
var _PaginadorComponent = class _PaginadorComponent {
  constructor() {
    this.paginador = [];
    this.paginador_view = [];
    this.orderLabels = [];
    this.selected_order = 1;
    this.per_page = 5;
    this.page_options = [5, 10, 15, 20, 30];
    this.page_actual = 1;
    this.data_paginador = {
      page: 1,
      per_page: 5
    };
    this.total_pages = 0;
    this.default = true;
    this.short = false;
    this.sm = false;
    this.per_pageChange = new EventEmitter();
    this.page_actualChange = new EventEmitter();
    this.actualizar_tablaChange = new EventEmitter();
    this.data_paginadorChange = new EventEmitter();
    this.total_items = 0;
  }
  ngOnChanges() {
    if (this.total_pages > 0) {
      this.generar_paginador();
    }
  }
  generar_paginador() {
    this.data_paginador.per_page = this.per_page;
    this.data_paginadorChange.emit(this.data_paginador);
    if (this.total_pages !== this.paginador.length) {
      this.paginador = [];
      for (let i = 1; i <= this.total_pages; i++) {
        this.paginador.push(i);
      }
      this.vista_paginador();
    }
  }
  vista_paginador() {
    if (this.total_pages >= 7) {
      if (this.page_actual > 2 && this.page_actual < this.total_pages - 3) {
        this.paginador_view = [this.page_actual - 2, this.page_actual - 1, this.page_actual, this.page_actual + 1, this.page_actual + 2];
      } else if (this.total_pages > 4 && this.page_actual > this.total_pages - 4) {
        this.paginador_view = [this.total_pages - 4, this.total_pages - 3, this.total_pages - 2, this.total_pages - 1, this.total_pages];
      } else {
        this.paginador_view = [1, 2, 3, 4, 5];
      }
    } else if (this.total_pages <= 6) {
      this.paginador_view = [...this.paginador];
    }
  }
  actualizar_tabla() {
    this.page_actual = 1;
    this.data_paginador = {
      page: this.page_actual,
      per_page: this.per_page
    };
    this.per_pageChange.emit(this.per_page);
    this.data_paginadorChange.emit(this.data_paginador);
    this.page_actualChange.emit(this.page_actual);
    this.actualizar_tablaChange.emit(true);
    this.vista_paginador();
  }
  cambiar_page(page) {
    this.data_paginador = {
      page,
      per_page: this.per_page
    };
    this.per_pageChange.emit(this.per_page);
    this.data_paginadorChange.emit(this.data_paginador);
    this.page_actualChange.emit(this.page_actual);
    if (this.page_actual != page) {
      this.page_actual = page;
      this.actualizar_tablaChange.emit(true);
    }
    this.vista_paginador();
  }
};
_PaginadorComponent.\u0275fac = function PaginadorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaginadorComponent)();
};
_PaginadorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginadorComponent, selectors: [["app-paginador"]], inputs: { paginador: "paginador", orderLabels: "orderLabels", selected_order: "selected_order", per_page: "per_page", page_options: "page_options", data_paginador: "data_paginador", total_pages: "total_pages", default: "default", short: "short", sm: "sm", total_items: "total_items" }, outputs: { per_pageChange: "per_pageChange", page_actualChange: "page_actualChange", actualizar_tablaChange: "actualizar_tablaChange", data_paginadorChange: "data_paginadorChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "row", "justify-content-between"], [1, "row"], [1, "col", "text-center"], [1, "btn-group", "shadow-sm"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true"], ["type", "button", 1, "btn", 3, "btn-sm", "ngClass"], [1, "row", "justify-content-between", "pe-2", "ps-2"], [1, "col-auto"], [1, "form-select", "shadow-sm", 3, "ngModelChange", "change", "ngModel"], ["value", "5", "selected", ""], [3, "value"], [1, "col", "text-end", "fw-light"], [1, "text-s", "fw-lighter"], [1, "text-s"], ["type", "button", 1, "btn", 3, "click", "ngClass"], [1, "col-auto", "scale-05"], [1, "btn", "btn-transparent", "text-primary", 3, "click"], [1, "bi", "bi-caret-left-fill", "fs-4"], [1, "bi", "bi-caret-right-fill", "fs-4"]], template: function PaginadorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PaginadorComponent_Conditional_0_Template, 25, 9);
    \u0275\u0275conditionalCreate(1, PaginadorComponent_Conditional_1_Template, 7, 0, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.default && ctx.total_pages > 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.short ? 1 : -1);
  }
}, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=paginador.component.css.map */"] });
var PaginadorComponent = _PaginadorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginadorComponent, [{
    type: Component,
    args: [{ selector: "app-paginador", imports: [
      CommonModule,
      FormsModule
    ], template: `@if (default && total_pages>0) {
  <div class="row">
    <div class="col text-center">
      <div class="btn-group shadow-sm">
        <button type="button" class="btn btn-light" [class.btn-sm]="sm" (click)="cambiar_page(1)">
          <span aria-hidden="true">&laquo;</span>
        </button>
        @for (page of paginador_view; track page) {
          <button type="button" class="btn"
            [class.btn-sm]="sm" [ngClass]="{'btn-light':page!=page_actual,'btn-primary':page==page_actual}"
            (click)="cambiar_page(page)">
            {{page}}
          </button>
        }
        <button type="button" class="btn btn-light" [class.btn-sm]="sm" (click)="cambiar_page(paginador.length)">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </div>
    </div>
  </div>
  <div class="row justify-content-between pe-2 ps-2">
    @if (orderLabels.length>0) {
      <div class="col-auto">
        <select class='form-select shadow-sm' [class.form-select-sm]="sm" [(ngModel)]="selected_order" (change)="actualizar_tabla()">
          @for (label of orderLabels; track label; let i = $index) {
            <option [value]="i+1">{{label}}</option>
          }
        </select>
      </div>
    }
    <div class="col-auto">
      <select class="form-select shadow-sm" [class.form-select-sm]="sm" [(ngModel)]="per_page" (change)="actualizar_tabla()">
        <option value="5" selected>Num por pagina</option>
        @for (option of page_options; track option) {
          <option [value]="option">{{option}}</option>
        }
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col text-end fw-light">
      <span class="text-s fw-lighter">Total results:</span>
      <span class="text-s ">{{total_items}}</span>
    </div>
  </div>
}
@if (short) {
  <div class="row justify-content-between">
    <div class="col-auto scale-05">
      <button class="btn btn-transparent text-primary" (click)="cambiar_page(page_actual-1)">
        <i class="bi bi-caret-left-fill fs-4"></i>
      </button>
    </div>
    <div class="col-auto scale-05">
      <button class="btn btn-transparent text-primary" (click)="cambiar_page(page_actual+1)">
        <i class="bi bi-caret-right-fill fs-4"></i>
      </button>
    </div>
  </div>
}`, styles: ["/* src/app/shared/paginador/paginador.component.css */\n.page-item {\n  cursor: pointer;\n}\n/*# sourceMappingURL=paginador.component.css.map */\n"] }]
  }], null, { paginador: [{
    type: Input
  }], orderLabels: [{
    type: Input
  }], selected_order: [{
    type: Input
  }], per_page: [{
    type: Input
  }], page_options: [{
    type: Input
  }], data_paginador: [{
    type: Input
  }], total_pages: [{
    type: Input
  }], default: [{
    type: Input
  }], short: [{
    type: Input
  }], sm: [{
    type: Input
  }], per_pageChange: [{
    type: Output
  }], page_actualChange: [{
    type: Output
  }], actualizar_tablaChange: [{
    type: Output
  }], data_paginadorChange: [{
    type: Output
  }], total_items: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginadorComponent, { className: "PaginadorComponent", filePath: "src/app/shared/paginador/paginador.component.ts", lineNumber: 15 });
})();

// src/app/shared/tabla/tabla-header/tabla-header.component.ts
function TablaHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 1);
  }
}
function TablaHeaderComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 2);
  }
}
var _TablaHeaderComponent = class _TablaHeaderComponent {
  constructor() {
    this.column = "";
    this.sortChange = new EventEmitter();
    this.desc = false;
    this.isSorted = false;
  }
  ngOnChanges(changes) {
    if (changes["sort"] || changes["column"]) {
      this.setAscDesc();
    }
  }
  setAscDesc() {
    this.isSorted = false;
    this.desc = false;
    if (this.isHeader(this.header) && this.header.key == this.sort.column) {
      this.desc = !!this.sort.desc;
      this.isSorted = true;
    }
    if (this.isString(this.header) && this.header == this.sort.column) {
      this.desc = !!this.sort.desc;
      this.isSorted = true;
    }
  }
  updateSorting() {
    this.desc = !this.desc;
    this.sort.desc = this.desc;
    this.sort.column = this.isHeader(this.header) ? this.header.key : this.header;
    this.sortChange.emit(this.sort);
  }
  isHeader(header) {
    return header.key !== void 0;
  }
  isString(header) {
    return typeof header === "string";
  }
};
_TablaHeaderComponent.\u0275fac = function TablaHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaHeaderComponent)();
};
_TablaHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaHeaderComponent, selectors: [["tabla-header"]], inputs: { header: "header", sort: "sort", column: "column" }, outputs: { sortChange: "sortChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 5, consts: [[1, "pointer", "user-select-none", 3, "click"], [1, "bi", "bi-arrow-down-short", "text-primary"], [1, "bi", "bi-arrow-up-short", "text-primary"]], template: function TablaHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275listener("click", function TablaHeaderComponent_Template_span_click_0_listener() {
      return ctx.updateSorting();
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275conditionalCreate(3, TablaHeaderComponent_Conditional_3_Template, 1, 0, "i", 1);
    \u0275\u0275conditionalCreate(4, TablaHeaderComponent_Conditional_4_Template, 1, 0, "i", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx.isHeader(ctx.header) ? ctx.header.header : ctx.header), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isSorted && !ctx.desc ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isSorted && ctx.desc ? 4 : -1);
  }
}, dependencies: [TitlecasePipe], encapsulation: 2 });
var TablaHeaderComponent = _TablaHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaHeaderComponent, [{
    type: Component,
    args: [{ selector: "tabla-header", imports: [
      TitlecasePipe
    ], template: '<span class="pointer user-select-none" (click)="updateSorting()">\n  {{(isHeader(header)? header.header: header) |titlecase}}\n  @if (isSorted && !desc) {\n    <i class="bi bi-arrow-down-short text-primary"></i>\n  }\n  @if (isSorted && desc) {\n    <i class="bi bi-arrow-up-short text-primary"></i>\n  }\n</span>' }]
  }], null, { header: [{
    type: Input
  }], sort: [{
    type: Input
  }], column: [{
    type: Input
  }], sortChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaHeaderComponent, { className: "TablaHeaderComponent", filePath: "src/app/shared/tabla/tabla-header/tabla-header.component.ts", lineNumber: 14 });
})();

// src/app/shared/tabla/tabla.component.ts
var _c02 = [[["", "advanced-search", ""]], "*"];
var _c1 = ["[advanced-search]", "*"];
var _forTrack0 = ($index, $item) => $item.id;
function TablaComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "app-form-field", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("field", filter_r1);
  }
}
function TablaComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "app-form-field", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("field", filter_r2);
  }
}
function TablaComponent_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r2.titleStyle == null ? null : ctx_r2.titleStyle.div) ?? "col-auto p-1 me-auto");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r2.titleStyle == null ? null : ctx_r2.titleStyle.title) ?? "h4 fw-bold text-nowrap");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.title);
  }
}
function TablaComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275conditionalCreate(2, TablaComponent_Conditional_32_Conditional_2_Template, 3, 5, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.title ? 2 : -1);
  }
}
function TablaComponent_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r2.titleStyle == null ? null : ctx_r2.titleStyle.div) ?? "col-auto p-1 me-auto");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r2.titleStyle == null ? null : ctx_r2.titleStyle.title) ?? "h4 fw-bold text-nowrap");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.title);
  }
}
function TablaComponent_Conditional_33_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-button", 21);
    \u0275\u0275listener("clickButtonEvent", function TablaComponent_Conditional_33_For_4_Template_app_button_clickButtonEvent_1_listener() {
      const button_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.barraButtonClickEvent.emit(button_r5.key));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const button_r5 = ctx.$implicit;
    \u0275\u0275classMap((button_r5.style == null ? null : button_r5.style.div) ?? "col-auto p-1");
    \u0275\u0275advance();
    \u0275\u0275styleMap(button_r5.style);
    \u0275\u0275property("text", button_r5.text);
  }
}
function TablaComponent_Conditional_33_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-button", 22);
    \u0275\u0275listener("click", function TablaComponent_Conditional_33_Conditional_5_Template_app_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.agregarEvent());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r2.activosButton.style == null ? null : ctx_r2.activosButton.style.div) ?? "col-auto p-1");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r2.agregarButton.style);
    \u0275\u0275property("text", ctx_r2.agregarButton.text);
  }
}
function TablaComponent_Conditional_33_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 24);
    \u0275\u0275listener("clickButtonEvent", function TablaComponent_Conditional_33_Conditional_6_Conditional_1_Template_app_button_clickButtonEvent_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.genericDeleteMultiple());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(ctx_r2.eliminarButton.style);
    \u0275\u0275property("text", ctx_r2.eliminarButton.text)("disabled", ctx_r2.selected == 0);
  }
}
function TablaComponent_Conditional_33_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 24);
    \u0275\u0275listener("clickButtonEvent", function TablaComponent_Conditional_33_Conditional_6_Conditional_2_Template_app_button_clickButtonEvent_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.genericDeleteMultiple());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(ctx_r2.restaurarButton.style);
    \u0275\u0275property("text", ctx_r2.restaurarButton.text)("disabled", ctx_r2.selected == 0);
  }
}
function TablaComponent_Conditional_33_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, TablaComponent_Conditional_33_Conditional_6_Conditional_1_Template, 1, 4, "app-button", 23);
    \u0275\u0275conditionalCreate(2, TablaComponent_Conditional_33_Conditional_6_Conditional_2_Template, 1, 4, "app-button", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r2.eliminarButton.style == null ? null : ctx_r2.eliminarButton.style.div) ?? "col-auto p-1");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.status && ctx_r2.eliminar ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.status && ctx_r2.restaurar ? 2 : -1);
  }
}
function TablaComponent_Conditional_33_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 22);
    \u0275\u0275listener("click", function TablaComponent_Conditional_33_Conditional_7_Conditional_1_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.verActivos());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(ctx_r2.activosButton.style);
    \u0275\u0275property("text", ctx_r2.activosButton.text);
  }
}
function TablaComponent_Conditional_33_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 22);
    \u0275\u0275listener("click", function TablaComponent_Conditional_33_Conditional_7_Conditional_2_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.verEliminados());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(ctx_r2.eliminadosButton.style);
    \u0275\u0275property("text", ctx_r2.eliminadosButton.text);
  }
}
function TablaComponent_Conditional_33_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, TablaComponent_Conditional_33_Conditional_7_Conditional_1_Template, 1, 3, "app-button", 25);
    \u0275\u0275conditionalCreate(2, TablaComponent_Conditional_33_Conditional_7_Conditional_2_Template, 1, 3, "app-button", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r2.activosButton.style == null ? null : ctx_r2.activosButton.style.div) ?? "col-auto p-1");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.status && ctx_r2.eliminados ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.status && ctx_r2.activos ? 2 : -1);
  }
}
function TablaComponent_Conditional_33_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-button", 21);
    \u0275\u0275listener("clickButtonEvent", function TablaComponent_Conditional_33_Conditional_8_Template_app_button_clickButtonEvent_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showAdvancedSearch = true);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r2.advancedSearchButton.style == null ? null : ctx_r2.advancedSearchButton.style.div) ?? "col-auto p-1");
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r2.advancedSearchButton.style);
    \u0275\u0275property("text", ctx_r2.advancedSearchButton.text);
  }
}
function TablaComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275conditionalCreate(2, TablaComponent_Conditional_33_Conditional_2_Template, 3, 5, "div", 16);
    \u0275\u0275repeaterCreate(3, TablaComponent_Conditional_33_For_4_Template, 2, 5, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(5, TablaComponent_Conditional_33_Conditional_5_Template, 2, 5, "div", 16);
    \u0275\u0275conditionalCreate(6, TablaComponent_Conditional_33_Conditional_6_Template, 3, 4, "div", 16);
    \u0275\u0275conditionalCreate(7, TablaComponent_Conditional_33_Conditional_7_Template, 3, 4, "div", 16);
    \u0275\u0275conditionalCreate(8, TablaComponent_Conditional_33_Conditional_8_Template, 2, 5, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.divBarraButtons);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.title ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.barraButtons);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.agregar ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.eliminar || ctx_r2.restaurar) && ctx_r2.useGenericDelete ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activos && ctx_r2.eliminados && !ctx_r2.incluirEliminados ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showAdvancedButton ? 8 : -1);
  }
}
function TablaComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 26)(2, "div", 27)(3, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function TablaComponent_Conditional_34_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.stringSearch, $event) || (ctx_r2.stringSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function TablaComponent_Conditional_34_Template_input_keyup_enter_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.buscar());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function TablaComponent_Conditional_34_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.buscar());
    });
    \u0275\u0275element(5, "i", 30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.stringSearch);
  }
}
function TablaComponent_Conditional_36_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 31)(1, "div", 34)(2, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function TablaComponent_Conditional_36_Conditional_4_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.checkboxAll, $event) || (ctx_r2.checkboxAll = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function TablaComponent_Conditional_36_Conditional_4_Template_input_change_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.checkAll());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.checkboxAll);
  }
}
function TablaComponent_Conditional_36_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "tabla-header", 36);
    \u0275\u0275twoWayListener("sortChange", function TablaComponent_Conditional_36_For_6_Template_tabla_header_sortChange_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.sort, $event) || (ctx_r2.sort = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("sortChange", function TablaComponent_Conditional_36_For_6_Template_tabla_header_sortChange_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.getData());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const header_r16 = ctx.$implicit;
    const \u0275$index_150_r17 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.isHeader(header_r16) ? (header_r16.style == null ? null : header_r16.style.th) ?? ctx_r2.defaultResponsiveClass(\u0275$index_150_r17) : ctx_r2.defaultResponsiveClass(\u0275$index_150_r17));
    \u0275\u0275advance();
    \u0275\u0275property("header", header_r16);
    \u0275\u0275twoWayProperty("sort", ctx_r2.sort);
    \u0275\u0275property("column", ctx_r2.sort.column);
  }
}
function TablaComponent_Conditional_36_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 32);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 32)(1, "div", 34)(2, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function TablaComponent_Conditional_36_For_10_Conditional_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r18);
      const row_r19 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r19.isSelected, $event) || (row_r19.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TablaComponent_Conditional_36_For_10_Conditional_1_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r18);
      const row_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectRow(row_r19));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r19.isSelected);
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r21 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.rowValue(row_r19, header_r21)));
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r21 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.rowValue(row_r19, header_r21)));
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "lowercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r21 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.rowValue(row_r19, header_r21)));
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r21 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r2.rowValue(row_r19, header_r21), header_r21.dateFormat ?? ctx_r2.defaultDateFormat) ?? "N/A", " ");
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r21 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.rowValue(row_r19, header_r21) ?? "N/A");
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275listener("click", function TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const row_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expand(row_r19));
    });
    \u0275\u0275conditionalCreate(1, TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_1_Template, 3, 3, "span")(2, TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_2_Template, 3, 3, "span")(3, TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_3_Template, 3, 3, "span")(4, TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_4_Template, 3, 4, "span")(5, TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Case_5_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_24_0;
    const ctx_r21 = \u0275\u0275nextContext();
    const header_r21 = ctx_r21.$implicit;
    const \u0275$index_170_r23 = ctx_r21.$index;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(header_r21.styleTdFunction ? header_r21.styleTdFunction(row_r19, ctx_r2.utils) : (header_r21.style == null ? null : header_r21.style.td) ?? ctx_r2.defaultResponsiveClass(\u0275$index_170_r23));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_24_0 = header_r21.pipe) === "currency" ? 1 : tmp_24_0 === "uppercase" ? 2 : tmp_24_0 === "lowercase" ? 3 : tmp_24_0 === "date" ? 4 : 5);
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r21 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r19[header_r21], ctx_r2.defaultDateFormat), " ");
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const header_r21 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", row_r19[header_r21] ?? "N/A", " ");
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275listener("click", function TablaComponent_Conditional_36_For_10_For_3_Conditional_1_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const row_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.expand(row_r19));
    });
    \u0275\u0275conditionalCreate(1, TablaComponent_Conditional_36_For_10_For_3_Conditional_1_Conditional_1_Template, 3, 4, "span")(2, TablaComponent_Conditional_36_For_10_For_3_Conditional_1_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r21 = \u0275\u0275nextContext();
    const header_r21 = ctx_r21.$implicit;
    const \u0275$index_170_r23 = ctx_r21.$index;
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.defaultResponsiveClass(\u0275$index_170_r23));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.utils.isISODateString(row_r19[header_r21] ?? "") ? 1 : 2);
  }
}
function TablaComponent_Conditional_36_For_10_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TablaComponent_Conditional_36_For_10_For_3_Conditional_0_Template, 6, 3, "td", 16);
    \u0275\u0275conditionalCreate(1, TablaComponent_Conditional_36_For_10_For_3_Conditional_1_Template, 3, 3, "td", 39);
  }
  if (rf & 2) {
    const header_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.isHeader(header_r21) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isString(header_r21) ? 1 : -1);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 45);
    \u0275\u0275listener("click", function TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_2_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const row_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editEvent(row_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(ctx_r2.rowEditarButton.style);
    \u0275\u0275property("text", ctx_r2.rowEditarButton.text)("title", ctx_r2.rowEditarButton.title ?? "Editar");
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 46);
    \u0275\u0275listener("click", function TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_3_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const row_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editEvent(row_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(ctx_r2.rowEditarEliminadoButton.style);
    \u0275\u0275property("title", ctx_r2.rowEditarButton.title ?? "Ver")("text", ctx_r2.rowEditarEliminadoButton.text);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 46);
    \u0275\u0275listener("click", function TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_4_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const row_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.genericDelete(row_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(ctx_r2.rowEliminarButton.style);
    \u0275\u0275property("title", ctx_r2.rowEditarButton.title ?? "Eliminar")("text", ctx_r2.rowEliminarButton.text);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 46);
    \u0275\u0275listener("click", function TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_5_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const row_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.genericDelete(row_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(ctx_r2.rowRestaurarButton.style);
    \u0275\u0275property("title", ctx_r2.rowEditarButton.title ?? "Restaurar")("text", ctx_r2.rowRestaurarButton.text);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 47);
    \u0275\u0275listener("clickButtonEvent", function TablaComponent_Conditional_36_For_10_Conditional_4_For_7_Template_app_button_clickButtonEvent_0_listener() {
      const button_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const row_r19 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rowButtonClickEvent.emit({ key: button_r30.key, row: row_r19 }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const button_r30 = ctx.$implicit;
    \u0275\u0275styleMap(button_r30.style);
    \u0275\u0275property("text", button_r30.text)("title", button_r30.title);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div");
    \u0275\u0275conditionalCreate(2, TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_2_Template, 1, 4, "app-button", 43);
    \u0275\u0275conditionalCreate(3, TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_3_Template, 1, 4, "app-button", 44);
    \u0275\u0275conditionalCreate(4, TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_4_Template, 1, 4, "app-button", 44);
    \u0275\u0275conditionalCreate(5, TablaComponent_Conditional_36_For_10_Conditional_4_Conditional_5_Template, 1, 4, "app-button", 44);
    \u0275\u0275repeaterCreate(6, TablaComponent_Conditional_36_For_10_Conditional_4_For_7_Template, 1, 4, "app-button", 43, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r2.rowButtonsStyle == null ? null : ctx_r2.rowButtonsStyle.td) ?? "d-table-cell text-end");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r2.rowButtonsStyle == null ? null : ctx_r2.rowButtonsStyle.div) ?? "hstack gap-1");
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r19.deleted_at && ctx_r2.rowEditar ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r19.deleted_at && ctx_r2.rowEditar ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.eliminar && ctx_r2.rowEliminar && !row_r19.deleted_at ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.restaurar && ctx_r2.rowEliminar && row_r19.deleted_at ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.rowButtons);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", header_r31.header, " ");
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, header_r31.replaceAll("_", " ")), " ");
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r31 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.rowValue(row_r19, header_r31)));
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r31 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.rowValue(row_r19, header_r31)));
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "lowercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r31 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r2.rowValue(row_r19, header_r31)));
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r31 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r2.rowValue(row_r19, header_r31), header_r31.dateFormat ?? ctx_r2.defaultDateFormat));
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r31 = \u0275\u0275nextContext(2).$implicit;
    const row_r19 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.rowValue(row_r19, header_r31) ?? "N/A");
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_0_Template, 3, 3, "span")(1, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_1_Template, 3, 3, "span")(2, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_2_Template, 3, 3, "span")(3, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_3_Template, 3, 4, "span")(4, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Case_4_Template, 2, 1, "span");
  }
  if (rf & 2) {
    let tmp_23_0;
    const header_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional((tmp_23_0 = header_r31.pipe) === "currency" ? 0 : tmp_23_0 === "uppercase" ? 1 : tmp_23_0 === "lowercase" ? 2 : tmp_23_0 === "date" ? 3 : 4);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const header_r31 = \u0275\u0275nextContext().$implicit;
    const row_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", row_r19[header_r31] ?? "N/A", " ");
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "p", 53);
    \u0275\u0275conditionalCreate(2, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(3, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_3_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 54);
    \u0275\u0275conditionalCreate(5, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_5_Template, 5, 1);
    \u0275\u0275conditionalCreate(6, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Conditional_6_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const header_r31 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isHeader(header_r31) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isString(header_r31) ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isHeader(header_r31) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isString(header_r31) ? 6 : -1);
  }
}
function TablaComponent_Conditional_36_For_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48)(2, "div", 49)(3, "div", 50)(4, "div", 51);
    \u0275\u0275text(5, " Informacion adicional ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, TablaComponent_Conditional_36_For_10_Conditional_5_For_7_Template, 7, 4, "div", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("colSpan", ctx_r2.tableDefinition.columns.length + 2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.detailedDefinition);
  }
}
function TablaComponent_Conditional_36_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37);
    \u0275\u0275conditionalCreate(1, TablaComponent_Conditional_36_For_10_Conditional_1_Template, 3, 1, "td", 32);
    \u0275\u0275repeaterCreate(2, TablaComponent_Conditional_36_For_10_For_3_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(4, TablaComponent_Conditional_36_For_10_Conditional_4_Template, 8, 8, "td", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, TablaComponent_Conditional_36_For_10_Conditional_5_Template, 8, 1, "tr");
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pointer", ctx_r2.isDetailed)("opacity-30", ctx_r2.isAnyExpanded && ctx_r2.isDetailed && !row_r19.isExpanded)("table-secondary", row_r19.isExpanded);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.checkbox ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.tableDefinition.columns);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.rowButtons.length > 0 || ctx_r2.eliminar && ctx_r2.rowEliminar || ctx_r2.rowEditar ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isDetailed && ctx_r2.detailedDefinition.length > 0 && row_r19.isExpanded ? 5 : -1);
  }
}
function TablaComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "table")(2, "thead")(3, "tr");
    \u0275\u0275conditionalCreate(4, TablaComponent_Conditional_36_Conditional_4_Template, 3, 1, "th", 31);
    \u0275\u0275repeaterCreate(5, TablaComponent_Conditional_36_For_6_Template, 2, 5, "th", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(7, TablaComponent_Conditional_36_Conditional_7_Template, 1, 0, "th", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, TablaComponent_Conditional_36_For_10_Template, 6, 9, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-paginador", 33);
    \u0275\u0275twoWayListener("data_paginadorChange", function TablaComponent_Conditional_36_Template_app_paginador_data_paginadorChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.paginador, $event) || (ctx_r2.paginador = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("actualizar_tablaChange", function TablaComponent_Conditional_36_Template_app_paginador_actualizar_tablaChange_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.getData());
    });
    \u0275\u0275twoWayListener("per_pageChange", function TablaComponent_Conditional_36_Template_app_paginador_per_pageChange_11_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.paginador.per_page, $event) || (ctx_r2.paginador.per_page = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r2.tableDefinition.style == null ? null : ctx_r2.tableDefinition.style.div) ?? "container-fluid");
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx_r2.tableDefinition.style == null ? null : ctx_r2.tableDefinition.style.table) ?? "table-cool table");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-30", ctx_r2.isAnyExpanded && ctx_r2.isDetailed);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.checkbox ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.tableDefinition.columns);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.rowButtons.length > 0 || ctx_r2.eliminar && ctx_r2.rowEliminar || ctx_r2.rowEditar ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.dataSource);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("data_paginador", ctx_r2.paginador);
    \u0275\u0275property("total_pages", ctx_r2.total_pages);
    \u0275\u0275twoWayProperty("per_page", ctx_r2.paginador.per_page);
    \u0275\u0275property("sm", true)("total_items", ctx_r2.total_items);
  }
}
function TablaComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.tableDefinition.emptyMsg ?? "No hay registros, la tabla esta vac\xEDa.", " ");
  }
}
var _TablaComponent = class _TablaComponent {
  constructor(router, route, utils) {
    this.router = router;
    this.route = route;
    this.utils = utils;
    this.relations = [];
    this.barraButtons = [];
    this.useClickedStyleOnHeaderButton = true;
    this.startEmpty = false;
    this.lastHeaderButtonClicked = "";
    this.showAdvancedButton = true;
    this.advancedSearch = [];
    this.showAdvancedSearch = false;
    this.barraButtonClickEvent = new EventEmitter();
    this.divBarraButtons = "row justify-content-end mb-2";
    this.agregar = true;
    this.showBarraButtons = true;
    this.useDefaultAgregarRedirect = true;
    this.agregarRedirectRoute = "../nuevo";
    this.agregarButton = {
      text: "Nuevo",
      style: {
        icon: "bi bi-plus-circle-fill ms-1",
        button: "btn btn btn-secondary shadow text-bold scale-05",
        div: "col-auto p-1"
      }
    };
    this.agregarClick = new EventEmitter();
    this.eliminar = true;
    this.eliminarButton = {
      key: "eliminar",
      text: "Eliminar",
      style: {
        icon: "bi bi-trash-fill ms-1",
        button: "btn btn btn-danger shadow text-bold scale-05",
        div: "col-auto p-1"
      }
    };
    this.restaurar = true;
    this.restaurarButton = {
      key: "restaurar",
      text: "Restaurar",
      style: {
        icon: "bi bi-arrow-counterclockwise ms-1",
        button: "btn btn btn-success shadow text-bold scale-05",
        div: "col-auto p-1"
      }
    };
    this.eliminarClick = new EventEmitter();
    this.activos = true;
    this.activosButton = {
      key: "activos",
      text: "Activos",
      style: {
        icon: "bi bi-folder-check ms-1",
        button: "btn btn btn-info shadow text-bold scale-05",
        div: "col-auto p-1"
      }
    };
    this.activosClick = new EventEmitter();
    this.eliminados = true;
    this.eliminadosButton = {
      key: "eliminados",
      text: "Eliminados",
      style: {
        icon: "bi bi-folder-x ms-1",
        button: "btn btn btn-warning shadow text-bold scale-05",
        div: "col-auto p-1"
      }
    };
    this.eliminadosClick = new EventEmitter();
    this.advancedSearchButton = {
      style: {
        icon: "bi bi-filter-circle-fill",
        button: "btn btn btn-primary shadow scale-05",
        div: "col-auto p-1"
      }
    };
    this.simpleFilteredSearch = [];
    this.rowButtons = [];
    this.rowButtonClickEvent = new EventEmitter();
    this.useDefaultRowEditRedirect = true;
    this.rowEditar = true;
    this.useRelative = true;
    this.rowEditarRoute = "../editar";
    this.idKey = "id";
    this.rowEditarButton = {
      style: {
        button: "btn btn-sm btn-success scale-05",
        icon: "bi bi-pencil-fill"
      }
    };
    this.rowEditarEliminadoButton = {
      style: {
        button: "btn btn-sm btn-info scale-05",
        icon: "bi bi-eye-fill"
      }
    };
    this.rowEditarClick = new EventEmitter();
    this.rowEliminar = true;
    this.rowEliminarButton = {
      style: {
        button: "btn btn-sm btn-danger scale-05",
        icon: "bi bi-trash-fill"
      }
    };
    this.rowRestaurarButton = {
      style: {
        button: "btn btn-sm btn-success scale-05",
        icon: "bi bi-arrow-counterclockwise"
      }
    };
    this.useGenericDelete = true;
    this.rowEliminarClick = new EventEmitter();
    this.tableDefinition = {
      style: {},
      columns: []
    };
    this.paginador = {
      per_page: 10,
      page: 1
    };
    this.barraBusqueda = true;
    this.isDetailed = false;
    this.detailedDefinition = [];
    this.checkbox = true;
    this.defaultDateFormat = "dd/MM/yyyy";
    this.params = [];
    this.getConditionals = [
      {
        key: "deleted_at",
        operator: "IS NULL",
        value: null
      }
    ];
    this.getAdvancedFilters = [];
    this.getExtra = void 0;
    this.getMethod = "get";
    this.filtrosLimpios = new EventEmitter();
    this.incluirEliminados = false;
    this.selected = 0;
    this.selectedRows = [];
    this.selectedRowsChange = new EventEmitter();
    this.checkboxAll = false;
    this.creadoAntesDe = {
      key: "created_at",
      operator: "<",
      value: null
    };
    this.creadoDespuesDe = {
      key: "created_at",
      operator: ">",
      value: null
    };
    this.stringSearch = "";
    this.dataSource = [];
    this.isAnyExpanded = false;
    this.total_pages = 0;
    this.total_items = 0;
    this.sort = {
      column: "created_at",
      desc: true
    };
    this.status = true;
  }
  ngOnInit() {
    if (this.startEmpty)
      return;
    if (this.getExtra)
      return;
    this.verActivos();
  }
  ngOnChanges(changes) {
    if (changes["getConditionals"] || changes["getExtra"] || changes["getAdvancedFilters"]) {
      this.getData();
    }
    if (changes["advancedSearch"] && this.advancedSearch.length > 0) {
      this.advancedSearch.forEach((field) => {
        field.inputGroup = true;
      });
    }
  }
  agregarEvent() {
    this.agregarClick.emit();
    if (this.useDefaultAgregarRedirect) {
      this.router.navigate([this.agregarRedirectRoute], { relativeTo: this.route });
    }
  }
  editEvent(row) {
    this.rowEditarClick.emit(row);
    if (this.useDefaultRowEditRedirect) {
      if (this.useRelative) {
        this.router.navigate([this.rowEditarRoute + "/" + row[this.idKey]], { relativeTo: this.route });
      } else {
        this.router.navigate([this.rowEditarRoute + "/" + row[this.idKey]]);
      }
    }
  }
  limpiarFiltros() {
    this.paginador.page = 1;
    this.advancedSearch.forEach((filter) => filter.value = void 0);
    this.simpleFilteredSearch.forEach((filter) => filter.value = void 0);
    this.creadoAntesDe.value = null;
    this.creadoDespuesDe.value = null;
    this.filtrosLimpios.emit();
    this.getData();
  }
  applyFilters() {
    this.paginador.page = 1;
    this.getData();
  }
  getData() {
    return __async(this, null, function* () {
      if (this.startEmpty) {
        this.startEmpty = false;
        return;
      }
      let busquedaAvanzada = this.generarBusquedaAvanzadaData();
      if (busquedaAvanzada == "[]")
        busquedaAvanzada = this.getExtra?.["busqueda_avanzada"] ?? "[]";
      const extraData = __spreadProps(__spreadValues({}, this.getExtra), {
        search: this.stringSearch,
        busqueda_avanzada: busquedaAvanzada,
        sort: JSON.stringify(this.sort)
      });
      const conditionals = [...this.params, ...this.getConditionals];
      if (this.creadoAntesDe.value)
        conditionals.push(this.creadoAntesDe);
      if (this.creadoDespuesDe.value)
        conditionals.push(this.creadoDespuesDe);
      this.simpleFilteredSearch.filter((filter) => filter.value !== void 0).forEach((filter) => {
        conditionals.push({
          key: filter.key,
          operator: "=",
          value: filter.value
        });
      });
      const res = this.getMethod && typeof this.controller[this.getMethod] === "function" ? yield this.controller[this.getMethod](conditionals, this.paginador, this.relations, extraData) : yield this.controller.get(conditionals, this.paginador, this.relations, extraData);
      this.dataSource = res.data ?? [];
      this.total_pages = res.total_pages ?? 0;
      this.total_items = res.total_items ?? 0;
      this.checkColumns();
      this.showAdvancedSearch = false;
    });
  }
  generarBusquedaAvanzadaData() {
    const data = [];
    this.advancedSearch.filter((filtro) => filtro.value !== void 0 && filtro.value !== "").forEach((filtro) => {
      data.push({
        relation: filtro.key,
        operator: filtro.operator,
        count: filtro.count,
        conditionals: (filtro.conditionals ?? []).map((cond) => [cond.key, cond.operator, cond.value ?? filtro.value]),
        andConditionals: (filtro.andConditionals ?? []).map((cond) => [cond.key, cond.operator, cond.value ?? filtro.value])
      });
    });
    this.getAdvancedFilters.forEach((filtro) => data.push(filtro));
    console.log(data);
    return JSON.stringify(data);
  }
  /**
   * initialize tableDefinition if it's undefined
   */
  checkColumns() {
    if (this.tableDefinition.columns.length == 0 && this.dataSource.length > 0) {
      this.tableDefinition.columns = Object.keys(this.dataSource[0]).filter((key) => !["isSelected", "isExpanded"].includes(key));
    }
    this.detailedDefinition = this.copy(this.tableDefinition.columns);
    if (this.incluirEliminados) {
      this.addColumn("deleted_at");
    }
  }
  verActivos() {
    return __async(this, null, function* () {
      if (!this.incluirEliminados) {
        this.removeConditional("deleted_at");
        this.addConditional({
          key: "deleted_at",
          operator: "IS NULL",
          value: null
        });
      }
      this.paginador.page = 1;
      this.status = true;
      yield this.getData();
      this.removeColumn("deleted_at");
    });
  }
  selectRow(row) {
    this.selected += row.isSelected ? 1 : -1;
    this.updateSelectedRows();
  }
  updateSelectedRows() {
    this.selectedRows = this.dataSource.filter((row) => row.isSelected);
    this.selectedRowsChange.emit(this.selectedRows);
  }
  verEliminados() {
    return __async(this, null, function* () {
      this.removeConditional("deleted_at");
      this.addConditional({
        key: "deleted_at",
        operator: "IS NOT NULL",
        value: null
      });
      this.paginador.page = 1;
      this.status = false;
      yield this.getData();
      this.addColumn("deleted_at");
    });
  }
  genericDelete(row) {
    return __async(this, null, function* () {
      if (row["id"] && this.useGenericDelete) {
        yield this.controller?.switch(row["id"]);
        this.getData();
        return;
      }
      this.rowEliminarClick.emit(row);
    });
  }
  genericDeleteMultiple() {
    return __async(this, null, function* () {
      if (this.useGenericDelete) {
        for (const row of this.dataSource.filter((row2) => row2.isSelected)) {
          yield this.controller?.switch(row["id"]);
        }
        this.getData();
      }
    });
  }
  copy(data) {
    return JSON.parse(JSON.stringify(data));
  }
  buscar() {
    this.paginador.page = 1;
    this.getData();
  }
  isHeader(header) {
    return header.key !== void 0;
  }
  isString(header) {
    return typeof header === "string";
  }
  checkAll() {
    this.dataSource.forEach((row) => row.isSelected = this.checkboxAll);
    this.selected = this.checkboxAll ? this.dataSource.length : 0;
    this.updateSelectedRows();
  }
  defaultResponsiveClass(index) {
    const classes = ["d-sm-table-cell", "d-none d-sm-table-cell", "d-none d-md-table-cell", "d-none d-lg-table-cell", "d-none d-xl-table-cell"];
    return classes[index] ?? "d-none d-xl-table-cell";
  }
  addConditional(cond) {
    const exists = this.getConditionals.some((conditional) => conditional.key == cond.key);
    if (!exists) {
      this.getConditionals.push(cond);
    }
  }
  removeConditional(key) {
    const find = this.getConditionals.find((conditional) => conditional.key == key);
    if (find) {
      this.getConditionals.splice(this.getConditionals.indexOf(find), 1);
    }
  }
  /**
  * Agrega una columna al arreglo `tableDefinition.columns` si no existe ya.
  * Si `column` es un objeto de tipo `Header`, verifica la existencia mediante su propiedad `key`.
  * Si `column` es un `string`, se compara directamente.
  *
  * @param column La columna que se desea agregar. Puede ser un objeto `Header` o un `string`.
  */
  addColumn(column) {
    const exists = this.tableDefinition.columns.some((header) => {
      if (this.isHeader(header) && this.isHeader(column)) {
        return header.key === column.key;
      }
      return header === column;
    });
    if (!exists) {
      this.tableDefinition.columns.push(column);
    }
  }
  /**
   * Elimina una columna del arreglo `tableDefinition.columns` si existe.
   * Si `column` es un objeto de tipo `Header`, elimina la columna coincidente por su propiedad `key`.
   * Si `column` es un `string`, elimina la coincidencia directa.
   *
   * @param column La columna que se desea eliminar. Puede ser un objeto `Header` o un `string`.
   */
  removeColumn(column) {
    const index = this.tableDefinition.columns.findIndex((header) => {
      if (this.isHeader(header) && this.isHeader(column)) {
        return header.key === column.key;
      }
      return header === column;
    });
    if (index > -1) {
      this.tableDefinition.columns.splice(index, 1);
    }
  }
  addParam(param) {
    if (param.key == "deteled_at")
      return;
    const find = this.params.find((item) => item.key == param.key);
    if (!find) {
      this.params.push(param);
    } else {
      find.operator = param.operator;
      find.value = param.value;
    }
  }
  rowValue(row, header) {
    if (header.subKey && row[header.key] && !Array.isArray(row[header.key][header.subKey])) {
      return row[header.key][header.subKey];
    }
    if (header.function) {
      const value = header.key === "row" ? row : row[header.key];
      if (value !== void 0) {
        return header.function(value, this.utils);
      }
      return void 0;
    }
    if (header.keyList && header.keyList.length > 0 && row[header.key]) {
      let value = row[header.key];
      for (const key of header.keyList) {
        if (value[key]) {
          value = value[key];
        }
      }
      if (!(typeof value === "string")) {
        return void 0;
      }
      return value;
    }
    return row[header.key];
  }
  expand(row) {
    if (this.detailedDefinition.length == 0 || !this.isDetailed)
      return;
    if (this.dataSource.some((row2) => row2.isExpanded) && !row.isExpanded) {
      this.dataSource.forEach((row2) => row2.isExpanded = false);
    }
    row.isExpanded = !row.isExpanded;
    if (row.isExpanded) {
      this.isAnyExpanded = true;
    } else {
      this.isAnyExpanded = false;
    }
  }
};
_TablaComponent.\u0275fac = function TablaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_TablaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaComponent, selectors: [["app-tabla"]], inputs: { title: "title", titleStyle: "titleStyle", controller: "controller", relations: "relations", barraButtons: "barraButtons", useClickedStyleOnHeaderButton: "useClickedStyleOnHeaderButton", startEmpty: "startEmpty", showAdvancedButton: "showAdvancedButton", advancedSearch: "advancedSearch", divBarraButtons: "divBarraButtons", agregar: "agregar", showBarraButtons: "showBarraButtons", useDefaultAgregarRedirect: "useDefaultAgregarRedirect", agregarRedirectRoute: "agregarRedirectRoute", agregarButton: "agregarButton", eliminar: "eliminar", eliminarButton: "eliminarButton", restaurar: "restaurar", restaurarButton: "restaurarButton", activos: "activos", activosButton: "activosButton", eliminados: "eliminados", eliminadosButton: "eliminadosButton", advancedSearchButton: "advancedSearchButton", simpleFilteredSearch: "simpleFilteredSearch", rowButtons: "rowButtons", rowButtonsStyle: "rowButtonsStyle", useDefaultRowEditRedirect: "useDefaultRowEditRedirect", rowEditar: "rowEditar", useRelative: "useRelative", rowEditarRoute: "rowEditarRoute", idKey: "idKey", rowEditarButton: "rowEditarButton", rowEditarEliminadoButton: "rowEditarEliminadoButton", rowEliminar: "rowEliminar", rowEliminarButton: "rowEliminarButton", rowRestaurarButton: "rowRestaurarButton", useGenericDelete: "useGenericDelete", tableDefinition: "tableDefinition", paginador: "paginador", barraBusqueda: "barraBusqueda", isDetailed: "isDetailed", detailedDefinition: "detailedDefinition", checkbox: "checkbox", defaultDateFormat: "defaultDateFormat", getConditionals: "getConditionals", getAdvancedFilters: "getAdvancedFilters", getExtra: "getExtra", getMethod: "getMethod", incluirEliminados: "incluirEliminados", selected: "selected", selectedRows: "selectedRows", sort: "sort" }, outputs: { barraButtonClickEvent: "barraButtonClickEvent", agregarClick: "agregarClick", eliminarClick: "eliminarClick", activosClick: "activosClick", eliminadosClick: "eliminadosClick", rowButtonClickEvent: "rowButtonClickEvent", rowEditarClick: "rowEditarClick", rowEliminarClick: "rowEliminarClick", filtrosLimpios: "filtrosLimpios", selectedRowsChange: "selectedRowsChange" }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c1, decls: 38, vars: 8, consts: [[3, "showChange", "show"], [1, "container", "px-4"], [1, "row"], [1, "col"], [1, "text-center", "pb-2"], [1, "col-auto", "align-self-end"], [1, "text-success", "pointer", 3, "click"], [1, "row", "my-1"], [1, "col", "text-center", "p-1"], [1, "input-group", "shadow-sm"], [1, "input-group-text"], ["type", "date", "placeholder", "Ingrese una busqueda...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "row", "my-2", "mt-4"], [1, "btn", "btn-success", 3, "click"], [1, "container-fluid", "p-1", "pt-2", "m-0"], [1, "row", "my-2"], [3, "class"], [1, "row", "justify-content-center", "my-2"], [1, "col-lg-12", "text-center", "h4", "text-300", "mt-5", "msg-empty"], [3, "field"], [1, "col-12", "col-sm-auto", "px-4", "py-3"], [3, "clickButtonEvent", "text"], [3, "click", "text"], [3, "style", "text", "disabled"], [3, "clickButtonEvent", "text", "disabled"], [3, "style", "text"], [1, "col-12", "col-sm-10", "col-md-9", "col-lg-8"], [1, "input-group"], ["type", "text", "placeholder", "Buscar palabra clave", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-search"], [1, "table-cell"], [1, "d-table-cell"], [3, "data_paginadorChange", "actualizar_tablaChange", "per_pageChange", "data_paginador", "total_pages", "per_page", "sm", "total_items"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "change", "ngModel"], [3, "sortChange", "header", "sort", "column"], [1, "tr-hover"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "text-uppercase", 3, "class"], [3, "click"], [1, "text-uppercase"], [1, "text-uppercase", 3, "click"], [3, "style", "text", "title"], [3, "style", "title", "text"], [3, "click", "text", "title"], [3, "click", "title", "text"], [3, "clickButtonEvent", "text", "title"], [1, "p-2", "round-l", 3, "colSpan"], [1, "container-fluid", "p-1", "pb-5", "border", "border-primary", "border-5", "bg-light", "shadow", "round-l", 2, "--bs-border-opacity", "0.5"], [1, "row", "justify-content-evenly"], [1, "col-lg-12", "text-center", "text-blue3", "text-bold", "text-m", "contenedor"], [1, "col-11", "col-sm-4", "col-lg-3", "round-s", "shadow-sm", "border", "rounded", "bg-light", "p-1", "m-2"], [1, "fw-bolder", "m-0", "p-0"], [1, "text-m", "text-left", "m-0", "p-0"]], template: function TablaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c02);
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function TablaComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showAdvancedSearch, $event) || (ctx.showAdvancedSearch = $event);
      return $event;
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4)(5, "b");
    \u0275\u0275text(6, "Busqueda Avanzada");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "a", 6);
    \u0275\u0275listener("click", function TablaComponent_Template_a_click_8_listener() {
      return ctx.limpiarFiltros();
    });
    \u0275\u0275elementStart(9, "u");
    \u0275\u0275text(10, "Limpiar filtros");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275projection(11);
    \u0275\u0275repeaterCreate(12, TablaComponent_For_13_Template, 3, 1, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(14, TablaComponent_For_15_Template, 3, 1, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "label", 10);
    \u0275\u0275text(20, "Creado Antes De:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function TablaComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.creadoAntesDe.value, $event) || (ctx.creadoAntesDe.value = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function TablaComponent_Template_input_keyup_enter_21_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 7)(23, "div", 8)(24, "div", 9)(25, "label", 10);
    \u0275\u0275text(26, "Creado Despues De:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function TablaComponent_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.creadoDespuesDe.value, $event) || (ctx.creadoDespuesDe.value = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function TablaComponent_Template_input_keyup_enter_27_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 12)(29, "button", 13);
    \u0275\u0275listener("click", function TablaComponent_Template_button_click_29_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275text(30, " Aplicar Filtros ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 14);
    \u0275\u0275conditionalCreate(32, TablaComponent_Conditional_32_Template, 3, 1, "div", 15);
    \u0275\u0275conditionalCreate(33, TablaComponent_Conditional_33_Template, 9, 7, "div", 16);
    \u0275\u0275conditionalCreate(34, TablaComponent_Conditional_34_Template, 6, 1, "div", 17);
    \u0275\u0275projection(35, 1);
    \u0275\u0275conditionalCreate(36, TablaComponent_Conditional_36_Template, 12, 13, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(37, TablaComponent_Conditional_37_Template, 2, 1, "div", 18);
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.showAdvancedSearch);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx.simpleFilteredSearch);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.advancedSearch);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.creadoAntesDe.value);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.creadoDespuesDe.value);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx.showBarraButtons ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showBarraButtons ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.barraBusqueda ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.dataSource.length > 0 ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dataSource.length == 0 ? 37 : -1);
  }
}, dependencies: [
  CommonModule,
  UpperCasePipe,
  LowerCasePipe,
  CurrencyPipe,
  DatePipe,
  FormsModule,
  DefaultValueAccessor,
  CheckboxControlValueAccessor,
  NgControlStatus,
  NgModel,
  PaginadorComponent,
  ButtonComponent,
  FormularioFlotanteComponent,
  TitlecasePipe,
  FormFieldComponent,
  TablaHeaderComponent
], styles: ["\n\n.btn-group[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n.banner-heigth[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.form-check[_ngcontent-%COMP%] {\n  margin: 2%;\n  margin-left: 2%;\n}\n.bi-header[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.h4[_ngcontent-%COMP%] {\n  margin-left: 2%;\n  margin: 2%;\n}\n.msg-empty[_ngcontent-%COMP%] {\n  margin-bottom: 10%;\n}\n.row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n.row-selected[_ngcontent-%COMP%] {\n  background-color: rgb(46, 46, 201);\n  color: white;\n}\n.search[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.info-section[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #ffffff;\n}\n.tr-hover[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background-color: rgb(232, 244, 255);\n}\n.table-cool[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  background-color: white;\n  color: rgb(80, 47, 145);\n}\n.page-selected[_ngcontent-%COMP%] {\n  background-color: rgb(80, 47, 145) !important;\n  color: white !important;\n}\n.pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background-color: rgb(80, 47, 145);\n  color: white;\n  transform: scale(1.15);\n}\n.pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active {\n  background-color: white;\n  color: rgb(80, 47, 145);\n}\n.transparent[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.349) !important;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.detalles[_ngcontent-%COMP%]:hover {\n  color: rgb(1, 113, 179);\n  font-weight: bold;\n  cursor: pointer;\n  transition: font-weight 1 ease;\n  transform: scale(1.3);\n  transition: transform 0.5s ease;\n  margin: 0;\n}\n.detalles[_ngcontent-%COMP%] {\n  font-weight: bold;\n  transition: font-weight 1 ease;\n  color: rgb(3, 75, 97);\n  transform: scale(1);\n  transition: transform 0.5s ease;\n}\n.table-cool[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table-cool[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  padding: 0.75rem;\n}\n.banner-heigth[_ngcontent-%COMP%] {\n  height: 45px;\n}\n.body-heigth[_ngcontent-%COMP%] {\n  height: calc(100vh - 50px);\n  width: 100%;\n  overflow: auto;\n}\n.body-all[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  margin-top: 10px;\n}\n.input-s[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.input-m[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.div-buttons[_ngcontent-%COMP%] {\n  width: 100px;\n}\n@media (max-width: 800px) {\n  .banner-heigth[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n  .body-heigth[_ngcontent-%COMP%] {\n    height: calc(100vh - 130px);\n    width: 100%;\n    overflow: auto;\n  }\n  .body-all[_ngcontent-%COMP%] {\n    width: 100%;\n    height: calc(100vh - 200px);\n  }\n  .div-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=tabla.component.css.map */"] });
var TablaComponent = _TablaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaComponent, [{
    type: Component,
    args: [{ selector: "app-tabla", imports: [
      CommonModule,
      FormsModule,
      PaginadorComponent,
      ButtonComponent,
      FormularioFlotanteComponent,
      TitlecasePipe,
      FormFieldComponent,
      TablaHeaderComponent
    ], template: `
<app-formulario-flotante [(show)]="showAdvancedSearch" >
  <div class="container px-4">
    <div class="row">
      <div class="col">
        <h4 class="text-center pb-2"><b>Busqueda Avanzada</b></h4>
      </div>
      <div class="col-auto align-self-end">
        <a class="text-success pointer" (click)="limpiarFiltros()"><u>Limpiar filtros</u></a>
      </div>
    </div>
    <ng-content select="[advanced-search]"></ng-content>
    @for (filter of simpleFilteredSearch; track filter) {
      <div class="row my-1">
        <div class="col text-center p-1">
          <app-form-field [field]="filter" />
        </div>
      </div>
    }
    @for (filter of advancedSearch; track filter) {
      <div class="row my-1">
        <div class="col text-center p-1">
          <app-form-field
            [field]="filter"
            />
        </div>
      </div>
    }
    <div class="row my-1">
      <div class="col text-center p-1">
        <div class="input-group shadow-sm">
          <label class="input-group-text">Creado Antes De:</label>
          <input
            type="date"
            class="form-control"
            [(ngModel)]="creadoAntesDe.value"
            placeholder="Ingrese una busqueda..."
            (keyup.enter)="applyFilters()"
            >
        </div>
      </div>
    </div>
    <div class="row my-1">
      <div class="col text-center p-1">
        <div class="input-group shadow-sm">
          <label class="input-group-text">Creado Despues De:</label>
          <input
            type="date"
            class="form-control"
            [(ngModel)]="creadoDespuesDe.value"
            placeholder="Ingrese una busqueda..."
            (keyup.enter)="applyFilters()"
            >
        </div>
      </div>
    </div>
    <div class="row my-2 mt-4">
      <button class="btn btn-success" (click)="applyFilters()">
        Aplicar Filtros
      </button>
    </div>
  </div>
</app-formulario-flotante>
<div class="container-fluid p-1 pt-2 m-0">
  @if (!showBarraButtons) {
    <div class="row my-2">
      <div class="col-12 col-sm-auto px-4 py-3">
      </div>
      @if (title) {
        <div [class]="titleStyle?.div??'col-auto p-1 me-auto'">
          <span [class]="titleStyle?.title??'h4 fw-bold text-nowrap'">{{title}}</span>
        </div>
      }
    </div>
  }
  @if (showBarraButtons) {
    <div [class]="divBarraButtons">
      <div class="col-12 col-sm-auto px-4 py-3">
      </div>
      @if (title) {
        <div [class]="titleStyle?.div??'col-auto p-1 me-auto'">
          <span [class]="titleStyle?.title??'h4 fw-bold text-nowrap'">{{title}}</span>
        </div>
      }
      @for (button of barraButtons; track button) {
        <div [class]="button.style?.div??'col-auto p-1'">
          <app-button
            [style]="button.style" [text]="button.text"
            (clickButtonEvent)="barraButtonClickEvent.emit(button.key)"
          ></app-button>
        </div>
      }
      @if (agregar) {
        <div [class]="activosButton.style?.div??'col-auto p-1'">
          <app-button [style]="agregarButton.style" [text]="agregarButton.text"
          (click)="agregarEvent()"></app-button>
        </div>
      }
      @if ((eliminar || restaurar) && useGenericDelete) {
        <div [class]="eliminarButton.style?.div??'col-auto p-1'">
          @if (status && eliminar) {
            <app-button [style]="eliminarButton.style" [text]="eliminarButton.text" (clickButtonEvent)="genericDeleteMultiple()" [disabled]="selected==0"></app-button>
          }
          @if (!status && restaurar) {
            <app-button [style]="restaurarButton.style" [text]="restaurarButton.text" (clickButtonEvent)="genericDeleteMultiple()"[disabled]="selected==0"></app-button>
          }
        </div>
      }
      @if (activos && eliminados && !incluirEliminados) {
        <div [class]="activosButton.style?.div??'col-auto p-1'">
          @if (!status && eliminados) {
            <app-button [style]="activosButton.style" [text]="activosButton.text" (click)="verActivos()"></app-button>
          }
          @if (status && activos) {
            <app-button [style]="eliminadosButton.style" [text]="eliminadosButton.text" (click)="verEliminados()"></app-button>
          }
        </div>
      }
      @if (showAdvancedButton) {
        <div [class]="advancedSearchButton.style?.div??'col-auto p-1'">
          <app-button [style]="advancedSearchButton.style" [text]="advancedSearchButton.text" (clickButtonEvent)="showAdvancedSearch=true"></app-button>
        </div>
      }
    </div>
  }
  @if (barraBusqueda) {
    <div class="row justify-content-center my-2">
      <div class="col-12 col-sm-10 col-md-9 col-lg-8">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Buscar palabra clave" [(ngModel)]="stringSearch" (keyup.enter)="buscar()">
          <button class="btn btn-outline-primary" type="button" (click)="buscar()">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  }
  <ng-content></ng-content>
  @if (dataSource.length>0) {
    <div [class]="tableDefinition.style?.div??'container-fluid'">
      <table [class]="tableDefinition.style?.table??'table-cool table'">
        <thead>
          <tr [class.opacity-30]="isAnyExpanded && isDetailed">
            @if (checkbox) {
              <th class="table-cell">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" [(ngModel)]="checkboxAll" (change)="checkAll()">
                </div>
              </th>
            }
            @for (header of tableDefinition.columns; track header; let i = $index) {
              <th [class]="isHeader(header) ? (header.style?.th ?? defaultResponsiveClass(i)) : defaultResponsiveClass(i)">
                <tabla-header [header]="header" [(sort)]="sort" [column]="sort.column" (sortChange)="getData()" />
              </th>
            }
            @if (rowButtons.length>0 || (eliminar && rowEliminar) || rowEditar) {
              <th class="d-table-cell"></th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of dataSource; track row.id) {
            <tr class="tr-hover" [class.pointer]="isDetailed"
              [class.opacity-30]="isAnyExpanded && isDetailed && !row.isExpanded"
              [class.table-secondary]="row.isExpanded">
              @if (checkbox) {
                <td class="d-table-cell">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" [(ngModel)]="row.isSelected" (ngModelChange)="selectRow(row)">
                  </div>
                </td>
              }
              @for (header of tableDefinition.columns; track header; let i = $index) {
                @if (isHeader(header)) {
                  <td [class]="header.styleTdFunction ? header.styleTdFunction(row, utils) :  ( header.style?.td ?? defaultResponsiveClass(i) )" (click)="expand(row)">
                    @switch (header.pipe) {
                      @case ('currency') {
                        <span>{{ rowValue(row,header) | currency }}</span>
                      }
                      @case ('uppercase') {
                        <span>{{ rowValue(row,header) | uppercase }}</span>
                      }
                      @case ('lowercase') {
                        <span>{{ rowValue(row,header) | lowercase }}</span>
                      }
                      @case ('date') {
                        <span>
                          {{ (rowValue(row,header) | date:(header.dateFormat??defaultDateFormat))??'N/A'}}
                        </span>
                      }
                      @default {
                        <span class="text-uppercase">{{ (rowValue(row,header) ?? 'N/A') }}</span>
                      }
                    }
                  </td>
                }
                @if (isString(header)) {
                  <td class="text-uppercase" [class]="defaultResponsiveClass(i)" (click)="expand(row)">
                    @if (utils.isISODateString(row[header]??'')) {
                      <span>
                        {{ row[header]|date:defaultDateFormat }}
                      </span>
                    } @else {
                      {{ row[header] ?? 'N/A' }}
                    }
                  </td>
                }
              }
              @if (rowButtons.length>0 || (eliminar && rowEliminar)  || rowEditar) {
                <td [class]="rowButtonsStyle?.td??'d-table-cell text-end'"
                  >
                  <div [class]="rowButtonsStyle?.div??'hstack gap-1'">
                    @if (!row.deleted_at && rowEditar) {
                      <app-button [style]="rowEditarButton.style" [text]="rowEditarButton.text"
                        [title]="rowEditarButton.title??'Editar'"
                      (click)="editEvent(row)"></app-button>
                    }
                    @if (row.deleted_at && rowEditar) {
                      <app-button [style]="rowEditarEliminadoButton.style"
                        [title]="rowEditarButton.title??'Ver'"
                        [text]="rowEditarEliminadoButton.text"
                      (click)="editEvent(row)"></app-button>
                    }
                    @if (eliminar && rowEliminar && !row.deleted_at) {
                      <app-button [style]="rowEliminarButton.style"
                        [title]="rowEditarButton.title??'Eliminar'"
                      [text]="rowEliminarButton.text" (click)="genericDelete(row)"></app-button>
                    }
                    @if (restaurar && rowEliminar && row.deleted_at) {
                      <app-button [style]="rowRestaurarButton.style"
                        [title]="rowEditarButton.title??'Restaurar'"
                      [text]="rowRestaurarButton.text" (click)="genericDelete(row)"></app-button>
                    }
                    @for (button of rowButtons; track button) {
                      <app-button
                        [style]="button.style"
                        [text]="button.text"
                        [title]="button.title"
                        (clickButtonEvent)="rowButtonClickEvent.emit({key:button.key, row:row})"
                        />
                    }
                  </div>
                </td>
              }
            </tr>
            @if (isDetailed && detailedDefinition.length>0 && row.isExpanded) {
              <tr>
                <td [colSpan]="tableDefinition.columns.length+2" class="p-2 round-l ">
                  <div class='container-fluid p-1 pb-5 border border-primary border-5 bg-light shadow round-l' style="--bs-border-opacity: 0.5;">
                    <div class='row justify-content-evenly'>
                      <div class='col-lg-12 text-center text-blue3 text-bold text-m contenedor'>
                        Informacion adicional
                      </div>
                      @for (header of detailedDefinition; track header) {
                        <div class='col-11 col-sm-4 col-lg-3 round-s shadow-sm border rounded bg-light p-1 m-2'>
                          <p class="fw-bolder m-0 p-0">
                            @if (isHeader(header)) {
                              <span>
                                {{header.header}}
                              </span>
                            }
                            @if (isString(header)) {
                              <span>
                                {{header.replaceAll('_',' ') | titlecase}}
                              </span>
                            }
                          </p>
                          <p class="text-m text-left m-0 p-0">
                            @if (isHeader(header)) {
                              @switch (header.pipe) {
                                @case ('currency') {
                                  <span>{{ rowValue(row,header) | currency }}</span>
                                }
                                @case ('uppercase') {
                                  <span>{{ rowValue(row,header) | uppercase }}</span>
                                }
                                @case ('lowercase') {
                                  <span>{{ rowValue(row,header) | lowercase }}</span>
                                }
                                @case ('date') {
                                  <span>{{ rowValue(row,header) |
                                  date:(header.dateFormat??defaultDateFormat) }}</span>
                                }
                                @default {
                                  <span>{{ rowValue(row,header) ?? 'N/A' }}</span>
                                }
                              }
                            }
                            @if (isString(header)) {
                              {{ row[header]??'N/A' }}
                            }
                          </p>
                        </div>
                      }
                    </div>
                  </div>
                </td>
              </tr>
            }
          }
        </tbody>
      </table>
      <app-paginador [(data_paginador)]="paginador" (actualizar_tablaChange)="getData()" [total_pages]="total_pages"
        [(per_page)]="paginador.per_page" [sm]="true" [total_items]="total_items">
      </app-paginador>
    </div>
  }
</div>
@if (dataSource.length==0) {
  <div class='col-lg-12 text-center h4 text-300 mt-5 msg-empty'>
    {{tableDefinition.emptyMsg ?? 'No hay registros, la tabla esta vac\xEDa.'}}
  </div>
}
`, styles: ["/* src/app/shared/tabla/tabla.component.css */\n.btn-group {\n  margin-left: 2%;\n}\n.banner-heigth {\n  height: 100px;\n}\n.form-check {\n  margin: 2%;\n  margin-left: 2%;\n}\n.bi-header {\n  font-size: 15px;\n}\n.h4 {\n  margin-left: 2%;\n  margin: 2%;\n}\n.msg-empty {\n  margin-bottom: 10%;\n}\n.row button {\n  margin-right: 20px;\n}\n.row-selected {\n  background-color: rgb(46, 46, 201);\n  color: white;\n}\n.search {\n  max-width: 600px;\n}\n.info-section {\n  border-radius: 5px;\n  background-color: #ffffff;\n}\n.tr-hover:hover td {\n  background-color: rgb(232, 244, 255);\n}\n.table-cool {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n}\n.page-item {\n  cursor: pointer;\n}\n.pagination > li > a {\n  background-color: white;\n  color: rgb(80, 47, 145);\n}\n.page-selected {\n  background-color: rgb(80, 47, 145) !important;\n  color: white !important;\n}\n.pagination > li > a:hover {\n  background-color: rgb(80, 47, 145);\n  color: white;\n  transform: scale(1.15);\n}\n.pagination > li > a:active {\n  background-color: white;\n  color: rgb(80, 47, 145);\n}\n.transparent {\n  background-color: rgba(255, 255, 255, 0.349) !important;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.detalles:hover {\n  color: rgb(1, 113, 179);\n  font-weight: bold;\n  cursor: pointer;\n  transition: font-weight 1 ease;\n  transform: scale(1.3);\n  transition: transform 0.5s ease;\n  margin: 0;\n}\n.detalles {\n  font-weight: bold;\n  transition: font-weight 1 ease;\n  color: rgb(3, 75, 97);\n  transform: scale(1);\n  transition: transform 0.5s ease;\n}\n.table-cool th,\n.table-cool td {\n  border: 1px solid #dee2e6;\n  padding: 0.75rem;\n}\n.banner-heigth {\n  height: 45px;\n}\n.body-heigth {\n  height: calc(100vh - 50px);\n  width: 100%;\n  overflow: auto;\n}\n.body-all {\n  width: 100%;\n  height: 100vh;\n  margin-top: 10px;\n}\n.input-s {\n  width: 120px;\n}\n.input-m {\n  width: 150px;\n}\n.div-buttons {\n  width: 100px;\n}\n@media (max-width: 800px) {\n  .banner-heigth {\n    height: 90px;\n  }\n  .body-heigth {\n    height: calc(100vh - 130px);\n    width: 100%;\n    overflow: auto;\n  }\n  .body-all {\n    width: 100%;\n    height: calc(100vh - 200px);\n  }\n  .div-buttons {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=tabla.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: UtilsService }], { title: [{
    type: Input
  }], titleStyle: [{
    type: Input
  }], controller: [{
    type: Input
  }], relations: [{
    type: Input
  }], barraButtons: [{
    type: Input
  }], useClickedStyleOnHeaderButton: [{
    type: Input
  }], startEmpty: [{
    type: Input
  }], showAdvancedButton: [{
    type: Input
  }], advancedSearch: [{
    type: Input
  }], barraButtonClickEvent: [{
    type: Output
  }], divBarraButtons: [{
    type: Input
  }], agregar: [{
    type: Input
  }], showBarraButtons: [{
    type: Input
  }], useDefaultAgregarRedirect: [{
    type: Input
  }], agregarRedirectRoute: [{
    type: Input
  }], agregarButton: [{
    type: Input
  }], agregarClick: [{
    type: Output
  }], eliminar: [{
    type: Input
  }], eliminarButton: [{
    type: Input
  }], restaurar: [{
    type: Input
  }], restaurarButton: [{
    type: Input
  }], eliminarClick: [{
    type: Output
  }], activos: [{
    type: Input
  }], activosButton: [{
    type: Input
  }], activosClick: [{
    type: Output
  }], eliminados: [{
    type: Input
  }], eliminadosButton: [{
    type: Input
  }], eliminadosClick: [{
    type: Output
  }], advancedSearchButton: [{
    type: Input
  }], simpleFilteredSearch: [{
    type: Input
  }], rowButtons: [{
    type: Input
  }], rowButtonClickEvent: [{
    type: Output
  }], rowButtonsStyle: [{
    type: Input
  }], useDefaultRowEditRedirect: [{
    type: Input
  }], rowEditar: [{
    type: Input
  }], useRelative: [{
    type: Input
  }], rowEditarRoute: [{
    type: Input
  }], idKey: [{
    type: Input
  }], rowEditarButton: [{
    type: Input
  }], rowEditarEliminadoButton: [{
    type: Input
  }], rowEditarClick: [{
    type: Output
  }], rowEliminar: [{
    type: Input
  }], rowEliminarButton: [{
    type: Input
  }], rowRestaurarButton: [{
    type: Input
  }], useGenericDelete: [{
    type: Input
  }], rowEliminarClick: [{
    type: Output
  }], tableDefinition: [{
    type: Input
  }], paginador: [{
    type: Input
  }], barraBusqueda: [{
    type: Input
  }], isDetailed: [{
    type: Input
  }], detailedDefinition: [{
    type: Input
  }], checkbox: [{
    type: Input
  }], defaultDateFormat: [{
    type: Input
  }], getConditionals: [{
    type: Input
  }], getAdvancedFilters: [{
    type: Input
  }], getExtra: [{
    type: Input
  }], getMethod: [{
    type: Input
  }], filtrosLimpios: [{
    type: Output
  }], incluirEliminados: [{
    type: Input
  }], selected: [{
    type: Input
  }], selectedRows: [{
    type: Input
  }], selectedRowsChange: [{
    type: Output
  }], sort: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaComponent, { className: "TablaComponent", filePath: "src/app/shared/tabla/tabla.component.ts", lineNumber: 142 });
})();

export {
  TablaComponent
};
//# sourceMappingURL=chunk-7R6F7OB3.js.map
