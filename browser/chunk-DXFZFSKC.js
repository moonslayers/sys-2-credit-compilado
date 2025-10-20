import {
  InformeTablaDinamicaLocalComponent
} from "./chunk-HEFVS2VO.js";
import {
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  ApiServiceService,
  SuperService
} from "./chunk-7VPVFOGJ.js";
import {
  CurrencyPipe,
  DecimalPipe,
  UpperCasePipe
} from "./chunk-ZSRCSTKI.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injectable,
  Injector,
  Input,
  computed,
  firstValueFrom,
  inject,
  last,
  lastValueFrom,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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

// src/app/main/informes/services/generic.consolidado.super.service.ts
var _GenericSuperConsolidadoService = class _GenericSuperConsolidadoService {
  constructor() {
    this.perPage = 4e3;
    this.dataSource = [];
    this.yieldInterval = 250;
    this.progressSubject = new BehaviorSubject(0);
    this.progress$ = this.progressSubject.asObservable();
    this.api = inject(ApiServiceService);
    this.utilsEstadoCuenta = inject(UtilsEstadoCuentaService);
  }
  fetchDataMaped(options) {
    return __async(this, null, function* () {
      yield this.ensureFetchDataIsFinish();
      return this.mapLargeArray(yield this.filteredLargeArray(options), options);
    });
  }
  fetchData(options) {
    return __async(this, null, function* () {
      yield this.ensureFetchDataIsFinish();
      const data = yield this.filteredLargeArray(options);
      return data;
    });
  }
  initData() {
    return __async(this, null, function* () {
      try {
        const firstPage = yield firstValueFrom(this.api.get(`${this.endpoint}/total`, { page: 1, per_page: this.perPage }, false));
        const totalPages = firstPage.total_pages ?? 0;
        if (totalPages === 0) {
          this.progressSubject.next(100);
          this.progressSubject.complete();
          return;
        }
        const allData = [];
        const uniqueIds = /* @__PURE__ */ new Set();
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        const chunkSize = 5;
        for (let i = 0; i < pages.length; i += chunkSize) {
          const chunk = pages.slice(i, i + chunkSize);
          for (const page of chunk) {
            const data = yield this.processPage(page, uniqueIds);
            allData.push(...data);
            this.progressSubject.next(page / pages.length * 100);
          }
        }
        this.dataSource = allData;
        this.progressSubject.next(100);
        this.progressSubject.complete();
      } catch (error) {
        this.progressSubject.error(error);
        throw error;
      }
    });
  }
  processPage(page, uniqueIds) {
    return __async(this, null, function* () {
      const response = yield firstValueFrom(this.api.get(this.endpoint, { page, per_page: this.perPage }, false));
      if (!response.status) {
        throw new Error("Error en el server");
      }
      const newData = response.data ?? [];
      return newData;
    });
  }
  ensureFetchDataIsFinish() {
    return __async(this, null, function* () {
      if (this.progressSubject.closed && this.progressSubject.value === 100) {
        return;
      }
      if (this.dataSource.length) {
        return;
      }
      try {
        yield lastValueFrom(this.progress$.pipe(last()));
      } catch (error) {
        throw new Error("Error esperando finalizaci\xF3n: " + error);
      }
    });
  }
  /**
   * Convierte un valor a número y aplica redondeo inteligente:
   * - Redondea hacia abajo si la diferencia es inferior a 0.10
   * - Redondea hacia arriba si la diferencia es 0.90 o superior
   * - Redondea normalmente para valores intermedios
   * @param value Valor a convertir (string o number)
   * @returns Número convertido y redondeado
   */
  parseToNumber(value) {
    const num = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(num)) {
      throw new Error("El valor proporcionado no es un n\xFAmero v\xE1lido");
    }
    return +num.toFixed(2);
  }
  /**
   * Mapea grandes arrays sin bloquear el navegador
   * @param data Array de entrada
   * @param mapper Función de transformación
   * @param chunkSize Tamaño de los chunks (default: 100)
   * @param yieldInterval Milisegundos para liberar el event loop (default: 0)
   */
  mapLargeArray(_0, _1) {
    return __async(this, arguments, function* (data, options, chunkSize = 100, yieldInterval = this.yieldInterval) {
      const results = [];
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        const chunkResults = chunk.map((c) => this.map(c, options));
        results.push(...chunkResults);
        if (yieldInterval > 0 && i % (chunkSize * 10) === 0) {
          yield new Promise((resolve) => setTimeout(resolve, yieldInterval));
        }
      }
      return results;
    });
  }
  // Si la clase es genérica (ej: class MiClase<T> { ... })
  filteredLargeArray(_0) {
    return __async(this, arguments, function* (options, chunkSize = 500, yieldInterval = this.yieldInterval) {
      const result = [];
      for (let i = 0; i < this.dataSource.length; i += chunkSize) {
        const chunk = this.dataSource.slice(i, i + chunkSize);
        const filteredChunk = chunk.filter((c) => this.filter(c, options));
        result.push(...filteredChunk);
        if (yieldInterval > 0 && i % (chunkSize * 10) === 0) {
          yield new Promise((resolve) => setTimeout(resolve, yieldInterval));
        }
      }
      return result;
    });
  }
  /**
   * Ejecuta forEach en grandes arrays sin bloquear el navegador
   * @param data Array de entrada
   * @param callback Función a ejecutar por cada elemento
   * @param chunkSize Tamaño de los chunks (default: 500)
   * @param yieldInterval Milisegundos para liberar el event loop (default: 0)
   */
  forEachLargeArray(_0, _1) {
    return __async(this, arguments, function* (data, callback, chunkSize = 500, yieldInterval = this.yieldInterval) {
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        chunk.forEach(callback);
        if (yieldInterval > 0 && i % (chunkSize * 10) === 0) {
          yield new Promise((resolve) => setTimeout(resolve, yieldInterval));
        }
      }
    });
  }
};
_GenericSuperConsolidadoService.\u0275fac = function GenericSuperConsolidadoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GenericSuperConsolidadoService)();
};
_GenericSuperConsolidadoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GenericSuperConsolidadoService, factory: _GenericSuperConsolidadoService.\u0275fac });
var GenericSuperConsolidadoService = _GenericSuperConsolidadoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenericSuperConsolidadoService, [{
    type: Injectable
  }], null, null);
})();

// src/app/main/reportes/services/consolidado-historico-combinado.service.ts
var _ConsolidadoHistoricoCombinadoService = class _ConsolidadoHistoricoCombinadoService extends GenericSuperConsolidadoService {
  constructor() {
    super();
    this.endpoint = "api/consolidado/historico/combinado";
    this.perPage = 4e3;
    this.yieldInterval = 100;
    this.filter = (c, options) => {
      if (!c.monto_autorizado || c.monto_autorizado <= 0) {
        return false;
      }
      if (!options) {
        return true;
      }
      if (!options.fecha_fin || !options.fecha_inicio || !c.periodo) {
        return true;
      }
      const fechaInicio = new Date(options.fecha_inicio);
      const fechaFin = new Date(options.fecha_fin);
      const fechaRegistro = new Date(c.periodo);
      fechaInicio.setHours(0, 0, 0, 0);
      fechaFin.setHours(23, 59, 59, 999);
      fechaRegistro.setHours(12, 0, 0, 0);
      return fechaRegistro >= fechaInicio && fechaRegistro <= fechaFin;
    };
    this.map = (row, options) => {
      row.nombre_comercial = row.nombre_comercial?.toString()?.toUpperCase();
      row.razon_social_nombre_pfa = row.razon_social_nombre_pfa?.toUpperCase();
      row.programa = this.normalizarNombrePrograma(row.programa);
      row.ciudad = row.ciudad?.trim().toUpperCase().replace("\xCD", "I");
      row.genero = row.genero?.toUpperCase().trim();
      if (row.genero === "MASCULINO") {
        row.genero = "HOMBRE";
      }
      if (row.genero === "FEMENINO") {
        row.genero = "MUJER";
      }
      row.discapacidad = (row.discapacidad?.toUpperCase() ?? "").trim();
      if (["ninguna", "no", "n/a"].includes(row.discapacidad?.toLowerCase())) {
        row.discapacidad = "";
      }
      row.monto_autorizado = +(row.monto_autorizado ?? 0);
      row.no_de_beneficiarios = +(row.no_de_beneficiarios ?? 0);
      row.edad = +(row.edad ?? 0);
      row.empleos_imss = +(row.empleos_imss ?? 0);
      row.autoempleo = +(row.autoempleo ?? 0);
      row.empleos_conservados = +(row.empleos_conservados ?? 0);
      row.empleos_generados = +(row.empleos_generados ?? 0);
      row.total_empleos = +(row.total_empleos ?? 0);
      row.empleos_imss_hombres = +(row.empleos_imss_hombres ?? 0);
      row.empleos_imss_mujeres = +(row.empleos_imss_mujeres ?? 0);
      row.empleos_imss_no_binarios = +(row.empleos_imss_no_binarios ?? 0);
      row.empleos_informales_hombres = +(row.empleos_informales_hombres ?? 0);
      row.empleos_informales_mujeres = +(row.empleos_informales_mujeres ?? 0);
      row.empleos_informales_no_binarios = +(row.empleos_informales_no_binarios ?? 0);
      row.empleos_a_generar_hombres = +(row.empleos_a_generar_hombres ?? 0);
      row.empleos_a_generar_mujeres = +(row.empleos_a_generar_mujeres ?? 0);
      row.empleos_a_generar_no_binarios = +(row.empleos_a_generar_no_binarios ?? 0);
      row.empleos_generados_hombres = +(row.empleos_generados_hombres ?? 0);
      row.empleos_generados_mujeres = +(row.empleos_generados_mujeres ?? 0);
      row.empleos_generados_no_binarios = +(row.empleos_generados_no_binarios ?? 0);
      return row;
    };
    this.initData();
  }
  normalizarNombrePrograma(programa) {
    if (!programa)
      return "";
    const programaLimpio = programa.trim().toUpperCase().replaceAll("PFAE", "").replaceAll("PM", "");
    const sufijosComunes = [
      /\s+PFAE$/i,
      // Elimina " PFAE" al final
      /\s+PM$/i,
      // Elimina " PM" al final
      /\s+20\d{2}$/i,
      // Elimina años como " 2025", " 2024", etc.
      /\s+\d{4}$/i,
      // Elimina cualquier año de 4 dígitos
      /\s+PFAE\s+20\d{2}$/i,
      // Elimina " PFAE 2025"
      /\s+PM\s+20\d{2}$/i,
      // Elimina " PM 2025"
      /\s+PERSONA\s+FISICA$/i,
      // Elimina " PERSONA FISICA" al final
      /\s+PERSONA\s+F[ÍI]SICA$/i,
      // Elimina " PERSONA FÍSICA" o " PERSONA FISICA"
      /\s+PERSONA\s+MORAL$/i,
      // Elimina " PERSONA MORAL" al final
      /\s+PERSONA\s+FISICA\s+PFAE$/i,
      // Elimina " PERSONA FISICA PFAE"
      /\s+PERSONA\s+FISICA\s+PM$/i,
      // Elimina " PERSONA FISICA PM"
      /\s+PERSONA\s+F[ÍI]SICA\s+PFAE\s+20\d{2}$/i,
      // Elimina combinaciones complejas
      /\s+PERSONA\s+F[ÍI]SICA\s+PM\s+20\d{2}$/i,
      // Elimina combinaciones complejas
      /\s+PERSONA\s+MORAL\s+PFAE$/i,
      /\s+PERSONA\s+MORAL\s+PM$/i
    ];
    let nombreNormalizado = programaLimpio;
    for (const patron of sufijosComunes) {
      nombreNormalizado = nombreNormalizado.replace(patron, "");
    }
    nombreNormalizado = nombreNormalizado.replace(/\s+/g, " ").trim();
    return nombreNormalizado;
  }
};
_ConsolidadoHistoricoCombinadoService.\u0275fac = function ConsolidadoHistoricoCombinadoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConsolidadoHistoricoCombinadoService)();
};
_ConsolidadoHistoricoCombinadoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsolidadoHistoricoCombinadoService, factory: _ConsolidadoHistoricoCombinadoService.\u0275fac, providedIn: "root" });
var ConsolidadoHistoricoCombinadoService = _ConsolidadoHistoricoCombinadoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsolidadoHistoricoCombinadoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/main/informes/dashboard-historico/shared/main-informe/main-informe.component.ts
var _c0 = [[["", "actions", ""]], "*", [["", "footer", ""]]];
var _c1 = ["[actions]", "*", "[footer]"];
function MainInformeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bi me-2 " + ctx_r0.iconClass);
  }
}
function MainInformeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description);
  }
}
var _MainInformeComponent = class _MainInformeComponent {
  constructor() {
    this.title = "";
  }
};
_MainInformeComponent.\u0275fac = function MainInformeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainInformeComponent)();
};
_MainInformeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainInformeComponent, selectors: [["app-main-informe"]], inputs: { title: "title", description: "description", iconClass: "iconClass" }, ngContentSelectors: _c1, decls: 11, vars: 3, consts: [[1, "card", "main-section-container", "shadow-sm"], [1, "card-header", "text-bg-secondary", "py-3"], [1, "d-flex", "align-items-center"], ["aria-hidden", "true", 3, "class"], [1, "card-title", "h4", "mb-0"], [1, "mb-0", "mt-2"], [1, "card-body"], ["aria-hidden", "true"]], template: function MainInformeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c0);
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275conditionalCreate(3, MainInformeComponent_Conditional_3_Template, 1, 2, "i", 3);
    \u0275\u0275elementStart(4, "h2", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, MainInformeComponent_Conditional_7_Template, 2, 1, "p", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275projection(9, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(10, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.iconClass ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.description ? 7 : -1);
  }
}, encapsulation: 2 });
var MainInformeComponent = _MainInformeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainInformeComponent, [{
    type: Component,
    args: [{ selector: "app-main-informe", imports: [], template: `<!-- main-section.component.html -->
<div class="card main-section-container shadow-sm">
    <!-- Header de la secci\xF3n -->
    <div class="card-header text-bg-secondary py-3">
        <div class="d-flex align-items-center">
            <!-- Icono opcional -->
            @if (iconClass) {
            <i [class]="'bi me-2 ' + iconClass" aria-hidden="true"></i>
            }

            <!-- T\xEDtulo -->
            <h2 class="card-title h4 mb-0">{{ title }}</h2>

            <!-- Contenedor para acciones adicionales -->
            <ng-content select="[actions]"></ng-content>
        </div>

        <!-- Descripci\xF3n opcional -->
        @if (description) {
        <p class="mb-0 mt-2">{{ description }}</p>
        }
    </div>

    <!-- Cuerpo de la secci\xF3n -->
    <div class="card-body">
        <!-- Aqu\xED se proyectar\xE1 el contenido principal -->
        <ng-content></ng-content>
    </div>

    <!-- Footer opcional -->
    <ng-content select="[footer]"></ng-content>
</div>` }]
  }], null, { title: [{
    type: Input
  }], description: [{
    type: Input
  }], iconClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainInformeComponent, { className: "MainInformeComponent", filePath: "src/app/main/informes/dashboard-historico/shared/main-informe/main-informe.component.ts", lineNumber: 9 });
})();

