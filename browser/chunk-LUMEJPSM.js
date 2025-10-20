import {
  CotizadorComponent
} from "./chunk-CIA4DBXS.js";
import {
  CreditoFormComponent
} from "./chunk-MIMIC2UR.js";
import {
  ViewPeriodosComponent
} from "./chunk-X4LPBF5V.js";
import {
  ViewRelacionAbonosComponent
} from "./chunk-JF4XKC7P.js";
import {
  estadoCuenta
} from "./chunk-L6WZXWMU.js";
import "./chunk-CANKKCBN.js";
import {
  ViewRelacionConveniosComponent
} from "./chunk-B5NEAJIS.js";
import "./chunk-OZ75JDJE.js";
import {
  ViewResumenCreditoComponent
} from "./chunk-PHVA5LMX.js";
import "./chunk-DJKNR32H.js";
import {
  CollapsableComponent
} from "./chunk-VUVNDSSC.js";
import {
  SucursalService
} from "./chunk-CZBABI5D.js";
import "./chunk-LROCG2JY.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  FormApoyosComponent
} from "./chunk-YUICLCWZ.js";
import "./chunk-SIIGP4ES.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import {
  SolicitudApoyoService
} from "./chunk-OBCD5SW4.js";
import "./chunk-MLBICDWK.js";
import {
  SelectFieldComponent
} from "./chunk-XRNE7EBS.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import {
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgStyle
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  filter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/clientes/main/dashboard-clientes/header/header.component.ts
function HeaderComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " No ha realizado las comprobaciones para sus periodos. Dirijase a las oficinas para entregar sus facturas. ");
    \u0275\u0275elementEnd();
  }
}
var _HeaderComponent = class _HeaderComponent {
  ngOnChanges(changes) {
    if (changes["credito"] && this.credito && Array.isArray(this.credito.estado_cuenta?.periodos)) {
      const periodos = this.credito.estado_cuenta.periodos;
      this.periodosPagados = periodos.filter((p) => p.status === "PAGADO").length;
      this.periodosVigentes = periodos.filter((p) => p.status === "VIGENTE").length;
      this.periodosVencidos = periodos.filter((p) => p.status === "VENCIDO").length;
    }
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 45, vars: 10, consts: [[1, "header-menu-container", "shadow-sm", "rounded"], [1, "container-fluid", "bg-white", "py-3", "px-4", "border-bottom", "rounded"], [1, "row", "align-items-center", "gx-3"], [1, "col-auto"], [1, "fw-bold", "fs-5"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "href", "#", "role", "button", "aria-expanded", "false", 1, "btn", "btn-outline-secondary", "btn-sm", "dropdown-toggle"], [1, "dropdown-menu", "p-3", 2, "min-width", "400px"], [1, "mb-2"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], ["disabled", "", 1, "form-control", 3, "placeholder"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item"], [1, "col-auto", "ms-auto", "d-none", "d-xl-flex", "gap-2"], [1, "position-relative", "rounded-1", "text-success", "px-3", "mr-2", "fw-semibold", 2, "background-color", "#28a74656", "border", "3px solid #28A745"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-success"], [1, "position-relative", "rounded-1", "text-warning", "px-3", "mr-2", "fw-semibold", 2, "background-color", "#ffc10731", "border", "3px solid #FFC107"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-warning"], [1, "position-relative", "rounded-1", "text-danger", "px-3", "fw-semibold", 2, "background-color", "#dc35464b", "border", "3px solid #DC3545"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-danger"], ["role", "alert", 1, "alert", "alert-danger", "mt-4", "border-1", "border-danger", "text-danger"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
    \u0275\u0275text(5, "Estatus del cr\xE9dito activo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 5)(8, "a", 6);
    \u0275\u0275text(9, " Datos del cr\xE9dito activo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 7)(11, "li", 8)(12, "div", 9)(13, "span", 10);
    \u0275\u0275text(14, "ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li", 8)(17, "div", 9)(18, "span", 10);
    \u0275\u0275text(19, "Monto autorizado:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "li", 8)(22, "div", 9)(23, "span", 10);
    \u0275\u0275text(24, "Folio:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275element(27, "hr", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li")(29, "a", 13);
    \u0275\u0275text(30, "Consultar estado de cuenta");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "div", 14)(32, "div", 15);
    \u0275\u0275text(33, " Pagados ");
    \u0275\u0275elementStart(34, "span", 16);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 17);
    \u0275\u0275text(37, " Vigentes ");
    \u0275\u0275elementStart(38, "span", 18);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 19);
    \u0275\u0275text(41, " Vencidos ");
    \u0275\u0275elementStart(42, "span", 20);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275conditionalCreate(44, HeaderComponent_Conditional_44_Template, 2, 0, "div", 21);
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.credito == null ? null : ctx.credito.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.credito == null ? null : ctx.credito.monto_autorizado));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.credito == null ? null : ctx.credito.folio));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.periodosPagados, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.periodosVigentes, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.periodosVencidos, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.credito == null ? null : ctx.credito.credito_comprobaciones == null ? null : ctx.credito.credito_comprobaciones.length) === 0 ? 44 : -1);
  }
}, encapsulation: 2 });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [], template: '<!-- Contenedor para el menu del header -->\n<div class="header-menu-container shadow-sm rounded">\n\n  <!-- Contenedor para organizar el layout del navbar -->\n  <div class="container-fluid bg-white py-3 px-4 border-bottom rounded">\n    <div class="row align-items-center gx-3">\n\n      <!-- Titulo -->\n      <div class="col-auto">\n        <span class="fw-bold fs-5">Estatus del cr\xE9dito activo</span>\n      </div>\n\n      <!-- Dropdown -->\n      <div class="col-auto">\n        <div class="dropdown">\n          <a class="btn btn-outline-secondary btn-sm dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">\n            Datos del cr\xE9dito activo\n          </a>\n          <ul class="dropdown-menu p-3" style="min-width: 400px;">\n            <li class="mb-2">\n              <div class="input-group input-group-sm">\n                <span class="input-group-text">ID:</span>\n                <input class="form-control" placeholder={{credito?.id}} disabled>\n              </div>\n            </li>\n            <li class="mb-2">\n              <div class="input-group input-group-sm">\n                <span class="input-group-text">Monto autorizado:</span>\n                <input class="form-control" placeholder={{credito?.monto_autorizado}} disabled>\n              </div>\n            </li>\n            <li class="mb-2">\n              <div class="input-group input-group-sm">\n                <span class="input-group-text">Folio:</span>\n                <input class="form-control" placeholder={{credito?.folio}} disabled>\n              </div>\n            </li>\n            <li><hr class="dropdown-divider"></li>\n            <li><a class="dropdown-item" href="#">Consultar estado de cuenta</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <!-- Status badges -->\n      <div class="col-auto ms-auto d-none d-xl-flex gap-2">\n\n        <div class="position-relative rounded-1 text-success px-3 mr-2 fw-semibold" style="background-color: #28a74656; border: 3px solid #28A745;">\n          Pagados\n          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">\n            {{periodosPagados}}\n          </span>\n        </div>\n\n        <div class="position-relative rounded-1 text-warning px-3 mr-2 fw-semibold" style="background-color: #ffc10731; border: 3px solid #FFC107;">\n          Vigentes\n          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">\n            {{periodosVigentes}}\n          </span>\n        </div>\n\n        <div class="position-relative rounded-1 text-danger px-3 fw-semibold" style="background-color: #dc35464b; border: 3px solid #DC3545;">\n          Vencidos\n          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">\n            {{periodosVencidos}}\n          </span>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Mensajes al inicio del dashboard -->\n@if (this.credito?.credito_comprobaciones?.length === 0) {\n  <div class="alert alert-danger mt-4 border-1 border-danger text-danger" role="alert">\n    No ha realizado las comprobaciones para sus periodos. Dirijase a las oficinas para entregar sus facturas.\n  </div>\n}\n' }]
  }], null, { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/clientes/main/dashboard-clientes/header/header.component.ts", lineNumber: 11 });
})();

// src/app/clientes/main/dashboard-clientes/pagos-pendientes/pagos-pendientes.component.ts
var _c0 = (a0) => ({ color: a0 });
function PagosPendientesComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 11);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const periodo_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(periodo_r1.no);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(25, _c0, periodo_r1.estado === "PAGADO" ? "green" : periodo_r1.estado === "VIGENTE" ? "orange" : periodo_r1.estado === "VENCIDO" ? "red" : "black"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", periodo_r1.estado, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, periodo_r1.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, periodo_r1.saldo_insoluto));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, periodo_r1.pago_programado_total));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, periodo_r1.pago_total));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, periodo_r1.saldo_vencido));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, periodo_r1.moratorio));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 23, periodo_r1.saldo_total));
  }
}
var _PagosPendientesComponent = class _PagosPendientesComponent {
  constructor() {
    this.periodos = [];
  }
  ngOnChanges(changes) {
    if (changes["credito"] && this.credito?.estado_cuenta?.periodos) {
      const rawPeriodos = this.credito.estado_cuenta.periodos;
      const ascending = [...rawPeriodos].sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
      const index = ascending.findIndex((p) => p.status.toUpperCase() === "VIGENTE");
      const cutoff = index !== -1 ? index + 1 : ascending.length;
      const limited = ascending.slice(0, cutoff);
      const descending = limited.reverse();
      const total = descending.length;
      this.periodos = descending.map((p, idx) => ({
        no: total - idx,
        // Descending number
        estado: p.status,
        fecha: p.fecha,
        saldo_insoluto: p.saldo_insoluto,
        pago_programado_total: p.pago_programado_total,
        pago_total: p.pago_total,
        saldo_vencido: p.saldo_vencido,
        moratorio: p.moratorio,
        saldo_total: p.saldo_total
      }));
    }
  }
};
_PagosPendientesComponent.\u0275fac = function PagosPendientesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagosPendientesComponent)();
};
_PagosPendientesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagosPendientesComponent, selectors: [["app-pagos-pendientes"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 36, vars: 1, consts: [[1, "pagos-pendientes-container", "shadow-sm", "rounded", "animate__animated", "animate__fadeInLeft"], [1, "py-3", "px-4", "bg-light", "rounded-top", "text-center"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-clock-history", "me-2"], [1, "small", "mb-0"], [1, "table-responsive"], [1, "container-fluid", "bg-white", 2, "height", "300px", "overflow", "auto"], [1, "table-grid"], [1, "grid-header", "row", "g-0", "py-2", "px-3", "border-bottom", "fw-semibold", "small", "bg-light"], [1, "col-md-1"], [1, "col-md-2", "text-end"], [1, "col-md-1", "text-end"], [1, "grid-row", "row", "g-0", "align-items-center", "py-3", "px-3", "border-bottom-hover", 2, "font-size", "0.9rem"], [1, "py-2", "px-4", "bg-light", "rounded-bottom", "border-top"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"], [1, "col-md-1", "text-primary"], [1, "col-md-1", "fw-semibold", 3, "ngStyle"]], template: function PagosPendientesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Historial de pagos del cr\xE9dito ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Consulte los periodos del credito hasta el proximo pago vigente.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10);
    \u0275\u0275text(13, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275text(17, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 11);
    \u0275\u0275text(19, "Saldo insoluto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11);
    \u0275\u0275text(21, "Pago programado total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275text(23, "Pago total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 12);
    \u0275\u0275text(25, "Saldo vencido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 12);
    \u0275\u0275text(27, "Moratorio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 11);
    \u0275\u0275text(29, "Saldo total");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(30, PagosPendientesComponent_For_31_Template, 26, 27, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 14)(33, "div", 15)(34, "span", 16);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(30);
    \u0275\u0275repeater(ctx.periodos);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Ultimo pago programdo para el ", "12/11/2025");
  }
}, dependencies: [
  CurrencyPipe,
  DatePipe,
  NgStyle
], styles: ["\n\n.grid-row[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  z-index: 1;\n}\n.grid-row[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n}\n.border-bottom-hover[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9ecef;\n}\n.badge-pagado[_ngcontent-%COMP%] {\n  background-color: #28a74656;\n  border: 3px solid #28A745;\n  color: #28A745;\n}\n.badge-vigente[_ngcontent-%COMP%] {\n  background-color: #ffc10731;\n  border: 3px solid #FFC107;\n  color: #FFC107;\n}\n.badge-vencido[_ngcontent-%COMP%] {\n  background-color: #dc35464b;\n  border: 3px solid #DC3545;\n  color: #DC3545;\n}\n.badge-box[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.25rem;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=pagos-pendientes.component.css.map */"] });
var PagosPendientesComponent = _PagosPendientesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagosPendientesComponent, [{
    type: Component,
    args: [{ selector: "app-pagos-pendientes", imports: [
      CurrencyPipe,
      DatePipe,
      NgStyle
    ], template: `<!-- Carta de pagos pendientes por liberar -->
<div class="pagos-pendientes-container shadow-sm rounded animate__animated animate__fadeInLeft">

  <!-- Header de la carta -->
  <div class="py-3 px-4 bg-light rounded-top text-center">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <h2 class="h5 mb-0 text-primary fw-semibold">
        <i class="bi bi-clock-history me-2"></i>Historial de pagos del cr\xE9dito
      </h2>
      <p class="small mb-0">Consulte los periodos del credito hasta el proximo pago vigente.</p>
    </div>
  </div>

  <!-- Tabla dinamica -->
  <div class="table-responsive">
    <div class="container-fluid bg-white" style="height: 300px; overflow: auto;">
      <div class="table-grid">

        <!-- Header de la tabla -->
        <div class="grid-header row g-0 py-2 px-3 border-bottom fw-semibold small bg-light">
          <div class="col-md-1">No.</div>
          <div class="col-md-1">Estado</div>
          <div class="col-md-1">Fecha</div>
          <div class="col-md-2 text-end">Saldo insoluto</div>
          <div class="col-md-2 text-end">Pago programado total</div>
          <div class="col-md-1 text-end">Pago total</div>
          <div class="col-md-1 text-end">Saldo vencido</div>
          <div class="col-md-1 text-end">Moratorio</div>
          <div class="col-md-2 text-end">Saldo total</div>
        </div>

        <!-- Filas -->
        @for (periodo of periodos; track periodo) {
          <div
            class="grid-row row g-0 align-items-center py-3 px-3 border-bottom-hover"
            style="font-size: 0.9rem;"
            >
            <div class="col-md-1 text-primary">{{ periodo.no }}</div>
            <div
              class="col-md-1 fw-semibold"
          [ngStyle]="{
            color: periodo.estado === 'PAGADO' ? 'green' :
                  periodo.estado === 'VIGENTE' ? 'orange' :
                  periodo.estado === 'VENCIDO' ? 'red' : 'black'
          }"
              >
              {{ periodo.estado }}
            </div>
            <div class="col-md-1">{{ periodo.fecha | date: 'dd/MM/yyyy' }}</div>
            <div class="col-md-2 text-end">{{ periodo.saldo_insoluto | currency }}</div>
            <div class="col-md-2 text-end">{{ periodo.pago_programado_total | currency }}</div>
            <div class="col-md-1 text-end">{{ periodo.pago_total | currency }}</div>
            <div class="col-md-1 text-end">{{ periodo.saldo_vencido | currency }}</div>
            <div class="col-md-1 text-end">{{ periodo.moratorio | currency }}</div>
            <div class="col-md-2 text-end">{{ periodo.saldo_total | currency }}</div>
          </div>
        }
      </div>
    </div>
  </div>

  <!-- Pie de tabla -->
  <div class="py-2 px-4 bg-light rounded-bottom border-top">
    <div class="d-flex justify-content-between align-items-center">
      <span class="text-muted small">Ultimo pago programdo para el {{'12/11/2025'}}</span>
    </div>
  </div>
</div>
`, styles: ["/* src/app/clientes/main/dashboard-clientes/pagos-pendientes/pagos-pendientes.component.css */\n.grid-row {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  z-index: 1;\n}\n.grid-row:hover {\n  background-color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n}\n.border-bottom-hover {\n  border-bottom: 1px solid #e9ecef;\n}\n.badge-pagado {\n  background-color: #28a74656;\n  border: 3px solid #28A745;\n  color: #28A745;\n}\n.badge-vigente {\n  background-color: #ffc10731;\n  border: 3px solid #FFC107;\n  color: #FFC107;\n}\n.badge-vencido {\n  background-color: #dc35464b;\n  border: 3px solid #DC3545;\n  color: #DC3545;\n}\n.badge-box {\n  position: relative;\n  border-radius: 0.25rem;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=pagos-pendientes.component.css.map */\n"] }]
  }], null, { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagosPendientesComponent, { className: "PagosPendientesComponent", filePath: "src/app/clientes/main/dashboard-clientes/pagos-pendientes/pagos-pendientes.component.ts", lineNumber: 15 });
})();

