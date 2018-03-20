import { Component, OnInit, Input } from '@angular/core';
import { Carrito } from '../models/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  @Input('carrito') carrito:Carrito;
  constructor() {
   }

  ngOnInit() {
  }
  
}
