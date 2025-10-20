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

// src/app/controllers/modalidad.service.ts
var _ModalidadService = class _ModalidadService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "modalidades";
    this.columns = [
      "nombre",
      "usuario_id"
    ];
  }
};
_ModalidadService.\u0275fac = function ModalidadService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalidadService)(\u0275\u0275inject(Injector));
};
_ModalidadService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModalidadService, factory: _ModalidadService.\u0275fac, providedIn: "any" });
var ModalidadService = _ModalidadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalidadService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  ModalidadService
};
//# sourceMappingURL=chunk-4MTJ7HMY.js.map