// src/app/main/informes/dashboard-historico/components/por-programas-section/components/tabla-por-programa-ejercicio-fiscal/tabla-por-programa-ejercicio-fiscal.component.ts
var _c02 = () => [];
var _forTrack0 = ($index, $item) => $item.municipio;
var _forTrack1 = ($index, $item) => $item.nombre;
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.municipio), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.apoyos.solicitudes), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(2, 2, datoMunicipio_r1.apoyos.monto, "USD", "symbol", "1.0-0"), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.apoyos.mujeres), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.apoyos.hombres), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.credito.solicitudes), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(2, 2, datoMunicipio_r1.credito.monto, "USD", "symbol", "1.0-0"), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.credito.mujeres), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.credito.hombres), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.ejercicio.solicitudes), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(2, 2, datoMunicipio_r1.ejercicio.monto, "USD", "symbol", "1.0-0"), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.ejercicio.mujeres), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const datoMunicipio_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("rowspan", datoMunicipio_r1.programas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, datoMunicipio_r1.ejercicio.hombres), " ");
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_1_Template, 3, 4, "td", 10);
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_14_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(15, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_15_Template, 3, 7, "td");
    \u0275\u0275conditionalCreate(16, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_16_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(17, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_17_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(18, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_18_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(19, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_19_Template, 3, 7, "td");
    \u0275\u0275conditionalCreate(20, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_20_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(21, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_21_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(22, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_22_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(23, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_23_Template, 3, 7, "td");
    \u0275\u0275conditionalCreate(24, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_24_Template, 3, 4, "td");
    \u0275\u0275conditionalCreate(25, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Conditional_25_Template, 3, 4, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const programa_r2 = ctx.$implicit;
    const \u0275$index_77_r3 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 17, programa_r2.nombre));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 19, programa_r2.tipo === "credito" ? "Cr\xE9dito" : "Apoyo"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 21, programa_r2.metricas.solicitudes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(13, 23, programa_r2.metricas.monto, "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_77_r3 === 0 ? 25 : -1);
  }
}
function TablaPorProgramaEjercicioFiscalComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TablaPorProgramaEjercicioFiscalComponent_For_49_For_1_Template, 26, 28, "tr", null, _forTrack1);
  }
  if (rf & 2) {
    const datoMunicipio_r1 = ctx.$implicit;
    \u0275\u0275repeater(datoMunicipio_r1.programas);
  }
}
var _TablaPorProgramaEjercicioFiscalComponent = class _TablaPorProgramaEjercicioFiscalComponent {
  calcularSubtotalProgramasSolicitudes() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => {
      return sum + municipio.programas.reduce((pSum, programa) => pSum + programa.metricas.solicitudes, 0);
    }, 0);
  }
  calcularSubtotalProgramasMonto() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => {
      return sum + municipio.programas.reduce((pSum, programa) => pSum + programa.metricas.monto, 0);
    }, 0);
  }
  calcularSubtotalApoyosSolicitudes() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.apoyos.solicitudes, 0);
  }
  calcularSubtotalApoyosMonto() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.apoyos.monto, 0);
  }
  calcularSubtotalApoyosMujeres() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.apoyos.mujeres, 0);
  }
  calcularSubtotalApoyosHombres() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.apoyos.hombres, 0);
  }
  calcularSubtotalCreditosSolicitudes() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.credito.solicitudes, 0);
  }
  calcularSubtotalCreditosMonto() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.credito.monto, 0);
  }
  calcularSubtotalCreditosMujeres() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.credito.mujeres, 0);
  }
  calcularSubtotalCreditosHombres() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.credito.hombres, 0);
  }
  calcularSubtotalEjercicioSolicitudes() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.ejercicio.solicitudes, 0);
  }
  calcularSubtotalEjercicioMonto() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.ejercicio.monto, 0);
  }
  calcularSubtotalEjercicioMujeres() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.ejercicio.mujeres, 0);
  }
  calcularSubtotalEjercicioHombres() {
    if (!this.reporte?.municipios)
      return 0;
    return this.reporte.municipios.reduce((sum, municipio) => sum + municipio.ejercicio.hombres, 0);
  }
};
_TablaPorProgramaEjercicioFiscalComponent.\u0275fac = function TablaPorProgramaEjercicioFiscalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaPorProgramaEjercicioFiscalComponent)();
};
_TablaPorProgramaEjercicioFiscalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaPorProgramaEjercicioFiscalComponent, selectors: [["app-tabla-por-programa-ejercicio-fiscal"]], inputs: { reporte: "reporte" }, decls: 111, vars: 71, consts: [[1, "table-responsive"], [1, "table", "table-sm", "table-bordered", "table-striped", "table-hover"], [1, ""], ["rowspan", "2", 1, "align-middle"], ["colspan", "4", 1, "text-center"], [1, "table-warning", "fw-bold"], ["colspan", "3"], [1, "table-info", "fw-bold"], ["colspan", "2"], ["colspan", "6"], [1, "fw-bold"]], template: function TablaPorProgramaEjercicioFiscalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead", 2)(3, "tr")(4, "th", 3);
    \u0275\u0275text(5, "Municipio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 4);
    \u0275\u0275text(7, "Programas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 4);
    \u0275\u0275text(9, "Apoyos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 4);
    \u0275\u0275text(11, "Cr\xE9ditos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 4);
    \u0275\u0275text(13, "Ejercicio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tr")(15, "th");
    \u0275\u0275text(16, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Mujeres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Hombres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th");
    \u0275\u0275text(36, "Mujeres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th");
    \u0275\u0275text(38, "Hombres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Mujeres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Hombres");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody");
    \u0275\u0275repeaterCreate(48, TablaPorProgramaEjercicioFiscalComponent_For_49_Template, 2, 0, null, null, _forTrack0);
    \u0275\u0275elementStart(50, "tr", 5)(51, "td", 6);
    \u0275\u0275text(52, "Subtotales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "td");
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td");
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "td");
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "td");
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "td");
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "td");
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "td");
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "tr", 7)(96, "td", 6);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "td", 8);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "td", 8);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "td", 8);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "td", 8);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(110, "td", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(48);
    \u0275\u0275repeater(ctx.reporte.municipios || \u0275\u0275pureFunction0(70, _c02));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 19, ctx.calcularSubtotalProgramasSolicitudes()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(58, 21, ctx.calcularSubtotalProgramasMonto(), "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 26, ctx.calcularSubtotalApoyosSolicitudes()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(64, 28, ctx.calcularSubtotalApoyosMonto(), "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 33, ctx.calcularSubtotalApoyosMujeres()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 35, ctx.calcularSubtotalApoyosHombres()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 37, ctx.calcularSubtotalCreditosSolicitudes()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(76, 39, ctx.calcularSubtotalCreditosMonto(), "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 44, ctx.calcularSubtotalCreditosMujeres()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 46, ctx.calcularSubtotalCreditosHombres()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 48, ctx.calcularSubtotalEjercicioSolicitudes()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(88, 50, ctx.calcularSubtotalEjercicioMonto(), "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 55, ctx.calcularSubtotalEjercicioMujeres()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 57, ctx.calcularSubtotalEjercicioHombres()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Total General ", ctx.reporte["a\xF1o"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total Solicitudes: ", \u0275\u0275pipeBind1(100, 59, ctx.reporte.totalGeneral.solicitudes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Total Monto: ", \u0275\u0275pipeBind4(103, 61, ctx.reporte.totalGeneral.monto, "USD", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Total Mujeres: ", \u0275\u0275pipeBind1(106, 66, ctx.reporte.totalGeneral.mujeres));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Total Hombres: ", \u0275\u0275pipeBind1(109, 68, ctx.reporte.totalGeneral.hombres));
  }
}, dependencies: [
  CurrencyPipe,
  DecimalPipe,
  UpperCasePipe
], encapsulation: 2 });
var TablaPorProgramaEjercicioFiscalComponent = _TablaPorProgramaEjercicioFiscalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaPorProgramaEjercicioFiscalComponent, [{
    type: Component,
    args: [{ selector: "app-tabla-por-programa-ejercicio-fiscal", imports: [
      CurrencyPipe,
      DecimalPipe,
      UpperCasePipe
    ], template: `<div class="table-responsive">
    <table class="table table-sm table-bordered table-striped table-hover">
        <thead class="">
            <tr>
                <th rowspan="2" class="align-middle">Municipio</th>
                <th colspan="4" class="text-center">Programas</th>
                <th colspan="4" class="text-center">Apoyos</th>
                <th colspan="4" class="text-center">Cr\xE9ditos</th>
                <th colspan="4" class="text-center">Ejercicio</th>
            </tr>
            <tr>
                <!-- Encabezados para Programas -->
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Solicitudes</th>
                <th>Monto</th>

                <!-- Encabezados para Apoyos -->
                <th>Solicitudes</th>
                <th>Monto</th>
                <th>Mujeres</th>
                <th>Hombres</th>

                <!-- Encabezados para Cr\xE9ditos -->
                <th>Solicitudes</th>
                <th>Monto</th>
                <th>Mujeres</th>
                <th>Hombres</th>

                <!-- Encabezados para Ejercicio -->
                <th>Solicitudes</th>
                <th>Monto</th>
                <th>Mujeres</th>
                <th>Hombres</th>
            </tr>
        </thead>
        <tbody>
            @for (datoMunicipio of reporte.municipios || []; track datoMunicipio.municipio) {
                @for (programa of datoMunicipio.programas; track programa.nombre; let i = $index) {
                    <tr>
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length" class="fw-bold">
                                {{ datoMunicipio.municipio | uppercase}}
                            </td>
                        }
                        <td>{{ programa.nombre | uppercase}}</td>
                        <td>{{ (programa.tipo === 'credito' ? 'Cr\xE9dito' : 'Apoyo') | uppercase}}</td>
                        <td>{{ programa.metricas.solicitudes | number }}</td>
                        <td>{{ programa.metricas.monto | currency:'USD':'symbol':'1.0-0' }}</td>

                        <!-- Datos de Apoyos (solo se muestran en la primera fila por municipio) -->
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.apoyos.solicitudes | number }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.apoyos.monto | currency:'USD':'symbol':'1.0-0' }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.apoyos.mujeres | number }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.apoyos.hombres | number }}
                            </td>
                        }

                        <!-- Datos de Cr\xE9ditos (solo se muestran en la primera fila por municipio) -->
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.credito.solicitudes | number }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.credito.monto | currency:'USD':'symbol':'1.0-0' }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.credito.mujeres | number }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.credito.hombres | number }}
                            </td>
                        }

                        <!-- Datos de Ejercicio (solo se muestran en la primera fila por municipio) -->
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.ejercicio.solicitudes | number }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.ejercicio.monto | currency:'USD':'symbol':'1.0-0' }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.ejercicio.mujeres | number }}
                            </td>
                        }
                        @if (i === 0) {
                            <td [attr.rowspan]="datoMunicipio.programas.length">
                                {{ datoMunicipio.ejercicio.hombres | number }}
                            </td>
                        }
                    </tr>
                }
            }

            <!-- Fila de Subtotales -->
            <tr class="table-warning fw-bold">
                <td colspan="3">Subtotales</td>

                <!-- Subtotales Programas -->
                <td>{{ calcularSubtotalProgramasSolicitudes() | number }}</td>
                <td>{{ calcularSubtotalProgramasMonto() | currency:'USD':'symbol':'1.0-0' }}</td>

                <!-- Subtotales Apoyos -->
                <td>{{ calcularSubtotalApoyosSolicitudes() | number }}</td>
                <td>{{ calcularSubtotalApoyosMonto() | currency:'USD':'symbol':'1.0-0' }}</td>
                <td>{{ calcularSubtotalApoyosMujeres() | number }}</td>
                <td>{{ calcularSubtotalApoyosHombres() | number }}</td>

                <!-- Subtotales Cr\xE9ditos -->
                <td>{{ calcularSubtotalCreditosSolicitudes() | number }}</td>
                <td>{{ calcularSubtotalCreditosMonto() | currency:'USD':'symbol':'1.0-0' }}</td>
                <td>{{ calcularSubtotalCreditosMujeres() | number }}</td>
                <td>{{ calcularSubtotalCreditosHombres() | number }}</td>

                <!-- Subtotales Ejercicio -->
                <td>{{ calcularSubtotalEjercicioSolicitudes() | number }}</td>
                <td>{{ calcularSubtotalEjercicioMonto() | currency:'USD':'symbol':'1.0-0' }}</td>
                <td>{{ calcularSubtotalEjercicioMujeres() | number }}</td>
                <td>{{ calcularSubtotalEjercicioHombres() | number }}</td>
            </tr>

            <!-- Fila de Total General -->
            <tr class="table-info fw-bold">
                <td colspan="3">Total General {{ reporte['a\xF1o'] }}</td>
                <td colspan="2">Total Solicitudes: {{ reporte.totalGeneral.solicitudes | number }}</td>
                <td colspan="2">Total Monto: {{ reporte.totalGeneral.monto | currency:'USD':'symbol':'1.0-0' }}</td>
                <td colspan="2">Total Mujeres: {{ reporte.totalGeneral.mujeres | number }}</td>
                <td colspan="2">Total Hombres: {{ reporte.totalGeneral.hombres | number }}</td>
                <td colspan="6"></td> <!-- Celdas vac\xEDas para alinear con la estructura de la tabla -->
            </tr>
        </tbody>
    </table>
</div>` }]
  }], null, { reporte: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaPorProgramaEjercicioFiscalComponent, { className: "TablaPorProgramaEjercicioFiscalComponent", filePath: "src/app/main/informes/dashboard-historico/components/por-programas-section/components/tabla-por-programa-ejercicio-fiscal/tabla-por-programa-ejercicio-fiscal.component.ts", lineNumber: 15 });
})();

