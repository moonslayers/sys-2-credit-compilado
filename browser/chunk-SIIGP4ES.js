import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from "./chunk-XKAAYCNZ.js";
import {
  CommonModule,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  filter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";

// src/app/shared/steps-tabs/steps-tabs.component.ts
var _c0 = ["*"];
var _c1 = (a0, a1, a2) => ({ "btn-primary": a0, "border-primary": a1, "disabled": a2 });
function StepsTabsComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 6);
    \u0275\u0275listener("click", function StepsTabsComponent_For_3_Template_button_click_1_listener() {
      const \u0275$index_5_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.change_tab(\u0275$index_5_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_5_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c1, ctx_r2.paginador[\u0275$index_5_r2].isSelected, !ctx_r2.paginador[\u0275$index_5_r2].isSelected, ctx_r2.paginador[\u0275$index_5_r2].disabled));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275$index_5_r2 + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.paginador[\u0275$index_5_r2].disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.paginador[\u0275$index_5_r2].header);
  }
}
function StepsTabsComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.paginador[ctx_r2.actual_page].header);
  }
}
function StepsTabsComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "p", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.paginador[ctx_r2.actual_page].title);
  }
}
function StepsTabsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, StepsTabsComponent_Conditional_6_Conditional_1_Template, 2, 1, "p", 9);
    \u0275\u0275conditionalCreate(2, StepsTabsComponent_Conditional_6_Conditional_2_Template, 3, 1, "div", 10);
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("animate__slideInRight", ctx_r2.animation_in)("animate__slideOutLeft", ctx_r2.animation_out);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.paginador[ctx_r2.actual_page].title ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.paginador[ctx_r2.actual_page].title ? 2 : -1);
  }
}
var _StepsTabsComponent = class _StepsTabsComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.paginador = [];
    this.paginadorChange = new EventEmitter();
    this.actual_pageChange = new EventEmitter();
    this.actual_page = 0;
    this.animation_out = false;
    this.animation_in = false;
    this.animation_entry = false;
    this.page_selected = 0;
    this.routerTabulated = true;
  }
  ngOnInit() {
    if (!this.isAnySelected()) {
      this.paginador[0].isSelected = true;
    }
    if (this.routerTabulated) {
      this.setTabuladorFromUrl();
    }
  }
  ngOnChanges(changes) {
    if (changes["page_selected"] && this.page_selected >= 0 && this.page_selected != this.actual_page) {
      this.change_tab(this.page_selected);
    }
  }
  setTabuladorFromUrl() {
    this.refreshTabuladorSelected(this.router.url);
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
      // Solo toma el evento de finalización de navegación
    ).subscribe(() => {
      const fullUrl = this.router.url;
      this.refreshTabuladorSelected(fullUrl);
    });
  }
  refreshTabuladorSelected(url) {
    const i = this.paginador.findIndex((tab) => url.includes(tab.key));
    this.change_tab(i);
  }
  isAnySelected() {
    return this.paginador.some((tab) => tab.isSelected);
  }
  change_tab(tab = 0) {
    if (tab > this.actual_page) {
      this.animation_in = true;
      setTimeout(() => {
        this.animation_in = false;
      }, 500);
    }
    if (tab < this.actual_page) {
      this.animation_out = true;
      setTimeout(() => {
        this.animation_out = false;
      }, 500);
    }
    setTimeout(() => {
      if (!this.paginador[tab])
        return;
      this.actual_page = tab;
      this.actual_pageChange.emit(this.actual_page);
      this.paginador.forEach((tab2) => {
        if (tab2.isSelected) {
          tab2.isSelected = false;
        }
      });
      this.paginador[tab].isSelected = true;
      this.paginador[tab].disabled = false;
      this.paginadorChange.emit(this.paginador);
    }, 250);
  }
};
_StepsTabsComponent.\u0275fac = function StepsTabsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StepsTabsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_StepsTabsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepsTabsComponent, selectors: [["app-steps-tabs"]], inputs: { paginador: "paginador", actual_page: "actual_page", page_selected: "page_selected", routerTabulated: "routerTabulated" }, outputs: { paginadorChange: "paginadorChange", actual_pageChange: "actual_pageChange" }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[1, "container-fluid", "mt-4", "px-5", "entry-animation"], [1, "row", "justify-content-between"], [1, "col", "col-auto", "text-center", "p-1"], [1, "container"], [1, "row"], [1, "col-12", "card-box", "rounded", "shadow", "p-1", "pb-3", "mb-5", "animate__animated", "animate__faster", 3, "animate__slideInRight", "animate__slideOutLeft"], [1, "btn", "scale-025", "shadow-sm", "round-s", 3, "click", "ngClass"], [1, "d-none", "d-md-block"], [1, "col-12", "card-box", "rounded", "shadow", "p-1", "pb-3", "mb-5", "animate__animated", "animate__faster"], [1, "d-md-none", "h5", "mb-3", "text-center"], [1, "col-12", "mt-3", "mb-1", "text-center"], [1, "container", "content", "position-relative"], [1, "h5"]], template: function StepsTabsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275repeaterCreate(2, StepsTabsComponent_For_3_Template, 5, 9, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
    \u0275\u0275conditionalCreate(6, StepsTabsComponent_Conditional_6_Template, 5, 6, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.paginador);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.isAnySelected() ? 6 : -1);
  }
}, dependencies: [CommonModule, NgClass], styles: ["\n\n.nav-link[_ngcontent-%COMP%] {\n  color: blueviolet;\n  cursor: pointer;\n  font-weight: bold;\n}\n.disabled[_ngcontent-%COMP%] {\n  border-color: gray;\n  color: gray;\n}\n.card-box[_ngcontent-%COMP%] {\n  border-top: 10px solid var(--secondary);\n  background-color: white;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 75vh;\n  overflow-y: auto;\n}\n.fade-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeOut 0.6s ease-in-out;\n  opacity: 1;\n  padding: 2%;\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-in-out;\n  opacity: 1;\n  padding: 2%;\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  0% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translate(0, 0);\n    z-index: -1;\n  }\n  50% {\n    opacity: 0;\n    filter: blur(5px);\n    transform: translate(100%, 0);\n    z-index: -1;\n  }\n  51% {\n    opacity: 0;\n    filter: blur(5px);\n    transform: translate(-100%, 0);\n    z-index: -1;\n  }\n  100% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translate(0, 0);\n    z-index: -1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translate(0, 0);\n    z-index: -1;\n  }\n  50% {\n    opacity: 0;\n    filter: blur(5px);\n    transform: translate(-100%, 0);\n    z-index: -1;\n  }\n  51% {\n    opacity: 0;\n    filter: blur(5px);\n    transform: translate(100%, 0);\n    z-index: -1;\n  }\n  100% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translate(0, 0);\n    z-index: 1;\n  }\n}\n/*# sourceMappingURL=steps-tabs.component.css.map */"] });
var StepsTabsComponent = _StepsTabsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsTabsComponent, [{
    type: Component,
    args: [{ selector: "app-steps-tabs", imports: [
      CommonModule
    ], template: `<div class="container-fluid mt-4 px-5 entry-animation">
  <div class="row justify-content-between">
    @for (tab of paginador; track tab; let i = $index) {
      <div class="col col-auto text-center p-1">
        <button class="btn scale-025 shadow-sm round-s" (click)="change_tab(i)"
          [ngClass]="{'btn-primary':paginador[i].isSelected, 'border-primary':!paginador[i].isSelected, 'disabled':paginador[i].disabled,}">
          {{i+1}}
        </button>
        <p class="d-none d-md-block" [class.disabled]="paginador[i].disabled">{{paginador[i].header}}</p>
      </div>
    }
  </div>
</div>
<div class="container">
  <div class="row">
    @if (isAnySelected()) {
      <div class="col-12 card-box rounded shadow p-1 pb-3 mb-5 animate__animated animate__faster" [class.animate__slideInRight]="animation_in"
        [class.animate__slideOutLeft]="animation_out">
        @if (!paginador[actual_page].title) {
          <p class="d-md-none h5 mb-3 text-center">{{paginador[actual_page].header}}</p>
        }
        @if (paginador[actual_page].title) {
          <div class="col-12 mt-3 mb-1 text-center">
            <p class="h5">{{paginador[actual_page].title}}</p>
          </div>
        }
        <div class="container content position-relative">
          <ng-content></ng-content>
        </div>
      </div>
    }
  </div>
</div>`, styles: ["/* src/app/shared/steps-tabs/steps-tabs.component.css */\n.nav-link {\n  color: blueviolet;\n  cursor: pointer;\n  font-weight: bold;\n}\n.disabled {\n  border-color: gray;\n  color: gray;\n}\n.card-box {\n  border-top: 10px solid var(--secondary);\n  background-color: white;\n}\n.content {\n  width: 100%;\n  max-height: 75vh;\n  overflow-y: auto;\n}\n.fade-out {\n  animation: fadeOut 0.6s ease-in-out;\n  opacity: 1;\n  padding: 2%;\n}\n.fade-in {\n  animation: fadeIn 0.6s ease-in-out;\n  opacity: 1;\n  padding: 2%;\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translate(0, 0);\n    z-index: -1;\n  }\n  50% {\n    opacity: 0;\n    filter: blur(5px);\n    transform: translate(100%, 0);\n    z-index: -1;\n  }\n  51% {\n    opacity: 0;\n    filter: blur(5px);\n    transform: translate(-100%, 0);\n    z-index: -1;\n  }\n  100% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translate(0, 0);\n    z-index: -1;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translate(0, 0);\n    z-index: -1;\n  }\n  50% {\n    opacity: 0;\n    filter: blur(5px);\n    transform: translate(-100%, 0);\n    z-index: -1;\n  }\n  51% {\n    opacity: 0;\n    filter: blur(5px);\n    transform: translate(100%, 0);\n    z-index: -1;\n  }\n  100% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translate(0, 0);\n    z-index: 1;\n  }\n}\n/*# sourceMappingURL=steps-tabs.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }], { paginador: [{
    type: Input
  }], paginadorChange: [{
    type: Output
  }], actual_pageChange: [{
    type: Output
  }], actual_page: [{
    type: Input
  }], page_selected: [{
    type: Input
  }], routerTabulated: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepsTabsComponent, { className: "StepsTabsComponent", filePath: "src/app/shared/steps-tabs/steps-tabs.component.ts", lineNumber: 22 });
})();

export {
  StepsTabsComponent
};
//# sourceMappingURL=chunk-SIIGP4ES.js.map
