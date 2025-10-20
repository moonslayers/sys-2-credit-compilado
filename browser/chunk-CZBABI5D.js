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

// src/app/controllers/sucursal.service.ts
var _SucursalService = class _SucursalService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "sucursales";
    this.columns = [
      "nombre",
      "direccion",
      "colonia",
      "ciudad_id",
      "cp"
    ];
  }
};
_SucursalService.\u0275fac = function SucursalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SucursalService)(\u0275\u0275inject(Injector));
};
_SucursalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SucursalService, factory: _SucursalService.\u0275fac, providedIn: "any" });
var SucursalService = _SucursalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SucursalService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  SucursalService
};
//# sourceMappingURL=chunk-CZBABI5D.js.map
