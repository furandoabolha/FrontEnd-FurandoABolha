import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../Model/Postagem';
import { Usuario } from '../Model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  idUser = environment.id;
  usuario: Usuario = new Usuario();

  listaPostagem: Postagem[]

  nome: string = environment.nome;
  foto = environment.foto;
  token = environment.token
  id = environment.id

  tituloPost: string
  constructor(
    private router: Router,
    private auth: AuthService,
    private postagemService: PostagemService
    
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

  findByNome(){
    
    this.postagemService.getPostagemByTitulo(this.tituloPost).subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
      console.log(this.tituloPost)
    })

  }



  pesquisarProdutos(titulo: string) {
    this.router.navigate([`https://furandoabolha.herokuapp.com/postagens/titulo/${titulo}`])
  }

}


