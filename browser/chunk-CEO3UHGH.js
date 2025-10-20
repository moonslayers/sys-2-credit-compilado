import {
  PagoLayoutService
} from "./chunk-KTMHVK5V.js";
import {
  InformesComponent
} from "./chunk-JI2WSE6J.js";
import {
  DashboardHistoricoComponent
} from "./chunk-DXFZFSKC.js";
import {
  ContratoMachoteCartaInstruccionesService
} from "./chunk-5XVKGOXT.js";
import {
  COBRANZA_COLUMNS_CLUSTERS,
  DatesPickerComponent,
  InformeCobranzaService
} from "./chunk-USH5HIOA.js";
import {
  GraphsViewComponent,
  InformeTablaDinamicaLocalComponent,
  ProgressBarConsolidadoComponent,
  TablaLocalService
} from "./chunk-HEFVS2VO.js";
import "./chunk-6DPENKFB.js";
import {
  GeneradorExcelService
} from "./chunk-BBNJFIFW.js";
import "./chunk-3HCUHHOO.js";
import "./chunk-LROCG2JY.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  ApoyosCartaInstruccionesService
} from "./chunk-FJHR76RM.js";
import "./chunk-E5ZUYL3D.js";
import "./chunk-SDTK5VY4.js";
import "./chunk-K6WRKREK.js";
import "./chunk-NWCMIO4X.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import {
  SolicitudApoyoModalidadCotizacionService
} from "./chunk-GTPYZBE6.js";
import {
  SolicitudApoyoService
} from "./chunk-OBCD5SW4.js";
import "./chunk-MLBICDWK.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
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
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  PatternValidator,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  TitleCasePipe
} from "./chunk-ZSRCSTKI.js";
import {
  BehaviorSubject,
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  firstValueFrom,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/main/informes/periodo/informe-periodo.component.ts
var _InformePeriodoComponent = class _InformePeriodoComponent {
  constructor() {
    this.trendDataMensual = [
      { label: "Ene", value: 125e4, color: "#3498db" },
      { label: "Feb", value: 132e4, color: "#3498db" },
      { label: "Mar", value: 145e4, color: "#3498db" },
      { label: "Abr", value: 138e4, color: "#3498db" },
      { label: "May", value: 156e4, color: "#3498db" },
      { label: "Jun", value: 168e4, color: "#3498db" },
      { label: "Jul", value: 172e4, color: "#3498db" },
      { label: "Ago", value: 185e4, color: "#3498db" },
      { label: "Sep", value: 192e4, color: "#3498db" },
      { label: "Oct", value: 205e4, color: "#3498db" },
      { label: "Nov", value: 218e4, color: "#3498db" },
      { label: "Dic", value: 225e4, color: "#3498db" }
    ];
    this.productoData = [
      { label: "Emprende empresarial", value: 485e4, color: "#2ecc71" },
      { label: "Tu idea tu negocio", value: 325e4, color: "#3498db" },
      { label: "Emprende PFAE", value: 285e4, color: "#f39c12" },
      { label: "50 y m\xE1s", value: 198e4, color: "#e74c3c" },
      { label: "Emprende tradicional", value: 156e4, color: "#9b59b6" },
      { label: "Emprende PM", value: 985e3, color: "#1abc9c" }
    ];
    this.municipioData = [
      { label: "Ensenada", value: 425e4, color: "#3498db" },
      { label: "San Felipe", value: 285e4, color: "#2ecc71" },
      { label: "Mexicali", value: 198e4, color: "#f39c12" },
      { label: "Playas de rosarito", value: 156e4, color: "#e74c3c" },
      { label: "Tijuana", value: 125e4, color: "#9b59b6" },
      { label: "Otros", value: 189e4, color: "#95a5a6" }
    ];
    this.sectorData = [
      { label: "Comercio", value: 385e4, color: "#3498db" },
      { label: "Servicios", value: 295e4, color: "#2ecc71" },
      { label: "Industria", value: 225e4, color: "#f39c12" },
      { label: "Agropecuario", value: 185e4, color: "#e74c3c" },
      { label: "Construcci\xF3n", value: 145e4, color: "#9b59b6" },
      { label: "Transporte", value: 985e3, color: "#1abc9c" }
    ];
    this.estadoLabels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    this.estadoDataSets = [
      {
        label: "Aprobadas",
        data: [145, 162, 178, 155, 192, 205, 218, 235, 248, 265, 278, 290],
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        borderWidth: 1
      },
      {
        label: "Rechazadas",
        data: [25, 28, 32, 35, 30, 28, 32, 35, 38, 42, 45, 48],
        backgroundColor: "#e74c3c",
        borderColor: "#c0392b",
        borderWidth: 1
      },
      {
        label: "Pendientes",
        data: [35, 38, 42, 45, 40, 38, 42, 45, 48, 52, 55, 58],
        backgroundColor: "#f39c12",
        borderColor: "#e67e22",
        borderWidth: 1
      },
      {
        label: "En Proceso",
        data: [20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48],
        backgroundColor: "#3498db",
        borderColor: "#2980b9",
        borderWidth: 1
      }
    ];
    this.montoLabels = ["Microcr\xE9ditos", "PYMES", "Rural", "Industria", "Comercio"];
    this.montoDataSets = [
      {
        label: "0 - $5,000",
        data: [420, 285, 120, 95, 65],
        backgroundColor: "#3498db",
        borderColor: "#2980b9",
        borderWidth: 1
      },
      {
        label: "$5,001 - $20,000",
        data: [315, 420, 235, 185, 90],
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        borderWidth: 1
      },
      {
        label: "$20,001 - $50,000",
        data: [185, 295, 210, 65, 30],
        backgroundColor: "#f39c12",
        borderColor: "#e67e22",
        borderWidth: 1
      },
      {
        label: "$50,001 - $100,000",
        data: [45, 120, 145, 85, 30],
        backgroundColor: "#e74c3c",
        borderColor: "#c0392b",
        borderWidth: 1
      },
      {
        label: "+$100,000",
        data: [20, 65, 75, 25, 13],
        backgroundColor: "#9b59b6",
        borderColor: "#8e44ad",
        borderWidth: 1
      }
    ];
    this.rendimientoLabels = ["Tasa Aprobaci\xF3n", "Monto Promedio", "Recuperaci\xF3n", "Satisfacci\xF3n", "Crecimiento"];
    this.rendimientoDataSets = [
      {
        label: "Microcr\xE9ditos",
        data: [85, 75, 92, 88, 78],
        backgroundColor: "rgba(46, 204, 113, 0.2)",
        borderColor: "#2ecc71",
        borderWidth: 2
      },
      {
        label: "PYMES",
        data: [72, 90, 85, 75, 82],
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        borderColor: "#3498db",
        borderWidth: 2
      },
      {
        label: "PFAES3",
        data: [65, 95, 78, 70, 68],
        backgroundColor: "rgba(243, 156, 18, 0.2)",
        borderColor: "#f39c12",
        borderWidth: 2
      }
    ];
  }
};
_InformePeriodoComponent.\u0275fac = function InformePeriodoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformePeriodoComponent)();
};
_InformePeriodoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformePeriodoComponent, selectors: [["app-informe-periodo"]], decls: 109, vars: 17, consts: [[1, "container-fluid", "rounded", "bg-white", "p-3"], [1, "dashboard-header", "mb-4"], [1, "fw-bold", "text-primary"], [1, "text-muted"], [1, "row", "mb-4"], [1, "col-md-3", "col-6", "mb-3"], [1, "card", "kpi-card", "h-100"], [1, "card-body", "text-center"], [1, "bi", "bi-currency-dollar", "display-6", "text-primary", "mb-2"], [1, "card-title"], [1, "card-value", "text-primary"], [1, "card-text", "small", "text-muted"], [1, "bi", "bi-people", "display-6", "text-success", "mb-2"], [1, "card-value", "text-success"], [1, "bi", "bi-graph-up", "display-6", "text-warning", "mb-2"], [1, "card-value", "text-warning"], [1, "bi", "bi-check-circle", "display-6", "text-info", "mb-2"], [1, "card-value", "text-info"], [1, "row"], [1, "col-lg-8", "col-md-12", "mb-4"], [1, "card", "shadow", "mb-4"], [1, "card-header", "bg-white"], [1, "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "card-body"], ["currentGraph", "line", "title", "Inversi\xF3n Mensual", "subtitle", "Evoluci\xF3n de desembolsos 2024", 3, "data", "currency"], [1, "card", "shadow"], ["currentGraph", "bar", "title", "Inversi\xF3n por Producto", "subtitle", "Distribuci\xF3n por tipo de financiamiento", 3, "data", "chartMaxValue", "currency"], [1, "col-lg-4", "col-md-12"], [1, "card", "mb-4"], ["currentGraph", "dougnut", "title", "Por Municipio", "subtitle", "Distribuci\xF3n geogr\xE1fica", 3, "data", "currency"], ["currentGraph", "pie", "title", "Por Sector Econ\xF3mico", "subtitle", "Inversi\xF3n por actividad econ\xF3mica", 3, "data", "currency"], [1, "card"], ["currentGraph", "comparison-bar", "title", "Estado Solicitudes", "subtitle", "Aprobadas vs Rechazadas vs Pendientes", 3, "dataSets", "labels", "chartMaxValue"], [1, "row", "mt-4"], [1, "col-md-6", "mb-4"], [1, "card", "h-100"], ["currentGraph", "stacked-bar", "title", "Por Rango de Monto", "subtitle", "Distribuci\xF3n por tama\xF1o de inversi\xF3n", 3, "dataSets", "labels", "currency"], ["currentGraph", "radar", "title", "Rendimiento Comparativo", "subtitle", "M\xE9tricas por producto financiero", 3, "dataSets", "labels"]], template: function InformePeriodoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Dashboard de Financiamiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "Reporte completo de inversiones y productos financieros");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
    \u0275\u0275element(10, "i", 8);
    \u0275\u0275elementStart(11, "h5", 9);
    \u0275\u0275text(12, "Total Invertido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3", 10);
    \u0275\u0275text(14, "$15.8M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 11);
    \u0275\u0275text(16, "+12.5% vs trimestre anterior");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 5)(18, "div", 6)(19, "div", 7);
    \u0275\u0275element(20, "i", 12);
    \u0275\u0275elementStart(21, "h5", 9);
    \u0275\u0275text(22, "Clientes Atendidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3", 13);
    \u0275\u0275text(24, "2,458");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 11);
    \u0275\u0275text(26, "+8.3% crecimiento anual");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 5)(28, "div", 6)(29, "div", 7);
    \u0275\u0275element(30, "i", 14);
    \u0275\u0275elementStart(31, "h5", 9);
    \u0275\u0275text(32, "Ticket Promedio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "h3", 15);
    \u0275\u0275text(34, "$6,425");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 11);
    \u0275\u0275text(36, "+5.2% vs a\xF1o anterior");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 5)(38, "div", 6)(39, "div", 7);
    \u0275\u0275element(40, "i", 16);
    \u0275\u0275elementStart(41, "h5", 9);
    \u0275\u0275text(42, "Tasa de Aprobaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h3", 17);
    \u0275\u0275text(44, "78.5%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 11);
    \u0275\u0275text(46, "3.2% mejor que promedio");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(47, "div", 18)(48, "div", 19)(49, "div", 20)(50, "div", 21)(51, "h5", 22);
    \u0275\u0275text(52, "Evoluci\xF3n Mensual de Inversiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 23);
    \u0275\u0275text(54, "Tendencia de desembolsos por mes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 24);
    \u0275\u0275element(56, "app-graphs-view", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 26)(58, "div", 21)(59, "h5", 22);
    \u0275\u0275text(60, "Distribuci\xF3n por Producto Financiero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 23);
    \u0275\u0275text(62, "Inversi\xF3n por tipo de producto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 24);
    \u0275\u0275element(64, "app-graphs-view", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 28)(66, "div", 29)(67, "div", 21)(68, "h5", 22);
    \u0275\u0275text(69, "Inversi\xF3n por Municipio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 23);
    \u0275\u0275text(71, "Top 5 municipios con mayor inversi\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 24);
    \u0275\u0275element(73, "app-graphs-view", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 29)(75, "div", 21)(76, "h5", 22);
    \u0275\u0275text(77, "Inversi\xF3n por Sector");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p", 23);
    \u0275\u0275text(79, "Distribuci\xF3n por sector econ\xF3mico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 24);
    \u0275\u0275element(81, "app-graphs-view", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 32)(83, "div", 21)(84, "h5", 22);
    \u0275\u0275text(85, "Estado de Solicitudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p", 23);
    \u0275\u0275text(87, "Distribuci\xF3n por estado de aprobaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 24);
    \u0275\u0275element(89, "app-graphs-view", 33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(90, "div", 34)(91, "div", 35)(92, "div", 36)(93, "div", 21)(94, "h5", 22);
    \u0275\u0275text(95, "Inversi\xF3n por Rango de Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "p", 23);
    \u0275\u0275text(97, "Distribuci\xF3n por tama\xF1o de financiamiento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 24);
    \u0275\u0275element(99, "app-graphs-view", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 35)(101, "div", 36)(102, "div", 21)(103, "h5", 22);
    \u0275\u0275text(104, "Rendimiento por Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 23);
    \u0275\u0275text(106, "Comparativa de efectividad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(107, "div", 24);
    \u0275\u0275element(108, "app-graphs-view", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(56);
    \u0275\u0275property("data", ctx.trendDataMensual)("currency", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("data", ctx.productoData)("chartMaxValue", 7e6)("currency", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("data", ctx.municipioData)("currency", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("data", ctx.sectorData)("currency", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("dataSets", ctx.estadoDataSets)("labels", ctx.estadoLabels)("chartMaxValue", 2e3);
    \u0275\u0275advance(10);
    \u0275\u0275property("dataSets", ctx.montoDataSets)("labels", ctx.montoLabels)("currency", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("dataSets", ctx.rendimientoDataSets)("labels", ctx.rendimientoLabels);
  }
}, dependencies: [GraphsViewComponent], styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 15px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.12);\n}\n.kpi-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 10px 0;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);\n}\n.card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  border-bottom: 1px solid #e9ecef;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n/*# sourceMappingURL=informe-periodo.component.css.map */"] });
var InformePeriodoComponent = _InformePeriodoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformePeriodoComponent, [{
    type: Component,
    args: [{ selector: "app-informe-periodo", imports: [
      GraphsViewComponent
    ], template: '<div class="container-fluid rounded bg-white p-3 ">\n  <!-- Header -->\n  <div class="dashboard-header mb-4">\n    <h2 class="fw-bold text-primary">Dashboard de Financiamiento</h2>\n    <p class="text-muted">Reporte completo de inversiones y productos financieros</p>\n  </div>\n\n  <!-- KPI Cards -->\n  <div class="row mb-4">\n    <div class="col-md-3 col-6 mb-3">\n      <div class="card kpi-card h-100">\n        <div class="card-body text-center">\n          <i class="bi bi-currency-dollar display-6 text-primary mb-2"></i>\n          <h5 class="card-title">Total Invertido</h5>\n          <h3 class="card-value text-primary">$15.8M</h3>\n          <p class="card-text small text-muted">+12.5% vs trimestre anterior</p>\n        </div>\n      </div>\n    </div>\n    <div class="col-md-3 col-6 mb-3">\n      <div class="card kpi-card h-100">\n        <div class="card-body text-center">\n          <i class="bi bi-people display-6 text-success mb-2"></i>\n          <h5 class="card-title">Clientes Atendidos</h5>\n          <h3 class="card-value text-success">2,458</h3>\n          <p class="card-text small text-muted">+8.3% crecimiento anual</p>\n        </div>\n      </div>\n    </div>\n    <div class="col-md-3 col-6 mb-3">\n      <div class="card kpi-card h-100">\n        <div class="card-body text-center">\n          <i class="bi bi-graph-up display-6 text-warning mb-2"></i>\n          <h5 class="card-title">Ticket Promedio</h5>\n          <h3 class="card-value text-warning">$6,425</h3>\n          <p class="card-text small text-muted">+5.2% vs a\xF1o anterior</p>\n        </div>\n      </div>\n    </div>\n    <div class="col-md-3 col-6 mb-3">\n      <div class="card kpi-card h-100">\n        <div class="card-body text-center">\n          <i class="bi bi-check-circle display-6 text-info mb-2"></i>\n          <h5 class="card-title">Tasa de Aprobaci\xF3n</h5>\n          <h3 class="card-value text-info">78.5%</h3>\n          <p class="card-text small text-muted">3.2% mejor que promedio</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Main Charts Row -->\n  <div class="row">\n    <!-- Left Column - 8/12 -->\n    <div class="col-lg-8 col-md-12 mb-4">\n      <!-- Trend Chart -->\n      <div class="card shadow mb-4">\n        <div class="card-header bg-white">\n          <h5 class="mb-0">Evoluci\xF3n Mensual de Inversiones</h5>\n          <p class="text-muted small mb-0">Tendencia de desembolsos por mes</p>\n        </div>\n        <div class="card-body">\n          <app-graphs-view [data]="trendDataMensual" currentGraph="line" title="Inversi\xF3n Mensual"\n            subtitle="Evoluci\xF3n de desembolsos 2024" [currency]="true">\n          </app-graphs-view>\n        </div>\n      </div>\n\n      <!-- Product Distribution -->\n      <div class="card shadow">\n        <div class="card-header bg-white">\n          <h5 class="mb-0">Distribuci\xF3n por Producto Financiero</h5>\n          <p class="text-muted small mb-0">Inversi\xF3n por tipo de producto</p>\n        </div>\n        <div class="card-body">\n          <app-graphs-view [data]="productoData" currentGraph="bar" title="Inversi\xF3n por Producto"\n            subtitle="Distribuci\xF3n por tipo de financiamiento" [chartMaxValue]="7000000" [currency]="true">\n          </app-graphs-view>\n        </div>\n      </div>\n    </div>\n\n    <!-- Right Column - 4/12 -->\n    <div class="col-lg-4 col-md-12">\n      <!-- Municipality Distribution -->\n      <div class="card mb-4">\n        <div class="card-header bg-white">\n          <h5 class="mb-0">Inversi\xF3n por Municipio</h5>\n          <p class="text-muted small mb-0">Top 5 municipios con mayor inversi\xF3n</p>\n        </div>\n        <div class="card-body">\n          <app-graphs-view [data]="municipioData" currentGraph="dougnut" title="Por Municipio"\n            subtitle="Distribuci\xF3n geogr\xE1fica" [currency]="true">\n          </app-graphs-view>\n        </div>\n      </div>\n\n      <!-- Sector Distribution -->\n      <div class="card mb-4">\n        <div class="card-header bg-white">\n          <h5 class="mb-0">Inversi\xF3n por Sector</h5>\n          <p class="text-muted small mb-0">Distribuci\xF3n por sector econ\xF3mico</p>\n        </div>\n        <div class="card-body">\n          <app-graphs-view [data]="sectorData" currentGraph="pie" title="Por Sector Econ\xF3mico"\n            subtitle="Inversi\xF3n por actividad econ\xF3mica" [currency]="true">\n          </app-graphs-view>\n        </div>\n      </div>\n\n      <!-- Approval Status -->\n      <div class="card">\n        <div class="card-header bg-white">\n          <h5 class="mb-0">Estado de Solicitudes</h5>\n          <p class="text-muted small mb-0">Distribuci\xF3n por estado de aprobaci\xF3n</p>\n        </div>\n        <div class="card-body">\n          <app-graphs-view [dataSets]="estadoDataSets" [labels]="estadoLabels" currentGraph="comparison-bar"\n            title="Estado Solicitudes" subtitle="Aprobadas vs Rechazadas vs Pendientes" [chartMaxValue]="2000">\n          </app-graphs-view>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Bottom Row - Additional Charts -->\n  <div class="row mt-4">\n    <div class="col-md-6 mb-4">\n      <div class="card h-100">\n        <div class="card-header bg-white">\n          <h5 class="mb-0">Inversi\xF3n por Rango de Monto</h5>\n          <p class="text-muted small mb-0">Distribuci\xF3n por tama\xF1o de financiamiento</p>\n        </div>\n        <div class="card-body">\n          <app-graphs-view [dataSets]="montoDataSets" [labels]="montoLabels" currentGraph="stacked-bar"\n            title="Por Rango de Monto" subtitle="Distribuci\xF3n por tama\xF1o de inversi\xF3n" [currency]="true">\n          </app-graphs-view>\n        </div>\n      </div>\n    </div>\n    <div class="col-md-6 mb-4">\n      <div class="card h-100">\n        <div class="card-header bg-white">\n          <h5 class="mb-0">Rendimiento por Producto</h5>\n          <p class="text-muted small mb-0">Comparativa de efectividad</p>\n        </div>\n        <div class="card-body">\n          <app-graphs-view [dataSets]="rendimientoDataSets" [labels]="rendimientoLabels" currentGraph="radar"\n            title="Rendimiento Comparativo" subtitle="M\xE9tricas por producto financiero">\n          </app-graphs-view>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>', styles: ["/* src/app/main/informes/periodo/informe-periodo.component.css */\n.dashboard-container {\n  padding: 20px;\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n.dashboard-header {\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 15px;\n}\n.kpi-card {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.kpi-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.12);\n}\n.kpi-card .card-value {\n  font-weight: 700;\n  margin: 10px 0;\n}\n.card {\n  border: none;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);\n}\n.card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  border-bottom: 1px solid #e9ecef;\n  border-radius: 12px 12px 0 0 !important;\n}\n.card-header h5 {\n  font-weight: 600;\n  color: #2c3e50;\n}\n/*# sourceMappingURL=informe-periodo.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformePeriodoComponent, { className: "InformePeriodoComponent", filePath: "src/app/main/informes/periodo/informe-periodo.component.ts", lineNumber: 14 });
})();

// src/app/shared/bar-chart/title-bar/title-bar.component.ts
var _TitleBarComponent = class _TitleBarComponent {
  constructor() {
    this.title = "";
  }
};
_TitleBarComponent.\u0275fac = function TitleBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TitleBarComponent)();
};
_TitleBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TitleBarComponent, selectors: [["app-title-bar"]], inputs: { title: "title" }, decls: 2, vars: 1, template: function TitleBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
  }
}, styles: ["\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n  color: #333;\n}\n/*# sourceMappingURL=title-bar.component.css.map */"] });
var TitleBarComponent = _TitleBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleBarComponent, [{
    type: Component,
    args: [{ selector: "app-title-bar", imports: [], template: "<h2>{{ title }}</h2>\n", styles: ["/* src/app/shared/bar-chart/title-bar/title-bar.component.css */\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n  color: #333;\n}\n/*# sourceMappingURL=title-bar.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TitleBarComponent, { className: "TitleBarComponent", filePath: "src/app/shared/bar-chart/title-bar/title-bar.component.ts", lineNumber: 10 });
})();

// src/app/shared/bar-chart/graph-bar/graph-bar.component.ts
function GraphBarComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r1, " ");
  }
}
function GraphBarComponent_For_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.value, " ");
  }
}
function GraphBarComponent_For_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, item_r2.value), " ");
  }
}
function GraphBarComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275element(4, "div", 5);
    \u0275\u0275conditionalCreate(5, GraphBarComponent_For_6_Conditional_5_Template, 2, 1, "span", 6)(6, GraphBarComponent_For_6_Conditional_6_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bg-" + ctx_r2.mainColor);
    \u0275\u0275styleProp("width", item_r2.value / ctx_r2.maxValue * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r2.pipe ? 5 : 6);
  }
}
var _GraphBarComponent = class _GraphBarComponent {
  constructor() {
    this.data = [];
    this.mainColor = "primary";
    this.maxValue = 100;
    this.partitions = [0, 25, 50, 75, 100];
  }
};
_GraphBarComponent.\u0275fac = function GraphBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GraphBarComponent)();
};
_GraphBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GraphBarComponent, selectors: [["app-graph-bar"]], inputs: { data: "data", mainColor: "mainColor", maxValue: "maxValue", partitions: "partitions" }, decls: 7, vars: 0, consts: [[1, "row", "justify-content-between", "align-items-center", "text-end", "mb-2"], [1, "col", "text-muted", "px-1"], [1, "bar-container"], [1, "label"], [1, "bar-wrapper"], [1, "bar"], [1, "value"]], template: function GraphBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2, " 0 ");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, GraphBarComponent_For_4_Template, 2, 1, "div", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, GraphBarComponent_For_6_Template, 7, 6, "div", 2, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.partitions);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.data);
  }
}, dependencies: [CurrencyPipe], styles: ["\n\n.bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.label[_ngcontent-%COMP%] {\n  width: 100px;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.label-placeholder[_ngcontent-%COMP%] {\n  width: 20px;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.bar-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n}\n.bar[_ngcontent-%COMP%] {\n  height: 20px;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.value[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  font-weight: bold;\n  color: #333;\n}\n/*# sourceMappingURL=graph-bar.component.css.map */"] });
var GraphBarComponent = _GraphBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GraphBarComponent, [{
    type: Component,
    args: [{ selector: "app-graph-bar", imports: [
      CurrencyPipe
    ], template: `<!-- Marcadores de las parciciones, los puedes agregar si quieres, su
css tambien esta comentado y para que se vean se tienen que descomentar -->

<div class="row justify-content-between align-items-center text-end mb-2">
  <div class="col text-muted px-1">
    0
  </div>
  @for (p of partitions; track p) {
    <div class="col text-muted px-1">
      {{ p }}
    </div>
  }
</div>

@for (item of data; track item) {
  <div class="bar-container">
    <div class="label">{{ item.label }}</div>
    <div class="bar-wrapper">
      <div class="bar" [style.width.%]="(item.value / maxValue) * 100" [class]="'bg-'+mainColor"></div>
      @if (!item.pipe) {
        <span class="value">
          {{ item.value }}
        </span>
      } @else {
        {{item.value | currency}}
      }
    </div>
  </div>
}`, styles: ["/* src/app/shared/bar-chart/graph-bar/graph-bar.component.css */\n.bar-container {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.label {\n  width: 100px;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.label-placeholder {\n  width: 20px;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.bar-wrapper {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n}\n.bar {\n  height: 20px;\n  border-radius: 0.25rem;\n  transition: width 0.3s ease;\n}\n.value {\n  margin-left: 0.5rem;\n  font-weight: bold;\n  color: #333;\n}\n/*# sourceMappingURL=graph-bar.component.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }], mainColor: [{
    type: Input
  }], maxValue: [{
    type: Input
  }], partitions: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GraphBarComponent, { className: "GraphBarComponent", filePath: "src/app/shared/bar-chart/graph-bar/graph-bar.component.ts", lineNumber: 19 });
})();

// src/app/shared/bar-chart/bar-chart.component.ts
function BarChartComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-title-bar", 0)(1, "app-graph-bar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.data)("maxValue", ctx_r0.maxValue)("mainColor", ctx_r0.mainColor)("partitions", ctx_r0.partitions);
  }
}
var _BarChartComponent = class _BarChartComponent {
  constructor(currencyPipe) {
    this.currencyPipe = currencyPipe;
    this.title = "";
    this.data = [];
    this.mainColor = "primary";
    this.maxValue = 0;
    this.partitionsDivide = 7;
    this.partitions = [];
  }
  ngOnChanges(changes) {
    if (changes["data"]) {
      this.setPartitions();
    }
  }
  setPartitions() {
    const montoBase = Math.max(...this.data.map((r) => r.value));
    this.maxValue = Math.ceil(montoBase * 1.2);
    this.partitions = [];
    for (let i = 1; i <= this.partitionsDivide; i++) {
      this.partitions.push(this.currencyPipe.transform(i * (this.maxValue / this.partitionsDivide)) ?? 0);
    }
  }
};
_BarChartComponent.\u0275fac = function BarChartComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BarChartComponent)(\u0275\u0275directiveInject(CurrencyPipe));
};
_BarChartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarChartComponent, selectors: [["app-bar-chart"]], inputs: { title: "title", data: "data", mainColor: "mainColor", maxValue: "maxValue", partitionsDivide: "partitionsDivide", partitions: "partitions", pipe: "pipe" }, features: [\u0275\u0275ProvidersFeature([CurrencyPipe]), \u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "title"], [3, "data", "maxValue", "mainColor", "partitions"]], template: function BarChartComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BarChartComponent_Conditional_0_Template, 2, 5);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.data.length ? 0 : -1);
  }
}, dependencies: [TitleBarComponent, GraphBarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=bar-chart.component.css.map */"] });
var BarChartComponent = _BarChartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarChartComponent, [{
    type: Component,
    args: [{ selector: "app-bar-chart", imports: [TitleBarComponent, GraphBarComponent], providers: [CurrencyPipe], template: '@if (data.length) {\n  <app-title-bar [title]="title" />\n  <app-graph-bar [data]="data" [maxValue]="maxValue" [mainColor]="mainColor" [partitions]="partitions" />\n}', styles: ["/* src/app/shared/bar-chart/bar-chart.component.css */\n:host {\n  display: block;\n  width: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=bar-chart.component.css.map */\n"] }]
  }], () => [{ type: CurrencyPipe }], { title: [{
    type: Input
  }], data: [{
    type: Input
  }], mainColor: [{
    type: Input
  }], maxValue: [{
    type: Input
  }], partitionsDivide: [{
    type: Input
  }], partitions: [{
    type: Input
  }], pipe: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarChartComponent, { className: "BarChartComponent", filePath: "src/app/shared/bar-chart/bar-chart.component.ts", lineNumber: 14 });
})();

// src/app/main/informes/historico/services/historico-stats.service.ts
var _HistoricoStatsService = class _HistoricoStatsService {
  constructor(utils) {
    this.utils = utils;
  }
  totalMontoSolicitudesPorProgramaApoyo(apoyos, programa, municipio, genero) {
    return apoyos.filter((c) => c.programas_apoyos?.nombre.toUpperCase() == programa && (!municipio || c.sucursales?.nombre.toUpperCase() == municipio) && (c.datos_personales?.genero == genero || !genero)).reduce((acc, c) => acc + +this.utils.totalSolicitudApoyo(c), 0);
  }
  solicitudesPorProgramaApoyo(apoyos, programa, municipio, genero) {
    return apoyos.filter((c) => c.programas_apoyos?.nombre.toUpperCase() == programa && (!municipio || c.sucursales?.nombre.toUpperCase() == municipio) && (c.datos_personales?.genero == genero || !genero)).length;
  }
  totalMontoSolicitudesPorProductoFinanciero(creditos, producto, municipio, genero) {
    return creditos.filter((c) => c.productos_financieros?.nombre.toUpperCase() == producto && (!municipio || c.sucursales?.nombre.toUpperCase() == municipio) && (c.datos_personales?.genero == genero || !genero)).reduce((acc, c) => acc + +(c.monto_autorizado ?? 0), 0);
  }
  solicitudesPorProductoFinanciero(creditos, producto, municipio, genero) {
    return creditos.filter((c) => c.productos_financieros?.nombre.toUpperCase() == producto && (!municipio || c.sucursales?.nombre.toUpperCase() == municipio) && (c.datos_personales?.genero == genero || !genero)).length;
  }
  empleosGeneradosApoyos(apoyos, tipo) {
    if (tipo == "CONSERVADOS") {
      return apoyos.reduce((acc, item) => {
        return acc + item.empleos_generados_h + item.empleos_generados_m + item.empleos_generados_nb;
      }, 0);
    }
    return apoyos.reduce((acc, item) => {
      return acc + item.empleos_a_generar_h + item.empleos_a_generar_m + item.empleos_a_generar_nb;
    }, 0);
  }
  empleosGeneradosCreditos(creditos, tipo) {
    if (tipo == "CONSERVADOS") {
      return creditos.reduce((acc, item) => {
        const pf = item.datos_persona_fisica?.negocios;
        const pm = item.datos_personas_morales;
        return acc + (pf ? pf.empleos_imss_hombres + pf.empleos_imss_mujeres + pf.empleos_imss_no_binarios + pf.empleos_informales_hombres + pf.empleos_informales_mujeres + pf.empleos_informales_no_binarios : (pm?.empleos_imss_hombres ?? 0) + (pm?.empleos_imss_mujeres ?? 0) + (pm?.empleos_imss_no_binarios ?? 0) + (pm?.empleos_informales_hombres ?? 0) + (pm?.empleos_informales_mujeres ?? 0) + (pm?.empleos_informales_no_binarios ?? 0));
      }, 0);
    }
    return creditos.reduce((acc, item) => {
      const pf = item.datos_persona_fisica?.negocios;
      const pm = item.datos_personas_morales;
      return acc + (pf ? pf.empleos_a_generar_hombres + pf.empleos_a_generar_mujeres + pf.empleos_a_generar_no_binarios : (pm?.empleos_a_generar_hombres ?? 0) + (pm?.empleos_a_generar_mujeres ?? 0) + (pm?.empleos_a_generar_no_binarios ?? 0));
    }, 0);
  }
  solicitudesGeneroPorMunicipio(creditos, apoyos, genero, municipio) {
    return this.creditosGeneroPorMunicipio(creditos, genero, municipio) | this.apoyosGeneroPorMunicipio(apoyos, genero, municipio);
  }
  solicitudesMunicipio(creditos, apoyos, municipio) {
    return this.creditosPorMunicipio(creditos, municipio) + this.apoyosPorMunicipio(apoyos, municipio);
  }
  totalMontos(creditos, apoyos, municipio) {
    return this.creditosTotalPorMunicipio(creditos, municipio) + this.apoyosTotalPorMunicipio(apoyos, municipio);
  }
  creditosGeneroPorMunicipio(creditos, genero, municipio) {
    return creditos.filter((c) => {
      const pf = c.datos_persona_fisica?.datos_personales;
      const pm = c.datos_personas_morales?.representante_legal;
      return (pf ? pf.genero : pm?.genero) == genero && c.sucursales?.nombre.toUpperCase() == municipio || !municipio;
    }).length;
  }
  creditosTotalPorMunicipio(creditos, municipio) {
    return creditos.filter((c) => c.sucursales?.nombre.toUpperCase() == municipio || !municipio).reduce((acc, cre) => acc + +(cre.monto_autorizado ?? 0), 0);
  }
  creditosPorMunicipio(creditos, municipio) {
    return creditos.filter((c) => c.sucursales?.nombre.toUpperCase() == municipio || !municipio).length;
  }
  apoyosGeneroPorMunicipio(apoyos, genero, municipio) {
    return apoyos.filter((a) => {
      a.datos_personales?.genero == genero && (a.sucursales?.nombre.toUpperCase() == municipio || !municipio);
    }).length;
  }
  apoyosTotalPorMunicipio(apoyos, municipio) {
    return apoyos.filter((a) => a.sucursales?.nombre.toUpperCase() == municipio || !municipio).reduce((acc, apo) => acc + this.utils.totalSolicitudApoyo(apo), 0);
  }
  apoyosPorMunicipio(apoyos, municipio) {
    return apoyos.filter((a) => a.sucursales?.nombre.toUpperCase() == municipio || !municipio).length;
  }
};
_HistoricoStatsService.\u0275fac = function HistoricoStatsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HistoricoStatsService)(\u0275\u0275inject(UtilsService));
};
_HistoricoStatsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HistoricoStatsService, factory: _HistoricoStatsService.\u0275fac, providedIn: "root" });
var HistoricoStatsService = _HistoricoStatsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoricoStatsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: UtilsService }], null);
})();

