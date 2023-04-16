import { Component } from '@angular/core';

import  { ILojas } from  './../../interfaces/lojas';

@Component({
  selector: 'app-display-lojas',
  templateUrl: './display-lojas.component.html',
  styleUrls: ['./display-lojas.component.scss']
})
export class DisplayLojasComponent {

 Lojas: ILojas[] = [
    {id:0,
     nome:'Supermercado Guanabara',
     logradouro:'',
     latitude:'',
     longitude:'',
     img:'../assets/mercados/mercado-guanabara.png'
    },
    {id:1,
      nome:'Supermercado Prezunic',
      logradouro:'',
      latitude:'',
      longitude:'',
      img:'../assets/mercados/mercado-prezunic.jpg'
     },
     {id:2,
      nome:'Supermercado Mundial',
      logradouro:'',
      latitude:'',
      longitude:'',
      img:'../assets/mercados/mercado-mundial.jpg'
     },
     {id:2,
      nome:'Supermercado Assaí',
      logradouro:'',
      latitude:'',
      longitude:'',
      img:'../assets/mercados/mercado-assai.png'
     }
  ];
}
