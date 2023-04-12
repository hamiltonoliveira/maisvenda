import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  liga:boolean = false

  public ngOnInit() {
   this.liga = true
  }

  public onSelect():void{
    this.liga =!this.liga
  }
}
