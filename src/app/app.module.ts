import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageErrorComponent } from './shared/page-error/page-error.component';
// import { ButtonsheetComponent } from './app/proyectos/components/buttonsheet/buttonsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    PageErrorComponent,
    // ButtonsheetComponent,

    
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
