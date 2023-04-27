class Articulo{
    constructor(id, nombre, tipo, deporte, genero, precio, cantidad, img){
        this.id = id
        this.nombre = nombre
        this.tipo = tipo
        this.deporte = deporte
        this.genero = genero
        this.precio = precio
        this.cantidad = cantidad
        this.img = img
    }
    descripArticulo(){
        return this.nombre + " " + this.deporte +" "+ this.genero
    }
}
