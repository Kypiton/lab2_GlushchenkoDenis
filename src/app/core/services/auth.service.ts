import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly accessTokenKey = 'access_token';
  private readonly userNameClaim = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name';
  helper = new JwtHelperService();
  constructor(private router: Router,private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }
  login(userName:string,password:string):void{ 
    let url:string = 'https://pnitfunctions.azurewebsites.net/api/token?userName='+userName+'&password='+password;
    const response = this.httpClient.get(url);
     response.pipe(
       tap(value => this.setToken(value['access_token']))
     )
     .subscribe(
       value => {
         if(value['access_token']){
           this.router.navigate(['/dashboard']);
         }
       }
     );
  }
  logout(): void {
    localStorage.removeItem(this.accessTokenKey);
    this.router.navigate(['/login']);
  }

  getUserName(): void {
    const token = this.getToken();

    const jwtHelperService = new JwtHelperService();
    const decodedToken = jwtHelperService.decodeToken(token);

    return decodedToken[this.userNameClaim];
  }
  isLoggedIn(){
    return !this.helper.isTokenExpired(this.getToken());
  }
}
