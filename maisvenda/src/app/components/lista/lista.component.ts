
import { Component } from '@angular/core';
import { ILojas } from 'src/app/interfaces/lojas';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  localStorage: any;

  title="Lista de compras"
  preco:any=''
  Loja?:any
  LojaNome?:string
  id:number= 0

  async selected(){
    if(localStorage.getItem('Loja')){
      this.Loja = await localStorage.getItem('Loja') || ""
      let x = JSON.parse(this.Loja)
      this.LojaNome = x.nome
      this.id = x.id
     }
   }

  reverter(){
   this.preco  =  this.preco.replace(/[^\d]+/gi,'')
  }
}

