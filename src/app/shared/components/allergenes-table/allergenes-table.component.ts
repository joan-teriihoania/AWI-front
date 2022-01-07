import {Component, Input, OnInit} from '@angular/core';
import {Allergene} from "../../classes/allergene";

@Component({
  selector: 'app-allergenes-table',
  templateUrl: './allergenes-table.component.html',
})
export class AllergenesTableComponent implements OnInit {
  @Input() allergenes: Allergene[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
