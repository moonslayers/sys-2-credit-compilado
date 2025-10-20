import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-TBFW4U4H.js";
import {
  ActivatedRoute
} from "./chunk-XKAAYCNZ.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/creditos/credito-form/credito-form.utils.service.ts
var _CreditoFormUtilsService = class _CreditoFormUtilsService {
  isFormDisabled(credito) {
    if (!credito)
      return false;
    return credito.formalizado_fecha !== null;
  }
};
_CreditoFormUtilsService.\u0275fac = function CreditoFormUtilsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoFormUtilsService)();
};
_CreditoFormUtilsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoFormUtilsService, factory: _CreditoFormUtilsService.\u0275fac, providedIn: "root" });
var CreditoFormUtilsService = _CreditoFormUtilsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoFormUtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/main/creditos/credito-form/form-datos-bancarios/form-datos-bancarios.component.ts
function FormDatosBancariosComponent_Conditional_0_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function FormDatosBancariosComponent_Conditional_0_Conditional_11_For_2_Template_button_click_0_listener() {
      const banco_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectBanco(banco_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banco_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", banco_r4, " ");
  }
}
function FormDatosBancariosComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, FormDatosBancariosComponent_Conditional_0_Conditional_11_For_2_Template, 2, 1, "button", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredBancos);
  }
}
function FormDatosBancariosComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h5", 2);
    \u0275\u0275text(2, "Datos bancarios del solicitante");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr", 3);
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "label")(7, "b");
    \u0275\u0275text(8, "Banco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 6, 0);
    \u0275\u0275twoWayListener("ngModelChange", function FormDatosBancariosComponent_Conditional_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito.banco, $event) || (ctx_r1.credito.banco = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function FormDatosBancariosComponent_Conditional_0_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterBancos());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, FormDatosBancariosComponent_Conditional_0_Conditional_11_Template, 3, 0, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 5)(13, "label")(14, "b");
    \u0275\u0275text(15, "Numero de cuenta bancaria");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function FormDatosBancariosComponent_Conditional_0_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito.numero_cuenta, $event) || (ctx_r1.credito.numero_cuenta = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 5)(18, "label")(19, "b");
    \u0275\u0275text(20, "CLABE Interbancaria");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function FormDatosBancariosComponent_Conditional_0_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito.clabe_interbancaria, $event) || (ctx_r1.credito.clabe_interbancaria = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 10)(23, "div", 11)(24, "button", 12);
    \u0275\u0275listener("click", function FormDatosBancariosComponent_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.creditoController.update(ctx_r1.credito.id, ctx_r1.credito));
    });
    \u0275\u0275text(25, "Guardar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.credito.banco);
    \u0275\u0275property("disabled", ctx_r1.isFormalizado);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredBancos.length > 0 ? 11 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.credito.numero_cuenta);
    \u0275\u0275property("disabled", ctx_r1.isFormalizado);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.credito.clabe_interbancaria);
    \u0275\u0275property("disabled", ctx_r1.isFormalizado);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isFormalizado);
  }
}
var institucionesFinancieras = [
  "ACTINVER",
  "AFIRME",
  "albo",
  "ARCUS FI",
  "ASP INTEGRA OPC",
  "AUTOFIN",
  "AZTECA",
  "BaBien",
  "BAJIO",
  "BANAMEX",
  "BANCO COVALTO",
  "BANCOMEXT",
  "BANCOPPEL",
  "BANCO S3",
  "BANCREA",
  "BANJERCITO",
  "BANKAOOL",
  "BANK OF AMERICA",
  "BANK OF CHINA",
  "BANOBRAS",
  "BANORTE",
  "BANREGIO",
  "BANSI",
  "BANXICO",
  "BARCLAYS",
  "BBASE",
  "BBVA MEXICO",
  "BMONEX",
  "CAJA POP MEXICA",
  "CAJA TELEFONIST",
  "Cartera Digital",
  "CB INTERCAM",
  "CIBANCO",
  "CI BOLSA",
  "CITI MEXICO",
  "CLS",
  "CoDi Valida",
  "COMPARTAMOS",
  "CONSUBANCO",
  "CREDICAPITAL",
  "CREDICLUB",
  "CRISTOBAL COLON",
  "Cuenca",
  "DONDE",
  "FINAMEX",
  "FINCOMUN",
  "FINCO PAY",
  "FOMPED",
  "FONDEADORA",
  "FONDO (FIRA)",
  "GBM",
  "HEY BANCO",
  "HIPOTECARIA FED",
  "HSBC",
  "ICBC",
  "INBURSA",
  "INDEVAL",
  "INMOBILIARIO",
  "INTERCAM BANCO",
  "INVEX",
  "JP MORGAN",
  "KLAR",
  "KUSPIT",
  "LIBERTAD",
  "MASARI",
  "Mercado Pago W",
  "MIFEL",
  "MIZUHO BANK",
  "MONEXCB",
  "MUFG",
  "MULTIVA BANCO",
  "NAFIN",
  "NU MEXICO",
  "NVIO",
  "PAGATODO",
  "Peibo",
  "PROFUTURO",
  "SABADELL",
  "SANTANDER",
  "SCOTIABANK",
  "SHINHAN",
  "SPIN BY OXXO",
  "STP",
  "TESORED",
  "TRANSFER",
  "UALA",
  "UNAGRA",
  "VALMEX",
  "VALUE",
  "VECTOR",
  "VE POR MAS",
  "VOLKSWAGEN"
];
var _FormDatosBancariosComponent = class _FormDatosBancariosComponent {
  constructor(creditoController, utils, route, creditoUtils) {
    this.creditoController = creditoController;
    this.utils = utils;
    this.route = route;
    this.creditoUtils = creditoUtils;
    this.isFormalizado = false;
    this.bancosList = institucionesFinancieras;
    this.filteredBancos = [];
  }
  ngOnInit() {
    this.route.parent?.parent?.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id, []);
        this.isFormalizado = this.creditoUtils.isFormDisabled(this.credito);
      }
    }));
  }
  // Filtra bancos según lo que escribe el usuario
  filterBancos() {
    if (!this.credito)
      return;
    const searchTerm = this.credito.banco?.toLowerCase() || "";
    this.filteredBancos = this.bancosList.filter((banco) => banco.toLowerCase().includes(searchTerm)).slice(0, 10);
  }
  // Selecciona un banco de la lista
  selectBanco(banco) {
    if (!this.credito)
      return;
    this.credito.banco = banco;
    this.filteredBancos = [];
  }
};
_FormDatosBancariosComponent.\u0275fac = function FormDatosBancariosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormDatosBancariosComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoFormUtilsService));
};
_FormDatosBancariosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormDatosBancariosComponent, selectors: [["app-form-datos-bancarios"]], decls: 1, vars: 1, consts: [["bancoInput", ""], [1, "container", "p-3"], [1, "fw-bold"], [1, "my-1", "border", "border-primary"], [1, "row", "justify-content-evenly", "mt-2"], [1, "col-12", "col-sm", "p-3"], ["placeholder", "Nombre del banco...", 1, "form-control", 3, "ngModelChange", "input", "ngModel", "disabled"], [1, "list-group", "mt-1"], ["placeholder", "Numero de cuenta...", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "CLABE...", "maxlength", "18", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "row", "px-5", "mt-4"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "list-group-item", "list-group-item-action"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click"]], template: function FormDatosBancariosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormDatosBancariosComponent_Conditional_0_Template, 26, 8, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n.list-group[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: calc(100% - 30px);\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-left: none;\n  border-right: none;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.container[_ngcontent-%COMP%] {\n  min-height: 25rem;\n}\n/*# sourceMappingURL=form-datos-bancarios.component.css.map */"] });
var FormDatosBancariosComponent = _FormDatosBancariosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormDatosBancariosComponent, [{
    type: Component,
    args: [{ selector: "app-form-datos-bancarios", imports: [
      FormsModule
    ], template: '@if (credito) {\n  <div class="container p-3">\n    <h5 class="fw-bold">Datos bancarios del solicitante</h5>\n    <hr class="my-1 border border-primary">\n    <div class="row justify-content-evenly mt-2">\n      <div class="col-12 col-sm p-3">\n        <label><b>Banco</b></label>\n        <input class="form-control" placeholder="Nombre del banco..." [(ngModel)]="credito.banco"\n          (input)="filterBancos()" #bancoInput [disabled]="isFormalizado">\n        <!-- Lista de sugerencias -->\n        @if (filteredBancos.length > 0) {\n          <div class="list-group mt-1">\n            @for (banco of filteredBancos; track banco) {\n              <button type="button" class="list-group-item list-group-item-action"\n                (click)="selectBanco(banco)">\n                {{banco}}\n              </button>\n            }\n          </div>\n        }\n      </div>\n      <div class="col-12 col-sm p-3">\n        <label><b>Numero de cuenta bancaria</b></label>\n        <input class="form-control" placeholder="Numero de cuenta..." [(ngModel)]="credito.numero_cuenta" [disabled]="isFormalizado">\n      </div>\n      <div class="col-12 col-sm p-3">\n        <label><b>CLABE Interbancaria</b></label>\n        <input class="form-control" placeholder="CLABE..." maxlength="18" [(ngModel)]="credito.clabe_interbancaria" [disabled]="isFormalizado">\n      </div>\n    </div>\n    <div class="row px-5 mt-4">\n      <div class="col text-center">\n        <button class="btn btn-primary" (click)="creditoController.update(credito.id,credito)" [disabled]="isFormalizado">Guardar</button>\n      </div>\n    </div>\n  </div>\n}', styles: ["/* src/app/main/creditos/credito-form/form-datos-bancarios/form-datos-bancarios.component.css */\n.list-group {\n  position: absolute;\n  z-index: 1000;\n  width: calc(100% - 30px);\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.list-group-item {\n  cursor: pointer;\n  border-left: none;\n  border-right: none;\n}\n.list-group-item:hover {\n  background-color: #f8f9fa;\n}\n.container {\n  min-height: 25rem;\n}\n/*# sourceMappingURL=form-datos-bancarios.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }, { type: UtilsService }, { type: ActivatedRoute }, { type: CreditoFormUtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormDatosBancariosComponent, { className: "FormDatosBancariosComponent", filePath: "src/app/main/creditos/credito-form/form-datos-bancarios/form-datos-bancarios.component.ts", lineNumber: 113 });
})();

export {
  CreditoFormUtilsService,
  institucionesFinancieras,
  FormDatosBancariosComponent
};
//# sourceMappingURL=chunk-YKJ36RR3.js.map
