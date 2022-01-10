import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: null | Partial<IConfig> | (() => Partial<IConfig>) = null;

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './interceptors/auth-inteceptors';


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
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
