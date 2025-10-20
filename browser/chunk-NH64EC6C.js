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

// src/app/app/controllers/datos-fiscales.service.ts
var _DatosFiscalesService = class _DatosFiscalesService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "datos_fiscales";
  }
};
_DatosFiscalesService.\u0275fac = function DatosFiscalesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatosFiscalesService)(\u0275\u0275inject(Injector));
};
_DatosFiscalesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DatosFiscalesService, factory: _DatosFiscalesService.\u0275fac, providedIn: "root" });
var DatosFiscalesService = _DatosFiscalesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatosFiscalesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  DatosFiscalesService
};
//# sourceMappingURL=chunk-NH64EC6C.js.map
