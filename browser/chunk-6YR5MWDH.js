import {
  PagoCargaMasivaService
} from "./chunk-ZPILISIA.js";
import {
  CreditoAbonoService
} from "./chunk-BI6X3YJ4.js";
import {
  BuscadorCreditosComponent
} from "./chunk-5AHBH7ZX.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
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
  NgModel
} from "./chunk-TBFW4U4H.js";
import {
  CurrencyPipe,
  DatePipe,
  NgClass
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
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
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/pagos/carga-masiva/editar-carga-masiva/editar-carga-masiva.component.ts
var _c0 = ["fileInput"];
var _c1 = (a0) => ({ "collapsed": a0 });
var _c2 = (a0, a1) => ({ "show": a0, "collapse": a1 });
function EditarCargaMasivaComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Alerta:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Este pago est\xE1 actualmente asociado a un cr\xE9dito que tiene pagado de m\xE1s. ");
    \u0275\u0275elementEnd();
  }
}
function EditarCargaMasivaComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Atenci\xF3n:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Este pago est\xE1 actualmente asociado a un cr\xE9dito. Si lo aplicas manualmente a otro cr\xE9dito, el abono anterior ser\xE1 cancelado. ");
    \u0275\u0275elementEnd();
  }
}
function EditarCargaMasivaComponent_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 13)(2, "div", 14)(3, "div", 27)(4, "span", 28);
    \u0275\u0275text(5, "ID Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27)(9, "span", 28);
    \u0275\u0275text(10, "Cliente:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 27)(14, "span", 28);
    \u0275\u0275text(15, "Referencia Externa:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 14)(19, "div", 27)(20, "span", 28);
    \u0275\u0275text(21, "Pago Dirigido A:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 29);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 27)(25, "span", 28);
    \u0275\u0275text(26, "Producto:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 30)(30, "div", 31)(31, "h2", 32)(32, "button", 33);
    \u0275\u0275listener("click", function EditarCargaMasivaComponent_Conditional_0_Conditional_50_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isAccordionOpen = !ctx_r1.isAccordionOpen);
    });
    \u0275\u0275element(33, "i", 34);
    \u0275\u0275text(34, " Detalles del Cr\xE9dito ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 35)(36, "div", 36)(37, "div", 13)(38, "div", 14)(39, "div", 27)(40, "span", 28);
    \u0275\u0275text(41, "Capital:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 27)(46, "span", 28);
    \u0275\u0275text(47, "Fecha Inicio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 27)(52, "span", 28);
    \u0275\u0275text(53, "Fecha T\xE9rmino:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 27)(58, "span", 28);
    \u0275\u0275text(59, "Capital mas inter\xE9s::");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 14)(64, "div", 27)(65, "span", 28);
    \u0275\u0275text(66, "Plazo:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 27)(70, "span", 28);
    \u0275\u0275text(71, "Meses Mora:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 37);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 27)(75, "span", 28);
    \u0275\u0275text(76, "Saldo Vencido:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 37);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 27)(81, "span", 28);
    \u0275\u0275text(82, "Total abonado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "currency");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(86, "div", 22)(87, "label", 38);
    \u0275\u0275element(88, "i", 39);
    \u0275\u0275text(89, " Observaciones ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function EditarCargaMasivaComponent_Conditional_0_Conditional_50_Template_textarea_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.nota, $event) || (ctx_r1.nota = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 41);
    \u0275\u0275text(92, "Este campo es obligatorio para confirmar la aplicaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 22)(94, "label", 38);
    \u0275\u0275element(95, "i", 42);
    \u0275\u0275text(96, " Comprobante ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "app-file-input", 43, 0);
    \u0275\u0275twoWayListener("urlChange", function EditarCargaMasivaComponent_Conditional_0_Conditional_50_Template_app_file_input_urlChange_97_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cargaMasivaEdit.comprobante_url, $event) || (ctx_r1.cargaMasivaEdit.comprobante_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 41);
    \u0275\u0275text(100, "El comprobante es obligatorio para confirmar la aplicaci\xF3n");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.utilsService.idClienteFromCredito(ctx_r1.credito));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.utilsService.nombreClienteFromCredito(ctx_r1.credito));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.credito.referencia_bancaria || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r1.utilsService.esReestructura(ctx_r1.credito.folio) ? "bg-warning text-dark" : "bg-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.utilsService.esReestructura(ctx_r1.credito.folio) ? "REESTRUCTURA" : "CR\xC9DITO PRINCIPAL", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r1.credito.productos_financieros == null ? null : ctx_r1.credito.productos_financieros.nombre) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c1, !ctx_r1.isAccordionOpen));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(37, _c2, ctx_r1.isAccordionOpen, !ctx_r1.isAccordionOpen));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 21, ctx_r1.credito.monto_autorizado));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 23, ctx_r1.credito.estado_cuenta == null ? null : ctx_r1.credito.estado_cuenta.fecha_inicio, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 26, ctx_r1.credito.estado_cuenta == null ? null : ctx_r1.credito.estado_cuenta.fecha_fin, "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 29, ctx_r1.credito.estado_cuenta == null ? null : ctx_r1.credito.estado_cuenta.monto_total_mas_intereses));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.credito.estado_cuenta == null ? null : ctx_r1.credito.estado_cuenta.periodos == null ? null : ctx_r1.credito.estado_cuenta.periodos.length, " periodos");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.credito.estado_cuenta == null ? null : ctx_r1.credito.estado_cuenta.cuotas_vencidas) || 0, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 31, ctx_r1.credito.estado_cuenta == null ? null : ctx_r1.credito.estado_cuenta.saldo_vencido), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 33, ctx_r1.credito.estado_cuenta == null ? null : ctx_r1.credito.estado_cuenta.monto_total_pagado));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nota);
    \u0275\u0275advance(7);
    \u0275\u0275property("id", ctx_r1.cargaMasivaEdit.id.toString())("foreign_key", "id")("showSimpleDownload", true);
    \u0275\u0275twoWayProperty("url", ctx_r1.cargaMasivaEdit.comprobante_url);
  }
}
function EditarCargaMasivaComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, EditarCargaMasivaComponent_Conditional_0_Conditional_1_Template, 5, 0, "div", 2);
    \u0275\u0275conditionalCreate(2, EditarCargaMasivaComponent_Conditional_0_Conditional_2_Template, 5, 0, "div", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "h4", 5);
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275text(6, "Aplicaci\xF3n de Pago Manual ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "h5", 11);
    \u0275\u0275text(14, "Detalles del Pago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "span", 16);
    \u0275\u0275text(20, "Monto:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 17);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 15)(25, "span", 16);
    \u0275\u0275text(26, "Referencia:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 14)(30, "div", 15)(31, "span", 16);
    \u0275\u0275text(32, "Registrado por:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 18)(36, "span", 16);
    \u0275\u0275text(37, "Fecha registro:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(41, "div", 9)(42, "div", 10)(43, "h5", 11);
    \u0275\u0275text(44, "Asociar a Cr\xE9dito");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 12)(46, "div", 19)(47, "label", 20);
    \u0275\u0275text(48, "ID Cr\xE9dito");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "app-buscador-creditos", 21);
    \u0275\u0275twoWayListener("creditoIdChange", function EditarCargaMasivaComponent_Conditional_0_Template_app_buscador_creditos_creditoIdChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.credito_id, $event) || (ctx_r1.credito_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("creditoIdChange", function EditarCargaMasivaComponent_Conditional_0_Template_app_buscador_creditos_creditoIdChange_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCredito());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(50, EditarCargaMasivaComponent_Conditional_0_Conditional_50_Template, 101, 40, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 23)(52, "button", 24);
    \u0275\u0275listener("click", function EditarCargaMasivaComponent_Conditional_0_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.asociar());
    });
    \u0275\u0275element(53, "i", 25);
    \u0275\u0275text(54, " Confirmar Aplicaci\xF3n ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.sePagoDeMas() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cargaMasivaEdit.creditos_abonos ? 2 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 11, ctx_r1.cargaMasivaEdit.fecha_abono, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 14, ctx_r1.cargaMasivaEdit.importe_de_credito), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.cargaMasivaEdit.descripcion || "N/A");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r1.cargaMasivaEdit.usuarios == null ? null : ctx_r1.cargaMasivaEdit.usuarios.nombre) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 16, ctx_r1.cargaMasivaEdit.created_at, "dd/MM/yyyy"));
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("creditoId", ctx_r1.credito_id);
    \u0275\u0275property("justId", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.credito ? 50 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.credito_id || !ctx_r1.nota || !ctx_r1.cargaMasivaEdit.comprobante_url);
  }
}
var _EditarCargaMasivaComponent = class _EditarCargaMasivaComponent {
  constructor(creditoController, abonoController, pagoMasivoController, utilsService) {
    this.creditoController = creditoController;
    this.abonoController = abonoController;
    this.pagoMasivoController = pagoMasivoController;
    this.utilsService = utilsService;
    this.cargaMasivaEditChange = new EventEmitter();
    this.isAccordionOpen = true;
    this.credito_id = 0;
    this.nota = "";
  }
  ngOnChanges(changes) {
    if (changes["cargaMasivaEdit"] && this.cargaMasivaEdit) {
      const creditoId = this.cargaMasivaEdit.credito_id ?? this.cargaMasivaEdit.creditos_abonos?.credito_id;
      this.credito_id = 0;
      this.credito = void 0;
      if (creditoId) {
        this.credito_id = creditoId;
        this.setCredito();
      }
    }
  }
  setCredito() {
    return __async(this, null, function* () {
      this.credito = yield this.creditoController.find(this.credito_id, ["*"]);
    });
  }
  sePagoDeMas() {
    return (this.credito?.estado_cuenta?.monto_total_pagado ?? 0) > (this.credito?.estado_cuenta?.monto_total_mas_intereses ?? 0) && this.cargaMasivaEdit?.nota !== "MIGRADO";
  }
  asociar() {
    return __async(this, null, function* () {
      if (!this.cargaMasivaEdit)
        return;
      this.cargaMasivaEdit.credito_id = this.credito_id;
      if (this.cargaMasivaEdit?.creditos_abonos) {
        const res2 = yield this.abonoController.switch(this.cargaMasivaEdit.creditos_abonos, { nota: this.nota });
        if (!res2) {
          return;
        }
        this.cargaMasivaEdit.creditos_abonos = void 0;
      }
      this.cargaMasivaEdit.nota = this.nota;
      const res = yield this.pagoMasivoController.asociarCargaMasiva(this.cargaMasivaEdit);
      if (res) {
        if (this.cargaMasivaEdit?.credito_id) {
          yield this.creditoController.actualizarEstadoCuenta(this.cargaMasivaEdit?.credito_id);
          const cargaupdate = yield this.pagoMasivoController.find(this.cargaMasivaEdit.id, ["creditosAbonos.usuarios", "usuarios"]);
          this.cargaMasivaEdit.creditos_abonos = cargaupdate?.creditos_abonos;
          this.cargaMasivaEdit.usuarios = cargaupdate?.usuarios;
        }
        this.cargaMasivaEditChange.emit(this.cargaMasivaEdit);
      }
    });
  }
};
_EditarCargaMasivaComponent.\u0275fac = function EditarCargaMasivaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditarCargaMasivaComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(CreditoAbonoService), \u0275\u0275directiveInject(PagoCargaMasivaService), \u0275\u0275directiveInject(UtilsService));
};
_EditarCargaMasivaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditarCargaMasivaComponent, selectors: [["app-editar-carga-masiva"]], viewQuery: function EditarCargaMasivaComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, inputs: { cargaMasivaEdit: "cargaMasivaEdit" }, outputs: { cargaMasivaEditChange: "cargaMasivaEditChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["fileInput", ""], [1, "container-fluid", "p-4"], ["role", "alert", 1, "alert", "alert-danger", "mb-4"], ["role", "alert", 1, "alert", "alert-warning", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0", "text-primary"], [1, "bi", "bi-cash-coin", "me-2"], [1, "badge", "bg-light", "text-dark"], [1, "bi", "bi-calendar", "me-1"], [1, "card", "mb-4", "shadow-sm"], [1, "card-header", "bg-light"], [1, "mb-0"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "d-flex", "mb-3"], [1, "fw-bold", "me-2", 2, "min-width", "120px"], [1, "badge", "bg-success", "bg-opacity-10", "text-light", "fs-6"], [1, "d-flex"], [1, "mb-3"], [1, "form-label", "fw-bold"], ["divClass", "col-12 col-sm-6 col-md-5 col-lg-4", 3, "creditoIdChange", "creditoId", "justId"], [1, "mt-4"], [1, "d-flex", "justify-content-end", "gap-3", "mt-4"], [1, "btn", "btn-success", 3, "click", "disabled"], [1, "bi", "bi-check-circle", "me-1"], [1, "bi", "bi-exclamation-triangle-fill", "me-2"], [1, "d-flex", "mb-2"], [1, "fw-bold", "me-2"], [1, "badge", "pt-1", 3, "ngClass"], ["id", "creditoDetailsAccordion", 1, "accordion", "mt-3"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", 1, "accordion-button", 3, "click", "ngClass"], [1, "bi", "bi-info-circle", "me-2"], [1, "accordion-collapse", 3, "ngClass"], [1, "accordion-body"], [1, "badge", "bg-danger", "bg-opacity-10", "text-light"], ["for", "observaciones", 1, "form-label", "fw-bold"], [1, "bi", "bi-chat-left-text", "me-1"], ["id", "observaciones", "rows", "3", "placeholder", "Ingrese observaciones relevantes...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-text"], [1, "bi", "bi-filetype-pdf", "me-1"], ["apiUrl", "api/files/pagos_cargas_masivas/comprobacion/save", 3, "urlChange", "id", "foreign_key", "showSimpleDownload", "url"]], template: function EditarCargaMasivaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EditarCargaMasivaComponent_Conditional_0_Template, 55, 19, "div", 1);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.cargaMasivaEdit ? 0 : -1);
  }
}, dependencies: [
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  BuscadorCreditosComponent,
  DatePipe,
  CurrencyPipe,
  NgClass,
  FileInputComponent
], encapsulation: 2 });
var EditarCargaMasivaComponent = _EditarCargaMasivaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditarCargaMasivaComponent, [{
    type: Component,
    args: [{ selector: "app-editar-carga-masiva", imports: [
      FormsModule,
      BuscadorCreditosComponent,
      DatePipe,
      CurrencyPipe,
      NgClass,
      FileInputComponent
    ], template: `@if (cargaMasivaEdit) {
  <div class="container-fluid p-4">
    <!-- Alerta peligrosa -->
    @if (sePagoDeMas()) {
      <div class="alert alert-danger mb-4" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        <strong>Alerta:</strong> Este pago est\xE1 actualmente asociado a un cr\xE9dito que tiene pagado de m\xE1s.
      </div>
    }
    <!-- Alerta importante -->
    @if (cargaMasivaEdit.creditos_abonos) {
      <div class="alert alert-warning mb-4" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        <strong>Atenci\xF3n:</strong> Este pago est\xE1 actualmente asociado a un cr\xE9dito. Si lo aplicas manualmente a otro
        cr\xE9dito, el abono anterior ser\xE1 cancelado.
      </div>
    }
    <!-- Encabezado -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h4 class="mb-0 text-primary">
        <i class="bi bi-cash-coin me-2"></i>Aplicaci\xF3n de Pago Manual
      </h4>
      <span class="badge bg-light text-dark">
        <i class="bi bi-calendar me-1"></i>
        {{cargaMasivaEdit.fecha_abono | date: 'dd/MM/yyyy'}}
      </span>
    </div>
    <!-- Tarjeta de informaci\xF3n del pago -->
    <div class="card mb-4 shadow-sm">
      <div class="card-header bg-light">
        <h5 class="mb-0">Detalles del Pago</h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex mb-3">
              <span class="fw-bold me-2" style="min-width: 120px;">Monto:</span>
              <span class="badge bg-success bg-opacity-10 text-light fs-6">
                {{cargaMasivaEdit.importe_de_credito | currency}}
              </span>
            </div>
            <div class="d-flex mb-3">
              <span class="fw-bold me-2" style="min-width: 120px;">Referencia:</span>
              <span>{{cargaMasivaEdit.descripcion || 'N/A'}}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex mb-3">
              <span class="fw-bold me-2" style="min-width: 120px;">Registrado por:</span>
              <span>{{cargaMasivaEdit.usuarios?.nombre || 'N/A'}}</span>
            </div>
            <div class="d-flex">
              <span class="fw-bold me-2" style="min-width: 120px;">Fecha registro:</span>
              <span>{{cargaMasivaEdit.created_at | date:'dd/MM/yyyy'}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Secci\xF3n de selecci\xF3n de cr\xE9dito -->
    <div class="card mb-4 shadow-sm">
      <div class="card-header bg-light">
        <h5 class="mb-0">Asociar a Cr\xE9dito</h5>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label class="form-label fw-bold">ID Cr\xE9dito</label>
          <app-buscador-creditos divClass="col-12 col-sm-6 col-md-5 col-lg-4" [(creditoId)]="credito_id"
            [justId]="true" (creditoIdChange)="setCredito()">
          </app-buscador-creditos>
        </div>
        <!-- Informaci\xF3n del cr\xE9dito seleccionado -->
        @if (credito) {
          <div class="mt-4">
            <div class="row">
              <div class="col-md-6">
                <div class="d-flex mb-2">
                  <span class="fw-bold me-2">ID Cliente:</span>
                  <span>{{utilsService.idClienteFromCredito(credito)}}</span>
                </div>
                <div class="d-flex mb-2">
                  <span class="fw-bold me-2">Cliente:</span>
                  <span>{{utilsService.nombreClienteFromCredito(credito)}}</span>
                </div>
                <div class="d-flex mb-2">
                  <span class="fw-bold me-2">Referencia Externa:</span>
                  <span>{{credito.referencia_bancaria || 'N/A'}}</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex mb-2">
                  <span class="fw-bold me-2">Pago Dirigido A:</span>
                  <span class="badge pt-1"
                    [ngClass]="utilsService.esReestructura(credito.folio) ? 'bg-warning text-dark' : 'bg-primary'">
                    {{utilsService.esReestructura(credito.folio) ? 'REESTRUCTURA' : 'CR\xC9DITO PRINCIPAL'}}
                  </span>
                </div>
                <div class="d-flex mb-2">
                  <span class="fw-bold me-2">Producto:</span>
                  <span>{{credito.productos_financieros?.nombre || 'N/A'}}</span>
                </div>
              </div>
            </div>
            <!-- Detalles del cr\xE9dito en acorde\xF3n -->
            <div class="accordion mt-3" id="creditoDetailsAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" [ngClass]="{'collapsed': !isAccordionOpen}"
                    (click)="isAccordionOpen = !isAccordionOpen">
                    <i class="bi bi-info-circle me-2"></i> Detalles del Cr\xE9dito
                  </button>
                </h2>
                <div class="accordion-collapse"
                  [ngClass]="{ 'show' : isAccordionOpen, 'collapse' : !isAccordionOpen }">
                  <div class="accordion-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="d-flex mb-2">
                          <span class="fw-bold me-2">Capital:</span>
                          <span>{{credito.monto_autorizado | currency}}</span>
                        </div>
                        <div class="d-flex mb-2">
                          <span class="fw-bold me-2">Fecha Inicio:</span>
                          <span>{{credito.estado_cuenta?.fecha_inicio | date:'dd/MM/yyyy'}}</span>
                        </div>
                        <div class="d-flex mb-2">
                          <span class="fw-bold me-2">Fecha T\xE9rmino:</span>
                          <span>{{credito.estado_cuenta?.fecha_fin | date:'dd/MM/yyyy'}}</span>
                        </div>
                        <div class="d-flex mb-2">
                          <span class="fw-bold me-2">Capital mas inter\xE9s::</span>
                          <span>{{credito.estado_cuenta?.monto_total_mas_intereses | currency}}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="d-flex mb-2">
                          <span class="fw-bold me-2">Plazo:</span>
                          <span>{{credito.estado_cuenta?.periodos?.length}} periodos</span>
                        </div>
                        <div class="d-flex mb-2">
                          <span class="fw-bold me-2">Meses Mora:</span>
                          <span class="badge bg-danger bg-opacity-10 text-light">
                            {{credito.estado_cuenta?.cuotas_vencidas || 0}}
                          </span>
                        </div>
                        <div class="d-flex mb-2">
                          <span class="fw-bold me-2">Saldo Vencido:</span>
                          <span class="badge bg-danger bg-opacity-10 text-light">
                            {{credito.estado_cuenta?.saldo_vencido | currency}}
                          </span>
                        </div>
                        <div class="d-flex mb-2">
                          <span class="fw-bold me-2">Total abonado:</span>
                          <span>{{credito.estado_cuenta?.monto_total_pagado | currency}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Observaciones -->
            <div class="mt-4">
              <label for="observaciones" class="form-label fw-bold">
                <i class="bi bi-chat-left-text me-1"></i> Observaciones
              </label>
              <textarea class="form-control" id="observaciones" rows="3" [(ngModel)]="nota"
              placeholder="Ingrese observaciones relevantes..."></textarea>
              <div class="form-text">Este campo es obligatorio para confirmar la aplicaci\xF3n</div>
            </div>
            <!-- Observaciones -->
            <div class="mt-4">
              <label for="observaciones" class="form-label fw-bold">
                <i class="bi bi-filetype-pdf me-1"></i> Comprobante
              </label>
              <app-file-input #fileInput apiUrl="api/files/pagos_cargas_masivas/comprobacion/save"
                [id]="cargaMasivaEdit.id.toString()" [foreign_key]="'id'" [showSimpleDownload]="true"
                [(url)]="cargaMasivaEdit.comprobante_url">
              </app-file-input>
              <div class="form-text">El comprobante es obligatorio para confirmar la aplicaci\xF3n</div>
            </div>
          </div>
        }
      </div>
    </div>
    <!-- Botones de acci\xF3n -->
    <div class="d-flex justify-content-end gap-3 mt-4">
      <button class="btn btn-success" (click)="asociar()"
        [disabled]="!credito_id || !nota || !cargaMasivaEdit.comprobante_url">
        <i class="bi bi-check-circle me-1"></i> Confirmar Aplicaci\xF3n
      </button>
    </div>
  </div>
}` }]
  }], () => [{ type: CreditoService }, { type: CreditoAbonoService }, { type: PagoCargaMasivaService }, { type: UtilsService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], cargaMasivaEdit: [{
    type: Input
  }], cargaMasivaEditChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditarCargaMasivaComponent, { className: "EditarCargaMasivaComponent", filePath: "src/app/pagos/carga-masiva/editar-carga-masiva/editar-carga-masiva.component.ts", lineNumber: 26 });
})();

export {
  EditarCargaMasivaComponent
};
//# sourceMappingURL=chunk-6YR5MWDH.js.map
