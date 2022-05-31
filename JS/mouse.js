const nodo = document.getElementById("miCarrito")
console.log (nodo)

//EVENTO DEL MOUSSE EN EL HTML "PRODUCTOS"--> "AGREGAR AL CARRITO"

const botonProducto= document.getElementsByClassName("btn-primary")
botonProducto.addEventListener ("mousedown", () =>{
    botonProducto.innerHTML= "Agregado"
botonProducto.onclick ("click", () =>{
    document.body.setAttribute("style", "background-color: $colorSecundario")
})
})

//
