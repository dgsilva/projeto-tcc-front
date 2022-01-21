import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClienteService } from '../service/cliente.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Mensagem } from 'src/model/mensagem-enum';


@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  //atributos
 mensagem_sucesso: string = "";
 mensagem_erro: string = "";
 mensagens:Mensagem
cliente:Cliente;

  constructor(private serviceCliente:ClienteService) {
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
     Validators.required
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
  }



  salvar():void{
   this.serviceCliente.create(this.cliente).subscribe((object:any) =>{
    this.cliente = object
    this.mensagem_sucesso = Mensagem.MENSAGEM_SUCESSO
   },
   (e:any)=>{
     this.mensagem_erro = Mensagem.MENSAGEM_ERRO
   }
   );
  }

}
