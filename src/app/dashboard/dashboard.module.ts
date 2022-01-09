import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";
import { SalesSummaryComponent } from "./dashboard-components/sales-summary/sales-summary.component";
import { FeedsComponent } from "./dashboard-components/feeds/feeds.component";
import { TopSellingComponent } from "./dashboard-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./dashboard-components/blog-cards/blog-cards.component";
import { AllergenesTableComponent } from '../shared/components/allergenes-table/allergenes-table.component';
import { AllergenesEditFormComponent } from "../shared/components/allergenes-edit-form/allergenes-edit-form.component";
import {DataTablesModule} from "angular-datatables";
import {RecipesTableComponent} from "../shared/components/recipes-table/recipes-table.component";
import {AllergenesCreateFormComponent} from "../shared/components/allergenes-create-form/allergenes-create-form.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
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
    DashboardComponent,
    SalesSummaryComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent,
    AllergenesTableComponent,
    AllergenesEditFormComponent,
    AllergenesCreateFormComponent,
    RecipesTableComponent
  ],
})
export class DashboardModule {}
