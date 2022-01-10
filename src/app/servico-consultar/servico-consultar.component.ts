import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/model/servico';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-servico-consultar',
  templateUrl: './servico-consultar.component.html',
  styleUrls: ['./servico-consultar.component.css']
})
export class ServicoConsultarComponent implements OnInit {

  servicos:Servico [] = [];
  constructor(private servicosS:ServicoService) { }

  ngOnInit(): void {
    this.obterDadosServicos();
  }

  obterDadosServicos():void{
    this.servicosS.findAll().subscribe((data:any)=>{
      this.servicos = data;
    },
    (e:any)=>{
      console.log("Error:")
    }
    )
  }

}
