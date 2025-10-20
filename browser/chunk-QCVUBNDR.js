import {
  CreditoAbonoService
} from "./chunk-BI6X3YJ4.js";
import {
  COBRANZA_COLUMNS_CLUSTERS,
  DatesPickerComponent,
  InformeCobranzaService
} from "./chunk-USH5HIOA.js";
import {
  contratoNotificaciones
} from "./chunk-EZXCAMML.js";
import {
  GraphsViewComponent,
  InformeTablaDinamicaLocalComponent,
  ProgressBarConsolidadoComponent
} from "./chunk-HEFVS2VO.js";
import "./chunk-6DPENKFB.js";
import {
  FormVerificacionesCreditoComponent
} from "./chunk-N2JP6I57.js";
import "./chunk-QEZJJX3N.js";
import {
  CreditoEventoCobroService,
  EjecucionCobroComponent,
  EventoCobroAsignacionService,
  EventoCobroAsignacionUsuarioService
} from "./chunk-2FRR3TXC.js";
import "./chunk-BBNJFIFW.js";
import "./chunk-3HCUHHOO.js";
import {
  BuscadorCreditosService
} from "./chunk-MJF6VG42.js";
import {
  UsuarioService
} from "./chunk-P72Q77JD.js";
import "./chunk-LROCG2JY.js";
import {
  CreditoService,
  EstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import "./chunk-OVQMISGM.js";
import "./chunk-ITPEKJSE.js";
import "./chunk-SDTK5VY4.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import "./chunk-MLBICDWK.js";
import "./chunk-NXIA6ZMF.js";
import "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import "./chunk-XRNE7EBS.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import "./chunk-M5W5QKXE.js";
import "./chunk-PMGWFFGK.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  UpperCasePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵinterpolate3,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/main/cobranza/asignacion-gestiones/asignacion-gestiones.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AsignacionGestionesComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 12)(1, "div", 40)(2, "input", 41);
    \u0275\u0275listener("change", function AsignacionGestionesComponent_For_19_Template_input_change_2_listener() {
      const usuario_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleUsuario(usuario_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const usuario_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", usuario_r2.id)("checked", ctx_r2.isSelected(usuario_r2));
    \u0275\u0275advance();
    \u0275\u0275property("for", usuario_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", usuario_r2.nombre, " ", usuario_r2.apellido_paterno, " ", usuario_r2.apellido_materno, " ");
  }
}
function AsignacionGestionesComponent_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Ningun usuario seleccionado, escriba un nombre para filtrar usuarios.");
    \u0275\u0275elementEnd();
  }
}
var _AsignacionGestionesComponent = class _AsignacionGestionesComponent {
  constructor() {
    this.show = false;
    this.showChange = new EventEmitter();
    this.selected = [];
    this.done = new EventEmitter();
    this.usuarios = [];
    this.selectedUsuarios = [];
    this.fechaAsignacion = "";
    this.modalidad = "LLAMADA";
    this.comentario = "";
    this.filtroUsuarios = "";
    this.usuariosFiltrados = [];
    this.usuarioController = inject(UsuarioService);
    this.utils = inject(UtilsService);
    this.eventoCobroAsignacionController = inject(EventoCobroAsignacionService);
    this.eventoCobroAsignacionUsuarioController = inject(EventoCobroAsignacionUsuarioService);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.setUsuarios();
      this.filtrarUsuarios();
    });
  }
  ngOnChanges(changes) {
    if (changes["show"] && this.show) {
      this.refreshData();
    }
  }
  filtrarUsuarios() {
    const term = this.filtroUsuarios.toLowerCase().trim();
    if (!term) {
      this.usuariosFiltrados = [...this.selectedUsuarios];
    } else {
      this.usuariosFiltrados = this.usuarios.filter((usuario) => `${usuario.nombre} ${usuario.apellido_paterno} ${usuario.apellido_materno}`.toLowerCase().includes(term) || this.selectedUsuarios.find((u) => u.id === usuario.id));
    }
  }
  refreshData() {
    this.fechaAsignacion = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.comentario = "";
  }
  setUsuarios() {
    return __async(this, null, function* () {
      this.usuarios = yield this.usuarioController.usuariosEjecutivosCobranza();
    });
  }
  toggleUsuario(usuario) {
    const index = this.selectedUsuarios.findIndex((u) => u.id === usuario.id);
    if (index > -1) {
      this.selectedUsuarios.splice(index, 1);
    } else {
      this.selectedUsuarios.push(usuario);
    }
  }
  isSelected(usuario) {
    return this.selectedUsuarios.some((u) => u.id === usuario.id);
  }
  get totalCreditos() {
    return this.selected.length;
  }
  get montoRecuperado() {
    return this.selected.reduce((sum, cred) => sum + (parseFloat(cred["MONTO RECUPERADO"]) || 0), 0);
  }
  get montoPorRecuperar() {
    return this.selected.reduce((sum, cred) => sum + (parseFloat(cred["MONTO POR RECUPERAR"]) || 0), 0);
  }
  get promedioMensualidadesVencidas() {
    const total = this.selected.reduce((sum, cred) => sum + (parseInt(cred["MENSUALIDADES VENCIDAS"]) || 0), 0);
    return this.selected.length ? total / this.selected.length : 0;
  }
  aceptar() {
    return __async(this, null, function* () {
      const now = (/* @__PURE__ */ new Date()).toISOString();
      const asignaciones = this.selected.map((row) => ({
        credito_id: +row["ID CREDITO"],
        fecha: this.fechaAsignacion.substring(0, 10),
        comentarios: this.comentario,
        modalidad: this.modalidad,
        created_at: this.utils.toMySQLDateTime(now)
      }));
      const res = yield this.eventoCobroAsignacionController.multipleNews(asignaciones);
      if (!res)
        return;
      const asignacionesCreadas = yield this.eventoCobroAsignacionController.all({
        conditionals: [
          {
            key: "credito_id",
            operator: "IN",
            value: this.selected.map((c) => +c["ID CREDITO"]).join(",")
          },
          {
            key: "created_at",
            operator: "=",
            value: this.utils.toMySQLDateTime(now)
          }
        ],
        advancedSearch: [
          {
            relation: "eventoCobroAsignacionUsuarios",
            conditionals: [],
            andConditionals: [],
            operator: "=",
            count: 0
          }
        ],
        relations: ["eventoCobroAsignacionUsuarios"]
      });
      const asignacionesUsuarios = [];
      for (const asignacion of asignacionesCreadas) {
        asignacionesUsuarios.push(...this.selectedUsuarios.map((usuario) => ({
          evento_cobro_asignacion_id: asignacion.id,
          usuario_asignado_id: usuario.id,
          created_at: this.utils.toMySQLDateTime(now)
        })));
      }
      const res2 = this.eventoCobroAsignacionUsuarioController.multipleNews(asignacionesUsuarios);
      if (!res2)
        return;
      this.show = false;
      this.showChange.emit(this.show);
      this.done.emit();
    });
  }
};
_AsignacionGestionesComponent.\u0275fac = function AsignacionGestionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AsignacionGestionesComponent)();
};
_AsignacionGestionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AsignacionGestionesComponent, selectors: [["app-asignacion-gestiones"]], inputs: { show: "show", selected: "selected" }, outputs: { showChange: "showChange", done: "done" }, features: [\u0275\u0275NgOnChangesFeature], decls: 82, vars: 20, consts: [["size", "medium", 3, "showChange", "show"], [1, "container", "px-3", "pb-3"], [1, "mb-4", "text-primary", "fw-semibold"], [1, "mb-3"], [1, "form-label", "fw-bold"], [1, "input-group", "mb-2"], [1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "placeholder", "Buscar por nombre o apellido...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "text-muted"], [1, "border", "rounded", "mb-4", 2, "max-height", "300px", "overflow-y", "auto"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "align-items-center", "py-2", "px-3"], [1, "text-center", "py-3", "text-muted"], [1, "container-fluid", "p-3", "rounded", "border", "my-2"], [1, "row"], [1, "col-12", "col-md-6", "p-3"], [1, "form-label", "fw-semibold"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", 3, "ngModelChange", "ngModel"], [1, "col-12", "p-3"], ["rows", "2", "placeholder", "Agrega un comentario opcional...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "card", "border-light", "shadow-sm", "mb-3"], [1, "card-header", "bg-white", "py-2"], [1, "mb-0", "text-secondary"], [1, "bi", "bi-clipboard-data", "me-1"], [1, "card-body"], [1, "row", "text-center", "g-3"], [1, "col-6", "col-md-3"], [1, "mb-1", "text-muted", "small"], [1, "text-primary", "fs-5", "mb-0", "fw-bold"], [1, "text-success", "fs-5", "mb-0", "fw-bold"], [1, "text-danger", "fs-5", "mb-0", "fw-bold"], [1, "text-secondary", "fs-5", "mb-0", "fw-bold"], [1, "my-3"], [1, "text-center"], [1, "fs-5", "mb-0", "fw-semibold"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-success", "px-4", "py-2", 3, "click", "disabled"], [1, "bi", "bi-check-circle", "me-1"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", "me-2", 3, "change", "id", "checked"], [1, "form-check-label", "fw-normal", "text-uppercase", "pointer", 3, "for"]], template: function AsignacionGestionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function AsignacionGestionesComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function AsignacionGestionesComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      return ctx.showChange.emit($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "h4", 2);
    \u0275\u0275text(3, "Asignar cr\xE9ditos a ejecutivos de cobranza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "label", 4);
    \u0275\u0275text(6, "Selecciona los ejecutivos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function AsignacionGestionesComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.filtroUsuarios, $event) || (ctx.filtroUsuarios = $event);
      return $event;
    });
    \u0275\u0275listener("input", function AsignacionGestionesComponent_Template_input_input_10_listener() {
      return ctx.filtrarUsuarios();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "small", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " seleccionados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 11);
    \u0275\u0275repeaterCreate(18, AsignacionGestionesComponent_For_19_Template, 5, 6, "label", 12, _forTrack0, false, AsignacionGestionesComponent_ForEmpty_20_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "label", 17);
    \u0275\u0275text(25, "Fecha de asignaci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AsignacionGestionesComponent_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fechaAsignacion, $event) || (ctx.fechaAsignacion = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 16)(28, "label", 17);
    \u0275\u0275text(29, "Modalidad:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AsignacionGestionesComponent_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.modalidad, $event) || (ctx.modalidad = $event);
      return $event;
    });
    \u0275\u0275elementStart(31, "option");
    \u0275\u0275text(32, "LLAMADA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option");
    \u0275\u0275text(34, "NOTIFICACION DOMICILIARIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option");
    \u0275\u0275text(36, "CORREO ELECTRONICO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option");
    \u0275\u0275text(38, "OTRO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 20)(40, "label", 17);
    \u0275\u0275text(41, "Comentario (opcional):");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AsignacionGestionesComponent_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.comentario, $event) || (ctx.comentario = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 22)(44, "div", 23)(45, "h6", 24);
    \u0275\u0275element(46, "i", 25);
    \u0275\u0275text(47, " Resumen de cr\xE9ditos seleccionados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 26)(49, "div", 27)(50, "div", 28)(51, "p", 29);
    \u0275\u0275text(52, "Total cr\xE9ditos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 30);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 28)(56, "p", 29);
    \u0275\u0275text(57, "Monto recuperado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 31);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 28)(62, "p", 29);
    \u0275\u0275text(63, "Por recuperar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 32);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 28)(68, "p", 29);
    \u0275\u0275text(69, "Ejecutivos Asignados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 33);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(72, "hr", 34);
    \u0275\u0275elementStart(73, "div", 35)(74, "p", 29);
    \u0275\u0275text(75, "Promedio mensualidades vencidas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 36);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(78, "div", 37)(79, "button", 38);
    \u0275\u0275listener("click", function AsignacionGestionesComponent_Template_button_click_79_listener() {
      return ctx.aceptar();
    });
    \u0275\u0275element(80, "i", 39);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.filtroUsuarios);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx.usuariosFiltrados.length, " de ", ctx.usuarios.length, " usuarios | ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.selectedUsuarios.length);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.usuariosFiltrados);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaAsignacion);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.modalidad);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.comentario);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx.totalCreditos);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 16, ctx.montoRecuperado));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 18, ctx.montoPorRecuperar));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.selectedUsuarios.length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.promedioMensualidadesVencidas);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.selectedUsuarios.length === 0 || !ctx.fechaAsignacion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Aceptar (", ctx.selectedUsuarios.length, ") ");
  }
}, dependencies: [
  FormularioFlotanteComponent,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  CurrencyPipe
], styles: ["\n\n.list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n/*# sourceMappingURL=asignacion-gestiones.component.css.map */"] });
var AsignacionGestionesComponent = _AsignacionGestionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsignacionGestionesComponent, [{
    type: Component,
    args: [{ selector: "app-asignacion-gestiones", imports: [
      FormularioFlotanteComponent,
      FormsModule,
      CurrencyPipe
    ], template: '<app-formulario-flotante [(show)]="show" (showChange)="showChange.emit($event)" size="medium">\n    <div class="container px-3 pb-3">\n        <h4 class="mb-4 text-primary fw-semibold">Asignar cr\xE9ditos a ejecutivos de cobranza</h4>\n\n        <!-- Filtro de usuarios -->\n        <div class="mb-3">\n            <label class="form-label fw-bold">Selecciona los ejecutivos:</label>\n            <div class="input-group mb-2">\n                <span class="input-group-text">\n                    <i class="bi bi-search"></i>\n                </span>\n                <input type="text" class="form-control" placeholder="Buscar por nombre o apellido..."\n                    [(ngModel)]="filtroUsuarios" (input)="filtrarUsuarios()" />\n            </div>\n\n            <!-- Contador de seleccionados -->\n            <small class="text-muted">\n                {{ usuariosFiltrados.length }} de {{ usuarios.length }} usuarios |\n                <strong>{{ selectedUsuarios.length }}</strong> seleccionados\n            </small>\n        </div>\n\n        <!-- Lista de usuarios con scroll -->\n        <div class="border rounded mb-4" style="max-height: 300px; overflow-y: auto;">\n            <div class="list-group list-group-flush">\n                @for (usuario of usuariosFiltrados; track usuario.id) {\n                <label class="list-group-item d-flex align-items-center py-2 px-3">\n                    <div class="form-check">\n                        <input class="form-check-input me-2" type="checkbox" [id]="usuario.id"\n                            [checked]="isSelected(usuario)" (change)="toggleUsuario(usuario)" />\n                        <label class="form-check-label fw-normal text-uppercase pointer" [for]="usuario.id">\n                            {{ usuario.nombre }} {{ usuario.apellido_paterno }} {{ usuario.apellido_materno }}\n                        </label>\n                    </div>\n                </label>\n                }\n                @empty {\n                <div class="text-center py-3 text-muted">Ningun usuario seleccionado, escriba un nombre para filtrar\n                    usuarios.</div>\n                }\n            </div>\n        </div>\n\n        <!-- Fecha y comentario -->\n        <div class="container-fluid p-3 rounded border my-2">\n            <div class="row">\n                <div class="col-12 col-md-6 p-3">\n                    <label class="form-label fw-semibold">Fecha de asignaci\xF3n:</label>\n                    <input type="date" class="form-control" [(ngModel)]="fechaAsignacion" />\n                </div>\n                <div class="col-12 col-md-6 p-3">\n                    <label class="form-label fw-semibold">Modalidad:</label>\n                    <select class="form-select" [(ngModel)]="modalidad">\n                        <option>LLAMADA</option>\n                        <option>NOTIFICACION DOMICILIARIA</option>\n                        <option>CORREO ELECTRONICO</option>\n                        <option>OTRO</option>\n                    </select>\n                </div>\n                <div class="col-12 p-3">\n                    <label class="form-label fw-semibold">Comentario (opcional):</label>\n                    <textarea class="form-control" rows="2" placeholder="Agrega un comentario opcional..."\n                        [(ngModel)]="comentario"></textarea>\n                </div>\n            </div>\n        </div>\n\n        <!-- Resumen de cr\xE9ditos -->\n        <div class="card border-light shadow-sm mb-3">\n            <div class="card-header bg-white py-2">\n                <h6 class="mb-0 text-secondary"><i class="bi bi-clipboard-data me-1"></i> Resumen de cr\xE9ditos\n                    seleccionados</h6>\n            </div>\n            <div class="card-body">\n                <div class="row text-center g-3">\n                    <div class="col-6 col-md-3">\n                        <p class="mb-1 text-muted small">Total cr\xE9ditos</p>\n                        <p class="text-primary fs-5 mb-0 fw-bold">{{ totalCreditos }}</p>\n                    </div>\n                    <div class="col-6 col-md-3">\n                        <p class="mb-1 text-muted small">Monto recuperado</p>\n                        <p class="text-success fs-5 mb-0 fw-bold">{{ montoRecuperado | currency }}</p>\n                    </div>\n                    <div class="col-6 col-md-3">\n                        <p class="mb-1 text-muted small">Por recuperar</p>\n                        <p class="text-danger fs-5 mb-0 fw-bold">{{ montoPorRecuperar | currency }}</p>\n                    </div>\n                    <div class="col-6 col-md-3">\n                        <p class="mb-1 text-muted small">Ejecutivos Asignados</p>\n                        <p class="text-secondary fs-5 mb-0 fw-bold">{{ selectedUsuarios.length }}</p>\n                    </div>\n                </div>\n                <hr class="my-3" />\n                <div class="text-center">\n                    <p class="mb-1 text-muted small">Promedio mensualidades vencidas</p>\n                    <p class="fs-5 mb-0 fw-semibold">{{ promedioMensualidadesVencidas }}</p>\n                </div>\n            </div>\n        </div>\n\n        <!-- Bot\xF3n de acci\xF3n -->\n        <div class="d-flex justify-content-end">\n            <button class="btn btn-success px-4 py-2" [disabled]="selectedUsuarios.length === 0 || !fechaAsignacion"\n                (click)="aceptar()">\n                <i class="bi bi-check-circle me-1"></i>\n                Aceptar ({{ selectedUsuarios.length }})\n            </button>\n        </div>\n    </div>\n</app-formulario-flotante>', styles: ["/* src/app/main/cobranza/asignacion-gestiones/asignacion-gestiones.component.css */\n.list-group-item {\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.list-group-item:hover {\n  background-color: #f8f9fa;\n}\n/*# sourceMappingURL=asignacion-gestiones.component.css.map */\n"] }]
  }], null, { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], selected: [{
    type: Input
  }], done: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AsignacionGestionesComponent, { className: "AsignacionGestionesComponent", filePath: "src/app/main/cobranza/asignacion-gestiones/asignacion-gestiones.component.ts", lineNumber: 24 });
})();

// src/app/main/cobranza/creditos-atrasados/creditos-atrasados.component.ts
function CreditosAtrasadosComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-progress-bar-consolidado", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("isLoading", ctx_r1.isLoading)("progress", ctx_r1.progress)("dataLen", ctx_r1.dataSource.length);
  }
}
function CreditosAtrasadosComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 13)(2, "div", 14)(3, "div", 4)(4, "span", 15);
    \u0275\u0275element(5, "i", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18)(9, "div", 19)(10, "button", 20);
    \u0275\u0275listener("click", function CreditosAtrasadosComponent_Conditional_11_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showForm = true);
    });
    \u0275\u0275element(11, "i", 21);
    \u0275\u0275text(12, " Asignar Selecci\xF3n ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", ctx_r1.selected.length, " cr\xE9dito", ctx_r1.selected.length !== 1 ? "s" : "", " seleccionado", ctx_r1.selected.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.selected.length);
  }
}
var _CreditosAtrasadosComponent = class _CreditosAtrasadosComponent {
  constructor() {
    this.dataSource = [];
    this.columnsClusters = COBRANZA_COLUMNS_CLUSTERS;
    this.progress = 0;
    this.isLoading = true;
    this.showForm = false;
    this.selected = [];
    this.informeCobranzaController = inject(InformeCobranzaService);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.informeCobranzaController.progress$.subscribe((p) => {
        this.progress = p;
      });
      this.dataSource = yield this.informeCobranzaController.fetchDataMaped();
    });
  }
};
_CreditosAtrasadosComponent.\u0275fac = function CreditosAtrasadosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CreditosAtrasadosComponent)();
};
_CreditosAtrasadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreditosAtrasadosComponent, selectors: [["app-creditos-atrasados"]], decls: 15, vars: 7, consts: [["tabla", ""], [1, "container-fluid", "my-3"], [1, "card", "shadow", "border-0"], [1, "card-header", "bg-primary", "text-white", "py-3"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-wallet2", "me-3", "fs-4"], [1, "mb-0"], [1, "mb-0", "opacity-75", "small"], [1, "p-3"], [1, "px-3", "pt-3", "pb-0"], ["fileName", "informe_cobranza", 3, "selectedRows", "data", "clusterColumns", "useCheckBox", "tableHeight"], [3, "showChange", "done", "show", "selected"], [3, "isLoading", "progress", "dataLen"], [1, "row", "justify-content-between", "align-items-center", "p-3", "bg-light", "border", "rounded"], [1, "col-12", "col-sm-auto", "p-3"], [1, "badge", "bg-secondary", "fs-6"], [1, "bi", "bi-check-circle", "me-2"], [1, "col-12", "col-sm-auto", "p-1"], [1, "row", "justify-content-center"], [1, "col-auto"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-person-plus", "me-2"]], template: function CreditosAtrasadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275elementStart(5, "div")(6, "h4", 6);
    \u0275\u0275text(7, "Gesti\xF3n de Cartera Vencida");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9, "Seleccione cr\xE9ditos y as\xEDgnelos a ejecutivos de cobranza");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(10, CreditosAtrasadosComponent_Conditional_10_Template, 2, 3, "div", 8)(11, CreditosAtrasadosComponent_Conditional_11_Template, 13, 4, "div", 9);
    \u0275\u0275elementStart(12, "app-informe-tabla-dinamica-local", 10, 0);
    \u0275\u0275listener("selectedRows", function CreditosAtrasadosComponent_Template_app_informe_tabla_dinamica_local_selectedRows_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selected = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "app-asignacion-gestiones", 11);
    \u0275\u0275twoWayListener("showChange", function CreditosAtrasadosComponent_Template_app_asignacion_gestiones_showChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("done", function CreditosAtrasadosComponent_Template_app_asignacion_gestiones_done_14_listener() {
      \u0275\u0275restoreView(_r1);
      const tabla_r4 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(tabla_r4.cleanSelected());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!ctx.dataSource.length ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.dataSource)("clusterColumns", ctx.columnsClusters)("useCheckBox", true)("tableHeight", 600);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx.showForm);
    \u0275\u0275property("selected", ctx.selected);
  }
}, dependencies: [
  InformeTablaDinamicaLocalComponent,
  ProgressBarConsolidadoComponent,
  AsignacionGestionesComponent
], encapsulation: 2 });
var CreditosAtrasadosComponent = _CreditosAtrasadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreditosAtrasadosComponent, [{
    type: Component,
    args: [{ selector: "app-creditos-atrasados", imports: [
      InformeTablaDinamicaLocalComponent,
      ProgressBarConsolidadoComponent,
      AsignacionGestionesComponent
    ], template: `<div class="container-fluid my-3">
    <div class="card shadow border-0">
        <div class="card-header bg-primary text-white py-3">
            <div class="d-flex align-items-center">
                <i class="bi bi-wallet2 me-3 fs-4"></i>
                <div>
                    <h4 class="mb-0">Gesti\xF3n de Cartera Vencida</h4>
                    <p class="mb-0 opacity-75 small">Seleccione cr\xE9ditos y as\xEDgnelos a ejecutivos de cobranza</p>
                </div>
            </div>
        </div>

        <!-- Progress bar -->
        @if (!dataSource.length) {
        <div class="p-3">
            <app-progress-bar-consolidado [isLoading]="isLoading" [progress]="progress"
                [dataLen]="dataSource.length"></app-progress-bar-consolidado>
        </div>
        }@else{
        <!-- Header de selecci\xF3n -->
        <div class="px-3 pt-3 pb-0">
            <div class="row justify-content-between align-items-center p-3 bg-light border rounded">
                <div class="col-12 col-sm-auto p-3">
                    <div class="d-flex align-items-center">
                        <span class="badge bg-secondary fs-6">
                            <i class="bi bi-check-circle me-2"></i>
                            {{selected.length}} cr\xE9dito{{selected.length !== 1 ? 's' : ''}}
                            seleccionado{{selected.length
                            !== 1 ? 's' : ''}}
                        </span>
                    </div>
                </div>
                <div class="col-12 col-sm-auto p-1">
                    <div class="row justify-content-center">
                        <div class="col-auto">
                            <button class="btn btn-primary" [disabled]="!selected.length" (click)="showForm=true">
                                <i class="bi bi-person-plus me-2"></i>
                                Asignar Selecci\xF3n
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }

        <!-- Tabla din\xE1mica -->
        <app-informe-tabla-dinamica-local #tabla [data]="dataSource" [clusterColumns]="columnsClusters"
            [useCheckBox]="true" [tableHeight]="600" (selectedRows)="selected=$event"
            fileName="informe_cobranza"></app-informe-tabla-dinamica-local>
    </div>
</div>

<app-asignacion-gestiones [(show)]="showForm" [selected]="selected"
    (done)="tabla.cleanSelected()"></app-asignacion-gestiones>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreditosAtrasadosComponent, { className: "CreditosAtrasadosComponent", filePath: "src/app/main/cobranza/creditos-atrasados/creditos-atrasados.component.ts", lineNumber: 18 });
})();

// src/app/main/cobranza/form-credito-cobro/form-credito-cobro.component.ts
function FormCreditoCobroComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "b");
    \u0275\u0275text(3, "Mensualidades atrasadas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.credito.estado_cuenta.mensualidades_vencidas);
  }
}
function FormCreditoCobroComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "app-autocomplete-field", 17);
    \u0275\u0275twoWayListener("valueChange", function FormCreditoCobroComponent_Conditional_33_Template_app_autocomplete_field_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoCobro.usuario_ejecutivo_id, $event) || (ctx_r0.nuevoCobro.usuario_ejecutivo_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inputGroup", true);
    \u0275\u0275twoWayProperty("value", ctx_r0.nuevoCobro.usuario_ejecutivo_id);
  }
}
var _FormCreditoCobroComponent = class _FormCreditoCobroComponent {
  constructor(utils, eventoCobroController, storage, router) {
    this.utils = utils;
    this.eventoCobroController = eventoCobroController;
    this.storage = storage;
    this.router = router;
    this.show = false;
    this.showChange = new EventEmitter();
    this.saved = new EventEmitter();
    this.asignarUsuario = "NO";
    this.nuevoCobro = {
      credito_id: 0,
      usuario_ejecutivo_id: 0,
      modalidad: "LLAMADA",
      resultado: "OTRO",
      comentario: "",
      usuario_id: 0,
      id: 0,
      fecha: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
      deleted_at: null,
      created_at: "",
      updated_at: null
    };
  }
  ngOnChanges(changes) {
    if (changes["show"] && this.show) {
      this.nuevoCobro = {
        credito_id: 0,
        usuario_ejecutivo_id: 0,
        modalidad: "LLAMADA",
        resultado: "OTRO",
        comentario: "",
        usuario_id: 0,
        id: 0,
        fecha: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
        deleted_at: null,
        created_at: "",
        updated_at: null
      };
    }
    if (changes["cobroEvento"] && this.cobroEvento) {
      this.nuevoCobro = this.cobroEvento;
      this.nuevoCobro.fecha = this.cobroEvento.fecha?.substring(0, 10) ?? null;
    }
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.credito)
        return;
      this.nuevoCobro.credito_id = this.credito.id;
      if (this.asignarUsuario === "NO") {
        this.nuevoCobro.usuario_ejecutivo_id = this.storage.getUser().id;
      }
      const res = yield this.eventoCobroController.createOrUpdate(this.nuevoCobro);
      console.log(res);
      if (res && this.asignarUsuario === "NO") {
        this.router.navigate(["/main/cobranza/ejecucion", res.id]);
        return;
      }
      this.saved.emit(true);
    });
  }
};
_FormCreditoCobroComponent.\u0275fac = function FormCreditoCobroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormCreditoCobroComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(CreditoEventoCobroService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(Router));
};
_FormCreditoCobroComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormCreditoCobroComponent, selectors: [["app-form-credito-cobro"]], inputs: { show: "show", credito: "credito", cobroEvento: "cobroEvento" }, outputs: { showChange: "showChange", saved: "saved" }, features: [\u0275\u0275NgOnChangesFeature], decls: 51, vars: 12, consts: [[3, "showChange", "show"], [1, "container", "p-3", "pt-0"], [1, "row", "justify-content-between"], [1, "col-auto"], [1, "row", "mt-2"], [1, "col-12", "col-sm", "text-center", "p-1"], [1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "input-group", "mt-2"], [1, "input-group-text"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "NO"], ["value", "SI"], [1, "row", "mt-4"], [1, "input-group", "mt-4"], ["disabled", "", 3, "value"], [1, "row", "px-3", "mt-4", "mb-3"], [1, "btn", "btn-primary", 3, "click"], ["label", "Selecciona un ejecutivo", "apiUrl", "api/usuarios_ejecutivos", "keyList", "id", "keyDetalle", "nombre", 3, "valueChange", "inputGroup", "value"]], template: function FormCreditoCobroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-formulario-flotante", 0);
    \u0275\u0275twoWayListener("showChange", function FormCreditoCobroComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275listener("showChange", function FormCreditoCobroComponent_Template_app_formulario_flotante_showChange_0_listener($event) {
      return ctx.showChange.emit($event);
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "h5")(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 2)(6, "div", 3)(7, "b");
    \u0275\u0275text(8, "Credito");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 3);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 2)(12, "div", 3)(13, "b");
    \u0275\u0275text(14, "Cliente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 3);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, FormCreditoCobroComponent_Conditional_17_Template, 6, 1, "div", 2);
    \u0275\u0275elementStart(18, "div", 4)(19, "div", 5)(20, "a", 6);
    \u0275\u0275text(21, "Ver Credito");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 5)(23, "a", 6);
    \u0275\u0275text(24, "Ver Edo. Cuenta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 7)(26, "label", 8);
    \u0275\u0275text(27, "\xBFDeseas asignar un ejecutivo?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function FormCreditoCobroComponent_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.asignarUsuario, $event) || (ctx.asignarUsuario = $event);
      return $event;
    });
    \u0275\u0275elementStart(29, "option", 10);
    \u0275\u0275text(30, "No, lo har\xE9 yo mismo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 11);
    \u0275\u0275text(32, "S\xED");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, FormCreditoCobroComponent_Conditional_33_Template, 2, 2, "div", 12);
    \u0275\u0275elementStart(34, "div", 13)(35, "label", 8);
    \u0275\u0275text(36, "Modalidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function FormCreditoCobroComponent_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.nuevoCobro.modalidad, $event) || (ctx.nuevoCobro.modalidad = $event);
      return $event;
    });
    \u0275\u0275elementStart(38, "option", 14);
    \u0275\u0275text(39, "Seleccione una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option");
    \u0275\u0275text(41, "LLAMADA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option");
    \u0275\u0275text(43, "NOTIFICACION DOMICILIARIA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option");
    \u0275\u0275text(45, "CORREO ELECTRONICO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option");
    \u0275\u0275text(47, "OTRO");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 15)(49, "button", 16);
    \u0275\u0275listener("click", function FormCreditoCobroComponent_Template_button_click_49_listener() {
      return ctx.submit();
    });
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx.cobroEvento ? "Editar" : "Nuevo", " Evento de Cobro");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.credito == null ? null : ctx.credito.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.utils.nombreClienteFromCredito(ctx.credito));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.credito && ctx.credito.estado_cuenta ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/main/creditos/validar/" + (ctx.credito == null ? null : ctx.credito.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/main/estado-cuenta/resume/" + (ctx.credito == null ? null : ctx.credito.id));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.asignarUsuario);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.asignarUsuario === "SI" ? 33 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.nuevoCobro.modalidad);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx.cobroEvento ? "Guardar Cambios" : "Realizar asignacion de cobro", " ");
  }
}, dependencies: [
  FormularioFlotanteComponent,
  RouterLink,
  AutocompleteFieldComponent,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var FormCreditoCobroComponent = _FormCreditoCobroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormCreditoCobroComponent, [{
    type: Component,
    args: [{ selector: "app-form-credito-cobro", imports: [
      FormularioFlotanteComponent,
      RouterLink,
      AutocompleteFieldComponent,
      FormsModule
    ], template: `<app-formulario-flotante [(show)]="show" (showChange)="showChange.emit($event)">
  <div class="container p-3 pt-0">
    <h5><b>{{cobroEvento?'Editar':'Nuevo'}} Evento de Cobro</b></h5>
    <div class="row justify-content-between">
      <div class="col-auto"><b>Credito</b></div>
      <div class="col-auto">{{credito?.id}}</div>
    </div>
    <div class="row justify-content-between">
      <div class="col-auto"><b>Cliente</b></div>
      <div class="col-auto">{{utils.nombreClienteFromCredito(credito)}}</div>
    </div>
    @if (credito && credito.estado_cuenta) {
      <div class="row justify-content-between">
        <div class="col-auto"><b>Mensualidades atrasadas</b></div>
        <div class="col-auto">{{credito.estado_cuenta.mensualidades_vencidas}}</div>
      </div>
    }
    <div class="row mt-2">
      <div class="col-12 col-sm text-center p-1">
        <a class="btn btn-sm btn-primary" [routerLink]="'/main/creditos/validar/'+credito?.id">Ver Credito</a>
      </div>
      <div class="col-12 col-sm text-center p-1">
        <a class="btn btn-sm btn-primary" [routerLink]="'/main/estado-cuenta/resume/'+credito?.id">Ver Edo. Cuenta</a>
      </div>
    </div>
    <div class="input-group mt-2">
      <label class="input-group-text">\xBFDeseas asignar un ejecutivo?</label>
      <select [(ngModel)]="asignarUsuario" class="form-select">
        <option value="NO">No, lo har\xE9 yo mismo</option>
        <option value="SI">S\xED</option>
      </select>
    </div>
    @if (asignarUsuario==='SI') {
      <div class="row mt-4">
        <app-autocomplete-field
          label="Selecciona un ejecutivo"
          apiUrl="api/usuarios_ejecutivos"
          keyList="id"
          keyDetalle="nombre"
          [inputGroup]="true"
          [(value)]="nuevoCobro.usuario_ejecutivo_id"
          />
      </div>
    }
    <div class="input-group mt-4">
      <label class="input-group-text">Modalidad</label>
      <select class="form-select" [(ngModel)]="nuevoCobro.modalidad">
        <option [value]="undefined" disabled>Seleccione una opci\xF3n</option>
        <option>LLAMADA</option>
        <option>NOTIFICACION DOMICILIARIA</option>
        <option>CORREO ELECTRONICO</option>
        <option>OTRO</option>
      </select>
    </div>
    <div class="row px-3 mt-4 mb-3">
      <button class="btn btn-primary" (click)="submit()">
        {{cobroEvento?'Guardar Cambios':'Realizar asignacion de cobro'}}
      </button>
    </div>
  </div>
</app-formulario-flotante>` }]
  }], () => [{ type: UtilsService }, { type: CreditoEventoCobroService }, { type: LocalStorageService }, { type: Router }], { show: [{
    type: Input
  }], showChange: [{
    type: Output
  }], credito: [{
    type: Input
  }], cobroEvento: [{
    type: Input
  }], saved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormCreditoCobroComponent, { className: "FormCreditoCobroComponent", filePath: "src/app/main/cobranza/form-credito-cobro/form-credito-cobro.component.ts", lineNumber: 24 });
})();

// src/app/main/cobranza/list-credito-cobros/tabla.eventos.cobranza.ts
var TABLA_DEF_COBRANZA_EVENTO = {
  columns: [
    {
      key: "credito_id",
      header: "Credito"
    },
    {
      key: "usuario_ejecutivo",
      subKey: "nombre",
      header: "Asignado A"
    },
    "modalidad",
    "resultado",
    "created_at"
  ]
};

// src/app/main/cobranza/list-credito-cobros/tabla.creditos.cobros.filtros.ts
var TABLA_COBROS_FILTROS_SIMPLES = [
  {
    key: "modalidad",
    label: "Modalidad",
    options: ["LLAMADA", "NOTIFICACION", "CORREO ELECTRONICO", "OTRO"],
    inputGroup: true
  },
  {
    key: "resultado",
    label: "Resultado",
    options: [
      "NO REALIZADO",
      "NO LOCALIZADO",
      "LOCALIZADO",
      "PROMESA DE PAGO",
      "CONVENIO CON ADEUDO",
      "CONVENIO AL CORRIENTE",
      "LIQUIDADO",
      "DEFUNCION",
      "OTRO"
    ],
    inputGroup: true
  }
];

// src/app/main/cobranza/list-credito-cobros/list-credito-cobros.component.ts
var _c0 = () => ({ filtro: "estado" });
var _c1 = () => ["usuarioEjecutivo"];
var _ListCreditoCobrosComponent = class _ListCreditoCobrosComponent {
  constructor(utils, route, cobroController, creditoController) {
    this.utils = utils;
    this.route = route;
    this.cobroController = cobroController;
    this.creditoController = creditoController;
    this.tabla = TABLA_DEF_COBRANZA_EVENTO;
    this.filtros = TABLA_COBROS_FILTROS_SIMPLES;
    this.conditionals = [];
    this.showForm = false;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.credito = yield this.creditoController.find(id);
        if (this.credito) {
          this.conditionals = [{
            key: "credito_id",
            operator: "=",
            value: this.credito.id
          }];
        }
      }
    }));
  }
  onEdit(row) {
    this.edit = row;
    this.showForm = true;
  }
  onAgregar() {
    this.edit = void 0;
    this.showForm = true;
  }
};
_ListCreditoCobrosComponent.\u0275fac = function ListCreditoCobrosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCreditoCobrosComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CreditoEventoCobroService), \u0275\u0275directiveInject(CreditoService));
};
_ListCreditoCobrosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCreditoCobrosComponent, selectors: [["app-list-credito-cobros"]], decls: 3, vars: 13, consts: [["tablaRef", ""], ["title", "Eventos de Cobro", 3, "agregarClick", "rowEditarClick", "controller", "tableDefinition", "useDefaultAgregarRedirect", "simpleFilteredSearch", "getExtra", "getConditionals", "relations", "useDefaultRowEditRedirect"], [3, "showChange", "saved", "show", "credito", "cobroEvento"]], template: function ListCreditoCobrosComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-tabla", 1, 0);
    \u0275\u0275listener("agregarClick", function ListCreditoCobrosComponent_Template_app_tabla_agregarClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onAgregar());
    })("rowEditarClick", function ListCreditoCobrosComponent_Template_app_tabla_rowEditarClick_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onEdit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-form-credito-cobro", 2);
    \u0275\u0275twoWayListener("showChange", function ListCreditoCobrosComponent_Template_app_form_credito_cobro_showChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showForm, $event) || (ctx.showForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("saved", function ListCreditoCobrosComponent_Template_app_form_credito_cobro_saved_2_listener() {
      \u0275\u0275restoreView(_r1);
      const tablaRef_r2 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(tablaRef_r2.getData());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("controller", ctx.cobroController)("tableDefinition", ctx.tabla)("useDefaultAgregarRedirect", false)("simpleFilteredSearch", ctx.filtros)("getExtra", \u0275\u0275pureFunction0(11, _c0))("getConditionals", ctx.conditionals)("relations", \u0275\u0275pureFunction0(12, _c1))("useDefaultRowEditRedirect", false);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx.showForm);
    \u0275\u0275property("credito", ctx.credito)("cobroEvento", ctx.edit);
  }
}, dependencies: [
  TablaComponent,
  FormCreditoCobroComponent
], encapsulation: 2 });
var ListCreditoCobrosComponent = _ListCreditoCobrosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCreditoCobrosComponent, [{
    type: Component,
    args: [{ selector: "app-list-credito-cobros", imports: [
      TablaComponent,
      FormCreditoCobroComponent
    ], template: `<app-tabla
#tablaRef
title="Eventos de Cobro"
[controller]="cobroController"
[tableDefinition]="tabla"
[useDefaultAgregarRedirect]="false"
(agregarClick)="onAgregar()"
[simpleFilteredSearch]="filtros"
[getExtra]="{filtro:'estado'}"
[getConditionals]="conditionals"
[relations]="['usuarioEjecutivo']"
[useDefaultRowEditRedirect]="false"
(rowEditarClick)="onEdit($event)"
/>

<app-form-credito-cobro 
[(show)]="showForm"
[credito]="credito"
[cobroEvento]="edit"
(saved)="tablaRef.getData()"
/>` }]
  }], () => [{ type: UtilsService }, { type: ActivatedRoute }, { type: CreditoEventoCobroService }, { type: CreditoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCreditoCobrosComponent, { className: "ListCreditoCobrosComponent", filePath: "src/app/main/cobranza/list-credito-cobros/list-credito-cobros.component.ts", lineNumber: 24 });
})();

// src/app/main/cobranza/shared/evento-cobro-asignaciones-tabla/evento-cobro-asignaciones-tabla.component.ts
var _forTrack02 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.usuario.id;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.usuario_asignado == null ? null : $item.usuario_asignado.id;
function EventoCobroAsignacionesTablaComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function EventoCobroAsignacionesTablaComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSelected());
    });
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.selectedAssignments.size === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Eliminar Seleccionados (", ctx_r1.totalSelected(), ") ");
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "input", 29);
    \u0275\u0275listener("ngModelChange", function EventoCobroAsignacionesTablaComponent_For_7_Conditional_3_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r4);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleGroupSelection(group_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("id", \u0275\u0275interpolate1("check-", group_r5.date))("ngModel", group_r5.selected);
    \u0275\u0275advance();
    \u0275\u0275property("for", \u0275\u0275interpolate1("check-", group_r5.date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r5.date, " ");
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("for", \u0275\u0275interpolate1("check-", group_r5.date));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r5.date, " ");
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    \u0275\u0275property("title", \u0275\u0275interpolate(comment_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", comment_r6.length > 30 ? comment_r6.substring(0, 30) + "..." : comment_r6, " ");
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 30);
    \u0275\u0275repeaterCreate(2, EventoCobroAsignacionesTablaComponent_For_7_Conditional_5_For_3_Template, 3, 3, "span", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r5.comments);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function EventoCobroAsignacionesTablaComponent_For_7_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const group_r5 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(group_r5.showUsers = !group_r5.showUsers);
    });
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2, " Ver Usuarios ");
    \u0275\u0275elementEnd();
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_29_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 41)(2, "div", 42)(3, "div", 43)(4, "div", 44)(5, "div", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46)(8, "h6", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 48)(11, "div", 49);
    \u0275\u0275element(12, "i", 50);
    \u0275\u0275elementStart(13, "span")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " de ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " completados ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 51);
    \u0275\u0275element(21, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 53)(23, "small", 54);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275element(26, "i");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const userItem_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(\u0275\u0275interpolate1("rounded-circle d-flex align-items-center justify-content-center text-white ", ctx_r1.getColorAvatar(userItem_r8.usuario.nombre), " usuario-avatar"));
    \u0275\u0275property("title", \u0275\u0275interpolate(userItem_r8.usuario.nombre));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInicialesUsuario(userItem_r8.usuario.nombre), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(userItem_r8.usuario.nombre));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", userItem_r8.usuario.nombre, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(userItem_r8.stats.completed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(userItem_r8.stats.total);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("progress-bar ", userItem_r8.stats.completed === userItem_r8.stats.total ? "bg-success" : "bg-info"));
    \u0275\u0275styleProp("width", ctx_r1.getPorcentajeCompletado(userItem_r8.stats), "%");
    \u0275\u0275attribute("aria-valuenow", ctx_r1.getPorcentajeCompletado(userItem_r8.stats));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPorcentajeCompletado(userItem_r8.stats), "% completado ");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate3("badge ", userItem_r8.stats.completed === userItem_r8.stats.total ? "bg-success" : "bg-warning", " bg-opacity-10 text-bg-", userItem_r8.stats.completed === userItem_r8.stats.total ? "success" : "warning", " border border-", userItem_r8.stats.completed === userItem_r8.stats.total ? "success" : "warning", "-subtle"));
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("bi ", userItem_r8.stats.completed === userItem_r8.stats.total ? "bi-check-circle-fill" : "bi-clock-fill", " me-1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", userItem_r8.stats.completed === userItem_r8.stats.total ? "Completado" : "En progreso", " ");
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_29_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275text(2, " No hay usuarios asignados para este grupo ");
    \u0275\u0275elementEnd();
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 35)(2, "h6", 36);
    \u0275\u0275element(3, "i", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275repeaterCreate(6, EventoCobroAsignacionesTablaComponent_For_7_Conditional_29_For_7_Template, 28, 27, "div", 39, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, EventoCobroAsignacionesTablaComponent_For_7_Conditional_29_Conditional_8_Template, 3, 0, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Usuarios Asignados (", ctx_r1.getUsuariosAsignados(group_r5).length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getUsuariosAsignados(group_r5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getUsuariosAsignados(group_r5).length === 0 ? 8 : -1);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 62);
    \u0275\u0275text(1, "Acciones");
    \u0275\u0275elementEnd();
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_For_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", ", ", " ");
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275conditionalCreate(1, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_For_3_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const userAssignment_r12 = ctx_r10.$implicit;
    const \u0275$index_228_r13 = ctx_r10.$index;
    const \u0275$count_228_r14 = ctx_r10.$count;
    \u0275\u0275textInterpolate1(" ", userAssignment_r12.usuario_asignado.nombre);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_228_r13 === \u0275$count_228_r14 - 1) ? 1 : -1);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_For_3_Conditional_0_Template, 2, 2);
  }
  if (rf & 2) {
    const userAssignment_r12 = ctx.$implicit;
    \u0275\u0275conditional(userAssignment_r12.usuario_asignado ? 0 : -1);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const assignment_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" +", assignment_r10.evento_cobro_asignacion_usuarios.length - 2, " ");
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 68);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275repeaterCreate(2, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_For_3_Template, 1, 1, null, null, _forTrack3);
    \u0275\u0275conditionalCreate(4, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const assignment_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(assignment_r10.evento_cobro_asignacion_usuarios.slice(0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(assignment_r10.evento_cobro_asignacion_usuarios.length > 2 ? 4 : -1);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_23_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275elementStart(2, "span", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const userAssignment_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(userAssignment_r15.usuario_asignado.nombre));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", userAssignment_r15.usuario_asignado.nombre, " ");
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_23_For_2_Conditional_0_Template, 4, 3, "span", 74);
  }
  if (rf & 2) {
    const userAssignment_r15 = ctx.$implicit;
    \u0275\u0275conditional(userAssignment_r15.usuario_asignado ? 0 : -1);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_23_For_2_Template, 1, 1, null, null, _forTrack3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const assignment_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(assignment_r10.evento_cobro_asignacion_usuarios);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275element(1, "i", 76);
    \u0275\u0275text(2, " Sin asignar ");
    \u0275\u0275elementEnd();
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 77);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const assignment_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", "/main/estado-cuenta/" + assignment_r10.credito_id);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_32_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const assignment_r10 = \u0275\u0275nextContext(2).$implicit;
      const group_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteRow(group_r5, assignment_r10));
    });
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275elementEnd();
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_32_Conditional_1_Template, 2, 1, "a", 77);
    \u0275\u0275conditionalCreate(2, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_32_Conditional_2_Template, 2, 0, "button", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canCobrar ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDelete ? 2 : -1);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 63)(3, "input", 29);
    \u0275\u0275listener("ngModelChange", function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Template_input_ngModelChange_3_listener($event) {
      const assignment_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleSingleSelection(assignment_r10.id, $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "i", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 65)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 66);
    \u0275\u0275element(12, "i", 67);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_15_Template, 5, 1, "small", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 60);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 61);
    \u0275\u0275element(20, "i", 69);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 60);
    \u0275\u0275conditionalCreate(23, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_23_Template, 3, 0, "div", 30)(24, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_24_Template, 3, 0, "span", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 71);
    \u0275\u0275element(27, "i", 26);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 61);
    \u0275\u0275element(30, "i", 72);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Conditional_32_Template, 3, 2, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const assignment_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("assignment-", assignment_r10.id))("ngModel", ctx_r1.selectedAssignments.has(assignment_r10.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", assignment_r10.credito_id, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(assignment_r10.nombreCliente);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 21, ctx_r1.municipios.get(assignment_r10.credito_id)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(assignment_r10.evento_cobro_asignacion_usuarios && assignment_r10.evento_cobro_asignacion_usuarios.length > 0 ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 23, ctx_r1.municipios.get(assignment_r10.credito_id)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", assignment_r10.modalidad, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(assignment_r10.evento_cobro_asignacion_usuarios && assignment_r10.evento_cobro_asignacion_usuarios.length > 0 ? 23 : 24);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", assignment_r10.estado === "COMPLETADA")("bg-warning", assignment_r10.estado !== "COMPLETADA");
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle", assignment_r10.estado === "COMPLETADA")("bi-exclamation-circle", assignment_r10.estado !== "COMPLETADA");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", assignment_r10.estado, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCompletedUser(assignment_r10) || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDelete || ctx_r1.canCobrar ? 32 : -1);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 56)(2, "table", 57)(3, "thead", 58)(4, "tr");
    \u0275\u0275element(5, "th", 59);
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Id Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 60);
    \u0275\u0275text(11, "Municipio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 61);
    \u0275\u0275text(13, "Modalidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 60);
    \u0275\u0275text(15, "Usuario Asignado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 61);
    \u0275\u0275text(19, "Usuario Completado");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_Conditional_20_Template, 2, 0, "th", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_For_23_Template, 33, 25, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275conditional(ctx_r1.canDelete || ctx_r1.canCobrar ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r5.assignments);
  }
}
function EventoCobroAsignacionesTablaComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 9)(2, "div", 10);
    \u0275\u0275conditionalCreate(3, EventoCobroAsignacionesTablaComponent_For_7_Conditional_3_Template, 4, 6, "div", 11)(4, EventoCobroAsignacionesTablaComponent_For_7_Conditional_4_Template, 2, 3, "label", 12);
    \u0275\u0275conditionalCreate(5, EventoCobroAsignacionesTablaComponent_For_7_Conditional_5_Template, 4, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "span", 15);
    \u0275\u0275element(8, "i", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "span", 17);
    \u0275\u0275text(11, "asignaciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275element(13, "i", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 17);
    \u0275\u0275text(16, "cr\xE9ditos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "span", 20);
    \u0275\u0275element(19, "i", 21);
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "span", 17);
    \u0275\u0275text(22, "usuarios");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, EventoCobroAsignacionesTablaComponent_For_7_Conditional_23_Template, 3, 0, "button", 22);
    \u0275\u0275elementStart(24, "button", 23);
    \u0275\u0275listener("click", function EventoCobroAsignacionesTablaComponent_For_7_Template_button_click_24_listener() {
      const group_r5 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(group_r5.showUsers = !group_r5.showUsers);
    });
    \u0275\u0275element(25, "i", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 25);
    \u0275\u0275listener("click", function EventoCobroAsignacionesTablaComponent_For_7_Template_button_click_26_listener() {
      const group_r5 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(group_r5.expandend = !group_r5.expandend);
    });
    \u0275\u0275element(27, "i", 26);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(29, EventoCobroAsignacionesTablaComponent_For_7_Conditional_29_Template, 9, 2, "div", 27);
    \u0275\u0275conditionalCreate(30, EventoCobroAsignacionesTablaComponent_For_7_Conditional_30_Template, 24, 1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canDelete ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(group_r5.comments && group_r5.comments.length > 0 ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", group_r5.stats.total, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", group_r5.stats.credits, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", group_r5.stats.users, " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.showUserList ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bi-chevron-down", !group_r5.expandend)("bi-chevron-up", group_r5.expandend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r5.expandend ? "Contraer" : "Expandir", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r5.showUsers ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r5.expandend ? 30 : -1);
  }
}
function EventoCobroAsignacionesTablaComponent_ForEmpty_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2, " No se encontraron asignaciones registradas\n");
    \u0275\u0275elementEnd();
  }
}
function EventoCobroAsignacionesTablaComponent_Conditional_9_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 84)(1, "a", 90);
    \u0275\u0275listener("click", function EventoCobroAsignacionesTablaComponent_Conditional_9_For_7_Template_a_click_1_listener() {
      const page_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(page_r19));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r19 === ctx_r1.paginator.page);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r19);
  }
}
function EventoCobroAsignacionesTablaComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 6)(1, "ul", 83)(2, "li", 84)(3, "a", 85);
    \u0275\u0275listener("click", function EventoCobroAsignacionesTablaComponent_Conditional_9_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.paginator.page - 1));
    });
    \u0275\u0275element(4, "i", 86);
    \u0275\u0275text(5, " Anterior ");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, EventoCobroAsignacionesTablaComponent_Conditional_9_For_7_Template, 3, 3, "li", 87, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "li", 84)(9, "a", 88);
    \u0275\u0275listener("click", function EventoCobroAsignacionesTablaComponent_Conditional_9_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.paginator.page + 1));
    });
    \u0275\u0275text(10, " Siguiente ");
    \u0275\u0275element(11, "i", 89);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r1.paginator.page === 1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.pagesArray);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r1.paginator.page === ctx_r1.totalPages);
  }
}
var _EventoCobroAsignacionesTablaComponent = class _EventoCobroAsignacionesTablaComponent {
  constructor() {
    this.groupedAssignments = [];
    this.groupedAssignmentsChange = new EventEmitter();
    this.selectedAssignments = /* @__PURE__ */ new Set();
    this.selectedAssignmentsChange = new EventEmitter();
    this.canDelete = false;
    this.canCobrar = false;
    this.conditionals = [
      {
        key: "deleted_at",
        operator: "IS NULL",
        value: null
      }
    ];
    this.advancedSearch = [];
    this.relations = [
      "eventoCobroAsignacionUsuarios",
      "eventoCobroAsignacionUsuarios.usuarioAsignado",
      "eventoCobroAsignacionUsuarios.creditoEventosCobros",
      "usuarios"
    ];
    this.showUserList = false;
    this.paginator = { per_page: 500, page: 1 };
    this.totalItems = 0;
    this.totalPages = 0;
    this.eventoCobroAsignacionController = inject(EventoCobroAsignacionService);
    this.creditoController = inject(CreditoService);
    this.buscadorCreditos = inject(BuscadorCreditosService);
    this.municipios = /* @__PURE__ */ new Map();
    this.utils = inject(UtilsService);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.fetchData();
    });
  }
  fetchData() {
    return __async(this, null, function* () {
      this.groupedAssignments = [];
      const response = yield this.eventoCobroAsignacionController.get({
        conditionals: this.conditionals,
        advancedSearch: this.advancedSearch,
        relations: this.relations,
        paginator: this.paginator
      });
      this.totalItems = response.total_items ?? 0;
      this.totalPages = response.total_pages ?? 0;
      this.groupAssignments(response.data || []);
    });
  }
  cargarMunicipios(assignments) {
    return __async(this, null, function* () {
      const creditoIds = [...new Set(assignments.map((a) => a.credito_id).filter((id) => id != null))];
      if (creditoIds.length === 0)
        return;
      const data = yield this.creditoController.all({
        conditionals: [
          {
            key: "deleted_at",
            operator: "IS NULL",
            value: null
          },
          {
            key: "id",
            operator: "IN",
            value: creditoIds.join(",")
          }
        ],
        relations: ["sucursales"],
        columns: ["id", "sucursal_id"],
        loader: false
      });
      data.forEach((c) => {
        this.municipios.set(c.id, c.sucursales?.nombre);
      });
    });
  }
  precargarNombresClientes(assignments) {
    return __async(this, null, function* () {
      const creditoIds = [...new Set(assignments.map((a) => a.credito_id).filter((id) => id != null))];
      if (creditoIds.length === 0)
        return;
      const nombresMap = yield this.buscadorCreditos.obtenerCreditosPorIds(creditoIds);
      this.groupedAssignments.forEach((g) => g.assignments.forEach((a) => {
        a.nombreCliente = nombresMap.get(a.credito_id);
      }));
    });
  }
  groupAssignments(assignments) {
    return __async(this, null, function* () {
      const groupsMap = /* @__PURE__ */ new Map();
      assignments.forEach((assignment) => {
        const dateKey = assignment.fecha;
        if (!groupsMap.has(dateKey)) {
          groupsMap.set(dateKey, []);
        }
        groupsMap.get(dateKey).push(assignment);
      });
      this.groupedAssignments = Array.from(groupsMap.entries()).map(([dateKey, assignments2]) => {
        const uniqueComments = this.getUniqueComments(assignments2);
        const firstAssignment = assignments2[0];
        const displayDate = firstAssignment?.fecha ? this.utils.fechaFormateada(new Date(firstAssignment.fecha)) : firstAssignment?.fecha ? this.utils.fechaFormateada(firstAssignment.fecha) : "Fecha desconocida";
        return {
          date: displayDate,
          comments: uniqueComments,
          assignments: assignments2,
          selected: false,
          stats: this.calculateStats(assignments2)
        };
      }).sort((a, b) => {
        const aDate = a.assignments[0]?.created_at ? new Date(a.assignments[0].created_at).getTime() : new Date(a.date).getTime();
        const bDate = b.assignments[0]?.created_at ? new Date(b.assignments[0].created_at).getTime() : new Date(b.date).getTime();
        return bDate - aDate;
      });
      yield this.precargarNombresClientes(assignments);
      yield this.cargarMunicipios(assignments);
      this.groupedAssignmentsChange.emit(this.groupedAssignments);
    });
  }
  /**
   * Obtiene comentarios únicos de una lista de asignaciones
   */
  getUniqueComments(assignments) {
    const commentsSet = /* @__PURE__ */ new Set();
    assignments.forEach((assignment) => {
      if (assignment.comentarios && assignment.comentarios.trim() !== "") {
        commentsSet.add(assignment.comentarios.trim());
      }
    });
    return Array.from(commentsSet);
  }
  calculateStats(assignments) {
    const credits = /* @__PURE__ */ new Set();
    const users = /* @__PURE__ */ new Set();
    let completed = 0;
    assignments.forEach((assignment) => {
      assignment.evento_cobro_asignacion_usuarios?.forEach((au) => {
        credits.add(assignment.credito_id);
        users.add(au.usuario_asignado_id);
      });
      if (assignment.estado === "COMPLETADA")
        completed++;
    });
    return {
      total: assignments.length,
      completed,
      credits: credits.size,
      users: users.size
    };
  }
  getCompletedUser(assignment) {
    const completedUser = assignment.evento_cobro_asignacion_usuarios?.find((au) => au.usuario_asignado?.id === assignment.usuario_id && au.credito_eventos_cobro_id);
    return completedUser?.usuario_asignado?.nombre || "N/A";
  }
  /**
   * Obtiene la lista de usuarios asignados únicos para un grupo
   */
  getUsuariosAsignados(group) {
    const usuariosMap = /* @__PURE__ */ new Map();
    group.assignments.forEach((assignment) => {
      assignment.evento_cobro_asignacion_usuarios?.forEach((au) => {
        if (au.usuario_asignado) {
          const userId = au.usuario_asignado.id;
          const existing = usuariosMap.get(userId);
          if (!existing) {
            usuariosMap.set(userId, {
              usuario: au.usuario_asignado,
              stats: { total: 0, completed: 0 }
            });
          }
          const userStats = usuariosMap.get(userId);
          userStats.stats.total++;
          if (assignment.estado === "COMPLETADA") {
            userStats.stats.completed++;
          }
        }
      });
    });
    return Array.from(usuariosMap.values());
  }
  /**
   * Obtiene las iniciales del nombre de un usuario para el avatar
   */
  getInicialesUsuario(nombre) {
    return nombre.split(" ").map((palabra) => palabra.charAt(0)).join("").toUpperCase().substring(0, 2);
  }
  /**
   * Obtiene el color de fondo para el avatar del usuario basado en su nombre
   */
  getColorAvatar(nombre) {
    const colors = [
      "bg-primary",
      "bg-success",
      "bg-danger",
      "bg-warning",
      "bg-info",
      "bg-secondary",
      "bg-dark",
      "bg-primary-subtle"
    ];
    let hash = 0;
    for (let i = 0; i < nombre.length; i++) {
      hash = nombre.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }
  /**
   * Calcula el porcentaje de completado para un usuario
   */
  getPorcentajeCompletado(stats) {
    if (stats.total === 0)
      return "0.0";
    return (stats.completed / stats.total * 100).toFixed(1);
  }
  toggleGroupSelection(group) {
    group.selected = !group.selected;
    group.assignments.forEach((assignment) => {
      if (group.selected) {
        this.selectedAssignments.add(assignment.id);
      } else {
        this.selectedAssignments.delete(assignment.id);
      }
      this.selectedAssignmentsChange.emit(this.selectedAssignments);
    });
  }
  toggleSingleSelection(id, checked) {
    if (checked) {
      this.selectedAssignments.add(id);
    } else {
      this.selectedAssignments.delete(id);
    }
    this.selectedAssignmentsChange.emit(this.selectedAssignments);
  }
  deleteSelected() {
    return __async(this, null, function* () {
      const assignmentsToDelete = Array.from(this.selectedAssignments).map((id) => ({
        id,
        deleted_at: this.utils.toMySQLDateTime(/* @__PURE__ */ new Date())
      }));
      if (yield this.eventoCobroAsignacionController.multipleUpdate(assignmentsToDelete)) {
        this.selectedAssignments.clear();
        this.selectedAssignmentsChange.emit(this.selectedAssignments);
        yield this.fetchData();
      }
    });
  }
  deleteRow(group, asignacion) {
    return __async(this, null, function* () {
      yield this.eventoCobroAsignacionController.switch(asignacion);
      group.assignments = group.assignments.filter((a) => !a.deleted_at);
    });
  }
  asignacionesCompletadas() {
    return this.groupedAssignments.reduce((acc, group) => acc + group.stats.completed, 0);
  }
  totalSelected() {
    return Array.from(this.selectedAssignments).length;
  }
  changePage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.paginator.page = page;
    this.fetchData();
  }
  get pagesArray() {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.paginator.page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
};
_EventoCobroAsignacionesTablaComponent.\u0275fac = function EventoCobroAsignacionesTablaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventoCobroAsignacionesTablaComponent)();
};
_EventoCobroAsignacionesTablaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventoCobroAsignacionesTablaComponent, selectors: [["app-evento-cobro-asignaciones-tabla"]], inputs: { groupedAssignments: "groupedAssignments", selectedAssignments: "selectedAssignments", canDelete: "canDelete", canCobrar: "canCobrar", conditionals: "conditionals", advancedSearch: "advancedSearch", relations: "relations", showUserList: "showUserList" }, outputs: { groupedAssignmentsChange: "groupedAssignmentsChange", selectedAssignmentsChange: "selectedAssignmentsChange" }, decls: 10, vars: 3, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "div"], [1, "bi", "bi-list-check", "me-2"], [1, "btn", "btn-danger", 3, "disabled"], [1, "card", "mb-4", "shadow-sm"], [1, "alert", "alert-info", "d-flex", "align-items-center"], ["aria-label", "Navegaci\xF3n de p\xE1ginas"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "bi", "bi-trash", "me-1"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center", "py-3"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-check-inline"], [1, "form-check-label", "fw-bold", "ms-2", 3, "for"], [1, "ms-3"], [1, "d-flex", "gap-2", "align-items-center"], [1, "badge", "bg-info", "rounded-pill"], [1, "bi", "bi-card-checklist", "me-1"], [1, "d-none", "d-md-inline"], [1, "badge", "bg-primary", "rounded-pill"], [1, "bi", "bi-coin", "me-1"], [1, "badge", "bg-secondary", "rounded-pill", "me-2"], [1, "bi", "bi-people-fill", "me-1"], ["title", "Ver lista de usuarios asignados", 1, "btn", "btn-sm", "btn-outline-info", "d-none", "d-lg-inline-flex"], ["title", "Ver usuarios", 1, "btn", "btn-sm", "btn-outline-info", "d-lg-none", 3, "click"], [1, "bi", "bi-person-lines-fill"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi"], [1, "border-top", "bg-light-subtle"], [1, "card-body", "p-0"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel"], [1, "d-flex", "flex-wrap", "gap-1"], [1, "badge", "bg-info", "text-dark", "fs-7", 3, "title"], [1, "bi", "bi-chat-quote", "me-1"], ["title", "Ver lista de usuarios asignados", 1, "btn", "btn-sm", "btn-outline-info", "d-none", "d-lg-inline-flex", 3, "click"], [1, "bi", "bi-person-lines-fill", "me-1"], [1, "p-3", "p-md-4"], [1, "mb-3", "text-primary", "fw-bold"], [1, "bi", "bi-people-fill", "me-2"], [1, "row", "g-3"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "alert", "alert-warning", "d-flex", "align-items-center", "mb-0"], [1, "card", "border-0", "shadow-sm", "h-100", "usuario-card"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-start"], [1, "me-3", "flex-shrink-0"], [2, "width", "48px", "height", "48px", "font-size", "14px", "font-weight", "bold", 3, "title"], [1, "flex-grow-1"], [1, "mb-1", "fw-bold", "text-truncate", 3, "title"], [1, "d-flex", "flex-column", "gap-1"], [1, "d-flex", "align-items-center", "small"], [1, "bi", "bi-clipboard-check", "me-1", "text-muted"], [1, "progress", 2, "height", "6px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-muted"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "table-responsive"], [1, "table", "table-hover", "table-striped", "mb-0"], [1, "table-light"], ["width", "50px"], [1, "d-none", "d-md-table-cell"], [1, "d-none", "d-lg-table-cell"], ["width", "100px"], [1, "form-check"], [1, "bi", "bi-wallet", "me-1", "text-muted"], [1, "d-flex", "flex-column"], [1, "text-muted", "d-md-none"], [1, "bi", "bi-geo-alt", "me-1"], [1, "text-muted", "d-md-none", "mt-1"], [1, "bi", "bi-gear", "me-1", "text-muted"], [1, "text-muted", "small"], [1, "badge"], [1, "bi", "bi-person", "me-1", "text-muted"], [1, "bi", "bi-person-fill", "me-1"], [1, "badge", "bg-info", "bg-opacity-10", "text-bg-info", "border", "border-info-subtle", "d-inline-flex", "align-items-center"], [1, "text-truncate", 2, "max-width", "120px", 3, "title"], [1, "bi", "bi-dash-circle", "me-1"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], ["title", "Eliminar asignaci\xF3n", 1, "btn", "btn-sm", "btn-outline-danger"], [1, "bi", "bi-telephone-outbound-fill"], ["title", "Eliminar asignaci\xF3n", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "bi", "bi-info-circle", "me-2", "fs-5"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["aria-label", "P\xE1gina anterior", 1, "page-link", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "page-item", 3, "active"], ["aria-label", "P\xE1gina siguiente", 1, "page-link", 3, "click"], [1, "bi", "bi-chevron-right"], [1, "page-link", 3, "click"]], template: function EventoCobroAsignacionesTablaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
    \u0275\u0275element(3, "i", 2);
    \u0275\u0275text(4, "Asignaciones de gestiones de cobranza");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, EventoCobroAsignacionesTablaComponent_Conditional_5_Template, 3, 2, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, EventoCobroAsignacionesTablaComponent_For_7_Template, 31, 13, "div", 4, _forTrack02, false, EventoCobroAsignacionesTablaComponent_ForEmpty_8_Template, 3, 0, "div", 5);
    \u0275\u0275conditionalCreate(9, EventoCobroAsignacionesTablaComponent_Conditional_9_Template, 12, 4, "nav", 6);
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.canDelete ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.groupedAssignments);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.totalPages > 0 ? 9 : -1);
  }
}, dependencies: [
  FormsModule,
  CheckboxControlValueAccessor,
  NgControlStatus,
  NgModel,
  RouterLink,
  UpperCasePipe
], styles: ["\n\n.usuario-avatar[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.usuario-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.usuario-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.usuario-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n}\n.progress[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  border-radius: 3px;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  transition: width 0.6s ease-in-out;\n}\n.badge[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n  max-width: 100px !important;\n}\n@media (max-width: 768px) {\n  .badge[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n    max-width: 80px !important;\n  }\n}\n.table-responsive[_ngcontent-%COMP%] {\n  min-height: 300px;\n}\n.bg-light-subtle[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n.card-body.p-3[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n@media (max-width: 576px) {\n  .card-body.p-3[_ngcontent-%COMP%] {\n    padding: 0.75rem !important;\n  }\n}\n.border-top[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=evento-cobro-asignaciones-tabla.component.css.map */"] });
var EventoCobroAsignacionesTablaComponent = _EventoCobroAsignacionesTablaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventoCobroAsignacionesTablaComponent, [{
    type: Component,
    args: [{ selector: "app-evento-cobro-asignaciones-tabla", imports: [
      FormsModule,
      RouterLink,
      UpperCasePipe
    ], template: `<!-- Secci\xF3n de asignaciones -->
<div class="d-flex justify-content-between align-items-center mb-3">
    <div class="div">
        <h4><i class="bi bi-list-check me-2"></i>Asignaciones de gestiones de cobranza</h4>
    </div>
    @if(canDelete){
    <button class="btn btn-danger" [disabled]="selectedAssignments.size === 0" (click)="deleteSelected()">
        <i class="bi bi-trash me-1"></i>
        Eliminar Seleccionados ({{totalSelected()}})
    </button>
    }
</div>
<!-- Grupos de asignaciones -->
@for (group of groupedAssignments; track group.date) {
<div class="card mb-4 shadow-sm">
    <div class="card-header bg-light d-flex justify-content-between align-items-center py-3">
        <div class="d-flex align-items-center">
            @if(canDelete){
            <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" id="check-{{group.date}}" [ngModel]="group.selected"
                    (ngModelChange)="toggleGroupSelection(group)">
                <label class="form-check-label fw-bold ms-2" for="check-{{group.date}}">
                    {{ group.date }}
                </label>
            </div>
            }@else {
            <label class="form-check-label fw-bold ms-2" for="check-{{group.date}}">
                {{ group.date }}
            </label>
            }

            @if(group.comments && group.comments.length > 0){
            <div class="ms-3">
                <div class="d-flex flex-wrap gap-1">
                    @for (comment of group.comments; track comment) {
                    <span class="badge bg-info text-dark fs-7" title="{{ comment }}">
                        <i class="bi bi-chat-quote me-1"></i>
                        {{ comment.length > 30 ? comment.substring(0, 30) + '...' : comment }}
                    </span>
                    }
                </div>
            </div>
            }
        </div>

        <div class="d-flex gap-2 align-items-center">
            <span class="badge bg-info rounded-pill">
                <i class="bi bi-card-checklist me-1"></i>{{ group.stats.total }}
                <span class="d-none d-md-inline">asignaciones</span>
            </span>
            <span class="badge bg-primary rounded-pill">
                <i class="bi bi-coin me-1"></i>{{ group.stats.credits }}
                <span class="d-none d-md-inline">cr\xE9ditos</span>
            </span>
            <div class="d-flex align-items-center">
                <span class="badge bg-secondary rounded-pill me-2">
                    <i class="bi bi-people-fill me-1"></i>{{ group.stats.users }}
                    <span class="d-none d-md-inline">usuarios</span>
                </span>
                @if(showUserList){
                <button class="btn btn-sm btn-outline-info d-none d-lg-inline-flex"
                    (click)="group.showUsers = !group.showUsers" title="Ver lista de usuarios asignados">
                    <i class="bi bi-person-lines-fill me-1"></i>
                    Ver Usuarios
                </button>
                }
                <button class="btn btn-sm btn-outline-info d-lg-none" (click)="group.showUsers = !group.showUsers"
                    title="Ver usuarios">
                    <i class="bi bi-person-lines-fill"></i>
                </button>
            </div>
            <button class="btn btn-outline-primary btn-sm" (click)="group.expandend = !group.expandend">
                <i class="bi" [class.bi-chevron-down]="!group.expandend" [class.bi-chevron-up]="group.expandend"></i>
                {{group.expandend ? 'Contraer' : 'Expandir'}}
            </button>
        </div>
    </div>

    <!-- Secci\xF3n de Usuarios Asignados -->
    @if(group.showUsers){
    <div class="border-top bg-light-subtle">
        <div class="p-3 p-md-4">
            <h6 class="mb-3 text-primary fw-bold">
                <i class="bi bi-people-fill me-2"></i>
                Usuarios Asignados ({{ getUsuariosAsignados(group).length }})
            </h6>
            <div class="row g-3">
                @for (userItem of getUsuariosAsignados(group); track userItem.usuario.id) {
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card border-0 shadow-sm h-100 usuario-card">
                        <div class="card-body p-3">
                            <div class="d-flex align-items-start">
                                <!-- Avatar del usuario -->
                                <div class="me-3 flex-shrink-0">
                                    <div class="rounded-circle d-flex align-items-center justify-content-center text-white {{ getColorAvatar(userItem.usuario.nombre) }} usuario-avatar"
                                        style="width: 48px; height: 48px; font-size: 14px; font-weight: bold;"
                                        title="{{ userItem.usuario.nombre }}">
                                        {{ getInicialesUsuario(userItem.usuario.nombre) }}
                                    </div>
                                </div>

                                <!-- Informaci\xF3n del usuario -->
                                <div class="flex-grow-1">
                                    <h6 class="mb-1 fw-bold text-truncate" title="{{ userItem.usuario.nombre }}">
                                        {{ userItem.usuario.nombre }}
                                    </h6>

                                    <!-- Estad\xEDsticas del usuario -->
                                    <div class="d-flex flex-column gap-1">
                                        <div class="d-flex align-items-center small">
                                            <i class="bi bi-clipboard-check me-1 text-muted"></i>
                                            <span>
                                                <strong>{{ userItem.stats.completed }}</strong> de
                                                <strong>{{ userItem.stats.total }}</strong> completados
                                            </span>
                                        </div>

                                        <!-- Barra de progreso -->
                                        <div class="progress" style="height: 6px;">
                                            <div class="progress-bar {{ userItem.stats.completed === userItem.stats.total ? 'bg-success' : 'bg-info' }}"
                                                role="progressbar"
                                                [style.width.%]="getPorcentajeCompletado(userItem.stats)"
                                                [attr.aria-valuenow]="getPorcentajeCompletado(userItem.stats)"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>

                                        <!-- Porcentaje -->
                                        <div class="d-flex align-items-center justify-content-between">
                                            <small class="text-muted">
                                                {{ getPorcentajeCompletado(userItem.stats) }}% completado
                                            </small>
                                            <span
                                                class="badge {{ userItem.stats.completed === userItem.stats.total ? 'bg-success' : 'bg-warning' }} bg-opacity-10 text-bg-{{ userItem.stats.completed === userItem.stats.total ? 'success' : 'warning' }} border border-{{ userItem.stats.completed === userItem.stats.total ? 'success' : 'warning' }}-subtle">
                                                <i
                                                    class="bi {{ userItem.stats.completed === userItem.stats.total ? 'bi-check-circle-fill' : 'bi-clock-fill' }} me-1"></i>
                                                {{ userItem.stats.completed === userItem.stats.total ? 'Completado' :
                                                'En progreso' }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>

            @if (getUsuariosAsignados(group).length === 0) {
            <div class="alert alert-warning d-flex align-items-center mb-0">
                <i class="bi bi-exclamation-triangle me-2"></i>
                No hay usuarios asignados para este grupo
            </div>
            }
        </div>
    </div>
    }

    @if(group.expandend){
    <div class="card-body p-0">
        <div class="table-responsive">
            <table class="table table-hover table-striped mb-0">
                <thead class="table-light">
                    <tr>
                        <th width="50px"></th>
                        <th>Id Cr\xE9dito</th>
                        <th>Nombre</th>
                        <th class="d-none d-md-table-cell">Municipio</th>
                        <th class="d-none d-lg-table-cell">Modalidad</th>
                        <th class="d-none d-md-table-cell">Usuario Asignado</th>
                        <th>Estado</th>
                        <th class="d-none d-lg-table-cell">Usuario Completado</th>
                        @if(canDelete || canCobrar){
                        <th width="100px">Acciones</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    @for (assignment of group.assignments; track assignment.id) {
                    <tr>
                        <td>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="assignment-{{assignment.id}}"
                                    [ngModel]="selectedAssignments.has(assignment.id)"
                                    (ngModelChange)="toggleSingleSelection(assignment.id, $event)">
                            </div>
                        </td>
                        <td>
                            <i class="bi bi-wallet me-1 text-muted"></i>
                            {{ assignment.credito_id }}
                        </td>
                        <td>
                            <div class="d-flex flex-column">
                                <strong>{{ assignment.nombreCliente }}</strong>
                                <small class="text-muted d-md-none">
                                    <i class="bi bi-geo-alt me-1"></i>{{ municipios.get(assignment.credito_id) |
                                    uppercase }}
                                </small>
                                @if (assignment.evento_cobro_asignacion_usuarios &&
                                assignment.evento_cobro_asignacion_usuarios.length > 0) {
                                <small class="text-muted d-md-none mt-1">
                                    <i class="bi bi-person-fill me-1"></i>
                                    @for (userAssignment of assignment.evento_cobro_asignacion_usuarios.slice(0, 2);
                                    track userAssignment.usuario_asignado?.id) {
                                    @if (userAssignment.usuario_asignado) {
                                    {{ userAssignment.usuario_asignado.nombre }}@if (!$last) { {{ ', ' }} }
                                    }
                                    }
                                    @if (assignment.evento_cobro_asignacion_usuarios.length > 2) {
                                    +{{ assignment.evento_cobro_asignacion_usuarios.length - 2 }}
                                    }
                                </small>
                                }
                            </div>
                        </td>
                        <td class="d-none d-md-table-cell">
                            {{ municipios.get(assignment.credito_id) | uppercase }}
                        </td>
                        <td class="d-none d-lg-table-cell">
                            <i class="bi bi-gear me-1 text-muted"></i>
                            {{ assignment.modalidad }}
                        </td>
                        <td class="d-none d-md-table-cell">
                            @if (assignment.evento_cobro_asignacion_usuarios &&
                            assignment.evento_cobro_asignacion_usuarios.length > 0) {
                            <div class="d-flex flex-wrap gap-1">
                                @for (userAssignment of assignment.evento_cobro_asignacion_usuarios; track
                                userAssignment.usuario_asignado?.id) {
                                @if (userAssignment.usuario_asignado) {
                                <span
                                    class="badge bg-info bg-opacity-10 text-bg-info border border-info-subtle d-inline-flex align-items-center">
                                    <i class="bi bi-person-fill me-1"></i>
                                    <span class="text-truncate" style="max-width: 120px;"
                                        title="{{ userAssignment.usuario_asignado.nombre }}">
                                        {{ userAssignment.usuario_asignado.nombre }}
                                    </span>
                                </span>
                                }
                                }
                            </div>
                            } @else {
                            <span class="text-muted small">
                                <i class="bi bi-dash-circle me-1"></i>
                                Sin asignar
                            </span>
                            }
                        </td>
                        <td>
                            <span class="badge" [class.bg-success]="assignment.estado === 'COMPLETADA'"
                                [class.bg-warning]="assignment.estado !== 'COMPLETADA'">
                                <i class="bi" [class.bi-check-circle]="assignment.estado === 'COMPLETADA'"
                                    [class.bi-exclamation-circle]="assignment.estado !== 'COMPLETADA'">
                                </i>
                                {{ assignment.estado }}
                            </span>
                        </td>
                        <td class="d-none d-lg-table-cell">
                            <i class="bi bi-person me-1 text-muted"></i>
                            {{ getCompletedUser(assignment) || 'N/A' }}
                        </td>
                        @if(canDelete|| canCobrar){
                        <td>
                            @if (canCobrar) {
                            <a class="btn btn-sm btn-outline-primary"
                                [routerLink]="'/main/estado-cuenta/'+assignment.credito_id">
                                <i class="bi bi-telephone-outbound-fill"></i>
                            </a>
                            }
                            @if (canDelete) {
                            <button class="btn btn-sm btn-outline-danger" (click)="deleteRow(group, assignment)"
                                title="Eliminar asignaci\xF3n">
                                <i class="bi bi-trash"></i>
                            </button>
                            }
                        </td>
                        }
                    </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
    }
</div>
} @empty {
<div class="alert alert-info d-flex align-items-center">
    <i class="bi bi-info-circle me-2 fs-5"></i>
    No se encontraron asignaciones registradas
</div>
}

<!-- Paginaci\xF3n mejorada -->
@if (totalPages > 0) {
<nav aria-label="Navegaci\xF3n de p\xE1ginas">
    <ul class="pagination justify-content-center">
        <li class="page-item" [class.disabled]="paginator.page === 1">
            <a class="page-link" (click)="changePage(paginator.page - 1)" aria-label="P\xE1gina anterior">
                <i class="bi bi-chevron-left"></i> Anterior
            </a>
        </li>
        @for (page of pagesArray; track page) {
        <li class="page-item" [class.active]="page === paginator.page">
            <a class="page-link" (click)="changePage(page)">{{ page }}</a>
        </li>
        }
        <li class="page-item" [class.disabled]="paginator.page === totalPages">
            <a class="page-link" (click)="changePage(paginator.page + 1)" aria-label="P\xE1gina siguiente">
                Siguiente <i class="bi bi-chevron-right"></i>
            </a>
        </li>
    </ul>
</nav>
}`, styles: ["/* src/app/main/cobranza/shared/evento-cobro-asignaciones-tabla/evento-cobro-asignaciones-tabla.component.css */\n.usuario-avatar {\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.usuario-avatar:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.usuario-card {\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.usuario-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n}\n.progress {\n  background-color: #e9ecef;\n  border-radius: 3px;\n}\n.progress-bar {\n  transition: width 0.6s ease-in-out;\n}\n.badge .text-truncate {\n  max-width: 100px !important;\n}\n@media (max-width: 768px) {\n  .badge .text-truncate {\n    max-width: 80px !important;\n  }\n}\n.table-responsive {\n  min-height: 300px;\n}\n.bg-light-subtle {\n  background-color: #f8f9fa !important;\n}\n.card-body.p-3 {\n  padding: 1rem !important;\n}\n@media (max-width: 576px) {\n  .card-body.p-3 {\n    padding: 0.75rem !important;\n  }\n}\n.border-top {\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=evento-cobro-asignaciones-tabla.component.css.map */\n"] }]
  }], null, { groupedAssignments: [{
    type: Input
  }], groupedAssignmentsChange: [{
    type: Output
  }], selectedAssignments: [{
    type: Input
  }], selectedAssignmentsChange: [{
    type: Output
  }], canDelete: [{
    type: Input
  }], canCobrar: [{
    type: Input
  }], conditionals: [{
    type: Input
  }], advancedSearch: [{
    type: Input
  }], relations: [{
    type: Input
  }], showUserList: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventoCobroAsignacionesTablaComponent, { className: "EventoCobroAsignacionesTablaComponent", filePath: "src/app/main/cobranza/shared/evento-cobro-asignaciones-tabla/evento-cobro-asignaciones-tabla.component.ts", lineNumber: 39 });
})();

// src/app/main/cobranza/list-cobros-asignados/list-cobros-asignados.component.ts
var _ListCobrosAsignadosComponent = class _ListCobrosAsignadosComponent {
  constructor() {
    this.advancedSearch = [];
    this.relations = [
      "usuarioAsignado",
      "eventoCobroAsignacion.eventoCobroAsignacionUsuarios.usuarios"
    ];
    this.groupedAssignments = [];
    this.selectedAssignments = /* @__PURE__ */ new Set();
    this.utils = inject(UtilsService);
    this.localStorage = inject(LocalStorageService);
    this.usuario = this.localStorage.getUser();
    this.advancedSearch = [
      {
        relation: "eventoCobroAsignacionUsuarios",
        conditionals: [
          ["usuario_asignado_id", "=", this.usuario.id]
        ],
        andConditionals: []
      }
    ];
  }
  asignacionesCompletadas() {
    return this.groupedAssignments.reduce((acc, group) => acc + group.stats.completed, 0);
  }
  get totalGestiones() {
    return this.groupedAssignments.flatMap((a) => a.assignments).length;
  }
};
_ListCobrosAsignadosComponent.\u0275fac = function ListCobrosAsignadosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCobrosAsignadosComponent)();
};
_ListCobrosAsignadosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCobrosAsignadosComponent, selectors: [["app-list-cobros-asignados"]], decls: 73, vars: 9, consts: [[1, "container-fluid", "bg-white", "rounded", "shadow", "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "d-flex", "align-items-center"], [1, "p-3", "me-3"], [1, "bi", "bi-clipboard-check", "fs-2", "text-primary"], [1, "mb-0", "text-primary"], [1, "text-muted", "mb-0"], [1, "row", "mb-4"], [1, "col-md-3", "mb-3"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body"], [1, "bg-primary", "bg-opacity-10", "rounded", "p-3", "me-3"], [1, "bi", "bi-collection-play", "fs-4", "text-bg-primary"], [1, "card-title", "text-muted", "mb-1"], [1, "text-muted"], [1, "bg-secondary", "bg-opacity-10", "rounded", "p-3", "me-3"], [1, "bi", "bi-collection", "fs-4", "text-bg-secondary"], [1, "mb-0", "text-secondary"], [1, "bg-success", "bg-opacity-10", "rounded", "p-3", "me-3"], [1, "bi", "bi-check-circle", "fs-4", "text-bg-success"], [1, "mb-0", "text-success"], [1, "bg-info", "bg-opacity-10", "rounded", "p-3", "me-3"], [1, "bi", "bi-clock-history", "fs-4"], [1, "mb-0", "text-info"], [1, "alert", "alert-info", "d-flex", "align-items-center", "mb-4"], [1, "bi", "bi-graph-up", "me-3", "fs-4"], [1, "alert-heading", "mb-1"], [1, "mb-0"], [3, "selectedAssignmentsChange", "groupedAssignmentsChange", "selectedAssignments", "advancedSearch", "groupedAssignments", "canCobrar"]], template: function ListCobrosAsignadosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2", 5);
    \u0275\u0275text(7, "Mis asignaciones de gestiones de cobranza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "Monitorea y realiza tus gestiones de cobranza asignados");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 2)(15, "div", 11);
    \u0275\u0275element(16, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "h6", 13);
    \u0275\u0275text(19, "Total Asignaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h3", 5);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small", 14);
    \u0275\u0275text(23, "Grupos activos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(24, "div", 8)(25, "div", 9)(26, "div", 10)(27, "div", 2)(28, "div", 15);
    \u0275\u0275element(29, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "h6", 13);
    \u0275\u0275text(32, "Total Gestiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "h3", 17);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "small", 14);
    \u0275\u0275text(36, "Asignaciones totales");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(37, "div", 8)(38, "div", 9)(39, "div", 10)(40, "div", 2)(41, "div", 18);
    \u0275\u0275element(42, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div")(44, "h6", 13);
    \u0275\u0275text(45, "Completadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h3", 20);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "small", 14);
    \u0275\u0275text(49, "Asignaciones finalizadas");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(50, "div", 8)(51, "div", 9)(52, "div", 10)(53, "div", 2)(54, "div", 21);
    \u0275\u0275element(55, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "h6", 13);
    \u0275\u0275text(58, "En Progreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "h3", 23);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "small", 14);
    \u0275\u0275text(62, "Pendientes por completar");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(63, "div", 24);
    \u0275\u0275element(64, "i", 25);
    \u0275\u0275elementStart(65, "div")(66, "h6", 26);
    \u0275\u0275text(67, "Resumen de Desempe\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p", 27);
    \u0275\u0275text(69, "Tasa de finalizaci\xF3n: ");
    \u0275\u0275elementStart(70, "strong");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "app-evento-cobro-asignaciones-tabla", 28);
    \u0275\u0275twoWayListener("selectedAssignmentsChange", function ListCobrosAsignadosComponent_Template_app_evento_cobro_asignaciones_tabla_selectedAssignmentsChange_72_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedAssignments, $event) || (ctx.selectedAssignments = $event);
      return $event;
    })("groupedAssignmentsChange", function ListCobrosAsignadosComponent_Template_app_evento_cobro_asignaciones_tabla_groupedAssignmentsChange_72_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.groupedAssignments, $event) || (ctx.groupedAssignments = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx.groupedAssignments.length);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.totalGestiones);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.asignacionesCompletadas());
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.totalGestiones - ctx.asignacionesCompletadas());
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", (ctx.asignacionesCompletadas() / ctx.groupedAssignments.length * 100).toFixed(2), "%");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("selectedAssignments", ctx.selectedAssignments);
    \u0275\u0275property("advancedSearch", ctx.advancedSearch);
    \u0275\u0275twoWayProperty("groupedAssignments", ctx.groupedAssignments);
    \u0275\u0275property("canCobrar", true);
  }
}, dependencies: [EventoCobroAsignacionesTablaComponent], encapsulation: 2 });
var ListCobrosAsignadosComponent = _ListCobrosAsignadosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCobrosAsignadosComponent, [{
    type: Component,
    args: [{ selector: "app-list-cobros-asignados", imports: [
      EventoCobroAsignacionesTablaComponent
    ], template: '<div class="container-fluid bg-white rounded shadow p-4">\n    <!-- Header Section -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <div class="d-flex align-items-center">\n            <div class="p-3 me-3">\n                <i class="bi bi-clipboard-check fs-2 text-primary"></i>\n            </div>\n            <div>\n                <h2 class="mb-0 text-primary">Mis asignaciones de gestiones de cobranza</h2>\n                <p class="text-muted mb-0">Monitorea y realiza tus gestiones de cobranza asignados</p>\n            </div>\n        </div>\n    </div>\n\n    <!-- Statistics Cards -->\n    <div class="row mb-4">\n        <div class="col-md-3 mb-3">\n            <div class="card border-0 shadow-sm h-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <div class="bg-primary bg-opacity-10 rounded p-3 me-3">\n                            <i class="bi bi-collection-play fs-4 text-bg-primary"></i>\n                        </div>\n                        <div>\n                            <h6 class="card-title text-muted mb-1">Total Asignaciones</h6>\n                            <h3 class="mb-0 text-primary">{{ groupedAssignments.length }}</h3>\n                            <small class="text-muted">Grupos activos</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="col-md-3 mb-3">\n            <div class="card border-0 shadow-sm h-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <div class="bg-secondary bg-opacity-10 rounded p-3 me-3">\n                            <i class="bi bi-collection fs-4 text-bg-secondary"></i>\n                        </div>\n                        <div>\n                            <h6 class="card-title text-muted mb-1">Total Gestiones</h6>\n                            <h3 class="mb-0 text-secondary">{{ totalGestiones }}</h3>\n                            <small class="text-muted">Asignaciones totales</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="col-md-3 mb-3">\n            <div class="card border-0 shadow-sm h-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <div class="bg-success bg-opacity-10 rounded p-3 me-3">\n                            <i class="bi bi-check-circle fs-4 text-bg-success"></i>\n                        </div>\n                        <div>\n                            <h6 class="card-title text-muted mb-1">Completadas</h6>\n                            <h3 class="mb-0 text-success">{{ asignacionesCompletadas() }}</h3>\n                            <small class="text-muted">Asignaciones finalizadas</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="col-md-3 mb-3">\n            <div class="card border-0 shadow-sm h-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <div class="bg-info bg-opacity-10 rounded p-3 me-3">\n                            <i class="bi bi-clock-history fs-4"></i>\n                        </div>\n                        <div>\n                            <h6 class="card-title text-muted mb-1">En Progreso</h6>\n                            <h3 class="mb-0 text-info">{{ totalGestiones - asignacionesCompletadas() }}</h3>\n                            <small class="text-muted">Pendientes por completar</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Performance Summary -->\n    <div class="alert alert-info d-flex align-items-center mb-4">\n        <i class="bi bi-graph-up me-3 fs-4"></i>\n        <div>\n            <h6 class="alert-heading mb-1">Resumen de Desempe\xF1o</h6>\n            <p class="mb-0">Tasa de finalizaci\xF3n:\n                <strong>{{ ((asignacionesCompletadas() / groupedAssignments.length * 100)).toFixed(2) }}%</strong>\n            </p>\n        </div>\n    </div>\n\n    <!-- Assignments Table -->\n    <app-evento-cobro-asignaciones-tabla [(selectedAssignments)]="selectedAssignments" [advancedSearch]="advancedSearch"\n        [(groupedAssignments)]="groupedAssignments" [canCobrar]="true">\n    </app-evento-cobro-asignaciones-tabla>\n</div>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCobrosAsignadosComponent, { className: "ListCobrosAsignadosComponent", filePath: "src/app/main/cobranza/list-cobros-asignados/list-cobros-asignados.component.ts", lineNumber: 17 });
})();

// src/app/main/cobranza/notificaciones/notificaciones.component.ts
function NotificacionesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "app-progress-bar-consolidado", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("isLoading", ctx_r1.isLoading)("progress", ctx_r1.progress)("dataLen", ctx_r1.dataSource.length);
  }
}
function NotificacionesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "div", 5)(5, "span", 38);
    \u0275\u0275element(6, "i", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 40)(9, "button", 41);
    \u0275\u0275listener("click", function NotificacionesComponent_Conditional_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.imprimirNotificaciones());
    });
    \u0275\u0275element(10, "i", 33);
    \u0275\u0275text(11, " Imprimir Notificaciones Seleccionadas ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate3(" ", ctx_r1.selected.length, " cr\xE9dito", ctx_r1.selected.length !== 1 ? "s" : "", " seleccionado", ctx_r1.selected.length !== 1 ? "s" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.selected.length);
  }
}
var _NotificacionesComponent = class _NotificacionesComponent {
  constructor() {
    this.creditos = [];
    this.dataSource = [];
    this.columnsClusters = COBRANZA_COLUMNS_CLUSTERS;
    this.progress = 0;
    this.isLoading = false;
    this.showForm = false;
    this.options = {};
    this.selected = [];
    this.showFolioForm = false;
    this.folioInicial = 0;
    this.fechaNotificacion = "";
    this.informeCobranzaController = inject(InformeCobranzaService);
    this.notificacion = inject(contratoNotificaciones);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.informeCobranzaController.progress$.subscribe((p) => {
        this.progress = p;
      });
    });
  }
  fetchData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.dataSource = yield this.informeCobranzaController.fetchDataMaped(this.options);
      this.creditos = yield this.informeCobranzaController.fetchData(this.options);
      console.log(this.creditos);
      this.isLoading = false;
    });
  }
  imprimirNotificaciones() {
    if (this.selected.length === 0)
      return;
    this.folioInicial = 0;
    this.fechaNotificacion = "";
    this.showFolioForm = true;
  }
  generarNotificacionesConFolios() {
    return __async(this, null, function* () {
      const selected = this.selected.map((r) => r["ID CREDITO"]);
      const creditos = this.creditos.filter((c) => selected.includes(c.id));
      if (creditos.length === 0 || !this.folioInicial || !this.fechaNotificacion) {
        return;
      }
      const folios = creditos.map((_, index) => ({
        folio: this.folioInicial + index,
        fecha: this.fechaNotificacion
      }));
      yield this.notificacion.generarNotificacion(creditos, folios);
      this.showFolioForm = false;
    });
  }
  cerrarFormularioFolio() {
    this.showFolioForm = false;
    this.folioInicial = 0;
    this.fechaNotificacion = "";
  }
};
_NotificacionesComponent.\u0275fac = function NotificacionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificacionesComponent)();
};
_NotificacionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificacionesComponent, selectors: [["app-notificaciones"]], decls: 55, vars: 13, consts: [["tabla", ""], ["folioForm", "ngForm"], [1, "container-fluid", "my-4"], [1, "card", "shadow", "border-0", "rounded-3"], [1, "card-header", "bg-primary", "text-white", "py-3"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-printer", "me-3", "fs-3"], [1, "mb-1", "fw-bold"], [1, "mb-0", "opacity-85"], [1, "p-4"], [3, "download", "filtros"], [1, "px-4", "pb-4"], [1, "px-3"], ["trackKey", "ID CREDITO", "fileName", "notificaciones_cobranza", 3, "selectedRows", "data", "clusterColumns", "useCheckBox", "tableHeight"], ["size", "medium", 3, "showChange", "show"], [1, "alert", "alert-info", "mt-3", "mb-0"], [1, "bi", "bi-info-circle", "me-2"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "bi", "bi-file-earmark-text", "me-2"], [3, "ngSubmit"], [1, "mb-3"], ["for", "folioInicial", 1, "form-label"], ["type", "number", "id", "folioInicial", "name", "folioInicial", "required", "", "min", "1", "placeholder", "Ej: 356", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "mb-4"], ["for", "fechaNotificacion", 1, "form-label"], ["type", "date", "id", "fechaNotificacion", "name", "fechaNotificacion", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "g-2"], [1, "col-6"], ["type", "button", 1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "bi", "bi-printer", "me-2"], [3, "isLoading", "progress", "dataLen"], [1, "container-fluid", "p-3", "bg-light", "rounded-3", "border"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-md-6", "mb-3", "mb-md-0"], [1, "badge", "bg-primary", "fs-6", "py-2", "px-3", "d-flex", "align-items-center"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "col-md-6", "text-md-end"], [1, "btn", "btn-secondary", "py-2", "px-4", "fw-medium", "d-inline-flex", "align-items-center", 3, "click", "disabled"]], template: function NotificacionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275elementStart(5, "div")(6, "h4", 7);
    \u0275\u0275text(7, "Impresi\xF3n de Notificaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 8);
    \u0275\u0275text(9, "Seleccione cr\xE9ditos e imprima notificaciones de cobranza de forma masiva");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 9)(11, "app-dates-picker", 10);
    \u0275\u0275listener("download", function NotificacionesComponent_Template_app_dates_picker_download_11_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.fetchData());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, NotificacionesComponent_Conditional_12_Template, 2, 3, "div", 11)(13, NotificacionesComponent_Conditional_13_Template, 12, 4, "div", 12);
    \u0275\u0275elementStart(14, "app-informe-tabla-dinamica-local", 13, 0);
    \u0275\u0275listener("selectedRows", function NotificacionesComponent_Template_app_informe_tabla_dinamica_local_selectedRows_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selected = $event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "app-formulario-flotante", 14);
    \u0275\u0275twoWayListener("showChange", function NotificacionesComponent_Template_app_formulario_flotante_showChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.showFolioForm, $event) || (ctx.showFolioForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(17, "div", 15);
    \u0275\u0275element(18, "i", 16);
    \u0275\u0275text(19, " Se generar\xE1n ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " notificaciones con folios consecutivos desde ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " hasta ");
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 17)(29, "h5", 18);
    \u0275\u0275element(30, "i", 19);
    \u0275\u0275text(31, " Configurar Folios de Notificaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "form", 20, 1);
    \u0275\u0275listener("ngSubmit", function NotificacionesComponent_Template_form_ngSubmit_32_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generarNotificacionesConFolios());
    });
    \u0275\u0275elementStart(34, "div", 21)(35, "label", 22);
    \u0275\u0275text(36, "Folio Inicial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function NotificacionesComponent_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.folioInicial, $event) || (ctx.folioInicial = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "small", 24);
    \u0275\u0275text(39, "El sistema generar\xE1 folios consecutivos autom\xE1ticamente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 25)(41, "label", 26);
    \u0275\u0275text(42, "Fecha de Notificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function NotificacionesComponent_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.fechaNotificacion, $event) || (ctx.fechaNotificacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "small", 24);
    \u0275\u0275text(45, "Esta fecha se aplicar\xE1 a todas las notificaciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 28)(47, "div", 29)(48, "button", 30);
    \u0275\u0275listener("click", function NotificacionesComponent_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cerrarFormularioFolio());
    });
    \u0275\u0275element(49, "i", 31);
    \u0275\u0275text(50, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 29)(52, "button", 32);
    \u0275\u0275element(53, "i", 33);
    \u0275\u0275text(54, " Generar Notificaciones ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("filtros", ctx.options);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading ? 12 : ctx.dataSource.length ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.dataSource)("clusterColumns", ctx.columnsClusters)("useCheckBox", true)("tableHeight", 600);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx.showFolioForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.selected.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.folioInicial || "?");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.folioInicial ? ctx.folioInicial + ctx.selected.length - 1 : "?");
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.folioInicial);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.fechaNotificacion);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", !ctx.folioInicial || !ctx.fechaNotificacion);
  }
}, dependencies: [
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  MinValidator,
  NgModel,
  NgForm,
  ProgressBarConsolidadoComponent,
  InformeTablaDinamicaLocalComponent,
  DatesPickerComponent,
  FormularioFlotanteComponent
], encapsulation: 2 });
var NotificacionesComponent = _NotificacionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificacionesComponent, [{
    type: Component,
    args: [{ selector: "app-notificaciones", imports: [
      FormsModule,
      ProgressBarConsolidadoComponent,
      InformeTablaDinamicaLocalComponent,
      DatesPickerComponent,
      FormularioFlotanteComponent
    ], template: `<div class="container-fluid my-4">
  <div class="card shadow border-0 rounded-3">
    <div class="card-header bg-primary text-white py-3">
      <div class="d-flex align-items-center">
        <i class="bi bi-printer me-3 fs-3"></i>
        <div>
          <h4 class="mb-1 fw-bold">Impresi\xF3n de Notificaciones</h4>
          <p class="mb-0 opacity-85">Seleccione cr\xE9ditos e imprima notificaciones de cobranza de forma masiva</p>
        </div>
      </div>
    </div>
    <div class="p-4">
      <app-dates-picker [filtros]="options" (download)="fetchData()"></app-dates-picker>
    </div>

    @if (isLoading) {
    <div class="px-4 pb-4">
      <app-progress-bar-consolidado [isLoading]="isLoading" [progress]="progress"
        [dataLen]="dataSource.length"></app-progress-bar-consolidado>
    </div>
    }@else if(dataSource.length){
    <div class="px-3">
      <div class="container-fluid p-3 bg-light rounded-3 border">
        <div class="row justify-content-between align-items-center ">
          <div class="col-md-6 mb-3 mb-md-0">
            <div class="d-flex align-items-center">
              <span class="badge bg-primary fs-6 py-2 px-3 d-flex align-items-center">
                <i class="bi bi-check-circle-fill me-2"></i>
                {{selected.length}} cr\xE9dito{{selected.length !== 1 ? 's' : ''}} seleccionado{{selected.length !== 1 ?
                's' : ''}}
              </span>
            </div>
          </div>
          <div class="col-md-6 text-md-end">
            <button class="btn btn-secondary py-2 px-4 fw-medium d-inline-flex align-items-center"
              [disabled]="!selected.length" (click)="imprimirNotificaciones()">
              <i class="bi bi-printer me-2"></i>
              Imprimir Notificaciones Seleccionadas
            </button>
          </div>
        </div>
      </div>
    </div>
    }

    <app-informe-tabla-dinamica-local #tabla [data]="dataSource" [clusterColumns]="columnsClusters" [useCheckBox]="true"
      [tableHeight]="600" (selectedRows)="selected=$event" trackKey="ID CREDITO"
      fileName="notificaciones_cobranza"></app-informe-tabla-dinamica-local>
  </div>
</div>

<!-- Formulario flotante para folio y fecha -->
<app-formulario-flotante [(show)]="showFolioForm" size="medium">
  <div class="alert alert-info mt-3 mb-0">
    <i class="bi bi-info-circle me-2"></i>
    Se generar\xE1n <strong>{{selected.length}}</strong> notificaciones con folios consecutivos desde
    <strong>{{folioInicial || '?'}}</strong> hasta <strong>{{folioInicial ? folioInicial + selected.length - 1 :
      '?'}}</strong>
  </div>
  <div class="card-body">
    <h5 class="card-title mb-4">
      <i class="bi bi-file-earmark-text me-2"></i>
      Configurar Folios de Notificaci\xF3n
    </h5>

    <form #folioForm="ngForm" (ngSubmit)="generarNotificacionesConFolios()">
      <div class="mb-3">
        <label for="folioInicial" class="form-label">Folio Inicial</label>
        <input type="number" class="form-control" id="folioInicial" name="folioInicial" [(ngModel)]="folioInicial"
          required min="1" placeholder="Ej: 356">
        <small class="text-muted">El sistema generar\xE1 folios consecutivos autom\xE1ticamente</small>
      </div>

      <div class="mb-4">
        <label for="fechaNotificacion" class="form-label">Fecha de Notificaci\xF3n</label>
        <input type="date" class="form-control" id="fechaNotificacion" name="fechaNotificacion"
          [(ngModel)]="fechaNotificacion" required>
        <small class="text-muted">Esta fecha se aplicar\xE1 a todas las notificaciones</small>
      </div>

      <div class="row g-2">
        <div class="col-6">
          <button type="button" class="btn btn-secondary w-100" (click)="cerrarFormularioFolio()">
            <i class="bi bi-x-circle me-2"></i>
            Cancelar
          </button>
        </div>
        <div class="col-6">
          <button type="submit" class="btn btn-primary w-100" [disabled]="!folioInicial || !fechaNotificacion">
            <i class="bi bi-printer me-2"></i>
            Generar Notificaciones
          </button>
        </div>
      </div>
    </form>
  </div>
</app-formulario-flotante>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificacionesComponent, { className: "NotificacionesComponent", filePath: "src/app/main/cobranza/notificaciones/notificaciones.component.ts", lineNumber: 24 });
})();

// src/app/main/cobranza/dashboard-cobranza/dashboard-cobranza.component.ts
function DashboardCobranzaComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-graphs-view", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.trendData);
  }
}
function DashboardCobranzaComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-graphs-view", 18);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.trendDataMensual);
  }
}
var TREND_DATA_SEMANAL = [
  { label: "Lun", value: 120 },
  { label: "Mar", value: 145 },
  { label: "Mi\xE9", value: 132 },
  { label: "Jue", value: 158 },
  { label: "Vie", value: 167 },
  { label: "S\xE1b", value: 98 },
  { label: "Dom", value: 22 }
];
var TREND_DATA_MENSUAL = [
  { label: "Semana 1", value: 520 },
  { label: "Semana 2", value: 645 },
  { label: "Semana 3", value: 732 },
  { label: "Semana 4", value: 858 }
];
var STATUS_DATA = [
  { label: "Completado", value: 842, color: "#2ecc71" },
  { label: "Pendiente", value: 403, color: "#f39c12" },
  { label: "No gestionable", value: 105, color: "#e74c3c" }
];
var CALL_RESULTS_DATA = [
  { label: "Contactado", value: 325, color: "#3498db" },
  { label: "No contesta", value: 287, color: "#e67e22" },
  { label: "N\xFAmero err\xF3neo", value: 154, color: "#95a5a6" },
  { label: "Promesa de pago", value: 76, color: "#2ecc71" }
];
var PERFORMANCE_DATA = [
  {
    label: "Desempe\xF1o por Gestor",
    data: [78, 64, 92, 56],
    backgroundColor: "#9034dbff",
    borderColor: "#6c29b9ff",
    borderWidth: 1
  }
];
var PERFORMANCE_LABELS = ["Gestor A", "Gestor B", "Gestor C", "Gestor D"];
var MORA_DATA = [
  { label: "1-30 d\xEDas", value: 245, color: "#27ae60" },
  { label: "31-60 d\xEDas", value: 187, color: "#f39c12" },
  { label: "61-90 d\xEDas", value: 132, color: "#e67e22" },
  { label: "91-120 d\xEDas", value: 98, color: "#e74c3c" },
  { label: "+120 d\xEDas", value: 64, color: "#c0392b" }
];
var AMOUNT_DISTRIBUTION_DATA = [
  {
    label: "0 - $1,000",
    data: [245, 187, 132],
    backgroundColor: "#3498db",
    borderColor: "#2980b9",
    borderWidth: 1
  },
  {
    label: "$1,001 - $5,000",
    data: [178, 154, 198],
    backgroundColor: "#e74c3c",
    borderColor: "#c0392b",
    borderWidth: 1
  },
  {
    label: "$5,001 - $10,000",
    data: [95, 112, 87],
    backgroundColor: "#f1c40f",
    borderColor: "#f39c12",
    borderWidth: 1
  },
  {
    label: "$10,001 - $20,000",
    data: [64, 78, 52],
    backgroundColor: "#2ecc71",
    borderColor: "#27ae60",
    borderWidth: 1
  },
  {
    label: "+$20,000",
    data: [28, 35, 22],
    backgroundColor: "#9b59b6",
    borderColor: "#8e44ad",
    borderWidth: 1
  }
];
var AMOUNT_DISTRIBUTION_LABELS = ["Semana 1", "Semana 2", "Semana 3"];
var _DashboardCobranzaComponent = class _DashboardCobranzaComponent {
  constructor() {
    this.trendType = "SEMANAL";
    this.eventoCobroAsignaciones = [];
    this.creditosAbonos = [];
    this.estadosCuenta = [];
    this.trendData = TREND_DATA_SEMANAL;
    this.trendDataMensual = TREND_DATA_MENSUAL;
    this.statusData = STATUS_DATA;
    this.callResultsData = CALL_RESULTS_DATA;
    this.performanceData = PERFORMANCE_DATA;
    this.performanceLabels = PERFORMANCE_LABELS;
    this.moraData = MORA_DATA;
    this.amountDistributionData = AMOUNT_DISTRIBUTION_DATA;
    this.amountDistributionLabels = AMOUNT_DISTRIBUTION_LABELS;
    this.eventoCobroAsignacionController = inject(EventoCobroAsignacionService);
    this.creditoAbonoController = inject(CreditoAbonoService);
    this.estadoCuentaController = inject(EstadoCuentaService);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const today = /* @__PURE__ */ new Date();
      const fechaFin = today.toISOString().substring(0, 10);
      const fechaInicio = today.getFullYear() + "-" + today.getMonth().toString().padStart(2, "0") + "-01";
      const deleted_conditional = {
        key: "deleted_at",
        operator: "IS NULL",
        value: null
      };
      this.eventoCobroAsignaciones = yield this.eventoCobroAsignacionController.all({
        relations: [
          "eventoCobroAsignacionUsuarios.creditoEventosCobros",
          "eventoCobroAsignacionUsuarios.usuarioAsignado"
        ],
        conditionals: [
          {
            key: "fecha",
            operator: "<=",
            value: fechaFin
          },
          {
            key: "fecha",
            operator: ">=",
            value: fechaInicio
          },
          deleted_conditional
        ],
        chunkSize: 3e3
      });
      this.creditosAbonos = yield this.creditoAbonoController.all({
        columns: ["fecha", "monto"],
        conditionals: [
          {
            key: "fecha",
            operator: "<=",
            value: fechaFin
          },
          {
            key: "fecha",
            operator: ">=",
            value: fechaInicio
          },
          deleted_conditional
        ]
      });
      this.estadosCuenta = yield this.estadoCuentaController.all({
        conditionals: [
          {
            key: "total_a_liquidar",
            operator: ">",
            value: 0
          },
          deleted_conditional
        ],
        columns: ["monto_total_mas_intereses", "total_a_liquidar"]
      });
    });
  }
  get totalAsignados() {
    return this.eventoCobroAsignaciones.length;
  }
  get totalGestionados() {
    return this.eventoCobroAsignaciones.filter((a) => a.estado == "COMPLETADA").length;
  }
  get diferenciaSemanaAnterior() {
    const hoy = /* @__PURE__ */ new Date();
    const hace7Dias = /* @__PURE__ */ new Date();
    hace7Dias.setDate(hoy.getDate() - 7);
    const hace14Dias = /* @__PURE__ */ new Date();
    hace14Dias.setDate(hoy.getDate() - 14);
    const asignadosSemanaActual = this.eventoCobroAsignaciones.filter((a) => {
      const fechaAsignacion = new Date(a.fecha);
      return fechaAsignacion >= hace7Dias && fechaAsignacion <= hoy;
    });
    const asignadosSemanaPasada = this.eventoCobroAsignaciones.filter((a) => {
      const fechaAsignacion = new Date(a.fecha);
      return fechaAsignacion >= hace14Dias && fechaAsignacion < hace7Dias;
    });
    const cantidadActual = asignadosSemanaActual.length;
    const cantidadPasada = asignadosSemanaPasada.length;
    if (cantidadPasada === 0) {
      return cantidadActual > 0 ? 100 : 0;
    }
    return Math.round((cantidadActual - cantidadPasada) / cantidadPasada * 100);
  }
  get gestionadoPorcentaje() {
    if (this.totalAsignados == 0)
      return 0;
    return this.totalGestionados / this.totalAsignados * 100;
  }
  get efectividad() {
    if (this.totalGestionados === 0)
      return 0;
    const efectivos = this.eventoCobroAsignaciones.filter((a) => a.estado === "COMPLETADA" && this.esGestionEfectiva(a)).length;
    return Math.round(efectivos / this.totalGestionados * 100);
  }
  // Función auxiliar para determinar si una gestión fue efectiva
  esGestionEfectiva(asignacion) {
    const gestion = asignacion.evento_cobro_asignacion_usuarios?.find((a) => a.credito_eventos_cobros)?.credito_eventos_cobros;
    if (!gestion)
      return false;
    return gestion.resultado === "PROMESA DE PAGO" || gestion.resultado === "LOCALIZADO" || gestion.resultado === "LIQUIDADO" || gestion.resultado.includes("CONVENIO");
  }
  get diferenciaEfectividadMesAnterior() {
    const hoy = /* @__PURE__ */ new Date();
    const inicioMesActual = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    const inicioMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth() - 1, 1);
    const finMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
    const gestionadosMesActual = this.eventoCobroAsignaciones.filter((a) => {
      const fechaAsignacion = new Date(a.fecha);
      return fechaAsignacion >= inicioMesActual && fechaAsignacion <= hoy && a.estado === "COMPLETADA";
    });
    const efectivosMesActual = gestionadosMesActual.filter((a) => this.esGestionEfectiva(a)).length;
    const efectividadActual = gestionadosMesActual.length > 0 ? efectivosMesActual / gestionadosMesActual.length * 100 : 0;
    const gestionadosMesAnterior = this.eventoCobroAsignaciones.filter((a) => {
      const fechaAsignacion = new Date(a.fecha);
      return fechaAsignacion >= inicioMesAnterior && fechaAsignacion <= finMesAnterior && a.estado === "COMPLETADA";
    });
    const efectivosMesAnterior = gestionadosMesAnterior.filter((a) => this.esGestionEfectiva(a)).length;
    const efectividadAnterior = gestionadosMesAnterior.length > 0 ? efectivosMesAnterior / gestionadosMesAnterior.length * 100 : 0;
    if (efectividadAnterior === 0) {
      return efectividadActual > 0 ? 100 : 0;
    }
    return Math.round((efectividadActual - efectividadAnterior) / efectividadAnterior * 100);
  }
  // Propiedad formateada para mostrar en el template
  get diferenciaEfectividadFormateada() {
    const diferencia = this.diferenciaEfectividadMesAnterior;
    if (diferencia > 0) {
      return `+${diferencia}%`;
    } else if (diferencia < 0) {
      return `${diferencia}%`;
    } else {
      return "0%";
    }
  }
  get montoRecuperadoTotal() {
    return this.creditosAbonos.reduce((acc, a) => acc + +a.monto, 0);
  }
  get porcentajeRecuperado() {
    if (this.totalCartera == 0)
      return 0;
    return this.montoRecuperadoTotal / this.totalCartera * 100;
  }
  get totalCartera() {
    return this.estadosCuenta.reduce((acc, e) => acc + +(e.monto_total_mas_intereses ?? 0), 0);
  }
  get totalPendiente() {
    return this.estadosCuenta.reduce((acc, e) => acc + +(e.total_a_liquidar ?? 0), 0);
  }
};
_DashboardCobranzaComponent.\u0275fac = function DashboardCobranzaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardCobranzaComponent)();
};
_DashboardCobranzaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardCobranzaComponent, selectors: [["app-dashboard-cobranza"]], decls: 97, vars: 27, consts: [[1, "container-fluid", "p-3", "rounded", "shadow", "bg-white"], [1, "dashboard-header"], [1, "text-muted"], [1, "row", "mb-4"], [1, "col-md-3"], [1, "card", "kpi-card"], [1, "card-body"], [1, "card-title"], [1, "card-value"], [1, "card-text"], [1, "text-success"], [1, "row"], [1, "col-md-8"], [1, "card", "mb-4"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-primary", 3, "click"], ["currentGraph", "line", 3, "data"], [1, "col"], [1, "card"], [1, "card-header"], ["currentGraph", "stacked-bar", 3, "dataSets", "labels"], ["currentGraph", "bar", 3, "data", "chartMaxValue"], [1, "col-md-4"], ["currentGraph", "comparison-bar", 3, "dataSets", "labels"], ["currentGraph", "pie", 3, "data"], ["currentGraph", "dougnut", 3, "data"]], template: function DashboardCobranzaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
    \u0275\u0275text(3, "Avance de Gestiones de Cobranza");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 2);
    \u0275\u0275text(5, "Consulte estadisticas, datos y avance de progreso en el proceso de cobranza y asignaciones de gestiones.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "h5", 7);
    \u0275\u0275text(11, "Total Asignado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h2", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 9)(15, "span", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " vs semana anterior");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 4)(19, "div", 5)(20, "div", 6)(21, "h5", 7);
    \u0275\u0275text(22, "Gestionado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h2", 8);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 9);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 4)(28, "div", 5)(29, "div", 6)(30, "h5", 7);
    \u0275\u0275text(31, "Efectividad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h2", 8);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 9)(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " vs mes anterior ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 4)(39, "div", 5)(40, "div", 6)(41, "h5", 7);
    \u0275\u0275text(42, "Monto Recuperado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h2", 8);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p", 9);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "div", 11)(49, "div", 12)(50, "div", 13)(51, "div", 14)(52, "h5", 15);
    \u0275\u0275text(53, "Tendencia de Gestiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 16)(55, "button", 17);
    \u0275\u0275listener("click", function DashboardCobranzaComponent_Template_button_click_55_listener() {
      return ctx.trendType = "SEMANAL";
    });
    \u0275\u0275text(56, "Semanal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 17);
    \u0275\u0275listener("click", function DashboardCobranzaComponent_Template_button_click_57_listener() {
      return ctx.trendType = "MENSUAL";
    });
    \u0275\u0275text(58, "Mensual");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 6);
    \u0275\u0275conditionalCreate(60, DashboardCobranzaComponent_Conditional_60_Template, 1, 1, "app-graphs-view", 18)(61, DashboardCobranzaComponent_Conditional_61_Template, 1, 1, "app-graphs-view", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 3)(63, "div", 19)(64, "div", 20)(65, "div", 21)(66, "h5", 15);
    \u0275\u0275text(67, "Distribuci\xF3n por Monto");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 6);
    \u0275\u0275element(69, "app-graphs-view", 22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 11)(71, "div", 19)(72, "div", 13)(73, "div", 21)(74, "h5", 15);
    \u0275\u0275text(75, "Distribuci\xF3n por D\xEDas de Mora");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 6);
    \u0275\u0275element(77, "app-graphs-view", 23);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(78, "div", 24)(79, "div", 13)(80, "div", 21)(81, "h5", 15);
    \u0275\u0275text(82, "Desempe\xF1o por Ejecutivo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 6);
    \u0275\u0275element(84, "app-graphs-view", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 13)(86, "div", 21)(87, "h5", 15);
    \u0275\u0275text(88, "Resultados de Llamadas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 6);
    \u0275\u0275element(90, "app-graphs-view", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 13)(92, "div", 21)(93, "h5", 15);
    \u0275\u0275text(94, "Estado de Gestiones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 6);
    \u0275\u0275element(96, "app-graphs-view", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.totalAsignados);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("+", ctx.diferenciaSemanaAnterior, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.totalGestionados);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.gestionadoPorcentaje.toFixed(2), "% del total");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx.efectividad, "%");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-success", ctx.diferenciaEfectividadMesAnterior > 0)("text-danger", ctx.diferenciaEfectividadMesAnterior < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.diferenciaEfectividadFormateada, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 25, ctx.montoRecuperadoTotal));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.porcentajeRecuperado.toFixed(2), "% del total");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active", ctx.trendType == "SEMANAL");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx.trendType == "MENSUAL");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.trendType == "SEMANAL" ? 60 : 61);
    \u0275\u0275advance(9);
    \u0275\u0275property("dataSets", ctx.amountDistributionData)("labels", ctx.amountDistributionLabels);
    \u0275\u0275advance(8);
    \u0275\u0275property("data", ctx.moraData)("chartMaxValue", 300);
    \u0275\u0275advance(7);
    \u0275\u0275property("dataSets", ctx.performanceData)("labels", ctx.performanceLabels);
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx.callResultsData);
    \u0275\u0275advance(6);
    \u0275\u0275property("data", ctx.statusData);
  }
}, dependencies: [
  GraphsViewComponent,
  CurrencyPipe
], styles: ["\n\n.kpi-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.kpi-card[_ngcontent-%COMP%]   .card-value[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid #eaeaea;\n}\n/*# sourceMappingURL=dashboard-cobranza.component.css.map */"] });
var DashboardCobranzaComponent = _DashboardCobranzaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardCobranzaComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-cobranza", imports: [
      GraphsViewComponent,
      CurrencyPipe
    ], template: `<div class="container-fluid p-3 rounded shadow bg-white">
    <!-- Header -->
    <div class="dashboard-header">
        <h2>Avance de Gestiones de Cobranza</h2>
        <p class="text-muted">Consulte estadisticas, datos y avance de progreso en el proceso de cobranza y asignaciones
            de gestiones.</p>
    </div>

    <!-- KPI Cards -->
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card kpi-card">
                <div class="card-body">
                    <h5 class="card-title">Total Asignado</h5>
                    <h2 class="card-value">{{totalAsignados}}</h2>
                    <p class="card-text"><span class="text-success">+{{diferenciaSemanaAnterior}}%</span> vs semana
                        anterior</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card kpi-card">
                <div class="card-body">
                    <h5 class="card-title">Gestionado</h5>
                    <h2 class="card-value">{{totalGestionados}}</h2>
                    <p class="card-text">{{gestionadoPorcentaje.toFixed(2)}}% del total</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card kpi-card">
                <div class="card-body">
                    <h5 class="card-title">Efectividad</h5>
                    <h2 class="card-value">{{ efectividad }}%</h2>
                    <p class="card-text">
                        <span [class.text-success]="diferenciaEfectividadMesAnterior > 0"
                            [class.text-danger]="diferenciaEfectividadMesAnterior < 0">
                            {{ diferenciaEfectividadFormateada }}
                        </span>
                        vs mes anterior
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card kpi-card">
                <div class="card-body">
                    <h5 class="card-title">Monto Recuperado</h5>
                    <h2 class="card-value">{{montoRecuperadoTotal | currency}}</h2>
                    <p class="card-text">{{porcentajeRecuperado.toFixed(2)}}% del total</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Charts Section -->
    <div class="row">
        <!-- Left Column -->
        <div class="col-md-8">
            <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Tendencia de Gestiones</h5>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary" [class.active]="trendType=='SEMANAL'"
                            (click)="trendType='SEMANAL'">Semanal</button>
                        <button class="btn btn-outline-primary" [class.active]="trendType=='MENSUAL'"
                            (click)="trendType='MENSUAL'">Mensual</button>
                    </div>
                </div>
                <div class="card-body">
                    @if (trendType=='SEMANAL') {
                    <app-graphs-view [data]="trendData" currentGraph="line"></app-graphs-view>
                    }@else {
                    <app-graphs-view [data]="trendDataMensual" currentGraph="line"></app-graphs-view>
                    }
                </div>
            </div>

            <div class="row mb-4">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">Distribuci\xF3n por Monto</h5>
                        </div>
                        <div class="card-body">
                            <app-graphs-view [dataSets]="amountDistributionData" [labels]="amountDistributionLabels"
                                currentGraph="stacked-bar"></app-graphs-view>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Distribuci\xF3n por D\xEDas de Mora</h5>
                        </div>
                        <div class="card-body">
                            <app-graphs-view [data]="moraData" currentGraph="bar"
                                [chartMaxValue]="300"></app-graphs-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Column -->
        <div class="col-md-4">
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Desempe\xF1o por Ejecutivo</h5>
                </div>
                <div class="card-body">
                    <app-graphs-view [dataSets]="performanceData" [labels]="performanceLabels"
                        currentGraph="comparison-bar"></app-graphs-view>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Resultados de Llamadas</h5>
                </div>
                <div class="card-body">
                    <app-graphs-view [data]="callResultsData" currentGraph="pie"></app-graphs-view>
                </div>
            </div>

            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Estado de Gestiones</h5>
                </div>
                <div class="card-body">
                    <app-graphs-view [data]="statusData" currentGraph="dougnut"></app-graphs-view>
                </div>
            </div>
        </div>
    </div>
</div>`, styles: ["/* src/app/main/cobranza/dashboard-cobranza/dashboard-cobranza.component.css */\n.kpi-card {\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease;\n}\n.kpi-card:hover {\n  transform: translateY(-5px);\n}\n.kpi-card .card-value {\n  color: #2c3e50;\n  font-weight: 700;\n}\n.card {\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.card-header {\n  background-color: white;\n  border-bottom: 1px solid #eaeaea;\n}\n/*# sourceMappingURL=dashboard-cobranza.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardCobranzaComponent, { className: "DashboardCobranzaComponent", filePath: "src/app/main/cobranza/dashboard-cobranza/dashboard-cobranza.component.ts", lineNumber: 109 });
})();

