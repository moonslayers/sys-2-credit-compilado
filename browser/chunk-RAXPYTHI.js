import {
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  BehaviorSubject,
  Injectable,
  Injector,
  catchError,
  concatMap,
  firstValueFrom,
  from,
  lastValueFrom,
  map,
  of,
  reduce,
  setClassMetadata,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/estado.cuenta.service.ts
var _EstadoCuentaService = class _EstadoCuentaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "estados_cuentas";
    this.columns = [
      "credito_id",
      "total_a_liquidar",
      "gracia_a_capital",
      "interes_ordinario",
      "tasa_interes_mensual",
      "fecha_inicio",
      "fecha_fin",
      "mensualidades_vencidas",
      "mensualidades_cubiertas",
      "monto_total_pagado",
      "saldo_vencido",
      "saldo_vigente",
      "estado_convenio",
      "vencido_desde",
      "capital_por_vencer",
      "interes_moratorio",
      "monto_total_mas_intereses",
      "periodos_fuera_de_rango",
      "credito_status",
      "cuotas_devengadas",
      "cuotas_restantes",
      "cuotas_pagadas",
      "cuotas_vencidas",
      "periodo_vigente",
      "ultimo_periodo",
      "periodos",
      "fecha_ultimo_pago",
      "monto_ultimo_pago",
      "fecha_primer_mes_vencido",
      "abonos_distribuidos"
    ];
  }
};
_EstadoCuentaService.\u0275fac = function EstadoCuentaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadoCuentaService)(\u0275\u0275inject(Injector));
};
_EstadoCuentaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EstadoCuentaService, factory: _EstadoCuentaService.\u0275fac, providedIn: "any" });
var EstadoCuentaService = _EstadoCuentaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadoCuentaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/estado-cuenta/services/utils-estado-cuenta.service.ts
var _UtilsEstadoCuentaService = class _UtilsEstadoCuentaService {
  constructor(utils, estadoCuentaController) {
    this.utils = utils;
    this.estadoCuentaController = estadoCuentaController;
  }
  calculatePeriodosFromCredito(credito) {
    const amortizaciones = credito?.creditos_pagos ?? [];
    amortizaciones.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    const abonos = credito?.abonos ?? [];
    return this.initializePeriodos(amortizaciones, abonos, credito);
  }
  getEstadoCuentaPrevioAConvenio(credito, date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    if (typeof date == "string") {
      date = new Date(date);
    }
    date.setHours(23, 59, 59);
    const convenioActivo = credito?.convenios?.find((conv) => conv.estatus == "ACTIVO" && new Date(conv.fecha_convenio ?? conv.created_at) <= date);
    if (!convenioActivo) {
      console.warn("NO HAY CONVENIO ACTIVO EN ESTADO CUENTA PREVIO AL CONVENIO");
      return this.calculateEstadoDeCuenta(credito);
    }
    const fechaConvenio = /* @__PURE__ */ new Date((convenioActivo.fecha_convenio ?? convenioActivo.created_at).substring(0, 10) + "T23:59:59Z");
    const creditoOriginal = __spreadProps(__spreadValues({}, credito), {
      convenios: [],
      abonos: credito?.abonos?.filter((a) => /* @__PURE__ */ new Date(a.fecha.substring(0, 10) + "T00:00:01Z") < fechaConvenio)
    });
    return this.calculateEstadoDeCuenta(creditoOriginal, false, fechaConvenio);
  }
  /**
   * necesitas obtener credito con estas relaciones abonos, creditosPagos, productosFinancieros.plazos, inversionesProgramas
   * @param credito
   */
  getEstadoCuentaCliente(credito) {
    if (!credito)
      return;
    const estadoCuenta = this.getEstadoCuenta(credito);
    if (!estadoCuenta)
      return;
    if (estadoCuenta.periodos.length == 0)
      return;
    let ultimoPago = null;
    if (credito.abonos && credito.abonos.length > 0) {
      credito.abonos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
      ultimoPago = credito.abonos[credito.abonos.length - 1];
    }
    return {
      fechaApertura: credito.fecha_amortizacion ?? estadoCuenta.periodos[0].fecha,
      fechaTermino: credito.fecha_amortizacion_ultima ?? estadoCuenta.periodos[estadoCuenta.periodos.length - 1].fecha,
      capital: credito.monto_autorizado ?? 0,
      plazoContratado: estadoCuenta.periodos.length,
      tasaInteresOrdinarioMensual: estadoCuenta.tasa_interes_mensual,
      graciaACapital: estadoCuenta.gracia_a_capital,
      tipoConvenio: estadoCuenta.estado_convenio,
      montoTotalPagado: estadoCuenta.periodos[estadoCuenta.periodos.length - 1].saldo_total,
      liquidarSinMoratorios: estadoCuenta.total_a_liquidar,
      capitalPorVencer: estadoCuenta.periodo_vigente?.saldo_vencido_actual ?? 0,
      tasaMoratoriaMensual: credito.productos_financieros?.interes_moratorio_tasa_mensual ?? 24,
      interesMoratorioTotal: this.sumarListaByKey("moratorio", estadoCuenta.periodos),
      fechaUltimoPago: ultimoPago?.fecha ?? "N/A",
      importeUltimoPago: ultimoPago?.monto ?? 0,
      mensualidadesCubiertas: estadoCuenta.cuotas_pagadas,
      mensualidadesVencidas: estadoCuenta.cuotas_vencidas,
      totalSaldoVencido: estadoCuenta.periodo_vigente?.saldo_vencido ?? estadoCuenta.ultimo_periodo?.saldo_vencido ?? 0,
      totalSaldoVigente: estadoCuenta.saldo_vigente,
      totalPagadoIva: this.sumarListaByKey("pago_iva", estadoCuenta.periodos.filter((p) => p.status == "PAGADO")),
      totalPagadoInteres: this.sumarListaByKey("pago_interes", estadoCuenta.periodos.filter((p) => p.status == "PAGADO")),
      totalPagadoCapital: this.sumarListaByKey("pago_capital", estadoCuenta.periodos),
      abonosDistribuidos: estadoCuenta.abonos_distribuidos,
      periodos: estadoCuenta.periodos
    };
  }
  /**
   * Obtiene el estado de cuenta de un crédito, con soporte para caché local
   * @param credito - Objeto que contiene la información del crédito
   * @returns Estado de cuenta calculado o undefined si no hay datos suficientes
   */
  getEstadoCuenta(credito, save) {
    if (!credito)
      return;
    this.parseEstadoCuenta(credito?.estado_cuenta);
    if (this.isEstadoCuentaVigente(credito) && !save) {
      const estadoCuenta = credito.estado_cuenta;
      estadoCuenta.fecha_inicio = estadoCuenta.fecha_inicio.substring(0, 10);
      estadoCuenta.fecha_fin = estadoCuenta.fecha_fin.substring(0, 10);
      estadoCuenta.vencido_desde = estadoCuenta.vencido_desde ? estadoCuenta.vencido_desde.substring(0, 10) : null;
      return credito?.estado_cuenta;
    }
    if (!this.validarDatosCredito(credito)) {
      console.error("No hay datos suficientes para calcular el estado de cuenta");
      return credito.estado_cuenta;
    }
    console.info("RECALCULANDO ESTADO DE CUENTA");
    const estadoCuentaCalculado = this.calculateEstadoDeCuenta(credito, save);
    if (!estadoCuentaCalculado)
      return void 0;
    return estadoCuentaCalculado;
  }
  /**
   * Determina si el estado de cuenta de un crédito está vigente según diferentes criterios
   *
   * @param credito - Objeto de crédito a evaluar (puede ser undefined)
   * @returns boolean - true si el estado de cuenta está vigente, false en caso contrario
   *
   * Lógica de evaluación:
   * 1. Si no existe estado de cuenta → NO vigente (false)
   * 2. Si no hay período vigente → crédito finalizado → VIGENTE (true)
   * 3. Si la fecha de vigencia es mayor o igual a la actual → VIGENTE (true)
   * 4. Si hay abonos no registrados en el estado de cuenta → VIGENTE (true)
   * 5. Cualquier otro caso → NO vigente (false)
   */
  isEstadoCuentaVigente(credito) {
    const estadoCuenta = credito?.estado_cuenta;
    this.parseEstadoCuenta(estadoCuenta);
    if (!estadoCuenta) {
      console.info("NO EXISTE ESTADO CUENTA");
      return false;
    }
    const periodoVigente = estadoCuenta.periodo_vigente;
    if (periodoVigente && new Date(periodoVigente.fecha.length == 10 ? periodoVigente.fecha + "T17:00:00" : periodoVigente.fecha) < /* @__PURE__ */ new Date()) {
      console.info("NO ES VIGENTE PORQUE LA FECHA DE VIGENCIA ESTA VENCIDA");
      return false;
    }
    if (credito.abonos) {
      const montos = credito.abonos.map((a) => a.monto);
      const montosCalculados = estadoCuenta.abonos_distribuidos?.map((a) => a.abono.monto);
      if (montos.some((monto) => !montosCalculados?.includes(monto)) || montos.length != montosCalculados?.length) {
        console.info("HAY CAMBIOS EN LOS ABONOS");
        return false;
      }
    }
    console.info("NO ES NECESARIO RECALCULAR ESTADO DE CUENTA");
    return true;
  }
  parseEstadoCuenta(estado) {
    if (!estado)
      return;
    const tryParse = (value) => {
      if (typeof value !== "string")
        return value;
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    };
    estado.periodo_vigente = tryParse(estado.periodo_vigente);
    estado.abonos_distribuidos = tryParse(estado.abonos_distribuidos ?? "[]");
    estado.ultimo_periodo = tryParse(estado.ultimo_periodo);
    estado.periodos = tryParse(estado.periodos);
    if (estado.periodo_vigente && typeof estado.periodo_vigente === "object") {
      estado.periodo_vigente = this.ensurePeriodoStructure(estado.periodo_vigente);
    }
    if (estado.ultimo_periodo && typeof estado.ultimo_periodo === "object") {
      estado.ultimo_periodo = this.ensurePeriodoStructure(estado.ultimo_periodo);
    }
    if (Array.isArray(estado.periodos)) {
      estado.periodos = estado.periodos.map((periodo) => typeof periodo === "object" ? this.ensurePeriodoStructure(periodo) : periodo);
    }
  }
  // Helper method to ensure the parsed object matches the Periodo interface
  ensurePeriodoStructure(obj) {
    return {
      id: obj.id || 0,
      fecha: obj.fecha || "",
      saldo_insoluto: obj.saldo_insoluto || 0,
      pago_programado_total: obj.pago_programado_total || 0,
      pago_total: obj.pago_total || 0,
      pago_capital: obj.pago_capital || 0,
      pago_interes: obj.pago_interes || 0,
      pago_iva: obj.pago_iva || 0,
      capital: obj.capital || 0,
      interes: obj.interes || 0,
      iva: obj.iva || 0,
      saldo_vencido: obj.saldo_vencido || 0,
      saldo_vencido_actual: obj.saldo_vencido_actual || 0,
      status: obj.status || "VIGENTE",
      moratorio: obj.moratorio || 0,
      saldo_actual: obj.saldo_actual || 0,
      saldo_total: obj.saldo_total || 0
    };
  }
  // ------------------------- Métodos auxiliares get EstadoCuenta -------------------------
  /**
   * Valida que el crédito tenga los datos necesarios para el cálculo
   */
  validarDatosCredito(credito) {
    return !!credito && !!credito.creditos_pagos?.length && !!credito.id && credito.convenios && credito.abonos;
  }
  /**
   * Calcula el estado de cuenta para un crédito dado
   * @param credito - Objeto que contiene la información del crédito
   * @returns Estado de cuenta calculado o undefined si no hay datos suficientes
   */
  calculateEstadoDeCuenta(credito, save, date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    if (typeof date == "string") {
      date = /* @__PURE__ */ new Date(date.substring(0, 10) + "T17:00:00Z");
    }
    if (credito?.abonos && credito.abonos.length > 0) {
      credito.abonos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    }
    if (!credito || !credito.creditos_pagos)
      return void 0;
    const estadoCuenta = this.estadoCuentaTemplate();
    if (credito.estado_cuenta) {
      estadoCuenta.id = credito.estado_cuenta.id;
    }
    const amortizaciones = this.obtenerAmortizacionesOrdenadas(credito, date);
    const convenioActivo = credito?.convenios?.find((conv) => conv.estatus == "ACTIVO" && new Date(conv.fecha_convenio ?? conv.created_at) <= date);
    const fechaInicio = convenioActivo ? convenioActivo?.fecha_convenio?.substring(0, 10) ?? convenioActivo?.created_at ?? void 0 : void 0;
    date.setHours(23, 59, 59, 59);
    const abonos = credito.abonos?.filter((ab) => /* @__PURE__ */ new Date(ab.fecha.substring(0, 10) + "T17:00:00Z") <= date && (!fechaInicio || /* @__PURE__ */ new Date(ab.fecha.substring(0, 10) + "T17:00:00Z") >= /* @__PURE__ */ new Date(fechaInicio.substring(0, 10) + "T23:59:59Z"))).sort((a, b) => new Date(a.fecha.substring(0, 10)).getTime() - new Date(b.fecha.substring(0, 10)).getTime()) ?? [];
    estadoCuenta.periodos = this.initializePeriodos(amortizaciones, abonos, credito, date);
    const { ultimoPeriodo, primerPeriodo, periodoActual, primerVigente, primerVencido } = this.identificarPeriodosClave(estadoCuenta.periodos);
    const todos = [];
    estadoCuenta.periodos.filter((p) => p.abonos && p.abonos.length).map((p) => p.abonos).forEach((abonos2) => todos.push(...abonos2));
    estadoCuenta.abonos_distribuidos = abonos.map((abono) => {
      const filtrados = todos.filter((a) => a.abono.id == abono.id);
      return {
        abono,
        pago_capital: filtrados.reduce((acc, item) => acc + +item.pago_capital, 0),
        pago_interes: filtrados.reduce((acc, item) => acc + +item.pago_interes, 0),
        pago_iva: filtrados.reduce((acc, item) => acc + +item.pago_iva, 0),
        corriente: filtrados.reduce((acc, item) => acc + +item.corriente, 0),
        adelantado: filtrados.reduce((acc, item) => acc + +item.adelantado, 0),
        atrasado: filtrados.reduce((acc, item) => acc + +item.atrasado, 0),
        periodos_pagados: filtrados.map((a) => a.periodo_id)
      };
    });
    estadoCuenta.periodo_vigente = primerVigente;
    estadoCuenta.ultimo_periodo = ultimoPeriodo;
    estadoCuenta.fecha_primer_mes_vencido = primerVencido?.fecha.substring(0, 10);
    const ultimoPago = estadoCuenta.abonos_distribuidos.at(-1);
    estadoCuenta.monto_ultimo_pago = ultimoPago?.abono.monto;
    estadoCuenta.fecha_ultimo_pago = ultimoPago?.abono.fecha.substring(0, 10);
    this.establecerFechasEstadoCuenta(estadoCuenta, credito, primerPeriodo, ultimoPeriodo);
    this.calcularMetricasBasicas(estadoCuenta, amortizaciones, credito);
    this.calcularMetricasPeriodos(estadoCuenta, periodoActual, primerVigente, credito);
    this.calcularResumenCuotas(estadoCuenta);
    estadoCuenta.credito_status = this.utils.creditoStatus(credito, estadoCuenta, date);
    estadoCuenta.credito_id = credito.id;
    estadoCuenta.id = credito.estado_cuenta?.id;
    if (save) {
      this.estadoCuentaController.createOrUpdate(estadoCuenta);
    }
    return estadoCuenta;
  }
  /**
   * Ordena las amortizaciones por fecha
   */
  obtenerAmortizacionesOrdenadas(credito, date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    date.setHours(23, 59, 59);
    let amortizaciones = [];
    if (credito.creditos_pagos) {
      amortizaciones = [...credito.creditos_pagos];
    }
    const convenioActivo = credito.convenios?.find((conv) => conv.estatus == "ACTIVO" && new Date(conv.fecha_convenio ?? conv.created_at) <= date);
    if (convenioActivo && convenioActivo.convenios_pagos && convenioActivo.convenios_pagos.length) {
      amortizaciones = [...convenioActivo.convenios_pagos.map((p) => ({
        fecha: p.fecha,
        pago_fijo: +(+p.pago_fijo).toFixed(2),
        abono_a_capital: +p.abono_a_capital,
        interes: +p.interes,
        iva: +p.iva,
        gastos_judiciales: p.gastos_judiciales
      }))];
    }
    return amortizaciones.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
  getConvenioActivo(credito, date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    date.setHours(23, 59, 59);
    return credito?.convenios?.find((conv) => conv.estatus == "ACTIVO" && new Date(conv.fecha_convenio ?? conv.created_at) <= date);
  }
  /**
   * Identifica periodos clave para el cálculo
   */
  identificarPeriodosClave(periodos) {
    if (!periodos.length)
      return {
        ultimoPeriodo: null,
        primerPeriodo: null,
        periodoActual: null,
        primerVigente: null,
        primerVencido: null
      };
    const ultimoPeriodo = periodos.length ? periodos[periodos.length - 1] : null;
    const primerPeriodo = periodos[0];
    const primerVigente = periodos.find((periodo) => periodo.status === "VIGENTE") ?? null;
    const primerVencido = periodos.find((periodo) => periodo.status == "VENCIDO") ?? null;
    let periodoActual = null;
    if (primerVigente) {
      const index = periodos.indexOf(primerVigente);
      periodoActual = index > 0 ? periodos[index - 1] : null;
    }
    return {
      ultimoPeriodo,
      primerPeriodo,
      periodoActual,
      primerVigente,
      primerVencido
    };
  }
  /**
   * Establece las fechas de inicio y fin del estado de cuenta
   */
  establecerFechasEstadoCuenta(estadoCuenta, credito, primerPeriodo, ultimoPeriodo) {
    const hasCreditDates = credito.fecha_amortizacion && credito.fecha_amortizacion_ultima;
    const hasPeriodDates = primerPeriodo && ultimoPeriodo;
    if (hasCreditDates) {
      const startDate = new Date(credito.fecha_amortizacion);
      const endDate = new Date(credito.fecha_amortizacion_ultima);
      if (endDate > startDate) {
        estadoCuenta.fecha_inicio = credito.fecha_amortizacion.substring(0, 10);
        estadoCuenta.fecha_fin = credito.fecha_amortizacion_ultima.substring(0, 10);
      } else if (hasPeriodDates) {
        estadoCuenta.fecha_inicio = primerPeriodo.fecha.substring(0, 10);
        estadoCuenta.fecha_fin = ultimoPeriodo.fecha.substring(0, 10);
      }
    } else if (hasPeriodDates) {
      estadoCuenta.fecha_inicio = primerPeriodo.fecha.substring(0, 10);
      estadoCuenta.fecha_fin = ultimoPeriodo.fecha.substring(0, 10);
    }
    if (credito.fecha_convenio) {
      estadoCuenta.fecha_inicio = credito.fecha_convenio.substring(0, 10);
    }
    if (this.utils.esReestructura(credito.folio) && credito.fecha_reestructura) {
      estadoCuenta.fecha_inicio = credito.fecha_reestructura.substring(0, 10);
    }
    estadoCuenta.fecha_fin = ultimoPeriodo?.fecha.substring(0, 10) ?? "n/a";
  }
  /**
   * Calcula métricas básicas del estado de cuenta
   */
  calcularMetricasBasicas(estadoCuenta, amortizaciones, credito) {
    const amortizacionesOriginales = (credito.creditos_pagos ?? []).sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    estadoCuenta.gracia_a_capital = amortizaciones.filter((amor) => amor.abono_a_capital === 0).length;
    estadoCuenta.interes_ordinario = this.sumarListaByKey("interes", amortizacionesOriginales) + this.sumarListaByKey("iva", amortizacionesOriginales);
    if (estadoCuenta.interes_ordinario < 0)
      estadoCuenta.interes_ordinario = 0;
    estadoCuenta.tasa_interes_mensual = this.calcularTasaInteresMensual(amortizaciones, estadoCuenta.gracia_a_capital);
    const plazo = (credito.productos_financieros?.plazos ?? []).find((pl) => pl.plazo_meses == credito.inversiones_programas?.plazo_solicitado_meses);
    if (plazo) {
      estadoCuenta.tasa_interes_mensual = (plazo.tasa_porcentual ?? 0) / 12;
    }
    if (!estadoCuenta.tasa_interes_mensual)
      estadoCuenta.tasa_interes_mensual = 0;
    estadoCuenta.monto_total_mas_intereses = credito.monto_mas_interes ?? +(credito.monto_autorizado ?? 0) + +estadoCuenta.interes_ordinario;
    estadoCuenta.capital_pagado = this.sumarListaByKey("pago_capital", estadoCuenta.abonos_distribuidos ?? []);
  }
  /**
   * Calcula la tasa de interés mensual
   */
  calcularTasaInteresMensual(amortizaciones, graciaACapital) {
    if (amortizaciones.length == 0) {
      return 0;
    }
    if (graciaACapital && amortizaciones.length > graciaACapital) {
      return amortizaciones[graciaACapital].interes / amortizaciones[graciaACapital].abono_a_capital;
    }
    return amortizaciones[0].interes / amortizaciones[0].abono_a_capital;
  }
  /**
   * Calcula métricas relacionadas con los periodos
   */
  calcularMetricasPeriodos(estadoCuenta, periodoActual, primerVigente, credito) {
    const convenio = credito.convenios?.find((conv) => conv.estatus == "ACTIVO");
    let total_convenio = void 0;
    if (convenio) {
      total_convenio = +convenio.capital + +(convenio.interes_ordinario ?? 0) + +(convenio.iva_interes_ordinario ?? 0);
    }
    const ultimoPeriodo = estadoCuenta.periodos[estadoCuenta.periodos.length - 1];
    if (!ultimoPeriodo) {
      console.error(estadoCuenta, credito);
    }
    estadoCuenta.monto_total_pagado = +(estadoCuenta.abonos_distribuidos?.reduce((acc, a) => acc + +a.abono.monto, 0) ?? 0);
    estadoCuenta.total_a_liquidar = (total_convenio ?? credito.monto_mas_interes ?? +(credito.monto_autorizado ?? 0) + +(estadoCuenta.interes_ordinario ?? 0)) - this.sumarListaByKey("monto", (estadoCuenta.abonos_distribuidos ?? []).flatMap((a) => a.abono));
    estadoCuenta.total_a_liquidar = +estadoCuenta.total_a_liquidar.toFixed(4);
    if (estadoCuenta.total_a_liquidar < 0) {
      estadoCuenta.total_a_liquidar = 0;
    }
    estadoCuenta.total_a_liquidar = Math.ceil(estadoCuenta.total_a_liquidar);
    if (estadoCuenta.capital_pagado >= (credito.monto_autorizado ?? 0)) {
      estadoCuenta.total_a_liquidar = 0;
    }
    estadoCuenta.saldo_vencido = periodoActual?.saldo_vencido_actual ?? ultimoPeriodo.saldo_vencido_actual ?? 0;
    estadoCuenta.saldo_vigente = estadoCuenta.total_a_liquidar - estadoCuenta.saldo_vencido;
    if (!estadoCuenta.periodos.some((p) => p.status != "VIGENTE")) {
      estadoCuenta.saldo_vencido = 0;
    }
    if (estadoCuenta.saldo_vencido < 0) {
      estadoCuenta.saldo_vencido = 0;
    }
    if (estadoCuenta.saldo_vigente < 1) {
      estadoCuenta.saldo_vigente = Math.floor(estadoCuenta.saldo_vigente);
    }
    if (estadoCuenta.saldo_vigente < 0) {
      estadoCuenta.saldo_vigente = 0;
    }
    estadoCuenta.estado_convenio = convenio ? convenio.tipo_convenio : "N/A";
    estadoCuenta.capital_por_vencer = (credito.monto_autorizado ?? 0) - this.sumarListaByKey("pago_capital", estadoCuenta.abonos_distribuidos ?? []);
    if (estadoCuenta.capital_por_vencer < 0)
      estadoCuenta.capital_por_vencer = 0;
    estadoCuenta.vencido_desde = estadoCuenta.periodos.find((periodo) => periodo.status === "VENCIDO")?.fecha.substring(0, 10) ?? "";
    estadoCuenta.interes_moratorio = estadoCuenta.periodos.filter((periodo) => periodo.status === "VENCIDO").reduce((acc, item) => acc + item.moratorio, 0);
    if (credito.estado == "FINALIZADO" || estadoCuenta.total_a_liquidar == 0) {
      estadoCuenta.interes_moratorio = 0;
      estadoCuenta.saldo_vencido = 0;
      estadoCuenta.saldo_vigente = 0;
      estadoCuenta.total_a_liquidar = 0;
      estadoCuenta.capital_por_vencer = 0;
    }
  }
  /**
   * Calcula el resumen de cuotas (devengadas, pagadas, vencidas, restantes)
   */
  calcularResumenCuotas(estadoCuenta) {
    estadoCuenta.mensualidades_vencidas = estadoCuenta.periodos.filter((periodo) => periodo.status === "VENCIDO").length;
    estadoCuenta.mensualidades_cubiertas = estadoCuenta.periodos.filter((periodo) => periodo.status === "PAGADO").length;
    estadoCuenta.cuotas_devengadas = estadoCuenta.periodos.filter((periodo) => periodo.status !== "VIGENTE").length;
    estadoCuenta.cuotas_pagadas = estadoCuenta.periodos.filter((periodo) => periodo.status === "PAGADO").length;
    estadoCuenta.cuotas_vencidas = estadoCuenta.periodos.filter((periodo) => periodo.status === "VENCIDO").length;
    estadoCuenta.cuotas_restantes = estadoCuenta.periodos.length - estadoCuenta.cuotas_devengadas;
  }
  initializePeriodos(amortizaciones, abonos, credito, date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    date.setHours(0, 0, 0, 1);
    const periodos = this.setPeriodos(amortizaciones, date);
    const primerPeriodo = periodos[0];
    let totalSaldoInsoluto = +this.sumarListaByKey("pago_fijo", amortizaciones);
    const totalAbonado = this.sumarListaByKey("monto", abonos);
    let saldo = credito?.monto_autorizado || 0;
    primerPeriodo.saldo_insoluto = totalSaldoInsoluto;
    let totalAdelantado = 0;
    this.ordenarAbonosPrimeroCondonaciones(abonos);
    abonos.forEach((abono) => {
      const periodosVencidos = periodos.filter((p) => /* @__PURE__ */ new Date(p.fecha + "T17:00:00Z") < /* @__PURE__ */ new Date(abono.fecha.substring(0, 10) + "T17:00:00Z") && p.status == "VENCIDO");
      const proximoPeriodo = this.getProximoPeriodo(periodos, abono.fecha);
      const actualPeriodo = this.getPeriodoActual(periodos, abono.fecha);
      let temp_abonado = abono.monto;
      periodosVencidos.forEach((p) => {
        if (temp_abonado <= 0)
          return;
        const redondeado = p.pago_programado_total - (p.capital + p.interes + p.iva);
        const distribucion = this.distribuirAbono(p.iva - p.pago_iva, p.interes - p.pago_interes, p.capital - p.pago_capital + redondeado, temp_abonado);
        const totalAbonado2 = distribucion.capitalPagado + distribucion.interesPagado + distribucion.ivaPagado;
        this.addMovimiento(p, {
          abono,
          pago_capital: distribucion.capitalPagado,
          pago_interes: distribucion.interesPagado,
          pago_iva: distribucion.ivaPagado,
          atrasado: totalAbonado2
        });
        totalSaldoInsoluto -= totalAbonado2;
        saldo -= distribucion.capitalPagado;
        p.saldo_actual = saldo;
        p.saldo_insoluto = totalSaldoInsoluto;
        this.setPeriodoStatus(p);
        temp_abonado -= totalAbonado2;
      });
      if (actualPeriodo) {
        if (temp_abonado > 0) {
          const distribucion = this.distribuirAbono(actualPeriodo.iva - actualPeriodo.pago_iva, actualPeriodo.interes - actualPeriodo.pago_interes, actualPeriodo.capital - actualPeriodo.pago_capital, temp_abonado);
          const totalAbonado2 = distribucion.capitalPagado + distribucion.interesPagado + distribucion.ivaPagado;
          const adelantado = distribucion.resto > 0 ? distribucion.resto : 0;
          const dist = this.addMovimiento(actualPeriodo, {
            abono,
            pago_iva: distribucion.ivaPagado,
            pago_interes: distribucion.interesPagado,
            pago_capital: distribucion.capitalPagado + adelantado,
            corriente: totalAbonado2,
            adelantado
          });
          totalAdelantado += adelantado;
          saldo -= distribucion.capitalPagado + adelantado;
          totalSaldoInsoluto -= totalAbonado2 + adelantado;
        }
        actualPeriodo.saldo_actual = saldo;
        actualPeriodo.saldo_insoluto = totalSaldoInsoluto;
        actualPeriodo.pago_total += abono.monto;
        this.setPeriodoStatus(actualPeriodo);
      }
      if (proximoPeriodo) {
        proximoPeriodo.saldo_actual = saldo;
        proximoPeriodo.saldo_insoluto = totalSaldoInsoluto;
      }
    });
    for (const p of periodos.reverse().filter((p2) => p2.status != "PAGADO")) {
      let diferencia = p.capital - totalAdelantado;
      if (totalAbonado <= 0 || totalAdelantado <= 0) {
        totalAdelantado = 0;
        continue;
      }
      ;
      if (diferencia > 0) {
        p.capital = diferencia;
        this.addMovimiento(p, {
          abono: {
            credito_id: 0,
            usuario_id: 0,
            pagos_cargas_masiva_id: null,
            fecha: "n/a",
            monto: totalAdelantado,
            comentarios: "SYSTEM: ADELANTO A CAPITAL",
            concepto: null,
            referencia_pago: null,
            id: 0,
            created_at: ""
          },
          pago_iva: 0,
          pago_interes: 0,
          pago_capital: 0,
          corriente: 0,
          adelantado: diferencia
        });
        totalAdelantado = 0;
      } else {
        totalAdelantado -= p.capital;
        this.addMovimiento(p, {
          abono: {
            credito_id: 0,
            usuario_id: 0,
            pagos_cargas_masiva_id: null,
            fecha: "0000-01-01",
            monto: p.capital,
            comentarios: "SYSTEM: ADELANTO A CAPITAL",
            concepto: null,
            referencia_pago: null,
            id: 0,
            created_at: ""
          },
          pago_iva: 0,
          pago_interes: 0,
          pago_capital: 0,
          corriente: 0,
          adelantado: p.capital
        });
        p.capital = 0;
      }
      p.pago_programado_total = +(+p.capital + +p.iva + +p.interes).toFixed(2);
    }
    ;
    periodos.reverse();
    let vencido = 0;
    periodos.filter((p) => p.status === "VENCIDO").forEach((p) => {
      const totalAbonado2 = p.pago_capital + p.pago_interes + p.pago_iva;
      vencido += p.pago_programado_total - totalAbonado2;
      if (vencido < 0)
        vencido = 0;
      p.saldo_vencido_actual = vencido;
      p.moratorio = p.saldo_vencido_actual * 0.02;
      p.saldo_insoluto = totalSaldoInsoluto;
      p.saldo_actual = saldo;
      if (p.saldo_insoluto <= 0)
        p.status = "PAGADO";
      if (p.status == "PAGADO" || p.status == "VIGENTE") {
        p.moratorio = 0;
        p.saldo_vencido_actual = 0;
      }
    });
    const ultimoSaldoVencido = periodos.filter((p) => p.status === "VENCIDO" && p.capital > 0).at(-1)?.saldo_vencido_actual ?? 0;
    periodos.filter((p) => p.status == "VENCIDO" && p.capital == 0 && p.abonos?.length).forEach((p) => {
      p.status = "PAGADO";
      p.interes = 0;
      p.iva = 0;
      p.pago_programado_total = 0;
      p.saldo_vencido_actual = ultimoSaldoVencido;
    });
    return periodos;
  }
  ordenarAbonosPrimeroCondonaciones(abonos) {
    abonos.filter((a) => a.concepto?.includes("CONDONACION")).forEach((abono) => {
      abono.fecha = abono.fecha.substring(0, 10) + "T00:00:01Z";
    });
    abonos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }
  setPeriodoStatus(p) {
    const pagoTotal = p.pago_capital + p.pago_interes + p.pago_iva;
    p.moratorio = (p.pago_programado_total - pagoTotal) * 0.02;
    if (Math.round(pagoTotal * 100) >= Math.round(p.pago_programado_total * 100) || p.saldo_insoluto == 0) {
      p.status = "PAGADO";
      p.moratorio = 0;
    }
  }
  addMovimiento(periodo, abono) {
    if (!periodo)
      return;
    const movimiento = periodo.abonos?.find((a) => a.abono.id === abono.abono.id);
    const distribuido = __spreadValues({
      abono: abono.abono,
      pago_capital: 0,
      pago_interes: 0,
      pago_iva: 0,
      corriente: 0,
      adelantado: 0,
      atrasado: 0,
      periodo_id: periodo.id
    }, movimiento);
    if (abono.pago_capital) {
      distribuido.pago_capital += abono.pago_capital;
      periodo.pago_capital += abono.pago_capital;
    }
    if (abono.pago_interes) {
      distribuido.pago_interes += abono.pago_interes;
      periodo.pago_interes += abono.pago_interes;
    }
    if (abono.pago_iva) {
      distribuido.pago_iva += abono.pago_iva;
      periodo.pago_iva += abono.pago_iva;
    }
    if (abono.adelantado) {
      distribuido.adelantado += abono.adelantado;
    }
    if (abono.atrasado) {
      distribuido.atrasado += abono.atrasado;
    }
    if (abono.corriente) {
      distribuido.corriente += abono.corriente;
    }
    if (!movimiento) {
      periodo.abonos.push(distribuido);
    }
    return distribuido;
  }
  getProximoPeriodo(periodos, fecha) {
    const currentDate = /* @__PURE__ */ new Date(fecha.substring(0, 10) + "T17:00:00Z");
    return periodos.find((p) => {
      const date = /* @__PURE__ */ new Date(p.fecha.substring(0, 10) + "T17:00:00Z");
      return date.getMonth() == currentDate.getMonth() + 1 && currentDate.getFullYear() == date.getFullYear();
    });
  }
  getPeriodoActual(periodos, fecha) {
    const fechaAbono = /* @__PURE__ */ new Date(fecha.substring(0, 10) + "T17:00:00Z");
    const fechaPrimerPeriodo = /* @__PURE__ */ new Date(periodos[0]?.fecha.substring(0, 10) + "T17:00:00Z");
    let periodo = periodos.find((p) => {
      const date = /* @__PURE__ */ new Date(p.fecha.substring(0, 10) + "T17:00:00Z");
      return date.getMonth() == fechaAbono.getMonth() && fechaAbono.getFullYear() == date.getFullYear();
    });
    if (!periodo && fechaAbono < fechaPrimerPeriodo) {
      return periodos[0];
    }
    return periodo;
  }
  setPeriodos(amortizaciones, date) {
    const periodos = [];
    for (let i = 0; i < amortizaciones.length; i++) {
      const a = amortizaciones[i];
      periodos.push({
        id: i + 1,
        fecha: a.fecha.substring(0, 10),
        saldo_insoluto: 0,
        pago_programado_total: +(+a.abono_a_capital + +a.interes + +a.iva).toFixed(2),
        pago_total: 0,
        pago_capital: 0,
        pago_interes: 0,
        pago_iva: 0,
        capital: +a.abono_a_capital,
        interes: +a.interes,
        iva: +a.iva,
        saldo_vencido: 0,
        saldo_vencido_actual: 0,
        status: date <= /* @__PURE__ */ new Date(a.fecha.substring(0, 10) + "T17:00:00Z") ? "VIGENTE" : "VENCIDO",
        moratorio: 0,
        saldo_actual: 0,
        saldo_total: 0,
        abonos: []
      });
    }
    return periodos;
  }
  descontarAbonoInicialConvenio(convenio, abonos) {
    if (!convenio)
      return;
    if (+(convenio.monto_abono_inicial ?? 0) == 0)
      return;
    const abonoInicialConvenio = +(convenio.monto_abono_inicial ?? 0);
    const abonoInicial = abonos.find((ab) => ab.monto == abonoInicialConvenio && /* @__PURE__ */ new Date(ab.fecha.substring(0, 10) + "T17:00:00Z"));
    if (!abonoInicial) {
      console.error("ABONO INICIAL NO ENCONTRADO");
    }
    if (abonoInicial) {
      const index = abonos.indexOf(abonoInicial);
      abonos.splice(index, 1);
    }
  }
  distribuirAbono(ivaPendiente, interesPendiente, capitalPendiente, totalAbono) {
    let resto = totalAbono;
    let ivaPagado = 0;
    let interesPagado = 0;
    let capitalPagado = 0;
    if (resto > 0 && ivaPendiente > 0) {
      ivaPagado = Math.min(ivaPendiente, resto);
      resto -= ivaPagado;
    }
    if (resto > 0 && interesPendiente > 0) {
      interesPagado = Math.min(interesPendiente, resto);
      resto -= interesPagado;
    }
    if (resto > 0 && capitalPendiente > 0) {
      capitalPagado = Math.min(capitalPendiente, resto);
      resto -= capitalPagado;
    }
    return {
      ivaPagado,
      interesPagado,
      capitalPagado,
      resto
      // Si queda saldo sin aplicar
    };
  }
  distribuirAbonos(credito, date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    if (!credito)
      return [];
    const amortizacionesOriginales = credito.creditos_pagos?.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()) ?? [];
    const convenioActivo = this.getConvenioActivo(credito, date);
    const amortizacionesConvenio = convenioActivo?.convenios_pagos?.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()) ?? [];
    const fechaConvenio = convenioActivo ? new Date(convenioActivo.fecha_convenio || convenioActivo.created_at) : void 0;
    const abonos = credito.abonos ?? [];
    date.setHours(23, 59, 59, 59);
    const abonosFiltradosPrevioAlConvenio = abonos.filter((ab) => /* @__PURE__ */ new Date(ab.fecha.substring(0, 10) + "T12:00:00Z") <= date && (!fechaConvenio || /* @__PURE__ */ new Date(ab.fecha.substring(0, 10) + "T12:00:00Z") < fechaConvenio));
    const abonosFiltradosPostConvenio = abonos.filter((ab) => /* @__PURE__ */ new Date(ab.fecha.substring(0, 10) + "T12:00:00Z") <= date && fechaConvenio && /* @__PURE__ */ new Date(ab.fecha.substring(0, 10) + "T12:00:00Z") >= fechaConvenio);
    const abonosDistribuidosPrevioAlConvenio = this.calculateAbonosDistribuidos(abonosFiltradosPrevioAlConvenio, amortizacionesOriginales, date);
    const abonosDistribuidosConConvenio = this.calculateAbonosDistribuidos(abonosFiltradosPostConvenio, amortizacionesConvenio, date);
    if (convenioActivo)
      return abonosDistribuidosConConvenio;
    return abonosDistribuidosPrevioAlConvenio;
  }
  calculateAbonosDistribuidos(abonos, amortizaciones, date) {
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    date.setHours(23, 59, 59);
    const abonosFiltrados = abonos.filter((ab) => /* @__PURE__ */ new Date(ab.fecha.substring(0, 10) + "T12:00:00Z") <= date);
    const amortizacionesTrackers = amortizaciones.map((amort) => ({
      original: amort,
      paid_interes: 0,
      paid_capital: 0,
      paid_iva: 0
    }));
    return abonosFiltrados.map((abono) => {
      let remaining = abono.monto;
      const distribucion = {
        abono,
        pago_capital: 0,
        pago_interes: 0,
        pago_iva: 0,
        corriente: 0,
        adelantado: 0,
        atrasado: 0,
        periodo_id: 0
        //periodos_pagados: [],
      };
      for (const tracker of amortizacionesTrackers) {
        if (remaining <= 0)
          break;
        const interesPendiente = tracker.original.interes - tracker.paid_interes;
        const capitalPendiente = tracker.original.abono_a_capital - tracker.paid_capital;
        const ivaPendiente = tracker.original.interes * 0.16 - tracker.paid_iva;
        if (interesPendiente > 0) {
          const maxPosibleInteres = Math.min(interesPendiente, remaining / 1.16);
          const interesPagado = Math.min(maxPosibleInteres, interesPendiente);
          const ivaPagado = interesPagado * 0.16;
          distribucion.pago_interes += interesPagado;
          distribucion.pago_iva += ivaPagado;
          tracker.paid_interes += interesPagado;
          tracker.paid_iva += ivaPagado;
          remaining -= interesPagado + ivaPagado;
        }
        if (tracker.paid_interes >= tracker.original.interes && capitalPendiente > 0) {
          const capitalPagado = Math.min(capitalPendiente, remaining);
          distribucion.pago_capital += capitalPagado;
          tracker.paid_capital += capitalPagado;
          remaining -= capitalPagado;
        }
      }
      return distribucion;
    });
  }
  sumarListaByKey(key, list) {
    return list.reduce((acc, item) => acc + +item[key], 0);
  }
  getGastosCobranza(total, tipo) {
    switch (tipo) {
      case "JUDICIAL":
        return total * 0.1;
      case "EXTRAJUDICIAL":
        return total * 0.2;
      default:
        return 0;
    }
  }
  estadoCuentaTemplate() {
    return {
      credito_id: 0,
      total_a_liquidar: 0,
      gracia_a_capital: 0,
      monto_total_mas_intereses: 0,
      interes_ordinario: 0,
      tasa_interes_mensual: 0,
      fecha_inicio: "",
      fecha_fin: "",
      mensualidades_vencidas: 0,
      mensualidades_cubiertas: 0,
      monto_total_pagado: 0,
      saldo_vencido: 0,
      saldo_vigente: 0,
      estado_convenio: "",
      vencido_desde: "",
      capital_pagado: 0,
      capital_por_vencer: 0,
      interes_moratorio: 0,
      periodos_fuera_de_rango: 0,
      credito_status: "CARTERA",
      cuotas_devengadas: 0,
      cuotas_restantes: 0,
      cuotas_pagadas: 0,
      cuotas_vencidas: 0,
      periodo_vigente: null,
      ultimo_periodo: {
        id: 0,
        fecha: "",
        saldo_insoluto: 0,
        pago_programado_total: 0,
        pago_total: 0,
        pago_capital: 0,
        pago_interes: 0,
        pago_iva: 0,
        capital: 0,
        interes: 0,
        iva: 0,
        saldo_vencido: 0,
        saldo_vencido_actual: 0,
        status: "PAGADO",
        moratorio: 0,
        saldo_actual: 0,
        saldo_total: 0
      },
      periodos: []
    };
  }
  /**
   * Calcula el total de abonos que se encuentran entre dos fechas.
   *
   * @param {Date | string} fechaInicio - La fecha de inicio para filtrar los abonos. Puede ser un objeto Date o una cadena de texto.
   * @param {Date | string} fechaFin - La fecha de fin para filtrar los abonos. Puede ser un objeto Date o una cadena de texto.
   * @returns {number} - El total de abonos que se encuentran entre las dos fechas.
   */
  totalAbonosEntreDosFechas(abonos, fechaInicio, fechaFin) {
    if (!abonos || abonos.length === 0) {
      return { saldoAbonadoEnPeriodo: 0, abonosEnPeriodo: [] };
    }
    if (fechaFin?.length == 10) {
      fechaFin += "T17:00:00Z";
    }
    if (fechaInicio?.length == 10) {
      fechaInicio += "T17:00:00Z";
    }
    const fechaInicioDate = fechaInicio ? new Date(fechaInicio) : void 0;
    const fechaFinDate = fechaFin ? new Date(fechaFin) : void 0;
    const abonosFiltrados = abonos.filter((abono) => {
      if (abono.fecha?.length == 10) {
        abono.fecha += "T17:00:00Z";
      }
      const fechaAbono = new Date(abono.fecha);
      if (fechaInicioDate && !fechaFinDate) {
        return fechaAbono.getTime() > fechaInicioDate.getTime();
      }
      if (!fechaInicioDate && fechaFinDate) {
        return fechaAbono.getTime() <= fechaFinDate.getTime();
      }
      if (fechaInicioDate && fechaFinDate) {
        return fechaAbono.getTime() > fechaInicioDate.getTime() && fechaAbono.getTime() <= fechaFinDate.getTime();
      }
      return true;
    });
    const totalAbonado = abonosFiltrados.reduce((total, abono) => total + abono.monto, 0);
    return {
      saldoAbonadoEnPeriodo: totalAbonado,
      abonosEnPeriodo: abonosFiltrados
    };
  }
  mesesEntreDosFechas(fechaInicio, fechaFin) {
    const startDate = new Date(fechaInicio);
    const endDate = new Date(fechaFin);
    const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    const monthsDifference = endDate.getMonth() - startDate.getMonth();
    const totalMonths = yearsDifference * 12 + monthsDifference;
    if (endDate.getDate() < startDate.getDate()) {
      return totalMonths - 1;
    }
    return totalMonths;
  }
  snakeToCamel(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = key.replace(/(_\w)/g, (m) => m[1].toUpperCase());
        newObj[newKey] = this.snakeToCamel(obj[key]);
      }
    }
    return newObj;
  }
  /**
   * Convierte un string de camelCase a snake_case
   * @param str String en camelCase a convertir
   * @returns String en snake_case
   */
  camelToSnake(str) {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  }
  /**
   * Convierte las claves de un objeto de camelCase a snake_case recursivamente
   * @param obj Objeto a convertir
   * @returns Nuevo objeto con claves en snake_case
   */
  camelToSnakeKeys(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    if (obj instanceof Date) {
      return obj;
    }
    const newObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = this.camelToSnake(key);
        newObj[newKey] = this.camelToSnakeKeys(obj[key]);
      }
    }
    return newObj;
  }
};
_UtilsEstadoCuentaService.\u0275fac = function UtilsEstadoCuentaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UtilsEstadoCuentaService)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(EstadoCuentaService));
};
_UtilsEstadoCuentaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UtilsEstadoCuentaService, factory: _UtilsEstadoCuentaService.\u0275fac, providedIn: "any" });
var UtilsEstadoCuentaService = _UtilsEstadoCuentaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilsEstadoCuentaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: EstadoCuentaService }], null);
})();

