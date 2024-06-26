import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenApiModel } from '../models/token-api.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();
    if(myToken){
      request = request.clone({
        setHeaders:{Authorization:`Bearer ${myToken}`}
      })
    }
    
    
    return next.handle(request).pipe(
      catchError((err: any)=>{
        if(request.url.includes('register')){
          return throwError(()=> (err));
        }
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            //handle
            return this.handleUnauthorizedError(request,next);

          }
        }
        return throwError(()=> new Error("Some other error occured"))
      })
    )
    
  }
  handleUnauthorizedError(req: HttpRequest<any>, next: HttpHandler){
   
    let tokenApiModel = new TokenApiModel();
    tokenApiModel.accessToken = this.auth.getToken()!;
    tokenApiModel.refreshToken = this.auth.getRefreshToken()!;
    return this.auth.renewToken(tokenApiModel)
    .pipe(
      switchMap((data:TokenApiModel)=>{
        this.auth.storeRefreshToken(data.refreshToken);
        this.auth.storeToken(data.accessToken);
        req = req.clone({
          setHeaders:{Authorization:`Bearer ${data.accessToken}`} 
      })
      return next.handle(req);
      }),
      catchError((err) =>{
        return throwError(() =>{
          alert("Time has exprired")
          this.router.navigate(['login'])
        })
      })
    )
  }
}
