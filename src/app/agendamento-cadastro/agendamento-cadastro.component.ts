import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/model/agendamento';
import { Cliente } from 'src/model/cliente';
import { Mensagem } from 'src/model/mensagem-enum';
import { Profissional } from 'src/model/profissional';
import { Servico } from 'src/model/servico';
import { AgendamentoService } from '../service/agendamento.service';
import { ClienteService } from '../service/cliente.service';
import { ProfissionalService } from '../service/profissional.service';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-agendamento-cadastro',
  templateUrl: './agendamento-cadastro.component.html',
  styleUrls: ['./agendamento-cadastro.component.css']
})
export class AgendamentoCadastroComponent implements OnInit {
agendamento:Agendamento;
clientes:Cliente[] =[]
profissionais:Profissional[]=[]
servicos:Servico[]=[]
mensagem_sucesso:string = '';
mensagem_erro:string = '';

  constructor(private clienteServico:ClienteService, private profissionalService:ProfissionalService,
     private servico:ServicoService, private agendamentoService:AgendamentoService) {
    this.agendamento = new Agendamento();
   }

  ngOnInit(): void {
    this.CarregarCliente();
    this.CarregarProfissional();
    this.CarregarServico();
  }



  CarregarCliente():void{
    this.clienteServico.findAll().subscribe(object =>{
      this.clientes = object;
    });
  }

  CarregarProfissional():void{
    this.profissionalService.findAll().subscribe(object =>{
      this.profissionais = object;
    });
  }

  CarregarServico():void{
    this.servico.findAll().subscribe(object =>{
      this.servicos = object;
    });
  }

  Salvar():void{
    this.agendamentoService.create(this.agendamento).subscribe(
      (object:any) =>{
      this.agendamento = object;
      this.mensagem_sucesso = Mensagem.MENSAGEM_SUCESSO
    },
    (e:any) =>{
     this.mensagem_erro = Mensagem.MENSAGEM_ERRO
    }
    )

  }
}
