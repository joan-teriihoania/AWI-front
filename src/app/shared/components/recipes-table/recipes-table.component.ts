import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../classes/recipe";
import {Allergene} from "../../classes/allergene";
import {AllergenesService} from "../../dao/allergenes.service";
import {NotificationService} from "../../notification/notification.service";
import {AllergenesEditFormComponent} from "../allergenes-edit-form/allergenes-edit-form.component";
import {RecipesEditFormComponent} from "../recipes-edit-form/recipes-edit-form.component";
import {RecipesService} from "../../dao/recipes.service";

@Component({
  selector: 'app-recipes-table',
  templateUrl: './recipes-table.component.html',
  styleUrls: ['./recipes-table.component.scss']
})
export class RecipesTableComponent implements OnInit {
  @Input() recipes: Recipe[] = []
  dtOptions: any = {}

  constructor(
    private recipeService: RecipesService,
    private notificationService: NotificationService
  ) {}

  editFormClicked(component: RecipesEditFormComponent){
    component.open()
  }

  deleteClicked(recipe: Recipe){
    this.recipeService.delete(recipe).then(() => {
      this.recipes = this.recipes.filter(obj => obj !== recipe);
    }).catch((err) => {
      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        processing:     "Traitement en cours...",
        search:         "Rechercher&nbsp;:",
        lengthMenu:    "Afficher _MENU_ &eacute;l&eacute;ments",
        info:           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
        infoEmpty:      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
        infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
        infoPostFix:    "",
        loadingRecords: "Chargement en cours...",
        zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; afficher",
        emptyTable:     "Aucune donnée disponible dans le tableau",
        paginate: {
          first:      "Premier",
          previous:   "Pr&eacute;c&eacute;dent",
          next:       "Suivant",
          last:       "Dernier"
        },
        aria: {
          sortAscending:  ": activer pour trier la colonne par ordre croissant",
          sortDescending: ": activer pour trier la colonne par ordre décroissant"
        }
      },
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  }

}
