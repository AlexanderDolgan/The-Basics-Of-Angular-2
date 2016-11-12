//подключение компонента из библиотеки angular/core
import { Component, NgModule } from '@angular/core';

//указание где должно работать приложение
import { BrowserModule } from '@angular/platform-browser';

//импортирование компонента
import { HelloAngular} from './app.component'

//модуль
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HelloAngular ],
    bootstrap: [ HelloAngular ]
})
export class HelloAngularAppModule {}