import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  liga:boolean = true

  public onSelect():void{
    this.liga =!this.liga
  }
}
