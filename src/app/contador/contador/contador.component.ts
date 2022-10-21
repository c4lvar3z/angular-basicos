import  { Component } from '@angular/core'
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{base}}</strong></h3>


        <h1>{{ 1 + 1 }}</h1>

        <button (click)= "acumular(base)"> + {{base}}</button>

        <span> {{ numero }} </span>

        <!--<button (click)= " numero = numero - 1;"> - 1</button>-->
        <button (click)= "acumular(-base)"> - {{base}}</button>
    `
})
export class ContadorComponent{
    //titulo = 'Contador App';
    public titulo: string = 'Contador App';
    numero: number = 10;
    base:number = 5;
    Sumar ():void{
        this.numero = this.numero + 1;
    }

    Restar ():void{
        this.numero -= 1;
    }

    acumular(valor:number){
        this.numero += valor;
    }
}