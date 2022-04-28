import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/index";

@Injectable( {
  providedIn: 'root'
} )
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Only pass the token in the Authorization header if it exists in local storage
    const tokenHeaderRequestConfig = localStorage.getItem( 'jwt' ) ? {
      setHeaders: {
        'AUTHORIZATION': `JWT ${localStorage.getItem( 'jwt' )}`,
      }
    } : {};

    const modified = req.clone(
      tokenHeaderRequestConfig
    );

    return next.handle( modified );
  }
}
