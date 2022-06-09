const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []
 
Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item= button.closest('.products')
    const itemTitle =item.querySelector('.products-nomber').textContent;
    const itemPrice =item.querySelector('.products-precio').textContent;
    const itemImg =item.querySelector('.products-img-top').src;
    
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
}

function addItemCarrito(newItem){

    const InputElement = tbody.getElementsByClassName('input__element')
    for(let i=0; i < carrito.length; i++){
        if (carrito [i].title.trim() === newItem.title.trim()){ 
        carrito [i].cantidad ++;
        const inputValue = InputElement[i]
        inputValue.value++;
        CarritoTotal()
        return null;
    }
}
    carrito.push(newItem)
    renderCarrito()
}


function renderCarrito(){
    tbody.innerHTML= ''
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const Content = `
         <td class="table__productos">
          <img src= ${item.img}>
          <h6 class="table__nombre">${item.title}</h6>
          </td>
          <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class ="input__element">
              <button class="delete btn btn-danger">x</button>
          </td>
          <td class="table__precio"><p>${item.precio} </p></td>`

          tr.innerHTML= Content;
          tbody.append(tr)

          tr.querySelector(".delete"). addEventListener('click', removeItemCarrito)
          tr.querySelector(".input__element"). addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
}

function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) =>{
        const precio = Number (item.precio.replace ("$", ''))
        Total= Total + precio*item.cantidad
    })

    itemCartTotal.innerHTML = `Total $ ${Total} `
    addLocalStorage()
}


function removeItemCarrito (e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest("ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for (let i=0; ti<carrito.length; i++){
        if (carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1)
        }
    }
    tr.remove()
    CarritoTotal()
}


function sumaCantidad (e) {
    const sumaInput = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        item.title.trim() === title && sumaInput< 1 ? (sumaInput.value = 1) : sumaInput.value;  //OPERADORES
        item.cantidad = sumaInput.value
        CarritoTotal()
    })
console.log (carrito)
}

function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function (){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        renderCarrito
    }
}





