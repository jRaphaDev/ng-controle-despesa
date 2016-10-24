import { Routes, RouterModule } from '@angular/router';

import { DespesasComponent } from './despesas.component';

const despesasRoutes: Routes = [
  { path: 'despesas', component: DespesasComponent, pathMatch: 'full' }
];

export const despesasRouting = RouterModule.forChild(despesasRoutes);


