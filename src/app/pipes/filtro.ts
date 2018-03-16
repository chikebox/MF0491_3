import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Producto[], searchText: string): Producto[] {

    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    let nombre="";
    return items.filter( producto => {
        nombre=producto.nombre;
        nombre=nombre.toLowerCase();
        return nombre.includes(searchText);
    });
   }

}