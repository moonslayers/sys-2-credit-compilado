import {
  ConvenioExtrajudicialPF,
  ConvenioExtrajudicialPM,
  ConvenioJudicialPF,
  ConvenioJudicialPM,
  convenioPagoPF,
  convenioPagoPM,
  convenioReestructuraPF,
  convenioReestructuraPM
} from "./chunk-IC6YGMVY.js";
import {
  AmortizacionesComponent
} from "./chunk-OZ75JDJE.js";
import {
  PagareService,
  TablaAmortizacionService
} from "./chunk-KUCJ2XDO.js";
import {
  ViewResumenCreditoComponent
} from "./chunk-PHVA5LMX.js";
import {
  DatoPersonaMoralService
} from "./chunk-4YG63BQX.js";
import {
  CotizadorService
} from "./chunk-DJKNR32H.js";
import {
  CREDITOS_FILTERS
} from "./chunk-RJ4CVF2L.js";
import "./chunk-VUVNDSSC.js";
import {
  CREDITOS_ADVANCED_SEARCH
} from "./chunk-3SMKUHIE.js";
import {
  BuscadorCreditosComponent
} from "./chunk-5AHBH7ZX.js";
import "./chunk-MJF6VG42.js";
import {
  DatoPersonalService
} from "./chunk-NB2YUWRE.js";
import "./chunk-LROCG2JY.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import "./chunk-K6WRKREK.js";
import "./chunk-NWCMIO4X.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import "./chunk-I7RPY2ZE.js";
import {
  DataViewSectionComponent
} from "./chunk-6SWRHHIM.js";
import "./chunk-MLBICDWK.js";
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
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  Injector,
  Input,
  Output,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
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
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/convenio.service.ts
var _ConvenioService = class _ConvenioService extends SuperService {
  constructor(injector, dialog) {
    super(injector);
    this.dialog = dialog;
    this.model = "convenios";
    this.columns = [
      "juridico_id",
      "credito_id",
      "tipo_convenio",
      "estatus",
      "plazo",
      "fecha_inicio",
      "fecha_conclusion",
      "capital",
      "interes_ordinario",
      "interes_moratorio_condonado",
      "interes_moratorio_cobrado",
      "gastos_judiciales",
      "usuario_id",
      "pagare_url",
      "iva_interes_ordinario",
      "monto_abono_inicial",
      "fecha_convenio"
    ];
  }
  concluir(convenio, estado) {
    return __async(this, null, function* () {
      if (!convenio)
        return;
      let today = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
      if (convenio.estatus == "ACTIVO")
        today = null;
      this.fastUpdate(convenio, { estatus: estado, fecha_conclusion: today });
    });
  }
};
_ConvenioService.\u0275fac = function ConvenioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConvenioService)(\u0275\u0275inject(Injector), \u0275\u0275inject(VanillaDialogService));
};
_ConvenioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConvenioService, factory: _ConvenioService.\u0275fac, providedIn: "any" });
var ConvenioService = _ConvenioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConvenioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }, { type: VanillaDialogService }], null);
})();

// src/app/main/convenios/list-convenios/list-convenios.component.ts
var _c0 = () => ["juridicos", "credito.datosPersonasMorales", "credito.datosPersonaFisica.datosPersonales"];
function ListConveniosComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("tableDefinition", ctx_r0.tabla)("controller", ctx_r0.conveniosController)("agregar", !!ctx_r0.credito_id)("agregarRedirectRoute", "/main/convenios/nuevo/" + ctx_r0.credito_id)("eliminar", false)("restaurar", false)("getExtra", ctx_r0.extraData)("barraBusqueda", false)("relations", \u0275\u0275pureFunction0(10, _c0))("incluirEliminados", true);
  }
}
var TABLA_DEF = {
  columns: [
    "id",
    "credito_id",
    {
      key: "row",
      header: "Nombre Cliente",
      function: (param, utils) => {
        return utils.nombreClienteFromCredito(param.credito);
      }
    },
    "estatus",
    {
      key: "fecha_inicio",
      header: "Fecha Inicio",
      pipe: "date"
    },
    {
      key: "fecha_conclusion",
      header: "Fecha Conclusi\xF3n",
      pipe: "date"
    },
    "deleted_at"
  ]
};
var _ListConveniosComponent = class _ListConveniosComponent {
  constructor(conveniosController, utils, route, router) {
    this.conveniosController = conveniosController;
    this.utils = utils;
    this.route = route;
    this.router = router;
    this.tabla = TABLA_DEF;
    this.extraData = {};
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.credito_id = params["credito_id"];
      if (this.credito_id) {
        this.extraData = {
          conditionals: JSON.stringify([
            ["credito_id", "=", this.credito_id]
          ])
        };
      }
    });
  }
  updateUrl(id) {
    this.router.navigate(["/main/convenios/list", id]);
  }
};
_ListConveniosComponent.\u0275fac = function ListConveniosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListConveniosComponent)(\u0275\u0275directiveInject(ConvenioService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_ListConveniosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListConveniosComponent, selectors: [["app-list-convenios"]], decls: 5, vars: 3, consts: [[1, "container-fluid", "p-3", "my-1", "rounded", "shadow", "bg-white"], [1, "fw-bold"], [3, "creditoIdChange", "justId", "creditoId"], ["rowEditarRoute", "/main/convenios/editar", 3, "tableDefinition", "controller", "agregar", "agregarRedirectRoute", "eliminar", "restaurar", "getExtra", "barraBusqueda", "relations", "incluirEliminados"]], template: function ListConveniosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
    \u0275\u0275text(2, "Convenios de Cr\xE9ditos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-buscador-creditos", 2);
    \u0275\u0275listener("creditoIdChange", function ListConveniosComponent_Template_app_buscador_creditos_creditoIdChange_3_listener($event) {
      return ctx.updateUrl($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ListConveniosComponent_Conditional_4_Template, 1, 11, "app-tabla", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("justId", true)("creditoId", ctx.credito_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito_id ? 4 : -1);
  }
}, dependencies: [
  TablaComponent,
  BuscadorCreditosComponent
], encapsulation: 2 });
var ListConveniosComponent = _ListConveniosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListConveniosComponent, [{
    type: Component,
    args: [{ selector: "app-list-convenios", imports: [
      TablaComponent,
      BuscadorCreditosComponent
    ], template: `<div class="container-fluid p-3 my-1 rounded shadow bg-white">
  <h4 class="fw-bold">Convenios de Cr\xE9ditos</h4>
  <app-buscador-creditos [justId]="true" [creditoId]="credito_id" (creditoIdChange)="updateUrl($event)"></app-buscador-creditos>
  @if (credito_id) {
    <app-tabla [tableDefinition]="tabla" [controller]="conveniosController" [agregar]="!!credito_id"
      [agregarRedirectRoute]="'/main/convenios/nuevo/'+credito_id" rowEditarRoute="/main/convenios/editar"
      [eliminar]="false" [restaurar]="false" [getExtra]="extraData" [barraBusqueda]="false"
      [relations]="['juridicos','credito.datosPersonasMorales','credito.datosPersonaFisica.datosPersonales']"
      [incluirEliminados]="true" />
  }
</div>` }]
  }], () => [{ type: ConvenioService }, { type: UtilsService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListConveniosComponent, { className: "ListConveniosComponent", filePath: "src/app/main/convenios/list-convenios/list-convenios.component.ts", lineNumber: 45 });
})();

// src/app/main/convenios/creditos-atrasados/creditos-atrasados.component.ts
var _c02 = () => ["creditosPagos", "productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales", "estadosCuenta", "convenios"];
var _c1 = (a0, a1) => [a0, a1];
var TABLA_DEF2 = {
  emptyMsg: "No hay creditos con estados de cuenta activos.",
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "row",
      header: "Nombre Cliente",
      function: (param, utils) => {
        return utils.nombreClienteFromCredito(param);
      }
    },
    {
      key: "estados_cuenta",
      header: "Estado",
      function: (estado) => {
        return estado.pagos_requeridos - estado.pagos_realizados >= 3 ? "VENCIDO" : "CARTERA";
      }
    },
    {
      key: "convenios",
      header: "Total convenios",
      function: (convenios) => {
        return convenios.length.toString();
      }
    },
    {
      key: "convenios",
      header: "Convenios Activos",
      function: (convenios) => {
        return convenios.filter((convenio) => convenio.estatus === "ACTIVO").length.toString();
      }
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
    {
      key: "productos_financieros",
      subKey: "alias",
      header: "P Financiero"
    },
    {
      key: "sucursales",
      subKey: "nombre",
      header: "Sucursal"
    }
  ]
};
var EDITAR_BUTTON = {
  title: "Ver convenios",
  style: {
    button: "btn btn-sm btn-primary",
    icon: "bi bi-list"
  }
};
var ASIGNAR_JURIDICO = {
  key: "convenio",
  title: "Nuevo Convenio",
  style: {
    button: "btn btn-sm btn-success",
    icon: "bi bi-journal-plus"
  }
};
var DETALLES_BUTTON = {
  key: "detalles",
  title: "Ver Detalles",
  style: {
    button: "btn btn-sm btn-info",
    icon: "bi bi-eye-fill"
  }
};
var _CreditosAtrasadosConveniosComponent = class _CreditosAtrasadosConveniosComponent {
  constructor(creditoController, router) {
    this.creditoController = creditoController;
    this.router = router;
    this.tabla = TABLA_DEF2;
    this.edit = EDITAR_BUTTON;
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.simpleFilters = CREDITOS_FILTERS;
    this.asignarJuridico = ASIGNAR_JURIDICO;
    this.detalles = DETALLES_BUTTON;
    this.filtros = {
      filtro: "estado",
      meses_vencidos: null,
      incluir_juridico: null,
      monto_atrasado: null,
      adeudo_total: null
    };
    this.showNew = false;
  }
  onRowButtonClick(event) {
    this.creditoEdit = event.row;
    switch (event.key) {
      case "convenio":
        this.router.navigate(["/main/convenios/nuevo/" + this.creditoEdit.id]);
        break;
      case "detalles":
        this.router.navigate(["/main/convenios/detalles/" + this.creditoEdit.id]);
        break;
    }
  }
  limpiarFiltros() {
    this.filtros.meses_vencidos = null;
    this.filtros.incluir_juridico = null;
    this.filtros.monto_atrasado = null;
    this.filtros.adeudo_total = null;
  }
};
_CreditosAtrasadosConveniosComponent.\u0275fac = function CreditosAtrasadosConveniosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosAtrasadosConveniosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(Router));
};
_CreditosAtrasadosConveniosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosAtrasadosConveniosComponent, selectors: [["app-creditos-atrasados"]], decls: 17, vars: 20, consts: [["title", "Creditos con Pagos Vencidos", "getMethod", "atrasados", 3, "rowButtonClickEvent", "filtrosLimpios", "tableDefinition", "controller", "rowEliminar", "rowEditarButton", "rowEditarRoute", "relations", "getExtra", "advancedSearch", "simpleFilteredSearch", "rowButtons", "agregar", "eliminar", "eliminados"], ["advanced-search", "", 1, "row"], [1, "col-12", "text-center", "p-1", "my-1"], [1, "input-group"], [1, "input-group-text"], ["placeholder", "pagos vencidos", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Ingrese una cantidad", "type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function CreditosAtrasadosConveniosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("rowButtonClickEvent", function CreditosAtrasadosConveniosComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onRowButtonClick($event);
    })("filtrosLimpios", function CreditosAtrasadosConveniosComponent_Template_app_tabla_filtrosLimpios_0_listener() {
      return ctx.limpiarFiltros();
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
    \u0275\u0275text(5, "Ctd Pagos Vencidos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function CreditosAtrasadosConveniosComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.meses_vencidos, $event) || (ctx.filtros.meses_vencidos = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 2)(8, "div", 3)(9, "label", 4);
    \u0275\u0275text(10, "Monto atrasado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function CreditosAtrasadosConveniosComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.monto_atrasado, $event) || (ctx.filtros.monto_atrasado = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 2)(13, "div", 3)(14, "label", 4);
    \u0275\u0275text(15, "Adeudo Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function CreditosAtrasadosConveniosComponent_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.adeudo_total, $event) || (ctx.filtros.adeudo_total = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("rowEliminar", false)("rowEditarButton", ctx.edit)("rowEditarRoute", "/main/convenios/list/")("relations", \u0275\u0275pureFunction0(16, _c02))("getExtra", ctx.filtros)("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.simpleFilters)("rowButtons", \u0275\u0275pureFunction2(17, _c1, ctx.asignarJuridico, ctx.detalles))("agregar", false)("eliminar", false)("eliminados", false);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.meses_vencidos);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.monto_atrasado);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtros.adeudo_total);
  }
}, dependencies: [
  TablaComponent,
  FormsModule,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var CreditosAtrasadosConveniosComponent = _CreditosAtrasadosConveniosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosAtrasadosConveniosComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-atrasados", imports: [
      TablaComponent,
      FormsModule
    ], template: `
<app-tabla 
title="Creditos con Pagos Vencidos"
[tableDefinition]="tabla"
[controller]="creditoController"

[rowEliminar]="false"
[rowEditarButton]="edit"
[rowEditarRoute]="'/main/convenios/list/'"
[relations]="['creditosPagos','productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales','estadosCuenta','convenios']"
[getExtra]="filtros"
[advancedSearch]="advancedSearch"
[simpleFilteredSearch]="simpleFilters"
[rowButtons]="[asignarJuridico, detalles]"
[agregar]="false"
[eliminar]="false"
[eliminados]="false"
(rowButtonClickEvent)="onRowButtonClick($event)"
(filtrosLimpios)="limpiarFiltros()"
getMethod="atrasados">
<div class="row" advanced-search>
    <div class="col-12 text-center p-1 my-1">
        <div class="input-group " >
            <label class="input-group-text">Ctd Pagos Vencidos:</label>
            <input class="form-control" placeholder="pagos vencidos" [(ngModel)]="filtros.meses_vencidos">
        </div>
    </div>
    <div class="col-12 text-center p-1 my-1">
        <div class="input-group " >
            <label class="input-group-text">Monto atrasado:</label>
            <input class="form-control" placeholder="Ingrese una cantidad" type="number" [(ngModel)]="filtros.monto_atrasado">
        </div>
    </div>
    <div class="col-12 text-center p-1 my-1">
        <div class="input-group " >
            <label class="input-group-text">Adeudo Total:</label>
            <input class="form-control" placeholder="Ingrese una cantidad" type="number" [(ngModel)]="filtros.adeudo_total">
        </div>
    </div>
</div>
</app-tabla>` }]
  }], () => [{ type: CreditoService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosAtrasadosConveniosComponent, { className: "CreditosAtrasadosConveniosComponent", filePath: "src/app/main/convenios/creditos-atrasados/creditos-atrasados.component.ts", lineNumber: 114 });
})();

// src/app/main/convenios/shared/form-datos-generales/form-datos-generales.component.ts
var FORM_DEF = [
  {
    title: "Datos Generales",
    fields: [
      { key: "nombre", label: "Nombre", type: "text" },
      { key: "apellido_paterno", label: "Primer Apellido", type: "text" },
      { key: "apellido_materno", label: "Segundo Apellido", type: "text" },
      { key: "calle", label: "Calle", type: "text" },
      { key: "no_exterior", label: "No. Exterior", type: "text" },
      { key: "colonia", label: "Colonia", type: "text" },
      {
        key: "localidad",
        label: "Ciudad",
        type: "text",
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "codigo_postal",
        label: "CP",
        type: "text",
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "identificacion",
        label: "Tipo Identificaci\xF3n",
        options: [{ label: "INE", value: "INNE" }, "LICENCIA DE MANEJO", "PASAPORTE MEXICANO", "OTRO"],
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "identificacion_numero",
        label: "No. Identificaci\xF3n",
        type: "text",
        style: {
          div: "col-6 p-2"
        }
      }
    ]
  },
  {
    title: "N\xFAmeros Telef\xF3nicos",
    apiUrl: "api/telefonos_personales",
    relationKey: "telefonos_personales",
    foreign_key: "datos_personal_id",
    baseFields: [
      {
        key: "tipo",
        label: "Tipo",
        options: ["CASA", "OFICINA", "CELULAR", "OTRO"]
      },
      {
        key: "numero",
        label: "N\xFAmero",
        type: "text"
      }
    ]
  }
];
var _FormDatosGeneralesComponent = class _FormDatosGeneralesComponent {
  constructor(controller) {
    this.controller = controller;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    console.log(this.datosGenerales);
  }
};
_FormDatosGeneralesComponent.\u0275fac = function FormDatosGeneralesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDatosGeneralesComponent)(\u0275\u0275directiveInject(DatoPersonalService));
};
_FormDatosGeneralesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDatosGeneralesComponent, selectors: [["app-form-datos-generales"]], inputs: { datosGenerales: "datosGenerales" }, decls: 1, vars: 3, consts: [["submitText", "Guardar Datos Generales", 3, "editChange", "controller", "form", "edit"]], template: function FormDatosGeneralesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-generic-form", 0);
    \u0275\u0275twoWayListener("editChange", function FormDatosGeneralesComponent_Template_app_generic_form_editChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.datosGenerales, $event) || (ctx.datosGenerales = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.controller)("form", ctx.form);
    \u0275\u0275twoWayProperty("edit", ctx.datosGenerales);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormDatosGeneralesComponent = _FormDatosGeneralesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDatosGeneralesComponent, [{
    type: Component,
    args: [{ selector: "app-form-datos-generales", imports: [
      GenericFormComponent
    ], template: '<app-generic-form  \n  [controller]="controller"\n  [form]="form"\n  [(edit)]="datosGenerales"  \n  submitText="Guardar Datos Generales"  \n>\n</app-generic-form>\n' }]
  }], () => [{ type: DatoPersonalService }], { datosGenerales: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDatosGeneralesComponent, { className: "FormDatosGeneralesComponent", filePath: "src/app/main/convenios/shared/form-datos-generales/form-datos-generales.component.ts", lineNumber: 72 });
})();

