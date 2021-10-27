import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sobre-nos-a-revanche',
  templateUrl: './sobre-nos-a-revanche.component.html',
  styleUrls: ['./sobre-nos-a-revanche.component.css']
})
export class SobreNosARevancheComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {

    // if (environment.token == '') {
    //   this.router.navigate(['/entrar']);
    // }

    // this.auth.refreshToken();
  }

}
