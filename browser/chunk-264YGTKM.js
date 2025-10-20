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
  catchError,
  lastValueFrom,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/auth/auth.service.ts
var api = environment.api_url;
var _AuthService = class _AuthService {
  constructor(http, storage, dialog) {
    this.http = http;
    this.storage = storage;
    this.dialog = dialog;
  }
  login(credentials) {
    return __async(this, null, function* () {
      try {
        const res = yield lastValueFrom(this.http.post(`${api}/api/auth/login`, { data: credentials }).pipe(catchError((error) => {
          this.dialog.show({
            title: "Login incorrecto",
            body: error.error?.message || "Error desconocido",
            tipo: "danger"
          });
          return throwError(() => error);
        })));
        if (res.data && res.status) {
          this.storage.setUser(res.data);
          return res.data;
        }
        this.dialog.show({
          title: "Error",
          body: "Correo o contrase\xF1a incorrectos",
          tipo: "danger"
        });
        return null;
      } catch (error) {
        return null;
      }
    });
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(LocalStorageService), \u0275\u0275inject(VanillaDialogService));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: LocalStorageService }, { type: VanillaDialogService }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-264YGTKM.js.map
