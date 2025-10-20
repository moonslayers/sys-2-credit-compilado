import {
  utils,
  writeSync
} from "./chunk-3HCUHHOO.js";
import {
  require_FileSaver_min
} from "./chunk-SDTK5VY4.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-IR6OZYYD.js";
import {
  __toESM
} from "./chunk-N6ESDQJH.js";

// src/app/main/reportes/services/generador-excel.service.ts
var import_file_saver = __toESM(require_FileSaver_min());
var _GeneradorExcelService = class _GeneradorExcelService {
  constructor() {
  }
  /**
   * Genera y descarga un archivo Excel con anchos de columna mejorados
   * @param data Datos a exportar
   * @param fileName Nombre del archivo (sin extensión)
   * @param sheetName Nombre de la hoja (opcional)
   * @param columnWidths Anchos personalizados para columnas (opcional)
   */
  exportToExcel(data, fileName, sheetName = "Datos", columnWidths) {
    try {
      const workbook = utils.book_new();
      const worksheet = utils.json_to_sheet(data);
      this.setColumnWidths(worksheet, data, columnWidths);
      utils.book_append_sheet(workbook, worksheet, sheetName);
      const excelBuffer = writeSync(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, this.getFormattedFileName(fileName));
    } catch (error) {
      console.error("Error al generar Excel:", error);
      throw error;
    }
  }
  /**
   * Genera y descarga un archivo de hojas de cálculo para excel.
   * Al mandar más arrays de objetos: los siguientes se pondran en la siguiente fila en la misma hoja
   * @param data Datos a exportar
   * @param fileName Nombre del archivo (sin extensión)
   * @param sheetName Nombre de la hoja (opcional)
   * @param columnWidths Anchos personalizados para columnas (opcional)
   */
  exportToDataSheets(datasets, fileName, sheetName = "Datos") {
    try {
      let allRows = [];
      let maxColWidths = [];
      datasets.forEach((dataset, idx) => {
        if (!dataset || !dataset.length)
          return;
        const headers = Object.keys(dataset[0]);
        const headersUpper = headers.map((h) => h.toUpperCase().replace("_", " "));
        allRows.push(headersUpper);
        headersUpper.forEach((h, i) => {
          maxColWidths[i] = Math.max(maxColWidths[i] || 0, h.length);
        });
        dataset.forEach((row) => {
          const rowData = headers.map((h, i) => {
            const value = row[h] != null ? String(row[h]) : "";
            maxColWidths[i] = Math.max(maxColWidths[i] || 0, value.length);
            return value;
          });
          allRows.push(rowData);
        });
        if (idx < datasets.length - 1) {
          allRows.push([]);
        }
      });
      const worksheet = utils.aoa_to_sheet(allRows);
      worksheet["!cols"] = maxColWidths.map((w) => ({ wch: Math.min(Math.max(w + 2, 10), 50) }));
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, sheetName);
      const excelBuffer = writeSync(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, this.getFormattedFileName(fileName));
    } catch (error) {
      console.error("Error al generar Excel:", error);
      throw error;
    }
  }
  /**
   * Configura los anchos de columna
   */
  setColumnWidths(worksheet, data, customWidths) {
    if (!data || data.length === 0)
      return;
    const keys = Object.keys(data[0]);
    const colInfo = [];
    if (customWidths && !Array.isArray(customWidths)) {
      keys.forEach((key) => {
        colInfo.push({ wch: customWidths[key] || 15 });
      });
    } else if (customWidths && Array.isArray(customWidths)) {
      customWidths.forEach((width) => {
        colInfo.push({ wch: width || 15 });
      });
    } else {
      keys.forEach((key) => {
        const maxContentLength = Math.max(
          ...data.map((item) => item[key] ? String(item[key]).length : 0),
          key.length
          // Incluir el ancho del encabezado
        );
        colInfo.push({ wch: Math.min(Math.max(maxContentLength + 2, 10), 50) });
      });
    }
    worksheet["!cols"] = colInfo;
  }
  /**
   * Guarda el archivo Excel generado
   */
  saveAsExcelFile(buffer, fileName) {
    const data = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    });
    (0, import_file_saver.saveAs)(data, `${fileName}_${(/* @__PURE__ */ new Date()).getTime()}.xlsx`);
  }
  /**
  * Genera un nombre de archivo con formato: [base]-[mes]-[año]
  * @param baseName Nombre base del archivo (ej. 'consolidado')
  * @param options Opciones adicionales:
  *   - includeDay: incluye el día (ej. 'consolidado-15-mayo-2025')
  *   - suffix: texto adicional al final (ej. 'consolidado-mayo-2025-activos')
  * @returns Nombre formateado en minúsculas sin espacios
  */
  getFormattedFileName(baseName, options) {
    const now = /* @__PURE__ */ new Date();
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    let fileName = baseName;
    if (options?.includeDay) {
      fileName += `-${day}-${month}-${year}`;
    } else {
      fileName += `-${month}-${year}`;
    }
    if (options?.suffix) {
      fileName += `-${options.suffix}`;
    }
    return fileName.replace(/\s+/g, "-").toLowerCase();
  }
};
_GeneradorExcelService.\u0275fac = function GeneradorExcelService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GeneradorExcelService)();
};
_GeneradorExcelService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeneradorExcelService, factory: _GeneradorExcelService.\u0275fac, providedIn: "any" });
var GeneradorExcelService = _GeneradorExcelService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneradorExcelService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [], null);
})();

export {
  GeneradorExcelService
};
//# sourceMappingURL=chunk-BBNJFIFW.js.map
