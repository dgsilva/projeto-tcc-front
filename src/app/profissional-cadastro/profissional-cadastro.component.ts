import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/model/profissional';
import { ProfissionalService } from '../service/profissional.service';

@Component({
  selector: 'app-profissional-cadastro',
  templateUrl: './profissional-cadastro.component.html',
  styleUrls: ['./profissional-cadastro.component.css']
})
export class ProfissionalCadastroComponent implements OnInit {

  profissional:Profissional;

  constructor(private profissionalService:ProfissionalService) {
    this.profissional=new Profissional();
   }

  ngOnInit(): void {
  }

  salvar(){
    this.profissionalService.create(this.profissional).subscribe(object =>{
      this.profissional= object;
    });
  }
}
