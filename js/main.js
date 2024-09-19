class Productos {
    constructor(nombre, marca, categoria) {
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;

    }
}

const Almacen = [
    new Productos("Fideos", "Marolio", "Comida"),
    new Productos("Mayonesa", "Natura", "Aderezo"),
    new Productos("Rollo de cocina", "Elegante", "Limpieza"),
    new Productos("Vino", "Trumpeter", "Bebida"),
    new Productos("Galletitas", "Don Satur", "Comida"),
    new Productos("Chimichurri", "Alicante", "Aderezo"),
    new Productos("Lavandina", "Libertador", "Limpieza"),
    new Productos("Gaseosa", "Coca-Cola", "Bebida"),
];

function capitalize(text) {
    const firstLetter = text.charAt (0);
    const rest = text.slice(1);
    return firstLetter.toUpperCase() + rest;

}

function buscarProducto() {
    const opcion = parseInt (prompt("Buscar por: 1- Nombre, 2- Marca, 3- Categoria"));

    let resultados = [];

    switch(opcion) {
        case 1:
            const nombre = capitalize(prompt("Ingrese el nombre del producto:"));
            resultados = Almacen.filter(Productos => Productos.nombre.includes(nombre));
            break;

        case 2:
            const marca = capitalize(prompt("Ingrese la marca del producto:"));
            resultados = Almacen.filter(Productos => Productos.marca.includes(marca));
            break;

        case 3:
            const categoria = capitalize(prompt("Ingrese la categoria del producto:"));
            resultados = Almacen.filter(Productos => Productos.categoria.includes(categoria));
            break;

        default:
            console.log("Opción incorrecta. Vuelva a intentar.");
    }

    if (resultados.length > 0) {
        console.log("Productos encontrados:");

        resultados.forEach(Productos => {
            console.log('Nombre: ${producto.nombre}, Marca: ${producto.marca}, Categoria: ${producto.categoria}');
        });
    } else {
        console.log("No se encontraron productos.");
    }
}

function agregarProducto() {
    const nombre = capitalize(prompt("Ingrese el nombre del producto"));
    const marca = capitalize(prompt("Ingrese la marca del producto"));
    const categoria = capitalize(prompt("Ingrese la categoria del producto"));

    const nuevoProducto = new Productos(nombre, marca, categoria);

    Almacen.push(nuevoProducto);

    console.log("El producto se agregó exitosamente.");
}

function modificarProducto() {
    const nombre = capitalize(prompt("Ingrese el nombre del producto que desea modificar:"));
    const producto = Almacen.find(producto => producto.nombre === nombre);

    if (producto) {
        producto.nombre = capitalize(prompt("Ingrese el nuevo nombre del producto:", producto.nombre));
        producto.marca = capitalize(prompt("Ingrese la nueva marca del producto:", producto.marca));
        producto.categoria = capitalize(prompt("Ingrese la nueva categoria del producto:", producto.categoria));

        console.log("Producto modificado");
    } else {
        console.log("No se encontró el producto");
    }
}

