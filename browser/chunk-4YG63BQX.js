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

// src/app/controllers/dato.persona.moral.service.ts
var _DatoPersonaMoralService = class _DatoPersonaMoralService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "datos_personas_morales";
    this.columns = [
      "credito_id",
      "cliente_id",
      "representante_legal_id",
      "usuario_id",
      "razon_social",
      "fecha_constitucion",
      "ciudad_id",
      "localidad",
      "calle",
      "colonia",
      "codigo_postal",
      "no_exterior",
      "no_interior",
      "calle_particular",
      "colonia_particular",
      "codigo_postal_particular",
      "no_exterior_particular",
      "no_interior_particular",
      "rfc",
      "domicilio_desde",
      "local_tipo",
      "local_renta_mensual",
      "local_contrato_fin",
      "local_contrato_inicio",
      "email",
      "tipo_empresa",
      "resumen_actividad_empresarial",
      "fecha_inicio_operaciones",
      "fecha_inicio_inscripcion_sat",
      "empleos_informales_mujeres",
      "empleos_informales_hombres",
      "empleos_imss_mujeres",
      "empleos_imss_hombres",
      "empleos_a_generar_mujeres",
      "empleos_a_generar_hombres",
      "empleos_informales_no_binarios",
      "empleos_imss_no_binarios",
      "empleos_a_generar_no_binarios",
      "referencia_domicilio",
      "latitud",
      "longitud",
      "nombre_comercial",
      "fuente_informacion",
      "detalle_camara"
    ];
  }
};
_DatoPersonaMoralService.\u0275fac = function DatoPersonaMoralService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatoPersonaMoralService)(\u0275\u0275inject(Injector));
};
_DatoPersonaMoralService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DatoPersonaMoralService, factory: _DatoPersonaMoralService.\u0275fac, providedIn: "any" });
var DatoPersonaMoralService = _DatoPersonaMoralService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatoPersonaMoralService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  DatoPersonaMoralService
};
//# sourceMappingURL=chunk-4YG63BQX.js.map