// src/app/clientes/main/dashboard-clientes/proximo-pago/proximo-pago.component.ts
function ProximoPagoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h6", 11);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275text(3, "Resumen del \xDAltimo Per\xEDodo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "div", 16);
    \u0275\u0275element(8, "i", 17);
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, "Pago Programado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 19);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 14)(15, "div", 15)(16, "div", 16);
    \u0275\u0275element(17, "i", 20);
    \u0275\u0275elementStart(18, "span", 18);
    \u0275\u0275text(19, "Saldo Insoluto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "div", 16);
    \u0275\u0275element(26, "i", 22);
    \u0275\u0275elementStart(27, "span", 18);
    \u0275\u0275text(28, "Saldo Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "span", 23);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 14)(33, "div", 15)(34, "div", 16);
    \u0275\u0275element(35, "i", 24);
    \u0275\u0275elementStart(36, "span", 18);
    \u0275\u0275text(37, "Saldo Vencido");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 25);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 26)(42, "div", 15)(43, "div", 16);
    \u0275\u0275element(44, "i", 27);
    \u0275\u0275elementStart(45, "span", 18);
    \u0275\u0275text(46, "Estado Actual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "span", 28);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 11, ctx_r0.ultimoPeriodo.pago_programado_total));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 13, ctx_r0.ultimoPeriodo.saldo_insoluto));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 15, ctx_r0.ultimoPeriodo.saldo_total));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 17, ctx_r0.ultimoPeriodo.saldo_vencido));
    \u0275\u0275advance(8);
    \u0275\u0275classProp("bg-success", ctx_r0.ultimoPeriodo.status === "PAGADO")("bg-warning", ctx_r0.ultimoPeriodo.status === "PENDIENTE")("bg-danger", ctx_r0.ultimoPeriodo.status === "VENCIDO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.ultimoPeriodo.status, " ");
  }
}
function ProximoPagoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementStart(2, "h6", 30);
    \u0275\u0275text(3, "\xA1Excelente!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5, "No tiene mensualidades pendientes");
    \u0275\u0275elementEnd()();
  }
}
var _ProximoPagoComponent = class _ProximoPagoComponent {
  ngOnChanges(changes) {
    if (changes["credito"] && this.credito?.estado_cuenta?.periodo_vigente) {
      const periodo = this.credito.estado_cuenta.periodo_vigente;
      this.ultimoPeriodo = {
        pago_programado_total: periodo.pago_programado_total,
        saldo_insoluto: periodo.saldo_insoluto,
        saldo_total: periodo.saldo_total,
        saldo_vencido: periodo.saldo_vencido,
        status: periodo.status,
        fecha: periodo.fecha
      };
    }
  }
};
_ProximoPagoComponent.\u0275fac = function ProximoPagoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProximoPagoComponent)();
};
_ProximoPagoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProximoPagoComponent, selectors: [["app-proximo-pago"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 5, consts: [[1, "proximo-pago-container", "shadow-sm", "rounded", "animate__animated", "animate__fadeInRight"], [1, "py-3", "px-4", "bg-light", "rounded-top", "text-center", "border-bottom"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-credit-card", "me-2"], [1, "small", "mb-0"], [1, "p-4", "bg-light", "rounded", "border"], [1, "text-center", "py-5", "bg-light", "rounded", "border"], [1, "py-2", "px-4", "bg-light", "rounded-bottom", "border-top"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"], [1, "text-primary", "mb-3", "d-flex", "align-items-center"], [1, "bi", "bi-card-list", "me-2"], [1, "row", "g-3"], [1, "col-md-6"], [1, "d-flex", "justify-content-between", "align-items-center", "p-3", "bg-white", "rounded", "border"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-calendar-check", "text-primary", "me-2"], [1, "text-muted"], [1, "fw-bold", "text-primary"], [1, "bi", "bi-wallet2", "text-info", "me-2"], [1, "fw-bold", "text-info"], [1, "bi", "bi-cash-stack", "text-success", "me-2"], [1, "fw-bold", "text-success"], [1, "bi", "bi-exclamation-triangle", "text-warning", "me-2"], [1, "fw-bold", "text-warning"], [1, "col-12"], [1, "bi", "bi-info-circle", "text-secondary", "me-2"], [1, "badge"], [1, "bi", "bi-check-circle-fill", "text-success", "fs-1", "mb-3", "d-block"], [1, "text-muted", "mb-2"], [1, "text-muted", "mb-0"]], template: function ProximoPagoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Proximo pago vigente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Revise los datos del ultimo periodo del cr\xE9dito.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, ProximoPagoComponent_Conditional_8_Template, 49, 19, "div", 6)(9, ProximoPagoComponent_Conditional_9_Template, 6, 0, "div", 7);
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "span", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.ultimoPeriodo ? 8 : 9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" La fecha de este periodo es del ", \u0275\u0275pipeBind2(14, 2, ctx.ultimoPeriodo == null ? null : ctx.ultimoPeriodo.fecha, "dd/MM/yyyy"), " ");
  }
}, dependencies: [CurrencyPipe, DatePipe], encapsulation: 2 });
var ProximoPagoComponent = _ProximoPagoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProximoPagoComponent, [{
    type: Component,
    args: [{ selector: "app-proximo-pago", imports: [CurrencyPipe, DatePipe], template: `<!-- Carta de proximo pago -->
<div class="proximo-pago-container shadow-sm rounded animate__animated animate__fadeInRight">

  <!-- Header de la carta -->
  <div class="py-3 px-4 bg-light rounded-top text-center border-bottom">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <h2 class="h5 mb-0 text-primary fw-semibold">
        <i class="bi bi-credit-card me-2"></i>Proximo pago vigente
      </h2>
      <p class="small mb-0">Revise los datos del ultimo periodo del cr\xE9dito.</p>
    </div>
  </div>

  @if (ultimoPeriodo) {
  <div class="p-4 bg-light rounded border">
    <h6 class="text-primary mb-3 d-flex align-items-center">
      <i class="bi bi-card-list me-2"></i>Resumen del \xDAltimo Per\xEDodo
    </h6>

    <div class="row g-3">
      <div class="col-md-6">
        <div class="d-flex justify-content-between align-items-center p-3 bg-white rounded border">
          <div class="d-flex align-items-center">
            <i class="bi bi-calendar-check text-primary me-2"></i>
            <span class="text-muted">Pago Programado</span>
          </div>
          <span class="fw-bold text-primary">{{ultimoPeriodo.pago_programado_total | currency}}</span>
        </div>
      </div>

      <div class="col-md-6">
        <div class="d-flex justify-content-between align-items-center p-3 bg-white rounded border">
          <div class="d-flex align-items-center">
            <i class="bi bi-wallet2 text-info me-2"></i>
            <span class="text-muted">Saldo Insoluto</span>
          </div>
          <span class="fw-bold text-info">{{ultimoPeriodo.saldo_insoluto | currency}}</span>
        </div>
      </div>

      <div class="col-md-6">
        <div class="d-flex justify-content-between align-items-center p-3 bg-white rounded border">
          <div class="d-flex align-items-center">
            <i class="bi bi-cash-stack text-success me-2"></i>
            <span class="text-muted">Saldo Total</span>
          </div>
          <span class="fw-bold text-success">{{ultimoPeriodo.saldo_total | currency}}</span>
        </div>
      </div>

      <div class="col-md-6">
        <div class="d-flex justify-content-between align-items-center p-3 bg-white rounded border">
          <div class="d-flex align-items-center">
            <i class="bi bi-exclamation-triangle text-warning me-2"></i>
            <span class="text-muted">Saldo Vencido</span>
          </div>
          <span class="fw-bold text-warning">{{ultimoPeriodo.saldo_vencido | currency}}</span>
        </div>
      </div>

      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center p-3 bg-white rounded border">
          <div class="d-flex align-items-center">
            <i class="bi bi-info-circle text-secondary me-2"></i>
            <span class="text-muted">Estado Actual</span>
          </div>
          <span class="badge" [class.bg-success]="ultimoPeriodo.status === 'PAGADO'"
            [class.bg-warning]="ultimoPeriodo.status === 'PENDIENTE'"
            [class.bg-danger]="ultimoPeriodo.status === 'VENCIDO'">
            {{ultimoPeriodo.status}}
          </span>
        </div>
      </div>
    </div>
  </div>
  } @else {
  <div class="text-center py-5 bg-light rounded border">
    <i class="bi bi-check-circle-fill text-success fs-1 mb-3 d-block"></i>
    <h6 class="text-muted mb-2">\xA1Excelente!</h6>
    <p class="text-muted mb-0">No tiene mensualidades pendientes</p>
  </div>
  }

  <!-- Pie de tabla -->
  <div class="py-2 px-4 bg-light rounded-bottom border-top">
    <div class="d-flex justify-content-between align-items-center">
      <span class="text-muted small">
        La fecha de este periodo es del {{ ultimoPeriodo?.fecha | date: 'dd/MM/yyyy' }}
      </span>
    </div>
  </div>
</div>` }]
  }], null, { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProximoPagoComponent, { className: "ProximoPagoComponent", filePath: "src/app/clientes/main/dashboard-clientes/proximo-pago/proximo-pago.component.ts", lineNumber: 11 });
})();

