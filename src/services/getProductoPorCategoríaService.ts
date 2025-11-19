import { productos } from "../data/info.js"
import { Producto } from "../domain/entities/productos"

export function getProductosPorCategoria(categoria: string): Promise<Producto[]>{

    console.log("-----------------------------------------------")
    console.log("Llamada a la función GET PRODUCTO POR CATEGORÍA")
    console.log("-----------------------------------------------")

    let promesa = new Promise <Producto[]> ((resolve, reject) =>{

        

        setTimeout(()=>{
            let productosF = productos.find( p => p.categoria === categoria) ?.nombre

            if(productosF.length as > 0 ){
                resolve(productosF)
            }else{
                reject(`Producto con la categoría ${categoria} no existe`)
            }
        }, 1000)
    })

    return promesa as Promise<Producto[]>
}