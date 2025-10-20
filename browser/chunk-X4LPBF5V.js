import {
  CreditoPagoService
} from "./chunk-CANKKCBN.js";
import {
  CotizadorService
} from "./chunk-DJKNR32H.js";
import {
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import {
  CurrencyPipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  Input,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/main/estado-cuenta/shared/view-periodos/view-periodos.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.abono.id;
function ViewPeriodosComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 8)(2, "div", 9)(3, "button", 10);
    \u0275\u0275listener("click", function ViewPeriodosComponent_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.regenerarAmortizaciones());
    });
    \u0275\u0275text(4, "Regenerar Amortizaciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "button", 10);
    \u0275\u0275listener("click", function ViewPeriodosComponent_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ajustarRedondeo());
    });
    \u0275\u0275text(7, "Usar Redondeo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9)(9, "button", 10);
    \u0275\u0275listener("click", function ViewPeriodosComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ajustarNoRedondeo());
    });
    \u0275\u0275text(10, "Quitar Redondeo");
    \u0275\u0275elementEnd()()()();
  }
}
function ViewPeriodosComponent_For_42_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 12);
    \u0275\u0275listener("click", function ViewPeriodosComponent_For_42_Conditional_0_Template_tr_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const periodo_r4 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(periodo_r4.isExpanded = !periodo_r4.isExpanded);
    })("dblclick", function ViewPeriodosComponent_For_42_Conditional_0_Template_tr_dblclick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toogleAll());
    });
    \u0275\u0275elementStart(1, "td", 5);
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
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 5);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const periodo_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-primary", periodo_r4.isExpanded);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(periodo_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.utils.fechaFormateada(periodo_r4.fecha));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 18, periodo_r4.saldo_insoluto));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 20, periodo_r4.pago_programado_total));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 22, periodo_r4.pago_total));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 24, periodo_r4.pago_capital));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 26, periodo_r4.pago_interes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 28, periodo_r4.pago_iva));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 30, periodo_r4.saldo_vencido_actual));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-success", periodo_r4.status == "PAGADO")("text-danger", periodo_r4.status == "VENCIDO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(periodo_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 32, periodo_r4.moratorio));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 34, periodo_r4.saldo_actual));
  }
}
function ViewPeriodosComponent_For_42_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Capital pagado por adelantado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5, " Este mes no tiene capital pendiente porque fue cubierto completamente con ");
    \u0275\u0275elementStart(6, "b");
    \u0275\u0275text(7, "adelantos a capital");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " de pagos anteriores. ");
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10, " Para ver el detalle de los abonos aplicados, consulte la tabla de abonos distribuidos. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "button", 20);
    \u0275\u0275elementEnd();
  }
}
function ViewPeriodosComponent_For_42_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, " No hay abonos registrados en este mes. ");
    \u0275\u0275elementEnd();
  }
}
function ViewPeriodosComponent_For_42_Conditional_1_Conditional_5_For_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21)(1, "i", 22);
    \u0275\u0275text(2, " CONDONACI\xD3N");
    \u0275\u0275elementEnd()();
  }
}
function ViewPeriodosComponent_For_42_Conditional_1_Conditional_5_For_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const abono_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", abono_r5.abono.id, " ");
  }
}
function ViewPeriodosComponent_For_42_Conditional_1_Conditional_5_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, ViewPeriodosComponent_For_42_Conditional_1_Conditional_5_For_23_Conditional_2_Template, 3, 0, "span", 21)(3, ViewPeriodosComponent_For_42_Conditional_1_Conditional_5_For_23_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
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
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const abono_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((abono_r5.abono.concepto == null ? null : abono_r5.abono.concepto.includes("CONDONACION")) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.utils.fechaFormateada(abono_r5.abono.fecha), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 9, abono_r5.abono.monto));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 11, abono_r5.pago_capital));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, abono_r5.pago_interes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, abono_r5.pago_iva));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, abono_r5.corriente));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 19, abono_r5.adelantado));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 21, abono_r5.atrasado));
  }
}
function ViewPeriodosComponent_For_42_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 17)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Capital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Interes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Iva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Corriente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Adelantado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Atrasado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, ViewPeriodosComponent_For_42_Conditional_1_Conditional_5_For_23_Template, 27, 23, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const periodo_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(22);
    \u0275\u0275repeater(periodo_r4.abonos);
  }
}
function ViewPeriodosComponent_For_42_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13)(2, "div", 14);
    \u0275\u0275conditionalCreate(3, ViewPeriodosComponent_For_42_Conditional_1_Conditional_3_Template, 12, 0, "div", 15);
    \u0275\u0275conditionalCreate(4, ViewPeriodosComponent_For_42_Conditional_1_Conditional_4_Template, 2, 0, "p", 16);
    \u0275\u0275conditionalCreate(5, ViewPeriodosComponent_For_42_Conditional_1_Conditional_5_Template, 24, 0, "table", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const periodo_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.esPagadoAdelantado(periodo_r4) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(periodo_r4.abonos == null ? null : periodo_r4.abonos.length) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((periodo_r4.abonos == null ? null : periodo_r4.abonos.length) ? 5 : -1);
  }
}
function ViewPeriodosComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ViewPeriodosComponent_For_42_Conditional_0_Template, 34, 36, "tr", 11);
    \u0275\u0275conditionalCreate(1, ViewPeriodosComponent_For_42_Conditional_1_Template, 6, 3, "tr");
  }
  if (rf & 2) {
    const periodo_r4 = ctx.$implicit;
    const \u0275$index_84_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.esElSegundoVigente(\u0275$index_84_r6) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(periodo_r4.isExpanded && !ctx_r1.esElSegundoVigente(\u0275$index_84_r6) ? 1 : -1);
  }
}
var _ViewPeriodosComponent = class _ViewPeriodosComponent {
  constructor(utils, utilsEstadoCuenta, creditoPagoController, localStorage, cotizador) {
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.creditoPagoController = creditoPagoController;
    this.localStorage = localStorage;
    this.cotizador = cotizador;
    this.total_a_liquidar = 0;
    this.periodos = [];
    this.totales = {
      totalCuota: 0,
      totalPago: 0,
      totalCapital: 0,
      totalInteres: 0,
      totalIva: 0
    };
    this.indexPrimerPeriodo = 0;
    this.toogledAll = false;
    if (this.localStorage.isUserLogged()) {
      this.usuario = this.localStorage.getUser();
    }
  }
  regenerarAmortizaciones() {
    return __async(this, null, function* () {
      yield this.limpiarAmortizaciones();
      yield this.crearNuevasAmortizaciones();
    });
  }
  ngOnChanges(changes) {
    if (changes["credito"]) {
      this.setData();
    }
  }
  esPagadoAdelantado(periodo) {
    return periodo.status == "PAGADO" && periodo.abonos?.every((a) => a.adelantado);
  }
  crearNuevasAmortizaciones() {
    const pagos = this.cotizador.pagosResponseFromCredito(this.credito);
    return this.creditoPagoController.multipleNews((pagos.lista_pagos ?? []).map((p) => ({
      credito_id: this.credito?.id,
      fecha: p.fecha,
      pago_fijo: p.pago_fijo,
      abono_a_capital: p.abono_a_capital,
      interes: p.interes,
      iva: p.iva,
      documento_url: ""
    })));
  }
  limpiarAmortizaciones() {
    return __async(this, null, function* () {
      if (!this.credito?.creditos_pagos?.length)
        return;
      return yield this.creditoPagoController.multipleUpdate(this.credito.creditos_pagos.map((p) => __spreadProps(__spreadValues({}, p), {
        deleted_at: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10)
      })));
    });
  }
  ajustarRedondeo() {
    return __async(this, null, function* () {
      const amortizaciones = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(this.credito);
      amortizaciones.forEach((a) => {
        a.pago_fijo = Math.ceil(+a.abono_a_capital + +a.interes + +a.iva);
      });
      const total_redondeado = amortizaciones.reduce((a, b) => a + b.pago_fijo, 0);
      const redondeado = this.estadoCuenta.monto_total_mas_intereses - total_redondeado;
      amortizaciones.at(-1).pago_fijo -= redondeado;
      yield this.creditoPagoController.multipleUpdate(amortizaciones);
      this.credito.estado_cuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(this.credito, true);
      this.setData();
    });
  }
  ajustarNoRedondeo() {
    return __async(this, null, function* () {
      const amortizaciones = this.utilsEstadoCuenta.obtenerAmortizacionesOrdenadas(this.credito);
      amortizaciones.forEach((a) => {
        a.pago_fijo = +a.abono_a_capital + +a.interes + +a.iva;
      });
      yield this.creditoPagoController.multipleUpdate(amortizaciones);
      this.credito.estado_cuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(this.credito, true);
      this.setData();
    });
  }
  setData() {
    if (this.useLocal) {
      this.estadoCuenta = this.credito.estado_cuenta;
      console.log(this.estadoCuenta);
    } else {
      this.estadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(this.credito);
    }
    this.setTotales();
    this.periodos = this.estadoCuenta?.periodos ?? [];
    const primerVigente = this.periodos.find((periodo) => periodo.status == "VIGENTE");
    if (primerVigente) {
      this.indexPrimerPeriodo = this.periodos.indexOf(primerVigente);
    }
    this.total_a_liquidar = this.estadoCuenta?.total_a_liquidar ?? 0;
    console.log(this.periodos);
  }
  esElSegundoVigente(index) {
    return this.periodos[index].status == "VIGENTE" && index !== this.indexPrimerPeriodo;
  }
  setTotales() {
    if (!this.estadoCuenta)
      return;
    this.totales.totalCuota = this.utilsEstadoCuenta.sumarListaByKey("pago_programado_total", this.estadoCuenta.periodos.filter((p) => p.status !== "VIGENTE"));
    this.totales.totalPago = this.estadoCuenta.monto_total_pagado;
    this.totales.totalCapital = this.utilsEstadoCuenta.sumarListaByKey("pago_capital", this.estadoCuenta.periodos);
    this.totales.totalInteres = this.utilsEstadoCuenta.sumarListaByKey("pago_interes", this.estadoCuenta.periodos);
    this.totales.totalIva = this.utilsEstadoCuenta.sumarListaByKey("pago_iva", this.estadoCuenta.periodos);
  }
  toogleAll() {
    this.toogledAll = !this.toogledAll;
    this.estadoCuenta?.periodos.forEach((p) => p.isExpanded = this.toogledAll);
  }
};
_ViewPeriodosComponent.\u0275fac = function ViewPeriodosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewPeriodosComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(CreditoPagoService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(CotizadorService));
};
_ViewPeriodosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPeriodosComponent, selectors: [["app-view-periodos"]], inputs: { credito: "credito", useLocal: "useLocal" }, features: [\u0275\u0275NgOnChangesFeature], decls: 69, vars: 28, consts: [[1, "table-responsive", "py-2"], [1, "container-fluid", "px-3"], [1, "table", "table-bordered", "text-center", "table-sm"], [1, "table-light"], ["colspan", "8"], [1, "fw-bold"], ["colspan", "3"], ["colspan", "1"], [1, "row", "justify-content-end"], [1, "col-auto", "p-1"], [1, "btn", "btn-secondary", 3, "click"], [1, "pointer", "user-select-none", 3, "table-primary"], [1, "pointer", "user-select-none", 3, "click", "dblclick"], ["colspan", "12"], [1, "container-fluid", "p-1", "fs-7"], ["role", "alert", 1, "alert", "alert-info", "alert-dismissible", "fade", "show"], [1, "text-center", "p-1", "text-muted"], [1, "table", "table-sm", "table-secondary", "table-borderless", "fs-7"], [1, "bi", "bi-info-circle", "me-2"], [1, "mb-0"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], ["title", "Condonaci\xF3n", 1, "badge", "bg-primary", "ms-1"], [1, "bi", "bi-info-circle-fill"]], template: function ViewPeriodosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ViewPeriodosComponent_Conditional_1_Template, 11, 0, "div", 1);
    \u0275\u0275elementStart(2, "table", 2)(3, "thead", 3)(4, "tr")(5, "th");
    \u0275\u0275text(6, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Saldo insoluto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Pago programado total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Pago total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Capital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Inter\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Saldo vencido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Moratorio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Saldo capital total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody")(30, "tr")(31, "td");
    \u0275\u0275text(32, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "td");
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "td", 4);
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(41, ViewPeriodosComponent_For_42_Template, 2, 2, null, null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "tfoot")(44, "tr", 5);
    \u0275\u0275element(45, "td", 6);
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "td");
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "td", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.usuario == null ? null : ctx.usuario.id) == 1 ? 1 : -1);
    \u0275\u0275advance(34);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 10, ctx.estadoCuenta == null ? null : ctx.estadoCuenta.monto_total_mas_intereses));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 12, ctx.credito.monto_autorizado));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.periodos);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 14, ctx.totales.totalCuota));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 16, ctx.totales.totalPago));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 18, ctx.totales.totalCapital));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 20, ctx.totales.totalInteres));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 22, ctx.totales.totalIva));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 24, ctx.estadoCuenta == null ? null : ctx.estadoCuenta.saldo_vencido));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 26, ctx.estadoCuenta == null ? null : ctx.estadoCuenta.interes_moratorio));
  }
}, dependencies: [CurrencyPipe], styles: ["\n\n.fs-7[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=view-periodos.component.css.map */"] });
var ViewPeriodosComponent = _ViewPeriodosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPeriodosComponent, [{
    type: Component,
    args: [{ selector: "app-view-periodos", imports: [CurrencyPipe], template: `<div class="table-responsive py-2">
  @if (usuario?.id == 1) {
  <div class="container-fluid px-3">
    <div class="row justify-content-end">
      <div class="col-auto p-1">
        <button class="btn btn-secondary" (click)="regenerarAmortizaciones()">Regenerar Amortizaciones</button>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-secondary" (click)="ajustarRedondeo()">Usar Redondeo</button>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-secondary" (click)="ajustarNoRedondeo()">Quitar Redondeo</button>
      </div>
    </div>
  </div>
  }
  <table class="table table-bordered text-center table-sm">
    <thead class="table-light">
      <tr>
        <th>No.</th>
        <th>Fecha</th>
        <th>Saldo insoluto</th>
        <th>Pago programado total</th>
        <th>Pago total</th>
        <th>Capital</th>
        <th>Inter\xE9s</th>
        <th>IVA</th>
        <th>Saldo vencido</th>
        <th>Status</th>
        <th>Moratorio</th>
        <th>Saldo capital total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0</td>
        <td></td>
        <td>{{estadoCuenta?.monto_total_mas_intereses |currency}}</td>
        <td colspan="8"></td>
        <td>{{credito.monto_autorizado | currency}}</td>
      </tr>
      @for (periodo of periodos; track periodo.id; let i = $index) {
      @if (!esElSegundoVigente(i)) {
      <tr class="pointer user-select-none" [class.table-primary]="periodo.isExpanded"
        (click)="periodo.isExpanded=!periodo.isExpanded" (dblclick)="toogleAll()">
        <td class="fw-bold">{{periodo.id}}</td>
        <td>{{utils.fechaFormateada(periodo.fecha)}}</td>
        <td>{{periodo.saldo_insoluto|currency}}</td>
        <td>{{periodo.pago_programado_total|currency}}</td>
        <td>{{periodo.pago_total|currency}}</td>
        <td>{{periodo.pago_capital|currency}}</td>
        <td>{{periodo.pago_interes|currency}}</td>
        <td>{{periodo.pago_iva|currency}}</td>
        <td>{{periodo.saldo_vencido_actual |currency}}</td>
        <td class="fw-bold" [class.text-success]="periodo.status=='PAGADO'"
          [class.text-danger]="periodo.status=='VENCIDO'">{{periodo.status}}</td>
        <td>{{periodo.moratorio|currency}}</td>
        <td>{{periodo.saldo_actual|currency}}</td>
      </tr>
      }
      @if (periodo.isExpanded && !esElSegundoVigente(i)) {
      <tr>
        <td colspan="12">
          <div class="container-fluid p-1 fs-7">
            @if(esPagadoAdelantado(periodo)){
            <div class="alert alert-info alert-dismissible fade show" role="alert">
              <i class="bi bi-info-circle me-2"></i>
              <strong>Capital pagado por adelantado</strong>
              <p class="mb-0">
                Este mes no tiene capital pendiente porque fue cubierto completamente con <b>adelantos a capital</b> de
                pagos anteriores.
                <br>
                Para ver el detalle de los abonos aplicados, consulte la tabla de abonos distribuidos.
              </p>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            }
            @if (!periodo.abonos?.length) {
            <p class="text-center p-1 text-muted">
              No hay abonos registrados en este mes.
            </p>
            }
            @if (periodo.abonos?.length) {
            <table class="table table-sm table-secondary table-borderless fs-7">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Fecha</th>
                  <th>Monto</th>
                  <th>Capital</th>
                  <th>Interes</th>
                  <th>Iva</th>
                  <th>Corriente</th>
                  <th>Adelantado</th>
                  <th>Atrasado</th>
                </tr>
              </thead>
              <tbody>
                @for (abono of periodo.abonos; track abono.abono.id; let i = $index) {
                <tr>
                  <td>
                    @if (abono.abono.concepto?.includes('CONDONACION')) {
                    <span class="badge bg-primary ms-1" title="Condonaci\xF3n">
                      <i class="bi bi-info-circle-fill"> CONDONACI\xD3N</i>
                    </span>
                    }@else{
                    {{abono.abono.id}}
                    }
                  </td>
                  <td>
                    {{utils.fechaFormateada(abono.abono.fecha)}}
                  </td>
                  <td>{{abono.abono.monto| currency}}</td>
                  <td>{{abono.pago_capital | currency}}</td>
                  <td>{{abono.pago_interes | currency}}</td>
                  <td>{{abono.pago_iva | currency}}</td>
                  <td>{{abono.corriente | currency}}</td>
                  <td>{{abono.adelantado | currency}}</td>
                  <td>{{abono.atrasado | currency}}</td>
                </tr>
                }
              </tbody>
            </table>
            }
          </div>
        </td>
      </tr>
      }
      }
    </tbody>
    <tfoot>
      <tr class="fw-bold">
        <td colspan="3"></td>
        <td>{{totales.totalCuota |currency }}</td>
        <td>{{totales.totalPago|currency}}</td>
        <td>{{totales.totalCapital|currency}}</td>
        <td>{{totales.totalInteres|currency}}</td>
        <td>{{totales.totalIva|currency}}</td>
        <td>{{estadoCuenta?.saldo_vencido|currency}}</td>
        <td></td>
        <td>{{estadoCuenta?.interes_moratorio|currency}}</td>
        <td colspan="1"></td>
      </tr>
    </tfoot>
  </table>
</div>`, styles: ["/* src/app/main/estado-cuenta/shared/view-periodos/view-periodos.component.css */\n.fs-7 {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=view-periodos.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: CreditoPagoService }, { type: LocalStorageService }, { type: CotizadorService }], { credito: [{
    type: Input
  }], useLocal: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPeriodosComponent, { className: "ViewPeriodosComponent", filePath: "src/app/main/estado-cuenta/shared/view-periodos/view-periodos.component.ts", lineNumber: 22 });
})();

export {
  ViewPeriodosComponent
};
//# sourceMappingURL=chunk-X4LPBF5V.js.map
