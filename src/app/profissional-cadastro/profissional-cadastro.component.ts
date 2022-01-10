import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/model/mensagem-enum';
import { Profissional } from 'src/model/profissional';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-profissional-cadastro',
  templateUrl: './profissional-cadastro.component.html',
  styleUrls: ['./profissional-cadastro.component.css']
})
export class ProfissionalCadastroComponent implements OnInit {

  profissional:Profissional;
  mensagem_sucesso:string="";
  mensagem_erro:string="";

  constructor(private profissionalService:ProfissionalService) {
    this.profissional=new Profissional();
   }

  ngOnInit(): void {
  }

  salvar(){
    this.profissionalService.create(this.profissional).subscribe(
      (object:any) =>{
      this.profissional= object;
      this.mensagem_sucesso = Mensagem.MENSAGEM_SUCESSO
      
    },

    (e:any)=>{
      this.mensagem_erro = Mensagem.MENSAGEM_ERRO
    }
    
    );
  }
}
