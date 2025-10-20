import {
  GeneradorExcelService
} from "./chunk-BBNJFIFW.js";
import "./chunk-3HCUHHOO.js";
import {
  CreditoService,
  EstadoCuentaService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import "./chunk-SDTK5VY4.js";
import {
  require_dayjs_min
} from "./chunk-NWCMIO4X.js";
import {
  SolicitudApoyoService
} from "./chunk-OBCD5SW4.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import {
  ApiServiceService,
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
import "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  BehaviorSubject,
  Component,
  Injectable,
  catchError,
  concatMap,
  firstValueFrom,
  from,
  map,
  of,
  reduce,
  setClassMetadata,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/main/reportes/main/main.component.ts
var import_dayjs = __toESM(require_dayjs_min());

// src/app/main/reportes/services/fetch-data-apoyos.service.ts
var _FetchDataApoyosService = class _FetchDataApoyosService {
  constructor(solicitudApoyoController) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.progressSubject = new BehaviorSubject(0);
    this.progress$ = this.progressSubject.asObservable();
  }
  getAllData(fetchExtra) {
    return this.dataLength(fetchExtra).pipe(switchMap((totalItems) => {
      const chunkSize = 100;
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
      if (!fetchExtra.conditionals) {
        fetchExtra.conditionals = {
          deleted_at: null
        };
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
    return from(this.solicitudApoyoController.get(fetchExtra?.conditionals, { per_page: 1, page: 1 }, [], __spreadValues({
      sort: JSON.stringify({ column: "id", desc: true })
    }, fetchExtra?.extraData), false)).pipe(map((res) => res.total_items ?? 0), catchError(() => of(0)));
  }
  fetchData(conditionals = void 0, paginator = void 0, relations = void 0, extraData = void 0) {
    return from(this.solicitudApoyoController.get(conditionals, paginator, relations, extraData, false)).pipe(map((res) => res.data ?? []), catchError(() => of([])));
  }
};
_FetchDataApoyosService.\u0275fac = function FetchDataApoyosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FetchDataApoyosService)(\u0275\u0275inject(SolicitudApoyoService));
};
_FetchDataApoyosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FetchDataApoyosService, factory: _FetchDataApoyosService.\u0275fac, providedIn: "any" });
var FetchDataApoyosService = _FetchDataApoyosService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchDataApoyosService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: SolicitudApoyoService }], null);
})();

// src/app/main/reportes/services/fetch-data.service.ts
var _FetchDataService = class _FetchDataService {
  constructor(creditoController) {
    this.creditoController = creditoController;
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
      if (!fetchExtra.conditionals) {
        fetchExtra.conditionals = {
          deleted_at: null
        };
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
    return from(this.creditoController.get(fetchExtra?.conditionals, { per_page: 1, page: 1 }, ["creditosDespachos"], __spreadValues({
      sort: JSON.stringify({ column: "id", desc: true })
    }, fetchExtra?.extraData), false)).pipe(map((res) => res.total_items ?? 0), catchError(() => of(0)));
  }
  fetchData(conditionals = void 0, paginator = void 0, relations = void 0, extraData = void 0) {
    return from(this.creditoController.get(conditionals, paginator, relations, extraData, false)).pipe(map((res) => res.data ?? []), catchError(() => of([])));
  }
};
_FetchDataService.\u0275fac = function FetchDataService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FetchDataService)(\u0275\u0275inject(CreditoService));
};
_FetchDataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FetchDataService, factory: _FetchDataService.\u0275fac, providedIn: "any" });
var FetchDataService = _FetchDataService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchDataService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: CreditoService }], null);
})();

// src/app/main/reportes/services/consolidado-historico.service.ts
var _ConsolidadoHistoricoService = class _ConsolidadoHistoricoService {
  constructor(api, estadoCuentaController) {
    this.api = api;
    this.estadoCuentaController = estadoCuentaController;
    this.endpoint = "api/consolidado/historico";
    this.data = [];
  }
  fetchData(options) {
    return __async(this, null, function* () {
      if (!this.data.length) {
        yield this.initData();
      }
      return this.data.filter((c) => {
        if (options.producto_financiero_id && c.productos_financiero_id != options.producto_financiero_id) {
          return false;
        }
        if (!c.liberado_fecha) {
          return false;
        }
        if (c.estado === "CANCELADO") {
          return false;
        }
        if (!options.inicio && !options.fin) {
          return true;
        }
        if (!c.fecha_convenio && !c.created_at && !c.formalizado_fecha) {
          return false;
        }
        let fechaConvenio = new Date(c.fecha_convenio ?? c.liberado_fecha ?? c.formalizado_fecha ?? c.created_at);
        if (options.inicio) {
          const inicioDate = new Date(options.inicio);
          inicioDate.setHours(0, 0, 0, 0);
          if (fechaConvenio < inicioDate) {
            return false;
          }
        }
        if (options.fin) {
          const finDate = new Date(options.fin);
          finDate.setHours(23, 59, 59, 999);
          if (fechaConvenio > finDate) {
            return false;
          }
        }
        return true;
      });
    });
  }
  initData() {
    return __async(this, null, function* () {
      const firstPage = yield firstValueFrom(this.api.get(this.endpoint, { page: 1, per_page: 1e3 }, false));
      const lastPage = firstPage.total_pages ?? 0;
      const pages = Array.from({ length: lastPage }, (_, i) => i + 1);
      const chunkSize = 5;
      for (let i = 0; i < pages.length; i += chunkSize) {
        const chunk = pages.slice(i, i + chunkSize);
        const promises = chunk.map((page) => firstValueFrom(this.api.get(this.endpoint, { page, per_page: 1e3 }, false)).then((res) => {
          return res.data ?? [];
        }));
        const results = yield Promise.all(promises);
        results.forEach((data) => this.data.push(...data));
      }
    });
  }
};
_ConsolidadoHistoricoService.\u0275fac = function ConsolidadoHistoricoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConsolidadoHistoricoService)(\u0275\u0275inject(ApiServiceService), \u0275\u0275inject(EstadoCuentaService));
};
_ConsolidadoHistoricoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsolidadoHistoricoService, factory: _ConsolidadoHistoricoService.\u0275fac, providedIn: "root" });
var ConsolidadoHistoricoService = _ConsolidadoHistoricoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsolidadoHistoricoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiServiceService }, { type: EstadoCuentaService }], null);
})();