// src/app/main/reportes/services/fetch-data-generic.service.ts
var _SuperFetchDataService = class _SuperFetchDataService {
  constructor(controller) {
    this.controller = controller;
    this.progressSubject = new BehaviorSubject(0);
    this.progress$ = this.progressSubject.asObservable();
  }
  getAllData(fetchExtra) {
    return this.dataLength(fetchExtra).pipe(switchMap((totalItems) => {
      const chunkSize = fetchExtra?.chunkSize ?? 80;
      const lastChunk = Math.ceil(totalItems / chunkSize);
      let loadedItems = 0;
      const pages = Array.from({ length: lastChunk }, (_, i) => i + 1);
      const paginator = {
        page: 1,
        per_page: chunkSize
      };
      if (!fetchExtra) {
        fetchExtra = {
          relations: ["*"]
        };
      }
      if (fetchExtra && !fetchExtra.relations) {
        fetchExtra.relations = ["*"];
      }
      return from(pages).pipe(
        // Ejecutar cada petición en secuencia
        concatMap((page) => {
          paginator.page = page;
          return this.fetchData(fetchExtra?.conditionals, paginator, fetchExtra?.relations, fetchExtra?.extraData).pipe(tap((data) => {
            loadedItems += data.length;
            this.progressSubject.next(Math.round(loadedItems / totalItems * 100));
          }));
        }),
        // Acumular todos los resultados en un solo array
        reduce((acc, data) => [...acc, ...data], []),
        catchError((error) => {
          console.error("Error loading data:", error);
          return of([]);
        })
      );
    }));
  }
  dataLength(fetchExtra) {
    return from(this.controller.get(fetchExtra?.conditionals, { per_page: 1, page: 1 }, ["creditosDespachos"], __spreadValues({
      sort: JSON.stringify({ column: "id", desc: true })
    }, fetchExtra?.extraData), false)).pipe(map((res) => res.total_items ?? 0), catchError(() => of(0)));
  }
  fetchData(conditionals = void 0, paginator = void 0, relations = void 0, extraData = void 0) {
    return from(this.controller.get(conditionals, paginator, relations, extraData, false)).pipe(map((res) => res.data ?? []), catchError(() => of([])));
  }
  // Método para establecer el controlador
  setController(controller) {
    this.controller = controller;
  }
};
_SuperFetchDataService.\u0275fac = function SuperFetchDataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SuperFetchDataService)(\u0275\u0275inject(SuperService));
};
_SuperFetchDataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SuperFetchDataService, factory: _SuperFetchDataService.\u0275fac, providedIn: "root" });
var SuperFetchDataService = _SuperFetchDataService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperFetchDataService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: SuperService }], null);
})();

