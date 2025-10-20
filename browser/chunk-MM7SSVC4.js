import {
  LocalStorageService,
  environment
} from "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  HttpClient
} from "./chunk-ZSRCSTKI.js";
import {
  Injectable,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/clientes/auth/auth.service.ts
var _AuthClientesService = class _AuthClientesService {
  constructor(http, storage, dialog) {
    this.http = http;
    this.storage = storage;
    this.dialog = dialog;
    this.apiUrl = environment.api_url;
  }
  login(email, password) {
    return __async(this, null, function* () {
      const data = {
        email,
        password
      };
      const res = yield firstValueFrom(this.http.post(this.apiUrl + "/api/clientes/auth/login", { data }));
      if (!res?.status) {
        this.dialog.show({
          title: "Algo salio mal",
          body: res?.message ?? "Algo salio mal en el servidor, intente de nuevo o solicite asistencia de un administrador.",
          tipo: "danger"
        });
        return;
      }
      if (res.data) {
        this.storage.setClienteUser(res.data);
      }
      return res.data;
    });
  }
  updatePass(oldPass, newPass) {
    return __async(this, null, function* () {
      const user = this.storage.getClienteUser();
      const data = {
        id: user?.id,
        old_pass: oldPass,
        new_pass: newPass
      };
      const res = yield firstValueFrom(this.http.post(this.apiUrl + "/api/clientes/auth/update", { data }));
      if (!res?.status) {
        this.dialog.show({
          title: "Algo salio mal",
          body: res?.message ?? "Algo salio mal en el servidor, intente de nuevo o solicite asistencia de un administrador.",
          tipo: "danger"
        });
        return;
      }
      this.dialog.show({
        title: "Contrase\xF1a cambiada",
        body: "La contrase\xF1aa fue cambiada exitosamente.",
        tipo: "success"
      });
      return res.status;
    });
  }
};
_AuthClientesService.\u0275fac = function AuthClientesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthClientesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(LocalStorageService), \u0275\u0275inject(VanillaDialogService));
};
_AuthClientesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthClientesService, factory: _AuthClientesService.\u0275fac, providedIn: "any" });
var AuthClientesService = _AuthClientesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthClientesService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: HttpClient }, { type: LocalStorageService }, { type: VanillaDialogService }], null);
})();

export {
  AuthClientesService
};
//# sourceMappingURL=chunk-MM7SSVC4.js.map