// src/app/shared/buscador-datos-personales/buscador-datos-personales.service.ts
var _BuscadorDatosPersonalesService = class _BuscadorDatosPersonalesService {
  constructor(api) {
    this.api = api;
    this.cache = /* @__PURE__ */ new Map();
    this.CACHE_EXPIRATION_MS = 5 * 60 * 1e3;
  }
  autoCompleteDatoPersonales() {
    return __async(this, arguments, function* (search = "", relations = []) {
      const cacheKey = this.generateCacheKey(search, relations);
      const now = Date.now();
      if (this.cache.has(cacheKey)) {
        const cached = this.cache.get(cacheKey);
        if (now - cached.timestamp < this.CACHE_EXPIRATION_MS) {
          return cached.data;
        }
      }
      const promise = firstValueFrom(this.api.get("api/datos_personales/filtros/autocomplete", {
        conditionals: JSON.stringify([
          ["deleted_at", "IS NULL", null]
        ]),
        relations: JSON.stringify(relations),
        filtro: search,
        per_page: 500,
        page: 1
      }, false)).then((response) => response.data ?? []);
      this.cache.set(cacheKey, {
        timestamp: now,
        data: promise
      });
      return promise;
    });
  }
  generateCacheKey(search, relations) {
    const relationsKey = relations.sort().join(",");
    return `${search.toUpperCase().trim()}|${relationsKey}`;
  }
  // Método opcional para limpiar cache manualmente
  clearCache() {
    this.cache.clear();
  }
  // Método opcional para limpiar entradas expiradas
  cleanExpiredCache() {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp > this.CACHE_EXPIRATION_MS) {
        this.cache.delete(key);
      }
    }
  }
};
_BuscadorDatosPersonalesService.\u0275fac = function BuscadorDatosPersonalesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuscadorDatosPersonalesService)(\u0275\u0275inject(ApiServiceService));
};
_BuscadorDatosPersonalesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuscadorDatosPersonalesService, factory: _BuscadorDatosPersonalesService.\u0275fac, providedIn: "root" });
var BuscadorDatosPersonalesService = _BuscadorDatosPersonalesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuscadorDatosPersonalesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiServiceService }], null);
})();

// src/app/shared/buscador-datos-personales/auto-complete-datos-personales/auto-complete-datos-personales.component.ts
var _forTrack0 = ($index, $item) => $item.cliente_id;
function AutoCompleteDatosPersonalesComponent_Conditional_5_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "span", 16);
    \u0275\u0275elementEnd()();
  }
}
function AutoCompleteDatosPersonalesComponent_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13);
    \u0275\u0275text(2, " No hay coincidencias. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AutoCompleteDatosPersonalesComponent_Conditional_5_Conditional_12_Conditional_3_Template, 3, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isLoading ? 3 : -1);
  }
}
function AutoCompleteDatosPersonalesComponent_Conditional_5_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function AutoCompleteDatosPersonalesComponent_Conditional_5_For_14_Template_div_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelected(option_r4));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("hidden", option_r4.hidden);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.cliente_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.utils.nombreClienteFromDatosPersonales(option_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.rfc, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.curp, " ");
  }
}
function AutoCompleteDatosPersonalesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275text(5, " Id Cliente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7, " Nombre ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10);
    \u0275\u0275text(9, " Rfc ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275text(11, " Curp ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, AutoCompleteDatosPersonalesComponent_Conditional_5_Conditional_12_Template, 4, 1, "div", 11);
    \u0275\u0275repeaterCreate(13, AutoCompleteDatosPersonalesComponent_Conditional_5_For_14_Template, 9, 5, "div", 12, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275conditional(!ctx_r1.dataViewed.length ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dataViewed);
  }
}
var _AutoCompleteDatosPersonalesComponent = class _AutoCompleteDatosPersonalesComponent {
  constructor(elRef, utils, buscador) {
    this.elRef = elRef;
    this.utils = utils;
    this.buscador = buscador;
    this.datoPersonalIdSelected = new EventEmitter();
    this.dataSource = [];
    this.dataFiltered = [];
    this.dataViewed = [];
    this.cacheScore = /* @__PURE__ */ new Map();
    this.showAutoComplete = false;
    this.autoCompleteSize = 7;
    this.valueInput = "";
    this.isLoading = false;
    this.searchTimeout = null;
  }
  handleClick(event) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.showAutoComplete) {
      this.showAutoComplete = false;
    }
  }
  /**
   * Lifecycle hook that is called after Angular has initialized the component.
   * This method initializes the personas data, sets the filtered data, and updates the viewed data.
   */
  ngOnInit() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.setFilteredData();
      this.setDataViewed();
      this.isLoading = false;
    });
  }
  /**
   * Handles the selection of an option from the autocomplete list.
   * Emits the selected persona's ID or RFC based on the type of persona (física or moral).
   * Hides the autocomplete list after selection.
   *
   * @param option - The selected FilterOption object containing the persona's details.
   */
  onOptionSelected(option) {
    this.datoPersonalIdSelected.emit(option.cliente_id);
    this.showAutoComplete = false;
  }
  /**
   * Displays the autocomplete list.
   * This method sets the `showAutoComplete` flag to true, making the list visible.
   */
  showAutoCompleteList() {
    this.showAutoComplete = true;
  }
  /**
   * Triggers a search operation with debouncing.
   * The search is performed if:
   * - The input length is a multiple of 3 (after 1.5s delay)
   * - Force flag is true (immediately)
   * This reduces unnecessary searches and improves performance.
   */
  buscar(force = false) {
    return __async(this, null, function* () {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = null;
      }
      if (force) {
        yield this.executeSearch();
        return;
      }
      this.searchTimeout = setTimeout(() => __async(this, null, function* () {
        yield this.executeSearch();
        this.searchTimeout = null;
      }), 600);
    });
  }
  executeSearch() {
    return __async(this, null, function* () {
      yield this.initializeDataSource();
      this.setFilteredData();
      this.calculateSimilarityScores();
      this.sortFilteredDataBySimilarity();
      this.updateDataViewed();
    });
  }
  /**
   * Initializes the data source by fetching credit data from the API and mapping it to the `FilterOption` structure.
   * This method ensures that the data is properly formatted and ready for filtering and display in the autocomplete component.
   */
  initializeDataSource() {
    return __async(this, null, function* () {
      const DatoPersonals = yield this.buscador.autoCompleteDatoPersonales(this.valueInput, ["datosPersonaFisica.datosPersonales", "datosPersonasMorales", "datosPersonaFisica.negocios", "estadoCuenta"]);
      this.dataSource = this.mapCreditDataToFilterOptions(DatoPersonals);
    });
  }
  /**
   * Maps an array of `DatoPersonal` objects to an array of `FilterOption` objects.
   * Each `FilterOption` object contains the client ID, credit ID, folio, client name, status, and similarity score.
   * @param DatoPersonals - The array of `DatoPersonal` objects to map.
   * @returns An array of `FilterOption` objects.
   */
  mapCreditDataToFilterOptions(datosPersonales) {
    return datosPersonales.map((DatoPersonal) => this.createFilterOptionFromDatoPersonal(DatoPersonal));
  }
  /**
   * Creates a `FilterOption` object from a `DatoPersonal` object.
   * @param DatoPersonal - The `DatoPersonal` object to convert.
   * @returns A `FilterOption` object containing the relevant data.
   */
  createFilterOptionFromDatoPersonal(datoPersonal) {
    return {
      cliente_id: datoPersonal.id,
      // Extract client ID from the credit
      nombre: datoPersonal.nombre,
      apellido_materno: datoPersonal.apellido_materno,
      apellido_paterno: datoPersonal.apellido_paterno,
      rfc: datoPersonal.rfc ?? "N/A",
      curp: datoPersonal.curp,
      parecido: 0
      // Initialize similarity score to 0
    };
  }
  /**
   * Calculates the similarity scores for the filtered data based on the current input value.
   * If the input value is a valid number, it calculates similarity by ID.
   * Otherwise, it calculates similarity by string comparison for both folio and client name.
   */
  calculateSimilarityScores() {
    const inputAsNumber = this.parseInputAsNumber(this.valueInput);
    if (inputAsNumber) {
      this.calculateSimilarityById(inputAsNumber);
    } else {
      this.calculateSimilarityByString();
    }
  }
  /**
   * Parses the input value as a number if it is a valid number string; otherwise, returns null.
   * @param inputValue - The input value to parse.
   * @returns The parsed number or null if the input is not a valid number.
   */
  parseInputAsNumber(inputValue) {
    const parsedNumber = Number(inputValue);
    return isNaN(parsedNumber) ? null : parsedNumber;
  }
  /**
   * Calculates the similarity scores for the filtered data based on the provided ID.
   * Sets the similarity score to 100 for rows that match the client ID or credit ID.
   * @param id - The ID to match against client and credit IDs.
   */
  calculateSimilarityById(id) {
    this.dataFiltered.forEach((row) => {
      if (row.cliente_id === id || row.cliente_id === id) {
        row.parecido = 100;
      } else {
        row.parecido = 0;
      }
    });
  }
  /**
   * Calculates the similarity scores for the filtered data based on string comparison.
   * Compares the input value against both the folio and client name, using cached results if available.
   * Sets the similarity score to the higher of the two comparisons.
   */
  calculateSimilarityByString() {
    this.dataFiltered.forEach((row) => {
      const nombreSimilarity = this.calculateOrRetrieveSimilarity(this.utils.nombreClienteFromDatosPersonales(row), this.valueInput);
      const rfcSimilarity = this.calculateOrRetrieveSimilarity(row.rfc, this.valueInput);
      const curpSimilarity = this.calculateOrRetrieveSimilarity(row.curp, this.valueInput);
      const idSimilarity = this.calculateOrRetrieveSimilarity(row.cliente_id.toString(), this.valueInput);
      row.parecido = Math.max(nombreSimilarity, rfcSimilarity, curpSimilarity, idSimilarity);
    });
  }
  /**
   * Calculates or retrieves the similarity score for a given string and input value.
   * Uses a cache to avoid redundant calculations.
   * @param targetString - The string to compare against the input value.
   * @param inputValue - The input value to compare against the target string.
   * @returns The similarity score between the target string and the input value.
   */
  calculateOrRetrieveSimilarity(targetString, inputValue) {
    const cacheKey = this.generateCacheKey(targetString, inputValue);
    if (this.cacheScore.has(cacheKey)) {
      return this.cacheScore.get(cacheKey);
    }
    const similarityScore = this.utils.calcularPuntuacionSimilitud(targetString.toUpperCase(), inputValue.toUpperCase());
    this.cacheScore.set(cacheKey, similarityScore);
    return similarityScore;
  }
  /**
   * Generates a unique cache key for a given name and input value.
   * @param name - The name to be compared.
   * @param inputValue - The current input value.
   * @returns A string representing the cache key.
   */
  generateCacheKey(name, inputValue) {
    return `${name}-${inputValue.toUpperCase()}`;
  }
  /**
   * Sorts the filtered data by similarity score in ascending order.
   */
  sortFilteredDataBySimilarity() {
    this.dataFiltered.sort((a, b) => b.parecido - a.parecido);
  }
  /**
   * Updates the dataViewed array to reflect the top N items from the sorted filtered data.
   */
  updateDataViewed() {
    this.setDataViewed();
  }
  /**
   * Sets the filtered data by combining personas físicas and personas morales
   * into a unified list of FilterOption objects.
   * Each object includes the name, type, and a similarity score initialized to 0.
   */
  setFilteredData() {
    this.dataFiltered = this.dataSource;
  }
  /**
   * Updates the dataViewed array to contain only the top N items from dataFiltered,
   * where N is defined by autoCompleteSize.
   */
  setDataViewed() {
    this.dataViewed = this.dataFiltered.slice(0, this.autoCompleteSize);
  }
};
_AutoCompleteDatosPersonalesComponent.\u0275fac = function AutoCompleteDatosPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoCompleteDatosPersonalesComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(BuscadorDatosPersonalesService));
};
_AutoCompleteDatosPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutoCompleteDatosPersonalesComponent, selectors: [["app-auto-complete-datos-personales"]], hostBindings: function AutoCompleteDatosPersonalesComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function AutoCompleteDatosPersonalesComponent_click_HostBindingHandler($event) {
      return ctx.handleClick($event);
    }, \u0275\u0275resolveDocument);
  }
}, outputs: { datoPersonalIdSelected: "datoPersonalIdSelected" }, decls: 6, vars: 2, consts: [["inputNombre", ""], [1, "form-floating"], ["type", "text", "id", "flotingSearchInput", "placeholder", "Ingresa un nombre para buscar", 1, "form-control", 3, "focus", "input", "keyup.enter", "ngModelChange", "keyup", "ngModel"], ["for", "flotingSearchInput"], [1, "container-fluid", "p-0", "position-absolute"], [1, "container-fluid", "position-relative"], [1, "container-fluid", "bg-white", "position-absoute", "top-0", "shadow", "rounded", "p-3"], [1, "row", "text-bg-primary"], [1, "col-1"], [1, "col"], [1, "col-3"], [1, "row"], [1, "row", "border-bottom", "pointer", "scale-0125", "text-uppercase", 3, "hidden"], [1, "col", "border-bottom", "p-3"], [1, "col-auto", "border-bottom", "p-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-secondary"], [1, "visually-hidden"], [1, "row", "border-bottom", "pointer", "scale-0125", "text-uppercase", 3, "click", "hidden"], [1, "col-1", "p-3"], [1, "col", "p-3"], [1, "col-3", "p-3"]], template: function AutoCompleteDatosPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
    \u0275\u0275listener("focus", function AutoCompleteDatosPersonalesComponent_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showAutoCompleteList());
    })("input", function AutoCompleteDatosPersonalesComponent_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.buscar());
    })("keyup.enter", function AutoCompleteDatosPersonalesComponent_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.buscar(true));
    });
    \u0275\u0275twoWayListener("ngModelChange", function AutoCompleteDatosPersonalesComponent_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.valueInput, $event) || (ctx.valueInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function AutoCompleteDatosPersonalesComponent_Template_input_keyup_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showAutoComplete = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 3);
    \u0275\u0275text(4, "Ingresa un nombre para buscar...");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, AutoCompleteDatosPersonalesComponent_Conditional_5_Template, 15, 1, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.valueInput);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.showAutoComplete ? 5 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var AutoCompleteDatosPersonalesComponent = _AutoCompleteDatosPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoCompleteDatosPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-auto-complete-datos-personales", imports: [
      FormsModule
    ], template: '<div class="form-floating">\n    <input #inputNombre type="text" class="form-control" id="flotingSearchInput"\n        placeholder="Ingresa un nombre para buscar" (focus)="showAutoCompleteList()" (input)="buscar()"\n        (keyup.enter)="buscar(true)" [(ngModel)]="valueInput" (keyup)="showAutoComplete=true">\n    <label for="flotingSearchInput">Ingresa un nombre para buscar...</label>\n</div>\n@if (showAutoComplete) {\n<div class="container-fluid p-0 position-absolute">\n    <div class="container-fluid position-relative">\n        <div class="container-fluid bg-white position-absoute top-0 shadow rounded p-3">\n            <div class="row text-bg-primary">\n                <div class="col-1">\n                    Id Cliente\n                </div>\n                <div class="col">\n                    Nombre\n                </div>\n                <div class="col-3">\n                    Rfc\n                </div>\n                <div class="col-3">\n                    Curp\n                </div>\n            </div>\n            @if (!dataViewed.length) {\n            <div class="row">\n                <div class="col border-bottom p-3">\n                    No hay coincidencias.\n                </div>\n                @if (isLoading) {\n                <div class="col-auto border-bottom p-3">\n                    <div class="spinner-border spinner-border-sm text-secondary" role="status">\n                        <span class="visually-hidden"></span>\n                    </div>\n                </div>\n                }\n            </div>\n            }\n            @for (option of dataViewed; track option.cliente_id) {\n            <div class="row border-bottom pointer scale-0125 text-uppercase" [hidden]="option.hidden"\n                (click)="onOptionSelected(option)">\n                <div class="col-1 p-3">\n                    {{option.cliente_id}}\n                </div>\n                <div class="col p-3">\n                    {{utils.nombreClienteFromDatosPersonales(option)}}\n                </div>\n                <div class="col-3 p-3">\n                    {{option.rfc}}\n                </div>\n                <div class="col-3 p-3">\n                    {{option.curp}}\n                </div>\n            </div>\n            }\n        </div>\n    </div>\n</div>\n}' }]
  }], () => [{ type: ElementRef }, { type: UtilsService }, { type: BuscadorDatosPersonalesService }], { datoPersonalIdSelected: [{
    type: Output
  }], handleClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutoCompleteDatosPersonalesComponent, { className: "AutoCompleteDatosPersonalesComponent", filePath: "src/app/shared/buscador-datos-personales/auto-complete-datos-personales/auto-complete-datos-personales.component.ts", lineNumber: 26 });
})();

