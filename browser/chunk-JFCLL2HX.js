import {
  PagoCargaMasivaService
} from "./chunk-ZPILISIA.js";
import {
  CreditoAbonoService
} from "./chunk-BI6X3YJ4.js";
import {
  CreditoService,
  UtilsEstadoCuentaService
} from "./chunk-RAXPYTHI.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import {
  FileInputComponent
} from "./chunk-5BMNPTRZ.js";
import {
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-TBFW4U4H.js";
import {
  LocalStorageService
} from "./chunk-3ZMCPPSW.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-XKAAYCNZ.js";
import {
  CurrencyPipe,
  DatePipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  ViewChild,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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

// src/app/pagos/abono/abono.component.ts
var _c0 = ["fileInput"];
function AbonoComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 41);
    \u0275\u0275text(2, "Deuda Inicial: ");
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275text(7, "Vencido Desde: ");
    \u0275\u0275elementStart(8, "b");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, ctx_r1.ultimoEstado.monto_total_mas_intereses));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, ctx_r1.ultimoEstado.vencido_desde, "dd/MM/yyyy"));
  }
}
function AbonoComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "span", 42)(2, "span", 42);
    \u0275\u0275elementEnd();
  }
}
function AbonoComponent_Conditional_0_For_37_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_For_37_Conditional_7_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const abonoRow_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editar(abonoRow_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const abonoRow_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, abonoRow_r5.fecha, "dd/MM/yyyy"), " ");
  }
}
function AbonoComponent_Conditional_0_For_37_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function AbonoComponent_Conditional_0_For_37_Conditional_8_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const abonoRow_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(abonoRow_r5.fecha, $event) || (abonoRow_r5.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 50)(3, "i", 51);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_For_37_Conditional_8_Template_i_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const abonoRow_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.save(abonoRow_r5));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const abonoRow_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", abonoRow_r5.fecha);
  }
}
function AbonoComponent_Conditional_0_For_37_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_For_37_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const abonoRow_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteForm(abonoRow_r5));
    });
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275elementEnd();
  }
}
function AbonoComponent_Conditional_0_For_37_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_For_37_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const abonoRow_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteForm(abonoRow_r5));
    });
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementEnd();
  }
}
function AbonoComponent_Conditional_0_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 11)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275conditionalCreate(7, AbonoComponent_Conditional_0_For_37_Conditional_7_Template, 3, 4, "span");
    \u0275\u0275conditionalCreate(8, AbonoComponent_Conditional_0_For_37_Conditional_8_Template, 4, 1, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "button", 44);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_For_37_Template_button_click_20_listener() {
      const abonoRow_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.utils.fileUrlInLine(abonoRow_r5.documento_url));
    });
    \u0275\u0275element(21, "i", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275conditionalCreate(23, AbonoComponent_Conditional_0_For_37_Conditional_23_Template, 2, 0, "button", 46);
    \u0275\u0275conditionalCreate(24, AbonoComponent_Conditional_0_For_37_Conditional_24_Template, 2, 0, "button", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const abonoRow_r5 = ctx.$implicit;
    \u0275\u0275classMap(abonoRow_r5.deleted_at ? "text-decoration-line-through table-danger" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 14, abonoRow_r5.monto));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!abonoRow_r5.isEdit ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(abonoRow_r5.isEdit ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r5.pagos_cargas_masiva_id ? "SI" : "NO");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r5.usuarios == null ? null : abonoRow_r5.usuarios.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r5.concepto ?? "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r5.referencia_pago ?? "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(abonoRow_r5.comentarios);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !abonoRow_r5.documento_url);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!abonoRow_r5.deleted_at ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(abonoRow_r5.deleted_at ? 24 : -1);
  }
}
function AbonoComponent_Conditional_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56)(2, "h5", 57)(3, "b");
    \u0275\u0275text(4, "No hay abonos registrados para este cr\xE9dito.");
    \u0275\u0275elementEnd()()()();
  }
}
function AbonoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h5", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "a", 6);
    \u0275\u0275text(7, "Estado de Cuenta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, AbonoComponent_Conditional_0_Conditional_8_Template, 11, 7, "div", 7);
    \u0275\u0275conditionalCreate(9, AbonoComponent_Conditional_0_Conditional_9_Template, 3, 0, "div", 8);
    \u0275\u0275elementStart(10, "div", 9)(11, "table", 10)(12, "thead")(13, "tr", 11)(14, "th");
    \u0275\u0275text(15, " ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, " Monto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, " Fecha ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, " Masivo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, " Usuario ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, " Concepto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, " Referencia ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, " Nota ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "th");
    \u0275\u0275elementStart(31, "th")(32, "button", 12);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.new());
    });
    \u0275\u0275elementStart(33, "i", 13);
    \u0275\u0275text(34, " Nuevo Abono");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(35, "tbody");
    \u0275\u0275repeaterCreate(36, AbonoComponent_Conditional_0_For_37_Template, 25, 16, "tr", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(38, AbonoComponent_Conditional_0_Conditional_38_Template, 5, 0, "tr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "tfoot")(40, "tr", 11)(41, "td");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td", 15);
    \u0275\u0275text(47, " Liquidar Sin Moratorios: ");
    \u0275\u0275elementStart(48, "b");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "currency");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(51, "app-formulario-flotante", 16);
    \u0275\u0275twoWayListener("showChange", function AbonoComponent_Conditional_0_Template_app_formulario_flotante_showChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showDeleteForm, $event) || (ctx_r1.showDeleteForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(52, "div", 17)(53, "h4", 18)(54, "b");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 19)(57, "label", 20);
    \u0275\u0275text(58, "Motivo o raz\xF3n del cambio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AbonoComponent_Conditional_0_Template_textarea_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nota, $event) || (ctx_r1.nota = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 22)(61, "div", 23)(62, "button", 24);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDeleteForm = false);
    });
    \u0275\u0275text(63, " Cancelar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 23)(65, "button", 25);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteAbono());
    });
    \u0275\u0275text(66, " Aceptar ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(67, "app-formulario-flotante", 26);
    \u0275\u0275twoWayListener("showChange", function AbonoComponent_Conditional_0_Template_app_formulario_flotante_showChange_67_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.showAdd, $event) || (ctx_r1.showAdd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(68, "div", 17)(69, "h4", 18)(70, "b");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 2)(73, "div", 27)(74, "label")(75, "b");
    \u0275\u0275text(76, "Monto del abono");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(77, "br");
    \u0275\u0275elementStart(78, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AbonoComponent_Conditional_0_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.abono.monto, $event) || (ctx_r1.abono.monto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 27)(80, "label")(81, "b");
    \u0275\u0275text(82, "Fecha del abono");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(83, "br");
    \u0275\u0275elementStart(84, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AbonoComponent_Conditional_0_Template_input_ngModelChange_84_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.abono.fecha, $event) || (ctx_r1.abono.fecha = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 30)(86, "div", 27)(87, "label")(88, "b");
    \u0275\u0275text(89, "Comentarios");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(90, "br");
    \u0275\u0275elementStart(91, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function AbonoComponent_Conditional_0_Template_textarea_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.abono.comentarios, $event) || (ctx_r1.abono.comentarios = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(92, "            ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 32)(94, "div", 27)(95, "label")(96, "b");
    \u0275\u0275text(97, "Concepto");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(98, "br");
    \u0275\u0275elementStart(99, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function AbonoComponent_Conditional_0_Template_select_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.abono.concepto, $event) || (ctx_r1.abono.concepto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(100, "option", 34);
    \u0275\u0275text(101, "Selecciona una opci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "option");
    \u0275\u0275text(103, "PAGO CON DEPOSITO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "option");
    \u0275\u0275text(105, "REFERENCIADO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "option");
    \u0275\u0275text(107, "TRANSFERENCIA DE CUENTA BANCARIA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "div", 27)(109, "label")(110, "b");
    \u0275\u0275text(111, "Referencia del pago");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(112, "br");
    \u0275\u0275elementStart(113, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function AbonoComponent_Conditional_0_Template_input_ngModelChange_113_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.abono.referencia_pago, $event) || (ctx_r1.abono.referencia_pago = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "div", 36)(115, "div", 37)(116, "label")(117, "b");
    \u0275\u0275text(118, "Documento:");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(119, "br");
    \u0275\u0275elementStart(120, "app-file-input", 38, 0);
    \u0275\u0275twoWayListener("urlChange", function AbonoComponent_Conditional_0_Template_app_file_input_urlChange_120_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.abono.documento_url, $event) || (ctx_r1.abono.documento_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(122, "div", 30)(123, "div", 39)(124, "button", 40);
    \u0275\u0275listener("click", function AbonoComponent_Conditional_0_Template_button_click_124_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(125, " Guardar ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Abonos del Credito:", ctx_r1.credito_id);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "/main/estado-cuenta/" + ctx_r1.credito_id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.ultimoEstado ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.ultimoEstado ? 9 : -1);
    \u0275\u0275advance(27);
    \u0275\u0275repeater(ctx_r1.abonos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.abonos.length === 0 ? 38 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.abonos.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 24, ctx_r1.totalAbonos()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 26, ctx_r1.ultimoEstado == null ? null : ctx_r1.ultimoEstado.total_a_liquidar));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("show", ctx_r1.showDeleteForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\xBFSeguro que deseas ", ctx_r1.abono.deleted_at ? "restaurar" : "eliminar", " este abono?");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nota);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("show", ctx_r1.showAdd);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.abono.id ? "Editar" : "Nuevo", " Abono");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.abono.monto);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.abono.fecha);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.abono.comentarios);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.abono.concepto);
    \u0275\u0275advance();
    \u0275\u0275property("value", void 0);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.abono.referencia_pago);
    \u0275\u0275advance(7);
    \u0275\u0275property("showSimpleDownload", true);
    \u0275\u0275twoWayProperty("url", ctx_r1.abono.documento_url);
    \u0275\u0275property("formExtra", ctx_r1.formExtra)("automaticSave", false)("showButton", false);
  }
}
var _AbonoComponent = class _AbonoComponent {
  constructor(abonoController, creditoController, route, utils, utilsEstadoCuenta, storage, dialog, storageService, pagoCargaMasivaService) {
    this.abonoController = abonoController;
    this.creditoController = creditoController;
    this.route = route;
    this.utils = utils;
    this.utilsEstadoCuenta = utilsEstadoCuenta;
    this.storage = storage;
    this.dialog = dialog;
    this.storageService = storageService;
    this.pagoCargaMasivaService = pagoCargaMasivaService;
    this.abonos = [];
    this.abono = {};
    this.showAdd = false;
    this.showDeleteForm = false;
    this.nota = "";
    this.formExtra = { id: 0 };
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => __async(this, null, function* () {
      const id = this.utils.intOrNull(params.get("credito_id"));
      if (id) {
        this.setCreditoById(id);
      }
    }));
  }
  editar(abono) {
    const user = this.storageService.getUser();
    if (user.nombre !== "ROOT")
      return;
    abono.fecha = abono.fecha.substring(0, 10);
    abono.isEdit = true;
  }
  save(abono) {
    return __async(this, null, function* () {
      abono.fecha = abono.fecha.substring(0, 10);
      yield this.abonoController.update(abono.id, { fecha: abono.fecha });
      abono.isEdit = false;
    });
  }
  setCreditoById(id) {
    return __async(this, null, function* () {
      if (id === this.credito?.id)
        return;
      this.credito_id = id;
      this.credito = yield this.creditoController.find(id, ["creditosPagos", "abonos", "abonos.pagosCargasMasivas", "abonos.usuarios", "productosFinancieros.plazos", "estadoCuenta", "convenios.conveniosPagos"]);
      this.abonos = this.credito?.abonos ?? [];
      this.ultimoEstado = this.credito?.estado_cuenta;
      console.log(this.credito, this.ultimoEstado);
    });
  }
  new() {
    this.abono = {};
    this.abono.fecha = (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
    this.showAdd = true;
  }
  totalAbonos() {
    return this.abonos.filter((item) => !item.deleted_at).reduce((acc, item) => {
      return acc + item.monto;
    }, 0);
  }
  edit(row) {
    this.abono = row;
    this.showAdd = true;
  }
  deleteForm(abono) {
    this.nota = "";
    this.showDeleteForm = true;
    this.abono = abono;
  }
  deleteAbono() {
    return __async(this, null, function* () {
      const abono = this.abono;
      if (yield this.abonoController.switch(abono, { nota: this.nota })) {
        this.setCreditoById(this.credito.id);
      }
      this.abono = {};
      this.showDeleteForm = false;
    });
  }
  submit() {
    return __async(this, null, function* () {
      if (!this.fileInput?.file) {
        this.dialog.show({
          title: "Algo sali\xF3 mal",
          tipo: "danger",
          body: "Agrega un documento o evidencia del pago."
        });
        console.error("FORM INVALIDO");
        return;
      }
      const data = yield this.abonoController.createOrUpdate(__spreadProps(__spreadValues({}, this.abono), {
        credito_id: this.credito_id
      }));
      if (data && data.id) {
        this.abono = data;
        this.formExtra.id = data.id;
        this.fileInput?.upload();
        this.abono.usuarios = this.storage.getUser();
        this.abonos.push(data);
        this.utilsEstadoCuenta.calculateEstadoDeCuenta(this.credito, true);
        this.showAdd = false;
        this.setCreditoById(this.credito.id);
      }
    });
  }
};
_AbonoComponent.\u0275fac = function AbonoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbonoComponent)(\u0275\u0275directiveInject(CreditoAbonoService), \u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(UtilsEstadoCuentaService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(VanillaDialogService), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(PagoCargaMasivaService));
};
_AbonoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbonoComponent, selectors: [["app-abono"]], viewQuery: function AbonoComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, decls: 1, vars: 1, consts: [["fileInput", ""], [1, "container-fluid", "pt-3"], [1, "row"], [1, "col", "p-1"], [1, "fw-bold"], [1, "col", "p-1", "text-end"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "row", "justify-content-between", "h5"], [1, "row", "justify-content-between", "h5", "placeholder-glow"], [1, "table-responsive"], [1, "table", "table-sm"], [1, "text-end"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "bi", "bi-cash"], [1, "text-end", 3, "class"], ["colspan", "8"], ["size", "small", 3, "showChange", "show"], [1, "container", "px-5", "pt-0", "pb-3"], [1, "text-center"], [1, "mt-3"], ["for", "exampleFormControlTextarea1", 1, "form-label"], ["placeholder", "Ingresa tu nota o comentario aqui...", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "justify-content-evenly", "mt-3"], [1, "col", "text-center"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [3, "showChange", "show"], [1, "col-12", "col-sm", "p-1"], ["placeholder", "Monto", "type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Monto", "type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mt-2"], ["placeholder", "Comentarios", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mt-4"], ["placeholder", "Introduzca el concepto:", 1, "form-control", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], ["placeholder", "Introduzca la referencia del pago:", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mt-6"], [1, "col-12", "p-1", "mt-2"], ["apiUrl", "api/files/credito_abono/save", "key", "document", 3, "urlChange", "showSimpleDownload", "url", "formExtra", "automaticSave", "showButton"], [1, "col", "text-center", "p-1"], [1, "btn", "btn-success", 3, "click"], [1, "col-auto", "px-3", "py-2"], [1, "placeholder", "col-4"], [1, "input-group"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "bi", "bi-printer"], [1, "btn", "btn-danger", "btn-sm"], [1, "btn", "btn-success", "btn-sm"], [3, "click"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary"], [1, "bi", "bi-floppy", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-counterclockwise"], ["colspan", "10"], [1, "py-5", "text-center"]], template: function AbonoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AbonoComponent_Conditional_0_Template, 126, 28, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.credito ? 0 : -1);
  }
}, dependencies: [
  RouterLink,
  FormsModule,
  NgSelectOption,
  \u0275NgSelectMultipleOption,
  DefaultValueAccessor,
  NumberValueAccessor,
  SelectControlValueAccessor,
  NgControlStatus,
  NgModel,
  FormularioFlotanteComponent,
  CurrencyPipe,
  DatePipe,
  FileInputComponent
], encapsulation: 2 });
var AbonoComponent = _AbonoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbonoComponent, [{
    type: Component,
    args: [{ selector: "app-abono", imports: [
      RouterLink,
      FormsModule,
      FormularioFlotanteComponent,
      CurrencyPipe,
      DatePipe,
      FileInputComponent
    ], template: `@if (credito) {
  <div class="container-fluid pt-3">
    <div class="row">
      <div class="col p-1">
        <h5 class="fw-bold">Abonos del Credito:{{credito_id}}</h5>
      </div>
      <div class="col p-1 text-end"><a class="btn btn-secondary" [routerLink]="'/main/estado-cuenta/'+credito_id">Estado de Cuenta</a></div>
    </div>
    @if (ultimoEstado) {
      <div class="row justify-content-between h5">
        <div class="col-auto px-3 py-2">Deuda Inicial: <b>{{ultimoEstado.monto_total_mas_intereses|currency}}</b></div>
        <div class="col-auto px-3 py-2">Vencido Desde: <b>{{ultimoEstado.vencido_desde |date:'dd/MM/yyyy'}}</b></div>
      </div>
    }
    @if (!ultimoEstado) {
      <div class="row justify-content-between h5 placeholder-glow">
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
      </div>
    }
    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr class="text-end">
            <th>
              ID
            </th>
            <th>
              Monto
            </th>
            <th>
              Fecha
            </th>
            <th>
              Masivo
            </th>
            <th>
              Usuario
            </th>
            <th>
              Concepto
            </th>
            <th>
              Referencia
            </th>
            <th>
              Nota
            </th>
            <th>
            </th>
            <th>
              <button class="btn btn-sm btn-success" (click)="new()">
                <i class="bi bi-cash"> Nuevo Abono</i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          @for (abonoRow of abonos; track abonoRow) {
            <tr class="text-end"
              [class]="abonoRow.deleted_at?'text-decoration-line-through table-danger':''">
              <td>{{abonoRow.id}}</td>
              <td>{{abonoRow.monto|currency}}</td>
              <td>
                @if (!abonoRow.isEdit) {
                  <span (click)="editar(abonoRow)">
                    {{abonoRow.fecha|date:'dd/MM/yyyy'}}
                  </span>
                }
                @if (abonoRow.isEdit) {
                  <div class="input-group">
                    <input type="date" class="form-control" [(ngModel)]="abonoRow.fecha">
                    <button class="btn btn-primary"><i class="bi bi-floppy" (click)="save(abonoRow)"></i></button>
                  </div>
                }
              </td>
              <td>{{abonoRow.pagos_cargas_masiva_id?'SI':'NO'}}</td>
              <td>{{abonoRow.usuarios?.nombre}}</td>
              <td>{{abonoRow.concepto??'N/A'}}</td>
              <td>{{abonoRow.referencia_pago??'N/A'}}</td>
              <td>{{abonoRow.comentarios}}</td>
              <td>
                <button class="btn btn-primary" [disabled]="!abonoRow.documento_url" (click)="utils.fileUrlInLine(abonoRow.documento_url)">
                  <i class="bi bi-printer"></i>
                </button>
              </td>
              <td>
                @if (!abonoRow.deleted_at) {
                  <button class="btn btn-danger btn-sm" (click)="deleteForm(abonoRow)"><i
                  class="bi bi-trash"></i></button>
                }
                @if (abonoRow.deleted_at) {
                  <button class="btn btn-success btn-sm" (click)="deleteForm(abonoRow)"><i
                  class="bi bi-arrow-counterclockwise"></i></button>
                }
              </td>
            </tr>
          }
          @if (abonos.length===0) {
            <tr>
              <td colspan="10">
                <h5 class="py-5 text-center"><b>No hay abonos registrados para este cr\xE9dito.</b></h5>
              </td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr class="text-end">
            <td>
              {{abonos.length}}
            </td>
            <td>
              {{totalAbonos()|currency}}
            </td>
            <td colspan="8">
              Liquidar Sin Moratorios: <b>{{ultimoEstado?.total_a_liquidar |currency}}</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <app-formulario-flotante [(show)]="showDeleteForm" size="small">
      <div class="container px-5 pt-0 pb-3">
        <h4 class=text-center><b>\xBFSeguro que deseas {{abono.deleted_at?'restaurar':'eliminar'}} este abono?</b></h4>
        <div class="mt-3">
          <label for="exampleFormControlTextarea1" class="form-label">Motivo o raz\xF3n del cambio:</label>
          <textarea placeholder="Ingresa tu nota o comentario aqui..." class="form-control"
          id="exampleFormControlTextarea1" rows="3" [(ngModel)]="nota"></textarea>
        </div>
        <div class="row justify-content-evenly mt-3">
          <div class="col text-center">
            <button class="btn btn-secondary" (click)="showDeleteForm=false">
              Cancelar
            </button>
          </div>
          <div class="col text-center">
            <button class="btn btn-primary" (click)="deleteAbono()">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </app-formulario-flotante>
    <app-formulario-flotante [(show)]="showAdd">
      <div class="container px-5 pt-0 pb-3">
        <h4 class=text-center><b>{{abono.id?'Editar':'Nuevo'}} Abono</b></h4>
        <div class="row">
          <div class="col-12 col-sm p-1">
            <label><b>Monto del abono</b></label><br>
            <input class="form-control" placeholder="Monto" type="number" [(ngModel)]="abono.monto">
          </div>
          <div class="col-12 col-sm p-1">
            <label><b>Fecha del abono</b></label><br>
            <input class="form-control" placeholder="Monto" type="date" [(ngModel)]="abono.fecha">
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12 col-sm p-1">
            <label><b>Comentarios</b></label><br>
            <textarea class="form-control" placeholder="Comentarios" [(ngModel)]="abono.comentarios">
            </textarea>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-sm p-1">
            <label><b>Concepto</b></label><br>
            <select class="form-control" placeholder="Introduzca el concepto:" [(ngModel)]="abono.concepto">
              <option [value]="undefined" disabled>Selecciona una opci\xF3n</option>
              <option>PAGO CON DEPOSITO</option>
              <option>REFERENCIADO</option>
              <option>TRANSFERENCIA DE CUENTA BANCARIA</option>
            </select>
          </div>
          <div class="col-12 col-sm p-1">
            <label><b>Referencia del pago</b></label><br>
            <input class="form-control" placeholder="Introduzca la referencia del pago:"
              [(ngModel)]="abono.referencia_pago">
          </div>
        </div>
        <div class="row mt-6">
          <div class="col-12 p-1 mt-2">
            <label><b>Documento:</b></label><br>
            <app-file-input #fileInput [showSimpleDownload]="true" [(url)]="abono.documento_url"
              apiUrl="api/files/credito_abono/save" [formExtra]="formExtra" key="document"
              [automaticSave]="false" [showButton]="false">
            </app-file-input>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col text-center p-1">
            <button class="btn btn-success" (click)="submit()">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </app-formulario-flotante>
  </div>
}` }]
  }], () => [{ type: CreditoAbonoService }, { type: CreditoService }, { type: ActivatedRoute }, { type: UtilsService }, { type: UtilsEstadoCuentaService }, { type: LocalStorageService }, { type: VanillaDialogService }, { type: LocalStorageService }, { type: PagoCargaMasivaService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbonoComponent, { className: "AbonoComponent", filePath: "src/app/pagos/abono/abono.component.ts", lineNumber: 33 });
})();

export {
  AbonoComponent
};
//# sourceMappingURL=chunk-JFCLL2HX.js.map
