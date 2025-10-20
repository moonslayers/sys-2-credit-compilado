import {
  ViewPeriodosComponent
} from "./chunk-X4LPBF5V.js";
import {
  ViewRelacionAbonosComponent
} from "./chunk-JF4XKC7P.js";
import {
  estadoCuenta
} from "./chunk-L6WZXWMU.js";
import {
  DatoPersonaFisicaService
} from "./chunk-ZEGUFUIC.js";
import {
  CREDITOS_TABLE_HEADERS_BASIC
} from "./chunk-2RGH5ZMW.js";
import "./chunk-CANKKCBN.js";
import {
  ViewGestionesCobroComponent
} from "./chunk-XMZ66OSG.js";
import {
  ViewRelacionConveniosComponent
} from "./chunk-B5NEAJIS.js";
import {
  EjecucionCobroComponent,
  EventoCobroAsignacionService
} from "./chunk-2FRR3TXC.js";
import "./chunk-BBNJFIFW.js";
import "./chunk-3HCUHHOO.js";
import {
  ViewResumenCreditoComponent
} from "./chunk-PHVA5LMX.js";
import {
  DatoPersonaMoralService
} from "./chunk-4YG63BQX.js";
import "./chunk-DJKNR32H.js";
import {
  CollapsableComponent
} from "./chunk-VUVNDSSC.js";
import {
  CREDITOS_ADVANCED_SEARCH
} from "./chunk-3SMKUHIE.js";
import {
  BuscadorCreditosComponent
} from "./chunk-5AHBH7ZX.js";
import "./chunk-MJF6VG42.js";
import "./chunk-LROCG2JY.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  LeafletComponent
} from "./chunk-ITPEKJSE.js";
import "./chunk-SDTK5VY4.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import "./chunk-MLBICDWK.js";
import "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import {
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  DatePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/main/estado-cuenta/list-estado-cuentas/list-estado-cuentas.component.ts
var _c0 = () => ["creditosPagos", "productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales", "estadosCuenta"];
var _c1 = () => ({ filtro: "estado" });
var TABLA_DEF = {
  emptyMsg: "La tabla esta vac\xEDa, realiza una busqueda para comenzar.",
  columns: [
    {
      key: "id",
      header: "Id Cr\xE9dito"
    },
    {
      key: "estados_cuenta",
      header: "Saldo Vencido",
      subKey: "saldo_vencido",
      pipe: "currency"
    },
    {
      key: "estados_cuenta",
      header: "Vencido desde",
      subKey: "vencido_desde",
      pipe: "date"
    },
    {
      key: "estados_cuenta",
      header: "Pagos Vencidos",
      function: (estado) => {
        return (estado.pagos_requeridos - estado.pagos_realizados).toString();
      }
    },
    ...CREDITOS_TABLE_HEADERS_BASIC
  ]
};
var EDITAR_BUTTON = {
  style: {
    button: "btn btn-sm btn-info",
    icon: "bi bi-eye-fill"
  }
};
var ADVANCED_SEARCH = [
  {
    label: "Ctd Pagos Vencidos",
    key: "estadosCuenta",
    type: "text",
    conditionals: [
      {
        key: "pagos_vencidos",
        operator: "="
      }
    ]
  },
  ...CREDITOS_ADVANCED_SEARCH
];
var _ListEstadoCuentasComponent = class _ListEstadoCuentasComponent {
  constructor(creditoController, router) {
    this.creditoController = creditoController;
    this.router = router;
    this.tabla = TABLA_DEF;
    this.edit = EDITAR_BUTTON;
    this.advancedSearch = ADVANCED_SEARCH;
  }
  onRowButtonClick(event) {
    this.router.navigate(["/main/creditos/contratos/" + event.row.id]);
  }
};
_ListEstadoCuentasComponent.\u0275fac = function ListEstadoCuentasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListEstadoCuentasComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(Router));
};
_ListEstadoCuentasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListEstadoCuentasComponent, selectors: [["app-list-estado-cuentas"]], decls: 1, vars: 15, consts: [["title", "Estados de Cuenta", 3, "rowButtonClickEvent", "startEmpty", "tableDefinition", "controller", "showBarraButtons", "rowEliminar", "rowEditarButton", "rowEditarRoute", "relations", "getExtra", "advancedSearch", "agregar", "eliminar", "eliminados"]], template: function ListEstadoCuentasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("rowButtonClickEvent", function ListEstadoCuentasComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onRowButtonClick($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("startEmpty", true)("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("showBarraButtons", true)("rowEliminar", false)("rowEditarButton", ctx.edit)("rowEditarRoute", "/main/estado-cuenta/resumen/")("relations", \u0275\u0275pureFunction0(13, _c0))("getExtra", \u0275\u0275pureFunction0(14, _c1))("advancedSearch", ctx.advancedSearch)("agregar", false)("eliminar", false)("eliminados", false);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListEstadoCuentasComponent = _ListEstadoCuentasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListEstadoCuentasComponent, [{
    type: Component,
    args: [{ selector: "app-list-estado-cuentas", imports: [
      TablaComponent
    ], template: `<app-tabla 
title="Estados de Cuenta"
[startEmpty]="true"
[tableDefinition]="tabla"
[controller]="creditoController"
[showBarraButtons]="true"
[rowEliminar]="false"
[rowEditarButton]="edit"
[rowEditarRoute]="'/main/estado-cuenta/resumen/'"
[relations]="['creditosPagos','productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales','estadosCuenta']"
[getExtra]="{filtro:'estado'}"
[advancedSearch]="advancedSearch"
[agregar]="false"
[eliminar]="false"
[eliminados]="false"
(rowButtonClickEvent)="onRowButtonClick($event)"
/>` }]
  }], () => [{ type: CreditoService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListEstadoCuentasComponent, { className: "ListEstadoCuentasComponent", filePath: "src/app/main/estado-cuenta/list-estado-cuentas/list-estado-cuentas.component.ts", lineNumber: 69 });
})();

