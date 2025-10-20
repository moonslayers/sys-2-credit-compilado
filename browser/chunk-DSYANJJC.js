import {
  ModalidadService
} from "./chunk-4MTJ7HMY.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
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
import "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/configuracion/modalidades/list-modalidad/list-modalidad.component.ts
var _ListModalidadComponent = class _ListModalidadComponent {
  constructor(modalidadController) {
    this.modalidadController = modalidadController;
  }
};
_ListModalidadComponent.\u0275fac = function ListModalidadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListModalidadComponent)(\u0275\u0275directiveInject(ModalidadService));
};
_ListModalidadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListModalidadComponent, selectors: [["app-list-modalidad"]], decls: 1, vars: 1, consts: [["title", "Modalidades de Apoyos", 3, "controller"]], template: function ListModalidadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.modalidadController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListModalidadComponent = _ListModalidadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListModalidadComponent, [{
    type: Component,
    args: [{ selector: "app-list-modalidad", imports: [TablaComponent], template: '<app-tabla\ntitle="Modalidades de Apoyos"\n[controller]="modalidadController"\n/>' }]
  }], () => [{ type: ModalidadService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListModalidadComponent, { className: "ListModalidadComponent", filePath: "src/app/configuracion/modalidades/list-modalidad/list-modalidad.component.ts", lineNumber: 11 });
})();

// src/app/configuracion/modalidades/form-modalidad/form-modalidad.component.ts
var FORM_DEF = [
  {
    key: "nombre",
    label: "Nombre de la Modalidad",
    type: "text",
    validator: {
      required: true
    },
    style: {
      div: "col p-3"
    }
  }
];
var _FormModalidadComponent = class _FormModalidadComponent {
  constructor(modalidadController, route, router) {
    this.modalidadController = modalidadController;
    this.route = route;
    this.router = router;
    this.form = FORM_DEF;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      const id = params["modalidad_id"];
      if (id) {
        this.modalidad = yield this.modalidadController.find(id);
      }
    }));
  }
};
_FormModalidadComponent.\u0275fac = function FormModalidadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormModalidadComponent)(\u0275\u0275directiveInject(ModalidadService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_FormModalidadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormModalidadComponent, selectors: [["app-form-modalidad"]], decls: 4, vars: 4, consts: [[1, "container-sm", "bg-white", "rounded", "shadow", "my-1", "p-3"], [1, "text-center", "mb-3"], [3, "editChange", "controller", "edit", "form"]], template: function FormModalidadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 2);
    \u0275\u0275twoWayListener("editChange", function FormModalidadComponent_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.modalidad, $event) || (ctx.modalidad = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function FormModalidadComponent_Template_app_generic_form_editChange_3_listener() {
      return ctx.router.navigate(["/configuracion/modalidades"]);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.modalidad ? "Editar" : "Nueva", " Modalidad");
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.modalidadController);
    \u0275\u0275twoWayProperty("edit", ctx.modalidad);
    \u0275\u0275property("form", ctx.form);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormModalidadComponent = _FormModalidadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModalidadComponent, [{
    type: Component,
    args: [{ selector: "app-form-modalidad", imports: [
      GenericFormComponent
    ], template: `<div class="container-sm bg-white rounded shadow my-1 p-3">
    <h3 class="text-center mb-3">{{modalidad?'Editar':'Nueva'}} Modalidad</h3>
    <app-generic-form [controller]="modalidadController" [(edit)]="modalidad" [form]="form"
    (editChange)="router.navigate(['/configuracion/modalidades'])"
    />
</div>` }]
  }], () => [{ type: ModalidadService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormModalidadComponent, { className: "FormModalidadComponent", filePath: "src/app/configuracion/modalidades/form-modalidad/form-modalidad.component.ts", lineNumber: 29 });
})();

// src/app/configuracion/modalidades/modalidades.routes.ts
var modalidadesRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListModalidadComponent },
  { path: "nuevo", component: FormModalidadComponent },
  { path: "editar/:modalidad_id", component: FormModalidadComponent }
];
export {
  modalidadesRoutes
};
//# sourceMappingURL=chunk-DSYANJJC.js.map
