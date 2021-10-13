import { AuthService } from './../service/auth.service';
import { Usuario } from './../Model/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
// importações do tema
import { TemaService } from './../service/tema.service';
import { Tema } from '../Model/Tema';
import { Postagem } from '../Model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-contruindo-ofeed',
  templateUrl: './contruindo-ofeed.component.html',
  styleUrls: ['./contruindo-ofeed.component.css']
})
export class ContruindoOFeedComponent implements OnInit {
 //*variaveis para o tema
 listaTemas: Tema[];
 idTema: number;
 tema: Tema = new Tema();

 foto = environment.foto;
 nome = environment.nome;

 //!variaveis para o usuário
 idUser = environment.id;
 usuario: Usuario = new Usuario();

 //? variaveis para a postagem
 postagem: Postagem = new Postagem();
 listaPostagens: Postagem[];

 constructor(
   private router: Router,
   private temaService: TemaService,
   private auth: AuthService,
   private postagemService: PostagemService
 ) {}

 ngOnInit() {
   if (environment.token == '') {
     this.router.navigate(['/entrar']);
   }

   this.auth.refreshToken();
   
   this.getAllTemas();
   this.getAllPostagens();
 }

 getAllTemas() {
   this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
     this.listaTemas = resp;
   });
 }

 findByIdTema() {
   this.temaService.getTemaById(this.idTema).subscribe((resp: Tema) => {
     this.tema = resp;
   });
 }
 findByIdUser(){
   this.auth.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
     this.usuario = resp
   })
 }


 getAllPostagens() {
   this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
     this.listaPostagens = resp;
   });
 }

 postar() {
   this.tema.id = this.idTema;
   this.postagem.tema = this.tema;

   this.usuario.id = this.idUser;
   this.postagem.usuario = this.usuario;

   this.postagemService
     .postPostagem(this.postagem)
     .subscribe((resp: Postagem) => {
       this.postagem = resp;
       alert('Postagem realizada com sucesso');
       this.postagem = new Postagem();
       this.getAllPostagens();
     });
 }
}



