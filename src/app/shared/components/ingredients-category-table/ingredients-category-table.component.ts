import { Component, Input, OnInit } from '@angular/core';
import {IngredientCategory} from "../../classes/ingredientcategory";

@Component({
  selector: 'app-ingredients-category-table',
  templateUrl: './ingredients-category-table.component.html',
  styleUrls: ['./ingredients-category-table.component.scss']
})
export class IngredientsCategoryTableComponent implements OnInit {
  @Input() ingredientscategory: IngredientCategory[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
