import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from 'src/model/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
 url="http://localhost:1221/agendamentos";
  constructor(private http:HttpClient) { }

  create(agendamento:Agendamento):Observable<Agendamento>{
    return this.http.post<Agendamento>(this.url,agendamento);
  }
}
