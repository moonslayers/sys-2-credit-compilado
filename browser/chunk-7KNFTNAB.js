import {
  ModalidadService
} from "./chunk-4MTJ7HMY.js";
import {
  DocumentoService
} from "./chunk-P2FPDMMY.js";
import {
  ModalidadMinistracionDocumentoService,
  ModalidadMinistracionService
} from "./chunk-YUT24PTQ.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import "./chunk-I7RPY2ZE.js";
import {
  FormGroupComponent
} from "./chunk-NXIA6ZMF.js";
import {
  ButtonComponent,
  FormFieldComponent
} from "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import {
  SuperService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/programa.apoyo.service.ts
var _ProgramaApoyoService = class _ProgramaApoyoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "programas_apoyos";
    this.columns = [
      "nombre",
      "alias",
      "vigencia",
      "usuario_id"
    ];
  }
};
_ProgramaApoyoService.\u0275fac = function ProgramaApoyoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProgramaApoyoService)(\u0275\u0275inject(Injector));
};
_ProgramaApoyoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProgramaApoyoService, factory: _ProgramaApoyoService.\u0275fac, providedIn: "any" });
var ProgramaApoyoService = _ProgramaApoyoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramaApoyoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/configuracion/programa-apoyos/list-programa-apoyos/list-programa-apoyos.component.ts
var _ListProgramaApoyosComponent = class _ListProgramaApoyosComponent {
  constructor(programaApoyoController) {
    this.programaApoyoController = programaApoyoController;
  }
};
_ListProgramaApoyosComponent.\u0275fac = function ListProgramaApoyosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListProgramaApoyosComponent)(\u0275\u0275directiveInject(ProgramaApoyoService));
};
_ListProgramaApoyosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListProgramaApoyosComponent, selectors: [["app-list-programa-apoyos"]], decls: 1, vars: 1, consts: [["title", "Programas de Apoyos", 3, "controller"]], template: function ListProgramaApoyosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.programaApoyoController);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListProgramaApoyosComponent = _ListProgramaApoyosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListProgramaApoyosComponent, [{
    type: Component,
    args: [{ selector: "app-list-programa-apoyos", imports: [TablaComponent], template: '<app-tabla\ntitle="Programas de Apoyos"\n[controller]="programaApoyoController"\n/>' }]
  }], () => [{ type: ProgramaApoyoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListProgramaApoyosComponent, { className: "ListProgramaApoyosComponent", filePath: "src/app/configuracion/programa-apoyos/list-programa-apoyos/list-programa-apoyos.component.ts", lineNumber: 11 });
})();

