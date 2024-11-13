import {cart, addToCart} from '../script/cart.js';
import {vendor} from '../script/product.js';


let vendorFood = '';

vendor.forEach((item) =>{
      vendorFood = vendorFood + `  
          <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${item.Image}">

            <button class="add-to-cart-button button-primary  js-add-to-cart"
            data-product-vendor-name= ${item.id}>
              <img src="/assets/images/icon-add-to-cart.svg" alt="">
               Add to cart
            </button>
          </div>

          <div class="product-name">
            ${item.first}
          </div>

          <div class="product-name">
            ${item.name}
          </div>

          <div class="product-price">
            ${(item.priceCent/ 100).toFixed(2)}
          </div>
        </div>
        
        `;
});

//console.log(vendorFood);

document.querySelector('.js-product-grid').innerHTML = vendorFood;

function UpdateCartQuantity() {
      //Calculating the total quanity of product on the cart
  let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    })

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart') //Making the add to cart button interractive
.forEach((button) =>{
  button.addEventListener( 'click', () =>{
    const productVendorName = button.dataset.productVendorName; 
    // dataset gives all the data attribute associated with the element
     //e.g when a particular product is click it picked it.

        addToCart(productVendorName)
        UpdateCartQuantity();
    
  });
})

