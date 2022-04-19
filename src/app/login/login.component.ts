import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  loginForm: any = {
    login: '',
    password: '',
  }
  login() :void{
    this.authService.login(this.loginForm.login,this.loginForm.password);
    //console.log(this.authService.getToken() );
    // if(this.authService.getToken()){
    //   this.router.navigate(['/dashboard']);
    // }
  }
}
