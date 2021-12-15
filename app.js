const productName = document.querySelector('#nombreProducto');
const productPrice = document.querySelector('#precio');
const buttonSave = document.querySelector('#btnGuardar');
const buttonCancel = document.querySelector('#btnLimpiar');
const productList = document.querySelector('#listaProductos')


const createNewProduct = (name, price) => {
   const ionCard = document.createElement('ion-card');
   const newProductItem = document.createElement('ion-card-content');
   newProductItem.textContent = name + ': $' + price 
   ionCard.appendChild(newProductItem);
   productList.appendChild(ionCard)
}

buttonSave.addEventListener('click',() =>{
    const name = productName.value;
    const price = productPrice.value;

    createNewProduct(name, price)

})