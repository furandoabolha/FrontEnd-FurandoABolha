import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../Model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.getAllTemas()
  }

  
  getAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })
  }

}


