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

// src/app/controllers/credito.pago.service.ts
var _CreditoPagoService = class _CreditoPagoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_pagos";
    this.columns = [
      "credito_id",
      "fecha",
      "pago_fijo",
      "abono_a_capital",
      "interes",
      "iva",
      "usuario_id",
      "deleted_at"
    ];
  }
};
_CreditoPagoService.\u0275fac = function CreditoPagoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoPagoService)(\u0275\u0275inject(Injector));
};
_CreditoPagoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoPagoService, factory: _CreditoPagoService.\u0275fac, providedIn: "any" });
var CreditoPagoService = _CreditoPagoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoPagoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  CreditoPagoService
};
//# sourceMappingURL=chunk-CANKKCBN.js.map
