import {
  VersionComponent,
  VersionService
} from "./chunk-QQ3PLALS.js";
import {
  AuthService
} from "./chunk-264YGTKM.js";
import {
  LocalStorageService,
  environment
} from "./chunk-3ZMCPPSW.js";
import {
  Router,
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  CommonModule,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";

// src/app/shared/sidebar-offcanvas/menu-option/menu-option.component.ts
var _c0 = (a0, a1) => [a0, a1];
function MenuOptionComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c0, ctx_r0.icon_size, ctx_r0.icon()));
  }
}
function MenuOptionComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275conditionalCreate(1, MenuOptionComponent_Conditional_0_Conditional_0_Conditional_1_Template, 1, 4, "i", 2);
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.classColor);
    \u0275\u0275classProp("tooltip-container", ctx_r0.menu_option.tooltip)("text-bold", ctx_r0.isOptionInRoute());
    \u0275\u0275property("routerLink", ctx_r0.menu_option.router_link);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.icon() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.label_size);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.menu_option.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.menu_option.tooltip);
  }
}
function MenuOptionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MenuOptionComponent_Conditional_0_Conditional_0_Template, 6, 12, "a", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.hasPermiso(ctx_r0.menu_option.permiso) ? 0 : -1);
  }
}
function MenuOptionComponent_Conditional_1_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-menu-option", 7);
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("menu_option", option_r3)("menuExpanded", ctx_r0.menuExpanded)("label_size", ctx_r0.label_size)("icon_size", ctx_r0.icon_size);
  }
}
function MenuOptionComponent_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MenuOptionComponent_Conditional_1_For_6_Conditional_0_Template, 1, 4, "app-menu-option", 7);
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.hasPermiso(option_r3.permiso) ? 0 : -1);
  }
}
function MenuOptionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function MenuOptionComponent_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.collapse());
    });
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275repeaterCreate(5, MenuOptionComponent_Conditional_1_For_6_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-bold", ctx_r0.isOptionInRoute());
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c0, ctx_r0.icon_size, ctx_r0.icon()));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.label_size);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.menu_option.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.subMenuExpandClass);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.menu_option.sub_menu);
  }
}
var _MenuOptionComponent = class _MenuOptionComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.menu_option = {
      label: "",
      icon: ""
    };
    this.menuExpanded = true;
    this.icon_size = "";
    this.label_size = "";
    this.subMenuExpandClass = "d-none";
    this.showLabels = true;
    this.classColor = "bg-primary";
    this.permisos = [];
    this.permisos = (this.store.getPerfil().permisos_usuarios ?? []).filter((pu) => pu.permisos !== void 0).map((pu) => pu.permisos);
  }
  ngOnChanges(changes) {
    if (changes["menuExpanded"]) {
      if (this.menuExpanded) {
        setTimeout(() => {
          this.showLabels = this.menuExpanded;
        }, 200);
      } else {
        this.showLabels = false;
        this.subMenuExpandClass = "d-none";
      }
    }
  }
  icon() {
    return this.isOptionInRoute() ? this.menu_option.icon_fill ?? this.menu_option.icon : this.menu_option.icon;
  }
  isOptionInRoute() {
    return this.actual_route().includes((this.menu_option.route_include ?? "").toString());
  }
  actual_route() {
    return this.router.url;
  }
  hasPermiso(key) {
    if (!key) {
      return true;
    }
    const tienePermiso = this.permisos.some((p) => p.nombre.includes(key));
    return tienePermiso;
  }
  collapse() {
    if (this.subMenuExpandClass == "d-none") {
      this.subMenuExpandClass = "animate__fadeInLeft";
    } else {
      this.subMenuExpandClass = "animate__fadeOutLeft";
      setTimeout(() => {
        this.subMenuExpandClass = "d-none";
      }, 150);
    }
  }
};
_MenuOptionComponent.\u0275fac = function MenuOptionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuOptionComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LocalStorageService));
};
_MenuOptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuOptionComponent, selectors: [["app-menu-option"]], inputs: { menu_option: "menu_option", menuExpanded: "menuExpanded", icon_size: "icon_size", label_size: "label_size", showLabels: "showLabels", classColor: "classColor" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "list-group-item", "list-group-item-action", "text-light", "border-none", "bold-over", "text-nowrap", 3, "routerLink", "tooltip-container", "class", "text-bold"], [1, "list-group-item", "list-group-item-action", "text-light", "border-none", "bold-over", "text-nowrap", 3, "routerLink"], [1, "bi", 3, "ngClass"], [1, "p-2", "pb-5", "animate__animated", "animate__faster"], [1, "tooltip-text", "z-5"], ["data-bs-toggle", "collapse", "aria-controls", "collapseExample", 1, "list-group-item", "list-group-item-action", "bg-primary", "text-light", "border-none", "bold-over", "pointer", 3, "click"], [1, "container", "animate-speed", "p-0", "animate__animated", 3, "ngClass"], ["classColor", "bg-secondary", 3, "menu_option", "menuExpanded", "label_size", "icon_size"]], template: function MenuOptionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MenuOptionComponent_Conditional_0_Template, 1, 1)(1, MenuOptionComponent_Conditional_1_Template, 7, 10);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.menu_option.sub_menu ? 0 : 1);
  }
}, dependencies: [_MenuOptionComponent, CommonModule, NgClass, RouterLink], styles: ["\n\n.collapse[_ngcontent-%COMP%] {\n  background-color: #eee;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: transform 0.26s ease;\n}\n.collapsed[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n}\n.scale[_ngcontent-%COMP%]:hover {\n  transform: scaleY(1.050);\n  transition: transform 0.15s ease;\n}\n.animate-speed[_ngcontent-%COMP%] {\n  --animate-duration: 150ms;\n}\n.tooltip-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n.tooltip-container[_ngcontent-%COMP%]   .tooltip-text[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: auto;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 4px;\n  padding: 5px;\n  position: absolute;\n  z-index: 3;\n  bottom: 100%;\n  left: 50%;\n  transform: translate(-60%, 200%);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.tooltip-container[_ngcontent-%COMP%]:hover   .tooltip-text[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=menu-option.component.css.map */"] });
var MenuOptionComponent = _MenuOptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuOptionComponent, [{
    type: Component,
    args: [{ selector: "app-menu-option", imports: [
      CommonModule,
      RouterLink
    ], template: '@if (!menu_option.sub_menu) {\n@if (hasPermiso(menu_option.permiso)) {\n<a [routerLink]="menu_option.router_link" [class.tooltip-container]="menu_option.tooltip"\n  class="list-group-item list-group-item-action text-light border-none bold-over text-nowrap" [class]="classColor"\n  [class.text-bold]="isOptionInRoute()">\n  @if (icon()) {\n  <i class="bi " [ngClass]="[icon_size,icon()]"></i>\n  }\n  <span class="p-2 pb-5 animate__animated animate__faster" [class]="label_size">\n    {{menu_option.label}}\n  </span>\n  <div class="tooltip-text z-5">{{menu_option.tooltip}}</div>\n</a>\n}\n} @else {\n<a class="list-group-item list-group-item-action bg-primary text-light border-none bold-over pointer"\n  [class.text-bold]="isOptionInRoute()" data-bs-toggle="collapse" (click)="collapse()" aria-controls="collapseExample">\n  <i class="bi" [ngClass]="[icon_size,icon()]"></i>\n  <span class="p-2 pb-5 animate__animated animate__faster" [class]="label_size">\n    {{menu_option.label}}\n  </span>\n</a>\n<div class="container animate-speed p-0 animate__animated" [ngClass]="subMenuExpandClass">\n  @for (option of menu_option.sub_menu; track option) {\n  @if (hasPermiso(option.permiso)) {\n  <app-menu-option [menu_option]="option" [menuExpanded]="menuExpanded" classColor="bg-secondary"\n    [label_size]="label_size" [icon_size]="icon_size"></app-menu-option>\n  }\n  }\n</div>\n}', styles: ["/* src/app/shared/sidebar-offcanvas/menu-option/menu-option.component.css */\n.collapse {\n  background-color: #eee;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: transform 0.26s ease;\n}\n.collapsed {\n  transform: scaleY(1);\n}\n.scale:hover {\n  transform: scaleY(1.050);\n  transition: transform 0.15s ease;\n}\n.animate-speed {\n  --animate-duration: 150ms;\n}\n.tooltip-container {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n.tooltip-container .tooltip-text {\n  visibility: hidden;\n  width: auto;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 4px;\n  padding: 5px;\n  position: absolute;\n  z-index: 3;\n  bottom: 100%;\n  left: 50%;\n  transform: translate(-60%, 200%);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.tooltip-container:hover .tooltip-text {\n  visibility: visible;\n  opacity: 1;\n}\n/*# sourceMappingURL=menu-option.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: LocalStorageService }], { menu_option: [{
    type: Input
  }], menuExpanded: [{
    type: Input
  }], icon_size: [{
    type: Input
  }], label_size: [{
    type: Input
  }], showLabels: [{
    type: Input
  }], classColor: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuOptionComponent, { className: "MenuOptionComponent", filePath: "src/app/shared/sidebar-offcanvas/menu-option/menu-option.component.ts", lineNumber: 27 });
})();

