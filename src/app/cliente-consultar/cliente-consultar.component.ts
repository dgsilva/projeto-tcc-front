import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-consultar',
  templateUrl: './cliente-consultar.component.html',
  styleUrls: ['./cliente-consultar.component.css']
})
export class ClienteConsultarComponent implements OnInit {
 clientes:Cliente [] = [];
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar():void{
    this.clienteService.findAll().subscribe( object =>{
      this.clientes = object;
      console.log(this.clientes)
    });
  }

}
