import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../models/Api.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
   ) { }

   public token = {
     headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa(environment.token))
   }

   public getUsers(location:string, lang:string, page:number, perPage:number):Observable<Api>{
     return this.http.get<Api>(`https://api.github.com/search/users?q=location:${location}+language:${lang}&sort=followers&order=desc&page=${page}&per_page=${perPage}`, this.token )
   } 
}
