import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mensagem } from 'src/model/mensagem-enum';
import { Profissional } from 'src/model/profissional';
import { Servico } from 'src/model/servico';
import { ProfissionalService } from '../service/profissional.service';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-servico-editar',
  templateUrl: './servico-editar.component.html',
  styleUrls: ['./servico-editar.component.css']
})
export class ServicoEditarComponent implements OnInit {
  mensagem_sucesso: string = "";
  mensagem_erro: string = "";

  servico:Servico;
  profissionais:Profissional[] = [];

  constructor(private servicoService:ServicoService, private profissionalServico:ProfissionalService, private route:ActivatedRoute) { 
    this.servico = new Servico();
  }

  ngOnInit(): void {
    this.ListarProfissional();
    this.getAll();
  }

  ListarProfissional(){
    this.profissionalServico.findAll().subscribe(Object =>{
      this.profissionais = Object
    });
  }

    editar(){
      this.servicoService.update(this.servico).subscribe(
      (Object:any) =>{
      this.servico = Object;
      this.mensagem_sucesso = Mensagem.MENSAGEM_ALTERACAO
      },

      (e: any)=>{
        this.mensagem_erro = Mensagem.MENSAGEM_ERRO
        
      }
      
      );
    }
    getAll():void {
      const idServico = this.route.snapshot.paramMap.get('idServico') || ''
      this.servicoService.retrieveById(idServico).subscribe(object => {
        this.servico = object;
      });
    }

}