// src/app/main/informes/ejercicio/informe-ejercicio.component.ts
function InformeEjercicioComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 6);
    \u0275\u0275listener("click", function InformeEjercicioComponent_For_3_Template_button_click_1_listener() {
      const filtro_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filtrosActivos[filtro_r2] = !ctx_r2.filtrosActivos[filtro_r2]);
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filtro_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.filtrosActivos[filtro_r2] ? "btn-primary" : "btn-outline-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, filtro_r2));
  }
}
function InformeEjercicioComponent_For_8_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(row_r4.style == null ? null : row_r4.style.th);
    \u0275\u0275property("colSpan", row_r4.colspan);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.label, " ");
  }
}
function InformeEjercicioComponent_For_8_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4, " ");
  }
}
function InformeEjercicioComponent_For_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InformeEjercicioComponent_For_8_For_2_Conditional_0_Template, 2, 4, "th", 7)(1, InformeEjercicioComponent_For_8_For_2_Conditional_1_Template, 2, 1, "th");
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.isHeader(row_r4) ? 0 : 1);
  }
}
function InformeEjercicioComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, InformeEjercicioComponent_For_8_For_2_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(header_r5);
  }
}
function InformeEjercicioComponent_For_11_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.value, " ");
  }
}
function InformeEjercicioComponent_For_11_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, row_r6.value), " ");
  }
}
function InformeEjercicioComponent_For_11_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, InformeEjercicioComponent_For_11_For_2_Conditional_0_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(2, InformeEjercicioComponent_For_11_For_2_Conditional_0_Conditional_2_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(row_r6.style == null ? null : row_r6.style.td);
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r6.pipe ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.pipe == "currency" ? 2 : -1);
  }
}
function InformeEjercicioComponent_For_11_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6, " ");
  }
}
function InformeEjercicioComponent_For_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InformeEjercicioComponent_For_11_For_2_Conditional_0_Template, 3, 4, "td", 9);
    \u0275\u0275conditionalCreate(1, InformeEjercicioComponent_For_11_For_2_Conditional_1_Template, 2, 1, "td");
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.isRow(row_r6) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isRow(row_r6) ? 1 : -1);
  }
}
function InformeEjercicioComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, InformeEjercicioComponent_For_11_For_2_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const body_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(body_r7);
  }
}
var _InformeEjercicioComponent = class _InformeEjercicioComponent {
  constructor(utils, stats) {
    this.utils = utils;
    this.stats = stats;
    this.creditos = [];
    this.apoyos = [];
    this.fechaInicio = "";
    this.fechaFin = "";
    this.productosFinancieros = [];
    this.programasApoyos = [];
    this.filtros = ["creditos", "apoyos", "productos_financieros"];
    this.filtrosActivos = {
      creditos: true,
      productos_financieros: true,
      programas_apoyos: true,
      apoyos: true
    };
    this.municipios = [];
    this.dataTabla = {
      header: [],
      body: []
    };
    this.dataTablaPymes = [];
  }
  ngOnChanges(changes) {
    if (changes["creditos"] || changes["apoyos"]) {
      this.setMunicipios();
      this.setProductosFinancieros();
      this.setProgramasApoyos();
      this.setDataTabla();
      this.setDataTablaPymes();
    }
  }
  setDataTabla() {
    this.dataTabla.header = [];
    this.dataTabla.body = [];
    const totalesSecciones = [];
    this.programasApoyos.forEach((p) => totalesSecciones.push(...["Solicitudes", "Monto", "Mujeres", "Hombres", "Diversidad sexo gen\xE9rica"]));
    this.productosFinancieros.forEach((p) => totalesSecciones.push(...["Solicitudes", "Monto", "Mujeres", "Hombres", "Diversidad sexo gen\xE9rica"]));
    this.dataTabla.header = [
      [
        { label: "Localidad", style: { th: "fw-bold" } },
        ...this.programasApoyos.map((p) => ({ label: p, colspan: 5, style: { th: "text-bg-danger" } })),
        ...this.productosFinancieros.map((p) => ({ label: p, colspan: 5, style: { th: "text-bg-danger" } })),
        {
          label: "Apoyos",
          colspan: 5,
          style: { th: "text-bg-success" }
        },
        {
          label: "Creditos",
          colspan: 5,
          style: { th: "text-bg-warning" }
        },
        {
          label: "Total",
          colspan: 5,
          style: { th: "text-bg-primary" }
        }
      ],
      [
        ""
      ]
    ];
    this.programasApoyos.forEach((p) => {
      this.dataTabla.header[1].push({ label: "Solicitudes", style: { th: "text-bg-danger" } }, { label: "Monto", style: { th: "text-bg-danger" } }, { label: "Mujeres", style: { th: "text-bg-danger" } }, { label: "Hombres", style: { th: "text-bg-danger" } }, { label: "Diversidad sexo gen\xE9rica", style: { th: "text-bg-danger" } });
    });
    this.productosFinancieros.forEach((p) => {
      this.dataTabla.header[1].push({ label: "Solicitudes", style: { th: "text-bg-danger" } }, { label: "Monto", style: { th: "text-bg-danger" } }, { label: "Mujeres", style: { th: "text-bg-danger" } }, { label: "Hombres", style: { th: "text-bg-danger" } }, { label: "Diversidad sexo gen\xE9rica", style: { th: "text-bg-danger" } });
    });
    this.dataTabla.header[1].push({ label: "Solicitudes", style: { th: "text-bg-success" } }, { label: "Monto", style: { th: "text-bg-success" } }, { label: "Mujeres", style: { th: "text-bg-success" } }, { label: "Hombres", style: { th: "text-bg-success" } }, { label: "Diversidad sexo gen\xE9rica", style: { th: "text-bg-success" } }, { label: "Solicitudes", style: { th: "text-bg-warning" } }, { label: "Monto", style: { th: "text-bg-warning" } }, { label: "Mujeres", style: { th: "text-bg-warning" } }, { label: "Hombres", style: { th: "text-bg-warning" } }, { label: "Diversidad sexo gen\xE9rica", style: { th: "text-bg-warning" } }, { label: "Solicitudes", style: { th: "text-bg-primary" } }, { label: "Monto", style: { th: "text-bg-primary" } }, { label: "Mujeres", style: { th: "text-bg-primary" } }, { label: "Hombres", style: { th: "text-bg-primary" } }, { label: "Diversidad sexo gen\xE9rica", style: { th: "text-bg-primary" } });
    const rows = [];
    this.municipios.forEach((m) => {
      const row2 = [m];
      this.programasApoyos.forEach((p) => {
        row2.push(this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, m));
        row2.push({ value: this.stats.totalMontoSolicitudesPorProgramaApoyo(this.apoyos, p, m), pipe: "currency" });
        row2.push(this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, m, "MUJER"));
        row2.push(this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, m, "HOMBRE"));
        row2.push(this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, m, "NO BINARIO") + this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, m, "OTRO"));
      });
      this.productosFinancieros.forEach((p) => {
        row2.push(this.stats.solicitudesPorProductoFinanciero(this.creditos, p, m));
        row2.push({ value: this.stats.totalMontoSolicitudesPorProductoFinanciero(this.creditos, p, m), pipe: "currency" });
        row2.push(this.stats.solicitudesPorProductoFinanciero(this.creditos, p, m, "MUJER"));
        row2.push(this.stats.solicitudesPorProductoFinanciero(this.creditos, p, m, "HOMBRE"));
        row2.push(this.stats.solicitudesPorProductoFinanciero(this.creditos, p, m, "NO BINARIO") + this.stats.solicitudesPorProductoFinanciero(this.creditos, p, m, "OTRO"));
      });
      row2.push(this.stats.apoyosPorMunicipio(this.apoyos, m));
      row2.push({ value: this.stats.apoyosTotalPorMunicipio(this.apoyos, m), pipe: "currency" });
      row2.push(this.stats.apoyosGeneroPorMunicipio(this.apoyos, "MUJER", m));
      row2.push(this.stats.apoyosGeneroPorMunicipio(this.apoyos, "HOMBRE", m));
      row2.push(this.stats.apoyosGeneroPorMunicipio(this.apoyos, "NO BINARIO", m) + this.stats.apoyosGeneroPorMunicipio(this.apoyos, "OTRO", m));
      row2.push(this.stats.creditosPorMunicipio(this.creditos, m));
      row2.push({ value: this.stats.creditosTotalPorMunicipio(this.creditos, m), pipe: "currency" });
      row2.push(this.stats.creditosGeneroPorMunicipio(this.creditos, "MUJER", m));
      row2.push(this.stats.creditosGeneroPorMunicipio(this.creditos, "HOMBRE", m));
      row2.push(this.stats.creditosGeneroPorMunicipio(this.creditos, "NO BINARIO", m) + this.stats.creditosGeneroPorMunicipio(this.creditos, "OTRO", m));
      row2.push(this.stats.solicitudesMunicipio(this.creditos, this.apoyos, m));
      row2.push(this.stats.totalMontos(this.creditos, this.apoyos, m));
      row2.push(this.stats.solicitudesGeneroPorMunicipio(this.creditos, this.apoyos, "MUJER", m));
      row2.push(this.stats.solicitudesGeneroPorMunicipio(this.creditos, this.apoyos, "HOMBRE", m));
      row2.push(this.stats.solicitudesGeneroPorMunicipio(this.creditos, this.apoyos, "NO BINARIO", m) + this.stats.solicitudesGeneroPorMunicipio(this.creditos, this.apoyos, "OTRO", m));
      rows.push(row2);
    });
    const row = ["Total"];
    this.programasApoyos.forEach((p) => {
      row.push(this.stats.solicitudesPorProgramaApoyo(this.apoyos, p));
      row.push({ value: this.stats.totalMontoSolicitudesPorProgramaApoyo(this.apoyos, p), pipe: "currency" });
      row.push(this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, "MUJER"));
      row.push(this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, "HOMBRE"));
      row.push(this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, "NO BINARIO") + this.stats.solicitudesPorProgramaApoyo(this.apoyos, p, "OTRO"));
    });
    this.productosFinancieros.forEach((p) => {
      row.push(this.stats.solicitudesPorProductoFinanciero(this.creditos, p));
      row.push({ value: this.stats.totalMontoSolicitudesPorProductoFinanciero(this.creditos, p), pipe: "currency" });
      row.push(this.stats.solicitudesPorProductoFinanciero(this.creditos, p, "MUJER"));
      row.push(this.stats.solicitudesPorProductoFinanciero(this.creditos, p, "HOMBRE"));
      row.push(this.stats.solicitudesPorProductoFinanciero(this.creditos, p, "NO BINARIO") + this.stats.solicitudesPorProductoFinanciero(this.creditos, p, "OTRO"));
    });
    row.push(this.stats.apoyosPorMunicipio(this.apoyos));
    row.push({ value: this.stats.apoyosTotalPorMunicipio(this.apoyos), pipe: "currency" });
    row.push(this.stats.apoyosGeneroPorMunicipio(this.apoyos, "MUJER"));
    row.push(this.stats.apoyosGeneroPorMunicipio(this.apoyos, "HOMBRE"));
    row.push(this.stats.apoyosGeneroPorMunicipio(this.apoyos, "NO BINARIO") + this.stats.apoyosGeneroPorMunicipio(this.apoyos, "OTRO"));
    row.push(this.stats.creditosPorMunicipio(this.creditos));
    row.push({ value: this.stats.creditosTotalPorMunicipio(this.creditos), pipe: "currency" });
    row.push(this.stats.creditosGeneroPorMunicipio(this.creditos, "MUJER"));
    row.push(this.stats.creditosGeneroPorMunicipio(this.creditos, "HOMBRE"));
    row.push(this.stats.creditosGeneroPorMunicipio(this.creditos, "NO BINARIO") + this.stats.creditosGeneroPorMunicipio(this.creditos, "OTRO"));
    row.push(this.stats.solicitudesMunicipio(this.creditos, this.apoyos));
    row.push({ value: this.stats.totalMontos(this.creditos, this.apoyos), pipe: "currency" });
    row.push(this.stats.solicitudesGeneroPorMunicipio(this.creditos, this.apoyos, "MUJER"));
    row.push(this.stats.solicitudesGeneroPorMunicipio(this.creditos, this.apoyos, "HOMBRE"));
    row.push(this.stats.solicitudesGeneroPorMunicipio(this.creditos, this.apoyos, "NO BINARIO") + this.stats.solicitudesGeneroPorMunicipio(this.creditos, this.apoyos, "OTRO"));
    rows.push(row);
    this.dataTabla.body = rows;
  }
  setDataTablaPymes() {
    this.dataTablaPymes = [];
    this.municipios.forEach((m) => {
      this.dataTablaPymes.push({
        label: m,
        value: this.stats.totalMontos(this.creditos, this.apoyos, m),
        pipe: "currency"
      });
    });
  }
  setProgramasApoyos() {
    this.programasApoyos = Array.from(new Set(this.apoyos.map((a) => a.programas_apoyos?.nombre.toUpperCase())));
  }
  setProductosFinancieros() {
    this.productosFinancieros = Array.from(new Set(this.creditos.map((c) => c.productos_financieros?.nombre.toUpperCase())));
    this.productosFinancieros = this.productosFinancieros.filter((pf) => pf !== "REESTRUCTURA");
  }
  setMunicipios() {
    this.municipios = Array.from(new Set(this.creditos.map((c) => c.sucursales?.nombre.toUpperCase())));
  }
  isHeader(tableHeader) {
    return tableHeader.label !== void 0;
  }
  isRow(tableRow) {
    return tableRow.value !== void 0;
  }
};
_InformeEjercicioComponent.\u0275fac = function InformeEjercicioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeEjercicioComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(HistoricoStatsService));
};
_InformeEjercicioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeEjercicioComponent, selectors: [["app-informe-ejercicio"]], inputs: { creditos: "creditos", apoyos: "apoyos", fechaInicio: "fechaInicio", fechaFin: "fechaFin" }, features: [\u0275\u0275NgOnChangesFeature], decls: 13, vars: 1, consts: [[1, "container-fluid", "p-3"], [1, "row", "justify-content-between"], [1, "col-auto", "p-2"], [1, "table-responsive"], [1, "table", "table-sm"], ["mainColor", "success", 3, "data"], [1, "btn", 3, "click"], [3, "colSpan", "class"], [3, "colSpan"], [3, "class"]], template: function InformeEjercicioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275repeaterCreate(2, InformeEjercicioComponent_For_3_Template, 4, 5, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "table", 4)(6, "thead");
    \u0275\u0275repeaterCreate(7, InformeEjercicioComponent_For_8_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, InformeEjercicioComponent_For_11_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(12, "app-bar-chart", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.filtros);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.dataTabla.header);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.dataTabla.body);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.dataTablaPymes);
  }
}, dependencies: [
  CurrencyPipe,
  TitleCasePipe,
  BarChartComponent
], encapsulation: 2 });
var InformeEjercicioComponent = _InformeEjercicioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeEjercicioComponent, [{
    type: Component,
    args: [{ selector: "app-informe-ejercicio", imports: [
      CurrencyPipe,
      TitleCasePipe,
      BarChartComponent
    ], template: `<div class="container-fluid p-3">
  <div class="row justify-content-between">
    @for (filtro of filtros; track filtro) {
      <div class="col-auto p-2">
        <button class="btn" [class]="filtrosActivos[filtro] ? 'btn-primary':'btn-outline-primary'"
        (click)="filtrosActivos[filtro]= !filtrosActivos[filtro]">{{filtro | titlecase}}</button>
      </div>
    }
  </div>
  <div class="table-responsive">
    <table class="table table-sm">
      <thead>
        @for (header of dataTabla.header; track header) {
          <tr>
            @for (row of header; track row) {
              @if (isHeader(row)) {
                <th [colSpan]="row.colspan" [class]="row.style?.th">
                  {{row.label}}
                </th>
              } @else {
                <th>
                  {{row}}
                </th>
              }
            }
          </tr>
        }
      </thead>
      <tbody>
        @for (body of dataTabla.body; track body) {
          <tr>
            @for (row of body; track row) {
              @if (isRow(row)) {
                <td [class]="row.style?.td">
                  @if (!row.pipe) {
                    <span>
                      {{row.value}}
                    </span>
                  }
                  @if (row.pipe=='currency') {
                    <span>
                      {{row.value | currency}}
                    </span>
                  }
                </td>
              }
              @if (!isRow(row)) {
                <td>
                  {{row}}
                </td>
              }
            }
          </tr>
        }
      </tbody>
    </table>
  </div>
</div>
<app-bar-chart [data]="dataTablaPymes" mainColor="success"></app-bar-chart>` }]
  }], () => [{ type: UtilsService }, { type: HistoricoStatsService }], { creditos: [{
    type: Input
  }], apoyos: [{
    type: Input
  }], fechaInicio: [{
    type: Input
  }], fechaFin: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeEjercicioComponent, { className: "InformeEjercicioComponent", filePath: "src/app/main/informes/ejercicio/informe-ejercicio.component.ts", lineNumber: 57 });
})();

// src/app/main/informes/empleos/informe-empleos.component.ts
var _InformeEmpleosComponent = class _InformeEmpleosComponent {
};
_InformeEmpleosComponent.\u0275fac = function InformeEmpleosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeEmpleosComponent)();
};
_InformeEmpleosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeEmpleosComponent, selectors: [["app-informe-empleos"]], decls: 0, vars: 0, template: function InformeEmpleosComponent_Template(rf, ctx) {
}, encapsulation: 2 });
var InformeEmpleosComponent = _InformeEmpleosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeEmpleosComponent, [{
    type: Component,
    args: [{ selector: "app-informe-empleos", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeEmpleosComponent, { className: "InformeEmpleosComponent", filePath: "src/app/main/informes/empleos/informe-empleos.component.ts", lineNumber: 9 });
})();

// src/app/main/informes/monto-genero/informe-monto-genero.component.ts
var _InformeMontoGeneroComponent = class _InformeMontoGeneroComponent {
};
_InformeMontoGeneroComponent.\u0275fac = function InformeMontoGeneroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeMontoGeneroComponent)();
};
_InformeMontoGeneroComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeMontoGeneroComponent, selectors: [["app-informe-monto-genero"]], decls: 0, vars: 0, template: function InformeMontoGeneroComponent_Template(rf, ctx) {
}, encapsulation: 2 });
var InformeMontoGeneroComponent = _InformeMontoGeneroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeMontoGeneroComponent, [{
    type: Component,
    args: [{ selector: "app-informe-monto-genero", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeMontoGeneroComponent, { className: "InformeMontoGeneroComponent", filePath: "src/app/main/informes/monto-genero/informe-monto-genero.component.ts", lineNumber: 10 });
})();

// src/app/main/informes/sectores/informe-sectores.component.ts
var _InformeSectoresComponent = class _InformeSectoresComponent {
};
_InformeSectoresComponent.\u0275fac = function InformeSectoresComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeSectoresComponent)();
};
_InformeSectoresComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeSectoresComponent, selectors: [["app-informe-sectores"]], decls: 0, vars: 0, template: function InformeSectoresComponent_Template(rf, ctx) {
}, encapsulation: 2 });
var InformeSectoresComponent = _InformeSectoresComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeSectoresComponent, [{
    type: Component,
    args: [{ selector: "app-informe-sectores", imports: [], template: "" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeSectoresComponent, { className: "InformeSectoresComponent", filePath: "src/app/main/informes/sectores/informe-sectores.component.ts", lineNumber: 9 });
})();

// src/app/main/informes/sesionados/sesionados-creditos/sesionados-creditos.component.ts
function SesionadosCreditosComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function SesionadosCreditosComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function SesionadosCreditosComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 20)(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28)(4, "div", 29)(5, "div", 30);
    \u0275\u0275element(6, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 33)(10, "span", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 33)(13, "span", 35);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 19)(17, "span", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 19)(20, "button", 37);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_For_39_Template_button_click_20_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.creditoController.verificarCartaInstruccion(row_r2.credito));
    });
    \u0275\u0275element(21, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 39);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_For_39_Template_button_click_22_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cartaInstruccionService.machoteCartaInstrucciones(row_r2.credito, (ctx_r2.usuario == null ? null : ctx_r2.usuario.email) == "ascornejo@baja.gob.mx"));
    });
    \u0275\u0275element(23, "i", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275property("hidden", row_r2.isHidden);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", row_r2.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", row_r2.cliente, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r2.producto_financiero, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, row_r2.monto_autorizado), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r2.municipio, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(row_r2.credito.carta_instruccion_verificacion ? "btn-success" : "");
    \u0275\u0275advance();
    \u0275\u0275classMap(row_r2.credito.carta_instruccion_verificacion ? "bi-check-circle-fill" : "bi-check-circle");
  }
}
function SesionadosCreditosComponent_Conditional_48_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 46)(5, "span", 56);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 57);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const municipio_r4 = ctx.$implicit;
    const \u0275$index_155_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("table-primary", \u0275$index_155_r5 % 2 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", municipio_r4 || "No especificado", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.totalCreditosMunicipio(municipio_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, ctx_r2.totalMontosMunicipio(municipio_r4)), " ");
  }
}
function SesionadosCreditosComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 41)(2, "h5", 42);
    \u0275\u0275element(3, "i", 43);
    \u0275\u0275text(4, "Resumen por Municipio ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "table", 44)(7, "thead", 16)(8, "tr")(9, "th", 45);
    \u0275\u0275text(10, "Municipio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 46);
    \u0275\u0275text(12, "# Cr\xE9ditos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 47);
    \u0275\u0275text(14, "Total Montos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275repeaterCreate(16, SesionadosCreditosComponent_Conditional_48_For_17_Template, 10, 7, "tr", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tfoot", 16)(19, "tr")(20, "td", 22);
    \u0275\u0275text(21, "Totales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 49);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 22);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 50)(28, "div", 51)(29, "div", 52);
    \u0275\u0275element(30, "app-graphs-view", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 52);
    \u0275\u0275element(32, "app-graphs-view", 54);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.municipios);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.creditos.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 5, ctx_r2.totalMontos()));
    \u0275\u0275advance(5);
    \u0275\u0275property("rawData", ctx_r2.dataTabla);
    \u0275\u0275advance(2);
    \u0275\u0275property("rawData", ctx_r2.dataTabla)("currency", true);
  }
}
var _SesionadosCreditosComponent = class _SesionadosCreditosComponent {
  constructor(creditoController, cartaInstruccionService, utils, storage, tablaLocal) {
    this.creditoController = creditoController;
    this.cartaInstruccionService = cartaInstruccionService;
    this.utils = utils;
    this.storage = storage;
    this.tablaLocal = tablaLocal;
    this.creditos = [];
    this.dataTabla = [];
    this.productoFinanciero = [];
    this.municipios = [];
    this.search = "";
    this.isLoading = false;
    this.isLoadingVerificados = false;
  }
  ngOnInit() {
    this.usuario = this.storage.getUser();
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes["filtros"]) {
        yield this.loadData();
        this.setMunicipios();
      }
    });
  }
  setMunicipios() {
    const municipios = this.dataTabla.map((c) => c.municipio.toUpperCase()).filter((m) => m !== void 0);
    this.municipios = Array.from(new Set(municipios));
  }
  loadData() {
    return __async(this, null, function* () {
      const conditionals = [
        {
          key: "estado",
          operator: "=",
          value: "ACTIVO"
        },
        {
          key: "deleted_at",
          operator: "IS NULL",
          value: "null"
        }
      ];
      if (this.filtros.sesion_id) {
        conditionals.push({
          key: "sesion_id",
          operator: "=",
          value: this.filtros.sesion_id
        });
      }
      if (this.filtros.fecha_inicio) {
        conditionals.push({
          key: "dictaminado_fecha",
          operator: ">=",
          value: this.filtros.fecha_inicio
        });
      }
      if (this.filtros.fecha_fin) {
        conditionals.push({
          key: "dictaminado_fecha",
          operator: "<=",
          value: this.filtros.fecha_fin
        });
      }
      if (this.filtros.producto_financiero_id) {
        conditionals.push({
          key: "productos_financiero_id",
          operator: "=",
          value: this.filtros.producto_financiero_id
        });
      }
      this.creditos = yield this.creditoController.all(conditionals, [
        "productosFinancieros",
        "datosPersonaFisica.datosPersonales",
        "datosPersonasMorales",
        "creditosPagos",
        "convenios.conveniosPagos",
        "sucursales",
        "datosPersonales",
        "datosPersonales.ciudades",
        "productosFinancieros",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "datosPersonasMorales.ciudades",
        "datosPersonaFisica.negocios",
        "datosPersonaFisica.negocios.ciudades",
        "sesiones"
      ]);
      console.log(this.creditos);
      this.setDataTabla();
    });
  }
  buscar() {
    return __async(this, null, function* () {
      this.search = this.search.trim();
      this.tablaLocal.generalSearch(this.dataTabla, this.search);
      const resultados = this.dataTabla.filter((r) => !r.isHidden);
      if (resultados.length == 0) {
        yield this.loadData();
        this.tablaLocal.generalSearch(this.dataTabla, this.search);
      }
    });
  }
  setDataTabla() {
    this.dataTabla = this.creditos.filter((c) => c.productos_financieros?.nombre.toUpperCase() !== "REESTRUCTURA").map((c) => {
      const pf = c.datos_persona_fisica?.negocios;
      const pm = c.datos_personas_morales;
      const municipio = pm?.ciudades?.nombre ?? pf?.ciudades?.nombre;
      return {
        id: c.id,
        cliente: this.utils.nombreClienteFromCredito(c),
        producto_financiero: c.productos_financieros?.nombre || "",
        monto_autorizado: +(c.monto_autorizado ?? 0),
        municipio: municipio?.toUpperCase() || "N/A",
        credito: c
      };
    });
  }
  descargarCartas() {
    return __async(this, null, function* () {
      this.isLoading = true;
      const creditos = this.creditos.filter((c) => c.productos_financieros?.nombre.toUpperCase() !== "REESTRUCTURA");
      yield this.cartaInstruccionService.multiplesMachoteCartasInstrucciones(creditos, this.usuario?.email == "ascornejo@baja.gob.mx");
      this.isLoading = false;
    });
  }
  descargarCartasVerificadas() {
    return __async(this, null, function* () {
      this.isLoadingVerificados = true;
      const creditos = this.creditos.filter((c) => !!c.carta_instruccion_verificacion).filter((c) => c.productos_financieros?.nombre.toUpperCase() !== "REESTRUCTURA");
      yield this.cartaInstruccionService.multiplesMachoteCartasInstrucciones(creditos, this.usuario?.email == "ascornejo@baja.gob.mx");
      this.isLoadingVerificados = false;
    });
  }
  totalMontos() {
    return this.dataTabla.reduce((acc, c) => acc + +(c.monto_autorizado ?? 0), 0);
  }
  totalCreditosMunicipio(municipio) {
    return this.dataTabla.filter((c) => c.municipio.toUpperCase() == municipio).length;
  }
  totalMontosMunicipio(municipio) {
    return this.dataTabla.filter((c) => c.municipio.toUpperCase() == municipio).reduce((acc, c) => acc + +(c.monto_autorizado ?? 0), 0);
  }
};
_SesionadosCreditosComponent.\u0275fac = function SesionadosCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SesionadosCreditosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ContratoMachoteCartaInstruccionesService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(TablaLocalService));
};
_SesionadosCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SesionadosCreditosComponent, selectors: [["app-sesionados-creditos"]], inputs: { filtros: "filtros" }, features: [\u0275\u0275NgOnChangesFeature], decls: 52, vars: 10, consts: [[1, "container-fluid", "px-0"], [1, "card", "shadow-sm", "mb-4"], [1, "card-header", "bg-primary", "text-white", "row", "justify-content-between", "align-items-center"], [1, "col", "p-2", "mb-0"], [1, "bi", "bi-card-list", "me-2"], [1, "col-sm-auto", "p-2"], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Ingresa una busqueda r\xE1pida...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-search"], [1, "btn", "btn-secondary", "btn-sm", 3, "click", "disabled"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-printer-fill", "me-1"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "table-responsive"], [1, "table", "table-hover", "table-striped", "mb-0"], [1, "table-light"], [1, "align-middle", "pointer", "scale-025", 3, "click"], [1, "align-middle", "pointer", "scale-025", "text-end", 3, "click"], [1, "align-middle", "text-center"], [3, "hidden"], ["colspan", "2", 1, "text-end", "fw-bold"], [1, "text-end", "fw-bold"], ["colspan", "2"], [1, "card", "shadow-sm"], [1, "card-footer", "bg-light", "py-2"], [1, "text-muted"], [1, "align-middle", "fw-bold", "text-primary"], [1, "align-middle"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-2"], [1, "bi", "bi-person-circle", "text-muted"], [1, "flex-grow-1"], [1, "align-middle", "text-end"], [1, "badge", "bg-secondary", "bg-opacity-10", "text-bg-secondary"], [1, "badge", "bg-success", "bg-opacity-10", "text-bg-success"], [1, "badge", "bg-info", "bg-opacity-10", "text-bg-info"], [1, "btn", "btn-sm", "mx-1", 3, "click"], [1, "bi"], ["title", "Imprimir carta", 1, "btn", "btn-sm", "btn-outline-primary", "mx-1", 3, "click"], [1, "bi", "bi-printer"], [1, "card-header", "bg-secondary", "text-white"], [1, "mb-0"], [1, "bi", "bi-bar-chart", "me-2"], [1, "table", "table-sm", "mb-0"], [1, "text-start"], [1, "text-center"], [1, "text-end"], [3, "table-primary"], [1, "text-center", "fw-bold"], [1, "container"], [1, "row"], [1, "col", "align-self-center"], ["keyLabel", "municipio", "title", "Cr\xE9ditos por municipio", "currentGraph", "pie", 3, "rawData"], ["keyLabel", "municipio", "keyValue", "monto_autorizado", "operation", "sum", "title", "Montos por municipio", "currentGraph", "line", 3, "rawData", "currency"], [1, "bi", "bi-geo-alt", "me-2", "text-muted"], [1, "badge", "rounded-pill", "bg-primary"], [1, "text-end", "fw-bold", "text-success"]], template: function SesionadosCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Detalle de Cr\xE9ditos Sesionados ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function SesionadosCreditosComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function SesionadosCreditosComponent_Template_input_keyup_enter_8_listener() {
      return ctx.buscar();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_Template_button_click_9_listener() {
      return ctx.buscar();
    });
    \u0275\u0275element(10, "i", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 5)(12, "button", 10);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_Template_button_click_12_listener() {
      return ctx.descargarCartas();
    });
    \u0275\u0275conditionalCreate(13, SesionadosCreditosComponent_Conditional_13_Template, 1, 0, "span", 11);
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275text(15, "Imprimir Todos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 5)(17, "button", 13);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_Template_button_click_17_listener() {
      return ctx.descargarCartasVerificadas();
    });
    \u0275\u0275conditionalCreate(18, SesionadosCreditosComponent_Conditional_18_Template, 1, 0, "span", 11);
    \u0275\u0275element(19, "i", 12);
    \u0275\u0275text(20, "Imprimir Verificados ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 14)(22, "table", 15)(23, "thead", 16)(24, "tr")(25, "th", 17);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_Template_th_click_25_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "id");
    });
    \u0275\u0275text(26, "ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 17);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_Template_th_click_27_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "cliente");
    });
    \u0275\u0275text(28, " Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 18);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_Template_th_click_29_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "producto_financiero");
    });
    \u0275\u0275text(30, "Producto financiero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 18);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_Template_th_click_31_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "monto_autorizado");
    });
    \u0275\u0275text(32, "Monto Autorizado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 17);
    \u0275\u0275listener("click", function SesionadosCreditosComponent_Template_th_click_33_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "municipio");
    });
    \u0275\u0275text(34, "Municipio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 19);
    \u0275\u0275text(36, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, SesionadosCreditosComponent_For_39_Template, 24, 12, "tr", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "tfoot", 16)(41, "tr")(42, "td", 21);
    \u0275\u0275text(43, "Total General:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td", 22);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "td", 23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(48, SesionadosCreditosComponent_Conditional_48_Template, 33, 7, "div", 24);
    \u0275\u0275elementStart(49, "div", 25)(50, "small", 26);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isLoadingVerificados);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoadingVerificados ? 18 : -1);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx.dataTabla);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 8, ctx.totalMontos()));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.dataTabla.length ? 48 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Mostrando ", ctx.creditos.length, " cr\xE9ditos ");
  }
}, dependencies: [
  CurrencyPipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  GraphsViewComponent
], encapsulation: 2 });
var SesionadosCreditosComponent = _SesionadosCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SesionadosCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-sesionados-creditos", imports: [
      CurrencyPipe,
      FormsModule,
      GraphsViewComponent
    ], template: `<div class="container-fluid px-0">
  <!-- Tabla principal de cr\xE9ditos -->
  <div class="card shadow-sm mb-4">
    <div class="card-header bg-primary text-white row justify-content-between align-items-center">
      <h5 class="col p-2 mb-0">
        <i class="bi bi-card-list me-2"></i>Detalle de Cr\xE9ditos Sesionados
      </h5>
      <div class="col-sm-auto p-2">
        <div class="input-group input-group-sm">
          <input type="text" class="form-control" [(ngModel)]="search"
            placeholder="Ingresa una busqueda r\xE1pida..."
            (keyup.enter)="buscar()">
          <button class="btn btn-secondary" (click)="buscar()"><i
          class="bi bi-search"></i></button>
        </div>
      </div>
      <div class="col-sm-auto p-2">
        <button class="btn btn-secondary btn-sm" (click)="descargarCartas()" [disabled]="isLoading">
          @if (isLoading) {
            <span class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
          }
          <i class="bi bi-printer-fill me-1"></i>Imprimir Todos
        </button>
      </div>
      <div class="col-sm-auto p-2">
        <button class="btn btn-success btn-sm" (click)="descargarCartasVerificadas()"
          [disabled]="isLoadingVerificados">
          @if (isLoadingVerificados) {
            <span class="spinner-border spinner-border-sm me-1"
            aria-hidden="true"></span>
          }
          <i class="bi bi-printer-fill me-1"></i>Imprimir Verificados
        </button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-hover table-striped mb-0">
        <thead class="table-light">
          <tr>
            <th class="align-middle pointer scale-025" (click)="tablaLocal.sortByKey(dataTabla,'id')">ID
            </th>
            <th class="align-middle pointer scale-025" (click)="tablaLocal.sortByKey(dataTabla,'cliente')">
            Cliente</th>
            <th class="align-middle pointer scale-025 text-end"
            (click)="tablaLocal.sortByKey(dataTabla,'producto_financiero')">Producto financiero</th>
            <th class="align-middle pointer scale-025 text-end"
            (click)="tablaLocal.sortByKey(dataTabla,'monto_autorizado')">Monto Autorizado</th>
            <th class="align-middle pointer scale-025"
            (click)="tablaLocal.sortByKey(dataTabla,'municipio')">Municipio</th>
            <th class="align-middle text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          @for (row of dataTabla; track row) {
            <tr [hidden]="row.isHidden">
              <td class="align-middle fw-bold text-primary">#{{row.id}}</td>
              <td class="align-middle">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <i class="bi bi-person-circle text-muted"></i>
                  </div>
                  <div class="flex-grow-1">
                    {{row.cliente}}
                  </div>
                </div>
              </td>
              <td class="align-middle text-end">
                <span class="badge bg-secondary bg-opacity-10 text-bg-secondary">
                  {{row.producto_financiero}}
                </span>
              </td>
              <td class="align-middle text-end">
                <span class="badge bg-success bg-opacity-10 text-bg-success">
                  {{row.monto_autorizado | currency}}
                </span>
              </td>
              <td class="align-middle text-center">
                <span class="badge bg-info bg-opacity-10 text-bg-info">
                  {{row.municipio}}
                </span>
              </td>
              <td class="align-middle text-center">
                <button class="btn btn-sm mx-1"
                  [class]="row.credito.carta_instruccion_verificacion? 'btn-success':''"
                  (click)="creditoController.verificarCartaInstruccion(row.credito)">
                  <i class="bi"
                  [class]="row.credito.carta_instruccion_verificacion? 'bi-check-circle-fill':'bi-check-circle'"></i>
                </button>
                <button class="btn btn-sm btn-outline-primary mx-1"
                  (click)="cartaInstruccionService.machoteCartaInstrucciones(row.credito, this.usuario?.email=='ascornejo@baja.gob.mx')"
                  title="Imprimir carta">
                  <i class="bi bi-printer"></i>
                </button>
              </td>
            </tr>
          }
        </tbody>
        <tfoot class="table-light">
          <tr>
            <td colspan="2" class="text-end fw-bold">Total General:</td>
            <td class="text-end fw-bold">{{totalMontos() | currency}}</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Resumen por municipio -->
    @if (dataTabla.length) {
      <div class="card shadow-sm">
        <div class="card-header bg-secondary text-white">
          <h5 class="mb-0">
            <i class="bi bi-bar-chart me-2"></i>Resumen por Municipio
          </h5>
        </div>
        <div class="table-responsive">
          <table class="table table-sm mb-0">
            <thead class="table-light">
              <tr>
                <th class="text-start">Municipio</th>
                <th class="text-center"># Cr\xE9ditos</th>
                <th class="text-end">Total Montos</th>
              </tr>
            </thead>
            <tbody>
              @for (municipio of municipios; track municipio; let i = $index) {
                <tr [class.table-primary]="i % 2 === 0">
                  <td class="text-start">
                    <i class="bi bi-geo-alt me-2 text-muted"></i>
                    {{municipio || 'No especificado'}}
                  </td>
                  <td class="text-center">
                    <span class="badge rounded-pill bg-primary">
                      {{totalCreditosMunicipio(municipio)}}
                    </span>
                  </td>
                  <td class="text-end fw-bold text-success">
                    {{totalMontosMunicipio(municipio) | currency}}
                  </td>
                </tr>
              }
            </tbody>
            <tfoot class="table-light">
              <tr>
                <td class="text-end fw-bold">Totales:</td>
                <td class="text-center fw-bold">{{creditos.length}}</td>
                <td class="text-end fw-bold">{{totalMontos() | currency}}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="container">
          <div class="row">
            <div class="col align-self-center">
              <app-graphs-view [rawData]="dataTabla" keyLabel="municipio" title="Cr\xE9ditos por municipio"
              currentGraph="pie"></app-graphs-view>
            </div>
            <div class="col align-self-center">
              <app-graphs-view [rawData]="dataTabla" keyLabel="municipio" keyValue="monto_autorizado"
                operation="sum" title="Montos por municipio" currentGraph="line"
              [currency]="true"></app-graphs-view>
            </div>
          </div>
        </div>
      </div>
    }

    <div class="card-footer bg-light py-2">
      <small class="text-muted">
        Mostrando {{creditos.length}} cr\xE9ditos
      </small>
    </div>
  </div>
</div>` }]
  }], () => [{ type: CreditoService }, { type: ContratoMachoteCartaInstruccionesService }, { type: UtilsService }, { type: LocalStorageService }, { type: TablaLocalService }], { filtros: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SesionadosCreditosComponent, { className: "SesionadosCreditosComponent", filePath: "src/app/main/informes/sesionados/sesionados-creditos/sesionados-creditos.component.ts", lineNumber: 36 });
})();

