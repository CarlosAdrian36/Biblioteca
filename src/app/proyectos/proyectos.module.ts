import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';



@NgModule({
  declarations: [
    P1Component,
    P2Component,
    PaginaPrincipalComponent,
    P3Component,
    P4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProyectosRoutingModule,
    MaterialModule,
  ]
})
export class ProyectosModule { }