// src/app/main/reportes/main/main.component.ts
function MainReportesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275element(7, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 39);
    \u0275\u0275text(9, " Generando reporte consolidado... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Progreso: ", ctx_r0.progressConsolidado, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.progressConsolidado, "/100");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressConsolidado, "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r0.progressConsolidado);
  }
}
function MainReportesComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Datos listos para generar reportes (", ctx_r0.creditos.length, " cr\xE9ditos)");
  }
}
function MainReportesComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No hay datos disponibles para generar el consolidado");
    \u0275\u0275elementEnd()();
  }
}
function MainReportesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, MainReportesComponent_Conditional_12_Conditional_1_Template, 4, 1, "div", 40);
    \u0275\u0275conditionalCreate(2, MainReportesComponent_Conditional_12_Conditional_2_Template, 4, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creditos.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creditos.length === 0 ? 2 : -1);
  }
}
function MainReportesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function MainReportesComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function MainReportesComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275element(7, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 39);
    \u0275\u0275text(9, " Generando reporte consolidado... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Progreso: ", ctx_r0.progressTerceraSesion, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.progressTerceraSesion, "/100");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressTerceraSesion, "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r0.progressTerceraSesion);
  }
}
function MainReportesComponent_Conditional_45_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Datos listos para generar reportes (", ctx_r0.creditosASesionar.length, " cr\xE9ditos)");
  }
}
function MainReportesComponent_Conditional_45_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No hay datos disponibles para generar el reporte");
    \u0275\u0275elementEnd()();
  }
}
function MainReportesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, MainReportesComponent_Conditional_45_Conditional_1_Template, 4, 1, "div", 40);
    \u0275\u0275conditionalCreate(2, MainReportesComponent_Conditional_45_Conditional_2_Template, 4, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creditosASesionar.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creditosASesionar.length === 0 ? 2 : -1);
  }
}
function MainReportesComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function MainReportesComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function MainReportesComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2, " Seleccione una opci\xF3n de reporte ");
    \u0275\u0275elementEnd();
  }
}
function MainReportesComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2, " Procesando cr\xE9ditos para tercera sesi\xF3n... ");
    \u0275\u0275elementEnd();
  }
}
function MainReportesComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275element(7, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 39);
    \u0275\u0275text(9, " Generando reporte apoyos por sesionar... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Progreso: ", ctx_r0.progressTerceraSesionApoyos, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.progressTerceraSesionApoyos, "/100");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressTerceraSesionApoyos, "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r0.progressTerceraSesionApoyos);
  }
}
function MainReportesComponent_Conditional_65_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Datos listos para generar reportes (", ctx_r0.apoyosASesionar.length, " apoyos)");
  }
}
function MainReportesComponent_Conditional_65_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No hay datos disponibles para generar el reporte");
    \u0275\u0275elementEnd()();
  }
}
function MainReportesComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, MainReportesComponent_Conditional_65_Conditional_1_Template, 4, 1, "div", 40);
    \u0275\u0275conditionalCreate(2, MainReportesComponent_Conditional_65_Conditional_2_Template, 4, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.apoyosASesionar.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.apoyosASesionar.length === 0 ? 2 : -1);
  }
}
function MainReportesComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function MainReportesComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
}
function MainReportesComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2, " Procesando apoyos para tercera sesi\xF3n... ");
    \u0275\u0275elementEnd();
  }
}
var _MainReportesComponent = class _MainReportesComponent {
  constructor(fetchDataApoyosService, fetchDataService, generadorExcel, utilsSercice, utilsEstadoCuenta, consolidadoController) {
    this.fetchDataApoyosService = fetchDataApoyosService;
    this.fetchDataService = fetchDataService;
    this.generadorExcel = generadorExcel;
    this.utilsSercice = utilsSercice;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.consolidadoController = consolidadoController;
    this.isLoadingConsolidado = false;
    this.isLoadingTerceraSesion = false;
    this.isLoadingTerceraSesionApoyos = false;
    this.progressConsolidado = 0;
    this.progressTerceraSesion = 0;
    this.progressTerceraSesionApoyos = 0;
    this.creditos = [];
    this.creditosASesionar = [];
    this.apoyosASesionar = [];
    this.inicioConsolidado = "";
    this.finConsolidado = "";
    this.productoFinancieroId = null;
  }
  ngOnInit() {
  }
  fetchDataSesionar() {
    this.isLoadingTerceraSesion = true;
    this.progressTerceraSesion = 0;
    this.fetchDataService.progress$.subscribe((progress) => {
      this.progressTerceraSesion = progress;
    });
    this.fetchDataService.getAllData({
      conditionals: {
        dictaminado_fecha: null,
        sesion_id: null,
        deleted_at: null
      }
    }).subscribe({
      next: (data) => {
        this.creditosASesionar = data;
        this.isLoadingTerceraSesion = false;
        console.log(this.creditosASesionar);
      },
      error: () => {
        this.isLoadingConsolidado = false;
      }
    });
  }
  fetchDataSesionarCredito() {
    this.isLoadingTerceraSesion = true;
    this.progressTerceraSesion = 0;
    this.fetchDataService.progress$.subscribe((progress) => {
      this.progressTerceraSesion = progress;
    });
    this.fetchDataService.getAllData({
      conditionals: {
        deleted_at: null,
        sesion_id: this.reporteSesionCreditos
      }
    }).subscribe({
      next: (data) => {
        this.creditosASesionar = data;
        this.isLoadingTerceraSesion = false;
        console.log(this.creditosASesionar);
      },
      error: () => {
        this.isLoadingConsolidado = false;
      }
    });
  }
  generarReporteSesionar() {
    const dataSource = this.creditosASesionar.map((credito) => {
      const pf = credito.datos_persona_fisica;
      const pm = credito.datos_personas_morales;
      return {
        "No.": credito.id,
        "Programa": credito.productos_financieros?.nombre,
        "Folio": credito.folio,
        "Nombre Comercial": this.utilsSercice.nombreNegocioFromCredito(credito),
        "Raz\xF3n social/nombre PFA": this.utilsSercice.nombreClienteFromCredito(credito),
        "G\xE9nero": pf?.datos_personales?.genero != "OTRO" ? pf?.datos_personales?.genero : pf.datos_personales.genero_otro,
        "Edad": this.calcularEdad(pf?.datos_personales?.fecha_nacimiento),
        "Rfc": this.utilsSercice.rfcFromCredito(credito),
        "Correo Electr\xF3nico": this.utilsSercice.emailFromCredito(credito),
        "Telefono Principal": this.utilsSercice.primerTelefonoFromCredito(credito),
        "Sector": pf?.negocios?.tipo_empresa ?? pm?.tipo_empresa,
        "Actividad Economica": this.utilsSercice.primerActividadEconomicaFromCredito(credito),
        "Destino del cr\xE9dito": this.utilsSercice.destinoCredito(credito),
        "Calle y N\xFAmero": pf ? (pf.datos_personales?.calle ?? "") + " " + (pf.datos_personales?.no_exterior ?? "") : (pm?.calle ?? "") + (pm?.no_exterior ?? ""),
        "Colonia": pf ? pf.datos_personales?.colonia : pm?.colonia,
        "Municipio": pf ? pf.datos_personales?.ciudades?.nombre : pm?.ciudades?.nombre,
        "Localidad": pf ? pf.datos_personales?.localidad : pm?.localidad,
        "Representante Legal": this.utilsSercice.nombreClienteFromDatosPersonales(pm?.representante_legal),
        "Empleos IMSS HOMBRE": pf ? pf.negocios?.empleos_imss_hombres : pm?.empleos_imss_hombres,
        "Empleos IMSS MUJER": pf ? pf.negocios?.empleos_imss_mujeres : pm?.empleos_imss_mujeres,
        "Empleos Informales HOMBRE": pf ? pf.negocios?.empleos_informales_hombres : pm?.empleos_informales_hombres,
        "Empleos Informales MUJER": pf ? pf.negocios?.empleos_informales_mujeres : pm?.empleos_informales_mujeres,
        "Empleos a Generar HOMBRE": pf ? pf.negocios?.empleos_a_generar_hombres : pm?.empleos_a_generar_hombres,
        "Empleos a Generar MUJER": pf ? pf.negocios?.empleos_a_generar_mujeres : pm?.empleos_a_generar_mujeres,
        "Empleos Convervados HOMBRE": pf && pf.negocios ? pf.negocios.empleos_imss_hombres + pf.negocios.empleos_informales_hombres : pm ? pm.empleos_imss_hombres + pm.empleos_informales_hombres : 0,
        "Empleos Convervados MUJER": pf && pf.negocios ? pf.negocios.empleos_imss_mujeres + pf.negocios.empleos_informales_mujeres : pm ? pm.empleos_imss_mujeres + pm.empleos_informales_mujeres : 0,
        "Monto Proyecto": this.utilsSercice.totalFromInvesionProgramaCredito(credito),
        "Monto Propuesto": credito.monto_autorizado,
        "monto CHEQUE": credito.monto_autorizado
      };
    });
    this.generadorExcel.exportToExcel(dataSource, "creditos_a_sesionar");
  }
  fetchDataSesionarApoyos() {
    const tableAdvancedFilters = [];
    if (this.reporteSesionApoyos) {
      tableAdvancedFilters.push({
        relation: "solicitudesApoyosModalidades",
        conditionals: [],
        andConditionals: [
          ["estado", "=", "SESION ASIGNADA"],
          ["sesion_id", "=", this.reporteSesionApoyos.toString()]
        ]
      });
    } else {
      tableAdvancedFilters.push({
        relation: "solicitudesApoyosModalidades",
        conditionals: [],
        andConditionals: [
          ["sesion_id", "IS NULL", null]
        ]
      });
    }
    const extraData = {
      busqueda_avanzada: JSON.stringify(tableAdvancedFilters)
    };
    this.isLoadingTerceraSesionApoyos = true;
    this.progressTerceraSesionApoyos = 0;
    this.fetchDataApoyosService.progress$.subscribe((progress) => {
      this.progressTerceraSesionApoyos = progress;
    });
    this.fetchDataApoyosService.getAllData({
      conditionals: {
        deleted_at: null
      },
      extraData
    }).subscribe({
      next: (data) => {
        this.apoyosASesionar = data;
        this.isLoadingTerceraSesionApoyos = false;
        console.log(this.apoyosASesionar);
      },
      error: () => {
        this.isLoadingConsolidado = false;
      }
    });
  }
  generarReporteSesionarApoyos() {
    const dataSource = [];
    this.apoyosASesionar.forEach((apoyo) => {
      apoyo.solicitudes_apoyos_modalidades?.filter((m) => this.reporteSesionApoyos ? m.sesion_id == this.reporteSesionApoyos : !m.sesion_id).forEach((modalidaActual) => {
        const dp = apoyo.datos_personales;
        const year = (0, import_dayjs.default)(apoyo.created_at).year();
        modalidaActual.solicitudes_apoyos_modalidades_cotizaciones?.forEach((cotizacion) => {
          dataSource.push({
            "FOLIO CARTA INSTRUCCION:": "FBC-A-" + apoyo?.id.toString().padStart(4, "0") + "-" + cotizacion.id.toString().padStart(4, "0") + "-" + (year ? year : "N/A"),
            "ETAPA DEL APOYO": modalidaActual.estado,
            "SESI\xD3N ASIGNADA": modalidaActual.sesiones?.sesion.toUpperCase(),
            "PROGRAMA": apoyo.programas_apoyos?.nombre,
            "FOLIO": apoyo.folio,
            "FOLIO FONDOS BC": apoyo.id,
            "NOMBRE COMERCIAL": apoyo.nombre_comercial,
            "R\xC1ZON SOCIAL/NOMBRE PFAE": this.utilsSercice.nombreClienteFromDatosPersonales(dp),
            "PRIMER APELLIDO": dp?.apellido_paterno,
            "SEGUNDO APELLIDO": dp?.apellido_materno,
            "NOMBRE": dp?.nombre,
            "CURP": dp?.curp,
            "RFC": dp?.rfc,
            "MINISTRACION": modalidaActual?.modalidades_ministraciones?.modalidades?.nombre,
            "G\xC9NERO CON EL QUE SE IDENTIFICA": dp?.genero == "OTRO" ? dp.genero_otro : dp?.genero,
            "CUENTA CON ALGUNA DISCAPACIDAD?": dp?.tipos_discapacidades?.nombre ?? "NO",
            "PERTENECES A ALGUNA ETNIA NATIVA?": dp?.etnias?.nombre ?? "NO",
            "FECHA DE NACIMIENTO": dp?.fecha_nacimiento,
            "EDAD": this.calcularEdad(dp?.fecha_nacimiento),
            "ACTIVIDAD ECON\xD3MICA/PROYECTO": apoyo.descripcion_uso_recurso,
            "CALLE Y N\xDAMERO": (dp?.calle ?? "") + " " + dp?.no_exterior,
            "COLONIA": dp?.colonia,
            "LATITUD": apoyo.latitud_negocio,
            "LONGITUD": apoyo.longitud_negocio,
            "C\xD3DIGO POSTAL": dp?.codigo_postal,
            "CIUDAD": dp?.ciudades?.nombre,
            "LOCALIDAD": dp?.localidad,
            "EMAIL": dp?.email,
            "TEL\xC9FONO": this.utilsSercice.primerTelefonoFromDatosPersonales(dp),
            "IMPORTE TOTAL SOLICITADO": apoyo.apoyos_tipos_inversiones_detalles?.reduce((acc, detalle) => acc + detalle.monto_solicitado, 0),
            "MONTO POR PROVEEDOR": cotizacion.monto,
            "MONTO SUGERIDO": cotizacion.monto,
            "DESTINO DE APOYO": apoyo.apoyos_tipos_inversiones_detalles?.map((deta) => deta.nombre).join(", "),
            "NOMBRE COMERCIAL PROVEEDOR": cotizacion.apoyos_proveedores?.nombre_comercial,
            "RAZ\xD3N SOCIAL / NOMBRE PROVEEDOR": cotizacion.apoyos_proveedores?.razon_social,
            "DIRECCION DEL PROVEEDOR": cotizacion.apoyos_proveedores?.direccion,
            "TELEFONO DEL PROVEEDOR": cotizacion.apoyos_proveedores?.telefono,
            "RFC PROVEEDOR": cotizacion.apoyos_proveedores?.rfc,
            "BANCO DEL PROVEEDOR": cotizacion.apoyos_proveedores?.banco_nombre,
            "CUENTA DEL PROVEEDOR": cotizacion.apoyos_proveedores?.cuenta_bancaria,
            "CLABE PROVEEDOR": cotizacion.apoyos_proveedores?.clabe_interbancaria,
            "TOTAL DIGITOS CLABE": cotizacion.apoyos_proveedores?.clabe_interbancaria.length,
            "ESTATUS URBEM": "PRE-APROBACI\xD3N",
            "OBSERVACIONES": apoyo.observaciones,
            "ASESOR": apoyo.usuario_nombre_migrado ?? apoyo.usuarios?.nombre,
            "EXPEDIENTE": apoyo.expediente,
            "ZONA PRIORITARIA": apoyo.observaciones?.includes("PRIORITARI") ? "SI" : "NO"
          });
        });
      });
    });
    this.generadorExcel.exportToExcel(dataSource, "apoyos_a_sesionar");
  }
  /**
  * Calcula la edad a partir de una fecha de nacimiento
  * @param fechaNacimiento Puede ser un string (YYYY-MM-DD), Date object o timestamp
  * @returns Edad en años (número entero)
  */
  calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento)
      return;
    const fechaNac = new Date(fechaNacimiento);
    if (isNaN(fechaNac.getTime())) {
      return;
    }
    const hoy = /* @__PURE__ */ new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || mes === 0 && hoy.getDate() < fechaNac.getDate()) {
      edad--;
    }
    return edad;
  }
  getYesterdayDate() {
    const yesterday = /* @__PURE__ */ new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split("T")[0];
  }
  fetchDataConsolidado() {
    return __async(this, null, function* () {
      this.isLoadingConsolidado = true;
      this.progressConsolidado = 0;
      for (let i = 1; i < 9; i++) {
        setTimeout(() => {
          this.progressConsolidado += 10;
        }, 1500 * i);
      }
      setTimeout(() => {
        this.progressConsolidado += 19;
      }, 12e3);
      this.fetchDataService.progress$.subscribe((progress) => {
        this.progressConsolidado = progress;
      });
      this.creditos = yield this.consolidadoController.fetchData({
        inicio: this.inicioConsolidado,
        fin: this.finConsolidado,
        producto_financiero_id: this.productoFinancieroId
      });
      this.creditos = Array.from(new Map(this.creditos.map((credito) => [credito.id, credito])).values());
      setTimeout(() => {
        this.progressConsolidado = 100;
      }, 500);
      setTimeout(() => {
        this.isLoadingConsolidado = false;
      }, 700);
      console.log(this.creditos);
    });
  }
  generarConsolidado() {
    const dataSource = this.creditos.map((credito) => {
      const pf = credito.datos_persona_fisica;
      const pm = credito.datos_personas_morales;
      const estadoCuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(credito, false, this.finConsolidado);
      const ultimoAbono = estadoCuenta?.abonos_distribuidos?.at(-1)?.abono;
      return {
        "ID CREDITO": credito.id,
        "ID CLIENTE": this.utilsSercice.idClienteFromCredito(credito),
        "A\xD1O DE ORIGEN": this.utilsSercice.anioFromCredito(credito),
        "A\xD1O DE REESTRUCTURA": this.utilsSercice.esReestructura(credito.folio) ? this.utilsSercice.anioFromFecha(credito.fecha_reestructura) : null,
        "FOLIO": credito.folio?.toUpperCase(),
        "PROGRAMA": credito.productos_financieros?.nombre.toUpperCase(),
        "NOMBRE COMERCIAL": this.utilsSercice.nombreNegocioFromCredito(credito),
        "RAZ\xD3N SOCIAL/NOMBRE PFA": this.utilsSercice.nombreClienteFromCredito(credito),
        "EMAIL": this.utilsSercice.emailFromCredito(credito),
        "T\xC9LEFONO": this.utilsSercice.telefonosString(credito),
        "RFC": (!!pm?.rfc ? pm.rfc : pf?.datos_personales?.rfc)?.toUpperCase(),
        "DOMICILIO PARTICULAR": this.utilsSercice.domicilioParticularFromCredito(credito),
        "CIUDAD": pm?.ciudades?.nombre ?? pf?.datos_personales?.ciudades?.nombre,
        "LOCALIDAD": pm?.localidad ?? pf?.datos_personales?.localidad,
        "DOMICILIO FISCAL": this.utilsSercice.domicilioFiscalFromCredito(credito),
        "NOMBRE AVAL": this.utilsSercice.nombreClienteFromDatosPersonales(credito.datos_personales, credito),
        "CORREO ELECTRONICO AVAL": credito.datos_personales?.email,
        "TELEFONO AVAL": this.utilsSercice.primerTelefonoFromTelefonos(credito.datos_personales?.telefonos_personales),
        "NOMBRE CONSOLICITANTE": this.utilsSercice.nombreClienteFromDatosPersonales(pm?.representante_legal, credito),
        "CORREO ELECTRONICO CONSOLICITANTE": pm?.representante_legal?.email,
        "SESI\xD3N": credito.sesiones?.sesion?.toUpperCase(),
        "MONTO AUTORIZADO": this.parseToNumber(credito.monto_autorizado ?? 0),
        "CAPITAL MAS INTER\xC9S": this.parseToNumber(+(estadoCuenta?.interes_ordinario ?? 0) + +(credito.monto_autorizado ?? 0)),
        "INTERES MORATORIO": this.parseToNumber(estadoCuenta?.interes_moratorio ?? 0),
        "MONTO RECUPERADO": this.parseToNumber(estadoCuenta?.monto_total_pagado ?? 0),
        "MONTO POR RECUPERAR": this.parseToNumber(estadoCuenta?.total_a_liquidar ?? 0),
        "% MONTO RECUPERADO": estadoCuenta?.total_a_liquidar == 0 ? 100 : this.parseToNumber(estadoCuenta?.monto_total_pagado ?? 0) / this.parseToNumber(estadoCuenta?.monto_total_mas_intereses ?? 1) * 100,
        "MENSUALIDADES VENCIDAS": this.parseToNumber(estadoCuenta?.mensualidades_vencidas ?? 0),
        "MONTO VENCIDO": this.parseToNumber(estadoCuenta?.saldo_vencido ?? 0),
        "% MONTO VENCIDO": estadoCuenta?.total_a_liquidar == 0 ? 0 : this.parseToNumber((estadoCuenta?.saldo_vencido ?? 0) / this.parseToNumber(estadoCuenta?.monto_total_mas_intereses ?? 1)) * 100,
        "MONTO \xDALTIMO ABONO": +(ultimoAbono?.monto ?? 0),
        "FECHA \xDALTIMO ABONO": ultimoAbono?.fecha.substring(0, 10),
        "ESTATUS": estadoCuenta?.credito_status
      };
    });
    this.generadorExcel.exportToExcel(dataSource, "consolidado");
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
    const decimal = num - Math.floor(num);
    if (decimal < 1e-3) {
      return Math.floor(num);
    } else if (decimal > 0.999) {
      return Math.ceil(num);
    }
    return num;
  }
};
_MainReportesComponent.\u0275fac = function MainReportesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainReportesComponent)(\u0275\u0275directiveInject(FetchDataApoyosService), \u0275\u0275directiveInject(FetchDataService), \u0275\u0275directiveInject(GeneradorExcelService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(ConsolidadoHistoricoService));
};
_MainReportesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainReportesComponent, selectors: [["app-main"]], decls: 81, vars: 29, consts: [[1, "container", "my-4"], [1, "card", "rounded", "shadow-sm"], [1, "card-header", "bg-primary", "text-white"], [1, "mb-0"], [1, "bi", "bi-file-earmark-bar-graph", "me-2"], [1, "card-body", "bg-white"], [1, "mb-4", "p-3", "border", "rounded"], [1, "mb-3", "text-secondary"], [1, "bi", "bi-database", "me-2"], [1, "mb-3"], [1, "row", "mb-3"], [1, "col-12"], ["apiUrl", "api/productos_financieros", "keyDetalle", "nombre", "keyList", "id", "placeholder", "Filtrar por producto financiero", "label", "Producto Financiero:", 3, "valueChange", "value"], [1, "col-md-6"], ["for", "fechaInicio", 1, "form-label", "small", "text-muted"], [1, "input-group"], ["type", "date", "id", "fechaInicio", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], [1, "input-group-text"], [1, "bi", "bi-calendar"], ["for", "fechaFin", 1, "form-label", "small", "text-muted"], ["type", "date", "id", "fechaFin", 1, "form-control", 3, "ngModelChange", "ngModel", "min", "max"], [1, "d-flex", "gap-3"], [1, "btn", "btn-success", "flex-grow-1", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-excel", "me-2"], [1, "ms-2", "spinner-border", "spinner-border-sm"], [1, "mt-4", "p-3", "border", "rounded", "bg-light"], [1, "bi", "bi-file-excel", "me-2"], [1, "flex-grow-1"], ["apiUrl", "api/sesiones", "keyList", "id", "keyDetalle", "sesion", "placeholder", "Sesi\xF3n a reportar", 3, "valueChange", "value"], [1, "btn", "btn-warning", "flex-grow-1", 3, "click", "disabled"], [1, "bi", "bi-people-fill", "me-2"], [1, "mt-3"], [1, "small", "text-muted"], [1, "alert", "alert-info", "mt-2", "mb-0", "py-2", "small"], [1, "card-footer", "bg-light", "text-end", "small", "text-muted"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-muted", "small"], [1, "progress", 2, "height", "10px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-info"], [1, "text-center", "mt-2", "mb-0", "small", "text-muted"], [1, "alert", "alert-success", "d-flex", "align-items-center"], [1, "alert", "alert-warning", "d-flex", "align-items-center"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-warning"], [1, "bi", "bi-info-circle", "me-1"], [1, "bi", "bi-hourglass-split", "me-2"]], template: function MainReportesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Reporte de Cr\xE9ditos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "h5", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, "Preparaci\xF3n de Datos ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, MainReportesComponent_Conditional_11_Template, 10, 5, "div", 9);
    \u0275\u0275conditionalCreate(12, MainReportesComponent_Conditional_12_Template, 3, 2, "div");
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "app-autocomplete-field", 12);
    \u0275\u0275twoWayListener("valueChange", function MainReportesComponent_Template_app_autocomplete_field_valueChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.productoFinancieroId, $event) || (ctx.productoFinancieroId = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 13)(18, "label", 14);
    \u0275\u0275text(19, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15)(21, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function MainReportesComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.inicioConsolidado, $event) || (ctx.inicioConsolidado = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275element(23, "i", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13)(25, "label", 19);
    \u0275\u0275text(26, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 15)(28, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function MainReportesComponent_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.finConsolidado, $event) || (ctx.finConsolidado = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 17);
    \u0275\u0275element(30, "i", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 21)(32, "button", 22);
    \u0275\u0275listener("click", function MainReportesComponent_Template_button_click_32_listener() {
      return ctx.fetchDataConsolidado();
    });
    \u0275\u0275element(33, "i", 23);
    \u0275\u0275text(34, " Descargar Datos para consolidado ");
    \u0275\u0275conditionalCreate(35, MainReportesComponent_Conditional_35_Template, 1, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 22);
    \u0275\u0275listener("click", function MainReportesComponent_Template_button_click_36_listener() {
      return ctx.generarConsolidado();
    });
    \u0275\u0275element(37, "i", 23);
    \u0275\u0275text(38, " Exportar Reporte Consolidado ");
    \u0275\u0275conditionalCreate(39, MainReportesComponent_Conditional_39_Template, 1, 0, "span", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 25)(41, "h5", 7);
    \u0275\u0275element(42, "i", 26);
    \u0275\u0275text(43, "Cr\xE9ditos a Sesionar ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(44, MainReportesComponent_Conditional_44_Template, 10, 5, "div", 9);
    \u0275\u0275conditionalCreate(45, MainReportesComponent_Conditional_45_Template, 3, 2, "div");
    \u0275\u0275elementStart(46, "div", 21)(47, "div", 27)(48, "app-autocomplete-field", 28);
    \u0275\u0275twoWayListener("valueChange", function MainReportesComponent_Template_app_autocomplete_field_valueChange_48_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.reporteSesionCreditos, $event) || (ctx.reporteSesionCreditos = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "button", 29);
    \u0275\u0275listener("click", function MainReportesComponent_Template_button_click_49_listener() {
      return ctx.fetchDataSesionarCredito();
    });
    \u0275\u0275element(50, "i", 23);
    \u0275\u0275text(51, " Descargar Datos para Reporte de sesi\xF3n ");
    \u0275\u0275conditionalCreate(52, MainReportesComponent_Conditional_52_Template, 1, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 29);
    \u0275\u0275listener("click", function MainReportesComponent_Template_button_click_53_listener() {
      return ctx.generarReporteSesionar();
    });
    \u0275\u0275element(54, "i", 30);
    \u0275\u0275text(55, " Cr\xE9ditos a Sesionar ");
    \u0275\u0275conditionalCreate(56, MainReportesComponent_Conditional_56_Template, 1, 0, "span", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 31);
    \u0275\u0275conditionalCreate(58, MainReportesComponent_Conditional_58_Template, 3, 0, "div", 32);
    \u0275\u0275conditionalCreate(59, MainReportesComponent_Conditional_59_Template, 3, 0, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 25)(61, "h5", 7);
    \u0275\u0275element(62, "i", 26);
    \u0275\u0275text(63, "Apoyos a Sesionar ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(64, MainReportesComponent_Conditional_64_Template, 10, 5, "div", 9);
    \u0275\u0275conditionalCreate(65, MainReportesComponent_Conditional_65_Template, 3, 2, "div");
    \u0275\u0275elementStart(66, "div", 21)(67, "div", 27)(68, "app-autocomplete-field", 28);
    \u0275\u0275twoWayListener("valueChange", function MainReportesComponent_Template_app_autocomplete_field_valueChange_68_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.reporteSesionApoyos, $event) || (ctx.reporteSesionApoyos = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "button", 29);
    \u0275\u0275listener("click", function MainReportesComponent_Template_button_click_69_listener() {
      return ctx.fetchDataSesionarApoyos();
    });
    \u0275\u0275element(70, "i", 23);
    \u0275\u0275text(71, " Descargar Datos para Reporte de sesi\xF3n ");
    \u0275\u0275conditionalCreate(72, MainReportesComponent_Conditional_72_Template, 1, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "button", 29);
    \u0275\u0275listener("click", function MainReportesComponent_Template_button_click_73_listener() {
      return ctx.generarReporteSesionarApoyos();
    });
    \u0275\u0275element(74, "i", 30);
    \u0275\u0275text(75, " Apoyos a Sesionar ");
    \u0275\u0275conditionalCreate(76, MainReportesComponent_Conditional_76_Template, 1, 0, "span", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 31);
    \u0275\u0275conditionalCreate(78, MainReportesComponent_Conditional_78_Template, 3, 0, "div", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "div", 34);
    \u0275\u0275text(80, " \xDAltima actualizaci\xF3n: Hoy ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx.isLoadingConsolidado ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoadingConsolidado ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx.productoFinancieroId);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.inicioConsolidado);
    \u0275\u0275property("max", ctx.finConsolidado);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.finConsolidado);
    \u0275\u0275property("min", ctx.inicioConsolidado)("max", ctx.getYesterdayDate());
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isLoadingConsolidado);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoadingConsolidado ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.creditos.length === 0 || ctx.isLoadingConsolidado);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoadingConsolidado ? 39 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isLoadingTerceraSesion ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoadingTerceraSesion ? 45 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx.reporteSesionCreditos);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoadingTerceraSesion);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoadingTerceraSesion ? 52 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.creditosASesionar.length === 0 || ctx.isLoadingTerceraSesion);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoadingTerceraSesion ? 56 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.creditos.length > 0 ? 58 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoadingTerceraSesion ? 59 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isLoadingTerceraSesionApoyos ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoadingTerceraSesionApoyos ? 65 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx.reporteSesionApoyos);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoadingTerceraSesionApoyos);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoadingTerceraSesionApoyos ? 72 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.apoyosASesionar.length === 0 || ctx.isLoadingTerceraSesionApoyos);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoadingTerceraSesionApoyos ? 76 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isLoadingTerceraSesionApoyos ? 78 : -1);
  }
}, dependencies: [
  AutocompleteFieldComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var MainReportesComponent = _MainReportesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainReportesComponent, [{
    type: Component,
    args: [{ selector: "app-main", imports: [
      AutocompleteFieldComponent,
      FormsModule
    ], template: '<div class="container my-4">\n  <div class="card rounded shadow-sm">\n    <div class="card-header bg-primary text-white">\n      <h3 class="mb-0">\n        <i class="bi bi-file-earmark-bar-graph me-2"></i>Reporte de Cr\xE9ditos\n      </h3>\n    </div>\n\n    <div class="card-body bg-white">\n      <!-- Secci\xF3n de Carga de Datos para Consolidado -->\n      <div class="mb-4 p-3 border rounded">\n        <h5 class="mb-3 text-secondary">\n          <i class="bi bi-database me-2"></i>Preparaci\xF3n de Datos\n        </h5>\n\n        <!-- Barra de Progreso solo para Consolidado -->\n        @if (isLoadingConsolidado) {\n          <div class="mb-3">\n            <div class="d-flex justify-content-between mb-2">\n              <span class="text-muted small">Progreso: {{progressConsolidado}}%</span>\n              <span class="text-muted small">{{progressConsolidado}}/100</span>\n            </div>\n            <div class="progress" style="height: 10px;">\n              <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"\n                [style.width.%]="progressConsolidado" [attr.aria-valuenow]="progressConsolidado" aria-valuemin="0"\n                aria-valuemax="100">\n              </div>\n            </div>\n            <p class="text-center mt-2 mb-0 small text-muted">\n              Generando reporte consolidado...\n            </p>\n          </div>\n        }\n\n        <!-- Mensajes post-carga -->\n        @if (!isLoadingConsolidado) {\n          <div>\n            @if (creditos.length > 0) {\n              <div class="alert alert-success d-flex align-items-center">\n                <i class="bi bi-check-circle-fill me-2"></i>\n                <span>Datos listos para generar reportes ({{creditos.length}} cr\xE9ditos)</span>\n              </div>\n            }\n            @if (creditos.length === 0) {\n              <div class="alert alert-warning d-flex align-items-center">\n                <i class="bi bi-exclamation-triangle-fill me-2"></i>\n                <span>No hay datos disponibles para generar el consolidado</span>\n              </div>\n            }\n          </div>\n        }\n\n        <!-- Filtros por Producto Financiero -->\n        <div class="row mb-3">\n          <div class="col-12">\n            <app-autocomplete-field apiUrl="api/productos_financieros" keyDetalle="nombre" keyList="id" [(value)]="productoFinancieroId" placeholder="Filtrar por producto financiero" label="Producto Financiero:"></app-autocomplete-field>\n          </div>\n        </div>\n\n        <!-- Filtros por Fecha -->\n        <div class="row mb-3">\n          <div class="col-md-6">\n            <label for="fechaInicio" class="form-label small text-muted">Fecha Inicio</label>\n            <div class="input-group">\n              <input type="date" class="form-control" id="fechaInicio" [(ngModel)]="inicioConsolidado"\n                [max]="finConsolidado">\n              <span class="input-group-text"><i class="bi bi-calendar"></i></span>\n            </div>\n          </div>\n          <div class="col-md-6">\n            <label for="fechaFin" class="form-label small text-muted">Fecha Fin</label>\n            <div class="input-group">\n              <input type="date" class="form-control" id="fechaFin" [(ngModel)]="finConsolidado"\n                [min]="inicioConsolidado" [max]="getYesterdayDate()">\n              <span class="input-group-text"><i class="bi bi-calendar"></i></span>\n            </div>\n          </div>\n        </div>\n\n        <div class="d-flex gap-3">\n          <button class="btn btn-success flex-grow-1" [disabled]="isLoadingConsolidado"\n            (click)="fetchDataConsolidado()">\n            <i class="bi bi-file-earmark-excel me-2"></i>\n            Descargar Datos para consolidado\n            @if (isLoadingConsolidado) {\n              <span class="ms-2 spinner-border spinner-border-sm"></span>\n            }\n          </button>\n          <button class="btn btn-success flex-grow-1" [disabled]="creditos.length === 0 || isLoadingConsolidado"\n            (click)="generarConsolidado()">\n            <i class="bi bi-file-earmark-excel me-2"></i>\n            Exportar Reporte Consolidado\n            @if (isLoadingConsolidado) {\n              <span class="ms-2 spinner-border spinner-border-sm"></span>\n            }\n          </button>\n        </div>\n      </div>\n\n      <!-- Secci\xF3n de Generaci\xF3n de Reportes -->\n      <div class="mt-4 p-3 border rounded bg-light">\n        <h5 class="mb-3 text-secondary">\n          <i class="bi bi-file-excel me-2"></i>Cr\xE9ditos a Sesionar\n        </h5>\n      \n\n        <!-- Barra de Progreso solo para Consolidado -->\n        @if (isLoadingTerceraSesion) {\n          <div class="mb-3">\n            <div class="d-flex justify-content-between mb-2">\n              <span class="text-muted small">Progreso: {{progressTerceraSesion}}%</span>\n              <span class="text-muted small">{{progressTerceraSesion}}/100</span>\n            </div>\n            <div class="progress" style="height: 10px;">\n              <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"\n                [style.width.%]="progressTerceraSesion" [attr.aria-valuenow]="progressTerceraSesion" aria-valuemin="0"\n                aria-valuemax="100">\n              </div>\n            </div>\n            <p class="text-center mt-2 mb-0 small text-muted">\n              Generando reporte consolidado...\n            </p>\n          </div>\n        }\n\n        <!-- Mensajes post-carga -->\n        @if (!isLoadingTerceraSesion) {\n          <div>\n            @if (creditosASesionar.length > 0) {\n              <div class="alert alert-success d-flex align-items-center">\n                <i class="bi bi-check-circle-fill me-2"></i>\n                <span>Datos listos para generar reportes ({{creditosASesionar.length}} cr\xE9ditos)</span>\n              </div>\n            }\n            @if (creditosASesionar.length === 0) {\n              <div class="alert alert-warning d-flex align-items-center">\n                <i class="bi bi-exclamation-triangle-fill me-2"></i>\n                <span>No hay datos disponibles para generar el reporte</span>\n              </div>\n            }\n          </div>\n        }\n\n        <div class="d-flex gap-3">\n          <div class="flex-grow-1">\n            <app-autocomplete-field apiUrl="api/sesiones" keyList="id" keyDetalle="sesion"\n              [(value)]="reporteSesionCreditos" placeholder="Sesi\xF3n a reportar">\n            </app-autocomplete-field>\n          </div>\n\n          <button class="btn btn-warning flex-grow-1" [disabled]="isLoadingTerceraSesion" (click)="fetchDataSesionarCredito()">\n            <i class="bi bi-file-earmark-excel me-2"></i>\n            Descargar Datos para Reporte de sesi\xF3n\n            @if (isLoadingTerceraSesion) {\n              <span class="ms-2 spinner-border spinner-border-sm"></span>\n            }\n          </button>\n\n          <button class="btn btn-warning flex-grow-1"\n            [disabled]="creditosASesionar.length === 0 || isLoadingTerceraSesion" (click)="generarReporteSesionar()">\n            <i class="bi bi-people-fill me-2"></i>\n            Cr\xE9ditos a Sesionar\n            @if (isLoadingTerceraSesion) {\n              <span class="ms-2 spinner-border spinner-border-sm"></span>\n            }\n          </button>\n        </div>\n\n        <div class="mt-3">\n          @if (creditos.length > 0) {\n            <div class="small text-muted">\n              <i class="bi bi-info-circle me-1"></i>\n              Seleccione una opci\xF3n de reporte\n            </div>\n          }\n\n          <!-- Mensaje de carga para Tercera Sesi\xF3n -->\n          @if (isLoadingTerceraSesion) {\n            <div class="alert alert-info mt-2 mb-0 py-2 small">\n              <i class="bi bi-hourglass-split me-2"></i>\n              Procesando cr\xE9ditos para tercera sesi\xF3n...\n            </div>\n          }\n        </div>\n      </div>\n\n      <!-- Secci\xF3n de Generaci\xF3n de Reportes Apoyos -->\n      <div class="mt-4 p-3 border rounded bg-light">\n        <h5 class="mb-3 text-secondary">\n          <i class="bi bi-file-excel me-2"></i>Apoyos a Sesionar\n        </h5>\n\n        <!-- Barra de Progreso solo para Consolidado -->\n        @if (isLoadingTerceraSesionApoyos) {\n          <div class="mb-3">\n            <div class="d-flex justify-content-between mb-2">\n              <span class="text-muted small">Progreso: {{progressTerceraSesionApoyos}}%</span>\n              <span class="text-muted small">{{progressTerceraSesionApoyos}}/100</span>\n            </div>\n            <div class="progress" style="height: 10px;">\n              <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"\n                [style.width.%]="progressTerceraSesionApoyos" [attr.aria-valuenow]="progressTerceraSesionApoyos"\n                aria-valuemin="0" aria-valuemax="100">\n              </div>\n            </div>\n            <p class="text-center mt-2 mb-0 small text-muted">\n              Generando reporte apoyos por sesionar...\n            </p>\n          </div>\n        }\n\n        <!-- Mensajes post-carga -->\n        @if (!isLoadingTerceraSesionApoyos) {\n          <div>\n            @if (apoyosASesionar.length > 0) {\n              <div class="alert alert-success d-flex align-items-center">\n                <i class="bi bi-check-circle-fill me-2"></i>\n                <span>Datos listos para generar reportes ({{apoyosASesionar.length}} apoyos)</span>\n              </div>\n            }\n            @if (apoyosASesionar.length === 0) {\n              <div class="alert alert-warning d-flex align-items-center">\n                <i class="bi bi-exclamation-triangle-fill me-2"></i>\n                <span>No hay datos disponibles para generar el reporte</span>\n              </div>\n            }\n          </div>\n        }\n\n        <div class="d-flex gap-3">\n          <div class="flex-grow-1">\n            <app-autocomplete-field apiUrl="api/sesiones" keyList="id" keyDetalle="sesion"\n              [(value)]="reporteSesionApoyos" placeholder="Sesi\xF3n a reportar">\n            </app-autocomplete-field>\n          </div>\n\n          <button class="btn btn-warning flex-grow-1" [disabled]="isLoadingTerceraSesionApoyos"\n            (click)="fetchDataSesionarApoyos()">\n            <i class="bi bi-file-earmark-excel me-2"></i>\n            Descargar Datos para Reporte de sesi\xF3n\n            @if (isLoadingTerceraSesionApoyos) {\n              <span class="ms-2 spinner-border spinner-border-sm"></span>\n            }\n          </button>\n\n          <button class="btn btn-warning flex-grow-1"\n            [disabled]="apoyosASesionar.length === 0 || isLoadingTerceraSesionApoyos"\n            (click)="generarReporteSesionarApoyos()">\n            <i class="bi bi-people-fill me-2"></i>\n            Apoyos a Sesionar\n            @if (isLoadingTerceraSesionApoyos) {\n              <span class="ms-2 spinner-border spinner-border-sm"></span>\n            }\n          </button>\n        </div>\n\n        <div class="mt-3">\n          <!-- Mensaje de carga para Tercera Sesi\xF3n -->\n          @if (isLoadingTerceraSesionApoyos) {\n            <div class="alert alert-info mt-2 mb-0 py-2 small">\n              <i class="bi bi-hourglass-split me-2"></i>\n              Procesando apoyos para tercera sesi\xF3n...\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="card-footer bg-light text-end small text-muted">\n    \xDAltima actualizaci\xF3n: Hoy\n  </div>\n</div>' }]
  }], () => [{ type: FetchDataApoyosService }, { type: FetchDataService }, { type: GeneradorExcelService }, { type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: ConsolidadoHistoricoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainReportesComponent, { className: "MainReportesComponent", filePath: "src/app/main/reportes/main/main.component.ts", lineNumber: 24 });
})();

// src/app/main/reportes/reportes.routes.ts
var reportesRoutes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainReportesComponent }
];
export {
  reportesRoutes
};
//# sourceMappingURL=chunk-NVDSLPNK.js.map
