import { Injectable } from '@angular/core';

import { TipoDespesa } from './tipo-despesa';

@Injectable()
export class TipoDespesaService {

    constructor() { }

    tiposDespesa: TipoDespesa[] = [
        {id:1, nome:'Carro'},
        {id:2, nome:'Casa'},
        {id:2, nome:'Mercado'},
        {id:2, nome:'Lazer'}
    ]

    getTiposDespesa(){
        return this.tiposDespesa;
    }
}