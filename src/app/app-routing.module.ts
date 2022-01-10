import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {PagenotfoundComponent} from "./shared/components/system/pagenotfound/pagenotfound.component";
import {LoginFormComponent} from "./shared/components/login-form/login-form.component";
import {RegisterFormComponent} from "./shared/components/register-form/register-form.component";
import {AccountActivationComponent} from "./shared/components/account-activation/account-activation.component";
import {AccountResetPageComponent} from "./shared/components/account-reset-page/account-reset-page.component";
import {AccountResetRequestComponent} from "./shared/components/account-reset-request/account-reset-request.component";

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
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'account/login',
        component: LoginFormComponent
      },
      {
        path: 'account/register',
        component: RegisterFormComponent
      },
      {
        path: 'account/activate/:id',
        component: AccountActivationComponent
      },
      {
        path: 'account/reset/:id',
        component: AccountResetPageComponent
      },
      {
        path: 'account/reset',
        component: AccountResetRequestComponent
      },
      {
        path: '**',
        component: PagenotfoundComponent
      }
    ]
  }
];
