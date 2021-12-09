import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = "http://localhost:1221/cliente";
  constructor( private http:HttpClient) { }

  create(cliente:Cliente):Observable<Cliente>{
  return this.http.post<Cliente>(this.url,cliente); 
  }

  findAll():Observable<Cliente[]>{
 return this.http.get<Cliente[]>(this.url);
  }
}
