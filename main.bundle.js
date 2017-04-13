webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Villain; });
var Villain = (function () {
    function Villain() {
    }
    return Villain;
}());

//# sourceMappingURL=villain.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "h1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n}\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n}\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n    color: #607D8B;\r\n}\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n    color: #039be5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "[class*='col-'] {\r\n    float: left;\r\n}\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n}\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n}\r\n[class*='col-'] {\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n}\r\n.grid {\r\n    margin: 0;\r\n}\r\n.col-1-4 {\r\n    width: 25%;\r\n}\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #607D8B;\r\n    border-radius: 2px;\r\n}\r\nh4 {\r\n    position: relative;\r\n}\r\n.module:hover {\r\n    background-color: #EEE;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n}\r\n.grid-pad {\r\n    padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n    .module {\r\n        font-size: 10px;\r\n        max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n        margin: 0;\r\n    }\r\n    .module {\r\n        min-width: 60px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "label {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n}\r\ninput {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n}\r\nbutton {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n}\r\nbutton.delete {\r\n  float:right;\r\n  margin-top: 2px;\r\n  margin-right: .8em;\r\n  background-color: gray !important;\r\n  color:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".selected {\r\n           background-color: #CFD8DC !important;\r\n           color: white;\r\n         }\r\n    .villain {\r\n                  margin: 0 0 2em 0;\r\n                  list-style-type: none;\r\n                  padding: 0;\r\n                  width: 15em;\r\n                }\r\n     .villain li {\r\n                  cursor: pointer;\r\n                  position: relative;\r\n                  left: 0;\r\n                  background-color: #EEE;\r\n                  margin: .5em;\r\n                  padding: .3em 0;\r\n\r\n                  height: 1.6em;\r\n                  border-radius: 4px;\r\n                }\r\n    .villain li.selected:hover {\r\n                  background-color: #BBD8DC !important;\r\n                  color: white;\r\n                }\r\n    .villain li:hover {\r\n                  color: #607D8B;\r\n                  background-color: #DDD;\r\n                  left: .1em;\r\n                }\r\n    .villain .text {\r\n                  position: relative;\r\n                  top: -3px;\r\n                }\r\n     .villain .badge {\r\n                  display: inline-block;\r\n                  font-size: small;\r\n                  color: white;\r\n                  padding: 0.8em 0.7em 0 0.7em;\r\n                  background-color: #607D8B;\r\n                  line-height: 1em;\r\n                  position: relative;\r\n                  left: -1px;\r\n                  top: -4px;\r\n                  height: 1.8em;\r\n                  margin-right: .8em;\r\n                  border-radius: 4px 0 0 4px;\r\n                }\r\nbutton.delete {\r\n  float:right;\r\n  margin-top: 2px;\r\n  margin-right: .8em;\r\n  background-color: gray !important;\r\n  color:white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<h3>Top Villains</h3>\r\n<div class=\"grid grid-pad\">\r\n  <div *ngFor=\"let villain of villains\" (click)=\"gotoDetail(villain)\" class=\"col-1-4\">\r\n    <div class=\"module villain\">\r\n      <h4>{{villain.name}}</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"villain\">\r\n  <h2>{{villain.name}} details!</h2>\r\n  <div><label>id: </label>{{villain.id}}</div>\r\n  <div>\r\n      <label>name: </label>\r\n      <input [(ngModel)]=\"villain.name\" placeholder=\"name\"/>\r\n  </div>\r\n  <button (click)=\"goBack()\">Back</button>\r\n  <button (click)=\"save()\">Save</button>\r\n</div>\r\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<h2>My Villains</h2>\r\n<div>\r\n  <label>Hero name:</label> <input #heroName />\r\n  <button (click)=\"add(heroName.value); heroName.value=''\">\r\n    Add\r\n  </button>\r\n</div>\r\n<ul class=\"villain\">\r\n  <li *ngFor=\"let villain of villains\"\r\n      (click)=\"onSelect(villain)\"\r\n      [class.selected]=\"villain === selectedVillain\"\r\n  >\r\n    <span class=\"badge\">{{villain.id}}</span>\r\n    <span>{{villain.name}}</span>\r\n    <button class=\"delete\"\r\n            (click)=\"delete(villain); $event.stopPropagation()\">x</button>\r\n  </li>\r\n</ul>\r\n<div *ngIf=\"selectedVillain\">\r\n  <h2>\r\n    {{selectedVillain.name | uppercase}} is my hero\r\n  </h2>\r\n  <button (click)=\"gotoDetail()\">View Details</button>\r\n</div>\r\n"

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VillainService = (function () {
    function VillainService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    VillainService.prototype.getVillain = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    VillainService.prototype.update = function (villain) {
        var url = this.heroesUrl + "/" + villain.id;
        return this.http
            .put(url, JSON.stringify(villain), { headers: this.headers })
            .toPromise()
            .then(function () { return villain; })
            .catch(this.handleError);
    };
    VillainService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    VillainService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    VillainService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    VillainService.prototype.getVillainById = function (id) {
        return this.getVillain()
            .then(function (villains) { return villains.find(function (villain) { return villain.id === id; }); });
    };
    return VillainService;
}());
VillainService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], VillainService);

