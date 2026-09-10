import { Routes } from '@angular/router';
import { Catalogo } from './components/catalogo/catalogo';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: 'catalogo', component: Catalogo },
  { path: 'admin', component: AdminDashboard },

  { path: '', redirectTo: '/catalogo', pathMatch: 'full' } 
];