// src/app/shared/buscador-datos-personales/buscador-datos-personales.component.ts
var _c03 = ["*"];
function BuscadorDatosPersonalesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 11);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd()();
  }
}
var _BuscadorDatosPersonalesComponent = class _BuscadorDatosPersonalesComponent {
  constructor(utils, datoPersonalController) {
    this.utils = utils;
    this.datoPersonalController = datoPersonalController;
    this.divClass = "col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3";
    this.placeholder = "Ingresa una id de datos personales para buscar...";
    this.datoPersonalChange = new EventEmitter();
    this.datoPersonalId = 0;
    this.datoPersonalIdChange = new EventEmitter();
    this.fetchData = true;
    this.datoPersonalIdSelected = 0;
    this.datoPersonals = [];
    this.filtros = ["Nombre Cliente", "Id de Cr\xE9dito", "Referencia Bancaria", "Nombre Comercial"];
    this.conditionals = [];
    this.conditionalsChange = new EventEmitter();
    this.conditionalsBase = void 0;
    this.extraData = {};
    this.extraDataChange = new EventEmitter();
    this.extraDataBase = void 0;
    this.justId = false;
    this.search = "";
    this.showNombreBuscador = true;
    this.relations = [
      "telefonosPersonales"
    ];
  }
  ngOnChanges(changes) {
    if (changes["datoPersonalId"] && this.datoPersonalId) {
      this.search = "";
      if (this.datoPersonalId) {
        this.search = this.datoPersonalId.toString();
      }
    }
    if (changes["datoPersonal"] && this.datoPersonal) {
      if (this.datoPersonals.length == 0) {
        this.datoPersonals = [this.datoPersonal];
      }
      this.datoPersonalIdSelected = this.datoPersonal.id;
      this.search = this.datoPersonal.id.toString();
    }
    if (changes["extraData"] && !this.extraDataBase) {
      this.extraDataBase = this.extraData;
    }
    if (changes["conditionals"] && !this.conditionalsBase) {
      this.conditionalsBase = [...this.conditionals];
    }
  }
  /**
   * Obtiene los datos de los datosPersonales desde el servidor basados en los filtros aplicados.
   *
   * Este método realiza una llamada asíncrona al servicio de créditos para obtener los datos
   * filtrados. Si se obtienen resultados, se establece el último crédito de la lista como
   * el crédito seleccionado.
   */
  fetchDpData() {
    return __async(this, null, function* () {
      if (!this.fetchData)
        return;
      if (this.datoPersonalId) {
        this.setDatoPersonal(yield this.datoPersonalController.find(this.datoPersonalId));
      }
      if (!this.conditionals.length) {
        return;
      }
      const response = yield this.datoPersonalController.get({
        conditionals: this.conditionals,
        relations: this.relations,
        extraData: this.extraData
      });
      if (this.datoPersonalId) {
      }
      this.datoPersonals = response.data ?? [];
      if (this.datoPersonals.length = 1) {
        this.setDatoPersonal(this.datoPersonals[this.datoPersonals.length - 1]);
      } else {
        this.datoPersonal = void 0;
      }
    });
  }
  onDatoPersonalSeleccionado(id) {
    this.datoPersonalId = id;
    this.search = id.toString();
    this.onSearch();
  }
  /**
   * Realiza una búsqueda de créditos basada en los filtros seleccionados y el término de búsqueda.
   *
   * Este método verifica si hay un término de búsqueda y un filtro seleccionado antes de aplicar
   * los filtros y obtener los datos correspondientes. Si no se cumplen estas condiciones,
   * la búsqueda no se realiza.
   */
  onSearch() {
    if (!this.search) {
      this.conditionals = [...this.conditionalsBase ?? []];
      this.extraData = __spreadValues({}, this.extraDataBase);
      this.conditionalsChange.emit(this.conditionals);
      this.extraDataChange.emit(this.extraData);
      return;
    }
    if (this.justId) {
      if (this.datoPersonalId) {
        this.datoPersonalIdChange.emit(this.datoPersonalId);
      }
      if (this.utils.intOrNull(this.search)) {
        this.datoPersonalIdChange.emit(this.utils.intOrNull(this.search));
      }
      return;
    }
    this.applyFilters();
    this.fetchDpData();
  }
  /**
  * Establece el crédito seleccionado y parsea el estado de cuenta si está disponible.
  *
  * Este método asigna el crédito proporcionado a la propiedad `datoPersonal` del componente.
  * Si el crédito tiene un estado de cuenta, lo parsea de JSON a un objeto JavaScript.
  *
  * @param datoPersonal - El crédito que se va a establecer. Es opcional y puede ser `undefined`.
  */
  setDatoPersonal(datoPersonal) {
    return __async(this, null, function* () {
      if (this.justId && this.datoPersonalId) {
        this.datoPersonalIdChange.emit(this.datoPersonalId);
        return;
      }
      if (typeof datoPersonal == "string" || typeof datoPersonal == "number") {
        this.datoPersonal = this.datoPersonals.find((row) => row.id == datoPersonal);
      }
      if (typeof datoPersonal !== "number" && datoPersonal?.id) {
        this.datoPersonal = datoPersonal;
      }
      this.datoPersonalIdSelected = this.datoPersonal?.id ?? 0;
      this.search = this.datoPersonalIdSelected.toString();
      this.datoPersonalChange.emit(this.datoPersonal);
    });
  }
  /**
   * Aplica los filtros de búsqueda según la opción seleccionada por el usuario.
   * Este método determina qué tipo de filtro aplicar basado en la selección del usuario
   * y ejecuta la lógica correspondiente para cada caso.
   */
  applyFilters() {
    this.conditionals = [...this.conditionalsBase ?? []];
    this.extraData = __spreadValues({}, this.extraDataBase);
    this.aplicarFiltroPorIdDatoPersonal();
    this.conditionalsChange.emit(this.conditionals);
    this.extraDataChange.emit(this.extraData);
  }
  /**
   * Aplica un filtro para buscar créditos por su ID.
   * Este método configura un filtro condicional que busca coincidencias exactas
   * en el campo 'id' del crédito.
   */
  aplicarFiltroPorIdDatoPersonal() {
    this.conditionals = [{
      key: "id",
      operator: "=",
      value: this.search
    }];
  }
};
_BuscadorDatosPersonalesComponent.\u0275fac = function BuscadorDatosPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuscadorDatosPersonalesComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(DatoPersonalService));
};
_BuscadorDatosPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuscadorDatosPersonalesComponent, selectors: [["app-buscador-datos-personales"]], inputs: { divClass: "divClass", placeholder: "placeholder", datoPersonal: "datoPersonal", datoPersonalId: "datoPersonalId", fetchData: "fetchData", conditionals: "conditionals", conditionalsBase: "conditionalsBase", extraData: "extraData", extraDataBase: "extraDataBase", justId: "justId", relations: "relations" }, outputs: { datoPersonalChange: "datoPersonalChange", datoPersonalIdChange: "datoPersonalIdChange", conditionalsChange: "conditionalsChange", extraDataChange: "extraDataChange" }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c03, decls: 15, vars: 7, consts: [[1, "container-fluid", "z-6"], [1, "row"], [1, "input-group"], [1, "form-floating"], ["type", "text", "id", "searchInput", 1, "form-control", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], ["for", "searchInput"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-person"], [1, "bi", "bi-search"], [1, "col-12", "col-sm", "z-3", 3, "hidden"], [3, "datoPersonalIdSelected"], [1, "col-auto", "ms-auto"]], template: function BuscadorDatosPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2)(4, "div", 3)(5, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function BuscadorDatosPersonalesComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function BuscadorDatosPersonalesComponent_Template_input_keyup_enter_5_listener() {
      return ctx.onSearch();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 6);
    \u0275\u0275listener("click", function BuscadorDatosPersonalesComponent_Template_button_click_8_listener() {
      return ctx.showNombreBuscador = !ctx.showNombreBuscador;
    });
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275listener("click", function BuscadorDatosPersonalesComponent_Template_button_click_10_listener() {
      return ctx.onSearch();
    });
    \u0275\u0275element(11, "i", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 9)(13, "app-auto-complete-datos-personales", 10);
    \u0275\u0275listener("datoPersonalIdSelected", function BuscadorDatosPersonalesComponent_Template_app_auto_complete_datos_personales_datoPersonalIdSelected_13_listener($event) {
      return ctx.onDatoPersonalSeleccionado($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, BuscadorDatosPersonalesComponent_Conditional_14_Template, 3, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx.showNombreBuscador ? ctx.divClass : "col-12");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", ctx.placeholder);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.placeholder);
    \u0275\u0275advance(5);
    \u0275\u0275property("hidden", !ctx.showNombreBuscador);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.datoPersonal ? 14 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, AutoCompleteDatosPersonalesComponent], encapsulation: 2 });
var BuscadorDatosPersonalesComponent = _BuscadorDatosPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuscadorDatosPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-buscador-datos-personales", imports: [
      FormsModule,
      AutoCompleteDatosPersonalesComponent
    ], template: `<div class="container-fluid z-6">
    <div class="row">
        <div [class]="showNombreBuscador? divClass : 'col-12'">
            <div class="input-group">
                <div class="form-floating">
                    <input type="text" id="searchInput" class="form-control" [placeholder]="placeholder"
                        [(ngModel)]="search" (keyup.enter)="onSearch()">
                    <label for="searchInput">{{placeholder}}</label>
                </div>
                <button class="btn btn-outline-secondary" (click)="showNombreBuscador=!showNombreBuscador"><i
                        class="bi bi-person"></i></button>
                <button class="btn btn-outline-secondary" (click)="onSearch()"><i class="bi bi-search"></i></button>
            </div>
        </div>
        <div class="col-12 col-sm z-3" [hidden]="!showNombreBuscador">
            <app-auto-complete-datos-personales (datoPersonalIdSelected)="onDatoPersonalSeleccionado($event)" />
        </div>
    </div>
    @if (datoPersonal) {
    <div class="row">
        <div class="col-auto ms-auto">
            <ng-content></ng-content>
        </div>
    </div>
    }
</div>` }]
  }], () => [{ type: UtilsService }, { type: DatoPersonalService }], { divClass: [{
    type: Input
  }], placeholder: [{
    type: Input
  }], datoPersonal: [{
    type: Input
  }], datoPersonalChange: [{
    type: Output
  }], datoPersonalId: [{
    type: Input
  }], datoPersonalIdChange: [{
    type: Output
  }], fetchData: [{
    type: Input
  }], conditionals: [{
    type: Input
  }], conditionalsChange: [{
    type: Output
  }], conditionalsBase: [{
    type: Input
  }], extraData: [{
    type: Input
  }], extraDataChange: [{
    type: Output
  }], extraDataBase: [{
    type: Input
  }], justId: [{
    type: Input
  }], relations: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuscadorDatosPersonalesComponent, { className: "BuscadorDatosPersonalesComponent", filePath: "src/app/shared/buscador-datos-personales/buscador-datos-personales.component.ts", lineNumber: 18 });
})();

