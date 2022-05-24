class Producto{
    constructor  (id, nombre, precio){
        this.id = id
        this.nombre=nombre
        this.precio=precio
    }
}
const producto1 = new Producto (1, "Champú sólido 60gr", 480)
const producto2 = new Producto (2, "Champú sólido 100gr", 580)

const productos = [producto1, producto2]
console.log (productos)


Menu();

function Menu () {
    let opcion = 0
    while (opcion !== 4){
        let opcion = Number (prompt(`Seleccione una acción
                            1. Agregar producto
                            2. Eliminar producto
                            3. Buscar producto
                            4. Salir`));
    switch (opcion){
        case 1: {
            agregarProducto();
            break
        }
        case 2: {
            eliminarProducto();
            break
        }
        case 3: {
            buscarProducto();
        }
        default: {
            alert ("Opción inválida");
        }
    }
    }
}

function agregarProducto() {
    let id =1
    if (productos.lenght>0){
        id=productos[productos.lenght-1].id+1
    }
        let nombre = prompt ("Agregue un producto:")
        let precio = prompt ("Precio:")
        let producto = new Producto (id, nombre, precio)

        productos.push(producto);
}   


function eliminarProducto() {
    let id= Number(prompt("Ingrese el id del producto que desee eliminar:"));

    let encontrado = productos.find((producto)=>producto.id===id);

   if(!encontrado)
   {
       alert("Producto no Encontrado");
   }
   else{

        let index = productos.indexOf(encontrado);

        productos.splice(index,1);

        console.log("Borrar producto");
        console.log(productos);
   }
}


function buscarProducto (){
    let nombre = prompt("Ingresa el nombre del producto que deseeas buscar");

    let encontrados = productos.filter((producto)=>producto.nombre.toLowerCase().indexOf(nombre.toLocaleLowerCase())!==-1);

    console.log(encontrados);
}