import {
  VerificacionCreditoService
} from "./chunk-QEZJJX3N.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  ActivatedRoute
} from "./chunk-XKAAYCNZ.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/creditos/verificaciones-creditos/form-verificaciones-credito/form-verificaciones-credito.component.ts
var _c0 = () => ({ required: true });
var _c1 = (a0) => ({ credito_id: a0 });
var FORM_DEF = [
  {
    title: "Datos de Verificacion",
    fields: [
      {
        key: "concepto",
        label: "Concepto",
        options: ["DATOS PERSONALES PF", "NEGOCIO PF", "NEGOCIO PM", "REPRESENTANTE LEGAL PM", "ACCIONISTAS PM", "ACTA CONSTITUTIVA PM", "AVAL", "REFERENCIAS PERSOALES/SOCIOS"]
      },
      {
        key: "revision_datos_ingresados",
        label: "Revision de Datos Ingresados",
        options: ["SI", "NO", "NO APLICA"]
      },
      {
        key: "llamada_telefonica",
        label: "Llamada Telef\xF3nica",
        options: ["SI", "NO", "NO APLICA"]
      },
      {
        key: "visita_domicilio",
        label: "\xBFSe visit\xF3 el domicilio?",
        options: ["SI", "NO", "NO APLICA"],
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ]
  },
  {
    key: "foto_domicilio",
    fileKey: "document",
    label: "Foto Domicilio",
    foreign_key: "id",
    apiUrl: "api/files/verificacion/domicilio/foto/save",
    accept: ".png, .jpeg, .jpg",
    showDownload: true
  },
  {
    title: "Ubicacion de la visita",
    key: "mapField",
    latitud: {
      key: "latitud_domicilio"
    },
    longitud: {
      key: "longitud_domicilio"
    },
    hidden: true
  },
  {
    title: "Reportes de verificacion",
    apiUrl: "api/reportes_creditos_verificaciones",
    foreign_key: "verificacion_credito_id",
    baseFields: [
      {
        key: "tipo",
        label: "Tipo de Reporte",
        options: ["DOMICILIO NO ENCONTRADO", "DATOS INCORRECTOS", "TELEFONO NO VALIDO", "OTRO"],
        style: {
          div: "col-12 col-sm-6 p-1"
        }
      },
      {
        key: "estado",
        label: "Estado",
        options: ["PENDIENTE", "SOLUCIONADO"],
        style: {
          div: "col-12 col-sm-6 p-1"
        }
      },
      {
        key: "nota",
        label: "Notas:",
        type: "text",
        style: {
          div: "col-12 col-sm p-1"
        }
      }
    ]
  }
];
var _FormVerificacionesCreditoComponent = class _FormVerificacionesCreditoComponent {
  constructor(utils, route, verificacionCreditoController, creditoController) {
    this.utils = utils;
    this.route = route;
    this.verificacionCreditoController = verificacionCreditoController;
    this.creditoController = creditoController;
    this.form = FORM_DEF;
    this.divClass = "container p-3 rounded bg-light shadow my-1";
    this.conditionals = [
      {
        key: "visita_domicilio",
        operator: "!==",
        value: "NO APLICA",
        target: "mapField",
        targetAction: "unhide"
      }
    ];
    this.readonly = false;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("verificacion_id"));
      if (id) {
        this.verificacionCredito = yield this.verificacionCreditoController.find(id);
        if (this.verificacionCredito) {
          this.credito = yield this.creditoController.find(this.verificacionCredito.credito_id);
        }
      }
    }));
    this.readonly = !!this.route.snapshot.queryParamMap.get("readonly");
  }
};
_FormVerificacionesCreditoComponent.\u0275fac = function FormVerificacionesCreditoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormVerificacionesCreditoComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(VerificacionCreditoService), \u0275\u0275directiveInject(CreditoService));
};
_FormVerificacionesCreditoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormVerificacionesCreditoComponent, selectors: [["app-form-verificaciones-credito"]], inputs: { divClass: "divClass", verificacionCredito: "verificacionCredito" }, decls: 4, vars: 12, consts: [[1, "fw-bold", "pb-3"], [3, "editChange", "form", "controller", "edit", "validator", "conditionals", "formExtra"]], template: function FormVerificacionesCreditoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3", 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 1);
    \u0275\u0275twoWayListener("editChange", function FormVerificacionesCreditoComponent_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.verificacionCredito, $event) || (ctx.verificacionCredito = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.divClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.verificacionCredito ? "Editar" : "Nueva", " Verificaci\xF3n de Cr\xE9dito");
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx.form)("controller", ctx.verificacionCreditoController);
    \u0275\u0275twoWayProperty("edit", ctx.verificacionCredito);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(9, _c0))("conditionals", ctx.conditionals)("formExtra", \u0275\u0275pureFunction1(10, _c1, ctx.credito == null ? null : ctx.credito.id));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormVerificacionesCreditoComponent = _FormVerificacionesCreditoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormVerificacionesCreditoComponent, [{
    type: Component,
    args: [{ selector: "app-form-verificaciones-credito", imports: [GenericFormComponent], template: `<div [class]="divClass">
    <h3 class="fw-bold pb-3">{{verificacionCredito?'Editar':'Nueva'}} Verificaci\xF3n de Cr\xE9dito</h3>
    <app-generic-form 
    [form]="form"
    [controller]="verificacionCreditoController"
    [(edit)]="verificacionCredito"
    [validator]="{required:true}"
    [conditionals]="conditionals"
    [formExtra]="{credito_id:this.credito?.id}"
    />
</div>` }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: VerificacionCreditoService }, { type: CreditoService }], { divClass: [{
    type: Input
  }], verificacionCredito: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormVerificacionesCreditoComponent, { className: "FormVerificacionesCreditoComponent", filePath: "src/app/main/creditos/verificaciones-creditos/form-verificaciones-credito/form-verificaciones-credito.component.ts", lineNumber: 100 });
})();

export {
  FormVerificacionesCreditoComponent
};
//# sourceMappingURL=chunk-N2JP6I57.js.map