// src/app/clientes/main/dashboard-clientes/ultimos-abonos/ultimos-abonos.component.ts
function UltimosAbonosComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 18)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 11)(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 13)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const abono_r1 = ctx.$implicit;
    const \u0275$index_38_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.abonos.length - \u0275$index_38_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(abono_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 5, abono_r1.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 8, abono_r1.monto));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(abono_r1.pagos_cargas_masiva_id);
  }
}
var _UltimosAbonosComponent = class _UltimosAbonosComponent {
  constructor() {
    this.abonos = [];
  }
  ngOnChanges(changes) {
    if (changes["credito"] && this.credito && Array.isArray(this.credito.estado_cuenta?.abonos_distribuidos)) {
      const rawAbonos = this.credito.estado_cuenta.abonos_distribuidos;
      this.abonos = rawAbonos.map((item) => item.abono).filter((abono) => !!abono).sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
      this.ultimaFechaAbono = this.abonos.length > 0 ? this.abonos[0].fecha : void 0;
    }
  }
};
_UltimosAbonosComponent.\u0275fac = function UltimosAbonosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UltimosAbonosComponent)();
};
_UltimosAbonosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UltimosAbonosComponent, selectors: [["app-abonos-realizados"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 29, vars: 4, consts: [[1, "abonos-container", "shadow-sm", "rounded", "animate__animated", "animate__fadeInLeft"], [1, "py-3", "px-4", "bg-light", "rounded-top", "text-center"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-cash", "me-2"], [1, "small", "mb-0"], [1, "table-responsive"], [1, "container-fluid", "bg-white", 2, "height", "250px", "overflow", "auto"], [1, "table-grid"], [1, "grid-header", "row", "g-0", "py-2", "px-3", "border-bottom", "fw-semibold", "small", "bg-light"], [1, "col-md-1"], [1, "col-md-2"], [1, "col-md-3"], [1, "col-md-3", "text-end"], [1, "grid-row", "row", "g-0", "align-items-center", "py-3", "px-3", "border-bottom-hover"], [1, "py-2", "px-4", "bg-light", "rounded-bottom", "border-top"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"], [1, "col-md-1", "text-primary"], [1, "badge", "bg-primary", "bg-opacity-10", "text-light", "p-2"]], template: function UltimosAbonosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Abonos realizados ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Consulte los abonos realizados para este credito hasta ahora.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10);
    \u0275\u0275text(13, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275text(15, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275text(17, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13);
    \u0275\u0275text(19, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275text(21, "Carga masiva");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(22, UltimosAbonosComponent_For_23_Template, 18, 10, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 15)(25, "div", 16)(26, "span", 17);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(22);
    \u0275\u0275repeater(ctx.abonos);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Ultimo abono realizado el ", \u0275\u0275pipeBind2(28, 1, ctx.ultimaFechaAbono, "dd/MM/yyyy"));
  }
}, dependencies: [CurrencyPipe, DatePipe], styles: ["\n\n.grid-row[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  z-index: 1;\n}\n.grid-row[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n}\n.border-bottom-hover[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9ecef;\n}\n/*# sourceMappingURL=ultimos-abonos.component.css.map */"] });
var UltimosAbonosComponent = _UltimosAbonosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UltimosAbonosComponent, [{
    type: Component,
    args: [{ selector: "app-abonos-realizados", imports: [CurrencyPipe, DatePipe], template: `<!-- Carta de ultimos abonos -->
<div class="abonos-container shadow-sm rounded animate__animated animate__fadeInLeft">

  <!-- Header de la carta -->
  <div class="py-3 px-4 bg-light rounded-top text-center">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <h2 class="h5 mb-0 text-primary fw-semibold">
        <i class="bi bi-cash me-2"></i>Abonos realizados
      </h2>
      <p class="small mb-0">Consulte los abonos realizados para este credito hasta ahora.</p>
    </div>
  </div>

  <!-- Tabla de prueba con datos ficticios -->
  <div class="table-responsive">
    <div class="container-fluid bg-white" style="height: 250px; overflow: auto;">
      <div class="table-grid">

        <!-- Encabezados -->
        <div class="grid-header row g-0 py-2 px-3 border-bottom fw-semibold small bg-light">
          <div class="col-md-1">No.</div>
          <div class="col-md-2">ID</div>
          <div class="col-md-3">Fecha</div>
          <div class="col-md-3 text-end">Monto</div>
          <div class="col-md-3">Carga masiva</div>
        </div>

        <!-- Filas dinamicas -->
        @for (abono of abonos; track abono; let i = $index) {
          <div class="grid-row row g-0 align-items-center py-3 px-3 border-bottom-hover">
            <div class="col-md-1 text-primary">
              <span>{{ abonos.length - i }}</span>
            </div>
            <div class="col-md-2">
              <span class="badge bg-primary bg-opacity-10 text-light p-2">{{ abono.id }}</span>
            </div>
            <div class="col-md-3">
              <span>{{ abono.fecha | date: 'dd/MM/yyyy' }}</span>
            </div>
            <div class="col-md-3 text-end">
              <span>{{ abono.monto | currency }}</span>
            </div>
            <div class="col-md-3">
              <span>{{ abono.pagos_cargas_masiva_id }}</span>
            </div>
          </div>
        }

      </div>
    </div>
  </div>

  <!-- Pie de tabla -->
  <div class="py-2 px-4 bg-light rounded-bottom border-top">
    <div class="d-flex justify-content-between align-items-center">
      <span class="text-muted small">Ultimo abono realizado el {{ultimaFechaAbono | date: 'dd/MM/yyyy'}}</span>
    </div>
  </div>
</div>
`, styles: ["/* src/app/clientes/main/dashboard-clientes/ultimos-abonos/ultimos-abonos.component.css */\n.grid-row {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  z-index: 1;\n}\n.grid-row:hover {\n  background-color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n}\n.border-bottom-hover {\n  border-bottom: 1px solid #e9ecef;\n}\n/*# sourceMappingURL=ultimos-abonos.component.css.map */\n"] }]
  }], null, { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UltimosAbonosComponent, { className: "UltimosAbonosComponent", filePath: "src/app/clientes/main/dashboard-clientes/ultimos-abonos/ultimos-abonos.component.ts", lineNumber: 12 });
})();

// src/app/clientes/main/dashboard-clientes/dashboard-clientes.component.ts
var _DashboardClientesComponent = class _DashboardClientesComponent {
  constructor(storage, creditoController, utilsEstadoCuenta) {
    this.storage = storage;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.creditosPagos = [];
    this.creditoComprobaciones = [];
    this.abonos = [];
    this.relations = [
      "estadoCuenta",
      "creditosPagos",
      "convenios.conveniosPagos",
      "abonos",
      "productosFinancieros",
      "creditoComprobaciones"
    ];
  }
  ngOnInit() {
    this.getDataFromCreditoActivo();
  }
  getDataFromCreditoActivo() {
    return __async(this, null, function* () {
      const login = this.storage.getClienteUser();
      this.creditos = yield this.creditoController.all([
        {
          key: "cliente_id",
          operator: "=",
          value: login?.id ?? null
        },
        {
          key: "estado",
          operator: "=",
          value: "ACTIVO"
        }
      ], this.relations, {});
      const creditosConPagos = this.creditos.filter((credito) => Array.isArray(credito.creditos_pagos) && credito.creditos_pagos.length > 0);
      if (creditosConPagos.length > 0) {
        const ultimoCredito = creditosConPagos[creditosConPagos.length - 1];
        ultimoCredito.estado_cuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(ultimoCredito);
        this.ultimoCreditoActivo = ultimoCredito;
        this.creditosPagos = ultimoCredito.creditos_pagos ?? [];
        this.creditoComprobaciones = ultimoCredito.credito_comprobaciones ?? [];
        this.abonos = ultimoCredito.abonos ?? [];
        console.log("Comprobaciones:", this.creditoComprobaciones);
      } else {
        this.creditos = [];
        console.error("No hay creditos activos con pagos");
      }
    });
  }
};
_DashboardClientesComponent.\u0275fac = function DashboardClientesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardClientesComponent)(\u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsEstadoCuentaService));
};
_DashboardClientesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardClientesComponent, selectors: [["app-dashboard-clientes"]], decls: 14, vars: 4, consts: [[1, "container-xxl", "text-center", "p-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "bg-transparent", "mb-3"], [1, "breadcrumb-item", "text-primary", "p-0"], ["aria-current", "page", 1, "breadcrumb-item", "active", "text-dark"], [3, "credito"], [1, "row", "justify-content-between"], [1, "col-12", "col-md-6", "py-3"]], template: function DashboardClientesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "ol", 2)(3, "li", 3);
    \u0275\u0275text(4, " Fondos BC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 4);
    \u0275\u0275text(6, " Inicio ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "app-header", 5);
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
    \u0275\u0275element(10, "app-abonos-realizados", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275element(12, "app-proximo-pago", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "app-pagos-pendientes", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("credito", ctx.ultimoCreditoActivo);
    \u0275\u0275advance(3);
    \u0275\u0275property("credito", ctx.ultimoCreditoActivo);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx.ultimoCreditoActivo);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx.ultimoCreditoActivo);
  }
}, dependencies: [
  HeaderComponent,
  PagosPendientesComponent,
  ProximoPagoComponent,
  UltimosAbonosComponent
], encapsulation: 2 });
var DashboardClientesComponent = _DashboardClientesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardClientesComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-clientes", imports: [
      HeaderComponent,
      PagosPendientesComponent,
      ProximoPagoComponent,
      UltimosAbonosComponent
    ], template: '<div class="container-xxl text-center p-3">\n\n  <!-- Breadcrumb -->\n  <nav aria-label="breadcrumb">\n    <ol class="breadcrumb bg-transparent mb-3">\n      <li class="breadcrumb-item text-primary p-0">\n        Fondos BC\n      </li>\n      <li class="breadcrumb-item active text-dark" aria-current="page">\n        Inicio\n      </li>\n    </ol>\n  </nav>\n\n  <!-- Header del dashboard -->\n  <app-header\n    [credito]="ultimoCreditoActivo"\n  ></app-header>\n\n  <div class="row justify-content-between">\n\n    <!-- Abonos realizados para el credito -->\n    <div class="col-12 col-md-6 py-3">\n      <app-abonos-realizados\n        [credito]="ultimoCreditoActivo"\n      ></app-abonos-realizados>\n    </div>\n\n    <!-- Datos del proximo pago -->\n    <div class="col-12 col-md-6 py-3">\n      <app-proximo-pago\n        [credito]="ultimoCreditoActivo"\n      ></app-proximo-pago>\n    </div>\n  </div>\n\n  <!-- Periodos hasta el primer periodo vigente -->\n  <app-pagos-pendientes\n    [credito]="ultimoCreditoActivo"\n  ></app-pagos-pendientes>\n\n</div>\n' }]
  }], () => [{ type: LocalStorageService }, { type: CreditoService }, { type: UtilsEstadoCuentaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardClientesComponent, { className: "DashboardClientesComponent", filePath: "src/app/clientes/main/dashboard-clientes/dashboard-clientes.component.ts", lineNumber: 24 });
})();

