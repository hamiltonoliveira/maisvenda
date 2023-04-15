
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  title="Lista de produtos - cadastro"
  preco:any=''


  reverter(){


   this.preco  =  this.preco.replace(/[^\d]+/gi,'');
  }
}

