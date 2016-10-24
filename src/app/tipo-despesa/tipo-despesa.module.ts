import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { TipoDespesaComponent }   from './tipo-despesa.component';

import { TipoDespesaService } from './shared/tipo-despesa.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    exports: [TipoDespesaComponent],
    declarations: [TipoDespesaComponent],
    providers: [TipoDespesaService],
})
export class TipoDespesaModule { }
