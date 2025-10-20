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

// src/app/controllers/dato.personal.service.ts
var _DatoPersonalService = class _DatoPersonalService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "datos_personales";
    this.columns = [
      "id",
      "nombre",
      "apellido_paterno",
      "apellido_materno",
      "curp",
      "genero",
      "genero_otro",
      "fecha_nacimiento",
      "pais_origen",
      "nue",
      "rfc",
      "homoclave",
      "email",
      "calle",
      "localidad",
      "no_exterior",
      "no_interior",
      "domicilio_desde",
      "codigo_postal",
      "colonia",
      "ciudad_id",
      "escolaridad",
      "nacionalidad",
      "estado_nacimiento",
      "identificacion",
      "identificacion_numero",
      "estado_civil",
      "regimen_matrimonial",
      "conyuge_nombre",
      "discapacidad",
      "etnia",
      "usuario_id",
      "referencias_domicilio",
      "conyuge_direccion",
      "conyuge_telefono",
      "conyuge_correo",
      "ingreso_mensual",
      "hijos",
      "latitud",
      "longitud",
      "created_at",
      "deleted_at"
    ];
  }
};
_DatoPersonalService.\u0275fac = function DatoPersonalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatoPersonalService)(\u0275\u0275inject(Injector));
};
_DatoPersonalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DatoPersonalService, factory: _DatoPersonalService.\u0275fac, providedIn: "any" });
var DatoPersonalService = _DatoPersonalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatoPersonalService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  DatoPersonalService
};
//# sourceMappingURL=chunk-NB2YUWRE.js.map
