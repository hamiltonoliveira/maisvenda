import { Injectable } from '@angular/core';
import Dexie  from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {

  constructor() {
    super("compraDB");                       //database name 'DexieDB'
    this.version(1).stores({
      listaTB: '++id' //'myStore1' table, 'empId' primary key
    });
  }

   addRecord(_codbarra:any, _nome:any, _preco:any, _quantidade:any ): void {
    this.open()
    .then(data => console.log("DB Opened"))
    .catch(err => console.log(err.message))
     this.table('listaTB')
    .add({codbarra: _codbarra, nome: _nome, preco:_preco, quantidade:_quantidade})
  }

}
