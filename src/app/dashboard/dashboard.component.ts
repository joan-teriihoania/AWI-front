import { Component, AfterViewInit } from '@angular/core';
import {Allergene} from "../shared/classes/allergene";
import {AllergenesService} from "../shared/dao/allergenes.service";
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  allergenes: Allergene[] = []
  constructor(allergeneService: AllergenesService) {
    this.subtitle = 'This is some text within a card block.';
    allergeneService.getAll().then((allergenes) => {
      console.log(allergenes)
      this.allergenes = allergenes
    }).catch(console.error)
  }

  getAllergenes(){
    return this.allergenes
  }

  ngAfterViewInit() { }
}
