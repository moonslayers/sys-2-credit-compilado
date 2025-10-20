import {
  SesionService
} from "./chunk-A7VH3SSD.js";
import {
  AbonoComponent
} from "./chunk-JFCLL2HX.js";
import {
  EditarCargaMasivaComponent
} from "./chunk-6YR5MWDH.js";
import {
  PagoCargaMasivaService
} from "./chunk-ZPILISIA.js";
import {
  DatosFiscalesService
} from "./chunk-NH64EC6C.js";
import {
  CreditoAbonoService
} from "./chunk-BI6X3YJ4.js";
import {
  ScrollingModule
} from "./chunk-6DPENKFB.js";
import {
  readSync,
  utils,
  writeSync
} from "./chunk-3HCUHHOO.js";
import {
  BuscadorCreditosComponent
} from "./chunk-5AHBH7ZX.js";
import "./chunk-MJF6VG42.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import {
  require_FileSaver_min
} from "./chunk-SDTK5VY4.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import {
  DataViewSectionComponent
} from "./chunk-6SWRHHIM.js";
import "./chunk-NXIA6ZMF.js";
import {
  FileInputComponent
} from "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import {
  ApiServiceService,
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  DomSanitizer,
  NavigationEnd,
  Router,
  RouterOutlet
} from "./chunk-XKAAYCNZ.js";
import {
  AsyncPipe,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  BehaviorSubject,
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  Subject,
  ViewChild,
  filter,
  firstValueFrom,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/pagos/list-creditos-pagos/list-creditos-pagos.component.ts
var _c0 = () => ["creditosPagos", "productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales", "estadoCuenta"];
var _c1 = () => ({ filtro: "estado" });
var TABLA_DEF = {
  emptyMsg: "No hay creditos con estados de cuenta activos.",
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "row",
      header: "Cliente",
      function: (credito, utils2) => {
        return utils2.nombreClienteFromCredito(credito);
      }
    },
    {
      key: "estado_cuenta",
      header: "Saldo Insoluto",
      subKey: "total_a_liquidar",
      pipe: "currency"
    },
    {
      key: "estado_cuenta",
      header: "Saldo Vencido",
      subKey: "saldo_vencido",
      pipe: "currency"
    },
    {
      key: "estado_cuenta",
      header: "Vencido desde",
      subKey: "fecha_primer_mes_vencido",
      pipe: "date"
    },
    {
      key: "estado_cuenta",
      header: "Pagos Vencidos",
      subKey: "cuotas_vencidas"
    },
    {
      key: "productos_financieros",
      subKey: "alias",
      header: "P Financiero"
    },
    {
      key: "sucursales",
      subKey: "nombre",
      header: "Sucursal"
    },
    {
      key: "fecha_convenio",
      header: "Fecha Convenio",
      pipe: "date"
    }
  ]
};
var EDITAR_BUTTON = {
  style: {
    button: "btn btn-sm btn-success",
    icon: "bi bi-piggy-bank-fill"
  }
};
var ADVANCED_SEARCH = [
  {
    label: "Producto Financiero:",
    key: "productosFinancieros",
    type: "text",
    conditionals: [
      {
        key: "nombre",
        operator: "LIKE"
      },
      {
        key: "alias",
        operator: "LIKE"
      }
    ]
  },
  {
    label: "Nombre PF:",
    key: "datosPersonaFisica.datosPersonales",
    type: "text",
    conditionals: [
      {
        key: "nombre",
        operator: "LIKE"
      }
    ]
  },
  {
    label: "Raz\xF3n Social PM:",
    key: "datosPersonasMorales",
    type: "text",
    conditionals: [
      {
        key: "razon_social",
        operator: "LIKE"
      }
    ]
  },
  {
    label: "Representante Legal PM:",
    key: "datosPersonasMorales.representanteLegal",
    type: "text",
    conditionals: [
      {
        key: "nombre",
        operator: "LIKE"
      }
    ]
  }
];
var _ListCreditosPagosComponent = class _ListCreditosPagosComponent {
  constructor(creditoController, router) {
    this.creditoController = creditoController;
    this.router = router;
    this.tabla = TABLA_DEF;
    this.edit = EDITAR_BUTTON;
    this.advancedSearch = ADVANCED_SEARCH;
  }
};
_ListCreditosPagosComponent.\u0275fac = function ListCreditosPagosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCreditosPagosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(Router));
};
_ListCreditosPagosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCreditosPagosComponent, selectors: [["app-list-creditos-pagos"]], decls: 1, vars: 14, consts: [["title", "Cuentas Pendientes", 3, "tableDefinition", "controller", "showBarraButtons", "rowEliminar", "rowEditarButton", "rowEditarRoute", "relations", "getExtra", "advancedSearch", "agregar", "eliminar", "eliminados"]], template: function ListCreditosPagosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("showBarraButtons", true)("rowEliminar", false)("rowEditarButton", ctx.edit)("rowEditarRoute", "/pagos/abonos/")("relations", \u0275\u0275pureFunction0(12, _c0))("getExtra", \u0275\u0275pureFunction0(13, _c1))("advancedSearch", ctx.advancedSearch)("agregar", false)("eliminar", false)("eliminados", false);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListCreditosPagosComponent = _ListCreditosPagosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCreditosPagosComponent, [{
    type: Component,
    args: [{ selector: "app-list-creditos-pagos", imports: [
      TablaComponent
    ], template: `<app-tabla 
title="Cuentas Pendientes"
[tableDefinition]="tabla"
[controller]="creditoController"
[showBarraButtons]="true"
[rowEliminar]="false"
[rowEditarButton]="edit"
[rowEditarRoute]="'/pagos/abonos/'"
[relations]="['creditosPagos','productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales','estadoCuenta']"
[getExtra]="{filtro:'estado'}"
[advancedSearch]="advancedSearch"
[agregar]="false"
[eliminar]="false"
[eliminados]="false"
/>` }]
  }], () => [{ type: CreditoService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCreditosPagosComponent, { className: "ListCreditosPagosComponent", filePath: "src/app/pagos/list-creditos-pagos/list-creditos-pagos.component.ts", lineNumber: 129 });
})();

// src/app/controllers/bitacora.cancelacion..abono.service.ts
var _BitacoraCancelacionAbonoService = class _BitacoraCancelacionAbonoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "bitacora_cancelaciones_abonos";
    this.columns = [
      "id",
      "credito_id",
      "creditos_abono_id",
      "pagos_cargas_masiva_id",
      "origen",
      "accion",
      "motivo",
      "usuario_id"
    ];
  }
};
_BitacoraCancelacionAbonoService.\u0275fac = function BitacoraCancelacionAbonoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BitacoraCancelacionAbonoService)(\u0275\u0275inject(Injector));
};
_BitacoraCancelacionAbonoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BitacoraCancelacionAbonoService, factory: _BitacoraCancelacionAbonoService.\u0275fac, providedIn: "any" });
var BitacoraCancelacionAbonoService = _BitacoraCancelacionAbonoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BitacoraCancelacionAbonoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/pagos/list-bitacora-cancelaciones/list-bitacora-cancelaciones.component.ts
var _c02 = () => ["creditosAbonos.usuarios", "pagosCargasMasivas", "pagosCargasMasivas.usuarios", "usuarios", "creditos.datosPersonaFisica.datosPersonales", "creditos.datosPersonasMorales"];
var TABLA_DEF2 = {
  style: {
    table: "table table-sm"
  },
  columns: [
    {
      key: "credito_id",
      header: "Credito"
    },
    {
      key: "row",
      header: "Nombre Cliente",
      function: (bitacora, utils2) => {
        return utils2.nombreClienteFromCredito(bitacora.creditos);
      }
    },
    {
      key: "row",
      header: "Monto",
      function: (bitacora) => {
        return bitacora.pagos_cargas_masivas?.importe_de_credito ?? (bitacora.creditos_abonos?.monto ?? 0).toString();
      },
      pipe: "currency"
    },
    {
      key: "pagos_cargas_masivas",
      header: "Referencia",
      subKey: "referencia_de_cliente"
    },
    "origen",
    "accion",
    "motivo",
    {
      key: "usuarios",
      header: "Hecho por:",
      keyList: ["nombre", "apellido_paterno"]
    },
    {
      key: "created_at",
      header: "Registrado en:",
      pipe: "date"
    }
  ]
};
var VER_DETALLES_BUTTON = {
  style: {
    button: "btn btn-sm btn-info",
    icon: "bi bi-eye-fill"
  },
  title: "Ver detalles"
};
var ADVANCED_FILTERS = [
  {
    label: "Folio cr\xE9dito:",
    key: "creditos",
    type: "number",
    conditionals: [
      {
        key: "id",
        operator: "="
      }
    ]
  },
  {
    label: "Acci\xF3n hecha por:",
    key: "usuarios",
    type: "text",
    conditionals: [
      {
        key: "nombre",
        operator: "LIKE"
      }
    ]
  },
  {
    label: "CURP Persona F\xEDsica:",
    key: "creditos.datosPersonaFisica.datosPersonales",
    type: "text",
    conditionals: [
      {
        key: "curp",
        operator: "LIKE"
      }
    ]
  },
  {
    label: "Razon Social PM:",
    key: "creditos.datosPersonasMorales",
    type: "text",
    conditionals: [
      {
        key: "razon_social",
        operator: "LIKE"
      }
    ]
  },
  {
    label: "Depositado Desde:",
    key: "pagosCargasMasivas",
    type: "date",
    conditionals: [
      {
        key: "fecha_abono",
        operator: ">="
      }
    ]
  },
  {
    label: "Depositado Hasta:",
    key: "pagosCargasMasivas",
    type: "date",
    conditionals: [
      {
        key: "fecha_abono",
        operator: "<"
      }
    ]
  }
];
var _ListBitacoraCancelacionesComponent = class _ListBitacoraCancelacionesComponent {
  constructor(BitacoraController) {
    this.BitacoraController = BitacoraController;
    this.tablaDef = TABLA_DEF2;
    this.detalleBotton = VER_DETALLES_BUTTON;
    this.advancedFilters = ADVANCED_FILTERS;
    this.showVentana = false;
  }
};
_ListBitacoraCancelacionesComponent.\u0275fac = function ListBitacoraCancelacionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListBitacoraCancelacionesComponent)(\u0275\u0275directiveInject(BitacoraCancelacionAbonoService));
};
_ListBitacoraCancelacionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListBitacoraCancelacionesComponent, selectors: [["app-list-bitacora-cancelaciones"]], decls: 1, vars: 10, consts: [["title", "Bit\xE1cora de Pagos y Cargas Masivas", "rowEditarRoute", "/pagos/bitacora/detalle", 3, "agregar", "eliminar", "eliminados", "checkbox", "advancedSearch", "tableDefinition", "rowEditarButton", "relations", "controller"]], template: function ListBitacoraCancelacionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("agregar", false)("eliminar", false)("eliminados", false)("checkbox", false)("advancedSearch", ctx.advancedFilters)("tableDefinition", ctx.tablaDef)("rowEditarButton", ctx.detalleBotton)("relations", \u0275\u0275pureFunction0(9, _c02))("controller", ctx.BitacoraController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListBitacoraCancelacionesComponent = _ListBitacoraCancelacionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListBitacoraCancelacionesComponent, [{
    type: Component,
    args: [{ selector: "app-list-bitacora-cancelaciones", imports: [
      TablaComponent
    ], template: `<app-tabla 
title="Bit\xE1cora de Pagos y Cargas Masivas"
[agregar]="false"
[eliminar]="false"
[eliminados]="false"
[checkbox]="false"
[advancedSearch]="advancedFilters"
[tableDefinition]="tablaDef"
[rowEditarButton]="detalleBotton"
rowEditarRoute="/pagos/bitacora/detalle"
[relations]='["creditosAbonos.usuarios","pagosCargasMasivas","pagosCargasMasivas.usuarios","usuarios", "creditos.datosPersonaFisica.datosPersonales","creditos.datosPersonasMorales",]'
[controller]="BitacoraController"
/>` }]
  }], () => [{ type: BitacoraCancelacionAbonoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListBitacoraCancelacionesComponent, { className: "ListBitacoraCancelacionesComponent", filePath: "src/app/pagos/list-bitacora-cancelaciones/list-bitacora-cancelaciones.component.ts", lineNumber: 137 });
})();

// src/app/pagos/detalle-bitacora/detalle-bitacora.component.ts
var _c03 = () => ["motivo", "pagos_cargas_masiva_id", "creditos_abono_id"];
function DetalleBitacoraComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "data-view-section", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r0.bitacora.creditos_abonos);
  }
}
function DetalleBitacoraComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "data-view-section", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r0.bitacora.pagos_cargas_masivas);
  }
}
function DetalleBitacoraComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "data-view-section", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "h4")(4, "b");
    \u0275\u0275text(5, "Motivo de la acci\xF3n:");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "hr", 3);
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "data-view-section", 4);
    \u0275\u0275conditionalCreate(10, DetalleBitacoraComponent_Conditional_0_Conditional_10_Template, 1, 1, "data-view-section", 5);
    \u0275\u0275conditionalCreate(11, DetalleBitacoraComponent_Conditional_0_Conditional_11_Template, 1, 1, "data-view-section", 6);
    \u0275\u0275element(12, "data-view-section", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.bitacora)("ignoreKeys", \u0275\u0275pureFunction0(8, _c03));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.bitacora.motivo, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ignoreNumbers", true)("data", ctx_r0.bitacora.creditos);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bitacora.creditos_abonos ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bitacora.pagos_cargas_masivas ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r0.bitacora.usuarios);
  }
}
var _DetalleBitacoraComponent = class _DetalleBitacoraComponent {
  constructor(bitacoraController, utils2, route) {
    this.bitacoraController = bitacoraController;
    this.utils = utils2;
    this.route = route;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("bitacora_id"));
      if (id) {
        this.bitacora = yield this.bitacoraController.find(id, ["creditos", "creditosAbonos.usuarios", "pagosCargasMasivas", "pagosCargasMasivas.usuarios", "usuarios"]);
      }
    }));
  }
};
_DetalleBitacoraComponent.\u0275fac = function DetalleBitacoraComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DetalleBitacoraComponent)(\u0275\u0275directiveInject(BitacoraCancelacionAbonoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute));
};
_DetalleBitacoraComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalleBitacoraComponent, selectors: [["app-detalle-bitacora"]], decls: 1, vars: 1, consts: [[1, "container-xl", "rounded", "shadow", "bg-white", "my-2", "p-4"], ["divClass", "container-fluid px-0 py-3", "title", "Bit\xE1cora de pago", 3, "data", "ignoreKeys"], [1, "container", "fluix", "px-0", "py-4"], [1, "mt-1", "mb-2", "border-primary"], ["divClass", "container-fluid px-0 py-3", "title", "datos del cr\xE9dito", "emptyMsj", "No hay datos registrados del cr\xE9ditos.", 3, "ignoreNumbers", "data"], ["divClass", "container-fluid px-0 py-3", "title", "Datos del Abono", 3, "data"], ["divClass", "container-fluid px-0 py-3", "title", "datos de la Carga Masiva", 3, "data"], ["divClass", "container-fluid px-0 py-3", "title", "Datos del usuario autor", 3, "data"]], template: function DetalleBitacoraComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DetalleBitacoraComponent_Conditional_0_Template, 13, 9, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.bitacora ? 0 : -1);
  }
}, dependencies: [DataViewSectionComponent], encapsulation: 2 });
var DetalleBitacoraComponent = _DetalleBitacoraComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetalleBitacoraComponent, [{
    type: Component,
    args: [{ selector: "app-detalle-bitacora", imports: [
      DataViewSectionComponent
    ], template: `@if (bitacora) {
  <div class="container-xl rounded shadow bg-white my-2 p-4">
    <data-view-section
      divClass="container-fluid px-0 py-3"
      title="Bit\xE1cora de pago"
      [data]="bitacora"
      [ignoreKeys]="['motivo','pagos_cargas_masiva_id','creditos_abono_id']"
      />
    <div class="container fluix px-0 py-4">
      <h4 ><b>Motivo de la acci\xF3n:</b></h4>
      <hr class="mt-1 mb-2 border-primary">
      <p>
        {{bitacora.motivo}}
      </p>
    </div>
    <data-view-section
      divClass="container-fluid px-0 py-3"
      title="datos del cr\xE9dito"
      emptyMsj="No hay datos registrados del cr\xE9ditos."
      [ignoreNumbers]="true"
      [data]="bitacora.creditos"
      />
    @if (bitacora.creditos_abonos) {
      <data-view-section
        divClass="container-fluid px-0 py-3"
        title="Datos del Abono"
        [data]="bitacora.creditos_abonos"
        />
    }
    @if (bitacora.pagos_cargas_masivas) {
      <data-view-section
        divClass="container-fluid px-0 py-3"
        title="datos de la Carga Masiva"
        [data]="bitacora.pagos_cargas_masivas"
        />
    }
    <data-view-section
      divClass="container-fluid px-0 py-3"
      title="Datos del usuario autor"
      [data]="bitacora.usuarios"
      />
  </div>
}` }]
  }], () => [{ type: BitacoraCancelacionAbonoService }, { type: UtilsService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalleBitacoraComponent, { className: "DetalleBitacoraComponent", filePath: "src/app/pagos/detalle-bitacora/detalle-bitacora.component.ts", lineNumber: 17 });
})();

// src/app/pagos/main/main.component.ts
var _MainComponent = class _MainComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.creditoId = 0;
    this.title = "Tesorer\xEDa";
    this.currentPath = "/main/";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => {
      this.updateFromChildRoute();
    });
    this.updateFromChildRoute();
  }
  updateFromChildRoute() {
    let child = this.route.firstChild;
    while (child?.firstChild) {
      child = child.firstChild;
    }
    child?.title.subscribe((title) => {
      this.title = title || "Tesorer\xEDa";
    });
    child?.url.subscribe((urlSegments) => {
      if (urlSegments.length > 0 && typeof urlSegments[0].path == "string") {
        this.currentPath = "/pagos/main/" + urlSegments[0].path;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onCreditoChange() {
    const url = this.route.snapshot.url;
    this.router.navigate([this.currentPath, this.creditoId]);
  }
};
_MainComponent.\u0275fac = function MainComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MainComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_MainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main"]], decls: 5, vars: 3, consts: [[1, "container-fluid", "p-3", "my-1", "rounded", "shadow", "bg-white"], [1, "p-2"], [3, "creditoIdChange", "creditoId", "justId"]], template: function MainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-buscador-creditos", 2);
    \u0275\u0275twoWayListener("creditoIdChange", function MainComponent_Template_app_buscador_creditos_creditoIdChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.creditoId, $event) || (ctx.creditoId = $event);
      return $event;
    });
    \u0275\u0275listener("creditoIdChange", function MainComponent_Template_app_buscador_creditos_creditoIdChange_3_listener() {
      return ctx.onCreditoChange();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("creditoId", ctx.creditoId);
    \u0275\u0275property("justId", true);
  }
}, dependencies: [
  RouterOutlet,
  BuscadorCreditosComponent
], encapsulation: 2 });
var MainComponent = _MainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainComponent, [{
    type: Component,
    args: [{ selector: "app-main", imports: [
      RouterOutlet,
      BuscadorCreditosComponent
    ], template: '<div class="container-fluid p-3 my-1 rounded shadow bg-white">\n    <h3 class="p-2">{{title}}</h3>\n    <app-buscador-creditos [(creditoId)]="creditoId" (creditoIdChange)="onCreditoChange()" [justId]="true" />\n    <router-outlet></router-outlet>\n</div>' }]
  }], () => [{ type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "src/app/pagos/main/main.component.ts", lineNumber: 15 });
})();

// src/app/pagos/pagos-no-identificados/pagos-no-identificados.component.ts
function PagosNoIdentificadosComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tabla", 28);
    \u0275\u0275listener("rowEditarClick", function PagosNoIdentificadosComponent_Conditional_55_Template_app_tabla_rowEditarClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editarPago($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("controller", ctx_r1.cargaMasivaController)("barraBusqueda", false)("showBarraButtons", false)("checkbox", false)("tableDefinition", ctx_r1.tabla)("useDefaultRowEditRedirect", false)("relations", ctx_r1.relations)("getExtra", ctx_r1.getExtra)("rowEliminar", false)("getConditionals", ctx_r1.getConditionals);
  }
}
function PagosNoIdentificadosComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-carga-masiva", 29);
    \u0275\u0275listener("cargaMasivaEditChange", function PagosNoIdentificadosComponent_Conditional_57_Template_app_editar_carga_masiva_cargaMasivaEditChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showEdit = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("cargaMasivaEdit", ctx_r1.cargaMasivaEdit);
  }
}
var TABLE_DEF = {
  style: {
    table: "table table-sm"
  },
  columns: [
    {
      header: "Fecha Abono",
      key: "fecha_abono",
      pipe: "date"
    },
    {
      header: "Monto",
      key: "importe_de_credito",
      pipe: "currency"
    },
    {
      header: "Referencia Bancaria",
      key: "descripcion"
    },
    "nota",
    {
      key: "creditos_abonos",
      keyList: ["creditos", "estado_cuenta", "credito_status"],
      header: "Estado Credito"
    },
    {
      header: "Aplicado por",
      key: "creditos_abonos",
      function: (abono) => {
        return abono?.usuarios?.nombre ?? "N/A";
      }
    }
  ]
};
var _PagosNoIdentificadosComponent = class _PagosNoIdentificadosComponent {
  constructor(cargaMasivaController) {
    this.cargaMasivaController = cargaMasivaController;
    this.tabla = TABLE_DEF;
    this.cargasMasivas = [];
    this.showEdit = false;
    this.showDeleteModal = false;
    this.deleteNote = "";
    this.pagoToDelete = null;
    this.relations = [
      "creditosAbonos.creditos.estadoCuenta",
      "creditosAbonos.usuarios",
      "usuarios"
    ];
    this.mostrarTabla = false;
    this.filtros = {
      estado: "",
      referencia: null,
      estado_credito: null,
      credito_id: 0,
      monto: 0,
      desde: null,
      hasta: null
    };
    this.getConditionals = [
      {
        key: "deleted_at",
        operator: "IS NULL",
        value: null
      }
    ];
    this.getExtra = {};
  }
  editarPago(pago) {
    this.cargaMasivaEdit = pago;
    this.showEdit = true;
  }
  aplicarFiltros() {
    this.getExtra = {
      filtro: JSON.stringify(this.filtros)
    };
    this.mostrarTabla = true;
  }
  limpiarFiltros() {
    this.filtros = {
      estado: "",
      credito_id: 0,
      estado_credito: null,
      referencia: null,
      monto: 0,
      desde: null,
      hasta: null
    };
    this.aplicarFiltros();
    this.mostrarTabla = false;
  }
};
_PagosNoIdentificadosComponent.\u0275fac = function PagosNoIdentificadosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagosNoIdentificadosComponent)(\u0275\u0275directiveInject(PagoCargaMasivaService));
};
_PagosNoIdentificadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagosNoIdentificadosComponent, selectors: [["app-pagos-no-identificados"]], decls: 58, vars: 9, consts: [[1, "container-fluid", "p-3", "my-1", "rounded", "shadow", "bg-white"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-6", "my-3", "rounded", "border", "p-3", "bg-light"], [1, "mb-3", "text-primary"], [1, "bi", "bi-funnel", "me-2"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "aplicado"], ["value", "no_identificado"], ["type", "text", "placeholder", "Buscar por referencia...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "placeholder", "0.00", "step", "0.01", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ingresa algo para filtrar...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "g-2"], [1, "col-md-6"], [1, "small", "text-muted"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "mt-4"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-eraser", "me-1"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-check-circle", "me-1"], [3, "controller", "barraBusqueda", "showBarraButtons", "checkbox", "tableDefinition", "useDefaultRowEditRedirect", "relations", "getExtra", "rowEliminar", "getConditionals"], ["size", "large", 3, "showChange", "show"], [3, "cargaMasivaEdit"], [3, "rowEditarClick", "controller", "barraBusqueda", "showBarraButtons", "checkbox", "tableDefinition", "useDefaultRowEditRedirect", "relations", "getExtra", "rowEliminar", "getConditionals"], [3, "cargaMasivaEditChange", "cargaMasivaEdit"]], template: function PagosNoIdentificadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4");
    \u0275\u0275text(2, "Transferencias Bancarias o Pagos no identificados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "h5", 3);
    \u0275\u0275element(6, "i", 4);
    \u0275\u0275text(7, "Filtros avanzados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "label", 6);
    \u0275\u0275text(10, "Estado del pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function PagosNoIdentificadosComponent_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.estado, $event) || (ctx.filtros.estado = $event);
      return $event;
    });
    \u0275\u0275elementStart(12, "option", 8);
    \u0275\u0275text(13, "Todos los pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 9);
    \u0275\u0275text(15, "Aplicados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 10);
    \u0275\u0275text(17, "No identificados");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 5)(19, "label", 6);
    \u0275\u0275text(20, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function PagosNoIdentificadosComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.referencia, $event) || (ctx.filtros.referencia = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 5)(23, "label", 6);
    \u0275\u0275text(24, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 12)(26, "span", 13);
    \u0275\u0275text(27, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function PagosNoIdentificadosComponent_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.monto, $event) || (ctx.filtros.monto = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 5)(30, "label", 6);
    \u0275\u0275text(31, "Estado Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 12)(33, "span", 13);
    \u0275\u0275text(34, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function PagosNoIdentificadosComponent_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.estado_credito, $event) || (ctx.filtros.estado_credito = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 5)(37, "label", 6);
    \u0275\u0275text(38, "Rango de fechas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 16)(40, "div", 17)(41, "label", 18);
    \u0275\u0275text(42, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PagosNoIdentificadosComponent_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.desde, $event) || (ctx.filtros.desde = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 17)(45, "label", 18);
    \u0275\u0275text(46, "Hasta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PagosNoIdentificadosComponent_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.hasta, $event) || (ctx.filtros.hasta = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 20)(49, "button", 21);
    \u0275\u0275listener("click", function PagosNoIdentificadosComponent_Template_button_click_49_listener() {
      return ctx.limpiarFiltros();
    });
    \u0275\u0275element(50, "i", 22);
    \u0275\u0275text(51, " Limpiar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 23);
    \u0275\u0275listener("click", function PagosNoIdentificadosComponent_Template_button_click_52_listener() {
      return ctx.aplicarFiltros();
    });
    \u0275\u0275element(53, "i", 24);
    \u0275\u0275text(54, " Aplicar filtros ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(55, PagosNoIdentificadosComponent_Conditional_55_Template, 1, 10, "app-tabla", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "app-formulario-flotante", 26);
    \u0275\u0275twoWayListener("showChange", function PagosNoIdentificadosComponent_Template_app_formulario_flotante_showChange_56_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showEdit, $event) || (ctx.showEdit = $event);
      return $event;
    });
    \u0275\u0275conditionalCreate(57, PagosNoIdentificadosComponent_Conditional_57_Template, 1, 1, "app-editar-carga-masiva", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.estado);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.referencia);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.monto);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.estado_credito);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.desde);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.hasta);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.mostrarTabla ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEdit);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showEdit ? 57 : -1);
  }
}, dependencies: [
  FormularioFlotanteComponent,
  EditarCargaMasivaComponent,
  TablaComponent,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  MinValidator,
  NgModel
], encapsulation: 2 });
var PagosNoIdentificadosComponent = _PagosNoIdentificadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagosNoIdentificadosComponent, [{
    type: Component,
    args: [{ selector: "app-pagos-no-identificados", imports: [
      FormularioFlotanteComponent,
      EditarCargaMasivaComponent,
      TablaComponent,
      FormsModule
    ], template: '<div class="container-fluid p-3 my-1 rounded shadow bg-white">\n  <h4>Transferencias Bancarias o Pagos no identificados</h4>\n  <div class="row justify-content-center">\n    <div class="col-12 col-md-6 my-3 rounded border p-3 bg-light">\n      <h5 class="mb-3 text-primary"><i class="bi bi-funnel me-2"></i>Filtros avanzados</h5>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Estado del pago</label>\n        <select class="form-select" [(ngModel)]="filtros.estado">\n          <option value="">Todos los pagos</option>\n          <option value="aplicado">Aplicados</option>\n          <option value="no_identificado">No identificados</option>\n        </select>\n      </div>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Referencia</label>\n        <input type="text" class="form-control" placeholder="Buscar por referencia..."\n          [(ngModel)]="filtros.referencia">\n      </div>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Monto</label>\n        <div class="input-group">\n          <span class="input-group-text">$</span>\n          <input type="number" class="form-control" placeholder="0.00" [(ngModel)]="filtros.monto" step="0.01"\n            min="0">\n        </div>\n      </div>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Estado Cr\xE9dito</label>\n        <div class="input-group">\n          <span class="input-group-text">Estado</span>\n          <input type="text" class="form-control" placeholder="Ingresa algo para filtrar..." [(ngModel)]="filtros.estado_credito">\n        </div>\n      </div>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Rango de fechas</label>\n        <div class="row g-2">\n          <div class="col-md-6">\n            <label class="small text-muted">Desde</label>\n            <input type="date" class="form-control" [(ngModel)]="filtros.desde">\n          </div>\n          <div class="col-md-6">\n            <label class="small text-muted">Hasta</label>\n            <input type="date" class="form-control" [(ngModel)]="filtros.hasta">\n          </div>\n        </div>\n      </div>\n\n      <div class="d-flex justify-content-between mt-4">\n        <button class="btn btn-outline-secondary" (click)="limpiarFiltros()">\n          <i class="bi bi-eraser me-1"></i> Limpiar\n        </button>\n        <button class="btn btn-primary" (click)="aplicarFiltros()">\n          <i class="bi bi-check-circle me-1"></i> Aplicar filtros\n        </button>\n      </div>\n    </div>\n  </div>\n  @if (mostrarTabla) {\n    <app-tabla [controller]="cargaMasivaController" [barraBusqueda]="false"\n      [showBarraButtons]="false" [checkbox]="false" [tableDefinition]="tabla" [useDefaultRowEditRedirect]="false"\n      [relations]="relations" (rowEditarClick)="editarPago($event)" [getExtra]="getExtra" [rowEliminar]="false"\n      [getConditionals]="getConditionals">\n    </app-tabla>\n  }\n</div>\n<app-formulario-flotante [(show)]="showEdit" size="large">\n  @if (showEdit) {\n    <app-editar-carga-masiva [cargaMasivaEdit]="cargaMasivaEdit"\n      (cargaMasivaEditChange)="showEdit=false" />\n  }\n</app-formulario-flotante>' }]
  }], () => [{ type: PagoCargaMasivaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagosNoIdentificadosComponent, { className: "PagosNoIdentificadosComponent", filePath: "src/app/pagos/pagos-no-identificados/pagos-no-identificados.component.ts", lineNumber: 57 });
})();

