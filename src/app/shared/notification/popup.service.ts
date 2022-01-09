import { Injectable } from '@angular/core';
import {SwalPortalComponent} from "@sweetalert2/ngx-sweetalert2/lib/swal-portal.component";
import {SwalComponent, SwalPortalDirective, SwalPortalTarget} from "@sweetalert2/ngx-sweetalert2";
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
  ) {
  }

  private show(icon: "error" | "info" | "warning" | "success", title: string, message: string){
    return swal.fire({
      title,
      html: message,
      icon
    })
  }

  showInfo(title: string, message: string){
    return this.show("info", title, message)
  }

  showError(title: string, message: string){
    return this.show("error", title, message)
  }

  showWarning(title: string, message: string){
    return this.show("warning", title, message)
  }

  showSuccess(title: string, message: string){
    return this.show("success", title, message)
  }
}
