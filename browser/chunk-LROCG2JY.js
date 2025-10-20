import {
  CreditoService
} from "./chunk-RAXPYTHI.js";
import {
  UtilsService as UtilsService2,
  require_pdfmake,
  require_vfs_fonts
} from "./chunk-MLBICDWK.js";
import {
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
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/services/documentosLegales/ChronixPDF.service.ts
var pdfMake = __toESM(require_pdfmake());
var pdfFonts = __toESM(require_vfs_fonts());
pdfMake.addVirtualFileSystem(pdfFonts);
var _ChronixPDFservice = class _ChronixPDFservice {
  constructor(utils, utilsC, creditoController) {
    this.utils = utils;
    this.utilsC = utilsC;
    this.creditoController = creditoController;
  }
  /*
    generateCurvedPolyline(numPoints: number, amplitude: number, frequency: number): object {
      const points = [];
      for (let i = 0; i < numPoints; i++) {
        const x = i * 0.25; // Espaciado entre puntos
        const y = amplitude * Math.sin(i * frequency); // Funcion de onda sen(x)
        points.push({ x, y });
      }
  
      return {
        type: 'polyline',
        lineWidth: 1,
        points
      };
    }
  
    generateIrregularCurvyPolyline(startX: number, startY: number, endX: number, endY: number, numPoints: number, variation: number): object {
      const points = [];
      let x = startX;
      let y = startY;
      const dx = (endX - startX) / numPoints;
      const dy = (endY - startY) / numPoints;
  
      for (let i = 0; i <= numPoints; i++) {
        x = startX + i * dx;
        y = startY + i * dy + Math.sin(i * 0.3) * variation + Math.cos(i * 0.2) * variation * 0.5;
        points.push({ x, y });
      }
  
      return {
        type: 'polyline',
        lineWidth: 2,
        points
      };
    }*/
  readTextFile() {
  }
  generateTextFileJSON() {
  }
  generateTextContent() {
  }
  generateHeaderStyle() {
  }
  generateFooterStyle() {
  }
  generateHeader(_0) {
    return __async(this, arguments, function* (logos, columnWidths = [], imageWidths = []) {
      const logoImages = yield Promise.all(logos.map((logo) => this.utilsC.getBase64ImageFromURL3(logo)));
      const widths = columnWidths.length === logos.length ? columnWidths : logos.map(() => "auto");
      const imgWidths = imageWidths.length === logos.length ? imageWidths : widths;
      const body = [
        logoImages.map((image, index) => ({
          image,
          alignment: "center",
          width: imgWidths[index]
        }))
      ];
      return {
        layout: "noBorders",
        table: {
          widths,
          body
        },
        margin: [0, 0, 0, 0]
      };
    });
  }
  generateTitle(title, color, subtitles = []) {
    const content = [];
    content.push({
      text: title,
      alignment: "right",
      color,
      fontSize: 14,
      bold: true,
      margin: [0, 20, 0, 5]
    });
    subtitles.forEach((subtitle) => {
      content.push({
        text: subtitle,
        alignment: "right",
        color
      });
    });
    content.push({
      canvas: [{
        type: "line",
        x1: 0,
        y1: 0,
        x2: 300,
        y2: 0,
        lineWidth: 8,
        lineColor: color
      }],
      margin: [0, 10, 0, 30],
      alignment: "right"
    });
    return content;
  }
  // Example usage:
  //console.log(generateTitleJson("AVISO DE PRIVACIDAD SIMPLIFICADO", ["Solicitud de crédito"]));
  generateSubtitle() {
  }
  generateCaterpillarHeaader(color1, color2) {
    return {
      canvas: [
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 0, y: 0 },
            { x: 0, y: 80 },
            { x: 80, y: 10 },
            { x: 350, y: 10 },
            { x: 360, y: 0 }
          ],
          color: color1
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 370, y: 0 },
            { x: 360, y: 10 },
            { x: 370, y: 10 },
            { x: 380, y: 0 }
          ],
          color: color2
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 390, y: 0 },
            { x: 380, y: 10 },
            { x: 390, y: 10 },
            { x: 400, y: 0 }
          ],
          color: color2
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 410, y: 0 },
            { x: 400, y: 10 },
            { x: 410, y: 10 },
            { x: 420, y: 0 }
          ],
          color: color2
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 430, y: 0 },
            { x: 420, y: 10 },
            { x: 430, y: 10 },
            { x: 440, y: 0 }
          ],
          color: color2
        },
        {
          type: "polyline",
          closePath: true,
          points: [{ x: 450, y: 0 }, { x: 440, y: 10 }, { x: 585, y: 10 }, { x: 595, y: 0 }],
          color: color2
        }
      ]
    };
  }
  generateCaterpillarFooter(color1, color2) {
    return {
      canvas: [
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 596, y: 761.8 },
            { x: 596, y: 681.8 },
            { x: 516, y: 751.8 },
            { x: 246, y: 751.8 },
            { x: 236, y: 761.8 }
          ],
          color: color1
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 236, y: 751.8 },
            { x: 226, y: 761.8 },
            { x: 216, y: 761.8 },
            { x: 226, y: 751.8 }
          ],
          color: color2
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 216, y: 751.8 },
            { x: 206, y: 761.8 },
            { x: 196, y: 761.8 },
            { x: 206, y: 751.8 }
          ],
          color: color2
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 196, y: 751.8 },
            { x: 186, y: 761.8 },
            { x: 176, y: 761.8 },
            { x: 186, y: 751.8 }
          ],
          color: "#B17A45"
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 176, y: 751.8 },
            { x: 166, y: 761.8 },
            { x: 156, y: 761.8 },
            { x: 166, y: 751.8 }
          ],
          color: color2
        },
        {
          type: "polyline",
          closePath: true,
          points: [
            { x: 156, y: 751.8 },
            { x: 146, y: 761.8 },
            { x: 0, y: 761.8 },
            { x: 10, y: 751.8 }
          ],
          color: color2
        }
      ]
    };
  }
  generateStaticTable(columns, rows, style) {
  }
  generateDynamicTable(columns, rows, style) {
  }
  generateInputRadio(style) {
  }
  generateInputCheckbox(style) {
  }
  generateSignature(type, topTextList = [], bottomTextList = [], whiteSpace, lineSize) {
    const x1 = (595 - lineSize) / 2;
    const x2 = x1 + lineSize;
    return [
      ...topTextList.filter((text) => text !== void 0).map((text) => ({
        text,
        alignment: "center",
        fontSize: 10
      })),
      {
        canvas: [{ type: "line", x1, y1: 0, x2, y2: 0, lineWidth: 1 }],
        margin: [0, whiteSpace, 0, 5]
      },
      ...bottomTextList.filter((text) => text !== void 0).map((text) => ({
        text,
        alignment: "center",
        fontSize: 10
      }))
    ];
  }
  generateList() {
  }
  generateTextBox() {
  }
  generateFooterText(style) {
  }
  generatePageNumber(style) {
  }
  fillStaticTable() {
  }
  fillDynamicTable() {
  }
  generateSeal(image, date) {
  }
  /**
   * Function for generating the pdf of the document
   * @param creditoParam
   * @returns
   */
  chronixTemplate() {
    return __async(this, null, function* () {
      const marginLeftRight = 80;
      const marginTop = 20;
      const marginBottom = 100;
      const generatedDocument = {
        pageMargins: [marginLeftRight, marginTop, marginLeftRight, marginBottom],
        content: [
          {
            text: [
              "This ",
              { text: "is", color: "green" },
              " the first ",
              { text: "paragraph", color: "red" }
            ]
          }
          /*
                  {
                    canvas: [
                      // Genera un rectangulo con una linea punteada
                      {
                        ...irregularPolyline
                      },
                      {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 310,
                        h: 290,
                        r: 5,
                        dash: { length: 5 },
                        // lineWidth: 10,
                        lineColor: 'blue',
                      },
          
                      // Genera un rectangulo
                      {
                        type: 'rect',
                        x: 1,
                        y: 1,
                        w: 308,
                        h: 288,
                        r: 10,
                        lineColor: 'red',
                        color: '#ffffe0',
                        fillOpacity: 0.1,
                      },
          
                      // Genera un poligono
                      {
                        type: 'polyline',
                        lineWidth: 3,
                        closePath: true, // Dibuja una linea entre el primer y el ultimo punto
                        points: [{ x: 20, y: 0 }, { x: 35, y: 40 }, { x: 100, y: 40 }, { x: 150, y: 10 }, { x: 150, y: -30 }]
                      },
                      {
                        type: 'polyline',
                        lineWidth: 2,
                        color: 'blue',
                        lineColor: 'red',
                        points: [{ x: 10, y: 110 }, { x: 35, y: 140 }, { x: 100, y: 140 }, { x: 125, y: 110 }, { x: 10, y: 110 }]
                      },
                      {
                        type: 'line',
                        x1: 40, y1: 60,
                        x2: 260, y2: 60,
                        lineWidth: 3
                      },
                      {
                        type: 'line',
                        x1: 30, y1: 90,
                        x2: 200, y2: 80,
                        lineWidth: 10,
                        lineCap: 'round'
                      },
                      {
                        type: 'line',
                        x1: 40, y1: 100,
                        x2: 260, y2: 100,
                        lineWidth: 10,
                        lineCap: 'square'
                      },
                      {
                        type: 'ellipse',
                        x: 200, y: 350,
                        color: 'red',
                        fillOpacity: 0.5,
                        r1: 80, r2: 60
                      },
                      {
                        type: 'rect',
                        x: 150,
                        y: 200,
                        w: 150,
                        h: 50,
                      },
                      {
                        type: 'rect',
                        x: 10, y: 200, w: 100, h: 10,
                        linearGradient: ['red', 'blue']
                      },
                      {
                        type: 'rect',
                        x: 10, y: 215, w: 100, h: 10,
                        linearGradient: ['red', 'green', 'blue']
                      },
                      {
                        type: 'rect',
                        x: 10, y: 230, w: 100, h: 10,
                        linearGradient: ['red', 'yellow', 'green', 'blue']
                      },
                      {
                        type: 'ellipse',
                        x: 260, y: 140,
                        r1: 30, r2: 20,
                        linearGradient: ['red', 'green', 'blue', 'red'],
                      },
                      {
                        type: 'rect',
                        x: 10, y: 250, w: 50, h: 30,
                        color: ['stripe45d', 'blue'],
                      },
                    ]
                  },*/
        ],
        footer: {
          columns: []
        }
      };
      pdfMake.createPdf(generatedDocument).open();
    });
  }
};
_ChronixPDFservice.\u0275fac = function ChronixPDFservice_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChronixPDFservice)(\u0275\u0275inject(UtilsService), \u0275\u0275inject(UtilsService2), \u0275\u0275inject(CreditoService));
};
_ChronixPDFservice.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChronixPDFservice, factory: _ChronixPDFservice.\u0275fac, providedIn: "any" });
var ChronixPDFservice = _ChronixPDFservice;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChronixPDFservice, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }, { type: UtilsService2 }, { type: CreditoService }], null);
})();

export {
  ChronixPDFservice
};
//# sourceMappingURL=chunk-LROCG2JY.js.map
