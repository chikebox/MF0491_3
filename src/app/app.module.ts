import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductoService } from './providers/producto-service.service';
import { FilterPipe } from './pipes/filtro';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    FilterPipe,
    CarritoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    ProductoService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