// src/app/pagos/pagos-facturacion/form-datos-fiscales/form-datos-fiscales.component.ts
var _c04 = () => ({ required: true });
var REGIMEN_FISCAL_OPTIONS = [
  { "value": "601", "label": "601-General de Ley Personas Morales" },
  { "value": "603", "label": "603-Personas Morales con Fines no Lucrativos" },
  { "value": "605", "label": "605-Sueldos y Salarios e Ingresos Asimilados a Salarios" },
  { "value": "606", "label": "606-Arrendamiento" },
  { "value": "608", "label": "608-Dem\xE1s ingresos" },
  { "value": "609", "label": "609-Consolidaci\xF3n" },
  { "value": "610", "label": "610-Residentes en el Extranjero sin Establecimiento Permanente en M\xE9xico" },
  { "value": "611", "label": "611-Ingresos por Dividendos (socios y accionistas)" },
  { "value": "612", "label": "612-Personas F\xEDsicas con Actividades Empresariales y Profesionales" },
  { "value": "614", "label": "614-Ingresos por intereses" },
  { "value": "616", "label": "616-Sin obligaciones fiscales" },
  { "value": "620", "label": "620-Sociedades Cooperativas de Producci\xF3n que optan por diferir sus ingresos" },
  { "value": "621", "label": "621-Incorporaci\xF3n Fiscal" },
  { "value": "622", "label": "622-Actividades Agr\xEDcolas, Ganaderas, Silv\xEDcolas y Pesqueras" },
  { "value": "623", "label": "623-Opcional para Grupos de Sociedades" },
  { "value": "624", "label": "624-Coordinados" },
  { "value": "628", "label": "628-Hidrocarburos" },
  { "value": "607", "label": "607-R\xE9gimen de Enajenaci\xF3n o Adquisici\xF3n de Bienes" },
  { "value": "629", "label": "629-De los Reg\xEDmenes Fiscales Preferentes y de las Empresas Multinacionales" },
  { "value": "630", "label": "630-Enajenaci\xF3n de acciones en bolsa de valores" },
  { "value": "615", "label": "615-R\xE9gimen de los ingresos por obtenci\xF3n de premios" },
  { "value": "625", "label": "625-R\xE9gimen de las Actividades Empresariales con ingresos a trav\xE9s de Plataformas Tecnol\xF3gicas" },
  { "value": "626", "label": "626-R\xE9gimen Simplificado de Confianza" }
];
var FORM_DEF = [
  {
    title: "Datos Fiscales",
    fields: [
      { key: "rfc", label: "RFC:", type: "text" },
      {
        key: "regimen_fiscal_sat",
        label: "R\xE9gimen Fiscal:",
        defaultOption: 0,
        options: REGIMEN_FISCAL_OPTIONS
      },
      { key: "codigo_postal", label: "C\xF3digo Postal:", type: "number" },
      { key: "primer_nombre", label: "Nombre/Raz\xF3n Social:", type: "text" },
      { key: "primer_apellido", label: "Apellido Paterno:", type: "text", validator: { required: false } },
      { key: "segundo_apellido", label: "Apellido Materno:", type: "text", validator: { required: false } },
      { key: "calle", label: "Calle", type: "text", defaultValue: "", validator: { required: false } },
      { key: "colonia", label: "Colonia", type: "text", defaultValue: "", validator: { required: false } },
      { key: "municipio", label: "Municipio", type: "text", defaultValue: "", validator: { required: false } },
      { key: "estado", label: "Estado", type: "text", defaultValue: "BAJA CALIFORNIA", validator: { required: false } }
    ]
  }
];
var FORM_CONDITIONAL = [
  // {
  //   key: 'regimen_fiscal_sat',
  //   operator: '==',
  //   value: '612',
  //   target: 'primer_apellido',
  //   targetAction: 'hide',
  // }
];
var _FormDatosFiscalesComponent = class _FormDatosFiscalesComponent {
  constructor(controller) {
    this.controller = controller;
    this.show = false;
    this.showChange = new EventEmitter();
    this.datoFiscalChange = new EventEmitter();
    this.saved = new EventEmitter();
    this.form = FORM_DEF;
    this.formConditionals = FORM_CONDITIONAL;
    console.info("FormDatosFiscalesComponent");
  }
  ngOnInit() {
    this.datoFiscal;
  }
};
_FormDatosFiscalesComponent.\u0275fac = function FormDatosFiscalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDatosFiscalesComponent)(\u0275\u0275directiveInject(DatosFiscalesService));
};
_FormDatosFiscalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDatosFiscalesComponent, selectors: [["app-form-datos-fiscales"]], inputs: { show: "show", datoFiscal: "datoFiscal" }, outputs: { showChange: "showChange", datoFiscalChange: "datoFiscalChange", saved: "saved" }, decls: 2, vars: 8, consts: [[3, "showChange", "show"], ["rowButtonClass", "row py-3 bg-white sticky-bottom z-2", 3, "editChange", "controller", "form", "isolatedForm", "conditionals", "edit", "validator"]], template: function FormDatosFiscalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function FormDatosFiscalesComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function FormDatosFiscalesComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      return ctx.showChange.emit($event);
    });
    \u0275\u0275elementStart(1, "app-generic-form", 1);
    \u0275\u0275twoWayListener("editChange", function FormDatosFiscalesComponent_Template_app_generic_form_editChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.datoFiscal, $event) || (ctx.datoFiscal = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function FormDatosFiscalesComponent_Template_app_generic_form_editChange_1_listener($event) {
      return ctx.datoFiscalChange.emit($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.controller)("form", ctx.form)("isolatedForm", true)("conditionals", ctx.formConditionals);
    \u0275\u0275twoWayProperty("edit", ctx.datoFiscal);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(7, _c04));
  }
}, dependencies: [
  FormsModule,
  FormularioFlotanteComponent,
  GenericFormComponent
], encapsulation: 2 });
var FormDatosFiscalesComponent = _FormDatosFiscalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDatosFiscalesComponent, [{
    type: Component,
    args: [{ selector: "app-form-datos-fiscales", imports: [
      FormsModule,
      FormularioFlotanteComponent,
      GenericFormComponent
    ], template: '<app-formulario-flotante [(show)]="show" (showChange)="showChange.emit($event)">\n  <app-generic-form\n    [controller]="controller"\n    [form]="form"\n    [isolatedForm]="true"\n    [conditionals]="formConditionals"\n    [(edit)]="datoFiscal"\n    (editChange)="datoFiscalChange.emit($event)"\n    rowButtonClass="row py-3 bg-white sticky-bottom z-2"\n    [validator]="{ required: true }"\n    ></app-generic-form>\n</app-formulario-flotante>\n' }]
  }], () => [{ type: DatosFiscalesService }], { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], datoFiscal: [{
    type: Input
  }], datoFiscalChange: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDatosFiscalesComponent, { className: "FormDatosFiscalesComponent", filePath: "src/app/pagos/pagos-facturacion/form-datos-fiscales/form-datos-fiscales.component.ts", lineNumber: 79 });
})();

// src/app/pagos/pagos-facturacion/toasty-notification-component/services/toasty.service.ts
var _ToastyService = class _ToastyService {
  constructor() {
    this._toasts = new BehaviorSubject([]);
    this.toasts$ = this._toasts.asObservable();
    this.counter = 0;
  }
  show(type, message, title) {
    const id = ++this.counter;
    const newToast = { id, type, message, title };
    this._toasts.next([...this._toasts.getValue(), newToast]);
  }
  remove(id) {
    const currentToasts = this._toasts.getValue();
    this._toasts.next(currentToasts.filter((toast) => toast.id !== id));
  }
};
_ToastyService.\u0275fac = function ToastyService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastyService)();
};
_ToastyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastyService, factory: _ToastyService.\u0275fac, providedIn: "root" });
var ToastyService = _ToastyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pagos/pagos-facturacion/verificar-modal/verificar-modal.component.ts
function VerificarModalComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 11);
    \u0275\u0275text(2, "ID Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.abonoId ? ctx_r0.abonoId : "", " ");
  }
}
function VerificarModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 3)(1, "tbody")(2, "tr")(3, "th", 11);
    \u0275\u0275text(4, "ID Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, VerificarModalComponent_Conditional_4_Conditional_7_Template, 5, 1, "tr");
    \u0275\u0275elementStart(8, "tr")(9, "th", 11);
    \u0275\u0275text(10, "Nombre del Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tr")(14, "th", 11);
    \u0275\u0275text(15, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tr")(19, "th", 11);
    \u0275\u0275text(20, "UUID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tr")(24, "th", 11);
    \u0275\u0275text(25, "Monto Factura");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currency");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.credito == null ? null : ctx_r0.credito.id) ? ctx_r0.credito == null ? null : ctx_r0.credito.id : "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.type !== "comision" ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate3(" ", ctx_r0.datoFiscal.primer_nombre, " ", ctx_r0.datoFiscal.primer_apellido, " ", ctx_r0.datoFiscal.segundo_apellido, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.datoFiscal.rfc);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.factura ? ctx_r0.factura.uid_cicofi : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 8, ctx_r0.monto_factura));
  }
}
function VerificarModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function VerificarModalComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadFactura("pdf"));
    });
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2, " PDF ");
    \u0275\u0275elementEnd();
  }
}
function VerificarModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function VerificarModalComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.downloadFactura("xml"));
    });
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2, " XML ");
    \u0275\u0275elementEnd();
  }
}
function VerificarModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function VerificarModalComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCancelacion());
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, " Cancelar ");
    \u0275\u0275elementEnd();
  }
}
function VerificarModalComponent_Conditional_13_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const motivo_r6 = ctx.$implicit;
    \u0275\u0275property("value", motivo_r6.clave);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(motivo_r6.descripcion);
  }
}
function VerificarModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 17)(2, "label", 18);
    \u0275\u0275text(3, "Motivo Cancelaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 19);
    \u0275\u0275listener("change", function VerificarModalComponent_Conditional_13_Template_select_change_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onChangeMotivo($event));
    });
    \u0275\u0275elementStart(5, "option", 20);
    \u0275\u0275text(6, "Selecccione...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, VerificarModalComponent_Conditional_13_For_8_Template, 2, 2, "option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 22);
    \u0275\u0275listener("click", function VerificarModalComponent_Conditional_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.procesarCancelacion());
    });
    \u0275\u0275element(10, "i", 16);
    \u0275\u0275text(11, " Procesar la Cancelaci\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.motivoCancelacion);
  }
}
var _VerificarModalComponent = class _VerificarModalComponent {
  constructor(api, toastyService, utils2) {
    this.api = api;
    this.toastyService = toastyService;
    this.utils = utils2;
    this.show = false;
    this.showChange = new EventEmitter();
    this.type = "";
    this.facturacionDetalle = [];
    this.cancelEvent = new EventEmitter();
    this.title = "Detalle Factura";
    this.monto_factura = 0;
    this.motivoCancelacion = [
      // { clave: '01', descripcion: 'Comprobante emitido con errores con relación' },
      { clave: "02", descripcion: "Comprobante emitido con errores sin relaci\xF3n" },
      { clave: "03", descripcion: "No se llevo a cabo la operaci\xF3n" },
      { clave: "04", descripcion: "Operaci\xF3n nominativa relacionada en una factura global" }
    ];
    this.showMotivo = false;
    this.motivo = "";
  }
  ngOnInit() {
    console.log(this.datoFiscal);
  }
  ngOnChanges() {
    console.log(this.facturacionDetalle);
    this.monto_factura = 0;
    this.title = this.type === "comision" ? "Detalle Factura - Comisi\xF3n" : "Detalle Factura - Pago";
    if (this.credito) {
      if (this.type === "comision") {
        this.monto_factura = this.credito?.monto_autorizado ? this.credito.monto_autorizado * 0.015 : 0;
      } else {
        const estado_cuenta = this.credito?.estado_cuenta;
        if (estado_cuenta && estado_cuenta.abonos_distribuidos) {
          const abonosDist = JSON.parse(estado_cuenta?.abonos_distribuidos);
          if (abonosDist && abonosDist.length > 0) {
            this.monto_factura = abonosDist.find((abono) => abono.abono.id === this.abonoId)?.pago_interes || 0;
          }
        }
      }
    }
    this.factura = this.type === "comision" ? this.facturacionDetalle?.find((factura) => factura.tipo_factura === this.type) : this.facturacionDetalle?.find((factura) => factura.abono_id === this.abonoId);
    console.log("factura", this.factura);
  }
  downloadFactura(type) {
    console.log(this.factura);
    if (!this.factura) {
      this.toastyService.show("error", "No se encontr\xF3 la factura.");
      return;
    }
    switch (type) {
      case "xml":
        if (!this.factura.xml_timbrado) {
          this.toastyService.show("error", "No se encontr\xF3 el XML");
          return;
        }
        this._downloadXml(this.factura.xml_timbrado, this.factura.uid_cicofi ? this.factura.uid_cicofi : "factura_xml");
        break;
      case "pdf":
        if (!this.factura.uid_cicofi) {
          this.toastyService.show("error", "No se encontr\xF3 el UUID.");
          return;
        }
        this._downloadPdf(this.factura.uid_cicofi);
        break;
    }
  }
  showCancelacion() {
    this.showMotivo = !this.showMotivo;
  }
  onChangeMotivo(event) {
    const { value } = event.target;
    this.motivo = value;
  }
  procesarCancelacion() {
    this.api.post("factura/cancelar", {
      uuid: this.factura?.uid_cicofi,
      motivo: this.motivo
    }, null, true).subscribe((res) => {
      console.log(res);
      const { data } = res;
      if (!data) {
        return;
      }
      if (data.CancelacionCorrecta !== "true") {
        this.toastyService.show("error", data.ErrorCancelacion);
        return;
      }
      this.toastyService.show("success", "La factura se cancel\xF3 correctamente.");
      this.showMotivo = false;
      this.cancelEvent.emit(data);
    });
  }
  _downloadXml(xmlString, uuid) {
    if (!xmlString) {
      this.toastyService.show("error", "No se encontr\xF3 la factura.");
      return;
    }
    const blob = new Blob([xmlString], { type: "text/xml" });
    const url = window.URL.createObjectURL(blob);
    const fileName = `${uuid}.xml`;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }
  _downloadPdf(uuid) {
    this.api.post("factura/pdf", { uuid }, null, true).subscribe((res) => {
      console.log(res);
      const { data: { GeneraPDFCFDIV33Result } } = res;
      console.log(GeneraPDFCFDIV33Result);
      if (GeneraPDFCFDIV33Result.PDFCorrecto !== "true") {
        this.toastyService.show("error", "No se gener\xF3 correctamente la factura.");
        return;
      }
      let PDF = GeneraPDFCFDIV33Result.PDF;
      try {
        if (PDF.includes(",")) {
          PDF = PDF.split(",")[1];
        }
        const binaryData = atob(PDF);
        const byteArray = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          byteArray[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const fileName = `${uuid}.pdf`;
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error(e);
        this.toastyService.show("error", "No se gener\xF3 correctamente la factura.");
      }
    });
  }
  testTriggerCancel() {
    this.cancelEvent.emit({
      uuid: "1234567890",
      motivo: "Comprobante emitido con errores con relaci\xF3n"
    });
  }
};
_VerificarModalComponent.\u0275fac = function VerificarModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerificarModalComponent)(\u0275\u0275directiveInject(ApiServiceService), \u0275\u0275directiveInject(ToastyService), \u0275\u0275directiveInject(UtilsService));
};
_VerificarModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerificarModalComponent, selectors: [["app-verificar-modal"]], inputs: { show: "show", type: "type", abonoId: "abonoId", credito: "credito", datoFiscal: "datoFiscal", facturacionDetalle: "facturacionDetalle" }, outputs: { showChange: "showChange", cancelEvent: "cancelEvent" }, features: [\u0275\u0275NgOnChangesFeature], decls: 15, vars: 7, consts: [[3, "showChange", "show"], [1, "px-2", "text-primary", "font-weight-bold"], [1, "p-2"], [1, "table", "table-bordered", "p-2"], [1, "bg-light", "p-3", "w-100", "fs-6", "font-weight-bold"], [1, "bi", "bi-download"], [1, "d-flex", "flex-row", "justify-content-center"], [1, "btn", "btn-primary", "btn-lg", "mr-2"], [1, "btn", "btn-danger", "btn-lg"], [1, "px-5", "py-1", "mt-1", "mb-3"], [1, "py-2"], ["scope", "row", 1, "w-25", "table-light"], [1, "btn", "btn-primary", "btn-lg", "mr-2", 3, "click"], [1, "bi", "bi-file-earmark-pdf"], [1, "bi", "bi-file-earmark-zip"], [1, "btn", "btn-danger", "btn-lg", 3, "click"], [1, "bi", "bi-x-octagon-fill"], [1, "form-group"], [1, "font-weight-bold", 2, "color", "#691730"], [1, "form-select", 3, "change"], ["value", ""], [3, "value"], [1, "btn", "btn-primary", "px-5", "w-100", 3, "click"]], template: function VerificarModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function VerificarModalComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function VerificarModalComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      return ctx.showChange.emit($event);
    });
    \u0275\u0275elementStart(1, "h4", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275conditionalCreate(4, VerificarModalComponent_Conditional_4_Template, 29, 10, "table", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2)(6, "h5", 4);
    \u0275\u0275element(7, "i", 5);
    \u0275\u0275text(8, " Descargar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275conditionalCreate(10, VerificarModalComponent_Conditional_10_Template, 3, 0, "button", 7);
    \u0275\u0275conditionalCreate(11, VerificarModalComponent_Conditional_11_Template, 3, 0, "button", 7);
    \u0275\u0275conditionalCreate(12, VerificarModalComponent_Conditional_12_Template, 3, 0, "button", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, VerificarModalComponent_Conditional_13_Template, 12, 0, "div", 9);
    \u0275\u0275element(14, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.datoFiscal ? 4 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.factura ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.factura ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.factura ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showMotivo ? 13 : -1);
  }
}, dependencies: [CommonModule, CurrencyPipe, FormularioFlotanteComponent], encapsulation: 2 });
var VerificarModalComponent = _VerificarModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificarModalComponent, [{
    type: Component,
    args: [{ selector: "app-verificar-modal", imports: [
      CommonModule,
      FormularioFlotanteComponent
    ], template: `<app-formulario-flotante [(show)]="show" (showChange)="showChange.emit($event)">
  <h4 class="px-2 text-primary font-weight-bold">{{ title }}</h4>

  <div class="p-2">
    @if (datoFiscal) {
      <table class="table table-bordered p-2">
        <tbody>
          <tr>
            <th scope="row" class="w-25 table-light">ID Cr\xE9dito</th>
            <td>{{ credito?.id ? credito?.id : "" }}</td>
          </tr>
          @if (type !== 'comision') {
            <tr>
              <th scope="row" class="w-25 table-light">ID Pago</th>
              <td>{{ abonoId ? abonoId : '' }} </td>
            </tr>
          }
          <tr>
            <th scope="row" class="w-25 table-light">Nombre del Cliente</th>
            <td>
              {{ datoFiscal.primer_nombre }} {{ datoFiscal.primer_apellido }}
              {{ datoFiscal.segundo_apellido }}
            </td>
          </tr>
          <tr>
            <th scope="row" class="w-25 table-light">RFC</th>
            <td>{{ datoFiscal.rfc }}</td>
          </tr>
          <tr>
            <th scope="row" class="w-25 table-light">UUID</th>
            <td>{{ factura ? factura.uid_cicofi : "" }}</td>
          </tr>
          <tr>
            <th scope="row" class="w-25 table-light">Monto Factura</th>
            <td>{{ monto_factura | currency }}</td>
          </tr>
        </tbody>
      </table>
    }
    <!-- <button class="btn btn-warning" (click)="testTriggerCancel()">Cancel</button> -->
  </div>
  <!-- Descarga de la factura -->
  <div class="p-2">
    <h5 class="bg-light p-3 w-100 fs-6 font-weight-bold">
      <i class="bi bi-download"></i> Descargar
    </h5>
    <div class="d-flex flex-row justify-content-center">
      @if (factura) {
        <button
          class="btn btn-primary btn-lg mr-2"
          (click)="downloadFactura('pdf')"
          >
          <i class="bi bi-file-earmark-pdf"></i> PDF
        </button>
      }
      @if (factura) {
        <button
          class="btn btn-primary btn-lg mr-2"
          (click)="downloadFactura('xml')"
          >
          <i class="bi bi-file-earmark-zip"></i> XML
        </button>
      }
      @if (factura) {
        <button class="btn btn-danger btn-lg" (click)="showCancelacion()">
          <i class="bi bi-x-octagon-fill"></i> Cancelar
        </button>
      }
    </div>
  </div>

  <!-- Secci\xF3n para la cancelaci\xF3n -->
  @if (showMotivo) {
    <div class="px-5 py-1 mt-1 mb-3">
      <div class="form-group">
        <label style="color: #691730;" class="font-weight-bold">Motivo Cancelaci\xF3n:</label>
        <select class="form-select" (change)="onChangeMotivo($event)">
          <option value="">Selecccione...</option>
          @for (motivo of motivoCancelacion; track motivo) {
            <option [value]="motivo.clave">{{ motivo.descripcion }}</option>
          }
        </select>
      </div>
      <button class="btn btn-primary px-5 w-100" (click)="procesarCancelacion()">
        <i class="bi bi-x-octagon-fill"></i> Procesar la Cancelaci\xF3n
      </button>
    </div>
  }
  <!-- ./Descarga de la factura -->
  <!-- Espacio -->
  <div class="py-2"></div>
  <!-- ./Espacio -->
</app-formulario-flotante>
` }]
  }], () => [{ type: ApiServiceService }, { type: ToastyService }, { type: UtilsService }], { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], type: [{
    type: Input
  }], abonoId: [{
    type: Input
  }], credito: [{
    type: Input
  }], datoFiscal: [{
    type: Input
  }], facturacionDetalle: [{
    type: Input
  }], cancelEvent: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerificarModalComponent, { className: "VerificarModalComponent", filePath: "src/app/pagos/pagos-facturacion/verificar-modal/verificar-modal.component.ts", lineNumber: 26 });
})();

// src/app/pagos/pagos-facturacion/factura-masiva-modal/factura-masiva-modal.component.ts
function FacturaMasivaModalComponent_Conditional_10_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const factura_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(factura_r1.datos.rfc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(factura_r1.datos.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(factura_r1.datos.error);
  }
}
function FacturaMasivaModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "table", 9)(2, "thead")(3, "tr")(4, "th", 10);
    \u0275\u0275text(5, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 10);
    \u0275\u0275text(7, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 10);
    \u0275\u0275text(9, "Error");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275repeaterCreate(11, FacturaMasivaModalComponent_Conditional_10_For_12_Template, 7, 3, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.facturaFails);
  }
}
var _FacturaMasivaModalComponent = class _FacturaMasivaModalComponent {
  constructor(api) {
    this.api = api;
    this.show = false;
    this.showChange = new EventEmitter();
    this.callBackEvent = new EventEmitter();
    this.totalDatos = 0;
    this.porcentaje = 0;
    this.facturaFails = [];
  }
  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.datos, this.tipoFactura);
    this.totalDatos = this.datos?.length || 0;
  }
  procesarFacturas() {
    return __async(this, null, function* () {
      console.log(this.datos);
      if (!this.datos) {
        return;
      }
      this.porcentaje = 0;
      let salto = Math.ceil(100 / this.datos.length);
      for (let dt of this.datos) {
        const { datos } = dt;
        console.log(datos);
        if (!datos.success) {
          this.facturaFails.push(dt);
          this.porcentaje += salto;
          continue;
        }
        const { concepto, datoscfdi, receptor } = dt;
        try {
          const result = yield firstValueFrom(this.api.post("factura/generar", {
            Receptor: receptor,
            Concepto: concepto,
            DatosCfdi: datoscfdi,
            credito_id: datos.creditoid ?? 0,
            abono_id: datos.abonoid ?? 0,
            tipo_factura: "masivo"
          }, null, true));
          console.log(result);
          const { success, sicofi_response } = result;
          if (!success) {
            dt.datos.success = false;
            dt.datos.error = `${sicofi_response.CodigoError}: ${sicofi_response.ErrorCFDI}`;
            this.facturaFails.push(dt);
          }
          this.porcentaje += salto;
        } catch (error) {
          console.log(error);
        }
      }
      this.callBackEvent?.emit();
      console.log(this.porcentaje);
    });
  }
};
_FacturaMasivaModalComponent.\u0275fac = function FacturaMasivaModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacturaMasivaModalComponent)(\u0275\u0275directiveInject(ApiServiceService));
};
_FacturaMasivaModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacturaMasivaModalComponent, selectors: [["app-factura-masiva-modal"]], inputs: { show: "show", tipoFactura: "tipoFactura", datos: "datos" }, outputs: { showChange: "showChange", callBackEvent: "callBackEvent" }, features: [\u0275\u0275NgOnChangesFeature], decls: 14, vars: 7, consts: [[3, "showChange", "show"], [1, "px-2", "text-primary", "font-weight-bold"], [1, "p-2"], [1, "text-primary", "font-weight-bold"], [1, "p-3"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-success"], ["type", "button", 1, "btn", "btn-primary", "mt-2", "w-100", 3, "click"], [1, "bi", "bi-gear"], [1, "table", "table-bordered", "table-striped", "table-sm", "table-danger"], [1, "font-weight-bold", "text-chico"], [1, "text-chico"]], template: function FacturaMasivaModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function FacturaMasivaModalComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function FacturaMasivaModalComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      return ctx.showChange.emit($event);
    });
    \u0275\u0275elementStart(1, "h4", 1);
    \u0275\u0275text(2, "Facturaci\xF3n Masiva");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, FacturaMasivaModalComponent_Conditional_10_Template, 13, 0, "div", 4);
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function FacturaMasivaModalComponent_Template_button_click_11_listener() {
      return ctx.procesarFacturas();
    });
    \u0275\u0275element(12, "i", 8);
    \u0275\u0275text(13, " Procesar Facturas ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Total a Facturar: ", (ctx.datos == null ? null : ctx.datos.length) || 0, " pagos");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx.porcentaje + "%");
    \u0275\u0275attribute("aria-valuenow", ctx.porcentaje);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.porcentaje, "% ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.facturaFails.length > 0 ? 10 : -1);
  }
}, dependencies: [FormularioFlotanteComponent], styles: ["\n\n.text-chico[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n/*# sourceMappingURL=factura-masiva-modal.component.css.map */"] });
var FacturaMasivaModalComponent = _FacturaMasivaModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacturaMasivaModalComponent, [{
    type: Component,
    args: [{ selector: "app-factura-masiva-modal", imports: [
      FormularioFlotanteComponent
    ], template: `<app-formulario-flotante [(show)]="show" (showChange)="showChange.emit($event)">
  <h4 class="px-2 text-primary font-weight-bold">Facturaci\xF3n Masiva</h4>

  <div class="p-2">
    <span class="text-primary font-weight-bold">Total a Facturar: {{ datos?.length || 0 }} pagos</span>
  </div>


  <div class="p-3">
    <!-- Barra de Progreso -->
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated bg-success"
        role="progressbar"
        [style.width]="porcentaje + '%'"
        [attr.aria-valuenow]="porcentaje"
        aria-valuemin="0"
        aria-valuemax="100"
        >
        {{ porcentaje }}%
      </div>
    </div>
    <!-- ./Barra de Progreso -->

    <!-- Facturas Fallidas -->
    @if (facturaFails.length > 0) {
      <div class="p-3">
        <table class="table table-bordered table-striped table-sm table-danger">
          <thead>
            <tr>
              <th class="font-weight-bold text-chico">RFC</th>
              <th class="font-weight-bold text-chico">Nombre</th>
              <th class="font-weight-bold text-chico">Error</th>
            </tr>
          </thead>
          <tbody>
            @for (factura of facturaFails; track factura) {
              <tr>
                <td class="text-chico">{{ factura.datos.rfc }}</td>
                <td class="text-chico">{{ factura.datos.nombre }}</td>
                <td class="text-chico">{{ factura.datos.error }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
    <!-- ./Facturas Fallidas -->

    <button class="btn btn-primary mt-2 w-100" (click)="procesarFacturas()" type="button">
      <i class="bi bi-gear"></i> Procesar Facturas
    </button>
  </div>

</app-formulario-flotante>
`, styles: ["/* src/app/pagos/pagos-facturacion/factura-masiva-modal/factura-masiva-modal.component.css */\n.text-chico {\n  font-size: 10px;\n}\n/*# sourceMappingURL=factura-masiva-modal.component.css.map */\n"] }]
  }], () => [{ type: ApiServiceService }], { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], tipoFactura: [{
    type: Input
  }], datos: [{
    type: Input
  }], callBackEvent: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacturaMasivaModalComponent, { className: "FacturaMasivaModalComponent", filePath: "src/app/pagos/pagos-facturacion/factura-masiva-modal/factura-masiva-modal.component.ts", lineNumber: 16 });
})();

// src/app/pagos/pagos-facturacion/helpers/Utils.helpers.ts
var UtilsHelper = class {
  constructor() {
  }
  static getCurrentMonthDates() {
    const today = /* @__PURE__ */ new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const startStr = firstDay.toISOString().split("T")[0];
    const endStr = lastDay.toISOString().split("T")[0];
    return { start: startStr, end: endStr };
  }
  static getExtra(tipo, column = "fecha", tipoFac = "pagos") {
    let extra = {
      sort: JSON.stringify({ column, desc: true }),
      filtro: ""
    };
    switch (tipo) {
      case "1":
        extra.filtro = tipoFac == "pagos" ? JSON.stringify({ listos_para_facturar: true }) : "listos_para_facturar";
        break;
      case "2":
        extra.filtro = tipoFac === "pagos" ? JSON.stringify({ no_listos_para_facturar: true }) : "no_listos_para_facturar";
        break;
      case "3":
        extra.filtro = tipoFac === "pagos" ? JSON.stringify({ facturados: true }) : "facturados";
    }
    return extra;
  }
};

