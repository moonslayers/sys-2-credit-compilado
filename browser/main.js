import {
  Toast
} from "./chunk-M5W5QKXE.js";
import {
  LoaderService,
  ToastService
} from "./chunk-PMGWFFGK.js";
import {
  FormsModule
} from "./chunk-TBFW4U4H.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  PreloadAllModules,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withHashLocation,
  withPreloading
} from "./chunk-XKAAYCNZ.js";
import {
  CommonModule,
  NgClass,
  provideHttpClient,
  withFetch
} from "./chunk-ZSRCSTKI.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import "./chunk-N6ESDQJH.js";

// src/app/auth/auth.guard.ts
var authGuard = (route, state) => {
  const userLogin = localStorage.getItem("user");
  const router = inject(Router);
  if (!userLogin || userLogin.update_token && Date.now() - new Date(userLogin.update_token).getTime() > 60 * 60 * 1e3) {
    localStorage.removeItem("user");
    router.navigate(["/login"]);
  }
  return !!userLogin;
};

// src/app/auth/no-auth.guard.ts
var noAuthGuard = (route, state) => {
  const userLogin = localStorage.getItem("user");
  const router = inject(Router);
  if (userLogin) {
    router.navigate(["/main/"]);
  }
  return !userLogin;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    canActivate: [noAuthGuard],
    title: "Login",
    loadComponent: () => import("./chunk-OHH54RMX.js").then((c) => c.AuthComponent),
    loadChildren: () => import("./chunk-HQJAGCWN.js").then((m) => m.authRoutes)
  },
  {
    path: "main",
    title: "Fondos BC",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-SW64OSI6.js").then((c) => c.MainComponent),
    loadChildren: () => import("./chunk-PADKAPZH.js").then((m) => m.mainRoutes)
  },
  {
    path: "configuracion",
    title: "Configuraci\xF3n",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-JFDNKECU.js").then((c) => c.ConfiguracionComponent),
    loadChildren: () => import("./chunk-5ZDHIB6I.js").then((m) => m.configRoutes)
  },
  {
    path: "pagos",
    title: "Pagos",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-H4AN4O2J.js").then((c) => c.PagosComponent),
    loadChildren: () => import("./chunk-AZK5PRZL.js").then((m) => m.pagosRoutes)
  },
  {
    path: "catalogos",
    title: "Catalogos",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-2TJZUQCE.js").then((c) => c.CatalogosComponent),
    loadChildren: () => import("./chunk-5QX2ANAE.js").then((m) => m.catalogosRoutes)
  },
  {
    path: "clientes",
    title: "Acreditados",
    loadChildren: () => import("./chunk-ZJIFEGXK.js").then((m) => m.clientesRoutes)
  },
  { path: "**", loadComponent: () => import("./chunk-ALPJSS3J.js").then((m) => m.NotFoundComponent) }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules), withHashLocation()),
    provideHttpClient(withFetch())
  ]
};

