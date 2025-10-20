import {
  CollapsableComponent
} from "./chunk-VUVNDSSC.js";
import {
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  CurrencyPipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IR6OZYYD.js";

// src/app/main/estado-cuenta/shared/view-relacion-abonos/view-relacion-abonos.component.ts
function ViewRelacionAbonosComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
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
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const abono_r1 = ctx.$implicit;
    const \u0275$index_43_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_43_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.utils.fechaFormateada(abono_r1.abono.fecha));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, abono_r1.abono.monto));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, abono_r1.pago_capital));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, abono_r1.pago_interes));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, abono_r1.pago_iva));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 18, abono_r1.corriente));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, abono_r1.adelantado));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 22, abono_r1.atrasado));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.periodosAbonados(abono_r1));
  }
}
function ViewRelacionAbonosComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 5)(2, "h4", 6)(3, "b");
    \u0275\u0275text(4, "No hay abonos registrados en este corte.");
    \u0275\u0275elementEnd()()()();
  }
}
var _ViewRelacionAbonosComponent = class _ViewRelacionAbonosComponent {
  constructor(utilsEstadoCuenta, utils) {
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.utils = utils;
    this.title = "Relaci\xF3n de Abonos";
    this.abonos = [];
    this.totalCapital = 0;
    this.totalInteres = 0;
    this.totalIva = 0;
    this.totalCorriente = 0;
    this.totalAdelantado = 0;
    this.totalAtrasado = 0;
    this.totalAbonos = 0;
  }
  ngOnChanges(changes) {
    if (changes["credito"]) {
      this.setData();
    }
  }
  setData() {
    if (this.useLocal) {
      this.estadoCuenta = this.credito.estado_cuenta;
    } else {
      this.estadoCuenta = this.utilsEstadoCuenta.getEstadoCuenta(this.credito);
    }
    this.calcularAbonosDistribuido();
  }
  periodosAbonados(abono) {
    const periodos = this.estadoCuenta?.periodos;
    if (!periodos)
      return null;
    return abono.periodos_pagados?.map((periodo_pagado) => this.utils.fechaFormateada(periodos.find((p) => p.id == periodo_pagado)?.fecha)).join(", ");
  }
  calcularAbonosDistribuido() {
    if (!this.estadoCuenta)
      return;
    this.abonos = (this.estadoCuenta.abonos_distribuidos ?? []).filter((a) => !a.abono.concepto?.includes("CONDONACION"));
    this.totalAbonos = this.estadoCuenta.monto_total_pagado;
    this.totalCapital = this.utilsEstadoCuenta.sumarListaByKey("pago_capital", this.abonos);
    this.totalInteres = this.utilsEstadoCuenta.sumarListaByKey("pago_interes", this.abonos);
    this.totalIva = this.utilsEstadoCuenta.sumarListaByKey("pago_iva", this.abonos);
    this.totalCorriente = this.utilsEstadoCuenta.sumarListaByKey("corriente", this.abonos);
    this.totalAdelantado = this.utilsEstadoCuenta.sumarListaByKey("adelantado", this.abonos);
    this.totalAtrasado = this.utilsEstadoCuenta.sumarListaByKey("atrasado", this.abonos);
  }
};
_ViewRelacionAbonosComponent.\u0275fac = function ViewRelacionAbonosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewRelacionAbonosComponent)(\u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(UtilsService));
};
_ViewRelacionAbonosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewRelacionAbonosComponent, selectors: [["app-view-relacion-abonos"]], inputs: { credito: "credito", useLocal: "useLocal", title: "title" }, features: [\u0275\u0275NgOnChangesFeature], decls: 56, vars: 23, consts: [[3, "title"], [1, "table-responsive", "py-3"], [1, "table", "table-bordered", "table-sm", "text-center"], ["colspan", "2", 1, "text-end"], [1, "fw-bold"], ["colspan", "10"], [1, "p-5"]], template: function ViewRelacionAbonosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-collapsable", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, " Monto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, " Capital ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, " Interes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, " IVA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Corriente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Adelantado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Atrasado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Periodos Abonados");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, ViewRelacionAbonosComponent_For_27_Template, 29, 24, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(28, ViewRelacionAbonosComponent_Conditional_28_Template, 5, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "tfoot")(30, "tr")(31, "td", 3);
    \u0275\u0275text(32, "Totales:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td")(34, "b");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td", 4);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td", 4);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 4);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td", 4);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td", 4);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td", 4);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "td", 4);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", ctx.title);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(ctx.abonos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.abonos.length ? 28 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 9, ctx.totalAbonos));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 11, ctx.totalCapital));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 13, ctx.totalInteres));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 15, ctx.totalIva));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 17, ctx.totalCorriente));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 19, ctx.totalAdelantado));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 21, ctx.totalAtrasado));
  }
}, dependencies: [
  CurrencyPipe,
  CollapsableComponent
], encapsulation: 2 });
var ViewRelacionAbonosComponent = _ViewRelacionAbonosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRelacionAbonosComponent, [{
    type: Component,
    args: [{ selector: "app-view-relacion-abonos", imports: [
      CurrencyPipe,
      CollapsableComponent
    ], template: '<app-collapsable [title]="title">\n  <div class="table-responsive py-3">\n    <table class="table table-bordered table-sm text-center">\n      <thead>\n        <tr>\n          <th>No.</th>\n          <th>Fecha</th>\n          <th>\n            Monto\n          </th>\n          <th>\n            Capital\n          </th>\n          <th>\n            Interes\n          </th>\n          <th>\n            IVA\n          </th>\n          <th>Corriente</th>\n          <th>Adelantado</th>\n          <th>Atrasado</th>\n          <th>Periodos Abonados</th>\n        </tr>\n      </thead>\n      <tbody>\n        @for (abono of abonos; track abono; let i = $index) {\n          <tr>\n            <td><b>{{i+1}}</b></td>\n            <td>{{utils.fechaFormateada(abono.abono.fecha) }}</td>\n            <td>{{abono.abono.monto|currency}}</td>\n            <td>{{abono.pago_capital | currency}}</td>\n            <td>{{abono.pago_interes | currency}}</td>\n            <td>{{abono.pago_iva | currency}}</td>\n            <td>{{abono.corriente | currency}}</td>\n            <td>{{abono.adelantado | currency}}</td>\n            <td>{{abono.atrasado | currency}}</td>\n            <td>{{periodosAbonados(abono)}}</td>\n          </tr>\n        }\n        @if (!abonos.length) {\n          <tr>\n            <td colspan="10">\n              <h4 class="p-5"><b>No hay abonos registrados en este corte.</b></h4>\n            </td>\n          </tr>\n        }\n      </tbody>\n      <tfoot>\n        <tr>\n          <td colspan="2" class="text-end">Totales:</td>\n          <td><b>{{totalAbonos | currency}}</b></td>\n          <td class="fw-bold">{{totalCapital | currency}}</td>\n          <td class="fw-bold">{{totalInteres | currency}}</td>\n          <td class="fw-bold">{{totalIva | currency}}</td>\n          <td class="fw-bold">{{totalCorriente | currency}}</td>\n          <td class="fw-bold">{{totalAdelantado | currency}}</td>\n          <td class="fw-bold">{{totalAtrasado | currency}}</td>\n          <td class="fw-bold"></td>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</app-collapsable>' }]
  }], () => [{ type: UtilsEstadoCuentaService }, { type: UtilsService }], { credito: [{
    type: Input
  }], useLocal: [{
    type: Input
  }], title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewRelacionAbonosComponent, { className: "ViewRelacionAbonosComponent", filePath: "src/app/main/estado-cuenta/shared/view-relacion-abonos/view-relacion-abonos.component.ts", lineNumber: 17 });
})();

export {
  ViewRelacionAbonosComponent
};
//# sourceMappingURL=chunk-JF4XKC7P.js.map
