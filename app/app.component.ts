//подключение компонента из библиотеки angular/core
import { Component } from '@angular/core';

//аннотация - функция - мета дата - дополнительная информация о компоненте
@Component({
    selector: 'hello-angular',
    template: `
        <div>
            <ul>
            <!-- структурная дирректива *ngFor-->
                <li *ngFor="let name of names">Hello {{ name }}!</li>
            </ul>
        </div>
    `
})

//{{}} - шаблонный тег

//класс
export class HelloAngular {
    //свойство
    names:string[];

    //начальная инициализация
    constructor() {
        this.names = ['Zar', 'Zer', 'Zur'];
    }
}