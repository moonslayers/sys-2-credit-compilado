import {
  SidebarOffcanvasComponent
} from "./chunk-OZS5GHEH.js";
import "./chunk-QQ3PLALS.js";
import "./chunk-264YGTKM.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
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

// src/app/main/main.component.ts
var _MainComponent = class _MainComponent {
};
_MainComponent.\u0275fac = function MainComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainComponent)();
};
_MainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main"]], decls: 2, vars: 0, template: function MainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-sidebar-offcanvas");
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [
  SidebarOffcanvasComponent,
  RouterOutlet
], encapsulation: 2 });
var MainComponent = _MainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainComponent, [{
    type: Component,
    args: [{ selector: "app-main", imports: [
      SidebarOffcanvasComponent,
      RouterOutlet
    ], template: "<app-sidebar-offcanvas>\n    <router-outlet></router-outlet>\n</app-sidebar-offcanvas>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "src/app/main/main.component.ts", lineNumber: 14 });
})();
export {
  MainComponent
};
//# sourceMappingURL=chunk-SW64OSI6.js.map
