import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Allergene} from "../../classes/allergene";
import {AllergenesEditFormComponent} from "../allergenes-edit-form/allergenes-edit-form.component";
import {AllergenesService} from "../../dao/allergenes.service";
import {NotificationService} from "../../notification/notification.service";
import {ADTSettings} from "angular-datatables/src/models/settings";

@Component({
  selector: 'app-allergenes-table',
  templateUrl: './allergenes-table.component.html',
})
export class AllergenesTableComponent implements OnInit {
  @Input() allergenes: Allergene[] = []
  dtOptions: any = {}

  constructor(
    private allergeneService: AllergenesService,
    private notificationService: NotificationService
  ) {}

  editFormClicked(component: AllergenesEditFormComponent){
    component.open()
  }

  deleteClicked(allergene: Allergene){
    this.allergeneService.delete(allergene).then(() => {
      this.allergenes = this.allergenes.filter(obj => obj !== allergene);
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
