import { productos } from "../data/info.js";
export function getProductosPorCategoria(categoria) {
    console.log("-----------------------------------------------");
    console.log("Llamada a la función GET PRODUCTO POR CATEGORÍA");
    console.log("-----------------------------------------------");
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            let productosF = productos.filter(p => p.categoria === categoria);
            if (productosF.length > 0) {
                resolve(productosF);
            }
            else {
                reject(`No se encontraron productos con la categoría ${categoria}`);
            }
        }, 1000);
    });
    return promesa;
}
