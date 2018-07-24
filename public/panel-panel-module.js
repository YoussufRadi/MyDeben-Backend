(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-panel-module"],{

/***/ "./src/app/panel/add-form/add-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/panel/add-form/add-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-form-modal-row {\n  margin-bottom: 50px;\n}\n\n.add-form-modal-row input {\n  width: 100%;\n}\n\n.add-form-modal-submit {\n  padding: 10px;\n  text-align: center;\n}\n\n.add-form-modal-submit button {\n  width: 100%;\n  border-radius: 0;\n  background-color: #74c11d;\n  color: #fff;\n}\n\n.modal-header {\n  font-family: AvenirNext;\n  font-size: 20px !important;\n  font-weight: bold;\n  color: #fff;\n  background-color: #000000;\n}\n\n.chover {\n  color: white;\n}\n\n.chover:hover {\n  color: red;\n}\n\n.confirm {\n  border: solid 1px #74c11d;\n  background: white !important;\n  font-family: AvenirNext;\n  font-size: 14px;\n  color: #74c11d !important;\n  width: 100%;\n}\n\n.confirm:not(:disabled):not(.disabled):hover {\n  border: solid 1px #74c11d;\n  background: #74c11d !important;\n  color: #fff !important;\n}\n\n.confirm:disabled {\n  color: #d7f9b0 !important;\n  border: solid 1px #d7f9b0;\n}\n\n.upload-btn {\n  width: 30%;\n  background-color: #74c11d;\n  color: #fff;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n}\n\n.service-provider {\n  position: relative;\n  padding: 0px;\n  margin-bottom: 3%;\n  margin-left: 3%;\n  margin-right: 3%;\n}\n\n.service-provider img {\n  width: 160px;\n  height: 160px;\n}\n\n.service-provider div {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 160px;\n  height: 160px;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 180px;\n  font-size: 20px;\n}\n\n.choose-file {\n  position: absolute;\n  top: 37%;\n  left: 45%;\n  font-size: 11px;\n}\n"

/***/ }),

