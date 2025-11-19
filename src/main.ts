import { getProducto } from "./services/getProductoService.js";

let btn = document.getElementById("btn-id") as HTMLButtonElement
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

btn.addEventListener("click", () =>{

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