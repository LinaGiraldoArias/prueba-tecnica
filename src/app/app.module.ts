import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { AboutComponent } from './Componentes/about/about.component';
import { DescriptionComponent } from './Componentes/description/description.component';
import { HomeComponent } from './Componentes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    DescriptionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login1', component: LoginComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
