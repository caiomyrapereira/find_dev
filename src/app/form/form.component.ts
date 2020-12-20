import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '../models/Input.model';
import { AlertsService } from '../service/alerts.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public input: Input = new Input();
  public perPage: string = '8';


  constructor(
    private router: Router,
    private alert: AlertsService
  ) { }

  public enviar() {
    this.router.navigate([`../`]);
    setTimeout(() => {
      if (!!this.input.local && !!this.input.lang)
        this.router.navigate([`/home/${this.input.lang}/${this.input.local}/1`]);
      else
        this.alert.showAlertDanger('Preencher todos os campos');
    }, 100)
  }

  ngOnInit(): void {
  }

}
