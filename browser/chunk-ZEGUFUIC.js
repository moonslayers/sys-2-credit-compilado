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

// src/app/controllers/dato.persona.fisica.service.ts
var _DatoPersonaFisicaService = class _DatoPersonaFisicaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "datos_personas_fisicas";
    this.columns = [
      "negocio_id",
      "credito_id",
      "datos_personal_id",
      "usuario_id"
    ];
  }
};
_DatoPersonaFisicaService.\u0275fac = function DatoPersonaFisicaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatoPersonaFisicaService)(\u0275\u0275inject(Injector));
};
_DatoPersonaFisicaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DatoPersonaFisicaService, factory: _DatoPersonaFisicaService.\u0275fac, providedIn: "any" });
var DatoPersonaFisicaService = _DatoPersonaFisicaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatoPersonaFisicaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  DatoPersonaFisicaService
};
//# sourceMappingURL=chunk-ZEGUFUIC.js.map
