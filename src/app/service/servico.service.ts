import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from 'src/model/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  url="http://localhost:1221/servicos";

  constructor(private http:HttpClient) { }

  create(servico:Servico):Observable<Servico>{
    return this.http.post<Servico>(this.url,servico);
  }

  findAll():Observable<Servico[]>{
    return this.http.get<Servico[]>(this.url);
  }
}
