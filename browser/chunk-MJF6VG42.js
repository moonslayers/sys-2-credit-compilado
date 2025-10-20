import {
  ApiServiceService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  Injectable,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/main/estado-cuenta/shared/buscador-creditos/buscado.creditos.service.ts
var _BuscadorCreditosService = class _BuscadorCreditosService {
  constructor(api, utils) {
    this.api = api;
    this.utils = utils;
    this.cache = /* @__PURE__ */ new Map();
    this.nombreCache = /* @__PURE__ */ new Map();
    this.CACHE_EXPIRATION_MS = 5 * 60 * 1e3;
  }
  autoCompleteCreditos() {
    return __async(this, arguments, function* (search = "", relations = []) {
      const cacheKey = this.generateCacheKey(search, relations);
      const now = Date.now();
      if (this.cache.has(cacheKey)) {
        const cached = this.cache.get(cacheKey);
        if (now - cached.timestamp < this.CACHE_EXPIRATION_MS) {
          return cached.data;
        }
      }
      const promise = firstValueFrom(this.api.get("api/creditos/filtros/autocomplete", {
        conditionals: JSON.stringify([
          ["deleted_at", "IS NULL", null]
        ]),
        relations: JSON.stringify(relations),
        filtro: search,
        per_page: 500,
        page: 1
      }, false)).then((response) => response.data ?? []);
      this.cache.set(cacheKey, {
        timestamp: now,
        data: promise
      });
      return promise;
    });
  }
  nombreClienteFromCreditoId(id) {
    return __async(this, null, function* () {
      if (!id)
        return;
      const data = yield this.autoCompleteCreditos(id.toString());
      if (!data.length)
        return;
      return this.utils.nombreClienteFromCredito(data[0]);
    });
  }
  obtenerCreditosPorIds(ids) {
    return __async(this, null, function* () {
      if (ids.length === 0)
        return /* @__PURE__ */ new Map();
      const uniqueIds = [...new Set(ids)];
      const idString = uniqueIds.join(",");
      const response = yield firstValueFrom(this.api.get("api/creditos/filtros/autocomplete", { ids: idString, per_page: 1e3 }));
      const nombresMap = /* @__PURE__ */ new Map();
      (response.data || []).forEach((credito) => {
        const nombre = this.utils.nombreClienteFromCredito(credito);
        nombresMap.set(credito.id, nombre);
        this.nombreCache.set(credito.id, nombre);
      });
      uniqueIds.forEach((id) => {
        if (!nombresMap.has(id)) {
          nombresMap.set(id, "Cliente no encontrado");
        }
      });
      return nombresMap;
    });
  }
  generateCacheKey(search, relations) {
    const relationsKey = relations.sort().join(",");
    return `${search.toUpperCase().trim()}|${relationsKey}`;
  }
  // Método opcional para limpiar cache manualmente
  clearCache() {
    this.cache.clear();
  }
  // Método opcional para limpiar entradas expiradas
  cleanExpiredCache() {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp > this.CACHE_EXPIRATION_MS) {
        this.cache.delete(key);
      }
    }
  }
};
_BuscadorCreditosService.\u0275fac = function BuscadorCreditosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BuscadorCreditosService)(\u0275\u0275inject(ApiServiceService), \u0275\u0275inject(UtilsService));
};
_BuscadorCreditosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BuscadorCreditosService, factory: _BuscadorCreditosService.\u0275fac, providedIn: "root" });
var BuscadorCreditosService = _BuscadorCreditosService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuscadorCreditosService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiServiceService }, { type: UtilsService }], null);
})();

export {
  BuscadorCreditosService
};
//# sourceMappingURL=chunk-MJF6VG42.js.map
