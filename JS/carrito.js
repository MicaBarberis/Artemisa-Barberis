function inicializarAplicacion(){
    crearTitulo()
    crearMenu()
}

function crearTitulo (){
    const tituloH1 = document.createElement("h1")
    tituloH1.innerHTML= "Mi carrito"
    document.body.appendChild(tituloH1)
}
function crearMenu (){

    let opciones = ["Mostrar productos", "Agregar productos", "Buscar productos"]
    opciones.forEach((opcion) => {
    const boton = document.createElement ("button")
    boton.innerHTML= opcion

    if (opcion ==="Mostrar productos"){
        boton.addEventListener("click", () => {
            mostrarProducto()
        })
    }
    else if (opcion === "Agregar producto"){
        boton.addEventListener("click", () =>{
            agregarProducto()
            mostrarProducto()
        })
    }
    else if (opcion === "Buscar producto"){
        boton.addEventListener("click", () =>{
            let filtrados = buscarProducto()

            mostrarProducto (filtrados)
        })
    }

        document.body.appendChild (boton)
})
}