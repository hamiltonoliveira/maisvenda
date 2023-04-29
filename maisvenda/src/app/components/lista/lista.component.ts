import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DbService } from 'src/app/service/db.service';
import { LocalStoarageService } from 'src/app/service/local-stoarage.service';

import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
import { ProdutoService } from 'src/app/service/produto.service';
import { IProduto } from 'src/app/interfaces/Produto';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})

export class ListaComponent implements AfterViewInit{
  private retornaProduto:IProduto[]=[]

  constructor(localStorage: LocalStoarageService, private db:DbService, private produtoService: ProdutoService)
   {}

   @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue: any;
  ngAfterViewInit(): void {
   // this.barcodeScanner.start();
  }

  onValueChanges(result: { codeResult: { code: any; }; }) {
    this.codbarra = result.codeResult.code;
    this.onProduto(this.codbarra);
    console.log(this.codbarra);
   }

  onProduto(codigo:any)
  {
    this.produtoService.list(codigo).subscribe(dados=>
    {
      this.retornaProduto=dados
      console.log(this.retornaProduto)
    });
  }

  onStarted(started: any) {
     console.log("Inicio")
  }

  onDesative(){
    this.barcodeScanner.stop();
  }

  codbarra?:string;
  nome?:string;
  preco?:string;
  quantidade?:string;

  localStorage: any;

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
     this.barcodeScanner.start();
   }

    digitar():void{
     if(this.codbarra && this.nome && this.preco && this.quantidade)
     {
      let date = new Date().toLocaleDateString()
      this.db.addRecord(date,this.id,this.codbarra,this.nome,this.preco,this.quantidade)
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

