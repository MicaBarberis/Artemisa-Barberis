class Producto{
    constructor  (id, nombre, precio){
        this.id = id
        this.nombre=nombre
        this.precio=precio
    }
}
const producto1 = new Producto(1, "Champú sólido coco y almendras 60gr", 480);
const producto2 = new Producto(2, "Champú sólido Jojoba y bentontia 60gr", 480);
const producto3 = new Producto(3, "Champú sólido Argán y karité 60gr", 480);
const producto4 = new Producto(4, "Champú sólido Ortiga y romero", 500);
const producto5 = new Producto(5, "Champú sólido Manzanilla y avena 60gr", 500);


const productos = [producto1, producto2, producto3, producto4, producto5];
console.log(productos);

inicializarAplicacion();
Menu();


function Menu () {
    let opcion = 0
    while (opcion !== 6){
        let opcion = Number (prompt(`Seleccione una acción:
                            1. Agregar producto
                            2. Eliminar producto
                            3. Modificar producto
                            4. Buscar producto
                            5. Mostrar productos
                            6. Salir`));
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
            modificarProductos();
            break
        }
        case 4: {
            buscarProducto();
        }
        case 5:{
            mostrarProductos()
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
        return producto

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

function modificarProductos(){
    let id= Number(prompt("Ingrese el id del producto que desee modificar"));

   let existe = productos.some((producto)=>producto.id===id);

   if(existe)
   {
       let encontrado = productos.find((producto)=>producto.id===id);
       let nuevoNombre = prompt("Ingrese el nuevo nombre");
       let nuevoPrecio = prompt("Ingrese el nuevo precio");

       encontrado.nombre = nuevoNombre;
       encontrado.precio= nuevoPrecio;

       console.log("Cambios")
       console.log(productos);
   }
   else
   {
       alert("Producto no econtrado")
   }
}

function buscarProducto (){
    let nombre = prompt("Ingresa el nombre del producto que deseas buscar");

    let encontrados = productos.filter((producto)=>producto.nombre.toLowerCase().indexOf(nombre.toLocaleLowerCase())!==-1);

    console.log(encontrados);
}


function mostrarProductos(){
    for (const producto of productos){
        let contenedor = document.createElement("div")
        contenedor.innerHTML = `<h3><b> Id </b> ${producto.id} </h3>
                                <p><b> Nombre </b> ${producto.nombre} </p>
                                <p><b> Precio </b> ${producto.precio} </p>`
}
}
document.body.appendChild(contenedor)
mostrarProductos(producto)



function inicializarAplicacion()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML="Mi carrito";

    tituloH1.setAttribute("style","color:green;text-align:center");
    tituloH1.classList.add("miTitulo");
    tituloH1.classList.add("miTitulo2");

    document.body.appendChild(tituloH1);

    const subtitulo = document.createElement("p");
    subtitulo.innerText="Listado de productos:";

    document.body.appendChild(subtitulo);

}