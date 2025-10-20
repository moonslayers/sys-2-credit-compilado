import {
  SidebarOffcanvasComponent
} from "./chunk-OZS5GHEH.js";
import "./chunk-QQ3PLALS.js";
import "./chunk-264YGTKM.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  RouterOutlet
} from "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-IR6OZYYD.js";
import "./chunk-N6ESDQJH.js";

// src/app/clientes/auth/auth.component.ts
var _AuthComponent = class _AuthComponent {
};
_AuthComponent.\u0275fac = function AuthComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthComponent)();
};
_AuthComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthComponent, selectors: [["app-auth"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "bg-texture-1"], [1, "row", "justify-content-center", "main"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-5", "col-xl-3", "align-self-center", "bg-secondary", "rounded", "shadow"]], template: function AuthComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [RouterOutlet], styles: ["\n\n.main[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=auth.component.css.map */"] });
var AuthComponent = _AuthComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthComponent, [{
    type: Component,
    args: [{ selector: "app-auth", imports: [
      RouterOutlet
    ], template: '<div class="container-fluid bg-texture-1">\n    <div class="row justify-content-center main">\n        <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3  align-self-center bg-secondary rounded shadow">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>', styles: ["/* src/app/clientes/auth/auth.component.css */\n.main {\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=auth.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthComponent, { className: "AuthComponent", filePath: "src/app/clientes/auth/auth.component.ts", lineNumber: 12 });
})();

// src/app/clientes/main/main.component.ts
var MENU_OPTIONS = [
  {
    label: "Inicio",
    icon: "bi-house-door",
    icon_fill: "bi-house-door-fill",
    router_link: "/clientes/main/dashboard",
    route_include: "dashboard-beneficiarios",
    permiso: ""
  },
  {
    label: "Mi Perfil",
    icon: "bi-person-fill",
    router_link: "/clientes/main/perfil",
    route_include: "perfil",
    permiso: ""
  },
  {
    label: "Cotizador",
    icon: "bi-cash-coin",
    router_link: "/clientes/main/cotizador",
    route_include: "cotizador",
    permiso: ""
  },
  {
    label: "Altas",
    icon_fill: "bi-file-plus-fill",
    icon: "bi-pencil-square",
    permiso: "",
    sub_menu: [
      {
        label: "Creditos",
        icon: "bi-file-person",
        icon_fill: "bi-file-person-fill",
        router_link: "/clientes/main/creditos",
        route_include: "creditos",
        permiso: ""
      },
      {
        label: "Apoyos",
        icon: "bi-info-circle",
        icon_fill: "bi-info-circle-fill",
        router_link: "/clientes/main/apoyos",
        route_include: "apoyos",
        permiso: ""
      }
    ]
  },
  {
    label: "Estados Cuenta",
    icon: "bi bi-file-earmark-person",
    icon_fill: "bi bi-file-earmark-person-fill",
    router_link: "/clientes/main/estado-cuenta",
    route_include: "estado-cuenta"
  }
];
var _MainClientesComponent = class _MainClientesComponent {
  constructor() {
    this.menu = MENU_OPTIONS;
  }
};
_MainClientesComponent.\u0275fac = function MainClientesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainClientesComponent)();
};
_MainClientesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainClientesComponent, selectors: [["app-main"]], decls: 2, vars: 1, consts: [[3, "menuOptions"]], template: function MainClientesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-sidebar-offcanvas", 0);
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("menuOptions", ctx.menu);
  }
}, dependencies: [
  SidebarOffcanvasComponent,
  RouterOutlet
], encapsulation: 2 });
var MainClientesComponent = _MainClientesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainClientesComponent, [{
    type: Component,
    args: [{ selector: "app-main", imports: [
      SidebarOffcanvasComponent,
      RouterOutlet
    ], template: '<app-sidebar-offcanvas [menuOptions]="menu">\n    <router-outlet></router-outlet>\n</app-sidebar-offcanvas>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainClientesComponent, { className: "MainClientesComponent", filePath: "src/app/clientes/main/main.component.ts", lineNumber: 71 });
})();

// src/app/clientes/clientes.routes.ts
var clientesRoutes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  {
    path: "login",
    component: AuthComponent,
    loadChildren: () => import("./chunk-T63CS4QQ.js").then((m) => m.authRoutes)
  },
  {
    path: "main",
    component: MainClientesComponent,
    loadChildren: () => import("./chunk-LUMEJPSM.js").then((m) => m.mainRoutes)
  }
];
export {
  clientesRoutes
};
//# sourceMappingURL=chunk-ZJIFEGXK.js.map