// src/app/clientes/main/cliente-perfil/sub-menu/sub-menu.component.ts
var _c02 = (a0, a1) => ({ "bg-primary text-white": a0, "text-dark bg-transparent": a1 });
var _SubMenuComponent = class _SubMenuComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.activeRoute = "";
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const current = this.router.url.split("/").pop();
      this.activeRoute = current || "";
    });
  }
  navigateTo(path) {
    this.router.navigate([path], { relativeTo: this.route });
  }
};
_SubMenuComponent.\u0275fac = function SubMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubMenuComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_SubMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubMenuComponent, selectors: [["app-sub-menu"]], decls: 23, vars: 16, consts: [[1, "sidebar-container", "shadow-sm", "rounded", "animate__animated", "animate__fadeInLeft"], [1, "py-3", "px-4", "bg-light", "rounded-top", "border-bottom"], [1, "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "h6", "mb-0", "text-primary", "fw-semibold"], [1, "d-flex", "flex-column", "p-3", "bg-white"], [1, "nav", "nav-pills", "flex-column", "mb-auto", "text-start"], [1, "nav-item"], [1, "nav-link", "text-start", "w-100", "border-0", 3, "click", "ngClass"], [1, "bi", "bi-house-door", "me-2"], [1, "bi", "bi-speedometer2", "me-2"], [1, "bi", "bi-table", "me-2"]], template: function SubMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
    \u0275\u0275text(4, " Informacion personal ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "button", 7);
    \u0275\u0275listener("click", function SubMenuComponent_Template_button_click_8_listener() {
      return ctx.navigateTo("change-pass");
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, " Cambiar contrase\xF1a ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li")(12, "button", 7);
    \u0275\u0275listener("click", function SubMenuComponent_Template_button_click_12_listener() {
      return ctx.navigateTo("datos-personales");
    });
    \u0275\u0275element(13, "i", 9);
    \u0275\u0275text(14, " Datos personales ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "button", 7);
    \u0275\u0275listener("click", function SubMenuComponent_Template_button_click_16_listener() {
      return ctx.navigateTo("datos-fiscales");
    });
    \u0275\u0275element(17, "i", 9);
    \u0275\u0275text(18, " Datos fiscales ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "button", 7);
    \u0275\u0275listener("click", function SubMenuComponent_Template_button_click_20_listener() {
      return ctx.navigateTo("datos-negocio");
    });
    \u0275\u0275element(21, "i", 10);
    \u0275\u0275text(22, " Datos del negocio ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c02, ctx.activeRoute === "change-pass", ctx.activeRoute !== "change-pass"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c02, ctx.activeRoute === "datos-personales", ctx.activeRoute !== "datos-personales"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c02, ctx.activeRoute === "datos-fiscales", ctx.activeRoute !== "datos-fiscales"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(13, _c02, ctx.activeRoute === "datos-negocio", ctx.activeRoute !== "datos-negocio"));
  }
}, dependencies: [NgClass], encapsulation: 2 });
var SubMenuComponent = _SubMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubMenuComponent, [{
    type: Component,
    args: [{ selector: "app-sub-menu", imports: [NgClass], template: `<div class="sidebar-container shadow-sm rounded animate__animated animate__fadeInLeft">

  <!-- Encabezado -->
  <div class="py-3 px-4 bg-light rounded-top border-bottom">
    <div class="d-flex flex-row align-items-center justify-content-between">
      <h2 class="h6 mb-0 text-primary fw-semibold">
        Informacion personal
      </h2>
    </div>
  </div>

  <div class="d-flex flex-column p-3 bg-white">
    <ul class="nav nav-pills flex-column mb-auto text-start">

      <li class="nav-item">
        <button
          (click)="navigateTo('change-pass')"
          class="nav-link text-start w-100 border-0"
          [ngClass]="{ 'bg-primary text-white': activeRoute === 'change-pass', 'text-dark bg-transparent': activeRoute !== 'change-pass' }"
        >
          <i class="bi bi-house-door me-2"></i> Cambiar contrase\xF1a
        </button>
      </li>

      <li>
        <button
          (click)="navigateTo('datos-personales')"
          class="nav-link text-start w-100 border-0"
          [ngClass]="{ 'bg-primary text-white': activeRoute === 'datos-personales', 'text-dark bg-transparent': activeRoute !== 'datos-personales' }"
        >
          <i class="bi bi-speedometer2 me-2"></i> Datos personales
        </button>
      </li>

      <li>
        <button
          (click)="navigateTo('datos-fiscales')"
          class="nav-link text-start w-100 border-0"
          [ngClass]="{ 'bg-primary text-white': activeRoute === 'datos-fiscales', 'text-dark bg-transparent': activeRoute !== 'datos-fiscales' }"
        >
          <i class="bi bi-speedometer2 me-2"></i> Datos fiscales
        </button>
      </li>

      <li>
        <button
          (click)="navigateTo('datos-negocio')"
          class="nav-link text-start w-100 border-0"
          [ngClass]="{ 'bg-primary text-white': activeRoute === 'datos-negocio', 'text-dark bg-transparent': activeRoute !== 'datos-negocio' }"
        >
          <i class="bi bi-table me-2"></i> Datos del negocio
        </button>
      </li>

    </ul>
  </div>

</div>
` }]
  }], () => [{ type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubMenuComponent, { className: "SubMenuComponent", filePath: "src/app/clientes/main/cliente-perfil/sub-menu/sub-menu.component.ts", lineNumber: 12 });
})();

// src/app/clientes/main/cliente-perfil/cliente-perfil.component.ts
var _ClientePerfilComponent = class _ClientePerfilComponent {
};
_ClientePerfilComponent.\u0275fac = function ClientePerfilComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClientePerfilComponent)();
};
_ClientePerfilComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientePerfilComponent, selectors: [["app-cliente-perfil"]], decls: 12, vars: 0, consts: [[1, "container-xxl", "text-center", "p-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "bg-transparent", "mb-3"], [1, "breadcrumb-item", "text-primary", "p-0"], ["aria-current", "page", 1, "breadcrumb-item", "active", "text-dark"], [1, "row", "justify-content-between"], [1, "col-3", "col-md-3", "py-3"], [1, "col-18", "col-md-9", "py-3"]], template: function ClientePerfilComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "ol", 2)(3, "li", 3);
    \u0275\u0275text(4, " Fondos BC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 4);
    \u0275\u0275text(6, " Mi perfil ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
    \u0275\u0275element(9, "app-sub-menu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275element(11, "router-outlet");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [
  SubMenuComponent,
  RouterOutlet
], encapsulation: 2 });
var ClientePerfilComponent = _ClientePerfilComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientePerfilComponent, [{
    type: Component,
    args: [{ selector: "app-cliente-perfil", imports: [
      SubMenuComponent,
      RouterOutlet
    ], template: '<div class="container-xxl text-center p-3">\n\n  <!-- Breadcrumb -->\n  <nav aria-label="breadcrumb">\n    <ol class="breadcrumb bg-transparent mb-3">\n      <li class="breadcrumb-item text-primary p-0">\n        Fondos BC\n      </li>\n      <li class="breadcrumb-item active text-dark" aria-current="page">\n        Mi perfil\n      </li>\n    </ol>\n  </nav>\n\n  <div class="row justify-content-between">\n\n    <!-- Sub menu para navegar en el perfil -->\n    <div class="col-3 col-md-3 py-3">\n      <app-sub-menu></app-sub-menu>\n    </div>\n\n    <div class="col-18 col-md-9 py-3">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientePerfilComponent, { className: "ClientePerfilComponent", filePath: "src/app/clientes/main/cliente-perfil/cliente-perfil.component.ts", lineNumber: 14 });
})();

// src/app/clientes/shared/cliente-creditos/cliente-creditos.component.ts
function ClienteCreditosComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, " No tienes cr\xE9ditos registrados. ");
    \u0275\u0275elementEnd();
  }
}
function ClienteCreditosComponent_Conditional_8_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 14)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15)(8, "div", 20);
    \u0275\u0275element(9, "span", 21);
    \u0275\u0275elementStart(10, "span", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 14)(13, "span", 19);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16)(17, "div", 23)(18, "span", 24);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 25);
    \u0275\u0275listener("click", function ClienteCreditosComponent_Conditional_8_For_15_Template_button_click_21_listener() {
      const credito_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.creditoSelected.emit(credito_r2));
    });
    \u0275\u0275element(22, "i", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const credito_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(credito_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(credito_r2.folio);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.checkEstado(credito_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.estado);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 7, credito_r2.monto_autorizado ?? 0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 9, credito_r2.estado_cuenta == null ? null : credito_r2.estado_cuenta.total_a_liquidar));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.checkDeleted(credito_r2) === "ELIMINADO");
  }
}
function ClienteCreditosComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14);
    \u0275\u0275text(5, "ID Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7, "Folio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275text(11, "Monto Autorizado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 16);
    \u0275\u0275text(13, "Total a Liquidar");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(14, ClienteCreditosComponent_Conditional_8_For_15_Template, 23, 11, "div", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.creditos);
  }
}
function ClienteCreditosComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2, "Ver m\xE1s ");
    \u0275\u0275elementEnd();
  }
}
var _ClienteCreditosComponent = class _ClienteCreditosComponent {
  constructor(creditoController, storage, utils, utilsEstadoCuenta) {
    this.creditoController = creditoController;
    this.storage = storage;
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.creditos = [];
    this.estado = "";
    this.creditoSelected = new EventEmitter();
    this.relations = [
      "estadoCuenta",
      "creditosPagos",
      "convenios.conveniosPagos",
      "abonos",
      "datosPersonaFisica.datosPersonales",
      "datosPersonasMorales.negocios",
      "datosPersonaFisica.negocios",
      "datosPersonaFisica.datosPersonales.ciudades",
      "datosPersonasMorales.ciudades",
      "productosFinancieros.plazos",
      "inversionesProgramas"
    ];
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    return __async(this, null, function* () {
      const login = this.storage.getClienteUser();
      this.creditos = yield this.creditoController.all({}, this.relations, {
        busqueda_avanzada: JSON.stringify([
          {
            opWhere: true,
            relation: "datosPersonaFisica.datosPersonales",
            conditionals: [],
            andConditionals: [
              ["email", "LIKE", login?.email]
            ]
          },
          {
            opWhere: true,
            relation: "datosPersonasMorales.representanteLegal",
            conditionals: [],
            andConditionals: [
              ["email", "LIKE", login?.email]
            ]
          }
        ])
      });
      this.creditos.forEach((credito) => credito.estado_cuenta = this.utilsEstadoCuenta.getEstadoCuenta(credito));
    });
  }
  /**
   * Funcion para verificar si un credito ya cuenta con todas las comprobaciones realizadas y si la suma de los montos es igual al monto autorizado del credito
   * @param credito
   * @returns Booleano para saber si tiene todas sus comprobaciones o no
   */
  checkComprobaciones(credito) {
    const comprobaciones = credito.credito_comprobaciones;
    if (!comprobaciones || comprobaciones.length === 0)
      return false;
    const totalComprobado = comprobaciones.reduce((sum, comprobacion) => {
      return sum + (comprobacion.monto || 0);
    }, 0);
    if (totalComprobado !== credito.monto_autorizado)
      return false;
    return true;
  }
  /**
   * Funcion para verificar el estado de un credito y modificar los estilos en la tabla
   * @param credito
   * @returns
   */
  checkEstado(credito) {
    const comprobaciones = this.checkComprobaciones(credito);
    if (credito.estado === "FINALIZADO") {
      this.estado = "FINALIZADO";
      return { "bg-success": "FINALIZADO" };
    }
    if (credito.estado === "ACTIVO" && this.estadoRevision(credito) === "Liberado" && !comprobaciones) {
      this.estado = "SALDADO";
      return { "bg-success": "SALDADO" };
    }
    if (credito.estado === "ACTIVO" && this.estadoRevision(credito) === "Pendiente" && !credito.deleted_at) {
      this.estado = "ACTIVO";
      return { "bg-success": "ACTIVO" };
    }
    if (credito.estado === "CANCELADO") {
      this.estado = "CANCELADO";
      return { "bg-warning": "CANCELADO" };
    }
    if (credito.estado === "RECHAZADO") {
      this.estado = "RECHAZADO";
      return { "bg-danger": "RECHAZADO" };
    }
    if (credito.deleted_at) {
      this.estado = "ELIMINADO";
      return { "bg-danger": "ELIMINADO" };
    }
    return;
  }
  estadoRevision(credito) {
    if (credito.liberado_fecha)
      return "Liberado";
    if (credito.carta_instruccion_url)
      return "Carta de instrucci\xF3n enviada";
    if (credito.dictaminado_fecha)
      return "Dictaminado";
    if (credito.autorizado_fecha)
      return "Autorizado";
    return "Pendiente";
  }
  checkDeleted(credito) {
    if (credito.deleted_at) {
      return "ELIMINADO";
    }
    return "";
  }
};
_ClienteCreditosComponent.\u0275fac = function ClienteCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClienteCreditosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService));
};
_ClienteCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClienteCreditosComponent, selectors: [["app-cliente-creditos"]], outputs: { creditoSelected: "creditoSelected" }, decls: 14, vars: 4, consts: [[1, "credit-table-container", "p-4", "rounded-4", "shadow-sm", "bg-white"], [1, "table-header", "py-3", "px-4", "bg-light", "rounded-top"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-credit-card", "me-2"], [1, "text-muted", "small", "mb-0"], [1, "p-5", "text-center"], [1, "table-responsive"], [1, "table-footer", "py-2", "px-4", "bg-light", "rounded-bottom"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"], [1, "btn", "btn-sm", "btn-link", "text-primary"], [1, "container-fluid"], [1, "table-grid"], [1, "grid-header", "row", "g-0", "py-2", "px-3", "border-bottom", "fw-semibold", "small"], [1, "col-md-2"], [1, "col-md-3"], [1, "col-md-3", "text-end"], [1, "grid-row", "row", "g-0", "align-items-center", "py-3", "px-3", "border-bottom-hover"], [1, "badge", "bg-primary", "bg-opacity-10", "text-light", "p-2"], [1, "text-dark"], [1, "d-flex", "align-items-center"], [1, "status-indicator", "me-2", 3, "ngClass"], [1, "text-capitalize"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "amount", "fw-bold", "me-2"], ["title", "Ver detalles del cr\xE9dito", 1, "btn", "btn-sm", "btn-outline-primary", "rounded-pill", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], [1, "bi", "bi-arrow-down-circle", "me-1"]], template: function ClienteCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275text(4, "Mis Cr\xE9ditos Activos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, "Revisa el estado de tus financiamientos");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, ClienteCreditosComponent_Conditional_7_Template, 2, 0, "p", 5);
    \u0275\u0275conditionalCreate(8, ClienteCreditosComponent_Conditional_8_Template, 16, 0, "div", 6);
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, ClienteCreditosComponent_Conditional_13_Template, 3, 0, "button", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx.creditos.length ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.creditos.length ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Mostrando ", ctx.creditos.length, " cr\xE9ditos");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.creditos.length > 5 ? 13 : -1);
  }
}, dependencies: [
  CurrencyPipe,
  NgClass
], styles: ["\n\n.credit-table-container[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.table-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.grid-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #6c757d;\n  font-size: 0.85rem;\n}\n.grid-row[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  z-index: 1;\n}\n.grid-row[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.amount[_ngcontent-%COMP%] {\n  color: #2a6f97;\n  font-size: 1.05rem;\n}\n.border-bottom-hover[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9ecef;\n}\n@media (max-width: 768px) {\n  .grid-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .grid-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 1rem;\n    margin-bottom: 1rem;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  }\n  .grid-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n  }\n  .grid-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #6c757d;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=cliente-creditos.component.css.map */"] });
var ClienteCreditosComponent = _ClienteCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClienteCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-cliente-creditos", imports: [
      CurrencyPipe,
      NgClass
    ], template: `<div class="credit-table-container p-4 rounded-4 shadow-sm bg-white">
  <!-- Encabezado -->
  <div class="table-header py-3 px-4 bg-light rounded-top">
    <h2 class="h5 mb-0 text-primary fw-semibold">
      <i class="bi bi-credit-card me-2"></i>Mis Cr\xE9ditos Activos
    </h2>
    <p class="text-muted small mb-0">Revisa el estado de tus financiamientos</p>
  </div>

  @if (!creditos.length) {
    <p class="p-5 text-center">
      No tienes cr\xE9ditos registrados.
    </p>
  }

  <!-- Tabla -->
  @if (creditos.length) {
    <div class="table-responsive">
      <div class="container-fluid">
        <div class="table-grid">
          <!-- Encabezados de columna -->
          <div class="grid-header row g-0 py-2 px-3 border-bottom fw-semibold small">
            <div class="col-md-2">ID Cr\xE9dito</div>
            <div class="col-md-2">Folio</div>
            <div class="col-md-3">Estado</div>
            <div class="col-md-2">Monto Autorizado</div>
            <div class="col-md-3 text-end">Total a Liquidar</div>
          </div>
          <!-- Filas de datos -->
          @for (credito of creditos; track credito) {
            <div class="grid-row row g-0 align-items-center py-3 px-3 border-bottom-hover"
              >
              <div class="col-md-2">
                <span class="badge bg-primary bg-opacity-10 text-light p-2">{{credito.id}}</span>
              </div>
              <div class="col-md-2">
                <span class="text-dark">{{credito.folio}}</span>
              </div>
              <div class="col-md-3">
                <div class="d-flex align-items-center">
                  <span class="status-indicator me-2" [ngClass]="checkEstado(credito)"></span>
                  <span class="text-capitalize">{{estado}}</span>
                </div>
              </div>
              <div class="col-md-2">
                <span class="text-dark">{{(credito.monto_autorizado??0)|currency}}</span>
              </div>
              <div class="col-md-3 text-end">
                <div class="d-flex justify-content-end align-items-center">
                  <span class="amount fw-bold me-2">{{credito.estado_cuenta?.total_a_liquidar |
                  currency}}</span>
                  <button class="btn btn-sm btn-outline-primary rounded-pill"
                    (click)="creditoSelected.emit(credito)"
                    title="Ver detalles del cr\xE9dito"
                    [disabled]="checkDeleted(credito) === 'ELIMINADO'">
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  }

  <!-- Pie de tabla -->
  <div class="table-footer py-2 px-4 bg-light rounded-bottom">
    <div class="d-flex justify-content-between align-items-center">
      <span class="text-muted small">Mostrando {{creditos.length}} cr\xE9ditos</span>
      @if (creditos.length > 5) {
        <button class="btn btn-sm btn-link text-primary">
          <i class="bi bi-arrow-down-circle me-1"></i>Ver m\xE1s
        </button>
      }
    </div>
  </div>
</div>
`, styles: ["/* src/app/clientes/shared/cliente-creditos/cliente-creditos.component.css */\n.credit-table-container {\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.table-grid {\n  display: flex;\n  flex-direction: column;\n}\n.grid-header {\n  background-color: #f8f9fa;\n  color: #6c757d;\n  font-size: 0.85rem;\n}\n.grid-row {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  z-index: 1;\n}\n.grid-row:hover {\n  background-color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n}\n.status-indicator {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.amount {\n  color: #2a6f97;\n  font-size: 1.05rem;\n}\n.border-bottom-hover {\n  border-bottom: 1px solid #e9ecef;\n}\n@media (max-width: 768px) {\n  .grid-header {\n    display: none;\n  }\n  .grid-row {\n    flex-direction: column;\n    padding: 1rem;\n    margin-bottom: 1rem;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  }\n  .grid-row > div {\n    width: 100%;\n    margin-bottom: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n  }\n  .grid-row > div::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #6c757d;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=cliente-creditos.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }, { type: LocalStorageService }, { type: UtilsService }, { type: UtilsEstadoCuentaService }], { creditoSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClienteCreditosComponent, { className: "ClienteCreditosComponent", filePath: "src/app/clientes/shared/cliente-creditos/cliente-creditos.component.ts", lineNumber: 19 });
})();

