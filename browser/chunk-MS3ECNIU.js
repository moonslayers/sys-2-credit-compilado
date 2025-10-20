import {
  SucursalService
} from "./chunk-CZBABI5D.js";
import {
  UsuarioService
} from "./chunk-P72Q77JD.js";
import {
  RecordFormButtonsComponent,
  RecordFormComponent
} from "./chunk-BZ6OSZD3.js";
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
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import {
  SuperService,
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
  Injectable,
  Injector,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/usuarios/list-usuarios/list-usuarios.component.ts
var _ListUsuariosComponent = class _ListUsuariosComponent {
  constructor(router, usuarioController) {
    this.router = router;
    this.usuarioController = usuarioController;
    this.tableDefinition = {
      columns: [
        {
          key: "nombre",
          header: "Nombre"
        },
        {
          key: "email",
          header: "Email"
        },
        {
          key: "update_token",
          header: "Caducidad Pass",
          pipe: "date"
        },
        {
          key: "created_at",
          header: "Creado en",
          pipe: "date"
        }
      ]
    };
    this.barraButtons = {
      div: "row justify-content-end mb-2",
      buttons: [
        {
          text: "Nuevo Usuario",
          style: {
            icon: "bi bi-plus-circle-fill ms-1",
            button: "btn btn btn-secondary shadow text-bold scale-05",
            div: "col-auto p-1"
          }
        },
        {
          key: "eliminar",
          text: "Eliminar",
          style: {
            icon: "bi bi-trash-fill ms-1",
            button: "btn btn btn-success shadow text-bold scale-05",
            div: "col-auto p-1"
          }
        }
      ]
    };
  }
};
_ListUsuariosComponent.\u0275fac = function ListUsuariosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListUsuariosComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UsuarioService));
};
_ListUsuariosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListUsuariosComponent, selectors: [["app-list-usuarios"]], decls: 1, vars: 2, consts: [["title", "Usuarios", 3, "controller", "tableDefinition"]], template: function ListUsuariosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tabla", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.usuarioController)("tableDefinition", ctx.tableDefinition);
  }
}, dependencies: [TablaComponent], encapsulation: 2 });
var ListUsuariosComponent = _ListUsuariosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListUsuariosComponent, [{
    type: Component,
    args: [{ selector: "app-list-usuarios", imports: [TablaComponent], template: '<app-tabla  \ntitle="Usuarios"\n[controller]="usuarioController" \n[tableDefinition]="tableDefinition"\n></app-tabla>' }]
  }], () => [{ type: Router }, { type: UsuarioService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListUsuariosComponent, { className: "ListUsuariosComponent", filePath: "src/app/main/usuarios/list-usuarios/list-usuarios.component.ts", lineNumber: 13 });
})();

