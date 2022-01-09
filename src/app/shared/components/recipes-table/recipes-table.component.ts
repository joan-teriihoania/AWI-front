import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../classes/recipe";

@Component({
  selector: 'app-recipes-table',
  templateUrl: './recipes-table.component.html',
  styleUrls: ['./recipes-table.component.scss']
})
export class RecipesTableComponent implements OnInit {
  @Input() recipes: Recipe[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
