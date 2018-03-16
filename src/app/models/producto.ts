export class Producto{
    nombre:string;
    precio:number;
    unidad:string;
    oferta:number;
    foto:string;
    precioOriginal:number;
    cantidad:number;
    constructor(nombre:string, precio:number, unidad:string, oferta:number, foto:string){
        this.nombre=nombre;
        this.precio=precio;
        this.unidad=unidad
        this.oferta=oferta;
        this.foto=foto;
        this.precioOriginal=Math.round((this.precio-this.precio*this.oferta/100)*100)/100;
        this.cantidad=1;
    }
    
}