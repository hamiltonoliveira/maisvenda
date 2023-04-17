import { Component } from '@angular/core';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  localStorage: any;

  preco:any=''
  Loja?:any
  LojaNome?:string
  id:number= 0

  habilita:boolean = true

  async selected(){
    if(localStorage.getItem('Loja')){
      this.Loja = await localStorage.getItem('Loja') || ""
      let x = JSON.parse(this.Loja)
      this.LojaNome = x.nome
      this.id = x.id
      this.habilita = false
     }
   }

}