// src/app/main/estado-cuenta/resumen-estado-cuenta/resumen-estado-cuenta.component.ts
function ResumenEstadoCuentaComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275element(2, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275element(4, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275element(6, "div", 7);
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 6)(9, "div", 9);
    \u0275\u0275element(10, "span", 5)(11, "br")(12, "span", 10)(13, "br")(14, "span", 11)(15, "br")(16, "span", 12)(17, "br")(18, "span", 13)(19, "br")(20, "span", 5)(21, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275element(23, "span", 5)(24, "br")(25, "span", 10)(26, "br")(27, "span", 11)(28, "br")(29, "span", 12)(30, "br")(31, "span", 13)(32, "br")(33, "span", 5)(34, "br");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 6)(36, "div", 15)(37, "div", 6)(38, "div", 9);
    \u0275\u0275element(39, "span", 10)(40, "br")(41, "span", 11)(42, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 14);
    \u0275\u0275element(44, "span", 16)(45, "br")(46, "span", 13)(47, "br");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 15)(49, "div", 6)(50, "div", 9);
    \u0275\u0275element(51, "span", 5)(52, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 14);
    \u0275\u0275element(54, "span", 10)(55, "br");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 17)(57, "div", 18);
    \u0275\u0275element(58, "span", 10)(59, "br");
    \u0275\u0275elementStart(60, "div", 2)(61, "div", 9);
    \u0275\u0275element(62, "span", 5)(63, "br")(64, "span", 11)(65, "br")(66, "span", 10)(67, "br")(68, "span", 5)(69, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 19);
    \u0275\u0275element(71, "span", 16)(72, "br")(73, "span", 13)(74, "br")(75, "span", 10)(76, "br")(77, "span", 20)(78, "br");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(79, "div", 21)(80, "div", 22)(81, "div", 6)(82, "div", 9);
    \u0275\u0275element(83, "span", 10)(84, "br")(85, "span", 11)(86, "br")(87, "span", 5)(88, "br")(89, "span", 13)(90, "br")(91, "span", 10)(92, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 14);
    \u0275\u0275element(94, "span", 16)(95, "br")(96, "span", 13)(97, "br")(98, "span", 10)(99, "br")(100, "span", 11)(101, "br")(102, "span", 5)(103, "br");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "div", 22)(105, "div", 6)(106, "div", 9);
    \u0275\u0275element(107, "span", 10)(108, "br")(109, "span", 11)(110, "br")(111, "span", 5)(112, "br")(113, "span", 13)(114, "br")(115, "span", 10)(116, "br")(117, "span", 11)(118, "br")(119, "span", 5)(120, "br")(121, "span", 13)(122, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 14);
    \u0275\u0275element(124, "span", 16)(125, "br")(126, "span", 13)(127, "br")(128, "span", 10)(129, "br")(130, "span", 11)(131, "br")(132, "span", 5)(133, "br")(134, "span", 13)(135, "br")(136, "span", 10)(137, "br")(138, "span", 11)(139, "br");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(140, "span", 23);
    \u0275\u0275elementStart(141, "div", 24)(142, "table", 25)(143, "thead", 26)(144, "tr")(145, "th");
    \u0275\u0275element(146, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "th");
    \u0275\u0275element(148, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "th");
    \u0275\u0275element(150, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "th");
    \u0275\u0275element(152, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "th");
    \u0275\u0275element(154, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "th");
    \u0275\u0275element(156, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "th");
    \u0275\u0275element(158, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "th");
    \u0275\u0275element(160, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "th");
    \u0275\u0275element(162, "span", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(163, "tbody")(164, "tr")(165, "td");
    \u0275\u0275element(166, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "td");
    \u0275\u0275element(168, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "td");
    \u0275\u0275element(170, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "td");
    \u0275\u0275element(172, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "td");
    \u0275\u0275element(174, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "td");
    \u0275\u0275element(176, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "td");
    \u0275\u0275element(178, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "td");
    \u0275\u0275element(180, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "td");
    \u0275\u0275element(182, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "tr")(184, "td");
    \u0275\u0275element(185, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "td");
    \u0275\u0275element(187, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "td");
    \u0275\u0275element(189, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "td");
    \u0275\u0275element(191, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "td");
    \u0275\u0275element(193, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "td");
    \u0275\u0275element(195, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "td");
    \u0275\u0275element(197, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "td");
    \u0275\u0275element(199, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "td");
    \u0275\u0275element(201, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(202, "tr")(203, "td");
    \u0275\u0275element(204, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "td");
    \u0275\u0275element(206, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "td");
    \u0275\u0275element(208, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "td");
    \u0275\u0275element(210, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "td");
    \u0275\u0275element(212, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "td");
    \u0275\u0275element(214, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "td");
    \u0275\u0275element(216, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "td");
    \u0275\u0275element(218, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "td");
    \u0275\u0275element(220, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(221, "tr")(222, "td");
    \u0275\u0275element(223, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "td");
    \u0275\u0275element(225, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "td");
    \u0275\u0275element(227, "span", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "td");
    \u0275\u0275element(229, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(230, "td");
    \u0275\u0275element(231, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "td");
    \u0275\u0275element(233, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(234, "td");
    \u0275\u0275element(235, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(236, "td");
    \u0275\u0275element(237, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "td");
    \u0275\u0275element(239, "span", 5);
    \u0275\u0275elementEnd()()()()()();
  }
}
function ResumenEstadoCuentaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 28)(2, "b");
    \u0275\u0275text(3, "FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 29)(8, "span", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Estado de cuenta al ", \u0275\u0275pipeBind2(6, 2, ctx_r0.today, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("El cr\xE9dito ", ctx_r0.credito.id, " no ha sido liberado todav\xEDa.");
  }
}
function ResumenEstadoCuentaComponent_Conditional_2_For_273_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const abono_r2 = ctx.$implicit;
    const \u0275$index_962_r3 = ctx.$index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_962_r3 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, abono_r2.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, abono_r2.monto));
  }
}
function ResumenEstadoCuentaComponent_Conditional_2_Conditional_274_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49)(2, "h4", 50)(3, "b");
    \u0275\u0275text(4, "No hay abonos en este cr\xE9dito");
    \u0275\u0275elementEnd()()()();
  }
}
function ResumenEstadoCuentaComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h3", 28)(2, "b");
    \u0275\u0275text(3, "FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 31);
    \u0275\u0275element(9, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 6)(12, "div", 33)(13, "div", 6)(14, "div", 34);
    \u0275\u0275text(15, " Fecha de impresi\xF3n: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 14)(17, "b");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 6)(22, "div", 34);
    \u0275\u0275text(23, " Cr\xE9dito: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14)(25, "b")(26, "a", 35);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 6)(30, "div", 34);
    \u0275\u0275text(31, " Programa: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 14)(33, "b");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 6)(37, "div", 34);
    \u0275\u0275text(38, " Folio: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 14)(40, "b");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 6)(44, "div", 34);
    \u0275\u0275text(45, " Referencia Bancaria: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 14)(47, "b");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 6)(51, "div", 34);
    \u0275\u0275text(52, " Status: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 14)(54, "b");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "br");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(57, "div", 6)(58, "div", 15)(59, "div", 6)(60, "div", 36);
    \u0275\u0275text(61, " Nombre del acreditado: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 37)(63, "b");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 6)(66, "div", 36);
    \u0275\u0275text(67, " Nombre comercial: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 37)(69, "b");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(71, "div", 15)(72, "div", 6)(73, "div", 36);
    \u0275\u0275text(74, " RFC: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 38)(76, "b");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(78, "div", 17)(79, "div", 39)(80, "div", 6)(81, "div", 40)(82, "b")(83, "u");
    \u0275\u0275text(84, "DATOS DEL ACREDITADO PARTICULAR");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 2)(86, "div", 33)(87, "div", 6)(88, "div", 34);
    \u0275\u0275text(89, " Calle: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 14)(91, "b");
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275element(93, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 6)(95, "div", 34);
    \u0275\u0275text(96, " Colonia: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "div", 14)(98, "b");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275element(100, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 6)(102, "div", 34);
    \u0275\u0275text(103, " Localidad: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 14)(105, "b");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 6)(109, "div", 34);
    \u0275\u0275text(110, " Municipio: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 14)(112, "b");
    \u0275\u0275text(113);
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "br");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(115, "div", 21)(116, "div", 22)(117, "div", 6)(118, "div", 33)(119, "div", 6)(120, "div", 41);
    \u0275\u0275text(121, " Fecha de apertura: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 14)(123, "b");
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(126, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 6)(128, "div", 41);
    \u0275\u0275text(129, " Fecha T\xE9rmino: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 14)(131, "b");
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(134, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 6)(136, "div", 41);
    \u0275\u0275text(137, " Capital: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "div", 14)(139, "b");
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(142, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 6)(144, "div", 41);
    \u0275\u0275text(145, " Plazo contratado: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "div", 14)(147, "b");
    \u0275\u0275text(148);
    \u0275\u0275elementEnd();
    \u0275\u0275element(149, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 6)(151, "div", 41);
    \u0275\u0275text(152, " Tasa de inter\xE9s ordinario: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "div", 14)(154, "b");
    \u0275\u0275text(155);
    \u0275\u0275elementEnd();
    \u0275\u0275element(156, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 6)(158, "div", 41);
    \u0275\u0275text(159, " Gracia a capital: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "div", 14)(161, "b");
    \u0275\u0275text(162);
    \u0275\u0275elementEnd();
    \u0275\u0275element(163, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 6)(165, "div", 41);
    \u0275\u0275text(166, " Tipo: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "div", 14)(168, "b");
    \u0275\u0275text(169);
    \u0275\u0275elementEnd();
    \u0275\u0275element(170, "br");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(171, "div", 22)(172, "div", 6)(173, "div", 33)(174, "div", 6)(175, "div", 41);
    \u0275\u0275text(176, " Monto Total Pagado: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "div", 14)(178, "b");
    \u0275\u0275text(179);
    \u0275\u0275pipe(180, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(181, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(182, "div", 6)(183, "div", 41);
    \u0275\u0275text(184, " Liquidar sin Moratorios: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "div", 14)(186, "b");
    \u0275\u0275text(187);
    \u0275\u0275pipe(188, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(189, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(190, "div", 6)(191, "div", 41);
    \u0275\u0275text(192, " Capital por vencer: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "div", 14)(194, "b");
    \u0275\u0275text(195);
    \u0275\u0275pipe(196, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(197, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "div", 6)(199, "div", 41);
    \u0275\u0275text(200, " Tasa Moratoria Mensual: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "div", 14)(202, "b");
    \u0275\u0275text(203);
    \u0275\u0275elementEnd();
    \u0275\u0275element(204, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(205, "div", 6)(206, "div", 41);
    \u0275\u0275text(207, " Inter\xE9s Moratorio: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "div", 14)(209, "b");
    \u0275\u0275text(210);
    \u0275\u0275pipe(211, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(212, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "div", 6)(214, "div", 41);
    \u0275\u0275text(215, " Fecha \xDAltimo Pago: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "div", 14)(217, "b");
    \u0275\u0275text(218);
    \u0275\u0275elementEnd();
    \u0275\u0275element(219, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(220, "div", 6)(221, "div", 41);
    \u0275\u0275text(222, " Importe \xDAltimo Pago: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "div", 14)(224, "b");
    \u0275\u0275text(225);
    \u0275\u0275pipe(226, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(227, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(228, "div", 6)(229, "div", 41);
    \u0275\u0275text(230, " Mensualidades cubiertas: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "div", 14)(232, "b");
    \u0275\u0275text(233);
    \u0275\u0275elementEnd();
    \u0275\u0275element(234, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(235, "div", 6)(236, "div", 41);
    \u0275\u0275text(237, " Mensualidades vencidas: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "div", 14)(239, "b");
    \u0275\u0275text(240);
    \u0275\u0275elementEnd();
    \u0275\u0275element(241, "br");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(242, "h5", 42)(243, "b");
    \u0275\u0275text(244, "Relaci\xF3n de cuotas pagadas, vencidas y vigentes");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(245, "app-view-periodos", 43);
    \u0275\u0275elementStart(246, "div", 44)(247, "div", 45);
    \u0275\u0275text(248, "Total Saldo Vencido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "div", 46);
    \u0275\u0275text(250);
    \u0275\u0275pipe(251, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(252, "div", 44)(253, "div", 45);
    \u0275\u0275text(254, "Total Saldo Vigente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(255, "div", 46);
    \u0275\u0275text(256);
    \u0275\u0275pipe(257, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "div", 24)(259, "h5", 42)(260, "b");
    \u0275\u0275text(261, "Relaci\xF3n de abonos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(262, "table", 47)(263, "thead")(264, "tr")(265, "th");
    \u0275\u0275text(266, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "th");
    \u0275\u0275text(268, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(269, "th");
    \u0275\u0275text(270, "Monto abono");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(271, "tbody");
    \u0275\u0275repeaterCreate(272, ResumenEstadoCuentaComponent_Conditional_2_For_273_Template, 10, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(274, ResumenEstadoCuentaComponent_Conditional_2_Conditional_274_Template, 5, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(275, "tfoot")(276, "tr")(277, "td", 48)(278, "b");
    \u0275\u0275text(279, "Total de abonos:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(280, "td")(281, "b");
    \u0275\u0275text(282);
    \u0275\u0275pipe(283, "currency");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Estado de cuenta al ", \u0275\u0275pipeBind2(6, 38, ctx_r0.today, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 41, ctx_r0.today, "dd/MM/yyyy"));
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", "/main/creditos/validar/" + ctx_r0.credito.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.credito.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.credito.productos_financieros == null ? null : ctx_r0.credito.productos_financieros.alias);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r0.credito.productos_financieros == null ? null : ctx_r0.credito.productos_financieros.alias == null ? null : (tmp_6_0 = ctx_r0.credito.productos_financieros.alias.substring(0, 4)) == null ? null : tmp_6_0.replaceAll(" ", ""), "-", ctx_r0.credito.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.credito.referencia_bancaria);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.utils.creditoStatus(ctx_r0.credito));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.utils.nombreClienteFromCredito(ctx_r0.credito));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.utils.nombreNegocioFromCredito(ctx_r0.credito));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.utils.rfcFromCredito(ctx_r0.credito), " ");
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate2("", (ctx_r0.credito.datos_persona_fisica == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales.calle) ?? (ctx_r0.credito.datos_personas_morales == null ? null : ctx_r0.credito.datos_personas_morales.calle), " ", (ctx_r0.credito.datos_persona_fisica == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales.no_exterior) ?? (ctx_r0.credito.datos_personas_morales == null ? null : ctx_r0.credito.datos_personas_morales.no_exterior));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r0.credito.datos_persona_fisica == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales.colonia) ?? (ctx_r0.credito.datos_personas_morales == null ? null : ctx_r0.credito.datos_personas_morales.colonia));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r0.credito.datos_persona_fisica == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales.localidad) ?? (ctx_r0.credito.datos_personas_morales == null ? null : ctx_r0.credito.datos_personas_morales.localidad));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((ctx_r0.credito.datos_persona_fisica == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales.ciudades == null ? null : ctx_r0.credito.datos_persona_fisica.datos_personales.ciudades.nombre) ?? (ctx_r0.credito.datos_personas_morales == null ? null : ctx_r0.credito.datos_personas_morales.ciudades == null ? null : ctx_r0.credito.datos_personas_morales.ciudades.nombre));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 44, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.fechaApertura, "dd/MM/yyyy"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(133, 47, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.fechaTermino, "dd/MM/yyyy"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(141, 50, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.capital));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.plazoContratado);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.tasaInteresOrdinarioMensual, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.graciaACapital);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.tipoConvenio);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(180, 52, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.montoTotalPagado));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(188, 54, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.liquidarSinMoratorios));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(196, 56, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.capitalPorVencer));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.tasaMoratoriaMensual, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(211, 58, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.interesMoratorioTotal));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.fechaUltimoPago);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(226, 60, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.importeUltimoPago));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.mensualidadesCubiertas);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.mensualidadesVencidas);
    \u0275\u0275advance(5);
    \u0275\u0275property("credito", ctx_r0.credito);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(251, 62, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.totalSaldoVencido), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(257, 64, ctx_r0.estadoCuenta == null ? null : ctx_r0.estadoCuenta.totalSaldoVigente), " ");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r0.credito.abonos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(ctx_r0.credito.abonos == null ? null : ctx_r0.credito.abonos.length) ? 274 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(283, 66, ctx_r0.totalAbonos()));
  }
}
var _ResumenEstadoCuentaComponent = class _ResumenEstadoCuentaComponent {
  constructor(creditoController, route, utils, utilsEstadoCuenta) {
    this.creditoController = creditoController;
    this.route = route;
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.today = (/* @__PURE__ */ new Date()).toISOString();
    this.showCondonacion = false;
    this.detalleKeys = [
      "vencimiento",
      "capital",
      "interes_moratorio",
      "interes_normal",
      "adeudo_total"
    ];
    this.convenioTiposTransform = {
      "PAGO": "CONVENIO DE PAGO",
      "EXTRAJUDICIAL": "CONVENIO EXTRAJUDICIAL",
      "JUDICIAL": "CONVENIO JUDICIAL",
      "REESTRUCTURA": "CONVENIO DE REESTRUCTURA"
    };
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const credito_id = this.utils.intOrNull(params.get("credito_id"));
      if (credito_id) {
        this.credito = yield this.creditoController.find(credito_id, [
          "estadoCuenta",
          "datosPersonaFisica.negocios",
          "datosPersonaFisica.datosPersonales.ciudades",
          "datosPersonasMorales.ciudades",
          "productosFinancieros.plazos",
          "inversionesProgramas",
          "abonos",
          "creditosPagos"
        ], false);
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes["credito"] && this.credito) {
      this.creditoController.parseDetalleEstadoCuenta(this.credito);
      this.estadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaCliente(this.credito);
      console.log(this.credito);
    }
  }
  totalAbonos() {
    return this.credito?.abonos?.reduce((acc, item) => {
      return acc + item.monto;
    }, 0) ?? 0;
  }
};
_ResumenEstadoCuentaComponent.\u0275fac = function ResumenEstadoCuentaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResumenEstadoCuentaComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService));
};
_ResumenEstadoCuentaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumenEstadoCuentaComponent, selectors: [["app-resumen-estado-cuenta"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 3, consts: [[1, "container-xxl", "my-2", "rounded", "bg-light", "shadow", "p-5", "placeholder-glow"], [1, "container-xxl", "my-2", "rounded", "bg-white", "shadow", "p-5"], [1, "row", "justify-content-center"], [1, "placeholder", "col-8", "fs-3"], [1, "row", "justify-content-center", "mt-2"], [1, "placeholder", "col-4"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-5", "col-lg-4", "align-self-center", "placeholder", "image-placeholder", "p-2"], [1, "col-12", "col-sm", "p-2"], [1, "col", "pe-1", "text-end"], [1, "placeholder", "col-6"], [1, "placeholder", "col-5"], [1, "placeholder", "col-3"], [1, "placeholder", "col-7"], [1, "col", "ps-1", "text-uppercase"], [1, "col-12", "col-sm", "p-1"], [1, "placeholder", "col-8"], [1, "row", "justify-content-center", "pb-3", "border-bottom"], [1, "col-12", "col-sm", "p-2", "text-center"], [1, "col", "ps-1", "text-start", "text-uppercase"], [1, "placeholder", "col-9"], [1, "row", "pt-3"], [1, "col-12", "col-sm-6", "p-2"], [1, "text-center", "col-7", "fs-4", "placeholder", "mt-4"], [1, "table-responsive"], [1, "table", "table-bordered", "text-center", "table-sm"], [1, "table-light"], [1, "placeholder", "col-2"], [1, "text-center"], [1, "p-5", "text-center", "mt-5"], [1, "h4"], [1, "col-12", "col-sm-6", "col-md-5", "col-lg-4", "align-self-center", "p-2"], ["src", "../../../../assets/fondo_completo.png", "alt", "", 1, "img-fluid"], [1, "col", "p-1"], [1, "col", "text-end", "pe-1"], [3, "routerLink"], [1, "col-6", "text-end", "pe-1"], [1, "col-6"], [1, "col-6", "text-uppercase"], [1, "col-12", "p-2"], [1, "col", "text-center"], [1, "col", "text-end", "pe-1", "text-capitalize"], [1, "text-center", "mt-4"], [3, "credito"], [1, "row", "text-end", "fw-bold"], [1, "col"], [1, "col-6", "col-sm-5", "col-md-4", "col-lg-3", "border", "border-5", "border-dark", "text-end"], [1, "table", "table-bordered", "text-center"], ["colspan", "2", 1, "text-end"], ["colspan", "3"], [1, "p-5"]], template: function ResumenEstadoCuentaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ResumenEstadoCuentaComponent_Conditional_0_Template, 240, 0, "div", 0);
    \u0275\u0275conditionalCreate(1, ResumenEstadoCuentaComponent_Conditional_1_Template, 10, 5, "div", 1);
    \u0275\u0275conditionalCreate(2, ResumenEstadoCuentaComponent_Conditional_2_Template, 284, 68, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.credito ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito && !ctx.credito.liberado_fecha ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito && ctx.credito.liberado_fecha ? 2 : -1);
  }
}, dependencies: [
  DatePipe,
  CurrencyPipe,
  RouterLink,
  ViewPeriodosComponent
], styles: ["\n\n.image-placeholder[_ngcontent-%COMP%] {\n  height: 10rem;\n}\n/*# sourceMappingURL=resumen-estado-cuenta.component.css.map */"] });
var ResumenEstadoCuentaComponent = _ResumenEstadoCuentaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumenEstadoCuentaComponent, [{
    type: Component,
    args: [{ selector: "app-resumen-estado-cuenta", imports: [
      DatePipe,
      CurrencyPipe,
      RouterLink,
      DatePipe,
      ViewPeriodosComponent
    ], template: `@if (!credito) {
  <div class="container-xxl my-2 rounded bg-light shadow p-5 placeholder-glow">
    <div class="row justify-content-center">
      <span class="placeholder col-8 fs-3"></span>
    </div>
    <div class="row justify-content-center mt-2">
      <span class="placeholder col-4 "></span>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-5 col-lg-4 align-self-center placeholder image-placeholder p-2">
      </div>
      <div class="col-12 col-sm p-2">
        <div class="row">
          <div class="col pe-1 text-end">
            <span class="placeholder col-4"></span><br>
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
            <span class="placeholder col-3"></span><br>
            <span class="placeholder col-7"></span><br>
            <span class="placeholder col-4"></span><br>
          </div>
          <div class="col ps-1 text-uppercase">
            <span class="placeholder col-4"></span><br>
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
            <span class="placeholder col-3"></span><br>
            <span class="placeholder col-7"></span><br>
            <span class="placeholder col-4"></span><br>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm p-1">
        <div class="row">
          <div class="col pe-1 text-end">
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
          </div>
          <div class="col ps-1 text-uppercase">
            <span class="placeholder col-8"></span><br>
            <span class="placeholder col-7"></span><br>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm p-1">
        <div class="row">
          <div class="col pe-1 text-end">
            <span class="placeholder col-4"></span><br>
          </div>
          <div class="col ps-1 text-uppercase">
            <span class="placeholder col-6"></span><br>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center pb-3 border-bottom">
      <div class="col-12 col-sm p-2 text-center">
        <span class="placeholder col-6"></span><br>
        <div class="row justify-content-center">
          <div class="col pe-1 text-end">
            <span class="placeholder col-4"></span><br>
            <span class="placeholder col-5"></span><br>
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-4"></span><br>
          </div>
          <div class="col ps-1 text-start text-uppercase">
            <span class="placeholder col-8"></span><br>
            <span class="placeholder col-7"></span><br>
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-9"></span><br>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12 col-sm-6 p-2">
        <div class="row">
          <div class="col pe-1 text-end">
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
            <span class="placeholder col-4"></span><br>
            <span class="placeholder col-7"></span><br>
            <span class="placeholder col-6"></span><br>
          </div>
          <div class="col ps-1 text-uppercase">
            <span class="placeholder col-8"></span><br>
            <span class="placeholder col-7"></span><br>
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
            <span class="placeholder col-4"></span><br>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 p-2">
        <div class="row">
          <div class="col pe-1 text-end">
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
            <span class="placeholder col-4"></span><br>
            <span class="placeholder col-7"></span><br>
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
            <span class="placeholder col-4"></span><br>
            <span class="placeholder col-7"></span><br>
          </div>
          <div class="col ps-1 text-uppercase">
            <span class="placeholder col-8"></span><br>
            <span class="placeholder col-7"></span><br>
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
            <span class="placeholder col-4"></span><br>
            <span class="placeholder col-7"></span><br>
            <span class="placeholder col-6"></span><br>
            <span class="placeholder col-5"></span><br>
          </div>
        </div>
      </div>
    </div>
    <span class="text-center col-7 fs-4 placeholder mt-4"></span>
    <div class="table-responsive">
      <table class="table table-bordered text-center table-sm">
        <thead class="table-light">
          <tr>
            <th><span class="placeholder col-2"></span></th>
            <th><span class="placeholder col-3"></span></th>
            <th><span class="placeholder col-4"></span></th>
            <th><span class="placeholder col-5"></span></th>
            <th><span class="placeholder col-3"></span></th>
            <th><span class="placeholder col-2"></span></th>
            <th><span class="placeholder col-3"></span></th>
            <th><span class="placeholder col-2"></span></th>
            <th><span class="placeholder col-4"></span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-4"></span></td>
            <td><span class="placeholder col-5"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-4"></span></td>
          </tr>
          <tr>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-4"></span></td>
            <td><span class="placeholder col-5"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-4"></span></td>
          </tr>
          <tr>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-4"></span></td>
            <td><span class="placeholder col-5"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-4"></span></td>
          </tr>
          <tr>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-4"></span></td>
            <td><span class="placeholder col-5"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-3"></span></td>
            <td><span class="placeholder col-2"></span></td>
            <td><span class="placeholder col-4"></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}
@if (credito && !credito.liberado_fecha) {
  <div class="container-xxl my-2 rounded bg-white shadow p-5">
    <h3 class="text-center"><b>FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA</b></h3>
    <p class="text-center">
      Estado de cuenta al {{today|date:'dd/MM/yyyy'}}
    </p>
    <p class="p-5 text-center mt-5">
      <span class="h4">El cr\xE9dito {{credito.id}} no ha sido liberado todav\xEDa.</span>
    </p>
  </div>
}
@if (credito && credito.liberado_fecha) {
  <div class="container-xxl my-2 rounded bg-white shadow p-5">
    <h3 class="text-center"><b>FIDEICOMISO PARA EL DESARROLLO ECON\xD3MICO DE BAJA CALIFORNIA</b></h3>
    <p class="text-center">
      Estado de cuenta al {{today|date:'dd/MM/yyyy'}}
    </p>
    <div class="row">
      <div class="col-12 col-sm-6 col-md-5 col-lg-4 align-self-center p-2">
        <img src="../../../../assets/fondo_completo.png" alt="" class="img-fluid">
      </div>
      <div class="col-12 col-sm p-2">
        <div class="row">
          <div class="col p-1">
            <!-- Fecha de impresi\xF3n -->
            <div class="row">
              <div class="col text-end pe-1">
                Fecha de impresi\xF3n:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{today | date:'dd/MM/yyyy'}}</b><br>
              </div>
            </div>
            <!-- Cr\xE9dito -->
            <div class="row">
              <div class="col text-end pe-1">
                Cr\xE9dito:
              </div>
              <div class="col ps-1 text-uppercase">
                <b><a [routerLink]="'/main/creditos/validar/' + credito.id">{{credito.id}}</a></b><br>
              </div>
            </div>
            <!-- Programa -->
            <div class="row">
              <div class="col text-end pe-1">
                Programa:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{credito.productos_financieros?.alias}}</b><br>
              </div>
            </div>
            <!-- Folio -->
            <div class="row">
              <div class="col text-end pe-1">
                Folio:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{credito.productos_financieros?.alias?.substring(0, 4)?.replaceAll(' ', '')}}-{{credito.id}}</b><br>
              </div>
            </div>
            <!-- Referencia Bancaria -->
            <div class="row">
              <div class="col text-end pe-1">
                Referencia Bancaria:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{credito.referencia_bancaria}}</b><br>
              </div>
            </div>
            <!-- Status -->
            <div class="row">
              <div class="col text-end pe-1">
                Status:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{utils.creditoStatus(credito)}}</b><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm p-1">
        <div class="row">
          <div class="col-6 text-end pe-1">
            Nombre del acreditado:
          </div>
          <div class="col-6">
            <b>{{utils.nombreClienteFromCredito(credito)}}</b>
          </div>
        </div>
        <div class="row">
          <div class="col-6 text-end pe-1">
            Nombre comercial:
          </div>
          <div class="col-6">
            <b>{{utils.nombreNegocioFromCredito(credito)}}</b>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm p-1">
        <div class="row">
          <div class="col-6 text-end pe-1">
            RFC:
          </div>
          <div class="col-6 text-uppercase">
            <b>{{utils.rfcFromCredito(credito)}} </b>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center pb-3 border-bottom">
      <div class="col-12 p-2">
        <div class="row">
          <div class="col text-center">
            <b ><u>DATOS DEL ACREDITADO PARTICULAR</u></b>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col p-1">
            <!-- Calle -->
            <div class="row">
              <div class="col text-end pe-1">
                Calle:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{credito.datos_persona_fisica?.datos_personales?.calle ?? credito.datos_personas_morales?.calle}} {{credito.datos_persona_fisica?.datos_personales?.no_exterior ?? credito.datos_personas_morales?.no_exterior}}</b><br>
              </div>
            </div>
            <!-- Colonia -->
            <div class="row">
              <div class="col text-end pe-1">
                Colonia:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{credito.datos_persona_fisica?.datos_personales?.colonia ?? credito.datos_personas_morales?.colonia}}</b><br>
              </div>
            </div>
            <!-- Localidad -->
            <div class="row">
              <div class="col text-end pe-1">
                Localidad:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{credito.datos_persona_fisica?.datos_personales?.localidad ?? credito.datos_personas_morales?.localidad}}</b><br>
              </div>
            </div>
            <!-- Municipio -->
            <div class="row">
              <div class="col text-end pe-1">
                Municipio:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{credito.datos_persona_fisica?.datos_personales?.ciudades?.nombre ?? credito.datos_personas_morales?.ciudades?.nombre}}</b><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12 col-sm-6 p-2">
        <div class="row">
          <div class="col p-1">
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Fecha de apertura:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.fechaApertura| date:'dd/MM/yyyy'}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Fecha T\xE9rmino:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.fechaTermino | date:'dd/MM/yyyy'}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Capital:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.capital| currency}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Plazo contratado:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.plazoContratado}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Tasa de inter\xE9s ordinario:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.tasaInteresOrdinarioMensual}}%</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Gracia a capital:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.graciaACapital}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Tipo:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.tipoConvenio}}</b><br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 p-2">
        <div class="row">
          <div class="col p-1">
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Monto Total Pagado:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.montoTotalPagado | currency}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Liquidar sin Moratorios:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.liquidarSinMoratorios| currency}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Capital por vencer:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.capitalPorVencer | currency}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Tasa Moratoria Mensual:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.tasaMoratoriaMensual}}%</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Inter\xE9s Moratorio:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.interesMoratorioTotal | currency}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Fecha \xDAltimo Pago:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.fechaUltimoPago }}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Importe \xDAltimo Pago:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.importeUltimoPago | currency}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Mensualidades cubiertas:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.mensualidadesCubiertas}}</b><br>
              </div>
            </div>
            <div class="row">
              <div class="col text-end pe-1 text-capitalize">
                Mensualidades vencidas:
              </div>
              <div class="col ps-1 text-uppercase">
                <b>{{estadoCuenta?.mensualidadesVencidas}}</b><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h5 class="text-center mt-4"><b>Relaci\xF3n de cuotas pagadas, vencidas y vigentes</b></h5>
    <app-view-periodos [credito]="credito" />
    <div class="row text-end fw-bold">
      <div class="col">Total Saldo Vencido</div>
      <div class="col-6 col-sm-5 col-md-4 col-lg-3 border border-5 border-dark text-end">
        {{estadoCuenta?.totalSaldoVencido |currency}}
      </div>
    </div>
    <div class="row text-end fw-bold">
      <div class="col">Total Saldo Vigente</div>
      <div class="col-6 col-sm-5 col-md-4 col-lg-3 border border-5 border-dark text-end">
        {{estadoCuenta?.totalSaldoVigente |currency}}
      </div>
    </div>
    <div class="table-responsive">
      <h5 class="text-center mt-4"><b>Relaci\xF3n de abonos</b></h5>
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th>No.</th>
            <th>Fecha</th>
            <th>Monto abono</th>
          </tr>
        </thead>
        <tbody>
          @for (abono of credito.abonos; track abono; let i = $index) {
            <tr>
              <td><b>{{i+1}}</b></td>
              <td>{{abono.fecha|date:'dd/MM/yyyy'}}</td>
              <td>{{abono.monto|currency}}</td>
            </tr>
          }
          @if (!credito.abonos?.length) {
            <tr>
              <td colspan="3">
                <h4 class="p-5"><b>No hay abonos en este cr\xE9dito</b></h4>
              </td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end"><b>Total de abonos:</b></td>
            <td><b>{{totalAbonos()|currency}}</b></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
}
`, styles: ["/* src/app/main/estado-cuenta/resumen-estado-cuenta/resumen-estado-cuenta.component.css */\n.image-placeholder {\n  height: 10rem;\n}\n/*# sourceMappingURL=resumen-estado-cuenta.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }, { type: UtilsService }, { type: UtilsEstadoCuentaService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumenEstadoCuentaComponent, { className: "ResumenEstadoCuentaComponent", filePath: "src/app/main/estado-cuenta/resumen-estado-cuenta/resumen-estado-cuenta.component.ts", lineNumber: 25 });
})();

// src/app/controllers/credito.condonacion.moratorio.service.ts
var _CreditoCondonacionMoratorioService = class _CreditoCondonacionMoratorioService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_condonaciones_moratorios";
    this.columns = [
      "credito_id",
      "monto",
      "motivo",
      "descuento_pagos_juridico",
      "usuario_id"
    ];
  }
};
_CreditoCondonacionMoratorioService.\u0275fac = function CreditoCondonacionMoratorioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoCondonacionMoratorioService)(\u0275\u0275inject(Injector));
};
_CreditoCondonacionMoratorioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoCondonacionMoratorioService, factory: _CreditoCondonacionMoratorioService.\u0275fac, providedIn: "any" });
var CreditoCondonacionMoratorioService = _CreditoCondonacionMoratorioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoCondonacionMoratorioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/estado-cuenta/moratorios/form-condonacion-moratorio/form-condonacion-moratorio.component.ts
var _FormCondonacionMoratorioComponent = class _FormCondonacionMoratorioComponent {
  constructor(condonacionController) {
    this.condonacionController = condonacionController;
    this.show = false;
    this.showChange = new EventEmitter();
    this.condonacion = {
      credito_id: 0,
      monto: 0,
      descuento_pagos_juridico: "NO",
      motivo: "",
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    };
  }
  ngOnChanges(changes) {
    if (changes["show"] && this.show) {
      this.condonacion = {
        credito_id: 0,
        monto: 0,
        descuento_pagos_juridico: "NO",
        motivo: "",
        id: 0,
        deleted_at: null,
        created_at: "",
        updated_at: null
      };
    }
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.credito_id)
        return;
      this.condonacion.credito_id = this.credito_id;
      const res = yield this.condonacionController.new(this.condonacion);
      if (res) {
        this.show = false;
        this.showChange.emit(this.show);
      }
    });
  }
};
_FormCondonacionMoratorioComponent.\u0275fac = function FormCondonacionMoratorioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormCondonacionMoratorioComponent)(\u0275\u0275directiveInject(CreditoCondonacionMoratorioService));
};
_FormCondonacionMoratorioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCondonacionMoratorioComponent, selectors: [["app-form-condonacion-moratorio"]], inputs: { show: "show", credito_id: "credito_id" }, outputs: { showChange: "showChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 24, vars: 5, consts: [[3, "showChange", "show"], [1, "container-fluid", "px-4", "pt-0", "pb-4"], [1, "input-group", "mt-2"], [1, "input-group-text"], ["type", "number", "placeholder", "Ingrese una cantidad $...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Ingrese un motivo valido...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], [1, "row", "px-3", "mt-4"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function FormCondonacionMoratorioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function FormCondonacionMoratorioComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function FormCondonacionMoratorioComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      return ctx.showChange.emit($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "h4")(3, "b");
    \u0275\u0275text(4, "Condonar Moratorios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "label", 3);
    \u0275\u0275text(7, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function FormCondonacionMoratorioComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.condonacion.monto, $event) || (ctx.condonacion.monto = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 2)(10, "label", 3);
    \u0275\u0275text(11, "Motivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function FormCondonacionMoratorioComponent_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.condonacion.motivo, $event) || (ctx.condonacion.motivo = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 2)(14, "label", 3);
    \u0275\u0275text(15, "\xBFAplica en pagos de juridico?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function FormCondonacionMoratorioComponent_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.condonacion.descuento_pagos_juridico, $event) || (ctx.condonacion.descuento_pagos_juridico = $event);
      return $event;
    });
    \u0275\u0275elementStart(17, "option");
    \u0275\u0275text(18, "NO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option");
    \u0275\u0275text(20, "SI");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 7)(22, "button", 8);
    \u0275\u0275listener("click", function FormCondonacionMoratorioComponent_Template_button_click_22_listener() {
      return ctx.submit();
    });
    \u0275\u0275text(23, "Guardar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.condonacion.monto);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.condonacion.motivo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.condonacion.descuento_pagos_juridico);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.condonacion.monto !== null || !ctx.condonacion.motivo);
  }
}, dependencies: [
  FormularioFlotanteComponent,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var FormCondonacionMoratorioComponent = _FormCondonacionMoratorioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCondonacionMoratorioComponent, [{
    type: Component,
    args: [{ selector: "app-form-condonacion-moratorio", imports: [
      FormularioFlotanteComponent,
      FormsModule
    ], template: '<app-formulario-flotante [(show)]="show" (showChange)="showChange.emit($event)">\n    <div class="container-fluid px-4 pt-0 pb-4">\n        <h4><b>Condonar Moratorios</b></h4>\n        <div class="input-group mt-2">\n            <label class="input-group-text">Monto</label>\n            <input [(ngModel)]="condonacion.monto" class="form-control" type="number" placeholder="Ingrese una cantidad $...">\n        </div>\n        <div class="input-group mt-2">\n            <label class="input-group-text">Motivo</label>\n            <input [(ngModel)]="condonacion.motivo" class="form-control" placeholder="Ingrese un motivo valido...">\n        </div>\n        <div class="input-group mt-2">\n            <label class="input-group-text">\xBFAplica en pagos de juridico?</label>\n            <select [(ngModel)]="condonacion.descuento_pagos_juridico" class="form-select">\n                <option>NO</option>\n                <option>SI</option>\n            </select>\n        </div>\n        <div class="row px-3 mt-4">\n            <button class="btn btn-primary" (click)="submit()" [disabled]="condonacion.monto!==null || !condonacion.motivo">Guardar</button>\n        </div>\n    </div>\n</app-formulario-flotante>' }]
  }], () => [{ type: CreditoCondonacionMoratorioService }], { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], credito_id: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCondonacionMoratorioComponent, { className: "FormCondonacionMoratorioComponent", filePath: "src/app/main/estado-cuenta/moratorios/form-condonacion-moratorio/form-condonacion-moratorio.component.ts", lineNumber: 16 });
})();

// src/app/main/estado-cuenta/moratorios/list-condonacion-moratorio/list-condonacion-moratorio.component.ts
var _c02 = () => ["usuarios"];
var _c12 = (a0) => ({ key: "credito_id", operator: "=", value: a0 });
var _c2 = (a0) => [a0];
var TABLA_DEF2 = {
  columns: [
    "id",
    {
      key: "monto",
      header: "Monto",
      pipe: "currency"
    },
    "descuento_pagos_juridico",
    "motivo",
    {
      key: "usuarios",
      subKey: "nombre",
      header: "Creado Por"
    },
    "created_at",
    "deleted_at"
  ]
};
var _ListCondonacionMoratorioComponent = class _ListCondonacionMoratorioComponent {
  constructor(condonacionController, route, utils) {
    this.condonacionController = condonacionController;
    this.route = route;
    this.utils = utils;
    this.credito_id = 0;
    this.tabla = TABLA_DEF2;
    this.showAdd = false;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.credito_id = this.utils.intOrNull(params.get("credito_id")) ?? 0;
      console.log(this.credito_id);
    });
  }
};
_ListCondonacionMoratorioComponent.\u0275fac = function ListCondonacionMoratorioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCondonacionMoratorioComponent)(\u0275\u0275directiveInject(CreditoCondonacionMoratorioService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_ListCondonacionMoratorioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCondonacionMoratorioComponent, selectors: [["app-list-condonacion-moratorio"]], decls: 2, vars: 17, consts: [[3, "agregarClick", "title", "controller", "tableDefinition", "incluirEliminados", "eliminados", "rowEditar", "checkbox", "relations", "useDefaultAgregarRedirect", "getConditionals"], [3, "showChange", "credito_id", "show"]], template: function ListCondonacionMoratorioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("agregarClick", function ListCondonacionMoratorioComponent_Template_app_tabla_agregarClick_0_listener() {
      return ctx.showAdd = true;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "app-form-condonacion-moratorio", 1);
    \u0275\u0275twoWayListener("showChange", function ListCondonacionMoratorioComponent_Template_app_form_condonacion_moratorio_showChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showAdd, $event) || (ctx.showAdd = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", "Historial de condonaciones hechas para el credito: " + ctx.credito_id)("controller", ctx.condonacionController)("tableDefinition", ctx.tabla)("incluirEliminados", true)("eliminados", false)("rowEditar", false)("checkbox", false)("relations", \u0275\u0275pureFunction0(12, _c02))("useDefaultAgregarRedirect", false)("getConditionals", \u0275\u0275pureFunction1(15, _c2, \u0275\u0275pureFunction1(13, _c12, ctx.credito_id)));
    \u0275\u0275advance();
    \u0275\u0275property("credito_id", ctx.credito_id);
    \u0275\u0275twoWayProperty("show", ctx.showAdd);
  }
}, dependencies: [
  TablaComponent,
  FormCondonacionMoratorioComponent
], encapsulation: 2 });
var ListCondonacionMoratorioComponent = _ListCondonacionMoratorioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCondonacionMoratorioComponent, [{
    type: Component,
    args: [{ selector: "app-list-condonacion-moratorio", imports: [
      TablaComponent,
      FormCondonacionMoratorioComponent
    ], template: `<app-tabla 
[title]="'Historial de condonaciones hechas para el credito: '+credito_id"
[controller]="condonacionController"
[tableDefinition]="tabla"
[incluirEliminados]="true"
[eliminados]="false"
[rowEditar]="false"
[checkbox]="false"

[relations]="['usuarios']"
[useDefaultAgregarRedirect]="false"
(agregarClick)="showAdd=true"
[getConditionals]="[{key:'credito_id',operator:'=', value:credito_id}]"
/>

<app-form-condonacion-moratorio 
[credito_id]="credito_id"
[(show)]="showAdd"
/>` }]
  }], () => [{ type: CreditoCondonacionMoratorioService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCondonacionMoratorioComponent, { className: "ListCondonacionMoratorioComponent", filePath: "src/app/main/estado-cuenta/moratorios/list-condonacion-moratorio/list-condonacion-moratorio.component.ts", lineNumber: 37 });
})();

// src/app/shared/table-bootstrap/table-bootstrap.component.ts
var _c03 = [[["", "title", ""]], [["", "header", ""]], [["", "body", ""]]];
var _c13 = ["[title]", "[header]", "[body]"];
var _TableBootstrapComponent = class _TableBootstrapComponent {
  constructor() {
    this.dataSource = [];
  }
};
_TableBootstrapComponent.\u0275fac = function TableBootstrapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableBootstrapComponent)();
};
_TableBootstrapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableBootstrapComponent, selectors: [["table-bootstrap"]], inputs: { dataSource: "dataSource" }, ngContentSelectors: _c13, decls: 9, vars: 0, consts: [[1, "table-responsive", "py-3", "px-2"], [1, "table", "border"]], template: function TableBootstrapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c03);
    \u0275\u0275elementStart(0, "div", 0)(1, "h5")(2, "b");
    \u0275\u0275projection(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "table", 1)(5, "thead");
    \u0275\u0275projection(6, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275projection(8, 2);
    \u0275\u0275elementEnd()()();
  }
}, encapsulation: 2 });
var TableBootstrapComponent = _TableBootstrapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBootstrapComponent, [{
    type: Component,
    args: [{ selector: "table-bootstrap", imports: [], template: '<div class="table-responsive py-3 px-2">\n    <h5><b><ng-content select="[title]"></ng-content></b></h5>\n    <table class="table border">\n        <thead>\n            <ng-content select="[header]"></ng-content>\n        </thead>\n        <tbody>\n            <ng-content select="[body]"></ng-content>\n        </tbody>\n    </table>\n</div>' }]
  }], null, { dataSource: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableBootstrapComponent, { className: "TableBootstrapComponent", filePath: "src/app/shared/table-bootstrap/table-bootstrap.component.ts", lineNumber: 9 });
})();

// src/app/main/cobranza/ejecucion-cobro/domicilios-registrados/domicilios-registrados.component.ts
function DomiciliosRegistradosComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "No hay ubicaciones registradas en este credito");
    \u0275\u0275elementEnd();
  }
}
function DomiciliosRegistradosComponent_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "button", 3);
    \u0275\u0275listener("click", function DomiciliosRegistradosComponent_Conditional_1_For_9_Template_button_click_6_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.detail(row_r2));
    });
    \u0275\u0275element(7, "i", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.concepto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.foto_domicilio ? "SI" : "NO");
  }
}
function DomiciliosRegistradosComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table-bootstrap")(1, "tr", 1)(2, "th");
    \u0275\u0275text(3, " Lugar Visitado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "\xBFTiene Foto?");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "th");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 2);
    \u0275\u0275repeaterCreate(8, DomiciliosRegistradosComponent_Conditional_1_For_9_Template, 8, 2, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.verificaciones);
  }
}
function DomiciliosRegistradosComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275element(4, "app-leaflet", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.utils.fileUrlInLine((ctx_r2.detailed == null ? null : ctx_r2.detailed.foto_domicilio) ?? ""), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("readonly", true)("latitud", ctx_r2.detailed == null ? null : ctx_r2.detailed.latitud_domicilio)("longitud", ctx_r2.detailed == null ? null : ctx_r2.detailed.longitud_domicilio);
  }
}
function DomiciliosRegistradosComponent_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "app-leaflet", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("readonly", true)("latitud", ctx_r2.detailed == null ? null : ctx_r2.detailed.latitud_domicilio)("longitud", ctx_r2.detailed == null ? null : ctx_r2.detailed.longitud_domicilio);
  }
}
function DomiciliosRegistradosComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "h5")(3, "b");
    \u0275\u0275text(4, "Datos de ubicacion registrada");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 7)(6, "a", 8)(7, "i", 9);
    \u0275\u0275text(8, " Ver Direcciones");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(9, "hr", 10);
    \u0275\u0275elementStart(10, "div", 11);
    \u0275\u0275conditionalCreate(11, DomiciliosRegistradosComponent_Conditional_2_Conditional_11_Template, 5, 4, "div", 12);
    \u0275\u0275conditionalCreate(12, DomiciliosRegistradosComponent_Conditional_2_Conditional_12_Template, 3, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("href", "https://www.google.com/maps/dir/My+Location/" + ctx_r2.detailed.latitud_domicilio + "," + ctx_r2.detailed.longitud_domicilio, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275conditional((ctx_r2.detailed == null ? null : ctx_r2.detailed.foto_domicilio) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(ctx_r2.detailed == null ? null : ctx_r2.detailed.foto_domicilio) ? 12 : -1);
  }
}
var _DomiciliosRegistradosComponent = class _DomiciliosRegistradosComponent {
  constructor(creditoController, utils) {
    this.creditoController = creditoController;
    this.utils = utils;
    this.verificaciones = [];
    this.showDetailed = false;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes["credito_id"] && this.credito_id) {
        this.credito = yield this.creditoController.find(this.credito_id, ["verificaciones"], false);
        this.verificaciones = (this.credito?.verificaciones ?? []).filter((verif) => verif.latitud_domicilio && verif.longitud_domicilio);
      }
    });
  }
  detail(verif) {
    this.detailed = verif;
    this.showDetailed = true;
  }
};
_DomiciliosRegistradosComponent.\u0275fac = function DomiciliosRegistradosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DomiciliosRegistradosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsService));
};
_DomiciliosRegistradosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DomiciliosRegistradosComponent, selectors: [["app-domicilios-registrados"]], inputs: { credito_id: "credito_id" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 3, consts: [[1, "p-5", "fw-bold", "text-center"], ["header", ""], ["body", ""], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-eye-fill"], [1, "row", "px-3", "py-0"], [1, "col", "p-1"], [1, "col-auto", "p-1"], ["target", "_blank", 1, "btn", "btn-success", "btn-sm", 3, "href"], [1, "bi", "bi-map-fill"], [1, "my-1", "mb-2", "border", "border-primary"], [1, "container"], [1, "row"], [1, "col-12", "col-sm"], [1, "img-thumbnail", "img-fluid", 3, "src"], [3, "readonly", "latitud", "longitud"]], template: function DomiciliosRegistradosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DomiciliosRegistradosComponent_Conditional_0_Template, 2, 0, "p", 0);
    \u0275\u0275conditionalCreate(1, DomiciliosRegistradosComponent_Conditional_1_Template, 10, 0, "table-bootstrap");
    \u0275\u0275conditionalCreate(2, DomiciliosRegistradosComponent_Conditional_2_Template, 13, 3);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.verificaciones.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.verificaciones.length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showDetailed ? 2 : -1);
  }
}, dependencies: [
  TableBootstrapComponent,
  LeafletComponent
], encapsulation: 2 });
var DomiciliosRegistradosComponent = _DomiciliosRegistradosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomiciliosRegistradosComponent, [{
    type: Component,
    args: [{ selector: "app-domicilios-registrados", imports: [
      TableBootstrapComponent,
      LeafletComponent
    ], template: `@if (!verificaciones.length) {
  <p class="p-5 fw-bold text-center">No hay ubicaciones registradas en este credito</p>
}
@if (verificaciones.length) {
  <table-bootstrap>
    <tr header>
      <th>
        Lugar Visitado
      </th>
      <th>\xBFTiene Foto?</th>
      <th></th>
    </tr>
    <ng-container body>
      @for (row of verificaciones; track row) {
        <tr>
          <td>{{row.concepto}}</td>
          <td>{{row.foto_domicilio?'SI':'NO'}}</td>
          <td><button class="btn btn-secondary btn-sm" (click)="detail(row)"><i class="bi bi-eye-fill"></i></button></td>
        </tr>
      }
    </ng-container>
  </table-bootstrap>
}
@if (showDetailed) {
  <div class="row px-3 py-0">
    <div class="col p-1">
      <h5><b>Datos de ubicacion registrada</b></h5>
    </div>
    <div class="col-auto p-1">
      <a class="btn btn-success btn-sm" [href]="'https://www.google.com/maps/dir/My+Location/'+detailed!.latitud_domicilio+','+detailed!.longitud_domicilio" target="_blank">
        <i class="bi bi-map-fill"> Ver Direcciones</i>
      </a>
    </div>
  </div>
  <hr class="my-1 mb-2 border border-primary">
  <div class="container">
    @if (detailed?.foto_domicilio) {
      <div class="row">
        <div class="col-12 col-sm">
          <img  class="img-thumbnail img-fluid" [src]="utils.fileUrlInLine(detailed?.foto_domicilio??'')">
        </div>
        <div class="col-12 col-sm">
          <app-leaflet [readonly]="true" [latitud]="detailed?.latitud_domicilio" [longitud]="detailed?.longitud_domicilio!" />
        </div>
      </div>
    }
    @if (!detailed?.foto_domicilio) {
      <div class="row">
        <div class="col-12 col-sm">
          <app-leaflet [readonly]="true" [latitud]="detailed?.latitud_domicilio" [longitud]="detailed?.longitud_domicilio!" />
        </div>
      </div>
    }
  </div>
}` }]
  }], () => [{ type: CreditoService }, { type: UtilsService }], { credito_id: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DomiciliosRegistradosComponent, { className: "DomiciliosRegistradosComponent", filePath: "src/app/main/cobranza/ejecucion-cobro/domicilios-registrados/domicilios-registrados.component.ts", lineNumber: 23 });
})();

