import {
  CreditoProductoFinancieroDocumentoService
} from "./chunk-NK7PLHPC.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
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
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute
} from "./chunk-XKAAYCNZ.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  Injectable,
  Injector,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/producto.financiero.documento.ts
var _ProductoFinancieroDocumentoService = class _ProductoFinancieroDocumentoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "productos_financieros_documentos";
    this.columns = [
      "documento_id",
      "productos_financiero_id",
      "prioridad",
      "usuario_id"
    ];
  }
};
_ProductoFinancieroDocumentoService.\u0275fac = function ProductoFinancieroDocumentoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProductoFinancieroDocumentoService)(\u0275\u0275inject(Injector));
};
_ProductoFinancieroDocumentoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductoFinancieroDocumentoService, factory: _ProductoFinancieroDocumentoService.\u0275fac, providedIn: "any" });
var ProductoFinancieroDocumentoService = _ProductoFinancieroDocumentoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductoFinancieroDocumentoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/creditos/documentos-creditos/nuevo-documento-credito/nuevo-documento-credito.component.ts
function NuevoDocumentoCreditoComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const documento_r1 = ctx.$implicit;
    \u0275\u0275property("value", documento_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", documento_r1.documento == null ? null : documento_r1.documento.nombre, " ");
  }
}
var _NuevoDocumentoCreditoComponent = class _NuevoDocumentoCreditoComponent {
  constructor(utils, route, creditoDocumentoController, productoFinancieroDocumentoController, creditoController) {
    this.utils = utils;
    this.route = route;
    this.creditoDocumentoController = creditoDocumentoController;
    this.productoFinancieroDocumentoController = productoFinancieroDocumentoController;
    this.creditoController = creditoController;
    this.productoFinancieroDocumentos = [];
    this.documentoSelected = 0;
    this.form = {};
  }
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id);
        this.setDocumentos();
      }
    }));
  }
  setDocumentos() {
    return __async(this, null, function* () {
      this.productoFinancieroDocumentos = (yield this.productoFinancieroDocumentoController.get({
        productos_financiero_id: this.credito?.productos_financiero_id
      }, void 0, ["documento"])).data ?? [];
    });
  }
  nuevoDocumento() {
    this.creditoDocumentoController.new({
      credito_id: this.credito?.id,
      productos_financieros_documento_id: this.documentoSelected
    });
  }
};
_NuevoDocumentoCreditoComponent.\u0275fac = function NuevoDocumentoCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NuevoDocumentoCreditoComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoProductoFinancieroDocumentoService), \u0275\u0275directiveInject(ProductoFinancieroDocumentoService), \u0275\u0275directiveInject(CreditoService));
};
_NuevoDocumentoCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NuevoDocumentoCreditoComponent, selectors: [["app-nuevo-documento-credito"]], decls: 16, vars: 2, consts: [[1, "container", "p-3"], [1, "my-2", "fw-bold"], [1, "row", "mt-2"], [1, "col", "p-3"], [1, "fw-bold"], [1, "form-control", "form-select", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [3, "value"], [1, "row", "justify-content-center"], [1, "col-auto", "p-3"], [1, "btn", "btn-primary", 3, "click"]], template: function NuevoDocumentoCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
    \u0275\u0275text(2, "Nuevo requerimiento de documento de credito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
    \u0275\u0275text(6, "Documento requerido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function NuevoDocumentoCreditoComponent_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.documentoSelected, $event) || (ctx.documentoSelected = $event);
      return $event;
    });
    \u0275\u0275elementStart(8, "option", 6);
    \u0275\u0275text(9, "Selecciona un documento");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, NuevoDocumentoCreditoComponent_For_11_Template, 2, 2, "option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "button", 10);
    \u0275\u0275listener("click", function NuevoDocumentoCreditoComponent_Template_button_click_14_listener() {
      return ctx.nuevoDocumento();
    });
    \u0275\u0275text(15, " Guardar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.documentoSelected);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.productoFinancieroDocumentos);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var NuevoDocumentoCreditoComponent = _NuevoDocumentoCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NuevoDocumentoCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-nuevo-documento-credito", imports: [
      FormsModule
    ], template: '<div class="container p-3">\n  <h5 class="my-2 fw-bold">Nuevo requerimiento de documento de credito</h5>\n  <div class="row mt-2">\n    <div class="col p-3">\n      <label class="fw-bold">Documento requerido</label>\n      <select class="form-control form-select" [(ngModel)]="documentoSelected">\n        <option [value]="0" disabled>Selecciona un documento</option>\n        @for (documento of productoFinancieroDocumentos; track documento) {\n          <option [value]="documento.id">\n            {{documento.documento?.nombre}}\n          </option>\n        }\n      </select>\n    </div>\n  </div>\n  <div class="row justify-content-center">\n    <div class="col-auto p-3">\n      <button class="btn btn-primary" (click)="nuevoDocumento()">\n        Guardar\n      </button>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: CreditoProductoFinancieroDocumentoService }, { type: ProductoFinancieroDocumentoService }, { type: CreditoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NuevoDocumentoCreditoComponent, { className: "NuevoDocumentoCreditoComponent", filePath: "src/app/main/creditos/documentos-creditos/nuevo-documento-credito/nuevo-documento-credito.component.ts", lineNumber: 22 });
})();

