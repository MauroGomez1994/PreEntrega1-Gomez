



let productos = [];
let precios = [];
let total = 0;

function agregarProducto() {
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;

    productos.push(producto);
    precios.push(Number(precio));

    let carrito = document.getElementById("carrito");
    let elemento = document.createElement("li");
    elemento.innerHTML = producto + " - $" + precio;
    carrito.appendChild(elemento);

    total += Number(precio);
    document.getElementById("total").innerHTML = "Total: $" + total;

    if (total > 100) {
        let descuento = total * 0.1;
        total -= descuento;
        document.getElementById("total").innerHTML += " (Descuento del 10% aplicado)";
    }
}

for (let i = 0; i < productos.length; i++) {
    let carrito = document.getElementById("carrito");
    let elemento = document.createElement("li");
    elemento.innerHTML = productos[i] + " - $" + precios[i];
    carrito.appendChild(elemento);
}