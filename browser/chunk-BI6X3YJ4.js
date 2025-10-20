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

// src/app/controllers/credito.abono.service.ts
var _CreditoAbonoService = class _CreditoAbonoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_abonos";
    this.columns = [
      "id",
      "credito_id",
      "fecha",
      "monto",
      "comentarios",
      "documento_url",
      "usuario_id",
      "pagos_cargas_masiva_id",
      "concepto",
      "created_at",
      "deleted_at",
      "referencia_pago"
    ];
  }
};
_CreditoAbonoService.\u0275fac = function CreditoAbonoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoAbonoService)(\u0275\u0275inject(Injector));
};
_CreditoAbonoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoAbonoService, factory: _CreditoAbonoService.\u0275fac, providedIn: "any" });
var CreditoAbonoService = _CreditoAbonoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoAbonoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  CreditoAbonoService
};
//# sourceMappingURL=chunk-BI6X3YJ4.js.map
