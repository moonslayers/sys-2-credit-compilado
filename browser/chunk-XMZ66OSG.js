import {
  GeneradorExcelService
} from "./chunk-BBNJFIFW.js";
import {
  CollapsableComponent
} from "./chunk-VUVNDSSC.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  Router
} from "./chunk-XKAAYCNZ.js";
import {
  DatePipe,
  NgClass,
  TitleCasePipe
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";

// src/app/main/estado-cuenta/shared/view-gestiones-cobro/view-gestiones-cobro.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ViewGestionesCobroComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 15)(1, "td", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 12)(4, "span", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 14)(18, "button", 22);
    \u0275\u0275listener("click", function ViewGestionesCobroComponent_For_34_Template_button_click_18_listener() {
      const cobro_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.utils.openUrlInline(cobro_r2.documento_url));
    });
    \u0275\u0275element(19, "i", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "div", 24);
    \u0275\u0275element(22, "i", 25);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 12)(25, "span", 19);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cobro_r2 = ctx.$implicit;
    const \u0275$index_56_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.credito.credito_evento_cobros.length - \u0275$index_56_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.utils.fechaFormateada(cobro_r2.fecha), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cobro_r2.modalidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getBadgeClass(cobro_r2.resultado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cobro_r2.resultado === "OTRO" && cobro_r2.otro_resultado ? cobro_r2.otro_resultado : \u0275\u0275pipeBind1(12, 10, cobro_r2.resultado), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cobro_r2.comentario || "N/A", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cobro_r2.objetivo ?? "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !cobro_r2.documento_url);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (cobro_r2.usuario_ejecutivo == null ? null : cobro_r2.usuario_ejecutivo.nombre) ?? cobro_r2.nombre_usuario, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 12, cobro_r2.fecha, "dd/MM/yyyy") ?? "N/A", " ");
  }
}
function ViewGestionesCobroComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26)(2, "div", 27);
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275elementStart(4, "p", 29);
    \u0275\u0275text(5, "No hay gestiones de cobro registradas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 17);
    \u0275\u0275text(7, "No se encontraron gestiones para este cr\xE9dito");
    \u0275\u0275elementEnd()()()();
  }
}
var _ViewGestionesCobroComponent = class _ViewGestionesCobroComponent {
  constructor(router, utils, excelService) {
    this.router = router;
    this.utils = utils;
    this.excelService = excelService;
    this.today = /* @__PURE__ */ new Date();
  }
  ngOnChanges(changes) {
    if (changes["credito"] && this.credito.credito_evento_cobros) {
      console.log(this.credito.credito_evento_cobros);
      this.credito.credito_evento_cobros.sort((a, b) => new Date(b.fecha ?? "1900-01-01").getTime() - new Date(a.fecha ?? "1900-01-01").getTime());
    }
  }
  getBadgeClass(resultado) {
    switch (resultado) {
      case "NO REALIZADO":
        return "bg-secondary";
      case "NO LOCALIZADO":
        return "bg-danger bg-opacity-20 text-bg-danger";
      case "LOCALIZADO":
        return "bg-success bg-opacity-20 text-bg-success";
      case "PROMESA DE PAGO":
        return "bg-warning bg-opacity-20 text-dark";
      case "CONVENIO CON ADEUDO":
        return "bg-info bg-opacity-20 text-dark";
      case "CONVENIO AL CORRIENTE":
        return "bg-info bg-opacity-10 text-bg-info";
      case "LIQUIDADO":
        return "bg-success text-white";
      case "DEFUNCION":
        return "bg-dark text-white";
      case "OTRO":
        return "bg-light text-dark border";
      default:
        return "bg-light text-dark";
    }
  }
  exportarExcel() {
    this.excelService.exportToExcel(this.credito.credito_evento_cobros, "gestiones_cobro");
  }
};
_ViewGestionesCobroComponent.\u0275fac = function ViewGestionesCobroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ViewGestionesCobroComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(GeneradorExcelService));
};
_ViewGestionesCobroComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewGestionesCobroComponent, selectors: [["app-view-gestiones-cobro"]], inputs: { credito: "credito" }, features: [\u0275\u0275NgOnChangesFeature], decls: 42, vars: 6, consts: [["title", "Relaci\xF3n de Gestiones de Cobro"], [1, "container-fluid", "p-3"], [1, "table-container"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-0", "text-muted"], [1, "bi", "bi-credit-card", "me-2"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "bi", "bi-file-excel", "me-1"], [1, "table-responsive", "rounded-3", "border", "shadow-sm"], [1, "table", "table-hover", "table-bordered", "mb-0"], [1, "table-light"], [1, "text-center", 2, "width", "50px"], [1, "text-nowrap"], [2, "width", "100%"], [1, "text-center"], [1, "align-middle"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], [1, "text-muted"], [1, "text-center", "fw-semibold"], [1, "badge", "bg-light", "text-dark"], [1, "badge", "bg-primary", "bg-opacity-10", "text-light"], [1, "badge", 3, "ngClass"], ["title", "Descargar documento", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-download"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-person-circle", "me-2", "text-muted"], ["colspan", "9", 1, "py-4"], [1, "text-center", "text-muted"], [1, "bi", "bi-inbox", 2, "font-size", "2rem"], [1, "mt-2", "mb-0", "fw-semibold"]], template: function ViewGestionesCobroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-collapsable", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
    \u0275\u0275element(5, "i", 5);
    \u0275\u0275text(6, "Historial de Gestiones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function ViewGestionesCobroComponent_Template_button_click_7_listener() {
      return ctx.exportarExcel();
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275text(9, " Exportar Excel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "table", 9)(12, "thead", 10)(13, "tr")(14, "th", 11);
    \u0275\u0275text(15, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 12);
    \u0275\u0275text(17, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Modalidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Resultado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 13);
    \u0275\u0275text(23, "Comentario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Objetivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 14);
    \u0275\u0275text(27, "Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Ejecutivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31, "Registrado En:");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275repeaterCreate(33, ViewGestionesCobroComponent_For_34_Template, 28, 15, "tr", 15, _forTrack0);
    \u0275\u0275conditionalCreate(35, ViewGestionesCobroComponent_Conditional_35_Template, 8, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 16)(37, "small", 17);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "small", 17);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(33);
    \u0275\u0275repeater(ctx.credito.credito_evento_cobros);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(ctx.credito.credito_evento_cobros == null ? null : ctx.credito.credito_evento_cobros.length) ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Mostrando ", (ctx.credito.credito_evento_cobros == null ? null : ctx.credito.credito_evento_cobros.length) || 0, " registros ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \xDAltima actualizaci\xF3n: ", \u0275\u0275pipeBind2(41, 3, ctx.today, "dd/MM/yyyy HH:mm"), " ");
  }
}, dependencies: [
  NgClass,
  DatePipe,
  CollapsableComponent,
  TitleCasePipe
], styles: ["\n\n.table-responsive[_ngcontent-%COMP%] {\n  max-height: 35rem;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=view-gestiones-cobro.component.css.map */"] });
var ViewGestionesCobroComponent = _ViewGestionesCobroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewGestionesCobroComponent, [{
    type: Component,
    args: [{ selector: "app-view-gestiones-cobro", imports: [
      NgClass,
      DatePipe,
      CollapsableComponent,
      TitleCasePipe
    ], template: `<app-collapsable title="Relaci\xF3n de Gestiones de Cobro">
  <div class="container-fluid p-3">
    <div class="table-container">
      <!-- Cabecera con bot\xF3n de exportaci\xF3n -->
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="mb-0 text-muted">
          <i class="bi bi-credit-card me-2"></i>Historial de Gestiones
        </h5>
        <button class="btn btn-sm btn-success" (click)="exportarExcel()">
          <i class="bi bi-file-excel me-1"></i> Exportar Excel
        </button>
      </div>

      <!-- Tabla mejorada -->
      <div class="table-responsive rounded-3 border shadow-sm">
        <table class="table table-hover table-bordered mb-0">
          <thead class="table-light">
            <tr>
              <th class="text-center" style="width: 50px">#</th>
              <th class="text-nowrap">Fecha</th>
              <th>Modalidad</th>
              <th>Resultado</th>
              <th style="width: 100%;">Comentario</th>
              <th>Objetivo</th>
              <th class="text-center">Documento</th>
              <th>Ejecutivo</th>
              <th>Registrado En:</th>
            </tr>
          </thead>
          <tbody>
            @for (cobro of credito.credito_evento_cobros; track cobro.id; let i = $index) {
              <tr
                class="align-middle">
                <td class="text-center fw-semibold">{{credito.credito_evento_cobros!.length - i}}</td>
                <td class="text-nowrap">
                  <span class="badge bg-light text-dark">
                    {{utils.fechaFormateada(cobro.fecha)}}
                  </span>
                </td>
                <td>
                  <span class="badge bg-primary bg-opacity-10 text-light">
                    {{cobro.modalidad}}
                  </span>
                </td>
                <td>
                  <span class="badge"
                    [ngClass]="getBadgeClass(cobro.resultado)">
                    {{cobro.resultado === 'OTRO' && cobro.otro_resultado ? cobro.otro_resultado : cobro.resultado | titlecase}}
                  </span>
                </td>
                <td>
                  {{cobro.comentario || 'N/A'}}
                </td>
                <td>{{cobro.objetivo??'N/A'}}</td>
                <td class="text-center">
                  <button
                    class="btn btn-sm btn-outline-secondary"
                    (click)="utils.openUrlInline(cobro.documento_url)"
                    title="Descargar documento"
                    [disabled]="!cobro.documento_url">
                    <i class="bi bi-download"></i>
                  </button>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <i class="bi bi-person-circle me-2 text-muted"></i>
                    {{cobro.usuario_ejecutivo?.nombre ?? cobro.nombre_usuario }}
                  </div>
                </td>
                <td class="text-nowrap">
                  <span class="badge bg-light text-dark">
                    {{(cobro.fecha|date:'dd/MM/yyyy')??'N/A'}}
                  </span>
                </td>
              </tr>
            }
            @if (!credito.credito_evento_cobros?.length) {
              <tr>
                <td colspan="9" class="py-4">
                  <div class="text-center text-muted">
                    <i class="bi bi-inbox" style="font-size: 2rem"></i>
                    <p class="mt-2 mb-0 fw-semibold">No hay gestiones de cobro registradas</p>
                    <small class="text-muted">No se encontraron gestiones para este cr\xE9dito</small>
                  </div>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Pie de tabla con resumen -->
      <div class="d-flex justify-content-between align-items-center mt-2">
        <small class="text-muted">
          Mostrando {{credito.credito_evento_cobros?.length || 0}} registros
        </small>
        <small class="text-muted">
          \xDAltima actualizaci\xF3n: {{today | date:'dd/MM/yyyy HH:mm'}}
        </small>
      </div>
    </div>
  </div>
</app-collapsable>`, styles: ["/* src/app/main/estado-cuenta/shared/view-gestiones-cobro/view-gestiones-cobro.component.css */\n.table-responsive {\n  max-height: 35rem;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=view-gestiones-cobro.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: UtilsService }, { type: GeneradorExcelService }], { credito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewGestionesCobroComponent, { className: "ViewGestionesCobroComponent", filePath: "src/app/main/estado-cuenta/shared/view-gestiones-cobro/view-gestiones-cobro.component.ts", lineNumber: 21 });
})();

export {
  ViewGestionesCobroComponent
};
//# sourceMappingURL=chunk-XMZ66OSG.js.map
