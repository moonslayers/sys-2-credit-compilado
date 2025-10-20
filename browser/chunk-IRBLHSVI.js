import {
  ProcesoJudicialService
} from "./chunk-Y2IL2FJA.js";
import {
  ViewGestionesCobroComponent
} from "./chunk-XMZ66OSG.js";
import {
  ViewRelacionConveniosComponent
} from "./chunk-B5NEAJIS.js";
import {
  EjecucionCobroComponent
} from "./chunk-2FRR3TXC.js";
import "./chunk-BBNJFIFW.js";
import "./chunk-3HCUHHOO.js";
import {
  CREDITOS_FILTERS
} from "./chunk-RJ4CVF2L.js";
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
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import "./chunk-SDTK5VY4.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import "./chunk-NXIA6ZMF.js";
import {
  FileInputComponent
} from "./chunk-5BMNPTRZ.js";
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
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-XKAAYCNZ.js";
import {
  DatePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  Pipe,
  ViewChild,
  filter,
  firstValueFrom,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
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
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/main/juridico/atrasados-creditos/atrasados-creditos.component.ts
var _c0 = () => ["creditosPagos", "productosFinancieros", "usuarios", "sucursales", "datosPersonaFisica.datosPersonales", "datosPersonasMorales", "estadosCuenta", "datosPersonaFisica.negocios"];
var TABLA_DEF = {
  emptyMsg: "No hay creditos con estados de cuenta activos.",
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "row",
      header: "Estado",
      function: (credito) => {
        return credito.estado_cuenta?.credito_status ?? "CARTERA";
      }
    },
    {
      key: "row",
      header: "Nombre Cliente",
      function: (row, utils) => {
        return utils.nombreClienteFromCredito(row);
      }
    },
    {
      key: "row",
      header: "Nombre Comercial",
      function: (row, utils) => {
        return utils.nombreNegocioFromCredito(row);
      }
    },
    {
      key: "estados_cuenta",
      header: "Liquidar Sin Moratorios",
      function: (estado) => {
        if (typeof estado.estado_cuenta == "string") {
          return JSON.parse(estado.estado_cuenta).estadistica["LIQUIDAR SIN MORATORIOS"].toString();
        }
        return estado.estado_cuenta.estadistica["LIQUIDAR SIN MORATORIOS"].toString();
      },
      pipe: "currency"
    },
    {
      key: "estados_cuenta",
      header: "Pagos Vencidos",
      function: (estado) => {
        return (estado.pagos_requeridos - estado.pagos_realizados).toString();
      }
    },
    {
      key: "estados_cuenta",
      header: "Vencido desde",
      subKey: "vencido_desde",
      pipe: "date"
    },
    {
      key: "productos_financieros",
      subKey: "alias",
      header: "P Financiero"
    },
    {
      key: "sucursales",
      subKey: "nombre",
      header: "\xDAltimo Estado Procesal"
    },
    {
      key: "created_at",
      header: "Fecha \xDAltimo Estado Procesal",
      pipe: "date"
    }
  ]
};
var EDITAR_BUTTON = {
  style: {
    button: "btn btn-sm btn-info",
    icon: "bi bi-eye-fill"
  }
};
var ASIGNAR_JURIDICO = {
  key: "juridico",
  text: "Pasar a Juridico",
  style: {
    button: "btn btn-sm btn-primary",
    icon: "bi bi-journal-plus"
  }
};
var BARRA_BUTONES = [
  {
    key: "no-juridico",
    text: "CARTERA",
    style: {
      button: "btn btn-secondary scale-05 shadow"
    }
  },
  {
    key: "no-juridico",
    text: "CARTERA EXTRAJUDICIAL",
    style: {
      button: "btn btn-secondary scale-05 shadow"
    }
  },
  {
    key: "no-juridico",
    text: "CARTERA JUDICIAL",
    style: {
      button: "btn btn-secondary scale-05 shadow"
    }
  },
  {
    key: "ver-todos",
    text: "TODOS",
    style: {
      button: "btn btn-secondary scale-05 shadow"
    }
  }
];
var _AtrasadosCreditosComponent = class _AtrasadosCreditosComponent {
  constructor(creditoController, router) {
    this.creditoController = creditoController;
    this.router = router;
    this.tabla = TABLA_DEF;
    this.edit = EDITAR_BUTTON;
    this.advancedSearch = CREDITOS_ADVANCED_SEARCH;
    this.simpleFilters = CREDITOS_FILTERS;
    this.asignarJuridico = ASIGNAR_JURIDICO;
    this.barraButtons = BARRA_BUTONES;
    this.filtros = {
      filtro: "estado",
      meses_vencidos: null,
      incluir_juridico: null,
      monto_atrasado: null,
      adeudo_total: null
    };
  }
  onRowButtonClick(event) {
    if (event.row.juridicos) {
      this.router.navigate(["/main/juridico/" + event.row.id + "/" + event.row.juridicos.id]);
      return;
    }
    this.router.navigate(["/main/juridico/" + event.row.id + "/asignar"]);
  }
  onHeaderButtonClick(key) {
    switch (key) {
      case "no-juridico":
        this.filtros = __spreadProps(__spreadValues({}, this.filtros), {
          incluir_juridico: -1
        });
        break;
      case "ver-todos":
        this.filtros = __spreadProps(__spreadValues({}, this.filtros), {
          incluir_juridico: 1
        });
    }
  }
  limpiarFiltros() {
    this.filtros.meses_vencidos = null;
    this.filtros.incluir_juridico = null;
    this.filtros.monto_atrasado = null;
    this.filtros.adeudo_total = null;
  }
};
_AtrasadosCreditosComponent.\u0275fac = function AtrasadosCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AtrasadosCreditosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(Router));
};
_AtrasadosCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AtrasadosCreditosComponent, selectors: [["app-atrasados-creditos"]], decls: 17, vars: 17, consts: [["title", "Creditos con Pagos Vencidos", "getMethod", "atrasados", 3, "rowButtonClickEvent", "filtrosLimpios", "barraButtonClickEvent", "tableDefinition", "controller", "rowEliminar", "rowEditarButton", "rowEditarRoute", "relations", "getExtra", "advancedSearch", "simpleFilteredSearch", "agregar", "eliminar", "eliminados", "barraButtons"], ["advanced-search", "", 1, "row"], [1, "col-12", "text-center", "p-1", "my-1"], [1, "input-group"], [1, "input-group-text"], ["placeholder", "pagos vencidos", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Ingrese una cantidad", "type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"]], template: function AtrasadosCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("rowButtonClickEvent", function AtrasadosCreditosComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onRowButtonClick($event);
    })("filtrosLimpios", function AtrasadosCreditosComponent_Template_app_tabla_filtrosLimpios_0_listener() {
      return ctx.limpiarFiltros();
    })("barraButtonClickEvent", function AtrasadosCreditosComponent_Template_app_tabla_barraButtonClickEvent_0_listener($event) {
      return ctx.onHeaderButtonClick($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
    \u0275\u0275text(5, "Ctd Pagos Vencidos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 5);
    \u0275\u0275twoWayListener("ngModelChange", function AtrasadosCreditosComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.meses_vencidos, $event) || (ctx.filtros.meses_vencidos = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 2)(8, "div", 3)(9, "label", 4);
    \u0275\u0275text(10, "Monto atrasado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function AtrasadosCreditosComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.monto_atrasado, $event) || (ctx.filtros.monto_atrasado = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 2)(13, "div", 3)(14, "label", 4);
    \u0275\u0275text(15, "Adeudo Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function AtrasadosCreditosComponent_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtros.adeudo_total, $event) || (ctx.filtros.adeudo_total = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("controller", ctx.creditoController)("rowEliminar", false)("rowEditarButton", ctx.edit)("rowEditarRoute", "/main/juridico/")("relations", \u0275\u0275pureFunction0(16, _c0))("getExtra", ctx.filtros)("advancedSearch", ctx.advancedSearch)("simpleFilteredSearch", ctx.simpleFilters)("agregar", false)("eliminar", false)("eliminados", false)("barraButtons", ctx.barraButtons);
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
var AtrasadosCreditosComponent = _AtrasadosCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AtrasadosCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-atrasados-creditos", imports: [
      TablaComponent,
      FormsModule
    ], template: `<app-tabla 
title="Creditos con Pagos Vencidos"
[tableDefinition]="tabla"
[controller]="creditoController"
[rowEliminar]="false"
[rowEditarButton]="edit"
[rowEditarRoute]="'/main/juridico/'"
[relations]="['creditosPagos','productosFinancieros','usuarios','sucursales','datosPersonaFisica.datosPersonales','datosPersonasMorales','estadosCuenta','datosPersonaFisica.negocios']"
[getExtra]="filtros"
[advancedSearch]="advancedSearch"
[simpleFilteredSearch]="simpleFilters"
[agregar]="false"
[eliminar]="false"
[eliminados]="false"
(rowButtonClickEvent)="onRowButtonClick($event)"
(filtrosLimpios)="limpiarFiltros()"
(barraButtonClickEvent)="onHeaderButtonClick($event)"
[barraButtons]="barraButtons"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AtrasadosCreditosComponent, { className: "AtrasadosCreditosComponent", filePath: "src/app/main/juridico/atrasados-creditos/atrasados-creditos.component.ts", lineNumber: 137 });
})();

// src/app/controllers/juridico.service.ts
var _JuridicoService = class _JuridicoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "juridicos";
    this.columns = [
      "credito_id",
      "fecha_asignacion",
      "fecha_demanda",
      "fecha_admision",
      "estado",
      "fecha_convenio",
      "documentos_asignados",
      "expediente",
      "juzgado",
      "tipo_juicio",
      "emplazamiento_efectivo",
      "oficios_localizacion",
      "domicilio_alterno",
      "tipo_juicio_otro",
      "documentos_otros",
      "usuario_id"
    ];
  }
};
_JuridicoService.\u0275fac = function JuridicoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoService)(\u0275\u0275inject(Injector));
};
_JuridicoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JuridicoService, factory: _JuridicoService.\u0275fac, providedIn: "any" });
var JuridicoService = _JuridicoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/controllers/juridico.juzgado.evento.service.ts
var _JuridicoJuzgadoEventoService = class _JuridicoJuzgadoEventoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "juridicos-juzgados-eventos";
    this.columns = [
      "juridico_id",
      "descripcion",
      "fecha",
      "usuario_id"
    ];
  }
};
_JuridicoJuzgadoEventoService.\u0275fac = function JuridicoJuzgadoEventoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoJuzgadoEventoService)(\u0275\u0275inject(Injector));
};
_JuridicoJuzgadoEventoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JuridicoJuzgadoEventoService, factory: _JuridicoJuzgadoEventoService.\u0275fac, providedIn: "any" });
var JuridicoJuzgadoEventoService = _JuridicoJuzgadoEventoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoJuzgadoEventoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/controllers/credito.despacho.service.ts
var _CreditoDespachoService = class _CreditoDespachoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "creditos_despachos";
    this.columns = [
      "credito_id",
      "despacho_id",
      "porcentaje_absorcion",
      "porcentaje_cobro",
      "porcentaje_cobro_400",
      "fecha_inicio",
      "fecha_fin",
      "usuario_id"
    ];
  }
};
_CreditoDespachoService.\u0275fac = function CreditoDespachoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoDespachoService)(\u0275\u0275inject(Injector));
};
_CreditoDespachoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoDespachoService, factory: _CreditoDespachoService.\u0275fac, providedIn: "any" });
var CreditoDespachoService = _CreditoDespachoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoDespachoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/juridico/form-juridico/form-juridico.component.ts
var _c02 = (a0) => ({ credito_id: a0 });
function FormJuridicoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4)(2, "button", 5);
    \u0275\u0275listener("click", function FormJuridicoComponent_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteJuridico());
    });
    \u0275\u0275text(3, "Eliminar");
    \u0275\u0275elementEnd()()();
  }
}
var FORM_DEF = [
  {
    key: "fecha_asignacion",
    label: "Fecha de asignaci\xF3n",
    type: "date"
  },
  {
    key: "documentos_asignados",
    label: "Documentos asignados",
    options: ["PAGARE", "CONTRATO ORIGINAL", "PAGARE Y CONTRATO ORIGINAL", "CONVENIO", "NINGUNO"],
    defaultOption: "NINGUNO"
  },
  {
    key: "estado",
    label: "Estado:",
    defaultOption: "EXTRAJUDICIAL",
    options: ["EXTRAJUDICIAL", "JUDICIAL", "DEPURACI\xD3N DE SALDOS CONTABLES"]
  },
  {
    key: "expediente",
    label: "Expediente",
    type: "text"
  },
  {
    key: "juzgado",
    label: "Juzgado",
    apiUrl: "api/juzgados",
    keyList: "id",
    keyDetalle: "nombre"
  },
  {
    key: "tipo_juicio",
    label: "Tipo de juicio",
    options: ["ORAL MERCANTIL", "EJECUTIVO MERCANTIL"]
  }
];
var _FormJuridicoComponent = class _FormJuridicoComponent {
  constructor(juridicoController, eventoController, route, utils, dialogService, creditoController, creditoDespachoController) {
    this.juridicoController = juridicoController;
    this.eventoController = eventoController;
    this.route = route;
    this.utils = utils;
    this.dialogService = dialogService;
    this.creditoController = creditoController;
    this.creditoDespachoController = creditoDespachoController;
    this.form = FORM_DEF;
    this.editChange = new EventEmitter();
    this.formLocal = false;
    this.deleteButton = {
      text: "Eliminar",
      style: {
        div: "col-auto p-1",
        icon: "bi bi-thrash-fill",
        button: "btn btn-sm btn-danger scale-05"
      }
    };
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      this.credito_id = this.utils.intOrNull(params.get("credito_id"));
      const juridico_id = this.utils.intOrNull(params.get("juridico_id"));
      if (juridico_id) {
        this.edit = yield this.juridicoController.find(juridico_id);
      }
    }));
  }
  deleteJuridico() {
    return __async(this, null, function* () {
      if (!this.edit)
        return;
      const resp = yield firstValueFrom(this.dialogService.show({
        title: "Confirmar eliminaci\xF3n",
        body: "\xBFEst\xE1 seguro de que desea eliminar este registro?",
        respYes: "S\xED, eliminar",
        respNo: "No, cancelar"
      }).pipe(filter((v) => v != null)));
      if (resp.closedByAgree) {
        if (this.credito_id) {
          const credito = yield this.creditoController.find(this.credito_id, ["*"]);
          if (credito) {
            const despachoActivo = this.utils.despachoActualFromCredito(credito, /* @__PURE__ */ new Date());
            if (despachoActivo) {
              yield this.creditoDespachoController.switch(despachoActivo);
            }
            this.creditoController.actualizarEstadoCuenta(credito);
          }
        }
        yield this.juridicoController.switch(this.edit.id);
        this.edit = void 0;
        this.editChange.emit(this.edit);
      }
    });
  }
  crearEventoJuridico(data) {
    let actualizacion = [];
    for (const key of Object.keys(data)) {
      actualizacion.push(key.toUpperCase() + " fue actualizado a " + (data[key]?.toString().toUpperCase() ?? "nulo"));
    }
    this.eventoController.new({
      juridico_id: this.edit.id,
      fecha: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
      descripcion: "SISTEMA: " + actualizacion.join(", ")
    });
  }
};
_FormJuridicoComponent.\u0275fac = function FormJuridicoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormJuridicoComponent)(\u0275\u0275directiveInject(JuridicoService), \u0275\u0275directiveInject(JuridicoJuzgadoEventoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(VanillaDialogService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(CreditoDespachoService));
};
_FormJuridicoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormJuridicoComponent, selectors: [["app-form-juridico"]], inputs: { edit: "edit", formLocal: "formLocal" }, outputs: { editChange: "editChange" }, decls: 5, vars: 8, consts: [[1, "fw-bold"], [1, "border", "border-primary"], [1, "row"], [3, "editChange", "updatedData", "form", "edit", "localForm", "controller", "formExtra"], [1, "col-auto", "ms-auto"], [1, "btn", "btn-danger", 3, "click"]], template: function FormJuridicoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 0);
    \u0275\u0275text(1, "Datos de Jur\xEDdico");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "hr", 1);
    \u0275\u0275conditionalCreate(3, FormJuridicoComponent_Conditional_3_Template, 4, 0, "div", 2);
    \u0275\u0275elementStart(4, "app-generic-form", 3);
    \u0275\u0275twoWayListener("editChange", function FormJuridicoComponent_Template_app_generic_form_editChange_4_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function FormJuridicoComponent_Template_app_generic_form_editChange_4_listener($event) {
      return ctx.editChange.emit($event);
    })("updatedData", function FormJuridicoComponent_Template_app_generic_form_updatedData_4_listener($event) {
      return ctx.crearEventoJuridico($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.edit ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("localForm", ctx.formLocal)("controller", ctx.juridicoController)("formExtra", \u0275\u0275pureFunction1(6, _c02, ctx.credito_id ?? 0));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormJuridicoComponent = _FormJuridicoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormJuridicoComponent, [{
    type: Component,
    args: [{ selector: "app-form-juridico", imports: [
      GenericFormComponent
    ], template: '<h5 class="fw-bold">Datos de Jur\xEDdico</h5>\n<hr class="border border-primary">\n@if (edit) {\n<div class="row">\n    <div class="col-auto ms-auto">\n        <button class="btn btn-danger" (click)="deleteJuridico()">Eliminar</button>\n    </div>\n</div>\n}\n<app-generic-form \n    [form]="form"\n    [(edit)]="edit"\n    (editChange)="editChange.emit($event)"\n    [localForm]="formLocal"\n    [controller]="juridicoController"\n    [formExtra]="{credito_id:credito_id??0}"\n    (updatedData)="crearEventoJuridico($event)"\n/>\n' }]
  }], () => [{ type: JuridicoService }, { type: JuridicoJuzgadoEventoService }, { type: ActivatedRoute }, { type: UtilsService }, { type: VanillaDialogService }, { type: CreditoService }, { type: CreditoDespachoService }], { edit: [{
    type: Input
  }], editChange: [{
    type: Output
  }], formLocal: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormJuridicoComponent, { className: "FormJuridicoComponent", filePath: "src/app/main/juridico/form-juridico/form-juridico.component.ts", lineNumber: 59 });
})();

// src/app/main/juridico/form-juridico-despacho/form-juridico-despacho.component.ts
var _c03 = ["genericForm"];
var _c1 = (a0) => ({ credito_id: a0 });
function FormJuridicoDespachoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 7);
    \u0275\u0275listener("click", function FormJuridicoDespachoComponent_Conditional_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete());
    });
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd()();
  }
}
var FORM_DEF2 = [
  {
    key: "despacho_id",
    label: "Despacho",
    apiUrl: "api/despachos",
    keyList: "id",
    keyDetalle: "nombre",
    style: {
      div: "col-12 col-sm-6 p-3"
    }
  },
  {
    key: "fecha_inicio",
    label: "Fecha Inicio",
    type: "date",
    validator: {
      required: true
    },
    style: {
      div: "col-12 col-sm-6 p-3"
    }
  }
];
var _FormJuridicoDespachoComponent = class _FormJuridicoDespachoComponent {
  constructor(creditoDespachoController, dialogService, utils) {
    this.creditoDespachoController = creditoDespachoController;
    this.dialogService = dialogService;
    this.utils = utils;
    this.editChange = new EventEmitter();
    this.localForm = false;
    this.form = FORM_DEF2;
  }
  ngOnChanges(changes) {
    if (this.credito && changes["credito"] && this.credito.creditos_despachos) {
      this.edit = this.utils.despachoActualFromCredito(this.credito, /* @__PURE__ */ new Date());
    }
  }
  delete() {
    return __async(this, null, function* () {
      if (this.edit?.id) {
        const resp = yield firstValueFrom(this.dialogService.show({
          title: "Confirmar eliminaci\xF3n",
          body: "\xBFEst\xE1 seguro de que desea eliminar este despacho?",
          respYes: "S\xED, eliminar",
          respNo: "No, cancelar"
        }).pipe(filter((v) => v != null)));
        if (resp.closedByAgree) {
          const success = yield this.creditoDespachoController.switch(this.edit);
          if (success) {
            this.edit = void 0;
            this.genericForm?.cleanForm();
          }
        }
      }
    });
  }
};
_FormJuridicoDespachoComponent.\u0275fac = function FormJuridicoDespachoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormJuridicoDespachoComponent)(\u0275\u0275directiveInject(CreditoDespachoService), \u0275\u0275directiveInject(VanillaDialogService), \u0275\u0275directiveInject(UtilsService));
};
_FormJuridicoDespachoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormJuridicoDespachoComponent, selectors: [["app-form-juridico-despacho"]], viewQuery: function FormJuridicoDespachoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.genericForm = _t.first);
  }
}, inputs: { credito: "credito", edit: "edit", localForm: "localForm" }, outputs: { editChange: "editChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 8, vars: 9, consts: [["genericForm", ""], [1, "row"], [1, "col", "p-1"], [1, "fw-bold"], [1, "col-auto", "p-1"], [1, "border", "border-primary", "my-1"], [3, "editChange", "controller", "form", "isolatedForm", "edit", "localForm", "formExtra"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-trash"]], template: function FormJuridicoDespachoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h5", 3);
    \u0275\u0275text(3, "Despacho asignado");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, FormJuridicoDespachoComponent_Conditional_4_Template, 3, 0, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "hr", 5);
    \u0275\u0275elementStart(6, "app-generic-form", 6, 0);
    \u0275\u0275twoWayListener("editChange", function FormJuridicoDespachoComponent_Template_app_generic_form_editChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("editChange", function FormJuridicoDespachoComponent_Template_app_generic_form_editChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.editChange.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx.edit == null ? null : ctx.edit.id) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("controller", ctx.creditoDespachoController)("form", ctx.form)("isolatedForm", true);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("localForm", ctx.localForm)("formExtra", \u0275\u0275pureFunction1(7, _c1, ctx.credito == null ? null : ctx.credito.id));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormJuridicoDespachoComponent = _FormJuridicoDespachoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormJuridicoDespachoComponent, [{
    type: Component,
    args: [{ selector: "app-form-juridico-despacho", imports: [
      GenericFormComponent
    ], template: '<div class="row">\n    <div class="col p-1">\n        <h5 class="fw-bold">Despacho asignado</h5>\n    </div>\n    @if (edit?.id) {\n    <div class="col-auto p-1">\n        <button class="btn btn-danger" (click)="delete()"><i class="bi bi-trash"></i></button>\n    </div>\n    }\n</div>\n<hr class="border border-primary my-1">\n<app-generic-form #genericForm     \n    [controller]="creditoDespachoController" \n    [form]="form" \n    [isolatedForm]="true" \n    [(edit)]="edit"\n    (editChange)="editChange.emit($event)" \n    [localForm]="localForm" \n    [formExtra]="{\n        credito_id:credito?.id\n        }">\n</app-generic-form>' }]
  }], () => [{ type: CreditoDespachoService }, { type: VanillaDialogService }, { type: UtilsService }], { genericForm: [{
    type: ViewChild,
    args: ["genericForm"]
  }], credito: [{
    type: Input
  }], edit: [{
    type: Input
  }], editChange: [{
    type: Output
  }], localForm: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormJuridicoDespachoComponent, { className: "FormJuridicoDespachoComponent", filePath: "src/app/main/juridico/form-juridico-despacho/form-juridico-despacho.component.ts", lineNumber: 42 });
})();

// src/app/main/juridico/juridico-eventos-juzgado/juridico-eventos-juzgado.component.ts
function JuridicoEventosJuzgadoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6)(2, "label", 7);
    \u0275\u0275text(3, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function JuridicoEventosJuzgadoComponent_Conditional_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eventoForm.fecha, $event) || (ctx_r1.eventoForm.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "label", 7);
    \u0275\u0275text(7, "Descripcion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 10);
    \u0275\u0275twoWayListener("ngModelChange", function JuridicoEventosJuzgadoComponent_Conditional_4_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eventoForm.descripcion, $event) || (ctx_r1.eventoForm.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "button", 13);
    \u0275\u0275listener("click", function JuridicoEventosJuzgadoComponent_Conditional_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nuevoEvento());
    });
    \u0275\u0275text(12, "Guardar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventoForm.fecha);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventoForm.descripcion);
  }
}
function JuridicoEventosJuzgadoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " No hay Eventos Registrados ");
    \u0275\u0275elementEnd();
  }
}
function JuridicoEventosJuzgadoComponent_Conditional_6_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "button", 15);
    \u0275\u0275listener("click", function JuridicoEventosJuzgadoComponent_Conditional_6_For_11_Template_button_click_7_listener() {
      const evento_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delete(evento_r4));
    });
    \u0275\u0275element(8, "i", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const evento_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, evento_r4.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(evento_r4.descripcion);
  }
}
function JuridicoEventosJuzgadoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 14)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275repeaterCreate(10, JuridicoEventosJuzgadoComponent_Conditional_6_For_11_Template, 9, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r1.credito == null ? null : ctx_r1.credito.juridicos == null ? null : ctx_r1.credito.juridicos.juridicos_juzgados_eventos == null ? null : ctx_r1.credito.juridicos.juridicos_juzgados_eventos.reverse());
  }
}
var _JuridicoEventosJuzgadoComponent = class _JuridicoEventosJuzgadoComponent {
  constructor(eventoController, utils, dialogService) {
    this.eventoController = eventoController;
    this.utils = utils;
    this.dialogService = dialogService;
    this.eventoForm = {
      juridico_id: 0,
      descripcion: "",
      fecha: "",
      usuario_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    };
    this.showForm = false;
  }
  ngOnChanges(changes) {
    if (changes["credito"] && this.credito && this.credito.juridicos) {
      this.eventoForm.juridico_id = this.credito.juridicos.id;
    }
  }
  nuevoEvento() {
    return __async(this, null, function* () {
      const resp = yield firstValueFrom(this.dialogService.show({
        title: "Guardar nuevo evento",
        body: "\xBFEst\xE1 seguro de que desea guardar este nuevo evento?",
        respYes: "S\xED, guardar",
        respNo: "No, cancelar"
      }).pipe(filter((v) => v != null)));
      if (resp.closedByAgree) {
        if (!this.credito?.juridicos) {
          this.dialogService.show({
            title: "Error",
            body: "Para agregar eventos de juzgados, el cr\xE9dito debe estar primero en estado jur\xEDdico. Actualice el estado del cr\xE9dito a jur\xEDdico para habilitar esta funcionalidad.",
            respYes: "Aceptar"
          });
          return;
        }
        if (!this.credito.juridicos.juridicos_juzgados_eventos) {
          this.credito.juridicos.juridicos_juzgados_eventos = [];
        }
        const res = yield this.eventoController.new(this.eventoForm);
        if (!res) {
          this.dialogService.show({
            title: "Error",
            body: "No se pudo crear el evento.",
            respYes: "Aceptar"
          });
          return;
        }
        this.credito.juridicos.juridicos_juzgados_eventos.push(res);
        this.eventoForm = {
          juridico_id: this.credito.juridicos.id,
          descripcion: "",
          fecha: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
          usuario_id: 0,
          id: 0,
          deleted_at: null,
          created_at: "",
          updated_at: null
        };
        this.showForm = false;
      }
    });
  }
  delete(row) {
    return __async(this, null, function* () {
      const res = yield this.eventoController.switch(row, {}, false);
      if (res) {
        this.utils.localDelete(this.credito?.juridicos?.juridicos_juzgados_eventos, row);
      }
    });
  }
};
_JuridicoEventosJuzgadoComponent.\u0275fac = function JuridicoEventosJuzgadoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoEventosJuzgadoComponent)(\u0275\u0275directiveInject(JuridicoJuzgadoEventoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(VanillaDialogService));
};
_JuridicoEventosJuzgadoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JuridicoEventosJuzgadoComponent, selectors: [["app-juridico-eventos-juzgado"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 7, vars: 3, consts: [[1, "row"], [1, "col-auto", "ms-auto"], [1, "btn", "btn-success", 3, "click"], [1, "container", "p-3", "shadow", "rounded", "my-2"], [1, "p-5", "text-center"], [1, "table-responsive"], [1, "input-group"], [1, "input-group-text"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group", "mt-2"], ["rows", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mt-2"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click"], [1, "table"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash-fill"]], template: function JuridicoEventosJuzgadoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function JuridicoEventosJuzgadoComponent_Template_button_click_2_listener() {
      return ctx.showForm = !ctx.showForm;
    });
    \u0275\u0275text(3, "Nuevo Evento");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(4, JuridicoEventosJuzgadoComponent_Conditional_4_Template, 13, 2, "div", 3);
    \u0275\u0275conditionalCreate(5, JuridicoEventosJuzgadoComponent_Conditional_5_Template, 2, 0, "div", 4);
    \u0275\u0275conditionalCreate(6, JuridicoEventosJuzgadoComponent_Conditional_6_Template, 12, 0, "div", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.showForm ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(ctx.credito == null ? null : ctx.credito.juridicos == null ? null : ctx.credito.juridicos.juridicos_juzgados_eventos == null ? null : ctx.credito.juridicos.juridicos_juzgados_eventos.length) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.credito == null ? null : ctx.credito.juridicos == null ? null : ctx.credito.juridicos.juridicos_juzgados_eventos == null ? null : ctx.credito.juridicos.juridicos_juzgados_eventos.length) ? 6 : -1);
  }
}, dependencies: [
  DatePipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  max-height: 35rem;\n}\n/*# sourceMappingURL=juridico-eventos-juzgado.component.css.map */"] });
var JuridicoEventosJuzgadoComponent = _JuridicoEventosJuzgadoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoEventosJuzgadoComponent, [{
    type: Component,
    args: [{ selector: "app-juridico-eventos-juzgado", imports: [
      DatePipe,
      FormsModule
    ], template: `<div class="row">
  <div class="col-auto ms-auto">
    <button class="btn btn-success" (click)="showForm=!showForm">Nuevo Evento</button>
  </div>
</div>
@if (showForm) {
  <div class="container p-3 shadow rounded my-2">
    <div class="input-group">
      <label class="input-group-text">Fecha</label>
      <input type="date" class="form-control" [(ngModel)]="eventoForm.fecha">
    </div>
    <div class="input-group mt-2">
      <label class="input-group-text">Descripcion</label>
      <textarea rows="4" class="form-control" [(ngModel)]="eventoForm.descripcion"></textarea>
    </div>
    <div class="row mt-2">
      <div class="col text-center">
        <button class="btn btn-primary" (click)="nuevoEvento()">Guardar</button>
      </div>
    </div>
  </div>
}
@if (!credito?.juridicos?.juridicos_juzgados_eventos?.length) {
  <div class="p-5 text-center">
    No hay Eventos Registrados
  </div>
}
@if (credito?.juridicos?.juridicos_juzgados_eventos?.length) {
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Descripci\xF3n</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        @for (evento of credito?.juridicos?.juridicos_juzgados_eventos?.reverse(); track evento) {
          <tr>
            <td>{{evento.fecha|date:'dd/MM/yyyy'}}</td>
            <td>{{evento.descripcion}}</td>
            <td><button class="btn btn-outline-danger btn-sm" (click)="delete(evento)"><i class="bi bi-trash-fill"></i></button></td>
          </tr>
        }
      </tbody>
    </table>
  </div>
}`, styles: ["/* src/app/main/juridico/juridico-eventos-juzgado/juridico-eventos-juzgado.component.css */\n.table-responsive {\n  max-height: 35rem;\n}\n/*# sourceMappingURL=juridico-eventos-juzgado.component.css.map */\n"] }]
  }], () => [{ type: JuridicoJuzgadoEventoService }, { type: UtilsService }, { type: VanillaDialogService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JuridicoEventosJuzgadoComponent, { className: "JuridicoEventosJuzgadoComponent", filePath: "src/app/main/juridico/juridico-eventos-juzgado/juridico-eventos-juzgado.component.ts", lineNumber: 20 });
})();

// src/app/controllers/juridico.evento.cobro.service.ts
var _JuridicoEventoCobroService = class _JuridicoEventoCobroService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "juridicos-eventos-cobro";
    this.columns = [
      "juridico_id",
      "modalidad",
      "resultado",
      "comentario",
      "fecha",
      "usuario_id"
    ];
  }
};
_JuridicoEventoCobroService.\u0275fac = function JuridicoEventoCobroService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoEventoCobroService)(\u0275\u0275inject(Injector));
};
_JuridicoEventoCobroService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JuridicoEventoCobroService, factory: _JuridicoEventoCobroService.\u0275fac, providedIn: "any" });
var JuridicoEventoCobroService = _JuridicoEventoCobroService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoEventoCobroService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/juridico/bitacora-cobranza/bitacora-cobranza.component.ts
function BitacoraCobranzaComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, " No hay Eventos de Cobro Registrados ");
    \u0275\u0275elementEnd();
  }
}
function BitacoraCobranzaComponent_Conditional_3_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evento_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, evento_r1.fecha, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(evento_r1.modalidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(evento_r1.comentario);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(evento_r1.resultado);
  }
}
function BitacoraCobranzaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "table", 2)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Comentario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Resultado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, BitacoraCobranzaComponent_Conditional_3_For_14_Template, 10, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.cobros);
  }
}
var _BitacoraCobranzaComponent = class _BitacoraCobranzaComponent {
  constructor(cobroController) {
    this.cobroController = cobroController;
    this.cobros = [];
  }
  ngOnInit() {
    this.setCobros();
  }
  setCobros() {
    return __async(this, null, function* () {
      this.cobros = yield this.cobroController.all({
        deleted_at: null,
        juridico_id: this.credito?.juridicos?.id
      });
    });
  }
};
_BitacoraCobranzaComponent.\u0275fac = function BitacoraCobranzaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BitacoraCobranzaComponent)(\u0275\u0275directiveInject(JuridicoEventoCobroService));
};
_BitacoraCobranzaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BitacoraCobranzaComponent, selectors: [["app-bitacora-cobranza"]], inputs: { credito: "credito" }, decls: 4, vars: 2, consts: [[1, "p-5", "text-center"], [1, "table-responsive"], [1, "table"]], template: function BitacoraCobranzaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5");
    \u0275\u0275text(1, "Bit\xE1cora de Eventos de Juzgado");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, BitacoraCobranzaComponent_Conditional_2_Template, 2, 0, "div", 0);
    \u0275\u0275conditionalCreate(3, BitacoraCobranzaComponent_Conditional_3_Template, 15, 0, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.cobros.length ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.cobros.length ? 3 : -1);
  }
}, dependencies: [DatePipe], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  max-height: 35rem;\n}\n/*# sourceMappingURL=bitacora-cobranza.component.css.map */"] });
var BitacoraCobranzaComponent = _BitacoraCobranzaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BitacoraCobranzaComponent, [{
    type: Component,
    args: [{ selector: "app-bitacora-cobranza", imports: [
      DatePipe
    ], template: `<h5>Bit\xE1cora de Eventos de Juzgado</h5>
@if (!cobros.length) {
  <div class="p-5 text-center">
    No hay Eventos de Cobro Registrados
  </div>
}
@if (cobros.length) {
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Descripci\xF3n</th>
          <th>Comentario</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        @for (evento of cobros; track evento) {
          <tr>
            <td>{{evento.fecha|date:'dd/MM/yyyy'}}</td>
            <td>{{evento.modalidad}}</td>
            <td>{{evento.comentario}}</td>
            <td>{{evento.resultado}}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>
}`, styles: ["/* src/app/main/juridico/bitacora-cobranza/bitacora-cobranza.component.css */\n.table-responsive {\n  max-height: 35rem;\n}\n/*# sourceMappingURL=bitacora-cobranza.component.css.map */\n"] }]
  }], () => [{ type: JuridicoEventoCobroService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BitacoraCobranzaComponent, { className: "BitacoraCobranzaComponent", filePath: "src/app/main/juridico/bitacora-cobranza/bitacora-cobranza.component.ts", lineNumber: 15 });
})();

// src/app/controllers/juridico.bien.inmueble.service.ts
var _JuridicoBienInmuebleService = class _JuridicoBienInmuebleService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "juridicos-bienes-inmuebles";
    this.columns = [
      "juridico_id",
      "folio_real",
      "usuario_id"
    ];
  }
};
_JuridicoBienInmuebleService.\u0275fac = function JuridicoBienInmuebleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoBienInmuebleService)(\u0275\u0275inject(Injector));
};
_JuridicoBienInmuebleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JuridicoBienInmuebleService, factory: _JuridicoBienInmuebleService.\u0275fac, providedIn: "any" });
var JuridicoBienInmuebleService = _JuridicoBienInmuebleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoBienInmuebleService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/juridico/juridico-bienes-inmuebles/juridico-bienes-inmuebles.component.ts
function JuridicoBienesInmueblesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6)(2, "div", 7)(3, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function JuridicoBienesInmueblesComponent_Conditional_6_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.bienInmueble, $event) || (ctx_r1.bienInmueble = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Folio Real:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 9);
    \u0275\u0275listener("click", function JuridicoBienesInmueblesComponent_Conditional_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.guardarBienInmueble());
    });
    \u0275\u0275element(7, "i", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.bienInmueble);
  }
}
function JuridicoBienesInmueblesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, " No hay Bienes Inmuebles Registrados ");
    \u0275\u0275elementEnd();
  }
}
function JuridicoBienesInmueblesComponent_Conditional_8_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const evento_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, evento_r3.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(evento_r3.folio_real);
  }
}
function JuridicoBienesInmueblesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Folio Real");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275repeaterCreate(9, JuridicoBienesInmueblesComponent_Conditional_8_For_10_Template, 6, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.bienesInmuebles);
  }
}
var _JuridicoBienesInmueblesComponent = class _JuridicoBienesInmueblesComponent {
  constructor(juridicoBienesController) {
    this.juridicoBienesController = juridicoBienesController;
    this.showForm = false;
    this.bienInmueble = "";
    this.bienesInmuebles = [];
  }
  ngOnInit() {
    this.setBienesInmuebles();
  }
  guardarBienInmueble() {
    return __async(this, null, function* () {
      const res = yield this.juridicoBienesController.new({
        juridico_id: this.credito?.juridicos?.id,
        folio_real: this.bienInmueble
      });
      if (res) {
        this.bienesInmuebles.push(res);
        this.bienInmueble = "";
        this.showForm = false;
      }
    });
  }
  setBienesInmuebles() {
    return __async(this, null, function* () {
      const id_juridico = this.credito?.juridicos?.id;
      if (id_juridico) {
        this.bienesInmuebles = yield this.juridicoBienesController.all(id_juridico, {
          juridico_id: this.credito?.juridicos?.id,
          deleted_at: null
        });
      }
    });
  }
};
_JuridicoBienesInmueblesComponent.\u0275fac = function JuridicoBienesInmueblesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoBienesInmueblesComponent)(\u0275\u0275directiveInject(JuridicoBienInmuebleService));
};
_JuridicoBienesInmueblesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JuridicoBienesInmueblesComponent, selectors: [["app-juridico-bienes-inmuebles"]], inputs: { credito: "credito" }, decls: 9, vars: 3, consts: [[1, "row"], [1, "col-auto", "ms-auto", "p-1"], [1, "btn", "btn-success", 3, "click"], [1, "container-fluid", "p-3"], [1, "p-5", "text-center"], [1, "table-responsive"], [1, "input-group"], [1, "form-floating"], ["type", "text", "placeholder", "Folio real...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-floppy"], [1, "table"], [1, "text-uppercase"]], template: function JuridicoBienesInmueblesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5");
    \u0275\u0275text(1, "Bienenes Inmuebles Registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 0)(3, "div", 1)(4, "button", 2);
    \u0275\u0275listener("click", function JuridicoBienesInmueblesComponent_Template_button_click_4_listener() {
      return ctx.showForm = !ctx.showForm;
    });
    \u0275\u0275text(5, " Agregar Bien Inmueble ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(6, JuridicoBienesInmueblesComponent_Conditional_6_Template, 8, 1, "div", 3);
    \u0275\u0275conditionalCreate(7, JuridicoBienesInmueblesComponent_Conditional_7_Template, 2, 0, "div", 4);
    \u0275\u0275conditionalCreate(8, JuridicoBienesInmueblesComponent_Conditional_8_Template, 11, 0, "div", 5);
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.showForm ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.bienesInmuebles.length ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.bienesInmuebles.length ? 8 : -1);
  }
}, dependencies: [
  DatePipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  max-height: 35rem;\n}\n/*# sourceMappingURL=juridico-bienes-inmuebles.component.css.map */"] });
var JuridicoBienesInmueblesComponent = _JuridicoBienesInmueblesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoBienesInmueblesComponent, [{
    type: Component,
    args: [{ selector: "app-juridico-bienes-inmuebles", imports: [
      DatePipe,
      FormsModule
    ], template: `<h5>Bienenes Inmuebles Registrados</h5>
<div class="row">
  <div class="col-auto ms-auto p-1">
    <button class="btn btn-success" (click)="showForm=!showForm">
      Agregar Bien Inmueble
    </button>
  </div>
</div>
@if (showForm) {
  <div class="container-fluid p-3">
    <div class="input-group">
      <div class="form-floating">
        <input type="text" class="form-control" [(ngModel)]="bienInmueble" placeholder="Folio real...">
        <label>Folio Real:</label>
      </div>
      <button class="btn btn-outline-primary" (click)="guardarBienInmueble()"><i class="bi bi-floppy"></i></button>
    </div>
  </div>
}
@if (!bienesInmuebles.length) {
  <div class="p-5 text-center">
    No hay Bienes Inmuebles Registrados
  </div>
}
@if (bienesInmuebles.length) {
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Folio Real</th>
        </tr>
      </thead>
      <tbody>
        @for (evento of bienesInmuebles; track evento) {
          <tr>
            <td>{{evento.created_at|date:'dd/MM/yyyy'}}</td>
            <td class="text-uppercase">{{evento.folio_real}}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>
}`, styles: ["/* src/app/main/juridico/juridico-bienes-inmuebles/juridico-bienes-inmuebles.component.css */\n.table-responsive {\n  max-height: 35rem;\n}\n/*# sourceMappingURL=juridico-bienes-inmuebles.component.css.map */\n"] }]
  }], () => [{ type: JuridicoBienInmuebleService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JuridicoBienesInmueblesComponent, { className: "JuridicoBienesInmueblesComponent", filePath: "src/app/main/juridico/juridico-bienes-inmuebles/juridico-bienes-inmuebles.component.ts", lineNumber: 17 });
})();

// src/app/controllers/juridico.comentario.service.ts
var _JuridicoComentarioService = class _JuridicoComentarioService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "juridicos-comentarios";
    this.columns = [
      "juridico_id",
      "comentario",
      "usuario_id"
    ];
  }
};
_JuridicoComentarioService.\u0275fac = function JuridicoComentarioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoComentarioService)(\u0275\u0275inject(Injector));
};
_JuridicoComentarioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JuridicoComentarioService, factory: _JuridicoComentarioService.\u0275fac, providedIn: "any" });
var JuridicoComentarioService = _JuridicoComentarioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoComentarioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/juridico/juridico-comentarios/juridico-comentarios.component.ts
function JuridicoComentariosComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " No hay comentarios. ");
    \u0275\u0275elementEnd();
  }
}
function JuridicoComentariosComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "small", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 15)(10, "small");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const comentario_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", comentario_r1.usuario == null ? null : comentario_r1.usuario.nombre, " ", comentario_r1.usuario == null ? null : comentario_r1.usuario.apellido_paterno, ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", comentario_r1.comentario, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 4, comentario_r1.created_at, "d/MM/yy HH:mm"));
  }
}
function JuridicoComentariosComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, JuridicoComentariosComponent_Conditional_5_For_2_Template, 13, 7, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.comentarios);
  }
}
var _JuridicoComentariosComponent = class _JuridicoComentariosComponent {
  constructor(comentarioController, localStorage) {
    this.comentarioController = comentarioController;
    this.localStorage = localStorage;
    this.comentarios = [];
    this.comentarioForm = "";
  }
  ngOnInit() {
    this.setComentarios();
  }
  setComentarios() {
    return __async(this, null, function* () {
      this.comentarios = yield this.comentarioController.all({
        juridico_id: this.credito?.juridicos.id,
        deleted_at: null
      }, ["usuario"]);
    });
  }
  nuevoComentario() {
    return __async(this, null, function* () {
      if (!this.comentarioForm)
        return;
      const res = yield this.comentarioController.new({
        juridico_id: this.credito?.juridicos?.id,
        comentario: this.comentarioForm
      });
      if (res) {
        const usuario = this.localStorage.getUser();
        res.usuario = usuario;
        this.comentarios.push(res);
        this.comentarioForm = "";
      }
    });
  }
};
_JuridicoComentariosComponent.\u0275fac = function JuridicoComentariosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoComentariosComponent)(\u0275\u0275directiveInject(JuridicoComentarioService), \u0275\u0275directiveInject(LocalStorageService));
};
_JuridicoComentariosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JuridicoComentariosComponent, selectors: [["app-juridico-comentarios"]], inputs: { credito: "credito" }, decls: 13, vars: 3, consts: [[1, "container-fluid", "p-3", "border", "rounded"], [1, "table-responsive", "border"], [1, "p-5", "text-center"], [1, "container-fluid"], [1, "input-group"], [1, "form-floating"], ["placeholder", "Deja un comentario aqu\xED...", "id", "floatingTextarea", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "floatingTextarea"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "bi", "bi-send-fill"], [1, "container-fluid", "p-2"], [1, "row"], [1, "col"], [1, "fw-bold", "text-uppercase", "text-primary"], [1, "col", "rounded", "border", "border-primary", "shadow-sm", "p-3"], [1, "col-auto", "ms-auto"]], template: function JuridicoComentariosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5");
    \u0275\u0275text(1, "Bit\xE1cora de Comentarios");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 0)(3, "div", 1);
    \u0275\u0275conditionalCreate(4, JuridicoComentariosComponent_Conditional_4_Template, 2, 0, "div", 2);
    \u0275\u0275conditionalCreate(5, JuridicoComentariosComponent_Conditional_5_Template, 3, 0, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "textarea", 6);
    \u0275\u0275twoWayListener("ngModelChange", function JuridicoComentariosComponent_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.comentarioForm, $event) || (ctx.comentarioForm = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 7);
    \u0275\u0275text(10, "Comentarios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275listener("click", function JuridicoComentariosComponent_Template_button_click_11_listener() {
      return ctx.nuevoComentario();
    });
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx.comentarios.length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.comentarios.length ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.comentarioForm);
  }
}, dependencies: [
  DatePipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  max-height: 32rem;\n}\n/*# sourceMappingURL=juridico-comentarios.component.css.map */"] });
var JuridicoComentariosComponent = _JuridicoComentariosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoComentariosComponent, [{
    type: Component,
    args: [{ selector: "app-juridico-comentarios", imports: [
      DatePipe,
      FormsModule
    ], template: `<h5>Bit\xE1cora de Comentarios</h5>

<div class="container-fluid p-3 border rounded">
  <div class="table-responsive border">
    @if (!comentarios.length) {
      <div class="p-5 text-center">
        No hay comentarios.
      </div>
    }
    @if (comentarios.length) {
      <div class="container-fluid">
        @for (comentario of comentarios; track comentario) {
          <div class="container-fluid p-2">
            <div class="row">
              <div class="col">
                <small class="fw-bold text-uppercase text-primary">{{comentario.usuario?.nombre}}
                {{comentario.usuario?.apellido_paterno}}:</small>
              </div>
            </div>
            <div class="row">
              <div class="col rounded border border-primary shadow-sm p-3">
                {{comentario.comentario}}
              </div>
            </div>
            <div class="row">
              <div class="col-auto ms-auto">
                <small>{{comentario.created_at|date:'d/MM/yy HH:mm'}}</small>
              </div>
            </div>
          </div>
        }
      </div>
    }
  </div>
  <div class="input-group">
    <div class="form-floating">
      <textarea class="form-control" placeholder="Deja un comentario aqu\xED..." id="floatingTextarea" [(ngModel)]="comentarioForm"></textarea>
      <label for="floatingTextarea">Comentarios</label>
    </div>
    <button class="btn btn-outline-primary" (click)="nuevoComentario()">
      <i class="bi bi-send-fill"></i>
    </button>
  </div>
</div>`, styles: ["/* src/app/main/juridico/juridico-comentarios/juridico-comentarios.component.css */\n.table-responsive {\n  max-height: 32rem;\n}\n/*# sourceMappingURL=juridico-comentarios.component.css.map */\n"] }]
  }], () => [{ type: JuridicoComentarioService }, { type: LocalStorageService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JuridicoComentariosComponent, { className: "JuridicoComentariosComponent", filePath: "src/app/main/juridico/juridico-comentarios/juridico-comentarios.component.ts", lineNumber: 18 });
})();

// src/app/pipes/telefonos.pipe.ts
var _TelefonosPipe = class _TelefonosPipe {
  transform(credito, ...args) {
    if (!credito)
      return "";
    let telefonos = [];
    if (credito.datos_persona_fisica?.datos_personales && credito.datos_persona_fisica.datos_personales.telefonos_personales?.length) {
      telefonos = [...credito.datos_persona_fisica.datos_personales.telefonos_personales.map((t) => t.numero)];
    }
    if (credito.datos_personas_morales?.telefonos?.length) {
      telefonos = [...credito.datos_personas_morales.telefonos.map((t) => t.numero)];
    }
    if (credito.credito_evento_cobros && credito.credito_evento_cobros.length) {
      telefonos = [...credito.credito_evento_cobros.filter((e) => e.modalidad === "LLAMADA" && e.objetivo).map((t) => t.objetivo)];
    }
    telefonos = Array.from(new Set(telefonos));
    return telefonos.join(", ");
  }
};
_TelefonosPipe.\u0275fac = function TelefonosPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TelefonosPipe)();
};
_TelefonosPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "telefonos", type: _TelefonosPipe, pure: true });
var TelefonosPipe = _TelefonosPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TelefonosPipe, [{
    type: Pipe,
    args: [{
      name: "telefonos",
      standalone: true
    }]
  }], null, null);
})();

// src/app/controllers/juridico.etapa.judicial.service.ts
var _JuridicoEtapaJudicialService = class _JuridicoEtapaJudicialService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "juridicos_etapas_judiciales";
    this.columns = [
      "fecha",
      "documento_url",
      "etapa_judicial_id",
      "juridico_id",
      "usuario_id",
      "updated_at"
    ];
  }
};
_JuridicoEtapaJudicialService.\u0275fac = function JuridicoEtapaJudicialService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _JuridicoEtapaJudicialService)(\u0275\u0275inject(Injector));
};
_JuridicoEtapaJudicialService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JuridicoEtapaJudicialService, factory: _JuridicoEtapaJudicialService.\u0275fac, providedIn: "any" });
var JuridicoEtapaJudicialService = _JuridicoEtapaJudicialService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JuridicoEtapaJudicialService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/juridico/form-juridico/form-etapa-juridico/form-etapa-juridico.component.ts
var _c04 = ["fileInput"];
var _c12 = (a0) => ({ id: a0 });
function FormEtapaJuridicoComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const proceso_r2 = ctx.$implicit;
    \u0275\u0275property("value", proceso_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(proceso_r2.nombre.toUpperCase());
  }
}
function FormEtapaJuridicoComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const etapa_r3 = ctx.$implicit;
    \u0275\u0275property("value", etapa_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(etapa_r3.nombre.toUpperCase());
  }
}
var _FormEtapaJuridicoComponent = class _FormEtapaJuridicoComponent {
  constructor(procesoController, etapaJuridicoController, eventoController, utils) {
    this.procesoController = procesoController;
    this.etapaJuridicoController = etapaJuridicoController;
    this.eventoController = eventoController;
    this.utils = utils;
    this.procesos = [];
    this.procesoSelected = 0;
    this.etapas = [];
    this.etapaSelected = 0;
    this.fecha = "";
    this.etapaActualNombre = "";
    this.fileId = 0;
    this.juridicoEtapas = [];
    this.procesosLoaded = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.setProcesos();
      this.setJuridicoEtapas();
    });
  }
  ngOnChanges(changes) {
    if (changes["juridico"] && this.juridico) {
      this.setJuridicoEtapas();
    }
  }
  onProcesoChange(procesoId) {
    this.setEtapasFromProcesoId(procesoId);
    this.etapaSelected = 0;
    this.onEtapaChange();
  }
  onEtapaChange() {
    this.setJuridicoEtapaEdit();
    const etapa = this.buscarEtapaActual();
    this.etapaActualNombre = etapa?.nombre || "";
    this.fecha = this.juridicoEtapaEdit?.fecha?.substring(0, 10) || "";
    this.fileId = this.juridicoEtapaEdit?.id || 0;
  }
  onUrl(newUrl) {
    if (this.juridicoEtapaEdit) {
      this.juridicoEtapaEdit.documento_url = newUrl;
      this.etapaJuridicoController.update(this.juridicoEtapaEdit.id, {
        documento_url: newUrl
      });
    }
  }
  confirmarEtapa() {
    return __async(this, null, function* () {
      yield this.guardarEtapa();
    });
  }
  updateFecha() {
    return __async(this, null, function* () {
      if (this.juridicoEtapaEdit?.fecha?.length == 10) {
        const res = yield this.etapaJuridicoController.update(this.juridicoEtapaEdit.id, {
          fecha: this.juridicoEtapaEdit.fecha
        });
        if (res) {
          const proceso = this.buscarProcesoActual();
          const etapa = this.buscarEtapaActual();
          const fecha = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
          this.eventoController.new({
            juridico_id: this.juridico.id,
            fecha,
            descripcion: `${etapa?.nombre.toUpperCase()} - ${proceso?.nombre.toUpperCase()}  EN ${fecha}.`
          });
        }
      }
    });
  }
  /**
   * Guarda la etapa judicial seleccionada para el jurídico actual.
   * Si la etapa ya existe en el histórico, se actualiza el evento.
   * Si no existe, se crea una nueva etapa y se registra un evento.
   */
  guardarEtapa() {
    return __async(this, null, function* () {
      if (!this.juridico || !this.etapaSelected)
        return;
      if (this.juridicoEtapaEdit) {
        this.oldEtapa = this.utils.copyOf(this.juridicoEtapaEdit);
      }
      this.setJuridicoEtapaEdit();
      const etapaExistente = this.buscarEtapaExistente();
      if (etapaExistente) {
        etapaExistente.updated_at = (/* @__PURE__ */ new Date()).toISOString();
        yield this.etapaJuridicoController.update(etapaExistente.id, etapaExistente);
        this.crearNuevoEvento();
        return;
      }
      yield this.crearNuevaEtapa();
      this.crearNuevoEvento();
    });
  }
  setJuridicoEtapaEdit() {
    const etapaExistente = this.buscarEtapaExistente();
    this.juridicoEtapaEdit = etapaExistente;
  }
  /**
   * Busca si la etapa seleccionada ya existe en el histórico de etapas del jurídico.
   * @returns La etapa existente o `undefined` si no se encuentra.
   */
  buscarEtapaExistente() {
    return this.juridicoEtapas.find((etapa) => etapa.etapa_judicial_id == this.etapaSelected);
  }
  /**
   * Crea una nueva etapa judicial para el jurídico actual.
   */
  crearNuevaEtapa() {
    return __async(this, null, function* () {
      this.juridicoEtapaEdit = yield this.etapaJuridicoController.new({
        juridico_id: this.juridico.id,
        etapa_judicial_id: this.etapaSelected,
        fecha: this.fecha
      });
      if (this.juridicoEtapaEdit) {
        this.fileId = this.juridicoEtapaEdit.id;
        this.juridicoEtapaEdit.etapas_judiciales = this.etapas.find((etapa) => etapa.id == this.etapaSelected);
        this.juridicoEtapas.push(this.juridicoEtapaEdit);
        this.credito.juridicos.juridicos_etapas_judiciales = this.juridicoEtapas;
      }
    });
  }
  /**
   * Crea un nuevo evento en el sistema para registrar el cambio de etapa.
   */
  crearNuevoEvento() {
    return __async(this, null, function* () {
      if (!this.juridicoEtapaEdit)
        return;
      const proceso = this.buscarProcesoActual();
      const etapa = this.buscarEtapaActual();
      if (!etapa)
        console.error(this.juridicoEtapaEdit, this.etapas, this.juridicoEtapas);
      const descripcion = this.generarDescripcionEvento(proceso, etapa);
      const res = yield this.eventoController.new({
        juridico_id: this.juridico.id,
        fecha: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
        descripcion
      });
      if (res)
        this.credito?.juridicos?.juridicos_juzgados_eventos?.push(res);
    });
  }
  /**
   * Busca el proceso judicial actual basado en el ID seleccionado.
   * @returns El proceso encontrado o `undefined` si no existe.
   */
  buscarProcesoActual() {
    return this.procesos.find((proceso) => proceso.id == this.procesoSelected);
  }
  /**
   * Busca la etapa judicial actual basada en el ID seleccionado.
   * @returns La etapa encontrada o `undefined` si no existe.
   */
  buscarEtapaActual() {
    return this.etapas.find((etapa) => etapa.id == this.etapaSelected);
  }
  /**
   * Genera la descripción del evento basada en el proceso y la etapa actual.
   * @param proceso El proceso judicial actual.
   * @param etapa La etapa judicial actual.
   * @returns La descripción formateada del evento.
   */
  generarDescripcionEvento(proceso, etapa) {
    const etapaVieja = this.etapas.find((etapa2) => etapa2.id == this.oldEtapa?.etapa_judicial_id);
    const procesoViejo = this.procesos.find((proceso2) => proceso2.id == etapaVieja?.proceso_judicial_id);
    const nombreProceso = proceso?.nombre.toUpperCase() || "Desconocido";
    const nombreEtapa = etapa?.nombre.toUpperCase() || "Desconocido";
    const nombreProcesoViejo = procesoViejo?.nombre.toUpperCase() || "Desconocido";
    const nombreEtapaViejo = etapaVieja?.nombre.toUpperCase() || "Desconocido";
    const fecha = this.juridicoEtapaEdit?.fecha ? " EN " + this.juridicoEtapaEdit.fecha.substring(0, 10) : "";
    return `${nombreEtapa} - ${nombreProceso}${fecha}`;
  }
  /**
   * Establece las etapas judiciales disponibles basadas en el ID del proceso seleccionado.
   * Si el proceso no tiene etapas asociadas, se inicializa un arreglo vacío.
   *
   * @param procesoId - El ID del proceso judicial seleccionado.
   */
  setEtapasFromProcesoId(procesoId) {
    const procesoSeleccionado = this.procesos.find((proceso) => proceso.id == procesoId);
    this.etapas = procesoSeleccionado?.etapas_judiciales ?? [];
  }
  /**
   * Carga y establece todos los procesos judiciales disponibles desde el servicio.
   * Además, se asegura de que los procesos incluyan sus etapas judiciales asociadas.
   *
   * Este método es asíncrono y se utiliza durante la inicialización del componente.
   */
  setProcesos() {
    return __async(this, null, function* () {
      if (this.procesosLoaded) {
        return;
      }
      this.procesos = yield this.procesoController.all({ deleted_at: null }, ["etapasJudiciales"], {}, false);
      this.procesosLoaded = true;
    });
  }
  /**
   * Carga y establece las etapas judiciales asociadas al jurídico actual.
   * Si existen etapas, selecciona la más reciente y actualiza la selección de etapa y proceso.
   */
  setJuridicoEtapas() {
    if (!this.juridico)
      return;
    this.juridicoEtapas = (this.juridico.juridicos_etapas_judiciales ?? []).sort((a, b) => new Date(b.updated_at ?? "").getTime() - new Date(a.updated_at ?? "").getTime());
    if (this.juridicoEtapas.length > 0) {
      this.juridicoEtapaEdit = this.juridicoEtapas[0];
      this.fecha = this.juridicoEtapaEdit.fecha?.substring(0, 10) || "";
      this.setEtapaSelectedFromId(this.juridicoEtapaEdit.etapa_judicial_id);
    }
  }
  /**
   * Establece la etapa seleccionada basada en el ID de la etapa.
   * También actualiza el proceso seleccionado si la etapa pertenece a un proceso específico.
   *
   * @param etapaId - El ID de la etapa judicial a seleccionar.
   */
  setEtapaSelectedFromId(etapaId) {
    return __async(this, null, function* () {
      let etapaFound;
      if (!this.procesosLoaded) {
        yield this.setProcesos();
      }
      for (const proceso of this.procesos) {
        if (etapaFound)
          continue;
        etapaFound = proceso.etapas_judiciales?.find((etapa) => etapa.id == etapaId);
        if (etapaFound) {
          this.procesoSelected = proceso.id;
          break;
        }
      }
      if (!etapaFound)
        return;
      this.etapaSelected = etapaFound.id;
      this.setEtapasFromProcesoId(this.procesoSelected);
      this.onEtapaChange();
    });
  }
};
_FormEtapaJuridicoComponent.\u0275fac = function FormEtapaJuridicoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormEtapaJuridicoComponent)(\u0275\u0275directiveInject(ProcesoJudicialService), \u0275\u0275directiveInject(JuridicoEtapaJudicialService), \u0275\u0275directiveInject(JuridicoJuzgadoEventoService), \u0275\u0275directiveInject(UtilsService));
};
_FormEtapaJuridicoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormEtapaJuridicoComponent, selectors: [["app-form-etapa-juridico"]], viewQuery: function FormEtapaJuridicoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, inputs: { credito: "credito", juridico: "juridico" }, features: [\u0275\u0275NgOnChangesFeature], decls: 38, vars: 16, consts: [["fileInput", ""], [1, "container-fluid", "p-0"], [1, "fw-bold"], [1, "border", "border-primary"], [1, "row", "mt-2"], [1, "text-uppercase", "mb-3"], [1, "col"], [1, "form-floating"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [1, "text-uppercase", 3, "value"], ["for", "floatingSelect"], [1, "form-select", 3, "ngModelChange", "ngModel", "disabled"], [1, "col", "p-4"], [1, "input-group"], [1, "input-group-text"], ["type", "date", "placeholder", "Fecha", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["apiUrl", "api/files/etapa_judicial_documento/save", "key", "document", 3, "urlChange", "formExtra", "showSimpleDownload", "url", "disabled", "showButton"], [1, "col-auto", "p-2", "align-self-center"], [1, "btn", "btn-success", 3, "click", "disabled"]], template: function FormEtapaJuridicoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h5", 2);
    \u0275\u0275text(2, "Proceso y Etapa Judicial");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr", 3);
    \u0275\u0275elementStart(4, "div", 4)(5, "h6", 5)(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function FormEtapaJuridicoComponent_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.procesoSelected, $event) || (ctx.procesoSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FormEtapaJuridicoComponent_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onProcesoChange($event));
    });
    \u0275\u0275elementStart(11, "option", 9);
    \u0275\u0275text(12, "Selecciona una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, FormEtapaJuridicoComponent_For_14_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 11);
    \u0275\u0275text(16, "Proceso Judicial:");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 6)(18, "div", 7)(19, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function FormEtapaJuridicoComponent_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.etapaSelected, $event) || (ctx.etapaSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FormEtapaJuridicoComponent_Template_select_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onEtapaChange());
    });
    \u0275\u0275elementStart(20, "option", 9);
    \u0275\u0275text(21, "Selecciona una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, FormEtapaJuridicoComponent_For_23_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 11);
    \u0275\u0275text(25, "Etapa Judicial Actual:");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 4)(27, "div", 13)(28, "div", 14)(29, "label", 15);
    \u0275\u0275text(30, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function FormEtapaJuridicoComponent_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fecha, $event) || (ctx.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 13)(33, "app-file-input", 17, 0);
    \u0275\u0275listener("urlChange", function FormEtapaJuridicoComponent_Template_app_file_input_urlChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onUrl($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 18)(36, "button", 19);
    \u0275\u0275listener("click", function FormEtapaJuridicoComponent_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.confirmarEtapa());
    });
    \u0275\u0275text(37, " Confirmar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("ETAPA ACTUAL - ", ctx.etapaActualNombre || "Sin asignar");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.procesoSelected);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.procesos);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.etapaSelected);
    \u0275\u0275property("disabled", !ctx.procesoSelected);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.etapas);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx.fecha);
    \u0275\u0275property("disabled", !ctx.etapaSelected);
    \u0275\u0275advance(2);
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(14, _c12, ctx.fileId))("showSimpleDownload", true)("url", ctx.juridicoEtapaEdit == null ? null : ctx.juridicoEtapaEdit.documento_url)("disabled", !ctx.fileId)("showButton", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.etapaSelected);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, FileInputComponent], encapsulation: 2 });
var FormEtapaJuridicoComponent = _FormEtapaJuridicoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormEtapaJuridicoComponent, [{
    type: Component,
    args: [{ selector: "app-form-etapa-juridico", imports: [
      FormsModule,
      FileInputComponent
    ], template: '<div class="container-fluid p-0">\n  <h5 class="fw-bold">Proceso y Etapa Judicial</h5>\n  <hr class="border border-primary">\n  <div class="row mt-2">\n    <h6 class="text-uppercase mb-3"><b>ETAPA ACTUAL - {{etapaActualNombre || "Sin asignar"}}</b></h6>\n    <div class="col">\n      <div class="form-floating">\n        <select class="form-select" [(ngModel)]="procesoSelected" (ngModelChange)="onProcesoChange($event)">\n          <option [value]="0" disabled>Selecciona una opci\xF3n</option>\n          @for (proceso of procesos; track proceso) {\n            <option class="text-uppercase" [value]="proceso.id">{{proceso.nombre.toUpperCase()}}</option>\n          }\n        </select>\n        <label for="floatingSelect">Proceso Judicial:</label>\n      </div>\n    </div>\n    <div class="col">\n      <div class="form-floating">\n        <select class="form-select" [(ngModel)]="etapaSelected" (ngModelChange)="onEtapaChange()" [disabled]="!procesoSelected">\n          <option [value]="0" disabled>Selecciona una opci\xF3n</option>\n          @for (etapa of etapas; track etapa) {\n            <option class="text-uppercase" [value]="etapa.id">{{etapa.nombre.toUpperCase()}}</option>\n          }\n        </select>\n        <label for="floatingSelect">Etapa Judicial Actual:</label>\n      </div>\n    </div>\n  </div>  \n  <div class="row mt-2">    \n    <div class="col p-4">\n      <div class="input-group">\n        <label class="input-group-text">Fecha:</label>\n        <input type="date" placeholder="Fecha" class="form-control" [(ngModel)]="fecha" [disabled]="!etapaSelected">\n      </div>\n    </div>\n    <div class="col p-4">\n      <app-file-input #fileInput apiUrl="api/files/etapa_judicial_documento/save" key="document" [formExtra]="{id: fileId}" [showSimpleDownload]="true" [url]="juridicoEtapaEdit?.documento_url" (urlChange)="onUrl($event)" [disabled]="!fileId" [showButton]="false"/>\n    </div>\n    <div class="col-auto p-2 align-self-center">\n      <button class="btn btn-success" (click)="confirmarEtapa()" [disabled]="!etapaSelected">\n        Confirmar\n      </button>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: ProcesoJudicialService }, { type: JuridicoEtapaJudicialService }, { type: JuridicoJuzgadoEventoService }, { type: UtilsService }], { credito: [{
    type: Input
  }], juridico: [{
    type: Input
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormEtapaJuridicoComponent, { className: "FormEtapaJuridicoComponent", filePath: "src/app/main/juridico/form-juridico/form-etapa-juridico/form-etapa-juridico.component.ts", lineNumber: 24 });
})();

// src/app/pipes/fecha-etapa-procesal.pipe.ts
var _FechaEtapaProcesalPipe = class _FechaEtapaProcesalPipe {
  constructor() {
    this.utils = inject(UtilsService);
  }
  transform(credito, ...args) {
    const juridico = credito?.juridicos?.juridicos_etapas_judiciales;
    const ultimaEtapaActiva = juridico?.sort((a, b) => new Date(b.updated_at ?? "").getTime() - new Date(a.updated_at ?? "").getTime())?.[0];
    if (ultimaEtapaActiva?.fecha) {
      try {
        const datePart = ultimaEtapaActiva.fecha.substring(0, 10) + "T12:00:00Z";
        const date = new Date(datePart);
        if (isNaN(date.getTime())) {
          return null;
        }
        return this.utils.fechaFormateada(date);
      } catch (e) {
        return null;
      }
    }
    return null;
  }
};
_FechaEtapaProcesalPipe.\u0275fac = function FechaEtapaProcesalPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FechaEtapaProcesalPipe)();
};
_FechaEtapaProcesalPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "fechaetapaprocesal", type: _FechaEtapaProcesalPipe, pure: true });
var FechaEtapaProcesalPipe = _FechaEtapaProcesalPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FechaEtapaProcesalPipe, [{
    type: Pipe,
    args: [{
      name: "fechaetapaprocesal",
      standalone: true
    }]
  }], null, null);
})();

// src/app/pipes/resultado-ultima-gestion.pipe.ts
var _ResultadoUltimaGestionPipe = class _ResultadoUltimaGestionPipe {
  transform(credito, ...args) {
    if (!credito || !credito.credito_evento_cobros?.length)
      return null;
    const ultimaGestion = credito.credito_evento_cobros.sort((a, b) => new Date(b.fecha ?? "").getTime() - new Date(a.fecha ?? "").getTime())[0];
    return ultimaGestion.otro_resultado ?? ultimaGestion.resultado;
  }
};
_ResultadoUltimaGestionPipe.\u0275fac = function ResultadoUltimaGestionPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResultadoUltimaGestionPipe)();
};
_ResultadoUltimaGestionPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "resultadoUltimaGestion", type: _ResultadoUltimaGestionPipe, pure: true });
var ResultadoUltimaGestionPipe = _ResultadoUltimaGestionPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultadoUltimaGestionPipe, [{
    type: Pipe,
    args: [{
      name: "resultadoUltimaGestion",
      standalone: true
    }]
  }], null, null);
})();

// src/app/pipes/fecha-ultima-gestion.pipe.ts
var _FechaUltimaGestionPipe = class _FechaUltimaGestionPipe {
  transform(credito, ...args) {
    if (!credito || !credito.credito_evento_cobros?.length)
      return null;
    const ultimaGestion = credito.credito_evento_cobros.sort((a, b) => new Date(b.fecha ?? "").getTime() - new Date(a.fecha ?? "").getTime())[0];
    return this.formatDate(ultimaGestion.fecha?.substring(0, 10)) || null;
  }
  formatDate(dateString) {
    if (!dateString)
      return null;
    const date = /* @__PURE__ */ new Date(dateString + "T17:00:00Z");
    if (isNaN(date.getTime()))
      return null;
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  }
};
_FechaUltimaGestionPipe.\u0275fac = function FechaUltimaGestionPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FechaUltimaGestionPipe)();
};
_FechaUltimaGestionPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "fechaUltimaGestion", type: _FechaUltimaGestionPipe, pure: true });
var FechaUltimaGestionPipe = _FechaUltimaGestionPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FechaUltimaGestionPipe, [{
    type: Pipe,
    args: [{
      name: "fechaUltimaGestion",
      standalone: true
    }]
  }], null, null);
})();

// src/app/main/juridico/resumen-etapas/resumen-etapas.component.ts
function ResumenEtapasComponent_For_3_For_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const etapa_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, etapa_r2.fecha, "dd/MM/yyyy"), " ");
  }
}
function ResumenEtapasComponent_For_3_For_7_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275text(2, " No Asignada ");
    \u0275\u0275elementEnd();
  }
}
function ResumenEtapasComponent_For_3_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4, "Etapa:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275element(6, "i", 14);
    \u0275\u0275elementStart(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 16)(10, "div", 12);
    \u0275\u0275text(11, "Fecha:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13);
    \u0275\u0275element(13, "i", 17);
    \u0275\u0275conditionalCreate(14, ResumenEtapasComponent_For_3_For_7_Conditional_14_Template, 3, 4, "span", 18)(15, ResumenEtapasComponent_For_3_For_7_Conditional_15_Template, 3, 0, "span", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 20)(17, "div", 12);
    \u0275\u0275text(18, "Documento:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 21);
    \u0275\u0275listener("click", function ResumenEtapasComponent_For_3_For_7_Template_button_click_19_listener() {
      const etapa_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goDoc(ctx_r2.utils.fileUrlInLine(etapa_r2.documento_url)));
    });
    \u0275\u0275element(20, "i", 22);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const etapa_r2 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((etapa_r2.etapas_judiciales == null ? null : etapa_r2.etapas_judiciales.nombre) || "No especificada");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("text-warning", !etapa_r2.fecha);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(etapa_r2.fecha ? 14 : 15);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("btn-outline-primary", etapa_r2.documento_url)("btn-outline-secondary", !etapa_r2.documento_url);
    \u0275\u0275property("disabled", !etapa_r2.documento_url);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-file-earmark-text", etapa_r2.documento_url)("bi-file-earmark-x", !etapa_r2.documento_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(etapa_r2.documento_url ? "Ver documento" : "No subido");
  }
}
function ResumenEtapasComponent_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, " No hay etapas registradas para este proceso. ");
    \u0275\u0275elementEnd();
  }
}
function ResumenEtapasComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4)(2, "h5", 5);
    \u0275\u0275element(3, "i", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275repeaterCreate(6, ResumenEtapasComponent_For_3_For_7_Template, 23, 14, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(8, ResumenEtapasComponent_For_3_Conditional_8_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const proceso_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Proceso: ", proceso_r4.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.etapasDeProceso(proceso_r4));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.etapasDeProceso(proceso_r4).length === 0 ? 8 : -1);
  }
}
function ResumenEtapasComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, " No se han encontrado procesos judiciales registrados. ");
    \u0275\u0275elementEnd();
  }
}
var _ResumenEtapasComponent = class _ResumenEtapasComponent {
  constructor(utils) {
    this.utils = utils;
    this.procesos = [];
  }
  ngOnChanges(changes) {
    if (changes["credito"]) {
      this.setProcesos();
    }
  }
  setProcesos() {
    const uniqueProcesses = /* @__PURE__ */ new Map();
    this.credito.juridicos?.juridicos_etapas_judiciales?.forEach((jej) => {
      if (jej.etapas_judiciales?.procesos_judiciales) {
        const proceso = jej.etapas_judiciales.procesos_judiciales;
        if (!uniqueProcesses.has(proceso.id)) {
          uniqueProcesses.set(proceso.id, proceso);
        }
      }
    });
    this.procesos = Array.from(uniqueProcesses.values());
  }
  etapasDeProceso(proceso) {
    return this.credito.juridicos?.juridicos_etapas_judiciales?.filter((jej) => jej.etapas_judiciales?.proceso_judicial_id == proceso.id) ?? [];
  }
  goDoc(url) {
    console.log("Opening document:", url);
    if (url) {
      window.open(url, "_blank");
    }
  }
};
_ResumenEtapasComponent.\u0275fac = function ResumenEtapasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResumenEtapasComponent)(\u0275\u0275directiveInject(UtilsService));
};
_ResumenEtapasComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumenEtapasComponent, selectors: [["app-resumen-etapas"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 1, consts: [["title", "Bit\xE1cora de Procesos Judiciales"], [1, "process-container"], [1, "process-item", "mb-4"], [1, "alert", "alert-info"], [1, "process-header", "bg-light", "p-3", "rounded-top"], [1, "mb-0", "d-flex", "align-items-center"], [1, "bi", "bi-folder", "me-2"], [1, "container-fluid", "bg-white", "p-3", "rounded", "border"], [1, "mb-3", "pb-3", "border-bottom"], [1, "text-muted", "fst-italic"], [1, "d-flex", "flex-column", "flex-md-row", "gap-2", "gap-md-3"], [1, "flex-grow-1"], [1, "fw-bold", "text-primary", "mb-1"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-arrow-right-circle", "text-primary"], [1, "text-break"], [1, "flex-shrink-0", 2, "min-width", "150px"], [1, "bi", "bi-calendar-event"], [1, "text-nowrap"], [1, "badge", "bg-warning", "text-dark", "fw-normal"], [1, "flex-shrink-0"], [1, "btn", "btn-sm", "d-flex", "align-items-center", 3, "click", "disabled"], [1, "bi", "me-1"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"]], template: function ResumenEtapasComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-collapsable", 0)(1, "div", 1);
    \u0275\u0275repeaterCreate(2, ResumenEtapasComponent_For_3_Template, 9, 2, "div", 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(4, ResumenEtapasComponent_Conditional_4_Template, 2, 0, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.procesos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.procesos.length === 0 ? 4 : -1);
  }
}, dependencies: [CollapsableComponent, DatePipe], styles: ["\n\n.process-container[_ngcontent-%COMP%] {\n  border-left: 3px solid #dee2e6;\n  padding-left: 1.5rem;\n  position: relative;\n}\n.process-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.process-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1.5rem;\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.timeline-point[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -1.7rem;\n  top: 0.5rem;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: var(--bs-primary);\n  border: 2px solid white;\n  z-index: 2;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.timeline-content[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\n}\n.timeline-connector[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -1.5rem;\n  top: 1.2rem;\n  bottom: -1rem;\n  width: 2px;\n  background-color: #dee2e6;\n}\n.process-status-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35em 0.65em;\n}\n/*# sourceMappingURL=resumen-etapas.component.css.map */"] });
var ResumenEtapasComponent = _ResumenEtapasComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumenEtapasComponent, [{
    type: Component,
    args: [{ selector: "app-resumen-etapas", imports: [CollapsableComponent, DatePipe], template: '<app-collapsable title="Bit\xE1cora de Procesos Judiciales">\n  <div class="process-container">\n    @for (proceso of procesos; track proceso) {\n      <div class="process-item mb-4">\n        <div class="process-header bg-light p-3 rounded-top">\n          <h5 class="mb-0 d-flex align-items-center">\n            <i class="bi bi-folder me-2"></i>\n            Proceso: {{ proceso.nombre }}\n          </h5>\n        </div>\n        <div class="container-fluid bg-white p-3 rounded border">\n          @for (etapa of etapasDeProceso(proceso); track etapa) {\n            <div class="mb-3 pb-3 border-bottom">\n              <div class="d-flex flex-column flex-md-row gap-2 gap-md-3">\n                <!-- Columna Etapa -->\n                <div class="flex-grow-1">\n                  <div class="fw-bold text-primary mb-1">Etapa:</div>\n                  <div class="d-flex align-items-center gap-2">\n                    <i class="bi bi-arrow-right-circle text-primary"></i>\n                    <span class="text-break">{{\n                      etapa.etapas_judiciales?.nombre || "No especificada"\n                    }}</span>\n                  </div>\n                </div>\n                <!-- Columna Fecha -->\n                <div class="flex-shrink-0" style="min-width: 150px">\n                  <div class="fw-bold text-primary mb-1">Fecha:</div>\n                  <div\n                    [class.text-warning]="!etapa.fecha"\n                    class="d-flex align-items-center gap-2"\n                  >\n                    <i class="bi bi-calendar-event"></i>\n                    @if (etapa.fecha) {\n                      <span class="text-nowrap">\n                        {{ etapa.fecha | date: "dd/MM/yyyy" }}\n                      </span>\n                    } @else {\n                      <span class="badge bg-warning text-dark fw-normal">\n                        <i class="bi bi-exclamation-triangle-fill me-1"></i>\n                        No Asignada\n                      </span>\n                    }\n                  </div>\n                </div>\n                <!-- Columna Documento -->\n                <div class="flex-shrink-0">\n                  <div class="fw-bold text-primary mb-1">Documento:</div>\n                  <button\n                    class="btn btn-sm d-flex align-items-center"\n                    [class.btn-outline-primary]="etapa.documento_url"\n                    [class.btn-outline-secondary]="!etapa.documento_url"\n                    (click)="goDoc(utils.fileUrlInLine(etapa.documento_url))"\n                    [disabled]="!etapa.documento_url"\n                  >\n                    <i\n                      class="bi me-1"\n                      [class.bi-file-earmark-text]="etapa.documento_url"\n                      [class.bi-file-earmark-x]="!etapa.documento_url"\n                    ></i>\n                    <span>{{\n                      etapa.documento_url ? "Ver documento" : "No subido"\n                    }}</span>\n                  </button>\n                </div>\n              </div>\n            </div>\n          }\n          @if (etapasDeProceso(proceso).length === 0) {\n            <div class="text-muted fst-italic">\n              No hay etapas registradas para este proceso.\n            </div>\n          }\n        </div>\n      </div>\n    }\n\n    @if (procesos.length === 0) {\n      <div class="alert alert-info">\n        No se han encontrado procesos judiciales registrados.\n      </div>\n    }\n  </div>\n</app-collapsable>\n\n', styles: ["/* src/app/main/juridico/resumen-etapas/resumen-etapas.component.css */\n.process-container {\n  border-left: 3px solid #dee2e6;\n  padding-left: 1.5rem;\n  position: relative;\n}\n.process-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.process-title {\n  font-size: 1.1rem;\n  margin: 0;\n}\n.timeline {\n  position: relative;\n  padding-left: 1.5rem;\n}\n.timeline-item {\n  position: relative;\n  margin-bottom: 1rem;\n}\n.timeline-point {\n  position: absolute;\n  left: -1.7rem;\n  top: 0.5rem;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: var(--bs-primary);\n  border: 2px solid white;\n  z-index: 2;\n}\n.timeline-content {\n  transition: all 0.2s ease;\n}\n.timeline-content:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\n}\n.timeline-connector {\n  position: absolute;\n  left: -1.5rem;\n  top: 1.2rem;\n  bottom: -1rem;\n  width: 2px;\n  background-color: #dee2e6;\n}\n.process-status-badge {\n  font-size: 0.75rem;\n  padding: 0.35em 0.65em;\n}\n/*# sourceMappingURL=resumen-etapas.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumenEtapasComponent, { className: "ResumenEtapasComponent", filePath: "src/app/main/juridico/resumen-etapas/resumen-etapas.component.ts", lineNumber: 15 });
})();

// src/app/pipes/estado-procesal.pipe.ts
var _EstadoProcesalPipe = class _EstadoProcesalPipe {
  transform(credito, ...args) {
    const juridico = credito?.juridicos?.juridicos_etapas_judiciales;
    const etapasOrdenadas = juridico?.sort((a, b) => new Date(b.updated_at ?? "").getTime() - new Date(a.updated_at ?? "").getTime());
    const ultimaEtapaActiva = etapasOrdenadas?.[0];
    if (ultimaEtapaActiva) {
      return ultimaEtapaActiva.etapas_judiciales?.nombre + " - " + ultimaEtapaActiva.etapas_judiciales?.procesos_judiciales?.nombre;
    }
    return null;
  }
};
_EstadoProcesalPipe.\u0275fac = function EstadoProcesalPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EstadoProcesalPipe)();
};
_EstadoProcesalPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "estadoprocesal", type: _EstadoProcesalPipe, pure: true });
var EstadoProcesalPipe = _EstadoProcesalPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadoProcesalPipe, [{
    type: Pipe,
    args: [{
      name: "estadoprocesal",
      standalone: true
    }]
  }], null, null);
})();

// src/app/main/juridico/resumen-juridico/resumen-juridico.component.ts
function ResumenJuridicoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isAlertShown(), " ");
  }
}
function ResumenJuridicoComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "app-ejecucion-cobro", 15);
    \u0275\u0275listener("onSaved", function ResumenJuridicoComponent_Conditional_14_Template_app_ejecucion_cobro_onSaved_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCobroSaved());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r0.credito)("evento", ctx_r0.cobroEdit);
  }
}
function ResumenJuridicoComponent_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r4);
  }
}
function ResumenJuridicoComponent_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r4);
  }
}
function ResumenJuridicoComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 16);
    \u0275\u0275listener("click", function ResumenJuridicoComponent_For_18_Template_li_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectTab(tab_r4));
    });
    \u0275\u0275conditionalCreate(1, ResumenJuridicoComponent_For_18_Conditional_1_Template, 2, 1, "a", 17)(2, ResumenJuridicoComponent_For_18_Conditional_2_Template, 2, 1, "a", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r4 == ctx_r0.tabSelected ? 1 : 2);
  }
}
function ResumenJuridicoComponent_Conditional_19_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, " Domicilio Particular: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.domicilioFromDatosModel(ctx_r0.personaFisica.datos_personales), " ");
  }
}
function ResumenJuridicoComponent_Conditional_19_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, " Domicilio Particular: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.domicilioParticularFromPm(ctx_r0.personaMoral), " ");
  }
}
function ResumenJuridicoComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19)(2, "div", 20);
    \u0275\u0275text(3, " Id Cliente: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20);
    \u0275\u0275text(8, " Nombre: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 19)(12, "div", 20);
    \u0275\u0275text(13, " Nombre Comercial: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 19)(17, "div", 20);
    \u0275\u0275text(18, " Status: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "div", 20);
    \u0275\u0275text(23, " Etapa: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 23);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "estadoprocesal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 19)(28, "div", 20);
    \u0275\u0275text(29, " Fecha \xDAltima Etapa: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 23);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "fechaetapaprocesal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 19)(34, "div", 20);
    \u0275\u0275text(35, " Resultado \xDAltima Gesti\xF3n: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 24);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "resultadoUltimaGestion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 19)(40, "div", 20);
    \u0275\u0275text(41, " Fecha \xDAltima Gesti\xF3n: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 24);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "fechaUltimaGestion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 19)(46, "div", 20);
    \u0275\u0275text(47, " Nombre: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 21);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 19)(51, "div", 20);
    \u0275\u0275text(52, " Nombre Comercial: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 21);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 19)(56, "div", 20);
    \u0275\u0275text(57, " RFC: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 21);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 19)(61, "div", 20);
    \u0275\u0275text(62, " Domicilio Negocio: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 21);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(65, ResumenJuridicoComponent_Conditional_19_Conditional_65_Template, 5, 1, "div", 19);
    \u0275\u0275conditionalCreate(66, ResumenJuridicoComponent_Conditional_19_Conditional_66_Template, 5, 1, "div", 19);
    \u0275\u0275elementStart(67, "div", 19)(68, "div", 20);
    \u0275\u0275text(69, " Email: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 25);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 19)(73, "div", 20);
    \u0275\u0275text(74, " Tel\xE9fonos: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 21);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "telefonos");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.idClienteFromCredito(ctx_r0.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.nombreClienteFromCredito(ctx_r0.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.nombreNegocioFromCredito(ctx_r0.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.creditoStatus(ctx_r0.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 16, ctx_r0.credito), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 18, ctx_r0.credito), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 20, ctx_r0.credito), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(44, 22, ctx_r0.credito), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.nombreClienteFromCredito(ctx_r0.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.nombreNegocioFromCredito(ctx_r0.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.rfcFromCredito(ctx_r0.credito), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.utils.domicilioFromDatosModel(ctx_r0.personaMoral ?? (ctx_r0.personaFisica == null ? null : ctx_r0.personaFisica.negocios)), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.personaFisica ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.personaMoral ? 66 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.personaFisica == null ? null : ctx_r0.personaFisica.datos_personales == null ? null : ctx_r0.personaFisica.datos_personales.email) ?? (ctx_r0.personaMoral == null ? null : ctx_r0.personaMoral.email), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 24, ctx_r0.credito), " ");
  }
}
function ResumenJuridicoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "app-form-juridico", 26);
    \u0275\u0275twoWayListener("editChange", function ResumenJuridicoComponent_Conditional_20_Template_app_form_juridico_editChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.juridico, $event) || (ctx_r0.juridico = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("edit", ctx_r0.juridico);
  }
}
function ResumenJuridicoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-form-juridico-despacho", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r0.credito);
  }
}
function ResumenJuridicoComponent_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, " Este cr\xE9dito no tiene un registro jur\xEDdico asociado. Por favor, cree uno en la pesta\xF1a 'Jur\xEDdico' para poder administrar las etapas. ");
    \u0275\u0275elementEnd();
  }
}
function ResumenJuridicoComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, ResumenJuridicoComponent_Conditional_22_Conditional_1_Template, 2, 0, "div", 28);
    \u0275\u0275element(2, "app-form-etapa-juridico", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!(ctx_r0.credito == null ? null : ctx_r0.credito.juridicos) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r0.credito)("juridico", ctx_r0.credito == null ? null : ctx_r0.credito.juridicos);
  }
}
function ResumenJuridicoComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-bitacora-cobranza", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r0.credito);
  }
}
function ResumenJuridicoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-juridico-bienes-inmuebles", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r0.credito);
  }
}
function ResumenJuridicoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-juridico-comentarios", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("credito", ctx_r0.credito);
  }
}
function ResumenJuridicoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "app-collapsable", 31);
    \u0275\u0275element(2, "app-juridico-eventos-juzgado", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275element(4, "app-resumen-etapas", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275element(6, "app-view-relacion-convenios", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275element(8, "app-view-gestiones-cobro", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r0.credito);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r0.credito);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r0.credito);
    \u0275\u0275advance(2);
    \u0275\u0275property("credito", ctx_r0.credito);
  }
}
var _ResumenJuridicoComponent = class _ResumenJuridicoComponent {
  constructor(creditoController, route, localStorage, utils) {
    this.creditoController = creditoController;
    this.route = route;
    this.localStorage = localStorage;
    this.utils = utils;
    this.tabs = ["Cliente", "Etapa", "Juridico", "Cobros", "Bienes Inmuebles", "Comentarios", "Despacho"];
    this.tabSelected = "Cliente";
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      const id = params["credito_id"];
      if (id) {
        this.setData(id);
      }
    }));
  }
  setData(id) {
    return __async(this, null, function* () {
      if (!id)
        return;
      this.credito = yield this.creditoController.find(id, ["*"]);
      this.juridico = this.credito?.juridicos;
      this.personaFisica = this.credito?.datos_persona_fisica;
      this.personaMoral = this.credito?.datos_personas_morales;
      console.log(this.credito);
    });
  }
  selectTab(tab) {
    if (tab === "Cliente") {
      this.setData(this.credito?.id);
    }
    this.tabSelected = tab;
  }
  isAlertShown() {
    if (!this.juridico || !this.juridico.juridicos_etapas_judiciales?.length)
      return "";
    this.juridico.juridicos_etapas_judiciales.sort((a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime());
    const ultimaEtapaActiva = this.juridico.juridicos_etapas_judiciales[this.juridico.juridicos_etapas_judiciales.length - 1];
    if (ultimaEtapaActiva.fecha) {
      const fechaEtapa = /* @__PURE__ */ new Date(ultimaEtapaActiva.fecha.substring(0, 10) + "T17:00:00Z");
      const hoy = /* @__PURE__ */ new Date();
      const diffTime = hoy.getTime() - fechaEtapa.getTime();
      const diffDays = Math.floor(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays >= 60) {
        return `\xA1Alerta! Lleva m\xE1s ${diffDays} d\xEDas desde la \xFAltima actualizaci\xF3n de la etapa.`;
      }
    }
    if (!ultimaEtapaActiva.fecha) {
      return "\xA1Alerta! La \xFAltima etapa asiganda no tiene fecha";
    }
    return "";
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
      const usuario = this.localStorage.getUser();
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
  * Inserta a la lista local de cobros el evento recien guardado y lo vuelve undefined para ocultar el formulario
  */
  onCobroSaved() {
    this.credito?.credito_evento_cobros?.unshift(this.utils.copyOf(this.cobroEdit));
    this.cobroEdit = void 0;
  }
};
_ResumenJuridicoComponent.\u0275fac = function ResumenJuridicoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResumenJuridicoComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(UtilsService));
};
_ResumenJuridicoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResumenJuridicoComponent, selectors: [["app-resumen-juridico"]], decls: 27, vars: 10, consts: [[1, "container-fluid", "p-3", "bg-white", "rounded", "shadow"], [1, "row", "justify-content-end"], [1, "col", "p-3"], ["role", "alert", 1, "alert", "alert-danger", "sticky-top"], [1, "row"], [1, "col-auto", "ms-auto"], [1, "btn", "btn-outline-secondary", "m-1", 3, "click"], [1, "bi", "bi-telephone-plus-fill"], [1, "bi", "bi-house-exclamation-fill"], [1, "bi", "bi-envelope-exclamation-fill"], [1, "container-fluid", "p-3", "mb-2", "sticky-top"], [1, "container-fluid", "shadow", "rounded", "border", "border-primary", "pt-2"], [1, "nav", "nav-tabs"], [1, "nav-item"], [1, "container-fluid", "p-3"], ["div", "container-fluid bg-white rounded shadow p-3", 3, "onSaved", "credito", "evento"], [1, "nav-item", 3, "click"], [1, "nav-link", "active", "fw-bold", "text-primary"], [1, "nav-link", "pointer"], [1, "row", "my-1"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2", "text-bg-secondary"], [1, "col-12", "col-sm", "text-uppercase"], [1, "col-12", "col-sm", "text-uppercase", "fw-bold"], [1, "col-12", "col-sm", "text-uppercase", "text-primary", "fw-bolder"], [1, "col-12", "col-sm", "text-uppercase", "fw-bolder"], [1, "col-12", "col-sm"], [3, "editChange", "edit"], [3, "credito"], [1, "alert", "alert-warning"], [3, "credito", "juridico"], [1, "container-fluid", "mb-2"], ["title", "Bitacora de Eventos"], [1, "container-fluid", "my-3"]], template: function ResumenJuridicoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
    \u0275\u0275text(4, "Resumen Jur\xEDdico de Cr\xE9dito");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(5, ResumenJuridicoComponent_Conditional_5_Template, 2, 1, "div", 3);
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function ResumenJuridicoComponent_Template_button_click_8_listener() {
      return ctx.nuevaCobranza("LLAMADA");
    });
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275listener("click", function ResumenJuridicoComponent_Template_button_click_10_listener() {
      return ctx.nuevaCobranza("NOTIFICACION DOMICILIARIA");
    });
    \u0275\u0275element(11, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 6);
    \u0275\u0275listener("click", function ResumenJuridicoComponent_Template_button_click_12_listener() {
      return ctx.nuevaCobranza("CORREO ELECTRONICO");
    });
    \u0275\u0275element(13, "i", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, ResumenJuridicoComponent_Conditional_14_Template, 2, 2, "div", 10);
    \u0275\u0275elementStart(15, "div", 11)(16, "ul", 12);
    \u0275\u0275repeaterCreate(17, ResumenJuridicoComponent_For_18_Template, 3, 1, "li", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ResumenJuridicoComponent_Conditional_19_Template, 78, 26, "div", 14);
    \u0275\u0275conditionalCreate(20, ResumenJuridicoComponent_Conditional_20_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(21, ResumenJuridicoComponent_Conditional_21_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(22, ResumenJuridicoComponent_Conditional_22_Template, 3, 3, "div", 14);
    \u0275\u0275conditionalCreate(23, ResumenJuridicoComponent_Conditional_23_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(24, ResumenJuridicoComponent_Conditional_24_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(25, ResumenJuridicoComponent_Conditional_25_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, ResumenJuridicoComponent_Conditional_26_Template, 9, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!!ctx.isAlertShown() ? 5 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.cobroEdit ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.tabSelected == "Cliente" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Juridico" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Despacho" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Etapa" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Cobros" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Bienes Inmuebles" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tabSelected == "Comentarios" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito ? 26 : -1);
  }
}, dependencies: [
  FormJuridicoComponent,
  ViewRelacionConveniosComponent,
  ViewGestionesCobroComponent,
  FormJuridicoDespachoComponent,
  JuridicoEventosJuzgadoComponent,
  BitacoraCobranzaComponent,
  JuridicoBienesInmueblesComponent,
  JuridicoComentariosComponent,
  TelefonosPipe,
  CollapsableComponent,
  FormEtapaJuridicoComponent,
  EjecucionCobroComponent,
  FechaEtapaProcesalPipe,
  ResultadoUltimaGestionPipe,
  FechaUltimaGestionPipe,
  EstadoProcesalPipe,
  ResumenEtapasComponent
], encapsulation: 2 });
var ResumenJuridicoComponent = _ResumenJuridicoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResumenJuridicoComponent, [{
    type: Component,
    args: [{ selector: "app-resumen-juridico", imports: [
      FormJuridicoComponent,
      ViewRelacionConveniosComponent,
      ViewGestionesCobroComponent,
      FormJuridicoDespachoComponent,
      JuridicoEventosJuzgadoComponent,
      BitacoraCobranzaComponent,
      JuridicoBienesInmueblesComponent,
      JuridicoComentariosComponent,
      TelefonosPipe,
      CollapsableComponent,
      FormEtapaJuridicoComponent,
      EjecucionCobroComponent,
      FechaEtapaProcesalPipe,
      ResultadoUltimaGestionPipe,
      FechaUltimaGestionPipe,
      EstadoProcesalPipe,
      ResumenEtapasComponent
    ], template: `<div class="container-fluid p-3 bg-white rounded shadow">
  <div class="row justify-content-end">
    <div class="col p-3">
      <h4>Resumen Jur\xEDdico de Cr\xE9dito</h4>
    </div>
  </div>
  @if (!!isAlertShown()) {
    <div class="alert alert-danger sticky-top" role="alert">
      {{isAlertShown()}}
    </div>
  }
  <div class="row">
    <div class="col-auto ms-auto">
      <button class="btn btn-outline-secondary m-1" (click)="nuevaCobranza('LLAMADA')"><i class="bi bi-telephone-plus-fill"></i></button>
      <button class="btn btn-outline-secondary m-1" (click)="nuevaCobranza('NOTIFICACION DOMICILIARIA')"><i class="bi bi-house-exclamation-fill"></i></button>
      <button class="btn btn-outline-secondary m-1" (click)="nuevaCobranza('CORREO ELECTRONICO')"><i class="bi bi-envelope-exclamation-fill"></i></button>
    </div>
  </div>
  @if (cobroEdit) {
    <div class="container-fluid p-3 mb-2 sticky-top ">
      <app-ejecucion-cobro [credito]="credito" [evento]="cobroEdit" (onSaved)="onCobroSaved()" div="container-fluid bg-white rounded shadow p-3" />
    </div>
  }
  <div class="container-fluid shadow rounded border border-primary pt-2">
    <ul class="nav nav-tabs">
      @for (tab of tabs; track tab) {
        <li class="nav-item" (click)="selectTab(tab)">
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
          <div class="col-12 col-sm text-uppercase">
            {{utils.idClienteFromCredito(credito)}}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Nombre:
          </div>
          <div class="col-12 col-sm text-uppercase">
            {{utils.nombreClienteFromCredito(credito)}}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Nombre Comercial:
          </div>
          <div class="col-12 col-sm text-uppercase">
            {{utils.nombreNegocioFromCredito(credito)}}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Status:
          </div>
          <div class="col-12 col-sm text-uppercase fw-bold">
            {{utils.creditoStatus(credito)}}
          </div>
        </div>        
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Etapa:
          </div>
          <div class="col-12 col-sm text-uppercase text-primary fw-bolder">
            {{credito | estadoprocesal}}            
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Fecha \xDAltima Etapa:
          </div>
          <div class="col-12 col-sm text-uppercase text-primary fw-bolder">
            {{credito | fechaetapaprocesal}}            
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Resultado \xDAltima Gesti\xF3n:
          </div>
          <div class="col-12 col-sm text-uppercase fw-bolder">
            {{credito | resultadoUltimaGestion}}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Fecha \xDAltima Gesti\xF3n:
          </div>
          <div class="col-12 col-sm text-uppercase fw-bolder">
            {{ credito | fechaUltimaGestion }}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Nombre:
          </div>
          <div class="col-12 col-sm text-uppercase">
            {{utils.nombreClienteFromCredito(credito)}}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Nombre Comercial:
          </div>
          <div class="col-12 col-sm text-uppercase">
            {{utils.nombreNegocioFromCredito(credito)}}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            RFC:
          </div>
          <div class="col-12 col-sm text-uppercase">
            {{utils.rfcFromCredito(credito)}}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Domicilio Negocio:
          </div>
          <div class="col-12 col-sm text-uppercase">
            {{utils.domicilioFromDatosModel(personaMoral?? personaFisica?.negocios )}}
          </div>
        </div>
        @if (personaFisica) {
          <div class="row my-1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
              Domicilio Particular:
            </div>
            <div class="col-12 col-sm text-uppercase">
              {{utils.domicilioFromDatosModel(personaFisica.datos_personales)}}
            </div>
          </div>
        }
        @if (personaMoral) {
          <div class="row my-1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
              Domicilio Particular:
            </div>
            <div class="col-12 col-sm text-uppercase">
              {{utils.domicilioParticularFromPm(personaMoral)}}
            </div>
          </div>
        }
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Email:
          </div>
          <div class="col-12 col-sm">
            {{personaFisica?.datos_personales?.email ?? personaMoral?.email }}
          </div>
        </div>
        <div class="row my-1">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-bg-secondary">
            Tel\xE9fonos:
          </div>
          <div class="col-12 col-sm text-uppercase">
            {{credito | telefonos}}
          </div>
        </div>
      </div>
    }
    @if (tabSelected=='Juridico') {
      <div class="container-fluid p-3">
        <app-form-juridico [(edit)]="juridico" />
      </div>
    }
    @if (tabSelected=='Despacho') {
      <div class="container-fluid p-3">
        <app-form-juridico-despacho [credito]="credito" />
      </div>
    }
    @if (tabSelected=='Etapa') {
      <div class="container-fluid p-3">
        @if(!credito?.juridicos){
          <div class="alert alert-warning">
            Este cr\xE9dito no tiene un registro jur\xEDdico asociado. Por favor, cree uno en la pesta\xF1a 'Jur\xEDdico' para poder administrar las etapas.
          </div>
        }        
          <app-form-etapa-juridico [credito]="credito" [juridico]="credito?.juridicos" />        
      </div>
    }
    @if (tabSelected=='Cobros') {
      <div class="container-fluid p-3">
        <app-bitacora-cobranza [credito]="credito" />
      </div>
    }
    @if (tabSelected=='Bienes Inmuebles') {
      <div class="container-fluid p-3">
        <app-juridico-bienes-inmuebles [credito]="credito"/>
      </div>
    }
    @if (tabSelected=='Comentarios') {
      <div class="container-fluid p-3">
        <app-juridico-comentarios [credito]="credito" />
      </div>
    }
  </div>
  @if (credito) {
    <div class="container-fluid mb-2">
      <app-collapsable title="Bitacora de Eventos">
        <app-juridico-eventos-juzgado [credito]="credito" />
      </app-collapsable>
    </div>
    <div class="container-fluid mb-2">
      <app-resumen-etapas [credito]="credito" />
    </div>
    <div class="container-fluid mb-2">
      <app-view-relacion-convenios [credito]="credito" />
    </div>
    <div class="container-fluid my-3">
      <app-view-gestiones-cobro [credito]="credito"/>
    </div>
  }
</div>` }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }, { type: LocalStorageService }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResumenJuridicoComponent, { className: "ResumenJuridicoComponent", filePath: "src/app/main/juridico/resumen-juridico/resumen-juridico.component.ts", lineNumber: 55 });
})();

// src/app/main/juridico/list-creditos/list-creditos.component.ts
function ListCreditosComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 11)(2, "button", 12);
    \u0275\u0275listener("click", function ListCreditosComponent_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentTab = 1);
    });
    \u0275\u0275text(3, " Atr\xE1s ");
    \u0275\u0275elementEnd()()();
  }
}
function ListCreditosComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-juridico", 13);
    \u0275\u0275twoWayListener("editChange", function ListCreditosComponent_Conditional_16_Template_app_form_juridico_editChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.juridicoForm, $event) || (ctx_r1.juridicoForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("editChange", function ListCreditosComponent_Conditional_16_Template_app_form_juridico_editChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentTab = 2);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("edit", ctx_r1.juridicoForm);
    \u0275\u0275property("formLocal", true);
  }
}
function ListCreditosComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-form-juridico-despacho", 14);
    \u0275\u0275twoWayListener("editChange", function ListCreditosComponent_Conditional_17_Template_app_form_juridico_despacho_editChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.creditoDespachoForm, $event) || (ctx_r1.creditoDespachoForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("editChange", function ListCreditosComponent_Conditional_17_Template_app_form_juridico_despacho_editChange_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.asignarAJuridico());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("edit", ctx_r1.creditoDespachoForm);
    \u0275\u0275property("localForm", true);
  }
}
var TABLA_DEF2 = {
  columns: [
    {
      key: "id",
      header: "ID"
    },
    {
      key: "row",
      header: "Estado",
      function: (credito, utils) => {
        return utils.creditoStatus(credito);
      }
    },
    {
      key: "row",
      header: "Cliente",
      function: (row, utils) => {
        return utils.nombreClienteFromCredito(row);
      },
      pipe: "uppercase"
    },
    {
      key: "row",
      header: "Municipio",
      function: (row, utils) => {
        return utils.municipioFromCredito(row);
      },
      pipe: "uppercase"
    },
    {
      key: "estado_cuenta",
      header: "Pagos Vencidos",
      function: (estado) => {
        return (estado?.mensualidades_vencidas ?? 0).toString();
      }
    },
    {
      key: "estado_cuenta",
      header: "Vencido desde",
      subKey: "vencido_desde",
      pipe: "date"
    },
    {
      key: "estado_cuenta",
      header: "Liquidar Sin Moratorios",
      function: (estado) => {
        if (!estado)
          return "0";
        return (estado?.total_a_liquidar ?? 0).toString();
      },
      pipe: "currency"
    },
    {
      key: "row",
      header: "Capital",
      function: (credito, utils) => {
        return utils.totalFromCredito(credito).toString();
      },
      pipe: "currency"
    },
    {
      key: "fecha_convenio",
      header: "Fecha Inicio",
      pipe: "date"
    }
  ]
};
var HEADER_BUTTONS = [
  {
    key: "asignar_juridico",
    text: "Asignar A Juridico",
    style: {
      button: "btn btn-secondary shadow-sm"
    }
  },
  {
    key: "asignar_juridico_todos",
    text: "Asignar Todos",
    style: {
      button: "btn btn-secondary shadow-sm"
    }
  }
];
var EDIT_BUTTON = {
  style: {
    icon: "bi bi-eye-fill",
    button: "btn btn-info"
  }
};
var _ListCreditosComponent = class _ListCreditosComponent {
  constructor(creditoController, juridicoController, creditoDespachoController, dialog) {
    this.creditoController = creditoController;
    this.juridicoController = juridicoController;
    this.creditoDespachoController = creditoDespachoController;
    this.dialog = dialog;
    this.tabla = TABLA_DEF2;
    this.extraData = {
      filtro: "juridico-todos"
    };
    this.title = "Cr\xE9ditos en Cartera Vencida";
    this.showForm = false;
    this.currentTab = 1;
    this.headerButtons = HEADER_BUTTONS;
    this.editButton = EDIT_BUTTON;
    this.creditosSelected = [];
    this.conditionals = [];
    this.relations = [
      "estadoCuenta",
      "creditosPagos",
      "convenios.conveniosPagos",
      "abonos",
      "productosFinancieros",
      "usuarios",
      "sucursales",
      "datosPersonaFisica.datosPersonales",
      "datosPersonasMorales",
      "productosFinancieros.plazos",
      "datosPersonaFisica.negocios",
      "creditosDespachos.despachos",
      "juridicos"
    ];
  }
  updateBusquedaAvanzada(extra) {
    this.extraData = {
      filtro: this.extraData.filtro,
      busqueda_avanzada: extra.busqueda_avanzada
    };
  }
  applyFilter(filtro) {
    if (filtro.includes("extrajudiciales")) {
      this.title = "Cr\xE9ditos en Extrajudicial";
    } else if (filtro.includes("judiciales")) {
      this.title = "Cr\xE9ditos en Judicial";
    } else {
      this.title = "Cr\xE9ditos en Cartera Vencida";
    }
    this.extraData = { filtro };
  }
  manageHeaderButtonEvent(event) {
    switch (event) {
      case "asignar_juridico":
        if (this.evaluarCreditoJuricoSeleccionados())
          return;
        this.abrirFormulario();
    }
  }
  evaluarCreditoJuricoSeleccionados() {
    if (this.creditosSelected.length == 0) {
      this.dialog.show({
        title: "Advertencia",
        body: "Selecciona al menos un cr\xE9dito.",
        tipo: "warning"
      });
      return true;
    } else if (this.creditosSelected.some((c) => c.juridicos)) {
      const creditosEnJuridico = this.creditosSelected.filter((c) => c.juridicos);
      const creditosIds = creditosEnJuridico.map((c) => c.id).join(", ");
      this.dialog.show({
        title: "Cr\xE9ditos en Proceso Jur\xEDdico",
        body: `Los siguientes cr\xE9ditos ya se encuentran en proceso jur\xEDdico: ${creditosIds}.`,
        tipo: "warning"
      });
      return true;
    } else if (this.creditosSelected.some((c) => c.estado == "FINALIZADO" || c.estado_cuenta?.total_a_liquidar === 0)) {
      const creditosSaldadosFinalizados = this.creditosSelected.filter((c) => c.estado == "FINALIZADO" || c.estado_cuenta?.total_a_liquidar === 0).map((c) => c.id);
      this.dialog.show({
        title: "Advertencia",
        body: `Existe al menos 1 cr\xE9dito saldado en su selecci\xF3n: ${creditosSaldadosFinalizados.join(", ")}. Por favor, revise los cr\xE9ditos seleccionados y elimine aquellos que ya est\xE9n saldados.`,
        tipo: "warning"
      });
      return true;
    }
    return false;
  }
  abrirFormulario() {
    if (this.creditosSelected.length === 0)
      return;
    this.juridicoForm = void 0;
    this.creditoDespachoForm = void 0;
    this.currentTab = 1;
    this.showForm = true;
  }
  asignarAJuridico() {
    return __async(this, null, function* () {
      if (!this.juridicoForm)
        return;
      const juridicosNuevos = [];
      const creditoDespachos = [];
      this.creditosSelected.filter((credito) => !credito.juridicos).forEach((credito) => {
        juridicosNuevos.push(__spreadProps(__spreadValues({}, this.juridicoForm), {
          credito_id: credito.id
        }));
        creditoDespachos.push(__spreadProps(__spreadValues({}, this.creditoDespachoForm), {
          credito_id: credito.id
        }));
      });
      if (juridicosNuevos.length > 0) {
        this.dialog.show({
          title: "Todo correcto",
          body: juridicosNuevos.length + " cr\xE9ditos fueron asignados a jur\xEDdico de forma correcta.",
          tipo: "success"
        });
      }
      ;
      for (let i = 0; i < juridicosNuevos.length; i++) {
        let res = !!(yield this.juridicoController.new(juridicosNuevos[i]));
        res = res && !!(yield this.creditoDespachoController.new(creditoDespachos[i]));
        if (!res)
          return;
      }
    });
  }
};
_ListCreditosComponent.\u0275fac = function ListCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCreditosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(JuridicoService), \u0275\u0275directiveInject(CreditoDespachoService), \u0275\u0275directiveInject(VanillaDialogService));
};
_ListCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCreditosComponent, selectors: [["app-list-creditos"]], decls: 19, vars: 20, consts: [[1, "row", "mt-3"], [1, "col", "px-3", "ps-5"], [1, "col-auto", "px-3"], [1, "btn", "btn-primary", "shadow-sm", "m-1", 3, "click"], [3, "conditionalsChange", "extraDataChange", "fetchData", "conditionals"], ["size", "large", 3, "showChange", "show"], [1, "container-fluid", "px-5", "position-relative"], [1, "row", "justify-content-end", "position-abosolute", "top-0", "start-0"], [3, "edit", "formLocal"], [3, "edit", "localForm"], [3, "barraButtonClickEvent", "selectedRowsChange", "getExtra", "getConditionals", "agregar", "eliminar", "eliminados", "barraBusqueda", "tableDefinition", "barraButtons", "rowEditarButton", "relations", "controller", "rowEditarRoute", "selectedRows"], [1, "col-auto"], [1, "btn", "btn-primary", 3, "click"], [3, "editChange", "edit", "formLocal"], [3, "editChange", "edit", "localForm"]], template: function ListCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4")(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 2)(6, "button", 3);
    \u0275\u0275listener("click", function ListCreditosComponent_Template_button_click_6_listener() {
      return ctx.applyFilter("juridico-todos");
    });
    \u0275\u0275text(7, "Ver Todos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 3);
    \u0275\u0275listener("click", function ListCreditosComponent_Template_button_click_8_listener() {
      return ctx.applyFilter("juridico-extrajudiciales");
    });
    \u0275\u0275text(9, "Ver EXTRAJUDICIALES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 3);
    \u0275\u0275listener("click", function ListCreditosComponent_Template_button_click_10_listener() {
      return ctx.applyFilter("juridico-judiciales");
    });
    \u0275\u0275text(11, "Ver JUDICIALES");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "app-buscador-creditos", 4);
    \u0275\u0275twoWayListener("conditionalsChange", function ListCreditosComponent_Template_app_buscador_creditos_conditionalsChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.conditionals, $event) || (ctx.conditionals = $event);
      return $event;
    });
    \u0275\u0275listener("extraDataChange", function ListCreditosComponent_Template_app_buscador_creditos_extraDataChange_12_listener($event) {
      return ctx.updateBusquedaAvanzada($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "app-formulario-flotante", 5);
    \u0275\u0275twoWayListener("showChange", function ListCreditosComponent_Template_app_formulario_flotante_showChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
      return $event;
    });
    \u0275\u0275elementStart(14, "div", 6);
    \u0275\u0275conditionalCreate(15, ListCreditosComponent_Conditional_15_Template, 4, 0, "div", 7);
    \u0275\u0275conditionalCreate(16, ListCreditosComponent_Conditional_16_Template, 1, 2, "app-form-juridico", 8);
    \u0275\u0275conditionalCreate(17, ListCreditosComponent_Conditional_17_Template, 1, 2, "app-form-juridico-despacho", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "app-tabla", 10);
    \u0275\u0275listener("barraButtonClickEvent", function ListCreditosComponent_Template_app_tabla_barraButtonClickEvent_18_listener($event) {
      return ctx.manageHeaderButtonEvent($event);
    });
    \u0275\u0275twoWayListener("selectedRowsChange", function ListCreditosComponent_Template_app_tabla_selectedRowsChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.creditosSelected, $event) || (ctx.creditosSelected = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(8);
    \u0275\u0275property("fetchData", false);
    \u0275\u0275twoWayProperty("conditionals", ctx.conditionals);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showForm);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.currentTab == 2 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.currentTab === 1 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.currentTab === 2 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("getExtra", ctx.extraData)("getConditionals", ctx.conditionals)("agregar", false)("eliminar", false)("eliminados", false)("barraBusqueda", false)("tableDefinition", ctx.tabla)("barraButtons", ctx.headerButtons)("rowEditarButton", ctx.editButton)("relations", ctx.relations)("controller", ctx.creditoController)("rowEditarRoute", "/main/juridico");
    \u0275\u0275twoWayProperty("selectedRows", ctx.creditosSelected);
  }
}, dependencies: [
  TablaComponent,
  BuscadorCreditosComponent,
  FormularioFlotanteComponent,
  FormJuridicoComponent,
  FormJuridicoDespachoComponent
], encapsulation: 2 });
var ListCreditosComponent = _ListCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-list-creditos", imports: [
      TablaComponent,
      BuscadorCreditosComponent,
      FormularioFlotanteComponent,
      FormJuridicoComponent,
      FormJuridicoDespachoComponent
    ], template: `<div class="row mt-3">
  <div class="col px-3 ps-5">
    <h4><b>{{title}}</b></h4>
  </div>
  <div class="col-auto px-3">
    <button class="btn btn-primary shadow-sm m-1" (click)="applyFilter('juridico-todos')">Ver Todos</button>
    <button class="btn btn-primary shadow-sm m-1" (click)="applyFilter('juridico-extrajudiciales')">Ver EXTRAJUDICIALES</button>
    <button class="btn btn-primary shadow-sm m-1" (click)="applyFilter('juridico-judiciales')">Ver JUDICIALES</button>
  </div>
</div>
<app-buscador-creditos [fetchData]="false" [(conditionals)]="conditionals" (extraDataChange)="updateBusquedaAvanzada($event)" />
<app-formulario-flotante [(show)]="showForm" size="large">
  <div class="container-fluid px-5 position-relative">
    @if (currentTab==2) {
      <div class="row justify-content-end position-abosolute top-0 start-0">
        <div class="col-auto">
          <button class="btn btn-primary" (click)="currentTab=1">
            Atr\xE1s
          </button>
        </div>
      </div>
    }
    @if (currentTab===1) {
      <app-form-juridico [(edit)]="juridicoForm" [formLocal]="true" (editChange)="currentTab=2" />
    }
    @if (currentTab===2) {
      <app-form-juridico-despacho [(edit)]="creditoDespachoForm" [localForm]="true" (editChange)="asignarAJuridico()" />
    }
  </div>
</app-formulario-flotante>
<app-tabla
  [getExtra]="extraData"
  [getConditionals]="conditionals"
  [agregar]="false"
  [eliminar]="false"
  [eliminados]="false"
  [barraBusqueda]="false"
  [tableDefinition]="tabla"
  [barraButtons]="headerButtons"
  [rowEditarButton]="editButton"
  [relations]="relations"
  [controller]="creditoController"
  [rowEditarRoute]="'/main/juridico'"
  (barraButtonClickEvent)="manageHeaderButtonEvent($event)"
  [(selectedRows)]="creditosSelected"
  />` }]
  }], () => [{ type: CreditoService }, { type: JuridicoService }, { type: CreditoDespachoService }, { type: VanillaDialogService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCreditosComponent, { className: "ListCreditosComponent", filePath: "src/app/main/juridico/list-creditos/list-creditos.component.ts", lineNumber: 122 });
})();

// src/app/main/juridico/list-extra-judicial/list-extra-judicial.component.ts
function ListExtraJudicialComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 4);
    \u0275\u0275text(1, "FOLIO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 4);
    \u0275\u0275text(3, "A\xD1O DEL CR\xC9DITO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 4);
    \u0275\u0275text(5, "NOMBRE COMERCIAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 4);
    \u0275\u0275text(7, "RAZ\xD3N SOCIAL/NOMBRE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 4);
    \u0275\u0275text(9, "EMAIL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 4);
    \u0275\u0275text(11, "RFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 4);
    \u0275\u0275text(13, "PERSONA FISICA / MORAL");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 5);
    \u0275\u0275text(1, "TEL\xC9FONO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 5);
    \u0275\u0275text(3, "DOM. PART. / CALLE / NUMERO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 5);
    \u0275\u0275text(5, "DOM. PART. / COLONIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 5);
    \u0275\u0275text(7, "DOM. PART. / C.P.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 5);
    \u0275\u0275text(9, "LOCALIDAD");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 6);
    \u0275\u0275text(1, "MENSUALIDADES VENCIDAS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 6);
    \u0275\u0275text(3, "MONTO VENCIDO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 6);
    \u0275\u0275text(5, "ULTIMO PAGO");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 7);
    \u0275\u0275text(1, "DESPACHO DE NOTIFICACIONES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 7);
    \u0275\u0275text(3, "RESULTADO DE NOTIFICACI\xD3N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 7);
    \u0275\u0275text(5, "DETALLE");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 8);
    \u0275\u0275text(1, "OBSERVACIONES JUR\xCDDICO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 8);
    \u0275\u0275text(3, "SEGUIMIENTO JUR\xCDDICO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 8);
    \u0275\u0275text(5, "DESPACHO ASIGNADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 8);
    \u0275\u0275text(7, "ANTECEDENTE EXPEDIENTE JUZGADOS");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 5);
    \u0275\u0275text(1, "GESTION DE COBRO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "th", 5);
    \u0275\u0275text(3, "FECHA \xDALTIMA GESTI\xD3N");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 5);
    \u0275\u0275text(5, "RESULTADO - ESTATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 5);
    \u0275\u0275text(7, "OBSERVACIONES");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "FOL123");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3, "2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, "Mi Empresa S.A.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7, "Mi Empresa S.A. de C.V.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9, "cliente(A)empresa.com");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11, "ABC123456XYZ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13, "Moral");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "555-1234");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3, "Calle Principal 123");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, "Centro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7, "12345");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9, "Ciudad de M\xE9xico");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3, "$15,000.00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, "01/09/2023");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "Despacho Legal 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3, "Notificado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, "Detalle de notificaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "Observaci\xF3n jur\xEDdica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3, "En seguimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, "Despacho Asignado 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7, "Expediente 12345");
    \u0275\u0275elementEnd();
  }
}
function ListExtraJudicialComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "Gesti\xF3n activa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3, "10/10/2023");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5, "En proceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7, "Observaciones adicionales");
    \u0275\u0275elementEnd();
  }
}
var _ListExtraJudicialComponent = class _ListExtraJudicialComponent {
  constructor(creditoController) {
    this.creditoController = creditoController;
    this.dataSource = [];
    this.secciones = {
      cliente: true,
      contacto: false,
      estado_cuenta: false,
      despacho: true,
      juridico: true,
      cobranza: false
    };
  }
};
_ListExtraJudicialComponent.\u0275fac = function ListExtraJudicialComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListExtraJudicialComponent)(\u0275\u0275directiveInject(CreditoService));
};
_ListExtraJudicialComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListExtraJudicialComponent, selectors: [["app-list-extra-judicial"]], decls: 20, vars: 12, consts: [[1, "mt-3", "fw-bold"], [1, "table-responsive"], [1, "table", "table-sm"], [1, "text-uppercase"], [1, "table-info"], [1, "table-secondary"], [1, "table-warning"], [1, "table-despacho"], [1, "text-bg-primary"]], template: function ListExtraJudicialComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1, "Cartera Extrajudicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1)(3, "table", 2)(4, "thead")(5, "tr");
    \u0275\u0275conditionalCreate(6, ListExtraJudicialComponent_Conditional_6_Template, 14, 0);
    \u0275\u0275conditionalCreate(7, ListExtraJudicialComponent_Conditional_7_Template, 10, 0);
    \u0275\u0275conditionalCreate(8, ListExtraJudicialComponent_Conditional_8_Template, 6, 0);
    \u0275\u0275conditionalCreate(9, ListExtraJudicialComponent_Conditional_9_Template, 6, 0);
    \u0275\u0275conditionalCreate(10, ListExtraJudicialComponent_Conditional_10_Template, 8, 0);
    \u0275\u0275conditionalCreate(11, ListExtraJudicialComponent_Conditional_11_Template, 8, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody")(13, "tr", 3);
    \u0275\u0275conditionalCreate(14, ListExtraJudicialComponent_Conditional_14_Template, 14, 0);
    \u0275\u0275conditionalCreate(15, ListExtraJudicialComponent_Conditional_15_Template, 10, 0);
    \u0275\u0275conditionalCreate(16, ListExtraJudicialComponent_Conditional_16_Template, 6, 0);
    \u0275\u0275conditionalCreate(17, ListExtraJudicialComponent_Conditional_17_Template, 6, 0);
    \u0275\u0275conditionalCreate(18, ListExtraJudicialComponent_Conditional_18_Template, 8, 0);
    \u0275\u0275conditionalCreate(19, ListExtraJudicialComponent_Conditional_19_Template, 8, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.secciones.cliente ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.contacto ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.estado_cuenta ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.despacho ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.juridico ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.cobranza ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.secciones.cliente ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.contacto ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.estado_cuenta ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.despacho ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.juridico ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.secciones.cobranza ? 19 : -1);
  }
}, styles: ["\n\n.table-despacho[_ngcontent-%COMP%] {\n  color: black;\n  background-color: lightblue;\n}\n/*# sourceMappingURL=list-extra-judicial.component.css.map */"] });
var ListExtraJudicialComponent = _ListExtraJudicialComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListExtraJudicialComponent, [{
    type: Component,
    args: [{ selector: "app-list-extra-judicial", imports: [], template: '<h3 class="mt-3 fw-bold">Cartera Extrajudicial</h3>\n<div class="table-responsive">\n  <table class="table table-sm">\n    <thead>\n      <tr>\n        @if (secciones.cliente) {\n          <th class="table-info">FOLIO</th>\n          <th class="table-info">A\xD1O DEL CR\xC9DITO</th>\n          <th class="table-info">NOMBRE COMERCIAL</th>\n          <th class="table-info">RAZ\xD3N SOCIAL/NOMBRE</th>\n          <th class="table-info">EMAIL</th>\n          <th class="table-info">RFC</th>\n          <th class="table-info">PERSONA FISICA / MORAL</th>\n        }\n        @if (secciones.contacto) {\n          <th class="table-secondary">TEL\xC9FONO</th>\n          <th class="table-secondary">DOM. PART. / CALLE / NUMERO</th>\n          <th class="table-secondary">DOM. PART. / COLONIA</th>\n          <th class="table-secondary">DOM. PART. / C.P.</th>\n          <th class="table-secondary">LOCALIDAD</th>\n        }\n        @if (secciones.estado_cuenta) {\n          <th class="table-warning">MENSUALIDADES VENCIDAS</th>\n          <th class="table-warning">MONTO VENCIDO</th>\n          <th class="table-warning">ULTIMO PAGO</th>\n        }\n        @if (secciones.despacho) {\n          <th class="table-despacho">DESPACHO DE NOTIFICACIONES</th>\n          <th class="table-despacho">RESULTADO DE NOTIFICACI\xD3N</th>\n          <th class="table-despacho">DETALLE</th>\n        }\n        @if (secciones.juridico) {\n          <th class="text-bg-primary">OBSERVACIONES JUR\xCDDICO</th>\n          <th class="text-bg-primary">SEGUIMIENTO JUR\xCDDICO</th>\n          <th class="text-bg-primary">DESPACHO ASIGNADO</th>\n          <th class="text-bg-primary">ANTECEDENTE EXPEDIENTE JUZGADOS</th>\n        }\n        @if (secciones.cobranza) {\n          <th class="table-secondary">GESTION DE COBRO</th>\n          <th class="table-secondary">FECHA \xDALTIMA GESTI\xD3N</th>\n          <th class="table-secondary">RESULTADO - ESTATUS</th>\n          <th class="table-secondary">OBSERVACIONES</th>\n        }\n      </tr>\n    </thead>\n    <tbody>\n      <tr class="text-uppercase">\n        @if (secciones.cliente) {\n          <td>FOL123</td>\n          <td>2023</td>\n          <td>Mi Empresa S.A.</td>\n          <td>Mi Empresa S.A. de C.V.</td>\n          <td>cliente(A)empresa.com</td>\n          <td>ABC123456XYZ</td>\n          <td>Moral</td>\n        }\n        @if (secciones.contacto) {\n          <td>555-1234</td>\n          <td>Calle Principal 123</td>\n          <td>Centro</td>\n          <td>12345</td>\n          <td>Ciudad de M\xE9xico</td>\n        }\n        @if (secciones.estado_cuenta) {\n          <td>3</td>\n          <td>$15,000.00</td>\n          <td>01/09/2023</td>\n        }\n        @if (secciones.despacho) {\n          <td>Despacho Legal 1</td>\n          <td>Notificado</td>\n          <td>Detalle de notificaci\xF3n</td>\n        }\n        @if (secciones.juridico) {\n          <td>Observaci\xF3n jur\xEDdica</td>\n          <td>En seguimiento</td>\n          <td>Despacho Asignado 1</td>\n          <td>Expediente 12345</td>\n        }\n        @if (secciones.cobranza) {\n          <td>Gesti\xF3n activa</td>\n          <td>10/10/2023</td>\n          <td>En proceso</td>\n          <td>Observaciones adicionales</td>\n        }\n      </tr>\n    </tbody>\n  </table>\n</div>', styles: ["/* src/app/main/juridico/list-extra-judicial/list-extra-judicial.component.css */\n.table-despacho {\n  color: black;\n  background-color: lightblue;\n}\n/*# sourceMappingURL=list-extra-judicial.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListExtraJudicialComponent, { className: "ListExtraJudicialComponent", filePath: "src/app/main/juridico/list-extra-judicial/list-extra-judicial.component.ts", lineNumber: 12 });
})();

// src/app/main/juridico/list-judicial/list-judicial.component.ts
var _ListJudicialComponent = class _ListJudicialComponent {
};
_ListJudicialComponent.\u0275fac = function ListJudicialComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListJudicialComponent)();
};
_ListJudicialComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListJudicialComponent, selectors: [["app-list-judicial"]], decls: 2, vars: 0, template: function ListJudicialComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "list-judicial works!");
    \u0275\u0275elementEnd();
  }
}, encapsulation: 2 });
var ListJudicialComponent = _ListJudicialComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListJudicialComponent, [{
    type: Component,
    args: [{ selector: "app-list-judicial", imports: [], template: "<p>list-judicial works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListJudicialComponent, { className: "ListJudicialComponent", filePath: "src/app/main/juridico/list-judicial/list-judicial.component.ts", lineNumber: 9 });
})();

// src/app/main/juridico/juridico.routes.ts
var juridicoRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListCreditosComponent },
  { path: "extrajudiciales", component: ListExtraJudicialComponent },
  { path: "judiciales", component: ListJudicialComponent },
  { path: "atrasados", component: AtrasadosCreditosComponent },
  { path: ":credito_id/asignar", component: FormJuridicoComponent },
  { path: ":credito_id/:juridico_id", component: FormJuridicoComponent },
  { path: ":credito_id", component: ResumenJuridicoComponent }
];
export {
  juridicoRoutes
};
//# sourceMappingURL=chunk-IRBLHSVI.js.map
