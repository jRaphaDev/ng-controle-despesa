import { Component, OnInit } from '@angular/core';

import { TipoDespesaService } from './shared/tipo-despesa.service';
import { TipoDespesa } from './shared/tipo-despesa';

@Component({
    selector: 'app-tipo-despesa',
    templateUrl: 'tipo-despesa.component.html'
})
export class TipoDespesaComponent implements OnInit {

    private tiposDespesa: TipoDespesa[] = [];

    constructor(private tipoDespesaService: TipoDespesaService) { }

    ngOnInit() {
        this.tiposDespesa = this.tipoDespesaService.getTiposDespesa();
     }

}