// src/app/clientes/main/cliente-estados-cuentas/resumen-estado-cuenta/resumen-estado-cuenta.component.ts
var _ResumenEtadoCuentaClienteComponent = class _ResumenEtadoCuentaClienteComponent {
  constructor() {
    this.creditoSelected = new EventEmitter();
  }
};
_ResumenEtadoCuentaClienteComponent.\u0275fac = function ResumenEtadoCuentaClienteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResumenEtadoCuentaClienteComponent)();
};
_ResumenEtadoCuentaClienteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumenEtadoCuentaClienteComponent, selectors: [["app-resumen-estado-cuenta-cliente"]], inputs: { credito: "credito" }, outputs: { creditoSelected: "creditoSelected" }, decls: 40, vars: 7, consts: [[1, "container-fluid", "p-4", "rounded", "shadow", "bg-white"], [1, "text-center", "mb-5"], [1, "bg-primary", "rounded", "d-inline-flex", "p-3", "mb-3"], [1, "bi", "bi-file-text", "fs-1", "text-white"], [1, "text-primary", "mb-2"], [1, "text-muted"], [1, "mb-4", 3, "credito"], ["title", "Informaci\xF3n Bancaria", "icon", "bi-bank"], [1, "container-fluid"], [1, "alert", "alert-info", "mb-3"], [1, "bi", "bi-info-circle", "me-2"], [1, "row", "g-3"], [1, "col-12", "col-md-6"], [1, "card", "h-100", "border-0", "shadow-sm"], [1, "card-body", "text-center"], [1, "bi", "bi-building", "text-primary", "fs-1", "mb-3"], [1, "text-muted", "mb-2"], [1, "text-primary", "fw-bold"], [1, "bi", "bi-credit-card", "text-info", "fs-1", "mb-3"], [1, "text-info", "fw-bold", "text-uppercase"], ["title", "Estado de Cuotas", "icon", "bi-calendar-check"], [1, "bi", "bi-clock-history", "me-2"], [3, "credito", "useLocal"], [3, "credito"]], template: function ResumenEtadoCuentaClienteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 4);
    \u0275\u0275text(5, "Estado de Cuenta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Resumen completo de su cr\xE9dito y movimientos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "app-view-resumen-credito", 6);
    \u0275\u0275elementStart(9, "app-collapsable", 7)(10, "div", 8)(11, "div", 9);
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275text(13, " Utilice estos datos para realizar pagos a trav\xE9s de instituciones financieras ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14);
    \u0275\u0275element(18, "i", 15);
    \u0275\u0275elementStart(19, "h6", 16);
    \u0275\u0275text(20, "Instituci\xF3n Financiera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h5", 17);
    \u0275\u0275text(22, "HSBC");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 12)(24, "div", 13)(25, "div", 14);
    \u0275\u0275element(26, "i", 18);
    \u0275\u0275elementStart(27, "h6", 16);
    \u0275\u0275text(28, "Referencia Bancaria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h5", 19);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "small", 5);
    \u0275\u0275text(32, "Utilice esta referencia para sus pagos");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(33, "app-collapsable", 20)(34, "div", 9);
    \u0275\u0275element(35, "i", 21);
    \u0275\u0275text(36, " Consulte el detalle de sus cuotas pagadas, vigentes y vencidas ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "app-view-periodos", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "app-view-relacion-abonos", 22)(39, "app-view-relacion-convenios", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("credito", ctx.credito);
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx.credito.referencia_bancaria);
    \u0275\u0275advance(7);
    \u0275\u0275property("credito", ctx.credito)("useLocal", true);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx.credito)("useLocal", true);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx.credito);
  }
}, dependencies: [
  ViewResumenCreditoComponent,
  CollapsableComponent,
  ViewPeriodosComponent,
  ViewRelacionAbonosComponent,
  ViewRelacionConveniosComponent
], encapsulation: 2 });
var ResumenEtadoCuentaClienteComponent = _ResumenEtadoCuentaClienteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumenEtadoCuentaClienteComponent, [{
    type: Component,
    args: [{ selector: "app-resumen-estado-cuenta-cliente", imports: [
      ViewResumenCreditoComponent,
      CollapsableComponent,
      ViewPeriodosComponent,
      ViewRelacionAbonosComponent,
      ViewRelacionConveniosComponent
    ], template: '<div class="container-fluid p-4 rounded shadow bg-white">\n    <!-- Header Section -->\n    <div class="text-center mb-5">\n        <div class="bg-primary rounded d-inline-flex p-3 mb-3">\n            <i class="bi bi-file-text fs-1 text-white"></i>\n        </div>\n        <h2 class="text-primary mb-2">Estado de Cuenta</h2>\n        <p class="text-muted">Resumen completo de su cr\xE9dito y movimientos</p>\n    </div>\n\n    <!-- Resumen del Cr\xE9dito -->\n    <app-view-resumen-credito [credito]="credito" class="mb-4"></app-view-resumen-credito>\n\n    <!-- Informaci\xF3n Bancaria -->\n    <app-collapsable title="Informaci\xF3n Bancaria" icon="bi-bank">\n\n        <div class="container-fluid">\n            <div class="alert alert-info mb-3">\n                <i class="bi bi-info-circle me-2"></i>\n                Utilice estos datos para realizar pagos a trav\xE9s de instituciones financieras\n            </div>\n\n            <div class="row g-3">\n                <div class="col-12 col-md-6">\n                    <div class="card h-100 border-0 shadow-sm">\n                        <div class="card-body text-center">\n                            <i class="bi bi-building text-primary fs-1 mb-3"></i>\n                            <h6 class="text-muted mb-2">Instituci\xF3n Financiera</h6>\n                            <h5 class="text-primary fw-bold">HSBC</h5>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="col-12 col-md-6">\n                    <div class="card h-100 border-0 shadow-sm">\n                        <div class="card-body text-center">\n                            <i class="bi bi-credit-card text-info fs-1 mb-3"></i>\n                            <h6 class="text-muted mb-2">Referencia Bancaria</h6>\n                            <h5 class="text-info fw-bold text-uppercase">{{credito.referencia_bancaria}}</h5>\n                            <small class="text-muted">Utilice esta referencia para sus pagos</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </app-collapsable>\n\n    <!-- Relaci\xF3n de Cuotas -->\n    <app-collapsable title="Estado de Cuotas" icon="bi-calendar-check">\n\n        <div class="alert alert-info mb-3">\n            <i class="bi bi-clock-history me-2"></i>\n            Consulte el detalle de sus cuotas pagadas, vigentes y vencidas\n        </div>\n\n        <app-view-periodos [credito]="credito" [useLocal]="true" />\n    </app-collapsable>\n\n    <!-- Historial de Abonos -->\n    <app-view-relacion-abonos [credito]="credito" [useLocal]="true" />\n\n    <!-- Convenios -->\n    <app-view-relacion-convenios [credito]="credito" />\n</div>' }]
  }], () => [], { creditoSelected: [{
    type: Output
  }], credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumenEtadoCuentaClienteComponent, { className: "ResumenEtadoCuentaClienteComponent", filePath: "src/app/clientes/main/cliente-estados-cuentas/resumen-estado-cuenta/resumen-estado-cuenta.component.ts", lineNumber: 21 });
})();

// src/app/clientes/main/cliente-estados-cuentas/cliente-estados-cuentas.component.ts
function ClienteEstadosCuentasComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7)(2, "button", 8);
    \u0275\u0275listener("click", function ClienteEstadosCuentasComponent_Conditional_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.estadoCuentePdf.generarEstadoCuentaFromCreditoID(ctx_r1.credito));
    });
    \u0275\u0275element(3, "i", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 7)(5, "button", 10);
    \u0275\u0275listener("click", function ClienteEstadosCuentasComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.credito = void 0);
    });
    \u0275\u0275element(6, "i", 11);
    \u0275\u0275elementEnd()()();
  }
}
function ClienteEstadosCuentasComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-cliente-creditos", 12);
    \u0275\u0275listener("creditoSelected", function ClienteEstadosCuentasComponent_Conditional_8_Template_app_cliente_creditos_creditoSelected_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreditoSelected($event));
    });
    \u0275\u0275elementEnd();
  }
}
function ClienteEstadosCuentasComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-resumen-estado-cuenta-cliente", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("credito", ctx_r1.credito);
  }
}
var _ClienteEstadosCuentasComponent = class _ClienteEstadosCuentasComponent {
  constructor(estadoCuentePdf, estadoCuentaUtils, creditoController) {
    this.estadoCuentePdf = estadoCuentePdf;
    this.estadoCuentaUtils = estadoCuentaUtils;
    this.creditoController = creditoController;
  }
  onCreditoSelected(credito) {
    return __async(this, null, function* () {
      const res = yield this.creditoController.find(credito.id, ["*"], false);
      if (res) {
        this.credito = res;
        this.credito.estado_cuenta = this.estadoCuentaUtils.calculateEstadoDeCuenta(credito);
      }
    });
  }
};
_ClienteEstadosCuentasComponent.\u0275fac = function ClienteEstadosCuentasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClienteEstadosCuentasComponent)(\u0275\u0275directiveInject(estadoCuenta), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(CreditoService));
};
_ClienteEstadosCuentasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClienteEstadosCuentasComponent, selectors: [["app-cliente-estados-cuentas"]], decls: 10, vars: 3, consts: [[1, "container-xxl", "text-center", "p-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "bg-transparent", "mb-3"], [1, "breadcrumb-item", "text-primary", "p-0"], ["aria-current", "page", 1, "breadcrumb-item", "active", "text-dark"], [1, "row", "justify-content-end", "sticky-top"], [3, "credito"], [1, "col-auto", "p-3"], [1, "btn", "btn-sm", "btn-success", "rounded-pill", 3, "click"], [1, "bi", "bi-printer-fill"], [1, "btn", "btn-sm", "btn-outline-primary", "rounded-pill", 3, "click"], [1, "bi", "bi-chevron-left"], [3, "creditoSelected"]], template: function ClienteEstadosCuentasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "ol", 2)(3, "li", 3);
    \u0275\u0275text(4, " Fondos BC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 4);
    \u0275\u0275text(6, " Estados de cuenta ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(7, ClienteEstadosCuentasComponent_Conditional_7_Template, 7, 0, "div", 5);
    \u0275\u0275conditionalCreate(8, ClienteEstadosCuentasComponent_Conditional_8_Template, 1, 0, "app-cliente-creditos");
    \u0275\u0275conditionalCreate(9, ClienteEstadosCuentasComponent_Conditional_9_Template, 1, 1, "app-resumen-estado-cuenta-cliente", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.credito ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.credito ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito ? 9 : -1);
  }
}, dependencies: [
  ClienteCreditosComponent,
  ResumenEtadoCuentaClienteComponent
], encapsulation: 2 });
var ClienteEstadosCuentasComponent = _ClienteEstadosCuentasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClienteEstadosCuentasComponent, [{
    type: Component,
    args: [{ selector: "app-cliente-estados-cuentas", imports: [
      ClienteCreditosComponent,
      ResumenEtadoCuentaClienteComponent
    ], template: '<div class="container-xxl text-center p-3">\n  <!-- Breadcrumb -->\n  <nav aria-label="breadcrumb">\n    <ol class="breadcrumb bg-transparent mb-3">\n      <li class="breadcrumb-item text-primary p-0">\n        Fondos BC\n      </li>\n      <li class="breadcrumb-item active text-dark" aria-current="page">\n        Estados de cuenta\n      </li>\n    </ol>\n  </nav>\n  @if (credito) {\n    <div class="row justify-content-end sticky-top">\n      <div class="col-auto p-3">\n        <button class="btn btn-sm btn-success rounded-pill" (click)="estadoCuentePdf.generarEstadoCuentaFromCreditoID(credito)">\n          <i class="bi bi-printer-fill"></i>\n        </button>\n      </div>\n      <div class="col-auto p-3">\n        <button class="btn btn-sm btn-outline-primary rounded-pill" (click)="credito=undefined">\n          <i class="bi bi-chevron-left"></i>\n        </button>\n      </div>\n    </div>\n  }\n  @if (!credito) {\n    <app-cliente-creditos (creditoSelected)="onCreditoSelected($event)"/>\n  }\n  @if (credito) {\n    <app-resumen-estado-cuenta-cliente [credito]="credito"></app-resumen-estado-cuenta-cliente>\n  }\n</div>\n' }]
  }], () => [{ type: estadoCuenta }, { type: UtilsEstadoCuentaService }, { type: CreditoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClienteEstadosCuentasComponent, { className: "ClienteEstadosCuentasComponent", filePath: "src/app/clientes/main/cliente-estados-cuentas/cliente-estados-cuentas.component.ts", lineNumber: 19 });
})();

