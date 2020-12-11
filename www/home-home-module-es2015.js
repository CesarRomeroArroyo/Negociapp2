(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding login background-image\">\r\n\r\n  <h1 class=\"ion-text-center login__title\">NegociApp</h1>\r\n  <article class=\"login__welcome ion-text-center\">\r\n    <p class=\"ion-text-center login__welcome__text\">Bienvenido a NegociApp</p>\r\n    <p class=\"login__welcome__text\">\r\n      una gran comunidad de servicios\r\n      y arriendos en tu ciudad</p>\r\n  </article>\r\n  <p class=\"login__welcome__text-form ion-text-center\">Ingresa tus datos personales</p>\r\n  \r\n<div class=\"form-container\">\r\n\r\n  <ion-select name=\"tip_ide\" [(ngModel)]=\"registerData.tip_ide\" class=\"login-select\" placeholder=\"Tipo de identificación\">\r\n    <ion-select-option value=\"Cedula\">Cédula de ciudadanía</ion-select-option>\r\n    <ion-select-option value=\"Cedula Extranjeria\">Cédula de extranjería</ion-select-option>\r\n    <ion-select-option value=\"Pasaporte\">Pasaporte</ion-select-option>\r\n  </ion-select>\r\n\r\n  <ion-input type=\"number\" id=\"num_ide\" [(ngModel)]=\"registerData.num_ide\" (focusout)=\"verificarExistencia()\" \r\n    class=\"login__input\" fill=\"outline\" placeholder=\"Número de identificacion\"></ion-input>\r\n  <ion-input class=\"login__input\" fill=\"outline\" placeholder=\"Nombres y apellidos\" id=\"name\" [(ngModel)]=\"registerData.name\"></ion-input>\r\n  <ion-input class=\"login__input\" fill=\"outline\" placeholder=\"Correo\" id=\"email\" [(ngModel)]=\"registerData.email\"></ion-input>\r\n      \r\n  <ion-select name=\"city\" [(ngModel)]=\"registerData.city\" class=\"login-select select-city\" placeholder=\"Ciudad\">\r\n    <ion-select-option value=\"Cartagena\">Cartagena</ion-select-option>\r\n    <ion-select-option value=\"Barranquilla\">Barranquilla</ion-select-option>\r\n    <ion-select-option value=\"Montería\">Montería</ion-select-option>\r\n    <ion-select-option value=\"Santa Marta\">Santa Marta</ion-select-option>\r\n    <ion-select-option value=\"Sincelejo\">Sincelejo</ion-select-option>      \r\n    <ion-select-option value=\"Riohacha\">Riohacha</ion-select-option>\r\n    <ion-select-option value=\"Valledupar\">Valledupar</ion-select-option>      \r\n  </ion-select> \r\n\r\n  <ion-input type=\"tel\" class=\"login__input\" fill=\"outline\" placeholder=\"Número contacto\" name=\"contact\" [(ngModel)]=\"registerData.contact\"></ion-input>\r\n  <ion-button class=\"login-submit\" (click)=\"next()\" shape=\"round\" color=\"secondary\">\r\n    Siguiente <ion-icon class=\"register-icon\" src=\"/assets/btn-registro.svg\"></ion-icon>\r\n  </ion-button>\r\n  \r\n</div>\r\n  <!-- <ion-button class=\"login-submit\" (click)=\"borrarmetodo()\" shape=\"round\" color=\"secondary\">\r\n    Borrar\r\n  </ion-button> -->\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff url(\"/assets/login.jpg\") no-repeat center center / cover;\n  /* background-image: #fff url(\"/assets/login.jpg\") no-repeat center center / cover !important; */\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.form-container {\n  margin: 0 10%;\n}\n\n.login {\n  font-family: Ubuntu, sans-serif;\n}\n\n.login__title {\n  font-weight: 700;\n  color: white;\n}\n\n.login__welcome {\n  font-weight: 400;\n  font-size: 1.2em;\n  color: white;\n  width: 75%;\n  margin: 0 auto;\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\n\n.login__welcome__text {\n  margin: 0;\n}\n\n.login__welcome__text-form {\n  color: #d4dcfc;\n  font-weight: 300;\n}\n\n.login__input {\n  width: 100%;\n  margin: 0 auto;\n  background-color: var(--ion-color-primary);\n  --placeholder-color: #d4dcfc;\n  --color: white;\n  border: 1px solid white;\n  border-radius: 1.5em;\n  text-align: center;\n  margin-bottom: 16px;\n  padding-left: 0;\n  --padding-start: 0;\n}\n\n.login-select {\n  width: 100%;\n  margin: 0 auto;\n  color: white;\n  border: 1px solid white;\n  border-radius: 1.5em;\n  text-align: center;\n  padding: 6px 0;\n  margin-bottom: 16px;\n}\n\nion-select::part(icon) {\n  display: none;\n}\n\n.login-submit {\n  display: flex;\n  justify-content: center;\n  width: 50%;\n  margin: 0 auto;\n  margin-top: 30px;\n  padding: 0 10px;\n}\n\n.register-icon {\n  width: 25px;\n  height: 20px;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcSW9uaWNcXE5lZ29jaWFwcC1hbGxcXE5lZ29jaWFwcDIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7RUFDQSxnR0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURBRTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0VOOztBREFFO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFTjs7QURETTtFQUNJLFNBQUE7QUNHVjs7QURETTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0dWOztBREFFO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRU47O0FESUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURNRTtFQUNJLGFBQUE7QUNITjs7QURRQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIvYXNzZXRzL2xvZ2luLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6ICNmZmYgdXJsKFwiL2Fzc2V0cy9sb2dpbi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50OyAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCAxMCU7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dSwgc2Fucy1zZXJpZjtcclxuICAmX190aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgJl9fd2VsY29tZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgJl9fdGV4dCB7XHJcbiAgICAgICAgICBtYXJnaW46IDBcclxuICAgICAgfVxyXG4gICAgICAmX190ZXh0LWZvcm0ge1xyXG4gICAgICAgICAgY29sb3I6ICNkNGRjZmM7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICZfX2lucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNkNGRjZmM7XHJcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMS41ZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5sb2dpbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOndoaXRlOyAgICBcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4IDA7IFxyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIFxyXG4gICY6OnBhcnQoaWNvbikge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5sb2dpbi1zdWJtaXQge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItaWNvbiB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi9hc3NldHMvbG9naW4uanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6ICNmZmYgdXJsKFwiL2Fzc2V0cy9sb2dpbi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50OyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBtYXJnaW46IDAgMTAlO1xufVxuXG4ubG9naW4ge1xuICBmb250LWZhbWlseTogVWJ1bnR1LCBzYW5zLXNlcmlmO1xufVxuLmxvZ2luX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5sb2dpbl9fd2VsY29tZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4ubG9naW5fX3dlbGNvbWVfX3RleHQge1xuICBtYXJnaW46IDA7XG59XG4ubG9naW5fX3dlbGNvbWVfX3RleHQtZm9ybSB7XG4gIGNvbG9yOiAjZDRkY2ZjO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmxvZ2luX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZDRkY2ZjO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG4ubG9naW4tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dpbi1zdWJtaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnJlZ2lzdGVyLWljb24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */");

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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/firebase.service */ "./src/app/core/services/firebase.service.ts");






