import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {PagenotfoundComponent} from "./shared/components/system/pagenotfound/pagenotfound.component";
import {LoginFormComponent} from "./shared/components/login-form/login-form.component";

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'account/login',
        component: LoginFormComponent
      },
      {
        path: '**',
        component: PagenotfoundComponent
      }
    ]
  }
];