// src/app/shared/sidebar-offcanvas/sidebar-offcanvas.component.ts
var _c02 = ["*"];
var _c1 = (a0, a1) => ({ "big-menu": a0, "big-menu-expanded": a1 });
var _c2 = (a0, a1) => ({ "logo-icon": a0, "logo-expanded": a1 });
function SidebarOffcanvasComponent_For_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-menu-option", 26);
  }
  if (rf & 2) {
    const option_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("menu_option", option_r1);
  }
}
function SidebarOffcanvasComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarOffcanvasComponent_For_14_Conditional_0_Template, 1, 1, "app-menu-option", 26);
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hasPermiso(option_r1.permiso) ? 0 : -1);
  }
}
function SidebarOffcanvasComponent_For_30_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-menu-option", 27);
  }
  if (rf & 2) {
    const option_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("menu_option", option_r3)("showLabels", false)("menuExpanded", ctx_r1.menuExpanded);
  }
}
function SidebarOffcanvasComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SidebarOffcanvasComponent_For_30_Conditional_0_Template, 1, 3, "app-menu-option", 27);
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hasPermiso(option_r3.permiso) ? 0 : -1);
  }
}
var MENU_OPTIONS = [
  {
    label: "Cotizador",
    icon: "bi-cash-coin",
    router_link: "/main/cotizador",
    route_include: "cotizador",
    permiso: ""
  },
  {
    label: "Altas",
    icon_fill: "bi-file-plus-fill",
    icon: "bi-pencil-square",
    sub_menu: [
      {
        label: "Apoyos",
        icon: "bi-person-heart",
        router_link: "/main/apoyos",
        route_include: "apoyos"
      },
      {
        label: "Cr\xE9ditos",
        icon: "bi-file-person",
        icon_fill: "bi-file-person-fill",
        router_link: "/main/creditos",
        route_include: "creditos"
      },
      {
        label: "Usuarios",
        icon: "bi-person-plus",
        icon_fill: "bi-person-plus-fill",
        router_link: "/main/usuarios",
        route_include: "usuarios"
      }
    ]
  },
  {
    label: "Digitalizados",
    icon: "bi-file-person",
    icon_fill: "bi-file-person-fill",
    router_link: "/main/digitalizados",
    route_include: "main/digitalizados"
  },
  {
    label: "Apoyos",
    icon: "bi-heart-fill",
    sub_menu: [
      {
        label: "En Proceso",
        icon: "bi-file-earmark-plus",
        icon_fill: "bi-file-earmark-plus-fill",
        router_link: "/main/apoyos/pendientes",
        route_include: "pendientes",
        permiso: ""
      },
      {
        label: "Validaci\xF3n",
        icon: "bi-file-earmark-check",
        icon_fill: "bi-file-earmark-check-fill",
        router_link: "/main/apoyos/verificados",
        route_include: "verificados",
        permiso: ""
      },
      {
        label: "Dictaminaci\xF3n",
        icon: "bi-file-earmark-plus",
        icon_fill: "bi-file-earmark-plus-fill",
        router_link: "/main/apoyos/dictaminacion",
        route_include: "dictaminacion",
        permiso: ""
      },
      {
        label: "Liberaci\xF3n",
        icon: "bi-bookmark-check",
        icon_fill: "bi-bookmark-check-fill",
        router_link: "/main/apoyos/liberacion",
        route_include: "liberacion",
        permiso: ""
      },
      {
        label: "Conclusi\xF3n",
        icon: "bi-bookmark-star",
        icon_fill: "bi-bookmark-star-fill",
        router_link: "/main/apoyos/conclusion",
        route_include: "conclusion",
        permiso: ""
      }
    ]
  },
  {
    label: "Cr\xE9ditos",
    icon: "bi-coin",
    sub_menu: [
      {
        label: "En Proceso",
        icon: "bi-file-earmark-plus",
        icon_fill: "bi-file-earmark-plus-fill",
        router_link: "/main/creditos/en-proceso",
        route_include: "en-proceso",
        permiso: ""
      },
      {
        label: "Validaci\xF3n",
        icon: "bi-file-earmark-check",
        icon_fill: "bi-file-earmark-check-fill",
        router_link: "/main/creditos/validacion",
        route_include: "creditos/validacion",
        permiso: ""
      },
      {
        label: "Dictaminaci\xF3n",
        icon: "bi-file-earmark-plus",
        icon_fill: "bi-file-earmark-plus-fill",
        router_link: "/main/creditos/dictaminacion",
        route_include: "dictaminacion",
        permiso: ""
      },
      {
        label: "Formalizaci\xF3n",
        icon: "bi-journal-album",
        icon_fill: "bi-journal-album",
        router_link: "/main/creditos/formalizacion",
        route_include: "formalizacion",
        permiso: ""
      },
      {
        label: "Pre Liberaci\xF3n",
        icon: "bi-file-break",
        icon_fill: "bi-file-break-fill",
        router_link: "/main/creditos/preliberacion",
        route_include: "preliberacion",
        permiso: ""
      },
      {
        label: "Liberaci\xF3n",
        icon: "bi-bookmark-check",
        icon_fill: "bi-bookmark-check-fill",
        router_link: "/main/creditos/liberacion",
        route_include: "liberacion",
        permiso: ""
      },
      {
        label: "Comprobaci\xF3n",
        icon: "bi-bookmark-star",
        icon_fill: "bi-bookmark-star-fill",
        router_link: "/main/creditos/comprobacion",
        route_include: "comprobacion",
        permiso: ""
      }
    ]
  },
  {
    label: "Estados Cuenta",
    icon: "bi bi-file-earmark-person",
    icon_fill: "bi bi-file-earmark-person-fill",
    router_link: "/main/estado-cuenta",
    route_include: "estado-cuenta"
  },
  {
    label: "Cat\xE1logos",
    icon: "bi-clipboard-check",
    icon_fill: "bi-clipboard-check-fill",
    sub_menu: [
      {
        label: "A. Econ\xF3micas",
        tooltip: "Actividades Economicas",
        router_link: "/catalogos/actividades-economicas",
        route_include: "actividades-economicas",
        permiso: ""
      },
      {
        label: "Ciudades",
        router_link: "/catalogos/ciudades",
        route_include: "/catalogos/ciudades",
        permiso: ""
      },
      {
        label: "Datos Personales",
        router_link: "/catalogos/datos-personales",
        route_include: "datos-personales",
        permiso: "datos-personales"
      },
      {
        label: "Discapacidades",
        router_link: "/catalogos/tipos-discapacidad",
        route_include: "tipos-discapacidad",
        permiso: ""
      },
      {
        label: "Etnia",
        router_link: "/catalogos/etnias",
        route_include: "etnias",
        permiso: ""
      },
      {
        label: "Parentescos",
        router_link: "/catalogos/parentescos",
        route_include: "parentescos",
        permiso: ""
      },
      {
        label: "Referencias Pers.",
        router_link: "/catalogos/referencias-personales",
        route_include: "referencias-personales",
        permiso: ""
      },
      {
        label: "Sesiones",
        router_link: "/catalogos/sesiones",
        route_include: "sesiones"
      },
      {
        label: "Proveedores",
        router_link: "/catalogos/proveedores",
        route_include: "proveedores"
      }
    ]
  },
  {
    label: "Tesorer\xEDa",
    icon: "bi-wallet2",
    sub_menu: [
      {
        label: "Bit\xE1cora",
        icon: "bi-journal",
        route_include: "/pagos/bitacora",
        router_link: "/pagos/bitacora"
      },
      {
        label: "Cancelaci\xF3n",
        icon: "bi-journal",
        route_include: "/pagos/main/cancelacion",
        router_link: "/pagos/main/cancelacion"
      },
      {
        label: "Cartera",
        icon: "bi-wallet",
        route_include: "/pagos/pendientes",
        router_link: "/pagos/pendientes"
      },
      {
        label: "Abonos",
        icon: "bi-journal",
        route_include: "/pagos/main/abonos",
        router_link: "/pagos/main/abonos"
      },
      {
        label: "Traspaso",
        icon: "bi-journal",
        route_include: "/pagos/main/traspaso",
        router_link: "/pagos/main/traspaso"
      },
      {
        label: "Referenciados",
        icon: "bi bi-file-earmark-spreadsheet",
        icon_fill: "bi bi-file-earmark-spreadsheet-fill",
        route_include: "/pagos/masiva",
        router_link: "/pagos/masiva"
      },
      {
        label: "No Identificados",
        icon: "bi bi-journal",
        icon_fill: "bi bi-file-earmark-spreadsheet-fill",
        route_include: "/pagos/no-identificados",
        router_link: "/pagos/no-identificados"
      },
      {
        label: "Facturaci\xF3n",
        icon: "bi bi-journal",
        icon_fill: "bi bi-file-earmark-spreadsheet-fill",
        route_include: "/pagos/facturacion",
        router_link: "/pagos/facturacion"
      },
      {
        label: "P\xF3lizas",
        icon: "bi bi-file-earmark-spreadsheet",
        icon_fill: "bi bi-file-earmark-spreadsheet-fill",
        router_link: "/pagos/polizas",
        route_include: "/pagos/polizas"
      },
      {
        label: "Cancelaci\xF3n de abonos",
        icon: "bi bi-journal",
        route_include: "/pagos/main/abono-cancelacion",
        router_link: "/pagos/main/abono-cancelacion"
      },
      {
        label: "Cancelaci\xF3n de cargas masivas",
        icon: "bi bi-journal",
        route_include: "/pagos/carga-masiva-cancelacion",
        router_link: "/pagos/carga-masiva-cancelacion"
      },
      {
        label: "Liquidaci\xF3n anticipada",
        icon: "bi bi-journal",
        route_include: "/pagos/main/liquidacion-anticipada",
        router_link: "/pagos/liquidacion-anticipada/list"
      }
    ]
  },
  {
    label: "Cobranza",
    icon: "bi-wallet-fill",
    permiso: "COBRANZA",
    sub_menu: [
      {
        label: "Dashboard",
        icon: "bi bi-file-bar-graph",
        icon_fill: "bi bi-file-bar-graph-fill",
        route_include: "/main/cobranza/dashboard",
        router_link: "/main/cobranza/dashboard"
      },
      {
        label: "Cartera Vencida",
        icon: "bi-wallet",
        route_include: "/main/cobranza/",
        router_link: "/main/cobranza/"
      },
      {
        label: "Asignaciones",
        icon: "bi bi-file-earmark-spreadsheet",
        icon_fill: "bi bi-file-earmark-spreadsheet-fill",
        route_include: "/main/cobranza/asignaciones",
        permiso: "ENCARGADO COBRANZA",
        router_link: "/main/cobranza/asignaciones"
      },
      {
        label: "Mis Asignaciones",
        icon: "bi bi-file-earmark-spreadsheet",
        icon_fill: "bi bi-file-earmark-spreadsheet-fill",
        route_include: "/main/cobranza/asignados",
        router_link: "/main/cobranza/asignados"
      },
      {
        label: "Notificaciones",
        icon: "bi bi-file-earmark-spreadsheet",
        icon_fill: "bi bi-file-earmark-spreadsheet-fill",
        route_include: "/main/cobranza/notificaciones",
        permiso: "ENCARGADO COBRANZA",
        router_link: "/main/cobranza/notificaciones"
      }
    ]
  },
  {
    label: "Convenios",
    icon: "bi-person-lock",
    sub_menu: [
      {
        label: "Cartera",
        icon: "bi-person-lock",
        route_include: "/main/convenios/list",
        router_link: "/main/convenios/list"
      }
    ]
  },
  {
    label: "Jur\xEDdico",
    icon: "bi-archive",
    icon_fill: "bi-archive-fill",
    sub_menu: [
      {
        label: "Cartera",
        icon: "bi-wallet",
        route_include: "/juridico/",
        router_link: "/main/juridico"
      },
      {
        label: "Despachos",
        router_link: "/catalogos/despachos",
        route_include: "despachos"
      },
      {
        label: "Juzgados",
        router_link: "/catalogos/juzgados",
        route_include: "juzgados",
        permiso: ""
      },
      {
        label: "Procesos Judiciales",
        router_link: "/catalogos/procesos-judiciales",
        route_include: "/catalogos/procesos-judiciales",
        permiso: ""
      },
      {
        label: "Etapas Judiciales",
        router_link: "/catalogos/etapas-judiciales",
        route_include: "/catalogos/etapas-judiciales",
        permiso: ""
      }
    ]
  },
  {
    label: "Informes",
    icon: "bi-archive",
    icon_fill: "bi-archive-fill",
    sub_menu: [
      {
        label: "Dashboard",
        icon: "bi-clipboard-data",
        icon_fill: "bi-clipboard-data-fill",
        router_link: "/main/informes/periodo",
        route_include: "/informes/periodo"
      },
      {
        label: "Sesionados",
        icon: "bi-clipboard-data",
        icon_fill: "bi-clipboard-data-fill",
        router_link: "/main/informes/sesionados",
        route_include: "/informes/sesionados"
      },
      {
        label: "Hist\xF3rico",
        icon: "bi-clipboard-data",
        icon_fill: "bi-clipboard-data-fill",
        router_link: "/main/informes/historico",
        route_include: "/informes/historico"
      },
      {
        label: "Cobranza",
        icon: "bi-clipboard-data",
        icon_fill: "bi-clipboard-data-fill",
        router_link: "/main/informes/cobranza",
        route_include: "/informes/cobranza"
      },
      {
        label: "Jur\xEDdico",
        icon: "bi-clipboard-data",
        icon_fill: "bi-clipboard-data-fill",
        router_link: "/main/informes/juridico",
        route_include: "/informes/juridico"
      },
      {
        label: "Pagos",
        icon: "bi-clipboard-data",
        icon_fill: "bi-clipboard-data-fill",
        router_link: "/main/informes/pagos",
        route_include: "/informes/pagos"
      },
      {
        label: "Bur\xF3 de credito",
        icon: "bi-clipboard-data",
        icon_fill: "bi-clipboard-data-fill",
        router_link: "/main/informes/buro",
        route_include: "/informes/buro"
      }
    ]
  },
  {
    label: "Reportes",
    icon: "bi-file-earmark-excel",
    icon_fill: "bi-file-earmark-excel-fill",
    router_link: "/main/reportes"
  },
  {
    label: "Configuraci\xF3n",
    tooltip: "Prueba!",
    icon: "bi-gear",
    icon_fill: "bi-gear-fill",
    sub_menu: [
      {
        label: "P. Financieros",
        tooltip: "Productos Financieros",
        icon: "bi-coin",
        router_link: "/configuracion/productos/financieros",
        route_include: "financieros"
      },
      {
        label: "Apoyos",
        icon: "bi-heart",
        router_link: "/configuracion/apoyos",
        route_include: "apoyos"
      },
      {
        label: "Documento",
        icon: "bi-file-text",
        icon_fill: "bi-file-text-fill",
        route_include: "/configuracion/documentos",
        router_link: "/configuracion/documentos"
      },
      {
        label: "Migraci\xF3n",
        icon: "bi-file-x",
        icon_fill: "bi-file-x-fill",
        route_include: "/configuracion/migracion",
        router_link: "/configuracion/migracion"
      },
      {
        label: "Actualizaci\xF3n",
        icon: "bi-file-x",
        icon_fill: "bi-file-x-fill",
        route_include: "/configuracion/actualizar-estados-cuenta",
        router_link: "/configuracion/actualizar-estados-cuenta"
      },
      {
        label: "Modalidades",
        icon: "bi-cloud-sun",
        icon_fill: "bi-cloud-sun-fill",
        route_include: "/configuracion/modalidades",
        router_link: "/configuracion/modalidades"
      },
      {
        label: "Historico",
        icon: "bi-gear",
        icon_fill: "bi-gear-fill",
        route_include: "/configuracion/historico",
        router_link: "/configuracion/historico"
      }
    ]
  }
];
var _SidebarOffcanvasComponent = class _SidebarOffcanvasComponent {
  constructor(router, store, auth, version) {
    this.router = router;
    this.store = store;
    this.auth = auth;
    this.version = version;
    this.currentRoute = "";
    this.permisos = [];
    this.menuExpanded = true;
    this.menuOptions = MENU_OPTIONS;
    this.logo_name = !!environment.logo_name ? environment.logo_name : "main_logo.png";
    if (this.store.isUserLogged()) {
      this.user = this.store.getUser();
    }
    this.permisos = (this.store.getPerfil().permisos_usuarios ?? []).filter((pu) => pu.permisos !== void 0).map((pu) => pu.permisos);
    this.logo_url = "../../../assets/" + this.logo_name;
  }
  ngOnInit() {
  }
  hasPermiso(key) {
    if (!key) {
      return true;
    }
    const tienePermiso = this.permisos.some((p) => p.nombre.includes(key));
    return tienePermiso;
  }
  isCollapsed() {
    const regex = /\/(clientes|usuarios|mercancias|almacenajes|servicios)\//;
    if (regex.test(this.router.url)) {
      return true;
    }
    return false;
  }
  sign_out() {
    this.store.deleteUser();
    this.router.navigate(["/"]);
  }
  actual_route() {
    return this.router.url;
  }
};
_SidebarOffcanvasComponent.\u0275fac = function SidebarOffcanvasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarOffcanvasComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(VersionService));
};
_SidebarOffcanvasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarOffcanvasComponent, selectors: [["app-sidebar-offcanvas"]], inputs: { menuOptions: "menuOptions" }, ngContentSelectors: _c02, decls: 40, vars: 13, consts: [["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample", "aria-controls", "offcanvasExample", 1, "btn", "toggler", "btn-primary", "scale-025", "m-1", "p-0", "px-2", "shadow-sm", "d-lg-none"], [1, "bi", "bi-list", "fs-4", "fw-bold"], ["tabindex", "-1", "id", "offcanvasExample", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-size-sm", "view-height", "offcanvas-start", "bg-primary", "text-bg-primary"], [1, "container-fluid"], [1, "row"], [1, "col", "px-2", "text-end"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn", "scale-025"], [1, "bi", "bi-x-lg", "text-light", "shadow", "fw-bold"], [1, "img-fluid", 3, "src"], [1, "text-end"], [1, "offcanvas-body"], [1, "list-group", "list-group-flush"], [1, "m-0", "px-3", "text-center", "mt-5", "text-bold", "scale-1", "pointer", "text-white"], [1, "bi", "bi-box-arrow-in-left"], [1, "p-2", "pb-5", "animate__animated", "logout", 3, "click"], [1, "col-12", "mt-5", "text-center"], [1, "row", "p-0", "m-0"], [1, "col-auto", "p-0", "m-0"], [1, "col-auto", "bg-primary", "p-2", "big-menu", "d-none", "d-lg-block", 3, "ngClass"], [1, "list-group", "list-group-flush", "pointer", 3, "mouseenter"], [1, "list-group-item", "list-group-item-action", "bg-primary", "text-light", "border-none", "text-center", "image-container", "pointer"], ["alt", "Almacenes", 3, "src", "ngClass"], [1, "bi", "bi-box-arrow-in-left", "fs-5"], [1, "p-2", "pb-5", "animate__animated", "logout", 3, "click", "hidden"], [1, "col", "m-0", "view-height", "bg"], [1, "container-fluid", "p-0", "position-relative", "z-1"], [3, "menu_option"], ["icon_size", "fs-5", "label_size", "", 3, "menu_option", "showLabels", "menuExpanded"]], template: function SidebarOffcanvasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275element(1, "i", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "button", 6);
    \u0275\u0275element(7, "i", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(8, "img", 8);
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275element(10, "app-version");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
    \u0275\u0275repeaterCreate(13, SidebarOffcanvasComponent_For_14_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(15, "p", 12);
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275listener("click", function SidebarOffcanvasComponent_Template_span_click_17_listener() {
      return ctx.sign_out();
    });
    \u0275\u0275text(18, " Cerrar sesi\xF3n ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 15);
    \u0275\u0275element(20, "app-version");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "div", 19);
    \u0275\u0275listener("mouseenter", function SidebarOffcanvasComponent_Template_div_mouseenter_24_listener() {
      return ctx.menuExpanded = true;
    });
    \u0275\u0275elementStart(25, "a", 20);
    \u0275\u0275element(26, "img", 21);
    \u0275\u0275elementStart(27, "div", 9);
    \u0275\u0275element(28, "app-version");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(29, SidebarOffcanvasComponent_For_30_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(31, "p", 12);
    \u0275\u0275element(32, "i", 22);
    \u0275\u0275elementStart(33, "a", 23);
    \u0275\u0275listener("click", function SidebarOffcanvasComponent_Template_a_click_33_listener() {
      return ctx.sign_out();
    });
    \u0275\u0275text(34, " Cerrar sesi\xF3n ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 15);
    \u0275\u0275element(36, "app-version");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 24)(38, "div", 25);
    \u0275\u0275projection(39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx.logo_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.menuOptions);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c1, !ctx.menuExpanded, ctx.menuExpanded));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.logo_url, \u0275\u0275sanitizeUrl)("ngClass", \u0275\u0275pureFunction2(10, _c2, !ctx.menuExpanded, ctx.menuExpanded));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.menuOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("animate__fadeIn", ctx.menuExpanded);
    \u0275\u0275property("hidden", !ctx.menuExpanded);
  }
}, dependencies: [
  CommonModule,
  NgClass,
  MenuOptionComponent,
  VersionComponent
], styles: ["\n\n.toggler[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.offcanvas-size-xl[_ngcontent-%COMP%] {\n  --bs-offcanvas-width: min(95vw, 600px) !important;\n}\n.offcanvas-size-xxl[_ngcontent-%COMP%] {\n  --bs-offcanvas-width: min(95vw, 90vw) !important;\n}\n.offcanvas-size-md[_ngcontent-%COMP%] {\n  --bs-offcanvas-width: min(95vw, 400px) !important;\n}\n.offcanvas-size-sm[_ngcontent-%COMP%] {\n  --bs-offcanvas-width: min(95vw, 250px) !important;\n}\n.offcanvas-size-auto[_ngcontent-%COMP%] {\n  --bs-offcanvas-width: auto !important;\n}\n.bg[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      120deg,\n      #fdfbfb 0%,\n      #dbdcdd 100%);\n}\n.image-container[_ngcontent-%COMP%] {\n  height: 8.0rem;\n  width: 100%;\n}\n.logout[_ngcontent-%COMP%] {\n  --animate-delay: 500ms;\n}\n.view-height[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: auto;\n}\n.big-menu[_ngcontent-%COMP%] {\n  height: 100vh !important;\n  width: 4.5rem;\n  overflow-y: auto;\n  transition: width 0.3s ease-in;\n}\n.big-menu-expanded[_ngcontent-%COMP%] {\n  height: 100vh !important;\n  width: 13rem;\n  overflow-y: auto;\n  transition: width 0.3s ease-out;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 1.8rem;\n  transition: width 0.3s ease-out;\n}\n.logo-expanded[_ngcontent-%COMP%] {\n  width: 9.4rem;\n  transition: width 0.3s ease-out;\n}\n/*# sourceMappingURL=sidebar-offcanvas.component.css.map */"] });
var SidebarOffcanvasComponent = _SidebarOffcanvasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarOffcanvasComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar-offcanvas", imports: [
      CommonModule,
      MenuOptionComponent,
      VersionComponent
    ], template: `<button class="btn toggler btn-primary scale-025 m-1 p-0 px-2 shadow-sm d-lg-none" type="button"
  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <i class="bi bi-list fs-4 fw-bold"></i>
</button>
<div class="offcanvas offcanvas-size-sm view-height offcanvas-start bg-primary text-bg-primary" tabindex="-1"
  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="container-fluid">
    <div class="row">
      <div class="col px-2 text-end">
        <button type="button" class="btn scale-025" data-bs-dismiss="offcanvas" aria-label="Close">
          <i class="bi bi-x-lg text-light shadow fw-bold"></i>
        </button>
      </div>
    </div>
    <img [src]="logo_url" class="img-fluid">
    <div class="text-end">
      <app-version></app-version>
    </div>
  </div>
  <div class="offcanvas-body">
    <div class="list-group list-group-flush">
      @for (option of menuOptions; track option) {
      @if (hasPermiso(option.permiso)) {
      <app-menu-option [menu_option]="option"></app-menu-option>
      }
      }

      <p class="m-0 px-3 text-center mt-5 text-bold scale-1 pointer text-white">
        <i class="bi bi-box-arrow-in-left"></i>
        <span class="p-2 pb-5 animate__animated logout" (click)="sign_out()">
          Cerrar sesi\xF3n
        </span>
      </p>
    </div>
    <div class="col-12 mt-5 text-center">
      <app-version></app-version>
    </div>
  </div>
</div>
<div class="row p-0 m-0">
  <div class="col-auto p-0 m-0">
    <div class="col-auto bg-primary p-2 big-menu d-none d-lg-block"
      [ngClass]="{'big-menu':!menuExpanded,'big-menu-expanded':menuExpanded}">
      <div class="list-group list-group-flush pointer" (mouseenter)="menuExpanded=true">
        <a
          class="list-group-item list-group-item-action bg-primary text-light border-none text-center image-container pointer">
          <img [src]="logo_url" alt="Almacenes" [ngClass]="{'logo-icon':!menuExpanded, 'logo-expanded':menuExpanded}">
          <div class="text-end">
            <app-version></app-version>
          </div>
        </a>
        @for (option of menuOptions; track option) {
        @if (hasPermiso(option.permiso)) {
        <app-menu-option [menu_option]="option" [showLabels]="false" icon_size="fs-5" label_size=""
          [menuExpanded]="menuExpanded" />
        }
        }
        <p class="m-0 px-3 text-center mt-5 text-bold scale-1 pointer text-white">
          <i class="bi bi-box-arrow-in-left fs-5"></i>
          <a class="p-2 pb-5 animate__animated logout" [class.animate__fadeIn]="menuExpanded" [hidden]="!menuExpanded"
            (click)="sign_out()">
            Cerrar sesi\xF3n
          </a>
        </p>
      </div>
      <div class="col-12 mt-5 text-center">
        <app-version></app-version>
      </div>
    </div>
  </div>
  <div class="col m-0 view-height bg">
    <div class="container-fluid p-0 position-relative z-1">
      <ng-content></ng-content>
    </div>
  </div>
</div>`, styles: ["/* src/app/shared/sidebar-offcanvas/sidebar-offcanvas.component.css */\n.toggler {\n  position: absolute;\n  z-index: 5;\n}\n.pointer {\n  cursor: pointer;\n}\n.offcanvas-size-xl {\n  --bs-offcanvas-width: min(95vw, 600px) !important;\n}\n.offcanvas-size-xxl {\n  --bs-offcanvas-width: min(95vw, 90vw) !important;\n}\n.offcanvas-size-md {\n  --bs-offcanvas-width: min(95vw, 400px) !important;\n}\n.offcanvas-size-sm {\n  --bs-offcanvas-width: min(95vw, 250px) !important;\n}\n.offcanvas-size-auto {\n  --bs-offcanvas-width: auto !important;\n}\n.bg {\n  background-image:\n    linear-gradient(\n      120deg,\n      #fdfbfb 0%,\n      #dbdcdd 100%);\n}\n.image-container {\n  height: 8.0rem;\n  width: 100%;\n}\n.logout {\n  --animate-delay: 500ms;\n}\n.view-height {\n  height: 100vh;\n  overflow-y: auto;\n}\n.big-menu {\n  height: 100vh !important;\n  width: 4.5rem;\n  overflow-y: auto;\n  transition: width 0.3s ease-in;\n}\n.big-menu-expanded {\n  height: 100vh !important;\n  width: 13rem;\n  overflow-y: auto;\n  transition: width 0.3s ease-out;\n}\n.logo-icon {\n  width: 1.8rem;\n  transition: width 0.3s ease-out;\n}\n.logo-expanded {\n  width: 9.4rem;\n  transition: width 0.3s ease-out;\n}\n/*# sourceMappingURL=sidebar-offcanvas.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: LocalStorageService }, { type: AuthService }, { type: VersionService }], { menuOptions: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarOffcanvasComponent, { className: "SidebarOffcanvasComponent", filePath: "src/app/shared/sidebar-offcanvas/sidebar-offcanvas.component.ts", lineNumber: 532 });
})();

export {
  SidebarOffcanvasComponent
};
//# sourceMappingURL=chunk-OZS5GHEH.js.map
