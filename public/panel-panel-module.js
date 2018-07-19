(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-panel-module"],{

/***/ "./src/app/panel/add-form/add-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/panel/add-form/add-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-form-modal-row {\n  margin-bottom: 50px;\n}\n\n.add-form-modal-row input {\n  width: 100%;\n}\n\n.add-form-modal-submit {\n  padding: 10px;\n  text-align: center;\n}\n\n.add-form-modal-submit button {\n  width: 100%;\n  border-radius: 0;\n  background-color: #74c11d;\n  color: #fff;\n}\n\n.modal-header {\n  background-color: #f2f2f2;\n}\n\n.upload-btn {\n  background-color: #74c11d;\n  color: #fff;\n}\n"

/***/ }),

/***/ "./src/app/panel/add-form/add-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/panel/add-form/add-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <p>{{title}}</p>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row add-form-modal-row\">\n          <div class=\"col-lg-4 col-sm-12\">\n            <p>Field Name:</p>\n          </div>\n          <div class=\"col-lg-6 col-sm-12\">\n            <input type=\"text\" [(ngModel)]=\"fieldName\" />\n          </div>\n        </div>\n\n        <div class=\"row add-form-modal-row\" *ngIf=\"priceExists\">\n          <div class=\"col-lg-4 col-sm-12\">\n            <p>Field Price:</p>\n          </div>\n          <div class=\"col-lg-8 col-sm-12\">\n            <input type=\"text\" [(ngModel)]=\"fieldPrice\" />\n          </div>\n        </div>\n\n        <div class=\"row add-form-modal-row\" *ngIf=\"descriptionExists\">\n          <div class=\"col-lg-12\">\n            <p>Field Description:</p>\n          </div>\n          <div class=\"col-lg-12\">\n            <textarea type=\"text\" [(ngModel)]=\"fieldDescription\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"row add-form-modal-row\" *ngIf=\"imageExists\">\n          <div class=\"col-lg-8\">\n            <input type=\"file\" (change)=\"onFileSelected($event)\" />\n          </div>\n          <div class=\"col-lg-4\">\n            <button class=\"btn upload-btn\" (click)=\"onUpload()\">Upload</button>\n          </div>\n        </div>\n\n        <div class=\"row add-form-modal-submit\">\n          <div class=\"col-lg-12\">\n            <button class=\"btn\" (click)=\"addField()\" data-dismiss=\"modal\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/panel/add-form/add-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/panel/add-form/add-form.component.ts ***!
  \******************************************************/
