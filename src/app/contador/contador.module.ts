import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [ //si quiero utilizar el component fuera de este modulo
        ContadorComponent
    ],
    imports: [ //solo modulos van aqui
        
    ]
})

export class ContadorModule{}