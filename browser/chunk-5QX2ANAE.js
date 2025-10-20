import {
  ReferenciaPersonalService
} from "./chunk-HO3B6X3R.js";
import {
  DatoPersonalService
} from "./chunk-NB2YUWRE.js";
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
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import "./chunk-TBFW4U4H.js";
import "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/catalogos/datos-personales/datos-personales.component.ts
var _DatosPersonalesComponent = class _DatosPersonalesComponent {
};
_DatosPersonalesComponent.\u0275fac = function DatosPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatosPersonalesComponent)();
};
_DatosPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatosPersonalesComponent, selectors: [["app-datos-personales"]], decls: 1, vars: 0, template: function DatosPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var DatosPersonalesComponent = _DatosPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatosPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-datos-personales", imports: [
      RouterOutlet
    ], template: "<router-outlet />" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatosPersonalesComponent, { className: "DatosPersonalesComponent", filePath: "src/app/catalogos/datos-personales/datos-personales.component.ts", lineNumber: 12 });
})();

// src/app/catalogos/datos-personales/datos-personales-tabla/datos-personales-tabla.component.ts
var _c0 = () => ["usuarios"];
var TABLA_DEF = {
  columns: [
    "curp",
    "nombre",
    "apellido_paterno",
    "apellido_materno",
    "created_at"
  ]
};
var AGREGAR_BUTTON = {
  text: "Nuevo registro",
  style: {
    icon: "bi bi-plus-circle-fill ms-1",
    button: "btn btn btn-secondary shadow text-bold scale-05"
  }
};
var _DatosPersonalesTablaComponent = class _DatosPersonalesTablaComponent {
  constructor(controller, router, route) {
    this.controller = controller;
    this.router = router;
    this.route = route;
    this.tabla = TABLA_DEF;
    this.agregarButton = AGREGAR_BUTTON;
  }
};
_DatosPersonalesTablaComponent.\u0275fac = function DatosPersonalesTablaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatosPersonalesTablaComponent)(\u0275\u0275directiveInject(DatoPersonalService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_DatosPersonalesTablaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatosPersonalesTablaComponent, selectors: [["app-datos-personales-tabla"]], decls: 1, vars: 5, consts: [["title", "Datos Personales de Clientes", 3, "controller", "relations", "tableDefinition", "agregarButton"]], template: function DatosPersonalesTablaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.controller)("relations", \u0275\u0275pureFunction0(4, _c0))("tableDefinition", ctx.tabla)("agregarButton", ctx.agregarButton);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var DatosPersonalesTablaComponent = _DatosPersonalesTablaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatosPersonalesTablaComponent, [{
    type: Component,
    args: [{ selector: "app-datos-personales-tabla", imports: [
      TablaComponent
    ], template: `<app-tabla 
    title="Datos Personales de Clientes"
    [controller]="controller"
    [relations]="['usuarios']"
    [tableDefinition]="tabla"
    [agregarButton]="agregarButton"
/>` }]
  }], () => [{ type: DatoPersonalService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatosPersonalesTablaComponent, { className: "DatosPersonalesTablaComponent", filePath: "src/app/catalogos/datos-personales/datos-personales-tabla/datos-personales-tabla.component.ts", lineNumber: 32 });
})();