// src/app/pagos/pagos-facturacion/services/facturacion-detalle.service.ts
var _FacturacionDetalle2Service = class _FacturacionDetalle2Service extends SuperService {
  //creditos_abonos
  constructor(injector) {
    super(injector);
    this.model = "facturas_detalles";
  }
  getDetalleFactura() {
    return __async(this, null, function* () {
      const dataDetalle = yield this.get({}, {
        page: 1,
        per_page: 80
      }, ["*"]);
      console.log("Servicio de detalles de factura inicializado:");
      console.log(dataDetalle);
    });
  }
};
_FacturacionDetalle2Service.\u0275fac = function FacturacionDetalle2Service_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacturacionDetalle2Service)(\u0275\u0275inject(Injector));
};
_FacturacionDetalle2Service.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FacturacionDetalle2Service, factory: _FacturacionDetalle2Service.\u0275fac, providedIn: "any" });
var FacturacionDetalle2Service = _FacturacionDetalle2Service;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacturacionDetalle2Service, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/pagos/pagos-facturacion/services/tabla-pagos.service.ts
var _TablaPagosService = class _TablaPagosService extends SuperService {
  constructor(injector, creditoController, creditoAbonoController, utilsService, utilsEstadoCuenta, facturacionDetalleController) {
    super(injector);
    this.creditoController = creditoController;
    this.creditoAbonoController = creditoAbonoController;
    this.utilsService = utilsService;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.facturacionDetalleController = facturacionDetalleController;
    this.model = "creditos_abonos";
  }
  /**
   * Funcion para validar el Credito que se puede recibir como entrada para el servicio
   * @param creditoParam
   * @returns
   */
  validarCreditoID(creditoParam) {
    if (creditoParam == void 0) {
      console.error("El creditoParam es undefined");
      return -1;
    }
    if (typeof creditoParam == "object") {
      if (!creditoParam.id || creditoParam.id <= 0) {
        console.error("El ID del objeto es inv\xE1lido");
        return -1;
      }
      return creditoParam.id;
    }
    if (typeof creditoParam == "number") {
      if (creditoParam <= 0) {
        console.error("El ID num\xE9rico es inv\xE1lido");
        return -1;
      }
      return creditoParam;
    }
    console.error("El parametro no es valido");
    return -1;
  }
  /**
   * Funcion para extraer los datos necesarios para una fila de la tabla
   * @param dataObject
   * @param fields
   * @param computedFields
   * @returns
   */
  extractTableRows(dataObject, fields, computedFields = []) {
    if (!dataObject || !dataObject.data || !Array.isArray(dataObject.data)) {
      return [];
    }
    return dataObject.data.map((item) => {
      const row = {};
      for (const compute of computedFields) {
        const computedObj = compute(item);
        Object.assign(row, computedObj);
      }
      return row;
    });
  }
  /**
   * Funcion para validar si el codigo postal contiene 5 digitos, si no, retorna falso
   * @param cp
   * @returns
   */
  isValidCodigoPostal(cp) {
    return typeof cp === "string" && /^\d{5}$/.test(cp.trim());
  }
  /**
   * Obtiene el nombre, apellido paterno y apellido materno de un item
   * @param item
   * @returns
   */
  getNombre(item) {
    const datos = item.creditos?.datos_persona_fisica?.datos_personales;
    if (datos) {
      return [datos.nombre, datos.apellido_paterno, datos.apellido_materno].map((s) => s?.trim()).filter(Boolean).join(" ") || null;
    }
    return item.creditos?.datos_personas_morales?.razon_social?.trim() || "N/A";
  }
  /**
   * Funcion para obtener el regimen fiscal de
   * @param item
   * @returns
   */
  getRegimenFiscal(item) {
    return item.creditos?.datos_personas_morales ? "PERSONA MORAL" : item.creditos?.datos_persona_fisica ? "PERSONA FISICA CON ACTIVIDAD EMPRESARIAL" : "N/A";
  }
  /**
   * Funcion para obtener el RFC del del acreditado
   * @param item
   * @returns
   */
  getRFC(item) {
    return item.creditos?.datos_persona_fisica?.datos_personales?.rfc?.trim() || item.creditos?.datos_personas_morales?.rfc?.trim() || "N/A";
  }
  /**
   * Funcion para obtener el codigo postal del acreditado
   * @param item
   * @returns
   */
  getCP(item) {
    const cp = item.creditos?.datos_persona_fisica?.datos_personales?.cp || item.creditos?.datos_personas_morales?.cp;
    return this.isValidCodigoPostal(cp) ? cp.trim() : "N/A";
  }
  /**
   * Funcion para obtener los datos del backend
   */
  getData() {
    return __async(this, null, function* () {
      const filtros = {};
      const creditos = yield this.creditoAbonoController.get(void 0, {
        page: 1,
        per_page: 10
      }, [
        "creditos.datosPersonaFisica",
        "creditos.datosPersonaFisica.datosPersonales",
        "creditos.datosPersonasMorales",
        "creditos.estadoCuenta",
        "creditos.abonos",
        "creditos.estadoCuenta",
        "facturas"
      ], {
        filtro: JSON.stringify(filtros)
      });
      const abonos = creditos.data?.map((credito_abono) => {
        const estadoCuenta = credito_abono.creditos?.estado_cuenta;
        this.utilsEstadoCuenta.parseEstadoCuenta(estadoCuenta);
        const abonoDistribuido = estadoCuenta?.abonos_distribuidos?.find((abonoDistribuido2) => abonoDistribuido2.abono.id == credito_abono.id);
        return __spreadProps(__spreadValues({}, credito_abono), {
          pago_capital: abonoDistribuido?.pago_capital,
          pago_interes: abonoDistribuido?.pago_interes,
          pago_iva: abonoDistribuido?.pago_iva
        });
      });
      console.log("ABONOS NUEVOS");
      console.log(abonos);
      const fields = [
        "creditos.id",
        "id",
        "creditos.datos_personas_morales",
        "creditos.datos_personas_morales.razon_social",
        "creditos.datos_personas_morales.rfc",
        "creditos.datos_personas_morales.cp",
        "creditos.datos_persona_fisica",
        "creditos.datos_persona_fisica.datos_personales.rfc",
        "creditos.datos_persona_fisica.datos_personales.codigo_postal",
        "creditos.estadoCuenta",
        "fecha",
        "concepto",
        "referencia_pago",
        "monto",
        "pago_capital",
        "pago_interes",
        "pago_iva"
      ];
      const getValueByPath = (obj, path) => {
        return path.reduce((acc, key) => acc && acc[key] !== void 0 ? acc[key] : null, obj);
      };
      const formatKeyName = (path) => {
        const parts = path.split(".");
        const lastPart = parts.pop();
        const prefix = parts.length ? parts[0].replace(/s$/, "") : "";
        const full = prefix ? `${prefix}_${lastPart}` : lastPart;
        return full.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
      };
      const rawComputedFields = fields.map((path) => {
        const key = formatKeyName(path);
        const pathArray = path.split(".");
        return (item) => ({ [key]: getValueByPath(item, pathArray) });
      });
      const customComputedFields = [
        (item) => ({ idCredito: item.credito_id }),
        (item) => ({ idAbono: item.id }),
        (item) => ({ nombre: this.getNombre(item)?.toUpperCase() }),
        (item) => ({ rfc: this.getRFC(item) }),
        (item) => ({ regimenFiscal: this.getRegimenFiscal(item) }),
        (item) => ({ cp: this.getCP(item) }),
        (item) => {
          const fechaRaw = item.fecha;
          return { fechaAbono: typeof fechaRaw === "string" ? fechaRaw.slice(0, 10) : "" };
        },
        (item) => ({ concepto: item.concepto ? item.concepto : "N/A" }),
        (item) => ({ referenciaPago: item.referencia ? item.referencia : "N/A" }),
        (item) => ({ montoAbono: item.monto }),
        (item) => {
          const fields2 = [
            this.getNombre(item),
            this.getRegimenFiscal(item),
            this.getRFC(item),
            this.getCP(item)
          ];
          const missing = fields2.some((value) => !value || value.trim() === "" || value === "N/A");
          return { estatus: missing ? "pendiente" : "listo" };
        }
      ];
      const computedFields = [...rawComputedFields, ...customComputedFields];
      const rows = this.extractTableRows(creditos, fields, computedFields);
      console.log("Filas de la tabla:");
      console.log(rows);
      return rows;
      console.log("Data cruda:");
      console.log(creditos);
    });
  }
  /**
   * Funcion para llenar los datos de la tabla
   * @param creditoParam
   */
  getTableRow(creditoParam) {
    return __async(this, null, function* () {
      const creditoID = this.validarCreditoID(creditoParam);
      const credito = yield this.creditoController.find(creditoID, [
        "datosPersonaFisica",
        "datosPersonaFisica.datosPersonales",
        "datosPersonasMorales",
        "estadoCuenta",
        "abonos"
      ]);
      if (!credito)
        return [];
      const abonos = (credito.abonos ?? []).sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
      const estadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(credito);
      const abonosDistribuidos = estadoCuenta?.abonos_distribuidos ?? [];
      const rows = abonosDistribuidos.map((item) => {
        const datosPersonales = credito.datos_persona_fisica?.datos_personales;
        const nombreCliente = this.utilsService.nombreClienteFromDatosPersonales(datosPersonales);
        const razonSocial = credito.datos_personas_morales?.razon_social;
        const rfc = datosPersonales?.rfc ?? credito.datos_personas_morales?.rfc;
        const cp = datosPersonales?.codigo_postal ?? credito.datos_personas_morales?.codigo_postal;
        const hasMissingData = !nombreCliente || nombreCliente === "N/A" || !rfc || !cp;
        return {
          // Datos del crédito correspondiente al abono
          idCredito: credito.id,
          idAbono: item.abono.id,
          nombre: nombreCliente !== "N/A" ? nombreCliente : razonSocial?.toUpperCase(),
          rfc: rfc?.toUpperCase(),
          regimenFiscal: credito.datos_persona_fisica == null ? "PERSONA MORAL" : "PERSONA FISICA CON ACTIVIDAD EMPRESARIAL",
          cp: cp?.toUpperCase(),
          // Datos del abono individual
          fechaAbono: item.abono.fecha.slice(0, 10),
          concepto: item.abono.concepto,
          referenciaPago: item.abono.referencia_pago?.toUpperCase(),
          montoAbono: item.abono.monto,
          // Distribución del abono
          pagoCapital: item.pago_capital,
          pagoInteres: item.pago_interes,
          pagoIva: item.pago_iva,
          // Nuevos campos
          estatus: hasMissingData ? "pendiente" : "listo"
          //facturado: item.abono.facturado === true, // Ajusta esta línea si usas otro campo para facturación
        };
      });
      return rows;
    });
  }
  /**
   * Funcion para etiquetar el estatus de un pago. Puede ser FACTURADO, PENDIENTE o LISTO
   *   - Pendiente: son los pagos que se definen como 'ERRORES'. A estos pagos les faltan datos como nombre, RFC, regimen o CP
   *   - Listo: son los pagos que cuentan con todos los datos necesarios para comenzar el proceso de facturacion.
   *   - Facturado: Son los pagos que han sido facturados exitosamente
   */
  etiquetarPago() {
  }
};
_TablaPagosService.\u0275fac = function TablaPagosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaPagosService)(\u0275\u0275inject(Injector), \u0275\u0275inject(CreditoService), \u0275\u0275inject(CreditoAbonoService), \u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(FacturacionDetalle2Service));
};
_TablaPagosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TablaPagosService, factory: _TablaPagosService.\u0275fac, providedIn: "any" });
var TablaPagosService = _TablaPagosService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaPagosService, [{
    type: Injectable,
    args: [{ providedIn: "any" }]
  }], () => [{ type: Injector }, { type: CreditoService }, { type: CreditoAbonoService }, { type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: FacturacionDetalle2Service }], null);
})();

// src/app/pagos/pagos-facturacion/services/factura-masiva.service.ts
var _FacturaMasivaService = class _FacturaMasivaService {
  constructor(utils2) {
    this.utils = utils2;
  }
  checkDatosFiscales(creditos) {
    for (const credito of creditos) {
      const datosFiscales = this.utils.getDatosFiscalesFromCredito(credito);
      if (!datosFiscales) {
        return false;
      } else {
        const razonSocial = this.utils.getRazonSocialFromCredito(credito);
        if (razonSocial === "" || razonSocial === "N/A") {
          return false;
        }
        const rfc = this.utils.rfcFromCredito(credito);
        if (rfc === "" || rfc === "N/A") {
          return false;
        }
        const cp = this.utils.getCp(credito);
        if (cp === "" || cp === "N/A") {
          return false;
        }
        const regimenCode = this.utils.getRegimenFiscalCodeFromCredito(credito);
        if (regimenCode === "" || regimenCode === "N/A") {
          return false;
        }
      }
    }
    return true;
  }
  checkTieneFacturaComsionSel(seleccionados) {
    for (let sel of seleccionados) {
      const fac_detalle = this.utils.getFacturacionDetalleFromCredito(sel);
      if (fac_detalle) {
        if (this.utils.existeFactura(fac_detalle, "comision")) {
          return true;
        }
      }
    }
    return false;
  }
  generarDatosFacturaComision(datos) {
    let datosFactura = [];
    for (let d of datos) {
      console.log(d);
      const email = this.utils.emailFromCredito(d);
      const cp = this.utils.getCpFiscal(d);
      let df = this._getAndVerificar(d, 0, true);
      if (df.success) {
        const { subtotal, iva, total } = this.getFacturaValues(d);
        const receptor = {
          Rfc: df.rfc,
          RazonSocial: df.nombre,
          UsoCFDI: "G03",
          Pais: "Mexico",
          Email: email ? email : "",
          //
          RegimenFiscal: df.regimen,
          DomicilioFiscal: cp.toString().padStart(5, "0")
        };
        const concepto = {
          ClaveProdServ: "84101700",
          ClaveUnidad: "E48",
          Cantidad: 1,
          Unidad: "PAGO",
          Descripcion: "Comisi\xF3n por apertura de cr\xE9dito",
          Subtotal: subtotal,
          IvaRetenido: 0,
          IsrRetenido: 0,
          Descuento: 0,
          TotalIva: iva,
          ValorUnitario: subtotal,
          Importe: subtotal,
          ExentoIva: 0
        };
        const datosCfdi = {
          FormaPago: "03",
          Moneda: "MXN",
          Subtotal: subtotal,
          Total: total,
          // subtotal + iva,
          TotalIva: iva,
          Descuento: 0,
          CondicionesPago: "Contado",
          Serie: "A",
          TipodeComprobante: "I",
          TipoCambio: 1,
          LugarDeExpedicion: "22010",
          MetodoPago: "PUE"
        };
        datosFactura.push({
          receptor,
          concepto,
          datoscfdi: datosCfdi,
          datos: df
        });
      } else {
        df.error = "Los datos fiscales no son v\xE1lidos";
        datosFactura.push({
          datos: df
        });
      }
    }
    return datosFactura;
  }
  generarDatosFacturaPagos(datos) {
    console.log(datos);
    let datosFactura = [];
    for (let d of datos) {
      if (d.creditos) {
        const email = this.utils.emailFromCredito(d.creditos);
        const cp = this.utils.getCpFiscal(d.creditos);
        let df = this._getAndVerificar(d.creditos, d.id);
        if (df.success) {
          const pagoInteres = this.getAbonosDistrField(d, "interes");
          const pagoIva = this.getAbonosDistrField(d, "iva");
          if (pagoInteres == 0 || pagoIva == 0) {
            df.success = false;
            df.error = "No se puede generar la factura, no hay monto a facturar";
            datosFactura.push({
              datos: df
            });
            continue;
          }
          const calFactura = this.calculoFactura(pagoInteres);
          const receptor = {
            Rfc: df.rfc,
            RazonSocial: df.nombre,
            UsoCFDI: "G03",
            Pais: "Mexico",
            Email: email ? email : "",
            // "lcc.manuel@gmail.com",// item.email,
            RegimenFiscal: df.regimen,
            DomicilioFiscal: cp.toString().padStart(5, "0")
          };
          const concepto = {
            ClaveProdServ: "84101700",
            ClaveUnidad: "E48",
            Cantidad: 1,
            Unidad: "PAGO",
            Descripcion: "Pago por Interes",
            Subtotal: calFactura.subtotal,
            // pagoInteres
            IvaRetenido: 0,
            IsrRetenido: 0,
            TotalIva: calFactura.iva,
            // pagoIva
            Descuento: 0,
            ValorUnitario: calFactura.subtotal,
            // pagoInteres
            Importe: calFactura.subtotal,
            // pagoInteres
            ExentoIva: 0
          };
          const datosCfdi = {
            FormaPago: "03",
            Moneda: "MXN",
            Subtotal: calFactura.subtotal,
            Total: calFactura.total,
            TotalIva: pagoIva,
            Descuento: 0,
            CondicionesPago: "Contado",
            Serie: "A",
            TipodeComprobante: "I",
            TipoCambio: 1,
            LugarDeExpedicion: "22010",
            MetodoPago: "PUE"
          };
          datosFactura.push({
            receptor,
            concepto,
            datoscfdi: datosCfdi,
            datos: df
          });
        } else {
          df.error = "Los datos fiscales no son v\xE1lidos";
          datosFactura.push({
            datos: df
          });
        }
      }
    }
    return datosFactura;
  }
  getFacturaValues(credito) {
    const roundDesc = 100;
    const comision = credito.monto_autorizado ? credito.monto_autorizado * 0.015 : 0;
    let subtotal = comision;
    let iva = subtotal * 0.16;
    let total = subtotal + iva;
    subtotal = Math.round(subtotal * roundDesc) / roundDesc;
    iva = Math.round(iva * roundDesc) / roundDesc;
    total = Math.round(total * roundDesc) / roundDesc;
    return { subtotal, iva, total };
  }
  _getAndVerificar(credito, abonoId, comision = false) {
    console.log(credito);
    let datosFactura = {
      creditoid: credito.id,
      abonoid: abonoId,
      rfc: "",
      cp: "",
      nombre: "",
      regimen: "",
      success: false
    };
    const rfc = this.utils.rfcFromCredito(credito);
    const cp = this.utils.getCp(credito);
    const nombre = this.utils.nombreFiscalClienteFromCredito(credito);
    const regimenCode = this.utils.getRegimenFiscalCodeFromCredito(credito);
    const fac_detalle = this.utils.getFacturacionDetalleFromCredito(credito);
    if (!rfc || !cp) {
      datosFactura.rfc = "";
      datosFactura.cp = "";
    } else {
      datosFactura.rfc = rfc;
      datosFactura.cp = cp;
      datosFactura.success = true;
    }
    if (cp === "00000" || cp === "0") {
      datosFactura.cp = "";
    } else {
      datosFactura.cp = cp;
      datosFactura.success = true;
    }
    if (regimenCode === "0") {
      datosFactura.regimen = "";
    } else {
      datosFactura.regimen = regimenCode;
      datosFactura.success = true;
    }
    if (!comision) {
      if (fac_detalle && fac_detalle.length > 0) {
        if (this.utils.existeFacturaPorAbonoId(fac_detalle, abonoId)) {
          datosFactura.success = false;
        } else {
          datosFactura.success = true;
        }
      }
    }
    datosFactura.nombre = nombre;
    return datosFactura;
  }
  getAbonosDistrField(abono, field) {
    const estadoCuenta = abono.creditos?.estado_cuenta;
    const abonosDistribuidos = JSON.parse(estadoCuenta?.abonos_distribuidos);
    switch (field) {
      case "capital":
        return abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_capital || 0;
      case "interes":
        return abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_interes || 0;
      case "iva":
        return abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_iva || 0;
      default:
        return 0;
    }
  }
  calculoFactura(sub) {
    const roundDesc = 100;
    const subT = Math.round(sub * roundDesc) / roundDesc;
    const iva = Math.round(subT * 0.16 * roundDesc) / roundDesc;
    const total = subT + iva;
    return {
      subtotal: subT,
      iva,
      total
    };
  }
};
_FacturaMasivaService.\u0275fac = function FacturaMasivaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacturaMasivaService)(\u0275\u0275inject(UtilsService));
};
_FacturaMasivaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FacturaMasivaService, factory: _FacturaMasivaService.\u0275fac, providedIn: "root" });
var FacturaMasivaService = _FacturaMasivaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacturaMasivaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: UtilsService }], null);
})();

