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

// src/app/controllers/modalidad.ministracion.documento.service.ts
var _ModalidadMinistracionDocumentoService = class _ModalidadMinistracionDocumentoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "mod_min_documentos";
    this.columns = [
      "modalidades_ministracion_id",
      "documento_id",
      "usuario_id",
      "prioridad"
    ];
  }
};
_ModalidadMinistracionDocumentoService.\u0275fac = function ModalidadMinistracionDocumentoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalidadMinistracionDocumentoService)(\u0275\u0275inject(Injector));
};
_ModalidadMinistracionDocumentoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModalidadMinistracionDocumentoService, factory: _ModalidadMinistracionDocumentoService.\u0275fac, providedIn: "any" });
var ModalidadMinistracionDocumentoService = _ModalidadMinistracionDocumentoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalidadMinistracionDocumentoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/controllers/modalidad.ministracion.service.ts
var _ModalidadMinistracionService = class _ModalidadMinistracionService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "modalidades_ministraciones";
    this.columns = [
      "programas_apoyo_id",
      "monto_maximo",
      "modalidad_id",
      "usuario_id"
    ];
  }
};
_ModalidadMinistracionService.\u0275fac = function ModalidadMinistracionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalidadMinistracionService)(\u0275\u0275inject(Injector));
};
_ModalidadMinistracionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModalidadMinistracionService, factory: _ModalidadMinistracionService.\u0275fac, providedIn: "any" });
var ModalidadMinistracionService = _ModalidadMinistracionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalidadMinistracionService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  ModalidadMinistracionDocumentoService,
  ModalidadMinistracionService
};
//# sourceMappingURL=chunk-YUT24PTQ.js.map
