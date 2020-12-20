import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../models/Api.model';
import { User } from '../models/userModel';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public api: Api = new Api();
  public users: User[] = [];
  public lang: string;
  public page: number;
  public local: string;
  public arr: any;

  constructor(
    private auth: AuthService,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertsService
  ) { }

  public next() {
    this.router.navigate([`../`]);
    setTimeout(() => {
      if (!!this.local && !!this.lang)
        this.router.navigate([`/home/${this.lang}/${this.local}/${+this.page + 1}`]);
    }, 100)
  }

  public previous() {
    this.router.navigate([`../`]);
    setTimeout(() => {
      if (!!this.local && !!this.lang)
        this.router.navigate([`/home/${this.lang}/${this.local}/${+this.page - 1}`]);
    }, 100)
  }

  ngOnInit(): void {
    this.lang = this.route.snapshot.params["lang"];
    this.local = this.route.snapshot.params["local"];
    this.page = this.route.snapshot.params["id"];
    console.log('ok');
    this.auth.getUsers(this.local, this.lang, this.page, 8).subscribe((resp: Api) => {
      this.api = resp;
    }, (error: HttpErrorResponse) => {
      if (error.status === 403)
        this.alert.showAlertDanger("Acesso esgotado!")
    })

    setTimeout(() => {
      let cont = 0;
      this.api.items.forEach((item) => {
        setTimeout(() => {
          this.userService.getUsers(item).subscribe((resp: User) => {
            this.users.push(resp);
            console.log(this.users);
          }, (error: HttpErrorResponse) => {
            cont++;
            if (error.status === 403 && cont === 1)
              this.alert.showAlertDanger("Acesso negado!")
          })
        }, 800)
      })
    }, 1000)
  }

}