// src/app/pagos/pagos-facturacion/table-facturacion/table-facturacion.component.ts
var _c05 = ["tablaPagos"];
var _c12 = () => ({});
var _c2 = () => ["creditos", "creditos.estadoCuenta", "creditos.datosPersonaFisica", "creditos.datosPersonaFisica.datosPersonales", "creditos.datosPersonaFisica.datosPersonales.datosFiscales", "creditos.datosPersonasMorales", "creditos.datosPersonasMorales.datosFiscales", "creditos.facturacionDetalle"];
var _c3 = () => ({ column: "fecha", desc: true });
var TABLE_DEF2 = {
  style: {
    table: "table table-sm"
  },
  columns: [
    { key: "id", header: "ID ABONO", style: { td: "text-center" } },
    { key: "creditos", subKey: "id", header: "Folio Cr\xE9dito" },
    {
      key: "row",
      header: "Acreditado",
      function: function(abono, utils2) {
        let nombre = utils2.nombreClienteFromCredito(abono.creditos);
        return `${nombre}`;
      },
      styleTdFunction: () => {
        return "fs-6";
      }
    },
    {
      key: "row",
      header: "Raz\xF3n Social",
      function: (abono, utils2) => {
        return utils2.nombreFiscalClienteFromCredito(abono.creditos);
      },
      styleTdFunction: (abono, utils2) => {
        const nombre = utils2.nombreFiscalClienteFromCredito(abono.creditos);
        if (nombre === "" || nombre === "N/A") {
          return "table-danger";
        }
        let fact_detalle = abono.creditos?.facturacion_detalle;
        if (fact_detalle) {
          return utils2.existeFacturaPorAbonoId(fact_detalle, abono.id) ? "table-success" : "";
        }
        return "";
      }
    },
    {
      key: "row",
      header: "RFC",
      function: (abono, utils2) => {
        return utils2.rfcFromCredito(abono.creditos);
      },
      styleTdFunction: (abono, utils2) => {
        const credito = abono.creditos;
        if (credito == null || credito == void 0) {
          return "";
        }
        if (!utils2.validarDatosFiscales(credito, "rfc")) {
          return "table-danger text-center";
        }
        let fact_detalle = abono.creditos?.facturacion_detalle;
        if (fact_detalle) {
          return utils2.existeFacturaPorAbonoId(fact_detalle, abono.id) ? "table-success" : "";
        }
        return "";
      },
      style: { th: "text-center" }
    },
    {
      key: "row",
      header: "Regimen",
      function: (abono, utils2) => {
        return utils2.getRegimenFiscalCodeFromCredito(abono.creditos);
      },
      styleTdFunction: (abono, utils2) => {
        const credito = abono.creditos;
        if (credito == null || credito == void 0) {
          return "";
        }
        if (!utils2.validarDatosFiscales(credito, "regimen")) {
          return "table-danger text-center";
        }
        return "";
      }
    },
    {
      key: "row",
      header: "C\xF3digo Postal",
      function: (abono, utils2) => {
        let cp = utils2.getCpFiscal(abono.creditos);
        return cp.toString().padStart(5, "0");
      },
      styleTdFunction: (abono, utils2) => {
        const credito = abono.creditos;
        if (credito == null || credito == void 0) {
          return "";
        }
        if (!utils2.validarDatosFiscales(credito, "cp")) {
          return "table-danger text-center";
        }
        return "";
      },
      style: { th: "text-center" }
    },
    {
      key: "fecha",
      header: "FECHA ABONO",
      style: { td: "text-center" },
      pipe: "date"
    },
    {
      key: "row",
      header: "CAPITAL",
      function: (abono) => {
        const estadoCuenta = abono.creditos?.estado_cuenta;
        const abonosDistribuidos = JSON.parse(estadoCuenta?.abonos_distribuidos);
        if (abonosDistribuidos == null || abonosDistribuidos == void 0) {
          return "0";
        }
        const pagoCapital = abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_capital || 0;
        return `${pagoCapital}`;
      },
      pipe: "currency",
      style: { td: "text-end" }
    },
    // -- Pago Interés
    {
      key: "row",
      header: "Inter\xE9s",
      function: (abono) => {
        const estadoCuenta = abono.creditos?.estado_cuenta;
        const abonosDistribuidos = JSON.parse(estadoCuenta?.abonos_distribuidos);
        if (abonosDistribuidos == null || abonosDistribuidos == void 0) {
          return "0";
        }
        const pagoInteres = abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_interes || 0;
        return `${pagoInteres}`;
      },
      styleTdFunction: (abono) => {
        let pagoInteres = 0;
        const estadoCuenta = abono.creditos?.estado_cuenta;
        const abonosDistribuidos = JSON.parse(estadoCuenta?.abonos_distribuidos);
        if (abonosDistribuidos) {
          pagoInteres = abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_interes || 0;
        }
        return pagoInteres == 0 ? "table-danger" : "";
      },
      pipe: "currency",
      style: { td: "text-end", th: "text-center" }
    },
    // -- ./Pago Interés
    {
      key: "row",
      header: "IVA",
      function: (abono) => {
        const estadoCuenta = abono.creditos?.estado_cuenta;
        const abonosDistribuidos = JSON.parse(estadoCuenta?.abonos_distribuidos);
        if (abonosDistribuidos == null || abonosDistribuidos == void 0) {
          return "0";
        }
        const pagoIva = abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_iva || 0;
        return `${pagoIva}`;
      },
      pipe: "currency",
      style: { td: "text-end", th: "text-center" }
    },
    {
      key: "monto",
      header: "MONTO ABONO",
      pipe: "currency",
      style: { td: "text-end", th: "text-center" }
    }
  ]
};
var _TableFacturacionComponent = class _TableFacturacionComponent {
  constructor(toastyService, tablaPagosController, utils2, api, facturaMasivaService) {
    this.toastyService = toastyService;
    this.tablaPagosController = tablaPagosController;
    this.utils = utils2;
    this.api = api;
    this.facturaMasivaService = facturaMasivaService;
    this.tabla = TABLE_DEF2;
    this.seleccionados = [];
    this.relationBuscador = [
      "creditos",
      "creditos.estadoCuenta",
      "creditos.datosPersonaFisica",
      "creditos.datosPersonaFisica.datosPersonales",
      "creditos.datosPersonasMorales",
      "creditos.facturacionDetalle"
    ];
    this.conditionals = [
      { key: "deleted_at", operator: "IS NULL", value: null }
    ];
    this.fechaInicial = "";
    this.fechaFinal = "";
    this.tipoRegistro = "0";
    this.getExtra = {};
    this.vistaTimbrados = false;
    this.btnTitleVistaTimbrados = "Ver Timbrados";
    this.titleTabla = "Abonos - A Facturar";
    this.data = [];
    this.filteredData = [];
    this.paginatedData = [];
    this.entriesOptions = [5, 10, 15];
    this.rowsPerPage = 10;
    this.currentPage = 1;
    this.searchTerm = "";
    this.showingStart = 0;
    this.showingEnd = 0;
    this.totalPages = 1;
    this.paginationPages = [];
    this.procesados = 0;
    this.facturados = 0;
    this.listos = 0;
    this.errores = 0;
    this.showFacturaMasiva = false;
    this.showEdit = false;
    this.showVerificar = false;
    this.abonoId = 0;
    const monthDates = this.getCurrentMonthDates();
    this.fechaInicial = monthDates.start;
    this.fechaFinal = monthDates.end;
    this.filter = this._getFilter();
    this.rowButtons = this.getRowButton();
  }
  ngOnInit() {
    return __async(this, null, function* () {
    });
  }
  onRowButtonClickEvent(event) {
    const { key, row } = event;
    switch (key) {
      case "facturar":
        this.facturaIndividual(row);
        break;
      case "ver-xml":
      case "ver-factura":
        const { facturas } = row;
        this._downloadFile(key, facturas);
        break;
      case "editar-fiscal":
        this.datoFiscal = this.utils.getDatosFiscalesFromCredito(row.creditos);
        this.datoFiscal = this.datoFiscal ? this.datoFiscal : {
          rfc: "",
          regimen_fiscal_sat: 0,
          calle: "",
          codigo_postal: 0,
          colonia: "",
          municipio: "",
          estado: "Baja California",
          usuario_id: 0,
          id: 0,
          created_at: "",
          primer_apellido: "",
          segundo_apellido: "",
          primer_nombre: "",
          segundo_nombre: ""
        };
        this.showEdit = true;
        break;
      case "verificar":
        this.credito = row.creditos;
        this.datoFiscal = this.utils.getDatosFiscalesFromCredito(row.creditos);
        this.facturacionDetalle = this.utils.getFacturacionDetalleFromCredito(row.creditos);
        this.abonoId = row.id;
        if (this.facturacionDetalle) {
          if (!this.utils.existeFacturaPorAbonoId(this.facturacionDetalle, this.abonoId)) {
            this.toastyService.show("error", "No existe factura que verificar");
            return;
          }
        }
        this.showVerificar = true;
        break;
      default:
        console.log("No action defined for this button");
    }
  }
  //#region -- Sección de Facturción
  facturaIndividual(item) {
    console.log(item);
    const rfc = this.utils.rfcFromCredito(item.creditos);
    const cp = this.utils.getCpFiscal(item.creditos);
    const nombre = this.utils.nombreFiscalClienteFromCredito(item.creditos);
    const regimenCode = this.utils.getRegimenFiscalCodeFromCredito(item.creditos);
    const fac_detalle = this.utils.getFacturacionDetalleFromCredito(item.creditos);
    const email = this.utils.emailFromCredito(item.creditos);
    if (!rfc || !cp) {
      this.toastyService.show("error", "No se puede facturar, no se encontr\xF3 el RFC o CP del cliente.");
      return;
    }
    if (cp === void 0 || cp === 0) {
      this.toastyService.show("error", "No se puede facturar, el CP es inv\xE1lido.");
      return;
    }
    if (regimenCode === "0") {
      this.toastyService.show("error", "No se puede facturar, el R\xE9gimen Fiscal es inv\xE1lido.");
      return;
    }
    if (fac_detalle && fac_detalle.length > 0) {
      if (this.utils.existeFacturaPorAbonoId(fac_detalle, item.id)) {
        this.toastyService.show("error", "No se puede facturar, ya existe una factura generada.");
        return;
      }
    }
    const pagoInteres = this.facturaMasivaService.getAbonosDistrField(item, "interes");
    const calFactura = this.facturaMasivaService.calculoFactura(pagoInteres);
    console.log(calFactura);
    const pagoIva = this.facturaMasivaService.getAbonosDistrField(item, "iva");
    if (pagoInteres <= 0) {
      this.toastyService.show("error", "No se puede facturar, la cantidad del inter\xE9s a facturar es cero.");
      return;
    }
    const receptor = {
      Rfc: rfc,
      RazonSocial: nombre,
      UsoCFDI: "G03",
      Pais: "Mexico",
      Email: email ? email : "",
      // "lcc.manuel@gmail.com",// item.email,
      RegimenFiscal: regimenCode,
      DomicilioFiscal: cp.toString().padStart(5, "0")
    };
    const concepto = {
      ClaveProdServ: "84101700",
      ClaveUnidad: "E48",
      Cantidad: 1,
      Unidad: "PAGO",
      Descripcion: "Pago por Interes",
      Subtotal: calFactura.subtotal,
      // pagoInteres
      IvaRetenido: 0,
      IsrRetenido: 0,
      TotalIva: calFactura.iva,
      // pagoIva
      Descuento: 0,
      ValorUnitario: calFactura.subtotal,
      // pagoInteres
      Importe: calFactura.subtotal,
      // pagoInteres
      ExentoIva: 0
    };
    const datosCfdi = {
      FormaPago: "03",
      Moneda: "MXN",
      Subtotal: calFactura.subtotal,
      Total: calFactura.total,
      // pagoInteres + pagoIva
      TotalIva: calFactura.iva,
      Descuento: 0,
      CondicionesPago: "Contado",
      Serie: "A",
      TipodeComprobante: "I",
      TipoCambio: 1,
      LugarDeExpedicion: "22010",
      // Código postal del emisor
      MetodoPago: "PUE"
    };
    this.api.post("factura/generar", {
      Receptor: receptor,
      Concepto: concepto,
      DatosCfdi: datosCfdi,
      credito_id: item.credito_id,
      abono_id: item.id,
      tipo_factura: "individual"
    }, null, true).subscribe((res) => {
      console.log(res);
      this.tablaPagos?.getData();
    });
  }
  onSelectTipoRegistro(event) {
    const { target: { value } } = event;
    this.tipoRegistro = value;
    console.log(this.tipoRegistro);
  }
  onCancel(event) {
    console.log(event);
    this.tablaPagos?.getData();
    this.showVerificar = false;
  }
  onEndFacturaMasiva(event) {
    console.log(event);
    this.tablaPagos?.getData();
  }
  facturarSeleccionados() {
    console.log(this.seleccionados);
    if (!this._checkDatosFiscales(this.seleccionados)) {
      this.toastyService.show("error", "En los seleccionados no tiene sus datos fiscales", "info");
      return;
    }
    if (!this._checkAbonosDistribuidos(this.seleccionados)) {
      this.toastyService.show("error", "En los seleccionados el Inter\xE9s es cero!", "info");
      return;
    }
    if (this._tieneAbonoFacturaSeleccionado(this.seleccionados)) {
      this.toastyService.show("error", "En los seleccionados, ya existe una factura generada.", "info");
      return;
    }
    this.datosFacturar = this.facturaMasivaService.generarDatosFacturaPagos(this.seleccionados);
    console.log(this.datosFacturar, this.showFacturaMasiva);
    if (this.datosFacturar.length === 0) {
      this.toastyService.show("error", "No se puede generar la factura, no hay datos a facturar", "info");
      return;
    }
    this.showFacturaMasiva = true;
  }
  // #endregion
  getAbonosDistrField(abono, field) {
    const estadoCuenta = abono.creditos?.estado_cuenta;
    const abonosDistribuidos = JSON.parse(estadoCuenta?.abonos_distribuidos);
    switch (field) {
      case "capital":
        return abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_capital || 0;
      case "interes":
        return abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_interes || 0;
      case "iva":
        return abonosDistribuidos.find((ab) => ab.abono.id == abono.id)?.pago_iva || 0;
      default:
        return 0;
    }
  }
  verTrimbrados() {
    this.vistaTimbrados = !this.vistaTimbrados;
    this._fitlerData();
  }
  // -- ./Sección de Facturción
  filtrar() {
    this._fitlerData();
  }
  filterCredito(credito) {
    this.conditionals = [
      { key: "credito_id", operator: "=", value: credito.id },
      { key: "deleted_at", operator: "IS NULL", value: null }
    ];
    this.filter = [];
  }
  _checkDatosFiscales(seleccionados) {
    for (const sel of seleccionados) {
      const datosFiscales = this.utils.getDatosFiscalesFromCredito(sel.creditos);
      if (!datosFiscales) {
        return false;
      } else {
        const razonSocial = this.utils.getRazonSocialFromCredito(sel.creditos);
        if (razonSocial === "" || razonSocial === "N/A") {
          return false;
        }
        const rfc = this.utils.rfcFromCredito(sel.creditos);
        if (rfc === "" || rfc === "N/A") {
          return false;
        }
        const cp = this.utils.getCpFiscal(sel.creditos);
        if (cp === 0 || cp === void 0 || cp === null) {
          return false;
        }
        const regimenCode = this.utils.getRegimenFiscalCodeFromCredito(sel.creditos);
        if (regimenCode === "" || regimenCode === "N/A") {
          return false;
        }
      }
    }
    return true;
  }
  _checkAbonosDistribuidos(seleccionados) {
    for (const sel of seleccionados) {
      const estadoCuenta = sel.creditos?.estado_cuenta;
      const abonosDistribuidos = JSON.parse(estadoCuenta?.abonos_distribuidos);
      if (abonosDistribuidos == null || abonosDistribuidos == void 0) {
        return false;
      }
      const pagoInteres = abonosDistribuidos.find((ab) => ab.abono.id == sel.id)?.pago_interes || 0;
      return pagoInteres > 0;
    }
    return false;
  }
  _tieneAbonoFacturaSeleccionado(seleccionados) {
    for (let sel of seleccionados) {
      const fact_detalle = this.utils.getFacturacionDetalleFromCredito(sel.creditos);
      if (fact_detalle) {
        if (this.utils.existeFacturaPorAbonoId(fact_detalle, sel.id)) {
          return true;
        }
      }
    }
    return false;
  }
  _fitlerData() {
    this.btnTitleVistaTimbrados = "Ver Timbrados";
    this.titleTabla = "Abonos - A Facturar";
    this.filter = this._getFilter();
  }
  _getFilter() {
    this.getExtra = UtilsHelper.getExtra(this.tipoRegistro);
    this.conditionals = [
      { key: "deleted_at", operator: "IS NULL", value: null }
    ];
    return [
      {
        relation: "self",
        conditionals: [
          ["fecha", ">=", this.fechaInicial],
          ["fecha", "<=", this.fechaFinal]
        ],
        andConditionals: []
      },
      {
        relation: "creditos",
        conditionals: [],
        andConditionals: [["estado", "=", "ACTIVO"]]
      }
    ];
  }
  getRowButton() {
    return [
      {
        key: "facturar",
        text: "",
        title: "Facturar",
        style: {
          icon: "bi bi-receipt",
          text: "text-xs"
        }
      },
      {
        key: "verificar",
        text: "",
        title: "Verificar",
        style: {
          icon: "bi bi-check-circle",
          button: "btn btn-success"
        }
      },
      {
        key: "editar-fiscal",
        text: "",
        title: "Editar datos Fiscales",
        style: {
          icon: "bi bi-pencil-square",
          text: "text-xs"
        }
      }
    ];
  }
  getCurrentMonthDates() {
    const today = /* @__PURE__ */ new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const startStr = firstDay.toISOString().split("T")[0];
    const endStr = lastDay.toISOString().split("T")[0];
    return { start: startStr, end: endStr };
  }
  _downloadFile(type, factura) {
    console.log(type, factura);
    if (factura == null || factura == void 0) {
      this.toastyService.show("error", "No se encontr\xF3 la factura.");
      return;
    }
    const { xml_timbrado, uid_cicofi } = factura;
    switch (type) {
      case "ver-xml":
        this._downloadXml(xml_timbrado, uid_cicofi ? uid_cicofi : `factura_abono_${factura.abono_id}`);
        break;
      case "ver-factura":
        if (!uid_cicofi) {
          this.toastyService.show("error", "La factura no fue generada con SICOFI");
          return;
        }
        this._downloadPdf(uid_cicofi);
        break;
    }
  }
  _downloadXml(xmlString, uuid) {
    const blob = new Blob([xmlString], { type: "text/xml" });
    const url = window.URL.createObjectURL(blob);
    const fileName = `${uuid}.xml`;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }
  _downloadPdf(uuid) {
    this.api.post("factura/pdf", { uuid }, null, true).subscribe((res) => {
      console.log(res);
      const { data: { GeneraPDFCFDIV33Result } } = res;
      console.log(GeneraPDFCFDIV33Result);
      if (GeneraPDFCFDIV33Result.PDFCorrecto !== "true") {
        this.toastyService.show("error", "No se gener\xF3 correctamente la factura.");
        return;
      }
      let PDF = GeneraPDFCFDIV33Result.PDF;
      try {
        if (PDF.includes(",")) {
          PDF = PDF.split(",")[1];
        }
        const binaryData = atob(PDF);
        const byteArray = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          byteArray[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const fileName = `${uuid}.pdf`;
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error(e);
        this.toastyService.show("error", "No se gener\xF3 correctamente la factura.");
      }
    });
  }
  //#region -- Implementación anterior Estadísticas
  updateStatistics() {
    this.procesados = this.filteredData.length;
    this.facturados = this.filteredData.filter((item) => item.estatus === "facturado").length;
    this.listos = this.filteredData.filter((item) => item.estatus === "listo").length;
    this.errores = this.filteredData.filter((item) => item.estatus === "pendiente").length;
  }
  updateTable() {
    const totalItems = this.filteredData.length;
    this.totalPages = Math.max(1, Math.ceil(totalItems / this.rowsPerPage));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    this.paginatedData = this.filteredData.slice(start, end);
    this.showingStart = totalItems === 0 ? 0 : start + 1;
    this.showingEnd = Math.min(end, totalItems);
    this.generatePaginationPages();
  }
  onSearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredData = this.data.filter((item) => item.idCredito.toString().includes(term));
    this.currentPage = 1;
    this.updateTable();
  }
  generatePaginationPages() {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, this.currentPage - 2);
    if (this.currentPage + 2 > this.totalPages) {
      startPage = Math.max(1, this.totalPages - maxPagesToShow + 1);
    }
    for (let i = startPage; i <= this.totalPages && pages.length < maxPagesToShow; i++) {
      pages.push(i);
    }
    this.paginationPages = pages;
  }
};
_TableFacturacionComponent.\u0275fac = function TableFacturacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableFacturacionComponent)(\u0275\u0275directiveInject(ToastyService), \u0275\u0275directiveInject(TablaPagosService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ApiServiceService), \u0275\u0275directiveInject(FacturaMasivaService));
};
_TableFacturacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableFacturacionComponent, selectors: [["app-table-facturacion"]], viewQuery: function TableFacturacionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tablaPagos = _t.first);
  }
}, inputs: { filters: "filters" }, decls: 35, vars: 35, consts: [["tablaPagos", ""], [1, "table-container"], ["tipoFactura", "pagos", 3, "showChange", "callBackEvent", "show", "datos"], [3, "showChange", "datoFiscalChange", "show", "datoFiscal"], ["type", "Pagos", 3, "showChange", "cancelEvent", "show", "abonoId", "credito", "datoFiscal", "facturacionDetalle"], ["id", "filtrado", 1, "container-fluid", "row"], [1, "col-auto"], [1, "fs-text-label"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["for", "", 1, "fs-text-label"], [1, "form-select", "form-select-sm", 3, "change"], ["value", "0"], ["value", "1"], ["value", "2"], [1, "col-auto", "mt-4"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-search"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-receipt"], [1, "mt-3"], [3, "creditoChange", "credito", "relations"], [3, "rowButtonClickEvent", "selectedRowsChange", "title", "controller", "useDefaultAgregarRedirect", "useDefaultRowEditRedirect", "tableDefinition", "getConditionals", "relations", "getAdvancedFilters", "rowButtons", "rowEditar", "rowEliminar", "barraBusqueda", "showBarraButtons", "checkbox", "getExtra", "sort", "selectedRows"]], template: function TableFacturacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-factura-masiva-modal", 2);
    \u0275\u0275twoWayListener("showChange", function TableFacturacionComponent_Template_app_factura_masiva_modal_showChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showFacturaMasiva, $event) || (ctx.showFacturaMasiva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("callBackEvent", function TableFacturacionComponent_Template_app_factura_masiva_modal_callBackEvent_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onEndFacturaMasiva($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-form-datos-fiscales", 3);
    \u0275\u0275twoWayListener("showChange", function TableFacturacionComponent_Template_app_form_datos_fiscales_showChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showEdit, $event) || (ctx.showEdit = $event);
      return \u0275\u0275resetView($event);
    })("datoFiscalChange", function TableFacturacionComponent_Template_app_form_datos_fiscales_datoFiscalChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.datoFiscal, $event) || (ctx.datoFiscal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("datoFiscalChange", function TableFacturacionComponent_Template_app_form_datos_fiscales_datoFiscalChange_2_listener() {
      \u0275\u0275restoreView(_r1);
      const tablaPagos_r2 = \u0275\u0275reference(34);
      return \u0275\u0275resetView(tablaPagos_r2.getData());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-verificar-modal", 4);
    \u0275\u0275twoWayListener("showChange", function TableFacturacionComponent_Template_app_verificar_modal_showChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showVerificar, $event) || (ctx.showVerificar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("cancelEvent", function TableFacturacionComponent_Template_app_verificar_modal_cancelEvent_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onCancel($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "label", 7);
    \u0275\u0275text(7, "Fecha Inicial:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function TableFacturacionComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fechaInicial, $event) || (ctx.fechaInicial = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "label", 7);
    \u0275\u0275text(11, "Fecha Final:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function TableFacturacionComponent_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fechaFinal, $event) || (ctx.fechaFinal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 6)(14, "label", 9);
    \u0275\u0275text(15, "Tipo de Registros:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 10);
    \u0275\u0275listener("change", function TableFacturacionComponent_Template_select_change_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onSelectTipoRegistro($event));
    });
    \u0275\u0275elementStart(17, "option", 11);
    \u0275\u0275text(18, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 12);
    \u0275\u0275text(20, "Listos Para Facturar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 13);
    \u0275\u0275text(22, "No se pueden Facturar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
    \u0275\u0275listener("click", function TableFacturacionComponent_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.filtrar());
    });
    \u0275\u0275element(25, "i", 16);
    \u0275\u0275text(26, " Filtrar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 14)(28, "button", 17);
    \u0275\u0275listener("click", function TableFacturacionComponent_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.facturarSeleccionados());
    });
    \u0275\u0275element(29, "i", 18);
    \u0275\u0275text(30, " Facturar Seleccionados ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 19)(32, "app-buscador-creditos", 20);
    \u0275\u0275twoWayListener("creditoChange", function TableFacturacionComponent_Template_app_buscador_creditos_creditoChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.credito, $event) || (ctx.credito = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("creditoChange", function TableFacturacionComponent_Template_app_buscador_creditos_creditoChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.filterCredito($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "app-tabla", 21, 0);
    \u0275\u0275listener("rowButtonClickEvent", function TableFacturacionComponent_Template_app_tabla_rowButtonClickEvent_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowButtonClickEvent($event));
    });
    \u0275\u0275twoWayListener("selectedRowsChange", function TableFacturacionComponent_Template_app_tabla_selectedRowsChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.seleccionados, $event) || (ctx.seleccionados = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showFacturaMasiva);
    \u0275\u0275property("datos", ctx.datosFacturar);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEdit)("datoFiscal", ctx.datoFiscal);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showVerificar);
    \u0275\u0275property("abonoId", ctx.abonoId)("credito", ctx.credito)("datoFiscal", ctx.datoFiscal)("facturacionDetalle", ctx.facturacionDetalle);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaInicial);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaFinal);
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("credito", ctx.credito);
    \u0275\u0275property("relations", ctx.relationBuscador);
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c12));
    \u0275\u0275property("title", ctx.titleTabla)("controller", ctx.tablaPagosController)("useDefaultAgregarRedirect", false)("useDefaultRowEditRedirect", false)("tableDefinition", ctx.tabla)("getConditionals", ctx.conditionals)("relations", \u0275\u0275pureFunction0(33, _c2))("getAdvancedFilters", ctx.filter)("rowButtons", ctx.rowButtons)("rowEditar", false)("rowEliminar", false)("barraBusqueda", false)("showBarraButtons", false)("checkbox", true)("getExtra", ctx.getExtra)("sort", \u0275\u0275pureFunction0(34, _c3));
    \u0275\u0275twoWayProperty("selectedRows", ctx.seleccionados);
  }
}, dependencies: [
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  FormDatosFiscalesComponent,
  VerificarModalComponent,
  TablaComponent,
  BuscadorCreditosComponent,
  FacturaMasivaModalComponent
], styles: ["\n\n.table-container[_ngcontent-%COMP%] {\n  width: 90%;\n  background-color: white;\n  border-radius: 10px;\n  margin: 20px auto;\n  padding: 20px 30px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.table-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n.table-controls[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  font-size: 1rem;\n  border: none;\n  background-color: #E9E9ED;\n  border-radius: 5px;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  width: 100%;\n  scrollbar-color: #be375d #f0f0f0;\n}\ntable[_ngcontent-%COMP%] {\n  width: max-content;\n  border-collapse: collapse;\n  margin-bottom: 0.5rem;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  font-weight: bold;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #ffffff;\n}\n.estatus-box[_ngcontent-%COMP%] {\n  width: 80px;\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 0.5rem;\n  color: white;\n  font-weight: bold;\n  text-transform: capitalize;\n  font-size: 0.75rem;\n  text-align: center;\n}\n.listo[_ngcontent-%COMP%] {\n  background-color: #FFF0C2;\n  color: #A78C03;\n}\n.facturado[_ngcontent-%COMP%] {\n  background-color: #C8E6C9;\n  color: #4C9A4F;\n}\n.pendiente[_ngcontent-%COMP%] {\n  background-color: #FFCDD2;\n  color: #C62828;\n}\n.entries-info[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #be375d;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.4rem 0.8rem;\n  border: 1px solid #ccc;\n  background-color: #f0f0f0;\n}\n.pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #be375d;\n  color: white;\n  font-weight: bold;\n}\n.pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: #888;\n  background-color: #eee;\n}\n.table-stats-container[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n  width: 90%;\n  height: 60px;\n  border-radius: 10px;\n  margin: 0 auto;\n  margin-top: 40px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.info-container[_ngcontent-%COMP%] {\n  border-top: 8px solid black;\n  background-color: #b4b4b4;\n}\n.info-container[_ngcontent-%COMP%]:nth-child(1) {\n  border-radius: 10px 0px 0px 10px;\n}\n.c1[_ngcontent-%COMP%] {\n  background-color: #ffe1ea;\n  color: #6A1C32;\n}\n.button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 60px;\n  text-decoration: none;\n  line-height: 1;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, .05);\n  background-color: #fff;\n  color: #121212;\n  border: none;\n  cursor: pointer;\n}\n.button-decor[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-color: var(--clr);\n  transform: translateX(-100%);\n  transition: transform .3s;\n  z-index: 0;\n}\n.button-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 20px;\n  position: relative;\n}\n.button__icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 60px;\n  background-color: var(--clr);\n  display: grid;\n  place-items: center;\n}\n.button__text[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: color .2s;\n  padding: 2px 1.5rem 2px;\n  padding-left: .75rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n  text-indent: 10px;\n}\n.button[_ngcontent-%COMP%]:hover   .button__text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.button[_ngcontent-%COMP%]:hover   .button-decor[_ngcontent-%COMP%] {\n  transform: translate(0);\n}\n.acciones[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-align: center;\n}\n.acciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  margin: 0 0.25rem;\n  cursor: pointer;\n  border-radius: 6px;\n}\n.acciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.acciones[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  color: #be375d;\n  background-color: #ffd8e3;\n}\n.acciones[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]:hover {\n  color: #ffd8e3;\n  background-color: #be375d;\n}\n.acciones[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%] {\n  color: #be375d;\n  background-color: #ffd8e3;\n}\n.acciones[_ngcontent-%COMP%]   .btn-delete[_ngcontent-%COMP%]:hover {\n  color: #ffd8e3;\n  background-color: #be375d;\n}\n.header-pago-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 90%;\n  height: 150px;\n  margin: 0 auto;\n  margin-top: 40px;\n  position: relative;\n  align-items: center;\n}\n.button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n}\n.fs-text-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #691730;\n}\n/*# sourceMappingURL=table-facturacion.component.css.map */"] });
var TableFacturacionComponent = _TableFacturacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableFacturacionComponent, [{
    type: Component,
    args: [{ selector: "app-table-facturacion", imports: [
      FormsModule,
      FormDatosFiscalesComponent,
      VerificarModalComponent,
      TablaComponent,
      BuscadorCreditosComponent,
      FacturaMasivaModalComponent
    ], template: `<div class="table-container">
  <!-- Facturaci\xF3n Masiva -->
  <app-factura-masiva-modal
    [(show)]="showFacturaMasiva"
    [datos]="datosFacturar"
    (callBackEvent)="onEndFacturaMasiva($event)"
    tipoFactura="pagos"
  >
  </app-factura-masiva-modal>
  <!-- ./Facturaci\xF3n Masiva -->
  <app-form-datos-fiscales
    [(show)]="showEdit"
    [(datoFiscal)]="datoFiscal"
    (datoFiscalChange)="tablaPagos.getData()"
  >
  </app-form-datos-fiscales>
  <app-verificar-modal
    [(show)]="showVerificar"
    type="Pagos"
    [abonoId]="abonoId"
    [credito]="credito"
    [datoFiscal]="datoFiscal"
    [facturacionDetalle]="facturacionDetalle"
    (cancelEvent)="onCancel($event)"
  >
  </app-verificar-modal>
  <div id="filtrado" class="container-fluid row">
    <div class="col-auto">
      <label class="fs-text-label">Fecha Inicial:</label>
      <input
        type="date"
        class="form-control form-control-sm"
        [(ngModel)]="fechaInicial"
      />
    </div>
    <div class="col-auto">
      <label class="fs-text-label">Fecha Final:</label>
      <input
        type="date"
        class="form-control form-control-sm"
        [(ngModel)]="fechaFinal"
      />
    </div>
    <div class="col-auto">
      <label for="" class="fs-text-label">Tipo de Registros:</label>
      <select
        (change)="onSelectTipoRegistro($event)"
        class="form-select form-select-sm"
      >
        <option value="0">Todos</option>
        <option value="1">Listos Para Facturar</option>
        <option value="2">No se pueden Facturar</option>
      </select>
    </div>
    <div class="col-auto mt-4">
      <button class="btn btn-success" (click)="filtrar()">
        <i class="bi bi-search"></i>
        Filtrar
      </button>
    </div>
    <div class="col-auto mt-4">
      <button class="btn btn-primary" (click)="facturarSeleccionados()">
        <i class="bi bi-receipt"></i>
        Facturar Seleccionados
      </button>
    </div>
  </div>
  <div class="mt-3">
    <app-buscador-creditos
      [(credito)]="credito"
      [relations]="relationBuscador"
      (creditoChange)="filterCredito($event)"
    ></app-buscador-creditos>
  </div>
  <!-- Tabla Component -->
  <app-tabla
    #tablaPagos
    [title]="titleTabla"
    [controller]="tablaPagosController"
    [useDefaultAgregarRedirect]="false"
    [useDefaultRowEditRedirect]="false"
    [tableDefinition]="tabla"
    [getConditionals]="conditionals"
    [relations]="[
      'creditos',
      'creditos.estadoCuenta',
      'creditos.datosPersonaFisica',
      'creditos.datosPersonaFisica.datosPersonales',
      'creditos.datosPersonaFisica.datosPersonales.datosFiscales',
      'creditos.datosPersonasMorales',
      'creditos.datosPersonasMorales.datosFiscales',
      'creditos.facturacionDetalle',
    ]"
    [getAdvancedFilters]="filter"
    [rowButtons]="rowButtons"
    (rowButtonClickEvent)="onRowButtonClickEvent($event)"
    [rowEditar]="false"
    [rowEliminar]="false"
    [barraBusqueda]="false"
    [showBarraButtons]="false"
    [checkbox]="true"
    [getExtra]="getExtra"
    [style]="{}"
    [sort]="{
      column: 'fecha',
      desc: true,
    }"
    [(selectedRows)]="seleccionados"
  ></app-tabla>
  <!-- Tabla Component -->
</div>
`, styles: ["/* src/app/pagos/pagos-facturacion/table-facturacion/table-facturacion.component.css */\n.table-container {\n  width: 90%;\n  background-color: white;\n  border-radius: 10px;\n  margin: 20px auto;\n  padding: 20px 30px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.table-controls {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n.table-controls input {\n  padding: 0.4rem;\n  font-size: 1rem;\n  border: none;\n  background-color: #E9E9ED;\n  border-radius: 5px;\n}\n.table-scroll {\n  overflow-x: auto;\n  width: 100%;\n  scrollbar-color: #be375d #f0f0f0;\n}\ntable {\n  width: max-content;\n  border-collapse: collapse;\n  margin-bottom: 0.5rem;\n}\ntable th,\ntable td {\n  padding: 0.5rem;\n  text-align: left;\n  white-space: nowrap;\n}\ntable th {\n  background-color: #e6e6e6;\n  font-weight: bold;\n}\ntable tbody tr:nth-child(even) {\n  background-color: #f9f9f9;\n}\ntable tbody tr:nth-child(odd) {\n  background-color: #ffffff;\n}\n.estatus-box {\n  width: 80px;\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 0.5rem;\n  color: white;\n  font-weight: bold;\n  text-transform: capitalize;\n  font-size: 0.75rem;\n  text-align: center;\n}\n.listo {\n  background-color: #FFF0C2;\n  color: #A78C03;\n}\n.facturado {\n  background-color: #C8E6C9;\n  color: #4C9A4F;\n}\n.pendiente {\n  background-color: #FFCDD2;\n  color: #C62828;\n}\n.entries-info {\n  margin-top: 1rem;\n}\ninput[type=checkbox] {\n  accent-color: #be375d;\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.pagination li {\n  cursor: pointer;\n  padding: 0.4rem 0.8rem;\n  border: 1px solid #ccc;\n  background-color: #f0f0f0;\n}\n.pagination li.active {\n  background-color: #be375d;\n  color: white;\n  font-weight: bold;\n}\n.pagination li.disabled {\n  pointer-events: none;\n  color: #888;\n  background-color: #eee;\n}\n.table-stats-container {\n  display: flex;\n  background-color: white;\n  width: 90%;\n  height: 60px;\n  border-radius: 10px;\n  margin: 0 auto;\n  margin-top: 40px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.info-container {\n  border-top: 8px solid black;\n  background-color: #b4b4b4;\n}\n.info-container:nth-child(1) {\n  border-radius: 10px 0px 0px 10px;\n}\n.c1 {\n  background-color: #ffe1ea;\n  color: #6A1C32;\n}\n.button {\n  width: 200px;\n  height: 60px;\n  text-decoration: none;\n  line-height: 1;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 10px 10px 20px rgba(0, 0, 0, .05);\n  background-color: #fff;\n  color: #121212;\n  border: none;\n  cursor: pointer;\n}\n.button-decor {\n  position: absolute;\n  inset: 0;\n  background-color: var(--clr);\n  transform: translateX(-100%);\n  transition: transform .3s;\n  z-index: 0;\n}\n.button-content {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 20px;\n  position: relative;\n}\n.button__icon {\n  width: 50px;\n  height: 60px;\n  background-color: var(--clr);\n  display: grid;\n  place-items: center;\n}\n.button__text {\n  display: inline-block;\n  transition: color .2s;\n  padding: 2px 1.5rem 2px;\n  padding-left: .75rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n  text-indent: 10px;\n}\n.button:hover .button__text {\n  color: #fff;\n}\n.button:hover .button-decor {\n  transform: translate(0);\n}\n.acciones {\n  white-space: nowrap;\n  text-align: center;\n}\n.acciones button {\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  margin: 0 0.25rem;\n  cursor: pointer;\n  border-radius: 6px;\n}\n.acciones button svg {\n  display: block;\n}\n.acciones .btn-view {\n  color: #be375d;\n  background-color: #ffd8e3;\n}\n.acciones .btn-view:hover {\n  color: #ffd8e3;\n  background-color: #be375d;\n}\n.acciones .btn-delete {\n  color: #be375d;\n  background-color: #ffd8e3;\n}\n.acciones .btn-delete:hover {\n  color: #ffd8e3;\n  background-color: #be375d;\n}\n.header-pago-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 90%;\n  height: 150px;\n  margin: 0 auto;\n  margin-top: 40px;\n  position: relative;\n  align-items: center;\n}\n.button {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n}\n.fs-text-label {\n  font-size: 14px;\n  font-weight: bold;\n  color: #691730;\n}\n/*# sourceMappingURL=table-facturacion.component.css.map */\n"] }]
  }], () => [{ type: ToastyService }, { type: TablaPagosService }, { type: UtilsService }, { type: ApiServiceService }, { type: FacturaMasivaService }], { tablaPagos: [{
    type: ViewChild,
    args: ["tablaPagos"]
  }], filters: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableFacturacionComponent, { className: "TableFacturacionComponent", filePath: "src/app/pagos/pagos-facturacion/table-facturacion/table-facturacion.component.ts", lineNumber: 250 });
})();

// src/app/pagos/pagos-facturacion/sub-menu-active-button/sub-menu-active-button.component.ts
var _SubMenuActiveButtonComponent = class _SubMenuActiveButtonComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.label = "Button";
    this._svgIcon = "";
    this.safeSvgIcon = "";
  }
  set svgIcon(value) {
    this._svgIcon = value;
    this.safeSvgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
  }
};
_SubMenuActiveButtonComponent.\u0275fac = function SubMenuActiveButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubMenuActiveButtonComponent)(\u0275\u0275directiveInject(DomSanitizer));
};
_SubMenuActiveButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubMenuActiveButtonComponent, selectors: [["app-sub-menu-active-button"]], inputs: { label: "label", svgIcon: "svgIcon" }, decls: 5, vars: 1, consts: [[1, "icon-button"], [1, "label", "fs-7"], [1, "font-weight-bold", "text-white", "fs-5"], [1, "bi", "bi-box-arrow-in-right"]], template: function SubMenuActiveButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0)(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275element(4, "i", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.label);
  }
}, styles: ["\n\n.icon-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  background: #be375d;\n  padding: 3px 15px;\n  border-radius: 5px;\n  border: none;\n  font-family: sans-serif;\n  cursor: pointer;\n}\n.label[_ngcontent-%COMP%] {\n  color: #f8e9ee;\n  font-weight: 500;\n  font-size: 16px;\n}\n.icon-container[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=sub-menu-active-button.component.css.map */"] });
var SubMenuActiveButtonComponent = _SubMenuActiveButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubMenuActiveButtonComponent, [{
    type: Component,
    args: [{ selector: "app-sub-menu-active-button", imports: [], template: '<button class="icon-button">\n  <span class="label fs-7">{{ label }}</span>\n  <span class="font-weight-bold text-white fs-5">\n    <i class="bi bi-box-arrow-in-right"></i>\n  </span>\n  <!-- <span class="icon-container" [innerHTML]="safeSvgIcon"></span> -->\n</button>\n', styles: ["/* src/app/pagos/pagos-facturacion/sub-menu-active-button/sub-menu-active-button.component.css */\n.icon-button {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  background: #be375d;\n  padding: 3px 15px;\n  border-radius: 5px;\n  border: none;\n  font-family: sans-serif;\n  cursor: pointer;\n}\n.label {\n  color: #f8e9ee;\n  font-weight: 500;\n  font-size: 16px;\n}\n.icon-container {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=sub-menu-active-button.component.css.map */\n"] }]
  }], () => [{ type: DomSanitizer }], { label: [{
    type: Input
  }], svgIcon: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubMenuActiveButtonComponent, { className: "SubMenuActiveButtonComponent", filePath: "src/app/pagos/pagos-facturacion/sub-menu-active-button/sub-menu-active-button.component.ts", lineNumber: 11 });
})();

// src/app/pagos/pagos-facturacion/toasty-notification-component/toasty-notification.component.ts
var _c06 = (a0, a1) => [a0, a1];
function ToastyNotificationComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2)(1, "title");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "path", 4);
    \u0275\u0275elementEnd();
  }
}
function ToastyNotificationComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2)(1, "title");
    \u0275\u0275text(2, "block-helper");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "path", 5);
    \u0275\u0275elementEnd();
  }
}
function ToastyNotificationComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2)(1, "title");
    \u0275\u0275text(2, "exclamation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "path", 6);
    \u0275\u0275elementEnd();
  }
}
function ToastyNotificationComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2)(1, "title");
    \u0275\u0275text(2, "help");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "path", 7);
    \u0275\u0275elementEnd();
  }
}
var _ToastyNotificationComponent = class _ToastyNotificationComponent {
  constructor() {
    this.title = "";
    this.type = "success";
    this.message = "Notification message";
    this.icon = "";
    this.isHiding = false;
  }
  ngOnInit() {
    const config = {
      success: { icon: "\u2714\uFE0F", title: "\xC9xito" },
      error: { icon: "\u274C", title: "Error" },
      warning: { icon: "\u26A0\uFE0F", title: "Alerta" },
      help: { icon: "\u2753", title: "Ayuda" }
    }[this.type];
    this.icon = config.icon;
    if (!this.title) {
      this.title = config.title;
    }
    setTimeout(() => {
      this.startExit();
    }, 5e3);
  }
  startExit() {
    this.isHiding = true;
    setTimeout(() => {
      this.remove(this.id);
    }, 300);
  }
};
_ToastyNotificationComponent.\u0275fac = function ToastyNotificationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastyNotificationComponent)();
};
_ToastyNotificationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastyNotificationComponent, selectors: [["app-toasty-notification"]], inputs: { title: "title", type: "type", message: "message", id: "id", remove: "remove" }, decls: 11, vars: 7, consts: [[1, "toasty-container", 3, "ngClass"], [1, "icon-container"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], [1, "text-container"], ["fill", "white", "d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"], ["fill", "white", "d", "M12,0A12,12 0 0,1 24,12A12,12 0 0,1 12,24A12,12 0 0,1 0,12A12,12 0 0,1 12,0M12,2A10,10 0 0,0 2,12C2,14.4 2.85,16.6 4.26,18.33L18.33,4.26C16.6,2.85 14.4,2 12,2M12,22A10,10 0 0,0 22,12C22,9.6 21.15,7.4 19.74,5.67L5.67,19.74C7.4,21.15 9.6,22 12,22Z"], ["fill", "white", "d", "M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z"], ["fill", "white", "d", "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"]], template: function ToastyNotificationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ToastyNotificationComponent_Case_2_Template, 4, 0, ":svg:svg", 2)(3, ToastyNotificationComponent_Case_3_Template, 4, 0, ":svg:svg", 2)(4, ToastyNotificationComponent_Case_4_Template, 4, 0, ":svg:svg", 2)(5, ToastyNotificationComponent_Case_5_Template, 4, 0, ":svg:svg", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c06, ctx.type, ctx.isHiding ? "hide" : ""));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx.type) === "success" ? 2 : tmp_1_0 === "error" ? 3 : tmp_1_0 === "warning" ? 4 : tmp_1_0 === "help" ? 5 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.message);
  }
}, dependencies: [CommonModule, NgClass], styles: ["\n\n.icon-container[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n}\n.icon-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.toasty-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  padding: 0.5rem 1rem;\n  min-width: 300px;\n  max-width: 450px;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  animation: _ngcontent-%COMP%_fadeInRight 0.4s cubic-bezier(0.25, 1, 0.5, 1);\n  transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);\n}\n.toasty-container.hide[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeOutRight 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;\n}\n.toasty-container.success[_ngcontent-%COMP%] {\n  width: 450px;\n  background-color: #ffffff57;\n  border-left: 10px solid #4caf50;\n}\n.toasty-container.success[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n.toasty-container.error[_ngcontent-%COMP%] {\n  width: 450px;\n  background-color: #ffffff57;\n  border-left: 10px solid #f44336;\n}\n.toasty-container.error[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.toasty-container.warning[_ngcontent-%COMP%] {\n  width: 450px;\n  background-color: #ffffff57;\n  border-left: 10px solid #ff9800;\n}\n.toasty-container.warning[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n}\n.toasty-container.help[_ngcontent-%COMP%] {\n  width: 450px;\n  background-color: #ffffff57;\n  border-left: 10px solid #2196f3;\n}\n.toasty-container.help[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n@keyframes _ngcontent-%COMP%_fadeInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeOutRight {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n}\n/*# sourceMappingURL=toasty-notification.component.css.map */"] });
var ToastyNotificationComponent = _ToastyNotificationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastyNotificationComponent, [{
    type: Component,
    args: [{ selector: "app-toasty-notification", imports: [CommonModule], template: `<div class="toasty-container" [ngClass]="[type, isHiding ? 'hide' : '']">
  <div class="icon-container">
    @switch (type) {
      <!-- \u2705 Success SVG -->
      @case ('success') {
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>check</title>
          <path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      }
      <!-- \u274C Error SVG -->
      @case ('error') {
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>block-helper</title>
          <path fill="white" d="M12,0A12,12 0 0,1 24,12A12,12 0 0,1 12,24A12,12 0 0,1 0,12A12,12 0 0,1 12,0M12,2A10,10 0 0,0 2,12C2,14.4 2.85,16.6 4.26,18.33L18.33,4.26C16.6,2.85 14.4,2 12,2M12,22A10,10 0 0,0 22,12C22,9.6 21.15,7.4 19.74,5.67L5.67,19.74C7.4,21.15 9.6,22 12,22Z" />
        </svg>
      }
      <!-- \u26A0\uFE0F Warning SVG -->
      @case ('warning') {
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>exclamation</title>
          <path fill="white" d="M 11,4L 13,4L 13,15L 11,15L 11,4 Z M 13,18L 13,20L 11,20L 11,18L 13,18 Z" />
        </svg>
      }
      <!-- \u2753 Help SVG -->
      @case ('help') {
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>help</title>
          <path fill="white" d="M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" />
        </svg>
      }
    }
  </div>

  <div class="text-container">
    <strong>{{ title }}</strong>
    <p>{{ message }}</p>
  </div>
</div>
`, styles: ["/* src/app/pagos/pagos-facturacion/toasty-notification-component/toasty-notification.component.css */\n.icon-container {\n  width: 40px;\n  height: 40px;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem;\n}\n.icon-container svg {\n  width: 24px;\n  height: 24px;\n}\n.toasty-container {\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  padding: 0.5rem 1rem;\n  min-width: 300px;\n  max-width: 450px;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n  backdrop-filter: blur(15px);\n  -webkit-backdrop-filter: blur(15px);\n  animation: fadeInRight 0.4s cubic-bezier(0.25, 1, 0.5, 1);\n  transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);\n}\n.toasty-container.hide {\n  animation: fadeOutRight 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;\n}\n.toasty-container.success {\n  width: 450px;\n  background-color: #ffffff57;\n  border-left: 10px solid #4caf50;\n}\n.toasty-container.success .icon-container {\n  background-color: #4caf50;\n}\n.toasty-container.error {\n  width: 450px;\n  background-color: #ffffff57;\n  border-left: 10px solid #f44336;\n}\n.toasty-container.error .icon-container {\n  background-color: #f44336;\n}\n.toasty-container.warning {\n  width: 450px;\n  background-color: #ffffff57;\n  border-left: 10px solid #ff9800;\n}\n.toasty-container.warning .icon-container {\n  background-color: #ff9800;\n}\n.toasty-container.help {\n  width: 450px;\n  background-color: #ffffff57;\n  border-left: 10px solid #2196f3;\n}\n.toasty-container.help .icon-container {\n  background-color: #2196f3;\n}\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n}\n/*# sourceMappingURL=toasty-notification.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input
  }], type: [{
    type: Input
  }], message: [{
    type: Input
  }], id: [{
    type: Input
  }], remove: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastyNotificationComponent, { className: "ToastyNotificationComponent", filePath: "src/app/pagos/pagos-facturacion/toasty-notification-component/toasty-notification.component.ts", lineNumber: 10 });
})();

