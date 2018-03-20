import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../providers/producto-service.service';
import { Producto } from '../models/producto';
import { Carrito } from '../models/carrito';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  stock:Producto[];
  carrito:Carrito;
  activo:boolean;
  searchText:string;
  constructor( public productoService:ProductoService) {
    this.carrito=new Carrito();
    this.stock=[];
    this.activo=false;
    this.searchText="";
   }

  ngOnInit() {
    this.stock=this.productoService.getAll();
    console.log("Productos"+ this.stock);
  }
  sumar(producto:Producto){
    producto.cantidad=producto.cantidad+1;
  }
  restar(producto:Producto){
    if(producto.cantidad-1>=1){
      producto.cantidad=producto.cantidad-1;
    }
  }
  subirAlCarrito(producto:Producto){
    //añadimos el producto al carrito
    this.carrito.productos.push(producto);
    //añadimos la cantidad de ese producto
    this.carrito.numProductos=this.carrito.numProductos+producto.cantidad;
    //actulizamos el precio del carrito (producto.precioOriginal x producto.cantidad)
    this.carrito.precio=this.carrito.precio + (producto.precioOriginal * producto.cantidad);
    console.log( this.carrito.productos );
    console.log( this.carrito.numProductos );
    console.log(this.carrito.precio);
  }
  cambiarActivo(){
    this.activo=!this.activo;
  }
  vaciarCarrito(){
    this.carrito=new Carrito();
  }
}
