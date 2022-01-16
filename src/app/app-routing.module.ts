import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentoConsultarComponent } from './agendamento-consultar/agendamento-consultar.component';
import { AgendamentoEditarComponent } from './agendamento-editar/agendamento-editar.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteConsultarComponent } from './cliente-consultar/cliente-consultar.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ProfissionalCadastroComponent } from './profissional-cadastro/profissional-cadastro.component';
import { ProfissionalConsultarComponent } from './profissional-consultar/profissional-consultar.component';
import { ProfissionalEditarComponent } from './profissional-editar/profissional-editar.component';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { ServicoConsultarComponent } from './servico-consultar/servico-consultar.component';
import { ServicoEditarComponent } from './servico-editar/servico-editar.component';

const routes: Routes = [
  {path:'cliente', component:ClienteCadastroComponent},
  {path:'cliente-consulta', component:ClienteConsultarComponent},
  {path:'clienteedit/:idCliente', component:ClienteEditarComponent},
  {path:'profissional', component:ProfissionalCadastroComponent},
  {path:'profissionaledit/:idProfissional', component:ProfissionalEditarComponent},
  {path:'profissional-consulta', component:ProfissionalConsultarComponent},
  {path:'servico', component:ServicoCadastroComponent},
  {path:'servicoedit/:idServico', component:ServicoEditarComponent},
  {path:'servico-consulta', component:ServicoConsultarComponent},
  {path:'agendamento', component:AgendamentoCadastroComponent},
  {path:'agendamentoedit/:idAgendamento', component:AgendamentoEditarComponent},
  {path:'agendamento-consulta', component:AgendamentoConsultarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
