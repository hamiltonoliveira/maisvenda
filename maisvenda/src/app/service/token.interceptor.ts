import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token ='ZyEluU2E2uP4G0zqjR00nA'

    request = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Cosmos-Token': `${token}`
      })
    })

    return next.handle(request);
  }
}
