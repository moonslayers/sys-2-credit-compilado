import {
  CollapsableComponent
} from "./chunk-VUVNDSSC.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  CurrencyPipe,
  DatePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  Input,
  Pipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/pipes/estado-comprobacion.pipe.ts
var _EstadoComprobacionPipe = class _EstadoComprobacionPipe {
  transform(value, ...args) {
    if (!value)
      return;
    const comprobaciones = value.credito_comprobaciones;
    const comprobacion_total_s2c = value.comprobacion_total_s2c;
    if (this.isReestructurado(value) && comprobacion_total_s2c?.credito_comprobaciones) {
      const todas = [...comprobaciones ?? [], ...comprobacion_total_s2c.credito_comprobaciones];
      const total2 = todas.reduce((acc, item) => acc + +item.monto, 0);
      if (total2 >= comprobacion_total_s2c.capital) {
        return "SI - por comprobar $0.00";
      }
      return "NO - por comprobar " + this.formatCurrency(comprobacion_total_s2c.capital - total2);
    }
    if (!comprobaciones)
      return "NO - por comprobar " + this.formatCurrency(value.monto_autorizado ?? 0);
    const total = comprobaciones.reduce((acc, item) => acc + +item.monto, 0) + 5e-4;
    if (total >= (value.monto_autorizado ?? 0))
      return "SI -  por comprobar $0.00";
    return "NO - por comprobar " + this.formatCurrency((value.monto_autorizado ?? 0) - total);
  }
  isReestructurado(credito) {
    const lastLetter = credito.folio?.slice(-1).toUpperCase();
    const hasActiveConvenios = !!credito.convenios?.some((conv) => conv.estatus === "ACTIVO");
    return lastLetter === "R" || hasActiveConvenios;
  }
  /**
  * Formatea un número como moneda con opciones configurables
  * @param value Valor numérico a formatear
  * @param options Opciones de formato (opcional)
  * @returns Cadena formateada como moneda
  *
  * Ejemplos:
  * formatCurrency(1234567.89) → "$1,234,567.89"
  * formatCurrency(1234567.89, { currency: 'EUR', locale: 'de-DE' }) → "1.234.567,89 €"
  */
  formatCurrency(value, options = {}) {
    const { currency = "USD", locale = "en-US", minimumFractionDigits = 2, maximumFractionDigits = 2 } = options;
    const numericValue = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(numericValue)) {
      console.warn("Valor no num\xE9rico proporcionado a formatCurrency");
      return "NaN";
    }
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits,
      maximumFractionDigits
    }).format(numericValue);
  }
};
_EstadoComprobacionPipe.\u0275fac = function EstadoComprobacionPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadoComprobacionPipe)();
};
_EstadoComprobacionPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "estadocomprobacion", type: _EstadoComprobacionPipe, pure: true });
var EstadoComprobacionPipe = _EstadoComprobacionPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadoComprobacionPipe, [{
    type: Pipe,
    args: [{
      name: "estadocomprobacion",
      standalone: true
    }]
  }], null, null);
})();

