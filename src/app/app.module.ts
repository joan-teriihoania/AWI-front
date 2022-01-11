import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';


import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {ApiInterceptor} from "./shared/http/api.interceptor";
import {ToastrModule} from "ngx-toastr";
import {DataTablesModule} from "angular-datatables";
import { TopRightUserComponent } from './shared/header/top-right-user/top-right-user.component';
import {PagenotfoundComponent} from "./shared/components/system/pagenotfound/pagenotfound.component";
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { RegisterFormComponent } from './shared/components/register-form/register-form.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { AccountActivationComponent } from './shared/components/account-activation/account-activation.component';
import { AccountResetRequestComponent } from './shared/components/account-reset-request/account-reset-request.component';
import { AccountResetPageComponent } from './shared/components/account-reset-page/account-reset-page.component';
import { RecipeCategoriesTableComponent } from './shared/components/recipe-categories-table/recipe-categories-table.component';
import { RecipeCategoriesCreateFormComponent } from './shared/components/recipe-categories-create-form/recipe-categories-create-form.component';
import { RecipeCategoriesEditFormComponent } from './shared/components/recipe-categories-edit-form/recipe-categories-edit-form.component';
import { IngredientsEditFormComponent } from './shared/components/ingredients-edit-form/ingredients-edit-form.component';
import { IngredientsCreateFormComponent } from './shared/components/ingredients-create-form/ingredients-create-form.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    TopRightUserComponent,
    PagenotfoundComponent,
    LoginFormComponent,
    RegisterFormComponent,
    AccountActivationComponent,
    AccountResetRequestComponent,
    AccountResetPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, {useHash: false, relativeLinkResolution: 'legacy'}),
    PerfectScrollbarModule,
    ToastrModule.forRoot(),
    DataTablesModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