// src/app/controllers/permiso.usuario.service.ts
var _PermisoUsuarioService = class _PermisoUsuarioService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "permisos_usuarios";
    this.columns = [
      "permiso_id",
      "perfiles_usuario_id"
    ];
  }
};
_PermisoUsuarioService.\u0275fac = function PermisoUsuarioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermisoUsuarioService)(\u0275\u0275inject(Injector));
};
_PermisoUsuarioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermisoUsuarioService, factory: _PermisoUsuarioService.\u0275fac, providedIn: "any" });
var PermisoUsuarioService = _PermisoUsuarioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermisoUsuarioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/usuarios/usuario-form/permiso-usuario/permiso-usuario.component.ts
var _PermisoUsuarioComponent = class _PermisoUsuarioComponent extends RecordFormComponent {
  constructor(permisoController) {
    super(permisoController);
    this.permisoController = permisoController;
  }
};
_PermisoUsuarioComponent.\u0275fac = function PermisoUsuarioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermisoUsuarioComponent)(\u0275\u0275directiveInject(PermisoUsuarioService));
};
_PermisoUsuarioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermisoUsuarioComponent, selectors: [["app-permiso-usuario"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 1, consts: [[1, "container", "bg-secondary", "rounded", "shadow-sm", "p-2", "scale-025", "pointer", 3, "click"], [1, "row"], [1, "col"], [1, "text-bg-secondary"], [1, "col-auto", "align-self-center"], [1, "btn", "btn-sm"], [1, "bi", "bi-x-lg"]], template: function PermisoUsuarioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function PermisoUsuarioComponent_Template_div_click_0_listener() {
      return ctx.delete();
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h5", 3)(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
    \u0275\u0275element(8, "i", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.record.permisos == null ? null : ctx.record.permisos.nombre);
  }
}, encapsulation: 2 });
var PermisoUsuarioComponent = _PermisoUsuarioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermisoUsuarioComponent, [{
    type: Component,
    args: [{ selector: "app-permiso-usuario", imports: [], template: '<div class="container bg-secondary rounded shadow-sm p-2 scale-025 pointer" (click)="delete()">\n    <div class="row">\n        <div class="col">\n            <h5 class="text-bg-secondary"><b>{{record.permisos?.nombre}}</b></h5>\n        </div>\n        <div class="col-auto align-self-center">\n            <button class="btn btn-sm"><i class="bi bi-x-lg"></i></button>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: PermisoUsuarioService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermisoUsuarioComponent, { className: "PermisoUsuarioComponent", filePath: "src/app/main/usuarios/usuario-form/permiso-usuario/permiso-usuario.component.ts", lineNumber: 12 });
})();

// src/app/controllers/perfil.usuario.service.ts
var _PerfilUsuarioService = class _PerfilUsuarioService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "perfiles_usuarios";
    this.columns = [
      "tipos_usuario_id",
      "usuario_id",
      "sucursal_id"
    ];
  }
};
_PerfilUsuarioService.\u0275fac = function PerfilUsuarioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PerfilUsuarioService)(\u0275\u0275inject(Injector));
};
_PerfilUsuarioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PerfilUsuarioService, factory: _PerfilUsuarioService.\u0275fac, providedIn: "any" });
var PerfilUsuarioService = _PerfilUsuarioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilUsuarioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/controllers/tipo.usuario.service.ts
var _TipoUsuarioService = class _TipoUsuarioService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "tipos_usuarios";
    this.columns = [
      "nombre",
      "rango",
      "descripcion"
    ];
  }
};
_TipoUsuarioService.\u0275fac = function TipoUsuarioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TipoUsuarioService)(\u0275\u0275inject(Injector));
};
_TipoUsuarioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoUsuarioService, factory: _TipoUsuarioService.\u0275fac, providedIn: "any" });
var TipoUsuarioService = _TipoUsuarioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoUsuarioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/controllers/permiso.service.ts
var _PermisoService = class _PermisoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "permisos";
    this.columns = [
      "nombre",
      "rango",
      "descripcion"
    ];
  }
};
_PermisoService.\u0275fac = function PermisoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermisoService)(\u0275\u0275inject(Injector));
};
_PermisoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermisoService, factory: _PermisoService.\u0275fac, providedIn: "any" });
var PermisoService = _PermisoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermisoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/usuarios/usuario-form/perfil-usuario/perfil-usuario.component.ts
function PerfilUsuarioComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.record.tipos_usuarios == null ? null : ctx_r0.record.tipos_usuarios.nombre);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" - ", ctx_r0.record.sucursales == null ? null : ctx_r0.record.sucursales.nombre, " - ", ctx_r0.record.permisos_usuarios == null ? null : ctx_r0.record.permisos_usuarios.length, " permisos ");
  }
}
function PerfilUsuarioComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "app-autocomplete-field", 8);
    \u0275\u0275twoWayListener("valueChange", function PerfilUsuarioComponent_Conditional_4_Template_app_autocomplete_field_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.record.tipos_usuario_id, $event) || (ctx_r0.record.tipos_usuario_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "div", 3)(3, "app-autocomplete-field", 9);
    \u0275\u0275twoWayListener("valueChange", function PerfilUsuarioComponent_Conditional_4_Template_app_autocomplete_field_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.record.sucursal_id, $event) || (ctx_r0.record.sucursal_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("value", ctx_r0.record.tipos_usuario_id);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx_r0.record.sucursal_id);
  }
}
function PerfilUsuarioComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function PerfilUsuarioComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPermisos = !ctx_r0.showPermisos);
    });
    \u0275\u0275text(1, " Permisos ");
    \u0275\u0275elementEnd();
  }
}
function PerfilUsuarioComponent_Conditional_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "app-permiso-usuario", 16);
    \u0275\u0275listener("onDeleted", function PerfilUsuarioComponent_Conditional_8_For_9_Template_app_permiso_usuario_onDeleted_1_listener() {
      const permiso_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPermisoDeleted(permiso_r6));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const permiso_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("record", permiso_r6);
  }
}
function PerfilUsuarioComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 2)(2, "div", 11)(3, "app-autocomplete-field", 12);
    \u0275\u0275twoWayListener("valueChange", function PerfilUsuarioComponent_Conditional_8_Template_app_autocomplete_field_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.idNuevoPermiso, $event) || (ctx_r0.idNuevoPermiso = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function PerfilUsuarioComponent_Conditional_8_Template_app_autocomplete_field_valueChange_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPermisoSelected());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "button", 14);
    \u0275\u0275listener("click", function PerfilUsuarioComponent_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.agregarTodosPermisos());
    });
    \u0275\u0275text(6, " Todos ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 2);
    \u0275\u0275repeaterCreate(8, PerfilUsuarioComponent_Conditional_8_For_9_Template, 2, 1, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("extraData", ctx_r0.filtrosPermisos);
    \u0275\u0275twoWayProperty("value", ctx_r0.idNuevoPermiso);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.record.permisos_usuarios);
  }
}
var _PerfilUsuarioComponent = class _PerfilUsuarioComponent extends RecordFormComponent {
  constructor(perfilController, tipoUsuarioController, permisoUsuarioController, utils, sucursalController, permisoController, storage) {
    super(perfilController);
    this.perfilController = perfilController;
    this.tipoUsuarioController = tipoUsuarioController;
    this.permisoUsuarioController = permisoUsuarioController;
    this.utils = utils;
    this.sucursalController = sucursalController;
    this.permisoController = permisoController;
    this.storage = storage;
    this.showPermisos = false;
    this.filtrosPermisos = {};
    this.filtrosTiposUsuarios = {};
  }
  ngOnInit() {
    if (!this.record.id) {
      this.edit = true;
    }
    this.setFiltroTiposUsuarios();
    this.updateFiltros();
  }
  setFiltroTiposUsuarios() {
    const login = this.storage.getPerfil();
    console.log("login", login);
    this.filtrosTiposUsuarios = {
      conditionals: JSON.stringify([
        ["rango", "<=", login.tipos_usuarios.rango]
      ])
    };
  }
  updateFiltros() {
    const omitidosCondicionales = this.permisosOmitidos();
    this.filtrosPermisos = {
      conditionals: JSON.stringify([
        ["rango", ">=", this.record.tipos_usuarios?.rango],
        ["deleted_at", "IS NULL", null],
        ...omitidosCondicionales
      ])
    };
  }
  permisosOmitidos() {
    const list = [];
    if (!this.record.permisos_usuarios)
      return [];
    this.record.permisos_usuarios.forEach((permiso) => {
      list.push(["id", "!=", permiso.permiso_id]);
    });
    return list;
  }
  afterSaved() {
    return __async(this, null, function* () {
      this.record.tipos_usuarios = yield this.tipoUsuarioController.find(this.record.tipos_usuario_id);
      this.record.sucursales = yield this.sucursalController.find(this.record.sucursal_id);
      this.record.permisos_usuarios = [];
      this.updateFiltros();
    });
  }
  onPermisoSelected() {
    return __async(this, null, function* () {
      if (!this.record.permisos_usuarios)
        this.record.permisos_usuarios = [];
      console.log(this.idNuevoPermiso);
      if (this.idNuevoPermiso) {
        const res = yield this.permisoUsuarioController.createOrRestore({
          perfiles_usuario_id: this.record.id,
          permiso_id: this.idNuevoPermiso
        });
        if (res) {
          res.permisos = yield this.permisoController.find(res.permiso_id);
          this.record.permisos_usuarios.push(res);
          this.idNuevoPermiso = void 0;
        }
      }
    });
  }
  agregarTodosPermisos() {
    return __async(this, null, function* () {
      const permisos = yield this.permisoController.all([
        {
          key: "deleted_at",
          operator: "IS NULL",
          value: null
        },
        {
          key: "rango",
          operator: ">=",
          value: this.record.tipos_usuarios?.rango ?? 0
        }
      ]);
      if (!this.record.permisos_usuarios)
        this.record.permisos_usuarios = [];
      for (const permiso of permisos) {
        const res = yield this.permisoUsuarioController.createOrRestore({
          perfiles_usuario_id: this.record.id,
          permiso_id: permiso.id
        }, false);
        if (res) {
          res.permisos = permiso;
          if (!this.record.permisos_usuarios.find((per) => per.id == res.id)) {
            this.record.permisos_usuarios.push(res);
          }
        }
      }
    });
  }
  onPermisoDeleted(permiso) {
    this.utils.localDelete(this.record.permisos_usuarios, permiso);
    this.updateFiltros();
  }
};
_PerfilUsuarioComponent.\u0275fac = function PerfilUsuarioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PerfilUsuarioComponent)(\u0275\u0275directiveInject(PerfilUsuarioService), \u0275\u0275directiveInject(TipoUsuarioService), \u0275\u0275directiveInject(PermisoUsuarioService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(SucursalService), \u0275\u0275directiveInject(PermisoService), \u0275\u0275directiveInject(LocalStorageService));
};
_PerfilUsuarioComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilUsuarioComponent, selectors: [["app-perfil-usuario"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 7, consts: [[1, "container-fluid", "p-2"], [1, "container-fluid", "p-3", "rounded", "shadow"], [1, "row"], [1, "col"], [1, "col-auto"], [3, "editChange", "onDeleteButtonClick", "onSaveButtonClick", "edit", "isDeleting", "isLoading"], [1, "btn", "btn-secondary", "mx-1"], [1, "container", "py-1"], ["placeholder", "Tipo de usuario...", "apiUrl", "api/tipos_usuarios", "keyList", "id", "keyDetalle", "nombre", 3, "valueChange", "value"], ["placeholder", "Sucursal...", "apiUrl", "api/sucursales", "keyList", "id", "keyDetalle", "nombre", 3, "valueChange", "value"], [1, "btn", "btn-secondary", "mx-1", 3, "click"], [1, "col", "py-2"], ["apiUrl", "api/permisos", "keyList", "id", "keyDetalle", "nombre", "placeholder", "Busca un permiso...", 3, "valueChange", "extraData", "value"], [1, "col-auto", "py-2"], [1, "btn", "btn-secondary", 3, "click"], [1, "col-auto", "p-1"], [3, "onDeleted", "record"]], template: function PerfilUsuarioComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275conditionalCreate(3, PerfilUsuarioComponent_Conditional_3_Template, 4, 3, "div", 3);
    \u0275\u0275conditionalCreate(4, PerfilUsuarioComponent_Conditional_4_Template, 4, 2);
    \u0275\u0275elementStart(5, "div", 4)(6, "record-form-buttons", 5);
    \u0275\u0275twoWayListener("editChange", function PerfilUsuarioComponent_Template_record_form_buttons_editChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit, $event) || (ctx.edit = $event);
      return $event;
    });
    \u0275\u0275listener("onDeleteButtonClick", function PerfilUsuarioComponent_Template_record_form_buttons_onDeleteButtonClick_6_listener() {
      return ctx.delete();
    })("onSaveButtonClick", function PerfilUsuarioComponent_Template_record_form_buttons_onSaveButtonClick_6_listener() {
      return ctx.save();
    });
    \u0275\u0275conditionalCreate(7, PerfilUsuarioComponent_Conditional_7_Template, 2, 0, "button", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, PerfilUsuarioComponent_Conditional_8_Template, 10, 2, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.edit ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.edit ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("edit", ctx.edit);
    \u0275\u0275property("isDeleting", ctx.isDeleting)("isLoading", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.record.id ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showPermisos ? 8 : -1);
  }
}, dependencies: [
  RecordFormButtonsComponent,
  AutocompleteFieldComponent,
  PermisoUsuarioComponent
], encapsulation: 2 });
var PerfilUsuarioComponent = _PerfilUsuarioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilUsuarioComponent, [{
    type: Component,
    args: [{ selector: "app-perfil-usuario", imports: [
      RecordFormButtonsComponent,
      AutocompleteFieldComponent,
      PermisoUsuarioComponent
    ], template: '<div class="container-fluid p-2">\n  <div class="container-fluid p-3 rounded shadow">\n    <div class="row">\n      @if (!edit) {\n        <div class="col">\n          <b>{{ record.tipos_usuarios?.nombre }}</b> -\n          {{ record.sucursales?.nombre }} -\n          {{ record.permisos_usuarios?.length }} permisos\n        </div>\n      }\n      @if (edit) {\n        <div class="col">\n          <app-autocomplete-field\n            [(value)]="record.tipos_usuario_id"\n            placeholder="Tipo de usuario..."\n            apiUrl="api/tipos_usuarios"\n            keyList="id"\n            keyDetalle="nombre"\n          />\n        </div>\n        <div class="col">\n          <app-autocomplete-field\n            [(value)]="record.sucursal_id"\n            placeholder="Sucursal..."\n            apiUrl="api/sucursales"\n            keyList="id"\n            keyDetalle="nombre"\n          />\n        </div>\n      }\n      <div class="col-auto">\n        <record-form-buttons\n          [(edit)]="edit"\n          [isDeleting]="isDeleting"\n          [isLoading]="isLoading"\n          (onDeleteButtonClick)="delete()"\n          (onSaveButtonClick)="save()"\n        >\n          @if (record.id) {\n            <button\n              class="btn btn-secondary mx-1"\n              (click)="showPermisos = !showPermisos"\n            >\n              Permisos\n            </button>\n          }\n        </record-form-buttons>\n      </div>\n    </div>\n    @if (showPermisos) {\n      <div class="container py-1">\n        <div class="row">\n          <div class="col py-2">\n            <app-autocomplete-field\n              apiUrl="api/permisos"\n              keyList="id"\n              keyDetalle="nombre"\n              [extraData]="filtrosPermisos"\n              placeholder="Busca un permiso..."\n              [(value)]="idNuevoPermiso"\n              (valueChange)="onPermisoSelected()"\n            />\n          </div>\n          <div class="col-auto py-2">\n            <button class="btn btn-secondary" (click)="agregarTodosPermisos()">\n              Todos\n            </button>\n          </div>\n        </div>\n        <div class="row">\n          @for (permiso of record.permisos_usuarios; track permiso) {\n            <div class="col-auto p-1">\n              <app-permiso-usuario\n                [record]="permiso"\n                (onDeleted)="onPermisoDeleted(permiso)"\n              />\n            </div>\n          }\n        </div>\n      </div>\n    }\n  </div>\n</div>\n' }]
  }], () => [{ type: PerfilUsuarioService }, { type: TipoUsuarioService }, { type: PermisoUsuarioService }, { type: UtilsService }, { type: SucursalService }, { type: PermisoService }, { type: LocalStorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilUsuarioComponent, { className: "PerfilUsuarioComponent", filePath: "src/app/main/usuarios/usuario-form/perfil-usuario/perfil-usuario.component.ts", lineNumber: 28 });
})();

