import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
   
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

 

}}
