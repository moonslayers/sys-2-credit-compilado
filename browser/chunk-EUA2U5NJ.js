import {
  FormApoyosComponent
} from "./chunk-YUICLCWZ.js";
import {
  ApoyosCartaInstruccionesService
} from "./chunk-FJHR76RM.js";
import "./chunk-SIIGP4ES.js";
import "./chunk-E5ZUYL3D.js";
import "./chunk-SDTK5VY4.js";
import "./chunk-K6WRKREK.js";
import "./chunk-NWCMIO4X.js";
import {
  TablaComponent
} from "./chunk-7R6F7OB3.js";
import {
  FormularioFlotanteComponent
} from "./chunk-I7RPY2ZE.js";
import {
  SolicitudApoyoModalidadService
} from "./chunk-JAJY7KZC.js";
import {
  SolicitudApoyoModalidadCotizacionService
} from "./chunk-GTPYZBE6.js";
import {
  SolicitudApoyoService
} from "./chunk-OBCD5SW4.js";
import {
  DataViewSectionComponent
} from "./chunk-6SWRHHIM.js";
import "./chunk-MLBICDWK.js";
import {
  FormGroupComponent
} from "./chunk-NXIA6ZMF.js";
import {
  FileInputComponent
} from "./chunk-5BMNPTRZ.js";
import "./chunk-ZF7ZAEOZ.js";
import "./chunk-TX5JQPPK.js";
import {
  SelectFieldComponent
} from "./chunk-XRNE7EBS.js";
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
import {
  CurrencyPipe
} from "./chunk-ZSRCSTKI.js";
import {
  Component,
  Injectable,
  Injector,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/apoyos/preliberar-apoyo/preliberar-apoyo.component.ts
var _c0 = (a0) => ({ id: a0 });
function PreliberarApoyoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "Preliberar Apoyo");
    \u0275\u0275elementEnd();
  }
}
function PreliberarApoyoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "Liberar Apoyo");
    \u0275\u0275elementEnd();
  }
}
function PreliberarApoyoComponent_For_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 6);
    \u0275\u0275text(1, "LISTO");
    \u0275\u0275elementEnd();
  }
}
function PreliberarApoyoComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "span")(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PreliberarApoyoComponent_For_18_Conditional_5_Template, 2, 0, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7)(7, "button", 8);
    \u0275\u0275listener("click", function PreliberarApoyoComponent_For_18_Template_button_click_7_listener() {
      const proveedor_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cartaInstruccion.machoteCartaInstrucciones(ctx_r2.solicitudApoyo, proveedor_r2.cotizaciones));
    });
    \u0275\u0275element(8, "i", 9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const proveedor_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(proveedor_r2.proveedor.nombre_comercial.toUpperCase());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.todosDocumentosSubidos(proveedor_r2.proveedor) ? 5 : -1);
  }
}
function PreliberarApoyoComponent_For_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 6);
    \u0275\u0275text(1, "LISTO");
    \u0275\u0275elementEnd();
  }
}
function PreliberarApoyoComponent_For_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275listener("click", function PreliberarApoyoComponent_For_22_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const proveedor_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cartaInstruccion.machoteCartaInstrucciones(ctx_r2.solicitudApoyo, proveedor_r5.cotizaciones));
    });
    \u0275\u0275element(2, "i", 9);
    \u0275\u0275elementEnd()();
  }
}
function PreliberarApoyoComponent_For_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "app-file-input", 12);
    \u0275\u0275listener("urlChange", function PreliberarApoyoComponent_For_22_Conditional_7_Template_app_file_input_urlChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const proveedor_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveUrls(proveedor_r5.cotizaciones, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const proveedor_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(2, _c0, proveedor_r5.cotizaciones[0].id))("showSimpleDownload", true);
  }
}
function PreliberarApoyoComponent_For_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "app-file-input", 13);
    \u0275\u0275listener("urlChange", function PreliberarApoyoComponent_For_22_Conditional_8_Template_app_file_input_urlChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const proveedor_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveSpeiUrl(proveedor_r5.cotizaciones, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const proveedor_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(2, _c0, proveedor_r5.cotizaciones[0].id))("showSimpleDownload", true);
  }
}
function PreliberarApoyoComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10)(2, "span")(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PreliberarApoyoComponent_For_22_Conditional_5_Template, 2, 0, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, PreliberarApoyoComponent_For_22_Conditional_6_Template, 3, 0, "div", 7);
    \u0275\u0275conditionalCreate(7, PreliberarApoyoComponent_For_22_Conditional_7_Template, 2, 4, "div", 11);
    \u0275\u0275conditionalCreate(8, PreliberarApoyoComponent_For_22_Conditional_8_Template, 2, 4, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const proveedor_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(proveedor_r5.proveedor.nombre_comercial.toUpperCase());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.todosDocumentosSubidos(proveedor_r5.proveedor) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.liberar ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.liberar ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.liberar ? 8 : -1);
  }
}
function PreliberarApoyoComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PreliberarApoyoComponent_Conditional_23_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.solicitudApoyoController.avanzarEstado(ctx_r2.solicitudModalidadActual));
    });
    \u0275\u0275text(1, " Preliberar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.todosDocumentosSubidos());
  }
}
function PreliberarApoyoComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function PreliberarApoyoComponent_Conditional_23_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.solicitudApoyoController.retrocederEstado(ctx_r2.solicitudModalidadActual));
    });
    \u0275\u0275text(1, " Cancelar Preliberado ");
    \u0275\u0275elementEnd();
  }
}
function PreliberarApoyoComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, PreliberarApoyoComponent_Conditional_23_Conditional_1_Template, 2, 1, "button", 14);
    \u0275\u0275conditionalCreate(2, PreliberarApoyoComponent_Conditional_23_Conditional_2_Template, 2, 0, "button", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.solicitudModalidadActual.estado == "SESION ASIGNADA" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.solicitudModalidadActual.estado == "PRELIBERACION" ? 2 : -1);
  }
}
function PreliberarApoyoComponent_Conditional_24_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function PreliberarApoyoComponent_Conditional_24_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.solicitudApoyoController.avanzarEstado(ctx_r2.solicitudModalidadActual));
    });
    \u0275\u0275text(1, " Liberar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.todosDocumentosSubidos());
  }
}
function PreliberarApoyoComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function PreliberarApoyoComponent_Conditional_24_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.solicitudApoyoController.retrocederEstado(ctx_r2.solicitudModalidadActual));
    });
    \u0275\u0275text(1, " Cancelar Liberado ");
    \u0275\u0275elementEnd();
  }
}
function PreliberarApoyoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, PreliberarApoyoComponent_Conditional_24_Conditional_1_Template, 2, 1, "button", 14);
    \u0275\u0275conditionalCreate(2, PreliberarApoyoComponent_Conditional_24_Conditional_2_Template, 2, 0, "button", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.solicitudModalidadActual.estado == "SESION ASIGNADA" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.solicitudModalidadActual.estado == "LIBERADO" ? 2 : -1);
  }
}
var _PreliberarApoyoComponent = class _PreliberarApoyoComponent {
  constructor(utils, solicitudApoyoController, solicitudApoyoModalidadController, cotizacionController, cartaInstruccion) {
    this.utils = utils;
    this.solicitudApoyoController = solicitudApoyoController;
    this.solicitudApoyoModalidadController = solicitudApoyoModalidadController;
    this.cotizacionController = cotizacionController;
    this.cartaInstruccion = cartaInstruccion;
    this.dataSource = [];
    this.liberar = false;
  }
  ngOnInit() {
    this.agruparProveedores();
  }
  ngOnChanges(changes) {
    if (changes["solicitudApoyo"] || changes["solicitudModalidadActual"]) {
      this.agruparProveedores();
    }
  }
  agruparProveedores() {
    this.dataSource = [];
    this.solicitudModalidadActual.solicitudes_apoyos_modalidades_cotizaciones?.forEach((cotizacion) => {
      const find = this.dataSource.find((row) => row.proveedor.id === cotizacion.apoyos_proveedores?.id);
      if (find) {
        find.cotizaciones.push(cotizacion);
        return;
      }
      this.dataSource.push({
        proveedor: cotizacion.apoyos_proveedores,
        cotizaciones: [cotizacion]
      });
    });
    console.log(this.dataSource);
  }
  saveUrls(cotizaciones, url) {
    cotizaciones.forEach((cot) => {
      cot.carta_instruccion_url = url;
      this.cotizacionController.update(cot.id, cot);
    });
  }
  saveSpeiUrl(cotizaciones, url) {
    cotizaciones.forEach((cot) => {
      cot.spei_url = url;
      this.cotizacionController.update(cot.id, cot);
    });
  }
  todosDocumentosSubidos(proveedor) {
    if (!this.liberar) {
      if (proveedor) {
        return this.dataSource.filter((prov) => prov.proveedor.id == proveedor.id).every((prov) => prov.cotizaciones.every((cot) => cot.carta_instruccion_url));
      }
      return this.dataSource.every((prov) => prov.cotizaciones.every((cot) => cot.carta_instruccion_url));
    }
    if (proveedor) {
      return this.dataSource.filter((prov) => prov.proveedor.id == proveedor.id).every((prov) => prov.cotizaciones.every((cot) => cot.spei_url));
    }
    return this.dataSource.every((prov) => prov.cotizaciones.every((cot) => cot.spei_url));
  }
};
_PreliberarApoyoComponent.\u0275fac = function PreliberarApoyoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PreliberarApoyoComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(SolicitudApoyoModalidadService), \u0275\u0275directiveInject(SolicitudApoyoModalidadCotizacionService), \u0275\u0275directiveInject(ApoyosCartaInstruccionesService));
};
_PreliberarApoyoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreliberarApoyoComponent, selectors: [["app-preliberar-apoyo"]], inputs: { solicitudApoyo: "solicitudApoyo", solicitudModalidadActual: "solicitudModalidadActual", liberar: "liberar" }, features: [\u0275\u0275NgOnChangesFeature], decls: 25, vars: 7, consts: [[1, "container-fluid", "px-4", "pb-3"], [1, "text-uppercase"], [1, "fw-bold", "mt-4"], [1, "row", "px-4", "mt-2", "mb-2"], [1, "row", "mt-4", "mb-4", "px-2"], [1, "col", "p-1", "px-2"], [1, "bi", "bi-check-circle-fill", "fw-bolder", "mx-2", "text-success"], [1, "col-auto", "p-1"], [1, "btn", "btn-success", 3, "click"], [1, "bi", "bi-printer-fill"], [1, "col-auto", "p-1", "px-2"], [1, "col"], ["apiUrl", "api/files/apoyos/modalidad/cotizacion/carta_instruccion/save", "key", "document", 3, "urlChange", "formExtra", "showSimpleDownload"], ["apiUrl", "api/files/apoyos/modalidad/cotizacion/spei/save", "key", "document", 3, "urlChange", "formExtra", "showSimpleDownload"], [1, "btn", "btn-primary", "shadow", "m-1", 3, "disabled"], [1, "btn", "btn-danger", "shadow", "m-1"], [1, "btn", "btn-primary", "shadow", "m-1", 3, "click", "disabled"], [1, "btn", "btn-danger", "shadow", "m-1", 3, "click"]], template: function PreliberarApoyoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, PreliberarApoyoComponent_Conditional_1_Template, 2, 0, "h3");
    \u0275\u0275conditionalCreate(2, PreliberarApoyoComponent_Conditional_2_Template, 2, 0, "h3");
    \u0275\u0275text(3, " Programa: ");
    \u0275\u0275elementStart(4, "b", 1);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, " Solicitante: ");
    \u0275\u0275elementStart(8, "b", 1);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, " Modalidad ");
    \u0275\u0275elementStart(12, "b");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "br");
    \u0275\u0275elementStart(15, "h5", 2);
    \u0275\u0275text(16, "Cartas de instrucci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(17, PreliberarApoyoComponent_For_18_Template, 9, 2, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(19, "h5", 2);
    \u0275\u0275text(20, "Documento Spei");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, PreliberarApoyoComponent_For_22_Template, 9, 5, "div", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(23, PreliberarApoyoComponent_Conditional_23_Template, 3, 2, "div", 4);
    \u0275\u0275conditionalCreate(24, PreliberarApoyoComponent_Conditional_24_Template, 3, 2, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.liberar ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.liberar ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.solicitudApoyo.programas_apoyos == null ? null : ctx.solicitudApoyo.programas_apoyos.alias);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.utils.nombreClienteFromApoyo(ctx.solicitudApoyo));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.solicitudModalidadActual.modalidades_ministraciones == null ? null : ctx.solicitudModalidadActual.modalidades_ministraciones.modalidades == null ? null : ctx.solicitudModalidadActual.modalidades_ministraciones.modalidades.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.dataSource);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.dataSource);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.liberar ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.liberar ? 24 : -1);
  }
}, dependencies: [FileInputComponent], encapsulation: 2 });
var PreliberarApoyoComponent = _PreliberarApoyoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreliberarApoyoComponent, [{
    type: Component,
    args: [{ selector: "app-preliberar-apoyo", imports: [
      FileInputComponent
    ], template: `<div class="container-fluid px-4 pb-3">
  @if (!liberar) {
    <h3>Preliberar Apoyo</h3>
  }
  @if (liberar) {
    <h3>Liberar Apoyo</h3>
  }
  Programa: <b class="text-uppercase">{{solicitudApoyo.programas_apoyos?.alias}}</b> <br>
  Solicitante: <b class="text-uppercase">{{utils.nombreClienteFromApoyo(solicitudApoyo)}}</b> <br>
  Modalidad <b>{{solicitudModalidadActual.modalidades_ministraciones?.modalidades?.nombre}}</b> <br>

  <h5 class="fw-bold mt-4">Cartas de instrucci\xF3n</h5>
  @for (proveedor of dataSource; track proveedor) {
    <div class="row px-4 mt-2 mb-2">
      <div class="col p-1 px-2">
        <span><b>{{proveedor.proveedor.nombre_comercial.toUpperCase()}}</b>@if (todosDocumentosSubidos(proveedor.proveedor)) {
        <i
        class="bi bi-check-circle-fill fw-bolder mx-2 text-success">LISTO</i>
      }</span>
    </div>
    <div class="col-auto p-1">
      <button class="btn btn-success" (click)="cartaInstruccion.machoteCartaInstrucciones(solicitudApoyo,proveedor.cotizaciones)"><i class="bi bi-printer-fill"></i></button>
    </div>
  </div>
}
<h5 class="fw-bold mt-4">Documento Spei</h5>
@for (proveedor of dataSource; track proveedor) {
  <div class="row px-4 mt-2 mb-2">
    <div class="col-auto p-1 px-2">
      <span><b>{{proveedor.proveedor.nombre_comercial.toUpperCase()}}</b>@if (todosDocumentosSubidos(proveedor.proveedor)) {
      <i
      class="bi bi-check-circle-fill fw-bolder mx-2 text-success">LISTO</i>
    }</span>
  </div>
  @if (!liberar) {
    <div class="col-auto p-1">
      <button class="btn btn-success" (click)="cartaInstruccion.machoteCartaInstrucciones(solicitudApoyo,proveedor.cotizaciones)"><i class="bi bi-printer-fill"></i></button>
    </div>
  }
  @if (!liberar) {
    <div class="col">
      <app-file-input apiUrl="api/files/apoyos/modalidad/cotizacion/carta_instruccion/save" key="document"
        [formExtra]="{ id:proveedor.cotizaciones[0].id }" (urlChange)="saveUrls(proveedor.cotizaciones,$event)"
      [showSimpleDownload]="true"></app-file-input>
    </div>
  }
  @if (liberar) {
    <div class="col">
      <app-file-input apiUrl="api/files/apoyos/modalidad/cotizacion/spei/save" key="document"
        [formExtra]="{ id:proveedor.cotizaciones[0].id }" (urlChange)="saveSpeiUrl(proveedor.cotizaciones,$event)"
      [showSimpleDownload]="true"></app-file-input>
    </div>
  }
</div>
}
@if (!liberar) {
  <div class="row mt-4 mb-4 px-2">
    @if (solicitudModalidadActual.estado=='SESION ASIGNADA') {
      <button class="btn btn-primary shadow m-1" (click)="solicitudApoyoController.avanzarEstado(solicitudModalidadActual)" [disabled]="!todosDocumentosSubidos()">
        Preliberar
      </button>
    }
    @if (solicitudModalidadActual.estado=='PRELIBERACION') {
      <button class="btn btn-danger shadow m-1" (click)="solicitudApoyoController.retrocederEstado(solicitudModalidadActual)">
        Cancelar Preliberado
      </button>
    }
  </div>
}
@if (liberar) {
  <div class="row mt-4 mb-4 px-2">
    @if (solicitudModalidadActual.estado=='SESION ASIGNADA') {
      <button class="btn btn-primary shadow m-1" (click)="solicitudApoyoController.avanzarEstado(solicitudModalidadActual)" [disabled]="!todosDocumentosSubidos()">
        Liberar
      </button>
    }
    @if (solicitudModalidadActual.estado=='LIBERADO') {
      <button class="btn btn-danger shadow m-1" (click)="solicitudApoyoController.retrocederEstado(solicitudModalidadActual)">
        Cancelar Liberado
      </button>
    }
  </div>
}
</div>` }]
  }], () => [{ type: UtilsService }, { type: SolicitudApoyoService }, { type: SolicitudApoyoModalidadService }, { type: SolicitudApoyoModalidadCotizacionService }, { type: ApoyosCartaInstruccionesService }], { solicitudApoyo: [{
    type: Input
  }], solicitudModalidadActual: [{
    type: Input
  }], liberar: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreliberarApoyoComponent, { className: "PreliberarApoyoComponent", filePath: "src/app/main/apoyos/preliberar-apoyo/preliberar-apoyo.component.ts", lineNumber: 22 });
})();