// src/app/catalogos/datos-personales/datos-personales-form/datos-personales-form.component.ts
var _c02 = () => ({ required: true });
function DatosPersonalesFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.edit ? "Editar" : "Nuevo", " registro de Datos Personales");
  }
}
var FORM_DEF_DATOS_PERSONALES = [
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
        label: "CURP",
        type: "text",
        validator: {
          regex: "^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9][0-9]$",
          maxLength: 18
        }
      },
      {
        key: "genero",
        label: "G\xE9nero",
        options: ["HOMBRE", "MUJER", "NO BINARIO", "NO DESCRITO", "OTRO"]
      },
      {
        key: "genero_otro",
        label: "Especifique su g\xE9nero aqu\xED:",
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
        label: "Pa\xEDs origen",
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
        label: "\xBFTiene hijos?",
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
        label: "No. interior",
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
        label: "Referencias del domicilio",
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
        label: "Tipo identificaci\xF3n",
        options: [{ label: "INE", value: "INNE" }, "LICENCIA DE MANEJO", "PASAPORTE MEXICANO", "OTRO"]
      },
      {
        key: "identificacion_numero",
        label: "# Identificaci\xF3n",
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
        label: "Estado civil",
        options: ["CASADO", "SOLTERO"],
        style: {
          div: "col-12 col-sm-6 p-3"
        }
      },
      {
        key: "regimen_matrimonial",
        label: "R\xE9gimen Matrimonial",
        options: [{ value: "BIENES MANCOMUNADOS", label: "SOCIEDAD CONYUGAL" }, "SEPARACION DE BIENES", "NO APLICA", "SOCIEDAD LEGAL", "OTRO"],
        style: {
          div: "col-12 col-sm-6 p-3"
        }
      },
      {
        key: "conyuge_nombre",
        label: "Nombre c\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_direccion",
        label: "Direcci\xF3n c\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_telefono",
        label: "Telef\xF3no c\xF3nyuge",
        type: "text",
        validator: {
          required: false
        }
      },
      {
        key: "conyuge_correo",
        label: "Email c\xF3nyuge",
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
    title: "Numeros telef\xF3nicos",
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
var _DatosPersonalesFormComponent = class _DatosPersonalesFormComponent {
  constructor(controller, utils, route, router) {
    this.controller = controller;
    this.utils = utils;
    this.route = route;
    this.router = router;
    this.showTitle = true;
    this.form = this.utils.copyOf(FORM_DEF_DATOS_PERSONALES);
    this.formConditionals = FORM_CONDITIONALS;
    this.editChange = new EventEmitter();
    this.divClass = "container rounded shadow bg-white my-1 p-3";
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("id"));
      if (this.edit && this.edit.id == id) {
        return;
      }
      if (id) {
        this.edit = yield this.controller.find(id, [
          "telefonosPersonales"
        ]);
      }
    }));
  }
  updateUrl() {
    if (!this.edit?.id)
      return;
    this.router.navigate(["/catalogos/datos-personales/editar", this.edit?.id]);
  }
};
_DatosPersonalesFormComponent.\u0275fac = function DatosPersonalesFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DatosPersonalesFormComponent)(\u0275\u0275directiveInject(DatoPersonalService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_DatosPersonalesFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatosPersonalesFormComponent, selectors: [["app-datos-personales-form"]], inputs: { showTitle: "showTitle", form: "form", edit: "edit", divClass: "divClass" }, outputs: { editChange: "editChange" }, decls: 3, vars: 9, consts: [[1, "text-center", "my-3"], ["rowButtonClass", "row py-3 bg-white sticky-bottom z-2", 3, "editChange", "controller", "form", "conditionals", "edit", "validator"]], template: function DatosPersonalesFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, DatosPersonalesFormComponent_Conditional_1_Template, 2, 1, "h3", 0);
    \u0275\u0275elementStart(2, "app-generic-form", 1);
    \u0275\u0275twoWayListener("editChange", function DatosPersonalesFormComponent_Template_app_generic_form_editChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("editChange", function DatosPersonalesFormComponent_Template_app_generic_form_editChange_2_listener() {
      return ctx.updateUrl();
    })("editChange", function DatosPersonalesFormComponent_Template_app_generic_form_editChange_2_listener() {
      return ctx.editChange.emit(ctx.edit);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.divClass);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showTitle ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.controller)("form", ctx.form)("conditionals", ctx.formConditionals);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("validator", \u0275\u0275pureFunction0(8, _c02));
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var DatosPersonalesFormComponent = _DatosPersonalesFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatosPersonalesFormComponent, [{
    type: Component,
    args: [{ selector: "app-datos-personales-form", imports: [
      GenericFormComponent
    ], template: `
<div [class]="divClass">
  @if (showTitle) {
    <h3 class="text-center my-3">{{edit?'Editar':'Nuevo'}} registro de Datos Personales</h3>
  }
  <app-generic-form
    [controller]="controller"
    [form]="form"
    [conditionals]="formConditionals"
    [(edit)]="edit"
    (editChange)="updateUrl()"
    (editChange)="editChange.emit(edit)"
    rowButtonClass="row py-3 bg-white sticky-bottom z-2"
    [validator]="{required:true}"
    />
</div>` }]
  }], () => [{ type: DatoPersonalService }, { type: UtilsService }, { type: ActivatedRoute }, { type: Router }], { showTitle: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatosPersonalesFormComponent, { className: "DatosPersonalesFormComponent", filePath: "src/app/catalogos/datos-personales/datos-personales-form/datos-personales-form.component.ts", lineNumber: 426 });
})();

