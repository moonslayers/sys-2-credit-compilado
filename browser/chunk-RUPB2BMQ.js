import {
  DatoPersonaFisicaService
} from "./chunk-ZEGUFUIC.js";
import {
  DatoPersonaMoralService
} from "./chunk-4YG63BQX.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  AutocompleteFieldComponent
} from "./chunk-FVPW6XXI.js";
import "./chunk-7VPVFOGJ.js";
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
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/clientes/main/creditos/form-nuevo/form-nuevo.component.ts
var _ClientesCreditoFormNuevoComponent = class _ClientesCreditoFormNuevoComponent {
  constructor(controller, personaFisicaController, personaMoralController, route, router, storage) {
    this.controller = controller;
    this.personaFisicaController = personaFisicaController;
    this.personaMoralController = personaMoralController;
    this.route = route;
    this.router = router;
    this.storage = storage;
    this.credito = {};
    this.personaFisica = {};
    this.personaMoral = {};
    this.extraDataSucursales = {
      conditionals: JSON.stringify([
        ["deleted_at", "IS NULL", null]
      ])
    };
    this.extraData = {
      conditionals: JSON.stringify([
        ["deleted_at", "IS NULL", null],
        ["created_at", ">=", (/* @__PURE__ */ new Date()).getFullYear() + "-01-01"],
        ["created_at", "<=", (/* @__PURE__ */ new Date()).getFullYear() + "-12-31"]
      ])
    };
  }
  onSubmit() {
    return __async(this, null, function* () {
      const credito = yield this.controller.new(this.credito);
      if (!credito?.id)
        return;
      const creditoRelation = yield this.controller.find(credito.id, ["productosFinancieros"]);
      const userData = this.storage.getClienteUser();
      if (!creditoRelation) {
        console.error("ERROR: la relacion con productos financieros no existe.");
      }
      if (creditoRelation?.productos_financieros?.regimen_fiscal === "PERSONA FISICA CON ACTIVIDAD EMPRESARIAL") {
        this.personaFisica = {
          credito_id: credito?.id,
          datos_personal_id: userData?.datos_personales_id
        };
        const personaFisica = yield this.personaFisicaController.new(this.personaFisica);
        this.router.navigate(["../editar/" + creditoRelation?.id], { relativeTo: this.route });
        console.log("SE CREO UN CREDITO PF");
      }
      if (creditoRelation?.productos_financieros?.regimen_fiscal === "PERSONA MORAL") {
        this.personaMoral = {
          credito_id: credito?.id,
          representante_legal_id: userData?.datos_personales_id,
          usuario_id: 0,
          tipo_empresa: "COMERCIO",
          // choose default from: 'INDUSTRIA', 'AGROINDUSTRIA', 'COMERCIO', 'SERVICIOS'
          nombre_comercial: "",
          razon_social: "0000000000",
          fecha_constitucion: "",
          referencia_domicilio: "",
          rfc: "0000000000",
          localidad: "",
          ciudad_id: 1,
          calle: "0000000000",
          colonia: "0000000000",
          codigo_postal: "0000000000",
          no_exterior: "0000000000",
          no_interior: "",
          domicilio_desde: "",
          local_tipo: "PROPIO",
          // default among: 'PROPIO' | 'RENTADO' | 'FAMILIAR' | 'PRESTADO' | 'OTRO'
          local_renta_mensual: 0,
          local_contrato_inicio: "",
          local_contrato_fin: "",
          email: "0000000000@gmail.com",
          resumen_actividad_empresarial: "",
          fecha_inicio_operaciones: "01/01/01",
          fecha_inicio_inscripcion_sat: "",
          empleos_informales_mujeres: 0,
          empleos_informales_hombres: 0,
          empleos_informales_no_binarios: 0,
          empleos_imss_mujeres: 0,
          empleos_imss_hombres: 0,
          empleos_imss_no_binarios: 0,
          empleos_a_generar_mujeres: 0,
          empleos_a_generar_hombres: 0,
          empleos_a_generar_no_binarios: 0,
          latitud: null,
          longitud: null
        };
        const personaMoral = yield this.personaMoralController.new(this.personaMoral);
        this.router.navigate(["../editar/" + creditoRelation?.id], { relativeTo: this.route });
        console.log("SE CREO UN CREDITO PM");
      }
    });
  }
  cancelarCreacionCredito() {
    this.router.navigate(["/clientes/main/creditos/"]);
  }
};
_ClientesCreditoFormNuevoComponent.\u0275fac = function ClientesCreditoFormNuevoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClientesCreditoFormNuevoComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(DatoPersonaFisicaService), \u0275\u0275directiveInject(DatoPersonaMoralService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LocalStorageService));
};
_ClientesCreditoFormNuevoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientesCreditoFormNuevoComponent, selectors: [["app-clientes-credito-form-nuevo"]], decls: 39, vars: 5, consts: [[1, "credit-request-container", "p-4", "rounded-4", "shadow-sm", "bg-white"], [1, "form-header", "mb-4", "text-center"], [1, "h3", "text-primary", "fw-bold", "mb-2"], [1, "bi", "bi-cash-stack", "me-2"], [1, "text-muted"], [1, "form-section", "mb-4"], ["for", "sucursal", 1, "form-label", "fw-semibold"], [1, "bi", "bi-geo-alt-fill", "me-2", "text-primary"], [1, "input-group"], [1, "input-group-text", "bg-light"], [1, "bi", "bi-search", "text-muted"], ["apiUrl", "api/sucursales", "keyList", "id", "keyDetalle", "nombre", 3, "valueChange", "inputGroup", "extraData", "value"], [1, "form-text", "text-muted", "mt-1"], ["for", "programa", 1, "form-label", "fw-semibold"], [1, "bi", "bi-card-list", "me-2", "text-primary"], ["apiUrl", "api/productos_financieros", "keyList", "id", "keyDetalle", "alias", 3, "valueChange", "extraData", "value"], [1, "info-card", "p-3", "mb-4", "rounded-3", "bg-light", "border-start", "border-4", "border-primary"], [1, "d-flex"], [1, "bi", "bi-info-circle-fill", "text-primary", "me-3", "fs-5"], [1, "fw-bold", "mb-1"], [1, "small", "mb-0"], [1, "form-actions", "d-flex", "justify-content-between", "pt-3"], [1, "btn", "btn-outline-secondary", "rounded-pill", "px-4", 3, "click"], [1, "bi", "bi-arrow-left", "me-2"], [1, "btn", "btn-primary", "rounded-pill", "px-4", 3, "click"], [1, "bi", "bi-arrow-right", "ms-2"]], template: function ClientesCreditoFormNuevoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275text(4, "Solicitar Nuevo Cr\xE9dito ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, "Complete los siguientes campos para iniciar su solicitud");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "label", 6);
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275text(10, "Sucursal preferida ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 8)(12, "span", 9);
    \u0275\u0275element(13, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-autocomplete-field", 11);
    \u0275\u0275twoWayListener("valueChange", function ClientesCreditoFormNuevoComponent_Template_app_autocomplete_field_valueChange_14_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.credito.sucursal_id, $event) || (ctx.credito.sucursal_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16, " Seleccione la sucursal donde desea realizar el tr\xE1mite ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 5)(18, "label", 13);
    \u0275\u0275element(19, "i", 14);
    \u0275\u0275text(20, "Programa de financiamiento ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "app-autocomplete-field", 15);
    \u0275\u0275twoWayListener("valueChange", function ClientesCreditoFormNuevoComponent_Template_app_autocomplete_field_valueChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.credito.productos_financiero_id, $event) || (ctx.credito.productos_financiero_id = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12);
    \u0275\u0275text(23, " Elija el tipo de cr\xE9dito que necesita ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 16)(25, "div", 17);
    \u0275\u0275element(26, "i", 18);
    \u0275\u0275elementStart(27, "div")(28, "h6", 19);
    \u0275\u0275text(29, "\xBFNecesita ayuda?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 20);
    \u0275\u0275text(31, "Nuestros asesores est\xE1n disponibles para orientarle en el proceso de solicitud.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 21)(33, "button", 22);
    \u0275\u0275listener("click", function ClientesCreditoFormNuevoComponent_Template_button_click_33_listener() {
      return ctx.cancelarCreacionCredito();
    });
    \u0275\u0275element(34, "i", 23);
    \u0275\u0275text(35, "Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 24);
    \u0275\u0275listener("click", function ClientesCreditoFormNuevoComponent_Template_button_click_36_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275text(37, " Continuar ");
    \u0275\u0275element(38, "i", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("inputGroup", true)("extraData", ctx.extraDataSucursales);
    \u0275\u0275twoWayProperty("value", ctx.credito.sucursal_id);
    \u0275\u0275advance(7);
    \u0275\u0275property("extraData", ctx.extraData);
    \u0275\u0275twoWayProperty("value", ctx.credito.productos_financiero_id);
  }
}, dependencies: [AutocompleteFieldComponent], styles: ["\n\n.credit-request-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.credit-form[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n.info-card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(3px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\napp-sucursal-selector[_ngcontent-%COMP%], \napp-programa-selector[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\napp-sucursal-selector[_ngcontent-%COMP%]::part(control), \napp-programa-selector[_ngcontent-%COMP%]::part(control) {\n  padding: 0.75rem 1rem;\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n  transition: border-color 0.3s ease;\n}\napp-sucursal-selector[_ngcontent-%COMP%]:focus-within::part(control), \napp-programa-selector[_ngcontent-%COMP%]:focus-within::part(control) {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 576px) {\n  .credit-request-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    border-radius: 0;\n    border: none;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 48%;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n}\n/*# sourceMappingURL=form-nuevo.component.css.map */"] });
var ClientesCreditoFormNuevoComponent = _ClientesCreditoFormNuevoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientesCreditoFormNuevoComponent, [{
    type: Component,
    args: [{ selector: "app-clientes-credito-form-nuevo", imports: [
      AutocompleteFieldComponent
    ], template: '<div class="credit-request-container p-4 rounded-4 shadow-sm bg-white">\n    <!-- Encabezado -->\n    <div class="form-header mb-4 text-center">\n      <h2 class="h3 text-primary fw-bold mb-2">\n        <i class="bi bi-cash-stack me-2"></i>Solicitar Nuevo Cr\xE9dito\n      </h2>\n      <p class="text-muted">Complete los siguientes campos para iniciar su solicitud</p>\n    </div>\n\n    <!-- Formulario -->\n      <!-- Campo Sucursal -->\n      <div class="form-section mb-4">\n        <label for="sucursal" class="form-label fw-semibold">\n          <i class="bi bi-geo-alt-fill me-2 text-primary"></i>Sucursal preferida\n        </label>\n        <div class="input-group">\n          <span class="input-group-text bg-light">\n            <i class="bi bi-search text-muted"></i>\n          </span>\n          <app-autocomplete-field\n          apiUrl="api/sucursales"\n          keyList="id"\n          keyDetalle="nombre"\n          [inputGroup]="true"\n          [extraData]="extraDataSucursales"\n          [(value)]="credito.sucursal_id"\n          />\n        </div>\n        <div class="form-text text-muted mt-1">\n          Seleccione la sucursal donde desea realizar el tr\xE1mite\n        </div>\n      </div>\n\n      <!-- Campo Programa -->\n      <div class="form-section mb-4">\n        <label for="programa" class="form-label fw-semibold">\n          <i class="bi bi-card-list me-2 text-primary"></i>Programa de financiamiento\n        </label>\n        <app-autocomplete-field\n        apiUrl="api/productos_financieros"\n        keyList="id"\n        keyDetalle="alias"\n        [extraData]="extraData"\n        [(value)]="credito.productos_financiero_id"\n        />\n        <div class="form-text text-muted mt-1">\n          Elija el tipo de cr\xE9dito que necesita\n        </div>\n      </div>\n\n      <!-- Informaci\xF3n Adicional -->\n      <div class="info-card p-3 mb-4 rounded-3 bg-light border-start border-4 border-primary">\n        <div class="d-flex">\n          <i class="bi bi-info-circle-fill text-primary me-3 fs-5"></i>\n          <div>\n            <h6 class="fw-bold mb-1">\xBFNecesita ayuda?</h6>\n            <p class="small mb-0">Nuestros asesores est\xE1n disponibles para orientarle en el proceso de solicitud.</p>\n          </div>\n        </div>\n      </div>\n\n      <!-- Accioness -->\n      <div class="form-actions d-flex justify-content-between pt-3">\n        <button\n          class="btn btn-outline-secondary rounded-pill px-4"\n          (click)="cancelarCreacionCredito()">\n          <i class="bi bi-arrow-left me-2"></i>Cancelar\n        </button>\n        <button\n          (click)="onSubmit()"\n          class="btn btn-primary rounded-pill px-4">\n          Continuar\n          <i class="bi bi-arrow-right ms-2"></i>\n        </button>\n      </div>\n  </div>\n', styles: ["/* src/app/clientes/main/creditos/form-nuevo/form-nuevo.component.css */\n.credit-request-container {\n  max-width: 600px;\n  margin: 0 auto;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.credit-form {\n  animation: fadeIn 0.5s ease-out;\n}\n.info-card {\n  transition: all 0.3s ease;\n}\n.info-card:hover {\n  transform: translateX(3px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\napp-sucursal-selector,\napp-programa-selector {\n  display: block;\n  width: 100%;\n}\napp-sucursal-selector::part(control),\napp-programa-selector::part(control) {\n  padding: 0.75rem 1rem;\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n  transition: border-color 0.3s ease;\n}\napp-sucursal-selector:focus-within::part(control),\napp-programa-selector:focus-within::part(control) {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 576px) {\n  .credit-request-container {\n    padding: 1.5rem;\n    border-radius: 0;\n    border: none;\n  }\n  .form-actions .btn {\n    width: 48%;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n}\n/*# sourceMappingURL=form-nuevo.component.css.map */\n"] }]
  }], () => [{ type: CreditoService }, { type: DatoPersonaFisicaService }, { type: DatoPersonaMoralService }, { type: ActivatedRoute }, { type: Router }, { type: LocalStorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientesCreditoFormNuevoComponent, { className: "ClientesCreditoFormNuevoComponent", filePath: "src/app/clientes/main/creditos/form-nuevo/form-nuevo.component.ts", lineNumber: 20 });
})();
export {
  ClientesCreditoFormNuevoComponent
};
//# sourceMappingURL=chunk-RUPB2BMQ.js.map
