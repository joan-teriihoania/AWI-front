import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../shared/classes/user";
import {ADTSettings} from "angular-datatables/src/models/settings";
import {UsersService} from "../../../shared/dao/users.service";
import {NotificationService} from "../../../shared/notification/notification.service";
import swal from "sweetalert2";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  @Input() users: User[] = []
  dtOptions: any = {}

  constructor(
    private userService: UsersService,
    private notificationService: NotificationService
  ) { }

  editFormClicked(user: User){
    swal.fire({
      title: 'Modification de mail',
      input: 'email',
      inputValue: user.email,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enregistrer',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        const copyUser: User = JSON.parse(JSON.stringify(user))
        copyUser.email = email
        this.userService.changeEmail(copyUser).then(r => {
          this.updateUsers()
          swal.hideLoading()
          swal.fire({
            icon: "success",
            title: "Mail modifié"
          })
        }).catch(err => {
          swal.showValidationMessage("Erreur : " + err.error)
        })
      },
      allowOutsideClick: () => !swal.isLoading()
    })
  }

  updateUsers(){
    this.userService.getAll().then(r => {
      console.log(r)
      return this.users = r;
    })
  }

  deleteClicked(user: User){
    this.userService.delete(user).then(() => {
      this.notificationService.showSuccess("Utilisateur supprimé", "")
      this.updateUsers()
    }).catch(err => {
      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  activateClicked(user: User){
    this.userService.activate(user).then(() => {
      this.notificationService.showSuccess("Utilisateur activé", "")
      this.updateUsers()
    }).catch(err => {
      this.notificationService.showError(err.error, "Erreur rencontrée")
    })
  }

  deactivateClicked(user: User){
    this.userService.deactivate(user).then(() => {
      this.notificationService.showSuccess("Utilisateur désactivé", "")
      this.updateUsers()
    }).catch(err => {
      swal.showValidationMessage("Erreur : " + err.error)
    })
  }

  blockClicked(user: User){
    swal.fire({
      title: 'Blocage de compte',
      input: 'text',
      inputPlaceholder: "Raison du blocage",
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enregistrer',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        this.userService.block(user).then(() => {
          this.updateUsers()
          swal.fire({
            icon: "success",
            title: "Utilisateur bloqué"
          })
        }).catch(err => {
          this.notificationService.showError(err.error, "Erreur rencontrée")
        })
      },
      allowOutsideClick: () => !swal.isLoading()
    })
  }

  unblockClicked(user: User){
    this.userService.unblock(user).then(() => {
      this.notificationService.showSuccess("Utilisateur débloqué", "")
      this.updateUsers()
    }).catch(err => {
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
