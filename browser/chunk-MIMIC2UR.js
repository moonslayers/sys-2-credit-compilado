import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
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
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/creditos/credito-form/credito-form.component.ts
var _CreditoFormComponent = class _CreditoFormComponent {
  constructor(utils, route, creditoController, router) {
    this.utils = utils;
    this.route = route;
    this.creditoController = creditoController;
    this.router = router;
    this.credito_id = 0;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.paramMap.subscribe((params) => __async(this, null, function* () {
        const credito_id = this.utils.intOrNull(this.route.snapshot.paramMap.get("credito_id"));
        if (credito_id && this.credito_id != credito_id) {
          this.credito_id = credito_id;
          this.credito = yield this.creditoController.find(credito_id, ["datosPersonaFisica", "datosPersonasMorales", "productosFinancieros"]);
          const children = this.route.snapshot.firstChild;
          if (children)
            return;
          this.redirect();
        }
      }));
    });
  }
  redirect() {
    return __async(this, null, function* () {
      if (this.credito?.datos_persona_fisica || this.credito?.productos_financieros?.regimen_fiscal == "PERSONA FISICA CON ACTIVIDAD EMPRESARIAL") {
        this.router.navigate(["pf"], { relativeTo: this.route });
      }
      if (this.credito?.datos_personas_morales || this.credito?.productos_financieros?.regimen_fiscal == "PERSONA MORAL") {
        this.router.navigate(["pm"], { relativeTo: this.route });
      }
    });
  }
};
_CreditoFormComponent.\u0275fac = function CreditoFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoFormComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(Router));
};
_CreditoFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditoFormComponent, selectors: [["app-credito-form"]], decls: 6, vars: 3, consts: [[1, "container-fluid", "credito-form", "position-relative"], [1, "row", "justify-content-center"], [1, "col-auto", "position-absolute", "bottom-0", "z-3"], [1, "btn", "shadow", 3, "click"]], template: function CreditoFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "button", 3);
    \u0275\u0275listener("click", function CreditoFormComponent_Template_button_click_4_listener() {
      return ctx.creditoController.marcarLlenado(ctx.credito);
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classMap((ctx.credito == null ? null : ctx.credito.datos_llenos_fecha) ? "btn-primary" : "btn-secondary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx.credito == null ? null : ctx.credito.datos_llenos_fecha) ? "Cancelar Registro Completo" : "Marcar Registro Completado", " ");
  }
}, dependencies: [RouterOutlet], styles: ["\n\n.credito-form[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  width: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=credito-form.component.css.map */"] });
var CreditoFormComponent = _CreditoFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoFormComponent, [{
    type: Component,
    args: [{ selector: "app-credito-form", imports: [
      RouterOutlet
    ], template: `<div class="container-fluid credito-form position-relative">
    <router-outlet></router-outlet>
    <div class="row justify-content-center">
        <div class="col-auto position-absolute bottom-0 z-3">
            <button class="btn shadow" [class]="credito?.datos_llenos_fecha?'btn-primary':'btn-secondary'"
            (click)="creditoController.marcarLlenado(credito)">
                {{credito?.datos_llenos_fecha? 'Cancelar Registro Completo':'Marcar Registro Completado'}}
            </button>
        </div>
    </div>
</div>`, styles: ["/* src/app/main/creditos/credito-form/credito-form.component.css */\n.credito-form {\n  max-height: 100vh;\n  width: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=credito-form.component.css.map */\n"] }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: CreditoService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditoFormComponent, { className: "CreditoFormComponent", filePath: "src/app/main/creditos/credito-form/credito-form.component.ts", lineNumber: 16 });
})();

export {
  CreditoFormComponent
};
//# sourceMappingURL=chunk-MIMIC2UR.js.map
