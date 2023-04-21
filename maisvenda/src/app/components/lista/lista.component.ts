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
   }

  codbarra?:string;
  nome?:string;
  preco?:string;
  quantidade?:string;

  localStorage: any;

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

    digitar():void{
     if(this.codbarra && this.nome && this.preco && this.quantidade)
     {
      this.db.addRecord(this.id,this.codbarra,this.nome,this.preco,this.quantidade)
      this.limpaCampos()
     }
   }

   limpaCampos():void{
    this.codbarra="";
    this.nome="";
    this.preco="";
    this.quantidade="";
   }

}