// src/app/catalogos/datos-personales/datos.personales.routes.ts
var datosPersonalesRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: DatosPersonalesTablaComponent },
  { path: "nuevo", component: DatosPersonalesFormComponent },
  { path: "editar/:id", component: DatosPersonalesFormComponent }
];

// src/app/catalogos/referencias-personales/referencias-personales.component.ts
var _ReferenciasPersonalesComponent = class _ReferenciasPersonalesComponent {
};
_ReferenciasPersonalesComponent.\u0275fac = function ReferenciasPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferenciasPersonalesComponent)();
};
_ReferenciasPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReferenciasPersonalesComponent, selectors: [["app-referencias-personales"]], decls: 1, vars: 0, template: function ReferenciasPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [RouterOutlet], encapsulation: 2 });
var ReferenciasPersonalesComponent = _ReferenciasPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferenciasPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-referencias-personales", imports: [
      RouterOutlet
    ], template: "<router-outlet />" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReferenciasPersonalesComponent, { className: "ReferenciasPersonalesComponent", filePath: "src/app/catalogos/referencias-personales/referencias-personales.component.ts", lineNumber: 12 });
})();

// src/app/catalogos/referencias-personales/list-referencias-personales/list-referencias-personales.component.ts
var _c03 = () => ["usuarios"];
var TABLA_DEF2 = {
  columns: [
    {
      key: "nombre",
      header: "Nombre"
    },
    {
      key: "parentezco",
      header: "Parentezco"
    },
    {
      key: "usuarios",
      subKey: "nombre",
      header: "Creado por"
    },
    {
      key: "created_at",
      header: "Creado en",
      pipe: "date"
    }
  ]
};
var _ListReferenciasPersonalesComponent = class _ListReferenciasPersonalesComponent {
  constructor(referenciaPersonalController) {
    this.referenciaPersonalController = referenciaPersonalController;
    this.tabla = TABLA_DEF2;
  }
};
_ListReferenciasPersonalesComponent.\u0275fac = function ListReferenciasPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListReferenciasPersonalesComponent)(\u0275\u0275directiveInject(ReferenciaPersonalService));
};
_ListReferenciasPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListReferenciasPersonalesComponent, selectors: [["app-list-referencias-personales"]], decls: 1, vars: 4, consts: [[3, "controller", "tableDefinition", "relations"]], template: function ListReferenciasPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.referenciaPersonalController)("tableDefinition", ctx.tabla)("relations", \u0275\u0275pureFunction0(3, _c03));
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListReferenciasPersonalesComponent = _ListReferenciasPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListReferenciasPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-list-referencias-personales", imports: [
      TablaComponent
    ], template: `<app-tabla
[controller]="referenciaPersonalController"
[tableDefinition]="tabla"
[relations]="['usuarios']"
/>` }]
  }], () => [{ type: ReferenciaPersonalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListReferenciasPersonalesComponent, { className: "ListReferenciasPersonalesComponent", filePath: "src/app/catalogos/referencias-personales/list-referencias-personales/list-referencias-personales.component.ts", lineNumber: 36 });
})();

