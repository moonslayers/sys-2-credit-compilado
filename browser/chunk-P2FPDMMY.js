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

// src/app/controllers/documento.service.ts
var _DocumentoService = class _DocumentoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "documentos";
    this.columns = [
      "usuario_id",
      "nombre"
    ];
  }
  new(data) {
    return __async(this, null, function* () {
      data.usuario_id = this.storage.getUser().id;
      return (yield firstValueFrom(this.api.post(this.url(), data))).data;
    });
  }
};
_DocumentoService.\u0275fac = function DocumentoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentoService)(\u0275\u0275inject(Injector));
};
_DocumentoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentoService, factory: _DocumentoService.\u0275fac, providedIn: "any" });
var DocumentoService = _DocumentoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  DocumentoService
};
//# sourceMappingURL=chunk-P2FPDMMY.js.map