// src/app/main/creditos/documentos-creditos/list-documentos-creditos/list-documentos-creditos.component.ts
var _c0 = () => ["credito", "productosFinancierosDocumentos.documento", "autorizadoPorUsuario"];
var _c1 = (a0) => ({ key: "credito_id", operator: "=", value: a0 });
var _c2 = (a0) => [a0];
var TABLA_DEF = {
  columns: [
    {
      key: "productos_financieros_documentos",
      keyList: ["productos_financieros_documentos", "documento", "nombre"],
      header: "Documento"
    },
    {
      key: "productos_financieros_documentos",
      subKey: "prioridad",
      header: "Prioridad"
    },
    {
      key: "autorizado_por_usuario",
      subKey: "nombre",
      header: "Autorizado Por"
    },
    {
      key: "autorizado_fecha",
      header: "Autorizado Fecha",
      pipe: "date"
    }
  ]
};
var EDIT_BUTTON = {
  style: {
    icon: "bi bi-file-earmark-arrow-up-fill",
    button: "btn btn-sm btn-primary"
  }
};
var _ListDocumentosCreditosComponent = class _ListDocumentosCreditosComponent {
  constructor(creditoDocumentoController, creditoController, route, utils) {
    this.creditoDocumentoController = creditoDocumentoController;
    this.creditoController = creditoController;
    this.route = route;
    this.utils = utils;
    this.tabla = TABLA_DEF;
    this.editButton = EDIT_BUTTON;
    this.showAdd = false;
  }
  ngOnInit() {
    this.route.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const credito_id = this.utils.intOrNull(params.get("credito_id"));
      if (credito_id) {
        this.credito = yield this.creditoController.find(credito_id);
      }
    }));
  }
};
_ListDocumentosCreditosComponent.\u0275fac = function ListDocumentosCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListDocumentosCreditosComponent)(\u0275\u0275directiveInject(CreditoProductoFinancieroDocumentoService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_ListDocumentosCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListDocumentosCreditosComponent, selectors: [["app-list-documentos-creditos"]], decls: 4, vars: 12, consts: [["tablaRef", ""], ["title", "Documentos de Credito", 3, "agregarClick", "tableDefinition", "useDefaultAgregarRedirect", "controller", "rowEditarButton", "relations", "getConditionals"], [3, "showChange", "show"]], template: function ListDocumentosCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tabla", 1, 0);
    \u0275\u0275listener("agregarClick", function ListDocumentosCreditosComponent_Template_app_tabla_agregarClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showAdd = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-formulario-flotante", 2);
    \u0275\u0275twoWayListener("showChange", function ListDocumentosCreditosComponent_Template_app_formulario_flotante_showChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showAdd, $event) || (ctx.showAdd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("showChange", function ListDocumentosCreditosComponent_Template_app_formulario_flotante_showChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const tablaRef_r2 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(!$event ? tablaRef_r2.getData() : false);
    });
    \u0275\u0275element(3, "app-nuevo-documento-credito");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("tableDefinition", ctx.tabla)("useDefaultAgregarRedirect", false)("controller", ctx.creditoDocumentoController)("rowEditarButton", ctx.editButton)("relations", \u0275\u0275pureFunction0(7, _c0))("getConditionals", \u0275\u0275pureFunction1(10, _c2, \u0275\u0275pureFunction1(8, _c1, (ctx.credito == null ? null : ctx.credito.id) ?? 0)));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx.showAdd);
  }
}, dependencies: [
  TablaComponent,
  FormularioFlotanteComponent,
  NuevoDocumentoCreditoComponent
], encapsulation: 2 });
var ListDocumentosCreditosComponent = _ListDocumentosCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListDocumentosCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-list-documentos-creditos", imports: [
      TablaComponent,
      FormularioFlotanteComponent,
      NuevoDocumentoCreditoComponent
    ], template: `<app-tabla
#tablaRef
title="Documentos de Credito"
[tableDefinition]="tabla"
[useDefaultAgregarRedirect]="false"
(agregarClick)="showAdd=true"
[controller]="creditoDocumentoController"
[rowEditarButton]="editButton"
[relations]="['credito','productosFinancierosDocumentos.documento', 'autorizadoPorUsuario']"
[getConditionals]="[{key:'credito_id',operator:'=',value:credito?.id??0}]"
/>
<app-formulario-flotante [(show)]="showAdd" (showChange)="!$event?tablaRef.getData():false">
    <app-nuevo-documento-credito />
</app-formulario-flotante>` }]
  }], () => [{ type: CreditoProductoFinancieroDocumentoService }, { type: CreditoService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListDocumentosCreditosComponent, { className: "ListDocumentosCreditosComponent", filePath: "src/app/main/creditos/documentos-creditos/list-documentos-creditos/list-documentos-creditos.component.ts", lineNumber: 55 });
})();