// src/app/main/convenios/shared/form-datos-morales/form-datos-morales.component.ts
var _c04 = ["genericFormRl"];
var _c12 = () => ({ required: true });
function FormDatosMoralesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h5", 3);
    \u0275\u0275text(2, "Busca un registro de datos personales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275listener("click", function FormDatosMoralesComponent_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limpiar());
    });
    \u0275\u0275text(4, "Limpiar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "app-buscador-datos-personales", 6);
    \u0275\u0275twoWayListener("datoPersonalChange", function FormDatosMoralesComponent_Conditional_1_Template_app_buscador_datos_personales_datoPersonalChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.representanteLegal, $event) || (ctx_r1.representanteLegal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("datoPersonalChange", function FormDatosMoralesComponent_Conditional_1_Template_app_buscador_datos_personales_datoPersonalChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateDatosPersonaMoral($event));
    });
    \u0275\u0275twoWayListener("datoPersonalIdChange", function FormDatosMoralesComponent_Conditional_1_Template_app_buscador_datos_personales_datoPersonalIdChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.datoPersonaMoral.representante_legal_id, $event) || (ctx_r1.datoPersonaMoral.representante_legal_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "app-generic-form", 7, 0);
    \u0275\u0275twoWayListener("editChange", function FormDatosMoralesComponent_Conditional_1_Template_app_generic_form_editChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.representanteLegal, $event) || (ctx_r1.representanteLegal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("editChange", function FormDatosMoralesComponent_Conditional_1_Template_app_generic_form_editChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateDatosPersonaMoral($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("datoPersonal", ctx_r1.representanteLegal)("datoPersonalId", ctx_r1.datoPersonaMoral.representante_legal_id);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.formRL)("isolatedForm", true)("controller", ctx_r1.datoPersonalController);
    \u0275\u0275twoWayProperty("edit", ctx_r1.representanteLegal);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(7, _c12));
  }
}
var FORM_PM = [
  {
    title: "Datos Generales",
    fields: [
      { key: "razon_social", label: "Raz\xF3n Social", type: "text" },
      { key: "calle", label: "Calle", type: "text" },
      { key: "no_exterior", label: "No. Exterior", type: "text" },
      { key: "colonia", label: "Colonia", type: "text" },
      { key: "localidad", label: "Localidad", type: "text" },
      {
        key: "ciudad_id",
        keyList: "id",
        keyDetalle: "nombre",
        label: "Ciudad",
        apiUrl: "api/ciudades",
        extraData: {
          busqueda_avanzada: JSON.stringify([
            {
              relation: "estados",
              conditionals: [
                ["nombre", "=", "BAJA CALIFORNIA"],
                ["nombre", "=", "baja california"]
              ],
              andConditionals: []
            }
          ])
        }
      },
      { key: "codigo_postal", label: "CP", type: "text" }
    ]
  },
  {
    title: "Acta constitutiva",
    apiUrl: "api/actas_constitutivas",
    relationKey: "actas_constitutivas",
    foreign_key: "datos_personas_moral_id",
    addButton: {
      style: {
        div: "visually-hidden"
      }
    },
    baseFields: [
      {
        key: "fecha_escritura",
        label: "Fecha de escritura",
        type: "date",
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "nombre_notario",
        label: "Notar\xEDa",
        type: "text",
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "volumen_escritura",
        label: "Volumen escritura",
        type: "text",
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "numero_escritura",
        label: "N\xFAmero de escritura",
        type: "text",
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "numero_notario",
        label: "N\xFAmero de notario",
        type: "text",
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "ciudad_notario",
        label: "Ciudad del notario",
        options: [
          "ENSENADA",
          "TIJUANA",
          "MEXICALI",
          "tecate"
        ],
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "fecha_inscripcion_rppc",
        label: "Fecha inscripci\xF3n RPPC",
        type: "date",
        style: {
          div: "col-6 p-2"
        }
      },
      {
        key: "ciudad_rppc",
        label: "Ciudad RPPC",
        style: {
          div: "col-6 p-2"
        },
        options: [
          "ENSENADA",
          "TIJUANA",
          "MEXICALI",
          "tecate",
          "baja california"
        ]
      },
      {
        key: "estado_rppc",
        label: "Estado RPPC",
        style: {
          div: "col-6 p-2"
        },
        options: ["BAJA CALIFORNIA"]
      },
      {
        key: "folio_rppc",
        label: "Folio RPPC",
        style: {
          div: "col-6 p-2"
        },
        type: "text"
      }
    ]
  }
];
var FORM_RL = [
  {
    title: "Datos personales del representante legal",
    fields: [
      {
        key: "nombre",
        label: "Nombre",
        type: "text"
      },
      {
        key: "apellido_paterno",
        label: "Apellido Paterno",
        type: "text"
      },
      {
        key: "apellido_materno",
        label: "Apellido Materno",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "curp",
        label: "CURP",
        type: "text",
        validator: {
          regex: "^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9][0-9]$",
          maxLength: 18
        }
      },
      {
        key: "genero",
        label: "G\xE9nero",
        options: ["HOMBRE", "MUJER", "NO BINARIO", "NO DESCRITO", "OTRO"]
      },
      {
        key: "genero_otro",
        label: "Especifique su g\xE9nero aqu\xED:",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "fecha_nacimiento",
        label: "Fecha Nacimiento",
        type: "date"
      },
      {
        key: "nacionalidad",
        label: "Nacionalidad",
        options: ["MEXICANA", "EXTRANJERA"],
        validator: {
          required: true
        }
      },
      {
        key: "escolaridad",
        label: "Escolaridad",
        options: ["PRIMARIA", "SECUNDARIA", "PREPARATORIA", "LICENCIATURA", "ESPECIALIDAD", "MAESTRIA", "DOCTORADO", "NO APLICA"],
        defaultValue: "NO APLICA",
        validator: {
          required: false
        }
      },
      {
        key: "estado_nacimiento",
        label: "Estado nacimiento",
        apiUrl: "api/estados",
        keyList: "id",
        keyDetalle: "nombre",
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: false
        }
      },
      {
        key: "email",
        label: "Correo el\xE9ctronico",
        type: "email",
        validator: {
          email: true,
          required: false
        },
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ]
  },
  {
    title: "Datos de Residencia",
    fields: [
      {
        key: "pais_origen",
        label: "Pa\xEDs origen",
        apiUrl: "api/paises",
        keyList: "id",
        keyDetalle: "nombre",
        style: {
          div: "col-12 col-sm p-3"
        }
      },
      {
        key: "nue",
        label: "NUE",
        type: "text",
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ],
    validator: {
      required: false
    }
  },
  {
    title: "Otros",
    fields: [
      {
        key: "discapacidad",
        label: "Discapacidad",
        apiUrl: "api/tipo_discapacidad",
        keyList: "id",
        keyDetalle: "nombre",
        defaultValue: "No especificado",
        nuevoRedirect: "/catalogos/tipos-discapacidad/nuevo",
        style: {
          div: "col-12 col-sm-6 p-3"
        },
        validator: {
          required: false
        }
      },
      {
        key: "etnia",
        label: "Etnia",
        apiUrl: "api/etnias",
        keyList: "id",
        keyDetalle: "nombre",
        nuevoRedirect: "/catalogos/etnias/nuevo",
        style: {
          div: "col-12 col-sm-6 p-3"
        },
        validator: {
          required: false
        }
      },
      {
        key: "hijos",
        label: "\xBFTiene hijos?",
        defaultOption: 0,
        options: [{ value: 0, label: "NO" }, { value: 1, label: "SI" }],
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          min: 0,
          required: false
        }
      }
    ]
  },
  {
    title: "Domicilio",
    fields: [
      {
        key: "calle",
        label: "Calle",
        type: "text"
      },
      {
        key: "no_exterior",
        label: "No. exterior",
        type: "text"
      },
      {
        key: "no_interior",
        label: "No. interior",
        type: "text",
        defaultValue: "",
        validator: {
          required: false
        }
      },
      {
        key: "colonia",
        label: "Colonia",
        type: "text"
      },
      {
        key: "localidad",
        label: "Localidad",
        type: "text"
      },
      {
        key: "codigo_postal",
        label: "C\xF3digo Postal",
        type: "text"
      },
      {
        key: "ciudad_id",
        keyList: "id",
        keyDetalle: "nombre",
        label: "Ciudad",
        apiUrl: "api/ciudades",
        extraData: {
          relations: ["estados"],
          conditionals: [
            ["deleted_at", "IS NULL", null]
          ],
          busqueda_avanzada: JSON.stringify([
            {
              relation: "estados",
              conditionals: [
                ["nombre", "=", "BAJA CALIFORNIA"],
                ["nombre", "=", "baja california"]
              ],
              andConditionals: []
            }
          ])
        }
      },
      {
        key: "referencias_domicilio",
        label: "Referencias del domicilio",
        type: "text",
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: false
        }
      }
    ]
  },
  {
    title: "Datos Legales",
    fields: [
      {
        key: "rfc",
        label: "RFC",
        type: "text",
        validator: {
          maxLength: 13,
          pattern: "^[A-Za-z]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[A-Za-z0-9]{2}([A-Za-z0-9])?$",
          required: false
        }
      },
      {
        key: "identificacion",
        label: "Tipo identificaci\xF3n",
        options: [{ label: "INE", value: "INNE" }, "LICENCIA DE MANEJO", "PASAPORTE MEXICANO", "OTRO"]
      },
      {
        key: "identificacion_numero",
        label: "# Identificaci\xF3n",
        type: "text",
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ]
  },
  {
    title: "Datos C\xF3nyuge",
    fields: [
      {
        key: "estado_civil",
        label: "Estado civil",
        options: ["CASADO", "SOLTERO"],
        style: {
          div: "col-12 col-sm-6 p-3"
        }
      },
      {
        key: "regimen_matrimonial",
        label: "R\xE9gimen Matrimonial",
        options: [{ value: "BIENES MANCOMUNADOS", label: "SOCIEDAD CONYUGAL" }, "SEPARACION DE BIENES", "NO APLICA", "SOCIEDAD LEGAL", "OTRO"],
        style: {
          div: "col-12 col-sm-6 p-3"
        }
      },
      {
        key: "conyuge_nombre",
        label: "Nombre c\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_direccion",
        label: "Direcci\xF3n c\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_telefono",
        label: "Telef\xF3no c\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_correo",
        label: "Email c\xF3nyuge",
        type: "email",
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: false,
          email: true
        }
      }
    ]
  },
  {
    title: "Numeros telef\xF3nicos",
    apiUrl: "api/telefonos_personales",
    relationKey: "telefonos_personales",
    foreign_key: "datos_personal_id",
    baseFields: [
      {
        key: "tipo",
        label: "Tipo",
        options: ["CASA", "OFICINA", "CELULAR", "OTRO"]
      },
      {
        key: "numero",
        label: "N\xFAmero",
        type: "text"
      }
    ]
  }
];
var _FormDatosMoralesComponent = class _FormDatosMoralesComponent {
  constructor(controller, datoPersonalController) {
    this.controller = controller;
    this.datoPersonalController = datoPersonalController;
    this.formPM = FORM_PM;
    this.formRL = FORM_RL;
  }
  ngOnInit() {
    this.getDatos();
  }
  getDatos() {
    return __async(this, null, function* () {
      if (this.datoPersonaMoral) {
        const datos = yield this.controller.find(this.datoPersonaMoral.id, [
          "ciudades",
          "representanteLegal",
          "representanteLegal.ciudades",
          "representanteLegal.telefonosPersonales"
        ]);
        this.datoPersonaMoral = __spreadValues(__spreadValues({}, this.datoPersonaMoral), datos);
        this.representanteLegal = this.datoPersonaMoral.representante_legal;
      }
    });
  }
  updateDatosPersonaMoral(dp) {
    this.datoPersonaMoral.representante_legal_id = dp.id;
    this.controller.update(this.datoPersonaMoral.id, { representante_legal_id: dp.id });
  }
  limpiar() {
    this.representanteLegal = void 0;
    this.datoPersonaMoral.representante_legal = void 0;
    this.controller.update(this.datoPersonaMoral.id, { representante_legal_id: null });
    this.form.cleanForm();
  }
};
_FormDatosMoralesComponent.\u0275fac = function FormDatosMoralesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDatosMoralesComponent)(\u0275\u0275directiveInject(DatoPersonaMoralService), \u0275\u0275directiveInject(DatoPersonalService));
};
_FormDatosMoralesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDatosMoralesComponent, selectors: [["app-form-datos-morales"]], viewQuery: function FormDatosMoralesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.form = _t.first);
  }
}, inputs: { datoPersonaMoral: "datoPersonaMoral" }, decls: 2, vars: 4, consts: [["genericFormRl", ""], ["submitText", "Guardar Datos Generales", 3, "editChange", "form", "controller", "edit"], [1, "d-flex", "justify-content-between"], [1, "mb-1", "fw-bold"], [1, "btn", "btn-success", 3, "click"], [1, "p-3", "mb-2"], [3, "datoPersonalChange", "datoPersonalIdChange", "datoPersonal", "datoPersonalId"], ["submitText", "Guardar Representante Legal", 3, "editChange", "form", "isolatedForm", "controller", "edit", "validator"]], template: function FormDatosMoralesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-generic-form", 1);
    \u0275\u0275twoWayListener("editChange", function FormDatosMoralesComponent_Template_app_generic_form_editChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.datoPersonaMoral, $event) || (ctx.datoPersonaMoral = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, FormDatosMoralesComponent_Conditional_1_Template, 9, 8);
  }
  if (rf & 2) {
    \u0275\u0275property("form", ctx.formPM)("controller", ctx.controller);
    \u0275\u0275twoWayProperty("edit", ctx.datoPersonaMoral);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.datoPersonaMoral ? 1 : -1);
  }
}, dependencies: [
  GenericFormComponent,
  BuscadorDatosPersonalesComponent
], encapsulation: 2 });
var FormDatosMoralesComponent = _FormDatosMoralesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDatosMoralesComponent, [{
    type: Component,
    args: [{ selector: "app-form-datos-morales", imports: [
      GenericFormComponent,
      BuscadorDatosPersonalesComponent
    ], template: '<!-- Datos Generales Moral -->\n<app-generic-form [form]="formPM" [controller]="controller" [(edit)]="datoPersonaMoral"\n  submitText="Guardar Datos Generales">\n</app-generic-form>\n<!-- Representante legal -->\n@if(datoPersonaMoral){\n  <div class="d-flex justify-content-between">\n    <h5 class="mb-1 fw-bold">Busca un registro de datos personales:</h5>\n    <button class="btn btn-success" (click)="limpiar()">Limpiar</button>\n  </div>\n<div class="p-3 mb-2">\n  <app-buscador-datos-personales [(datoPersonal)]="representanteLegal" (datoPersonalChange)="updateDatosPersonaMoral($event)"\n    [(datoPersonalId)]="datoPersonaMoral.representante_legal_id"></app-buscador-datos-personales>\n</div>\n<app-generic-form #genericFormRl [form]="formRL" [isolatedForm]="true" [controller]="datoPersonalController" [(edit)]="representanteLegal"\n  (editChange)="updateDatosPersonaMoral($event)" submitText="Guardar Representante Legal" [validator]="{required:true}">\n</app-generic-form>\n}' }]
  }], () => [{ type: DatoPersonaMoralService }, { type: DatoPersonalService }], { form: [{
    type: ViewChild,
    args: ["genericFormRl"]
  }], datoPersonaMoral: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDatosMoralesComponent, { className: "FormDatosMoralesComponent", filePath: "src/app/main/convenios/shared/form-datos-morales/form-datos-morales.component.ts", lineNumber: 500 });
})();

