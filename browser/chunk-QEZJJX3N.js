import {
  SuperService
} from "./chunk-7VPVFOGJ.js";
import {
  Injectable,
  Injector,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/verificacion.credito.service.ts
var _VerificacionCreditoService = class _VerificacionCreditoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_verificaciones";
    this.columns = [
      "credito_id",
      "concepto",
      "revision_datos_ingresados",
      "visita_domicilio",
      "latitud_domicilio",
      "longitud_domicilio",
      "foto_domicilio",
      "llamada_telefonica",
      "autorizado_por",
      "autorizado_fecha",
      "usuario_id"
    ];
  }
  /**
   * switch between aprobado and not aprobado
   * @param {number} id -id verificacion to aprove
   * @returns {Promise<boolean>} true if all good
   */
  aprobar(id) {
    return __async(this, null, function* () {
      const res = yield firstValueFrom(this.api.post("api/access/verificaciones/credito", { id }, false));
      return res.status;
    });
  }
};
_VerificacionCreditoService.\u0275fac = function VerificacionCreditoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerificacionCreditoService)(\u0275\u0275inject(Injector));
};
_VerificacionCreditoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VerificacionCreditoService, factory: _VerificacionCreditoService.\u0275fac, providedIn: "any" });
var VerificacionCreditoService = _VerificacionCreditoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificacionCreditoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  VerificacionCreditoService
};
//# sourceMappingURL=chunk-QEZJJX3N.js.map