// src/app/shared/vanilla-dialog/vanilla-dialog.component.ts
var _c0 = ["dialogoElement"];
var _c1 = (a0, a1) => ({ "fade-out": a0, "fade-in": a1 });
var _c2 = (a0, a1) => ({ "animate__fadeOutDown": a0, "animate__fadeInUp": a1 });
function VanillaDialogComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.tipoTitle());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.title, " ");
  }
}
function VanillaDialogComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.body, " ");
  }
}
function VanillaDialogComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 14);
    \u0275\u0275listener("click", function VanillaDialogComponent_Conditional_0_Conditional_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.accion("no"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.respNot, " ");
  }
}
function VanillaDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3, 0)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "div", 5);
    \u0275\u0275conditionalCreate(9, VanillaDialogComponent_Conditional_0_Conditional_9_Template, 2, 3, "p", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275conditionalCreate(11, VanillaDialogComponent_Conditional_0_Conditional_11_Template, 2, 1, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275conditionalCreate(13, VanillaDialogComponent_Conditional_0_Conditional_13_Template, 3, 1, "div", 11);
    \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
    \u0275\u0275listener("click", function VanillaDialogComponent_Conditional_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.accion("si"));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", !(ctx_r1.body || ctx_r1.title))("ngClass", \u0275\u0275pureFunction2(12, _c1, !ctx_r1.show, ctx_r1.show));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(15, _c2, !ctx_r1.show, ctx_r1.show));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getSize() + " shadow rounded text-center bg-white");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.icon_class());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.title ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.body ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.respNot ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.tipoTitle() + " " + ctx_r1.borderColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.respYes ? ctx_r1.respYes : "Aceptar", " ");
  }
}
var _VanillaDialogComponent = class _VanillaDialogComponent {
  //Este es solo el template
  /* queda pendiente no lo hice hacer funcionar. Es para cerrar si se hace click fuera del div
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    // Comprobar si el clic ocurrió fuera del área del diálogo
    if (!this.dialogoElement.nativeElement.contains(event.target)) {
      // Lógica para cerrar el diálogo
      const data={
        closedByOutside:true,
      }
      this.dialogService.close(data)
    }
  }*/
  constructor(dialogService) {
    this.dialogService = dialogService;
    this.tipo = "";
    this.show = false;
    this.hide = false;
    this.respYes = "Aceptar";
    this.size = "m";
  }
  ngOnChanges() {
    if (this.show) {
      if (this.hide) {
        this.hide = false;
      }
      setTimeout(() => {
        if (this.show) {
          this.hide = false;
        }
      }, 500);
    } else {
      if (!this.hide) {
        setTimeout(() => {
          if (!this.show) {
            this.hide = true;
          }
        }, 500);
      } else {
        setTimeout(() => {
          setTimeout(() => {
            if (!this.show) {
              this.hide = true;
            }
          }, 500);
        }, 500);
      }
    }
  }
  getSize() {
    switch (this.size) {
      case "s":
        return "col-lg-3 p-4";
      case "m":
        return "col-lg-5 p-4";
      case "l":
        return "col-lg-7 p-4";
      case "xl":
        return "col-lg-9 p-3";
      default:
        return "col-lg-5 p-4";
    }
  }
  animationClass() {
    if (this.show) {
      return "fade-in";
    } else {
      return "fade-out";
    }
  }
  icon_class() {
    let tipo = "";
    switch (this.tipo) {
      case "success":
        tipo = "bi-check-circle text-success";
        break;
      case "warning":
        tipo = "bi-exclamation-circle text-warning";
        break;
      case "danger":
        tipo = "bi-x-circle text-danger";
        break;
      case "info":
        tipo = "bi-info-square text-info";
        break;
      case "confirm":
        tipo = "bi bi-question-circle text-secondary";
        break;
      default:
        tipo = "bi-exclamation-triangle text-primary ";
    }
    return tipo;
  }
  tipoTitle() {
    let tipo = "";
    switch (this.tipo) {
      case "success":
        tipo = "text-success";
        break;
      case "warning":
        tipo = "text-warning";
        break;
      case "danger":
        tipo = "text-danger";
        break;
      case "info":
        tipo = "text-info";
        break;
      case "confirm":
        tipo = "text-secondary";
        break;
      default:
        tipo = "text-primary";
    }
    return tipo;
  }
  borderColor() {
    let tipo = "";
    switch (this.tipo) {
      case "success":
        tipo = "border-success-subtle";
        break;
      case "warning":
        tipo = "border-warning-subtle";
        break;
      case "danger":
        tipo = "border-danger-subtle";
        break;
      case "info":
        tipo = "border-info-subtle";
        break;
      case "confirm":
        tipo = "border-secondary-subtle";
        break;
      default:
        tipo = "border-primary-subtle";
    }
    return tipo;
  }
  //se comunica con el servicio para indicarle que se debe cerrar y de que forma fue cerrado
  accion(value) {
    let data;
    switch (value) {
      case "si":
        data = {
          closedByAgree: true
        };
        this.dialogService.close(data);
        break;
      case "no":
        data = {
          closedByCancelled: true
        };
        this.dialogService.close(data);
        break;
      default:
        this.dialogService.close(void 0);
    }
  }
};
_VanillaDialogComponent.\u0275fac = function VanillaDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VanillaDialogComponent)(\u0275\u0275directiveInject(VanillaDialogService));
};
_VanillaDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VanillaDialogComponent, selectors: [["app-vanilla-dialog"]], viewQuery: function VanillaDialogComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dialogoElement = _t.first);
  }
}, inputs: { tipo: "tipo", show: "show", title: "title", body: "body", respYes: "respYes", respNot: "respNot", size: "size" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["dialogoElement", ""], [1, "frontal-blur-transparent-sm", 3, "hidden", "ngClass"], [1, "row", "justify-content-center", "p-4", "pt-5", "animate__animated", "animate__faster", 3, "ngClass"], [3, "ngClass"], [1, "row"], [1, "col", "text-center"], [1, "bi", "fs-0"], [1, "h2", 3, "class"], [1, "row", "mt-4", "mb-4"], [1, "col-lg-12", "text-center", "h6", "text-300"], [1, "row", "justify-content-evenly"], [1, "col-auto", "text-center"], [1, "btn", "shadow", "mt-3", "scale-05", 3, "click"], [1, "h2"], [1, "btn", "border-danger-subtle", "text-danger", "shadow", "mt-3", "scale-05", 3, "click"]], template: function VanillaDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VanillaDialogComponent_Conditional_0_Template, 17, 18, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.hide ? 0 : -1);
  }
}, dependencies: [CommonModule, NgClass, FormsModule], styles: ["\n\n.frontal-blur-transparent-sm[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  overflow-x: hidden;\n  z-index: 999999;\n}\n.fs-0[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.fade-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeOut 0.3s ease-out;\n  opacity: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  from {\n    opacity: 1;\n    height: 100%;\n    margin: 5px;\n    padding: 5px;\n  }\n  to {\n    opacity: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-in-out;\n  opacity: 1;\n  height: 100%;\n  margin: 5px;\n  padding: 5px;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }\n  to {\n    opacity: 1;\n    height: 100%;\n    margin: 5px;\n    padding: 5px;\n  }\n}\n/*# sourceMappingURL=vanilla-dialog.component.css.map */"] });
var VanillaDialogComponent = _VanillaDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VanillaDialogComponent, [{
    type: Component,
    args: [{ selector: "app-vanilla-dialog", imports: [
      CommonModule,
      FormsModule
    ], template: `@if (!hide) {
  <div class='frontal-blur-transparent-sm' [hidden]="!(body || title)" [ngClass]="{ 'fade-out': !show, 'fade-in': show }">
    <div class="row justify-content-center p-4 pt-5 animate__animated animate__faster" [ngClass]="{ 'animate__fadeOutDown': !show, 'animate__fadeInUp': show }">
      <div #dialogoElement [ngClass]="getSize() +' shadow rounded text-center bg-white'">
        <div class="row">
          <div class="col text-center">
            <i class="bi fs-0" [class]="icon_class()"></i>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            @if (title) {
              <p class="h2" [class]="tipoTitle()">
                {{title}}
              </p>
            }
          </div>
        </div>
        <div class="row mt-4 mb-4">
          @if (body) {
            <p class="col-lg-12 text-center h6 text-300">
              {{body}}
            </p>
          }
        </div>
        <div class="row justify-content-evenly">
          @if (respNot) {
            <div class="col-auto text-center">
              <button class="btn border-danger-subtle text-danger shadow mt-3 scale-05" (click)="accion('no')">
                {{respNot}}
              </button>
            </div>
          }
          <div class="col-auto text-center">
            <button class="btn shadow mt-3 scale-05" [class]="tipoTitle()+' '+borderColor()" (click)="accion('si')">
              {{respYes? respYes: 'Aceptar'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}`, styles: ["/* src/app/shared/vanilla-dialog/vanilla-dialog.component.css */\n.frontal-blur-transparent-sm {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(3px);\n  backdrop-filter: blur(3px);\n  overflow-x: hidden;\n  z-index: 999999;\n}\n.fs-0 {\n  font-size: 60px;\n}\n.fade-out {\n  animation: fadeOut 0.3s ease-out;\n  opacity: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n    height: 100%;\n    margin: 5px;\n    padding: 5px;\n  }\n  to {\n    opacity: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }\n}\n.fade-in {\n  animation: fadeIn 0.2s ease-in-out;\n  opacity: 1;\n  height: 100%;\n  margin: 5px;\n  padding: 5px;\n  overflow: hidden;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n  }\n  to {\n    opacity: 1;\n    height: 100%;\n    margin: 5px;\n    padding: 5px;\n  }\n}\n/*# sourceMappingURL=vanilla-dialog.component.css.map */\n"] }]
  }], () => [{ type: VanillaDialogService }], { tipo: [{
    type: Input
  }], show: [{
    type: Input
  }], title: [{
    type: Input
  }], body: [{
    type: Input
  }], respYes: [{
    type: Input
  }], respNot: [{
    type: Input
  }], size: [{
    type: Input
  }], dialogoElement: [{
    type: ViewChild,
    args: ["dialogoElement"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VanillaDialogComponent, { className: "VanillaDialogComponent", filePath: "src/app/shared/vanilla-dialog/vanilla-dialog.component.ts", lineNumber: 15 });
})();

// src/app/shared/loader/loader.component.ts
var _LoaderComponent = class _LoaderComponent {
  constructor() {
    this.animation = "cube";
  }
};
_LoaderComponent.\u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoaderComponent)();
};
_LoaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 0, consts: [[1, "col-lg-12", "loader-div"], [1, "loader"]], template: function LoaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n.loader-div[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n}\n.loader[_ngcontent-%COMP%] {\n  display: inliine;\n  border: 10px solid #8f808000;\n  border-top: 10px solid #07262f;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  position: absolute;\n  top: calc(50% - 60px);\n  left: calc(50% - 60px);\n  background-color: rgba(255, 255, 255, 0.164);\n  z-index: 999;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */"] });
var LoaderComponent = _LoaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", imports: [], template: `<div class='col-lg-12 loader-div'>
    <div class="loader">
    </div>
</div>`, styles: ["/* src/app/shared/loader/loader.component.css */\n.loader-div {\n  height: 100vh;\n  width: 100vw;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n}\n.loader {\n  display: inliine;\n  border: 10px solid #8f808000;\n  border-top: 10px solid #07262f;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 1s linear infinite;\n  position: absolute;\n  top: calc(50% - 60px);\n  left: calc(50% - 60px);\n  background-color: rgba(255, 255, 255, 0.164);\n  z-index: 999;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=loader.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/shared/loader/loader.component.ts", lineNumber: 10 });
})();

// src/app/shared/bootstrap-toast/bootstrap-toast.component.ts
var _c02 = ["toastElement"];
function BootstrapToastComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "button", 4);
  }
}
function BootstrapToastComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.image, \u0275\u0275sanitizeUrl);
  }
}
var _BootstrapToastComponent = class _BootstrapToastComponent {
  constructor() {
    this.title = "Bootstrap";
    this.message = "Hello, world! This is a toast message.";
    this.image = null;
    this.timeAgo = "Just now";
    this.autohide = true;
    this.delay = 5e3;
    this.show = false;
    this.showChange = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes["show"] && this.toastInstance) {
      if (this.show) {
        this.showToast();
      } else {
        this.hideToast();
      }
    }
  }
  ngAfterViewInit() {
    this.toastInstance = new Toast(this.toastElement.nativeElement, {
      autohide: typeof this.autohide === "boolean" ? this.autohide : true,
      delay: this.delay ?? 5e3
    });
  }
  showToast() {
    this.toastInstance.show();
    setTimeout(() => {
      this.show = this.toastInstance.isShown();
      this.showChange.emit(this.show);
    }, this.delay ?? 6e3);
  }
  hideToast() {
    this.toastInstance.hide();
    this.show = false;
    this.showChange.emit(false);
  }
};
_BootstrapToastComponent.\u0275fac = function BootstrapToastComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BootstrapToastComponent)();
};
_BootstrapToastComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BootstrapToastComponent, selectors: [["app-bootstrap-toast"]], viewQuery: function BootstrapToastComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toastElement = _t.first);
  }
}, inputs: { title: "title", message: "message", image: "image", timeAgo: "timeAgo", autohide: "autohide", delay: "delay", show: "show" }, outputs: { showChange: "showChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 13, vars: 5, consts: [["toastElement", ""], [1, "toast-container", "position-fixed", "bottom-0", "end-0", "p-3"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast", "shadow", "animate__animated", "animate__fadeIn", "animate__faster"], [1, "toast-header", "text-bg-primary"], [1, "btn", "btn-secondary", "p-2", "me-2"], ["alt", "...", 1, "rounded", "me-2", 3, "src"], [1, "me-auto"], ["type", "button", "data-bs-dismiss", "toast", 1, "btn-close", 3, "click"], [1, "toast-body"]], template: function BootstrapToastComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0)(3, "div", 3);
    \u0275\u0275conditionalCreate(4, BootstrapToastComponent_Conditional_4_Template, 1, 0, "button", 4);
    \u0275\u0275conditionalCreate(5, BootstrapToastComponent_Conditional_5_Template, 1, 1, "img", 5);
    \u0275\u0275elementStart(6, "strong", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function BootstrapToastComponent_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.hideToast());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.image ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.image ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title ?? "Notificaci\xF3n del sistema");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.timeAgo ?? "Justo ahora");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx.message, " ");
  }
}, styles: ["\n\n.animate__faster[_ngcontent-%COMP%] {\n  animation-duration: 0.25s;\n}\n/*# sourceMappingURL=bootstrap-toast.component.css.map */"] });
var BootstrapToastComponent = _BootstrapToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BootstrapToastComponent, [{
    type: Component,
    args: [{ selector: "app-bootstrap-toast", imports: [], template: `<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div #toastElement class="toast shadow animate__animated animate__fadeIn animate__faster" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header text-bg-primary">
      @if (!image) {
        <button class="btn btn-secondary p-2 me-2"></button>
      }
      @if (image) {
        <img [src]="image" class="rounded me-2" alt="..." />
      }
      <strong class="me-auto">{{ title??'Notificaci\xF3n del sistema' }}</strong>
      <small>{{ timeAgo??'Justo ahora' }}</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" (click)="hideToast()"></button>
    </div>
    <div class="toast-body">
      {{ message }}
    </div>
  </div>
</div>`, styles: ["/* src/app/shared/bootstrap-toast/bootstrap-toast.component.css */\n.animate__faster {\n  animation-duration: 0.25s;\n}\n/*# sourceMappingURL=bootstrap-toast.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], message: [{
    type: Input
  }], image: [{
    type: Input
  }], timeAgo: [{
    type: Input
  }], autohide: [{
    type: Input
  }], delay: [{
    type: Input
  }], show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], toastElement: [{
    type: ViewChild,
    args: ["toastElement"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BootstrapToastComponent, { className: "BootstrapToastComponent", filePath: "src/app/shared/bootstrap-toast/bootstrap-toast.component.ts", lineNumber: 30 });
})();

// src/app/app.component.ts
function AppComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
var _AppComponent = class _AppComponent {
  constructor(dialogService, toastSerice, loaderService, cd) {
    this.dialogService = dialogService;
    this.toastSerice = toastSerice;
    this.loaderService = loaderService;
    this.cd = cd;
    this.showDialog = false;
    this.showToast = false;
    this.dialogData = null;
    this.toastData = null;
    this.loader = false;
  }
  ngOnInit() {
    this.dialogService.showDialog$.subscribe((show) => {
      this.showDialog = show;
      this.cd.detectChanges();
    });
    this.dialogService.dialogData$.subscribe((data) => {
      this.dialogData = data;
    });
    this.toastSerice.showToast$.subscribe((show) => {
      this.showToast = show;
      this.cd.detectChanges();
    });
    this.toastSerice.toastData$.subscribe((data) => {
      this.toastData = data;
    });
    this.loaderService.showLoader$.subscribe((show) => {
      this.loader = show;
      this.cd.detectChanges();
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(VanillaDialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 15, consts: [[3, "show", "body", "title", "size", "respNot", "respYes", "tipo"], [3, "showChange", "show", "message", "autohide", "delay", "image", "timeAgo", "title"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-vanilla-dialog", 0);
    \u0275\u0275conditionalCreate(1, AppComponent_Conditional_1_Template, 1, 0, "app-loader");
    \u0275\u0275elementStart(2, "app-bootstrap-toast", 1);
    \u0275\u0275twoWayListener("showChange", function AppComponent_Template_app_bootstrap_toast_showChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showToast, $event) || (ctx.showToast = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "router-outlet");
  }
  if (rf & 2) {
    \u0275\u0275property("show", ctx.showDialog)("body", ctx.dialogData == null ? null : ctx.dialogData.body)("title", ctx.dialogData == null ? null : ctx.dialogData.title)("size", ctx.dialogData == null ? null : ctx.dialogData.size)("respNot", ctx.dialogData == null ? null : ctx.dialogData.respNo)("respYes", ctx.dialogData == null ? null : ctx.dialogData.respYes)("tipo", ctx.dialogData == null ? null : ctx.dialogData.tipo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loader ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showToast);
    \u0275\u0275property("message", ctx.toastData == null ? null : ctx.toastData.message)("autohide", ctx.toastData == null ? null : ctx.toastData.autohide)("delay", ctx.toastData == null ? null : ctx.toastData.delay)("image", ctx.toastData == null ? null : ctx.toastData.image)("timeAgo", ctx.toastData == null ? null : ctx.toastData.timeAgo)("title", ctx.toastData == null ? null : ctx.toastData.title);
  }
}, dependencies: [
  VanillaDialogComponent,
  RouterOutlet,
  LoaderComponent,
  BootstrapToastComponent
], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      VanillaDialogComponent,
      RouterOutlet,
      LoaderComponent,
      BootstrapToastComponent
    ], template: '<app-vanilla-dialog [show]="showDialog"\n  [body]="dialogData?.body"\n  [title]="dialogData?.title"\n  [size]="dialogData?.size"\n  [respNot]="dialogData?.respNo"\n  [respYes]="dialogData?.respYes"\n  [tipo]="dialogData?.tipo"\n></app-vanilla-dialog>\n@if (loader) {\n  <app-loader></app-loader>\n}\n<app-bootstrap-toast\n  [(show)]="showToast"\n  [message]="toastData?.message"\n  [autohide]="toastData?.autohide"\n  [delay]="toastData?.delay"\n  [image]="toastData?.image"\n  [timeAgo]="toastData?.timeAgo"\n  [title]="toastData?.title"\n  />\n<router-outlet></router-outlet>\n' }]
  }], () => [{ type: VanillaDialogService }, { type: ToastService }, { type: LoaderService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 22 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
