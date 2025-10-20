import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IR6OZYYD.js";

// src/app/services/loader/loader.service.ts
var _LoaderService = class _LoaderService {
  constructor() {
    this.showLoaderSubject = new BehaviorSubject(false);
    this.showLoader$ = this.showLoaderSubject.asObservable();
  }
  // Método para cambiar el estado del diálogo
  toggleLoader(show) {
    this.showLoaderSubject.next(show);
  }
};
_LoaderService.\u0275fac = function LoaderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoaderService)();
};
_LoaderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoaderService, factory: _LoaderService.\u0275fac, providedIn: "root" });
var LoaderService = _LoaderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/toast.service.ts
var _ToastService = class _ToastService {
  constructor() {
    this.showToastSubject = new BehaviorSubject(false);
    this.toastDataSubject = new BehaviorSubject(null);
    this.showToast$ = this.showToastSubject.asObservable();
    this.toastData$ = this.toastDataSubject.asObservable();
  }
  // Método para cambiar el estado del diálogo
  toggleToast(show) {
    this.showToastSubject.next(show);
  }
  show(data) {
    this.toastDataSubject.next(data);
    this.toggleToast(true);
  }
};
_ToastService.\u0275fac = function ToastService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastService)();
};
_ToastService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
var ToastService = _ToastService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LoaderService,
  ToastService
};
//# sourceMappingURL=chunk-PMGWFFGK.js.map
