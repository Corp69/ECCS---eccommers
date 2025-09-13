import { Routes } from '@angular/router';
import { AuthGuard } from './auth/login/guards/auth.guard';

export const routes: Routes = [


  {
    path: 'auth',
    loadComponent: () => import('./auth/principal.component'),
    children: [
      {
        path: 'login',
        title: 'EccommerS: Login - 2025',
        loadComponent: () => import('./auth/login/login.component'),
      },
      {
        path: 'registro',
        title: 'EccommerS: Registro - 2025',
        loadComponent: () => import('./auth/registro/registro.component'),
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];
