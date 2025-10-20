import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  FileInputComponent
} from "./chunk-5BMNPTRZ.js";
import {
  SuperService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import {
  ActivatedRoute
} from "./chunk-XKAAYCNZ.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/controllers/credito.evento.cobro.service.ts
var _CreditoEventoCobroService = class _CreditoEventoCobroService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "credito_eventos_cobros";
    this.columns = [
      "id",
      "credito_id",
      "usuario_ejecutivo_id",
      "modalidad",
      "resultado",
      "comentario",
      "documento_url",
      "fecha",
      "usuario_id",
      "nombre_usuario",
      "objetivo",
      "otro_resultado"
    ];
  }
  ejecutarCobro(cobro) {
    return __async(this, null, function* () {
      if (!cobro)
        return;
      const res = yield this.createOrUpdate(cobro);
      return !!res;
    });
  }
};
_CreditoEventoCobroService.\u0275fac = function CreditoEventoCobroService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditoEventoCobroService)(\u0275\u0275inject(Injector));
};
_CreditoEventoCobroService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CreditoEventoCobroService, factory: _CreditoEventoCobroService.\u0275fac, providedIn: "any" });
var CreditoEventoCobroService = _CreditoEventoCobroService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditoEventoCobroService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/controllers/evento.cobro.objetivo.service.ts
var _EventoCobroObjetivoService = class _EventoCobroObjetivoService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "eventos_cobro_objetivos";
    this.columns = [
      "id",
      "modalidad",
      "objetivo",
      "evento_cobro_id",
      "usuario_id",
      "detalle",
      "deleted_at",
      "created_at"
    ];
  }
};
_EventoCobroObjetivoService.\u0275fac = function EventoCobroObjetivoService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventoCobroObjetivoService)(\u0275\u0275inject(Injector));
};
_EventoCobroObjetivoService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventoCobroObjetivoService, factory: _EventoCobroObjetivoService.\u0275fac, providedIn: "any" });
var EventoCobroObjetivoService = _EventoCobroObjetivoService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventoCobroObjetivoService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/controllers/evento.cobro.asignacion.usuario.service.ts
var _EventoCobroAsignacionUsuarioService = class _EventoCobroAsignacionUsuarioService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "evento_cobro_asignacion_usuarios";
    this.columns = [
      "usuario_asignado_id",
      "evento_cobro_asignacion_id",
      "credito_eventos_cobro_id",
      "usuario_id",
      "created_at",
      "updated_at",
      "deleted_at"
    ];
  }
};
_EventoCobroAsignacionUsuarioService.\u0275fac = function EventoCobroAsignacionUsuarioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventoCobroAsignacionUsuarioService)(\u0275\u0275inject(Injector));
};
_EventoCobroAsignacionUsuarioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventoCobroAsignacionUsuarioService, factory: _EventoCobroAsignacionUsuarioService.\u0275fac, providedIn: "any" });
var EventoCobroAsignacionUsuarioService = _EventoCobroAsignacionUsuarioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventoCobroAsignacionUsuarioService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/controllers/evento.cobro.asignacion.service.ts
var _EventoCobroAsignacionService = class _EventoCobroAsignacionService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "evento_cobro_asignaciones";
    this.columns = [
      "fecha",
      "modalidad",
      "credito_id",
      "comentarios",
      "usuario_id",
      "created_at",
      "updated_at",
      "deleted_at"
    ];
    this.eventoCobroAsignacionUsuarioController = inject(EventoCobroAsignacionUsuarioService);
    this.localStorage = inject(LocalStorageService);
  }
  asignacionesPendientes(credito) {
    return __async(this, null, function* () {
      let credito_id = 0;
      if (!credito)
        return [];
      if (typeof credito == "number") {
        credito_id = credito;
      } else {
        credito_id = credito.id;
      }
      const usuario = this.localStorage.getUser();
      return this.all({
        conditionals: {
          credito_id,
          estado: "EN PROGRESO",
          deleted_at: null
        },
        advancedSearch: [
          {
            relation: "eventoCobroAsignacionUsuarios",
            conditionals: [],
            andConditionals: [
              ["usuario_asignado_id", "=", usuario.id]
            ]
          }
        ],
        relations: ["eventoCobroAsignacionUsuarios", "usuarios"],
        loader: false
      });
    });
  }
  marcarAsignacionCompletada(eventoCobro, asignacion) {
    return __async(this, null, function* () {
      if (!eventoCobro?.id)
        return;
      const usuario = this.localStorage.getUser();
      const asignacionesUsuario = asignacion.evento_cobro_asignacion_usuarios.filter((a) => a?.usuario_asignado_id === usuario.id);
      asignacion.estado = "COMPLETADA";
      yield this.update(asignacion);
      yield this.eventoCobroAsignacionUsuarioController.multipleUpdate(asignacionesUsuario.map((a) => ({ id: a.id, credito_eventos_cobro_id: eventoCobro.id })));
    });
  }
};
_EventoCobroAsignacionService.\u0275fac = function EventoCobroAsignacionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventoCobroAsignacionService)(\u0275\u0275inject(Injector));
};
_EventoCobroAsignacionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventoCobroAsignacionService, factory: _EventoCobroAsignacionService.\u0275fac, providedIn: "any" });
var EventoCobroAsignacionService = _EventoCobroAsignacionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventoCobroAsignacionService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/cobranza/ejecucion-cobro/ejecucion-cobro.component.ts
var _c0 = ["fileInput"];
var _c1 = (a0) => ({ id: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function EjecucionCobroComponent_Conditional_0_Conditional_46_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 33);
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_46_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function EjecucionCobroComponent_Conditional_0_Conditional_46_For_6_Template_button_click_0_listener() {
      const objetivo_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectObjetivo(objetivo_r5));
    });
    \u0275\u0275conditionalCreate(1, EjecucionCobroComponent_Conditional_0_Conditional_46_For_6_Conditional_1_Template, 1, 0, "i", 33);
    \u0275\u0275elementStart(2, "span")(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const objetivo_r5 = ctx.$implicit;
    \u0275\u0275classProp("active", objetivo_r5.isSelected);
    \u0275\u0275advance();
    \u0275\u0275conditional(objetivo_r5.isSelected ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(objetivo_r5.data);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", objetivo_r5.label, ")");
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 26);
    \u0275\u0275element(2, "i", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275repeaterCreate(5, EjecucionCobroComponent_Conditional_0_Conditional_46_For_6_Template, 6, 5, "button", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(7, "button", 30);
    \u0275\u0275listener("click", function EjecucionCobroComponent_Conditional_0_Conditional_46_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nuevoObjetivo());
    });
    \u0275\u0275element(8, "i", 31);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Nuevo");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.titleObjetivo, " (selecciona uno) ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.objetivos);
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_47_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h6", 36);
    \u0275\u0275element(3, "i", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 38)(6, "div", 39)(7, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function EjecucionCobroComponent_Conditional_0_Conditional_47_For_1_Conditional_0_Template_textarea_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.objetivoForm.objetivo, $event) || (ctx_r1.objetivoForm.objetivo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 42)(11, "span", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function EjecucionCobroComponent_Conditional_0_Conditional_47_For_1_Conditional_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.objetivoForm.detalle, $event) || (ctx_r1.objetivoForm.detalle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 45);
    \u0275\u0275listener("click", function EjecucionCobroComponent_Conditional_0_Conditional_47_For_1_Conditional_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const form_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveObjetivo(form_r7.modalidad));
    });
    \u0275\u0275element(15, "i", 46);
    \u0275\u0275text(16, " Guardar ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const form_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", form_r7.titulo);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(form_r7.objetivo));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.objetivoForm.objetivo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(form_r7.objetivo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(form_r7.detalle);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.objetivoForm.detalle);
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_47_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EjecucionCobroComponent_Conditional_0_Conditional_47_For_1_Conditional_0_Template, 17, 7, "div", 34);
  }
  if (rf & 2) {
    const form_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.evento.modalidad === form_r7.modalidad ? 0 : -1);
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EjecucionCobroComponent_Conditional_0_Conditional_47_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.formularios);
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_53_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 54);
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_53_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 55);
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_53_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function EjecucionCobroComponent_Conditional_0_Conditional_53_For_6_Template_div_click_0_listener() {
      const asignacion_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.asignacionCompletada = asignacion_r9);
    });
    \u0275\u0275elementStart(1, "div", 53);
    \u0275\u0275conditionalCreate(2, EjecucionCobroComponent_Conditional_0_Conditional_53_For_6_Conditional_2_Template, 1, 0, "i", 54)(3, EjecucionCobroComponent_Conditional_0_Conditional_53_For_6_Conditional_3_Template, 1, 0, "i", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "small", 58);
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 59)(14, "small", 60);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17, "Asignado por");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const asignacion_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-secondary", (ctx_r1.asignacionCompletada == null ? null : ctx_r1.asignacionCompletada.id) === asignacion_r9.id)("text-bg-secondary", (ctx_r1.asignacionCompletada == null ? null : ctx_r1.asignacionCompletada.id) === asignacion_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.asignacionCompletada == null ? null : ctx_r1.asignacionCompletada.id) === asignacion_r9.id ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utils.fechaFormateada(asignacion_r9.fecha));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asignacion_r9.modalidad);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", asignacion_r9.comentarios || "Sin comentarios", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (asignacion_r9.usuarios || asignacion_r9.usuarios) == null ? null : (asignacion_r9.usuarios || asignacion_r9.usuarios).nombre, " ", (asignacion_r9.usuarios || asignacion_r9.usuarios) == null ? null : (asignacion_r9.usuarios || asignacion_r9.usuarios).apellido_paterno, " ");
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_53_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, " Asignaci\xF3n del ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " seleccionada. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.utils.fechaFormateada(ctx_r1.asignacionCompletada.fecha));
  }
}
function EjecucionCobroComponent_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 47);
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275text(3, " Selecciona la asignaci\xF3n a marcar como completada ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275repeaterCreate(5, EjecucionCobroComponent_Conditional_0_Conditional_53_For_6_Template, 18, 10, "div", 50, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, EjecucionCobroComponent_Conditional_0_Conditional_53_Conditional_7_Template, 6, 1, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.eventoCobroAsignaciones);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.asignacionCompletada ? 7 : -1);
  }
}
function EjecucionCobroComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "h5", 2);
    \u0275\u0275element(2, "i", 3);
    \u0275\u0275text(3, " Ejecuci\xF3n de Cobranza - ");
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275text(8, " Resultado de la gesti\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "hr", 7);
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
    \u0275\u0275element(14, "i", 12);
    \u0275\u0275text(15, " Resultado ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function EjecucionCobroComponent_Conditional_0_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.evento.resultado, $event) || (ctx_r1.evento.resultado = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "option");
    \u0275\u0275text(18, "NO REALIZADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option");
    \u0275\u0275text(20, "NO LOCALIZADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option");
    \u0275\u0275text(22, "LOCALIZADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option");
    \u0275\u0275text(24, "PROMESA DE PAGO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option");
    \u0275\u0275text(26, "CONVENIO CON ADEUDO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option");
    \u0275\u0275text(28, "CONVENIO AL CORRIENTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option");
    \u0275\u0275text(30, "LIQUIDADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option");
    \u0275\u0275text(32, "DEFUNCION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option");
    \u0275\u0275text(34, "OTRO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 14)(36, "label", 11);
    \u0275\u0275element(37, "i", 15);
    \u0275\u0275text(38, " Fecha ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function EjecucionCobroComponent_Conditional_0_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.evento.fecha, $event) || (ctx_r1.evento.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 17)(41, "label", 11);
    \u0275\u0275element(42, "i", 18);
    \u0275\u0275text(43, " Documento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "app-file-input", 19, 0);
    \u0275\u0275twoWayListener("urlChange", function EjecucionCobroComponent_Conditional_0_Template_app_file_input_urlChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.evento.documento_url, $event) || (ctx_r1.evento.documento_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(46, EjecucionCobroComponent_Conditional_0_Conditional_46_Template, 11, 1, "div", 8);
    \u0275\u0275conditionalCreate(47, EjecucionCobroComponent_Conditional_0_Conditional_47_Template, 2, 0);
    \u0275\u0275elementStart(48, "div", 8)(49, "label", 20);
    \u0275\u0275element(50, "i", 21);
    \u0275\u0275text(51, " Comentarios ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "textarea", 22);
    \u0275\u0275twoWayListener("ngModelChange", function EjecucionCobroComponent_Conditional_0_Template_textarea_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.evento.comentario, $event) || (ctx_r1.evento.comentario = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(53, EjecucionCobroComponent_Conditional_0_Conditional_53_Template, 8, 1, "div", 8);
    \u0275\u0275elementStart(54, "div", 23)(55, "button", 24);
    \u0275\u0275listener("click", function EjecucionCobroComponent_Conditional_0_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275element(56, "i", 25);
    \u0275\u0275text(57, " Guardar Gesti\xF3n ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.evento.modalidad);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.evento.resultado);
    \u0275\u0275advance(23);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.evento.fecha);
    \u0275\u0275advance(5);
    \u0275\u0275property("sm", true)("automaticSave", false)("showButton", false)("formExtra", \u0275\u0275pureFunction1(14, _c1, ctx_r1.evento.id));
    \u0275\u0275twoWayProperty("url", ctx_r1.evento.documento_url);
    \u0275\u0275property("showSimpleDownload", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.evento.modalidad !== "OTRO" ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showForm ? 47 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.evento.comentario);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.eventoCobroAsignaciones.length ? 53 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.isFormValid());
  }
}
var FORMS_DEF = [
  {
    titulo: "Nuevo N\xFAmero Telef\xF3nico:",
    modalidad: "LLAMADA",
    objetivo: "N\xFAmero",
    detalle: "Tipo:"
  },
  {
    titulo: "Nuevo Domicilio:",
    modalidad: "NOTIFICACION DOMICILIARIA",
    objetivo: "Domicilio",
    detalle: "Tipo:"
  },
  {
    titulo: "Nuevo Correo Electr\xF3nico:",
    modalidad: "CORREO ELECTRONICO",
    objetivo: "Correo",
    detalle: "Tipo:"
  },
  {
    titulo: "Nuevo Tipo de Contacto:",
    modalidad: "OTRO",
    objetivo: "Contacto",
    detalle: "Tipo:"
  }
];
var _EjecucionCobroComponent = class _EjecucionCobroComponent {
  constructor(creditoController, cobroController, cobroObjetivoController, utils, route, storage, eventoCobroAsignacionController) {
    this.creditoController = creditoController;
    this.cobroController = cobroController;
    this.cobroObjetivoController = cobroObjetivoController;
    this.utils = utils;
    this.route = route;
    this.storage = storage;
    this.eventoCobroAsignacionController = eventoCobroAsignacionController;
    this.div = "container-fluid my-1 p-3 pb-4 bg-white rounded shadow border";
    this.onSaved = new EventEmitter();
    this.addFile = "NO";
    this.objetivos = [];
    this.eventoObjetivoToCreate = [];
    this.eventoCobroAsignaciones = [];
    this.showForm = false;
    this.objetivoForm = {
      objetivo: "",
      detalle: "",
      modalidad: "OTRO",
      evento_cobro_id: 0,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    };
    this.titleObjetivo = "";
    this.formularios = FORMS_DEF;
  }
  ngOnInit() {
    this.subscribeToRouteParams();
  }
  ngOnChanges(changes) {
    if (changes["evento"] && this.evento) {
      this.setObjetivos();
      this.setAsignacionesPendientes();
    }
  }
  setAsignacionesPendientes() {
    return __async(this, null, function* () {
      this.eventoCobroAsignaciones = (yield this.eventoCobroAsignacionController.asignacionesPendientes(this.credito)).filter((a) => a.modalidad === this.evento?.modalidad);
    });
  }
  selectObjetivo(objetivo) {
    if (!this.evento)
      return;
    if (objetivo.isSelected) {
      objetivo.isSelected = false;
      return;
    }
    this.objetivos.forEach((ob) => ob.isSelected = false);
    objetivo.isSelected = true;
    this.evento.objetivo = objetivo.data;
    this.evento.objetivo_detalle = objetivo.label;
  }
  setObjetivos() {
    return __async(this, null, function* () {
      if (!this.credito || !this.evento)
        return;
      this.setTituloObjetivo();
      switch (this.evento.modalidad) {
        case "LLAMADA":
          yield this.setTelefonosObjetivos();
          break;
        case "NOTIFICACION DOMICILIARIA":
          yield this.setDomiciliosObjetivos();
          break;
        case "CORREO ELECTRONICO":
          yield this.setCorreosObjetivos();
          break;
        case "OTRO":
          yield this.setOtrosObjetivos();
          break;
      }
      this.objetivos = this.objetivos.filter((ob) => !!ob.data);
    });
  }
  nuevoObjetivo() {
    this.showForm = !this.showForm;
    this.objetivoForm = {
      objetivo: "",
      detalle: "",
      modalidad: "OTRO",
      evento_cobro_id: this.evento.id,
      id: 0,
      deleted_at: null,
      created_at: "",
      updated_at: null
    };
  }
  saveObjetivo(modalidad) {
    return __async(this, null, function* () {
      this.objetivos.push({
        data: this.objetivoForm.objetivo,
        label: this.objetivoForm.detalle
      });
      this.objetivoForm.modalidad = modalidad;
      this.eventoObjetivoToCreate.push(this.objetivoForm);
      this.showForm = false;
    });
  }
  setTituloObjetivo() {
    switch (this.evento?.modalidad) {
      case "LLAMADA":
        this.titleObjetivo = "N\xFAmeros Telef\xF3nicos";
        break;
      case "CORREO ELECTRONICO":
        this.titleObjetivo = "Correos electr\xF3nicos";
        break;
      case "NOTIFICACION DOMICILIARIA":
        this.titleObjetivo = "Domicilios";
        break;
      case "OTRO":
        break;
    }
  }
  setTelefonosObjetivos() {
    return __async(this, null, function* () {
      if (!this.credito)
        return;
      this.objetivos = [
        ...(this.credito.datos_persona_fisica?.datos_personales?.telefonos_personales ?? []).map((tel) => ({ data: tel.numero, label: "ACREDITADO" })),
        ...(this.credito.datos_personas_morales?.telefonos ?? []).map((tel) => ({ data: tel.numero, label: "ACREDITADO" })),
        ...(this.credito.datos_personales?.telefonos_personales ?? []).map((tel) => ({ data: tel.numero, label: "AVAL" })),
        ...(this.credito.referencias_personales ?? []).map((ref) => ({ data: ref.telefono, label: "REFERENCIA" })),
        ...yield this.objetivosByModalidad("LLAMADA")
      ];
    });
  }
  setDomiciliosObjetivos() {
    return __async(this, null, function* () {
      if (!this.credito)
        return;
      this.objetivos = [];
      if (this.credito.datos_persona_fisica?.datos_personales) {
        this.objetivos.push({
          data: this.utils.domicilioFromDatosModel(this.credito.datos_persona_fisica.datos_personales),
          label: "ACREDITADO"
        });
      }
      if (this.credito.datos_persona_fisica?.datos_personales?.conyuge_direccion) {
        this.objetivos.push({
          data: this.credito.datos_persona_fisica.datos_personales.conyuge_direccion,
          label: "CONYUGE"
        });
      }
      if (this.credito.datos_personas_morales) {
        this.objetivos.push({
          data: this.utils.domicilioFromDatosModel(this.credito.datos_personas_morales),
          label: "ACREDITADO"
        });
      }
      if (this.credito.datos_personas_morales?.representante_legal) {
        this.objetivos.push({
          data: this.utils.domicilioFromDatosModel(this.credito.datos_personas_morales.representante_legal),
          label: "ACREDITADO RL"
        });
      }
      if (this.credito.datos_personas_morales?.representante_legal?.conyuge_direccion) {
        this.objetivos.push({
          data: this.credito.datos_personas_morales.representante_legal.conyuge_direccion,
          label: "CONYUGE RL"
        });
      }
      if (this.credito.datos_personales) {
        this.objetivos.push({
          data: this.utils.domicilioFromDatosModel(this.credito.datos_personales),
          label: "AVAL"
        });
      }
      if (this.credito.datos_personales?.conyuge_direccion) {
        this.objetivos.push({
          data: this.credito.datos_personales.conyuge_direccion,
          label: "AVAL"
        });
      }
      this.objetivos = [
        ...this.objetivos,
        ...yield this.objetivosByModalidad("NOTIFICACION DOMICILIARIA")
      ];
    });
  }
  setCorreosObjetivos() {
    return __async(this, null, function* () {
      if (!this.credito)
        return;
      this.objetivos = [];
      if (this.credito.datos_persona_fisica?.datos_personales) {
        this.objetivos.push({
          data: this.credito.datos_persona_fisica.datos_personales.email,
          label: "ACREDITADO"
        });
      }
      if (this.credito.datos_persona_fisica?.datos_personales?.conyuge_correo) {
        this.objetivos.push({
          data: this.credito.datos_persona_fisica.datos_personales.conyuge_correo,
          label: "CONYUGE"
        });
      }
      if (this.credito.datos_personas_morales) {
        this.objetivos.push({
          data: this.credito.datos_personas_morales.email,
          label: "ACREDITADO"
        });
      }
      if (this.credito.datos_personas_morales?.representante_legal) {
        this.objetivos.push({
          data: this.credito.datos_personas_morales.representante_legal.email,
          label: "ACREDITADO RL"
        });
      }
      if (this.credito.datos_personas_morales?.representante_legal?.conyuge_correo) {
        this.objetivos.push({
          data: this.credito.datos_personas_morales.representante_legal.conyuge_correo,
          label: "RL CONYUGE"
        });
      }
      if (this.credito.datos_personales) {
        this.objetivos.push({
          data: this.credito.datos_personales.email,
          label: "AVAL"
        });
      }
      if (this.credito.datos_personales) {
        this.objetivos.push({
          data: this.credito.datos_personales.conyuge_correo,
          label: "AVAL C\xD3NYUGUE"
        });
      }
      this.objetivos = [
        ...this.objetivos,
        ...yield this.objetivosByModalidad("CORREO ELECTRONICO")
      ];
    });
  }
  setOtrosObjetivos() {
    return __async(this, null, function* () {
      this.objetivos = yield this.objetivosByModalidad("OTRO");
    });
  }
  objetivosByModalidad(modalidad) {
    return __async(this, null, function* () {
      return (yield this.cobroObjetivoController.all({
        conditionals: {
          modalidad,
          deleted_at: null
        },
        relations: ["creditoEventosCobros"],
        advancedSearch: [
          {
            relation: "creditoEventosCobros",
            conditionals: [],
            andConditionals: [
              ["credito_id", "=", this.credito?.id]
            ]
          }
        ],
        loader: false
      })).map((obj) => ({ data: obj.objetivo, label: obj.detalle }));
    });
  }
  /**
   * Suscribe a los cambios en los parámetros de la ruta y carga el evento de cobro si existe.
   */
  subscribeToRouteParams() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const eventId = this.getEventIdFromParams(params);
      if (eventId) {
        yield this.loadEvento(eventId);
        yield this.loadCredito();
        this.setObjetivos();
      }
    }));
  }
  loadCredito() {
    return __async(this, null, function* () {
      if (this.evento) {
        this.credito = yield this.creditoController.find(this.evento.credito_id, ["*"]);
      }
    });
  }
  /**
   * Obtiene el ID del evento de cobro de los parámetros de la ruta.
   * @param params - Mapa de parámetros de la ruta.
   * @returns El ID del evento de cobro o null si no es válido.
   */
  getEventIdFromParams(params) {
    return this.utils.intOrNull(params.get("credito_evento_cobro_id"));
  }
  /**
   * Carga el evento de cobro desde el servicio.
   * @param eventId - ID del evento de cobro a cargar.
   */
  loadEvento(eventId) {
    return __async(this, null, function* () {
      this.evento = yield this.cobroController.find(eventId, ["*"]);
      if (this.evento) {
        this.evento.fecha = this.evento.fecha?.substring(0, 10) ?? "";
      }
    });
  }
  isFormValid() {
    return !(!this.evento?.comentario || !this.evento?.fecha || !this.evento?.objetivo && this.objetivos.length || this.showForm || !this.asignacionCompletada && this.eventoCobroAsignaciones.length);
  }
  /**
   * Método que se ejecuta al enviar el formulario.
   * Ejecuta el cobro del evento y emite un evento para notificar que se ha guardado.
   */
  submit() {
    return __async(this, null, function* () {
      if (!this.evento)
        return;
      if (!this.asignacionCompletada && this.eventoCobroAsignaciones.length)
        return;
      if (!this.evento.nombre_usuario) {
        this.evento.nombre_usuario = this.storage.getUser().nombre + " " + this.storage.getUser().apellido_paterno + " " + this.storage.getUser().apellido_materno;
      }
      const res = yield this.cobroController.createOrUpdate(this.evento);
      if (res && this.eventoObjetivoToCreate.length > 0) {
        this.eventoObjetivoToCreate.forEach((obj) => obj.evento_cobro_id = res.id);
        yield this.cobroObjetivoController.multipleNews(this.eventoObjetivoToCreate);
      }
      if (res) {
        if (this.fileInput && this.fileInput.file) {
          this.fileInput.formExtra = {
            id: res.id
          };
          const fileRes = yield this.fileInput.upload();
          if (!fileRes)
            return;
        }
        if (this.asignacionCompletada) {
          yield this.eventoCobroAsignacionController.marcarAsignacionCompletada(res, this.asignacionCompletada);
        }
      }
      this.evento.usuarios = this.storage.getUser();
      this.notifySave();
    });
  }
  /**
   * Notifica que el evento ha sido guardado emitiendo un evento.
   */
  notifySave() {
    this.onSaved.emit();
  }
};
_EjecucionCobroComponent.\u0275fac = function EjecucionCobroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EjecucionCobroComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(CreditoEventoCobroService), \u0275\u0275directiveInject(EventoCobroObjetivoService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(EventoCobroAsignacionService));
};
_EjecucionCobroComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EjecucionCobroComponent, selectors: [["app-ejecucion-cobro"]], viewQuery: function EjecucionCobroComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, inputs: { evento: "evento", credito: "credito", div: "div" }, outputs: { onSaved: "onSaved" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["fileInput", ""], [1, "p-3", "bg-white", "rounded-3", "shadow", "border"], [1, "text-primary", "mb-3"], [1, "bi", "bi-journal-check", "me-2"], [1, "fw-semibold"], [1, "text-secondary", "fw-medium", "mb-3"], [1, "bi", "bi-clipboard-check", "me-1"], [1, "my-3"], [1, "mb-4"], [1, "row", "g-2", "align-items-center"], [1, "col-12", "col-md-5"], [1, "form-label", "fw-semibold", "small", "text-dark"], [1, "bi", "bi-list-check", "me-1"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "col-12", "col-md-4"], [1, "bi", "bi-calendar-check", "me-1"], ["type", "date", 1, "form-control", "form-select-sm", 3, "ngModelChange", "ngModel"], [1, "col-12", "col-md-3"], [1, "bi", "bi-file-earmark-text", "me-1"], ["apiUrl", "api/files/cobranza/documento/save", "key", "document", "divClass", "w-100", 3, "urlChange", "sm", "automaticSave", "showButton", "formExtra", "url", "showSimpleDownload"], [1, "form-label", "fw-semibold", "text-dark"], [1, "bi", "bi-chat-left-text", "me-1"], ["rows", "3", "placeholder", "Describe el resultado de la gesti\xF3n...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-center", "mt-3"], ["type", "button", 1, "btn", "btn-primary", "px-5", "py-2", 3, "click", "disabled"], [1, "bi", "bi-save", "me-2"], [1, "form-label", "fw-bold", "text-secondary", "mb-2"], [1, "bi", "bi-target", "me-1"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "d-flex", "align-items-center", "gap-1", "px-3", "py-2", 3, "active"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "d-flex", "align-items-center", "gap-1", "px-3", 3, "click"], [1, "bi", "bi-plus-circle"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", "d-flex", "align-items-center", "gap-1", "px-3", "py-2", 3, "click"], [1, "bi", "bi-check-circle-fill"], [1, "card", "border-primary", "shadow-sm", "mb-4", "animate-fade-in"], [1, "card-header", "bg-primary", "text-white", "py-2"], [1, "mb-0"], [1, "bi", "bi-clipboard", "me-1"], [1, "card-body", "p-3"], [1, "form-floating", "mb-3"], ["id", "floatingTextarea", 1, "form-control", 2, "height", "100px", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "floatingTextarea"], [1, "input-group"], [1, "input-group-text"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-floppy", "me-1"], [1, "form-label", "fw-bold", "text-secondary", "mb-2", "d-block"], [1, "bi", "bi-check2-circle", "me-1", "text-primary"], [1, "border", "rounded", "overflow-hidden"], [1, "d-flex", "align-items-center", "p-2", "border-bottom", "pointer", "hover-bg-light", 3, "bg-secondary", "text-bg-secondary"], ["role", "alert", 1, "alert", "alert-success", "p-2", "mt-2", "d-flex", "align-items-center", "small"], [1, "d-flex", "align-items-center", "p-2", "border-bottom", "pointer", "hover-bg-light", 3, "click"], [1, "me-3", "text-center", 2, "min-width", "32px"], [1, "bi", "bi-check-circle-fill", "text-primary", "fs-5"], [1, "bi", "bi-circle", "text-muted", "fs-6"], [1, "flex-grow-1"], [1, "badge", "bg-primary", "text-bg-primary", "ms-2"], [1, "d-block", "mt-1"], [1, "text-end", 2, "min-width", "180px"], [1, "d-block", "fw-medium", "text-uppercase"], [1, "bi", "bi-check-circle", "me-2"]], template: function EjecucionCobroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EjecucionCobroComponent_Conditional_0_Template, 58, 16, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.evento ? 0 : -1);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, FileInputComponent], styles: ["\n\n.hover-shadow-sm[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.hover-shadow-sm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=ejecucion-cobro.component.css.map */"] });
var EjecucionCobroComponent = _EjecucionCobroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EjecucionCobroComponent, [{
    type: Component,
    args: [{ selector: "app-ejecucion-cobro", imports: [
      FormsModule,
      FileInputComponent
    ], template: `@if (evento) {
<div class="p-3 bg-white rounded-3 shadow border">
  <!-- Encabezado -->
  <h5 class="text-primary mb-3">
    <i class="bi bi-journal-check me-2"></i>
    Ejecuci\xF3n de Cobranza - <span class="fw-semibold">{{ evento.modalidad }}</span>
  </h5>

  <p class="text-secondary fw-medium mb-3">
    <i class="bi bi-clipboard-check me-1"></i>
    Resultado de la gesti\xF3n
  </p>
  <hr class="my-3" />

  <!-- Secci\xF3n: Resultado y Fecha -->
  <div class="mb-4">
    <div class="row g-2 align-items-center">
      <!-- Resultado -->
      <div class="col-12 col-md-5">
        <label class="form-label fw-semibold small text-dark">
          <i class="bi bi-list-check me-1"></i>
          Resultado
        </label>
        <select class="form-select form-select-sm" [(ngModel)]="evento.resultado">
          <option>NO REALIZADO</option>
          <option>NO LOCALIZADO</option>
          <option>LOCALIZADO</option>
          <option>PROMESA DE PAGO</option>
          <option>CONVENIO CON ADEUDO</option>
          <option>CONVENIO AL CORRIENTE</option>
          <option>LIQUIDADO</option>
          <option>DEFUNCION</option>
          <option>OTRO</option>
        </select>
      </div>

      <!-- Fecha -->
      <div class="col-12 col-md-4">
        <label class="form-label fw-semibold small text-dark">
          <i class="bi bi-calendar-check me-1"></i>
          Fecha
        </label>
        <input class="form-control form-select-sm" type="date" [(ngModel)]="evento.fecha" />
      </div>

      <!-- Documento -->
      <div class="col-12 col-md-3">
        <label class="form-label fw-semibold small text-dark">
          <i class="bi bi-file-earmark-text me-1"></i>
          Documento
        </label>
        <app-file-input #fileInput apiUrl="api/files/cobranza/documento/save" key="document" [sm]="true"
          [automaticSave]="false" [showButton]="false" [formExtra]="{ id: evento.id }" [(url)]="evento.documento_url"
          [showSimpleDownload]="true" divClass="w-100" />
      </div>
    </div>
  </div>

  <!-- Objetivos (solo si no es "OTRO") -->
  @if (evento.modalidad !== 'OTRO') {
  <div class="mb-4">
    <label class="form-label fw-bold text-secondary mb-2">
      <i class="bi bi-target me-1"></i>
      {{ titleObjetivo }} (selecciona uno)
    </label>

    <div class="d-flex flex-wrap gap-2">
      @for (objetivo of objetivos; track objetivo) {
      <button type="button" class="btn btn-outline-primary btn-sm d-flex align-items-center gap-1 px-3 py-2"
        [class.active]="objetivo.isSelected" (click)="selectObjetivo(objetivo)">
        @if (objetivo.isSelected) {
        <i class="bi bi-check-circle-fill"></i>
        }
        <span><b>{{ objetivo.data }}</b> ({{ objetivo.label }})</span>
      </button>
      }

      <!-- Bot\xF3n para nuevo objetivo -->
      <button type="button" class="btn btn-primary btn-sm d-flex align-items-center gap-1 px-3"
        (click)="nuevoObjetivo()">
        <i class="bi bi-plus-circle"></i>
        <span>Nuevo</span>
      </button>
    </div>
  </div>
  }

  <!-- Formulario din\xE1mico -->
  @if (showForm) {
  @for (form of formularios; track form) {
  @if (evento.modalidad === form.modalidad) {
  <div class="card border-primary shadow-sm mb-4 animate-fade-in">
    <div class="card-header bg-primary text-white py-2">
      <h6 class="mb-0"><i class="bi bi-clipboard me-1"></i> {{ form.titulo }}</h6>
    </div>
    <div class="card-body p-3">
      <!-- Objetivo -->
      <div class="form-floating mb-3">
        <textarea class="form-control" id="floatingTextarea" [(ngModel)]="objetivoForm.objetivo"
          placeholder="{{ form.objetivo }}" style="height: 100px"></textarea>
        <label for="floatingTextarea">{{ form.objetivo }}</label>
      </div>

      <!-- Detalle y bot\xF3n -->
      <div class="input-group">
        <span class="input-group-text">{{ form.detalle }}</span>
        <input type="text" class="form-control" [(ngModel)]="objetivoForm.detalle" />
        <button class="btn btn-success" (click)="saveObjetivo(form.modalidad)">
          <i class="bi bi-floppy me-1"></i> Guardar
        </button>
      </div>
    </div>
  </div>
  }
  }
  }

  <!-- Comentarios -->
  <div class="mb-4">
    <label class="form-label fw-semibold text-dark">
      <i class="bi bi-chat-left-text me-1"></i>
      Comentarios
    </label>
    <textarea class="form-control" rows="3" placeholder="Describe el resultado de la gesti\xF3n..."
      [(ngModel)]="evento.comentario"></textarea>
  </div>

  @if (eventoCobroAsignaciones.length) {
  <div class="mb-4">
    <!-- T\xEDtulo -->
    <label class="form-label fw-bold text-secondary mb-2 d-block">
      <i class="bi bi-check2-circle me-1 text-primary"></i>
      Selecciona la asignaci\xF3n a marcar como completada
    </label>

    <!-- Lista compacta de asignaciones -->
    <div class="border rounded overflow-hidden">
      @for (asignacion of eventoCobroAsignaciones; track asignacion.id) {
      <div class="d-flex align-items-center p-2 border-bottom pointer hover-bg-light"
        [class.bg-secondary]="asignacionCompletada?.id === asignacion.id"
        [class.text-bg-secondary]="asignacionCompletada?.id === asignacion.id" (click)="asignacionCompletada = asignacion">
        <!-- Check o \xEDcono -->
        <div class="me-3 text-center" style="min-width: 32px;">
          @if (asignacionCompletada?.id === asignacion.id) {
          <i class="bi bi-check-circle-fill text-primary fs-5"></i>
          } @else {
          <i class="bi bi-circle text-muted fs-6"></i>
          }
        </div>

        <!-- Fecha -->
        <div class="flex-grow-1">
          <div>
            <strong>{{ utils.fechaFormateada(asignacion.fecha) }}</strong>
            <span class="badge bg-primary text-bg-primary ms-2">{{ asignacion.modalidad }}</span>
          </div>
          <small class="d-block mt-1">
            <i class="bi bi-chat-left-text me-1"></i>
            {{ asignacion.comentarios || 'Sin comentarios' }}
          </small>
        </div>

        <!-- Asignado por -->
        <div class="text-end" style="min-width: 180px;">
          <small class="d-block fw-medium text-uppercase">
            {{ (asignacion.usuarios || asignacion.usuarios)?.nombre }}
            {{ (asignacion.usuarios || asignacion.usuarios)?.apellido_paterno }}
          </small>
          <small>Asignado por</small>
        </div>
      </div>
      }
    </div>

    <!-- Confirmaci\xF3n (opcional, puedes quitarla si es muy redundante) -->
    @if (asignacionCompletada) {
    <div class="alert alert-success p-2 mt-2 d-flex align-items-center small" role="alert">
      <i class="bi bi-check-circle me-2"></i>
      Asignaci\xF3n del <strong>{{ utils.fechaFormateada(asignacionCompletada.fecha) }}</strong> seleccionada.
    </div>
    }
  </div>
  }

  <!-- Bot\xF3n principal -->
  <div class="text-center mt-3">
    <button type="button" class="btn btn-primary px-5 py-2" [disabled]="!isFormValid()" (click)="submit()">
      <i class="bi bi-save me-2"></i>
      Guardar Gesti\xF3n
    </button>
  </div>
</div>
}`, styles: ["/* src/app/main/cobranza/ejecucion-cobro/ejecucion-cobro.component.css */\n.hover-shadow-sm {\n  transition: all 0.2s ease;\n}\n.hover-shadow-sm:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.animate-fade-in {\n  animation: fadeIn 0.3s ease-in;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=ejecucion-cobro.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }, { type: CreditoEventoCobroService }, { type: EventoCobroObjetivoService }, { type: UtilsService }, { type: ActivatedRoute }, { type: LocalStorageService }, { type: EventoCobroAsignacionService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], evento: [{
    type: Input
  }], credito: [{
    type: Input
  }], div: [{
    type: Input
  }], onSaved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EjecucionCobroComponent, { className: "EjecucionCobroComponent", filePath: "src/app/main/cobranza/ejecucion-cobro/ejecucion-cobro.component.ts", lineNumber: 60 });
})();

export {
  CreditoEventoCobroService,
  EventoCobroAsignacionUsuarioService,
  EventoCobroAsignacionService,
  EjecucionCobroComponent
};
//# sourceMappingURL=chunk-2FRR3TXC.js.map