/*! exports provided: AddFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormComponent", function() { return AddFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddFormComponent = /** @class */ (function () {
    function AddFormComponent(api) {
        this.api = api;
        this.formOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fieldName = "";
        this.fieldDescription = "";
        this.fieldPrice = "";
        this.fieldImageFile = null;
        this.fieldImageUrl = "";
    }
    AddFormComponent.prototype.ngOnInit = function () { };
    AddFormComponent.prototype.onFileSelected = function ($event) {
        console.log($event);
        this.fieldImageFile = $event.target.files[0];
    };
    AddFormComponent.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append("image", this.fieldImageFile, this.fieldImageFile.name);
        this.api
            .uploadImage(fd)
            .then(function (data) {
            console.log(data);
            // supposed to return the url of image that will be added to the form output!
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AddFormComponent.prototype.addField = function () {
        this.formOutput.emit({
            fieldName: this.fieldName,
            fieldDescription: this.fieldDescription,
            fieldPrice: this.fieldPrice,
            fieldImageUrl: this.fieldImageUrl
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddFormComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddFormComponent.prototype, "descriptionExists", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddFormComponent.prototype, "descriptionValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddFormComponent.prototype, "priceExists", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddFormComponent.prototype, "priceValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddFormComponent.prototype, "imageExists", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddFormComponent.prototype, "formOutput", void 0);
    AddFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-form",
            template: __webpack_require__(/*! ./add-form.component.html */ "./src/app/panel/add-form/add-form.component.html"),
            styles: [__webpack_require__(/*! ./add-form.component.css */ "./src/app/panel/add-form/add-form.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_1__["ApiManagerService"]])
    ], AddFormComponent);
    return AddFormComponent;
}());



/***/ }),

/***/ "./src/app/panel/menu/menu.component.html":
/*!************************************************!*\
  !*** ./src/app/panel/menu/menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Menu</h5>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"nav\">\n  <ul class=\"nav nav-tabs\" style=\"border: 0 !important\">\n    <li class=\"nav-item\" *ngFor=\"let category of categories\">\n      <a class=\"nav-link\" [ngClass]=\"{'active': category.id == catId, 'service': category.id == catId}\" style=\"height: 100%;\" (click)=\"setCatId(category.id)\">\n        {{category.name | titlecase}}\n        <a class=\"edit\" data-toggle=\"modal\" data-target=\"#modal\" *ngIf=\"category.id == catId\">\n          <u>Edit Category</u>\n        </a>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn add-service-btn\" data-toggle=\"modal\" data-target=\"#modal\">\n        <i class=\"fas fa-plus\" data-toggle=\"collapse\" data-target=\"#search\"></i>\n        <u> Add Category</u>\n      </button>\n    </li>\n  </ul>\n</nav>\n\n<div id=\"container\">\n  <div id=\"category\" class=\"add\">\n    <a data-toggle=\"modal\" data-target=\"#modal\">\n      <u>\n        <i class=\"fas fa-plus\"></i> Add Item</u>\n    </a>\n  </div>\n\n  <div id=\"category\" *ngFor=\"let product of products; let i = index;\">\n    <div id=\"category-header\">\n      <a>Item {{i+1}}</a>\n      <div class=\"side-buttons\">\n        <i class=\"far fa-edit\" style=\"margin-right: 40%;\" (click)=\"edit()\"></i>\n        <i class=\"far fa-trash-alt\" (click)=\"delete()\" style=\"color:#c13712\"></i>\n      </div>\n    </div>\n    <div id=\"category-body\">\n      <img src=\"{{product.picture}}\">\n      <div>\n        <div class=\"body-text\">\n          <a>{{product.name | titlecase}}</a>\n          <a>{{product.price|currency:'USD'}}</a>\n        </div>\n        <div class=\"body-description\">\n          <p>{{product.description | titlecase}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<app-add-form [title]=\"addServiceModalTitle\" (formOutput)=\"recieveNewServiceName($event)\"></app-add-form>"

/***/ }),

/***/ "./src/app/panel/menu/menu.component.scss":
/*!************************************************!*\
  !*** ./src/app/panel/menu/menu.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n.add-service-btn {\n  background-color: #74c11d;\n  height: 80%;\n  margin-left: 5%;\n  color: #fff; }\n\n#container {\n  background: #f2f2f2;\n  width: 100%;\n  position: absolute;\n  height: -webkit-fill-available;\n  margin-left: -4%;\n  padding: 3% 5% 1% 5%; }\n\n#category {\n  width: 300px;\n  height: 160px;\n  background: white;\n  display: inline-block;\n  vertical-align: top;\n  margin: 1%; }\n\n.add {\n  text-align: center;\n  line-height: 160px;\n  font-family: AvenirNext;\n  font-size: 18px;\n  font-weight: bold; }\n\n.add:hover {\n  cursor: pointer; }\n\n#category-header {\n  background: #fbfbfb;\n  padding: 3%; }\n\n#category-header i:hover {\n  cursor: pointer;\n  color: #74c11d; }\n\n#category-header .side-buttons {\n  float: right;\n  align-items: center;\n  width: 30%; }\n\n#category-body {\n  height: 70%;\n  padding: 2% 0% 1% 3%;\n  display: flex;\n  justify-content: space-evenly; }\n\n.body-text {\n  padding-right: 8%;\n  width: 100%;\n  font-family: AvenirNext;\n  font-size: 18px;\n  display: flex;\n  justify-content: space-between; }\n\n.body-description {\n  height: 80%;\n  overflow: scroll; }\n\n.body-description p {\n  font-family: AvenirNext;\n  font-size: 15px;\n  color: #95989a;\n  padding: 2% 2% 0% 8%; }\n\n#category-body img {\n  width: 25%;\n  height: 90%; }\n\n.edit {\n  display: block;\n  font-family: AvenirNext;\n  font-size: 8px;\n  font-weight: bold;\n  padding-left: 0;\n  color: #c13712 !important; }\n\n.edit:hover {\n  cursor: pointer; }\n\na {\n  padding-left: 25px;\n  font-family: AvenirNext;\n  font-size: 18px; }\n\n.service {\n  background-color: #f1f1f1 !important;\n  border-bottom-color: #f1f1f1 !important;\n  text-align: center; }\n\n.service:hover {\n  cursor: default; }\n"

/***/ }),

