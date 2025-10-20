import {
  NegocioService
} from "./chunk-6OVOAIST.js";
import {
  DatoPersonaFisicaService
} from "./chunk-ZEGUFUIC.js";
import {
  GenericFormComponent
} from "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import "./chunk-NXIA6ZMF.js";
import "./chunk-5BMNPTRZ.js";
import {
  FieldTypesService
} from "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import "./chunk-FVPW6XXI.js";
import "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import "./chunk-XKAAYCNZ.js";
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/clientes/main/cliente-perfil/datos-negocio/datos-negocio.component.ts
var FORM_DEF = [
  {
    title: "Datos Generales",
    fields: [
      {
        key: "tipo_empresa",
        label: "Tipo de Empresa",
        options: ["INDUSTRIA", "AGROINDUSTRIA", "COMERCIO", "SERVICIOS", "NO DEFINIDO"]
      },
      {
        key: "nombre",
        label: "Nombre Comercial",
        type: "text"
      },
      {
        key: "calle",
        label: "Calle",
        type: "text"
      },
      {
        key: "no_exterior",
        label: "No. exterior",
        type: "text"
      },
      {
        key: "no_interior",
        label: "No. Interior",
        type: "text",
        defaultValue: "",
        validator: {
          required: false
        }
      },
      {
        key: "localidad",
        label: "Localidad",
        type: "text"
      },
      {
        key: "codigo_postal",
        label: "Codigo Postal",
        type: "number",
        validator: {
          min: 0
        }
      },
      {
        key: "colonia",
        label: "Colonia",
        type: "text"
      },
      {
        key: "ciudad_id",
        keyList: "id",
        keyDetalle: "nombre",
        label: "Ciudad",
        apiUrl: "api/ciudades",
        extraData: {
          busqueda_avanzada: JSON.stringify([
            {
              relation: "estados",
              conditionals: [
                ["nombre", "=", "BAJA CALIFORNIA"],
                ["nombre", "=", "baja california"]
              ],
              andConditionals: []
            }
          ])
        }
      },
      {
        key: "resumen_actividad_empresarial",
        type: "text",
        label: "Resumen Actividad Empresarial",
        validator: {
          required: true
        },
        style: {
          div: "col-12 col-sm p-3"
        }
      },
      {
        key: "referencia_domicilio",
        type: "text",
        label: "Referencias Domicilio",
        validator: {
          required: false
        },
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ]
  },
  {
    title: "Domicilio en el Mapa",
    key: "mapField",
    latitud: {
      key: "latitud"
    },
    longitud: {
      key: "longitud"
    }
  },
  {
    title: "Datos de Empleos",
    fields: [
      {
        key: "empleos_informales_mujeres",
        label: "Empleos Informales Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_informales_hombres",
        label: "Empleos Informales Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_informales_no_binarios",
        label: "Empleos Informales No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_mujeres",
        label: "Empleos IMSS Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_hombres",
        label: "Empleos IMSS Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_imss_no_binarios",
        label: "Empleos IMSS No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_mujeres",
        label: "Empleos a generar Mujeres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_hombres",
        label: "Empleos a generar Hombres",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      },
      {
        key: "empleos_a_generar_no_binarios",
        label: "Empleos a generar No Binarios",
        defaultValue: 0,
        validator: {
          min: 0
        },
        type: "number"
      }
    ]
  },
  {
    title: "Datos Otros",
    fields: [
      {
        key: "inicio_operaciones",
        label: "Fecha Inicio Operaciones",
        type: "date",
        validator: { required: false }
      },
      {
        key: "fuente_informacion",
        label: "\xBFD\xF3nde te enteraste del Cr\xE9dito?",
        options: ["JORNADA", "OFICINA", "PROSPECCION", "REDES SOCIALES", "CAMARAS"],
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: true
        }
      },
      {
        key: "detalle_camara",
        label: "Siglas Camara",
        type: "text",
        validator: { required: false }
      }
    ]
  },
  {
    title: "Actividades Economicas",
    apiUrl: "api/negocios_actividades_economicas",
    relationKey: "negocios_actividades_economicas",
    foreign_key: "negocio_id",
    baseFields: [
      {
        key: "actividades_economica_id",
        apiUrl: "api/actividades_economicas",
        keyList: "id",
        keyDetalle: "subgrupo",
        label: "Actividad",
        function: (actividad) => {
          return actividad.clave + " - " + actividad.subgrupo.toUpperCase();
        }
      }
    ]
  }
];
var FORM_CONDITIONALS = [
  {
    key: "fuente_informacion",
    operator: "!=",
    value: "CAMARAS",
    target: "detalle_camara",
    targetAction: "hide"
  }
];
var _DatosNegocioComponent = class _DatosNegocioComponent {
  constructor(datoPersonaFisicaController, negocioController, fieldTypes, storage) {
    this.datoPersonaFisicaController = datoPersonaFisicaController;
    this.negocioController = negocioController;
    this.fieldTypes = fieldTypes;
    this.storage = storage;
    this.form = FORM_DEF;
    this.formValidator = {
      required: true
    };
    this.formConditionals = FORM_CONDITIONALS;
    this.showCreate = false;
  }
  ngOnInit() {
    const login = this.storage.getClienteUser();
    console.log("user", login);
    if (login) {
      this.setNegocio(login.negocio_id);
    }
  }
  setNegocio(id) {
    return __async(this, null, function* () {
      if (typeof id == "number") {
        this.negocio = yield this.negocioController.find(id, [
          "negociosActividadesEconomicas",
          "negociosDiasLaborables"
        ], true);
        return;
      }
      this.negocio = void 0;
    });
  }
  updateDatoPersonaFisica() {
    return __async(this, null, function* () {
      if (this.datoPersonaFisica && this.negocio && !this.datoPersonaFisica.negocio_id) {
        this.datoPersonaFisica.negocio_id = this.negocio.id;
        this.datoPersonaFisicaController.update(this.datoPersonaFisica.id, this.datoPersonaFisica);
      }
    });
  }
  test(value) {
    console.log(value);
  }
  checkValues(data) {
    const isDisabled = data.local_tipo === "PROPIO";
    const keysToUpdate = ["local_renta_mensual", "local_contrato_inicio", "local_contrato_fin"];
    this.form.forEach((field) => {
      if (this.fieldTypes.isFormGroup(field)) {
        field.fields.forEach((innerField) => {
          if (this.fieldTypes.isFormField(innerField) && keysToUpdate.includes(innerField.key)) {
            this.updateField(innerField, isDisabled);
          }
        });
      }
    });
  }
  updateField(innerField, isDisabled) {
    innerField.validator = __spreadProps(__spreadValues({}, innerField.validator), {
      disabled: isDisabled
    });
    if (innerField.key === "local_renta_mensual" && isDisabled) {
      innerField.value = 0;
    }
  }
};
_DatosNegocioComponent.\u0275fac = function DatosNegocioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatosNegocioComponent)(\u0275\u0275directiveInject(DatoPersonaFisicaService), \u0275\u0275directiveInject(NegocioService), \u0275\u0275directiveInject(FieldTypesService), \u0275\u0275directiveInject(LocalStorageService));
};
_DatosNegocioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatosNegocioComponent, selectors: [["app-datos-negocio"]], decls: 11, vars: 6, consts: [[1, "abonos-container", "shadow-sm", "rounded", "animate__animated", "animate__fadeInRight"], [1, "py-3", "px-4", "bg-light", "rounded-top", "text-center", "border-bottom"], [1, "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "px-4", "text-start"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-file-person", "me-2"], [1, "small", "mb-0"], [1, "p-3", "bg-white"], ["rowButtonClass", "row pt-3 pb-0 bg-white sticky-bottom z-2", 3, "formChange", "valuesChange", "editChange", "form", "isolatedForm", "conditionals", "controller", "edit", "validator"]], template: function DatosNegocioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
    \u0275\u0275element(5, "i", 5);
    \u0275\u0275text(6, "Editar datos del negocio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, "Cambia tus datos fiscales para tus creditos.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "app-generic-form", 8);
    \u0275\u0275twoWayListener("formChange", function DatosNegocioComponent_Template_app_generic_form_formChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.form, $event) || (ctx.form = $event);
      return $event;
    });
    \u0275\u0275listener("valuesChange", function DatosNegocioComponent_Template_app_generic_form_valuesChange_10_listener($event) {
      return ctx.checkValues($event);
    });
    \u0275\u0275twoWayListener("editChange", function DatosNegocioComponent_Template_app_generic_form_editChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.negocio, $event) || (ctx.negocio = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function DatosNegocioComponent_Template_app_generic_form_editChange_10_listener() {
      return ctx.updateDatoPersonaFisica();
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("form", ctx.form);
    \u0275\u0275property("isolatedForm", true)("conditionals", ctx.formConditionals)("controller", ctx.negocioController);
    \u0275\u0275twoWayProperty("edit", ctx.negocio);
    \u0275\u0275property("validator", ctx.formValidator);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var DatosNegocioComponent = _DatosNegocioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatosNegocioComponent, [{
    type: Component,
    args: [{ selector: "app-datos-negocio", imports: [GenericFormComponent], template: '\n<div class="abonos-container shadow-sm rounded animate__animated animate__fadeInRight">\n  <div class="py-3 px-4 bg-light rounded-top text-center border-bottom">\n    <div class="d-flex flex-row align-items-center justify-content-between">\n      <div class="px-4 text-start">\n        <h2 class="h5 mb-0 text-primary fw-semibold">\n          <i class="bi bi-file-person me-2"></i>Editar datos del negocio\n        </h2>\n        <p class="small mb-0">Cambia tus datos fiscales para tus creditos.</p>\n      </div>\n    </div>\n  </div>\n  <div class=" p-3 bg-white">\n    <app-generic-form\n      [(form)]="form"\n      [isolatedForm]="true"\n      (valuesChange)="checkValues($event)"\n      [conditionals]="formConditionals"\n      [controller]="negocioController"\n      [(edit)]="negocio"\n      (editChange)="updateDatoPersonaFisica()"\n      [validator]="formValidator"\n      rowButtonClass="row pt-3 pb-0 bg-white sticky-bottom z-2"\n    ></app-generic-form>\n  </div>\n</div>\n' }]
  }], () => [{ type: DatoPersonaFisicaService }, { type: NegocioService }, { type: FieldTypesService }, { type: LocalStorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatosNegocioComponent, { className: "DatosNegocioComponent", filePath: "src/app/clientes/main/cliente-perfil/datos-negocio/datos-negocio.component.ts", lineNumber: 271 });
})();
export {
  DatosNegocioComponent
};
//# sourceMappingURL=chunk-T4IMHEZS.js.map
