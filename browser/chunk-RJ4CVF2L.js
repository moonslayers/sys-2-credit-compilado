// src/app/main/creditos/creditos.simple.filters.ts
var CREDITOS_FILTERS = [
  {
    key: "estado",
    label: "Estado:",
    options: ["ACTIVO", "RECHAZADO", "FINALIZADO"],
    inputGroup: true
  },
  {
    label: "Sucursal:",
    apiUrl: "api/sucursales",
    keyList: "id",
    keyDetalle: "nombre",
    key: "sucursal_id",
    placeholder: "Ingresa una sucursal...",
    inputGroup: true
  }
];

export {
  CREDITOS_FILTERS
};
//# sourceMappingURL=chunk-RJ4CVF2L.js.map
