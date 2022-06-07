const productos = [];

cargarProductos();
crearProductos();

function cargarProductos(){
    data.forEach((dato) => {
        const producto = new Producto (
            dato.productsNomber,
            dato.productPrice,
        );
        productos.push(producto);
    });
    console.log("Productos:")
    console.table(productos);
}


function crearProductos() {
    const contenedor = document.createElement("div");
    contenedor.classList.add ("ecommerceContainer")

    productos.forEach((producto) => {
        const card = document.createElement ("div")
        card.classList.add("cardProducts")
        mostrarCard(card, producto);

        contenedor.appendChild(card)
    } )
    document.body.appendChild(contenedor);
}


function mostrarCard(nodo, producto){
    nodo.innerHTML= `<div>
                    <img src= '${producto.image}/>
                    </div>
                    <p>
                    ${producto.name}
                    ${producto.price}
                    </p>`;
    const botonProducto= document.getElementsByClassName("buttonActions")
    botonProducto.innerHTML= "Agregar al carrito"
    document.body.appendChild(buttonActions)

    nodo.addEventListener ("click", () => {
        addProductToCarrito(nodo.producto);
    })
}






