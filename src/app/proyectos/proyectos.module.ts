import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    P1Component,
    P2Component,
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProyectosRoutingModule,
    MaterialModule,
  ]
})
export class ProyectosModule { }
