import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConfigurarComponent } from "./components/configurar/configurar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

const routers:Routes =  [
  { path:'', component:HomeComponent },
  { path:'dash', component:DashboardComponent },
  { path:'login', component:LoginComponent },
  { path:'config', component:ConfigurarComponent }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})

export class AppRoutingModule {}



