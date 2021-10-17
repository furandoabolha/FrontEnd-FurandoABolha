import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';
import { SobreNosARevancheComponent } from './sobre-nos-a-revanche/sobre-nos-a-revanche.component';

import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';
import { TemasComponent } from './temas/temas.component';



const routes: Routes = [
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'cadastrar', component:CadastrarComponent},
  {path: 'entrar', component:EntrarComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'tema', component:TemaComponent},
  {path: 'contato', component:ContatoComponent},
  {path:'ninguemliga', component:SobreNosComponent},

  {path: 'sobre-nos', component:SobreNosARevancheComponent},
  {path: 'temas', component:TemasComponent},
  {path: 'contato', component:ContatoComponent},
  {path: 'minhas-postagens', component:MinhasPostagensComponent},
    
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
   {path: 'user-edit/:id', component: UsuarioEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
