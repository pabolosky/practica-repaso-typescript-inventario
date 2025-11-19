import { productos } from "../data/info.js";
export function getProducto(id) {
    console.log("---------------------------------");
    console.log("Llamada a la función GET PRODUCTO");
    console.log("---------------------------------");
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            var _a;
            let producto = (_a = productos.find(p => p.id === id)) === null || _a === void 0 ? void 0 : _a.nombre;
            if (producto) {
                resolve(producto);
            }
            else {
                reject(`Producto con id ${id} no existe`);
            }
        }, 800);
    });
    return promesa;
}