// src/app/controllers/cotizacion.factura.service.ts
var _CotizacionFacturaService = class _CotizacionFacturaService extends SuperService {
  constructor(injector) {
    super(injector);
    this.model = "cotizaciones_facturas";
    this.columns = [
      "solicitudes_apoyos_modalidades_cotizacion_id",
      "usuario_id",
      "documento_url"
    ];
  }
};
_CotizacionFacturaService.\u0275fac = function CotizacionFacturaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CotizacionFacturaService)(\u0275\u0275inject(Injector));
};
_CotizacionFacturaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CotizacionFacturaService, factory: _CotizacionFacturaService.\u0275fac, providedIn: "any" });
var CotizacionFacturaService = _CotizacionFacturaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CotizacionFacturaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: Injector }], null);
})();

// src/app/main/apoyos/concluir-apoyo/concluir-apoyo.component.ts
var _c02 = (a0) => ({ id: a0 });
function ConcluirApoyoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, " Para concluir el apoyo, para cada cotizaci\xF3n debe subirse al menos 1 factura, y no debe quedar ninguna factura sin subirse el pdf. ");
    \u0275\u0275elementEnd();
  }
}
function ConcluirApoyoComponent_For_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "No hay facturas asociadas.");
    \u0275\u0275elementEnd();
  }
}
function ConcluirApoyoComponent_For_19_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "app-file-input", 13);
    \u0275\u0275twoWayListener("urlChange", function ConcluirApoyoComponent_For_19_For_4_Template_app_file_input_urlChange_2_listener($event) {
      const factura_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(factura_r5.documento_url, $event) || (factura_r5.documento_url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 14)(4, "button", 15);
    \u0275\u0275listener("click", function ConcluirApoyoComponent_For_19_For_4_Template_button_click_4_listener() {
      const factura_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const cotizacion_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteFactura(cotizacion_r2, factura_r5));
    });
    \u0275\u0275element(5, "i", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const factura_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("formExtra", \u0275\u0275pureFunction1(3, _c02, factura_r5.id))("showSimpleDownload", true);
    \u0275\u0275twoWayProperty("url", factura_r5.documento_url);
  }
}
function ConcluirApoyoComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form-group", 8);
    \u0275\u0275listener("buttonEvent", function ConcluirApoyoComponent_For_19_Template_form_group_buttonEvent_0_listener() {
      const cotizacion_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addFactura(cotizacion_r2));
    });
    \u0275\u0275conditionalCreate(1, ConcluirApoyoComponent_For_19_Conditional_1_Template, 2, 0, "p", 9);
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275repeaterCreate(3, ConcluirApoyoComponent_For_19_For_4_Template, 6, 5, "div", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cotizacion_r2 = ctx.$implicit;
    \u0275\u0275property("title", (cotizacion_r2.apoyos_proveedores == null ? null : cotizacion_r2.apoyos_proveedores.nombre_comercial == null ? null : cotizacion_r2.apoyos_proveedores.nombre_comercial.toUpperCase()) + " - $" + cotizacion_r2.monto.toFixed(2))("showAddButton", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(!cotizacion_r2.cotizaciones_facturas || cotizacion_r2.cotizaciones_facturas.length == 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(cotizacion_r2.cotizaciones_facturas);
  }
}
function ConcluirApoyoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ConcluirApoyoComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.solicitudApoyoController.avanzarEstado(ctx_r2.solicitudModalidadActual));
    });
    \u0275\u0275text(1, " Concluir ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.seSubioFacturas());
  }
}
function ConcluirApoyoComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ConcluirApoyoComponent_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.solicitudApoyoController.retrocederEstado(ctx_r2.solicitudModalidadActual));
    });
    \u0275\u0275text(1, " Cancelar Conclusi\xF3n ");
    \u0275\u0275elementEnd();
  }
}
var _ConcluirApoyoComponent = class _ConcluirApoyoComponent {
  constructor(solicitudApoyoController, cotizacionFacturaController, utils) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.cotizacionFacturaController = cotizacionFacturaController;
    this.utils = utils;
  }
  /**
   * Adds a new invoice (factura) to a specific quotation (cotización) within the current support request modality.
   * If the quotation does not already have an array of invoices, it initializes one.
   *
   * @param cotizacion - The quotation to which the invoice will be added.
   * @returns {Promise<void>} - A promise that resolves when the invoice is successfully added.
   */
  addFactura(cotizacion) {
    return __async(this, null, function* () {
      if (!cotizacion.cotizaciones_facturas) {
        cotizacion.cotizaciones_facturas = [];
      }
      const nuevaFactura = yield this.cotizacionFacturaController.new({
        solicitudes_apoyos_modalidades_cotizacion_id: cotizacion.id
      });
      if (nuevaFactura) {
        cotizacion.cotizaciones_facturas.push(nuevaFactura);
      }
    });
  }
  /**
   * Deletes an invoice (factura) from a specific quotation (cotización) within the current support request modality.
   * If the quotation does not have any invoices, the function returns early.
   *
   * @param cotizacion - The quotation from which the invoice will be deleted.
   * @param factura - The invoice to be deleted.
   * @returns {Promise<void>} - A promise that resolves when the invoice is successfully deleted.
   */
  deleteFactura(cotizacion, factura) {
    return __async(this, null, function* () {
      if (!cotizacion.cotizaciones_facturas) {
        return;
      }
      const resultado = yield this.cotizacionFacturaController.switch(factura);
      if (resultado) {
        const indiceFactura = cotizacion.cotizaciones_facturas.indexOf(factura);
        if (indiceFactura !== -1) {
          cotizacion.cotizaciones_facturas.splice(indiceFactura, 1);
        }
      }
    });
  }
  seSubioFacturas() {
    return !!(this.solicitudModalidadActual.solicitudes_apoyos_modalidades_cotizaciones?.every((cot) => cot.cotizaciones_facturas?.every((fac) => fac.documento_url)) && this.solicitudModalidadActual.solicitudes_apoyos_modalidades_cotizaciones.every((cot) => cot.cotizaciones_facturas?.length));
  }
};
_ConcluirApoyoComponent.\u0275fac = function ConcluirApoyoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConcluirApoyoComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(CotizacionFacturaService), \u0275\u0275directiveInject(UtilsService));
};
_ConcluirApoyoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConcluirApoyoComponent, selectors: [["app-concluir-apoyo"]], inputs: { solicitudApoyo: "solicitudApoyo", solicitudModalidadActual: "solicitudModalidadActual" }, decls: 23, vars: 6, consts: [[1, "container-fluid", "px-3", "pb-3"], ["role", "alert", 1, "alert", "alert-warning", "animate__animated", "animate__pulse", "pointer"], [1, "text-uppercase"], [1, "fw-bold", "mt-4", "mb-2"], ["addButtonText", "Factura", "addButtonStyle", "btn btn-success btn-sm", 3, "title", "showAddButton"], [1, "row", "mt-4", "mb-4", "px-2"], [1, "btn", "btn-primary", "shadow", "m-1", 3, "disabled"], [1, "btn", "btn-danger", "shadow", "m-1"], ["addButtonText", "Factura", "addButtonStyle", "btn btn-success btn-sm", 3, "buttonEvent", "title", "showAddButton"], [1, "text-center", "py-4", "fw-bold"], [1, "container", "my-1", "mb-4"], [1, "row", "py-2"], [1, "col", "p-1"], ["apiUrl", "api/files/apoyos/modalidad/cotizaciones/factura/save", "key", "document", 3, "urlChange", "formExtra", "showSimpleDownload", "url"], [1, "col-auto", "p-1"], [1, "btn", "btn-danger", "shadow", 3, "click"], [1, "bi", "bi-x"], [1, "btn", "btn-primary", "shadow", "m-1", 3, "click", "disabled"], [1, "btn", "btn-danger", "shadow", "m-1", 3, "click"]], template: function ConcluirApoyoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3");
    \u0275\u0275text(2, "Concluir Apoyo");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ConcluirApoyoComponent_Conditional_3_Template, 2, 0, "div", 1);
    \u0275\u0275text(4, " Programa: ");
    \u0275\u0275elementStart(5, "b", 2);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8, " Solicitante: ");
    \u0275\u0275elementStart(9, "b", 2);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " Modalidad ");
    \u0275\u0275elementStart(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "h5", 3);
    \u0275\u0275text(17, "Cotizaciones y Facturas");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, ConcluirApoyoComponent_For_19_Template, 5, 3, "form-group", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(20, "div", 5);
    \u0275\u0275conditionalCreate(21, ConcluirApoyoComponent_Conditional_21_Template, 2, 1, "button", 6);
    \u0275\u0275conditionalCreate(22, ConcluirApoyoComponent_Conditional_22_Template, 2, 0, "button", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx.seSubioFacturas() ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.solicitudApoyo.programas_apoyos == null ? null : ctx.solicitudApoyo.programas_apoyos.alias);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.utils.nombreClienteFromApoyo(ctx.solicitudApoyo));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.solicitudModalidadActual.modalidades_ministraciones == null ? null : ctx.solicitudModalidadActual.modalidades_ministraciones.modalidades == null ? null : ctx.solicitudModalidadActual.modalidades_ministraciones.modalidades.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.solicitudModalidadActual.solicitudes_apoyos_modalidades_cotizaciones);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.solicitudModalidadActual.estado == "LIBERADO" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.solicitudModalidadActual.estado == "CONCLUIDO" || ctx.solicitudModalidadActual.estado == "INCONCLUSO" ? 22 : -1);
  }
}, dependencies: [
  FormGroupComponent,
  FileInputComponent
], encapsulation: 2 });
var ConcluirApoyoComponent = _ConcluirApoyoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConcluirApoyoComponent, [{
    type: Component,
    args: [{ selector: "app-concluir-apoyo", imports: [
      FormGroupComponent,
      FileInputComponent
    ], template: `<div class="container-fluid px-3 pb-3">
  <h3>Concluir Apoyo</h3>
  @if (!seSubioFacturas()) {
  <div class="alert alert-warning animate__animated animate__pulse pointer" role="alert">
    Para concluir el apoyo, para cada cotizaci\xF3n debe subirse al menos 1 factura, y no debe quedar ninguna factura sin subirse el pdf.
  </div>
  }
  Programa: <b class="text-uppercase">{{solicitudApoyo.programas_apoyos?.alias}}</b> <br>
  Solicitante: <b class="text-uppercase">{{utils.nombreClienteFromApoyo(solicitudApoyo)}}</b> <br>
  Modalidad <b>{{solicitudModalidadActual.modalidades_ministraciones?.modalidades?.nombre}}</b> <br>

  <h5 class="fw-bold mt-4 mb-2">Cotizaciones y Facturas</h5>
  @for (cotizacion of solicitudModalidadActual.solicitudes_apoyos_modalidades_cotizaciones; track cotizacion) {
    <form-group [title]="cotizacion.apoyos_proveedores?.nombre_comercial?.toUpperCase()+' - $' +cotizacion.monto.toFixed(2)"
      [showAddButton]="true" addButtonText="Factura" addButtonStyle="btn btn-success btn-sm" (buttonEvent)="addFactura(cotizacion)">
      @if (!cotizacion.cotizaciones_facturas || cotizacion.cotizaciones_facturas.length==0) {
        <p class="text-center py-4 fw-bold">No hay facturas asociadas.</p>
      }
      <div class="container my-1 mb-4">
        @for (factura of cotizacion.cotizaciones_facturas; track factura) {
          <div class="row py-2">
            <div class="col p-1">
              <app-file-input apiUrl="api/files/apoyos/modalidad/cotizaciones/factura/save" 
                key="document"
                [formExtra]="{id:factura.id}" 
                [showSimpleDownload]="true" 
                [(url)]="factura.documento_url"
                />
            </div>
            <div class="col-auto p-1">
              <button class="btn btn-danger shadow" (click)="deleteFactura(cotizacion,factura)"><i class="bi bi-x"></i></button>
            </div>
          </div>
        }
      </div>
    </form-group>
  }
  <div class="row mt-4 mb-4 px-2">
    @if (solicitudModalidadActual.estado=='LIBERADO') {
      <button class="btn btn-primary shadow m-1" (click)="solicitudApoyoController.avanzarEstado(solicitudModalidadActual)" [disabled]="!seSubioFacturas()">
        Concluir
      </button>
    }
    @if (solicitudModalidadActual.estado=='CONCLUIDO' || solicitudModalidadActual.estado=='INCONCLUSO') {
      <button class="btn btn-danger shadow m-1" (click)="solicitudApoyoController.retrocederEstado(solicitudModalidadActual)">
        Cancelar Conclusi\xF3n
      </button>
    }
  </div>
</div>` }]
  }], () => [{ type: SolicitudApoyoService }, { type: CotizacionFacturaService }, { type: UtilsService }], { solicitudApoyo: [{
    type: Input
  }], solicitudModalidadActual: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConcluirApoyoComponent, { className: "ConcluirApoyoComponent", filePath: "src/app/main/apoyos/concluir-apoyo/concluir-apoyo.component.ts", lineNumber: 22 });
})();