var _a;
//# sourceMappingURL=villain.service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__villain_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = "Flander's Company";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        providers: [__WEBPACK_IMPORTED_MODULE_1__villain_service__["a" /* VillainService */]],
        template: "\n      <h1>{{title}}</h1>\n      <nav>\n       <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n       <a routerLink=\"/villains\" routerLinkActive=\"active\">Villains</a>\n     </nav>\n      <router-outlet></router-outlet>\n    ",
        styles: [__webpack_require__(157)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__in_memory_data_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__villain_detail_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__villain_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__villain_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Imports for loading & configuring the in-memory web api







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__in_memory_data_service__["a" /* InMemoryDataService */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: "villains",
                    component: __WEBPACK_IMPORTED_MODULE_10__villain_component__["a" /* VillainComponent */]
                }, {
                    path: "dashboard",
                    component: __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */]
                }, {
                    path: "detail/:id",
                    component: __WEBPACK_IMPORTED_MODULE_8__villain_detail_component__["a" /* VillainDetailComponent */]
                }, {
                    path: "",
                    redirectTo: "/dashboard",
                    pathMatch: "full"
                }
            ], { useHash: true })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__villain_detail_component__["a" /* VillainDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__villain_component__["a" /* VillainComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__villain_service__["a" /* VillainService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__villain_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(router, villainService) {
        this.router = router;
        this.villainService = villainService;
        this.villains = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getVillain();
    };
    DashboardComponent.prototype.getVillain = function () {
        var _this = this;
        this.villainService.getVillain().then(function (villains) { return _this.villains = villains.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (villain) {
        var link = ["/detail", villain.id];
        this.router.navigate(link);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'my-dashboard',
        template: __webpack_require__(162),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__villain_service__["a" /* VillainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__villain_service__["a" /* VillainService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__villain__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__villain_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillainDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VillainDetailComponent = (function () {
    function VillainDetailComponent(villainService, route, location) {
        this.villainService = villainService;
        this.route = route;
        this.location = location;
    }
    VillainDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.villainService.getVillainById(id)
                .then(function (villain) { return _this.villain = villain; });
        });
    };
    VillainDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    VillainDetailComponent.prototype.save = function () {
        var _this = this;
        this.villainService.update(this.villain)
            .then(function () { return _this.goBack(); });
    };
    return VillainDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__villain__["a" /* Villain */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__villain__["a" /* Villain */]) === "function" && _a || Object)
], VillainDetailComponent.prototype, "villain", void 0);
VillainDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'my-villain-detail',
        template: __webpack_require__(163),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__villain_service__["a" /* VillainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__villain_service__["a" /* VillainService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === "function" && _d || Object])
], VillainDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=villain-detail.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__villain_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VillainComponent = (function () {
    function VillainComponent(router, villainService) {
        this.router = router;
        this.villainService = villainService;
    }
    VillainComponent.prototype.ngOnInit = function () {
        this.getVillain();
    };
    VillainComponent.prototype.getVillain = function () {
        var _this = this;
        this.villainService.getVillain().then(function (villains) { return _this.villains = villains; });
    };
    VillainComponent.prototype.gotoDetail = function () {
        var link = ["/detail", this.selectedVillain.id];
        this.router.navigate(link);
    };
    VillainComponent.prototype.onSelect = function (villain) {
        this.selectedVillain = villain;
    };
    VillainComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.villainService.create(name)
            .then(function (hero) {
            _this.villains.push(hero);
            _this.selectedVillain = null;
        });
    };
    VillainComponent.prototype.delete = function (villain) {
        var _this = this;
        this.villainService
            .delete(villain.id)
            .then(function () {
            _this.villains = _this.villains.filter(function (h) { return h !== villain; });
            if (_this.selectedVillain === villain) {
                _this.selectedVillain = null;
            }
        });
    };
    return VillainComponent;
}());
VillainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'my-villain',
        template: __webpack_require__(164),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__villain_service__["a" /* VillainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__villain_service__["a" /* VillainService */]) === "function" && _b || Object])
], VillainComponent);

var _a, _b;
//# sourceMappingURL=villain.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.bundle.js.map