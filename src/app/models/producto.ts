export class Producto{
    nombre:string;
    precio:number;
    unidad:string;
    oferta:number;
    foto:string;
    constructor(nombre:string, precio:number, unidad:string, oferta:number, foto:string){
        this.nombre=nombre;
        this.precio=precio;
        this.unidad=unidad
        this.oferta=oferta;
        this.foto=foto;
    }
    
}