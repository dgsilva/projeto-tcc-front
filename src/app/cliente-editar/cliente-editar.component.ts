import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/model/cliente';
import { Mensagem } from 'src/model/mensagem-enum';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

 //atributos
 mensagem_sucesso: string = "";
 mensagem_erro: string = "";
 mensagens:Mensagem
cliente:Cliente;

  constructor(private serviceCliente:ClienteService, private route:ActivatedRoute) {
    this.cliente = new Cliente();
   }

  formCadastro = new FormGroup({
    nome: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150) 
    ]),
   cpf: new FormControl('',[
     Validators.required,
     Validators.minLength(6),
     Validators.maxLength(15)
   ]),

   email: new FormControl('',[
     Validators.required,
     Validators.minLength(6),
     Validators.email,
     Validators.maxLength(150)
   ]),

   bairro: new FormControl('',[
     Validators.required,
     Validators.minLength(6),
     Validators.maxLength(150),
   ]),
   
   DtNascimento: new FormControl('',[
     Validators.minLength(2),
   ]),

   telefone: new FormControl('',[
     Validators.minLength(2),
     Validators.maxLength(15)
   ]),

   sexo: new FormControl('',[
     Validators.minLength(2),
     Validators.maxLength(10)
   ])
  });

//função utilizada para exibir as mensagens de erro de validação na página
get form(): any {
  return this.formCadastro.controls;
}

  ngOnInit(): void {
    this.getAll();
  }



  editar():void{
   this.serviceCliente.update(this.cliente).subscribe((object:any) =>{
    this.cliente = object
    this.mensagem_sucesso = Mensagem.MENSAGEM_ALTERACAO
   },
   (e:any)=>{
     this.mensagem_erro = Mensagem.MENSAGEM_ERRO
   }
   );
  }

  getAll():void {
    const idCliente = this.route.snapshot.paramMap.get('idCliente') || ''
    this.serviceCliente.retrieveById(idCliente).subscribe(object => {
      this.cliente = object;
    });
  }


}
