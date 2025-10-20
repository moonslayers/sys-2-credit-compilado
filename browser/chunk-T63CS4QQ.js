import {
  AuthClientesService
} from "./chunk-MM7SSVC4.js";
import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  Router
} from "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/clientes/auth/login-clientes/login-clientes.component.ts
var _LoginClientesComponent = class _LoginClientesComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.email = "";
    this.password = "";
  }
  submit() {
    return __async(this, null, function* () {
      const user = yield this.auth.login(this.email, this.password);
      if (user) {
        this.router.navigate(["/clientes/main"]);
      }
    });
  }
};
_LoginClientesComponent.\u0275fac = function LoginClientesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginClientesComponent)(\u0275\u0275directiveInject(AuthClientesService), \u0275\u0275directiveInject(Router));
};
_LoginClientesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginClientesComponent, selectors: [["app-login-clientes"]], decls: 24, vars: 7, consts: [["emailInput", "ngModel"], ["passwordInput", "ngModel"], ["src", "../../../assets/main_logo.png", "alt", "...", 1, "img-fluid", "mt-3", "rounded"], [1, "text-center", "text-primary", "mt-2"], [1, "row", "px-2", "mt-3", "pb-2"], [1, "col-12", "mb-3"], [1, "form-floating", "has-validation"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "floatingInput"], ["id", "floatingInputFeedback", 1, "invalid-feedback", "text-primary", "fw-bold"], [1, "col-12"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["for", "floatingPassword"], [1, "col-12", "text-center", "mt-3"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function LoginClientesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 2);
    \u0275\u0275elementStart(1, "h3", 3)(2, "b");
    \u0275\u0275text(3, "Sistema Fondos BC (Acreditados)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "input", 7, 0);
    \u0275\u0275twoWayListener("ngModelChange", function LoginClientesComponent_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 8);
    \u0275\u0275text(10, "Correo electronico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275text(12, " Ingresa un correo electronico v\xE1lido. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 6)(15, "input", 11, 1);
    \u0275\u0275twoWayListener("ngModelChange", function LoginClientesComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function LoginClientesComponent_Template_input_keyup_enter_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 12);
    \u0275\u0275text(18, "Contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275text(20, " Ingresa una contrase\xF1a. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
    \u0275\u0275listener("click", function LoginClientesComponent_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submit());
    });
    \u0275\u0275text(23, " Ingresar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const emailInput_r2 = \u0275\u0275reference(8);
    const passwordInput_r3 = \u0275\u0275reference(16);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", emailInput_r2.touched && emailInput_r2.invalid);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", passwordInput_r3.touched && passwordInput_r3.invalid);
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", !(emailInput_r2.valid && passwordInput_r3.valid));
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, EmailValidator, NgModel], encapsulation: 2 });
var LoginClientesComponent = _LoginClientesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginClientesComponent, [{
    type: Component,
    args: [{ selector: "app-login-clientes", imports: [
      FormsModule
    ], template: '<img src="../../../assets/main_logo.png" class="img-fluid mt-3 rounded" alt="...">\n<h3 class="text-center text-primary mt-2"><b>Sistema Fondos BC (Acreditados)</b></h3>\n<div class="row px-2 mt-3 pb-2">\n    <div class="col-12 mb-3">\n        <div class="form-floating has-validation">\n            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"\n            [(ngModel)]="email" #emailInput="ngModel" required email\n            [class.is-invalid]="emailInput.touched && emailInput.invalid">\n            <label for="floatingInput">Correo electronico</label>\n            <div id="floatingInputFeedback" class="invalid-feedback text-primary fw-bold">\n                Ingresa un correo electronico v\xE1lido.\n            </div>\n        </div>\n    </div>\n    <div class="col-12">\n        <div class="form-floating has-validation">\n            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"\n            [(ngModel)]="password" #passwordInput="ngModel" required\n            [class.is-invalid]="passwordInput.touched && passwordInput.invalid" (keyup.enter)="submit()">\n            <label for="floatingPassword">Contrase\xF1a</label>\n            <div id="floatingInputFeedback" class="invalid-feedback text-primary fw-bold">\n                Ingresa una contrase\xF1a.\n            </div>\n        </div>\n    </div>\n    <div class="col-12 text-center mt-3">\n        <button class="btn btn-primary" [disabled]="!(emailInput.valid && passwordInput.valid)" (click)="submit()">\n            Ingresar\n        </button>\n    </div>\n</div>\n' }]
  }], () => [{ type: AuthClientesService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginClientesComponent, { className: "LoginClientesComponent", filePath: "src/app/clientes/auth/login-clientes/login-clientes.component.ts", lineNumber: 14 });
})();

// src/app/clientes/auth/auth.routes.ts
var authRoutes = [
  { path: "", component: LoginClientesComponent }
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-T63CS4QQ.js.map
