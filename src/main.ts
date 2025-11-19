import { getProductosPorCategoria } from "./services/getProductoPorCategoríaService.js";
import { getProducto } from "./services/getProductoService.js";

let btnId = document.getElementById("btn-id") as HTMLButtonElement
let btnCat = document.getElementById("btn-cat") as HTMLButtonElement
let salida = document.getElementById("salida") as HTMLDivElement

function getIdFromButton(): number{
    console.log("---------------------------------------")
    console.log("Llamada a la función GET ID FROM BUTTON")
    console.log("---------------------------------------")

    let input = prompt("Introduce el id del producto")
    let id = Number(input)

    if(Number.isNaN(id)){
        alert("No has introducido un número")
        return 0
    }
    return id
}

function getCatFromButton(): string{
    console.log("---------------------------------------")
    console.log("Llamada a la función GET CAT FROM BUTTON")
    console.log("---------------------------------------")

    let input = prompt("Introduce la categoría")
    let cat = String(input)

    return cat
}

function findProducto(id: number): void{
    console.log("----------------------------------")
    console.log("Llamada a la función FIND PRODUCTO")
    console.log("----------------------------------")

    getProducto(id)
    .then((producto) => {
        console.log("PROMISE RESOLVE, PASO POR EL THEN")
        console.log(producto, "producto")
        salida.textContent = `El producto buscado es ${producto}`
    })
    .catch((error) => {
        console.log("PROMISE REJECT, PASO POR EL CATCH")
        console.log(error, "error")
        salida.textContent = error
    })

}

async function findProductoPorCat(cat: string): Promise<void>{
    console.log("----------------------------------")
    console.log("Llamada a la función FIND PRODUCTO POR CAT")
    console.log("----------------------------------")

    try{
        let productosE = await getProductosPorCategoria(cat)
        console.log(productosE, "producto")

        salida.textContent = "Productos: " + productosE.map(p => `${p.nombre}`).join(", ");

    }catch(error: any){
        console.log("Error:", error.message)
        salida.textContent = "Categoría no encontrada"
    }finally{
        console.log("Final")
    }

}

btnId.addEventListener("click", () =>{

    console.log("---------------------------------------")
    console.log("Llamada a la función ADD EVENT LISTENER")
    console.log("---------------------------------------")

    try{
        let id = getIdFromButton()
        findProducto(id)
    } catch (error: any){
        salida.textContent = error.message
    }

})

btnCat.addEventListener("click", () =>{

    console.log("---------------------------------------")
    console.log("Llamada a la función ADD EVENT LISTENER")
    console.log("---------------------------------------")

    try{
        let cat = getCatFromButton()
        findProductoPorCat(cat)
        
    } catch (error: any){
        salida
        salida.textContent = error.message
    }

})