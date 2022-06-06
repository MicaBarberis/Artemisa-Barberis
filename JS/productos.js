const productos = [];

cargarProductos()
crearProductos()

function cargarProductos(){
    data.forEach((dato) => {
        const producto = new Producto (
            dato.id,
            dato.productsNomber,
            dato.productPrice,
            dato.productImage,
        )
        productos.push(Producto)
    });
    console.table(productos);
}

function crearProductos() {
    const contenedor = document.createElement("div")
    contenedor.classList.add ("ecommerceMain")

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
                    <img src= '${producto.productImage}/>
                    </div>
                    <div>
                    ${producto.productsNomber}
                    ${producto.productPrice}
                    </div>`;
    const buttonActions = document.createElement("button")
    buttonActions.innerHTML= "Agregar al carrito"
    document.body.appendChild(buttonActions)

    nodo.addEventListener ("mousedown", () => {
        addProductToCarrito(nodo.producto);
    })
}




const addProductToCarrito = () => {
    let circle = document.getElementById(`circle`)

    Object.values(carritoContainer). forEach((items) => {
        localStorage.setItem(items.id, JSON.stringify(items))
    })

    if (localStorage.length >=0) {
        circle.textContent = localStorage.length
    }
}

fetchData()