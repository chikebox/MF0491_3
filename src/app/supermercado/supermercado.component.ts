import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../providers/producto-service.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  stock:Producto[];
  constructor( public productoService:ProductoService) {
    this.stock=this.productoService.getAll();
   }

  ngOnInit() {
  }

}
