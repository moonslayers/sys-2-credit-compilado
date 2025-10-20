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

// src/app/info/not-found/not-found.component.ts
var _NotFoundComponent = class _NotFoundComponent {
};
_NotFoundComponent.\u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotFoundComponent)();
};
_NotFoundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "bg-texture-2", "height"], [1, "row", "pt-5"], [1, "col", "text-center"], ["src", "../../../assets/notfound404.png", 1, "img"]], template: function NotFoundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd()()();
  }
}, styles: ["\n\n.height[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=not-found.component.css.map */"] });
var NotFoundComponent = _NotFoundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-not-found", imports: [], template: '<div class="container-fluid bg-texture-2 height">\n    <div class="row pt-5">\n        <div class="col text-center">\n            <img class="img" src="../../../assets/notfound404.png">\n        </div>\n    </div>\n</div>', styles: ["/* src/app/info/not-found/not-found.component.css */\n.height {\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=not-found.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src/app/info/not-found/not-found.component.ts", lineNumber: 9 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-ALPJSS3J.js.map
