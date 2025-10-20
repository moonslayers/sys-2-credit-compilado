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

// src/app/controllers/referencia.personal.service.ts
var _ReferenciaPersonalService = class _ReferenciaPersonalService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "referencias_personales";
    this.columns = [
      "usuario_id",
      "nombre",
      "parentezco",
      "telefono",
      "domicilio"
    ];
  }
};
_ReferenciaPersonalService.\u0275fac = function ReferenciaPersonalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferenciaPersonalService)(\u0275\u0275inject(Injector));
};
_ReferenciaPersonalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReferenciaPersonalService, factory: _ReferenciaPersonalService.\u0275fac, providedIn: "any" });
var ReferenciaPersonalService = _ReferenciaPersonalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferenciaPersonalService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  ReferenciaPersonalService
};
//# sourceMappingURL=chunk-HO3B6X3R.js.map
