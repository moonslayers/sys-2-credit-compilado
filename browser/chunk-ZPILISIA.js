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

// src/app/controllers/pago.carga.masiva.service.ts
var _PagoCargaMasivaService = class _PagoCargaMasivaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "pagos_cargas_masivas";
    this.columns = [
      "id",
      "descripcion",
      "referencia_de_cliente",
      "tipo_de_trn",
      "fecha_valor",
      "importe_de_credito",
      "hora_de_cargo_o_abono",
      "fecha_del_apunte",
      "fecha_abono",
      "nota",
      "credito_id",
      "aplicado",
      "usuario_id",
      "comprobante_url",
      "pagos_layout_id"
    ];
  }
  revisar(data) {
    return __async(this, null, function* () {
      const res = yield firstValueFrom(this.api.post("api/revision/pagos_cargas_masivas", data));
      console.log(res.data);
      return res.data;
    });
  }
  asociarCargaMasiva(cargaMasiva) {
    return __async(this, null, function* () {
      const data = {
        pago_masivo_id: cargaMasiva.id,
        credito_id: cargaMasiva.credito_id,
        nota: cargaMasiva.nota
      };
      const res = yield firstValueFrom(this.api.post("api/asociar/pagos_cargas_masivas", data));
      console.log(res);
      return res.status;
    });
  }
};
_PagoCargaMasivaService.\u0275fac = function PagoCargaMasivaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagoCargaMasivaService)(\u0275\u0275inject(Injector));
};
_PagoCargaMasivaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagoCargaMasivaService, factory: _PagoCargaMasivaService.\u0275fac, providedIn: "any" });
var PagoCargaMasivaService = _PagoCargaMasivaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagoCargaMasivaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  PagoCargaMasivaService
};
//# sourceMappingURL=chunk-ZPILISIA.js.map
