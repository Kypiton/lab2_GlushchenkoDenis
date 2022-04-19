import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });
    if(this.authService.isLoggedIn() ){
      return next.handle(request).pipe(
        catchError( (error : HttpErrorResponse) => this.handleAuthError(error) )
        );
    }
    return next.handle(request);
  }  
  private handleAuthError(err: HttpErrorResponse): Observable<any>{
    if(err.status === 401){
      this.authService.logout();
    }
    return throwError(err);
  }
}
//   request = request.clone({
  //          setHeaders: {
  //           Authorization: `Bearer ${this.authService.getToken()}`
  //         }
  //            });
  //            return next.handle(request);
  // }