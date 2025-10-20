// src/app/main/creditos/creditos.table.headers.ts
var CREDITOS_TABLE_HEADERS_BASIC = [
  "estado",
  {
    key: "row",
    header: "Cliente",
    function: (row, utils) => {
      return utils.nombreClienteFromCredito(row);
    },
    pipe: "uppercase"
  },
  {
    key: "row",
    header: "Monto",
    function: (credito, utils) => {
      return utils.totalFromCredito(credito).toString();
    },
    pipe: "currency"
  },
  {
    key: "productos_financieros",
    subKey: "alias",
    header: "P Financiero",
    pipe: "uppercase"
  },
  {
    key: "sucursales",
    subKey: "nombre",
    header: "Municipio",
    pipe: "uppercase"
  },
  {
    key: "usuarios",
    subKey: "nombre",
    header: "Creado por",
    pipe: "uppercase"
  }
];

export {
  CREDITOS_TABLE_HEADERS_BASIC
};
//# sourceMappingURL=chunk-2RGH5ZMW.js.map
