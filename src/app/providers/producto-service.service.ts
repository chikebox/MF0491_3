import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { MOCKS_PRODUCTOS } from './mocks-productos';

@Injectable()
export class ProductoService {
  productos:Producto[];
  constructor() {
    this.productos=[];
  }
  getAll(){
    let jsonData = JSON.parse(MOCKS_PRODUCTOS.stock);

    jsonData.forEach( element => {
      
      let producto = new Producto(
                          element.nombre, 
                          element.precio,
                          element.unidad,
                          element.oferta,
                          element.foto,
                          );

      this.productos.push(producto);
  });
  return this.productos;

}
}
