import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageErrorComponent } from './shared/page-error/page-error.component';
import { P3Component } from './app/proyectos/p3/p3.component';

@NgModule({
  declarations: [
    AppComponent,
    PageErrorComponent,
    P3Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [
    PageErrorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
