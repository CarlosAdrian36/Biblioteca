import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    PrincipalComponent,
    EjemploComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
    
  ]
})
export class HomeModule { }
