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

// src/app/controllers/solicitud.apoyo.modalidad.service.ts
var _SolicitudApoyoModalidadService = class _SolicitudApoyoModalidadService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "solicitudes_apoyos_modalidades";
    this.columns = [
      "solicitudes_apoyo_id",
      "estado",
      "sesion_id",
      "modalidades_ministracion_id",
      "carta_instruccion_url",
      "usuario_id"
    ];
  }
};
_SolicitudApoyoModalidadService.\u0275fac = function SolicitudApoyoModalidadService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SolicitudApoyoModalidadService)(\u0275\u0275inject(Injector));
};
_SolicitudApoyoModalidadService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SolicitudApoyoModalidadService, factory: _SolicitudApoyoModalidadService.\u0275fac, providedIn: "any" });
var SolicitudApoyoModalidadService = _SolicitudApoyoModalidadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SolicitudApoyoModalidadService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  SolicitudApoyoModalidadService
};
//# sourceMappingURL=chunk-JAJY7KZC.js.map