// src/app/pagos/pagos-facturacion/toasty-notification-component/containers/toasty-container/toasty.container.component.ts
function ToastyContainerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-toasty-notification", 1);
  }
  if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("type", toast_r1.type)("message", toast_r1.message)("title", toast_r1.title)("id", toast_r1.id)("remove", ctx_r1.removeToast.bind(ctx_r1));
  }
}
var _ToastyContainerComponent = class _ToastyContainerComponent {
  constructor(toastyService) {
    this.toastyService = toastyService;
  }
  removeToast(id) {
    this.toastyService.remove(id);
  }
};
_ToastyContainerComponent.\u0275fac = function ToastyContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastyContainerComponent)(\u0275\u0275directiveInject(ToastyService));
};
_ToastyContainerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastyContainerComponent, selectors: [["app-toasty-container"]], decls: 4, vars: 2, consts: [[1, "toast-wrapper"], [3, "type", "message", "title", "id", "remove"]], template: function ToastyContainerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ToastyContainerComponent_For_2_Template, 1, 5, "app-toasty-notification", 1, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx.toastyService.toasts$));
  }
}, dependencies: [CommonModule, AsyncPipe, ToastyNotificationComponent], styles: ["\n\n.toast-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=toasty-container.component.css.map */"] });
var ToastyContainerComponent = _ToastyContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastyContainerComponent, [{
    type: Component,
    args: [{ selector: "app-toasty-container", imports: [CommonModule, ToastyNotificationComponent], template: '<div class="toast-wrapper">\n  @for (toast of toastyService.toasts$ | async; track toast) {\n    <app-toasty-notification\n      [type]="toast.type"\n      [message]="toast.message"\n      [title]="toast.title"\n      [id]="toast.id"\n      [remove]="removeToast.bind(this)"\n    ></app-toasty-notification>\n  }\n</div>\n', styles: ["/* src/app/pagos/pagos-facturacion/toasty-notification-component/containers/toasty-container/toasty-container.component.css */\n.toast-wrapper {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=toasty-container.component.css.map */\n"] }]
  }], () => [{ type: ToastyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastyContainerComponent, { className: "ToastyContainerComponent", filePath: "src/app/pagos/pagos-facturacion/toasty-notification-component/containers/toasty-container/toasty.container.component.ts", lineNumber: 13 });
})();

// src/app/pagos/pagos-facturacion/services/tabla-comision.service.ts
var _TablaComisionService = class _TablaComisionService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos";
  }
};
_TablaComisionService.\u0275fac = function TablaComisionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TablaComisionService)(\u0275\u0275inject(Injector));
};
_TablaComisionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TablaComisionService, factory: _TablaComisionService.\u0275fac, providedIn: "root" });
var TablaComisionService = _TablaComisionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TablaComisionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/pagos/pagos-facturacion/table-fac-comision/table-fac-comision.component.ts
var _c07 = ["tabla"];
var _c13 = () => ["facturacionDetalle", "datosPersonaFisica", "datosPersonaFisica.datosPersonales.datosFiscales", "datosPersonasMorales", "datosPersonasMorales.datosFiscales", "creditos.facturacionDetalle"];
var TABLE_DEF3 = {
  style: {
    table: "table table-sm"
  },
  columns: [
    {
      key: "id",
      header: "No Cr\xE9dito",
      style: { td: "text-center", th: "text-center text-uppercase" }
    },
    {
      key: "row",
      header: "Acreditado",
      style: { th: "text-center text-uppercase" },
      function: (credito, utils2) => {
        return utils2.nombreClienteFromCredito(credito);
      }
    },
    {
      key: "row",
      header: "Raz\xF3n Social",
      function: (credito, utils2) => {
        return utils2.nombreFiscalClienteFromCredito(credito);
      },
      styleTdFunction: (credito, utils2) => {
        if (!utils2.validarDatosFiscales(credito, "razon")) {
          return "table-danger text-center";
        }
        if (credito.facturacion_detalle) {
          return utils2.existeFactura(credito?.facturacion_detalle, "comision") ? "table-success" : "";
        }
        return "";
      },
      style: { th: "text-uppercase text-center" }
    },
    {
      key: "row",
      header: "RFC",
      function: (credito, utils2) => {
        return utils2.rfcFromCredito(credito);
      },
      styleTdFunction: (credito, utils2) => {
        if (!utils2.validarDatosFiscales(credito, "rfc")) {
          return "table-danger text-center";
        }
        if (credito.facturacion_detalle) {
          return utils2.existeFactura(credito?.facturacion_detalle, "comision") ? "table-success" : "";
        }
        return "";
      },
      style: { th: "text-uppercase text-center" }
    },
    {
      key: "row",
      header: "R\xE9gimen Fiscal",
      function: (credito, utils2) => {
        return utils2.getRegimenFiscalCodeFromCredito(credito);
      },
      styleTdFunction: (credito, utils2) => {
        return utils2.validarDatosFiscales(credito, "regimen") ? "text-center" : "table-danger text-center";
      },
      style: { th: "text-uppercase text-center" }
    },
    {
      key: "row",
      header: "C\xF3digo Postal",
      function: (credito, utils2) => {
        let cp = utils2.getCpFiscal(credito);
        return cp.toString().padStart(5, "0");
      },
      styleTdFunction: (credito, utils2) => {
        return utils2.validarDatosFiscales(credito, "cp") ? "text-center" : "table-danger text-center";
      },
      style: { td: "text-center", th: "text-uppercase text-center" }
    },
    {
      key: "fecha_convenio",
      header: "Fecha Apertura",
      pipe: "date",
      style: { th: "text-uppercase text-center" }
    },
    {
      key: "monto_autorizado",
      header: "Monto Autorizado",
      pipe: "currency",
      style: { td: "text-end", th: "text-uppercase text-center" }
    },
    {
      key: "row",
      header: "Comisi\xF3n",
      function: (credito) => {
        const comision = credito.monto_autorizado ? credito.monto_autorizado * 0.015 * 1.16 : 0;
        return `${comision}`;
      },
      pipe: "currency",
      style: { td: "text-end", th: "text-uppercase text-center" }
    }
  ]
};
var _TableFacComisionComponent = class _TableFacComisionComponent {
  constructor(tablaController, utils2, toastyService, api, facturaMasivaService) {
    this.tablaController = tablaController;
    this.utils = utils2;
    this.toastyService = toastyService;
    this.api = api;
    this.facturaMasivaService = facturaMasivaService;
    this.tableDef = TABLE_DEF3;
    this.tableTitle = "Facturar Comisiones";
    this.conditionals = [];
    this.extraFilters = {};
    this.filterFacturaSel = "";
    this.btnTitleVistaTimbrados = "Ver Timbrados";
    this.viewTimbrados = false;
    this.relation = [
      "facturacionDetalle",
      "datosPersonaFisica",
      "datosPersonaFisica.datosPersonales",
      "datosPersonasMorales"
    ];
    this.show = false;
    this.showVerificar = false;
    this.datoFiscal = {
      rfc: "",
      regimen_fiscal_sat: 0,
      calle: "",
      codigo_postal: 0,
      colonia: "",
      municipio: "",
      estado: "",
      usuario_id: 0,
      id: 0,
      created_at: ""
    };
    this.seleccionados = [];
    this.showFacturaMasiva = false;
    const monthDates = UtilsHelper.getCurrentMonthDates();
    this.fechaInicial = monthDates.start;
    this.fechaFinal = monthDates.end;
    console.log(this.fechaInicial, this.fechaFinal);
    this.filters = this._getFilters("sin-timbrar");
    this.rowButtons = this._getRowButtons();
  }
  // #region -- RowButton Action Click
  onRowButtonClick(event) {
    const { row, key } = event;
    switch (key) {
      case "facturar":
        this.facturar(row);
        break;
      case "ver-pdf":
      case "ver-xml":
        const { facturacion_detalle } = row;
        if (!facturacion_detalle) {
          this.toastyService.show("error", "No se encontr\xF3 la factura.");
          return;
        }
        this._downloadFile(key, facturacion_detalle[0]);
        break;
      case "editar-fiscal":
        console.log(row, key);
        this.datoFiscal = this.utils.getDatosFiscalesFromCredito(row);
        this.datoFiscal = this.datoFiscal ? this.datoFiscal : {
          rfc: "",
          regimen_fiscal_sat: 0,
          calle: "",
          codigo_postal: 0,
          colonia: "",
          municipio: "",
          estado: "Baja California",
          usuario_id: 0,
          id: 0,
          created_at: "",
          primer_apellido: "",
          segundo_apellido: "",
          primer_nombre: "",
          segundo_nombre: ""
        };
        console.log(this.datoFiscal);
        this.show = !this.show;
        break;
      case "verificar":
        console.log(row, key);
        this.credito = row;
        this.datoFiscal = this.utils.getDatosFiscalesFromCredito(row);
        this.facturacionDetalle = this.utils.getFacturacionDetalleFromCredito(row);
        if (!this.datoFiscal || this.facturacionDetalle?.length == 0) {
          this.toastyService.show("error", "No se puede verificar, No se ha generado ninguna factura.");
          return;
        }
        console.log(this.datoFiscal, this.facturacionDetalle);
        this.showVerificar = !this.showVerificar;
        break;
      default:
        console.error("No se encontr\xF3 la acci\xF3n para el bot\xF3n", key);
    }
  }
  // #endregion -- RowButton Action Click
  // #region -- factura individual
  facturar(credito) {
    const rfc = this.utils.rfcFromCredito(credito);
    const cp = this.utils.getCpFiscal(credito);
    const nombre = this.utils.nombreFiscalClienteFromCredito(credito);
    const regimen = this.utils.getRegimenFiscalCodeFromCredito(credito);
    const fac_detalle = this.utils.getFacturacionDetalleFromCredito(credito);
    const email = this.utils.emailFromCredito(credito);
    if (!rfc || !cp) {
      this.toastyService.show("error", "No se puede facturar, no se encontr\xF3 el RFC o CP del cliente.");
      return;
    }
    if (cp === void 0 || cp === 0) {
      this.toastyService.show("error", "No se puede facturar, el CP es inv\xE1lido.");
      return;
    }
    if (regimen === "0") {
      this.toastyService.show("error", "No se puede facturar, el R\xE9gimen Fiscal es inv\xE1lido.");
      return;
    }
    if (fac_detalle && fac_detalle.length > 0) {
      if (this.utils.existeFactura(fac_detalle, "comision")) {
        this.toastyService.show("error", "No se puede facturar, ya existe una factura generada.");
        return;
      }
    }
    const { subtotal, iva, total } = this._getFacturaValues(credito);
    console.log(`Facturando ${credito.id} ${nombre} ${rfc} ${cp}`);
    console.log(`Subtotal: ${subtotal}, IVA: ${iva}, Total: ${total}`);
    const receptor = {
      Rfc: rfc,
      RazonSocial: nombre,
      UsoCFDI: "G03",
      Pais: "Mexico",
      Email: email ? email : "",
      RegimenFiscal: regimen,
      DomicilioFiscal: cp.toString().padStart(5, "0")
    };
    const concepto = {
      ClaveProdServ: "84101700",
      ClaveUnidad: "E48",
      Cantidad: 1,
      Unidad: "PAGO",
      Descripcion: "Comisi\xF3n por apertura de cr\xE9dito",
      Subtotal: subtotal,
      IvaRetenido: 0,
      IsrRetenido: 0,
      Descuento: 0,
      TotalIva: iva,
      ValorUnitario: subtotal,
      Importe: subtotal,
      ExentoIva: 0
    };
    const datosCfdi = {
      FormaPago: "03",
      Moneda: "MXN",
      Subtotal: subtotal,
      Total: subtotal + iva,
      TotalIva: iva,
      Descuento: 0,
      CondicionesPago: "Contado",
      Serie: "A",
      TipodeComprobante: "I",
      TipoCambio: 1,
      LugarDeExpedicion: "22010",
      MetodoPago: "PUE"
    };
    this.api.post("factura/generar", {
      Receptor: receptor,
      Concepto: concepto,
      DatosCfdi: datosCfdi,
      credito_id: credito.id,
      tipo_factura: "comision",
      abono_id: 0
    }, null, true).subscribe((response) => {
      console.log("Factura generada", response);
      this.tabla?.getData();
    });
  }
  // #endregion -- facturar
  //
  facturarSeleccionados() {
    console.log(this.seleccionados);
    if (this.seleccionados.length === 0) {
      this.toastyService.show("error", "No hay cr\xE9ditos seleccionados.");
      return;
    }
    if (!this.facturaMasivaService.checkDatosFiscales(this.seleccionados)) {
      this.toastyService.show("error", "No se puede facturar, algunos cr\xE9ditos no tienen datos fiscales.");
      return;
    }
    if (this.facturaMasivaService.checkTieneFacturaComsionSel(this.seleccionados)) {
      this.toastyService.show("error", "No se puede facturar, algunos cr\xE9ditos ya tienen una factura de comisi\xF3n generada.");
      return;
    }
    this.datosFacturar = this.facturaMasivaService.generarDatosFacturaComision(this.seleccionados);
    console.log(this.datosFacturar);
    this.showFacturaMasiva = true;
  }
  onEndFacturaMasiva(event) {
    this.tabla?.getData();
  }
  filterCredito(credito) {
    console.info("filter:", credito, this.viewTimbrados);
    this.filters = [
      {
        relation: "self",
        conditionals: [["id", "=", credito.id]],
        andConditionals: []
      }
    ];
  }
  filtrar() {
    console.log(this.filterFacturaSel);
    this.extraFilters = UtilsHelper.getExtra(this.filterFacturaSel, "fecha_convenio", "comision");
    this.filters = this._getFilters(this.filterFacturaSel);
    console.log(this.filters);
  }
  selectFiltro(event) {
    this.filterFacturaSel = event.target.value;
    console.log(this.filterFacturaSel);
  }
  onCancel(event) {
    this.tabla?.getData();
    this.showVerificar = false;
  }
  changeView() {
    this.viewTimbrados = !this.viewTimbrados;
    this.tableTitle = this.viewTimbrados ? "Comisiones Facturadas/Timbradas" : "Facturar Comisiones";
    this.btnTitleVistaTimbrados = this.viewTimbrados ? "Ver Sin Timbrar" : "Ver Timbrados";
    this.filters = this._getFilters(this.viewTimbrados ? "timbrados" : "sin-timbrar");
    this.rowButtons = this._getRowButtons(this.viewTimbrados ? "timbrados" : "sin-timbrar");
  }
  // #region -- private methods
  _getFacturaValues(credito) {
    const roundDesc = 100;
    const comision = credito.monto_autorizado ? credito.monto_autorizado * 0.015 : 0;
    let subtotal = comision;
    let iva = subtotal * 0.16;
    let total = subtotal + iva;
    subtotal = Math.round(subtotal * roundDesc) / roundDesc;
    iva = Math.round(iva * roundDesc) / roundDesc;
    total = Math.round(total * roundDesc) / roundDesc;
    return { subtotal, iva, total };
  }
  _getFilters(type) {
    if (type == "4") {
      return [
        {
          relation: "self",
          conditionals: [
            ["estado", "=", "ACTIVO"],
            ["liberado_fecha", "IS NOT NULL", "null"]
          ],
          andConditionals: []
        }
      ];
    }
    return [
      {
        relation: "self",
        conditionals: [
          ["estado", "=", "ACTIVO"],
          ["liberado_fecha", "IS NOT NULL", "null"],
          ["fecha_convenio", ">=", this.fechaInicial],
          ["fecha_convenio", "<=", this.fechaFinal]
        ],
        andConditionals: []
      }
    ];
  }
  _getExtra(tipo) {
  }
  _getRowButtons(typeView = "sin-timbrar") {
    return [
      {
        key: "facturar",
        text: "",
        title: "Facturar",
        style: {
          icon: "bi bi-receipt",
          text: "text-xs"
        }
      },
      {
        key: "verificar",
        text: "",
        title: "Verificar",
        style: {
          icon: "bi bi-check-circle",
          button: "btn btn-success"
        }
      },
      {
        key: "editar-fiscal",
        text: "",
        title: "Editar datos Fiscales",
        style: {
          icon: "bi bi-pencil-square",
          text: "text-xs"
        }
      }
    ];
  }
  _downloadFile(type, factura) {
    console.log(type, factura);
    if (factura == null || factura == void 0) {
      this.toastyService.show("error", "No se encontr\xF3 la factura.");
      return;
    }
    const { xml_timbrado, uid_cicofi } = factura;
    switch (type) {
      case "ver-xml":
        this._downloadXml(xml_timbrado, uid_cicofi ? uid_cicofi : `factura_abono_${factura.abono_id}`);
        break;
      case "ver-pdf":
        if (!uid_cicofi) {
          this.toastyService.show("error", "La factura no fue generada con SICOFI");
          return;
        }
        this._downloadPdf(uid_cicofi);
        break;
    }
  }
  _downloadXml(xmlString, uuid) {
    const blob = new Blob([xmlString], { type: "text/xml" });
    const url = window.URL.createObjectURL(blob);
    const fileName = `${uuid}.xml`;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }
  _downloadPdf(uuid) {
    this.api.post("factura/pdf", { uuid }, null, true).subscribe((res) => {
      console.log(res);
      const { data: { GeneraPDFCFDIV33Result } } = res;
      console.log(GeneraPDFCFDIV33Result);
      if (GeneraPDFCFDIV33Result.PDFCorrecto !== "true") {
        this.toastyService.show("error", "No se gener\xF3 correctamente la factura.");
        return;
      }
      let PDF = GeneraPDFCFDIV33Result.PDF;
      try {
        if (PDF.includes(",")) {
          PDF = PDF.split(",")[1];
        }
        const binaryData = atob(PDF);
        const byteArray = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          byteArray[i] = binaryData.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const fileName = `${uuid}.pdf`;
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error(e);
        this.toastyService.show("error", "No se gener\xF3 correctamente la factura.");
      }
    });
  }
};
_TableFacComisionComponent.\u0275fac = function TableFacComisionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TableFacComisionComponent)(\u0275\u0275directiveInject(TablaComisionService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ToastyService), \u0275\u0275directiveInject(ApiServiceService), \u0275\u0275directiveInject(FacturaMasivaService));
};
_TableFacComisionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableFacComisionComponent, selectors: [["app-table-fac-comision"]], viewQuery: function TableFacComisionComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c07, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabla = _t.first);
  }
}, decls: 40, vars: 29, consts: [["tabla", ""], [1, "table-container"], [3, "showChange", "datoFiscalChange", "show", "datoFiscal"], ["type", "comision", 3, "showChange", "cancelEvent", "show", "credito", "datoFiscal", "facturacionDetalle"], [3, "showChange", "callBackEvent", "show", "datos"], [1, "container-fluid"], [1, "row", "mt-3"], [1, "col-auto"], [1, "fs-text-label"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 3, "change"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "col-auto", "mt-3"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-search"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-receipt"], [1, "mt-3"], [3, "creditoChange", "credito", "relations", "conditionals"], [3, "rowButtonClickEvent", "selectedRowsChange", "title", "controller", "getAdvancedFilters", "useDefaultAgregarRedirect", "useDefaultRowEditRedirect", "tableDefinition", "checkbox", "relations", "getExtra", "rowEditar", "rowEliminar", "barraBusqueda", "showBarraButtons", "rowButtons", "selectedRows"]], template: function TableFacComisionComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-form-datos-fiscales", 2);
    \u0275\u0275twoWayListener("showChange", function TableFacComisionComponent_Template_app_form_datos_fiscales_showChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return \u0275\u0275resetView($event);
    })("datoFiscalChange", function TableFacComisionComponent_Template_app_form_datos_fiscales_datoFiscalChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.datoFiscal, $event) || (ctx.datoFiscal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("datoFiscalChange", function TableFacComisionComponent_Template_app_form_datos_fiscales_datoFiscalChange_1_listener() {
      \u0275\u0275restoreView(_r1);
      const tabla_r2 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(tabla_r2.getData());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-verificar-modal", 3);
    \u0275\u0275twoWayListener("showChange", function TableFacComisionComponent_Template_app_verificar_modal_showChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showVerificar, $event) || (ctx.showVerificar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("cancelEvent", function TableFacComisionComponent_Template_app_verificar_modal_cancelEvent_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onCancel($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-factura-masiva-modal", 4);
    \u0275\u0275twoWayListener("showChange", function TableFacComisionComponent_Template_app_factura_masiva_modal_showChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showFacturaMasiva, $event) || (ctx.showFacturaMasiva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("callBackEvent", function TableFacComisionComponent_Template_app_factura_masiva_modal_callBackEvent_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onEndFacturaMasiva($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "label", 8);
    \u0275\u0275text(8, "Fecha Inicial:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function TableFacComisionComponent_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fechaInicial, $event) || (ctx.fechaInicial = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
    \u0275\u0275text(12, "Fecha Final:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function TableFacComisionComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fechaFinal, $event) || (ctx.fechaFinal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 7)(15, "label", 8);
    \u0275\u0275text(16, "Tipo de Registros:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 10);
    \u0275\u0275listener("change", function TableFacComisionComponent_Template_select_change_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectFiltro($event));
    });
    \u0275\u0275elementStart(18, "option", 11);
    \u0275\u0275text(19, "Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 12);
    \u0275\u0275text(21, "Listos Para Facturar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 13);
    \u0275\u0275text(23, "No se pueden Facturar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 14);
    \u0275\u0275text(25, "Facturados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 15);
    \u0275\u0275text(27, "Todos sin fechas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 16)(29, "button", 17);
    \u0275\u0275listener("click", function TableFacComisionComponent_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.filtrar());
    });
    \u0275\u0275element(30, "i", 18);
    \u0275\u0275text(31, " Filtrar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 16)(33, "button", 19);
    \u0275\u0275listener("click", function TableFacComisionComponent_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.facturarSeleccionados());
    });
    \u0275\u0275element(34, "i", 20);
    \u0275\u0275text(35, " Facturar Seleccionados ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 21)(37, "app-buscador-creditos", 22);
    \u0275\u0275twoWayListener("creditoChange", function TableFacComisionComponent_Template_app_buscador_creditos_creditoChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.credito, $event) || (ctx.credito = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("creditoChange", function TableFacComisionComponent_Template_app_buscador_creditos_creditoChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.filterCredito($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "app-tabla", 23, 0);
    \u0275\u0275listener("rowButtonClickEvent", function TableFacComisionComponent_Template_app_tabla_rowButtonClickEvent_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onRowButtonClick($event));
    });
    \u0275\u0275twoWayListener("selectedRowsChange", function TableFacComisionComponent_Template_app_tabla_selectedRowsChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.seleccionados, $event) || (ctx.seleccionados = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.show)("datoFiscal", ctx.datoFiscal);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showVerificar);
    \u0275\u0275property("credito", ctx.credito)("datoFiscal", ctx.datoFiscal)("facturacionDetalle", ctx.facturacionDetalle);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showFacturaMasiva);
    \u0275\u0275property("datos", ctx.datosFacturar);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaInicial);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaFinal);
    \u0275\u0275advance(24);
    \u0275\u0275twoWayProperty("credito", ctx.credito);
    \u0275\u0275property("relations", ctx.relation)("conditionals", ctx.conditionals);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx.tableTitle)("controller", ctx.tablaController)("getAdvancedFilters", ctx.filters)("useDefaultAgregarRedirect", false)("useDefaultRowEditRedirect", false)("tableDefinition", ctx.tableDef)("checkbox", true)("relations", \u0275\u0275pureFunction0(28, _c13))("getExtra", ctx.extraFilters)("rowEditar", false)("rowEliminar", false)("barraBusqueda", false)("showBarraButtons", false)("rowButtons", ctx.rowButtons);
    \u0275\u0275twoWayProperty("selectedRows", ctx.seleccionados);
  }
}, dependencies: [
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  TablaComponent,
  BuscadorCreditosComponent,
  FormDatosFiscalesComponent,
  VerificarModalComponent,
  FacturaMasivaModalComponent
], styles: ["\n\n.table-container[_ngcontent-%COMP%] {\n  width: 90%;\n  background-color: white;\n  border-radius: 10px;\n  margin: 20px auto;\n  padding: 20px 30px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.fs-text-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #691730;\n}\n/*# sourceMappingURL=table-fac-comision.component.css.map */"] });
var TableFacComisionComponent = _TableFacComisionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableFacComisionComponent, [{
    type: Component,
    args: [{ selector: "app-table-fac-comision", imports: [
      FormsModule,
      TablaComponent,
      BuscadorCreditosComponent,
      FormDatosFiscalesComponent,
      VerificarModalComponent,
      FacturaMasivaModalComponent
    ], template: `<div class="table-container">
  <!-- <div class="d-flex align-items-center">
  </div> -->
  <app-form-datos-fiscales
    [(show)]="show"
    [(datoFiscal)]="datoFiscal"
    (datoFiscalChange)="tabla.getData()"
  ></app-form-datos-fiscales>
  <app-verificar-modal
    [(show)]="showVerificar"
    type='comision'
    [credito]="credito"
    [datoFiscal]="datoFiscal"
    [facturacionDetalle]="facturacionDetalle"
    (cancelEvent)="onCancel($event)"
  >
  </app-verificar-modal>
  <!-- <button class="btn btn-primary ms-3" (click)="changeView()">
    <i class="bi bi-eye-fill"></i> {{ btnTitleVistaTimbrados }}
  </button> -->
  <!-- Facturacion Masiva -->
  <app-factura-masiva-modal
    [(show)]="showFacturaMasiva"
    [datos]="datosFacturar"
    (callBackEvent)="onEndFacturaMasiva($event)"
  ></app-factura-masiva-modal>
  <!-- ./Facturacion Masiva -->
  <!-- Acciones de filtrado -->
  <div class="container-fluid">
    <div class="row mt-3">
      <div class="col-auto">
        <label class="fs-text-label">Fecha Inicial:</label>
        <input
          [(ngModel)]="fechaInicial"
          type="date"
          class="form-control form-control-sm"
        >
      </div>
      <div class="col-auto">
        <label class="fs-text-label">Fecha Final:</label>
        <input
          [(ngModel)]="fechaFinal"
          type="date"
          class="form-control form-control-sm"
        >
      </div>
      <div class="col-auto">
        <label class="fs-text-label">Tipo de Registros:</label>
        <select (change)="selectFiltro($event)" class="form-select form-select-sm">
          <option value="0">Todos</option>
          <option value="1">Listos Para Facturar</option>
          <option value="2">No se pueden Facturar</option>
          <option value="3">Facturados</option>
          <option value="4">Todos sin fechas</option>
        </select>
      </div>
      <div class="col-auto mt-3">
        <button (click)="filtrar()" class="btn btn-success">
          <i class="bi bi-search"></i>
          Filtrar
        </button>
      </div>
      <div class="col-auto mt-3">
        <button (click)="facturarSeleccionados()" class="btn btn-primary">
          <i class="bi bi-receipt"></i>
          Facturar Seleccionados
        </button>
      </div>
    </div>
  </div>
  <!-- ./Acciones de filtrado -->
  <!-- Filtrado por Cr\xE9dito -->
  <div class="mt-3">
    <app-buscador-creditos
      [(credito)]="credito"
      [relations]="relation"
      [conditionals]="conditionals"
      (creditoChange)="filterCredito($event)"
    ></app-buscador-creditos>
  </div>
  <!-- ./Filtrado por Cr\xE9dito -->
  <app-tabla
    #tabla
    [title]="tableTitle"
    [controller]="tablaController"
    [getAdvancedFilters]="filters"
    [useDefaultAgregarRedirect]="false"
    [useDefaultRowEditRedirect]="false"
    [tableDefinition]="tableDef"
    [checkbox]="true"
    [relations]="[
      'facturacionDetalle',
      'datosPersonaFisica',
      'datosPersonaFisica.datosPersonales.datosFiscales',
      'datosPersonasMorales',
      'datosPersonasMorales.datosFiscales',
      'creditos.facturacionDetalle'
    ]"
    [getExtra]="extraFilters"
    [rowEditar]="false"
    [rowEliminar]="false"
    [barraBusqueda]="false"
    [showBarraButtons]="false"
    [rowButtons]="rowButtons"
    (rowButtonClickEvent)="onRowButtonClick($event)"
    [(selectedRows)]="seleccionados"
  >
  </app-tabla>
</div>
`, styles: ["/* src/app/pagos/pagos-facturacion/table-fac-comision/table-fac-comision.component.css */\n.table-container {\n  width: 90%;\n  background-color: white;\n  border-radius: 10px;\n  margin: 20px auto;\n  padding: 20px 30px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.fs-text-label {\n  font-size: 14px;\n  font-weight: bold;\n  color: #691730;\n}\n/*# sourceMappingURL=table-fac-comision.component.css.map */\n"] }]
  }], () => [{ type: TablaComisionService }, { type: UtilsService }, { type: ToastyService }, { type: ApiServiceService }, { type: FacturaMasivaService }], { tabla: [{
    type: ViewChild,
    args: ["tabla"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableFacComisionComponent, { className: "TableFacComisionComponent", filePath: "src/app/pagos/pagos-facturacion/table-fac-comision/table-fac-comision.component.ts", lineNumber: 159 });
})();

// src/app/pagos/pagos-facturacion/pagos-facturacion.component.ts
function PagosFacturacionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-facturacion", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("filters", ctx_r0.activeFilters);
  }
}
function PagosFacturacionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-fac-comision");
  }
}
var _PagosFacturacionComponent = class _PagosFacturacionComponent {
  constructor(toastyService) {
    this.toastyService = toastyService;
    this.typeFacturacion = "pagos";
    this.titleSubMenu = "Facturar Comisiones";
    this.pagosIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"
    ><title>credit-card-outline</title>
    <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" fill="#f8e9ee"/>
    </svg>
  `;
    this.aperturasIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
    <title>credit-card-plus-outline</title>
    <path d="M21,18H24V20H21V23H19V20H16V18H19V15H21V18M19,8V6H3V8H19M19,12H3V18H14V20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H19A2,2 0 0,1 21,6V13H19V12Z" fill='#be375d'/>
    </svg>
  `;
    this.activeFilters = {};
  }
  cambiarTipoFacturacion() {
    if (this.typeFacturacion === "pagos") {
      this.typeFacturacion = "comision";
      this.titleSubMenu = "Facturar Pagos";
    } else {
      this.typeFacturacion = "pagos";
      this.titleSubMenu = "Facturar Comisiones";
    }
  }
  triggerToast(type) {
    const messages = {
      success: "Operacion realizada con exito",
      error: "Ha ocurrido un error",
      warning: "Operacion invalida",
      help: "Need assistance?"
    };
    this.toastyService.show(type, messages[type]);
  }
  onFiltersChanged(filters) {
    console.log("Received filters:", filters);
    this.activeFilters = filters;
  }
};
_PagosFacturacionComponent.\u0275fac = function PagosFacturacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagosFacturacionComponent)(\u0275\u0275directiveInject(ToastyService));
};
_PagosFacturacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagosFacturacionComponent, selectors: [["app-pagos-facturacion"]], decls: 9, vars: 4, consts: [[1, "upper-menu"], [1, "left-side"], [1, "nav-menu"], [3, "click", "label", "svgIcon"], [3, "filters"]], template: function PagosFacturacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "FACTURACI\xD3N v1.2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "nav", 2)(5, "app-sub-menu-active-button", 3);
    \u0275\u0275listener("click", function PagosFacturacionComponent_Template_app_sub_menu_active_button_click_5_listener() {
      return ctx.cambiarTipoFacturacion();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(6, "app-toasty-container");
    \u0275\u0275conditionalCreate(7, PagosFacturacionComponent_Conditional_7_Template, 1, 1, "app-table-facturacion", 4);
    \u0275\u0275conditionalCreate(8, PagosFacturacionComponent_Conditional_8_Template, 1, 0, "app-table-fac-comision");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("label", ctx.titleSubMenu)("svgIcon", ctx.pagosIcon);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.typeFacturacion === "pagos" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.typeFacturacion === "comision" ? 8 : -1);
  }
}, dependencies: [
  TableFacturacionComponent,
  TableFacComisionComponent,
  SubMenuActiveButtonComponent,
  ToastyContainerComponent
], styles: ["\n\n.upper-menu[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: white;\n  margin: 0 auto;\n  margin-top: 40px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  justify-content: space-between;\n}\n.upper-menu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: black;\n  margin: 0;\n  margin-left: 2rem;\n  white-space: nowrap;\n  font-weight: bold;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-right: 2rem;\n}\n.left-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 60px;\n  align-items: center;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 31.25rem;\n  margin: 6rem auto;\n  margin-left: 1rem;\n}\n.searchBar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#searchQueryInput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1.8rem;\n  background: #f5f5f5;\n  outline: none;\n  border: none;\n  border-radius: 1.625rem;\n  padding: 0 3.5rem 0 1.5rem;\n  font-size: 0.75rem;\n}\n#searchQuerySubmit[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 2.8rem;\n  margin-left: -3.5rem;\n  background: none;\n  border: none;\n  outline: none;\n}\n#searchQuerySubmit[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=pagos-facturacion.component.css.map */"] });
var PagosFacturacionComponent = _PagosFacturacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagosFacturacionComponent, [{
    type: Component,
    args: [{ selector: "app-pagos-facturacion", imports: [
      TableFacturacionComponent,
      TableFacComisionComponent,
      SubMenuActiveButtonComponent,
      ToastyContainerComponent
    ], template: '<div class="upper-menu">\n  <div class="left-side">\n    <h2>FACTURACI&Oacute;N v1.2</h2>\n    <!-- <app-filtered-search (filtersSubmitted)="onFiltersChanged($event)"></app-filtered-search> -->\n  </div>\n\n  <nav class="nav-menu">\n    <app-sub-menu-active-button\n      [label]="titleSubMenu"\n      [svgIcon]="pagosIcon"\n      (click)="cambiarTipoFacturacion()"\n    >\n    </app-sub-menu-active-button>\n  </nav>\n</div>\n\n<app-toasty-container></app-toasty-container>\n\n<!-- Facturar el Inter\xE9s de los abonos -->\n@if (typeFacturacion === "pagos") {\n  <app-table-facturacion [filters]="activeFilters"> </app-table-facturacion>\n}\n<!-- ./Facturar el Inter\xE9s de los abonos -->\n\n<!-- Facturar Comisi\xF3n por Apertura -->\n@if (typeFacturacion === "comision") {\n  <app-table-fac-comision> </app-table-fac-comision>\n}\n<!-- ./Facturar Comisi\xF3n por Apertura -->\n\n<!--<app-form-facturacion></app-form-facturacion>-->\n', styles: ["/* src/app/pagos/pagos-facturacion/pagos-facturacion.component.css */\n.upper-menu {\n  width: 90%;\n  height: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: white;\n  margin: 0 auto;\n  margin-top: 40px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 40px;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  justify-content: space-between;\n}\n.upper-menu h2 {\n  font-size: 20px;\n  color: black;\n  margin: 0;\n  margin-left: 2rem;\n  white-space: nowrap;\n  font-weight: bold;\n}\n.nav-menu {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-right: 2rem;\n}\n.left-side {\n  display: flex;\n  flex-direction: row;\n  height: 60px;\n  align-items: center;\n}\n.wrapper {\n  width: 100%;\n  max-width: 31.25rem;\n  margin: 6rem auto;\n  margin-left: 1rem;\n}\n.searchBar {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#searchQueryInput {\n  width: 100%;\n  height: 1.8rem;\n  background: #f5f5f5;\n  outline: none;\n  border: none;\n  border-radius: 1.625rem;\n  padding: 0 3.5rem 0 1.5rem;\n  font-size: 0.75rem;\n}\n#searchQuerySubmit {\n  width: 3.5rem;\n  height: 2.8rem;\n  margin-left: -3.5rem;\n  background: none;\n  border: none;\n  outline: none;\n}\n#searchQuerySubmit:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=pagos-facturacion.component.css.map */\n"] }]
  }], () => [{ type: ToastyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagosFacturacionComponent, { className: "PagosFacturacionComponent", filePath: "src/app/pagos/pagos-facturacion/pagos-facturacion.component.ts", lineNumber: 21 });
})();

