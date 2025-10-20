import {
  require_dayjs_min
} from "./chunk-NWCMIO4X.js";
import {
  require_pdfmake,
  require_vfs_fonts
} from "./chunk-MLBICDWK.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IR6OZYYD.js";
import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-N6ESDQJH.js";

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    "use strict";
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    }(exports, function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        }(e2);
      }], u = function(e2) {
        var t2 = s[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d = function(e2, t2) {
        var n2, r2 = s.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c = { A: [o, function(e2) {
        this.afternoon = d(e2, false);
      }], a: [o, function(e2) {
        this.afternoon = d(e2, true);
      }], Q: [n, function(e2) {
        this.month = 3 * (e2 - 1) + 1;
      }], S: [n, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [r, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(e2) {
        var t2 = s.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(e2) {
        var t2 = u("months"), n2 = (u("monthsShort") || t2.map(function(e3) {
          return e3.slice(0, 3);
        })).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [o, function(e2) {
        var t2 = u("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(e2) {
        this.year = a(e2);
      }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
      function l(n2) {
        var r2, i2;
        r2 = n2, i2 = s && s.formats;
        for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r3) {
          var o3 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
            return t3 || n4.slice(1);
          });
        })).match(t), a2 = o2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = o2[f2], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f2] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = o2[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          }(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
          this.$u = r3;
          var a2 = o2[1];
          if ("string" == typeof a2) {
            var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f3 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = /* @__PURE__ */ new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c3 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            }(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (a2 instanceof Array) for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
            o2[1] = a2[m - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    });
  }
});

// node_modules/dayjs/locale/es.js
var require_es = __commonJS({
  "node_modules/dayjs/locale/es.js"(exports, module) {
    "use strict";
    !function(e, o) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = o(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_es = o(e.dayjs);
    }(exports, function(e) {
      "use strict";
      function o(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var s = o(e), d = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xEDa", dd: "%d d\xEDas", M: "un mes", MM: "%d meses", y: "un a\xF1o", yy: "%d a\xF1os" }, ordinal: function(e2) {
        return e2 + "\xBA";
      } };
      return s.default.locale(d, null, true), d;
    });
  }
});

// src/app/services/documentosLegales/headers_pdfs.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
var import_dayjs = __toESM(require_dayjs_min());
var import_es = __toESM(require_es());
pdfMake.addVirtualFileSystem(pdfFonts);
import_dayjs.default.locale("es");
var _HeaderPdfService = class _HeaderPdfService {
  constructor() {
    this.mainHeader = (logoUnico = "assets/logo_mantre2.png", loadData) => __async(this, null, function* () {
      console.log(logoUnico);
      const logo = yield this.getBase64ImageFromURL(logoUnico);
      return {
        style: "tableHead",
        table: {
          body: [
            [
              {
                rowSpan: 1,
                stack: [
                  {
                    image: logo,
                    alignment: "center",
                    width: 250
                  }
                ]
              },
              [
                {
                  text: [
                    { text: `PROGRAMA: ${loadData.program}`, style: "headerTitle" }
                  ],
                  style: "headerText"
                },
                { text: "", style: "headerText" },
                {
                  text: [
                    { text: "Nombre del acreditado: ", style: "headerTitle" },
                    loadData.borrower
                  ],
                  style: "headerText"
                },
                { text: "", style: "headerText" },
                {
                  text: [
                    { text: "Cr\xE9dito: ", style: "headerTitle" },
                    loadData.creditNumber
                  ],
                  style: "headerText"
                },
                { text: "", style: "headerText" },
                {
                  text: [
                    { text: "Referencia de Pago: ", style: "headerTitle" },
                    loadData.paymentReference
                  ],
                  style: "headerText"
                },
                { text: "", style: "headerText" },
                {
                  text: [
                    { text: "Monto total: ", style: "headerTitle" },
                    loadData.totalAmount
                  ],
                  style: "headerText"
                },
                { text: "", style: "headerText" },
                {
                  text: [
                    { text: "Tasa de inter\xE9s: ", style: "headerTitle" },
                    loadData.interestRate
                  ],
                  style: "headerText"
                },
                { text: "", style: "headerText" },
                {
                  text: [
                    { text: "Plazo: ", style: "headerTitle" },
                    loadData.term
                  ],
                  style: "headerText"
                },
                { text: "", style: "headerText" }
              ]
            ]
          ]
        },
        layout: "noBorders",
        margin: [1, 1, 1, 8]
      };
    });
    this.notificacion_cobranza_header = (logoUnico = "assets/fondos_bc_logo.png") => __async(this, null, function* () {
      const logo = yield this.getBase64ImageFromURL3(`${logoUnico}`);
      return {
        style: "noBorders",
        table: {
          widths: ["*"],
          body: [
            [
              {
                image: logo,
                alignment: "center",
                width: "300"
                // fit: [800, 20]
              }
            ]
          ]
        },
        layout: "noBorders",
        margin: [0, 0, 0, 0]
      };
    });
    this.referencia_bancaria_header = (logoUnico = "assets/fondos_bc_logo.png") => __async(this, null, function* () {
      const logo = yield this.getBase64ImageFromURL3(`${logoUnico}`);
      return {
        style: "noBorders",
        table: {
          widths: ["*"],
          body: [
            [
              {
                image: logo,
                alignment: "center",
                width: "600"
                // fit: [800, 20]
              }
            ]
          ]
        },
        layout: "noBorders",
        margin: [0, 0, 0, 0]
      };
    });
    this.machoteCartaInstrucciones_header = (logoUnico1 = "assets/fondos_bc_logo.png", logoUnico2 = "assets/fondos_bc_logo.png") => __async(this, null, function* () {
      const logo1 = yield this.getBase64ImageFromURL3(`${logoUnico1}`);
      const logo2 = yield this.getBase64ImageFromURL3(`${logoUnico2}`);
      return {
        style: "noBorders",
        table: {
          //80
          widths: ["*", 5, "*"],
          body: [
            [
              {
                image: logo1,
                alignment: "center",
                width: "200"
                // fit: [800, 20]
              },
              {
                text: "",
                alignment: "center",
                width: "18"
                // fit: [800, 20]
              },
              {
                image: logo2,
                alignment: "center",
                width: "180"
                // fit: [800, 20]
              }
            ]
          ]
        },
        layout: "noBorders",
        margin: [0, 0, 0, 0]
      };
    });
    this.style = {
      tableHead: {
        margin: [0, 5, 0, 15]
      },
      cabeceraText: {
        fontSize: 4,
        bold: true,
        color: "#000000"
        // margin: [10, 0, 0, 0],
      },
      headerText: {
        fontSize: 4,
        bold: true,
        color: "#ff0000"
      },
      headerOrange: {
        fontSize: 12,
        bold: true,
        color: "#df8718"
        // margin: [10, 0, 0, 0],
      },
      headerTitle: {
        fontSize: 16,
        bold: true,
        color: "#c5a4ff"
      }
      // headerDireccion: {
      //   fontSize: 10,
      //   color: '#000000',
      // },
      // headerFolio: {
      //   fontSize: 14,
      //   bold: true,
      //   fillColor: '#df8718',
      //   color: '#ffffff',
      //   alignment: 'center',
      // },
      // textFolio: {
      //   fontSize: 14,
      //   bold: true,
      //   alignment: 'center',
      // },
      // header: {
      //   fontSize: 12,
      //   bold: true,
      //   fillColor: '#df8718',
      //   color: '#ffffff',
      // },
      // firma: {
      //   fontSize: 14,
      //   alignment: 'center',
      // },
      // th: {
      //   fontSize: 10,
      //   bold: true,
      //   alignment: 'center',
      //   fillColor: '#2f4a8d',
      //   color: 'white',
      // },
      // te: {
      //   fontSize: 9,
      // },
      // footer: {
      //   fontSize: 9,
      //   bold: true,
      //   color: '#2f4a8d',
      // },
    };
  }
  getBase64ImageFromURLOg(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.src = url;
    });
  }
  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height - img.height / 4;
        let ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.src = url;
    });
  }
  getBase64ImageFromURL3(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height - img.height / 80;
        let ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        let dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.src = url;
    });
  }
  getBase64ImageFromURL2(url) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          let canvas = document.createElement("canvas");
          canvas.width = 3300;
          canvas.height = 2550;
          let ctx = canvas.getContext("2d");
          ctx?.drawImage(img, -1500, -1600);
          let dataURL = canvas.toDataURL("image/png");
          resolve(dataURL);
        };
        img.src = url;
      });
    });
  }
};
_HeaderPdfService.\u0275fac = function HeaderPdfService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderPdfService)();
};
_HeaderPdfService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HeaderPdfService, factory: _HeaderPdfService.\u0275fac, providedIn: "any" });
var HeaderPdfService = _HeaderPdfService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderPdfService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [], null);
})();

export {
  require_customParseFormat,
  HeaderPdfService
};
//# sourceMappingURL=chunk-K6WRKREK.js.map
