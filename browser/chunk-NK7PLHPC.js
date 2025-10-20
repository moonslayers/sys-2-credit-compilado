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

// src/app/controllers/credito.producto.financiero.documento.service.ts
var _CreditoProductoFinancieroDocumentoService = class _CreditoProductoFinancieroDocumentoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_documentos";
    this.columns = [
      "credito_id",
      "productos_financieros_documento_id",
      "productos_financieros_documentos",
      "url",
      "usuario_id"
    ];
  }
  verificarDocumento(id) {
    const url = "api/access/credito/documento/aprobar";
    return firstValueFrom(this.api.post(url, { id }));
  }
};
_CreditoProductoFinancieroDocumentoService.\u0275fac = function CreditoProductoFinancieroDocumentoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoProductoFinancieroDocumentoService)(\u0275\u0275inject(Injector));
};
_CreditoProductoFinancieroDocumentoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoProductoFinancieroDocumentoService, factory: _CreditoProductoFinancieroDocumentoService.\u0275fac, providedIn: "any" });
var CreditoProductoFinancieroDocumentoService = _CreditoProductoFinancieroDocumentoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoProductoFinancieroDocumentoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  CreditoProductoFinancieroDocumentoService
};
//# sourceMappingURL=chunk-NK7PLHPC.js.map
