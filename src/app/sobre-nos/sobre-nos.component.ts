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
    // private profile_name: string, 
    // private profile_job: string, 
    // private profile_description: string, 
    // private profile_color: string,
    // profile_image: string
  ) { }

  ngOnInit(){
    // if (environment.token == '') {
    //   this.router.navigate(['/entrar']);
    // }

    // this.auth.refreshToken();
    
  }

}