// src/app/pagos/pagos-facturacion/services/poliza-helper.service.ts
var import_file_saver = __toESM(require_FileSaver_min());
var _PolizaHelperService = class _PolizaHelperService {
  constructor(creditoAbonoController, comisionesController, utilsEdoCta, sesionService) {
    this.creditoAbonoController = creditoAbonoController;
    this.comisionesController = comisionesController;
    this.utilsEdoCta = utilsEdoCta;
    this.sesionService = sesionService;
    this.EXCEL_PLANTILLA = "assets/plantillas_excel/polizas_interes.xls";
  }
  generarPolizaInteres(poliza, data) {
    return __async(this, null, function* () {
      const destWorkbook = utils.book_new();
      const response = yield fetch(this.EXCEL_PLANTILLA);
      const arrayBuffer = yield response.arrayBuffer();
      const workbook = readSync(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      this.setPolizaInfo(worksheet, 23, poliza);
      let totalPoliza = 0;
      let totalIva = 0;
      let currentRow = 0;
      const startRow = 24;
      let maxRow = startRow;
      data.forEach((row, index) => {
        currentRow = startRow + index;
        let movimiento = {
          cuenta_contable: "227143005",
          tipo_mov: 0,
          // 0 para cargo
          cantidad: row.factura?.monto_factura || 0,
          concepto: "INTERES",
          uuid: row.factura?.uid_cicofi || "",
          fecha: row.abono.fecha.split("T")[0].replace(/-/g, "")
        };
        this.setMovimientoPoliza(worksheet, currentRow, movimiento);
        maxRow = currentRow;
        if (row.factura) {
          let montoFactura = parseFloat(typeof row.factura.monto_factura === "string" ? `${row.factura.monto_factura}` : "0");
          const iva = this.calcularIva(montoFactura);
          totalIva += iva;
          totalPoliza += montoFactura;
        }
      });
      currentRow += 1;
      let movInteres = {
        cuenta_contable: "420100000",
        tipo_mov: 1,
        // 1 para abono
        cantidad: totalPoliza,
        concepto: "TOTAL",
        uuid: "",
        fecha: ""
      };
      this.setMovimientoPoliza(worksheet, currentRow, movInteres);
      currentRow += 1;
      let movIva = {
        cuenta_contable: "215011000",
        tipo_mov: 0,
        // 0 para cargo
        cantidad: totalIva,
        concepto: "IVA INTERES",
        uuid: "",
        fecha: ""
      };
      this.setMovimientoPoliza(worksheet, currentRow, movIva);
      currentRow += 1;
      movIva.tipo_mov = 1;
      this.setMovimientoPoliza(worksheet, currentRow, movIva);
      maxRow = currentRow;
      if (worksheet["!ref"]) {
        const range = utils.decode_range(worksheet["!ref"]);
        range.e.r = startRow + maxRow;
        worksheet["!ref"] = utils.encode_range(range);
      } else {
        worksheet["!ref"] = `A1:K${maxRow + 1}`;
      }
      utils.book_append_sheet(destWorkbook, worksheet, "Poliza Interes");
      const excelBuffer = writeSync(destWorkbook, { bookType: "xls", type: "array" });
      const wbout = new Blob([excelBuffer], {
        // type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        type: "application/vnd.ms-excel"
      });
      (0, import_file_saver.saveAs)(wbout, `Poliza_interes_${(/* @__PURE__ */ new Date()).getTime()}.xls`);
    });
  }
  generarPolizaIngresos(poliza, data) {
    return __async(this, null, function* () {
      console.info(data);
      const destWorkbook = utils.book_new();
      const response = yield fetch(this.EXCEL_PLANTILLA);
      const arrayBuffer = yield response.arrayBuffer();
      const workbook = readSync(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      this.setPolizaInfo(worksheet, 23, poliza);
      let totalPoliza = 0;
      let currentRow = 24;
      for (const dataItem of data) {
        let movimiento = {
          cuenta_contable: "116144029",
          tipo_mov: 1,
          cantidad: dataItem.factura?.monto_factura || 0,
          concepto: "COBRANZA",
          uuid: dataItem.factura?.uid_cicofi || "",
          fecha: dataItem.credito.fecha_convenio?.split("T")[0].replace(/-/g, "") || ""
        };
        this.setMovimientoPoliza(worksheet, currentRow, movimiento);
        if (dataItem.factura) {
          let cantidad = parseFloat(typeof dataItem.factura.monto_factura === "string" ? `${dataItem.factura.monto_factura}` : "0");
          totalPoliza += cantidad;
        }
        currentRow += 1;
      }
      let movmientoTotal = {
        cuenta_contable: "101002000",
        tipo_mov: 0,
        cantidad: totalPoliza,
        concepto: "COBRANZA",
        uuid: "",
        fecha: ""
      };
      this.setMovimientoPoliza(worksheet, currentRow, movmientoTotal);
      currentRow += 1;
      if (worksheet["!ref"]) {
        const range = utils.decode_range(worksheet["!ref"]);
        range.e.r = currentRow;
        worksheet["!ref"] = utils.encode_range(range);
      } else {
        worksheet["!ref"] = `A1:K${currentRow + 1}`;
      }
      utils.book_append_sheet(destWorkbook, worksheet, "Poliza Ingresos");
      const excelBuffer = writeSync(destWorkbook, { bookType: "xls", type: "array" });
      const wbout = new Blob([excelBuffer], {
        type: "application/vnd.ms-excel"
      });
      (0, import_file_saver.saveAs)(wbout, `Poliza_ingresos_${(/* @__PURE__ */ new Date()).getTime()}.xls`);
    });
  }
  ////#region -- Procesamiento de datos para póliza de interés
  procesarDatosPolizaInteres(fechaInicial, fechaFinal) {
    return __async(this, null, function* () {
      return (yield this.creditoAbonoController.get(
        [
          // -- Condiciones
          {
            key: "fecha",
            operator: ">=",
            value: fechaInicial
          },
          {
            key: "fecha",
            operator: "<=",
            value: fechaFinal
          },
          {
            key: "facturacion_detalle",
            operator: "!=",
            value: 0
          }
        ],
        void 0,
        // -- Relaciones
        [
          "creditos",
          "creditos.estadoCuenta",
          "creditos.facturacionDetalle"
        ],
        // -- ExtraData
        {
          sort: JSON.stringify({ column: "fecha", desc: false }),
          filtro: JSON.stringify({ facturados: true })
        }
      )).data || [];
    });
  }
  filtrarPagosInteres(data) {
    let polizaItems = [];
    if (data.length === 0) {
      return [];
    }
    for (const ca of data) {
      const { creditos } = ca;
      const fd = creditos?.facturacion_detalle?.find((fd2) => fd2.abono_id === ca.id && fd2.status_proceso === "Completo");
      polizaItems.push({
        abono: ca,
        factura: fd ? fd : void 0
      });
    }
    return polizaItems;
  }
  ////#endregion -- Procesamiento de datos para póliza de interés
  ////#region -- Procesamiento de datos de las comisiones
  procesarDatosPolizaComision(finicial, ffinal) {
    return __async(this, null, function* () {
      return (yield this.comisionesController.get(
        [
          // { key: 'estado', operator: '=', value: 'ACTIVO' },
          { key: "fecha_convenio", operator: ">=", value: finicial },
          { key: "fecha_convenio", operator: "<=", value: ffinal }
        ],
        void 0,
        [
          "facturacionDetalle"
          // 'creditos.facturacionDetalle',
        ],
        // -- extraData
        {
          sort: JSON.stringify({ column: "fecha_convenio", desc: true }),
          filtro: "facturados"
          // JSON.stringify({ facturados: true })
        }
      )).data || [];
    });
  }
  filtrarFacturaComision(creditos) {
    let items = [];
    for (const credito of creditos) {
      let factura = credito.facturacion_detalle?.find((fd) => fd.tipo_factura === "comision");
      if (factura && factura.status_proceso === "Completo") {
        items.push({
          credito,
          factura
        });
      }
    }
    return items;
  }
  ////#endregion
  // #region -- Póliza de Créditos (por sesiones ??)
  generarPolizaCreditos(poliza, data) {
    return __async(this, null, function* () {
      console.info(poliza, data);
      const destWorkbook = utils.book_new();
      const response = yield fetch(this.EXCEL_PLANTILLA);
      const arrayBuffer = yield response.arrayBuffer();
      const workbook = readSync(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      this.setPolizaInfo(worksheet, 23, poliza);
      let currentRow = 24;
      for (const item of data) {
        this.setMovimientoPoliza(worksheet, currentRow, {
          cuenta_contable: "116148006",
          tipo_mov: 0,
          // 0 para cargo
          cantidad: item.edoCuenta?.monto_total_mas_intereses || 0,
          concepto: "ENTREGA DE CREDITO",
          uuid: "",
          fecha: item.credito.fecha_convenio?.split("T")[0].replace(/-/g, "") || ""
        });
        currentRow += 1;
        this.setMovimientoPoliza(worksheet, currentRow, {
          cuenta_contable: "101018000",
          tipo_mov: 1,
          cantidad: 0,
          concepto: "BANCO [cuenta_banco] EMPRENDE",
          uuid: "",
          // ??
          fecha: item.credito.fecha_convenio?.split("T")[0].replace(/-/g, "") || ""
          // ??
        });
        currentRow += 1;
        this.setMovimientoPoliza(worksheet, currentRow, {
          cuenta_contable: "22614600",
          tipo_mov: 1,
          cantidad: item.edoCuenta?.interes_ordinario || 0,
          concepto: "Emprende 2024",
          uuid: "",
          // ??
          fecha: item.credito.fecha_convenio?.split("T")[0].replace(/-/g, "") || ""
          // ??
        });
        const ivaInteres = this.calcularIva(item.edoCuenta?.interes_ordinario || 0);
        currentRow += 1;
        this.setMovimientoPoliza(worksheet, currentRow, {
          cuenta_contable: "215011000",
          tipo_mov: 1,
          cantidad: ivaInteres,
          concepto: "Iva Pendiente a Trasladar",
          uuid: "",
          // ??
          fecha: item.credito.fecha_convenio?.split("T")[0].replace(/-/g, "") || ""
          // ??
        });
        currentRow += 1;
        this.setMovimientoPoliza(worksheet, currentRow, {
          cuenta_contable: "425116000",
          tipo_mov: 1,
          cantidad: item.factura?.monto_factura || 0,
          concepto: "Comisi\xF3n de Apertura",
          uuid: item.factura?.uid_cicofi || "",
          // ??
          fecha: item.credito.fecha_convenio?.split("T")[0].replace(/-/g, "") || ""
          // ??
        });
        const ivaComision = this.calcularIva(item.factura?.monto_factura || 0);
        currentRow += 1;
        this.setMovimientoPoliza(worksheet, currentRow, {
          cuenta_contable: "215010000",
          tipo_mov: 1,
          cantidad: ivaComision,
          concepto: "Iva Trasladado",
          uuid: "",
          // ??
          fecha: item.credito.fecha_convenio?.split("T")[0].replace(/-/g, "") || ""
          // ??
        });
        currentRow += 1;
      }
      if (worksheet["!ref"]) {
        const range = utils.decode_range(worksheet["!ref"]);
        range.e.r = currentRow;
        worksheet["!ref"] = utils.encode_range(range);
      } else {
        worksheet["!ref"] = `A1:K${currentRow + 1}`;
      }
      utils.book_append_sheet(destWorkbook, worksheet, "Poliza");
      const excelBuffer = writeSync(destWorkbook, { bookType: "xls", type: "array" });
      const wbout = new Blob([excelBuffer], {
        type: "application/vnd.ms-excel"
      });
      (0, import_file_saver.saveAs)(wbout, `Poliza_Credito_${(/* @__PURE__ */ new Date()).getTime()}.xls`);
    });
  }
  procesarDatosPolizaCreditos(finicial, ffinal, sesionId = "") {
    return __async(this, null, function* () {
      let conditions = this.getConditionalsPolCreditos(finicial, ffinal, sesionId);
      return (yield this.comisionesController.get(conditions.conditions, void 0, [
        "facturacionDetalle",
        "abonos",
        "convenios.conveniosPagos",
        "creditosPagos",
        "estadoCuenta",
        "sesiones"
      ], conditions.filter)).data || [];
    });
  }
  filtrarFacturaCreditos(creditos) {
    let items = [];
    console.log(creditos);
    for (let credito of creditos) {
      if (credito) {
        let factura = credito.facturacion_detalle?.find((fd) => fd.tipo_factura === "comision");
        let edoCuenta = this.utilsEdoCta.getEstadoCuenta(credito);
        items.push({
          credito,
          factura,
          edoCuenta,
          sesion: credito.sesiones
        });
      }
    }
    return items;
  }
  // #endregion
  getListadoSesiones() {
    return __async(this, null, function* () {
      return (yield this.sesionService.get([
        { key: "fecha", operator: "!=", value: "null" }
      ], void 0, [], {
        sort: JSON.stringify({ column: "fecha", desc: true })
      })).data || [];
    });
  }
  getConditionalsPolCreditos(finicial, ffinal, sessionId) {
    let conditions = [];
    let filter2 = {};
    if (sessionId === "") {
      conditions.push({ key: "fecha_convenio", operator: ">=", value: finicial });
      conditions.push({ key: "fecha_convenio", operator: "<=", value: ffinal });
      filter2 = {
        sort: JSON.stringify({ column: "fecha_convenio", desc: true }),
        filtro: ""
      };
    } else {
      conditions.push({ key: "sesion_id", operator: "=", value: sessionId });
    }
    return { conditions, filter: filter2 };
  }
  setPolizaInfo(worksheet, currentRow, poliza) {
    worksheet[`A${currentRow}`] = { t: "s", v: "P" };
    worksheet[`B${currentRow}`] = { t: "s", v: poliza.fecha };
    worksheet[`C${currentRow}`] = { t: "s", v: `${poliza.tipoPol}` };
    worksheet[`D${currentRow}`] = { t: "n", v: poliza.folio };
    worksheet[`E${currentRow}`] = { t: "n", v: 1 };
    worksheet[`F${currentRow}`] = { t: "s", v: "1" };
    worksheet[`G${currentRow}`] = { t: "s", v: poliza.concepto };
    worksheet[`H${currentRow}`] = { t: "n", v: 11 };
    worksheet[`I${currentRow}`] = { t: "s", v: "0" };
    worksheet[`J${currentRow}`] = { t: "s", v: "0" };
    worksheet[`K${currentRow}`] = { t: "s", v: poliza.guid };
  }
  setMovimientoPoliza(worksheet, currentRow, movimiento) {
    worksheet[`A${currentRow}`] = { t: "s", v: "M1" };
    worksheet[`B${currentRow}`] = { t: "s", v: movimiento.cuenta_contable };
    worksheet[`C${currentRow}`] = { t: "s", v: "" };
    worksheet[`D${currentRow}`] = { t: "n", v: movimiento.tipo_mov };
    worksheet[`E${currentRow}`] = { t: "n", v: movimiento.cantidad };
    worksheet[`F${currentRow}`] = { t: "n", v: 0 };
    worksheet[`G${currentRow}`] = { t: "n", v: 0 };
    worksheet[`H${currentRow}`] = { t: "s", v: movimiento.concepto };
    worksheet[`I${currentRow}`] = { t: "s", v: "" };
    worksheet[`J${currentRow}`] = { t: "s", v: movimiento.uuid };
    worksheet[`K${currentRow}`] = { t: "s", v: movimiento.fecha };
  }
  calcularIva(value) {
    const monto = Math.round(value * 100) / 100;
    return monto * 0.16;
  }
};
_PolizaHelperService.\u0275fac = function PolizaHelperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PolizaHelperService)(\u0275\u0275inject(CreditoAbonoService), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsEstadoCuentaService), \u0275\u0275inject(SesionService));
};
_PolizaHelperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PolizaHelperService, factory: _PolizaHelperService.\u0275fac, providedIn: "root" });
var PolizaHelperService = _PolizaHelperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolizaHelperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: CreditoAbonoService }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: SesionService }], null);
})();

