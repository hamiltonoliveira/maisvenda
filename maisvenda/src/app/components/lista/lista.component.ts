import { Component } from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import { LocalStoarageService } from 'src/app/service/local-stoarage.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  constructor(localStorage: LocalStoarageService, private db:DbService) {
   this.InserirTable()
  }

  InserirTable(){
    this.db.addRecord('111','222','333','444')
  }


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

