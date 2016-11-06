//подключение компонента из библиотеки angular/core
import { Component, NgModule } from '@angular/core';

//указание где долно работать приложение
import { BrowserModule } from '@angular/platform-browser';

//используем браузер для динамической компиляции
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//аннотация - функция - мета дата - дополнительная информация о компоненте
@Component({
    selector: 'hello-angular',
    template: `
        <div>
            Hello, Angular 2!
        </div>
    `
})
//класс
class HelloAngular {}

//модуль
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HelloAngular ],
    bootstrap: [ HelloAngular ]
})
class HelloAngularAppModule {}

platformBrowserDynamic().bootstrapModule(HelloAngularAppModule);