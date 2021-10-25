import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../Model/Postagem';
import { Tema } from '../Model/Tema';
import { Usuario } from '../Model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-minhas-postagens',
  templateUrl: './minhas-postagens.component.html',
  styleUrls: ['./minhas-postagens.component.css'],
})
export class MinhasPostagensComponent implements OnInit {
  //variaveis de postagem
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  listaPostagemMaisCurtidas: Postagem[]
  idPostagem: number

  //!variaveis para o usuário
  id = environment.id;
  idUser = environment.id;
  usuario: Usuario = new Usuario();

  //variaveis para o tema
  listaTemas: Tema[];
  idTema: number;
  tema: Tema = new Tema();

  foto = environment.foto;
  nome = environment.nome;


  key = 'data'
  reverse = true;

  constructor(
    private auth: AuthService,
    private postagemService: PostagemService,
    private router: Router,
    private temaService: TemaService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }
    

    this.auth.refreshToken();
    this.findByIdUser(this.idUser);
    this.getAllPostagens();

  }

  reload() {
    if (this.auth.reload) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/minhas-postagens']);
        this.auth.reload = false;
      });
    }
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
        this.getAllPostagens()
        this.router.navigate(['/inicio']);
      });
  }

  findByIdUser(id: number) {
    this.auth.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  findByIdUsuario() {
    this.auth.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  getAllPostagens() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
    });
  }

  getAllPostagensOrdenada(){
    this.postagemService.getAllPostagensMaisCurtidas().subscribe((resp: Postagem[]) => {
      this.listaPostagemMaisCurtidas = resp
    })
  }

  getPostagemById(id: number) {
    this.postagemService.getPostagemById(id).subscribe((resp: Postagem) => {
      this.postagem = resp;
    });
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

  curtida(id: number) {
    this.postagemService.putCurtir(id).subscribe(() => {
    });
  }

  descurtida(id: number) {
    this.postagemService.putDescurtir(id).subscribe(() => {
    });
  }

  atualizar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.postagemService
      .putPostagem(this.postagem)
      .subscribe((resp: Postagem) => {
        this.postagem = resp;
        this.router.navigate(['/inicio']);
        this.getAllPostagens();
        alert('Postagem atualizada com sucesso!');
        
      });
  }

  apagar(id: number) {
    this.postagemService.deletePostagem(id).subscribe(() => {
      alert('postagem deletada com sucesso');
      this.router.navigate(['/inicio']);
    });
  }

  deletar() {
    this.postagemService.deletePostagem(this.idPostagem).subscribe(() => {
      alert('postagem deletada com sucesso');
      this.router.navigate(['/inicio']);
    });
  }
}
