import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";

// src/app/shared/collapsable/collapsable.component.ts
var _c0 = ["*"];
function CollapsableComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.animateClass);
  }
}
var _CollapsableComponent = class _CollapsableComponent {
  constructor() {
    this.title = "";
    this.animateClass = "";
    this.isShow = true;
  }
  switchAnimation() {
    if (this.animateClass == "animate__flipInX" || !this.animateClass) {
      this.animateClass = "animate__flipOutX";
      setTimeout(() => {
        this.isShow = false;
      }, 400);
    } else {
      this.animateClass = "animate__flipInX";
      this.isShow = true;
    }
  }
};
_CollapsableComponent.\u0275fac = function CollapsableComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CollapsableComponent)();
};
_CollapsableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollapsableComponent, selectors: [["app-collapsable"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[1, "container-fluid", "py-3"], [1, "row"], [1, "col", "pointer", "scale-0125", "rounded", "py-3", "px-4", "shadow", "bg-primary", "text-light", "h5", "fw-bold", "mb-0", 3, "click"], [1, "container-fluid", "mt-0", "rounded", "border-primary", "border-bottom", "border-start", "border-end", "animate__animated", "animate__faster", 3, "class"], [1, "container-fluid", "mt-0", "rounded", "border-primary", "border-bottom", "border-start", "border-end", "animate__animated", "animate__faster"]], template: function CollapsableComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275listener("click", function CollapsableComponent_Template_div_click_2_listener() {
      return ctx.switchAnimation();
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CollapsableComponent_Conditional_4_Template, 2, 2, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isShow ? 4 : -1);
  }
}, encapsulation: 2 });
var CollapsableComponent = _CollapsableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollapsableComponent, [{
    type: Component,
    args: [{ selector: "app-collapsable", imports: [], template: '<div class="container-fluid py-3">\n  <div class="row">\n    <div class="col pointer scale-0125 rounded py-3 px-4 shadow bg-primary text-light h5 fw-bold mb-0" (click)="switchAnimation()">\n      {{title}}\n    </div>\n    @if (isShow) {\n      <div class="container-fluid mt-0 rounded border-primary border-bottom border-start border-end  animate__animated animate__faster" [class]="animateClass"\n        >\n        <ng-content></ng-content>\n      </div>\n    }\n  </div>\n</div>' }]
  }], null, { title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollapsableComponent, { className: "CollapsableComponent", filePath: "src/app/shared/collapsable/collapsable.component.ts", lineNumber: 10 });
})();

export {
  CollapsableComponent
};
//# sourceMappingURL=chunk-VUVNDSSC.js.map
