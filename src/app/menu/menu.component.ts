import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../Model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  idUser = environment.id;
  usuario: Usuario = new Usuario();


  nome: string = environment.nome;
  foto = environment.foto;
  token = environment.token
  id = environment.id

  tituloPost: string
  constructor(
    private router: Router,
    private auth: AuthService,
    
    
    ) { }

  ngOnInit(){
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

  }

    
  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.id = 0
    environment.foto = ''
    environment.tipo = ''
    environment.nome = ''

  }




  pesquisarProdutos(titulo: string) {
    this.router.navigate([`https://furandoabolha.herokuapp.com/postagens/titulo/${titulo}`])
  }

}


