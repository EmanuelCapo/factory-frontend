import { Routes } from '@angular/router';
import { SalesComponent } from './sales/components/sales/sales.component';

export const routes: Routes = [
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: '**',
    redirectTo: 'sales',
  }
];
