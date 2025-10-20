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

// src/app/controllers/proceso.judicial.service.ts
var _ProcesoJudicialService = class _ProcesoJudicialService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "procesos_judiciales";
    this.columns = [
      "nombre",
      "usuario_id"
    ];
  }
};
_ProcesoJudicialService.\u0275fac = function ProcesoJudicialService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProcesoJudicialService)(\u0275\u0275inject(Injector));
};
_ProcesoJudicialService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProcesoJudicialService, factory: _ProcesoJudicialService.\u0275fac, providedIn: "any" });
var ProcesoJudicialService = _ProcesoJudicialService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcesoJudicialService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  ProcesoJudicialService
};
//# sourceMappingURL=chunk-Y2IL2FJA.js.map