// src/app/main/informes/dashboard-historico/components/por-programas-section/utils/data-mapping.utils.ts
function mapearConsolidadoHistoricoAReporte(datos) {
  if (!datos.length)
    return [];
  const datosPorA\u00F1o = /* @__PURE__ */ new Map();
  datos.forEach((dato) => {
    if (dato.periodo && dato.periodo !== "NO APLICA") {
      const a\u00F1o = new Date(dato.periodo).getFullYear();
      if (!datosPorA\u00F1o.has(a\u00F1o)) {
        datosPorA\u00F1o.set(a\u00F1o, []);
      }
      datosPorA\u00F1o.get(a\u00F1o).push(dato);
    }
  });
  return Array.from(datosPorA\u00F1o.entries()).map(([a\u00F1o, datosAnio]) => {
    return crearReportePorA\u00F1o(a\u00F1o, datosAnio);
  }).sort((a, b) => a.a\u00F1o - b.a\u00F1o);
}
function crearReportePorA\u00F1o(a\u00F1o, datos) {
  const datosPorMunicipio = /* @__PURE__ */ new Map();
  datos.forEach((dato) => {
    const municipio = dato.ciudad || "No especificado";
    if (!datosPorMunicipio.has(municipio)) {
      datosPorMunicipio.set(municipio, []);
    }
    datosPorMunicipio.get(municipio).push(dato);
  });
  const municipiosArray = Array.from(datosPorMunicipio.entries()).map(([municipio, datosMunicipio]) => {
    return crearDatosMunicipio(municipio, datosMunicipio);
  });
  const totalGeneral = calcularTotalGeneral(municipiosArray);
  return {
    a\u00F1o,
    municipios: municipiosArray,
    totalGeneral
  };
}
function crearDatosMunicipio(municipio, datos) {
  const programasPorNombre = /* @__PURE__ */ new Map();
  datos.forEach((dato) => {
    const programa = dato.programa || "No especificado";
    if (!programasPorNombre.has(programa)) {
      programasPorNombre.set(programa, []);
    }
    programasPorNombre.get(programa).push(dato);
  });
  const programasArray = Array.from(programasPorNombre.entries()).map(([nombre, datosPrograma]) => {
    return crearPrograma(nombre, datosPrograma);
  });
  const apoyos = calcularTotalCategoria(datos.filter((d) => d.tipo_programa_apoyos_creditos === "APOYOS"));
  const credito = calcularTotalCategoria(datos.filter((d) => d.tipo_programa_apoyos_creditos === "CREDITOS"));
  const ejercicio = calcularTotalCategoria(datos);
  return {
    municipio,
    programas: programasArray,
    apoyos,
    credito,
    ejercicio
  };
}
function crearPrograma(nombre, datos) {
  const primerDato = datos[0];
  const tipo = primerDato?.tipo_programa_apoyos_creditos === "CREDITOS" ? "credito" : "apoyo";
  const metricas = {
    solicitudes: datos.length,
    monto: datos.reduce((sum, d) => sum + +(d.monto_autorizado || 0), 0),
    mujeres: datos.filter((d) => d.genero === "MUJER").length,
    hombres: datos.filter((d) => d.genero === "HOMBRE").length
  };
  return {
    nombre,
    tipo,
    metricas
  };
}
function calcularTotalCategoria(datos) {
  return {
    solicitudes: datos.length,
    monto: datos.reduce((sum, d) => sum + +(d.monto_autorizado || 0), 0),
    mujeres: datos.filter((d) => d.genero === "MUJER").length,
    hombres: datos.filter((d) => d.genero === "HOMBRE").length
  };
}
function calcularTotalGeneral(municipios) {
  return municipios.reduce((total, municipio) => ({
    solicitudes: total.solicitudes + municipio.ejercicio.solicitudes,
    monto: total.monto + municipio.ejercicio.monto,
    mujeres: total.mujeres + municipio.ejercicio.mujeres,
    hombres: total.hombres + municipio.ejercicio.hombres
  }), { solicitudes: 0, monto: 0, mujeres: 0, hombres: 0 });
}