/***/ "./src/app/panel/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/panel/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/text-modal/text-modal.component */ "./src/app/core/text-modal/text-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = /** @class */ (function () {
    function MenuComponent(api, dialogService, activeRouter) {
        this.api = api;
        this.dialogService = dialogService;
        this.activeRouter = activeRouter;
        this.categories = [];
        this.products = [];
    }
    MenuComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_4__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    MenuComponent.prototype.setCatId = function (id) {
        this.catId = id;
        this.fetchProducts();
    };
    MenuComponent.prototype.fetchCategories = function (id) {
        var _this = this;
        this.api
            .getCategories(id)
            .then(function (data) {
            console.log(data);
            _this.categories = data.categories;
            _this.catId = _this.categories[0].id;
            _this.fetchProducts();
        })
            .catch(function (err) {
            _this.showError("Fetch Services Failed", err.error.detail);
        });
    };
    MenuComponent.prototype.fetchProducts = function () {
        var _this = this;
        this.api
            .getProducts(this.catId)
            .then(function (data) {
            console.log(data);
            _this.products = data.products;
        })
            .catch(function (err) {
            _this.showError("Fetch Providers Failed", err.error.detail);
        });
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.fetchServices();
        this.activeRouter.params.subscribe(function () {
            _this.paramId = _this.activeRouter.snapshot.params.id;
            _this.fetchCategories(_this.paramId);
        });
    };
    MenuComponent.prototype.edit = function () {
        console.log("edit");
    };
    MenuComponent.prototype.delete = function () {
        console.log("delete");
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-menu",
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/panel/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/panel/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_2__["ApiManagerService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/panel/panel-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/panel/panel-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PanelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelRoutingModule", function() { return PanelRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/services.component */ "./src/app/panel/services/services.component.ts");
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/providers.component */ "./src/app/panel/providers/providers.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/panel/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "services",
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"]
    },
    {
        path: "provider/:id",
        component: _providers_providers_component__WEBPACK_IMPORTED_MODULE_3__["ProvidersComponent"]
    },
    {
        path: "category/:id",
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]
    }
];
var PanelRoutingModule = /** @class */ (function () {
    function PanelRoutingModule() {
    }
    PanelRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PanelRoutingModule);
    return PanelRoutingModule;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.html":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/panel/panel.component.scss":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () { };
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-panel",
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/panel/panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/panel/panel.module.ts":
/*!***************************************!*\
  !*** ./src/app/panel/panel.module.ts ***!
  \***************************************/
/*! exports provided: PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _panel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-routing.module */ "./src/app/panel/panel-routing.module.ts");
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/panel/services/services.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-form/add-form.component */ "./src/app/panel/add-form/add-form.component.ts");
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/providers.component */ "./src/app/panel/providers/providers.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/panel/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PanelModule = /** @class */ (function () {
    function PanelModule() {
    }
    PanelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _panel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PanelRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [
                _panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"],
                _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_7__["AddFormComponent"],
                _providers_providers_component__WEBPACK_IMPORTED_MODULE_8__["ProvidersComponent"]
            ],
            exports: [_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_7__["AddFormComponent"]]
        })
    ], PanelModule);
    return PanelModule;
}());



