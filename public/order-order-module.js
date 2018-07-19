(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./src/app/order/checkout/checkout.component.html":
/*!********************************************************!*\
  !*** ./src/app/order/checkout/checkout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Checkout</h5>\n    <div>\n      Sort:\n    </div>\n    <div style=\"width: 14%;\">\n      <select class=\"minimal\">\n        <option value=\"\" selected style=\"display:none\" disabled>Sort</option>\n        <option>Name</option>\n        <option>Price</option>\n      </select>\n    </div>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div id=\"checkOutHead\">\n  <div class=\"right\">\n    <a>Name</a>\n  </div>\n  <div class=\"middle\">\n    <a>Date</a>\n  </div>\n  <div class=\"leftUp\">\n    <a>Response</a>\n  </div>\n</div>\n\n<div *ngFor=\"let user of users\">\n  <div id=\"checkOutBody\">\n    <div class=\"right\">\n      <a>{{user.name | titlecase}}- Ref: {{user.checkin_store_ref | uppercase}}</a>\n    </div>\n    <div class=\"middle\">\n      <a>{{user.checkout_date | date:'mediumDate'}}</a>\n    </div>\n    <div class=\"left\">\n      <a data-toggle=\"modal\" (click)=\"selectUser(user)\" data-target=\"#recieptModal\">View Receipt</a>\n    </div>\n  </div>\n</div>\n\n<div id=\"recieptModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <p>Price Breakdown</p>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-3\">\n            <p>Name: </p>\n          </div>\n          <div class=\"col-lg-9\">\n            <p>{{selectedUser.name}}</p>\n          </div>\n        </div>\n\n        <!-- <div class=\"row\">\n          <div class=\"col-lg-3\">\n            <p>Room: </p>\n          </div>\n          <div class=\"col-lg-9\">\n            <p>[Room Number]</p>\n          </div>\n        </div> -->\n\n        <div class=\"row\">\n          <div class=\"col-lg-3\">\n            <p>Price Details: </p>\n          </div>\n\n          <div class=\"col-lg-9\">\n\n            <div class=\"row\" *ngFor=\"let order of selectedUserOrders\">\n              <div class=\"col-lg-3\">\n                <p>{{order.name}}</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <p>{{order.price}}</p>\n              </div>\n            </div>\n\n            <hr>\n\n            <div class=\"row\">\n              <div class=\"col-lg-3\">\n                <p>Total</p>\n              </div>\n              <div class=\"col-lg-3\">\n                <p>{{selectedUserTotal}}</p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12 print-reciept\">\n            <button class=\"btn\">Print Reciept</button>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order/checkout/checkout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/order/checkout/checkout.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n#checkOutHead {\n  height: 55px;\n  margin-bottom: 2%;\n  background-color: #f2f2f2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n  flex-direction: row; }\n\n#checkOutHead a {\n  font-family: AvenirNext;\n  font-size: 18px; }\n\n#checkOutBody {\n  margin-bottom: 2%;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  height: 55px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n  flex-direction: row; }\n\n#checkOutBody a {\n  font-family: AvenirNext;\n  font-size: 17px; }\n\n.left {\n  background-color: #74c11d;\n  width: 40%;\n  text-align: center; }\n\n.leftUp {\n  width: 40%; }\n\n.left a {\n  line-height: 55px;\n  color: #ffffff; }\n\n.leftUp a {\n  line-height: 55px; }\n\n.left:hover {\n  cursor: pointer; }\n\n.middle {\n  width: 20%; }\n\n.right {\n  width: 40%; }\n\n.modal-header {\n  text-align: center;\n  background-color: #f2f2f2; }\n\n.modal-header p {\n  color: #74c11d; }\n\n.modal-body {\n  padding: 20px 50px 20px 50px; }\n\n.print-reciept {\n  text-align: center; }\n\n.print-reciept .btn {\n  background-color: #085cfc;\n  color: #fff;\n  border-radius: 0;\n  width: 80%; }\n"

/***/ }),

