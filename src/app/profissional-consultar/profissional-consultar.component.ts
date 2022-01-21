import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/model/profissional';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-profissional-consultar',
  templateUrl: './profissional-consultar.component.html',
  styleUrls: ['./profissional-consultar.component.css']
})
export class ProfissionalConsultarComponent implements OnInit {
  
 profissionais:Profissional [] = [];
  
 constructor(private profissionaisServico: ProfissionalService) { }

  ngOnInit(): void {
  this.Listar();
  }

  Listar():void{
   this.profissionaisServico.findAll().subscribe(object =>{
     this.profissionais = object;
   });
  }


}
