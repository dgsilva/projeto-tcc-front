import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentoConsultarComponent } from './agendamento-consultar/agendamento-consultar.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteConsultarComponent } from './cliente-consultar/cliente-consultar.component';
import { ProfissionalCadastroComponent } from './profissional-cadastro/profissional-cadastro.component';
import { ProfissionalConsultarComponent } from './profissional-consultar/profissional-consultar.component';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { ServicoConsultarComponent } from './servico-consultar/servico-consultar.component';

const routes: Routes = [
  {path:'cliente', component:ClienteCadastroComponent},
  {path:'cliente-consulta', component:ClienteConsultarComponent},
  {path:'profissional', component:ProfissionalCadastroComponent},
  {path:'profissional-consulta', component:ProfissionalConsultarComponent},
  {path:'servico', component:ServicoCadastroComponent},
  {path:'servico-consulta', component:ServicoConsultarComponent},
  {path:'agendamento', component:AgendamentoCadastroComponent},
  {path:'agendamento-consulta', component:AgendamentoConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
