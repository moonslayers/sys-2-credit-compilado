import {
  AuthClientesService
} from "./chunk-MM7SSVC4.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/clientes/main/cliente-perfil/change-pass/change-pass.component.ts
var _ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(auth) {
    this.auth = auth;
    this.oldPass = "";
    this.newPass = "";
    this.confirmPass = "";
  }
  isFormValid() {
    return !!this.newPass && this.newPass === this.confirmPass;
  }
  updatePass() {
    return __async(this, null, function* () {
      this.auth.updatePass(this.oldPass, this.newPass);
    });
  }
};
_ChangePasswordComponent.\u0275fac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChangePasswordComponent)(\u0275\u0275directiveInject(AuthClientesService));
};
_ChangePasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], decls: 28, vars: 4, consts: [[1, "abonos-container", "shadow-sm", "rounded", "animate__animated", "animate__fadeInRight"], [1, "py-3", "px-4", "bg-light", "rounded-top", "text-center", "border-bottom"], [1, "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "px-4", "text-start"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-lock", "me-2"], [1, "small", "mb-0"], [1, "btn", "btn", "btn-secondary", "shadow", "text-bold", "scale-05", 3, "click", "disabled"], [1, "p-3", "bg-white", 2, "max-height", "250px", "overflow", "auto"], [1, "input-group", "my-3"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "password", "placeholder", "contrase\xF1a", "aria-label", "contrase\xF1a", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group", "mb-3"], ["type", "password", "type", "text", "placeholder", "contrase\xF1a", "aria-label", "contrase\xF1a", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "py-2", "px-4", "bg-light", "rounded-bottom", "border-top"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"]], template: function ChangePasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
    \u0275\u0275element(5, "i", 5);
    \u0275\u0275text(6, "Cambiar Contrase\xF1a ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, "Cambia la contrase\xF1a de tu cuenta del portal de beneficiarios de Fondos BC.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_9_listener() {
      return ctx.updatePass();
    });
    \u0275\u0275text(10, " Guardar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "span", 10);
    \u0275\u0275text(14, "Contrase\xF1a anterior (si no hay, dejar en blanco):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.oldPass, $event) || (ctx.oldPass = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12)(17, "span", 10);
    \u0275\u0275text(18, "Contrase\xF1a nueva:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.newPass, $event) || (ctx.newPass = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 12)(21, "span", 10);
    \u0275\u0275text(22, "Confirmar contrase\xF1a nueva:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.confirmPass, $event) || (ctx.confirmPass = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "span", 16);
    \u0275\u0275text(27, " La fecha de este periodo es del ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", !ctx.isFormValid());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.oldPass);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.newPass);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.confirmPass);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var ChangePasswordComponent = _ChangePasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-change-password", imports: [
      FormsModule
    ], template: '<div class="abonos-container shadow-sm rounded animate__animated animate__fadeInRight">\n\n  <div class="py-3 px-4 bg-light rounded-top text-center border-bottom">\n    <div class="d-flex flex-row align-items-center justify-content-between">\n      <div class="px-4 text-start">\n        <h2 class="h5 mb-0 text-primary fw-semibold">\n          <i class="bi bi-lock me-2"></i>Cambiar Contrase\xF1a\n        </h2>\n        <p class="small mb-0">Cambia la contrase\xF1a de tu cuenta del portal de beneficiarios de Fondos BC.</p>\n      </div>\n      <button\n        class="btn btn btn-secondary shadow text-bold scale-05"\n        [disabled]="!isFormValid()" (click)="updatePass()">\n          Guardar\n      </button>\n    </div>\n  </div>\n\n  <!-- Inputs con el contenido de la carta -->\n  <div class="p-3 bg-white" style="max-height: 250px; overflow: auto;">\n    <div class="input-group my-3">\n        <span class="input-group-text" id="basic-addon1">Contrase\xF1a anterior (si no hay, dejar en blanco):</span>\n        <input type="password" class="form-control" placeholder="contrase\xF1a" aria-label="contrase\xF1a" aria-describedby="basic-addon1" [(ngModel)]="oldPass">\n    </div>\n    <div class="input-group mb-3">\n        <span class="input-group-text" id="basic-addon1">Contrase\xF1a nueva:</span>\n        <input type="password" class="form-control" placeholder="contrase\xF1a" aria-label="contrase\xF1a" aria-describedby="basic-addon1" [(ngModel)]="newPass">\n    </div>\n    <div class="input-group mb-3">\n        <span class="input-group-text" id="basic-addon1">Confirmar contrase\xF1a nueva:</span>\n        <input type="password" type="text" class="form-control" placeholder="contrase\xF1a" aria-label="contrase\xF1a" aria-describedby="basic-addon1" [(ngModel)]="confirmPass">\n    </div>\n  </div>\n\n  <!-- Pie de tabla -->\n  <div class="py-2 px-4 bg-light rounded-bottom border-top">\n    <div class="d-flex justify-content-between align-items-center">\n      <span class="text-muted small">\n        La fecha de este periodo es del\n      </span>\n    </div>\n  </div>\n\n</div>\n' }]
  }], () => [{ type: AuthClientesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "src/app/clientes/main/cliente-perfil/change-pass/change-pass.component.ts", lineNumber: 13 });
})();
export {
  ChangePasswordComponent
};
//# sourceMappingURL=chunk-U6U5DV5J.js.map
