import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profissional } from 'src/model/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {
  url = "http://localhost:1221/profissionais";
  
  constructor(private http:HttpClient) { }

  create(profissional:Profissional):Observable<Profissional>{
    return this.http.post<Profissional>(this.url,profissional)
  }

  findAll():Observable<Profissional[]>{
  return this.http.get<Profissional[]>(this.url);
  }
}
