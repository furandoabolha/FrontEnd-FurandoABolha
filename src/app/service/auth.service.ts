import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../Model/Usuario';
import { UsuarioLogin } from '../Model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }


  entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://furandoabolha.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://furandoabolha.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://furandoabolha.herokuapp.com/usuarios/${id}`)
  }

 

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok

  }
}