// src/app/pagos/polizas/polizas.component.ts
var _c08 = ["tabla"];
var _c14 = () => ["facturacionDetalle", "abonos", "convenios.conveniosPagos", "creditosPagos", "estadoCuenta", "sesiones", "datosPersonaFisica", "datosPersonaFisica.datosPersonales", "datosPersonasMorales"];
var _c22 = () => ({ icon: "bi bi-pencil-square", text: "text-xs" });
var _c32 = (a0) => ({ key: "editar_cta_contable", text: "", title: "Editar Cuenta Contable", style: a0 });
var _c4 = (a0) => [a0];
function PolizasComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 20);
    \u0275\u0275listener("click", function PolizasComponent_Conditional_31_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.consultarCreditos());
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275text(3, " Consultar Cr\xE9ditos ");
    \u0275\u0275elementEnd()();
  }
}
function PolizasComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tabla", 22, 0);
    \u0275\u0275twoWayListener("selectedRowsChange", function PolizasComponent_Conditional_36_Template_app_tabla_selectedRowsChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCreditos, $event) || (ctx_r1.selectedCreditos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("rowButtonClickEvent", function PolizasComponent_Conditional_36_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowButtonClickEvent($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("controller", ctx_r1.creditoController)("tableDefinition", ctx_r1.tableDef)("getConditionals", ctx_r1.tablaConditionals)("relations", \u0275\u0275pureFunction0(12, _c14))("startEmpty", true)("getAdvancedFilters", ctx_r1.tablaAdvancedFilters)("rowEditar", false)("rowEliminar", false)("barraBusqueda", false)("showBarraButtons", false);
    \u0275\u0275twoWayProperty("selectedRows", ctx_r1.selectedCreditos);
    \u0275\u0275property("rowButtons", \u0275\u0275pureFunction1(16, _c4, \u0275\u0275pureFunction1(14, _c32, \u0275\u0275pureFunction0(13, _c22))));
  }
}
var TABLE_DEF4 = {
  style: {
    table: "table table-sm table-striped table-bordered"
  },
  columns: [
    { key: "id", header: "No Cr\xE9dito", style: { td: "text-center" } },
    {
      key: "row",
      header: "Acreditado",
      function: (credito, utils2) => {
        return utils2.nombreClienteFromCredito(credito);
      }
    },
    {
      key: "row",
      header: "Referencia Bancaria",
      function: (credito) => {
        return credito.referencia_bancaria || "";
      }
    },
    {
      key: "row",
      header: "Monto Autorizado",
      function: (credito) => {
        return credito.monto_autorizado?.toLocaleString("en-MX", { style: "currency", currency: "MXN" });
      },
      style: { td: "text-end" }
    },
    {
      key: "row",
      header: "Cuenta Contable",
      function: (credito) => {
        return credito.cuenta_contable || "No Asignada";
      }
    }
  ]
};
var FORM_DEF2 = [
  {
    title: "Editar Cuenta Contable",
    fields: [
      { key: "cuenta_contable", label: "Cuenta Contable", type: "text", validator: { required: true }, style: { input: "form-control w-100" } }
    ]
  }
];
var _PolizasComponent = class _PolizasComponent {
  constructor(creditoController, polizaHelper, toasty) {
    this.creditoController = creditoController;
    this.polizaHelper = polizaHelper;
    this.toasty = toasty;
    this.data = [];
    this.dataCreditos = [];
    this.polizasItems = [];
    this.fechaInicial = "";
    this.fechaFinal = "";
    this.fechaPoliza = "";
    this.tipoPoliza = "interes";
    this.sesionId = "";
    this.form = FORM_DEF2;
    this.creditoChange = new EventEmitter();
    this.showForm = false;
    this.esPolizaCredito = false;
    this.showTablaCreditos = false;
    this.selectedCreditos = [];
    this.sesiones = [];
    this.tableDef = TABLE_DEF4;
    this.tablaAdvancedFilters = [];
    this.tablaConditionals = [];
    const monthDates = UtilsHelper.getCurrentMonthDates();
    this.fechaInicial = monthDates.start;
    this.fechaFinal = monthDates.end;
    this.fechaPoliza = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  ngOnInit() {
    this.creditoChange.subscribe((credito) => {
      console.log("Credito cambiado:", credito);
    });
  }
  onRowButtonClickEvent(event) {
    const { key, row } = event;
    switch (key) {
      case "editar_cta_contable":
        console.log(row);
        this.credito = row;
        this.showForm = true;
        break;
      default:
        console.warn("No se ha definido una acci\xF3n para este bot\xF3n:", key);
    }
  }
  generarPoliza() {
    return __async(this, null, function* () {
      console.log(this.fechaInicial, this.fechaFinal, this.tipoPoliza);
      if (!this.tipoPoliza || !this.fechaInicial || !this.fechaInicial) {
        this.toasty.show("error", "Debe seleccionar una fecha inicial, final y el tipo de p\xF3liza");
        return;
      }
      switch (this.tipoPoliza) {
        case "interes":
          const polizaInfo = {
            fecha: this.fechaPoliza.replace(/-/g, ""),
            // new Date().toISOString().split('T')[0].replace(/-/g, ''),
            tipoPol: 14,
            folio: 1,
            concepto: `INTERES`,
            guid: "00000000-0000-0000-0000-000000000000"
          };
          this.data = yield this.polizaHelper.procesarDatosPolizaInteres(this.fechaInicial, this.fechaFinal);
          this.polizasItems = this.polizaHelper.filtrarPagosInteres(this.data);
          console.log(this.polizasItems);
          if (this.polizasItems.length === 0) {
            this.toasty.show("error", "No se encontraron pagos de inter\xE9s para generar la p\xF3liza");
            return;
          }
          yield this.polizaHelper.generarPolizaInteres(polizaInfo, this.polizasItems);
          break;
        case "creditos":
          if (this.selectedCreditos.length === 0) {
            this.toasty.show("error", "Debe seleccionar al menos un cr\xE9dito para generar la p\xF3liza, consulta los cr\xE9ditos a seleccionar");
            return;
          }
          const polizaCredito = {
            fecha: this.fechaPoliza.replace(/-/g, ""),
            tipoPol: 8,
            folio: 1,
            concepto: "ENTREGA DE CREDITOS EMPRENDE",
            guid: ""
          };
          let polizaItemsCreditos = this.polizaHelper.filtrarFacturaCreditos(this.selectedCreditos);
          if (polizaItemsCreditos.length === 0) {
            this.toasty.show("error", "No se encontraron datos procesados de cr\xE9ditos para generar la p\xF3liza");
            return;
          }
          console.log(polizaItemsCreditos);
          yield this.polizaHelper.generarPolizaCreditos(polizaCredito, polizaItemsCreditos);
          break;
        case "ingresos":
          const poliza = {
            fecha: (/* @__PURE__ */ new Date()).toISOString().split("T")[0].replace(/-/g, ""),
            tipoPol: 1,
            folio: 1,
            concepto: `COBRANZA`,
            guid: "00000000-0000-0000-0000-000000000000"
          };
          this.dataCreditos = yield this.polizaHelper.procesarDatosPolizaComision(this.fechaInicial, this.fechaFinal);
          let polizaItems = this.polizaHelper.filtrarFacturaComision(this.dataCreditos);
          if (polizaItems.length === 0) {
            this.toasty.show("error", "No se encontraron datos de factura de comisiones para generar la p\xF3liza");
            return;
          }
          this.polizaHelper.generarPolizaIngresos(poliza, polizaItems);
          break;
      }
    });
  }
  // async generarPoliza()
  // -- Para la seleccionar créditos y conciliarlos
  consultarCreditos() {
    return __async(this, null, function* () {
      this.showTablaCreditos = true;
      this.tablaConditionals = [
        { key: "liberado_fecha", operator: ">=", value: this.fechaInicial },
        { key: "liberado_fecha", operator: "<=", value: this.fechaFinal }
      ];
      this.tablaAdvancedFilters = [];
    });
  }
  selectTipPoliza(event) {
    if (event.target.value === "creditos") {
      this.esPolizaCredito = true;
    } else {
      this.esPolizaCredito = false;
    }
    console.log(event.target.value);
  }
  getSesiones() {
    return __async(this, null, function* () {
      this.sesiones = yield this.polizaHelper.getListadoSesiones();
    });
  }
};
_PolizasComponent.\u0275fac = function PolizasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PolizasComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(PolizaHelperService), \u0275\u0275directiveInject(ToastyService));
};
_PolizasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PolizasComponent, selectors: [["app-polizas"]], viewQuery: function PolizasComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c08, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabla = _t.first);
  }
}, decls: 40, vars: 11, consts: [["tabla", ""], [1, "container-fluid", "mt-4", "p-3", "my-1", "rounded", "shadow", "bg-white"], [1, "font-weight-bold"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-6", "my-3", "rounded", "border", "p-3", "bg-light"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "row", "g-2"], [1, "col-md-6"], [1, "small", "text-muted"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "interes"], ["value", "creditos"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "bi", "bi-gear"], ["title", "", 3, "controller", "tableDefinition", "getConditionals", "relations", "startEmpty", "getAdvancedFilters", "rowEditar", "rowEliminar", "barraBusqueda", "showBarraButtons", "selectedRows", "rowButtons"], [3, "showChange", "show"], ["rowButtonClass", "row py-3 bg-white sticky-bottom z-2 w-100", 3, "editChange", "controller", "form", "isolatedForm", "edit"], [1, "btn", "btn-success", "w-100", 3, "click"], [1, "bi", "bi-funnel"], ["title", "", 3, "selectedRowsChange", "rowButtonClickEvent", "controller", "tableDefinition", "getConditionals", "relations", "startEmpty", "getAdvancedFilters", "rowEditar", "rowEliminar", "barraBusqueda", "showBarraButtons", "selectedRows", "rowButtons"]], template: function PolizasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h4", 2);
    \u0275\u0275text(2, "Generaci\xF3n de P\xF3lizas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label", 6);
    \u0275\u0275text(7, "Rango de Fechas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "label", 9);
    \u0275\u0275text(11, "Desde:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PolizasComponent_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaInicial, $event) || (ctx.fechaInicial = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "label", 9);
    \u0275\u0275text(15, "Hasta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PolizasComponent_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaFinal, $event) || (ctx.fechaFinal = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 5)(18, "label", 6);
    \u0275\u0275text(19, "Fecha de P\xF3liza:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function PolizasComponent_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaPoliza, $event) || (ctx.fechaPoliza = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 5)(22, "label", 6);
    \u0275\u0275text(23, "Tipo de P\xF3liza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function PolizasComponent_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tipoPoliza, $event) || (ctx.tipoPoliza = $event);
      return $event;
    });
    \u0275\u0275listener("change", function PolizasComponent_Template_select_change_24_listener($event) {
      return ctx.selectTipPoliza($event);
    });
    \u0275\u0275elementStart(25, "option", 12);
    \u0275\u0275text(26, "Seleccione...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 13);
    \u0275\u0275text(28, "Inter\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 14);
    \u0275\u0275text(30, "Cr\xE9ditos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(31, PolizasComponent_Conditional_31_Template, 4, 0, "div", 5);
    \u0275\u0275elementStart(32, "div", 5)(33, "button", 15);
    \u0275\u0275listener("click", function PolizasComponent_Template_button_click_33_listener() {
      return ctx.generarPoliza();
    });
    \u0275\u0275element(34, "i", 16);
    \u0275\u0275text(35, " Generar P\xF3liza ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(36, PolizasComponent_Conditional_36_Template, 2, 18, "app-tabla", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "app-formulario-flotante", 18);
    \u0275\u0275twoWayListener("showChange", function PolizasComponent_Template_app_formulario_flotante_showChange_37_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
      return $event;
    });
    \u0275\u0275elementStart(38, "app-generic-form", 19);
    \u0275\u0275twoWayListener("editChange", function PolizasComponent_Template_app_generic_form_editChange_38_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.credito, $event) || (ctx.credito = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function PolizasComponent_Template_app_generic_form_editChange_38_listener($event) {
      return ctx.creditoChange.emit($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "app-toasty-container");
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaInicial);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaFinal);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaPoliza);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.tipoPoliza);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.esPolizaCredito ? 31 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.showTablaCreditos ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showForm);
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.creditoController)("form", ctx.form)("isolatedForm", true);
    \u0275\u0275twoWayProperty("edit", ctx.credito);
  }
}, dependencies: [
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  ToastyContainerComponent,
  TablaComponent,
  FormularioFlotanteComponent,
  GenericFormComponent
], encapsulation: 2 });
var PolizasComponent = _PolizasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolizasComponent, [{
    type: Component,
    args: [{ selector: "app-polizas", imports: [
      FormsModule,
      ToastyContainerComponent,
      TablaComponent,
      FormularioFlotanteComponent,
      GenericFormComponent
    ], template: `<div class="container-fluid mt-4 p-3 my-1 rounded shadow bg-white">
  <h4 class="font-weight-bold">Generaci\xF3n de P\xF3lizas</h4>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 my-3 rounded border p-3 bg-light">
      <div class="mb-3">
        <label class="form-label fw-semibold">Rango de Fechas</label>
        <div class="row g-2">
          <div class="col-md-6">
            <label class="small text-muted">Desde:</label>
            <input
              type="date"
              class="form-control"
              [(ngModel)]="fechaInicial"
              >
          </div>
          <div class="col-md-6">
            <label class="small text-muted">Hasta:</label>
            <input type="date" class="form-control" [(ngModel)]="fechaFinal">
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label fw-semibold">Fecha de P\xF3liza:</label>
        <input type="date" class="form-control" [(ngModel)]="fechaPoliza">
      </div>
      <div class="mb-3">
        <label class="form-label fw-semibold">Tipo de P\xF3liza</label>
        <select class="form-select" [(ngModel)]="tipoPoliza" (change)="selectTipPoliza($event)">
          <option value="">Seleccione...</option>
          <option value="interes">Inter\xE9s</option>
          <option value="creditos">Cr\xE9ditos</option>
          <!-- Los Ingresos son las comisiones  -->
          <!-- <option value="ingresos">Ingresos</option> -->
        </select>
      </div>
      <!-- Bot\xF3n de consulta de cr\xE9ditos para consultar -->
      @if (esPolizaCredito) {
        <div class="mb-3">
          <button class="btn btn-success w-100" (click)="consultarCreditos()">
            <i class="bi bi-funnel"></i> Consultar Cr\xE9ditos
          </button>
        </div>
      }
      <!-- ./Bot\xF3n de consulta de cr\xE9ditos para consultar -->
      <div class="mb-3">
        <button class="btn btn-primary w-100" (click)="generarPoliza()">
          <i class="bi bi-gear"></i>
          Generar P\xF3liza
        </button>
      </div>
    </div>
  </div>
  <!-- Tabla para la consiliaci\xF3n -->
  @if (showTablaCreditos) {
    <app-tabla
      #tabla
      title=""
      [controller]="creditoController"
      [tableDefinition]="tableDef"
      [getConditionals]="tablaConditionals"
    [relations]="[
        'facturacionDetalle',
        'abonos',
        'convenios.conveniosPagos',
        'creditosPagos',
        'estadoCuenta',
        'sesiones',
        'datosPersonaFisica',
        'datosPersonaFisica.datosPersonales',
        'datosPersonasMorales',
    ]"
      [startEmpty]="true"
      [getAdvancedFilters]="tablaAdvancedFilters"
      [rowEditar]="false"
      [rowEliminar]="false"
      [barraBusqueda]="false"
      [showBarraButtons]="false"
      [(selectedRows)]="selectedCreditos"
    [rowButtons]="[
      {
        key: 'editar_cta_contable',
        text: '',
        title: 'Editar Cuenta Contable',
        style: {
          icon: 'bi bi-pencil-square',
          text: 'text-xs'
        }
      }
    ]"
  (rowButtonClickEvent)="onRowButtonClickEvent($event)"
  >
</app-tabla>
}
<!-- ./Tabla para la consiliaci\xF3n -->
</div>

<!-- Formulario edici\xF3n cuenta contable  -->
<app-formulario-flotante
  [(show)]="showForm"
  >
  <app-generic-form
    [controller]="creditoController"
    [form]="form"
    [isolatedForm]="true"
    [(edit)]="credito"
    (editChange)="creditoChange.emit($event)"
    rowButtonClass="row py-3 bg-white sticky-bottom z-2 w-100"
    >
  </app-generic-form>
</app-formulario-flotante>
<!-- ./Formulario edici\xF3n cuenta contable  -->

<app-toasty-container></app-toasty-container>
` }]
  }], () => [{ type: CreditoService }, { type: PolizaHelperService }, { type: ToastyService }], { tabla: [{
    type: ViewChild,
    args: ["tabla"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PolizasComponent, { className: "PolizasComponent", filePath: "src/app/pagos/polizas/polizas.component.ts", lineNumber: 75 });
})();

// src/app/pagos/carga-masiva-cancelacion/ventana-carga-masiva-cancelacion/ventana-carga-masiva-cancelacion.component.ts
var _c09 = (a0) => ({ "collapsed": a0 });
var _c15 = (a0, a1) => ({ "show": a0, "collapse": a1 });
function VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
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
function VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_45_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_45_Template_button_click_37_listener() {
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
    \u0275\u0275pipe(55, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 27)(57, "span", 28);
    \u0275\u0275text(58, "Fecha T\xE9rmino:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 27)(63, "span", 28);
    \u0275\u0275text(64, "Capital mas inter\xE9s:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 12)(69, "div", 27)(70, "span", 28);
    \u0275\u0275text(71, "Plazo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 27)(75, "span", 28);
    \u0275\u0275text(76, "Meses Mora:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 37);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 27)(80, "span", 28);
    \u0275\u0275text(81, "Saldo Vencido:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span", 37);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 27)(86, "span", 28);
    \u0275\u0275text(87, "Total abonado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "currency");
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
    \u0275\u0275textInterpolate(ctx_r2.credito.referencia_bancaria);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r2.utilsService.esReestructura(ctx_r2.credito.folio) ? "bg-warning text-dark" : "bg-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.utilsService.esReestructura(ctx_r2.credito.folio) ? "REESTRUCTURA" : "CR\xC9DITO PRINCIPAL", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r2.credito.productos_financieros == null ? null : ctx_r2.credito.productos_financieros.nombre) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c09, !ctx_r2.isAccordionOpen));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(33, _c15, ctx_r2.isAccordionOpen, !ctx_r2.isAccordionOpen));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 17, ctx_r2.credito.monto_autorizado));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 19, ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.fecha_inicio, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 22, ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.fecha_fin, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 25, ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.monto_total_mas_intereses));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.periodos == null ? null : ctx_r2.credito.estado_cuenta.periodos.length, " periodos");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.cuotas_vencidas) || 0, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 27, ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.saldo_vencido), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 29, ctx_r2.credito.estado_cuenta == null ? null : ctx_r2.credito.estado_cuenta.monto_total_pagado));
  }
}
function VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "No cuenta con una cuenta de credito asociada");
    \u0275\u0275elementEnd();
  }
}
function VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 38);
    \u0275\u0275text(2, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function VentanaCargaMasivaCancelacionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_1_Template, 5, 0, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "h4", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275text(5, "Detalles de Pago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "h5", 9);
    \u0275\u0275text(13, "Detalles del Pago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "span", 14);
    \u0275\u0275text(19, "Monto aplicado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 15);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 13)(24, "span", 14);
    \u0275\u0275text(25, "Referencia del cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 12)(29, "div", 13)(30, "span", 14);
    \u0275\u0275text(31, "Registrado por:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 16)(35, "span", 14);
    \u0275\u0275text(36, "Fecha registro:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(40, "div", 7)(41, "div", 8)(42, "h5", 9);
    \u0275\u0275text(43, "Detalles de Cr\xE9dito");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 10);
    \u0275\u0275conditionalCreate(45, VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_45_Template, 91, 36, "div", 17)(46, VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_46_Template, 2, 0, "span")(47, VentanaCargaMasivaCancelacionComponent_Conditional_0_Conditional_47_Template, 3, 0, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 19)(49, "h4", 20)(50, "b");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 21)(53, "label", 22);
    \u0275\u0275text(54, "Motivo o raz\xF3n del cambio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function VentanaCargaMasivaCancelacionComponent_Conditional_0_Template_textarea_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.nota, $event) || (ctx_r2.nota = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 24)(57, "button", 25);
    \u0275\u0275listener("click", function VentanaCargaMasivaCancelacionComponent_Conditional_0_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteCargaMasiva());
    });
    \u0275\u0275text(58, " Cancelar pago ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.sePagoDeMas() ? 1 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 9, ctx_r2.cargaMasivaEdit.fecha_abono, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 12, ctx_r2.cargaMasivaEdit.importe_de_credito), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.cargaMasivaEdit.referencia_de_cliente);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r2.cargaMasivaEdit.usuarios == null ? null : ctx_r2.cargaMasivaEdit.usuarios.nombre) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 14, ctx_r2.cargaMasivaEdit.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r2.credito && !ctx_r2.isLoading ? 45 : !ctx_r2.credito && !ctx_r2.isLoading ? 46 : 47);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xBFSeguro que deseas ", ctx_r2.cargaMasivaEdit.deleted_at ? "restaurar" : "eliminar", " este pago?");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.nota);
  }
}
var _VentanaCargaMasivaCancelacionComponent = class _VentanaCargaMasivaCancelacionComponent {
  constructor(creditoController, pagoCargaMasivaController, pagoMasivoController, utilsService) {
    this.creditoController = creditoController;
    this.pagoCargaMasivaController = pagoCargaMasivaController;
    this.pagoMasivoController = pagoMasivoController;
    this.utilsService = utilsService;
    this.cerrar = new EventEmitter();
    this.nota = "";
    this.credito_id = 0;
    this.isAccordionOpen = true;
    this.isLoading = true;
  }
  ngOnChanges(changes) {
    this.isLoading = true;
    if (changes["cargaMasivaEdit"]) {
      this.credito_id = this.cargaMasivaEdit?.credito_id ? this.cargaMasivaEdit?.credito_id : 0;
      if (this.credito_id) {
        this.setCreditoById(this.credito_id).then(() => {
          this.isLoading = false;
        });
      } else {
        this.credito = void 0;
        this.isLoading = false;
      }
    }
  }
  deleteCargaMasiva() {
    return __async(this, null, function* () {
      if (this.cargaMasivaEdit) {
        if (yield this.pagoCargaMasivaController.switch(this.cargaMasivaEdit, { nota: this.nota })) {
          this.setCreditoById(this.credito.id).then(() => {
            this.cargaMasivaEdit = void 0;
            this.cerrar.emit();
          });
        }
      }
      this.nota = "";
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
        "productosFinancieros.plazos",
        "estadoCuenta",
        "datosPersonaFisica.datosPersonales",
        "datosPersonasMorales.representanteLegal",
        "convenios.conveniosPagos"
      ]);
    });
  }
  setCredito() {
    return __async(this, null, function* () {
      if (!this.credito && this.credito_id) {
        this.credito = yield this.creditoController.find(this.credito_id, ["*"]);
      }
    });
  }
  sePagoDeMas() {
    return (this.credito?.estado_cuenta?.monto_total_pagado ?? 0) > (this.credito?.estado_cuenta?.monto_total_mas_intereses ?? 0) && this.cargaMasivaEdit?.nota !== "MIGRADO";
  }
};
_VentanaCargaMasivaCancelacionComponent.\u0275fac = function VentanaCargaMasivaCancelacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VentanaCargaMasivaCancelacionComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(PagoCargaMasivaService), \u0275\u0275directiveInject(PagoCargaMasivaService), \u0275\u0275directiveInject(UtilsService));
};
_VentanaCargaMasivaCancelacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentanaCargaMasivaCancelacionComponent, selectors: [["app-ventana-carga-masiva-cancelacion"]], inputs: { cargaMasivaEdit: "cargaMasivaEdit" }, outputs: { cerrar: "cerrar" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "container-fluid", "p-4"], ["role", "alert", 1, "alert", "alert-danger", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0", "text-primary"], [1, "bi", "bi-cash-coin", "me-2"], [1, "badge", "bg-light", "text-dark"], [1, "bi", "bi-calendar", "me-1"], [1, "card", "mb-4", "shadow-sm"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "d-flex", "mb-3"], [1, "fw-bold", "me-2", 2, "min-width", "120px"], [1, "badge", "bg-success", "bg-opacity-10", "text-light", "fs-6"], [1, "d-flex"], [1, "mt-1"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "container", "px-5", "pt-0", "pb-3"], [1, "text-center"], [1, "mt-3"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["placeholder", "Ingresa tu nota o comentario aqui...", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-end", "gap-3", "mt-4"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], [1, "d-flex", "mb-2"], [1, "fw-bold", "me-2"], [1, "badge", "pt-1", 3, "ngClass"], ["id", "creditoDetailsAccordion", 1, "accordion", "mt-2"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", 1, "accordion-button", 3, "click", "ngClass"], [1, "bi", "bi-info-circle", "me-2"], [1, "accordion-collapse", 3, "ngClass"], [1, "accordion-body"], [1, "badge", "bg-danger", "bg-opacity-10", "text-light"], [1, "visually-hidden"]], template: function VentanaCargaMasivaCancelacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VentanaCargaMasivaCancelacionComponent_Conditional_0_Template, 59, 17, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.cargaMasivaEdit ? 0 : -1);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  DatePipe,
  CurrencyPipe,
  ScrollingModule,
  NgClass
], encapsulation: 2 });
var VentanaCargaMasivaCancelacionComponent = _VentanaCargaMasivaCancelacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VentanaCargaMasivaCancelacionComponent, [{
    type: Component,
    args: [{ selector: "app-ventana-carga-masiva-cancelacion", imports: [
      FormsModule,
      DatePipe,
      CurrencyPipe,
      ScrollingModule,
      NgClass
    ], template: `@if (cargaMasivaEdit) {
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
      {{cargaMasivaEdit.fecha_abono  | date: 'dd/MM/yyyy'}}
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
            <span class="fw-bold me-2" style="min-width: 120px;">Monto aplicado:</span>
            <span class="badge bg-success bg-opacity-10 text-light fs-6">
              {{cargaMasivaEdit.importe_de_credito| currency}}
            </span>
          </div>
          <div class="d-flex mb-3">
            <span class="fw-bold me-2" style="min-width: 120px;">Referencia del cliente</span>
            <span>{{cargaMasivaEdit.referencia_de_cliente}}</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex mb-3">
            <span class="fw-bold me-2" style="min-width: 120px;">Registrado por:</span>
            <span>{{cargaMasivaEdit.usuarios?.nombre || "N/A"}}</span>
          </div>
          <div class="d-flex">
            <span class="fw-bold me-2" style="min-width: 120px;">Fecha registro:</span>
            <span>{{cargaMasivaEdit.created_at| date:'dd/MM/yyyy'}}</span>
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
      @if (credito && !isLoading) { 
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
              <span>{{credito.referencia_bancaria}}</span>
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
                      <span>{{credito.estado_cuenta?.fecha_inicio | date:'dd/MM/yyyy'}}</span>
                    </div>
                    <div class="d-flex mb-2">
                      <span class="fw-bold me-2">Fecha T\xE9rmino:</span>
                      <span>{{credito.estado_cuenta?.fecha_fin | date:'dd/MM/yyyy'}}</span>
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
       @else if(!credito && !isLoading) {
      <span>No cuenta con una cuenta de credito asociada</span> 
       }
       @else{
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
       }
    </div> 
    
    <div class="container px-5 pt-0 pb-3">
        <h4 class=text-center><b>\xBFSeguro que deseas {{cargaMasivaEdit.deleted_at?'restaurar':'eliminar'}} este
            pago?</b></h4>
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
    <button class="btn btn-danger" (click)="deleteCargaMasiva()">
      Cancelar pago
    </button>
  </div>
</div>
}

` }]
  }], () => [{ type: CreditoService }, { type: PagoCargaMasivaService }, { type: PagoCargaMasivaService }, { type: UtilsService }], { cargaMasivaEdit: [{
    type: Input
  }], cerrar: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentanaCargaMasivaCancelacionComponent, { className: "VentanaCargaMasivaCancelacionComponent", filePath: "src/app/pagos/carga-masiva-cancelacion/ventana-carga-masiva-cancelacion/ventana-carga-masiva-cancelacion.component.ts", lineNumber: 23 });
})();

// src/app/pagos/carga-masiva-cancelacion/carga-masiva-cancelacion.component.ts
function CargaMasivaCancelacionComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tabla", 28);
    \u0275\u0275listener("rowButtonClickEvent", function CargaMasivaCancelacionComponent_Conditional_55_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eliminarRow($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("barraBusqueda", false)("checkbox", false)("controller", ctx_r1.cargaMasivaController)("getConditionals", ctx_r1.getConditionals)("getExtra", ctx_r1.getExtra)("relations", ctx_r1.relations)("rowEditar", false)("rowEliminar", false)("rowButtons", ctx_r1.rowButtons)("showBarraButtons", false)("tableDefinition", ctx_r1.tabla)("useDefaultRowEditRedirect", false);
  }
}
var TABLE_DEF5 = {
  style: {
    table: "table table-sm"
  },
  columns: [
    {
      header: "Fecha Abono",
      key: "fecha_abono",
      pipe: "date"
    },
    {
      header: "Monto",
      key: "importe_de_credito",
      pipe: "currency"
    },
    {
      header: "Referencia Bancaria",
      key: "descripcion"
    },
    "nota",
    {
      key: "creditos_abonos",
      keyList: ["creditos", "estado_cuenta", "credito_status"],
      header: "Estado Credito"
    },
    {
      header: "Aplicado por",
      key: "creditos_abonos",
      function: (abono) => {
        return abono?.usuarios?.nombre ?? "N/A";
      }
    }
  ]
};
var _CargaMasivaCancelacionComponent = class _CargaMasivaCancelacionComponent {
  constructor(cargaMasivaController) {
    this.cargaMasivaController = cargaMasivaController;
    this.tabla = TABLE_DEF5;
    this.cargasMasivas = [];
    this.showEdit = false;
    this.relations = [
      "creditosAbonos.creditos.estadoCuenta",
      "creditosAbonos.usuarios",
      "usuarios"
    ];
    this.mostrarTabla = false;
    this.filtros = {
      estado: "",
      referencia: null,
      estado_credito: null,
      credito_id: 0,
      monto: 0,
      desde: null,
      hasta: null
    };
    this.rowButtons = [{
      key: "eliminar",
      text: "",
      title: "Eliminar",
      style: {
        button: "btn btn-sm btn-danger scale-05",
        icon: "bi bi-trash-fill"
      }
    }];
    this.getConditionals = [
      {
        key: "deleted_at",
        operator: "IS NULL",
        value: null
      }
    ];
    this.getExtra = {};
  }
  editarPago(pago) {
    this.cargaMasivaEdit = pago;
    this.showEdit = true;
  }
  eliminarRow(row) {
    this.editarPago(row.row);
  }
  aplicarFiltros() {
    this.getExtra = {
      filtro: JSON.stringify(this.filtros)
    };
    this.mostrarTabla = true;
  }
  limpiarFiltros() {
    this.filtros = {
      estado: "",
      credito_id: 0,
      estado_credito: null,
      referencia: null,
      monto: 0,
      desde: null,
      hasta: null
    };
    this.aplicarFiltros();
    this.mostrarTabla = false;
  }
  onCerrarVentana() {
    this.showEdit = false;
    this.aplicarFiltros();
  }
};
_CargaMasivaCancelacionComponent.\u0275fac = function CargaMasivaCancelacionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CargaMasivaCancelacionComponent)(\u0275\u0275directiveInject(PagoCargaMasivaService));
};
_CargaMasivaCancelacionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CargaMasivaCancelacionComponent, selectors: [["app-carga-masiva-cancelacion"]], decls: 58, vars: 9, consts: [[1, "container-fluid", "p-3", "my-1", "rounded", "shadow", "bg-white"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-6", "my-3", "rounded", "border", "p-4", "bg-light"], [1, "mb-3", "text-primary"], [1, "bi", "bi-funnel", "me-2"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "aplicado"], ["value", "no_identificado"], ["type", "text", "placeholder", "Buscar por referencia...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "placeholder", "0.00", "step", "0.01", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ingresa algo para filtrar...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "g-2"], [1, "col-md-6"], [1, "small", "text-muted"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "mt-4"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-eraser", "me-1"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-check-circle", "me-1"], [3, "barraBusqueda", "checkbox", "controller", "getConditionals", "getExtra", "relations", "rowEditar", "rowEliminar", "rowButtons", "showBarraButtons", "tableDefinition", "useDefaultRowEditRedirect"], ["size", "large", 3, "showChange", "show"], [3, "cerrar", "cargaMasivaEdit"], [3, "rowButtonClickEvent", "barraBusqueda", "checkbox", "controller", "getConditionals", "getExtra", "relations", "rowEditar", "rowEliminar", "rowButtons", "showBarraButtons", "tableDefinition", "useDefaultRowEditRedirect"]], template: function CargaMasivaCancelacionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4");
    \u0275\u0275text(2, "Cancelaci\xF3n de cargas masivas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "h5", 3);
    \u0275\u0275element(6, "i", 4);
    \u0275\u0275text(7, "Filtros avanzados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "label", 6);
    \u0275\u0275text(10, "Estado del pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function CargaMasivaCancelacionComponent_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.estado, $event) || (ctx.filtros.estado = $event);
      return $event;
    });
    \u0275\u0275elementStart(12, "option", 8);
    \u0275\u0275text(13, "Todos los pagos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 9);
    \u0275\u0275text(15, "Aplicados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 10);
    \u0275\u0275text(17, "No identificados");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 5)(19, "label", 6);
    \u0275\u0275text(20, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function CargaMasivaCancelacionComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.referencia, $event) || (ctx.filtros.referencia = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 5)(23, "label", 6);
    \u0275\u0275text(24, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 12)(26, "span", 13);
    \u0275\u0275text(27, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function CargaMasivaCancelacionComponent_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.monto, $event) || (ctx.filtros.monto = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 5)(30, "label", 6);
    \u0275\u0275text(31, "Estado Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 12)(33, "span", 13);
    \u0275\u0275text(34, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CargaMasivaCancelacionComponent_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.estado_credito, $event) || (ctx.filtros.estado_credito = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 5)(37, "label", 6);
    \u0275\u0275text(38, "Rango de fechas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 16)(40, "div", 17)(41, "label", 18);
    \u0275\u0275text(42, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function CargaMasivaCancelacionComponent_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.desde, $event) || (ctx.filtros.desde = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 17)(45, "label", 18);
    \u0275\u0275text(46, "Hasta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function CargaMasivaCancelacionComponent_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.hasta, $event) || (ctx.filtros.hasta = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 20)(49, "button", 21);
    \u0275\u0275listener("click", function CargaMasivaCancelacionComponent_Template_button_click_49_listener() {
      return ctx.limpiarFiltros();
    });
    \u0275\u0275element(50, "i", 22);
    \u0275\u0275text(51, " Limpiar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 23);
    \u0275\u0275listener("click", function CargaMasivaCancelacionComponent_Template_button_click_52_listener() {
      return ctx.aplicarFiltros();
    });
    \u0275\u0275element(53, "i", 24);
    \u0275\u0275text(54, " Aplicar filtros ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(55, CargaMasivaCancelacionComponent_Conditional_55_Template, 1, 12, "app-tabla", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "app-formulario-flotante", 26);
    \u0275\u0275twoWayListener("showChange", function CargaMasivaCancelacionComponent_Template_app_formulario_flotante_showChange_56_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showEdit, $event) || (ctx.showEdit = $event);
      return $event;
    });
    \u0275\u0275elementStart(57, "app-ventana-carga-masiva-cancelacion", 27);
    \u0275\u0275listener("cerrar", function CargaMasivaCancelacionComponent_Template_app_ventana_carga_masiva_cancelacion_cerrar_57_listener() {
      return ctx.onCerrarVentana();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.estado);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.referencia);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.monto);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.estado_credito);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.desde);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.hasta);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.mostrarTabla ? 55 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showEdit);
    \u0275\u0275advance();
    \u0275\u0275property("cargaMasivaEdit", ctx.cargaMasivaEdit);
  }
}, dependencies: [
  FormularioFlotanteComponent,
  TablaComponent,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  MinValidator,
  NgModel,
  VentanaCargaMasivaCancelacionComponent
], encapsulation: 2 });
var CargaMasivaCancelacionComponent = _CargaMasivaCancelacionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CargaMasivaCancelacionComponent, [{
    type: Component,
    args: [{ selector: "app-carga-masiva-cancelacion", imports: [
      FormularioFlotanteComponent,
      TablaComponent,
      FormsModule,
      VentanaCargaMasivaCancelacionComponent
    ], template: '<div class="container-fluid p-3 my-1 rounded shadow bg-white">\n  <h4>Cancelaci\xF3n de cargas masivas</h4>\n  <div class="row justify-content-center">\n    <div class="col-12 col-md-6 my-3 rounded border p-4 bg-light">\n      <h5 class="mb-3 text-primary"><i class="bi bi-funnel me-2"></i>Filtros avanzados</h5>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Estado del pago</label>\n        <select class="form-select" [(ngModel)]="filtros.estado">\n          <option value="">Todos los pagos</option>\n          <option value="aplicado">Aplicados</option>\n          <option value="no_identificado">No identificados</option>\n        </select>\n      </div>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Referencia</label>\n        <input type="text" class="form-control" placeholder="Buscar por referencia..."\n          [(ngModel)]="filtros.referencia">\n      </div>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Monto</label>\n        <div class="input-group">\n          <span class="input-group-text">$</span>\n          <input type="number" class="form-control" placeholder="0.00" [(ngModel)]="filtros.monto" step="0.01"\n            min="0">\n        </div>\n      </div>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Estado Cr\xE9dito</label>\n        <div class="input-group">\n          <span class="input-group-text">Estado</span>\n          <input type="text" class="form-control" placeholder="Ingresa algo para filtrar..." [(ngModel)]="filtros.estado_credito">\n        </div>\n      </div>\n      <div class="mb-3">\n        <label class="form-label fw-semibold">Rango de fechas</label>\n        <div class="row g-2">\n          <div class="col-md-6">\n            <label class="small text-muted">Desde</label>\n            <input type="date" class="form-control" [(ngModel)]="filtros.desde">\n          </div>\n          <div class="col-md-6">\n            <label class="small text-muted">Hasta</label>\n            <input type="date" class="form-control" [(ngModel)]="filtros.hasta">\n          </div>\n        </div>\n      </div>\n\n      <div class="d-flex justify-content-between mt-4">\n        <button class="btn btn-outline-secondary" (click)="limpiarFiltros()">\n          <i class="bi bi-eraser me-1"></i> Limpiar\n        </button>\n        <button class="btn btn-primary" (click)="aplicarFiltros()">\n          <i class="bi bi-check-circle me-1"></i> Aplicar filtros\n        </button>\n      </div>\n    </div>\n  </div>\n\n  @if (mostrarTabla) {\n    <app-tabla \n      [barraBusqueda]="false"\n      [checkbox]="false" \n      [controller]="cargaMasivaController"\n      [getConditionals]="getConditionals"\n      [getExtra]="getExtra"\n      [relations]="relations"\n      [rowEditar]="false"\n      [rowEliminar]="false"\n      [rowButtons]="rowButtons"\n      (rowButtonClickEvent)="eliminarRow($event)"      \n      [showBarraButtons]="false"\n      [tableDefinition]="tabla"\n      [useDefaultRowEditRedirect]="false">\n    </app-tabla>\n  }\n</div>\n<app-formulario-flotante [(show)]="showEdit" size="large">\n    <app-ventana-carga-masiva-cancelacion       \n      [cargaMasivaEdit]="cargaMasivaEdit"\n      (cerrar)="onCerrarVentana()"\n      >\n    </app-ventana-carga-masiva-cancelacion>\n</app-formulario-flotante>' }]
  }], () => [{ type: PagoCargaMasivaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CargaMasivaCancelacionComponent, { className: "CargaMasivaCancelacionComponent", filePath: "src/app/pagos/carga-masiva-cancelacion/carga-masiva-cancelacion.component.ts", lineNumber: 57 });
})();

// src/app/controllers/liquidacion.anticipada.service.ts
var _LiquidacionAnticipadaService = class _LiquidacionAnticipadaService extends SuperService {
  constructor() {
    super(...arguments);
    this.model = "liquidaciones_anticipadas";
    this.columns = [
      "fecha",
      "credito_id",
      "credito_abono_id",
      "iva_condonado",
      "interes_condonado",
      "documento_path",
      "capital_adelantado",
      "comentarios",
      "usuario_id",
      "deleted_at",
      "created_at"
    ];
  }
};
_LiquidacionAnticipadaService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LiquidacionAnticipadaService_BaseFactory;
  return function LiquidacionAnticipadaService_Factory(__ngFactoryType__) {
    return (\u0275LiquidacionAnticipadaService_BaseFactory || (\u0275LiquidacionAnticipadaService_BaseFactory = \u0275\u0275getInheritedFactory(_LiquidacionAnticipadaService)))(__ngFactoryType__ || _LiquidacionAnticipadaService);
  };
})();
_LiquidacionAnticipadaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiquidacionAnticipadaService, factory: _LiquidacionAnticipadaService.\u0275fac, providedIn: "any" });
var LiquidacionAnticipadaService = _LiquidacionAnticipadaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiquidacionAnticipadaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], null, null);
})();