// src/app/clientes/shared/cliente-creditos-altas/cliente-creditos.component.ts
function ClienteCreditosAltasComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, " Tienes un cr\xE9dito activo actualmente, no puedes solicitar nuevos cr\xE9ditos hasta la conclusion de tu cr\xE9dito activo actual. ");
    \u0275\u0275elementEnd();
  }
}
function ClienteCreditosAltasComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " No tienes cr\xE9ditos registrados. ");
    \u0275\u0275elementEnd();
  }
}
function ClienteCreditosAltasComponent_Conditional_13_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 18)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 18)(5, "span", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "div", 24);
    \u0275\u0275element(9, "span", 25);
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 18)(13, "span", 27);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 28)(16, "div", 29)(17, "span", 30);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function ClienteCreditosAltasComponent_Conditional_13_For_15_Template_button_click_20_listener() {
      const credito_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.creditoSelected.emit(credito_r2));
    })("click", function ClienteCreditosAltasComponent_Conditional_13_For_15_Template_button_click_20_listener() {
      const credito_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editarCredito(credito_r2));
    });
    \u0275\u0275element(21, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 33);
    \u0275\u0275listener("click", function ClienteCreditosAltasComponent_Conditional_13_For_15_Template_button_click_22_listener() {
      const credito_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.creditoSelected.emit(credito_r2));
    })("click", function ClienteCreditosAltasComponent_Conditional_13_For_15_Template_button_click_22_listener() {
      const credito_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.borrarCredito(credito_r2));
    });
    \u0275\u0275element(23, "i", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const credito_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(credito_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(credito_r2.folio);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.checkEstado(credito_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.estado);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.estadoRevision(credito_r2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 8, ctx_r2.utils.totalFromCredito(credito_r2)));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", credito_r2.liberado_fecha || credito_r2.deleted_at);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", credito_r2.liberado_fecha || credito_r2.deleted_at);
  }
}
function ClienteCreditosAltasComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "div", 18);
    \u0275\u0275text(5, "ID Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7, "Folio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19);
    \u0275\u0275text(9, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275text(11, "Estado Revisi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 20);
    \u0275\u0275text(13, "Monto Solicitado");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(14, ClienteCreditosAltasComponent_Conditional_13_For_15_Template, 24, 10, "div", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.creditos);
  }
}
function ClienteCreditosAltasComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2, "Ver m\xE1s ");
    \u0275\u0275elementEnd();
  }
}
var _ClienteCreditosAltasComponent = class _ClienteCreditosAltasComponent {
  constructor(creditoController, storage, utils, utilsEstadoCuenta, router, superService) {
    this.creditoController = creditoController;
    this.storage = storage;
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.router = router;
    this.superService = superService;
    this.creditos = [];
    this.estado = "";
    this.creditoSelected = new EventEmitter();
    this.relations = [
      "estadoCuenta",
      "creditosPagos",
      "convenios.conveniosPagos",
      "abonos",
      "datosPersonaFisica.datosPersonales",
      "datosPersonaFisica.negocios",
      "datosPersonaFisica.datosPersonales.ciudades",
      "datosPersonasMorales.ciudades",
      "datosPersonasMorales.negocios",
      "datosPersonasMorales.representanteLegal",
      "productosFinancieros.plazos",
      "inversionesProgramas",
      "creditoComprobaciones"
    ];
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    return __async(this, null, function* () {
      const login = this.storage.getClienteUser();
      this.creditos = yield this.creditoController.all({
        //deleted_at: null,
        //cliente_id: login?.id
      }, this.relations, {
        busqueda_avanzada: JSON.stringify([
          {
            opWhere: true,
            relation: "datosPersonaFisica.datosPersonales",
            conditionals: [],
            andConditionals: [
              ["email", "LIKE", login?.email]
            ]
          },
          {
            opWhere: true,
            relation: "datosPersonasMorales.representanteLegal",
            conditionals: [],
            andConditionals: [
              ["email", "LIKE", login?.email]
            ]
          }
        ])
      });
      this.creditos.forEach((credito) => credito.estado_cuenta = this.utilsEstadoCuenta.getEstadoCuenta(credito));
    });
  }
  isSomeActive() {
    return this.creditos.some((credito) => credito.estado === "ACTIVO" && !credito.deleted_at);
  }
  /**
   * Funcion para verificar si un credito ya cuenta con todas las comprobaciones realizadas y si la suma de los montos es igual al monto autorizado del credito
   * @param credito
   * @returns Booleano para saber si tiene todas sus comprobaciones o no
   */
  checkComprobaciones(credito) {
    const comprobaciones = credito.credito_comprobaciones;
    if (!comprobaciones || comprobaciones.length === 0)
      return false;
    const totalComprobado = comprobaciones.reduce((sum, comprobacion) => {
      return sum + (comprobacion.monto || 0);
    }, 0);
    if (totalComprobado !== credito.monto_autorizado)
      return false;
    return true;
  }
  /**
   * Funcion para verificar el estado de un credito y modificar los estilos en la tabla
   * @param credito
   * @returns
   */
  checkEstado(credito) {
    const comprobaciones = this.checkComprobaciones(credito);
    if (credito.estado === "FINALIZADO") {
      this.estado = "FINALIZADO";
      return { "bg-success": "FINALIZADO" };
    }
    if (credito.estado === "ACTIVO" && this.estadoRevision(credito) === "Liberado" && !comprobaciones) {
      this.estado = "SALDADO";
      return { "bg-success": "SALDADO" };
    }
    if (credito.estado === "ACTIVO" && this.estadoRevision(credito) === "Pendiente" && !credito.deleted_at) {
      this.estado = "ACTIVO";
      return { "bg-success": "ACTIVO" };
    }
    if (credito.estado === "CANCELADO") {
      this.estado = "CANCELADO";
      return { "bg-warning": "CANCELADO" };
    }
    if (credito.estado === "RECHAZADO") {
      this.estado = "RECHAZADO";
      return { "bg-danger": "RECHAZADO" };
    }
    if (credito.deleted_at) {
      this.estado = "ELIMINADO";
      return { "bg-danger": "ELIMINADO" };
    }
    return;
  }
  estadoRevision(credito) {
    if (credito.liberado_fecha)
      return "Liberado";
    if (credito.carta_instruccion_url)
      return "Carta de instrucci\xF3n enviada";
    if (credito.dictaminado_fecha)
      return "Dictaminado";
    if (credito.autorizado_fecha)
      return "Autorizado";
    return "Pendiente";
  }
  crearNuevoCredito() {
    this.router.navigate(["/clientes/main/nuevo-credito"]);
  }
  editarCredito(credito) {
    this.router.navigate(["/clientes/main/editar/" + credito.id]);
  }
  borrarCredito(credito) {
    return __async(this, null, function* () {
      if (!credito.deleted_at) {
        yield this.creditoController.switch(credito);
      }
    });
  }
};
_ClienteCreditosAltasComponent.\u0275fac = function ClienteCreditosAltasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClienteCreditosAltasComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SuperService));
};
_ClienteCreditosAltasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClienteCreditosAltasComponent, selectors: [["app-cliente-creditos-altas"]], outputs: { creditoSelected: "creditoSelected" }, decls: 19, vars: 6, consts: [["role", "alert", 1, "alert", "alert-danger", "mt-3", "mb-3"], [1, "credit-table-container", "rounded-4", "shadow-sm", "bg-white"], [1, "table-header", "py-3", "px-4", "bg-light", "rounded-top"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [2, "display", "flex", "flex-direction", "column"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-credit-card", "me-2"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn", "btn-secondary", "shadow", "text-bold", "scale-05", 3, "click", "disabled"], [1, "p-5", "text-center"], [1, "table-responsive"], [1, "table-footer", "py-2", "px-4", "bg-light", "rounded-bottom"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"], [1, "btn", "btn-sm", "btn-link", "text-primary"], [1, "container-fluid"], [1, "table-grid"], [1, "grid-header", "row", "g-0", "py-2", "px-3", "border-bottom", "fw-semibold", "small"], [1, "col-md-2"], [1, "col-md-3"], [1, "col-md-3", "text-center"], [1, "grid-row", "row", "g-0", "align-items-center", "py-3", "px-3", "border-bottom-hover"], [1, "badge", "bg-primary", "bg-opacity-10", "text-light", "p-2"], [1, "text-dark"], [1, "d-flex", "align-items-center"], [1, "status-indicator", "me-2", 3, "ngClass"], [1, "text-capitalize"], [1, "text-primary", "fw-bold"], [1, "col-md-3", "text-end"], [1, "d-flex", "justify-content-end", "align-items-center"], [1, "amount", "fw-bold", "me-2"], ["title", "Ver detalles del cr\xE9dito", 1, "btn", "btn-sm", "btn-outline-primary", "rounded-pill", 3, "click", "disabled"], [1, "bi", "bi-pencil-fill"], ["title", "Ver detalles del cr\xE9dito", 1, "btn", "btn-sm", "btn-outline-danger", "rounded-pill", 3, "click", "disabled"], [1, "bi", "bi-trash-fill"], [1, "bi", "bi-arrow-down-circle", "me-1"]], template: function ClienteCreditosAltasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ClienteCreditosAltasComponent_Conditional_0_Template, 2, 0, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2", 5);
    \u0275\u0275element(6, "i", 6);
    \u0275\u0275text(7, "Mis Cr\xE9ditos Creados ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9, "Revisa tus cr\xE9ditos solicitados, crea nuevos o haz ajustes en los existentes.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function ClienteCreditosAltasComponent_Template_button_click_10_listener() {
      return ctx.crearNuevoCredito();
    });
    \u0275\u0275text(11, " Crear nuevo cr\xE9dito ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ClienteCreditosAltasComponent_Conditional_12_Template, 2, 0, "p", 9);
    \u0275\u0275conditionalCreate(13, ClienteCreditosAltasComponent_Conditional_13_Template, 16, 0, "div", 10);
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "span", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ClienteCreditosAltasComponent_Conditional_18_Template, 3, 0, "button", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.isSomeActive() ? 0 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx.isSomeActive());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.creditos.length ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.creditos.length ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Mostrando ", ctx.creditos.length, " cr\xE9ditos");
    \u0275\u0275advance();
    \u0275\u0275conditional(false ? 18 : -1);
  }
}, dependencies: [
  CurrencyPipe,
  NgClass
], styles: ["\n\n.credit-table-container[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.table-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.grid-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #6c757d;\n  font-size: 0.85rem;\n}\n.grid-row[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  z-index: 1;\n}\n.grid-row[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.amount[_ngcontent-%COMP%] {\n  color: #2a6f97;\n  font-size: 1.05rem;\n}\n.border-bottom-hover[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9ecef;\n}\n@media (max-width: 768px) {\n  .grid-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .grid-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 1rem;\n    margin-bottom: 1rem;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  }\n  .grid-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n  }\n  .grid-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #6c757d;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=cliente-creditos.component.css.map */"] });
var ClienteCreditosAltasComponent = _ClienteCreditosAltasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClienteCreditosAltasComponent, [{
    type: Component,
    args: [{ selector: "app-cliente-creditos-altas", imports: [
      CurrencyPipe,
      NgClass
    ], template: '@if (isSomeActive()) {\n  <div class="alert alert-danger mt-3 mb-3" role="alert">\n    Tienes un cr\xE9dito activo actualmente, no puedes solicitar nuevos cr\xE9ditos hasta la conclusion de tu cr\xE9dito activo\n    actual.\n  </div>\n}\n\n<div class="credit-table-container rounded-4 shadow-sm bg-white">\n  <!-- Encabezado -->\n  <div class="table-header py-3 px-4 bg-light rounded-top">\n    <div style="display: flex; flex-direction: row; justify-content: space-between;">\n      <div style="display: flex; flex-direction: column;">\n        <h2 class="h5 mb-0 text-primary fw-semibold">\n          <i class="bi bi-credit-card me-2"></i>Mis Cr\xE9ditos Creados\n        </h2>\n        <p class="text-muted small mb-0">Revisa tus cr\xE9ditos solicitados, crea nuevos o haz ajustes en los\n        existentes.</p>\n      </div>\n      <button class="btn btn btn-secondary shadow text-bold scale-05" [disabled]="isSomeActive()"\n        (click)="crearNuevoCredito()">\n        Crear nuevo cr\xE9dito\n      </button>\n    </div>\n  </div>\n\n  @if (!creditos.length) {\n    <p class="p-5 text-center">\n      No tienes cr\xE9ditos registrados.\n    </p>\n  }\n\n  <!-- Tabla -->\n  @if (creditos.length) {\n    <div class="table-responsive">\n      <div class="container-fluid">\n        <div class="table-grid">\n          <!-- Encabezados de columna -->\n          <div class="grid-header row g-0 py-2 px-3 border-bottom fw-semibold small">\n            <div class="col-md-2">ID Cr\xE9dito</div>\n            <div class="col-md-2">Folio</div>\n            <div class="col-md-3">Estado</div>\n            <div class="col-md-2">Estado Revisi\xF3n</div>\n            <div class="col-md-3 text-center">Monto Solicitado</div>\n          </div>\n          <!-- Filas de datos -->\n          @for (credito of creditos; track credito) {\n            <div class="grid-row row g-0 align-items-center py-3 px-3 border-bottom-hover"\n              >\n              <div class="col-md-2">\n                <span class="badge bg-primary bg-opacity-10 text-light p-2">{{credito.id}}</span>\n              </div>\n              <div class="col-md-2">\n                <span class="text-dark">{{credito.folio}}</span>\n              </div>\n              <div class="col-md-3">\n                <div class="d-flex align-items-center">\n                  <span class="status-indicator me-2" [ngClass]="checkEstado(credito)"></span>\n                  <span class="text-capitalize">{{ estado }}</span>\n                </div>\n              </div>\n              <div class="col-md-2">\n                <span class="text-primary fw-bold">{{estadoRevision(credito)}}</span>\n              </div>\n              <div class="col-md-3 text-end">\n                <div class="d-flex justify-content-end align-items-center">\n                  <span class="amount fw-bold me-2">{{utils.totalFromCredito(credito) |currency }}</span>\n                  <button class="btn btn-sm btn-outline-primary rounded-pill"\n                    [disabled]="credito.liberado_fecha || credito.deleted_at"\n                    (click)="creditoSelected.emit(credito)" (click)="editarCredito(credito)"\n                    title="Ver detalles del cr\xE9dito">\n                    <i class="bi bi-pencil-fill"></i>\n                  </button>\n                  <button class="btn btn-sm btn-outline-danger rounded-pill"\n                    [disabled]="credito.liberado_fecha || credito.deleted_at"\n                    (click)="creditoSelected.emit(credito)" (click)="borrarCredito(credito)"\n                    title="Ver detalles del cr\xE9dito">\n                    <i class="bi bi-trash-fill"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  }\n\n  <!-- Pie de tabla -->\n  <div class="table-footer py-2 px-4 bg-light rounded-bottom">\n    <div class="d-flex justify-content-between align-items-center">\n      <span class="text-muted small">Mostrando {{creditos.length}} cr\xE9ditos</span>\n      @if (false) {\n        <button class="btn btn-sm btn-link text-primary">\n          <i class="bi bi-arrow-down-circle me-1"></i>Ver m\xE1s\n        </button>\n      }\n    </div>\n  </div>\n</div>', styles: ["/* src/app/clientes/shared/cliente-creditos-altas/cliente-creditos.component.css */\n.credit-table-container {\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.table-grid {\n  display: flex;\n  flex-direction: column;\n}\n.grid-header {\n  background-color: #f8f9fa;\n  color: #6c757d;\n  font-size: 0.85rem;\n}\n.grid-row {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  z-index: 1;\n}\n.grid-row:hover {\n  background-color: #fff;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);\n  z-index: 2;\n}\n.status-indicator {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.amount {\n  color: #2a6f97;\n  font-size: 1.05rem;\n}\n.border-bottom-hover {\n  border-bottom: 1px solid #e9ecef;\n}\n@media (max-width: 768px) {\n  .grid-header {\n    display: none;\n  }\n  .grid-row {\n    flex-direction: column;\n    padding: 1rem;\n    margin-bottom: 1rem;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  }\n  .grid-row > div {\n    width: 100%;\n    margin-bottom: 0.5rem;\n    display: flex;\n    justify-content: space-between;\n  }\n  .grid-row > div::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #6c757d;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=cliente-creditos.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }, { type: LocalStorageService }, { type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: Router }, { type: SuperService }], { creditoSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClienteCreditosAltasComponent, { className: "ClienteCreditosAltasComponent", filePath: "src/app/clientes/shared/cliente-creditos-altas/cliente-creditos.component.ts", lineNumber: 22 });
})();

// src/app/clientes/main/creditos/creditos.component.ts
var _ClientesCreditosComponent = class _ClientesCreditosComponent {
};
_ClientesCreditosComponent.\u0275fac = function ClientesCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClientesCreditosComponent)();
};
_ClientesCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientesCreditosComponent, selectors: [["app-creditos"]], decls: 10, vars: 0, consts: [[1, "container-xxl", "text-center", "p-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "bg-transparent", "mb-3"], [1, "breadcrumb-item", "text-primary", "p-0"], ["aria-current", "page", 1, "breadcrumb-item", "active", "text-dark"]], template: function ClientesCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "ol", 2)(3, "li", 3);
    \u0275\u0275text(4, " Fondos BC ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 3);
    \u0275\u0275text(6, " Altas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li", 4);
    \u0275\u0275text(8, " Cr\xE9ditos ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "app-cliente-creditos-altas");
    \u0275\u0275elementEnd();
  }
}, dependencies: [ClienteCreditosAltasComponent], encapsulation: 2 });
var ClientesCreditosComponent = _ClientesCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientesCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-creditos", imports: [
      ClienteCreditosAltasComponent
    ], template: '<div class="container-xxl text-center p-3">\n<!-- Breadcrumb -->\n<nav aria-label="breadcrumb">\n  <ol class="breadcrumb bg-transparent mb-3">\n    <li class="breadcrumb-item text-primary p-0">\n      Fondos BC\n    </li>\n    <li class="breadcrumb-item text-primary p-0">\n      Altas\n    </li>\n    <li class="breadcrumb-item active text-dark" aria-current="page">\n      Cr\xE9ditos\n    </li>\n  </ol>\n</nav>\n\n<app-cliente-creditos-altas />\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientesCreditosComponent, { className: "ClientesCreditosComponent", filePath: "src/app/clientes/main/creditos/creditos.component.ts", lineNumber: 12 });
})();

// src/app/clientes/main/apoyos/apoyos-clientes.component.ts
var _c03 = () => ({ disabled: false });
var _forTrack0 = ($index, $item) => $item.id;
function ApoyosClientesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, " Tienes una solicitud de apoyo sin ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3, "Concluir");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " o ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6, "Cancelado");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ", no puedes ingresar nuevas solicitudes de apoyos. ");
    \u0275\u0275elementEnd();
  }
}
function ApoyosClientesComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "No tienes apoyos registrados.");
    \u0275\u0275elementEnd();
  }
}
function ApoyosClientesComponent_Conditional_31_For_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const apoyo_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", apoyo_r2.solicitudes_apoyos_modalidades.length > 0 ? apoyo_r2.solicitudes_apoyos_modalidades[0].modalidades_ministraciones == null ? null : apoyo_r2.solicitudes_apoyos_modalidades[0].modalidades_ministraciones.modalidades == null ? null : apoyo_r2.solicitudes_apoyos_modalidades[0].modalidades_ministraciones.modalidades.nombre : "No Especificado", " ");
  }
}
function ApoyosClientesComponent_Conditional_31_For_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const apoyo_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEstadoModalidadApoyo(apoyo_r2.solicitudes_apoyos_modalidades), " ");
  }
}
function ApoyosClientesComponent_Conditional_31_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 35)(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 35)(9, "span", 33);
    \u0275\u0275conditionalCreate(10, ApoyosClientesComponent_Conditional_31_For_15_Conditional_10_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 35)(12, "span", 36);
    \u0275\u0275conditionalCreate(13, ApoyosClientesComponent_Conditional_31_For_15_Conditional_13_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 35)(15, "div", 37)(16, "button", 38);
    \u0275\u0275listener("click", function ApoyosClientesComponent_Conditional_31_For_15_Template_button_click_16_listener() {
      const apoyo_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editar(apoyo_r2.id));
    });
    \u0275\u0275element(17, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 40);
    \u0275\u0275listener("click", function ApoyosClientesComponent_Conditional_31_For_15_Template_button_click_18_listener() {
      const apoyo_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(apoyo_r2.id));
    });
    \u0275\u0275element(19, "i", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const apoyo_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(apoyo_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (apoyo_r2.programas_apoyos == null ? null : apoyo_r2.programas_apoyos.nombre) || "No Ingresado", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(apoyo_r2.solicitudes_apoyos_modalidades ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(apoyo_r2.solicitudes_apoyos_modalidades ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.disableActionsBtns);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disableActionsBtns);
  }
}
function ApoyosClientesComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 27)(2, "div", 28)(3, "div", 29)(4, "div", 30);
    \u0275\u0275text(5, "Folio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275text(7, "Programa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 30);
    \u0275\u0275text(9, "Modalidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 30);
    \u0275\u0275text(11, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30);
    \u0275\u0275text(13, "Acciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(14, ApoyosClientesComponent_Conditional_31_For_15_Template, 20, 6, "div", 31, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.misApoyos);
  }
}
function ApoyosClientesComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, "Ver m\xE1s ");
    \u0275\u0275elementEnd();
  }
}
var _ApoyosClientesComponent = class _ApoyosClientesComponent {
  constructor(router, route, creditoController, apoyosController, sucursalesController, storage, utils) {
    this.router = router;
    this.route = route;
    this.creditoController = creditoController;
    this.apoyosController = apoyosController;
    this.sucursalesController = sucursalesController;
    this.storage = storage;
    this.utils = utils;
    this.creditos = [];
    this.estado = "";
    this.creditoSelected = new EventEmitter();
    this.relations = [
      "estadoCuenta",
      "creditosPagos",
      "convenios.conveniosPagos",
      "abonos",
      "datosPersonaFisica.datosPersonales",
      "datosPersonaFisica.negocios",
      "datosPersonaFisica.datosPersonales.ciudades",
      "datosPersonasMorales.ciudades",
      "datosPersonasMorales.negocios",
      "datosPersonasMorales.representanteLegal",
      "productosFinancieros.plazos",
      "inversionesProgramas",
      "creditoComprobaciones"
    ];
    this.misApoyos = [];
    this.nuevoApoyo = {};
    this.showSelProg = false;
    this.sucursales = [];
    this.disableBtnNvoApoyo = false;
    this.disableActionsBtns = true;
    this.extraData = {
      conditionals: JSON.stringify([
        ["created_at", ">=", (/* @__PURE__ */ new Date()).getFullYear() + "-01-01"],
        ["created_at", "<=", (/* @__PURE__ */ new Date()).getFullYear() + "-12-31"],
        ["deleted_at", "IS NULL", null]
      ])
    };
  }
  ngOnInit() {
    this.user = this.storage.getClienteUser();
    console.log(this.user);
    this.getData();
    this.getSucursales();
  }
  getData() {
    return __async(this, null, function* () {
      if (this.user) {
        const apoyos = yield this.apoyosController.get([
          {
            key: "datos_personal_id",
            operator: "=",
            value: this.user.datos_personales_id
          },
          { key: "deleted_at", operator: "IS NULL", value: null }
        ], void 0, [
          "datosPersonales",
          "programasApoyos",
          "solicitudesApoyosModalidades",
          "solicitudesApoyosModalidades.modalidadesMinistraciones",
          "solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades"
        ]);
        this.misApoyos = apoyos.data || [];
        console.log("Mis Apoyos:", this.misApoyos);
        this.revisarEstadoModApoyo();
      }
    });
  }
  crearApoyo() {
    return __async(this, null, function* () {
      this.showSelProg = false;
      this.nuevoApoyo.datos_personal_id = this.user?.datos_personales_id;
      const apoyo = yield this.apoyosController.new(this.nuevoApoyo);
      if (apoyo) {
        this.router.navigate(["/clientes/main/editar-apoyo", apoyo.id], {
          relativeTo: this.route
        });
      }
    });
  }
  editar(id) {
    this.router.navigate(["/clientes/main/editar-apoyo", id], {
      relativeTo: this.route
    });
  }
  delete(id) {
    return __async(this, null, function* () {
      yield this.apoyosController.switch(id, void 0, true);
      this.getData();
    });
  }
  selectProgramaNvoApoyo() {
    this.showSelProg = true;
  }
  getSucursales() {
    return __async(this, null, function* () {
      const sucursales = yield this.sucursalesController.all();
      this.sucursales = sucursales.map((sucursal) => {
        return {
          value: sucursal.id,
          label: sucursal.nombre
        };
      });
      console.log("Sucursales:", this.sucursales);
    });
  }
  getTotalApoyos(solicitud) {
    return this.utils.totalSolicitudApoyo(solicitud);
  }
  isSomeActive() {
    return false;
  }
  getEstadoModalidadApoyo(modalidades) {
    const length = modalidades.length - 1;
    return length >= 0 ? modalidades[length].estado : "NA";
  }
  /**
   * Revisar el estado de los Apoyos para
   * deshabilitar o desactivar el botón de
   * "Crear nuevo apoyo" y los botones de
   * acciones
   **/
  revisarEstadoModApoyo() {
    if (this.misApoyos.length == 0) {
      return;
    }
    for (let apoyo of this.misApoyos) {
      const estado = this.getEstadoModalidadApoyo(apoyo.solicitudes_apoyos_modalidades || []);
      switch (estado) {
        case "CAPTURANDO":
          this.disableActionsBtns = false;
          break;
        case "CONCLUIDO":
          this.disableBtnNvoApoyo = false;
          break;
        case "RECHAZADO":
          this.disableBtnNvoApoyo = false;
          break;
        default:
          this.disableBtnNvoApoyo = true;
          this.disableActionsBtns = true;
      }
    }
  }
};
_ApoyosClientesComponent.\u0275fac = function ApoyosClientesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApoyosClientesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(SucursalService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(UtilsService));
};
_ApoyosClientesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApoyosClientesComponent, selectors: [["app-apoyos-clientes"]], outputs: { creditoSelected: "creditoSelected" }, decls: 37, vars: 13, consts: [[1, "container-xxl", "text-center", "p-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "bg-transparent", "mb-3"], [1, "breadcrumb-item", "text-primary", "p-0"], ["aria-current", "page", 1, "breadcrumb-item", "active", "text-dark"], ["role", "alert", 1, "alert", "alert-danger", "mt-3", "mb-3"], [1, "credit-table-container", "rounded-4", "shadow-sm", "bg-white"], [1, "table-header", "py-3", "px-4", "bg-light", "rounded-top"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [2, "display", "flex", "flex-direction", "column"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-credit-card", "me-2"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn", "btn-secondary", "shadow", "text-bold", "scale-05", 3, "click", "disabled"], [3, "showChange", "show"], [1, "col-12", "col-sm", "p-3"], ["label", "Ciudad donde te encuentras:", 3, "valueChange", "value", "options", "validator"], ["label", "Selecciona Programa de Apoyo:", "apiUrl", "api/programas_apoyos", "keyList", "id", "keyDetalle", "alias", 3, "valueChange", "extraData", "value"], [1, "row", "my-3"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click"], [1, "p-5", "text-center"], [1, "table-responsive"], [1, "table-footer", "py-2", "px-4", "bg-light", "rounded-bottom"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted", "small"], [1, "btn", "btn-sm", "btn-link", "text-primary"], [1, "container-fluid"], [1, "table-grid"], [1, "grid-header", "row", "g-0", "py-2", "px-3", "border-bottom", "fw-semibold", "small"], [1, "col", "align-items-center", "text-uppercase"], [1, "grid-row", "row", "g-0", "align-items-center", "py-3", "px-3", "border-bottom-hover"], [1, "col", "align-items-center"], [1, "align-items-center"], [1, "badge", "bg-primary", "bg-opacity-10", "text-light", "p-2"], [1, "col"], [1, "text-primary", "fw-bold"], [1, "d-flex", "justify-content-center", "align-items-center"], ["title", "Ver detalles del cr\xE9dito", 1, "btn", "btn-sm", "btn-outline-primary", "rounded-pill", "mr-2", 3, "click", "disabled"], [1, "bi", "bi-pencil-fill"], ["title", "Ver detalles del cr\xE9dito", 1, "btn", "btn-sm", "btn-outline-danger", "rounded-pill", 3, "click", "disabled"], [1, "bi", "bi-trash-fill"], [1, "bi", "bi-arrow-down-circle", "me-1"]], template: function ApoyosClientesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "ol", 2)(3, "li", 3);
    \u0275\u0275text(4, "Fondos BC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "li", 3);
    \u0275\u0275text(6, "Altas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li", 4);
    \u0275\u0275text(8, " Apoyos ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, ApoyosClientesComponent_Conditional_9_Template, 8, 0, "div", 5);
    \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h2", 10);
    \u0275\u0275element(15, "i", 11);
    \u0275\u0275text(16, "Mis Apoyos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 12);
    \u0275\u0275text(18, " Revisa tus apoyos solicitados, crea nuevos o haz ajustes en los existentes. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 13);
    \u0275\u0275listener("click", function ApoyosClientesComponent_Template_button_click_19_listener() {
      return ctx.selectProgramaNvoApoyo();
    });
    \u0275\u0275text(20, " Crear nuevo apoyo ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "app-formulario-flotante", 14);
    \u0275\u0275twoWayListener("showChange", function ApoyosClientesComponent_Template_app_formulario_flotante_showChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showSelProg, $event) || (ctx.showSelProg = $event);
      return $event;
    });
    \u0275\u0275elementStart(22, "div", 15)(23, "app-select-field", 16);
    \u0275\u0275twoWayListener("valueChange", function ApoyosClientesComponent_Template_app_select_field_valueChange_23_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nuevoApoyo.sucursal_id, $event) || (ctx.nuevoApoyo.sucursal_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "app-autocomplete-field", 17);
    \u0275\u0275twoWayListener("valueChange", function ApoyosClientesComponent_Template_app_autocomplete_field_valueChange_25_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nuevoApoyo.programas_apoyo_id, $event) || (ctx.nuevoApoyo.programas_apoyo_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 18)(27, "div", 19)(28, "button", 20);
    \u0275\u0275listener("click", function ApoyosClientesComponent_Template_button_click_28_listener() {
      return ctx.crearApoyo();
    });
    \u0275\u0275text(29, " Generar Apoyo ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(30, ApoyosClientesComponent_Conditional_30_Template, 2, 0, "p", 21);
    \u0275\u0275conditionalCreate(31, ApoyosClientesComponent_Conditional_31_Template, 16, 0, "div", 22);
    \u0275\u0275elementStart(32, "div", 23)(33, "div", 24)(34, "span", 25);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, ApoyosClientesComponent_Conditional_36_Template, 3, 0, "button", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.disableBtnNvoApoyo ? 9 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx.disableBtnNvoApoyo);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx.showSelProg);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx.nuevoApoyo.sucursal_id);
    \u0275\u0275property("options", ctx.sucursales)("validator", \u0275\u0275pureFunction0(12, _c03));
    \u0275\u0275advance(2);
    \u0275\u0275property("extraData", ctx.extraData);
    \u0275\u0275twoWayProperty("value", ctx.nuevoApoyo.programas_apoyo_id);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx.misApoyos.length ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.misApoyos.length ? 31 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Cuentas con ", ctx.misApoyos.length, " apoyo(s)");
    \u0275\u0275advance();
    \u0275\u0275conditional(false ? 36 : -1);
  }
}, dependencies: [
  // CurrencyPipe,
  // NgClass,
  FormularioFlotanteComponent,
  AutocompleteFieldComponent,
  SelectFieldComponent
], encapsulation: 2 });
var ApoyosClientesComponent = _ApoyosClientesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApoyosClientesComponent, [{
    type: Component,
    args: [{ selector: "app-apoyos-clientes", imports: [
      // CurrencyPipe,
      // NgClass,
      FormularioFlotanteComponent,
      AutocompleteFieldComponent,
      SelectFieldComponent
    ], template: '<div class="container-xxl text-center p-3">\n  <!-- Breadcrumb -->\n  <nav aria-label="breadcrumb">\n    <ol class="breadcrumb bg-transparent mb-3">\n      <li class="breadcrumb-item text-primary p-0">Fondos BC</li>\n      <li class="breadcrumb-item text-primary p-0">Altas</li>\n      <li class="breadcrumb-item active text-dark" aria-current="page">\n        Apoyos\n      </li>\n    </ol>\n  </nav>\n\n  @if (disableBtnNvoApoyo) {\n    <div class="alert alert-danger mt-3 mb-3" role="alert">\n      Tienes una solicitud de apoyo sin <b>Concluir</b> o <b>Cancelado</b>, no\n      puedes ingresar nuevas solicitudes de apoyos.\n    </div>\n  }\n\n  <div class="credit-table-container rounded-4 shadow-sm bg-white">\n    <!-- Encabezado -->\n    <div class="table-header py-3 px-4 bg-light rounded-top">\n      <div\n        style="\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n        "\n      >\n        <div style="display: flex; flex-direction: column">\n          <h2 class="h5 mb-0 text-primary fw-semibold">\n            <i class="bi bi-credit-card me-2"></i>Mis Apoyos\n          </h2>\n          <p class="text-muted small mb-0">\n            Revisa tus apoyos solicitados, crea nuevos o haz ajustes en los\n            existentes.\n          </p>\n        </div>\n        <button\n          class="btn btn btn-secondary shadow text-bold scale-05"\n          [disabled]="disableBtnNvoApoyo"\n          (click)="selectProgramaNvoApoyo()"\n        >\n          Crear nuevo apoyo\n        </button>\n      </div>\n    </div>\n    <!-- Form Selectror de Programa Nvo Apoyo  -->\n    <app-formulario-flotante [(show)]="showSelProg">\n      <div class="col-12 col-sm p-3">\n        <app-select-field\n          label="Ciudad donde te encuentras:"\n          [(value)]="nuevoApoyo.sucursal_id"\n          [options]="sucursales"\n          [validator]="{ disabled: false }"\n        >\n        </app-select-field>\n      </div>\n      <div class="col-12 col-sm p-3">\n        <app-autocomplete-field\n          label="Selecciona Programa de Apoyo:"\n          apiUrl="api/programas_apoyos"\n          keyList="id"\n          keyDetalle="alias"\n          [extraData]="extraData"\n          [(value)]="nuevoApoyo.programas_apoyo_id"\n        >\n        </app-autocomplete-field>\n      </div>\n      <div class="row my-3">\n        <div class="col text-center">\n          <button (click)="crearApoyo()" class="btn btn-primary">\n            Generar Apoyo\n          </button>\n        </div>\n      </div>\n    </app-formulario-flotante>\n    <!-- ./Form Selectror de Programa Nvo Apoyo  -->\n    @if (!misApoyos.length) {\n      <p class="p-5 text-center">No tienes apoyos registrados.</p>\n    }\n    <!-- Tabla -->\n    @if (misApoyos.length) {\n      <div class="table-responsive">\n        <div class="container-fluid">\n          <div class="table-grid">\n            <!-- Encabezados de columna -->\n            <div\n              class="grid-header row g-0 py-2 px-3 border-bottom fw-semibold small"\n            >\n              <div class="col align-items-center text-uppercase">Folio</div>\n              <div class="col align-items-center text-uppercase">Programa</div>\n              <div class="col align-items-center text-uppercase">Modalidad</div>\n              <div class="col align-items-center text-uppercase">Estado</div>\n              <div class="col align-items-center text-uppercase">Acciones</div>\n            </div>\n            <!-- Filas de datos -->\n            @for (apoyo of misApoyos; track apoyo.id) {\n              <div\n                class="grid-row row g-0 align-items-center py-3 px-3 border-bottom-hover"\n              >\n                <div class="col align-items-center">\n                  <div class="align-items-center">\n                    <span\n                      class="badge bg-primary bg-opacity-10 text-light p-2"\n                      >{{ apoyo.id }}</span\n                    >\n                  </div>\n                </div>\n                <div class="col">\n                  <div class="align-items-center">\n                    {{ apoyo.programas_apoyos?.nombre || "No Ingresado" }}\n                  </div>\n                </div>\n                <div class="col">\n                  <span class="align-items-center">\n                    @if (apoyo.solicitudes_apoyos_modalidades) {\n                      {{\n                        apoyo.solicitudes_apoyos_modalidades.length > 0\n                          ? apoyo.solicitudes_apoyos_modalidades[0]\n                              .modalidades_ministraciones?.modalidades?.nombre\n                          : "No Especificado"\n                      }}\n                    }\n                  </span>\n                </div>\n                <div class="col">\n                  <span class="text-primary fw-bold">\n                    @if (apoyo.solicitudes_apoyos_modalidades) {\n                      <span class="align-items-center">\n                        {{\n                          getEstadoModalidadApoyo(\n                            apoyo.solicitudes_apoyos_modalidades\n                          )\n                        }}\n                      </span>\n                    }\n                  </span>\n                </div>\n                <div class="col">\n                  <div class="d-flex justify-content-center align-items-center">\n                    <button\n                      (click)="editar(apoyo.id)"\n                      [disabled]="disableActionsBtns"\n                      class="btn btn-sm btn-outline-primary rounded-pill mr-2"\n                      title="Ver detalles del cr\xE9dito"\n                    >\n                      <i class="bi bi-pencil-fill"></i>\n                    </button>\n                    <button\n                      (click)="delete(apoyo.id)"\n                      [disabled]="disableActionsBtns"\n                      class="btn btn-sm btn-outline-danger rounded-pill"\n                      title="Ver detalles del cr\xE9dito"\n                    >\n                      <i class="bi bi-trash-fill"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n    }\n    <!-- Pie de tabla -->\n    <div class="table-footer py-2 px-4 bg-light rounded-bottom">\n      <div class="d-flex justify-content-between align-items-center">\n        <span class="text-muted small"\n          >Cuentas con {{ misApoyos.length }} apoyo(s)</span\n        >\n        @if (false) {\n          <button class="btn btn-sm btn-link text-primary">\n            <i class="bi bi-arrow-down-circle me-1"></i>Ver m\xE1s\n          </button>\n        }\n      </div>\n    </div>\n  </div>\n</div>\n' }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: CreditoService }, { type: SolicitudApoyoService }, { type: SucursalService }, { type: LocalStorageService }, { type: UtilsService }], { creditoSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApoyosClientesComponent, { className: "ApoyosClientesComponent", filePath: "src/app/clientes/main/apoyos/apoyos-clientes.component.ts", lineNumber: 32 });
})();

// src/app/clientes/main/main.routes.ts
var mainRoutes = [
  { path: "", pathMatch: "full", redirectTo: "dashboard" },
  { path: "dashboard", component: DashboardClientesComponent },
  { path: "cotizador", component: CotizadorComponent },
  { path: "creditos", component: ClientesCreditosComponent },
  { path: "apoyos", component: ApoyosClientesComponent },
  {
    path: "editar/:credito_id",
    component: CreditoFormComponent,
    loadChildren: () => import("./chunk-L63TIHMS.js").then((m) => m.creditoFormRoutes)
  },
  {
    path: "nuevo-credito",
    loadComponent: () => import("./chunk-RUPB2BMQ.js").then((m) => m.ClientesCreditoFormNuevoComponent)
  },
  // {
  //   path: 'nuevo-apoyo/:prog_id',
  //   component: NuevoApoyoComponent,
  //   //loadComponent: () => import('./apoyos/nuevo-apoyo/nuevo-apoyo.component').then(m => m.NuevoApoyoComponent)
  // },
  { path: "estado-cuenta", component: ClienteEstadosCuentasComponent },
  { path: "estado-cuenta/:credito_id", component: ClienteEstadosCuentasComponent },
  {
    path: "perfil",
    component: ClientePerfilComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./chunk-YKOC4JTD.js").then((m) => m.CLIENTE_PERFIL_ROUTES)
      }
    ]
  },
  {
    title: "Apoyos Formulario",
    path: "editar-apoyo/:apoyo_id",
    component: FormApoyosComponent,
    loadChildren: () => import("./chunk-NTJI4FAT.js").then((m) => m.formApoyosRoutes)
  }
];
export {
  mainRoutes
};
//# sourceMappingURL=chunk-LUMEJPSM.js.map
