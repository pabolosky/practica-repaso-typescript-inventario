var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getProductosPorCategoria } from "./services/getProductoPorCategoríaService.js";
import { getProducto } from "./services/getProductoService.js";
let btnId = document.getElementById("btn-id");
let btnCat = document.getElementById("btn-cat");
let salida = document.getElementById("salida");
function getIdFromButton() {
    console.log("---------------------------------------");
    console.log("Llamada a la función GET ID FROM BUTTON");
    console.log("---------------------------------------");
    let input = prompt("Introduce el id del producto");
    let id = Number(input);
    if (Number.isNaN(id)) {
        alert("No has introducido un número");
        return 0;
    }
    return id;
}
function getCatFromButton() {
    console.log("---------------------------------------");
    console.log("Llamada a la función GET CAT FROM BUTTON");
    console.log("---------------------------------------");
    let input = prompt("Introduce la categoría");
    let cat = String(input);
    return cat;
}
function findProducto(id) {
    console.log("----------------------------------");
    console.log("Llamada a la función FIND PRODUCTO");
    console.log("----------------------------------");
    getProducto(id)
        .then((producto) => {
        console.log("PROMISE RESOLVE, PASO POR EL THEN");
        console.log(producto, "producto");
        salida.textContent = `El producto buscado es ${producto}`;
    })
        .catch((error) => {
        console.log("PROMISE REJECT, PASO POR EL CATCH");
        console.log(error, "error");
        salida.textContent = error;
    });
}
function findProductoPorCat(cat) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("----------------------------------");
        console.log("Llamada a la función FIND PRODUCTO POR CAT");
        console.log("----------------------------------");
        try {
            let productosE = yield getProductosPorCategoria(cat);
            console.log(productosE, "producto");
            salida.textContent = "Productos: " + productosE.map(p => `${p.nombre}`).join(", ");
        }
        catch (error) {
            console.log("Error:", error.message);
            salida.textContent = "Categoría no encontrada";
        }
        finally {
            console.log("Final");
        }
    });
}
btnId.addEventListener("click", () => {
    console.log("---------------------------------------");
    console.log("Llamada a la función ADD EVENT LISTENER");
    console.log("---------------------------------------");
    try {
        let id = getIdFromButton();
        findProducto(id);
    }
    catch (error) {
        salida.textContent = error.message;
    }
});
btnCat.addEventListener("click", () => {
    console.log("---------------------------------------");
    console.log("Llamada a la función ADD EVENT LISTENER");
    console.log("---------------------------------------");
    try {
        let cat = getCatFromButton();
        findProductoPorCat(cat);
    }
    catch (error) {
        salida;
        salida.textContent = error.message;
    }
});