// src/app/main/informes/dashboard-historico/data/por-programa-data.ts
var POR_PROGRAMA_2021_DATA = {
  "a\xF1o": 2021,
  "municipios": [
    {
      "municipio": "Tijuana",
      "programas": [
        {
          "nombre": "Fomento Sustentable para el Transporte P\xFAblico",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 122,
            "monto": 488e4,
            "mujeres": 15,
            "hombres": 107
          }
        },
        {
          "nombre": "Emprendete",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 61,
            "monto": 18254132e-1,
            "mujeres": 25,
            "hombres": 36
          }
        },
        {
          "nombre": "Emergente de Protecci\xF3n a la Nomina",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 10,
            "monto": 1688500,
            "mujeres": 5,
            "hombres": 5
          }
        },
        {
          "nombre": "Emprende Tradicional",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 1,
            "monto": 51900,
            "mujeres": 1,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Empresarial",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 11,
            "monto": 3874775,
            "mujeres": 3,
            "hombres": 8
          }
        }
      ],
      "apoyos": {
        "solicitudes": 183,
        "monto": 67054132e-1,
        "mujeres": 40,
        "hombres": 143
      },
      "credito": {
        "solicitudes": 22,
        "monto": 5615175,
        "mujeres": 9,
        "hombres": 13
      },
      "ejercicio": {
        "solicitudes": 205,
        "monto": 123205882e-1,
        "mujeres": 49,
        "hombres": 156
      }
    },
    {
      "municipio": "Playas de Rosarito",
      "programas": [
        {
          "nombre": "Fomento Sustentable para el Transporte P\xFAblico",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 24,
            "monto": 96e4,
            "mujeres": 4,
            "hombres": 20
          }
        },
        {
          "nombre": "Emprendete",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 9,
            "monto": 27e4,
            "mujeres": 8,
            "hombres": 1
          }
        },
        {
          "nombre": "Emergente de Protecci\xF3n a la Nomina",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 4,
            "monto": 343250,
            "mujeres": 3,
            "hombres": 1
          }
        },
        {
          "nombre": "Emprende Tradicional",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Empresarial",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 8,
            "monto": 2832040,
            "mujeres": 2,
            "hombres": 6
          }
        }
      ],
      "apoyos": {
        "solicitudes": 33,
        "monto": 123e4,
        "mujeres": 12,
        "hombres": 21
      },
      "credito": {
        "solicitudes": 12,
        "monto": 3175290,
        "mujeres": 5,
        "hombres": 7
      },
      "ejercicio": {
        "solicitudes": 45,
        "monto": 4405290,
        "mujeres": 17,
        "hombres": 28
      }
    },
    {
      "municipio": "Tecate",
      "programas": [
        {
          "nombre": "Fomento Sustentable para el Transporte P\xFAblico",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprendete",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 3,
            "monto": 89999.99,
            "mujeres": 0,
            "hombres": 3
          }
        },
        {
          "nombre": "Emergente de Protecci\xF3n a la Nomina",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 1,
            "monto": 2e5,
            "mujeres": 1,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Tradicional",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Empresarial",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        }
      ],
      "apoyos": {
        "solicitudes": 3,
        "monto": 89999.99,
        "mujeres": 0,
        "hombres": 3
      },
      "credito": {
        "solicitudes": 1,
        "monto": 2e5,
        "mujeres": 1,
        "hombres": 0
      },
      "ejercicio": {
        "solicitudes": 4,
        "monto": 289999.99,
        "mujeres": 1,
        "hombres": 3
      }
    },
    {
      "municipio": "Ensenada",
      "programas": [
        {
          "nombre": "Fomento Sustentable para el Transporte P\xFAblico",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 2,
            "monto": 7e4,
            "mujeres": 1,
            "hombres": 1
          }
        },
        {
          "nombre": "Emprendete",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 11,
            "monto": 329999.99,
            "mujeres": 6,
            "hombres": 5
          }
        },
        {
          "nombre": "Emergente de Protecci\xF3n a la Nomina",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 5,
            "monto": 555136,
            "mujeres": 4,
            "hombres": 1
          }
        },
        {
          "nombre": "Emprende Tradicional",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 1,
            "monto": 58749,
            "mujeres": 1,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Empresarial",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 8,
            "monto": 2407427,
            "mujeres": 1,
            "hombres": 7
          }
        }
      ],
      "apoyos": {
        "solicitudes": 13,
        "monto": 399999.99,
        "mujeres": 7,
        "hombres": 6
      },
      "credito": {
        "solicitudes": 14,
        "monto": 3021312,
        "mujeres": 6,
        "hombres": 8
      },
      "ejercicio": {
        "solicitudes": 27,
        "monto": 342131199e-2,
        "mujeres": 13,
        "hombres": 14
      }
    },
    {
      "municipio": "Mexicali",
      "programas": [
        {
          "nombre": "Fomento Sustentable para el Transporte P\xFAblico",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 25,
            "monto": 1e6,
            "mujeres": 6,
            "hombres": 19
          }
        },
        {
          "nombre": "Emprendete",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 33,
            "monto": 988856,
            "mujeres": 17,
            "hombres": 16
          }
        },
        {
          "nombre": "Emergente de Protecci\xF3n a la Nomina",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 19,
            "monto": 2817350,
            "mujeres": 9,
            "hombres": 10
          }
        },
        {
          "nombre": "Emprende Tradicional",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Empresarial",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 26,
            "monto": 9281233,
            "mujeres": 7,
            "hombres": 19
          }
        }
      ],
      "apoyos": {
        "solicitudes": 58,
        "monto": 1988856,
        "mujeres": 23,
        "hombres": 35
      },
      "credito": {
        "solicitudes": 45,
        "monto": 12098583,
        "mujeres": 16,
        "hombres": 29
      },
      "ejercicio": {
        "solicitudes": 103,
        "monto": 14087439,
        "mujeres": 39,
        "hombres": 64
      }
    },
    {
      "municipio": "San Felipe",
      "programas": [
        {
          "nombre": "Fomento Sustentable para el Transporte P\xFAblico",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 5,
            "monto": 2e5,
            "mujeres": 2,
            "hombres": 3
          }
        },
        {
          "nombre": "Emprendete",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emergente de Protecci\xF3n a la Nomina",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Tradicional",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Empresarial",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        }
      ],
      "apoyos": {
        "solicitudes": 5,
        "monto": 2e5,
        "mujeres": 2,
        "hombres": 3
      },
      "credito": {
        "solicitudes": 0,
        "monto": 0,
        "mujeres": 0,
        "hombres": 0
      },
      "ejercicio": {
        "solicitudes": 5,
        "monto": 2e5,
        "mujeres": 2,
        "hombres": 3
      }
    },
    {
      "municipio": "San Quint\xEDn",
      "programas": [
        {
          "nombre": "Fomento Sustentable para el Transporte P\xFAblico",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprendete",
          "tipo": "apoyo",
          "metricas": {
            "solicitudes": 3,
            "monto": 9e4,
            "mujeres": 2,
            "hombres": 1
          }
        },
        {
          "nombre": "Emergente de Protecci\xF3n a la Nomina",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 0,
            "monto": 0,
            "mujeres": 0,
            "hombres": 0
          }
        },
        {
          "nombre": "Emprende Tradicional",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 2,
            "monto": 101338,
            "mujeres": 1,
            "hombres": 1
          }
        },
        {
          "nombre": "Emprende Empresarial",
          "tipo": "credito",
          "metricas": {
            "solicitudes": 2,
            "monto": 448808,
            "mujeres": 0,
            "hombres": 2
          }
        }
      ],
      "apoyos": {
        "solicitudes": 3,
        "monto": 9e4,
        "mujeres": 2,
        "hombres": 1
      },
      "credito": {
        "solicitudes": 4,
        "monto": 550146,
        "mujeres": 1,
        "hombres": 3
      },
      "ejercicio": {
        "solicitudes": 7,
        "monto": 640146,
        "mujeres": 3,
        "hombres": 4
      }
    }
  ],
  "totalGeneral": {
    "solicitudes": 396,
    "monto": 3536477518e-2,
    "mujeres": 124,
    "hombres": 272
  }
};