// src/app/main/creditos/documentos-creditos/form-documentos-creditos/form-documentos-creditos.component.ts
var _c02 = (a0) => ({ id: a0 });
function FormDocumentosCreditosComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 6);
    \u0275\u0275text(1, "Marcar verificado");
    \u0275\u0275elementEnd();
  }
}
function FormDocumentosCreditosComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 7);
    \u0275\u0275text(1, "Cancelar verificado");
    \u0275\u0275elementEnd();
  }
}
function FormDocumentosCreditosComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1, " Descargar PDF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r0.utils.fileUrlInLine(ctx_r0.creditoDocumento.url), \u0275\u0275sanitizeUrl);
  }
}
var _FormDocumentosCreditosComponent = class _FormDocumentosCreditosComponent {
  constructor(utils, route, creditoDocumentoController) {
    this.utils = utils;
    this.route = route;
    this.creditoDocumentoController = creditoDocumentoController;
    this.cliente = "";
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const documento_id = this.utils.intOrNull(params.get("documento_id"));
      if (documento_id) {
        yield this.setCredito(documento_id);
        this.setNombreCliente();
      }
    }));
  }
  setCredito(documento_id) {
    return __async(this, null, function* () {
      this.creditoDocumento = yield this.creditoDocumentoController.find(documento_id, ["credito", "productosFinancierosDocumentos.documento", "credito.datosPersonaFisica", "credito.datosPersonasMorales", "usuarios", "autorizadoPorUsuario"]);
    });
  }
  aprobarDocumento() {
    return __async(this, null, function* () {
      const res = yield this.creditoDocumentoController.verificarDocumento(this.creditoDocumento.id);
      console.log(res);
      if (res.status) {
        this.setCredito(this.creditoDocumento.id);
      }
    });
  }
  setNombreCliente() {
    if (this.creditoDocumento?.credito?.datos_persona_fisica) {
      this.cliente = this.creditoDocumento.credito.datos_persona_fisica.datos_personales?.nombre ?? "";
    } else {
      this.cliente = this.creditoDocumento?.credito?.datos_personas_morales?.razon_social ?? "";
    }
  }
};
_FormDocumentosCreditosComponent.\u0275fac = function FormDocumentosCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDocumentosCreditosComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoProductoFinancieroDocumentoService));
};
_FormDocumentosCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDocumentosCreditosComponent, selectors: [["app-form-documentos-creditos"]], decls: 40, vars: 20, consts: [[1, "container", "p-3", "my-1", "rounded", "bg-light", "shadow"], [1, "text-center"], [1, "h5", "my-3"], [1, "row"], [1, "col-auto"], [1, "btn", 3, "click"], [1, "bi", "bi-file-earmark-check-fill"], [1, "bi", "bi-file-earmark-x-fill"], [1, "col-12", "py-3"], ["target", "_blank", "download", "documento.pdf", 1, "btn", "btn-primary", 3, "href"], [1, "row", "mt-3", "justify-content-center"], [1, "col-12", "col-lg-8", "py-5"], ["label", "Documento a subir:", "accept", ".pdf", "apiUrl", "api/files/documents/save", "key", "document", 3, "urlChange", "formExtra"]], template: function FormDocumentosCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2, "Subir documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 2)(4, "b");
    \u0275\u0275text(5, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 2)(8, "b");
    \u0275\u0275text(9, "Documento:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 2)(12, "b");
    \u0275\u0275text(13, "Prioridad: ");
    \u0275\u0275elementStart(14, "u");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "p", 2)(17, "b");
    \u0275\u0275text(18, "Fecha del credito:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 2)(22, "b");
    \u0275\u0275text(23, "Autorizado Por:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 2)(26, "b");
    \u0275\u0275text(27, "Fecha de autorizado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 3)(31, "div", 4)(32, "button", 5);
    \u0275\u0275listener("click", function FormDocumentosCreditosComponent_Template_button_click_32_listener() {
      return ctx.aprobarDocumento();
    });
    \u0275\u0275conditionalCreate(33, FormDocumentosCreditosComponent_Conditional_33_Template, 2, 0, "i", 6);
    \u0275\u0275conditionalCreate(34, FormDocumentosCreditosComponent_Conditional_34_Template, 2, 0, "i", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 8);
    \u0275\u0275conditionalCreate(36, FormDocumentosCreditosComponent_Conditional_36_Template, 2, 1, "a", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 10)(38, "div", 11)(39, "app-file-input", 12);
    \u0275\u0275listener("urlChange", function FormDocumentosCreditosComponent_Template_app_file_input_urlChange_39_listener($event) {
      return ctx.creditoDocumento.url = $event;
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx.cliente);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.creditoDocumento == null ? null : ctx.creditoDocumento.productos_financieros_documentos == null ? null : ctx.creditoDocumento.productos_financieros_documentos.documento == null ? null : ctx.creditoDocumento.productos_financieros_documentos.documento.nombre);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.creditoDocumento == null ? null : ctx.creditoDocumento.productos_financieros_documentos == null ? null : ctx.creditoDocumento.productos_financieros_documentos.prioridad);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 12, ctx.creditoDocumento == null ? null : ctx.creditoDocumento.credito == null ? null : ctx.creditoDocumento.credito.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx.creditoDocumento == null ? null : ctx.creditoDocumento.autorizado_por_usuario == null ? null : ctx.creditoDocumento.autorizado_por_usuario.nombre) ?? "N/a");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 15, ctx.creditoDocumento == null ? null : ctx.creditoDocumento.autorizado_fecha, "dd MMM yyyy") ?? "N/a");
    \u0275\u0275advance(4);
    \u0275\u0275classMap((ctx.creditoDocumento == null ? null : ctx.creditoDocumento.autorizado_por) ? "btn-danger" : "btn-success");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(ctx.creditoDocumento == null ? null : ctx.creditoDocumento.autorizado_por) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.creditoDocumento == null ? null : ctx.creditoDocumento.autorizado_por) ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.creditoDocumento && ctx.creditoDocumento.url ? 36 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(18, _c02, ctx.creditoDocumento == null ? null : ctx.creditoDocumento.id));
  }
}, dependencies: [CommonModule, DatePipe, FileInputComponent], encapsulation: 2 });
var FormDocumentosCreditosComponent = _FormDocumentosCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDocumentosCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-form-documentos-creditos", imports: [
      CommonModule,
      DatePipe,
      FileInputComponent
    ], template: `<div class="container p-3 my-1 rounded bg-light shadow">
  <h3 class="text-center">Subir documento</h3>
  <p class="h5 my-3"><b>Cliente:</b> {{cliente}}</p>
  <p class="h5 my-3"><b>Documento:</b> {{creditoDocumento?.productos_financieros_documentos?.documento?.nombre}}</p>
  <p class="h5 my-3"><b>Prioridad: <u>{{creditoDocumento?.productos_financieros_documentos?.prioridad}}</u></b></p>
  <p class="h5 my-3"><b>Fecha del credito:</b> {{creditoDocumento?.credito?.created_at|date:'dd MMM yyyy'}}</p>
  <p class="h5 my-3"><b>Autorizado Por:</b>{{creditoDocumento?.autorizado_por_usuario?.nombre??'N/a'}}</p>
  <p class="h5 my-3"><b>Fecha de autorizado:</b> {{(creditoDocumento?.autorizado_fecha| date:'dd MMM yyyy')??'N/a'}}</p>
  <div class="row">
    <div class="col-auto">
      <button class="btn" [class]="creditoDocumento?.autorizado_por?'btn-danger':'btn-success'" (click)="aprobarDocumento()">
        @if (!creditoDocumento?.autorizado_por) {
          <i class="bi bi-file-earmark-check-fill">Marcar verificado</i>
        }
        @if (creditoDocumento?.autorizado_por) {
          <i class="bi bi-file-earmark-x-fill">Cancelar verificado</i>
        }
      </button>
    </div>
    <div class="col-12 py-3">
      @if (creditoDocumento && creditoDocumento.url) {
        <a
          [href]="utils.fileUrlInLine(creditoDocumento.url)"
          target="_blank"
          download="documento.pdf"
          class="btn btn-primary"
          >
          Descargar PDF
        </a>
      }
    </div>
  </div>
  <div class="row mt-3 justify-content-center">
    <div class="col-12 col-lg-8 py-5">
      <app-file-input
        label="Documento a subir:"
        accept=".pdf"
        apiUrl="api/files/documents/save"
        key="document"
        (urlChange)="creditoDocumento!.url=$event"
        [formExtra]="{id:creditoDocumento?.id}"
        />
    </div>
  </div>
</div>` }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: CreditoProductoFinancieroDocumentoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDocumentosCreditosComponent, { className: "FormDocumentosCreditosComponent", filePath: "src/app/main/creditos/documentos-creditos/form-documentos-creditos/form-documentos-creditos.component.ts", lineNumber: 19 });
})();

// src/app/main/creditos/documentos-creditos/documentos.creditos.routes.ts
var creditosDocumentosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListDocumentosCreditosComponent },
  { path: "nuevo", component: NuevoDocumentoCreditoComponent },
  { path: "editar/:documento_id", component: FormDocumentosCreditosComponent }
];
export {
  creditosDocumentosRoutes
};
//# sourceMappingURL=chunk-7M4JZQM2.js.map
