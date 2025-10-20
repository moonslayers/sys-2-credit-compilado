import {
  AuthService
} from "./chunk-264YGTKM.js";
import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  Router,
  RouterLink
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/auth/login/login.component.ts
var _LoginComponent = class _LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.email = "";
    this.password = "";
  }
  submit() {
    return __async(this, null, function* () {
      const usuariologin = yield this.auth.login({ email: this.email, password: this.password });
      if (usuariologin) {
        this.router.navigate(["/login/perfil"]);
        return;
      }
    });
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 32, vars: 7, consts: [["emailInput", "ngModel"], ["passwordInput", "ngModel"], ["src", "../../../assets/main_logo.png", "alt", "...", 1, "img-fluid", "mt-3", "rounded"], [1, "text-center", "text-light", "mt-2"], [1, "row", "px-2", "mt-3", "pb-2"], [1, "col-12", "mb-3"], [1, "form-floating", "has-validation"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "floatingInput"], ["id", "floatingInputFeedback", 1, "invalid-feedback", "text-light", "fw-bold"], [1, "col-12"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["for", "floatingPassword"], [1, "col-12", "text-center", "mt-3"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "col-12", "mt-2", "text-s", "text-center"], ["routerLink", "/recovery", 1, "text-secondary"], [1, "text-light"], ["routerLink", "/clientes", 1, "text-secondary"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "img", 2);
    \u0275\u0275elementStart(1, "h3", 3)(2, "b");
    \u0275\u0275text(3, "Sistema Fondos BC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "input", 7, 0);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
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
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function LoginComponent_Template_input_keyup_enter_15_listener() {
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
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submit());
    });
    \u0275\u0275text(23, " Ingresar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "a", 16);
    \u0275\u0275text(26, "\xBFOlvidaste tu contrase\xF1a?");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "br");
    \u0275\u0275elementStart(28, "span", 17);
    \u0275\u0275text(29, "Si eres un acreditado, inicia sesi\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 18);
    \u0275\u0275text(31, "aqu\xED.");
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
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, EmailValidator, NgModel, RouterLink], encapsulation: 2 });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [
      FormsModule,
      RouterLink
    ], template: '<img src="../../../assets/main_logo.png" class="img-fluid mt-3 rounded" alt="...">\n<h3 class="text-center text-light mt-2"><b>Sistema Fondos BC</b></h3>\n<div class="row px-2 mt-3 pb-2">\n    <div class="col-12 mb-3">\n        <div class="form-floating has-validation">\n            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"\n            [(ngModel)]="email" #emailInput="ngModel" required email\n            [class.is-invalid]="emailInput.touched && emailInput.invalid">\n            <label for="floatingInput">Correo electronico</label>\n            <div id="floatingInputFeedback" class="invalid-feedback text-light fw-bold">\n                Ingresa un correo electronico v\xE1lido.\n            </div> \n        </div>\n    </div>\n    <div class="col-12">\n        <div class="form-floating has-validation">\n            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"\n            [(ngModel)]="password" #passwordInput="ngModel" required\n            [class.is-invalid]="passwordInput.touched && passwordInput.invalid" (keyup.enter)="submit()">\n            <label for="floatingPassword">Contrase\xF1a</label>\n            <div id="floatingInputFeedback" class="invalid-feedback text-light fw-bold">\n                Ingresa una contrase\xF1a.\n            </div> \n        </div>\n    </div>\n    <div class="col-12 text-center mt-3">\n        <button class="btn btn-secondary" [disabled]="!(emailInput.valid && passwordInput.valid)" (click)="submit()">\n            Ingresar\n        </button>\n    </div>\n    <div class="col-12 mt-2 text-s text-center">\n        <a routerLink="/recovery" class="text-secondary">\xBFOlvidaste tu contrase\xF1a?</a><br>\n        <span class="text-light">Si eres un acreditado, inicia sesi\xF3n </span><a routerLink="/clientes" class="text-secondary">aqu\xED.</a>\n    </div>\n</div>' }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 15 });
})();

// src/app/auth/reset-password/reset-password.component.ts
var _ResetPasswordComponent = class _ResetPasswordComponent {
  constructor() {
    this.correo = "";
  }
};
_ResetPasswordComponent.\u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordComponent)();
};
_ResetPasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 14, vars: 3, consts: [["correoInput", "ngModel"], [1, "text-secondary", "fw-bold", "m-4", "pt-4"], [1, "row", "mt-5", "p-2", "pb-3"], [1, "col-12"], [1, "form-floating", "has-validation"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "floatingInput"], ["id", "floatingInputFeedback", 1, "invalid-feedback", "text-light", "fw-bold"], [1, "col-12", "mt-3", "text-center"], [1, "btn", "btn-secondary"]], template: function ResetPasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 1);
    \u0275\u0275text(1, "Reiniciar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "input", 5, 0);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.correo, $event) || (ctx.correo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 6);
    \u0275\u0275text(8, "Correo electronico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275text(10, " Ingresa un correo electronico v\xE1lido. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
    \u0275\u0275text(13, " Enviar link de recuperaci\xF3n. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const correoInput_r2 = \u0275\u0275reference(6);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", correoInput_r2.touched && correoInput_r2.invalid);
    \u0275\u0275twoWayProperty("ngModel", ctx.correo);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, EmailValidator, NgModel], encapsulation: 2 });
