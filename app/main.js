"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//подключение компонента из библиотеки angular/core
var core_1 = require('@angular/core');
//указание где долно работать приложение
var platform_browser_1 = require('@angular/platform-browser');
//используем браузер для динамической компиляции
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//аннотация - функция - мета дата - дополнительная информация о компоненте
var HelloAngular = (function () {
    function HelloAngular() {
    }
    HelloAngular = __decorate([
        core_1.Component({
            selector: 'hello-angular',
            template: "\n        <div>\n            Hello, Angular 2!\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HelloAngular);
    return HelloAngular;
}());
//модуль
var HelloAngularAppModule = (function () {
    function HelloAngularAppModule() {
    }
    HelloAngularAppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [HelloAngular],
            bootstrap: [HelloAngular]
        }), 
        __metadata('design:paramtypes', [])
    ], HelloAngularAppModule);
    return HelloAngularAppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);
//# sourceMappingURL=main.js.map