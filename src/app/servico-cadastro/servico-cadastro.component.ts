import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/model/profissional';
import { Servico } from 'src/model/servico';
import { ProfissionalService } from '../service/profissional.service';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-servico-cadastro',
  templateUrl: './servico-cadastro.component.html',
  styleUrls: ['./servico-cadastro.component.css']
})
export class ServicoCadastroComponent implements OnInit {
  
  mensagem_sucesso: string = "";
  mensagem_erro: string = "";

  servico:Servico;
  profissionais:Profissional[] = [];

  constructor(private servicoService:ServicoService, private profissionalServico:ProfissionalService) { 
    this.servico = new Servico();
  }

  ngOnInit(): void {
    this.ListarProfissional();
  }

  ListarProfissional(){
    this.profissionalServico.findAll().subscribe(Object =>{
      this.profissionais = Object
    });
  }

    salvar(){
      this.servicoService.create(this.servico).subscribe((Object:any) =>{
      this.servico = Object;
      this.mensagem_sucesso = Object.mensagem;
      this.mensagem_sucesso = "Servico cadastrado com sucesso"
      },

      (e: any)=>{
        this.mensagem_erro = e.mensagem;
        this.mensagem_erro = "Algo deu errado na hora de salvar"
        
      }
      
      );
    }


}