var ResetPasswordComponent = _ResetPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", imports: [
      FormsModule
    ], template: '<h2 class="text-secondary fw-bold m-4 pt-4">Reiniciar contrase\xF1a</h2>\n<div class="row mt-5 p-2 pb-3">\n    <div class="col-12">\n        <div class="form-floating has-validation">\n            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"\n            [(ngModel)]="correo" #correoInput="ngModel" required email\n            [class.is-invalid]="correoInput.touched && correoInput.invalid">\n            <label for="floatingInput">Correo electronico</label>\n            <div id="floatingInputFeedback" class="invalid-feedback text-light fw-bold">\n                Ingresa un correo electronico v\xE1lido.\n            </div> \n        </div>\n    </div>\n    <div class="col-12 mt-3 text-center">\n        <button class="btn btn-secondary">\n            Enviar link de recuperaci\xF3n.\n        </button>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/auth/reset-password/reset-password.component.ts", lineNumber: 12 });
})();

// src/app/auth/select-perfil/select-perfil.component.ts
function SelectPerfilComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perfil_r1 = ctx.$implicit;
    \u0275\u0275property("value", perfil_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", perfil_r1.sucursales.nombre, " (", perfil_r1.tipos_usuarios.nombre, ") ");
  }
}
var _SelectPerfilComponent = class _SelectPerfilComponent {
  constructor(storage, router) {
    this.storage = storage;
    this.router = router;
    this.usuarioLogin = this.storage.getUser();
  }
  onSelected() {
    const perfil = this.usuarioLogin.perfiles.find((perfil2) => perfil2.id == this.perfilSelected);
    if (!perfil)
      return;
    this.storage.setPerfil(perfil);
    this.router.navigate(["/main"]);
  }
};
_SelectPerfilComponent.\u0275fac = function SelectPerfilComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectPerfilComponent)(\u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(Router));
};
_SelectPerfilComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectPerfilComponent, selectors: [["app-select-perfil"]], decls: 13, vars: 3, consts: [[1, "container-fluid", "p-3"], [1, "row"], [1, "col-12"], [1, "h2", "text-light", "fw-bold", "mt-5"], [1, "form-select", "form-select-lg", "mt-3", "shadow", 3, "ngModelChange", "ngModel"], ["disabled", "", "selected", "", 3, "value"], [3, "value"], [1, "col-12", "text-center", "mt-5"], [1, "btn", "btn-secondary", "btn-lg", 3, "click", "disabled"]], template: function SelectPerfilComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
    \u0275\u0275text(4, "Selecciona un perfil:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 4);
    \u0275\u0275twoWayListener("ngModelChange", function SelectPerfilComponent_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.perfilSelected, $event) || (ctx.perfilSelected = $event);
      return $event;
    });
    \u0275\u0275elementStart(6, "option", 5);
    \u0275\u0275text(7, "Selecciona una opcion");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, SelectPerfilComponent_For_9_Template, 2, 3, "option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
    \u0275\u0275listener("click", function SelectPerfilComponent_Template_button_click_11_listener() {
      return ctx.onSelected();
    });
    \u0275\u0275text(12, " Entrar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.perfilSelected);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.usuarioLogin.perfiles);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.perfilSelected);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var SelectPerfilComponent = _SelectPerfilComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectPerfilComponent, [{
    type: Component,
    args: [{ selector: "app-select-perfil", imports: [
      FormsModule
    ], template: '<div class="container-fluid p-3">\n  <div class="row">\n    <div class="col-12">\n      <p class="h2 text-light fw-bold mt-5">Selecciona un perfil:</p>\n      <select class="form-select form-select-lg mt-3 shadow" [(ngModel)]="perfilSelected">\n        <option [value]="undefined" disabled selected>Selecciona una opcion</option>\n        @for (perfil of usuarioLogin.perfiles; track perfil) {\n          <option [value]="perfil.id">\n            {{perfil.sucursales.nombre}} ({{perfil.tipos_usuarios.nombre}})\n          </option>\n        }\n      </select>\n    </div>\n    <div class="col-12 text-center mt-5">\n      <button class="btn btn-secondary btn-lg" (click)="onSelected()" [disabled]="!perfilSelected">\n        Entrar\n      </button>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: LocalStorageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectPerfilComponent, { className: "SelectPerfilComponent", filePath: "src/app/auth/select-perfil/select-perfil.component.ts", lineNumber: 16 });
})();

// src/app/auth/auth.routes.ts
var authRoutes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "login/perfil", component: SelectPerfilComponent },
  { path: "recovery", component: ResetPasswordComponent }
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-HQJAGCWN.js.map
