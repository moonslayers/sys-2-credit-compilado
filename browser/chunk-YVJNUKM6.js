import {
  EditarCargaMasivaComponent
} from "./chunk-6YR5MWDH.js";
import {
  PagoCargaMasivaService
} from "./chunk-ZPILISIA.js";
import {
  PagoLayoutService
} from "./chunk-KTMHVK5V.js";
import {
  ExcelReaderService
} from "./chunk-NP73XDLG.js";
import "./chunk-BI6X3YJ4.js";
import {
  ScrollingModule
} from "./chunk-6DPENKFB.js";
import "./chunk-3HCUHHOO.js";
import "./chunk-5AHBH7ZX.js";
import "./chunk-MJF6VG42.js";
import {
  VersionComponent
} from "./chunk-QQ3PLALS.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  Router
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  DatePipe,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/pagos/carga-masiva/list-carga-masiva/list-carga-masiva.component.ts
var _c0 = ["tablaRef"];
var _c1 = () => ["usuarios", "creditosAbonos", "creditosAbonos.creditos.datosPersonaFisica.datosPersonales", "creditosAbonos.creditos.datosPersonasMorales"];
function ListCargaMasivaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-editar-carga-masiva", 16);
    \u0275\u0275twoWayListener("cargaMasivaEditChange", function ListCargaMasivaComponent_Conditional_3_Template_app_editar_carga_masiva_cargaMasivaEditChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.cargaMasivaEdit, $event) || (ctx_r2.cargaMasivaEdit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("cargaMasivaEdit", ctx_r2.cargaMasivaEdit);
  }
}
var TABLA_DEF = {
  emptyMsg: "No hay cargas masivas registradas",
  columns: [
    "id",
    {
      key: "row",
      header: "Nombre Cliente",
      function: (cargaMasiva, utils) => {
        return utils.nombreClienteFromCredito(cargaMasiva.creditos_abonos?.creditos);
      }
    },
    {
      key: "fecha_abono",
      header: "Fecha Deposito",
      pipe: "date"
    },
    {
      key: "creditos_abonos",
      header: "Asociado a Abono",
      function: (abono) => {
        if (abono) {
          return "SI";
        } else {
          return "NO";
        }
      }
    },
    {
      key: "importe_de_credito",
      header: "Monto",
      pipe: "currency"
    },
    "descripcion",
    {
      key: "usuarios",
      header: "Creado Por",
      subKey: "nombre"
    },
    "created_at",
    "deleted_at"
  ]
};
var AGREGAR_BUTTON = {
  text: "Subir Excel",
  style: {
    icon: "bi bi-file-earmark-excel-fill",
    button: "btn btn-success shadow scale-05"
  }
};
var ADVANCED_FILTERS = [
  {
    key: "creditosAbonos",
    label: "\xBFVer S\xF3lo No Asociados a Abono?",
    operator: "=",
    count: 0,
    options: [{ value: "null", label: "S\xED" }, { value: "", label: "No" }]
  },
  {
    key: "creditosAbonos",
    label: "\xBFVer S\xF3lo Asociados A Abono?",
    options: [{ value: "null", label: "S\xED" }, { value: "", label: "No" }]
  },
  {
    key: "self",
    label: "Descripci\xF3n:",
    type: "text",
    conditionals: [
      {
        key: "descripcion",
        operator: "LIKE"
      }
    ]
  },
  {
    key: "self",
    label: "Referencia De Cliente:",
    type: "text",
    conditionals: [
      {
        key: "referencia_de_cliente",
        operator: "LIKE"
      }
    ]
  },
  {
    key: "creditosAbonos.creditos.datosPersonaFisica.datosPersonales",
    label: "Curp PFAE:",
    type: "text",
    conditionals: [
      {
        key: "curp",
        operator: "LIKE"
      }
    ]
  },
  {
    key: "creditosAbonos.creditos.datosPersonasMorales",
    label: "Nombre Comercial PM:",
    type: "text",
    conditionals: [
      {
        key: "nombre_comercial",
        operator: "LIKE"
      }
    ]
  },
  {
    key: "self",
    label: "Depositado Desde:",
    type: "date",
    conditionals: [
      {
        key: "fecha_abono",
        operator: ">="
      }
    ]
  },
  {
    key: "self",
    label: "Depositado Hasta:",
    type: "date",
    conditionals: [
      {
        key: "fecha_abono",
        operator: "<"
      }
    ]
  },
  {
    key: "self",
    label: "Creado Por:",
    apiUrl: "api/usuarios",
    keyList: "id",
    keyDetalle: "nombre",
    conditionals: [
      {
        key: "usuario_id",
        operator: "="
      }
    ]
  }
];
var _ListCargaMasivaComponent = class _ListCargaMasivaComponent {
  constructor(pagoMasivoController, creditoController) {
    this.pagoMasivoController = pagoMasivoController;
    this.creditoController = creditoController;
    this.tabla = TABLA_DEF;
    this.agregar_button = AGREGAR_BUTTON;
    this.showEdit = false;
    this.showDeleteForm = false;
    this.advancedSearch = ADVANCED_FILTERS;
    this.nota = "";
  }
  onDelete(carga) {
    this.nota = "";
    this.showDeleteForm = true;
    this.cargaMasivaEdit = carga;
    console.log("DELETE EVENT");
  }
  deleteCargaMasiva() {
    return __async(this, null, function* () {
      if (!this.cargaMasivaEdit)
        return;
      if (!this.tableRef)
        return;
      yield this.pagoMasivoController.switch(this.cargaMasivaEdit, { nota: this.nota });
      if (this.cargaMasivaEdit?.creditos_abonos?.creditos) {
        yield this.creditoController.actualizarEstadoCuenta(this.cargaMasivaEdit.creditos_abonos?.creditos);
      }
      this.showDeleteForm = false;
      this.cargaMasivaEdit = void 0;
      this.tableRef.getData();
    });
  }
};
_ListCargaMasivaComponent.\u0275fac = function ListCargaMasivaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCargaMasivaComponent)(\u0275\u0275directiveInject(PagoCargaMasivaService), \u0275\u0275directiveInject(CreditoService));
};
_ListCargaMasivaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCargaMasivaComponent, selectors: [["app-list-carga-masiva"]], viewQuery: function ListCargaMasivaComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableRef = _t.first);
  }
}, decls: 21, vars: 13, consts: [["tablaRef", ""], ["deleteForm", ""], ["title", "Cargas Masivas", "agregarRedirectRoute", "../abonos", 3, "rowEditarClick", "rowEliminarClick", "tableDefinition", "advancedSearch", "agregarButton", "controller", "relations", "useDefaultRowEditRedirect", "useGenericDelete"], ["size", "large", 3, "showChange", "show"], [3, "cargaMasivaEdit"], ["size", "small", 3, "showChange", "show"], [1, "container", "px-5", "pt-0", "pb-3"], [1, "text-center"], [1, "mt-3"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["placeholder", "Ingresa tu nota o comentario aqui...", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "justify-content-evenly", "mt-3"], [1, "col", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "col", "text-center", 3, "click"], [1, "btn", "btn-primary"], [3, "cargaMasivaEditChange", "cargaMasivaEdit"]], template: function ListCargaMasivaComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tabla", 2, 0);
    \u0275\u0275listener("rowEditarClick", function ListCargaMasivaComponent_Template_app_tabla_rowEditarClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      ctx.showEdit = true;
      return \u0275\u0275resetView(ctx.cargaMasivaEdit = $event);
    })("rowEliminarClick", function ListCargaMasivaComponent_Template_app_tabla_rowEliminarClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onDelete($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-formulario-flotante", 3);
    \u0275\u0275twoWayListener("showChange", function ListCargaMasivaComponent_Template_app_formulario_flotante_showChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showEdit, $event) || (ctx.showEdit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275conditionalCreate(3, ListCargaMasivaComponent_Conditional_3_Template, 1, 1, "app-editar-carga-masiva", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-formulario-flotante", 5, 1);
    \u0275\u0275twoWayListener("showChange", function ListCargaMasivaComponent_Template_app_formulario_flotante_showChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showDeleteForm, $event) || (ctx.showDeleteForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(6, "div", 6)(7, "h4", 7)(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Motivo o raz\xF3n del cambio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ListCargaMasivaComponent_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.nota, $event) || (ctx.nota = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "button", 13);
    \u0275\u0275listener("click", function ListCargaMasivaComponent_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const deleteForm_r4 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(deleteForm_r4.cerrarDesdeBoton());
    });
    \u0275\u0275text(17, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275listener("click", function ListCargaMasivaComponent_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteCargaMasiva());
    });
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275text(20, " Aceptar ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("advancedSearch", ctx.advancedSearch)("agregarButton", ctx.agregar_button)("controller", ctx.pagoMasivoController)("relations", \u0275\u0275pureFunction0(12, _c1))("useDefaultRowEditRedirect", false)("useGenericDelete", false);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx.showEdit);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showEdit ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showDeleteForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xBFSeguro que deseas ", (ctx.cargaMasivaEdit == null ? null : ctx.cargaMasivaEdit.deleted_at) ? "restaurar" : "eliminar", " esta carga masiva?");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.nota);
  }
}, dependencies: [
  TablaComponent,
  FormularioFlotanteComponent,
  EditarCargaMasivaComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var ListCargaMasivaComponent = _ListCargaMasivaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCargaMasivaComponent, [{
    type: Component,
    args: [{ selector: "app-list-carga-masiva", imports: [
      TablaComponent,
      FormularioFlotanteComponent,
      EditarCargaMasivaComponent,
      FormsModule
    ], template: `<app-tabla
  #tablaRef
  title="Cargas Masivas"
  [tableDefinition]="tabla"
  [advancedSearch]="advancedSearch"
  agregarRedirectRoute="../abonos"
  [agregarButton]="agregar_button" [controller]="pagoMasivoController" [relations]="['usuarios','creditosAbonos', 'creditosAbonos.creditos.datosPersonaFisica.datosPersonales','creditosAbonos.creditos.datosPersonasMorales',]"
  [useDefaultRowEditRedirect]="false" (rowEditarClick)="showEdit=true; cargaMasivaEdit=$event;"
  [useGenericDelete]="false"
  (rowEliminarClick)="onDelete($event)"
  />

<app-formulario-flotante [(show)]="showEdit" size="large">
  @if (showEdit) {
    <app-editar-carga-masiva
      [(cargaMasivaEdit)]="cargaMasivaEdit"
      />
  }
</app-formulario-flotante>

<app-formulario-flotante #deleteForm [(show)]="showDeleteForm" size="small">
  <div class="container px-5 pt-0 pb-3">
    <h4 class=text-center><b>\xBFSeguro que deseas {{cargaMasivaEdit?.deleted_at?'restaurar':'eliminar'}} esta carga masiva?</b></h4>
    <div class="mt-3">
      <label for="exampleFormControlTextarea1" class="form-label">Motivo o raz\xF3n del cambio:</label>
      <textarea placeholder="Ingresa tu nota o comentario aqui..." class="form-control" id="exampleFormControlTextarea1" rows="3" [(ngModel)]="nota"></textarea>
    </div>
    <div class="row justify-content-evenly mt-3">
      <div class="col text-center">
        <button class="btn btn-secondary" (click)="deleteForm.cerrarDesdeBoton()">
          Cancelar
        </button>
      </div>
      <div class="col text-center" (click)="deleteCargaMasiva()">
        <button class="btn btn-primary">
          Aceptar
        </button>
      </div>
    </div>
  </div>
</app-formulario-flotante>` }]
  }], () => [{ type: PagoCargaMasivaService }, { type: CreditoService }], { tableRef: [{
    type: ViewChild,
    args: ["tablaRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCargaMasivaComponent, { className: "ListCargaMasivaComponent", filePath: "src/app/pagos/carga-masiva/list-carga-masiva/list-carga-masiva.component.ts", lineNumber: 169 });
})();

// src/app/pagos/carga-masiva/abono-masivo/abono-masivo.component.ts
var _c02 = (a0, a1, a2) => ({ "table-success": a0, "table-warning": a1, "table-danger": a2 });
var _c12 = () => ["datosPersonaFisica.datosPersonales", "datosPersonasMorales"];
var _c2 = (a0, a1, a2) => ({ "bg-success": a0, "bg-warning text-dark": a1, "bg-danger": a2 });
function AbonoMasivoComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18)(2, "button", 19);
    \u0275\u0275listener("click", function AbonoMasivoComponent_Conditional_23_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.revisar());
    });
    \u0275\u0275element(3, "i", 20);
    \u0275\u0275text(4, "Revisar Archivo ");
    \u0275\u0275elementEnd()()();
  }
}
function AbonoMasivoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 21)(2, "h6", 22);
    \u0275\u0275element(3, "i", 23);
    \u0275\u0275text(4, "Resumen de Validaci\xF3n ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "div", 24)(7, "div", 25)(8, "div", 26)(9, "div", 27);
    \u0275\u0275element(10, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "div", 29);
    \u0275\u0275text(13, "Pagos Validados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 30);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 25)(17, "div", 31)(18, "div", 32);
    \u0275\u0275element(19, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "div", 34);
    \u0275\u0275text(22, "Monto Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 35);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 25)(27, "div", 36)(28, "div", 37);
    \u0275\u0275element(29, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "div", 34);
    \u0275\u0275text(32, "Coincidencias Exactas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 30);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 25)(36, "div", 39)(37, "div", 40);
    \u0275\u0275element(38, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div")(40, "div", 34);
    \u0275\u0275text(41, "Revisi\xF3n Manual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 30);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 25)(45, "div", 42)(46, "div", 43);
    \u0275\u0275element(47, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div")(49, "div", 34);
    \u0275\u0275text(50, "No Identificados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 30);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 25)(54, "div", 45)(55, "div", 46);
    \u0275\u0275element(56, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div")(58, "div", 34);
    \u0275\u0275text(59, "Tasa de \xC9xito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 30);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx_r1.stats.procesados);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 6, ctx_r1.stats.total));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.stats.exactos);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.manual);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.stats.no_identificados);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.stats.exactos / ctx_r1.stats.procesados * 100).toFixed(2), "% ");
  }
}
function AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.credito_id);
  }
}
function AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.ref_bancaria);
  }
}
function AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.referencia_credito);
  }
}
function AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removerAsignacion(row_r5));
    });
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275elementEnd();
  }
}
function AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 60)(1, "td", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 65);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 66);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 58)(10, "div", 67);
    \u0275\u0275conditionalCreate(11, AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_11_Template, 2, 1, "span", 68);
    \u0275\u0275conditionalCreate(12, AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_12_Template, 2, 1, "span", 69);
    \u0275\u0275conditionalCreate(13, AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_13_Template, 2, 1, "span", 70);
    \u0275\u0275conditionalCreate(14, AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Conditional_14_Template, 2, 0, "button", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 58)(16, "app-autocomplete-field", 72);
    \u0275\u0275twoWayListener("valueChange", function AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Template_app_autocomplete_field_valueChange_16_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.credito_id, $event) || (row_r5.credito_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 59)(18, "span", 73);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(20, _c02, (row_r5.coincidencia_escrita ?? 0) > 99, (row_r5.coincidencia_escrita ?? 0) >= 60 && (row_r5.coincidencia_escrita ?? 0) <= 98, row_r5.credito_id == null));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 15, row_r5.fecha_del_apunte, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 18, row_r5.importe_de_credito));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(row_r5.credito_id ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.ref_bancaria ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.credito_id && !row_r5.ref_bancaria && row_r5.referencia_credito ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5.credito_id ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("sm", true)("extraData", ctx_r1.extraDataAutoComplete)("relations", \u0275\u0275pureFunction0(24, _c12));
    \u0275\u0275twoWayProperty("value", row_r5.credito_id);
    \u0275\u0275property("disabled", (row_r5.coincidencia_escrita ?? 0) > 90);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(25, _c2, (row_r5.coincidencia_escrita ?? 0) > 99, (row_r5.coincidencia_escrita ?? 0) >= 60 && (row_r5.coincidencia_escrita ?? 0) <= 98, row_r5.credito_id == null));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.coincidencia_escrita == null ? null : row_r5.coincidencia_escrita.toFixed(2), "% ");
  }
}
function AbonoMasivoComponent_Conditional_25_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "table", 54)(2, "thead", 55)(3, "tr")(4, "th", 56);
    \u0275\u0275text(5, "Referencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 57);
    \u0275\u0275text(9, "Monto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 58);
    \u0275\u0275text(11, "Cr\xE9dito Asignado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 58);
    \u0275\u0275text(13, "Referencias del Sistema");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 59);
    \u0275\u0275text(15, "Coincidencia");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, AbonoMasivoComponent_Conditional_25_Conditional_10_For_18_Template, 20, 29, "tr", 60, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 61)(20, "button", 62);
    \u0275\u0275listener("click", function AbonoMasivoComponent_Conditional_25_Conditional_10_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.finalizarRevision());
    });
    \u0275\u0275element(21, "i", 63);
    \u0275\u0275text(22, "Finalizar Revisi\xF3n ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.cargasMasivas);
  }
}
function AbonoMasivoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 48)(2, "h6", 49);
    \u0275\u0275element(3, "i", 50);
    \u0275\u0275text(4, "Detalle de Movimientos Revisados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "div", 51);
    \u0275\u0275element(7, "i", 52);
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9, "Revise los movimientos asociados correctamente, aquellos que coinciden parcialmente y aquellos que no tienen coincidencias en el sistema.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, AbonoMasivoComponent_Conditional_25_Conditional_10_Template, 23, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.dataSource.length > 0 ? 10 : -1);
  }
}
var _AbonoMasivoComponent = class _AbonoMasivoComponent {
  constructor(excelReader, pagosMasivosController, utils, creditoController, pagoLayoutController, router, dialog) {
    this.excelReader = excelReader;
    this.pagosMasivosController = pagosMasivosController;
    this.utils = utils;
    this.creditoController = creditoController;
    this.pagoLayoutController = pagoLayoutController;
    this.router = router;
    this.dialog = dialog;
    this.dataSource = [];
    this.keys = [
      "descripcion",
      "referencia_de_cliente",
      "tipo_de_trn",
      "fecha_valor",
      "importe_de_credito",
      "hora_de_cargo_o_abono",
      "fecha_del_apunte"
    ];
    this.cargasMasivas = [];
    this.creditos = [];
    this.extraDataAutoComplete = {
      conditionals: JSON.stringify([
        ["deleted_at", "IS NULL", null],
        ["estado", "=", "ACTIVO"],
        ["liberado_fecha", "IS NOT NULL", null],
        ["folio_reestructura", "IS NULL", null]
      ])
    };
    this.file = null;
    this.stats = {
      procesados: 0,
      validos: 0,
      total: 0,
      manual: 0,
      exactos: 0,
      no_identificados: 0
    };
  }
  onFileSelected(event) {
    return __async(this, null, function* () {
      this.file = this.utils.fileFromInputEvent(event);
      if (this.file) {
        this.dataSource = yield this.excelReader.readExcelAsJsonList(this.file);
        this.cleanFechas();
        const keys = Object.keys(this.dataSource[0]);
        this.dataSource = this.dataSource.filter((row) => {
          return !Object.values(row).every((value) => value === null);
        });
        console.log(this.dataSource);
      }
    });
  }
  referenciaFromCargaMasiva(carga) {
    return this.creditos.find((c) => c.id == carga.credito_id)?.referencia_bancaria;
  }
  setStats() {
    this.stats.procesados = (this.dataRevisada?.correctos.exactos.length ?? 0) + (this.dataRevisada?.correctos.no_encontrados.length ?? 0) + (this.dataRevisada?.correctos.potenciales.length ?? 0);
    this.stats.total = this.dataSource.reduce((acc, item) => acc + +(item.importe_de_credito ?? 0), 0);
    this.stats.manual = this.dataRevisada?.correctos.potenciales.length ?? 0;
    this.stats.exactos = this.dataRevisada?.correctos.exactos.length ?? 0;
    this.stats.no_identificados = this.dataRevisada?.correctos.no_encontrados.length ?? 0;
  }
  revisar() {
    return __async(this, null, function* () {
      if (yield this.pagoLayoutController.yaSeSubioExcel(this.file)) {
        this.dialog.show({
          title: "Excel duplicado",
          body: "El excel ya se ha subido anteriormente.",
          tipo: "danger"
        });
        return;
      }
      this.dataRevisada = yield this.pagosMasivosController.revisar(this.dataSource);
      this.dataRevisada.correctos.exactos.forEach((r) => r.coincidencia_escrita = 100);
      this.setStats();
      const todos = [
        ...this.dataRevisada.correctos.potenciales,
        ...this.dataRevisada.correctos.exactos,
        ...this.dataRevisada.correctos.no_encontrados
      ];
      todos.sort((a, b) => (b.coincidencia_escrita ?? 0) - (a.coincidencia_escrita ?? 0));
      this.cargasMasivas = [...todos];
    });
  }
  finalizarRevision() {
    return __async(this, null, function* () {
      const layout = yield this.guardarFile();
      if (!layout)
        return;
      const data = [
        ...this.dataRevisada.correctos.exactos,
        ...this.dataRevisada.correctos.potenciales,
        ...this.dataRevisada.correctos.no_encontrados
      ];
      data.forEach((p) => p.pagos_layout_id = layout.id);
      console.log(data);
      const res = yield this.pagosMasivosController.multipleNews(data);
      const creditos = data.filter((r) => !!r.credito_id).map((r) => r.credito_id);
      if (res) {
        yield this.creditoController.actualizarEstadosCuentaMasiva(creditos);
        this.router.navigate(["/pagos/masiva/list"]);
      } else {
        this.pagoLayoutController.switch(layout);
      }
    });
  }
  removerAsignacion(item) {
    console.log(item);
    const index = this.cargasMasivas.findIndex((c) => c == item);
    if (index >= 0) {
      this.cargasMasivas[index].credito_id = null;
      this.cargasMasivas[index].coincidencia_escrita = 0;
      this.cargasMasivas[index].aplicado = "NO";
      this.dataRevisada?.correctos.no_encontrados.push(this.cargasMasivas[index]);
      this.dataRevisada.correctos.potenciales = this.dataRevisada.correctos.potenciales.filter((c) => c != item);
      this.dataRevisada.correctos.exactos = this.dataRevisada.correctos.exactos.filter((c) => c != item);
      this.setStats();
    }
  }
  guardarFile() {
    return __async(this, null, function* () {
      if (!this.dataRevisada || !this.file)
        return;
      const todos = [
        ...this.dataRevisada.correctos.potenciales,
        ...this.dataRevisada.correctos.exactos,
        ...this.dataRevisada.correctos.no_encontrados
      ];
      const data = {
        numero_movimientos: todos.length,
        monto_total: todos.reduce((acc, item) => acc + +item.importe_de_credito, 0),
        hash_archivo: yield this.utils.calculateFileHash(this.file),
        nombre_archivo_registro: this.file.name,
        status_aplicacion: "APLICADO"
      };
      return yield this.pagoLayoutController.new({
        data,
        file: this.file
      });
    });
  }
  cleanFechas() {
    if (this.dataSource.length == 0)
      return;
    const keys = Object.keys(this.dataSource[0]);
    this.dataSource.forEach((row) => {
      keys.forEach((key) => {
        if (this.isDateTimeOrDateFormat(row[key])) {
          row[key] = this.convertToISOString(row[key]);
        }
      });
    });
  }
  /**
   * Verifica si un valor en formato string cumple con el formato de fecha
   * "dd/MM/yyyyYY" o "dd/MM/yyyyYY HH:mm".
   *
   * @param value - Cadena a validar.
   * @returns `true` si el valor cumple con el formato, de lo contrario, `false`.
   */
  isDateTimeOrDateFormat(value) {
    const dateTimeRegex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})( ([0-1][0-9]|2[0-3]):([0-5][0-9]))?$/;
    return dateTimeRegex.test(value);
  }
  /**
   * Convierte una fecha en formato "dd/MM/yyyyYY" o "dd/MM/yyyyYY HH:mm" a una cadena ISO 8601.
   *
   * @param value - Cadena en formato de fecha a convertir.
   * @returns La fecha en formato ISO si es válida, de lo contrario, `null`.
   */
  convertToISOString(value) {
    if (!this.isDateTimeOrDateFormat(value)) {
      return null;
    }
    const [datePart, timePart] = value.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);
    const [hours, minutes] = timePart ? timePart.split(":").map(Number) : [0, 0];
    const date = new Date(year, month - 1, day, hours, minutes);
    return isNaN(date.getTime()) ? null : date.toISOString();
  }
};
_AbonoMasivoComponent.\u0275fac = function AbonoMasivoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbonoMasivoComponent)(\u0275\u0275directiveInject(ExcelReaderService), \u0275\u0275directiveInject(PagoCargaMasivaService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(PagoLayoutService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(VanillaDialogService));
};
_AbonoMasivoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbonoMasivoComponent, selectors: [["app-abono-masivo"]], decls: 26, vars: 3, consts: [[1, "container-xxl", "my-1", "p-4", "rounded", "bg-white", "shadow"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "text-primary", "fw-bold", "mb-1"], [1, "bi", "bi-cloud-upload", "me-2"], [1, "text-muted", "mb-0"], [1, "d-flex", "align-items-center"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-body"], [1, "row", "justify-content-center"], [1, "col-12", "col-lg-8"], [1, "form-label", "fw-bold", "text-primary", "mb-2"], [1, "bi", "bi-file-earmark-excel", "me-1"], [1, "input-group"], ["type", "file", "accept", ".xlsx", "placeholder", "Seleccione un archivo Excel...", 1, "form-control", 3, "change"], [1, "input-group-text"], [1, "form-text", "text-muted"], [1, "row", "justify-content-center", "mb-4"], [1, "card", "border-0", "shadow-sm"], [1, "col-auto"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "click"], [1, "bi", "bi-search", "me-2"], [1, "card-header", "bg-light"], [1, "mb-0", "text-primary"], [1, "bi", "bi-graph-up", "me-2"], [1, "row", "g-3", "justify-content-between"], [1, "col-md-6", "col-lg-4", "col-xl-3"], [1, "d-flex", "align-items-center", "p-3", "text-bg-success", "rounded-3", "border", "border-success", "shadow-sm"], [1, "rounded-circle", "p-3", "me-3"], [1, "bi", "bi-check2-circle", "fs-2"], [1, "small", "mb-1", "fw-medium"], [1, "h3", "mb-0", "fw-bold", "text-center"], [1, "d-flex", "align-items-center", "p-3", "text-bg-primary", "rounded-3", "border", "border-primary", "shadow-sm"], [1, "text-bg-primary", "rounded-circle", "p-3", "me-3"], [1, "bi", "bi-currency-dollar", "fs-2"], [1, "small", "mb-1", "fw-medium", "text-center"], [1, "h5", "mb-0", "fw-bold", "text-center"], [1, "d-flex", "align-items-center", "p-3", "text-bg-info", "rounded-3", "border", "border-info", "shadow-sm"], [1, "text-bg-info", "rounded-circle", "p-3", "me-3"], [1, "bi", "bi-check-all", "fs-2"], [1, "d-flex", "align-items-center", "p-3", "text-bg-warning", "rounded-3", "border", "border-warning", "shadow-sm"], [1, "text-bg-warning", "rounded-circle", "p-3", "me-3"], [1, "bi", "bi-search", "fs-2"], [1, "d-flex", "align-items-center", "p-3", "text-bg-danger", "rounded-3", "border", "border-danger", "shadow-sm"], [1, "text-bg-danger", "rounded-circle", "p-3", "me-3"], [1, "bi", "bi-question-circle", "fs-2"], [1, "d-flex", "align-items-center", "p-3", "bg-purple", "rounded-3", "border", "border-purple", "shadow-sm"], [1, "bg-purple", "rounded-circle", "p-3", "me-3"], [1, "bi", "bi-graph-up-arrow", "fs-2"], [1, "card-header", "bg-light", "py-3"], [1, "mb-0", "text-primary", "d-flex", "align-items-center"], [1, "bi", "bi-list-check", "me-2"], [1, "alert", "alert-info", "d-flex", "align-items-center"], [1, "bi", "bi-info-circle", "me-2", "fs-5"], [1, "table-responsive", "rounded-3", "shadow-sm"], [1, "table", "table-hover", "table-sm", "mb-0"], [1, "table-light"], [1, "ps-4"], [1, "text-end"], [1, "text-center"], [1, "text-center", "pe-4"], [3, "ngClass"], [1, "d-flex", "justify-content-end", "mt-4", "pt-3", "border-top"], [1, "btn", "btn-success", "d-flex", "align-items-center", "py-2", "px-4", "fw-medium", 3, "click"], [1, "bi", "bi-check-circle", "me-2"], [1, "fw-medium", "ps-4"], [1, "text-nowrap"], [1, "text-end", "fw-bold"], [1, "d-flex", "flex-wrap", "gap-2", "justify-content-center"], [1, "badge", "bg-success", "py-2"], [1, "badge", "bg-warning", "text-dark", "py-2"], [1, "badge", "bg-info", "text-dark", "py-2"], ["title", "Remover asignaci\xF3n", 1, "btn", "btn-sm", "btn-outline-danger", "d-flex", "align-items-center"], ["apiUrl", "api/creditos", "keyList", "id", "keyDetalle", "referencia_bancaria", "placeholder", "Buscar referencia...", 3, "valueChange", "sm", "extraData", "relations", "value", "disabled"], [1, "badge", "py-2", "px-3", "fw-medium", 3, "ngClass"], ["title", "Remover asignaci\xF3n", 1, "btn", "btn-sm", "btn-outline-danger", "d-flex", "align-items-center", 3, "click"], [1, "bi", "bi-x-circle"]], template: function AbonoMasivoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h3", 2);
    \u0275\u0275element(4, "i", 3);
    \u0275\u0275text(5, "Carga Masiva de Pagos ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, "Suba un archivo Excel para procesar m\xFAltiples pagos simult\xE1neamente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275element(9, "app-version");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label", 10);
    \u0275\u0275element(15, "i", 11);
    \u0275\u0275text(16, "Seleccionar archivo Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12)(18, "input", 13);
    \u0275\u0275listener("change", function AbonoMasivoComponent_Template_input_change_18_listener($event) {
      return ctx.onFileSelected($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 14);
    \u0275\u0275text(20, ".xlsx");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "small", 15);
    \u0275\u0275text(22, "Solo se aceptan archivos en formato Excel (.xlsx)");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(23, AbonoMasivoComponent_Conditional_23_Template, 5, 0, "div", 16);
    \u0275\u0275conditionalCreate(24, AbonoMasivoComponent_Conditional_24_Template, 62, 8, "div", 6);
    \u0275\u0275conditionalCreate(25, AbonoMasivoComponent_Conditional_25_Template, 11, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(23);
    \u0275\u0275conditional(ctx.dataSource.length > 0 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dataRevisada ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dataRevisada ? 25 : -1);
  }
}, dependencies: [
  AutocompleteFieldComponent,
  DatePipe,
  CurrencyPipe,
  ScrollingModule,
  NgClass,
  VersionComponent
], styles: ["\n\n.bg-purple[_ngcontent-%COMP%] {\n  background-color: #6f42c1 !important;\n}\n.text-purple[_ngcontent-%COMP%] {\n  color: #6f42c1 !important;\n}\n.border-purple[_ngcontent-%COMP%] {\n  border-color: #6f42c1 !important;\n}\n/*# sourceMappingURL=abono-masivo.component.css.map */"] });
var AbonoMasivoComponent = _AbonoMasivoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbonoMasivoComponent, [{
    type: Component,
    args: [{ selector: "app-abono-masivo", imports: [
      AutocompleteFieldComponent,
      DatePipe,
      CurrencyPipe,
      ScrollingModule,
      NgClass,
      VersionComponent
    ], template: `<div class="container-xxl my-1 p-4 rounded bg-white shadow">
  <!-- Header Section -->
  <div class="d-flex justify-content-between align-items-center mb-4">
    <div>
      <h3 class="text-primary fw-bold mb-1">
        <i class="bi bi-cloud-upload me-2"></i>Carga Masiva de Pagos
      </h3>
      <p class="text-muted mb-0">Suba un archivo Excel para procesar m\xFAltiples pagos simult\xE1neamente</p>
    </div>
    <div class="d-flex align-items-center">
      <app-version></app-version>
    </div>
  </div>

  <!-- File Upload Section -->
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-body">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <label class="form-label fw-bold text-primary mb-2">
            <i class="bi bi-file-earmark-excel me-1"></i>Seleccionar archivo Excel
          </label>
          <div class="input-group">
            <input (change)="onFileSelected($event)" class="form-control" type="file" accept=".xlsx"
              placeholder="Seleccione un archivo Excel..." />
            <span class="input-group-text">.xlsx</span>
          </div>
          <small class="form-text text-muted">Solo se aceptan archivos en formato Excel (.xlsx)</small>
        </div>
      </div>
    </div>
  </div>

  @if (dataSource.length > 0) {
  <div class="row justify-content-center mb-4">
    <div class="col-auto">
      <button class="btn btn-primary d-flex align-items-center" (click)="revisar()">
        <i class="bi bi-search me-2"></i>Revisar Archivo
      </button>
    </div>
  </div>
  }

  <!-- Statistics Section -->
  @if (dataRevisada) {
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-header bg-light">
      <h6 class="mb-0 text-primary">
        <i class="bi bi-graph-up me-2"></i>Resumen de Validaci\xF3n
      </h6>
    </div>
    <div class="card-body">
      <div class="row g-3 justify-content-between">
        <!-- Pagos Validados -->
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="d-flex align-items-center p-3 text-bg-success rounded-3 border border-success shadow-sm">
            <div class="rounded-circle p-3 me-3">
              <i class="bi bi-check2-circle fs-2"></i>
            </div>
            <div>
              <div class="small mb-1 fw-medium">Pagos Validados</div>
              <div class="h3 mb-0 fw-bold text-center">{{ stats.procesados }}</div>
            </div>
          </div>
        </div>

        <!-- Monto Total -->
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="d-flex align-items-center p-3 text-bg-primary rounded-3 border border-primary shadow-sm">
            <div class="text-bg-primary rounded-circle p-3 me-3">
              <i class="bi bi-currency-dollar fs-2"></i>
            </div>
            <div>
              <div class="small mb-1 fw-medium text-center">Monto Total</div>
              <div class="h5 mb-0 fw-bold text-center">{{ stats.total | currency }}</div>
            </div>
          </div>
        </div>

        <!-- Coincidencias Exactas -->
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="d-flex align-items-center p-3 text-bg-info rounded-3 border border-info  shadow-sm">
            <div class="text-bg-info rounded-circle p-3 me-3">
              <i class="bi bi-check-all fs-2"></i>
            </div>
            <div>
              <div class="small mb-1 fw-medium text-center">Coincidencias Exactas</div>
              <div class="h3 mb-0 fw-bold text-center">{{ stats.exactos }}</div>
            </div>
          </div>
        </div>

        <!-- Revisi\xF3n Manual -->
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="d-flex align-items-center p-3 text-bg-warning rounded-3 border border-warning  shadow-sm">
            <div class="text-bg-warning rounded-circle p-3 me-3">
              <i class="bi bi-search fs-2"></i>
            </div>
            <div>
              <div class="small mb-1 fw-medium text-center">Revisi\xF3n Manual</div>
              <div class="h3 mb-0 fw-bold text-center">{{ stats.manual }}</div>
            </div>
          </div>
        </div>

        <!-- No Identificados -->
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="d-flex align-items-center p-3 text-bg-danger rounded-3 border border-danger  shadow-sm">
            <div class="text-bg-danger rounded-circle p-3 me-3">
              <i class="bi bi-question-circle fs-2"></i>
            </div>
            <div>
              <div class="small mb-1 fw-medium text-center">No Identificados</div>
              <div class="h3 mb-0 fw-bold text-center">{{ stats.no_identificados }}</div>
            </div>
          </div>
        </div>

        <!-- Tasa de \xC9xito -->
        <div class="col-md-6 col-lg-4 col-xl-3">
          <div class="d-flex align-items-center p-3 bg-purple rounded-3 border border-purple  shadow-sm">
            <div class="bg-purple rounded-circle p-3 me-3">
              <i class="bi bi-graph-up-arrow fs-2"></i>
            </div>
            <div>
              <div class="small mb-1 fw-medium text-center">Tasa de \xC9xito</div>
              <div class="h3 mb-0 fw-bold text-center">
                {{ (stats.exactos / stats.procesados * 100).toFixed(2) }}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }

  @if (dataRevisada) {
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-light py-3">
      <h6 class="mb-0 text-primary d-flex align-items-center">
        <i class="bi bi-list-check me-2"></i>Detalle de Movimientos Revisados
      </h6>
    </div>
    <div class="card-body">
      <div class="alert alert-info d-flex align-items-center">
        <i class="bi bi-info-circle me-2 fs-5"></i>
        <div>Revise los movimientos asociados correctamente, aquellos que coinciden parcialmente y aquellos que no
          tienen coincidencias en el sistema.</div>
      </div>

      @if (dataSource.length > 0) {
      <div class="table-responsive rounded-3 shadow-sm">
        <table class="table table-hover table-sm mb-0">
          <thead class="table-light">
            <tr>
              <th class="ps-4">Referencia</th>
              <th>Fecha</th>
              <th class="text-end">Monto</th>
              <th class="text-center">Cr\xE9dito Asignado</th>
              <th class="text-center">Referencias del Sistema</th>
              <th class="text-center pe-4">Coincidencia</th>
            </tr>
          </thead>
          <tbody>
            @for (row of cargasMasivas; track row) {
            <tr [ngClass]="{
            'table-success': (row.coincidencia_escrita ?? 0) > 99,
            'table-warning': (row.coincidencia_escrita ?? 0) >= 60 && (row.coincidencia_escrita ?? 0) <= 98,
            'table-danger': row.credito_id == null
          }">
              <td class="fw-medium ps-4">{{ row.descripcion }}</td>
              <td class="text-nowrap">{{ row.fecha_del_apunte | date: "dd/MM/yyyy" }}</td>
              <td class="text-end fw-bold">{{ row.importe_de_credito | currency }}</td>
              <td class="text-center">
                <div class="d-flex flex-wrap gap-2 justify-content-center">
                  @if (row.credito_id) {
                  <span class="badge bg-success py-2">{{ row.credito_id }}</span>
                  }
                  @if (row.ref_bancaria) {
                  <span class="badge bg-warning text-dark py-2">{{ row.ref_bancaria }}</span>
                  }
                  @if (row.credito_id && !row.ref_bancaria && row.referencia_credito) {
                  <span class="badge bg-info text-dark py-2">{{ row.referencia_credito }}</span>
                  }
                  @if(row.credito_id) {
                  <button class="btn btn-sm btn-outline-danger d-flex align-items-center"
                    (click)="removerAsignacion(row)" title="Remover asignaci\xF3n">
                    <i class="bi bi-x-circle"></i>
                  </button>
                  }
                </div>
              </td>
              <td class="text-center">
                <app-autocomplete-field apiUrl="api/creditos" [sm]="true" keyList="id" keyDetalle="referencia_bancaria"
                  [extraData]="extraDataAutoComplete"
                  [relations]="['datosPersonaFisica.datosPersonales', 'datosPersonasMorales']"
                  placeholder="Buscar referencia..." [(value)]="row.credito_id"
                  [disabled]="(row.coincidencia_escrita ?? 0) > 90" />
              </td>
              <td class="text-center pe-4">
                <span class="badge py-2 px-3 fw-medium" [ngClass]="{
                'bg-success': (row.coincidencia_escrita ?? 0) > 99,
                'bg-warning text-dark': (row.coincidencia_escrita ?? 0) >= 60 && (row.coincidencia_escrita ?? 0) <= 98,
                'bg-danger': row.credito_id == null
              }">
                  {{ row.coincidencia_escrita?.toFixed(2) }}%
                </span>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-end mt-4 pt-3 border-top">
        <button class="btn btn-success d-flex align-items-center py-2 px-4 fw-medium" (click)="finalizarRevision()">
          <i class="bi bi-check-circle me-2"></i>Finalizar Revisi\xF3n
        </button>
      </div>
      }
    </div>
  </div>
  }
</div>`, styles: ["/* src/app/pagos/carga-masiva/abono-masivo/abono-masivo.component.css */\n.bg-purple {\n  background-color: #6f42c1 !important;\n}\n.text-purple {\n  color: #6f42c1 !important;\n}\n.border-purple {\n  border-color: #6f42c1 !important;\n}\n/*# sourceMappingURL=abono-masivo.component.css.map */\n"] }]
  }], () => [{ type: ExcelReaderService }, { type: PagoCargaMasivaService }, { type: UtilsService }, { type: CreditoService }, { type: PagoLayoutService }, { type: Router }, { type: VanillaDialogService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbonoMasivoComponent, { className: "AbonoMasivoComponent", filePath: "src/app/pagos/carga-masiva/abono-masivo/abono-masivo.component.ts", lineNumber: 33 });
})();

// src/app/pagos/carga-masiva/carga.masiva.routes.ts
var cargaMasivaRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListCargaMasivaComponent },
  { path: "abonos", component: AbonoMasivoComponent },
  { path: "abonos/:carga_id", component: AbonoMasivoComponent }
];
export {
  cargaMasivaRoutes
};
//# sourceMappingURL=chunk-YVJNUKM6.js.map