/***/ "./src/app/order/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/order/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/order-api.service */ "./src/app/order/services/order-api.service.ts");
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




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(api, dialogService) {
        var _this = this;
        this.api = api;
        this.dialogService = dialogService;
        this.selectedUser = {
            name: ""
        };
        this.selectedUserTotal = 0;
        this.fetch = function () {
            _this.api
                .checkedInUsers()
                .then(function (data) {
                console.log(data);
                _this.users = data.users;
            })
                .catch(function (err) {
                _this.showError("Fetching Users Failed", err);
                console.log(err);
            });
        };
    }
    CheckoutComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    CheckoutComponent.prototype.getTotal = function () {
        var total = 0;
        if (this.selectedUserOrders.length > 0) {
            this.selectedUserOrders.forEach(function (x) { return (total += x.total_price); });
        }
        return total;
    };
    CheckoutComponent.prototype.selectUser = function (user) {
        var _this = this;
        this.selectedUser = user;
        console.log(this.selectedUser);
        this.api
            .getUserTotalOrders(this.selectedUser.id)
            .then(function (data) {
            _this.selectedUserOrders = data.oredrs; // to be corrected!
            _this.selectedUserTotal = _this.getTotal();
        })
            .catch(function (err) {
            _this.showError("error", "error");
        });
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/order/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/order/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_api_service__WEBPACK_IMPORTED_MODULE_1__["OrderApiService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/order/generate/generate.component.html":
/*!********************************************************!*\
  !*** ./src/app/order/generate/generate.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"generateForm\" (ngSubmit)=\"onFormSubmit()\">\n    <div class=\"row form-header\">\n        <div class=\"col-lg-12\">\n            <h4>Generate</h4>\n        </div>\n    </div>\n    <fieldset>\n        <div class=\"row\">\n            <div class=\"form-group col-lg-6 col-sm-12\">\n                <label for=\"inputRef\" class=\"control-label\">Room Ref</label>\n                <div>\n                    <input type=\"text\" class=\"form-control\" id=\"inputRef\" formControlName=\"ref\">\n                    <p class=\"text-danger\" *ngIf=\"ref.touched && ref.invalid\">Name field can't be blank</p>\n                </div>\n            </div>\n            <div class=\"form-group col-lg-6 col-sm-12\">\n                <label for=\"inputDate\" class=\"control-label\">Date</label>\n                <div>\n                    <input id=\"inputDate\" type=\"date\" name=\"bday\" max=\"2022-12-31\" min=\"1000-01-01\" class=\"form-control\" formControlName=\"date\">\n                    <p class=\"text-danger\" *ngIf=\"date.touched && date.invalid\">Date field can't be blank</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group row submit-form\">\n            <div class=\"col-lg-12\">\n                <button type=\"submit\" [disabled]=\"!generateForm.valid\" class=\"form-submit-button btn btn-primary\">Submit</button>\n            </div>\n        </div>\n    </fieldset>\n    <div *ngIf=\"code && image\">\n        <div class=\"col-lg-12\" id=\"code\">\n            <a>Token</a>\n            <p>{{code| uppercase}}</p>\n            <a>QR Image</a>\n            <div>\n                <img src=\"{{image}}\">\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/order/generate/generate.component.scss":
/*!********************************************************!*\
  !*** ./src/app/order/generate/generate.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-horizontal {\n  margin: 10%; }\n\n.submit-form {\n  margin-top: 50px;\n  text-align: center; }\n\n.form-submit-button {\n  background-color: #74c11d !important;\n  width: 100%;\n  border-radius: 0;\n  border-color: transparent !important; }\n\n.form-header {\n  margin-bottom: 50px; }\n\na {\n  color: #000; }\n\n#code {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  width: 100%; }\n\n#code img {\n  border: 1px solid #000000;\n  background: white;\n  box-shadow: 0 2px 4px 0 #f2f2f2; }\n\n#code a {\n  color: gray;\n  font-family: AvenirNext;\n  font-size: 14px; }\n\n#code p {\n  font-family: AvenirNext;\n  font-size: 17px;\n  border: 1px grey solid;\n  margin-left: 25%;\n  margin-right: 25%;\n  background: white;\n  box-shadow: 0 2px 4px 0 #f2f2f2; }\n"

/***/ }),

/***/ "./src/app/order/generate/generate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/order/generate/generate.component.ts ***!
  \******************************************************/
/*! exports provided: GenerateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateComponent", function() { return GenerateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_order_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order-api.service */ "./src/app/order/services/order-api.service.ts");
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





