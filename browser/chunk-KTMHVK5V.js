import {
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  Injectable,
  Injector,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/pago.layout.service.ts
var _PagoLayoutService = class _PagoLayoutService extends SuperService {
  constructor(utils, injector) {
    super(injector);
    this.utils = utils;
    this.model = "pagos_layoutes";
    this.columns = [
      "id",
      "numero_movimientos",
      "monto_total",
      "hash_archivo",
      "nombre_archivo_registro",
      "ruta_archivo_registro",
      "status_aplicacion",
      "fecha_proceso_terminado",
      "nombre_usuario",
      "created_at",
      "updated_at",
      "usuario_id",
      "deleted_at"
    ];
  }
  /**
   * Verifica si un archivo Excel ya ha sido subido previamente,
   * comparando su hash SHA-256 con registros existentes.
   *
   * @param file - El archivo Excel a verificar.
   * @returns Una promesa que resuelve a `true` si el archivo ya fue subido,
   *          o `false` si no se encuentra registro del mismo.
   */
  yaSeSubioExcel(file) {
    return __async(this, null, function* () {
      const hash = yield this.utils.calculateFileHash(file);
      return !!(yield this.first({ hash_archivo: hash, deleted_at: null }));
    });
  }
};
_PagoLayoutService.\u0275fac = function PagoLayoutService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagoLayoutService)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(Injector));
};
_PagoLayoutService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagoLayoutService, factory: _PagoLayoutService.\u0275fac, providedIn: "any" });
var PagoLayoutService = _PagoLayoutService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagoLayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: Injector }], null);
})();

export {
  PagoLayoutService
};
//# sourceMappingURL=chunk-KTMHVK5V.js.map
