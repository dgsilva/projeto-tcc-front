import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from 'src/model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  endpoint: string = environment.apiUrl + "/login";

  constructor(private http: HttpClient) { }


  Logar(login:Login) {
    return this.http.post(this.endpoint, login);
  }

}
