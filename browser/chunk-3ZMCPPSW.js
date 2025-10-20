import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IR6OZYYD.js";

// src/app/services/localStorage/local-storage.service.ts
var _LocalStorageService = class _LocalStorageService {
  constructor() {
  }
  ///Almacena una variable y objeto en local storage
  setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  ///Obtiene los datos guardados en la variable key
  getData(key) {
    const item = localStorage.getItem(key);
    try {
      if (item) {
        return JSON.parse(item);
      }
    } catch (e) {
      return null;
    }
    return null;
  }
  deleteData(key) {
    localStorage.removeItem(key);
  }
  //Elimina todos los datos de caché
  deleteAll() {
    localStorage.clear();
  }
  ///Agrega los datos de sesión de un usuario al sistema
  setUser(userData) {
    this.setData("user", userData);
  }
  setClienteUser(login) {
    this.setData("token_cliente", login);
    this.setData("cliente_data", login);
  }
  getClienteUser() {
    const user = this.getData("cliente_data");
    return user;
  }
  isUserLogged() {
    const user = this.getData("user");
    return !!user;
  }
  getUser() {
    const user = this.getData("user");
    if (!user) {
      throw new Error("Usuario no logeado");
    }
    return user;
  }
  setPerfil(perfil) {
    this.setData("perfil", perfil);
  }
  getPerfil() {
    const perfil = this.getData("perfil");
    if (!perfil) {
      throw new Error("Perfil no guardado");
    }
    return perfil;
  }
  deleteUser() {
    this.deleteData("user");
    this.deleteData("cliente_data");
  }
  /**
   * Returns token if user is logged, otherwise return empty string
   * @returns {string} token
   */
  getUserToken() {
    if (this.isUserLogged()) {
      return this.getUser().token;
    }
    if (this.getClienteUser()) {
      return this.getClienteUser()?.token ?? "";
    }
    return "";
  }
};
_LocalStorageService.\u0275fac = function LocalStorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LocalStorageService)();
};
_LocalStorageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LocalStorageService, factory: _LocalStorageService.\u0275fac, providedIn: "root" });
var LocalStorageService = _LocalStorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/environments/environment.ts
var environment = {
  api_url: "http://localhost:8000",
  logo_name: "main_logo.png"
};

export {
  environment,
  LocalStorageService
};
//# sourceMappingURL=chunk-3ZMCPPSW.js.map