// src/app/main/convenios/form-convenio/convenio-header/convenio-header.component.ts
function ConvenioHeaderComponent_Conditional_0_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_13_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.convenioJudicialPM.generarConvenioJudicialPM(ctx_r1.credito, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(2, "i", 6);
    \u0275\u0275text(3, "Judicial");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "div", 4)(5, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_13_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.convenioExtraPm.generarConvenioExtrajudicialPM(ctx_r1.credito, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(6, "i", 6);
    \u0275\u0275text(7, "Extrajudicial");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
  }
}
function ConvenioHeaderComponent_Conditional_0_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_13_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.convenioJudicialPF.generarConvenioJudicialPF(ctx_r1.credito, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(2, "i", 6);
    \u0275\u0275text(3, "Judicial");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "div", 4)(5, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_13_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.convenioExtraPf.generarConvenioExtrajudicialPF(ctx_r1.credito, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(6, "i", 6);
    \u0275\u0275text(7, "Extrajudicial");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
  }
}
function ConvenioHeaderComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConvenioHeaderComponent_Conditional_0_Conditional_13_Conditional_0_Template, 8, 2)(1, ConvenioHeaderComponent_Conditional_0_Conditional_13_Conditional_1_Template, 8, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 0 : 1);
  }
}
function ConvenioHeaderComponent_Conditional_0_Conditional_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_14_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.convenioPagoPM.generarConvenioPagoPM(ctx_r1.credito, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(2, "i", 6);
    \u0275\u0275text(3, "Pago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "div", 4)(5, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_14_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.convenioRestructuraPM.generarReestructuraPM(ctx_r1.credito, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(6, "i", 6);
    \u0275\u0275text(7, "Reestructura");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
  }
}
function ConvenioHeaderComponent_Conditional_0_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_14_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.convenioPagoPF.generarConvenioPagoPF(ctx_r1.credito, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(2, "i", 6);
    \u0275\u0275text(3, "Pago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "div", 4)(5, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_14_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.convenioReestructuraPF.generarReestructuraPF(ctx_r1.credito, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(6, "i", 6);
    \u0275\u0275text(7, "Reestructura");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
  }
}
function ConvenioHeaderComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConvenioHeaderComponent_Conditional_0_Conditional_14_Conditional_0_Template, 8, 2)(1, ConvenioHeaderComponent_Conditional_0_Conditional_14_Conditional_1_Template, 8, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 0 : 1);
  }
}
function ConvenioHeaderComponent_Conditional_0_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 10);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_15_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.terminar("ACTIVO"));
    });
    \u0275\u0275text(2, "Reactivar");
    \u0275\u0275elementEnd()();
  }
}
function ConvenioHeaderComponent_Conditional_0_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_15_Conditional_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.terminar("CONCLUIDO"));
    });
    \u0275\u0275text(2, "Concluir");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 4)(4, "button", 11);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Conditional_15_Conditional_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.terminar("CANCELADO"));
    });
    \u0275\u0275text(5, "Cancelar");
    \u0275\u0275elementEnd()();
  }
}
function ConvenioHeaderComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConvenioHeaderComponent_Conditional_0_Conditional_15_Conditional_0_Template, 3, 0, "div", 4)(1, ConvenioHeaderComponent_Conditional_0_Conditional_15_Conditional_1_Template, 6, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((ctx_r1.convenio == null ? null : ctx_r1.convenio.estatus) != "ACTIVO" ? 0 : 1);
  }
}
function ConvenioHeaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pagare.pagare(ctx_r1.credito, "get", false, "", ctx_r1.fechaPagare, ctx_r1.convenio == null ? null : ctx_r1.convenio.fecha_convenio, ctx_r1.convenio, ctx_r1.amortizaciones));
    });
    \u0275\u0275elementStart(7, "i", 6);
    \u0275\u0275text(8, "Pagar\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 4)(10, "button", 7);
    \u0275\u0275listener("click", function ConvenioHeaderComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabla_amortizacion.tabla_amortizacion_pdf(ctx_r1.credito, ctx_r1.amortizaciones, ctx_r1.credito.fecha_amortizacion, ctx_r1.convenio));
    });
    \u0275\u0275elementStart(11, "i", 6);
    \u0275\u0275text(12, "Amortizaciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, ConvenioHeaderComponent_Conditional_0_Conditional_13_Template, 2, 1)(14, ConvenioHeaderComponent_Conditional_0_Conditional_14_Template, 2, 1);
    \u0275\u0275conditionalCreate(15, ConvenioHeaderComponent_Conditional_0_Conditional_15_Template, 2, 1);
    \u0275\u0275elementStart(16, "div", 4)(17, "button", 8)(18, "i", 9);
    \u0275\u0275text(19, " Historial de convenios");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", (ctx_r1.convenio == null ? null : ctx_r1.convenio.id) ? "Editar" : "Nuevo", " convenio");
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !(ctx_r1.convenio == null ? null : ctx_r1.convenio.convenios_pagos == null ? null : ctx_r1.convenio.convenios_pagos.length));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.credito.juridicos ? 13 : 14);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.convenio == null ? null : ctx_r1.convenio.id) ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/main/convenios/list/" + ctx_r1.credito.id);
  }
}
var _ConvenioHeaderComponent = class _ConvenioHeaderComponent {
  constructor(tabla_amortizacion, pagare, convenioPagoPF2, convenioPagoPM2, convenioReestructuraPF2, convenioRestructuraPM, convenioJudicialPF, convenioJudicialPM, convenioExtraPf, convenioExtraPm, convenioController, creditoController, dialog) {
    this.tabla_amortizacion = tabla_amortizacion;
    this.pagare = pagare;
    this.convenioPagoPF = convenioPagoPF2;
    this.convenioPagoPM = convenioPagoPM2;
    this.convenioReestructuraPF = convenioReestructuraPF2;
    this.convenioRestructuraPM = convenioRestructuraPM;
    this.convenioJudicialPF = convenioJudicialPF;
    this.convenioJudicialPM = convenioJudicialPM;
    this.convenioExtraPf = convenioExtraPf;
    this.convenioExtraPm = convenioExtraPm;
    this.convenioController = convenioController;
    this.creditoController = creditoController;
    this.dialog = dialog;
    this.fechaPagare = "";
  }
  ngOnChanges(changes) {
    if (changes["convenio"] && this.convenio) {
      this.setFechaPagare();
    }
  }
  setFechaPagare() {
    if (!this.convenio?.fecha_convenio)
      return;
    const date = /* @__PURE__ */ new Date(this.convenio.fecha_convenio.substring(0, 10) + "T17:00:00Z");
    this.fechaPagare = new Date(date.getFullYear(), date.getMonth() + 4, 0).toISOString().substring(0, 10);
  }
  terminar(estado) {
    return __async(this, null, function* () {
      const convenios = yield this.convenioController.all({ conditionals: { credito_id: this.credito?.id, deleted_at: null }, columns: ["id", "estatus"] });
      if (estado == "ACTIVO" && convenios.some((c) => c.estatus == "ACTIVO")) {
        this.dialog.show({
          title: "Esto no se puede hacer.",
          body: "Este cr\xE9dito ya cuenta con un convenio activo, no puede activar uno mas, solo puede tener uno activo a la vez",
          tipo: "danger"
        });
        return;
      }
      yield this.convenioController.concluir(this.convenio, estado);
      this.creditoController.actualizarEstadoCuenta(this.credito);
    });
  }
};
_ConvenioHeaderComponent.\u0275fac = function ConvenioHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConvenioHeaderComponent)(\u0275\u0275directiveInject(TablaAmortizacionService), \u0275\u0275directiveInject(PagareService), \u0275\u0275directiveInject(convenioPagoPF), \u0275\u0275directiveInject(convenioPagoPM), \u0275\u0275directiveInject(convenioReestructuraPF), \u0275\u0275directiveInject(convenioReestructuraPM), \u0275\u0275directiveInject(ConvenioJudicialPF), \u0275\u0275directiveInject(ConvenioJudicialPM), \u0275\u0275directiveInject(ConvenioExtrajudicialPF), \u0275\u0275directiveInject(ConvenioExtrajudicialPM), \u0275\u0275directiveInject(ConvenioService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(VanillaDialogService));
};
_ConvenioHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConvenioHeaderComponent, selectors: [["app-convenio-header"]], inputs: { convenio: "convenio", credito: "credito", amortizaciones: "amortizaciones" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "container-fluid", "p-1"], [1, "row"], [1, "col"], [1, "fw-bold"], [1, "col-auto", "p-1", "align-self-end"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-printer"], [1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-sm", "btn-success", 3, "routerLink"], [1, "bi", "bi-clock-fill"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function ConvenioHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConvenioHeaderComponent_Conditional_0_Template, 20, 5, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [RouterLink], encapsulation: 2 });
var ConvenioHeaderComponent = _ConvenioHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConvenioHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-convenio-header", imports: [
      RouterLink
    ], template: `@if (credito) {
<div class="container-fluid p-1">
    <div class="row">
        <div class="col">
            <h3 class="fw-bold">{{convenio?.id ? 'Editar' : 'Nuevo'}} convenio</h3>
        </div>
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary"
                (click)="pagare.pagare(credito!,'get',false, '', fechaPagare, convenio?.fecha_convenio, convenio, amortizaciones)"><i
                    class="bi bi-printer">Pagar\xE9</i></button>
        </div>
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length"
                (click)="tabla_amortizacion.tabla_amortizacion_pdf(credito, amortizaciones, credito.fecha_amortizacion, convenio)"><i
                    class="bi bi-printer">Amortizaciones</i></button>
        </div>
        @if (credito.juridicos) {
        @if (credito.datos_personas_morales) {
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length" (click)="convenioJudicialPM.generarConvenioJudicialPM(credito, convenio)"><i
                    class="bi bi-printer">Judicial</i></button>
        </div>
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length" (click)="convenioExtraPm.generarConvenioExtrajudicialPM(credito, convenio)"><i
                    class="bi bi-printer">Extrajudicial</i></button>
        </div>
        }@else { <!--else personas morales-->
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length" (click)="convenioJudicialPF.generarConvenioJudicialPF(credito, convenio)"><i
                    class="bi bi-printer">Judicial</i></button>
        </div>
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length" (click)="convenioExtraPf.generarConvenioExtrajudicialPF(credito, convenio)"><i
                    class="bi bi-printer">Extrajudicial</i></button>
        </div>
        }
        }@else{ <!--else juridicos-->
        @if (credito.datos_personas_morales) {
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length" (click)="convenioPagoPM.generarConvenioPagoPM(credito, convenio)"><i
                    class="bi bi-printer">Pago</i></button>
        </div>
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length" (click)="convenioRestructuraPM.generarReestructuraPM(credito,convenio)"><i
                    class="bi bi-printer">Reestructura</i></button>
        </div>
        }@else{ <!--datos personas morales-->
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length" (click)="convenioPagoPF.generarConvenioPagoPF(credito,convenio)"><i
                    class="bi bi-printer">Pago</i></button>
        </div>
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" [disabled]="!convenio?.convenios_pagos?.length" (click)="convenioReestructuraPF.generarReestructuraPF(credito, convenio)"><i
                    class="bi bi-printer">Reestructura</i></button>
        </div>
        }<!--fin else-->
        }
        @if(convenio?.id){
        @if (convenio?.estatus!='ACTIVO') {
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-info" (click)="terminar('ACTIVO')">Reactivar</button>
        </div>
        }@else {
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-primary" (click)="terminar('CONCLUIDO')">Concluir</button>
        </div>
        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-danger" (click)="terminar('CANCELADO')">Cancelar</button>
        </div>
        }
        }

        <div class="col-auto p-1 align-self-end">
            <button class="btn btn-sm btn-success" [routerLink]="'/main/convenios/list/'+credito.id"><i
                    class="bi bi-clock-fill"> Historial de convenios</i></button>
        </div>
    </div>
</div>
}` }]
  }], () => [{ type: TablaAmortizacionService }, { type: PagareService }, { type: convenioPagoPF }, { type: convenioPagoPM }, { type: convenioReestructuraPF }, { type: convenioReestructuraPM }, { type: ConvenioJudicialPF }, { type: ConvenioJudicialPM }, { type: ConvenioExtrajudicialPF }, { type: ConvenioExtrajudicialPM }, { type: ConvenioService }, { type: CreditoService }, { type: VanillaDialogService }], { convenio: [{
    type: Input
  }], credito: [{
    type: Input
  }], amortizaciones: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConvenioHeaderComponent, { className: "ConvenioHeaderComponent", filePath: "src/app/main/convenios/form-convenio/convenio-header/convenio-header.component.ts", lineNumber: 28 });
})();

