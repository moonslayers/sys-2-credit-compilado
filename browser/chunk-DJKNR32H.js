import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IR6OZYYD.js";
import {
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/main/cotizador/cotizador.service.ts
var _CotizadorService = class _CotizadorService {
  amortizacionesConfigFromPagosResponse(cotizacion) {
    if (!cotizacion)
      return [];
    const montosUnicos = Array.from(new Set(cotizacion.lista_pagos.map((p) => p.pago_fijo))).filter((p) => p > 0);
    return montosUnicos.map((monto) => {
      return {
        monto,
        meses: cotizacion.lista_pagos.filter((p) => p.pago_fijo == monto).length
      };
    });
  }
  pagosResponseFromCredito(credito) {
    if (!credito || !credito.productos_financieros?.plazos?.length || !credito.inversiones_programas)
      return;
    const plazo = credito.productos_financieros?.plazos?.find((p) => p.plazo_meses == credito.inversiones_programas?.plazo_solicitado_meses);
    const cotizacion = {
      capital: +credito.monto_autorizado,
      interes_anual: plazo.tasa_porcentual,
      incluir_iva: true,
      plazos: credito.inversiones_programas?.plazo_solicitado_meses,
      plazo_tipo: "MENSUAL",
      fecha_inicio: credito.fecha_amortizacion,
      tipo_tasa: "1"
    };
    const pagos = this.calcularAmortizaciones(cotizacion);
    pagos?.lista_pagos.splice(0, 1);
    return pagos;
  }
  /**
   * Calcula las amortizaciones de una cotización
   * @param cotizacion
   * @param amortizacionesConfigs
   * @returns
   */
  calcularAmortizaciones(cotizacion, amortizacionesConfigs = []) {
    if (!cotizacion.fecha_inicio)
      return;
    const lista_pagos = [];
    let fecha = /* @__PURE__ */ new Date(cotizacion.fecha_inicio.substring(0, 10) + "T17:00:00Z");
    const por_mensual = cotizacion.interes_anual / 1200;
    let pagoAnterior = null;
    const totalCapital = cotizacion.capital;
    const totalInteres = cotizacion.interes_total ?? cotizacion.capital * por_mensual * cotizacion.plazos;
    const totalIva = cotizacion.iva_interes_total ?? (cotizacion.incluir_iva ? totalInteres * 0.16 : 0);
    const totalJudiciales = cotizacion.gastos_judiciales ?? 0;
    const total = totalCapital + totalInteres + totalIva + totalJudiciales;
    let totalRedondeado = 0;
    lista_pagos.push({
      fecha: "",
      pago_fijo: 0,
      abono_a_capital: 0,
      interes: 0,
      iva: 0,
      saldo_insoluto: total,
      saldo_soluto: 0,
      gastos_judiciales: 0
    });
    let configIndex = 0;
    let config = amortizacionesConfigs[configIndex];
    config = config ? __spreadValues({}, config) : void 0;
    for (let i = 0; i < cotizacion.plazos; i++) {
      if (config && config.meses == i) {
        configIndex++;
        config = amortizacionesConfigs[configIndex];
        config = __spreadValues({}, config);
        config.meses += i;
      }
      let capital = cotizacion.capital / cotizacion.plazos;
      const interes = totalInteres / cotizacion.plazos;
      const iva = totalIva / cotizacion.plazos;
      const total_sin_gastos_judiciales = cotizacion.capital + totalInteres + totalIva;
      const porcentaje_gastos_judiciales = (cotizacion.gastos_judiciales ?? 0) / total_sin_gastos_judiciales;
      const pago_parcial_sin_gastos = +capital + +interes + +iva;
      const gastos_judiciales = pago_parcial_sin_gastos * porcentaje_gastos_judiciales;
      const capital_config = config ? config.monto - interes - iva - gastos_judiciales : 0;
      capital = config ? +capital_config : +capital;
      const pago_fijo_sin_redondear = +capital + iva + interes + gastos_judiciales;
      const pago_fijo = +pago_fijo_sin_redondear.toFixed(2);
      const centavos_redondeados = pago_fijo_sin_redondear - pago_fijo;
      pagoAnterior = {
        fecha: fecha.toISOString().substring(0, 10),
        pago_fijo: +pago_fijo.toFixed(2),
        abono_a_capital: capital - centavos_redondeados,
        interes,
        iva,
        saldo_insoluto: (pagoAnterior?.saldo_insoluto ?? +total.toFixed(2)) - pago_fijo + centavos_redondeados,
        saldo_soluto: (pagoAnterior?.saldo_soluto ?? (pagoAnterior?.pago_fijo ?? 0)) + pago_fijo - centavos_redondeados,
        gastos_judiciales
      };
      totalRedondeado += pagoAnterior.pago_fijo;
      lista_pagos.push(pagoAnterior);
      fecha = this.sumarUnMes(fecha);
    }
    const pesosRedondeados = totalRedondeado - total;
    lista_pagos.at(-1).pago_fijo = +(lista_pagos.at(-1).pago_fijo - pesosRedondeados).toFixed(2);
    lista_pagos.at(-1).abono_a_capital = +(lista_pagos.at(-1).pago_fijo - lista_pagos.at(-1).iva - lista_pagos.at(-1).interes - lista_pagos.at(-1).gastos_judiciales).toFixed(2);
    lista_pagos.at(-1).saldo_insoluto += +pesosRedondeados.toFixed(2);
    return {
      lista_pagos,
      totales: {
        fecha: cotizacion.fecha_inicio,
        pago_fijo: total,
        abono_a_capital: totalCapital,
        interes: totalInteres,
        iva: totalIva,
        saldo_insoluto: 0,
        saldo_soluto: 0,
        gastos_judiciales: totalJudiciales
      }
    };
  }
  sumarUnMes(date) {
    return new Date(date.getFullYear(), date.getMonth() + 2, 0);
  }
};
_CotizadorService.\u0275fac = function CotizadorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CotizadorService)();
};
_CotizadorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CotizadorService, factory: _CotizadorService.\u0275fac, providedIn: "any" });
var CotizadorService = _CotizadorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CotizadorService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

export {
  CotizadorService
};
//# sourceMappingURL=chunk-DJKNR32H.js.map
