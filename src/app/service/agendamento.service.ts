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
  
  findAll():Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(this.url);
  }

  retrieveById(idAgendamento: string): Observable<Agendamento> { 
    const url2 = `${this.url}/${idAgendamento}`
    return this.http.get<Agendamento>(url2);
}

update(agendamento:Agendamento):Observable<Agendamento>{
  const url2 = `${this.url}/${agendamento.idAgendamento}`
  return this.http.put<Agendamento>(url2, agendamento);
 }
}
