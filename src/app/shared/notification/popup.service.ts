import { Injectable } from '@angular/core';
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private swalComponent: SwalComponent
  ) {
  }

  private show(icon: "error" | "info" | "warning" | "success", title: string, message: string){
    this.swalComponent.title = title;
    this.swalComponent.text = message;
    this.swalComponent.icon = icon;
    return this.swalComponent.fire();
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
