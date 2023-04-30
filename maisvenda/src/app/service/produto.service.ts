import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly API = 'https://api.cosmos.bluesoft.com.br/gtins/'
  constructor(private http: HttpClient) { }

  list(codigoPro:string){
    return this.http.get(this.API + `${codigoPro}`+'.json')
  }
}
