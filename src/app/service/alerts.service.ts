import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertsComponent } from '../alerts/alerts.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private bsModalService: BsModalService
  ) {};

  private showAlert(message:string, typeColor:string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertsComponent);
    bsModalRef.content.typeColor  = typeColor;
    bsModalRef.content.message = message;
  }

  public showAlertDanger(message:string){
    this.showAlert(message, 'danger');
  }

  public showAlertSuccess(message:string){
    this.showAlert(message, 'success');
  }

  public showAlertSecondary(message:string){
    this.showAlert(message, 'secondary');
  }

}
