import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosARevancheComponent } from './sobre-nos-a-revanche/sobre-nos-a-revanche.component';
import { SobreNosReservaComponent } from './sobre-nos-reserva/sobre-nos-reserva.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';


const routes: Routes = [
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  {path:'cadastrar', component:CadastrarComponent},
  {path: 'entrar', component:EntrarComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'tema', component:TemaComponent},
  {path: 'contato', component:ContatoComponent},
  {path:'sobre-nos', component:SobreNosComponent},
  {path:'nos-sobre', component:SobreNosReservaComponent},
  {path: 'a-revanche', component:SobreNosARevancheComponent},
    
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  // {path: 'user-edit/:id', component: UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
