import {
  SuperService
} from "./chunk-7VPVFOGJ.js";
import {
  Injectable,
  Injector,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/solicitud.apoyo.service.ts
var _SolicitudApoyoService = class _SolicitudApoyoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "solicitudes_apoyos";
    this.columns = [
      "descripcion_uso_recurso",
      "nombre_comercial",
      "giro_comercial",
      "red_social",
      "sucursal_id",
      "programas_apoyo_id",
      "datos_personal_id",
      "usuario_id",
      "razon_social_negocio",
      "nombre_comercial_negocio",
      "antiguedad_negocio",
      "empleos_imss_h",
      "empleos_imss_m",
      "empleos_imss_nb",
      "empleos_informales_h",
      "empleos_informales_m",
      "empleos_informales_nb",
      "empleos_a_generar_h",
      "empleos_a_generar_m",
      "empleos_a_generar_nb",
      "empleos_generados_h",
      "empleos_generados_m",
      "empleos_generados_nb",
      "actividades_economica_id",
      "calle_fiscal",
      "num_int_fiscal",
      "num_ext_fiscal",
      "colonia_fiscal",
      "cp_fiscal",
      "folio",
      "municipio_fiscal",
      "localidad_fiscal",
      "telefono_casa_fiscal",
      "telefono_celular_fiscal",
      "telefono_oficina_fiscal",
      "correo_fiscal",
      "latitud_fiscal",
      "longitud_fiscal",
      "calle_negocio",
      "num_int_negocio",
      "num_ext_negocio",
      "colonia_negocio",
      "cp_negocio",
      "municipio_negocio",
      "localidad_negocio",
      "telefono_casa_negocio",
      "telefono_celular_negocio",
      "telefono_oficina_negocio",
      "correo_negocio",
      "inicio_actividad_sat_negocio",
      "antiguedad_negocio",
      "referencias_dom_fiscal",
      "referencias_dom_negocio",
      "latitud_negocio",
      "longitud_negocio",
      "caso_urbem",
      "usuario_nombre_migrado",
      "expediente",
      "fuente_informacion"
    ];
  }
  avanzarEstado(modalidad) {
    return __async(this, null, function* () {
      if (!modalidad)
        return;
      const api = "api/apoyos/ajustar_estado";
      const res = yield firstValueFrom(this.api.post(api, { id: modalidad.id }));
      if (res.status && res.data) {
        modalidad.estado = res.data.estado;
      }
    });
  }
  retrocederEstado(modalidad) {
    return __async(this, null, function* () {
      if (!modalidad)
        return;
      const api = "api/apoyos/ajustar_estado/retroceder";
      const res = yield firstValueFrom(this.api.post(api, { id: modalidad.id }));
      if (res.status && res.data) {
        modalidad.estado = res.data.estado;
      }
    });
  }
  modalidadActual(solicitudApoyo) {
    if (!solicitudApoyo || !solicitudApoyo.solicitudes_apoyos_modalidades)
      return;
    return solicitudApoyo.solicitudes_apoyos_modalidades[solicitudApoyo.solicitudes_apoyos_modalidades.length - 1];
  }
  totalModalidadActualFromSolicitudApoyo(solicitudApoyo) {
    const modalidadActual = this.modalidadActual(solicitudApoyo);
    if (!modalidadActual?.solicitudes_apoyos_modalidades_cotizaciones)
      return;
    return modalidadActual.solicitudes_apoyos_modalidades_cotizaciones.reduce((acc, cot) => acc + +cot.monto, 0);
  }
  tiposInversionesActuales(solicitudApoyo, modalidadActual) {
    if (!solicitudApoyo?.solicitudes_apoyos_modalidades)
      return [];
    if (!modalidadActual) {
      modalidadActual = this.modalidadActual(solicitudApoyo);
    }
    if (modalidadActual && solicitudApoyo.solicitudes_apoyos_modalidades.length == 1) {
      return (solicitudApoyo?.apoyos_tipos_inversiones ?? []).filter((tipo) => tipo.solicitud_modalidad_id == modalidadActual.id || tipo.solicitud_modalidad_id === null) ?? [];
    }
    if (modalidadActual && solicitudApoyo.solicitudes_apoyos_modalidades.length > 1) {
      return (solicitudApoyo?.apoyos_tipos_inversiones ?? []).filter((tipo) => tipo.solicitud_modalidad_id == modalidadActual.id) ?? [];
    }
    if (solicitudApoyo.solicitudes_apoyos_modalidades.length == 0) {
      return (solicitudApoyo.apoyos_tipos_inversiones ?? []).filter((tipo) => tipo.solicitud_modalidad_id === null);
    }
    return [];
  }
};
_SolicitudApoyoService.\u0275fac = function SolicitudApoyoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SolicitudApoyoService)(\u0275\u0275inject(Injector));
};
_SolicitudApoyoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SolicitudApoyoService, factory: _SolicitudApoyoService.\u0275fac, providedIn: "any" });
var SolicitudApoyoService = _SolicitudApoyoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SolicitudApoyoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  SolicitudApoyoService
};
//# sourceMappingURL=chunk-OBCD5SW4.js.map
