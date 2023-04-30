import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = environment.token_cosmos
    request = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Cosmos-Token': `${token}`
      })
    })
    return next.handle(request);
  }
}
