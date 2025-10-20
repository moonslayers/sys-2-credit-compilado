import {
  readSync,
  utils
} from "./chunk-3HCUHHOO.js";
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
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/services/excel-reader.service.ts
var _ExcelReaderService = class _ExcelReaderService {
  constructor(utils2) {
    this.utils = utils2;
  }
  /**
  * Lee un archivo Excel y devuelve los datos en bruto como un arreglo de arreglos.
  *
  * @param file - El archivo Excel que se desea procesar.
  * @param sheetName - Nombre de la hoja a leer. Si no se especifica, se usará la primera hoja.
  * @returns Una promesa que resuelve con los datos de la hoja en formato de matriz bidimensional.
  *
  * ### Notas:
  * - Los datos de cada celda se mantienen sin procesar.
  * - Si no se especifica el nombre de la hoja, se selecciona automáticamente la primera.
  * - Utiliza la biblioteca `XLSX` para la lectura del archivo.
  *
  * ### Ejemplo de uso:
  * ```typescript
  * const file = input.files[0];
  * const rawData = await readExcelAsRawData(file, 'Hoja1');
  * console.log(rawData);
  * ```
  */
  readExcelAsRawData(file, sheetName = void 0) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = new Uint8Array(event.target?.result);
          const workbook = readSync(data, { type: "array" });
          if (!sheetName) {
            sheetName = workbook.SheetNames[0];
          }
          const sheet = workbook.Sheets[sheetName];
          if (!sheet) {
            throw new Error(`La hoja "${sheetName}" no existe en el archivo.`);
          }
          const json = utils.sheet_to_json(sheet, { header: 1, blankrows: false });
          const filteredData = json.filter((row) => {
            return Array.isArray(row) && row.length > 0;
          });
          resolve(filteredData);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  }
  sheetNames(file) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = new Uint8Array(event.target?.result);
            const workbook = readSync(data, { type: "array" });
            resolve(workbook.SheetNames);
          } catch (error) {
            reject(error);
          }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
      });
    });
  }
  /**
  * Transforma un archivo Excel en una lista de objetos JSON.
  *
  * @param file - El archivo Excel que se desea procesar.
  * @returns Una promesa que resuelve con una lista de objetos JSON,
  * donde cada fila es un objeto basado en el encabezado del archivo.
  *
  * ### Notas:
  * - El encabezado de la primera fila se utiliza como claves del objeto.
  * - Las claves se limpian y convierten a minúsculas, reemplazando espacios con guiones bajos (`_`).
  * - Las filas vacías o celdas faltantes se representan con `null`.
  *
  * ### Ejemplo de uso:
  * ```typescript
  * const file = input.files[0];
  * const jsonList = await readExcelAsJsonList(file);
  * console.log(jsonList);
  * ```
  */
  readExcelAsJsonList(file, sheetName = void 0, chunkSize = 0) {
    return __async(this, null, function* () {
      const data = yield this.readExcelAsRawData(file, sheetName);
      console.log(data);
      const size = chunkSize > 0 ? chunkSize + 1 : data.length - 1;
      if (!data || data.length < 2) {
        return [];
      }
      const header = data[0].map((item) => this.utils.cleanString(item).replace(/ /g, "_").toLowerCase());
      return data.slice(1, size + 1).map((row) => {
        const record = {};
        header.forEach((key, index) => {
          record[key] = row[index] || null;
        });
        return record;
      });
    });
  }
};
_ExcelReaderService.\u0275fac = function ExcelReaderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExcelReaderService)(\u0275\u0275inject(UtilsService));
};
_ExcelReaderService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExcelReaderService, factory: _ExcelReaderService.\u0275fac, providedIn: "any" });
var ExcelReaderService = _ExcelReaderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExcelReaderService, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], () => [{ type: UtilsService }], null);
})();

export {
  ExcelReaderService
};
//# sourceMappingURL=chunk-NP73XDLG.js.map
