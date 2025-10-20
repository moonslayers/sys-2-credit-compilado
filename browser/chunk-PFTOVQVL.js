import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  HeaderPdfService,
  require_customParseFormat
} from "./chunk-K6WRKREK.js";
import {
  require_dayjs_min
} from "./chunk-NWCMIO4X.js";
import {
  UtilsService as UtilsService2,
  require_pdfmake,
  require_vfs_fonts
} from "./chunk-MLBICDWK.js";
import {
  ApiServiceService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/services/documentosLegales/contratos/contrato_credito_pfae.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
pdfMake.addVirtualFileSystem(pdfFonts);
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.locale("es");
var _ContratoCreditoPFAEService = class _ContratoCreditoPFAEService {
  constructor(creditoController, util, headers, utils2) {
    this.creditoController = creditoController;
    this.util = util;
    this.headers = headers;
    this.utils2 = utils2;
    this.style = {
      tableHead: {
        margin: [0, 5, 0, 15]
      },
      cabeceraText: {
        fontSize: 12,
        bold: true,
        color: "#000000"
        // margin: [10, 0, 0, 0],
      },
      headerOrange: {
        fontSize: 12,
        bold: true,
        color: "#df8718"
        // margin: [10, 0, 0, 0],
      },
      headerDireccion: {
        fontSize: 10,
        color: "#000000"
      },
      headerFolio: {
        fontSize: 14,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff",
        alignment: "center"
      },
      textFolio: {
        fontSize: 14,
        bold: true,
        alignment: "center"
      },
      header: {
        fontSize: 12,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff"
      },
      firma: {
        fontSize: 14,
        alignment: "center"
      },
      th: {
        fontSize: 10,
        bold: true,
        alignment: "center",
        fillColor: "#2f4a8d",
        color: "white"
      },
      te: {
        fontSize: 9
      },
      footer: {
        fontSize: 9,
        bold: true,
        color: "#2f4a8d"
      }
    };
  }
  getSubgruposString(resumenActividadEmpresarial) {
    if (!Array.isArray(resumenActividadEmpresarial))
      return "";
    return resumenActividadEmpresarial.map((item) => {
      const subgrupo = item.actividades_economicas?.subgrupo;
      console.log("Found subgrupo:", subgrupo);
      return subgrupo;
    }).filter((subgrupo) => typeof subgrupo === "string" && subgrupo.trim() !== "").join(", ");
  }
  contratoCredito(credito, fechaConvenio = void 0) {
    return __async(this, null, function* () {
      let creditoId = 0;
      if (typeof credito == "object") {
        creditoId = credito.id;
      }
      const creditoData = yield this.creditoController.find(creditoId, [
        "datosPersonaFisica.negocios.ciudades",
        "datosPersonales.telefonosPersonales",
        "datosPersonaFisica.datosPersonales",
        "datosPersonaFisica.negocios.negociosActividadesEconomicas.actividadesEconomicas",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonales.ciudades",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "sesiones",
        "productosFinancieros.plazos"
      ]);
      if (!creditoData) {
        console.error("credito no encontrado");
        return;
      }
      if (!fechaConvenio) {
        fechaConvenio = (/* @__PURE__ */ new Date()).toISOString();
      }
      const fecha_convenio = this.util.fechaAletras(fechaConvenio);
      const persona_fisica = creditoData.datos_persona_fisica;
      const negocio = persona_fisica.negocios;
      const datos_personales = persona_fisica.datos_personales;
      const aval = creditoData.datos_personales;
      const programa_inversion = creditoData.inversiones_programas;
      const sesion = creditoData.sesiones;
      const producto_financiero = creditoData.productos_financieros;
      const plazo_solicitado = producto_financiero.plazos?.find((plazo) => plazo.plazo_meses == programa_inversion.plazo_solicitado_meses);
      console.log(credito);
      const telefonosCasa = this.util.getTelefonosCasa(creditoData.datos_persona_fisica?.datos_personales?.telefonos_personales ?? []);
      const telefonosOficina = this.util.getTelefonosOficina(creditoData.datos_persona_fisica?.datos_personales?.telefonos_personales ?? []);
      const telefonosCelular = this.util.getTelefonosCelular(creditoData.datos_persona_fisica?.datos_personales?.telefonos_personales ?? []);
      const telefono = creditoData.datos_persona_fisica?.datos_personales?.telefonos_personales?.filter((t) => t.numero).map((t) => t.numero).join(" ") || "N/A";
      const utcDate = /* @__PURE__ */ new Date();
      const date = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1e3);
      const monto_transferencia = creditoData.monto_autorizado * (1 - 0.015) - creditoData.monto_autorizado * 0.015 * 0.16;
      console.log(monto_transferencia);
      const centavos_transferencia = this.util.obtenerCentavosRedondeados(monto_transferencia);
      const centavos_monto_autorizado = this.util.obtenerCentavosRedondeados(creditoData.monto_autorizado ?? 0);
      let footer = "ROEE-2025";
      const programaList = producto_financiero.nombre.split(" ") ?? [];
      if (programaList.length >= 2) {
        footer = `RO${programaList[0].substring(0, 1)}${programaList[1].substring(0, 1)}-2025`.toUpperCase();
      }
      const VARIABLE = "";
      const subgrupos = (negocio.negocios_actividades_economicas ?? []).map((item) => item.actividades_economicas?.subgrupo).join(", ");
      console.log(subgrupos);
      console.log(subgrupos);
      const result = this.getSubgruposString(negocio.resumen_actividad_empresarial);
      console.log(result);
      console.log(negocio.negocios_actividades_economicas);
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [80, 65, 80, 50],
        content: [
          {
            text: [{ text: "CONTRATO DE CR\xC9DITO", bold: true }],
            style: "header1"
          },
          {
            text: [
              {
                text: "PROGRAMA ESTATAL DE FINANCIAMIENTO AL SECTOR PRODUCTIVO",
                bold: true
              }
            ],
            style: "header1"
          },
          {
            text: [
              {
                text: `\u201C${producto_financiero.nombre.toUpperCase().replace("PFAE", "PERSONA F\xCDSICA")}\u201D`,
                bold: true
              }
            ],
            style: "header1"
          },
          {
            text: [{ text: "PERSONAS F\xCDSICAS.", bold: true }],
            style: "header1"
          },
          "\n",
          {
            text: [
              "Contrato de Cr\xE9dito Simple que celebran por una primera parte ",
              {
                text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" ',
                bold: true
              },
              "el ",
              { text: "ACREDITANTE", bold: true },
              ", en su car\xE1cter de ",
              { text: "FIDUCIARIO ", bold: true },
              "del ",
              {
                text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California \u201CFONDOS BC\u201D ",
                bold: true
              },
              "en lo sucesivo se le denomina el ",
              { text: "FIDEICOMISO", bold: true },
              ", representado en este acto por el ",
              { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", bold: true },
              ", en su car\xE1cter de ",
              { text: "APODERADO LEGAL", bold: true },
              "; y por una segunda parte, ",
              {
                text: `${this.utils2.nombreClienteFromDatosPersonales(datos_personales).toUpperCase()}`,
                bold: true
              },
              ", en lo sucesivo el ",
              { text: "ACREDITADO", bold: true },
              ", y ",
              {
                text: `${this.utils2.nombreClienteFromDatosPersonales(aval).toUpperCase()}`,
                bold: true
              },
              " en su car\xE1cter de ",
              { text: "AVAL", bold: true },
              ". Sujet\xE1ndose las partes al tenor de las siguientes declaraciones y cl\xE1usulas:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          { text: "D E C L A R A C I O N E S:", bold: true, style: "header1" },
          "\n",
          {
            text: [
              "I. El ",
              { text: "ACREDITANTE", bold: true },
              ", HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, \xFAnica y exclusivamente en su car\xE1cter de FIDUCIARIO del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta), por conducto de su apoderado legal, declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: "I.I. Que es una Instituci\xF3n de Cr\xE9dito Filial, constituida conforme a la legislaci\xF3n mexicana y que est\xE1 debidamente autorizada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico para actuar como Instituci\xF3n de Banca M\xFAltiple.",
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: "I.II. Que es una Sociedad establecida conforme a la Ley de Instituciones de Cr\xE9dito, autorizada para llevar a cabo operaciones fiduciarias, mandatos y comisiones, de conformidad con lo dispuesto por el art\xEDculo 46, fracci\xF3n XV de la Ley de Instituciones de Cr\xE9dito; constituida debidamente en t\xE9rminos de la escritura p\xFAblica de diez de noviembre de mil novecientos noventa y cinco, otorgada bajo n\xFAmero 264186, del protocolo del notario p\xFAblico n\xFAmero 207 de la ciudad de M\xE9xico, Distrito Federal.",
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "I.III. Que ha otorgado poder general para actos de administraci\xF3n, as\xED como para pleitos y cobranzas, en favor del ",
              { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", bold: true },
              ", seg\xFAn consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: "I.IV. Que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual.",
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "I.V. Que los recursos monetarios de que dispone para otorgar el cr\xE9dito que se formaliza mediante el presente contrato, provienen del Poder Ejecutivo de Baja California por conducto del ",
              { text: "FIDEICOMISO", bold: true },
              "."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: "I.VI. Que en t\xE9rminos del art\xEDculo 65 de la Ley de Instituciones de Cr\xE9dito, estimo la situaci\xF3n econ\xF3mica del acreditado y su calificaci\xF3n administrativa y moral en funci\xF3n de la informaci\xF3n y documentos proporcionados por este.",
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "I.VII. Declara el ",
              { text: "ACREDITANTE", bold: true },
              " que en ",
              { text: `${sesion?.sesion ?? "N/A"} `.toUpperCase(), bold: true },
              "de fecha ",
              { text: `${this.util.fechaAletras(sesion?.fecha)} `, bold: true },
              "los miembros del Comit\xE9 T\xE9cnico y de Distribuci\xF3n de fondos autorizaron el cr\xE9dito a favor del ",
              { text: "ACREDITADO", bold: true },
              ", de acuerdo a la solicitud de cr\xE9dito y/o al resumen ejecutivo y/o proyecto de inversi\xF3n, e instruyendo la celebraci\xF3n del presente contrato, en apego a las Reglas de Operaci\xF3n vigentes del programa ",
              {
                text: `\u201C${producto_financiero.nombre.toUpperCase()}\u201D`,
                bold: true
              },
              ", con base en la declaraci\xF3n y cl\xE1usulas que m\xE1s adelante se consignan."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.  Declara el ",
              { text: "ACREDITADO", bold: true },
              ", bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.I. Que es una persona f\xEDsica de nacionalidad mexicana, acredit\xE1ndolo con identificaci\xF3n oficial n\xFAmero ",
              {
                text: `${datos_personales.identificacion_numero}`.toUpperCase(),
                bold: true
              },
              ", la cual es vigente a la fecha y que se anexa al presente contrato, que cuenta con actividad econ\xF3mica formalmente constituida e inscritas en el Registro Federal de Contribuyentes, seg\xFAn consta en la Constancia de Situaci\xF3n Fiscal ",
              {
                text: `${creditoData.datos_persona_fisica?.datos_personales?.rfc}`.toUpperCase(),
                bold: true
              },
              ", con domicilio fiscal en ",
              {
                text: `${this.util.domicilioFromDatosModel2(negocio)}`,
                bold: true
              },
              "; con domicilio particular, en el cual declara que tambi\xE9n puede ser notificado, el ubicado en ",
              {
                text: `${this.util.domicilioFromDatosModel2(datos_personales)}`.toUpperCase(),
                bold: true
              },
              ", pudiendo en consecuencia entregar facturas de acuerdo a las leyes fiscales vigentes, con n\xFAmeros de tel\xE9fono ",
              { text: telefono.trim(), bold: true },
              ", y correo electr\xF3nico ",
              {
                text: creditoData.datos_persona_fisica?.datos_personales?.email,
                bold: true
              },
              " para ser requerido y notificado."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.II. Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
              { text: `${datos_personales.curp} `.toUpperCase(), bold: true },
              "."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.III. Como parte de su actividad econ\xF3mica, cuenta con un negocio denominado ",
              { text: `${negocio.nombre} `.toUpperCase(), bold: true },
              ", y su giro consiste en ",
              { text: `${subgrupos} `.toUpperCase(), bold: true },
              ", cuyo monto de inversi\xF3n y dem\xE1s caracter\xEDsticas espec\xEDficas se detallan en la solicitud de cr\xE9dito, que ser\xE1 apoyado por el ",
              { text: "ACREEDOR", bold: true },
              " mediante el patrimonio del FIDEICOMISO."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.IV. Que present\xF3 ",
              { text: "SOLICITUD DE CR\xC9DITO", bold: true },
              " ante las autoridades administrativas del FIDEICOMISO, y toda vez que dicha solicitud ha motivado el otorgamiento del cr\xE9dito objeto del presente contrato, bajo protesta de decir verdad manifiesta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.V. Que la informaci\xF3n presentada al ",
              { text: "ACREDITANTE", bold: true },
              ", para el otorgamiento de este cr\xE9dito, refleja de manera exacta y fiel su situaci\xF3n econ\xF3mica, por lo cual, no ha incurrido en alguno de los supuestos del art\xEDculo 112 de la Ley de Instituciones de Cr\xE9dito, que se refiere a las sanciones aplicables a las personas que con el prop\xF3sito de obtener cr\xE9ditos, proporcionen datos falsos a las instituciones de cr\xE9dito, manifestando que conoce el texto y alcance legal del precepto citado."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.VI. Manifiesta que previamente a la celebraci\xF3n del presente contrato el ",
              { text: "ACREDITANTE", bold: true },
              " le ha informado el contenido y alcance del mismo, los cargos, comisiones o gastos que se generen por el cr\xE9dito, que en su caso se otorgue y los descuentos o bonificaciones a los que tendr\xE1 derecho."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.VII. A la fecha de la firma de este instrumento, no tiene conocimiento de enfermedad o padecimiento alguno que pueda provocar incapacidad f\xEDsica o jur\xEDdica, por lo que no se encuentra en ninguno los supuestos que pudieran invalidar la celebraci\xF3n de este contrato."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.VIII. No ejecuta obras, ni presta servicios en forma principal o exclusiva para el Poder Ejecutivo de Baja California."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "III. Declara ",
              { text: "AVAL", bold: true },
              " bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "III.I Es una persona f\xEDsica de nacionalidad mexicana acredit\xE1ndolo con identificaci\xF3n oficial n\xFAmero ",
              {
                text: `${aval?.identificacion_numero ?? "N/A"} `.toUpperCase(),
                bold: true
              },
              ", la cual es vigente a la fecha y que se anexa al presente contrato, con domicilio ubicado en ",
              {
                text: `${this.util.domicilioFromDatosModel2(aval)} `.toUpperCase(),
                bold: true
              },
              ", pudiendo en consecuencia entregar facturas de acuerdo a las leyes fiscales vigentes, con numeros de telefono ",
              {
                text: `${this.util.numerosTelefonicosFromDatosPersonalesContrato(aval)} `.toUpperCase(),
                bold: true
              },
              " y correo electr\xF3nico ",
              { text: `${aval?.email ?? "N/A"}`, bold: true },
              ", para ser requerido y notificado."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "III.II Que es econ\xF3micamente solvente para responder de las obligaciones que deriven del presente Contrato; as\xED como que es consciente de que la informaci\xF3n presentada a las autoridades administrativas del ",
              { text: "FIDEICOMISO", bold: true },
              " con motivo de la solicitud de cr\xE9dito y la integraci\xF3n del expediente respectivo, son base y motivo para el otorgamiento del cr\xE9dito al tenor del presente Contrato, por lo que, manifiesta bajo protesta de decir verdad que est\xE1 en aptitud de cumplir oportunamente con todas y cada una de las obligaciones consignadas en el presente contrato, dado que al momento de la firma del presente instrumento no existe situaci\xF3n adversa que afecte de manera significativa su condici\xF3n financiera o sus operaciones."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "III.III Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
              { text: `${aval?.curp ?? "N/A"} `.toUpperCase(), bold: true },
              "."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "III.IV En t\xE9rminos del art\xEDculo 4\xB0 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, declara el ",
              { text: "ACREDITADO", bold: true },
              " y ",
              { text: "AVAL", bold: true },
              " que se constituyen expresamente, cada uno por s\xED como codeudores y se obligan solidariamente para responder de manera ilimitada de las obligaciones que asumen."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "IV. Declaran ",
              { text: "LAS PARTES", bold: true },
              " conjuntamente que:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "IV.I No existe vinculante entre el ",
              { text: "ACREDITANTE", bold: true },
              " y el ",
              { text: "ACREDITADO", bold: true },
              " previa la celebraci\xF3n de este contrato."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "IV.II El representante legal de ",
              { text: "HSBC M\xC9XICO", bold: true },
              ", explic\xF3 al ",
              { text: "ACREDITADO", bold: true },
              ", los t\xE9rminos y condiciones definitivos de las cl\xE1usulas financieras, as\xED como las comisiones aplicables y dem\xE1s penas convencionales contenidas en este instrumento, manifestando el ",
              { text: "ACREDITADO", bold: true },
              ", que dicha explicaci\xF3n ha sido de su entera satisfacci\xF3n."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "IV.III Que cuentan con la capacidad general para obligarse, as\xED como la suficiente para la celebraci\xF3n del presente contrato. As\xED mismo, declaran que es su voluntad celebrar el presente contrato y que para ello no media dolo, mala fe, error, lesi\xF3n ni cualquier otro vicio de la voluntad."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "Por lo anterior ",
              {
                text: "LAS PARTES",
                bold: true
              },
              " se sujetan a las siguientes:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          { text: "C L \xC1 U S U L A S:", bold: true, style: "header1" },
          "\n",
          {
            text: [
              { text: "PRIMERA.- OBJETO.- ", bold: true },
              "Por medio del presente contrato, ",
              {
                text: '"HSBC M\xC9XICO S.A., INSTITUCI\xD3N DE BANCA M\xDALTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA"',
                bold: true
              },
              " del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              ", otorga a favor de ",
              {
                text: `${this.utils2.nombreClienteFromDatosPersonales(datos_personales)}`.toUpperCase(),
                bold: true
              },
              " en su car\xE1cter de ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " un cr\xE9dito por la cantidad de ",
              {
                text: `${this.util.numeroAdinero(creditoData.monto_autorizado)}`.toUpperCase(),
                bold: true
              },
              {
                text: ` ( ${this.util.NumeroALetras(creditoData.monto_autorizado)} ${centavos_monto_autorizado.toString().padStart(2, "0")}/100 MN )`.toUpperCase(),
                bold: true
              },
              ", el cual se dio a conocer por escrito al ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " mediante la car\xE1tula de este contrato, misma que debidamente firmada de aceptaci\xF3n por el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " que forma parte integrante del presente contrato, mismo que se obliga a cubrir oportunamente la cantidad dispuesta con la periodicidad y plazos seleccionados."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              'Este cr\xE9dito para fines administrativos se identifica como cr\xE9dito n\xFAmero "',
              {
                text: `${creditoData.id}`.toUpperCase(),
                bold: true
              },
              '".'
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "SEGUNDA.- DISPOSICI\xD3N Y DESTINO DEL CR\xC9DITO.- ",
                bold: true
              },
              "El ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " otorga el cr\xE9dito al ",
              {
                text: "ACREDITADO",
                bold: true
              },
              ", con objeto de que lo utilice en capital de trabajo, infraestructura, as\xED como maquinaria y equipo, todo ello en relaci\xF3n con el fin asentado en la solicitud de cr\xE9dito y exclusivo para ser destinado en el proyecto de inversi\xF3n que motivaron la celebraci\xF3n del presente contrato."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "As\xED mismo, el acreditado podr\xE1 disponer del monto del cr\xE9dito dentro del plazo que para tal efecto le proporcione el ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " y/o las autoridades administrativas del ",
              {
                text: "FIDEICOMISO",
                bold: true
              },
              "."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              { text: "TERCERA.- PLAZO E INTERESES.- ", bold: true },
              "El cr\xE9dito deber\xE1 ser cubierto por el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " en m\xE1ximo de ",
              {
                text: `${plazo_solicitado.plazo_meses} MESES`.toUpperCase(),
                bold: true
              },
              ". As\xED mismo, el cr\xE9dito se otorga con una tasa de inter\xE9s ordinaria de 4.33% (cuatro punto treinta y tres por ciento) anual m\xE1s el 16% de I.V.A. A efecto de dar mayor claridad a las obligaciones derivadas de la presente cl\xE1usula y dem\xE1s relacionadas, a manera de ap\xE9ndice, se agrega la TABLA DE AMORTIZACI\xD3N respectiva."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              { text: "CUARTA.- COMISI\xD3N POR APERTURA.- ", bold: true },
              "La apertura del cr\xE9dito genera una comisi\xF3n \xFAnica del 1.5% (uno punto cinco por ciento) m\xE1s el 16% de I.V.A., que ser\xE1 descontada del importe del cr\xE9dito; en consecuencia, en el acto de la firma del presente acto jur\xEDdico, el ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " entrega al ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " transferencia bancaria por la cantidad de ",
              {
                text: `${this.util.numeroAdinero(monto_transferencia)}`.toUpperCase(),
                bold: true
              },
              {
                text: ` ( ${this.util.NumeroALetras(monto_transferencia)} ${centavos_transferencia === 0 ? "00" : centavos_transferencia.toString().padStart(2, "0")}/100 MN )`.toUpperCase(),
                bold: true
              },
              `, expedido a favor del `,
              {
                text: "ACREDITADO",
                bold: true
              },
              " y a cargo de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC. Por tanto, el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " lo recibe en los t\xE9rminos y condiciones del presente contrato, otorgando al ",
              {
                text: "ACREEDOR",
                bold: true
              },
              " el recibo m\xE1s amplio y firme que en derecho corresponda por la cantidad consignada en la cl\xE1usula primera."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              { text: "QUINTA.- DE LOS PAGOS.- EL ", bold: true },
              {
                text: "ACREDITADO",
                bold: true
              },
              " se obliga a efectuar los pagos mensuales a que se refiere la cl\xE1usula TERCERA, para lo cual se se\xF1ala que el lugar de pago ser\xE1 \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la Instituci\xF3n bancaria denominada ",
              {
                text: "HSBC M\xC9XICO, S.A.",
                bold: true
              },
              ", Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero ",
              {
                text: "HSBC",
                bold: true
              },
              ", mediante dep\xF3sito al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
              {
                text: `${creditoData.referencia_bancaria}`.toUpperCase(),
                bold: true
              },
              " a la cuenta bancaria de ",
              {
                text: "HSBC",
                bold: true
              },
              " No 6231216641, o mediante transferencia electr\xF3nica con la Clabe Interbancaria 021028062312166411."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, de acuerdo a su tabla de amortizaci\xF3n que se anexa para el cumplimiento de las mensualidades a plazo que deber\xE1 cubrir el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              ". En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              ", por s\xED o a trav\xE9s de las autoridades administrativas del ",
              {
                text: "FIDEICOMISO",
                bold: true
              },
              ", para establecer otros mecanismos u otro(s) lugar(es) de pago, de lo cual ser\xE1 informado el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              ". La notificaci\xF3n de los cambios o modificaciones podr\xE1n ser por escrito o mediante mensaje de correo electr\xF3nico emitido por ",
              { text: "fondosbc.cobranza@baja.gob.mx", bold: true },
              ". En caso de que la notificaci\xF3n sea realizada por correo electr\xF3nico, el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " podr\xE1 acudir, si as\xED lo desea, al domicilio del ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " a notificarse por escrito. Los pagos que el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " haga en relaci\xF3n con este contrato, s\xF3lo podr\xE1n acreditarse mediante el comprobante del dep\xF3sito bancario realizado a favor del patrimonio del ",
              {
                text: "FIDEICOMISO",
                bold: true
              },
              "."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "Una vez realizando el pago el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " deber\xE1 enviar copia del v\xE1ucher del dep\xF3sito al correo electr\xF3nico de ",
              { text: "fondosbc.cobranza@baja.gob.mx", bold: true },
              "."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "En caso de incumplir en tres o m\xE1s pagos, el ",
              {
                text: "FIDEICOMISO",
                bold: true
              },
              " lo turnar\xE1 a un Despacho de Cobranza externo para la recuperaci\xF3n de saldos correspondiente; generando gastos de cobranza y otros accesorios por motivo del incumplimiento, mismos que deber\xE1n efectuarse \xFAnica y exclusivamente mediante dep\xF3sito en la cuenta de este Fideicomiso referida en el primer p\xE1rrafo de la presente cl\xE1usula y el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " ser\xE1 boletinado en el Organismo Oficial Bur\xF3 de Cr\xE9dito y/o otras sociedades de informaci\xF3n crediticia, en t\xE9rminos de la Ley para Regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, ",
              {
                text: "CONDUSEF",
                bold: true
              },
              " y ",
              {
                text: "PROFECO",
                bold: true
              }
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "SEXTA. TASA DE INTER\xC9S MORATORIA.-",
                bold: true
              },
              " En caso de que los pagos no sean realizados oportunamente, se aplicar\xE1 una tasa de inter\xE9s moratoria del 24% (Veinticuatro por ciento) anual m\xE1s el 16% de I.V.A. El cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga verificativo el pago de dichas amortizaciones. En el entendido de que cualquier abono se aplicar\xE1 primeramente en su caso, a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "S\xC9PTIMA. VIGILANCIA.-",
                bold: true
              },
              " El ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              ", por s\xED o a trav\xE9s de las Autoridades Administrativas y/o en su caso a trav\xE9s de Despacho Externo, podr\xE1 en cualquier momento verificar el exacto cumplimiento de las obligaciones que por el presente contrato se han generado a cargo del ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " y el ",
              {
                text: "AVAL",
                bold: true
              },
              ". Ambos se obligan a cubrir los gastos que se generen por dicha supervisi\xF3n, gastos de cobranza y otros accesorios por motivo del incumplimiento."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "OCTAVA.- VIGENCIA.",
                bold: true
              },
              " El presente contrato tendr\xE1 una vigencia de ",
              {
                text: `${plazo_solicitado.plazo_meses}`.toUpperCase(),
                bold: true
              },
              " meses de acuerdo al an\xE1lisis y/o evaluaci\xF3n de la unidad dictaminadora, contados a partir de la fecha de firma del mismo y hasta cubrir la totalidad del cr\xE9dito otorgado, intereses por el diferimiento en el cobro, intereses ordinarios, impuestos, gastos, comisiones y dem\xE1s accesorios que correspondan."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "No obstante su terminaci\xF3n, este contrato producir\xE1 todos sus efectos legales hasta tanto no se hayan liquidado en su totalidad las cantidades a su cargo."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "NOVENA.- RESTRICCI\xD3N Y DENUNCIA.",
                bold: true
              },
              " En t\xE9rminos del art\xEDculo 294 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, ",
              {
                text: "HSBC M\xC9XICO",
                bold: true
              },
              " queda facultado para restringir el importe del Cr\xE9dito o el plazo en que tiene derecho al ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " a disponer de \xE9l, o ambos a la vez, o para denunciar el contrato en cualquier tiempo, debiendo notificar al ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " en cualquier medio de contacto, as\xED mismo al ",
              {
                text: "AVAL",
                bold: true
              },
              ", sin que sea necesario el cumplimiento de formalidades especiales."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "D\xC9CIMA.- CAUSALES DE RESCISI\xD3N Y VENCIMIENTO ANTICIPADO.-",
                bold: true
              },
              " El ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " podr\xE1 rescindir el presente contrato y dar por vencido anticipadamente el plazo para pagar el cr\xE9dito, as\xED como sus intereses ordinarios y moratorios generados, cuando el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " incurra en cualquiera de los siguientes casos:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "I. Sin mediar justificaci\xF3n, retraso de tres o m\xE1s meses en los pagos del cr\xE9dito, de acuerdo a los plazos y montos estipulados en la tabla de amortizaci\xF3n."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II. Falsedad o alteraci\xF3n en los documentos anexos a la solicitud de cr\xE9dito con el fin de obtener el beneficio."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "III. Utilizar el cr\xE9dito en conceptos no elegibles y/o personales."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "IV- Si el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " incumple cualquiera de las obligaciones derivadas del presente contrato y las leyes aplicables, el ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " podr\xE1 exigir anticipadamente el pago total del saldo pendiente de forma inmediata y el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " responda por los da\xF1os y perjuicios causados, as\xED como gastos judiciales en su caso."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "D\xC9CIMA PRIMERA. AVAL.-",
                bold: true
              },
              " Por virtud del presente contrato, el ",
              {
                text: "AVAL",
                bold: true
              },
              " se constituye como responsable junto con el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              ", respondiendo de manera directa, subsidiaria e ilimitada respecto de todas las obligaciones contra\xEDdas con el ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " y el patrimonio del ",
              {
                text: "FIDEICOMISO",
                bold: true
              },
              ", comprometi\xE9ndose a pagar de manera oportuna el importe total del cr\xE9dito y sus accesorios legales, en los mismos t\xE9rminos en que se encuentra obligado el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              ", de conformidad en lo dispuesto por el art\xEDculo 4 de la Ley de T\xEDtulos y Operaciones de Cr\xE9dito y art\xEDculo 1987, 1988 y 1989 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por los art\xEDculos 1862, 1863 y 1864 del C\xF3digo civil para el Estado de Baja California."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "De incumplir en 3 o m\xE1s mensualidades vencidas el ",
              {
                text: "AVAL",
                bold: true
              },
              " ser\xE1 boletinado en el Organismo Oficial Bur\xF3 de Cr\xE9dito y/o otras sociedades de informaci\xF3n crediticia, en t\xE9rminos de la Ley para Regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, ",
              {
                text: "CONDUSEF",
                bold: true
              },
              " y ",
              {
                text: "PROFECO",
                bold: true
              }
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "D\xC9CIMA SEGUNDA.-",
                bold: true
              },
              " El ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " autoriza al ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " para que, si as\xED lo desea, inscriba el presente instrumento en el Registro P\xFAblico de la Propiedad del Estado de Baja California, sin que esto sea motiv\xF3 para que el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " incumpla en las condiciones del presente instrumento."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "D\xC9CIMA TERCERA.-",
                bold: true
              },
              " El ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " y su ",
              {
                text: "AVAL",
                bold: true
              },
              " otorgar\xE1n su consentimiento expreso e irrevocable a el ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " o cualquier persona jur\xEDdica para que conjunta o separadamente consulte, informe, reporte o divulgue toda la informaci\xF3n Financiera relevante al Bur\xF3 de Cr\xE9dito a efecto de conocer su desempe\xF1o como deudor, su capacidad de pago, o para valorar el riesgo futuro de concederle un cr\xE9dito."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "D\xC9CIMA CUARTA.- PAGOS ANTICIPADOS Y PAGOS ADELANTADOS.",
                bold: true
              },
              " El ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " tendr\xE1 el derecho de efectuar pagos anticipados, ya sean totales o parciales, en cualquier momento durante la vigencia del presente contrato de cr\xE9dito. En caso de pago anticipado total, el deudor quedar\xE1 liberado de todas las obligaciones restantes bajo este contrato, siempre y cuando el pago cubra el saldo total del cr\xE9dito, incluyendo intereses por el diferimiento del cobro, intereses ordinarios, impuestos, gastos, comisiones y dem\xE1s accesorios que correspondan."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "Trat\xE1ndose de pago anticipado que liquide el saldo insoluto, incluyendo los intereses pactados, el ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " entregar\xE1 al ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " la documentaci\xF3n que resulte necesaria que lo exima de cualquier responsabilidad contra\xEDda en el presente contrato."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "Los pagos anticipados reducir\xE1n el plazo de este contrato, en virtud de que no se variar\xE1 el monto de cada una de las amortizaciones se\xF1aladas en el presente contrato. El hecho de que el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " anticipe abonos a capital, no lo exime de la obligaci\xF3n de efectuar los pagos mensuales que est\xE1 obligada a cubrir."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "D\xC9CIMA QUINTA.- CASO FORTUITO.-",
                bold: true
              },
              "El ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " se obliga al cumplimiento del presente contrato, aun en caso fortuito o fuerza mayor, en t\xE9rminos del art\xEDculo 2111 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por el art\xEDculo 1986 del C\xF3digo Civil para el Estado de Baja California."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              { text: "D\xC9CIMA SEXTA.- CASO DE DEFUNCI\xD3N", bold: true },
              " - Si falleciera el ",
              { text: "ACREDITADO ", bold: true },
              "se debe notificar al ",
              { text: "FIDEICOMISO", bold: true },
              " y entregar acta de defunci\xF3n original y copia para cotejo. En caso de cumplir con el requisito anterior, el acreditado y aval quedar\xE1n autom\xE1ticamente deslindados de toda responsabilidad contractual y se proceder\xE1 a la cancelaci\xF3n del cr\xE9dito de manera inmediata en el capital, IVA e intereses ordinarios, moratorios y cualquier otro cargo que se haya generado.",
              "\n\n"
            ],
            alignment: "justify",
            fontSize: 9
          },
          {
            text: [
              {
                text: "D\xC9CIMA S\xC9PTIMA.- NO CESI\xD3N.-",
                bold: true
              },
              "El ",
              {
                text: "ACREDITADO",
                bold: true
              },
              ", acepta que no podr\xE1 ceder o por cualquier otro medio transmitir los derechos y obligaciones que a su favor se deriven del presente contrato sin autorizaci\xF3n previa expresa del ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " de conformidad en lo dispuesto en el art\xEDculo 2051 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria en el art\xEDculo 1926 del C\xF3digo Civil para el Estado de Baja California."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "D\xC9CIMA OCTAVA.-",
                bold: true
              },
              " El ",
              {
                text: "ACREDITADO",
                bold: true
              },
              " faculta de manera expresa al ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " para ceder, descontar o negociar, ante cualquier Instituci\xF3n de Cr\xE9dito del pa\xEDs, los derechos de cr\xE9dito derivados de este contrato."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "D\xC9CIMA NOVENA.- DE LOS DOMICILIOS.",
                bold: true
              },
              " Para efectos del presente contrato, el ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              ", se\xF1ala como domicilio fiscal el ubicado en, BOULEVARD S\xC1NCHEZ TABOADA NO. 10111 ZONA URBANA R\xCDO TIJUANA EN TIJUANA BAJA CALIFORNIA, M\xC9XICO, C.P. 22010."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [],
            style: "body1",
            fontSize: 9
          },
          {
            text: [
              "Para efectos del presente contrato, el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              ", se\xF1ala como domicilio fiscal el ubicado en ",
              {
                text: `${this.util.domicilioFromDatosModel2(negocio)}`.toUpperCase(),
                bold: true
              },
              "\n\nPara efecto del presente contrato, el ",
              {
                text: "ACREDITADO",
                bold: true
              },
              ", se\xF1ala como domicilio particular el ubicado en ",
              {
                text: `${this.util.domicilioFromDatosModel2(datos_personales)}`.toUpperCase(),
                bold: true
              }
            ],
            style: "body1",
            fontSize: 9
          },
          {
            text: [
              "Para efecto del presente contrato el ",
              { text: "AVAL", bold: true },
              " se\xF1ala como domicilio particular el ubicado en ",
              {
                text: `${this.util.domicilioFromDatosModel2(aval)}`.toUpperCase(),
                bold: true
              }
            ],
            pageBreak: "before",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "VIG\xC9SIMA.- T\xCDTULO EJECUTIVO,",
                bold: true
              },
              " en t\xE9rminos del art\xEDculo 68 de la Ley de Instituciones de Cr\xE9dito, el presente contrato, junto con los estados de cuenta certificados por el contador facultado de ",
              {
                text: "HSBC M\xC9XICO",
                bold: true
              },
              ", constituyen t\xEDtulo ejecutivo, sin necesidad de reconocimiento de firma, ni de ning\xFAn otro requisito."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              {
                text: "VIG\xC9SIMA PRIMERA.- DE LA EJECUCI\xD3N.",
                bold: true
              },
              " Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente contrato a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles y quedando a potestad del ",
              {
                text: "ACREDITANTE",
                bold: true
              },
              " la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "LE\xCDDO QUE FUE EL PRESENTE CONTRATO Y ACLARADOS SUS ALCANCES Y EFECTOS, LAS PARTES LO FIRMAN DE CONFORMIDAD EN LA CIUDAD DE MEXICALI, BAJA CALIFORNIA A ",
              {
                text: `${fecha_convenio}`.toUpperCase(),
                bold: true
              }
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 300, "*"],
              body: [
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      {
                        text: "POR EL ACREEDOR",
                        bold: true,
                        fontSize: 10
                      },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2",
                    border: [false, true, false, false]
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "______________________________",
                    alignment: "center",
                    style: "headerNot2",
                    fontSize: 9
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `LIC. ALFONSO CH\xC1VEZ P\xC9REZ`,
                    alignment: "center",
                    style: "body1",
                    bold: true,
                    fontSize: 9
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `EN SU CAR\xC1CTER DE APODERADO LEGAL DE`,
                    alignment: "center",
                    style: "body1",
                    bold: true,
                    fontSize: 9
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `HSBC M\xC9XICO S.A., INSTITUCI\xD3N DE BANCA M\xDALTIPLE,`,
                    alignment: "center",
                    style: "body1",
                    bold: true,
                    fontSize: 9
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA, DEL FIDEICOMISO`,
                    alignment: "center",
                    style: "body1",
                    bold: true,
                    fontSize: 9
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ]
              ]
            }
          },
          {
            layout: "noBorders",
            table: {
              widths: ["*", "*"],
              body: [
                [
                  {
                    stack: [
                      {
                        text: "EL ACREDITADO",
                        bold: true,
                        alignment: "center",
                        margin: [0, 10, 0, 10],
                        fontSize: 10
                      },
                      {
                        canvas: [
                          {
                            type: "line",
                            x1: 0,
                            y1: 0,
                            x2: 200,
                            y2: 0,
                            lineWidth: 1,
                            lineColor: "#000000"
                          }
                        ],
                        alignment: "center",
                        margin: [0, 60, 0, 10]
                      },
                      {
                        text: this.utils2.nombreClienteFromDatosPersonales(datos_personales).toUpperCase(),
                        bold: true,
                        alignment: "center",
                        margin: [0, 0, 0, 5]
                      },
                      {
                        text: this.util.domicilioFromDatosModel2(negocio),
                        bold: true,
                        alignment: "center",
                        margin: [0, 0, 0, 5]
                      },
                      {
                        text: this.util.primerNumeroTelefonico(datos_personales),
                        bold: true,
                        alignment: "center"
                      }
                    ],
                    margin: [10, 10, 10, 10]
                  },
                  {
                    stack: [
                      {
                        text: "EL AVAL",
                        bold: true,
                        alignment: "center",
                        margin: [0, 10, 0, 10],
                        fontSize: 10
                      },
                      {
                        canvas: [
                          {
                            type: "line",
                            x1: 0,
                            y1: 0,
                            x2: 200,
                            y2: 0,
                            lineWidth: 1,
                            lineColor: "#000000"
                          }
                        ],
                        alignment: "center",
                        margin: [0, 60, 0, 10]
                      },
                      {
                        text: this.utils2.nombreClienteFromDatosPersonales2(aval).toUpperCase(),
                        bold: true,
                        alignment: "center",
                        margin: [0, 0, 0, 5]
                      },
                      {
                        text: this.util.domicilioFromDatosModel2(aval),
                        bold: true,
                        alignment: "center",
                        margin: [0, 0, 0, 5]
                      },
                      {
                        text: this.util.primerNumeroTelefonico(aval),
                        bold: true,
                        alignment: "center"
                      }
                    ],
                    margin: [10, 10, 10, 10]
                  }
                ]
              ]
            },
            fontSize: 9
          },
          {
            text: "TESTIGOS",
            bold: true,
            alignment: "center"
          },
          {
            layout: "noBorders",
            table: {
              widths: ["*", "*"],
              body: [
                [
                  {
                    stack: [
                      { text: " ", margin: [0, 40, 0, 0] },
                      {
                        canvas: [
                          {
                            type: "line",
                            x1: 0,
                            y1: 0,
                            x2: 200,
                            y2: 0,
                            lineWidth: 1,
                            lineColor: "#000000"
                          }
                        ],
                        margin: [0, 0, 0, 10],
                        alignment: "center"
                      },
                      {
                        text: "CP. ADRIANA SOFIA CORNEJO PORRAS",
                        bold: true,
                        alignment: "center"
                      },
                      {
                        text: "COORDINADORA ADMINISTRATIVA",
                        bold: true,
                        alignment: "center"
                      }
                    ],
                    margin: [10, 10, 10, 10]
                  },
                  {
                    stack: [
                      { text: " ", margin: [0, 40, 0, 0] },
                      {
                        canvas: [
                          {
                            type: "line",
                            x1: 0,
                            y1: 0,
                            x2: 200,
                            y2: 0,
                            lineWidth: 1,
                            lineColor: "#000000"
                          }
                        ],
                        margin: [0, 0, 0, 10],
                        alignment: "center"
                      },
                      {
                        text: "LIC. NORMA GABRIELA GARCIA SOLTERO",
                        bold: true,
                        alignment: "center"
                      },
                      {
                        text: "COORDINADORA DE COBRANZA",
                        bold: true,
                        alignment: "center"
                      }
                    ],
                    margin: [10, 10, 10, 10]
                  }
                ]
              ]
            },
            fontSize: 9
          }
        ],
        footer: (currentPage, pageCount) => {
          return {
            text: `ROEE 2025 - P\xE1gina ${currentPage} de ${pageCount}`,
            alignment: "right",
            margin: [0, 0, 80, 10],
            fontSize: 8
          };
        },
        styles: __spreadProps(__spreadValues({}, this.style), {
          headerCliente: {
            fontSize: 10,
            bold: true,
            color: "#000000",
            fillColor: "#A9A9A9"
          },
          headerTotal: {
            color: "#2c3e50",
            fontSize: 16,
            bold: true
          },
          headerNot4: {
            fontSize: 12,
            bold: false
          },
          bodyRemark: {
            fontSize: 10,
            decoration: "underline"
          },
          body1: {
            fontSize: 10,
            alignment: "justify",
            lineHeight: 1.2,
            bold: false
          },
          firmas: {
            fontSize: 8,
            alignment: "justify",
            bold: false
          },
          email: {
            fontSize: 9,
            alignment: "justify",
            bold: false,
            color: "#1a0dab",
            decoration: "underline"
          },
          gasto: {
            fontSize: 10,
            alignment: "justify",
            bold: false,
            color: "#FF0000"
          },
          body2: {
            fontSize: 10,
            alignment: "center",
            bold: false
          },
          header1: {
            fontSize: 12,
            alignment: "center",
            marginBottom: 5,
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
          },
          headerNot5: {
            fontSize: 12,
            bold: true
          },
          normalText: {
            fontSize: 9
          },
          subheader: {
            fontSize: 9,
            bold: true,
            alignment: "center",
            fillColor: "#eeeeee"
            // margin: [0, 15, 0, 0],
          },
          registro: {
            fontSize: 6,
            bold: false,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          registro2: {
            fontSize: 6,
            bold: false,
            alignment: "right"
            // margin: [0, 15, 0, 0],
          },
          registro4: {
            fontSize: 4,
            bold: true,
            alignment: "right"
            // margin: [0, 15, 0, 0],
          },
          registro5: {
            fontSize: 4,
            bold: false,
            alignment: "left"
            // margin: [0, 15, 0, 0],
          },
          registro6: {
            fontSize: 6,
            bold: true,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          registrov2: {
            fontSize: 8,
            bold: true,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          reg_der: {
            fontSize: 9,
            bold: false,
            alignment: "right"
          }
        })
      };
      pdfMake.createPdf(defDoc).open();
    });
  }
};
_ContratoCreditoPFAEService.\u0275fac = function ContratoCreditoPFAEService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratoCreditoPFAEService)(\u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(HeaderPdfService), \u0275\u0275inject(UtilsService));
};
_ContratoCreditoPFAEService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratoCreditoPFAEService, factory: _ContratoCreditoPFAEService.\u0275fac, providedIn: "any" });
var ContratoCreditoPFAEService = _ContratoCreditoPFAEService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoCreditoPFAEService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: CreditoService }, { type: UtilsService2 }, { type: HeaderPdfService }, { type: UtilsService }], null);
})();

// src/app/services/documentosLegales/contratos/contrato_credito_pm.service.ts
var pdfMake2 = __toESM(require_pdfmake());
var pdfFonts2 = __toESM(require_vfs_fonts());
var import_dayjs2 = __toESM(require_dayjs_min());
var import_customParseFormat2 = __toESM(require_customParseFormat());
pdfMake2.addVirtualFileSystem(pdfFonts2);
import_dayjs2.default.extend(import_customParseFormat2.default);
import_dayjs2.default.locale("es");
var _ContratoCreditoPMService = class _ContratoCreditoPMService {
  constructor(creditoController, util, headers, utils2) {
    this.creditoController = creditoController;
    this.util = util;
    this.headers = headers;
    this.utils2 = utils2;
    this.style = {
      tableHead: {
        margin: [0, 5, 0, 15]
      },
      cabeceraText: {
        fontSize: 12,
        bold: true,
        color: "#000000"
        // margin: [10, 0, 0, 0],
      },
      headerOrange: {
        fontSize: 12,
        bold: true,
        color: "#df8718"
        // margin: [10, 0, 0, 0],
      },
      headerDireccion: {
        fontSize: 10,
        color: "#000000"
      },
      headerFolio: {
        fontSize: 14,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff",
        alignment: "center"
      },
      textFolio: {
        fontSize: 14,
        bold: true,
        alignment: "center"
      },
      header: {
        fontSize: 12,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff"
      },
      firma: {
        fontSize: 14,
        alignment: "center"
      },
      th: {
        fontSize: 10,
        bold: true,
        alignment: "center",
        fillColor: "#2f4a8d",
        color: "white"
      },
      te: {
        fontSize: 9
      },
      footer: {
        fontSize: 9,
        bold: true,
        color: "#2f4a8d"
      }
    };
  }
  contratoCredito(credito, fechaConvenio = void 0) {
    return __async(this, null, function* () {
      let creditoId = 0;
      if (typeof credito == "object") {
        creditoId = credito.id;
      }
      const creditoData = yield this.creditoController.find(creditoId, [
        "datosPersonasMorales.ciudades",
        "datosPersonasMorales.telefonos",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonasMorales.representanteLegal",
        "datosPersonales.telefonosPersonales",
        "datosPersonasMorales.actaConstitutiva",
        "datosPersonasMorales.personasMoralesActividadesEconomicas.actividadesEconomicas",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonales.ciudades",
        "inversionesProgramas.inversionTipos.inversionesTiposDetalles",
        "sesiones",
        "productosFinancieros.plazos"
      ]);
      if (!creditoData) {
        console.error("credito no encontrado");
        return;
      }
      const telefonosCasa = this.util.getTelefonosCasa(creditoData.datos_personas_morales?.representante_legal?.telefonos_personales ?? []);
      const telefonosOficina = this.util.getTelefonosOficina(creditoData.datos_personas_morales?.representante_legal?.telefonos_personales ?? []);
      const telefonosCelular = this.util.getTelefonosCelular(creditoData.datos_personas_morales?.representante_legal?.telefonos_personales ?? []);
      const telefonos = [...telefonosCasa, ...telefonosOficina, ...telefonosCelular].filter((t) => t);
      const telefono = telefonos.join(", ") || "N/A";
      const telefonosCasaMoral = this.util.getTelefonosCasaMoral(creditoData.datos_personas_morales?.telefonos ?? []);
      const telefonosOficinaMoral = this.util.getTelefonosOficinaMoral(creditoData.datos_personas_morales?.telefonos ?? []);
      const telefonosCelularMoral = this.util.getTelefonosCelularMoral(creditoData.datos_personas_morales?.telefonos ?? []);
      const telefonoMoral = telefonosCasaMoral || telefonosOficinaMoral || telefonosCelularMoral || "N/A";
      const fecha_convenio = this.util.fechaAletras(fechaConvenio);
      const persona_moral = creditoData.datos_personas_morales;
      const aval = creditoData.datos_personales;
      const programa_inversion = creditoData.inversiones_programas;
      const inversiones = creditoData.inversiones_programas?.inversion_tipos.reduce((sum, tipo) => {
        return sum + tipo.inversiones_tipos_detalles.reduce((acc, item) => {
          return acc + item.monto_solicitado;
        }, 0);
      }, 0) ?? creditoData.inversiones_programas?.monto_solicitado ?? 0;
      const sesion = creditoData.sesiones;
      const producto_financiero = creditoData.productos_financieros;
      const representante_legal = creditoData.datos_personas_morales?.representante_legal;
      const acta_constitutiva = persona_moral.acta_constitutiva;
      const plazo_solicitado = producto_financiero.plazos?.find((plazo) => plazo.plazo_meses == programa_inversion.plazo_solicitado_meses);
      console.log(credito);
      const inscripcion_rppc = new Date(persona_moral.acta_constitutiva?.fecha_inscripcion_rppc);
      const escritura = new Date(persona_moral.acta_constitutiva?.fecha_escritura);
      const creacion = new Date(persona_moral.created_at);
      const datosNegocioRoute = creditoData.datos_personas_morales;
      const datosNegocio = {
        actividad: datosNegocioRoute?.personas_morales_actividades_economicas?.map((actividad) => actividad.actividades_economicas?.subgrupo ?? "N/A").join(", ").toUpperCase()
      };
      const actividades_economicas = persona_moral.personas_morales_actividades_economicas?.map((item, index) => ({
        id: String.fromCharCode(65 + index) + ")",
        // Convert index to letter (A, B, C, ...)
        desc: item.actividades_economicas?.descripcion ?? item.actividades_economicas?.subgrupo
      })).map((item) => `${item.id} ${item.desc}`).join(", ");
      const utcDate = /* @__PURE__ */ new Date();
      const date = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1e3);
      const monto_transferencia = creditoData.monto_autorizado * (1 - 0.015) - creditoData.monto_autorizado * 0.015 * 0.16;
      const centavos_transferencia = this.util.obtenerCentavosRedondeados(monto_transferencia);
      let footer = "ROEE-2025";
      const programaList = producto_financiero.nombre.split(" ") ?? [];
      if (programaList.length >= 2) {
        footer = `RO${programaList[0].substring(0, 1)}${programaList[1].substring(0, 1)}-2025`.toUpperCase();
      }
      console.log("Telefono: " + creditoData.datos_personas_morales?.telefonos?.at(0)?.numero);
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [80, 70, 80, 70],
        content: [
          {
            text: [{ text: "CONTRATO DE CR\xC9DITO", bold: true }],
            style: "header1"
          },
          {
            text: [{ text: "PROGRAMA ESTATAL DE FINANCIAMIENTO AL SECTOR PRODUCTIVO", bold: true }],
            style: "header1"
          },
          {
            text: [{ text: `\u201C${producto_financiero.nombre.toUpperCase()}\u201D`, bold: true }],
            style: "header1"
          },
          {
            text: [{ text: "PERSONAS MORALES", bold: true }],
            style: "header1"
          },
          "\n",
          "\n",
          "\n",
          {
            text: [
              "Contrato de Cr\xE9dito Simple que celebran por una primera parte ",
              { text: '"HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria" ', bold: true },
              "el ",
              { text: "ACREDITANTE", bold: true },
              ", en su car\xE1cter de ",
              { text: "FIDUCIARIO ", bold: true },
              "del ",
              { text: "Fideicomiso para el Desarrollo Econ\xF3mico de Baja California \u201CFONDOS BC\u201D ", bold: true },
              "en lo sucesivo se le denomina el ",
              { text: "FIDEICOMISO", bold: true },
              ", representado en este acto por el ",
              { text: "LIC. ALFONSO CH\xC1VEZ P\xC9REZ", bold: true },
              ", en su car\xE1cter de ",
              { text: "APODERADO LEGAL", bold: true },
              "; y por una segunda parte ",
              { text: `${creditoData?.datos_personas_morales?.razon_social.toUpperCase()}`, bold: true },
              " por conducto de su representante legal ",
              { text: `${this.utils2.nombreClienteFromDatosPersonales(creditoData?.datos_personas_morales?.representante_legal).toUpperCase()}`, bold: true },
              ", en lo sucesivo el ",
              { text: "ACREDITADO", bold: true },
              ", y ",
              { text: `${this.utils2.nombreClienteFromDatosPersonales(creditoData?.datos_personales).toUpperCase()}`, bold: true },
              " en su car\xE1cter de ",
              { text: "AVAL", bold: true },
              ". Sujet\xE1ndose las partes al tenor de las siguientes declaraciones y cl\xE1usulas:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          "\n",
          { text: "D E C L A R A C I O N E S:", bold: true, style: "header1" },
          "\n",
          {
            text: [
              "I. El ",
              { text: "ACREDITANTE", bold: true },
              ", HSBC M\xE9xico S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC, Divisi\xF3n Fiduciaria, \xFAnica y exclusivamente en su car\xE1cter de FIDUCIARIO del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta), por conducto de su apoderado legal, declara bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: "I.I. Que es una Instituci\xF3n de Cr\xE9dito Filial, constituida conforme a la legislaci\xF3n mexicana y que est\xE1 debidamente autorizada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico para actuar como Instituci\xF3n de Banca M\xFAltiple.",
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: "I.II. Que es una Sociedad establecida conforme a la Ley de Instituciones de Cr\xE9dito, autorizada para llevar a cabo operaciones fiduciarias, mandatos y comisiones, de conformidad con lo dispuesto por el art\xEDculo 46, fracci\xF3n XV de la Ley de Instituciones de Cr\xE9dito; constituida debidamente en t\xE9rminos de la escritura p\xFAblica de diez de noviembre de mil novecientos noventa y cinco, otorgada bajo n\xFAmero 264186, del protocolo del notario p\xFAblico n\xFAmero 207 de la ciudad de M\xE9xico, Distrito Federal.",
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "I.III. Que ha otorgado poder general para actos de administraci\xF3n, as\xED como para pleitos y cobranzas, en favor del ",
              { text: "Lic. Alfonso Ch\xE1vez P\xE9rez", bold: true },
              ", seg\xFAn consta en la escritura p\xFAblica del 14 de septiembre de 2023, otorgada bajo n\xFAmero 113,556 (ciento trece mil quinientos cincuenta y seis), del libro 1,970 (mil novecientos setenta) del protocolo ordinario del notario p\xFAblico 212 (doscientos doce) Lic. Francisco I. Hugues V\xE9lez de la Ciudad de M\xE9xico, poder que se encuentra vigente a la fecha."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: "I.IV. Que cuenta con facultades suficientes para obligarse en t\xE9rminos del presente acto jur\xEDdico consensual.",
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "I.V. Que los recursos monetarios de que dispone para otorgar el cr\xE9dito que se formaliza mediante el presente contrato, provienen del Poder Ejecutivo de Baja California por conducto del ",
              { text: "FIDEICOMISO", bold: true },
              "."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: "I.VI. Que en t\xE9rminos del art\xEDculo 65 de la Ley de Instituciones de Cr\xE9dito, estimo la situaci\xF3n econ\xF3mica del acreditado y su calificaci\xF3n administrativa y moral en funci\xF3n de la informaci\xF3n y documentos proporcionados por este.",
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "I.VII. Declara el ",
              { text: "ACREDITANTE", bold: true },
              " que en ",
              { text: `${sesion?.sesion ?? "N/A"} `.toUpperCase(), bold: true },
              "de fecha ",
              { text: `${this.util.fechaAletras(sesion?.fecha ?? "N/A")} `, bold: true },
              "los miembros del Comit\xE9 T\xE9cnico y de Distribuci\xF3n de fondos autorizaron el cr\xE9dito a favor del ",
              { text: "ACREDITADO", bold: true },
              ", de acuerdo a la solicitud de cr\xE9dito y/o al resumen ejecutivo y/o proyecto de inversi\xF3n, e instruyendo la celebraci\xF3n del presente contrato, en apego a las Reglas de Operaci\xF3n vigentes del programa ",
              { text: `\u201C${producto_financiero.nombre}\u201D`, bold: true },
              ", con base en la declaraci\xF3n y cl\xE1usulas que m\xE1s adelante se consignan."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.  Declara el ",
              { text: "ACREDITADO por conducto de su representante legal", bold: true },
              ", bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [
              "II.I. Que es una persona moral constituida conforme a las leyes mexicanas vigentes, acredit\xE1ndolo mediante escritura p\xFAblica de fecha ",
              { text: `${this.util.fechaAletras(acta_constitutiva?.fecha_escritura ?? "N/A")}`, bold: true },
              ", otorgada bajo n\xFAmero ",
              { text: `${acta_constitutiva?.numero_escritura ?? "N/A"}`, bold: true },
              ", volumen ",
              { text: `${acta_constitutiva?.volumen_escritura ?? "N/A"}`, bold: true },
              ", ante el protocolo del notario p\xFAblico Lic. ",
              { text: `${acta_constitutiva?.nombre_notario?.toUpperCase() ?? "N/A"}`, bold: true },
              " titular de la notar\xEDa No. ",
              { text: `${acta_constitutiva?.numero_notario ?? "N/A"}`, bold: true },
              ", de la ciudad de ",
              { text: `${acta_constitutiva?.ciudad_notario?.toUpperCase() ?? "N/A"}`, bold: true },
              ", inscrita en el Registro P\xFAblico de la Propiedad y Comercio bajo inscripci\xF3n de fecha ",
              { text: `${this.util.fechaAletras(acta_constitutiva?.fecha_inscripcion_rppc ?? "N/A")}`, bold: true },
              ", que contiene la constituci\xF3n de la sociedad denominada ",
              { text: `${persona_moral.razon_social}`.toUpperCase(), bold: true },
              " con Registro Federal de Contribuyentes ",
              { text: `${persona_moral.rfc}`.toUpperCase(), bold: true },
              " se\xF1alando como domicilio fiscal el ubicado en ",
              { text: `CALLE ${persona_moral.calle}, N\xDAMERO EXTERIOR ${persona_moral.no_exterior}, N\xDAMERO INTERIOR ${persona_moral.no_interior ?? "S/N"}, COLONIA ${persona_moral.colonia}, C\xD3DIGO POSTAL ${persona_moral.codigo_postal}, LOCALIDAD ${persona_moral.localidad}, CIUDAD ${persona_moral.ciudades?.nombre ?? "N/A"}, BAJA CALIFORNIA, `.toUpperCase(), bold: true },
              "pudiendo en consecuencia entregar facturas de acuerdo a las leyes fiscales vigentes, con n\xFAmeros de tel\xE9fono ",
              { text: telefono, bold: true },
              " y correo electr\xF3nico ",
              { text: creditoData.datos_personas_morales?.representante_legal?.email, bold: true },
              " para ser requerido y notificado."
            ],
            style: "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.II. Que su representante legal C. ",
              { "text": `${this.utils2.nombreClienteFromDatosPersonales(representante_legal)} `.toUpperCase(), "bold": true },
              ", quien acredita su personalidad con identificaci\xF3n oficial ",
              { "text": `${representante_legal?.identificacion.replace("INNE", "INE")} ${representante_legal?.identificacion_numero} `.toUpperCase(), "bold": true },
              ", vigente a la fecha y anexada al presente; que cuenta con la capacidad suficiente y se encuentra debidamente facultado para la celebraci\xF3n del presente Contrato, seg\xFAn consta en la escritura p\xFAblica n\xFAmero ",
              { text: acta_constitutiva?.numero_escritura, bold: true },
              " con fecha ",
              { "text": `${this.util.fechaAletras(acta_constitutiva?.fecha_escritura)} `.toUpperCase(), "bold": true },
              ", otorgada ante la fe del Notario P\xFAblico No. ",
              { "text": `${acta_constitutiva?.numero_notario ?? "N/A"} `.toUpperCase(), "bold": true },
              " de la ciudad ",
              { "text": `${acta_constitutiva?.ciudad_notario ?? "N/A"} `.toUpperCase(), "bold": true },
              "."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.III. El representante legal manifiesta bajo protesta de decir verdad que las facultades con las que comparece a la firma del presente Contrato no le han sido revocadas ni modificadas de forma alguna."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.IV. Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
              { "text": `${representante_legal?.curp ?? "N/A"} `.toUpperCase(), "bold": true },
              "."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.V. Como parte de su actividad econ\xF3mica, cuenta con un negocio denominado ",
              { "text": `${persona_moral.nombre_comercial} `.toUpperCase(), "bold": true },
              ", y su giro consiste en ",
              { "text": `${datosNegocio.actividad} `.toUpperCase(), "bold": true },
              ", cuyo monto de inversi\xF3n y dem\xE1s caracter\xEDsticas espec\xEDficas se detallan en la solicitud de cr\xE9dito, que ser\xE1 apoyado por el ",
              { "text": "ACREEDOR", "bold": true },
              " mediante el patrimonio del FIDEICOMISO."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.VI. Que present\xF3 ",
              { "text": "SOLICITUD DE CR\xC9DITO", "bold": true },
              " ante las autoridades administrativas del FIDEICOMISO, y toda vez que dicha solicitud ha motivado el otorgamiento del cr\xE9dito objeto del presente contrato, bajo protesta de decir verdad manifiesta que toda la informaci\xF3n plasmada en dicha solicitud es ver\xEDdica."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.VII. Que la informaci\xF3n presentada al ",
              { "text": "ACREDITANTE", "bold": true },
              ", para el otorgamiento de este cr\xE9dito, refleja de manera exacta y fiel su situaci\xF3n econ\xF3mica, por lo cual, no ha incurrido en alguno de los supuestos del art\xEDculo 112 de la Ley de Instituciones de Cr\xE9dito, que se refiere a las sanciones aplicables a las personas que con el prop\xF3sito de obtener cr\xE9ditos, proporcionen datos falsos a las instituciones de cr\xE9dito, manifestando que conoce el texto y alcance legal del precepto citado."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.VIII Manifiesta que previamente a la celebraci\xF3n del presente contrato el ",
              { "text": "ACREDITANTE", "bold": true },
              " le ha informado el contenido y alcance del mismo, los cargos, comisiones o gastos que se generen por el cr\xE9dito, que en su caso se otorgue y los descuentos o bonificaciones a los que tendr\xE1 derecho."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.IX A la fecha de la firma de este instrumento, no tiene conocimiento de enfermedad o padecimiento alguno que pueda provocar incapacidad f\xEDsica o jur\xEDdica, por lo que no se encuentra en ninguno los supuestos que pudieran invalidar la celebraci\xF3n de este contrato."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II.X No ejecuta obras, ni presta servicios en forma principal o exclusiva para el Poder Ejecutivo de Baja California."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "III. Declara ",
              { "text": "AVAL", "bold": true },
              " bajo protesta de decir verdad y apercibido de las penas en que incurren quienes declaran con falsedad que:"
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "III.I Es una persona f\xEDsica de nacionalidad mexicana acredit\xE1ndolo con identificaci\xF3n oficial n\xFAmero ",
              { "text": `${aval?.identificacion_numero ?? "N/A"} `.toUpperCase(), "bold": true },
              ", la cual es vigente a la fecha y que se anexa al presente contrato, con domicilio ubicado en ",
              { "text": `${this.util.domicilioFromDatosModel2(aval)} `.toUpperCase(), "bold": true },
              ", pudiendo en consecuencia entregar facturas de acuerdo a las leyes fiscales vigentes, con numeros de telefono ",
              { "text": `${this.util.numerosTelefonicosFromDatosPersonalesContrato(aval)} `.toUpperCase(), "bold": true },
              " y correo electr\xF3nico ",
              { "text": `${aval?.email ?? "N/A"}`, "bold": true },
              ", para ser requerido y notificado."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "III.II Que es econ\xF3micamente solvente para responder de las obligaciones que deriven del presente Contrato; as\xED como que es consciente de que la informaci\xF3n presentada a las autoridades administrativas del ",
              { "text": "FIDEICOMISO", "bold": true },
              " con motivo de la solicitud de cr\xE9dito y la integraci\xF3n del expediente respectivo, son base y motivo para el otorgamiento del cr\xE9dito al tenor del presente Contrato, por lo que, manifiesta bajo protesta de decir verdad que est\xE1 en aptitud de cumplir oportunamente con todas y cada una de las obligaciones consignadas en el presente contrato, dado que al momento de la firma del presente instrumento no existe situaci\xF3n adversa que afecte de manera significativa su condici\xF3n financiera o sus operaciones."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "III.III Que cuenta con Clave \xDAnica de Registro de Poblaci\xF3n (CURP) n\xFAmero ",
              { "text": `${aval?.curp ?? "N/A"} `.toUpperCase(), "bold": true },
              "."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "III.IV En t\xE9rminos del art\xEDculo 4\xB0 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, declara el ",
              { "text": "ACREDITADO", "bold": true },
              " y ",
              { "text": "AVAL", "bold": true },
              " que se constituyen expresamente, cada uno por s\xED como codeudores y se obligan solidariamente para responder de manera ilimitada de las obligaciones que asumen."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "IV. Declaran ",
              { "text": "LAS PARTES", "bold": true },
              " conjuntamente que:"
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "IV.I No existe v\xEDnculo entre el ",
              { "text": "ACREDITANTE", "bold": true },
              " y el ",
              { "text": "ACREDITADO", "bold": true },
              " previa la celebraci\xF3n de este contrato."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "IV.II El representante legal de ",
              { "text": "HSBC M\xC9XICO", "bold": true },
              ", explic\xF3 al ",
              { "text": "ACREDITADO", "bold": true },
              ", los t\xE9rminos y condiciones definitivos de las cl\xE1usulas financieras, as\xED como las comisiones aplicables y dem\xE1s penas convencionales contenidas en este instrumento, manifestando el ",
              { "text": "ACREDITADO", "bold": true },
              ", que dicha explicaci\xF3n ha sido de su entera satisfacci\xF3n."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "IV.III Que cuentan con la capacidad general para obligarse, as\xED como la suficiente para la celebraci\xF3n del presente contrato. As\xED mismo, declaran que es su voluntad celebrar el presente contrato y que para ello no media dolo, mala fe, error, lesi\xF3n ni cualquier otro vicio de la voluntad."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "Por lo anterior ",
              {
                "text": "LAS PARTES",
                "bold": true
              },
              " se sujetan a las siguientes:"
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          { text: "C L \xC1 U S U L A S:", bold: true, style: "header1" },
          "\n",
          {
            "text": [
              { text: "PRIMERA.- OBJETO.- ", bold: true },
              "Por medio del presente contrato, ",
              {
                "text": '"HSBC M\xC9XICO S.A., INSTITUCI\xD3N DE BANCA M\xDALTIPLE, GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA"',
                "bold": true
              },
              " del Fideicomiso identificado administrativamente con el n\xFAmero F/53260 (F diagonal cincuenta y tres mil doscientos sesenta) en su car\xE1cter de ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              ", otorga a favor de ",
              {
                "text": `${persona_moral.razon_social}`.toUpperCase(),
                "bold": true
              },
              " en su car\xE1cter de ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " un cr\xE9dito por la cantidad de ",
              {
                "text": `${this.util.numeroAdinero(creditoData.monto_autorizado)}`.toUpperCase(),
                "bold": true
              },
              {
                "text": ` ( ${this.util.NumeroALetras(creditoData.monto_autorizado)} 00/100 MN )`.toUpperCase(),
                "bold": true
              },
              ", el cual se dio a conocer por escrito al ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " mediante la car\xE1tula de este contrato, misma que debidamente firmada de aceptaci\xF3n por el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " que forma parte integrante del presente contrato, mismo que se obliga a cubrir oportunamente la cantidad dispuesta con la periodicidad y plazos seleccionados."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              'Este cr\xE9dito para fines administrativos se identifica como cr\xE9dito n\xFAmero "',
              {
                "text": `${creditoData.id}`.toUpperCase(),
                "bold": true
              },
              '".'
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              { text: "SEGUNDA.- DISPOSICI\xD3N Y DESTINO DEL CR\xC9DITO.- ", bold: true },
              "El ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " otorga el cr\xE9dito al ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              ", con objeto de que lo utilice en capital de trabajo, infraestructura, as\xED como maquinaria y equipo, todo ello en relaci\xF3n con el fin asentado en la solicitud de cr\xE9dito y exclusivo para ser destinado en el proyecto de inversi\xF3n que motivaron la celebraci\xF3n del presente contrato."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "As\xED mismo, el acreditado podr\xE1 disponer del monto del cr\xE9dito dentro del plazo que para tal efecto le proporcione el ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " y/o las autoridades administrativas del ",
              {
                "text": "FIDEICOMISO",
                "bold": true
              },
              "."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              { text: "TERCERA.- PLAZO E INTERESES.- ", bold: true },
              "El cr\xE9dito deber\xE1 ser cubierto por el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " en m\xE1ximo de ",
              {
                "text": `${plazo_solicitado.plazo_meses} MESES`.toUpperCase(),
                "bold": true
              },
              ". As\xED mismo, el cr\xE9dito se otorga con una tasa de inter\xE9s ordinaria de 4.33% (cuatro punto treinta y tres por ciento) anual m\xE1s el 16% de I.V.A. A efecto de dar mayor claridad a las obligaciones derivadas de la presente cl\xE1usula y dem\xE1s relacionadas, a manera de ap\xE9ndice, se agrega la TABLA DE AMORTIZACI\xD3N respectiva."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              { text: "CUARTA.- COMISI\xD3N POR APERTURA.- ", bold: true },
              "La apertura del cr\xE9dito genera una comisi\xF3n \xFAnica del 1.5% (uno punto cinco por ciento) m\xE1s el 16% de I.V.A., que ser\xE1 descontada del importe del cr\xE9dito; en consecuencia, en el acto de la firma del presente acto jur\xEDdico, el ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " entrega al ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " transferencia bancaria por la cantidad de ",
              {
                "text": `${this.util.numeroAdinero(monto_transferencia)}`.toUpperCase(),
                "bold": true
              },
              {
                "text": ` ( ${this.util.NumeroALetras(monto_transferencia)} ${centavos_transferencia.toString().padStart(2, "0")}/100 MN )`.toUpperCase(),
                "bold": true
              },
              `, expedido a favor del `,
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " y a cargo de la instituci\xF3n bancaria denominada HSBC M\xE9xico, S.A., Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero HSBC. Por tanto, el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " lo recibe en los t\xE9rminos y condiciones del presente contrato, otorgando al ",
              {
                "text": "ACREEDOR",
                "bold": true
              },
              " el recibo m\xE1s amplio y firme que en derecho corresponda por la cantidad consignada en la cl\xE1usula primera."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              { text: "QUINTA.- DE LOS PAGOS.- El ", bold: true },
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " se obliga a efectuar los pagos mensuales a que se refiere la cl\xE1usula TERCERA, para lo cual se se\xF1ala que el lugar de pago ser\xE1 \xFAnica y exclusivamente en alguna sucursal con residencia en el pa\xEDs, de la Instituci\xF3n bancaria denominada ",
              {
                "text": "HSBC M\xC9XICO, S.A.",
                "bold": true
              },
              ", Instituci\xF3n de Banca M\xFAltiple, Grupo Financiero ",
              {
                "text": "HSBC",
                "bold": true
              },
              ", mediante dep\xF3sito al servicio No. 8727, clave de servicio Fideicomiso HBMX53260 y referencia ",
              {
                "text": `${creditoData.referencia_bancaria}`.toUpperCase(),
                "bold": true
              },
              " a la cuenta bancaria de ",
              {
                "text": "HSBC",
                "bold": true
              },
              " No 6231216641, o mediante transferencia electr\xF3nica con la Clabe Interbancaria 021028062312166411."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "Los pagos deber\xE1n realizarse en d\xEDas y horas h\xE1biles, de acuerdo a su tabla de amortizaci\xF3n que se anexa para el cumplimiento de las mensualidades a plazo que deber\xE1 cubrir el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              ". En caso de que dicho d\xEDa sea inh\xE1bil, el pago deber\xE1 efectuarse un d\xEDa antes a la fecha de t\xE9rmino del mes corriente. Queda facultado el ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              ", por s\xED o a trav\xE9s de las autoridades administrativas del ",
              {
                "text": "FIDEICOMISO",
                "bold": true
              },
              ", para establecer otros mecanismos u otro(s) lugar(es) de pago, de lo cual ser\xE1 informado el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              ". La notificaci\xF3n de los cambios o modificaciones podr\xE1n ser por escrito o mediante mensaje de correo electr\xF3nico emitido por ",
              { text: "fondosbc.cobranza@baja.gob.mx", bold: true },
              ". En caso de que la notificaci\xF3n sea realizada por correo electr\xF3nico, el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " podr\xE1 acudir, si as\xED lo desea, al domicilio del ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " a notificarse por escrito. Los pagos que el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " haga en relaci\xF3n con este contrato, s\xF3lo podr\xE1n acreditarse mediante el comprobante del dep\xF3sito bancario realizado a favor del patrimonio del ",
              {
                "text": "FIDEICOMISO",
                "bold": true
              },
              "."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "Una vez realizando el pago el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " deber\xE1 enviar copia del v\xE1ucher del dep\xF3sito al correo electr\xF3nico de ",
              { text: "fondosbc.cobranza@baja.gob.mx", bold: true },
              "."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "En caso de incumplir en tres o m\xE1s pagos, el ",
              {
                "text": "FIDEICOMISO",
                "bold": true
              },
              " lo turnar\xE1 a un Despacho de Cobranza externo para la recuperaci\xF3n de saldos correspondiente; generando gastos de cobranza y otros accesorios por motivo del incumplimiento, mismos que deber\xE1n efectuarse \xFAnica y exclusivamente mediante dep\xF3sito en la cuenta de este Fideicomiso referida en el primer p\xE1rrafo de la presente cl\xE1usula y el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " ser\xE1 boletinado en el Organismo Oficial Bur\xF3 de Cr\xE9dito y/o otras sociedades de informaci\xF3n crediticia, en t\xE9rminos de la Ley para Regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, ",
              {
                "text": "CONDUSEF",
                "bold": true
              },
              " y ",
              {
                "text": "PROFECO",
                "bold": true
              }
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "SEXTA. TASA DE INTER\xC9S MORATORIA.-",
                "bold": true
              },
              " En caso de que los pagos no sean realizados oportunamente, se aplicar\xE1 una tasa de inter\xE9s moratoria del 24% (Veinticuatro por ciento) anual m\xE1s el 16% de I.V.A. El cual deber\xE1 calcularse sobre el monto de las amortizaciones vencidas, m\xE1s sus respectivos intereses ordinarios, desde la fecha en que caiga en mora y hasta que tenga verificativo el pago de dichas amortizaciones. En el entendido de que cualquier abono se aplicar\xE1 primeramente en su caso, a gastos y honorarios legales, posteriormente a los intereses moratorios, intereses ordinarios y, si alcanza, al capital."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "S\xC9PTIMA. VIGILANCIA.-",
                "bold": true
              },
              " El ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              ", por s\xED o a trav\xE9s de las Autoridades Administrativas y/o en su caso a trav\xE9s de Despacho Externo, podr\xE1 en cualquier momento verificar el exacto cumplimiento de las obligaciones que por el presente contrato se han generado a cargo del ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " y el ",
              {
                "text": "AVAL",
                "bold": true
              },
              ". Ambos se obligan a cubrir los gastos que se generen por dicha supervisi\xF3n, gastos de cobranza y otros accesorios por motivo del incumplimiento."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "OCTAVA.- VIGENCIA.",
                "bold": true
              },
              " El presente contrato tendr\xE1 una vigencia de ",
              {
                "text": `${plazo_solicitado.plazo_meses}`.toUpperCase(),
                "bold": true
              },
              " meses de acuerdo al an\xE1lisis y/o evaluaci\xF3n de la unidad dictaminadora, contados a partir de la fecha de firma del mismo y hasta cubrir la totalidad del cr\xE9dito otorgado, intereses por el diferimiento en el cobro, intereses ordinarios, impuestos, gastos, comisiones y dem\xE1s accesorios que correspondan."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "No obstante su terminaci\xF3n, este contrato producir\xE1 todos sus efectos legales hasta tanto no se hayan liquidado en su totalidad las cantidades a su cargo."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "NOVENA.- RESTRICCI\xD3N Y DENUNCIA.",
                "bold": true
              },
              " En t\xE9rminos del art\xEDculo 294 de la Ley General de T\xEDtulos y Operaciones de Cr\xE9dito, ",
              {
                "text": "HSBC M\xC9XICO",
                "bold": true
              },
              " queda facultado para restringir el importe del Cr\xE9dito o el plazo en que tiene derecho al ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " a disponer de \xE9l, o ambos a la vez, o para denunciar el contrato en cualquier tiempo, debiendo notificar al ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " en cualquier medio de contacto, as\xED mismo al ",
              {
                "text": "AVAL",
                "bold": true
              },
              ", sin que sea necesario el cumplimiento de formalidades especiales."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA.- CAUSALES DE RESCISI\xD3N Y VENCIMIENTO ANTICIPADO.-",
                "bold": true
              },
              " El ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " podr\xE1 rescindir el presente contrato y dar por vencido anticipadamente el plazo para pagar el cr\xE9dito, as\xED como sus intereses ordinarios y moratorios generados, cuando el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " incurra en cualquiera de los siguientes casos:"
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "I. Sin mediar justificaci\xF3n, retraso de tres o m\xE1s meses en los pagos del cr\xE9dito, de acuerdo a los plazos y montos estipulados en la tabla de amortizaci\xF3n."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "II. Falsedad o alteraci\xF3n en los documentos anexos a la solicitud de cr\xE9dito con el fin de obtener el beneficio."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "III. Utilizar el cr\xE9dito en conceptos no elegibles y/o personales."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "IV- Si el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " incumple cualquiera de las obligaciones derivadas del presente contrato y las leyes aplicables, el ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " podr\xE1 exigir anticipadamente el pago total del saldo pendiente de forma inmediata y el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " responda por los da\xF1os y perjuicios causados, as\xED como gastos judiciales en su caso."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA PRIMERA. AVAL.-",
                "bold": true
              },
              " Por virtud del presente contrato, el ",
              {
                "text": "AVAL",
                "bold": true
              },
              " se constituye como responsable junto con el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              ", respondiendo de manera directa, subsidiaria e ilimitada respecto de todas las obligaciones contra\xEDdas con el ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " y el patrimonio del ",
              {
                "text": "FIDEICOMISO",
                "bold": true
              },
              ", comprometi\xE9ndose a pagar de manera oportuna el importe total del cr\xE9dito y sus accesorios legales, en los mismos t\xE9rminos en que se encuentra obligado el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              ", de conformidad en lo dispuesto por el art\xEDculo 4 de la Ley de T\xEDtulos y Operaciones de Cr\xE9dito y art\xEDculo 1987, 1988 y 1989 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por los art\xEDculos 1862, 1863 y 1864 del C\xF3digo civil para el Estado de Baja California."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "De incumplir en 3 o m\xE1s mensualidades vencidas el ",
              {
                "text": "AVAL",
                "bold": true
              },
              " ser\xE1 boletinado en el Organismo Oficial Bur\xF3 de Cr\xE9dito y/o otras sociedades de informaci\xF3n crediticia, en t\xE9rminos de la Ley para Regular a las Sociedades de Informaci\xF3n Crediticia, regulada por la Secretar\xEDa de Hacienda y Cr\xE9dito P\xFAblico, el Banco de M\xE9xico y la Comisi\xF3n Nacional Bancaria y de Valores, ",
              {
                "text": "CONDUSEF",
                "bold": true
              },
              " y ",
              {
                "text": "PROFECO",
                "bold": true
              }
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA SEGUNDA.-",
                "bold": true
              },
              " El ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " autoriza al ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " para que, si as\xED lo desea, inscriba el presente instrumento en el Registro P\xFAblico de la Propiedad del Estado de Baja California, sin que esto sea motiv\xF3 para que el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " incumpla en las condiciones del presente instrumento."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA TERCERA.-",
                "bold": true
              },
              " El ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " y su ",
              {
                "text": "AVAL",
                "bold": true
              },
              " otorgar\xE1n su consentimiento expreso e irrevocable a el ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " o cualquier persona jur\xEDdica para que conjunta o separadamente consulte, informe, reporte o divulgue toda la informaci\xF3n Financiera relevante al Bur\xF3 de Cr\xE9dito a efecto de conocer su desempe\xF1o como deudor, su capacidad de pago, o para valorar el riesgo futuro de concederle un cr\xE9dito."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA CUARTA.- PAGOS ANTICIPADOS Y PAGOS ADELANTADOS.",
                "bold": true
              },
              " El ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " tendr\xE1 el derecho de efectuar pagos anticipados, ya sean totales o parciales, en cualquier momento durante la vigencia del presente contrato de cr\xE9dito. En caso de pago anticipado total, el deudor quedar\xE1 liberado de todas las obligaciones restantes bajo este contrato, siempre y cuando el pago cubra el saldo total del cr\xE9dito, incluyendo intereses por el diferimiento del cobro, intereses ordinarios, impuestos, gastos, comisiones y dem\xE1s accesorios que correspondan."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "Trat\xE1ndose de pago anticipado que liquide el saldo insoluto, incluyendo los intereses pactados, el ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " entregar\xE1 al ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " la documentaci\xF3n que resulte necesaria que lo exima de cualquier responsabilidad contra\xEDda en el presente contrato."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "Los pagos anticipados reducir\xE1n el plazo de este contrato, en virtud de que no se variar\xE1 el monto de cada una de las amortizaciones se\xF1aladas en el presente contrato. El hecho de que el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " anticipe abonos a capital, no lo exime de la obligaci\xF3n de efectuar los pagos mensuales que est\xE1 obligada a cubrir."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA QUINTA.- CASO FORTUITO.-",
                "bold": true
              },
              "El ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " se obliga al cumplimiento del presente contrato, aun en caso fortuito o fuerza mayor, en t\xE9rminos del art\xEDculo 2111 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria por el art\xEDculo 1986 del C\xF3digo Civil para el Estado de Baja California."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA SEXTA.- NO CESI\xD3N.-",
                "bold": true
              },
              "El ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              ", acepta que no podr\xE1 ceder o por cualquier otro medio transmitir los derechos y obligaciones que a su favor se deriven del presente contrato sin autorizaci\xF3n previa expresa del ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " de conformidad en lo dispuesto en el art\xEDculo 2051 del C\xF3digo Civil para el Distrito Federal, y de manera supletoria en el art\xEDculo 1926 del C\xF3digo Civil para el Estado de Baja California."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA S\xC9PTIMA.-",
                "bold": true
              },
              " El ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              " faculta de manera expresa al ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " para ceder, descontar o negociar, ante cualquier Instituci\xF3n de Cr\xE9dito del pa\xEDs, los derechos de cr\xE9dito derivados de este contrato."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA OCTAVA.- DE LOS DOMICILIOS.",
                "bold": true
              }
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "Para efectos del presente contrato, el ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              ", se\xF1ala como domicilio fiscal el ubicado en, Bulevar S\xE1nchez Taboada No. 10111 Zona Urbana R\xEDo Tijuana en Tijuana Baja California, M\xE9xico, C.P. 22010."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              "Para efectos del presente contrato, el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              ", se\xF1ala como domicilio fiscal el ubicado en ",
              {
                "text": `${this.util.domicilioFromDatosModel2(creditoData.datos_personas_morales)}`.toUpperCase(),
                "bold": true
              },
              "\n\nPara efecto del presente contrato, el ",
              {
                "text": "ACREDITADO",
                "bold": true
              },
              ", se\xF1ala como domicilio particular el ubicado en ",
              {
                "text": `${this.util.domicilioFromDatosModel2(creditoData.datos_personas_morales?.representante_legal)}`.toUpperCase(),
                "bold": true
              },
              ".\n\nPara efecto del presente contrato el ",
              {
                "text": "AVAL",
                "bold": true
              },
              " se\xF1ala como domicilio particular el ubicado en ",
              {
                "text": `${this.util.domicilioFromDatosModel2(aval)}`.toUpperCase(),
                "bold": true
              }
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "D\xC9CIMA NOVENA.- T\xCDTULO EJECUTIVO,",
                "bold": true
              },
              " en t\xE9rminos del art\xEDculo 68 de la Ley de Instituciones de Cr\xE9dito, el presente contrato, junto con los estados de cuenta certificados por el contador facultado de ",
              {
                "text": "HSBC M\xC9XICO",
                "bold": true
              },
              ", constituyen t\xEDtulo ejecutivo, sin necesidad de reconocimiento de firma, ni de ning\xFAn otro requisito."
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            "text": [
              {
                "text": "VIG\xC9SIMA.- DE LA EJECUCI\xD3N.",
                "bold": true
              },
              " Ambas partes acuerdan someter cualquier controversia que pudiera suscitarse con motivo del presente contrato a la jurisdicci\xF3n de los Tribunales de Baja California, renunciando a cualquier otra que pudiera corresponderles y quedando a potestad del ",
              {
                "text": "ACREDITANTE",
                "bold": true
              },
              " la elecci\xF3n del partido judicial o lugar de residencia del tribunal que conozca."
            ],
            "style": "body1",
            fontSize: 9,
            pageBreak: "before"
          },
          "\n",
          {
            "text": [
              "LE\xCDDO QUE FUE EL PRESENTE CONTRATO Y ACLARADOS SUS ALCANCES Y EFECTOS, LAS PARTES LO FIRMAN DE CONFORMIDAD EN LA CIUDAD DE MEXICALI, BAJA CALIFORNIA A ",
              {
                "text": `${fecha_convenio}`.toUpperCase(),
                "bold": true
              }
            ],
            "style": "body1",
            fontSize: 9
          },
          "\n",
          {
            text: [],
            style: "body1"
          },
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 300, "*"],
              body: [
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: [
                      { text: "POR EL ACREEDOR", bold: true },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" },
                      { text: "\n" }
                    ],
                    alignment: "center",
                    style: "headerNot2",
                    border: [false, true, false, false]
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: "______________________________",
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `LIC. ALFONSO CH\xC1VEZ P\xC9REZ`,
                    alignment: "center",
                    style: "body1",
                    bold: true
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `EN SU CAR\xC1CTER DE APODERADO LEGAL DE`,
                    alignment: "center",
                    style: "body1",
                    bold: true
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `"HSBC M\xC9XICO S.A., INSTITUCI\xD3N DE BANCA M\xDALTIPLE,`,
                    alignment: "center",
                    style: "body1",
                    bold: true
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  },
                  {
                    text: `"GRUPO FINANCIERO HSBC, DIVISI\xD3N FIDUCIARIA"`,
                    alignment: "center",
                    style: "body1",
                    bold: true
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot2"
                  }
                ]
              ]
            }
          },
          {
            layout: "noBorders",
            table: {
              widths: ["*", "*"],
              body: [
                [
                  {
                    stack: [
                      { text: "EL ACREDITADO", bold: true, alignment: "center", margin: [0, 10, 0, 10], fontSize: 12 },
                      {
                        canvas: [
                          { type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }
                        ],
                        alignment: "center",
                        margin: [0, 60, 0, 10]
                      },
                      { text: this.utils2.nombreClienteFromDatosPersonales(representante_legal).toUpperCase(), bold: true, alignment: "center", margin: [0, 0, 0, 5] },
                      { text: "REPRESENTANTE LEGAL DE LA EMPRESA", bold: true, alignment: "center", margin: [0, 0, 0, 5] },
                      { text: creditoData.datos_personas_morales?.razon_social.toUpperCase(), bold: true, alignment: "center", margin: [0, 0, 0, 5] },
                      { text: this.util.domicilioFromDatosModel2(creditoData.datos_personas_morales), bold: true, alignment: "center", margin: [0, 0, 0, 5] },
                      { text: "TEL. " + (creditoData.datos_personas_morales?.telefonos?.at(0)?.numero ?? "N/A"), bold: true, alignment: "center" }
                    ],
                    margin: [10, 10, 10, 10]
                  },
                  {
                    stack: [
                      { text: "EL AVAL", bold: true, alignment: "center", margin: [0, 10, 0, 10], fontSize: 12 },
                      {
                        canvas: [
                          { type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }
                        ],
                        alignment: "center",
                        margin: [0, 60, 0, 10]
                      },
                      { text: this.utils2.nombreClienteFromDatosPersonales(aval).toUpperCase(), bold: true, alignment: "center", margin: [0, 0, 0, 5] },
                      { text: this.util.domicilioFromDatosModel2(aval), bold: true, alignment: "center", margin: [0, 0, 0, 5] },
                      { text: this.util.primerNumeroTelefonico(aval), bold: true, alignment: "center" }
                    ],
                    margin: [10, 10, 10, 10]
                  }
                ]
              ]
            },
            fontSize: 9
          },
          {
            text: "TESTIGOS",
            bold: true,
            alignment: "center"
          },
          {
            layout: "noBorders",
            table: {
              widths: ["*", "*"],
              body: [
                [
                  {
                    stack: [
                      { text: " ", margin: [0, 60, 0, 0] },
                      {
                        canvas: [
                          { type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }
                        ],
                        margin: [0, 0, 0, 10],
                        alignment: "center"
                      },
                      { text: "CP. ADRIANA SOFIA CORNEJO PORRAS", bold: true, alignment: "center" },
                      { text: "COORDINADORA DE CONTABILIDAD", bold: true, alignment: "center" }
                    ],
                    margin: [10, 10, 10, 10]
                  },
                  {
                    stack: [
                      { text: " ", margin: [0, 60, 0, 0] },
                      {
                        canvas: [
                          { type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }
                        ],
                        margin: [0, 0, 0, 10],
                        alignment: "center"
                      },
                      { text: "LIC. NORMA GABRIELA GARCIA SOLTERO", bold: true, alignment: "center" },
                      { text: "COORDINADORA DE COBRANZA", bold: true, alignment: "center" }
                    ],
                    margin: [10, 10, 10, 10]
                  }
                ]
              ]
            },
            fontSize: 9
          }
          /*
          '\n',
          '\n',
          {
            layout: 'noBorders',
            table: {
              widths: ['*', 300, '*'],
              body: [
                [
                  {
                    text: '',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: [
                      { text: 'EL ACREDITADO', bold: true },
                      { text: '\n' },
                      { text: '\n' },
                      { text: '\n' },
                    ],
                    alignment: 'center',
                    style: 'headerNot2',
                    border: [false, true, false, false],
                  },
                  {
                    text: '',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: '______________________________',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `${this.utils2.nombreClienteFromDatosPersonales(representante_legal)}`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `${this.util.domicilioFromDatosModel(representante_legal)}`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `${this.util.primerNumeroTelefonico(representante_legal)}`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
              ],
            },
          },
          '\n',
          '\n',
          {
            layout: 'noBorders',
            table: {
              widths: ['*', 300, '*'],
              body: [
                [
                  {
                    text: '',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: [
                      { text: 'EL AVAL', bold: true },
                      { text: '\n' },
                      { text: '\n' },
                      { text: '\n' },
                    ],
                    alignment: 'center',
                    style: 'headerNot2',
                    border: [false, true, false, false],
                  },
                  {
                    text: '',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: '______________________________',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `${this.utils2.nombreClienteFromDatosPersonales(aval)}`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `${this.util.domicilioFromDatosModel(aval)}`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `${this.util.primerNumeroTelefonico(aval)}`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
              ],
            },
          },
          '\n',
          '\n',
          {
            layout: 'noBorders',
            table: {
              widths: ['*', 60, '*'],
              body: [
                [
                  {
                    text: '',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `TESTIGOS\n\n\n\n\n\n`,
                    alignment: 'center',
                    style: 'headerNot2',
                    bold:true,
                  },
                  {
                    text: '',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: '________________________',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: '________________________',
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                ],
                [
                  {
                    text: `CP. ADRIANA SOFIA CORNEJO PORRAS`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `LIC. DALIA IRIS MABEL GODOY TAPIA`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                ],
                [
                  {
                    text: `COORDINADOR ADMINISTRATIVO`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                  {
                    text: ``,
                    alignment: 'center',
                    style: 'headerNot2',
                  },
                  {
                    text: `COORDINADOR JURÍDICO`,
                    alignment: 'center',
                    style: 'body1',
                    bold:true,
                  },
                ],
              ],
            },
          },
          */
        ],
        footer: (currentPage, pageCount) => {
          return {
            text: `ROEE 2025 - P\xE1gina ${currentPage} de ${pageCount}`,
            alignment: "right",
            margin: [0, 0, 80, 10],
            fontSize: 8
          };
        },
        styles: __spreadProps(__spreadValues({}, this.style), {
          headerCliente: {
            fontSize: 10,
            bold: true,
            color: "#000000",
            fillColor: "#A9A9A9"
          },
          headerTotal: {
            color: "#2c3e50",
            fontSize: 16,
            bold: true
          },
          headerNot4: {
            fontSize: 12,
            bold: false
          },
          bodyRemark: {
            fontSize: 10,
            decoration: "underline"
          },
          body1: {
            fontSize: 10,
            alignment: "justify",
            lineHeight: 1.2,
            bold: false
          },
          firmas: {
            fontSize: 8,
            alignment: "justify",
            bold: false
          },
          email: {
            fontSize: 9,
            alignment: "justify",
            bold: false,
            color: "#1a0dab",
            decoration: "underline"
          },
          gasto: {
            fontSize: 10,
            alignment: "justify",
            bold: false,
            color: "#FF0000"
          },
          body2: {
            fontSize: 10,
            alignment: "center",
            bold: false
          },
          header1: {
            fontSize: 12,
            alignment: "center",
            marginBottom: 5,
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
          },
          headerNot5: {
            fontSize: 12,
            bold: true
          },
          normalText: {
            fontSize: 9
          },
          subheader: {
            fontSize: 9,
            bold: true,
            alignment: "center",
            fillColor: "#eeeeee"
            // margin: [0, 15, 0, 0],
          },
          registro: {
            fontSize: 6,
            bold: false,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          registro2: {
            fontSize: 6,
            bold: false,
            alignment: "right"
            // margin: [0, 15, 0, 0],
          },
          registro4: {
            fontSize: 4,
            bold: true,
            alignment: "right"
            // margin: [0, 15, 0, 0],
          },
          registro5: {
            fontSize: 4,
            bold: false,
            alignment: "left"
            // margin: [0, 15, 0, 0],
          },
          registro6: {
            fontSize: 6,
            bold: true,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          registrov2: {
            fontSize: 8,
            bold: true,
            alignment: "center"
            // margin: [0, 15, 0, 0],
          },
          reg_der: {
            fontSize: 9,
            bold: false,
            alignment: "right"
          }
        })
      };
      pdfMake2.createPdf(defDoc).open();
    });
  }
};
_ContratoCreditoPMService.\u0275fac = function ContratoCreditoPMService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContratoCreditoPMService)(\u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(HeaderPdfService), \u0275\u0275inject(UtilsService));
};
_ContratoCreditoPMService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContratoCreditoPMService, factory: _ContratoCreditoPMService.\u0275fac, providedIn: "any" });
var ContratoCreditoPMService = _ContratoCreditoPMService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContratoCreditoPMService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: CreditoService }, { type: UtilsService2 }, { type: HeaderPdfService }, { type: UtilsService }], null);
})();

