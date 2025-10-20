import {
  BuscadorCreditosService
} from "./chunk-MJF6VG42.js";
import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  CacheService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TBFW4U4H.js";
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/main/estado-cuenta/shared/buscador-creditos/autocomplete-nombre-solicitante/autocomplete-nombre-solicitante.component.ts
var _forTrack0 = ($index, $item) => $item.credito_id;
function AutocompleteNombreSolicitanteComponent_Conditional_5_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "span", 16);
    \u0275\u0275elementEnd()();
  }
}
function AutocompleteNombreSolicitanteComponent_Conditional_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13);
    \u0275\u0275text(2, " No hay coincidencias. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AutocompleteNombreSolicitanteComponent_Conditional_5_Conditional_16_Conditional_3_Template, 3, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isLoading ? 3 : -1);
  }
}
function AutocompleteNombreSolicitanteComponent_Conditional_5_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function AutocompleteNombreSolicitanteComponent_Conditional_5_For_18_Template_div_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOptionSelected(option_r4));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("hidden", option_r4.hidden);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.cliente_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.credito_id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.folio, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.nombre_cliente, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.nombre_comercial, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r4.status, " ");
  }
}
function AutocompleteNombreSolicitanteComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    \u0275\u0275text(5, " Id Cliente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7, " Id Cr\xE9dito ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275text(9, " Folio ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275text(11, " Nombre Cliente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13, " Nombre Comercial ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 9);
    \u0275\u0275text(15, " Status ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, AutocompleteNombreSolicitanteComponent_Conditional_5_Conditional_16_Template, 4, 1, "div", 11);
    \u0275\u0275repeaterCreate(17, AutocompleteNombreSolicitanteComponent_Conditional_5_For_18_Template, 13, 7, "div", 12, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275conditional(!ctx_r1.dataViewed.length ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.dataViewed);
  }
}
var _AutocompleteNombreSolicitanteComponent = class _AutocompleteNombreSolicitanteComponent {
  constructor(creditoController, elRef, utils, cache, buscador) {
    this.creditoController = creditoController;
    this.elRef = elRef;
    this.utils = utils;
    this.cache = cache;
    this.buscador = buscador;
    this.creditoIdSelected = new EventEmitter();
    this.dataSource = [];
    this.dataFiltered = [];
    this.dataViewed = [];
    this.cacheScore = /* @__PURE__ */ new Map();
    this.showAutoComplete = false;
    this.autoCompleteSize = 7;
    this.valueInput = "";
    this.isLoading = false;
    this.searchTimeout = null;
  }
  handleClick(event) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.showAutoComplete) {
      this.showAutoComplete = false;
    }
  }
  /**
   * Lifecycle hook that is called after Angular has initialized the component.
   * This method initializes the personas data, sets the filtered data, and updates the viewed data.
   */
  ngOnInit() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.setFilteredData();
      this.setDataViewed();
      this.isLoading = false;
    });
  }
  /**
   * Handles the selection of an option from the autocomplete list.
   * Emits the selected persona's ID or RFC based on the type of persona (física or moral).
   * Hides the autocomplete list after selection.
   *
   * @param option - The selected FilterOption object containing the persona's details.
   */
  onOptionSelected(option) {
    this.creditoIdSelected.emit(option.credito_id);
    this.showAutoComplete = false;
  }
  /**
   * Displays the autocomplete list.
   * This method sets the `showAutoComplete` flag to true, making the list visible.
   */
  showAutoCompleteList() {
    this.showAutoComplete = true;
  }
  /**
   * Triggers a search operation with debouncing.
   * The search is performed if:
   * - The input length is a multiple of 3 (after 1.5s delay)
   * - Force flag is true (immediately)
   * This reduces unnecessary searches and improves performance.
   */
  buscar(force = false) {
    return __async(this, null, function* () {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = null;
      }
      if (force) {
        yield this.executeSearch();
        return;
      }
      this.searchTimeout = setTimeout(() => __async(this, null, function* () {
        yield this.executeSearch();
        this.searchTimeout = null;
      }), 600);
    });
  }
  executeSearch() {
    return __async(this, null, function* () {
      yield this.initializeDataSource();
      this.setFilteredData();
      this.calculateSimilarityScores();
      this.sortFilteredDataBySimilarity();
      this.updateDataViewed();
    });
  }
  /**
   * Initializes the data source by fetching credit data from the API and mapping it to the `FilterOption2` structure.
   * This method ensures that the data is properly formatted and ready for filtering and display in the autocomplete component.
   */
  initializeDataSource() {
    return __async(this, null, function* () {
      const creditos = yield this.buscador.autoCompleteCreditos(this.valueInput, ["datosPersonaFisica.datosPersonales", "datosPersonasMorales", "datosPersonaFisica.negocios", "estadoCuenta"]);
      this.dataSource = this.mapCreditDataToFilterOptions(creditos);
    });
  }
  /**
   * Maps an array of `Credito` objects to an array of `FilterOption2` objects.
   * Each `FilterOption2` object contains the client ID, credit ID, folio, client name, status, and similarity score.
   * @param creditos - The array of `Credito` objects to map.
   * @returns An array of `FilterOption2` objects.
   */
  mapCreditDataToFilterOptions(creditos) {
    return creditos.map((credito) => this.createFilterOptionFromCredito(credito));
  }
  /**
   * Creates a `FilterOption2` object from a `Credito` object.
   * @param credito - The `Credito` object to convert.
   * @returns A `FilterOption2` object containing the relevant data.
   */
  createFilterOptionFromCredito(credito) {
    return {
      cliente_id: this.clienteIdFormCredito(credito),
      // Extract client ID from the credit
      credito_id: credito.id,
      // Use the credit ID
      folio: this.folioCredito(credito),
      // Generate the folio for the credit
      nombre_cliente: this.utils.nombreClienteFromCredito(credito),
      // Get the client name
      nombre_comercial: this.utils.nombreNegocioFromCredito(credito),
      status: credito.estado_cuenta?.credito_status ?? "CARTERA",
      // Determine the credit status
      parecido: 0
      // Initialize similarity score to 0
    };
  }
  /**
   * Generates a folio for a given credit based on its attributes.
   * If the credit already has a folio, it returns that folio.
   * Otherwise, it constructs a folio using the financial product name, the year from a relevant date,
   * and the credit ID padded with zeros.
   *
   * @param credito - The credit object for which to generate the folio.
   * @returns The generated folio as a string.
   */
  folioCredito(credito) {
    if (!credito)
      return "n/a";
    if (credito.folio) {
      return credito.folio;
    }
    const nombreProductoFinanciero = credito.productos_financieros?.nombre.split(" ");
    const a\u00F1o = this.obtenerA\u00F1oDeFechaRelevante(credito);
    const idFormateado = credito.id.toString().padStart(3, "0");
    return `${nombreProductoFinanciero?.[0]}${nombreProductoFinanciero?.[1]}${a\u00F1o.substring(2, 3)}-${idFormateado}`;
  }
  /**
   * Determines the most relevant date from the credit object to extract the year.
   * The priority is: fecha_convenio > liberado_fecha > created_at.
   *
   * @param credito - The credit object from which to extract the date.
   * @returns The year part of the most relevant date as a string.
   */
  obtenerA\u00F1oDeFechaRelevante(credito) {
    const fechaRelevante = credito.fecha_convenio ?? credito.liberado_fecha ?? credito.created_at;
    return fechaRelevante;
  }
  /**
   * Extracts the client ID from a given credit object.
   * The client ID can be from either a physical person (persona física) or a moral person (persona moral).
   * If neither is available, it defaults to 0.
   *
   * @param credito - The credit object from which to extract the client ID.
   * @returns The client ID as a number. Returns 0 if no valid client ID is found.
   */
  clienteIdFormCredito(credito) {
    const clienteIdFisico = credito.datos_persona_fisica?.datos_personales?.id;
    const clienteIdMoral = credito.datos_personas_morales?.cliente_id ?? credito.datos_personas_morales?.id;
    return clienteIdFisico ?? clienteIdMoral ?? 0;
  }
  /**
   * Calculates the similarity scores for the filtered data based on the current input value.
   * If the input value is a valid number, it calculates similarity by ID.
   * Otherwise, it calculates similarity by string comparison for both folio and client name.
   */
  calculateSimilarityScores() {
    const inputAsNumber = this.parseInputAsNumber(this.valueInput);
    if (inputAsNumber) {
      this.calculateSimilarityById(inputAsNumber);
    } else {
      this.calculateSimilarityByString();
    }
  }
  /**
   * Parses the input value as a number if it is a valid number string; otherwise, returns null.
   * @param inputValue - The input value to parse.
   * @returns The parsed number or null if the input is not a valid number.
   */
  parseInputAsNumber(inputValue) {
    const parsedNumber = Number(inputValue);
    return isNaN(parsedNumber) ? null : parsedNumber;
  }
  /**
   * Calculates the similarity scores for the filtered data based on the provided ID.
   * Sets the similarity score to 100 for rows that match the client ID or credit ID.
   * @param id - The ID to match against client and credit IDs.
   */
  calculateSimilarityById(id) {
    this.dataFiltered.forEach((row) => {
      if (row.cliente_id === id || row.credito_id === id) {
        row.parecido = 100;
      } else {
        row.parecido = 0;
      }
    });
  }
  /**
   * Calculates the similarity scores for the filtered data based on string comparison.
   * Compares the input value against both the folio and client name, using cached results if available.
   * Sets the similarity score to the higher of the two comparisons.
   */
  calculateSimilarityByString() {
    this.dataFiltered.forEach((row) => {
      const folioSimilarity = this.calculateOrRetrieveSimilarity(row.folio, this.valueInput);
      const nameSimilarity = this.calculateOrRetrieveSimilarity(row.nombre_cliente, this.valueInput);
      row.parecido = Math.max(folioSimilarity, nameSimilarity);
    });
  }
  /**
   * Calculates or retrieves the similarity score for a given string and input value.
   * Uses a cache to avoid redundant calculations.
   * @param targetString - The string to compare against the input value.
   * @param inputValue - The input value to compare against the target string.
   * @returns The similarity score between the target string and the input value.
   */
  calculateOrRetrieveSimilarity(targetString, inputValue) {
    const cacheKey = this.generateCacheKey(targetString, inputValue);
    if (this.cacheScore.has(cacheKey)) {
      return this.cacheScore.get(cacheKey);
    }
    const similarityScore = this.utils.calcularPuntuacionSimilitud(targetString.toUpperCase(), inputValue.toUpperCase());
    this.cacheScore.set(cacheKey, similarityScore);
    return similarityScore;
  }
  /**
   * Generates a unique cache key for a given name and input value.
   * @param name - The name to be compared.
   * @param inputValue - The current input value.
   * @returns A string representing the cache key.
   */
  generateCacheKey(name, inputValue) {
    return `${name}-${inputValue.toUpperCase()}`;
  }
  /**
   * Sorts the filtered data by similarity score in ascending order.
   */
  sortFilteredDataBySimilarity() {
    this.dataFiltered.sort((a, b) => b.parecido - a.parecido);
  }
  /**
   * Updates the dataViewed array to reflect the top N items from the sorted filtered data.
   */
  updateDataViewed() {
    this.setDataViewed();
  }
  /**
   * Sets the filtered data by combining personas físicas and personas morales
   * into a unified list of FilterOption objects.
   * Each object includes the name, type, and a similarity score initialized to 0.
   */
  setFilteredData() {
    this.dataFiltered = this.dataSource;
  }
  /**
   * Updates the dataViewed array to contain only the top N items from dataFiltered,
   * where N is defined by autoCompleteSize.
   */
  setDataViewed() {
    this.dataViewed = this.dataFiltered.slice(0, this.autoCompleteSize);
  }
};
_AutocompleteNombreSolicitanteComponent.\u0275fac = function AutocompleteNombreSolicitanteComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutocompleteNombreSolicitanteComponent)(\u0275\u0275directiveInject(CreditoService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(CacheService), \u0275\u0275directiveInject(BuscadorCreditosService));
};
_AutocompleteNombreSolicitanteComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AutocompleteNombreSolicitanteComponent, selectors: [["app-autocomplete-nombre-solicitante"]], hostBindings: function AutocompleteNombreSolicitanteComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("click", function AutocompleteNombreSolicitanteComponent_click_HostBindingHandler($event) {
      return ctx.handleClick($event);
    }, \u0275\u0275resolveDocument);
  }
}, outputs: { creditoIdSelected: "creditoIdSelected" }, decls: 6, vars: 2, consts: [["inputNombre", ""], [1, "form-floating"], ["type", "text", "id", "flotingSearchInput", "placeholder", "Ingresa un nombre para buscar", 1, "form-control", 3, "focus", "input", "keyup.enter", "ngModelChange", "keyup", "ngModel"], ["for", "flotingSearchInput"], [1, "container-fluid", "p-0", "position-absolute"], [1, "container-fluid", "position-relative"], [1, "container-fluid", "bg-white", "position-absoute", "top-0", "shadow", "rounded", "p-3"], [1, "row", "text-bg-primary"], [1, "col-1"], [1, "col-2"], [1, "col"], [1, "row"], [1, "row", "border-bottom", "pointer", "scale-0125", "text-uppercase", 3, "hidden"], [1, "col", "border-bottom", "p-3"], [1, "col-auto", "border-bottom", "p-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-secondary"], [1, "visually-hidden"], [1, "row", "border-bottom", "pointer", "scale-0125", "text-uppercase", 3, "click", "hidden"], [1, "col-1", "p-3"]], template: function AutocompleteNombreSolicitanteComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "input", 2, 0);
    \u0275\u0275listener("focus", function AutocompleteNombreSolicitanteComponent_Template_input_focus_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showAutoCompleteList());
    })("input", function AutocompleteNombreSolicitanteComponent_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.buscar());
    })("keyup.enter", function AutocompleteNombreSolicitanteComponent_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.buscar(true));
    });
    \u0275\u0275twoWayListener("ngModelChange", function AutocompleteNombreSolicitanteComponent_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.valueInput, $event) || (ctx.valueInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function AutocompleteNombreSolicitanteComponent_Template_input_keyup_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showAutoComplete = true);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 3);
    \u0275\u0275text(4, "Ingresa un nombre para buscar...");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, AutocompleteNombreSolicitanteComponent_Conditional_5_Template, 19, 1, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.valueInput);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.showAutoComplete ? 5 : -1);
  }
}, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
var AutocompleteNombreSolicitanteComponent = _AutocompleteNombreSolicitanteComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutocompleteNombreSolicitanteComponent, [{
    type: Component,
    args: [{ selector: "app-autocomplete-nombre-solicitante", imports: [
      FormsModule
    ], template: '<div class="form-floating">\n  <input #inputNombre type="text" class="form-control" id="flotingSearchInput"\n    placeholder="Ingresa un nombre para buscar" (focus)="showAutoCompleteList()" (input)="buscar()"\n    (keyup.enter)="buscar(true)" [(ngModel)]="valueInput" (keyup)="showAutoComplete=true">\n  <label for="flotingSearchInput">Ingresa un nombre para buscar...</label>\n</div>\n@if (showAutoComplete) {\n  <div class="container-fluid p-0 position-absolute">\n    <div class="container-fluid position-relative">\n      <div class="container-fluid bg-white position-absoute top-0 shadow rounded p-3">\n        <div class="row text-bg-primary">\n          <div class="col-1">\n            Id Cliente\n          </div>\n          <div class="col-1">\n            Id Cr\xE9dito\n          </div>\n          <div class="col-2">\n            Folio\n          </div>\n          <div class="col">\n            Nombre Cliente\n          </div>\n          <div class="col">\n            Nombre Comercial\n          </div>\n          <div class="col-2">\n            Status\n          </div>\n        </div>\n        @if (!dataViewed.length) {\n          <div class="row">\n            <div class="col border-bottom p-3">\n              No hay coincidencias.\n            </div>\n            @if (isLoading) {\n              <div class="col-auto border-bottom p-3">\n                <div class="spinner-border spinner-border-sm text-secondary" role="status">\n                  <span class="visually-hidden"></span>\n                </div>\n              </div>\n            }\n          </div>\n        }\n        @for (option of dataViewed; track option.credito_id) {\n          <div class="row border-bottom pointer scale-0125 text-uppercase"\n            [hidden]="option.hidden" (click)="onOptionSelected(option)">\n            <div class="col-1 p-3">\n              {{option.cliente_id}}\n            </div>\n            <div class="col-1">\n              {{option.credito_id}}\n            </div>\n            <div class="col-2">\n              {{option.folio}}\n            </div>\n            <div class="col">\n              {{option.nombre_cliente}}\n            </div>\n            <div class="col">\n              {{option.nombre_comercial}}\n            </div>\n            <div class="col-2">\n              {{option.status}}\n            </div>\n          </div>\n        }\n      </div>\n    </div>\n  </div>\n}' }]
  }], () => [{ type: CreditoService }, { type: ElementRef }, { type: UtilsService }, { type: CacheService }, { type: BuscadorCreditosService }], { creditoIdSelected: [{
    type: Output
  }], handleClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AutocompleteNombreSolicitanteComponent, { className: "AutocompleteNombreSolicitanteComponent", filePath: "src/app/main/estado-cuenta/shared/buscador-creditos/autocomplete-nombre-solicitante/autocomplete-nombre-solicitante.component.ts", lineNumber: 29 });
})();

