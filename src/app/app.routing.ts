import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DespesasComponent } from './despesas/despesas.component';
import { DespesaFormComponent } from './despesas/despesa-form/despesa-form.component';
import { TipoDespesaComponent } from './tipo-despesa/tipo-despesa.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'tipos-despesa', component: TipoDespesaComponent},
  { path: 'despesas', component: DespesasComponent },
  { path: 'despesa/nova', component: DespesaFormComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