// src/app/shared/generic-form/form-field/form-field-service.service.ts
var _FormFieldService = class _FormFieldService {
  constructor() {
  }
  resetValues(fields) {
    if (Array.isArray(fields)) {
      fields.forEach((field) => {
        field.value = void 0;
      });
      return;
    }
    fields.value = void 0;
  }
  setValues(fields, data) {
    if (Array.isArray(fields)) {
      fields.forEach((field) => {
        field.value = data[field.key];
      });
      return;
    }
    fields.value = data[fields.key];
  }
  setModelValues(fields, data) {
    if (!data)
      return;
    if (Array.isArray(fields)) {
      fields.forEach((field) => {
        if (data[field.key] !== void 0) {
          data[field.key] = field.value;
        }
      });
      return;
    }
    data[fields.key] = fields.value;
  }
};
_FormFieldService.\u0275fac = function FormFieldService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormFieldService)();
};
_FormFieldService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormFieldService, factory: _FormFieldService.\u0275fac, providedIn: "root" });
var FormFieldService = _FormFieldService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/configuracion/programa-apoyos/form-programa-apoyos/modalidad-ministracion-documento/modalidad-ministracion-documento.component.ts
function ModalidadMinistracionDocumentoComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-form-field", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("field", field_r1);
  }
}
function ModalidadMinistracionDocumentoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ModalidadMinistracionDocumentoComponent_Conditional_2_For_1_Template, 2, 1, "div", 7, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.fields);
  }
}
function ModalidadMinistracionDocumentoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.documento.documentos == null ? null : ctx_r1.documento.documentos.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.documento.prioridad, " ");
  }
}
function ModalidadMinistracionDocumentoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ModalidadMinistracionDocumentoComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit = true);
    });
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
}
function ModalidadMinistracionDocumentoComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
}
function ModalidadMinistracionDocumentoComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ModalidadMinistracionDocumentoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ModalidadMinistracionDocumentoComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275conditionalCreate(1, ModalidadMinistracionDocumentoComponent_Conditional_6_Conditional_1_Template, 1, 0, "span", 5);
    \u0275\u0275conditionalCreate(2, ModalidadMinistracionDocumentoComponent_Conditional_6_Conditional_2_Template, 1, 0, "i", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLoading ? 2 : -1);
  }
}
function ModalidadMinistracionDocumentoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
}
function ModalidadMinistracionDocumentoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 6);
  }
}
var FORM_FIELDS = [
  {
    apiUrl: "api/documentos",
    placeholder: "Nombre de documento...",
    keyList: "id",
    keyDetalle: "nombre",
    key: "documento_id"
  },
  {
    key: "prioridad",
    options: ["OBLIGATORIO", "OPCIONAL"]
  }
];
var _ModalidadMinistracionDocumentoComponent = class _ModalidadMinistracionDocumentoComponent {
  constructor(modalidadMinistracionDocumentoController, formFieldService, documentoController) {
    this.modalidadMinistracionDocumentoController = modalidadMinistracionDocumentoController;
    this.formFieldService = formFieldService;
    this.documentoController = documentoController;
    this.onDelete = new EventEmitter();
    this.fields = FORM_FIELDS;
    this.edit = false;
    this.isLoading = false;
    this.isDeleting = false;
  }
  ngOnInit() {
    if (!this.documento.id)
      this.edit = true;
    this.formFieldService.setValues(this.fields, this.documento);
  }
  save() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.formFieldService.setModelValues(this.fields, this.documento);
      const res = yield this.modalidadMinistracionDocumentoController.createOrUpdate(this.documento);
      if (res) {
        this.documento.id = res.id;
        this.documento.documentos = yield this.documentoController.find(this.documento.documento_id, [], false);
        this.isLoading = false;
        this.edit = false;
      }
    });
  }
  delete() {
    return __async(this, null, function* () {
      this.isDeleting = true;
      if (this.documento.id) {
        const res = yield this.modalidadMinistracionDocumentoController.switch(this.documento);
        if (res) {
          this.onDelete.emit();
        }
        this.isDeleting = false;
        return;
      }
      this.onDelete.emit();
    });
  }
};
_ModalidadMinistracionDocumentoComponent.\u0275fac = function ModalidadMinistracionDocumentoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalidadMinistracionDocumentoComponent)(\u0275\u0275directiveInject(ModalidadMinistracionDocumentoService), \u0275\u0275directiveInject(FormFieldService), \u0275\u0275directiveInject(DocumentoService));
};
_ModalidadMinistracionDocumentoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalidadMinistracionDocumentoComponent, selectors: [["app-modalidad-ministracion-documento"]], inputs: { documento: "documento" }, outputs: { onDelete: "onDelete" }, decls: 10, vars: 6, consts: [[1, "container-fluid", "border", "rounded"], [1, "row"], [1, "col-12", "col-sm", "p-3", "text-nowrap", "align-self-center", "text-end"], [1, "btn", "btn-primary", "mx-1"], [1, "btn", "btn-danger", "mx-1", 3, "click"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-trash-fill"], [1, "col-12", "col-sm", "p-3"], [3, "field"], [1, "btn", "btn-primary", "mx-1", 3, "click"], [1, "bi", "bi-pencil-fill"], [1, "bi", "bi-floppy-fill"]], template: function ModalidadMinistracionDocumentoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ModalidadMinistracionDocumentoComponent_Conditional_2_Template, 2, 0);
    \u0275\u0275conditionalCreate(3, ModalidadMinistracionDocumentoComponent_Conditional_3_Template, 4, 2);
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275conditionalCreate(5, ModalidadMinistracionDocumentoComponent_Conditional_5_Template, 2, 0, "button", 3);
    \u0275\u0275conditionalCreate(6, ModalidadMinistracionDocumentoComponent_Conditional_6_Template, 3, 2, "button", 3);
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function ModalidadMinistracionDocumentoComponent_Template_button_click_7_listener() {
      return ctx.delete();
    });
    \u0275\u0275conditionalCreate(8, ModalidadMinistracionDocumentoComponent_Conditional_8_Template, 1, 0, "span", 5);
    \u0275\u0275conditionalCreate(9, ModalidadMinistracionDocumentoComponent_Conditional_9_Template, 1, 0, "i", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.edit ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.edit ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.edit ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isDeleting ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isDeleting ? 9 : -1);
  }
}, dependencies: [FormFieldComponent], encapsulation: 2 });
var ModalidadMinistracionDocumentoComponent = _ModalidadMinistracionDocumentoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalidadMinistracionDocumentoComponent, [{
    type: Component,
    args: [{ selector: "app-modalidad-ministracion-documento", imports: [
      FormFieldComponent
    ], template: '<div class="container-fluid border rounded">\n  <div class="row">\n    @if (edit) {\n      @for (field of fields; track field) {\n        <div class="col-12 col-sm p-3">\n          <app-form-field [field]="field" />\n        </div>\n      }\n    }\n    @if (!edit) {\n      <div class="col-12 col-sm p-3">\n        {{documento.documentos?.nombre}}\n      </div>\n      <div class="col-12 col-sm p-3">\n        {{documento.prioridad}}\n      </div>\n    }\n    <div class="col-12 col-sm p-3 text-nowrap align-self-center text-end">\n      @if (!edit) {\n        <button class="btn btn-primary mx-1" (click)="edit=true">\n          <i class="bi bi-pencil-fill"></i>\n        </button>\n      }\n      @if (edit) {\n        <button class="btn btn-primary mx-1" (click)="save()">\n          @if (isLoading) {\n            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>\n          }\n          @if (!isLoading) {\n            <i class="bi bi-floppy-fill"></i>\n          }\n        </button>\n      }\n      <button class="btn btn-danger mx-1" (click)="delete()">\n        @if (isDeleting) {\n          <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>\n        }\n        @if (!isDeleting) {\n          <i class="bi bi-trash-fill"></i>\n        }\n      </button>\n    </div>\n  </div>\n</div>' }]
  }], () => [{ type: ModalidadMinistracionDocumentoService }, { type: FormFieldService }, { type: DocumentoService }], { documento: [{
    type: Input
  }], onDelete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalidadMinistracionDocumentoComponent, { className: "ModalidadMinistracionDocumentoComponent", filePath: "src/app/configuracion/programa-apoyos/form-programa-apoyos/modalidad-ministracion-documento/modalidad-ministracion-documento.component.ts", lineNumber: 31 });
})();