var GenerateComponent = /** @class */ (function () {
    function GenerateComponent(fb, dialogService, api) {
        this.fb = fb;
        this.dialogService = dialogService;
        this.api = api;
        this.minDate = new Date();
    }
    GenerateComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_4__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    GenerateComponent.prototype.ngOnInit = function () {
        this.generateForm = this.fb.group({
            ref: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    Object.defineProperty(GenerateComponent.prototype, "ref", {
        get: function () {
            return this.generateForm.get("ref");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenerateComponent.prototype, "date", {
        get: function () {
            return this.generateForm.get("date");
        },
        enumerable: true,
        configurable: true
    });
    GenerateComponent.prototype.onFormSubmit = function () {
        var _this = this;
        if (this.generateForm.valid) {
            var value = this.generateForm.value;
            this.api
                .generate("code", value.ref, value.date)
                .then(function (data) {
                console.log(data);
                _this.image = data.code;
            })
                .catch(function (err) {
                console.log(err);
                _this.showError("QR Failed", err.error.detail);
            });
            this.api
                .generate("token", value.ref, value.date)
                .then(function (data) {
                console.log(data);
                _this.code = data.token;
            })
                .catch(function (err) {
                console.log(err);
                _this.showError("Token Failed", err.error.detail);
            });
        }
    };
    GenerateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-generate",
            template: __webpack_require__(/*! ./generate.component.html */ "./src/app/order/generate/generate.component.html"),
            styles: [__webpack_require__(/*! ./generate.component.scss */ "./src/app/order/generate/generate.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services_order_api_service__WEBPACK_IMPORTED_MODULE_3__["OrderApiService"]])
    ], GenerateComponent);
    return GenerateComponent;
}());



/***/ }),

/***/ "./src/app/order/order-requests/order-requests.component.html":
/*!********************************************************************!*\
  !*** ./src/app/order/order-requests/order-requests.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Requests</h5>\n    <div>\n      Sort:\n    </div>\n    <div style=\"width: 14%;\">\n      <select class=\"minimal\">\n        <option value=\"\" selected style=\"display:none\" disabled>Sort</option>\n        <option>Date</option>\n        <option>Service</option>\n        <option>Service Provider</option>\n        <option>Item number</option>\n        <option>Quantity</option>\n      </select>\n    </div>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n<div *ngFor=\"let order of orders\">\n  <div id=\"currentOrderBody\" class=\"row\">\n    <div class=\"col-s-2 col-md-2 col-lg-2\">\n      <a>\n        <p>Service</p>\n      </a>\n      <p>{{order.service_name | titlecase}}</p>\n    </div>\n    <div class=\" col-md-6 col-lg-6\">\n      <div class=\"upper\">\n        <p> {{order.user_name | titlecase}}- Ref: {{order.checkin_store_ref | uppercase}}</p>\n        <a>\n          <p>{{order.created_at | date:'medium'}}</p>\n        </a>\n      </div>\n      <div class=\"choice\">\n        <div class=\"lowerleft\">\n          <a>\n            <p>Service Provider</p>\n          </a>\n          <p>{{order.provide_name | titlecase}}</p>\n        </div>\n        <div class=\"lowerright\">\n          <a>\n            <p>Item number</p>\n          </a>\n          <p>{{order.product_id}}</p>\n        </div>\n        <div class=\"lowerright\">\n          <a>\n            <p>Quantity</p>\n          </a>\n          <p>{{order.quantity}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-s-4 col-md-4 col-lg-4\">\n      <div class=\"row choice\">\n        <i class=\"fas fa-check-circle\" style=\"color :#74c11d;\" (click)=\"serve(order.id)\"></i>\n        <i class=\"fas fa-times-circle\" style=\"color :#c13712;\" (click)=\"cancel(order.id)\"></i>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order/order-requests/order-requests.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/order/order-requests/order-requests.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n#currentOrderBody {\n  background: white;\n  height: 140px;\n  margin-bottom: 2%;\n  background-color: #ffffff;\n  text-align: center;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08); }\n\n#currentOrderBody div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 0%;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 #f2f2f2; }\n\n.noshadow {\n  box-shadow: 0 0 0 0 #f2f2f2; }\n\n#currentOrderBody div div {\n  justify-content: space-around;\n  width: 100%;\n  height: 50%;\n  box-shadow: 0 0 0 0 #f2f2f2; }\n\n#currentOrderBody i {\n  font-size: 40px; }\n\n#currentOrderBody i:hover {\n  cursor: pointer; }\n\n.upper {\n  align-items: left !important;\n  padding: 5% !important; }\n\n.upper a p {\n  margin-top: -1rem; }\n\n.lowerleft {\n  height: 100% !important;\n  border-top: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n  flex-grow: 2; }\n\n.lowerright {\n  height: 100% !important;\n  border-top: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n  flex-grow: 1; }\n\n#currentOrderBody div a p {\n  margin-bottom: 0rem;\n  font-family: AvenirNext;\n  font-size: 14px;\n  color: #95989a; }\n\n.choice {\n  flex-direction: row !important; }\n"

/***/ }),

/***/ "./src/app/order/order-requests/order-requests.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/order/order-requests/order-requests.component.ts ***!
  \******************************************************************/
/*! exports provided: OrderRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRequestsComponent", function() { return OrderRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/order-api.service */ "./src/app/order/services/order-api.service.ts");
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