/***/ }),

/***/ "./src/app/panel/providers/providers.component.html":
/*!**********************************************************!*\
  !*** ./src/app/panel/providers/providers.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Service Providers</h5>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"nav\">\n  <ul class=\"nav nav-tabs\" style=\"border: 0 !important\">\n    <li class=\"nav-item\" *ngFor=\"let service of services\">\n      <a class=\"nav-link\" [routerLink]=\"'/panel/provider/'+service.id\" [ngClass]=\"{'active': service.id == paramId, 'service': service.id == paramId}\"\n        style=\"height: 100%;\">\n        {{service.name | titlecase}}\n        <a class=\"edit\" data-toggle=\"modal\" data-target=\"#modal\" *ngIf=\"service.id == paramId\">\n          <u>Edit Service</u>\n        </a>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn add-service-btn\" data-toggle=\"modal\" data-target=\"#modal\">\n        <i class=\"fas fa-plus\" data-toggle=\"collapse\" data-target=\"#search\"></i>\n        <u> Add Service</u>\n      </button>\n    </li>\n  </ul>\n</nav>\n\n<div id=\"container\">\n  <div id=\"category\" class=\"add\">\n    <a data-toggle=\"modal\" data-target=\"#modal\">\n      <u>\n        <i class=\"fas fa-plus\"></i> Add Service Provider</u>\n    </a>\n  </div>\n\n  <div id=\"category\" *ngFor=\"let provider of providers; let i = index;\">\n    <div id=\"category-header\">\n      <a>Provider {{i+1}}</a>\n      <div class=\"side-buttons\">\n        <i class=\"far fa-edit\" style=\"margin-right: 40%;\" (click)=\"edit()\"></i>\n        <i class=\"far fa-trash-alt\" (click)=\"delete()\" style=\"color:#c13712\"></i>\n      </div>\n    </div>\n    <div id=\"category-body\">\n      <img src=\"{{provider.picture}}\">\n      <a>{{provider.name | titlecase}}</a>\n    </div>\n    <div id=\"category-footer\">\n      <i class=\"fas fa-star\" *ngIf=\"!provider.gem\"></i>\n      <a style=\"align-self: left;\" [routerLink]=\"'/panel/category/'+provider.id\">Check Menu</a>\n    </div>\n  </div>\n</div>\n\n\n<app-add-form [title]=\"addServiceModalTitle\" (formOutput)=\"recieveNewServiceName($event)\"></app-add-form>"

/***/ }),

/***/ "./src/app/panel/providers/providers.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/panel/providers/providers.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n.add-service-btn {\n  background-color: #74c11d;\n  height: 80%;\n  margin-left: 1%;\n  color: #fff; }\n\n#container {\n  background: #f2f2f2;\n  width: 100%;\n  position: absolute;\n  height: -webkit-fill-available;\n  margin-left: -4%;\n  padding: 3% 5% 1% 5%; }\n\n#category {\n  width: 300px;\n  height: 160px;\n  background: white;\n  display: inline-block;\n  vertical-align: top;\n  margin: 1%; }\n\n.add {\n  text-align: center;\n  line-height: 160px;\n  font-family: AvenirNext;\n  font-size: 18px;\n  font-weight: bold; }\n\n.add:hover {\n  cursor: pointer; }\n\n#category-header {\n  background: #fbfbfb;\n  padding: 3%; }\n\n#category-header i:hover {\n  cursor: pointer;\n  color: #74c11d; }\n\n#category-header .side-buttons {\n  float: right;\n  align-items: center;\n  width: 30%; }\n\n#category-body {\n  height: 60%;\n  padding: 7% 5% 5% 5%; }\n\n#category-body img {\n  width: 25%;\n  height: 90%; }\n\n.edit {\n  display: block;\n  font-family: AvenirNext;\n  font-size: 8px;\n  font-weight: bold;\n  padding-left: 0;\n  color: #c13712 !important; }\n\n.edit:hover {\n  cursor: pointer; }\n\na {\n  padding-left: 25px;\n  font-family: AvenirNext;\n  font-size: 18px; }\n\n#category-footer {\n  width: 100%;\n  margin: -9% 0% 0% -3%;\n  padding: 10px;\n  text-align: right; }\n\n#category-footer i {\n  color: goldenrod;\n  float: left;\n  padding-left: 14%; }\n\n.service {\n  background-color: #f1f1f1 !important;\n  border-bottom-color: #f1f1f1 !important;\n  text-align: center; }\n\n.service:hover {\n  cursor: default; }\n"

