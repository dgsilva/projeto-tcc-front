import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mensagem } from 'src/model/mensagem-enum';
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

  formCadastro = new FormGroup({
    tipoServico:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(150)
    ]),
    descricao: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(150)
    ]),

    valor: new FormControl('',[
      Validators.required
    ]),
    
    profissional: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(150)
    ])
  })

  get form(): any {
    return this.formCadastro.controls;
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
      this.servicoService.create(this.servico).subscribe(
      (Object:any) =>{
      this.servico = Object;
      this.mensagem_sucesso = Mensagem.MENSAGEM_SUCESSO
      },

      (e: any)=>{
        this.mensagem_erro = Mensagem.MENSAGEM_ERRO
        
      }
      
      );
    }


}
