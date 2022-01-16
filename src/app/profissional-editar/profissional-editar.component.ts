import { Component, OnInit } from '@angular/core';
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