// src/app/services/documentosLegales/contratos/notificacion_cobranza_pfae.service.ts
var pdfMake3 = __toESM(require_pdfmake());
var pdfFonts3 = __toESM(require_vfs_fonts());
var import_dayjs3 = __toESM(require_dayjs_min());
var import_customParseFormat3 = __toESM(require_customParseFormat());
pdfMake3.addVirtualFileSystem(pdfFonts3);
import_dayjs3.default.extend(import_customParseFormat3.default);
import_dayjs3.default.locale("es");
var _NotificacionCobranzaPFAEService = class _NotificacionCobranzaPFAEService {
  constructor(util, headers, creditoController, utils2) {
    this.util = util;
    this.headers = headers;
    this.creditoController = creditoController;
    this.utils2 = utils2;
    this.style = {
      tableHead: {
        margin: [0, 5, 0, 15]
      },
      cabeceraText: {
        fontSize: 12,
        bold: true,
        color: "#000000"
        // margin: [10, 0, 0, 0],
      },
      headerOrange: {
        fontSize: 12,
        bold: true,
        color: "#df8718"
        // margin: [10, 0, 0, 0],
      },
      headerDireccion: {
        fontSize: 10,
        color: "#000000"
      },
      headerFolio: {
        fontSize: 14,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff",
        alignment: "center"
      },
      textFolio: {
        fontSize: 14,
        bold: true,
        alignment: "center"
      },
      header: {
        fontSize: 12,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff"
      },
      firma: {
        fontSize: 14,
        alignment: "center"
      },
      th: {
        fontSize: 10,
        bold: true,
        alignment: "center",
        fillColor: "#2f4a8d",
        color: "white"
      },
      te: {
        fontSize: 9
      },
      footer: {
        fontSize: 9,
        bold: true,
        color: "#2f4a8d"
      }
    };
  }
  NotificacionCobranzaPFAE_pdf(_0) {
    return __async(this, arguments, function* (credito, fechaConvenio = /* @__PURE__ */ new Date()) {
      let creditoId = 0;
      if (typeof credito == "object") {
        creditoId = credito.id;
      }
      const creditoData = yield this.creditoController.find(creditoId, [
        "datosPersonaFisica.datosPersonales.ciudades",
        "datosPersonaFisica.datosPersonales.telefonosPersonales",
        "datosPersonasMorales.representanteLegal.ciudades",
        "datosPersonasMorales.representanteLegal.telefonosPersonales",
        "datosPersonasMorales.telefonos",
        "datosPersonales.ciudades",
        "datosPersonales.telefonosPersonales",
        "datosPersonaFisica.negocios"
      ]);
      if (!creditoData) {
        console.error("credito no encontrado");
        return;
      }
      const acreditado = creditoData.datos_persona_fisica?.datos_personales ?? creditoData.datos_personas_morales?.representante_legal;
      const aval = creditoData?.datos_personales;
      const fecha = creditoData?.created_at;
      const date2 = new Date(fecha);
      if (!fechaConvenio) {
        fechaConvenio = /* @__PURE__ */ new Date();
      }
      const fecha_contrato = this.util.fechaAletras(fechaConvenio);
      const telefonoCasa = creditoData.datos_persona_fisica?.datos_personales?.telefonos_personales?.find((telefono2) => telefono2.tipo == "CASA");
      const telefonoOficina = creditoData.datos_persona_fisica?.datos_personales?.telefonos_personales?.find((telefono2) => telefono2.tipo == "OFICINA");
      const telefonoCelular = creditoData.datos_persona_fisica?.datos_personales?.telefonos_personales?.find((telefono2) => telefono2.tipo == "CELULAR");
      const telefono = telefonoCasa?.numero ?? telefonoOficina?.numero ?? telefonoCelular?.numero;
      const mainHeader = yield this.headers.notificacion_cobranza_header();
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [10, 15, 10, 5],
        content: [
          __spreadValues({}, mainHeader),
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: [20, "*", 20],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot5"
                  },
                  {
                    text: "Por medio de la presente manifiesto que el Fideicomiso para el Desarrollo Econ\xF3mico de Baja California me hizo del conocimiento mediante noti\uFB01caci\xF3n personal, que todas las acciones de cobranza ordinaria, extrajudicial y judicial sobre mi cr\xE9dito, ser\xE1 realizado por conducto del despacho externo que el FIDEICOMISO designe a su libre decisi\xF3n por lo que mani\uFB01esto mi conformidad, en el entendido que una vez realizada dicha designaci\xF3n, se me har\xE1 del conocimiento expresamente.",
                    style: "body1"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot5"
                  }
                ]
              ]
            }
          },
          "\n",
          // Datos del suscriptor en la firma
          { text: "EL SUSCRIPTOR", bold: true, alignment: "center", margin: [0, 40, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 60, 0, 10], alignment: "center", fontSize: 10 },
          { text: `${this.utils2.nombreClienteFromDatosPersonales(acreditado).toUpperCase()}`, alignment: "center", margin: [0, 0, 10, 0], fontSize: 10 },
          { text: creditoData.datos_personas_morales ? "REPRESENTANTE LEGAL DE LA EMPRESA" : "", alignment: "center", margin: [0, 5, 0, 10], fontSize: 10 },
          { text: creditoData.datos_personas_morales ? creditoData.datos_personas_morales.razon_social.toUpperCase() : "", alignment: "center", fontSize: 10 },
          { text: `${this.util.domicilioFromDatosModel2(creditoData.datos_persona_fisica?.negocios ? creditoData.datos_persona_fisica.negocios : creditoData.datos_personas_morales)}`, alignment: "center", fontSize: 10, margin: [160, 0, 160, 0] },
          { text: `TEL: ${creditoData.datos_personas_morales?.telefonos?.at(0)?.numero ?? telefono}`, alignment: "center", fontSize: 10, margin: [0, 10, 0, 20] },
          // Datos del aval en la firma
          { text: "AVAL", bold: true, alignment: "center", margin: [0, 40, 0, 0] },
          { canvas: [{ type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 1, lineColor: "#000000" }], margin: [0, 60, 0, 10], alignment: "center", fontSize: 10 },
          { text: `${this.utils2.nombreClienteFromDatosPersonales(aval).toUpperCase()}`, alignment: "center", margin: [0, 0, 10, 0], fontSize: 10 },
          { text: `${this.util.domicilioFromDatosModel2(aval)}`, alignment: "center", margin: [160, 5, 160, 10], fontSize: 10 },
          { text: `${this.util.primerNumeroTelefonico(aval)}`, alignment: "center", margin: [0, 5, 0, 0], fontSize: 10 },
          // Fecha del final del documento
          { text: `MEXICALI BAJA CALIFORNIA A ${fecha_contrato}`, bold: true, alignment: "center", margin: [0, 80, 0, 0], fontSize: 10 },
          /*
                  {
                    layout: 'noBorders',
                    table: {
                      widths: ['*', 300, '*'],
                      body: [
          
                        [
                          {
                            text: '',
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: [
                              { text: 'EL SUSCRIPTOR', bold: true },
                              { text: '\n\n\n\n\n' },
                            ],
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: '',
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: '________________________________________________________________',
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: `${this.utils2.nombreClienteFromDatosPersonales(acreditado)}`,
                            alignment: 'center',
                            style: 'firmas',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: `${this.util.domicilioFromDatosModel2(
                              creditoData.datos_persona_fisica?.negocios
                                ? creditoData.datos_persona_fisica.negocios
                                : creditoData.datos_personas_morales
                            )}`,
                            alignment: 'center',
                            style: 'firmas',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: [
                              `${this.util.primerNumeroTelefonico(acreditado)}`,
                              { text: '\n' },
                              { text: '\n' },
                              { text: '\n' },
                              { text: '\n' },
                            ],
                            alignment: 'center',
                            style: 'firmas',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: [
                              `AVAL`,
                              { text: '\n' },
                              { text: '\n' },
                              { text: '\n' },
                            ],
                            alignment: 'center',
                            style: 'header1',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: '________________________________________________________________',
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: `${this.utils2.nombreClienteFromDatosPersonales(aval)}`,
                            alignment: 'center',
                            style: 'firmas',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: `${this.util.domicilioFromDatosModel(aval)}`,
                            alignment: 'center',
                            style: 'firmas',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: [
                              `${this.util.primerNumeroTelefonico(aval)}`,
                              { text: '\n' },
                              { text: '\n' },
                            ],
                            alignment: 'center',
                            style: 'firmas',
                          },
                          {
                            text: ``,
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                        [
                          {
                            text: '',
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                          {
                            text: [
                              { text: '\n\n\n\n\n\n\n\n\n\n\n\n\n' },
                              { text: `MEXICALI BAJA CALIFORNIA A ${fecha_contrato}`, bold: true },
                            ],
                            alignment: 'center',
                            style: 'headerNot5',
                            border: [false, true, false, false],
                          },
                          {
                            text: '',
                            alignment: 'center',
                            style: 'headerNot5',
                          },
                        ],
                      ],
                    },
                  },*/
          "\n",
          "\n"
        ],
        styles: __spreadProps(__spreadValues({}, this.style), {
          headerCliente: {
            fontSize: 10,
            bold: true,
            color: "#000000",
            fillColor: "#A9A9A9"
          },
          headerTotal: {
            color: "#2c3e50",
            fontSize: 16,
            bold: true
          },
          headerNot4: {
            fontSize: 12,
            bold: false
          },
          bodyRemark: {
            fontSize: 10,
            decoration: "underline"
          },
          body1: {
            fontSize: 12,
            alignment: "justify",
            bold: false
          },
          firmas: {
            fontSize: 10,
            alignment: "center",
            bold: false
          },
          email: {
            fontSize: 9,
            alignment: "justify",
            bold: false,
            color: "#1a0dab",
            decoration: "underline"
          },
          gasto: {
            fontSize: 10,
            alignment: "justify",
            bold: false,
            color: "#FF0000"
          },
          body2: {
            fontSize: 10,
            alignment: "center",
            bold: false
          },
          header1: {
            fontSize: 12,
            alignment: "center",
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
          },
          headerNot5: {
            fontSize: 10,
            bold: true
          },
          normalText: {
            fontSize: 9
          },
          subheader: {
            fontSize: 9,
            bold: true,
            alignment: "center",
            fillColor: "#eeeeee"
          },
          registro: {
            fontSize: 6,
            bold: false,
            alignment: "center"
          },
          registro2: {
            fontSize: 6,
            bold: false,
            alignment: "right"
          },
          registro4: {
            fontSize: 4,
            bold: true,
            alignment: "right"
          },
          registro5: {
            fontSize: 4,
            bold: false,
            alignment: "left"
          },
          registro6: {
            fontSize: 6,
            bold: true,
            alignment: "center"
          },
          registrov2: {
            fontSize: 8,
            bold: true,
            alignment: "center"
          },
          reg_der: {
            fontSize: 9,
            bold: false,
            alignment: "right"
          }
        })
      };
      pdfMake3.createPdf(defDoc).open();
    });
  }
};
_NotificacionCobranzaPFAEService.\u0275fac = function NotificacionCobranzaPFAEService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificacionCobranzaPFAEService)(\u0275\u0275inject(UtilsService2), \u0275\u0275inject(HeaderPdfService), \u0275\u0275inject(CreditoService), \u0275\u0275inject(UtilsService));
};
_NotificacionCobranzaPFAEService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificacionCobranzaPFAEService, factory: _NotificacionCobranzaPFAEService.\u0275fac, providedIn: "any" });
var NotificacionCobranzaPFAEService = _NotificacionCobranzaPFAEService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificacionCobranzaPFAEService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }, { type: HeaderPdfService }, { type: CreditoService }, { type: UtilsService }], null);
})();