// src/app/pagos/liquidacion-anticipada-tabla/liquidacion-anticipada-tabla.component.ts
var TABLE_DEF6 = {
  emptyMsg: "No hay liquidaciones anticipadas registradas.",
  columns: [
    "credito_id",
    "fecha",
    {
      key: "iva_condonado",
      header: "Iva Condonado",
      pipe: "currency"
    },
    {
      key: "interes_condonado",
      header: "Iva Condonado",
      pipe: "currency"
    },
    {
      key: "capital_adelantado",
      header: "Capital Adelantado",
      pipe: "currency"
    },
    "comentarios",
    {
      key: "usuarios",
      subKey: "nombre",
      header: "Creado Por:"
    }
  ]
};
var _LiquidacionAnticipadaTablaComponent = class _LiquidacionAnticipadaTablaComponent {
  constructor() {
    this.tabla = TABLE_DEF6;
    this.conditionals = [
      {
        key: "deleted_at",
        operator: "IS NULL",
        value: null
      }
    ];
    this.liquidacionAnticipadaController = inject(LiquidacionAnticipadaService);
  }
  aplicarFiltros() {
    if (this.credito_id) {
      this.conditionals = [
        {
          key: "deleted_at",
          operator: "IS NULL",
          value: null
        },
        {
          key: "credito_id",
          operator: "=",
          value: this.credito_id
        }
      ];
    } else {
      this.conditionals = [
        {
          key: "deleted_at",
          operator: "IS NULL",
          value: null
        }
      ];
    }
  }
};
_LiquidacionAnticipadaTablaComponent.\u0275fac = function LiquidacionAnticipadaTablaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LiquidacionAnticipadaTablaComponent)();
};
_LiquidacionAnticipadaTablaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiquidacionAnticipadaTablaComponent, selectors: [["app-liquidacion-anticipada-tabla"]], decls: 5, vars: 8, consts: [[1, "container-fluid", "p-3"], [1, "container-fluid", "pb-3", "rounded", "shadow", "bg-white"], ["title", "Liquidaciones anticipadas", 3, "tableDefinition", "getConditionals", "controller", "barraBusqueda", "eliminar", "restaurar"], [1, "py-3"], [3, "creditoIdChange", "justId", "creditoId"]], template: function LiquidacionAnticipadaTablaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-tabla", 2)(3, "div", 3)(4, "app-buscador-creditos", 4);
    \u0275\u0275twoWayListener("creditoIdChange", function LiquidacionAnticipadaTablaComponent_Template_app_buscador_creditos_creditoIdChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.credito_id, $event) || (ctx.credito_id = $event);
      return $event;
    });
    \u0275\u0275listener("creditoIdChange", function LiquidacionAnticipadaTablaComponent_Template_app_buscador_creditos_creditoIdChange_4_listener() {
      return ctx.aplicarFiltros();
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("tableDefinition", ctx.tabla)("getConditionals", ctx.conditionals)("controller", ctx.liquidacionAnticipadaController)("barraBusqueda", false)("eliminar", false)("restaurar", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("justId", true);
    \u0275\u0275twoWayProperty("creditoId", ctx.credito_id);
  }
}, dependencies: [
  TablaComponent,
  BuscadorCreditosComponent
], encapsulation: 2 });
var LiquidacionAnticipadaTablaComponent = _LiquidacionAnticipadaTablaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiquidacionAnticipadaTablaComponent, [{
    type: Component,
    args: [{ selector: "app-liquidacion-anticipada-tabla", imports: [
      TablaComponent,
      BuscadorCreditosComponent
    ], template: '<div class="container-fluid p-3">\n    <div class="container-fluid pb-3 rounded shadow bg-white">\n        <app-tabla title="Liquidaciones anticipadas" [tableDefinition]="tabla" [getConditionals]="conditionals"\n            [controller]="liquidacionAnticipadaController" [barraBusqueda]="false" [eliminar]="false" [restaurar]="false">\n            <div class="py-3">\n                <app-buscador-creditos [justId]="true" [(creditoId)]="credito_id"\n                    (creditoIdChange)="aplicarFiltros()"></app-buscador-creditos>\n            </div>\n        </app-tabla>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiquidacionAnticipadaTablaComponent, { className: "LiquidacionAnticipadaTablaComponent", filePath: "src/app/pagos/liquidacion-anticipada-tabla/liquidacion-anticipada-tabla.component.ts", lineNumber: 45 });
})();

// src/app/pagos/liquidacion-anticipada/liquidacion-anticipada.component.ts
var _c010 = ["fileInput"];
var _forTrack0 = ($index, $item) => $item.id;
function LiquidacionAnticipadaComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3, "El cr\xE9dito seleccionado puede liquidarse anticipadamente");
    \u0275\u0275elementEnd()();
  }
}
function LiquidacionAnticipadaComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3, "El cr\xE9dito seleccionado no puede liquidarse anticipadamente. Por favor, seleccione otro cr\xE9dito. ");
    \u0275\u0275elementEnd()();
  }
}
function LiquidacionAnticipadaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LiquidacionAnticipadaComponent_Conditional_3_Conditional_0_Template, 4, 0, "div", 10)(1, LiquidacionAnticipadaComponent_Conditional_3_Conditional_1_Template, 4, 0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.sePuedeLiquidarAnticipadaMente ? 0 : 1);
  }
}
function LiquidacionAnticipadaComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Esta liquidaci\xF3n anticipada fue eliminada en ", ctx_r0.utils.fechaFormateada(ctx_r0.liquidacion.deleted_at), " y no se puede modificar, solo consultar para hist\xF3ricos.");
  }
}
function LiquidacionAnticipadaComponent_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " Busque y seleccione el cr\xE9dito que desea liquidar anticipadamente ");
    \u0275\u0275elementEnd();
  }
}
function LiquidacionAnticipadaComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h6", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2, "B\xFAsqueda y Selecci\xF3n de Cr\xE9dito ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LiquidacionAnticipadaComponent_Conditional_11_Conditional_3_Template, 3, 0, "div", 17);
    \u0275\u0275elementStart(4, "app-buscador-creditos", 18);
    \u0275\u0275twoWayListener("creditoChange", function LiquidacionAnticipadaComponent_Conditional_11_Template_app_buscador_creditos_creditoChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.credito, $event) || (ctx_r0.credito = $event);
      return \u0275\u0275resetView($event);
    })("creditoIdChange", function LiquidacionAnticipadaComponent_Conditional_11_Template_app_buscador_creditos_creditoIdChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.liquidacion.credito_id, $event) || (ctx_r0.liquidacion.credito_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.credito ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("credito", ctx_r0.credito);
    \u0275\u0275property("relations", ctx_r0.relations);
    \u0275\u0275twoWayProperty("creditoId", ctx_r0.liquidacion.credito_id);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " Seleccione la mensualidad a la que se le condonar\xE1 el inter\xE9s ordinario e IVA ");
    \u0275\u0275elementEnd();
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_0_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 27);
    \u0275\u0275listener("click", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_0_For_30_Template_tr_click_0_listener() {
      const periodo_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.periodoSelected = periodo_r4;
      return \u0275\u0275resetView(ctx_r0.setLiquidacion());
    });
    \u0275\u0275elementStart(1, "td", 28);
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
    \u0275\u0275elementStart(23, "td")(24, "span", 29);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td")(27, "div", 30)(28, "input", 31);
    \u0275\u0275listener("click", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_0_For_30_Template_input_click_28_listener() {
      const periodo_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.periodoSelected = periodo_r4;
      return \u0275\u0275resetView(ctx_r0.setLiquidacion());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const periodo_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("table-primary", (ctx_r0.periodoSelected == null ? null : ctx_r0.periodoSelected.id) === periodo_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(periodo_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.utils.fechaFormateada(periodo_r4.fecha));
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
    \u0275\u0275classProp("bg-success", periodo_r4.status == "PAGADO")("bg-danger", periodo_r4.status == "VENCIDO")("bg-warning", periodo_r4.status != "PAGADO" && periodo_r4.status != "VENCIDO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", periodo_r4.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", (ctx_r0.periodoSelected == null ? null : ctx_r0.periodoSelected.id) === periodo_r4.id);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 20);
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2, "Selecci\xF3n de Per\xEDodo a Condonar ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LiquidacionAnticipadaComponent_Conditional_12_Conditional_0_Conditional_3_Template, 3, 0, "div", 22);
    \u0275\u0275elementStart(4, "div", 23)(5, "table", 24)(6, "thead", 25)(7, "tr")(8, "th");
    \u0275\u0275text(9, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Saldo insoluto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Pago programado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Pago total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Capital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Inter\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Seleccionar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275repeaterCreate(29, LiquidacionAnticipadaComponent_Conditional_12_Conditional_0_For_30_Template, 29, 30, "tr", 26, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.periodoSelected ? 3 : -1);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx_r0.periodos);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h6", 41);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, "Confirmar Cancelaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43);
    \u0275\u0275element(4, "i", 44);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Advertencia:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Esta acci\xF3n cancelar\xE1 la liquidaci\xF3n anticipada. Esta operaci\xF3n no se puede deshacer. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 45)(10, "label", 46);
    \u0275\u0275text(11, "Motivo de cancelaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 47);
    \u0275\u0275twoWayListener("ngModelChange", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_28_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.comentarioCancelacion, $event) || (ctx_r0.comentarioCancelacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 48);
    \u0275\u0275text(14, "Proporcione una explicaci\xF3n clara sobre las razones de esta cancelaci\xF3n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.comentarioCancelacion);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " Revise cuidadosamente los datos antes de confirmar la liquidaci\xF3n anticipada. ");
    \u0275\u0275elementEnd();
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h6", 15);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, "Datos De La Liquidaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_29_Conditional_3_Template, 3, 0, "div", 50);
    \u0275\u0275elementStart(4, "div", 33)(5, "div", 51)(6, "label", 46);
    \u0275\u0275text(7, "Fecha de Liquidaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_29_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.liquidacion.fecha, $event) || (ctx_r0.liquidacion.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 48);
    \u0275\u0275text(10, "Seleccione la fecha de ejecuci\xF3n de la liquidaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 51)(12, "label", 46);
    \u0275\u0275text(13, "Documento de liquidaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-file-input", 53, 0);
    \u0275\u0275twoWayListener("urlChange", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_29_Template_app_file_input_urlChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.liquidacion.documento_path, $event) || (ctx_r0.liquidacion.documento_path = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 48);
    \u0275\u0275text(17, "Seleccione el documento de liquidaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 51)(19, "label", 54);
    \u0275\u0275text(20, "Comentarios (Opcional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_29_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.liquidacion.comentarios, $event) || (ctx_r0.liquidacion.comentarios = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small", 48);
    \u0275\u0275text(23, "Informaci\xF3n adicional sobre el proceso de liquidaci\xF3n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.liquidacion.id ? 3 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.liquidacion.fecha);
    \u0275\u0275advance(6);
    \u0275\u0275property("automaticSave", false);
    \u0275\u0275twoWayProperty("url", ctx_r0.liquidacion.documento_path);
    \u0275\u0275property("showButton", false);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.liquidacion.comentarios);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.showCancelacionForm = false);
    });
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2, "Volver ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 59);
    \u0275\u0275listener("click", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.cancelarCondonacion());
    });
    \u0275\u0275element(4, "i", 42);
    \u0275\u0275text(5, " Confirmar Cancelaci\xF3n ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.comentarioCancelacion);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.showCancelacionForm = true);
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, " Cancelar Liquidaci\xF3n ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r0.liquidacion.deleted_at);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Conditional_0_Template, 6, 1)(1, LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Conditional_1_Template, 3, 1, "button", 56);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r0.showCancelacionForm ? 0 : 1);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.ejecutarCondonacion());
    });
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, " Confirmar Liquidaci\xF3n ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r0.isLiquidacionValid());
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 15);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2, "Resumen de Liquidaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34)(5, "div", 35)(6, "div", 36)(7, "h6", 37);
    \u0275\u0275text(8, "IVA a Condonar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h4", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 34)(13, "div", 35)(14, "div", 36)(15, "h6", 37);
    \u0275\u0275text(16, "Inter\xE9s a Condonar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h4", 38);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 34)(21, "div", 35)(22, "div", 36)(23, "h6", 37);
    \u0275\u0275text(24, "Capital Adelantado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h4", 38);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(28, LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_28_Template, 15, 1)(29, LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_29_Template, 24, 6);
    \u0275\u0275elementStart(30, "div", 39);
    \u0275\u0275conditionalCreate(31, LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_31_Template, 2, 1);
    \u0275\u0275conditionalCreate(32, LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Conditional_32_Template, 3, 1, "button", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, ctx_r0.liquidacion.iva_condonado));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 8, ctx_r0.liquidacion.interes_condonado));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 10, ctx_r0.liquidacion.capital_adelantado));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showCancelacionForm ? 28 : 29);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.liquidacion.id ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.showCancelacionForm ? 32 : -1);
  }
}
function LiquidacionAnticipadaComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LiquidacionAnticipadaComponent_Conditional_12_Conditional_0_Template, 31, 1);
    \u0275\u0275conditionalCreate(1, LiquidacionAnticipadaComponent_Conditional_12_Conditional_1_Template, 33, 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.liquidacion.id ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.periodoSelected || ctx_r0.liquidacion.id ? 1 : -1);
  }
}
var _LiquidacionAnticipadaComponent = class _LiquidacionAnticipadaComponent {
  constructor() {
    this.liquidacion = {};
    this.relations = [
      "estadoCuenta",
      "abonos",
      "convenios",
      "convenios.conveniosPagos",
      "creditosPagos"
    ];
    this.showCancelacionForm = false;
    this.comentarioCancelacion = "";
    this.liquidacionAnticipadaController = inject(LiquidacionAnticipadaService);
    this.creditoController = inject(CreditoService);
    this.creditoAbonoController = inject(CreditoAbonoService);
    this.detalleBitacoraController = inject(BitacoraCancelacionAbonoService);
    this.utilsEstadoCuenta = inject(UtilsEstadoCuentaService);
    this.dialog = inject(VanillaDialogService);
    this.utils = inject(UtilsService);
    this.route = inject(ActivatedRoute);
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      const id = params["liquidacion_id"];
      if (id) {
        const data = yield this.liquidacionAnticipadaController.find(id, {
          relations: ["*"]
        });
        this.liquidacion = data ? data : {};
        this.liquidacion.fecha = this.liquidacion.fecha?.substring(0, 10);
        console.log(this.liquidacion);
        this.credito = yield this.creditoController.find(this.liquidacion.credito_id, this.relations);
      }
    }));
  }
  onSubmit() {
    if (!this.liquidacion.id) {
      this.liquidacion.credito_id = this.credito?.id;
      this.liquidacion.credito_abono_id = this.abonoPeriodoCondonado?.id;
    }
  }
  get sePuedeLiquidarAnticipadaMente() {
    if (!this.credito || !this.credito.abonos || !this.credito.estado_cuenta)
      return false;
    const estadoCuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(this.credito);
    if (!estadoCuenta.abonos_distribuidos?.length)
      return false;
    return estadoCuenta.abonos_distribuidos.some((abono) => {
      const interes_pagado = +abono.pago_interes + +abono.pago_iva;
      return interes_pagado >= estadoCuenta.capital_por_vencer;
    });
  }
  get periodos() {
    const estadoCuenta = this.utilsEstadoCuenta.calculateEstadoDeCuenta(this.credito);
    return estadoCuenta.periodos.filter((p) => p.status !== "VIGENTE");
  }
  get abonoPeriodoCondonado() {
    return this.periodoSelected?.abonos?.find((a) => a.pago_interes)?.abono;
  }
  setLiquidacion() {
    if (!this.periodoSelected)
      return;
    this.liquidacion.iva_condonado = this.periodoSelected.iva;
    this.liquidacion.interes_condonado = this.periodoSelected.interes;
    this.liquidacion.capital_adelantado = this.periodoSelected.iva + this.periodoSelected.interes + (this.periodoSelected.abonos?.reduce((acc, a) => acc + +a.abono.monto, 0) ?? 0);
  }
  ejecutarCondonacion() {
    return __async(this, null, function* () {
      if (!this.liquidacion.iva_condonado || !this.liquidacion.interes_condonado || !this.periodoSelected || !this.credito)
        return;
      if (!this.esPeriodoValido()) {
        yield firstValueFrom(this.dialog.show({
          title: "Advertencia",
          body: "El periodo seleccionado no contiene capital adelantado y no podra liquidar el c\u0155edito de manera anticipada, por favor elige otro.",
          tipo: "warning"
        }));
        return;
      }
      const fechaPeriodo = /* @__PURE__ */ new Date(this.liquidacion.fecha.substring(0, 10) + "T17:00:00Z");
      const fechaAbono = fechaPeriodo.getFullYear() + "-" + (fechaPeriodo.getMonth() + 1).toString().padStart(2, "0") + "-01";
      const abono = yield this.creditoAbonoController.new({
        monto: this.liquidacion.iva_condonado + this.liquidacion.interes_condonado,
        fecha: fechaAbono,
        credito_id: this.credito.id,
        comentarios: "SYSTEM: CONDONACION DE INTERESES ORDINARIOS POR LIQUIDACION TEMPRANA",
        concepto: "CONDONACION DE INTERESES"
      });
      this.liquidacion.credito_abono_id = abono.id;
      this.liquidacion.credito_id = this.credito.id;
      this.liquidacion = yield this.liquidacionAnticipadaController.new(this.liquidacion);
      if (this.fileInput?.file) {
        if (this.liquidacion.id) {
          this.fileInput.apiUrl = `api/liquidaciones_anticipadas/${this.liquidacion.id}/file`;
          yield this.fileInput.upload();
        }
      }
      yield this.detalleBitacoraController.new({
        credito_id: this.liquidacion.credito_id,
        creditos_abono_id: this.liquidacion.credito_abono_id,
        pagos_cargas_masiva_id: null,
        origen: "LIQUIDACION ANTICIPADA",
        accion: "CONDONACION DE INTERES ORDINARIO",
        motivo: this.liquidacion.comentarios,
        usuario_id: this.liquidacion.usuario_id
      });
      this.creditoController.actualizarEstadoCuenta(this.credito);
    });
  }
  esPeriodoValido() {
    if (!this.periodoSelected)
      return false;
    return this.periodoSelected.abonos?.some((a) => a.adelantado > 0);
  }
  cancelarCondonacion() {
    return __async(this, null, function* () {
      if (!this.liquidacion.id)
        return;
      yield this.creditoAbonoController.switch(this.liquidacion.credito_abono_id, { nota: "SYSYEM: CANCELACI\xD3N AUTOMATICA POR CANCELACION LIQUIDACION ANTICIPADA" });
      this.liquidacionAnticipadaController.switch(this.liquidacion.id);
      yield this.detalleBitacoraController.new({
        credito_id: this.liquidacion.credito_id,
        creditos_abono_id: this.liquidacion.credito_abono_id,
        pagos_cargas_masiva_id: null,
        origen: "LIQUIDACION ANTICIPADA",
        accion: "CANCELACION",
        motivo: this.comentarioCancelacion
      });
      this.creditoController.actualizarEstadoCuenta(this.credito);
    });
  }
  isLiquidacionValid() {
    return this.periodoSelected && this.liquidacion.fecha && this.liquidacion.comentarios && this.fileInput?.file && !this.liquidacion.deleted_at && !this.liquidacion.id;
  }
};
_LiquidacionAnticipadaComponent.\u0275fac = function LiquidacionAnticipadaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LiquidacionAnticipadaComponent)();
};
_LiquidacionAnticipadaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiquidacionAnticipadaComponent, selectors: [["app-liquidacion-anticipada"]], viewQuery: function LiquidacionAnticipadaComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c010, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, decls: 13, vars: 4, consts: [["fileInput", ""], [1, "container-fluid", "p-3"], [1, "row", "justify-content-center"], [1, "col-12"], ["role", "alert", 1, "alert", "alert-info", "d-flex", "align-items-center"], [1, "card", "shadow-sm"], [1, "card-header", "text-bg-primary", "py-3"], [1, "mb-0"], [1, "bi", "bi-cash-coin", "me-2"], [1, "card-body", "p-4"], ["role", "alert", 1, "alert", "alert-success", "d-flex", "align-items-center"], ["role", "alert", 1, "alert", "alert-warning", "d-flex", "align-items-center"], [1, "bi", "bi-check-circle-fill", "me-2", "fs-5"], [1, "bi", "bi-exclamation-triangle-fill", "me-2", "fs-5"], [1, "bi", "bi-info-circle-fill", "me-2", "fs-5"], [1, "mb-3", "border-bottom", "pb-2", "text-primary"], [1, "bi", "bi-search", "me-2"], [1, "alert", "alert-info", "mb-4"], [3, "creditoChange", "creditoIdChange", "credito", "relations", "creditoId"], [1, "bi", "bi-info-circle", "me-2"], [1, "mb-3", "border-bottom", "pb-2", "text-primary", "mt-4"], [1, "bi", "bi-calendar-check", "me-2"], [1, "alert", "alert-info", "mb-3"], [1, "table-responsive", "mb-4"], [1, "table", "table-hover"], [1, "table-light"], [1, "pointer", "user-select-none", 3, "table-primary"], [1, "pointer", "user-select-none", 3, "click"], [1, "fw-bold"], [1, "badge"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "click", "checked"], [1, "bi", "bi-file-text", "me-2"], [1, "row", "mb-4"], [1, "col-md-4"], [1, "card", "bg-light"], [1, "card-body", "text-center"], [1, "card-title", "text-muted"], [1, "text-primary"], [1, "d-flex", "justify-content-end", "gap-3", "pt-3", "border-top"], [1, "btn", "btn-primary", 3, "disabled"], [1, "mb-3", "border-bottom", "pb-2", "text-danger"], [1, "bi", "bi-x-circle", "me-2"], [1, "alert", "alert-warning"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "col-12", "mb-3"], [1, "form-label", "required-field"], ["rows", "4", "placeholder", "Describa detalladamente el motivo de la cancelaci\xF3n...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-text", "text-muted"], [1, "bi", "bi-check-circle", "me-2"], [1, "alert", "alert-info"], [1, "col-12", "col-md-6", "mb-3"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "urlChange", "automaticSave", "url", "showButton"], [1, "form-label"], ["rows", "3", "placeholder", "Ingrese observaciones relevantes sobre esta liquidaci\xF3n...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-outline-danger", 3, "disabled"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-left", "me-2"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "bi", "bi-trash", "me-2"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function LiquidacionAnticipadaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275conditionalCreate(3, LiquidacionAnticipadaComponent_Conditional_3_Template, 2, 1);
    \u0275\u0275conditionalCreate(4, LiquidacionAnticipadaComponent_Conditional_4_Template, 4, 1, "div", 4);
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "h5", 7);
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275text(9, "Liquidaci\xF3n Anticipada");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9);
    \u0275\u0275conditionalCreate(11, LiquidacionAnticipadaComponent_Conditional_11_Template, 5, 4);
    \u0275\u0275conditionalCreate(12, LiquidacionAnticipadaComponent_Conditional_12_Template, 2, 2);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.credito && !ctx.liquidacion.id ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.liquidacion.deleted_at ? 4 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!ctx.liquidacion.id ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.sePuedeLiquidarAnticipadaMente || ctx.liquidacion.id ? 12 : -1);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  BuscadorCreditosComponent,
  CurrencyPipe,
  FileInputComponent
], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  height: 25rem;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=liquidacion-anticipada.component.css.map */"] });
var LiquidacionAnticipadaComponent = _LiquidacionAnticipadaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiquidacionAnticipadaComponent, [{
    type: Component,
    args: [{ selector: "app-liquidacion-anticipada", imports: [
      FormsModule,
      BuscadorCreditosComponent,
      CurrencyPipe,
      FileInputComponent
    ], template: `<div class="container-fluid p-3">
    <div class="row justify-content-center">
        <div class="col-12">
            @if (credito && !liquidacion.id) {
            @if (sePuedeLiquidarAnticipadaMente) {
            <div class="alert alert-success d-flex align-items-center" role="alert">
                <i class="bi bi-check-circle-fill me-2 fs-5"></i>
                <div>El cr\xE9dito seleccionado puede liquidarse anticipadamente</div>
            </div>
            } @else {
            <div class="alert alert-warning d-flex align-items-center" role="alert">
                <i class="bi bi-exclamation-triangle-fill me-2 fs-5"></i>
                <div>El cr\xE9dito seleccionado no puede liquidarse anticipadamente. Por favor, seleccione otro cr\xE9dito.
                </div>
            </div>
            }
            }
            @if(liquidacion.deleted_at){
            <div class="alert alert-info d-flex align-items-center" role="alert">
                <i class="bi bi-info-circle-fill me-2 fs-5"></i>
                <div>Esta liquidaci\xF3n anticipada fue eliminada en {{utils.fechaFormateada(liquidacion.deleted_at)}} y no se puede modificar, solo consultar para hist\xF3ricos.</div>
            </div>
            }

            <div class="card shadow-sm">
                <div class="card-header text-bg-primary py-3">
                    <h5 class="mb-0"><i class="bi bi-cash-coin me-2"></i>Liquidaci\xF3n Anticipada</h5>
                </div>
                <div class="card-body p-4">
                    @if (!liquidacion.id) {
                    <!-- Secci\xF3n: B\xFAsqueda de cr\xE9dito -->
                    <h6 class="mb-3 border-bottom pb-2 text-primary">
                        <i class="bi bi-search me-2"></i>B\xFAsqueda y Selecci\xF3n de Cr\xE9dito
                    </h6>
                    @if (!credito) {
                    <div class="alert alert-info mb-4">
                        <i class="bi bi-info-circle me-2"></i>
                        Busque y seleccione el cr\xE9dito que desea liquidar anticipadamente
                    </div>
                    }
                    <app-buscador-creditos [(credito)]="credito" [relations]="relations"
                        [(creditoId)]="liquidacion.credito_id"></app-buscador-creditos>
                    }

                    @if (sePuedeLiquidarAnticipadaMente || liquidacion.id) {
                    @if (!this.liquidacion.id) {
                    <!-- Secci\xF3n: Selecci\xF3n de per\xEDodo -->
                    <h6 class="mb-3 border-bottom pb-2 text-primary mt-4">
                        <i class="bi bi-calendar-check me-2"></i>Selecci\xF3n de Per\xEDodo a Condonar
                    </h6>
                    @if (!periodoSelected) {
                    <div class="alert alert-info mb-3">
                        <i class="bi bi-info-circle me-2"></i>
                        Seleccione la mensualidad a la que se le condonar\xE1 el inter\xE9s ordinario e IVA
                    </div>
                    }

                    <div class="table-responsive mb-4">
                        <table class="table table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>No.</th>
                                    <th>Fecha</th>
                                    <th>Saldo insoluto</th>
                                    <th>Pago programado</th>
                                    <th>Pago total</th>
                                    <th>Capital</th>
                                    <th>Inter\xE9s</th>
                                    <th>IVA</th>
                                    <th>Status</th>
                                    <th>Seleccionar</th>
                                </tr>
                            </thead>
                            <tbody>
                                @for (periodo of periodos; track periodo.id; let i = $index) {
                                <tr [class.table-primary]="periodoSelected?.id === periodo.id"
                                    (click)="periodoSelected=periodo; setLiquidacion()"
                                    class="pointer user-select-none">
                                    <td class="fw-bold">{{periodo.id}}</td>
                                    <td>{{utils.fechaFormateada(periodo.fecha)}}</td>
                                    <td>{{periodo.saldo_insoluto|currency}}</td>
                                    <td>{{periodo.pago_programado_total|currency}}</td>
                                    <td>{{periodo.pago_total|currency}}</td>
                                    <td>{{periodo.pago_capital|currency}}</td>
                                    <td>{{periodo.pago_interes|currency}}</td>
                                    <td>{{periodo.pago_iva|currency}}</td>
                                    <td>
                                        <span class="badge" [class.bg-success]="periodo.status=='PAGADO'"
                                            [class.bg-danger]="periodo.status=='VENCIDO'"
                                            [class.bg-warning]="periodo.status!='PAGADO' && periodo.status!='VENCIDO'">
                                            {{periodo.status}}
                                        </span>
                                    </td>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio"
                                                [checked]="periodoSelected?.id === periodo.id"
                                                (click)="periodoSelected=periodo; setLiquidacion()">
                                        </div>
                                    </td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    }

                    @if (periodoSelected || this.liquidacion.id) {
                    <!-- Secci\xF3n: Resumen de liquidaci\xF3n -->
                    <h6 class="mb-3 border-bottom pb-2 text-primary">
                        <i class="bi bi-file-text me-2"></i>Resumen de Liquidaci\xF3n
                    </h6>

                    <div class="row mb-4">
                        <div class="col-md-4">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <h6 class="card-title text-muted">IVA a Condonar</h6>
                                    <h4 class="text-primary">{{liquidacion.iva_condonado | currency}}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <h6 class="card-title text-muted">Inter\xE9s a Condonar</h6>
                                    <h4 class="text-primary">{{liquidacion.interes_condonado | currency}}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card bg-light">
                                <div class="card-body text-center">
                                    <h6 class="card-title text-muted">Capital Adelantado</h6>
                                    <h4 class="text-primary">{{liquidacion.capital_adelantado | currency}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    @if (showCancelacionForm) {
                    <!-- Secci\xF3n: Cancelaci\xF3n -->
                    <h6 class="mb-3 border-bottom pb-2 text-danger">
                        <i class="bi bi-x-circle me-2"></i>Confirmar Cancelaci\xF3n
                    </h6>

                    <div class="alert alert-warning">
                        <i class="bi bi-exclamation-triangle me-2"></i>
                        <strong>Advertencia:</strong> Esta acci\xF3n cancelar\xE1 la liquidaci\xF3n anticipada. Esta operaci\xF3n no
                        se puede deshacer.
                    </div>

                    <div class="row mb-4">
                        <div class="col-12 mb-3">
                            <label class="form-label required-field">Motivo de cancelaci\xF3n</label>
                            <textarea class="form-control" rows="4" [(ngModel)]="comentarioCancelacion"
                                placeholder="Describa detalladamente el motivo de la cancelaci\xF3n..."></textarea>
                            <small class="form-text text-muted">Proporcione una explicaci\xF3n clara sobre las razones de
                                esta cancelaci\xF3n</small>
                        </div>
                    </div>
                    } @else {
                    <!-- Secci\xF3n: Confirmaci\xF3n -->
                    <h6 class="mb-3 border-bottom pb-2 text-primary">
                        <i class="bi bi-check-circle me-2"></i>Datos De La Liquidaci\xF3n
                    </h6>

                    @if (!liquidacion.id) {
                    <div class="alert alert-info">
                        <i class="bi bi-info-circle me-2"></i>
                        Revise cuidadosamente los datos antes de confirmar la liquidaci\xF3n anticipada.
                    </div>
                    }

                    <div class="row mb-4">
                        <div class="col-12 col-md-6 mb-3">
                            <label class="form-label required-field">Fecha de Liquidaci\xF3n</label>
                            <input class="form-control" type="date" [(ngModel)]="liquidacion.fecha">
                            <small class="form-text text-muted">Seleccione la fecha de ejecuci\xF3n de la
                                liquidaci\xF3n</small>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label class="form-label required-field">Documento de liquidaci\xF3n</label>
                            <app-file-input #fileInput [automaticSave]="false" [(url)]="liquidacion.documento_path" [showButton]="false"></app-file-input>
                            <small class="form-text text-muted">Seleccione el documento de liquidaci\xF3n</small>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label class="form-label">Comentarios (Opcional)</label>
                            <textarea class="form-control" rows="3" [(ngModel)]="liquidacion.comentarios"
                                placeholder="Ingrese observaciones relevantes sobre esta liquidaci\xF3n..."></textarea>
                            <small class="form-text text-muted">Informaci\xF3n adicional sobre el proceso de
                                liquidaci\xF3n</small>
                        </div>
                    </div>
                    }

                    <div class="d-flex justify-content-end gap-3 pt-3 border-top">
                        @if (liquidacion.id) {
                            @if (showCancelacionForm) {
                            <button class="btn btn-outline-secondary" (click)="showCancelacionForm = false">
                                <i class="bi bi-arrow-left me-2"></i>Volver
                            </button>
                            <button class="btn btn-danger" (click)="cancelarCondonacion()"
                                [disabled]="!comentarioCancelacion">
                                <i class="bi bi-x-circle me-2"></i>
                                Confirmar Cancelaci\xF3n
                            </button>
                            } @else {
                            <button class="btn btn-outline-danger" (click)="showCancelacionForm = true"
                                [disabled]="liquidacion.deleted_at">
                                <i class="bi bi-trash me-2"></i>
                                Cancelar Liquidaci\xF3n
                            </button>
                            }
                        }

                        @if (!showCancelacionForm) {
                        <button class="btn btn-primary" (click)="ejecutarCondonacion()"
                            [disabled]="!isLiquidacionValid()">
                            <i class="bi bi-check-circle me-2"></i>
                            Confirmar Liquidaci\xF3n
                        </button>
                        }
                    </div>
                    }
                    }
                </div>
            </div>
        </div>
    </div>
</div>`, styles: ["/* src/app/pagos/liquidacion-anticipada/liquidacion-anticipada.component.css */\n.table-responsive {\n  height: 25rem;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=liquidacion-anticipada.component.css.map */\n"] }]
  }], null, { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiquidacionAnticipadaComponent, { className: "LiquidacionAnticipadaComponent", filePath: "src/app/pagos/liquidacion-anticipada/liquidacion-anticipada.component.ts", lineNumber: 29 });
})();

// src/app/pagos/pagos.routes.ts
var pagosRoutes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainComponent, loadChildren: () => import("./chunk-5ESXUFRP.js").then((m) => m.mainPagosRoutes) },
  { path: "pendientes", component: ListCreditosPagosComponent },
  { path: "bitacora", component: ListBitacoraCancelacionesComponent },
  { path: "bitacora/detalle/:bitacora_id", component: DetalleBitacoraComponent },
  { path: "abonos/:credito_id", component: AbonoComponent },
  { path: "masiva", loadChildren: () => import("./chunk-YVJNUKM6.js").then((m) => m.cargaMasivaRoutes) },
  { path: "no-identificados", component: PagosNoIdentificadosComponent },
  { path: "facturacion", component: PagosFacturacionComponent },
  { path: "polizas", component: PolizasComponent },
  { path: "carga-masiva-cancelacion", component: CargaMasivaCancelacionComponent },
  { title: "Liquidaci\xF3n anticipada", path: "liquidacion-anticipada/list", component: LiquidacionAnticipadaTablaComponent },
  { title: "Liquidaci\xF3n anticipada", path: "liquidacion-anticipada/nuevo", component: LiquidacionAnticipadaComponent },
  { title: "Liquidaci\xF3n anticipada", path: "liquidacion-anticipada/editar/:liquidacion_id", component: LiquidacionAnticipadaComponent }
];
export {
  pagosRoutes
};
//# sourceMappingURL=chunk-AZK5PRZL.js.map