// src/app/configuracion/programa-apoyos/form-programa-apoyos/modalidad-ministracion/modalidad-ministracion.component.ts
function ModalidadMinistracionComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-form-field", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275classMap((field_r1.style == null ? null : field_r1.style.div) ?? "col-12 col-sm p-3");
    \u0275\u0275advance();
    \u0275\u0275property("field", field_r1);
  }
}
function ModalidadMinistracionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ModalidadMinistracionComponent_Conditional_2_For_1_Template, 2, 3, "div", 13, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.fields);
  }
}
function ModalidadMinistracionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.modalidad.monto_maximo), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.modalidad.modalidades == null ? null : ctx_r1.modalidad.modalidades.nombre, " ");
  }
}
function ModalidadMinistracionComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 16);
    \u0275\u0275listener("clickButtonEvent", function ModalidadMinistracionComponent_Conditional_10_Template_app_button_clickButtonEvent_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.agregarDocumento());
    });
    \u0275\u0275elementEnd();
  }
}
function ModalidadMinistracionComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ModalidadMinistracionComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit = true);
    });
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementEnd();
  }
}
function ModalidadMinistracionComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function ModalidadMinistracionComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 19);
  }
}
function ModalidadMinistracionComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ModalidadMinistracionComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275conditionalCreate(1, ModalidadMinistracionComponent_Conditional_12_Conditional_1_Template, 1, 0, "span", 10);
    \u0275\u0275conditionalCreate(2, ModalidadMinistracionComponent_Conditional_12_Conditional_2_Template, 1, 0, "i", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isLoading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isLoading ? 2 : -1);
  }
}
function ModalidadMinistracionComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function ModalidadMinistracionComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function ModalidadMinistracionComponent_Conditional_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-modalidad-ministracion-documento", 23);
    \u0275\u0275listener("onDelete", function ModalidadMinistracionComponent_Conditional_16_For_10_Template_app_modalidad_ministracion_documento_onDelete_0_listener() {
      const documento_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.localDelete(documento_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const documento_r7 = ctx.$implicit;
    \u0275\u0275property("documento", documento_r7);
  }
}
function ModalidadMinistracionComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 20)(2, "div", 21)(3, "b");
    \u0275\u0275text(4, "Documento");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "b");
    \u0275\u0275text(7, "Prioridad");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, ModalidadMinistracionComponent_Conditional_16_For_10_Template, 1, 1, "app-modalidad-ministracion-documento", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.documentos);
  }
}
var FORM_FIELDS2 = [
  {
    key: "monto_maximo",
    type: "number",
    placeholder: "Monto m\xE1ximo permitido",
    validator: {
      min: 0,
      required: true
    }
  },
  {
    key: "modalidad_id",
    apiUrl: "api/modalidades",
    keyList: "id",
    keyDetalle: "nombre",
    validator: {
      required: true
    }
  }
];
var _ModalidadMinistracionComponent = class _ModalidadMinistracionComponent {
  constructor(modalidadMinistracionController, modalidadController, formFieldService) {
    this.modalidadMinistracionController = modalidadMinistracionController;
    this.modalidadController = modalidadController;
    this.formFieldService = formFieldService;
    this.programa_apoyo_id = 0;
    this.onDelete = new EventEmitter();
    this.documentos = [];
    this.fields = FORM_FIELDS2;
    this.showDetalles = false;
    this.edit = false;
    this.isLoading = false;
    this.isDeleting = false;
  }
  ngOnInit() {
    if (this.modalidad.id === 0)
      this.edit = true;
    this.formFieldService.setValues(this.fields, this.modalidad);
    this.documentos = this.modalidad.modalidades_ministraciones_documentos ?? [];
  }
  agregarDocumento() {
    this.documentos.push({
      documento_id: 0,
      modalidades_ministracion_id: this.modalidad.id,
      prioridad: "OBLIGATORIO",
      usuario_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
    this.showDetalles = true;
  }
  save() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.formFieldService.setModelValues(this.fields, this.modalidad);
      const res = yield this.modalidadMinistracionController.createOrUpdate(this.modalidad);
      if (res) {
        this.modalidad.id = res.id;
        this.modalidad.modalidades = yield this.modalidadController.find(this.modalidad.modalidad_id);
        this.isLoading = false;
        this.edit = false;
      }
    });
  }
  delete() {
    return __async(this, null, function* () {
      this.isDeleting = true;
      if (this.modalidad.id) {
        const res = yield this.modalidadMinistracionController.switch(this.modalidad.id);
        if (res) {
          this.onDelete.emit();
        }
        this.isDeleting = false;
        return;
      }
      this.onDelete.emit();
    });
  }
  localDelete(documento) {
    this.documentos.splice(this.documentos.indexOf(documento), 1);
  }
};
_ModalidadMinistracionComponent.\u0275fac = function ModalidadMinistracionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalidadMinistracionComponent)(\u0275\u0275directiveInject(ModalidadMinistracionService), \u0275\u0275directiveInject(ModalidadService), \u0275\u0275directiveInject(FormFieldService));
};
_ModalidadMinistracionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalidadMinistracionComponent, selectors: [["app-modalidad-ministracion"]], inputs: { modalidad: "modalidad", programa_apoyo_id: "programa_apoyo_id" }, outputs: { onDelete: "onDelete" }, decls: 17, vars: 9, consts: [[1, "container-fluid", "mx-2", "border", "rounded"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-auto", "p-3", "text-center", "fw-bold"], [1, "col-12", "col-sm-6", "col-md", "p-3", "align-self-center", "text-end"], [1, "hstack"], [1, "btn", "btn-secondary", "ms-auto", "me-1", 3, "click"], [1, "bi", "bi-list-ul"], ["title", "Agregar documento", "defaultIconClass", "bi bi-file-earmark-plus-fill", "defaultButtonClass", "btn btn-secondary mx-1"], [1, "btn", "btn-primary", "mx-1"], [1, "btn", "btn-danger", "mx-1", 3, "click"], ["aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-trash-fill"], [1, "container-fluid", "rounded", "border", "my-1"], [3, "class"], [3, "field"], [1, "col-12", "col-sm", "p-3"], ["title", "Agregar documento", "defaultIconClass", "bi bi-file-earmark-plus-fill", "defaultButtonClass", "btn btn-secondary mx-1", 3, "clickButtonEvent"], [1, "btn", "btn-primary", "mx-1", 3, "click"], [1, "bi", "bi-pencil-fill"], [1, "bi", "bi-floppy-fill"], [1, "row", "mb-2", "mx-2"], [1, "col-12", "col-sm", "p-2"], [3, "documento"], [3, "onDelete", "documento"]], template: function ModalidadMinistracionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ModalidadMinistracionComponent_Conditional_2_Template, 2, 0);
    \u0275\u0275conditionalCreate(3, ModalidadMinistracionComponent_Conditional_3_Template, 5, 4);
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "button", 5);
    \u0275\u0275listener("click", function ModalidadMinistracionComponent_Template_button_click_8_listener() {
      return ctx.showDetalles = !ctx.showDetalles;
    });
    \u0275\u0275element(9, "i", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ModalidadMinistracionComponent_Conditional_10_Template, 1, 0, "app-button", 7);
    \u0275\u0275conditionalCreate(11, ModalidadMinistracionComponent_Conditional_11_Template, 2, 0, "button", 8);
    \u0275\u0275conditionalCreate(12, ModalidadMinistracionComponent_Conditional_12_Template, 3, 2, "button", 8);
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function ModalidadMinistracionComponent_Template_button_click_13_listener() {
      return ctx.delete();
    });
    \u0275\u0275conditionalCreate(14, ModalidadMinistracionComponent_Conditional_14_Template, 1, 0, "span", 10);
    \u0275\u0275conditionalCreate(15, ModalidadMinistracionComponent_Conditional_15_Template, 1, 0, "i", 11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(16, ModalidadMinistracionComponent_Conditional_16_Template, 11, 0, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.edit ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.edit ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.documentos.length, " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.modalidad.id ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.edit ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.isDeleting ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.isDeleting ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showDetalles ? 16 : -1);
  }
}, dependencies: [
  FormFieldComponent,
  ButtonComponent,
  CurrencyPipe,
  ModalidadMinistracionDocumentoComponent
], encapsulation: 2 });
var ModalidadMinistracionComponent = _ModalidadMinistracionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalidadMinistracionComponent, [{
    type: Component,
    args: [{ selector: "app-modalidad-ministracion", imports: [
      FormFieldComponent,
      ButtonComponent,
      CurrencyPipe,
      ModalidadMinistracionDocumentoComponent
    ], template: `<div class="container-fluid mx-2 border rounded">
  <div class="row">
    @if (edit) {
      @for (field of fields; track field) {
        <div [class]="field.style?.div??'col-12 col-sm p-3'">
          <app-form-field [field]="field" />
        </div>
      }
    }
    @if (!edit) {
      <div class="col-12 col-sm p-3">
        {{modalidad.monto_maximo|currency}}
      </div>
      <div class="col-12 col-sm p-3">
        {{modalidad.modalidades?.nombre}}
      </div>
    }
    <div class="col-12 col-sm-6 col-md-auto p-3 text-center fw-bold">
      {{documentos.length}}
    </div>
    <div class="col-12 col-sm-6 col-md p-3 align-self-center text-end">
      <div class="hstack">
        <button class="btn btn-secondary ms-auto me-1" (click)="showDetalles=!showDetalles">
          <i class="bi bi-list-ul"></i>
        </button>
        @if (modalidad.id) {
          <app-button title="Agregar documento" defaultIconClass="bi bi-file-earmark-plus-fill" defaultButtonClass="btn btn-secondary mx-1" (clickButtonEvent)="agregarDocumento()" />
        }
        @if (!edit) {
          <button class="btn btn-primary mx-1" (click)="edit=true">
            <i class="bi bi-pencil-fill"></i>
          </button>
        }
        @if (edit) {
          <button class="btn btn-primary mx-1" (click)="save()">
            @if (isLoading) {
              <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            }
            @if (!isLoading) {
              <i class="bi bi-floppy-fill"></i>
            }
          </button>
        }
        <button class="btn btn-danger mx-1" (click)="delete()">
          @if (isDeleting) {
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
          }
          @if (!isDeleting) {
            <i class="bi bi-trash-fill"></i>
          }
        </button>
      </div>
    </div>
  </div>
  @if (showDetalles) {
    <div class="container-fluid rounded border my-1">
      <div class="row mb-2 mx-2">
        <div class="col-12 col-sm p-2">
          <b>Documento</b>
        </div>
        <div class="col-12 col-sm p-2">
          <b>Prioridad</b>
        </div>
        <div class="col-12 col-sm p-2"></div>
      </div>
      @for (documento of documentos; track documento) {
        <app-modalidad-ministracion-documento [documento]="documento" (onDelete)="localDelete(documento)"/>
      }
    </div>
  }
</div>` }]
  }], () => [{ type: ModalidadMinistracionService }, { type: ModalidadService }, { type: FormFieldService }], { modalidad: [{
    type: Input
  }], programa_apoyo_id: [{
    type: Input
  }], onDelete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalidadMinistracionComponent, { className: "ModalidadMinistracionComponent", filePath: "src/app/configuracion/programa-apoyos/form-programa-apoyos/modalidad-ministracion/modalidad-ministracion.component.ts", lineNumber: 44 });
})();

