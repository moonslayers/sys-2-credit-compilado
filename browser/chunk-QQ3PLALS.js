import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";

// src/app/version.ts
var APP_VERSION = "1.8.31";

// src/app/services/version.service.ts
var _VersionService = class _VersionService {
  getVersion() {
    return APP_VERSION;
  }
};
_VersionService.\u0275fac = function VersionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VersionService)();
};
_VersionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VersionService, factory: _VersionService.\u0275fac, providedIn: "root" });
var VersionService = _VersionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VersionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/version/version.component.ts
var _VersionComponent = class _VersionComponent {
  constructor(versionService) {
    this.versionService = versionService;
    this.version = this.versionService.getVersion();
    this.isProduction = !this.version.includes("dev");
  }
};
_VersionComponent.\u0275fac = function VersionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VersionComponent)(\u0275\u0275directiveInject(VersionService));
};
_VersionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VersionComponent, selectors: [["app-version"]], decls: 5, vars: 9, consts: [[1, "badge", "rounded-pill", "text-bg-secondary"], [1, "version-icon"], [1, "bi"], [1, "version-text"]], template: function VersionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275element(2, "i", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("production", ctx.isProduction)("development", !ctx.isProduction);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-patch-check-fill", ctx.isProduction)("bi-code-slash", !ctx.isProduction);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" v", ctx.version);
  }
}, encapsulation: 2 });
var VersionComponent = _VersionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VersionComponent, [{
    type: Component,
    args: [{ selector: "app-version", imports: [], template: '<div class="badge rounded-pill text-bg-secondary" [class.production]="isProduction" [class.development]="!isProduction">\n    <span class="version-icon">\n        <i class="bi" [class.bi-patch-check-fill]="isProduction" [class.bi-code-slash]="!isProduction"></i>\n    </span>\n    <span class="version-text"> v{{ version }}</span>\n</div>' }]
  }], () => [{ type: VersionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VersionComponent, { className: "VersionComponent", filePath: "src/app/shared/version/version.component.ts", lineNumber: 10 });
})();

export {
  VersionService,
  VersionComponent
};
//# sourceMappingURL=chunk-QQ3PLALS.js.map
