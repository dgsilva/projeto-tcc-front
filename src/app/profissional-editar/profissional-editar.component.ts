import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Mensagem } from 'src/model/mensagem-enum';
import { Profissional } from 'src/model/profissional';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-profissional-editar',
  templateUrl: './profissional-editar.component.html',
  styleUrls: ['./profissional-editar.component.css']
})
export class ProfissionalEditarComponent implements OnInit {
  profissional:Profissional;
  mensagem_sucesso:string="";
  mensagem_erro:string="";

  constructor(private profissionalService:ProfissionalService, private route: ActivatedRoute) {
    this.profissional=new Profissional();
   }


   formCadastro = new FormGroup({
    nome: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(150)
    ]),

    cpf:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]),
    email:new FormControl('',[
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

   celular: new FormControl('',[
     Validators.minLength(2),
     Validators.maxLength(15)
   ]),

   sexo: new FormControl('',[
     Validators.minLength(2),
     Validators.maxLength(10)
   ])
  });
  
  get form(): any {
   return this.formCadastro.controls;
 }



  ngOnInit(): void {
    this.getAll();
  }

  editar(){
    this.profissionalService.update(this.profissional).subscribe(
      (object:any) =>{
      this.profissional= object;
      this.mensagem_sucesso = Mensagem.MENSAGEM_ALTERACAO
      
    },

    (e:any)=>{
      this.mensagem_erro = Mensagem.MENSAGEM_ERRO
    }
    
    );
  }

  getAll():void {
    const idProfissional = this.route.snapshot.paramMap.get('idProfissional') || ''
    this.profissionalService.retrieveById(idProfissional).subscribe(object => {
      this.profissional = object;
    });
  }

}
