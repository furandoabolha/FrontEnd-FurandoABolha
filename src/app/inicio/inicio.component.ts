import { AuthService } from './../service/auth.service';
import { Usuario } from './../Model/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
// importações do tema
import { TemaService } from './../service/tema.service';
import { Tema } from '../Model/Tema';
import { Postagem } from '../Model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  //*variaveis para o tema
  listaTemas: Tema[];
  idTema: number;
  tema: Tema = new Tema();

  foto = environment.foto;
  nome = environment.nome;
  id = environment.id;



  //!variaveis para o usuário
  idUser = environment.id;
  usuario: Usuario = new Usuario();

  //? variaveis para a postagem
  stringPesquisa: string
  postagem1 = Postagem
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  idPostagem = environment.id;

  tituloPost: string

  key = 'data'
  reverse = true;

  constructor(
    private router: Router,
    private auth: AuthService,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private route : ActivatedRoute
  ) {
    router.events.subscribe((e) => {

      if (e instanceof NavigationEnd) {
        route.params.subscribe(p => {
          this.stringPesquisa = p.nome
        })

        this.BuscarPostagem(this.stringPesquisa)
      }
    })
  }
  

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }
    this.auth.refreshToken();
    this.stringPesquisa = ""
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
//vamo ver se vai funfar
  getPostagemById(id: number){
    this.postagemService.getPostagemById(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
   })
  }

  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  BuscarPostagem(nome: string) {
    if (this.stringPesquisa != undefined) {
      this.postagemService.getPostagemByTitulo(nome).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    } else {
      this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
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




  //implementacao do putCurtir

  curtida(id:number){
    this.postagemService.putCurtir(id).subscribe(()=>{
      this.getAllPostagens()
    })
  }

  
  descurtida(id:number){
    this.postagemService.putDescurtir(id).subscribe(()=>{
      this.getAllPostagens()
    })
  }


  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens()
    }else{
    this.postagemService.getPostagemByTitulo(this.tituloPost).subscribe((resp: Postagem[])=> {
      this.listaPostagens = resp
    })
  }
}

}

