import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteConsultarComponent } from './cliente-consultar/cliente-consultar.component';
import { ProfissionalCadastroComponent } from './profissional-cadastro/profissional-cadastro.component';
import { ProfissionalEditarComponent } from './profissional-editar/profissional-editar.component';
import { ProfissionalConsultarComponent } from './profissional-consultar/profissional-consultar.component';
import { ServicoCadastroComponent } from './servico-cadastro/servico-cadastro.component';
import { ServicoEditarComponent } from './servico-editar/servico-editar.component';
import { ServicoConsultarComponent } from './servico-consultar/servico-consultar.component';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { AgendamentoEditarComponent } from './agendamento-editar/agendamento-editar.component';
import { AgendamentoConsultarComponent } from './agendamento-consultar/agendamento-consultar.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClienteCadastroComponent,
    ClienteEditarComponent,
    ClienteConsultarComponent,
    ProfissionalCadastroComponent,
    ProfissionalEditarComponent,
    ProfissionalConsultarComponent,
    ServicoCadastroComponent,
    ServicoEditarComponent,
    ServicoConsultarComponent,
    AgendamentoCadastroComponent,
    AgendamentoEditarComponent,
    AgendamentoConsultarComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