/***/ "./src/app/panel/add-form/add-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/panel/add-form/add-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modal\" id=\"modal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <a class=\"modal-title\" style=\"margin-left: 40%;\">{{values.title || 'Confirm'}}</a>\n        <button type=\"button\" class=\"close chover\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal container\" [formGroup]=\"editForm\">\n          <fieldset>\n            <div class=\"form-group col-lg-12\">\n              <label for=\"inputName\" class=\"control-label\">Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputName\" formControlName=\"name\">\n            </div>\n            <div class=\"service-provider\" *ngIf=\"values.picture !== undefined\">\n              <img src=\"\" [attr.src]=\"values.picture\" name=\"pic\" accept=\"image/x-png,image/jpeg\">\n              <div>{{upload}}</div>\n              <input class=\"choose-file\" type=\"file\" (change)=\"onFileSelected($event)\" />\n              <button class=\"btn upload-btn confirm\" [disabled]=\"upload == ''\" (click)=\"onUpload()\">Upload</button>\n            </div>\n            <div class=\"form-group col-lg-12\" *ngIf=\"values.price !== undefined\">\n              <label for=\"inputPrice\" class=\"control-label\">Price</label>\n              <input type=\"number\" formControlName=\"price\" id=\"inputPrice\" class=\"form-control\">\n            </div>\n            <div class=\"form-group col-lg-12\" *ngIf=\"values.description !== undefined\">\n              <label for=\"inputDescription\" class=\"control-label\">Description</label>\n              <textarea name=\"Text1\" cols=\"50\" rows=\"3\" formControlName=\"description\" id=\"inputDescription\" class=\"form-control\"></textarea>\n            </div>\n\n            <div class=\"form-group col-lg-12 submit-register\">\n              <button type=\"submit\" [disabled]=\"!editForm.valid || upload != ''\" class=\"form-submit-button btn btn-primary confirm\" (click)=\"submit()\"\n                data-dismiss=\"modal\">Save</button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/api-manager.service */ "./src/app/core/services/api-manager.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function AddFormComponent(fb, api) {
        this.fb = fb;
        this.api = api;
        this.formOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fieldImageFile = null;
        this.upload = "";
    }
    AddFormComponent.prototype.setForm = function () {
        if (this.editForm)
            this.editForm.setValue({
                name: this.values.name,
                description: this.values.description || "",
                price: this.values.price || 0
            });
    };
    AddFormComponent.prototype.ngOnChanges = function () {
        this.setForm();
    };
    AddFormComponent.prototype.ngOnInit = function () {
        this.editForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: [""],
            price: [""]
        }, { validator: this.priceExists() });
        this.setForm();
    };
    AddFormComponent.prototype.priceExists = function () {
        var _this = this;
        return function (c) {
            if (_this.values.price != undefined && c.get("price").value < 1) {
                return { invalid: true };
            }
            return null;
        };
    };
    Object.defineProperty(AddFormComponent.prototype, "name", {
        get: function () {
            return this.editForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFormComponent.prototype, "title", {
        get: function () {
            return this.editForm.get("title");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFormComponent.prototype, "description", {
        get: function () {
            return this.editForm.get("description");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddFormComponent.prototype, "price", {
        get: function () {
            return this.editForm.get("price");
        },
        enumerable: true,
        configurable: true
    });
    AddFormComponent.prototype.submit = function () {
        var data = __assign({}, this.editForm.value, { picture: this.values.picture, id: this.values.id });
        this.formOutput.emit(data);
    };
    AddFormComponent.prototype.onFileSelected = function ($event) {
        var file = $event.target.files[0];
        if (file.type === "image/png" || file.type === "image/jpeg") {
            this.fieldImageFile = $event.target.files[0];
            this.values.picture = " ";
            this.upload = "Click to Uplaod";
        }
        else
            alert("Please Select JPEG or PNG Images Only");
    };
    AddFormComponent.prototype.onUpload = function () {
        var _this = this;
        var fd = new FormData();
        fd.append("file", this.fieldImageFile, this.fieldImageFile.name);
        this.api
            .uploadImage(fd)
            .then(function (data) {
            _this.values.picture = data.url;
            _this.upload = "";
        })
            .catch(function (err) {
            console.log(err);
            alert(err.error.detail);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddFormComponent.prototype, "values", void 0);
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
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_2__["ApiManagerService"]])
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

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Menu</h5>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"nav\">\n  <ul class=\"nav nav-tabs\" style=\"border: 0 !important\">\n    <li class=\"nav-item\" *ngFor=\"let category of categories\">\n      <a class=\"nav-link\" [ngClass]=\"{'active': category.id == catId, 'service': category.id == catId}\" style=\"height: 100%; padding-bottom: 0; padding-top: 2%;\"\n        (click)=\"setCatId(category.id)\"> {{category.name | titlecase}}\n        <a style=\"margin-bottom: 2px\" class=\"edit\" data-toggle=\"modal\" data-target=\"#modal\" *ngIf=\"category.id == catId\" (click)=\"setValue(category)\">\n          <u>Edit Category</u>\n        </a>\n        <a class=\"edit\" *ngIf=\"category.id == catId\" (click)=\"deleteCategory(category.id)\">\n          <u>Delete Category</u>\n        </a>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn add-service-btn\" data-toggle=\"modal\" data-target=\"#modal\" (click)=\"clearSelectedCat()\">\n        <i class=\"fas fa-plus\"></i>\n        <u> Add Category</u>\n      </button>\n    </li>\n  </ul>\n</nav>\n\n<div id=\"container\">\n  <div id=\"category\" class=\"add\" *ngIf=\"catId != -1\">\n    <a data-toggle=\"modal\" data-target=\"#modal\" (click)=\"clearSelectedItem()\">\n      <u>\n        <i class=\"fas fa-plus\"></i> Add Item</u>\n    </a>\n  </div>\n  <div id=\"category\" *ngFor=\"let product of products | search : 'name':searchText; let i = index;\">\n    <div id=\"category-header\">\n      <a>Item {{i+1}}</a>\n      <div class=\"side-buttons\">\n        <i class=\"far fa-edit\" style=\"margin-right: 40%;\" (click)=\"setValue(product)\" data-toggle=\"modal\" data-target=\"#modal\"></i>\n        <i class=\"far fa-trash-alt\" (click)=\"deleteProduct(product.id)\" style=\"color:#c13712\"></i>\n      </div>\n    </div>\n    <div id=\"category-body\">\n      <img src=\"{{product.picture}}\">\n      <div>\n        <div class=\"body-text\">\n          <a>{{product.name | titlecase}}</a>\n          <a>{{product.price|currency:'USD'}}</a>\n        </div>\n        <div class=\"body-description\">\n          <p>{{product.description | titlecase}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-add-form [values]=\"selectedService\" (formOutput)=\"recieveFormData($event)\"></app-add-form>"

/***/ }),

/***/ "./src/app/panel/menu/menu.component.scss":
/*!************************************************!*\
  !*** ./src/app/panel/menu/menu.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n.add-service-btn {\n  background-color: #74c11d;\n  margin-left: 5%;\n  color: #fff; }\n\n#container {\n  background: #f2f2f2;\n  width: 100%;\n  position: absolute;\n  height: auto;\n  min-height: -webkit-fill-available;\n  margin-left: -4%;\n  padding: 3% 1% 1% 2%; }\n\n#category {\n  width: 300px;\n  height: 160px;\n  background: white;\n  display: inline-block;\n  vertical-align: top;\n  margin: 1%; }\n\n.add {\n  text-align: center;\n  line-height: 160px;\n  font-family: AvenirNext;\n  font-size: 18px;\n  font-weight: bold; }\n\n.add:hover {\n  cursor: pointer; }\n\n#category-header {\n  background: #fbfbfb;\n  padding: 3%; }\n\n#category-header i:hover {\n  cursor: pointer;\n  color: #74c11d; }\n\n#category-header .side-buttons {\n  float: right;\n  align-items: center;\n  width: 30%; }\n\n#category-body {\n  height: 70%;\n  padding: 2% 0% 1% 3%;\n  display: flex;\n  justify-content: space-evenly; }\n\n.body-text {\n  padding-right: 8%;\n  width: 100%;\n  font-family: AvenirNext;\n  font-size: 18px;\n  display: flex;\n  justify-content: space-between; }\n\n.body-description {\n  height: 80%;\n  overflow: scroll; }\n\n.body-description p {\n  font-family: AvenirNext;\n  font-size: 15px;\n  color: #95989a;\n  padding: 2% 2% 0% 8%; }\n\n#category-body img {\n  width: 25%;\n  margin-top: 3%;\n  height: 70%; }\n\n.edit {\n  display: block;\n  font-family: AvenirNext;\n  font-size: 8px;\n  font-weight: bold;\n  padding-left: 0;\n  color: #c13712 !important; }\n\n.edit:hover {\n  cursor: pointer; }\n\na {\n  padding-left: 25px;\n  font-family: AvenirNext;\n  font-size: 18px; }\n\n.service {\n  background-color: #f1f1f1 !important;\n  border-bottom-color: #f1f1f1 !important;\n  text-align: center; }\n\n.service:hover {\n  cursor: default; }\n"

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
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function MenuComponent(api, dialogService, activeRouter, auth) {
        this.api = api;
        this.dialogService = dialogService;
        this.activeRouter = activeRouter;
        this.auth = auth;
        this.categories = [];
        this.products = [];
        this.catId = -1;
        this.selectedService = {
            id: -1,
            title: "Add a new Item",
            name: "",
            description: "",
            price: 0,
            picture: " "
        };
    }
    MenuComponent.prototype.showError = function (title, message) {
        return this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_4__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    MenuComponent.prototype.showConfirm = function () {
        return this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_4__["TextModalComponent"], {
            title: "Are you sure?",
            message: "Press YES if you want to delete selected",
            confirm: true
        });
    };
    MenuComponent.prototype.setCatId = function (id) {
        if (this.catId !== id) {
            this.catId = id;
            this.fetchProducts();
        }
    };
    MenuComponent.prototype.fetchCategories = function (id, f) {
        var _this = this;
        return this.api
            .getCategory(id)
            .then(function (data) {
            _this.categories = data.categories;
            if (_this.categories.length > 0 && f) {
                _this.catId = _this.categories[0].id;
                _this.fetchProducts();
            }
        })
            .catch(function (err) {
            _this.showError("Fetch Categories Failed", err.error);
        });
    };
    MenuComponent.prototype.fetchProducts = function () {
        var _this = this;
        this.api
            .getProduct(this.catId)
            .then(function (data) {
            _this.products = data.products;
        })
            .catch(function (err) {
            _this.showError("Fetch Providers Failed", err.error);
        });
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.setSidebarValue(2);
        this.activeRouter.params.subscribe(function () {
            _this.paramId = _this.activeRouter.snapshot.params.id;
            _this.fetchCategories(_this.paramId, true);
        });
    };
    MenuComponent.prototype.clearSelectedItem = function () {
        var values = {
            id: -1,
            title: "Add a new Item",
            name: "",
            description: "",
            price: 0,
            picture: " "
        };
        this.selectedService = values;
    };
    MenuComponent.prototype.clearSelectedCat = function () {
        var values = {
            id: -1,
            title: "Add a new Category",
            name: "",
            description: "",
            price: undefined,
            picture: " "
        };
        this.selectedService = values;
    };
    MenuComponent.prototype.recieveFormData = function ($event) {
        if ($event.id == -1) {
            delete $event.id;
            if ($event.price)
                this.addProduct(__assign({}, $event, { category_id: this.catId }));
            else
                this.addCategory($event);
        }
        else {
            if ($event.price)
                this.editProduct($event);
            else
                this.editCategory($event);
        }
    };
    MenuComponent.prototype.setValue = function (value) {
        this.selectedService = value;
    };
    MenuComponent.prototype.addProduct = function (value) {
        var _this = this;
        this.api
            .addProduct(value)
            .then(function (data) {
            _this.showError("Added Successfully", "New Product was added");
            _this.fetchProducts();
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Adding Failed", err.error);
        });
    };
    MenuComponent.prototype.editProduct = function (value) {
        var _this = this;
        this.api
            .editProduct(value.id, value)
            .then(function (data) {
            _this.showError("Edited Successfully", "Product was edited");
            _this.fetchProducts();
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Editing Failed", err.error);
        });
    };
    MenuComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.showConfirm().subscribe(function (res) {
            if (res) {
                _this.api
                    .deleteProduct(id)
                    .then(function (data) {
                    _this.showError("Deleted Successfully", "Product was deleted");
                    _this.fetchProducts();
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.showError("Deleting Failed", err.error);
                });
            }
        });
    };
    MenuComponent.prototype.addCategory = function (value) {
        var _this = this;
        var provider_id = this.activeRouter.snapshot.params.id;
        this.api
            .addCategory(__assign({}, value, { provider_id: provider_id }))
            .then(function (data) {
            _this.showError("Added Successfully", "New Category was added");
            _this.fetchCategories(provider_id, false).then(function () {
                _this.catId = Math.max.apply(Math, _this.categories.map(function (o) {
                    return o.id;
                }));
            });
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Adding Failed", err.error);
        });
    };
    MenuComponent.prototype.editCategory = function (value) {
        var _this = this;
        var provider_id = this.activeRouter.snapshot.params.id;
        this.api
            .editCategory(value.id, value)
            .then(function (data) {
            _this.showError("Edited Successfully", "Category was edited");
            _this.fetchCategories(provider_id, false);
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Editing Failed", err.error);
        });
    };
    MenuComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        this.showConfirm().subscribe(function (res) {
            if (res) {
                var provider_id_1 = _this.activeRouter.snapshot.params.id;
                _this.api
                    .deleteCategory(id)
                    .then(function (data) {
                    _this.showError("Deleted Successfully", "Category was deleted");
                    _this.fetchCategories(provider_id_1, true);
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.showError("Deleting Failed", err.error);
                });
            }
        });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-menu",
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/panel/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/panel/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_2__["ApiManagerService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
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
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _panel_routing_module__WEBPACK_IMPORTED_MODULE_3__["PanelRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
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

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Service Providers</h5>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<nav class=\"nav\">\n  <ul class=\"nav nav-tabs\" style=\"border: 0 !important\">\n    <li class=\"nav-item\" *ngFor=\"let service of services\">\n      <a class=\"nav-link\" [routerLink]=\"'/panel/provider/'+service.id\" [ngClass]=\"{'active': service.id == paramId, 'service': service.id == paramId}\"\n        style=\"height: 100%; padding-bottom: 0; padding-top: 2%;\">\n        {{service.name | titlecase}}\n        <a style=\"margin-bottom: 2px\" class=\"edit\" data-toggle=\"modal\" data-target=\"#modal\" *ngIf=\"service.id == paramId\" (click)=\"setValue(service)\">\n          <u>Edit Service</u>\n        </a>\n        <a class=\"edit\" *ngIf=\"service.id == paramId\" (click)=\"deleteService(service.id)\">\n          <u>Delete Service</u>\n        </a>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn add-service-btn\" data-toggle=\"modal\" data-target=\"#modal\" (click)=\"clearSelectedService()\">\n        <i class=\"fas fa-plus\"></i>\n        <u> Add Category</u>\n      </button>\n    </li>\n  </ul>\n</nav>\n\n<div id=\"container\">\n  <div id=\"category\" class=\"add\">\n    <a data-toggle=\"modal\" data-target=\"#modal\" (click)=\"clearSelectedProvider()\">\n      <u>\n        <i class=\"fas fa-plus\"></i> Add Item</u>\n    </a>\n  </div>\n  <div id=\"category\" *ngFor=\"let provider of providers | search : 'name':searchText; let i = index;\">\n    <div id=\"category-header\">\n      <a>Provider {{i+1}}</a>\n      <div class=\"side-buttons\">\n        <i class=\"far fa-edit\" style=\"margin-right: 40%;\" (click)=\"setValue(provider)\" data-toggle=\"modal\" data-target=\"#modal\"></i>\n        <i class=\"far fa-trash-alt\" (click)=\"deleteProvider(provider.id)\" style=\"color:#c13712\"></i>\n      </div>\n    </div>\n    <div id=\"category-body\">\n      <img src=\"{{provider.picture}}\">\n      <a>{{provider.name | titlecase}}</a>\n    </div>\n    <div id=\"category-footer\">\n      <i class=\"fas fa-star\" *ngIf=\"provider.gem\"></i>\n      <a style=\"align-self: left;\" [routerLink]=\"'/panel/category/'+provider.id\">Check Menu</a>\n    </div>\n  </div>\n</div>\n\n\n<app-add-form [values]=\"selectedService\" (formOutput)=\"recieveFormData($event)\"></app-add-form>"

/***/ }),

/***/ "./src/app/panel/providers/providers.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/panel/providers/providers.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n.add-service-btn {\n  background-color: #74c11d;\n  height: 80%;\n  margin-left: 1%;\n  color: #fff; }\n\n#container {\n  background: #f2f2f2;\n  width: 100%;\n  position: absolute;\n  height: auto;\n  min-height: -webkit-fill-available;\n  margin-left: -4%;\n  padding: 3% 1% 1% 2%; }\n\n#category {\n  width: 300px;\n  height: 160px;\n  background: white;\n  display: inline-block;\n  vertical-align: top;\n  margin: 1%; }\n\n.add {\n  text-align: center;\n  line-height: 160px;\n  font-family: AvenirNext;\n  font-size: 18px;\n  font-weight: bold; }\n\n.add:hover {\n  cursor: pointer; }\n\n#category-header {\n  background: #fbfbfb;\n  padding: 3%; }\n\n#category-header i:hover {\n  cursor: pointer;\n  color: #74c11d; }\n\n#category-header .side-buttons {\n  float: right;\n  align-items: center;\n  width: 30%; }\n\n#category-body {\n  height: 60%;\n  padding: 7% 5% 5% 5%; }\n\n#category-body img {\n  width: 25%;\n  height: 90%; }\n\n.edit {\n  display: block;\n  font-family: AvenirNext;\n  font-size: 8px;\n  font-weight: bold;\n  padding-left: 0;\n  color: #c13712 !important; }\n\n.edit:hover {\n  cursor: pointer; }\n\na {\n  padding-left: 25px;\n  font-family: AvenirNext;\n  font-size: 18px; }\n\n#category-footer {\n  width: 100%;\n  margin: -9% 0% 0% -3%;\n  padding: 10px;\n  text-align: right; }\n\n#category-footer i {\n  color: goldenrod;\n  float: left;\n  padding-left: 14%; }\n\n.service {\n  background-color: #f1f1f1 !important;\n  border-bottom-color: #f1f1f1 !important;\n  text-align: center; }\n\n.service:hover {\n  cursor: default; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function ProvidersComponent(api, dialogService, activeRouter, auth) {
        this.api = api;
        this.dialogService = dialogService;
        this.activeRouter = activeRouter;
        this.auth = auth;
        this.services = [];
        this.providers = [];
        this.selectedService = {
            id: -1,
            title: "Add a new Item",
            name: "",
            description: undefined,
            price: undefined,
            picture: " "
        };
    }
    ProvidersComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    ProvidersComponent.prototype.showConfirm = function () {
        return this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: "Are you sure?",
            message: "Press YES if you want to delete selected",
            confirm: true
        });
    };
    ProvidersComponent.prototype.fetchServices = function () {
        var _this = this;
        return this.api
            .getService()
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
            .getProvider(id)
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
        this.auth.setSidebarValue(2);
        this.fetchServices();
        this.activeRouter.params.subscribe(function (id) {
            _this.paramId = _this.activeRouter.snapshot.params.id;
            _this.fetchProviders(_this.paramId);
        });
    };
    ProvidersComponent.prototype.clearSelectedProvider = function () {
        var values = {
            id: -1,
            title: "Add a new Provider",
            name: "",
            description: undefined,
            price: undefined,
            picture: " "
        };
        this.selectedService = values;
    };
    ProvidersComponent.prototype.clearSelectedService = function () {
        var values = {
            id: -1,
            title: "Add a new Service",
            name: "",
            description: undefined,
            price: undefined,
            picture: undefined
        };
        this.selectedService = values;
    };
    ProvidersComponent.prototype.recieveFormData = function ($event) {
        if ($event.id == -1) {
            delete $event.id;
            if ($event.picture)
                this.addProvider(__assign({}, $event, { service_id: this.paramId }));
            else
                this.addService($event);
        }
        else {
            if ($event.picture)
                this.editProvider($event);
            else
                this.editService($event);
        }
    };
    ProvidersComponent.prototype.setValue = function (value) {
        this.selectedService = value;
    };
    ProvidersComponent.prototype.addProvider = function (value) {
        var _this = this;
        var provider_id = this.activeRouter.snapshot.params.id;
        this.api
            .addProvider(__assign({}, value, { provider_id: provider_id }))
            .then(function (data) {
            _this.showError("Added Successfully", "New Provider was added");
            _this.fetchProviders(_this.paramId);
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Adding Failed", err.error);
        });
    };
    ProvidersComponent.prototype.editProvider = function (value) {
        var _this = this;
        this.api
            .editProvider(value.id, value)
            .then(function (data) {
            _this.showError("Edited Successfully", "Provider was edited");
            _this.fetchProviders(_this.paramId);
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Editing Failed", err.error);
        });
    };
    ProvidersComponent.prototype.deleteProvider = function (id) {
        var _this = this;
        this.showConfirm().subscribe(function (res) {
            if (res) {
                _this.api
                    .deleteProvider(id)
                    .then(function (data) {
                    _this.showError("Deleted Successfully", "Provider was deleted");
                    _this.fetchProviders(_this.paramId);
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.showError("Deleting Failed", err.error);
                });
            }
        });
    };
    ProvidersComponent.prototype.addService = function (value) {
        var _this = this;
        this.api
            .addService(value)
            .then(function (data) {
            _this.showError("Added Successfully", "New Service was added");
            _this.fetchServices().then(function () {
                _this.paramId = Math.max.apply(Math, _this.services.map(function (o) {
                    return o.id;
                }));
            });
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Adding Failed", err.error);
        });
    };
    ProvidersComponent.prototype.editService = function (value) {
        var _this = this;
        this.api
            .editService(value.id, value)
            .then(function (data) {
            _this.showError("Edited Successfully", "Service was edited");
            _this.fetchServices();
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Editing Failed", err.error);
        });
    };
    ProvidersComponent.prototype.deleteService = function (id) {
        var _this = this;
        this.showConfirm().subscribe(function (res) {
            if (res) {
                _this.api
                    .deleteService(id)
                    .then(function (data) {
                    _this.showError("Deleted Successfully", "Service was deleted");
                    _this.fetchServices().then(function () {
                        if (_this.services.length > 0) {
                            _this.paramId = _this.services[0].id;
                        }
                    });
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.showError("Deleting Failed", err.error);
                });
            }
        });
    };
    ProvidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-providers",
            template: __webpack_require__(/*! ./providers.component.html */ "./src/app/panel/providers/providers.component.html"),
            styles: [__webpack_require__(/*! ./providers.component.scss */ "./src/app/panel/providers/providers.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_1__["ApiManagerService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
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

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Services</h5>\n    <button class=\"btn add-service-btn\" data-toggle=\"modal\" data-target=\"#modal\" (click)=\"clearSelectedService()\">\n      <i class=\"fas fa-plus\"></i>\n      <u> Add Service</u>\n    </button>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#modal\">Open Modal</button>\n<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let s of serviceNames | search : 'name':searchText; let i = index;\">\n    <div class=\"service-btn btn col-lg-12 arrow-toggle\" data-toggle=\"collapse\" [attr.data-target]=\"'#serv' + s.id\">\n      <a>{{ s.name | titlecase}}</a>\n      <div class=\"side-buttons\">\n        <div class=\"btn\" (click)=\"setValue($event,s);\">\n          <i class=\"far fa-edit\"></i>\n        </div>\n        <div class=\"btn\">\n          <i class=\"far fa-trash-alt\" (click)=\"deleteService(s.id); $event.stopPropagation()\" style=\"color:#c13712\"></i>\n        </div>\n        <div class=\"btn\" style=\"float: right;\">\n          <i class=\"fas fa-angle-down\" style=\"padding-left: 40%;\"></i>\n          <i class=\"fas fa-angle-up\" style=\"padding-left: 40%;\"></i>\n        </div>\n      </div>\n    </div>\n    <div id=\"demo\" [attr.id]=\"'serv' + s.id\" class=\"providers collapse col-lg-12\">\n      <div class=\"left\">\n        <a>\n          <p>Providers for:</p>\n        </a>\n        <p>{{ s.name | titlecase }}</p>\n      </div>\n      <div *ngFor=\"let p of serviceList[i]; let j = index\">\n        <div *ngIf=\"j < 4\" class=\"service-provider\">\n          <img src=\"\" [attr.src]=\"p.picture\">\n          <div></div>\n          <a [routerLink]=\"['/panel/category/', p.id]\">{{ p.name | titlecase }}</a>\n        </div>\n      </div>\n      <div class=\"service-provider\" *ngIf=\"serviceList[i] && serviceList[i].length > 3\">\n        <div style=\"background-color: rgba(0,0,0,1)\"></div>\n        <a [routerLink]=\"['/panel/provider/', s.id]\">View All Providers</a>\n      </div>\n      <div class=\"service-provider\" *ngIf=\"!serviceList[i] || serviceList[i].length <= 3\">\n        <div style=\"background-color: rgba(0,0,0,1)\"></div>\n        <a class=\"ahover\" data-toggle=\"modal\" data-target=\"#modal\" (click)=\"clearSelectedProvider(serviceNames[i].id)\">\n          <i class=\"fas fa-plus\"></i>\n          Add Provider</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-add-form [values]=\"selectedService\" (formOutput)=\"recieveFormData($event)\"></app-add-form>"

/***/ }),

