import {
  DatosFiscalesService
} from "./chunk-NH64EC6C.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import "./chunk-NXIA6ZMF.js";
import "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import {
  FormsModule
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
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
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/clientes/main/cliente-perfil/datos-fiscales/datos-fiscales.component.ts
var _c0 = () => ({ required: true });
var REGIMEN_FISCAL_OPTIONS = [
  { "value": "601", "label": "601-General de Ley Personas Morales" },
  { "value": "603", "label": "603-Personas Morales con Fines no Lucrativos" },
  { "value": "605", "label": "605-Sueldos y Salarios e Ingresos Asimilados a Salarios" },
  { "value": "606", "label": "606-Arrendamiento" },
  { "value": "608", "label": "608-Dem\xE1s ingresos" },
  { "value": "609", "label": "609-Consolidaci\xF3n" },
  { "value": "610", "label": "610-Residentes en el Extranjero sin Establecimiento Permanente en M\xE9xico" },
  { "value": "611", "label": "611-Ingresos por Dividendos (socios y accionistas)" },
  { "value": "612", "label": "612-Personas F\xEDsicas con Actividades Empresariales y Profesionales" },
  { "value": "614", "label": "614-Ingresos por intereses" },
  { "value": "616", "label": "616-Sin obligaciones fiscales" },
  { "value": "620", "label": "620-Sociedades Cooperativas de Producci\xF3n que optan por diferir sus ingresos" },
  { "value": "621", "label": "621-Incorporaci\xF3n Fiscal" },
  { "value": "622", "label": "622-Actividades Agr\xEDcolas, Ganaderas, Silv\xEDcolas y Pesqueras" },
  { "value": "623", "label": "623-Opcional para Grupos de Sociedades" },
  { "value": "624", "label": "624-Coordinados" },
  { "value": "628", "label": "628-Hidrocarburos" },
  { "value": "607", "label": "607-R\xE9gimen de Enajenaci\xF3n o Adquisici\xF3n de Bienes" },
  { "value": "629", "label": "629-De los Reg\xEDmenes Fiscales Preferentes y de las Empresas Multinacionales" },
  { "value": "630", "label": "630-Enajenaci\xF3n de acciones en bolsa de valores" },
  { "value": "615", "label": "615-R\xE9gimen de los ingresos por obtenci\xF3n de premios" },
  { "value": "625", "label": "625-R\xE9gimen de las Actividades Empresariales con ingresos a trav\xE9s de Plataformas Tecnol\xF3gicas" },
  { "value": "626", "label": "626-R\xE9gimen Simplificado de Confianza" }
];
var FORM_DEF = [
  {
    title: "Datos Fiscales",
    fields: [
      { key: "rfc", label: "RFC:", type: "text" },
      {
        key: "regimen_fiscal_sat",
        label: "R\xE9gimen Fiscal:",
        defaultOption: 0,
        options: REGIMEN_FISCAL_OPTIONS
      },
      { key: "codigo_postal", label: "C\xF3digo Postal:", type: "number" },
      { key: "primer_nombre", label: "Nombre/Raz\xF3n Social:", type: "text" },
      { key: "primer_apellido", label: "Apellido Paterno:", type: "text", validator: { required: false } },
      { key: "segundo_apellido", label: "Apellido Materno:", type: "text", validator: { required: false } },
      { key: "calle", label: "Calle", type: "text", defaultValue: "", validator: { required: false } },
      { key: "colonia", label: "Colonia", type: "text", defaultValue: "", validator: { required: false } },
      { key: "municipio", label: "Municipio", type: "text", defaultValue: "", validator: { required: false } },
      { key: "estado", label: "Estado", type: "text", defaultValue: "BAJA CALIFORNIA", validator: { required: false } }
    ]
  }
];
var FORM_CONDITIONAL = [
  // {
  //   key: 'regimen_fiscal_sat',
  //   operator: '==',
  //   value: '612',
  //   target: 'primer_apellido',
  //   targetAction: 'hide',
  // }
];
var _DatosFiscalesComponent = class _DatosFiscalesComponent {
  constructor(controller, storage) {
    this.controller = controller;
    this.storage = storage;
    this.show = false;
    this.showChange = new EventEmitter();
    this.datoFiscalChange = new EventEmitter();
    this.saved = new EventEmitter();
    this.form = FORM_DEF;
    this.formConditionals = FORM_CONDITIONAL;
    console.info("FormDatosFiscalesComponent");
    const user = this.storage.getClienteUser();
    if (user) {
      this.getDatosFiscales(user.datos_fiscal_id);
    }
  }
  ngOnInit() {
  }
  getDatosFiscales(id) {
    return __async(this, null, function* () {
      this.datoFiscal = yield this.controller.find(id);
    });
  }
};
_DatosFiscalesComponent.\u0275fac = function DatosFiscalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatosFiscalesComponent)(\u0275\u0275directiveInject(DatosFiscalesService), \u0275\u0275directiveInject(LocalStorageService));
};
_DatosFiscalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatosFiscalesComponent, selectors: [["app-datos-fiscales"]], inputs: { show: "show" }, outputs: { showChange: "showChange", datoFiscalChange: "datoFiscalChange", saved: "saved" }, decls: 11, vars: 7, consts: [[1, "abonos-container", "shadow-sm", "rounded", "animate__animated", "animate__fadeInRight"], [1, "py-3", "px-4", "bg-light", "rounded-top", "text-center", "border-bottom"], [1, "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "px-4", "text-start"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-file-person", "me-2"], [1, "small", "mb-0"], [1, "p-3", "bg-white"], ["rowButtonClass", "row py-3 bg-white sticky-bottom z-2", 3, "editChange", "controller", "form", "isolatedForm", "conditionals", "edit", "validator"]], template: function DatosFiscalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
    \u0275\u0275element(5, "i", 5);
    \u0275\u0275text(6, "Editar datos fiscales ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, "Cambia tus datos fiscales para tus creditos.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "app-generic-form", 8);
    \u0275\u0275twoWayListener("editChange", function DatosFiscalesComponent_Template_app_generic_form_editChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.datoFiscal, $event) || (ctx.datoFiscal = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function DatosFiscalesComponent_Template_app_generic_form_editChange_10_listener($event) {
      return ctx.datoFiscalChange.emit($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("controller", ctx.controller)("form", ctx.form)("isolatedForm", true)("conditionals", ctx.formConditionals);
    \u0275\u0275twoWayProperty("edit", ctx.datoFiscal);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(6, _c0));
  }
}, dependencies: [
  FormsModule,
  GenericFormComponent
], encapsulation: 2 });
var DatosFiscalesComponent = _DatosFiscalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatosFiscalesComponent, [{
    type: Component,
    args: [{ selector: "app-datos-fiscales", imports: [
      FormsModule,
      GenericFormComponent
    ], template: '<div class="abonos-container shadow-sm rounded animate__animated animate__fadeInRight">\n  <div class="py-3 px-4 bg-light rounded-top text-center border-bottom">\n    <div class="d-flex flex-row align-items-center justify-content-between">\n      <div class="px-4 text-start">\n        <h2 class="h5 mb-0 text-primary fw-semibold">\n          <i class="bi bi-file-person me-2"></i>Editar datos fiscales\n        </h2>\n        <p class="small mb-0">Cambia tus datos fiscales para tus creditos.</p>\n      </div>\n    </div>\n  </div>\n  <div class=" p-3 bg-white">\n    <app-generic-form\n      [controller]="controller"\n      [form]="form"\n      [isolatedForm]="true"\n      [conditionals]="formConditionals"\n      [(edit)]="datoFiscal"\n      (editChange)="datoFiscalChange.emit($event)"\n      rowButtonClass="row py-3 bg-white sticky-bottom z-2"\n      [validator]="{ required: true }"\n    ></app-generic-form>\n  </div>\n</div>\n' }]
  }], () => [{ type: DatosFiscalesService }, { type: LocalStorageService }], { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], datoFiscalChange: [{
    type: Output
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatosFiscalesComponent, { className: "DatosFiscalesComponent", filePath: "src/app/clientes/main/cliente-perfil/datos-fiscales/datos-fiscales.component.ts", lineNumber: 80 });
})();
export {
  DatosFiscalesComponent
};
//# sourceMappingURL=chunk-3ZCEWCSO.js.map