// src/app/main/estado-cuenta/shared/view-resumen-cliente/view-resumen-cliente.component.ts
function ViewResumenClienteComponent_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2);
  }
}
function ViewResumenClienteComponent_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2);
  }
}
function ViewResumenClienteComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275listener("click", function ViewResumenClienteComponent_For_3_Template_li_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.tabSelected = tab_r2);
    });
    \u0275\u0275conditionalCreate(1, ViewResumenClienteComponent_For_3_Conditional_1_Template, 2, 1, "a", 6)(2, ViewResumenClienteComponent_For_3_Conditional_2_Template, 2, 1, "a", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r2 == ctx_r2.tabSelected ? 1 : 2);
  }
}
function ViewResumenClienteComponent_Conditional_4_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, " Domicilio Particular: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.domicilioFromDatosModel(ctx_r2.personaFisica.datos_personales), " ");
  }
}
function ViewResumenClienteComponent_Conditional_4_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2, " Domicilio Particular: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.domicilioParticularFromPm(ctx_r2.personaMoral), " ");
  }
}
function ViewResumenClienteComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3, " Id Cliente: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9);
    \u0275\u0275text(8, " Nombre: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
    \u0275\u0275text(13, " Nombre Comercial: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 9);
    \u0275\u0275text(18, " RFC: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
    \u0275\u0275text(23, " R\xE9gimen Fiscal: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 8)(27, "div", 9);
    \u0275\u0275text(28, " Domicilio Negocio: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 10);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, ViewResumenClienteComponent_Conditional_4_Conditional_31_Template, 5, 1, "div", 8);
    \u0275\u0275conditionalCreate(32, ViewResumenClienteComponent_Conditional_4_Conditional_32_Template, 5, 1, "div", 8);
    \u0275\u0275elementStart(33, "div", 8)(34, "div", 9);
    \u0275\u0275text(35, " Email: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 11);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 8)(39, "div", 9);
    \u0275\u0275text(40, " Tel\xE9fonos: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 10);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 8)(44, "div", 9);
    \u0275\u0275text(45, " Sesi\xF3n: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 10);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.personaFisica == null ? null : ctx_r2.personaFisica.datos_personal_id) ?? ((ctx_r2.personaMoral == null ? null : ctx_r2.personaMoral.cliente_id) ?? (ctx_r2.personaMoral == null ? null : ctx_r2.personaMoral.id)), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.nombreClienteFromCredito(ctx_r2.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.nombreNegocioFromCredito(ctx_r2.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.personaMoral == null ? null : ctx_r2.personaMoral.rfc) ?? (ctx_r2.personaFisica == null ? null : ctx_r2.personaFisica.datos_personales == null ? null : ctx_r2.personaFisica.datos_personales.rfc), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", !ctx_r2.personaMoral ? "Persona F\xEDsica Con Actividad Empresarial" : "Persona Moral", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.domicilioFromDatosModel(ctx_r2.personaMoral ?? (ctx_r2.personaFisica == null ? null : ctx_r2.personaFisica.negocios)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.personaFisica ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.personaMoral ? 32 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.personaFisica == null ? null : ctx_r2.personaFisica.datos_personales == null ? null : ctx_r2.personaFisica.datos_personales.email) ?? (ctx_r2.personaMoral == null ? null : ctx_r2.personaMoral.email), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.telefonosString, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.credito.sesiones == null ? null : ctx_r2.credito.sesiones.sesion) ?? "N/A", " ");
  }
}
function ViewResumenClienteComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3, " Id Representante Legal: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9);
    \u0275\u0275text(8, " Nombre: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
    \u0275\u0275text(13, " Domicilio Particular: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 9);
    \u0275\u0275text(18, " Email: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
    \u0275\u0275text(23, " Tel\xE9fonos: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.representanteLegal == null ? null : ctx_r2.representanteLegal.id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.nombreClienteFromDatosPersonales(ctx_r2.representanteLegal), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.domicilioFromDatosModel(ctx_r2.representanteLegal), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.representanteLegal == null ? null : ctx_r2.representanteLegal.email, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.numerosTelefonicosFromDatosPersonalesContrato(ctx_r2.representanteLegal), " ");
  }
}
function ViewResumenClienteComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3, " Id Aval: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9);
    \u0275\u0275text(8, " Nombre: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9);
    \u0275\u0275text(13, " Domicilio: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 9);
    \u0275\u0275text(18, " Email: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
    \u0275\u0275text(23, " Tel\xE9fonos: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.aval == null ? null : ctx_r2.aval.id, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.nombreClienteFromDatosPersonales(ctx_r2.aval), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.domicilioFromDatosModel(ctx_r2.aval), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.aval == null ? null : ctx_r2.aval.email, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.numerosTelefonicosFromDatosPersonalesContrato(ctx_r2.aval), " ");
  }
}
function ViewResumenClienteComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "No hay referencias personales registradas");
    \u0275\u0275elementEnd();
  }
}
function ViewResumenClienteComponent_Conditional_7_Conditional_2_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const referencia_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(referencia_r4.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(referencia_r4.domicilio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(referencia_r4.telefono);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(referencia_r4.parentescos == null ? null : referencia_r4.parentescos.nombre);
  }
}
function ViewResumenClienteComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "table", 14)(2, "thead")(3, "tr", 15)(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Domicilio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Parentesco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, ViewResumenClienteComponent_Conditional_7_Conditional_2_For_14_Template, 9, 4, "tr", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.credito.referencias_personales);
  }
}
function ViewResumenClienteComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, ViewResumenClienteComponent_Conditional_7_Conditional_1_Template, 2, 0, "p", 12);
    \u0275\u0275conditionalCreate(2, ViewResumenClienteComponent_Conditional_7_Conditional_2_Template, 15, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!(ctx_r2.credito.referencias_personales == null ? null : ctx_r2.credito.referencias_personales.length) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r2.credito.referencias_personales == null ? null : ctx_r2.credito.referencias_personales.length) ? 2 : -1);
  }
}
function ViewResumenClienteComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-domicilios-registrados", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("credito_id", ctx_r2.credito.id);
  }
}
function ViewResumenClienteComponent_Conditional_9_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const historial_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.utils.domicilioFromDatosModel(historial_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(historial_r5.nota);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, historial_r5.fecha_actualizacion, "dd/MM/yyyy"));
  }
}
function ViewResumenClienteComponent_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275repeaterCreate(1, ViewResumenClienteComponent_Conditional_9_Conditional_11_For_2_Template, 8, 6, "tr", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.personaFisica.datos_personales == null ? null : ctx_r2.personaFisica.datos_personales.history);
  }
}
function ViewResumenClienteComponent_Conditional_9_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 16)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const historial_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.utils.domicilioFromDatosModel(historial_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("CR\xC9DITO ", historial_r6.credito_id, " SOLICITADO EN ", \u0275\u0275pipeBind2(5, 4, historial_r6.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, historial_r6.updated_at, "dd/MM/yyyy"));
  }
}
function ViewResumenClienteComponent_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody");
    \u0275\u0275repeaterCreate(1, ViewResumenClienteComponent_Conditional_9_Conditional_12_For_2_Template, 9, 10, "tr", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.personasMoralHistory);
  }
}
function ViewResumenClienteComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13)(2, "table", 14)(3, "thead")(4, "tr", 15)(5, "th");
    \u0275\u0275text(6, "Domicilio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Nota");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Fecha Actualizaci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, ViewResumenClienteComponent_Conditional_9_Conditional_11_Template, 3, 0, "tbody");
    \u0275\u0275conditionalCreate(12, ViewResumenClienteComponent_Conditional_9_Conditional_12_Template, 3, 0, "tbody");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r2.personaFisica ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.personaMoral ? 12 : -1);
  }
}
var _ViewResumenClienteComponent = class _ViewResumenClienteComponent {
  constructor(creditoController, utils, personaMoralController) {
    this.creditoController = creditoController;
    this.utils = utils;
    this.personaMoralController = personaMoralController;
    this.personaFisicaHistory = [];
    this.personasMoralHistory = [];
    this.tabs = [
      "Cliente",
      "Aval",
      "Referencias Personales",
      "Ubicaciones Registradas",
      "Historial De Domicilios"
    ];
    this.tabSelected = "Cliente";
    this.telefonos = [];
    this.telefonosString = "";
    this.emails = [];
  }
  /**
   * Método que se ejecuta al detectar cambios.
   * Carga la información del cliente, aval y el historial de domicilios.
   */
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes["credito"]) {
        this.initializeData();
        yield this.checkIfIsReestructura();
        this.loadClientData();
        this.loadAvalData();
        this.loadRepresentanteLegalData();
        this.loadPersonaFisicaHistory();
        this.loadPersonaMoralHistory();
        this.adjustTabsBasedOnClientType();
        this.loadTelefonos();
        console.log("Resumen Cliente", this.credito);
      }
    });
  }
  initializeData() {
    this.personaFisica = void 0;
    this.personaMoral = void 0;
    this.aval = void 0;
    this.representanteLegal = void 0;
    this.personaFisicaHistory = [];
    this.personasMoralHistory = [];
  }
  loadTelefonos() {
    if (this.credito.datos_personas_morales?.telefonos) {
      this.telefonos = [
        ...this.credito.datos_personas_morales.telefonos.map((t) => t.numero)
      ];
    } else if (this.credito.datos_persona_fisica?.datos_personales && this.credito.datos_persona_fisica.datos_personales.telefonos_personales) {
      this.telefonos = [
        ...this.credito.datos_persona_fisica.datos_personales.telefonos_personales.map((t) => t.numero)
      ];
    }
    this.telefonos = Array.from(new Set(this.telefonos));
    this.telefonosString = this.telefonos.join(", ");
  }
  checkIfIsReestructura() {
    return __async(this, null, function* () {
      if (!this.credito.datos_persona_fisica && !this.credito.datos_personas_morales && this.credito.folio) {
        const reestructura = yield this.creditoController.first({
          folio_reestructura: this.credito.folio
        }, ["*"], {}, false);
        if (reestructura) {
          this.credito = reestructura;
        }
      }
    });
  }
  /**
   * Carga los datos del cliente (persona física o moral) desde el objeto Credito.
   */
  loadClientData() {
    this.personaFisica = this.credito.datos_persona_fisica;
    this.personaMoral = this.credito.datos_personas_morales;
  }
  /**
   * Carga los datos del aval desde el objeto Credito.
   */
  loadAvalData() {
    this.aval = this.credito.datos_personales;
  }
  loadRepresentanteLegalData() {
    this.representanteLegal = this.personaMoral?.representante_legal;
  }
  /**
   * Carga el historial de datos personales de la persona física.
   */
  loadPersonaFisicaHistory() {
    this.personaFisicaHistory = this.personaFisica?.datos_personales?.history ?? [];
  }
  /**
   * Carga el historial de datos de la persona moral.
   */
  loadPersonaMoralHistory() {
    return __async(this, null, function* () {
      if (!this.personaMoral)
        return;
      this.personasMoralHistory = yield this.personaMoralController.all({ rfc: this.personaMoral.rfc, deleted_at: null }, [], {}, false);
    });
  }
  /**
   * Ajusta las pestañas disponibles en la interfaz según el tipo de cliente (persona física o moral).
   */
  adjustTabsBasedOnClientType() {
    this.tabSelected = "Cliente";
    if (this.personaMoral) {
      this.tabs = [
        "Cliente",
        "Aval",
        "Representante Legal",
        "Referencias Personales",
        "Ubicaciones Registradas",
        "Historial De Domicilios"
      ];
    }
    if (this.personaFisica) {
      this.tabs = [
        "Cliente",
        "Aval",
        "Referencias Personales",
        "Ubicaciones Registradas",
        "Historial De Domicilios"
      ];
    }
  }
};
_ViewResumenClienteComponent.\u0275fac = function ViewResumenClienteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewResumenClienteComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(DatoPersonaMoralService));
};
_ViewResumenClienteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewResumenClienteComponent, selectors: [["app-view-resumen-cliente"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 6, consts: [[1, "container-fluid"], [1, "nav", "nav-tabs"], [1, "nav-item"], [1, "container-fluid", "p-3"], [1, "container-fluid", "p-4"], [1, "nav-item", 3, "click"], [1, "nav-link", "active", "fw-bold", "text-primary"], [1, "nav-link", "pointer"], [1, "row", "my-1"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2", "text-bg-secondary"], [1, "col-12", "col-sm", "fw-bold", "text-uppercase"], [1, "col-12", "col-sm", "fw-bold"], [1, "fw-bold", "text-center", "p-5"], [1, "table-responsive"], [1, "table"], [1, "table-secondary"], [1, "text-uppercase"], [3, "credito_id"]], template: function ViewResumenClienteComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "ul", 1);
    \u0275\u0275repeaterCreate(2, ViewResumenClienteComponent_For_3_Template, 3, 1, "li", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ViewResumenClienteComponent_Conditional_4_Template, 48, 11, "div", 3);
    \u0275\u0275conditionalCreate(5, ViewResumenClienteComponent_Conditional_5_Template, 26, 5, "div", 3);
    \u0275\u0275conditionalCreate(6, ViewResumenClienteComponent_Conditional_6_Template, 26, 5, "div", 3);
    \u0275\u0275conditionalCreate(7, ViewResumenClienteComponent_Conditional_7_Template, 3, 2, "div", 3);
    \u0275\u0275conditionalCreate(8, ViewResumenClienteComponent_Conditional_8_Template, 2, 1, "div", 4);
    \u0275\u0275conditionalCreate(9, ViewResumenClienteComponent_Conditional_9_Template, 13, 2, "div", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.tabSelected == "Cliente" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Representante Legal" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Aval" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Referencias Personales" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Ubicaciones Registradas" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Historial De Domicilios" ? 9 : -1);
  }
}, dependencies: [DatePipe, DomiciliosRegistradosComponent], encapsulation: 2 });
var ViewResumenClienteComponent = _ViewResumenClienteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewResumenClienteComponent, [{
    type: Component,
    args: [{ selector: "app-view-resumen-cliente", imports: [DatePipe, DomiciliosRegistradosComponent], template: `<div class="container-fluid">
  <ul class="nav nav-tabs">
    @for (tab of tabs; track tab) {
      <li class="nav-item" (click)="tabSelected=tab">
        @if (tab==tabSelected) {
          <a class="nav-link active fw-bold text-primary">{{tab}}</a>
        } @else {
          <a class="nav-link pointer">{{tab}}</a>
        }
      </li>
    }
  </ul>
  @if (tabSelected=='Cliente') {
    <div class="container-fluid p-3">
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Id Cliente:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{personaFisica?.datos_personal_id?? (personaMoral?.cliente_id ?? personaMoral?.id)}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Nombre:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.nombreClienteFromCredito(credito)}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Nombre Comercial:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.nombreNegocioFromCredito(credito)}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          RFC:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{personaMoral?.rfc ?? personaFisica?.datos_personales?.rfc }}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          R\xE9gimen Fiscal:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{!personaMoral?'Persona F\xEDsica Con Actividad Empresarial':'Persona Moral'}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Domicilio Negocio:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.domicilioFromDatosModel(personaMoral?? personaFisica?.negocios )}}
        </div>
      </div>
      @if (personaFisica) {
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Domicilio Particular:
          </div>
          <div class="col-12 col-sm fw-bold text-uppercase">
            {{utils.domicilioFromDatosModel(personaFisica.datos_personales)}}
          </div>
        </div>
      }
      @if (personaMoral) {
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Domicilio Particular:
          </div>
          <div class="col-12 col-sm fw-bold text-uppercase">
            {{utils.domicilioParticularFromPm(personaMoral)}}
          </div>
        </div>
      }
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Email:
        </div>
        <div class="col-12 col-sm fw-bold">
          {{personaFisica?.datos_personales?.email ?? personaMoral?.email }}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Tel\xE9fonos:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{telefonosString}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Sesi\xF3n:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{credito.sesiones?.sesion??'N/A'}}
        </div>
      </div>
    </div>
  }
  @if (tabSelected=='Representante Legal') {
    <div class="container-fluid p-3">
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Id Representante Legal:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{representanteLegal?.id}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Nombre:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.nombreClienteFromDatosPersonales(representanteLegal)}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Domicilio Particular:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.domicilioFromDatosModel(representanteLegal)}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Email:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{representanteLegal?.email }}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Tel\xE9fonos:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.numerosTelefonicosFromDatosPersonalesContrato(representanteLegal)}}
        </div>
      </div>
    </div>
  }
  @if (tabSelected=='Aval') {
    <div class="container-fluid p-3">
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Id Aval:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{aval?.id}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Nombre:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.nombreClienteFromDatosPersonales(aval)}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Domicilio:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.domicilioFromDatosModel(aval)}}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Email:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{aval?.email }}
        </div>
      </div>
      <div class="row my-1">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
          Tel\xE9fonos:
        </div>
        <div class="col-12 col-sm fw-bold text-uppercase">
          {{utils.numerosTelefonicosFromDatosPersonalesContrato(aval)}}
        </div>
      </div>
    </div>
  }
  @if (tabSelected=='Referencias Personales') {
    <div class="container-fluid p-3">
      @if (!credito.referencias_personales?.length) {
        <p class="fw-bold text-center p-5">No hay referencias personales registradas</p>
      }
      @if (credito.referencias_personales?.length) {
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="table-secondary">
                <th>Nombre</th>
                <th>Domicilio</th>
                <th>Telefono</th>
                <th>Parentesco</th>
              </tr>
            </thead>
            <tbody>
              @for (referencia of credito.referencias_personales; track referencia) {
                <tr class="text-uppercase">
                  <td>{{referencia.nombre}}</td>
                  <td>{{referencia.domicilio}}</td>
                  <td>{{referencia.telefono}}</td>
                  <td>{{referencia.parentescos?.nombre}}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  }
  @if (tabSelected=='Ubicaciones Registradas') {
    <div class="container-fluid p-4">
      <app-domicilios-registrados [credito_id]="credito.id" />
    </div>
  }
  @if (tabSelected=='Historial De Domicilios') {
    <div class="container-fluid p-3">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr class="table-secondary">
              <th>Domicilio</th>
              <th>Nota</th>
              <th>Fecha Actualizaci\xF3n</th>
            </tr>
          </thead>
          @if (personaFisica) {
            <tbody>
              @for (historial of personaFisica.datos_personales?.history; track historial) {
                <tr class="text-uppercase">
                  <td>{{utils.domicilioFromDatosModel(historial)}}</td>
                  <td>{{historial.nota}}</td>
                  <td>{{historial.fecha_actualizacion | date:'dd/MM/yyyy'}}</td>
                </tr>
              }
            </tbody>
          }
          @if (personaMoral) {
            <tbody>
              @for (historial of personasMoralHistory; track historial) {
                <tr class="text-uppercase">
                  <td>{{utils.domicilioFromDatosModel(historial)}}</td>
                  <td>CR\xC9DITO {{historial.credito_id}} SOLICITADO EN {{historial.created_at | date:'dd/MM/yyyy'}}</td>
                  <td>{{historial.updated_at | date:'dd/MM/yyyy'}}</td>
                </tr>
              }
            </tbody>
          }
        </table>
      </div>
    </div>
  }
  <!--TODO: Agregar sesiones section-->
</div>` }]
  }], () => [{ type: CreditoService }, { type: UtilsService }, { type: DatoPersonaMoralService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewResumenClienteComponent, { className: "ViewResumenClienteComponent", filePath: "src/app/main/estado-cuenta/shared/view-resumen-cliente/view-resumen-cliente.component.ts", lineNumber: 23 });
})();