// src/app/main/cobranza/list-cobros-asignaciones/list-cobros-asignaciones.component.ts
var _forTrack03 = ($index, $item) => $item.municipio;
function ListCobrosAsignacionesComponent_Conditional_63_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "div", 38)(4, "div", 39)(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "h6", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 43);
    \u0275\u0275element(11, "i", 44);
    \u0275\u0275elementStart(12, "span", 45);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const \u0275$index_129_r3 = ctx_r0.$index;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275$index_129_r3 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(item_r2.municipio));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.municipio, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", item_r2.count, " asignaciones (", item_r2.porcentaje, "%) ");
  }
}
function ListCobrosAsignacionesComponent_Conditional_63_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ListCobrosAsignacionesComponent_Conditional_63_For_9_Conditional_0_Template, 14, 6, "div", 35);
  }
  if (rf & 2) {
    const \u0275$index_129_r3 = ctx.$index;
    \u0275\u0275conditional(\u0275$index_129_r3 < 6 ? 0 : -1);
  }
}
function ListCobrosAsignacionesComponent_Conditional_63_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "small", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Mostrando top 6 de ", ctx_r3.estadisticasPorMunicipio.length, " municipios ");
  }
}
function ListCobrosAsignacionesComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 29)(2, "div", 30)(3, "div", 10)(4, "h6", 31);
    \u0275\u0275element(5, "i", 32);
    \u0275\u0275text(6, " Municipios por asignaciones activas ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275repeaterCreate(8, ListCobrosAsignacionesComponent_Conditional_63_For_9_Template, 1, 1, null, null, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ListCobrosAsignacionesComponent_Conditional_63_Conditional_10_Template, 3, 1, "div", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r3.estadisticasPorMunicipioConPorcentaje);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.estadisticasPorMunicipio.length > 6 ? 10 : -1);
  }
}
var _ListCobrosAsignacionesComponent = class _ListCobrosAsignacionesComponent {
  constructor() {
    this.groupedAssignments = [];
    this.selectedAssignments = /* @__PURE__ */ new Set();
    this.estadisticasPorMunicipio = [];
    this.eventoCobroAsignacionController = inject(EventoCobroAsignacionService);
    this.utils = inject(UtilsService);
    this.creditoService = inject(CreditoService);
  }
  asignacionesCompletadas() {
    return this.groupedAssignments.reduce((acc, group) => acc + group.stats.completed, 0);
  }
  get totalGestiones() {
    return this.groupedAssignments.flatMap((a) => a.assignments).length;
  }
  get estadisticasPorMunicipioConPorcentaje() {
    const total = this.groupedAssignments.flatMap((g) => g.assignments).filter((g) => g.estado == "EN PROGRESO").length;
    return this.estadisticasPorMunicipio.map((item) => __spreadProps(__spreadValues({}, item), {
      porcentaje: total > 0 ? (item.count / total * 100).toFixed(1) : "0.0"
    }));
  }
  cargarEstadisticasPorMunicipio() {
    return __async(this, null, function* () {
      const allCreditoIds = this.groupedAssignments.flatMap((group) => group.assignments.map((assignment) => assignment.credito_id)).filter((id) => id != null);
      if (allCreditoIds.length === 0) {
        this.estadisticasPorMunicipio = [];
        return;
      }
      const uniqueCreditoIds = [...new Set(allCreditoIds)];
      const conditionals = [{
        key: "id",
        operator: "IN",
        value: uniqueCreditoIds.join(",")
      }];
      const creditos = yield this.creditoService.all({
        conditionals,
        relations: ["sucursales"],
        loader: false,
        columns: ["id", "sucursal_id"]
      });
      const creditoToMunicipio = /* @__PURE__ */ new Map();
      creditos.forEach((credito) => {
        const municipio = credito.sucursales?.nombre?.toUpperCase() || "SIN MUNICIPIO";
        creditoToMunicipio.set(credito.id, municipio);
      });
      const municipioCount = {};
      allCreditoIds.forEach((creditoId) => {
        const municipio = creditoToMunicipio.get(creditoId) || "SIN MUNICIPIO";
        municipioCount[municipio] = (municipioCount[municipio] || 0) + 1;
      });
      this.estadisticasPorMunicipio = Object.entries(municipioCount).sort(([, a], [, b]) => b - a).map(([municipio, count]) => ({
        municipio,
        count
      }));
    });
  }
  get totalMunicipios() {
    return Object.keys(this.estadisticasPorMunicipio).length;
  }
};
_ListCobrosAsignacionesComponent.\u0275fac = function ListCobrosAsignacionesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListCobrosAsignacionesComponent)();
};
_ListCobrosAsignacionesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListCobrosAsignacionesComponent, selectors: [["app-list-cobros-asignaciones"]], viewQuery: function ListCobrosAsignacionesComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(EventoCobroAsignacionesTablaComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabla = _t.first);
  }
}, decls: 74, vars: 10, consts: [[1, "container-fluid", "bg-white", "rounded", "shadow", "p-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "d-flex", "align-items-center"], [1, "p-3", "me-3"], [1, "bi", "bi-clipboard-check", "fs-2", "text-primary"], [1, "mb-0", "text-primary"], [1, "text-muted", "mb-0"], [1, "row"], [1, "col-md-3", "mb-3"], [1, "card", "border-0", "shadow-sm", "h-100"], [1, "card-body"], [1, "bg-primary", "bg-opacity-10", "rounded", "p-3", "me-3"], [1, "bi", "bi-collection-play", "fs-4", "text-bg-primary"], [1, "card-title", "text-muted", "mb-1"], [1, "text-muted"], [1, "bg-secondary", "bg-opacity-10", "rounded", "p-3", "me-3"], [1, "bi", "bi-collection", "fs-4", "text-bg-secondary"], [1, "mb-0", "text-secondary"], [1, "bg-success", "bg-opacity-10", "rounded", "p-3", "me-3"], [1, "bi", "bi-check-circle", "fs-4", "text-bg-success"], [1, "mb-0", "text-success"], [1, "bg-info", "bg-opacity-10", "rounded", "p-3", "me-3"], [1, "bi", "bi-clock-history", "fs-4"], [1, "mb-0", "text-info"], [1, "alert", "alert-info", "d-flex", "align-items-center", "mb-4"], [1, "bi", "bi-graph-up", "me-3", "fs-4"], [1, "alert-heading", "mb-1"], [1, "mb-0"], [3, "selectedAssignmentsChange", "groupedAssignmentsChange", "selectedAssignments", "showUserList", "groupedAssignments", "canDelete"], [1, "col-12"], [1, "card", "border-0", "shadow-sm"], [1, "card-title", "text-muted", "mb-3"], [1, "bi", "bi-geo-alt-fill", "me-2", "text-primary"], [1, "row", "g-3"], [1, "mt-3", "text-center"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "card", "border-0", "shadow-sm", "bg-light", "h-100"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-start"], [1, "bg-primary", "bg-opacity-10", "rounded", "p-2", "me-2", "flex-shrink-0"], [1, "fw-bold", "text-bg-primary"], [1, "flex-grow-1"], [1, "mb-1", "fw-bold", "text-truncate", 3, "title"], [1, "d-flex", "align-items-center", "mb-2"], [1, "bi", "bi-geo-alt-fill", "text-primary", "me-1", "fs-6"], [1, "badge", "text-bg-primary", "bg-opacity-10", "text-primary", "border", "border-primary-subtle"]], template: function ListCobrosAsignacionesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2", 5);
    \u0275\u0275text(7, "Gesti\xF3n de Asignaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "Monitoreo y administraci\xF3n de asignaciones de cartera");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 2)(15, "div", 11);
    \u0275\u0275element(16, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "h6", 13);
    \u0275\u0275text(19, "Total Asignaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h3", 5);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small", 14);
    \u0275\u0275text(23, "Grupos activos");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(24, "div", 8)(25, "div", 9)(26, "div", 10)(27, "div", 2)(28, "div", 15);
    \u0275\u0275element(29, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "h6", 13);
    \u0275\u0275text(32, "Total Gestiones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "h3", 17);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "small", 14);
    \u0275\u0275text(36, "Acciones realizadas");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(37, "div", 8)(38, "div", 9)(39, "div", 10)(40, "div", 2)(41, "div", 18);
    \u0275\u0275element(42, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div")(44, "h6", 13);
    \u0275\u0275text(45, "Completadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h3", 20);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "small", 14);
    \u0275\u0275text(49, "Asignaciones finalizadas");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(50, "div", 8)(51, "div", 9)(52, "div", 10)(53, "div", 2)(54, "div", 21);
    \u0275\u0275element(55, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "h6", 13);
    \u0275\u0275text(58, "En Progreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "h3", 23);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "small", 14);
    \u0275\u0275text(62, "Pendientes por completar");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275conditionalCreate(63, ListCobrosAsignacionesComponent_Conditional_63_Template, 11, 1, "div", 7);
    \u0275\u0275elementStart(64, "div", 24);
    \u0275\u0275element(65, "i", 25);
    \u0275\u0275elementStart(66, "div")(67, "h6", 26);
    \u0275\u0275text(68, "Resumen de Desempe\xF1o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p", 27);
    \u0275\u0275text(70, "Tasa de finalizaci\xF3n: ");
    \u0275\u0275elementStart(71, "strong");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(73, "app-evento-cobro-asignaciones-tabla", 28);
    \u0275\u0275twoWayListener("selectedAssignmentsChange", function ListCobrosAsignacionesComponent_Template_app_evento_cobro_asignaciones_tabla_selectedAssignmentsChange_73_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedAssignments, $event) || (ctx.selectedAssignments = $event);
      return $event;
    })("groupedAssignmentsChange", function ListCobrosAsignacionesComponent_Template_app_evento_cobro_asignaciones_tabla_groupedAssignmentsChange_73_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.groupedAssignments, $event) || (ctx.groupedAssignments = $event);
      return $event;
    });
    \u0275\u0275listener("groupedAssignmentsChange", function ListCobrosAsignacionesComponent_Template_app_evento_cobro_asignaciones_tabla_groupedAssignmentsChange_73_listener() {
      return ctx.cargarEstadisticasPorMunicipio();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(21);
    \u0275\u0275textInterpolate(ctx.groupedAssignments.length);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.totalGestiones);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.asignacionesCompletadas());
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx.totalGestiones - ctx.asignacionesCompletadas());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.totalMunicipios > 0 ? 63 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", (ctx.asignacionesCompletadas() / ctx.groupedAssignments.length * 100).toFixed(2), "%");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("selectedAssignments", ctx.selectedAssignments);
    \u0275\u0275property("showUserList", true);
    \u0275\u0275twoWayProperty("groupedAssignments", ctx.groupedAssignments);
    \u0275\u0275property("canDelete", true);
  }
}, dependencies: [
  FormsModule,
  EventoCobroAsignacionesTablaComponent
], encapsulation: 2 });
var ListCobrosAsignacionesComponent = _ListCobrosAsignacionesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListCobrosAsignacionesComponent, [{
    type: Component,
    args: [{ selector: "app-list-cobros-asignaciones", imports: [
      FormsModule,
      EventoCobroAsignacionesTablaComponent
    ], template: '<div class="container-fluid bg-white rounded shadow p-4">\n    <!-- Header Section -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <div class="d-flex align-items-center">\n            <div class="p-3 me-3">\n                <i class="bi bi-clipboard-check fs-2 text-primary"></i>\n            </div>\n            <div>\n                <h2 class="mb-0 text-primary">Gesti\xF3n de Asignaciones</h2>\n                <p class="text-muted mb-0">Monitoreo y administraci\xF3n de asignaciones de cartera</p>\n            </div>\n        </div>\n    </div>\n\n    <!-- Statistics Cards -->\n    <div class="row">\n        <div class="col-md-3 mb-3">\n            <div class="card border-0 shadow-sm h-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <div class="bg-primary bg-opacity-10 rounded p-3 me-3">\n                            <i class="bi bi-collection-play fs-4 text-bg-primary"></i>\n                        </div>\n                        <div>\n                            <h6 class="card-title text-muted mb-1">Total Asignaciones</h6>\n                            <h3 class="mb-0 text-primary">{{ groupedAssignments.length }}</h3>\n                            <small class="text-muted">Grupos activos</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="col-md-3 mb-3">\n            <div class="card border-0 shadow-sm h-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <div class="bg-secondary bg-opacity-10 rounded p-3 me-3">\n                            <i class="bi bi-collection fs-4 text-bg-secondary"></i>\n                        </div>\n                        <div>\n                            <h6 class="card-title text-muted mb-1">Total Gestiones</h6>\n                            <h3 class="mb-0 text-secondary">{{ totalGestiones }}</h3>\n                            <small class="text-muted">Acciones realizadas</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="col-md-3 mb-3">\n            <div class="card border-0 shadow-sm h-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <div class="bg-success bg-opacity-10 rounded p-3 me-3">\n                            <i class="bi bi-check-circle fs-4 text-bg-success"></i>\n                        </div>\n                        <div>\n                            <h6 class="card-title text-muted mb-1">Completadas</h6>\n                            <h3 class="mb-0 text-success">{{ asignacionesCompletadas() }}</h3>\n                            <small class="text-muted">Asignaciones finalizadas</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="col-md-3 mb-3">\n            <div class="card border-0 shadow-sm h-100">\n                <div class="card-body">\n                    <div class="d-flex align-items-center">\n                        <div class="bg-info bg-opacity-10 rounded p-3 me-3">\n                            <i class="bi bi-clock-history fs-4"></i>\n                        </div>\n                        <div>\n                            <h6 class="card-title text-muted mb-1">En Progreso</h6>\n                            <h3 class="mb-0 text-info">{{ totalGestiones - asignacionesCompletadas() }}</h3>\n                            <small class="text-muted">Pendientes por completar</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Municipio Statistics Cards -->\n    @if (totalMunicipios > 0) {\n    <div class="row">\n        <div class="col-12">\n            <div class="card border-0 shadow-sm">\n                <div class="card-body">\n                    <h6 class="card-title text-muted mb-3">\n                        <i class="bi bi-geo-alt-fill me-2 text-primary"></i>\n                        Municipios por asignaciones activas\n                    </h6>\n                    <div class="row g-3">\n                        @for (item of estadisticasPorMunicipioConPorcentaje; track item.municipio; let i = $index) {\n                        @if (i < 6) { <div class="col-12 col-md-6 col-lg-4">\n                            <div class="card border-0 shadow-sm bg-light h-100">\n                                <div class="card-body p-3">\n                                    <div class="d-flex align-items-start">\n                                        <div class="bg-primary bg-opacity-10 rounded p-2 me-2 flex-shrink-0">\n                                            <span class="fw-bold text-bg-primary">{{ i + 1 }}</span>\n                                        </div>\n                                        <div class="flex-grow-1">\n                                            <h6 class="mb-1 fw-bold text-truncate" title="{{ item.municipio }}">\n                                                {{ item.municipio }}\n                                            </h6>\n                                            <div class="d-flex align-items-center mb-2">\n                                                <i class="bi bi-geo-alt-fill text-primary me-1 fs-6"></i>\n                                                <span\n                                                    class="badge text-bg-primary bg-opacity-10 text-primary border border-primary-subtle">\n                                                    {{ item.count }} asignaciones ({{ item.porcentaje }}%)\n                                                </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                    </div>\n                    }\n                    }\n                </div>\n\n                @if (estadisticasPorMunicipio.length > 6) {\n                <div class="mt-3 text-center">\n                    <small class="text-muted">\n                        Mostrando top 6 de {{ estadisticasPorMunicipio.length }} municipios\n                    </small>\n                </div>\n                }\n            </div>\n        </div>\n    </div>\n</div>\n}\n\n<!-- Performance Summary -->\n<div class="alert alert-info d-flex align-items-center mb-4">\n    <i class="bi bi-graph-up me-3 fs-4"></i>\n    <div>\n        <h6 class="alert-heading mb-1">Resumen de Desempe\xF1o</h6>\n        <p class="mb-0">Tasa de finalizaci\xF3n:\n            <strong>{{ ((asignacionesCompletadas() / groupedAssignments.length * 100)).toFixed(2) }}%</strong>\n        </p>\n    </div>\n</div>\n\n<!-- Assignments Table -->\n<app-evento-cobro-asignaciones-tabla [(selectedAssignments)]="selectedAssignments" [showUserList]="true"\n    [(groupedAssignments)]="groupedAssignments" (groupedAssignmentsChange)="cargarEstadisticasPorMunicipio()"\n    [canDelete]="true">\n</app-evento-cobro-asignaciones-tabla>\n</div>' }]
  }], null, { tabla: [{
    type: ViewChild,
    args: [EventoCobroAsignacionesTablaComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListCobrosAsignacionesComponent, { className: "ListCobrosAsignacionesComponent", filePath: "src/app/main/cobranza/list-cobros-asignaciones/list-cobros-asignaciones.component.ts", lineNumber: 17 });
})();

// src/app/main/cobranza/cobranza.routes.ts
var cobranzaRoutes = [
  { path: "", redirectTo: "atrasados", pathMatch: "full" },
  { path: "dashboard", component: DashboardCobranzaComponent },
  { path: "atrasados", component: CreditosAtrasadosComponent },
  { path: "asignaciones", component: ListCobrosAsignacionesComponent },
  { path: "asignados", component: ListCobrosAsignadosComponent },
  { path: ":credito_id/ejecucion", component: EjecucionCobroComponent },
  { path: "ejecucion/:credito_evento_cobro_id", component: EjecucionCobroComponent },
  { path: "list/:credito_id", component: ListCreditoCobrosComponent },
  { path: "verificacion/:verificacion_id", component: FormVerificacionesCreditoComponent },
  { path: "notificaciones", component: NotificacionesComponent }
];
export {
  cobranzaRoutes
};
//# sourceMappingURL=chunk-QCVUBNDR.js.map
