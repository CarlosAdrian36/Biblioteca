import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { P5Component } from './p5/p5.component';

const routes : Routes =[

  {
    path: '',
    component: PaginaPrincipalComponent,
    children: [
      {
        path: 'Proyecto1',
        component: P1Component
      },
      {
        path:'Proyecto2',
        component: P2Component
      },
      {
        path: 'Proyecto3',
        component: P3Component
      },
      {
        path: 'Proyecto4',
        component: P4Component
      },
      {
        path: 'Proyecto5',
        component: P5Component
      },
      {
        path: '**',
        redirectTo: 'Proyecto2'
      }
    ]
    
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProyectosRoutingModule { }
