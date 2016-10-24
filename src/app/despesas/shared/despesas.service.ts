import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Despesa } from './despesa';

@Injectable()
export class DespesasService {

    despesas: Despesa[] = [
        {id:1, nome:'Combustivel', valor:30.00},
        {id:2, nome:'Arroz', valor:18.90}
    ]

    getDespesas(){
        return this.despesas;
    }

    addDespesa(despesa) {
        this.despesas.push(despesa);
    }
}