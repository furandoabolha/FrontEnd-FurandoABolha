import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

  nome: string = environment.nome;
  foto = environment.foto;
  token = environment.token
  tei: string = "<----"

  constructor(private router: Router) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.id = 0
    environment.foto = ''
    environment.tipo = ''
    environment.nome = ''
    console.log(this.tei)

  }


}