// src/app/controllers/credito.service.ts
var _CreditoService = class _CreditoService extends SuperService {
  constructor(injector, dialog, localStorage, estadoCuentaUtils, estadoCuentaController, utils, fetchData) {
    super(injector);
    this.dialog = dialog;
    this.localStorage = localStorage;
    this.estadoCuentaUtils = estadoCuentaUtils;
    this.estadoCuentaController = estadoCuentaController;
    this.utils = utils;
    this.fetchData = fetchData;
    this.model = "creditos";
    this.columns = [
      "id",
      "aval_id",
      "usuario_id",
      "cliente_id",
      "folio",
      "folio_reestructura",
      "productos_financiero_id",
      "sucursal_id",
      "numero_cuenta",
      "clabe_interbancaria",
      "dictaminado_fecha",
      "dictaminado_por",
      "formalizado_fecha",
      "formalizado_por",
      "liberado_fecha",
      "liberado_por",
      "autorizado_fecha",
      "autorizado_por",
      "datos_llenos_fecha",
      "datos_llenos_por",
      "fecha_deposito",
      "fecha_convenio",
      "fecha_pagare",
      "fecha_amortizacion",
      "fecha_amortizacion_ultima",
      "monto_autorizado",
      "fecha_reestructura",
      "referencia_bancaria",
      "deleted_at",
      "created_at",
      "updated_at",
      "monto_mas_interes",
      "estado",
      "estado_detalle",
      "banco",
      "sesion_id",
      "cuota",
      "carta_instruccion_verificacion",
      "cuenta_contable"
    ];
    this.fetchData.setController(this);
    this.actualizarEstadosCuentasVencidos();
  }
  actualizarEstadosCuentasVencidos() {
    return __async(this, null, function* () {
      const ids = yield this.creditosParaActualizarEstadoCuenta();
      console.info("Creditos con estado cuenta vencido:", ids);
      if (ids.length) {
        console.info("Actualizando estados de cuenta");
        this.actualizarEstadosCuentaMasiva(ids);
      }
    });
  }
  creditosParaActualizarEstadoCuenta() {
    return __async(this, null, function* () {
      return (yield firstValueFrom(this.api.get(this.url() + "-vencidos", {}, false))).data ?? [];
    });
  }
  actualizarEstadosCuentaMasiva(creditos) {
    return __async(this, null, function* () {
      const creditosData = yield this.loadCreditos(creditos);
      const estadosCuenta = [];
      for (const credito of creditosData) {
        estadosCuenta.push(this.estadoCuentaUtils.calculateEstadoDeCuenta(credito));
      }
      yield this.updateInChunks(estadosCuenta);
    });
  }
  actualizarEstadosCuentaMasivaLocal(creditos) {
    return __async(this, null, function* () {
      const creditosData = creditos;
      const estadosCuenta = [];
      for (const credito of creditosData) {
        estadosCuenta.push(this.estadoCuentaUtils.calculateEstadoDeCuenta(credito));
      }
      yield this.updateInChunks(estadosCuenta);
    });
  }
  updateInChunks(estadosCuenta, chunkSize = 100) {
    return __async(this, null, function* () {
      for (let i = 0; i < estadosCuenta.length; i += chunkSize) {
        const chunk = estadosCuenta.slice(i, i + chunkSize);
        const res = yield this.estadoCuentaController.multipleUpdate(chunk, false, false);
        if (!res) {
          console.error("error al actualizar: ", chunk);
          return;
        }
      }
    });
  }
  verificarCartaInstruccion(credito) {
    return __async(this, null, function* () {
      if (!credito)
        return;
      const fechaVerificacion = credito.carta_instruccion_verificacion ? null : (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").split(".")[0];
      const res = yield this.update(credito.id, { carta_instruccion_verificacion: fechaVerificacion }, false);
      if (res.status) {
        credito.carta_instruccion_verificacion = fechaVerificacion;
      }
      return res.status;
    });
  }
  creditoOriginalFromReestructuradoS2c(_0) {
    return __async(this, arguments, function* (credito, relations = ["*"]) {
      if (!credito?.folio)
        return;
      if (!this.utils.esReestructura(credito.folio))
        return;
      const folioOriginal = this.utils.folioOriginalFromCredito(credito);
      return this.first({ folio: folioOriginal, deleted_at: null }, relations);
    });
  }
  loadCreditos(creditos) {
    return __async(this, null, function* () {
      const request$ = this.fetchData.getAllData({
        conditionals: [{
          key: "id",
          operator: "IN",
          value: creditos.join(",")
        }],
        relations: [
          "convenios.conveniosPagos",
          "creditosPagos",
          "abonos",
          "productosFinancieros.plazos",
          "estadoCuenta",
          "creditoComprobaciones",
          "comprobacionTotalS2c.creditoComprobaciones",
          "juridicos",
          "creditosDespachos.despachos"
        ],
        chunkSize: 50
      });
      return yield lastValueFrom(request$).catch(() => []);
    });
  }
  actualizarEstadoCuenta(creditoData) {
    return __async(this, null, function* () {
      if (!creditoData)
        return;
      const credito_id = typeof creditoData == "number" ? creditoData : creditoData.id;
      const credito = yield this.find(credito_id, [
        "convenios.conveniosPagos",
        "creditosPagos",
        "abonos",
        "productosFinancieros.plazos",
        "estadoCuenta",
        "creditoComprobaciones",
        "comprobacionTotalS2c.creditoComprobaciones",
        "juridicos",
        "creditosDespachos.despachos"
      ]);
      this.estadoCuentaUtils.calculateEstadoDeCuenta(credito, true);
    });
  }
  find(id, ...params) {
    return __async(this, null, function* () {
      const url = this.url() + "/" + id.toString();
      const superOption = params.find((p) => this.isSuperServiceOptions(p));
      const relations = params.find((p) => this.isStringArray(p)) ?? superOption?.relations;
      const queryParams = this.queryParamsFromSuperServiceParams(...params);
      const res = (yield firstValueFrom(this.api.get(url, queryParams, this.loaderFromParamas(params)))).data;
      if (relations?.includes("*"))
        this.parseDetalleEstadoCuenta(res);
      return res;
    });
  }
  validarCredito(credito) {
    return __async(this, null, function* () {
      const login = this.localStorage.getUser();
      const res = yield firstValueFrom(this.api.post("api/access/credito/aprobar", { id: credito.id }));
      if (res.status) {
        credito.autorizado_fecha = credito.autorizado_fecha ? null : (/* @__PURE__ */ new Date()).toISOString();
        credito.autorizado_por = login;
      }
      return res.status;
    });
  }
  dictaminarCredito(credito) {
    return __async(this, null, function* () {
      const login = this.localStorage.getUser();
      const res = yield firstValueFrom(this.api.post("api/access/credito/dictaminar", { id: credito.id }));
      if (res.status) {
        credito.dictaminado_fecha = credito.dictaminado_fecha ? null : (/* @__PURE__ */ new Date()).toISOString();
        credito.dictaminado_por = credito.dictaminado_fecha ? null : login;
      }
      return res.status;
    });
  }
  formalizarCredito(credito, force = false) {
    return __async(this, null, function* () {
      const login = this.localStorage.getUser();
      if (credito.liberado_fecha && credito.fecha_convenio && credito.formalizado_fecha) {
        this.dialog.show({
          title: "No se puede formalizar",
          body: "El credito se encuentra liberado, ya no se puede modificar."
        });
        return false;
      }
      credito.formalizado_fecha = !!credito.formalizado_fecha ? null : (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
      credito.formalizado_por = !!credito.formalizado_por ? null : login.id;
      const res = yield this.update(credito.id, {
        formalizado_fecha: credito.formalizado_fecha,
        formalizado_por: credito.formalizado_por
      });
      console.log(credito);
      return res.status;
    });
  }
  generarPagares(credito) {
    return __async(this, null, function* () {
      const plazo_id = credito.productos_financieros?.plazos?.find((plazo) => plazo.plazo_meses == credito?.inversiones_programas?.plazo_solicitado_meses)?.id;
      if (!plazo_id) {
        this.dialog.show({
          title: "Plazo Incorrecto",
          body: "El plazo solicitado no coincide con ninguno descrito en el producto financiero",
          tipo: "danger"
        });
        return false;
      }
      credito.creditos_pagos = (yield firstValueFrom(this.api.get(`api/ejecucion/creditos/generar_pagos/${credito.id}/${plazo_id}/save`))).data;
      return true;
    });
  }
  parseDetalleEstadoCuenta(credito) {
    if (!credito)
      return;
    credito.estado_cuenta = this.estadoCuentaUtils.getEstadoCuenta(credito, true);
  }
  /**
   * Set a new estado to credito locally if model is passed or just in server if id is passed
   * if undefined return false otherwise if no errors return true
   * @param {Credito|number|undefined} credito
   * @param nuevoEstado
   * @returns {boolean}
   */
  cambiarEstado(credito, nuevoEstado, comentarios = "") {
    return __async(this, null, function* () {
      if (!credito)
        return false;
      const id = typeof credito === "number" ? credito : credito.id;
      const res = yield firstValueFrom(this.api.post("api/access/credito/estado", {
        id,
        estado: nuevoEstado,
        comentarios
      }, false));
      if (res.status && typeof credito === "object") {
        credito.estado = nuevoEstado;
        comentarios = "";
      }
      return res.status;
    });
  }
  atrasados(conditionals = void 0, paginator = void 0, relations = void 0, extraData = void 0) {
    return __async(this, null, function* () {
      let params = [];
      if (Array.isArray(conditionals)) {
        params = this.paramsFromConditionals(conditionals);
      } else if (conditionals) {
        params = this.paramsFromModel(conditionals);
      }
      if (!paginator) {
        paginator = {
          page: 1,
          per_page: 99999
        };
      }
      const data = __spreadValues(__spreadValues({
        conditionals: JSON.stringify(params),
        relations: JSON.stringify(relations)
      }, paginator), extraData);
      return firstValueFrom(this.api.get("api/ejecucion/creditos/atrasados", data));
    });
  }
  asociarSesion(credito) {
    return __async(this, null, function* () {
      if (!credito)
        return;
      const url = "api/access/credito/asociar_sesion";
      const data = {
        sesion_id: credito.sesion_id,
        credito_id: credito.id
      };
      const res = firstValueFrom(this.api.post(url, data));
      console.log(res);
    });
  }
  autorizarMonto(credito) {
    return __async(this, null, function* () {
      if (!credito)
        return false;
      const url = "api/access/credito/monto/autorizar";
      const data = {
        id: credito.id,
        monto_autorizado: credito.monto_autorizado
      };
      const res = firstValueFrom(this.api.post(url, data));
      return (yield res).status;
    });
  }
  validarDatosBancarios(credito) {
    return __async(this, null, function* () {
      if (!credito)
        return false;
      const url = "api/access/credito/confirmar_datos_bancarios";
      const res = yield firstValueFrom(this.api.post(url, { id: credito.id }));
      if (res.status) {
        credito.datos_bancarios_verificados = credito.datos_bancarios_verificados == "NO" ? "SI" : "NO";
      }
      return res.status;
    });
  }
  marcarLlenado(credito) {
    return __async(this, null, function* () {
      if (!credito)
        return false;
      const login = this.localStorage.getUser();
      const url = "api/access/credito/datos_llenos";
      const res = yield firstValueFrom(this.api.post(url, { id: credito.id }));
      if (res.status) {
        credito.datos_llenos_fecha = credito.datos_llenos_fecha ? null : (/* @__PURE__ */ new Date()).toISOString();
        credito.datos_llenos_por = credito.datos_llenos_por ? null : login;
      }
      return res.status;
    });
  }
  liberarCredito(credito, extraLiberacion) {
    return __async(this, null, function* () {
      if (!credito)
        return false;
      const login = this.localStorage.getUser();
      const url = "api/access/credito/liberar";
      const res = yield firstValueFrom(this.api.post(url, __spreadValues({ id: credito.id }, extraLiberacion)));
      if (res.status) {
        credito.liberado_fecha = credito.liberado_fecha ? null : (/* @__PURE__ */ new Date()).toISOString();
        credito.liberado_por = credito.liberado_por ? null : login;
      }
      return res.status;
    });
  }
};
_CreditoService.\u0275fac = function CreditoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoService)(\u0275\u0275inject(Injector), \u0275\u0275inject(VanillaDialogService), \u0275\u0275inject(LocalStorageService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(EstadoCuentaService), \u0275\u0275inject(UtilsService), \u0275\u0275inject(SuperFetchDataService));
};
_CreditoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoService, factory: _CreditoService.\u0275fac, providedIn: "any" });
var CreditoService = _CreditoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }, { type: VanillaDialogService }, { type: LocalStorageService }, { type: UtilsEstadoCuentaService }, { type: EstadoCuentaService }, { type: UtilsService }, { type: SuperFetchDataService }], null);
})();

export {
  EstadoCuentaService,
  UtilsEstadoCuentaService,
  CreditoService
};
//# sourceMappingURL=chunk-RAXPYTHI.js.map
