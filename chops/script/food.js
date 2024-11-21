import {cart, addToCart} from '../script/cart.js';
import {products} from '../script/product.js';


let productFood = '';

products.forEach((product) =>{  //looping and generating the html
      productFood = productFood + `  
          <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.Image}">

            <button class="add-to-cart-button button-primary  js-add-to-cart"
            data-product-id= "${product.id}">
              <img src="/assets/images/icon-add-to-cart.svg" alt="">
               Add to cart
            </button>
          </div>

          <div class="product-name">
            ${product.first}
          </div>

          <div class="product-name">
            ${product.name}
          </div>

          <div class="product-price">
            $${(product.priceCent/ 100).toFixed(2)}
          </div>
        </div>
        
        `;
});


document.querySelector('.js-product-grid').innerHTML = productFood;

function updateCartQuantity() {
    //Calculating the total quanity of product on the cart
  let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    })

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart') //Making the add to cart button interractive
.forEach((button) =>{
  button.addEventListener( 'click', () =>{
    const productId = button.dataset.productId; 
    // dataset gives all the data attribute associated with the element
     //e.g when a particular product is click it picked it.

        addToCart(productId)
        updateCartQuantity();
    
  });
})

