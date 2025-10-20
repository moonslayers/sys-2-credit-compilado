import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  CurrencyPipe,
  DatePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";

// src/app/main/cotizador/amortizaciones/amortizaciones.component.ts
var _forTrack0 = ($index, $item) => $item.saldo_insoluto;
function AmortizacionesComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 16);
    \u0275\u0275listener("click", function AmortizacionesComponent_Conditional_0_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.amortizacionesChange.emit(void 0));
    });
    \u0275\u0275text(2, " Nueva Cotizacion ");
    \u0275\u0275elementEnd()();
  }
}
function AmortizacionesComponent_Conditional_0_Conditional_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "strong");
    \u0275\u0275text(2, "Inter\xE9s Anual:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.interes_anual, "%");
  }
}
function AmortizacionesComponent_Conditional_0_Conditional_7_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "strong");
    \u0275\u0275text(2, "Inter\xE9s Ordinario:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r1.data.interes_total));
  }
}
function AmortizacionesComponent_Conditional_0_Conditional_7_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "strong");
    \u0275\u0275text(2, " Gastos de cobranza ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r1.data.gastos_judiciales));
  }
}
function AmortizacionesComponent_Conditional_0_Conditional_7_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "strong");
    \u0275\u0275text(2, "Abono Inicial:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, ctx_r1.data.abono_inicial));
  }
}
function AmortizacionesComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h5", 8);
    \u0275\u0275text(5, "Detalles de la Cotizaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "p", 12)(10, "strong");
    \u0275\u0275text(11, "Capital:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, AmortizacionesComponent_Conditional_0_Conditional_7_Conditional_14_Template, 4, 1, "p", 12);
    \u0275\u0275conditionalCreate(15, AmortizacionesComponent_Conditional_0_Conditional_7_Conditional_15_Template, 5, 3, "p", 12);
    \u0275\u0275elementStart(16, "p", 12)(17, "strong");
    \u0275\u0275text(18, "Incluir IVA:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, AmortizacionesComponent_Conditional_0_Conditional_7_Conditional_20_Template, 5, 3, "p", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11)(22, "p", 12)(23, "strong");
    \u0275\u0275text(24, "Plazos:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 12)(27, "strong");
    \u0275\u0275text(28, "Tipo de Plazo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 12)(31, "strong");
    \u0275\u0275text(32, "Fecha de Inicio:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 12)(36, "strong");
    \u0275\u0275text(37, "Tipo de Tasa:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, AmortizacionesComponent_Conditional_0_Conditional_7_Conditional_39_Template, 5, 3, "p", 12);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, ctx_r1.data.capital));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.data.interes_anual ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data.interes_total ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.incluir_iva ? "S\xED" : "No");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data.gastos_judiciales ? 20 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.plazos);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.plazo_tipo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 12, ctx_r1.data.fecha_inicio, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.tipo_tasa);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data.abono_inicial ? 39 : -1);
  }
}
function AmortizacionesComponent_Conditional_0_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Gastos de cobranza");
    \u0275\u0275elementEnd();
  }
}
function AmortizacionesComponent_Conditional_0_For_73_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pago_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, pago_r3.gastos_judiciales));
  }
}
function AmortizacionesComponent_Conditional_0_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, AmortizacionesComponent_Conditional_0_For_73_Conditional_21_Template, 3, 3, "td");
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pago_r3 = ctx.$implicit;
    const \u0275$index_211_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_211_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.utils.fechaFormateada(pago_r3.fecha));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, pago_r3.saldo_insoluto + pago_r3.pago_fijo));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, pago_r3.pago_fijo));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, pago_r3.abono_a_capital));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, pago_r3.interes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, pago_r3.iva));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.amortizaciones.totales.gastos_judiciales ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 19, pago_r3.saldo_insoluto));
  }
}
function AmortizacionesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "div", 2)(3, "h3")(4, "b");
    \u0275\u0275text(5, "Tabla de amortizaciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(6, AmortizacionesComponent_Conditional_0_Conditional_6_Template, 3, 0, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AmortizacionesComponent_Conditional_0_Conditional_7_Template, 40, 15, "div", 4);
    \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "h5", 8);
    \u0275\u0275text(13, "Totales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "p", 12)(18, "strong");
    \u0275\u0275text(19, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 12)(23, "strong");
    \u0275\u0275text(24, "Total a Liquidar:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 12)(28, "strong");
    \u0275\u0275text(29, "Abono a Capital:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 11)(33, "p", 12)(34, "strong");
    \u0275\u0275text(35, "Inter\xE9s:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 12)(39, "strong");
    \u0275\u0275text(40, "IVA:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 12)(44, "strong");
    \u0275\u0275text(45, " Total Gastos de cobranza: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "currency");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(48, "div", 4)(49, "div", 5)(50, "div", 13)(51, "table", 14)(52, "thead", 15)(53, "tr")(54, "th");
    \u0275\u0275text(55, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Saldo Insoluto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th");
    \u0275\u0275text(61, "Pago Fijo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th");
    \u0275\u0275text(63, "Abono a Capital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th");
    \u0275\u0275text(65, "Inter\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th");
    \u0275\u0275text(67, "IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(68, AmortizacionesComponent_Conditional_0_Conditional_68_Template, 2, 0, "th");
    \u0275\u0275elementStart(69, "th");
    \u0275\u0275text(70, "Saldo total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "tbody");
    \u0275\u0275repeaterCreate(72, AmortizacionesComponent_Conditional_0_For_73_Template, 25, 21, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.div);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.showNew ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data ? 7 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 11, ctx_r1.amortizaciones.totales.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 14, ctx_r1.amortizaciones.totales.pago_fijo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 16, ctx_r1.amortizaciones.totales.abono_a_capital));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 18, ctx_r1.amortizaciones.totales.interes));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 20, ctx_r1.amortizaciones.totales.iva));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 22, ctx_r1.amortizaciones.totales.gastos_judiciales));
    \u0275\u0275advance(22);
    \u0275\u0275conditional(ctx_r1.amortizaciones.totales.gastos_judiciales ? 68 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.amortizaciones.lista_pagos);
  }
}
var _AmortizacionesComponent = class _AmortizacionesComponent {
  constructor(utils) {
    this.utils = utils;
    this.div = "container p-3 rounded shadow bg-white my-2";
    this.amortizacionesChange = new EventEmitter();
    this.showNew = true;
    this.showJudiciales = false;
  }
};
_AmortizacionesComponent.\u0275fac = function AmortizacionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AmortizacionesComponent)(\u0275\u0275directiveInject(UtilsService));
};
_AmortizacionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AmortizacionesComponent, selectors: [["app-amortizaciones"]], inputs: { div: "div", amortizaciones: "amortizaciones", data: "data", showNew: "showNew", showJudiciales: "showJudiciales", tipo_convenio: "tipo_convenio" }, outputs: { amortizacionesChange: "amortizacionesChange" }, decls: 1, vars: 1, consts: [[3, "class"], [1, "row", "position-relative"], [1, "col", "text-center", "p-1"], [1, "col-auto", "p-1", "position-absolute", "top-0", "end-0"], [1, "row", "mt-3"], [1, "col"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "card-text"], [1, "table-responsive"], [1, "table", "table-sm", "table-bordered", "table-striped", "text-center"], [1, "thead-dark"], [1, "btn", "btn-secondary", 3, "click"]], template: function AmortizacionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AmortizacionesComponent_Conditional_0_Template, 74, 24, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.amortizaciones ? 0 : -1);
  }
}, dependencies: [
  CurrencyPipe,
  DatePipe
], encapsulation: 2 });
var AmortizacionesComponent = _AmortizacionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmortizacionesComponent, [{
    type: Component,
    args: [{ selector: "app-amortizaciones", imports: [
      CurrencyPipe,
      DatePipe
    ], template: `@if (amortizaciones) {
  <div [class]="div">
    <div class="row position-relative">
      <div class="col text-center p-1">
        <h3><b>Tabla de amortizaciones</b></h3>
      </div>
      @if (showNew) {
        <div class="col-auto p-1 position-absolute top-0 end-0">
          <button class="btn btn-secondary" (click)="amortizacionesChange.emit(undefined)">
            Nueva Cotizacion
          </button>
        </div>
      }
    </div>
    @if (data) {
      <div class="row mt-3">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Detalles de la Cotizaci\xF3n</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <p class="card-text"><strong>Capital:</strong> {{ data.capital | currency }}</p>
                  @if (data.interes_anual) {
                    <p class="card-text"><strong>Inter\xE9s Anual:</strong> {{ data.interes_anual }}%</p>
                  }
                  @if (data.interes_total) {
                    <p class="card-text"><strong>Inter\xE9s Ordinario:</strong> {{ data.interes_total|currency}}</p>
                  }
                  <p class="card-text"><strong>Incluir IVA:</strong> {{ data.incluir_iva ? 'S\xED' : 'No' }}</p>
                  @if (data.gastos_judiciales) {
                    <p class="card-text"><strong>                    
                        Gastos de cobranza                      
                    </strong> {{ data.gastos_judiciales |
                  currency }}</p>
                }
              </div>
              <div class="col-md-6">
                <p class="card-text"><strong>Plazos:</strong> {{ data.plazos }}</p>
                <p class="card-text"><strong>Tipo de Plazo:</strong> {{ data.plazo_tipo }}</p>
                <p class="card-text"><strong>Fecha de Inicio:</strong> {{ data.fecha_inicio|date:'dd/MM/yyyy'
              }}</p>
              <p class="card-text"><strong>Tipo de Tasa:</strong> {{ data.tipo_tasa }}</p>
              @if (data.abono_inicial) {
                <p class="card-text"><strong>Abono Inicial:</strong> {{ data.abono_inicial | currency }}</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
<div class="row mt-3">
  <div class="col">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Totales</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <p class="card-text"><strong>Fecha:</strong> {{ amortizaciones.totales.fecha
          |date:'dd/MM/yyyy' }}</p>
          <p class="card-text"><strong>Total a Liquidar:</strong> {{ amortizaciones.totales.pago_fijo |
        currency }}</p>
        <p class="card-text"><strong>Abono a Capital:</strong> {{
      amortizaciones.totales.abono_a_capital | currency }}</p>
    </div>
    <div class="col-md-6">
      <p class="card-text"><strong>Inter\xE9s:</strong> {{ amortizaciones.totales.interes | currency
    }}</p>
    <p class="card-text"><strong>IVA:</strong> {{ amortizaciones.totales.iva | currency }}</p>
    <p class="card-text"><strong>      
        Total Gastos de cobranza:      
    </strong> {{
  amortizaciones.totales.gastos_judiciales | currency }}</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="row mt-3">
  <div class="col">
    <div class="table-responsive">
      <table class="table table-sm table-bordered table-striped text-center">
        <thead class="thead-dark">
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Saldo Insoluto</th>
            <th>Pago Fijo</th>
            <th>Abono a Capital</th>
            <th>Inter\xE9s</th>
            <th>IVA</th>
            @if (amortizaciones.totales.gastos_judiciales) {
              <th>Gastos de cobranza</th>
            }
            <th>Saldo total</th>
          </tr>
        </thead>
        <tbody>
          @for (pago of amortizaciones.lista_pagos; track pago.saldo_insoluto; let i = $index) {
            <tr>
              <td><b>{{i}}</b></td>
              <td>{{ utils.fechaFormateada(pago.fecha) }}</td>
              <td>{{ (pago.saldo_insoluto + pago.pago_fijo) | currency }}</td>
              <td>{{ pago.pago_fijo | currency }}</td>
              <td>{{ pago.abono_a_capital | currency }}</td>
              <td>{{ pago.interes | currency }}</td>
              <td>{{ pago.iva | currency }}</td>
              @if (amortizaciones.totales.gastos_judiciales) {
                <td >{{ pago.gastos_judiciales | currency }}</td>
              }
              <td>{{ (pago.saldo_insoluto)| currency}}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
}` }]
  }], () => [{ type: UtilsService }], { div: [{
    type: Input
  }], amortizaciones: [{
    type: Input
  }], data: [{
    type: Input
  }], amortizacionesChange: [{
    type: Output
  }], showNew: [{
    type: Input
  }], showJudiciales: [{
    type: Input
  }], tipo_convenio: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AmortizacionesComponent, { className: "AmortizacionesComponent", filePath: "src/app/main/cotizador/amortizaciones/amortizaciones.component.ts", lineNumber: 15 });
})();

export {
  AmortizacionesComponent
};
//# sourceMappingURL=chunk-OZ75JDJE.js.map
