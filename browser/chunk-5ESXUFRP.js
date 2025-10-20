import {
  AbonoComponent
} from "./chunk-JFCLL2HX.js";
import {
  PagoCargaMasivaService
} from "./chunk-ZPILISIA.js";
import {
  ViewRelacionAbonosComponent
} from "./chunk-JF4XKC7P.js";
import {
  CreditoAbonoService
} from "./chunk-BI6X3YJ4.js";
import {
  ScrollingModule
} from "./chunk-6DPENKFB.js";
import {
  ViewResumenCreditoComponent
} from "./chunk-PHVA5LMX.js";
import "./chunk-VUVNDSSC.js";
import {
  BuscadorCreditosComponent
} from "./chunk-5AHBH7ZX.js";
import "./chunk-MJF6VG42.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import "./chunk-5BMNPTRZ.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-PMGWFFGK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  DatePipe,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/pagos/pagos-cancelacion/pagos-cancelacion.component.ts
function PagosCancelacionComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Este cr\xE9dito se encuentra ", ctx_r0.credito.estado, ". No es posible hacer cambios. ");
  }
}
function PagosCancelacionComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " Este cr\xE9dito ha sido liberado, no se permite cancelar. ");
    \u0275\u0275elementEnd();
  }
}
function PagosCancelacionComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h4", 4);
    \u0275\u0275text(2, "\xBFSeguro que deseas cancelar este cr\xE9dito?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "textarea", 8);
    \u0275\u0275twoWayListener("ngModelChange", function PagosCancelacionComponent_Conditional_0_Conditional_3_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.comentarios, $event) || (ctx_r0.comentarios = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 9);
    \u0275\u0275text(8, "Raz\xF3n de la cancelaci\xF3n:");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 10)(11, "button", 11);
    \u0275\u0275listener("click", function PagosCancelacionComponent_Conditional_0_Conditional_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.creditoController.cambiarEstado(ctx_r0.credito, "CANCELADO", ctx_r0.comentarios));
    });
    \u0275\u0275text(12, " Confirmar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.comentarios);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r0.comentarios || (ctx_r0.credito.abonos == null ? null : ctx_r0.credito.abonos.length));
  }
}
function PagosCancelacionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, PagosCancelacionComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 1);
    \u0275\u0275conditionalCreate(2, PagosCancelacionComponent_Conditional_0_Conditional_2_Template, 2, 0, "div", 2);
    \u0275\u0275conditionalCreate(3, PagosCancelacionComponent_Conditional_0_Conditional_3_Template, 13, 2, "div", 2);
    \u0275\u0275element(4, "app-view-resumen-credito", 3)(5, "app-view-relacion-abonos", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.credito.estado !== "ACTIVO" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.credito.liberado_fecha ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.credito.estado == "ACTIVO" && !ctx_r0.credito.liberado_fecha ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r0.credito);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r0.credito);
  }
}
var _PagosCancelacionComponent = class _PagosCancelacionComponent {
  constructor(creditoController, route) {
    this.creditoController = creditoController;
    this.route = route;
    this.comentarios = "";
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["credito_id"]) {
        this.setCreditoById(params["credito_id"]);
      }
    }));
  }
  setCreditoById(id) {
    return __async(this, null, function* () {
      this.credito = yield this.creditoController.find(id, ["creditosPagos", "abonos", "abonos.pagosCargasMasivas", "abonos.usuarios", "productosFinancieros.plazos"]);
      console.log(this.credito);
    });
  }
};
_PagosCancelacionComponent.\u0275fac = function PagosCancelacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagosCancelacionComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute));
};
_PagosCancelacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagosCancelacionComponent, selectors: [["app-pagos-cancelacion"]], decls: 1, vars: 1, consts: [[1, "container-fluid", "pt-3"], ["role", "alert", 1, "alert", "alert-info", "sticky-top", "shadow"], ["role", "alert", 1, "alert", "alert-danger", "sticky-top", "shadow"], [3, "credito"], [1, "fw-bold"], [1, "row"], [1, "col"], [1, "form-floating"], ["placeholder", "Deja tus comentarios aqui...", "id", "floatingTextarea2", 1, "form-control", 2, "height", "100px", 3, "ngModelChange", "ngModel"], ["for", "floatingTextarea2"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function PagosCancelacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PagosCancelacionComponent_Conditional_0_Template, 6, 5, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [
  ViewResumenCreditoComponent,
  ViewRelacionAbonosComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var PagosCancelacionComponent = _PagosCancelacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagosCancelacionComponent, [{
    type: Component,
    args: [{ selector: "app-pagos-cancelacion", imports: [
      ViewResumenCreditoComponent,
      ViewRelacionAbonosComponent,
      FormsModule
    ], template: `@if (credito) {
  <div class="container-fluid pt-3">
    @if (credito.estado!=='ACTIVO') {
      <div class="alert alert-info sticky-top shadow" role="alert">
        Este cr\xE9dito se encuentra {{credito.estado}}. No es posible hacer cambios.
      </div>
    }
    @if (credito.liberado_fecha) {
      <div class="alert alert-danger sticky-top shadow" role="alert">
        Este cr\xE9dito ha sido liberado, no se permite cancelar.
      </div>
    }
    @if (credito.estado=='ACTIVO' && !credito.liberado_fecha) {
      <div class="alert alert-danger sticky-top shadow" role="alert">
        <h4 class="fw-bold">\xBFSeguro que deseas cancelar este cr\xE9dito?</h4>
        <div class="row">
          <div class="col">
            <div class="form-floating">
              <textarea class="form-control" placeholder="Deja tus comentarios aqui..." id="floatingTextarea2"
              [(ngModel)]="comentarios" style="height: 100px"></textarea>
              <label for="floatingTextarea2">Raz\xF3n de la cancelaci\xF3n:</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <button class="btn btn-primary"
              (click)="creditoController.cambiarEstado(credito,'CANCELADO', comentarios)"
              [disabled]="!comentarios || credito.abonos?.length">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    }
    <app-view-resumen-credito [credito]="credito" />
    <app-view-relacion-abonos [credito]="credito" />
  </div>
}` }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagosCancelacionComponent, { className: "PagosCancelacionComponent", filePath: "src/app/pagos/pagos-cancelacion/pagos-cancelacion.component.ts", lineNumber: 20 });
})();

// src/app/pagos/pagos-traspaso/pagos-traspaso.component.ts
var _c0 = ["relacionAbonosReceptor"];
function PagosTraspasoComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, " Selecciona un abono para traspasar ");
    \u0275\u0275elementEnd();
  }
}
function PagosTraspasoComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " Este cr\xE9dito no se encuentra ACTIVO, por favor elige otro. ");
    \u0275\u0275elementEnd();
  }
}
function PagosTraspasoComponent_Conditional_0_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "button", 13);
    \u0275\u0275listener("click", function PagosTraspasoComponent_Conditional_0_For_22_Template_button_click_13_listener() {
      const abono_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.abonoAtraspasar = abono_r3);
    });
    \u0275\u0275text(14, "Seleccionar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const abono_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("table-primary", (ctx_r3.abonoAtraspasar == null ? null : ctx_r3.abonoAtraspasar.id) == abono_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", abono_r3.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.utils.fechaFormateada(abono_r3.fecha), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, abono_r3.monto), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", abono_r3.concepto ?? "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", abono_r3.comentarios, " ");
  }
}
function PagosTraspasoComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " Este cr\xE9dito no se encuentra ACTIVO, por favor elige otro. ");
    \u0275\u0275elementEnd();
  }
}
function PagosTraspasoComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, " No puedes traspasar un abono de un cr\xE9dito a si mismo. ");
    \u0275\u0275elementEnd();
  }
}
function PagosTraspasoComponent_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-view-relacion-abonos", 14, 0);
    \u0275\u0275elementStart(2, "div", 15);
    \u0275\u0275text(3, " \xBFEstas seguro que deseas hacer el traspaso? Deja una nota para continuar: ");
    \u0275\u0275elementStart(4, "div", 16)(5, "textarea", 17);
    \u0275\u0275twoWayListener("ngModelChange", function PagosTraspasoComponent_Conditional_0_Conditional_29_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.notaTraspaso, $event) || (ctx_r3.notaTraspaso = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 18);
    \u0275\u0275text(7, "Nota:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 19)(9, "div", 20)(10, "button", 21);
    \u0275\u0275listener("click", function PagosTraspasoComponent_Conditional_0_Conditional_29_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.traspasar());
    });
    \u0275\u0275text(11, " Confirmar Traspaso ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("credito", ctx_r3.creditoReceptor);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.notaTraspaso);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r3.notaTraspaso);
  }
}
function PagosTraspasoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h5", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PagosTraspasoComponent_Conditional_0_Conditional_3_Template, 2, 0, "div", 3);
    \u0275\u0275conditionalCreate(4, PagosTraspasoComponent_Conditional_0_Conditional_4_Template, 2, 0, "div", 4);
    \u0275\u0275elementStart(5, "div", 5)(6, "table", 6)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, " Id ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, " Fecha ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, " Importe ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, " Concepto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, " Nota ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, PagosTraspasoComponent_Conditional_0_For_22_Template, 15, 9, "tr", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(23, "hr", 8);
    \u0275\u0275elementStart(24, "h5", 9);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, PagosTraspasoComponent_Conditional_0_Conditional_26_Template, 2, 0, "div", 4);
    \u0275\u0275conditionalCreate(27, PagosTraspasoComponent_Conditional_0_Conditional_27_Template, 2, 0, "div", 10);
    \u0275\u0275elementStart(28, "app-buscador-creditos", 11);
    \u0275\u0275twoWayListener("creditoChange", function PagosTraspasoComponent_Conditional_0_Template_app_buscador_creditos_creditoChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.creditoReceptor, $event) || (ctx_r3.creditoReceptor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, PagosTraspasoComponent_Conditional_0_Conditional_29_Template, 12, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Desde cr\xE9dito ", ctx_r3.credito.id, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.abonoAtraspasar ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.credito.estado != "ACTIVO" ? 4 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r3.credito.abonos);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Para cr\xE9dito ", ctx_r3.creditoReceptor == null ? null : ctx_r3.creditoReceptor.id, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.creditoReceptor && ctx_r3.creditoReceptor.estado != "ACTIVO" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r3.creditoReceptor == null ? null : ctx_r3.creditoReceptor.id) == ctx_r3.credito.id ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("credito", ctx_r3.creditoReceptor);
    \u0275\u0275property("relations", ctx_r3.relations);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.creditoReceptor ? 29 : -1);
  }
}
var _PagosTraspasoComponent = class _PagosTraspasoComponent {
  constructor(abonoController, creditoController, route, utilsEstadoCuenta, utils) {
    this.abonoController = abonoController;
    this.creditoController = creditoController;
    this.route = route;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.utils = utils;
    this.relations = ["creditosPagos", "abonos", "abonos.pagosCargasMasivas", "abonos.usuarios", "productosFinancieros.plazos", "convenios.conveniosPagos", "estadoCuenta"];
    this.notaTraspaso = "";
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["credito_id"]) {
        this.notaTraspaso = "";
        this.setCreditoById(params["credito_id"]);
      }
    }));
  }
  setCreditoById(id) {
    return __async(this, null, function* () {
      this.credito = yield this.creditoController.find(id, this.relations);
      console.log(this.credito);
    });
  }
  traspasar() {
    return __async(this, null, function* () {
      if (!this.abonoAtraspasar || !this.notaTraspaso || !this.creditoReceptor?.abonos)
        return;
      let nota = "ABONO CREADO POR TRASPASO: " + this.notaTraspaso;
      const res = yield this.abonoController.switch(this.abonoAtraspasar.id, { nota });
      if (res) {
        const nuevoAbono = yield this.abonoController.new(__spreadProps(__spreadValues({}, this.abonoAtraspasar), {
          id: 0,
          credito_id: this.creditoReceptor.id,
          comentarios: nota
        }));
        if (nuevoAbono) {
          this.credito?.abonos?.splice(this.credito.abonos.indexOf(this.abonoAtraspasar), 1);
          this.creditoReceptor.abonos.push(nuevoAbono);
          this.relacionAbonosReceptor?.setData();
          this.utilsEstadoCuenta.calculateEstadoDeCuenta(this.credito, true);
        }
      }
    });
  }
};
_PagosTraspasoComponent.\u0275fac = function PagosTraspasoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagosTraspasoComponent)(\u0275\u0275directiveInject(CreditoAbonoService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(UtilsService));
};
_PagosTraspasoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagosTraspasoComponent, selectors: [["app-pagos-traspaso"]], viewQuery: function PagosTraspasoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.relacionAbonosReceptor = _t.first);
  }
}, decls: 1, vars: 1, consts: [["relacionAbonosReceptor", ""], [1, "container-fluid"], [1, "p-2", "fw-bold", "text-primary"], ["role", "alert", 1, "alert", "alert-info"], ["role", "alert", 1, "alert", "alert-danger"], [1, "table-responsive"], [1, "table", "table-sm", "text-center"], [3, "table-primary"], [1, "mt-5", "border", "border-primary"], [1, "mt-5", "p-2", "fw-bold", "text-secondary"], ["role", "alert", 1, "alert", "alert-warning"], [3, "creditoChange", "credito", "relations"], [1, "text-uppercase"], [1, "btn", "btn-primary", 3, "click"], [3, "credito"], ["role", "alert", 1, "alert", "alert-primary"], [1, "form-floating"], ["placeholder", "Escribe tu nota aqui", "id", "floatingTextarea2", 1, "form-control", 2, "height", "100px", 3, "ngModelChange", "ngModel"], ["for", "floatingTextarea2"], [1, "row", "mt-2"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function PagosTraspasoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PagosTraspasoComponent_Conditional_0_Template, 30, 9, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [
  CurrencyPipe,
  BuscadorCreditosComponent,
  ViewRelacionAbonosComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var PagosTraspasoComponent = _PagosTraspasoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagosTraspasoComponent, [{
    type: Component,
    args: [{ selector: "app-pagos-traspaso", imports: [
      CurrencyPipe,
      BuscadorCreditosComponent,
      ViewRelacionAbonosComponent,
      FormsModule
    ], template: `@if (credito) {
  <div class="container-fluid">
    <h5 class="p-2 fw-bold text-primary">Desde cr\xE9dito {{credito.id}}:</h5>
    @if (!abonoAtraspasar) {
      <div class="alert alert-info" role="alert">
        Selecciona un abono para traspasar
      </div>
    }
    @if (credito.estado!='ACTIVO') {
      <div class="alert alert-danger" role="alert">
        Este cr\xE9dito no se encuentra ACTIVO, por favor elige otro.
      </div>
    }
    <div class="table-responsive">
      <table class="table table-sm text-center">
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Fecha
            </th>
            <th>
              Importe
            </th>
            <th>
              Concepto
            </th>
            <th>
              Nota
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          @for (abono of credito.abonos; track abono) {
            <tr [class.table-primary]="abonoAtraspasar?.id== abono.id">
              <td>
                {{abono.id}}
              </td>
              <td>
                {{utils.fechaFormateada(abono.fecha) }}
              </td>
              <td>
                {{abono.monto | currency}}
              </td>
              <td>
                {{abono.concepto??'N/A'}}
              </td>
              <td class="text-uppercase">
                {{abono.comentarios}}
              </td>
              <td>
                <button class="btn btn-primary" (click)="abonoAtraspasar=abono">Seleccionar</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
    <hr class="mt-5 border border-primary">
    <h5 class="mt-5 p-2 fw-bold text-secondary">Para cr\xE9dito {{creditoReceptor?.id}}:</h5>
    @if (creditoReceptor && creditoReceptor.estado!='ACTIVO') {
      <div class="alert alert-danger" role="alert">
        Este cr\xE9dito no se encuentra ACTIVO, por favor elige otro.
      </div>
    }
    @if (creditoReceptor?.id==credito.id) {
      <div class="alert alert-warning" role="alert">
        No puedes traspasar un abono de un cr\xE9dito a si mismo.
      </div>
    }
    <app-buscador-creditos [(credito)]="creditoReceptor" [relations]="relations" />
    @if (creditoReceptor) {
      <app-view-relacion-abonos #relacionAbonosReceptor [credito]="creditoReceptor" ></app-view-relacion-abonos>
      <div class="alert alert-primary" role="alert">
        \xBFEstas seguro que deseas hacer el traspaso? Deja una nota para continuar:
        <div class="form-floating">
          <textarea class="form-control" placeholder="Escribe tu nota aqui" id="floatingTextarea2" style="height: 100px" [(ngModel)]="notaTraspaso"></textarea>
          <label for="floatingTextarea2">Nota:</label>
        </div>
        <div class="row mt-2">
          <div class="col text-center">
            <button class="btn btn-primary" [disabled]="!notaTraspaso" (click)="traspasar()">
              Confirmar Traspaso
            </button>
          </div>
        </div>
      </div>
    }
  </div>
}` }]
  }], () => [{ type: CreditoAbonoService }, { type: CreditoService }, { type: ActivatedRoute }, { type: UtilsEstadoCuentaService }, { type: UtilsService }], { relacionAbonosReceptor: [{
    type: ViewChild,
    args: ["relacionAbonosReceptor"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagosTraspasoComponent, { className: "PagosTraspasoComponent", filePath: "src/app/pagos/pagos-traspaso/pagos-traspaso.component.ts", lineNumber: 27 });
})();

// src/app/pagos/abono-cancelacion/ventana-pago-credito/ventana-pago-credito.component.ts
var _c02 = ["fileInput"];
var _c1 = (a0) => ({ "collapsed": a0 });
var _c2 = (a0, a1) => ({ "show": a0, "collapse": a1 });
function VentanaPagoCreditoComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Alerta:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Este pago est\xE1 actualmente asociado a un cr\xE9dito que tiene pagado de m\xE1s. ");
    \u0275\u0275elementEnd();
  }
}
function VentanaPagoCreditoComponent_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 11)(2, "div", 12)(3, "div", 27)(4, "span", 28);
    \u0275\u0275text(5, "ID Cr\xE9dito:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27)(9, "span", 28);
    \u0275\u0275text(10, "ID Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 27)(14, "span", 28);
    \u0275\u0275text(15, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 27)(19, "span", 28);
    \u0275\u0275text(20, "Referencia Externa:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 12)(24, "div", 27)(25, "span", 28);
    \u0275\u0275text(26, "Pago Dirigido A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 29);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 27)(30, "span", 28);
    \u0275\u0275text(31, "Producto:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 30)(35, "div", 31)(36, "h2", 32)(37, "button", 33);
    \u0275\u0275listener("click", function VentanaPagoCreditoComponent_Conditional_0_Conditional_43_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.isAccordionOpen = !ctx_r2.isAccordionOpen);
    });
    \u0275\u0275element(38, "i", 34);
    \u0275\u0275text(39, " Detalles del Cr\xE9dito ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 35)(41, "div", 36)(42, "div", 11)(43, "div", 12)(44, "div", 27)(45, "span", 28);
    \u0275\u0275text(46, "Capital:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 27)(51, "span", 28);
    \u0275\u0275text(52, "Fecha Inicio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 27)(56, "span", 28);
    \u0275\u0275text(57, "Fecha T\xE9rmino:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 27)(61, "span", 28);
    \u0275\u0275text(62, "Capital mas inter\xE9s:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 12)(67, "div", 27)(68, "span", 28);
    \u0275\u0275text(69, "Plazo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 27)(73, "span", 28);
    \u0275\u0275text(74, "Meses Mora:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 37);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 27)(78, "span", 28);
    \u0275\u0275text(79, "Saldo Vencido:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 37);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 27)(84, "span", 28);
    \u0275\u0275text(85, "Total abonado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span");
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "currency");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.credito.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.utilsService.idClienteFromCredito(ctx_r2.credito));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.utilsService.nombreClienteFromCredito(ctx_r2.credito));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.credito.referencia_bancaria || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r2.utilsService.esReestructura(ctx_r2.credito.folio) ? "bg-warning text-dark" : "bg-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.utilsService.esReestructura(ctx_r2.credito.folio) ? "REESTRUCTURA" : "CR\xC9DITO PRINCIPAL", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.credito.productos_financieros == null ? null : ctx_r2.credito.productos_financieros.nombre) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c1, !ctx_r2.isAccordionOpen));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(27, _c2, ctx_r2.isAccordionOpen, !ctx_r2.isAccordionOpen));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 17, ctx_r2.credito.monto_autorizado));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.utilsService.fechaFormateada(ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.fecha_inicio));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.utilsService.fechaFormateada(ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.fecha_fin));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 19, ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.monto_total_mas_intereses));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.periodos == null ? null : ctx_r2.credito.estado_cuenta.periodos.length, " periodos");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.cuotas_vencidas) || 0, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 21, ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.saldo_vencido), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 23, ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.monto_total_pagado));
  }
}
function VentanaPagoCreditoComponent_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function VentanaPagoCreditoComponent_Conditional_0_Conditional_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCancelarAbono());
    });
    \u0275\u0275text(1, " Cancelar pago ");
    \u0275\u0275elementEnd();
  }
}
function VentanaPagoCreditoComponent_Conditional_0_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function VentanaPagoCreditoComponent_Conditional_0_Conditional_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCancelarAbono());
    });
    \u0275\u0275text(1, " Restaurar pago ");
    \u0275\u0275elementEnd();
  }
}
function VentanaPagoCreditoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, VentanaPagoCreditoComponent_Conditional_0_Conditional_1_Template, 5, 0, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "h4", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Detalles de Pago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "h5", 9);
    \u0275\u0275text(12, "Detalles del Pago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "span", 14);
    \u0275\u0275text(18, "Monto:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 15);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 13)(23, "span", 14);
    \u0275\u0275text(24, "Referencia:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 12)(28, "div", 13)(29, "span", 14);
    \u0275\u0275text(30, "Registrado por:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 16)(34, "span", 14);
    \u0275\u0275text(35, "Fecha registro:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(38, "div", 7)(39, "div", 8)(40, "h5", 9);
    \u0275\u0275text(41, "Detalles de Cr\xE9dito");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 10);
    \u0275\u0275conditionalCreate(43, VentanaPagoCreditoComponent_Conditional_0_Conditional_43_Template, 89, 30, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 18)(45, "h4", 19)(46, "b");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 20)(49, "label", 21);
    \u0275\u0275text(50, "Motivo o raz\xF3n del cambio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "textarea", 22);
    \u0275\u0275twoWayListener("ngModelChange", function VentanaPagoCreditoComponent_Conditional_0_Template_textarea_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.nota, $event) || (ctx_r2.nota = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 23);
    \u0275\u0275conditionalCreate(53, VentanaPagoCreditoComponent_Conditional_0_Conditional_53_Template, 2, 0, "button", 24)(54, VentanaPagoCreditoComponent_Conditional_0_Conditional_54_Template, 2, 0, "button", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sePagoDeMas() ? 1 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utilsService.fechaFormateada(ctx_r2.abono.fecha), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 10, ctx_r2.abono.monto), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.abono.referencia_pago || "N/A");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r2.abono.usuarios == null ? null : ctx_r2.abono.usuarios.nombre) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.utilsService.fechaFormateada(ctx_r2.abono.created_at));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.credito ? 43 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\xBFSeguro que deseas ", ctx_r2.abono.deleted_at ? "restaurar" : "eliminar", " este abono?");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.nota);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.abono.deleted_at ? 53 : 54);
  }
}
var _VentanaPagoCreditoComponent = class _VentanaPagoCreditoComponent {
  constructor(pagoMasivoController, utilsService) {
    this.pagoMasivoController = pagoMasivoController;
    this.utilsService = utilsService;
    this.abono = {};
    this.cargaMasivaEditChange = new EventEmitter();
    this.eliminarAbono = new EventEmitter();
    this.nota = "";
    this.isAccordionOpen = true;
    this.credito_id = 0;
    this.abono_id = 0;
    this.abonos = [];
  }
  ngOnChanges(changes) {
    if (changes["abono"]) {
      const abono_id = this.abono.id ?? 0;
    }
  }
  onCancelarAbono() {
    this.eliminarAbono.emit({ abono: this.abono, nota: this.nota });
    this.nota = "";
  }
  sePagoDeMas() {
    return (this.credito?.estado_cuenta?.monto_total_pagado ?? 0) > (this.credito?.estado_cuenta?.monto_total_mas_intereses ?? 0) && this.cargaMasivaEdit?.nota !== "MIGRADO";
  }
};
_VentanaPagoCreditoComponent.\u0275fac = function VentanaPagoCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VentanaPagoCreditoComponent)(\u0275\u0275directiveInject(PagoCargaMasivaService), \u0275\u0275directiveInject(UtilsService));
};
_VentanaPagoCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentanaPagoCreditoComponent, selectors: [["app-ventana-pago-credito"]], viewQuery: function VentanaPagoCreditoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, inputs: { cargaMasivaEdit: "cargaMasivaEdit", credito: "credito", abono: "abono" }, outputs: { cargaMasivaEditChange: "cargaMasivaEditChange", eliminarAbono: "eliminarAbono" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "container-fluid", "p-4"], ["role", "alert", 1, "alert", "alert-danger", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0", "text-primary"], [1, "bi", "bi-cash-coin", "me-2"], [1, "badge", "bg-light", "text-dark"], [1, "bi", "bi-calendar", "me-1"], [1, "card", "mb-4", "shadow-sm"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "d-flex", "mb-3"], [1, "fw-bold", "me-2", 2, "min-width", "120px"], [1, "badge", "bg-success", "bg-opacity-10", "text-light", "fs-6"], [1, "d-flex"], [1, "mt-1"], [1, "container", "px-5", "pt-0", "pb-3"], [1, "text-center"], [1, "mt-3"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["placeholder", "Ingresa tu nota o comentario aqui...", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-end", "gap-3", "mt-4"], [1, "btn", "btn-danger"], [1, "btn", "btn-success"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], [1, "d-flex", "mb-2"], [1, "fw-bold", "me-2"], [1, "badge", "pt-1", 3, "ngClass"], ["id", "creditoDetailsAccordion", 1, "accordion", "mt-2"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", 1, "accordion-button", 3, "click", "ngClass"], [1, "bi", "bi-info-circle", "me-2"], [1, "accordion-collapse", 3, "ngClass"], [1, "accordion-body"], [1, "badge", "bg-danger", "bg-opacity-10", "text-light"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"]], template: function VentanaPagoCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VentanaPagoCreditoComponent_Conditional_0_Template, 55, 12, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.abono ? 0 : -1);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  CurrencyPipe,
  ScrollingModule,
  NgClass
], encapsulation: 2 });
var VentanaPagoCreditoComponent = _VentanaPagoCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VentanaPagoCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-ventana-pago-credito", imports: [
      FormsModule,
      CurrencyPipe,
      ScrollingModule,
      NgClass
    ], template: `@if (abono) {
<div class="container-fluid p-4">
  <!-- Alerta peligrosa -->
  @if (sePagoDeMas()) {
  <div class="alert alert-danger mb-4" role="alert">
    <i class="bi bi-exclamation-triangle-fill me-2"></i>
    <strong>Alerta:</strong> Este pago est\xE1 actualmente asociado a un cr\xE9dito que tiene pagado de m\xE1s.
  </div>
  }  
  <!-- Encabezado -->
  <div class="d-flex justify-content-between align-items-center mb-4">
    <h4 class="mb-0 text-primary">
      <i class="bi bi-cash-coin me-2"></i>Detalles de Pago
    </h4>
    <span class="badge bg-light text-dark">
      <i class="bi bi-calendar me-1"></i>
      {{utilsService.fechaFormateada(abono.fecha)}}
    </span>
  </div>
  <!-- Tarjeta de informaci\xF3n del pago -->
  <div class="card mb-4 shadow-sm">
    <div class="card-header bg-light">
      <h5 class="mb-0">Detalles del Pago</h5>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex mb-3">
            <span class="fw-bold me-2" style="min-width: 120px;">Monto:</span>
            <span class="badge bg-success bg-opacity-10 text-light fs-6">
              {{abono.monto| currency}}
            </span>
          </div>
          <div class="d-flex mb-3">
            <span class="fw-bold me-2" style="min-width: 120px;">Referencia:</span>
            <span>{{abono.referencia_pago|| 'N/A'}}</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex mb-3">
            <span class="fw-bold me-2" style="min-width: 120px;">Registrado por:</span>
            <span>{{abono.usuarios?.nombre || "N/A"}}</span>
          </div>
          <div class="d-flex">
            <span class="fw-bold me-2" style="min-width: 120px;">Fecha registro:</span>
            <span>{{utilsService.fechaFormateada(abono.created_at)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Secci\xF3n de selecci\xF3n de cr\xE9dito -->
  <div class="card mb-4 shadow-sm">
    <div class="card-header bg-light">
      <h5 class="mb-0">Detalles de Cr\xE9dito</h5>
    </div>
    <div class="card-body">      
      <!-- Informaci\xF3n del cr\xE9dito seleccionado -->
      @if (credito) {
      <div class="mt-1">
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex mb-2">
              <span class="fw-bold me-2">ID Cr\xE9dito:</span>
              <span>{{credito.id}}</span>              
            </div>

            <div class="d-flex mb-2">
              <span class="fw-bold me-2">ID Cliente:</span>
              <span>{{utilsService.idClienteFromCredito(credito)}}</span>
            </div>

            <div class="d-flex mb-2">
              <span class="fw-bold me-2">Cliente:</span>
              <span>{{utilsService.nombreClienteFromCredito(credito)}}</span>
            </div>
            <div class="d-flex mb-2">
              <span class="fw-bold me-2">Referencia Externa:</span>
              <span>{{credito.referencia_bancaria || 'N/A'}}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex mb-2">
              <span class="fw-bold me-2">Pago Dirigido A:</span>
              <span class="badge pt-1"
                [ngClass]="utilsService.esReestructura(credito.folio) ? 'bg-warning text-dark' : 'bg-primary'">
                {{utilsService.esReestructura(credito.folio) ? 'REESTRUCTURA' : 'CR\xC9DITO PRINCIPAL'}}
              </span>
            </div>
            <div class="d-flex mb-2">
              <span class="fw-bold me-2">Producto:</span>
              <span>{{credito.productos_financieros?.nombre || 'N/A'}}</span>
            </div>
          </div>
        </div>
        <!-- Detalles del cr\xE9dito en acorde\xF3n -->
        <div class="accordion mt-2" id="creditoDetailsAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" [ngClass]="{'collapsed': !isAccordionOpen}"
                (click)="isAccordionOpen = !isAccordionOpen">
                <i class="bi bi-info-circle me-2"></i> Detalles del Cr\xE9dito
              </button>
            </h2>
            <div class="accordion-collapse" [ngClass]="{ 'show' : isAccordionOpen, 'collapse' : !isAccordionOpen }">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Capital:</span>
                      <span>{{credito.monto_autorizado | currency}}</span>
                    </div>
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Fecha Inicio:</span>
                      <span>{{utilsService.fechaFormateada(credito.estado_cuenta?.fecha_inicio)}}</span>
                    </div>
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Fecha T\xE9rmino:</span>
                      <span>{{utilsService.fechaFormateada(credito.estado_cuenta?.fecha_fin)}}</span>
                    </div>
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Capital mas inter\xE9s:</span>
                      <span>{{credito.estado_cuenta?.monto_total_mas_intereses | currency}}</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Plazo:</span>
                      <span>{{credito.estado_cuenta?.periodos?.length}} periodos</span>
                    </div>
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Meses Mora:</span>
                      <span class="badge bg-danger bg-opacity-10 text-light">
                        {{credito.estado_cuenta?.cuotas_vencidas || 0}}
                      </span>
                    </div>
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Saldo Vencido:</span>
                      <span class="badge bg-danger bg-opacity-10 text-light">
                        {{credito.estado_cuenta?.saldo_vencido | currency}}
                      </span>
                    </div>
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Total abonado:</span>
                      <span>{{credito.estado_cuenta?.monto_total_pagado | currency}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>      
      }
    </div>
    <div class="container px-5 pt-0 pb-3">
        <h4 class=text-center><b>\xBFSeguro que deseas {{abono.deleted_at?'restaurar':'eliminar'}} este
            abono?</b></h4>
        <div class="mt-3">
          <label for="exampleFormControlTextarea1" class="form-label">Motivo o raz\xF3n del cambio:</label>
          <textarea placeholder="Ingresa tu nota o comentario aqui..." class="form-control"
            id="exampleFormControlTextarea1" rows="3" 
            [(ngModel)]="nota"></textarea>
        </div>
      </div>
  </div>
  <!-- Botones de acci\xF3n -->
  <div class="d-flex justify-content-end gap-3 mt-4">
    @if(!abono.deleted_at){
      <button class="btn btn-danger" (click)="onCancelarAbono()">
        Cancelar pago
      </button>
    }
    @else {
      <button class="btn btn-success" (click)="onCancelarAbono()">
        Restaurar pago
      </button>
    }    
  </div>
</div>
}` }]
  }], () => [{ type: PagoCargaMasivaService }, { type: UtilsService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], cargaMasivaEdit: [{
    type: Input
  }], credito: [{
    type: Input
  }], abono: [{
    type: Input
  }], cargaMasivaEditChange: [{
    type: Output
  }], eliminarAbono: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentanaPagoCreditoComponent, { className: "VentanaPagoCreditoComponent", filePath: "src/app/pagos/abono-cancelacion/ventana-pago-credito/ventana-pago-credito.component.ts", lineNumber: 26 });
})();

