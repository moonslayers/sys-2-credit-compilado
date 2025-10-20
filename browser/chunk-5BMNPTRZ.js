import {
  ApiServiceService,
  UtilsService
} from "./chunk-7VPVFOGJ.js";
import {
  FormsModule
} from "./chunk-TBFW4U4H.js";
import {
  VanillaDialogService
} from "./chunk-NXZD54QQ.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-IR6OZYYD.js";
import {
  __async
} from "./chunk-N6ESDQJH.js";

// src/app/shared/file-input/file-input.component.ts
var _c0 = ["inputFile"];
function FileInputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.labelClass ?? "input-group-text fw-bold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label, " ");
  }
}
function FileInputComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275listener("click", function FileInputComponent_Conditional_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.visualize());
    });
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementEnd();
  }
}
function FileInputComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function FileInputComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.upload());
    });
    \u0275\u0275text(1, " Subir ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.foreign_key && !ctx_r1.id || !ctx_r1.formData.has(ctx_r1.key));
  }
}
function FileInputComponent_Conditional_6_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.utils.fileUrlInLine(ctx_r1.url), \u0275\u0275sanitizeUrl);
  }
}
function FileInputComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "label")(2, "b");
    \u0275\u0275text(3, "Imagen Subida:");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, FileInputComponent_Conditional_6_Conditional_1_Conditional_4_Template, 1, 1, "img", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r1.isImageChanging ? 4 : -1);
  }
}
function FileInputComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, FileInputComponent_Conditional_6_Conditional_1_Template, 5, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isImage(ctx_r1.file) ? 1 : -1);
  }
}
function FileInputComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 11);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.utils.fileUrlInLineSanatized(ctx_r1.url), \u0275\u0275sanitizeResourceUrl);
  }
}
function FileInputComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 9)(2, "label")(3, "b");
    \u0275\u0275text(4, "PDF:");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, FileInputComponent_Conditional_7_Conditional_5_Template, 1, 1, "iframe", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.refreshIframe ? 5 : -1);
  }
}
var _FileInputComponent = class _FileInputComponent {
  constructor(api, utils, dialog) {
    this.api = api;
    this.utils = utils;
    this.dialog = dialog;
    this.formData = new FormData();
    this.accept = ".pdf,.jpg,.jpeg,.png,.gif,.webp";
    this.multiple = false;
    this.key = "file";
    this.divClass = "input-group shadow-sm ";
    this.inputClass = "form-control";
    this.url = "";
    this.valueChange = new EventEmitter();
    this.urlChange = new EventEmitter();
    this.valid = true;
    this.validChange = new EventEmitter();
    this.showDownload = false;
    this.showSimpleDownload = false;
    this.isImageChanging = false;
    this.automaticSave = true;
    this.showButton = true;
    this.disabled = false;
    this.refreshIframe = true;
  }
  ngOnInit() {
    this.valid = true;
    this.validChange.emit(true);
  }
  ngOnChanges(changes) {
    if (changes["id"] && this.id && this.foreign_key && this.formData.has(this.key)) {
      this.upload();
    }
    if (this.url && changes["url"]) {
      console.log("cambio el url");
      this.refreshIframe = false;
      setTimeout(() => {
        this.refreshIframe = true;
      }, 2e3);
    }
  }
  upload() {
    return __async(this, null, function* () {
      this.url = "";
      this.isImageChanging = true;
      if (this.formExtra) {
        for (const key of Object.keys(this.formExtra)) {
          this.formData.append(key, this.formExtra[key]);
        }
      }
      if (this.id && this.foreign_key) {
        this.formData.append(this.foreign_key, this.id);
      }
      console.log(this.formData);
      if (this.apiUrl) {
        const res = yield firstValueFrom(this.api.postFormData(this.apiUrl, this.formData, false));
        if (res.status) {
          this.url = res.url;
          this.urlChange.emit(this.url);
          setTimeout(() => {
            this.isImageChanging = false;
          }, 200);
          return true;
        }
      }
      return false;
    });
  }
  setFormData(event) {
    console.log(event);
    const inputElement = event.target;
    if (inputElement.files && inputElement.files.length > 0) {
      for (let i = 0; i < inputElement.files.length; i++) {
        this.formData = new FormData();
        const file = inputElement.files[i];
        this.formData.append(this.key, file, file.name);
        console.log(this.formData);
      }
      this.file = inputElement.files[0];
    }
    if (this.automaticSave) {
      this.validateAutomaticSave();
    }
  }
  validateAutomaticSave() {
    if (!this.url) {
      this.upload();
      return;
    }
    const action = this.dialog.show({
      title: "Seguro que deseas hacerlo?",
      body: "Ya existe un archivo subido, si subes uno nuevo, el viejo sera reemplazado, si estas seguro presiona si",
      respNo: "No",
      respYes: "S\xED",
      tipo: "warning"
    });
    const sub = action.subscribe((res) => {
      if (res && res.closedByAgree) {
        this.upload();
        sub.unsubscribe();
      }
      if (res && res.closedByCancelled) {
        this.input.nativeElement = "";
        sub.unsubscribe();
      }
    });
  }
  visualize() {
    if (!this.url)
      return;
    window.open(this.utils.fileUrlInLine(this.url), "_blank");
  }
  isImage(file) {
    if (!file)
      return false;
    const imageMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    return imageMimeTypes.includes(file.type);
  }
  isPDFFile(file) {
    if (this.url && this.url.includes(".pdf"))
      return true;
    if (!file)
      return false;
    const isPDFMimeType = file.type === "application/pdf";
    const isPDFExtension = file.name.toLowerCase().endsWith(".pdf");
    return isPDFMimeType || isPDFExtension;
  }
};
_FileInputComponent.\u0275fac = function FileInputComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileInputComponent)(\u0275\u0275directiveInject(ApiServiceService), \u0275\u0275directiveInject(UtilsService), \u0275\u0275directiveInject(VanillaDialogService));
};
_FileInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileInputComponent, selectors: [["app-file-input"]], viewQuery: function FileInputComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
  }
}, inputs: { accept: "accept", label: "label", multiple: "multiple", key: "key", divClass: "divClass", inputClass: "inputClass", labelClass: "labelClass", apiUrl: "apiUrl", formExtra: "formExtra", url: "url", value: "value", valid: "valid", showDownload: "showDownload", showSimpleDownload: "showSimpleDownload", sm: "sm", id: "id", foreign_key: "foreign_key", isImageChanging: "isImageChanging", automaticSave: "automaticSave", showButton: "showButton", disabled: "disabled" }, outputs: { valueChange: "valueChange", urlChange: "urlChange", validChange: "validChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 8, vars: 14, consts: [["inputFile", ""], [3, "class"], ["type", "file", "id", "formFile", 3, "change", "disabled", "multiple", "accept"], [1, "btn", "btn-secondary", "pointer", "text-light", "fw-bold"], [1, "btn", "btn-primary", 3, "disabled"], [1, "row", "justify-content-center", "mt-2"], [1, "btn", "btn-secondary", "pointer", "text-light", "fw-bold", 3, "click"], [1, "bi", "bi-download"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "col-12", "col-sm-10", "col-md-9", "col-lg-8", "text-center"], [1, "img-fluid", "img-thumbnail", "pointer", 3, "src"], [1, "pdf-container", 3, "src"]], template: function FileInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275conditionalCreate(1, FileInputComponent_Conditional_1_Template, 2, 3, "label", 1);
    \u0275\u0275elementStart(2, "input", 2, 0);
    \u0275\u0275listener("change", function FileInputComponent_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFormData($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, FileInputComponent_Conditional_4_Template, 2, 0, "a", 3);
    \u0275\u0275conditionalCreate(5, FileInputComponent_Conditional_5_Template, 2, 1, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, FileInputComponent_Conditional_6_Template, 2, 1, "div", 5);
    \u0275\u0275conditionalCreate(7, FileInputComponent_Conditional_7_Template, 6, 1, "div", 5);
  }
  if (rf & 2) {
    \u0275\u0275classMap(ctx.divClass ?? "input-group shadow-sm ");
    \u0275\u0275classProp("input-group-sm", ctx.sm);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx.inputClass ?? "form-control");
    \u0275\u0275property("disabled", ctx.disabled)("multiple", ctx.multiple)("accept", ctx.accept);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.url && ctx.showSimpleDownload ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.automaticSave && ctx.showButton ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.url && ctx.showDownload && ctx.isImage(ctx.file) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.url && ctx.showDownload && ctx.isPDFFile(ctx.file) ? 7 : -1);
  }
}, dependencies: [FormsModule], styles: ["\n\n.img-fluid[_ngcontent-%COMP%] {\n  max-height: 20rem;\n  max-width: 20rem;\n  transition: all ease-in-out 0.25s;\n}\n.img-fluid[_ngcontent-%COMP%]:hover {\n  max-height: 30rem;\n  max-width: 30rem;\n  transition: all ease-in-out 0.25s;\n}\n.pdf-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30rem;\n}\n/*# sourceMappingURL=file-input.component.css.map */"] });
var FileInputComponent = _FileInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileInputComponent, [{
    type: Component,
    args: [{ selector: "app-file-input", imports: [
      FormsModule
    ], template: `<div [class]="divClass??'input-group shadow-sm '" [class.input-group-sm]="sm">
  @if (label) {
    <label [class]="labelClass??'input-group-text fw-bold'">
      {{label}}
    </label>
  }
  <input [disabled]="disabled" #inputFile [class]="inputClass??'form-control'" type="file" id="formFile" (change)="setFormData($event)"
    [multiple]="multiple" [accept]="accept">
  @if (url && showSimpleDownload) {
    <a class="btn btn-secondary pointer text-light fw-bold" (click)="visualize()"><i class="bi bi-download"></i></a>
  }
  @if (!automaticSave && showButton) {
    <button class="btn btn-primary" (click)="upload()" [disabled]="(foreign_key && !id) || !formData.has(this.key)">
      Subir
    </button>
  }
</div>
@if (url && showDownload && isImage(file)) {
  <div class="row justify-content-center mt-2">
    @if (isImage(file)) {
      <div class="col-12 col-sm-10 col-md-9 col-lg-8 text-center">
        <label><b>Imagen Subida:</b></label>
        @if (!isImageChanging) {
          <img [src]="utils.fileUrlInLine(url)" class="img-fluid img-thumbnail pointer">
        }
      </div>
    }
  </div>
}
@if (url && showDownload && isPDFFile(file)) {
  <div class="row justify-content-center mt-2">
    <div class="col-12 col-sm-10 col-md-9 col-lg-8 text-center">
      <label><b>PDF:</b></label>
      @if (refreshIframe) {
        <iframe [src]="utils.fileUrlInLineSanatized(url)" class="pdf-container"></iframe>
      }
    </div>
  </div>
}
`, styles: ["/* src/app/shared/file-input/file-input.component.css */\n.img-fluid {\n  max-height: 20rem;\n  max-width: 20rem;\n  transition: all ease-in-out 0.25s;\n}\n.img-fluid:hover {\n  max-height: 30rem;\n  max-width: 30rem;\n  transition: all ease-in-out 0.25s;\n}\n.pdf-container {\n  width: 100%;\n  height: 30rem;\n}\n/*# sourceMappingURL=file-input.component.css.map */\n"] }]
  }], () => [{ type: ApiServiceService }, { type: UtilsService }, { type: VanillaDialogService }], { accept: [{
    type: Input
  }], label: [{
    type: Input
  }], multiple: [{
    type: Input
  }], key: [{
    type: Input
  }], divClass: [{
    type: Input
  }], inputClass: [{
    type: Input
  }], labelClass: [{
    type: Input
  }], apiUrl: [{
    type: Input
  }], formExtra: [{
    type: Input
  }], url: [{
    type: Input
  }], value: [{
    type: Input
  }], valueChange: [{
    type: Output
  }], urlChange: [{
    type: Output
  }], valid: [{
    type: Input
  }], validChange: [{
    type: Output
  }], showDownload: [{
    type: Input
  }], showSimpleDownload: [{
    type: Input
  }], sm: [{
    type: Input
  }], id: [{
    type: Input
  }], foreign_key: [{
    type: Input
  }], isImageChanging: [{
    type: Input
  }], automaticSave: [{
    type: Input
  }], showButton: [{
    type: Input
  }], disabled: [{
    type: Input
  }], input: [{
    type: ViewChild,
    args: ["inputFile"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileInputComponent, { className: "FileInputComponent", filePath: "src/app/shared/file-input/file-input.component.ts", lineNumber: 41 });
})();

export {
  FileInputComponent
};
//# sourceMappingURL=chunk-5BMNPTRZ.js.map
