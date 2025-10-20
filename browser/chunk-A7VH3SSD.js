import {
  SuperService
} from "./chunk-7VPVFOGJ.js";
import {
  Injectable,
  Injector,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";

// src/app/controllers/sesion.service.ts
var _SesionService = class _SesionService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "sesiones";
    this.columns = [
      "sesion",
      "tipo_sesion",
      "fecha",
      "usuario_id"
    ];
  }
};
_SesionService.\u0275fac = function SesionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SesionService)(\u0275\u0275inject(Injector));
};
_SesionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SesionService, factory: _SesionService.\u0275fac, providedIn: "any" });
var SesionService = _SesionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SesionService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  SesionService
};
//# sourceMappingURL=chunk-A7VH3SSD.js.map