// src/app/main/informes/sesionados/sesionados-apoyos/sesionados-apoyos.component.ts
var _c0 = (a0, a1) => ({ "btn-outline-success": a0, "btn-success": a1 });
var _forTrack0 = ($index, $item) => $item.id;
function SesionadosApoyosComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function SesionadosApoyosComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function SesionadosApoyosComponent_For_39_For_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cotizacion_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cotizacion_r2.apoyos_proveedores.nombre_comercial.toUpperCase(), " ");
  }
}
function SesionadosApoyosComponent_For_39_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_For_39_For_23_Template_button_click_1_listener() {
      const cotizacion_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.solicitudApoyoModalidadCotizacionController.verificarCotizacion(cotizacion_r2));
    });
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_For_39_For_23_Template_button_click_3_listener() {
      const cotizacion_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const row_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cartaInstruccionService.machoteCartaInstrucciones(row_r4.apoyo, cotizacion_r2, void 0, false, (ctx_r2.usuario == null ? null : ctx_r2.usuario.email) == "ascornejo@baja.gob.mx"));
    });
    \u0275\u0275element(4, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SesionadosApoyosComponent_For_39_For_23_Conditional_5_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cotizacion_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c0, !cotizacion_r2.carta_instruccion_verificacion, cotizacion_r2.carta_instruccion_verificacion))("title", cotizacion_r2.carta_instruccion_verificacion ? "Cotizaci\xF3n verificada" : "Verificar cotizaci\xF3n");
    \u0275\u0275advance();
    \u0275\u0275classMap(cotizacion_r2.carta_instruccion_verificacion ? "bi-check-circle-fill" : "bi-check-circle");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(cotizacion_r2.apoyos_proveedores ? 5 : -1);
  }
}
function SesionadosApoyosComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 20)(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 28)(4, "div", 29)(5, "div", 30);
    \u0275\u0275element(6, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 33)(10, "span", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 33)(13, "span", 35);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 28)(17, "span", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "div", 37)(21, "div", 38);
    \u0275\u0275repeaterCreate(22, SesionadosApoyosComponent_For_39_For_23_Template, 6, 8, "div", 39, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275property("hidden", row_r4.isHidden);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", row_r4.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", row_r4.cliente, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r4.programa_apoyo, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 6, row_r4.monto_autorizado), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r4.municipio, " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(row_r4.modalidad.solicitudes_apoyos_modalidades_cotizaciones);
  }
}
function SesionadosApoyosComponent_Conditional_52_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 50)(5, "span", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 60);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 51)(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const municipio_r5 = ctx.$implicit;
    const \u0275$index_176_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("table-success", \u0275$index_176_r6 % 2 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", municipio_r5 || "No especificado", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.totalapoyosMunicipio(municipio_r5), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, ctx_r2.totalMontosMunicipio(municipio_r5)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.totalMontosMunicipio(municipio_r5) / ctx_r2.totalMontos() * 100).toFixed(1), "% ");
  }
}
function SesionadosApoyosComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 45)(2, "h5", 46);
    \u0275\u0275element(3, "i", 47);
    \u0275\u0275text(4, "Distribuci\xF3n por Municipio ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "table", 48)(7, "thead", 16)(8, "tr")(9, "th", 49);
    \u0275\u0275text(10, "Municipio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 50);
    \u0275\u0275text(12, "# Apoyos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 51);
    \u0275\u0275text(14, "Total Montos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 51);
    \u0275\u0275text(16, "% Distribuci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, SesionadosApoyosComponent_Conditional_52_For_19_Template, 13, 8, "tr", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "tfoot", 16)(21, "tr")(22, "td", 22);
    \u0275\u0275text(23, "Totales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 53);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 22);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 22);
    \u0275\u0275text(30, "100%");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "div", 37)(32, "div", 54)(33, "div", 55);
    \u0275\u0275element(34, "app-graphs-view", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 55);
    \u0275\u0275element(36, "app-graphs-view", 57);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r2.municipios);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.apoyos.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 5, ctx_r2.totalMontos()));
    \u0275\u0275advance(7);
    \u0275\u0275property("rawData", ctx_r2.dataTabla);
    \u0275\u0275advance(2);
    \u0275\u0275property("rawData", ctx_r2.dataTabla)("currency", true);
  }
}
var _SesionadosApoyosComponent = class _SesionadosApoyosComponent {
  constructor(apoyoController, cartaInstruccionService, utils, tablaLocal, storage, solicitudApoyoModalidadCotizacionController) {
    this.apoyoController = apoyoController;
    this.cartaInstruccionService = cartaInstruccionService;
    this.utils = utils;
    this.tablaLocal = tablaLocal;
    this.storage = storage;
    this.solicitudApoyoModalidadCotizacionController = solicitudApoyoModalidadCotizacionController;
    this.sesion_id = 0;
    this.apoyos = [];
    this.dataTabla = [];
    this.search = "";
    this.municipios = [];
    this.isLoading = false;
    this.isLoadingVerificados = false;
  }
  ngOnInit() {
    this.usuario = this.storage.getUser();
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes["filtros"]) {
        this.sesion_id = this.filtros.sesion_id ?? 0;
        yield this.loadData();
        this.setDataTabla();
        this.setMunicipios();
      }
    });
  }
  setDataTabla() {
    this.dataTabla = this.apoyos.map((a) => {
      return {
        id: a.id,
        cliente: this.utils.nombreClienteFromDatosPersonales(a.datos_personales),
        programa_apoyo: a.programas_apoyos?.nombre || "",
        monto_autorizado: this.totalApoyo(a),
        municipio: a.ciudad_negocio?.nombre.toUpperCase() || "N/A",
        apoyo: a,
        modalidad: this.modalidadPorSesion(a)
      };
    });
  }
  setMunicipios() {
    const municipios = this.apoyos.map((c) => c.sucursales?.nombre.toUpperCase()).filter((m) => m !== void 0);
    this.municipios = Array.from(new Set(municipios));
  }
  loadData() {
    return __async(this, null, function* () {
      const busqueda_avanzada = [];
      if (this.filtros.sesion_id) {
        busqueda_avanzada.push({
          relation: "solicitudesApoyosModalidades",
          andConditionals: [
            ["sesion_id", "=", this.filtros.sesion_id]
          ],
          conditionals: []
        });
      }
      if (this.filtros.fecha_inicio) {
        busqueda_avanzada.push({
          relation: "solicitudesApoyosModalidades",
          andConditionals: [
            ["created_at", ">=", this.filtros.fecha_inicio]
          ],
          conditionals: []
        });
      }
      if (this.filtros.fecha_fin) {
        busqueda_avanzada.push({
          relation: "solicitudesApoyosModalidades",
          andConditionals: [
            ["created_at", "<=", this.filtros.fecha_fin]
          ],
          conditionals: []
        });
      }
      this.apoyos = yield this.apoyoController.all({
        programas_apoyo_id: this.filtros.programa_apoyo_id,
        deleted_at: null
      }, [
        "solicitudesApoyosModalidades.solicitudesApoyosModalidadesCotizaciones.apoyosProveedores",
        "solicitudesApoyosModalidades.sesiones",
        "ciudadNegocio",
        "ciudadFiscal",
        "programasApoyos",
        "datosPersonales",
        "sucursales"
      ], { busqueda_avanzada: JSON.stringify(busqueda_avanzada) });
      console.log(this.apoyos);
    });
  }
  descargarCartas() {
    return __async(this, null, function* () {
      this.isLoading = true;
      yield this.multiplesMachoteCartasInstrucciones(this.apoyos);
      this.isLoading = false;
    });
  }
  descargarCartasVerificadas() {
    return __async(this, null, function* () {
      this.isLoading = true;
      yield this.multiplesMachoteCartasInstrucciones(this.apoyos);
      this.isLoading = false;
    });
  }
  multiplesMachoteCartasInstrucciones(apoyos) {
    return __async(this, null, function* () {
      const docDefinitions = [];
      for (const apoyo of apoyos) {
        const modalidadActual = this.modalidadPorSesion(apoyo);
        for (const cot of modalidadActual.solicitudes_apoyos_modalidades_cotizaciones) {
          docDefinitions.push(yield this.cartaInstruccionService.machoteCartaInstrucciones(apoyo, cot, modalidadActual, true, this.usuario?.email == "ascornejo@baja.gob.mx"));
        }
      }
      yield this.cartaInstruccionService.generateAndDownloadMultiplePDFs(docDefinitions);
    });
  }
  modalidadPorSesion(solicitud) {
    return solicitud?.solicitudes_apoyos_modalidades?.find((mod) => mod.sesion_id == this.filtros.sesion_id);
  }
  buscar() {
    return __async(this, null, function* () {
      this.search = this.search.trim();
      this.tablaLocal.generalSearch(this.dataTabla, this.search);
      const resultados = this.dataTabla.filter((r) => !r.isHidden);
      if (resultados.length == 0) {
        yield this.loadData();
        this.tablaLocal.generalSearch(this.dataTabla, this.search);
      }
    });
  }
  totalApoyo(apoyo) {
    const modalidad = this.modalidadPorSesion(apoyo);
    if (!modalidad) {
      console.error(this.filtros, this.sesion_id);
    }
    return modalidad?.solicitudes_apoyos_modalidades_cotizaciones?.reduce((acc, cot) => acc + +cot.monto, 0) ?? 0;
  }
  totalMontos() {
    return this.apoyos.reduce((acc, apoyo) => acc + (this.totalModalidadActualFromSolicitudApoyo(apoyo) ?? 0), 0);
  }
  totalModalidadActualFromSolicitudApoyo(solicitudApoyo) {
    const modalidadActual = this.modalidadPorSesion(solicitudApoyo);
    if (!modalidadActual?.solicitudes_apoyos_modalidades_cotizaciones)
      return;
    return modalidadActual.solicitudes_apoyos_modalidades_cotizaciones.reduce((acc, cot) => acc + +cot.monto, 0);
  }
  totalapoyosMunicipio(municipio) {
    return this.apoyos.filter((c) => c.sucursales?.nombre.toUpperCase() == municipio).length;
  }
  totalMontosMunicipio(municipio) {
    return this.apoyos.filter((c) => c.sucursales?.nombre.toUpperCase() == municipio).reduce((acc, c) => acc + +(this.totalModalidadActualFromSolicitudApoyo(c) ?? 0), 0);
  }
};
_SesionadosApoyosComponent.\u0275fac = function SesionadosApoyosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SesionadosApoyosComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(ApoyosCartaInstruccionesService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(TablaLocalService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(SolicitudApoyoModalidadCotizacionService));
};
_SesionadosApoyosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SesionadosApoyosComponent, selectors: [["app-sesionados-apoyos"]], inputs: { filtros: "filtros" }, features: [\u0275\u0275NgOnChangesFeature], decls: 53, vars: 10, consts: [[1, "container-fluid", "px-0"], [1, "card", "shadow-sm", "mb-4"], [1, "card-header", "bg-success", "text-bg-success", "row", "justify-content-between", "align-items-center"], [1, "col", "p-2", "mb-0"], [1, "bi", "bi-card-list", "me-2"], [1, "col-sm-auto", "p-2"], [1, "input-group", "input-group-sm"], ["type", "text", "placeholder", "Ingresa una busqueda r\xE1pida...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-search"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-printer-fill", "me-1"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], [1, "table-responsive"], [1, "table", "table-hover", "table-striped", "mb-0"], [1, "table-light"], [1, "align-middle", "pointer", "scale-025", 3, "click"], [1, "align-middle", "pointer", "scale-025", "text-end", 3, "click"], [1, "align-middle", "text-center"], [3, "hidden"], ["colspan", "2", 1, "text-end", "fw-bold"], [1, "text-end", "fw-bold"], [1, "card-footer", "bg-light", "py-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-muted"], [1, "card", "shadow-sm"], [1, "align-middle", "fw-bold", "text-success"], [1, "align-middle"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0", "me-2"], [1, "bi", "bi-person-heart", "text-muted"], [1, "flex-grow-1"], [1, "align-middle", "text-end"], [1, "badge", "bg-opacity-10", "text-bg-secondary", "bg-secondary"], [1, "badge", "bg-success", "bg-opacity-20", "text-bg-success"], [1, "badge", "bg-info", "bg-opacity-10", "text-bg-info"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-auto", "text-center"], [1, "btn", "btn-sm", 3, "click", "ngClass", "title"], [1, "bi"], ["title", "Imprimir carta de instrucciones", 1, "btn", "btn-sm", "btn-outline-primary", "ms-2", 3, "click"], [1, "bi", "bi-printer"], [1, "cotizacion-info", "mt-1", "small", "text-muted", "text-center"], [1, "card-header", "bg-secondary", "text-white"], [1, "mb-0"], [1, "bi", "bi-pie-chart", "me-2"], [1, "table", "table-sm", "mb-0"], [1, "text-start"], [1, "text-center"], [1, "text-end"], [3, "table-success"], [1, "text-center", "fw-bold"], [1, "row"], [1, "col", "align-self-center"], ["keyLabel", "municipio", "title", "apoyos por municipio", "currentGraph", "pie", 3, "rawData"], ["keyLabel", "municipio", "keyValue", "monto_autorizado", "operation", "sum", "title", "Montos por municipio", "currentGraph", "line", 3, "rawData", "currency"], [1, "bi", "bi-geo-alt-fill", "me-2", "text-muted"], [1, "badge", "rounded-pill", "bg-success", "bg-opacity-10", "text-bg-success"], [1, "text-end", "fw-bold", "text-bg-success"]], template: function SesionadosApoyosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Detalle de Apoyos Sesionados ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function SesionadosApoyosComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function SesionadosApoyosComponent_Template_input_keyup_enter_8_listener() {
      return ctx.buscar();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 8);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_Template_button_click_9_listener() {
      return ctx.buscar();
    });
    \u0275\u0275element(10, "i", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 5)(12, "button", 10);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_Template_button_click_12_listener() {
      return ctx.descargarCartas();
    });
    \u0275\u0275conditionalCreate(13, SesionadosApoyosComponent_Conditional_13_Template, 1, 0, "span", 11);
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275text(15, "Imprimir Todos ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 5)(17, "button", 13);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_Template_button_click_17_listener() {
      return ctx.descargarCartasVerificadas();
    });
    \u0275\u0275conditionalCreate(18, SesionadosApoyosComponent_Conditional_18_Template, 1, 0, "span", 11);
    \u0275\u0275element(19, "i", 12);
    \u0275\u0275text(20, "Imprimir Verificados ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 14)(22, "table", 15)(23, "thead", 16)(24, "tr")(25, "th", 17);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_Template_th_click_25_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "id");
    });
    \u0275\u0275text(26, "ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 17);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_Template_th_click_27_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "cliente");
    });
    \u0275\u0275text(28, " Beneficiario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 18);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_Template_th_click_29_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "programa_apoyo");
    });
    \u0275\u0275text(30, "Programa Apoyo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th", 18);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_Template_th_click_31_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "monto_autorizado");
    });
    \u0275\u0275text(32, "Monto Autorizado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 17);
    \u0275\u0275listener("click", function SesionadosApoyosComponent_Template_th_click_33_listener() {
      return ctx.tablaLocal.sortByKey(ctx.dataTabla, "municipio");
    });
    \u0275\u0275text(34, "Municipio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 19);
    \u0275\u0275text(36, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "tbody");
    \u0275\u0275repeaterCreate(38, SesionadosApoyosComponent_For_39_Template, 24, 8, "tr", 20, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "tfoot", 16)(41, "tr")(42, "td", 21);
    \u0275\u0275text(43, "Total General:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td", 22);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "td");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 23)(49, "div", 24)(50, "small", 25);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(52, SesionadosApoyosComponent_Conditional_52_Template, 37, 7, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isLoadingVerificados);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoadingVerificados ? 18 : -1);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx.dataTabla);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 8, ctx.totalMontos()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Mostrando ", ctx.apoyos.length, " apoyos ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dataTabla.length ? 52 : -1);
  }
}, dependencies: [
  NgClass,
  CurrencyPipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  GraphsViewComponent
], styles: ["\n\n.cotizacion-info[_ngcontent-%COMP%] {\n  width: 10rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=sesionados-apoyos.component.css.map */"] });
var SesionadosApoyosComponent = _SesionadosApoyosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SesionadosApoyosComponent, [{
    type: Component,
    args: [{ selector: "app-sesionados-apoyos", imports: [
      NgClass,
      CurrencyPipe,
      FormsModule,
      GraphsViewComponent
    ], template: `<div class="container-fluid px-0">
  <!-- Tabla principal de apoyos -->
  <div class="card shadow-sm mb-4">
    <div class="card-header bg-success text-bg-success row justify-content-between align-items-center">
      <h5 class="col p-2 mb-0">
        <i class="bi bi-card-list me-2"></i>Detalle de Apoyos Sesionados
      </h5>
      <div class="col-sm-auto p-2">
        <div class="input-group input-group-sm">
          <input type="text" class="form-control" [(ngModel)]="search"
            placeholder="Ingresa una busqueda r\xE1pida..."
            (keyup.enter)="buscar()">
          <button class="btn btn-primary" (click)="buscar()"><i
          class="bi bi-search"></i></button>
        </div>
      </div>
      <div class="col-sm-auto p-2">
        <button class="btn btn-primary btn-sm" (click)="descargarCartas()" [disabled]="isLoading">
          @if (isLoading) {
            <span class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
          }
          <i class="bi bi-printer-fill me-1"></i>Imprimir Todos
        </button>
      </div>
      <div class="col-sm-auto p-2">
        <button class="btn btn-danger btn-sm" (click)="descargarCartasVerificadas()"
          [disabled]="isLoadingVerificados">
          @if (isLoadingVerificados) {
            <span class="spinner-border spinner-border-sm me-1"
            aria-hidden="true"></span>
          }
          <i class="bi bi-printer-fill me-1"></i>Imprimir Verificados
        </button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-hover table-striped mb-0">
        <thead class="table-light">
          <tr>
            <th class="align-middle pointer scale-025" (click)="tablaLocal.sortByKey(dataTabla,'id')">ID
            </th>
            <th class="align-middle pointer scale-025" (click)="tablaLocal.sortByKey(dataTabla,'cliente')">
            Beneficiario</th>
            <th class="align-middle pointer scale-025 text-end"
            (click)="tablaLocal.sortByKey(dataTabla,'programa_apoyo')">Programa Apoyo</th>
            <th class="align-middle pointer scale-025 text-end"
            (click)="tablaLocal.sortByKey(dataTabla,'monto_autorizado')">Monto Autorizado</th>
            <th class="align-middle pointer scale-025"
            (click)="tablaLocal.sortByKey(dataTabla,'municipio')">Municipio</th>
            <th class="align-middle text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          @for (row of dataTabla; track row.id) {
            <tr [hidden]="row.isHidden">
              <td class="align-middle fw-bold text-success">#{{row.id}}</td>
              <td class="align-middle">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-2">
                    <i class="bi bi-person-heart text-muted"></i>
                  </div>
                  <div class="flex-grow-1">
                    {{row.cliente}}
                  </div>
                </div>
              </td>
              <td class="align-middle text-end">
                <span class="badge bg-opacity-10 text-bg-secondary bg-secondary">
                  {{row.programa_apoyo}}
                </span>
              </td>
              <td class="align-middle text-end">
                <span class="badge bg-success bg-opacity-20 text-bg-success">
                  {{row.monto_autorizado| currency}}
                </span>
              </td>
              <td class="align-middle">
                <span class="badge bg-info bg-opacity-10 text-bg-info">
                  {{row.municipio}}
                </span>
              </td>
              <td>
                <div class="container">
                  <div class="row justify-content-center">
                    @for (cotizacion of row.modalidad.solicitudes_apoyos_modalidades_cotizaciones; track cotizacion.id) {
                      <div class="col-auto text-center"
                        >
                        <!-- Bot\xF3n de verificaci\xF3n -->
                                        <button class="btn btn-sm" [ngClass]="{
                                            'btn-outline-success': !cotizacion.carta_instruccion_verificacion,
                                            'btn-success': cotizacion.carta_instruccion_verificacion
                                            }"
                          (click)="solicitudApoyoModalidadCotizacionController.verificarCotizacion(cotizacion)"
                          [title]="cotizacion.carta_instruccion_verificacion ? 'Cotizaci\xF3n verificada' : 'Verificar cotizaci\xF3n'">
                          <i class="bi"
                          [class]="cotizacion.carta_instruccion_verificacion ? 'bi-check-circle-fill' : 'bi-check-circle'"></i>
                        </button>
                        <!-- Bot\xF3n de impresi\xF3n -->
                        <button class="btn btn-sm btn-outline-primary ms-2"
                          (click)="cartaInstruccionService.machoteCartaInstrucciones(row.apoyo, cotizacion, undefined, false, this.usuario?.email=='ascornejo@baja.gob.mx')"
                          title="Imprimir carta de instrucciones">
                          <i class="bi bi-printer"></i>
                        </button>
                        <!-- Informaci\xF3n adicional de la cotizaci\xF3n (opcional) -->
                        @if (cotizacion.apoyos_proveedores) {
                          <div class="cotizacion-info mt-1 small text-muted text-center"
                            >
                            {{ cotizacion.apoyos_proveedores.nombre_comercial.toUpperCase() }}
                          </div>
                        }
                      </div>
                    }
                  </div>
                </div>
              </td>
            </tr>
          }
        </tbody>
        <tfoot class="table-light">
          <tr>
            <td colspan="2" class="text-end fw-bold">Total General:</td>
            <td class="text-end fw-bold">{{totalMontos() | currency}}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="card-footer bg-light py-2">
      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">
          Mostrando {{apoyos.length}} apoyos
        </small>
      </div>
    </div>
  </div>

  <!-- Resumen por municipio -->
  @if (dataTabla.length) {
    <div class="card shadow-sm">
      <div class="card-header bg-secondary text-white">
        <h5 class="mb-0">
          <i class="bi bi-pie-chart me-2"></i>Distribuci\xF3n por Municipio
        </h5>
      </div>
      <div class="table-responsive">
        <table class="table table-sm mb-0">
          <thead class="table-light">
            <tr>
              <th class="text-start">Municipio</th>
              <th class="text-center"># Apoyos</th>
              <th class="text-end">Total Montos</th>
              <th class="text-end">% Distribuci\xF3n</th>
            </tr>
          </thead>
          <tbody>
            @for (municipio of municipios; track municipio; let i = $index) {
              <tr [class.table-success]="i % 2 === 0">
                <td class="text-start">
                  <i class="bi bi-geo-alt-fill me-2 text-muted"></i>
                  {{municipio || 'No especificado'}}
                </td>
                <td class="text-center">
                  <span class="badge rounded-pill bg-success bg-opacity-10 text-bg-success">
                    {{totalapoyosMunicipio(municipio)}}
                  </span>
                </td>
                <td class="text-end fw-bold text-bg-success">
                  {{totalMontosMunicipio(municipio) | currency}}
                </td>
                <td class="text-end">
                  <span class="text-muted">
                    {{(totalMontosMunicipio(municipio) / totalMontos() * 100).toFixed(1)}}%
                  </span>
                </td>
              </tr>
            }
          </tbody>
          <tfoot class="table-light">
            <tr>
              <td class="text-end fw-bold">Totales:</td>
              <td class="text-center fw-bold">{{apoyos.length}}</td>
              <td class="text-end fw-bold">{{totalMontos() | currency}}</td>
              <td class="text-end fw-bold">100%</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="container">
        <div class="row">
          <div class="col align-self-center">
            <app-graphs-view [rawData]="dataTabla" keyLabel="municipio" title="apoyos por municipio"
            currentGraph="pie"></app-graphs-view>
          </div>
          <div class="col align-self-center">
            <app-graphs-view [rawData]="dataTabla" keyLabel="municipio" keyValue="monto_autorizado"
              operation="sum" title="Montos por municipio" currentGraph="line"
            [currency]="true"></app-graphs-view>
          </div>
        </div>
      </div>
    </div>
  }
</div>`, styles: ["/* src/app/main/informes/sesionados/sesionados-apoyos/sesionados-apoyos.component.css */\n.cotizacion-info {\n  width: 10rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=sesionados-apoyos.component.css.map */\n"] }]
  }], () => [{ type: SolicitudApoyoService }, { type: ApoyosCartaInstruccionesService }, { type: UtilsService }, { type: TablaLocalService }, { type: LocalStorageService }, { type: SolicitudApoyoModalidadCotizacionService }], { filtros: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SesionadosApoyosComponent, { className: "SesionadosApoyosComponent", filePath: "src/app/main/informes/sesionados/sesionados-apoyos/sesionados-apoyos.component.ts", lineNumber: 39 });
})();

