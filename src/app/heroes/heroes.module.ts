import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //si quiero utilizar el component fuera de este modulo
        ListadoComponent
    ],
    imports: [ //solo modulos van aqui
        CommonModule
    ]
})

export class HeroesModule{}