// src/app/main/apoyos/list-apoyos/list-apoyos.component.ts
var _c03 = () => ["solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades", "solicitudesApoyosModalidades.sesiones", "usuarios", "datosPersonales", "programasApoyos", "solicitudesApoyosModalidades.solicitudesApoyosModalidadesCotizaciones.apoyosProveedores", "solicitudesApoyosModalidades.solicitudesApoyosModalidadesCotizaciones.cotizacionesFacturas", "datosPersonales"];
var _c1 = () => ({ disabled: false });
function ListApoyosComponent_Conditional_14_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 16);
    \u0275\u0275text(1, "SESI\xD3N ASOCIADA");
    \u0275\u0275elementEnd();
  }
}
function ListApoyosComponent_Conditional_14_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ListApoyosComponent_Conditional_14_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dictaminar());
    });
    \u0275\u0275text(1, " Dictaminar ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.modalidadActual.sesion_id);
  }
}
function ListApoyosComponent_Conditional_14_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ListApoyosComponent_Conditional_14_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.solicitudApoyoController.retrocederEstado(ctx_r1.modalidadActual));
    });
    \u0275\u0275text(1, " Cancelar Dictaminado ");
    \u0275\u0275elementEnd();
  }
}
function ListApoyosComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "h3");
    \u0275\u0275text(2, "Dictaminar Apoyo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Programa: ");
    \u0275\u0275elementStart(4, "b", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, " Solicitante: ");
    \u0275\u0275elementStart(8, "b", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, " Modalidad ");
    \u0275\u0275elementStart(12, "b");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "br");
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "span")(18, "b");
    \u0275\u0275text(19, "Sesi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, ListApoyosComponent_Conditional_14_Conditional_20_Template, 2, 0, "i", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "app-autocomplete-field", 18);
    \u0275\u0275twoWayListener("valueChange", function ListApoyosComponent_Conditional_14_Template_app_autocomplete_field_valueChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modalidadActual.sesion_id, $event) || (ctx_r1.modalidadActual.sesion_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 19);
    \u0275\u0275conditionalCreate(24, ListApoyosComponent_Conditional_14_Conditional_24_Template, 2, 1, "button", 20);
    \u0275\u0275conditionalCreate(25, ListApoyosComponent_Conditional_14_Conditional_25_Template, 2, 0, "button", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.rowEdit.programas_apoyos == null ? null : ctx_r1.rowEdit.programas_apoyos.alias);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.utils.nombreClienteFromApoyo(ctx_r1.rowEdit));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.modalidadActual.modalidades_ministraciones == null ? null : ctx_r1.modalidadActual.modalidades_ministraciones.modalidades == null ? null : ctx_r1.modalidadActual.modalidades_ministraciones.modalidades.nombre);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.modalidadActual.sesion_id ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx_r1.modalidadActual.sesion_id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.modalidadActual.estado == "VERIFICADO" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.modalidadActual.estado == "SESION ASIGNADA" ? 25 : -1);
  }
}
function ListApoyosComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-preliberar-apoyo", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("solicitudApoyo", ctx_r1.rowEdit)("solicitudModalidadActual", ctx_r1.modalidadActual);
  }
}
function ListApoyosComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-preliberar-apoyo", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("liberar", true)("solicitudApoyo", ctx_r1.rowEdit)("solicitudModalidadActual", ctx_r1.modalidadActual);
  }
}
function ListApoyosComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-concluir-apoyo", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("solicitudApoyo", ctx_r1.rowEdit)("solicitudModalidadActual", ctx_r1.modalidadActual);
  }
}
var TABLA_DEF = {
  columns: [
    "id",
    {
      key: "datos_personales",
      header: "Nombre Solicitante",
      function: (row, utils) => {
        return utils.nombreClienteFromDatosPersonales(row);
      }
    },
    "nombre_comercial",
    {
      key: "solicitudes_apoyos_modalidades",
      header: "Modalidad Actual",
      function: (modalidades) => {
        if (modalidades.length == 0)
          return "N/A";
        return modalidades[modalidades.length - 1].modalidades_ministraciones?.modalidades?.nombre;
      }
    },
    {
      key: "solicitudes_apoyos_modalidades",
      header: "Estado",
      function: (modalidades) => {
        if (modalidades.length == 0)
          return "N/A";
        return modalidades[modalidades.length - 1].estado;
      }
    },
    {
      key: "solicitudes_apoyos_modalidades",
      header: "Total Modalidades",
      function: (modalidades) => {
        return modalidades.length.toString();
      }
    },
    {
      key: "usuarios",
      header: "Creado Por",
      subKey: "nombre"
    },
    "created_at"
  ]
};
var BASE_FILTERS = [
  {
    label: "Municipio:",
    apiUrl: "api/sucursales",
    keyList: "id",
    keyDetalle: "nombre",
    key: "sucursal_id",
    placeholder: "Ingresa una sucursal...",
    inputGroup: true
  },
  {
    key: "datosPersonales",
    label: "Curp Solicitante",
    conditionals: [],
    andConditionals: [
      {
        key: "curp",
        operator: "LIKE"
      }
    ],
    type: "text"
  },
  {
    key: "solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades",
    apiUrl: "api/modalidades",
    keyList: "id",
    keyDetalle: "nombre",
    label: "Modalidad",
    conditionals: [
      {
        key: "id",
        operator: "="
      }
    ]
  },
  {
    key: "solicitudesApoyosModalidades",
    label: "Estado",
    conditionals: [],
    andConditionals: [
      {
        key: "estado",
        operator: "="
      }
    ],
    options: ["CAPTURANDO", "CAPTURA COMPLETA", "VERIFICADO", "SESION ASIGNADA", "LIBERADO", "CONCLUIDO"]
  }
];
var _ListApoyosComponent = class _ListApoyosComponent {
  constructor(solicitudApoyoController, modalidadContrller, route, router, storage, utils) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.modalidadContrller = modalidadContrller;
    this.route = route;
    this.router = router;
    this.storage = storage;
    this.utils = utils;
    this.tabla = TABLA_DEF;
    this.baseFilters = BASE_FILTERS;
    this.show = false;
    this.edit = {};
    this.sucursales = [];
    this.title = "Solicitudes de Apoyo";
    this.extraData = {
      conditionals: JSON.stringify([
        ["created_at", ">=", (/* @__PURE__ */ new Date()).getFullYear() + "-01-01"],
        ["created_at", "<=", (/* @__PURE__ */ new Date()).getFullYear() + "-12-31"],
        ["deleted_at", "IS NULL", null]
      ])
    };
    this.tableAdvancedFilters = [];
    this.rowButtons = [];
    this.headerButtons = [];
    this.actualPath = "";
    this.showDictaminar = false;
    this.showPreliberar = false;
    this.showLiberar = false;
    this.showConclusion = false;
    const usuario = this.storage.getPerfil();
    this.edit.sucursal_id = usuario.sucursal_id;
  }
  ngOnInit() {
    this.initSucursales();
    this.route.url.subscribe((url) => {
      this.updateFilters(url[0].path);
    });
  }
  onRowButtonClick(event) {
    this.rowEdit = event.row;
    this.setModalidadActual();
    switch (event.key) {
      case "validar":
        this.router.navigate(["/main/apoyos/validar", event.row.id]);
        break;
      case "dictaminar":
        this.showDictaminar = true;
        break;
      case "preliberar":
        this.showPreliberar = true;
        break;
      case "liberar":
        this.showLiberar = true;
        break;
      case "conclusion":
        this.showConclusion = true;
    }
  }
  onHeaderButtonClick(key) {
    switch (key) {
      case "pendientes":
        this.title = "Apoyos Pendientes";
        this.tableAdvancedFilters = [
          {
            relation: "solicitudesApoyosModalidades",
            conditionals: [],
            andConditionals: [
              ["estado", "=", "CAPTURANDO"]
            ]
          }
        ];
        break;
      case "capturados":
        this.title = "Apoyos Capturados";
        this.tableAdvancedFilters = [
          {
            relation: "solicitudesApoyosModalidades",
            conditionals: [],
            andConditionals: [
              ["estado", "=", "CAPTURA COMPLETA"]
            ]
          }
        ];
        break;
      case "verificados":
        this.title = "Apoyos Verificados";
        this.tableAdvancedFilters = [
          {
            relation: "solicitudesApoyosModalidades",
            conditionals: [],
            andConditionals: [
              ["estado", "=", "VERIFICADO"]
            ]
          }
        ];
        break;
      case "dictaminacion":
        this.title = "Apoyos Dictaminados";
        this.tableAdvancedFilters = [
          {
            relation: "solicitudesApoyosModalidades",
            conditionals: [],
            andConditionals: [
              ["estado", "=", "SESION ASIGNADA"]
            ]
          }
        ];
        break;
      case "liberacion":
        this.title = "Apoyos Liberados";
        this.tableAdvancedFilters = [
          {
            relation: "solicitudesApoyosModalidades",
            conditionals: [
              ["estado", "=", "LIBERADO"],
              ["estado", "=", "INCONCLUSO"]
            ],
            andConditionals: []
          }
        ];
        break;
      case "conclusion":
        this.title = "Apoyos Concluidos";
        this.tableAdvancedFilters = [
          {
            relation: "solicitudesApoyosModalidades",
            conditionals: [],
            andConditionals: [
              ["estado", "=", "CONCLUIDO"]
            ]
          }
        ];
        break;
    }
  }
  updateFilters(path) {
    this.actualPath = path;
    switch (path) {
      case "pendientes":
        this.applyPendientesFilters();
        break;
      case "verificados":
        this.applyVerificadosFilters();
        break;
      case "dictaminacion":
        this.applyDictaminadosFilters();
        break;
      case "liberacion":
        this.applyLiberacionFilters();
        break;
      case "conclusion":
        this.applyConclusionFilters();
    }
  }
  applyPendientesFilters() {
    this.title = "Apoyos Pendientes";
    this.headerButtons = [
      {
        key: "pendientes",
        text: "Pendientes"
      },
      {
        key: "capturados",
        text: "Capturados"
      }
    ];
    this.tableAdvancedFilters = [
      {
        relation: "solicitudesApoyosModalidades",
        conditionals: [],
        andConditionals: [
          ["estado", "=", "CAPTURANDO"]
        ]
      }
    ];
  }
  applyVerificadosFilters() {
    this.title = "Apoyos Capturados";
    this.headerButtons = [
      {
        key: "capturados",
        text: "Capturados"
      },
      {
        key: "verificados",
        text: "Verificados"
      }
    ];
    this.rowButtons = [
      {
        key: "validar",
        style: {
          button: "btn btn-secondary"
        },
        text: "Validar"
      }
    ];
    this.tableAdvancedFilters = [
      {
        relation: "solicitudesApoyosModalidades",
        conditionals: [],
        andConditionals: [
          ["estado", "=", "CAPTURA COMPLETA"]
        ]
      }
    ];
  }
  applyDictaminadosFilters() {
    this.title = "Apoyos Verificados";
    this.headerButtons = [
      {
        key: "verificados",
        text: "Verificados"
      },
      {
        key: "dictaminacion",
        text: "Dictaminados"
      }
    ];
    this.rowButtons = [
      {
        key: "dictaminar",
        style: {
          button: "btn btn-secondary"
        },
        text: "Dictaminar"
      }
    ];
    this.tableAdvancedFilters = [
      {
        relation: "solicitudesApoyosModalidades",
        conditionals: [],
        andConditionals: [
          ["estado", "=", "VERIFICADO"]
        ]
      }
    ];
  }
  applyLiberacionFilters() {
    this.title = "Apoyos Dictaminados";
    this.headerButtons = [
      {
        key: "dictaminacion",
        text: "Dictaminados"
      },
      {
        key: "liberacion",
        text: "Liberados"
      }
    ];
    this.rowButtons = [
      {
        key: "liberar",
        style: {
          button: "btn btn-secondary"
        },
        text: "Liberar"
      }
    ];
    this.tableAdvancedFilters = [
      {
        relation: "solicitudesApoyosModalidades",
        conditionals: [],
        andConditionals: [
          ["estado", "=", "SESION ASIGNADA"]
        ]
      }
    ];
  }
  applyConclusionFilters() {
    this.title = "Apoyos Liberados";
    this.headerButtons = [
      {
        key: "liberacion",
        text: "Liberados"
      },
      {
        key: "conclusion",
        text: "Concluidos"
      }
    ];
    this.rowButtons = [
      {
        key: "conclusion",
        style: {
          button: "btn btn-secondary"
        },
        text: "Concluir"
      }
    ];
    this.tableAdvancedFilters = [
      {
        relation: "solicitudesApoyosModalidades",
        conditionals: [
          ["estado", "=", "LIBERADO"],
          ["estado", "=", "INCONCLUSO"]
        ],
        andConditionals: []
      }
    ];
  }
  initSucursales() {
    const userLogin = this.storage.getUser();
    this.sucursales = userLogin.perfiles.map((perfil) => {
      return {
        value: perfil.sucursales.id,
        label: perfil.sucursales.nombre
      };
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      const res = yield this.solicitudApoyoController.new(this.edit);
      console.log(res);
      if (res) {
        this.router.navigate(["../editar", res.id], { relativeTo: this.route });
      }
      return;
    });
  }
  dictaminar() {
    return __async(this, null, function* () {
      if (!this.modalidadActual)
        return;
      yield this.modalidadContrller.update(this.modalidadActual.id, this.modalidadActual);
      yield this.solicitudApoyoController.avanzarEstado(this.modalidadActual);
    });
  }
  setModalidadActual() {
    this.modalidadActual = this.rowEdit.solicitudes_apoyos_modalidades[this.rowEdit.solicitudes_apoyos_modalidades.length - 1];
  }
};
_ListApoyosComponent.\u0275fac = function ListApoyosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ListApoyosComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(SolicitudApoyoModalidadService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LocalStorageService), \u0275\u0275directiveInject(UtilsService));
};
_ListApoyosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListApoyosComponent, selectors: [["app-list-apoyos"]], decls: 21, vars: 25, consts: [[3, "agregarClick", "rowButtonClickEvent", "barraButtonClickEvent", "title", "controller", "tableDefinition", "useDefaultAgregarRedirect", "relations", "rowButtons", "advancedSearch", "barraButtons", "getAdvancedFilters"], [3, "showChange", "show"], [1, "text-center", "mb-3"], [1, "row", "justify-content-evenly"], [1, "col-12", "col-sm", "p-3"], ["label", "Sucursal", 3, "valueChange", "value", "options", "validator"], ["label", "Programas de Apoyo", "apiUrl", "api/programas_apoyos", "keyList", "id", "keyDetalle", "alias", 3, "valueChange", "extraData", "value"], [1, "row", "my-3"], [1, "col", "text-center"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "container", "px-4"], [3, "solicitudApoyo", "solicitudModalidadActual"], [3, "liberar", "solicitudApoyo", "solicitudModalidadActual"], [1, "text-uppercase"], [1, "row", "px-4", "mt-4", "mb-2"], [1, "col-auto", "p-1"], [1, "bi", "bi-check-circle-fill", "fw-bolder", "mx-2", "text-success"], [1, "col"], ["apiUrl", "api/sesiones", "placeholder", "No. de sesi\xF3n...", "keyDetalle", "sesion", "nuevoRedirect", "catalogos/sesiones/nuevo", 3, "valueChange", "value"], [1, "row", "mt-4", "mb-4", "px-2"], [1, "btn", "btn-primary", "shadow", "m-1", 3, "disabled"], [1, "btn", "btn-danger", "shadow", "m-1"], [1, "btn", "btn-primary", "shadow", "m-1", 3, "click", "disabled"], [1, "btn", "btn-danger", "shadow", "m-1", 3, "click"]], template: function ListApoyosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-tabla", 0);
    \u0275\u0275listener("agregarClick", function ListApoyosComponent_Template_app_tabla_agregarClick_0_listener() {
      return ctx.show = true;
    })("rowButtonClickEvent", function ListApoyosComponent_Template_app_tabla_rowButtonClickEvent_0_listener($event) {
      return ctx.onRowButtonClick($event);
    })("barraButtonClickEvent", function ListApoyosComponent_Template_app_tabla_barraButtonClickEvent_0_listener($event) {
      return ctx.onHeaderButtonClick($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "app-formulario-flotante", 1);
    \u0275\u0275twoWayListener("showChange", function ListApoyosComponent_Template_app_formulario_flotante_showChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.show, $event) || (ctx.show = $event);
      return $event;
    });
    \u0275\u0275elementStart(2, "h3", 2);
    \u0275\u0275text(3, "Nuevo Apoyo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "app-select-field", 5);
    \u0275\u0275twoWayListener("valueChange", function ListApoyosComponent_Template_app_select_field_valueChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit.sucursal_id, $event) || (ctx.edit.sucursal_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "app-autocomplete-field", 6);
    \u0275\u0275twoWayListener("valueChange", function ListApoyosComponent_Template_app_autocomplete_field_valueChange_8_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.edit.programas_apoyo_id, $event) || (ctx.edit.programas_apoyo_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "button", 9);
    \u0275\u0275listener("click", function ListApoyosComponent_Template_button_click_11_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275text(12, " Guardar ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(13, "app-formulario-flotante", 1);
    \u0275\u0275twoWayListener("showChange", function ListApoyosComponent_Template_app_formulario_flotante_showChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showDictaminar, $event) || (ctx.showDictaminar = $event);
      return $event;
    });
    \u0275\u0275conditionalCreate(14, ListApoyosComponent_Conditional_14_Template, 26, 7, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-formulario-flotante", 1);
    \u0275\u0275twoWayListener("showChange", function ListApoyosComponent_Template_app_formulario_flotante_showChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showPreliberar, $event) || (ctx.showPreliberar = $event);
      return $event;
    });
    \u0275\u0275conditionalCreate(16, ListApoyosComponent_Conditional_16_Template, 1, 2, "app-preliberar-apoyo", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-formulario-flotante", 1);
    \u0275\u0275twoWayListener("showChange", function ListApoyosComponent_Template_app_formulario_flotante_showChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showLiberar, $event) || (ctx.showLiberar = $event);
      return $event;
    });
    \u0275\u0275conditionalCreate(18, ListApoyosComponent_Conditional_18_Template, 1, 3, "app-preliberar-apoyo", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "app-formulario-flotante", 1);
    \u0275\u0275twoWayListener("showChange", function ListApoyosComponent_Template_app_formulario_flotante_showChange_19_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.showConclusion, $event) || (ctx.showConclusion = $event);
      return $event;
    });
    \u0275\u0275conditionalCreate(20, ListApoyosComponent_Conditional_20_Template, 1, 2, "app-concluir-apoyo", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", ctx.title)("controller", ctx.solicitudApoyoController)("tableDefinition", ctx.tabla)("useDefaultAgregarRedirect", false)("relations", \u0275\u0275pureFunction0(23, _c03))("rowButtons", ctx.rowButtons)("advancedSearch", ctx.baseFilters)("barraButtons", ctx.headerButtons)("getAdvancedFilters", ctx.tableAdvancedFilters);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.show);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("value", ctx.edit.sucursal_id);
    \u0275\u0275property("options", ctx.sucursales)("validator", \u0275\u0275pureFunction0(24, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("extraData", ctx.extraData);
    \u0275\u0275twoWayProperty("value", ctx.edit.programas_apoyo_id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("show", ctx.showDictaminar);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.rowEdit && ctx.modalidadActual ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showPreliberar);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.rowEdit && ctx.modalidadActual ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showLiberar);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.rowEdit && ctx.modalidadActual ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("show", ctx.showConclusion);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.rowEdit && ctx.modalidadActual ? 20 : -1);
  }
}, dependencies: [
  TablaComponent,
  FormularioFlotanteComponent,
  SelectFieldComponent,
  AutocompleteFieldComponent,
  PreliberarApoyoComponent,
  ConcluirApoyoComponent
], encapsulation: 2 });
var ListApoyosComponent = _ListApoyosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListApoyosComponent, [{
    type: Component,
    args: [{ selector: "app-list-apoyos", imports: [
      TablaComponent,
      FormularioFlotanteComponent,
      SelectFieldComponent,
      AutocompleteFieldComponent,
      PreliberarApoyoComponent,
      ConcluirApoyoComponent
    ], template: `<app-tabla
  [title]="title"
  [controller]="solicitudApoyoController"
  [tableDefinition]="tabla"
  (agregarClick)="show=true"
  [useDefaultAgregarRedirect]="false"
  [relations]="['solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades','solicitudesApoyosModalidades.sesiones','usuarios','datosPersonales','programasApoyos','solicitudesApoyosModalidades.solicitudesApoyosModalidadesCotizaciones.apoyosProveedores','solicitudesApoyosModalidades.solicitudesApoyosModalidadesCotizaciones.cotizacionesFacturas','datosPersonales']"
  [rowButtons]="rowButtons"
  [advancedSearch]="baseFilters"
  [barraButtons]="headerButtons"
  (rowButtonClickEvent)="onRowButtonClick($event)"
  (barraButtonClickEvent)="onHeaderButtonClick($event)"
  [getAdvancedFilters]="tableAdvancedFilters"
></app-tabla>
<app-formulario-flotante [(show)]="show">
  <h3 class="text-center mb-3">Nuevo Apoyo</h3>
  <div class="row justify-content-evenly">
    <div class="col-12 col-sm p-3">
      <app-select-field
        label="Sucursal"
        [(value)]="edit.sucursal_id"
        [options]="sucursales"
        [validator]="{disabled:false}"
        >
      </app-select-field>
    </div>
    <div class="col-12 col-sm p-3">
      <app-autocomplete-field
        label="Programas de Apoyo"
        apiUrl="api/programas_apoyos"
        keyList="id"
        keyDetalle="alias"
        [extraData]="extraData"
        [(value)]="edit.programas_apoyo_id"
        />
    </div>
    <div class="row my-3">
      <div class="col text-center">
        <button class="btn btn-primary" (click)="onSubmit()" [disabled]="">
          Guardar
        </button>
      </div>
    </div>
  </div>
</app-formulario-flotante>

<app-formulario-flotante [(show)]="showDictaminar">
  @if (rowEdit && modalidadActual) {
    <div class="container px-4">
      <h3>Dictaminar Apoyo</h3>
      Programa: <b class="text-uppercase">{{rowEdit.programas_apoyos?.alias}}</b> <br>
      Solicitante: <b class="text-uppercase">{{utils.nombreClienteFromApoyo(rowEdit)}}</b> <br>
      Modalidad <b>{{modalidadActual.modalidades_ministraciones?.modalidades?.nombre}}</b> <br>
      <div class="row px-4 mt-4 mb-2">
        <div class="col-auto p-1">
          <span><b>Sesi\xF3n</b>@if (modalidadActual.sesion_id) {
          <i
          class="bi bi-check-circle-fill fw-bolder mx-2 text-success">SESI\xD3N ASOCIADA</i>
        }</span>
      </div>
      <div class="col">
        <app-autocomplete-field apiUrl="api/sesiones" placeholder="No. de sesi\xF3n..." keyDetalle="sesion"
          nuevoRedirect="catalogos/sesiones/nuevo" [(value)]="modalidadActual.sesion_id" />
      </div>
    </div>
    <div class="row mt-4 mb-4 px-2">
      @if (modalidadActual.estado=='VERIFICADO') {
        <button class="btn btn-primary shadow m-1" (click)="dictaminar()" [disabled]="!modalidadActual.sesion_id">
          Dictaminar
        </button>
      }
      @if (modalidadActual.estado=='SESION ASIGNADA') {
        <button class="btn btn-danger shadow m-1" (click)="solicitudApoyoController.retrocederEstado(modalidadActual)">
          Cancelar Dictaminado
        </button>
      }
    </div>
  </div>
}
</app-formulario-flotante>

<app-formulario-flotante [(show)]="showPreliberar">
  @if (rowEdit && modalidadActual) {
    <app-preliberar-apoyo [solicitudApoyo]="rowEdit" [solicitudModalidadActual]="modalidadActual" />
  }
</app-formulario-flotante>

<app-formulario-flotante [(show)]="showLiberar">
  @if (rowEdit && modalidadActual) {
    <app-preliberar-apoyo [liberar]="true" [solicitudApoyo]="rowEdit" [solicitudModalidadActual]="modalidadActual" />
  }
</app-formulario-flotante>

<app-formulario-flotante [(show)]="showConclusion">
  @if (rowEdit && modalidadActual) {
    <app-concluir-apoyo [solicitudApoyo]="rowEdit" [solicitudModalidadActual]="modalidadActual" />
  }
</app-formulario-flotante>
` }]
  }], () => [{ type: SolicitudApoyoService }, { type: SolicitudApoyoModalidadService }, { type: ActivatedRoute }, { type: Router }, { type: LocalStorageService }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListApoyosComponent, { className: "ListApoyosComponent", filePath: "src/app/main/apoyos/list-apoyos/list-apoyos.component.ts", lineNumber: 125 });
})();