// src/app/catalogos/referencias-personales/form-referencias-personales/form-referencias-personales.component.ts
var REFERENCIA_PERSONAL_FORM = [
  {
    key: "nombre",
    label: "Nombre",
    type: "text"
  },
  {
    key: "parentezco",
    label: "Parentesco",
    apiUrl: "api/parentesco",
    keyList: "id",
    keyDetalle: "nombre",
    nuevoRedirect: "/catalogos/parentescos/nuevo"
  },
  {
    key: "telefono",
    label: "Telefono",
    type: "text"
  },
  {
    key: "domicilio",
    label: "Domicilio",
    style: {
      div: "col-12 col-sm p-3"
    },
    type: "text"
  }
];
var _FormReferenciasPersonalesComponent = class _FormReferenciasPersonalesComponent {
  constructor(referenciaPersonalController, route, utils) {
    this.referenciaPersonalController = referenciaPersonalController;
    this.route = route;
    this.utils = utils;
    this.form = REFERENCIA_PERSONAL_FORM;
    this.editChange = new EventEmitter();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("id"));
      if (id) {
        this.edit = yield this.referenciaPersonalController.find(id);
      }
    }));
  }
};
_FormReferenciasPersonalesComponent.\u0275fac = function FormReferenciasPersonalesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormReferenciasPersonalesComponent)(\u0275\u0275directiveInject(ReferenciaPersonalService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_FormReferenciasPersonalesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormReferenciasPersonalesComponent, selectors: [["app-form-referencias-personales"]], inputs: { edit: "edit" }, outputs: { editChange: "editChange" }, decls: 4, vars: 4, consts: [[1, "container", "rounded", "shadow", "bg-light", "my-2", "p-3"], [1, "text-center", "fw-bold", "mb-2"], [3, "editChange", "controller", "form", "edit"]], template: function FormReferenciasPersonalesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-generic-form", 2);
    \u0275\u0275twoWayListener("editChange", function FormReferenciasPersonalesComponent_Template_app_generic_form_editChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nueva", " Referencia Personal");
    \u0275\u0275advance();
    \u0275\u0275property("controller", ctx.referenciaPersonalController)("form", ctx.form);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
  }
}, dependencies: [GenericFormComponent], encapsulation: 2 });
var FormReferenciasPersonalesComponent = _FormReferenciasPersonalesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormReferenciasPersonalesComponent, [{
    type: Component,
    args: [{ selector: "app-form-referencias-personales", imports: [
      GenericFormComponent
    ], template: `<div class="container rounded shadow bg-light my-2 p-3">
    <h4 class="text-center fw-bold mb-2">{{edit?'Editar':'Nueva'}} Referencia Personal</h4>
    <app-generic-form 
    [controller]="referenciaPersonalController"
    [form]="form"
    [(edit)]="edit"
    />
</div>
` }]
  }], () => [{ type: ReferenciaPersonalService }, { type: ActivatedRoute }, { type: UtilsService }], { edit: [{
    type: Input
  }], editChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormReferenciasPersonalesComponent, { className: "FormReferenciasPersonalesComponent", filePath: "src/app/catalogos/referencias-personales/form-referencias-personales/form-referencias-personales.component.ts", lineNumber: 47 });
})();

// src/app/catalogos/referencias-personales/referencias.personales.routes.ts
var referenciasPersonalesRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListReferenciasPersonalesComponent },
  { path: "nuevo", component: FormReferenciasPersonalesComponent },
  { path: "editar/:id", component: FormReferenciasPersonalesComponent }
];

// src/app/catalogos/catalogos.routes.ts
var catalogosRoutes = [
  { path: "datos-personales", component: DatosPersonalesComponent, children: datosPersonalesRoutes },
  { path: "referencias-personales", component: ReferenciasPersonalesComponent, children: referenciasPersonalesRoutes },
  { path: "tipos-discapacidad", loadChildren: () => import("./chunk-HDTQ6RFZ.js").then((m) => m.tiposDiscapacidadRoutes) },
  { path: "etnias", loadChildren: () => import("./chunk-QONLIIQ2.js").then((m) => m.etniasRoutes) },
  { path: "parentescos", loadChildren: () => import("./chunk-SF5CNL67.js").then((m) => m.parentescosRoutes) },
  { path: "juzgados", loadChildren: () => import("./chunk-BYDTDDRY.js").then((m) => m.juzgadosRoutes) },
  { path: "sesiones", loadChildren: () => import("./chunk-MKSJXIOR.js").then((m) => m.sesionesRoutes) },
  { path: "actividades-economicas", loadChildren: () => import("./chunk-WNKK2G32.js").then((m) => m.actividadesEconomicasRoutes) },
  { path: "proveedores", loadChildren: () => import("./chunk-BQPBHQWI.js").then((m) => m.proveedoresRoutes) },
  { path: "despachos", loadChildren: () => import("./chunk-G5LRDNTW.js").then((m) => m.despachosRoutes) },
  { path: "procesos-judiciales", loadChildren: () => import("./chunk-66ORDQOJ.js").then((m) => m.procesosJudicialesRoutes) },
  { path: "etapas-judiciales", loadChildren: () => import("./chunk-WCXDRT37.js").then((m) => m.etapasJudicialesRoutes) },
  { path: "ciudades", loadChildren: () => import("./chunk-6THK6ET3.js").then((m) => m.ciudadesRoutes) }
];
export {
  catalogosRoutes
};
//# sourceMappingURL=chunk-5QX2ANAE.js.map
