import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DespesasService } from '../shared/despesas.service';
import { Despesa } from '../shared/despesa';

@Component({
    selector: 'app-despesa-form',
    templateUrl: 'despesa-form.component.html'
})
export class DespesaFormComponent implements OnInit {

    form: FormGroup;
    despesa: Despesa = new Despesa();

    constructor(private despesasService: DespesasService, formBuilder: FormBuilder, private router: Router) { 
        this.form = formBuilder.group({
            nome: ['', [
                Validators.required,
                Validators.minLength(1)
            ]],
            valor: [0, [
                Validators.required
            ]]/*,
            tipoDespesa: formBuilder.group({
                nome: ['', [
                    Validators.required
                ]]
            })*/
        });
    }

    ngOnInit() { }

    salvar() {
        console.log("teste")
        let result, despesaValue = this.form.value;
        this.despesasService.addDespesa(despesaValue); 
        this.router.navigate(['despesas']);
    }
}