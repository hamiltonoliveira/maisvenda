import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = environment.URL_API
  constructor(private http: HttpClient) { }

  list(codigoPro:string){
    return this.http.get(this.API + `${codigoPro}`+'.json')
  }
}
