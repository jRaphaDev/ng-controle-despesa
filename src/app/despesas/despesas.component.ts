import { Component, OnInit } from '@angular/core';

import { DespesasService } from './shared/despesas.service';
import { Despesa } from './shared/despesa';

@Component({
    selector: 'app-despesas',
    templateUrl: 'despesas.component.html'
})
export class DespesasComponent implements OnInit {

    private despesas: Despesa[] = [];

    constructor(private despesasService: DespesasService) { }

    ngOnInit() { 
        this.despesas = this.despesasService.getDespesas();
    }
    
}