// src/app/main/estado-cuenta/shared/buscador-creditos/buscador-creditos.component.ts
var _c0 = ["*"];
function BuscadorCreditosComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "div", 6)(3, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function BuscadorCreditosComponent_Conditional_2_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function BuscadorCreditosComponent_Conditional_2_Template_input_keyup_enter_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 8);
    \u0275\u0275text(5, "Ingresa una ID de cr\xE9dito...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 9);
    \u0275\u0275listener("click", function BuscadorCreditosComponent_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNombreBuscador = !ctx_r1.showNombreBuscador);
    });
    \u0275\u0275element(7, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 9);
    \u0275\u0275listener("click", function BuscadorCreditosComponent_Conditional_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275element(9, "i", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.showNombreBuscador ? ctx_r1.divClass : "col-12");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.search);
  }
}
function BuscadorCreditosComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 12);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd()();
  }
}
var _BuscadorCreditosComponent = class _BuscadorCreditosComponent {
  constructor(utils, creditoController) {
    this.utils = utils;
    this.creditoController = creditoController;
    this.divClass = "col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3";
    this.creditoChange = new EventEmitter();
    this.creditoId = 0;
    this.creditoIdChange = new EventEmitter();
    this.useIdsearchInput = true;
    this.fetchData = true;
    this.creditoIdSelected = 0;
    this.creditos = [];
    this.filtros = ["Nombre Cliente", "Id de Cr\xE9dito", "Referencia Bancaria", "Nombre Comercial"];
    this.conditionals = [];
    this.conditionalsChange = new EventEmitter();
    this.conditionalsBase = void 0;
    this.extraData = {};
    this.extraDataChange = new EventEmitter();
    this.extraDataBase = void 0;
    this.justId = false;
    this.filtroSelected = "Id de Cr\xE9dito";
    this.search = "";
    this.showNombreBuscador = true;
    this.relations = [
      "datosPersonaFisica.datosPersonales",
      "estadoCuenta",
      "datosPersonasMorales"
    ];
  }
  ngOnChanges(changes) {
    if (changes["creditoId"] && this.creditoId) {
      this.search = "";
      if (this.creditoId) {
        this.search = this.creditoId.toString();
      }
    }
    if (changes["credito"] && this.credito) {
      if (this.creditos.length == 0) {
        this.creditos = [this.credito];
      }
      this.creditoIdSelected = this.credito.id;
      this.search = this.credito.id.toString();
    }
    if (changes["extraData"] && !this.extraDataBase) {
      this.extraDataBase = this.extraData;
    }
    if (changes["conditionals"] && !this.conditionalsBase) {
      this.conditionalsBase = [...this.conditionals];
    }
  }
  /**
   * Obtiene los datos de los créditos desde el servidor basados en los filtros aplicados.
   *
   * Este método realiza una llamada asíncrona al servicio de créditos para obtener los datos
   * filtrados. Si se obtienen resultados, se establece el último crédito de la lista como
   * el crédito seleccionado.
   */
  fetchCreditData() {
    return __async(this, null, function* () {
      if (!this.fetchData)
        return;
      const response = yield this.creditoController.get(this.conditionals, void 0, this.relations, this.extraData);
      this.creditos = response.data ?? [];
      if (this.creditos.length = 1) {
        this.setCredito(this.creditos[this.creditos.length - 1]);
      } else {
        this.credito = void 0;
      }
    });
  }
  onCreditoSeleccionado(id) {
    this.creditoId = id;
    this.search = id.toString();
    this.onSearch();
  }
  excluirCreditosNoLiberados() {
    this.conditionals.push({
      key: "liberado_fecha",
      operator: "IS NOT NULL",
      value: null
    });
  }
  /**
   * Realiza una búsqueda de créditos basada en los filtros seleccionados y el término de búsqueda.
   *
   * Este método verifica si hay un término de búsqueda y un filtro seleccionado antes de aplicar
   * los filtros y obtener los datos correspondientes. Si no se cumplen estas condiciones,
   * la búsqueda no se realiza.
   */
  onSearch() {
    if (!this.search) {
      this.conditionals = [...this.conditionalsBase ?? []];
      this.extraData = __spreadValues({}, this.extraDataBase);
      this.conditionalsChange.emit(this.conditionals);
      this.extraDataChange.emit(this.extraData);
      return;
    }
    if (this.justId) {
      if (this.creditoId) {
        this.creditoIdChange.emit(this.creditoId);
      }
      if (this.utils.intOrNull(this.search)) {
        this.creditoIdChange.emit(this.utils.intOrNull(this.search));
      }
      return;
    }
    this.applyFilters();
    this.fetchCreditData();
  }
  /**
  * Establece el crédito seleccionado y parsea el estado de cuenta si está disponible.
  *
  * Este método asigna el crédito proporcionado a la propiedad `credito` del componente.
  * Si el crédito tiene un estado de cuenta, lo parsea de JSON a un objeto JavaScript.
  *
  * @param credito - El crédito que se va a establecer. Es opcional y puede ser `undefined`.
  */
  setCredito(credito) {
    return __async(this, null, function* () {
      if (this.justId) {
        this.creditoIdChange.emit(this.creditoId);
        return;
      }
      if (typeof credito == "string" || typeof credito == "number") {
        this.credito = this.creditos.find((row) => row.id == credito);
      }
      if (typeof credito !== "number" && credito?.id) {
        this.credito = credito;
      }
      this.creditoIdSelected = this.credito?.id ?? 0;
      this.search = this.creditoIdSelected.toString();
      this.creditoChange.emit(this.credito);
    });
  }
  /**
   * Aplica los filtros de búsqueda según la opción seleccionada por el usuario.
   * Este método determina qué tipo de filtro aplicar basado en la selección del usuario
   * y ejecuta la lógica correspondiente para cada caso.
   */
  applyFilters() {
    this.conditionals = [...this.conditionalsBase ?? []];
    this.extraData = __spreadValues({}, this.extraDataBase);
    switch (this.filtroSelected) {
      case "Nombre Cliente":
        this.filtrarPorNombreCompleto();
        break;
      case "Id de Cr\xE9dito":
        this.aplicarFiltroPorIdCredito();
        break;
      case "Referencia Bancaria":
        this.aplicarFiltroPorReferenciaBancaria();
        break;
      case "Nombre Comercial":
        this.filtrarPorNombreComercial();
        break;
      default:
        console.warn(`Filtro no reconocido: ${this.filtroSelected}`);
        break;
    }
    this.conditionalsChange.emit(this.conditionals);
    this.extraDataChange.emit(this.extraData);
  }
  /**
   * Aplica un filtro para buscar créditos por su ID.
   * Este método configura un filtro condicional que busca coincidencias exactas
   * en el campo 'id' del crédito.
   */
  aplicarFiltroPorIdCredito() {
    this.conditionals = [{
      key: "id",
      operator: "=",
      value: this.search
    }];
  }
  /**
   * Aplica un filtro para buscar créditos por su referencia bancaria.
   * Este método configura un filtro condicional que busca coincidencias parciales
   * en el campo 'referencia_bancaria' del crédito.
   */
  aplicarFiltroPorReferenciaBancaria() {
    this.conditionals = [{
      key: "referencia_bancaria",
      operator: "LIKE",
      value: this.search
    }];
  }
  /**
   * Filtra los créditos por el nombre comercial del cliente.
   * Este método busca coincidencias en los nombres comerciales de los negocios asociados
   * tanto a personas físicas como a personas morales.
   */
  filtrarPorNombreComercial() {
    const filtrosAvanzados = [
      this.crearFiltroNegocioPersonaFisica(),
      this.crearFiltroNegocioPersonaMoral()
    ];
    this.extraData.busqueda_avanzada = JSON.stringify(filtrosAvanzados);
  }
  /**
   * Crea un filtro avanzado para buscar en los negocios asociados a una persona física.
   * @returns Un objeto AdvancedSearchFilter configurado para buscar en los negocios de una persona física.
   */
  crearFiltroNegocioPersonaFisica() {
    return {
      relation: "datosPersonaFisica.negocios",
      conditionals: [],
      opWhere: true,
      andConditionals: [
        ["nombre", "LIKE", this.search]
      ]
    };
  }
  /**
   * Crea un filtro avanzado para buscar en los negocios asociados a una persona moral.
   * @returns Un objeto AdvancedSearchFilter configurado para buscar en los negocios de una persona moral.
   */
  crearFiltroNegocioPersonaMoral() {
    return {
      relation: "datosPersonasMorales.negocios",
      conditionals: [],
      opWhere: true,
      andConditionals: [
        ["nombre_comercial", "LIKE", this.search]
      ]
    };
  }
  /**
   * Filtra los créditos por el nombre completo del cliente.
   * Divide el texto de búsqueda en partes para buscar coincidencias en los nombres, apellidos y razón social.
   */
  filtrarPorNombreCompleto() {
    const nombresYapellidos = this.search.split(" ");
    const filtrosAvanzados = [];
    if (nombresYapellidos.length === 3) {
      filtrosAvanzados.push(this.crearFiltroPersonaFisica(nombresYapellidos[0], nombresYapellidos[1], nombresYapellidos[2]), this.crearFiltroRepresentanteLegal(nombresYapellidos[0], nombresYapellidos[1], nombresYapellidos[2]), this.crearFiltroRazonSocial(nombresYapellidos[0]));
    } else if (nombresYapellidos.length == 4) {
      filtrosAvanzados.push(this.crearFiltroPersonaFisica(nombresYapellidos[0], nombresYapellidos[2], nombresYapellidos[3]), this.crearFiltroRepresentanteLegal(nombresYapellidos[0], nombresYapellidos[2], nombresYapellidos[3]), this.crearFiltroRazonSocial(nombresYapellidos[0]));
    }
    this.extraData.busqueda_avanzada = JSON.stringify(filtrosAvanzados);
  }
  /**
   * Crea un filtro avanzado para buscar en los datos de una persona física.
   * @param nombre - El nombre de la persona.
   * @param apellidoPaterno - El apellido paterno de la persona.
   * @param apellidoMaterno - El apellido materno de la persona.
   * @returns Un objeto AdvancedSearchFilter configurado para buscar en los datos de una persona física.
   */
  crearFiltroPersonaFisica(nombre, apellidoPaterno, apellidoMaterno) {
    return {
      relation: "datosPersonaFisica.datosPersonales",
      conditionals: [],
      opWhere: true,
      andConditionals: [
        ["nombre", "LIKE", nombre],
        ["apellido_paterno", "LIKE", apellidoPaterno],
        ["apellido_materno", "LIKE", apellidoMaterno]
      ]
    };
  }
  /**
   * Crea un filtro avanzado para buscar en los datos del representante legal de una persona moral.
   * @param nombre - El nombre del representante legal.
   * @param apellidoPaterno - El apellido paterno del representante legal.
   * @param apellidoMaterno - El apellido materno del representante legal.
   * @returns Un objeto AdvancedSearchFilter configurado para buscar en los datos del representante legal.
   */
  crearFiltroRepresentanteLegal(nombre, apellidoPaterno, apellidoMaterno) {
    return {
      relation: "datosPersonasMorales.representanteLegal",
      conditionals: [],
      opWhere: true,
      andConditionals: [
        ["nombre", "LIKE", nombre],
        ["apellido_paterno", "LIKE", apellidoPaterno],
        ["apellido_materno", "LIKE", apellidoMaterno]
      ]
    };
  }
  /**
   * Crea un filtro avanzado para buscar en la razón social de una persona moral.
   * @param razonSocial - La razón social a buscar.
   * @returns Un objeto AdvancedSearchFilter configurado para buscar en la razón social.
   */
  crearFiltroRazonSocial(razonSocial) {
    return {
      relation: "datosPersonasMorales",
      conditionals: [],
      opWhere: true,
      andConditionals: [
        ["razon_social", "LIKE", razonSocial]
      ]
    };
  }
};
_BuscadorCreditosComponent.\u0275fac = function BuscadorCreditosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuscadorCreditosComponent)(\u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(CreditoService));
};
_BuscadorCreditosComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BuscadorCreditosComponent, selectors: [["app-buscador-creditos"]], inputs: { divClass: "divClass", credito: "credito", creditoId: "creditoId", useIdsearchInput: "useIdsearchInput", fetchData: "fetchData", conditionals: "conditionals", conditionalsBase: "conditionalsBase", extraData: "extraData", extraDataBase: "extraDataBase", justId: "justId", relations: "relations" }, outputs: { creditoChange: "creditoChange", creditoIdChange: "creditoIdChange", conditionalsChange: "conditionalsChange", extraDataChange: "extraDataChange" }, features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 6, vars: 3, consts: [[1, "container-fluid", "z-6"], [1, "row"], [3, "class"], [1, "col-12", "col-sm", "z-3", 3, "hidden"], [3, "creditoIdSelected"], [1, "input-group"], [1, "form-floating"], ["type", "text", "id", "searchInput", "placeholder", "Ingresa un ID de cr\xE9dito...", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["for", "searchInput"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-person"], [1, "bi", "bi-search"], [1, "col-auto", "ms-auto"]], template: function BuscadorCreditosComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, BuscadorCreditosComponent_Conditional_2_Template, 10, 3, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "app-autocomplete-nombre-solicitante", 4);
    \u0275\u0275listener("creditoIdSelected", function BuscadorCreditosComponent_Template_app_autocomplete_nombre_solicitante_creditoIdSelected_4_listener($event) {
      return ctx.onCreditoSeleccionado($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(5, BuscadorCreditosComponent_Conditional_5_Template, 3, 0, "div", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.useIdsearchInput ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("hidden", !ctx.showNombreBuscador);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.credito ? 5 : -1);
  }
}, dependencies: [
  AutocompleteNombreSolicitanteComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], encapsulation: 2 });
var BuscadorCreditosComponent = _BuscadorCreditosComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuscadorCreditosComponent, [{
    type: Component,
    args: [{ selector: "app-buscador-creditos", imports: [
      AutocompleteNombreSolicitanteComponent,
      FormsModule
    ], template: `<div class="container-fluid z-6">
  <div class="row">
    @if (useIdsearchInput) {
    <div [class]="showNombreBuscador? divClass : 'col-12'">
      <div class="input-group">
        <div class="form-floating">
          <input type="text" id="searchInput" class="form-control" placeholder="Ingresa un ID de cr\xE9dito..."
            [(ngModel)]="search" (keyup.enter)="onSearch()">
          <label for="searchInput">Ingresa una ID de cr\xE9dito...</label>
        </div>
        <button class="btn btn-outline-secondary" (click)="showNombreBuscador=!showNombreBuscador"><i
            class="bi bi-person"></i></button>
        <button class="btn btn-outline-secondary" (click)="onSearch()"><i class="bi bi-search"></i></button>
      </div>
    </div>
    }
    <div class="col-12 col-sm z-3" [hidden]="!showNombreBuscador">
      <app-autocomplete-nombre-solicitante (creditoIdSelected)="onCreditoSeleccionado($event)" />
    </div>
  </div>
  @if (credito) {
  <div class="row">
    <div class="col-auto ms-auto">
      <ng-content></ng-content>
    </div>
  </div>
  }
</div>` }]
  }], () => [{ type: UtilsService }, { type: CreditoService }], { divClass: [{
    type: Input
  }], credito: [{
    type: Input
  }], creditoChange: [{
    type: Output
  }], creditoId: [{
    type: Input
  }], creditoIdChange: [{
    type: Output
  }], useIdsearchInput: [{
    type: Input
  }], fetchData: [{
    type: Input
  }], conditionals: [{
    type: Input
  }], conditionalsChange: [{
    type: Output
  }], conditionalsBase: [{
    type: Input
  }], extraData: [{
    type: Input
  }], extraDataChange: [{
    type: Output
  }], extraDataBase: [{
    type: Input
  }], justId: [{
    type: Input
  }], relations: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BuscadorCreditosComponent, { className: "BuscadorCreditosComponent", filePath: "src/app/main/estado-cuenta/shared/buscador-creditos/buscador-creditos.component.ts", lineNumber: 21 });
})();

export {
  BuscadorCreditosComponent
};
//# sourceMappingURL=chunk-5AHBH7ZX.js.map
