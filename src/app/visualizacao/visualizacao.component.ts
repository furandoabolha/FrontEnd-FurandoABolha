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
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {

  [x: string]: any;
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
  stringPesquisa: string;
  postagem1 = Postagem;
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  idPostagem = environment.id;
  listaPostagemMaisCurtidas: Postagem[];

  tituloPost: string;

  key = 'data';
  reverse = true;

  constructor(
    private router: Router,
    private auth: AuthService,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private route: ActivatedRoute,
    private alertas: AlertasService,
  ) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        route.params.subscribe((p) => {
          this.stringPesquisa = p.nome;
        });

        this.BuscarPostagem(this.stringPesquisa);
      }
    });
  }

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }
    this.auth.refreshToken();
    this.stringPesquisa = '';
    this.listaPostagemMaisCurtidas = [];
    this.getAllTemas();
    this.getAllPostagens();
    this.getAllPostagensOrdenada();
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
  

 maiorescurtidas: any;
  getAllPostagens() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp;
      
      this.listaPostagens.forEach(item => {
      if(item.curtidas > 25)
       this.maiorescurtidas = item;
    
      
});
 });
  }
  
getDuasPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      resp.forEach(item => {
        if(item.curtidas > 23)
            this.duasCurtidas = item;
            console.log(this.duasCurtidas);
      })

    })
}


  getAllPostagensOrdenada() {
    this.postagemService
      .getAllPostagensMaisCurtidas()
      .subscribe((resp: Postagem[]) => {
        this.listaPostagemMaisCurtidas = resp;
      });
  }

 
  

}