// src/app/services/documentosLegales/contratos/referencia_bancaria.service.ts
var pdfMake4 = __toESM(require_pdfmake());
var pdfFonts4 = __toESM(require_vfs_fonts());
var import_dayjs4 = __toESM(require_dayjs_min());
var import_customParseFormat4 = __toESM(require_customParseFormat());
pdfMake4.addVirtualFileSystem(pdfFonts4);
import_dayjs4.default.extend(import_customParseFormat4.default);
import_dayjs4.default.locale("es");
var _ReferenciaBancariaService = class _ReferenciaBancariaService {
  constructor(util, headers, api) {
    this.util = util;
    this.headers = headers;
    this.api = api;
    this.style = {
      tableHead: {
        margin: [0, 0, 0, 0]
      },
      cabeceraText: {
        fontSize: 12,
        bold: true,
        color: "#000000"
        // margin: [10, 0, 0, 0],
      },
      headerOrange: {
        fontSize: 12,
        bold: true,
        color: "#df8718"
        // margin: [10, 0, 0, 0],
      },
      headerDireccion: {
        fontSize: 10,
        color: "#000000"
      },
      headerFolio: {
        fontSize: 14,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff",
        alignment: "center"
      },
      textFolio: {
        fontSize: 14,
        bold: true,
        alignment: "center"
      },
      header: {
        fontSize: 12,
        bold: true,
        fillColor: "#df8718",
        color: "#ffffff"
      },
      firma: {
        fontSize: 14,
        alignment: "center"
      },
      th: {
        fontSize: 10,
        bold: true,
        alignment: "center",
        fillColor: "#2f4a8d",
        color: "white"
      },
      te: {
        fontSize: 9
      },
      footer: {
        fontSize: 9,
        bold: true,
        color: "#2f4a8d"
      }
    };
  }
  referencia_bancaria(credito = null) {
    return __async(this, null, function* () {
      console.log("PDF");
      const persona_moral = credito?.datos_personas_morales;
      const persona_fisica = credito?.datos_persona_fisica;
      const mainHeader = yield this.headers.referencia_bancaria_header("assets/economia_logo.png");
      const defDoc = {
        pageSize: "LETTER",
        pageMargins: [0, 0, 0, 0],
        content: [
          __spreadValues({}, mainHeader),
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 600, "*"],
              body: [
                [
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot5"
                  },
                  {
                    text: "FIDEICOMISO HBMX53260",
                    style: "header1",
                    alignment: "center"
                  },
                  {
                    text: ``,
                    alignment: "left",
                    style: "headerNot5"
                  }
                ]
              ]
            }
          },
          {
            layout: "noBorders",
            table: {
              widths: ["*", 600, "*"],
              body: [
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5"
                  },
                  {
                    text: [
                      { text: "Clave de Servicio: 8727", bold: true }
                    ],
                    alignment: "center",
                    style: "clave_servicio"
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5"
                  }
                ],
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5"
                  },
                  {
                    text: "PAGO POR TRANSFERENCIA",
                    alignment: "center",
                    style: "pago_transferencia"
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot5"
                  },
                  {
                    text: "Cuenta: 6231216641",
                    alignment: "center",
                    style: "datos_cuentas"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot5"
                  }
                ],
                [
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot5"
                  },
                  {
                    text: `CLABE interbancaria: 021028062312166411`,
                    alignment: "center",
                    style: "datos_cuentas"
                  },
                  {
                    text: ``,
                    alignment: "center",
                    style: "headerNot5"
                  }
                ]
              ]
            }
          },
          "\n",
          "\n",
          "\n",
          "\n",
          "\n",
          {
            layout: "noBorders",
            table: {
              widths: ["*", 500, "*"],
              body: [
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5"
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5",
                    fillColor: "#b17a45",
                    margin: [0, 0, 0, 5]
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5"
                  }
                ],
                [
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5"
                  },
                  {
                    stack: [
                      {
                        // text: 'EE24249668MARIAELIZA',
                        text: `${credito?.referencia_bancaria}`,
                        alignment: "center",
                        fontSize: 28,
                        bold: true,
                        color: "#fff"
                      },
                      {
                        text: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _",
                        alignment: "center",
                        fontSize: 20,
                        color: "#fff"
                      }
                    ],
                    fillColor: "#53152b"
                  },
                  {
                    text: "",
                    alignment: "center",
                    style: "headerNot5"
                  }
                ]
              ]
            }
          }
        ],
        styles: __spreadProps(__spreadValues({}, this.style), {
          headerCliente: {
            fontSize: 10,
            bold: true,
            color: "#000000",
            fillColor: "#A9A9A9"
          },
          headerTotal: {
            color: "#2c3e50",
            fontSize: 16,
            bold: true
          },
          headerNot4: {
            fontSize: 12,
            bold: false
          },
          bodyRemark: {
            fontSize: 10,
            decoration: "underline"
          },
          body1: {
            fontSize: 12,
            alignment: "justify",
            bold: false
          },
          firmas: {
            fontSize: 10,
            alignment: "center",
            bold: false
          },
          email: {
            fontSize: 9,
            alignment: "justify",
            bold: false,
            color: "#1a0dab",
            decoration: "underline"
          },
          gasto: {
            fontSize: 10,
            alignment: "justify",
            bold: false,
            color: "#FF0000"
          },
          body2: {
            fontSize: 10,
            alignment: "center",
            bold: false
          },
          header1: {
            fontSize: 24,
            alignment: "center",
            color: "#53152b",
            bold: true
          },
          header2: {
            fontSize: 10,
            alignment: "left",
            bold: true
          },
          headerNot5: {
            fontSize: 10,
            bold: true
          },
          clave_servicio: {
            fontSize: 16,
            bold: true,
            color: "#b17a45"
          },
          pago_transferencia: {
            fontSize: 18,
            bold: true,
            color: "#53152b"
          },
          datos_cuentas: {
            fontSize: 14,
            bold: true,
            color: "#53152b"
          },
          codigo: {
            fontSize: 28,
            bold: true,
            color: "#fff"
          },
          dashedUnderline: {
            fontSize: 12,
            color: "#000",
            bold: true
          },
          normalText: {
            fontSize: 9
          },
          subheader: {
            fontSize: 9,
            bold: true,
            alignment: "center",
            fillColor: "#eeeeee"
          },
          registro: {
            fontSize: 6,
            bold: false,
            alignment: "center"
          },
          registro2: {
            fontSize: 6,
            bold: false,
            alignment: "right"
          },
          registro4: {
            fontSize: 4,
            bold: true,
            alignment: "right"
          },
          registro5: {
            fontSize: 4,
            bold: false,
            alignment: "left"
          },
          registro6: {
            fontSize: 6,
            bold: true,
            alignment: "center"
          },
          registrov2: {
            fontSize: 8,
            bold: true,
            alignment: "center"
          },
          reg_der: {
            fontSize: 9,
            bold: false,
            alignment: "right"
          }
        })
      };
      pdfMake4.createPdf(defDoc).open();
    });
  }
};
_ReferenciaBancariaService.\u0275fac = function ReferenciaBancariaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReferenciaBancariaService)(\u0275\u0275inject(UtilsService2), \u0275\u0275inject(HeaderPdfService), \u0275\u0275inject(ApiServiceService));
};
_ReferenciaBancariaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReferenciaBancariaService, factory: _ReferenciaBancariaService.\u0275fac, providedIn: "any" });
var ReferenciaBancariaService = _ReferenciaBancariaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReferenciaBancariaService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService2 }, { type: HeaderPdfService }, { type: ApiServiceService }], null);
})();

export {
  ContratoCreditoPFAEService,
  ContratoCreditoPMService,
  NotificacionCobranzaPFAEService,
  ReferenciaBancariaService
};
//# sourceMappingURL=chunk-PFTOVQVL.js.map