/***/ "./src/app/panel/services/services.component.scss":
/*!********************************************************!*\
  !*** ./src/app/panel/services/services.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n.service-btn {\n  background-color: #f2f2f2;\n  border-radius: 0;\n  text-align: left;\n  padding: 10px 25px 0px 20px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  margin-top: 2%; }\n\n.add-service-btn {\n  background-color: #74c11d;\n  color: #fff; }\n\n.collapse {\n  margin: 1%; }\n\n.providers {\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  margin: 0;\n  padding-top: 1%; }\n\n.service-provider-heading {\n  position: relative; }\n\n.left {\n  float: left;\n  text-align: center;\n  margin-top: 3%;\n  margin-right: 4%; }\n\n.left a p {\n  margin-bottom: 0rem;\n  font-family: AvenirNext;\n  font-size: 14px;\n  color: #95989a; }\n\n.service-provider {\n  height: 90px;\n  position: relative;\n  padding: 0px;\n  color: white;\n  text-align: center;\n  margin-right: 10px;\n  margin-bottom: 1%;\n  width: 100px;\n  vertical-align: top;\n  float: left; }\n\n.service-provider img {\n  width: 100%;\n  height: 100%; }\n\n.service-provider div {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.service-provider a {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #fff; }\n\n.side-buttons {\n  float: right;\n  align-items: center;\n  width: 30%; }\n\n.arrow-toggle[aria-expanded=\"true\"] .fa-angle-up,\n.arrow-toggle .fa-angle-down {\n  display: inline-block; }\n\n.arrow-toggle .fa-angle-up,\n.arrow-toggle[aria-expanded=\"true\"] .fa-angle-down {\n  display: none; }\n\n.ahover:hover {\n  text-decoration: underline !important;\n  cursor: pointer; }\n\n.fa-edit:hover {\n  color: #74c11d; }\n\n.fa-trash-alt:hover {\n  color: #7a1919 !important; }\n"

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
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    function ServicesComponent(api, dialogService, auth) {
        this.api = api;
        this.dialogService = dialogService;
        this.auth = auth;
        this.serviceNames = [];
        this.serviceList = [];
        this.selectedService = {
            id: -1,
            title: "Add a new Item",
            name: "",
            description: undefined,
            price: undefined,
            picture: " "
        };
    }
    ServicesComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    ServicesComponent.prototype.showConfirm = function () {
        return this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: "Are you sure?",
            message: "Press YES if you want to delete selected",
            confirm: true
        });
    };
    ServicesComponent.prototype.fetchServices = function (f) {
        var _this = this;
        if (f)
            this.serviceNames = [];
        this.serviceList = [];
        this.api
            .getProvidersByService()
            .then(function (data) {
            if (f)
                Object.keys(data.providers).forEach(function (key) {
                    if (data.providers[key].length > 0) {
                        _this.serviceNames.push({
                            name: key,
                            id: data.providers[key][0].service_id
                        });
                    }
                    else {
                        _this.serviceNames.push({
                            name: key,
                            id: -1
                        });
                    }
                });
            Object.values(data.providers).forEach(function (val) {
                if (val[0].id != null)
                    _this.serviceList.push(val);
            });
        })
            .catch(function (err) {
            _this.showError("Fetch Services Failed", err.error.detail);
            console.log(err);
        });
    };
    ServicesComponent.prototype.ngOnInit = function () {
        this.fetchServices(true);
        this.auth.setSidebarValue(2);
    };
    ServicesComponent.prototype.clearSelectedProvider = function (sid) {
        var values = {
            id: -1,
            title: "Add a new Provider",
            name: "",
            description: undefined,
            price: undefined,
            picture: " "
        };
        this.selectedService = values;
        this.selectedServiceId = sid;
    };
    ServicesComponent.prototype.clearSelectedService = function () {
        var values = {
            id: -1,
            title: "Add a new Service",
            name: "",
            description: undefined,
            price: undefined,
            picture: undefined
        };
        this.selectedService = values;
    };
    ServicesComponent.prototype.recieveFormData = function ($event) {
        if ($event.id == -1) {
            delete $event.id;
            if ($event.picture)
                this.addProvider(__assign({}, $event, { service_id: this.selectedServiceId }));
            else
                this.addService($event);
        }
        else
            this.editService($event);
    };
    ServicesComponent.prototype.setValue = function (event, value) {
        this.selectedService = value;
        event.stopPropagation();
        document.getElementById("openModalButton").click();
    };
    ServicesComponent.prototype.addProvider = function (value) {
        var _this = this;
        this.api
            .addProvider(value)
            .then(function (data) {
            _this.showError("Added Successfully", "New Provider was added");
            _this.fetchServices(false);
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Adding Failed", err.error);
        });
    };
    ServicesComponent.prototype.addService = function (value) {
        var _this = this;
        this.api
            .addService(value)
            .then(function (data) {
            _this.showError("Added Successfully", "New Service was added");
            _this.fetchServices(true);
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Adding Failed", err.error);
        });
    };
    ServicesComponent.prototype.editService = function (value) {
        var _this = this;
        this.api
            .editService(value.id, value)
            .then(function (data) {
            _this.showError("Edited Successfully", "Service was edited");
            _this.fetchServices(true);
        })
            .catch(function (err) {
            console.log(err);
            _this.showError("Editing Failed", err.error);
        });
    };
    ServicesComponent.prototype.deleteService = function (id) {
        var _this = this;
        this.showConfirm().subscribe(function (res) {
            if (res) {
                _this.api
                    .deleteService(id)
                    .then(function (data) {
                    _this.showError("Deleted Successfully", "Service was deleted");
                    _this.fetchServices(true);
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.showError("Deleting Failed", err.error);
                });
            }
        });
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-services",
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/panel/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/panel/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_api_manager_service__WEBPACK_IMPORTED_MODULE_1__["ApiManagerService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=panel-panel-module.js.map