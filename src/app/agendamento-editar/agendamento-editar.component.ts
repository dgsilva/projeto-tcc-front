import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-agendamento-editar',
  templateUrl: './agendamento-editar.component.html',
  styleUrls: ['./agendamento-editar.component.css']
})
export class AgendamentoEditarComponent implements OnInit {
  agendamento:Agendamento;
  clientes:Cliente[] =[]
  profissionais:Profissional[]=[]
  servicos:Servico[]=[]
  mensagem_sucesso:string = '';
  mensagem_erro:string = '';
  
    constructor(private clienteServico:ClienteService, private profissionalService:ProfissionalService,
       private servico:ServicoService, private agendamentoService:AgendamentoService, private route:ActivatedRoute) {
      this.agendamento = new Agendamento();
     }
  
    ngOnInit(): void {
      this.CarregarCliente();
      this.CarregarProfissional();
      this.CarregarServico();
      this.obterAgendamento();
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
  
    editar():void{
      this.agendamentoService.create(this.agendamento).subscribe(
        (object:any) =>{
        this.agendamento = object;
        this.mensagem_sucesso = Mensagem.MENSAGEM_ALTERACAO
      },
      (e:any) =>{
       this.mensagem_erro = Mensagem.MENSAGEM_ERRO
      }
      )
  
    }

    obterAgendamento():void{
      const idAgendamento = this.route.snapshot.paramMap.get('idAgendamento') || ''
      this.agendamentoService.retrieveById(idAgendamento).subscribe(object => {
        this.agendamento = object;
      });
    }
}