// src/app/main/estado-cuenta/estado-cuenta2/estado-cuenta2.component.ts
var _c04 = (a0) => ["/main/creditos/editar", a0];
var _forTrack0 = ($index, $item) => $item.id;
function EstadoCuenta2Component_Conditional_13_For_13_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Asignado por:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asignacion_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" ", asignacion_r1.usuarios.nombre, " ", asignacion_r1.usuarios.apellido_paterno, " ", asignacion_r1.usuarios.apellido_materno, " ");
  }
}
function EstadoCuenta2Component_Conditional_13_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 24);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2, " Asignado por: ");
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4, "Desconocido");
    \u0275\u0275elementEnd()();
  }
}
function EstadoCuenta2Component_Conditional_13_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275elementStart(2, "em");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asignacion_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(asignacion_r1.comentarios);
  }
}
function EstadoCuenta2Component_Conditional_13_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 19)(1, "div", 20)(2, "span");
    \u0275\u0275element(3, "i", 21);
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, EstadoCuenta2Component_Conditional_13_For_13_Conditional_9_Template, 6, 3, "small", 23)(10, EstadoCuenta2Component_Conditional_13_For_13_Conditional_10_Template, 5, 0, "small", 24);
    \u0275\u0275conditionalCreate(11, EstadoCuenta2Component_Conditional_13_For_13_Conditional_11_Template, 4, 1, "small", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asignacion_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.utils.fechaFormateada(asignacion_r1.fecha), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", asignacion_r1.modalidad, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(asignacion_r1.usuarios ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(asignacion_r1.comentarios ? 11 : -1);
  }
}
function EstadoCuenta2Component_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "div", 14)(3, "h6", 15);
    \u0275\u0275element(4, "i", 16);
    \u0275\u0275text(5, " Asignaciones existentes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 17);
    \u0275\u0275text(7, " Tienes ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " activa(s) para este cr\xE9dito: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul", 18);
    \u0275\u0275repeaterCreate(12, EstadoCuenta2Component_Conditional_13_For_13_Template, 12, 4, "li", 19, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.eventoCobroAsignaciones.length, " asignaci\xF3n(es)");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.eventoCobroAsignaciones);
  }
}
function EstadoCuenta2Component_Conditional_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function EstadoCuenta2Component_Conditional_15_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.datoPersonaFisicaController.switch(ctx_r1.credito.datos_persona_fisica));
    });
    \u0275\u0275elementStart(1, "i", 39);
    \u0275\u0275text(2, "PF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 38);
    \u0275\u0275listener("click", function EstadoCuenta2Component_Conditional_15_Conditional_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.datoPersonaMoralController.switch(ctx_r1.credito.datos_personas_morales));
    });
    \u0275\u0275elementStart(4, "i", 39);
    \u0275\u0275text(5, "PM");
    \u0275\u0275elementEnd()();
  }
}
function EstadoCuenta2Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function EstadoCuenta2Component_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nuevaCobranza("LLAMADA"));
    });
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function EstadoCuenta2Component_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nuevaCobranza("NOTIFICACION DOMICILIARIA"));
    });
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function EstadoCuenta2Component_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nuevaCobranza("CORREO ELECTRONICO"));
    });
    \u0275\u0275element(5, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 31);
    \u0275\u0275listener("click", function EstadoCuenta2Component_Conditional_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.estadoCuentaPdf.generarEstadoCuentaFromCreditoID(ctx_r1.credito));
    });
    \u0275\u0275element(7, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 36);
    \u0275\u0275element(9, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, EstadoCuenta2Component_Conditional_15_Conditional_10_Template, 6, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c04, ctx_r1.credito.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.user.nombre == "ROOT" && ctx_r1.credito.datos_persona_fisica && ctx_r1.credito.datos_personas_morales ? 10 : -1);
  }
}
function EstadoCuenta2Component_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "El cr\xE9dito no ha sido liberado.");
    \u0275\u0275elementEnd();
  }
}
function EstadoCuenta2Component_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "app-ejecucion-cobro", 51);
    \u0275\u0275listener("onSaved", function EstadoCuenta2Component_Conditional_18_Conditional_0_Template_app_ejecucion_cobro_onSaved_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCobroSaved());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r1.credito)("evento", ctx_r1.cobroEdit);
  }
}
function EstadoCuenta2Component_Conditional_18_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "app-view-resumen-credito", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 49)(3, "app-collapsable", 53);
    \u0275\u0275element(4, "app-view-periodos", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 49);
    \u0275\u0275element(6, "app-view-relacion-abonos", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r1.creditoOriginal)("useLocal", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("credito", ctx_r1.creditoOriginal)("useLocal", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r1.creditoOriginal)("useLocal", true);
  }
}
function EstadoCuenta2Component_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EstadoCuenta2Component_Conditional_18_Conditional_0_Template, 2, 2, "div", 40);
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275element(2, "app-view-resumen-cliente", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275element(4, "app-view-resumen-credito", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 41)(6, "app-collapsable", 44)(7, "div", 45)(8, "div", 46)(9, "div", 47);
    \u0275\u0275text(10, "Instituci\xF3n Financiera");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 47);
    \u0275\u0275text(12, "Referencia Bancaria");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 46)(14, "div", 48);
    \u0275\u0275text(15, "HSBC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 48);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 49)(19, "app-collapsable", 50);
    \u0275\u0275element(20, "app-view-periodos", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 49);
    \u0275\u0275element(22, "app-view-relacion-abonos", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 41);
    \u0275\u0275element(24, "app-view-relacion-convenios", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, EstadoCuenta2Component_Conditional_18_Conditional_25_Template, 7, 6);
    \u0275\u0275elementStart(26, "div", 49);
    \u0275\u0275element(27, "app-view-gestiones-cobro", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.cobroEdit ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r1.credito);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r1.credito)("useLocal", true);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", ctx_r1.credito.referencia_bancaria, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("credito", ctx_r1.credito)("useLocal", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r1.credito)("useLocal", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r1.credito);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.creditoOriginal ? 25 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r1.credito);
  }
}
var _EstadoCuenta2Component = class _EstadoCuenta2Component {
  constructor(utils, creditoController, localStorage, router, route, estadoCuentaUtils, estadoCuentaPdf, datoPersonaFisicaController, datoPersonaMoralController, eventoCobroAsignacionController) {
    this.utils = utils;
    this.creditoController = creditoController;
    this.localStorage = localStorage;
    this.router = router;
    this.route = route;
    this.estadoCuentaUtils = estadoCuentaUtils;
    this.estadoCuentaPdf = estadoCuentaPdf;
    this.datoPersonaFisicaController = datoPersonaFisicaController;
    this.datoPersonaMoralController = datoPersonaMoralController;
    this.eventoCobroAsignacionController = eventoCobroAsignacionController;
    this.fechaCorte = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.creditos = [];
    this.relations = ["*"];
    this.permisos = [];
    this.showActions = false;
    this.eventoCobroAsignaciones = [];
    this.user = this.localStorage.getUser();
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["credito_id"]) {
        console.log("set credito from url");
        if (!this.credito || this.credito.id != params["credito_id"]) {
          const res = yield this.creditoController.find(params["credito_id"], this.relations, false);
          if (res) {
            this.credito = res;
            this.setEstadoCuentaWithFechaCorte();
            this.revisarAsignaciones();
          }
        }
      }
    }));
    const perfil = this.localStorage.getPerfil();
    this.permisos = (this.localStorage.getPerfil().permisos_usuarios ?? []).filter((pu) => pu.permisos !== void 0).map((pu) => pu.permisos);
    this.showActions = this.verificarPermisos();
  }
  revisarAsignaciones() {
    return __async(this, null, function* () {
      this.eventoCobroAsignaciones = yield this.eventoCobroAsignacionController.asignacionesPendientes(this.credito);
    });
  }
  setEstadoCuentaWithFechaCorte() {
    this.creditoOriginal = void 0;
    if (!this.credito)
      return;
    this.credito.estado_cuenta = this.estadoCuentaUtils.calculateEstadoDeCuenta(this.credito, false, this.fechaCorte.substring(0, 10) + "T17:00:00Z");
    this.credito = __spreadValues({}, this.credito);
    if (this.credito.convenios?.find((c) => c.estatus == "ACTIVO")) {
      this.creditoOriginal = __spreadValues({}, this.credito);
      this.creditoOriginal.estado_cuenta = this.estadoCuentaUtils.getEstadoCuentaPrevioAConvenio(this.creditoOriginal, this.fechaCorte.substring(0, 10) + "T17:00:00Z");
      this.creditoOriginal = __spreadValues({}, this.creditoOriginal);
    }
  }
  updateUrl(credito) {
    this.setEstadoCuentaWithFechaCorte();
    this.router.navigate(["/main/estado-cuenta", credito.id]);
    if (this.cobroEdit) {
      this.nuevaCobranza(this.cobroEdit.modalidad);
    }
    this.revisarAsignaciones();
  }
  /**
   * Inicia el proceso de creación de una nueva cobranza para el crédito actual.
   *
   * Este método crea un nuevo evento de cobro asociado al crédito seleccionado,
   * utilizando la modalidad de cobro especificada. El evento de cobro se asigna
   * al usuario actual obtenido del almacenamiento local.
   *
   * @param modalidad - La modalidad de cobro a utilizar (por ejemplo, 'efectivo', 'transferencia', etc.).
   * @returns Una promesa que se resuelve cuando el evento de cobro ha sido creado y asignado.
   */
  nuevaCobranza(modalidad) {
    return __async(this, null, function* () {
      const usuario = this.obtenerUsuarioActual();
      if (this.cobroEdit && this.cobroEdit.modalidad == modalidad) {
        this.cobroEdit = void 0;
        return;
      }
      this.cobroEdit = {
        id: 0,
        credito_id: this.credito?.id ?? 0,
        modalidad,
        usuario_ejecutivo_id: usuario.id,
        resultado: "NO REALIZADO",
        usuario_id: usuario.id,
        fecha: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
        comentario: "",
        deleted_at: "",
        created_at: "",
        updated_at: ""
      };
    });
  }
  /**
   * Obtiene el usuario actual desde el almacenamiento local.
   *
   * @returns El usuario actual.
   */
  obtenerUsuarioActual() {
    return this.localStorage.getUser();
  }
  /**
   * Inserta a la lista local de cobros el evento recien guardado y lo vuelve undefined para ocultar el formulario
   */
  onCobroSaved() {
    this.credito?.credito_evento_cobros?.unshift(this.utils.copyOf(this.cobroEdit));
    this.cobroEdit = void 0;
  }
  verificarPermisos() {
    return this.permisos?.some((permiso) => permiso.nombre === "EJECUTIVO COBRANZA" || permiso.nombre === "ENCARGADO COBRANZA") ?? false;
  }
};
_EstadoCuenta2Component.\u0275fac = function EstadoCuenta2Component_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadoCuenta2Component)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(estadoCuenta), \u0275\u0275directiveInject(DatoPersonaFisicaService), \u0275\u0275directiveInject(DatoPersonaMoralService), \u0275\u0275directiveInject(EventoCobroAsignacionService));
};
_EstadoCuenta2Component.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstadoCuenta2Component, selectors: [["app-estado-cuenta2"]], decls: 19, vars: 7, consts: [[1, "container-fluid", "p-3", "pb-5", "my-1", "mb-3", "bg-white", "rounded", "shadow"], [1, "row", "my-2"], [1, "col"], [1, "col-auto"], [1, "input-group", "input-group-sm"], [1, "input-group-text"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-right"], ["role", "alert", 1, "alert", "alert-info", "d-flex", "align-items-start", "gap-3", "p-3"], [3, "creditoChange", "credito", "relations"], [1, "mt-2"], [1, "p-5", "text-muted", "text-center"], [1, "bi", "bi-info-circle-fill", "text-info", "fs-4", "mt-1"], [1, "flex-grow-1"], [1, "alert-heading", "mb-2", "text-info", "fw-semibold"], [1, "bi", "bi-person-check", "me-1"], [1, "mb-2"], [1, "list-unstyled", "mb-0"], [1, "py-2", "border-bottom", "border-light"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "bi", "bi-calendar-event", "text-muted", "me-1"], [1, "badge", "bg-primary", "rounded-pill"], [1, "text-dark", "d-flex", "align-items-center"], [1, "text-muted", "d-flex", "align-items-center"], [1, "d-block", "text-muted", "mt-1"], [1, "bi", "bi-person-badge", "me-1"], [1, "ms-1", "text-uppercase"], [1, "bi", "bi-person-x", "me-1"], [1, "ms-1"], [1, "bi", "bi-chat-left-text", "me-1"], [1, "btn", "btn-outline-secondary", "m-1", 3, "click"], [1, "bi", "bi-telephone-plus-fill"], [1, "bi", "bi-house-exclamation-fill"], [1, "bi", "bi-envelope-exclamation-fill"], [1, "bi", "bi-printer-fill"], [1, "btn", "btn-outline-secondary", "m-1", 3, "routerLink"], [1, "bi", "bi-pencil-fill"], [1, "btn", "btn-outline-danger", "m-1", 3, "click"], [1, "bi", "bi-trash-fill"], [1, "container-fluid", "p-3", "mb-2"], [1, "container-fluid", "mb-2"], [3, "credito"], [3, "credito", "useLocal"], ["title", "Referencia y N\xFAmero De Convenio Para Instituciones Financieras"], [1, "container-fluid", "p-3", "text-center"], [1, "row", "my-1"], [1, "col-12", "col-sm", "fw-bold"], [1, "col-12", "col-sm", "text-uppercase"], [1, "container-fluid", "my-3"], ["title", "Relaci\xF3n de cuotas pagadas, vencidas y vigentes"], ["div", "container-fluid bg-white rounded shadow p-3 border", 3, "onSaved", "credito", "evento"], ["title", "Datos del c\u0155edito previo al convenio", 3, "credito", "useLocal"], ["title", "Relaci\xF3n de cuotas pagadas, vencidas y vigentes previo al convenio"], ["title", "Relaci\xF3n de abonos previos al convenio", 3, "credito", "useLocal"]], template: function EstadoCuenta2Component_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4")(4, "b");
    \u0275\u0275text(5, "Consultar Estado de Cuenta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "label", 5);
    \u0275\u0275text(9, "Fecha de Corte:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function EstadoCuenta2Component_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaCorte, $event) || (ctx.fechaCorte = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function EstadoCuenta2Component_Template_button_click_11_listener() {
      return ctx.setEstadoCuentaWithFechaCorte();
    });
    \u0275\u0275element(12, "i", 8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(13, EstadoCuenta2Component_Conditional_13_Template, 14, 1, "div", 9);
    \u0275\u0275elementStart(14, "app-buscador-creditos", 10);
    \u0275\u0275twoWayListener("creditoChange", function EstadoCuenta2Component_Template_app_buscador_creditos_creditoChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.credito, $event) || (ctx.credito = $event);
      return $event;
    });
    \u0275\u0275listener("creditoChange", function EstadoCuenta2Component_Template_app_buscador_creditos_creditoChange_14_listener($event) {
      return ctx.updateUrl($event);
    });
    \u0275\u0275conditionalCreate(15, EstadoCuenta2Component_Conditional_15_Template, 11, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 11);
    \u0275\u0275conditionalCreate(17, EstadoCuenta2Component_Conditional_17_Template, 2, 0, "p", 12);
    \u0275\u0275conditionalCreate(18, EstadoCuenta2Component_Conditional_18_Template, 28, 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaCorte);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.eventoCobroAsignaciones.length ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("credito", ctx.credito);
    \u0275\u0275property("relations", ctx.relations);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito && ctx.credito.liberado_fecha && ctx.showActions ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.credito && !ctx.credito.liberado_fecha ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito && ctx.credito.liberado_fecha ? 18 : -1);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  ViewResumenCreditoComponent,
  ViewPeriodosComponent,
  ViewRelacionAbonosComponent,
  ViewGestionesCobroComponent,
  ViewResumenClienteComponent,
  ViewRelacionConveniosComponent,
  EjecucionCobroComponent,
  BuscadorCreditosComponent,
  CollapsableComponent,
  RouterLink
], encapsulation: 2 });
var EstadoCuenta2Component = _EstadoCuenta2Component;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadoCuenta2Component, [{
    type: Component,
    args: [{ selector: "app-estado-cuenta2", imports: [
      FormsModule,
      ViewResumenCreditoComponent,
      ViewPeriodosComponent,
      ViewRelacionAbonosComponent,
      ViewGestionesCobroComponent,
      ViewResumenClienteComponent,
      ViewRelacionConveniosComponent,
      EjecucionCobroComponent,
      BuscadorCreditosComponent,
      CollapsableComponent,
      RouterLink
    ], template: `<div class="container-fluid p-3 pb-5 my-1 mb-3 bg-white rounded shadow">
  <div class="row my-2">
    <div class="col">
      <h4><b>Consultar Estado de Cuenta</b></h4>
    </div>
    <div class="col-auto">
      <div class="input-group input-group-sm">
        <label class="input-group-text">Fecha de Corte:</label>
        <input class="form-control" type="date" [(ngModel)]="fechaCorte" />
        <button
          class="btn btn-outline-primary"
          (click)="setEstadoCuentaWithFechaCorte()"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
  @if (eventoCobroAsignaciones.length) {
    <div class="alert alert-info d-flex align-items-start gap-3 p-3" role="alert">
      <!-- Icono principal -->
      <i class="bi bi-info-circle-fill text-info fs-4 mt-1"></i>

      <div class="flex-grow-1">
        <!-- Encabezado -->
        <h6 class="alert-heading mb-2 text-info fw-semibold">
          <i class="bi bi-person-check me-1"></i>
          Asignaciones existentes
        </h6>
        <p class="mb-2">
          Tienes <strong>{{ eventoCobroAsignaciones.length }} asignaci\xF3n(es)</strong> activa(s) para este cr\xE9dito:
        </p>

        <!-- Lista de asignaciones -->
        <ul class="list-unstyled mb-0">
          @for (asignacion of eventoCobroAsignaciones; track asignacion.id) {
            <li class="py-2 border-bottom border-light">
              <!-- Fecha y modalidad -->
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span>
                  <i class="bi bi-calendar-event text-muted me-1"></i>
                  <strong>Fecha:</strong> {{ utils.fechaFormateada(asignacion.fecha) }}
                </span>
                <span class="badge bg-primary rounded-pill">
                  {{ asignacion.modalidad }}
                </span>
              </div>

              <!-- Usuario que realiz\xF3 la asignaci\xF3n -->
              @if (asignacion.usuarios) {
                <small class="text-dark d-flex align-items-center">
                  <i class="bi bi-person-badge me-1"></i>
                  <strong>Asignado por:</strong>
                  <span class="ms-1 text-uppercase">
                    {{ asignacion.usuarios.nombre }}
                    {{ asignacion.usuarios.apellido_paterno }}
                    {{ asignacion.usuarios.apellido_materno }}
                  </span>
                </small>
              } @else {
                <small class="text-muted d-flex align-items-center">
                  <i class="bi bi-person-x me-1"></i>
                  Asignado por: <span class="ms-1">Desconocido</span>
                </small>
              }

              <!-- Comentarios (opcional) -->
              @if (asignacion.comentarios) {
                <small class="d-block text-muted mt-1">
                  <i class="bi bi-chat-left-text me-1"></i>
                  <em>{{ asignacion.comentarios }}</em>
                </small>
              }
            </li>
          }
        </ul>
      </div>
    </div>
  }

  <app-buscador-creditos
    [(credito)]="credito"
    [relations]="relations"
    (creditoChange)="updateUrl($event)"
  >
    @if (credito && credito.liberado_fecha && showActions) {
      <button
        class="btn btn-outline-secondary m-1"
        (click)="nuevaCobranza('LLAMADA')"
      >
        <i class="bi bi-telephone-plus-fill"></i>
      </button>
      <button
        class="btn btn-outline-secondary m-1"
        (click)="nuevaCobranza('NOTIFICACION DOMICILIARIA')"
      >
        <i class="bi bi-house-exclamation-fill"></i>
      </button>
      <button
        class="btn btn-outline-secondary m-1"
        (click)="nuevaCobranza('CORREO ELECTRONICO')"
      >
        <i class="bi bi-envelope-exclamation-fill"></i>
      </button>
      <button
        class="btn btn-outline-secondary m-1"
        (click)="estadoCuentaPdf.generarEstadoCuentaFromCreditoID(credito)"
      >
        <i class="bi bi-printer-fill"></i>
      </button>
      <button
        class="btn btn-outline-secondary m-1"
        [routerLink]="['/main/creditos/editar', credito.id]"
      >
        <i class="bi bi-pencil-fill"></i>
      </button>
      @if(user.nombre=='ROOT' && credito.datos_persona_fisica && credito.datos_personas_morales){
        <button class="btn btn-outline-danger m-1" (click)="datoPersonaFisicaController.switch(credito.datos_persona_fisica)">
          <i class="bi bi-trash-fill">PF</i>
        </button>
        <button class="btn btn-outline-danger m-1" (click)="datoPersonaMoralController.switch(credito.datos_personas_morales)">
          <i class="bi bi-trash-fill">PM</i>
        </button>
      }
    }
  </app-buscador-creditos>

  <!-- Espacio -->
  <div class="mt-2"></div>
  <!-- ./Espacio -->

  @if (credito && !credito.liberado_fecha) {
    <p class="p-5 text-muted text-center">El cr\xE9dito no ha sido liberado.</p>
  }

  @if (credito && credito.liberado_fecha) {
    @if (cobroEdit) {
      <div class="container-fluid p-3 mb-2">
        <app-ejecucion-cobro
          [credito]="credito"
          [evento]="cobroEdit"
          (onSaved)="onCobroSaved()"
          div="container-fluid bg-white rounded shadow p-3 border"
        />
      </div>
    }
    <div class="container-fluid mb-2">
      <app-view-resumen-cliente [credito]="credito" />
    </div>
    <div class="container-fluid mb-2">
      <app-view-resumen-credito [credito]="credito" [useLocal]="true" />
    </div>
    <div class="container-fluid mb-2">
      <app-collapsable
        title="Referencia y N\xFAmero De Convenio Para Instituciones Financieras"
      >
        <div class="container-fluid p-3 text-center">
          <div class="row my-1">
            <div class="col-12 col-sm fw-bold">Instituci\xF3n Financiera</div>
            <div class="col-12 col-sm fw-bold">Referencia Bancaria</div>
          </div>
          <div class="row my-1">
            <div class="col-12 col-sm text-uppercase">HSBC</div>
            <div class="col-12 col-sm text-uppercase">
              {{ credito.referencia_bancaria }}
            </div>
          </div>
        </div>
      </app-collapsable>
    </div>
    <div class="container-fluid my-3">
      <app-collapsable title="Relaci\xF3n de cuotas pagadas, vencidas y vigentes">
        <app-view-periodos [credito]="credito" [useLocal]="true" />
      </app-collapsable>
    </div>
    <div class="container-fluid my-3">
      <app-view-relacion-abonos [credito]="credito" [useLocal]="true" />
    </div>
    <div class="container-fluid mb-2">
      <app-view-relacion-convenios [credito]="credito" />
    </div>
    @if (creditoOriginal) {
      <div class="container-fluid mb-2">
        <app-view-resumen-credito
          title="Datos del c\u0155edito previo al convenio"
          [credito]="creditoOriginal"
          [useLocal]="true"
        />
      </div>
      <div class="container-fluid my-3">
        <app-collapsable
          title="Relaci\xF3n de cuotas pagadas, vencidas y vigentes previo al convenio"
        >
          <app-view-periodos [credito]="creditoOriginal" [useLocal]="true" />
        </app-collapsable>
      </div>
      <div class="container-fluid my-3">
        <app-view-relacion-abonos
          title="Relaci\xF3n de abonos previos al convenio"
          [credito]="creditoOriginal"
          [useLocal]="true"
        />
      </div>
    }
    <div class="container-fluid my-3">
      <app-view-gestiones-cobro [credito]="credito" />
    </div>
  }
</div>
` }]
  }], () => [{ type: UtilsService }, { type: CreditoService }, { type: LocalStorageService }, { type: Router }, { type: ActivatedRoute }, { type: UtilsEstadoCuentaService }, { type: estadoCuenta }, { type: DatoPersonaFisicaService }, { type: DatoPersonaMoralService }, { type: EventoCobroAsignacionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstadoCuenta2Component, { className: "EstadoCuenta2Component", filePath: "src/app/main/estado-cuenta/estado-cuenta2/estado-cuenta2.component.ts", lineNumber: 48 });
})();

// src/app/main/estado-cuenta/estado.cuentas.routes.ts
var estadoCuentasRoutes = [
  { path: "", component: EstadoCuenta2Component },
  { path: "list", component: ListEstadoCuentasComponent },
  { path: "resumen/:credito_id", component: ResumenEstadoCuentaComponent },
  { path: "condonados/:credito_id", component: ListCondonacionMoratorioComponent },
  { path: ":credito_id", component: EstadoCuenta2Component }
];
export {
  estadoCuentasRoutes
};
//# sourceMappingURL=chunk-3HRWTVFX.js.map