/***/ }),

/***/ "./src/app/panel/providers/providers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/panel/providers/providers.component.ts ***!
  \********************************************************/
/*! exports provided: ProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersComponent", function() { return ProvidersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/text-modal/text-modal.component */ "./src/app/core/text-modal/text-modal.component.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProvidersComponent = /** @class */ (function () {
    function ProvidersComponent(api, dialogService, activeRouter) {
        this.api = api;
        this.dialogService = dialogService;
        this.activeRouter = activeRouter;
        this.services = [];
        this.providers = [];
    }
    ProvidersComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    ProvidersComponent.prototype.fetchServices = function () {
        var _this = this;
        this.api
            .getServices()
            .then(function (data) {
            console.log(data);
            _this.services = data.services;
        })
            .catch(function (err) {
            _this.showError("Fetch Services Failed", err.error.detail);
        });
    };
    ProvidersComponent.prototype.fetchProviders = function (id) {
        var _this = this;
        this.api
            .getProviders(id)
            .then(function (data) {
            console.log(data);
            _this.providers = data.providers;
        })
            .catch(function (err) {
            _this.showError("Fetch Providers Failed", err.error.detail);
        });
    };
    ProvidersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchServices();
        this.activeRouter.params.subscribe(function (id) {
            _this.paramId = _this.activeRouter.snapshot.params.id;
            _this.fetchProviders(_this.paramId);
        });
    };
    ProvidersComponent.prototype.edit = function () {
        console.log("edit");
    };
    ProvidersComponent.prototype.delete = function () {
        console.log("delete");
    };
    ProvidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-providers",
            template: __webpack_require__(/*! ./providers.component.html */ "./src/app/panel/providers/providers.component.html"),
            styles: [__webpack_require__(/*! ./providers.component.scss */ "./src/app/panel/providers/providers.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_1__["ApiManagerService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProvidersComponent);
    return ProvidersComponent;
}());



/***/ }),

/***/ "./src/app/panel/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/panel/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Services</h5>\n    <button class=\"btn add-service-btn\" data-toggle=\"modal\" data-target=\"#modal\">\n      <i class=\"fas fa-plus\" data-toggle=\"collapse\" data-target=\"#search\"></i>\n      <u> Add Service</u>\n    </button>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let s of serviceNames; let i = index;\">\n    <div class=\"service-btn btn col-lg-12 arrow-toggle\" data-toggle=\"collapse\" data-target=\"#demo\" [attr.data-target]=\"'#serv' + s.id\">\n      <div>\n        <a>{{ s.name | titlecase}}</a>\n        <div class=\"side-buttons\">\n          <i class=\"far fa-edit\" style=\"margin-right: 20%;\" (click)=\"edit()\"></i>\n          <i class=\"far fa-trash-alt\" (click)=\"delete()\" style=\"color:#c13712\"></i>\n          <i class=\"fas fa-angle-up\" style=\"padding-left: 60%;\"></i>\n          <i class=\"fas fa-angle-down\" style=\"padding-left: 60%;\"></i>\n        </div>\n      </div>\n    </div>\n    <div id=\"demo\" [attr.id]=\"'serv' + s.id\" class=\"provider collapse col-lg-12\">\n      <div class=\"left\">\n        <a>\n          <p>Providers for:</p>\n        </a>\n        <p>{{ s.name | titlecase }}</p>\n      </div>\n      <div *ngFor=\"let p of serviceList[i]; let j = index\">\n        <div *ngIf=\"j < 3\" class=\"service-provider\">\n          <img src=\"\" [attr.src]=\"p.picture\">\n          <div></div>\n          <a>{{ p.name | titlecase }}</a>\n        </div>\n      </div>\n      <div class=\"service-provider\">\n        <div style=\"background-color: rgba(0,0,0,1)\"></div>\n        <a [routerLink]=\"['/panel/provider/', s.id]\">View All Providers</a>\n        <!-- add the id of the provider in this link to activate a provider in the next page -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-add-form [title]=\"addServiceModalTitle\" (formOutput)=\"recieveNewServiceName($event)\" [imageExists]=\"true\"></app-add-form>"

