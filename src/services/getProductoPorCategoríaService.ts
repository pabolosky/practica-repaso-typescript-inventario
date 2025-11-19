import { productos } from "../data/info.js"
import { Producto } from "../domain/entities/productos"

export function getProductosPorCategoria(categoria: string): Promise<Producto[]>{

    console.log("-----------------------------------------------")
    console.log("Llamada a la función GET PRODUCTO POR CATEGORÍA")
    console.log("-----------------------------------------------")

    let promesa = new Promise <Producto[]> ((resolve, reject) =>{

        

        setTimeout(()=>{
            let productosF = productos.filter( p => p.categoria === categoria)

            if(productosF.length > 0 ){
                resolve(productosF)
            }else{
                reject(`No se encontraron productos con la categoría ${categoria}`)
            }
        }, 1000)
    })

    return promesa as Promise<Producto[]>
}