// src/app/main/apoyos/validar-apoyo/validar-apoyo.component.ts
var _c04 = () => ["num_ext_fiscal", "num_ext_negocio", "programas_apoyos"];
var _c12 = () => ["alias", "vigencia", "created_at", "updated_at"];
function ValidarApoyoComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ValidarApoyoComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solicitudApoyoController.avanzarEstado(ctx_r1.modalidadActual));
    });
    \u0275\u0275text(1, " Verificar ");
    \u0275\u0275elementEnd();
  }
}
function ValidarApoyoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ValidarApoyoComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.solicitudApoyoController.retrocederEstado(ctx_r1.modalidadActual));
    });
    \u0275\u0275text(1, " Cancelar Verificado ");
    \u0275\u0275elementEnd();
  }
}
function ValidarApoyoComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 22)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tipo_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tipo_r4.inversion_tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, ctx_r1.totalTipo(tipo_r4)), " ");
  }
}
function ValidarApoyoComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "button", 25);
    \u0275\u0275listener("click", function ValidarApoyoComponent_For_42_Template_button_click_7_listener() {
      const documento_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.utils.openUrlInline(documento_r6.url));
    });
    \u0275\u0275element(8, "i", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const documento_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", documento_r6.modalidades_ministraciones_documentos == null ? null : documento_r6.modalidades_ministraciones_documentos.documentos == null ? null : documento_r6.modalidades_ministraciones_documentos.documentos.nombre, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(documento_r6.url ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(documento_r6.url ? "SUBIDO" : "NO SUBIDO");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !documento_r6.url);
  }
}
function ValidarApoyoComponent_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "button", 25);
    \u0275\u0275listener("click", function ValidarApoyoComponent_For_52_Template_button_click_10_listener() {
      const cotizacion_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.utils.openUrlInline(cotizacion_r8.documento_url));
    });
    \u0275\u0275element(11, "i", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cotizacion_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cotizacion_r8.apoyos_proveedores == null ? null : cotizacion_r8.apoyos_proveedores.nombre_comercial == null ? null : cotizacion_r8.apoyos_proveedores.nombre_comercial.toUpperCase(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, cotizacion_r8.monto), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(cotizacion_r8.documento_url ? "text-success" : "text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cotizacion_r8.documento_url ? "SUBIDO" : "NO SUBIDO");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !cotizacion_r8.documento_url);
  }
}
var _ValidarApoyoComponent = class _ValidarApoyoComponent {
  constructor(solicitudApoyoController, route, utils) {
    this.solicitudApoyoController = solicitudApoyoController;
    this.route = route;
    this.utils = utils;
    this.apoyoTiposInversiones = [];
  }
  ngOnInit() {
    this.route.params.subscribe((params) => __async(this, null, function* () {
      const id = params["apoyo_id"];
      if (id) {
        this.solicitudApoyo = yield this.solicitudApoyoController.find(id, [
          "programasApoyos",
          "datosPersonales",
          "apoyosTiposInversiones.apoyosTiposInversionesDetalles",
          "solicitudesApoyosModalidades.modalidadesMinistraciones.modalidades",
          "solicitudesApoyosModalidades.solicitudesApoyosModalidadesCotizaciones.apoyosProveedores",
          "solicitudesApoyosModalidades.solicitudesApoyosModalidadesDocumentos.modalidadesMinistracionesDocumentos.documentos",
          "apoyosTiposInversionesDetalles"
        ]);
        this.apoyoTiposInversiones = this.solicitudApoyoController.tiposInversionesActuales(this.solicitudApoyo);
        this.modalidadActual = this.solicitudApoyoController.modalidadActual(this.solicitudApoyo);
        console.log(this.solicitudApoyo);
      }
    }));
  }
  totalInversion() {
    return this.apoyoTiposInversiones.reduce((acc, tipo) => {
      return acc + this.totalTipo(tipo);
    }, 0) ?? 0;
  }
  totalTipo(tipo) {
    if (!tipo?.apoyos_tipos_inversiones_detalles)
      return 0;
    return tipo.apoyos_tipos_inversiones_detalles.reduce((acc, detalle) => acc + detalle.monto_solicitado, 0);
  }
};
_ValidarApoyoComponent.\u0275fac = function ValidarApoyoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ValidarApoyoComponent)(\u0275\u0275directiveInject(SolicitudApoyoService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UtilsService));
};
_ValidarApoyoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ValidarApoyoComponent, selectors: [["app-validar-apoyo"]], decls: 53, vars: 16, consts: [[1, "container-fluid"], [1, "row", "justify-content-end"], [1, "col", "p-3"], [1, "h3"], [1, "col-auto", "align-self-center", "p-1"], [1, "btn", "btn-primary", "shadow", "m-1"], [1, "btn", "btn-danger", "shadow", "m-1"], [1, "row"], [1, "col-12", "col-sm-12", "rounded", "bg-white", "shadow", "mb-3"], ["title", "Datos del Negocio", 3, "data", "ignoreNumbers", "ignoreKeys"], [1, "col-12", "col-sm-12", "rounded", "bg-white", "mb-3", "shadow"], ["title", "Programa de Apoyo", 3, "data", "ignoreNumbers", "ignoreKeys"], [1, "container-fluid", "p-3"], [1, "col"], [1, "h4"], [1, "row", "px-3"], [1, "col", "text-center"], [3, "title", "data"], [1, "border-primary"], [1, "row", "px-3", "my-2"], [1, "btn", "btn-primary", "shadow", "m-1", 3, "click"], [1, "btn", "btn-danger", "shadow", "m-1", 3, "click"], [1, "col", "col-sm", "p-3"], [1, "col", "p-3", "col-sm", "text-center"], [1, "col", "text-center", "fw-bold"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "bi", "bi-printer-fill"]], template: function ValidarApoyoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "Solicitud de Apoyo - ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275conditionalCreate(8, ValidarApoyoComponent_Conditional_8_Template, 2, 0, "button", 5);
    \u0275\u0275conditionalCreate(9, ValidarApoyoComponent_Conditional_9_Template, 2, 0, "button", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
    \u0275\u0275element(12, "data-view-section", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275element(14, "data-view-section", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 12)(17, "div", 7)(18, "div", 13)(19, "span", 14)(20, "b");
    \u0275\u0275text(21, "Programa de Inversi\xF3n");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275repeaterCreate(22, ValidarApoyoComponent_For_23_Template, 7, 4, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(24, "div", 7)(25, "div", 13);
    \u0275\u0275text(26, "Total:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 16)(28, "b");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "currency");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(31, "div", 10);
    \u0275\u0275element(32, "data-view-section", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 10)(34, "div", 12)(35, "div", 7)(36, "div", 13)(37, "span", 14)(38, "b");
    \u0275\u0275text(39, "Documentos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(40, "hr", 18);
    \u0275\u0275repeaterCreate(41, ValidarApoyoComponent_For_42_Template, 9, 5, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 10)(44, "div", 12)(45, "div", 7)(46, "div", 13)(47, "span", 14)(48, "b");
    \u0275\u0275text(49, "Cotizaciones");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(50, "hr", 18);
    \u0275\u0275repeaterCreate(51, ValidarApoyoComponent_For_52_Template, 12, 8, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.utils.nombreClienteFromApoyo(ctx.solicitudApoyo));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx.modalidadActual == null ? null : ctx.modalidadActual.estado) == "CAPTURA COMPLETA" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.modalidadActual == null ? null : ctx.modalidadActual.estado) == "VERIFICADO" ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx.solicitudApoyo)("ignoreNumbers", true)("ignoreKeys", \u0275\u0275pureFunction0(14, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.solicitudApoyo == null ? null : ctx.solicitudApoyo.programas_apoyos)("ignoreNumbers", true)("ignoreKeys", \u0275\u0275pureFunction0(15, _c12));
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.apoyoTiposInversiones);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 12, ctx.totalInversion()));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", "Modalidad Actual - " + (ctx.modalidadActual == null ? null : ctx.modalidadActual.modalidades_ministraciones == null ? null : ctx.modalidadActual.modalidades_ministraciones.modalidades == null ? null : ctx.modalidadActual.modalidades_ministraciones.modalidades.nombre))("data", ctx.modalidadActual);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx.modalidadActual == null ? null : ctx.modalidadActual.solicitudes_apoyos_modalidades_documentos);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx.modalidadActual == null ? null : ctx.modalidadActual.solicitudes_apoyos_modalidades_cotizaciones);
  }
}, dependencies: [
  CurrencyPipe,
  DataViewSectionComponent
], encapsulation: 2 });
var ValidarApoyoComponent = _ValidarApoyoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidarApoyoComponent, [{
    type: Component,
    args: [{ selector: "app-validar-apoyo", imports: [
      CurrencyPipe,
      DataViewSectionComponent
    ], template: `<div class="container-fluid">
  <div class="row justify-content-end">
    <div class="col p-3">
      <span class="h3">Solicitud de Apoyo - <b>{{utils.nombreClienteFromApoyo(solicitudApoyo)}}</b></span>
    </div>
    <div class="col-auto align-self-center p-1">
      @if (modalidadActual?.estado=='CAPTURA COMPLETA') {
        <button class="btn btn-primary shadow m-1" (click)="solicitudApoyoController.avanzarEstado(modalidadActual)">
          Verificar
        </button>
      }
      @if (modalidadActual?.estado=='VERIFICADO') {
        <button class="btn btn-danger shadow m-1" (click)="solicitudApoyoController.retrocederEstado(modalidadActual)">
          Cancelar Verificado
        </button>
      }
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-12 rounded bg-white shadow mb-3">
      <data-view-section
        title="Datos del Negocio"
        [data]="solicitudApoyo"
        [ignoreNumbers]="true"
        [ignoreKeys]="['num_ext_fiscal','num_ext_negocio','programas_apoyos']"
        />
    </div>
    <div class="col-12 col-sm-12 rounded bg-white mb-3 shadow">
      <data-view-section
        title="Programa de Apoyo"
        [data]="solicitudApoyo?.programas_apoyos"
        [ignoreNumbers]="true"
        [ignoreKeys]="['alias','vigencia','created_at','updated_at']"
        />
    </div>
    <div class="col-12 col-sm-12 rounded bg-white mb-3 shadow">
      <div class="container-fluid p-3">
        <div class="row">
          <div class="col">
            <span class="h4"><b>Programa de Inversi\xF3n</b></span>
          </div>
        </div>
        @for (tipo of apoyoTiposInversiones; track tipo) {
          <div class="row px-3">
            <div class="col col-sm p-3">
              <b>{{tipo.inversion_tipo}}</b>
            </div>
            <div class="col p-3 col-sm text-center">
              {{totalTipo(tipo) |currency}}
            </div>
          </div>
        }
        <div class="row">
          <div class="col">Total:</div>
          <div class="col text-center"><b>{{totalInversion() |currency}}</b></div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 rounded bg-white mb-3 shadow">
      <data-view-section
        [title]="'Modalidad Actual - '+ modalidadActual?.modalidades_ministraciones?.modalidades?.nombre"
        [data]="modalidadActual"
        />
    </div>

    <div class="col-12 col-sm-12 rounded bg-white mb-3 shadow">
      <div class="container-fluid p-3">
        <div class="row">
          <div class="col">
            <span class="h4"><b>Documentos</b></span>
          </div>
        </div>
        <hr class="border-primary">
        @for (documento of modalidadActual?.solicitudes_apoyos_modalidades_documentos; track documento) {
          <div class="row px-3 my-2">
            <div class="col">
              {{documento.modalidades_ministraciones_documentos?.documentos?.nombre}}
            </div>
            <div class="col text-center fw-bold">
              <span [class]="documento.url?'text-success':'text-danger'">{{documento.url?'SUBIDO':'NO SUBIDO'}}</span>
            </div>
            <div class="col text-center">
              <button class="btn btn-secondary" [disabled]="!documento.url" (click)="utils.openUrlInline(documento.url)"><i class="bi bi-printer-fill"></i></button>
            </div>
          </div>
        }
      </div>
    </div>
    <div class="col-12 col-sm-12 rounded bg-white mb-3 shadow">
      <div class="container-fluid p-3">
        <div class="row">
          <div class="col">
            <span class="h4"><b>Cotizaciones</b></span>
          </div>
        </div>
        <hr class="border-primary">
        @for (cotizacion of modalidadActual?.solicitudes_apoyos_modalidades_cotizaciones; track cotizacion) {
          <div class="row px-3 my-2">
            <div class="col">
              {{cotizacion.apoyos_proveedores?.nombre_comercial?.toUpperCase()}}
            </div>
            <div class="col text-center">
              {{cotizacion.monto|currency}}
            </div>
            <div class="col text-center fw-bold">
              <span [class]="cotizacion.documento_url?'text-success':'text-danger'">{{cotizacion.documento_url?'SUBIDO':'NO SUBIDO'}}</span>
            </div>
            <div class="col text-center">
              <button class="btn btn-secondary" [disabled]="!cotizacion.documento_url" (click)="utils.openUrlInline(cotizacion.documento_url)"><i class="bi bi-printer-fill"></i></button>
            </div>
          </div>
        }
      </div>
    </div>
  </div>
</div>` }]
  }], () => [{ type: SolicitudApoyoService }, { type: ActivatedRoute }, { type: UtilsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ValidarApoyoComponent, { className: "ValidarApoyoComponent", filePath: "src/app/main/apoyos/validar-apoyo/validar-apoyo.component.ts", lineNumber: 21 });
})();

// src/app/main/apoyos/apoyos.routes.ts
var apoyosRoutes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "validar/:apoyo_id", component: ValidarApoyoComponent },
  {
    title: "Apoyos",
    path: "list",
    component: ListApoyosComponent
  },
  {
    title: "Pendientes",
    path: "pendientes",
    component: ListApoyosComponent
  },
  {
    title: "Verificaci\xF3n",
    path: "verificados",
    component: ListApoyosComponent
  },
  {
    title: "Dictaminaci\xF3n",
    path: "dictaminacion",
    component: ListApoyosComponent
  },
  {
    title: "Preliberaci\xF3n",
    path: "preliberacion",
    component: ListApoyosComponent
  },
  {
    title: "Liberaci\xF3n",
    path: "liberacion",
    component: ListApoyosComponent
  },
  {
    title: "Conclusi\xF3n",
    path: "conclusion",
    component: ListApoyosComponent
  },
  {
    title: "Apoyos Formulario",
    path: "editar/:apoyo_id",
    component: FormApoyosComponent,
    loadChildren: () => import("./chunk-NTJI4FAT.js").then((m) => m.formApoyosRoutes)
  }
];
export {
  apoyosRoutes
};
//# sourceMappingURL=chunk-EUA2U5NJ.js.map
