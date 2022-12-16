import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';


const routes : Routes = [
  {
    path: '',
    children:[
      {
        path: 'Ejemplo',
        component: EjemploComponent
      },
      {
        path:'**',
        redirectTo: 'Ejemplo' 
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }
