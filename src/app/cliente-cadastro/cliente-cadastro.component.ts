import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cliente:Cliente;

  constructor(private serviceCliente:ClienteService) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
  }

  salvar(){
   this.serviceCliente.create(this.cliente).subscribe( object =>{
    this.cliente = object
   })
  }

}
