import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UsuarioLogin } from '../Model/UsuarioLogin';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()


  constructor(
  private auth: AuthService,
  private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0,0)


  }


  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) =>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.email = this.usuarioLogin.email
      environment.id = this.usuarioLogin.id

      console.log(environment.token)
      alert('Parabéns')
      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
      if(erro.status == 401){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }

}
