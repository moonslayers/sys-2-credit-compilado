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

// src/app/configuracion/configuracion.component.ts
var _ConfiguracionComponent = class _ConfiguracionComponent {
};
_ConfiguracionComponent.\u0275fac = function ConfiguracionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfiguracionComponent)();
};
_ConfiguracionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracionComponent, selectors: [["app-configuracion"]], decls: 2, vars: 0, template: function ConfiguracionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-sidebar-offcanvas");
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [
  RouterOutlet,
  SidebarOffcanvasComponent
], encapsulation: 2 });
var ConfiguracionComponent = _ConfiguracionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracionComponent, [{
    type: Component,
    args: [{ selector: "app-configuracion", imports: [
      RouterOutlet,
      SidebarOffcanvasComponent
    ], template: "<app-sidebar-offcanvas>\n    <router-outlet></router-outlet>\n</app-sidebar-offcanvas>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracionComponent, { className: "ConfiguracionComponent", filePath: "src/app/configuracion/configuracion.component.ts", lineNumber: 14 });
})();
export {
  ConfiguracionComponent
};
//# sourceMappingURL=chunk-JFDNKECU.js.map
