import {
  CollapsableComponent
} from "./chunk-VUVNDSSC.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  DatePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/estado-cuenta/shared/view-relacion-convenios/view-relacion-convenios.component.ts
var _c0 = (a0) => ["/main/estado-cuenta", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ViewRelacionConveniosComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, " Este c\u0155edito fue migrado en el sistema anterior en el cr\xE9dito con folio ");
    \u0275\u0275elementStart(2, "a", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, ctx_r0.creditoReestructura.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.creditoReestructura.folio);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" en ", \u0275\u0275pipeBind2(5, 3, ctx_r0.credito.fecha_reestructura, "dd/MM/yyyy"), ". ");
  }
}
function ViewRelacionConveniosComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 8)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 9);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const convenio_r2 = ctx.$implicit;
    \u0275\u0275classProp("table-primary", convenio_r2.estatus == "ACTIVO");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(convenio_r2.tipo_convenio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, convenio_r2.capital));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 13, convenio_r2.interes_ordinario));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 15, convenio_r2.iva_interes_ordinario));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 17, convenio_r2.interes_moratorio_cobrado));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, convenio_r2.interes_moratorio_condonado));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 21, convenio_r2.fecha_inicio, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 24, convenio_r2.fecha_conclusion, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(convenio_r2.estatus);
  }
}
function ViewRelacionConveniosComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "No hay convenios realizados en este Cr\xE9dito");
    \u0275\u0275elementEnd();
  }
}
var _ViewRelacionConveniosComponent = class _ViewRelacionConveniosComponent {
  constructor(creditoController) {
    this.creditoController = creditoController;
    this.convenios = [];
  }
  ngOnInit() {
    this.setConvenios();
    this.checarSiFueReestructurado();
  }
  setConvenios() {
    this.convenios = this.credito.convenios ?? [];
    this.convenios.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }
  ngOnChanges(changes) {
    if (changes["credito"] && this.credito.id != changes["credito"].previousValue?.id) {
      this.setConvenios();
      this.checarSiFueReestructurado();
    }
  }
  checarSiFueReestructurado() {
    return __async(this, null, function* () {
      if (!this.credito.folio_reestructura) {
        this.creditoReestructura = void 0;
        return;
      }
      if (this.creditoReestructura?.folio == this.credito.folio_reestructura)
        return;
      this.creditoReestructura = yield this.creditoController.first({ folio: this.credito.folio_reestructura }, [], {}, false);
    });
  }
};
_ViewRelacionConveniosComponent.\u0275fac = function ViewRelacionConveniosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewRelacionConveniosComponent)(\u0275\u0275directiveInject(CreditoService));
};
_ViewRelacionConveniosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewRelacionConveniosComponent, selectors: [["app-view-relacion-convenios"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 29, vars: 2, consts: [["title", "Historial de Convenios"], [1, "container-fluid", "p-3"], ["role", "alert", 1, "alert", "alert-info"], [1, "table-responsive"], [1, "table"], [1, "text-uppercase", 3, "table-primary"], [1, "fw-bold", "p-5", "text-center"], [3, "routerLink"], [1, "text-uppercase"], [1, "fw-bold"]], template: function ViewRelacionConveniosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-collapsable", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ViewRelacionConveniosComponent_Conditional_2_Template, 6, 8, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "table", 4)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Capital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Inter\xE9s Ordinario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Iva Inter\xE9s Ordinario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Inter\xE9s Moratorio Cobrado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Inter\xE9s Moratorio Condonado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Inicio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Conclusi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, ViewRelacionConveniosComponent_For_27_Template, 26, 27, "tr", 5, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, ViewRelacionConveniosComponent_Conditional_28_Template, 2, 0, "p", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.creditoReestructura ? 2 : -1);
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx.credito.convenios);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(ctx.credito.convenios == null ? null : ctx.credito.convenios.length) ? 28 : -1);
  }
}, dependencies: [
  CurrencyPipe,
  DatePipe,
  CollapsableComponent,
  RouterLink
], encapsulation: 2 });
var ViewRelacionConveniosComponent = _ViewRelacionConveniosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRelacionConveniosComponent, [{
    type: Component,
    args: [{ selector: "app-view-relacion-convenios", imports: [
      CurrencyPipe,
      DatePipe,
      CollapsableComponent,
      RouterLink
    ], template: `<app-collapsable title="Historial de Convenios">
  <div class="container-fluid p-3">
    @if (creditoReestructura) {
      <div class="alert alert-info" role="alert">
        Este c\u0155edito fue migrado en el sistema anterior en el cr\xE9dito con folio
        <a [routerLink]="['/main/estado-cuenta',creditoReestructura.id]">{{creditoReestructura.folio}}</a>
        en {{credito.fecha_reestructura | date:'dd/MM/yyyy'}}.
      </div>
    }
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Capital</th>
            <th>Inter\xE9s Ordinario</th>
            <th>Iva Inter\xE9s Ordinario</th>
            <th>Inter\xE9s Moratorio Cobrado</th>
            <th>Inter\xE9s Moratorio Condonado</th>
            <th>Inicio</th>
            <th>Conclusi\xF3n</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          @for (convenio of credito.convenios; track convenio.id) {
            <tr class="text-uppercase" [class.table-primary]="convenio.estatus=='ACTIVO'">
              <td>{{convenio.tipo_convenio}}</td>
              <td>{{convenio.capital|currency}}</td>
              <td>{{convenio.interes_ordinario|currency}}</td>
              <td>{{convenio.iva_interes_ordinario|currency}}</td>
              <td>{{convenio.interes_moratorio_cobrado|currency}}</td>
              <td>{{convenio.interes_moratorio_condonado|currency}}</td>
              <td>{{convenio.fecha_inicio|date:'dd/MM/yyyy'}}</td>
              <td>{{convenio.fecha_conclusion|date:'dd/MM/yyyy'}}</td>
              <td class="fw-bold">{{convenio.estatus}}</td>
            </tr>
          }
        </tbody>
      </table>
      @if (!credito.convenios?.length) {
        <p class="fw-bold p-5 text-center">No hay convenios realizados en este Cr\xE9dito</p>
      }
    </div>
  </div>
</app-collapsable>` }]
  }], () => [{ type: CreditoService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewRelacionConveniosComponent, { className: "ViewRelacionConveniosComponent", filePath: "src/app/main/estado-cuenta/shared/view-relacion-convenios/view-relacion-convenios.component.ts", lineNumber: 21 });
})();

export {
  ViewRelacionConveniosComponent
};
//# sourceMappingURL=chunk-B5NEAJIS.js.map
