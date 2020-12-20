import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../models/Url.model';
import { User } from '../models/userModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private auth:AuthService
  ) { }

  public getUsers(urlUser:Url):Observable<User>{
    return this.http.get<User>(urlUser.url, this.auth.token );
  } 
}
