import {
  StepsTabsComponent
} from "./chunk-SIIGP4ES.js";
import {
  SolicitudApoyoService
} from "./chunk-OBCD5SW4.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet
} from "./chunk-XKAAYCNZ.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/apoyos/form-apoyos/form-apoyos.component.ts
function FormApoyosComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function FormApoyosComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solicitudApoyoController.avanzarEstado(ctx_r1.modalidadActual));
    });
    \u0275\u0275text(1, " Marcar Llenado ");
    \u0275\u0275elementEnd();
  }
}
function FormApoyosComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function FormApoyosComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solicitudApoyoController.retrocederEstado(ctx_r1.modalidadActual));
    });
    \u0275\u0275text(1, " Cancelar Llenado ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", (ctx_r1.modalidadActual == null ? null : ctx_r1.modalidadActual.estado) !== "CAPTURA COMPLETA");
  }
}
var STEPTABS = [
  {
    key: "datos-personales",
    title: "",
    header: "Datos Personales"
  },
  {
    key: "negocio",
    title: "",
    header: "Negocio"
  },
  {
    key: "modalidades",
    title: "",
    header: "Modalidades"
  },
  {
    key: "inversion-programa",
    title: "",
    header: "Inversi\xF3n"
  },
  {
    key: "documentos",
    title: "",
    header: "Documentos"
  },
  {
    key: "datos-bancarios",
    title: "",
    header: "Cotizacion"
  }
];
var _FormApoyosComponent = class _FormApoyosComponent {
  constructor(solicitudApoyoController, utils, router, route) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.utils = utils;
    this.router = router;
    this.route = route;
    this.tabulador = STEPTABS;
    this.id = 0;
    this.actual_page = 0;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      this.id = params["apoyo_id"];
      if (this.id) {
        this.solicitudApoyo = yield this.solicitudApoyoController.find(this.id, ["solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades"]);
        this.modalidadActual = this.solicitudApoyoController.modalidadActual(this.solicitudApoyo);
      }
    }));
  }
  navigate(index) {
    this.router.navigate([this.tabulador[index].key], { relativeTo: this.route });
  }
};
_FormApoyosComponent.\u0275fac = function FormApoyosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormApoyosComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_FormApoyosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormApoyosComponent, selectors: [["app-form-apoyos"]], decls: 7, vars: 4, consts: [[1, "container-fluid", "position-form", "position-relative"], [3, "actual_pageChange", "paginador", "page_selected"], [1, "row", "justify-content-center"], [1, "col-auto", "position-absolute", "bottom-0", "z-3"], [1, "btn", "btn-primary", "shadow", "m-1"], [1, "btn", "btn-danger", "shadow", "m-1", 3, "disabled"], [1, "btn", "btn-primary", "shadow", "m-1", 3, "click"], [1, "btn", "btn-danger", "shadow", "m-1", 3, "click", "disabled"]], template: function FormApoyosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "app-steps-tabs", 1);
    \u0275\u0275listener("actual_pageChange", function FormApoyosComponent_Template_app_steps_tabs_actual_pageChange_1_listener($event) {
      return ctx.navigate($event);
    });
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
    \u0275\u0275conditionalCreate(5, FormApoyosComponent_Conditional_5_Template, 2, 0, "button", 4);
    \u0275\u0275conditionalCreate(6, FormApoyosComponent_Conditional_6_Template, 2, 1, "button", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("paginador", ctx.tabulador)("page_selected", ctx.actual_page);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx.modalidadActual == null ? null : ctx.modalidadActual.estado) == "CAPTURANDO" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.modalidadActual == null ? null : ctx.modalidadActual.estado) != "CAPTURANDO" ? 6 : -1);
  }
}, dependencies: [
  StepsTabsComponent,
  RouterOutlet
], styles: ["\n\n.position-form[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  width: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=form-apoyos.component.css.map */"] });
var FormApoyosComponent = _FormApoyosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormApoyosComponent, [{
    type: Component,
    args: [{ selector: "app-form-apoyos", imports: [
      StepsTabsComponent,
      RouterOutlet
    ], template: `
<div class="container-fluid position-form position-relative">
  <app-steps-tabs [paginador]="tabulador" (actual_pageChange)="navigate($event)" [page_selected]="actual_page">
    <router-outlet></router-outlet>
  </app-steps-tabs>
  <div class="row justify-content-center">
    <div class="col-auto position-absolute bottom-0 z-3">
      @if (modalidadActual?.estado=='CAPTURANDO') {
        <button class="btn btn-primary shadow m-1" (click)="solicitudApoyoController.avanzarEstado(modalidadActual)">
          Marcar Llenado
        </button>
      }
      @if (modalidadActual?.estado!='CAPTURANDO') {
        <button [disabled]="modalidadActual?.estado!=='CAPTURA COMPLETA'" class="btn btn-danger shadow m-1" (click)="solicitudApoyoController.retrocederEstado(modalidadActual)">
          Cancelar Llenado
        </button>
      }
    </div>
  </div>
</div>`, styles: ["/* src/app/main/apoyos/form-apoyos/form-apoyos.component.css */\n.position-form {\n  max-height: 100vh;\n  width: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=form-apoyos.component.css.map */\n"] }]
  }], () => [{ type: SolicitudApoyoService }, { type: UtilsService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormApoyosComponent, { className: "FormApoyosComponent", filePath: "src/app/main/apoyos/form-apoyos/form-apoyos.component.ts", lineNumber: 53 });
})();

export {
  FormApoyosComponent
};
//# sourceMappingURL=chunk-YUICLCWZ.js.map
