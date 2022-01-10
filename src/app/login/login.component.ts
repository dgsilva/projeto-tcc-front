import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/model/auth';
import { Login } from 'src/model/login';
import { Mensagem } from 'src/model/mensagem-enum';
import { AuthenticationHelper } from '../helpers/authentication-helper';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem: string = '';

  constructor( private authService:AuthService, private authHelper:AuthenticationHelper) { }

 //declarando o formulário
 formLogin = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  senha: new FormControl('', [Validators.required])
});
get form(): any {
  return this.formLogin.controls;
}

logar(): void{
  
  this.mensagem = '';
  this.authService.Logar(this.formLogin.value).subscribe(
    (data:any) =>{
     this.authHelper.signIn(data as Auth)
     location.reload();
    },
    (e:any)=>{
     this.mensagem = Mensagem.Error_Login
    }
  )

}
  ngOnInit(): void {
  }

}
