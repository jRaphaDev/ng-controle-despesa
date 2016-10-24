import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DespesasComponent }   from './despesas.component';

import { DespesaFormComponent } from './despesa-form/despesa-form.component';

import { DespesasService } from './shared/despesas.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    exports: [ DespesasComponent ],
    declarations: [ DespesasComponent, DespesaFormComponent ],
    providers: [ DespesasService ],
})
export class DespesasModule { }
