import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConfigurarComponent } from "./components/configurar/configurar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { ListaComponent } from "./components/lista/lista.component";

const routers:Routes =  [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path:'home', component:HomeComponent },
  { path:'dash', component:DashboardComponent },
  { path:'login', component:LoginComponent },
  { path:'config', component:ConfigurarComponent },
  { path:'cadastro', component:CadastroComponent },
  { path:'lista', component:ListaComponent },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})

export class AppRoutingModule {}



