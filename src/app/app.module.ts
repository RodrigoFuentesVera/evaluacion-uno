import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { ProductosComponent } from './productos/productos.component';
import { CarroComponent } from './carro/carro.component';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    ProductosComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
