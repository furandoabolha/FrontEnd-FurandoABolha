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
import { ArrayType } from '@angular/compiler';


const HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];


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

  duasCurtidas: any;

  heroes = HEROES;

  //!variaveis para o usuário
  idUser = environment.id;
  usuario: Usuario = new Usuario();

  //? variaveis para a postagem
  stringPesquisa: string
  postagem1 = Postagem
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];
  idPostagem = environment.id;
  listaPostagemMaisCurtidas: Postagem[]

  tituloPost: string

  key = 'data'

  keyy = 'curtidas'
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
  
    this.getDuasPostagens();


   
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
    if (this.stringPesquisa != undefined ) {
      this.postagemService.getPostagemByTitulo(nome).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })

      if(this.stringPesquisa == "tudo" || this.stringPesquisa == '' ){
        this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
          this.listaPostagens = resp
        })
      }
     
    } else {
      this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
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

class TestStatus {



  id: number
  name: string

  lista :Postagem[]

  
  
  constructor(id: number, name: string){
      this.id = id;
      this.name = name;
  }
}

type Statuses = Array<TestStatus>;

var statuses: Statuses = [
  new TestStatus(0, "Available"),
  new TestStatus(1, "Ready"),
  new TestStatus(2, "Started")
]



function name20(nus: Array<Postagem>): Array<Postagem> {
  let everNums = [];


  for(let num of nus){
    if(num.id % 2 == 0){
        everNums.push(num);
    }
  }
  return everNums;
}


