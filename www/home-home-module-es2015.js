(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\" scroll-y=\"true\" scroll-x=\"false\">\r\n  <div class=\"container\">\r\n    <div class=\"content-text\">\r\n      <span class=\"title\">NegociApp</span>\r\n      <span class=\"text\">Bienvenido a NegociApp</span>\r\n      <span class=\"text\">una gran comunidad de servicios y arriendos en tu ciudad</span>\r\n    </div>\r\n    <div class=\"form\">\r\n      <span class=\"text\">Ingresa tus datos personales</span>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"next()\">\r\n        <input \r\n          class=\"input\" \r\n          placeholder=\"Número de identificación\" \r\n          type=\"number\" \r\n          (blur)=\"isLogged()\" \r\n          formControlName=\"id\" \r\n          [ngClass]=\"{'invalid': validateinput('id')}\"\r\n        />\r\n        <input \r\n          class=\"input\" \r\n          placeholder=\"Nombres y apellidos\" \r\n          formControlName=\"name\" \r\n          [ngClass]=\"{'invalid': validateinput('name')}\"\r\n        />\r\n        <input \r\n          class=\"input\" \r\n          placeholder=\"Email\" \r\n          type=\"email\" \r\n          formControlName=\"email\" \r\n          [ngClass]=\"{'invalid': validateinput('email')}\"\r\n        />\r\n        <input \r\n          class=\"input\" \r\n          placeholder=\"Numero de Telefono\" \r\n          type=\"number\" \r\n          formControlName=\"tel\" \r\n          [ngClass]=\"{'invalid': validateinput('tel')}\"\r\n        />\r\n        <ion-select placeholder=\"Tipo de identificación\" formControlName=\"typeId\" [ngClass]=\"{'invalid': validateinput('typeId')}\">\r\n          <ion-select-option [value]=\"type.value\" *ngFor=\"let type of identificationType\">{{type.name}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-select placeholder=\"Ciudad\" formControlName=\"city\" [ngClass]=\"{'invalid': validateinput('city')}\">\r\n          <ion-select-option [value]=\"city.value\" *ngFor=\"let city of cities\">{{city.name}}</ion-select-option>\r\n        </ion-select>\r\n        <div class=\"submit\">\r\n          <ion-button color=\"secondary\" type=\"submit\" shape=\"round\" expand=\"full\">Siguiente</ion-button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
    {
        path: 'bienvenida',
        loadChildren: () => __webpack_require__.e(/*! import() | bienvenida-bienvenida-module */ "bienvenida-bienvenida-module").then(__webpack_require__.bind(null, /*! ./bienvenida/bienvenida.module */ "./src/app/home/bienvenida/bienvenida.module.ts")).then(m => m.BienvenidaPageModule)
    },
    {
        path: 'celular',
        loadChildren: () => __webpack_require__.e(/*! import() | celular-celular-module */ "celular-celular-module").then(__webpack_require__.bind(null, /*! ./celular/celular.module */ "./src/app/home/celular/celular.module.ts")).then(m => m.CelularPageModule)
    },
    {
        path: 'sms',
        loadChildren: () => __webpack_require__.e(/*! import() | sms-sms-module */ "sms-sms-module").then(__webpack_require__.bind(null, /*! ./sms/sms.module */ "./src/app/home/sms/sms.module.ts")).then(m => m.SmsPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 16px;\n  width: 100%;\n  height: 100%;\n  color: var(--ion-color-light);\n  display: flex;\n  align-items: center;\n  justify-content: stretch;\n  flex-direction: column;\n}\n\n.content-text {\n  width: 100%;\n  margin-bottom: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.content-text .title {\n  font-size: 28px;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n\n.content-text .text {\n  text-align: center;\n  font-size: 18px;\n}\n\n.form {\n  width: 100%;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.form .text {\n  text-align: center;\n  font-size: 18px;\n}\n\n.form form {\n  margin-top: 2rem;\n}\n\n.form form .input {\n  width: 100%;\n  margin: 0 auto;\n  background: var(--ion-color-blue-primary);\n  border: 1px solid var(--ion-color-light);\n  color: var(--ion-color-light);\n  border-radius: 1.5em;\n  margin-bottom: 16px;\n  padding: 10px 0px 8px 8px;\n  text-align: center;\n}\n\n.form form .input.invalid {\n  border: 1px solid var(--ion-color-danger);\n}\n\n.form form .input.select {\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n\n.form form .input.select ion-icon {\n  position: absolute;\n  right: 0px;\n}\n\n.form form .input.button {\n  padding: 0px;\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.form form .input:focus {\n  outline: none;\n}\n\n.form form .input::-webkit-input-placeholder {\n  color: var(--ion-color-light);\n  opacity: 0.6;\n}\n\n.form form .input::-moz-placeholder {\n  color: var(--ion-color-light);\n  opacity: 0.6;\n}\n\n.form form .input::-ms-input-placeholder {\n  color: var(--ion-color-light);\n  opacity: 0.6;\n}\n\n.form form .input::placeholder {\n  color: var(--ion-color-light);\n  opacity: 0.6;\n}\n\n.form form ion-select {\n  --placeholder-opacity: 0.6;\n  --padding-end: 16px;\n  background: var(--ion-color-blue-primary);\n  color: var(--ion-color-light);\n  border: 1px solid var(--ion-color-light);\n  border-radius: 1.5em;\n  margin-bottom: 16px;\n  text-align: center;\n}\n\n.form form ion-select.invalid {\n  border: 1px solid var(--ion-color-danger);\n}\n\n.form form .submit {\n  width: 100%;\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n\n.form form .submit ion-button {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcSW9uaWNcXE5lZ29jaWFwcC1hbGxcXE5lZ29jaWFwcDIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL0Q6XFxJb25pY1xcTmVnb2NpYXBwLWFsbFxcTmVnb2NpYXBwMi9zcmNcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUNMQSxhQUFBO0VBQ0EsbUJES2M7RUNKZCx3QkRJc0I7RUNIdEIsc0JERytCO0FFRWpDOztBRkNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VDWEEsYUFBQTtFQUNBLG1CRFdjO0VDVmQsdUJEVXNCO0VDVHRCLHNCRFM4QjtBRUtoQzs7QUZKRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FFTUo7O0FGSkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUVNSjs7QUZGQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQzFCQSxhQUFBO0VBQ0EsbUJEMEJjO0VDekJkLHVCRHlCc0I7RUN4QnRCLHNCRHdCOEI7QUVRaEM7O0FGUEU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUVTSjs7QUZORTtFQUNFLGdCQUFBO0FFUUo7O0FGUEk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FFU047O0FGUE07RUFDRSx5Q0FBQTtBRVNSOztBRk5NO0VBQ0UsbUJBQUE7RUNuRE4sYUFBQTtFQUNBLG1CRG1Eb0I7RUNsRHBCLDJCQUhpRDtFQUlqRCwyQkRpRHdDO0FFVzFDOztBRlRRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FFV1Y7O0FGUE07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FFU1I7O0FGTk07RUFDRSxhQUFBO0FFUVI7O0FGTE07RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUVPUjs7QUZUTTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBRU9SOztBRlRNO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FFT1I7O0FGVE07RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUVPUjs7QUZISTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUVLTjs7QUZITTtFQUNFLHlDQUFBO0FFS1I7O0FGREk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUM3RkosYUFBQTtFQUNBLG1CRDZGa0I7RUM1RmxCLHVCRDRGMEI7RUMzRjFCLG1CQUp5RTtBQ3FHM0U7O0FGTE07RUFDRSxVQUFBO0FFT1IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdGhlbWUvbWl4aW4uc2Nzcyc7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgc3RyZXRjaCwgY29sdW1uKTtcclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgY2VudGVyLCBjb2x1bW4pO1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIEBpbmNsdWRlIGZsZXgoY2VudGVyLCBjZW50ZXIsIGNvbHVtbik7XHJcbiAgLnRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgLmlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmx1ZS1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweCA4cHggOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICYuaW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJi5zZWxlY3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleChjZW50ZXIsICRkaXJlY3Rpb246IHJvdy1yZXZlcnNlKTtcclxuICBcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmOjpwbGFjZWhvbGRlciB7IFxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjsgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNjtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJsdWUtcHJpbWFyeSk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgICAmLmludmFsaWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Ym1pdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDE2cHggMHB4O1xyXG4gICAgICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgY2VudGVyKTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiQG1peGluIGZsZXgoJGFsaWduSXRlbXM6IHN0cmV0Y2gsICRqdXN0aWZ5Q29udGVudDogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogcm93KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduSXRlbXM7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeUNvbnRlbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93LWJsYWNrIHtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG5AbWl4aW4gYm94LXNoYWRvdy1jYXJkIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG5AbWl4aW4gYm94LXNoYWRvdy1kZXRhaWwge1xyXG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDFweCAwcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRlbnQtdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250ZW50LXRleHQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jb250ZW50LXRleHQgLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybSAudGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZvcm0gZm9ybSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4uZm9ybSBmb3JtIC5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJsdWUtcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogMTBweCAwcHggOHB4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvcm0gZm9ybSAuaW5wdXQuaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuLmZvcm0gZm9ybSAuaW5wdXQuc2VsZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uZm9ybSBmb3JtIC5pbnB1dC5zZWxlY3QgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG4uZm9ybSBmb3JtIC5pbnB1dC5idXR0b24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmZvcm0gZm9ybSAuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0gZm9ybSAuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5mb3JtIGZvcm0gaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC42O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmx1ZS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybSBmb3JtIGlvbi1zZWxlY3QuaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuLmZvcm0gZm9ybSAuc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTZweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZvcm0gZm9ybSAuc3VibWl0IGlvbi1idXR0b24ge1xuICB3aWR0aDogNzAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/firebase.service */ "./src/app/core/services/firebase.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








const { Geolocation, Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
const level = [
    { isChecked: false, value: 'Especializado' },
    { isChecked: false, value: 'Profesional' },
    { isChecked: false, value: 'Tecnologo' },
    { isChecked: false, value: 'Tecnico' },
    { isChecked: false, value: 'Independiente' },
];
const path = { name: '', path: '', url: '' };
let HomePage = class HomePage {
    constructor(router, formBuilder, firebaseService, loadingController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingController = loadingController;
        this.identificationType = [
            { name: 'Cedula de ciudadanía', value: 'Cedula' },
            { name: 'Cedula extranjera', value: 'CedulaExtranjera' },
            { name: 'Pasaporte', value: 'Pasaporte' }
        ];
        this.cities = [
            { name: 'Cartagena', value: 'Cartagena' },
            { name: 'Barranquilla', value: 'Barranquilla' },
            { name: 'Montería', value: 'Montería' },
            { name: 'Santa Marta', value: 'Santa Marta' },
            { name: 'Sincelejo', value: 'Sincelejo' },
            { name: 'Riohacha', value: 'Riohacha' },
            { name: 'Valledupar', value: 'Valledupar' }
        ];
        this.registerData = {
            uniqueid: null,
            prestador: true,
            service: true,
            rent: true,
            shop: true,
            miders: { status: false, categories: [], levels: level, rut: path },
            midera: { status: false, categories: [], levels: level, rut: path },
            miderv: { status: false, categories: [], levels: level, rut: path },
            lat: null,
            lng: null,
            active: true,
            nameToSearch: null,
            rate: []
        };
        this.initForm();
    }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem('NEGOCIAPP_LOGGED'))) {
            this.router.navigateByUrl('/inicio');
        }
        this.obtenerCoordenadas();
    }
    initForm(data) {
        this.form = this.formBuilder.group({
            id: [ false || (data === null || data === void 0 ? void 0 : data.id), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: [ false || (data === null || data === void 0 ? void 0 : data.name), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [ false || (data === null || data === void 0 ? void 0 : data.name), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tel: [ false || (data === null || data === void 0 ? void 0 : data.tel), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typeId: [ false || (data === null || data === void 0 ? void 0 : data.typeId), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: [ false || (data === null || data === void 0 ? void 0 : data.city), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    obtenerCoordenadas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
            this.registerData.lat = coordinates.coords.latitude;
            this.registerData.lng = coordinates.coords.longitude;
        });
    }
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.validators()) {
                const loading = yield this.loadingController.create({
                    message: 'Espere por favor...',
                });
                yield loading.present();
                const coordinates = yield Geolocation.getCurrentPosition();
                const idTel = yield Device.getInfo();
                this.registerData.uniqueid = idTel.uuid;
                this.registerData.lat = coordinates.coords.latitude;
                this.registerData.lng = coordinates.coords.longitude;
                this.registerData.nameToSearch = this.registerData.name;
                this.registerData.onesignal = JSON.parse(localStorage.getItem('NEGOCIAPP_ONESIGNALUI'));
                const data = Object.assign(Object.assign({}, this.form.value), this.registerData);
                this.firebaseService.save('usuario-app', data)
                    .then(() => {
                    localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(data));
                    this.router.navigateByUrl('/home/bienvenida');
                    loading.dismiss();
                }).catch(err => sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Error', err.message, 'error'));
            }
        });
    }
    isLogged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.firebaseService.obtenerByContactoIDPromise((this.form.get('id').value));
            if (data.length > 0) {
                localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(data[0]));
                localStorage.setItem('NEGOCIAPP_LOGGED', JSON.stringify(true));
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('', 'Ya te encontrabas registrado en nuestra plataforma. Bienvenido!', 'success');
                localStorage.setItem('NEGOCIAPP_RELOGGED', JSON.stringify(true));
                this.router.navigateByUrl('/home/bienvenida');
            }
        });
    }
    validateinput(param) {
        return this.form.get(param).invalid && this.form.get(param).touched;
    }
    validators() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let coord = true;
            Object.values(this.form.controls).forEach(item => {
                if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]) {
                    item.markAsTouched();
                }
            });
            try {
                this.coordinates = yield Geolocation.getCurrentPosition();
                coord = false;
            }
            catch (_a) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('', 'Debes tener el GPS activo', 'warning');
            }
            return this.form.invalid || coord ? false : true;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map