// src/app/controllers/convenio.pago.service.ts
var _ConvenioPagoService = class _ConvenioPagoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "convenios-pagos";
    this.columns = [
      "convenio_id",
      "feacha",
      "pago_fijo",
      "abono_a_capital",
      "interes",
      "iva",
      "usuario_id"
    ];
  }
};
_ConvenioPagoService.\u0275fac = function ConvenioPagoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConvenioPagoService)(\u0275\u0275inject(Injector));
};
_ConvenioPagoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConvenioPagoService, factory: _ConvenioPagoService.\u0275fac, providedIn: "any" });
var ConvenioPagoService = _ConvenioPagoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConvenioPagoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/convenios/form-convenio/form-convenio.component.ts
var _c05 = ["fileInput"];
function FormConvenioComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " Ya existe un convenio activo, si deseas crear uno nuevo, debes cancelar el anterior. ");
    \u0275\u0275elementEnd();
  }
}
function FormConvenioComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-view-resumen-credito", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r1.credito);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setMontos(true));
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275text(2, " Refrescar montos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitData(true));
    });
    \u0275\u0275element(4, "i", 74);
    \u0275\u0275text(5, " Refrescar amortizaciones ");
    \u0275\u0275elementEnd();
  }
}
function FormConvenioComponent_Conditional_0_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-form-datos-generales", 76);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("datosGenerales", ctx_r1.datosGenerales);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-form-datos-morales", 77);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("datoPersonaMoral", ctx_r1.datosGenerales);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 75);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2, "Datos del Acreditado ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, FormConvenioComponent_Conditional_0_Conditional_10_Conditional_3_Template, 1, 1, "app-form-datos-generales", 76);
    \u0275\u0275conditionalCreate(4, FormConvenioComponent_Conditional_0_Conditional_10_Conditional_4_Template, 1, 1, "app-form-datos-morales", 77);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.esPersonaFisica(ctx_r1.datosGenerales) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.esPersonaMoral(ctx_r1.datosGenerales) ? 4 : -1);
  }
}
function FormConvenioComponent_Conditional_0_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r4);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h6", 87);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_3_Template_h6_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const config_r7 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(config_r7.isExpanded = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_182_r8 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bloque #", \u0275$index_182_r8 + 1);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_4_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const config_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.utils.localDelete(ctx_r1.amortizacionesConfigs, config_r7));
    });
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementEnd();
  }
}
function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 88);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_4_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const config_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(config_r7.isExpanded = !ctx_r1.convenio.id || ctx_r1.usuario.id === 1);
    });
    \u0275\u0275elementStart(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 89);
    \u0275\u0275conditionalCreate(6, FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_4_Conditional_6_Template, 2, 0, "button", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const config_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", config_r7.meses, " X ", \u0275\u0275pipeBind1(4, 3, config_r7.monto), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.convenio.id ? 6 : -1);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 64)(2, "label", 93);
    \u0275\u0275text(3, "Plazo en Meses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "span", 15);
    \u0275\u0275element(6, "i", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_5_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const config_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(config_r7.meses, $event) || (config_r7.meses = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 64)(9, "label", 93);
    \u0275\u0275text(10, "Pago Mensual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14)(12, "span", 15);
    \u0275\u0275text(13, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_5_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const config_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(config_r7.monto, $event) || (config_r7.monto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 97)(16, "button", 98);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_5_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r11);
      const config_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.utils.localDelete(ctx_r1.amortizacionesConfigs, config_r7));
    });
    \u0275\u0275element(17, "i", 92);
    \u0275\u0275text(18, " Eliminar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    const config_r7 = ctx_r11.$implicit;
    const \u0275$index_182_r8 = ctx_r11.$index;
    \u0275\u0275advance(2);
    \u0275\u0275property("for", \u0275\u0275interpolate1("meses-", \u0275$index_182_r8));
    \u0275\u0275advance(5);
    \u0275\u0275property("id", \u0275\u0275interpolate1("meses-", \u0275$index_182_r8));
    \u0275\u0275twoWayProperty("ngModel", config_r7.meses);
    \u0275\u0275advance(2);
    \u0275\u0275property("for", \u0275\u0275interpolate1("monto-", \u0275$index_182_r8));
    \u0275\u0275advance(5);
    \u0275\u0275property("id", \u0275\u0275interpolate1("monto-", \u0275$index_182_r8));
    \u0275\u0275twoWayProperty("ngModel", config_r7.monto);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_84_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 83)(2, "div", 84);
    \u0275\u0275conditionalCreate(3, FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_3_Template, 2, 1, "h6", 85);
    \u0275\u0275conditionalCreate(4, FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_4_Template, 7, 5, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, FormConvenioComponent_Conditional_0_Conditional_84_For_3_Conditional_5_Template, 19, 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const config_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("h-100", config_r7.isExpanded);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(config_r7.isExpanded ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!config_r7.isExpanded ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(config_r7.isExpanded ? 5 : -1);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_84_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_84_Conditional_4_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.nuevaAmortizacionConfig());
    });
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275elementEnd();
  }
}
function FormConvenioComponent_Conditional_0_Conditional_84_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275conditionalCreate(1, FormConvenioComponent_Conditional_0_Conditional_84_Conditional_4_Conditional_1_Template, 2, 0, "button", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.amortizacionesConfigs.length > 0 ? 1 : -1);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 45);
    \u0275\u0275repeaterCreate(2, FormConvenioComponent_Conditional_0_Conditional_84_For_3_Template, 6, 5, "div", 78, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(4, FormConvenioComponent_Conditional_0_Conditional_84_Conditional_4_Template, 2, 1, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 80)(6, "button", 81);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_84_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.calcularAmortizacionPersonalizada());
    });
    \u0275\u0275element(7, "i", 82);
    \u0275\u0275text(8, " Calcular Amortizaci\xF3n ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.amortizacionesConfigs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.convenio.id || ctx_r1.usuario.id === 1 ? 4 : -1);
  }
}
function FormConvenioComponent_Conditional_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275elementStart(2, "h5", 103);
    \u0275\u0275text(3, "No hay configuraciones de amortizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 103);
    \u0275\u0275text(5, "Agrega una nueva configuraci\xF3n para comenzar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 104);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Conditional_85_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nuevaAmortizacionConfig());
    });
    \u0275\u0275element(7, "i", 105);
    \u0275\u0275text(8, " Crear Primera Configuraci\xF3n ");
    \u0275\u0275elementEnd()();
  }
}
function FormConvenioComponent_Conditional_0_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "label", 106);
    \u0275\u0275text(2, " Gastos de cobranza ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "span", 55);
    \u0275\u0275text(5, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Conditional_133_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.convenio.gastos_judiciales, $event) || (ctx_r1.convenio.gastos_judiciales = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FormConvenioComponent_Conditional_0_Conditional_133_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.recalcularPorcentaje());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 57);
    \u0275\u0275text(8, "Solo para convenios en juridicos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 46)(10, "label", 108);
    \u0275\u0275text(11, " Porcentaje de gastos de cobranza ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14)(13, "span", 55);
    \u0275\u0275text(14, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Conditional_133_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.porcentaje_gastos_cobranza, $event) || (ctx_r1.porcentaje_gastos_cobranza = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 57);
    \u0275\u0275text(17, "Solo para convenios en juridicos");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.convenio.gastos_judiciales);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.porcentaje_gastos_cobranza);
  }
}
function FormConvenioComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275element(2, "app-convenio-header", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, FormConvenioComponent_Conditional_0_Conditional_3_Template, 2, 0, "div", 4);
    \u0275\u0275conditionalCreate(4, FormConvenioComponent_Conditional_0_Conditional_4_Template, 2, 1, "div", 5);
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275conditionalCreate(6, FormConvenioComponent_Conditional_0_Conditional_6_Template, 6, 0);
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showFormDatosGen());
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275text(9, " Editar Datos Generales Acreditado ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, FormConvenioComponent_Conditional_0_Conditional_10_Template, 5, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 5)(12, "h5", 8);
    \u0275\u0275element(13, "i", 9);
    \u0275\u0275text(14, "Datos del Convenio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "label", 12);
    \u0275\u0275element(18, "i", 13);
    \u0275\u0275text(19, "Tipo de Convenio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14)(21, "span", 15);
    \u0275\u0275element(22, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 17);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.convenio.tipo_convenio, $event) || (ctx_r1.convenio.tipo_convenio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_select_ngModelChange_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.calcularGastosCobranza());
    });
    \u0275\u0275elementStart(24, "option", 18);
    \u0275\u0275text(25, "Selecciona una opci\xF3n...");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, FormConvenioComponent_Conditional_0_For_27_Template, 2, 2, "option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 11)(29, "label", 20);
    \u0275\u0275element(30, "i", 21);
    \u0275\u0275text(31, "Pago Mensual ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 14)(33, "span", 15);
    \u0275\u0275text(34, "Pago mensual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pago_mensual, $event) || (ctx_r1.pago_mensual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFechaConclusion());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 23);
    \u0275\u0275text(37, "Pago Estimado Mensual");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 10)(39, "div", 11)(40, "label", 20);
    \u0275\u0275element(41, "i", 24);
    \u0275\u0275text(42, "Fecha Convenio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 14)(44, "span", 15);
    \u0275\u0275text(45, "Fecha del Convenio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.convenio.fecha_convenio, $event) || (ctx_r1.convenio.fecha_convenio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 23);
    \u0275\u0275text(48, "Fecha que se realiza el convenio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 11)(50, "label", 20);
    \u0275\u0275element(51, "i", 24);
    \u0275\u0275text(52, "Plazo (Meses) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 14)(54, "span", 15);
    \u0275\u0275text(55, "Meses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.convenio.plazo, $event) || (ctx_r1.convenio.plazo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 23);
    \u0275\u0275text(58, "Plazo estimado en meses");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 10)(60, "div", 11)(61, "label", 27);
    \u0275\u0275element(62, "i", 28);
    \u0275\u0275text(63, "Fecha de Inicio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 14)(65, "span", 15);
    \u0275\u0275element(66, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.convenio.fecha_inicio, $event) || (ctx_r1.convenio.fecha_inicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_67_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFechaConclusion());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 11)(69, "label", 31);
    \u0275\u0275element(70, "i", 32);
    \u0275\u0275text(71, "Fecha de Conclusi\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 14)(73, "span", 15);
    \u0275\u0275element(74, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.convenio.fecha_conclusion, $event) || (ctx_r1.convenio.fecha_conclusion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 23);
    \u0275\u0275text(77, "Calculado autom\xE1ticamente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 35)(79, "div", 36)(80, "div", 37);
    \u0275\u0275element(81, "i", 38);
    \u0275\u0275elementStart(82, "h5", 39);
    \u0275\u0275text(83, "Configuraci\xF3n de Amortizaciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(84, FormConvenioComponent_Conditional_0_Conditional_84_Template, 9, 1, "div", 40);
    \u0275\u0275conditionalCreate(85, FormConvenioComponent_Conditional_0_Conditional_85_Template, 9, 0, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 35)(87, "div", 42)(88, "h6", 43);
    \u0275\u0275element(89, "i", 44);
    \u0275\u0275text(90, "Montos (Solo Lectura) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 40)(92, "div", 45)(93, "div", 46)(94, "label", 47);
    \u0275\u0275text(95, "Capital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 14)(97, "span", 15);
    \u0275\u0275text(98, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "input", 48);
    \u0275\u0275pipe(100, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 46)(102, "label", 49);
    \u0275\u0275text(103, "Inter\xE9s Ordinario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 14)(105, "span", 15);
    \u0275\u0275text(106, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "input", 50);
    \u0275\u0275pipe(108, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 46)(110, "label", 51);
    \u0275\u0275text(111, "IVA Inter\xE9s Ordinario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 14)(113, "span", 15);
    \u0275\u0275text(114, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(115, "input", 52);
    \u0275\u0275pipe(116, "currency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(117, "div", 35)(118, "div", 42)(119, "h6", 43);
    \u0275\u0275element(120, "i", 53);
    \u0275\u0275text(121, "Montos Editables ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 40)(123, "div", 45)(124, "div", 46)(125, "label", 54);
    \u0275\u0275text(126, "Monto Abono Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 14)(128, "span", 55);
    \u0275\u0275text(129, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_130_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.convenio.monto_abono_inicial, $event) || (ctx_r1.convenio.monto_abono_inicial = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FormConvenioComponent_Conditional_0_Template_input_ngModelChange_130_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.actualizarTabla());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 57);
    \u0275\u0275text(132, "Ingrese el monto inicial del convenio");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(133, FormConvenioComponent_Conditional_0_Conditional_133_Template, 18, 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(134, "div", 35)(135, "div", 42)(136, "h6", 43);
    \u0275\u0275element(137, "i", 58);
    \u0275\u0275text(138, "Intereses Moratorios (Solo Lectura) ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div", 40)(140, "div", 45)(141, "div", 11)(142, "label", 59);
    \u0275\u0275text(143, "Inter\xE9s Moratorio Condonado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "div", 14)(145, "span", 15);
    \u0275\u0275text(146, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(147, "input", 60);
    \u0275\u0275pipe(148, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div", 11)(150, "label", 61);
    \u0275\u0275text(151, "Inter\xE9s Moratorio Cobrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "div", 14)(153, "span", 15);
    \u0275\u0275text(154, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(155, "input", 62);
    \u0275\u0275pipe(156, "currency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(157, "div", 35)(158, "div", 42)(159, "h6", 43);
    \u0275\u0275element(160, "i", 63);
    \u0275\u0275text(161, "Documentaci\xF3n ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "div", 40)(163, "div", 64)(164, "label", 65);
    \u0275\u0275element(165, "i", 66);
    \u0275\u0275text(166, "Documento del Convenio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "div", 14)(168, "span", 55);
    \u0275\u0275element(169, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "app-file-input", 68, 0);
    \u0275\u0275twoWayListener("urlChange", function FormConvenioComponent_Conditional_0_Template_app_file_input_urlChange_170_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.convenio.pagare_url, $event) || (ctx_r1.convenio.pagare_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "div", 57);
    \u0275\u0275text(173, "Suba el contrato del convenio en formato pdf");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(174, "app-amortizaciones", 69);
    \u0275\u0275elementStart(175, "div", 70)(176, "div")(177, "button", 71);
    \u0275\u0275listener("click", function FormConvenioComponent_Conditional_0_Template_button_click_177_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitData());
    });
    \u0275\u0275element(178, "i", 72);
    \u0275\u0275text(179, "Guardar Convenio ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r1.credito)("convenio", ctx_r1.convenio)("amortizaciones", ctx_r1.amortizaciones);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.existeConvenioActivo() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.estado_cuenta ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.usuario.id == 1 && ctx_r1.convenio.id ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.showFormDatosGenerales ? 10 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.convenio.tipo_convenio);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.tipos_convenio);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pago_mensual);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.convenio.fecha_convenio);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.convenio.plazo);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.convenio.fecha_inicio);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.convenio.fecha_conclusion);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.amortizacionesConfigs.length ? 84 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.amortizacionesConfigs.length ? 85 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(100, 32, ctx_r1.convenio.capital));
    \u0275\u0275advance(8);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(108, 34, ctx_r1.convenio.interes_ordinario));
    \u0275\u0275advance(8);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(116, 36, ctx_r1.convenio.iva_interes_ordinario));
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.convenio.monto_abono_inicial);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.credito.juridicos ? 133 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(148, 38, ctx_r1.convenio.interes_moratorio_condonado));
    \u0275\u0275advance(8);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(156, 40, ctx_r1.convenio.interes_moratorio_cobrado));
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("url", ctx_r1.convenio.pagare_url);
    \u0275\u0275property("id", ctx_r1.convenio.id.toString())("automaticSave", false)("showButton", false)("showSimpleDownload", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r1.cotizacion)("amortizaciones", ctx_r1.amortizaciones)("showNew", false)("tipo_convenio", ctx_r1.convenio.tipo_convenio);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.sePuedeCrearConvenio());
  }
}
var _FormConvenioComponent = class _FormConvenioComponent {
  constructor(utils, route, convenioController, creditoController, utilsEstadoCuenta, cotizador, convenioPagoController, localStorage, dialogService) {
    this.utils = utils;
    this.route = route;
    this.convenioController = convenioController;
    this.creditoController = creditoController;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.cotizador = cotizador;
    this.convenioPagoController = convenioPagoController;
    this.localStorage = localStorage;
    this.dialogService = dialogService;
    this.convenio = {
      credito_id: 0,
      fecha_convenio: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
      tipo_convenio: "PAGO",
      estatus: "ACTIVO",
      fecha_inicio: "",
      plazo: 0,
      interes_moratorio_cobrado: 0,
      capital: 0,
      usuario_id: 0,
      id: 0,
      created_at: ""
    };
    this.tipos_convenio = ["PAGO", "REESTRUCTURA"];
    this.fechaPagare = "";
    this.pago_mensual = 0;
    this.porcentaje_gastos_cobranza = 0;
    this.amortizacionesConfigs = [];
    this.showFormDatosGenerales = false;
    this.usuario = this.localStorage.getUser();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      this.credito_id = this.utils.intOrNull(params.get("credito_id")) ?? 0;
      const convenio_id = this.utils.intOrNull(params.get("convenio_id"));
      if (convenio_id) {
        const res = yield this.convenioController.find(convenio_id, [
          "juridicos",
          "credito",
          "credito.datosPersonaFisica",
          "credito.datosPersonaFisica.datosPersonales",
          "credito.datosPersonaFisica.datosPersonales.telefonosPersonales",
          "credito.datosPersonasMorales",
          "conveniosPagos"
        ]);
        const credito = res?.credito;
        if (!res)
          return;
        this.convenio = res;
        this.credito_id = this.convenio?.credito_id ?? 0;
        if (this.convenio.juridicos) {
          this.tipos_convenio = ["", ""];
        }
        if (!this.convenio.juridicos) {
          this.tipos_convenio = ["PAGO", "REESTRUCTURA"];
        }
        this.convenio.fecha_convenio = this.convenio.fecha_convenio?.substring(0, 10) ?? (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
        this.setAmortizacionesConfigFromPagos();
        this.setCotizacion();
      }
      if (this.credito_id) {
        const credito = yield this.creditoController.find(this.credito_id, ["*"]);
        if (!credito)
          return;
        if (credito.juridicos) {
          this.convenio.tipo_convenio = credito.juridicos.estado;
          this.tipos_convenio = ["EXTRAJUDICIAL", "JUDICIAL"];
        } else {
          this.tipos_convenio = ["PAGO", "REESTRUCTURA"];
        }
        this.convenio.credito_id = credito.id;
        this.setCreditoOriginal(credito);
        this.setMontos();
        this.calcularGastosCobranza();
      }
      this.datosGenerales = this.utils.getDatosGeneralesFromCredito(this.credito) || void 0;
    }));
  }
  setAmortizacionesConfigFromPagos() {
    if (this.convenio.convenios_pagos) {
      const montosUnicos = this.utils.uniqueKeys(this.convenio.convenios_pagos, "pago_fijo");
      this.amortizacionesConfigs = montosUnicos.map((monto) => {
        return {
          monto,
          meses: this.convenio.convenios_pagos.filter((p) => p.pago_fijo == monto).length
        };
      });
    }
  }
  nuevaAmortizacionConfig() {
    this.amortizacionesConfigs.forEach((c) => c.isExpanded = false);
    this.amortizacionesConfigs.push({
      meses: 0,
      monto: 0,
      isExpanded: true
    });
  }
  setCreditoOriginal(credito) {
    if (!credito)
      return;
    const estadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(credito);
    credito.estado_cuenta = estadoCuenta;
    credito.convenios = [];
    this.credito = credito;
    console.info(this.credito);
  }
  existeConvenioActivo() {
    return this.credito?.convenios?.some((conv) => !conv.fecha_conclusion && !conv.deleted_at && conv.id !== this.convenio?.id);
  }
  setMontos(force) {
    if (this.convenio.id && !force)
      return;
    const estadoCuenta = this.utilsEstadoCuenta.getEstadoCuentaPrevioAConvenio(this.credito);
    this.convenio.capital = this.utilsEstadoCuenta.sumarListaByKey("capital", estadoCuenta.periodos) - this.utilsEstadoCuenta.sumarListaByKey("pago_capital", estadoCuenta.periodos);
    this.convenio.interes_ordinario = this.utilsEstadoCuenta.sumarListaByKey("interes", estadoCuenta.periodos) - this.utilsEstadoCuenta.sumarListaByKey("pago_interes", estadoCuenta.periodos);
    this.convenio.interes_moratorio_condonado = estadoCuenta.interes_moratorio;
    this.convenio.iva_interes_ordinario = this.utilsEstadoCuenta.sumarListaByKey("iva", estadoCuenta.periodos) - this.utilsEstadoCuenta.sumarListaByKey("pago_iva", estadoCuenta.periodos);
    if (!this.convenio.gastos_judiciales || this.convenio.gastos_judiciales === 0) {
      this.convenio.gastos_judiciales = this.utilsEstadoCuenta.getGastosCobranza(this.convenio.capital + this.convenio.iva_interes_ordinario + this.convenio.interes_ordinario, this.convenio.tipo_convenio);
    }
    const total = this.convenio.capital + this.convenio.iva_interes_ordinario + this.convenio.interes_ordinario + this.convenio.gastos_judiciales;
    const dif = estadoCuenta.total_a_liquidar - total;
    if (dif > 0) {
      this.convenio.capital += dif;
    }
    this.setCotizacion();
  }
  setFechaConclusion() {
    if (this.convenio.id && this.usuario.id !== 1)
      return;
    if (this.pago_mensual > 1e3) {
      this.convenio.plazo = Math.ceil(((this.credito?.estado_cuenta?.total_a_liquidar ?? 0) + (this.convenio.gastos_judiciales ?? 0)) / this.pago_mensual);
    }
    if (!this.convenio?.fecha_inicio)
      return;
    this.setFechaPagare();
    this.setCotizacion();
    this.convenio.fecha_conclusion = this.amortizaciones?.lista_pagos.at(-1)?.fecha.substring(0, 10);
  }
  calcularAmortizacionPersonalizada() {
    if (this.convenio.id && this.usuario.id !== 1)
      return;
    const errores = this.validarConfiguracionesAmortizacion();
    if (errores.length > 0) {
      console.warn("Errores de validaci\xF3n:", errores);
      this.mostrarErroresValidacion(errores);
      return;
    }
    this.convenio.plazo = this.amortizacionesConfigs.reduce((acc, config) => acc + config.meses, 0);
    console.log("Calculando amortizaci\xF3n con plazo:", this.convenio.plazo, "y", this.amortizacionesConfigs.length, "configuraciones");
    this.setFechaPagare();
    this.setCotizacion();
    this.convenio.fecha_conclusion = this.amortizaciones?.lista_pagos.at(-1)?.fecha.substring(0, 10);
    console.log("Amortizaci\xF3n personalizada calculada:", this.amortizaciones, this.convenio.fecha_conclusion);
  }
  mostrarErroresValidacion(errores) {
    const dialogData = {
      title: "Errores de Validaci\xF3n",
      body: errores.join("<br>"),
      size: "md",
      respYes: "Entendido",
      tipo: "error"
    };
    this.dialogService.show(dialogData);
  }
  setFechaPagare() {
    if (!this.convenio.fecha_convenio)
      return;
    const fechaConvenio = new Date(this.convenio.fecha_convenio);
    this.fechaPagare = new Date(fechaConvenio.getFullYear(), fechaConvenio.getMonth() + 4, 0).toISOString().substring(0, 10);
  }
  actualizarTabla() {
    this.setFechaConclusion();
    this.setCotizacion();
  }
  recalcularGastos() {
    const total_a_liquidar = this.credito?.estado_cuenta?.total_a_liquidar ?? 0;
    this.convenio.gastos_judiciales = total_a_liquidar * (this.porcentaje_gastos_cobranza / 100);
    this.setFechaConclusion();
  }
  recalcularPorcentaje() {
    const total_a_liquidar = this.credito?.estado_cuenta?.total_a_liquidar ?? 0;
    if (total_a_liquidar > 0) {
      this.porcentaje_gastos_cobranza = (this.convenio.gastos_judiciales ?? 0) / total_a_liquidar * 100;
    }
    this.setFechaConclusion();
  }
  calcularGastosCobranza() {
    if (this.convenio.tipo_convenio === "JUDICIAL") {
      this.porcentaje_gastos_cobranza = 10;
    } else if (this.convenio.tipo_convenio === "EXTRAJUDICIAL") {
      this.porcentaje_gastos_cobranza = 20;
    } else {
      this.porcentaje_gastos_cobranza = 0;
    }
    this.recalcularGastos();
  }
  setCotizacion() {
    if (!this.convenio.fecha_inicio)
      return;
    if (!this.convenio.plazo && this.amortizacionesConfigs.length) {
      this.convenio.plazo = this.amortizacionesConfigs.reduce((acc, config) => acc + config.meses, 0);
    }
    if (!this.convenio.plazo)
      return;
    this.cotizacion = {
      capital: +this.convenio.capital,
      interes_anual: 0,
      interes_total: +(this.convenio.interes_ordinario ?? 0),
      iva_interes_total: +(this.convenio.iva_interes_ordinario ?? 0),
      incluir_iva: true,
      plazos: this.convenio.plazo ?? 0,
      plazo_tipo: "MENSUAL",
      gastos_judiciales: +(this.convenio.gastos_judiciales ?? 0),
      abono_inicial: +(this.convenio.monto_abono_inicial ?? 0),
      fecha_inicio: this.convenio.fecha_inicio,
      tipo_tasa: "TASA ORDINARIA ANUAL"
    };
    const totalMesesConfig = this.amortizacionesConfigs.reduce((acc, amo) => acc + amo.meses, 0);
    if (this.amortizacionesConfigs.length > 0 && this.convenio.plazo !== totalMesesConfig) {
      console.warn("El plazo del convenio no coincide con el total de meses de las configuraciones");
    }
    this.amortizaciones = this.cotizador.calcularAmortizaciones(this.cotizacion, this.amortizacionesConfigs);
    if (this.amortizacionesConfigs.length === 0) {
      this.amortizacionesConfigs = this.cotizador.amortizacionesConfigFromPagosResponse(this.amortizaciones);
    }
    if (!this.convenio.convenios_pagos?.length) {
      this.convenio.convenios_pagos = this.conveniosPagosFromAmortizaciones();
    }
  }
  submitData(refresh) {
    return __async(this, null, function* () {
      const res = yield this.convenioController.createOrUpdate(this.convenio);
      if (!res)
        return;
      this.convenio = res;
      if (this.fileInput && this.fileInput.file) {
        this.fileInput.id = res.id.toString();
        const resFile = this.fileInput?.upload();
        if (!resFile)
          return;
      }
      if (refresh && this.convenio.convenios_pagos?.length) {
        for (const pago of this.convenio.convenios_pagos.filter((p) => p.id)) {
          const res2 = yield this.convenioPagoController.switch(pago);
          if (!res2)
            return;
        }
        this.convenio.convenios_pagos = [];
      }
      if (!!this.convenio.convenios_pagos?.length)
        return;
      const convenioPagos = this.conveniosPagosFromAmortizaciones();
      yield this.convenioPagoController.multipleNews(convenioPagos);
      this.convenio.convenios_pagos = convenioPagos;
      yield this.creditoController.actualizarEstadoCuenta(this.credito);
      this.setCreditoOriginal(this.credito);
    });
  }
  conveniosPagosFromAmortizaciones() {
    return this.amortizaciones?.lista_pagos.filter((p) => p.pago_fijo > 0 && p.fecha && p.abono_a_capital > 0 && p.interes > 0 && p.iva > 0).map((pago) => ({
      convenio_id: this.convenio.id,
      fecha: pago.fecha,
      pago_fijo: pago.pago_fijo,
      abono_a_capital: pago.abono_a_capital,
      interes: pago.interes,
      iva: pago.iva,
      gastos_judiciales: pago.gastos_judiciales,
      usuario_id: 0,
      id: 0,
      created_at: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10)
    })) ?? [];
  }
  showFormDatosGen() {
    this.showFormDatosGenerales = !this.showFormDatosGenerales;
  }
  esPersonaFisica(dg) {
    return dg?.curp !== void 0;
  }
  esPersonaMoral(dg) {
    return dg?.razon_social !== void 0;
  }
  sePuedeCrearConvenio() {
    const estadoCuenta = this.credito?.estado_cuenta;
    return estadoCuenta?.total_a_liquidar && this.amortizaciones;
  }
  validarConfiguracionesAmortizacion() {
    const errores = [];
    if (!this.amortizacionesConfigs.length) {
      errores.push("No hay configuraciones de amortizaci\xF3n agregadas");
      return errores;
    }
    this.amortizacionesConfigs.forEach((config, index) => {
      if (config.meses <= 0) {
        errores.push(`Configuraci\xF3n #${index + 1}: El n\xFAmero de meses debe ser mayor a 0`);
      }
      if (config.monto <= 0) {
        errores.push(`Configuraci\xF3n #${index + 1}: El monto mensual debe ser mayor a 0`);
      }
    });
    const totalMeses = this.amortizacionesConfigs.reduce((acc, config) => acc + config.meses, 0);
    if (totalMeses <= 0) {
      errores.push("El total de meses debe ser mayor a 0");
    }
    if (!this.convenio.fecha_inicio) {
      errores.push("Se requiere una fecha de inicio para el convenio");
    }
    return errores;
  }
};
_FormConvenioComponent.\u0275fac = function FormConvenioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormConvenioComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ConvenioService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(CotizadorService), \u0275\u0275directiveInject(ConvenioPagoService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(VanillaDialogService));
};
_FormConvenioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormConvenioComponent, selectors: [["app-form-convenio"]], viewQuery: function FormConvenioComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, decls: 1, vars: 1, consts: [["fileInput", ""], [1, "container-fluid", "mx-1", "p-3", "bg-white", "my-1", "rounded", "shadow"], [1, "row", "bg-white", "sticky-top", "py-3"], [3, "credito", "convenio", "amortizaciones"], ["role", "alert", 1, "alert", "alert-warning"], [1, "container-fluid", "rounded-3", "m-3", "p-4", "shadow-sm", "bg-white"], [1, "btn", "btn-sm", "btn-primary", "m-1", 3, "click"], [1, "bi", "bi-pencil"], [1, "mb-4", "fw-bold", "text-primary"], [1, "bi", "bi-file-earmark-text", "me-2"], [1, "row", "mb-4", "g-3"], [1, "col-md-6"], ["for", "tipo_convenio", 1, "form-label", "fw-bold", "text-muted", "small"], [1, "bi", "bi-tag-fill", "me-1"], [1, "input-group"], [1, "input-group-text", "bg-light"], [1, "bi", "bi-journal-text"], ["id", "tipo_convenio", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["disabled", "", "selected", "", 1, "text-muted"], [3, "value"], ["for", "plazo_meses", 1, "form-label", "fw-bold", "text-muted", "small"], [1, "bi", "bi-cash", "me-1"], ["type", "number", "id", "plazo_meses", "min", "1", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-text", "text-end"], [1, "bi", "bi-calendar-range", "me-1"], ["type", "date", "id", "plazo_meses", "min", "1", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "id", "plazo_meses", "min", "1", "required", "", "disabled", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fecha_inicio", 1, "form-label", "fw-bold", "text-muted", "small"], [1, "bi", "bi-calendar-event", "me-1"], [1, "bi", "bi-calendar-date"], ["type", "date", "id", "fecha_inicio", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "fecha_conclusion", 1, "form-label", "fw-bold", "text-muted", "small"], [1, "bi", "bi-calendar-check", "me-1"], [1, "bi", "bi-calendar-x"], ["type", "date", "id", "fecha_conclusion", "readonly", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "card", "mb-4", "border-0", "shadow-sm"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-cash-stack", "me-2", "fs-5", "text-primary"], [1, "mb-0", "fw-bold", "text-dark"], [1, "card-body"], [1, "card-body", "text-center", "py-5"], [1, "card-header", "bg-light"], [1, "mb-0", "fw-bold", "text-muted"], [1, "bi", "bi-cash-stack", "me-2"], [1, "row", "g-3"], [1, "col-md-4"], ["for", "capital", 1, "form-label", "fw-bold", "text-muted", "small"], ["type", "text", "id", "capital", "readonly", "", "disabled", "", 1, "form-control", "bg-light", 3, "value"], ["for", "interes_ordinario", 1, "form-label", "fw-bold", "text-muted", "small"], ["type", "text", "id", "interes_ordinario", "readonly", "", "disabled", "", 1, "form-control", "bg-light", 3, "value"], ["for", "iva_interes_ordinario", 1, "form-label", "fw-bold", "text-muted", "small"], ["type", "text", "id", "iva_interes_ordinario", "readonly", "", "disabled", "", 1, "form-control", "bg-light", 3, "value"], [1, "bi", "bi-pencil-square", "me-2"], ["for", "monto_abono_inicial", 1, "form-label", "fw-bold", "text-muted", "small"], [1, "input-group-text"], ["type", "number", "id", "monto_abono_inicial", "step", "0.01", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-text"], [1, "bi", "bi-percent", "me-2"], ["for", "interes_moratorio_condonado", 1, "form-label", "fw-bold", "text-muted", "small"], ["type", "text", "id", "interes_moratorio_condonado", "readonly", "", 1, "form-control", "bg-light", 3, "value"], ["for", "interes_moratorio_cobrado", 1, "form-label", "fw-bold", "text-muted", "small"], ["type", "text", "id", "interes_moratorio_cobrado", "readonly", "", 1, "form-control", "bg-light", 3, "value"], [1, "bi", "bi-file-earmark", "me-2"], [1, "mb-3"], ["for", "pagare_url", 1, "form-label", "fw-bold", "text-muted", "small"], [1, "bi", "bi-link-45deg", "me-1"], [1, "bi", "bi-globe"], ["apiUrl", "api/files/convenios/save", "key", "document", "foreign_key", "id", 3, "urlChange", "url", "id", "automaticSave", "showButton", "showSimpleDownload"], [3, "data", "amortizaciones", "showNew", "tipo_convenio"], [1, "d-flex", "justify-content-end", "border-top", "pt-4"], ["type", "submit", 1, "btn", "btn-primary", "rounded-pill", "px-4", "shadow", 3, "click", "disabled"], [1, "bi", "bi-check-circle", "me-1"], ["title", "Datos del Cr\xE9dito Original", 3, "credito"], [1, "bi", "bi-arrow-clockwise"], [1, "mt-2", "mb-4", "fw-bold", "text-primary"], [3, "datosGenerales"], [3, "datoPersonaMoral"], [1, "col", "col-sm-6", "col-md-4", "col-lg-3"], [1, "col", "col-sm-6", "col-md-4", "col-lg-3", "text-center", "align-self-center"], [1, "d-flex", "justify-content-end", "mt-4"], [1, "btn", "btn-success", "px-4", 3, "click"], [1, "bi", "bi-calculator", "me-2"], [1, "card", "border-primary"], [1, "card-header", "bg-primary", "text-white", "py-2"], [1, "p-2", "pointer"], [1, "row"], [1, "p-2", "pointer", 3, "click"], [1, "col", "pointer", 3, "click"], [1, "col-auto"], ["title", "Eliminar configuraci\xF3n", 1, "btn", "btn-danger", "btn-sm"], ["title", "Eliminar configuraci\xF3n", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"], [1, "form-label", "small", "fw-bold", 3, "for"], [1, "bi", "bi-calendar-month"], ["type", "number", "min", "1", "placeholder", "Ej. 12", 1, "form-control", 3, "ngModelChange", "id", "ngModel"], ["type", "number", "step", "0.01", "min", "0", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "id", "ngModel"], [1, "card-footer", "bg-transparent", "border-top-0", "text-end"], ["title", "Eliminar configuraci\xF3n", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "btn", "btn-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle", "fs-5"], [1, "bi", "bi-cash-stack", "fs-1", "text-muted", "mb-3"], [1, "text-muted"], [1, "btn", "btn-primary", "mt-2", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], ["for", "gastos_judiciales", 1, "form-label", "fw-bold", "text-muted", "small"], ["type", "number", "id", "gastos_judiciales", "step", "0.01", "placeholder", "0.00", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "porcentaje_gastos_cobranza", 1, "form-label", "fw-bold", "text-muted", "small"], ["type", "number", "id", "porcentaje_gastos_cobranza", "step", "0.01", "placeholder", "0.00", "readonly", "", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function FormConvenioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormConvenioComponent_Conditional_0_Template, 180, 42, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [
  ViewResumenCreditoComponent,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  RequiredValidator,
  MinValidator,
  NgModel,
  CurrencyPipe,
  FileInputComponent,
  AmortizacionesComponent,
  FormDatosGeneralesComponent,
  FormDatosMoralesComponent,
  ConvenioHeaderComponent
], encapsulation: 2 });
var FormConvenioComponent = _FormConvenioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormConvenioComponent, [{
    type: Component,
    args: [{ selector: "app-form-convenio", imports: [
      ViewResumenCreditoComponent,
      FormsModule,
      CurrencyPipe,
      FileInputComponent,
      AmortizacionesComponent,
      FormDatosGeneralesComponent,
      FormDatosMoralesComponent,
      ConvenioHeaderComponent
    ], template: '@if (credito) {\n<div class="container-fluid mx-1 p-3 bg-white my-1 rounded shadow">\n  <div class="row bg-white sticky-top py-3">\n    <app-convenio-header [credito]="credito" [convenio]="convenio"\n      [amortizaciones]="amortizaciones"></app-convenio-header>\n  </div>\n  @if (existeConvenioActivo()) {\n  <div class="alert alert-warning" role="alert">\n    Ya existe un convenio activo, si deseas crear uno nuevo, debes cancelar el anterior.\n  </div>\n  }\n\n  @if (credito.estado_cuenta) {\n  <!-- Datos del credito -->\n  <div class="container-fluid rounded-3 m-3 p-4 shadow-sm bg-white">\n    <app-view-resumen-credito [credito]="credito" title="Datos del Cr\xE9dito Original" />\n  </div>\n  }\n\n  <!-- Editar datos generarles -->\n  <div class="container-fluid rounded-3 m-3 p-4 shadow-sm bg-white">\n    @if(usuario.id ==1 && convenio.id){\n    <button class="btn btn-sm btn-primary m-1" (click)="setMontos(true)">\n      <i class="bi bi-arrow-clockwise"></i> Refrescar montos\n    </button>\n    <button class="btn btn-sm btn-primary m-1" (click)="submitData(true)">\n      <i class="bi bi-arrow-clockwise"></i> Refrescar amortizaciones\n    </button>\n    }\n    <button class="btn btn-sm btn-primary m-1" (click)="showFormDatosGen()">\n      <i class="bi bi-pencil"></i> Editar Datos Generales Acreditado\n    </button>\n    @if(showFormDatosGenerales) {\n    <h5 class="mt-2 mb-4 fw-bold text-primary">\n      <i class="bi bi-file-earmark-text me-2"></i>Datos del Acreditado\n    </h5>\n    @if(esPersonaFisica(datosGenerales)) {\n    <app-form-datos-generales [datosGenerales]="datosGenerales"></app-form-datos-generales>\n    }\n    @if(esPersonaMoral(datosGenerales)) {\n    <app-form-datos-morales [datoPersonaMoral]="datosGenerales"></app-form-datos-morales>\n    }\n    }\n  </div>\n  <div class="container-fluid rounded-3 m-3 p-4 shadow-sm bg-white">\n    <h5 class="mb-4 fw-bold text-primary">\n      <i class="bi bi-file-earmark-text me-2"></i>Datos del Convenio\n    </h5>\n    <!-- Secci\xF3n 1: Tipo y Plazo -->\n    <div class="row mb-4 g-3">\n      <div class="col-md-6">\n        <label for="tipo_convenio" class="form-label fw-bold text-muted small">\n          <i class="bi bi-tag-fill me-1"></i>Tipo de Convenio\n        </label>\n        <div class="input-group">\n          <span class="input-group-text bg-light">\n            <i class="bi bi-journal-text"></i>\n          </span>\n          <select class="form-select" id="tipo_convenio" required [(ngModel)]="convenio.tipo_convenio" (ngModelChange)="calcularGastosCobranza()">\n            <option disabled selected class="text-muted">Selecciona una opci\xF3n...</option>\n            @for (option of tipos_convenio; track option) {\n            <option [value]="option">{{option}}</option>\n            }\n          </select>\n\n        </div>\n      </div>\n      <div class="col-md-6">\n        <label for="plazo_meses" class="form-label fw-bold text-muted small">\n          <i class="bi bi-cash me-1"></i>Pago Mensual\n        </label>\n        <div class="input-group">\n          <span class="input-group-text bg-light">Pago mensual</span>\n          <input type="number" class="form-control " id="plazo_meses" min="1" required [(ngModel)]="pago_mensual"\n          (ngModelChange)="setFechaConclusion()">\n        </div>\n        <div class="form-text text-end">Pago Estimado Mensual</div>\n      </div>\n    </div>\n    <div class="row mb-4 g-3">\n      <div class="col-md-6">\n        <label for="plazo_meses" class="form-label fw-bold text-muted small">\n          <i class="bi bi-calendar-range me-1"></i>Fecha Convenio\n        </label>\n        <div class="input-group">\n          <span class="input-group-text bg-light">Fecha del Convenio:</span>\n          <input type="date" class="form-control " id="plazo_meses" min="1" required\n            [(ngModel)]="convenio.fecha_convenio">\n        </div>\n        <div class="form-text text-end">Fecha que se realiza el convenio</div>\n      </div>\n      <div class="col-md-6">\n        <label for="plazo_meses" class="form-label fw-bold text-muted small">\n          <i class="bi bi-calendar-range me-1"></i>Plazo (Meses)\n        </label>\n        <div class="input-group">\n          <span class="input-group-text bg-light">Meses</span>\n          <input type="number" class="form-control " id="plazo_meses" min="1" required [(ngModel)]="convenio.plazo"\n            disabled>\n        </div>\n        <div class="form-text text-end">Plazo estimado en meses</div>\n      </div>\n    </div>\n    <!-- Secci\xF3n 2: Fechas -->\n    <div class="row mb-4 g-3">\n      <div class="col-md-6">\n        <label for="fecha_inicio" class="form-label fw-bold text-muted small">\n          <i class="bi bi-calendar-event me-1"></i>Fecha de Inicio\n        </label>\n        <div class="input-group">\n          <span class="input-group-text bg-light">\n            <i class="bi bi-calendar-date"></i>\n          </span>\n          <input type="date" class="form-control " id="fecha_inicio" required [(ngModel)]="convenio.fecha_inicio"\n          (ngModelChange)="setFechaConclusion()"> \n        </div>\n      </div>\n      <div class="col-md-6">\n        <label for="fecha_conclusion" class="form-label fw-bold text-muted small">\n          <i class="bi bi-calendar-check me-1"></i>Fecha de Conclusi\xF3n\n        </label>\n        <div class="input-group">\n          <span class="input-group-text bg-light">\n            <i class="bi bi-calendar-x"></i>\n          </span>\n          <input type="date" class="form-control " id="fecha_conclusion" readonly\n            [(ngModel)]="convenio.fecha_conclusion">\n        </div>\n        <div class="form-text text-end">Calculado autom\xE1ticamente</div>\n      </div>\n    </div>\n    <!-- Secci\xF3n 2.5: Amortizaciones - Versi\xF3n Mejorada -->\n    <div class="card mb-4 border-0 shadow-sm">\n      <div class="card-header bg-light d-flex justify-content-between align-items-center">\n        <div class="d-flex align-items-center">\n          <i class="bi bi-cash-stack me-2 fs-5 text-primary"></i>\n          <h5 class="mb-0 fw-bold text-dark">Configuraci\xF3n de Amortizaciones</h5>\n        </div>\n      </div>\n      @if (amortizacionesConfigs.length) {\n      <div class="card-body">\n        <!-- Tarjetas de configuraci\xF3n existentes -->\n        <div class="row g-3">\n          @for (config of amortizacionesConfigs; track config; let i = $index) {\n          <div class="col col-sm-6 col-md-4 col-lg-3">\n            <div class="card border-primary" [class.h-100]="config.isExpanded">\n              <div class="card-header bg-primary text-white py-2">\n                @if (config.isExpanded) {\n                <h6 class="p-2 pointer" (click)="config.isExpanded=false">Bloque #{{i + 1}}</h6>\n                }\n                @if (!config.isExpanded) {\n                <div class="row">\n                  <div class="col pointer" (click)="config.isExpanded=!convenio.id || usuario.id===1">\n                    <h6>{{config.meses}} X {{config.monto | currency}}\n                    </h6>\n                  </div>\n                  <div class="col-auto">\n                    @if (!convenio.id) {\n                    <button class="btn btn-danger btn-sm" (click)="utils.localDelete(amortizacionesConfigs, config)"\n                      title="Eliminar configuraci\xF3n">\n                      <i class="bi bi-trash"></i>\n                    </button>\n                    }\n                  </div>\n                </div>\n                }\n              </div>\n              @if (config.isExpanded) {\n              <div class="card-body">\n                <!-- Input Meses -->\n                <div class="mb-3">\n                  <label for="meses-{{i}}" class="form-label small fw-bold">Plazo en Meses</label>\n                  <div class="input-group">\n                    <span class="input-group-text bg-light">\n                      <i class="bi bi-calendar-month"></i>\n                    </span>\n                    <input type="number" id="meses-{{i}}" class="form-control" [(ngModel)]="config.meses" min="1"\n                      placeholder="Ej. 12">\n                  </div>\n                </div>\n                <!-- Input Monto -->\n                <div class="mb-3">\n                  <label for="monto-{{i}}" class="form-label small fw-bold">Pago Mensual</label>\n                  <div class="input-group">\n                    <span class="input-group-text bg-light">$</span>\n                    <input type="number" id="monto-{{i}}" class="form-control" [(ngModel)]="config.monto" step="0.01"\n                      min="0" placeholder="0.00">\n                  </div>\n                </div>\n              </div>\n              <div class="card-footer bg-transparent border-top-0 text-end">\n                <button class="btn btn-outline-danger btn-sm" (click)="utils.localDelete(amortizacionesConfigs, config)"\n                  title="Eliminar configuraci\xF3n">\n                  <i class="bi bi-trash"></i> Eliminar\n                </button>\n              </div>\n              }\n            </div>\n          </div>\n          }\n          @if (!convenio.id || usuario.id===1) {\n          <div class="col col-sm-6 col-md-4 col-lg-3 text-center align-self-center">\n            @if (amortizacionesConfigs.length>0) {\n            <button class="btn btn-primary" (click)="nuevaAmortizacionConfig()">\n              <i class="bi bi-plus-circle fs-5"></i>\n            </button>\n            }\n          </div>\n          }\n        </div>\n        <!-- Bot\xF3n de acci\xF3n -->\n        <div class="d-flex justify-content-end mt-4">\n          <button class="btn btn-success px-4" (click)="calcularAmortizacionPersonalizada()">\n            <i class="bi bi-calculator me-2"></i> Calcular Amortizaci\xF3n\n          </button>\n        </div>\n      </div>\n      }\n      <!-- Mensaje cuando no hay configuraciones -->\n      @if (!amortizacionesConfigs.length) {\n      <div class="card-body text-center py-5">\n        <i class="bi bi-cash-stack fs-1 text-muted mb-3"></i>\n        <h5 class="text-muted">No hay configuraciones de amortizaci\xF3n</h5>\n        <p class="text-muted">Agrega una nueva configuraci\xF3n para comenzar</p>\n        <button class="btn btn-primary mt-2" (click)="nuevaAmortizacionConfig()">\n          <i class="bi bi-plus-circle me-1"></i> Crear Primera Configuraci\xF3n\n        </button>\n      </div>\n      }\n    </div>\n    <!-- Secci\xF3n 3: Montos (Visualizaci\xF3n) -->\n    <div class="card mb-4 border-0 shadow-sm">\n      <div class="card-header bg-light">\n        <h6 class="mb-0 fw-bold text-muted">\n          <i class="bi bi-cash-stack me-2"></i>Montos (Solo Lectura)\n        </h6>\n      </div>\n      <div class="card-body">\n        <div class="row g-3">\n          <div class="col-md-4">\n            <label for="capital" class="form-label fw-bold text-muted small">Capital</label>\n            <div class="input-group">\n              <span class="input-group-text bg-light">$</span>\n              <input type="text" class="form-control  bg-light" id="capital" readonly\n                [value]="convenio.capital | currency" disabled>\n            </div>\n          </div>\n          <div class="col-md-4">\n            <label for="interes_ordinario" class="form-label fw-bold text-muted small">Inter\xE9s\n              Ordinario</label>\n            <div class="input-group">\n              <span class="input-group-text bg-light">$</span>\n              <input type="text" class="form-control  bg-light" id="interes_ordinario" readonly disabled\n                [value]="convenio.interes_ordinario | currency">\n            </div>\n          </div>\n          <div class="col-md-4">\n            <label for="iva_interes_ordinario" class="form-label fw-bold text-muted small">IVA Inter\xE9s\n              Ordinario</label>\n            <div class="input-group">\n              <span class="input-group-text bg-light">$</span>\n              <input type="text" class="form-control  bg-light" id="iva_interes_ordinario" readonly disabled\n                [value]="convenio.iva_interes_ordinario | currency">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Secci\xF3n 4: Montos Editables -->\n    <div class="card mb-4 border-0 shadow-sm">\n      <div class="card-header bg-light">\n        <h6 class="mb-0 fw-bold text-muted">\n          <i class="bi bi-pencil-square me-2"></i>Montos Editables\n        </h6>\n      </div>\n      <div class="card-body">\n        <div class="row g-3">\n          <div class="col-md-4">\n            <label for="monto_abono_inicial" class="form-label fw-bold text-muted small">Monto Abono\n              Inicial</label>\n            <div class="input-group">\n              <span class="input-group-text">$</span>\n              <input type="number" class="form-control " id="monto_abono_inicial" step="0.01"\n              [(ngModel)]="convenio.monto_abono_inicial" placeholder="0.00" (ngModelChange)="actualizarTabla()">\n            </div>\n            <div class="form-text">Ingrese el monto inicial del convenio</div>\n          </div>\n          @if (credito.juridicos) {\n          <div class="col-md-4">\n            <label for="gastos_judiciales" class="form-label fw-bold text-muted small">\n                Gastos de cobranza\n            </label>\n            <div class="input-group">\n              <span class="input-group-text">$</span>\n              <input type="number" class="form-control " id="gastos_judiciales" step="0.01"\n              [(ngModel)]="convenio.gastos_judiciales" placeholder="0.00" (ngModelChange)="recalcularPorcentaje()">\n            </div>\n            <div class="form-text">Solo para convenios en juridicos</div>\n          </div>\n          <div class="col-md-4">\n            <label for="porcentaje_gastos_cobranza" class="form-label fw-bold text-muted small">\n                Porcentaje de gastos de cobranza\n            </label>\n            <div class="input-group">\n              <span class="input-group-text">%</span>\n              <input type="number" class="form-control " id="porcentaje_gastos_cobranza" step="0.01"\n                [(ngModel)]="porcentaje_gastos_cobranza" placeholder="0.00" readonly>\n            </div>\n            <div class="form-text">Solo para convenios en juridicos</div>\n          </div>\n          }\n        </div>\n      </div>\n    </div>\n    <!-- Secci\xF3n 5: Intereses Moratorios (Visualizaci\xF3n) -->\n    <div class="card mb-4 border-0 shadow-sm">\n      <div class="card-header bg-light">\n        <h6 class="mb-0 fw-bold text-muted">\n          <i class="bi bi-percent me-2"></i>Intereses Moratorios (Solo Lectura)\n        </h6>\n      </div>\n      <div class="card-body">\n        <div class="row g-3">\n          <div class="col-md-6">\n            <label for="interes_moratorio_condonado" class="form-label fw-bold text-muted small">Inter\xE9s\n              Moratorio Condonado</label>\n            <div class="input-group">\n              <span class="input-group-text bg-light">$</span>\n              <input type="text" class="form-control  bg-light" id="interes_moratorio_condonado" readonly\n                [value]="convenio.interes_moratorio_condonado | currency">\n            </div>\n          </div>\n          <div class="col-md-6">\n            <label for="interes_moratorio_cobrado" class="form-label fw-bold text-muted small">Inter\xE9s\n              Moratorio Cobrado</label>\n            <div class="input-group">\n              <span class="input-group-text bg-light">$</span>\n              <input type="text" class="form-control  bg-light" id="interes_moratorio_cobrado" readonly\n                [value]="convenio.interes_moratorio_cobrado | currency">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Secci\xF3n 6: Documentaci\xF3n -->\n    <div class="card mb-4 border-0 shadow-sm">\n      <div class="card-header bg-light">\n        <h6 class="mb-0 fw-bold text-muted">\n          <i class="bi bi-file-earmark me-2"></i>Documentaci\xF3n\n        </h6>\n      </div>\n      <div class="card-body">\n        <div class="mb-3">\n          <label for="pagare_url" class="form-label fw-bold text-muted small">\n            <i class="bi bi-link-45deg me-1"></i>Documento del Convenio\n          </label>\n          <div class="input-group">\n            <span class="input-group-text">\n              <i class="bi bi-globe"></i>\n            </span>\n            <app-file-input #fileInput apiUrl="api/files/convenios/save" key="document" foreign_key="id"\n              [(url)]="convenio.pagare_url" [id]="convenio.id.toString()" [automaticSave]="false" [showButton]="false"\n              [showSimpleDownload]="true" />\n          </div>\n          <div class="form-text">Suba el contrato del convenio en formato pdf</div>\n        </div>\n      </div>\n    </div>\n    <app-amortizaciones [data]="cotizacion" [amortizaciones]="amortizaciones" [showNew]="false" [tipo_convenio]="convenio.tipo_convenio">\n    </app-amortizaciones>\n    <!-- Botones de Acci\xF3n -->\n    <div class="d-flex justify-content-end border-top pt-4">\n      <div>\n        <button type="submit" class="btn btn-primary rounded-pill px-4 shadow" (click)="submitData()"\n          [disabled]="!sePuedeCrearConvenio()">\n          <i class="bi bi-check-circle me-1"></i>Guardar Convenio\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n}' }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: ConvenioService }, { type: CreditoService }, { type: UtilsEstadoCuentaService }, { type: CotizadorService }, { type: ConvenioPagoService }, { type: LocalStorageService }, { type: VanillaDialogService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormConvenioComponent, { className: "FormConvenioComponent", filePath: "src/app/main/convenios/form-convenio/form-convenio.component.ts", lineNumber: 42 });
})();

// src/app/main/convenios/detalles-credito-convenios/detalles-credito-convenios.component.ts
function DetallesCreditoConveniosComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 2)(1, "a", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.sectionShows[section_r1]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r1);
  }
}
function DetallesCreditoConveniosComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "data-view-section", 6)(1, "data-view-section", 7)(2, "data-view-section", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r1.credito.datos_persona_fisica.datos_personales);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.credito.datos_persona_fisica.datos_personales == null ? null : ctx_r1.credito.datos_persona_fisica.datos_personales.telefonos_personales);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.credito.datos_persona_fisica.negocios);
  }
}
function DetallesCreditoConveniosComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "data-view-section", 6)(1, "data-view-section", 7)(2, "data-view-section", 9)(3, "data-view-section", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("data", ctx_r1.credito.datos_personas_morales);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.credito.datos_personas_morales.telefonos);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.credito.datos_personas_morales.representante_legal);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.credito.datos_personas_morales.representante_legal == null ? null : ctx_r1.credito.datos_personas_morales.representante_legal.telefonos_personales);
  }
}
function DetallesCreditoConveniosComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul", 1);
    \u0275\u0275repeaterCreate(5, DetallesCreditoConveniosComponent_Conditional_0_For_6_Template, 3, 3, "li", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DetallesCreditoConveniosComponent_Conditional_0_Conditional_7_Template, 3, 3);
    \u0275\u0275conditionalCreate(8, DetallesCreditoConveniosComponent_Conditional_0_Conditional_8_Template, 4, 4);
    \u0275\u0275element(9, "data-view-section", 3)(10, "data-view-section", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Detalles del Cr\xE9dito ", ctx_r1.credito.id);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.sections);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.credito.datos_persona_fisica ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito.datos_personas_morales ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.credito.datos_personales);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.credito.datos_personales == null ? null : ctx_r1.credito.datos_personales.telefonos_personales);
  }
}
var _DetallesCreditoConveniosComponent = class _DetallesCreditoConveniosComponent {
  constructor(creditoController, route) {
    this.creditoController = creditoController;
    this.route = route;
    this.sectionShows = {};
    this.sections = [
      "Clientes",
      "Cli. Tel\xE9fonos",
      "Negocio"
    ];
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      const id = params["credito_id"];
      if (id) {
        this.credito = yield this.creditoController.find(id, ["*"]);
      }
    }));
  }
};
_DetallesCreditoConveniosComponent.\u0275fac = function DetallesCreditoConveniosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DetallesCreditoConveniosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute));
};
_DetallesCreditoConveniosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetallesCreditoConveniosComponent, selectors: [["app-detalles-credito-convenios"]], decls: 1, vars: 1, consts: [[1, "container-fluid", "p-3", "rounded", "shadow", "my-1", "bg-white"], [1, "nav", "nav-pills", "nav-fill"], [1, "nav-item"], ["title", "Datos Del Aval", 3, "data"], ["title", "Telefonos Del Aval", 3, "data"], [1, "nav-link"], ["title", "Datos Del Cliente", 3, "data"], ["title", "Telefonos Del Cliente", 3, "data"], ["title", "Datos Del Negocio", 3, "data"], ["title", "Representante Legal", 3, "data"], ["title", "Telefonos Del Representante Legal", 3, "data"]], template: function DetallesCreditoConveniosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DetallesCreditoConveniosComponent_Conditional_0_Template, 11, 5, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [DataViewSectionComponent], encapsulation: 2 });
var DetallesCreditoConveniosComponent = _DetallesCreditoConveniosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DetallesCreditoConveniosComponent, [{
    type: Component,
    args: [{ selector: "app-detalles-credito-convenios", imports: [
      DataViewSectionComponent
    ], template: '@if (credito) {\n  <div class="container-fluid p-3 rounded shadow my-1 bg-white">\n    <h3><b>Detalles del Cr\xE9dito {{credito.id}}</b></h3>\n    <ul class="nav nav-pills nav-fill">\n      @for (section of sections; track section) {\n        <li class="nav-item">\n          <a class="nav-link" [class.active]="sectionShows[section]">{{section}}</a>\n        </li>\n      }\n    </ul>\n    @if (credito.datos_persona_fisica) {\n      <data-view-section title="Datos Del Cliente" [data]="credito.datos_persona_fisica.datos_personales" />\n      <data-view-section title="Telefonos Del Cliente" [data]="credito.datos_persona_fisica.datos_personales?.telefonos_personales"/>\n      <data-view-section title="Datos Del Negocio" [data]="credito.datos_persona_fisica.negocios" />\n    }\n    @if (credito.datos_personas_morales) {\n      <data-view-section title="Datos Del Cliente" [data]="credito.datos_personas_morales" />\n      <data-view-section title="Telefonos Del Cliente" [data]="credito.datos_personas_morales.telefonos" />\n      <data-view-section title="Representante Legal" [data]="credito.datos_personas_morales.representante_legal" />\n      <data-view-section title="Telefonos Del Representante Legal" [data]="credito.datos_personas_morales.representante_legal?.telefonos_personales" />\n    }\n    <data-view-section title="Datos Del Aval" [data]="credito.datos_personales" />\n    <data-view-section title="Telefonos Del Aval" [data]="credito.datos_personales?.telefonos_personales" />\n  </div>\n}' }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetallesCreditoConveniosComponent, { className: "DetallesCreditoConveniosComponent", filePath: "src/app/main/convenios/detalles-credito-convenios/detalles-credito-convenios.component.ts", lineNumber: 16 });
})();

// src/app/main/convenios/convenios.routes.ts
var conveniosRoutes = [
  { path: "", redirectTo: "atrasados", pathMatch: "full" },
  { path: "list", component: ListConveniosComponent },
  { path: "list/:credito_id", component: ListConveniosComponent },
  { path: "nuevo/:credito_id", component: FormConvenioComponent },
  { path: "editar/:convenio_id", component: FormConvenioComponent },
  { path: "detalles/:credito_id", component: DetallesCreditoConveniosComponent },
  { path: "atrasados", component: CreditosAtrasadosConveniosComponent }
];
export {
  conveniosRoutes
};
//# sourceMappingURL=chunk-GN44JHXM.js.map
