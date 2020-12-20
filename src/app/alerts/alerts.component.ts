import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() message:string;
  @Input() typeColor:string = 'success';



  constructor(
    public modal:BsModalRef
  ) { }

  public onClose(){
    this.modal.hide();
  }

  ngOnInit(): void {
  }

}
