import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem} from '../Model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  
  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://furandoabolha.herokuapp.com/postagens/all', this.token)
  }

  getPostagemById(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://furandoabolha.herokuapp.com/postagens/${id}`, this.token)
  }
  
  postPostagem(postagens: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://furandoabolha.herokuapp.com/postagens', postagens, this.token)
  }

  getPostagemByTitulo(titulo: string): Observable<Postagem[]>{
    return this.http.post<Postagem[]>(`https://furandoabolha.herokuapp.com/postagens/titulo/${titulo}`, this.token)
  }
  
  
  putPostagem(postagens: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://furandoabolha.herokuapp.com/postagens', postagens, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://furandoabolha.herokuapp.com/postagens/${id}`, this.token)
  }


  putCurtir(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`https://furandoabolha.herokuapp.com/postagens/curtir/${id}`, this.token)
  }

  putDescurtir(id: number): Observable<Postagem>{
    return this.http.put<Postagem>(`https://furandoabolha.herokuapp.com/postagens/descurtir/${id}`, this.token)
  }
}