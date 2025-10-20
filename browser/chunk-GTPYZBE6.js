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
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/solicitud.apoyo.modalidad.cotizacion.service.ts
var _SolicitudApoyoModalidadCotizacionService = class _SolicitudApoyoModalidadCotizacionService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "solicitudes_apoyos_mod_cot";
    this.columns = [
      "solicitudes_apoyos_modalidad_id",
      "apoyos_proveedor_id",
      "monto",
      "usuario_id",
      "carta_instruccion_url",
      "spei_url",
      "carta_instruccion_verificacion"
    ];
  }
  verificarCotizacion(cotizacion) {
    return __async(this, null, function* () {
      if (!cotizacion)
        return;
      const fechaVerificacion = cotizacion.carta_instruccion_verificacion ? null : (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").split(".")[0];
      const res = yield this.update(cotizacion.id, { carta_instruccion_verificacion: fechaVerificacion }, false);
      if (res.status) {
        cotizacion.carta_instruccion_verificacion = fechaVerificacion;
      }
      return res.status;
    });
  }
};
_SolicitudApoyoModalidadCotizacionService.\u0275fac = function SolicitudApoyoModalidadCotizacionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SolicitudApoyoModalidadCotizacionService)(\u0275\u0275inject(Injector));
};
_SolicitudApoyoModalidadCotizacionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SolicitudApoyoModalidadCotizacionService, factory: _SolicitudApoyoModalidadCotizacionService.\u0275fac, providedIn: "any" });
var SolicitudApoyoModalidadCotizacionService = _SolicitudApoyoModalidadCotizacionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SolicitudApoyoModalidadCotizacionService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  SolicitudApoyoModalidadCotizacionService
};
//# sourceMappingURL=chunk-GTPYZBE6.js.map
