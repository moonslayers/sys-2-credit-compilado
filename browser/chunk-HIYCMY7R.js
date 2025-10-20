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

// src/app/controllers/apoyo.proveedor.service.ts
var _ApoyoProveedorService = class _ApoyoProveedorService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "apoyos_proveedores";
    this.columns = [
      "nombre_comercial",
      "sucursal",
      "direccion",
      "razon_social",
      "rfc",
      "telefono",
      "banco_nombre",
      "cuenta_bancaria",
      "clabe_interbancaria",
      "estado",
      "nota",
      "referencia",
      "usuario_id"
    ];
  }
};
_ApoyoProveedorService.\u0275fac = function ApoyoProveedorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApoyoProveedorService)(\u0275\u0275inject(Injector));
};
_ApoyoProveedorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApoyoProveedorService, factory: _ApoyoProveedorService.\u0275fac, providedIn: "any" });
var ApoyoProveedorService = _ApoyoProveedorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApoyoProveedorService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  ApoyoProveedorService
};
//# sourceMappingURL=chunk-HIYCMY7R.js.map
