import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { ContatoComponent } from './contato/contato.component';
import { TemasComponent } from './temas/temas.component';
import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarComponent,
    EntrarComponent,
    SobreNosComponent,
    TemaComponent,
    InicioComponent,
    TemaDeleteComponent,
    PostagemDeleteComponent,
    TemaEditComponent,
    PostagemEditComponent,
    ContatoComponent,
    TemasComponent,
    MinhasPostagensComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide : LocationStrategy,
    useClass: HashLocationStrategy 

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