// src/app/configuracion/programa-apoyos/form-programa-apoyos/form-programa-apoyos.component.ts
function FormProgramaApoyosComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-form-field", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("field", field_r1);
  }
}
function FormProgramaApoyosComponent_Conditional_10_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-modalidad-ministracion", 16);
    \u0275\u0275listener("onDelete", function FormProgramaApoyosComponent_Conditional_10_For_13_Template_app_modalidad_ministracion_onDelete_0_listener() {
      const modalidad_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.localDelete(modalidad_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const modalidad_r5 = ctx.$implicit;
    \u0275\u0275property("modalidad", modalidad_r5);
  }
}
function FormProgramaApoyosComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form-group", 10);
    \u0275\u0275listener("buttonEvent", function FormProgramaApoyosComponent_Conditional_10_Template_form_group_buttonEvent_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.agregarModalidad());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "b");
    \u0275\u0275text(4, "Monto M\xE1ximo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12)(6, "b");
    \u0275\u0275text(7, "Modalidad");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "b");
    \u0275\u0275text(10, "#Documentos");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, FormProgramaApoyosComponent_Conditional_10_For_13_Template, 1, 1, "app-modalidad-ministracion", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("showAddButton", true);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(ctx_r2.modalidadesMinistraciones);
  }
}
var FORM_DATA = [
  {
    title: "Datos Del Apoyo",
    fields: [
      {
        label: "Nombre",
        key: "nombre",
        type: "text"
      },
      {
        label: "Alias",
        key: "alias",
        type: "text"
      },
      {
        label: "Vigencia",
        key: "vigencia",
        type: "date"
      }
    ]
  }
];
var FORM_FIELDS3 = [
  {
    label: "Nombre",
    key: "nombre",
    type: "text"
  },
  {
    label: "Alias",
    key: "alias",
    type: "text"
  },
  {
    label: "Vigencia",
    key: "vigencia",
    type: "date"
  }
];
var _FormProgramaApoyosComponent = class _FormProgramaApoyosComponent {
  constructor(controller, route, formFieldService) {
    this.controller = controller;
    this.route = route;
    this.formFieldService = formFieldService;
    this.form = FORM_DATA;
    this.fields = FORM_FIELDS3;
    this.modalidadesMinistraciones = [];
  }
  ngOnInit() {
    this.formFieldService.resetValues(this.fields);
    this.checkIdParam();
  }
  save() {
    return __async(this, null, function* () {
      if (!this.edit) {
        this.edit = {
          nombre: "",
          alias: "",
          vigencia: "",
          id: 0,
          deleted_at: null,
          created_at: "",
          updated_at: null
        };
      }
      this.formFieldService.setModelValues(this.fields, this.edit);
      this.edit = yield this.controller.createOrUpdate(this.edit);
    });
  }
  agregarModalidad() {
    this.modalidadesMinistraciones.push({
      programas_apoyo_id: this.edit.id,
      monto_maximo: 0,
      modalidad_id: 1,
      usuario_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
  }
  copyOf(value) {
    return JSON.parse(JSON.stringify(value));
  }
  checkIdParam() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      if (params.get("id") && !isNaN(parseInt(params.get("id") ?? ""))) {
        const id = parseInt(params.get("id"));
        if (this.edit && this.edit.id == id) {
          return;
        }
        this.edit = yield this.controller.find(id, ["modalidadesMinistraciones.modalidadesMinistracionesDocumentos.documentos", "modalidadesMinistraciones.modalidades"], true);
        this.modalidadesMinistraciones = this.edit?.modalidades_ministraciones ?? [];
        this.formFieldService.setValues(this.fields, this.edit);
        console.log(this.edit);
      }
    }));
  }
  localDelete(modalidad) {
    this.modalidadesMinistraciones.splice(this.modalidadesMinistraciones.indexOf(modalidad), 1);
  }
};
_FormProgramaApoyosComponent.\u0275fac = function FormProgramaApoyosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormProgramaApoyosComponent)(\u0275\u0275directiveInject(ProgramaApoyoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FormFieldService));
};
_FormProgramaApoyosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormProgramaApoyosComponent, selectors: [["app-form-programa-apoyos"]], decls: 11, vars: 2, consts: [[1, "container-xl", "p-3", "my-2", "border", "rounded", "shadow", "bg-white"], [1, "text-center", "m-3"], ["title", "Datos Del Apoyo"], [1, "row", "px-3", "py-2", "mb-3"], [1, "col-12", "col-sm"], [1, "col-12", "col-sm-auto", "text-center", "align-self-end", "p-1"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-floppy-fill"], ["title", "Modalidades", "addButtonStyle", "btn btn-success", "addButtonIcon", "bi bi-plus-circle-fill", 3, "showAddButton"], [3, "field"], ["title", "Modalidades", "addButtonStyle", "btn btn-success", "addButtonIcon", "bi bi-plus-circle-fill", 3, "buttonEvent", "showAddButton"], [1, "row", "mb-2", "mx-3"], [1, "col-12", "col-sm", "p-2"], [1, "col-12", "col-sm-6", "col-md-auto", "p-2", "text-center"], [1, "col-12", "col-sm-6", "col-md", "p-2"], [3, "modalidad"], [3, "onDelete", "modalidad"]], template: function FormProgramaApoyosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form-group", 2)(4, "div", 3);
    \u0275\u0275repeaterCreate(5, FormProgramaApoyosComponent_For_6_Template, 2, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function FormProgramaApoyosComponent_Template_button_click_8_listener() {
      return ctx.save();
    });
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(10, FormProgramaApoyosComponent_Conditional_10_Template, 14, 1, "form-group", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nuevo", " Programa de Apoyo");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.fields);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.edit ? 10 : -1);
  }
}, dependencies: [
  FormGroupComponent,
  ModalidadMinistracionComponent,
  FormFieldComponent
], encapsulation: 2 });
var FormProgramaApoyosComponent = _FormProgramaApoyosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormProgramaApoyosComponent, [{
    type: Component,
    args: [{ selector: "app-form-programa-apoyos", imports: [
      FormGroupComponent,
      ModalidadMinistracionComponent,
      FormFieldComponent
    ], template: `<div class="container-xl p-3 my-2 border rounded shadow bg-white">
  <h4 class="text-center m-3">{{this.edit?'Editar':'Nuevo'}} Programa de Apoyo</h4>
  <form-group title="Datos Del Apoyo" >
    <div class="row px-3 py-2 mb-3">
      @for (field of fields; track field) {
        <div class="col-12 col-sm">
          <app-form-field [field]="field" />
        </div>
      }
      <div class="col-12 col-sm-auto text-center align-self-end p-1">
        <button class="btn btn-primary" (click)="save()">
          <i class="bi bi-floppy-fill"></i>
        </button>
      </div>
    </div>
  </form-group>
  @if (edit) {
    <form-group title="Modalidades" [showAddButton]="true" addButtonStyle="btn btn-success" addButtonIcon="bi bi-plus-circle-fill" (buttonEvent)="agregarModalidad()">
      <div class="row mb-2 mx-3">
        <div class="col-12 col-sm p-2">
          <b>Monto M\xE1ximo</b>
        </div>
        <div class="col-12 col-sm p-2">
          <b>Modalidad</b>
        </div>
        <div class="col-12 col-sm-6 col-md-auto p-2 text-center">
          <b>#Documentos</b>
        </div>
        <div class="col-12 col-sm-6 col-md p-2"></div>
      </div>
      @for (modalidad of modalidadesMinistraciones; track modalidad) {
        <app-modalidad-ministracion [modalidad]="modalidad" (onDelete)="localDelete(modalidad)" />
      }
    </form-group>
  }
</div>
` }]
  }], () => [{ type: ProgramaApoyoService }, { type: ActivatedRoute }, { type: FormFieldService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormProgramaApoyosComponent, { className: "FormProgramaApoyosComponent", filePath: "src/app/configuracion/programa-apoyos/form-programa-apoyos/form-programa-apoyos.component.ts", lineNumber: 64 });
})();

// src/app/configuracion/programa-apoyos/apoyos.routes.ts
var apoyosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListProgramaApoyosComponent },
  { path: "editar/:id", component: FormProgramaApoyosComponent },
  { path: "nuevo", component: FormProgramaApoyosComponent }
];
export {
  apoyosRoutes
};
//# sourceMappingURL=chunk-7KNFTNAB.js.map