// src/app/main/informes/sesionados/sesionados.component.ts
function SesionadosComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 11);
    \u0275\u0275text(2, "Programa de apoyo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-autocomplete-field", 28);
    \u0275\u0275twoWayListener("valueChange", function SesionadosComponent_Conditional_16_Template_app_autocomplete_field_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filtros.programa_apoyo_id, $event) || (ctx_r1.filtros.programa_apoyo_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx_r1.filtros.programa_apoyo_id);
  }
}
function SesionadosComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 11);
    \u0275\u0275text(2, "Producto financiero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-autocomplete-field", 29);
    \u0275\u0275twoWayListener("valueChange", function SesionadosComponent_Conditional_17_Template_app_autocomplete_field_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filtros.producto_financiero_id, $event) || (ctx_r1.filtros.producto_financiero_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx_r1.filtros.producto_financiero_id);
  }
}
function SesionadosComponent_Conditional_41_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2, "Mostrando todos los resultados disponibles ");
    \u0275\u0275elementEnd();
  }
}
function SesionadosComponent_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-sesionados-creditos", 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("filtros", ctx_r1.filtros);
  }
}
function SesionadosComponent_Conditional_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-sesionados-apoyos", 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("filtros", ctx_r1.filtros);
  }
}
function SesionadosComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SesionadosComponent_Conditional_41_Conditional_0_Template, 3, 0, "div", 30);
    \u0275\u0275conditionalCreate(1, SesionadosComponent_Conditional_41_Conditional_1_Template, 1, 1, "app-sesionados-creditos", 31);
    \u0275\u0275conditionalCreate(2, SesionadosComponent_Conditional_41_Conditional_2_Template, 1, 1, "app-sesionados-apoyos", 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r1.filtros.sesion_id && !ctx_r1.filtros.fecha_inicio && !ctx_r1.filtros.fecha_fin ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCreditos ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.showCreditos ? 2 : -1);
  }
}
function SesionadosComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "small", 33);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Resultados generados el ", \u0275\u0275pipeBind2(4, 1, ctx_r1.today, "mediumDate"), " ");
  }
}
var _SesionadosComponent = class _SesionadosComponent {
  constructor() {
    this.today = /* @__PURE__ */ new Date();
    this.filtros = {};
    this.showResultados = false;
    this.showCreditos = true;
  }
  buscar() {
    this.filtros = __spreadValues({}, this.filtros);
    this.showResultados = true;
  }
  limpiarFiltros() {
    this.showResultados = false;
    this.filtros = {};
  }
};
_SesionadosComponent.\u0275fac = function SesionadosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SesionadosComponent)();
};
_SesionadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SesionadosComponent, selectors: [["app-sesionados"]], decls: 43, vars: 12, consts: [[1, "container-fluid", "my-4"], [1, "card", "shadow-sm"], [1, "card-header", "bg-primary", "text-white"], [1, "mb-0"], [1, "bi", "bi-card-checklist", "me-2"], [1, "card-body"], [1, "mb-4"], [1, "text-muted", "mb-3"], [1, "bi", "bi-funnel", "me-2"], [1, "row", "g-3", "align-items-end"], [1, "col-12", "col-md-4"], [1, "form-label", "fw-bold"], ["placeholder", "Buscar sesi\xF3n...", "apiUrl", "api/sesiones", "keyDetalle", "sesion", 1, "w-100", 3, "valueChange", "value"], [1, "input-group"], ["type", "date", "aria-label", "Fecha inicio", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group-text"], ["type", "date", "aria-label", "Fecha fin", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12", "col-md-4", "d-flex", "gap-2"], [1, "btn", "btn-outline-danger", "flex-grow-1", 3, "click"], [1, "bi", "bi-eraser", "me-1"], [1, "btn", "btn-primary", "flex-grow-1", 3, "click", "disabled"], [1, "bi", "bi-search", "me-1"], [1, "d-flex", "justify-content-center", "mb-4"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-currency-dollar", "me-1"], [1, "bi", "bi-cash-coin", "me-1"], [1, "card-footer", "bg-light"], ["placeholder", "Buscar programa de apoyo...", "apiUrl", "api/programas_apoyos", "keyDetalle", "nombre", 1, "w-100", 3, "valueChange", "value"], ["placeholder", "Buscar producto financiero...", "apiUrl", "api/productos_financieros", "keyDetalle", "nombre", 1, "w-100", 3, "valueChange", "value"], [1, "alert", "alert-info"], [3, "filtros"], [1, "bi", "bi-info-circle", "me-2"], [1, "text-muted"], [1, "bi", "bi-info-circle", "me-1"]], template: function SesionadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Cr\xE9ditos y Apoyos Sesionados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "h5", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, "Filtros de B\xFAsqueda ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "label", 11);
    \u0275\u0275text(14, "Sesi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-autocomplete-field", 12);
    \u0275\u0275twoWayListener("valueChange", function SesionadosComponent_Template_app_autocomplete_field_valueChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.sesion_id, $event) || (ctx.filtros.sesion_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, SesionadosComponent_Conditional_16_Template, 4, 1, "div", 10);
    \u0275\u0275conditionalCreate(17, SesionadosComponent_Conditional_17_Template, 4, 1, "div", 10);
    \u0275\u0275elementStart(18, "div", 10)(19, "label", 11);
    \u0275\u0275text(20, "Rango de Fechas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13)(22, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function SesionadosComponent_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.fecha_inicio, $event) || (ctx.filtros.fecha_inicio = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24, "a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function SesionadosComponent_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.fecha_fin, $event) || (ctx.filtros.fecha_fin = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 17)(27, "button", 18);
    \u0275\u0275listener("click", function SesionadosComponent_Template_button_click_27_listener() {
      return ctx.limpiarFiltros();
    });
    \u0275\u0275element(28, "i", 19);
    \u0275\u0275text(29, "Limpiar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 20);
    \u0275\u0275listener("click", function SesionadosComponent_Template_button_click_30_listener() {
      return ctx.buscar();
    });
    \u0275\u0275element(31, "i", 21);
    \u0275\u0275text(32, "Buscar ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 22)(34, "div", 23)(35, "button", 24);
    \u0275\u0275listener("click", function SesionadosComponent_Template_button_click_35_listener() {
      return ctx.showCreditos = true;
    });
    \u0275\u0275element(36, "i", 25);
    \u0275\u0275text(37, "Cr\xE9ditos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 24);
    \u0275\u0275listener("click", function SesionadosComponent_Template_button_click_38_listener() {
      return ctx.showCreditos = false;
    });
    \u0275\u0275element(39, "i", 26);
    \u0275\u0275text(40, "Apoyos ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(41, SesionadosComponent_Conditional_41_Template, 3, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(42, SesionadosComponent_Conditional_42_Template, 5, 4, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("value", ctx.filtros.sesion_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.showCreditos ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showCreditos ? 17 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.fecha_inicio);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.fecha_fin);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx.filtros.sesion_id && !ctx.filtros.fecha_inicio && !ctx.filtros.fecha_fin);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("active", ctx.showCreditos);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", !ctx.showCreditos);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.showResultados ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showResultados ? 42 : -1);
  }
}, dependencies: [
  AutocompleteFieldComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  SesionadosCreditosComponent,
  SesionadosApoyosComponent,
  DatePipe
], encapsulation: 2 });
var SesionadosComponent = _SesionadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SesionadosComponent, [{
    type: Component,
    args: [{ selector: "app-sesionados", imports: [
      AutocompleteFieldComponent,
      FormsModule,
      SesionadosCreditosComponent,
      SesionadosApoyosComponent,
      DatePipe
    ], template: `<div class="container-fluid my-4">
  <div class="card shadow-sm">
    <div class="card-header bg-primary text-white">
      <h4 class="mb-0">
        <i class="bi bi-card-checklist me-2"></i>Cr\xE9ditos y Apoyos Sesionados
      </h4>
    </div>

    <div class="card-body">
      <!-- Secci\xF3n de Filtros -->
      <div class="mb-4">
        <h5 class="text-muted mb-3">
          <i class="bi bi-funnel me-2"></i>Filtros de B\xFAsqueda
        </h5>

        <div class="row g-3 align-items-end">
          <!-- Filtro Sesi\xF3n -->
          <div class="col-12 col-md-4">
            <label class="form-label fw-bold">Sesi\xF3n</label>
            <app-autocomplete-field placeholder="Buscar sesi\xF3n..." apiUrl="api/sesiones" keyDetalle="sesion"
              [(value)]="filtros.sesion_id" class="w-100">
            </app-autocomplete-field>
          </div>

          <!-- Filtro por programa de apoyo -->
          @if (!showCreditos) {
            <div class="col-12 col-md-4">
              <label class="form-label fw-bold">Programa de apoyo</label>
              <app-autocomplete-field placeholder="Buscar programa de apoyo..." apiUrl="api/programas_apoyos" keyDetalle="nombre"
                [(value)]="filtros.programa_apoyo_id" class="w-100">
              </app-autocomplete-field>
            </div>
          }

          <!-- Filtro por producto financiero -->
          @if (showCreditos) {
            <div class="col-12 col-md-4">
              <label class="form-label fw-bold">Producto financiero</label>
              <app-autocomplete-field placeholder="Buscar producto financiero..." apiUrl="api/productos_financieros" keyDetalle="nombre"
                [(value)]="filtros.producto_financiero_id" class="w-100">
              </app-autocomplete-field>
            </div>
          }

          <!-- Rango de Fechas -->
          <div class="col-12 col-md-4">
            <label class="form-label fw-bold">Rango de Fechas</label>
            <div class="input-group">
              <input type="date" class="form-control" [(ngModel)]="filtros.fecha_inicio"
                aria-label="Fecha inicio">
              <span class="input-group-text">a</span>
              <input type="date" class="form-control" [(ngModel)]="filtros.fecha_fin"
                aria-label="Fecha fin">
            </div>
          </div>

          <!-- Botones de Acci\xF3n -->
          <div class="col-12 col-md-4 d-flex gap-2">
            <button class="btn btn-outline-danger flex-grow-1" (click)="limpiarFiltros()">
              <i class="bi bi-eraser me-1"></i>Limpiar
            </button>
            <button class="btn btn-primary flex-grow-1"
              [disabled]="!filtros.sesion_id && !filtros.fecha_inicio && !filtros.fecha_fin"
              (click)="buscar()">
              <i class="bi bi-search me-1"></i>Buscar
            </button>
          </div>
        </div>
      </div>

      <!-- Selector de Vista -->
      <div class="d-flex justify-content-center mb-4">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-outline-primary" [class.active]="showCreditos"
            (click)="showCreditos=true">
            <i class="bi bi-currency-dollar me-1"></i>Cr\xE9ditos
          </button>
          <button type="button" class="btn btn-outline-primary" [class.active]="!showCreditos"
            (click)="showCreditos=false">
            <i class="bi bi-cash-coin me-1"></i>Apoyos
          </button>
        </div>
      </div>

      <!-- Resultados -->
      @if (showResultados) {
        @if (!filtros.sesion_id && !filtros.fecha_inicio && !filtros.fecha_fin) {
          <div class="alert alert-info">
            <i class="bi bi-info-circle me-2"></i>Mostrando todos los resultados disponibles
          </div>
        }
        @if (showCreditos) {
          <app-sesionados-creditos [filtros]="filtros"></app-sesionados-creditos>
        }
        @if (!showCreditos) {
          <app-sesionados-apoyos [filtros]="filtros"></app-sesionados-apoyos>
        }
      }
    </div>

    @if (showResultados) {
      <div class="card-footer bg-light">
        <small class="text-muted">
          <i class="bi bi-info-circle me-1"></i>
          Resultados generados el {{ today | date:'mediumDate' }}
        </small>
      </div>
    }
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SesionadosComponent, { className: "SesionadosComponent", filePath: "src/app/main/informes/sesionados/sesionados.component.ts", lineNumber: 29 });
})();

// src/app/main/informes/shared/informe-tabla-local/informe-tabla-local.component.ts
function _forTrack02($index, $item) {
  return $item[this.columns[0]];
}
function InformeTablaLocalComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r1.replaceAll("_", " ").toUpperCase());
  }
}
function InformeTablaLocalComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 8)(1, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function InformeTablaLocalComponent_For_16_Template_input_ngModelChange_1_listener($event) {
      const column_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filtrado[column_r3], $event) || (ctx_r3.filtrado[column_r3] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function InformeTablaLocalComponent_For_16_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filtrarDatos());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filtrado[column_r3]);
  }
}
function InformeTablaLocalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, " Esta tabla est\xE1 vac\xEDa. ");
    \u0275\u0275elementEnd();
  }
}
function InformeTablaLocalComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, " Ningun registro coincide con los criterios a filtrar. ");
    \u0275\u0275elementEnd();
  }
}
function InformeTablaLocalComponent_For_21_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6[key_r5], " ");
  }
}
function InformeTablaLocalComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, InformeTablaLocalComponent_For_21_For_2_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.columns);
  }
}
var _InformeTablaLocalComponent = class _InformeTablaLocalComponent {
  constructor(excelGenerador, tablaLocal) {
    this.excelGenerador = excelGenerador;
    this.tablaLocal = tablaLocal;
    this.title = "";
    this.dataSource = [];
    this.fileName = "reporte_excel";
    this.dataFiltered = [];
    this.columns = [];
    this.ignoreColumns = [];
    this.containerClass = "container-fluid";
    this.filtrado = {};
  }
  ngOnChanges(changes) {
    if (changes["dataSource"]) {
      this.setData();
    }
  }
  filtrarDatos() {
    this.dataFiltered = this.tablaLocal.dataFiltered(this.dataSource, this.filtrado);
  }
  setData() {
    this.dataFiltered = [...this.dataSource];
    if (!this.dataSource.length)
      return;
    this.columns = Object.keys(this.dataSource[0]);
    this.columns = this.columns.filter((k) => !this.ignoreColumns.includes(k));
  }
};
_InformeTablaLocalComponent.\u0275fac = function InformeTablaLocalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeTablaLocalComponent)(\u0275\u0275directiveInject(GeneradorExcelService), \u0275\u0275directiveInject(TablaLocalService));
};
_InformeTablaLocalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeTablaLocalComponent, selectors: [["app-informe-tabla-local"]], inputs: { title: "title", dataSource: "dataSource", fileName: "fileName", containerClass: "containerClass" }, features: [\u0275\u0275NgOnChangesFeature], decls: 22, vars: 5, consts: [[1, "row"], [1, "col"], [1, "col-auto", "p-1"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-excel"], [1, "table-responsive", "position-relative"], [1, "table", "table-sm"], [1, "sticky-top"], [1, "bg-primary", "text-bg-primary"], [1, "text-muted", "text-center", "p-5"], [1, "text-muted", "text-center", "py-5"], [1, "form-control", 3, "ngModelChange", "ngModel"]], template: function InformeTablaLocalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
    \u0275\u0275listener("click", function InformeTablaLocalComponent_Template_button_click_6_listener() {
      return ctx.excelGenerador.exportToExcel(ctx.dataFiltered, ctx.fileName);
    });
    \u0275\u0275element(7, "i", 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "table", 6)(10, "thead", 7)(11, "tr");
    \u0275\u0275repeaterCreate(12, InformeTablaLocalComponent_For_13_Template, 2, 1, "th", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "tr");
    \u0275\u0275repeaterCreate(15, InformeTablaLocalComponent_For_16_Template, 2, 1, "th", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, InformeTablaLocalComponent_Conditional_17_Template, 2, 0, "p", 9)(18, InformeTablaLocalComponent_Conditional_18_Template, 2, 0, "p", 10);
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, InformeTablaLocalComponent_For_21_Template, 3, 0, "tr", null, _forTrack02, true);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.containerClass);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.dataFiltered.length);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.columns);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.columns);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.dataSource.length ? 17 : !ctx.dataFiltered.length ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.dataFiltered);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 50rem;\n}\n/*# sourceMappingURL=informe-tabla-local.component.css.map */"] });
var InformeTablaLocalComponent = _InformeTablaLocalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeTablaLocalComponent, [{
    type: Component,
    args: [{ selector: "app-informe-tabla-local", imports: [
      FormsModule
    ], template: `<div [class]="containerClass">
    <div class="row">
        <div class="col">
            <h5>{{title}}</h5>
        </div>
        <div class="col-auto p-1">
            <button class="btn btn-success" (click)="excelGenerador.exportToExcel(dataFiltered, fileName)"
                [disabled]="!dataFiltered.length"><i class="bi bi-file-earmark-excel"></i></button>
        </div>
    </div>
    <div class="table-responsive position-relative">
        <table class="table table-sm">
            <thead class="sticky-top">
                <tr>
                    @for (column of columns; track column) {
                    <th class="bg-primary text-bg-primary">
                        {{column.replaceAll('_','
                        ').toUpperCase()}}</th>
                    }
                </tr>
                <tr>
                    @for (column of columns; track column) {
                    <th class="bg-primary text-bg-primary">
                        <input class="form-control" [(ngModel)]="filtrado[column]" (ngModelChange)="filtrarDatos()">
                    </th>
                    }
                </tr>
            </thead>
            @if (!dataSource.length) {
            <p class="text-muted text-center p-5">
                Esta tabla est\xE1 vac\xEDa.
            </p>
            }@else if(!dataFiltered.length){
            <p class="text-muted text-center py-5">
                Ningun registro coincide con los criterios a filtrar.
            </p>
            }
            <tbody>
                @for (row of dataFiltered; track row[columns[0]]) {
                <tr>
                    @for (key of columns; track key) {
                    <td>
                        {{row[key]}}
                    </td>
                    }
                </tr>
                }
            </tbody>
        </table>
    </div>
</div>`, styles: ["/* src/app/main/informes/shared/informe-tabla-local/informe-tabla-local.component.css */\n.table-responsive {\n  overflow-y: auto;\n  max-height: 50rem;\n}\n/*# sourceMappingURL=informe-tabla-local.component.css.map */\n"] }]
  }], () => [{ type: GeneradorExcelService }, { type: TablaLocalService }], { title: [{
    type: Input
  }], dataSource: [{
    type: Input
  }], fileName: [{
    type: Input
  }], containerClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeTablaLocalComponent, { className: "InformeTablaLocalComponent", filePath: "src/app/main/informes/shared/informe-tabla-local/informe-tabla-local.component.ts", lineNumber: 14 });
})();

// src/app/main/informes/informe-tabla-juridicos-despacho/tabla-avance-judicial/tabla-avance-judicial.component.ts
var _forTrack03 = ($index, $item) => $item.municipio;
function TablaAvanceJudicialComponent_Conditional_0_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(column_r3.replaceAll("_", " ").toUpperCase());
  }
}
function TablaAvanceJudicialComponent_Conditional_0_For_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const \u0275$index_34_r7 = ctx.$index;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275$index_34_r7 == 0 ? "bg-primary text-bg-primary" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5[key_r6], " ");
  }
}
function TablaAvanceJudicialComponent_Conditional_0_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 12);
    \u0275\u0275listener("click", function TablaAvanceJudicialComponent_Conditional_0_For_16_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirVentanaFlotante(row_r5));
    });
    \u0275\u0275repeaterCreate(1, TablaAvanceJudicialComponent_Conditional_0_For_16_For_2_Template, 2, 3, "td", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columns);
  }
}
function TablaAvanceJudicialComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 3)(2, "div", 4)(3, "h5");
    \u0275\u0275text(4, "Avance y recuperaci\xF3n jur\xEDdico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
    \u0275\u0275listener("click", function TablaAvanceJudicialComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.excelGenerador.exportToExcel(ctx_r1.dataTabla, `${ctx_r1.mesSeleccionado}-avance_judicial-recuperado`));
    });
    \u0275\u0275element(7, "i", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 8)(9, "table", 9)(10, "thead")(11, "tr");
    \u0275\u0275repeaterCreate(12, TablaAvanceJudicialComponent_Conditional_0_For_13_Template, 2, 1, "th", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, TablaAvanceJudicialComponent_Conditional_0_For_16_Template, 3, 0, "tr", 11, _forTrack03);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.columns);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dataTabla);
  }
}
var _TablaAvanceJudicialComponent = class _TablaAvanceJudicialComponent {
  constructor(utils, utilsEstadoCuenta, excelGenerador, tablaLocal) {
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.excelGenerador = excelGenerador;
    this.tablaLocal = tablaLocal;
    this.creditos = [];
    this.fechaInicio = "";
    this.fechaFin = "";
    this.mesSeleccionado = "";
    this.dataTablaChange = new EventEmitter();
    this.dataSource = [];
    this.show = false;
    this.dataCreditos = [];
    this.columns = [];
    this.dataTabla = [];
  }
  ngOnChanges(changes) {
    if (changes["creditos"]) {
      this.setDataSource();
      this.setDataTabla();
    }
  }
  setDataSource() {
    this.dataSource = this.creditos.filter((c) => c.juridicos?.estado == "JUDICIAL").map((credito) => {
      const juridicos = credito.juridicos;
      const etapas = (juridicos?.juridicos_etapas_judiciales ?? []).filter((e) => new Date(e.fecha ?? e.created_at) <= new Date(this.fechaFin));
      const etapaActual = this.etapaJudicialActual(juridicos);
      return {
        id: credito.id,
        municipio: credito.sucursales?.nombre.trim().toUpperCase() || "",
        en_proceso_juridico: juridicos.estado == "JUDICIAL" ? "SI" : "NO",
        demanda_ingresada: this.yaPasoPorEtapaJudicial(etapas, "PRESENTACION DE LA DEMANDA") ? "SI" : "NO",
        demanda_por_presentar: !this.yaPasoPorEtapaJudicial(etapas, "PRESENTACION DE LA DEMANDA") ? "SI" : "NO",
        demanda_admitida: this.yaPasoPorEtapaJudicial(etapas, "ADMISION DE LA DEMANDA") ? "SI" : "NO"
      };
    });
    console.log("data-source", this.dataSource);
  }
  setDataTabla() {
    if (!this.dataSource.length)
      return;
    const municipios = Array.from(new Set(this.dataSource.map((r) => r.municipio.trim().toUpperCase())));
    console.log(municipios);
    this.dataTabla = municipios.map((municipio) => {
      const creditos_en_proceso_juridico = this.dataSource.filter((r) => r.en_proceso_juridico == "SI" && r.municipio == municipio).length;
      const demandas_ingresadas = this.dataSource.filter((r) => r.demanda_ingresada == "SI" && r.municipio === municipio).length;
      const por_presentar = this.dataSource.filter((r) => r.demanda_por_presentar == "SI" && r.municipio === municipio).length;
      const demandas_admitidas = this.dataSource.filter((r) => r.demanda_admitida == "SI" && r.municipio === municipio).length;
      const porcentaje_demandados = creditos_en_proceso_juridico > 0 ? demandas_ingresadas / creditos_en_proceso_juridico * 100 : 0;
      return {
        municipio,
        creditos_en_proceso_juridico,
        demandas_ingresadas,
        por_presentar,
        porc_creditos_demandados: porcentaje_demandados.toFixed(2) + "%",
        demandas_admitidas
      };
    });
    this.dataTabla.push({
      municipio: "Totales",
      creditos_en_proceso_juridico: this.tablaLocal.totales(this.dataTabla, "creditos_en_proceso_juridico"),
      demandas_ingresadas: this.tablaLocal.totales(this.dataTabla, "demandas_ingresadas"),
      por_presentar: this.tablaLocal.totales(this.dataTabla, "por_presentar"),
      porc_creditos_demandados: (this.tablaLocal.totales(this.dataTabla, "demandas_ingresadas") / this.tablaLocal.totales(this.dataTabla, "creditos_en_proceso_juridico") * 100).toFixed(2) + "%",
      demandas_admitidas: this.tablaLocal.totales(this.dataTabla, "demandas_admitidas"),
      juicios_desistidos: this.tablaLocal.totales(this.dataTabla, "juicios_desistidos")
    });
    this.columns = Object.keys(this.dataTabla[0] ?? {}) ?? [];
    this.dataTablaChange.emit(this.dataTabla);
  }
  yaPasoPorEtapaJudicial(etapas, nombre) {
    return etapas.find((e) => e.etapas_judiciales?.nombre.toUpperCase() == nombre);
  }
  etapaJudicialActual(juridico) {
    const etapasOrdenadas = juridico?.juridicos_etapas_judiciales?.filter((e) => new Date(e.fecha ?? e.created_at) <= new Date(this.fechaFin)).sort((a, b) => new Date(b.updated_at ?? "").getTime() - new Date(a.updated_at ?? "").getTime());
    const ultimaEtapaActiva = etapasOrdenadas?.[0];
    return ultimaEtapaActiva;
  }
  abrirVentanaFlotante(row) {
    if (row.municipio == "Totales")
      return;
    this.rowExpanded = row;
    this.dataCreditos = this.creditosFromMunicipio(row.municipio);
    this.show = true;
  }
  creditosFromMunicipio(municipio) {
    if (!municipio)
      return [];
    const creditos = this.creditos.filter((c) => c.sucursales?.nombre.toUpperCase() == municipio && c.juridicos && c.juridicos.estado == "JUDICIAL");
    console.log(creditos);
    return creditos.map((credito) => {
      const pf = credito.datos_persona_fisica;
      const pm = credito.datos_personas_morales;
      const fechaFin = new Date(this.fechaFin);
      const estadoCuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(credito, false, this.fechaFin);
      const ultimoAbono = estadoCuenta?.abonos_distribuidos?.at(-1)?.abono;
      const creditoDespacho = this.utils.despachoActualFromCredito(credito, fechaFin);
      const juridico = credito.juridicos;
      const etapas = (juridico?.juridicos_etapas_judiciales ?? []).filter((e) => new Date(e.fecha ?? e.created_at) <= new Date(this.fechaFin));
      const etapaActual = this.etapaJudicialActual(juridico);
      const ultimaGestion = credito.credito_evento_cobros?.filter((e) => e.fecha && new Date(e.fecha) <= new Date(this.fechaFin) && new Date(e.fecha) >= new Date(this.fechaInicio)).at(-1);
      const convenio = credito.convenios?.filter((c) => c.fecha_convenio && new Date(c.fecha_convenio) <= new Date(this.fechaFin)).find((c) => c.estatus == "ACTIVO");
      return {
        "ID CREDITO": credito.id,
        "ID CLIENTE": this.utils.idClienteFromCredito(credito),
        "A\xD1O DE ORIGEN": this.utils.anioFromCredito(credito),
        "A\xD1O DE REESTRUCTURA": this.utils.esReestructura(credito.folio) ? this.utils.anioFromFecha(credito.fecha_reestructura ?? credito.liberado_fecha) : null,
        FOLIO: credito.folio?.toUpperCase(),
        PROGRAMA: credito.productos_financieros?.nombre.toUpperCase(),
        "NOMBRE COMERCIAL": this.utils.nombreNegocioFromCredito(credito),
        "RAZ\xD3N SOCIAL/NOMBRE PFA": this.utils.nombreClienteFromCredito(credito),
        "FECHA ASIGNACION AL DESPACHO": this.utils.fechaFormateada(creditoDespacho?.fecha_inicio) ?? "Sin asignar",
        "ASIGNACI\xD3N JUR\xCDDICO": juridico?.estado,
        EXPEDIENTE: juridico?.expediente ?? "NO REGISTRADO",
        PROCESO: etapaActual?.etapas_judiciales?.procesos_judiciales?.nombre.toUpperCase(),
        "ETAPA JUDICIAL": etapaActual?.etapas_judiciales?.nombre.toUpperCase(),
        "FECHA \xDALTIMO MOVIMIENTO ETAPA": this.utils.fechaFormateada(etapaActual?.fecha),
        "GESTI\xD3N DE COBRO": ultimaGestion ? "REALIZADA" : "NO REALIZADA",
        "RESULTADO ULTIMA GESTI\xD3N DE COBRO": ultimaGestion?.resultado,
        "FECHA ULTIMA GESTION DE COBRO": this.utils.fechaFormateada(ultimaGestion?.fecha),
        MUNICIPIO: credito.sucursales?.nombre.toUpperCase(),
        "ESTADO CONVENIO": convenio ? "REALIZADO" : "",
        "TIPO CONVENIO": convenio?.tipo_convenio,
        "FECHA CONVENIO": this.utils.fechaFormateada(convenio?.fecha_convenio),
        "FECHA INICIO CONVENIO": this.utils.fechaFormateada(convenio?.fecha_inicio),
        "FECHA FIN CONVENIO": this.utils.fechaFormateada(convenio?.fecha_conclusion),
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
        ESTATUS: estadoCuenta?.credito_status
      };
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
    return +(+value.toString()).toFixed(2);
  }
};
_TablaAvanceJudicialComponent.\u0275fac = function TablaAvanceJudicialComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaAvanceJudicialComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(GeneradorExcelService), \u0275\u0275directiveInject(TablaLocalService));
};
_TablaAvanceJudicialComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaAvanceJudicialComponent, selectors: [["app-tabla-avance-judicial"]], inputs: { creditos: "creditos", fechaInicio: "fechaInicio", fechaFin: "fechaFin", mesSeleccionado: "mesSeleccionado" }, outputs: { dataTablaChange: "dataTablaChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 5, consts: [[1, "container-fluid", "p-3"], ["size", "x-large", 3, "showChange", "show"], [3, "title", "dataSource", "fileName"], [1, "row"], [1, "col"], [1, "col-auto", "p-1"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-file-earmark-excel"], [1, "table-responsive"], [1, "table", "table-sm"], [1, "bg-primary", "text-bg-primary"], [1, "pointer"], [1, "pointer", 3, "click"], [3, "class"]], template: function TablaAvanceJudicialComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TablaAvanceJudicialComponent_Conditional_0_Template, 17, 0, "div", 0);
    \u0275\u0275elementStart(1, "app-formulario-flotante", 1);
    \u0275\u0275twoWayListener("showChange", function TablaAvanceJudicialComponent_Template_app_formulario_flotante_showChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275element(2, "app-informe-tabla-local", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.dataTabla.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance();
    \u0275\u0275property("title", "Cr\xE9ditos de " + (ctx.rowExpanded == null ? null : ctx.rowExpanded.municipio))("dataSource", ctx.dataCreditos)("fileName", `creditos_${ctx.rowExpanded == null ? null : ctx.rowExpanded.municipio}`);
  }
}, dependencies: [InformeTablaLocalComponent, FormularioFlotanteComponent], encapsulation: 2 });
var TablaAvanceJudicialComponent = _TablaAvanceJudicialComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaAvanceJudicialComponent, [{
    type: Component,
    args: [{ selector: "app-tabla-avance-judicial", imports: [InformeTablaLocalComponent, FormularioFlotanteComponent], template: `@if (dataTabla.length) {
<div class="container-fluid p-3">
  <div class="row">
    <div class="col">
      <h5>Avance y recuperaci\xF3n jur\xEDdico</h5>
    </div>
    <div class="col-auto p-1">
      <button class="btn btn-success" (click)="excelGenerador.exportToExcel(dataTabla, \`\${mesSeleccionado}-avance_judicial-recuperado\`)"><i
          class="bi bi-file-earmark-excel"></i></button>
    </div>
  </div>
  <div class="table-responsive">
    <table class="table table-sm">
      <thead>
        <tr>
          @for (column of columns; track column) {
          <th class="bg-primary text-bg-primary">{{column.replaceAll('_','
            ').toUpperCase()}}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of dataTabla; track row.municipio) {
        <tr class="pointer" (click)="abrirVentanaFlotante(row)">
          @for (key of columns; track key; let i = $index) {
          <td [class]="i==0? 'bg-primary text-bg-primary':''">
            {{row[key]}}
          </td>
          }
        </tr>
        }
      </tbody>
    </table>
  </div>
</div>
}
<app-formulario-flotante [(show)]="show" size="x-large">
  <app-informe-tabla-local
    [title]="'Cr\xE9ditos de '+rowExpanded?.municipio"
    [dataSource]="dataCreditos"
    [fileName]="\`creditos_\${rowExpanded?.municipio}\`"></app-informe-tabla-local>
</app-formulario-flotante>` }]
  }], () => [{ type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: GeneradorExcelService }, { type: TablaLocalService }], { creditos: [{
    type: Input
  }], fechaInicio: [{
    type: Input
  }], fechaFin: [{
    type: Input
  }], mesSeleccionado: [{
    type: Input
  }], dataTablaChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaAvanceJudicialComponent, { className: "TablaAvanceJudicialComponent", filePath: "src/app/main/informes/informe-tabla-juridicos-despacho/tabla-avance-judicial/tabla-avance-judicial.component.ts", lineNumber: 44 });
})();

// src/app/main/informes/informe-tabla-juridicos-despacho/tabla-juridico-utils.service.ts
var _TablaJuridicoService = class _TablaJuridicoService {
  /**
   * Filtra y devuelve una lista única de nombres de municipios (en mayúsculas) de los créditos proporcionados.
   * @param creditos - Array de objetos Credito de los cuales extraer los municipios.
   * @returns Un array de strings, donde cada string es el nombre de un municipio único en mayúsculas.
   */
  obtenerMunicipiosUnicos(creditos) {
    const nombresMunicipios = creditos.map((credito) => credito.sucursales?.nombre?.toUpperCase());
    const nombresUnicos = Array.from(new Set(nombresMunicipios));
    return nombresUnicos.filter((nombre) => nombre !== void 0);
  }
  /**
   * Filtra créditos por municipio y estado jurídico.
   * @param creditos - Array de objetos Credito a filtrar.
   * @param municipio - El nombre del municipio por el cual filtrar.
   * @param estado - El estado jurídico por el cual filtrar.
   * @returns Un array de objetos Credito que coinciden con el municipio y estado jurídico especificados.
   */
  filtrarPorEstadoJuridico(creditos, municipio, estado) {
    return creditos.filter((c) => c.sucursales?.nombre?.toUpperCase() == municipio && c.juridicos?.estado == estado);
  }
  /**
   * Filtra créditos que tienen convenios dentro del rango de fechas especificado.
   * @param creditos - Array de créditos a filtrar.
   * @param fechaInicio - Fecha inicial del rango (formato string parseable por Date).
   * @param fechaFin - Fecha final del rango (formato string parseable por Date).
   * @returns Array de créditos que contienen convenios en el rango de fechas.
   */
  filtrarCreditosConConveniosPorFecha(creditos, fechaInicio, fechaFin) {
    const rango = this.crearRangoFechas(fechaInicio, fechaFin);
    return creditos.filter((credito) => credito.convenios?.some((c) => this.estaEnRango(new Date(c.fecha_convenio ?? c.created_at), rango.inicio, rango.fin)));
  }
  /**
   * Crea un objeto de rango de fechas a partir de dos cadenas de fecha.
   * @param fechaInicio - La fecha de inicio del rango.
   * @param fechaFin - La fecha de fin del rango.
   * @returns Un objeto que contiene las fechas de inicio y fin como objetos Date.
   */
  crearRangoFechas(fechaInicio, fechaFin) {
    return {
      inicio: new Date(fechaInicio),
      fin: new Date(fechaFin)
    };
  }
  /**
   * Verifica si una fecha dada está dentro de un rango de fechas.
   * @param fecha - La fecha a verificar.
   * @param inicio - La fecha de inicio del rango.
   * @param fin - La fecha de fin del rango.
   * @returns `true` si la fecha está dentro del rango, `false` en caso contrario.
   */
  estaEnRango(fecha, inicio, fin) {
    return fecha >= inicio && fecha <= fin;
  }
  /**
   * Obtiene la fecha de asignación de un crédito, basándose en el último despacho.
   * @param credito - El crédito del cual obtener la fecha de asignación.
   * @returns La fecha de asignación como objeto Date, o `undefined` si no se encuentra.
   * @remarks Se asume que `creditos_despachos` está ordenado de más antiguo a más reciente, por lo que se toma el último elemento.
   */
  obtenerFechaAsignacion(credito) {
    const fechaAsignacionStr = credito.creditos_despachos?.at(-1)?.fecha_inicio?.substring(0, 10);
    return fechaAsignacionStr ? new Date(fechaAsignacionStr) : void 0;
  }
  /**
   * Filtra los abonos de un crédito que están dentro de un rango de fechas y son posteriores a una fecha de asignación.
   * @param credito - El crédito cuyos abonos se van a filtrar.
   * @param fechaAsignacion - La fecha de asignación del crédito.
   * @param rango - El rango de fechas (inicio y fin) para filtrar los abonos.
   * @returns Un array de abonos que cumplen con los criterios.
   */
  obtenerAbonosEnRango(credito, fechaAsignacion, rango) {
    return credito.abonos?.filter((a) => {
      const fechaAbono = new Date(a.fecha);
      const esPosteriorAsignacion = fechaAsignacion ? fechaAbono >= fechaAsignacion : true;
      return esPosteriorAsignacion && this.estaEnRango(fechaAbono, rango.inicio, rango.fin);
    });
  }
  /**
   * Suma los montos de un array de abonos.
   * @param abonos - Array de abonos.
   * @returns La suma total de los montos de los abonos, o 0 si no hay abonos.
   */
  sumarMontos(abonos) {
    return abonos?.reduce((acc, a) => acc + +a.monto, 0) ?? 0;
  }
  /**
   * Filtra créditos que tienen al menos un abono dentro del rango de fechas especificado.
   * @param creditos - Array de objetos Credito a filtrar.
   * @param fecha_inicio - La fecha de inicio del rango (string parseable a Date).
   * @param fecha_fin - La fecha de fin del rango (string parseable a Date).
   * @returns Un array de objetos Credito que cumplen con la condición del filtro.
   */
  filtrarCreditosConPagos(creditos, fecha_inicio, fecha_fin) {
    const rango = this.crearRangoFechas(fecha_inicio, fecha_fin);
    return creditos.filter((c) => c.abonos?.some((a) => this.estaEnRango(new Date(a.fecha), rango.inicio, rango.fin)));
  }
  /**
   * Calcula el monto total recuperado (sumatoria de abonos) para un conjunto de créditos dentro de un rango de fechas específico.
   * @param creditos - Array de objetos Credito para los cuales calcular el monto recuperado.
   * @param fecha_inicio - La fecha de inicio del rango (string parseable a Date).
   * @param fecha_fin - La fecha de fin del rango (string parseable a Date).
   * @returns El monto total recuperado como un número.
   */
  calcularMontoRecuperado(creditos, fecha_inicio, fecha_fin) {
    const rango = this.crearRangoFechas(fecha_inicio, fecha_fin);
    return creditos.reduce((acc, credito) => {
      const abonosEnRango = credito.abonos?.filter((a) => this.estaEnRango(new Date(a.fecha), rango.inicio, rango.fin));
      return acc + this.sumarMontos(abonosEnRango);
    }, 0);
  }
  /**
   * Calcula el número total de gestiones de cobro para un conjunto de créditos dentro de un rango de fechas específico.
   * @param creditos - Array de objetos Credito para los cuales calcular las gestiones de cobro.
   * @param fecha_inicio - La fecha de inicio del rango (string parseable a Date).
   * @param fecha_fin - La fecha de fin del rango (string parseable a Date).
   * @returns El número total de gestiones de cobro como un número.
   */
  calcularGestionesCobro(creditos, fecha_inicio, fecha_fin) {
    const rango = this.crearRangoFechas(fecha_inicio, fecha_fin);
    return creditos.reduce((acc, credito) => {
      const gestiones = credito.credito_evento_cobros?.filter((g) => g.fecha && this.estaEnRango(new Date(g.fecha), rango.inicio, rango.fin));
      return acc + (gestiones?.length ?? 0);
    }, 0);
  }
  /**
   * Calcula el monto total recuperado desde la fecha de asignación del crédito.
   * Considera todos los abonos realizados después de la fecha de asignación hasta la actualidad.
   * @param creditos - Array de créditos para calcular la recuperación.
   * @returns Suma total de abonos realizados después de la asignación.
   * @remarks Se usa la fecha de asignación del último `credito_despacho` como fecha de asignación, asumiendo que vienen ordenados de más viejo a más reciente.
   */
  calcularRecuperadoDesdeAsignacion(creditos) {
    return creditos.reduce((total, credito) => {
      const fechaAsignacion = this.obtenerFechaAsignacion(credito);
      const abonosPosterioresAsignacion = credito.abonos?.filter((a) => fechaAsignacion ? new Date(a.fecha) >= fechaAsignacion : true);
      return total + this.sumarMontos(abonosPosterioresAsignacion);
    }, 0);
  }
  /**
   * Calcula el monto recuperado en un mes específico desde la asignación del crédito.
   * @param creditos - Créditos a evaluar.
   * @param fechaInicio - Inicio del mes a calcular (formato string parseable por Date).
   * @param fechaFin - Fin del mes a calcular (formato string parseable por Date).
   * @returns Suma total de abonos en el mes, posteriores a la asignación.
   * @remarks Se usa la fecha de asignación del último `credito_despacho` como fecha de asignación, asumiendo que vienen ordenados de más viejo a más reciente.
   */
  montoRecuperadoMes(creditos, fechaInicio, fechaFin) {
    const rango = this.crearRangoFechas(fechaInicio, fechaFin);
    return creditos.reduce((total, credito) => {
      const fechaAsignacion = this.obtenerFechaAsignacion(credito);
      const abonosDelMes = this.obtenerAbonosEnRango(credito, fechaAsignacion, rango);
      return total + this.sumarMontos(abonosDelMes);
    }, 0);
  }
};
_TablaJuridicoService.\u0275fac = function TablaJuridicoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaJuridicoService)();
};
_TablaJuridicoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TablaJuridicoService, factory: _TablaJuridicoService.\u0275fac, providedIn: "root" });
var TablaJuridicoService = _TablaJuridicoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaJuridicoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/main/informes/informe-tabla-juridicos-despacho/tabla-recuperacion-judicial/tabla-recuperacion-judicial.component.ts
function TablaRecuperacionJudicialComponent_Conditional_0_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(column_r3.replaceAll("_", " ").toUpperCase());
  }
}
function TablaRecuperacionJudicialComponent_Conditional_0_For_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const \u0275$index_34_r7 = ctx.$index;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275$index_34_r7 == 0 ? "bg-primary text-bg-primary" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5[key_r6], " ");
  }
}
function TablaRecuperacionJudicialComponent_Conditional_0_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 10);
    \u0275\u0275listener("click", function TablaRecuperacionJudicialComponent_Conditional_0_For_16_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirVentanaFlotante(row_r5));
    });
    \u0275\u0275repeaterCreate(1, TablaRecuperacionJudicialComponent_Conditional_0_For_16_For_2_Template, 2, 3, "td", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columns);
  }
}
function TablaRecuperacionJudicialComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
    \u0275\u0275text(4, "Recuperaci\xF3n Judicial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function TablaRecuperacionJudicialComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.excelGenerador.exportToExcel(ctx_r1.dataTablaJudicial, `${ctx_r1.mesSeleccionado}-avance_judicial-recuperado`));
    });
    \u0275\u0275element(7, "i", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "table", 7)(10, "thead")(11, "tr");
    \u0275\u0275repeaterCreate(12, TablaRecuperacionJudicialComponent_Conditional_0_For_13_Template, 2, 1, "th", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, TablaRecuperacionJudicialComponent_Conditional_0_For_16_Template, 3, 0, "tr", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.columns);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dataTablaJudicial);
  }
}
function TablaRecuperacionJudicialComponent_Conditional_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r9.replaceAll("_", " ").toUpperCase());
  }
}
function TablaRecuperacionJudicialComponent_Conditional_1_For_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r12 = ctx.$implicit;
    const \u0275$index_71_r13 = ctx.$index;
    const row_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275$index_71_r13 == 0 ? "bg-primary text-bg-primary" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r11[key_r12], " ");
  }
}
function TablaRecuperacionJudicialComponent_Conditional_1_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 10);
    \u0275\u0275listener("click", function TablaRecuperacionJudicialComponent_Conditional_1_For_16_Template_tr_click_0_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.abrirVentanaFlotante(row_r11));
    });
    \u0275\u0275repeaterCreate(1, TablaRecuperacionJudicialComponent_Conditional_1_For_16_For_2_Template, 2, 3, "td", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columnsExtrajudicial);
  }
}
function TablaRecuperacionJudicialComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
    \u0275\u0275text(4, "Recuperaci\xF3n Extrajudicial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function TablaRecuperacionJudicialComponent_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.excelGenerador.exportToExcel(ctx_r1.dataTablaExtraJudicial, `${ctx_r1.mesSeleccionado}-avance_extrajudicial-recuperado`));
    });
    \u0275\u0275element(7, "i", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "table", 7)(10, "thead")(11, "tr");
    \u0275\u0275repeaterCreate(12, TablaRecuperacionJudicialComponent_Conditional_1_For_13_Template, 2, 1, "th", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, TablaRecuperacionJudicialComponent_Conditional_1_For_16_Template, 3, 0, "tr", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "app-formulario-flotante", 12);
    \u0275\u0275twoWayListener("showChange", function TablaRecuperacionJudicialComponent_Conditional_1_Template_app_formulario_flotante_showChange_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.show, $event) || (ctx_r1.show = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(18, "app-informe-tabla-local", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r1.columnsExtrajudicial);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.dataTablaExtraJudicial);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx_r1.show);
    \u0275\u0275advance();
    \u0275\u0275property("title", "Cr\xE9ditos de " + (ctx_r1.rowExpanded == null ? null : ctx_r1.rowExpanded.municipio))("dataSource", ctx_r1.dataCreditos)("fileName", `creditos_${ctx_r1.rowExpanded == null ? null : ctx_r1.rowExpanded.municipio}`);
  }
}
var _TablaRecuperacionJudicialComponent = class _TablaRecuperacionJudicialComponent {
  constructor(utils, utilsEstadoCuenta, excelGenerador, tablaLocal, utilsTJ) {
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.excelGenerador = excelGenerador;
    this.tablaLocal = tablaLocal;
    this.utilsTJ = utilsTJ;
    this.creditos = [];
    this.fechaInicio = "";
    this.fechaFin = "";
    this.mesSeleccionado = "";
    this.dataTablaJudicialChange = new EventEmitter();
    this.dataTablaExtraJudicialChange = new EventEmitter();
    this.columns = [];
    this.dataTablaJudicial = [];
    this.columnsExtrajudicial = [];
    this.dataTablaExtraJudicial = [];
    this.show = false;
    this.dataCreditos = [];
  }
  ngOnChanges(changes) {
    if (changes["creditos"]) {
      this.setDataTablaJudicial();
      this.setDataTablaExtrajudicial();
    }
  }
  setDataTablaJudicial() {
    if (!this.creditos.length)
      return;
    const municipios = this.utilsTJ.obtenerMunicipiosUnicos(this.creditos);
    this.dataTablaJudicial = municipios.map((municipio) => {
      const creditos = this.utilsTJ.filtrarPorEstadoJuridico(this.creditos, municipio, "JUDICIAL");
      creditos.forEach((c) => c.estado_cuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(c, false, this.fechaFin));
      const convenios = this.utilsTJ.filtrarCreditosConConveniosPorFecha(creditos, this.fechaInicio, this.fechaFin).length;
      const creditos_con_pagos = this.utilsTJ.filtrarCreditosConPagos(creditos, this.fechaInicio, this.fechaFin).length;
      const monto_recuperado = this.utilsTJ.calcularMontoRecuperado(creditos, this.fechaInicio, this.fechaFin);
      const monto_recuperado_desde_asignacion = this.utilsTJ.calcularRecuperadoDesdeAsignacion(creditos);
      const monto_recuperado_mes = this.utilsTJ.montoRecuperadoMes(creditos, this.fechaInicio, this.fechaFin);
      const gestiones_de_cobro = this.utilsTJ.calcularGestionesCobro(creditos, this.fechaInicio, this.fechaFin);
      const monto_total = creditos.reduce((acc, c) => acc + (c.estado_cuenta?.monto_total_mas_intereses ?? 0), 0);
      const monto_por_recuperar = creditos.reduce((acc, c) => acc + (c.estado_cuenta?.total_a_liquidar ?? 0), 0);
      const porc_recuperacion = monto_total > 0 ? monto_recuperado / monto_total * 100 : 0;
      const porc_por_recuperar = monto_total > 0 ? 100 - monto_recuperado / monto_total * 100 : 0;
      return {
        municipio: municipio.toUpperCase(),
        convenios,
        creditos_con_pagos,
        gestiones_de_cobro,
        monto_recuperado: "$" + monto_recuperado.toLocaleString(),
        porc_recuperacion: porc_recuperacion.toFixed(2) + "%",
        monto_por_recuperar: "$" + monto_por_recuperar.toLocaleString(),
        porc_por_recuperar: porc_por_recuperar.toFixed(2) + "%",
        recuperado_total_o_acumulado: "$" + monto_recuperado_mes.toLocaleString(),
        recuperado_desde_la_fecha_de_asignacion_despacho: "$" + monto_recuperado_desde_asignacion.toLocaleString(),
        creditos
      };
    });
    this.dataTablaJudicial.push({
      municipio: "Totales",
      convenios: this.tablaLocal.totales(this.dataTablaJudicial, "convenios"),
      creditos_con_pagos: this.tablaLocal.totales(this.dataTablaJudicial, "creditos_con_pagos"),
      gestiones_de_cobro: this.tablaLocal.totales(this.dataTablaJudicial, "gestiones_de_cobro"),
      monto_recuperado: "$" + this.tablaLocal.totales(this.dataTablaJudicial, "monto_recuperado").toLocaleString(),
      porc_recuperacion: (this.tablaLocal.totales(this.dataTablaJudicial, "porc_recuperacion") / this.dataTablaJudicial.length).toFixed(2) + "%",
      monto_por_recuperar: "$" + this.tablaLocal.totales(this.dataTablaJudicial, "monto_por_recuperar").toLocaleString(),
      porc_por_recuperar: (this.tablaLocal.totales(this.dataTablaJudicial, "porc_por_recuperar") / this.dataTablaJudicial.length).toFixed(2) + "%",
      recuperado_total_o_acumulado: "$" + this.tablaLocal.totales(this.dataTablaJudicial, "recuperado_total_o_acumulado").toLocaleString(),
      recuperado_desde_la_fecha_de_asignacion_despacho: "$" + this.tablaLocal.totales(this.dataTablaJudicial, "recuperado_desde_la_fecha_de_asignacion_despacho").toLocaleString(),
      creditos: this.creditos
    });
    this.columns = (Object.keys(this.dataTablaJudicial[0] ?? {}) ?? []).filter((k) => k != "creditos");
    this.dataTablaJudicialChange.emit(this.dataTablaJudicial);
  }
  setDataTablaExtrajudicial() {
    if (!this.creditos.length)
      return;
    const municipios = this.utilsTJ.obtenerMunicipiosUnicos(this.creditos);
    this.dataTablaExtraJudicial = municipios.map((municipio) => {
      const creditos = this.utilsTJ.filtrarPorEstadoJuridico(this.creditos, municipio, "EXTRAJUDICIAL");
      creditos.forEach((c) => c.estado_cuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(c));
      const convenios = this.utilsTJ.filtrarCreditosConConveniosPorFecha(creditos, this.fechaInicio, this.fechaFin).length;
      const creditos_con_pagos = this.utilsTJ.filtrarCreditosConPagos(creditos, this.fechaInicio, this.fechaFin).length;
      const monto_recuperado = this.utilsTJ.calcularMontoRecuperado(creditos, this.fechaInicio, this.fechaFin);
      const gestiones_de_cobro = this.utilsTJ.calcularGestionesCobro(creditos, this.fechaInicio, this.fechaFin);
      const monto_total = creditos.reduce((acc, c) => acc + (c.estado_cuenta?.monto_total_mas_intereses ?? 0), 0);
      const monto_por_recuperar = creditos.reduce((acc, c) => acc + (c.estado_cuenta?.total_a_liquidar ?? 0), 0);
      const porc_recuperacion = monto_total > 0 ? monto_recuperado / monto_total * 100 : 0;
      const porc_por_recuperar = monto_total > 0 ? 100 - monto_recuperado / monto_total * 100 : 0;
      const monto_recuperado_desde_asignacion = this.utilsTJ.calcularRecuperadoDesdeAsignacion(creditos);
      const monto_recuperado_mes = this.utilsTJ.montoRecuperadoMes(creditos, this.fechaInicio, this.fechaFin);
      return {
        municipio: municipio.toUpperCase(),
        convenios,
        creditos_con_pagos,
        gestiones_de_cobro,
        monto_recuperado: "$" + monto_recuperado.toLocaleString(),
        porc_recuperacion: porc_recuperacion.toFixed(2) + "%",
        monto_por_recuperar: "$" + monto_por_recuperar.toLocaleString(),
        porc_por_recuperar: porc_por_recuperar.toFixed(2) + "%",
        recuperado_total_o_acumulado: "$" + monto_recuperado_mes.toLocaleString(),
        recuperado_desde_la_fecha_de_asignacion_despacho: "$" + monto_recuperado_desde_asignacion.toLocaleString(),
        creditos
      };
    });
    this.dataTablaExtraJudicial.push({
      municipio: "Totales",
      convenios: this.tablaLocal.totales(this.dataTablaExtraJudicial, "convenios"),
      creditos_con_pagos: this.tablaLocal.totales(this.dataTablaExtraJudicial, "creditos_con_pagos"),
      gestiones_de_cobro: this.tablaLocal.totales(this.dataTablaExtraJudicial, "gestiones_de_cobro"),
      monto_recuperado: "$" + this.tablaLocal.totales(this.dataTablaExtraJudicial, "monto_recuperado").toLocaleString(),
      porc_recuperacion: (this.tablaLocal.totales(this.dataTablaExtraJudicial, "porc_recuperacion") / this.dataTablaExtraJudicial.length).toFixed(2) + "%",
      monto_por_recuperar: "$" + this.tablaLocal.totales(this.dataTablaExtraJudicial, "monto_por_recuperar").toLocaleString(),
      porc_por_recuperar: (this.tablaLocal.totales(this.dataTablaExtraJudicial, "porc_por_recuperar") / this.dataTablaExtraJudicial.length).toFixed(2) + "%",
      recuperado_total_o_acumulado: "$" + this.tablaLocal.totales(this.dataTablaExtraJudicial, "recuperado_total_o_acumulado").toLocaleString(),
      recuperado_desde_la_fecha_de_asignacion_despacho: "$" + this.tablaLocal.totales(this.dataTablaExtraJudicial, "recuperado_desde_la_fecha_de_asignacion_despacho").toLocaleString(),
      creditos: this.creditos
    });
    this.columnsExtrajudicial = (Object.keys(this.dataTablaExtraJudicial[0] ?? {}) ?? []).filter((k) => k != "creditos");
    this.dataTablaExtraJudicialChange.emit(this.dataTablaExtraJudicial);
  }
  abrirVentanaFlotante(row) {
    if (row.municipio == "Totales")
      return;
    this.rowExpanded = row;
    if (row.porc_recuperacion !== void 0) {
      this.dataCreditos = this.creditosFromMunicipio(row.municipio, "JUDICIAL");
    } else {
      this.dataCreditos = this.creditosFromMunicipio(row.municipio, "EXTRAJUDICIAL");
    }
    this.show = true;
  }
  creditosFromMunicipio(municipio, estado) {
    if (!municipio)
      return [];
    const fechaInicio = new Date(this.fechaInicio);
    const fechaFin = new Date(this.fechaFin);
    const creditos = this.creditos.filter((c) => c.sucursales?.nombre.toUpperCase() == municipio && c.juridicos && c.juridicos.estado == estado && c.credito_evento_cobros?.filter((g) => g.fecha && new Date(g.fecha) >= fechaInicio && new Date(g.fecha) <= fechaFin).length);
    console.log(creditos);
    return creditos.map((credito) => {
      const pf = credito.datos_persona_fisica;
      const pm = credito.datos_personas_morales;
      const fechaFin2 = new Date(this.fechaFin);
      const estadoCuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(credito, false, this.fechaFin);
      const ultimoAbono = estadoCuenta?.abonos_distribuidos?.at(-1)?.abono;
      const creditoDespacho = this.utils.despachoActualFromCredito(credito, fechaFin2);
      const juridico = credito.juridicos;
      const etapas = (juridico?.juridicos_etapas_judiciales ?? []).filter((e) => new Date(e.fecha ?? e.created_at) <= new Date(this.fechaFin));
      const etapaActual = this.etapaJudicialActual(juridico);
      const gestiones = credito.credito_evento_cobros?.filter((e) => e.fecha && (new Date(e.fecha) <= new Date(this.fechaFin) && new Date(e.fecha) >= new Date(this.fechaInicio)));
      const ultimaGestion = gestiones?.at(-1);
      const convenio = credito.convenios?.filter((c) => c.fecha_convenio && new Date(c.fecha_convenio) <= new Date(this.fechaFin)).find((c) => c.estatus == "ACTIVO");
      return {
        "ID CREDITO": credito.id,
        "ID CLIENTE": this.utils.idClienteFromCredito(credito),
        "A\xD1O DE ORIGEN": this.utils.anioFromCredito(credito),
        "A\xD1O DE REESTRUCTURA": this.utils.esReestructura(credito.folio) ? this.utils.anioFromFecha(credito.fecha_reestructura ?? credito.liberado_fecha) : null,
        "FOLIO": credito.folio?.toUpperCase(),
        "PROGRAMA": credito.productos_financieros?.nombre.toUpperCase(),
        "NOMBRE COMERCIAL": this.utils.nombreNegocioFromCredito(credito),
        "RAZ\xD3N SOCIAL/NOMBRE PFA": this.utils.nombreClienteFromCredito(credito),
        "FECHA ASIGNACION AL DESPACHO": this.utils.fechaFormateada(creditoDespacho?.fecha_inicio) ?? "Sin asignar",
        "ASIGNACI\xD3N JUR\xCDDICO": juridico?.estado,
        "EXPEDIENTE": juridico?.expediente ?? "NO REGISTRADO",
        "PROCESO": etapaActual?.etapas_judiciales?.procesos_judiciales?.nombre.toUpperCase(),
        "ETAPA JUDICIAL": etapaActual?.etapas_judiciales?.nombre.toUpperCase(),
        "FECHA \xDALTIMO MOVIMIENTO ETAPA": this.utils.fechaFormateada(etapaActual?.fecha),
        "TOTAL GESTIONES DE COBRO": gestiones?.length ?? 0,
        "GESTI\xD3N DE COBRO": ultimaGestion ? "REALIZADA" : "NO REALIZADA",
        "RESULTADO ULTIMA GESTI\xD3N DE COBRO": ultimaGestion?.resultado,
        "FECHA ULTIMA GESTION DE COBRO": this.utils.fechaFormateada(ultimaGestion?.fecha),
        "MUNICIPIO": credito.sucursales?.nombre.toUpperCase(),
        "ESTADO CONVENIO": convenio ? "REALIZADO" : "",
        "TIPO CONVENIO": convenio?.tipo_convenio,
        "FECHA CONVENIO": this.utils.fechaFormateada(convenio?.fecha_convenio),
        "FECHA INICIO CONVENIO": this.utils.fechaFormateada(convenio?.fecha_inicio),
        "FECHA FIN CONVENIO": this.utils.fechaFormateada(convenio?.fecha_conclusion),
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
  }
  etapaJudicialActual(juridico) {
    const etapasOrdenadas = juridico?.juridicos_etapas_judiciales?.filter((e) => new Date(e.fecha ?? e.created_at) <= new Date(this.fechaFin)).sort((a, b) => new Date(b.updated_at ?? "").getTime() - new Date(a.updated_at ?? "").getTime());
    const ultimaEtapaActiva = etapasOrdenadas?.[0];
    return ultimaEtapaActiva;
  }
  parseToNumber(value) {
    return +(+value.toString()).toFixed(2);
  }
};
_TablaRecuperacionJudicialComponent.\u0275fac = function TablaRecuperacionJudicialComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaRecuperacionJudicialComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(GeneradorExcelService), \u0275\u0275directiveInject(TablaLocalService), \u0275\u0275directiveInject(TablaJuridicoService));
};
_TablaRecuperacionJudicialComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TablaRecuperacionJudicialComponent, selectors: [["app-tabla-recuperacion-judicial"]], inputs: { creditos: "creditos", fechaInicio: "fechaInicio", fechaFin: "fechaFin", mesSeleccionado: "mesSeleccionado" }, outputs: { dataTablaJudicialChange: "dataTablaJudicialChange", dataTablaExtraJudicialChange: "dataTablaExtraJudicialChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "container-fluid", "p-3"], [1, "row"], [1, "col"], [1, "col-auto", "p-1"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-file-earmark-excel"], [1, "table-responsive"], [1, "table", "table-sm"], [1, "bg-primary", "text-bg-primary"], [1, "pointer"], [1, "pointer", 3, "click"], [3, "class"], ["size", "x-large", 3, "showChange", "show"], [3, "title", "dataSource", "fileName"]], template: function TablaRecuperacionJudicialComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, TablaRecuperacionJudicialComponent_Conditional_0_Template, 17, 0, "div", 0);
    \u0275\u0275conditionalCreate(1, TablaRecuperacionJudicialComponent_Conditional_1_Template, 19, 4);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.dataTablaJudicial.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dataTablaExtraJudicial.length ? 1 : -1);
  }
}, dependencies: [FormularioFlotanteComponent, InformeTablaLocalComponent], encapsulation: 2 });
var TablaRecuperacionJudicialComponent = _TablaRecuperacionJudicialComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaRecuperacionJudicialComponent, [{
    type: Component,
    args: [{ selector: "app-tabla-recuperacion-judicial", imports: [FormularioFlotanteComponent, InformeTablaLocalComponent], template: `@if (dataTablaJudicial.length) {
  <div class="container-fluid p-3">
    <div class="row">
      <div class="col">
        <h5>Recuperaci\xF3n Judicial</h5>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-success"
          (click)="excelGenerador.exportToExcel(dataTablaJudicial, \`\${mesSeleccionado}-avance_judicial-recuperado\`)"><i
        class="bi bi-file-earmark-excel"></i></button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr>
            @for (column of columns; track column) {
              <th class="bg-primary text-bg-primary">{{column.replaceAll('_','
              ').toUpperCase()}}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of dataTablaJudicial; track row) {
            <tr class="pointer" (click)="abrirVentanaFlotante(row)">
              @for (key of columns; track key; let i = $index) {
                <td [class]="i==0? 'bg-primary text-bg-primary':''">
                  {{row[key]}}
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
}
@if (dataTablaExtraJudicial.length) {
  <div class="container-fluid p-3">
    <div class="row">
      <div class="col">
        <h5>Recuperaci\xF3n Extrajudicial</h5>
      </div>
      <div class="col-auto p-1">
        <button class="btn btn-success"
          (click)="excelGenerador.exportToExcel(dataTablaExtraJudicial, \`\${mesSeleccionado}-avance_extrajudicial-recuperado\`)"><i
        class="bi bi-file-earmark-excel"></i></button>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr>
            @for (column of columnsExtrajudicial; track column) {
              <th class="bg-primary text-bg-primary">
                {{column.replaceAll('_','
              ').toUpperCase()}}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of dataTablaExtraJudicial; track row) {
            <tr class="pointer" (click)="abrirVentanaFlotante(row)">
              @for (key of columnsExtrajudicial; track key; let i = $index) {
                <td
                  [class]="i==0? 'bg-primary text-bg-primary':''">
                  {{row[key]}}
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  </div>
  <app-formulario-flotante [(show)]="show" size="x-large">
  <app-informe-tabla-local
    [title]="'Cr\xE9ditos de '+rowExpanded?.municipio"
    [dataSource]="dataCreditos"
    [fileName]="\`creditos_\${rowExpanded?.municipio}\`"></app-informe-tabla-local>
</app-formulario-flotante>
}` }]
  }], () => [{ type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: GeneradorExcelService }, { type: TablaLocalService }, { type: TablaJuridicoService }], { creditos: [{
    type: Input
  }], fechaInicio: [{
    type: Input
  }], fechaFin: [{
    type: Input
  }], mesSeleccionado: [{
    type: Input
  }], dataTablaJudicialChange: [{
    type: Output
  }], dataTablaExtraJudicialChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TablaRecuperacionJudicialComponent, { className: "TablaRecuperacionJudicialComponent", filePath: "src/app/main/informes/informe-tabla-juridicos-despacho/tabla-recuperacion-judicial/tabla-recuperacion-judicial.component.ts", lineNumber: 46 });
})();

// src/app/shared/selector-fechas-por-mes/selector-fechas-por-mes.component.ts
function SelectorFechasPorMesComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function SelectorFechasPorMesComponent_For_6_Template_button_click_1_listener() {
      const mes_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMesSeleccionado(mes_r2.numero));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mes_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.mesSeleccionado == mes_r2.numero ? "btn-secondary shadow" : "btn-light border");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mes_r2.nombre, " ");
  }
}
var _SelectorFechasPorMesComponent = class _SelectorFechasPorMesComponent {
  constructor() {
    this.meses = [
      { nombre: "Enero", numero: 1 },
      { nombre: "Febrero", numero: 2 },
      { nombre: "Marzo", numero: 3 },
      { nombre: "Abril", numero: 4 },
      { nombre: "Mayo", numero: 5 },
      { nombre: "Junio", numero: 6 },
      { nombre: "Julio", numero: 7 },
      { nombre: "Agosto", numero: 8 },
      { nombre: "Septiembre", numero: 9 },
      { nombre: "Octubre", numero: 10 },
      { nombre: "Noviembre", numero: 11 },
      { nombre: "Diciembre", numero: 12 }
    ];
    this.inicio = "";
    this.inicioChange = new EventEmitter();
    this.fin = "";
    this.finChange = new EventEmitter();
    this.monthNameChange = new EventEmitter();
    this.mesSeleccionado = null;
  }
  // Getter para obtener el año actual
  get year() {
    return (/* @__PURE__ */ new Date()).getFullYear();
  }
  // Filtrar meses hasta el actual
  get mesesFiltrados() {
    const mesActual = (/* @__PURE__ */ new Date()).getMonth() + 1;
    return this.meses.filter((m) => m.numero <= mesActual);
  }
  // Se ejecuta al cambiar los valores de entrada
  ngOnChanges(changes) {
    if (changes["inicio"] || changes["fin"]) {
      this.actualizarMesSeleccionado();
    }
  }
  // Actualiza el select si hay fechas recibidas
  actualizarMesSeleccionado() {
    if (this.inicio && this.fin) {
      const fechaInicio = /* @__PURE__ */ new Date(this.inicio.substring(0, 10) + "T17:00:00Z");
      const mes = fechaInicio.getMonth() + 1;
      this.mesSeleccionado = mes;
      const month = this.meses.find((m) => m.numero === mes);
      if (month) {
        this.monthNameChange.emit(month.nombre);
      }
    }
  }
  // Cuando el usuario selecciona un mes
  onMesSeleccionado(mes) {
    const fechaInicio = new Date(this.year, mes - 1, 1);
    const ultimoDia = new Date(this.year, mes, 0);
    console.log(fechaInicio);
    this.inicio = this.formatoFecha(fechaInicio);
    this.fin = this.formatoFecha(ultimoDia);
    this.mesSeleccionado = mes;
    this.inicioChange.emit(this.inicio);
    this.finChange.emit(this.fin);
    const month = this.meses.find((m) => m.numero === mes);
    if (month) {
      this.monthNameChange.emit(month.nombre);
    }
  }
  getMonthNumberByName(monthName) {
    const month = this.meses.find((m) => m.nombre.toLowerCase() === monthName.toLowerCase());
    return month ? month.numero : null;
  }
  // Formato YYYY-MM-DD
  formatoFecha(fecha) {
    const year = fecha.getFullYear();
    const mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    const dia = ("0" + fecha.getDate()).slice(-2);
    return `${year}-${mes}-${dia}`;
  }
};
_SelectorFechasPorMesComponent.\u0275fac = function SelectorFechasPorMesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectorFechasPorMesComponent)();
};
_SelectorFechasPorMesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectorFechasPorMesComponent, selectors: [["app-selector-fechas-por-mes"]], inputs: { inicio: "inicio", fin: "fin" }, outputs: { inicioChange: "inicioChange", finChange: "finChange", monthNameChange: "monthNameChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 7, vars: 0, consts: [[1, "container-fluid", "p-1"], [1, "mb-3", "text-secondary"], [1, "bi", "bi-calendar2-month", "me-2"], [1, "row", "justify-content-center"], [1, "col-auto", "p-2"], [1, "btn", 3, "click"]], template: function SelectorFechasPorMesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275element(2, "i", 2);
    \u0275\u0275text(3, "Selecciona un mes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275repeaterCreate(5, SelectorFechasPorMesComponent_For_6_Template, 3, 3, "div", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.mesesFiltrados);
  }
}, dependencies: [FormsModule], encapsulation: 2 });
var SelectorFechasPorMesComponent = _SelectorFechasPorMesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectorFechasPorMesComponent, [{
    type: Component,
    args: [{ selector: "app-selector-fechas-por-mes", imports: [
      FormsModule
    ], template: `<div class="container-fluid p-1">
    <p class="mb-3 text-secondary">
        <i class="bi bi-calendar2-month me-2"></i>Selecciona un mes
    </p>

    <div class="row justify-content-center">
        @for (mes of mesesFiltrados; track $index) {
        <div class="col-auto p-2">
            <button class="btn" [class]="mesSeleccionado==mes.numero ? 'btn-secondary shadow' :'btn-light border'"
                (click)="onMesSeleccionado(mes.numero)">
                {{mes.nombre}}
            </button>
        </div>
        }
    </div>
</div>` }]
  }], null, { inicio: [{
    type: Input
  }], inicioChange: [{
    type: Output
  }], fin: [{
    type: Input
  }], finChange: [{
    type: Output
  }], monthNameChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectorFechasPorMesComponent, { className: "SelectorFechasPorMesComponent", filePath: "src/app/shared/selector-fechas-por-mes/selector-fechas-por-mes.component.ts", lineNumber: 12 });
})();

// src/app/main/informes/informe-tabla-juridicos-despacho/gestiones-judiciales/gestiones-judiciales.component.ts
var _GestionesJudicialesComponent = class _GestionesJudicialesComponent {
  constructor(excelGenerador, utils) {
    this.excelGenerador = excelGenerador;
    this.utils = utils;
    this.creditos = [];
    this.fechaInicio = "";
    this.fechaFin = "";
    this.estado = "JUDICIAL";
    this.dataTabla = [];
    this.columns = [];
  }
  ngOnChanges(changes) {
    if (changes["creditos"] && this.creditos.length) {
      console.log(this.creditos);
      this.setData();
    }
  }
  setData() {
    const gestiones = [];
    const inicio = /* @__PURE__ */ new Date(this.fechaInicio.substring(0, 10) + "T17:00:00Z");
    const fin = /* @__PURE__ */ new Date(this.fechaFin.substring(0, 10) + "T17:00:00Z");
    this.creditos.filter((c) => c.juridicos && c.juridicos?.estado == this.estado).forEach((c) => gestiones.push(...c.credito_evento_cobros ?? []));
    this.dataTabla = gestiones.filter((g) => {
      const fechaGestion = /* @__PURE__ */ new Date(g.fecha?.substring(0, 10) + "T17:00:00Z");
      return g.fecha && (fechaGestion <= fin && fechaGestion >= inicio);
    }).map((g) => ({
      id: g.id,
      credito_id: g.credito_id,
      fecha: this.utils.fechaFormateada(g.fecha) ?? "N/A",
      modalidad: g.modalidad,
      resultado: g.resultado,
      comentario: g.comentario,
      gestion_hecha_a: g.objetivo || "No registrado",
      ejecutivo: g.nombre_usuario ?? g.usuario_ejecutivo?.nombre ?? "No registrado",
      registrado_en: this.utils.fechaFormateada(g.created_at) ?? "N/A"
    }));
    if (this.dataTabla.length) {
      this.columns = Object.keys(this.dataTabla[0]);
    }
    console.log(this.dataTabla, gestiones);
  }
};
_GestionesJudicialesComponent.\u0275fac = function GestionesJudicialesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GestionesJudicialesComponent)(\u0275\u0275directiveInject(GeneradorExcelService), \u0275\u0275directiveInject(UtilsService));
};
_GestionesJudicialesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GestionesJudicialesComponent, selectors: [["app-gestiones-judiciales"]], inputs: { creditos: "creditos", fechaInicio: "fechaInicio", fechaFin: "fechaFin", estado: "estado" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 3, consts: [[3, "dataSource", "title", "fileName"]], template: function GestionesJudicialesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-informe-tabla-local", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("dataSource", ctx.dataTabla)("title", "Gestiones a cr\xE9ditos en " + ctx.estado.toLowerCase())("fileName", "gestiones_" + ctx.estado.toLowerCase());
  }
}, dependencies: [InformeTablaLocalComponent], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  max-height: 35rem;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=gestiones-judiciales.component.css.map */"] });
var GestionesJudicialesComponent = _GestionesJudicialesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestionesJudicialesComponent, [{
    type: Component,
    args: [{ selector: "app-gestiones-judiciales", imports: [InformeTablaLocalComponent], template: `<app-informe-tabla-local [dataSource]="dataTabla" [title]="'Gestiones a cr\xE9ditos en '+estado.toLowerCase()" [fileName]="'gestiones_'+estado.toLowerCase()"></app-informe-tabla-local>`, styles: ["/* src/app/main/informes/informe-tabla-juridicos-despacho/gestiones-judiciales/gestiones-judiciales.component.css */\n.table-responsive {\n  max-height: 35rem;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=gestiones-judiciales.component.css.map */\n"] }]
  }], () => [{ type: GeneradorExcelService }, { type: UtilsService }], { creditos: [{
    type: Input
  }], fechaInicio: [{
    type: Input
  }], fechaFin: [{
    type: Input
  }], estado: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GestionesJudicialesComponent, { className: "GestionesJudicialesComponent", filePath: "src/app/main/informes/informe-tabla-juridicos-despacho/gestiones-judiciales/gestiones-judiciales.component.ts", lineNumber: 27 });
})();

// src/app/main/informes/informe-tabla-juridicos-despacho/consolidado.juridico.service.ts
var _ConsolidadoJuridicoService = class _ConsolidadoJuridicoService {
  constructor(api) {
    this.api = api;
    this.endpoint = "api/consolidado/juridico";
    this.data = [];
    this.progressSubject = new BehaviorSubject(0);
    this.progress$ = this.progressSubject.asObservable();
  }
  fetchData(options) {
    return __async(this, null, function* () {
      if (!this.data.length) {
        yield this.initData();
      }
      return this.data.filter((c) => {
        if (!c.creditos_pagos?.length || !c.juridicos) {
          return false;
        }
        if (!options) {
          return true;
        }
        if (options.producto_financiero_id && c.productos_financiero_id != options.producto_financiero_id) {
          return false;
        }
        if (!options.inicio && !options.fin) {
          return true;
        }
        return true;
      });
    });
  }
  initData() {
    return __async(this, null, function* () {
      const firstPage = yield firstValueFrom(this.api.get(this.endpoint, { page: 1, per_page: 500 }, false));
      const lastPage = firstPage.total_pages ?? 0;
      const pages = Array.from({ length: lastPage }, (_, i) => i + 1);
      const chunkSize = 5;
      let currentPage = 1;
      for (let i = 0; i < pages.length; i += chunkSize) {
        const chunk = pages.slice(i, i + chunkSize);
        const promises = chunk.map((page) => firstValueFrom(this.api.get(this.endpoint, { page, per_page: 500 }, false)).then((res) => {
          this.progressSubject.next(page / pages.length * 100);
          currentPage++;
          return res.data ?? [];
        }));
        const results = yield Promise.all(promises);
        results.forEach((data) => this.data.push(...data));
      }
    });
  }
};
_ConsolidadoJuridicoService.\u0275fac = function ConsolidadoJuridicoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConsolidadoJuridicoService)(\u0275\u0275inject(ApiServiceService));
};
_ConsolidadoJuridicoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsolidadoJuridicoService, factory: _ConsolidadoJuridicoService.\u0275fac, providedIn: "root" });
var ConsolidadoJuridicoService = _ConsolidadoJuridicoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsolidadoJuridicoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiServiceService }], null);
})();

// src/app/main/informes/informe-tabla-juridicos-despacho/informe-tabla-juridicos-despacho.component.ts
function InformeTablaJuridicosDespachoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275element(7, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 32);
    \u0275\u0275text(9, " Descargando datos necesarios para reportes... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Progreso: ", ctx_r0.progressConsolidado.toFixed(2), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.progressConsolidado.toFixed(2), "/100");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressConsolidado, "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r0.progressConsolidado);
  }
}
function InformeTablaJuridicosDespachoComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Datos listos para generar reportes (", ctx_r0.creditos.length, " cr\xE9ditos). ");
  }
}
function InformeTablaJuridicosDespachoComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No hay datos disponibles para generar el informe");
    \u0275\u0275elementEnd()();
  }
}
function InformeTablaJuridicosDespachoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, InformeTablaJuridicosDespachoComponent_Conditional_6_Conditional_1_Template, 4, 1, "div", 33);
    \u0275\u0275conditionalCreate(2, InformeTablaJuridicosDespachoComponent_Conditional_6_Conditional_2_Template, 4, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creditos.length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creditos.length === 0 ? 2 : -1);
  }
}
function InformeTablaJuridicosDespachoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
function InformeTablaJuridicosDespachoComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
var _InformeTablaJuridicosDespachoComponent = class _InformeTablaJuridicosDespachoComponent {
  constructor(fetchDataService, estadoCuentaUtils, excelGenerator) {
    this.fetchDataService = fetchDataService;
    this.estadoCuentaUtils = estadoCuentaUtils;
    this.excelGenerator = excelGenerator;
    this.isLoadingConsolidado = false;
    this.isDisabledDownloading = true;
    this.isDownloadingSheets = false;
    this.progressConsolidado = 0;
    this.creditos = [];
    this.creditoAvanceDataTabla = [];
    this.creditoJudicialDataTabla = [];
    this.creditoExtraJudicialDataTabla = [];
    this.inicioConsolidado = (/* @__PURE__ */ new Date()).toISOString().substring(0, 8) + "01";
    this.finConsolidado = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.mes = "";
  }
  fetchData() {
    this.isLoadingConsolidado = true;
    this.progressConsolidado = 0;
    this.fetchDataConsolidado();
  }
  downloadSheets() {
    this.isDisabledDownloading = true;
    this.isLoadingConsolidado = true;
    const judicialData = this.creditoJudicialDataTabla.map((d) => {
      const _a = d, { creditos } = _a, rest = __objRest(_a, ["creditos"]);
      const creditos_ids = creditos?.map((c) => c.id).join(", ") || "";
      return __spreadProps(__spreadValues({}, rest), { creditos_ids });
    });
    const extraJudicialData = this.creditoExtraJudicialDataTabla.map((d) => {
      const _a = d, { creditos } = _a, rest = __objRest(_a, ["creditos"]);
      const creditos_ids = creditos?.map((c) => c.id).join(", ") || "";
      return __spreadProps(__spreadValues({}, rest), { creditos_ids });
    });
    this.excelGenerator.exportToDataSheets([
      [{ Tabla: "Avance y recuperaci\xF3n jur\xEDdico" }],
      this.creditoAvanceDataTabla,
      [{ Tabla: "Recuperaci\xF3n Judicial" }],
      judicialData,
      [{ Tabla: "Recuperaci\xF3n Extra Judicial" }],
      extraJudicialData
    ], `General-${this.mes}-recuperado`, "Informe general");
    this.isLoadingConsolidado = false;
    this.isDisabledDownloading = false;
  }
  onDataTablaAvance(data) {
    this.creditoAvanceDataTabla = data;
  }
  onDataTablaJudicial(data) {
    this.creditoJudicialDataTabla = data;
  }
  onDataTablaExtraJudicial(data) {
    this.creditoExtraJudicialDataTabla = data;
  }
  fetchDataConsolidado() {
    return __async(this, null, function* () {
      const busqueda_avanzada = [
        {
          relation: "juridicos",
          conditionals: [],
          andConditionals: []
        }
      ];
      this.fetchDataService.progress$.subscribe((progress) => {
        this.progressConsolidado = progress;
      });
      this.creditos = yield this.fetchDataService.fetchData({
        inicio: this.inicioConsolidado,
        fin: this.finConsolidado
      });
      this.creditos.forEach((c) => c.estado_cuenta = this.estadoCuentaUtils.calculateEstadoDeCuenta(c, false));
      this.isLoadingConsolidado = false;
      this.isDisabledDownloading = false;
    });
  }
};
_InformeTablaJuridicosDespachoComponent.\u0275fac = function InformeTablaJuridicosDespachoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeTablaJuridicosDespachoComponent)(\u0275\u0275directiveInject(ConsolidadoJuridicoService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(GeneradorExcelService));
};
_InformeTablaJuridicosDespachoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeTablaJuridicosDespachoComponent, selectors: [["app-informe-tabla-juridicos-despacho"]], decls: 40, vars: 26, consts: [[1, "container-fluid", "my-2"], [1, "mb-2"], [1, "mb-3", "text-secondary"], [1, "bi", "bi-database", "me-2"], [1, "mb-3"], [3, "inicioChange", "finChange", "monthNameChange", "inicio", "fin"], [1, "row", "mb-3"], [1, "col-md-4"], ["for", "fechaInicio", 1, "form-label", "small", "text-muted"], [1, "input-group"], ["type", "date", "id", "fechaInicio", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], [1, "input-group-text"], [1, "bi", "bi-calendar"], ["for", "fechaFin", 1, "form-label", "small", "text-muted"], ["type", "date", "id", "fechaFin", 1, "form-control", 3, "ngModelChange", "ngModel", "min"], [1, "col-md-2", "align-self-start", "text-center", "px-3", "pt-3"], [1, "btn", "btn-success", "flex-grow-1", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-excel", "me-2"], [1, "ms-2", "spinner-border", "spinner-border-sm"], [1, "col-md-2", "align-self-end", "text-center", "px-3", "pt-3"], [1, "btn", "btn-secondary", "flex-grow-1", 3, "click", "disabled"], [1, "bi", "bi-download", "me-2"], [1, "container-fluid", "position-relative", "z-6"], [3, "dataTablaChange", "creditos", "mesSeleccionado", "fechaInicio", "fechaFin"], [3, "dataTablaExtraJudicialChange", "dataTablaJudicialChange", "creditos", "mesSeleccionado", "fechaInicio", "fechaFin"], ["estado", "JUDICIAL", 3, "creditos", "fechaInicio", "fechaFin"], ["estado", "EXTRAJUDICIAL", 3, "creditos", "fechaInicio", "fechaFin"], [1, "card-footer", "bg-light", "text-end", "small", "text-muted"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-muted", "small"], [1, "progress", 2, "height", "10px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-info"], [1, "text-center", "mt-2", "mb-0", "small", "text-muted"], [1, "alert", "alert-success", "d-flex", "align-items-center"], [1, "alert", "alert-warning", "d-flex", "align-items-center"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"]], template: function InformeTablaJuridicosDespachoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275text(4, "Preparaci\xF3n de Datos ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, InformeTablaJuridicosDespachoComponent_Conditional_5_Template, 10, 5, "div", 4);
    \u0275\u0275conditionalCreate(6, InformeTablaJuridicosDespachoComponent_Conditional_6_Template, 3, 2, "div");
    \u0275\u0275elementStart(7, "app-selector-fechas-por-mes", 5);
    \u0275\u0275twoWayListener("inicioChange", function InformeTablaJuridicosDespachoComponent_Template_app_selector_fechas_por_mes_inicioChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.inicioConsolidado, $event) || (ctx.inicioConsolidado = $event);
      return $event;
    })("finChange", function InformeTablaJuridicosDespachoComponent_Template_app_selector_fechas_por_mes_finChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.finConsolidado, $event) || (ctx.finConsolidado = $event);
      return $event;
    });
    \u0275\u0275listener("monthNameChange", function InformeTablaJuridicosDespachoComponent_Template_app_selector_fechas_por_mes_monthNameChange_7_listener($event) {
      return ctx.mes = $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "label", 8);
    \u0275\u0275text(11, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function InformeTablaJuridicosDespachoComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.inicioConsolidado, $event) || (ctx.inicioConsolidado = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275element(15, "i", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 7)(17, "label", 13);
    \u0275\u0275text(18, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9)(20, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function InformeTablaJuridicosDespachoComponent_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.finConsolidado, $event) || (ctx.finConsolidado = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 11);
    \u0275\u0275element(22, "i", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 15)(24, "button", 16);
    \u0275\u0275listener("click", function InformeTablaJuridicosDespachoComponent_Template_button_click_24_listener() {
      return ctx.fetchData();
    });
    \u0275\u0275element(25, "i", 17);
    \u0275\u0275text(26, " Generar Informe ");
    \u0275\u0275conditionalCreate(27, InformeTablaJuridicosDespachoComponent_Conditional_27_Template, 1, 0, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 19)(29, "button", 20);
    \u0275\u0275listener("click", function InformeTablaJuridicosDespachoComponent_Template_button_click_29_listener() {
      return ctx.downloadSheets();
    });
    \u0275\u0275element(30, "i", 21);
    \u0275\u0275text(31, " Descargar informe general ");
    \u0275\u0275conditionalCreate(32, InformeTablaJuridicosDespachoComponent_Conditional_32_Template, 1, 0, "span", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 22)(34, "app-tabla-avance-judicial", 23);
    \u0275\u0275listener("dataTablaChange", function InformeTablaJuridicosDespachoComponent_Template_app_tabla_avance_judicial_dataTablaChange_34_listener($event) {
      return ctx.onDataTablaAvance($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "app-tabla-recuperacion-judicial", 24);
    \u0275\u0275listener("dataTablaExtraJudicialChange", function InformeTablaJuridicosDespachoComponent_Template_app_tabla_recuperacion_judicial_dataTablaExtraJudicialChange_35_listener($event) {
      return ctx.onDataTablaExtraJudicial($event);
    })("dataTablaJudicialChange", function InformeTablaJuridicosDespachoComponent_Template_app_tabla_recuperacion_judicial_dataTablaJudicialChange_35_listener($event) {
      return ctx.onDataTablaJudicial($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "app-gestiones-judiciales", 25)(37, "app-gestiones-judiciales", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 27);
    \u0275\u0275text(39, " \xDAltima actualizaci\xF3n: Hoy ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isLoadingConsolidado ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoadingConsolidado ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("inicio", ctx.inicioConsolidado)("fin", ctx.finConsolidado);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.inicioConsolidado);
    \u0275\u0275property("max", ctx.finConsolidado);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.finConsolidado);
    \u0275\u0275property("min", ctx.inicioConsolidado);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isLoadingConsolidado);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoadingConsolidado ? 27 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.isDisabledDownloading);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isDownloadingSheets ? 32 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("creditos", ctx.creditos)("mesSeleccionado", ctx.mes)("fechaInicio", ctx.inicioConsolidado)("fechaFin", ctx.finConsolidado);
    \u0275\u0275advance();
    \u0275\u0275property("creditos", ctx.creditos)("mesSeleccionado", ctx.mes)("fechaInicio", ctx.inicioConsolidado)("fechaFin", ctx.finConsolidado);
    \u0275\u0275advance();
    \u0275\u0275property("creditos", ctx.creditos)("fechaInicio", ctx.inicioConsolidado)("fechaFin", ctx.finConsolidado);
    \u0275\u0275advance();
    \u0275\u0275property("creditos", ctx.creditos)("fechaInicio", ctx.inicioConsolidado)("fechaFin", ctx.finConsolidado);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  TablaAvanceJudicialComponent,
  TablaRecuperacionJudicialComponent,
  SelectorFechasPorMesComponent,
  GestionesJudicialesComponent
], encapsulation: 2 });
var InformeTablaJuridicosDespachoComponent = _InformeTablaJuridicosDespachoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeTablaJuridicosDespachoComponent, [{
    type: Component,
    args: [{ selector: "app-informe-tabla-juridicos-despacho", imports: [
      FormsModule,
      TablaAvanceJudicialComponent,
      TablaRecuperacionJudicialComponent,
      SelectorFechasPorMesComponent,
      GestionesJudicialesComponent
    ], template: '<div class="container-fluid my-2">\n  <!-- Secci\xF3n de Carga de Datos para Consolidado -->\n  <div class="mb-2">\n    <h5 class="mb-3 text-secondary">\n      <i class="bi bi-database me-2"></i>Preparaci\xF3n de Datos\n    </h5>\n\n    <!-- Barra de Progreso solo para Consolidado -->\n    @if (isLoadingConsolidado) {\n    <div class="mb-3">\n      <div class="d-flex justify-content-between mb-2">\n        <span class="text-muted small">Progreso: {{progressConsolidado.toFixed(2)}}%</span>\n        <span class="text-muted small">{{progressConsolidado.toFixed(2)}}/100</span>\n      </div>\n      <div class="progress" style="height: 10px;">\n        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"\n          [style.width.%]="progressConsolidado" [attr.aria-valuenow]="progressConsolidado" aria-valuemin="0"\n          aria-valuemax="100">\n        </div>\n      </div>\n      <p class="text-center mt-2 mb-0 small text-muted">\n        Descargando datos necesarios para reportes...\n      </p>\n    </div>\n    }\n\n    <!-- Mensajes post-carga -->\n    @if (!isLoadingConsolidado) {\n    <div>\n      @if (creditos.length) {\n      <div class="alert alert-success d-flex align-items-center">\n        <i class="bi bi-check-circle-fill me-2"></i>\n        <span>\n          Datos listos para generar reportes ({{creditos.length}} cr\xE9ditos).\n        </span>\n      </div>\n      }\n      @if (creditos.length === 0) {\n      <div class="alert alert-warning d-flex align-items-center">\n        <i class="bi bi-exclamation-triangle-fill me-2"></i>\n        <span>No hay datos disponibles para generar el informe</span>\n      </div>\n      }\n    </div>\n    }\n\n    <!--Barra de seleccion de meses-->\n    <app-selector-fechas-por-mes [(inicio)]="inicioConsolidado" [(fin)]="finConsolidado" (monthNameChange)="mes = $event"></app-selector-fechas-por-mes>\n\n    <!-- Filtros por Fecha -->\n    <div class="row mb-3">\n      <div class="col-md-4">\n        <label for="fechaInicio" class="form-label small text-muted">Fecha Inicio</label>\n        <div class="input-group">\n          <input type="date" class="form-control" id="fechaInicio" [(ngModel)]="inicioConsolidado"\n            [max]="finConsolidado">\n          <span class="input-group-text"><i class="bi bi-calendar"></i></span>\n        </div>\n      </div>\n      <div class="col-md-4">\n        <label for="fechaFin" class="form-label small text-muted">Fecha Fin</label>\n        <div class="input-group">\n          <input type="date" class="form-control" id="fechaFin" [(ngModel)]="finConsolidado" [min]="inicioConsolidado">\n          <span class="input-group-text"><i class="bi bi-calendar"></i></span>\n        </div>\n      </div>\n      <div class="col-md-2 align-self-start text-center px-3 pt-3">\n        <button class="btn btn-success flex-grow-1" [disabled]="isLoadingConsolidado" (click)="fetchData()">\n          <i class="bi bi-file-earmark-excel me-2"></i>\n          Generar Informe\n          @if (isLoadingConsolidado) {\n          <span class="ms-2 spinner-border spinner-border-sm"></span>\n          }\n        </button>\n      </div>\n      <div class="col-md-2 align-self-end text-center px-3 pt-3">\n        <button class="btn btn-secondary flex-grow-1" [disabled]="isDisabledDownloading" (click)="downloadSheets()">\n          <i class="bi bi-download me-2"></i>\n          Descargar informe general\n          @if (isDownloadingSheets){\n          <span class="ms-2 spinner-border spinner-border-sm"></span>\n          }\n        </button>\n      </div>\n    </div>\n    <div class="container-fluid position-relative z-6">\n      <app-tabla-avance-judicial [creditos]="creditos" [mesSeleccionado]="mes" [fechaInicio]="inicioConsolidado" [fechaFin]="finConsolidado"\n        (dataTablaChange)="onDataTablaAvance($event)"></app-tabla-avance-judicial>\n      <app-tabla-recuperacion-judicial [creditos]="creditos"\n        [mesSeleccionado]="mes"\n        (dataTablaExtraJudicialChange)="onDataTablaExtraJudicial($event)"\n        (dataTablaJudicialChange)="onDataTablaJudicial($event)" [fechaInicio]="inicioConsolidado"\n        [fechaFin]="finConsolidado">\n      </app-tabla-recuperacion-judicial>\n    </div>\n    <app-gestiones-judiciales [creditos]="creditos" [fechaInicio]="inicioConsolidado" [fechaFin]="finConsolidado"\n      estado="JUDICIAL"></app-gestiones-judiciales>\n    <app-gestiones-judiciales [creditos]="creditos" [fechaInicio]="inicioConsolidado" [fechaFin]="finConsolidado"\n      estado="EXTRAJUDICIAL"></app-gestiones-judiciales>\n  </div>\n  <div class="card-footer bg-light text-end small text-muted">\n    \xDAltima actualizaci\xF3n: Hoy\n  </div>\n</div>' }]
  }], () => [{ type: ConsolidadoJuridicoService }, { type: UtilsEstadoCuentaService }, { type: GeneradorExcelService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeTablaJuridicosDespachoComponent, { className: "InformeTablaJuridicosDespachoComponent", filePath: "src/app/main/informes/informe-tabla-juridicos-despacho/informe-tabla-juridicos-despacho.component.ts", lineNumber: 32 });
})();

// src/app/main/informes/consolidado-juridico-general/consolidado-juridico-general.component.ts
function ConsolidadoJuridicoGeneralComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275element(7, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 24);
    \u0275\u0275text(9, " Descargando datos necesarios para reportes... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Progreso: ", ctx_r0.progressConsolidado.toFixed(2), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.progressConsolidado.toFixed(2), "/100");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressConsolidado, "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r0.progressConsolidado);
  }
}
function ConsolidadoJuridicoGeneralComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Datos listos para generar reportes (", ctx_r0.creditos.length, " cr\xE9ditos). ");
  }
}
function ConsolidadoJuridicoGeneralComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "No hay datos disponibles para generar el informe");
    \u0275\u0275elementEnd()();
  }
}
function ConsolidadoJuridicoGeneralComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, ConsolidadoJuridicoGeneralComponent_Conditional_6_Conditional_1_Template, 4, 1, "div", 25);
    \u0275\u0275conditionalCreate(2, ConsolidadoJuridicoGeneralComponent_Conditional_6_Conditional_2_Template, 4, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creditos.length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.creditos.length === 0 ? 2 : -1);
  }
}
function ConsolidadoJuridicoGeneralComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
}
var _ConsolidadoJuridicoGeneralComponent = class _ConsolidadoJuridicoGeneralComponent {
  constructor(fetchDataService, estadoCuentaUtils, excelGenerator, utils) {
    this.fetchDataService = fetchDataService;
    this.estadoCuentaUtils = estadoCuentaUtils;
    this.excelGenerator = excelGenerator;
    this.utils = utils;
    this.isLoadingConsolidado = false;
    this.isDisabledDownloading = true;
    this.isDownloadingSheets = false;
    this.progressConsolidado = 0;
    this.creditos = [];
    this.dataSource = [];
    this.inicioConsolidado = (/* @__PURE__ */ new Date()).toISOString().substring(0, 8) + "01";
    this.finConsolidado = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
  }
  fetchData() {
    this.isLoadingConsolidado = true;
    this.progressConsolidado = 0;
    this.fetchDataConsolidado();
  }
  fetchDataConsolidado() {
    return __async(this, null, function* () {
      this.fetchDataService.progress$.subscribe((progress) => {
        this.progressConsolidado = progress;
      });
      this.creditos = yield this.fetchDataService.fetchData({
        inicio: this.inicioConsolidado,
        fin: this.finConsolidado
      });
      this.isLoadingConsolidado = false;
      this.isDisabledDownloading = false;
      console.log(this.creditos);
      this.dataSource = this.creditosParsed();
    });
  }
  creditosParsed() {
    return this.creditos.map((credito) => {
      const pf = credito.datos_persona_fisica;
      const pm = credito.datos_personas_morales;
      const finConsolidado = new Date(this.finConsolidado);
      const estadoCuenta = this.estadoCuentaUtils.calculateEstadoDeCuenta(credito, false, this.finConsolidado);
      const ultimoAbono = estadoCuenta?.abonos_distribuidos?.at(-1)?.abono;
      const creditoDespacho = credito.creditos_despachos?.filter((c) => new Date(c.fecha_inicio) <= finConsolidado)?.at(-1);
      const juridico = credito.juridicos;
      const etapas = (juridico?.juridicos_etapas_judiciales ?? []).filter((e) => new Date(e.fecha ?? e.created_at) <= new Date(this.finConsolidado));
      const etapaActual = this.etapaJudicialActual(juridico);
      const gestiones = credito.credito_evento_cobros?.filter((e) => e.fecha && (new Date(e.fecha) <= new Date(this.finConsolidado) && new Date(e.fecha) >= new Date(this.inicioConsolidado)));
      const ultimaGestion = gestiones?.at(-1);
      const convenio = credito.convenios?.filter((c) => c.fecha_convenio && new Date(c.fecha_convenio) <= new Date(this.finConsolidado)).find((c) => c.estatus == "ACTIVO");
      return {
        "ID CREDITO": credito.id,
        "ID CLIENTE": this.utils.idClienteFromCredito(credito),
        "A\xD1O DE ORIGEN": this.utils.anioFromCredito(credito),
        "A\xD1O DE REESTRUCTURA": this.utils.esReestructura(credito.folio) ? this.utils.anioFromFecha(credito.fecha_reestructura ?? credito.liberado_fecha) : null,
        "FOLIO": credito.folio?.toUpperCase(),
        "PROGRAMA": credito.productos_financieros?.nombre.toUpperCase(),
        "NOMBRE COMERCIAL": this.utils.nombreNegocioFromCredito(credito),
        "RAZ\xD3N SOCIAL/NOMBRE PFA": this.utils.nombreClienteFromCredito(credito),
        "FECHA ASIGNACION AL DESPACHO": this.utils.fechaFormateada(creditoDespacho?.fecha_inicio) ?? "Sin asignar",
        "ASIGNACI\xD3N JUR\xCDDICO": juridico?.estado,
        "EXPEDIENTE": juridico?.expediente ?? "NO REGISTRADO",
        "PROCESO": etapaActual?.etapas_judiciales?.procesos_judiciales?.nombre.toUpperCase(),
        "ETAPA JUDICIAL": etapaActual?.etapas_judiciales?.nombre.toUpperCase(),
        "FECHA \xDALTIMO MOVIMIENTO ETAPA": this.utils.fechaFormateada(etapaActual?.fecha),
        "TOTAL GESTIONES DE COBRO": gestiones?.length ?? 0,
        "GESTI\xD3N DE COBRO": ultimaGestion ? "REALIZADA" : "NO REALIZADA",
        "RESULTADO ULTIMA GESTI\xD3N DE COBRO": ultimaGestion?.resultado,
        "FECHA ULTIMA GESTION DE COBRO": this.utils.fechaFormateada(ultimaGestion?.fecha),
        "MUNICIPIO": credito.sucursales?.nombre.toUpperCase(),
        "ESTADO CONVENIO": convenio ? "REALIZADO" : "",
        "TIPO CONVENIO": convenio?.tipo_convenio,
        "FECHA CONVENIO": this.utils.fechaFormateada(convenio?.fecha_convenio),
        "FECHA INICIO CONVENIO": this.utils.fechaFormateada(convenio?.fecha_inicio),
        "FECHA FIN CONVENIO": this.utils.fechaFormateada(convenio?.fecha_conclusion),
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
  }
  etapaJudicialActual(juridico) {
    const etapasOrdenadas = juridico?.juridicos_etapas_judiciales?.filter((e) => new Date(e.fecha ?? e.created_at) <= new Date(this.finConsolidado)).sort((a, b) => new Date(a.updated_at ?? "").getTime() - new Date(b.updated_at ?? "").getTime());
    const ultimaEtapaActiva = etapasOrdenadas?.at(-1);
    return ultimaEtapaActiva;
  }
  parseToNumber(value) {
    return +(+value.toString()).toFixed(2);
  }
};
_ConsolidadoJuridicoGeneralComponent.\u0275fac = function ConsolidadoJuridicoGeneralComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConsolidadoJuridicoGeneralComponent)(\u0275\u0275directiveInject(ConsolidadoJuridicoService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(GeneradorExcelService), \u0275\u0275directiveInject(UtilsService));
};
_ConsolidadoJuridicoGeneralComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsolidadoJuridicoGeneralComponent, selectors: [["app-consolidado-juridico-general"]], decls: 29, vars: 11, consts: [[1, "container-fluid", "my-2"], [1, "mb-2"], [1, "mb-3", "text-secondary"], [1, "bi", "bi-database", "me-2"], [1, "mb-3"], [3, "inicioChange", "finChange", "inicio", "fin"], [1, "row", "mb-3"], [1, "col-md-4"], ["for", "fechaInicio", 1, "form-label", "small", "text-muted"], [1, "input-group"], ["type", "date", "id", "fechaInicio", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], [1, "input-group-text"], [1, "bi", "bi-calendar"], ["for", "fechaFin", 1, "form-label", "small", "text-muted"], ["type", "date", "id", "fechaFin", 1, "form-control", 3, "ngModelChange", "ngModel", "min"], [1, "col", "align-self-start", "text-center", "px-3", "pt-3"], [1, "btn", "btn-success", "flex-grow-1", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-excel", "me-2"], [1, "ms-2", "spinner-border", "spinner-border-sm"], ["title", "Consoldiado Juridico", "fileName", "juridico", 3, "data"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-muted", "small"], [1, "progress", 2, "height", "10px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-info"], [1, "text-center", "mt-2", "mb-0", "small", "text-muted"], [1, "alert", "alert-success", "d-flex", "align-items-center"], [1, "alert", "alert-warning", "d-flex", "align-items-center"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"]], template: function ConsolidadoJuridicoGeneralComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275text(4, "Preparaci\xF3n de Datos ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ConsolidadoJuridicoGeneralComponent_Conditional_5_Template, 10, 5, "div", 4);
    \u0275\u0275conditionalCreate(6, ConsolidadoJuridicoGeneralComponent_Conditional_6_Template, 3, 2, "div");
    \u0275\u0275elementStart(7, "app-selector-fechas-por-mes", 5);
    \u0275\u0275twoWayListener("inicioChange", function ConsolidadoJuridicoGeneralComponent_Template_app_selector_fechas_por_mes_inicioChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.inicioConsolidado, $event) || (ctx.inicioConsolidado = $event);
      return $event;
    })("finChange", function ConsolidadoJuridicoGeneralComponent_Template_app_selector_fechas_por_mes_finChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.finConsolidado, $event) || (ctx.finConsolidado = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "label", 8);
    \u0275\u0275text(11, "Fecha Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9)(13, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ConsolidadoJuridicoGeneralComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.inicioConsolidado, $event) || (ctx.inicioConsolidado = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275element(15, "i", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 7)(17, "label", 13);
    \u0275\u0275text(18, "Fecha Fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9)(20, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ConsolidadoJuridicoGeneralComponent_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.finConsolidado, $event) || (ctx.finConsolidado = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 11);
    \u0275\u0275element(22, "i", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 15)(24, "button", 16);
    \u0275\u0275listener("click", function ConsolidadoJuridicoGeneralComponent_Template_button_click_24_listener() {
      return ctx.fetchData();
    });
    \u0275\u0275element(25, "i", 17);
    \u0275\u0275text(26, " Generar Informe ");
    \u0275\u0275conditionalCreate(27, ConsolidadoJuridicoGeneralComponent_Conditional_27_Template, 1, 0, "span", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(28, "app-informe-tabla-dinamica-local", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.isLoadingConsolidado ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isLoadingConsolidado ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("inicio", ctx.inicioConsolidado)("fin", ctx.finConsolidado);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.inicioConsolidado);
    \u0275\u0275property("max", ctx.finConsolidado);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.finConsolidado);
    \u0275\u0275property("min", ctx.inicioConsolidado);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.isLoadingConsolidado);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.isLoadingConsolidado ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.dataSource);
  }
}, dependencies: [
  SelectorFechasPorMesComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  InformeTablaDinamicaLocalComponent
], encapsulation: 2 });
var ConsolidadoJuridicoGeneralComponent = _ConsolidadoJuridicoGeneralComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsolidadoJuridicoGeneralComponent, [{
    type: Component,
    args: [{ selector: "app-consolidado-juridico-general", imports: [
      SelectorFechasPorMesComponent,
      FormsModule,
      InformeTablaDinamicaLocalComponent
    ], template: '<div class="container-fluid my-2">\n    <!-- Secci\xF3n de Carga de Datos para Consolidado -->\n    <div class="mb-2">\n        <h5 class="mb-3 text-secondary">\n            <i class="bi bi-database me-2"></i>Preparaci\xF3n de Datos\n        </h5>\n\n        <!-- Barra de Progreso solo para Consolidado -->\n        @if (isLoadingConsolidado) {\n        <div class="mb-3">\n            <div class="d-flex justify-content-between mb-2">\n                <span class="text-muted small">Progreso: {{progressConsolidado.toFixed(2)}}%</span>\n                <span class="text-muted small">{{progressConsolidado.toFixed(2)}}/100</span>\n            </div>\n            <div class="progress" style="height: 10px;">\n                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar"\n                    [style.width.%]="progressConsolidado" [attr.aria-valuenow]="progressConsolidado" aria-valuemin="0"\n                    aria-valuemax="100">\n                </div>\n            </div>\n            <p class="text-center mt-2 mb-0 small text-muted">\n                Descargando datos necesarios para reportes...\n            </p>\n        </div>\n        }\n\n        <!-- Mensajes post-carga -->\n        @if (!isLoadingConsolidado) {\n        <div>\n            @if (creditos.length) {\n            <div class="alert alert-success d-flex align-items-center">\n                <i class="bi bi-check-circle-fill me-2"></i>\n                <span>\n                    Datos listos para generar reportes ({{creditos.length}} cr\xE9ditos).\n                </span>\n            </div>\n            }\n            @if (creditos.length === 0) {\n            <div class="alert alert-warning d-flex align-items-center">\n                <i class="bi bi-exclamation-triangle-fill me-2"></i>\n                <span>No hay datos disponibles para generar el informe</span>\n            </div>\n            }\n        </div>\n        }\n\n        <!--Barra de seleccion de meses-->\n        <app-selector-fechas-por-mes [(inicio)]="inicioConsolidado"\n            [(fin)]="finConsolidado"></app-selector-fechas-por-mes>\n\n        <!-- Filtros por Fecha -->\n        <div class="row mb-3">\n            <div class="col-md-4">\n                <label for="fechaInicio" class="form-label small text-muted">Fecha Inicio</label>\n                <div class="input-group">\n                    <input type="date" class="form-control" id="fechaInicio" [(ngModel)]="inicioConsolidado"\n                        [max]="finConsolidado">\n                    <span class="input-group-text"><i class="bi bi-calendar"></i></span>\n                </div>\n            </div>\n            <div class="col-md-4">\n                <label for="fechaFin" class="form-label small text-muted">Fecha Fin</label>\n                <div class="input-group">\n                    <input type="date" class="form-control" id="fechaFin" [(ngModel)]="finConsolidado"\n                        [min]="inicioConsolidado">\n                    <span class="input-group-text"><i class="bi bi-calendar"></i></span>\n                </div>\n            </div>\n            <div class="col align-self-start text-center px-3 pt-3">\n                <button class="btn btn-success flex-grow-1" [disabled]="isLoadingConsolidado" (click)="fetchData()">\n                    <i class="bi bi-file-earmark-excel me-2"></i>\n                    Generar Informe\n                    @if (isLoadingConsolidado) {\n                    <span class="ms-2 spinner-border spinner-border-sm"></span>\n                    }\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <app-informe-tabla-dinamica-local title="Consoldiado Juridico" fileName="juridico" [data]="dataSource"></app-informe-tabla-dinamica-local>\n</div>' }]
  }], () => [{ type: ConsolidadoJuridicoService }, { type: UtilsEstadoCuentaService }, { type: GeneradorExcelService }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsolidadoJuridicoGeneralComponent, { className: "ConsolidadoJuridicoGeneralComponent", filePath: "src/app/main/informes/consolidado-juridico-general/consolidado-juridico-general.component.ts", lineNumber: 22 });
})();

// src/app/main/informes/informe-tabla-juridicos/informe-tabla-juridicos.component.ts
var _InformeTablaJuridicosComponent = class _InformeTablaJuridicosComponent {
  constructor() {
    this.currentTab = "despacho";
  }
};
_InformeTablaJuridicosComponent.\u0275fac = function InformeTablaJuridicosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeTablaJuridicosComponent)();
};
_InformeTablaJuridicosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeTablaJuridicosComponent, selectors: [["app-informe-tabla-juridicos"]], decls: 15, vars: 0, consts: [[1, "container-fluid", "bg-white", "rounded", "shadow", "my-1", "p-3"], ["id", "reportTabs", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "despachos-tab", "data-bs-toggle", "tab", "data-bs-target", "#despachos", "type", "button", "role", "tab", "aria-controls", "despachos", "aria-selected", "true", 1, "nav-link", "active"], [1, "bi", "bi-card-heading", "me-2"], ["id", "general-tab", "data-bs-toggle", "tab", "data-bs-target", "#general", "type", "button", "role", "tab", "aria-controls", "general", "aria-selected", "false", 1, "nav-link"], [1, "bi", "bi-file-earmark-text", "me-2"], ["id", "reportTabsContent", 1, "tab-content", "p-3", "border", "border-top-0", "rounded-bottom"], ["id", "despachos", "role", "tabpanel", "aria-labelledby", "despachos-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "general", "role", "tabpanel", "aria-labelledby", "general-tab", 1, "tab-pane", "fade"]], template: function InformeTablaJuridicosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "button", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, " Avance jur\xEDdico ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li", 2)(7, "button", 5);
    \u0275\u0275element(8, "i", 6);
    \u0275\u0275text(9, " Consolidado jur\xEDdico ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
    \u0275\u0275element(12, "app-informe-tabla-juridicos-despacho");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275element(14, "app-consolidado-juridico-general");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [
  InformeTablaJuridicosDespachoComponent,
  ConsolidadoJuridicoGeneralComponent
], encapsulation: 2 });
var InformeTablaJuridicosComponent = _InformeTablaJuridicosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeTablaJuridicosComponent, [{
    type: Component,
    args: [{ selector: "app-informe-tabla-juridicos", imports: [
      InformeTablaJuridicosDespachoComponent,
      ConsolidadoJuridicoGeneralComponent
    ], template: '<div class="container-fluid bg-white rounded shadow my-1 p-3">\n    <!-- Pesta\xF1as de navegaci\xF3n -->\n    <ul class="nav nav-tabs" id="reportTabs" role="tablist">\n        <li class="nav-item" role="presentation">\n            <button class="nav-link active" id="despachos-tab" data-bs-toggle="tab" data-bs-target="#despachos"\n                type="button" role="tab" aria-controls="despachos" aria-selected="true">\n                <i class="bi bi-card-heading me-2"></i> Avance jur\xEDdico\n            </button>\n        </li>\n        <li class="nav-item" role="presentation">\n            <button class="nav-link" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button"\n                role="tab" aria-controls="general" aria-selected="false">\n                <i class="bi bi-file-earmark-text me-2"></i> Consolidado jur\xEDdico\n            </button>\n        </li>\n    </ul>\n\n    <!-- Contenido de las pesta\xF1as -->\n    <div class="tab-content p-3 border border-top-0 rounded-bottom" id="reportTabsContent">\n        <!-- Pesta\xF1a Despachos -->\n        <div class="tab-pane fade show active" id="despachos" role="tabpanel" aria-labelledby="despachos-tab">\n            <app-informe-tabla-juridicos-despacho></app-informe-tabla-juridicos-despacho>\n        </div>\n\n        <!-- Pesta\xF1a General -->\n        <div class="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab">\n            <app-consolidado-juridico-general></app-consolidado-juridico-general>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeTablaJuridicosComponent, { className: "InformeTablaJuridicosComponent", filePath: "src/app/main/informes/informe-tabla-juridicos/informe-tabla-juridicos.component.ts", lineNumber: 15 });
})();

// src/app/main/informes/informe-cobranza/informe-cobranza.component.ts
var _InformeCobranzaComponent = class _InformeCobranzaComponent {
  constructor() {
    this.dataSource = [];
    this.options = {};
    this.columnsClusters = COBRANZA_COLUMNS_CLUSTERS;
    this.progress = 0;
    this.isLoading = false;
    this.informeCobranzaController = inject(InformeCobranzaService);
  }
  ngOnInit() {
    this.informeCobranzaController.progress$.subscribe((p) => {
      this.progress = p;
    });
  }
  fetchData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.dataSource = yield this.informeCobranzaController.fetchDataMaped(this.options);
      this.isLoading = false;
      console.log(this.dataSource);
    });
  }
};
_InformeCobranzaComponent.\u0275fac = function InformeCobranzaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformeCobranzaComponent)();
};
_InformeCobranzaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformeCobranzaComponent, selectors: [["app-informe-cobranza"]], decls: 7, vars: 7, consts: [[1, "container-xl", "my-2", "p-3", "rounded", "shadow", "bg-white"], [1, "bi", "bi-money", "fs-4"], ["title", "Preparaci\xF3n de datos para el consolidado de cobranza", 3, "isLoading", "progress", "dataLen"], [3, "download", "isLoading", "filtros"], ["fileName", "informe_cobranza", 3, "data", "clusterColumns"]], template: function InformeCobranzaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4");
    \u0275\u0275element(2, "i", 1);
    \u0275\u0275text(3, " Consolidado de cobranza ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-progress-bar-consolidado", 2);
    \u0275\u0275elementStart(5, "app-dates-picker", 3);
    \u0275\u0275listener("download", function InformeCobranzaComponent_Template_app_dates_picker_download_5_listener() {
      return ctx.fetchData();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-informe-tabla-dinamica-local", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("isLoading", ctx.isLoading)("progress", ctx.progress)("dataLen", ctx.dataSource.length);
    \u0275\u0275advance();
    \u0275\u0275property("isLoading", ctx.isLoading)("filtros", ctx.options);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.dataSource)("clusterColumns", ctx.columnsClusters);
  }
}, dependencies: [
  InformeTablaDinamicaLocalComponent,
  ProgressBarConsolidadoComponent,
  DatesPickerComponent
], encapsulation: 2 });
var InformeCobranzaComponent = _InformeCobranzaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeCobranzaComponent, [{
    type: Component,
    args: [{ selector: "app-informe-cobranza", imports: [
      InformeTablaDinamicaLocalComponent,
      ProgressBarConsolidadoComponent,
      DatesPickerComponent
    ], template: '<div class="container-xl my-2 p-3 rounded shadow bg-white">\n  <h4><i class="bi bi-money fs-4"></i> Consolidado de cobranza </h4>\n  <app-progress-bar-consolidado\n    title="Preparaci\xF3n de datos para el consolidado de cobranza" [isLoading]="isLoading"\n    [progress]="progress" [dataLen]="dataSource.length"\n    ></app-progress-bar-consolidado>\n    <app-dates-picker [isLoading]="isLoading" [filtros]="options" (download)="fetchData()"></app-dates-picker>\n  <app-informe-tabla-dinamica-local [data]="dataSource" [clusterColumns]="columnsClusters" fileName="informe_cobranza"></app-informe-tabla-dinamica-local>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformeCobranzaComponent, { className: "InformeCobranzaComponent", filePath: "src/app/main/informes/informe-cobranza/informe-cobranza.component.ts", lineNumber: 18 });
})();

// src/app/main/informes/informe-pagos/informe-pago-row/informe-pago-row.component.ts
function InformePagoRowComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(key_r1.replaceAll("_", " ").toUpperCase());
  }
}
function InformePagoRowComponent_For_62_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-end", key_r2.includes("monto"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3[key_r2]);
  }
}
function InformePagoRowComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, InformePagoRowComponent_For_62_For_2_Template, 2, 3, "td", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.keys);
  }
}
function InformePagoRowComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.sumaTotal(key_r5));
  }
}
var _InformePagoRowComponent = class _InformePagoRowComponent {
  constructor(utils, excel) {
    this.utils = utils;
    this.excel = excel;
    this.pagoLayoutChange = new EventEmitter();
    this.dataTabla = [];
    this.filtrado = [];
    this.filtros = {
      status_pago: "TODOS",
      status_aplicacion: "TODOS"
    };
    this.keys = [];
    this.totales = {
      numero_movimientos: 0,
      creditos_afectados: 0,
      monto_total: 0
    };
  }
  ngOnChanges(changes) {
    if (changes["pagoLayout"] && this.pagoLayout) {
      this.setTotales();
      this.setDataTabla();
    }
  }
  setTotales() {
    this.totales.numero_movimientos = this.pagoLayout.numero_movimientos;
    this.totales.creditos_afectados = this.pagoLayout.pagos_cargas_masivas_with_trashed.filter((p) => p.creditos_abonos).length;
    this.totales.monto_total = this.pagoLayout.pagos_cargas_masivas_with_trashed.reduce((acc, item) => acc + +item.importe_de_credito, 0);
  }
  setDataTabla() {
    this.dataTabla = this.pagoLayout?.pagos_cargas_masivas_with_trashed.map((c) => {
      return {
        id_credito: c.creditos_abonos?.credito_id || null,
        nombre_cliente: this.utils.nombreClienteFromCredito(c.creditos_abonos?.creditos) || "NO APLICADO",
        status_pago: !!c.nota ? "EN MODULO MANUAL" : c.creditos_abonos ? "PAGO DIRECTO" : "PENDIENTE",
        referencia: c.descripcion,
        monto: (+c.importe_de_credito).toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        fecha_valor: this.utils.fechaFormateada(c.fecha_valor) ?? "N/A",
        observaciones: c.nota
      };
    }) ?? [];
    this.filtrado = [...this.dataTabla];
    if (this.dataTabla.length) {
      this.keys = Object.keys(this.dataTabla[0]);
    }
  }
  sumaTotal(key) {
    if (!key.includes("monto"))
      return "";
    return this.dataTabla.reduce((acc, item) => acc + +item[key].toString().replaceAll(",", ""), 0).toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  filterStatusPago() {
    if (this.filtros.status_pago == "TODOS") {
      this.filtrado = [...this.dataTabla];
      return;
    }
    if (this.filtros.status_pago == "AUTOMATICA") {
      this.filtrado = [...this.dataTabla.filter((r) => r.status_pago == "PAGO DIRECTO")];
      return;
    }
    this.filtrado = [...this.dataTabla.filter((r) => r.status_pago == "EN MODULO MANUAL")];
  }
  filterStatusAplicacion() {
    if (this.filtros.status_aplicacion == "APLICADO") {
      this.filtrado = [...this.dataTabla.filter((r) => r.id_credito)];
      return;
    }
    if (this.filtros.status_aplicacion == "NO IDENTIFICADO") {
      this.filtrado = [...this.dataTabla.filter((r) => !r.id_credito)];
      return;
    }
    this.filtrado = [...this.dataTabla];
  }
};
_InformePagoRowComponent.\u0275fac = function InformePagoRowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformePagoRowComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(GeneradorExcelService));
};
_InformePagoRowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformePagoRowComponent, selectors: [["app-informe-pago-row"]], inputs: { pagoLayout: "pagoLayout" }, outputs: { pagoLayoutChange: "pagoLayoutChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 67, vars: 7, consts: [[1, "container-xxl", "my-1", "p-3", "bg-white", "bg-white", "rounded", "shadow"], [1, "row"], [1, "col"], [1, "col-auto"], [1, "btn", "btn-primary", 3, "click"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-8"], [1, "form-select", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-file-earmark-excel"], [1, "table-responsive", "mt-3"], [1, "table", "table-striped", "table-hover", "table-sm"], [1, "table-primary"], [1, "text-end"], [3, "text-end"]], template: function InformePagoRowComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
    \u0275\u0275text(4, "Datalle de pagos referenciados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function InformePagoRowComponent_Template_button_click_6_listener() {
      return ctx.pagoLayoutChange.emit(void 0);
    });
    \u0275\u0275text(7, "Atras");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "b");
    \u0275\u0275text(11, "N\xFAmero Movimientos: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 6)(14, "b");
    \u0275\u0275text(15, "Creditos Afectados: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 6)(18, "b");
    \u0275\u0275text(19, "Monto Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 6)(22, "b");
    \u0275\u0275text(23, "Fecha Valor:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 6)(26, "b");
    \u0275\u0275text(27, "Fecha Registro:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 6)(30, "b");
    \u0275\u0275text(31, "Status del pago:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function InformePagoRowComponent_Template_select_ngModelChange_32_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.status_pago, $event) || (ctx.filtros.status_pago = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function InformePagoRowComponent_Template_select_ngModelChange_32_listener() {
      return ctx.filterStatusPago();
    });
    \u0275\u0275elementStart(33, "option");
    \u0275\u0275text(34, "TODOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option");
    \u0275\u0275text(36, "AUTOMATICA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option");
    \u0275\u0275text(38, "MANUAL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 6)(40, "b");
    \u0275\u0275text(41, "Status aplicaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function InformePagoRowComponent_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.status_aplicacion, $event) || (ctx.filtros.status_aplicacion = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function InformePagoRowComponent_Template_select_ngModelChange_42_listener() {
      return ctx.filterStatusAplicacion();
    });
    \u0275\u0275elementStart(43, "option");
    \u0275\u0275text(44, "TODOS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option");
    \u0275\u0275text(46, "APLICADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option");
    \u0275\u0275text(48, "NO IDENTIFICADO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 6)(50, "b");
    \u0275\u0275text(51, "Descargar Excel:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 8);
    \u0275\u0275listener("click", function InformePagoRowComponent_Template_button_click_52_listener() {
      return ctx.excel.exportToExcel(ctx.filtrado, "detalles_pagos");
    });
    \u0275\u0275element(53, "i", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 10)(55, "table", 11)(56, "thead")(57, "tr", 12);
    \u0275\u0275repeaterCreate(58, InformePagoRowComponent_For_59_Template, 2, 1, "th", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "tbody");
    \u0275\u0275repeaterCreate(61, InformePagoRowComponent_For_62_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "tfoot")(64, "tr");
    \u0275\u0275repeaterCreate(65, InformePagoRowComponent_For_66_Template, 2, 1, "th", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx.totales.numero_movimientos, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx.totales.creditos_afectados, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.totales.monto_total.toLocaleString(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.utils.fechaFormateada(ctx.pagoLayout == null ? null : ctx.pagoLayout.fecha_proceso_terminado), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.utils.fechaFormateada(ctx.pagoLayout == null ? null : ctx.pagoLayout.created_at), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.status_pago);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.status_aplicacion);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx.keys);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.filtrado);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.keys);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var InformePagoRowComponent = _InformePagoRowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformePagoRowComponent, [{
    type: Component,
    args: [{ selector: "app-informe-pago-row", imports: [
      FormsModule
    ], template: `<div class="container-xxl my-1 p-3 bg-white bg-white rounded shadow">
  <div class="row">
    <div class="col">
      <h4>Datalle de pagos referenciados</h4>
    </div>
    <div class="col-auto">
      <button class="btn btn-primary" (click)="pagoLayoutChange.emit(undefined)">Atras</button>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8">
      <b>N\xFAmero Movimientos: </b> {{totales.numero_movimientos}}
    </div>
    <div class="col-12 col-sm-8">
      <b>Creditos Afectados: </b>{{totales.creditos_afectados}}
    </div>
    <div class="col-12 col-sm-8">
      <b>Monto Total:</b> {{totales.monto_total.toLocaleString()}}
    </div>
    <div class="col-12 col-sm-8">
      <b>Fecha Valor:</b> {{utils.fechaFormateada(pagoLayout?.fecha_proceso_terminado)}}
    </div>
    <div class="col-12 col-sm-8">
      <b>Fecha Registro:</b> {{utils.fechaFormateada(pagoLayout?.created_at)}}
    </div>
    <div class="col-12 col-sm-8">
      <b>Status del pago:</b>
      <select class="form-select" [(ngModel)]="filtros.status_pago" (ngModelChange)="filterStatusPago()">
        <option>TODOS</option>
        <option>AUTOMATICA</option>
        <option>MANUAL</option>
      </select>
    </div>
    <div class="col-12 col-sm-8">
      <b>Status aplicaci\xF3n:</b>
      <select class="form-select" [(ngModel)]="filtros.status_aplicacion"
        (ngModelChange)="filterStatusAplicacion()">
        <option>TODOS</option>
        <option>APLICADO</option>
        <option>NO IDENTIFICADO</option>
      </select>
    </div>
    <div class="col-12 col-sm-8">
      <b>Descargar Excel:</b>
      <button class="btn btn-success" (click)="excel.exportToExcel(filtrado,'detalles_pagos')"><i class="bi bi-file-earmark-excel"></i></button>
    </div>
  </div>
  <div class="table-responsive mt-3">
    <table class="table table-striped table-hover table-sm">
      <thead>
        <tr class="table-primary">
          @for (key of keys; track key) {
            <th>{{key.replaceAll('_',' ').toUpperCase()}}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of filtrado; track row) {
          <tr>
            @for (key of keys; track key) {
              <td [class.text-end]="key.includes('monto')">{{row[key]}}</td>
            }
          </tr>
        }
      </tbody>
      <tfoot>
        <tr>
          @for (key of keys; track key) {
            <th class="text-end">{{sumaTotal(key)}}</th>
          }
        </tr>
      </tfoot>
    </table>
  </div>
</div>` }]
  }], () => [{ type: UtilsService }, { type: GeneradorExcelService }], { pagoLayout: [{
    type: Input
  }], pagoLayoutChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformePagoRowComponent, { className: "InformePagoRowComponent", filePath: "src/app/main/informes/informe-pagos/informe-pago-row/informe-pago-row.component.ts", lineNumber: 27 });
})();

// src/app/main/informes/informe-pagos/informe-pagos.component.ts
function InformePagosComponent_Conditional_0_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(key_r3.replaceAll("_", " ").toUpperCase());
  }
}
function InformePagosComponent_Conditional_0_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function InformePagosComponent_Conditional_0_Conditional_15_For_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 16);
    \u0275\u0275listener("click", function InformePagosComponent_Conditional_0_Conditional_15_For_9_For_2_Template_td_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.select(row_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-end", key_r6.includes("monto"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5[key_r6]);
  }
}
function InformePagosComponent_Conditional_0_Conditional_15_For_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "button", 17);
    \u0275\u0275listener("click", function InformePagosComponent_Conditional_0_Conditional_15_For_9_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.pagoLayoutService.switch(row_r5.id);
      return \u0275\u0275resetView(ctx_r1.setData());
    });
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementEnd()();
  }
}
function InformePagosComponent_Conditional_0_Conditional_15_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 13);
    \u0275\u0275repeaterCreate(1, InformePagosComponent_Conditional_0_Conditional_15_For_9_For_2_Template, 2, 3, "td", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, InformePagosComponent_Conditional_0_Conditional_15_For_9_Conditional_3_Template, 3, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.keys);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.usuario_perfil.tipos_usuarios.nombre == "ROOT" ? 3 : -1);
  }
}
function InformePagosComponent_Conditional_0_Conditional_15_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sumaTotal(key_r8));
  }
}
function InformePagosComponent_Conditional_0_Conditional_15_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function InformePagosComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 11)(2, "thead")(3, "tr", 12);
    \u0275\u0275repeaterCreate(4, InformePagosComponent_Conditional_0_Conditional_15_For_5_Template, 2, 1, "th", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(6, InformePagosComponent_Conditional_0_Conditional_15_Conditional_6_Template, 1, 0, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275repeaterCreate(8, InformePagosComponent_Conditional_0_Conditional_15_For_9_Template, 4, 1, "tr", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "tfoot")(11, "tr");
    \u0275\u0275repeaterCreate(12, InformePagosComponent_Conditional_0_Conditional_15_For_13_Template, 2, 1, "th", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(14, InformePagosComponent_Conditional_0_Conditional_15_Conditional_14_Template, 1, 0, "th");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.keys);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.usuario_perfil.tipos_usuarios.nombre == "ROOT" ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.dataTabla);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.keys);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.usuario_perfil.tipos_usuarios.nombre == "ROOT" ? 14 : -1);
  }
}
function InformePagosComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3)(3, "h4");
    \u0275\u0275text(4, "Reporte de Pagos Referenciados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "label", 6);
    \u0275\u0275text(8, "Desde:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function InformePagosComponent_Conditional_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filtros.desde, $event) || (ctx_r1.filtros.desde = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 6);
    \u0275\u0275text(11, "Hasta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function InformePagosComponent_Conditional_0_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filtros.hasta, $event) || (ctx_r1.filtros.hasta = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 8);
    \u0275\u0275listener("click", function InformePagosComponent_Conditional_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setData());
    });
    \u0275\u0275element(14, "i", 9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(15, InformePagosComponent_Conditional_0_Conditional_15_Template, 15, 2, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filtros.desde);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filtros.hasta);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.filtros.desde || !ctx_r1.filtros.hasta);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.dataTabla.length ? 15 : -1);
  }
}
function InformePagosComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-informe-pago-row", 19);
    \u0275\u0275twoWayListener("pagoLayoutChange", function InformePagosComponent_Conditional_1_Template_app_informe_pago_row_pagoLayoutChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.rowSelected, $event) || (ctx_r1.rowSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("pagoLayout", ctx_r1.rowSelected);
  }
}
var _InformePagosComponent = class _InformePagosComponent {
  constructor(pagoLayoutService, utils) {
    this.pagoLayoutService = pagoLayoutService;
    this.utils = utils;
    this.dataSource = [];
    this.dataTabla = [];
    this.filtros = {
      desde: "",
      hasta: ""
    };
    this.keys = [];
    this.usuario_perfil = inject(LocalStorageService).getPerfil();
  }
  ngOnInit() {
    const date = /* @__PURE__ */ new Date();
    date.setMonth(date.getMonth() - 1);
    const dateHasta = /* @__PURE__ */ new Date();
    dateHasta.setDate(dateHasta.getDate() + 1);
    this.filtros.desde = date.toISOString().substring(0, 10);
    this.filtros.hasta = dateHasta.toISOString().substring(0, 10);
  }
  setData() {
    return __async(this, null, function* () {
      this.dataSource = yield this.pagoLayoutService.all({
        relations: [
          "usuarios",
          "pagosCargasMasivasWithTrashed.creditosAbonos",
          "pagosCargasMasivasWithTrashed.creditosAbonos.creditos.datosPersonaFisica.datosPersonales",
          "pagosCargasMasivasWithTrashed.creditosAbonos.creditos.datosPersonasMorales"
        ],
        conditionals: [
          { key: "deleted_at", operator: "IS NULL", value: null },
          { key: "created_at", operator: ">=", value: this.filtros.desde },
          { key: "created_at", operator: "<=", value: this.filtros.hasta }
        ]
      });
      this.dataTabla = this.dataSource.map((r) => {
        const aplicados_automaticamente = r.pagos_cargas_masivas_with_trashed?.filter((p) => p.creditos_abonos && p.nota == null && !p.deleted_at);
        const enviados_a_manual = r.pagos_cargas_masivas_with_trashed?.filter((p) => (p.nota !== null || p.nota == null && !p.creditos_abonos) && !p.deleted_at);
        const aplicados_manualmente = r.pagos_cargas_masivas_with_trashed?.filter((p) => p.nota && p.creditos_abonos && !p.deleted_at);
        const aplicados_todos = r.pagos_cargas_masivas_with_trashed?.filter((p) => p.creditos_abonos && !p.deleted_at);
        const cancelados = r.pagos_cargas_masivas_with_trashed?.filter((p) => p.deleted_at);
        const pendientes_aplicar = r.pagos_cargas_masivas_with_trashed?.filter((p) => !p.creditos_abonos);
        const sumarTodos = (acc, p) => acc + +p.importe_de_credito;
        return {
          id: r.id,
          archivo: r.nombre_archivo_registro,
          monto_total: r.pagos_cargas_masivas_with_trashed?.reduce(sumarTodos, 0).toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || 0,
          num_movimientos: r.numero_movimientos,
          aplicados_automaticamente: aplicados_automaticamente?.length || 0,
          monto_aplicado_automaticamente: aplicados_automaticamente?.reduce(sumarTodos, 0).toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || 0,
          enviados_a_manual: enviados_a_manual?.length || 0,
          aplicados_manualmente: aplicados_manualmente?.length || 0,
          creditos_afectados: aplicados_todos?.length || 0,
          monto_cancelado: cancelados?.reduce(sumarTodos, 0).toLocaleString() || 0,
          monto_total_aplicado: aplicados_todos?.reduce(sumarTodos, 0).toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || 0,
          pendientes_aplicar: pendientes_aplicar?.length || 0,
          monto_pendiente_aplicar: pendientes_aplicar?.reduce(sumarTodos, 0).toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || 0,
          fecha_regitro: this.utils.fechaFormateada(r.created_at) ?? "N/A"
        };
      });
      if (this.dataTabla.length) {
        this.keys = Object.keys(this.dataTabla[0]);
      }
      console.log(this.dataTabla);
    });
  }
  select(row) {
    this.rowSelected = this.dataSource.find((p) => p.id == row.id);
  }
  sumaTotal(key) {
    if (!key.includes("monto"))
      return "";
    return this.dataTabla.reduce((acc, item) => acc + +item[key].toString().replaceAll(",", "").replaceAll("$", ""), 0).toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
};
_InformePagosComponent.\u0275fac = function InformePagosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InformePagosComponent)(\u0275\u0275directiveInject(PagoLayoutService), \u0275\u0275directiveInject(UtilsService));
};
_InformePagosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InformePagosComponent, selectors: [["app-informe-pagos"]], decls: 2, vars: 2, consts: [[1, "container-xxl", "rounded", "shadow", "bg-white", "my-3", "p-3"], [3, "pagoLayout"], [1, "row"], [1, "col"], [1, "col-auto"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-search"], [1, "table-responsive"], [1, "table", "table-hover", "table-sm", "fs-7"], [1, "table-primary"], [1, "pointer"], [1, "text-end"], [3, "text-end"], [3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"], [3, "pagoLayoutChange", "pagoLayout"]], template: function InformePagosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InformePagosComponent_Conditional_0_Template, 16, 4, "div", 0);
    \u0275\u0275conditionalCreate(1, InformePagosComponent_Conditional_1_Template, 1, 1, "app-informe-pago-row", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.rowSelected ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.rowSelected ? 1 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, InformePagoRowComponent], styles: ["\n\n.fs-7[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=informe-pagos.component.css.map */"] });
var InformePagosComponent = _InformePagosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformePagosComponent, [{
    type: Component,
    args: [{ selector: "app-informe-pagos", imports: [
      FormsModule,
      InformePagoRowComponent
    ], template: `@if (!rowSelected) {
<div class="container-xxl rounded shadow bg-white my-3 p-3">
  <div class="row">
    <div class="col">
      <h4>Reporte de Pagos Referenciados</h4>
    </div>
    <div class="col-auto">
      <div class="input-group input-group-sm">
        <label class="input-group-text">Desde:</label>
        <input class="form-control" type="date" [(ngModel)]="filtros.desde">
        <label class="input-group-text">Hasta:</label>
        <input class="form-control" type="date" [(ngModel)]="filtros.hasta">
        <button class="btn btn-primary" [disabled]="!filtros.desde || !filtros.hasta" (click)="setData()"><i
            class="bi bi-search"></i></button>
      </div>
    </div>
  </div>
  @if (dataTabla.length) {
  <div class="table-responsive">
    <table class="table table-hover table-sm fs-7">
      <thead>
        <tr class="table-primary">
          @for (key of keys; track key) {
          <th>{{key.replaceAll('_',' ').toUpperCase()}}</th>
          }
          @if (usuario_perfil.tipos_usuarios.nombre =='ROOT') {
          <th></th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of dataTabla; track row) {
        <tr class="pointer">
          @for (key of keys; track key) {
          <td [class.text-end]="key.includes('monto')" (click)="select(row)">{{row[key]}}</td>
          }
          @if (usuario_perfil.tipos_usuarios.nombre =='ROOT') {
          <td>
            <button class="btn btn-danger btn-sm" (click)="pagoLayoutService.switch(row.id); setData()"><i
                class="bi bi-trash"></i></button>
          </td>
          }
        </tr>
        }
      </tbody>
      <tfoot>
        <tr>
          @for (key of keys; track key) {
          <th class="text-end">{{sumaTotal(key)}}</th>
          }
          @if (usuario_perfil.tipos_usuarios.nombre =='ROOT') {
          <th></th>
          }
        </tr>
      </tfoot>
    </table>
  </div>
  }
</div>
}
@if (rowSelected) {
<app-informe-pago-row [(pagoLayout)]="rowSelected"></app-informe-pago-row>
}`, styles: ["/* src/app/main/informes/informe-pagos/informe-pagos.component.css */\n.fs-7 {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=informe-pagos.component.css.map */\n"] }]
  }], () => [{ type: PagoLayoutService }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InformePagosComponent, { className: "InformePagosComponent", filePath: "src/app/main/informes/informe-pagos/informe-pagos.component.ts", lineNumber: 38 });
})();

// src/app/main/informes/buro-credito/services/buro.utils.service.ts
var _BuroUtilsService = class _BuroUtilsService {
  formatDateToYYYYMMDD(date) {
    if (date === null || date === void 0) {
      return "";
    }
    const dateObj = typeof date === "string" ? new Date(date) : date;
    if (isNaN(dateObj.getTime())) {
      return "";
    }
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  formatDateToDDMMYYYY(date) {
    if (!date) {
      return "00000000";
    }
    let fecha;
    try {
      fecha = typeof date === "string" ? new Date(date) : date;
      if (isNaN(fecha.getTime())) {
        return "00000000";
      }
    } catch {
      return "00000000";
    }
    const day = fecha.getDate();
    const month = fecha.getMonth() + 1;
    const year = fecha.getFullYear();
    return day.toString().padStart(2, "0") + month.toString().padStart(2, "0") + year.toString().padStart(4, "0");
  }
  formatDomicilio(domicilio) {
    if (!domicilio)
      return { linea1: "", linea2: "" };
    if (!domicilio.calle || domicilio.calle.trim() === "") {
      return {
        linea1: "DOMICILIO CONOCIDO SN".padEnd(40, " "),
        linea2: " ".repeat(40)
      };
    }
    let direccion = domicilio.calle.trim();
    const numExt = domicilio.no_exterior?.trim();
    const numInt = domicilio.no_interior?.trim();
    if (!numExt) {
      direccion += " SN";
    } else {
      direccion += ` ${numExt}`;
      if (numInt) {
        direccion += ` Int ${numInt}`;
      }
    }
    if (direccion.length <= 40) {
      return {
        linea1: direccion.padEnd(40, " "),
        linea2: " ".repeat(40)
      };
    }
    const linea1 = direccion.substring(0, 40);
    const sobrante = direccion.substring(40);
    const linea2 = sobrante.length > 0 ? sobrante.substring(0, 40).padEnd(40, " ") : " ".repeat(40);
    return {
      linea1: linea1.padEnd(40, " "),
      linea2
    };
  }
  esPersonaMoral(rfc) {
    if (!rfc) {
      return null;
    }
    const rfcLimpio = rfc.trim().toUpperCase();
    if (rfcLimpio.length === 12) {
      return true;
    } else if (rfcLimpio.length === 13) {
      return false;
    } else {
      return null;
    }
  }
  separarNombreCompleto(nombreCompleto) {
    if (!nombreCompleto || typeof nombreCompleto !== "string") {
      return {
        nombre: "",
        nombre_adicional: "",
        apellido_paterno: "",
        apellido_materno: ""
      };
    }
    const partes = nombreCompleto.trim().replace(/\s+/g, " ").split(" ").filter((p) => p);
    if (partes.length === 0) {
      return {
        nombre: "",
        nombre_adicional: "",
        apellido_paterno: "",
        apellido_materno: ""
      };
    }
    let nombre = "";
    let nombre_adicional = "";
    let apellido_paterno = "";
    let apellido_materno = "";
    if (partes.length === 1) {
      nombre = partes[0];
    } else if (partes.length === 2) {
      nombre = partes[0];
      apellido_paterno = partes[1];
    } else if (partes.length === 3) {
      nombre = partes[0];
      apellido_paterno = partes[1];
      apellido_materno = partes[2];
    } else if (partes.length === 4) {
      nombre = partes[0];
      nombre_adicional = partes[1];
      apellido_paterno = partes[2];
      apellido_materno = partes[3];
    } else {
      apellido_paterno = partes[partes.length - 2];
      apellido_materno = partes[partes.length - 1];
      nombre = partes[0];
      nombre_adicional = partes.slice(1, -2).join(" ");
    }
    return {
      nombre,
      nombre_adicional,
      apellido_paterno,
      apellido_materno
    };
  }
  folioCredito(credito) {
    const convenios = credito.convenios?.filter((c) => c.estatus !== "CANCELADO") ?? [];
    if (!convenios?.length)
      return credito.folio ?? "";
    return (credito.folio ?? "") + "R".repeat(convenios.length);
  }
  folioAnterior(credito) {
    const folio = this.folioCredito(credito);
    if (!folio.length)
      return "";
    if (folio[folio.length - 1] == "R") {
      return folio.substring(0, folio.length - 1);
    }
    return "";
  }
};
_BuroUtilsService.\u0275fac = function BuroUtilsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuroUtilsService)();
};
_BuroUtilsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroUtilsService, factory: _BuroUtilsService.\u0275fac, providedIn: "any" });
var BuroUtilsService = _BuroUtilsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroUtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/buro-encabezado/buro-encabezado.component.ts
var _BuroEncabezadoComponent = class _BuroEncabezadoComponent {
  constructor() {
    this.buroUtils = inject(BuroUtilsService);
    this.encabezado = {
      identificadorSegmento: "BNCPM",
      claveUsuario: "B775",
      claveUsuarioAnterior: "0000",
      tipoUsuario: "008",
      tipoFormato: "1",
      fechaReporte: "",
      // Se inicializará en ngOnInit
      periodo: "",
      // Se inicializará en ngOnInit
      version: "05",
      nombreOtorgante: "FONDOS BC",
      filler: " ".repeat(52)
    };
    this.fechaReporteDate = null;
    this.encabezadoConfirmado = new EventEmitter();
  }
  ngOnInit() {
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    this.fechaReporteDate = `${year}-${month.toString().padStart(2, "0")}`;
    this.updateFechas();
  }
  // Sincroniza fechaReporte y periodo basándose en el mes seleccionado
  onFechaReporteChange() {
    this.updateFechas();
  }
  updateFechas() {
    if (this.fechaReporteDate) {
      const parts = this.fechaReporteDate.split("-");
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const lastDayOfMonth = new Date(Date.UTC(year, month, 0));
      const y = lastDayOfMonth.getUTCFullYear();
      const m = (lastDayOfMonth.getUTCMonth() + 1).toString().padStart(2, "0");
      const d = lastDayOfMonth.getUTCDate().toString().padStart(2, "0");
      this.encabezado.fechaReporte = `${d}${m}${y}`;
      this.encabezado.periodo = `${month.toString().padStart(2, "0")}${year}`;
    }
  }
  // Formatea automáticamente la clave de usuario (alfanumérico, 4 caracteres)
  onClaveUsuarioInput(event) {
    const input = event.target;
    input.value = input.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 4);
    this.encabezado.claveUsuario = input.value;
  }
  // Formatea el periodo (MMYYYY)
  onPeriodoInput(event) {
    const input = event.target;
    let value = input.value.replace(/[^0-9]/g, "").slice(0, 6);
    if (value.length >= 2) {
      const mes = parseInt(value.substring(0, 2), 10);
      if (mes < 1 || mes > 12) {
        value = value[0] + value.substring(2);
      }
    }
    input.value = value;
    this.encabezado.periodo = value;
  }
  // Validación del formulario
  isFormValid() {
    return !!(this.encabezado.claveUsuario && this.encabezado.claveUsuario.length === 4 && /^[a-zA-Z0-9]{4}$/.test(this.encabezado.claveUsuario) && this.encabezado.fechaReporte && this.encabezado.periodo && this.encabezado.periodo.length === 6 && this.encabezado.nombreOtorgante.trim().length > 0 && this.encabezado.nombreOtorgante.length <= 50);
  }
  // Acción al hacer submit
  onSubmit() {
    this.encabezadoConfirmado.emit(this.encabezado);
    console.log(this.encabezado);
  }
};
_BuroEncabezadoComponent.\u0275fac = function BuroEncabezadoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuroEncabezadoComponent)();
};
_BuroEncabezadoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuroEncabezadoComponent, selectors: [["app-buro-encabezado"]], outputs: { encabezadoConfirmado: "encabezadoConfirmado" }, decls: 94, vars: 6, consts: [[1, "p-4", "bg-white", "rounded", "shadow"], [1, "text-primary", "mb-4"], [1, "bi", "bi-file-earmark-text", "me-2"], [1, "text-muted", "small", "mb-4"], [1, "row", "g-4"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "form-label", "fw-semibold"], [1, "bi", "bi-key", "me-1", "text-primary"], ["type", "text", "placeholder", "Ej: B775", "maxlength", "4", "pattern", "[a-zA-Z0-9]{4}", "required", "", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "form-text", "text-muted"], [1, "bi", "bi-calendar-event", "me-1", "text-success"], ["type", "month", "required", "", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "bi", "bi-calendar-range", "me-1", "text-info"], ["type", "text", "placeholder", "MMYYYY", "maxlength", "6", "pattern", "(0[1-9]|1[0-2])\\d{4}", "required", "", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "col-12", "col-md-4", "col-lg-6"], [1, "bi", "bi-filetype-doc", "me-1", "text-warning"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "1"], ["value", "2"], [1, "col-12", "col-sm"], [1, "bi", "bi-building", "me-1", "text-secondary"], ["type", "text", "placeholder", "Ej: FONDOS BC", "maxlength", "50", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-4", "p-3", "bg-light", "border", "rounded-2"], [1, "text-secondary", "mb-3"], [1, "bi", "bi-shield-lock", "me-1"], [1, "row", "g-3", "small"], [1, "col-12", "col-md-6"], [1, "badge", "bg-dark", "ms-2"], [1, "badge", "bg-secondary", "ms-2"], [1, "badge", "bg-primary", "text-white", "ms-2"], [1, "text-muted", "ms-2"], [1, "badge", "bg-success", "ms-2"], [1, "badge", "bg-info", "text-white", "ms-2"], [1, "badge", "bg-light", "text-dark", "border", "ms-2"], [1, "d-flex", "justify-content-end", "mt-4", "pt-3", "border-top"], ["type", "button", 1, "btn", "btn-primary", "px-4", "py-2", 3, "click", "disabled"], [1, "bi", "bi-save"]], template: function BuroEncabezadoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
    \u0275\u0275element(2, "i", 2);
    \u0275\u0275text(3, " Encabezado del Reporte (Segmento HD) - Bur\xF3 de Cr\xE9dito ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, " Este segmento es obligatorio y debe aparecer una sola vez al inicio del archivo. Aplica para Fideicomisos y Fondos. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "label", 6);
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275text(10, " Clave de Usuario (4 caracteres) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function BuroEncabezadoComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.encabezado.claveUsuario, $event) || (ctx.encabezado.claveUsuario = $event);
      return $event;
    });
    \u0275\u0275listener("input", function BuroEncabezadoComponent_Template_input_input_11_listener($event) {
      return ctx.onClaveUsuarioInput($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 9);
    \u0275\u0275text(13, " \xDAltimos 4 caracteres de tu clave. Ej: BU90B775XYZ1 \u2192 ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "B775");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 5)(17, "label", 6);
    \u0275\u0275element(18, "i", 10);
    \u0275\u0275text(19, " Mes de Reporte ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function BuroEncabezadoComponent_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaReporteDate, $event) || (ctx.fechaReporteDate = $event);
      return $event;
    });
    \u0275\u0275listener("change", function BuroEncabezadoComponent_Template_input_change_20_listener() {
      return ctx.onFechaReporteChange();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 9);
    \u0275\u0275text(22, " \xDAltimo d\xEDa del periodo reportado (AAAAMMDD) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 5)(24, "label", 6);
    \u0275\u0275element(25, "i", 12);
    \u0275\u0275text(26, " Periodo Contable ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function BuroEncabezadoComponent_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.encabezado.periodo, $event) || (ctx.encabezado.periodo = $event);
      return $event;
    });
    \u0275\u0275listener("input", function BuroEncabezadoComponent_Template_input_input_27_listener($event) {
      return ctx.onPeriodoInput($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 9);
    \u0275\u0275text(29, " Mes y a\xF1o del periodo (ej: 092024) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 14)(31, "label", 6);
    \u0275\u0275element(32, "i", 15);
    \u0275\u0275text(33, " Tipo de Reporte ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "select", 16);
    \u0275\u0275twoWayListener("ngModelChange", function BuroEncabezadoComponent_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.encabezado.tipoFormato, $event) || (ctx.encabezado.tipoFormato = $event);
      return $event;
    });
    \u0275\u0275elementStart(35, "option", 17);
    \u0275\u0275text(36, "Financiero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 18);
    \u0275\u0275text(38, "Comercial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 9);
    \u0275\u0275text(40, " Define el formato del reporte. Fondos/Fideicomisos generalmente usan ");
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42, "Financiero");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43, ". ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 19)(45, "label", 6);
    \u0275\u0275element(46, "i", 20);
    \u0275\u0275text(47, " Nombre del Otorgante ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function BuroEncabezadoComponent_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.encabezado.nombreOtorgante, $event) || (ctx.encabezado.nombreOtorgante = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 9);
    \u0275\u0275text(50, " Nombre registrado en Bur\xF3 de Cr\xE9dito (m\xE1x. 50 caracteres) ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 22)(52, "h6", 23);
    \u0275\u0275element(53, "i", 24);
    \u0275\u0275text(54, " Valores fijos del sistema (no editables) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 25)(56, "div", 26)(57, "strong");
    \u0275\u0275text(58, "Identificador del segmento:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 27);
    \u0275\u0275text(60, "BNCPM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 26)(62, "strong");
    \u0275\u0275text(63, "Clave usuario anterior:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 28);
    \u0275\u0275text(65, "0000");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 26)(67, "strong");
    \u0275\u0275text(68, "Tipo de usuario:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 29);
    \u0275\u0275text(70, "008");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "small", 30);
    \u0275\u0275text(72, "(Fondos y Fideicomisos)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 26)(74, "strong");
    \u0275\u0275text(75, "Tipo de formato:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 31);
    \u0275\u0275text(77, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "small", 30);
    \u0275\u0275text(79, "(Detallado - Financiero)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 26)(81, "strong");
    \u0275\u0275text(82, "Versi\xF3n del formato:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 32);
    \u0275\u0275text(84, "05");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 26)(86, "strong");
    \u0275\u0275text(87, "Filler (52 espacios):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 33);
    \u0275\u0275text(89, "[52 espacios]");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(90, "div", 34)(91, "button", 35);
    \u0275\u0275listener("click", function BuroEncabezadoComponent_Template_button_click_91_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(92, "i", 36);
    \u0275\u0275text(93, " Confirmar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.encabezado.claveUsuario);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaReporteDate);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.encabezado.periodo);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.encabezado.tipoFormato);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx.encabezado.nombreOtorgante);
    \u0275\u0275advance(43);
    \u0275\u0275property("disabled", !ctx.isFormValid());
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, MaxLengthValidator, PatternValidator, NgModel], encapsulation: 2 });
var BuroEncabezadoComponent = _BuroEncabezadoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroEncabezadoComponent, [{
    type: Component,
    args: [{ selector: "app-buro-encabezado", imports: [
      FormsModule
    ], template: '<div class="p-4 bg-white rounded shadow">\n    <!-- T\xEDtulo -->\n    <h5 class="text-primary mb-4">\n        <i class="bi bi-file-earmark-text me-2"></i>\n        Encabezado del Reporte (Segmento HD) - Bur\xF3 de Cr\xE9dito\n    </h5>\n\n    <p class="text-muted small mb-4">\n        Este segmento es obligatorio y debe aparecer una sola vez al inicio del archivo.\n        Aplica para Fideicomisos y Fondos.\n    </p>\n\n    <!-- Campos del formulario -->\n    <div class="row g-4">\n\n        <!-- Campo editable: Clave de usuario -->\n        <div class="col-12 col-md-6 col-lg-4">\n            <label class="form-label fw-semibold">\n                <i class="bi bi-key me-1 text-primary"></i>\n                Clave de Usuario (4 caracteres)\n            </label>\n            <input type="text" class="form-control" placeholder="Ej: B775" maxlength="4" pattern="[a-zA-Z0-9]{4}"\n                [(ngModel)]="encabezado.claveUsuario" (input)="onClaveUsuarioInput($event)" required />\n            <div class="form-text text-muted">\n                \xDAltimos 4 caracteres de tu clave. Ej: BU90B775XYZ1 \u2192 <strong>B775</strong>\n            </div>\n        </div>\n\n        <!-- Fecha de reporte -->\n        <div class="col-12 col-md-6 col-lg-4">\n            <label class="form-label fw-semibold">\n                <i class="bi bi-calendar-event me-1 text-success"></i>\n                Mes de Reporte\n            </label>\n            <input type="month" class="form-control" [(ngModel)]="fechaReporteDate" (change)="onFechaReporteChange()"\n                required />\n            <div class="form-text text-muted">\n                \xDAltimo d\xEDa del periodo reportado (AAAAMMDD)\n            </div>\n        </div>\n\n        <!-- Periodo contable -->\n        <div class="col-12 col-md-6 col-lg-4">\n            <label class="form-label fw-semibold">\n                <i class="bi bi-calendar-range me-1 text-info"></i>\n                Periodo Contable\n            </label>\n            <input type="text" class="form-control" placeholder="MMYYYY" maxlength="6" pattern="(0[1-9]|1[0-2])\\d{4}"\n                [(ngModel)]="encabezado.periodo" (input)="onPeriodoInput($event)" required />\n            <div class="form-text text-muted">\n                Mes y a\xF1o del periodo (ej: 092024)\n            </div>\n        </div>\n\n        <!-- Tipo de formato (editable) -->\n        <div class="col-12 col-md-4 col-lg-6">\n            <label class="form-label fw-semibold">\n                <i class="bi bi-filetype-doc me-1 text-warning"></i>\n                Tipo de Reporte\n            </label>\n            <select class="form-select" [(ngModel)]="encabezado.tipoFormato">\n                <option value="1">Financiero</option>\n                <option value="2">Comercial</option>\n            </select>\n            <div class="form-text text-muted">\n                Define el formato del reporte. Fondos/Fideicomisos generalmente usan <strong>Financiero</strong>.\n            </div>\n        </div>\n\n        <!-- Nombre del otorgante -->\n        <div class="col-12 col-sm">\n            <label class="form-label fw-semibold">\n                <i class="bi bi-building me-1 text-secondary"></i>\n                Nombre del Otorgante\n            </label>\n            <input type="text" class="form-control" placeholder="Ej: FONDOS BC" maxlength="50"\n                [(ngModel)]="encabezado.nombreOtorgante" required />\n            <div class="form-text text-muted">\n                Nombre registrado en Bur\xF3 de Cr\xE9dito (m\xE1x. 50 caracteres)\n            </div>\n        </div>\n\n    </div>\n\n    <!-- Informaci\xF3n fija (solo lectura) -->\n    <div class="mt-4 p-3 bg-light border rounded-2">\n        <h6 class="text-secondary mb-3">\n            <i class="bi bi-shield-lock me-1"></i>\n            Valores fijos del sistema (no editables)\n        </h6>\n        <div class="row g-3 small">\n            <div class="col-12 col-md-6">\n                <strong>Identificador del segmento:</strong>\n                <span class="badge bg-dark ms-2">BNCPM</span>\n            </div>\n            <div class="col-12 col-md-6">\n                <strong>Clave usuario anterior:</strong>\n                <span class="badge bg-secondary ms-2">0000</span>\n            </div>\n            <div class="col-12 col-md-6">\n                <strong>Tipo de usuario:</strong>\n                <span class="badge bg-primary text-white ms-2">008</span>\n                <small class="text-muted ms-2">(Fondos y Fideicomisos)</small>\n            </div>\n            <div class="col-12 col-md-6">\n                <strong>Tipo de formato:</strong>\n                <span class="badge bg-success ms-2">1</span>\n                <small class="text-muted ms-2">(Detallado - Financiero)</small>\n            </div>\n            <div class="col-12 col-md-6">\n                <strong>Versi\xF3n del formato:</strong>\n                <span class="badge bg-info text-white ms-2">05</span>\n            </div>\n            <div class="col-12 col-md-6">\n                <strong>Filler (52 espacios):</strong>\n                <span class="badge bg-light text-dark border ms-2">[52 espacios]</span>\n            </div>\n        </div>\n    </div>\n\n    <!-- Bot\xF3n de acci\xF3n principal -->\n    <div class="d-flex justify-content-end mt-4 pt-3 border-top">\n        <button type="button" class="btn btn-primary px-4 py-2" [disabled]="!isFormValid()" (click)="onSubmit()">\n            <i class="bi bi-save"> Confirmar</i>\n        </button>\n    </div>\n</div>' }]
  }], null, { encabezadoConfirmado: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuroEncabezadoComponent, { className: "BuroEncabezadoComponent", filePath: "src/app/main/informes/buro-credito/buro-encabezado/buro-encabezado.component.ts", lineNumber: 14 });
})();

// src/app/main/informes/buro-credito/services/buro.encabezado.service.ts
var _BuroEncabezadoService = class _BuroEncabezadoService {
  /**
   * Convierte el encabezado del Buró a formato de string para el archivo
   * @param encabezado - Objeto con la información del encabezado
   * @returns String formateado según las especificaciones del Buró de Crédito
   */
  mapEncabezado(encabezado) {
    let str = "";
    str += "HD" + this.format(encabezado.identificadorSegmento, 5);
    str += "00" + this.format(encabezado.claveUsuario, 4);
    str += "01" + this.format(encabezado.claveUsuarioAnterior, 4);
    str += "02" + this.format(encabezado.tipoUsuario, 3);
    str += "03" + this.format(encabezado.tipoFormato, 1);
    str += "04" + this.format(encabezado.fechaReporte, 8);
    str += "05" + this.format(encabezado.periodo, 6);
    str += "06" + this.format(encabezado.version, 2);
    str += "07" + this.format(encabezado.nombreOtorgante, 75);
    str += "08" + this.format(encabezado.filler, 52);
    return str;
  }
  format(value, len, number) {
    if (!value)
      return number ? "".padStart(len, "0") : "".padEnd(len, " ");
    return number ? value.padStart(len, "0") : value.padEnd(len, " ").substring(0, len);
  }
};
_BuroEncabezadoService.\u0275fac = function BuroEncabezadoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuroEncabezadoService)();
};
_BuroEncabezadoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroEncabezadoService, factory: _BuroEncabezadoService.\u0275fac, providedIn: "any" });
var BuroEncabezadoService = _BuroEncabezadoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroEncabezadoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.super.service.ts
var _BuroSuperService = class _BuroSuperService {
  constructor() {
    this.utils = inject(BuroUtilsService);
  }
  /**
   * Función para formatear el output de texto de la base de datos.
   * Transforma: Todo a Mayúsculas, elimina carácteres (./)
   * @param value
   * @param len
   * @param number
   * @returns
   */
  format(value, len, number) {
    if (!value)
      return number ? "".padStart(len, "0") : "".padEnd(len, " ");
    value = value.replace(/\//g, "").replace(/,/g, "").replace(/\./g, "").replace(/'/g, "").replace(/"/g, "").replace(/`/g, "").replace(/-/g, "").replace(/\\/g, "").normalize("NFD").replace(/[̀-ͯ]/g, "");
    return number ? value.padStart(len, "0") : value.padEnd(len, " ").substring(0, len).toUpperCase();
  }
};
_BuroSuperService.\u0275fac = function BuroSuperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuroSuperService)();
};
_BuroSuperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroSuperService, factory: _BuroSuperService.\u0275fac, providedIn: "any" });
var BuroSuperService = _BuroSuperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroSuperService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.compania.service.ts
var _BuroCompaniaService = class _BuroCompaniaService extends BuroSuperService {
  map(credito) {
    const pf = credito.datos_persona_fisica?.datos_personales;
    const pm = credito.datos_personas_morales;
    const nombres = pf?.nombre.split(" ") ?? [];
    let primer_nombre = pf?.nombre;
    let segundo_nombre = "";
    if (nombres.length > 1) {
      primer_nombre = nombres[0];
      segundo_nombre = nombres[1];
    }
    const domicilio = this.utils.formatDomicilio(pf ?? pm);
    const telefono = pf ? pf.telefonos_personales?.at(0) : pm?.telefonos?.at(0);
    return {
      identificadorSegmento: "EM",
      rfc: pf?.rfc ?? pm?.rfc ?? "",
      curp: pf?.curp ?? "",
      numeroDum: "0000000000",
      compania: pm?.razon_social ?? "",
      nombre1: primer_nombre ?? "",
      nombre2: segundo_nombre ?? "",
      apellidoPaterno: pf?.apellido_paterno ?? "",
      apellidoMaterno: pf?.apellido_materno ?? "",
      nacionalidad: "MX",
      calificacionCartera: "",
      banxico1: "9999999",
      banxico2: "9999999",
      banxico3: "9999999",
      direccion1: domicilio.linea1,
      direccion2: domicilio.linea2,
      colonia: pf?.colonia ?? pm?.colonia ?? "",
      municipio: pf?.ciudades?.nombre ?? pm?.ciudades?.nombre ?? "",
      ciudad: "",
      estado: "BCN",
      codigoPostal: pf?.codigo_postal ?? pm?.codigo_postal ?? "",
      telefono: telefono?.numero ?? "",
      extension: "",
      fax: "",
      tipoCliente: pm ? "1" : "2",
      estadoExtranjero: "",
      paisDomicilio: "",
      claveConsolidacion: "",
      filler: ""
    };
  }
  mapCompania(compania) {
    let str = "";
    str += "EM" + this.format(compania.identificadorSegmento, 2);
    str += "00" + this.format(compania.rfc, 13);
    str += "01" + this.format(compania.curp, 18);
    str += "02" + this.format(compania.numeroDum, 10);
    str += "03" + this.format(compania.compania, 150);
    str += "04" + this.format(compania.nombre1, 30);
    str += "05" + this.format(compania.nombre2, 30);
    str += "06" + this.format(compania.apellidoPaterno, 25);
    str += "07" + this.format(compania.apellidoMaterno, 25);
    str += "08" + this.format(compania.nacionalidad, 2);
    str += "09" + this.format(compania.calificacionCartera, 2);
    str += "10" + this.format(compania.banxico1, 11);
    str += "11" + this.format(compania.banxico2, 11);
    str += "12" + this.format(compania.banxico3, 11);
    str += "13" + this.format(compania.direccion1, 40);
    str += "14" + this.format(compania.direccion2, 40);
    str += "15" + this.format(compania.colonia, 60);
    str += "16" + this.format(compania.municipio, 40);
    str += "17" + this.format(compania.ciudad, 40);
    str += "18" + this.format(compania.estado, 4);
    str += "19" + this.format(compania.codigoPostal, 10, true);
    str += "20" + this.format(compania.telefono, 11);
    str += "21" + this.format(compania.extension, 8);
    str += "22" + this.format(compania.fax, 11);
    str += "23" + this.format(compania.tipoCliente, 1);
    str += "24" + this.format(compania.estadoExtranjero, 40);
    str += "25" + this.format(compania.paisDomicilio, 2);
    str += "26" + this.format(compania.claveConsolidacion, 8);
    str += "27" + this.format(compania.filler, 87);
    return str;
  }
};
_BuroCompaniaService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuroCompaniaService_BaseFactory;
  return function BuroCompaniaService_Factory(__ngFactoryType__) {
    return (\u0275BuroCompaniaService_BaseFactory || (\u0275BuroCompaniaService_BaseFactory = \u0275\u0275getInheritedFactory(_BuroCompaniaService)))(__ngFactoryType__ || _BuroCompaniaService);
  };
})();
_BuroCompaniaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroCompaniaService, factory: _BuroCompaniaService.\u0275fac, providedIn: "any" });
var BuroCompaniaService = _BuroCompaniaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroCompaniaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.accionista.service.ts
var _BuroAccionistaService = class _BuroAccionistaService extends BuroSuperService {
  map(credito) {
    const accionistas = credito.datos_personas_morales?.accionistas ?? [];
    return accionistas.filter((a) => a.porcentaje_acciones > 10).map((accionista) => {
      const esMoral = this.utils.esPersonaMoral(accionista.rfc);
      const nombres = this.utils.separarNombreCompleto(accionista.nombre);
      return {
        identificadorSegmento: "AC",
        rfc: accionista.rfc ?? "",
        curp: accionista.curp ?? "",
        numeroDum: "0000000000",
        compania: esMoral ? accionista.nombre : "",
        nombre1: esMoral ? nombres.nombre : "",
        nombre2: esMoral ? nombres.nombre_adicional : "",
        apellidoPaterno: esMoral ? nombres.apellido_paterno : "",
        apellidoMaterno: esMoral ? nombres.apellido_materno : "",
        porcentaje: accionista.porcentaje_acciones.toString(),
        direccion1: "",
        direccion2: "",
        colonia: "",
        municipio: "",
        ciudad: "",
        estado: "",
        codigoPostal: "",
        telefono: accionista.telefono,
        extension: "",
        fax: "",
        tipoCliente: esMoral ? "1" : "2",
        estadoExtranjero: "",
        paisDomicilio: "",
        filler: ""
      };
    });
  }
  mapAccionista(accionista) {
    let str = "";
    str += "AC" + this.format(accionista.identificadorSegmento, 2);
    str += "00" + this.format(accionista.rfc, 13);
    str += "01" + this.format(accionista.curp, 18);
    str += "02" + this.format(accionista.numeroDum, 10);
    str += "03" + this.format(accionista.compania, 150);
    str += "04" + this.format(accionista.nombre1, 30);
    str += "05" + this.format(accionista.nombre2, 30);
    str += "06" + this.format(accionista.apellidoPaterno, 25);
    str += "07" + this.format(accionista.apellidoMaterno, 25);
    str += "08" + this.format(accionista.porcentaje, 2);
    str += "09" + this.format(accionista.direccion1, 40);
    str += "10" + this.format(accionista.direccion2, 40);
    str += "11" + this.format(accionista.colonia, 60);
    str += "12" + this.format(accionista.municipio, 40);
    str += "13" + this.format(accionista.ciudad, 40);
    str += "14" + this.format(accionista.estado, 4);
    str += "15" + this.format(accionista.codigoPostal, 10);
    str += "16" + this.format(accionista.telefono, 11);
    str += "17" + this.format(accionista.extension, 8);
    str += "18" + this.format(accionista.fax, 11);
    str += "19" + this.format(accionista.tipoCliente, 1);
    str += "20" + this.format(accionista.estadoExtranjero, 40);
    str += "21" + this.format(accionista.paisDomicilio, 2);
    str += "22" + this.format(accionista.filler, 40);
    return str;
  }
};
_BuroAccionistaService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuroAccionistaService_BaseFactory;
  return function BuroAccionistaService_Factory(__ngFactoryType__) {
    return (\u0275BuroAccionistaService_BaseFactory || (\u0275BuroAccionistaService_BaseFactory = \u0275\u0275getInheritedFactory(_BuroAccionistaService)))(__ngFactoryType__ || _BuroAccionistaService);
  };
})();
_BuroAccionistaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroAccionistaService, factory: _BuroAccionistaService.\u0275fac, providedIn: "any" });
var BuroAccionistaService = _BuroAccionistaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroAccionistaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.credito.service.ts
var _BuroCreditoService = class _BuroCreditoService extends BuroSuperService {
  constructor() {
    super(...arguments);
    this.utilsCreditos = inject(UtilsService);
  }
  map(credito) {
    const rfc = this.utilsCreditos.rfcFromCredito(credito);
    const estadoCuenta = credito.estado_cuenta;
    const segmentos = [];
    const esReestructura = this.utilsCreditos.esReestructura(credito.folio);
    const saldoInsolutoCentavos = Math.ceil(estadoCuenta.saldo_vencido);
    const saldoInicialCentavos = Math.ceil(estadoCuenta.monto_total_mas_intereses);
    const importePagosCentavos = estadoCuenta.periodo_vigente?.pago_programado_total ? Math.ceil(estadoCuenta.periodo_vigente.pago_programado_total) : saldoInsolutoCentavos;
    const fechaApertura = this.utils.formatDateToDDMMYYYY(credito.fecha_convenio);
    const fechaUltimoPago = estadoCuenta.abonos_distribuidos?.length ? this.utils.formatDateToDDMMYYYY(estadoCuenta.abonos_distribuidos.at(-1).abono.fecha) : "00000000";
    const fechaReestructura = credito.fecha_reestructura ? this.utils.formatDateToDDMMYYYY(credito.fecha_reestructura) : "00000000";
    const fechaPrimerIncumplimiento = estadoCuenta.vencido_desde ? this.utils.formatDateToDDMMYYYY(estadoCuenta.vencido_desde) : "00000000";
    const fechaCarteraVencida = estadoCuenta.vencido_desde ? this.utils.formatDateToDDMMYYYY(estadoCuenta.vencido_desde) : "00000000";
    let claveObservacion = "    ";
    if (esReestructura)
      claveObservacion = "RA";
    if (estadoCuenta.saldo_vencido > 0)
      claveObservacion = "LG";
    if (estadoCuenta.total_a_liquidar <= 0)
      claveObservacion = "CC";
    return {
      identificadorSegmento: "CR",
      rfc: rfc.padEnd(13, " "),
      numeroExperienciasCrediticias: "000000",
      // Valor por defecto - ajustar según lógica de negocio
      numeroContrato: credito.id.toString().padEnd(25, " "),
      numeroContratoAnterior: this.utils.folioAnterior(credito).padEnd(25, " "),
      fechaApertura,
      plazoMeses: estadoCuenta.periodos.length.toString().padStart(6, "0"),
      tipoCredito: esReestructura ? "1323" : "6292",
      saldoInicial: saldoInicialCentavos.toString().padStart(20, "0"),
      moneda: "001",
      numeroPagos: estadoCuenta.periodos.length.toString().padStart(4, "0"),
      frecuenciaPagos: "00030",
      // 30 días = mensual
      importePagos: importePagosCentavos.toString().padStart(20, "0"),
      fechaUltimoPago,
      fechaReestructura,
      pagoEnEfectivo: "0".padStart(20, "0"),
      // Calcular si aplica
      fechaLiquidacion: "00000000",
      // Calcular si aplica
      quita: "0".padStart(20, "0"),
      // Calcular si aplica
      dacionEnPago: "0".padStart(20, "0"),
      // Calcular si aplica
      quebranto: "0".padStart(20, "0"),
      // Calcular si aplica
      claveObservacion,
      especiales: "N",
      // 'N' por defecto
      fechaPrimerIncumplimiento,
      saldoInsoluto: saldoInsolutoCentavos.toString().padStart(20, "0"),
      creditoMaximo: "0".padStart(20, "0"),
      // Calcular si aplica
      fechaCarteraVencida,
      filler: "".padEnd(40, " "),
      tipoResponsabilidad: " "
      // Agregado: campo requerido, espacio en blanco por defecto
    };
  }
  mapCredito(credito) {
    let str = "";
    str += "CR" + this.format(credito.identificadorSegmento, 2);
    str += "00" + this.format(credito.rfc, 13);
    str += "01" + this.format(credito.numeroExperienciasCrediticias, 6, true);
    str += "02" + this.format(credito.numeroContrato, 25);
    str += "03" + this.format(credito.numeroContratoAnterior, 25);
    str += "04" + this.format(credito.fechaApertura, 8);
    str += "05" + this.format(credito.plazoMeses, 6, true);
    str += "06" + this.format(credito.tipoCredito, 4);
    str += "07" + this.format(credito.saldoInicial, 20, true);
    str += "08" + this.format(credito.moneda, 3);
    str += "09" + this.format(credito.numeroPagos, 4, true);
    str += "10" + this.format(credito.frecuenciaPagos, 5, true);
    str += "11" + this.format(credito.importePagos, 20, true);
    str += "12" + this.format(credito.fechaUltimoPago, 8);
    str += "13" + this.format(credito.fechaReestructura, 8);
    str += "14" + this.format(credito.pagoEnEfectivo, 20, true);
    str += "15" + this.format(credito.fechaLiquidacion, 8);
    str += "16" + this.format(credito.quita, 20, true);
    str += "17" + this.format(credito.dacionEnPago, 20, true);
    str += "18" + this.format(credito.quebranto, 20, true);
    str += "19" + this.format(credito.claveObservacion, 4);
    str += "20" + this.format(credito.especiales, 1);
    str += "21" + this.format(credito.fechaPrimerIncumplimiento, 8);
    str += "22" + this.format(credito.saldoInsoluto, 20, true);
    str += "23" + this.format(credito.creditoMaximo, 20, true);
    str += "24" + this.format(credito.fechaCarteraVencida, 8);
    str += "25" + this.format(credito.filler, 40);
    str += "26" + this.format(credito.tipoResponsabilidad, 1);
    return str;
  }
};
_BuroCreditoService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuroCreditoService_BaseFactory;
  return function BuroCreditoService_Factory(__ngFactoryType__) {
    return (\u0275BuroCreditoService_BaseFactory || (\u0275BuroCreditoService_BaseFactory = \u0275\u0275getInheritedFactory(_BuroCreditoService)))(__ngFactoryType__ || _BuroCreditoService);
  };
})();
_BuroCreditoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroCreditoService, factory: _BuroCreditoService.\u0275fac, providedIn: "any" });
var BuroCreditoService = _BuroCreditoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroCreditoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.detalle.credito.service.ts
var _BuroDetalleCreditoService = class _BuroDetalleCreditoService extends BuroSuperService {
  constructor() {
    super(...arguments);
    this.utilsCreditos = inject(UtilsService);
  }
  map(credito) {
    const estado_cuenta = credito.estado_cuenta;
    const numeroContrato = (credito.folio || "").padEnd(25, " ");
    const vencidoDesde = new Date(estado_cuenta.vencido_desde);
    const diasVencimiento = this.format(vencidoDesde.getDay().toString(), 13);
    const saldoInsolutoPesos = estado_cuenta.saldo_vencido || 0;
    const cantidadCentavos = Math.round(saldoInsolutoPesos * 100);
    const cantidad = cantidadCentavos.toString();
    const interesesAcumuladosPesos = 0;
    const interesesCentavos = Math.round(interesesAcumuladosPesos * 100);
    const intereses = interesesCentavos.toString();
    const filler = " ".repeat(53);
    return {
      identificadorSegmento: "DE",
      rfc: this.utilsCreditos.rfcFromCredito(credito),
      numeroContrato,
      diasVencimiento,
      cantidad,
      intereses,
      filler
    };
  }
  mapDetalleCredito(detalle) {
    let str = "";
    str += "DE" + this.format(detalle.identificadorSegmento, 2);
    str += "00" + this.format(detalle.rfc, 13);
    str += "01" + this.format(detalle.numeroContrato, 25);
    str += "02" + this.format(detalle.diasVencimiento, 3);
    str += "03" + this.format(detalle.cantidad, 20, true);
    str += "04" + this.format(detalle.intereses, 20, true);
    str += "05" + this.format(detalle.filler, 53);
    return str;
  }
};
_BuroDetalleCreditoService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuroDetalleCreditoService_BaseFactory;
  return function BuroDetalleCreditoService_Factory(__ngFactoryType__) {
    return (\u0275BuroDetalleCreditoService_BaseFactory || (\u0275BuroDetalleCreditoService_BaseFactory = \u0275\u0275getInheritedFactory(_BuroDetalleCreditoService)))(__ngFactoryType__ || _BuroDetalleCreditoService);
  };
})();
_BuroDetalleCreditoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroDetalleCreditoService, factory: _BuroDetalleCreditoService.\u0275fac, providedIn: "any" });
var BuroDetalleCreditoService = _BuroDetalleCreditoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroDetalleCreditoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.aval.service.ts
var _BuroAvalService = class _BuroAvalService extends BuroSuperService {
  map(credito) {
    const aval = credito.aval;
    if (!aval) {
      return this.getEmptyAval();
    }
    const nombreCompleto = this.utils.separarNombreCompleto(aval.nombre);
    const domicilio = this.utils.formatDomicilio({
      calle: aval.calle || "",
      no_exterior: aval.no_exterior,
      no_interior: aval.no_interior
    });
    const esMoral = this.utils.esPersonaMoral(aval.rfc);
    const tipoCliente = esMoral ? "1" : "2";
    return {
      identificadorSegmento: "AV",
      rfc: aval.rfc?.padEnd(13, " ") || "",
      curp: aval.curp?.padEnd(18, " ") || "",
      numeroDum: "0000000000",
      compania: esMoral ? aval.nombre.padEnd(150, " ") : "".padEnd(150, " "),
      nombre1: !esMoral ? nombreCompleto.nombre.padEnd(30, " ") : "".padEnd(30, " "),
      nombre2: !esMoral ? nombreCompleto.nombre_adicional.padEnd(30, " ") : "".padEnd(30, " "),
      apellidoPaterno: !esMoral ? nombreCompleto.apellido_paterno.padEnd(25, " ") : "".padEnd(25, " "),
      apellidoMaterno: !esMoral ? nombreCompleto.apellido_materno.padEnd(25, " ") : "".padEnd(25, " "),
      direccion1: domicilio.linea1,
      direccion2: domicilio.linea2,
      colonia: aval.colonia?.padEnd(60, " ") || "",
      municipio: aval.localidad?.padEnd(40, " ") || "",
      // Usar localidad como municipio
      ciudad: "",
      // Campo requerido pero puede ir vacío si se tiene municipio
      estado: "BCN",
      // Por defecto Baja California Norte
      codigoPostal: aval.codigo_postal?.padEnd(10, " ") || "00000     ",
      telefono: "",
      // El aval no tiene teléfono en el modelo actual
      extension: "",
      fax: "",
      tipoCliente,
      estadoExtranjero: "",
      paisDomicilio: "MX",
      filler: "".padEnd(94, " ")
    };
  }
  getEmptyAval() {
    return {
      identificadorSegmento: "AV",
      rfc: "".padEnd(13, " "),
      curp: "".padEnd(18, " "),
      numeroDum: "0000000000",
      compania: "".padEnd(150, " "),
      nombre1: "".padEnd(30, " "),
      nombre2: "".padEnd(30, " "),
      apellidoPaterno: "".padEnd(25, " "),
      apellidoMaterno: "".padEnd(25, " "),
      direccion1: "".padEnd(40, " "),
      direccion2: "".padEnd(40, " "),
      colonia: "".padEnd(60, " "),
      municipio: "".padEnd(40, " "),
      ciudad: "".padEnd(40, " "),
      estado: "BCN",
      codigoPostal: "00000     ",
      telefono: "".padEnd(11, " "),
      extension: "".padEnd(8, " "),
      fax: "".padEnd(11, " "),
      tipoCliente: "2",
      estadoExtranjero: "".padEnd(40, " "),
      paisDomicilio: "MX",
      filler: "".padEnd(94, " ")
    };
  }
  mapAval(aval) {
    let str = "";
    str += "AV" + this.format(aval.identificadorSegmento, 2);
    str += "00" + this.format(aval.rfc, 13);
    str += "01" + this.format(aval.curp, 18);
    str += "02" + this.format(aval.numeroDum, 10);
    str += "03" + this.format(aval.compania, 150);
    str += "04" + this.format(aval.nombre1, 30);
    str += "05" + this.format(aval.nombre2, 30);
    str += "06" + this.format(aval.apellidoPaterno, 25);
    str += "07" + this.format(aval.apellidoMaterno, 25);
    str += "08" + this.format(aval.direccion1, 40);
    str += "09" + this.format(aval.direccion2, 40);
    str += "10" + this.format(aval.colonia, 60);
    str += "11" + this.format(aval.municipio, 40);
    str += "12" + this.format(aval.ciudad, 40);
    str += "13" + this.format(aval.estado, 4);
    str += "14" + this.format(aval.codigoPostal, 10, true);
    str += "15" + this.format(aval.telefono, 11);
    str += "16" + this.format(aval.extension, 8);
    str += "17" + this.format(aval.fax, 11);
    str += "18" + this.format(aval.tipoCliente, 1);
    str += "19" + this.format(aval.estadoExtranjero, 40);
    str += "20" + this.format(aval.paisDomicilio, 2);
    str += "21" + this.format(aval.filler, 94);
    return str;
  }
};
_BuroAvalService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuroAvalService_BaseFactory;
  return function BuroAvalService_Factory(__ngFactoryType__) {
    return (\u0275BuroAvalService_BaseFactory || (\u0275BuroAvalService_BaseFactory = \u0275\u0275getInheritedFactory(_BuroAvalService)))(__ngFactoryType__ || _BuroAvalService);
  };
})();
_BuroAvalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroAvalService, factory: _BuroAvalService.\u0275fac, providedIn: "any" });
var BuroAvalService = _BuroAvalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroAvalService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.cierre.service.ts
var _BuroCierreService = class _BuroCierreService extends BuroSuperService {
  map(segmentos) {
    return {
      identificadorSegmento: "TS",
      numeroCompanias: segmentos.length.toString(),
      cantidadSegmentosDE: segmentos.reduce((acc, seg) => acc + +seg.detalleCredito.cantidad, 0).toString(),
      filler: ""
    };
  }
  mapCierre(cierre) {
    let str = "";
    str += "TS" + this.format(cierre.identificadorSegmento, 2);
    str += "00" + this.format(cierre.numeroCompanias, 7, true);
    str += "01" + this.format(cierre.cantidadSegmentosDE, 30, true);
    str += "02" + this.format(cierre.filler, 53);
    return str;
  }
};
_BuroCierreService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BuroCierreService_BaseFactory;
  return function BuroCierreService_Factory(__ngFactoryType__) {
    return (\u0275BuroCierreService_BaseFactory || (\u0275BuroCierreService_BaseFactory = \u0275\u0275getInheritedFactory(_BuroCierreService)))(__ngFactoryType__ || _BuroCierreService);
  };
})();
_BuroCierreService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroCierreService, factory: _BuroCierreService.\u0275fac, providedIn: "any" });
var BuroCierreService = _BuroCierreService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroCierreService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.reporte.financiero.ts
var _BuroReporteFinancieroService = class _BuroReporteFinancieroService {
  constructor() {
    this.buroEncabezadoService = inject(BuroEncabezadoService);
    this.buroCompaniaService = inject(BuroCompaniaService);
    this.buroAccionistaService = inject(BuroAccionistaService);
    this.buroCreditoService = inject(BuroCreditoService);
    this.buroDetalleCreditoService = inject(BuroDetalleCreditoService);
    this.buroAvalService = inject(BuroAvalService);
    this.burroCierreService = inject(BuroCierreService);
  }
  /**
   * Genera el reporte completo para el Buró de Crédito
   * @param creditos - Array de créditos a reportar
   * @param encabezado - Información del encabezado del reporte
   * @returns String con el reporte completo en formato de texto
   */
  generarReporte(creditos, encabezado) {
    const segmentos = this.mapCreditosToSegmentos(creditos);
    console.log(segmentos);
    let reporte = this.buroEncabezadoService.mapEncabezado(encabezado);
    segmentos.forEach((segmento) => {
      reporte += this.buroCompaniaService.mapCompania(segmento.datosCliente);
      if (segmento.accionistas && segmento.accionistas.length > 0) {
        segmento.accionistas.forEach((accionista) => {
          reporte += this.buroAccionistaService.mapAccionista(accionista);
        });
      }
      if (segmento.credito) {
        reporte += this.buroCreditoService.mapCredito(segmento.credito);
      }
      reporte += this.buroDetalleCreditoService.mapDetalleCredito(segmento.detalleCredito);
      if (segmento.aveles) {
        reporte += this.buroAvalService.mapAval(segmento.aveles);
      }
    });
    const cierre = this.burroCierreService.map(segmentos);
    reporte += this.burroCierreService.mapCierre(cierre);
    return reporte;
  }
  /**
   * Convierte un array de créditos a un array de registros para el Buró de Crédito
   * @param creditos - Array de créditos a convertir
   * @returns Array de registros estructurados para el reporte del Buró de Crédito
   */
  mapCreditosToSegmentos(creditos) {
    return creditos.map((credito) => {
      const accionistasArray = this.buroAccionistaService.map(credito);
      return {
        datosCliente: this.buroCompaniaService.map(credito),
        accionistas: accionistasArray.length > 0 ? accionistasArray : void 0,
        credito: this.buroCreditoService.map(credito),
        detalleCredito: this.buroDetalleCreditoService.map(credito),
        aveles: credito.aval ? this.buroAvalService.map(credito) : void 0
      };
    });
  }
};
_BuroReporteFinancieroService.\u0275fac = function BuroReporteFinancieroService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuroReporteFinancieroService)();
};
_BuroReporteFinancieroService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroReporteFinancieroService, factory: _BuroReporteFinancieroService.\u0275fac, providedIn: "any" });
var BuroReporteFinancieroService = _BuroReporteFinancieroService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroReporteFinancieroService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/services/buro.reporte.comercial.ts
var _BuroReporteComercialService = class _BuroReporteComercialService {
  constructor() {
    this.buroEncabezadoService = inject(BuroEncabezadoService);
    this.buroCompaniaService = inject(BuroCompaniaService);
    this.buroCreditoService = inject(BuroCreditoService);
    this.buroDetalleCreditoService = inject(BuroDetalleCreditoService);
    this.burroCierreService = inject(BuroCierreService);
  }
  /**
   * Genera el reporte completo para el Buró de Crédito
   * @param creditos - Array de créditos a reportar
   * @param encabezado - Información del encabezado del reporte
   * @returns String con el reporte completo en formato de texto
   */
  generarReporte(creditos, encabezado) {
    const segmentos = this.mapCreditosToSegmentos(creditos);
    let reporte = this.buroEncabezadoService.mapEncabezado(encabezado);
    segmentos.forEach((segmento) => {
      reporte += this.buroCompaniaService.mapCompania(segmento.datosCliente);
      if (segmento.credito) {
        reporte += this.buroCreditoService.mapCredito(segmento.credito);
      }
      reporte += this.buroDetalleCreditoService.mapDetalleCredito(segmento.detalleCredito);
    });
    const cierre = this.burroCierreService.map(segmentos);
    reporte += this.burroCierreService.mapCierre(cierre);
    return reporte;
  }
  /**
   * Convierte un array de créditos a un array de registros para el Buró de Crédito
   * @param creditos - Array de créditos a convertir
   * @returns Array de registros estructurados para el reporte del Buró de Crédito
   */
  mapCreditosToSegmentos(creditos) {
    return creditos.map((credito) => {
      return {
        datosCliente: this.buroCompaniaService.map(credito),
        credito: this.buroCreditoService.map(credito),
        detalleCredito: this.buroDetalleCreditoService.map(credito)
      };
    });
  }
};
_BuroReporteComercialService.\u0275fac = function BuroReporteComercialService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuroReporteComercialService)();
};
_BuroReporteComercialService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuroReporteComercialService, factory: _BuroReporteComercialService.\u0275fac, providedIn: "any" });
var BuroReporteComercialService = _BuroReporteComercialService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroReporteComercialService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/main/informes/services/informe-buro.service.ts
var _InformeBuroService = class _InformeBuroService extends InformeCobranzaService {
  constructor() {
    super(...arguments);
    this.filter = (c, options) => {
      const estadoCuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(c, false, options?.fecha_fin);
      if (!estadoCuenta) {
        return false;
      }
      if (!c.creditos_pagos?.length) {
        return false;
      }
      if (!options) {
        return true;
      }
      if (options.producto_financiero_id && c.productos_financiero_id != options.producto_financiero_id) {
        return false;
      }
      const tieneSaldoPendiente = (estadoCuenta?.total_a_liquidar ?? 0) > 0;
      const estaLiquidado = (estadoCuenta?.total_a_liquidar ?? 0) <= 0;
      if (!tieneSaldoPendiente && estaLiquidado) {
        const fueLiquidadoEnMesActual = this.verificarLiquidadoEnMesActual(c, options);
        if (!fueLiquidadoEnMesActual) {
          return false;
        }
      }
      const fechaUltimaActividad = this.calcularFechaUltimaActividad(c, estadoCuenta);
      if (!this.verificarActividadReciente(fechaUltimaActividad)) {
        return false;
      }
      if (!options.fecha_inicio && !options.fecha_fin) {
        return true;
      }
      if (options.fecha_inicio) {
        const inicioDate = new Date(options.fecha_inicio);
        inicioDate.setHours(0, 0, 0, 0);
        if (fechaUltimaActividad < inicioDate) {
          return false;
        }
      }
      if (options.fecha_fin) {
        const finDate = new Date(options.fecha_fin);
        finDate.setHours(23, 59, 59, 999);
        if (fechaUltimaActividad > finDate) {
          return false;
        }
      }
      return true;
    };
  }
  verificarLiquidadoEnMesActual(credito, options) {
    if (!credito.abonos || credito.abonos.length === 0) {
      return false;
    }
    const ultimoAbono = credito.abonos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())[0];
    if (!ultimoAbono) {
      return false;
    }
    const fechaReporte = options.fecha_fin ? new Date(options.fecha_fin) : /* @__PURE__ */ new Date();
    const fechaUltimoAbono = new Date(ultimoAbono.fecha);
    const mismoMes = fechaUltimoAbono.getMonth() === fechaReporte.getMonth();
    const mismoAnio = fechaUltimoAbono.getFullYear() === fechaReporte.getFullYear();
    return mismoMes && mismoAnio;
  }
  calcularFechaUltimaActividad(credito, estadoCuenta) {
    const ultimoAbonoDistribuido = estadoCuenta.abonos_distribuidos?.at(-1)?.abono.fecha;
    if (ultimoAbonoDistribuido) {
      return new Date(ultimoAbonoDistribuido);
    }
    if (credito.abonos && credito.abonos.length > 0) {
      const ultimoAbono = credito.abonos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())[0];
      if (ultimoAbono) {
        return new Date(ultimoAbono.fecha);
      }
    }
    return new Date(credito.fecha_convenio ?? credito.liberado_fecha ?? credito.formalizado_fecha ?? credito.created_at);
  }
  verificarActividadReciente(fechaUltimaActividad) {
    const fechaActual = /* @__PURE__ */ new Date();
    const fechaLimite = new Date(fechaActual.getFullYear() - 6, fechaActual.getMonth(), fechaActual.getDate());
    return fechaUltimaActividad >= fechaLimite;
  }
};
_InformeBuroService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275InformeBuroService_BaseFactory;
  return function InformeBuroService_Factory(__ngFactoryType__) {
    return (\u0275InformeBuroService_BaseFactory || (\u0275InformeBuroService_BaseFactory = \u0275\u0275getInheritedFactory(_InformeBuroService)))(__ngFactoryType__ || _InformeBuroService);
  };
})();
_InformeBuroService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InformeBuroService, factory: _InformeBuroService.\u0275fac, providedIn: "root" });
var InformeBuroService = _InformeBuroService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InformeBuroService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/main/informes/buro-credito/buro-credito.component.ts
function BuroCreditoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-buro-encabezado", 4);
    \u0275\u0275listener("encabezadoConfirmado", function BuroCreditoComponent_Conditional_6_Template_app_buro_encabezado_encabezadoConfirmado_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.descargarInformeTxt($event));
    });
    \u0275\u0275elementEnd();
  }
}
var _BuroCreditoComponent = class _BuroCreditoComponent {
  constructor() {
    this.dataSource = [];
    this.options = {};
    this.progress = 0;
    this.isLoading = false;
    this.informeBuroController = inject(InformeBuroService);
    this.informeFinancieroBuro = inject(BuroReporteFinancieroService);
    this.informeComercialBuro = inject(BuroReporteComercialService);
    this.excel = inject(GeneradorExcelService);
  }
  /**
   * Inicializa el componente y suscribe al observable de progreso
   */
  ngOnInit() {
    this.informeBuroController.progress$.subscribe((p) => {
      this.progress = p;
    });
  }
  descargarExcel() {
    return __async(this, null, function* () {
      const data = yield this.informeBuroController.fetchDataMaped(this.options);
      this.excel.exportToExcel(data, "buro_credito_informe_excel");
    });
  }
  /**
   * Obtiene los datos de créditos según las opciones de filtrado
   * Actualiza el dataSource con los resultados obtenidos
   */
  fetchData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.dataSource = yield this.informeBuroController.fetchData(this.options);
      this.isLoading = false;
    });
  }
  /**
   * Genera y descarga el informe del Buró de Crédito en formato .txt
   *
   * Determina el tipo de informe (financiero o comercial) basado en el
   * tipoFormato del encabezado y genera el archivo correspondiente.
   *
   * @param encabezado - Configuración del encabezado del reporte
   */
  descargarInformeTxt(encabezado) {
    try {
      if (!this.dataSource || this.dataSource.length === 0) {
        alert("No hay datos para generar el informe. Por favor, consulte los datos primero.");
        return;
      }
      const esFinanciero = encabezado.tipoFormato === "1";
      let contenidoInforme;
      if (esFinanciero) {
        contenidoInforme = this.informeFinancieroBuro.generarReporte(this.dataSource, encabezado);
      } else {
        contenidoInforme = this.informeComercialBuro.generarReporte(this.dataSource, encabezado);
      }
      console.log(contenidoInforme);
      this.descargarArchivo(contenidoInforme, encabezado, esFinanciero);
    } catch (error) {
      console.error("Error al generar el informe:", error);
      alert("Ocurri\xF3 un error al generar el informe. Por favor, revise la consola para m\xE1s detalles.");
    }
  }
  /**
   * Crea y descarga un archivo .txt con el contenido del informe
   *
   * @param contenido - Contenido del informe a guardar
   * @param encabezado - Información del encabezado para el nombre del archivo
   * @param esFinanciero - Indica si es un informe financiero
   */
  descargarArchivo(contenido, encabezado, esFinanciero) {
    const tipoInforme = esFinanciero ? "FINANCIERO" : "COMERCIAL";
    const fecha = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const nombreArchivo = `BC_${tipoInforme}_${encabezado.nombreOtorgante?.replace(/\s+/g, "_")}_${fecha}.txt`;
    const blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log(`Informe ${tipoInforme} generado: ${nombreArchivo}`);
    console.log(`Tama\xF1o del archivo: ${contenido.length} caracteres`);
  }
};
_BuroCreditoComponent.\u0275fac = function BuroCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuroCreditoComponent)();
};
_BuroCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuroCreditoComponent, selectors: [["app-buro-credito"]], decls: 7, vars: 6, consts: [[1, "container-fluid", "p-3", "mt-1"], [1, "container-fluid", "p-3", "rounded", "shadow", "bg-white", "mb-3"], ["title", "Preparaci\xF3n de datos para el reporte de bur\xF3 de cr\xE9dito", 3, "isLoading", "progress", "dataLen"], [3, "download", "downloadExcel", "isLoading", "filtros"], [3, "encabezadoConfirmado"]], template: function BuroCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4");
    \u0275\u0275text(2, "Generacion de informe bur\xF3 de cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275element(4, "app-progress-bar-consolidado", 2);
    \u0275\u0275elementStart(5, "app-dates-picker", 3);
    \u0275\u0275listener("download", function BuroCreditoComponent_Template_app_dates_picker_download_5_listener() {
      return ctx.fetchData();
    })("downloadExcel", function BuroCreditoComponent_Template_app_dates_picker_downloadExcel_5_listener() {
      return ctx.descargarExcel();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, BuroCreditoComponent_Conditional_6_Template, 1, 0, "app-buro-encabezado");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("isLoading", ctx.isLoading)("progress", ctx.progress)("dataLen", ctx.dataSource.length);
    \u0275\u0275advance();
    \u0275\u0275property("isLoading", ctx.isLoading)("filtros", ctx.options);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dataSource.length ? 6 : -1);
  }
}, dependencies: [
  BuroEncabezadoComponent,
  ProgressBarConsolidadoComponent,
  DatesPickerComponent
], encapsulation: 2 });
var BuroCreditoComponent = _BuroCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuroCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-buro-credito", imports: [
      BuroEncabezadoComponent,
      ProgressBarConsolidadoComponent,
      DatesPickerComponent
    ], template: '<div class="container-fluid p-3 mt-1">\n    <h4>Generacion de informe bur\xF3 de cr\xE9dito</h4>\n    <div class="container-fluid p-3 rounded shadow bg-white mb-3">\n        <app-progress-bar-consolidado title="Preparaci\xF3n de datos para el reporte de bur\xF3 de cr\xE9dito"\n            [isLoading]="isLoading" [progress]="progress" [dataLen]="dataSource.length"></app-progress-bar-consolidado>\n        <app-dates-picker [isLoading]="isLoading" [filtros]="options" (download)="fetchData()" (downloadExcel)="descargarExcel()"></app-dates-picker>\n    </div>\n    @if (dataSource.length) {\n    <app-buro-encabezado (encabezadoConfirmado)="descargarInformeTxt($event)"></app-buro-encabezado>\n    }\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuroCreditoComponent, { className: "BuroCreditoComponent", filePath: "src/app/main/informes/buro-credito/buro-credito.component.ts", lineNumber: 31 });
})();

