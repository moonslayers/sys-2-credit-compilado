import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IR6OZYYD.js";

// src/app/services/vanilla-dialog/vanilla-dialog.service.ts
var _VanillaDialogService = class _VanillaDialogService {
  constructor() {
    this.showDialogSubject = new BehaviorSubject(false);
    this.dialogDataSubject = new BehaviorSubject(null);
    this.closedDataSubject = new BehaviorSubject(null);
    this.showDialog$ = this.showDialogSubject.asObservable();
    this.dialogData$ = this.dialogDataSubject.asObservable();
    this.closedData$ = this.closedDataSubject.asObservable();
  }
  // Método para cambiar el estado del diálogo
  toggleDialog(show) {
    this.showDialogSubject.next(show);
  }
  show(data) {
    this.dialogDataSubject.next(data);
    this.toggleDialog(true);
    return this.closedData$;
  }
  close(data) {
    this.closedDataSubject.next(data);
    this.toggleDialog(false);
    this.closedDataSubject.next(null);
  }
  isOpen() {
    return this.showDialogSubject.closed;
  }
};
_VanillaDialogService.\u0275fac = function VanillaDialogService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VanillaDialogService)();
};
_VanillaDialogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VanillaDialogService, factory: _VanillaDialogService.\u0275fac, providedIn: "root" });
var VanillaDialogService = _VanillaDialogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VanillaDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  VanillaDialogService
};
//# sourceMappingURL=chunk-NXZD54QQ.js.map
