import {
  DatoPersonalService
} from "./chunk-NB2YUWRE.js";
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
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-XKAAYCNZ.js";
import "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
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

// src/app/clientes/main/cliente-perfil/datos-personales/datos-personales.component.ts
var _c0 = () => ({ required: true });
var FORM_DEF = [
  {
    title: "Datos personales",
    fields: [
      {
        key: "nombre",
        label: "Nombre",
        type: "text"
      },
      {
        key: "apellido_paterno",
        label: "Apellido Paterno",
        type: "text"
      },
      {
        key: "apellido_materno",
        label: "Apellido Materno",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "curp",
        label: "Curp",
        type: "text",
        validator: {
          regex: "^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9][0-9]$",
          maxLength: 18
        }
      },
      {
        key: "genero",
        label: "Genero",
        options: ["HOMBRE", "MUJER", "NO BINARIO", "NO DESCRITO", "OTRO"]
      },
      {
        key: "genero_otro",
        label: "Especifique su genero aqui:",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "fecha_nacimiento",
        label: "Fecha Nacimiento",
        type: "date"
      },
      {
        key: "nacionalidad",
        label: "Nacionalidad",
        options: ["MEXICANA", "EXTRANJERA"],
        validator: {
          required: true
        }
      },
      {
        key: "escolaridad",
        label: "Escolaridad",
        options: ["PRIMARIA", "SECUNDARIA", "PREPARATORIA", "LICENCIATURA", "ESPECIALIDAD", "MAESTRIA", "DOCTORADO", "NO APLICA"],
        defaultValue: "NO APLICA",
        validator: {
          required: false
        }
      },
      {
        key: "estado_nacimiento",
        label: "Estado nacimiento",
        apiUrl: "api/estados",
        keyList: "id",
        keyDetalle: "nombre",
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: false
        }
      },
      {
        key: "email",
        label: "Correo el\xE9ctronico",
        type: "email",
        validator: {
          email: true,
          required: false
        },
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ]
  },
  {
    title: "Datos de Residencia",
    fields: [
      {
        key: "pais_origen",
        label: "Pais origen",
        apiUrl: "api/paises",
        keyList: "id",
        keyDetalle: "nombre",
        style: {
          div: "col-12 col-sm p-3"
        }
      },
      {
        key: "nue",
        label: "NUE",
        type: "text",
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ],
    validator: {
      required: false
    }
  },
  {
    title: "Otros",
    fields: [
      {
        key: "discapacidad",
        label: "Discapacidad",
        apiUrl: "api/tipo_discapacidad",
        keyList: "id",
        keyDetalle: "nombre",
        defaultValue: "No especificado",
        nuevoRedirect: "/catalogos/tipos-discapacidad/nuevo",
        style: {
          div: "col-12 col-sm-6 p-3"
        },
        validator: {
          required: false
        }
      },
      {
        key: "etnia",
        label: "Etnia",
        apiUrl: "api/etnias",
        keyList: "id",
        keyDetalle: "nombre",
        nuevoRedirect: "/catalogos/etnias/nuevo",
        style: {
          div: "col-12 col-sm-6 p-3"
        },
        validator: {
          required: false
        }
      },
      {
        key: "hijos",
        label: "\xBFTiene Hijos?",
        defaultOption: 0,
        options: [{ value: 0, label: "NO" }, { value: 1, label: "SI" }],
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          min: 0,
          required: false
        }
      }
    ]
  },
  {
    title: "Domicilio",
    fields: [
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
        key: "colonia",
        label: "Colonia",
        type: "text"
      },
      {
        key: "localidad",
        label: "Localidad",
        type: "text"
      },
      {
        key: "codigo_postal",
        label: "C\xF3digo Postal",
        type: "text"
      },
      {
        key: "ciudad_id",
        keyList: "id",
        keyDetalle: "nombre",
        label: "Ciudad",
        apiUrl: "api/ciudades",
        extraData: {
          relations: ["estados"],
          conditionals: [
            ["deleted_at", "IS NULL", null]
          ],
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
        key: "referencias_domicilio",
        label: "Referencias Del Domicilio",
        type: "text",
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: false
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
    title: "Datos Legales",
    fields: [
      {
        key: "rfc",
        label: "RFC",
        type: "text",
        validator: {
          maxLength: 13,
          pattern: "^[A-Za-z]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[A-Za-z0-9]{2}([A-Za-z0-9])?$",
          required: false
        }
      },
      {
        key: "identificacion",
        label: "Tipo Identificacion",
        options: [{ label: "INE", value: "INNE" }, "LICENCIA DE MANEJO", "PASAPORTE MEXICANO", "OTRO"]
      },
      {
        key: "identificacion_numero",
        label: "# Identificacion",
        type: "text",
        style: {
          div: "col-12 col-sm p-3"
        }
      }
    ]
  },
  {
    title: "Datos C\xF3nyuge",
    fields: [
      {
        key: "estado_civil",
        label: "Estado Civil",
        options: ["CASADO", "SOLTERO"],
        style: {
          div: "col-12 col-sm-6 p-3"
        }
      },
      {
        key: "regimen_matrimonial",
        label: "Regimen Matrimonial",
        options: [{ value: "BIENES MANCOMUNADOS", label: "SOCIEDAD CONYUGAL" }, "SEPARACION DE BIENES", "NO APLICA", "SOCIEDAD LEGAL", "OTRO"],
        style: {
          div: "col-12 col-sm-6 p-3"
        }
      },
      {
        key: "conyuge_nombre",
        label: "Nombre C\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_direccion",
        label: "Direccion C\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_telefono",
        label: "Telef\xF3no C\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_correo",
        label: "Email C\xF3nyuge",
        type: "email",
        style: {
          div: "col-12 col-sm p-3"
        },
        validator: {
          required: false,
          email: true
        }
      }
    ]
  },
  {
    title: "Numeros Telefonicos",
    apiUrl: "api/telefonos_personales",
    relationKey: "telefonos_personales",
    foreign_key: "datos_personal_id",
    baseFields: [
      {
        key: "tipo",
        label: "Tipo",
        options: ["CASA", "OFICINA", "CELULAR", "OTRO"]
      },
      {
        key: "numero",
        label: "N\xFAmero",
        type: "text"
      }
    ]
  }
];
var FORM_CONDITIONALS = [
  {
    key: "genero",
    operator: "!==",
    value: "OTRO",
    target: "genero_otro",
    targetAction: "disabled"
  },
  {
    key: "regimen_matrimonial",
    operator: "!==",
    value: "BIENES MANCOMUNADOS",
    target: "conyuge_nombre",
    targetAction: "hide"
  },
  {
    key: "regimen_matrimonial",
    operator: "!==",
    value: "BIENES MANCOMUNADOS",
    target: "conyuge_direccion",
    targetAction: "hide"
  },
  {
    key: "regimen_matrimonial",
    operator: "!==",
    value: "BIENES MANCOMUNADOS",
    target: "conyuge_telefono",
    targetAction: "hide"
  },
  {
    key: "regimen_matrimonial",
    operator: "!==",
    value: "BIENES MANCOMUNADOS",
    target: "conyuge_correo",
    targetAction: "hide"
  },
  {
    key: "nacionalidad",
    operator: "!==",
    value: "MEXICANA",
    target: "Datos de Residencia",
    targetAction: "hide"
  },
  {
    key: "nacionalidad",
    operator: "!==",
    value: "MEXICANA",
    target: "estado_nacimiento",
    targetAction: "disabled"
  }
];
var _DatosPersonalesComponent = class _DatosPersonalesComponent {
  constructor(controller, utils, route, router, storage) {
    this.controller = controller;
    this.utils = utils;
    this.route = route;
    this.router = router;
    this.storage = storage;
    this.showTitle = true;
    this.form = this.utils.copyOf(FORM_DEF);
    this.formConditionals = FORM_CONDITIONALS;
    this.editChange = new EventEmitter();
    this.divClass = "container mb-4 bg-white p-3";
  }
  ngOnInit() {
    const login = this.storage.getClienteUser();
    console.log("cliente_id:", login?.id);
    const id = login?.datos_personales_id;
    if (this.edit && this.edit.id == id) {
      return;
    }
    if (id) {
      this.getFormData(id);
    }
  }
  getFormData(id) {
    return __async(this, null, function* () {
      this.edit = yield this.controller.find(id, [
        "telefonosPersonales",
        "ciudades"
      ]);
      console.log(this.edit);
    });
  }
};
_DatosPersonalesComponent.\u0275fac = function DatosPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatosPersonalesComponent)(\u0275\u0275directiveInject(DatoPersonalService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LocalStorageService));
};
_DatosPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatosPersonalesComponent, selectors: [["app-datos-personales-form"]], inputs: { showTitle: "showTitle", form: "form", edit: "edit", divClass: "divClass" }, outputs: { editChange: "editChange" }, decls: 11, vars: 8, consts: [[1, "abonos-container", "shadow-sm", "rounded", "animate__animated", "animate__fadeInRight"], [1, "py-3", "px-4", "bg-light", "rounded-top", "text-center", "border-bottom"], [1, "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "px-4", "text-start"], [1, "h5", "mb-0", "text-primary", "fw-semibold"], [1, "bi", "bi-file-person", "me-2"], [1, "small", "mb-0"], ["rowButtonClass", "row py-3 bg-white sticky-bottom z-2", 3, "editChange", "controller", "form", "conditionals", "edit", "validator"]], template: function DatosPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
    \u0275\u0275element(5, "i", 5);
    \u0275\u0275text(6, "Editar datos personales ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, "Cambia tus datos fiscales para tus creditos.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div")(10, "app-generic-form", 7);
    \u0275\u0275twoWayListener("editChange", function DatosPersonalesComponent_Template_app_generic_form_editChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function DatosPersonalesComponent_Template_app_generic_form_editChange_10_listener() {
      return ctx.editChange.emit(ctx.edit);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275classMap(ctx.divClass);
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.controller)("form", ctx.form)("conditionals", ctx.formConditionals);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(7, _c0));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var DatosPersonalesComponent = _DatosPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatosPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-datos-personales-form", imports: [
      GenericFormComponent
    ], template: '\n<div class="abonos-container shadow-sm rounded animate__animated animate__fadeInRight">\n\n  <div class="py-3 px-4 bg-light rounded-top text-center border-bottom">\n    <div class="d-flex flex-row align-items-center justify-content-between">\n      <div class="px-4 text-start">\n        <h2 class="h5 mb-0 text-primary fw-semibold">\n          <i class="bi bi-file-person me-2"></i>Editar datos personales\n        </h2>\n        <p class="small mb-0">Cambia tus datos fiscales para tus creditos.</p>\n      </div>\n    </div>\n  </div>\n\n  <div [class]="divClass">\n      <app-generic-form\n      [controller]="controller"\n      [form]="form"\n      [conditionals]="formConditionals"\n      [(edit)]="edit"\n      (editChange)="editChange.emit(edit)"\n      rowButtonClass="row py-3 bg-white sticky-bottom z-2"\n      [validator]="{required:true}"\n      />\n  </div>\n\n</div>\n' }]
  }], () => [{ type: DatoPersonalService }, { type: UtilsService }, { type: ActivatedRoute }, { type: Router }, { type: LocalStorageService }], { showTitle: [{
    type: Input
  }], form: [{
    type: Input
  }], edit: [{
    type: Input
  }], editChange: [{
    type: Output
  }], divClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatosPersonalesComponent, { className: "DatosPersonalesComponent", filePath: "src/app/clientes/main/cliente-perfil/datos-personales/datos-personales.component.ts", lineNumber: 428 });
})();
export {
  DatosPersonalesComponent
};
//# sourceMappingURL=chunk-BE2JC7QL.js.map
