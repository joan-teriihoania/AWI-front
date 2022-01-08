import { Component, Input, OnInit } from '@angular/core';
import {Ingredient} from "../../classes/ingredient";

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.scss']
})
export class IngredientsTableComponent implements OnInit {
  @Input() ingredients: Ingredient[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