/***/ }),

/***/ "./src/app/panel/services/services.component.scss":
/*!********************************************************!*\
  !*** ./src/app/panel/services/services.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n.service-btn {\n  background-color: #f2f2f2;\n  border-radius: 0;\n  text-align: left;\n  padding: 10px 25px 10px 25px;\n  margin: 5px; }\n\n.add-service-btn {\n  background-color: #74c11d;\n  color: #fff; }\n\n.collapse {\n  margin: 1%; }\n\n.provider {\n  justify-content: flex-start;\n  text-align: center;\n  flex-direction: row;\n  vertical-align: middle;\n  display: flex; }\n\n.service-provider-heading {\n  position: relative; }\n\n.left {\n  text-align: center;\n  margin-top: 3%;\n  margin-right: 4%; }\n\n.left a p {\n  margin-bottom: 0rem;\n  font-family: AvenirNext;\n  font-size: 14px;\n  color: #95989a; }\n\n.service-provider {\n  height: 90px;\n  position: relative;\n  padding: 0px;\n  color: white;\n  text-align: center;\n  margin-right: 10px;\n  margin-bottom: 1%;\n  width: 100px; }\n\n.service-provider img {\n  width: 100%;\n  height: 100%; }\n\n.service-provider div {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.service-provider a {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.service-provider a {\n  position: absolute;\n  top: 50%;\n  left: 50%; }\n\n.side-buttons {\n  float: right;\n  align-items: center;\n  width: 30%; }\n\n.arrow-toggle .fa-angle-up,\n.arrow-toggle.collapsed .fa-angle-down {\n  display: inline-block; }\n\n.arrow-toggle.collapsed .fa-angle-up,\n.arrow-toggle .fa-angle-down {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/panel/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/panel/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/text-modal/text-modal.component */ "./src/app/core/text-modal/text-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(api, dialogService) {
        this.api = api;
        this.dialogService = dialogService;
        this.serviceNames = [];
        this.serviceList = [];
        this.addServiceModalTitle = "Add Service";
    }
    ServicesComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api
            .getProvidersByService()
            .then(function (data) {
            console.log(data.providers);
            Object.keys(data.providers).forEach(function (key) {
                if (data.providers["" + key].length > 0) {
                    _this.serviceNames.push({
                        name: key,
                        id: data.providers["" + key][0].service_id
                    });
                }
                else {
                    _this.serviceNames.push({
                        name: key,
                        id: -1
                    });
                }
            });
            console.log(_this.serviceNames);
            Object.values(data.providers).forEach(function (val) {
                _this.serviceList.push(val);
            });
            console.log(_this.serviceList);
        })
            .catch(function (err) {
            _this.showError("error", "error");
            console.log(err);
        });
    };
    ServicesComponent.prototype.recieveNewServiceName = function ($event) {
        var _this = this;
        this.api
            .addAService({
            name: $event.fieldName
        })
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            _this.showError("error", "error");
        });
    };
    ServicesComponent.prototype.edit = function () {
        console.log("edit");
    };
    ServicesComponent.prototype.delete = function () {
        console.log("delete");
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-services",
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/panel/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/panel/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_1__["ApiManagerService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=panel-panel-module.js.map