import { productos } from "../data/info.js"
import { Producto } from "../domain/entities/productos"

export function getProducto(id: number): Promise<Producto>{
    console.log("---------------------------------")
    console.log("Llamada a la función GET PRODUCTO")
    console.log("---------------------------------")

    let promesa = new Promise((resolve, reject) =>{

        setTimeout(()=>{
            let producto = productos.find( p => p.id === id) ?.nombre

            if(producto){
                resolve(producto)
            }else{
                reject(`Producto con id ${id} no existe`)
            }
        }, 800)
    })

    return promesa as Promise<Producto>
}








