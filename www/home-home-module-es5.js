function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen=\"true\" scroll-y=\"true\" scroll-x=\"false\">\r\n  <ng-container *ngIf=\"!isLoading; else isLoadingTemplate\">\r\n    <div class=\"container\">\r\n      <div class=\"content-text\">\r\n        <span class=\"title\">NegociApp</span>\r\n        <span class=\"text\">Bienvenido a NegociApp</span>\r\n        <span class=\"text\">una gran comunidad de servicios y arriendos en tu ciudad</span>\r\n      </div>\r\n      <div class=\"form\">\r\n        <span class=\"text\">Ingresa tus datos personales</span>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"next()\">\r\n          <!-- Type identification -->\r\n          <ion-select placeholder=\"Tipo de identificación\" formControlName=\"typeId\" [ngClass]=\"{'invalid': validateinput('typeId')}\">\r\n            <ion-select-option [value]=\"type.value\" *ngFor=\"let type of identificationType\">{{type.name}}</ion-select-option>\r\n          </ion-select>\r\n          <!-- Identifiation number -->\r\n          <input \r\n            class=\"input\" \r\n            placeholder=\"Número de identificación\" \r\n            type=\"number\" \r\n            (blur)=\"isLogged()\" \r\n            formControlName=\"num_ide\" \r\n            [ngClass]=\"{'invalid': validateinput('num_ide')}\"\r\n          />\r\n          <!-- Names -->\r\n          <input \r\n            class=\"input\" \r\n            placeholder=\"Nombres y apellidos\" \r\n            formControlName=\"name\" \r\n            [ngClass]=\"{'invalid': validateinput('name')}\"\r\n          />\r\n          <!-- Email -->\r\n          <input \r\n            class=\"input\" \r\n            placeholder=\"Email\" \r\n            type=\"email\" \r\n            formControlName=\"email\" \r\n            [ngClass]=\"{'invalid': validateinput('email')}\"\r\n          />\r\n          <!-- Number phone -->\r\n          <!-- <input \r\n            class=\"input\" \r\n            placeholder=\"Numero de Telefono\" \r\n            type=\"number\" \r\n            formControlName=\"tel\" \r\n            [ngClass]=\"{'invalid': validateinput('tel')}\"\r\n          /> -->\r\n          <!-- City -->\r\n          <ion-select placeholder=\"Ciudad\" formControlName=\"city\" [ngClass]=\"{'invalid': validateinput('city')}\">\r\n            <ion-select-option [value]=\"city.value\" *ngFor=\"let city of cities\">{{city.name}}</ion-select-option>\r\n          </ion-select>\r\n          <!-- Input File -->\r\n          <!-- <div class=\"input file\" [ngClass]=\"{'invalidImg': isValidImg}\">\r\n            <label for=\"foto1\">Seleccionar foto perfil</label>\r\n            <label class=\"text-file\">{{filePhoto?.name}}</label>\r\n            <input\r\n              id=\"foto1\" \r\n              style=\"display: none;\" \r\n              type=\"file\" \r\n              accept=\"image/*\" \r\n              (change)=\"selectImg($event)\"\r\n              />\r\n          </div> -->\r\n          <!-- Submit -->\r\n          <div class=\"submit\">\r\n            <ion-button \r\n              color=\"secondary\" \r\n              type=\"submit\" \r\n              shape=\"round\" \r\n              expand=\"full\" \r\n              [disabled]=\"form.invalid\"\r\n            >\r\n              Siguiente\r\n            </ion-button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #isLoadingTemplate>\r\n    <app-loading></app-loading>\r\n  </ng-template>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ux/loading/loading.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ux/loading/loading.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUxLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loading-container\">\n  <ion-icon name=\"refresh-outline\"></ion-icon>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/home/entities/home.types.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/entities/home.types.ts ***!
    \*********************************************/

  /*! exports provided: StatusUserLoggin */

  /***/
  function srcAppHomeEntitiesHomeTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusUserLoggin", function () {
      return StatusUserLoggin;
    });

    var StatusUserLoggin = {
      LOGGED: 'logged',
      RELOGGED: 'relogged'
    };
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }, {
      path: 'bienvenida/:status',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bienvenida-bienvenida-module */
        "bienvenida-bienvenida-module").then(__webpack_require__.bind(null,
        /*! ./bienvenida/bienvenida.module */
        "./src/app/home/bienvenida/bienvenida.module.ts")).then(function (m) {
          return m.BienvenidaPageModule;
        });
      }
    }, {
      path: 'celular',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | celular-celular-module */
        "celular-celular-module").then(__webpack_require__.bind(null,
        /*! ./celular/celular.module */
        "./src/app/home/celular/celular.module.ts")).then(function (m) {
          return m.CelularPageModule;
        });
      }
    }, {
      path: 'sms',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sms-sms-module */
        "sms-sms-module").then(__webpack_require__.bind(null,
        /*! ./sms/sms.module */
        "./src/app/home/sms/sms.module.ts")).then(function (m) {
          return m.SmsPageModule;
        });
      }
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _ux_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../ux/loading/loading.module */
    "./src/app/ux/loading/loading.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _ux_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  padding: 16px;\n  width: 100%;\n  height: 100%;\n  color: var(--ion-color-light);\n  display: flex;\n  align-items: center;\n  justify-content: stretch;\n  flex-direction: column;\n}\n\n.content-text {\n  width: 100%;\n  margin-bottom: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.content-text .title {\n  font-size: 28px;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n\n.content-text .text {\n  text-align: center;\n  font-size: 18px;\n}\n\n.form {\n  width: 100%;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.form .text {\n  text-align: center;\n  font-size: 18px;\n}\n\n.form form {\n  margin-top: 2rem;\n}\n\n.form form .input {\n  width: 100%;\n  margin: 0 auto;\n  background: var(--ion-color-blue-primary);\n  border: 1px solid var(--ion-color-light);\n  color: var(--ion-color-light);\n  border-radius: 1.5em;\n  margin-bottom: 16px;\n  padding: 10px 0px 8px 8px;\n  text-align: center;\n  min-height: 40px;\n  max-height: 40px;\n}\n\n.form form .input.file {\n  min-height: 40px;\n  max-height: 40px;\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.form form .input.file .text-file {\n  font-size: 12px;\n  color: var(--ion-color-light);\n}\n\n.form form .input.invalid {\n  border: 1px solid var(--ion-color-danger);\n}\n\n.form form .input.invalidImg {\n  border: 1px solid var(--ion-color-warning);\n}\n\n.form form .input.select {\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n\n.form form .input.select ion-icon {\n  position: absolute;\n  right: 0px;\n}\n\n.form form .input.button {\n  padding: 0px;\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.form form .input:focus {\n  outline: none;\n}\n\n.form form .input::-webkit-input-placeholder {\n  color: var(--ion-color-light);\n  opacity: 0.6;\n}\n\n.form form .input::-moz-placeholder {\n  color: var(--ion-color-light);\n  opacity: 0.6;\n}\n\n.form form .input::-ms-input-placeholder {\n  color: var(--ion-color-light);\n  opacity: 0.6;\n}\n\n.form form .input::placeholder {\n  color: var(--ion-color-light);\n  opacity: 0.6;\n}\n\n.form form ion-select {\n  --placeholder-opacity: 0.6;\n  --padding-end: 16px;\n  background: var(--ion-color-blue-primary);\n  color: var(--ion-color-light);\n  border: 1px solid var(--ion-color-light);\n  border-radius: 1.5em;\n  margin-bottom: 16px;\n  text-align: center;\n}\n\n.form form ion-select.invalid {\n  border: 1px solid var(--ion-color-danger);\n}\n\n.form form .submit {\n  width: 100%;\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n\n.form form .submit ion-button {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcRFxcSW9uaWNcXE5lZ29jaWFwcC1hbGxcXE5lZ29jaWFwcDIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxEXFxJb25pY1xcTmVnb2NpYXBwLWFsbFxcTmVnb2NpYXBwMi9zcmNcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUNMQSxhQUFBO0VBQ0EsbUJES2M7RUNKZCx3QkRJc0I7RUNIdEIsc0JERytCO0FFRWpDOztBRkNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VDWEEsYUFBQTtFQUNBLG1CRFdjO0VDVmQsdUJEVXNCO0VDVHRCLHNCRFM4QjtBRUtoQzs7QUZKRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FFTUo7O0FGSkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUVNSjs7QUZGQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQzFCQSxhQUFBO0VBQ0EsbUJEMEJjO0VDekJkLHVCRHlCc0I7RUN4QnRCLHNCRHdCOEI7QUVRaEM7O0FGUEU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUVTSjs7QUZORTtFQUNFLGdCQUFBO0FFUUo7O0FGUEk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRVNOOztBRlBNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUNuRE4sYUFBQTtFQUNBLG1CRG1Eb0I7RUNsRHBCLHVCRGtENEI7RUNqRDVCLHNCRGlEb0M7QUVZdEM7O0FGWFE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUVhVjs7QUZUTTtFQUNFLHlDQUFBO0FFV1I7O0FGUk07RUFDRSwwQ0FBQTtBRVVSOztBRlBNO0VBQ0UsbUJBQUE7RUNwRU4sYUFBQTtFQUNBLG1CRG9Fb0I7RUNuRXBCLDJCQUhpRDtFQUlqRCwyQkRrRXdDO0FFWTFDOztBRlZRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FFWVY7O0FGUk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FFVVI7O0FGUE07RUFDRSxhQUFBO0FFU1I7O0FGTk07RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUVRUjs7QUZWTTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBRVFSOztBRlZNO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FFUVI7O0FGVk07RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUVRUjs7QUZKSTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUVNTjs7QUZKTTtFQUNFLHlDQUFBO0FFTVI7O0FGRkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUM5R0osYUFBQTtFQUNBLG1CRDhHa0I7RUM3R2xCLHVCRDZHMEI7RUM1RzFCLG1CQUp5RTtBQ3VIM0U7O0FGTk07RUFDRSxVQUFBO0FFUVIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdGhlbWUvbWl4aW4uc2Nzcyc7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgc3RyZXRjaCwgY29sdW1uKTtcclxufVxyXG5cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgY2VudGVyLCBjb2x1bW4pO1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIEBpbmNsdWRlIGZsZXgoY2VudGVyLCBjZW50ZXIsIGNvbHVtbik7XHJcbiAgLnRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgZm9ybSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgLmlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmx1ZS1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweCA4cHggOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAmLmZpbGUge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleChjZW50ZXIsIGNlbnRlciwgY29sdW1uKTtcclxuICAgICAgICAudGV4dC1maWxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmLmludmFsaWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmludmFsaWRJbWcge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmLnNlbGVjdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgJGRpcmVjdGlvbjogcm93LXJldmVyc2UpO1xyXG4gIFxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICYuYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHsgXHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC42OyBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC42O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmx1ZS1wcmltYXJ5KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgICYuaW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgoY2VudGVyLCBjZW50ZXIpO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJAbWl4aW4gZmxleCgkYWxpZ25JdGVtczogc3RyZXRjaCwgJGp1c3RpZnlDb250ZW50OiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Q29udGVudDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3ctYmxhY2sge1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93LWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93LWRldGFpbCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggMXB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudC10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRlbnQtdGV4dCAudGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbnRlbnQtdGV4dCAudGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtIC50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9ybSBmb3JtIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5mb3JtIGZvcm0gLmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmx1ZS1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCA4cHggOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG4uZm9ybSBmb3JtIC5pbnB1dC5maWxlIHtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgb3BhY2l0eTogMC42O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtIGZvcm0gLmlucHV0LmZpbGUgLnRleHQtZmlsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4uZm9ybSBmb3JtIC5pbnB1dC5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG4uZm9ybSBmb3JtIC5pbnB1dC5pbnZhbGlkSW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuLmZvcm0gZm9ybSAuaW5wdXQuc2VsZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uZm9ybSBmb3JtIC5pbnB1dC5zZWxlY3QgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG4uZm9ybSBmb3JtIC5pbnB1dC5idXR0b24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmZvcm0gZm9ybSAuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0gZm9ybSAuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5mb3JtIGZvcm0gaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC42O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmx1ZS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybSBmb3JtIGlvbi1zZWxlY3QuaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuLmZvcm0gZm9ybSAuc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTZweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmZvcm0gZm9ybSAuc3VibWl0IGlvbi1idXR0b24ge1xuICB3aWR0aDogNzAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core/services/firebase.service */
    "./src/app/core/services/firebase.service.ts");
    /* harmony import */


    var _constans_constans_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../constans/constans-global */
    "./src/app/constans/constans-global.ts");
    /* harmony import */


    var _entities_home_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./entities/home.types */
    "./src/app/home/entities/home.types.ts");
    /* harmony import */


    var _constans_localStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../constans/localStorage */
    "./src/app/constans/localStorage.ts");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        Geolocation = _capacitor_core__WEBP.Geolocation,
        Device = _capacitor_core__WEBP.Device;
    var path = {
      name: '',
      path: '',
      url: ''
    };

    var HomePage = /*#__PURE__*/function () {
      function HomePage(router, formBuilder, firebaseService) {
        _classCallCheck(this, HomePage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.identificationType = [{
          name: 'Cedula de ciudadanía',
          value: 'Cedula'
        }, {
          name: 'Cedula extranjera',
          value: 'CedulaExtranjera'
        }, {
          name: 'Pasaporte',
          value: 'Pasaporte'
        }];
        this.cities = _constans_constans_global__WEBPACK_IMPORTED_MODULE_7__["CITIES"];
        this.registerData = {
          uniqueid: null,
          prestador: true,
          service: true,
          rent: true,
          shop: true,
          miders: {
            status: false,
            categories: [],
            typesService: [],
            cities: [],
            rut: path
          },
          midera: {
            status: false,
            categories: [],
            typesService: [],
            cities: [],
            rut: path
          },
          miderv: {
            status: false,
            categories: [],
            typesService: [],
            cities: [],
            rut: path
          },
          lat: null,
          lng: null,
          active: true,
          nameToSearch: null,
          rate: [],
          photoUrl: '',
          photoRef: ''
        };
        this.filePhoto = null;
        this.isLoading = true;
        this.isUserLogged = false;
        this.initForm();
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isUserLogged = JSON.parse(localStorage.getItem(_constans_localStorage__WEBPACK_IMPORTED_MODULE_9__["LOCALSTORAGE"].LOGGED));

          if (this.isUserLogged) {
            this.router.navigateByUrl('/inicio');
          } else {
            this.isLoading = false;
            this.obtenerCoordenadas();
          }
        }
      }, {
        key: "initForm",
        value: function initForm(data) {
          this.form = this.formBuilder.group({
            num_ide: [false || (data === null || data === void 0 ? void 0 : data.id), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]*$')]],
            name: [false || (data === null || data === void 0 ? void 0 : data.name), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
            email: [false || (data === null || data === void 0 ? void 0 : data.name), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
            // tel: ['' || data?.tel, [Validators.required, Validators.pattern('^[0-9]*$')]],
            typeId: [false || (data === null || data === void 0 ? void 0 : data.typeId), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city: [false || (data === null || data === void 0 ? void 0 : data.city), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        } // public selectImg(file): void {
        //   if (file.target.files[0]) {
        //     this.filePhoto = file.target.files[0];
        //     const reader = new FileReader()
        //     reader.onload = (e: any) => {
        //       Swal.fire({
        //         text: 'Imagen seleccionada',
        //         imageUrl: e.target.result,
        //         imageAlt: 'The uploaded picture'
        //       });
        //     };
        //     reader.readAsDataURL(this.filePhoto);
        //   } else {
        //     this.filePhoto = null;
        //   }
        // }

      }, {
        key: "obtenerCoordenadas",
        value: function obtenerCoordenadas() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var coordinates;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Geolocation.getCurrentPosition();

                  case 2:
                    coordinates = _context.sent;
                    this.registerData.lat = coordinates.coords.latitude;
                    this.registerData.lng = coordinates.coords.longitude;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "isValidIdUser",
        value: function isValidIdUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.firebaseService.obtenerByContactoIDPromise(this.form.get('num_ide').value);

                  case 2:
                    data = _context2.sent;
                    return _context2.abrupt("return", data[0]);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var user;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.isValidIdUser();

                  case 2:
                    user = _context3.sent;

                    if (user) {
                      if (user.sessionActive) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Esta cuenta ya esta activa en otro dispositivo, por favor cierre la sesion para inicar en este dispositivo', 'warning');
                      } else {
                        localStorage.setItem(_constans_localStorage__WEBPACK_IMPORTED_MODULE_9__["LOCALSTORAGE"].USER, JSON.stringify(user));
                        localStorage.setItem(_constans_localStorage__WEBPACK_IMPORTED_MODULE_9__["LOCALSTORAGE"].LOGGED, JSON.stringify(false));
                        localStorage.setItem(_constans_localStorage__WEBPACK_IMPORTED_MODULE_9__["LOCALSTORAGE"].RELOGGED, JSON.stringify(true));
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Ya te encontrabas registrado en nuestra plataforma. Bienvenido!', 'success');
                        this.form.reset();
                        this.router.navigateByUrl("/home/bienvenida/".concat(_entities_home_types__WEBPACK_IMPORTED_MODULE_8__["StatusUserLoggin"].RELOGGED));
                      }
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "validateinput",
        value: function validateinput(param) {
          return this.form.get(param).invalid && this.form.get(param).touched;
        }
      }, {
        key: "validators",
        value: function validators() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var coord;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    coord = true;
                    Object.values(this.form.controls).forEach(function (item) {
                      if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]) {
                        item.markAsTouched();
                      }
                    });
                    _context4.prev = 2;
                    _context4.next = 5;
                    return Geolocation.getCurrentPosition();

                  case 5:
                    this.coordinates = _context4.sent;
                    coord = false;
                    _context4.next = 12;
                    break;

                  case 9:
                    _context4.prev = 9;
                    _context4.t0 = _context4["catch"](2);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Debes tener el GPS activo', 'warning');

                  case 12:
                    return _context4.abrupt("return", this.form.invalid || coord === null ? false : true);

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[2, 9]]);
          }));
        } // private async uploadImg(): Promise<void> {
        //   this.registerData.photoRef = `user-profile/${this.registerData.uniqueid}/foto/${this.filePhoto.name}`;
        //   await this.storage.upload(this.filePhoto, this.registerData.photoRef);
        //   await this.storage.getUrlFileInfo(this.registerData.photoRef).then((url) => this.registerData.photoUrl = url);
        // }

      }, {
        key: "next",
        value: function next() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var user, coordinates, idTel, data;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.isLoading = true;
                    _context5.next = 3;
                    return this.validators();

                  case 3:
                    if (!_context5.sent) {
                      _context5.next = 28;
                      break;
                    }

                    _context5.next = 6;
                    return this.isValidIdUser();

                  case 6:
                    user = _context5.sent;

                    if (!user) {
                      _context5.next = 12;
                      break;
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('', 'Ya existe una cuenta con esta cedula', 'warning');
                    this.isLoading = false;
                    _context5.next = 28;
                    break;

                  case 12:
                    _context5.next = 14;
                    return Geolocation.getCurrentPosition();

                  case 14:
                    coordinates = _context5.sent;
                    _context5.next = 17;
                    return Device.getInfo();

                  case 17:
                    idTel = _context5.sent;
                    this.registerData.uniqueid = idTel.uuid;
                    this.registerData.lat = coordinates.coords.latitude;
                    this.registerData.lng = coordinates.coords.longitude;
                    this.registerData.nameToSearch = this.registerData.name;
                    this.registerData.onesignal = JSON.parse(localStorage.getItem('NEGOCIAPP_ONESIGNALUI')); // await this.uploadImg();

                    data = Object.assign(Object.assign({}, this.form.value), this.registerData);
                    localStorage.setItem(_constans_localStorage__WEBPACK_IMPORTED_MODULE_9__["LOCALSTORAGE"].USER, JSON.stringify(data));
                    this.isLoading = false;
                    this.form.reset();
                    this.router.navigateByUrl("/home/bienvenida/".concat(_entities_home_types__WEBPACK_IMPORTED_MODULE_8__["StatusUserLoggin"].LOGGED));

                  case 28:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "isValidImg",
        get: function get() {
          return this.filePhoto === null ? true : false;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/ux/loading/loading.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/ux/loading/loading.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUxLoadingLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loading-container {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.loading-container ion-icon {\n  font-size: 3rem;\n  color: var(--ion-color-light);\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXgvbG9hZGluZy9DOlxcRFxcSW9uaWNcXE5lZ29jaWFwcC1hbGxcXE5lZ29jaWFwcDIvc3JjXFxhcHBcXHV4XFxsb2FkaW5nXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91eC9sb2FkaW5nL0M6XFxEXFxJb25pY1xcTmVnb2NpYXBwLWFsbFxcTmVnb2NpYXBwMi9zcmNcXHRoZW1lXFxtaXhpbi5zY3NzIiwic3JjL2FwcC91eC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQ0hBLGFBQUE7RUFDQSxtQkRHYztFQ0ZkLHVCREVzQjtFQ0R0QixtQkFKeUU7QUNPM0U7QUZERTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUVHSjtBRkNBO0VBQ0U7SUFDRSx1QkFBQTtFRUVGO0VGQ0E7SUFDRSx5QkFBQTtFRUNGO0FBQ0Y7QUZSQTtFQUNFO0lBQ0UsdUJBQUE7RUVFRjtFRkNBO0lBQ0UseUJBQUE7RUVDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXgvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGluLnNjc3NcIjtcclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBmbGV4KGNlbnRlciwgY2VudGVyKTtcclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gZmxleCgkYWxpZ25JdGVtczogc3RyZXRjaCwgJGp1c3RpZnlDb250ZW50OiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Q29udGVudDtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3ctYmxhY2sge1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93LWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93LWRldGFpbCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggMXB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufSIsIi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5sb2FkaW5nLWNvbnRhaW5lciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ux/loading/loading.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/ux/loading/loading.component.ts ***!
    \*************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppUxLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingComponent;
    }();

    LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loading',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ux/loading/loading.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./loading.component.scss */
      "./src/app/ux/loading/loading.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoadingComponent);
    /***/
  },

  /***/
  "./src/app/ux/loading/loading.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/ux/loading/loading.module.ts ***!
    \**********************************************/

  /*! exports provided: LoadingModule */

  /***/
  function srcAppUxLoadingLoadingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingModule", function () {
      return LoadingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loading.component */
    "./src/app/ux/loading/loading.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var LoadingModule = function LoadingModule() {
      _classCallCheck(this, LoadingModule);
    };

    LoadingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]]
    })], LoadingModule);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map