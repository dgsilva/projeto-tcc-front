import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/model/agendamento';
import { AgendamentoService } from '../service/agendamento.service';

@Component({
  selector: 'app-agendamento-consultar',
  templateUrl: './agendamento-consultar.component.html',
  styleUrls: ['./agendamento-consultar.component.css']
})
export class AgendamentoConsultarComponent implements OnInit {
 
  agendamentos:Agendamento[]=[] 
  constructor(private agendamentoServico:AgendamentoService) { }

  ngOnInit(): void {
    this.obterAgendamento();
  }

  obterAgendamento():void{
    this.agendamentoServico.findAll().subscribe((data:any)=>{
      this.agendamentos = data
    },
    (e:any)=>{
      console.log("Error")
    })
  }

}
