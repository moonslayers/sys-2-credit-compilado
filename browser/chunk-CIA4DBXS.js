import {
  AmortizacionesComponent
} from "./chunk-OZ75JDJE.js";
import {
  CotizadorService
} from "./chunk-DJKNR32H.js";
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
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/cotizador/cotizador.component.ts
function CotizadorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h3", 3)(2, "b");
    \u0275\u0275text(3, "Cotizador Express");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "label", 7);
    \u0275\u0275text(8, "Capital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function CotizadorComponent_Conditional_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.data.capital, $event) || (ctx_r1.data.capital = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "label", 9);
    \u0275\u0275text(13, "Inter\xE9s Anual (0-100)%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function CotizadorComponent_Conditional_0_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.data.interes_anual, $event) || (ctx_r1.data.interes_anual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 5)(16, "div", 6)(17, "label", 11);
    \u0275\u0275text(18, "Incluir IVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function CotizadorComponent_Conditional_0_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.data.incluir_iva, $event) || (ctx_r1.data.incluir_iva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 13);
    \u0275\u0275text(21, "S\xED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 13);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(24, "div", 4)(25, "div", 5)(26, "div", 6)(27, "label", 14);
    \u0275\u0275text(28, "Gasto de cobranza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CotizadorComponent_Conditional_0_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.data.gastos_judiciales, $event) || (ctx_r1.data.gastos_judiciales = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 5)(31, "div", 6)(32, "label", 16);
    \u0275\u0275text(33, "Plazos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function CotizadorComponent_Conditional_0_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.data.plazos, $event) || (ctx_r1.data.plazos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 5)(36, "div", 6)(37, "label", 18);
    \u0275\u0275text(38, "Tipo de Plazo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function CotizadorComponent_Conditional_0_Template_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.data.plazo_tipo, $event) || (ctx_r1.data.plazo_tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(40, "option", 20);
    \u0275\u0275text(41, "Mensual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 21);
    \u0275\u0275text(43, "Semanal");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 4)(45, "div", 5)(46, "div", 6)(47, "label", 22);
    \u0275\u0275text(48, "Fecha de Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CotizadorComponent_Conditional_0_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.data.fecha_inicio, $event) || (ctx_r1.data.fecha_inicio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 6)(51, "label", 24);
    \u0275\u0275text(52, "Tipo de Tasa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CotizadorComponent_Conditional_0_Template_select_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.data.tipo_tasa, $event) || (ctx_r1.data.tipo_tasa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(54, "option", 26);
    \u0275\u0275text(55, "Tasa Ordinaria Anual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 27);
    \u0275\u0275text(57, "Tasa Insoluta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 28)(59, "div", 29)(60, "button", 30);
    \u0275\u0275listener("click", function CotizadorComponent_Conditional_0_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getAmortizaciones());
    });
    \u0275\u0275text(61, " Cotizar Amortizaciones ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.div);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.data.capital);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.data.interes_anual);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.data.incluir_iva);
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.data.gastos_judiciales);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.data.plazos);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.data.plazo_tipo);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.data.fecha_inicio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.data.tipo_tasa);
  }
}
var _CotizadorComponent = class _CotizadorComponent {
  constructor(cotizadorService) {
    this.cotizadorService = cotizadorService;
    this.div = "container my-2 rounded shadow p-3 bg-white";
    this.data = {
      capital: 1e5,
      interes_anual: 24,
      incluir_iva: true,
      gastos_judiciales: 0,
      plazos: 24,
      plazo_tipo: "MENSUAL",
      fecha_inicio: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
      tipo_tasa: "TASA ORDINARIA ANUAL"
    };
  }
  getAmortizaciones() {
    return __async(this, null, function* () {
      this.amortizaciones = this.cotizadorService.calcularAmortizaciones(this.data);
    });
  }
};
_CotizadorComponent.\u0275fac = function CotizadorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CotizadorComponent)(\u0275\u0275directiveInject(CotizadorService));
};
_CotizadorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CotizadorComponent, selectors: [["app-cotizador"]], inputs: { div: "div" }, decls: 2, vars: 4, consts: [[1, "mt-4", 3, "class"], [3, "amortizacionesChange", "div", "amortizaciones", "data"], [1, "mt-4"], [1, "text-center"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg"], [1, "form-group"], ["for", "capital", 1, "fw-bold"], ["type", "number", "id", "capital", "name", "capital", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "interesAnual", 1, "fw-bold"], ["type", "number", "id", "interesAnual", "name", "interesAnual", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "incluirIva", 1, "fw-bold"], ["id", "incluirIva", "name", "incluirIva", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "gastosJudiciales", 1, "fw-bold"], ["type", "number", "id", "gastosJudiciales", "name", "gastosJudiciales", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "plazos", 1, "fw-bold"], ["type", "number", "id", "plazos", "name", "plazos", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "plazo_tipo", 1, "fw-bold"], ["id", "plazo_tipo", "name", "plazo_tipo", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "MENSUAL"], ["value", "SEMANAL"], ["for", "fechaInicio", 1, "fw-bold"], ["type", "date", "id", "fechaInicio", "name", "fechaInicio", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tipoTasa", 1, "fw-bold"], ["id", "tipoTasa", "name", "tipoTasa", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "TASA ORDINARIA ANUAL"], ["value", "TASA INSOLUTA"], [1, "row", "mt-3"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click"]], template: function CotizadorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CotizadorComponent_Conditional_0_Template, 62, 12, "div", 0);
    \u0275\u0275elementStart(1, "app-amortizaciones", 1);
    \u0275\u0275twoWayListener("amortizacionesChange", function CotizadorComponent_Template_app_amortizaciones_amortizacionesChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.amortizaciones, $event) || (ctx.amortizaciones = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.amortizaciones ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("div", ctx.div);
    \u0275\u0275twoWayProperty("amortizaciones", ctx.amortizaciones);
    \u0275\u0275property("data", ctx.data);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, AmortizacionesComponent], encapsulation: 2 });
var CotizadorComponent = _CotizadorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CotizadorComponent, [{
    type: Component,
    args: [{ selector: "app-cotizador", imports: [
      FormsModule,
      AmortizacionesComponent
    ], template: '\n@if (!amortizaciones) {\n  <div [class]="div" class="mt-4">\n    <h3 class="text-center"><b>Cotizador Express</b></h3>\n    <div class="row">\n      <div class="col-12 col-sm-6 col-md-4 col-lg">\n        <div class="form-group">\n          <label class="fw-bold" for="capital">Capital</label>\n          <input type="number" class="form-control" id="capital" [(ngModel)]="data.capital" name="capital" min="0">\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-md-4 col-lg">\n        <div class="form-group">\n          <label class="fw-bold" for="interesAnual">Inter\xE9s Anual (0-100)%</label>\n          <input type="number" class="form-control" id="interesAnual" [(ngModel)]="data.interes_anual"\n            name="interesAnual" min="0">\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-md-4 col-lg">\n        <div class="form-group">\n          <label class="fw-bold" for="incluirIva">Incluir IVA</label>\n          <select class="form-select" id="incluirIva" [(ngModel)]="data.incluir_iva" name="incluirIva">\n            <option [value]="true">S\xED</option>\n            <option [value]="false">No</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-12 col-sm-6 col-md-4 col-lg">\n        <div class="form-group">\n          <label class="fw-bold" for="gastosJudiciales">Gasto de cobranza</label>\n          <input type="number" class="form-control" id="gastosJudiciales" [(ngModel)]="data.gastos_judiciales"\n            name="gastosJudiciales" min="0">\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-md-4 col-lg">\n        <div class="form-group">\n          <label class="fw-bold" for="plazos">Plazos</label>\n          <input type="number" class="form-control" id="plazos" [(ngModel)]="data.plazos" name="plazos" min="1">\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-md-4 col-lg">\n        <div class="form-group">\n          <label class="fw-bold" for="plazo_tipo">Tipo de Plazo</label>\n          <select class="form-control" id="plazo_tipo" [(ngModel)]="data.plazo_tipo" name="plazo_tipo">\n            <option value="MENSUAL">Mensual</option>\n            <option value="SEMANAL">Semanal</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-12 col-sm-6 col-md-4 col-lg">\n        <div class="form-group">\n          <label class="fw-bold" for="fechaInicio">Fecha de Inicio</label>\n          <input type="date" class="form-control" id="fechaInicio" [(ngModel)]="data.fecha_inicio" name="fechaInicio">\n        </div>\n      </div>\n    </div>\n    <div class="form-group">\n      <label class="fw-bold" for="tipoTasa">Tipo de Tasa</label>\n      <select class="form-control" id="tipoTasa" [(ngModel)]="data.tipo_tasa" name="tipoTasa">\n        <option value="TASA ORDINARIA ANUAL">Tasa Ordinaria Anual</option>\n        <option value="TASA INSOLUTA">Tasa Insoluta</option>\n      </select>\n    </div>\n    <div class="row mt-3">\n      <div class="col text-center">\n        <button class="btn btn-primary" (click)="getAmortizaciones()">\n          Cotizar Amortizaciones\n        </button>\n      </div>\n    </div>\n  </div>\n}\n<app-amortizaciones [div]="div" [(amortizaciones)]="amortizaciones" [data]="data"  />\n' }]
  }], () => [{ type: CotizadorService }], { div: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CotizadorComponent, { className: "CotizadorComponent", filePath: "src/app/main/cotizador/cotizador.component.ts", lineNumber: 57 });
})();

export {
  CotizadorComponent
};
//# sourceMappingURL=chunk-CIA4DBXS.js.map
