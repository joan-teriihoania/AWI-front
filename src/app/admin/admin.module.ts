import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import {DataTablesModule} from "angular-datatables";
import { AdminComponent } from './admin.component';
import { UsersTableComponent } from './admin-components/users-table/users-table.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Admin dashboard",
      urls: [{ title: "Admin dashboard", url: "/admin" }, { title: "Admin dashboard" }],
    },
    component: AdminComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    DataTablesModule,
  ],
  declarations: [
    AdminComponent,
    UsersTableComponent,

  ],
})
export class AdminModule {}
