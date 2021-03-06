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
//аннотация - функция - мета дата - дополнительная информация о компоненте
var HelloAngular = (function () {
    //начальная инициализация
    function HelloAngular() {
        this.names = ['Zar', 'Zer', 'Zur'];
    }
    HelloAngular = __decorate([
        core_1.Component({
            selector: 'hello-angular',
            template: "\n        <div>\n            <ul>\n            <!-- \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043D\u0430\u044F \u0434\u0438\u0440\u0440\u0435\u043A\u0442\u0438\u0432\u0430 *ngFor-->\n                <li *ngFor=\"let name of names\">Hello {{ name }}!</li>\n            </ul>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HelloAngular);
    return HelloAngular;
}());
exports.HelloAngular = HelloAngular;
//# sourceMappingURL=app.component.js.map