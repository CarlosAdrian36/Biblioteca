import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorComponent } from './shared/page-error/page-error.component';

const routes: Routes = [
  {
    path: 'Inicio',
    loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)
  },
  {
    path: 'Proyectos',
    loadChildren: () => import('./proyectos/proyectos.module').then(p =>p.ProyectosModule)
  },
  {
    path: '404',
    component: PageErrorComponent,
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