// src/app/pagos/abono-cancelacion/abono-cancelacion.component.ts
var _c03 = ["fileInput"];
function AbonoCancelacionComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 15);
    \u0275\u0275text(2, "Deuda Inicial: ");
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7, "Vencido Desde: ");
    \u0275\u0275elementStart(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, ctx_r1.ultimoEstado.monto_total_mas_intereses));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, ctx_r1.ultimoEstado.vencido_desde, "dd/MM/yyyy"));
  }
}
function AbonoCancelacionComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "span", 16)(2, "span", 16);
    \u0275\u0275elementEnd();
  }
}
function AbonoCancelacionComponent_Conditional_0_For_33_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function AbonoCancelacionComponent_Conditional_0_For_33_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const abonoRow_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirEditorCargaMasiva(abonoRow_r4));
    });
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275elementEnd();
  }
}
function AbonoCancelacionComponent_Conditional_0_For_33_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function AbonoCancelacionComponent_Conditional_0_For_33_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const abonoRow_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirEditorCargaMasiva(abonoRow_r4));
    });
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementEnd();
  }
}
function AbonoCancelacionComponent_Conditional_0_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275conditionalCreate(19, AbonoCancelacionComponent_Conditional_0_For_33_Conditional_19_Template, 2, 0, "button", 17)(20, AbonoCancelacionComponent_Conditional_0_For_33_Conditional_20_Template, 2, 0, "button", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const abonoRow_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(abonoRow_r4.deleted_at ? "text-decoration-line-through table-danger" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, abonoRow_r4.monto));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.utils.fechaFormateada(abonoRow_r4.fecha));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r4.pagos_cargas_masiva_id ? "SI" : "NO");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r4.usuarios == null ? null : abonoRow_r4.usuarios.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r4.concepto ?? "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r4.referencia_pago ?? "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r4.comentarios);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!abonoRow_r4.deleted_at ? 19 : 20);
  }
}
function AbonoCancelacionComponent_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23)(2, "h5", 24)(3, "b");
    \u0275\u0275text(4, "No hay abonos registrados para este cr\xE9dito.");
    \u0275\u0275elementEnd()()()();
  }
}
function AbonoCancelacionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "a", 5);
    \u0275\u0275text(7, "Estado de Cuenta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, AbonoCancelacionComponent_Conditional_0_Conditional_8_Template, 11, 7, "div", 6);
    \u0275\u0275conditionalCreate(9, AbonoCancelacionComponent_Conditional_0_Conditional_9_Template, 3, 0, "div", 7);
    \u0275\u0275elementStart(10, "div", 8)(11, "table", 9)(12, "thead")(13, "tr", 10)(14, "th");
    \u0275\u0275text(15, " ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, " Monto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, " Fecha ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, " Masivo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, " Usuario ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, " Concepto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, " Referencia ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, " Nota ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275repeaterCreate(32, AbonoCancelacionComponent_Conditional_0_For_33_Template, 21, 13, "tr", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(34, AbonoCancelacionComponent_Conditional_0_Conditional_34_Template, 5, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "tfoot")(36, "tr", 10)(37, "td");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td", 12);
    \u0275\u0275text(43, " Liquidar Sin Moratorios: ");
    \u0275\u0275elementStart(44, "b");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "currency");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(47, "app-formulario-flotante", 13);
    \u0275\u0275twoWayListener("showChange", function AbonoCancelacionComponent_Conditional_0_Template_app_formulario_flotante_showChange_47_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showDeleteForm, $event) || (ctx_r1.showDeleteForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(48, "app-ventana-pago-credito", 14);
    \u0275\u0275listener("eliminarAbono", function AbonoCancelacionComponent_Conditional_0_Template_app_ventana_pago_credito_eliminarAbono_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteAbonoDesdePadre($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Abonos del Credito:", ctx_r1.credito_id);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/main/estado-cuenta/" + ctx_r1.credito_id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.ultimoEstado ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.ultimoEstado ? 9 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r1.abonos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.abonos.length === 0 ? 34 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.abonos.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 12, ctx_r1.totalAbonos()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 14, ctx_r1.ultimoEstado == null ? null : ctx_r1.ultimoEstado.total_a_liquidar));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx_r1.showDeleteForm);
    \u0275\u0275advance();
    \u0275\u0275property("abono", ctx_r1.abono)("credito", ctx_r1.credito)("cargaMasivaEdit", ctx_r1.cargaMasivaEdit);
  }
}
var _AbonoCancelacionComponent = class _AbonoCancelacionComponent {
  constructor(abonoController, route, utils, utilsEstadoCuenta, creditoController, cd) {
    this.abonoController = abonoController;
    this.route = route;
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.creditoController = creditoController;
    this.cd = cd;
    this.abonos = [];
    this.abono = {};
    this.showAdd = false;
    this.nota = "";
    this.formExtra = { id: 0 };
    this.showDeleteForm = false;
    this.eliminarAbono = new EventEmitter();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.setCreditoById(id);
      }
    }));
  }
  totalAbonos() {
    return this.abonos.filter((item) => !item.deleted_at).reduce((acc, item) => {
      return acc + item.monto;
    }, 0);
  }
  abrirEditorCargaMasiva(abono) {
    return __async(this, null, function* () {
      this.abono = abono;
      this.cargaMasivaEdit = abono.pagos_cargas_masivas;
      this.showDeleteForm = true;
    });
  }
  deleteAbonoDesdePadre(event) {
    return __async(this, null, function* () {
      yield this.abonoController.switch(event.abono, { nota: event.nota });
      yield this.creditoController.actualizarEstadoCuenta(this.credito_id);
      this.abono = {};
      this.showDeleteForm = false;
    });
  }
  setCreditoById(id) {
    return __async(this, null, function* () {
      this.credito_id = id;
      this.credito = yield this.creditoController.find(id, [
        "creditosPagos",
        "abonos",
        "abonos.pagosCargasMasivas",
        "abonos.usuarios",
        "datosPersonaFisica.datosPersonales",
        "datosPersonasMorales.representanteLegal",
        "productosFinancieros.plazos",
        "estadoCuenta",
        "convenios.conveniosPagos"
      ]);
      this.abonos = this.credito?.abonos ?? [];
      this.cd.detectChanges();
    });
  }
};
_AbonoCancelacionComponent.\u0275fac = function AbonoCancelacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbonoCancelacionComponent)(\u0275\u0275directiveInject(CreditoAbonoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_AbonoCancelacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbonoCancelacionComponent, selectors: [["app-abono-cancelacion"]], viewQuery: function AbonoCancelacionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, outputs: { eliminarAbono: "eliminarAbono" }, decls: 1, vars: 1, consts: [[1, "container-fluid", "pt-3"], [1, "row"], [1, "col", "p-1"], [1, "fw-bold"], [1, "col", "p-1", "text-end"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "row", "justify-content-between", "h5"], [1, "row", "justify-content-between", "h5", "placeholder-glow"], [1, "table-responsive"], [1, "table", "table-sm"], [1, "text-end"], [1, "text-end", 3, "class"], ["colspan", "8"], ["size", "large", 3, "showChange", "show"], [3, "eliminarAbono", "abono", "credito", "cargaMasivaEdit"], [1, "col-auto", "px-3", "py-2"], [1, "placeholder", "col-4"], [1, "btn", "btn-danger", "btn-sm"], [1, "btn", "btn-success", "btn-sm"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["colspan", "10"], [1, "py-5", "text-center"]], template: function AbonoCancelacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AbonoCancelacionComponent_Conditional_0_Template, 49, 16, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [
  RouterLink,
  FormsModule,
  DatePipe,
  CurrencyPipe,
  VentanaPagoCreditoComponent,
  FormularioFlotanteComponent
], encapsulation: 2 });
var AbonoCancelacionComponent = _AbonoCancelacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbonoCancelacionComponent, [{
    type: Component,
    args: [{ selector: "app-abono-cancelacion", imports: [
      RouterLink,
      FormsModule,
      DatePipe,
      CurrencyPipe,
      VentanaPagoCreditoComponent,
      FormularioFlotanteComponent
    ], template: `@if (credito) {
<div class="container-fluid pt-3">    
    <div class="row">
        <div class="col p-1">
            <h5 class="fw-bold">Abonos del Credito:{{credito_id}}</h5>
        </div>
        <div class="col p-1 text-end"><a class="btn btn-secondary"
                [routerLink]="'/main/estado-cuenta/'+credito_id">Estado de Cuenta</a></div>
    </div>
    @if (ultimoEstado) {
    <div class="row justify-content-between h5">
        <div class="col-auto px-3 py-2">Deuda Inicial: <b>{{ultimoEstado.monto_total_mas_intereses|currency}}</b></div>
        <div class="col-auto px-3 py-2">Vencido Desde: <b>{{ultimoEstado.vencido_desde |date:'dd/MM/yyyy'}}</b></div>
    </div>
    }
    @if (!ultimoEstado) {
    <div class="row justify-content-between h5 placeholder-glow">
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
    </div>
    }

    <div class="table-responsive">
        <table class="table table-sm">
            <thead>
                <tr class="text-end">
                    <th>
                        ID
                    </th>
                    <th>
                        Monto
                    </th>
                    <th>
                        Fecha
                    </th>
                    <th>
                        Masivo
                    </th>
                    <th>
                        Usuario
                    </th>
                    <th>
                        Concepto
                    </th>
                    <th>
                        Referencia
                    </th>
                    <th>
                        Nota
                    </th>
                    <th>
                    </th>
                </tr>
            </thead>
            <tbody>
                @for (abonoRow of abonos; track abonoRow) {
                <tr class="text-end" [class]="abonoRow.deleted_at?'text-decoration-line-through table-danger':''">
                    <td>{{abonoRow.id}}</td>
                    <td>{{abonoRow.monto|currency}}</td>                    
                    <td>{{utils.fechaFormateada(abonoRow.fecha)}}</td>
                    <td>{{abonoRow.pagos_cargas_masiva_id?'SI':'NO'}}</td>
                    <td>{{abonoRow.usuarios?.nombre}}</td>
                    <td>{{abonoRow.concepto??'N/A'}}</td>
                    <td>{{abonoRow.referencia_pago??'N/A'}}</td>
                    <td>{{abonoRow.comentarios}}</td>
                    <td>
                        @if (!abonoRow.deleted_at) {
                        <button class="btn btn-danger btn-sm"
                            (click)="abrirEditorCargaMasiva(abonoRow)">
                            <i class="bi bi-trash"></i>
                        </button>
                        }
                        @else{
                            <button class="btn btn-success btn-sm"
                            (click)="abrirEditorCargaMasiva(abonoRow)">
                            <i class="bi bi-arrow-counterclockwise"></i>
                        </button>
                        }
                    </td>
                </tr>
                }
                @if (abonos.length===0) {
                <tr>
                    <td colspan="10">
                        <h5 class="py-5 text-center"><b>No hay abonos registrados para este cr\xE9dito.</b></h5>
                    </td>
                </tr>
                }
            </tbody>
            <tfoot>
                <tr class="text-end">
                    <td>
                        {{abonos.length}}
                    </td>
                    <td>
                        {{totalAbonos()|currency}}
                    </td>
                    <td colspan="8">
                        Liquidar Sin Moratorios: <b>{{ultimoEstado?.total_a_liquidar |currency}}</b>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    <app-formulario-flotante [(show)]="showDeleteForm" size="large">        
            <app-ventana-pago-credito
            [abono]="abono"
            [credito]="credito"          
            [cargaMasivaEdit]="cargaMasivaEdit"          
            (eliminarAbono)="deleteAbonoDesdePadre($event)">
          </app-ventana-pago-credito>        
    </app-formulario-flotante>   
</div>
}
  ` }]
  }], () => [{ type: CreditoAbonoService }, { type: ActivatedRoute }, { type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: CreditoService }, { type: ChangeDetectorRef }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], eliminarAbono: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbonoCancelacionComponent, { className: "AbonoCancelacionComponent", filePath: "src/app/pagos/abono-cancelacion/abono-cancelacion.component.ts", lineNumber: 32 });
})();

// src/app/pagos/main/main.pagos.routes.ts
var mainPagosRoutes = [
  {
    title: "Cancelaci\xF3n de Cr\xE9ditos",
    path: "cancelacion",
    component: PagosCancelacionComponent
  },
  {
    title: "Cancelaci\xF3n de Cr\xE9ditos",
    path: "cancelacion/:credito_id",
    component: PagosCancelacionComponent
  },
  {
    title: "Traspaso de Pagos",
    path: "traspaso",
    component: PagosTraspasoComponent
  },
  {
    title: "Traspaso de Pagos",
    path: "traspaso/:credito_id",
    component: PagosTraspasoComponent
  },
  {
    title: "Abonos",
    path: "abonos",
    component: AbonoComponent
  },
  {
    title: "Abonos",
    path: "abonos/:credito_id",
    component: AbonoComponent
  },
  {
    title: "Cancelaci\xF3n de abonos",
    path: "abono-cancelacion",
    component: AbonoCancelacionComponent
  },
  {
    title: "Cancelaci\xF3n de abonos",
    path: "abono-cancelacion/:credito_id",
    component: AbonoCancelacionComponent
  }
];
export {
  mainPagosRoutes
};
//# sourceMappingURL=chunk-5ESXUFRP.js.map