// src/app/main/usuarios/usuario-form/usuario-form.component.ts
function UsuarioFormComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "app-generic-form", 7);
    \u0275\u0275twoWayListener("editChange", function UsuarioFormComponent_Conditional_10_Template_app_generic_form_editChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.edit, $event) || (ctx_r1.edit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("form", ctx_r1.form)("controller", ctx_r1.usuarioController);
    \u0275\u0275twoWayProperty("edit", ctx_r1.edit);
  }
}
function UsuarioFormComponent_Conditional_11_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-perfil-usuario", 12);
    \u0275\u0275listener("onDeleted", function UsuarioFormComponent_Conditional_11_For_6_Template_app_perfil_usuario_onDeleted_0_listener() {
      const perfil_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.utils.localDelete(ctx_r1.edit == null ? null : ctx_r1.edit.perfiles_usuarios, perfil_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const perfil_r5 = ctx.$implicit;
    \u0275\u0275property("record", perfil_r5);
  }
}
function UsuarioFormComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8)(2, "div", 9)(3, "button", 10);
    \u0275\u0275listener("click", function UsuarioFormComponent_Conditional_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nuevoPerfil());
    });
    \u0275\u0275text(4, " Nuevo Perfil ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(5, UsuarioFormComponent_Conditional_11_For_6_Template, 1, 1, "app-perfil-usuario", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.edit == null ? null : ctx_r1.edit.perfiles_usuarios);
  }
}
var FORMDEF = [
  {
    title: "Datos del usuario",
    fields: [
      {
        type: "email",
        label: "Correo electronico",
        key: "email",
        validator: {
          required: true,
          email: true
        }
      },
      {
        type: "text",
        label: "Contrase\xF1a",
        key: "password"
      },
      {
        type: "text",
        label: "Nombre",
        key: "nombre",
        validator: {
          required: true
        }
      },
      {
        type: "text",
        label: "Apellido Paterno",
        key: "apellido_paterno",
        validator: {
          required: true
        }
      },
      {
        type: "text",
        label: "Apellido Materno",
        key: "apellido_materno",
        style: {
          div: "col p-3"
        },
        validator: {
          required: true
        }
      }
    ]
  }
];
var _UsuarioFormComponent = class _UsuarioFormComponent {
  constructor(usuarioController, route, utils) {
    this.usuarioController = usuarioController;
    this.route = route;
    this.utils = utils;
    this.form = FORMDEF;
    this.sections = {
      datos: true,
      perfiles: false
    };
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      if (params["usuario_id"]) {
        this.edit = yield this.usuarioController.find(params["usuario_id"], ["perfilesUsuarios.permisosUsuarios.permisos", "perfilesUsuarios.tiposUsuarios", "perfilesUsuarios.sucursales"]);
        this.edit?.perfiles_usuarios?.sort((a, b) => {
          return (a.tipos_usuarios?.rango ?? 0) - (b.tipos_usuarios?.rango ?? 0);
        });
        console.log(this.edit);
      }
    }));
  }
  onTabSelected(key) {
    for (const key2 of Object.keys(this.sections)) {
      this.sections[key2] = false;
    }
    this.sections[key] = true;
  }
  nuevoPerfil() {
    if (!this.edit)
      return;
    if (!this.edit.perfiles_usuarios)
      this.edit.perfiles_usuarios = [];
    this.edit.perfiles_usuarios.push({
      usuario_id: this.edit.id,
      tipos_usuario_id: 0,
      sucursal_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    });
  }
};
_UsuarioFormComponent.\u0275fac = function UsuarioFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsuarioFormComponent)(\u0275\u0275directiveInject(UsuarioService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_UsuarioFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuarioFormComponent, selectors: [["app-usuario-form"]], decls: 12, vars: 11, consts: [[1, "container", "bg-white", "my-1", "rounded", "shadow", "p-3", "mt-2"], [1, "mt-1", "mb-1", "text-center"], [1, "nav", "nav-tabs", "nav-fill"], [1, "nav-item"], [1, "nav-link", "pointer", "text-primary", "fw-bold", 3, "click"], [1, "nav-link", "pointer", "fw-bold", 3, "click"], [1, "container", "p-3"], [3, "editChange", "form", "controller", "edit"], [1, "row", "justify-content-end"], [1, "col-auto", "p-1"], [1, "btn", "btn-success", 3, "click"], [3, "record"], [3, "onDeleted", "record"]], template: function UsuarioFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 2)(4, "li", 3)(5, "a", 4);
    \u0275\u0275listener("click", function UsuarioFormComponent_Template_a_click_5_listener() {
      return ctx.onTabSelected("datos");
    });
    \u0275\u0275text(6, "Principal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li", 3)(8, "a", 5);
    \u0275\u0275listener("click", function UsuarioFormComponent_Template_a_click_8_listener() {
      return ctx.onTabSelected("perfiles");
    });
    \u0275\u0275text(9, "Perfiles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, UsuarioFormComponent_Conditional_10_Template, 2, 3, "div", 6);
    \u0275\u0275conditionalCreate(11, UsuarioFormComponent_Conditional_11_Template, 7, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.edit ? "Editar" : "Nuevo", " Usuario");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.sections["datos"]);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx.sections["perfiles"])("disabled", !ctx.edit)("text-primary", ctx.edit);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.sections["datos"] ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.sections["perfiles"] ? 11 : -1);
  }
}, dependencies: [
  GenericFormComponent,
  PerfilUsuarioComponent
], encapsulation: 2 });
var UsuarioFormComponent = _UsuarioFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuarioFormComponent, [{
    type: Component,
    args: [{ selector: "app-usuario-form", imports: [
      GenericFormComponent,
      PerfilUsuarioComponent
    ], template: `<div class="container bg-white my-1 rounded shadow p-3 mt-2">
  <h2 class="mt-1 mb-1 text-center">{{ edit ? "Editar" : "Nuevo" }} Usuario</h2>
  <ul class="nav nav-tabs nav-fill">
    <li class="nav-item">
      <a
        class="nav-link pointer text-primary fw-bold"
        [class.active]="sections['datos']"
        (click)="onTabSelected('datos')"
        >Principal</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link pointer fw-bold"
        [class.active]="sections['perfiles']"
        [class.disabled]="!edit"
        [class.text-primary]="edit"
        (click)="onTabSelected('perfiles')"
        >Perfiles</a
      >
    </li>
  </ul>
  @if (sections["datos"]) {
    <div class="container p-3">
      <app-generic-form
        [form]="form"
        [controller]="usuarioController"
        [(edit)]="edit"
      />
    </div>
  }
  @if (sections["perfiles"]) {
    <div class="container p-3">
      <div class="row justify-content-end">
        <div class="col-auto p-1">
          <button class="btn btn-success" (click)="nuevoPerfil()">
            Nuevo Perfil
          </button>
        </div>
      </div>
      @for (perfil of edit?.perfiles_usuarios; track perfil) {
        <app-perfil-usuario
          [record]="perfil"
          (onDeleted)="utils.localDelete(edit?.perfiles_usuarios, perfil)"
        />
      }
    </div>
  }
</div>

` }]
  }], () => [{ type: UsuarioService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuarioFormComponent, { className: "UsuarioFormComponent", filePath: "src/app/main/usuarios/usuario-form/usuario-form.component.ts", lineNumber: 68 });
})();

// src/app/main/usuarios/usuarios.routes.ts
var usuariosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListUsuariosComponent },
  { path: "nuevo", component: UsuarioFormComponent },
  { path: "editar/:usuario_id", component: UsuarioFormComponent }
];
export {
  usuariosRoutes
};
//# sourceMappingURL=chunk-MS3ECNIU.js.map
