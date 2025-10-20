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

// src/app/controllers/usuario.service.ts
var _UsuarioService = class _UsuarioService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "usuarios";
    this.columns = [
      "email",
      "password",
      "nombre",
      "apellido_paterno",
      "apellido_materno"
    ];
  }
  usuariosEjecutivosCobranza() {
    return __async(this, null, function* () {
      return (yield firstValueFrom(this.api.get("api/usuarios_ejecutivos", {}, false))).data ?? [];
    });
  }
};
_UsuarioService.\u0275fac = function UsuarioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsuarioService)(\u0275\u0275inject(Injector));
};
_UsuarioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuarioService, factory: _UsuarioService.\u0275fac, providedIn: "any" });
var UsuarioService = _UsuarioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuarioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

export {
  UsuarioService
};
//# sourceMappingURL=chunk-P72Q77JD.js.map
