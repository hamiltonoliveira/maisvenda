import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";

const routers:Routes =  [
  {path:'dash', component:DashboardComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})

export class AppRoutingModule {}