// src/app/main/informes/informes.routes.ts
var informesRoutes = [
  {
    path: "",
    component: InformesComponent,
    children: [
      { path: "", redirectTo: "periodo", pathMatch: "full" },
      {
        path: "periodo",
        component: InformePeriodoComponent
      },
      {
        path: "ejercicio",
        component: InformeEjercicioComponent
      },
      {
        path: "monto-genero",
        component: InformeMontoGeneroComponent
      },
      {
        path: "empleos",
        component: InformeEmpleosComponent
      },
      {
        path: "sectores-economicos",
        component: InformeSectoresComponent
      },
      {
        path: "programa",
        component: InformePeriodoComponent
      },
      {
        title: "Sesionados",
        path: "sesionados",
        component: SesionadosComponent
      },
      {
        title: "Hist\xF3rico",
        path: "historico",
        component: DashboardHistoricoComponent
      },
      {
        title: "Informe jur\xEDdicos",
        path: "juridico",
        component: InformeTablaJuridicosComponent
      },
      {
        title: "Informe cobranza",
        component: InformeCobranzaComponent,
        path: "cobranza"
      },
      {
        title: "Pagos",
        component: InformePagosComponent,
        path: "pagos"
      },
      {
        title: "Buro",
        component: BuroCreditoComponent,
        path: "buro"
      }
    ]
  }
];
export {
  informesRoutes
};
//# sourceMappingURL=chunk-CEO3UHGH.js.map
