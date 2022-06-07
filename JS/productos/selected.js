//AGREGAR PRODUCTO AL CARRITO

const getSelectedProducts = () => {
    let ecommerceContainer = {}
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        let parseArticle = JSON.parse (localStorage.getItem(key))
        
        ecommerceContainer[parseArticle.id] = {...parseArticle}
    }
    return ecommerceContainer
}
getSelectedProducts()


let selectedProducts = getSelectedProducts ()
const leerCarritoVacio = document.getElementById ('titleDisplayNone')
const leerCarritoVacio2 = document.getElementById ('titleDisplayNone2')
const imgCarritoVacio = document.getElementById ('imgCarritoVacio')
const ecommerceContainer = document.getElementById ('items')
const productsNomber= document.getElementById ('productsNomber')


//EN CARRITO.HTML:
const fillCarrito = () => {
    if (Object.keys(selectedProducts).length <=0) {
        ProductsTitle.classList.add(`leerCarrito2`)
        leerCarritoVacio.classList.remove (`titleDisplayNone`)
        leerCarritoVacio2.classList.remove (`titleDisplayNone2`)
        imgCarritoVacio.classList.remove(`titleDisplayNone`)
    }
    else{
        leerCarritoVacio.classList.add(`titleDisplayNone`)
        leerCarritoVacio2.classList.add (`titleDisplayNone2`)
        imgCarritoVacio.classList.add(`titleDisplayNone`)

        productsNomber.classList.remove(`titleDisplayNone`)
        productsNomber.classList.remove(`productsNomber`)
    }
    productsNomber.classList.remove(`productsNomber`)

    carritoContainer.innerHTML = ''


const template = document.querySelector(`#template-miCarrito`).content
const fragment = document.createDocumentFragment()

Object.values(selectedProducts).forEach((producto) => {
    template.querySelector(`.productsDetails p`).textContent = producto.productsNomber
    template.querySelector(`.productsDetails img`). src = producto.imgCarrito
    template.querySelector(`.optionsCart .price`). textContent= `$${producto.price * producto.quantity}`
    template.querySelector(`.optionsCart .numberInput`). textContent = producto.quantity


    
//BOTONES + Y -
template.querySelector(`.menos`).id = producto.id
template.querySelector(`.mas`).id = producto.id

const clone = template.cloneNode (true)
fragment.appendChild(clone)
})

ecommerceMain.appendChild(fragment)

fillTotalMonto()
buttonCompra()
}

const buttonActions = () => {
    const masProduct = document.querySelectorAll (`#items .masProduct`)
    const menosProduct = document.querySelectorAll(`#items .menosProduct`)


    masProduct.forEach(btn => {
        btn.addEventListener(`click`, () => {
            //se agrega al objeto que tenemos
            const addProd = selectedProducts [btn.id]
            addProd.quantity++
            selectedProducts[btn.id] = {...addProd}
            //se agrega al localStorage
            let selectedProducts = JSON.parse(localStorage.getItem(btn.id))
            let newQuantityValue = {...selectedProducts}
            newQuantityValue.quantity++
            localStorage.setItem(btn.id, JSON.stringify(newQuantityValue))
            fillCarrito
        })
    })

    menosProduct.forEach(btn =>{
        btn.addEventListener(`click`, () => {
            const lessProd = selectedProducts[btn.id]
            lessProd.quantity--
            if (lessProd.quantity ===0) {
                delete selectedProducts [btn.id]
            }
            else {
                selectedProducts[btn.id] = {...lessProd}
            }
            if (Object.keys (selectedProducts). length <=0) {
                productsNomber.classList.add(`ProductNomber`)
            }
            //se agrega al localStorage
            let selectedCosmetico = JSON.parse(localStorage.getItem(btn.id))
            let newQuantityValue = { ...selectedProducts}
            newQuantityValue.quantity--

            if (newQuantityValue.quantity===0) {
                localStorage.removeItem(btn.id)
            }
            else{
                localStorage.setItem(btn.id, JSON.stringify (newQuantityValue))
            }

            fillCarrito()
        })
    })
}
