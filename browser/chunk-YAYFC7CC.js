import {
  FormVerificacionesCreditoComponent
} from "./chunk-N2JP6I57.js";
import {
  VerificacionCreditoService
} from "./chunk-QEZJJX3N.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import "./chunk-I7RPY2ZE.js";
import "./chunk-NXIA6ZMF.js";
import "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute
} from "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/creditos/verificaciones-creditos/list-verificaciones-credito/list-verificaciones-credito.component.ts
var _c0 = (a0) => ({ key: "credito_id", operator: "=", value: a0 });
var _c1 = (a0) => [a0];
function ListVerificacionesCreditoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "Verificaciones de Cr\xE9dito:" + ctx_r0.credito.id)("controller", ctx_r0.verificacionesCreditoController)("tableDefinition", ctx_r0.tabla)("getConditionals", \u0275\u0275pureFunction1(6, _c1, \u0275\u0275pureFunction1(4, _c0, ctx_r0.credito.id)));
  }
}
var TABLA_DEF = {
  emptyMsg: "No hay verificaciones disponibles para este credito",
  columns: ["concepto", "revision_datos_ingresados", "visita_domicilio", "llamada_telefonica", ""]
};
var _ListVerificacionesCreditoComponent = class _ListVerificacionesCreditoComponent {
  constructor(creditoController, route, utils, verificacionesCreditoController) {
    this.creditoController = creditoController;
    this.route = route;
    this.utils = utils;
    this.verificacionesCreditoController = verificacionesCreditoController;
    this.tabla = TABLA_DEF;
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
_ListVerificacionesCreditoComponent.\u0275fac = function ListVerificacionesCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListVerificacionesCreditoComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(VerificacionCreditoService));
};
_ListVerificacionesCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListVerificacionesCreditoComponent, selectors: [["app-list-verificaciones-credito"]], decls: 1, vars: 1, consts: [[3, "title", "controller", "tableDefinition", "getConditionals"]], template: function ListVerificacionesCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ListVerificacionesCreditoComponent_Conditional_0_Template, 1, 8, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListVerificacionesCreditoComponent = _ListVerificacionesCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListVerificacionesCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-list-verificaciones-credito", imports: [
      TablaComponent
    ], template: `@if (credito) {
  <app-tabla
    [title]="'Verificaciones de Cr\xE9dito:'+credito.id"
    [controller]="verificacionesCreditoController"
    [tableDefinition]="tabla"
[getConditionals]="[{key:'credito_id',operator:'=',value:credito.id}]"
/>
}` }]
  }], () => [{ type: CreditoService }, { type: ActivatedRoute }, { type: UtilsService }, { type: VerificacionCreditoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListVerificacionesCreditoComponent, { className: "ListVerificacionesCreditoComponent", filePath: "src/app/main/creditos/verificaciones-creditos/list-verificaciones-credito/list-verificaciones-credito.component.ts", lineNumber: 24 });
})();

// src/app/main/creditos/verificaciones-creditos/verificaciones.creditos.routes.ts
var verificacionesCreditosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListVerificacionesCreditoComponent },
  { path: "nuevo", component: FormVerificacionesCreditoComponent },
  { path: "editar/:verificacion_id", component: FormVerificacionesCreditoComponent }
];
export {
  verificacionesCreditosRoutes
};
//# sourceMappingURL=chunk-YAYFC7CC.js.map