var OrderRequestsComponent = /** @class */ (function () {
    function OrderRequestsComponent(api, dialogService) {
        var _this = this;
        this.api = api;
        this.dialogService = dialogService;
        this.fetch = function () {
            _this.api
                .currentOrders()
                .then(function (data) {
                _this.orders = data.orders;
            })
                .catch(function (err) {
                _this.showError("Cancel Order Failed", err);
                console.log(err);
            });
        };
    }
    OrderRequestsComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    OrderRequestsComponent.prototype.serve = function (id) {
        var _this = this;
        this.api
            .serve(id)
            .then(function () {
            _this.showError("Serve Order", "Order Successfully Served");
            _this.fetch();
        })
            .catch(function (err) {
            _this.showError("Serve Order Failed", err);
            console.log(err);
        });
    };
    OrderRequestsComponent.prototype.cancel = function (id) {
        var _this = this;
        this.api
            .cancel(id)
            .then(function () {
            _this.showError("Cancel Order", "Order Successfully Cancelled");
            _this.fetch();
        })
            .catch(function (err) {
            _this.showError("Cancel Order Failed", err);
            console.log(err);
        });
    };
    OrderRequestsComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    OrderRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-order-requests",
            template: __webpack_require__(/*! ./order-requests.component.html */ "./src/app/order/order-requests/order-requests.component.html"),
            styles: [__webpack_require__(/*! ./order-requests.component.scss */ "./src/app/order/order-requests/order-requests.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_api_service__WEBPACK_IMPORTED_MODULE_1__["OrderApiService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], OrderRequestsComponent);
    return OrderRequestsComponent;
}());



/***/ }),

/***/ "./src/app/order/order-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_requests_order_requests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-requests/order-requests.component */ "./src/app/order/order-requests/order-requests.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/order/checkout/checkout.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/order/reports/reports.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/order/generate/generate.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "",
        redirectTo: "generate",
        pathMatch: "full"
    },
    {
        path: "requests",
        component: _order_requests_order_requests_component__WEBPACK_IMPORTED_MODULE_2__["OrderRequestsComponent"]
    },
    {
        path: "checkout",
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"]
    },
    {
        path: "reports",
        component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"]
    },
    {
        path: "generate",
        component: _generate_generate_component__WEBPACK_IMPORTED_MODULE_5__["GenerateComponent"]
    }
];
var OrderRoutingModule = /** @class */ (function () {
    function OrderRoutingModule() {
    }
    OrderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrderRoutingModule);
    return OrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/order/order-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _order_requests_order_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-requests/order-requests.component */ "./src/app/order/order-requests/order-requests.component.ts");
/* harmony import */ var _services_order_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/order-api.service */ "./src/app/order/services/order-api.service.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/order/checkout/checkout.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/order/reports/reports.component.ts");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generate/generate.component */ "./src/app/order/generate/generate.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            declarations: [
                _order_requests_order_requests_component__WEBPACK_IMPORTED_MODULE_4__["OrderRequestsComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_7__["ReportsComponent"],
                _generate_generate_component__WEBPACK_IMPORTED_MODULE_8__["GenerateComponent"]
            ],
            providers: [_services_order_api_service__WEBPACK_IMPORTED_MODULE_5__["OrderApiService"]]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ }),

