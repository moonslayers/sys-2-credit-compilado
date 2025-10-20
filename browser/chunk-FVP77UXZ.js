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

// src/app/controllers/etapa.judicial.service.ts
var _EtapaJudicialService = class _EtapaJudicialService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "etapas_judiciales";
    this.columns = [
      "nombre",
      "proceso_judicial_id",
      "usuario_id"
    ];
  }
};
_EtapaJudicialService.\u0275fac = function EtapaJudicialService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EtapaJudicialService)(\u0275\u0275inject(Injector));
};
_EtapaJudicialService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EtapaJudicialService, factory: _EtapaJudicialService.\u0275fac, providedIn: "any" });
var EtapaJudicialService = _EtapaJudicialService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EtapaJudicialService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  EtapaJudicialService
};
//# sourceMappingURL=chunk-FVP77UXZ.js.map