const { Geolocation, Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
const level = [
    { isChecked: false, value: 'Especializado' },
    { isChecked: false, value: 'Profesional' },
    { isChecked: false, value: 'Tecnologo' },
    { isChecked: false, value: 'Tecnico' },
    { isChecked: false, value: 'Independiente' },
];
const path = { name: '', path: '', url: '' };
let HomePage = class HomePage {
    constructor(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.services = false;
        this.registerData = {
            prestador: true,
            service: true,
            rent: true,
            shop: true,
            miders: { status: false, categories: [], levels: level, rut: path },
            midera: { status: false, categories: [], levels: level, rut: path },
            miderv: { status: false, categories: [], levels: level, rut: path },
        };
        this.images = [];
        this.files = [];
        this.numCC = 0;
        this.numPic = 0;
        this.numHV = 0;
        this.flag = false;
    }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem('NEGOCIAPP_LOGGED'))) {
            this.router.navigateByUrl('/inicio');
        }
        this.registerData.prestador = true;
        this.registerData.service = true;
        this.registerData.rent = true;
        this.registerData.shop = true;
        this.obtenerCoordenadas();
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
            if (!this.registerData.tip_ide || !this.registerData.num_ide ||
                !this.registerData.name || !this.registerData.email || !this.registerData.contact || !this.registerData.city) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Faltan datos, por favor incluye toda tu información', 'error');
                return;
            }
            const coordinates = yield Geolocation.getCurrentPosition();
            const info = yield Device.getInfo();
            this.registerData.uniqueid = info.uuid;
            this.registerData.onesignal = JSON.parse(localStorage.getItem('NEGOCIAPP_ONESIGNALUI'));
            this.registerData.lat = coordinates.coords.latitude;
            this.registerData.lng = coordinates.coords.longitude;
            this.registerData.active = true;
            this.registerData.nameToSearch = this.registerData.name.toLowerCase();
            this.registerData.rate = [];
            this.firebaseService.save('usuario-app', this.registerData);
            localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(this.registerData));
            this.router.navigateByUrl('/home/bienvenida');
        });
    }
    verificarExistencia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.firebaseService.obtenerByContactoIDPromise(this.registerData.num_ide);
            if (data.length > 0) {
                this.flag = true;
                localStorage.setItem('NEGOCIAPP_USER', JSON.stringify(data[0]));
                localStorage.setItem('NEGOCIAPP_LOGGED', JSON.stringify(true));
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('', 'Ya te encontrabas registrado en nuestra plataforma. Bienvenido!', 'success');
                localStorage.setItem('NEGOCIAPP_RELOGGED', JSON.stringify(true));
                this.router.navigateByUrl('/home/bienvenida');
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _core_services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map