import {
  CommonModule,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IR6OZYYD.js";

// src/app/shared/generic-form/form-group/form-group.component.ts
var _c0 = ["*"];
function FormGroupComponent_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.addButtonIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.addButtonText);
  }
}
function FormGroupComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.addButtonText);
  }
}
function FormGroupComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 3);
    \u0275\u0275listener("click", function FormGroupComponent_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.buttonEvent.emit());
    });
    \u0275\u0275conditionalCreate(2, FormGroupComponent_Conditional_5_Conditional_2_Template, 2, 2, "i", 4);
    \u0275\u0275conditionalCreate(3, FormGroupComponent_Conditional_5_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.addButtonDiv);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.addButtonStyle)("disabled", ctx_r1.addButtonDisabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.addButtonIcon ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.addButtonIcon ? 3 : -1);
  }
}
var _FormGroupComponent = class _FormGroupComponent {
  constructor() {
    this.showAddButton = false;
    this.addButtonText = "";
    this.addButtonDiv = "col-auto px-1";
    this.addButtonIcon = "bi bi-plus-circle-fill";
    this.addButtonStyle = "btn btn-success";
    this.buttonEvent = new EventEmitter();
    this.defaultTitleClass = "h5 fw-bold";
    this.defaultBorderClass = "m-0 my-2 border border-primary";
  }
};
_FormGroupComponent.\u0275fac = function FormGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormGroupComponent)();
};
_FormGroupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormGroupComponent, selectors: [["form-group"]], inputs: { title: "title", style: "style", showAddButton: "showAddButton", addButtonText: "addButtonText", addButtonDiv: "addButtonDiv", addButtonIcon: "addButtonIcon", addButtonStyle: "addButtonStyle", addButtonDisabled: "addButtonDisabled", defaultTitleClass: "defaultTitleClass", defaultBorderClass: "defaultBorderClass" }, outputs: { buttonEvent: "buttonEvent" }, ngContentSelectors: _c0, decls: 8, vars: 8, consts: [[1, "row"], [1, "col", "align-self-center"], [3, "class"], [3, "click", "ngClass", "disabled"], [3, "ngClass"]], template: function FormGroupComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, FormGroupComponent_Conditional_5_Template, 4, 6, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "hr");
    \u0275\u0275projection(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.div) ?? "container-fluid px-2");
    \u0275\u0275advance(3);
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.title) ?? ctx.defaultTitleClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showAddButton ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap((ctx.style == null ? null : ctx.style.border) ?? ctx.defaultBorderClass);
  }
}, dependencies: [CommonModule, NgClass], encapsulation: 2 });
var FormGroupComponent = _FormGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupComponent, [{
    type: Component,
    args: [{ selector: "form-group", imports: [
      CommonModule
    ], template: `<div [class]="style?.div??'container-fluid px-2'">
  <div class="row">
    <div class="col align-self-center">
      <span [class]="style?.title??defaultTitleClass">{{title}}</span>
    </div>
    @if (showAddButton) {
      <div [class]="addButtonDiv">
        <button [ngClass]="addButtonStyle" (click)="buttonEvent.emit()" [disabled]="addButtonDisabled">
          @if (addButtonIcon) {
            <i [ngClass]="addButtonIcon">{{addButtonText}}</i>
          }
          @if (!addButtonIcon) {
            <span>{{addButtonText}}</span>
          }
        </button>
      </div>
    }
  </div>
  <hr [class]="style?.border??defaultBorderClass">
  <ng-content></ng-content>
</div>
` }]
  }], null, { title: [{
    type: Input
  }], style: [{
    type: Input
  }], showAddButton: [{
    type: Input
  }], addButtonText: [{
    type: Input
  }], addButtonDiv: [{
    type: Input
  }], addButtonIcon: [{
    type: Input
  }], addButtonStyle: [{
    type: Input
  }], addButtonDisabled: [{
    type: Input
  }], buttonEvent: [{
    type: Output
  }], defaultTitleClass: [{
    type: Input
  }], defaultBorderClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormGroupComponent, { className: "FormGroupComponent", filePath: "src/app/shared/generic-form/form-group/form-group.component.ts", lineNumber: 29 });
})();

export {
  FormGroupComponent
};
//# sourceMappingURL=chunk-NXIA6ZMF.js.map
