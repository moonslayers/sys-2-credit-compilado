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

// src/app/controllers/negocio.service.ts
var _NegocioService = class _NegocioService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "negocios";
    this.columns = [
      "nombre",
      "calle",
      "localidad",
      "no_exterior",
      "no_interior",
      "codigo_postal",
      "tipo_empresa",
      "colonia",
      "ciudad_id",
      "domicilio_desde",
      "local_tipo",
      "local_renta_mensual",
      "local_contrato_inicio",
      "local_contrato_fin",
      "resumen_actividad_empresarial",
      "empleos_informales_mujeres",
      "empleos_informales_hombres",
      "empleos_imss_mujeres",
      "empleos_imss_hombres",
      "empleos_a_generar_mujeres",
      "empleos_a_generar_hombres",
      "empleos_informales_no_binarios",
      "empleos_imss_no_binarios",
      "empleos_a_generar_no_binarios",
      "fecha_inscripcion_sat",
      "inicio_operaciones",
      "experiencia_solicitante_anios",
      "usuario_id",
      "referencia_domicilio",
      "latitud",
      "longitud",
      "fuente_informacion",
      "detalle_camara"
    ];
  }
};
_NegocioService.\u0275fac = function NegocioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NegocioService)(\u0275\u0275inject(Injector));
};
_NegocioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NegocioService, factory: _NegocioService.\u0275fac, providedIn: "any" });
var NegocioService = _NegocioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NegocioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  NegocioService
};
//# sourceMappingURL=chunk-6OVOAIST.js.map
