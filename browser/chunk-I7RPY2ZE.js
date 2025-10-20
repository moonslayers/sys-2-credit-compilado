import {
  CommonModule,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView
} from "./chunk-IR6OZYYD.js";

// src/app/shared/formulario-flotante/formulario-flotante.component.ts
var _c0 = ["*"];
var _c1 = (a0, a1) => ({ "fade-out": a0, "fade-in": a1 });
function FormularioFlotanteComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function FormularioFlotanteComponent_Conditional_0_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrarDesdeBoton());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "btn-" + ctx_r1.bgClass);
  }
}
function FormularioFlotanteComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 9);
    \u0275\u0275listener("click", function FormularioFlotanteComponent_Conditional_0_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cerrarDesdeBoton());
    });
    \u0275\u0275element(2, "i", 10);
    \u0275\u0275elementEnd()();
  }
}
function FormularioFlotanteComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 0);
    \u0275\u0275conditionalCreate(2, FormularioFlotanteComponent_Conditional_0_Conditional_2_Template, 1, 1, "button", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5, 1)(6, "div", 6);
    \u0275\u0275conditionalCreate(7, FormularioFlotanteComponent_Conditional_0_Conditional_7_Template, 3, 0, "div", 7);
    \u0275\u0275projection(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c1, !ctx_r1.showClass, ctx_r1.showClass));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.closeButton ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.get_sizing());
    \u0275\u0275property("ngClass", "bg-" + ctx_r1.bgClass);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.closeButton ? 7 : -1);
  }
}
var _FormularioFlotanteComponent = class _FormularioFlotanteComponent {
  handleEscape(event) {
    this.cerrarDesdeBoton();
  }
  constructor() {
    this.show = false;
    this.showChange = new EventEmitter();
    this.showClass = false;
    this.closeButton = true;
    this.size = "medium";
    this.IsAnimationPlaying = false;
    this.bgClass = "white";
  }
  get_sizing() {
    switch (this.size) {
      case "x-large":
        return "col-12 col-sm-12 col-lg-11 col-xl-10";
      case "large":
        return "col-12 col-sm-11 col-lg-10 col-xl-9";
      case "medium":
        return "col-12 col-sm-10 col-lg-8 col-xl-6";
      case "small":
        return "col-12 col-sm-9 col-lg-7 col-xl-5";
      default:
        return "col-12 col-sm-10 col-lg-8 col-xl-6";
    }
  }
  animateShow() {
    this.showClass = true;
    this.IsAnimationPlaying = true;
    setTimeout(() => {
      this.IsAnimationPlaying = false;
    }, 200);
  }
  animateClose() {
    this.showClass = false;
    this.IsAnimationPlaying = true;
    setTimeout(() => {
      this.show = false;
      this.showChange.emit(false);
      this.IsAnimationPlaying = false;
    }, 300);
  }
  cerrarDesdeBoton() {
    if (!this.IsAnimationPlaying) {
      this.animateClose();
    } else if (this.show == true) {
      this.show = false;
    }
  }
  mostrarVentana() {
    if (!this.IsAnimationPlaying) {
      this.animateShow();
    } else {
      this.show = false;
    }
  }
  ngOnChanges() {
    if (this.show) {
      this.mostrarVentana();
    }
  }
};
_FormularioFlotanteComponent.\u0275fac = function FormularioFlotanteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormularioFlotanteComponent)();
};
_FormularioFlotanteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormularioFlotanteComponent, selectors: [["app-formulario-flotante"]], hostBindings: function FormularioFlotanteComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("keydown.escape", function FormularioFlotanteComponent_keydown_escape_HostBindingHandler($event) {
      return ctx.handleEscape($event);
    }, \u0275\u0275resolveDocument);
  }
}, inputs: { show: "show", closeButton: "closeButton", size: "size", bgClass: "bgClass" }, outputs: { showChange: "showChange" }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["container", ""], ["div", ""], [1, "col", "vw-100", "vh-100", "top-left-front", "blur-s", "p-4", "ps-2", "overflow-scroll", "main-back", 3, "ngClass"], [1, "btn-close", "position-fixed", "top-0", "end-0", "m-3", 3, "ngClass"], [1, "row", "justify-content-center", "m-0", "mt-1", "p-0"], [1, "rounded", "p-0", "m-0", "round-m", "shadow", 3, "ngClass"], [1, "row", "justify-content-center", "p-0", "m-0"], [1, "col-lg-12", "text-end", "m-0", "p-2"], [1, "btn-close", "position-fixed", "top-0", "end-0", "m-3", 3, "click", "ngClass"], [1, "btn", "btn-sm", "btn-danger", "round-xl", "shadow", "pt-0", "pb-0", "text-bold", "ps-3", "pe-3", "scale-05", 3, "click"], [1, "bi", "bi-x-octagon-fill"]], template: function FormularioFlotanteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275conditionalCreate(0, FormularioFlotanteComponent_Conditional_0_Template, 9, 9, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.show ? 0 : -1);
  }
}, dependencies: [CommonModule, NgClass], styles: ["\n\n.main-back[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n.vw-100[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  max-width: 100vw;\n}\n.vh-100[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: 100vh;\n}\n.top-left-front[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -15px;\n  left: 0;\n  z-index: 88;\n}\n.blur-s[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.fade-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeOut 0.3s ease-out;\n  opacity: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.btn-close[_ngcontent-%COMP%] {\n  z-index: 99;\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  from {\n    opacity: 1;\n    height: 100%;\n    margin: 5px;\n    padding: 5px;\n  }\n  to {\n    opacity: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-in-out;\n  opacity: 1;\n  height: 100%;\n  margin: 5px;\n  padding: 5px;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }\n  to {\n    opacity: 1;\n    height: 100%;\n    margin: 5px;\n    padding: 5px;\n  }\n}\n/*# sourceMappingURL=formulario-flotante.component.css.map */"] });
var FormularioFlotanteComponent = _FormularioFlotanteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormularioFlotanteComponent, [{
    type: Component,
    args: [{ selector: "app-formulario-flotante", imports: [
      CommonModule
    ], template: `@if (show) {
  <div #container class='col vw-100 vh-100 top-left-front blur-s p-4 ps-2 overflow-scroll main-back'
    [ngClass]="{ 'fade-out': !showClass, 'fade-in': showClass }">
    @if (!closeButton) {
      <button
        class="btn-close position-fixed top-0 end-0 m-3"
        [ngClass]="'btn-'+bgClass"
        (click)="cerrarDesdeBoton()"
        >
      </button>
    }
    <div class='row justify-content-center m-0 mt-1 p-0'>
      <div #div class='rounded p-0 m-0 round-m shadow' [class]="get_sizing()" [ngClass]="'bg-'+bgClass">
        <div class='row justify-content-center p-0 m-0'>
          @if (closeButton) {
            <div class='col-lg-12 text-end m-0 p-2'>
              <button class='btn btn-sm btn-danger round-xl shadow pt-0 pb-0 text-bold ps-3 pe-3 scale-05'
                (click)="cerrarDesdeBoton()"><i class="bi bi-x-octagon-fill"></i>
              </button>
            </div>
          }
          <ng-content>
          </ng-content>
        </div>
      </div>
    </div>
  </div>
}`, styles: ["/* src/app/shared/formulario-flotante/formulario-flotante.component.css */\n.main-back {\n  margin-top: -10px;\n}\n.vw-100 {\n  min-width: 100vw;\n  max-width: 100vw;\n}\n.vh-100 {\n  min-height: 100vh;\n  max-height: 100vh;\n}\n.top-left-front {\n  position: fixed;\n  top: -15px;\n  left: 0;\n  z-index: 88;\n}\n.blur-s {\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n}\n.fade-out {\n  animation: fadeOut 0.3s ease-out;\n  opacity: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.btn-close {\n  z-index: 99;\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n    height: 100%;\n    margin: 5px;\n    padding: 5px;\n  }\n  to {\n    opacity: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }\n}\n.fade-in {\n  animation: fadeIn 0.2s ease-in-out;\n  opacity: 1;\n  height: 100%;\n  margin: 5px;\n  padding: 5px;\n  overflow: hidden;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }\n  to {\n    opacity: 1;\n    height: 100%;\n    margin: 5px;\n    padding: 5px;\n  }\n}\n/*# sourceMappingURL=formulario-flotante.component.css.map */\n"] }]
  }], () => [], { handleEscape: [{
    type: HostListener,
    args: ["document:keydown.escape", ["$event"]]
  }], show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], closeButton: [{
    type: Input
  }], size: [{
    type: Input
  }], bgClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormularioFlotanteComponent, { className: "FormularioFlotanteComponent", filePath: "src/app/shared/formulario-flotante/formulario-flotante.component.ts", lineNumber: 33 });
})();

export {
  FormularioFlotanteComponent
};
//# sourceMappingURL=chunk-I7RPY2ZE.js.map
