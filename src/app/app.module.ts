import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionModule } from './presentacion/presentacion.module';
import { ListadoModule } from './listado/listado.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PresentacionModule, ListadoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
