import {
  RouterOutlet
} from "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-IR6OZYYD.js";
import "./chunk-N6ESDQJH.js";

// src/app/auth/auth.component.ts
var _AuthComponent = class _AuthComponent {
};
_AuthComponent.\u0275fac = function AuthComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthComponent)();
};
_AuthComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthComponent, selectors: [["app-auth"]], decls: 6, vars: 0, consts: [[1, "container-fluid", "bg-texture-2"], [1, "row", "justify-content-center", "vh-100"], [1, "col-auto", "align-self-center"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-5", "col-xl-3", "rounded", "card-login", "shadow", "bg-primary", "animate__animated", "animate__faster", "animate__fadeInUp"]], template: function AuthComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275elementEnd()()()()();
  }
}, dependencies: [RouterOutlet], styles: ["\n\n.card-login[_ngcontent-%COMP%] {\n  min-height: 20.0rem;\n  min-width: 20rem;\n}\n/*# sourceMappingURL=auth.component.css.map */"] });
var AuthComponent = _AuthComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthComponent, [{
    type: Component,
    args: [{ selector: "app-auth", imports: [
      RouterOutlet
    ], template: '<div class="container-fluid bg-texture-2">\n    <div class="row justify-content-center vh-100">\n        <div class="col-auto align-self-center">\n            <div class="row justify-content-center">\n                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3 rounded card-login shadow bg-primary animate__animated animate__faster animate__fadeInUp">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>', styles: ["/* src/app/auth/auth.component.css */\n.card-login {\n  min-height: 20.0rem;\n  min-width: 20rem;\n}\n/*# sourceMappingURL=auth.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "src/app/auth/auth.component.ts", lineNumber: 12 });
})();
export {
  AuthComponent
};
//# sourceMappingURL=chunk-OHH54RMX.js.map