// src/app/main/informes/dashboard-historico/components/por-programas-section/por-programas-section.component.ts
function PorProgramasSectionComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h4", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-tabla-por-programa-ejercicio-fiscal", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reporte_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ejercicio Fiscal ", reporte_r1["a\xF1o"]);
    \u0275\u0275advance();
    \u0275\u0275property("reporte", reporte_r1);
  }
}
var _PorProgramasSectionComponent = class _PorProgramasSectionComponent {
  constructor() {
    this.fechaInicio = signal("2022-01-01");
    this.fechaFin = signal("2024-12-31");
    this.consolidadoService = inject(ConsolidadoHistoricoCombinadoService);
    this.rawData = signal([]);
    this.reportes = computed(() => {
      return [POR_PROGRAMA_2021_DATA, ...mapearConsolidadoHistoricoAReporte(this.rawData())];
    });
    this.cargarDatos();
  }
  cargarDatos() {
    return __async(this, null, function* () {
      const filterOptions = {
        fecha_inicio: this.fechaInicio(),
        fecha_fin: this.fechaFin()
      };
      const data = yield this.consolidadoService.fetchData(filterOptions);
      this.rawData.set(data);
    });
  }
  actualizarFechas(inicio, fin) {
    this.fechaInicio.set(inicio);
    this.fechaFin.set(fin);
    this.cargarDatos();
  }
};
_PorProgramasSectionComponent.\u0275fac = function PorProgramasSectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PorProgramasSectionComponent)();
};
_PorProgramasSectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PorProgramasSectionComponent, selectors: [["app-por-programas-section"]], decls: 3, vars: 0, consts: [["title", "Informes Por Programa Por Ejercicio Fiscal", "description", "Consulte y genere informes organizados por per\xEDodo fiscal", "iconClass", "bi-graph-up"], [1, "mb-4"], [1, "text-center", "fw-bold"], [3, "reporte"]], template: function PorProgramasSectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-main-informe", 0);
    \u0275\u0275repeaterCreate(1, PorProgramasSectionComponent_For_2_Template, 4, 2, "div", 1, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.reportes());
  }
}, dependencies: [MainInformeComponent, TablaPorProgramaEjercicioFiscalComponent], encapsulation: 2 });
var PorProgramasSectionComponent = _PorProgramasSectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PorProgramasSectionComponent, [{
    type: Component,
    args: [{ selector: "app-por-programas-section", imports: [MainInformeComponent, TablaPorProgramaEjercicioFiscalComponent], template: `<app-main-informe title="Informes Por Programa Por Ejercicio Fiscal"
    description="Consulte y genere informes organizados por per\xEDodo fiscal" iconClass="bi-graph-up">
    @for (reporte of reportes(); track $index) {
        <div class="mb-4">
            <h4 class="text-center fw-bold">Ejercicio Fiscal {{reporte['a\xF1o']}}</h4>
        <app-tabla-por-programa-ejercicio-fiscal [reporte]="reporte"></app-tabla-por-programa-ejercicio-fiscal>
        </div>
    }
</app-main-informe>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PorProgramasSectionComponent, { className: "PorProgramasSectionComponent", filePath: "src/app/main/informes/dashboard-historico/components/por-programas-section/por-programas-section.component.ts", lineNumber: 17 });
})();

// src/app/main/informes/informe-tabla-configurada/informe-tabla-configurada.component.ts
var _InformeTablaConfiguradaComponent = class _InformeTablaConfiguradaComponent {
  constructor() {
    this.tablaConfigurada = {
      finalViews: [],
      crossTabConfigs: [],
      filterBasedConfigs: [],
      filtros: {}
    };
    this.data = [];
  }
};
_InformeTablaConfiguradaComponent.\u0275fac = function InformeTablaConfiguradaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeTablaConfiguradaComponent)();
};
_InformeTablaConfiguradaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeTablaConfiguradaComponent, selectors: [["app-informe-tabla-configurada"]], inputs: { tablaConfigurada: "tablaConfigurada", data: "data" }, decls: 1, vars: 6, consts: [["currentView", "final", 3, "showControllers", "crossTabConfigs", "filterBasedConfigs", "finalViews", "filtradoMap", "data"]], template: function InformeTablaConfiguradaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-informe-tabla-dinamica-local", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("showControllers", false)("crossTabConfigs", ctx.tablaConfigurada.crossTabConfigs)("filterBasedConfigs", ctx.tablaConfigurada.filterBasedConfigs)("finalViews", ctx.tablaConfigurada.finalViews)("filtradoMap", ctx.tablaConfigurada.filtros)("data", ctx.data);
  }
}, dependencies: [InformeTablaDinamicaLocalComponent], encapsulation: 2 });
var InformeTablaConfiguradaComponent = _InformeTablaConfiguradaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeTablaConfiguradaComponent, [{
    type: Component,
    args: [{ selector: "app-informe-tabla-configurada", imports: [
      InformeTablaDinamicaLocalComponent
    ], template: '<app-informe-tabla-dinamica-local [showControllers]="false" [crossTabConfigs]="tablaConfigurada.crossTabConfigs" [filterBasedConfigs]="tablaConfigurada.filterBasedConfigs"\n    [finalViews]="tablaConfigurada.finalViews" [filtradoMap]="tablaConfigurada.filtros" [data]="data" currentView="final"></app-informe-tabla-dinamica-local>' }]
  }], null, { tablaConfigurada: [{
    type: Input
  }], data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeTablaConfiguradaComponent, { className: "InformeTablaConfiguradaComponent", filePath: "src/app/main/informes/informe-tabla-configurada/informe-tabla-configurada.component.ts", lineNumber: 13 });
})();

// src/app/main/informes/dashboard-historico/components/configuraciones-tablas-preview/configuraciones-tablas-preview.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function ConfiguracionesTablasPreviewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " - Sin configuraciones guardadas ");
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "No hay tablas configuradas para esta secci\xF3n. Configure las tablas en el m\xF3dulo de configuraci\xF3n hist\xF3rica.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getNombreSeccion());
  }
}
function ConfiguracionesTablasPreviewComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275element(3, "app-informe-tabla-configurada", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const config_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("tablaConfigurada", config_r2.configuracion)("data", ctx_r0.rawData);
  }
}
function ConfiguracionesTablasPreviewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ConfiguracionesTablasPreviewComponent_Conditional_2_For_1_Template, 4, 2, "div", 4, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.tablasPreparadas);
  }
}
var _ConfiguracionesTablasPreviewComponent = class _ConfiguracionesTablasPreviewComponent {
  constructor() {
    this.seccion = "";
    this.tablasConfiguradas = [];
    this.consolidadoService = inject(ConsolidadoHistoricoCombinadoService);
    this.cdr = inject(ChangeDetectorRef);
    this.rawData = [];
    this.tablasPreparadas = [];
    this._isInitialized = false;
  }
  ngOnInit() {
    this.cargarDatos();
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (changes["tablasConfiguradas"] && this.tablasConfiguradas && this._isInitialized) {
      this.prepararTablas();
    }
  }
  /**
   * Prepara todas las configuraciones una sola vez cuando cambian los datos de entrada
   * Usando inmutabilidad para evitar cambios durante el rendering
   */
  prepararTablas() {
    this.tablasPreparadas = this.tablasConfiguradas.filter((config) => config.seccion === this.seccion).map((config) => this.crearTablaPreparada(config));
  }
  /**
   * Crea una copia inmutable de la tabla con la configuración preparada
   */
  crearTablaPreparada(config) {
    const configPreparada = __spreadProps(__spreadValues({}, config), {
      configuracion: this.prepararConfiguracionPreview(config.configuracion)
    });
    return configPreparada;
  }
  cargarDatos() {
    return __async(this, null, function* () {
      try {
        this.rawData = yield this.consolidadoService.fetchDataMaped();
        if (this.tablasConfiguradas.length > 0) {
          this.prepararTablas();
          this.cdr.detectChanges();
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
        this.rawData = [];
      }
    });
  }
  /**
   * Prepara la configuración para el modo preview
   * Establece showInTable = true solo para la vista predeterminada
   * Asegura que displayMode siempre se inicialice como 'table'
   */
  prepararConfiguracionPreview(config) {
    if (!config.finalViews?.length) {
      return config;
    }
    const configPreview = JSON.parse(JSON.stringify(config));
    if (!configPreview.filterBasedConfigs) {
      configPreview.filterBasedConfigs = [];
    }
    if (configPreview.defaultViewId) {
      configPreview.finalViews = configPreview.finalViews.map((view) => __spreadProps(__spreadValues({}, view), {
        showInTable: this.generarViewId(view.name) === configPreview.defaultViewId,
        displayMode: this.generarViewId(view.name) === configPreview.defaultViewId ? "table" : view.displayMode || "table"
      }));
    } else {
      configPreview.finalViews = configPreview.finalViews.map((view, index) => __spreadProps(__spreadValues({}, view), {
        showInTable: index === 0,
        displayMode: index === 0 ? "table" : view.displayMode || "table"
      }));
    }
    return configPreview;
  }
  /**
   * Obtiene el nombre descriptivo de la sección
   */
  getNombreSeccion() {
    const nombresSecciones = {
      "periodos": "Por Periodos",
      "zona-prioritaria": "Zona Prioritaria",
      "genero": "Monto y G\xE9nero",
      "empleos": "Generaci\xF3n de Empleos",
      "sectores": "Sectores Econ\xF3micos",
      "discapacidades": "Discapacidades",
      "etnias": "Etnias",
      "montos": "Montos y G\xE9nero",
      "mes": "Por Mes"
    };
    return nombresSecciones[this.seccion] || this.seccion;
  }
  /**
   * Genera un ID único para una vista final basado en su nombre
   * (Método consistente con el usado en configuración-tablas-seccion)
   */
  generarViewId(viewName) {
    return viewName.toLowerCase().replace(/[^a-z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "") || "vista_" + Date.now();
  }
};
_ConfiguracionesTablasPreviewComponent.\u0275fac = function ConfiguracionesTablasPreviewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfiguracionesTablasPreviewComponent)();
};
_ConfiguracionesTablasPreviewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracionesTablasPreviewComponent, selectors: [["app-configuraciones-tablas-preview"]], inputs: { seccion: "seccion", tablasConfiguradas: "tablasConfiguradas" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 1, consts: [[1, "configuraciones-tablas-preview"], [1, "alert", "alert-info"], [1, "bi", "bi-info-circle", "me-2"], [1, "mb-0", "mt-2"], [1, "mb-4"], [1, "card", "border-0", "shadow-sm"], [1, "card-body", "p-0"], [3, "tablaConfigurada", "data"]], template: function ConfiguracionesTablasPreviewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ConfiguracionesTablasPreviewComponent_Conditional_1_Template, 7, 1, "div", 1)(2, ConfiguracionesTablasPreviewComponent_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tablasPreparadas.length === 0 ? 1 : 2);
  }
}, dependencies: [InformeTablaConfiguradaComponent], styles: ["\n\n.configuraciones-tablas-preview[_ngcontent-%COMP%] {\n}\n.card[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1) !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n  font-weight: 600;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  border: none;\n}\n.card[_ngcontent-%COMP%], \n.alert[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .card-header[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=configuraciones-tablas-preview.component.css.map */"], changeDetection: 0 });
var ConfiguracionesTablasPreviewComponent = _ConfiguracionesTablasPreviewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracionesTablasPreviewComponent, [{
    type: Component,
    args: [{ selector: "app-configuraciones-tablas-preview", imports: [InformeTablaConfiguradaComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="configuraciones-tablas-preview">\n  @if (tablasPreparadas.length === 0) {\n    <!-- Si no hay configuraciones, mostrar alerta informativa -->\n    <div class="alert alert-info">\n      <i class="bi bi-info-circle me-2"></i>\n      <strong>{{ getNombreSeccion() }}</strong> - Sin configuraciones guardadas\n      <p class="mb-0 mt-2">No hay tablas configuradas para esta secci\xF3n. Configure las tablas en el m\xF3dulo de configuraci\xF3n hist\xF3rica.</p>\n    </div>\n  } @else {\n    <!-- Mostrar cada configuraci\xF3n de tabla -->\n    @for (config of tablasPreparadas; track config.id) {\n      <div class="mb-4">\n        <div class="card border-0 shadow-sm">\n          <div class="card-body p-0">\n            <app-informe-tabla-configurada\n              [tablaConfigurada]="config.configuracion"\n              [data]="rawData">\n            </app-informe-tabla-configurada>\n          </div>\n        </div>\n      </div>\n    }\n  }\n</div>', styles: ["/* src/app/main/informes/dashboard-historico/components/configuraciones-tablas-preview/configuraciones-tablas-preview.component.css */\n.configuraciones-tablas-preview {\n}\n.card {\n  transition: all 0.2s ease-in-out;\n}\n.card:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1) !important;\n}\n.card-header {\n  border-bottom: 1px solid #dee2e6;\n  font-weight: 600;\n}\n.alert {\n  border-radius: 0.375rem;\n  border: none;\n}\n.card,\n.alert {\n  animation: fadeIn 0.3s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .card-header {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=configuraciones-tablas-preview.component.css.map */\n"] }]
  }], null, { seccion: [{
    type: Input
  }], tablasConfiguradas: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracionesTablasPreviewComponent, { className: "ConfiguracionesTablasPreviewComponent", filePath: "src/app/main/informes/dashboard-historico/components/configuraciones-tablas-preview/configuraciones-tablas-preview.component.ts", lineNumber: 14 });
})();

// src/app/main/informes/informe-tabla-configurada/services/tabla.configurada.service.ts
var _TablaConfiguradaService = class _TablaConfiguradaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "tablas-configuradas";
    this.columns = [
      "configuracion",
      "seccion",
      "nombre",
      "created_at",
      "deleted_at",
      "id"
    ];
  }
};
_TablaConfiguradaService.\u0275fac = function TablaConfiguradaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaConfiguradaService)(\u0275\u0275inject(Injector));
};
_TablaConfiguradaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TablaConfiguradaService, factory: _TablaConfiguradaService.\u0275fac, providedIn: "root" });
var TablaConfiguradaService = _TablaConfiguradaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaConfiguradaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/informes/dashboard-historico/components/por-periodos-section/components/por-periodos-administracion/por-periodos-administracion.component.ts
function PorPeriodosAdministracionComponent_For_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.tipo === "CREDITOS" ? "CR\xC9DITOS" : "APOYOS");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, row_r1.unidades, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("$" + \u0275\u0275pipeBind3(10, 11, row_r1.montos, "1.2-2", "en-US"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 15, row_r1.masculino, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 18, row_r1.femenino, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 21, row_r1.empleosGenerados, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 24, row_r1.empleosConservados, "1.0-0"));
  }
}
function PorPeriodosAdministracionComponent_For_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 3)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("TOTAL ", row_r1.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, row_r1.unidades, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("$" + \u0275\u0275pipeBind3(10, 11, row_r1.montos, "1.2-2", "en-US"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 15, row_r1.masculino, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 18, row_r1.femenino, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 21, row_r1.empleosGenerados, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 24, row_r1.empleosConservados, "1.0-0"));
  }
}
function PorPeriodosAdministracionComponent_For_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 4);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3, "TOTAL GENERAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, row_r1.unidades, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("$" + \u0275\u0275pipeBind3(9, 9, row_r1.montos, "1.2-2", "en-US"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 13, row_r1.masculino, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 16, row_r1.femenino, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 19, row_r1.empleosGenerados, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 22, row_r1.empleosConservados, "1.0-0"));
  }
}
function PorPeriodosAdministracionComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PorPeriodosAdministracionComponent_For_25_Conditional_0_Template, 23, 27, "tr")(1, PorPeriodosAdministracionComponent_For_25_Conditional_1_Template, 23, 27, "tr", 3)(2, PorPeriodosAdministracionComponent_For_25_Conditional_2_Template, 22, 25, "tr", 4);
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275conditional(row_r1.type === "year-creditos" || row_r1.type === "year-apoyos" ? 0 : row_r1.type === "year-total" ? 1 : row_r1.type === "total" ? 2 : -1);
  }
}
var _PorPeriodosAdministracionComponent = class _PorPeriodosAdministracionComponent {
  constructor() {
    this.data = [];
    this.processedRows = [];
    this.firstPeriodStart = "";
  }
  ngOnChanges(changes) {
    if (changes["data"]) {
      this.processData();
    }
  }
  processData() {
    const processedData = [];
    for (const item of this.data) {
      if (!item.periodo)
        continue;
      const date = new Date(item.periodo);
      if (isNaN(date.getTime()))
        continue;
      const year = this.getYear(date);
      const tipo = item.tipo_programa_apoyos_creditos;
      if (!tipo)
        continue;
      const unidades = +(item.no_de_beneficiarios ?? 0);
      const montos = +(item.monto_autorizado ?? 0);
      const masculino = item.genero === "HOMBRE" || item.genero == "MASCULINO" ? 1 : 0;
      const femenino = item.genero == "FEMENINO" || item.genero == "MUJER" ? 1 : 0;
      const empleosGenerados = +(item.empleos_generados ?? 0);
      const empleosConservados = +(item.empleos_conservados ?? 0);
      processedData.push({
        year,
        tipo,
        unidades,
        montos,
        masculino,
        femenino,
        empleosGenerados,
        empleosConservados
      });
    }
    const groupedByYear = /* @__PURE__ */ new Map();
    for (const item of processedData) {
      const year = item.year;
      const tipo = item.tipo;
      if (!groupedByYear.has(year)) {
        groupedByYear.set(year, {
          year,
          creditos: { unidades: 0, montos: 0, masculino: 0, femenino: 0, empleosGenerados: 0, empleosConservados: 0 },
          apoyos: { unidades: 0, montos: 0, masculino: 0, femenino: 0, empleosGenerados: 0, empleosConservados: 0 }
        });
      }
      const yearGroup = groupedByYear.get(year);
      if (tipo === "CREDITOS") {
        yearGroup.creditos = {
          unidades: (yearGroup.creditos?.unidades || 0) + item.unidades,
          montos: (yearGroup.creditos?.montos || 0) + item.montos,
          masculino: (yearGroup.creditos?.masculino || 0) + item.masculino,
          femenino: (yearGroup.creditos?.femenino || 0) + item.femenino,
          empleosGenerados: (yearGroup.creditos?.empleosGenerados || 0) + item.empleosGenerados,
          empleosConservados: (yearGroup.creditos?.empleosConservados || 0) + item.empleosConservados
        };
      } else if (tipo === "APOYOS") {
        yearGroup.apoyos = {
          unidades: (yearGroup.apoyos?.unidades || 0) + item.unidades,
          montos: (yearGroup.apoyos?.montos || 0) + item.montos,
          masculino: (yearGroup.apoyos?.masculino || 0) + item.masculino,
          femenino: (yearGroup.apoyos?.femenino || 0) + item.femenino,
          empleosGenerados: (yearGroup.apoyos?.empleosGenerados || 0) + item.empleosGenerados,
          empleosConservados: (yearGroup.apoyos?.empleosConservados || 0) + item.empleosConservados
        };
      }
    }
    const yearsArray = Array.from(groupedByYear.values());
    yearsArray.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    const rows = [];
    for (const yearData of yearsArray) {
      if (yearData.creditos && (yearData.creditos.unidades > 0 || yearData.creditos.montos > 0)) {
        rows.push(__spreadValues({
          type: "year-creditos",
          year: yearData.year,
          tipo: "CREDITOS"
        }, yearData.creditos));
      }
      if (yearData.apoyos && (yearData.apoyos.unidades > 0 || yearData.apoyos.montos > 0)) {
        rows.push(__spreadValues({
          type: "year-apoyos",
          year: yearData.year,
          tipo: "APOYOS"
        }, yearData.apoyos));
      }
      const yearTotal = {
        unidades: 0,
        montos: 0,
        masculino: 0,
        femenino: 0,
        empleosGenerados: 0,
        empleosConservados: 0
      };
      if (yearData.creditos) {
        yearTotal.unidades += yearData.creditos.unidades;
        yearTotal.montos += yearData.creditos.montos;
        yearTotal.masculino += yearData.creditos.masculino;
        yearTotal.femenino += yearData.creditos.femenino;
        yearTotal.empleosGenerados += yearData.creditos.empleosGenerados;
        yearTotal.empleosConservados += yearData.creditos.empleosConservados;
      }
      if (yearData.apoyos) {
        yearTotal.unidades += yearData.apoyos.unidades;
        yearTotal.montos += yearData.apoyos.montos;
        yearTotal.masculino += yearData.apoyos.masculino;
        yearTotal.femenino += yearData.apoyos.femenino;
        yearTotal.empleosGenerados += yearData.apoyos.empleosGenerados;
        yearTotal.empleosConservados += yearData.apoyos.empleosConservados;
      }
      if (yearTotal.unidades > 0 || yearTotal.montos > 0) {
        rows.push(__spreadValues({
          type: "year-total",
          year: yearData.year
        }, yearTotal));
      }
    }
    const totalGeneral = {
      unidades: 0,
      montos: 0,
      masculino: 0,
      femenino: 0,
      empleosGenerados: 0,
      empleosConservados: 0
    };
    for (const row of rows) {
      if (row.type === "year-creditos" || row.type === "year-apoyos" || row.type === "year-total") {
        totalGeneral.unidades += row.unidades;
        totalGeneral.montos += row.montos;
        totalGeneral.masculino += row.masculino;
        totalGeneral.femenino += row.femenino;
        totalGeneral.empleosGenerados += row.empleosGenerados;
        totalGeneral.empleosConservados += row.empleosConservados;
      }
    }
    rows.push(__spreadValues({
      type: "total"
    }, totalGeneral));
    this.processedRows = rows;
    if (rows.length > 0) {
      const firstYearRow = rows.find((row) => row.type === "year-total");
      if (firstYearRow) {
        this.firstPeriodStart = firstYearRow.year;
      }
    }
  }
  getYear(date) {
    return date.getFullYear().toString();
  }
  getMonthDisplay(monthKey) {
    const [year, month] = monthKey.split("-").map(Number);
    const date = new Date(year, month, 1);
    const monthStr = date.toLocaleDateString("es-ES", { month: "short" }).charAt(0).toUpperCase() + date.toLocaleDateString("es-ES", { month: "short" }).slice(1);
    const yearShort = year.toString().slice(-2);
    return `${monthStr}-${yearShort}`;
  }
};
_PorPeriodosAdministracionComponent.\u0275fac = function PorPeriodosAdministracionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PorPeriodosAdministracionComponent)();
};
_PorPeriodosAdministracionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PorPeriodosAdministracionComponent, selectors: [["app-por-periodos-administracion"]], inputs: { data: "data" }, features: [\u0275\u0275NgOnChangesFeature], decls: 26, vars: 0, consts: [[1, "text-center"], [1, "table-responsive", "mb-4"], [1, "table", "table-striped", "table-hover"], [1, "table-primary", "fw-bold"], [1, "table-success", "fw-bold"]], template: function PorPeriodosAdministracionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 0)(1, "b");
    \u0275\u0275text(2, "Administraci\xF3n 2022-2027");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 1)(4, "table", 2)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "A\xD1O");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "TIPO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "UNIDAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "MONTOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "MASCULINO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "FEMENINO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "EMPLEOS GENERADOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "EMPLEOS CONSERVADOS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275repeaterCreate(24, PorPeriodosAdministracionComponent_For_25_Template, 3, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx.processedRows);
  }
}, dependencies: [DecimalPipe], encapsulation: 2 });
var PorPeriodosAdministracionComponent = _PorPeriodosAdministracionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PorPeriodosAdministracionComponent, [{
    type: Component,
    args: [{ selector: "app-por-periodos-administracion", imports: [
      DecimalPipe
    ], template: `<h5 class="text-center"><b>Administraci\xF3n 2022-2027</b></h5>
<div class="table-responsive mb-4">
    <table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>A\xD1O</th>
            <th>TIPO</th>
            <th>UNIDAD</th>
            <th>MONTOS</th>
            <th>MASCULINO</th>
            <th>FEMENINO</th>
            <th>EMPLEOS GENERADOS</th>
            <th>EMPLEOS CONSERVADOS</th>
        </tr>
    </thead>
    <tbody>
        @for (row of processedRows; track $index) {
        @if (row.type === 'year-creditos' || row.type === 'year-apoyos') {
        <tr>
            <td>{{ row.year }}</td>
            <td>{{ row.tipo === 'CREDITOS' ? 'CR\xC9DITOS' : 'APOYOS' }}</td>
            <td>{{ row.unidades | number: '1.0-0' }}</td>
            <td>{{ '$' + (row.montos | number: '1.2-2' : 'en-US') }}</td>
            <td>{{ row.masculino | number: '1.0-0' }}</td>
            <td>{{ row.femenino | number: '1.0-0' }}</td>
            <td>{{ row.empleosGenerados | number: '1.0-0' }}</td>
            <td>{{ row.empleosConservados | number: '1.0-0' }}</td>
        </tr>
        } @else if (row.type === 'year-total') {
        <tr class="table-primary fw-bold">
            <td>{{ row.year }}</td>
            <td>TOTAL {{ row.year }}</td>
            <td>{{ row.unidades | number: '1.0-0' }}</td>
            <td>{{ '$' + (row.montos | number: '1.2-2' : 'en-US') }}</td>
            <td>{{ row.masculino | number: '1.0-0' }}</td>
            <td>{{ row.femenino | number: '1.0-0' }}</td>
            <td>{{ row.empleosGenerados | number: '1.0-0' }}</td>
            <td>{{ row.empleosConservados | number: '1.0-0' }}</td>
        </tr>
        } @else if (row.type === 'total') {
        <tr class="table-success fw-bold">
            <td></td>
            <td>TOTAL GENERAL</td>
            <td>{{ row.unidades | number: '1.0-0' }}</td>
            <td>{{ '$' + (row.montos | number: '1.2-2' : 'en-US') }}</td>
            <td>{{ row.masculino | number: '1.0-0' }}</td>
            <td>{{ row.femenino | number: '1.0-0' }}</td>
            <td>{{ row.empleosGenerados | number: '1.0-0' }}</td>
            <td>{{ row.empleosConservados | number: '1.0-0' }}</td>
        </tr>
        }
        }
    </tbody>
</table>
</div>` }]
  }], null, { data: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PorPeriodosAdministracionComponent, { className: "PorPeriodosAdministracionComponent", filePath: "src/app/main/informes/dashboard-historico/components/por-periodos-section/components/por-periodos-administracion/por-periodos-administracion.component.ts", lineNumber: 13 });
})();

// src/app/main/informes/dashboard-historico/components/por-zona-prioritaria/por-zona-prioritaria.component.ts
function PorZonaPrioritariaComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 10);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 10);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 10);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fila_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.localidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.solicitudesApoyos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.montoApoyos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.femeninoApoyos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.masculinoApoyos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.solicitudesZonaPrioritariaFem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.montoZonaPrioritariaFem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.solicitudesZonaPrioritariaMas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.montoZonaPrioritariaMas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.solicitudesTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.montoTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fila_r1.porcentajeAtencion);
  }
}
var _PorZonaPrioritariaComponent = class _PorZonaPrioritariaComponent {
  constructor() {
    this.datos = [
      {
        localidad: "TIJUANA",
        solicitudesApoyos: 169,
        montoApoyos: "$1,924,433",
        femeninoApoyos: 124,
        masculinoApoyos: 45,
        solicitudesZonaPrioritariaFem: 48,
        montoZonaPrioritariaFem: "$538,450",
        solicitudesZonaPrioritariaMas: 28,
        montoZonaPrioritariaMas: "$374,041",
        solicitudesTotal: 76,
        montoTotal: "$912,490.92",
        porcentajeAtencion: "8.7%"
      },
      {
        localidad: "PLAYAS DE ROSARITO",
        solicitudesApoyos: 142,
        montoApoyos: "$1,656,568",
        femeninoApoyos: 115,
        masculinoApoyos: 27,
        solicitudesZonaPrioritariaFem: 56,
        montoZonaPrioritariaFem: "$676,733",
        solicitudesZonaPrioritariaMas: 12,
        montoZonaPrioritariaMas: "$615,989",
        solicitudesTotal: 68,
        montoTotal: "$1,292,721.88",
        porcentajeAtencion: "12.3%"
      },
      {
        localidad: "TECATE",
        solicitudesApoyos: 170,
        montoApoyos: "$2,041,320",
        femeninoApoyos: 114,
        masculinoApoyos: 55,
        solicitudesZonaPrioritariaFem: 66,
        montoZonaPrioritariaFem: "$823,476",
        solicitudesZonaPrioritariaMas: 34,
        montoZonaPrioritariaMas: "$364,307",
        solicitudesTotal: 100,
        montoTotal: "$1,187,782.84",
        porcentajeAtencion: "11.3%"
      },
      {
        localidad: "ENSENADA",
        solicitudesApoyos: 123,
        montoApoyos: "$1,659,858",
        femeninoApoyos: 92,
        masculinoApoyos: 31,
        solicitudesZonaPrioritariaFem: 49,
        montoZonaPrioritariaFem: "$574,946",
        solicitudesZonaPrioritariaMas: 17,
        montoZonaPrioritariaMas: "$193,348",
        solicitudesTotal: 66,
        montoTotal: "$768,293.16",
        porcentajeAtencion: "7.3%"
      },
      {
        localidad: "MEXICALI",
        solicitudesApoyos: 284,
        montoApoyos: "$3,287,568",
        femeninoApoyos: 185,
        masculinoApoyos: 99,
        solicitudesZonaPrioritariaFem: 174,
        montoZonaPrioritariaFem: "$1,949,305",
        solicitudesZonaPrioritariaMas: 92,
        montoZonaPrioritariaMas: "$1,228,441",
        solicitudesTotal: 266,
        montoTotal: "$3,177,745.99",
        porcentajeAtencion: "30.2%"
      },
      {
        localidad: "SAN FELIPE",
        solicitudesApoyos: 112,
        montoApoyos: "$1,227,219",
        femeninoApoyos: 75,
        masculinoApoyos: 37,
        solicitudesZonaPrioritariaFem: 76,
        montoZonaPrioritariaFem: "$1,123,512",
        solicitudesZonaPrioritariaMas: 37,
        montoZonaPrioritariaMas: "$453,707",
        solicitudesTotal: 113,
        montoTotal: "$1,577,218.95",
        porcentajeAtencion: "15.0%"
      },
      {
        localidad: "SAN QUINT\xCDN",
        solicitudesApoyos: 175,
        montoApoyos: "$2,173,034",
        femeninoApoyos: 123,
        masculinoApoyos: 52,
        solicitudesZonaPrioritariaFem: 87,
        montoZonaPrioritariaFem: "$1,098,861",
        solicitudesZonaPrioritariaMas: 34,
        montoZonaPrioritariaMas: "$496,010",
        solicitudesTotal: 121,
        montoTotal: "$1,594,870.76",
        porcentajeAtencion: "15.2%"
      }
    ];
    this.filaTotales = {
      localidad: "TOTAL",
      solicitudesApoyos: 1175,
      montoApoyos: "$13,970,000",
      femeninoApoyos: 828,
      masculinoApoyos: 346,
      solicitudesZonaPrioritariaFem: 556,
      montoZonaPrioritariaFem: "$6,785,282.13",
      solicitudesZonaPrioritariaMas: 254,
      montoZonaPrioritariaMas: "$3,725,842.37",
      solicitudesTotal: 810,
      montoTotal: "$10,511,124.50",
      porcentajeAtencion: "-"
    };
  }
};
_PorZonaPrioritariaComponent.\u0275fac = function PorZonaPrioritariaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PorZonaPrioritariaComponent)();
};
_PorZonaPrioritariaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PorZonaPrioritariaComponent, selectors: [["app-por-zona-prioritaria"]], decls: 75, vars: 12, consts: [[1, "table-responsive"], [1, "table", "table-bordered", "table-striped", "table-hover", "table-sm", "align-middle"], [1, "table-light"], ["rowspan", "3", 1, "text-center"], ["colspan", "4", 1, "text-center"], ["colspan", "2", 1, "text-center"], [1, "text-center"], [1, "table-group-divider"], [1, "fw-bold", "table-success"], [1, "text-start"], [1, "text-end"], [1, "text-start", "fw-bold"]], template: function PorZonaPrioritariaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead", 2)(3, "tr")(4, "th", 3);
    \u0275\u0275text(5, "Localidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 4);
    \u0275\u0275text(7, "APOYOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 4);
    \u0275\u0275text(9, "ZONA PRIORITARIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 5);
    \u0275\u0275text(11, "TOTAL PRIORITARIO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 3);
    \u0275\u0275text(13, "% de atenci\xF3n por municipio a zonas prioritarias");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tr")(15, "th", 5);
    \u0275\u0275text(16, "FEMENINO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 5);
    \u0275\u0275text(18, "MASCULINO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 5);
    \u0275\u0275text(20, "FEMENINO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 5);
    \u0275\u0275text(22, "MASCULINO");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "th")(24, "th");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "tr")(26, "th", 6);
    \u0275\u0275text(27, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th", 6);
    \u0275\u0275text(29, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 6);
    \u0275\u0275text(31, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 6);
    \u0275\u0275text(33, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 6);
    \u0275\u0275text(35, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 6);
    \u0275\u0275text(37, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 6);
    \u0275\u0275text(39, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 6);
    \u0275\u0275text(41, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 6);
    \u0275\u0275text(43, "Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 6);
    \u0275\u0275text(45, "Monto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tbody");
    \u0275\u0275repeaterCreate(47, PorZonaPrioritariaComponent_For_48_Template, 25, 12, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "tfoot", 7)(50, "tr", 8)(51, "td", 9);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td", 10);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td", 10);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td", 10);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td", 10);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td", 10);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "td", 10);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td", 10);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td", 10);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td", 10);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td", 10);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "td", 6);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(47);
    \u0275\u0275repeater(ctx.datos);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.filaTotales.localidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.solicitudesApoyos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.montoApoyos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.femeninoApoyos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.masculinoApoyos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.solicitudesZonaPrioritariaFem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.montoZonaPrioritariaFem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.solicitudesZonaPrioritariaMas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.montoZonaPrioritariaMas);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.solicitudesTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.montoTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.filaTotales.porcentajeAtencion);
  }
}, encapsulation: 2 });
var PorZonaPrioritariaComponent = _PorZonaPrioritariaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PorZonaPrioritariaComponent, [{
    type: Component,
    args: [{ selector: "app-por-zona-prioritaria", template: `<!-- El div con la clase 'table-responsive' hace que la tabla se pueda deslizar horizontalmente
     en pantallas peque\xF1as, evitando que se rompa el dise\xF1o de la p\xE1gina. -->
<div class="table-responsive">
    <table class="table table-bordered table-striped table-hover table-sm align-middle">

        <thead class="table-light">
            <!-- Primera fila de la cabecera, con los t\xEDtulos principales -->
            <tr>
                <th rowspan="3" class="text-center">Localidad</th>
                <th colspan="4" class="text-center">APOYOS</th>
                <th colspan="4" class="text-center">ZONA PRIORITARIA</th>
                <th colspan="2" class="text-center">TOTAL PRIORITARIO</th>
                <th rowspan="3" class="text-center">% de atenci\xF3n por municipio a zonas prioritarias</th>
            </tr>
            <!-- Segunda fila de la cabecera, dividiendo por g\xE9nero -->
            <tr>
                <th colspan="2" class="text-center">FEMENINO</th>
                <th colspan="2" class="text-center">MASCULINO</th>
                <th colspan="2" class="text-center">FEMENINO</th>
                <th colspan="2" class="text-center">MASCULINO</th>
                <!-- Las celdas vac\xEDas son necesarias para mantener la estructura de colspan -->
                <th></th>
                <th></th>
            </tr>
            <!-- Tercera fila de la cabecera, con los detalles de cada columna -->
            <tr>
                <th class="text-center">Solicitudes</th>
                <th class="text-center">Monto</th>
                <th class="text-center">Solicitudes</th>
                <th class="text-center">Monto</th>
                <th class="text-center">Solicitudes</th>
                <th class="text-center">Monto</th>
                <th class="text-center">Solicitudes</th>
                <th class="text-center">Monto</th>
                <th class="text-center">Solicitudes</th>
                <th class="text-center">Monto</th>
            </tr>
        </thead>

        <tbody>
            <!-- Iteramos sobre el array de datos para crear cada fila -->
            @for (fila of datos; track $index) {
            <tr>
                <td class="text-start fw-bold">{{ fila.localidad }}</td>
                <td class="text-end">{{ fila.solicitudesApoyos }}</td>
                <td class="text-end">{{ fila.montoApoyos }}</td>
                <td class="text-end">{{ fila.femeninoApoyos }}</td>
                <td class="text-end">{{ fila.masculinoApoyos }}</td>
                <td class="text-end">{{ fila.solicitudesZonaPrioritariaFem }}</td>
                <td class="text-end">{{ fila.montoZonaPrioritariaFem }}</td>
                <td class="text-end">{{ fila.solicitudesZonaPrioritariaMas }}</td>
                <td class="text-end">{{ fila.montoZonaPrioritariaMas }}</td>
                <td class="text-end">{{ fila.solicitudesTotal }}</td>
                <td class="text-end">{{ fila.montoTotal }}</td>
                <td class="text-end">{{ fila.porcentajeAtencion }}</td>
            </tr>
            }
        </tbody>

        <!-- Usamos tfoot para la fila de totales, que es sem\xE1nticamente correcto -->
        <tfoot class="table-group-divider">
            <tr class="fw-bold table-success">
                <td class="text-start">{{ filaTotales.localidad }}</td>
                <td class="text-end">{{ filaTotales.solicitudesApoyos }}</td>
                <td class="text-end">{{ filaTotales.montoApoyos }}</td>
                <td class="text-end">{{ filaTotales.femeninoApoyos }}</td>
                <td class="text-end">{{ filaTotales.masculinoApoyos }}</td>
                <td class="text-end">{{ filaTotales.solicitudesZonaPrioritariaFem }}</td>
                <td class="text-end">{{ filaTotales.montoZonaPrioritariaFem }}</td>
                <td class="text-end">{{ filaTotales.solicitudesZonaPrioritariaMas }}</td>
                <td class="text-end">{{ filaTotales.montoZonaPrioritariaMas }}</td>
                <td class="text-end">{{ filaTotales.solicitudesTotal }}</td>
                <td class="text-end">{{ filaTotales.montoTotal }}</td>
                <td class="text-center">{{ filaTotales.porcentajeAtencion }}</td>
            </tr>
        </tfoot>

    </table>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PorZonaPrioritariaComponent, { className: "PorZonaPrioritariaComponent", filePath: "src/app/main/informes/dashboard-historico/components/por-zona-prioritaria/por-zona-prioritaria.component.ts", lineNumber: 23 });
})();

// src/app/main/informes/dashboard-historico/dashboard-historico.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function DashboardHistoricoComponent_For_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2.badge);
  }
}
function DashboardHistoricoComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13)(1, "button", 17);
    \u0275\u0275listener("click", function DashboardHistoricoComponent_For_18_Template_button_click_1_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.id));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DashboardHistoricoComponent_For_18_Conditional_5_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi bi-", tab_r2.icon, " me-2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r2.badge ? 5 : -1);
  }
}
function DashboardHistoricoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-por-programas-section");
    \u0275\u0275elementEnd();
  }
}
function DashboardHistoricoComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "app-main-informe", 19);
    \u0275\u0275element(2, "app-por-periodos-administracion", 20)(3, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx_r2.rawData);
    \u0275\u0275advance();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
function DashboardHistoricoComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-por-zona-prioritaria")(2, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
function DashboardHistoricoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
function DashboardHistoricoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
function DashboardHistoricoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
function DashboardHistoricoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
function DashboardHistoricoComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
function DashboardHistoricoComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
function DashboardHistoricoComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-configuraciones-tablas-preview", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("seccion", ctx_r2.activeTab())("tablasConfiguradas", ctx_r2.tablasConfiguradas);
  }
}
var DASHBOARD_HISTORICO_SECCIONES = [
  { id: "programas", label: "Por Programas", icon: "graph-up" },
  { id: "periodos", label: "Por Periodos", icon: "calendar3" },
  { id: "zona-prioritaria", label: "Zona Prioritaria", icon: "geo-alt" },
  { id: "genero", label: "Monto y G\xE9nero", icon: "gender-ambiguous" },
  { id: "empleos", label: "Generaci\xF3n de Empleos", icon: "briefcase" },
  { id: "sectores", label: "Sectores Econ\xF3micos", icon: "buildings" },
  { id: "discapacidades", label: "Discapacidades", icon: "universal-access" },
  { id: "etnias", label: "Etnias", icon: "people" },
  { id: "montos", label: "Montos y G\xE9nero", icon: "cash-stack" },
  { id: "mes", label: "Por Mes", icon: "calendar-month" }
];
var _DashboardHistoricoComponent = class _DashboardHistoricoComponent {
  constructor() {
    this.activeTab = signal("programas");
    this.tabs = DASHBOARD_HISTORICO_SECCIONES;
    this.tablasConfiguradas = [];
    this.rawData = [];
    this.tablaConfiguradaController = inject(TablaConfiguradaService);
    this.consolidadoService = inject(ConsolidadoHistoricoCombinadoService);
  }
  ngOnInit() {
    this.setTablasConfiguradas();
    this.setConsolidadoData();
  }
  setTablasConfiguradas() {
    return __async(this, null, function* () {
      const data = yield this.tablaConfiguradaController.all({
        conditionals: {
          deleted_at: null
        }
      });
      this.tablasConfiguradas = data.map((item) => __spreadProps(__spreadValues({}, item), {
        configuracion: JSON.parse(item.configuracion)
      }));
    });
  }
  setConsolidadoData() {
    return __async(this, null, function* () {
      try {
        this.rawData = yield this.consolidadoService.fetchDataMaped();
      } catch (error) {
        console.error("Error al cargar datos consolidados:", error);
        this.rawData = [];
      }
    });
  }
  /**
   * Filtra las tablas configuradas por sección
   */
  getTablasPorSeccion(seccion) {
    return this.tablasConfiguradas.filter((config) => config.seccion === seccion);
  }
  selectTab(tabId) {
    this.activeTab.set(tabId);
  }
};
_DashboardHistoricoComponent.\u0275fac = function DashboardHistoricoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardHistoricoComponent)();
};
_DashboardHistoricoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardHistoricoComponent, selectors: [["app-dashboard-historico"]], decls: 31, vars: 10, consts: [[1, "container-fluid", "p-0", "my-3"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-between", "align-items-start", "align-items-md-center", "mb-4", "px-3"], [1, "mb-2", "mb-md-0"], [1, "h3", "mb-1", "text-primary"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-question-circle", "me-1"], [1, "btn", "btn-outline-primary", "btn-sm"], [1, "bi", "bi-download", "me-1"], [1, "card", "shadow-sm", "border-0"], [1, "card-header", "bg-white", "pb-0", "pt-3", "px-3", "px-md-4", "border-0"], ["role", "tablist", 1, "nav", "nav-tabs", "card-header-tabs"], ["role", "presentation", 1, "nav-item"], [1, "card-body", "p-1"], [1, "tab-content", "mt-2"], [1, "tab-pane", "fade", "show", "active"], ["type", "button", "role", "tab", 1, "nav-link", "d-flex", "align-items-center", "text-primary", 3, "click"], [1, "badge", "bg-primary", "rounded-pill", "ms-2"], ["title", "Informes por Periodos", "description", "Consulte y genere informes organizados por periodos", "iconClass", "bi-graph-up"], [3, "data"], [3, "seccion", "tablasConfiguradas"]], template: function DashboardHistoricoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
    \u0275\u0275text(4, "Hist\xF3rico de indicadores del sistema fondos BC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, "Seleccione el tipo de informe que desea visualizar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275text(10, " Ayuda ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275text(13, " Exportar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "ul", 12);
    \u0275\u0275repeaterCreate(17, DashboardHistoricoComponent_For_18_Template, 6, 7, "li", 13, _forTrack03);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
    \u0275\u0275conditionalCreate(21, DashboardHistoricoComponent_Conditional_21_Template, 2, 0, "div", 16);
    \u0275\u0275conditionalCreate(22, DashboardHistoricoComponent_Conditional_22_Template, 4, 3, "div", 16);
    \u0275\u0275conditionalCreate(23, DashboardHistoricoComponent_Conditional_23_Template, 3, 2, "div", 16);
    \u0275\u0275conditionalCreate(24, DashboardHistoricoComponent_Conditional_24_Template, 2, 2, "div", 16);
    \u0275\u0275conditionalCreate(25, DashboardHistoricoComponent_Conditional_25_Template, 2, 2, "div", 16);
    \u0275\u0275conditionalCreate(26, DashboardHistoricoComponent_Conditional_26_Template, 2, 2, "div", 16);
    \u0275\u0275conditionalCreate(27, DashboardHistoricoComponent_Conditional_27_Template, 2, 2, "div", 16);
    \u0275\u0275conditionalCreate(28, DashboardHistoricoComponent_Conditional_28_Template, 2, 2, "div", 16);
    \u0275\u0275conditionalCreate(29, DashboardHistoricoComponent_Conditional_29_Template, 2, 2, "div", 16);
    \u0275\u0275conditionalCreate(30, DashboardHistoricoComponent_Conditional_30_Template, 2, 2, "div", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx.tabs);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.activeTab() === "programas" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "periodos" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "zona-prioritaria" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "genero" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "empleos" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "sectores" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "discapacidades" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "etnias" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "montos" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.activeTab() === "mes" ? 30 : -1);
  }
}, dependencies: [
  PorProgramasSectionComponent,
  ConfiguracionesTablasPreviewComponent,
  PorPeriodosAdministracionComponent,
  MainInformeComponent,
  PorZonaPrioritariaComponent
], encapsulation: 2 });
var DashboardHistoricoComponent = _DashboardHistoricoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardHistoricoComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-historico", imports: [
      PorProgramasSectionComponent,
      ConfiguracionesTablasPreviewComponent,
      PorPeriodosAdministracionComponent,
      MainInformeComponent,
      PorZonaPrioritariaComponent
    ], template: `<div class="container-fluid p-0 my-3">
    <!-- Header mejorado -->
    <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 px-3">
        <div class="mb-2 mb-md-0">
            <h2 class="h3 mb-1 text-primary">Hist\xF3rico de indicadores del sistema fondos BC</h2>
            <p class="text-muted mb-0">Seleccione el tipo de informe que desea visualizar</p>
        </div>

        <!-- Acciones globales -->
        <div class="d-flex gap-2">
            <button class="btn btn-outline-secondary btn-sm">
                <i class="bi bi-question-circle me-1"></i> Ayuda
            </button>
            <button class="btn btn-outline-primary btn-sm">
                <i class="bi bi-download me-1"></i> Exportar
            </button>
        </div>
    </div>

    <!-- Pesta\xF1as mejoradas -->
    <div class="card shadow-sm border-0">
        <div class="card-header bg-white pb-0 pt-3 px-3 px-md-4 border-0">
            <ul class="nav nav-tabs card-header-tabs" role="tablist">
                @for (tab of tabs; track tab.id) {
                <li class="nav-item" role="presentation">
                    <button class="nav-link d-flex align-items-center text-primary"
                        [class.active]="activeTab() === tab.id" (click)="selectTab(tab.id)" type="button" role="tab">
                        <i class="bi bi-{{ tab.icon }} me-2"></i>
                        <span>{{ tab.label }}</span>
                        @if (tab.badge) {
                        <span class="badge bg-primary rounded-pill ms-2">{{ tab.badge }}</span>
                        }
                    </button>
                </li>
                }
            </ul>
        </div>

        <div class="card-body p-1">
            <!-- Contenido de los Tabs -->
            <div class="tab-content mt-2">
                <!-- Tab de Por Programas -->
                @if (activeTab() === 'programas') {
                <div class="tab-pane fade show active">
                    <app-por-programas-section></app-por-programas-section>
                </div>
                }

                <!-- Tab de Por Periodos -->
                @if (activeTab() === 'periodos') {
                <div class="tab-pane fade show active">
                    <app-main-informe title="Informes por Periodos"
                        description="Consulte y genere informes organizados por periodos" iconClass="bi-graph-up">
                        <app-por-periodos-administracion [data]="rawData">
                        </app-por-periodos-administracion>
                        <app-configuraciones-tablas-preview [seccion]="activeTab()"
                            [tablasConfiguradas]="tablasConfiguradas">
                        </app-configuraciones-tablas-preview>
                    </app-main-informe>
                </div>
                }

                <!-- Tab de Zona Prioritaria -->
                @if (activeTab() === 'zona-prioritaria') {
                <div class="tab-pane fade show active">
                    <app-por-zona-prioritaria></app-por-zona-prioritaria>
                    <app-configuraciones-tablas-preview [seccion]="activeTab()"
                        [tablasConfiguradas]="tablasConfiguradas">
                    </app-configuraciones-tablas-preview>
                </div>
                }

                <!-- Tab de G\xE9nero -->
                @if (activeTab() === 'genero') {
                <div class="tab-pane fade show active">
                    <app-configuraciones-tablas-preview [seccion]="activeTab()"
                        [tablasConfiguradas]="tablasConfiguradas">
                    </app-configuraciones-tablas-preview>
                </div>
                }

                <!-- Tab de Generaci\xF3n de Empleos -->
                @if (activeTab() === 'empleos') {
                <div class="tab-pane fade show active">
                    <app-configuraciones-tablas-preview [seccion]="activeTab()"
                        [tablasConfiguradas]="tablasConfiguradas">
                    </app-configuraciones-tablas-preview>
                </div>
                }

                <!-- Tab de Sectores Econ\xF3micos -->
                @if (activeTab() === 'sectores') {
                <div class="tab-pane fade show active">
                    <app-configuraciones-tablas-preview [seccion]="activeTab()"
                        [tablasConfiguradas]="tablasConfiguradas">
                    </app-configuraciones-tablas-preview>
                </div>
                }

                <!-- Tab de Discapacidades -->
                @if (activeTab() === 'discapacidades') {
                <div class="tab-pane fade show active">
                    <app-configuraciones-tablas-preview [seccion]="activeTab()"
                        [tablasConfiguradas]="tablasConfiguradas">
                    </app-configuraciones-tablas-preview>
                </div>
                }

                <!-- Tab de Etnias -->
                @if (activeTab() === 'etnias') {
                <div class="tab-pane fade show active">
                    <app-configuraciones-tablas-preview [seccion]="activeTab()"
                        [tablasConfiguradas]="tablasConfiguradas">
                    </app-configuraciones-tablas-preview>
                </div>
                }

                <!-- Tab de Montos -->
                @if (activeTab() === 'montos') {
                <div class="tab-pane fade show active">
                    <app-configuraciones-tablas-preview [seccion]="activeTab()"
                        [tablasConfiguradas]="tablasConfiguradas">
                    </app-configuraciones-tablas-preview>
                </div>
                }

                <!-- Tab de Por Mes -->
                @if (activeTab() === 'mes') {
                <div class="tab-pane fade show active">
                    <app-configuraciones-tablas-preview [seccion]="activeTab()"
                        [tablasConfiguradas]="tablasConfiguradas">
                    </app-configuraciones-tablas-preview>
                </div>
                }
            </div>
        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardHistoricoComponent, { className: "DashboardHistoricoComponent", filePath: "src/app/main/informes/dashboard-historico/dashboard-historico.component.ts", lineNumber: 44 });
})();

export {
  ConsolidadoHistoricoCombinadoService,
  TablaConfiguradaService,
  DASHBOARD_HISTORICO_SECCIONES,
  DashboardHistoricoComponent
};
//# sourceMappingURL=chunk-DXFZFSKC.js.map