// src/app/main/estado-cuenta/shared/view-resumen-credito/view-resumen-credito.component.ts
function ViewResumenCreditoComponent_Conditional_1_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b");
    \u0275\u0275text(1, "(ESTE CREDITO SE ENCONTRABA EN JURIDICO EN S2C)");
    \u0275\u0275elementEnd();
  }
}
function ViewResumenCreditoComponent_Conditional_1_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "Comprobaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "estadocomprobacion");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.credito));
  }
}
function ViewResumenCreditoComponent_Conditional_1_Conditional_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2, "Comprobaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "estadocomprobacion");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, ctx_r0.creditoOriginal));
  }
}
function ViewResumenCreditoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h4", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
    \u0275\u0275text(8, "ID Cr\xE9dito:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
    \u0275\u0275text(13, "Folio Cr\xE9dito:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 7);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 5)(17, "div", 6);
    \u0275\u0275text(18, "Programa:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 7);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 5)(22, "div", 6);
    \u0275\u0275text(23, "Acreditado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 7);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 5)(27, "div", 6);
    \u0275\u0275text(28, "Plazo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 7);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 5)(32, "div", 6);
    \u0275\u0275text(33, "Gracia A Capital:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 7);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 5)(37, "div", 6);
    \u0275\u0275text(38, "Sucursal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 7);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 5)(42, "div", 6);
    \u0275\u0275text(43, "Capital:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 7);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 5)(48, "div", 6);
    \u0275\u0275text(49, "Inter\xE9s Ordinario:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 7);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 5)(54, "div", 6);
    \u0275\u0275text(55, "Fecha Inicio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 7);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 5)(60, "div", 6);
    \u0275\u0275text(61, "Fecha Termino:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 7);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 5)(66, "div", 6);
    \u0275\u0275text(67, "Monto Por Apertura:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 7);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 5)(72, "div", 6);
    \u0275\u0275text(73, "Tasa Anual Ordinaria:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 7);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 5)(77, "div", 6);
    \u0275\u0275text(78, "Tasa Anual Moratoria:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 7);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 5)(82, "div", 6);
    \u0275\u0275text(83, "Origen:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 8);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 9)(87, "div", 5)(88, "div", 6);
    \u0275\u0275text(89, "Cuotas Devengadas:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 7);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 5)(93, "div", 6);
    \u0275\u0275text(94, "Cuotas Restantes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 7);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 5)(98, "div", 6);
    \u0275\u0275text(99, "Mensualidades Vencidas:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 7);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 5)(103, "div", 6);
    \u0275\u0275text(104, "Mensualidades Cubiertas:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 7);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 5)(108, "div", 6);
    \u0275\u0275text(109, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 7)(111, "b");
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(113, ViewResumenCreditoComponent_Conditional_1_Conditional_113_Template, 2, 0, "b");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(114, ViewResumenCreditoComponent_Conditional_1_Conditional_114_Template, 6, 3, "div", 5);
    \u0275\u0275conditionalCreate(115, ViewResumenCreditoComponent_Conditional_1_Conditional_115_Template, 6, 3, "div", 5);
    \u0275\u0275elementStart(116, "div", 5)(117, "div", 6);
    \u0275\u0275text(118, "Monto Total Pagado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "div", 7);
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 5)(123, "div", 6);
    \u0275\u0275text(124, "Saldo Vencido:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 7);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div", 5)(129, "div", 6);
    \u0275\u0275text(130, "Saldo Vigente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "div", 7);
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 5)(135, "div", 6);
    \u0275\u0275text(136, "Estado Convenio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "div", 10);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div", 5)(140, "div", 6);
    \u0275\u0275text(141, "Vencido Desde:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "div", 7);
    \u0275\u0275text(143);
    \u0275\u0275pipe(144, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div", 5)(146, "div", 6);
    \u0275\u0275text(147, "Capital Por Vencer:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "div", 7);
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "div", 5)(152, "div", 6);
    \u0275\u0275text(153, "Inter\xE9s Moratorio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "div", 7);
    \u0275\u0275text(155);
    \u0275\u0275pipe(156, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 5)(158, "div", 6);
    \u0275\u0275text(159, "Adeudo Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "div", 7);
    \u0275\u0275text(161);
    \u0275\u0275pipe(162, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(163, "div", 5)(164, "div", 6);
    \u0275\u0275text(165, "Periodos Fuera de Rango:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "div", 7);
    \u0275\u0275text(167);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Para Liquidar Sin Moratorios : ", \u0275\u0275pipeBind1(3, 33, ctx_r0.estadoCuenta.total_a_liquidar));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.credito.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.credito.folio);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.creditoOriginal == null ? null : ctx_r0.creditoOriginal.productos_financieros == null ? null : ctx_r0.creditoOriginal.productos_financieros.nombre) ?? (ctx_r0.credito.productos_financieros == null ? null : ctx_r0.credito.productos_financieros.nombre));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.acreditado);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", !!(ctx_r0.credito.inversiones_programas == null ? null : ctx_r0.credito.inversiones_programas.plazo_solicitado_meses) ? ctx_r0.credito.inversiones_programas == null ? null : ctx_r0.credito.inversiones_programas.plazo_solicitado_meses : ctx_r0.estadoCuenta.periodos.length, " MESES");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.estadoCuenta.gracia_a_capital, " MESES");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.credito.sucursales == null ? null : ctx_r0.credito.sucursales.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 35, ctx_r0.credito.monto_autorizado));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(52, 37, ctx_r0.estadoCuenta.interes_ordinario), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 39, ctx_r0.estadoCuenta.fecha_inicio, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 42, ctx_r0.estadoCuenta.fecha_fin, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 45, ctx_r0.estadoCuenta.monto_total_mas_intereses));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", (ctx_r0.estadoCuenta.tasa_interes_mensual * 12).toFixed(0), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", 24, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.origenCredito);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta.cuotas_devengadas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta.cuotas_restantes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta.mensualidades_vencidas);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta.mensualidades_cubiertas);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta.credito_status);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.credito.estado_detalle && ctx_r0.credito.estado_detalle.includes("JURIDICO") ? 113 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.esReestructura ? 114 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.esReestructura ? 115 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 47, ctx_r0.estadoCuenta.monto_total_pagado));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(127, 49, ctx_r0.estadoCuenta.saldo_vencido));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 51, ctx_r0.estadoCuenta.saldo_vigente));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta.estado_convenio);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(144, 53, ctx_r0.estadoCuenta.vencido_desde, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(150, 56, ctx_r0.estadoCuenta.capital_por_vencer));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(156, 58, ctx_r0.estadoCuenta.interes_moratorio));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(162, 60, +ctx_r0.estadoCuenta.total_a_liquidar + +ctx_r0.estadoCuenta.interes_moratorio));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta.periodos_fuera_de_rango);
  }
}
var _ViewResumenCreditoComponent = class _ViewResumenCreditoComponent {
  constructor(utils, utilsEstadoCuenta, creditoController) {
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.creditoController = creditoController;
    this.title = "Datos del Cr\xE9dito";
    this.origenCredito = "";
    this.esReestructura = false;
    this.acreditado = "";
  }
  ngOnChanges(changes) {
    if (changes["credito"]) {
      this.setData();
      this.setIsReestructurado();
      this.checkIfIsReestructura();
    }
  }
  checkIfIsReestructura() {
    return __async(this, null, function* () {
      if (this.credito.folio) {
        const folioOriginal = this.utils.folioOriginalFromCredito(this.credito);
        this.creditoOriginal = yield this.creditoController.first({ folio: folioOriginal, deleted_at: null }, ["*"], {}, false);
        this.acreditado = this.utils.nombreClienteFromCredito(this.creditoOriginal);
        console.log("acreditado:", this.acreditado);
        this.credito.credito_comprobaciones = this.creditoOriginal?.credito_comprobaciones;
      }
    });
  }
  setIsReestructurado() {
    const lastLetter = this.credito.folio?.slice(-1).toUpperCase();
    this.esReestructura = lastLetter === "R";
  }
  setData() {
    if (this.useLocal) {
      this.estadoCuenta = this.credito.estado_cuenta;
    } else {
      this.estadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(this.credito);
    }
    this.setOrigen();
  }
  setOrigen() {
    this.origenCredito = "NUEVO CREDITO";
    if (this.credito.folio && this.credito.folio[this.credito.folio.length - 1] == "R") {
      this.origenCredito = "REESTRUCTURA";
    }
    if (this.credito.convenios?.some((conv) => conv.estatus == "ACTIVO")) {
      this.origenCredito = "REESTRUCTURA";
    }
    if (this.credito.convenios?.some((conv) => conv.tipo_convenio == "PAGO")) {
      this.origenCredito = "CONVENIO DE PAGO";
    }
  }
};
_ViewResumenCreditoComponent.\u0275fac = function ViewResumenCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewResumenCreditoComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(CreditoService));
};
_ViewResumenCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewResumenCreditoComponent, selectors: [["app-view-resumen-credito"]], inputs: { credito: "credito", title: "title", useLocal: "useLocal" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "title"], [1, "container-fluid", "p-3"], [1, "fw-bold", "my-2", "text-center"], [1, "row"], [1, "col-12", "col-sm", "border-start", "border-end"], [1, "row", "border-bottom", "py-1"], [1, "col-12", "col-sm", "fw-bold"], [1, "col-12", "col-sm", "text-uppercase"], [1, "col-12", "col-sm", "text-uppercase", "fw-bold"], [1, "col-12", "col-sm", "border-end"], [1, "col-12", "col-sm", "text-uppercase", "fw-bolder"]], template: function ViewResumenCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-collapsable", 0);
    \u0275\u0275conditionalCreate(1, ViewResumenCreditoComponent_Conditional_1_Template, 168, 62, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", ctx.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.estadoCuenta ? 1 : -1);
  }
}, dependencies: [
  CurrencyPipe,
  DatePipe,
  CollapsableComponent,
  EstadoComprobacionPipe
], encapsulation: 2 });
var ViewResumenCreditoComponent = _ViewResumenCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewResumenCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-view-resumen-credito", imports: [
      CurrencyPipe,
      DatePipe,
      CollapsableComponent,
      EstadoComprobacionPipe
    ], template: `<app-collapsable [title]="title">
  @if (estadoCuenta) {
    <div class="container-fluid p-3">
      <h4 class="fw-bold my-2 text-center">Para Liquidar Sin Moratorios : {{(estadoCuenta.total_a_liquidar)| currency}}</h4>
      <div class="row">
        <div class="col-12 col-sm border-start border-end">
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">ID Cr\xE9dito:</div>
            <div class="col-12 col-sm text-uppercase">{{credito.id}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Folio Cr\xE9dito:</div>
            <div class="col-12 col-sm text-uppercase">{{credito.folio}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Programa:</div>
            <div class="col-12 col-sm text-uppercase">{{creditoOriginal?.productos_financieros?.nombre ?? credito.productos_financieros?.nombre}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Acreditado:</div>
            <div class="col-12 col-sm text-uppercase">{{acreditado}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Plazo:</div>
            <div class="col-12 col-sm text-uppercase">{{ !!credito.inversiones_programas?.plazo_solicitado_meses? credito.inversiones_programas?.plazo_solicitado_meses : estadoCuenta.periodos.length }} MESES</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Gracia A Capital:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.gracia_a_capital}} MESES</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Sucursal:</div>
            <div class="col-12 col-sm text-uppercase">{{credito.sucursales?.nombre}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Capital:</div>
            <div class="col-12 col-sm text-uppercase">{{credito.monto_autorizado | currency}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Inter\xE9s Ordinario:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.interes_ordinario|currency}} </div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Fecha Inicio:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.fecha_inicio | date:'dd/MM/yyyy'}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Fecha Termino:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.fecha_fin | date:'dd/MM/yyyy'}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Monto Por Apertura:</div>
            <div class="col-12 col-sm text-uppercase">{{(estadoCuenta.monto_total_mas_intereses) | currency}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Tasa Anual Ordinaria:</div>
            <div class="col-12 col-sm text-uppercase">{{(estadoCuenta.tasa_interes_mensual *12).toFixed(0)}}%</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Tasa Anual Moratoria:</div>
            <div class="col-12 col-sm text-uppercase">{{(24)}}%</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Origen:</div>
            <div class="col-12 col-sm text-uppercase fw-bold">{{origenCredito}}</div>
          </div>
        </div>
        <div class="col-12 col-sm border-end">
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Cuotas Devengadas:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.cuotas_devengadas}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Cuotas Restantes:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.cuotas_restantes}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Mensualidades Vencidas:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.mensualidades_vencidas}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Mensualidades Cubiertas:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.mensualidades_cubiertas}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Status:</div>
            <div class="col-12 col-sm text-uppercase">
              <b>{{estadoCuenta.credito_status}}</b>
              @if (credito.estado_detalle && credito.estado_detalle.includes('JURIDICO')) {
                <b>(ESTE CREDITO SE ENCONTRABA EN JURIDICO EN S2C)</b>
              }
            </div>
          </div>
          @if (!esReestructura) {
            <div class="row border-bottom py-1">
              <div class="col-12 col-sm fw-bold">Comprobaci\xF3n:</div>
              <div class="col-12 col-sm text-uppercase">{{credito | estadocomprobacion}}</div>
            </div>
          }
          @if (esReestructura) {
            <div class="row border-bottom py-1">
              <div class="col-12 col-sm fw-bold">Comprobaci\xF3n:</div>
              <div class="col-12 col-sm text-uppercase">{{creditoOriginal | estadocomprobacion}}</div>
            </div>
          }
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Monto Total Pagado:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.monto_total_pagado | currency}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Saldo Vencido:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.saldo_vencido|currency}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Saldo Vigente:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.saldo_vigente|currency}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Estado Convenio:</div>
            <div class="col-12 col-sm text-uppercase fw-bolder">{{estadoCuenta.estado_convenio}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Vencido Desde:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.vencido_desde | date:'dd/MM/yyyy' }}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Capital Por Vencer:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.capital_por_vencer | currency}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Inter\xE9s Moratorio:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.interes_moratorio | currency}}</div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-12 col-sm fw-bold">Adeudo Total:</div>
            <div class="col-12 col-sm text-uppercase">{{(+estadoCuenta.total_a_liquidar + +estadoCuenta.interes_moratorio) | currency}}</div>
          </div>
          <div class="row border-bottom py-1" >
            <div class="col-12 col-sm fw-bold">Periodos Fuera de Rango:</div>
            <div class="col-12 col-sm text-uppercase">{{estadoCuenta.periodos_fuera_de_rango}}</div>
          </div>
        </div>
      </div>
    </div>
  }
</app-collapsable>
` }]
  }], () => [{ type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: CreditoService }], { credito: [{
    type: Input
  }], title: [{
    type: Input
  }], useLocal: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewResumenCreditoComponent, { className: "ViewResumenCreditoComponent", filePath: "src/app/main/estado-cuenta/shared/view-resumen-credito/view-resumen-credito.component.ts", lineNumber: 21 });
})();

export {
  ViewResumenCreditoComponent
};
//# sourceMappingURL=chunk-PHVA5LMX.js.map
