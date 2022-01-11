import {Component, Input, OnInit} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {AllergenesService} from "../../dao/allergenes.service";
import {NotificationService} from "../../notification/notification.service";
import {AllergenesEditFormComponent} from "../allergenes-edit-form/allergenes-edit-form.component";
import {RecipeCategory} from "../../classes/recipecategory";
import {RecipeCategoriesService} from "../../dao/recipe-categories.service";
import {RecipeCategoriesEditFormComponent} from "../recipe-categories-edit-form/recipe-categories-edit-form.component";

@Component({
  selector: 'app-recipe-categories-table',
  templateUrl: './recipe-categories-table.component.html',
  styleUrls: ['./recipe-categories-table.component.scss']
})
export class RecipeCategoriesTableComponent implements OnInit {
  @Input() recipeCategories: RecipeCategory[] = []
  dtOptions: any = {}

  constructor(
    private recipeCategoryService: RecipeCategoriesService,
    private notificationService: NotificationService
  ) {}

  editFormClicked(component: RecipeCategoriesEditFormComponent){
    component.open()
  }

  deleteClicked(recipe_category: RecipeCategory){
    this.recipeCategoryService.delete(recipe_category).then(() => {
      this.recipeCategories = this.recipeCategories.filter(obj => obj !== recipe_category);
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
