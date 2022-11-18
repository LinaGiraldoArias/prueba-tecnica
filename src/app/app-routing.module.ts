import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Componentes/about/about.component';
import { DescriptionComponent } from './Componentes/description/description.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"description", component:DescriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
