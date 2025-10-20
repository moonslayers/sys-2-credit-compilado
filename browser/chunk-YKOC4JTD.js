import "./chunk-N6ESDQJH.js";

// src/app/clientes/main/cliente-perfil/cliente-perfil.routes.ts
var CLIENTE_PERFIL_ROUTES = [
  {
    path: "",
    children: [
      {
        path: "change-pass",
        loadComponent: () => import("./chunk-U6U5DV5J.js").then((m) => m.ChangePasswordComponent)
      },
      {
        path: "datos-personales",
        loadComponent: () => import("./chunk-BE2JC7QL.js").then((m) => m.DatosPersonalesComponent)
      },
      {
        path: "datos-fiscales",
        loadComponent: () => import("./chunk-3ZCEWCSO.js").then((m) => m.DatosFiscalesComponent)
      },
      {
        path: "datos-negocio",
        loadComponent: () => import("./chunk-T4IMHEZS.js").then((m) => m.DatosNegocioComponent)
      },
      {
        path: "",
        redirectTo: "change-pass",
        pathMatch: "full"
      }
    ]
  }
];
export {
  CLIENTE_PERFIL_ROUTES
};
//# sourceMappingURL=chunk-YKOC4JTD.js.map