/***/ "./src/app/order/reports/reports.component.html":
/*!******************************************************!*\
  !*** ./src/app/order/reports/reports.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderHeader\" class=\"row\">\n  <div class=\"col\">\n    <h5>Reports</h5>\n    <div>\n      Sort:\n    </div>\n    <div style=\"width: 14%;\">\n      <select class=\"minimal\">\n        <option value=\"\" selected style=\"display:none\" disabled>Sort</option>\n        <option>Date</option>\n        <option>Price</option>\n        <option>Quantity</option>\n        <option>Total Price</option>\n      </select>\n    </div>\n    <div>\n      <input class=\"collapse search\" id=\"search\" type=\"text\" />\n    </div>\n    <div>\n      <a id=\"hover\" data-toggle=\"collapse\" data-target=\"#search\">\n        <i class=\"fas fa-search\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<div id=\"checkOutHead\">\n  <div class=\"left\">\n    <a>Name</a>\n  </div>\n  <div class=\"leftmiddle\">\n    <a>Date</a>\n  </div>\n  <div class=\"middle\">\n    <a>Price</a>\n  </div>\n  <div class=\"rightmiddle\">\n    <a>Quantity</a>\n  </div>\n  <div class=\"right\">\n    <a>Total Price</a>\n  </div>\n</div>\n\n<div *ngFor=\"let order of orders\">\n  <div id=\"checkOutBody\">\n    <div class=\"left\" style=\"width: 17%;\">\n      <a>{{order.name | titlecase}}</a>\n    </div>\n    <div class=\"leftmiddle\">\n      <a>{{order.created_at | date}}</a>\n    </div>\n    <div class=\"middle\">\n      <a>{{order.price}}</a>\n    </div>\n    <div class=\"rightmiddle\">\n      <a>{{order.quantity}}</a>\n    </div>\n    <div class=\"right\">\n      <a>{{order.total_price}}</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order/reports/reports.component.scss":
/*!******************************************************!*\
  !*** ./src/app/order/reports/reports.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHeader {\n  margin-bottom: 2%; }\n\n#orderHeader div h5 {\n  float: left;\n  margin-right: 10%;\n  margin-left: 2%;\n  padding-top: 0.5%; }\n\n#orderHeader div div {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal; }\n\nselect {\n  width: 100%;\n  background-color: white;\n  border: thin solid #dfdfdf;\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 0.5em 0.5em 1em;\n  /* reset */\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\nselect.minimal {\n  background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat; }\n\nselect.minimal:hover,\nselect.minimal:focus {\n  cursor: pointer;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n  border-color: #74c11d;\n  outline: 0; }\n\nselect:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #000; }\n\n#hover:hover,\n#hover:focus {\n  cursor: pointer;\n  color: #74c11d !important;\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s; }\n\n.search {\n  padding: 3%; }\n\n#checkOutHead {\n  height: 55px;\n  margin-bottom: 2%;\n  background-color: #f2f2f2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n  padding-right: 5%;\n  flex-direction: row; }\n\n#checkOutHead a {\n  font-family: AvenirNext;\n  font-size: 18px; }\n\n#checkOutBody {\n  height: 55px;\n  margin-bottom: 2%;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 5%;\n  padding-right: 5%;\n  flex-direction: row;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); }\n\n#checkOutBody a {\n  font-family: AvenirNext;\n  font-size: 17px; }\n\n.left {\n  width: 20%; }\n\n.leftmiddle {\n  width: 20%; }\n\n.middle {\n  width: 15%; }\n\n.rightmidle {\n  width: 15%; }\n\n.right {\n  width: 20%; }\n"

/***/ }),

/***/ "./src/app/order/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/order-api.service */ "./src/app/order/services/order-api.service.ts");
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




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(api, dialogService) {
        var _this = this;
        this.api = api;
        this.dialogService = dialogService;
        this.fetch = function () {
            _this.api
                .allOrders()
                .then(function (data) {
                _this.orders = data.orders;
            })
                .catch(function (err) {
                _this.showError("Cancel Orders Fetching Failed", err);
                console.log(err);
            });
        };
    }
    ReportsComponent.prototype.showError = function (title, message) {
        var disposable = this.dialogService.addDialog(_core_text_modal_text_modal_component__WEBPACK_IMPORTED_MODULE_3__["TextModalComponent"], {
            title: title,
            message: message
        });
    };
    ReportsComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-reports",
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/order/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/order/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_api_service__WEBPACK_IMPORTED_MODULE_1__["OrderApiService"],
            ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["DialogService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/order/services/order-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/order/services/order-api.service.ts ***!
  \*****************************************************/
/*! exports provided: OrderApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderApiService", function() { return OrderApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderApiService = /** @class */ (function () {
    function OrderApiService(http) {
        var _this = this;
        this.http = http;
        this.generate = function (type, ref, date) {
            return _this.http
                .get("/api/store/generate/" + type + "/" + ref + "/" + date)
                .toPromise();
        };
        this.currentOrders = function () { return _this.http.get("/api/store/order/current").toPromise(); };
        this.checkedInUsers = function () { return _this.http.get("/api/store/users").toPromise(); };
        this.allOrders = function () { return _this.http.get("/api/store/order").toPromise(); };
        this.serve = function (id) { return _this.http.get("/api/store/order/serve/" + id).toPromise(); };
        this.cancel = function (id) { return _this.http.get("/api/store/order/cancel/" + id).toPromise(); };
        this.getUserTotalOrders = function (userId) {
            return _this.http.get("/api/store/users/" + userId).toPromise();
        };
    }
    OrderApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderApiService);
    return OrderApiService;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map